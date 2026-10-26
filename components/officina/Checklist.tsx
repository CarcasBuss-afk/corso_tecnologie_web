'use client';
/* La prova mostrata, passo per passo: le azioni in grigio (che cosa fa il correttore), i
 * controlli con il segno di spunta che si accende mentre l'allievo scrive. Sotto, gli
 * errori JavaScript tradotti. */
import { messaggioErrore } from '@/lib/officina/motore/messaggi';
import { eControllo, type Azione, type EsitoProva, type Prova } from '@/lib/officina/motore/tipi';
import Testo from './Testo';

function descriviAzione(a: Azione): string {
  if (a.descrizione) return a.descrizione;
  switch (a.fai) {
    case 'clic':
      return `Clic su ${a.su}`;
    case 'scrivi':
      return `Si scrive «${a.valore}» in ${a.in}`;
    case 'prompt':
      return `Risposte alle domande: ${a.risposte.map((r) => `«${r}»`).join(', ')}`;
    case 'confirm':
      return `Risposte alle conferme: ${a.risposte.map((r) => (r ? 'OK' : 'Annulla')).join(', ')}`;
  }
}

export default function Checklist({ prova, esito, inCorso }: { prova: Prova; esito: EsitoProva | null; inCorso: boolean }) {
  let indiceControllo = -1;
  const errori = esito?.errori ?? [];
  return (
    <section aria-label="controlli della fase" className="flex flex-col gap-2 rounded-2xl border border-(--color-bordo) bg-(--color-fondo-card) p-4">
      <div className="flex items-baseline justify-between gap-2">
        <p className="font-bold">✅ Che cosa controlla</p>
        <p className="text-xs text-(--color-testo-tenue)">{inCorso ? 'controllo…' : prova.nome ? prova.nome : 'la prova mostrata'}</p>
      </div>
      <ol className="flex flex-col gap-1.5">
        {prova.passi.map((p, i) => {
          if (!eControllo(p)) {
            return (
              <li key={i} className="flex gap-2 text-sm text-(--color-testo-tenue)">
                <span aria-hidden className="w-5 text-center">
                  ▸
                </span>
                <span>{descriviAzione(p)}</span>
              </li>
            );
          }
          indiceControllo += 1;
          const c = esito?.controlli[indiceControllo];
          const stato = !esito || esito.tempoScaduto ? 'attesa' : c?.ok ? 'ok' : 'no';
          return (
            <li key={i} className={`flex gap-2 ${stato === 'ok' ? 'text-(--color-verde)' : stato === 'no' ? 'text-(--color-testo)' : 'text-(--color-testo-tenue)'}`}>
              <span aria-hidden className="w-5 text-center font-bold">
                {stato === 'ok' ? '✓' : stato === 'no' ? '✗' : '○'}
              </span>
              <span>
                {p.descrizione}
                {stato === 'no' && c?.attuale !== undefined && c.attuale !== '' && (
                  <span className="block text-sm text-(--color-testo-tenue)">adesso: «{c.attuale}»</span>
                )}
              </span>
            </li>
          );
        })}
      </ol>
      {esito?.tempoScaduto && <p className="rounded-lg border border-red-500/40 bg-red-500/10 p-2 text-sm text-red-200">La pagina non risponde: c&apos;è un ciclo che non finisce mai?</p>}
      {errori.length > 0 && (
        <ul aria-label="errori" className="flex flex-col gap-1">
          {errori.slice(0, 2).map((e, i) => (
            <li key={i} className="rounded-lg border border-red-500/40 bg-red-500/10 p-2 text-sm text-red-200">
              <span aria-hidden>⚠️ </span>
              <Testo>{messaggioErrore(e, esito ?? {})}</Testo>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
