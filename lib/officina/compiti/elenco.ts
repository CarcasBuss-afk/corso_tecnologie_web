/* L'elenco dei compiti del percorso: id, titoli, lezioni e sezioni, SENZA i generatori. È il
 * modulo che possono importare le pagine del browser (il percorso dell'allievo, la tabella
 * del docente): i generatori, con le prove nascoste e le soluzioni di riferimento, restano
 * nel bundle del server (index.ts). Un test controlla che titoli e lezioni combacino. */

export type CompitoId = 'campanello' | 'bacheca' | 'lampada' | 'porta' | 'pizzeria' | 'iscrizione';

export const TITOLI: Record<CompitoId, { titolo: string; lezione: string }> = {
  campanello: { titolo: 'Il campanello del negozio', lezione: 'Modulo 4 · Lezioni 2 e 3' },
  bacheca: { titolo: 'La bacheca della classe', lezione: 'Modulo 4 · Lezione 4' },
  lampada: { titolo: 'La lampada da comodino', lezione: 'Modulo 4 · Lezione 5' },
  porta: { titolo: 'La porta del club', lezione: 'Modulo 4 · Lezione 6' },
  pizzeria: { titolo: 'La cassa della pizzeria', lezione: 'Modulo 4 · Lezione 7' },
  iscrizione: { titolo: "Il modulo d'iscrizione", lezione: 'Modulo 4 · Lezione 8' },
};

/** I compiti che sono esami (tutor spento). Per ora nessuno. */
export const ESAMI: ReadonlySet<CompitoId> = new Set<CompitoId>();

export interface Sezione {
  id: string;
  titolo: string;
  compiti: CompitoId[];
}

/** Le sezioni del percorso, nell'ordine. Una sezione vuota si vede: dice che dopo c'è altro. */
export const SEZIONI: Sezione[] = [
  { id: 'js-basi', titolo: 'JavaScript: le basi', compiti: ['campanello', 'bacheca', 'lampada', 'porta', 'pizzeria', 'iscrizione'] },
  { id: 'js-funzioni', titolo: 'JavaScript: funzioni e dati', compiti: [] },
];

/** Tutti i compiti del percorso, nell'ordine in cui si sbloccano. */
export const ELENCO_COMPITI: CompitoId[] = SEZIONI.flatMap((s) => s.compiti);

export const eCompito = (id: string): id is CompitoId => id in TITOLI;

export const titoloCompito = (id: CompitoId) => TITOLI[id].titolo;

export const lezioneCompito = (id: CompitoId) => TITOLI[id].lezione;

export const eEsame = (id: CompitoId) => ESAMI.has(id);

export function sezioneDi(id: CompitoId): Sezione {
  return SEZIONI.find((s) => s.compiti.includes(id)) ?? SEZIONI[0];
}

/** Il compito che allena una lezione del Modulo 4 (per il collegamento «Allenati» in fondo alla lezione). */
export const COMPITO_PER_LEZIONE: Record<string, CompitoId> = {
  'lezione-2-pulsanti-funzioni': 'campanello',
  'lezione-3-dialoghi-utente': 'campanello',
  'lezione-4-cambiare-pagina': 'bacheca',
  'lezione-5-cambiare-stili': 'lampada',
  'lezione-6-decisioni-quiz': 'porta',
  'lezione-7-operatori-calcolatrice': 'pizzeria',
  'lezione-8-operatori-logici': 'iscrizione',
};
