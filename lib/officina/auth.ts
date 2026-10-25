/* Autenticazione dell'allievo: l'account Google della scuola. L'ID token Firebase arriva
 * nell'intestazione Authorization e lo verifica l'Admin SDK; l'email deve essere verificata
 * e del dominio della scuola (OFFICINA_DOMINIO; vuoto = qualunque).
 * Degli allievi si conservano uid, email istituzionale e nome: è l'Officina, non una gara anonima. */
import 'server-only';
import { getAuth } from 'firebase-admin/auth';
import { chiavePrivata, descriviChiave, getAdminApp } from '@/lib/firebaseAdmin';
import { ApiError, json, leggiBody, rispostaErrore } from './http';
import { dominiAmmessi, emailAmmessa } from './regole';

export type Utente = { uid: string; email: string; nome: string };

export async function verificaAllievo(request: Request): Promise<Utente> {
  const intestazione = request.headers.get('authorization') ?? '';
  const token = intestazione.startsWith('Bearer ') ? intestazione.slice(7).trim() : '';
  if (!token) throw new ApiError(401, 'UNAUTHENTICATED', 'Accedi con il tuo account della scuola');

  let decoded;
  try {
    decoded = await getAuth(getAdminApp()).verifyIdToken(token);
  } catch (e) {
    // Il motivo vero (token scaduto, progetto sbagliato, credenziali del server rotte) va nei log.
    console.warn('[auth allievo] verifica del token non riuscita', (e as { code?: string })?.code, (e as Error)?.message, '| chiave:', descriviChiave(chiavePrivata()));
    throw new ApiError(401, 'INVALID_TOKEN', 'Sessione scaduta: accedi di nuovo');
  }

  const email = (decoded.email ?? '').toLowerCase();
  if (!email || !decoded.email_verified) throw new ApiError(403, 'FORBIDDEN', 'Account senza email verificata');
  const domini = dominiAmmessi(process.env.OFFICINA_DOMINIO);
  if (!emailAmmessa(email, domini)) {
    throw new ApiError(403, 'DOMINIO_NON_AMMESSO', `Entra con l'account della scuola (@${domini.join(' o @')}), non con ${email}`);
  }
  const nome = (typeof decoded.name === 'string' && decoded.name.trim()) || email.split('@')[0];
  return { uid: decoded.uid, email, nome };
}

export type AzioneAllievo = (body: Record<string, unknown>, utente: Utente) => Promise<unknown>;

/** Wrapper delle rotte dell'allievo: allievo verificato, body JSON, errori uniformi. */
export function handlerAllievo(azione: AzioneAllievo): (request: Request) => Promise<Response> {
  return async (request) => {
    try {
      const utente = await verificaAllievo(request);
      const body = await leggiBody(request);
      return json(await azione(body, utente));
    } catch (e) {
      return rispostaErrore(e, 'api/officina');
    }
  };
}
