/* Compito facile · Il cartellino del nome (Modulo 4, lezione 4).
 * Idea nuova: la risposta del prompt non va in una finestra ma nella pagina, dentro un
 * paragrafo trovato con getElementById e cambiato con innerHTML. Tre fasi, molto guidate:
 * il nome, poi il ruolo con un pezzo di testo davanti, poi un pulsante che rimette il
 * cartellino com'era. Il codice d'esempio è quasi tutto nella consegna. */
import { clic, CSS_BASE, domandaFatta, risposte, testo } from './aiuti';
import { generatore, REGOLE, scegli, scegliDue, type Compito } from './tipi';

const EVENTI = ['Fiera della scienza', 'Festa dello sport', 'Giornata della lettura', 'Mostra di robotica', 'Notte del cinema', 'Mercatino di Natale'] as const;
const SALUTI = ['Ciao, sono ', 'Piacere, sono ', 'Mi chiamo ', 'Il mio nome è '] as const;
const NOMI = ['Luca', 'Sara', 'Matteo', 'Giulia', 'Ahmed', 'Chiara', 'Davide', 'Elena'] as const;
const RUOLI = ['Guida', 'Visitatore', 'Ospite', 'Organizzatore', 'Fotografo', 'Relatore'] as const;

const VUOTO_NOME = '???';
const VUOTO_RUOLO = 'Ruolo: ???';

export function generaCartellino(seme: number): Compito {
  const rnd = generatore(seme);
  const evento = scegli(rnd, EVENTI);
  const saluto = scegli(rnd, SALUTI);
  const nomi = scegliDue(rnd, NOMI);
  const ruoli = scegliDue(rnd, RUOLI);

  const html = `<h1>🎫 ${evento}</h1>
<p id="nome">${VUOTO_NOME}</p>
<p id="ruolo">${VUOTO_RUOLO}</p>
<div>
  <button id="btnNome">Scrivi il nome</button>
  <button id="btnRuolo">Scrivi il ruolo</button>
  <button id="btnNuovo">Nuovo cartellino</button>
</div>`;

  const fraseNome = (n: string) => `${saluto}${n}`;
  const fraseRuolo = (r: string) => `Ruolo: ${r}`;

  const provaNome = (n: string, hint: string) => ({
    nome: `rispondendo «${n}»`,
    passi: [
      risposte(n),
      clic('btnNome', 'Scrivi il nome'),
      domandaFatta(1, 'La pagina chiede il nome con prompt', 'Non è comparsa nessuna domanda: il prompt va dentro la funzione, e la funzione va collegata al pulsante con addEventListener.'),
      testo('nome', fraseNome(n), `Il cartellino dice «${fraseNome(n)}»`, hint),
    ],
  });
  const provaRuolo = (r: string, hint: string) => ({
    nome: `rispondendo «${r}»`,
    passi: [risposte(r), clic('btnRuolo', 'Scrivi il ruolo'), testo('ruolo', fraseRuolo(r), `Il ruolo dice «${fraseRuolo(r)}»`, hint)],
  });

  const NOME = `function scriviNome() {
  let nome = prompt("Come ti chiami?");
  document.getElementById("nome").innerHTML = "${saluto}" + nome;
}`;
  const RUOLO = `function scriviRuolo() {
  let ruolo = prompt("Che ruolo hai?");
  document.getElementById("ruolo").innerHTML = "Ruolo: " + ruolo;
}`;
  const COLLEGA_NOME = 'document.getElementById("btnNome").addEventListener("click", scriviNome);';
  const COLLEGA_RUOLO = 'document.getElementById("btnRuolo").addEventListener("click", scriviRuolo);';

  return {
    scheda: {
      id: 'cartellino',
      titolo: 'Il cartellino del nome',
      lezione: 'Modulo 4 · Lezione 4',
      committente: `La scuola organizza la ${evento}: chi partecipa si prepara il cartellino sullo schermo, con il suo nome e il suo ruolo.`,
      prodotto: 'Una pagina in cui i pulsanti chiedono i dati con prompt e li scrivono nei paragrafi del cartellino, senza alert.',
      dati: [`l'evento: ${evento}`, `l'inizio del cartellino: «${saluto}»`],
      risultatoFinale: [
        `«Scrivi il nome» chiede il nome e il cartellino dice, per esempio, «${fraseNome('Luca')}».`,
        `«Scrivi il ruolo» chiede il ruolo e scrive, per esempio, «${fraseRuolo('Guida')}».`,
        `«Nuovo cartellino» rimette «${VUOTO_NOME}» e «${VUOTO_RUOLO}», come all'inizio.`,
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Quando si clicca **Scrivi il nome** (id \`btnNome\`), la pagina chiede il nome e lo scrive sul cartellino.\n1. Scrivi la funzione \`scriviNome\`. La prima riga è \`function scriviNome() {\`.\n2. Dentro, chiedi il nome e salvalo in una variabile: \`let nome = prompt("Come ti chiami?");\`.\n3. Sempre dentro, scrivi nel paragrafo con id \`nome\`: \`document.getElementById("nome").innerHTML = ...;\`. Al posto dei puntini unisci con \`+\` due pezzi: il testo \`${saluto}\` (con lo spazio alla fine) e la variabile \`nome\`.\n4. Sotto la funzione, collega il pulsante alla funzione con \`addEventListener\`.\nSe rispondi Luca, il cartellino dice \`${fraseNome('Luca')}\`.`,
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalPrompt} Il testo entra nella pagina con innerHTML o textContent, non con alert.`,
        prove: [
          provaNome(nomi[0], `Nel paragrafo con id «nome» va il testo "${saluto}" unito con + alla variabile della risposta. Controlla lo spazio prima del nome.`),
          provaNome(nomi[1], 'Il nome deve venire dalla risposta al prompt: se il cartellino dice sempre lo stesso nome, hai scritto un testo fisso al posto della variabile.'),
        ],
        codiceIniziale: '// 1. La funzione scriviNome\n\n// 2. Collega il pulsante alla funzione\n',
      },
      {
        consegna: `Ora il secondo pulsante, **Scrivi il ruolo** (id \`btnRuolo\`). **Aggiungi** sotto \`scriviNome\` una **nuova** funzione, collegata con \`addEventListener\`.\n1. Dentro, chiedi il ruolo con \`prompt\` e salvalo in una variabile. La domanda la scegli tu.\n2. Scrivi nel paragrafo con id \`ruolo\` il testo \`Ruolo: \` (con lo spazio alla fine) unito con \`+\` alla variabile.\nSe rispondi Guida, il paragrafo dice \`${fraseRuolo('Guida')}\`. **Scrivi il nome** deve continuare a funzionare.`,
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalPrompt} Ogni pulsante ha la sua funzione con nome.`,
        prove: [
          provaRuolo(ruoli[0], 'Una funzione nuova per il pulsante: chiede il ruolo con prompt, poi nel paragrafo con id «ruolo» scrive "Ruolo: " + la variabile.'),
          provaRuolo(ruoli[1], 'Il ruolo deve venire dalla risposta al prompt, non da un testo scritto a mano.'),
          provaNome(nomi[1], 'Scrivi il nome deve continuare a funzionare come nella fase 1.'),
        ],
      },
      {
        consegna: `Il terzo pulsante, **Nuovo cartellino** (id \`btnNuovo\`), rimette il cartellino com'era all'inizio, per il prossimo partecipante. **Aggiungi** una **nuova** funzione, collegata con \`addEventListener\`. Qui non serve nessun prompt.\n1. Nel paragrafo con id \`nome\` scrivi \`${VUOTO_NOME}\`.\n2. Nel paragrafo con id \`ruolo\` scrivi \`${VUOTO_RUOLO}\`.\nGli altri due pulsanti devono continuare a funzionare.`,
        regola: `${REGOLE.treGesti} Il testo entra nella pagina con innerHTML o textContent, non con alert.`,
        prove: [
          {
            nome: `dopo aver scritto «${nomi[0]}» e «${ruoli[0]}»`,
            passi: [
              risposte(nomi[0]),
              clic('btnNome', 'Scrivi il nome'),
              risposte(ruoli[0]),
              clic('btnRuolo', 'Scrivi il ruolo'),
              clic('btnNuovo', 'Nuovo cartellino'),
              testo('nome', VUOTO_NOME, `Il nome torna «${VUOTO_NOME}»`, 'Nella nuova funzione, il paragrafo con id «nome» riceve il testo "???": tre punti di domanda fra le virgolette.'),
              testo('ruolo', VUOTO_RUOLO, `Il ruolo torna «${VUOTO_RUOLO}»`, 'Nella stessa funzione cambia anche il paragrafo con id «ruolo»: il testo è "Ruolo: ???", con lo spazio dopo i due punti.'),
            ],
          },
          {
            nome: `e poi si scrive un nuovo nome, «${nomi[1]}»`,
            passi: [
              clic('btnNuovo', 'Nuovo cartellino'),
              risposte(nomi[1]),
              clic('btnNome', 'Scrivi il nome'),
              testo('nome', fraseNome(nomi[1]), `Il cartellino dice «${fraseNome(nomi[1])}»`, 'Dopo Nuovo cartellino, Scrivi il nome deve funzionare ancora.'),
              testo('ruolo', VUOTO_RUOLO, `Il ruolo dice ancora «${VUOTO_RUOLO}»`, 'Scrivi il nome cambia solo il paragrafo del nome, non quello del ruolo.'),
            ],
          },
        ],
      },
    ],
    soluzioni: [
      `${NOME}

${COLLEGA_NOME}`,
      `${NOME}

${RUOLO}

${COLLEGA_NOME}
${COLLEGA_RUOLO}`,
      `${NOME}

${RUOLO}

function nuovoCartellino() {
  document.getElementById("nome").innerHTML = "${VUOTO_NOME}";
  document.getElementById("ruolo").innerHTML = "${VUOTO_RUOLO}";
}

${COLLEGA_NOME}
${COLLEGA_RUOLO}
document.getElementById("btnNuovo").addEventListener("click", nuovoCartellino);`,
    ],
  };
}
