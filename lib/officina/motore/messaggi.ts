/* Il messaggio per l'allievo quando un controllo non passa: una frase sola, costruita da
 * quello che la pagina ha fatto davvero, come gli hint del Giro («Stampi 4 righe invece
 * di 5»). Dice l'errore fatto, non la lista degli errori possibili e nemmeno come si
 * corregge: quello è il mestiere del tutor (che ha anche le note scritte nei compiti).
 * Modulo puro: lo usano il browser e il server. */
import { COLORI_CSS, normalizzaColore } from './colori';
import { traduciErroreJs } from './erroriJs';
import type { Clic, Controllo, EsitoControllo, EsitoProva } from './tipi';

const v = (s: string) => `«${s}»`;
const maiuscola = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/* ------------------------------------------------------------ nomi degli elementi */

/** Come si chiama un elemento in italiano: [con l'articolo, con «di»]. */
const NOMI: Record<string, [string, string]> = {
  p: ['il paragrafo', 'del paragrafo'],
  div: ['il riquadro', 'del riquadro'],
  span: ['il testo', 'del testo'],
  h1: ['il titolo', 'del titolo'],
  h2: ['il titolo', 'del titolo'],
  h3: ['il titolo', 'del titolo'],
  button: ['il pulsante', 'del pulsante'],
  input: ['la casella', 'della casella'],
  textarea: ['la casella', 'della casella'],
  img: ["l'immagine", "dell'immagine"],
  li: ['la voce', 'della voce'],
  ul: ["l'elenco", "dell'elenco"],
  ol: ["l'elenco", "dell'elenco"],
  section: ['la sezione', 'della sezione'],
  label: ["l'etichetta", "dell'etichetta"],
};

/** «vuoto» o «vuota», secondo il nome dell'elemento. */
const vuoto = (e: EsitoControllo) => (/^la /.test(NOMI[e.elemento ?? '']?.[0] ?? '') ? 'vuota' : 'vuoto');

function nomeSelettore(s: string): string {
  return s.startsWith('#') ? s.slice(1) : s;
}

/** «il paragrafo «esito»» oppure «del paragrafo «esito»». */
function nomeElemento(c: { di: string }, e: EsitoControllo, forma: 0 | 1): string {
  const nome = NOMI[e.elemento ?? ''] ?? ["l'elemento", "dell'elemento"];
  return `${nome[forma]} ${v(nomeSelettore(c.di))}`;
}

/* ------------------------------------------------------------- confronti di testo */

const senzaPunteggiatura = (s: string) => s.replace(/[.,;:!?'"«»()\-]/g, '').replace(/\s+/g, ' ').trim();

/** Che cosa distingue due testi quasi uguali, se è una cosa sola: è il dettaglio che si perde. */
function differenza(attuale: string, atteso: string): string {
  if (attuale.toLowerCase() === atteso.toLowerCase()) return 'Attento alle maiuscole e minuscole: ';
  if (attuale.replace(/\s+/g, '') === atteso.replace(/\s+/g, '')) return 'Controlla gli spazi: ';
  if (senzaPunteggiatura(attuale) === senzaPunteggiatura(atteso)) return 'Controlla la punteggiatura: ';
  return '';
}

/* -------------------------------------------------------------------- stile */

/** Le proprietà che si usano nel corso, con l'articolo: [nome, «non è impostato/a»]. */
const PROPRIETA: Record<string, [string, string]> = {
  backgroundColor: ['lo sfondo', 'impostato'],
  color: ['il colore del testo', 'impostato'],
  width: ['la larghezza', 'impostata'],
  height: ['l\'altezza', 'impostata'],
  fontSize: ['la grandezza del testo', 'impostata'],
  display: ['il display', 'impostato'],
  border: ['il bordo', 'impostato'],
  borderColor: ['il colore del bordo', 'impostato'],
};

/** Un colore come lo scriverebbe l'allievo: il nome CSS se ce l'ha, altrimenti l'esadecimale. */
export function nomeColore(valore: string): string {
  const n = normalizzaColore(valore);
  if (n === 'transparent') return 'trasparente';
  for (const [nome, rgb] of Object.entries(COLORI_CSS)) {
    if (`rgb(${rgb.split(',').join(', ')})` === n) return nome;
  }
  const m = n.match(/^rgb\((\d+), (\d+), (\d+)\)$/);
  if (!m) return valore;
  return `#${[m[1], m[2], m[3]].map((x) => Number(x).toString(16).padStart(2, '0')).join('')}`;
}

function messaggioStile(c: Extract<Controllo, { controlla: 'stile' }>, e: EsitoControllo): string {
  const [prop, impostato] = PROPRIETA[c.proprieta] ?? [`la proprietà ${c.proprieta}`, 'impostata'];
  const soggetto = maiuscola(`${prop} ${nomeElemento(c, e, 1)}`);
  const atteso = c.atteso ?? v(Array.isArray(c.valore) ? c.valore[0] : c.valore);
  const grezzo = e.attuale && e.attuale !== '(niente)' ? e.attuale : '';
  const colore = /color/i.test(c.proprieta);
  const attuale = colore && grezzo ? nomeColore(grezzo) : grezzo;
  if (!attuale || attuale === 'trasparente') return `${soggetto} non è ${impostato}, invece deve essere ${atteso}.`;
  return `${soggetto} è ${v(attuale)}, invece deve essere ${atteso}.`;
}

/* ----------------------------------------------------------------- i clic */

/** Il clic non arriva a nessuna funzione: è l'errore, qualunque cosa controllasse il passo dopo. */
function messaggioScollegato(clic: Clic): string {
  const altri = clic.eventi.filter((t) => t !== 'click');
  if (altri.length > 0) {
    return `Il pulsante ${v(clic.pulsante)} ascolta l'evento ${altri.map(v).join(' e ')}, non il clic: cliccandolo non succede niente.`;
  }
  return `Il pulsante ${v(clic.pulsante)} non è collegato a nessuna funzione: cliccandolo non succede niente.`;
}


/* ------------------------------------------------------------- il messaggio */

/** Il messaggio di un controllo fallito. */
export function messaggioControllo(c: Controllo, e: EsitoControllo): string {
  if (e.dopoClic && !e.dopoClic.collegato) return messaggioScollegato(e.dopoClic);
  if ('di' in c && e.mancante) return `Nella pagina non c'è nessun elemento con id ${v(nomeSelettore(c.di))}.`;
  const attuale = e.attuale ?? '';

  switch (c.controlla) {
    case 'testo': {
      const el = maiuscola(nomeElemento(c, e, 0));
      if (c.uguale !== undefined) {
        if (attuale === '') return `${el} è ${vuoto(e)}, invece deve dire ${v(c.uguale)}.`;
        const d = differenza(attuale, c.uguale);
        return `${d}${d ? nomeElemento(c, e, 0) : el} dice ${v(attuale)}, invece deve dire ${v(c.uguale)}.`;
      }
      const atteso = c.contiene ?? '';
      if (attuale === '') return `${el} è ${vuoto(e)}, ma dentro ci deve essere ${v(atteso)}.`;
      return `${el} dice ${v(attuale)}, ma dentro ci deve essere ${v(atteso)}.`;
    }
    case 'html':
      return `Dentro ${nomeElemento(c, e, 0)} c'è ${v(attuale || '(niente)')}, ma ci deve essere ${v(c.contiene)}.`;
    case 'stile':
      return messaggioStile(c, e);
    case 'visibile': {
      const el = maiuscola(nomeElemento(c, e, 0));
      return c.visibile ? `${el} non si vede, invece si deve vedere.` : `${el} si vede, invece non si deve vedere.`;
    }
    case 'alert': {
      if (attuale === 'nessun alert') {
        return e.dopoClic ? `Clic su ${v(e.dopoClic.pulsante)}: la funzione parte, ma non compare nessun alert.` : 'Non compare nessun alert.';
      }
      if (c.uguale !== undefined) {
        const d = differenza(attuale, c.uguale);
        return `${d}${d ? 'compare' : 'Compare'} l'alert ${v(attuale)}, invece deve dire ${v(c.uguale)}.`;
      }
      return `Compare l'alert ${v(attuale)}, ma dentro ci deve essere ${v(c.contiene ?? '')}.`;
    }
    case 'alerts': {
      const n = Number.parseInt(attuale, 10) || 0;
      const servono = c.quanti === 1 ? 'uno solo' : String(c.quanti);
      if (n === 0) return `Non compare nessun alert, invece ne ${c.quanti === 1 ? 'deve comparire uno' : `devono comparire ${c.quanti}`}.`;
      return `${n === 1 ? 'Compare 1 alert' : `Compaiono ${n} alert`}, invece ne ${c.quanti === 1 ? 'deve comparire' : 'devono comparire'} ${servono}.`;
    }
    case 'prompt': {
      const n = Number.parseInt(attuale, 10) || 0;
      if (n === 0) return e.dopoClic ? `Clic su ${v(e.dopoClic.pulsante)}: non compare nessuna domanda (prompt).` : 'Non compare nessuna domanda (prompt).';
      return `${n === 1 ? 'Compare 1 domanda' : `Compaiono ${n} domande`}, invece ne servono almeno ${c.almeno}.`;
    }
    case 'console':
      return attuale === '(console vuota)' ? `Nella console non compare niente, invece ci deve essere ${v(c.contiene)}.` : `Nella console c'è ${v(attuale)}, ma non ${v(c.contiene)}.`;
  }
}

/* ----------------------------------------------------------------- gli errori */

const ERRORE_NULL = /Cannot (?:read|set) propert(?:y|ies) of null|null is not an object/;

/** L'errore JavaScript tradotto; per un getElementById andato a vuoto si dice quale id e quali ci sono. */
export function messaggioErrore(errore: string, p: Pick<EsitoProva, 'idMancanti' | 'idPagina'>): string {
  const mancante = p.idMancanti?.[0];
  if (mancante === undefined || !ERRORE_NULL.test(errore)) return traduciErroreJs(errore);
  const originale = `(${errore.replace(/^Uncaught\s+/i, '').trim()})`;
  const ids = p.idPagina ?? [];
  if (mancante.startsWith('#') && ids.includes(mancante.slice(1))) {
    return `getElementById cerca ${v(mancante)}, ma l'id nella pagina è ${v(mancante.slice(1))}, senza il #. ${originale}`;
  }
  const elenco = ids.length === 0 ? '' : ids.length === 1 ? `: nella pagina c'è solo ${v(ids[0])}` : `: nella pagina gli id sono ${ids.slice(0, -1).map(v).join(', ')} e ${v(ids[ids.length - 1])}`;
  return `getElementById non trova nessun elemento con id ${v(mancante)}${elenco}. ${originale}`;
}
