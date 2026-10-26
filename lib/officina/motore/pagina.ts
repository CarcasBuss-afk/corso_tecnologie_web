/* Compone la pagina intera dai tre pannelli (HTML, CSS, JavaScript), come la vedrebbe il
 * browser aprendo il file dell'allievo: lo script in fondo al body, come insegna il corso.
 * Con il correttore dentro, per l'iframe nascosto e per jsdom; senza, per l'anteprima vera.
 * Modulo puro. */
import { CORRETTORE_JS } from './correttore';
import type { Sorgente } from './tipi';

/**
 * Il codice dell'allievo gira in modalità rigorosa: una variabile usata senza let (nome = ...)
 * è un errore, non una variabile globale creata di nascosto. Sta sulla stessa riga del tag,
 * così i numeri di riga degli errori restano quelli dell'editor.
 */
export const RIGOROSO = '"use strict";';

/** `</script>` dentro uno script chiuderebbe il tag: si spezza. Idem per `</style>`. */
const senzaChiusura = (testo: string, tag: string) => testo.replace(new RegExp(`</${tag}`, 'gi'), `<\\/${tag}`);

export interface OpzioniPagina {
  /** Mette il correttore in testa alla pagina. */
  correttore?: boolean;
  /** Mette il JavaScript dell'allievo in fondo al body (sul server lo si esegue a parte). */
  conJs?: boolean;
}

export function componiPagina(s: Sorgente, { correttore = false, conJs = true }: OpzioniPagina = {}): string {
  return [
    '<!DOCTYPE html>',
    '<html lang="it">',
    '<head>',
    '<meta charset="UTF-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1">',
    correttore ? `<script>${CORRETTORE_JS}</script>` : '',
    `<style>\n${senzaChiusura(s.css, 'style')}\n</style>`,
    '</head>',
    '<body>',
    s.html,
    // Il codice comincia sulla riga del tag: Chrome conta le righe da lì, così coincidono con l'editor.
    conJs ? `<script>${RIGOROSO} ${senzaChiusura(s.js, 'script')}\n</script>` : '',
    '</body>',
    '</html>',
  ]
    .filter((r) => r !== '')
    .join('\n');
}
