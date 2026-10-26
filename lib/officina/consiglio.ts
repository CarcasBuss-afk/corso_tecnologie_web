/* Il consiglio a parole: il contesto che si dà al tutor (tutor.ts) e il consiglio finto dei
 * test. Il tutor dice dove guardare e che cosa cambiare, mai la riga da scrivere. Il filtro
 * anti-codice sta in filtroCodice.ts, perché lo usa anche il giudice. Modulo puro. */
import type { SchedaCompito } from './compiti/tipi';
import { contieneCodice, pulisciConsiglio } from './filtroCodice';
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
  domanda: string;
}

export type Scambio = { fase: number; domanda: string; risposta: string };

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
  parti.push(blocco("JAVASCRIPT DELL'ALLIEVO ADESSO:", c.codice.trim() ? c.codice.replace(/\r\n?/g, '\n').split('\n') : []));
  if (c.valutazione) {
    const righe = c.valutazione.prove.flatMap((p, i) => righeProva(p, i, fase.prove[i]?.nome));
    parti.push(blocco(`COME VA IL SUO CODICE ADESSO (${c.valutazione.promosso ? 'tutte le prove passano' : 'non passa'}):`, righe));
  }
  if (c.hintVisto) parti.push(`Hint che ha già visto all'ultima consegna: ${c.hintVisto}`);
  parti.push(c.domanda.trim() ? `DOMANDA DELL'ALLIEVO: ${c.domanda.trim()}` : "L'allievo non ha scritto una domanda: non sa come andare avanti.");
  return parti.join('\n\n');
}

export { contieneCodice, pulisciConsiglio };

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
