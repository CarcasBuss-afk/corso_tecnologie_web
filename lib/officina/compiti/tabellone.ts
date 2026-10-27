/* Compito 2 bis della bacheca · Il tabellone del torneo (Modulo 4, lezioni 2, 3 e 4: il rinforzo).
 * Le idee della bacheca con qualcosa in più, e insieme quelle delle lezioni 2 e 3: un clic che
 * cambia due elementi, due prompt di fila nella stessa riga, un tag intorno a un valore del
 * prompt, la const e il confirm che finiscono nella pagina e non in un alert, e alla fine il
 * codice riordinato con gli elementi in variabili cercati una volta sola (Lezione 4). */
import { clic, conferme, CSS_BASE, domandaFatta, htmlContiene, risposte, testo } from './aiuti';
import { generatore, REGOLE, scegli, scegliDue, type Compito } from './tipi';

const TORNEI = ['Coppa della scuola', 'Torneo di primavera', 'Coppa Galileo', 'Torneo dei quartieri', 'Coppa dell\'amicizia'] as const;
const SQUADRE = ['Leoni', 'Falchi', 'Tigri', 'Squali', 'Lupi', 'Draghi', 'Aquile', 'Orsi'] as const;
/** Ogni squadra con la sua preposizione: «dei Leoni», «degli Squali», «delle Tigri». */
const DI: Record<(typeof SQUADRE)[number], string> = {
  Leoni: 'dei', Falchi: 'dei', Lupi: 'dei', Draghi: 'dei', Squali: 'degli', Orsi: 'degli', Tigri: 'delle', Aquile: 'delle',
};
const di = (squadra: (typeof SQUADRE)[number]) => `${DI[squadra]} ${squadra}`;

const IN_ATTESA = 'La partita non è ancora cominciata.';
const SI_GIOCA = 'Si gioca!';

export function generaTabellone(seme: number): Compito {
  const rnd = generatore(seme);
  const torneo = scegli(rnd, TORNEI);
  const [a, b] = scegliDue(rnd, SQUADRE);

  const partita = `${a} contro ${b}`;
  const risultato = (ga: string, gb: string) => `${a} ${ga} - ${gb} ${b}`;
  const gol = (nome: string) => `⚽ Gol di ${nome}`;
  const finale = `${torneo}: la finale`;
  const finita = (si: boolean) => `Partita finita: ${si}`;

  const html = `<h1 id="titolo">🏆 ${torneo}</h1>
<p id="partita">${IN_ATTESA}</p>
<p id="risultato"></p>
<p id="marcatori"></p>
<p id="annuncio"></p>
<div>
  <button id="btnInizia">Inizia la partita</button>
  <button id="btnRisultato">Risultato</button>
  <button id="btnMarcatore">Marcatore</button>
  <button id="btnFinale">Finale</button>
</div>`;

  const inizia = () => clic('btnInizia', 'Inizia la partita');
  const controlliInizio = [
    testo('partita', partita, `La partita dice «${partita}»`, 'Il testo va nel paragrafo con id «partita», con innerHTML.'),
    htmlContiene('partita', `<strong>${a}</strong>`, `«${a}» è in grassetto (<strong>)`, 'Il tag <strong> va dentro le virgolette del testo, intorno al nome di ogni squadra.'),
    htmlContiene('partita', `<strong>${b}</strong>`, `«${b}» è in grassetto (<strong>)`, 'Anche la seconda squadra va fra <strong> e </strong>.'),
    testo('annuncio', SI_GIOCA, `L'annuncio dice «${SI_GIOCA}»`, 'Lo stesso clic cambia anche il paragrafo con id «annuncio».'),
  ];
  const segnaRisultato = (ga: string, gb: string) => [
    risposte(ga, gb),
    clic('btnRisultato', 'Risultato'),
    testo('risultato', risultato(ga, gb), `Il risultato dice «${risultato(ga, gb)}»`, 'Due prompt, due variabili: nel testo le squadre e i gol, uniti con il + e con gli spazi giusti.'),
  ];
  const segnaGol = (nome: string) => [
    risposte(nome),
    clic('btnMarcatore', 'Marcatore'),
    testo('marcatori', gol(nome), `I marcatori dicono «${gol(nome)}»`, 'Il nome arriva dal prompt e va nel paragrafo con id «marcatori».'),
    htmlContiene('marcatori', `<em>${nome}</em>`, `«${nome}» è in corsivo (<em>)`, 'Il tag <em> intorno al nome: «<em>» + nome + «</em>», uniti con il +.'),
  ];
  const chiudi = (si: boolean) => [
    conferme(si),
    clic('btnFinale', 'Finale'),
    testo('titolo', finale, `Il titolo diventa «${finale}»`, 'Il titolo ha l\'id «titolo»: il nome del torneo arriva dalla costante.'),
    testo('annuncio', finita(si), `L'annuncio dice «${finita(si)}»`, 'La risposta del confirm sta in una variabile che finisce nel testo dell\'annuncio.'),
  ];

  return {
    scheda: {
      id: 'tabellone',
      titolo: 'Il tabellone del torneo',
      lezione: 'Modulo 4 · Lezioni 2, 3 e 4 (ripasso)',
      committente: `La scuola organizza la «${torneo}» di calcetto e vuole un tabellone sullo schermo della palestra: l'arbitro preme i pulsanti e il pubblico legge tutto, grande, nella pagina.`,
      prodotto: 'Una pagina in cui ogni pulsante cambia uno o più elementi: le squadre, il risultato, chi ha segnato, il titolo della finale.',
      dati: [`torneo: ${torneo}`, `squadre: ${a} e ${b}`],
      risultatoFinale: [
        `«Inizia la partita» scrive «${partita}» con le squadre in grassetto e annuncia «${SI_GIOCA}».`,
        `«Risultato» chiede i gol delle due squadre e scrive «${risultato('2', '1')}»; «Marcatore» chiede chi ha segnato e lo scrive in corsivo.`,
        `«Finale» cambia il titolo in «${finale}» e annuncia se la partita è finita. Il codice finale è in ordine: ogni elemento in una variabile, cercato una volta sola.`,
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Quando si clicca **Inizia la partita**, cambiano **due** elementi: il paragrafo della partita (id \`partita\`) dice \`${partita}\` con i nomi delle squadre in **grassetto** (\`<strong>\`), e il paragrafo dell'annuncio (id \`annuncio\`) dice \`${SI_GIOCA}\`.`,
        regola: `${REGOLE.treGesti} Il testo entra nella pagina con innerHTML o textContent, non con alert.`,
        prove: [{ passi: [inizia(), ...controlliInizio] }],
        codiceIniziale: '// 1. Le funzioni\n\n// 2. I collegamenti ai pulsanti\n',
      },
      {
        consegna: `**Risultato** chiede con due \`prompt\` i gol ${di(a)} e poi quelli ${di(b)}, li salva in **due variabili** e scrive nel paragrafo del risultato (id \`risultato\`) \`${risultato('GOL1', 'GOL2')}\` (con 2 e 1: \`${risultato('2', '1')}\`).`,
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalPrompt} Due prompt, due variabili.`,
        prove: [
          { nome: 'rispondendo «2» e «1»', passi: [...segnaRisultato('2', '1'), domandaFatta(2, 'La pagina fa due domande', 'Servono due prompt, uno per squadra, nella stessa funzione.')] },
          { nome: 'rispondendo «0» e «3»', passi: segnaRisultato('0', '3') },
        ],
      },
      {
        consegna: `**Marcatore** chiede con \`prompt\` chi ha segnato e scrive nel paragrafo dei marcatori (id \`marcatori\`) \`${gol('NOME')}\`, con il nome in **corsivo** (\`<em>\`). Attento: il tag va intorno a una **variabile**, non a un testo fisso. Ogni clic **sostituisce** il marcatore di prima. Il pallone ⚽ puoi copiarlo da qui, oppure premere **Win + .** per le emoji.`,
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalPrompt} Il tag <em> sta intorno alla variabile con il nome.`,
        prove: [
          { nome: 'rispondendo «Luca»', passi: segnaGol('Luca') },
          { nome: 'rispondendo «Giada»', passi: segnaGol('Giada') },
        ],
      },
      {
        consegna: `Il nome del torneo va in una \`const\` in alto, fuori dalle funzioni${torneo.includes("'") ? `. Scrivilo fra virgolette **doppie**: \`"${torneo}"\`. L'apostrofo romperebbe le virgolette singole` : ''}. **Finale** cambia il titolo (id \`titolo\`) in \`${finale}\`, senza 🏆, usando la costante. Poi chiede con \`confirm\` \`La partita è finita?\` e scrive nell'annuncio \`Partita finita: \` unito alla risposta: \`${finita(true)}\` con OK, \`${finita(false)}\` con Annulla. Niente alert: tutto va nella pagina.`,
        regola: `${REGOLE.treGesti} Il nome del torneo sta in una costante (const) che entra nel titolo; la risposta del confirm sta in una variabile che entra nell'annuncio: non valgono due testi scritti a mano.`,
        prove: [
          { nome: 'premendo OK', passi: chiudi(true) },
          { nome: 'premendo Annulla', passi: chiudi(false) },
        ],
      },
      {
        consegna: 'Il tabellone funziona: ora **riordina il codice**, come nella Lezione 4. In alto, fuori dalle funzioni, salva in una variabile ogni elemento che usi: il titolo, i quattro paragrafi e i quattro pulsanti, con i nomi che vuoi. Poi le funzioni e i collegamenti usano le variabili: ogni id si cerca con `getElementById` **una volta sola**. Il tabellone deve fare esattamente le stesse cose di prima.',
        regola: `${REGOLE.treGesti} ${REGOLE.elementiInVariabili}`,
        elementiInAlto: true,
        prove: [
          { nome: 'tutti i pulsanti, uno dopo l\'altro', passi: [inizia(), ...controlliInizio, ...segnaRisultato('2', '1'), ...segnaGol('Luca'), ...chiudi(true)] },
          { nome: 'con altri valori', passi: [...segnaRisultato('4', '4'), ...segnaGol('Sami'), ...chiudi(false)] },
        ],
      },
    ],
    soluzioni: [
      `function inizia() {
  document.getElementById("partita").innerHTML = "<strong>${a}</strong> contro <strong>${b}</strong>";
  document.getElementById("annuncio").innerHTML = "${SI_GIOCA}";
}

document.getElementById("btnInizia").addEventListener("click", inizia);`,
      `function inizia() {
  document.getElementById("partita").innerHTML = "<strong>${a}</strong> contro <strong>${b}</strong>";
  document.getElementById("annuncio").innerHTML = "${SI_GIOCA}";
}

function segnaRisultato() {
  let golA = prompt("Gol ${di(a)}?");
  let golB = prompt("Gol ${di(b)}?");
  document.getElementById("risultato").innerHTML = "${a} " + golA + " - " + golB + " ${b}";
}

document.getElementById("btnInizia").addEventListener("click", inizia);
document.getElementById("btnRisultato").addEventListener("click", segnaRisultato);`,
      `function inizia() {
  document.getElementById("partita").innerHTML = "<strong>${a}</strong> contro <strong>${b}</strong>";
  document.getElementById("annuncio").innerHTML = "${SI_GIOCA}";
}

function segnaRisultato() {
  let golA = prompt("Gol ${di(a)}?");
  let golB = prompt("Gol ${di(b)}?");
  document.getElementById("risultato").innerHTML = "${a} " + golA + " - " + golB + " ${b}";
}

function segnaMarcatore() {
  let nome = prompt("Chi ha segnato?");
  document.getElementById("marcatori").innerHTML = "⚽ Gol di <em>" + nome + "</em>";
}

document.getElementById("btnInizia").addEventListener("click", inizia);
document.getElementById("btnRisultato").addEventListener("click", segnaRisultato);
document.getElementById("btnMarcatore").addEventListener("click", segnaMarcatore);`,
      `const TORNEO = "${torneo}";

function inizia() {
  document.getElementById("partita").innerHTML = "<strong>${a}</strong> contro <strong>${b}</strong>";
  document.getElementById("annuncio").innerHTML = "${SI_GIOCA}";
}

function segnaRisultato() {
  let golA = prompt("Gol ${di(a)}?");
  let golB = prompt("Gol ${di(b)}?");
  document.getElementById("risultato").innerHTML = "${a} " + golA + " - " + golB + " ${b}";
}

function segnaMarcatore() {
  let nome = prompt("Chi ha segnato?");
  document.getElementById("marcatori").innerHTML = "⚽ Gol di <em>" + nome + "</em>";
}

function finale() {
  document.getElementById("titolo").innerHTML = TORNEO + ": la finale";
  let finita = confirm("La partita è finita?");
  document.getElementById("annuncio").innerHTML = "Partita finita: " + finita;
}

document.getElementById("btnInizia").addEventListener("click", inizia);
document.getElementById("btnRisultato").addEventListener("click", segnaRisultato);
document.getElementById("btnMarcatore").addEventListener("click", segnaMarcatore);
document.getElementById("btnFinale").addEventListener("click", finale);`,
      `const TORNEO = "${torneo}";

let titolo = document.getElementById("titolo");
let partita = document.getElementById("partita");
let risultato = document.getElementById("risultato");
let marcatori = document.getElementById("marcatori");
let annuncio = document.getElementById("annuncio");
let tastoInizia = document.getElementById("btnInizia");
let tastoRisultato = document.getElementById("btnRisultato");
let tastoMarcatore = document.getElementById("btnMarcatore");
let tastoFinale = document.getElementById("btnFinale");

function inizia() {
  partita.innerHTML = "<strong>${a}</strong> contro <strong>${b}</strong>";
  annuncio.innerHTML = "${SI_GIOCA}";
}

function segnaRisultato() {
  let golA = prompt("Gol ${di(a)}?");
  let golB = prompt("Gol ${di(b)}?");
  risultato.innerHTML = "${a} " + golA + " - " + golB + " ${b}";
}

function segnaMarcatore() {
  let nome = prompt("Chi ha segnato?");
  marcatori.innerHTML = "⚽ Gol di <em>" + nome + "</em>";
}

function finale() {
  titolo.innerHTML = TORNEO + ": la finale";
  let finita = confirm("La partita è finita?");
  annuncio.innerHTML = "Partita finita: " + finita;
}

tastoInizia.addEventListener("click", inizia);
tastoRisultato.addEventListener("click", segnaRisultato);
tastoMarcatore.addEventListener("click", segnaMarcatore);
tastoFinale.addEventListener("click", finale);`,
    ],
  };
}
