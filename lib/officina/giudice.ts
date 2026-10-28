/* Il Giudice: il controllo anti-furbo sul codice promosso (OFFICINA.md §3).
 *
 * Il correttore controlla la pagina; se fa la cosa giusta, prima di passare alla fase dopo
 * il giudice (Sonnet) guarda il codice e la regola della fase a parole: «funzione con nome e
 * addEventListener», «i dati arrivano dal prompt». Decide un lettore, con davanti i fatti
 * misurati sul codice. Qui le parti pure: prompt, messaggio, lettura del verdetto, giudice
 * finto. La chiamata al modello sta in giudiceClient.ts (server-only). */
import { contieneCodice } from './filtroCodice';
import { fattiInRighe, type FattiJs } from './motore/fatti';

export const PROMPT_GIUDICE = `Sei il giudice di un'esercitazione di JavaScript per allievi di 14-16 anni al primo anno di una scuola professionale italiana. La pagina dell'allievo fa già la cosa giusta (clic, testi, finestre: tutto verificato da un correttore automatico). Tu devi dire solo se il codice è scritto nel modo che la fase vuole insegnare, secondo la REGOLA che ti viene data.

Le regole del corso: il pulsante si collega con lo schema in tre passi (id nel pulsante → funzione con nome dichiarata con function → document.getElementById(...).addEventListener("click", nomeFunzione)); niente funzioni anonime né freccia; niente onclick; i dati che cambiano arrivano da prompt(), confirm() o dalle caselle (.value), non sono scritti nel codice.

Rispondi OK oppure NO.
- OK se il programma rispetta la regola. Variabili d'appoggio, nomi diversi, righe in più, un modo diverso ma onesto di scrivere la stessa cosa (per esempio else if al posto di if annidati, o un confronto equivalente): tutto OK. In dubbio: OK.
- NO anche quando la REGOLA chiede esplicitamente una forma e il codice non la rispetta: per esempio la REGOLA chiede che un valore stia in una costante usata nel messaggio, e invece la costante è dichiarata ma il messaggio riscrive il valore a mano.
- Per il resto, NO solo se c'è una frode evidente rispetto alla regola: funzioni anonime o freccia dove la regola chiede funzioni con nome; onclick al posto di addEventListener; i risultati scritti a mano dove la regola chiede che arrivino dal prompt o dalle caselle; un if finto che dà sempre lo stesso esito.

I FATTI MISURATI SUL CODICE sono esatti, contati da un analizzatore: non contraddirli.

Formato della risposta, senza altro testo:
- prima riga: OK oppure NO
- se NO, seconda riga: una frase sola in italiano, al massimo 25 parole, rivolta all'allievo (dai del tu), che dice SOLO che cosa non rispetta la regola, come un messaggio di errore (per esempio: «il pulsante è collegato con una funzione freccia, la regola chiede una funzione con nome»). Non dire come si corregge, non dare consigli né esempi, non scrivere codice: a spiegare ci pensa il tutor. Puoi nominare function, addEventListener, onclick, prompt, Number, if e i nomi delle sue variabili.`;

export interface ContestoGiudizio {
  consegna: string;
  regola: string;
  codice: string;
  fatti: FattiJs;
}

/** `guasto`: il modello non ha risposto o non si è capito, e la consegna passa senza giudizio. */
export type Verdetto = { genuino: true; guasto?: boolean } | { genuino: false; motivo: string };

/** Il messaggio con la regola, il codice e i fatti. */
export function messaggioGiudizio(c: ContestoGiudizio): string {
  return [
    `CONSEGNA DELLA FASE: ${c.consegna.replace(/\*\*/g, '').replace(/`/g, '')}`,
    `REGOLA: ${c.regola}`,
    `CODICE DELL'ALLIEVO (il JavaScript della pagina):\n${c.codice.replace(/\r\n?/g, '\n').trim()}`,
    `FATTI MISURATI SUL CODICE:\n${fattiInRighe(c.fatti)
      .map((f) => `- ${f}`)
      .join('\n')}`,
  ].join('\n\n');
}

/** Legge il verdetto del modello. `null` se non si capisce: in quel caso il server promuove. */
export function interpretaVerdetto(testo: string): Verdetto | null {
  const righe = testo
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((r) => r.replace(/[`*#\-]/g, '').trim())
    .filter((r) => r !== '');
  if (righe.length === 0) return null;
  const prima = righe[0].toUpperCase();
  if (/^OK\b/.test(prima)) return { genuino: true };
  if (/^NO\b/.test(prima)) {
    const dopo = righe[0].slice(2).replace(/^[\s:.,-]+/, '').trim();
    const motivo = (dopo || righe.slice(1).join(' ')).trim();
    return { genuino: false, motivo };
  }
  return null;
}

/** L'hint per l'allievo bocciato dal giudice: mai codice, anche se il modello ce l'ha messo. */
export function hintGiudice(motivo: string, codiceAllievo = ''): string {
  const pulito = motivo.replace(/\s+/g, ' ').trim();
  const buono = pulito !== '' && !contieneCodice(pulito, codiceAllievo);
  const spiegazione = buono ? pulito : 'il codice non segue la regola della fase';
  return `La pagina fa la cosa giusta, ma il codice non è fatto come chiede la fase: ${spiegazione}`;
}

/** Il marcatore con cui i test fanno bocciare il giudice finto (un commento JavaScript). */
export const MARCATORE_FURBO = '// furbo';

/** Il giudice finto dei test e dello sviluppo senza chiave: promuove tutto tranne il codice con `// furbo`. */
export function giudizioFinto(c: ContestoGiudizio): Verdetto {
  if (c.codice.includes(MARCATORE_FURBO)) return { genuino: false, motivo: 'il collegamento non segue lo schema in tre passi: funzione con nome e addEventListener (giudice di prova)' };
  return { genuino: true };
}
