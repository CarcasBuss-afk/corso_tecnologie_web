/* Scorciatoie per scrivere i passi delle prove in modo leggibile. Ogni controllo ha la sua
 * descrizione (quella che l'allievo legge nella checklist) e il suo hint. */
import type { Azione, Controllo } from '../motore/tipi';

const sel = (id: string) => (id.startsWith('#') || id.startsWith('.') ? id : `#${id}`);

/* ------------------------------------------------------------------- azioni */

export const clic = (id: string, etichetta: string): Azione => ({ fai: 'clic', su: sel(id), descrizione: `Clic su «${etichetta}»` });

export const scrivi = (id: string, valore: string, etichetta: string): Azione => ({
  fai: 'scrivi',
  in: sel(id),
  valore,
  descrizione: `Nella casella «${etichetta}» si scrive ${valore === '' ? 'niente (vuota)' : `«${valore}»`}`,
});

export const risposte = (...r: string[]): Azione => ({
  fai: 'prompt',
  risposte: r,
  descrizione: r.length === 1 ? `Alla domanda si risponde «${r[0]}»` : `Alle domande si risponde, nell'ordine: ${r.map((x) => `«${x}»`).join(', ')}`,
});

export const conferme = (...r: boolean[]): Azione => ({
  fai: 'confirm',
  risposte: r,
  descrizione: r.length === 1 ? `Alla finestra di conferma si risponde ${r[0] ? 'OK' : 'Annulla'}` : `Alle conferme si risponde: ${r.map((x) => (x ? 'OK' : 'Annulla')).join(', ')}`,
});

/* ---------------------------------------------------------------- controlli */

export const testo = (id: string, uguale: string, descrizione: string, hint: string): Controllo => ({
  controlla: 'testo',
  di: sel(id),
  uguale,
  descrizione,
  hint,
});

export const testoContiene = (id: string, contiene: string, descrizione: string, hint: string): Controllo => ({
  controlla: 'testo',
  di: sel(id),
  contiene,
  descrizione,
  hint,
});

export const htmlContiene = (id: string, contiene: string, descrizione: string, hint: string): Controllo => ({
  controlla: 'html',
  di: sel(id),
  contiene,
  descrizione,
  hint,
});

export const stile = (id: string, proprieta: string, valore: string | string[], descrizione: string, hint: string): Controllo => ({
  controlla: 'stile',
  di: sel(id),
  proprieta,
  valore,
  descrizione,
  hint,
});

export const visibile = (id: string, siVede: boolean, descrizione: string, hint: string): Controllo => ({
  controlla: 'visibile',
  di: sel(id),
  visibile: siVede,
  descrizione,
  hint,
});

export const alertUguale = (uguale: string, descrizione: string, hint: string): Controllo => ({ controlla: 'alert', uguale, descrizione, hint });

export const alertsQuanti = (quanti: number, descrizione: string, hint: string): Controllo => ({ controlla: 'alerts', quanti, descrizione, hint });

export const domandaFatta = (almeno: number, descrizione: string, hint: string): Controllo => ({ controlla: 'prompt', almeno, descrizione, hint });

/* ------------------------------------------------------------------- colori */

/** Famiglie di colori: nel compito si chiede «giallo», e vale qualunque giallo ragionevole. */
export const GIALLI = ['yellow', 'gold', '#ffff00', '#ffd700', '#ffeb3b', '#ffe135', 'khaki', 'lemonchiffon', 'lightyellow'];
export const GRIGI = ['gray', 'grey', '#808080', 'darkgray', 'darkgrey', 'lightgray', 'lightgrey', 'silver', 'dimgray', 'dimgrey', '#999999', '#cccccc', '#aaaaaa', '#bbbbbb', '#888888'];
export const VERDI = ['green', 'lime', 'limegreen', 'mediumseagreen', 'seagreen', 'forestgreen', 'darkgreen', '#008000', '#00ff00', '#2ecc71', '#27ae60', '#4caf50'];
export const ROSSI = ['red', 'tomato', 'crimson', 'firebrick', 'darkred', 'orangered', '#ff0000', '#e74c3c', '#c0392b', '#f44336'];

/** Il CSS di base di tutte le pagine dei compiti: pulito, con soli selettori di tag (come nel corso). */
export const CSS_BASE = `body {
  font-family: Arial, sans-serif;
  padding: 30px;
  text-align: center;
  background-color: #fafafa;
  color: #222;
}

h1 {
  color: #333;
}

button {
  padding: 12px 22px;
  font-size: 17px;
  margin: 6px;
  border: none;
  border-radius: 8px;
  background-color: #4f46e5;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #4338ca;
}

p {
  font-size: 20px;
}

input {
  padding: 8px;
  font-size: 16px;
  width: 90px;
  margin: 6px;
}

label {
  display: block;
  margin: 8px;
  font-size: 18px;
}`;
