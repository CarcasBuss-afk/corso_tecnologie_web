/* Compito facile · Il termometro (Modulo 4, lezione 6).
 * Idea nuova: decidere su un numero. Il prompt dà un testo, Number() lo fa diventare numero,
 * e un if/else con >= sceglie fra due messaggi; poi il colore nelle due strade, e infine una
 * terza strada con else if. Tre fasi, molto guidate: le righe da scrivere sono quasi tutte
 * nella consegna. Le soglie sono numeri interi, e così le risposte delle prove. */
import { clic, CSS_BASE, domandaFatta, risposte, ROSSI, stile, testo, VERDI } from './aiuti';
import { generatore, intero, REGOLE, scegli, type Compito } from './tipi';

const PISCINE = ['Piscina Comunale', 'Piscina del Parco', 'Piscina Arcobaleno', 'Piscina delle Rondini', 'Piscina Acquachiara'] as const;
const BAGNINI = ['Marco', 'Giulia', 'Luca', 'Sara', 'Davide', 'Chiara'] as const;

export function generaTermometro(seme: number): Compito {
  const rnd = generatore(seme);
  const piscina = scegli(rnd, PISCINE);
  const bagnino = scegli(rnd, BAGNINI);
  const minima = scegli(rnd, [24, 25, 26, 27] as const);
  const massima = minima + scegli(rnd, [5, 6, 7] as const);
  const calda = minima + intero(rnd, 1, 3);
  const fredda = minima - intero(rnd, 2, 6);

  const html = `<h1>🌡️ ${piscina}</h1>
<button id="btnAcqua">Misura l'acqua</button>
<p id="messaggio">Il termometro aspetta.</p>`;

  const NUOTARE = 'Si può nuotare';
  const FREDDA = 'Acqua troppo fredda';
  const CALDA = 'Acqua troppo calda';

  const misura = (gradi: number) => [risposte(String(gradi)), clic('btnAcqua', "Misura l'acqua")];
  const dice = (atteso: string, gradi: number, hint: string) =>
    testo('messaggio', atteso, `Con ${gradi} gradi il messaggio dice «${atteso}»`, hint);

  return {
    scheda: {
      id: 'termometro',
      titolo: 'Il termometro',
      lezione: 'Modulo 4 · Lezione 6',
      committente: `${bagnino}, il bagnino della «${piscina}», misura ogni mattina la temperatura dell'acqua: vuole una pagina che gli dica subito se si può nuotare.`,
      prodotto: 'Una pagina con un pulsante che chiede i gradi dell\'acqua e decide il messaggio con if, else ed else if.',
      dati: [`si nuota da ${minima} gradi in su`, `l'acqua è troppo calda da ${massima} gradi in su`],
      risultatoFinale: [
        `«Misura l'acqua» chiede i gradi con prompt e li trasforma in numero con Number().`,
        `Sotto ${minima} gradi dice «${FREDDA}», in rosso.`,
        `Da ${minima} gradi in su dice «${NUOTARE}», in verde.`,
        `Da ${massima} gradi in su dice «${CALDA}», in rosso.`,
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Il pulsante **Misura l'acqua** (id \`btnAcqua\`) chiede i gradi dell'acqua e risponde nel paragrafo (id \`messaggio\`).\n1. Scrivi una funzione e collegala al pulsante con \`addEventListener\`.\n2. Dentro, chiedi i gradi: \`let testo = prompt("...");\`. La domanda la scegli tu.\n3. Trasforma la risposta in numero: \`let gradi = Number(testo);\`.\n4. Cerca il paragrafo: \`let messaggio = document.getElementById("messaggio");\`.\n5. Scrivi \`if (gradi >= ${minima}) {\`: nelle graffe il paragrafo dice esattamente \`${NUOTARE}\`.\n6. Poi \`} else {\`: nelle graffe il paragrafo dice esattamente \`${FREDDA}\`.\nDa ${minima} gradi in su si nuota, sotto ${minima} no. Il ${minima} si scrive senza virgolette: è un numero.`,
        regola: `${REGOLE.treGesti} ${REGOLE.decisioneConIf} La risposta si converte con Number() e si confronta con >= ${minima} (o equivalente).`,
        prove: [
          {
            nome: `rispondendo «${calda}»`,
            passi: [
              ...misura(calda),
              domandaFatta(1, 'La pagina chiede i gradi', 'Non è comparsa nessuna domanda: il prompt va dentro la funzione, e la funzione va collegata al pulsante.'),
              dice(NUOTARE, calda, `Prima Number() sulla risposta, poi if (gradi >= ${minima}) con il numero senza virgolette. Il testo va scritto identico, con la ò accentata.`),
            ],
          },
          {
            nome: `rispondendo «${fredda}»`,
            passi: [...misura(fredda), dice(FREDDA, fredda, 'Le graffe dell\'else servono a questo: quando il confronto è falso, l\'acqua è troppo fredda.')],
          },
          {
            nome: `rispondendo proprio «${minima}»`,
            passi: [...misura(minima), dice(NUOTARE, minima, `Con ${minima} gradi esatti si nuota già: il confronto giusto è >= (maggiore o uguale), non >.`)],
          },
          {
            nome: `rispondendo «${minima - 1}»`,
            passi: [...misura(minima - 1), dice(FREDDA, minima - 1, `Con ${minima - 1} gradi l'acqua è ancora fredda: la soglia è ${minima}.`)],
          },
        ],
        codiceIniziale: '// 1. Scrivi la funzione: prompt, Number(), il paragrafo, if ed else\n\n// 2. Collega il pulsante alla funzione\n',
      },
      {
        consegna: `Ora il messaggio si colora: **verde** quando si nuota, **rosso** quando l'acqua è fredda.\n1. Nelle graffe dell'\`if\`, sotto la riga del testo, **aggiungi** \`messaggio.style.color = "green";\`.\n2. Nelle graffe dell'\`else\` **aggiungi** la stessa riga con \`"red"\`.\n\`style.color\` è il colore del testo, non lo sfondo. I due testi restano quelli di prima.`,
        regola: `${REGOLE.treGesti} ${REGOLE.decisioneConIf} Il verde sta nelle graffe dell'if, il rosso in quelle dell'else.`,
        prove: [
          {
            nome: `rispondendo «${calda}»`,
            passi: [
              ...misura(calda),
              dice(NUOTARE, calda, 'Il testo della fase prima deve restare.'),
              stile('messaggio', 'color', VERDI, 'Il messaggio è verde', 'Nelle graffe dell\'if aggiungi messaggio.style.color = "green";'),
            ],
          },
          {
            nome: `rispondendo «${fredda}»`,
            passi: [
              ...misura(fredda),
              dice(FREDDA, fredda, 'L\'else deve restare.'),
              stile('messaggio', 'color', ROSSI, 'Il messaggio è rosso', 'Nelle graffe dell\'else aggiungi messaggio.style.color = "red";'),
            ],
          },
          {
            nome: `rispondendo «${calda}» e poi «${fredda}»`,
            passi: [
              ...misura(calda),
              ...misura(fredda),
              stile('messaggio', 'color', ROSSI, 'Dopo il secondo clic il messaggio è diventato rosso', 'Ogni strada mette il suo colore: anche l\'else deve cambiare style.color, se no resta il verde di prima.'),
            ],
          },
        ],
      },
      {
        consegna: `${bagnino} avverte: da ${massima} gradi in su l'acqua è **troppo calda**. Serve una terza strada, con \`else if\`.\n1. **Sostituisci** la riga dell'if con \`if (gradi >= ${massima}) {\`: nelle graffe il paragrafo dice esattamente \`${CALDA}\`, in rosso (\`"red"\`).\n2. Poi continua con \`} else if (gradi >= ${minima}) {\`: nelle sue graffe vanno le due righe di prima, \`${NUOTARE}\` in verde.\n3. L'\`else\` resta com'è: \`${FREDDA}\`, in rosso.\nL'ordine conta: prima si controlla ${massima}, poi ${minima}.`,
        regola: `${REGOLE.treGesti} La scelta a tre vie la fa un if / else if / else sui gradi convertiti con Number(): prima il confronto con ${massima}, poi con ${minima}. Non valgono testi fissi.`,
        prove: [
          {
            nome: `rispondendo proprio «${massima}»`,
            passi: [
              ...misura(massima),
              dice(CALDA, massima, `Il primo if controlla da ${massima} in su, con >=: con ${massima} gradi esatti l'acqua è già troppo calda.`),
              stile('messaggio', 'color', ROSSI, 'Il messaggio è rosso', 'Nelle graffe del primo if, sotto il testo, metti style.color a "red".'),
            ],
          },
          {
            nome: `rispondendo «${massima + 3}»`,
            passi: [...misura(massima + 3), dice(CALDA, massima + 3, `Se qui leggi «${NUOTARE}», il confronto con ${minima} viene prima di quello con ${massima}: scambiali.`)],
          },
          {
            nome: `rispondendo «${massima - 1}»`,
            passi: [
              ...misura(massima - 1),
              dice(NUOTARE, massima - 1, `Con ${massima - 1} gradi si nuota ancora: è l'else if con >= ${minima}.`),
              stile('messaggio', 'color', VERDI, 'Il messaggio è verde', 'Il verde resta nelle graffe dell\'else if.'),
            ],
          },
          {
            nome: `rispondendo «${fredda}»`,
            passi: [...misura(fredda), dice(FREDDA, fredda, 'L\'else finale resta: prende tutto quello che è sotto ' + minima + '.')],
          },
        ],
      },
    ],
    soluzioni: [
      `function misuraAcqua() {
  let testo = prompt("Quanti gradi ha l'acqua?");
  let gradi = Number(testo);
  let messaggio = document.getElementById("messaggio");
  if (gradi >= ${minima}) {
    messaggio.innerHTML = "${NUOTARE}";
  } else {
    messaggio.innerHTML = "${FREDDA}";
  }
}

document.getElementById("btnAcqua").addEventListener("click", misuraAcqua);`,
      `function misuraAcqua() {
  let testo = prompt("Quanti gradi ha l'acqua?");
  let gradi = Number(testo);
  let messaggio = document.getElementById("messaggio");
  if (gradi >= ${minima}) {
    messaggio.innerHTML = "${NUOTARE}";
    messaggio.style.color = "green";
  } else {
    messaggio.innerHTML = "${FREDDA}";
    messaggio.style.color = "red";
  }
}

document.getElementById("btnAcqua").addEventListener("click", misuraAcqua);`,
      `function misuraAcqua() {
  let testo = prompt("Quanti gradi ha l'acqua?");
  let gradi = Number(testo);
  let messaggio = document.getElementById("messaggio");
  if (gradi >= ${massima}) {
    messaggio.innerHTML = "${CALDA}";
    messaggio.style.color = "red";
  } else if (gradi >= ${minima}) {
    messaggio.innerHTML = "${NUOTARE}";
    messaggio.style.color = "green";
  } else {
    messaggio.innerHTML = "${FREDDA}";
    messaggio.style.color = "red";
  }
}

document.getElementById("btnAcqua").addEventListener("click", misuraAcqua);`,
    ],
  };
}
