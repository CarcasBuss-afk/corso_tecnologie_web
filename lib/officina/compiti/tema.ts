/* Sfida · Il tema chiaro e scuro (Modulo 4, lezione 5).
 * Più difficile della lampada: ogni pulsante coordina più elementi in una funzione sola (lo
 * sfondo del riquadro, il colore di titolo e paragrafo, il testo dello stato), le consegne
 * dicono che cosa deve fare la pagina e non riga per riga come, e gli elementi stanno in
 * variabili in cima al codice fin dalla prima fase (Lezione 4). Dove la consegna dà il colore
 * esatto si controlla esatto; dove dice «chiaro» o «scuro» vale qualunque colore ragionevole.
 * In fondo il colore a scelta chiede due prompt e li usa sia nello stile sia nel testo. */
import { clic, CSS_BASE, domandaFatta, risposte, stile, testo } from './aiuti';
import type { Controllo } from '../motore/tipi';
import { generatore, intero, REGOLE, scegli, type Compito } from './tipi';

const SITI = [
  { nome: 'Il blog di Giulia', frase: 'Racconti e foto dai miei viaggi in bicicletta.' },
  { nome: 'Gelateria Polo Nord', frase: 'Trenta gusti, tutti fatti in casa ogni mattina.' },
  { nome: 'Libreria Il Segnalibro', frase: 'Libri nuovi e usati, consigli per ogni lettore.' },
  { nome: 'Fumetteria Nuvola', frase: 'Manga, fumetti e giochi da tavolo in via Roma.' },
  { nome: 'Skate Shop Ruota Libera', frase: 'Tavole, ruote e protezioni per chi non sta mai fermo.' },
  { nome: 'Il blog di Omar', frase: 'Ricette veloci per chi torna tardi da scuola.' },
  { nome: 'Pasticceria Dolce Vita', frase: 'Torte su ordinazione e colazioni dalle sette.' },
  { nome: 'Palestra Energia', frase: 'Corsi per ragazzi ogni pomeriggio, prova gratis.' },
] as const;

/** Gli sfondi del tema scuro: la consegna ne dà uno esatto. */
const SFONDI_SCURI = ['#222', '#1e1e2f', 'black', 'navy', '#333', 'midnightblue', '#2c3e50', 'darkslategray'] as const;

/** Famiglie locali: «chiaro», «scuro» e «bianco» a parole, e vale qualunque colore ragionevole. */
const CHIARI = [
  'white', '#fff', '#ffffff', '#eee', '#eeeeee', '#f0f0f0', '#fafafa', '#f5f5f5', '#f8f8f8', '#ddd', '#dddddd', '#ccc', '#cccccc',
  'whitesmoke', 'snow', 'ivory', 'lightgray', 'lightgrey', 'gainsboro', 'silver', 'lightyellow', 'beige', 'floralwhite', 'ghostwhite',
  'aliceblue', 'honeydew', 'linen', 'seashell', 'mintcream', 'azure', 'lavender', 'oldlace', 'lemonchiffon', 'cornsilk', 'antiquewhite', 'wheat',
];
const SCURI = [
  'black', '#000', '#000000', '#111', '#111111', '#121212', '#1a1a1a', '#1e1e2f', '#212121', '#222', '#222222', '#2c3e50', '#333', '#333333',
  '#444', '#444444', '#555', '#555555', 'navy', 'midnightblue', 'darkslategray', 'darkslategrey', 'dimgray', 'dimgrey', 'darkblue', 'indigo', 'maroon', 'darkgreen', 'darkred',
];
const BIANCHI = ['white', '#fff', '#ffffff', '#fafafa', '#f8f8f8', '#f5f5f5', '#fefefe', 'whitesmoke', 'snow', 'ivory', 'ghostwhite', 'floralwhite'];

/** Un controllo di stile su una famiglia locale, con il nome a parole della famiglia. */
const stileFamiglia = (id: string, proprieta: string, famiglia: string[], atteso: string, descrizione: string, hint: string): Controllo => ({
  controlla: 'stile',
  di: `#${id}`,
  proprieta,
  valore: famiglia,
  atteso,
  descrizione,
  hint,
});

const INIZIO = 'Scegli un tema.';
const SCURO = 'Tema attivo: scuro';
const CHIARO = 'Tema attivo: chiaro';

export function generaTema(seme: number): Compito {
  const rnd = generatore(seme);
  const sito = scegli(rnd, SITI);
  const sfondoScuro = scegli(rnd, SFONDI_SCURI);
  const grande = intero(rnd, 26, 32);
  const piccolo = intero(rnd, 14, 17);
  const titoloGrande = grande + 16;
  const titoloPiccolo = piccolo + 10;

  const aScelta = (colore: string) => `Tema attivo: ${colore}`;
  const aSceltaDue = (sfondo: string, colore: string) => `Tema attivo: sfondo ${sfondo}, testo ${colore}`;

  const html = `<div id="card">
  <h1 id="titolo">${sito.nome}</h1>
  <p id="testo">${sito.frase}</p>
</div>
<div>
  <button id="btnScuro">Tema scuro</button>
  <button id="btnChiaro">Tema chiaro</button>
  <button id="btnGrande">Testo grande</button>
  <button id="btnPiccolo">Testo piccolo</button>
  <button id="btnColore">Colore a scelta</button>
</div>
<p id="stato">${INIZIO}</p>`;

  const css = `${CSS_BASE}

#card {
  background-color: white;
  color: #222;
  max-width: 420px;
  margin: 0 auto 20px;
  padding: 30px;
  border: 2px solid #ddd;
  border-radius: 15px;
}`;

  /* ----------------------------------------------------------------- i passi */
  const scuro = () => clic('btnScuro', 'Tema scuro');
  const chiaro = () => clic('btnChiaro', 'Tema chiaro');
  const grandeClic = () => clic('btnGrande', 'Testo grande');
  const piccoloClic = () => clic('btnPiccolo', 'Testo piccolo');
  const colore = () => clic('btnColore', 'Colore a scelta');

  const statoDice = (frase: string, hint: string) => testo('stato', frase, `Lo stato dice «${frase}»`, hint);
  const cardScura = (hint: string) => stile('card', 'backgroundColor', sfondoScuro, `Il riquadro ha lo sfondo ${sfondoScuro}`, hint);
  const titoloChiaro = (hint: string) => stileFamiglia('titolo', 'color', CHIARI, 'un colore chiaro', 'Il titolo è scritto in un colore chiaro', hint);
  const testoChiaro = (hint: string) => stileFamiglia('testo', 'color', CHIARI, 'un colore chiaro', 'Il paragrafo è scritto in un colore chiaro', hint);
  const cardBianca = (descrizione: string, hint: string) => stileFamiglia('card', 'backgroundColor', BIANCHI, 'bianco, come all\'inizio', descrizione, hint);
  const titoloScuro = (hint: string) => stileFamiglia('titolo', 'color', SCURI, 'un colore scuro, come all\'inizio', 'Il titolo è di nuovo scuro', hint);
  const testoScuro = (hint: string) => stileFamiglia('testo', 'color', SCURI, 'un colore scuro, come all\'inizio', 'Il paragrafo è di nuovo scuro', hint);
  const misura = (id: 'testo' | 'titolo', px: number, hint: string) =>
    stile(id, 'fontSize', `${px}px`, `${id === 'testo' ? 'Il paragrafo' : 'Il titolo'} è a ${px}px`, hint);

  const temaScuroOk = [
    cardScura('Lo sfondo del riquadro si cambia con style.backgroundColor, con il valore esatto della consegna fra virgolette.'),
    titoloChiaro('Il colore del testo si cambia con style.color: anche il titolo, che ha il suo colore nel CSS e non lo eredita dal riquadro.'),
    testoChiaro('Anche il paragrafo con id «testo» va schiarito con style.color, nella stessa funzione.'),
    statoDice(SCURO, 'Nella stessa funzione cambia l\'innerHTML del paragrafo con id «stato», con il testo esatto.'),
  ];
  const temaChiaroOk = [
    cardBianca('Il riquadro è di nuovo bianco', 'Nella funzione di Tema chiaro rimetti lo sfondo di partenza (white) con style.backgroundColor.'),
    titoloScuro('Il titolo torna scuro con style.color: il valore di partenza è nel CSS (#333), ma va bene qualunque colore scuro.'),
    testoScuro('Anche il paragrafo torna scuro con style.color (nel CSS è #222).'),
    statoDice(CHIARO, 'Anche Tema chiaro aggiorna lo stato, con il suo testo.'),
  ];

  /* ------------------------------------------------------------- le soluzioni */
  const IN_ALTO = `let riquadro = document.getElementById("card");
let titolo = document.getElementById("titolo");
let paragrafo = document.getElementById("testo");
let stato = document.getElementById("stato");`;
  const TASTI = [
    'let tastoScuro = document.getElementById("btnScuro");',
    'let tastoChiaro = document.getElementById("btnChiaro");',
    'let tastoGrande = document.getElementById("btnGrande");',
    'let tastoPiccolo = document.getElementById("btnPiccolo");',
    'let tastoColore = document.getElementById("btnColore");',
  ];
  const TEMA_SCURO = `function temaScuro() {
  riquadro.style.backgroundColor = "${sfondoScuro}";
  titolo.style.color = "white";
  paragrafo.style.color = "white";
  stato.innerHTML = "${SCURO}";
}`;
  const TEMA_CHIARO = `function temaChiaro() {
  riquadro.style.backgroundColor = "white";
  titolo.style.color = "#333";
  paragrafo.style.color = "#222";
  stato.innerHTML = "${CHIARO}";
}`;
  const TESTO_GRANDE = `function testoGrande() {
  paragrafo.style.fontSize = "${grande}px";
  titolo.style.fontSize = "${titoloGrande}px";
}`;
  const TESTO_PICCOLO = `function testoPiccolo() {
  paragrafo.style.fontSize = "${piccolo}px";
  titolo.style.fontSize = "${titoloPiccolo}px";
}`;
  const COLORE_UNO = `function coloreAScelta() {
  let sfondo = prompt("Che colore vuoi per lo sfondo? (in inglese)");
  riquadro.style.backgroundColor = sfondo;
  stato.innerHTML = "Tema attivo: " + sfondo;
}`;
  const COLORE_DUE = `function coloreAScelta() {
  let sfondo = prompt("Che colore vuoi per lo sfondo? (in inglese)");
  let colore = prompt("E per il testo?");
  riquadro.style.backgroundColor = sfondo;
  titolo.style.color = colore;
  paragrafo.style.color = colore;
  stato.innerHTML = "Tema attivo: sfondo " + sfondo + ", testo " + colore;
}`;
  const COLLEGA = [
    'tastoScuro.addEventListener("click", temaScuro);',
    'tastoChiaro.addEventListener("click", temaChiaro);',
    'tastoGrande.addEventListener("click", testoGrande);',
    'tastoPiccolo.addEventListener("click", testoPiccolo);',
    'tastoColore.addEventListener("click", coloreAScelta);',
  ];
  const soluzione = (quantiTasti: number, funzioni: string[]) =>
    `${IN_ALTO}\n${TASTI.slice(0, quantiTasti).join('\n')}\n\n${funzioni.join('\n\n')}\n\n${COLLEGA.slice(0, quantiTasti).join('\n')}`;

  return {
    scheda: {
      id: 'tema',
      titolo: 'Il tema chiaro e scuro',
      lezione: 'Modulo 4 · Lezione 5',
      committente: `Il sito «${sito.nome}» vuole farsi leggere anche di sera: chiede un tema scuro e uno chiaro, il testo più grande o più piccolo e, per chi vuole, i colori a scelta.`,
      prodotto: 'Una pagina in cui ogni pulsante cambia lo stile di più elementi insieme e un paragrafo di stato dice quale tema è attivo.',
      dati: [
        `sito: ${sito.nome}`,
        `sfondo del tema scuro: ${sfondoScuro}`,
        `testo grande: paragrafo ${grande}px, titolo ${titoloGrande}px`,
        `testo piccolo: paragrafo ${piccolo}px, titolo ${titoloPiccolo}px`,
      ],
      risultatoFinale: [
        `«Tema scuro» colora il riquadro di ${sfondoScuro} con il testo chiaro e lo stato dice «${SCURO}»; «Tema chiaro» rimette tutto com'era e dice «${CHIARO}».`,
        `«Testo grande» e «Testo piccolo» cambiano la grandezza del paragrafo (${grande}px / ${piccolo}px) e del titolo (${titoloGrande}px / ${titoloPiccolo}px).`,
        `«Colore a scelta» chiede due colori, uno per lo sfondo e uno per il testo, li applica e lo stato dice «${aSceltaDue('navy', 'white')}».`,
        'Ogni elemento sta in una variabile in cima al codice, cercato una volta sola.',
      ],
    },
    pagina: { html, css },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Il sito «${sito.nome}» vuole un tema scuro. Quando si clicca **Tema scuro** (id \`btnScuro\`), una funzione con nome, collegata con \`addEventListener\`, fa tre cose insieme.\n1. Lo **sfondo** del riquadro (id \`card\`) diventa \`${sfondoScuro}\`, con \`style.backgroundColor\`.\n2. Il **colore del testo** del titolo (id \`titolo\`) e del paragrafo (id \`testo\`) diventa chiaro, con \`style.color\`: va bene \`white\` o un altro colore chiaro.\n3. Il paragrafo di stato (id \`stato\`) dice \`${SCURO}\`, con \`innerHTML\`.\nCome nella Lezione 4, prendi gli elementi **in cima al codice, sopra le funzioni**, ognuno in una variabile, pulsante compreso: ogni id si cerca con \`getElementById\` una volta sola. All'inizio non devi cambiare niente: i colori di partenza li mette il CSS.`,
        regola: `${REGOLE.treGesti} ${REGOLE.elementiInVariabili} Lo sfondo, i due colori del testo e lo stato cambiano tutti nella stessa funzione del pulsante Tema scuro.`,
        elementiInAlto: true,
        prove: [
          { passi: [scuro(), ...temaScuroOk] },
          {
            nome: 'guardando la pagina prima del clic',
            passi: [
              cardBianca('All\'inizio il riquadro è bianco', 'All\'inizio non devi fare niente: il bianco lo mette il CSS. I cambiamenti vanno dentro la funzione, non fuori.'),
              statoDice(INIZIO, 'Lo stato cambia solo dentro la funzione, dopo il clic.'),
              scuro(),
              cardScura('Dopo il clic lo sfondo del riquadro deve essere quello della consegna.'),
              titoloChiaro('Il titolo si schiarisce con style.color sulla variabile del titolo.'),
            ],
          },
        ],
        codiceIniziale: '// 1. Gli elementi, in cima\n\n// 2. Le funzioni\n\n// 3. I collegamenti ai pulsanti\n',
      },
      {
        consegna: `Ora **Tema chiaro** (id \`btnChiaro\`): una nuova funzione, collegata con \`addEventListener\`.\n1. Riporta il riquadro com'era all'inizio: sfondo bianco con \`style.backgroundColor\`, titolo e paragrafo scuri con \`style.color\`. I valori di partenza sono nel CSS dato, ma vale qualunque colore scuro.\n2. Lo stato dice \`${CHIARO}\`.\nDopo Tema scuro e poi Tema chiaro tutto deve tornare come prima. Anche il pulsante nuovo sta in una variabile in cima al codice.`,
        regola: `${REGOLE.treGesti} ${REGOLE.elementiInVariabili} Ogni pulsante ha la sua funzione con nome; Tema chiaro rimette a mano i valori di partenza.`,
        elementiInAlto: true,
        prove: [
          { nome: 'Tema scuro, poi Tema chiaro', passi: [scuro(), chiaro(), ...temaChiaroOk] },
          {
            nome: 'Tema chiaro subito, poi Tema scuro',
            passi: [
              chiaro(),
              statoDice(CHIARO, 'Tema chiaro aggiorna lo stato anche se la pagina è già chiara.'),
              cardBianca('Il riquadro resta bianco', 'Tema chiaro mette il bianco come sfondo, sempre.'),
              scuro(),
              cardScura('Tema scuro deve continuare a funzionare.'),
              titoloChiaro('Tema scuro deve continuare a schiarire il titolo.'),
              statoDice(SCURO, 'Lo stato dice sempre l\'ultimo tema premuto.'),
            ],
          },
        ],
      },
      {
        consegna: `Due pulsanti per la grandezza del testo, con due nuove funzioni collegate con \`addEventListener\`.\n1. **Testo grande** (id \`btnGrande\`): il paragrafo (id \`testo\`) passa a \`${grande}px\` e il titolo (id \`titolo\`) a \`${titoloGrande}px\`, con \`style.fontSize\`.\n2. **Testo piccolo** (id \`btnPiccolo\`): il paragrafo passa a \`${piccolo}px\` e il titolo a \`${titoloPiccolo}px\`.\nRicorda l'unità: \`"${grande}px"\`, fra virgolette. I temi non devono cambiare: dopo Tema scuro e Testo grande il riquadro resta scuro.`,
        regola: `${REGOLE.treGesti} ${REGOLE.elementiInVariabili} Ogni pulsante ha la sua funzione con nome. Le misure si scrivono con l'unità px, fra virgolette.`,
        elementiInAlto: true,
        prove: [
          {
            nome: 'Testo grande, poi Testo piccolo',
            passi: [
              grandeClic(),
              misura('testo', grande, 'La grandezza del testo si cambia con style.fontSize (S maiuscola) e il valore con px fra virgolette.'),
              misura('titolo', titoloGrande, 'Nella stessa funzione cambia anche il fontSize del titolo, con la sua misura.'),
              piccoloClic(),
              misura('testo', piccolo, 'Una funzione nuova per Testo piccolo, con la misura piccola del paragrafo.'),
              misura('titolo', titoloPiccolo, 'Anche Testo piccolo cambia il titolo, con la sua misura.'),
            ],
          },
          {
            nome: 'Tema scuro, poi Testo grande',
            passi: [
              scuro(),
              grandeClic(),
              cardScura('Testo grande cambia solo le misure: lo sfondo scuro resta.'),
              titoloChiaro('Testo grande non tocca i colori: il titolo resta chiaro.'),
              misura('testo', grande, 'Il paragrafo deve ingrandirsi anche con il tema scuro attivo.'),
              misura('titolo', titoloGrande, 'Il titolo deve ingrandirsi anche con il tema scuro attivo.'),
              statoDice(SCURO, 'Testo grande non cambia lo stato.'),
            ],
          },
        ],
      },
      {
        consegna: `**Colore a scelta** (id \`btnColore\`): una nuova funzione, collegata con \`addEventListener\`.\n1. Chiede con \`prompt\` un colore in inglese e salva la risposta in una variabile.\n2. Usa la variabile come **sfondo** del riquadro (id \`card\`): al posto del valore scrivi il nome della variabile, **senza** virgolette intorno.\n3. Lo stato dice \`${aScelta('COLORE')}\`, dove COLORE è la risposta: rispondendo red, \`${aScelta('red')}\`.\nIl colore non lo scrivi nel codice: lo decide chi risponde. Quando provi, rispondi per esempio \`red\`.`,
        regola: `${REGOLE.treGesti} ${REGOLE.elementiInVariabili} ${REGOLE.datiDalPrompt} La stessa variabile con la risposta finisce nello sfondo e nel testo dello stato: non valgono colori scritti a mano.`,
        elementiInAlto: true,
        prove: [
          {
            nome: 'rispondendo «red»',
            passi: [
              risposte('red'),
              colore(),
              domandaFatta(1, 'La pagina chiede il colore con prompt', 'Il prompt va dentro la funzione di Colore a scelta.'),
              stile('card', 'backgroundColor', 'red', 'Il riquadro diventa rosso', 'Il valore di style.backgroundColor è la variabile con la risposta, senza virgolette intorno al nome.'),
              statoDice(aScelta('red'), 'Lo stato unisce il testo «Tema attivo: » con la variabile, con il +.'),
            ],
          },
          {
            nome: 'rispondendo «lightblue», poi Tema chiaro',
            passi: [
              risposte('lightblue'),
              colore(),
              stile('card', 'backgroundColor', 'lightblue', 'Il riquadro diventa azzurro', 'Il colore deve essere quello risposto al prompt, qualunque sia.'),
              statoDice(aScelta('lightblue'), 'Nel testo dello stato va la variabile, non un colore scritto a mano.'),
              chiaro(),
              cardBianca('Tema chiaro rimette il bianco', 'Tema chiaro deve rimettere il bianco anche dopo un colore a scelta.'),
              statoDice(CHIARO, 'Tema chiaro deve continuare ad aggiornare lo stato.'),
            ],
          },
        ],
      },
      {
        consegna: `Ultimo passo: **Colore a scelta** chiede **due** colori. Lavora nella funzione che hai già: **aggiungi** un secondo \`prompt\` e **sostituisci** il testo dello stato.\n1. Il primo \`prompt\` chiede il colore dello sfondo, il secondo quello del testo: due variabili.\n2. Lo sfondo va al riquadro (id \`card\`); il colore del testo va al titolo (id \`titolo\`) **e** al paragrafo (id \`testo\`), con \`style.color\`.\n3. Lo stato dice \`${aSceltaDue('SFONDO', 'TESTO')}\`: rispondendo navy e white, \`${aSceltaDue('navy', 'white')}\`.\nTema chiaro deve continuare a rimettere tutto a posto.`,
        regola: `${REGOLE.treGesti} ${REGOLE.elementiInVariabili} ${REGOLE.datiDalPrompt} Due prompt, due variabili: ognuna entra nello stile e nel testo dello stato.`,
        elementiInAlto: true,
        prove: [
          {
            nome: 'rispondendo «navy» e «white»',
            passi: [
              risposte('navy', 'white'),
              colore(),
              domandaFatta(2, 'La pagina fa due domande', 'Servono due prompt nella stessa funzione: prima lo sfondo, poi il testo.'),
              stile('card', 'backgroundColor', 'navy', 'Il riquadro ha lo sfondo navy', 'La prima risposta va allo sfondo del riquadro.'),
              stile('titolo', 'color', 'white', 'Il titolo è bianco', 'La seconda risposta va al colore del titolo, con style.color.'),
              stile('testo', 'color', 'white', 'Il paragrafo è bianco', 'La seconda risposta va anche al colore del paragrafo.'),
              statoDice(aSceltaDue('navy', 'white'), 'Nel testo dello stato entrano tutte e due le variabili, con gli spazi e la virgola giusti.'),
            ],
          },
          {
            nome: 'rispondendo «pink» e «purple», poi Tema chiaro',
            passi: [
              risposte('pink', 'purple'),
              colore(),
              stile('card', 'backgroundColor', 'pink', 'Il riquadro è rosa', 'Lo sfondo è la prima risposta, qualunque sia.'),
              stile('titolo', 'color', 'purple', 'Il titolo è viola', 'Il colore del testo è la seconda risposta.'),
              statoDice(aSceltaDue('pink', 'purple'), 'I colori nello stato sono quelli risposti, nell\'ordine: prima lo sfondo, poi il testo.'),
              chiaro(),
              ...temaChiaroOk,
            ],
          },
          {
            nome: 'tutti i pulsanti, uno dopo l\'altro',
            passi: [
              scuro(),
              ...temaScuroOk,
              grandeClic(),
              misura('testo', grande, 'Testo grande deve fare come prima.'),
              misura('titolo', titoloGrande, 'Testo grande deve cambiare anche il titolo, come prima.'),
              risposte('gold', 'black'),
              colore(),
              stile('card', 'backgroundColor', 'gold', 'Il riquadro è dorato', 'Lo sfondo a scelta deve funzionare anche dopo gli altri pulsanti.'),
              stile('testo', 'color', 'black', 'Il paragrafo è nero', 'Il colore del testo a scelta va anche al paragrafo.'),
              statoDice(aSceltaDue('gold', 'black'), 'Lo stato dice i due colori risposti.'),
              piccoloClic(),
              misura('testo', piccolo, 'Testo piccolo deve fare come prima.'),
              stile('card', 'backgroundColor', 'gold', 'Il riquadro resta dorato', 'Testo piccolo cambia solo le misure.'),
            ],
          },
        ],
      },
    ],
    soluzioni: [
      soluzione(1, [TEMA_SCURO]),
      soluzione(2, [TEMA_SCURO, TEMA_CHIARO]),
      soluzione(4, [TEMA_SCURO, TEMA_CHIARO, TESTO_GRANDE, TESTO_PICCOLO]),
      soluzione(5, [TEMA_SCURO, TEMA_CHIARO, TESTO_GRANDE, TESTO_PICCOLO, COLORE_UNO]),
      soluzione(5, [TEMA_SCURO, TEMA_CHIARO, TESTO_GRANDE, TESTO_PICCOLO, COLORE_DUE]),
    ],
  };
}
