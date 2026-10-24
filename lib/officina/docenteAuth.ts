/* Autenticazione del docente lato server: ID token Firebase nell'intestazione Authorization,
 * verificato con l'Admin SDK; l'email deve stare in TEACHER_EMAILS. Il custom claim `teacher`
 * serve alle regole Firestore (lettura in tempo reale della dashboard) e viene assegnato al
 * primo accesso. Stesso impianto del Giro e dell'escape room. */
import 'server-only';
import { getAuth } from 'firebase-admin/auth';
import { getAdminApp, teacherEmails } from '@/lib/firebaseAdmin';
import { ApiError, json, leggiBody, rispostaErrore } from './http';

export type Docente = { uid: string; email: string; teacher: boolean };

export async function verificaDocente(request: Request): Promise<Docente> {
  const intestazione = request.headers.get('authorization') ?? '';
  const token = intestazione.startsWith('Bearer ') ? intestazione.slice(7).trim() : '';
  if (!token) throw new ApiError(401, 'UNAUTHENTICATED', 'Accesso richiesto');

  let decoded;
  try {
    decoded = await getAuth(getAdminApp()).verifyIdToken(token);
  } catch (e) {
    // Il motivo vero (token scaduto, progetto sbagliato, credenziali del server rotte) va nei log.
    console.warn('[auth docente] verifica del token non riuscita', (e as { code?: string })?.code, (e as Error)?.message);
    throw new ApiError(401, 'INVALID_TOKEN', 'Sessione scaduta: accedi di nuovo');
  }

  const email = (decoded.email ?? '').toLowerCase();
  if (!email || !decoded.email_verified) throw new ApiError(403, 'FORBIDDEN', 'Account senza email verificata');
  if (!teacherEmails().includes(email)) {
    throw new ApiError(403, 'FORBIDDEN', `L'account ${email} non è tra i docenti autorizzati (TEACHER_EMAILS)`);
  }
  return { uid: decoded.uid, email, teacher: decoded.teacher === true };
}

/** Assegna il claim teacher (vale dal prossimo refresh del token). */
export async function assegnaClaimDocente(uid: string): Promise<void> {
  const auth = getAuth(getAdminApp());
  const utente = await auth.getUser(uid);
  await auth.setCustomUserClaims(uid, { ...(utente.customClaims ?? {}), teacher: true });
}

export type AzioneDocente = (body: Record<string, unknown>, docente: Docente) => Promise<unknown>;

export function handlerDocente(azione: AzioneDocente): (request: Request) => Promise<Response> {
  return async (request) => {
    try {
      const docente = await verificaDocente(request);
      const body = await leggiBody(request);
      return json(await azione(body, docente));
    } catch (e) {
      return rispostaErrore(e, 'api/officina/docente');
    }
  };
}
