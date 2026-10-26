/* I controlli sul testo del codice, per le fasi in cui la pagina funziona già e si chiede di
 * riordinare il codice (Lezione 4: «anche i pulsanti in una variabile»). Il correttore non
 * li vede, perché la pagina fa le stesse cose di prima; un conto sul codice sì, esatto e senza
 * IA. Il messaggio dice l'errore fatto, come gli altri. Modulo puro. */
import type { Fase } from './tipi';

/** Una ricerca con getElementById: l'id e se sta dentro un blocco { } (una funzione, di solito). */
export interface Ricerca {
  id: string;
  dentro: boolean;
}

const RICERCA = /^getElementById\(\s*(["'`])([^"'`]*)\1\s*\)/;

/**
 * Le ricerche con getElementById, nell'ordine. Si scorre il codice tenendo il conto delle
 * graffe aperte, saltando stringhe e commenti: una ricerca con graffe aperte sta dentro una
 * funzione (o un if), una a zero sta in alto.
 */
export function ricercheGetElementById(js: string): Ricerca[] {
  return analizza(js).ricerche;
}

/** Quanti commenti ci sono nel codice (di una riga con // o su più righe), fuori dalle stringhe. */
export function contaCommenti(js: string): number {
  return analizza(js).commenti;
}

function analizza(js: string): { ricerche: Ricerca[]; commenti: number } {
  const ricerche: Ricerca[] = [];
  let commenti = 0;
  let profondita = 0;
  let i = 0;
  while (i < js.length) {
    const c = js[i];
    if (c === '/' && js[i + 1] === '/') {
      commenti += 1;
      const fine = js.indexOf('\n', i);
      i = fine === -1 ? js.length : fine;
    } else if (c === '/' && js[i + 1] === '*') {
      commenti += 1;
      const fine = js.indexOf('*/', i + 2);
      i = fine === -1 ? js.length : fine + 2;
    } else if (c === '"' || c === "'" || c === '`') {
      let j = i + 1;
      while (j < js.length && js[j] !== c && !(c !== '`' && js[j] === '\n')) j += js[j] === '\\' ? 2 : 1;
      i = j + 1;
    } else if (c === '{') {
      profondita += 1;
      i += 1;
    } else if (c === '}') {
      profondita = Math.max(0, profondita - 1);
      i += 1;
    } else if (c === 'g' && js.startsWith('getElementById', i)) {
      const m = js.slice(i).match(RICERCA);
      if (m) {
        ricerche.push({ id: m[2], dentro: profondita > 0 });
        i += m[0].length;
      } else {
        i += 1;
      }
    } else {
      i += 1;
    }
  }
  return { ricerche, commenti };
}

const elenca = (voci: string[]) => (voci.length === 1 ? voci[0] : `${voci.slice(0, -1).join(', ')} e ${voci[voci.length - 1]}`);

/** Il messaggio per l'allievo se il codice non rispetta i controlli sul testo della fase; null se va bene. */
export function controlloStruttura(fase: Pick<Fase, 'elementiInAlto' | 'almenoCommenti'>, js: string): string | null {
  if (fase.almenoCommenti) {
    const n = contaCommenti(js);
    if (n < fase.almenoCommenti) {
      const quanti = n === 0 ? "non c'è nessun commento" : n === 1 ? "c'è un commento solo" : `ci sono ${n} commenti`;
      return `Il programma funziona, ma nel codice ${quanti}: in questa fase ne servono almeno ${fase.almenoCommenti}.`;
    }
  }
  if (!fase.elementiInAlto) return null;
  const ricerche = ricercheGetElementById(js);

  const conti = new Map<string, number>();
  for (const r of ricerche) conti.set(r.id, (conti.get(r.id) ?? 0) + 1);
  const ripetuti = [...conti].filter(([, n]) => n > 1);
  if (ripetuti.length > 0) {
    return `La pagina funziona, ma con getElementById cerchi ${elenca(ripetuti.map(([id, n]) => `«${id}» ${n} volte`))}: in questa fase ogni elemento si cerca una volta sola.`;
  }

  const dentro = [...new Set(ricerche.filter((r) => r.dentro).map((r) => `«${r.id}»`))];
  if (dentro.length > 0) {
    return `La pagina funziona, ma cerchi ${elenca(dentro)} con getElementById dentro una funzione: in questa fase gli elementi si cercano in alto, fuori dalle funzioni.`;
  }
  return null;
}
