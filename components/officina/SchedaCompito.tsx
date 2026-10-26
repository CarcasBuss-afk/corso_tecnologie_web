'use client';
/* La scheda del compito di realtà: chi lo chiede, che cosa deve fare la pagina, i dati, e il
 * risultato finale punto per punto. Si legge all'apertura e resta sopra l'editor per tutto il
 * compito: è il bersaglio, e nel compito di realtà il bersaglio si vede. */
import { useState } from 'react';
import type { SchedaCompito as Scheda } from '@/lib/officina/compiti/tipi';

export default function SchedaCompito({ scheda, fase, fasi, sempreAperta = false }: { scheda: Scheda; fase: number; fasi: number; sempreAperta?: boolean }) {
  // Aperta e fissa sulla traccia iniziale (TracciaIniziale), che si legge prima di cominciare;
  // nella pagina di lavoro parte chiusa, perché l'allievo l'ha appena letta: lo spazio serve al codice.
  const [aperta, setAperta] = useState(sempreAperta);
  return (
    <section className="rounded-2xl border border-(--color-giallo)/40 bg-(--color-giallo)/5 p-4 sm:p-5">
      <button type="button" onClick={() => !sempreAperta && setAperta((a) => !a)} aria-expanded={aperta} disabled={sempreAperta} className="flex w-full items-center justify-between gap-3 text-left">
        <span>
          <span className="text-sm font-bold uppercase tracking-wide text-(--color-giallo)">Compito di realtà · {scheda.lezione}</span>
          <span className="block text-xl font-black">{scheda.titolo}</span>
        </span>
        <span className="text-sm text-(--color-testo-tenue)">
          fase {fase} di {fasi} {sempreAperta ? '' : aperta ? '▲' : '▼'}
        </span>
      </button>

      {aperta && (
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <p>{scheda.committente}</p>
            <p className="text-(--color-testo-tenue)">{scheda.prodotto}</p>
            <ul className="mt-1 flex flex-wrap gap-2">
              {scheda.dati.map((d) => (
                <li key={d} className="rounded-lg bg-black/40 px-2.5 py-1 font-mono text-sm">
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-1 text-sm font-bold text-(--color-testo-tenue)">La pagina finita:</p>
            <ul className="flex flex-col gap-1 rounded-xl border border-(--color-bordo) bg-black/40 p-3 text-sm leading-snug">
              {scheda.risultatoFinale.map((r) => (
                <li key={r} className="flex gap-2">
                  <span aria-hidden className="text-(--color-giallo)">
                    ▸
                  </span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
