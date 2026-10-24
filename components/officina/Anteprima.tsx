'use client';
/* L'anteprima vera della pagina dell'allievo: un iframe sandbox dove i pulsanti si cliccano
 * e i prompt sono finestre vere. Si aggiorna mentre scrive (con un piccolo ritardo) e si
 * può riavviare a mano per ripartire da zero. */
import { useEffect, useMemo, useState } from 'react';
import { componiPagina } from '@/lib/officina/motore/pagina';
import type { Sorgente } from '@/lib/officina/motore/tipi';

const RITARDO_MS = 800;

export default function Anteprima({ sorgente, altezza = '320px' }: { sorgente: Sorgente; altezza?: string }) {
  const [mostrato, setMostrato] = useState(sorgente);
  const [versione, setVersione] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMostrato(sorgente), RITARDO_MS);
    return () => clearTimeout(t);
  }, [sorgente]);

  const srcDoc = useMemo(() => componiPagina(mostrato), [mostrato]);

  return (
    <section aria-label="anteprima" className="flex flex-col overflow-hidden rounded-2xl border border-(--color-bordo) bg-(--color-fondo-card)">
      <div className="flex items-center gap-2 border-b border-(--color-bordo) px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 flex-1 rounded bg-black/40 px-2 py-0.5 font-mono text-xs text-(--color-testo-tenue)">la-tua-pagina.html</span>
        <button type="button" onClick={() => setVersione((v) => v + 1)} className="text-xs text-(--color-testo-tenue) underline hover:text-(--color-testo)">
          ↻ riavvia
        </button>
      </div>
      <iframe
        key={versione}
        srcDoc={srcDoc}
        title="anteprima della tua pagina"
        sandbox="allow-scripts allow-modals"
        className="w-full border-0 bg-white"
        style={{ height: altezza }}
      />
    </section>
  );
}
