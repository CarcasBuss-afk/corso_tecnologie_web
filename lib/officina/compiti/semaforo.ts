/* Compito facile · Il semaforo (Modulo 4, lezione 5).
 * Idea nuova: .style.backgroundColor cambia il colore di sfondo di un elemento, con il valore
 * fra virgolette e in inglese. Un pulsante per luce, una fase per pulsante: ogni volta la luce
 * cambia colore e il cartello cambia scritta. Tre fasi, molto guidate: la prima riga di codice
 * è quasi tutta nella consegna. Il normale della lezione è la lampada da comodino. */
import { clic, CSS_BASE, GIALLI, GRIGI, ROSSI, stile, testo, VERDI } from './aiuti';
import { generatore, REGOLE, scegli, type Compito } from './tipi';

const LUOGHI = [
  'davanti alla scuola',
  'all\'uscita della palestra',
  'vicino alla fermata del pullman',
  'davanti alla biblioteca',
  'all\'incrocio del parco',
  'davanti al campo da calcio',
] as const;

const TESTI_VERDE = ['Passa pure.', 'Puoi attraversare.', 'Via libera!', 'Attraversa.'] as const;
const TESTI_ROSSO = ['Fermati!', 'Aspetta sul marciapiede.', 'Stop, non attraversare.', 'Resta fermo.'] as const;
const TESTI_GIALLO = ['Attenzione!', 'Sta per diventare rosso.', 'Non partire adesso.', 'Aspetta un attimo.'] as const;

const SPENTO = 'Il semaforo è spento.';

export function generaSemaforo(seme: number): Compito {
  const rnd = generatore(seme);
  const luogo = scegli(rnd, LUOGHI);
  const passa = scegli(rnd, TESTI_VERDE);
  const fermati = scegli(rnd, TESTI_ROSSO);
  const attenzione = scegli(rnd, TESTI_GIALLO);

  const html = `<h1>🚦 Il semaforo ${luogo}</h1>
<div id="luce"></div>
<p id="cartello">${SPENTO}</p>
<div>
  <button id="btnVerde">Verde</button>
  <button id="btnGiallo">Giallo</button>
  <button id="btnRosso">Rosso</button>
</div>`;

  const css = `${CSS_BASE}

div {
  margin: 10px auto;
}

#luce {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 8px solid #333;
  background-color: gray;
  margin: 20px auto;
}`;

  const VERDE = `function verde() {
  document.getElementById("luce").style.backgroundColor = "green";
  document.getElementById("cartello").innerHTML = "${passa}";
}`;
  const ROSSO = `function rosso() {
  document.getElementById("luce").style.backgroundColor = "red";
  document.getElementById("cartello").innerHTML = "${fermati}";
}`;
  const GIALLO = `function giallo() {
  document.getElementById("luce").style.backgroundColor = "yellow";
  document.getElementById("cartello").innerHTML = "${attenzione}";
}`;
  const COLLEGA_VERDE = 'document.getElementById("btnVerde").addEventListener("click", verde);';
  const COLLEGA_ROSSO = 'document.getElementById("btnRosso").addEventListener("click", rosso);';
  const COLLEGA_GIALLO = 'document.getElementById("btnGiallo").addEventListener("click", giallo);';

  const luceVerde = (descrizione: string, hint: string) => stile('luce', 'backgroundColor', VERDI, descrizione, hint);
  const luceRossa = (descrizione: string, hint: string) => stile('luce', 'backgroundColor', ROSSI, descrizione, hint);
  const luceGialla = (descrizione: string, hint: string) => stile('luce', 'backgroundColor', GIALLI, descrizione, hint);
  const cartello = (frase: string, hint: string) => testo('cartello', frase, `Il cartello dice «${frase}»`, hint);

  return {
    scheda: {
      id: 'semaforo',
      titolo: 'Il semaforo',
      lezione: 'Modulo 4 · Lezione 5',
      committente: `Il vigile del quartiere vuole spiegare ai bambini delle elementari come funziona il semaforo pedonale ${luogo}: chiede una pagina con un semaforo da comandare con tre pulsanti.`,
      prodotto: 'Una pagina in cui ogni pulsante cambia il colore di sfondo della luce e la scritta del cartello.',
      dati: [`il semaforo: ${luogo}`, `con il verde: «${passa}»`, `con il rosso: «${fermati}»`, `con il giallo: «${attenzione}»`],
      risultatoFinale: [
        `«Verde» colora la luce di verde e il cartello dice «${passa}».`,
        `«Rosso» colora la luce di rosso e il cartello dice «${fermati}».`,
        `«Giallo» colora la luce di giallo e il cartello dice «${attenzione}».`,
        'I pulsanti si possono premere in qualunque ordine: vale sempre l\'ultimo.',
      ],
    },
    pagina: { html, css },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `All'inizio la luce è grigia: il semaforo è spento. Fai funzionare il pulsante **Verde** (id \`btnVerde\`).\n1. Scrivi una funzione \`verde\`. La prima riga è \`function verde() {\`.\n2. Dentro, la prima riga cambia lo **sfondo** della luce (id \`luce\`): \`document.getElementById("luce").style.backgroundColor = "green";\`\n3. La seconda riga cambia con \`innerHTML\` il cartello (id \`cartello\`): deve dire \`${passa}\`\n4. Chiudi la funzione con \`}\` e, sotto, collegala al pulsante con \`addEventListener\`.\nRicorda: \`backgroundColor\` si scrive con la **C maiuscola** e il colore va fra virgolette, in inglese.`,
        regola: REGOLE.treGesti,
        prove: [
          {
            passi: [
              stile('luce', 'backgroundColor', GRIGI, 'All\'inizio la luce è grigia', 'All\'inizio non devi fare niente: il grigio lo mette il CSS.'),
              clic('btnVerde', 'Verde'),
              luceVerde('Dopo Verde la luce è verde', 'Lo sfondo si cambia con style.backgroundColor (C maiuscola), con il valore fra virgolette e in inglese: green, non verde.'),
              cartello(passa, 'Il cartello ha l\'id «cartello»: cambia il suo innerHTML nella stessa funzione, con il testo esatto, punteggiatura compresa.'),
            ],
          },
          {
            nome: 'premendo Verde due volte',
            passi: [
              clic('btnVerde', 'Verde'),
              clic('btnVerde', 'Verde'),
              luceVerde('La luce resta verde', 'La funzione deve essere collegata al pulsante con addEventListener e l\'evento "click".'),
              cartello(passa, 'Il testo del cartello va scritto uguale a quello della consegna.'),
            ],
          },
        ],
        codiceIniziale: '// 1. La funzione verde\n\n// 2. Collega il pulsante Verde alla funzione\n',
      },
      {
        consegna: `Ora il pulsante **Rosso** (id \`btnRosso\`).\n1. **Aggiungi** una nuova funzione \`rosso\`, collegata con \`addEventListener\` al pulsante \`btnRosso\`. Puoi copiare la funzione \`verde\` e cambiarla.\n2. Dentro, lo **sfondo** della luce diventa rosso: \`style.backgroundColor = "red"\`.\n3. Il cartello dice \`${fermati}\`\nNon cancellare la funzione \`verde\`: dopo il Rosso, il Verde deve ancora far tornare la luce verde.`,
        regola: `${REGOLE.treGesti} Ogni pulsante ha la sua funzione con nome.`,
        prove: [
          {
            passi: [
              clic('btnRosso', 'Rosso'),
              luceRossa('Dopo Rosso la luce è rossa', 'Una funzione nuova per il pulsante Rosso, con style.backgroundColor e un rosso in inglese fra virgolette (red).'),
              cartello(fermati, 'Nella funzione del Rosso cambia anche l\'innerHTML del cartello, con il testo esatto.'),
            ],
          },
          {
            nome: 'Rosso, poi Verde',
            passi: [
              clic('btnRosso', 'Rosso'),
              clic('btnVerde', 'Verde'),
              luceVerde('Dopo Verde la luce torna verde', 'La funzione verde deve restare, collegata al suo pulsante.'),
              cartello(passa, 'Il Verde deve continuare a cambiare il cartello come nella fase 1.'),
              clic('btnRosso', 'Rosso'),
              luceRossa('Di nuovo Rosso: la luce torna rossa', 'Ogni clic su Rosso rimette il rosso: la funzione cambia lo sfondo ogni volta.'),
            ],
          },
        ],
      },
      {
        consegna: `L'ultimo pulsante: **Giallo** (id \`btnGiallo\`).\n1. **Aggiungi** una nuova funzione \`giallo\`, collegata con \`addEventListener\` al pulsante \`btnGiallo\`.\n2. Dentro, lo **sfondo** della luce diventa giallo: \`style.backgroundColor = "yellow"\`.\n3. Il cartello dice \`${attenzione}\`\nVerde e Rosso devono continuare a funzionare: alla fine il semaforo si comanda in qualunque ordine.`,
        regola: `${REGOLE.treGesti} Ogni pulsante ha la sua funzione con nome.`,
        prove: [
          {
            passi: [
              clic('btnGiallo', 'Giallo'),
              luceGialla('Dopo Giallo la luce è gialla', 'Una funzione nuova per il pulsante Giallo, con style.backgroundColor e un giallo in inglese fra virgolette (yellow).'),
              cartello(attenzione, 'Nella funzione del Giallo cambia anche l\'innerHTML del cartello, con il testo esatto.'),
            ],
          },
          {
            nome: 'Verde, Giallo, Rosso, come un semaforo vero',
            passi: [
              clic('btnVerde', 'Verde'),
              luceVerde('Verde: la luce è verde', 'Il Verde deve funzionare come prima.'),
              clic('btnGiallo', 'Giallo'),
              luceGialla('Giallo: la luce è gialla', 'Il Giallo cambia lo sfondo della luce, non del cartello.'),
              cartello(attenzione, 'Il cartello del Giallo ha il testo della consegna.'),
              clic('btnRosso', 'Rosso'),
              luceRossa('Rosso: la luce è rossa', 'Il Rosso deve funzionare come prima.'),
              cartello(fermati, 'Il Rosso deve continuare a cambiare il cartello.'),
            ],
          },
        ],
      },
    ],
    soluzioni: [
      `${VERDE}

${COLLEGA_VERDE}`,
      `${VERDE}

${ROSSO}

${COLLEGA_VERDE}
${COLLEGA_ROSSO}`,
      `${VERDE}

${ROSSO}

${GIALLO}

${COLLEGA_VERDE}
${COLLEGA_ROSSO}
${COLLEGA_GIALLO}`,
    ],
  };
}
