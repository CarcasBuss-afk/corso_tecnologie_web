'use client';
/* La festa della fase superata: coriandoli su tutta la pagina e un cartello al centro che
 * resta finché l'allievo non va avanti. Una frase d'incoraggiamento (diversa ogni volta),
 * quante fasi mancano e un'occhiata alla consegna dopo; a compito finito, il voto.
 * Invio o Esc chiudono, come il pulsante. */
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Coriandoli from './Coriandoli';
import Testo from './Testo';

const FRASI = [
  'Ottimo lavoro!',
  'Così si fa!',
  'Grande!',
  'Il tuo codice funziona!',
  'Bel colpo!',
  'Niente ti ferma!',
  'Da vero sviluppatore web!',
  'Fantastico!',
];

/** Una frase a caso, diversa dall'ultima mostrata. */
export function fraseFesta(precedente?: string): string {
  const scelta = FRASI.filter((f) => f !== precedente);
  return scelta[Math.floor(Math.random() * scelta.length)];
}

export interface Festa {
  /** La fase appena superata, da 1. */
  fase: number;
  fasiTotali: number;
  finito: boolean;
  voto: number | null;
  /** Quante consegne sbagliate prima di questa, nella fase. */
  tentativiSbagliati: number;
  frase: string;
  /** La consegna della fase dopo, se c'è. */
  prossima: string | null;
}

export default function FestaFase({ festa, onAvanti }: { festa: Festa; onAvanti: () => void }) {
  const [scoppio, setScoppio] = useState(0);
  const pulsante = useRef<HTMLButtonElement>(null);
  const avanti = useRef(onAvanti);
  avanti.current = onAvanti;

  useEffect(() => {
    setScoppio((n) => n + 1);
    pulsante.current?.focus();
    const alTasto = (e: KeyboardEvent) => {
      if (e.key === 'Escape') avanti.current();
    };
    window.addEventListener('keydown', alTasto);
    return () => window.removeEventListener('keydown', alTasto);
  }, []);

  const { fase, fasiTotali, finito } = festa;
  const mancano = fasiTotali - fase;
  const sottotitolo =
    festa.tentativiSbagliati === 0
      ? 'Al primo colpo, senza nessun errore! 🎯'
      : `Ce l'hai fatta dopo ${festa.tentativiSbagliati} ${festa.tentativiSbagliati === 1 ? 'tentativo sbagliato' : 'tentativi sbagliati'}: è proprio così che si impara.`;

  return (
    <>
      <Coriandoli scoppio={scoppio} />
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4" onClick={() => avanti.current()}>
        <section
          role="dialog"
          aria-modal="true"
          aria-label={finito ? 'compito finito' : 'fase superata'}
          onClick={(e) => e.stopPropagation()}
          className="festa flex w-full max-w-lg flex-col items-center gap-3 rounded-3xl border-4 border-(--color-giallo) bg-(--color-fondo-card) p-6 text-center shadow-2xl shadow-black/60 sm:p-8"
        >
          <span className="text-6xl" aria-hidden>
            {finito ? '🏆' : '🎉'}
          </span>
          <h2 className="text-3xl font-black text-(--color-giallo)">{finito ? 'Compito finito!' : `Fase ${fase} superata!`}</h2>
          <p className="text-xl font-bold">{festa.frase}</p>
          <p className="text-(--color-testo-tenue)">{sottotitolo}</p>

          <div className="flex w-full items-center gap-1" aria-label={`${fase} fasi su ${fasiTotali}`}>
            {Array.from({ length: fasiTotali }, (_, i) => (
              <div key={i} className={`h-3 flex-1 rounded-full ${i < fase ? 'bg-(--color-giallo)' : 'bg-(--color-bordo)'}`} />
            ))}
          </div>

          {finito ? (
            <>
              {festa.voto !== null && (
                <p className="text-(--color-testo-tenue)">
                  Il tuo voto: <span className="font-mono text-4xl font-black text-(--color-giallo)">{festa.voto}</span>
                </p>
              )}
              <div className="mt-2 flex flex-wrap justify-center gap-3">
                <Link href="/officina" className="rounded-lg bg-(--color-rosa) px-5 py-2.5 text-lg font-bold text-white hover:brightness-110">
                  Torna ai compiti
                </Link>
                <button ref={pulsante} onClick={() => avanti.current()} className="rounded-lg border border-(--color-bordo) px-5 py-2.5 text-lg font-bold hover:bg-white/5">
                  Resta qui
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="font-bold">{mancano === 1 ? 'Manca solo l’ultima fase!' : `Ne mancano ${mancano}.`}</p>
              {festa.prossima && (
                <div className="w-full rounded-xl border border-(--color-bordo) bg-black/20 p-3 text-left text-sm">
                  <p className="mb-1 font-bold uppercase tracking-wide text-(--color-giallo)">Fase {fase + 1}</p>
                  <Testo>{festa.prossima}</Testo>
                </div>
              )}
              <button ref={pulsante} onClick={() => avanti.current()} className="mt-2 rounded-lg bg-(--color-rosa) px-6 py-3 text-lg font-bold text-white hover:brightness-110">
                Avanti con la fase {fase + 1} ▶
              </button>
            </>
          )}
        </section>
      </div>
    </>
  );
}
