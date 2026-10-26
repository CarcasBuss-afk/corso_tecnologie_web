/* Compito 0 · Lo scontrino del bar (Modulo 4, lezione 1).
 * Idea nuova: il primo JavaScript. console.log con un testo, con più valori (testo fra
 * virgolette, numeri senza), i calcoli con + * / e le parentesi, i commenti. Non ci sono
 * ancora pulsanti né variabili: lo scontrino si stampa nella console, che l'anteprima mostra
 * sotto la pagina. I prezzi vanno di 50 centesimi in 50 centesimi: somme e metà sono esatte
 * anche per JavaScript (niente 0.1 + 0.2). */
import { CSS_BASE, rigaConsole } from './aiuti';
import { generatore, intero, scegli, type Compito } from './tipi';

const BAR = ['Bar Sport', 'Bar Centrale', 'Bar della Piazza', 'Bar Stazione', 'Bar del Porto', 'Bar Aurora'] as const;

const SALUTO = 'Grazie e arrivederci!';

export function generaScontrino(seme: number): Compito {
  const rnd = generatore(seme);
  const bar = scegli(rnd, BAR);
  const caffe = scegli(rnd, [1, 1.5] as const);
  const cornetto = scegli(rnd, [1.5, 2] as const);
  const spremuta = scegli(rnd, [3, 3.5, 4] as const);
  const caffeOrdinati = intero(rnd, 2, 3);

  const riga = (nome: string, prezzo: number) => `${nome} ${prezzo} €`;
  const totale = caffeOrdinati * caffe + cornetto + spremuta;
  const RIGA_TOTALE = `Totale ${totale} €`;
  const RIGA_QUOTA = `A testa ${totale / 2} €`;
  const prodotti = [riga('Caffè', caffe), riga('Cornetto', cornetto), riga('Spremuta', spremuta)];

  const html = `<h1>🧾 Cassa del ${bar}</h1>
<p>Lo scontrino lo stampa JavaScript nella <strong>console</strong>: la vedi sotto la pagina (nel browser, con F12).</p>`;

  const intestazione = rigaConsole(bar, `In console c'è la riga «${bar}»`, 'Il testo va fra virgolette dentro console.log, scritto esattamente così.');
  const listino = prodotti.map((p) => rigaConsole(p, `In console c'è la riga «${p}»`, 'console.log con tre valori separati da virgole: il nome fra virgolette, il prezzo come numero senza virgolette, poi "€" fra virgolette.'));
  const rigaTotale = rigaConsole(RIGA_TOTALE, `In console c'è la riga «${RIGA_TOTALE}»`, `Il totale è ${caffeOrdinati} caffè più un cornetto più una spremuta: moltiplica e somma i prezzi dentro console.log, senza virgolette intorno ai numeri.`);
  const rigaQuota = rigaConsole(RIGA_QUOTA, `In console c'è la riga «${RIGA_QUOTA}»`, 'La quota è il totale diviso 2: tutta la somma va fra parentesi tonde prima di dividere, se no JavaScript divide solo l\'ultimo prezzo.');

  const istruzioniTotale = `${caffeOrdinati} * ${caffe} + ${cornetto} + ${spremuta}`;

  return {
    scheda: {
      id: 'scontrino',
      titolo: 'Lo scontrino del bar',
      lezione: 'Modulo 4 · Lezione 1',
      committente: `Il «${bar}» ha una cassa nuova che stampa lo scontrino nella console. Il programma lo scrivi tu: nome del bar, prezzi, totale del tavolo e quanto paga ognuno dei due amici.`,
      prodotto: 'Un programma che scrive lo scontrino riga per riga con console.log e fa i conti da solo.',
      dati: [`bar: ${bar}`, `caffè: ${caffe} €`, `cornetto: ${cornetto} €`, `spremuta: ${spremuta} €`, `ordine: ${caffeOrdinati} caffè, 1 cornetto, 1 spremuta`, 'amici al tavolo: 2'],
      risultatoFinale: [
        `In cima allo scontrino il nome «${bar}», poi i tre prezzi del listino.`,
        `Il totale dell'ordine e la quota a testa, calcolati da JavaScript (non scritti a mano).`,
        `In fondo «${SALUTO}», e nel codice i commenti che spiegano che cosa fa.`,
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Lo scontrino comincia con il nome del bar: con \`console.log\` stampa in console la riga \`${bar}\`. Il testo va fra virgolette. Guarda il risultato nella **console**, sotto la pagina.`,
        regola: 'Il testo si stampa con console.log, fra virgolette.',
        prove: [{ passi: [intestazione] }],
        codiceIniziale: '\n',
      },
      {
        consegna: `Sotto il nome, il listino: tre righe, una per prodotto, \`${prodotti.join('`, `')}\`. Ogni riga è un \`console.log\` con **tre valori separati da virgole**: il nome fra virgolette, il prezzo come **numero senza virgolette**, poi \`"€"\`. JavaScript mette da solo uno spazio fra i valori.`,
        regola: 'Ogni riga del listino è un console.log con più valori separati da virgole: il nome del prodotto fra virgolette e il prezzo come numero senza virgolette. Non vale il prezzo scritto dentro il testo fra virgolette.',
        prove: [{ passi: [intestazione, ...listino] }],
      },
      {
        consegna: `Il tavolo ha ordinato ${caffeOrdinati} caffè, un cornetto e una spremuta. Stampa la riga \`Totale N €\`, dove N lo **calcola JavaScript** dentro il \`console.log\`: il prezzo del caffè per quanti caffè, più il cornetto, più la spremuta (i prezzi sono nei dati della scheda). I numeri non vanno fra virgolette; JavaScript scrive i decimali con il punto.`,
        regola: 'Il totale lo calcola JavaScript: dentro il console.log c\'è l\'operazione con i prezzi (con * e +), non il risultato scritto a mano.',
        prove: [{ passi: [intestazione, ...listino, rigaTotale] }],
      },
      {
        consegna: `I due amici dividono il conto: stampa \`A testa N €\`, dove N è il totale diviso 2, calcolato da JavaScript. Attento: la somma va fra **parentesi tonde** prima di dividere, come in matematica.`,
        regola: 'Anche la quota a testa la calcola JavaScript: l\'operazione del totale fra parentesi, divisa per 2. Non vale il numero scritto a mano.',
        prove: [{ passi: [intestazione, ...listino, rigaTotale, rigaQuota] }],
      },
      {
        consegna: `Lo scontrino si chiude con la riga \`${SALUTO}\`. E il programma si spiega da solo: aggiungi **almeno due commenti** (con \`//\`) che dicono che cosa fanno le parti del codice, per esempio sopra il listino e sopra i conti.`,
        regola: 'Ci sono almeno due commenti che spiegano il codice; i conti restano calcolati da JavaScript.',
        almenoCommenti: 2,
        prove: [{ passi: [intestazione, ...listino, rigaTotale, rigaQuota, rigaConsole(SALUTO, `In console c'è la riga «${SALUTO}»`, 'L\'ultima riga è un console.log con il saluto fra virgolette.')] }],
      },
    ],
    soluzioni: [
      `console.log("${bar}");`,
      `console.log("${bar}");
console.log("Caffè", ${caffe}, "€");
console.log("Cornetto", ${cornetto}, "€");
console.log("Spremuta", ${spremuta}, "€");`,
      `console.log("${bar}");
console.log("Caffè", ${caffe}, "€");
console.log("Cornetto", ${cornetto}, "€");
console.log("Spremuta", ${spremuta}, "€");
console.log("Totale", ${istruzioniTotale}, "€");`,
      `console.log("${bar}");
console.log("Caffè", ${caffe}, "€");
console.log("Cornetto", ${cornetto}, "€");
console.log("Spremuta", ${spremuta}, "€");
console.log("Totale", ${istruzioniTotale}, "€");
console.log("A testa", (${istruzioniTotale}) / 2, "€");`,
      `// Lo scontrino del ${bar}
console.log("${bar}");

// Il listino: nome e prezzo di ogni prodotto
console.log("Caffè", ${caffe}, "€");
console.log("Cornetto", ${cornetto}, "€");
console.log("Spremuta", ${spremuta}, "€");

// I conti: il totale del tavolo e la quota a testa
console.log("Totale", ${istruzioniTotale}, "€");
console.log("A testa", (${istruzioniTotale}) / 2, "€");
console.log("${SALUTO}");`,
    ],
  };
}
