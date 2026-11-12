'use client';
/* Il tutor dell'Officina: una conversazione sul compito. Ogni domanda costa un punto e
 * l'allievo lo vede prima di mandarla; la domanda può essere lunga quanto vuole. Dopo l'ultima
 * risposta c'è un «Non ho capito» gratis. Finiti gli aiuti, l'allievo chiama il prof. Sotto la
 * casella, le domande già fatte, dalla più recente. Nel ripasso (il compito rifatto per
 * esercizio) il voto non c'è: le domande non costano punti, ma il tetto degli aiuti resta. */
import { useState } from 'react';
import { messaggioErrore, type Scambio } from '@/lib/officina/client';
import { NON_HO_CAPITO } from '@/lib/officina/consiglio';
import { AIUTI_MASSIMI } from '@/lib/officina/regole';
import Testo from './Testo';

interface Props {
  scambi: Scambio[];
  /** La fase a cui è l'allievo, da 1: il «Non ho capito» vale solo nella stessa fase della risposta. */
  fase: number;
  /** Null nel ripasso: niente voto in gioco, le domande non costano. */
  votoSeFinisci: number | null;
  /** Domande ancora possibili su questo compito: a zero il tutor non risponde più. */
  domandeRimaste: number;
  onChiedi(domanda: string): Promise<void>;
  attivo: boolean;
}

export default function TutorChat({ scambi, fase, votoSeFinisci, domandeRimaste, onChiedi, attivo }: Props) {
  const [domanda, setDomanda] = useState('');
  const [conferma, setConferma] = useState(false);
  const [attesa, setAttesa] = useState(false);
  const [errore, setErrore] = useState<string | null>(null);

  const ultimo = scambi.at(-1);
  const ripasso = votoSeFinisci === null;
  const puoChiarire = attivo && domandeRimaste > 0 && !!ultimo && ultimo.fase === fase && !ultimo.gratis;

  async function manda(testo = domanda) {
    if (attesa) return;
    setAttesa(true);
    setErrore(null);
    try {
      await onChiedi(testo);
      setDomanda('');
      setConferma(false);
    } catch (e) {
      setErrore(messaggioErrore(e));
    } finally {
      setAttesa(false);
    }
  }

  return (
    <section className="flex flex-col gap-3 rounded-2xl border border-(--color-bordo) bg-(--color-fondo-card) p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-bold">🧑‍🏫 Il tutor</p>
          <p className="text-sm text-(--color-testo-tenue)">
            Ti dice dove guardare e che cosa fare adesso, con un piccolo esempio se serve: il codice del compito lo scrivi tu.{' '}
            {ripasso ? 'Stai rifacendo il compito per esercizio: le domande non tolgono punti.' : 'Ogni domanda costa 1 punto.'}
            {domandeRimaste > 0 && (
              <span className="ml-1 text-(--color-giallo)" aria-label="domande rimaste">
                Te ne {domandeRimaste === 1 ? 'resta una' : `restano ${domandeRimaste}`} su questo compito.
              </span>
            )}
          </p>
        </div>
        {!ripasso && (
          <p className="text-right">
            <span className="block text-sm text-(--color-testo-tenue)">Voto se arrivi in fondo</span>
            <span className="font-mono text-3xl font-black text-(--color-giallo)" aria-label="voto">
              {votoSeFinisci}
            </span>
          </p>
        )}
      </div>

      {attivo && domandeRimaste === 0 && (
        <p role="status" className="rounded-xl border border-(--color-giallo)/40 bg-(--color-giallo)/10 p-3 font-bold">
          🙋 Hai usato tutti i {AIUTI_MASSIMI} aiuti del tutor su questo compito. Chiama il prof.{!ripasso && ' Il voto non scende più.'}
        </p>
      )}

      {attivo && domandeRimaste > 0 && (
        <div className="flex flex-col gap-2">
          <textarea
            value={domanda}
            onChange={(e) => setDomanda(e.target.value)}
            rows={3}
            placeholder="Scrivi la tua domanda (anche lunga). Vuoto = «non so andare avanti»"
            aria-label="domanda al tutor"
            className="w-full rounded-xl border border-(--color-bordo) bg-black/40 p-3 outline-none focus:border-(--color-giallo)"
          />
          {!conferma ? (
            <div className="flex flex-wrap items-center gap-3">
              <button type="button" onClick={() => (ripasso ? void manda() : setConferma(true))} disabled={attesa} className="rounded-lg border-2 border-(--color-giallo) px-4 py-2 font-bold text-(--color-giallo) hover:bg-(--color-giallo)/10 disabled:opacity-50">
                {ripasso && attesa ? 'Il tutor ci pensa…' : 'Chiedi al tutor'}
              </button>
              {puoChiarire && (
                <button type="button" onClick={() => void manda(NON_HO_CAPITO)} disabled={attesa} className="rounded-lg border border-(--color-bordo) px-4 py-2 hover:border-(--color-giallo) disabled:opacity-50">
                  {attesa ? 'Il tutor ci pensa…' : '🤔 Non ho capito (gratis)'}
                </button>
              )}
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-3 rounded-xl border border-(--color-giallo)/40 bg-(--color-giallo)/5 p-3">
              <p className="font-bold">
                Costa 1 punto: il voto passa da {votoSeFinisci} a {Math.max(5, (votoSeFinisci ?? 0) - 1)}.
              </p>
              <button type="button" onClick={() => void manda()} disabled={attesa} className="rounded-lg bg-(--color-giallo) px-4 py-2 font-bold text-black hover:brightness-110 disabled:opacity-50">
                {attesa ? 'Il tutor ci pensa…' : 'Sì, manda (−1 punto)'}
              </button>
              <button type="button" onClick={() => setConferma(false)} disabled={attesa} className="text-(--color-testo-tenue) underline">
                Annulla
              </button>
            </div>
          )}
          {errore && (
            <p role="alert" className="text-red-300">
              {errore}
            </p>
          )}
        </div>
      )}

      {scambi.length > 0 && (
        <ol aria-label="conversazione con il tutor" className="flex flex-col gap-2">
          {/* Dal più recente al più vecchio: la risposta appena arrivata è subito sotto la domanda. */}
          {[...scambi].reverse().map((s, i) => (
            <li key={scambi.length - i} className="flex flex-col gap-1">
              <p className="self-end rounded-xl rounded-br-sm bg-black/40 px-3 py-2 text-[1.05rem]">
                <span className="mr-2 text-xs text-(--color-testo-tenue)">fase {s.fase}</span>
                {s.domanda || <i className="text-(--color-testo-tenue)">non so andare avanti</i>}
              </p>
              <p className="self-start rounded-xl rounded-bl-sm border border-(--color-giallo)/40 bg-(--color-giallo)/10 px-3 py-2 text-[1.05rem] whitespace-pre-line">
                <Testo>{s.risposta}</Testo>
              </p>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
