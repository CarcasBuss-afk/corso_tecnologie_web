/* Compito facile · La macchinetta dei numeri (Modulo 4, lezione 9).
 * Idea nuova: la funzione con un parametro che restituisce un risultato con return, provata
 * prima nella console e poi chiamata dalla funzione di un pulsante; alla fine una funzione con
 * due parametri. Tre fasi, molto guidate: il codice d'esempio è quasi tutto nella consegna. */
import { clic, CSS_BASE, rigaConsole, scrivi, testo } from './aiuti';
import { generatore, intero, REGOLE, scegli, type Compito } from './tipi';

const MAESTRE = ['Bianchi', 'Rossi', 'Ferrari', 'Esposito', 'Colombo', 'Ricci'] as const;

export function generaRaddoppiatore(seme: number): Compito {
  const rnd = generatore(seme);
  const maestra = scegli(rnd, MAESTRE);
  const provaConsole = intero(rnd, 13, 49);
  const tabellina = scegli(rnd, [3, 4, 6, 7, 8, 9] as const);
  const numeri = [intero(rnd, 6, 12), intero(rnd, 21, 45)];

  const html = `<h1>🔢 La macchinetta dei numeri</h1>
<label>Numero: <input id="numero" type="number" value="0"></label>
<button id="btnDoppio">Raddoppia</button>
<button id="btnPer">Per ${tabellina}</button>
<p id="risultato"></p>`;

  const fraseDoppio = (n: number) => `Il doppio di ${n} è ${n * 2}`;
  const frasePer = (n: number) => `${n} per ${tabellina} fa ${n * tabellina}`;

  const raddoppia = (n: number) => [scrivi('numero', String(n), 'Numero'), clic('btnDoppio', 'Raddoppia')];
  const moltiplica = (n: number) => [scrivi('numero', String(n), 'Numero'), clic('btnPer', `Per ${tabellina}`)];

  const provaDoppio = (n: number, hint: string) => ({
    nome: `con il numero ${n}`,
    passi: [...raddoppia(n), testo('risultato', fraseDoppio(n), `Il paragrafo dice «${fraseDoppio(n)}»`, hint)],
  });
  const provaPer = (n: number, hint: string) => ({
    nome: `con il numero ${n}`,
    passi: [...moltiplica(n), testo('risultato', frasePer(n), `Il paragrafo dice «${frasePer(n)}»`, hint)],
  });

  const DOPPIO = `function doppio(numero) {
  return numero * 2;
}`;
  const PROVE_CONSOLE = `console.log(doppio(5));
console.log(doppio(${provaConsole}));`;
  const PULSANTE_DOPPIO = `function raddoppia() {
  let n = Number(document.getElementById("numero").value);
  document.getElementById("risultato").innerHTML = "Il doppio di " + n + " è " + doppio(n);
}`;

  return {
    scheda: {
      id: 'raddoppiatore',
      titolo: 'La macchinetta dei numeri',
      lezione: 'Modulo 4 · Lezione 9',
      committente: `La maestra ${maestra} insegna in una terza elementare: vuole una macchinetta per far controllare ai bambini i doppi e la tabellina del ${tabellina}.`,
      prodotto: 'Una pagina con due pulsanti: i conti li fanno due funzioni che ricevono i numeri e restituiscono il risultato con return.',
      dati: [`la prova in console: doppio(5) e doppio(${provaConsole})`, `la tabellina: del ${tabellina}`],
      risultatoFinale: [
        `«Raddoppia» legge il numero e scrive, per esempio, «${fraseDoppio(7)}».`,
        `«Per ${tabellina}» scrive, per esempio, «${frasePer(7)}».`,
        'I conti li fanno le funzioni doppio e moltiplica, con i parametri e il return.',
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Una funzione che riceve un numero e **restituisce** il suo doppio.\n1. Scrivi la funzione \`doppio\` con il parametro \`numero\`: dentro c'è una riga sola, \`return numero * 2;\`. La prima riga è \`function doppio(numero) {\`.\n2. Sotto la funzione, provala nella console con due righe: \`console.log(doppio(5));\` e \`console.log(doppio(${provaConsole}));\`.\nNella **console**, sotto la pagina, devono comparire 10 e ${provaConsole * 2}. Per ora i pulsanti non fanno niente.`,
        regola: `${REGOLE.funzioneConReturn} I numeri in console arrivano dalle chiamate doppio(5) e doppio(${provaConsole}) dentro console.log, non sono scritti a mano.`,
        prove: [
          {
            passi: [
              rigaConsole('10', 'In console c\'è la riga «10»', 'Dentro console.log va la chiamata doppio(5): la funzione restituisce il numero con return, e console.log lo scrive. Se in console leggi undefined, manca il return.'),
              rigaConsole(String(provaConsole * 2), `In console c'è la riga «${provaConsole * 2}»`, `La seconda prova è doppio(${provaConsole}), sempre dentro console.log.`),
            ],
          },
        ],
        codiceIniziale: '// 1. La funzione doppio, con il parametro numero\n\n// 2. Le due prove nella console\n',
      },
      {
        consegna: `Ora la macchinetta usa \`doppio\` con il pulsante **Raddoppia** (id \`btnDoppio\`).\n1. Scrivi una **nuova** funzione per il pulsante, senza parametri come sempre, e collegala con \`addEventListener\`.\n2. Dentro, leggi il numero della casella (id \`numero\`) con \`Number(document.getElementById("numero").value)\` e mettilo in una variabile.\n3. Scrivi nel paragrafo (id \`risultato\`) \`Il doppio di X è Y\`: X è il numero letto, Y lo calcola \`doppio(...)\` con dentro la variabile. Per esempio, con 7 scrive \`${fraseDoppio(7)}\`.\nLe due righe di prova con \`console.log\` puoi lasciarle o toglierle.`,
        regola: `${REGOLE.treGesti} ${REGOLE.funzioneConReturn} ${REGOLE.datiDalleCaselle} Il doppio lo calcola la chiamata doppio(...) dentro la funzione del pulsante, non un * 2 riscritto lì.`,
        prove: [
          provaDoppio(numeri[0], 'La funzione del pulsante legge la casella con Number(...value), poi unisce i pezzi con +: "Il doppio di ", il numero, " è ", e la chiamata doppio(...). Se leggi undefined, a doppio manca il return.'),
          provaDoppio(numeri[1], 'Il numero deve venire dalla casella: se il risultato è sempre lo stesso, non la stai leggendo dentro la funzione del pulsante.'),
          provaDoppio(0, 'Con 0 il doppio è 0: la frase resta la stessa, cambiano solo i numeri.'),
        ],
      },
      {
        consegna: `Il secondo pulsante, **Per ${tabellina}** (id \`btnPer\`), usa una funzione con **due parametri**.\n1. Scrivi la funzione \`moltiplica(numero, volte)\`, che restituisce \`numero * volte\` con \`return\`.\n2. Scrivi una nuova funzione per il pulsante e collegala con \`addEventListener\`. Legge la casella come Raddoppia e scrive nel paragrafo \`X per ${tabellina} fa Y\`, dove Y lo calcola \`moltiplica(...)\` con dentro **il numero letto e ${tabellina}**, in quest'ordine. Per esempio, con 7 scrive \`${frasePer(7)}\`.\nRaddoppia deve continuare a funzionare.`,
        regola: `${REGOLE.treGesti} ${REGOLE.funzioneConReturn} ${REGOLE.datiDalleCaselle} La moltiplicazione la fa moltiplica, una funzione con due parametri chiamata con il numero letto e ${tabellina}.`,
        prove: [
          provaPer(numeri[0], `Una funzione nuova per il pulsante: legge la casella, poi scrive il numero, " per ${tabellina} fa " e la chiamata moltiplica(...) con i due valori separati da una virgola.`),
          provaPer(numeri[1], 'Il numero deve venire dalla casella, letto dentro la funzione del pulsante.'),
          provaDoppio(numeri[1], 'Raddoppia deve continuare a funzionare come nella fase 2.'),
        ],
      },
    ],
    soluzioni: [
      `${DOPPIO}

${PROVE_CONSOLE}`,
      `${DOPPIO}

${PULSANTE_DOPPIO}

document.getElementById("btnDoppio").addEventListener("click", raddoppia);`,
      `${DOPPIO}

function moltiplica(numero, volte) {
  return numero * volte;
}

${PULSANTE_DOPPIO}

function perTabellina() {
  let n = Number(document.getElementById("numero").value);
  document.getElementById("risultato").innerHTML = n + " per ${tabellina} fa " + moltiplica(n, ${tabellina});
}

document.getElementById("btnDoppio").addEventListener("click", raddoppia);
document.getElementById("btnPer").addEventListener("click", perTabellina);`,
    ],
  };
}
