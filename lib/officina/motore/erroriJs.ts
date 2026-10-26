/* Gli errori JavaScript del browser, tradotti in hint in italiano per un allievo di 14 anni.
 * Non si riscrive la riga: si dice che cosa guardare. Modulo puro. */

const RIGA = /(?:line|riga)\s+(\d+)/i;

/** Il nome fra apici del simbolo che manca, se il messaggio lo contiene. */
function nome(messaggio: string, re: RegExp): string | null {
  const m = messaggio.match(re);
  return m ? m[1] : null;
}

/**
 * Da «Uncaught ReferenceError: salutta is not defined» a «"salutta" non esiste: controlla
 * come l'hai scritto…». Il messaggio originale resta in coda, fra parentesi, perché è quello
 * che vedono nella console di VS Code e devono imparare a leggerlo.
 */
export function traduciErroreJs(messaggio: string): string {
  const m = messaggio.replace(/^Uncaught\s+/i, '').replace(/^Script error\.?$/i, 'Errore nello script').trim();
  // I messaggi del correttore stesso (un'azione che non riesce) sono già in italiano.
  if (/^Non trovo /.test(m)) return `${m}: l'HTML della pagina è quello dato, non va cambiato.`;
  const originale = `(${m})`;

  let n: string | null;
  // Il tipo davanti è facoltativo: gli errori dentro le funzioni dei clic arrivano a volte senza
  // (jsdom scrive solo «nome is not defined»).
  if ((n = nome(m, /(?:ReferenceError:\s+)?(\S+) is not defined/))) {
    return `«${n}» non esiste: controlla come l'hai scritto (maiuscole e minuscole contano) e se l'hai dichiarato con let prima di usarlo. ${originale}`;
  }
  if (/Cannot (?:read|set) propert(?:y|ies) of null/.test(m) || /null is not an object/.test(m)) {
    const prop = nome(m, /reading '([^']+)'/) ?? nome(m, /setting '([^']+)'/) ?? nome(m, /evaluating '[^.]+\.([^'.]+)'/);
    return `getElementById non ha trovato l'elemento: l'id che hai scritto fra virgolette deve essere uguale a quello nell'HTML, lettera per lettera${prop ? ` (poi gli chiedi «${prop}», ma lui è null)` : ''}. ${originale}`;
  }
  if ((n = nome(m, /(?:TypeError:\s+)?(\S+) is not a function/))) {
    return `«${n}» non è una funzione: controlla il nome (è quello che hai dato con function?) e che ci siano le parentesi tonde solo dove servono. ${originale}`;
  }
  if (/SyntaxError/.test(m)) {
    if (/Unexpected end of input/.test(m)) return `Manca qualcosa alla fine: una graffa } o una parentesi ) che chiude. Conta le aperte e le chiuse. ${originale}`;
    if (/missing \) after argument list/.test(m)) return `Manca una parentesi tonda che chiude ) dopo gli argomenti di una funzione. ${originale}`;
    if (/Invalid or unexpected token/.test(m)) return `C'è un carattere che JavaScript non capisce: una virgoletta non chiusa, un apostrofo nel testo, un simbolo di troppo. ${originale}`;
    if (/Unexpected identifier/.test(m)) return `Due parole attaccate senza il simbolo che le lega: controlla punti, parentesi e virgolette nella riga. ${originale}`;
    if (/Unexpected token/.test(m)) return `C'è un simbolo fuori posto: una parentesi, una graffa o una virgola che non torna. ${originale}`;
    if (/has already been declared/.test(m)) return `Hai dichiarato due volte la stessa variabile con let: la seconda volta basta il nome, senza let. ${originale}`;
    return `Errore di scrittura nel codice: controlla parentesi, graffe e virgolette. ${originale}`;
  }
  if (/Assignment to constant variable/.test(m)) {
    return `Stai cambiando una variabile dichiarata con const: se deve cambiare, dichiarala con let. ${originale}`;
  }
  if (/is not iterable|Cannot access .* before initialization/.test(m)) {
    return `Usi una variabile prima di averla dichiarata: sposta il let più in alto. ${originale}`;
  }
  const riga = m.match(RIGA);
  return `La pagina ha dato un errore${riga ? ` alla riga ${riga[1]}` : ''}: ${m}`;
}
