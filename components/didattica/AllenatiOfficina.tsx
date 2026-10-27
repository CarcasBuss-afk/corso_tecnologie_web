import Link from 'next/link';
import { COMPITI_PER_LEZIONE, TITOLI } from '@/lib/officina/compiti/elenco';

/* In fondo alla lezione: il rimando ai compiti dell'Officina che la allenano (il base e, dove
 * c'è, il rinforzo). Il percorso sblocca un compito alla volta, quindi il link porta
 * all'elenco, non al compito. */
export default function AllenatiOfficina({ lezioneSlug }: { lezioneSlug: string }) {
  const ids = COMPITI_PER_LEZIONE[lezioneSlug] ?? [];
  if (ids.length === 0) return null;
  const titoli = ids.map((id) => TITOLI[id].titolo);
  return (
    <section className="my-8 p-6 rounded-lg bg-[rgb(17,20,28)] text-slate-200 border-2 border-slate-700 flex flex-col md:flex-row items-center gap-5">
      <span className="text-4xl" aria-hidden>
        🔧
      </span>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-xl font-bold text-yellow-400">Allenati nell&apos;Officina</h3>
        <p className="text-slate-300 mt-1">
          {titoli.length === 1 ? (
            <>
              Il compito <strong className="text-slate-100">«{titoli[0]}»</strong> usa proprio quello che hai imparato in questa lezione: una pagina data, il JavaScript lo scrivi tu, la correzione arriva mentre scrivi.
            </>
          ) : (
            <>
              Due compiti su questa lezione: <strong className="text-slate-100">«{titoli[0]}»</strong> e poi <strong className="text-slate-100">«{titoli[1]}»</strong>, simile ma con qualcosa in più per fissare bene. Una pagina data, il JavaScript lo scrivi tu, la correzione arriva mentre scrivi.
            </>
          )}
        </p>
      </div>
      <Link href="/officina" className="px-5 py-2.5 rounded-lg bg-yellow-400 text-black font-bold whitespace-nowrap hover:brightness-110 print:hidden">
        Vai all&apos;Officina →
      </Link>
    </section>
  );
}
