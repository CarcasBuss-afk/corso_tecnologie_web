'use client';
/* L'anteprima vera della pagina dell'allievo: un iframe sandbox dove i pulsanti si cliccano
 * e i prompt sono finestre vere. Si aggiorna mentre scrive (con un piccolo ritardo) e si
 * può riavviare a mano per ripartire da zero. Si allunga trascinando l'angolo in basso e si
 * ingrandisce a tutto schermo: è lo stesso iframe che cambia posto (solo CSS), quindi la
 * pagina non riparte e quello che l'allievo ha cliccato resta. Sotto, la console: le righe di
 * console.log e gli errori, come negli strumenti del browser (F12), che si svuota a ogni riavvio. */
import { useEffect, useMemo, useRef, useState } from 'react';
import { CANALE_CONSOLE, componiPagina } from '@/lib/officina/motore/pagina';
import type { Sorgente } from '@/lib/officina/motore/tipi';

const RITARDO_MS = 800;
/** Oltre queste righe la console tiene solo le ultime: un ciclo che stampa troppo non blocca la pagina. */
const MAX_RIGHE = 200;

type RigaConsole = { tipo: 'log' | 'errore'; testo: string };

let pagine = 0;

export default function Anteprima({ sorgente, altezza = '320px' }: { sorgente: Sorgente; altezza?: string }) {
  const [mostrato, setMostrato] = useState(sorgente);
  const [versione, setVersione] = useState(0);
  const [grande, setGrande] = useState(false);
  // Le righe della console con il contrassegno della pagina da cui arrivano: quando la pagina
  // cambia (o si riavvia) le vecchie non valgono più, senza svuotare niente a mano.
  const [log, setLog] = useState<{ pagina: string; righe: RigaConsole[] }>({ pagina: '', righe: [] });
  const cornice = useRef<HTMLIFrameElement>(null);

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

  // Un contrassegno nuovo per ogni pagina e ogni riavvio.
  const pagina = useMemo(() => `p${++pagine}`, [mostrato, versione]);
  const srcDoc = useMemo(() => componiPagina(mostrato, { console: pagina }), [mostrato, pagina]);
  const paginaRef = useRef(pagina);
  paginaRef.current = pagina;

  // La console ascolta solo il suo iframe e solo la pagina in corso.
  useEffect(() => {
    const alMessaggio = (e: MessageEvent) => {
      const d = e.data as { canale?: string; pagina?: string; tipo?: string; testo?: string } | null;
      if (!d || d.canale !== CANALE_CONSOLE || d.pagina !== paginaRef.current || e.source !== cornice.current?.contentWindow) return;
      const riga: RigaConsole = { tipo: d.tipo === 'errore' ? 'errore' : 'log', testo: String(d.testo ?? '') };
      setLog((l) => (l.pagina === d.pagina ? { pagina: l.pagina, righe: [...l.righe, riga].slice(-MAX_RIGHE) } : { pagina: d.pagina!, righe: [riga] }));
    };
    window.addEventListener('message', alMessaggio);
    return () => window.removeEventListener('message', alMessaggio);
  }, []);
  const righe = log.pagina === pagina ? log.righe : [];

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
          <iframe ref={cornice} key={versione} srcDoc={srcDoc} title="anteprima della tua pagina" sandbox="allow-scripts allow-modals" className="h-full w-full border-0 bg-white" />
        </div>
        <div aria-label="console" className="border-t border-(--color-bordo) bg-black/50 px-3 py-2 font-mono text-sm">
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-(--color-testo-tenue)">Console</p>
          <ol className={`flex flex-col gap-0.5 overflow-y-auto ${grande ? 'max-h-48' : 'max-h-32'}`}>
            {righe.length === 0 ? (
              <li className="text-(--color-testo-tenue) italic">vuota: qui compare quello che scrivi con console.log</li>
            ) : (
              righe.map((r, i) => (
                <li key={i} className={`whitespace-pre-wrap break-words ${r.tipo === 'errore' ? 'text-red-300' : 'text-(--color-testo)'}`}>
                  {r.tipo === 'errore' ? '⚠️ ' : '› '}
                  {r.testo}
                </li>
              ))
            )}
          </ol>
        </div>
      </section>
    </>
  );
}
