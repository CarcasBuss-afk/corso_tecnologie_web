'use client';
/* Il compito di realtà, fase per fase: la scheda, la consegna della fase, l'editor con i
 * tre pannelli (HTML e CSS dati, JavaScript da scrivere), l'anteprima vera, la checklist che
 * si accende mentre si scrive, la consegna al server, il tutor. Da soli e senza fretta. */
import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Accesso } from '@/components/officina/Accesso';
import Anteprima from '@/components/officina/Anteprima';
import Checklist from '@/components/officina/Checklist';
import EditorCodice from '@/components/officina/EditorCodice';
import SchedaCompito from '@/components/officina/SchedaCompito';
import Testo from '@/components/officina/Testo';
import TutorChat from '@/components/officina/TutorChat';
import { useAllievo } from '@/components/officina/useAllievo';
import { useCorrezione } from '@/components/officina/useCorrezione';
import { chiamaOfficina, ErroreOfficina, messaggioErrore, type CompitoAperto, type RispostaConsegna, type RispostaTutor } from '@/lib/officina/client';
import type { Sorgente } from '@/lib/officina/motore/tipi';

type Pannello = 'js' | 'html' | 'css';

export function Compito({ classeId, compitoId }: { classeId: string; compitoId: string }) {
  const { stato, messaggio, accediGoogle, accediProva, esci } = useAllievo();
  const [c, setC] = useState<CompitoAperto | null>(null);
  const [codice, setCodice] = useState('');
  const [pannello, setPannello] = useState<Pannello>('js');
  const [errore, setErrore] = useState('');
  const [hint, setHint] = useState<string | null>(null);
  const [invio, setInvio] = useState(false);
  const [promossa, setPromossa] = useState(false);
  const [scossa, setScossa] = useState(false);

  const carica = useCallback(async () => {
    try {
      const r = await chiamaOfficina<CompitoAperto>('compito', { classeId, compitoId });
      setC(r);
      setCodice(r.codice);
      setErrore('');
    } catch (e) {
      setErrore(messaggioErrore(e));
    }
  }, [classeId, compitoId]);

  useEffect(() => {
    if (stato === 'ok') void carica();
  }, [stato, carica]);

  const sorgente = useMemo<Sorgente | null>(() => (c ? { html: c.pagina.html, css: c.pagina.css, js: codice } : null), [c, codice]);
  const prova = c?.fase?.prova ?? null;
  const { esito, inCorso } = useCorrezione(c && !c.finito ? sorgente : null, prova);

  const consegna = useCallback(async () => {
    if (!c || !c.fase || invio || c.classeChiusa) return;
    setInvio(true);
    try {
      const r = await chiamaOfficina<RispostaConsegna>('consegna', { classeId, compitoId, fase: c.fasi, codice });
      setErrore('');
      if (!r.promosso) {
        setHint(r.hint);
        setC((p) => (p ? { ...p, errori: r.errori } : p));
        setScossa(true);
        setTimeout(() => setScossa(false), 520);
        return;
      }
      setHint(null);
      setPromossa(true);
      setTimeout(() => setPromossa(false), 1800);
      setC((p) =>
        p
          ? {
              ...p,
              fasi: r.fasi,
              finito: r.finito,
              voto: r.voto,
              votoSeFinisci: r.votoSeFinisci,
              fase: r.fase,
              codicePromosso: { ...p.codicePromosso, [String(c.fasi)]: codice },
            }
          : p,
      );
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      setErrore(messaggioErrore(e));
      void carica();
    } finally {
      setInvio(false);
    }
  }, [c, invio, classeId, compitoId, codice, carica]);

  const chiedi = useCallback(
    async (domanda: string) => {
      if (!c) return;
      let r: RispostaTutor;
      try {
        r = await chiamaOfficina<RispostaTutor>('tutor', { classeId, compitoId, domanda, codice, hintVisto: hint ?? '' });
      } catch (e) {
        if (e instanceof ErroreOfficina && e.code === 'CLASSE_CHIUSA') setC((p) => (p ? { ...p, classeChiusa: true } : p));
        throw e;
      }
      setC((p) =>
        p
          ? { ...p, consigli: r.consigli, domandeRimaste: r.domandeRimaste, votoSeFinisci: r.votoSeFinisci, tutor: [...p.tutor, { fase: r.fase, domanda: domanda.trim(), risposta: r.risposta }] }
          : p,
      );
    },
    [c, classeId, compitoId, codice, hint],
  );

  if (stato !== 'ok') {
    return <Accesso ruolo="allievo" stato={stato} messaggio={messaggio} accediGoogle={accediGoogle} accediProva={accediProva ? (email) => accediProva(email, email.split('@')[0]) : null} esci={esci} />;
  }
  if (!c || !sorgente) {
    return (
      <main className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center gap-4 p-6 text-center">
        <p className="text-(--color-testo-tenue)">{errore || 'Un attimo…'}</p>
        {errore && (
          <Link href="/officina" className="underline">
            torna ai compiti
          </Link>
        )}
      </main>
    );
  }

  const numeroFase = c.fasi + 1;
  const attivo = !invio && !c.classeChiusa && !c.finito;

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-4 p-4 sm:p-6">
      <header className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <Link href="/officina" className="text-sm text-(--color-testo-tenue) underline">
            ← i miei compiti
          </Link>
          <h1 className="text-2xl font-black">{c.scheda.titolo}</h1>
        </div>
        <p className="text-2xl font-black">
          {c.finito ? 'Finito' : `Fase ${numeroFase}`}
          {!c.finito && <span className="text-base font-normal text-(--color-testo-tenue)"> di {c.fasiTotali}</span>}
        </p>
      </header>

      <Fasi fatte={c.fasi} totale={c.fasiTotali} />

      {c.classeChiusa && !c.finito && (
        <section role="status" aria-label="officina chiusa" className="rounded-2xl border border-(--color-bordo) bg-black/30 p-4 text-center">
          <p className="text-lg font-bold">🔒 L&apos;Officina è chiusa</p>
          <p className="text-(--color-testo-tenue)">Il prof la riapre alla prossima lezione. Il tuo lavoro è salvato: puoi rileggere la scheda e il tuo codice, ma non consegnare né chiedere al tutor.</p>
        </section>
      )}

      {c.finito && (
        <section className="rounded-2xl border border-(--color-giallo)/50 bg-(--color-giallo)/10 p-5 text-center">
          <p className="text-sm text-(--color-testo-tenue)">{c.esame ? '🪪 Patentino preso! Il tuo voto' : 'Pagina finita! Il tuo voto'}</p>
          <p className="font-mono text-6xl font-black text-(--color-giallo)">{c.voto}</p>
          <p className="text-(--color-testo-tenue)">
            {c.fasi} fasi su {c.fasiTotali}
            {!c.esame && ` · ${c.consigli} ${c.consigli === 1 ? 'domanda' : 'domande'} al tutor`}
          </p>
        </section>
      )}

      {promossa && (
        <p role="status" className="entra rounded-2xl border border-(--color-verde)/50 bg-(--color-verde)/10 p-3 text-center text-lg font-bold text-(--color-verde)">
          ✓ Fase superata! {c.finito ? 'Hai finito la pagina.' : `Avanti con la fase ${numeroFase}.`}
        </p>
      )}

      <SchedaCompito key={compitoId} scheda={c.scheda} fase={Math.min(numeroFase, c.fasiTotali)} fasi={c.fasiTotali} />

      {c.fase && (
        <section className={`rounded-2xl border border-(--color-bordo) bg-(--color-fondo-card) p-4 sm:p-5 ${scossa ? 'scuoti' : ''}`}>
          <p className="mb-1 text-sm font-bold uppercase tracking-wide text-(--color-giallo)">Fase {numeroFase}: la consegna</p>
          <h2 className="text-lg leading-snug">
            <Testo>{c.fase.consegna}</Testo>
          </h2>
        </section>
      )}

      <div className="grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <section aria-label="editor" className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-1" role="tablist" aria-label="pannelli">
            {(['js', 'html', 'css'] as Pannello[]).map((p) => (
              <button
                key={p}
                role="tab"
                aria-selected={pannello === p}
                onClick={() => setPannello(p)}
                className={`rounded-t-lg px-4 py-2 text-sm font-bold ${pannello === p ? 'bg-(--color-fondo-card) text-(--color-giallo)' : 'text-(--color-testo-tenue) hover:text-(--color-testo)'}`}
              >
                {p === 'js' ? '⚡ JavaScript' : p === 'html' ? '📄 HTML' : '🎨 CSS'}
                {p !== 'js' && <span className="ml-1 text-xs font-normal">(dato)</span>}
              </button>
            ))}
            <span className="ml-auto text-xs text-(--color-testo-tenue)">{pannello === 'js' ? 'il tuo codice va in fondo alla pagina, dentro <script>' : 'in sola lettura: leggi gli id che ti servono'}</span>
          </div>
          {pannello === 'js' && <EditorCodice linguaggio="javascript" valore={codice} onChange={setCodice} onConsegna={() => void consegna()} attivo={attivo} altezza="420px" />}
          {pannello === 'html' && <EditorCodice linguaggio="html" valore={c.pagina.html} soloLettura altezza="420px" />}
          {pannello === 'css' && <EditorCodice linguaggio="css" valore={c.pagina.css} soloLettura altezza="420px" />}
          {!c.finito && (
            <div className="flex flex-wrap items-center gap-3">
              <button onClick={() => void consegna()} disabled={!attivo} className="rounded-lg bg-(--color-rosa) px-5 py-2.5 text-lg font-bold text-white hover:brightness-110 disabled:opacity-40">
                {invio ? 'Controllo…' : 'Consegna la fase ▶'}
              </button>
              <span className="text-sm text-(--color-testo-tenue)">
                oppure <kbd className="rounded bg-black/40 px-1.5 py-0.5 font-mono">Ctrl</kbd>+<kbd className="rounded bg-black/40 px-1.5 py-0.5 font-mono">Invio</kbd> nell&apos;editor
              </span>
            </div>
          )}
          {hint && (
            <section role="status" className="rounded-xl border border-(--color-giallo)/40 bg-(--color-giallo)/10 p-4 text-[1.05rem]">
              <span aria-hidden>💡 </span>
              <Testo>{hint}</Testo>
            </section>
          )}
        </section>

        <aside className="flex flex-col gap-4">
          <Anteprima sorgente={sorgente} altezza="300px" />
          {prova && !c.finito && <Checklist prova={prova} esito={esito} inCorso={inCorso} />}
        </aside>
      </div>

      {!c.esame && <TutorChat scambi={c.tutor} votoSeFinisci={c.votoSeFinisci} domandeRimaste={c.domandeRimaste} onChiedi={chiedi} attivo={!c.finito && !c.classeChiusa} />}

      {errore && (
        <section role="alert" className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-red-200">
          {errore}
        </section>
      )}

      <footer className="mt-auto pt-4 text-center text-sm text-(--color-testo-tenue)">
        Gli errori non costano niente e il lavoro resta salvato a ogni consegna: puoi chiudere e riprendere quando vuoi.
        {!c.esame && ' Solo le domande al tutor costano un punto.'}
      </footer>
    </main>
  );
}

function Fasi({ fatte, totale }: { fatte: number; totale: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${fatte} fasi su ${totale}`}>
      {Array.from({ length: totale }, (_, i) => (
        <div key={i} className={`h-2.5 flex-1 rounded-full ${i < fatte ? 'bg-(--color-giallo)' : i === fatte ? 'bg-(--color-giallo)/40' : 'bg-(--color-bordo)'}`} />
      ))}
    </div>
  );
}
