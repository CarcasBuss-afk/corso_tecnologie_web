/* Dagli esiti delle prove al verdetto per l'allievo: promosso o no, e l'hint da mostrare.
 * La prima prova è quella che vede; se passa quella e cade su una nascosta, l'hint dice
 * con quali valori e che cosa succede: il programma deve funzionare per chiunque, non per
 * i valori che ha davanti. Modulo puro: lo usano il browser e il server. */
import { traduciErroreJs } from './erroriJs';
import type { EsitoControllo, EsitoProva, Prova, Valutazione } from './tipi';

const ultimo = <T>(a: T[]): T | undefined => a[a.length - 1];

/** L'hint di un controllo fallito, con quello che c'è davvero. */
export function hintControllo(c: EsitoControllo): string {
  const attuale = c.attuale && c.attuale !== '' ? ` Adesso: «${c.attuale}».` : '';
  return `${c.hint}${attuale}`;
}

/** L'hint di una prova fallita: prima gli errori della pagina, poi il primo controllo che non passa. */
export function hintProva(p: EsitoProva): string | null {
  if (p.tempoScaduto) return 'La pagina non risponde più: c\'è un ciclo che non finisce mai? Controlla le condizioni dei tuoi cicli.';
  if (p.errori.length > 0) return traduciErroreJs(p.errori[0]);
  const fallito = p.controlli.find((c) => !c.ok);
  return fallito ? hintControllo(fallito) : null;
}

/**
 * Il verdetto. Gli esiti arrivano nell'ordine delle prove; se mancano (l'esecutore si è
 * fermato prima) la fase non è promossa.
 */
export function valuta(prove: Prova[], esiti: EsitoProva[]): Valutazione {
  const completi = esiti.length === prove.length && esiti.every((e) => e.ok);
  if (completi) return { promosso: true, hint: null, prove: esiti };

  const indice = esiti.findIndex((e) => !e.ok);
  if (indice === -1) {
    return { promosso: false, hint: 'La verifica non è arrivata in fondo: riprova fra un momento.', prove: esiti };
  }
  const esito = esiti[indice];
  const hint = hintProva(esito) ?? 'Qualcosa non torna: rileggi la consegna.';
  if (indice === 0) return { promosso: false, hint, prove: esiti };

  // Prova nascosta: la mostrata passa, questa no. Si dicono i valori, perché è il punto.
  const nome = prove[indice].nome ?? esito.nome;
  const introduzione = nome
    ? `Con i valori che vedi funziona, ma ${nome} no.`
    : 'Con i valori che vedi funziona, ma con altri valori no.';
  return {
    promosso: false,
    hint: `${introduzione} Il programma deve funzionare per chiunque: i dati devono arrivare dalle domande e dalle caselle, non essere scritti nel codice. ${hint}`,
    prove: esiti,
  };
}

/** Gli errori di un esito, tradotti: per la checklist e per il tutor. */
export function erroriTradotti(p: EsitoProva): string[] {
  return p.errori.map(traduciErroreJs);
}

export { ultimo };
