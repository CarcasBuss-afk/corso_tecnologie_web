/* Il catalogo dei compiti dell'Officina web (OFFICINA.md §4): i generatori, e le funzioni
 * per ottenere un compito dal seme dell'allievo. Da importare solo sul server e nei test:
 * contiene le prove nascoste e le soluzioni di riferimento. L'elenco (id, titoli, sezioni)
 * sta in elenco.ts, che il browser può importare. */
import { semeDelGiro } from '../regole';
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
import { generaCampo } from './campo';
import { generaCitofono } from './citofono';
import type { CompitoId } from './elenco';
import { generaGita } from './gita';
import { generaIscrizione } from './iscrizione';
import { generaLampada } from './lampada';
import { generaMagliette } from './magliette';
import { generaPagella } from './pagella';
import { generaPaghetta } from './paghetta';
import { generaPizzeria } from './pizzeria';
import { generaPorta } from './porta';
import { generaPulsantiera } from './pulsantiera';
import { generaQuiz } from './quiz';
import { generaRaddoppiatore } from './raddoppiatore';
import { generaScontrino } from './scontrino';
import { generaTabellone } from './tabellone';
import { generaTelecomando } from './telecomando';
import { generaTema } from './tema';
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
  telecomando: generaTelecomando,
  paghetta: generaPaghetta,
  pulsantiera: generaPulsantiera,
  tema: generaTema,
  quiz: generaQuiz,
  gita: generaGita,
  campo: generaCampo,
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

/** Quanti semi provare per un ripasso con dati diversi: i compiti con pochi dati possibili ne scartano qualcuno. */
const VARIANTI_RIPASSO = 20;

/**
 * Il seme del ripasso numero `giro`: il primo che dà una scheda (dati, testi) diversa da
 * quelle dei semi da evitare, cioè il primo giro e il ripasso prima. Se il compito non ne
 * ha di diverse, il primo seme provato.
 */
export function semeRipasso(uid: string, id: CompitoId, giro: number, evita: number[]): number {
  const scheda = (seme: number) => JSON.stringify(generaCompito(id, seme).scheda);
  const viste = new Set(evita.map(scheda));
  for (let v = 0; v < VARIANTI_RIPASSO; v++) {
    const seme = semeDelGiro(uid, id, giro, v);
    if (!viste.has(scheda(seme))) return seme;
  }
  return semeDelGiro(uid, id, giro);
}

export function schedaCompito(id: CompitoId, seme: number): SchedaCompito {
  return generaCompito(id, seme).scheda;
}
