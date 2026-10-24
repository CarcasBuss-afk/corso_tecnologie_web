/* Il filtro anti-codice: serve a chiunque faccia parlare un modello con l'allievo (il tutor,
 * il giudice). La regola è una sola: a parole, mai la riga da scrivere. Qui il linguaggio è
 * JavaScript (con un occhio a HTML e CSS). Modulo puro. */

/** Un consiglio è 2-3 frasi: oltre questo si taglia. */
export const MAX_CONSIGLIO = 600;

/** Una riga che è un'istruzione JavaScript, una regola CSS o un tag HTML intero. */
const ISTRUZIONE =
  /^\s*(function\s+\w+\s*\(|document\.(getElementById|querySelector)\s*\(|(let|const|var)\s+\w+\s*=|[\w.]+\s*\.\s*(innerHTML|textContent|value|style\.\w+)\s*=[^=]|[\w.]+\.addEventListener\s*\(|if\s*\(.*\)\s*\{?\s*$|\}\s*else(\s+if)?\b|(alert|prompt|confirm|console\.log)\s*\(.*\)\s*;?\s*$|<\/?[a-z][a-z0-9-]*(\s[^>]*)?>|[a-z#.][\w#.\-\s,>:]*\{\s*$)/i;

/** Senza spazi: `x=1` e `x = 1` sono la stessa riga. */
const compatta = (s: string) => s.replace(/\s+/g, '');

/**
 * Vero se la risposta contiene del codice: un blocco con i tre apici, una riga che è
 * un'istruzione, oppure un frammento fra apici singoli che è un'istruzione intera.
 * Nominare `getElementById`, `innerHTML` o `prompt` fra apici va bene: è quello che fanno
 * anche gli hint. Citare una riga che l'allievo ha già scritto non è dargli codice.
 */
export function contieneCodice(testo: string, codiceAllievo = ''): boolean {
  if (testo.includes('```')) return true;
  const sue = new Set(
    codiceAllievo
      .replace(/\r\n?/g, '\n')
      .split('\n')
      .map(compatta)
      .filter((r) => r !== ''),
  );
  const citata = (s: string) => sue.has(compatta(s));
  const righe = testo.replace(/\r\n?/g, '\n').split('\n');
  for (const riga of righe) {
    const nuda = riga.replace(/`/g, '').replace(/^[-•*\d.)\s]+/, '');
    if (ISTRUZIONE.test(nuda) && !citata(nuda)) return true;
  }
  for (const m of testo.matchAll(/`([^`\n]+)`/g)) {
    if (ISTRUZIONE.test(m[1]) && !citata(m[1])) return true;
  }
  return false;
}

/** Via spazi di troppo e apici di blocco residui; taglia i consigli lunghi. */
export function pulisciConsiglio(testo: string, massimo = MAX_CONSIGLIO): string {
  const pulito = testo.replace(/\r\n?/g, '\n').trim();
  if (pulito.length <= massimo) return pulito;
  const taglio = pulito.lastIndexOf('. ', massimo - 1);
  return taglio > massimo / 2 ? pulito.slice(0, taglio + 1) : pulito.slice(0, massimo) + '…';
}
