/* Tutti i video del corso in un posto solo, divisi per modulo e lezione. L'elenco viene da
 * lib/video-lezioni.ts: quando si aggiunge un video lì, compare anche qui. Ogni video si guarda
 * direttamente da questa pagina oppure si apre nel punto della lezione in cui sta. */
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import VideoLezione from '@/components/didattica/VideoLezione';
import { moduli } from '@/lib/moduli';
import { DOMINIO_VIDEO, VIDEO_LEZIONI, ancoraVideo } from '@/lib/video-lezioni';

export const metadata: Metadata = {
  title: 'I video del corso - Corso Web',
};

const elencoVideo = Object.entries(VIDEO_LEZIONI);

// Per ogni modulo, solo le lezioni che hanno almeno un video, ognuna con i suoi video in ordine.
const moduliConVideo = moduli
  .map((modulo) => ({
    modulo,
    lezioni: modulo.lezioni
      .map((lezione) => ({
        lezione,
        video: elencoVideo
          .filter(([, v]) => v.lezione === lezione.slug)
          .map(([chiave, v]) => ({ chiave, titolo: v.titolo })),
      }))
      .filter((l) => l.video.length > 0),
  }))
  .filter((m) => m.lezioni.length > 0);

export default function PaginaVideo() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="bg-[rgb(17,20,28)] text-slate-200 py-10 md:py-14 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-3">🎬 I video del corso</h1>
            <p className="text-lg text-slate-300">
              Tutti i video delle lezioni, divisi per modulo e lezione. Puoi guardarli qui oppure aprirli nel
              punto della lezione in cui servono.
            </p>
            <p className="mt-3 text-sm text-slate-400">
              Per vederli serve l&apos;account della scuola (@{DOMINIO_VIDEO}), lo stesso dell&apos;Officina.
            </p>

            {moduliConVideo.length > 1 && (
              <nav className="mt-6 flex flex-wrap gap-2" aria-label="Moduli">
                {moduliConVideo.map(({ modulo }) => (
                  <a
                    key={modulo.slug}
                    href={`#${modulo.slug}`}
                    className="px-3 py-1.5 rounded-full bg-white/10 text-sm font-semibold hover:bg-white/20"
                  >
                    {modulo.icona} Modulo {modulo.id}
                  </a>
                ))}
              </nav>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 py-10">
          {moduliConVideo.map(({ modulo, lezioni }) => (
            <section key={modulo.slug} id={modulo.slug} className="mb-14 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-200">
                {modulo.icona} Modulo {modulo.id}: {modulo.titolo}
              </h2>

              {lezioni.map(({ lezione, video }) => {
                const urlLezione = `/moduli/${modulo.slug}/${lezione.slug}`;
                return (
                  <div key={lezione.slug} className="mb-10">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      <Link href={urlLezione} className="hover:underline">
                        Lezione {lezione.id}: {lezione.titolo}
                      </Link>
                    </h3>

                    {video.map(({ chiave, titolo }) => (
                      <div key={chiave} className="mb-6">
                        <VideoLezione lezioneSlug={chiave} margine="mb-2" />
                        <p className="text-sm">
                          <Link
                            href={`${urlLezione}#${ancoraVideo(chiave)}`}
                            className="font-semibold text-blue-700 hover:underline"
                          >
                            Vai a «{titolo}» nella lezione →
                          </Link>
                        </p>
                      </div>
                    ))}
                  </div>
                );
              })}
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
