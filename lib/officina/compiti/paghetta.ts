/* Sfida · La paghetta (Modulo 4, lezione 1).
 * Più difficile dello scontrino: le consegne dicono che cosa deve comparire in console e che
 * cosa c'è da calcolare, non come si scrive riga per riga; l'allievo scompone i conti da solo.
 * Come nella lezione, niente variabili: console.log con più valori separati da virgole e i
 * conti scritti dentro, con i dati della scheda. La difficoltà è nei conti a più passi con le
 * parentesi: una sottrazione prima di una divisione, un conto dentro un altro, due coppie di
 * parentesi nella stessa divisione. I numeri dal seme sono costruiti perché le divisioni siano
 * esatte: quanto manca è un multiplo della paghetta, e quanto si mette via ogni settimana
 * divide la paghetta. */
import { CSS_BASE, rigaConsole } from './aiuti';
import { generatore, intero, scegli, type Compito } from './tipi';

const NOMI = ['Giulia', 'Matteo', 'Sofia', 'Lorenzo', 'Alice', 'Tommaso', 'Aurora', 'Leonardo'] as const;
/** Con l'articolo dentro: nelle frasi si legge «Voglio una bici», «Voglio un paio di cuffie». */
const OGGETTI = ['una bici', 'un paio di cuffie', 'uno skateboard', 'un videogioco', 'una chitarra', 'un monopattino', 'una console', 'uno zaino da trekking'] as const;
/** Le paghette possibili e, per ognuna, quanto si può mettere via a settimana (un divisore della paghetta: le settimane restano intere). */
const PAGHETTE: ReadonlyArray<{ paghetta: number; risparmi: readonly number[] }> = [
  { paghetta: 6, risparmi: [3, 2] },
  { paghetta: 8, risparmi: [4, 2] },
  { paghetta: 10, risparmi: [5, 2] },
  { paghetta: 12, risparmi: [6, 4, 3] },
  { paghetta: 15, risparmi: [5, 3] },
  { paghetta: 20, risparmi: [10, 5, 4] },
];

const SETTIMANE_MESE = 4;
const SETTIMANE_ANNO = 52;

export function generaPaghetta(seme: number): Compito {
  const rnd = generatore(seme);
  const nome = scegli(rnd, NOMI);
  const oggetto = scegli(rnd, OGGETTI);
  const { paghetta, risparmi } = scegli(rnd, PAGHETTE);
  const risparmio = scegli(rnd, risparmi);
  const spesa = paghetta - risparmio;
  const settimane = intero(rnd, 8, 24);
  const salvadanaio = 5 * intero(rnd, 3, 10);

  /* I conti veri, per le prove. */
  const mancano = paghetta * settimane;
  const prezzo = salvadanaio + mancano;
  const dopoUnMese = prezzo - (salvadanaio + paghetta * SETTIMANE_MESE);
  const settimaneConSpesa = mancano / risparmio;
  const fineAnno = salvadanaio + risparmio * SETTIMANE_ANNO;

  const R_SETTIMANA = `Paghetta a settimana: ${paghetta} €`;
  const R_MESE = `In un mese: ${paghetta * SETTIMANE_MESE} €`;
  const R_ANNO = `In un anno: ${paghetta * SETTIMANE_ANNO} €`;
  const R_OGGETTO = `Voglio ${oggetto}: costa ${prezzo} €`;
  const R_SALVADANAIO = `Nel salvadanaio ho ${salvadanaio} €`;
  const R_MANCANO = `Mi mancano ${mancano} €`;
  const R_SETTIMANE = `Settimane che servono: ${settimane}`;
  const R_DOPO_UN_MESE = `Dopo un mese mancano ancora ${dopoUnMese} €`;
  const R_SPESA = `Se spendo ${spesa} € a settimana metto via ${risparmio} €`;
  const R_CON_SPESA = `Con la spesa le settimane diventano ${settimaneConSpesa}`;
  const R_BILANCIO = `In un anno spendo ${spesa * SETTIMANE_ANNO} € e metto via ${risparmio * SETTIMANE_ANNO} €`;
  const R_FINE_ANNO = `A fine anno nel salvadanaio ho ${fineAnno} €`;

  const html = `<h1>🐷 La paghetta di ${nome}</h1>
<p>I conti li stampa JavaScript nella <strong>console</strong>: qui la vedi sotto l'anteprima (nel browser vero si apre con F12).</p>`;

  const riga = (testo: string, hint: string) => rigaConsole(testo, `In console c'è la riga «${testo}»`, hint);

  const rigaSettimana = riga(R_SETTIMANA, 'Un console.log con tre valori separati da virgole: il testo fra virgolette, la paghetta come numero senza virgolette, poi "€". Controlla i due punti dentro il testo.');
  const rigaMese = riga(R_MESE, `Il mese è la paghetta per ${SETTIMANE_MESE}, scritta come operazione dentro console.log senza virgolette: non il numero già calcolato.`);
  const rigaAnno = riga(R_ANNO, `L'anno è la paghetta per ${SETTIMANE_ANNO}, come operazione dentro console.log: non il mese per 12, che farebbe solo ${SETTIMANE_MESE * 12} settimane.`);
  const rigaOggetto = riga(R_OGGETTO, `Il testo "Voglio ${oggetto}: costa" fra virgolette, poi il prezzo ${prezzo} come numero, poi "€". Attento ai due punti e agli spazi dentro il testo.`);
  const rigaSalvadanaio = riga(R_SALVADANAIO, `Il testo fra virgolette, poi il numero ${salvadanaio} senza virgolette, poi "€".`);
  const rigaMancano = riga(R_MANCANO, `Quanto manca è il prezzo meno il salvadanaio: ${prezzo} - ${salvadanaio} scritto dentro console.log, non il risultato.`);
  const rigaSettimane = riga(R_SETTIMANE, `Le settimane sono quanto manca diviso la paghetta: la sottrazione del prezzo meno il salvadanaio va fra parentesi tonde prima di dividere, se no JavaScript divide solo il salvadanaio.`);
  const rigaDopoUnMese = riga(R_DOPO_UN_MESE, `Il prezzo meno quello che c'è dopo un mese; quello che c'è dopo un mese è il salvadanaio più la paghetta per ${SETTIMANE_MESE}, fra parentesi. Se il numero è troppo grande, manca il meno davanti alla parentesi o la parentesi stessa.`);
  const rigaSpesa = riga(R_SPESA, `Quanto si mette via è la paghetta meno la spesa, ${paghetta} - ${spesa} scritto dentro console.log, non ${risparmio} a mano.`);
  const rigaConSpesa = riga(R_CON_SPESA, 'Quanto manca diviso quello che si mette via: due coppie di parentesi, una per la sottrazione del prezzo meno il salvadanaio e una per la paghetta meno la spesa. Senza la seconda coppia JavaScript divide prima e sottrae dopo.');
  const rigaBilancio = riga(R_BILANCIO, `Due conti nella stessa riga: la spesa per ${SETTIMANE_ANNO} e, dopo il testo "€ e metto via", la paghetta meno la spesa fra parentesi per ${SETTIMANE_ANNO}.`);
  const rigaFineAnno = riga(R_FINE_ANNO, `Il salvadanaio più quanto si mette via per ${SETTIMANE_ANNO}: la sottrazione paghetta meno spesa va fra parentesi prima di moltiplicare, la somma con il salvadanaio no.`);

  const fase1 = [rigaSettimana, rigaMese, rigaAnno];
  const fase2 = [...fase1, rigaOggetto, rigaSalvadanaio, rigaMancano];
  const fase3 = [...fase2, rigaSettimane, rigaDopoUnMese];
  const fase4 = [...fase3, rigaSpesa, rigaConSpesa];
  const fase5 = [...fase4, rigaBilancio, rigaFineAnno];

  const CONTI_NON_RISULTATI =
    'Ogni riga è un console.log con più valori separati da virgole: i testi fra virgolette, i numeri senza. I numeri che non sono nei dati della scheda ' +
    `(paghetta ${paghetta}, prezzo ${prezzo}, salvadanaio ${salvadanaio}, spesa ${spesa}, ${SETTIMANE_MESE} settimane al mese e ${SETTIMANE_ANNO} all'anno) escono da un conto scritto dentro console.log su quei dati: non vale il risultato scritto a mano.`;

  const SOL_1 = `// La paghetta
console.log("Paghetta a settimana:", ${paghetta}, "€");
console.log("In un mese:", ${paghetta} * ${SETTIMANE_MESE}, "€");
console.log("In un anno:", ${paghetta} * ${SETTIMANE_ANNO}, "€");`;
  const SOL_2 = `${SOL_1}

// L'obiettivo
console.log("Voglio ${oggetto}: costa", ${prezzo}, "€");
console.log("Nel salvadanaio ho", ${salvadanaio}, "€");
console.log("Mi mancano", ${prezzo} - ${salvadanaio}, "€");`;
  const SOL_3 = `${SOL_2}

// Le settimane che servono
console.log("Settimane che servono:", (${prezzo} - ${salvadanaio}) / ${paghetta});
console.log("Dopo un mese mancano ancora", ${prezzo} - (${salvadanaio} + ${paghetta} * ${SETTIMANE_MESE}), "€");`;
  const SOL_4 = `${SOL_3}

// Se ne spendo una parte
console.log("Se spendo", ${spesa}, "€ a settimana metto via", ${paghetta} - ${spesa}, "€");
console.log("Con la spesa le settimane diventano", (${prezzo} - ${salvadanaio}) / (${paghetta} - ${spesa}));`;
  const SOL_5 = `${SOL_4}

// Il bilancio dell'anno
console.log("In un anno spendo", ${spesa} * ${SETTIMANE_ANNO}, "€ e metto via", (${paghetta} - ${spesa}) * ${SETTIMANE_ANNO}, "€");
console.log("A fine anno nel salvadanaio ho", ${salvadanaio} + (${paghetta} - ${spesa}) * ${SETTIMANE_ANNO}, "€");`;

  return {
    scheda: {
      id: 'paghetta',
      titolo: 'La paghetta',
      lezione: 'Modulo 4 · Lezione 1',
      committente: `${nome} riceve ${paghetta} € di paghetta a settimana e vuole comprarsi ${oggetto}. Prima di decidere quanto spendere vuole i conti chiari: li fa un programma che li stampa in console, uno per riga.`,
      prodotto: 'Un programma che stampa i conti della paghetta con console.log: i dati sono quelli della scheda, ogni altro numero lo calcola JavaScript, con le parentesi al posto giusto.',
      dati: [
        `nome: ${nome}`,
        `paghetta: ${paghetta} € a settimana`,
        `obiettivo: ${oggetto}, ${prezzo} €`,
        `nel salvadanaio: ${salvadanaio} €`,
        `spesa a settimana: ${spesa} €`,
        `un mese: ${SETTIMANE_MESE} settimane, un anno: ${SETTIMANE_ANNO} settimane`,
        `il mese da ${SETTIMANE_MESE} settimane è un arrotondamento: 12 mesi così farebbero solo ${SETTIMANE_MESE * 12} settimane, quindi l'anno si calcola dalla paghetta per ${SETTIMANE_ANNO}, non dal mese per 12`,
      ],
      risultatoFinale: [
        `Quanto mette via ${nome} in una settimana, in un mese e in un anno.`,
        `L'obiettivo «${oggetto}», quanto manca, quante settimane servono e quanto manca ancora dopo un mese.`,
        `Che cosa cambia spendendo ${spesa} € a settimana: le settimane che servono e il bilancio dell'anno.`,
        'Ogni numero che non è nei dati lo calcola JavaScript dentro console.log; almeno tre commenti dividono il codice in parti.',
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Questa è una sfida: la consegna dice che cosa deve comparire in console, i conti li scrivi tu dentro \`console.log\`, come nello scontrino. I dati sono nella scheda; ogni altro numero lo calcola JavaScript.\n1. Stampa tre righe: \`${R_SETTIMANA}\`, \`${R_MESE}\` e \`${R_ANNO}\`.\n2. Un mese sono ${SETTIMANE_MESE} settimane, un anno ${SETTIMANE_ANNO}: mese e anno sono moltiplicazioni sulla paghetta, scritte dentro \`console.log\` senza virgolette. Il mese da ${SETTIMANE_MESE} settimane è un arrotondamento: 12 mesi così farebbero solo ${SETTIMANE_MESE * 12} settimane. Per questo l'anno non è il mese per 12: si calcola dalla paghetta per ${SETTIMANE_ANNO}.\nI valori si separano con le virgole: i testi fra virgolette, i numeri e i conti senza. I testi vanno scritti esatti, due punti compresi.`,
        regola: CONTI_NON_RISULTATI,
        prove: [{ passi: fase1 }],
        codiceIniziale: '// La paghetta\n',
      },
      {
        consegna: `L'obiettivo di ${nome}: ${oggetto}, che costa ${prezzo} €. Nel salvadanaio ci sono già ${salvadanaio} €.\n1. Aggiungi tre righe: \`${R_OGGETTO}\`, \`${R_SALVADANAIO}\` e \`${R_MANCANO}\`.\n2. Quanto manca è il prezzo meno il salvadanaio: la sottrazione va dentro \`console.log\`, non il risultato.\nI prezzi sono numeri, senza virgolette. Le righe di prima restano.`,
        regola: CONTI_NON_RISULTATI,
        prove: [{ passi: fase2 }],
      },
      {
        consegna: `Quante settimane servono? Quanto manca diviso la paghetta: con questi numeri viene intero.\n1. Aggiungi la riga \`${R_SETTIMANE}\`. Non vale scrivere ${mancano} già calcolato: ricopia il conto di quanto manca e dividilo.\n2. Aggiungi la riga \`${R_DOPO_UN_MESE}\`: il prezzo meno quello che c'è dopo un mese, cioè il salvadanaio più ${SETTIMANE_MESE} paghette.\nLe parentesi contano: una somma o una sottrazione che va fatta prima si mette fra parentesi tonde, se no JavaScript fa prima la divisione o la moltiplicazione.`,
        regola: `${CONTI_NON_RISULTATI} Le settimane sono la sottrazione prezzo meno salvadanaio fra parentesi, divisa per la paghetta. I soldi che mancano dopo un mese si calcolano su prezzo, salvadanaio, paghetta e ${SETTIMANE_MESE}: va bene qualunque conto equivalente, per esempio il prezzo meno, fra parentesi, il salvadanaio più la paghetta per ${SETTIMANE_MESE}, oppure il prezzo meno il salvadanaio meno la paghetta per ${SETTIMANE_MESE}. Non vale un risultato già calcolato a mano.`,
        prove: [{ passi: fase3 }],
      },
      {
        consegna: `Mettere via tutto è dura: ${nome} ogni settimana spende ${spesa} € e mette via il resto.\n1. Aggiungi la riga \`${R_SPESA}\`: quanto mette via è la paghetta meno la spesa.\n2. Aggiungi la riga \`${R_CON_SPESA}\`: quanto manca diviso quello che mette via.\nQui le parentesi servono due volte nella stessa divisione: una coppia per quanto manca, una per quanto mette via. Le righe di prima restano.`,
        regola: `${CONTI_NON_RISULTATI} Le nuove settimane sono una divisione con due coppie di parentesi: (prezzo meno salvadanaio) diviso (paghetta meno spesa).`,
        prove: [{ passi: fase4 }],
      },
      {
        consegna: `L'ultimo conto è il bilancio dell'anno, spendendo sempre ${spesa} € a settimana.\n1. Aggiungi la riga \`${R_BILANCIO}\`: la spesa per ${SETTIMANE_ANNO} e quello che mette via per ${SETTIMANE_ANNO}, due conti nella stessa riga.\n2. Aggiungi la riga \`${R_FINE_ANNO}\`: il salvadanaio più quello che mette via in un anno.\n3. Dividi il codice in parti con **almeno tre commenti** (\`//\`), per esempio la paghetta, l'obiettivo, la spesa.\nNel codice i soli numeri scritti a mano sono i dati della scheda, più ${SETTIMANE_MESE} e ${SETTIMANE_ANNO}: tutto il resto lo calcola JavaScript.`,
        regola: `${CONTI_NON_RISULTATI} Nel bilancio quanto si mette via è (paghetta meno spesa) fra parentesi, moltiplicato per ${SETTIMANE_ANNO}. Ci sono almeno tre commenti che dividono il codice in parti.`,
        almenoCommenti: 3,
        prove: [{ passi: fase5 }],
      },
    ],
    soluzioni: [SOL_1, SOL_2, SOL_3, SOL_4, SOL_5],
  };
}
