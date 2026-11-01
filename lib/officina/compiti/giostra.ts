/* Compito facile · La giostra del luna park (Modulo 4, lezione 8).
 * Idea nuova: gli operatori logici, uno per fase. && per salire (altezza e età, tutte e due),
 * || per il giro gratis (troppo piccoli oppure abbastanza grandi), ! per la cintura chiesta con
 * confirm. Tre fasi, molto guidate: lo scheletro dell'if è già nella consegna. */
import { clic, conferme, CSS_BASE, scrivi, testo } from './aiuti';
import { generatore, intero, REGOLE, scegli, type Compito } from './tipi';

const GIOSTRE = ['Drago Volante', 'Tornado', 'Razzo Spaziale', 'Brucomela', 'Tagadà', 'Ottovolante'] as const;

export function generaGiostra(seme: number): Compito {
  const rnd = generatore(seme);
  const giostra = scegli(rnd, GIOSTRE);
  const altezzaMin = scegli(rnd, [120, 125, 130, 135, 140] as const);
  const etaMin = intero(rnd, 8, 10);
  const sottoGratis = scegli(rnd, [11, 12, 13] as const);
  const sopraGratis = scegli(rnd, [65, 70, 75] as const);
  const prezzo = intero(rnd, 3, 6);

  const html = `<h1>🎡 ${giostra}</h1>
<label>Altezza (cm): <input id="altezza" type="number"></label>
<label>Età: <input id="eta" type="number"></label>
<button id="btnSali">Posso salire?</button>
<button id="btnPrezzo">Quanto costa?</button>
<p id="esito"></p>`;

  const SI = 'Puoi salire, buon divertimento!';
  const NO = 'Non puoi ancora salire';
  const GRATIS = 'Per te il giro è gratis';
  const COSTA = `Il giro costa ${prezzo} euro`;
  const CINTURA = 'Prima allaccia la cintura';

  const condizioneSali = `altezza >= ${altezzaMin} && eta >= ${etaMin}`;
  const condizioneGratis = `eta < ${sottoGratis} || eta >= ${sopraGratis}`;

  const sali = (altezza: number, eta: number) => [
    scrivi('altezza', String(altezza), 'Altezza (cm)'),
    scrivi('eta', String(eta), 'Età'),
    clic('btnSali', 'Posso salire?'),
  ];
  const chiediPrezzo = (eta: number) => [scrivi('eta', String(eta), 'Età'), clic('btnPrezzo', 'Quanto costa?')];

  const provaSali = (altezza: number, eta: number, atteso: string, hint: string, cintura?: boolean) => ({
    nome: `con ${altezza} cm e ${eta} anni${cintura === undefined ? '' : cintura ? ', cintura allacciata (OK)' : ', cintura non allacciata (Annulla)'}`,
    passi: [
      ...(cintura === undefined ? [] : [conferme(cintura)]),
      ...sali(altezza, eta),
      testo('esito', atteso, `Il paragrafo dice «${atteso}»`, hint),
    ],
  });
  const provaPrezzo = (eta: number, atteso: string, hint: string) => ({
    nome: `con ${eta} anni`,
    passi: [...chiediPrezzo(eta), testo('esito', atteso, `Il paragrafo dice «${atteso}»`, hint)],
  });

  const alto = altezzaMin + 15;
  const grande = etaMin + 3;

  const LETTURE = `  let altezza = Number(document.getElementById("altezza").value);
  let eta = Number(document.getElementById("eta").value);
  let esito = document.getElementById("esito");`;
  const PREZZO = `function quantoCosta() {
  let eta = Number(document.getElementById("eta").value);
  let esito = document.getElementById("esito");
  if (${condizioneGratis}) {
    esito.innerHTML = "${GRATIS}";
  } else {
    esito.innerHTML = "${COSTA}";
  }
}`;
  const SALI_1 = `function posso() {
${LETTURE}
  if (${condizioneSali}) {
    esito.innerHTML = "${SI}";
  } else {
    esito.innerHTML = "${NO}";
  }
}`;
  const COLLEGA_SALI = 'document.getElementById("btnSali").addEventListener("click", posso);';
  const COLLEGA_PREZZO = 'document.getElementById("btnPrezzo").addEventListener("click", quantoCosta);';

  return {
    scheda: {
      id: 'giostra',
      titolo: 'La giostra del luna park',
      lezione: 'Modulo 4 · Lezione 8',
      committente: `Il giostraio del ${giostra} vuole una pagina all'ingresso: dice chi può salire, quanto costa il giro e ricorda la cintura.`,
      prodotto: 'Una pagina con due pulsanti che decidono con &&, || e il ! che capovolge.',
      dati: [
        `altezza minima: ${altezzaMin} cm`,
        `età minima: ${etaMin} anni`,
        `giro gratis: meno di ${sottoGratis} anni oppure almeno ${sopraGratis} anni`,
        `prezzo del giro: ${prezzo} euro`,
      ],
      risultatoFinale: [
        `«Posso salire?» dice «${SI}» solo se l'altezza è almeno ${altezzaMin} cm e l'età almeno ${etaMin} anni; altrimenti «${NO}».`,
        `«Quanto costa?» dice «${GRATIS}» a chi ha meno di ${sottoGratis} anni oppure almeno ${sopraGratis}; agli altri «${COSTA}».`,
        `Se la cintura non è allacciata, «Posso salire?» dice «${CINTURA}».`,
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Il pulsante **Posso salire?** (id \`btnSali\`) controlla due cose insieme: l'altezza **e** l'età.\n1. Scrivi una funzione e collegala al pulsante con \`addEventListener\`.\n2. Dentro, leggi l'altezza (id \`altezza\`) con \`Number(document.getElementById("altezza").value)\` e mettila nella variabile \`altezza\`.\n3. Allo stesso modo leggi l'età (id \`eta\`) nella variabile \`eta\`.\n4. Si sale solo se l'altezza è **almeno** ${altezzaMin} cm **e** l'età è **almeno** ${etaMin} anni. Scrivi un solo \`if\` con \`&&\`: \`if (${condizioneSali}) { ... } else { ... }\`\n5. Se tutte e due sono vere, il paragrafo (id \`esito\`) dice \`${SI}\`.\n6. Altrimenti dice \`${NO}\`.`,
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalleCaselle} La decisione la prende UN if con le due condizioni unite da && (${condizioneSali}), con «almeno» scritto >=: non valgono due if separati né || al posto di &&.`,
        prove: [
          provaSali(alto, grande, SI, 'La funzione legge le due caselle con Number(...value); se tutte e due le condizioni sono vere, nel ramo dell\'if il paragrafo dice che si può salire.'),
          provaSali(altezzaMin, etaMin, SI, `«Almeno» vuol dire che anche ${altezzaMin} cm e ${etaMin} anni vanno bene: il confronto è >=, non >.`),
          provaSali(alto, etaMin - 1, NO, `Qui l'altezza va bene ma l'età no: con && servono vere TUTTE E DUE. Se dice che si può salire, forse hai scritto || o hai dimenticato il confronto sull'età.`),
          provaSali(altezzaMin - 1, grande, NO, `Qui l'età va bene ma l'altezza no (${altezzaMin - 1} cm): anche così non si sale. Ogni parte del && ha la sua variabile: altezza >= ... && eta >= ....`),
        ],
        codiceIniziale: '// 1. Scrivi la funzione del pulsante Posso salire?\n\n// 2. Collega il pulsante alla funzione\n',
      },
      {
        consegna: `Il secondo pulsante, **Quanto costa?** (id \`btnPrezzo\`), dice il prezzo del giro.\n1. Scrivi una **nuova** funzione per il pulsante e collegala con \`addEventListener\`.\n2. Dentro, leggi l'età (id \`eta\`) nella variabile \`eta\`, come nella fase 1.\n3. Il giro è gratis per chi ha **meno** di ${sottoGratis} anni **oppure** **almeno** ${sopraGratis} anni. Ne basta una delle due: scrivi un solo \`if\` con \`||\`: \`if (${condizioneGratis}) { ... } else { ... }\`\n4. Se è gratis, il paragrafo (id \`esito\`) dice \`${GRATIS}\`.\n5. Altrimenti dice \`${COSTA}\`.\nIl pulsante **Posso salire?** deve continuare a funzionare.`,
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalleCaselle} Il prezzo lo decide UN if con le due condizioni unite da || (${condizioneGratis}), con la variabile eta ripetuta in tutte e due le parti.`,
        prove: [
          provaPrezzo(sottoGratis - 1, GRATIS, `Una funzione nuova, collegata al pulsante Quanto costa?: legge l'età e, se è minore di ${sottoGratis}, il paragrafo dice che il giro è gratis.`),
          provaPrezzo(sopraGratis, GRATIS, `Con ${sopraGratis} anni il giro è gratis: «almeno» vuol dire >=. E basta UNA delle due condizioni: si uniscono con || (oppure), non con &&.`),
          provaPrezzo(sottoGratis, COSTA, `Con ${sottoGratis} anni esatti si paga: «meno di ${sottoGratis}» si scrive eta < ${sottoGratis}, non eta <= ${sottoGratis}.`),
          provaPrezzo(30, COSTA, `Con 30 anni nessuna delle due condizioni è vera: si arriva all'else, che dice il prezzo. Ogni parte del || ha la sua variabile: eta < ... || eta >= ....`),
          provaSali(alto, etaMin - 1, NO, 'Il pulsante Posso salire? deve continuare a funzionare come nella fase 1.'),
        ],
      },
      {
        consegna: `Prima di partire, il giostraio controlla la cintura. **Cambia** la funzione del pulsante **Posso salire?**.\n1. Sotto le righe che leggono le caselle, **aggiungi** la domanda: \`let cintura = confirm("Hai allacciato la cintura?");\`\n2. Il \`confirm\` dà \`true\` con OK e \`false\` con Annulla. \`!cintura\` vuol dire «la cintura **non** è allacciata».\n3. **Aggiungi** un nuovo \`if\` prima di quello che c'è: \`if (!cintura) { ... } else if (${condizioneSali}) { ... } else { ... }\`. Il tuo \`if\` con \`&&\` diventa l'\`else if\`.\n4. Se la cintura non è allacciata, il paragrafo (id \`esito\`) dice \`${CINTURA}\`.\nTutto il resto non cambia: anche **Quanto costa?** deve continuare a funzionare.`,
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalleCaselle} La risposta del confirm sta in una variabile e si controlla negata con ! (o === false). Altezza ed età restano controllate da UN confronto con &&. Va bene anche chiedere la cintura solo a chi ha altezza ed età giuste.`,
        prove: [
          provaSali(alto, grande, CINTURA, 'Con Annulla il confirm dà false: la risposta va in una variabile, e il primo if la controlla negata con !.', false),
          provaSali(alto, grande, SI, `Con OK, altezza ed età giuste si sale: nell'else if resta il controllo con && della fase 1.`, true),
          provaSali(altezzaMin - 1, grande, NO, `Anche con la cintura allacciata, con ${altezzaMin - 1} cm non si sale: l'ultimo else resta.`, true),
          provaPrezzo(sottoGratis - 1, GRATIS, 'Il pulsante Quanto costa? deve continuare a funzionare come nella fase 2.'),
        ],
      },
    ],
    soluzioni: [
      `${SALI_1}

${COLLEGA_SALI}`,
      `${SALI_1}

${PREZZO}

${COLLEGA_SALI}
${COLLEGA_PREZZO}`,
      `function posso() {
${LETTURE}
  let cintura = confirm("Hai allacciato la cintura?");
  if (!cintura) {
    esito.innerHTML = "${CINTURA}";
  } else if (${condizioneSali}) {
    esito.innerHTML = "${SI}";
  } else {
    esito.innerHTML = "${NO}";
  }
}

${PREZZO}

${COLLEGA_SALI}
${COLLEGA_PREZZO}`,
    ],
  };
}
