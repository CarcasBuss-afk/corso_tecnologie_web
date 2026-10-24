/* La verifica completa di una consegna, come la fa il server: prima il correttore in jsdom
 * (la pagina fa la cosa giusta?), poi, solo se promossa, il giudice (è scritta come chiede
 * la fase?). È qui perché il giudice è lento e può fallire: si chiama FUORI dalle
 * transazioni Firestore. */
import 'server-only';
import { giudica } from '../giudiceClient';
import { hintGiudice } from '../giudice';
import { eseguiProveServer } from './esecutoreServer';
import { fattiJs } from './fatti';
import type { Fase, Sorgente, Valutazione } from './tipi';
import { valuta } from './valuta';

export async function verificaConsegna(fase: Fase, sorgente: Sorgente): Promise<Valutazione> {
  const esiti = eseguiProveServer(sorgente, fase.prove);
  const valutazione = valuta(fase.prove, esiti);
  if (!valutazione.promosso || !fase.regola) return valutazione;

  const verdetto = await giudica({ consegna: fase.consegna, regola: fase.regola, codice: sorgente.js, fatti: fattiJs(sorgente.js) });
  if (verdetto.genuino) return valutazione;
  return { ...valutazione, promosso: false, hint: hintGiudice(verdetto.motivo, sorgente.js) };
}
