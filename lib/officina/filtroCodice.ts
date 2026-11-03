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

/** Quello che il tutor può dire e che cosa deve restare suo: il codice dell'allievo, la consegna, la soluzione, la pagina. */
export interface LimitiEsempio {
  codiceAllievo?: string;
  consegna?: string;
  soluzione?: string;
  html?: string;
}

/** Sotto questa lunghezza una riga della soluzione è una graffa o poco più: non è la riga da scrivere. */
const RIGA_SOSTANZIOSA = 12;
/** Le righe di esempio che il tutor può mostrare in una risposta. */
const MAX_RIGHE_ESEMPIO = 2;

/**
 * Vero se la risposta del tutor mostra codice che non può mostrare: un blocco con i tre apici,
 * più di due righe di esempio, un pezzo della soluzione della fase, oppure un esempio con gli id
 * della pagina. Quello che sta già nel codice dell'allievo o nella consegna si può citare; i nomi
 * da soli (`getElementById`, `"click"`, `btnSuona`) si possono sempre dire.
 */
export function esempioNonAmmesso(testo: string, limiti: LimitiEsempio = {}): boolean {
  if (testo.includes('```')) return true;
  const citabile = compatta(`${limiti.codiceAllievo ?? ''}\n${limiti.consegna ?? ''}`);
  const soluzione = (limiti.soluzione ?? '')
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((r) => compatta(r.replace(/^\s*\/\/.*$/, '')))
    .filter((r) => r.length >= RIGA_SOSTANZIOSA);
  const ids = [...(limiti.html ?? '').matchAll(/\bid\s*=\s*["']([^"']+)["']/gi)].map((m) => m[1]);

  const inApici = [...testo.matchAll(/`([^`\n]+)`/g)].map((m) => m[1]);
  const righeNude = testo
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .filter((r) => !r.includes('`'))
    .map((r) => r.replace(/^[-•*\d.)\s]+/, ''))
    .filter((r) => ISTRUZIONE.test(r));

  let esempi = 0;
  for (const pezzo of [...inApici, ...righeNude]) {
    const c = compatta(pezzo);
    if (c === '' || citabile.includes(c)) continue;
    const eCodice = /[(=*+/-]/.test(c) && /["'\d=]/.test(c);
    if (eCodice && soluzione.some((r) => r.includes(c) || c.includes(r))) return true;
    if (!ISTRUZIONE.test(pezzo)) continue;
    if (ids.some((id) => pezzo.includes(`"${id}"`) || pezzo.includes(`'${id}'`))) return true;
    esempi += 1;
  }
  return esempi > MAX_RIGHE_ESEMPIO;
}

/** Via spazi di troppo e apici di blocco residui; taglia i consigli lunghi. */
export function pulisciConsiglio(testo: string, massimo = MAX_CONSIGLIO): string {
  const pulito = testo.replace(/\r\n?/g, '\n').trim();
  if (pulito.length <= massimo) return pulito;
  const taglio = pulito.lastIndexOf('. ', massimo - 1);
  return taglio > massimo / 2 ? pulito.slice(0, taglio + 1) : pulito.slice(0, massimo) + '…';
}
