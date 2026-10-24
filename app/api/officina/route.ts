/* Le API dell'allievo nell'Officina, una rotta sola con l'azione nel body. */
import { handlerAllievo, type AzioneAllievo } from '@/lib/officina/auth';
import { ApiError } from '@/lib/officina/http';
import { classi, compiti, compito, consegna, entra, io, tutor } from '@/lib/officina/service';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
/** La verifica in jsdom più il giudice e il tutor possono volerci qualche secondo. */
export const maxDuration = 60;

const AZIONI: Record<string, AzioneAllievo> = { io, classi, entra, compiti, compito, consegna, tutor };

export const POST = handlerAllievo(async (body, utente) => {
  const azione = typeof body.azione === 'string' ? body.azione : '';
  const f = AZIONI[azione];
  if (!f) throw new ApiError(400, 'INVALID_BODY', `Azione non riconosciuta: ${azione}`);
  return f(body, utente);
});
