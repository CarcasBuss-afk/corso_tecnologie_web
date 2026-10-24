'use client';
/* La correzione in tempo reale nel browser: a ogni modifica (con un piccolo ritardo) la
 * pagina dell'allievo viene costruita in un iframe sandbox nascosto, con il correttore
 * dentro, e si esegue la prova mostrata. Stesso script del server, ma qui non si promuove
 * niente: serve a far vedere la checklist che si accende mentre si scrive. */
import { useEffect, useRef, useState } from 'react';
import { CANALE } from '@/lib/officina/motore/correttore';
import { componiPagina } from '@/lib/officina/motore/pagina';
import type { EsitoProva, Prova, Sorgente } from '@/lib/officina/motore/tipi';

const RITARDO_MS = 600;
const TIMEOUT_MS = 3000;

let contatore = 0;

/** Esegue una prova nel browser, in un iframe nascosto creato al volo e distrutto alla fine. */
export function eseguiProvaBrowser(sorgente: Sorgente, prova: Prova): Promise<EsitoProva> {
  return new Promise((risolvi) => {
    const id = `prova-${++contatore}`;
    const iframe = document.createElement('iframe');
    iframe.setAttribute('sandbox', 'allow-scripts');
    iframe.setAttribute('aria-hidden', 'true');
    iframe.tabIndex = -1;
    iframe.style.cssText = 'position:fixed;width:600px;height:400px;left:-10000px;top:0;opacity:0;pointer-events:none;';
    let finito = false;

    const concludi = (esito: EsitoProva) => {
      if (finito) return;
      finito = true;
      window.removeEventListener('message', alMessaggio);
      clearTimeout(timer);
      iframe.remove();
      risolvi({ ...esito, nome: prova.nome });
    };

    const alMessaggio = (e: MessageEvent) => {
      const d = e.data as { canale?: string; tipo?: string; id?: string; esito?: EsitoProva } | null;
      if (!d || d.canale !== CANALE || d.tipo !== 'esito' || d.id !== id || !d.esito) return;
      concludi(d.esito);
    };
    window.addEventListener('message', alMessaggio);

    // Se la pagina non risponde (un ciclo infinito), l'iframe si butta via e si dice perché.
    const timer = setTimeout(() => concludi({ ok: false, controlli: [], errori: [], alerts: [], console: [], tempoScaduto: true }), TIMEOUT_MS);

    iframe.addEventListener('load', () => {
      iframe.contentWindow?.postMessage({ canale: CANALE, tipo: 'esegui', id, passi: prova.passi }, '*');
    });
    iframe.srcdoc = componiPagina(sorgente, { correttore: true });
    document.body.appendChild(iframe);
  });
}

/** L'esito della prova mostrata sul codice com'è adesso, aggiornato con un piccolo ritardo. */
export function useCorrezione(sorgente: Sorgente | null, prova: Prova | null) {
  const [esito, setEsito] = useState<EsitoProva | null>(null);
  const [inCorso, setInCorso] = useState(false);
  const ultima = useRef(0);

  useEffect(() => {
    if (!sorgente || !prova) {
      setEsito(null);
      return;
    }
    const mia = ++ultima.current;
    setInCorso(true);
    const timer = setTimeout(() => {
      void eseguiProvaBrowser(sorgente, prova).then((e) => {
        if (ultima.current !== mia) return; // nel frattempo ha scritto altro
        setEsito(e);
        setInCorso(false);
      });
    }, RITARDO_MS);
    return () => clearTimeout(timer);
  }, [sorgente, prova]);

  return { esito, inCorso };
}
