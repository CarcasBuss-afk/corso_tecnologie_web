/* Sfida · Il quiz a tre domande (Modulo 4, lezione 6).
 * Più difficile del normale: la consegna dice che cosa fa la pagina, non riga per riga come.
 * Tre prompt di fila e tre if che contano i punti (punti = punti + 1: il ++ arriva nella
 * Lezione 7); un else if a quattro vie sui punti; il colore con una soglia (>=); un contatore
 * delle partite dichiarato fuori dalla funzione, in contrasto con i punti che ripartono da 0;
 * un secondo pulsante che azzera. Gli elementi si prendono in alto fin dalla prima fase. */
import { clic, CSS_BASE, domandaFatta, risposte, ROSSI, stile, testo, VERDI } from './aiuti';
import { generatore, intero, REGOLE, scegli, scegliDue, type Compito } from './tipi';

interface Domanda {
  domanda: string;
  giusta: string;
  sbagliata: string;
  /** La risposta è un numero: si confronta dopo Number(). */
  numero: boolean;
}

const NUMERI: readonly Domanda[] = [
  { domanda: 'Quante zampe ha un ragno?', giusta: '8', sbagliata: '6', numero: true },
  { domanda: 'Quanti giorni ha una settimana?', giusta: '7', sbagliata: '5', numero: true },
  { domanda: 'Quanti lati ha un esagono?', giusta: '6', sbagliata: '8', numero: true },
  { domanda: "Quanti minuti ci sono in un'ora?", giusta: '60', sbagliata: '100', numero: true },
  { domanda: 'Quanti pianeti ha il sistema solare?', giusta: '8', sbagliata: '9', numero: true },
  { domanda: 'Quanti giocatori ha una squadra di calcio in campo?', giusta: '11', sbagliata: '10', numero: true },
  { domanda: 'Quante ore ha un giorno?', giusta: '24', sbagliata: '12', numero: true },
  { domanda: 'Quanti gradi ha un angolo retto?', giusta: '90', sbagliata: '180', numero: true },
  { domanda: 'Quante zampe ha un insetto?', giusta: '6', sbagliata: '8', numero: true },
  { domanda: 'Quanti anelli ha la bandiera olimpica?', giusta: '5', sbagliata: '6', numero: true },
  { domanda: 'Quanti bit ci sono in un byte?', giusta: '8', sbagliata: '10', numero: true },
  { domanda: "Quante lettere ha l'alfabeto italiano?", giusta: '21', sbagliata: '26', numero: true },
];

const PAROLE: readonly Domanda[] = [
  { domanda: 'Qual è la capitale della Francia?', giusta: 'Parigi', sbagliata: 'Londra', numero: false },
  { domanda: 'Qual è la capitale della Spagna?', giusta: 'Madrid', sbagliata: 'Lisbona', numero: false },
  { domanda: 'Qual è la capitale della Germania?', giusta: 'Berlino', sbagliata: 'Vienna', numero: false },
  { domanda: 'Qual è il pianeta più vicino al Sole?', giusta: 'Mercurio', sbagliata: 'Venere', numero: false },
  { domanda: 'Qual è il pianeta più grande del sistema solare?', giusta: 'Giove', sbagliata: 'Saturno', numero: false },
  { domanda: "Qual è l'oceano più grande?", giusta: 'Pacifico', sbagliata: 'Atlantico', numero: false },
  { domanda: 'Quale linguaggio dà lo stile alle pagine web?', giusta: 'CSS', sbagliata: 'HTML', numero: false },
  { domanda: 'Con quale linguaggio si scrive la struttura di una pagina web?', giusta: 'HTML', sbagliata: 'CSS', numero: false },
];

const CHI = ['I rappresentanti di classe', 'I bibliotecari della scuola', 'I redattori del giornalino', 'I ragazzi del club dei giochi', 'I ragazzi del doposcuola'] as const;
const NOMI = ['Quiz del Venerdì', 'Quiz della Ricreazione', 'Quiz dei Campioni', 'Quiz della Classe', 'Quiz del Pomeriggio'] as const;

type Esiti = readonly [boolean, boolean, boolean];

export function generaQuiz(seme: number): Compito {
  const rnd = generatore(seme);
  const chi = scegli(rnd, CHI);
  const nome = scegli(rnd, NOMI);
  const [n1, n2] = scegliDue(rnd, NUMERI);
  const parola = scegli(rnd, PAROLE);
  // La domanda con la parola sta in una posizione a caso fra le tre.
  const domande: Domanda[] = [n1, n2];
  domande.splice(intero(rnd, 0, 2), 0, parola);

  const html = `<h1>🧠 ${nome}</h1>
<p>1. ${domande[0].domanda}</p>
<p>2. ${domande[1].domanda}</p>
<p>3. ${domande[2].domanda}</p>
<button id="btnGioca">Gioca</button>
<p id="punteggio">Premi Gioca per iniziare</p>
<p id="giudizio"></p>
<p id="partite">Partite giocate: 0</p>
<button id="btnAzzera">Azzera</button>`;

  const PRONTO = 'Pronto per una nuova partita';
  const GIUDIZI = ['Riprova', 'Puoi fare meglio', 'Bravo', 'Perfetto!'] as const;
  const puntiDi = (e: Esiti) => e.filter(Boolean).length;
  const punteggio = (e: Esiti) => `Punti: ${puntiDi(e)} su 3`;
  const giudizio = (e: Esiti) => GIUDIZI[puntiDi(e)];
  const partite = (n: number) => `Partite giocate: ${n}`;
  const risposteA = (e: Esiti) => domande.map((d, i) => (e[i] ? d.giusta : d.sbagliata));
  const gioca = (e: Esiti) => [risposte(...risposteA(e)), clic('btnGioca', 'Gioca')];
  const nomeProva = (e: Esiti) => `rispondendo ${risposteA(e).map((r) => `«${r}»`).join(', ')}`;
  const dicePunti = (e: Esiti, hint: string) => testo('punteggio', punteggio(e), `Il punteggio dice «${punteggio(e)}»`, hint);
  const diceGiudizio = (e: Esiti, hint: string) => testo('giudizio', giudizio(e), `Con ${puntiDi(e)} ${puntiDi(e) === 1 ? 'punto' : 'punti'} il giudizio dice «${giudizio(e)}»`, hint);
  const dicePartite = (n: number, hint: string) => testo('partite', partite(n), `Il paragrafo delle partite dice «${partite(n)}»`, hint);

  const TUTTE: Esiti = [true, true, true];
  const NESSUNA: Esiti = [false, false, false];
  const DUE: Esiti = [true, false, true];
  const SOLO_TERZA: Esiti = [false, false, true];
  const SOLO_SECONDA: Esiti = [false, true, false];
  const SOLO_PRIMA: Esiti = [true, false, false];

  /* ------------------------------------------------------------ le soluzioni */

  const chiedi = (d: Domanda, n: number) =>
    d.numero
      ? `  let testo${n} = prompt("${d.domanda}");
  let risposta${n} = Number(testo${n});
  if (risposta${n} === ${d.giusta}) {
    punti = punti + 1;
  }`
      : `  let risposta${n} = prompt("${d.domanda}");
  if (risposta${n} === "${d.giusta}") {
    punti = punti + 1;
  }`;
  const DOMANDE = domande.map((d, i) => chiedi(d, i + 1)).join('\n');
  const GIUDIZIO = `  if (punti === 3) {
    giudizio.innerHTML = "${GIUDIZI[3]}";
  } else if (punti === 2) {
    giudizio.innerHTML = "${GIUDIZI[2]}";
  } else if (punti === 1) {
    giudizio.innerHTML = "${GIUDIZI[1]}";
  } else {
    giudizio.innerHTML = "${GIUDIZI[0]}";
  }`;
  const COLORE = `  if (punti >= 2) {
    giudizio.style.color = "green";
  } else {
    giudizio.style.color = "red";
  }`;
  const ELEMENTI_1 = `let punteggio = document.getElementById("punteggio");
let tastoGioca = document.getElementById("btnGioca");`;
  const ELEMENTI_2 = `let punteggio = document.getElementById("punteggio");
let giudizio = document.getElementById("giudizio");
let tastoGioca = document.getElementById("btnGioca");`;
  const ELEMENTI_4 = `let punteggio = document.getElementById("punteggio");
let giudizio = document.getElementById("giudizio");
let paragrafoPartite = document.getElementById("partite");
let tastoGioca = document.getElementById("btnGioca");`;
  const COLLEGA = 'tastoGioca.addEventListener("click", gioca);';
  const SCRIVI_PUNTI = '  punteggio.innerHTML = "Punti: " + punti + " su 3";';
  const PARTITE = `  partite = partite + 1;
  paragrafoPartite.innerHTML = "Partite giocate: " + partite;`;

  return {
    scheda: {
      id: 'quiz',
      titolo: 'Il quiz a tre domande',
      lezione: 'Modulo 4 · Lezione 6',
      committente: `${chi} organizzano il «${nome}» per la festa della scuola: chi gioca risponde a tre domande, la pagina conta i punti, dà un giudizio e tiene il conto delle partite.`,
      prodotto: 'Una pagina che fa tre domande con prompt, conta le risposte giuste con tre if, sceglie il giudizio con else if e conta le partite con una variabile fuori dalla funzione.',
      dati: [
        `domanda 1: ${domande[0].domanda} Risposta: ${domande[0].giusta}`,
        `domanda 2: ${domande[1].domanda} Risposta: ${domande[1].giusta}`,
        `domanda 3: ${domande[2].domanda} Risposta: ${domande[2].giusta}`,
        `giudizio: 3 punti ${GIUDIZI[3]}, 2 punti ${GIUDIZI[2]}, 1 punto ${GIUDIZI[1]}, 0 punti ${GIUDIZI[0]}`,
        'colore del giudizio: verde da 2 punti in su, rosso sotto',
      ],
      risultatoFinale: [
        '«Gioca» fa le tre domande con prompt e scrive «Punti: N su 3»: a ogni partita i punti ripartono da 0.',
        `Sotto compare il giudizio (${GIUDIZI[3]}, ${GIUDIZI[2]}, ${GIUDIZI[1]} o ${GIUDIZI[0]}), verde da 2 punti in su e rosso sotto.`,
        'Un paragrafo conta le partite giocate da quando la pagina è aperta; «Azzera» riporta tutto a zero.',
        'Ogni elemento sta in una variabile in cima al codice, cercato una volta sola.',
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Questa è una sfida: la consegna dice che cosa fa la pagina, il codice lo decidi tu.\n**Gioca** (id \`btnGioca\`) fa le tre domande scritte nella pagina, una dopo l'altra, con tre \`prompt\`. Le risposte giuste sono nella scheda.\n1. Ogni risposta giusta vale un punto: un \`if\` con un confronto per ogni domanda.\n2. Alla fine il paragrafo del punteggio (id \`punteggio\`) dice \`Punti: N su 3\`, con N i punti fatti.\n3. A ogni partita i punti ripartono da 0.\nI punti stanno in una variabile che parte da 0 e cresce di uno con \`punti = punti + 1\`. Per le risposte con un numero usa \`Number()\` e confronta con il numero senza virgolette; per la parola confronta con il testo fra virgolette, maiuscole comprese. Gli elementi della pagina si prendono **in cima al codice, sopra le funzioni**, ognuno nella sua variabile.`,
        regola: `${REGOLE.treGesti} ${REGOLE.elementiInVariabili} ${REGOLE.datiDalPrompt} I punti si contano con una variabile che parte da 0 e che tre if, uno per domanda, aumentano di 1 (punti = punti + 1) quando la risposta è giusta, con un confronto sulla risposta al prompt. Non vale un punteggio scritto a mano.`,
        elementiInAlto: true,
        prove: [
          {
            nome: nomeProva(TUTTE),
            passi: [
              ...gioca(TUTTE),
              domandaFatta(3, 'La pagina fa tre domande', 'Servono tre prompt dentro la funzione del pulsante, uno per domanda.'),
              dicePunti(TUTTE, 'Dopo le tre domande scrivi nel paragrafo "Punti: " + punti + " su 3". Se i punti restano a 0, controlla i confronti: Number() per i numeri, le virgolette per la parola, con le maiuscole giuste.'),
            ],
          },
          { nome: nomeProva(DUE), passi: [...gioca(DUE), dicePunti(DUE, 'Ogni if aumenta i punti solo se la sua risposta è giusta: con una risposta sbagliata quel punto non si prende.')] },
          { nome: nomeProva(NESSUNA), passi: [...gioca(NESSUNA), dicePunti(NESSUNA, 'Con tre risposte sbagliate i punti restano 0: il punteggio non va scritto a mano.')] },
          { nome: nomeProva(SOLO_TERZA), passi: [...gioca(SOLO_TERZA), dicePunti(SOLO_TERZA, 'Anche la terza domanda ha il suo if: controlla il confronto con la sua risposta.')] },
          { nome: nomeProva(SOLO_SECONDA), passi: [...gioca(SOLO_SECONDA), dicePunti(SOLO_SECONDA, 'Anche la seconda domanda ha il suo if: controlla il confronto con la sua risposta.')] },
          {
            nome: `giocando due partite: ${nomeProva(TUTTE)} e poi ${nomeProva(SOLO_PRIMA)}`,
            passi: [...gioca(TUTTE), ...gioca(SOLO_PRIMA), dicePunti(SOLO_PRIMA, 'Alla seconda partita i punti devono ripartire da 0: la variabile dei punti torna a 0 all\'inizio della funzione, oppure la dichiari dentro la funzione.')],
          },
        ],
        codiceIniziale: '// Gli elementi della pagina, in variabili\n\n// La funzione del pulsante Gioca\n\n// Il collegamento\n',
      },
      {
        consegna: `Sotto il punteggio compare il giudizio, nel paragrafo (id \`giudizio\`). Lo sceglie una scala di \`if\`, \`else if\` ed \`else\` sui punti:\n1. Con 3 punti dice \`${GIUDIZI[3]}\`.\n2. Con 2 punti dice \`${GIUDIZI[2]}\`.\n3. Con 1 punto dice \`${GIUDIZI[1]}\`.\n4. Con 0 punti dice \`${GIUDIZI[0]}\`.\nIl giudizio si decide **dopo** le tre domande, quando i punti sono tutti contati. Il punteggio della fase prima resta.`,
        regola: `${REGOLE.treGesti} ${REGOLE.elementiInVariabili} ${REGOLE.datiDalPrompt} Il giudizio lo sceglie un if / else if / else sulla variabile dei punti, dopo le tre domande: quattro vie, non testi fissi.`,
        elementiInAlto: true,
        prove: [
          {
            nome: nomeProva(TUTTE),
            passi: [...gioca(TUTTE), dicePunti(TUTTE, 'Il punteggio della fase prima deve restare.'), diceGiudizio(TUTTE, 'Il primo if controlla se i punti sono 3 (===). Il testo va scritto identico, con il punto esclamativo.')],
          },
          { nome: nomeProva(DUE), passi: [...gioca(DUE), diceGiudizio(DUE, 'Con 2 punti serve un else if che controlla il 2.')] },
          { nome: nomeProva(SOLO_TERZA), passi: [...gioca(SOLO_TERZA), diceGiudizio(SOLO_TERZA, 'Con 1 punto serve un altro else if che controlla l\'1: il testo va scritto identico, senza punto.')] },
          { nome: nomeProva(NESSUNA), passi: [...gioca(NESSUNA), diceGiudizio(NESSUNA, 'L\'else finale prende il caso che resta: 0 punti.')] },
        ],
      },
      {
        consegna: `Il giudizio si colora: **verde** da 2 punti in su, **rosso** con meno di 2. Si usa \`style.color\` del paragrafo del giudizio. Dove mettere il colore lo decidi tu: un \`if\` in più sui punti, con \`else\`, oppure dentro le vie dell'\`else if\` della fase prima. Testi e punteggio restano uguali.`,
        regola: `${REGOLE.treGesti} ${REGOLE.elementiInVariabili} ${REGOLE.datiDalPrompt} Il colore lo decide un confronto sui punti (verde da 2 in su, rosso sotto), con un if e un else oppure nelle vie dell'else if: non un colore solo scritto una volta.`,
        elementiInAlto: true,
        prove: [
          {
            nome: nomeProva(TUTTE),
            passi: [...gioca(TUTTE), diceGiudizio(TUTTE, 'Il giudizio della fase prima deve restare.'), stile('giudizio', 'color', VERDI, 'Il giudizio è verde', 'Con 3 punti style.color del giudizio va a un verde (green).')],
          },
          { nome: nomeProva(DUE), passi: [...gioca(DUE), stile('giudizio', 'color', VERDI, 'Con 2 punti il giudizio è verde', 'Da 2 punti in su è verde: anche con 2. Il confronto giusto è «maggiore o uguale a 2».')] },
          { nome: nomeProva(SOLO_SECONDA), passi: [...gioca(SOLO_SECONDA), stile('giudizio', 'color', ROSSI, 'Con 1 punto il giudizio è rosso', 'Sotto i 2 punti il colore è un rosso (red): è la strada dell\'else.')] },
          { nome: nomeProva(NESSUNA), passi: [...gioca(NESSUNA), stile('giudizio', 'color', ROSSI, 'Con 0 punti il giudizio è rosso', 'Anche con 0 punti il giudizio è rosso.')] },
          {
            nome: `giocando due partite: ${nomeProva(TUTTE)} e poi ${nomeProva(NESSUNA)}`,
            passi: [...gioca(TUTTE), ...gioca(NESSUNA), stile('giudizio', 'color', ROSSI, 'Dopo la seconda partita il giudizio è diventato rosso', 'Ogni strada mette il suo colore: se il rosso manca, dopo una partita verde il giudizio resta verde.')],
          },
        ],
      },
      {
        consegna: `La pagina conta le partite. Dopo ogni partita il paragrafo delle partite (id \`partite\`) dice \`Partite giocate: N\`, con N le partite fatte da quando la pagina è aperta: 1 alla prima, 2 alla seconda e così via.\nA differenza dei punti, le partite **non** ripartono da 0 a ogni clic: la variabile che le conta va dichiarata **fuori** dalla funzione, in cima al codice, e la funzione la aumenta con \`partite = partite + 1\`. I punti continuano a ripartire da 0.`,
        regola: `${REGOLE.treGesti} ${REGOLE.elementiInVariabili} ${REGOLE.datiDalPrompt} Le partite si contano con una variabile dichiarata fuori dalla funzione, in alto, che la funzione aumenta di 1 (partite = partite + 1) a ogni partita: non vale un numero scritto a mano. I punti restano una variabile che riparte da 0 a ogni partita.`,
        elementiInAlto: true,
        prove: [
          {
            nome: nomeProva(TUTTE),
            passi: [...gioca(TUTTE), dicePartite(1, 'Dichiara la variabile delle partite in alto, a 0; nella funzione aumentala di 1 e scrivila nel paragrafo con "Partite giocate: " + partite.'), dicePunti(TUTTE, 'Il punteggio deve restare come prima.')],
          },
          {
            nome: `giocando tre partite: ${nomeProva(TUTTE)}, ${nomeProva(NESSUNA)} e ${nomeProva(DUE)}`,
            passi: [
              ...gioca(TUTTE),
              ...gioca(NESSUNA),
              ...gioca(DUE),
              dicePartite(3, 'Se resta a 1, la variabile delle partite è dichiarata dentro la funzione e riparte da 0 a ogni clic: spostala fuori, in cima al codice.'),
              dicePunti(DUE, 'I punti ripartono da 0 a ogni partita: solo le partite si accumulano.'),
              diceGiudizio(DUE, 'Il giudizio deve restare come prima.'),
            ],
          },
        ],
      },
      {
        consegna: `**Azzera** (id \`btnAzzera\`) rimette tutto a zero: una nuova funzione, collegata con \`addEventListener\`.\n1. La variabile delle partite torna a 0 e il paragrafo delle partite dice \`${partite(0)}\`.\n2. Il paragrafo del punteggio dice \`${PRONTO}\`.\n3. Il paragrafo del giudizio si svuota (testo vuoto \`""\`).\nDopo Azzera la prima partita giocata è di nuovo la numero 1. Gioca continua a funzionare come prima.`,
        regola: `${REGOLE.treGesti} ${REGOLE.elementiInVariabili} ${REGOLE.datiDalPrompt} Anche Azzera ha la sua funzione con nome e il suo addEventListener; la funzione rimette a 0 la variabile delle partite, non solo il testo del paragrafo.`,
        elementiInAlto: true,
        prove: [
          {
            nome: `giocando due partite e premendo Azzera`,
            passi: [
              ...gioca(TUTTE),
              ...gioca(DUE),
              clic('btnAzzera', 'Azzera'),
              dicePartite(0, 'La funzione di Azzera scrive nel paragrafo delle partite «Partite giocate: 0».'),
              testo('punteggio', PRONTO, `Il punteggio dice «${PRONTO}»`, 'Azzera scrive nel paragrafo del punteggio il testo della consegna, identico.'),
              testo('giudizio', '', 'Il paragrafo del giudizio è vuoto', 'Azzera svuota il giudizio con un testo vuoto "".'),
            ],
          },
          {
            nome: `giocando due partite, premendo Azzera e giocando ancora ${nomeProva(TUTTE)}`,
            passi: [
              ...gioca(TUTTE),
              ...gioca(DUE),
              clic('btnAzzera', 'Azzera'),
              ...gioca(TUTTE),
              dicePartite(1, 'Dopo Azzera la partita è di nuovo la numero 1: la funzione di Azzera deve rimettere a 0 la variabile delle partite, non solo il testo.'),
              dicePunti(TUTTE, 'Gioca deve continuare a funzionare dopo Azzera.'),
              diceGiudizio(TUTTE, 'Il giudizio deve restare come prima.'),
            ],
          },
          {
            nome: 'premendo Azzera senza aver giocato',
            passi: [clic('btnAzzera', 'Azzera'), testo('punteggio', PRONTO, `Il punteggio dice «${PRONTO}»`, 'Azzera funziona anche prima della prima partita.'), dicePartite(0, 'Il paragrafo delle partite dice «Partite giocate: 0».')],
          },
        ],
      },
    ],
    soluzioni: [
      `${ELEMENTI_1}

function gioca() {
  let punti = 0;
${DOMANDE}
${SCRIVI_PUNTI}
}

${COLLEGA}`,
      `${ELEMENTI_2}

function gioca() {
  let punti = 0;
${DOMANDE}
${SCRIVI_PUNTI}
${GIUDIZIO}
}

${COLLEGA}`,
      `${ELEMENTI_2}

function gioca() {
  let punti = 0;
${DOMANDE}
${SCRIVI_PUNTI}
${GIUDIZIO}
${COLORE}
}

${COLLEGA}`,
      `${ELEMENTI_4}
let partite = 0;

function gioca() {
  let punti = 0;
${DOMANDE}
${SCRIVI_PUNTI}
${GIUDIZIO}
${COLORE}
${PARTITE}
}

${COLLEGA}`,
      `${ELEMENTI_4}
let tastoAzzera = document.getElementById("btnAzzera");
let partite = 0;

function gioca() {
  let punti = 0;
${DOMANDE}
${SCRIVI_PUNTI}
${GIUDIZIO}
${COLORE}
${PARTITE}
}

function azzera() {
  partite = 0;
  paragrafoPartite.innerHTML = "${partite(0)}";
  punteggio.innerHTML = "${PRONTO}";
  giudizio.innerHTML = "";
}

${COLLEGA}
tastoAzzera.addEventListener("click", azzera);`,
    ],
  };
}
