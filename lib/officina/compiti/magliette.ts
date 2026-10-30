/* Compito · Il negozio di magliette (Modulo 4, lezione 9).
 * Idea nuova: le funzioni di calcolo con parametri e return, chiamate dalle funzioni dei
 * pulsanti; una funzione con un if e due return (la spedizione); una funzione senza parametri
 * che restituisce il totale e serve a due pulsanti; una funzione che restituisce true o false
 * (il codice sconto), usata dentro un if. I numeri di prova sono scelti perché le quote a
 * testa siano intere. */
import { clic, CSS_BASE, scrivi, testo } from './aiuti';
import { generatore, REGOLE, scegli, type Compito } from './tipi';

const SQUADRE = ['Atletico Quartiere', 'Pallavolo Aurora', 'Basket Le Torri', 'Calcetto del Lunedì', 'Real Oratorio'] as const;
const CODICI = ['FORZA10', 'GOAL10', 'TIFO10', 'SQUADRA10', 'VINCI10'] as const;
const SCONTO = 10;

export function generaMagliette(seme: number): Compito {
  const rnd = generatore(seme);
  const squadra = scegli(rnd, SQUADRE);
  const prezzo = scegli(rnd, [8, 10, 12] as const);
  const scritta = scegli(rnd, [2, 3, 4] as const);
  const soglia = scegli(rnd, [60, 80, 100] as const);
  const spedizione = scegli(rnd, [4, 6, 8] as const);
  const codice = scegli(rnd, CODICI);

  const html = `<h1>👕 Le magliette della squadra</h1>
<label>Magliette: <input id="magliette" type="number" value="0"></label>
<label>Con il nome stampato: <input id="scritte" type="number" value="0"></label>
<label>Codice sconto: <input id="codice" type="text"></label>
<button id="btnCalcola">Calcola il preventivo</button>
<p id="totale">Totale: 0 €</p>
<p id="spedizione"></p>
<label>Giocatori: <input id="persone" type="number" value="1"></label>
<button id="btnDividi">Dividi fra i giocatori</button>
<p id="quota"></p>`;

  /* I conti veri, per le prove. */
  const merce = (m: number, s: number) => m * prezzo + s * scritta;
  const costoSpedizione = (m: number, s: number) => (merce(m, s) >= soglia ? 0 : spedizione);
  const totale = (m: number, s: number, conCodice = false) => merce(m, s) + costoSpedizione(m, s) - (conCodice ? SCONTO : 0);
  const testoSpedizione = (m: number, s: number) => (costoSpedizione(m, s) === 0 ? 'Spedizione gratis' : `Spedizione: ${spedizione} €`);

  /* Gli ordini di prova. Il grande (10 e 10) arriva sempre alla soglia, e con 10 giocatori la
   * quota è intera anche con lo sconto; il piccolo (2 e 2) paga la spedizione, che è pari. */
  const grande = { m: 10, s: 10, giocatori: 10 };
  const piccolo = { m: 2, s: 2, giocatori: 2 };
  const soloMagliette = { m: 3, s: 0 };

  const ordine = (m: number, s: number, codiceScritto?: string) => [
    scrivi('magliette', String(m), 'Magliette'),
    scrivi('scritte', String(s), 'Con il nome stampato'),
    ...(codiceScritto === undefined ? [] : [scrivi('codice', codiceScritto, 'Codice sconto')]),
  ];
  const calcola = clic('btnCalcola', 'Calcola il preventivo');
  const dividi = (giocatori: number) => [scrivi('persone', String(giocatori), 'Giocatori'), clic('btnDividi', 'Dividi fra i giocatori')];
  const dice = (id: string, atteso: string, hint: string) => testo(id, atteso, `Il paragrafo dice «${atteso}»`, hint);

  const AIUTO_PREZZI = `function prezzoMagliette(quante) {
  return quante * ${prezzo};
}

function prezzoScritte(quante) {
  return quante * ${scritta};
}`;
  const AIUTO_SPEDIZIONE = `function spedizione(merce) {
  if (merce >= ${soglia}) {
    return 0;
  } else {
    return ${spedizione};
  }
}`;
  const SCRIVI_SPEDIZIONE = `  if (spedizione(merce) === 0) {
    document.getElementById("spedizione").innerHTML = "Spedizione gratis";
  } else {
    document.getElementById("spedizione").innerHTML = "Spedizione: " + spedizione(merce) + " €";
  }`;
  const LEGGI_CASELLE = `  let magliette = Number(document.getElementById("magliette").value);
  let scritte = Number(document.getElementById("scritte").value);
  let merce = prezzoMagliette(magliette) + prezzoScritte(scritte);`;
  const DIVIDI = `function dividiSpesa() {
  let persone = Number(document.getElementById("persone").value);
  document.getElementById("quota").innerHTML = "A testa: " + totaleOrdine() / persone + " €";
}`;
  const CALCOLA_CON_TOTALE = `function calcolaPreventivo() {
${LEGGI_CASELLE}
${SCRIVI_SPEDIZIONE}
  document.getElementById("totale").innerHTML = "Totale: " + totaleOrdine() + " €";
}`;
  const COLLEGA_DUE = `document.getElementById("btnCalcola").addEventListener("click", calcolaPreventivo);
document.getElementById("btnDividi").addEventListener("click", dividiSpesa);`;

  return {
    scheda: {
      id: 'magliette',
      titolo: 'Il negozio di magliette',
      lezione: 'Modulo 4 · Lezione 9',
      committente: `La squadra «${squadra}» ordina le magliette nuove in un negozio che le stampa. Il negozio vuole una pagina per il preventivo, e i giocatori vogliono sapere quanto paga ognuno.`,
      prodotto: 'Una pagina con due pulsanti: i conti li fanno funzioni di aiuto con parametri e return, scritte una volta sola.',
      dati: [
        `maglietta: ${prezzo} €`,
        `nome stampato: ${scritta} € a maglietta`,
        `spedizione: ${spedizione} €, gratis da ${soglia} € di merce in su`,
        `codice sconto: ${codice}, toglie ${SCONTO} € dal totale`,
      ],
      risultatoFinale: [
        '«Calcola il preventivo» scrive il totale e dice se la spedizione si paga o è gratis.',
        '«Dividi fra i giocatori» scrive quanto paga ognuno, anche senza premere prima Calcola.',
        `Con il codice ${codice} il totale e la quota scendono di ${SCONTO} € in tutto.`,
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Una maglietta costa ${prezzo} €.\n1. Scrivi la funzione \`prezzoMagliette(quante)\`, che **restituisce** con \`return\` il prezzo di quelle magliette, cioè \`quante * ${prezzo}\`.\n2. Scrivi la funzione del pulsante **Calcola il preventivo** (id \`btnCalcola\`), senza parametri, e collegala con \`addEventListener\`.\n3. Dentro, leggi la casella delle magliette (id \`magliette\`) con \`Number(... .value)\` e scrivi nel paragrafo (id \`totale\`) \`Totale: N €\`. N lo calcola la chiamata \`prezzoMagliette(...)\`.`,
        regola: `${REGOLE.treGesti} ${REGOLE.funzioneConReturn} ${REGOLE.datiDalleCaselle}`,
        prove: [
          {
            nome: 'con 3 magliette',
            passi: [scrivi('magliette', '3', 'Magliette'), calcola, dice('totale', `Totale: ${3 * prezzo} €`, `prezzoMagliette riceve il numero di magliette e lo restituisce moltiplicato per ${prezzo}. La funzione del pulsante legge la casella e mette la chiamata nel testo. Se leggi undefined, manca il return.`)],
          },
          {
            nome: 'con 7 magliette',
            passi: [scrivi('magliette', '7', 'Magliette'), calcola, dice('totale', `Totale: ${7 * prezzo} €`, 'Il numero deve venire dalla casella, letta dentro la funzione del pulsante.')],
          },
          {
            nome: 'con 0 magliette',
            passi: [scrivi('magliette', '0', 'Magliette'), calcola, dice('totale', 'Totale: 0 €', 'Con zero magliette il totale è 0.')],
          },
        ],
        codiceIniziale: '// 1. Le funzioni di calcolo, con return\n\n// 2. La funzione del pulsante\n\n// 3. Il collegamento\n',
      },
      {
        consegna: `Sulle magliette si può stampare il nome del giocatore, a ${scritta} € l'una.\n1. Scrivi la funzione \`prezzoScritte(quante)\`, che restituisce \`quante * ${scritta}\`.\n2. Nella funzione di Calcola leggi anche la casella dei nomi stampati (id \`scritte\`).\n3. Il totale ora è \`prezzoMagliette(...) + prezzoScritte(...)\`. Il testo resta \`Totale: N €\`.`,
        regola: `${REGOLE.treGesti} ${REGOLE.funzioneConReturn} ${REGOLE.datiDalleCaselle}`,
        prove: [
          {
            nome: `con ${piccolo.m} magliette e ${piccolo.s} nomi`,
            passi: [...ordine(piccolo.m, piccolo.s), calcola, dice('totale', `Totale: ${merce(piccolo.m, piccolo.s)} €`, 'Il totale è la somma delle due chiamate, prezzoMagliette e prezzoScritte, ognuna con il suo numero letto dalla casella.')],
          },
          {
            nome: `con ${soloMagliette.m} magliette e nessun nome`,
            passi: [...ordine(soloMagliette.m, soloMagliette.s), calcola, dice('totale', `Totale: ${merce(soloMagliette.m, soloMagliette.s)} €`, 'Senza nomi stampati resta solo il prezzo delle magliette.')],
          },
          {
            nome: `con ${grande.m} magliette e ${grande.s} nomi`,
            passi: [...ordine(grande.m, grande.s), calcola, dice('totale', `Totale: ${merce(grande.m, grande.s)} €`, 'Anche la casella dei nomi va letta con Number(...value).')],
          },
        ],
      },
      {
        consegna: `La spedizione costa ${spedizione} €, ma è gratis quando la merce (magliette più nomi) arriva a ${soglia} € o più.\n1. Scrivi la funzione \`spedizione(merce)\`. Dentro c'è un if: se \`merce >= ${soglia}\` restituisce \`0\`, altrimenti (else) restituisce \`${spedizione}\`. Un \`return\` nelle graffe dell'if e uno in quelle dell'else.\n2. In Calcola metti la merce in una variabile. Il totale diventa la merce più \`spedizione(merce)\`.\n3. Nel paragrafo della spedizione (id \`spedizione\`) scrivi \`Spedizione: ${spedizione} €\`, oppure \`Spedizione gratis\` quando \`spedizione(merce)\` vale 0.`,
        regola: `${REGOLE.treGesti} ${REGOLE.funzioneConReturn} ${REGOLE.datiDalleCaselle} La spedizione la decide la funzione spedizione, con un if e un return per ogni caso.`,
        prove: [
          {
            nome: `con ${piccolo.m} magliette e ${piccolo.s} nomi`,
            passi: [
              ...ordine(piccolo.m, piccolo.s),
              calcola,
              dice('totale', `Totale: ${totale(piccolo.m, piccolo.s)} €`, `Sotto i ${soglia} € di merce la spedizione si paga: il totale è la merce più spedizione(merce).`),
              dice('spedizione', testoSpedizione(piccolo.m, piccolo.s), `Quando spedizione(merce) non vale 0, il paragrafo dice «Spedizione: ${spedizione} €».`),
            ],
          },
          {
            nome: `con ${grande.m} magliette e ${grande.s} nomi`,
            passi: [
              ...ordine(grande.m, grande.s),
              calcola,
              dice('totale', `Totale: ${totale(grande.m, grande.s)} €`, `Da ${soglia} € in su la funzione spedizione restituisce 0: il totale è solo la merce.`),
              dice('spedizione', testoSpedizione(grande.m, grande.s), 'Quando spedizione(merce) vale 0, il paragrafo dice «Spedizione gratis».'),
            ],
          },
        ],
      },
      {
        consegna: `I giocatori dividono la spesa. Il totale ora serve a due pulsanti: lo scrivi una volta sola, in una funzione.\n1. Scrivi la funzione \`totaleOrdine()\`, **senza parametri**. Legge le caselle delle magliette e dei nomi, e restituisce con \`return\` la merce più la spedizione, usando le funzioni che hai già.\n2. In Calcola, per il totale usa \`totaleOrdine()\`, al posto del calcolo che c'è ora.\n3. Scrivi la funzione del pulsante **Dividi fra i giocatori** (id \`btnDividi\`) e collegala. Legge la casella dei giocatori (id \`persone\`) e scrive nel paragrafo (id \`quota\`) \`A testa: N €\`, dove N è \`totaleOrdine()\` diviso i giocatori.\nDividi deve funzionare anche senza premere prima Calcola.`,
        regola: `${REGOLE.treGesti} ${REGOLE.funzioneConReturn} ${REGOLE.datiDalleCaselle} Il totale lo calcola una funzione totaleOrdine con return, usata da tutti e due i pulsanti.`,
        prove: [
          {
            nome: `con ${grande.m} magliette, ${grande.s} nomi e ${grande.giocatori} giocatori, senza premere Calcola`,
            passi: [...ordine(grande.m, grande.s), ...dividi(grande.giocatori), dice('quota', `A testa: ${totale(grande.m, grande.s) / grande.giocatori} €`, 'La funzione di Dividi chiama totaleOrdine(), che legge da sola le caselle e restituisce il totale: così non serve premere prima Calcola.')],
          },
          {
            nome: `con ${piccolo.m} magliette, ${piccolo.s} nomi e ${piccolo.giocatori} giocatori`,
            passi: [...ordine(piccolo.m, piccolo.s), ...dividi(piccolo.giocatori), dice('quota', `A testa: ${totale(piccolo.m, piccolo.s) / piccolo.giocatori} €`, 'Il totale da dividere comprende la spedizione, quando si paga.')],
          },
          {
            nome: `con ${piccolo.m} magliette e ${piccolo.s} nomi, con Calcola`,
            passi: [...ordine(piccolo.m, piccolo.s), calcola, dice('totale', `Totale: ${totale(piccolo.m, piccolo.s)} €`, 'Calcola deve continuare a scrivere il totale, ora con totaleOrdine().'), dice('spedizione', testoSpedizione(piccolo.m, piccolo.s), 'Anche il paragrafo della spedizione resta come nella fase 3.')],
          },
        ],
      },
      {
        consegna: `Il negozio ha dato alla squadra il codice sconto \`${codice}\`, che toglie ${SCONTO} € dal totale.\n1. Scrivi la funzione \`codiceValido(codice)\`, che restituisce \`true\` se il codice è esattamente \`${codice}\` e \`false\` se no. Basta una riga: \`return codice === "${codice}";\`, come scontoValido nel manuale.\n2. In \`totaleOrdine()\` leggi anche la casella del codice (id \`codice\`). È un testo: qui **niente** \`Number()\`.\n3. Sempre in \`totaleOrdine()\`, prima del return: se \`codiceValido(...)\` è vero, togli ${SCONTO} € dal totale.\nLa spedizione si calcola sempre sulla merce senza sconto. Con il codice giusto scendono sia il totale sia la quota a testa.`,
        regola: `${REGOLE.treGesti} ${REGOLE.funzioneConReturn} ${REGOLE.datiDalleCaselle} Il codice lo controlla la funzione codiceValido, che restituisce true o false ed è usata in un if.`,
        prove: [
          {
            nome: `con ${grande.m} magliette, ${grande.s} nomi e il codice ${codice}`,
            passi: [...ordine(grande.m, grande.s, codice), calcola, dice('totale', `Totale: ${totale(grande.m, grande.s, true)} €`, `In totaleOrdine(), se codiceValido(...) con il testo della casella è vero, togli ${SCONTO} prima del return.`)],
          },
          {
            nome: `con il codice ${codice} e ${grande.giocatori} giocatori`,
            passi: [...ordine(grande.m, grande.s, codice), ...dividi(grande.giocatori), dice('quota', `A testa: ${totale(grande.m, grande.s, true) / grande.giocatori} €`, 'Lo sconto va dentro totaleOrdine(): così vale anche per la quota, senza scriverlo due volte.')],
          },
          {
            nome: 'con un codice sbagliato',
            passi: [...ordine(grande.m, grande.s, 'SCONTO'), calcola, dice('totale', `Totale: ${totale(grande.m, grande.s)} €`, `Con un codice diverso da ${codice} il totale non cambia: codiceValido deve restituire false.`)],
          },
          {
            nome: `con ${piccolo.m} magliette, ${piccolo.s} nomi e senza codice`,
            passi: [...ordine(piccolo.m, piccolo.s, ''), calcola, dice('totale', `Totale: ${totale(piccolo.m, piccolo.s)} €`, 'Senza codice il totale resta quello della fase 4.'), dice('spedizione', testoSpedizione(piccolo.m, piccolo.s), 'La spedizione non cambia con il codice.')],
          },
        ],
      },
    ],
    soluzioni: [
      `function prezzoMagliette(quante) {
  return quante * ${prezzo};
}

function calcolaPreventivo() {
  let magliette = Number(document.getElementById("magliette").value);
  document.getElementById("totale").innerHTML = "Totale: " + prezzoMagliette(magliette) + " €";
}

document.getElementById("btnCalcola").addEventListener("click", calcolaPreventivo);`,
      `${AIUTO_PREZZI}

function calcolaPreventivo() {
${LEGGI_CASELLE}
  document.getElementById("totale").innerHTML = "Totale: " + merce + " €";
}

document.getElementById("btnCalcola").addEventListener("click", calcolaPreventivo);`,
      `${AIUTO_PREZZI}

${AIUTO_SPEDIZIONE}

function calcolaPreventivo() {
${LEGGI_CASELLE}
  let totale = merce + spedizione(merce);
${SCRIVI_SPEDIZIONE}
  document.getElementById("totale").innerHTML = "Totale: " + totale + " €";
}

document.getElementById("btnCalcola").addEventListener("click", calcolaPreventivo);`,
      `${AIUTO_PREZZI}

${AIUTO_SPEDIZIONE}

function totaleOrdine() {
${LEGGI_CASELLE}
  return merce + spedizione(merce);
}

${CALCOLA_CON_TOTALE}

${DIVIDI}

${COLLEGA_DUE}`,
      `${AIUTO_PREZZI}

${AIUTO_SPEDIZIONE}

function codiceValido(codice) {
  return codice === "${codice}";
}

function totaleOrdine() {
${LEGGI_CASELLE}
  let totale = merce + spedizione(merce);
  let codice = document.getElementById("codice").value;
  if (codiceValido(codice)) {
    totale = totale - ${SCONTO};
  }
  return totale;
}

${CALCOLA_CON_TOTALE}

${DIVIDI}

${COLLEGA_DUE}`,
    ],
  };
}
