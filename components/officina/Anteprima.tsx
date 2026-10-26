'use client';
/* L'anteprima vera della pagina dell'allievo: un iframe sandbox dove i pulsanti si cliccano
 * e i prompt sono finestre vere. Si aggiorna mentre scrive (con un piccolo ritardo) e si
 * può riavviare a mano per ripartire da zero. Si allunga trascinando l'angolo in basso e si
 * ingrandisce a tutto schermo: è lo stesso iframe che cambia posto (solo CSS), quindi la
 * pagina non riparte e quello che l'allievo ha cliccato resta. */
import { useEffect, useMemo, useState } from 'react';
import { componiPagina } from '@/lib/officina/motore/pagina';
import type { Sorgente } from '@/lib/officina/motore/tipi';

const RITARDO_MS = 800;

export default function Anteprima({ sorgente, altezza = '320px' }: { sorgente: Sorgente; altezza?: string }) {
  const [mostrato, setMostrato] = useState(sorgente);
  const [versione, setVersione] = useState(0);
  const [grande, setGrande] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMostrato(sorgente), RITARDO_MS);
    return () => clearTimeout(t);
  }, [sorgente]);

  // A tutto schermo: Esc chiude e la pagina sotto non scorre.
  useEffect(() => {
    if (!grande) return;
    const alTasto = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setGrande(false);
    };
    window.addEventListener('keydown', alTasto);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', alTasto);
      document.body.style.overflow = overflow;
    };
  }, [grande]);

  const srcDoc = useMemo(() => componiPagina(mostrato), [mostrato]);

  return (
    <>
      {/* Sempre nello stesso posto (false o il velo): così la sezione dopo non si ricrea e l'iframe non riparte. */}
      {grande ? <div aria-hidden className="fixed inset-0 z-40 bg-black/70" onClick={() => setGrande(false)} /> : null}
      <section
        aria-label="anteprima"
        className={`flex flex-col overflow-hidden rounded-2xl border border-(--color-bordo) bg-(--color-fondo-card) ${grande ? 'fixed inset-2 z-50 shadow-2xl sm:inset-6' : ''}`}
      >
        <div className="flex items-center gap-2 border-b border-(--color-bordo) px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 flex-1 truncate rounded bg-black/40 px-2 py-0.5 font-mono text-xs text-(--color-testo-tenue)">la-tua-pagina.html</span>
          <button type="button" onClick={() => setVersione((v) => v + 1)} className="text-xs text-(--color-testo-tenue) underline hover:text-(--color-testo)">
            ↻ riavvia
          </button>
          <button
            type="button"
            onClick={() => setGrande((g) => !g)}
            aria-pressed={grande}
            title={grande ? 'Torna alla vista piccola (Esc)' : 'Guarda la pagina a tutto schermo'}
            className="rounded px-1.5 text-sm text-(--color-testo-tenue) hover:bg-white/10 hover:text-(--color-testo)"
          >
            {grande ? '✕ chiudi' : '⤢ ingrandisci'}
          </button>
        </div>
        {/* Nella vista piccola si allunga trascinando l'angolo in basso a destra. */}
        <div className={grande ? 'flex-1' : 'min-h-40 resize-y overflow-hidden'} style={grande ? undefined : { height: altezza }}>
          <iframe key={versione} srcDoc={srcDoc} title="anteprima della tua pagina" sandbox="allow-scripts allow-modals" className="h-full w-full border-0 bg-white" />
        </div>
      </section>
    </>
  );
}
