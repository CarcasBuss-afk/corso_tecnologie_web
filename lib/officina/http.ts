/* Strato HTTP comune alle rotte /api/officina/*: errori uniformi { error, message } con il
 * messaggio in italiano da mostrare all'allievo, risposte JSON senza cache. */
import 'server-only';

export class ApiError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
  ) {
    super(message);
  }
}

export function json(data: unknown, status = 200): Response {
  return Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } });
}

/** Il body JSON, facoltativo: vuoto = oggetto vuoto. */
export async function leggiBody(request: Request): Promise<Record<string, unknown>> {
  const testo = await request.text();
  if (!testo.trim()) return {};
  let dati: unknown;
  try {
    dati = JSON.parse(testo);
  } catch {
    throw new ApiError(400, 'INVALID_BODY', 'La richiesta non è JSON valido');
  }
  if (!dati || typeof dati !== 'object' || Array.isArray(dati)) throw new ApiError(400, 'INVALID_BODY', 'Corpo non valido');
  return dati as Record<string, unknown>;
}

export function rispostaErrore(e: unknown, dove: string): Response {
  if (e instanceof ApiError) return json({ error: e.code, message: e.message }, e.status);
  console.error(`[${dove}] errore inatteso`, e);
  return json({ error: 'INTERNAL', message: 'Errore interno del server: chiama il prof' }, 500);
}

export const testo = (v: unknown, max = 200) => (typeof v === 'string' ? v.trim().slice(0, max) : '');
