/* Compone la pagina intera dai tre pannelli (HTML, CSS, JavaScript), come la vedrebbe il
 * browser aprendo il file dell'allievo: lo script in fondo al body, come insegna il corso.
 * Con il correttore dentro, per l'iframe nascosto e per jsdom; senza, per l'anteprima vera.
 * Modulo puro. */
import { CORRETTORE_JS } from './correttore';
import type { Sorgente } from './tipi';

/**
 * Il codice dell'allievo gira in modalità rigorosa: una variabile usata senza let (nome = ...)
 * è un errore, non una variabile globale creata di nascosto. Sta sulla stessa riga del tag,
 * così la riga 1 dell'editor è la riga del tag.
 */
export const RIGOROSO = '"use strict";';

/** `</script>` dentro uno script chiuderebbe il tag: si spezza. Idem per `</style>`. */
const senzaChiusura = (testo: string, tag: string) => testo.replace(new RegExp(`</${tag}`, 'gi'), `<\\/${tag}`);

export interface OpzioniPagina {
  /** Mette il correttore in testa alla pagina. */
  correttore?: boolean;
  /** Mette il JavaScript dell'allievo in fondo al body (sul server lo si esegue a parte). */
  conJs?: boolean;
  /**
   * Manda console.log ed errori alla pagina che contiene l'iframe (la console dell'anteprima),
   * con questo contrassegno: la console tiene solo le righe della pagina in corso.
   */
  console?: string;
}

/** Il marcatore dei messaggi dall'anteprima alla sua console. */
export const CANALE_CONSOLE = 'officina-console';

/** Lo script che inoltra console.log ed errori a chi contiene l'iframe: la console dell'anteprima. */
const inoltraConsole = (contrassegno: string) => `(function () {
  function manda(tipo, testo) { try { parent.postMessage({ canale: '${CANALE_CONSOLE}', pagina: ${JSON.stringify(contrassegno)}, tipo: tipo, testo: testo }, '*'); } catch (e) {} }
  var log = console.log;
  console.log = function () {
    var parti = [];
    for (var i = 0; i < arguments.length; i++) parti.push(String(arguments[i]));
    manda('log', parti.join(' '));
    return log.apply(console, arguments);
  };
  window.addEventListener('error', function (e) {
    var riga = e && e.lineno ? e.lineno - (window.__officinaScarto || 0) : 0;
    manda('errore', (e && e.message ? e.message : 'Errore') + (riga > 0 ? ' (riga ' + riga + ')' : ''));
  });
})();`;

const SEGNAPOSTO_SCARTO = '__SCARTO__';

/**
 * In un iframe srcdoc Chrome conta le righe degli errori dall'inizio del documento, non dallo
 * script. Lo scarto (le righe prima di quella del tag <script> dell'allievo) sta in
 * window.__officinaScarto, una riga in testa alla pagina: il correttore e la console lo
 * sottraggono, e la riga dell'errore è quella dell'editor. Sul server (jsdom) il codice gira
 * a parte e lo scarto non serve.
 */
export function componiPagina(s: Sorgente, { correttore = false, conJs = true, console: contrassegno }: OpzioniPagina = {}): string {
  const righe = [
    '<!DOCTYPE html>',
    '<html lang="it">',
    '<head>',
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    conJs ? `<script>window.__officinaScarto = ${SEGNAPOSTO_SCARTO};</script>` : '',
    correttore ? `<script>${CORRETTORE_JS}</script>` : '',
    contrassegno !== undefined ? `<script>${inoltraConsole(contrassegno)}</script>` : '',
    `<style>\n${senzaChiusura(s.css, 'style')}\n</style>`,
    '</head>',
    '<body>',
    s.html,
    conJs ? `<script>${RIGOROSO} ${senzaChiusura(s.js, 'script')}\n</script>` : '',
    '</body>',
    '</html>',
  ].filter((r) => r !== '');
  const pagina = righe.join('\n');
  if (!conJs) return pagina;
  const inizio = pagina.indexOf(`<script>${RIGOROSO} `);
  const rigaTag = pagina.slice(0, inizio).split('\n').length;
  return pagina.replace(SEGNAPOSTO_SCARTO, String(rigaTag - 1));
}
