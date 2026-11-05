/* Dagli esiti delle prove al verdetto per l'allievo: promosso o no, e l'hint da mostrare.
 * L'hint è l'errore fatto, in una frase (messaggi.ts): non i consigli. La prima prova è
 * quella che vede; se passa quella e cade su una nascosta, l'hint dice con quali valori:
 * il programma deve funzionare per chiunque, non per i valori che ha davanti. Quei valori li
 * sceglie la correzione: il messaggio lo dice, altrimenti l'allievo li scrive nel codice.
 * Modulo puro: lo usano il browser e il server. */
import { traduciErroreJs } from './erroriJs';
import { messaggioControllo, messaggioErrore } from './messaggi';
import { eControllo, type Controllo, type EsitoControllo, type EsitoProva, type Prova, type Valutazione } from './tipi';

const ultimo = <T>(a: T[]): T | undefined => a[a.length - 1];

/** La nota scritta nel compito per un controllo fallito, con quello che c'è davvero: per il tutor. */
export function hintControllo(c: EsitoControllo): string {
  const attuale = c.attuale && c.attuale !== '' ? ` Adesso: «${c.attuale}».` : '';
  return `${c.hint}${attuale}`;
}

/** I controlli di una prova, nell'ordine: gli esiti dei controlli sono allineati a questi. */
const controlliDi = (prova: Prova): Controllo[] => prova.passi.filter(eControllo);

/** L'hint di una prova fallita: prima gli errori della pagina, poi il primo controllo che non passa. */
export function hintProva(p: EsitoProva, prova: Prova): string | null {
  if (p.tempoScaduto) return 'La pagina non risponde più: c\'è un ciclo che non finisce mai.';
  if (p.errori.length > 0) return messaggioErrore(p.errori[0], p);
  const controlli = controlliDi(prova);
  const i = p.controlli.findIndex((c) => !c.ok);
  if (i === -1) return null;
  const c = controlli[i];
  return c ? messaggioControllo(c, p.controlli[i]) : hintControllo(p.controlli[i]);
}

/**
 * La frase per chi potrebbe scrivere a mano un valore di una prova nascosta: c'è se il controllo
 * fallito si aspetta di rivedere un testo dato dalla correzione (al prompt o in una casella).
 * I numeri no: un numero nel risultato può essere un caso. Se il problema è un altro (un errore,
 * un pulsante scollegato, un elemento che non c'è) non si dice niente.
 */
function fraseValori(esito: EsitoProva, prova: Prova): string {
  if (esito.tempoScaduto || esito.errori.length > 0) return '';
  const i = esito.controlli.findIndex((c) => !c.ok);
  const fallito = esito.controlli[i];
  const controllo = controlliDi(prova)[i];
  if (!fallito || !controllo || fallito.mancante || (fallito.dopoClic && !fallito.dopoClic.collegato)) return '';
  const atteso = ('uguale' in controllo ? controllo.uguale : undefined) ?? ('contiene' in controllo ? controllo.contiene : undefined);
  if (!atteso) return '';

  const dati = prova.passi.flatMap((p) => {
    if (eControllo(p)) return [];
    if (p.fai === 'prompt') return p.risposte.map((valore) => ({ valore, daPrompt: true }));
    return p.fai === 'scrivi' ? [{ valore: p.valore, daPrompt: false }] : [];
  });
  const attesi = dati.filter((d) => /\p{L}/u.test(d.valore) && atteso.includes(d.valore));
  if (attesi.length === 0) return '';

  const nomi = attesi.map((d) => `«${d.valore}»`);
  const daPrompt = attesi.every((d) => d.daPrompt);
  if (nomi.length === 1) return ` ${nomi[0]} non va scritto nel codice: deve arrivare ${daPrompt ? 'dalla risposta al prompt' : 'dalla casella'}.`;
  return ` ${nomi.slice(0, -1).join(', ')} e ${nomi[nomi.length - 1]} non vanno scritti nel codice: devono arrivare ${daPrompt ? 'dalle risposte al prompt' : 'dalle caselle'}.`;
}

/**
 * Il verdetto. Gli esiti arrivano nell'ordine delle prove; se mancano (l'esecutore si è
 * fermato prima) la fase non è promossa.
 */
export function valuta(prove: Prova[], esiti: EsitoProva[]): Valutazione {
  const completi = esiti.length === prove.length && esiti.every((e) => e.ok);
  if (completi) return { promosso: true, hint: null, prove: esiti };

  const indice = esiti.findIndex((e) => !e.ok);
  if (indice === -1) {
    return { promosso: false, hint: 'La verifica non è arrivata in fondo: riprova fra un momento.', prove: esiti };
  }
  const esito = esiti[indice];
  const hint = hintProva(esito, prove[indice]) ?? 'Qualcosa non torna: rileggi la consegna.';
  if (indice === 0) return { promosso: false, hint, prove: esiti };

  // Prova nascosta: la mostrata passa, questa no. Si dicono i valori, perché è il punto.
  const nome = prove[indice].nome ?? esito.nome;
  const introduzione = `Con i valori che vedi funziona, ma la correzione prova la pagina anche da sola${nome ? ` e non va: ${nome}.` : ', con altri valori, e non va.'}`;
  return { promosso: false, hint: `${introduzione} ${hint}${fraseValori(esito, prove[indice])}`, prove: esiti };
}

/** Gli errori di un esito, tradotti: per la checklist e per il tutor. */
export function erroriTradotti(p: EsitoProva): string[] {
  return p.errori.map((e) => (p.idMancanti?.length ? messaggioErrore(e, p) : traduciErroreJs(e)));
}

export { ultimo };
