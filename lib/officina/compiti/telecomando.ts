/* Compito normale · Il telecomando (Modulo 4, lezione 2).
 * Idea nuova: lo schema in tre passi (id → funzione con nome → addEventListener) ripetuto per
 * cinque pulsanti, con dentro quello che la Lezione 1 ha insegnato sul console.log: più valori
 * separati da virgole (testo fra virgolette, numero senza), un calcolo fatto da JavaScript, una
 * funzione che scrive tre righe. Niente alert, prompt o variabili: arrivano nella Lezione 3.
 * I pulsanti parlano solo con la console, come nella lezione. */
import { clic, CSS_BASE, rigaConsole } from './aiuti';
import { generatore, intero, REGOLE, scegli, type Compito } from './tipi';

const MARCHE = ['Orion', 'Stella', 'Lumen', 'Zenit', 'Nova', 'Vega', 'Astra'] as const;

/** Quanto vale una tacca di volume, in percentuale: il display della TV mostra tacche * 5. */
const PER_TACCA = 5;

export function generaTelecomando(seme: number): Compito {
  const rnd = generatore(seme);
  const tv = `TV ${scegli(rnd, MARCHE)}`;
  const canale = intero(rnd, 1, 9);
  const tacche = intero(rnd, 3, 12);

  const accesa = `${tv} accesa`;
  const spenta = `${tv} spenta`;
  const rigaCanaleTesto = `Canale ${canale}`;
  const rigaVolumeTesto = `Volume ${tacche * PER_TACCA} %`;
  const calcolo = `${tacche} * ${PER_TACCA}`;

  const html = `<h1>📺 ${tv}</h1>
<p>Il telecomando scrive nella <strong>console</strong>, sotto la pagina.</p>
<button id="btnAccendi">Accendi</button>
<button id="btnSpegni">Spegni</button>
<button id="btnCanale">Canale</button>
<button id="btnVolume">Volume</button>
<button id="btnInfo">Info</button>`;

  const hintCollegamento = 'Se in console non compare niente: la funzione è collegata al pulsante con addEventListener? L\'id fra virgolette deve essere uguale a quello nell\'HTML, e il nome della funzione va senza parentesi.';

  const rigaAccesa = (hint: string) => rigaConsole(accesa, `In console c'è la riga «${accesa}»`, hint);
  const rigaSpenta = (hint: string) => rigaConsole(spenta, `In console c'è la riga «${spenta}»`, hint);
  const rigaCanale = (hint: string) => rigaConsole(rigaCanaleTesto, `In console c'è la riga «${rigaCanaleTesto}»`, hint);
  const rigaVolume = (hint: string) => rigaConsole(rigaVolumeTesto, `In console c'è la riga «${rigaVolumeTesto}»`, hint);

  const continuaAccendi = rigaAccesa('Accendi deve continuare a funzionare come nella fase 1: la sua funzione e il suo collegamento restano.');
  const continuaSpegni = rigaSpenta('Spegni deve continuare a funzionare come nella fase 2: la sua funzione e il suo collegamento restano.');
  const continuaCanale = rigaCanale('Canale deve continuare a funzionare come nella fase 3: la riga la scrive la funzione collegata a btnCanale.');
  const continuaVolume = rigaVolume('Volume deve continuare a funzionare come nella fase 4, con il calcolo dentro il console.log.');

  const ACCENDI = `function accendi() {
  console.log("${accesa}");
}`;
  const SPEGNI = `function spegni() {
  console.log("${spenta}");
}`;
  const CANALE = `function mostraCanale() {
  console.log("Canale", ${canale});
}`;
  const VOLUME = `function mostraVolume() {
  console.log("Volume", ${calcolo}, "%");
}`;
  const COLLEGA_ACCENDI = 'document.getElementById("btnAccendi").addEventListener("click", accendi);';
  const COLLEGA_SPEGNI = 'document.getElementById("btnSpegni").addEventListener("click", spegni);';
  const COLLEGA_CANALE = 'document.getElementById("btnCanale").addEventListener("click", mostraCanale);';
  const COLLEGA_VOLUME = 'document.getElementById("btnVolume").addEventListener("click", mostraVolume);';

  return {
    scheda: {
      id: 'telecomando',
      titolo: 'Il telecomando',
      lezione: 'Modulo 4 · Lezione 2',
      committente: `La «${tv}» del laboratorio si comanda da una pagina web: cinque pulsanti come i tasti di un telecomando. La TV risponde a ogni tasto con una riga nella console.`,
      prodotto: 'Una pagina con cinque pulsanti: ognuno ha la sua funzione con nome, collegata con addEventListener, che scrive nella console.',
      dati: [`televisore: ${tv}`, `canale: ${canale}`, `volume: ${tacche} tacche (ogni tacca vale ${PER_TACCA} %)`],
      risultatoFinale: [
        `Clic su «Accendi»: in console compare «${accesa}».`,
        `Clic su «Spegni»: in console compare «${spenta}».`,
        `Clic su «Canale»: in console compare «${rigaCanaleTesto}», con il numero come valore a parte.`,
        `Clic su «Volume»: in console compare «${rigaVolumeTesto}», con la percentuale calcolata da JavaScript.`,
        `Clic su «Info»: in console compaiono tre righe, «${tv}», «${rigaCanaleTesto}» e «${rigaVolumeTesto}».`,
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Quando si clicca **Accendi** (id \`btnAccendi\`), nella **console** compare la riga \`${accesa}\`.\n1. Scrivi una funzione con un nome scelto da te, per esempio \`accendi\`. Dentro c'è una riga sola: il \`console.log\` di quel testo, fra virgolette.\n2. Sotto la funzione, collegala al pulsante con lo schema della lezione: \`document.getElementById("btnAccendi").addEventListener("click", ...);\`. Al posto dei puntini va il nome della tua funzione, **senza parentesi**.\nLa riga deve comparire solo al clic. Per ora gli altri pulsanti non fanno niente.`,
        regola: `${REGOLE.treGesti} Il console.log sta dentro la funzione, non fuori: la riga compare solo quando si clicca.`,
        prove: [
          {
            passi: [
              clic('btnAccendi', 'Accendi'),
              rigaAccesa(`${hintCollegamento} Se compare una riga diversa: il testo deve essere esattamente «${accesa}», con le maiuscole di «${tv}».`),
            ],
          },
        ],
        codiceIniziale: '// 1. La funzione, con dentro il console.log\n\n// 2. Il collegamento: il pulsante btnAccendi chiama la funzione\n',
      },
      {
        consegna: `Ora il pulsante **Spegni** (id \`btnSpegni\`): al clic, nella console compare \`${spenta}\`.\n1. **Aggiungi** sotto la prima una **nuova** funzione, per esempio \`spegni\`, con dentro il \`console.log\` di quella riga.\n2. Collegala al pulsante \`btnSpegni\` con un **nuovo** \`addEventListener\`, sotto il collegamento di Accendi.\n**Accendi** deve continuare a funzionare: con un clic su Accendi e poi uno su Spegni, in console ci sono tutte e due le righe.`,
        regola: `${REGOLE.treGesti} Ogni pulsante ha la sua funzione con nome e il suo addEventListener: Spegni non riusa la funzione di Accendi.`,
        prove: [
          {
            passi: [
              clic('btnSpegni', 'Spegni'),
              rigaSpenta(`Se non compare niente: il pulsante Spegni ha un id suo, btnSpegni. Serve un secondo addEventListener con quell'id e il nome della nuova funzione. Se la riga è diversa: il testo è «${spenta}», con «spenta» alla fine.`),
            ],
          },
          {
            nome: 'accendendo e poi spegnendo',
            passi: [
              clic('btnAccendi', 'Accendi'),
              continuaAccendi,
              clic('btnSpegni', 'Spegni'),
              rigaSpenta('La riga «spenta» la scrive la funzione collegata a btnSpegni, non quella di Accendi.'),
            ],
          },
        ],
      },
      {
        consegna: `Il pulsante **Canale** (id \`btnCanale\`) dice su che canale è la TV: al clic, nella console compare \`${rigaCanaleTesto}\`.\n1. **Aggiungi** una **nuova** funzione, per esempio \`mostraCanale\`, e collegala a \`btnCanale\` con un **nuovo** \`addEventListener\`.\n2. Dentro, il \`console.log\` ha **due valori separati da una virgola**, come nella Lezione 1: il testo \`"Canale"\` fra virgolette e il numero \`${canale}\` **senza virgolette**. JavaScript mette da solo lo spazio fra i due.\nAccendi e Spegni devono continuare a funzionare.`,
        regola: `${REGOLE.treGesti} Ogni pulsante ha la sua funzione con nome e il suo addEventListener. Nel console.log del canale il numero è un valore a parte, separato da una virgola e senza virgolette: non vale «Canale ${canale}» scritto tutto in un testo solo.`,
        prove: [
          {
            passi: [
              clic('btnCanale', 'Canale'),
              rigaCanale(`Se non compare niente: serve un terzo addEventListener, con l'id btnCanale e il nome della nuova funzione. Se la riga è diversa: il testo «Canale» e il numero ${canale} sono due valori separati da una virgola; il numero è quello della scheda.`),
            ],
          },
          {
            nome: 'con tutti e tre i pulsanti',
            passi: [
              clic('btnAccendi', 'Accendi'),
              continuaAccendi,
              clic('btnCanale', 'Canale'),
              rigaCanale('La riga del canale la scrive la funzione collegata a btnCanale.'),
              clic('btnSpegni', 'Spegni'),
              continuaSpegni,
            ],
          },
        ],
      },
      {
        consegna: `Il pulsante **Volume** (id \`btnVolume\`) dice il volume in percentuale. La TV ha **${tacche} tacche** di volume e **ogni tacca vale ${PER_TACCA} %**: al clic, nella console compare \`Volume N %\`, dove N è il numero calcolato da JavaScript.\n1. **Aggiungi** una **nuova** funzione, per esempio \`mostraVolume\`, e collegala a \`btnVolume\` con un **nuovo** \`addEventListener\`.\n2. Dentro, il \`console.log\` ha **tre valori separati da virgole**: il testo \`"Volume"\`, poi **il calcolo** \`${calcolo}\` (senza virgolette), poi il testo \`"%"\`.\nNon vale scrivere il risultato a mano: il conto lo fa JavaScript. Gli altri pulsanti continuano a funzionare.`,
        regola: `${REGOLE.treGesti} Ogni pulsante ha la sua funzione con nome e il suo addEventListener. Il volume lo calcola JavaScript: dentro il console.log c'è la moltiplicazione delle tacche per ${PER_TACCA} (con *), non il risultato scritto a mano.`,
        prove: [
          {
            passi: [
              clic('btnVolume', 'Volume'),
              rigaVolume(`Se non compare niente: serve un quarto addEventListener, con l'id btnVolume e il nome della nuova funzione. Se il numero è diverso: il calcolo è ${tacche} tacche per ${PER_TACCA}, scritto con * dentro il console.log, senza virgolette intorno. Se manca il %: è il terzo valore, fra virgolette.`),
            ],
          },
          {
            nome: 'canale, volume e poi spegni',
            passi: [
              clic('btnCanale', 'Canale'),
              continuaCanale,
              clic('btnVolume', 'Volume'),
              rigaVolume('La riga del volume la scrive la funzione collegata a btnVolume, con il calcolo dentro.'),
              clic('btnSpegni', 'Spegni'),
              continuaSpegni,
            ],
          },
        ],
      },
      {
        consegna: `L'ultimo pulsante, **Info** (id \`btnInfo\`), mostra tutto in una volta: al clic, nella console compaiono **tre righe**, in quest'ordine: \`${tv}\`, poi \`${rigaCanaleTesto}\`, poi \`Volume N %\`.\n1. **Aggiungi** una **nuova** funzione, per esempio \`mostraInfo\`, e collegala a \`btnInfo\` con un **nuovo** \`addEventListener\`.\n2. Dentro ci sono **tre** \`console.log\`, uno per riga. La prima riga è solo il nome della TV, fra virgolette. Le righe del canale e del volume sono uguali a quelle dei pulsanti Canale e Volume: il numero del canale a parte, e il calcolo \`${calcolo}\` per il volume.\nCon un clic su Info compaiono tutte e tre le righe. Gli altri quattro pulsanti continuano a funzionare.`,
        regola: `${REGOLE.treGesti} Ogni pulsante ha la sua funzione con nome e il suo addEventListener. Le tre righe dell'Info le scrivono tre console.log dentro la stessa funzione; anche qui il numero del canale è un valore a parte e il volume è calcolato con la moltiplicazione, non scritto a mano.`,
        prove: [
          {
            passi: [
              clic('btnInfo', 'Info'),
              rigaConsole(tv, `In console c'è la riga «${tv}»`, `Se non compare niente: serve un quinto addEventListener, con l'id btnInfo e il nome della nuova funzione. Se la riga è diversa: la prima riga è solo «${tv}», senza «accesa» o «spenta».`),
              rigaCanale('La seconda riga è un altro console.log, sotto il primo, dentro la stessa funzione: lo stesso del pulsante Canale.'),
              rigaVolume(`La terza riga è il terzo console.log, con il calcolo ${calcolo} dentro, come nel pulsante Volume.`),
            ],
          },
          {
            nome: 'con gli altri quattro pulsanti',
            passi: [
              clic('btnAccendi', 'Accendi'),
              continuaAccendi,
              clic('btnCanale', 'Canale'),
              continuaCanale,
              clic('btnVolume', 'Volume'),
              continuaVolume,
              clic('btnSpegni', 'Spegni'),
              continuaSpegni,
            ],
          },
        ],
      },
    ],
    soluzioni: [
      `${ACCENDI}

${COLLEGA_ACCENDI}`,
      `${ACCENDI}

${SPEGNI}

${COLLEGA_ACCENDI}
${COLLEGA_SPEGNI}`,
      `${ACCENDI}

${SPEGNI}

${CANALE}

${COLLEGA_ACCENDI}
${COLLEGA_SPEGNI}
${COLLEGA_CANALE}`,
      `${ACCENDI}

${SPEGNI}

${CANALE}

${VOLUME}

${COLLEGA_ACCENDI}
${COLLEGA_SPEGNI}
${COLLEGA_CANALE}
${COLLEGA_VOLUME}`,
      `${ACCENDI}

${SPEGNI}

${CANALE}

${VOLUME}

function mostraInfo() {
  console.log("${tv}");
  console.log("Canale", ${canale});
  console.log("Volume", ${calcolo}, "%");
}

${COLLEGA_ACCENDI}
${COLLEGA_SPEGNI}
${COLLEGA_CANALE}
${COLLEGA_VOLUME}
document.getElementById("btnInfo").addEventListener("click", mostraInfo);`,
    ],
  };
}
