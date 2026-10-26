/* L'esecutore sul server: la pagina dell'allievo gira in jsdom, con il correttore dentro e
 * il suo JavaScript eseguito con un timeout (un `while (true)` non ferma il server). Ogni
 * prova parte da una pagina nuova, come nel browser. Solo Node: niente nel bundle client. */
import 'server-only';
import vm from 'node:vm';
import { JSDOM, VirtualConsole } from 'jsdom';
import { CORRETTORE_JS } from './correttore';
import { componiPagina, RIGOROSO } from './pagina';
import type { EsitoProva, Passo, Prova, Sorgente } from './tipi';

/** Quanto può durare, in tutto, l'esecuzione del codice dell'allievo in una prova. */
export const TIMEOUT_PROVA_MS = 2000;

/** L'errore del timeout di `vm` (niente instanceof: nei test l'Error è di un altro realm). */
const eTimeout = (e: unknown) => {
  const err = e as { code?: string; message?: string } | null;
  return Boolean(err && (err.code === 'ERR_SCRIPT_EXECUTION_TIMEOUT' || /Script execution timed out/i.test(String(err.message ?? ''))));
};

/**
 * Esegue una prova: costruisce la pagina (HTML e CSS dati, senza lo script dell'allievo),
 * fa partire il correttore, poi il codice dell'allievo come farebbe il browser in fondo al
 * body, infine i passi. Gli errori del codice finiscono fra gli errori dell'esito, come
 * nel browser con l'evento `error`.
 */
export function eseguiProvaServer(sorgente: Sorgente, prova: Prova, timeoutMs = TIMEOUT_PROVA_MS): EsitoProva {
  const virtualConsole = new VirtualConsole();
  // Il rumore di jsdom (CSS che non capisce, "not implemented") non interessa l'allievo.
  virtualConsole.on('jsdomError', () => {});
  const dom = new JSDOM(componiPagina(sorgente, { correttore: false, conJs: false }), {
    runScripts: 'outside-only',
    pretendToBeVisual: true,
    virtualConsole,
    url: 'https://officina.locale/pagina.html',
  });
  const ctx = dom.getInternalVMContext();
  try {
    // I timer non si eseguono: il codice dell'allievo deve finire subito, e un setInterval
    // impazzito non deve sopravvivere alla prova.
    vm.runInContext('window.setTimeout = function () { return 0; }; window.setInterval = function () { return 0; };', ctx);
    new vm.Script(CORRETTORE_JS, { filename: 'correttore.js' }).runInContext(ctx);

    let compilato: vm.Script | null = null;
    try {
      // Modalità rigorosa come nel browser (pagina.ts), sulla stessa riga: i numeri di riga non cambiano.
      compilato = new vm.Script(`${RIGOROSO} ${sorgente.js}`, { filename: 'script.js' });
    } catch (e) {
      aggiungiErrore(ctx, e);
    }
    if (compilato) {
      try {
        compilato.runInContext(ctx, { timeout: timeoutMs });
      } catch (e) {
        if (eTimeout(e)) return scaduta(prova);
        aggiungiErrore(ctx, e);
      }
    }

    let esito: EsitoProva;
    try {
      const grezzo = vm.runInContext(`JSON.stringify(window.__officina.esegui(${JSON.stringify(prova.passi as Passo[])}))`, ctx, {
        timeout: timeoutMs,
      }) as string;
      esito = JSON.parse(grezzo) as EsitoProva;
    } catch (e) {
      if (eTimeout(e)) return scaduta(prova);
      throw e;
    }
    return { ...esito, nome: prova.nome };
  } finally {
    dom.window.close();
  }
}

function aggiungiErrore(ctx: vm.Context, e: unknown): void {
  const messaggio = e instanceof Error ? `${e.name}: ${e.message}` : String(e);
  vm.runInContext(`window.__officina.errori.push(${JSON.stringify(messaggio)})`, ctx);
}

function scaduta(prova: Prova): EsitoProva {
  return { ok: false, nome: prova.nome, controlli: [], errori: [], alerts: [], console: [], tempoScaduto: true };
}

/** Tutte le prove di una fase, nell'ordine; si ferma alla prima che non passa (le altre non servono). */
export function eseguiProveServer(sorgente: Sorgente, prove: Prova[]): EsitoProva[] {
  const esiti: EsitoProva[] = [];
  for (const prova of prove) {
    const esito = eseguiProvaServer(sorgente, prova);
    esiti.push(esito);
    if (!esito.ok) break;
  }
  return esiti;
}
