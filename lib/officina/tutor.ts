/* La chiamata al modello per il tutor: Sonnet 5.5 con il thinking adattivo (ragiona prima
 * di rispondere) e la conversazione del compito come storia. Stesso filtro anti-codice del
 * giudice, consiglio finto nei test e senza chiave (OFFICINA_IA_FINTA). */
import 'server-only';
import Anthropic from '@anthropic-ai/sdk';
import { consiglioFinto, contieneCodice, messaggioConsiglio, pulisciConsiglio, type ContestoConsiglio, type Scambio } from './consiglio';
import { iaFinta } from './giudiceClient';
import { ApiError } from './http';
import type { Fase } from './motore/tipi';
import { MAX_RISPOSTA_TUTOR, PROMPT_TUTOR } from './tutorPrompt';

export const MODELLO_TUTOR = process.env.TUTOR_MODEL || 'claude-sonnet-5-5';

const TENTATIVI = 2;

let client: Anthropic | null = null;
function anthropic(): Anthropic {
  if (!client) client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY, timeout: 40_000, maxRetries: 1 });
  return client;
}

function nonDisponibile(): ApiError {
  return new ApiError(503, 'TUTOR_NON_DISPONIBILE', 'Il tutor non ha una risposta buona adesso: riprova fra poco');
}

/**
 * Chiede al tutor. La storia della conversazione sul compito entra come messaggi veri, così
 * "non ho capito" ha un senso; il contesto (consegna, codice, esito) va nell'ultimo messaggio.
 */
export async function chiediTutor(contesto: ContestoConsiglio, fase: Pick<Fase, 'prove'>, storia: Scambio[]): Promise<string> {
  if (iaFinta()) {
    const r = pulisciConsiglio(consiglioFinto(contesto), MAX_RISPOSTA_TUTOR);
    if (!r || contieneCodice(r, contesto.codice)) throw nonDisponibile();
    return r;
  }

  const messaggi: Anthropic.MessageParam[] = [];
  for (const s of storia) {
    messaggi.push({ role: 'user', content: `(fase ${s.fase}) ${s.domanda || 'Non so andare avanti.'}` });
    messaggi.push({ role: 'assistant', content: s.risposta });
  }
  messaggi.push({ role: 'user', content: messaggioConsiglio(contesto, fase) });

  for (let tentativo = 0; tentativo < TENTATIVI; tentativo++) {
    let testo: string;
    try {
      const risposta = await anthropic().messages.create({
        model: MODELLO_TUTOR,
        // Il tetto comprende anche il ragionamento: la risposta vera sta in 150 parole.
        max_tokens: 4000,
        thinking: { type: 'adaptive' },
        system: PROMPT_TUTOR,
        messages: messaggi,
      });
      testo = risposta.content
        .filter((b): b is Anthropic.TextBlock => b.type === 'text')
        .map((b) => b.text)
        .join('');
    } catch (e) {
      console.error('[tutor] errore dal modello', e);
      throw new ApiError(503, 'TUTOR_NON_DISPONIBILE', 'Il tutor non risponde: riprova fra poco');
    }
    const risposta = pulisciConsiglio(testo, MAX_RISPOSTA_TUTOR);
    if (risposta && !contieneCodice(risposta, contesto.codice)) return risposta;
    console.warn('[tutor] risposta scartata', { tentativo, vuota: !risposta, testo });
    messaggi.push({ role: 'assistant', content: testo });
    messaggi.push({ role: 'user', content: 'La risposta contiene del codice: rifalla a parole, senza nessuna riga di programma, nessun tag e nessuna regola CSS.' });
  }
  throw nonDisponibile();
}
