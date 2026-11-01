/* Compito facile · Il pulsante che saluta (Modulo 4, lezione 2).
 * Idea nuova: lo schema in tre passi (id → funzione con nome → addEventListener), ripetuto per
 * tre pulsanti. Come nella lezione, i pulsanti parlano solo con la console: alert e prompt
 * arrivano nella Lezione 3. Tre fasi, molto guidate: il codice d'esempio è quasi tutto nella
 * consegna. */
import { clic, CSS_BASE, rigaConsole } from './aiuti';
import { generatore, intero, REGOLE, scegli, scegliDue, type Compito } from './tipi';

const BIBLIOTECHE = ['Biblioteca Rodari', 'Biblioteca Calvino', 'Biblioteca Collodi', 'Biblioteca Deledda', 'Biblioteca Montale', 'Biblioteca Levi'] as const;
const GIORNI = ['lunedì', 'martedì', 'mercoledì', 'domenica'] as const;
const REGOLE_SALA = ['Parla a bassa voce.', 'Niente cibo tra gli scaffali.', 'Spegni la suoneria del telefono.', 'Rimetti i libri al loro posto.', 'Non scrivere sui libri.'] as const;

export function generaSaluto(seme: number): Compito {
  const rnd = generatore(seme);
  const biblioteca = scegli(rnd, BIBLIOTECHE);
  const apertura = intero(rnd, 8, 10);
  const chiusura = intero(rnd, 18, 20);
  const chiuso = scegli(rnd, GIORNI);
  const [regola1, regola2] = scegliDue(rnd, REGOLE_SALA);
  const giorniPrestito = scegli(rnd, [14, 21, 30] as const);

  const benvenuto = `Benvenuto alla ${biblioteca}!`;
  const orari = `Aperti dalle ${apertura} alle ${chiusura}, chiuso il ${chiuso}`;
  const regola3 = `Restituisci i libri entro ${giorniPrestito} giorni.`;

  const html = `<h1>📚 ${biblioteca}</h1>
<p>I messaggi della biblioteca compaiono nella <strong>console</strong>, sotto la pagina.</p>
<button id="btnEntra">Entra</button>
<button id="btnOrari">Orari</button>
<button id="btnRegole">Regole</button>`;

  const hintCollegamento = 'Se in console non compare niente: la funzione è collegata al pulsante con addEventListener? L\'id fra virgolette deve essere uguale a quello nell\'HTML, e il nome della funzione va senza parentesi.';

  const rigaEntra = (hint: string) => rigaConsole(benvenuto, `In console c'è la riga «${benvenuto}»`, hint);
  const rigaOrari = (hint: string) => rigaConsole(orari, `In console c'è la riga «${orari}»`, hint);

  const ENTRA = `function entra() {
  console.log("${benvenuto}");
}`;
  const ORARI = `function mostraOrari() {
  console.log("${orari}");
}`;

  return {
    scheda: {
      id: 'saluto',
      titolo: 'Il pulsante che saluta',
      lezione: 'Modulo 4 · Lezione 2',
      committente: `La «${biblioteca}» mette all'ingresso un tablet con tre pulsanti: chi entra lo tocca e legge il benvenuto, gli orari e le regole della sala.`,
      prodotto: 'Una pagina con tre pulsanti: ognuno ha la sua funzione con nome, collegata con addEventListener, che scrive nella console.',
      dati: [`biblioteca: ${biblioteca}`, `orari: dalle ${apertura} alle ${chiusura}, chiuso il ${chiuso}`, `regole: «${regola1}» e «${regola2}»`, `prestito: ${giorniPrestito} giorni`],
      risultatoFinale: [
        `Clic su «Entra»: in console compare «${benvenuto}».`,
        `Clic su «Orari»: in console compare «${orari}».`,
        'Clic su «Regole»: in console compaiono tre righe, le regole della sala.',
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Quando si clicca **Entra** (id \`btnEntra\`), nella **console** compare la riga \`${benvenuto}\`.\n1. Scrivi una funzione con un nome scelto da te, per esempio \`entra\`. Dentro c'è una riga sola: \`console.log("${benvenuto}");\`.\n2. Sotto la funzione, collegala al pulsante: \`document.getElementById("btnEntra").addEventListener("click", entra);\`. Se hai scelto un altro nome, metti il tuo, **senza parentesi**.\nLa riga deve comparire solo al clic. Per ora gli altri pulsanti non fanno niente.`,
        regola: `${REGOLE.treGesti} Il console.log sta dentro la funzione, non fuori: la riga compare solo quando si clicca.`,
        prove: [
          {
            passi: [
              clic('btnEntra', 'Entra'),
              rigaEntra(`${hintCollegamento} Se compare una riga diversa: il testo deve essere esattamente «${benvenuto}», con le maiuscole e il punto esclamativo.`),
            ],
          },
        ],
        codiceIniziale: '// 1. La funzione, con dentro il console.log\n\n// 2. Il collegamento: il pulsante btnEntra chiama la funzione\n',
      },
      {
        consegna: `Ora il pulsante **Orari** (id \`btnOrari\`): al clic, nella console compare \`${orari}\`.\n1. **Aggiungi** sotto la prima una **nuova** funzione, per esempio \`mostraOrari\`, con dentro il \`console.log\` di quella riga.\n2. Collegala con un **nuovo** \`addEventListener\` al pulsante \`btnOrari\`, sotto il collegamento di Entra.\nLo schema è lo stesso della fase 1. **Entra** deve continuare a funzionare.`,
        regola: `${REGOLE.treGesti} Ogni pulsante ha la sua funzione con nome e il suo addEventListener: Orari non riusa la funzione di Entra.`,
        prove: [
          {
            passi: [
              clic('btnOrari', 'Orari'),
              rigaOrari('Se non compare niente: il pulsante Orari ha un id suo, btnOrari. Serve un secondo addEventListener con quell\'id e il nome della nuova funzione. Se la riga è diversa: controlla virgola, spazi e il giorno di chiusura.'),
            ],
          },
          {
            nome: 'con tutti e due i pulsanti',
            passi: [
              clic('btnEntra', 'Entra'),
              rigaEntra('Entra deve continuare a funzionare come nella fase 1: la sua funzione e il suo collegamento restano.'),
              clic('btnOrari', 'Orari'),
              rigaOrari('Gli orari li scrive la funzione collegata a btnOrari, non quella di Entra.'),
            ],
          },
        ],
      },
      {
        consegna: `L'ultimo pulsante, **Regole** (id \`btnRegole\`), scrive nella console **tre righe**.\n1. **Aggiungi** una **nuova** funzione, per esempio \`mostraRegole\`. Dentro ci sono **tre** \`console.log\`, uno per riga, in quest'ordine: \`${regola1}\`, poi \`${regola2}\`, poi \`${regola3}\`.\n2. Collegala con un **nuovo** \`addEventListener\` al pulsante \`btnRegole\`.\nCon un clic compaiono tutte e tre le righe. Entra e Orari devono continuare a funzionare.`,
        regola: `${REGOLE.treGesti} Ogni pulsante ha la sua funzione con nome e il suo addEventListener. Le tre regole le scrivono tre console.log dentro la stessa funzione.`,
        prove: [
          {
            passi: [
              clic('btnRegole', 'Regole'),
              rigaConsole(regola1, `In console c'è la riga «${regola1}»`, 'Se non compare niente: serve un terzo addEventListener, con l\'id btnRegole e il nome della nuova funzione. Se la riga è diversa: copia il testo esatto, con il punto finale.'),
              rigaConsole(regola2, `In console c'è la riga «${regola2}»`, 'La seconda regola è un altro console.log, sotto il primo, dentro la stessa funzione.'),
              rigaConsole(regola3, `In console c'è la riga «${regola3}»`, `La terza regola è il terzo console.log: attento al numero dei giorni, ${giorniPrestito}.`),
            ],
          },
          {
            nome: 'con tutti e tre i pulsanti',
            passi: [
              clic('btnEntra', 'Entra'),
              rigaEntra('Entra deve continuare a funzionare come prima.'),
              clic('btnOrari', 'Orari'),
              rigaOrari('Orari deve continuare a funzionare come nella fase 2.'),
            ],
          },
        ],
      },
    ],
    soluzioni: [
      `${ENTRA}

document.getElementById("btnEntra").addEventListener("click", entra);`,
      `${ENTRA}

${ORARI}

document.getElementById("btnEntra").addEventListener("click", entra);
document.getElementById("btnOrari").addEventListener("click", mostraOrari);`,
      `${ENTRA}

${ORARI}

function mostraRegole() {
  console.log("${regola1}");
  console.log("${regola2}");
  console.log("${regola3}");
}

document.getElementById("btnEntra").addEventListener("click", entra);
document.getElementById("btnOrari").addEventListener("click", mostraOrari);
document.getElementById("btnRegole").addEventListener("click", mostraRegole);`,
    ],
  };
}
