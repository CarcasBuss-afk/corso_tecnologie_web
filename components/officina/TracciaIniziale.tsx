'use client';
/* L'apertura del compito: prima si legge la traccia, e basta. La scheda è aperta e sotto
 * c'è un conto alla rovescia; dopo qualche secondo compare il pulsante che apre la consegna,
 * la pagina e l'editor. Così nessuno salta dritto al codice senza sapere che cosa costruisce. */
import { useEffect, useRef, useState } from 'react';
import type { SchedaCompito as Scheda } from '@/lib/officina/compiti/tipi';
import SchedaCompito from './SchedaCompito';

/** Quanto si resta sulla traccia prima di poter cominciare. */
export const SECONDI_LETTURA = 10;

export default function TracciaIniziale({ scheda, fase, fasi, onInizia }: { scheda: Scheda; fase: number; fasi: number; onInizia: () => void }) {
  const [restano, setRestano] = useState(SECONDI_LETTURA);
  const pulsante = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (restano <= 0) {
      pulsante.current?.focus();
      return;
    }
    const t = setTimeout(() => setRestano((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [restano]);

  return (
    <>
      <SchedaCompito scheda={scheda} fase={fase} fasi={fasi} sempreAperta />

      <section aria-label="prima di cominciare" className="flex flex-col items-center gap-4 rounded-2xl border border-(--color-bordo) bg-(--color-fondo-card) p-5 text-center sm:p-6">
        <p className="text-lg">
          📖 <strong>Leggi bene la traccia</strong>: è quello che ti chiede il cliente, e la pagina finita che devi costruire.
        </p>
        {restano > 0 ? (
          <>
            <div className="h-2.5 w-full max-w-md overflow-hidden rounded-full bg-(--color-bordo)" aria-hidden>
              <div className="h-full rounded-full bg-(--color-giallo) transition-[width] duration-1000 ease-linear" style={{ width: `${((restano - 1) / SECONDI_LETTURA) * 100}%` }} />
            </div>
            <p role="timer" aria-live="off" className="text-(--color-testo-tenue)">
              Tra {restano} {restano === 1 ? 'secondo' : 'secondi'} puoi cominciare.
            </p>
          </>
        ) : (
          <button ref={pulsante} type="button" onClick={onInizia} className="entra rounded-lg bg-(--color-rosa) px-6 py-3 text-lg font-bold text-white hover:brightness-110">
            {fase > 1 ? `Ho letto: riprendo dalla fase ${fase} ▶` : 'Ho letto: cominciamo ▶'}
          </button>
        )}
      </section>
    </>
  );
}
