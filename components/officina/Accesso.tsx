'use client';
/* Schermata di accesso dell'Officina, per l'allievo e per il docente: il pulsante Google e,
 * con gli emulatori, l'accesso di prova con un'email qualsiasi. */
import { useState } from 'react';
import Link from 'next/link';
import type { StatoAccesso } from './useAllievo';

export function Accesso({
  ruolo,
  stato,
  messaggio,
  accediGoogle,
  accediProva,
  esci,
}: {
  ruolo: 'allievo' | 'docente';
  stato: StatoAccesso;
  messaggio: string;
  accediGoogle: () => void;
  accediProva: ((email: string) => void) | null;
  esci?: () => void;
}) {
  const [email, setEmail] = useState('');
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-6 p-6 text-center">
      <p className="text-5xl" aria-hidden>
        🔧
      </p>
      <h1 className="text-3xl font-black text-(--color-giallo)">L&apos;Officina</h1>
      <p className="text-(--color-testo-tenue)">
        {ruolo === 'allievo' ? "Gli esercizi del corso di Tecnologie Web: entra con l'account della scuola." : 'Area docente: le classi e come procedono.'}
      </p>

      {stato === 'caricamento' || stato === 'verifica' ? (
        <p className="text-(--color-testo-tenue)">Un attimo…</p>
      ) : (
        <>
          <button onClick={accediGoogle} className="rounded-lg bg-(--color-giallo) px-5 py-3 text-lg font-bold text-black hover:brightness-110">
            Accedi con Google
          </button>
          {stato === 'negato' && esci && (
            <button onClick={esci} className="text-sm text-(--color-testo-tenue) underline">
              Esci e cambia account
            </button>
          )}
          {accediProva && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                accediProva(email);
              }}
              className="flex flex-col gap-2"
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email di prova"
                aria-label="email di prova"
                className="rounded-lg border border-(--color-bordo) bg-black/40 px-3 py-2 text-center outline-none"
              />
              <button type="submit" className="text-sm text-(--color-testo-tenue) underline">
                Accesso di prova (emulatori)
              </button>
            </form>
          )}
        </>
      )}

      {messaggio && (
        <p role="alert" className="rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-left text-red-200">
          {messaggio}
        </p>
      )}

      <Link href="/manuale" className="text-sm text-(--color-testo-tenue) underline hover:text-(--color-testo)">
        ← torna al manuale
      </Link>
    </main>
  );
}
