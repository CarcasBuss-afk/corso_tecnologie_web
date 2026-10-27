/* Compito 4 · La porta del club (Modulo 4, lezione 6).
 * Idea nuova: decidere. if/else su un testo (la parola d'ordine), poi su un numero con
 * Number() e >=, con il numero dentro il messaggio, e infine else if a tre vie. Nella sesta
 * fase il codice si riordina: ogni elemento in una variabile, cercato una volta sola. */
import { clic, CSS_BASE, domandaFatta, risposte, ROSSI, stile, testo, VERDI } from './aiuti';
import { generatore, intero, REGOLE, scegli, type Compito } from './tipi';

const CLUB = ['Club dei Lettori', 'Club della Robotica', 'Club del Calcetto', 'Club dei Fumetti', 'Club di Scacchi'] as const;
const PAROLE = ['apriti', 'sesamo', 'pizza42', 'drago', 'galassia', 'fulmine'] as const;

export function generaPorta(seme: number): Compito {
  const rnd = generatore(seme);
  const club = scegli(rnd, CLUB);
  const parola = scegli(rnd, PAROLE);
  const etaMinima = scegli(rnd, [12, 14, 16] as const);
  const sbagliata = parola === 'drago' ? 'gatto' : 'drago';
  const etaOk = etaMinima + intero(rnd, 1, 4);
  const etaNo = etaMinima - intero(rnd, 1, 3);

  const html = `<h1>🚪 ${club}</h1>
<button id="btnEntra">Entra</button>
<p id="esito">La porta è chiusa.</p>
<button id="btnEta">Controlla l'età</button>
<p id="eta"></p>
<button id="btnVoto">Il voto del socio</button>
<p id="giudizio"></p>`;

  const BENVENUTO = 'Benvenuto nel club!';
  const SBAGLIATA = 'Parola sbagliata!';
  const puoi = (e: number) => `Hai ${e} anni: puoi entrare`;
  const giovane = (e: number) => `Hai ${e} anni: troppo giovane, servono ${etaMinima}`;

  return {
    scheda: {
      id: 'porta',
      titolo: 'La porta del club',
      lezione: 'Modulo 4 · Lezione 6',
      committente: `Il «${club}» vuole una porta digitale: chi sa la parola d'ordine entra, chi non la sa no. E all'ingresso si controlla l'età.`,
      prodotto: 'Una pagina che prende decisioni con if, else ed else if, e le mostra con il testo e il colore giusto.',
      dati: [`parola d'ordine: ${parola}`, `età minima: ${etaMinima} anni`],
      risultatoFinale: [
        `«Entra» chiede la parola d'ordine: «${BENVENUTO}» in verde se è giusta, «${SBAGLIATA}» in rosso se no.`,
        `«Controlla l'età» chiede gli anni e dice se si può entrare (da ${etaMinima} anni in su), con l'età nel messaggio.`,
        '«Il voto del socio» chiede un voto e risponde Ottimo, Sufficiente o Insufficiente.',
        'Il codice è in ordine: ogni elemento sta in una variabile, cercato una volta sola.',
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `**Entra** chiede la parola d'ordine con \`prompt\`. Se è \`${parola}\` il paragrafo dell'esito (id \`esito\`) dice \`${BENVENUTO}\`, altrimenti \`${SBAGLIATA}\`. Confronto con \`===\`, decisione con \`if\` ed \`else\`.`,
        regola: `${REGOLE.treGesti} ${REGOLE.decisioneConIf} La parola si confronta con ===.`,
        prove: [
          {
            nome: `rispondendo «${parola}»`,
            passi: [
              risposte(parola),
              clic('btnEntra', 'Entra'),
              domandaFatta(1, 'La pagina chiede la parola d\'ordine', 'Non è comparsa nessuna domanda: il prompt va dentro la funzione.'),
              testo('esito', BENVENUTO, `Con la parola giusta l'esito dice «${BENVENUTO}»`, 'Confronta la risposta con la parola d\'ordine fra virgolette usando === dentro le tonde dell\'if.'),
            ],
          },
          {
            nome: `rispondendo «${sbagliata}»`,
            passi: [risposte(sbagliata), clic('btnEntra', 'Entra'), testo('esito', SBAGLIATA, `Con una parola sbagliata l'esito dice «${SBAGLIATA}»`, 'Il ramo else serve a questo: quando il confronto è falso.')],
          },
        ],
        codiceIniziale: '// 1. Scrivi la funzione\n\n// 2. Collega il pulsante alla funzione\n',
      },
      {
        consegna: 'Il colore dice tutto a colpo d\'occhio: con la parola giusta l\'esito diventa **verde** (`style.color`), con quella sbagliata **rosso**. Il colore va cambiato dentro i due rami dell\'if.',
        regola: `${REGOLE.treGesti} ${REGOLE.decisioneConIf}`,
        prove: [
          {
            nome: `rispondendo «${parola}»`,
            passi: [
              risposte(parola),
              clic('btnEntra', 'Entra'),
              testo('esito', BENVENUTO, `L'esito dice «${BENVENUTO}»`, 'Il testo della fase prima deve restare.'),
              stile('esito', 'color', VERDI, 'L\'esito è verde', 'Nel ramo dell\'if metti style.color a un verde (green).'),
            ],
          },
          {
            nome: `rispondendo «${sbagliata}»`,
            passi: [risposte(sbagliata), clic('btnEntra', 'Entra'), testo('esito', SBAGLIATA, `L'esito dice «${SBAGLIATA}»`, 'Il ramo else deve restare.'), stile('esito', 'color', ROSSI, 'L\'esito è rosso', 'Nel ramo else metti style.color a un rosso (red).')],
          },
        ],
      },
      {
        consegna: `**Controlla l'età** chiede gli anni con \`prompt\` e li trasforma in numero con \`Number()\`. Da ${etaMinima} anni in su (\`>=\`) il paragrafo (id \`eta\`) dice \`Puoi entrare\`, altrimenti \`Troppo giovane\`.`,
        regola: `${REGOLE.treGesti} ${REGOLE.decisioneConIf} La risposta si converte con Number() e si confronta con >= (o equivalente).`,
        prove: [
          {
            nome: `rispondendo «${etaOk}»`,
            passi: [
              risposte(String(etaOk)),
              clic('btnEta', "Controlla l'età"),
              testo('eta', 'Puoi entrare', `Con ${etaOk} anni dice «Puoi entrare»`, 'Prima Number() sulla risposta, poi il confronto con >= e il numero senza virgolette.'),
            ],
          },
          {
            nome: `rispondendo «${etaNo}»`,
            passi: [risposte(String(etaNo)), clic('btnEta', "Controlla l'età"), testo('eta', 'Troppo giovane', `Con ${etaNo} anni dice «Troppo giovane»`, 'Il ramo else per chi non ha l\'età.')],
          },
          {
            nome: `rispondendo proprio «${etaMinima}»`,
            passi: [risposte(String(etaMinima)), clic('btnEta', "Controlla l'età"), testo('eta', 'Puoi entrare', `Con ${etaMinima} anni esatti si entra`, `Chi ha esattamente ${etaMinima} anni entra: il confronto giusto è «maggiore o uguale».`)],
          },
        ],
      },
      {
        consegna: `Ora il messaggio dell'età dice anche gli anni, esattamente così: \`${puoi(etaOk)}\` oppure \`${giovane(etaNo)}\`. Dopo i due punti si scrive minuscolo. Gli anni nel testo sono la variabile, unita con il \`+\`; il ${etaMinima} puoi scriverlo fisso.`,
        regola: `${REGOLE.treGesti} ${REGOLE.decisioneConIf} ${REGOLE.datiDalPrompt}`,
        prove: [
          {
            nome: `rispondendo «${etaOk}»`,
            passi: [risposte(String(etaOk)), clic('btnEta', "Controlla l'età"), testo('eta', puoi(etaOk), `Dice «${puoi(etaOk)}»`, 'Costruisci il testo con tre pezzi: «Hai », la variabile, « anni: puoi entrare».')],
          },
          {
            nome: `rispondendo «${etaNo}»`,
            passi: [risposte(String(etaNo)), clic('btnEta', "Controlla l'età"), testo('eta', giovane(etaNo), `Dice «${giovane(etaNo)}»`, `Nel ramo else il testo finisce con «servono ${etaMinima}».`)],
          },
          {
            nome: `rispondendo «${etaOk + 10}»`,
            passi: [risposte(String(etaOk + 10)), clic('btnEta', "Controlla l'età"), testo('eta', puoi(etaOk + 10), `Dice «${puoi(etaOk + 10)}»`, 'Il numero nel messaggio deve essere quello risposto.')],
          },
        ],
      },
      {
        consegna: '**Il voto del socio** chiede un voto con `prompt` e `Number()`. Nel paragrafo (id `giudizio`): da 9 in su `Ottimo`, da 6 in su `Sufficiente`, altrimenti `Insufficiente`. Tre vie: `if`, `else if`, `else`, nell\'ordine giusto.',
        regola: `${REGOLE.treGesti} La scelta a tre vie la fa un if / else if / else sul voto convertito con Number(): non valgono testi fissi.`,
        prove: [
          { nome: 'rispondendo «10»', passi: [risposte('10'), clic('btnVoto', 'Il voto del socio'), testo('giudizio', 'Ottimo', 'Con 10 dice «Ottimo»', 'Il primo if controlla il voto da 9 in su.')] },
          { nome: 'rispondendo «7»', passi: [risposte('7'), clic('btnVoto', 'Il voto del socio'), testo('giudizio', 'Sufficiente', 'Con 7 dice «Sufficiente»', 'L\'else if controlla da 6 in su: viene dopo il 9, l\'ordine conta.')] },
          { nome: 'rispondendo «4»', passi: [risposte('4'), clic('btnVoto', 'Il voto del socio'), testo('giudizio', 'Insufficiente', 'Con 4 dice «Insufficiente»', 'L\'else finale prende tutto il resto.')] },
          { nome: 'rispondendo «9»', passi: [risposte('9'), clic('btnVoto', 'Il voto del socio'), testo('giudizio', 'Ottimo', 'Con 9 esatto dice «Ottimo»', 'Da 9 in su: maggiore o uguale.')] },
        ],
      },
      {
        consegna:
          'La porta funziona: ora **riordina il codice**, come nella Lezione 4. In alto, fuori dalle funzioni, salva in una variabile ogni elemento che usi: i tre paragrafi (`esito`, `eta`, `giudizio`) e i tre pulsanti. I nomi delle variabili li scegli tu. Poi le funzioni e i collegamenti usano le variabili: ogni id si cerca con `getElementById` **una volta sola**. La porta deve fare esattamente le stesse cose di prima.',
        regola: `${REGOLE.treGesti} ${REGOLE.decisioneConIf} ${REGOLE.elementiInVariabili}`,
        elementiInAlto: true,
        prove: [
          {
            nome: 'tutti i pulsanti, uno dopo l\'altro',
            passi: [
              risposte(parola),
              clic('btnEntra', 'Entra'),
              testo('esito', BENVENUTO, `Con la parola giusta l'esito dice «${BENVENUTO}»`, 'Entra deve fare come prima, con la variabile dell\'esito.'),
              stile('esito', 'color', VERDI, 'L\'esito è verde', 'Il colore si cambia dalla variabile dell\'esito.'),
              risposte(String(etaOk)),
              clic('btnEta', "Controlla l'età"),
              testo('eta', puoi(etaOk), `Con ${etaOk} anni dice «${puoi(etaOk)}»`, 'Controlla l\'età deve fare come prima.'),
              risposte('7'),
              clic('btnVoto', 'Il voto del socio'),
              testo('giudizio', 'Sufficiente', 'Con 7 dice «Sufficiente»', 'Il voto del socio deve fare come prima.'),
            ],
          },
          {
            nome: 'con le risposte che non vanno',
            passi: [
              risposte(sbagliata),
              clic('btnEntra', 'Entra'),
              testo('esito', SBAGLIATA, `Con una parola sbagliata dice «${SBAGLIATA}»`, 'Il ramo else resta.'),
              stile('esito', 'color', ROSSI, 'L\'esito è rosso', 'Il rosso resta nel ramo else.'),
              risposte(String(etaNo)),
              clic('btnEta', "Controlla l'età"),
              testo('eta', giovane(etaNo), `Con ${etaNo} anni dice «${giovane(etaNo)}»`, 'Il ramo else dell\'età resta.'),
              risposte('4'),
              clic('btnVoto', 'Il voto del socio'),
              testo('giudizio', 'Insufficiente', 'Con 4 dice «Insufficiente»', 'L\'else finale resta.'),
            ],
          },
        ],
      },
    ],
    soluzioni: [
      `function entra() {
  let risposta = prompt("Parola d'ordine?");
  let esito = document.getElementById("esito");
  if (risposta === "${parola}") {
    esito.innerHTML = "${BENVENUTO}";
  } else {
    esito.innerHTML = "${SBAGLIATA}";
  }
}

document.getElementById("btnEntra").addEventListener("click", entra);`,
      `function entra() {
  let risposta = prompt("Parola d'ordine?");
  let esito = document.getElementById("esito");
  if (risposta === "${parola}") {
    esito.innerHTML = "${BENVENUTO}";
    esito.style.color = "green";
  } else {
    esito.innerHTML = "${SBAGLIATA}";
    esito.style.color = "red";
  }
}

document.getElementById("btnEntra").addEventListener("click", entra);`,
      `function entra() {
  let risposta = prompt("Parola d'ordine?");
  let esito = document.getElementById("esito");
  if (risposta === "${parola}") {
    esito.innerHTML = "${BENVENUTO}";
    esito.style.color = "green";
  } else {
    esito.innerHTML = "${SBAGLIATA}";
    esito.style.color = "red";
  }
}

function controllaEta() {
  let testo = prompt("Quanti anni hai?");
  let anni = Number(testo);
  let eta = document.getElementById("eta");
  if (anni >= ${etaMinima}) {
    eta.innerHTML = "Puoi entrare";
  } else {
    eta.innerHTML = "Troppo giovane";
  }
}

document.getElementById("btnEntra").addEventListener("click", entra);
document.getElementById("btnEta").addEventListener("click", controllaEta);`,
      `function entra() {
  let risposta = prompt("Parola d'ordine?");
  let esito = document.getElementById("esito");
  if (risposta === "${parola}") {
    esito.innerHTML = "${BENVENUTO}";
    esito.style.color = "green";
  } else {
    esito.innerHTML = "${SBAGLIATA}";
    esito.style.color = "red";
  }
}

function controllaEta() {
  let testo = prompt("Quanti anni hai?");
  let anni = Number(testo);
  let eta = document.getElementById("eta");
  if (anni >= ${etaMinima}) {
    eta.innerHTML = "Hai " + anni + " anni: puoi entrare";
  } else {
    eta.innerHTML = "Hai " + anni + " anni: troppo giovane, servono ${etaMinima}";
  }
}

document.getElementById("btnEntra").addEventListener("click", entra);
document.getElementById("btnEta").addEventListener("click", controllaEta);`,
      `function entra() {
  let risposta = prompt("Parola d'ordine?");
  let esito = document.getElementById("esito");
  if (risposta === "${parola}") {
    esito.innerHTML = "${BENVENUTO}";
    esito.style.color = "green";
  } else {
    esito.innerHTML = "${SBAGLIATA}";
    esito.style.color = "red";
  }
}

function controllaEta() {
  let testo = prompt("Quanti anni hai?");
  let anni = Number(testo);
  let eta = document.getElementById("eta");
  if (anni >= ${etaMinima}) {
    eta.innerHTML = "Hai " + anni + " anni: puoi entrare";
  } else {
    eta.innerHTML = "Hai " + anni + " anni: troppo giovane, servono ${etaMinima}";
  }
}

function valutaVoto() {
  let testo = prompt("Che voto hai preso?");
  let voto = Number(testo);
  let giudizio = document.getElementById("giudizio");
  if (voto >= 9) {
    giudizio.innerHTML = "Ottimo";
  } else if (voto >= 6) {
    giudizio.innerHTML = "Sufficiente";
  } else {
    giudizio.innerHTML = "Insufficiente";
  }
}

document.getElementById("btnEntra").addEventListener("click", entra);
document.getElementById("btnEta").addEventListener("click", controllaEta);
document.getElementById("btnVoto").addEventListener("click", valutaVoto);`,
      `let esito = document.getElementById("esito");
let eta = document.getElementById("eta");
let giudizio = document.getElementById("giudizio");
let tastoEntra = document.getElementById("btnEntra");
let tastoEta = document.getElementById("btnEta");
let tastoVoto = document.getElementById("btnVoto");

function entra() {
  let risposta = prompt("Parola d'ordine?");
  if (risposta === "${parola}") {
    esito.innerHTML = "${BENVENUTO}";
    esito.style.color = "green";
  } else {
    esito.innerHTML = "${SBAGLIATA}";
    esito.style.color = "red";
  }
}

function controllaEta() {
  let testo = prompt("Quanti anni hai?");
  let anni = Number(testo);
  if (anni >= ${etaMinima}) {
    eta.innerHTML = "Hai " + anni + " anni: puoi entrare";
  } else {
    eta.innerHTML = "Hai " + anni + " anni: troppo giovane, servono ${etaMinima}";
  }
}

function valutaVoto() {
  let testo = prompt("Che voto hai preso?");
  let voto = Number(testo);
  if (voto >= 9) {
    giudizio.innerHTML = "Ottimo";
  } else if (voto >= 6) {
    giudizio.innerHTML = "Sufficiente";
  } else {
    giudizio.innerHTML = "Insufficiente";
  }
}

tastoEntra.addEventListener("click", entra);
tastoEta.addEventListener("click", controllaEta);
tastoVoto.addEventListener("click", valutaVoto);`,
    ],
  };
}
