/* I tipi del motore di correzione dell'Officina web (OFFICINA.md §3).
 *
 * Un compito è una pagina (HTML e CSS dati) a cui l'allievo aggiunge il JavaScript, fase
 * per fase. Ogni fase ha delle prove; una prova è una sequenza di passi: azioni (clic,
 * scrivere in una casella, risposte pronte per prompt e confirm) e controlli (il testo di un
 * elemento, lo stile calcolato, un alert, la console). Si corregge guardando la pagina che
 * ne risulta, non il testo del codice: qualunque soluzione che funziona vale.
 *
 * Modulo puro: lo usano il browser (iframe), il server (jsdom) e i test.
 */

/** Che cosa scrive l'allievo: in questa prima versione solo il JavaScript. */
export type Pannello = 'html' | 'css' | 'js';

/** La pagina su cui si lavora: le tre parti, separate come nei tre pannelli. */
export interface Sorgente {
  html: string;
  css: string;
  js: string;
}

/** Ogni azione può dire come si racconta all'allievo nella checklist («Clic su "Suona"»). */
interface AzioneBase {
  descrizione?: string;
}

export type Azione =
  /** Clic su un elemento (un pulsante), per selettore CSS. */
  | ({ fai: 'clic'; su: string } & AzioneBase)
  /** Scrive in una casella e manda gli eventi input e change. */
  | ({ fai: 'scrivi'; in: string; valore: string } & AzioneBase)
  /** Le risposte pronte per i prossimi prompt() della pagina, nell'ordine. */
  | ({ fai: 'prompt'; risposte: string[] } & AzioneBase)
  /** Le risposte pronte per i prossimi confirm(). */
  | ({ fai: 'confirm'; risposte: boolean[] } & AzioneBase);

/** Un controllo ha sempre la descrizione che l'allievo legge nella checklist e un hint per quando fallisce. */
interface ControlloBase {
  /** Che cosa deve succedere, a parole: «Dopo il clic, il paragrafo dice "Ciao, Luca!"». */
  descrizione: string;
  /** Dove guardare se non succede. Mai la riga da scrivere. */
  hint: string;
}

export type Controllo =
  /** Il testo visibile (textContent) di un elemento, spazi normalizzati. */
  | ({ controlla: 'testo'; di: string; uguale?: string; contiene?: string } & ControlloBase)
  /** L'HTML interno di un elemento contiene un frammento (per i tag messi con innerHTML). */
  | ({ controlla: 'html'; di: string; contiene: string } & ControlloBase)
  /** Una proprietà dello stile calcolato; i colori valgono in qualunque notazione. Più valori = uno qualsiasi. */
  | ({ controlla: 'stile'; di: string; proprieta: string; valore: string | string[] } & ControlloBase)
  /** L'elemento si vede (display e visibility suoi e dei suoi antenati). */
  | ({ controlla: 'visibile'; di: string; visibile: boolean } & ControlloBase)
  /** L'ultimo alert fatto dalla pagina. */
  | ({ controlla: 'alert'; uguale?: string; contiene?: string } & ControlloBase)
  /** Quanti alert sono stati fatti finora nella prova. */
  | ({ controlla: 'alerts'; quanti: number } & ControlloBase)
  /** Almeno N prompt sono stati fatti finora nella prova (la domanda è stata posta davvero). */
  | ({ controlla: 'prompt'; almeno: number } & ControlloBase)
  /** Qualcosa scritto con console.log contiene questo testo. */
  | ({ controlla: 'console'; contiene: string } & ControlloBase);

export type Passo = Azione | Controllo;

export const eControllo = (p: Passo): p is Controllo => 'controlla' in p;

export interface Prova {
  /** Come la si racconta all'allievo: «rispondendo "Luca" alla domanda». */
  nome?: string;
  passi: Passo[];
}

/** Una fase di un compito: la consegna, le prove (la prima mostrata, le altre nascoste), la regola per il giudice. */
export interface Fase {
  consegna: string;
  prove: Prova[];
  /** La regola didattica a parole che il giudice controlla sul codice promosso. */
  regola?: string;
  /** Il JavaScript con cui parte l'editor alla fase 1 (le altre ripartono dal codice della fase prima). */
  codiceIniziale?: string;
}

/* ------------------------------------------------------------------ gli esiti */

export interface EsitoControllo {
  ok: boolean;
  descrizione: string;
  hint: string;
  /** Che cosa c'è davvero (testo, valore, ultimo alert), per far vedere la differenza. */
  attuale?: string;
}

export interface EsitoProva {
  ok: boolean;
  nome?: string;
  controlli: EsitoControllo[];
  /** Errori JavaScript della pagina, già tradotti in italiano. */
  errori: string[];
  alerts: string[];
  console: string[];
  /** La pagina non ha risposto in tempo: un ciclo infinito, di solito. */
  tempoScaduto?: boolean;
}

export interface Valutazione {
  promosso: boolean;
  /** L'hint da mostrare all'allievo se non è promosso. */
  hint: string | null;
  prove: EsitoProva[];
}
