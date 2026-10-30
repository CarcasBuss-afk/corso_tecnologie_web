/* Un compito dell'Officina web: una pagina (HTML e CSS dati) che l'allievo fa funzionare con
 * il JavaScript, in cinque fasi (sei dove si riordina il codice), ognuna delle quali aggiunge un pezzo. La scheda racconta
 * chi lo chiede e che cosa deve fare la pagina finita: nel compito di realtà il bersaglio si
 * vede. I parametri escono dal seme (dell'allievo), così i testi del vicino sono diversi. */
import type { Fase, Pannello, Sorgente } from '../motore/tipi';

export interface SchedaCompito {
  id: string;
  titolo: string;
  /** La lezione del manuale a cui si appoggia (es. "Modulo 4 · Lezione 6"). */
  lezione: string;
  /** Un esame: tutor spento, restano gli hint automatici. */
  esame?: boolean;
  /** Chi chiede la pagina e perché. */
  committente: string;
  /** Che cosa deve fare la pagina finita, in una riga. */
  prodotto: string;
  /** I dati del problema, già scelti: l'allievo li legge qui. */
  dati: string[];
  /** Che cosa fa la pagina finita, punto per punto: il bersaglio si vede. */
  risultatoFinale: string[];
}

export interface Compito {
  scheda: SchedaCompito;
  /** La pagina data: HTML e CSS. Il JavaScript lo scrive l'allievo. */
  pagina: Omit<Sorgente, 'js'>;
  /** Quali pannelli si possono scrivere (per ora solo js). */
  pannelli: Pannello[];
  fasi: Fase[];
  /** Soluzione di riferimento per ogni fase: resta sul server, serve ai test. */
  soluzioni: string[];
}

/** Un generatore di compito: dal seme dell'allievo al compito con i suoi parametri. */
export type GeneratoreCompito = (seme: number) => Compito;

/* --------------------------------------------------------- numeri casuali dal seme */

/** Generatore pseudocasuale con seme (mulberry32): stesso seme, stessi parametri. */
export function generatore(seme: number): () => number {
  let a = seme >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function intero(rnd: () => number, min: number, max: number): number {
  return min + Math.floor(rnd() * (max - min + 1));
}

export function scegli<T>(rnd: () => number, valori: readonly T[]): T {
  return valori[Math.floor(rnd() * valori.length)];
}

/** Due elementi diversi dall'elenco. */
export function scegliDue<T>(rnd: () => number, valori: readonly T[]): [T, T] {
  const primo = scegli(rnd, valori);
  let secondo = scegli(rnd, valori);
  while (secondo === primo) secondo = scegli(rnd, valori);
  return [primo, secondo];
}

/** Le regole del corso che il giudice fa rispettare, a parole (OFFICINA.md §3). */
export const REGOLE = {
  treGesti:
    'Il pulsante funziona con lo schema in tre passi del corso: una funzione con nome (function nome() { ... }) e un ' +
    'collegamento con addEventListener. Non valgono le funzioni anonime o freccia, né onclick.',
  datiDalPrompt:
    'I dati che cambiano (il nome, il numero) arrivano dalla risposta al prompt() e stanno in una variabile: non valgono ' +
    'i testi finali scritti a mano nel codice.',
  datiDalleCaselle:
    'I numeri arrivano dalle caselle con .value, convertiti con Number(): non valgono i risultati scritti a mano nel codice.',
  decisioneConIf:
    'La scelta fra i due esiti la fa un if con un confronto sulla risposta: non valgono i due testi scritti insieme, né un esito solo.',
  elementiInVariabili:
    'Ogni elemento che serve, pulsanti compresi, sta in una variabile creata una volta sola in alto, fuori dalle funzioni; ' +
    'le funzioni e i collegamenti con addEventListener usano quelle variabili. I nomi delle variabili li sceglie l\'allievo.',
  funzioneConReturn:
    'Il calcolo sta in una funzione con nome e con i parametri fra le parentesi, che restituisce il risultato con return ' +
    '(non lo scrive con alert o innerHTML). Queste funzioni di aiuto non si collegano ai pulsanti: le chiamano le funzioni ' +
    'dei pulsanti, passando i valori. I nomi dei parametri li sceglie l\'allievo.',
  contatoreFuori:
    'Il contatore è una variabile dichiarata fuori dalla funzione, che la funzione aumenta con ++ (o +=): non vale un numero scritto a mano.',
} as const;
