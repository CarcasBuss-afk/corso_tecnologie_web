/* Compito 6 · Il modulo d'iscrizione (Modulo 4, lezione 8).
 * Idea nuova: gli operatori logici. || per i campi vuoti e per l'età fuori intervallo, && fra
 * due classi escluse (!== e !==), la negazione di un confirm, e infine il riepilogo con i colori. */
import { clic, conferme, CSS_BASE, ROSSI, scrivi, stile, testo, VERDI } from './aiuti';
import { generatore, REGOLE, scegli, scegliDue, type Compito } from './tipi';

const CORSI = ['corso di robotica', 'torneo di calcetto', 'laboratorio di teatro', 'corso di fotografia', 'club di lettura'] as const;
const CLASSI = ['1A', '1B', '2A', '2B', '2C', '3A'] as const;

export function generaIscrizione(seme: number): Compito {
  const rnd = generatore(seme);
  const corso = scegli(rnd, CORSI);
  const [classe1, classe2] = scegliDue(rnd, CLASSI);
  const classeNo = CLASSI.find((c) => c !== classe1 && c !== classe2) ?? '3B';
  const etaMin = 14;
  const etaMax = scegli(rnd, [17, 18, 19] as const);

  const html = `<h1>📝 Iscrizione al ${corso}</h1>
<label>Nome: <input id="nome" type="text"></label>
<label>Età: <input id="eta" type="number"></label>
<label>Classe: <input id="classe" type="text"></label>
<button id="btnIscrivi">Iscriviti</button>
<p id="esito"></p>`;

  const COMPILA = 'Compila tutti i campi';
  const ETA = `Il corso è per chi ha fra ${etaMin} e ${etaMax} anni`;
  const CLASSE = `Il corso è solo per la ${classe1} e la ${classe2}`;
  const REGOLAMENTO = 'Devi leggere il regolamento';
  const ricevuta = (nome: string) => `Iscrizione ricevuta, ${nome}!`;
  const riepilogo = (nome: string, eta: string, classe: string) => `Iscrizione ricevuta: ${nome}, ${eta} anni, classe ${classe}`;

  const compila = (nome: string, eta: string, classe: string) => [scrivi('nome', nome, 'Nome'), scrivi('eta', eta, 'Età'), scrivi('classe', classe, 'Classe')];
  const etaOk = String(etaMin + 2);
  const ETA_VUOTA = 'Il controllo della casella vuota si fa sul testo (testoEta === ""), non sul numero: Number("") diventa 0.';

  return {
    scheda: {
      id: 'iscrizione',
      titolo: "Il modulo d'iscrizione",
      lezione: 'Modulo 4 · Lezione 8',
      committente: `La scuola apre le iscrizioni al ${corso}: il modulo deve accettare solo chi ha compilato tutto, ha l'età giusta ed è nelle classi ammesse.`,
      prodotto: 'Una pagina che controlla i dati di un modulo con &&, || e il ! che capovolge, e dice che cosa non va.',
      dati: [`età ammessa: da ${etaMin} a ${etaMax} anni`, `classi ammesse: ${classe1} e ${classe2}`],
      risultatoFinale: [
        `Se manca il nome o l'età: «${COMPILA}». Se l'età è fuori intervallo: «${ETA}». Se la classe non è ammessa, anche se la casella è vuota: «${CLASSE}».`,
        `Chiede conferma di aver letto il regolamento: se no, «${REGOLAMENTO}».`,
        'Se tutto va bene, il riepilogo in verde; gli errori in rosso.',
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `1. Scrivi una funzione e collegala al pulsante **Iscriviti** (id \`btnIscrivi\`).\n2. La funzione legge nome ed età dalle caselle (id \`nome\` ed \`eta\`), per esempio nelle variabili \`nome\` e \`testoEta\`.\n3. Se il nome è vuoto **oppure** l'età è vuota (\`nome === "" || testoEta === ""\`), il paragrafo dell'esito (id \`esito\`) dice \`${COMPILA}\`.\n4. Altrimenti dice \`${ricevuta('NOME')}\` (per Luca: \`${ricevuta('Luca')}\`).`,
        regola: `${REGOLE.treGesti} ${REGOLE.decisioneConIf} La condizione unisce i due controlli di casella vuota con ||.`,
        prove: [
          {
            nome: 'con Luca, 16 anni',
            passi: [...compila('Luca', etaOk, classe1), clic('btnIscrivi', 'Iscriviti'), testo('esito', ricevuta('Luca'), `Con tutto compilato dice «${ricevuta('Luca')}»`, 'Nel ramo else il nome letto dalla casella entra nel messaggio.')],
          },
          {
            nome: 'senza il nome',
            passi: [...compila('', etaOk, classe1), clic('btnIscrivi', 'Iscriviti'), testo('esito', COMPILA, `Senza nome dice «${COMPILA}»`, 'Confronta il valore della casella con due virgolette vuote: se è vuota, manca.')],
          },
          {
            nome: "senza l'età",
            passi: [...compila('Sara', '', classe1), clic('btnIscrivi', 'Iscriviti'), testo('esito', COMPILA, `Senza età dice «${COMPILA}»`, 'Basta che UNA delle due caselle sia vuota: i due controlli si uniscono con || (oppure).')],
          },
        ],
        codiceIniziale: '// 1. Scrivi la funzione\n\n// 2. Collega il pulsante alla funzione\n',
      },
      {
        consegna: `1. Tieni la variabile con il testo dell'età: serve ancora per il controllo della casella vuota.\n2. Crea una seconda variabile con il numero: \`let eta = Number(testoEta);\`\n3. L'età va bene da ${etaMin} a ${etaMax} compresi. Il messaggio di errore serve quando l'età è **fuori**, cioè minore di ${etaMin} **oppure** maggiore di ${etaMax}: \`eta < ${etaMin} || eta > ${etaMax}\`. In quel caso l'esito dice \`${ETA}\`.\n4. L'ordine è: \`if\` per i campi vuoti, \`else if\` per l'età sbagliata, \`else\` per l'iscrizione.`,
        regola: `${REGOLE.treGesti} L'età fuori intervallo si controlla con due confronti uniti da || (< min || > max), oppure l'intervallo giusto con && (>= min && <= max). Il controllo della casella vuota resta sul testo letto dalla casella, non sul numero.`,
        prove: [
          { nome: 'con Luca, 16 anni', passi: [...compila('Luca', etaOk, classe1), clic('btnIscrivi', 'Iscriviti'), testo('esito', ricevuta('Luca'), `Con 16 anni dice «${ricevuta('Luca')}»`, 'Con l\'età giusta si arriva al ramo dell\'iscrizione.')] },
          { nome: 'con Anna, 11 anni', passi: [...compila('Anna', '11', classe1), clic('btnIscrivi', 'Iscriviti'), testo('esito', ETA, `Con 11 anni dice «${ETA}»`, `Chi ha meno di ${etaMin} anni rende vero il confronto eta < ${etaMin}.`)] },
          { nome: `con Marco, ${etaMax + 3} anni`, passi: [...compila('Marco', String(etaMax + 3), classe1), clic('btnIscrivi', 'Iscriviti'), testo('esito', ETA, `Con ${etaMax + 3} anni dice «${ETA}»`, `Serve anche il controllo sull'età troppo alta: eta < ${etaMin} || eta > ${etaMax}.`)] },
          { nome: `con Sara, ${etaMax} anni`, passi: [...compila('Sara', String(etaMax), classe1), clic('btnIscrivi', 'Iscriviti'), testo('esito', ricevuta('Sara'), `Con ${etaMax} anni, l'età massima, dice «${ricevuta('Sara')}»`, `${etaMax} è compreso: l'errore scatta solo con eta > ${etaMax}, non con eta >= ${etaMax}.`)] },
          { nome: 'senza il nome', passi: [...compila('', etaOk, classe1), clic('btnIscrivi', 'Iscriviti'), testo('esito', COMPILA, `Senza nome dice ancora «${COMPILA}»`, 'Il controllo dei campi vuoti resta il primo.')] },
          { nome: "senza l'età", passi: [...compila('Sara', '', classe1), clic('btnIscrivi', 'Iscriviti'), testo('esito', COMPILA, `Senza età dice ancora «${COMPILA}»`, ETA_VUOTA)] },
        ],
      },
      {
        consegna: `1. Leggi anche la classe (id \`classe\`) in una variabile, per esempio \`classe\`.\n2. La classe deve essere \`${classe1}\` o \`${classe2}\`. Il messaggio di errore serve quando non è **nessuna** delle due, cioè quando è diversa da \`${classe1}\` **e** diversa da \`${classe2}\`: due confronti con \`!==\` uniti da \`&&\`. In quel caso l'esito dice \`${CLASSE}\`.\n3. È un altro \`else if\`, dopo quello dell'età. L'iscrizione resta nell'\`else\` finale.`,
        regola: `${REGOLE.treGesti} Le due classi ammesse si controllano con due confronti completi: classe !== "${classe1}" && classe !== "${classe2}" per l'errore, oppure classe === "${classe1}" || classe === "${classe2}" per l'iscrizione. Non vale un confronto a metà come «classe === "${classe1}" || "${classe2}"».`,
        prove: [
          { nome: `con Luca, 16 anni, ${classe1}`, passi: [...compila('Luca', etaOk, classe1), clic('btnIscrivi', 'Iscriviti'), testo('esito', ricevuta('Luca'), `Con la ${classe1} dice «${ricevuta('Luca')}»`, 'Con una classe ammessa si arriva all\'iscrizione.')] },
          { nome: `con Sara, 16 anni, ${classe2}`, passi: [...compila('Sara', etaOk, classe2), clic('btnIscrivi', 'Iscriviti'), testo('esito', ricevuta('Sara'), `Anche con la ${classe2} dice «${ricevuta('Sara')}»`, 'Entrambe le classi vanno accettate: l\'errore scatta solo se la classe è diversa da tutte e due (!== ... && !== ...).')] },
          { nome: `con Omar, 16 anni, ${classeNo}`, passi: [...compila('Omar', etaOk, classeNo), clic('btnIscrivi', 'Iscriviti'), testo('esito', CLASSE, `Con la ${classeNo} dice «${CLASSE}»`, 'Una classe diversa dalle due ammesse deve finire nel messaggio di errore: ogni confronto va scritto per intero, con classe da entrambe le parti (classe !== ... && classe !== ...).')] },
          { nome: "senza l'età", passi: [...compila('Sara', '', classe1), clic('btnIscrivi', 'Iscriviti'), testo('esito', COMPILA, `Senza età dice ancora «${COMPILA}»`, ETA_VUOTA)] },
        ],
      },
      {
        consegna: `1. La domanda arriva solo quando tutti i controlli sono passati, e prima dell'iscrizione: quindi va dentro l'\`else\` finale.\n2. Lì dentro la pagina chiede con \`confirm\` \`Hai letto il regolamento?\` e salva la risposta in una variabile, per esempio \`risposta\`.\n3. Sempre dentro l'\`else\`, sotto il \`confirm\`, scrivi un altro \`if\` con il suo \`else\`. Lo schema è: \`else { let risposta = confirm(...); if (!risposta) { ... } else { ... } }\`\n4. Se la risposta **non** è vera (\`!risposta\`, oppure \`risposta === false\`), l'esito dice \`${REGOLAMENTO}\`.\n5. Sposta il messaggio dell'iscrizione nell'\`else\` di questo nuovo \`if\`.`,
        regola: `${REGOLE.treGesti} La risposta del confirm sta in una variabile e si controlla negata (! o === false).`,
        prove: [
          { nome: 'con Luca che preme OK', passi: [...compila('Luca', etaOk, classe1), conferme(true), clic('btnIscrivi', 'Iscriviti'), testo('esito', ricevuta('Luca'), `Con OK dice «${ricevuta('Luca')}»`, 'Con il regolamento letto si arriva all\'iscrizione.')] },
          { nome: 'con Luca che preme Annulla', passi: [...compila('Luca', etaOk, classe1), conferme(false), clic('btnIscrivi', 'Iscriviti'), testo('esito', REGOLAMENTO, `Con Annulla dice «${REGOLAMENTO}»`, 'Il confirm restituisce false con Annulla: controlla la variabile negata con ! dentro l\'if.')] },
          { nome: 'senza il nome', passi: [...compila('', etaOk, classe1), conferme(true), clic('btnIscrivi', 'Iscriviti'), testo('esito', COMPILA, `Senza nome dice ancora «${COMPILA}»`, 'I controlli precedenti restano.')] },
          { nome: "senza l'età", passi: [...compila('Sara', '', classe1), conferme(true), clic('btnIscrivi', 'Iscriviti'), testo('esito', COMPILA, `Senza età dice ancora «${COMPILA}»`, ETA_VUOTA)] },
        ],
      },
      {
        consegna: `1. Cambia il messaggio dell'iscrizione: ora l'esito dice \`${riepilogo('NOME', 'ETÀ', 'CLASSE')}\` (per Luca di 16 anni in ${classe1}: \`${riepilogo('Luca', etaOk, classe1)}\`).\n2. Attento alla punteggiatura: dopo «ricevuta» ci sono i due punti, non la virgola, e alla fine non c'è il punto esclamativo.\n3. Il riepilogo è in **verde**. Tutti e quattro i messaggi di errore (campi vuoti, età, classe, regolamento) sono in **rosso**. Il colore si cambia con \`style.color\`.`,
        regola: `${REGOLE.treGesti} I dati del riepilogo vengono dalle caselle; i colori si impostano nei rami dell'if.`,
        prove: [
          {
            nome: `con Luca, 16 anni, ${classe1}, OK`,
            passi: [...compila('Luca', etaOk, classe1), conferme(true), clic('btnIscrivi', 'Iscriviti'), testo('esito', riepilogo('Luca', etaOk, classe1), `Dice «${riepilogo('Luca', etaOk, classe1)}»`, 'Costruisci il riepilogo con le tre variabili lette dalle caselle, unite al testo con il +.'), stile('esito', 'color', VERDI, 'Il riepilogo è verde', 'Nel ramo dell\'iscrizione metti style.color a un verde.')],
          },
          {
            nome: `con Sara, ${etaMax} anni, ${classe2}, OK`,
            passi: [...compila('Sara', String(etaMax), classe2), conferme(true), clic('btnIscrivi', 'Iscriviti'), testo('esito', riepilogo('Sara', String(etaMax), classe2), `Dice «${riepilogo('Sara', String(etaMax), classe2)}»`, `Con ${etaMax} anni, l'età massima, l'iscrizione deve passare: l'errore scatta solo con eta > ${etaMax}. Poi controlla che nel riepilogo ci siano i dati scritti nelle caselle.`)],
          },
          { nome: "senza l'età", passi: [...compila('Sara', '', classe1), conferme(true), clic('btnIscrivi', 'Iscriviti'), testo('esito', COMPILA, `Senza età dice ancora «${COMPILA}»`, ETA_VUOTA)] },
          {
            nome: 'con Anna, 11 anni',
            passi: [...compila('Anna', '11', classe1), conferme(true), clic('btnIscrivi', 'Iscriviti'), testo('esito', ETA, `Dice «${ETA}»`, 'Il controllo dell\'età resta.'), stile('esito', 'color', ROSSI, 'L\'errore è rosso', 'In ogni ramo di errore metti style.color a un rosso.')],
          },
        ],
      },
    ],
    soluzioni: [
      `function iscrivi() {
  let nome = document.getElementById("nome").value;
  let testoEta = document.getElementById("eta").value;
  let esito = document.getElementById("esito");
  if (nome === "" || testoEta === "") {
    esito.innerHTML = "${COMPILA}";
  } else {
    esito.innerHTML = "Iscrizione ricevuta, " + nome + "!";
  }
}

document.getElementById("btnIscrivi").addEventListener("click", iscrivi);`,
      `function iscrivi() {
  let nome = document.getElementById("nome").value;
  let testoEta = document.getElementById("eta").value;
  let eta = Number(testoEta);
  let esito = document.getElementById("esito");
  if (nome === "" || testoEta === "") {
    esito.innerHTML = "${COMPILA}";
  } else if (eta < ${etaMin} || eta > ${etaMax}) {
    esito.innerHTML = "${ETA}";
  } else {
    esito.innerHTML = "Iscrizione ricevuta, " + nome + "!";
  }
}

document.getElementById("btnIscrivi").addEventListener("click", iscrivi);`,
      `function iscrivi() {
  let nome = document.getElementById("nome").value;
  let testoEta = document.getElementById("eta").value;
  let eta = Number(testoEta);
  let classe = document.getElementById("classe").value;
  let esito = document.getElementById("esito");
  if (nome === "" || testoEta === "") {
    esito.innerHTML = "${COMPILA}";
  } else if (eta < ${etaMin} || eta > ${etaMax}) {
    esito.innerHTML = "${ETA}";
  } else if (classe !== "${classe1}" && classe !== "${classe2}") {
    esito.innerHTML = "${CLASSE}";
  } else {
    esito.innerHTML = "Iscrizione ricevuta, " + nome + "!";
  }
}

document.getElementById("btnIscrivi").addEventListener("click", iscrivi);`,
      `function iscrivi() {
  let nome = document.getElementById("nome").value;
  let testoEta = document.getElementById("eta").value;
  let eta = Number(testoEta);
  let classe = document.getElementById("classe").value;
  let esito = document.getElementById("esito");
  if (nome === "" || testoEta === "") {
    esito.innerHTML = "${COMPILA}";
  } else if (eta < ${etaMin} || eta > ${etaMax}) {
    esito.innerHTML = "${ETA}";
  } else if (classe !== "${classe1}" && classe !== "${classe2}") {
    esito.innerHTML = "${CLASSE}";
  } else {
    let letto = confirm("Hai letto il regolamento?");
    if (!letto) {
      esito.innerHTML = "${REGOLAMENTO}";
    } else {
      esito.innerHTML = "Iscrizione ricevuta, " + nome + "!";
    }
  }
}

document.getElementById("btnIscrivi").addEventListener("click", iscrivi);`,
      `function iscrivi() {
  let nome = document.getElementById("nome").value;
  let testoEta = document.getElementById("eta").value;
  let eta = Number(testoEta);
  let classe = document.getElementById("classe").value;
  let esito = document.getElementById("esito");
  if (nome === "" || testoEta === "") {
    esito.innerHTML = "${COMPILA}";
    esito.style.color = "red";
  } else if (eta < ${etaMin} || eta > ${etaMax}) {
    esito.innerHTML = "${ETA}";
    esito.style.color = "red";
  } else if (classe !== "${classe1}" && classe !== "${classe2}") {
    esito.innerHTML = "${CLASSE}";
    esito.style.color = "red";
  } else {
    let letto = confirm("Hai letto il regolamento?");
    if (!letto) {
      esito.innerHTML = "${REGOLAMENTO}";
      esito.style.color = "red";
    } else {
      esito.innerHTML = "Iscrizione ricevuta: " + nome + ", " + eta + " anni, classe " + classe;
      esito.style.color = "green";
    }
  }
}

document.getElementById("btnIscrivi").addEventListener("click", iscrivi);`,
    ],
  };
}
