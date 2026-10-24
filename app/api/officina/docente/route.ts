/* Le azioni del docente: classi e allievi. Il resto è monitoraggio (onSnapshot). */
import { handlerDocente } from '@/lib/officina/docenteAuth';
import { apriClasse, chiudiClasse, creaClasse, rimuoviAllievo } from '@/lib/officina/docenteService';
import { ApiError } from '@/lib/officina/http';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export const POST = handlerDocente(async (body, docente) => {
  const azione = typeof body.azione === 'string' ? body.azione : '';
  switch (azione) {
    case 'creaClasse':
      return creaClasse(body, docente);
    case 'chiudiClasse':
      return chiudiClasse(body);
    case 'apriClasse':
      return apriClasse(body);
    case 'rimuoviAllievo':
      return rimuoviAllievo(body);
    default:
      throw new ApiError(400, 'INVALID_BODY', `Azione non riconosciuta: ${azione}`);
  }
});
