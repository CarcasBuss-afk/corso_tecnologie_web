/* Le API dell'allievo nell'Officina web: scegliere la classe, vedere il percorso, lavorare
 * su un compito fase per fase, chiedere al tutor. L'allievo è riconosciuto dall'account
 * Google della scuola (auth.ts); i parametri del compito sono suoi (regole.ts).
 * Validazione solo qui: al client arriva solo la fase da fare adesso, con la prova mostrata;
 * le prove nascoste restano sul server. */
import 'server-only';
import { FieldValue, Timestamp } from 'firebase-admin/firestore';
import { getDb } from '@/lib/firebaseAdmin';
import type { Utente } from './auth';
import { eCompito, eEsame, fasiDi, generaCompito, lezioneCompito, livelloDi, SEZIONI, sezioneDi, titoloCompito, type Compito, type CompitoId } from './compiti';
import { ApiError, testo } from './http';
import { eseguiProveServer } from './motore/esecutoreServer';
import type { Fase, Sorgente } from './motore/tipi';
import { valuta } from './motore/valuta';
import { verificaConsegna } from './motore/verifica';
import { richiestaAmmessa } from './rateLimit';
import { bonusSfide, mediaConBonus, percorsoDi, semeDa, votoSeFinisce } from './regole';
import { allieviRef, appartenenzeRef, classiRef, lavoroVuoto, MAX_GIUDIZI, type AllievoDoc, type AppartenenzaDoc, type ClasseDoc, type GiudizioDoc, type LavoroDoc } from './store';
import { chiediTutor } from './tutor';
import { MAX_DOMANDA_TUTOR, MAX_DOMANDE_TUTOR } from './tutorPrompt';

/** Il JavaScript dell'allievo non supera questa lunghezza: contro gli incidenti, non contro gli allievi. */
const MAX_CODICE = 12_000;

function limita(utente: Utente): void {
  if (!richiestaAmmessa(`officina:${utente.uid}`)) {
    throw new ApiError(429, 'RATE_LIMITED', 'Troppe richieste: aspetta un momento e riprova');
  }
}

/* ----------------------------------------------------------------------- io */

/** Chi sono e in quali classi sto. */
export async function io(_body: Record<string, unknown>, utente: Utente) {
  const snap = await appartenenzeRef().doc(utente.uid).get();
  const app = snap.data() as AppartenenzaDoc | undefined;
  const classi = await Promise.all(
    (app?.classi ?? []).map(async (id) => {
      const c = (await classiRef().doc(id).get()).data() as ClasseDoc | undefined;
      return c ? { id, nome: c.nome, chiusa: c.chiusa } : null;
    }),
  );
  return { uid: utente.uid, email: utente.email, nome: utente.nome, classi: classi.filter((c) => c !== null) };
}

/** Le classi aperte fra cui scegliere la propria: niente codice da dettare. */
export async function classi() {
  const snap = await classiRef().where('chiusa', '==', false).get();
  return {
    classi: snap.docs
      .map((d) => ({ id: d.id, nome: (d.data() as ClasseDoc).nome }))
      .sort((a, b) => a.nome.localeCompare(b.nome, 'it')),
  };
}

/* -------------------------------------------------------------------- entra */

/** Entra nella classe scelta: una volta sola, poi l'account basta. */
export async function entra(body: Record<string, unknown>, utente: Utente) {
  limita(utente);
  const classeId = testo(body.classeId, 64);
  if (!classeId) throw new ApiError(400, 'INVALID_BODY', 'Scegli la classe');
  const classe = (await classiRef().doc(classeId).get()).data() as ClasseDoc | undefined;
  if (!classe || classe.chiusa) throw new ApiError(404, 'CLASSE_NON_TROVATA', 'Classe inesistente o chiusa');

  const allievoRef = allieviRef(classeId).doc(utente.uid);
  await getDb().runTransaction(async (tx) => {
    const esistente = await tx.get(allievoRef);
    if (!esistente.exists) {
      tx.set(allievoRef, { uid: utente.uid, nome: utente.nome, email: utente.email, entratoAt: FieldValue.serverTimestamp(), lavori: {} });
    }
    tx.set(appartenenzeRef().doc(utente.uid), { nome: utente.nome, email: utente.email, classi: FieldValue.arrayUnion(classeId) }, { merge: true });
  });
  return { classeId, nome: classe.nome };
}

/* ------------------------------------------------------------------ contesto */

type Contesto = {
  classeId: string;
  classe: ClasseDoc;
  allievo: AllievoDoc;
  allievoRef: FirebaseFirestore.DocumentReference;
};

/** La classe e l'allievo dentro: senza appartenenza non si vede niente. */
async function contesto(body: Record<string, unknown>, utente: Utente, tx?: FirebaseFirestore.Transaction): Promise<Contesto> {
  const classeId = testo(body.classeId, 64);
  if (!classeId) throw new ApiError(400, 'INVALID_BODY', 'Manca la classe');
  const classeRef = classiRef().doc(classeId);
  const allievoRef = allieviRef(classeId).doc(utente.uid);
  const [c, a] = tx ? await tx.getAll(classeRef, allievoRef) : await getDb().getAll(classeRef, allievoRef);
  const classe = c.data() as ClasseDoc | undefined;
  const allievo = a.data() as AllievoDoc | undefined;
  if (!classe || !allievo) throw new ApiError(404, 'CLASSE_NON_TROVATA', 'Non sei in questa classe: scegli la tua classe');
  return { classeId, classe, allievo, allievoRef };
}

const semeDi = (uid: string, compito: CompitoId) => semeDa(`${uid}|${compito}`);

/** Il compito richiesto, se è nel percorso e sbloccato per questo allievo. */
function compitoAperto(allievo: AllievoDoc, compitoId: string) {
  if (!eCompito(compitoId)) throw new ApiError(404, 'COMPITO_NON_TROVATO', 'Compito inesistente');
  const voce = percorsoDi(allievo.lavori ?? {}).find((v) => v.id === compitoId);
  if (!voce) throw new ApiError(404, 'COMPITO_NON_TROVATO', 'Compito inesistente');
  if (voce.stato === 'bloccato') throw new ApiError(403, 'BLOCCATO', 'Questo compito si sblocca quando finisci il precedente');
  return { id: compitoId, voce, lavoro: allievo.lavori?.[compitoId] ?? lavoroVuoto() };
}

/** La fase come la vede l'allievo: la consegna e la sola prova mostrata. */
function fasePubblica(fase: Fase, indice: number) {
  return { indice, consegna: fase.consegna, prova: fase.prove[0], regola: fase.regola ?? null };
}

/* ------------------------------------------------------------------ compiti */

/** Il percorso dell'allievo: tutti i compiti con lo stato, le sezioni in cui stanno, e la media con il bonus delle sfide. */
export async function compiti(body: Record<string, unknown>, utente: Utente) {
  const ctx = await contesto(body, utente);
  const voci = percorsoDi(ctx.allievo.lavori ?? {});
  return {
    classe: { id: ctx.classeId, nome: ctx.classe.nome, chiusa: ctx.classe.chiusa },
    compiti: voci.map((v) => ({
      ...v,
      fasiTotali: fasiDi(v.id),
      titolo: titoloCompito(v.id),
      lezione: lezioneCompito(v.id),
      votoSeFinisci: votoSeFinisce(v.consigli),
      sezione: sezioneDi(v.id).id,
      esame: eEsame(v.id),
      livello: livelloDi(v.id),
    })),
    sezioni: SEZIONI.map((s) => ({ id: s.id, titolo: s.titolo, compiti: s.compiti })),
    media: mediaConBonus(voci),
    bonus: bonusSfide(voci),
  };
}

/** Il JavaScript da cui l'editor riparte: la bozza, altrimenti il codice della fase prima, altrimenti quello iniziale. */
function codiceDaCui(lavoro: LavoroDoc, compito: Compito): string {
  const faseIniziale = compito.fasi[0]?.codiceIniziale ?? '';
  if (lavoro.bozza) return lavoro.bozza;
  if (lavoro.fasi > 0) return lavoro.codice?.[String(lavoro.fasi - 1)] ?? faseIniziale;
  return faseIniziale;
}

/** Il compito aperto: scheda, pagina, fase da fare, codice da cui ripartire, conversazione col tutor. */
export async function compito(body: Record<string, unknown>, utente: Utente) {
  const ctx = await contesto(body, utente);
  const { id, voce, lavoro } = compitoAperto(ctx.allievo, testo(body.compitoId, 64));
  const c = generaCompito(id, semeDi(utente.uid, id));
  const finito = voce.stato === 'finito';
  const fase = !finito ? c.fasi[lavoro.fasi] : undefined;
  return {
    id,
    classeChiusa: ctx.classe.chiusa,
    esame: Boolean(c.scheda.esame),
    fasi: lavoro.fasi,
    fasiTotali: c.fasi.length,
    consigli: lavoro.consigli,
    domandeRimaste: domandeRimaste(lavoro.consigli),
    finito,
    voto: voce.voto,
    votoSeFinisci: votoSeFinisce(lavoro.consigli),
    scheda: c.scheda,
    pagina: c.pagina,
    pannelli: c.pannelli,
    fase: fase ? fasePubblica(fase, lavoro.fasi) : null,
    codice: finito ? (lavoro.codice?.[String(c.fasi.length - 1)] ?? '') : codiceDaCui(lavoro, c),
    codicePromosso: lavoro.codice ?? {},
    tutor: (lavoro.tutor ?? []).map((s) => ({ fase: s.fase + 1, domanda: s.domanda, risposta: s.risposta })),
    errori: lavoro.errori,
  };
}

/* ----------------------------------------------------------------- consegna */

function intero(v: unknown): number {
  return typeof v === 'number' ? v : typeof v === 'string' && v.trim() !== '' ? Number(v) : Number.NaN;
}

/** Controlli comuni a consegna e tutor: classe aperta, compito sbloccato e non finito. */
function lavoroInCorso(ctx: Contesto, body: Record<string, unknown>, uid: string) {
  if (ctx.classe.chiusa) throw new ApiError(403, 'CLASSE_CHIUSA', "L'Officina è chiusa: il prof la riapre alla prossima lezione");
  const { id, voce, lavoro } = compitoAperto(ctx.allievo, testo(body.compitoId, 64));
  if (voce.stato === 'finito') throw new ApiError(403, 'FINITO', 'Hai già finito questo compito!');
  const c = generaCompito(id, semeDi(uid, id));
  return { id, lavoro, compito: c, fase: c.fasi[lavoro.fasi] };
}

/** La fase che l'allievo sta consegnando: i controlli, uguali nei due tempi della consegna. */
function faseInConsegna(ctx: Contesto, body: Record<string, unknown>, uid: string) {
  const aperto = lavoroInCorso(ctx, body, uid);
  const f = intero(body.fase);
  if (f !== aperto.lavoro.fasi) {
    throw new ApiError(409, 'FASE_SBAGLIATA', `Stai consegnando la fase ${f + 1} ma sei alla fase ${aperto.lavoro.fasi + 1}: ricarica la pagina`);
  }
  return { ...aperto, f };
}

const codiceDa = (body: Record<string, unknown>) => (typeof body.codice === 'string' ? body.codice.slice(0, MAX_CODICE) : '');

/**
 * Consegna di una fase. Il codice si salva sempre come bozza, giusto o sbagliato: alla
 * riapertura l'allievo ritrova quello che aveva scritto. Due tempi: la verifica (jsdom più
 * giudice, lenta) sta fuori dalla transazione; dentro si rilegge, si ricontrolla la fase e
 * si scrive. Le fasi di un compito non cambiano, quindi la verifica vale se la fase è ancora quella.
 */
export async function consegna(body: Record<string, unknown>, utente: Utente) {
  limita(utente);
  const codice = codiceDa(body);

  const prima = faseInConsegna(await contesto(body, utente), body, utente.uid);
  const sorgente: Sorgente = { ...prima.compito.pagina, js: codice };
  const valutazione = await verificaConsegna(prima.fase, sorgente);

  return getDb().runTransaction(async (tx) => {
    const ctx = await contesto(body, utente, tx);
    const { id, lavoro, compito: c, f } = faseInConsegna(ctx, body, utente.uid);
    // Il registro del giudice cresce solo quando i controlli sul codice ci sono stati (pagina giusta).
    const g = valutazione.giudizio;
    const giudice = g
      ? [...(lavoro.giudice ?? []), { fase: f, esito: g.esito, ...(g.motivo ? { motivo: g.motivo } : {}), at: Timestamp.now() } satisfies GiudizioDoc].slice(-MAX_GIUDIZI)
      : (lavoro.giudice ?? []);
    const salva = (dati: Partial<LavoroDoc>) => tx.set(ctx.allievoRef, { lavori: { [id]: { ...lavoro, ...dati, giudice, ultimoAt: Timestamp.now() } } }, { merge: true });

    if (!valutazione.promosso) {
      salva({ bozza: codice, errori: lavoro.errori + 1, erroriFase: { ...lavoro.erroriFase, [String(f)]: (lavoro.erroriFase?.[String(f)] ?? 0) + 1 } });
      return { promosso: false as const, hint: valutazione.hint, esitoMostrata: valutazione.prove[0] ?? null, errori: lavoro.errori + 1 };
    }

    const nuoveFasi = f + 1;
    const finito = nuoveFasi >= c.fasi.length;
    const ora = Timestamp.now();
    salva({
      fasi: nuoveFasi,
      fasiAt: { ...lavoro.fasiAt, [String(f)]: ora },
      codice: { ...lavoro.codice, [String(f)]: codice },
      bozza: '',
      finitoAt: finito ? ora : (lavoro.finitoAt ?? null),
    });
    const seguente = finito ? undefined : c.fasi[nuoveFasi];
    return {
      promosso: true as const,
      fasi: nuoveFasi,
      finito,
      voto: finito ? votoSeFinisce(lavoro.consigli) : null,
      votoSeFinisci: votoSeFinisce(lavoro.consigli),
      fase: seguente ? fasePubblica(seguente, nuoveFasi) : null,
    };
  });
}

/* -------------------------------------------------------------------- tutor */

const domandeRimaste = (consigli: number) => Math.max(0, MAX_DOMANDE_TUTOR - consigli);

/** Una domanda al tutor: costa un punto (fino al pavimento, poi è gratis ma si conta), fino al tetto per compito. */
export async function tutor(body: Record<string, unknown>, utente: Utente) {
  limita(utente);
  const domanda = typeof body.domanda === 'string' ? body.domanda.replace(/\r\n?/g, '\n').trim().slice(0, MAX_DOMANDA_TUTOR) : '';
  const codice = codiceDa(body);
  const hintVisto = testo(body.hintVisto, 1000) || null;

  const ctx = await contesto(body, utente);
  const { id, lavoro, compito: c, fase } = lavoroInCorso(ctx, body, utente.uid);
  if (c.scheda.esame) {
    throw new ApiError(403, 'TUTOR_SPENTO', "Nell'esame il tutor è spento: ce la fai da solo. Gli hint automatici restano");
  }
  if (lavoro.consigli >= MAX_DOMANDE_TUTOR) {
    throw new ApiError(403, 'DOMANDE_FINITE', `Hai fatto ${MAX_DOMANDE_TUTOR} domande su questo compito: da qui in poi vai avanti da solo, o chiedi al prof`);
  }

  // Com'è adesso il suo codice: solo il correttore, niente giudice (il tutor deve vedere i fatti).
  const sorgente: Sorgente = { ...c.pagina, js: codice };
  const valutazione = codice.trim() ? valuta(fase.prove, eseguiProveServer(sorgente, fase.prove)) : null;

  const risposta = await chiediTutor(
    {
      scheda: c.scheda,
      fase: lavoro.fasi + 1,
      fasiTotali: c.fasi.length,
      consegna: fase.consegna,
      regola: fase.regola,
      html: c.pagina.html,
      codice,
      valutazione,
      hintVisto,
      domanda,
    },
    fase,
    (lavoro.tutor ?? []).map((s) => ({ fase: s.fase + 1, domanda: s.domanda, risposta: s.risposta })),
  );

  const consigli = await getDb().runTransaction(async (tx) => {
    const snap = await tx.get(ctx.allievoRef);
    const fresco = snap.data() as AllievoDoc | undefined;
    const attuale = fresco?.lavori?.[id] ?? lavoroVuoto();
    const scambio = { fase: lavoro.fasi, domanda, risposta, at: Timestamp.now() };
    tx.set(
      ctx.allievoRef,
      { lavori: { [id]: { ...attuale, bozza: codice || attuale.bozza, consigli: attuale.consigli + 1, tutor: [...(attuale.tutor ?? []), scambio] } } },
      { merge: true },
    );
    return attuale.consigli + 1;
  });

  return { risposta, consigli, domandeRimaste: domandeRimaste(consigli), votoSeFinisci: votoSeFinisce(consigli), fase: lavoro.fasi + 1 };
}
