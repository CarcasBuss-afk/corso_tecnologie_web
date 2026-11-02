/* Sfida · La pulsantiera del DJ (Modulo 4, lezione 2).
 * Più difficile del normale: le consegne dicono che cosa scrive ogni pulsante, il codice lo
 * scrive l'allievo (nomi e scomposizione sono suoi). Cinque pulsanti, cinque funzioni con nome
 * collegate con addEventListener, e dentro quello che la Lezione 1 ha insegnato sul console.log:
 * più valori separati da virgole e conti a più passi, con le parentesi al posto giusto (i secondi
 * di un brano, le battute dal bpm, la durata del set in minuti, il cachet). Niente variabili,
 * alert o prompt: arrivano nella Lezione 3. I pulsanti parlano solo con la console. Le durate
 * sono multipli di 15 secondi e i bpm multipli di 4: tutti i conti vengono interi, tranne i
 * minuti del set, che possono avere .25, .5 o .75. */
import { clic, CSS_BASE, rigaConsole } from './aiuti';
import { generatore, intero, REGOLE, scegli, type Compito } from './tipi';

const DJ = ['DJ Nova', 'DJ Kappa', 'DJ Luna', 'DJ Faro', 'DJ Pixel', 'DJ Zeta'] as const;
const FESTE = ['Notte Bianca', 'Festa di Fine Anno', 'Serata Latina', 'Festa della Scuola', 'Notte dei Diplomi', 'Festa in Piscina'] as const;
const TITOLI = ['Luce Blu', 'Onda Lunga', 'Notte Elettrica', 'Cuore a Mille', 'Stelle di Carta', 'Vento del Sud', 'Fuoco Lento', 'Pioggia Neon'] as const;

interface Brano {
  titolo: string;
  minuti: number;
  secondi: number;
}

const durata = (b: Brano) => b.minuti * 60 + b.secondi;
const conto = (b: Brano) => `${b.minuti} * 60 + ${b.secondi}`;

export function generaPulsantiera(seme: number): Compito {
  const rnd = generatore(seme);
  const dj = scegli(rnd, DJ);
  const festa = scegli(rnd, FESTE);
  const pausa = scegli(rnd, [5, 10, 15] as const);

  /* Tre brani con titoli diversi; i secondi non sono mai 0, così il conto serve davvero. */
  const titoli: string[] = [];
  while (titoli.length < 3) {
    const t = scegli(rnd, TITOLI);
    if (!titoli.includes(t)) titoli.push(t);
  }
  const brani: Brano[] = titoli.map((titolo) => ({ titolo, minuti: intero(rnd, 2, 4), secondi: scegli(rnd, [15, 30, 45] as const) }));
  const [b1, b2, b3] = brani;
  const bpm = scegli(rnd, [120, 128, 132, 140] as const);
  const biglietti = scegli(rnd, [80, 100, 120, 150] as const);
  const prezzo = scegli(rnd, [5, 8, 10] as const);
  const spese = scegli(rnd, [100, 150, 200, 250] as const);

  /* I conti veri, per le prove. */
  const battute = (bpm * durata(b1)) / 60;
  const secondiSet = durata(b1) + durata(b2) + durata(b3);
  const minutiSet = secondiSet / 60;
  const incasso = biglietti * prezzo;
  const quota = (incasso - spese) / 2;

  /* I testi esatti che la console deve mostrare. */
  const VIA = `Via alla ${festa}: in consolle ${dj}`;
  const STOP = `Pausa di ${pausa} minuti, non andate via`;
  const IN_ONDA = `In onda: ${b1.titolo}`;
  const DURATA = `Durata: ${durata(b1)} secondi`;
  const BATTUTE = `Battute nel brano: ${battute}`;
  const dura = (b: Brano) => `${b.titolo} dura ${durata(b)} secondi`;
  const SET = `Il set dura ${minutiSet} minuti`;
  const INCASSO = `Incasso: ${incasso} €`;
  const QUOTA = `Al DJ vanno ${quota} €`;

  const html = `<h1>🎧 La consolle di ${dj}</h1>
<p>${festa}: la consolle scrive nella <strong>console</strong>, sotto la pagina.</p>
<button id="btnPlay">Play</button>
<button id="btnStop">Stop</button>
<button id="btnBrano">Brano</button>
<button id="btnBattute">Battute</button>
<button id="btnScaletta">Scaletta</button>
<button id="btnCachet">Cachet</button>`;

  const clicPlay = clic('btnPlay', 'Play');
  const clicStop = clic('btnStop', 'Stop');
  const clicBrano = clic('btnBrano', 'Brano');
  const clicBattute = clic('btnBattute', 'Battute');
  const clicScaletta = clic('btnScaletta', 'Scaletta');
  const clicCachet = clic('btnCachet', 'Cachet');

  const hintCollegamento = "Se in console non compare niente: la funzione è collegata al pulsante con addEventListener? L'id fra virgolette deve essere uguale a quello nell'HTML, e il nome della funzione va senza parentesi.";

  const riga = (testo: string, hint: string) => rigaConsole(testo, `In console c'è la riga «${testo}»`, hint);
  const continuaPlay = riga(VIA, 'Play deve continuare a funzionare come nella fase 1: la sua funzione e il suo collegamento restano.');
  const continuaStop = riga(STOP, 'Stop deve continuare a funzionare come nella fase 1.');
  const continuaDurata = riga(DURATA, 'Brano deve continuare a funzionare come nella fase 2, con il conto dei secondi dentro il console.log.');
  const continuaBattute = riga(BATTUTE, 'Battute deve continuare a funzionare come nella fase 3.');
  const continuaSet = riga(SET, 'Scaletta deve continuare a funzionare come nella fase 4, con la somma fra parentesi divisa per 60.');

  /* Pezzi delle soluzioni di riferimento. */
  const PLAY = `function avviaMusica() {
  console.log("${VIA}");
}`;
  const FERMA = `function fermaMusica() {
  console.log("${STOP}");
}`;
  const BRANO = `function mostraBrano() {
  console.log("${IN_ONDA}");
  console.log("Durata:", ${conto(b1)}, "secondi");
}`;
  const CONTA_BATTUTE = `function contaBattute() {
  console.log("Battute nel brano:", ${bpm} * (${conto(b1)}) / 60);
}`;
  const SCALETTA = `function mostraScaletta() {
  console.log("${b1.titolo} dura", ${conto(b1)}, "secondi");
  console.log("${b2.titolo} dura", ${conto(b2)}, "secondi");
  console.log("${b3.titolo} dura", ${conto(b3)}, "secondi");
  console.log("Il set dura", (${conto(b1)} + ${conto(b2)} + ${conto(b3)}) / 60, "minuti");
}`;
  const CACHET = `function calcolaCachet() {
  console.log("Incasso:", ${biglietti} * ${prezzo}, "€");
  console.log("Al DJ vanno", (${biglietti} * ${prezzo} - ${spese}) / 2, "€");
}`;
  const COLLEGA_PLAY = 'document.getElementById("btnPlay").addEventListener("click", avviaMusica);';
  const COLLEGA_STOP = 'document.getElementById("btnStop").addEventListener("click", fermaMusica);';
  const COLLEGA_BRANO = 'document.getElementById("btnBrano").addEventListener("click", mostraBrano);';
  const COLLEGA_BATTUTE = 'document.getElementById("btnBattute").addEventListener("click", contaBattute);';
  const COLLEGA_SCALETTA = 'document.getElementById("btnScaletta").addEventListener("click", mostraScaletta);';
  const COLLEGA_CACHET = 'document.getElementById("btnCachet").addEventListener("click", calcolaCachet);';

  const contiNonAMano = 'I numeri li calcola JavaScript dentro il console.log, come valori a parte separati da virgole: non valgono i risultati scritti a mano, né dentro il testo fra virgolette.';
  const tempo = (b: Brano) => `${b.minuti}:${b.secondi}`;

  return {
    scheda: {
      id: 'pulsantiera',
      titolo: 'La pulsantiera del DJ',
      lezione: 'Modulo 4 · Lezione 2',
      committente: `${dj} suona alla ${festa}, ma la sua consolle si è rotta: per stasera la rimpiazza una pagina con sei pulsanti. Ogni pulsante scrive nella console che cosa succede, e i conti (secondi, battute, minuti, euro) li fa JavaScript.`,
      prodotto: 'Una pagina con sei pulsanti: ognuno ha la sua funzione con nome, collegata con addEventListener, che scrive in console una o più righe con i numeri calcolati.',
      dati: [
        `DJ: ${dj}`,
        `festa: ${festa}`,
        `pausa: ${pausa} minuti`,
        `brani del set: ${b1.titolo} (${tempo(b1)}), ${b2.titolo} (${tempo(b2)}), ${b3.titolo} (${tempo(b3)})`,
        `ritmo del primo brano: ${bpm} battiti al minuto`,
        `cassa: ${biglietti} biglietti a ${prezzo} €, spese ${spese} €, il resto a metà fra DJ e locale`,
      ],
      risultatoFinale: [
        `«Play» scrive «${VIA}», «Stop» scrive «${STOP}».`,
        `«Brano» scrive «${IN_ONDA}» e «${DURATA}», con i secondi calcolati dai minuti.`,
        `«Battute» scrive «${BATTUTE}»: i battiti al minuto per la durata in minuti.`,
        `«Scaletta» scrive la durata dei tre brani e «${SET}»; «Cachet» scrive «${INCASSO}» e «${QUOTA}».`,
      ],
    },
    pagina: { html, css: CSS_BASE },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Questa è una sfida: la consegna dice che cosa scrive la pagina, il codice lo scrivi tu.\nDue pulsanti, due funzioni con nome, due collegamenti con \`addEventListener\`.\n1. **Play** (id \`btnPlay\`): in **console** compare \`${VIA}\`.\n2. **Stop** (id \`btnStop\`): in console compare \`${STOP}\`.\nOgni riga compare solo al clic del suo pulsante. I nomi delle funzioni li scegli tu.`,
        regola: `${REGOLE.treGesti} Ogni pulsante ha la sua funzione con nome e il suo addEventListener. I console.log stanno dentro le funzioni, non fuori: le righe compaiono solo quando si clicca.`,
        prove: [
          {
            passi: [
              clicPlay,
              riga(VIA, `${hintCollegamento} Se la riga è diversa: il testo va copiato esatto, con i due punti e le maiuscole di «${festa}» e «${dj}».`),
              clicStop,
              riga(STOP, `Stop ha la sua funzione e il suo addEventListener, con l'id btnStop. Il testo è esattamente «${STOP}», con la virgola.`),
            ],
          },
          {
            nome: 'cliccando prima Stop e poi Play',
            passi: [
              clicStop,
              riga(STOP, 'Stop deve funzionare anche se non si è ancora cliccato Play: ha la sua funzione, collegata a btnStop.'),
              clicPlay,
              riga(VIA, 'La riga di Play la scrive la funzione collegata a btnPlay, non quella di Stop.'),
            ],
          },
        ],
        codiceIniziale: '// 1. Le funzioni, una per pulsante\n\n// 2. I collegamenti con addEventListener\n',
      },
      {
        consegna: `**Brano** (id \`btnBrano\`) dice che cosa è in onda. Il primo brano è **${b1.titolo}** e dura **${b1.minuti} minuti e ${b1.secondi} secondi**.\nUna nuova funzione, collegata con \`addEventListener\`, scrive **due righe**:\n1. \`${IN_ONDA}\`;\n2. \`Durata: S secondi\`, con S la durata del brano **in secondi**.\nS lo calcola JavaScript dentro il \`console.log\`, con i valori separati da virgole come nella Lezione 1: il testo fra virgolette, il conto senza. Il risultato non si scrive a mano.\nPlay e Stop continuano a funzionare.`,
        regola: `${REGOLE.treGesti} Ogni pulsante ha la sua funzione con nome e il suo addEventListener. Le due righe le scrivono due console.log nella stessa funzione. I secondi del brano li calcola JavaScript (minuti per 60 più i secondi, con * e +) come valore a parte nel console.log: non vale il risultato scritto a mano, né dentro il testo fra virgolette.`,
        prove: [
          {
            passi: [
              clicBrano,
              riga(IN_ONDA, `${hintCollegamento} La prima riga è un console.log con il testo «${IN_ONDA}» fra virgolette.`),
              riga(DURATA, `La seconda riga è un altro console.log nella stessa funzione, con tre valori separati da virgole: il testo «Durata:», il conto dei secondi (${b1.minuti} minuti per 60, più ${b1.secondi}) senza virgolette, poi il testo «secondi».`),
            ],
          },
          {
            nome: 'con tutti e tre i pulsanti',
            passi: [
              clicPlay,
              continuaPlay,
              clicBrano,
              riga(DURATA, 'La riga della durata la scrive la funzione collegata a btnBrano, con il conto dentro.'),
              clicStop,
              continuaStop,
            ],
          },
        ],
      },
      {
        consegna: `**Battute** (id \`btnBattute\`): il primo brano va a **${bpm} battiti al minuto**.\nUna nuova funzione, collegata con \`addEventListener\`, scrive \`Battute nel brano: B\`, con B le battute in tutto il brano: i battiti al minuto **per** la durata in **minuti**, e la durata in minuti sono i secondi del brano (lo stesso conto della fase 2) **divisi per 60**.\nTutto in un conto solo, dentro il \`console.log\`: ci vuole una coppia di parentesi al posto giusto, se no JavaScript divide solo l'ultimo pezzo. Con i dati della scheda la riga è \`${BATTUTE}\`.\nGli altri pulsanti continuano a funzionare.`,
        regola: `${REGOLE.treGesti} Ogni pulsante ha la sua funzione con nome e il suo addEventListener. Le battute le calcola JavaScript dentro il console.log, con i bpm, il conto dei secondi fra parentesi e la divisione per 60: non valgono il risultato scritto a mano né i secondi del brano scritti come numero già calcolato.`,
        prove: [
          {
            passi: [
              clicBattute,
              riga(BATTUTE, `${hintCollegamento} Se il numero è diverso: il conto è ${bpm} per i secondi del brano, fra parentesi, diviso 60. Senza le parentesi JavaScript moltiplica ${bpm} per ${b1.minuti} e divide solo ${b1.secondi} per 60.`),
            ],
          },
          {
            nome: 'brano, battute e poi Play',
            passi: [
              clicBrano,
              continuaDurata,
              clicBattute,
              riga(BATTUTE, 'La riga delle battute la scrive la funzione collegata a btnBattute: una funzione sua, non quella di Brano.'),
              clicPlay,
              continuaPlay,
            ],
          },
        ],
      },
      {
        consegna: `**Scaletta** (id \`btnScaletta\`): il set ha tre brani, **${b1.titolo}** (${tempo(b1)}), **${b2.titolo}** (${tempo(b2)}) e **${b3.titolo}** (${tempo(b3)}).\nUna nuova funzione, collegata con \`addEventListener\`, scrive **quattro righe**:\n1. \`${b1.titolo} dura S secondi\`, con S i secondi del brano, calcolati come nella fase 2;\n2. la stessa riga per il secondo brano, \`${b2.titolo} dura S secondi\`;\n3. la stessa per il terzo, \`${b3.titolo} dura S secondi\`;\n4. \`Il set dura M minuti\`, con M i secondi dei tre brani **sommati** e poi **divisi per 60**: tutta la somma fra parentesi. Se M ha il punto, per esempio 10.5, va bene così.\nGli altri pulsanti continuano a funzionare.`,
        regola: `${REGOLE.treGesti} Ogni pulsante ha la sua funzione con nome e il suo addEventListener. Le quattro righe le scrivono quattro console.log nella stessa funzione. ${contiNonAMano} I minuti del set li calcola JavaScript sommando le durate dei tre brani e dividendo per 60 (la somma fra parentesi); va bene anche un conto scomposto in modo diverso ma equivalente, purché il risultato non sia scritto a mano.`,
        prove: [
          {
            passi: [
              clicScaletta,
              riga(dura(b1), `${hintCollegamento} Ogni riga dei brani ha tre valori: il titolo con «dura» fra virgolette, il conto dei secondi, il testo «secondi».`),
              riga(dura(b2), `La seconda riga è il secondo brano: ${b2.minuti} minuti per 60, più ${b2.secondi}.`),
              riga(dura(b3), `La terza riga è il terzo brano: ${b3.minuti} minuti per 60, più ${b3.secondi}.`),
              riga(SET, `La quarta riga divide per 60 la somma dei tre conti: la somma intera va fra parentesi, se no JavaScript divide solo l'ultimo numero. Il risultato giusto è ${minutiSet}.`),
            ],
          },
          {
            nome: 'battute, scaletta e poi Stop',
            passi: [
              clicBattute,
              continuaBattute,
              clicScaletta,
              riga(SET, 'La riga del set la scrive la funzione collegata a btnScaletta, con la somma fra parentesi divisa per 60.'),
              clicStop,
              continuaStop,
            ],
          },
        ],
      },
      {
        consegna: `**Cachet** (id \`btnCachet\`): quanto guadagna il DJ stasera. Biglietti venduti: **${biglietti}**, a **${prezzo} €** l'uno. Le spese dell'impianto sono **${spese} €**, e quel che resta si divide **a metà** fra il DJ e il locale.\nUna nuova funzione, collegata con \`addEventListener\`, scrive **due righe**:\n1. \`Incasso: I €\`, con I i biglietti per il prezzo;\n2. \`Al DJ vanno Q €\`, con Q l'incasso meno le spese, diviso 2: tre operazioni in un conto solo, con le parentesi al posto giusto.\nTutti i numeri li calcola JavaScript. Il simbolo € si fa con **AltGr + E**. Gli altri pulsanti continuano a funzionare.`,
        regola: `${REGOLE.treGesti} Ogni pulsante ha la sua funzione con nome e il suo addEventListener. ${contiNonAMano} La quota del DJ è un conto solo: biglietti per prezzo, meno le spese, tutto fra parentesi e diviso 2.`,
        prove: [
          {
            passi: [
              clicCachet,
              riga(INCASSO, `${hintCollegamento} La prima riga ha tre valori: il testo «Incasso:», il conto ${biglietti} * ${prezzo}, il testo «€».`),
              riga(QUOTA, `La seconda riga divide per 2 l'incasso meno le spese: (${biglietti} * ${prezzo} - ${spese}) / 2, con le parentesi intorno a tutto quello che viene prima della divisione. Il risultato giusto è ${quota}.`),
            ],
          },
          {
            nome: 'con gli altri pulsanti',
            passi: [
              clicScaletta,
              continuaSet,
              clicCachet,
              riga(QUOTA, 'La quota la scrive la funzione collegata a btnCachet, con il conto dentro.'),
              clicBrano,
              continuaDurata,
              clicPlay,
              continuaPlay,
            ],
          },
        ],
      },
    ],
    soluzioni: [
      `${PLAY}

${FERMA}

${COLLEGA_PLAY}
${COLLEGA_STOP}`,
      `${PLAY}

${FERMA}

${BRANO}

${COLLEGA_PLAY}
${COLLEGA_STOP}
${COLLEGA_BRANO}`,
      `${PLAY}

${FERMA}

${BRANO}

${CONTA_BATTUTE}

${COLLEGA_PLAY}
${COLLEGA_STOP}
${COLLEGA_BRANO}
${COLLEGA_BATTUTE}`,
      `${PLAY}

${FERMA}

${BRANO}

${CONTA_BATTUTE}

${SCALETTA}

${COLLEGA_PLAY}
${COLLEGA_STOP}
${COLLEGA_BRANO}
${COLLEGA_BATTUTE}
${COLLEGA_SCALETTA}`,
      `${PLAY}

${FERMA}

${BRANO}

${CONTA_BATTUTE}

${SCALETTA}

${CACHET}

${COLLEGA_PLAY}
${COLLEGA_STOP}
${COLLEGA_BRANO}
${COLLEGA_BATTUTE}
${COLLEGA_SCALETTA}
${COLLEGA_CACHET}`,
    ],
  };
}
