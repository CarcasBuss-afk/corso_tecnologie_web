/* L'elenco dei compiti del percorso: id, titoli, lezioni e sezioni, SENZA i generatori. È il
 * modulo che possono importare le pagine del browser (il percorso dell'allievo, la tabella
 * del docente): i generatori, con le prove nascoste e le soluzioni di riferimento, restano
 * nel bundle del server (index.ts). Un test controlla che titoli e lezioni combacino. */

export type CompitoId =
  | 'biglietto'
  | 'saluto'
  | 'biglietteria'
  | 'cartellino'
  | 'semaforo'
  | 'termometro'
  | 'convertitore'
  | 'giostra'
  | 'telecomando'
  | 'paghetta'
  | 'pulsantiera'
  | 'tema'
  | 'quiz'
  | 'gita'
  | 'campo'
  | 'scontrino'
  | 'campanello'
  | 'citofono'
  | 'tabellone'
  | 'bacheca'
  | 'lampada'
  | 'porta'
  | 'pizzeria'
  | 'iscrizione'
  | 'raddoppiatore'
  | 'magliette'
  | 'pagella';

/**
 * Ogni lezione ha fino a tre compiti: uno facile (poche fasi, molto guidato), uno normale e una
 * sfida più difficile. Facile e normale si fanno in fila; la sfida è facoltativa: si apre come il
 * normale, ma non blocca la lezione dopo e non entra nella media.
 */
export type Livello = 'facile' | 'normale' | 'sfida';

/** Titolo, lezione, livello e numero di fasi di ogni compito (le fasi: di solito 5, 3 nei facili, una in più dove si riordina il codice). */
export const TITOLI: Record<CompitoId, { titolo: string; lezione: string; livello: Livello; fasi: number }> = {
  biglietto: { titolo: 'Il biglietto da visita', lezione: 'Modulo 4 · Lezione 1', livello: 'facile', fasi: 3 },
  saluto: { titolo: 'Il pulsante che saluta', lezione: 'Modulo 4 · Lezione 2', livello: 'facile', fasi: 3 },
  biglietteria: { titolo: 'La biglietteria del cinema', lezione: 'Modulo 4 · Lezione 3', livello: 'facile', fasi: 3 },
  cartellino: { titolo: 'Il cartellino del nome', lezione: 'Modulo 4 · Lezione 4', livello: 'facile', fasi: 3 },
  semaforo: { titolo: 'Il semaforo', lezione: 'Modulo 4 · Lezione 5', livello: 'facile', fasi: 3 },
  termometro: { titolo: 'Il termometro', lezione: 'Modulo 4 · Lezione 6', livello: 'facile', fasi: 3 },
  convertitore: { titolo: 'Il convertitore dei tempi', lezione: 'Modulo 4 · Lezione 7', livello: 'facile', fasi: 3 },
  giostra: { titolo: 'La giostra del luna park', lezione: 'Modulo 4 · Lezione 8', livello: 'facile', fasi: 3 },
  scontrino: { titolo: 'Lo scontrino del bar', lezione: 'Modulo 4 · Lezione 1', livello: 'normale', fasi: 5 },
  paghetta: { titolo: 'La paghetta', lezione: 'Modulo 4 · Lezione 1', livello: 'sfida', fasi: 5 },
  telecomando: { titolo: 'Il telecomando', lezione: 'Modulo 4 · Lezione 2', livello: 'normale', fasi: 5 },
  pulsantiera: { titolo: 'La pulsantiera del DJ', lezione: 'Modulo 4 · Lezione 2', livello: 'sfida', fasi: 5 },
  campanello: { titolo: 'Il campanello del negozio', lezione: 'Modulo 4 · Lezione 3', livello: 'normale', fasi: 5 },
  citofono: { titolo: 'Il citofono del condominio', lezione: 'Modulo 4 · Lezione 3', livello: 'sfida', fasi: 5 },
  bacheca: { titolo: 'La bacheca della classe', lezione: 'Modulo 4 · Lezione 4', livello: 'normale', fasi: 5 },
  tabellone: { titolo: 'Il tabellone del torneo', lezione: 'Modulo 4 · Lezione 4', livello: 'sfida', fasi: 5 },
  lampada: { titolo: 'La lampada da comodino', lezione: 'Modulo 4 · Lezione 5', livello: 'normale', fasi: 6 },
  tema: { titolo: 'Il tema chiaro e scuro', lezione: 'Modulo 4 · Lezione 5', livello: 'sfida', fasi: 5 },
  porta: { titolo: 'La porta del club', lezione: 'Modulo 4 · Lezione 6', livello: 'normale', fasi: 6 },
  quiz: { titolo: 'Il quiz a tre domande', lezione: 'Modulo 4 · Lezione 6', livello: 'sfida', fasi: 5 },
  pizzeria: { titolo: 'La cassa della pizzeria', lezione: 'Modulo 4 · Lezione 7', livello: 'normale', fasi: 5 },
  gita: { titolo: 'La spesa della gita', lezione: 'Modulo 4 · Lezione 7', livello: 'sfida', fasi: 5 },
  iscrizione: { titolo: "Il modulo d'iscrizione", lezione: 'Modulo 4 · Lezione 8', livello: 'normale', fasi: 5 },
  campo: { titolo: 'La prenotazione del campo', lezione: 'Modulo 4 · Lezione 8', livello: 'sfida', fasi: 5 },
  raddoppiatore: { titolo: 'La macchinetta dei numeri', lezione: 'Modulo 4 · Lezione 9', livello: 'facile', fasi: 3 },
  magliette: { titolo: 'Il negozio di magliette', lezione: 'Modulo 4 · Lezione 9', livello: 'normale', fasi: 5 },
  pagella: { titolo: 'La pagella', lezione: 'Modulo 4 · Lezione 9', livello: 'sfida', fasi: 5 },
};

/** I compiti che sono esami (tutor spento). Per ora nessuno. */
export const ESAMI: ReadonlySet<CompitoId> = new Set<CompitoId>();

export interface Sezione {
  id: string;
  titolo: string;
  compiti: CompitoId[];
}

/** Le sezioni del percorso, nell'ordine: in ogni lezione il facile, il normale, la sfida. Una sezione vuota si vede: dice che dopo c'è altro. */
export const SEZIONI: Sezione[] = [
  {
    id: 'js-basi',
    titolo: 'JavaScript: le basi',
    compiti: [
      'biglietto', 'scontrino', 'paghetta',
      'saluto', 'telecomando', 'pulsantiera',
      'biglietteria', 'campanello', 'citofono',
      'cartellino', 'bacheca', 'tabellone',
      'semaforo', 'lampada', 'tema',
      'termometro', 'porta', 'quiz',
      'convertitore', 'pizzeria', 'gita',
      'giostra', 'iscrizione', 'campo',
    ],
  },
  { id: 'js-funzioni', titolo: 'JavaScript: funzioni e dati', compiti: ['raddoppiatore', 'magliette', 'pagella'] },
];

/** Tutti i compiti del percorso, nell'ordine in cui si sbloccano. */
export const ELENCO_COMPITI: CompitoId[] = SEZIONI.flatMap((s) => s.compiti);

export const eCompito = (id: string): id is CompitoId => id in TITOLI;

export const titoloCompito = (id: CompitoId) => TITOLI[id].titolo;

export const lezioneCompito = (id: CompitoId) => TITOLI[id].lezione;

export const livelloDi = (id: CompitoId) => TITOLI[id].livello;

/** La sfida si può saltare: non blocca il compito dopo e non entra nella media. */
export const eFacoltativo = (id: CompitoId) => TITOLI[id].livello === 'sfida';

/** Quante fasi ha il compito. */
export const fasiDi = (id: CompitoId) => TITOLI[id].fasi;

export const eEsame = (id: CompitoId) => ESAMI.has(id);

export function sezioneDi(id: CompitoId): Sezione {
  return SEZIONI.find((s) => s.compiti.includes(id)) ?? SEZIONI[0];
}

/**
 * I compiti che allenano una lezione del Modulo 4 (per il collegamento «Allenati» in fondo alla
 * lezione), nell'ordine del percorso: il facile, il normale, la sfida.
 */
export const COMPITI_PER_LEZIONE: Record<string, CompitoId[]> = {
  'lezione-1-primo-javascript': ['biglietto', 'scontrino', 'paghetta'],
  'lezione-2-pulsanti-funzioni': ['saluto', 'telecomando', 'pulsantiera'],
  'lezione-3-dialoghi-utente': ['biglietteria', 'campanello', 'citofono'],
  'lezione-4-cambiare-pagina': ['cartellino', 'bacheca', 'tabellone'],
  'lezione-5-cambiare-stili': ['semaforo', 'lampada', 'tema'],
  'lezione-6-decisioni-quiz': ['termometro', 'porta', 'quiz'],
  'lezione-7-operatori-calcolatrice': ['convertitore', 'pizzeria', 'gita'],
  'lezione-8-operatori-logici': ['giostra', 'iscrizione', 'campo'],
  'lezione-9-funzioni-parametri-return': ['raddoppiatore', 'magliette', 'pagella'],
};
