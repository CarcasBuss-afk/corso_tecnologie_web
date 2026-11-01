/* Compito facile · La biglietteria del cinema (Modulo 4, lezione 3).
 * Le idee del campanello, una alla volta e quasi riga per riga: un pulsante con lo schema in
 * tre passi che chiede il nome con prompt e saluta con il +; poi una seconda domanda (la fila)
 * e un secondo alert; alla fine un confirm, con la risposta mostrata nell'alert. Niente const,
 * niente innerHTML, niente if: solo alert, prompt, confirm, variabili e il +. */
import { alertsQuanti, alertUguale, clic, conferme, CSS_BASE, domandaFatta, risposte } from './aiuti';
import { generatore, intero, REGOLE, scegli, type Compito } from './tipi';

const CINEMA = ['Cinema Odeon', 'Cinema Lux', 'Cinema Ariston', 'Cinema Astra', 'Cinema Moderno', 'Cinema Arlecchino'] as const;
const FILM = ['Il drago di ghiaccio', 'Robot in vacanza', 'La corsa delle stelle', 'Il mistero del faro', 'Pinguini allo sbaraglio', 'Missione Luna'] as const;

export function generaBiglietteria(seme: number): Compito {
  const rnd = generatore(seme);
  const cinema = scegli(rnd, CINEMA);
  const film = scegli(rnd, FILM);
  const sala = intero(rnd, 2, 9);

  const html = `<h1>🎬 ${cinema}</h1>
<p>Stasera in sala ${sala}: «${film}»</p>
<button id="btnBiglietto">Compra il biglietto</button>`;

  // Il saluto: tre pezzi uniti con il +, il nome in mezzo.
  const dopoNome = `, benvenuto al ${cinema}!`;
  const saluto = (nome: string) => `Ciao ${nome}${dopoNome}`;
  // Il biglietto: finisce con la variabile della fila, così i pezzi sono pochi.
  const primaFila = `: sala ${sala}, fila `;
  const biglietto = (nome: string, fila: string) => `Biglietto per ${nome}${primaFila}${fila}`;
  const popcorn = (si: boolean) => `Popcorn: ${si}`;

  const pulsante = clic('btnBiglietto', 'Compra il biglietto');
  const hintCollegamento = 'Se non compare niente: la funzione è collegata al pulsante con addEventListener? L\'id fra virgolette deve essere btnBiglietto, uguale a quello nell\'HTML.';

  return {
    scheda: {
      id: 'biglietteria',
      titolo: 'La biglietteria del cinema',
      lezione: 'Modulo 4 · Lezione 3',
      committente: `Il «${cinema}» vuole una biglietteria sul telefono: lo spettatore preme un pulsante, risponde a qualche domanda e riceve il biglietto per «${film}».`,
      prodotto: 'Una pagina con un pulsante che parla con lo spettatore attraverso le finestre prompt, alert e confirm.',
      dati: [`cinema: ${cinema}`, `film: ${film}`, `sala: ${sala}`],
      risultatoFinale: [
        `Clic su «Compra il biglietto»: chiede il nome e saluta, per esempio «${saluto('Luca')}».`,
        `Poi chiede la fila e mostra il biglietto, per esempio «${biglietto('Luca', '5')}».`,
        'Alla fine chiede con confirm se si vogliono i popcorn e mostra la risposta: «Popcorn: true» o «Popcorn: false».',
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Quando si clicca **Compra il biglietto** (id \`btnBiglietto\`), la pagina chiede il nome e saluta.\n1. Scrivi una funzione con un nome scelto da te (per esempio \`compra\`).\n2. Dentro, la prima riga chiede il nome e lo mette in una variabile: \`let nome = prompt("Come ti chiami?");\`.\n3. La seconda riga mostra un \`alert\` con \`Ciao NOME${dopoNome}\` (se lo spettatore scrive Luca: \`${saluto('Luca')}\`). Unisci con il \`+\` tre pezzi: il testo \`Ciao \`, la variabile \`nome\` e il testo \`${dopoNome}\`.\n4. Sotto la funzione, collegala al pulsante con \`addEventListener\`.`,
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalPrompt}`,
        prove: [
          {
            nome: 'rispondendo «Luca»',
            passi: [
              risposte('Luca'),
              pulsante,
              domandaFatta(1, 'La pagina chiede il nome con prompt', `Non è comparsa nessuna domanda. ${hintCollegamento} Il prompt va dentro la funzione, prima dell'alert.`),
              alertUguale(saluto('Luca'), `L'alert dice «${saluto('Luca')}»`, `I pezzi sono tre: «Ciao » (con lo spazio dopo), la variabile nome senza virgolette, e «${dopoNome}» (comincia con la virgola). Uniscili con il +.`),
              alertsQuanti(1, 'Un alert solo', 'Per ogni clic deve comparire un alert solo.'),
            ],
          },
          {
            nome: 'rispondendo «Giulia»',
            passi: [
              risposte('Giulia'),
              pulsante,
              alertUguale(saluto('Giulia'), `L'alert dice «${saluto('Giulia')}»`, 'Il nome nell\'alert deve essere quello scritto nel prompt: nell\'alert va la variabile, non un nome scritto a mano.'),
            ],
          },
        ],
        codiceIniziale: '// 1. La funzione: chiede il nome e saluta\n\n// 2. Collega il pulsante alla funzione\n',
      },
      {
        consegna: `Dopo il saluto, la biglietteria chiede **anche la fila** e mostra il biglietto. Il saluto resta com'è: **aggiungi** due righe nella funzione, sotto l'alert del saluto.\n1. Chiedi la fila con un secondo \`prompt\` e mettila in una nuova variabile: \`let fila = prompt("In che fila vuoi sederti?");\`.\n2. Mostra un secondo \`alert\` con \`Biglietto per NOME${primaFila}FILA\` (per Luca in fila 5: \`${biglietto('Luca', '5')}\`). I pezzi da unire con il \`+\` sono quattro: il testo \`Biglietto per \`, la variabile \`nome\`, il testo \`${primaFila}\` e la variabile \`fila\`.`,
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalPrompt} Anche la fila arriva da un prompt e sta in una variabile.`,
        prove: [
          {
            nome: 'rispondendo «Luca» e poi «5»',
            passi: [
              risposte('Luca', '5'),
              pulsante,
              domandaFatta(2, 'La pagina fa due domande: il nome e la fila', 'Ci vuole un secondo prompt, dopo l\'alert del saluto, con la risposta in una nuova variabile.'),
              alertsQuanti(2, 'Due alert: il saluto e poi il biglietto', 'Il saluto resta, e sotto la seconda domanda viene un secondo alert con il biglietto.'),
              alertUguale(biglietto('Luca', '5'), `Il secondo alert dice «${biglietto('Luca', '5')}»`, `I pezzi sono quattro: «Biglietto per » (con lo spazio), la variabile nome, «${primaFila}» (comincia con i due punti, finisce con uno spazio) e la variabile fila.`),
            ],
          },
          {
            nome: 'rispondendo «Giulia» e poi «12»',
            passi: [
              risposte('Giulia', '12'),
              pulsante,
              alertUguale(biglietto('Giulia', '12'), `Il secondo alert dice «${biglietto('Giulia', '12')}»`, 'Nome e fila devono essere quelli risposti ai due prompt: nell\'alert vanno le due variabili, non numeri scritti a mano.'),
            ],
          },
        ],
      },
      {
        consegna: `Alla fine la biglietteria chiede se lo spettatore vuole i popcorn. **Aggiungi** due righe nella funzione, sotto l'alert del biglietto.\n1. Chiedi con \`confirm\` se vuole i popcorn (la domanda la scegli tu) e metti la risposta in una nuova variabile, per esempio \`let popcorn = confirm("...");\`.\n2. Mostra un terzo \`alert\`: il testo \`Popcorn: \` unito con il \`+\` alla variabile.\n\`confirm\` dà \`true\` se si preme OK e \`false\` se si preme Annulla, quindi l'alert dirà da solo \`${popcorn(true)}\` o \`${popcorn(false)}\`. Non serve un \`if\`.`,
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalPrompt} La risposta del confirm sta in una variabile e finisce nell'alert: non valgono due alert scritti a mano.`,
        prove: [
          {
            nome: 'rispondendo «Luca», «5» e premendo OK',
            passi: [
              risposte('Luca', '5'),
              conferme(true),
              pulsante,
              alertsQuanti(3, 'Tre alert: il saluto, il biglietto e i popcorn', 'Saluto e biglietto restano; sotto viene il confirm e poi un terzo alert con la risposta.'),
              alertUguale(popcorn(true), `L'ultimo alert dice «${popcorn(true)}»`, 'Unisci il testo «Popcorn: » (con lo spazio dopo i due punti) con la variabile del confirm: JavaScript scrive true o false da solo.'),
            ],
          },
          {
            nome: 'rispondendo «Giulia», «12» e premendo Annulla',
            passi: [
              risposte('Giulia', '12'),
              conferme(false),
              pulsante,
              alertsQuanti(3, 'Ancora tre alert', 'Anche con Annulla gli alert sono tre: il saluto, il biglietto e i popcorn.'),
              alertUguale(popcorn(false), `L'ultimo alert dice «${popcorn(false)}»`, 'La risposta deve venire dal confirm: con Annulla è false. Se dice sempre true, nell\'alert c\'è un testo scritto a mano.'),
            ],
          },
        ],
      },
    ],
    soluzioni: [
      `function compra() {
  let nome = prompt("Come ti chiami?");
  alert("Ciao " + nome + "${dopoNome}");
}

document.getElementById("btnBiglietto").addEventListener("click", compra);`,
      `function compra() {
  let nome = prompt("Come ti chiami?");
  alert("Ciao " + nome + "${dopoNome}");
  let fila = prompt("In che fila vuoi sederti?");
  alert("Biglietto per " + nome + "${primaFila}" + fila);
}

document.getElementById("btnBiglietto").addEventListener("click", compra);`,
      `function compra() {
  let nome = prompt("Come ti chiami?");
  alert("Ciao " + nome + "${dopoNome}");
  let fila = prompt("In che fila vuoi sederti?");
  alert("Biglietto per " + nome + "${primaFila}" + fila);
  let popcorn = confirm("Vuoi i popcorn?");
  alert("Popcorn: " + popcorn);
}

document.getElementById("btnBiglietto").addEventListener("click", compra);`,
    ],
  };
}
