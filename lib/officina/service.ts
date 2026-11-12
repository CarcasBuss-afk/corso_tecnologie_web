/* Le API dell'allievo nell'Officina web: scegliere la classe, vedere il percorso, lavorare
 * su un compito fase per fase, chiedere al tutor. L'allievo è riconosciuto dall'account
 * Google della scuola (auth.ts); i parametri del compito sono suoi (regole.ts).
 * Validazione solo qui: al client arriva solo la fase da fare adesso, con la prova mostrata;
 * le prove nascoste restano sul server. */
import 'server-only';
import { FieldPath, FieldValue, Timestamp } from 'firebase-admin/firestore';
import { getDb } from '@/lib/firebaseAdmin';
import type { Utente } from './auth';
import { eCompito, eEsame, fasiDi, generaCompito, lezioneCompito, livelloDi, SEZIONI, semeRipasso, sezioneDi, titoloCompito, type Compito, type CompitoId } from './compiti';
import { ApiError, testo } from './http';
import { eseguiProveServer } from './motore/esecutoreServer';
import type { Fase, Sorgente } from './motore/tipi';
import { valuta } from './motore/valuta';
import { verificaConsegna } from './motore/verifica';
import { richiestaAmmessa } from './rateLimit';
import { eChiarimento, separaFuoriTema, type MotivoGratis } from './consiglio';
import { AIUTI_MASSIMI, aiutiFiniti, bonusSfide, mediaConBonus, percorsoDi, semeDelGiro, votoSeFinisce } from './regole';
import { allieviRef, appartenenzeRef, classiRef, lavoroVuoto, MAX_GIUDIZI, type AllievoDoc, type AppartenenzaDoc, type ClasseDoc, type GiudizioDoc, type LavoroDoc, type RipassoDoc } from './store';
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


/** Il compito richiesto, se è nel percorso e sbloccato per questo allievo. */
function compitoAperto(allievo: AllievoDoc, compitoId: string) {
  if (!eCompito(compitoId)) throw new ApiError(404, 'COMPITO_NON_TROVATO', 'Compito inesistente');
  const voce = percorsoDi(allievo.lavori ?? {}).find((v) => v.id === compitoId);
  if (!voce) throw new ApiError(404, 'COMPITO_NON_TROVATO', 'Compito inesistente');
  if (voce.stato === 'bloccato') throw new ApiError(403, 'BLOCCATO', 'Questo compito si sblocca quando finisci i compiti prima');
  return { id: compitoId, voce, lavoro: allievo.lavori?.[compitoId] ?? lavoroVuoto() };
}

/**
 * Il giro su cui l'allievo lavora: il primo, quello del voto, oppure, a compito finito, il
 * ripasso (il compito rifatto per esercizio, con dati suoi). `tentativo` è il lavoro di quel
 * giro; `finito` dice se quel giro è arrivato in fondo.
 */
type Giro = {
  tentativo: LavoroDoc | RipassoDoc;
  /** Il numero del ripasso; null nel primo giro. */
  ripasso: number | null;
  compito: Compito;
  finito: boolean;
};

function giroDi(uid: string, id: CompitoId, lavoro: LavoroDoc, primoFinito: boolean): Giro {
  const r = primoFinito ? lavoro.ripasso : undefined;
  const tentativo = r ?? lavoro;
  const compito = generaCompito(id, r ? r.seme : semeDelGiro(uid, id, 0));
  return { tentativo, ripasso: r?.giro ?? null, compito, finito: tentativo.fasi >= compito.fasi.length };
}

/** Che cosa scrivere nel documento dell'allievo per aggiornare il giro: il primo sta nel lavoro, il ripasso dentro di lui. */
function scritturaGiro(id: CompitoId, giro: Giro, aggiornato: LavoroDoc | RipassoDoc) {
  return { lavori: { [id]: giro.ripasso === null ? aggiornato : { ripasso: aggiornato } } };
}

/** La fase come la vede l'allievo: la consegna e la sola prova mostrata. */
function fasePubblica(fase: Fase, indice: number) {
  return { indice, consegna: fase.consegna, prova: fase.prove[0], regola: fase.regola ?? null };
}

/* ------------------------------------------------------------------ compiti */

/** Il percorso dell'allievo: tutti i compiti con lo stato, le sezioni in cui stanno, e la media con il bonus delle sfide. */
export async function compiti(body: Record<string, unknown>, utente: Utente) {
  const ctx = await contesto(body, utente);
  const lavori = ctx.allievo.lavori ?? {};
  const voci = percorsoDi(lavori);
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
      ripassoInCorso: v.stato === 'finito' && (lavori[v.id]?.ripasso?.fasi ?? fasiDi(v.id)) < fasiDi(v.id),
    })),
    sezioni: SEZIONI.map((s) => ({ id: s.id, titolo: s.titolo, compiti: s.compiti })),
    media: mediaConBonus(voci),
    bonus: bonusSfide(voci),
  };
}

/** Il JavaScript da cui l'editor riparte: la bozza, altrimenti il codice della fase prima, altrimenti quello iniziale. */
function codiceDaCui(lavoro: LavoroDoc | RipassoDoc, compito: Compito): string {
  const faseIniziale = compito.fasi[0]?.codiceIniziale ?? '';
  if (lavoro.bozza) return lavoro.bozza;
  if (lavoro.fasi > 0) return lavoro.codice?.[String(lavoro.fasi - 1)] ?? faseIniziale;
  return faseIniziale;
}

/**
 * Il compito aperto: scheda, pagina, fase da fare, codice da cui ripartire, conversazione col
 * tutor. A compito finito, se l'allievo lo sta rifacendo, tutto questo è del ripasso; il voto
 * resta quello del primo giro.
 */
export async function compito(body: Record<string, unknown>, utente: Utente) {
  const ctx = await contesto(body, utente);
  const { id, voce, lavoro } = compitoAperto(ctx.allievo, testo(body.compitoId, 64));
  const giro = giroDi(utente.uid, id, lavoro, voce.stato === 'finito');
  const { tentativo: t, compito: c, finito } = giro;
  const fase = !finito ? c.fasi[t.fasi] : undefined;
  return {
    id,
    classeChiusa: ctx.classe.chiusa,
    esame: Boolean(c.scheda.esame),
    ripasso: giro.ripasso,
    fasi: t.fasi,
    fasiTotali: c.fasi.length,
    consigli: t.consigli,
    domandeRimaste: domandeRimaste(t.consigli),
    finito,
    voto: voce.voto,
    // Nel ripasso non c'è un voto da guadagnare: resta quello del primo giro.
    votoSeFinisci: giro.ripasso === null ? votoSeFinisce(t.consigli) : null,
    scheda: c.scheda,
    pagina: c.pagina,
    pannelli: c.pannelli,
    fase: fase ? fasePubblica(fase, t.fasi) : null,
    codice: finito ? (t.codice?.[String(c.fasi.length - 1)] ?? '') : codiceDaCui(t, c),
    codicePromosso: t.codice ?? {},
    tutor: (t.tutor ?? []).map((s) => ({ fase: s.fase + 1, domanda: s.domanda, risposta: s.risposta, gratis: s.gratis ?? null })),
    errori: t.errori,
  };
}

/* -------------------------------------------------------------------- rifai */

/**
 * Rifare per esercizio un compito finito: comincia un giro di ripasso con dati nuovi. Il voto
 * del primo giro non cambia; le domande al tutor nel ripasso non tolgono punti. Si comincia
 * un giro nuovo solo quando il precedente è finito. Il giro prima si sovrascrive.
 */
export async function rifai(body: Record<string, unknown>, utente: Utente) {
  limita(utente);
  return getDb().runTransaction(async (tx) => {
    const ctx = await contesto(body, utente, tx);
    if (ctx.classe.chiusa) throw new ApiError(403, 'CLASSE_CHIUSA', "L'Officina è chiusa: il prof la riapre alla prossima lezione");
    const { id, voce, lavoro } = compitoAperto(ctx.allievo, testo(body.compitoId, 64));
    if (voce.stato !== 'finito') throw new ApiError(403, 'NON_FINITO', 'Prima finisci il compito: dopo puoi rifarlo per esercitarti');
    const r = lavoro.ripasso;
    if (r && r.fasi < fasiDi(id)) throw new ApiError(409, 'RIPASSO_IN_CORSO', 'Stai già rifacendo questo compito: ricarica la pagina');
    const giro = (r?.giro ?? 0) + 1;
    const evita = [semeDelGiro(utente.uid, id, 0), ...(r ? [r.seme] : [])];
    const ripasso: RipassoDoc = { ...lavoroVuoto(), giro, seme: semeRipasso(utente.uid, id, giro, evita) };
    // update con il percorso del campo: il ripasso nuovo prende il posto del vecchio, senza mescolarsi.
    tx.update(ctx.allievoRef, new FieldPath('lavori', id, 'ripasso'), ripasso);
    return { ripasso: ripasso.giro };
  });
}

/* ----------------------------------------------------------------- consegna */

function intero(v: unknown): number {
  return typeof v === 'number' ? v : typeof v === 'string' && v.trim() !== '' ? Number(v) : Number.NaN;
}

/** Controlli comuni a consegna e tutor: classe aperta, compito sbloccato, giro (primo o ripasso) non finito. */
function lavoroInCorso(ctx: Contesto, body: Record<string, unknown>, uid: string) {
  if (ctx.classe.chiusa) throw new ApiError(403, 'CLASSE_CHIUSA', "L'Officina è chiusa: il prof la riapre alla prossima lezione");
  const { id, voce, lavoro } = compitoAperto(ctx.allievo, testo(body.compitoId, 64));
  const giro = giroDi(uid, id, lavoro, voce.stato === 'finito');
  if (giro.finito) throw new ApiError(403, 'FINITO', 'Hai già finito questo compito! Per esercitarti ancora premi «Rifallo»');
  // Il client dice in quale giro crede di essere: se nel frattempo è cambiato, la pagina è vecchia.
  if (body.ripasso !== undefined && (body.ripasso ?? null) !== giro.ripasso) {
    throw new ApiError(409, 'GIRO_CAMBIATO', 'Il compito è cambiato in un’altra finestra: ricarica la pagina');
  }
  return { id, giro, t: giro.tentativo, compito: giro.compito, fase: giro.compito.fasi[giro.tentativo.fasi] };
}

/** La fase che l'allievo sta consegnando: i controlli, uguali nei due tempi della consegna. */
function faseInConsegna(ctx: Contesto, body: Record<string, unknown>, uid: string) {
  const aperto = lavoroInCorso(ctx, body, uid);
  const f = intero(body.fase);
  if (f !== aperto.t.fasi) {
    throw new ApiError(409, 'FASE_SBAGLIATA', `Stai consegnando la fase ${f + 1} ma sei alla fase ${aperto.t.fasi + 1}: ricarica la pagina`);
  }
  return { ...aperto, f };
}

const codiceDa = (body: Record<string, unknown>) => (typeof body.codice === 'string' ? body.codice.slice(0, MAX_CODICE) : '');

/**
 * Consegna di una fase. Il codice si salva sempre come bozza, giusto o sbagliato: alla
 * riapertura l'allievo ritrova quello che aveva scritto. Due tempi: la verifica (jsdom più
 * giudice, lenta) sta fuori dalla transazione; dentro si rilegge, si ricontrolla la fase e
 * si scrive. Le fasi di un compito non cambiano, quindi la verifica vale se la fase è ancora
 * quella; il giro sì (un ripasso nuovo ha dati nuovi), quindi deve essere ancora lo stesso.
 */
export async function consegna(body: Record<string, unknown>, utente: Utente) {
  limita(utente);
  const codice = codiceDa(body);

  const prima = faseInConsegna(await contesto(body, utente), body, utente.uid);
  const sorgente: Sorgente = { ...prima.compito.pagina, js: codice };
  const valutazione = await verificaConsegna(prima.fase, sorgente);

  return getDb().runTransaction(async (tx) => {
    const ctx = await contesto(body, utente, tx);
    const { id, giro, t, compito: c, f } = faseInConsegna(ctx, body, utente.uid);
    if (giro.ripasso !== prima.giro.ripasso) {
      throw new ApiError(409, 'GIRO_CAMBIATO', 'Il compito è cambiato in un’altra finestra: ricarica la pagina');
    }
    // Il registro del giudice cresce solo quando i controlli sul codice ci sono stati (pagina giusta).
    const g = valutazione.giudizio;
    const giudice = g
      ? [...(t.giudice ?? []), { fase: f, esito: g.esito, ...(g.motivo ? { motivo: g.motivo } : {}), at: Timestamp.now() } satisfies GiudizioDoc].slice(-MAX_GIUDIZI)
      : (t.giudice ?? []);
    const salva = (dati: Partial<LavoroDoc>) => {
      const ora = Timestamp.now();
      tx.set(ctx.allievoRef, scritturaGiro(id, giro, { ...t, ...dati, giudice, ultimoAt: ora }), { merge: true });
    };

    if (!valutazione.promosso) {
      salva({ bozza: codice, errori: t.errori + 1, erroriFase: { ...t.erroriFase, [String(f)]: (t.erroriFase?.[String(f)] ?? 0) + 1 } });
      return { promosso: false as const, hint: valutazione.hint, esitoMostrata: valutazione.prove[0] ?? null, errori: t.errori + 1 };
    }

    const nuoveFasi = f + 1;
    const finito = nuoveFasi >= c.fasi.length;
    const ora = Timestamp.now();
    salva({
      fasi: nuoveFasi,
      fasiAt: { ...t.fasiAt, [String(f)]: ora },
      codice: { ...t.codice, [String(f)]: codice },
      bozza: '',
      finitoAt: finito ? ora : (t.finitoAt ?? null),
    });
    const seguente = finito ? undefined : c.fasi[nuoveFasi];
    // Nel ripasso il voto non si guadagna: resta quello del primo giro.
    const votoSeFinisci = giro.ripasso === null ? votoSeFinisce(t.consigli) : null;
    return {
      promosso: true as const,
      fasi: nuoveFasi,
      finito,
      voto: finito && votoSeFinisci !== null ? votoSeFinisci : null,
      votoSeFinisci,
      fase: seguente ? fasePubblica(seguente, nuoveFasi) : null,
    };
  });
}

/* -------------------------------------------------------------------- tutor */

const domandeRimaste = (consigli: number) => Math.max(0, AIUTI_MASSIMI - consigli);

/**
 * Una domanda al tutor: costa un punto, tranne un «non ho capito» dopo una risposta e i
 * messaggi fuori tema. Al voto minimo il tutor si ferma e l'allievo chiama il prof. Nel
 * ripasso il voto non c'è: le domande si contano solo per lo stesso tetto di aiuti.
 */
export async function tutor(body: Record<string, unknown>, utente: Utente) {
  limita(utente);
  const domanda = typeof body.domanda === 'string' ? body.domanda.replace(/\r\n?/g, '\n').trim().slice(0, MAX_DOMANDA_TUTOR) : '';
  const codice = codiceDa(body);
  const hintVisto = testo(body.hintVisto, 1000) || null;

  const ctx = await contesto(body, utente);
  const { id, giro, t, compito: c, fase } = lavoroInCorso(ctx, body, utente.uid);
  if (c.scheda.esame) {
    throw new ApiError(403, 'TUTOR_SPENTO', "Nell'esame il tutor è spento: ce la fai da solo. Gli hint automatici restano");
  }
  if (aiutiFiniti(t.consigli)) {
    throw new ApiError(403, 'AIUTI_FINITI', `Hai usato tutti i ${AIUTI_MASSIMI} aiuti del tutor su questo compito: chiama il prof`);
  }
  if ((t.tutor ?? []).length >= MAX_DOMANDE_TUTOR) {
    throw new ApiError(403, 'DOMANDE_FINITE', 'Hai scritto troppi messaggi al tutor su questo compito: chiama il prof');
  }

  // Com'è adesso il suo codice: solo il correttore, niente giudice (il tutor deve vedere i fatti).
  const sorgente: Sorgente = { ...c.pagina, js: codice };
  const valutazione = codice.trim() ? valuta(fase.prove, eseguiProveServer(sorgente, fase.prove)) : null;
  // Il registro cresce a ogni consegna con le prove passate: l'ultima voce dice com'è finita.
  const ultimo = (t.giudice ?? []).filter((g) => g.fase === t.fasi).at(-1);

  const chiarimento = eChiarimento(domanda, t.tutor ?? [], t.fasi);

  const grezza = await chiediTutor(
    {
      scheda: c.scheda,
      fase: t.fasi + 1,
      fasiTotali: c.fasi.length,
      consegna: fase.consegna,
      regola: fase.regola,
      html: c.pagina.html,
      codice,
      valutazione,
      hintVisto,
      bocciatura: ultimo?.esito === 'NO' || ultimo?.esito === 'CONTROLLO' ? (ultimo.motivo ?? null) : null,
      soluzione: c.soluzioni[t.fasi],
      domanda,
    },
    fase,
    (t.tutor ?? []).map((s) => ({ fase: s.fase + 1, domanda: s.domanda, risposta: s.risposta })),
  );
  const { fuoriTema, risposta } = separaFuoriTema(grezza, domanda);
  const gratis: MotivoGratis | null = chiarimento ? 'chiarimento' : fuoriTema ? 'fuori-tema' : null;

  const consigli = await getDb().runTransaction(async (tx) => {
    const snap = await tx.get(ctx.allievoRef);
    const fresco = (snap.data() as AllievoDoc | undefined)?.lavori?.[id];
    const attuale = giro.ripasso === null ? (fresco ?? lavoroVuoto()) : fresco?.ripasso;
    // Il ripasso è ricominciato nel frattempo (un'altra finestra): la risposta arriva, ma non si scrive sul giro nuovo.
    if (!attuale || (giro.ripasso !== null && (attuale as RipassoDoc).giro !== giro.ripasso)) return t.consigli;
    const costo = gratis ? 0 : 1;
    const scambio = { fase: t.fasi, domanda, risposta, ...(gratis ? { gratis } : {}), at: Timestamp.now() };
    const aggiornato = { ...attuale, bozza: codice || attuale.bozza, consigli: attuale.consigli + costo, tutor: [...(attuale.tutor ?? []), scambio] };
    tx.set(ctx.allievoRef, scritturaGiro(id, giro, aggiornato), { merge: true });
    return attuale.consigli + costo;
  });

  return {
    risposta,
    gratis,
    consigli,
    domandeRimaste: domandeRimaste(consigli),
    votoSeFinisci: giro.ripasso === null ? votoSeFinisce(consigli) : null,
    fase: t.fasi + 1,
  };
}
