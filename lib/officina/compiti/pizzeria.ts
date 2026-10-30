/* Compito 5 · La cassa della pizzeria (Modulo 4, lezione 7).
 * Idea nuova: i numeri arrivano dalle caselle con .value e Number(); gli operatori; il
 * resto % per dire se il conto si divide; il contatore fuori dalla funzione con ++. */
import { clic, CSS_BASE, scrivi, testo } from './aiuti';
import { generatore, REGOLE, scegli, type Compito } from './tipi';

const NOMI = ['Da Gino', 'Bella Napoli', 'Il Forno di Marta', 'La Rustica', 'Pizza & Basta'] as const;

export function generaPizzeria(seme: number): Compito {
  const rnd = generatore(seme);
  const nome = scegli(rnd, NOMI);
  const prezzoPizza = scegli(rnd, [6, 7, 8, 9] as const);
  const prezzoBibita = scegli(rnd, [2, 3] as const);
  const soglia = scegli(rnd, [30, 40] as const);
  const sconto = 5;

  const html = `<h1>🍕 Pizzeria ${nome}</h1>
<label>Pizze: <input id="pizze" type="number" value="0"></label>
<label>Bibite: <input id="bibite" type="number" value="0"></label>
<button id="btnCalcola">Calcola il conto</button>
<p id="totale">Totale: 0 €</p>
<label>Persone: <input id="persone" type="number" value="1"></label>
<button id="btnDividi">Dividi il conto</button>
<p id="quota"></p>
<button id="btnCliente">Cliente servito</button>
<p id="clienti">Clienti serviti: 0</p>`;

  const conto = (pizze: number, bibite: number) => pizze * prezzoPizza + bibite * prezzoBibita;
  const contoScontato = (pizze: number, bibite: number) => {
    const c = conto(pizze, bibite);
    return c >= soglia ? c - sconto : c;
  };
  const testoTotale = (pizze: number, bibite: number) => {
    const c = conto(pizze, bibite);
    return c >= soglia ? `Totale: ${c - sconto} € (sconto di ${sconto} €)` : `Totale: ${c} €`;
  };

  /** Ordini di prova: uno grande (sopra la soglia), uno piccolo, uno esattamente alla soglia se possibile. */
  const grande = { pizze: Math.ceil((soglia + 3) / prezzoPizza), bibite: 2 };
  const piccolo = { pizze: 1, bibite: 1 };
  // Per la divisione: cerca persone che dividono esattamente il conto scontato dell'ordine grande.
  const totaleGrande = contoScontato(grande.pizze, grande.bibite);
  let personeOk = 2;
  for (const p of [2, 3, 4, 5, 6, 7] as const) {
    if (totaleGrande % p === 0) {
      personeOk = p;
      break;
    }
  }
  const divideEsatto = totaleGrande % personeOk === 0;
  let personeNo = 7;
  for (const p of [7, 6, 5, 4, 3, 2] as const) {
    if (totaleGrande % p !== 0) {
      personeNo = p;
      break;
    }
  }

  const prove = (pizze: number, bibite: number) => [scrivi('pizze', String(pizze), 'Pizze'), scrivi('bibite', String(bibite), 'Bibite'), clic('btnCalcola', 'Calcola il conto')];

  return {
    scheda: {
      id: 'pizzeria',
      titolo: 'La cassa della pizzeria',
      lezione: 'Modulo 4 · Lezione 7',
      committente: `La pizzeria «${nome}» vuole una cassa sul tablet: il cameriere scrive quante pizze e quante bibite, e la pagina fa il conto.`,
      prodotto: 'Una pagina che legge i numeri dalle caselle, fa i calcoli e conta i clienti serviti.',
      dati: [`pizza: ${prezzoPizza} €`, `bibita: ${prezzoBibita} €`, `sconto di ${sconto} € da ${soglia} € in su`],
      risultatoFinale: [
        `«Calcola il conto» legge pizze e bibite e scrive il totale; da ${soglia} € in su toglie ${sconto} € e lo dice.`,
        '«Dividi il conto» divide il totale fra le persone, se si divide alla pari: senza resto, cioè ognuno paga un numero intero di euro. Altrimenti lo dice.',
        '«Cliente servito» aumenta di uno il contatore dei clienti.',
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Il pulsante **Calcola il conto** (id \`btnCalcola\`) legge le caselle delle pizze e delle bibite (id \`pizze\` e \`bibite\`) con \`.value\` e \`Number()\`. Poi scrive nel paragrafo del totale (id \`totale\`) \`Totale: N €\`, dove N è \`pizze * ${prezzoPizza} + bibite * ${prezzoBibita}\`.\nAttenzione: qui il paragrafo ha id \`totale\`, non \`conto\` come nel manuale.`,
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalleCaselle}`,
        prove: [
          {
            nome: `con ${piccolo.pizze} pizza e ${piccolo.bibite} bibita`,
            passi: [...prove(piccolo.pizze, piccolo.bibite), testo('totale', `Totale: ${conto(piccolo.pizze, piccolo.bibite)} €`, `Il totale dice «Totale: ${conto(piccolo.pizze, piccolo.bibite)} €»`, 'Leggi le due caselle con .value, convertile con Number(), poi moltiplica e somma. Il risultato va prima in una variabile e poi nel testo.')],
          },
          {
            nome: `con ${grande.pizze} pizze e ${grande.bibite} bibite`,
            passi: [...prove(grande.pizze, grande.bibite), testo('totale', `Totale: ${conto(grande.pizze, grande.bibite)} €`, `Il totale dice «Totale: ${conto(grande.pizze, grande.bibite)} €»`, 'I numeri devono venire dalle caselle: se il totale è sempre lo stesso, non li stai leggendo.')],
          },
          {
            nome: 'con le caselle a 0',
            passi: [...prove(0, 0), testo('totale', 'Totale: 0 €', 'Con zero di tutto dice «Totale: 0 €»', 'Con zero pizze e zero bibite il totale è 0.')],
          },
        ],
        codiceIniziale: '// 1. Scrivi la funzione\n\n// 2. Collega il pulsante alla funzione\n',
      },
      {
        consegna: `Ora lo sconto. Se il totale è ${soglia} € o più (\`>=\`), si tolgono ${sconto} € e il paragrafo dice \`Totale: N € (sconto di ${sconto} €)\`, con N già scontato. Scrivi solo queste parole, non quelle del manuale. Sotto i ${soglia} € il testo resta come prima.`,
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalleCaselle} Lo sconto lo decide un if sul totale calcolato.`,
        prove: [
          {
            nome: `con ${grande.pizze} pizze e ${grande.bibite} bibite`,
            passi: [...prove(grande.pizze, grande.bibite), testo('totale', testoTotale(grande.pizze, grande.bibite), `Dice «${testoTotale(grande.pizze, grande.bibite)}»`, `Nell'if (totale >= ${soglia}) togli ${sconto} al totale e scrivi il testo con lo sconto, identico alla consegna: senza altre parole.`)],
          },
          {
            nome: `con ${piccolo.pizze} pizza e ${piccolo.bibite} bibita`,
            passi: [...prove(piccolo.pizze, piccolo.bibite), testo('totale', testoTotale(piccolo.pizze, piccolo.bibite), `Dice «${testoTotale(piccolo.pizze, piccolo.bibite)}»`, 'Sotto la soglia il testo resta quello di prima, senza sconto.')],
          },
        ],
      },
      {
        consegna: `Il totale ora serve a due funzioni: a quella di Calcola e a quella di Dividi.\n1. In alto, **fuori** dalle funzioni, scrivi \`let totale = 0;\`.\n2. Nella funzione del pulsante Calcola togli \`let\` davanti a \`totale = …\`. Con \`let\` creeresti una seconda variabile, che vale solo dentro la funzione, e Dividi vedrebbe ancora 0.\n3. Scrivi la funzione del pulsante **Dividi il conto** (id \`btnDividi\`). Legge la casella delle persone (id \`persone\`) e scrive nel paragrafo della quota (id \`quota\`) \`A testa: N €\`. N è il totale (già scontato) diviso il numero di persone.\nPer provare: prima Calcola, poi Dividi.`,
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalleCaselle} Il totale si ricorda in una variabile fuori dalle funzioni (o si ricalcola dalle caselle): non vale un numero scritto a mano.`,
        prove: [
          {
            nome: `con l'ordine grande e ${personeOk} persone`,
            passi: [
              ...prove(grande.pizze, grande.bibite),
              scrivi('persone', String(personeOk), 'Persone'),
              clic('btnDividi', 'Dividi il conto'),
              testo('quota', `A testa: ${totaleGrande / personeOk} €`, `La quota dice «A testa: ${totaleGrande / personeOk} €»`, 'Dividi il totale (quello scontato, ricordato nella variabile fuori dalle funzioni) per le persone lette dalla casella.'),
            ],
          },
          {
            nome: `con ${piccolo.pizze} pizza, ${piccolo.bibite} bibita e 1 persona`,
            passi: [...prove(piccolo.pizze, piccolo.bibite), scrivi('persone', '1', 'Persone'), clic('btnDividi', 'Dividi il conto'), testo('quota', `A testa: ${contoScontato(piccolo.pizze, piccolo.bibite)} €`, `La quota dice «A testa: ${contoScontato(piccolo.pizze, piccolo.bibite)} €»`, 'Il totale deve essere quello dell\'ultimo conto calcolato.')],
          },
        ],
      },
      {
        consegna: `Il conto non sempre si divide alla pari, cioè senza resto. Nella funzione di Dividi aggiungi un if con il resto \`%\`. Se \`totale % persone\` è **diverso da** 0 (\`!==\`, Lezione 6), la quota dice \`Il conto non si divide alla pari\`. Altrimenti (else) la quota si scrive come nella fase 3.`,
        regola: `${REGOLE.treGesti} La decisione la fa un if sul resto della divisione (%).`,
        prove: [
          ...(divideEsatto
            ? [
                {
                  nome: `con l'ordine grande e ${personeOk} persone`,
                  passi: [...prove(grande.pizze, grande.bibite), scrivi('persone', String(personeOk), 'Persone'), clic('btnDividi', 'Dividi il conto'), testo('quota', `A testa: ${totaleGrande / personeOk} €`, `Con ${personeOk} persone dice «A testa: ${totaleGrande / personeOk} €»`, 'Quando il resto è 0 la quota si scrive come prima.')],
                },
              ]
            : []),
          {
            nome: `con l'ordine grande e ${personeNo} persone`,
            passi: [...prove(grande.pizze, grande.bibite), scrivi('persone', String(personeNo), 'Persone'), clic('btnDividi', 'Dividi il conto'), testo('quota', 'Il conto non si divide alla pari', `Con ${personeNo} persone dice «Il conto non si divide alla pari»`, 'Il resto della divisione si calcola con %: se non è 0, il conto non si divide.')],
          },
        ],
      },
      {
        consegna: 'Il pulsante **Cliente servito** (id `btnCliente`) aumenta di uno il contatore dei clienti e scrive nel paragrafo (id `clienti`) `Clienti serviti: N`. Il contatore è una variabile dichiarata fuori dalla funzione, che parte da 0 e cresce con `++`.',
        regola: `${REGOLE.treGesti} ${REGOLE.contatoreFuori}`,
        prove: [
          {
            nome: 'con tre clic',
            passi: [
              clic('btnCliente', 'Cliente servito'),
              testo('clienti', 'Clienti serviti: 1', 'Dopo un clic dice «Clienti serviti: 1»', 'Dichiara il contatore fuori dalla funzione con let, a 0; nella funzione fallo crescere con ++ e scrivilo nel paragrafo.'),
              clic('btnCliente', 'Cliente servito'),
              clic('btnCliente', 'Cliente servito'),
              testo('clienti', 'Clienti serviti: 3', 'Dopo tre clic dice «Clienti serviti: 3»', 'Se resta a 1, il contatore è dichiarato dentro la funzione e riparte da 0 a ogni clic: spostalo fuori.'),
            ],
          },
          {
            nome: 'con un clic solo',
            passi: [clic('btnCliente', 'Cliente servito'), testo('clienti', 'Clienti serviti: 1', 'Dopo un clic dice «Clienti serviti: 1»', 'Il numero deve venire dal contatore, non scritto a mano.')],
          },
        ],
      },
    ],
    soluzioni: [
      `function calcolaConto() {
  let pizze = Number(document.getElementById("pizze").value);
  let bibite = Number(document.getElementById("bibite").value);
  let totale = pizze * ${prezzoPizza} + bibite * ${prezzoBibita};
  document.getElementById("totale").innerHTML = "Totale: " + totale + " €";
}

document.getElementById("btnCalcola").addEventListener("click", calcolaConto);`,
      `function calcolaConto() {
  let pizze = Number(document.getElementById("pizze").value);
  let bibite = Number(document.getElementById("bibite").value);
  let totale = pizze * ${prezzoPizza} + bibite * ${prezzoBibita};
  if (totale >= ${soglia}) {
    totale = totale - ${sconto};
    document.getElementById("totale").innerHTML = "Totale: " + totale + " € (sconto di ${sconto} €)";
  } else {
    document.getElementById("totale").innerHTML = "Totale: " + totale + " €";
  }
}

document.getElementById("btnCalcola").addEventListener("click", calcolaConto);`,
      `let totale = 0;

function calcolaConto() {
  let pizze = Number(document.getElementById("pizze").value);
  let bibite = Number(document.getElementById("bibite").value);
  totale = pizze * ${prezzoPizza} + bibite * ${prezzoBibita};
  if (totale >= ${soglia}) {
    totale = totale - ${sconto};
    document.getElementById("totale").innerHTML = "Totale: " + totale + " € (sconto di ${sconto} €)";
  } else {
    document.getElementById("totale").innerHTML = "Totale: " + totale + " €";
  }
}

function dividiConto() {
  let persone = Number(document.getElementById("persone").value);
  let quota = totale / persone;
  document.getElementById("quota").innerHTML = "A testa: " + quota + " €";
}

document.getElementById("btnCalcola").addEventListener("click", calcolaConto);
document.getElementById("btnDividi").addEventListener("click", dividiConto);`,
      `let totale = 0;

function calcolaConto() {
  let pizze = Number(document.getElementById("pizze").value);
  let bibite = Number(document.getElementById("bibite").value);
  totale = pizze * ${prezzoPizza} + bibite * ${prezzoBibita};
  if (totale >= ${soglia}) {
    totale = totale - ${sconto};
    document.getElementById("totale").innerHTML = "Totale: " + totale + " € (sconto di ${sconto} €)";
  } else {
    document.getElementById("totale").innerHTML = "Totale: " + totale + " €";
  }
}

function dividiConto() {
  let persone = Number(document.getElementById("persone").value);
  if (totale % persone !== 0) {
    document.getElementById("quota").innerHTML = "Il conto non si divide alla pari";
  } else {
    let quota = totale / persone;
    document.getElementById("quota").innerHTML = "A testa: " + quota + " €";
  }
}

document.getElementById("btnCalcola").addEventListener("click", calcolaConto);
document.getElementById("btnDividi").addEventListener("click", dividiConto);`,
      `let totale = 0;
let clienti = 0;

function calcolaConto() {
  let pizze = Number(document.getElementById("pizze").value);
  let bibite = Number(document.getElementById("bibite").value);
  totale = pizze * ${prezzoPizza} + bibite * ${prezzoBibita};
  if (totale >= ${soglia}) {
    totale = totale - ${sconto};
    document.getElementById("totale").innerHTML = "Totale: " + totale + " € (sconto di ${sconto} €)";
  } else {
    document.getElementById("totale").innerHTML = "Totale: " + totale + " €";
  }
}

function dividiConto() {
  let persone = Number(document.getElementById("persone").value);
  if (totale % persone !== 0) {
    document.getElementById("quota").innerHTML = "Il conto non si divide alla pari";
  } else {
    let quota = totale / persone;
    document.getElementById("quota").innerHTML = "A testa: " + quota + " €";
  }
}

function clienteServito() {
  clienti++;
  document.getElementById("clienti").innerHTML = "Clienti serviti: " + clienti;
}

document.getElementById("btnCalcola").addEventListener("click", calcolaConto);
document.getElementById("btnDividi").addEventListener("click", dividiConto);
document.getElementById("btnCliente").addEventListener("click", clienteServito);`,
    ],
  };
}
