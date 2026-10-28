/* Compito 2 bis · Il citofono del condominio (Modulo 4, lezioni 2 e 3: il rinforzo).
 * Le stesse idee del campanello, con qualcosa in più: tre pulsanti con tre funzioni fin
 * dall'inizio, due alert di fila con un prompt in mezzo, un console.log che riprende la
 * Lezione 1, una const usata da un altro pulsante, la risposta del confirm nell'alert. */
import { alertsQuanti, alertUguale, clic, conferme, CSS_BASE, domandaFatta, rigaConsole, risposte } from './aiuti';
import { generatore, intero, REGOLE, scegli, scegliDue, type Compito } from './tipi';

const CONDOMINI = ['Le Magnolie', 'Il Girasole', 'Belvedere', 'Le Querce', 'Aurora', 'Il Faro'] as const;
const FAMIGLIE = ['Rossi', 'Bianchi', 'Esposito', 'Ferrari', 'Colombo', 'Ricci', 'Marino', 'Greco', 'Conti', 'Gallo'] as const;

export function generaCitofono(seme: number): Compito {
  const rnd = generatore(seme);
  const condominio = scegli(rnd, CONDOMINI);
  const [f1, f2] = scegliDue(rnd, FAMIGLIE);
  let f3 = scegli(rnd, FAMIGLIE);
  while (f3 === f1 || f3 === f2) f3 = scegli(rnd, FAMIGLIE);
  const apre = intero(rnd, 7, 9);
  const chiude = intero(rnd, 12, 13);

  const suonato = (f: string) => `Driiin! Hai suonato a ${f}`;
  const risposta = (nome: string) => `${f1}: arrivo subito, ${nome}!`;
  const chiamata = (nome: string) => `Chiamata a ${f1} da ${nome}`;
  const portineria = `Condominio ${condominio}: portineria aperta dalle ${apre} alle ${chiude}`;
  const portone = (si: boolean) => `Portone aperto: ${si}`;

  const html = `<h1>🏢 Condominio ${condominio}</h1>
<p>Citofono: scegli l'interno da chiamare.</p>
<button id="btnInterno1">Interno 1 · ${f1}</button>
<button id="btnInterno2">Interno 2 · ${f2}</button>
<button id="btnInterno3">Interno 3 · ${f3}</button>
<button id="btnPortineria">Portineria</button>`;

  const interno = (n: 1 | 2 | 3, f: string) => clic(`btnInterno${n}`, `Interno ${n} · ${f}`);
  const hintCollegamento = 'Ogni pulsante ha il suo id: una funzione con nome e un addEventListener per ognuno.';

  return {
    scheda: {
      id: 'citofono',
      titolo: 'Il citofono del condominio',
      lezione: 'Modulo 4 · Lezioni 2 e 3 (ripasso)',
      committente: `Il condominio «${condominio}» cambia il citofono: al posto dei tasti, una pagina sul tablet dell'ingresso. Chi arriva sceglie l'interno, la famiglia risponde e, se vuole, apre il portone.`,
      prodotto: 'Una pagina con quattro pulsanti che parlano con chi suona attraverso alert, prompt e confirm, e tengono nota delle chiamate in console.',
      dati: [`condominio: ${condominio}`, `interni: 1 ${f1}, 2 ${f2}, 3 ${f3}`, `portineria: dalle ${apre} alle ${chiude}`],
      risultatoFinale: [
        `Ogni interno suona: «${suonato(f1)}» (e così per ${f2} e ${f3}).`,
        `L'interno 1 chiede «Chi è?», risponde «${risposta('NOME')}», annota la chiamata in console e chiede se aprire il portone.`,
        `«Portineria» dice gli orari, con il nome del condominio preso da una costante.`,
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Quando si clicca **Interno 1 · ${f1}**, compare un \`alert\` con \`${suonato(f1)}\`. Funzione con nome, collegata al pulsante (id \`btnInterno1\`) con \`addEventListener\`.`,
        regola: REGOLE.treGesti,
        prove: [{ passi: [interno(1, f1), alertUguale(suonato(f1), `Compare un alert con «${suonato(f1)}»`, hintCollegamento), alertsQuanti(1, 'Un alert solo', 'Un clic, un alert.')] }],
        codiceIniziale: '// 1. Le funzioni\n\n// 2. I collegamenti ai pulsanti\n',
      },
      {
        consegna: `Ora anche gli altri due interni: **Interno 2** dice \`${suonato(f2)}\` e **Interno 3** dice \`${suonato(f3)}\`. Ogni pulsante ha **la sua funzione** e il suo \`addEventListener\` (id \`btnInterno2\` e \`btnInterno3\`). L'interno 1 continua a funzionare.`,
        regola: `${REGOLE.treGesti} Ogni pulsante ha la sua funzione con nome.`,
        prove: [
          {
            passi: [
              interno(2, f2),
              alertUguale(suonato(f2), `Interno 2: alert con «${suonato(f2)}»`, hintCollegamento),
              interno(3, f3),
              alertUguale(suonato(f3), `Interno 3: alert con «${suonato(f3)}»`, hintCollegamento),
              interno(1, f1),
              alertUguale(suonato(f1), `L'interno 1 suona ancora: «${suonato(f1)}»`, 'L\'interno 1 deve continuare a funzionare.'),
              alertsQuanti(3, 'Tre alert in tutto, uno per pulsante', 'Ogni pulsante fa un alert solo.'),
            ],
          },
        ],
      },
      {
        consegna: `La famiglia ${f1} risponde. Dopo l'alert del «Driiin», l'interno 1 chiede \`Chi è?\` con \`prompt\`, mette il nome in una variabile e mostra un **secondo alert**: \`${risposta('NOME')}\` (se scrivono Luca: \`${risposta('Luca')}\`).`,
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalPrompt}`,
        prove: [
          {
            nome: 'rispondendo «Luca»',
            passi: [
              risposte('Luca'),
              interno(1, f1),
              domandaFatta(1, 'La pagina chiede «Chi è?» con prompt', 'Il prompt va nella funzione dell\'interno 1, dopo il primo alert.'),
              alertsQuanti(2, 'Due alert: il «Driiin» e la risposta', 'Prima l\'alert del campanello, poi il prompt, poi l\'alert con la risposta.'),
              alertUguale(risposta('Luca'), `Il secondo alert dice «${risposta('Luca')}»`, 'Nel messaggio entrano il cognome della famiglia, il testo e la variabile con il nome, uniti con il +.'),
            ],
          },
          {
            nome: 'rispondendo «Marta»',
            passi: [risposte('Marta'), interno(1, f1), alertUguale(risposta('Marta'), `Il secondo alert dice «${risposta('Marta')}»`, 'Il nome deve essere quello scritto nel prompt.')],
          },
        ],
      },
      {
        consegna: `Due novità. **1 · Portineria** (id \`btnPortineria\`): **come prima riga del codice**, sopra le funzioni, scrivi una \`const\` che contiene **solo** il nome del condominio, **senza** la parola «Condominio» (il nome della costante lo scegli tu), per esempio \`const CONDOMINIO = "${condominio}";\`. Il pulsante mostra un alert con \`${portineria}\`, fatto di pezzi uniti con il \`+\`: il testo \`Condominio \`, la costante e il resto \`${portineria.slice(`Condominio ${condominio}`.length)}\`. **2 · Il registro:** nella funzione dell'interno 1, **dopo** l'alert «arrivo subito», aggiungi un \`console.log\` con \`${chiamata('NOME')}\`.`,
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalPrompt} Il nome del condominio sta in una costante (const) e nel messaggio entra la costante, non il testo ripetuto.`,
        scrittoUnaVolta: { testo: condominio, cosa: 'il nome del condominio' },
        prove: [
          {
            nome: 'rispondendo «Luca»',
            passi: [
              clic('btnPortineria', 'Portineria'),
              alertUguale(portineria, `Portineria: alert con «${portineria}»`, 'Il messaggio unisce la costante del condominio con il resto del testo.'),
              risposte('Luca'),
              interno(1, f1),
              alertUguale(risposta('Luca'), `L'interno 1 risponde ancora «${risposta('Luca')}»`, 'L\'interno 1 deve continuare a rispondere.'),
              rigaConsole(chiamata('Luca'), `In console c'è la riga «${chiamata('Luca')}»`, 'Un console.log nella funzione dell\'interno 1, dopo il prompt, con la variabile del nome.'),
            ],
          },
          {
            nome: 'rispondendo «Omar»',
            passi: [risposte('Omar'), interno(1, f1), rigaConsole(chiamata('Omar'), `In console c'è la riga «${chiamata('Omar')}»`, 'Il nome nella riga della console è quello risposto al prompt.')],
          },
        ],
      },
      {
        consegna: `Il portone: in fondo alla funzione dell'interno 1, dopo il \`console.log\`, chiedi con \`confirm\` \`Apro il portone?\` e salva la risposta in una variabile. Poi mostra un **terzo alert**: \`Portone aperto: \` unito alla variabile. Con OK dice \`${portone(true)}\`, con Annulla \`${portone(false)}\`.`,
        regola: `${REGOLE.treGesti} La risposta del confirm sta in una variabile e finisce nell'alert: non valgono due alert scritti a mano.`,
        scrittoUnaVolta: { testo: condominio, cosa: 'il nome del condominio' },
        prove: [
          {
            nome: 'rispondendo «Luca» e premendo OK',
            passi: [
              risposte('Luca'),
              conferme(true),
              interno(1, f1),
              alertsQuanti(3, 'Tre alert: il «Driiin», la risposta e il portone', 'Dopo la risposta ci vuole il confirm e poi un terzo alert con la sua risposta.'),
              alertUguale(portone(true), `Il terzo alert dice «${portone(true)}»`, 'Unisci il testo «Portone aperto: » con la variabile del confirm.'),
              rigaConsole(chiamata('Luca'), 'La chiamata resta annotata in console', 'Il console.log della fase prima deve restare.'),
            ],
          },
          {
            nome: 'premendo Annulla',
            passi: [risposte('Anna'), conferme(false), interno(1, f1), alertUguale(portone(false), `Il terzo alert dice «${portone(false)}»`, 'La risposta deve venire dal confirm: con Annulla è false.')],
          },
        ],
      },
    ],
    soluzioni: [
      `function suonaInterno1() {
  alert("${suonato(f1)}");
}

document.getElementById("btnInterno1").addEventListener("click", suonaInterno1);`,
      `function suonaInterno1() {
  alert("${suonato(f1)}");
}

function suonaInterno2() {
  alert("${suonato(f2)}");
}

function suonaInterno3() {
  alert("${suonato(f3)}");
}

document.getElementById("btnInterno1").addEventListener("click", suonaInterno1);
document.getElementById("btnInterno2").addEventListener("click", suonaInterno2);
document.getElementById("btnInterno3").addEventListener("click", suonaInterno3);`,
      `function suonaInterno1() {
  alert("${suonato(f1)}");
  let nome = prompt("Chi è?");
  alert("${f1}: arrivo subito, " + nome + "!");
}

function suonaInterno2() {
  alert("${suonato(f2)}");
}

function suonaInterno3() {
  alert("${suonato(f3)}");
}

document.getElementById("btnInterno1").addEventListener("click", suonaInterno1);
document.getElementById("btnInterno2").addEventListener("click", suonaInterno2);
document.getElementById("btnInterno3").addEventListener("click", suonaInterno3);`,
      `const CONDOMINIO = "${condominio}";

function suonaInterno1() {
  alert("${suonato(f1)}");
  let nome = prompt("Chi è?");
  alert("${f1}: arrivo subito, " + nome + "!");
  console.log("Chiamata a ${f1} da " + nome);
}

function suonaInterno2() {
  alert("${suonato(f2)}");
}

function suonaInterno3() {
  alert("${suonato(f3)}");
}

function orariPortineria() {
  alert("Condominio " + CONDOMINIO + ": portineria aperta dalle ${apre} alle ${chiude}");
}

document.getElementById("btnInterno1").addEventListener("click", suonaInterno1);
document.getElementById("btnInterno2").addEventListener("click", suonaInterno2);
document.getElementById("btnInterno3").addEventListener("click", suonaInterno3);
document.getElementById("btnPortineria").addEventListener("click", orariPortineria);`,
      `const CONDOMINIO = "${condominio}";

function suonaInterno1() {
  alert("${suonato(f1)}");
  let nome = prompt("Chi è?");
  alert("${f1}: arrivo subito, " + nome + "!");
  console.log("Chiamata a ${f1} da " + nome);
  let apri = confirm("Apro il portone?");
  alert("Portone aperto: " + apri);
}

function suonaInterno2() {
  alert("${suonato(f2)}");
}

function suonaInterno3() {
  alert("${suonato(f3)}");
}

function orariPortineria() {
  alert("Condominio " + CONDOMINIO + ": portineria aperta dalle ${apre} alle ${chiude}");
}

document.getElementById("btnInterno1").addEventListener("click", suonaInterno1);
document.getElementById("btnInterno2").addEventListener("click", suonaInterno2);
document.getElementById("btnInterno3").addEventListener("click", suonaInterno3);
document.getElementById("btnPortineria").addEventListener("click", orariPortineria);`,
    ],
  };
}
