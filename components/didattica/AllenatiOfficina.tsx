import Link from 'next/link';
import { COMPITI_PER_LEZIONE, TITOLI } from '@/lib/officina/compiti/elenco';

/* In fondo alla lezione: il rimando ai compiti dell'Officina che la allenano (il facile, il
 * normale e la sfida facoltativa, dove ci sono). Il percorso sblocca un compito alla volta, quindi il link porta
 * all'elenco, non al compito. */
export default function AllenatiOfficina({ lezioneSlug }: { lezioneSlug: string }) {
  const ids = COMPITI_PER_LEZIONE[lezioneSlug] ?? [];
  if (ids.length === 0) return null;
  return (
    <section className="my-8 p-6 rounded-lg bg-[rgb(17,20,28)] text-slate-200 border-2 border-slate-700 flex flex-col md:flex-row items-center gap-5">
      <span className="text-4xl" aria-hidden>
        🔧
      </span>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-xl font-bold text-yellow-400">Allenati nell&apos;Officina</h3>
        <p className="text-slate-300 mt-1">
          {ids.length === 1 ? (
            <>
              Il compito <strong className="text-slate-100">«{TITOLI[ids[0]].titolo}»</strong> usa proprio quello che hai imparato in questa lezione.
            </>
          ) : (
            <>
              {ids.length === 2 ? 'Due' : 'Tre'} compiti su questa lezione:{' '}
              {ids.map((id, i) => (
                <span key={id}>
                  {i > 0 && (i === ids.length - 1 ? ' e ' : ', ')}
                  <strong className="text-slate-100">«{TITOLI[id].titolo}»</strong>
                  {TITOLI[id].livello === 'facile' && ' per partire'}
                  {TITOLI[id].livello === 'sfida' && ' (una sfida facoltativa, più difficile)'}
                </span>
              ))}
              .
            </>
          )}{' '}
          Una pagina data, il JavaScript lo scrivi tu, la correzione arriva mentre scrivi.
        </p>
      </div>
      <Link href="/officina" className="px-5 py-2.5 rounded-lg bg-yellow-400 text-black font-bold whitespace-nowrap hover:brightness-110 print:hidden">
        Vai all&apos;Officina →
      </Link>
    </section>
  );
}
