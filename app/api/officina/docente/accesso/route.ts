/* Primo accesso del docente: verifica l'autorizzazione e assegna il claim `teacher`, che
 * serve alle regole Firestore per la lettura in tempo reale della dashboard. */
import { assegnaClaimDocente, handlerDocente } from '@/lib/officina/docenteAuth';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export const POST = handlerDocente(async (_body, docente) => {
  if (docente.teacher) return { claimAggiornato: false, email: docente.email };
  await assegnaClaimDocente(docente.uid);
  // Il claim entra nel token solo al refresh successivo: lo fa il client.
  return { claimAggiornato: true, email: docente.email };
});
