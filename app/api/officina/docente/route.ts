/* Le azioni del docente: classi e allievi, e gli sfondi festivi del sito. Il resto è monitoraggio (onSnapshot). */
import { handlerDocente } from '@/lib/officina/docenteAuth';
import { apriClasse, chiudiClasse, creaClasse, rimuoviAllievo } from '@/lib/officina/docenteService';
import { ApiError } from '@/lib/officina/http';
import { accendiSfondo, caricaSfondo, elencoSfondi, eliminaSfondo } from '@/lib/sfondi/store';

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
    case 'sfondi':
      return elencoSfondi();
    case 'caricaSfondo':
      return caricaSfondo(body);
    case 'accendiSfondo':
      return accendiSfondo(body);
    case 'eliminaSfondo':
      return eliminaSfondo(body);
    default:
      throw new ApiError(400, 'INVALID_BODY', `Azione non riconosciuta: ${azione}`);
  }
});
