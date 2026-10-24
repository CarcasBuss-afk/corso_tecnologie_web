/* I fatti misurati sul JavaScript dell'allievo, per il giudice: contati con espressioni
 * regolari dopo aver tolto commenti e stringhe, così un «function» dentro una frase non
 * conta. Non è un parser: basta per dire quante funzioni con nome ci sono, quanti
 * addEventListener, se compaiono funzioni anonime o onclick. Modulo puro. */

export interface FattiJs {
  funzioniConNome: number;
  funzioniAnonime: number;
  addEventListener: number;
  onclick: number;
  getElementById: number;
  alert: number;
  prompt: number;
  confirm: number;
  consoleLog: number;
  innerHTML: number;
  textContent: number;
  style: number;
  value: number;
  numberConversioni: number;
  ifs: number;
  elses: number;
  let: number;
  const: number;
  var: number;
  operatoriLogici: number;
  incrementi: number;
  righe: number;
}

/** Via commenti e contenuto delle stringhe (restano le virgolette vuote). */
export function spoglia(codice: string): string {
  return codice
    .replace(/\r\n?/g, '\n')
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/\/\/[^\n]*/g, ' ')
    .replace(/"(?:[^"\\\n]|\\.)*"/g, '""')
    .replace(/'(?:[^'\\\n]|\\.)*'/g, "''")
    .replace(/`(?:[^`\\]|\\.)*`/g, '``');
}

const conta = (testo: string, re: RegExp) => (testo.match(re) ?? []).length;

export function fattiJs(codice: string): FattiJs {
  const s = spoglia(codice);
  return {
    funzioniConNome: conta(s, /\bfunction\s+[A-Za-z_$][\w$]*\s*\(/g),
    funzioniAnonime: conta(s, /\bfunction\s*\(/g) + conta(s, /=>/g),
    addEventListener: conta(s, /\.addEventListener\s*\(/g),
    onclick: conta(s, /\.on[a-z]+\s*=/g),
    getElementById: conta(s, /getElementById\s*\(/g),
    alert: conta(s, /\balert\s*\(/g),
    prompt: conta(s, /\bprompt\s*\(/g),
    confirm: conta(s, /\bconfirm\s*\(/g),
    consoleLog: conta(s, /console\.log\s*\(/g),
    innerHTML: conta(s, /\.innerHTML\b/g),
    textContent: conta(s, /\.textContent\b/g),
    style: conta(s, /\.style\./g),
    value: conta(s, /\.value\b/g),
    numberConversioni: conta(s, /\bNumber\s*\(/g) + conta(s, /\bparseInt\s*\(/g) + conta(s, /\bparseFloat\s*\(/g),
    ifs: conta(s, /\bif\s*\(/g),
    elses: conta(s, /\belse\b/g),
    let: conta(s, /\blet\s+/g),
    const: conta(s, /\bconst\s+/g),
    var: conta(s, /\bvar\s+/g),
    operatoriLogici: conta(s, /&&|\|\||!(?!=)/g),
    incrementi: conta(s, /\+\+|--|\+=|-=/g),
    righe: codice.split('\n').filter((r) => r.trim() !== '').length,
  };
}

/** I fatti a parole, per il messaggio al giudice. */
export function fattiInRighe(f: FattiJs): string[] {
  return [
    `funzioni con nome (function nome(...)): ${f.funzioniConNome}`,
    `funzioni anonime o freccia: ${f.funzioniAnonime}`,
    `addEventListener: ${f.addEventListener}`,
    `assegnazioni .onclick o simili: ${f.onclick}`,
    `getElementById: ${f.getElementById}`,
    `alert: ${f.alert} · prompt: ${f.prompt} · confirm: ${f.confirm} · console.log: ${f.consoleLog}`,
    `innerHTML: ${f.innerHTML} · textContent: ${f.textContent} · .style.: ${f.style} · .value: ${f.value}`,
    `Number()/parseInt/parseFloat: ${f.numberConversioni}`,
    `if: ${f.ifs} · else: ${f.elses} · operatori logici (&&, ||, !): ${f.operatoriLogici}`,
    `let: ${f.let} · const: ${f.const} · var: ${f.var} · incrementi (++, --, +=, -=): ${f.incrementi}`,
    `righe non vuote: ${f.righe}`,
  ];
}
