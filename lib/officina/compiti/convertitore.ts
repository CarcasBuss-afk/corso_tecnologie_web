/* Compito facile · Il convertitore dei tempi (Modulo 4, lezione 7).
 * Idea nuova: il numero arriva da una casella con .value e Number(), si moltiplica e si scrive
 * nella pagina; alla fine due caselle e una somma, con la trappola del + fra testi e numeri.
 * Tre fasi, molto guidate: il codice è quasi riga per riga nella consegna. Solo numeri interi. */
import { clic, CSS_BASE, scrivi, testo } from './aiuti';
import { generatore, intero, REGOLE, scegli, type Compito } from './tipi';

const ALLENATORI = ['Marco', 'Giulia', 'Davide', 'Sara', 'Luca', 'Elena'] as const;

/** Il secondo pulsante: cambia da un allievo all'altro. Tutte moltiplicazioni fra interi. */
const CONVERSIONI = [
  { da: 'ore', a: 'minuti', per: 60, uno: "un'ora = 60 minuti", etichetta: 'Ore in minuti', id: 'btnOre', funzione: 'oreInMinuti' },
  { da: 'giorni', a: 'ore', per: 24, uno: 'un giorno = 24 ore', etichetta: 'Giorni in ore', id: 'btnGiorni', funzione: 'giorniInOre' },
  { da: 'settimane', a: 'giorni', per: 7, uno: 'una settimana = 7 giorni', etichetta: 'Settimane in giorni', id: 'btnSettimane', funzione: 'settimaneInGiorni' },
] as const;

export function generaConvertitore(seme: number): Compito {
  const rnd = generatore(seme);
  const allenatore = scegli(rnd, ALLENATORI);
  const conv = scegli(rnd, CONVERSIONI);
  const numeri = [intero(rnd, 3, 12), intero(rnd, 15, 90)];
  const esempio = { minuti: intero(rnd, 2, 9), secondi: intero(rnd, 10, 55) };
  const gara = { minuti: intero(rnd, 3, 12), secondi: intero(rnd, 5, 59) };
  const soloSecondi = intero(rnd, 11, 59);

  const html = `<h1>⏱️ Il convertitore dei tempi</h1>
<label>Numero: <input id="numero" type="number" value="0"></label>
<button id="btnMinuti">Minuti in secondi</button>
<button id="${conv.id}">${conv.etichetta}</button>
<p id="risultato"></p>
<label>Minuti: <input id="minuti" type="number" value="0"></label>
<label>Secondi: <input id="secondi" type="number" value="0"></label>
<button id="btnTempo">Tempo in secondi</button>
<p id="tempo"></p>`;

  const fraseMinuti = (n: number) => `${n} minuti sono ${n * 60} secondi`;
  const fraseConv = (n: number) => `${n} ${conv.da} sono ${n * conv.per} ${conv.a}`;
  const fraseTempo = (m: number, s: number) => `Tempo totale: ${m * 60 + s} secondi`;

  const provaMinuti = (n: number, hint: string) => ({
    nome: `con ${n} minuti`,
    passi: [scrivi('numero', String(n), 'Numero'), clic('btnMinuti', 'Minuti in secondi'), testo('risultato', fraseMinuti(n), `Il paragrafo dice «${fraseMinuti(n)}»`, hint)],
  });
  const provaConv = (n: number, hint: string) => ({
    nome: `con ${n} ${conv.da}`,
    passi: [scrivi('numero', String(n), 'Numero'), clic(conv.id, conv.etichetta), testo('risultato', fraseConv(n), `Il paragrafo dice «${fraseConv(n)}»`, hint)],
  });
  const provaTempo = (m: number, s: number, hint: string) => ({
    nome: `con ${m} minuti e ${s} secondi`,
    passi: [
      scrivi('minuti', String(m), 'Minuti'),
      scrivi('secondi', String(s), 'Secondi'),
      clic('btnTempo', 'Tempo in secondi'),
      testo('tempo', fraseTempo(m, s), `Il paragrafo del tempo dice «${fraseTempo(m, s)}»`, hint),
    ],
  });

  const MINUTI = `function minutiInSecondi() {
  let n = Number(document.getElementById("numero").value);
  let secondi = n * 60;
  document.getElementById("risultato").innerHTML = n + " minuti sono " + secondi + " secondi";
}`;
  const CONV = `function ${conv.funzione}() {
  let n = Number(document.getElementById("numero").value);
  let ${conv.a} = n * ${conv.per};
  document.getElementById("risultato").innerHTML = n + " ${conv.da} sono " + ${conv.a} + " ${conv.a}";
}`;
  const COLLEGA_MINUTI = 'document.getElementById("btnMinuti").addEventListener("click", minutiInSecondi);';
  const COLLEGA_CONV = `document.getElementById("${conv.id}").addEventListener("click", ${conv.funzione});`;

  return {
    scheda: {
      id: 'convertitore',
      titolo: 'Il convertitore dei tempi',
      lezione: 'Modulo 4 · Lezione 7',
      committente: `${allenatore} allena una squadra di nuoto: vuole una pagina che trasformi i tempi degli allenamenti e delle gare, senza fare i conti a mano.`,
      prodotto: 'Una pagina che legge i numeri dalle caselle, li moltiplica e scrive il risultato.',
      dati: [
        'un minuto = 60 secondi',
        `il secondo pulsante: «${conv.etichetta}» (${conv.uno})`,
        `l'esempio della gara: ${esempio.minuti} minuti e ${esempio.secondi} secondi`,
      ],
      risultatoFinale: [
        `«Minuti in secondi» legge il numero e scrive, per esempio, «${fraseMinuti(5)}».`,
        `«${conv.etichetta}» scrive, per esempio, «${fraseConv(3)}».`,
        `«Tempo in secondi» legge minuti e secondi e scrive, per esempio, «${fraseTempo(esempio.minuti, esempio.secondi)}».`,
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Il pulsante **Minuti in secondi** (id \`btnMinuti\`) trasforma in secondi i minuti scritti nella casella.\n1. Scrivi la funzione \`minutiInSecondi\`. La prima riga è \`function minutiInSecondi() {\`.\n2. Dentro, leggi la casella (id \`numero\`): \`let n = Number(document.getElementById("numero").value);\`\n3. Sotto, calcola i secondi in una variabile: \`let secondi = n * 60;\`\n4. Scrivi nel paragrafo (id \`risultato\`) \`N minuti sono S secondi\`, unendo i pezzi con +. Per esempio, con 5 scrive \`${fraseMinuti(5)}\`.\n5. Sotto la funzione, collegala al pulsante con \`addEventListener\`.`,
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalleCaselle} I secondi li calcola una moltiplicazione per 60 sul numero letto.`,
        prove: [
          provaMinuti(numeri[0], 'Unisci i pezzi con +: la variabile n, poi " minuti sono " (con uno spazio prima e uno dopo, dentro le virgolette), poi la variabile secondi, poi " secondi".'),
          provaMinuti(numeri[1], 'Il numero deve venire dalla casella: se il risultato è sempre lo stesso, non la stai leggendo dentro la funzione. Ricordati Number() intorno a .value.'),
          provaMinuti(0, 'Con 0 minuti i secondi sono 0: la frase resta la stessa, cambiano solo i numeri.'),
        ],
        codiceIniziale: '// 1. La funzione minutiInSecondi\n\n// 2. Collega il pulsante alla funzione\n',
      },
      {
        consegna: `Ora il secondo pulsante, **${conv.etichetta}** (id \`${conv.id}\`). Funziona come il primo.\n1. **Aggiungi** una nuova funzione, collegata con \`addEventListener\` al pulsante \`${conv.id}\`.\n2. Dentro, leggi la stessa casella (id \`numero\`) come nella fase 1.\n3. Calcola il risultato in una variabile, con il numero letto \`* ${conv.per}\` (${conv.uno}).\n4. Scrivi nello stesso paragrafo (id \`risultato\`) \`N ${conv.da} sono R ${conv.a}\`. Per esempio, con 3 scrive \`${fraseConv(3)}\`.\nIl pulsante Minuti in secondi deve continuare a funzionare.`,
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalleCaselle} Il risultato lo calcola una moltiplicazione per ${conv.per} sul numero letto.`,
        prove: [
          provaConv(numeri[0], `Copia la funzione della fase 1 e cambia tre cose: il nome della funzione, il numero (${conv.per} invece di 60) e le parole (" ${conv.da} sono " e " ${conv.a}"). Poi collegala al pulsante ${conv.id}.`),
          provaConv(numeri[1], 'Il numero deve venire dalla casella, letto con Number(...value) dentro la nuova funzione.'),
          provaMinuti(numeri[1], 'Minuti in secondi deve continuare a funzionare come nella fase 1: non cancellare la sua funzione né il suo addEventListener.'),
        ],
      },
      {
        consegna: `Ultimo pulsante: il tempo di una gara, in minuti e secondi, diventa tutto in secondi. Usa le due caselle **Minuti** (id \`minuti\`) e **Secondi** (id \`secondi\`) e il pulsante **Tempo in secondi** (id \`btnTempo\`).\n1. **Aggiungi** una nuova funzione, collegata con \`addEventListener\` al pulsante \`btnTempo\`.\n2. Dentro, leggi le due caselle con \`Number(...)\`, ognuna nella sua variabile: per esempio \`m\` e \`s\`.\n3. Calcola il totale in una variabile: \`let totale = m * 60 + s;\`\n4. Scrivi nel paragrafo (id \`tempo\`) \`Tempo totale: N secondi\`. Per esempio, con ${esempio.minuti} minuti e ${esempio.secondi} secondi scrive \`${fraseTempo(esempio.minuti, esempio.secondi)}\`.\n**Attenzione alla trappola del +.** Fai il conto prima, nella variabile \`totale\`. Se lo scrivi dentro il testo, \`"Tempo totale: " + m * 60 + s\` attacca i numeri come testo. Se proprio lo vuoi lì, mettilo fra parentesi: \`(m * 60 + s)\`.\nGli altri due pulsanti devono continuare a funzionare.`,
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalleCaselle} Il tempo totale è minuti * 60 + secondi, calcolato con i numeri letti dalle due caselle.`,
        prove: [
          provaTempo(gara.minuti, gara.secondi, 'Se il numero è lungo e strano, è la trappola del +: i numeri si sono attaccati come testo. Calcola prima let totale = m * 60 + s; e poi scrivi "Tempo totale: " + totale + " secondi".'),
          provaTempo(0, soloSecondi, `Con 0 minuti il totale sono solo i secondi: ${soloSecondi}. Se leggi 0${soloSecondi}, è la trappola del +.`),
          provaConv(numeri[0], `${conv.etichetta} deve continuare a funzionare come nella fase 2.`),
        ],
      },
    ],
    soluzioni: [
      `${MINUTI}

${COLLEGA_MINUTI}`,
      `${MINUTI}

${CONV}

${COLLEGA_MINUTI}
${COLLEGA_CONV}`,
      `${MINUTI}

${CONV}

function tempoInSecondi() {
  let m = Number(document.getElementById("minuti").value);
  let s = Number(document.getElementById("secondi").value);
  let totale = m * 60 + s;
  document.getElementById("tempo").innerHTML = "Tempo totale: " + totale + " secondi";
}

${COLLEGA_MINUTI}
${COLLEGA_CONV}
document.getElementById("btnTempo").addEventListener("click", tempoInSecondi);`,
    ],
  };
}
