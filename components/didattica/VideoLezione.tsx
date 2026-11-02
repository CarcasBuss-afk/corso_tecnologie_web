'use client';
/* Il video della lezione, da Google Drive. La lezione resta aperta a tutti: solo il video chiede
 * l'accesso con l'account della scuola, lo stesso dell'Officina (chi è già entrato lì non deve
 * rifare niente). Il controllo qui serve a guidare l'allievo; a proteggere il file è Drive, che lo
 * mostra solo agli account del dominio. Dentro la cornice può comunque non partire (più account
 * aperti, cookie bloccati), quindi sotto c'è sempre il link per aprirlo su Drive. */
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { getClientAuth, providerGoogle } from '@/lib/firebaseClient';
import { spiegaErroreLogin } from '@/components/officina/useAllievo';
import { DOMINIO_VIDEO, VIDEO_LEZIONI } from '@/lib/video-lezioni';

export default function VideoLezione({ lezioneSlug }: { lezioneSlug: string }) {
  const video = VIDEO_LEZIONI[lezioneSlug];
  // undefined = si sta ancora controllando, null = nessuno ha fatto l'accesso
  const [email, setEmail] = useState<string | null | undefined>(undefined);
  const [errore, setErrore] = useState('');

  useEffect(() => {
    return onAuthStateChanged(getClientAuth(), (u) => setEmail(u?.email?.toLowerCase() ?? null));
  }, []);

  if (!video) return null;

  const accedi = async () => {
    setErrore('');
    try {
      await signInWithPopup(getClientAuth(), providerGoogle());
    } catch (e) {
      setErrore(spiegaErroreLogin(e));
    }
  };

  const ammesso = !!email && email.endsWith(`@${DOMINIO_VIDEO}`);
  const base = `https://drive.google.com/file/d/${video.driveId}`;
  // authuser dice a Drive quale account usare quando nel browser ce ne sono più di uno.
  const account = ammesso ? `?authuser=${encodeURIComponent(email)}` : '';

  return (
    <section className="mb-12 print:hidden">
      <h2 className="text-3xl font-bold mb-4">🎬 Guarda il video</h2>
      <div className="aspect-video w-full rounded-lg overflow-hidden bg-[rgb(17,20,28)] shadow-lg">
        {ammesso ? (
          <iframe
            src={`${base}/preview${account}`}
            title={`Video: ${video.titolo}`}
            allow="autoplay; fullscreen"
            allowFullScreen
            loading="lazy"
            className="h-full w-full border-0"
          />
        ) : (
          email !== undefined && (
            <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center text-slate-200">
              <p className="text-lg font-semibold">
                {email
                  ? `Sei entrato con ${email}: per il video serve l'account @${DOMINIO_VIDEO}.`
                  : "Per vedere il video entra con l'account della scuola."}
              </p>
              <p className="text-sm text-slate-400">È lo stesso accesso dell&apos;Officina.</p>
              <button type="button" onClick={accedi} className="px-5 py-2.5 rounded-lg bg-yellow-400 text-black font-bold hover:brightness-110">
                {email ? 'Cambia account' : 'Entra con Google'}
              </button>
              {errore && <p className="text-sm text-red-300">{errore}</p>}
            </div>
          )
        )}
      </div>
      {ammesso && (
        <p className="mt-3 text-sm text-gray-600">
          Il video non parte?{' '}
          <a href={`${base}/view${account}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 underline">
            Aprilo su Drive
          </a>
          .
        </p>
      )}
    </section>
  );
}
