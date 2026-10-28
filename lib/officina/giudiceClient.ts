/* La chiamata al modello per il Giudice. Sonnet: una lettura di venti righe con i fatti già
 * misurati, in uno o due secondi, per circa un terzo di centesimo a consegna promossa. Haiku
 * costa venti volte meno, ma a una prova del 28 ottobre 2026 lasciava passare una costante
 * dichiarata e non usata, che Sonnet ferma anche con il prompt di prima. Stessa chiave del tutor.
 * Se il modello non risponde, o risponde una cosa che non si capisce, la consegna PASSA:
 * un'ora di laboratorio non si ferma per un disservizio dell'API. Senza chiave (sviluppo)
 * o con OFFICINA_IA_FINTA=1 (test) giudica il finto. */
import 'server-only';
import Anthropic from '@anthropic-ai/sdk';
import { giudizioFinto, interpretaVerdetto, messaggioGiudizio, PROMPT_GIUDICE, type ContestoGiudizio, type Verdetto } from './giudice';

export const MODELLO_GIUDICE = process.env.GIUDICE_MODEL || 'claude-sonnet-5-5';

let client: Anthropic | null = null;

function anthropic(): Anthropic {
  // Timeout corto: il giudice sta sulla strada di ogni fase promossa. Sonnet risponde di solito
  // in uno o due secondi, ma alla prova una risposta su 94 ne ha chiesti più di cinque.
  if (!client) client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY, timeout: 15_000, maxRetries: 1 });
  return client;
}

export const iaFinta = (): boolean => process.env.OFFICINA_IA_FINTA === '1' || !process.env.ANTHROPIC_API_KEY;

/** Il verdetto del giudice sul codice promosso. In caso di dubbio o di guasto: genuino. */
export async function giudica(contesto: ContestoGiudizio): Promise<Verdetto> {
  if (iaFinta()) return giudizioFinto(contesto);

  let testo: string;
  try {
    const risposta = await anthropic().messages.create({
      model: MODELLO_GIUDICE,
      max_tokens: 200,
      // Niente ragionamento: basta leggere. Sonnet 5.5 rifiuta { type: 'disabled' } (errore 400,
      // e con il fail-open ogni consegna passerebbe senza giudizio): si spegne con between_tools.
      thinking: { type: 'between_tools' },
      system: PROMPT_GIUDICE,
      messages: [{ role: 'user', content: messaggioGiudizio(contesto) }],
    });
    testo = risposta.content
      .filter((b): b is Anthropic.TextBlock => b.type === 'text')
      .map((b) => b.text)
      .join('');
  } catch (e) {
    console.warn('[giudice] modello non disponibile, consegna promossa senza giudizio', e);
    return { genuino: true, guasto: true };
  }
  const verdetto = interpretaVerdetto(testo);
  if (!verdetto) {
    console.warn('[giudice] verdetto incomprensibile, consegna promossa', { testo });
    return { genuino: true, guasto: true };
  }
  if (!verdetto.genuino) console.info('[giudice] bocciato', { motivo: verdetto.motivo, codice: contesto.codice });
  return verdetto;
}
