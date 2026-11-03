/* Il consiglio a parole: il contesto che si dà al tutor (tutor.ts), quali messaggi non costano
 * un punto e il consiglio finto dei test. Il tutor dice dove guardare e che cosa fare adesso, mai
 * la riga da scrivere. I filtri sul codice stanno in filtroCodice.ts, perché li usa anche il giudice. Modulo puro. */
import type { SchedaCompito } from './compiti/tipi';
import { esempioNonAmmesso, pulisciConsiglio } from './filtroCodice';
import type { EsitoProva, Fase, Valutazione } from './motore/tipi';
import { hintControllo } from './motore/valuta';
import { traduciErroreJs } from './motore/erroriJs';

export interface ContestoConsiglio {
  scheda: SchedaCompito;
  /** Numero della fase, da 1. */
  fase: number;
  fasiTotali: number;
  consegna: string;
  regola?: string;
  /** L'HTML della pagina data: il tutor deve vedere gli id. */
  html: string;
  /** Il JavaScript com'è adesso nell'editor. */
  codice: string;
  /** Com'è andata la verifica del codice com'è adesso (correttore, senza giudice). */
  valutazione: Valutazione | null;
  /** L'hint che l'allievo ha già visto all'ultima consegna, se c'è (anche quello del giudice). */
  hintVisto: string | null;
  /** Il motivo dell'ultima bocciatura sul codice in questa fase, se l'ultima consegna è stata bocciata. */
  bocciatura?: string | null;
  /** La soluzione della fase: la legge solo il filtro, il modello non la vede mai. */
  soluzione?: string;
  domanda: string;
}

export type Scambio = { fase: number; domanda: string; risposta: string };

/** Perché un messaggio al tutor non costa un punto. */
export type MotivoGratis = 'chiarimento' | 'fuori-tema';

/** Il marcatore con cui il modello segnala un messaggio che non c'entra con il compito. */
export const MARCATORE_FUORI_TEMA = '[FUORI TEMA]';

/** Il testo del pulsante «Non ho capito» e delle domande che dicono solo quello. */
export const NON_HO_CAPITO = 'Non ho capito';
const SOLO_NON_HO_CAPITO = /^\s*non\s+(ho\s+capito|capisco)(\s+(niente|nulla))?[\s.!?]*$/i;

/**
 * Vero se è un «non ho capito» gratis: uno solo dopo ogni risposta vera, nella stessa fase. Non
 * vale dopo un altro messaggio gratis, così non si ottiene una spiegazione dopo l'altra senza costo.
 */
export function eChiarimento(domanda: string, scambi: Array<{ fase: number; gratis?: MotivoGratis }>, fase: number): boolean {
  const ultimo = scambi.at(-1);
  return SOLO_NON_HO_CAPITO.test(domanda) && !!ultimo && ultimo.fase === fase && !ultimo.gratis;
}

/**
 * Toglie il marcatore del fuori tema e tiene una riga sola: così, se qualcuno convincesse il
 * modello a segnarlo apposta, non avrebbe comunque un aiuto gratis. Un messaggio vuoto vuol dire
 * «non so andare avanti»: non è mai fuori tema.
 */
export function separaFuoriTema(testo: string, domanda: string): { fuoriTema: boolean; risposta: string } {
  const pulito = testo.trim();
  if (!pulito.startsWith(MARCATORE_FUORI_TEMA)) return { fuoriTema: false, risposta: pulito };
  const resto = pulito.slice(MARCATORE_FUORI_TEMA.length).trim();
  if (!domanda.trim()) return { fuoriTema: false, risposta: resto };
  return { fuoriTema: true, risposta: resto.split('\n')[0].slice(0, 200) };
}

function blocco(titolo: string, righe: string[]): string {
  return `${titolo}\n${righe.length ? righe.join('\n') : '(niente)'}`;
}

/** Com'è andata una prova, in righe leggibili dal modello. */
function righeProva(p: EsitoProva, indice: number, nomeProva: string | undefined): string[] {
  const titolo = indice === 0 ? 'PROVA MOSTRATA ALL\'ALLIEVO' : `PROVA NASCOSTA ${indice}${nomeProva ? ` (${nomeProva})` : ''}`;
  const righe = [`${titolo}: ${p.ok ? 'passa' : 'NON passa'}`];
  if (p.tempoScaduto) righe.push('- la pagina non ha risposto: un ciclo infinito');
  for (const e of p.errori) righe.push(`- ERRORE JAVASCRIPT: ${e} → ${traduciErroreJs(e)}`);
  for (const c of p.controlli) righe.push(`- ${c.ok ? 'OK' : 'NO'} ${c.descrizione}${c.ok ? '' : ` (adesso: «${c.attuale ?? ''}»; nota del compito, che l'allievo non vede: ${hintControllo(c)})`}`);
  if (p.alerts.length) righe.push(`- alert mostrati: ${p.alerts.map((a) => `«${a}»`).join(', ')}`);
  return righe;
}

/** Il messaggio con tutto il contesto. Il modello non vede la soluzione di riferimento: non gli serve e non deve lasciarsela sfuggire. */
export function messaggioConsiglio(c: ContestoConsiglio, fase: Pick<Fase, 'prove'>): string {
  const parti: string[] = [];
  parti.push(`COMPITO: ${c.scheda.titolo}. ${c.scheda.committente}`);
  parti.push(`Dati: ${c.scheda.dati.join(' · ')}`);
  parti.push(`FASE ${c.fase} di ${c.fasiTotali}. Consegna: ${c.consegna.replace(/\*\*/g, '')}`);
  if (c.regola) parti.push(`REGOLA DEL COMPITO (la controlla un giudice sul codice che funziona; se non è rispettata la consegna è bocciata anche se la pagina fa la cosa giusta): ${c.regola}`);
  parti.push(blocco('HTML DELLA PAGINA (dato, l\'allievo non lo cambia):', c.html.split('\n')));
  parti.push(blocco("JAVASCRIPT DELL'ALLIEVO ADESSO (con il numero di riga davanti, come nel suo editor):", c.codice.trim() ? c.codice.replace(/\r\n?/g, '\n').split('\n').map((r, i) => `${i + 1}: ${r}`) : []));
  if (c.valutazione) {
    const righe = c.valutazione.prove.flatMap((p, i) => righeProva(p, i, fase.prove[i]?.nome));
    parti.push(blocco(`COME VA IL SUO CODICE ADESSO (${c.valutazione.promosso ? 'tutte le prove passano' : 'non passa'}):`, righe));
  }
  if (c.hintVisto) parti.push(`Hint che ha già visto all'ultima consegna: ${c.hintVisto}`);
  if (c.bocciatura) parti.push(`ULTIMO VERDETTO SUL CODICE IN QUESTA FASE: bocciato all'ultima consegna, anche se le prove passavano (da allora il codice può essere cambiato). Motivo: ${c.bocciatura}`);
  parti.push(c.domanda.trim() ? `DOMANDA DELL'ALLIEVO: ${c.domanda.trim()}` : "L'allievo non ha scritto una domanda: non sa come andare avanti.");
  return parti.join('\n\n');
}

export { esempioNonAmmesso, pulisciConsiglio };

/**
 * Il consiglio finto dei test e dello sviluppo senza chiave: risponde con un consiglio
 * generico, oppure, se la domanda comincia con `FINTO:`, con il testo che segue, così i
 * test provano anche che il server scarta le risposte con dentro del codice.
 */
export function consiglioFinto(c: ContestoConsiglio): string {
  const m = c.domanda.match(/^FINTO:([\s\S]*)$/);
  if (m) return m[1].trim();
  const prova = c.valutazione?.prove.find((p) => !p.ok);
  if (prova?.errori.length) return `La tua pagina dà un errore: ${traduciErroreJs(prova.errori[0])} Correggi quella riga prima di andare avanti. (Consiglio di prova per la fase ${c.fase}.)`;
  const controllo = prova?.controlli.find((k) => !k.ok);
  if (controllo) return `Guarda il controllo «${controllo.descrizione}»: ${hintControllo(controllo)} (Consiglio di prova per la fase ${c.fase}.)`;
  return `Rileggi la consegna della fase ${c.fase} e confronta, controllo per controllo, quello che la pagina fa con quello che deve fare. (Consiglio di prova.)`;
}
