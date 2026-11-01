/* Sfida · La spesa della gita (Modulo 4, lezione 7).
 * Più difficile del normale: le consegne dicono che cosa deve scrivere la pagina, i conti li
 * scompone l'allievo. Quattro caselle lette con .value e Number(), un solo pulsante che riempie
 * quattro paragrafi: il totale (pullman + biglietto * partecipanti, con la trappola del + in
 * agguato), la quota tonda a testa (si toglie il resto % e poi si divide: servono le parentesi),
 * quanto avanza (if sul resto), se i soldi raccolti bastano (if, else if, else, con la
 * differenza nel verso giusto) e lo sconto di gruppo (if sui partecipanti, che cambia il totale
 * su cui si fanno tutti gli altri conti). Gli elementi stanno in variabili in cima al codice
 * (Lezione 4), ma il .value si legge dentro la funzione. I casi di prova sono costruiti dal seme:
 * uno sotto la soglia con la divisione che non torna, uno esattamente alla soglia con la
 * divisione esatta, uno nascosto sopra la soglia. Tutti i conti restano interi. */
import { clic, CSS_BASE, scrivi, testo } from './aiuti';
import { generatore, intero, REGOLE, scegli, type Compito } from './tipi';

const METE = [
  { citta: 'Venezia', visita: 'a Palazzo Ducale' },
  { citta: 'Firenze', visita: 'agli Uffizi' },
  { citta: 'Torino', visita: 'al Museo Egizio' },
  { citta: 'Genova', visita: "all'Acquario" },
  { citta: 'Milano', visita: 'al Museo della Scienza' },
  { citta: 'Napoli', visita: 'al Museo Archeologico' },
  { citta: 'Trieste', visita: 'al Castello di Miramare' },
  { citta: 'Roma', visita: 'al Colosseo' },
] as const;

const CLASSI = ['2A', '2B', '2C', '3A', '3B', '3C'] as const;

/** Che cosa si scrive nelle caselle in una prova. */
interface Caso {
  pullman: number;
  partecipanti: number;
  biglietto: number;
}

export function generaGita(seme: number): Compito {
  const rnd = generatore(seme);
  const meta = scegli(rnd, METE);
  const classe = scegli(rnd, CLASSI);
  const soglia = scegli(rnd, [20, 24, 25] as const);
  const sconto = scegli(rnd, [1, 2, 3] as const);

  /* Il caso A: sotto la soglia, la divisione non torna (avanzano rA euro).
   * Il pullman è partecipanti * kA + rA, così totale % partecipanti = rA e la quota è kA + biglietto. */
  const biglietto = intero(rnd, 6, 12);
  const nA = intero(rnd, 15, soglia - 2);
  const kA = intero(rnd, 25, 40);
  const rA = intero(rnd, 2, nA - 1);
  const casoA: Caso = { pullman: nA * kA + rA, partecipanti: nA, biglietto };
  /* Il caso B: esattamente alla soglia (si prova il >=), la divisione è esatta. */
  const kB = intero(rnd, 25, 40);
  const casoB: Caso = { pullman: soglia * kB, partecipanti: soglia, biglietto };
  /* Il caso C, nascosto: sopra la soglia, con un altro biglietto e il pullman del caso A. */
  const casoC: Caso = { pullman: casoA.pullman, partecipanti: soglia + intero(rnd, 2, 6), biglietto: intero(rnd, 5, 13) };
  /* Quanto manca o quanto c'è in più nella cassa, nelle prove. */
  const mancano = intero(rnd, 20, 90);
  const inPiu = intero(rnd, 10, 60);

  /* I conti veri, per le prove: con lo sconto solo dalla fase 5. */
  const totale = (c: Caso, conSconto: boolean) => c.pullman + (conSconto && c.partecipanti >= soglia ? c.biglietto - sconto : c.biglietto) * c.partecipanti;
  const resto = (c: Caso, conSconto: boolean) => totale(c, conSconto) % c.partecipanti;
  const quota = (c: Caso, conSconto: boolean) => (totale(c, conSconto) - resto(c, conSconto)) / c.partecipanti;
  const scontato = (c: Caso, conSconto: boolean) => conSconto && c.partecipanti >= soglia;
  const fraseTotale = (c: Caso, conSconto: boolean) => `Totale: ${totale(c, conSconto)} €${scontato(c, conSconto) ? ' (biglietto scontato)' : ''}`;
  const fraseQuota = (c: Caso, conSconto: boolean) => `A testa: ${quota(c, conSconto)} €`;
  const fraseAvanzo = (c: Caso, conSconto: boolean) => (resto(c, conSconto) === 0 ? 'Non avanza niente' : `Avanzano ${resto(c, conSconto)} €`);
  const fraseCassa = (c: Caso, conSconto: boolean, raccolti: number) => {
    const t = totale(c, conSconto);
    if (raccolti < t) return `Mancano ${t - raccolti} €`;
    if (raccolti > t) return `Ci sono ${raccolti - t} € in più`;
    return 'Bastano giusti';
  };

  const html = `<h1>🚌 La gita a ${meta.citta}</h1>
<label>Pullman (€): <input id="pullman" type="number" value="0"></label>
<label>Partecipanti: <input id="partecipanti" type="number" value="1"></label>
<label>Biglietto del museo (€): <input id="biglietto" type="number" value="0"></label>
<label>Soldi raccolti (€): <input id="raccolti" type="number" value="0"></label>
<button id="btnCalcola">Calcola</button>
<p id="totale"></p>
<p id="quota"></p>
<p id="avanzo"></p>
<p id="cassa"></p>`;

  /* ------------------------------------------------------------ i passi delle prove */

  const compila = (c: Caso, raccolti?: number) => [
    scrivi('pullman', String(c.pullman), 'Pullman (€)'),
    scrivi('partecipanti', String(c.partecipanti), 'Partecipanti'),
    scrivi('biglietto', String(c.biglietto), 'Biglietto del museo (€)'),
    ...(raccolti === undefined ? [] : [scrivi('raccolti', String(raccolti), 'Soldi raccolti (€)')]),
    clic('btnCalcola', 'Calcola'),
  ];
  const nome = (c: Caso, raccolti?: number) => `con pullman ${c.pullman} €, ${c.partecipanti} partecipanti e biglietto ${c.biglietto} €${raccolti === undefined ? '' : `, raccolti ${raccolti} €`}`;

  const controlloTotale = (c: Caso, conSconto: boolean, hint: string) => testo('totale', fraseTotale(c, conSconto), `Il totale dice «${fraseTotale(c, conSconto)}»`, hint);
  const controlloQuota = (c: Caso, conSconto: boolean, hint: string) => testo('quota', fraseQuota(c, conSconto), `La quota dice «${fraseQuota(c, conSconto)}»`, hint);
  const controlloAvanzo = (c: Caso, conSconto: boolean, hint: string) => testo('avanzo', fraseAvanzo(c, conSconto), `L'avanzo dice «${fraseAvanzo(c, conSconto)}»`, hint);
  const controlloCassa = (c: Caso, conSconto: boolean, raccolti: number, hint: string) => testo('cassa', fraseCassa(c, conSconto, raccolti), `La cassa dice «${fraseCassa(c, conSconto, raccolti)}»`, hint);

  const HINT_TRAPPOLA = 'Se il numero è lungo e strano, è la trappola del +: il pullman letto con .value è un testo e si attacca al resto. Metti Number() intorno a ogni .value e fai il conto in una variabile prima di scriverlo.';
  const HINT_QUOTA = 'La quota tonda: prima il resto (totale % partecipanti), poi (totale - resto) / partecipanti, con le parentesi. Senza parentesi si divide solo il resto.';
  const HINT_SCONTO = `Da ${soglia} partecipanti in su (>=) il biglietto costa ${sconto} € in meno: lo decide un if sui partecipanti, prima di calcolare il totale o subito dopo, togliendo ${sconto} € per partecipante.`;

  const casoAPiu = totale(casoA, false) + inPiu;
  const casoAMeno = totale(casoA, false) - mancano;

  /* -------------------------------------------------------------------- soluzioni */

  const ELEMENTI = `let casellaPullman = document.getElementById("pullman");
let casellaPartecipanti = document.getElementById("partecipanti");
let casellaBiglietto = document.getElementById("biglietto");
let tastoCalcola = document.getElementById("btnCalcola");
let paragrafoTotale = document.getElementById("totale");`;
  const EL_QUOTA = 'let paragrafoQuota = document.getElementById("quota");';
  const EL_AVANZO = 'let paragrafoAvanzo = document.getElementById("avanzo");';
  const EL_CASSA = `let casellaRaccolti = document.getElementById("raccolti");
let paragrafoCassa = document.getElementById("cassa");`;
  const LEGGI = `  let pullman = Number(casellaPullman.value);
  let partecipanti = Number(casellaPartecipanti.value);
  let biglietto = Number(casellaBiglietto.value);`;
  const TOTALE = `  let totale = pullman + biglietto * partecipanti;
  paragrafoTotale.innerHTML = "Totale: " + totale + " €";`;
  const TOTALE_SCONTO = `  let totale = pullman + biglietto * partecipanti;
  if (partecipanti >= ${soglia}) {
    totale = totale - ${sconto} * partecipanti;
    paragrafoTotale.innerHTML = "Totale: " + totale + " € (biglietto scontato)";
  } else {
    paragrafoTotale.innerHTML = "Totale: " + totale + " €";
  }`;
  const QUOTA = `  let resto = totale % partecipanti;
  let quota = (totale - resto) / partecipanti;
  paragrafoQuota.innerHTML = "A testa: " + quota + " €";`;
  const AVANZO = `  if (resto === 0) {
    paragrafoAvanzo.innerHTML = "Non avanza niente";
  } else {
    paragrafoAvanzo.innerHTML = "Avanzano " + resto + " €";
  }`;
  const CASSA = `  if (raccolti < totale) {
    let mancano = totale - raccolti;
    paragrafoCassa.innerHTML = "Mancano " + mancano + " €";
  } else if (raccolti > totale) {
    let inPiu = raccolti - totale;
    paragrafoCassa.innerHTML = "Ci sono " + inPiu + " € in più";
  } else {
    paragrafoCassa.innerHTML = "Bastano giusti";
  }`;
  const COLLEGA = 'tastoCalcola.addEventListener("click", calcola);';

  return {
    scheda: {
      id: 'gita',
      titolo: 'La spesa della gita',
      lezione: 'Modulo 4 · Lezione 7',
      committente: `La ${classe} organizza la gita a ${meta.citta}, con la visita ${meta.visita}. Il rappresentante di classe vuole una pagina in cui scrivere i costi e i partecipanti e leggere subito il totale, la quota a testa e se i soldi raccolti bastano.`,
      prodotto: 'Una pagina che legge quattro caselle, fa i conti con + * / % e scrive quattro righe: il totale, la quota tonda a testa, quanto avanza e se la cassa basta.',
      dati: [
        `meta: ${meta.citta}, visita ${meta.visita}`,
        `sconto di gruppo: da ${soglia} partecipanti in su il biglietto costa ${sconto} € in meno`,
        `esempio: pullman ${casoA.pullman} €, ${casoA.partecipanti} partecipanti, biglietto ${casoA.biglietto} €`,
      ],
      risultatoFinale: [
        `«Calcola» legge le caselle e scrive il totale (pullman più un biglietto a partecipante): con l'esempio, «${fraseTotale(casoA, false)}».`,
        `Sotto, la quota tonda a testa («${fraseQuota(casoA, false)}») e quanto avanza nella cassa («${fraseAvanzo(casoA, false)}»); poi se i soldi raccolti bastano: «Mancano N €», «Ci sono N € in più» o «Bastano giusti».`,
        `Da ${soglia} partecipanti in su il biglietto è scontato di ${sconto} €: il totale lo dice, e tutti gli altri conti seguono.`,
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Questa è una sfida: la consegna dice che cosa deve scrivere la pagina, il codice lo decidi tu.\n1. **In cima al codice, sopra la funzione**, metti in una variabile ogni elemento che usi (Lezione 4): le tre caselle, il pulsante e il paragrafo. Il \`.value\` però si legge **dentro** la funzione, al clic: fuori lo leggeresti una volta sola, a pagina vuota.\n2. Il pulsante **Calcola** (id \`btnCalcola\`) legge le caselle del pullman (id \`pullman\`), dei partecipanti (id \`partecipanti\`) e del biglietto (id \`biglietto\`), e scrive nel paragrafo del totale (id \`totale\`) \`Totale: N €\`. N è il costo del pullman più un biglietto per ogni partecipante. Per esempio, con pullman ${casoA.pullman}, ${casoA.partecipanti} partecipanti e biglietto ${casoA.biglietto}: ${casoA.pullman} + ${casoA.biglietto} × ${casoA.partecipanti} = ${totale(casoA, false)}, quindi \`${fraseTotale(casoA, false)}\`.\n**Attenzione alla trappola del +.** Il \`.value\` è un testo: senza \`Number()\` il pullman si **attacca** al resto invece di sommarsi, e con 0 € di pullman leggi \`0${casoA.biglietto * casoA.partecipanti}\`. Fai il conto in una variabile, poi scrivila nel testo.`,
        regola: `${REGOLE.treGesti} ${REGOLE.elementiInVariabili} ${REGOLE.datiDalleCaselle} Il totale è un calcolo sui tre numeri letti (pullman + biglietto * partecipanti), fatto in una variabile.`,
        elementiInAlto: true,
        prove: [
          {
            nome: nome(casoA),
            passi: [...compila(casoA), controlloTotale(casoA, false, 'Leggi le tre caselle con Number(...value) dentro la funzione, calcola pullman + biglietto * partecipanti in una variabile e scrivila nel paragrafo del totale, con " €" alla fine.')],
          },
          {
            nome: nome(casoB),
            passi: [...compila(casoB), controlloTotale(casoB, false, 'I numeri devono venire dalle caselle, letti al clic: se il totale non cambia con altri valori, leggi .value fuori dalla funzione o hai scritto i numeri a mano.')],
          },
          {
            nome: 'con il pullman a 0 € (lo paga la scuola)',
            passi: [...compila({ ...casoA, pullman: 0 }), controlloTotale({ ...casoA, pullman: 0 }, false, HINT_TRAPPOLA)],
          },
        ],
        codiceIniziale: '// 1. Gli elementi, in variabili\n\n// 2. La funzione del pulsante Calcola\n\n// 3. Il collegamento\n',
      },
      {
        consegna: `Sotto il totale, la quota a testa: il paragrafo della quota (id \`quota\`) dice \`A testa: Q €\`.\nQ è un numero **tondo** di euro: ognuno paga la stessa cifra e i pochi euro che avanzano restano nella cassa di classe. Per averlo, togli dal totale il resto della divisione per i partecipanti (\`%\`), poi dividi per i partecipanti. Con l'esempio: ${totale(casoA, false)} % ${casoA.partecipanti} = ${resto(casoA, false)}, poi (${totale(casoA, false)} - ${resto(casoA, false)}) / ${casoA.partecipanti} = ${quota(casoA, false)}, quindi \`${fraseQuota(casoA, false)}\`.\nOcchio alle parentesi: la sottrazione va fatta **prima** della divisione.\nIl totale resta come nella fase 1.`,
        regola: `${REGOLE.treGesti} ${REGOLE.elementiInVariabili} ${REGOLE.datiDalleCaselle} La quota tonda viene dal resto (%) e da una divisione sul totale calcolato, come dice la consegna: non da un numero scritto a mano.`,
        elementiInAlto: true,
        prove: [
          {
            nome: nome(casoA),
            passi: [...compila(casoA), controlloTotale(casoA, false, 'Il totale resta come nella fase 1.'), controlloQuota(casoA, false, HINT_QUOTA)],
          },
          {
            nome: nome(casoB),
            passi: [...compila(casoB), controlloQuota(casoB, false, 'Qui il totale si divide esattamente: il resto è 0 e la quota è il totale diviso i partecipanti. Il paragrafo si chiama «quota» e il testo comincia con "A testa: ".')],
          },
          {
            nome: nome(casoC),
            passi: [...compila(casoC), controlloQuota(casoC, false, 'Se la quota ha la virgola, non hai tolto il resto prima di dividere: (totale - totale % partecipanti) / partecipanti.')],
          },
        ],
      },
      {
        consegna: `Il paragrafo dell'avanzo (id \`avanzo\`) dice quanto resta nella cassa dopo che tutti hanno pagato la quota tonda: \`Avanzano R €\`, dove R è il resto della fase 2. Se il resto è 0, dice invece \`Non avanza niente\`.\nLa scelta fra i due testi la fa un if con else. Totale e quota restano come prima.`,
        regola: `${REGOLE.treGesti} ${REGOLE.elementiInVariabili} ${REGOLE.datiDalleCaselle} La scelta fra i due testi la fa un if sul resto della divisione (%), confrontato con 0.`,
        elementiInAlto: true,
        prove: [
          {
            nome: nome(casoA),
            passi: [...compila(casoA), controlloQuota(casoA, false, 'La quota resta come nella fase 2.'), controlloAvanzo(casoA, false, 'Il resto che hai già calcolato per la quota va nel paragrafo «avanzo»: "Avanzano " + resto + " €".')],
          },
          {
            nome: nome(casoB),
            passi: [...compila(casoB), controlloAvanzo(casoB, false, 'Quando il resto è 0 il paragrafo dice «Non avanza niente»: un if (resto === 0) con else.')],
          },
          {
            nome: nome(casoC),
            passi: [...compila(casoC), controlloAvanzo(casoC, false, 'Il testo deve seguire il resto, ricalcolato a ogni clic dai numeri delle caselle.')],
          },
        ],
      },
      {
        consegna: `La classe ha già raccolto dei soldi: la casella dei soldi raccolti (id \`raccolti\`). Calcola la legge e scrive nel paragrafo della cassa (id \`cassa\`) uno di tre testi:\n- \`Mancano N €\`, se i soldi raccolti sono **meno** del totale;\n- \`Ci sono N € in più\`, se sono **più** del totale;\n- \`Bastano giusti\`, se sono uguali.\nN è la differenza fra i due, sempre positiva: attento all'ordine della sottrazione nei due casi. Servono if, else if ed else (Lezione 6). Il resto della pagina non cambia.`,
        regola: `${REGOLE.treGesti} ${REGOLE.elementiInVariabili} ${REGOLE.datiDalleCaselle} I tre testi li sceglie un if con else if ed else, confrontando i soldi raccolti letti dalla casella con il totale calcolato; la differenza è un calcolo, non un numero scritto a mano.`,
        elementiInAlto: true,
        prove: [
          {
            nome: nome(casoA, casoAMeno),
            passi: [...compila(casoA, casoAMeno), controlloTotale(casoA, false, 'Il totale resta come prima.'), controlloCassa(casoA, false, casoAMeno, 'Se i soldi raccolti sono meno del totale: "Mancano " + (totale - raccolti) + " €". Se leggi NaN, la sottrazione è finita dentro il testo: calcolala prima in una variabile.')],
          },
          {
            nome: nome(casoA, casoAPiu),
            passi: [...compila(casoA, casoAPiu), controlloCassa(casoA, false, casoAPiu, 'Se i soldi raccolti sono più del totale, la differenza è raccolti - totale: "Ci sono " + differenza + " € in più".')],
          },
          {
            nome: nome(casoB, totale(casoB, false)),
            passi: [...compila(casoB, totale(casoB, false)), controlloCassa(casoB, false, totale(casoB, false), 'Quando raccolti e totale sono uguali, il paragrafo dice «Bastano giusti»: è il ramo else.')],
          },
          {
            nome: nome(casoC, 0),
            passi: [...compila(casoC, 0), controlloCassa(casoC, false, 0, 'Con 0 € raccolti manca tutto il totale. I soldi raccolti devono venire dalla casella «raccolti», letta con Number(...value) dentro la funzione.')],
          },
        ],
      },
      {
        consegna: `Il museo fa lo sconto di gruppo: da ${soglia} partecipanti in su (\`>=\`) il biglietto costa ${sconto} € in meno a testa.\n1. Quando lo sconto vale, il paragrafo del totale dice \`Totale: N € (biglietto scontato)\`, con N già scontato. Con meno di ${soglia} partecipanti resta \`Totale: N €\`, come prima.\n2. Quota, avanzo e cassa si calcolano sul totale **scontato**: devono tornare anche loro.\nCome scomporre il conto lo decidi tu: puoi abbassare il prezzo del biglietto prima di calcolare il totale, oppure togliere dal totale ${sconto} € per ogni partecipante. Con pullman ${casoB.pullman}, ${casoB.partecipanti} partecipanti e biglietto ${casoB.biglietto}: ${casoB.pullman} + (${casoB.biglietto} - ${sconto}) × ${casoB.partecipanti} = ${totale(casoB, true)}, quindi \`${fraseTotale(casoB, true)}\`.`,
        regola: `${REGOLE.treGesti} ${REGOLE.elementiInVariabili} ${REGOLE.datiDalleCaselle} Lo sconto lo decide un if sul numero di partecipanti letto dalla casella (>= ${soglia}); il totale scontato è un calcolo e su quello si fanno quota, avanzo e cassa.`,
        elementiInAlto: true,
        prove: [
          {
            nome: nome(casoB, totale(casoB, true) - mancano),
            passi: [
              ...compila(casoB, totale(casoB, true) - mancano),
              controlloTotale(casoB, true, HINT_SCONTO),
              controlloQuota(casoB, true, 'La quota si calcola sul totale scontato: lo sconto va tolto prima di dividere.'),
              controlloAvanzo(casoB, true, 'Anche il resto si calcola sul totale scontato.'),
              controlloCassa(casoB, true, totale(casoB, true) - mancano, 'Anche la cassa confronta i soldi raccolti con il totale scontato: se dice che mancano più soldi, stai usando il totale pieno.'),
            ],
          },
          {
            nome: nome(casoA, casoAPiu),
            passi: [
              ...compila(casoA, casoAPiu),
              controlloTotale(casoA, false, `Sotto i ${soglia} partecipanti niente sconto: il testo resta «Totale: N €», senza parentesi.`),
              controlloQuota(casoA, false, 'Senza sconto la quota resta quella della fase 2.'),
              controlloCassa(casoA, false, casoAPiu, 'Senza sconto la cassa si confronta con il totale pieno.'),
            ],
          },
          {
            nome: nome(casoC, totale(casoC, true) + inPiu),
            passi: [
              ...compila(casoC, totale(casoC, true) + inPiu),
              controlloTotale(casoC, true, `Anche sopra i ${soglia} partecipanti lo sconto vale: il confronto è >= ${soglia}, e lo sconto è ${sconto} € per ogni partecipante, non ${sconto} € in tutto.`),
              controlloQuota(casoC, true, 'Quota sul totale scontato: togli il resto e dividi, come nella fase 2.'),
              controlloAvanzo(casoC, true, 'Il resto si calcola sul totale scontato.'),
              controlloCassa(casoC, true, totale(casoC, true) + inPiu, 'La cassa si confronta con il totale scontato.'),
            ],
          },
        ],
      },
    ],
    soluzioni: [
      `${ELEMENTI}

function calcola() {
${LEGGI}
${TOTALE}
}

${COLLEGA}`,
      `${ELEMENTI}
${EL_QUOTA}

function calcola() {
${LEGGI}
${TOTALE}
${QUOTA}
}

${COLLEGA}`,
      `${ELEMENTI}
${EL_QUOTA}
${EL_AVANZO}

function calcola() {
${LEGGI}
${TOTALE}
${QUOTA}
${AVANZO}
}

${COLLEGA}`,
      `${ELEMENTI}
${EL_QUOTA}
${EL_AVANZO}
${EL_CASSA}

function calcola() {
${LEGGI}
  let raccolti = Number(casellaRaccolti.value);
${TOTALE}
${QUOTA}
${AVANZO}
${CASSA}
}

${COLLEGA}`,
      `${ELEMENTI}
${EL_QUOTA}
${EL_AVANZO}
${EL_CASSA}

function calcola() {
${LEGGI}
  let raccolti = Number(casellaRaccolti.value);
${TOTALE_SCONTO}
${QUOTA}
${AVANZO}
${CASSA}
}

${COLLEGA}`,
    ],
  };
}
