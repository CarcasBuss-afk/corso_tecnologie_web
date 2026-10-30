/* Sfida · La pagella (Modulo 4, lezione 9).
 * Più difficile del normale: le consegne dicono che cosa fa ogni funzione, non come si scrive.
 * Funzioni con tre parametri; una funzione che restituisce un testo con else if (e il return
 * che ferma la funzione); una che restituisce true o false con && (Lezione 8), usata più volte
 * nello stesso if; una che restituisce il colore da mettere nello stile (Lezione 5); alla fine
 * un calcolo «al contrario» con tre esiti. I voti di prova hanno la somma divisibile per 3:
 * le medie sono intere. */
import { clic, CSS_BASE, scrivi, stile, testo, ROSSI, VERDI } from './aiuti';
import { generatore, REGOLE, scegli, type Compito } from './tipi';

const MATERIE = ['Storia', 'Inglese', 'Scienze', 'Geografia', 'Italiano', 'Tecnologie Web'] as const;

type Voti = readonly [number, number, number];

const INSUFFICIENTI: readonly Voti[] = [[4, 5, 3], [5, 5, 2], [3, 6, 3], [5, 4, 6]];
const SUFFICIENTI: readonly Voti[] = [[7, 5, 6], [5, 7, 6], [6, 5, 7]];
const BUONI: readonly Voti[] = [[7, 8, 6], [8, 7, 6], [6, 8, 7]];
const OTTIMI: readonly Voti[] = [[9, 10, 8], [10, 9, 8], [9, 9, 9]];

export function generaPagella(seme: number): Compito {
  const rnd = generatore(seme);
  const materia = scegli(rnd, MATERIE);
  const insufficiente = scegli(rnd, INSUFFICIENTI);
  const sufficiente = scegli(rnd, SUFFICIENTI);
  const buono = scegli(rnd, BUONI);
  const ottimo = scegli(rnd, OTTIMI);
  const seiPieno: Voti = [6, 6, 6];
  const ottoPieno: Voti = [8, 8, 8];

  const html = `<h1>📒 Il registro di ${materia}</h1>
<label>Primo voto: <input id="voto1" type="number"></label>
<label>Secondo voto: <input id="voto2" type="number"></label>
<label>Terzo voto: <input id="voto3" type="number"></label>
<button id="btnMedia">Calcola la media</button>
<p id="media"></p>
<p id="giudizio"></p>
<label>La media che vuoi: <input id="obiettivo" type="number"></label>
<button id="btnServe">Quanto mi serve?</button>
<p id="serve"></p>`;

  /* I conti veri, per le prove. */
  const somma = (v: Voti) => v[0] + v[1] + v[2];
  const media = (v: Voti) => somma(v) / 3;
  const giudizio = (m: number) => (m < 6 ? 'Insufficiente' : m < 7 ? 'Sufficiente' : m < 8 ? 'Buono' : 'Ottimo');
  const serve = (v: Voti, obiettivo: number) => {
    const quarto = obiettivo * 4 - somma(v);
    if (quarto > 10) return 'Non basta un voto solo';
    if (quarto < 1) return 'Ce la fai con qualsiasi voto';
    return `Ti serve almeno ${quarto}`;
  };

  const scriviVoti = (v: readonly (number | string)[]) => v.map((x, i) => scrivi(`voto${i + 1}`, String(x), ['Primo voto', 'Secondo voto', 'Terzo voto'][i]));
  const calcola = clic('btnMedia', 'Calcola la media');
  const nomeVoti = (v: readonly (number | string)[]) => `con i voti ${v.map((x) => (x === '' ? 'vuoto' : x)).join(', ')}`;

  const provaMedia = (v: Voti, hint: string) => ({
    nome: nomeVoti(v),
    passi: [...scriviVoti(v), calcola, testo('media', `Media: ${media(v)}`, `Dice «Media: ${media(v)}»`, hint)],
  });
  const provaGiudizio = (v: Voti, hint: string) => ({
    nome: nomeVoti(v),
    passi: [...scriviVoti(v), calcola, testo('media', `Media: ${media(v)}`, `Dice «Media: ${media(v)}»`, 'La media resta come nella fase 1.'), testo('giudizio', `Giudizio: ${giudizio(media(v))}`, `Dice «Giudizio: ${giudizio(media(v))}»`, hint)],
  });
  const provaNonValido = (v: readonly (number | string)[], hint: string) => ({
    nome: nomeVoti(v),
    passi: [
      ...scriviVoti(v),
      calcola,
      testo('media', 'Voto non valido', 'Dice «Voto non valido»', hint),
      testo('giudizio', '', 'Il paragrafo del giudizio è vuoto', 'Quando un voto non è valido, anche il paragrafo del giudizio va svuotato, con un testo vuoto "".'),
    ],
  });
  const provaColore = (v: Voti, colori: string[], quale: string, hint: string) => ({
    nome: nomeVoti(v),
    passi: [...scriviVoti(v), calcola, testo('media', `Media: ${media(v)}`, `Dice «Media: ${media(v)}»`, 'La media resta come prima.'), stile('media', 'color', colori, `La media è scritta in ${quale}`, hint)],
  });
  const provaServe = (v: Voti, obiettivo: number, hint: string) => ({
    nome: `${nomeVoti(v)} e la media ${obiettivo}`,
    passi: [...scriviVoti(v), scrivi('obiettivo', String(obiettivo), 'La media che vuoi'), clic('btnServe', 'Quanto mi serve?'), testo('serve', serve(v, obiettivo), `Dice «${serve(v, obiettivo)}»`, hint)],
  });

  const MEDIA = `function media(a, b, c) {
  return (a + b + c) / 3;
}`;
  const GIUDIZIO = `function giudizio(m) {
  if (m < 6) {
    return "Insufficiente";
  } else if (m < 7) {
    return "Sufficiente";
  } else if (m < 8) {
    return "Buono";
  } else {
    return "Ottimo";
  }
}`;
  const VALIDO = `function votoValido(v) {
  return v >= 1 && v <= 10;
}`;
  const COLORE = `function coloreMedia(m) {
  if (m < 6) {
    return "red";
  } else {
    return "green";
  }
}`;
  const LEGGI = `  let a = Number(document.getElementById("voto1").value);
  let b = Number(document.getElementById("voto2").value);
  let c = Number(document.getElementById("voto3").value);`;
  const calcolaMedia = (colore: boolean) => `function calcolaMedia() {
${LEGGI}
  if (!votoValido(a) || !votoValido(b) || !votoValido(c)) {
    document.getElementById("media").innerHTML = "Voto non valido";
    document.getElementById("giudizio").innerHTML = "";
  } else {
    let m = media(a, b, c);
    document.getElementById("media").innerHTML = "Media: " + m;
    document.getElementById("giudizio").innerHTML = "Giudizio: " + giudizio(m);${colore ? '\n    document.getElementById("media").style.color = coloreMedia(m);' : ''}
  }
}`;
  const COLLEGA = 'document.getElementById("btnMedia").addEventListener("click", calcolaMedia);';

  return {
    scheda: {
      id: 'pagella',
      titolo: 'La pagella',
      lezione: 'Modulo 4 · Lezione 9',
      committente: `Il prof di ${materia} vuole un registro sul tablet: scrive i tre voti di un allievo e la pagina fa la media, dà il giudizio e dice quanto serve nella prossima verifica per arrivare a una certa media.`,
      prodotto: 'Una pagina in cui ogni conto e ogni decisione sta nella sua funzione con return: media, giudizio, voto valido, colore e voto che serve.',
      dati: [
        'media: la somma dei tre voti diviso 3',
        'giudizio: sotto 6 Insufficiente, da 6 Sufficiente, da 7 Buono, da 8 Ottimo',
        'un voto è valido da 1 a 10',
        'colore della media: rosso sotto il 6, verde dal 6 in su',
      ],
      risultatoFinale: [
        '«Calcola la media» scrive la media colorata e il giudizio; se un voto non va bene dice «Voto non valido».',
        '«Quanto mi serve?» dice che voto serve nella quarta verifica per arrivare alla media scelta.',
        'Ogni calcolo è una funzione con parametri e return; le funzioni dei pulsanti le usano.',
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Questa è una sfida: la consegna dice che cosa deve fare ogni funzione, il codice lo trovi tu.\n1. Una funzione \`media\` con **tre parametri**, i tre voti, che restituisce la loro media con \`return\`.\n2. Il pulsante **Calcola la media** (id \`btnMedia\`) legge le tre caselle (id \`voto1\`, \`voto2\`, \`voto3\`) e scrive nel paragrafo (id \`media\`) \`Media: M\`, con M calcolata da \`media\`.\nSe la media ha la virgola, per esempio 7.333333333333333, va bene così.`,
        regola: `${REGOLE.treGesti} ${REGOLE.funzioneConReturn} ${REGOLE.datiDalleCaselle}`,
        prove: [
          provaMedia(buono, 'La funzione media riceve i tre voti e restituisce la somma divisa per 3: la somma va fra parentesi, se no si divide solo l\'ultimo voto.'),
          provaMedia(insufficiente, 'I voti devono venire dalle caselle, letti con Number(...value) dentro la funzione del pulsante.'),
          provaMedia(ottimo, 'Controlla le parentesi: (a + b + c) / 3.'),
        ],
        codiceIniziale: '// Le funzioni di calcolo, con return\n\n// La funzione del pulsante\n\n// Il collegamento\n',
      },
      {
        consegna: `Sotto la media, il giudizio.\n1. Una funzione \`giudizio\` che riceve la media e restituisce il giudizio, cioè uno di questi quattro testi: \`Insufficiente\` (sotto 6), \`Sufficiente\` (da 6), \`Buono\` (da 7), \`Ottimo\` (da 8 in su).\n2. Calcola la media scrive anche nel paragrafo (id \`giudizio\`) \`Giudizio: G\`, con G restituito da \`giudizio\`.\nUn 6 tondo è Sufficiente e un 8 tondo è Ottimo.`,
        regola: `${REGOLE.treGesti} ${REGOLE.funzioneConReturn} ${REGOLE.datiDalleCaselle} Il giudizio lo restituisce la funzione giudizio, con if ed else if.`,
        prove: [
          provaGiudizio(buono, 'La funzione giudizio confronta la media con 6, 7 e 8 con if ed else if: un return per ogni giudizio.'),
          provaGiudizio(insufficiente, 'Sotto il 6 il giudizio è Insufficiente.'),
          provaGiudizio(seiPieno, 'Un 6 tondo è Sufficiente: il confronto giusto è «minore di 6» per l\'insufficienza.'),
          provaGiudizio(sufficiente, 'Fra 6 e 7 il giudizio è Sufficiente.'),
          provaGiudizio(ottoPieno, 'Un 8 tondo è Ottimo: Buono vale solo sotto l\'8.'),
          provaGiudizio(ottimo, 'Da 8 in su il giudizio è Ottimo.'),
        ],
      },
      {
        consegna: `Un voto va da 1 a 10: un 11, uno 0 o una casella vuota sono errori di battitura.\n1. Una funzione \`votoValido\` che riceve **un** voto e restituisce \`true\` se va da 1 a 10, \`false\` se no.\n2. In Calcola la media, prima di calcolare: se **almeno uno** dei tre voti non è valido, il paragrafo della media dice \`Voto non valido\` e quello del giudizio si svuota. Altrimenti tutto come prima.\nLa funzione è una sola: la chiami tre volte, una per voto. Una casella vuota, con \`Number()\`, diventa 0.`,
        regola: `${REGOLE.treGesti} ${REGOLE.funzioneConReturn} ${REGOLE.datiDalleCaselle} Il controllo lo fa la funzione votoValido, con && o ||, chiamata una volta per ogni voto.`,
        prove: [
          provaNonValido([11, buono[1], buono[2]], 'votoValido restituisce v >= 1 && v <= 10. Nell\'if di Calcola chiamala per tutti e tre i voti: basta che uno non sia valido.'),
          provaNonValido([buono[0], buono[1], 0], 'Anche lo 0 non è valido, e anche il terzo voto va controllato.'),
          provaNonValido([buono[0], '', buono[2]], 'Una casella vuota, con Number(), diventa 0: non è valido.'),
          provaGiudizio(buono, 'Con tre voti validi, media e giudizio come prima.'),
          provaGiudizio([10, 10, 10], 'Il 10 è un voto valido: il confronto con 10 è «minore o uguale».'),
        ],
      },
      {
        consegna: `La media si colora: **rossa** sotto il 6, **verde** dal 6 in su.\n1. Una funzione \`coloreMedia\` che riceve la media e restituisce il **nome** del colore, \`"red"\` oppure \`"green"\`.\n2. Calcola la media mette quel colore nello stile del paragrafo della media (\`.style.color\`, Lezione 5), usando quello che restituisce \`coloreMedia\`.`,
        regola: `${REGOLE.treGesti} ${REGOLE.funzioneConReturn} ${REGOLE.datiDalleCaselle} Il colore lo restituisce la funzione coloreMedia e finisce in .style.color.`,
        prove: [
          provaColore(insufficiente, ROSSI, 'rosso', 'coloreMedia restituisce "red" sotto il 6: il valore restituito va dopo .style.color =.'),
          provaColore(buono, VERDI, 'verde', 'Dal 6 in su coloreMedia restituisce "green".'),
          provaColore(seiPieno, VERDI, 'verde', 'Un 6 tondo è già verde.'),
          provaColore(insufficiente, ROSSI, 'rosso', 'Il colore deve cambiare a ogni calcolo, secondo la media.'),
        ],
      },
      {
        consegna: `L'ultimo pulsante, **Quanto mi serve?** (id \`btnServe\`), guarda avanti: con una quarta verifica, che voto serve per arrivare alla media scritta nella casella (id \`obiettivo\`)?\n1. Una funzione \`votoCheServe\` con due parametri, **la somma dei tre voti** e la media voluta, che restituisce il voto da prendere: la media voluta per 4, meno la somma.\n2. Il pulsante legge i tre voti e la media voluta, e scrive nel paragrafo (id \`serve\`) uno di tre testi:\n- \`Ti serve almeno V\`, con V il voto restituito da \`votoCheServe\`;\n- \`Non basta un voto solo\`, se V è più di 10;\n- \`Ce la fai con qualsiasi voto\`, se V è meno di 1.`,
        regola: `${REGOLE.treGesti} ${REGOLE.funzioneConReturn} ${REGOLE.datiDalleCaselle} Il voto che serve lo restituisce la funzione votoCheServe; i tre testi li sceglie un if con else if.`,
        prove: [
          provaServe(buono, 7, 'votoCheServe riceve la somma dei tre voti e la media voluta, e restituisce media voluta * 4 meno la somma.'),
          provaServe(seiPieno, 7, 'Arrivare al 7 partendo da tre 6: (6 + 6 + 6 + 10) / 4 = 7.'),
          provaServe(insufficiente, 7, 'Se il voto che serve è più di 10, il paragrafo dice «Non basta un voto solo».'),
          provaServe(ottimo, 6, 'Se il voto che serve è meno di 1, il paragrafo dice «Ce la fai con qualsiasi voto».'),
          provaGiudizio(buono, 'Calcola la media deve continuare a funzionare.'),
        ],
      },
    ],
    soluzioni: [
      `${MEDIA}

function calcolaMedia() {
${LEGGI}
  document.getElementById("media").innerHTML = "Media: " + media(a, b, c);
}

${COLLEGA}`,
      `${MEDIA}

${GIUDIZIO}

function calcolaMedia() {
${LEGGI}
  let m = media(a, b, c);
  document.getElementById("media").innerHTML = "Media: " + m;
  document.getElementById("giudizio").innerHTML = "Giudizio: " + giudizio(m);
}

${COLLEGA}`,
      `${MEDIA}

${GIUDIZIO}

${VALIDO}

${calcolaMedia(false)}

${COLLEGA}`,
      `${MEDIA}

${GIUDIZIO}

${VALIDO}

${COLORE}

${calcolaMedia(true)}

${COLLEGA}`,
      `${MEDIA}

${GIUDIZIO}

${VALIDO}

${COLORE}

function votoCheServe(somma, obiettivo) {
  return obiettivo * 4 - somma;
}

${calcolaMedia(true)}

function quantoServe() {
${LEGGI}
  let obiettivo = Number(document.getElementById("obiettivo").value);
  let voto = votoCheServe(a + b + c, obiettivo);
  if (voto > 10) {
    document.getElementById("serve").innerHTML = "Non basta un voto solo";
  } else if (voto < 1) {
    document.getElementById("serve").innerHTML = "Ce la fai con qualsiasi voto";
  } else {
    document.getElementById("serve").innerHTML = "Ti serve almeno " + voto;
  }
}

${COLLEGA}
document.getElementById("btnServe").addEventListener("click", quantoServe);`,
    ],
  };
}
