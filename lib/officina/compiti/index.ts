/* Il catalogo dei compiti dell'Officina web (OFFICINA.md §4): i generatori, e le funzioni
 * per ottenere un compito dal seme dell'allievo. Da importare solo sul server e nei test:
 * contiene le prove nascoste e le soluzioni di riferimento. L'elenco (id, titoli, sezioni)
 * sta in elenco.ts, che il browser può importare. */
import { generaBacheca } from './bacheca';
import { generaBiglietteria } from './biglietteria';
import { generaBiglietto } from './biglietto';
import { generaCartellino } from './cartellino';
import { generaConvertitore } from './convertitore';
import { generaGiostra } from './giostra';
import { generaSaluto } from './saluto';
import { generaSemaforo } from './semaforo';
import { generaTermometro } from './termometro';
import { generaCampanello } from './campanello';
import { generaCitofono } from './citofono';
import type { CompitoId } from './elenco';
import { generaIscrizione } from './iscrizione';
import { generaLampada } from './lampada';
import { generaMagliette } from './magliette';
import { generaPagella } from './pagella';
import { generaPizzeria } from './pizzeria';
import { generaPorta } from './porta';
import { generaRaddoppiatore } from './raddoppiatore';
import { generaScontrino } from './scontrino';
import { generaTabellone } from './tabellone';
import type { Compito, GeneratoreCompito, SchedaCompito } from './tipi';

export type { Compito, SchedaCompito } from './tipi';
export { COMPITI_PER_LEZIONE, eCompito, eEsame, eFacoltativo, ELENCO_COMPITI, fasiDi, lezioneCompito, livelloDi, SEZIONI, sezioneDi, titoloCompito, type CompitoId, type Livello, type Sezione } from './elenco';

const GENERATORI: Record<CompitoId, GeneratoreCompito> = {
  biglietto: generaBiglietto,
  saluto: generaSaluto,
  biglietteria: generaBiglietteria,
  cartellino: generaCartellino,
  semaforo: generaSemaforo,
  termometro: generaTermometro,
  convertitore: generaConvertitore,
  giostra: generaGiostra,
  scontrino: generaScontrino,
  campanello: generaCampanello,
  citofono: generaCitofono,
  bacheca: generaBacheca,
  tabellone: generaTabellone,
  lampada: generaLampada,
  porta: generaPorta,
  pizzeria: generaPizzeria,
  iscrizione: generaIscrizione,
  raddoppiatore: generaRaddoppiatore,
  magliette: generaMagliette,
  pagella: generaPagella,
};

export function generaCompito(id: CompitoId, seme: number): Compito {
  return GENERATORI[id](seme);
}

export function schedaCompito(id: CompitoId, seme: number): SchedaCompito {
  return generaCompito(id, seme).scheda;
}
