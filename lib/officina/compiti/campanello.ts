/* Compito 1 · Il campanello del negozio (Modulo 4, lezioni 2-3).
 * Idea nuova: lo schema in tre passi (id → funzione con nome → addEventListener), poi
 * alert, prompt in una variabile, const, confirm. La pagina è data; si scrive solo il JS. */
import { alertUguale, alertsQuanti, clic, conferme, CSS_BASE, domandaFatta, risposte } from './aiuti';
import { generatore, intero, REGOLE, scegli, type Compito } from './tipi';

const NEGOZI = ['Pane e Fantasia', 'Bici Veloce', 'Il Gelato di Nonna Rosa', 'Fumetti & Co', 'La Bottega del Pallone', 'Ricambi Moto Gigi'] as const;

export function generaCampanello(seme: number): Compito {
  const rnd = generatore(seme);
  const negozio = scegli(rnd, NEGOZI);
  const apertura = intero(rnd, 8, 10);
  const chiusura = intero(rnd, 18, 20);
  // Il messaggio degli orari riusa il nome del negozio: è il secondo uso che dà senso alla costante.
  const dopoNegozio = `: aperti dalle ${apertura} alle ${chiusura}`;
  const orari = `${negozio}${dopoNegozio}`;

  const html = `<h1>🔔 ${negozio}</h1>
<p>Benvenuto! Suona il campanello per chiamare il commesso.</p>
<button id="btnSuona">Suona il campanello</button>
<button id="btnOrari">Orari di apertura</button>`;

  const hintCollegamento = 'Il pulsante non fa niente: la funzione è collegata al pulsante con addEventListener? L\'id fra virgolette deve essere uguale a quello nell\'HTML.';

  const saluto = (nome: string) => `Benvenuto da ${negozio}, ${nome}!`;

  return {
    scheda: {
      id: 'campanello',
      titolo: 'Il campanello del negozio',
      lezione: 'Modulo 4 · Lezione 3',
      committente: `Il negozio «${negozio}» vuole una pagina con un campanello: il cliente la apre dal telefono, suona, e il commesso arriva.`,
      prodotto: 'Una pagina con due pulsanti che parlano con il cliente attraverso le finestre alert, prompt e confirm.',
      dati: [`negozio: ${negozio}`, `orari: dalle ${apertura} alle ${chiusura}`],
      risultatoFinale: [
        'Clic su «Suona il campanello»: chiede il nome, poi saluta con il nome e il nome del negozio.',
        'Dopo il saluto chiede conferma per le offerte e mostra la risposta (true o false).',
        `Clic su «Orari di apertura»: dice «${orari}».`,
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: 'Quando si clicca **Suona il campanello**, la pagina mostra un `alert` con `Arrivo subito!`. Scrivi una funzione, dandole un nome scelto da te (per esempio `suona`), e collegala al pulsante con `addEventListener`.',
        regola: REGOLE.treGesti,
        prove: [
          {
            passi: [
              clic('btnSuona', 'Suona il campanello'),
              alertUguale('Arrivo subito!', 'Compare un alert con «Arrivo subito!»', `Se non compare nessun alert: ${hintCollegamento} Se compare ma dice un'altra cosa: il testo deve essere esattamente «Arrivo subito!», con il punto esclamativo.`),
              alertsQuanti(1, 'Un alert solo', 'Deve comparire un alert solo per ogni clic.'),
            ],
          },
        ],
        codiceIniziale: '// 1. Scrivi la funzione\n\n// 2. Collega il pulsante alla funzione\n',
      },
      {
        consegna: 'Ora, al clic, il campanello **prima** chiede il nome con `prompt` e lo mette in una variabile. **Poi** l\'alert di prima cambia: invece di `Arrivo subito!` dice `Arrivo subito, NOME!` (se il cliente scrive Luca: `Arrivo subito, Luca!`). L\'alert resta uno solo.',
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalPrompt}`,
        prove: [
          {
            nome: 'rispondendo «Luca»',
            passi: [
              risposte('Luca'),
              clic('btnSuona', 'Suona il campanello'),
              domandaFatta(1, 'La pagina chiede il nome con prompt', 'Non è comparsa nessuna domanda: il prompt va dentro la funzione, prima dell\'alert.'),
              alertUguale('Arrivo subito, Luca!', 'L\'alert dice «Arrivo subito, Luca!»', 'Il nome deve entrare nel messaggio: unisci il testo e la variabile con il +, e attento a virgola, spazio e punto esclamativo.'),
            ],
          },
          {
            nome: 'rispondendo «Giulia»',
            passi: [
              risposte('Giulia'),
              clic('btnSuona', 'Suona il campanello'),
              domandaFatta(1, 'La pagina chiede il nome con prompt', 'Non è comparsa nessuna domanda.'),
              alertUguale('Arrivo subito, Giulia!', 'L\'alert dice «Arrivo subito, Giulia!»', 'Il nome nell\'alert deve essere quello scritto nel prompt, non uno fisso.'),
            ],
          },
        ],
      },
      {
        consegna: `Il nome del negozio servirà in più messaggi: conviene scriverlo **una volta sola**, in una costante.\n1. **In cima al codice, sopra la funzione**, scrivi una \`const\` che contiene **solo** il nome del negozio, per esempio \`const NEGOZIO = "${negozio}";\`. Il nome della costante lo scegli tu.\n2. Cambia l'alert: al posto di \`Arrivo subito, NOME!\` ora dice \`${saluto('NOME')}\` (per Luca: \`${saluto('Luca')}\`). L'alert resta uno solo.\n3. L'alert è fatto di pezzi uniti con il \`+\`: il testo \`Benvenuto da \`, la costante, il testo \`, \`, la variabile con il nome del cliente e il testo \`!\`.`,
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalPrompt} Il nome del negozio sta in una costante (const) e nel messaggio entra la costante, non il testo ripetuto.`,
        scrittoUnaVolta: { testo: negozio, cosa: 'il nome del negozio' },
        prove: [
          {
            nome: 'rispondendo «Luca»',
            passi: [
              risposte('Luca'),
              clic('btnSuona', 'Suona il campanello'),
              domandaFatta(1, 'La pagina chiede il nome con prompt', 'La domanda del nome deve restare.'),
              alertUguale(saluto('Luca'), `L'alert dice «${saluto('Luca')}»`, 'Il messaggio è fatto di pezzi: il testo «Benvenuto da » (con lo spazio), la costante del negozio, «, » (virgola e spazio), la variabile con il nome del cliente e «!». Uniscili con il +.'),
            ],
          },
          {
            nome: 'rispondendo «Sara»',
            passi: [risposte('Sara'), clic('btnSuona', 'Suona il campanello'), alertUguale(saluto('Sara'), `L'alert dice «${saluto('Sara')}»`, 'Il nome deve essere quello risposto al prompt.')],
          },
        ],
      },
      {
        consegna: `Il secondo pulsante, **Orari di apertura**, mostra un alert con \`${orari}\`. Il nome del negozio **non si riscrive**: usa la stessa costante, unita con il \`+\` al testo \`${dopoNegozio}\`. Serve una seconda funzione con nome e un secondo \`addEventListener\` (l'id del pulsante è nel pannello HTML). Il campanello continua a funzionare come prima.`,
        regola: `${REGOLE.treGesti} Ogni pulsante ha la sua funzione con nome. Anche negli orari il nome del negozio entra con la costante, non riscritto a mano.`,
        scrittoUnaVolta: { testo: negozio, cosa: 'il nome del negozio' },
        prove: [
          {
            nome: 'con Luca',
            passi: [
              clic('btnOrari', 'Orari di apertura'),
              alertUguale(orari, `Clic su «Orari di apertura»: alert con «${orari}»`, 'Se non compare: il secondo pulsante ha il suo id, collegalo alla seconda funzione con un altro addEventListener. Se dice un\'altra cosa: la costante del negozio unita con il + al resto del testo, che comincia con i due punti.'),
              risposte('Luca'),
              clic('btnSuona', 'Suona il campanello'),
              alertUguale(saluto('Luca'), `Il campanello saluta ancora: «${saluto('Luca')}»`, 'Il campanello deve continuare a funzionare come nella fase prima.'),
              alertsQuanti(2, 'Due alert in tutto, uno per pulsante', 'Ogni pulsante deve fare un alert solo.'),
            ],
          },
        ],
      },
      {
        consegna: 'Dopo l\'alert del saluto, il campanello chiede con `confirm` se il cliente vuole ricevere le offerte e salva la risposta in una variabile. Poi mostra un secondo alert: il testo `Offerte: ` unito alla variabile. `confirm` dà `true` se si preme OK e `false` se si preme Annulla, quindi l\'alert dirà da solo `Offerte: true` o `Offerte: false`. Non serve un `if`.',
        regola: `${REGOLE.treGesti} La risposta del confirm sta in una variabile e finisce nell'alert: non valgono due alert scritti a mano.`,
        scrittoUnaVolta: { testo: negozio, cosa: 'il nome del negozio' },
        prove: [
          {
            nome: 'rispondendo «Luca» e premendo OK',
            passi: [
              risposte('Luca'),
              conferme(true),
              clic('btnSuona', 'Suona il campanello'),
              alertsQuanti(2, 'Due alert: il saluto e poi le offerte', 'Dopo il saluto ci vuole il confirm e poi un secondo alert con la risposta.'),
              alertUguale('Offerte: true', 'Il secondo alert dice «Offerte: true»', 'Unisci il testo «Offerte: » con la variabile del confirm: JavaScript scrive true o false da solo.'),
            ],
          },
          {
            nome: 'premendo Annulla',
            passi: [risposte('Anna'), conferme(false), clic('btnSuona', 'Suona il campanello'), alertUguale('Offerte: false', 'Il secondo alert dice «Offerte: false»', 'La risposta deve venire dal confirm: con Annulla è false.')],
          },
        ],
      },
    ],
    soluzioni: [
      `function suona() {
  alert("Arrivo subito!");
}

document.getElementById("btnSuona").addEventListener("click", suona);`,
      `function suona() {
  let nome = prompt("Come ti chiami?");
  alert("Arrivo subito, " + nome + "!");
}

document.getElementById("btnSuona").addEventListener("click", suona);`,
      `const NEGOZIO = "${negozio}";

function suona() {
  let nome = prompt("Come ti chiami?");
  alert("Benvenuto da " + NEGOZIO + ", " + nome + "!");
}

document.getElementById("btnSuona").addEventListener("click", suona);`,
      `const NEGOZIO = "${negozio}";

function suona() {
  let nome = prompt("Come ti chiami?");
  alert("Benvenuto da " + NEGOZIO + ", " + nome + "!");
}

function mostraOrari() {
  alert(NEGOZIO + "${dopoNegozio}");
}

document.getElementById("btnSuona").addEventListener("click", suona);
document.getElementById("btnOrari").addEventListener("click", mostraOrari);`,
      `const NEGOZIO = "${negozio}";

function suona() {
  let nome = prompt("Come ti chiami?");
  alert("Benvenuto da " + NEGOZIO + ", " + nome + "!");
  let offerte = confirm("Vuoi ricevere le offerte?");
  alert("Offerte: " + offerte);
}

function mostraOrari() {
  alert(NEGOZIO + "${dopoNegozio}");
}

document.getElementById("btnSuona").addEventListener("click", suona);
document.getElementById("btnOrari").addEventListener("click", mostraOrari);`,
    ],
  };
}
