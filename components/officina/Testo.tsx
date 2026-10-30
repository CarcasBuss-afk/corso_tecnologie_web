/* Rende i messaggi dell'Officina (consegne, hint, risposte del tutor) con la poca
 * formattazione che usano: `codice` fra apici inversi e **grassetto**. Gli spazi all'inizio e
 * alla fine di un codice si vedono, evidenziati: in `Benvenuto da ` lo spazio finale conta, e
 * senza evidenza sparisce nel riquadro. */

const PEZZI = /`([^`]+)`|\*\*([^*]+)\*\*/g;

/** Il testo di un codice con gli spazi di bordo resi visibili (restano spazi veri, da copiare). */
function conSpaziVisibili(codice: string): React.ReactNode {
  const m = codice.match(/^( *)([\s\S]*?)( *)$/);
  if (!m || (!m[1] && !m[3])) return codice;
  const spazi = (n: number, chiave: string) =>
    n > 0 && (
      <span key={chiave} className="rounded-sm bg-(--color-giallo)/30" title="spazio">
        {' '.repeat(n)}
      </span>
    );
  return [spazi(m[1].length, 'prima'), m[2], spazi(m[3].length, 'dopo')];
}

export default function Testo({ children }: { children: string }) {
  const parti: React.ReactNode[] = [];
  let ultimo = 0;
  for (const m of children.matchAll(PEZZI)) {
    const inizio = m.index ?? 0;
    if (inizio > ultimo) parti.push(children.slice(ultimo, inizio));
    if (m[1] !== undefined) {
      parti.push(
        <code key={inizio} className="whitespace-pre-wrap rounded bg-black/40 px-1.5 py-0.5 font-mono text-[0.95em] text-(--color-giallo)">
          {conSpaziVisibili(m[1])}
        </code>,
      );
    } else {
      parti.push(
        <strong key={inizio} className="font-bold text-(--color-testo)">
          {m[2]}
        </strong>,
      );
    }
    ultimo = inizio + m[0].length;
  }
  if (ultimo < children.length) parti.push(children.slice(ultimo));
  return <>{parti}</>;
}
