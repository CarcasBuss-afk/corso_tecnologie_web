/* Compito facile · Il biglietto da visita (Modulo 4, lezione 1).
 * Idea nuova: il primo JavaScript, come nell'esercizio guidato della lezione («Ciao, sono
 * Mario!», «Ho 15 anni», i giorni vissuti). console.log con un testo, poi con più valori
 * separati da virgole (testo fra virgolette, numeri senza), poi un calcolo con le parentesi.
 * Niente pulsanti né variabili: il biglietto si stampa nella console, sotto la pagina. Tre
 * fasi, molto guidate: il codice d'esempio è quasi tutto nella consegna. */
import { CSS_BASE, rigaConsole } from './aiuti';
import { generatore, scegli, type Compito } from './tipi';

const NOMI = ['Giulia', 'Matteo', 'Sofia', 'Lorenzo', 'Alice', 'Tommaso', 'Aurora', 'Leonardo'] as const;
const CITTA = ['Milano', 'Torino', 'Napoli', 'Bari', 'Genova', 'Bologna', 'Palermo', 'Verona'] as const;

/** L'anno dei conti: scritto nella frase, così il risultato non cambia con il calendario. */
const ANNO = 2026;

export function generaBiglietto(seme: number): Compito {
  const rnd = generatore(seme);
  const nome = scegli(rnd, NOMI);
  const citta = scegli(rnd, CITTA);
  const nascita = scegli(rnd, [2010, 2011, 2012, 2013] as const);

  const eta = ANNO - nascita;
  const RIGA_NOME = `Ciao, sono ${nome}!`;
  const RIGA_CITTA = `Vivo a ${citta}`;
  const RIGA_ETA = `Nel ${ANNO} compio ${eta} anni`;
  const RIGA_GIORNI = `Ho vissuto circa ${eta * 365} giorni!`;

  const html = `<h1>🪪 Il biglietto da visita</h1>
<p>Il biglietto lo stampa JavaScript nella <strong>console</strong>: qui la vedi sotto l'anteprima (nel browser vero si apre con F12).</p>`;

  const rigaNome = rigaConsole(RIGA_NOME, `In console c'è la riga «${RIGA_NOME}»`, 'Il testo va fra virgolette dentro console.log, scritto esattamente così: con la virgola dopo «Ciao» e il punto esclamativo in fondo.');
  const rigaCitta = rigaConsole(RIGA_CITTA, `In console c'è la riga «${RIGA_CITTA}»`, 'Ogni riga del biglietto è un console.log a parte: sotto il primo, scrivine un secondo con la città fra virgolette.');
  const rigaEta = rigaConsole(RIGA_ETA, `In console c'è la riga «${RIGA_ETA}»`, `Tre valori separati da virgole: "Nel ${ANNO} compio", poi il calcolo ${ANNO} - ${nascita} senza virgolette, poi "anni". Se in console vedi il calcolo scritto e non il risultato, togli le virgolette intorno ai numeri.`);
  const rigaGiorni = rigaConsole(RIGA_GIORNI, `In console c'è la riga «${RIGA_GIORNI}»`, `Gli anni vanno fra parentesi tonde prima di moltiplicare: (${ANNO} - ${nascita}) * 365. Senza parentesi JavaScript moltiplica solo ${nascita} e il risultato è sbagliato.`);

  return {
    scheda: {
      id: 'biglietto',
      titolo: 'Il biglietto da visita',
      lezione: 'Modulo 4 · Lezione 1',
      committente: `Il club di programmazione della scuola presenta i nuovi iscritti con un biglietto da visita stampato nella console. Questa volta tocca ${/^[AEIOU]/.test(nome) ? 'ad' : 'a'} ${nome}: il programma lo scrivi tu.`,
      prodotto: 'Un programma che scrive il biglietto riga per riga con console.log e calcola da solo età e giorni vissuti.',
      dati: [`nome: ${nome}`, `città: ${citta}`, `anno di nascita: ${nascita}`, `anno dei conti: ${ANNO}`],
      risultatoFinale: [
        `In cima al biglietto «${RIGA_NOME}» e «${RIGA_CITTA}».`,
        `Poi l'età: «${RIGA_ETA}», calcolata da JavaScript (non scritta a mano).`,
        `In fondo «${RIGA_GIORNI}», anche questo calcolato da JavaScript.`,
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Il biglietto comincia con la presentazione: due righe di testo.\n1. Sotto il primo commento scrivi \`console.log("${RIGA_NOME}");\`.\n2. Sotto, un altro \`console.log\` che stampa \`${RIGA_CITTA}\`.\nIl testo va fra virgolette. Scrivi il codice nel riquadro JavaScript, **senza il tag \`<script>\`**: qui non serve. Guarda il risultato nella **console**, sotto la pagina.`,
        regola: 'Il testo si stampa con console.log, fra virgolette: un console.log per ogni riga.',
        prove: [{ passi: [rigaNome, rigaCitta] }],
        codiceIniziale: '// 1. La presentazione: nome e città\n\n// 2. L\'età\n\n// 3. I giorni vissuti\n',
      },
      {
        consegna: `Ora l'età. L'anno di nascita è il ${nascita}: il calcolo lo fa JavaScript.\n1. Sotto il commento dell'età aggiungi un \`console.log\` con **tre valori separati da virgole**: \`"Nel ${ANNO} compio"\`, poi il calcolo \`${ANNO} - ${nascita}\`, poi \`"anni"\`.\n2. Il calcolo va **senza virgolette**: i numeri fra virgolette sono testo e non si calcolano.\nIn console deve comparire \`Nel ${ANNO} compio N anni\`: al posto di N il numero calcolato da JavaScript. JavaScript mette da solo uno spazio fra i valori. Le due righe di prima restano.`,
        regola: `L'età la calcola JavaScript: dentro il console.log c'è la sottrazione ${ANNO} - ${nascita} come numeri senza virgolette, non il risultato scritto a mano.`,
        prove: [{ passi: [rigaNome, rigaCitta, rigaEta] }],
      },
      {
        consegna: `L'ultima riga dice quanti giorni ha vissuto ${nome}, più o meno: gli anni per 365.\n1. Sotto il commento dei giorni aggiungi un \`console.log\` con tre valori: \`"Ho vissuto circa"\`, poi il calcolo, poi \`"giorni!"\`.\n2. Il calcolo è quello dell'età, **fra parentesi tonde**, per 365: \`(${ANNO} - ${nascita}) * 365\`.\nIn console deve comparire \`Ho vissuto circa N giorni!\`. Non vale scrivere a mano il numero già calcolato. Le righe di prima restano.`,
        regola: `Anche i giorni li calcola JavaScript: la sottrazione ${ANNO} - ${nascita} fra parentesi, moltiplicata per 365. Non vale il numero scritto a mano.`,
        prove: [{ passi: [rigaNome, rigaCitta, rigaEta, rigaGiorni] }],
      },
    ],
    soluzioni: [
      `// 1. La presentazione: nome e città
console.log("${RIGA_NOME}");
console.log("${RIGA_CITTA}");`,
      `// 1. La presentazione: nome e città
console.log("${RIGA_NOME}");
console.log("${RIGA_CITTA}");

// 2. L'età
console.log("Nel ${ANNO} compio", ${ANNO} - ${nascita}, "anni");`,
      `// 1. La presentazione: nome e città
console.log("${RIGA_NOME}");
console.log("${RIGA_CITTA}");

// 2. L'età
console.log("Nel ${ANNO} compio", ${ANNO} - ${nascita}, "anni");

// 3. I giorni vissuti
console.log("Ho vissuto circa", (${ANNO} - ${nascita}) * 365, "giorni!");`,
    ],
  };
}
