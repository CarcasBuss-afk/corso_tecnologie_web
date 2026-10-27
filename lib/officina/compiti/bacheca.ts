/* Compito 2 · La bacheca della classe (Modulo 4, lezione 4).
 * Idea nuova: il risultato va nella pagina con innerHTML (anche con un tag dentro), non
 * più in una finestra. Si riusano prompt e le funzioni collegate ai pulsanti. */
import { clic, CSS_BASE, domandaFatta, htmlContiene, risposte, testo } from './aiuti';
import { generatore, REGOLE, scegli, type Compito } from './tipi';

const CLASSI = ['1A', '1B', '2A', '2B', '2C'] as const;
const METE = ['Torino', 'Genova', 'Venezia', 'Aosta', 'Firenze', 'Milano'] as const;
const GIORNI = ['12 maggio', '3 aprile', '21 marzo', '8 maggio', '15 aprile'] as const;
const MATERIE = ['matematica', 'italiano', 'inglese', 'scienze', 'storia'] as const;
const QUANDO = ['venerdì', 'lunedì', 'mercoledì', 'giovedì'] as const;

const VUOTO = 'Nessun avviso per oggi.';

export function generaBacheca(seme: number): Compito {
  const rnd = generatore(seme);
  const classe = scegli(rnd, CLASSI);
  const meta = scegli(rnd, METE);
  const giorno = scegli(rnd, GIORNI);
  const materia = scegli(rnd, MATERIE);
  const quando = scegli(rnd, QUANDO);

  const gita = `Gita a ${meta} il ${giorno}`;
  const verifica = `Verifica di ${materia} ${quando}`;

  const html = `<h1 id="titolo">📌 Bacheca della ${classe}</h1>
<p id="avviso">${VUOTO}</p>
<div>
  <button id="btnGita">Gita</button>
  <button id="btnVerifica">Verifica</button>
  <button id="btnNuovo">Nuovo avviso</button>
  <button id="btnCancella">Cancella</button>
</div>
<p id="firma"></p>`;

  const hintAvviso = 'Il testo va nel paragrafo con id «avviso»: trova l\'elemento con getElementById e cambia il suo innerHTML.';

  return {
    scheda: {
      id: 'bacheca',
      titolo: 'La bacheca della classe',
      lezione: 'Modulo 4 · Lezione 4',
      committente: `La ${classe} vuole una bacheca sullo schermo in fondo all'aula: il rappresentante preme un pulsante e l'avviso compare, grande, nella pagina.`,
      prodotto: 'Una pagina in cui i pulsanti cambiano il testo del paragrafo dell\'avviso, senza finestre.',
      dati: [`classe: ${classe}`, `gita: ${gita}`, `verifica: ${verifica}`],
      risultatoFinale: [
        `«Gita» scrive «${gita}»; «Verifica» scrive «${verifica}» con la materia in grassetto.`,
        '«Nuovo avviso» chiede il testo e chi lo firma, e li mette nella pagina.',
        `«Cancella» rimette «${VUOTO}» e svuota la firma.`,
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Quando si clicca **Gita**, il paragrafo dell'avviso (id \`avviso\`) deve dire \`${gita}\`. Niente alert: il testo va nella pagina con \`innerHTML\`.`,
        regola: `${REGOLE.treGesti} Il testo entra nella pagina con innerHTML o textContent, non con alert.`,
        prove: [
          {
            passi: [clic('btnGita', 'Gita'), testo('avviso', gita, `L'avviso dice «${gita}»`, hintAvviso)],
          },
        ],
        codiceIniziale: '// 1. Scrivi la funzione\n\n// 2. Collega il pulsante alla funzione\n',
      },
      {
        consegna: `**Verifica** scrive \`${verifica}\`, con la materia in **grassetto**: dentro il testo metti il tag \`<strong>\` intorno a «${materia}». È il motivo per cui si usa innerHTML e non textContent. «Gita» continua a funzionare.`,
        regola: `${REGOLE.treGesti} Ogni pulsante ha la sua funzione con nome.`,
        prove: [
          {
            passi: [
              clic('btnVerifica', 'Verifica'),
              testo('avviso', verifica, `L'avviso dice «${verifica}»`, 'Il testo deve essere esattamente quello: controlla spazi e minuscole.'),
              htmlContiene('avviso', `<strong>${materia}</strong>`, 'La materia è dentro un tag <strong>', 'Il tag <strong> va scritto dentro le virgolette del testo, intorno alla materia: innerHTML lo trasforma in grassetto.'),
              clic('btnGita', 'Gita'),
              testo('avviso', gita, `«Gita» scrive ancora «${gita}»`, 'Il pulsante Gita deve continuare a funzionare.'),
            ],
          },
        ],
      },
      {
        consegna: '**Nuovo avviso** chiede il testo con `prompt`, lo salva in una variabile e lo scrive nell\'avviso. Quello che il rappresentante scrive, compare nella pagina.',
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalPrompt}`,
        prove: [
          {
            nome: 'scrivendo «Portare la felpa»',
            passi: [
              risposte('Portare la felpa'),
              clic('btnNuovo', 'Nuovo avviso'),
              domandaFatta(1, 'La pagina chiede il testo con prompt', 'Non è comparsa nessuna domanda: il prompt va dentro la funzione.'),
              testo('avviso', 'Portare la felpa', 'L\'avviso dice «Portare la felpa»', 'Nel paragrafo deve finire la variabile con la risposta, non un testo fisso.'),
            ],
          },
          {
            nome: 'scrivendo «Domani niente mensa»',
            passi: [risposte('Domani niente mensa'), clic('btnNuovo', 'Nuovo avviso'), testo('avviso', 'Domani niente mensa', 'L\'avviso dice «Domani niente mensa»', 'Il testo deve essere quello risposto al prompt.')],
          },
        ],
      },
      {
        consegna: `**Cancella** rimette nell'avviso il testo iniziale \`${VUOTO}\` e cambia il titolo (id \`titolo\`) in \`Bacheca della ${classe} (vuota)\`. Il nuovo titolo va scritto **senza** la 📌.`,
        regola: `${REGOLE.treGesti}`,
        prove: [
          {
            passi: [
              clic('btnGita', 'Gita'),
              clic('btnCancella', 'Cancella'),
              testo('avviso', VUOTO, `L'avviso torna a «${VUOTO}»`, 'Dopo Cancella l\'avviso deve tornare al testo iniziale, con il punto finale.'),
              testo('titolo', `Bacheca della ${classe} (vuota)`, `Il titolo dice «Bacheca della ${classe} (vuota)»`, 'Il titolo ha l\'id «titolo»: cambia il suo innerHTML dentro la stessa funzione.'),
            ],
          },
        ],
      },
      {
        consegna: '**Nuovo avviso** fa una seconda domanda, «Chi lo scrive?», e mette nel paragrafo della firma (id `firma`) il testo `Scritto da NOME`. **Cancella** svuota anche la firma, dandole un testo vuoto (`""`), e rimette il titolo a `Bacheca della ' + classe + '`, sempre senza 📌.',
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalPrompt} Due prompt, due variabili.`,
        prove: [
          {
            nome: 'scrivendo «Portare la felpa» e «Luca»',
            passi: [
              risposte('Portare la felpa', 'Luca'),
              clic('btnNuovo', 'Nuovo avviso'),
              domandaFatta(2, 'La pagina fa due domande', 'Servono due prompt: il testo e chi lo scrive.'),
              testo('avviso', 'Portare la felpa', 'L\'avviso dice «Portare la felpa»', 'La prima risposta va nell\'avviso.'),
              testo('firma', 'Scritto da Luca', 'La firma dice «Scritto da Luca»', 'La seconda risposta va nella firma, dopo «Scritto da ».'),
              clic('btnCancella', 'Cancella'),
              testo('firma', '', 'Dopo Cancella la firma è vuota', 'Metti nella firma un testo vuoto: due virgolette senza niente in mezzo.'),
              testo('titolo', `Bacheca della ${classe}`, `Il titolo torna «Bacheca della ${classe}»`, 'Cancella deve rimettere il titolo di partenza.'),
            ],
          },
          {
            nome: 'scrivendo «Niente mensa» e «Sara»',
            passi: [risposte('Niente mensa', 'Sara'), clic('btnNuovo', 'Nuovo avviso'), testo('firma', 'Scritto da Sara', 'La firma dice «Scritto da Sara»', 'La firma deve venire dalla seconda domanda.')],
          },
        ],
      },
    ],
    soluzioni: [
      `function mostraGita() {
  document.getElementById("avviso").innerHTML = "${gita}";
}

document.getElementById("btnGita").addEventListener("click", mostraGita);`,
      `function mostraGita() {
  document.getElementById("avviso").innerHTML = "${gita}";
}

function mostraVerifica() {
  document.getElementById("avviso").innerHTML = "Verifica di <strong>${materia}</strong> ${quando}";
}

document.getElementById("btnGita").addEventListener("click", mostraGita);
document.getElementById("btnVerifica").addEventListener("click", mostraVerifica);`,
      `function mostraGita() {
  document.getElementById("avviso").innerHTML = "${gita}";
}

function mostraVerifica() {
  document.getElementById("avviso").innerHTML = "Verifica di <strong>${materia}</strong> ${quando}";
}

function nuovoAvviso() {
  let testo = prompt("Scrivi l'avviso");
  document.getElementById("avviso").innerHTML = testo;
}

document.getElementById("btnGita").addEventListener("click", mostraGita);
document.getElementById("btnVerifica").addEventListener("click", mostraVerifica);
document.getElementById("btnNuovo").addEventListener("click", nuovoAvviso);`,
      `function mostraGita() {
  document.getElementById("avviso").innerHTML = "${gita}";
}

function mostraVerifica() {
  document.getElementById("avviso").innerHTML = "Verifica di <strong>${materia}</strong> ${quando}";
}

function nuovoAvviso() {
  let testo = prompt("Scrivi l'avviso");
  document.getElementById("avviso").innerHTML = testo;
}

function cancella() {
  document.getElementById("avviso").innerHTML = "${VUOTO}";
  document.getElementById("titolo").innerHTML = "Bacheca della ${classe} (vuota)";
}

document.getElementById("btnGita").addEventListener("click", mostraGita);
document.getElementById("btnVerifica").addEventListener("click", mostraVerifica);
document.getElementById("btnNuovo").addEventListener("click", nuovoAvviso);
document.getElementById("btnCancella").addEventListener("click", cancella);`,
      `function mostraGita() {
  document.getElementById("avviso").innerHTML = "${gita}";
}

function mostraVerifica() {
  document.getElementById("avviso").innerHTML = "Verifica di <strong>${materia}</strong> ${quando}";
}

function nuovoAvviso() {
  let testo = prompt("Scrivi l'avviso");
  let autore = prompt("Chi lo scrive?");
  document.getElementById("avviso").innerHTML = testo;
  document.getElementById("firma").innerHTML = "Scritto da " + autore;
}

function cancella() {
  document.getElementById("avviso").innerHTML = "${VUOTO}";
  document.getElementById("firma").innerHTML = "";
  document.getElementById("titolo").innerHTML = "Bacheca della ${classe}";
}

document.getElementById("btnGita").addEventListener("click", mostraGita);
document.getElementById("btnVerifica").addEventListener("click", mostraVerifica);
document.getElementById("btnNuovo").addEventListener("click", nuovoAvviso);
document.getElementById("btnCancella").addEventListener("click", cancella);`,
    ],
  };
}
