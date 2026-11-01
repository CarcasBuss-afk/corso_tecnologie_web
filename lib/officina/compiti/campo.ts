/* Sfida · La prenotazione del campo (Modulo 4, lezione 8).
 * Più difficile del normale: le consegne dicono che cosa decide la pagina, le condizioni le
 * compone l'allievo. && per la fascia oraria, || per i giocatori e per lo sconto, ! con && per
 * il supplemento senza tessera in orario di punta, e alla fine una condizione composta fra
 * parentesi: (tessera || giovane) && !(ora di punta). Gli elementi stanno in variabili in alto
 * (Lezione 4), le caselle si leggono al clic. Una sola funzione, un solo pulsante: tutto il
 * lavoro è nelle condizioni. */
import { clic, conferme, CSS_BASE, scrivi, testo } from './aiuti';
import { generatore, REGOLE, scegli, type Compito } from './tipi';

const CENTRI = ['Sporting Club Aurora', 'Polisportiva Olimpia', 'Centro Sportivo Le Querce', 'Arena Verde', 'Club Stella Azzurra'] as const;
const SPORT = [
  { nome: 'calcetto', emoji: '⚽', min: 8, max: 10 },
  { nome: 'padel', emoji: '🎾', min: 2, max: 4 },
  { nome: 'basket', emoji: '🏀', min: 6, max: 10 },
  { nome: 'beach volley', emoji: '🏐', min: 4, max: 8 },
  { nome: 'pallavolo', emoji: '🏐', min: 8, max: 12 },
] as const;

/** Che cosa si scrive nelle caselle e come si risponde al confirm, in una prova. */
interface Caso {
  ora: number;
  giocatori?: number;
  eta?: number;
  tessera?: boolean;
}

export function generaCampo(seme: number): Compito {
  const rnd = generatore(seme);
  const centro = scegli(rnd, CENTRI);
  const sport = scegli(rnd, SPORT);
  const { min, max } = sport;
  const apertura = scegli(rnd, [8, 9, 10] as const);
  const ultima = scegli(rnd, [20, 21, 22] as const);
  const punta = scegli(rnd, [17, 18, 19] as const);
  const giovane = scegli(rnd, [18, 20, 25] as const);
  const base = scegli(rnd, [40, 50, 60] as const);
  const sconto = scegli(rnd, [10, 15, 20] as const);
  const supplemento = scegli(rnd, [10, 20] as const);
  const scontato = base - sconto;
  const caro = base + supplemento;

  const html = `<h1>${sport.emoji} ${centro}</h1>
<p>Campo da ${sport.nome}</p>
<label>Ora: <input id="ora" type="number"></label>
<label>Giocatori: <input id="giocatori" type="number"></label>
<label>Età del capitano: <input id="eta" type="number"></label>
<button id="btnPrenota">Prenota</button>
<p id="esito"></p>`;

  const chiuso = (ora: number) => `Alle ${ora} il campo è chiuso`;
  const libero = (ora: number) => `Campo libero alle ${ora}`;
  const GIOCATORI = `Servono da ${min} a ${max} giocatori`;
  const prenotato = (ora: number, prezzo: number) => `Prenotato alle ${ora}: ${prezzo} euro`;
  const DOMANDA = 'Hai la tessera del centro?';
  /* Gli stessi messaggi con le parti che cambiano in maiuscolo, per le consegne. */
  const LIBERO_ES = 'Campo libero alle ORA';
  const CHIUSO_ES = 'Alle ORA il campo è chiuso';
  const PRENOTATO_ES = 'Prenotato alle ORA: PREZZO euro';

  /* Le ore e le età delle prove. */
  const tranquilla = apertura + 1; // mai di punta: la punta comincia dalle 17 in su
  const oraPunta = punta + 1; // sempre entro l'ultima ora prenotabile
  const adulto = giovane + 10;
  const ragazzo = giovane - 2;

  const descrivi = (c: Caso) => {
    const parti = [`alle ${c.ora}`];
    if (c.giocatori !== undefined) parti.push(`con ${c.giocatori} giocator${c.giocatori === 1 ? 'e' : 'i'}`);
    if (c.eta !== undefined) parti.push(`capitano di ${c.eta} anni`);
    if (c.tessera !== undefined) parti.push(c.tessera ? 'con la tessera (OK)' : 'senza tessera (Annulla)');
    return parti.join(', ');
  };
  const prova = (c: Caso, atteso: string, hint: string) => ({
    nome: descrivi(c),
    passi: [
      scrivi('ora', String(c.ora), 'Ora'),
      ...(c.giocatori === undefined ? [] : [scrivi('giocatori', String(c.giocatori), 'Giocatori')]),
      ...(c.eta === undefined ? [] : [scrivi('eta', String(c.eta), 'Età del capitano')]),
      ...(c.tessera === undefined ? [] : [conferme(c.tessera)]),
      clic('btnPrenota', 'Prenota'),
      testo('esito', atteso, `Il paragrafo dice «${atteso}»`, hint),
    ],
  });

  const REGOLA_BASE = `${REGOLE.treGesti} ${REGOLE.elementiInVariabili} ${REGOLE.datiDalleCaselle} Il .value delle caselle si legge dentro la funzione, al momento del clic. La fascia oraria si controlla con due confronti completi sulla stessa variabile: ora >= ${apertura} && ora <= ${ultima} per l'ora buona, oppure ora < ${apertura} || ora > ${ultima} per il campo chiuso. L'ora nei messaggi viene dalla casella.`;
  const REGOLA_GIOCATORI = `Il numero dei giocatori si controlla con due confronti completi: giocatori < ${min} || giocatori > ${max} per l'errore, oppure giocatori >= ${min} && giocatori <= ${max} per il numero giusto; non vale un confronto a metà. Il controllo dell'ora viene prima.`;
  const REGOLA_TESSERA = `La risposta del confirm sta in una variabile e si chiede solo quando ora e giocatori sono a posto. Il prezzo lo decide un if: lo sconto spetta se tessera || eta < ${giovane} (basta una delle due). Il prezzo nel messaggio viene da una variabile o dal ramo dell'if, non è un numero solo per tutti.`;

  /* Il codice comune alle soluzioni. */
  const ELEMENTI = (quante: 1 | 2 | 3) => [
    'let casellaOra = document.getElementById("ora");',
    ...(quante >= 2 ? ['let casellaGiocatori = document.getElementById("giocatori");'] : []),
    ...(quante >= 3 ? ['let casellaEta = document.getElementById("eta");'] : []),
    'let tastoPrenota = document.getElementById("btnPrenota");',
    'let esito = document.getElementById("esito");',
  ].join('\n');
  const LETTURE = (quante: 1 | 2 | 3) => [
    '  let ora = Number(casellaOra.value);',
    ...(quante >= 2 ? ['  let giocatori = Number(casellaGiocatori.value);'] : []),
    ...(quante >= 3 ? ['  let eta = Number(casellaEta.value);'] : []),
  ].join('\n');
  const COLLEGA = 'tastoPrenota.addEventListener("click", prenota);';
  const RAMO_CHIUSO = `  } else {
    esito.innerHTML = "Alle " + ora + " il campo è chiuso";
  }`;
  const conPrezzo = (prezzo: string) => `${ELEMENTI(3)}

function prenota() {
${LETTURE(3)}
  if (ora >= ${apertura} && ora <= ${ultima}) {
    if (giocatori < ${min} || giocatori > ${max}) {
      esito.innerHTML = "${GIOCATORI}";
    } else {
      let tessera = confirm("${DOMANDA}");
${prezzo}
      esito.innerHTML = "Prenotato alle " + ora + ": " + prezzo + " euro";
    }
${RAMO_CHIUSO}
}

${COLLEGA}`;

  return {
    scheda: {
      id: 'campo',
      titolo: 'La prenotazione del campo',
      lezione: 'Modulo 4 · Lezione 8',
      committente: `Il ${centro} affitta il campo da ${sport.nome} e vuole una pagina per le prenotazioni: controlla l'ora e i giocatori, chiede la tessera e calcola il prezzo, con lo sconto e il supplemento dell'orario di punta.`,
      prodotto: 'Una pagina che decide con &&, || e !, anche messi insieme con le parentesi, se si può prenotare e quanto si paga.',
      dati: [
        `orario: si prenota un'ora da ${apertura} a ${ultima} compresi`,
        `giocatori: da ${min} a ${max}`,
        `prezzo: ${base} euro; con la tessera o con un capitano sotto i ${giovane} anni lo sconto è di ${sconto} euro`,
        `orario di punta: dalle ${punta} in avanti; senza tessera il supplemento è di ${supplemento} euro`,
      ],
      risultatoFinale: [
        `«Prenota» controlla l'ora e i giocatori: se qualcosa non va dice «${chiuso(23)}» oppure «${GIOCATORI}».`,
        `Poi chiede la tessera e scrive «${prenotato(tranquilla, scontato)}»: ${scontato} euro con la tessera o un capitano sotto i ${giovane} anni, ${base} euro altrimenti.`,
        `Dalle ${punta} in avanti: senza tessera si paga ${caro} euro, e lo sconto non vale per nessuno.`,
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Questa è una sfida: la consegna dice che cosa fa la pagina, il codice lo scrivi tu.\n1. In cima al codice, sopra le funzioni, metti in una variabile ogni elemento che serve: la casella dell'ora (id \`ora\`), il pulsante **Prenota** (id \`btnPrenota\`) e il paragrafo dell'esito (id \`esito\`).\n2. Scrivi una funzione per il pulsante e collegala con \`addEventListener\`.\n3. La funzione legge l'ora dalla casella, come numero. Attento: il \`.value\` si legge **dentro** la funzione, al momento del clic.\n4. Si può prenotare un'ora da ${apertura} a ${ultima} compresi: l'ora va bene se è **almeno** ${apertura} **e al massimo** ${ultima}. Due confronti sulla stessa variabile, uniti da \`&&\`.\n5. Se l'ora va bene, l'esito dice \`${LIBERO_ES}\` (con ${tranquilla}: \`${libero(tranquilla)}\`). Altrimenti dice \`${CHIUSO_ES}\` (con ${ultima + 1}: \`${chiuso(ultima + 1)}\`).`,
        regola: REGOLA_BASE,
        elementiInAlto: true,
        prove: [
          prova({ ora: tranquilla }, libero(tranquilla), `La funzione legge l'ora con Number(...value) al momento del clic; se è fra ${apertura} e ${ultima}, il paragrafo dice che il campo è libero, con l'ora letta dalla casella unita al testo con il +.`),
          prova({ ora: ultima + 1 }, chiuso(ultima + 1), `Dopo le ${ultima} il campo è chiuso: serve anche il confronto ora <= ${ultima}, unito al primo con &&.`),
          prova({ ora: apertura - 1 }, chiuso(apertura - 1), `Prima delle ${apertura} il campo è chiuso: il confronto ora >= ${apertura} deve esserci, con la variabile ora anche davanti a questo confronto.`),
          prova({ ora: ultima }, libero(ultima), `Le ${ultima} sono ancora buone: «al massimo» si scrive <=, non <.`),
          prova({ ora: apertura }, libero(apertura), `Le ${apertura} vanno bene: «almeno» si scrive >=, non >.`),
        ],
        codiceIniziale: '// 1. Gli elementi, in variabili\n\n// 2. La funzione del pulsante Prenota\n\n// 3. Il collegamento\n',
      },
      {
        consegna: `Si gioca solo con il numero giusto di giocatori: da ${min} a ${max}.\n1. Aggiungi in cima la variabile per la casella dei giocatori (id \`giocatori\`) e leggila nella funzione, come numero.\n2. Se l'ora va bene ma i giocatori sono **meno di** ${min} **oppure più di** ${max}, l'esito dice \`${GIOCATORI}\`.\n3. Con ora e giocatori giusti dice ancora \`${LIBERO_ES}\`.\n4. Il controllo dell'ora viene **prima**: con il campo chiuso l'esito dice \`${CHIUSO_ES}\`, qualunque sia il numero di giocatori.`,
        regola: `${REGOLA_BASE} ${REGOLA_GIOCATORI}`,
        elementiInAlto: true,
        prove: [
          prova({ ora: tranquilla, giocatori: max }, libero(tranquilla), `Con ${max} giocatori si gioca: il controllo sui giocatori lascia passare i numeri da ${min} a ${max}.`),
          prova({ ora: tranquilla, giocatori: min - 1 }, GIOCATORI, `Con ${min - 1} giocatori sono troppo pochi: il controllo giocatori < ${min} || giocatori > ${max} va dentro il ramo dell'ora buona, prima del messaggio del campo libero.`),
          prova({ ora: tranquilla, giocatori: max + 1 }, GIOCATORI, `Con ${max + 1} giocatori sono troppi: serve anche il confronto giocatori > ${max}, con la variabile ripetuta.`),
          prova({ ora: tranquilla, giocatori: min }, libero(tranquilla), `${min} giocatori bastano: «meno di ${min}» si scrive < ${min}, non <= ${min}.`),
          prova({ ora: ultima + 1, giocatori: max }, chiuso(ultima + 1), 'Il controllo dell\'ora resta quello della fase 1.'),
          prova({ ora: ultima + 1, giocatori: min - 1 }, chiuso(ultima + 1), 'Se il campo è chiuso, il messaggio è quello del campo chiuso anche con i giocatori sbagliati: il controllo dell\'ora viene prima.'),
        ],
      },
      {
        consegna: `Ora il prezzo. Il campo costa ${base} euro; con lo sconto di ${sconto} euro costa ${scontato} euro.\n1. Aggiungi in cima la variabile per la casella dell'età del capitano (id \`eta\`) e leggila nella funzione, come numero.\n2. Quando ora e giocatori vanno bene, e **solo** allora, la funzione chiede con \`confirm\` \`${DOMANDA}\` e tiene la risposta in una variabile.\n3. Ha lo sconto chi ha la tessera **oppure** ha un capitano con meno di ${giovane} anni: basta una delle due. Gli altri pagano ${base} euro.\n4. Il messaggio del campo libero **cambia**: diventa \`${PRENOTATO_ES}\` (alle ${tranquilla} con la tessera: \`${prenotato(tranquilla, scontato)}\`).\n5. Gli altri due messaggi non cambiano.`,
        regola: `${REGOLA_BASE} ${REGOLA_GIOCATORI} ${REGOLA_TESSERA}`,
        elementiInAlto: true,
        prove: [
          prova({ ora: tranquilla, giocatori: max, eta: adulto, tessera: true }, prenotato(tranquilla, scontato), `Con OK il confirm dà true: chi ha la tessera paga ${scontato} euro. Il messaggio unisce l'ora e il prezzo al testo con il +: attento ai due punti e agli spazi.`),
          prova({ ora: tranquilla, giocatori: max, eta: adulto, tessera: false }, prenotato(tranquilla, base), `Senza tessera e con un capitano di ${adulto} anni non c'è sconto: ${base} euro. Il prezzo cambia secondo l'if, non è un numero fisso.`),
          prova({ ora: tranquilla, giocatori: max, eta: ragazzo, tessera: false }, prenotato(tranquilla, scontato), `Senza tessera ma con un capitano di ${ragazzo} anni lo sconto c'è: basta UNA delle due condizioni, quindi si uniscono con || (oppure), non con &&.`),
          prova({ ora: tranquilla, giocatori: max, eta: giovane, tessera: false }, prenotato(tranquilla, base), `Con ${giovane} anni esatti niente sconto: «meno di ${giovane}» si scrive eta < ${giovane}, non <=.`),
          prova({ ora: ultima + 1, giocatori: max, eta: adulto, tessera: true }, chiuso(ultima + 1), 'Il messaggio del campo chiuso non cambia.'),
          prova({ ora: tranquilla, giocatori: min - 1, eta: adulto, tessera: true }, GIOCATORI, 'Il messaggio dei giocatori non cambia.'),
        ],
      },
      {
        consegna: `Dalle ${punta} in avanti è orario di punta.\n1. Chi **non** ha la tessera **e** prenota in orario di punta paga il supplemento di ${supplemento} euro: ${caro} euro. Vale anche se il capitano è giovane: il supplemento vince sullo sconto.\n2. La condizione unisce la risposta del \`confirm\` capovolta con \`!\` e il confronto sull'ora, con \`&&\`.\n3. Il resto non cambia: con la tessera si paga ${scontato} euro anche in orario di punta; fuori dall'orario di punta i prezzi restano quelli della fase 3.`,
        regola: `${REGOLA_BASE} ${REGOLA_GIOCATORI} ${REGOLA_TESSERA} Il supplemento lo decide una condizione con && fra la risposta del confirm negata (!tessera, o === false) e il confronto sull'ora (ora >= ${punta}). Il supplemento vince sullo sconto: il suo controllo viene prima, oppure quello dello sconto esclude l'orario di punta.`,
        elementiInAlto: true,
        prove: [
          prova({ ora: oraPunta, giocatori: max, eta: adulto, tessera: false }, prenotato(oraPunta, caro), `Alle ${oraPunta} è orario di punta: senza tessera si paga ${caro} euro. La condizione è !tessera && ora >= ${punta}, in un ramo dell'if del prezzo.`),
          prova({ ora: punta, giocatori: max, eta: ragazzo, tessera: false }, prenotato(punta, caro), `Alle ${punta} in punto è già orario di punta (>=), e il supplemento vale anche per il capitano di ${ragazzo} anni: il controllo del supplemento deve venire prima di quello dello sconto.`),
          prova({ ora: oraPunta, giocatori: max, eta: adulto, tessera: true }, prenotato(oraPunta, scontato), `Con la tessera niente supplemento, anche alle ${oraPunta}: il ! capovolge la risposta, quindi con OK la condizione del supplemento è falsa e resta lo sconto.`),
          prova({ ora: punta - 1, giocatori: max, eta: adulto, tessera: false }, prenotato(punta - 1, base), `Alle ${punta - 1} non è ancora orario di punta: senza tessera e con un capitano di ${adulto} anni si paga ${base} euro, come nella fase 3.`),
          prova({ ora: tranquilla, giocatori: max, eta: ragazzo, tessera: false }, prenotato(tranquilla, scontato), `Alle ${tranquilla} lo sconto per il capitano giovane resta.`),
          prova({ ora: ultima + 1, giocatori: max, eta: adulto, tessera: false }, chiuso(ultima + 1), 'Il messaggio del campo chiuso non cambia.'),
        ],
      },
      {
        consegna: `Ultima regola: in orario di punta lo sconto **non** vale.\n1. Lo sconto spetta a chi ha la tessera **oppure** un capitano con meno di ${giovane} anni, **e** prenota fuori dall'orario di punta. Lo schema è \`(... || ...) && !(...)\`: le parentesi intorno all'**oppure** servono: senza, la condizione cambia significato. Il \`!(...)\` capovolge tutto quello che sta fra le sue parentesi.\n2. Senza tessera in orario di punta si paga ancora ${caro} euro.\n3. Riassunto dei tre prezzi: ${caro} euro senza tessera in orario di punta; ${scontato} euro con la tessera o un capitano giovane, fuori dall'orario di punta; ${base} euro in tutti gli altri casi, per esempio con la tessera in orario di punta.`,
        regola: `${REGOLA_BASE} ${REGOLA_GIOCATORI} ${REGOLA_TESSERA} Il supplemento lo decide !tessera && ora >= ${punta}. Lo sconto lo decide una condizione composta: l'alternativa (tessera || eta < ${giovane}) fra parentesi, unita con && al controllo dell'orario di punta capovolto (!(ora >= ${punta}) oppure ora < ${punta}). Senza le parentesi intorno all'oppure la condizione cambia significato.`,
        elementiInAlto: true,
        prove: [
          prova({ ora: oraPunta, giocatori: max, eta: adulto, tessera: true }, prenotato(oraPunta, base), `Con la tessera alle ${oraPunta} si paga ${base} euro: lo sconto vale solo fuori dall'orario di punta, quindi la sua condizione deve controllare anche l'ora, con && e il !.`),
          prova({ ora: punta, giocatori: max, eta: ragazzo, tessera: true }, prenotato(punta, base), `Alle ${punta}, tessera e capitano giovane: niente sconto comunque, ${base} euro. L'oppure va fra parentesi: (tessera || eta < ${giovane}) && !(ora >= ${punta}).`),
          prova({ ora: tranquilla, giocatori: max, eta: adulto, tessera: true }, prenotato(tranquilla, scontato), `Alle ${tranquilla} con la tessera lo sconto c'è: ${scontato} euro.`),
          prova({ ora: tranquilla, giocatori: max, eta: ragazzo, tessera: false }, prenotato(tranquilla, scontato), `Alle ${tranquilla} con un capitano di ${ragazzo} anni lo sconto c'è anche senza tessera: dentro le parentesi basta una delle due.`),
          prova({ ora: oraPunta, giocatori: max, eta: ragazzo, tessera: false }, prenotato(oraPunta, caro), `Senza tessera alle ${oraPunta} si paga ancora il supplemento: ${caro} euro.`),
          prova({ ora: tranquilla, giocatori: max, eta: adulto, tessera: false }, prenotato(tranquilla, base), `Alle ${tranquilla}, senza tessera e con un capitano di ${adulto} anni: nessuna delle due condizioni dello sconto, ${base} euro.`),
          prova({ ora: tranquilla, giocatori: min - 1, eta: adulto, tessera: true }, GIOCATORI, 'Il messaggio dei giocatori non cambia.'),
          prova({ ora: ultima + 1, giocatori: max, eta: adulto, tessera: true }, chiuso(ultima + 1), 'Il messaggio del campo chiuso non cambia.'),
        ],
      },
    ],
    soluzioni: [
      `${ELEMENTI(1)}

function prenota() {
${LETTURE(1)}
  if (ora >= ${apertura} && ora <= ${ultima}) {
    esito.innerHTML = "Campo libero alle " + ora;
${RAMO_CHIUSO}
}

${COLLEGA}`,
      `${ELEMENTI(2)}

function prenota() {
${LETTURE(2)}
  if (ora >= ${apertura} && ora <= ${ultima}) {
    if (giocatori < ${min} || giocatori > ${max}) {
      esito.innerHTML = "${GIOCATORI}";
    } else {
      esito.innerHTML = "Campo libero alle " + ora;
    }
${RAMO_CHIUSO}
}

${COLLEGA}`,
      conPrezzo(`      let prezzo = ${base};
      if (tessera || eta < ${giovane}) {
        prezzo = ${scontato};
      }`),
      conPrezzo(`      let prezzo = ${base};
      if (!tessera && ora >= ${punta}) {
        prezzo = ${caro};
      } else if (tessera || eta < ${giovane}) {
        prezzo = ${scontato};
      }`),
      conPrezzo(`      let prezzo = ${base};
      if (!tessera && ora >= ${punta}) {
        prezzo = ${caro};
      } else if ((tessera || eta < ${giovane}) && !(ora >= ${punta})) {
        prezzo = ${scontato};
      }`),
    ],
  };
}
