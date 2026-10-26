import { describe, expect, it } from 'vitest';
import { normalizzaColore } from './colori';
import { traduciErroreJs } from './erroriJs';
import { eseguiProvaServer, eseguiProveServer } from './esecutoreServer';
import { fattiJs } from './fatti';
import type { Prova, Sorgente } from './tipi';
import { valuta } from './valuta';

const PAGINA: Omit<Sorgente, 'js'> = {
  html: `<h1 id="titolo">Quiz</h1>
<button id="btnRispondi">Rispondi</button>
<p id="esito">Clicca il pulsante</p>
<p id="segreto">Nascosto</p>
<input id="casella" type="text">`,
  css: `p { color: #666; } #segreto { display: none; }`,
};

const QUIZ: Prova = {
  nome: 'rispondendo «8»',
  passi: [
    { fai: 'prompt', risposte: ['8'] },
    { fai: 'clic', su: '#btnRispondi' },
    { controlla: 'prompt', almeno: 1, descrizione: 'La pagina fa la domanda', hint: 'Manca il prompt' },
    { controlla: 'testo', di: '#esito', uguale: 'Giusto!', descrizione: 'Il paragrafo dice «Giusto!»', hint: 'Guarda il testo' },
    { controlla: 'stile', di: '#esito', proprieta: 'color', valore: 'green', descrizione: 'Il paragrafo è verde', hint: 'Guarda il colore' },
  ],
};

const SOLUZIONE = `function controlla() {
  let testo = prompt("Quanto fa 5 + 3?");
  let risposta = Number(testo);
  let esito = document.getElementById("esito");
  if (risposta === 8) {
    esito.innerHTML = "Giusto!";
    esito.style.color = "green";
  } else {
    esito.innerHTML = "Sbagliato!";
    esito.style.color = "red";
  }
}
document.getElementById("btnRispondi").addEventListener("click", controlla);`;

describe('il correttore in jsdom', () => {
  it('promuove la soluzione giusta', () => {
    const esito = eseguiProvaServer({ ...PAGINA, js: SOLUZIONE }, QUIZ);
    expect(esito.errori).toEqual([]);
    expect(esito.ok).toBe(true);
    expect(esito.controlli.map((c) => c.ok)).toEqual([true, true, true]);
  });

  it('accetta il colore in qualunque notazione', () => {
    const js = SOLUZIONE.replace('"green"', '"#008000"');
    expect(eseguiProvaServer({ ...PAGINA, js }, QUIZ).ok).toBe(true);
    const rgb = SOLUZIONE.replace('"green"', '"rgb(0,128,0)"');
    expect(eseguiProvaServer({ ...PAGINA, js: rgb }, QUIZ).ok).toBe(true);
  });

  it('vede lo stile del foglio CSS e la visibilità', () => {
    const prova: Prova = {
      passi: [
        { controlla: 'stile', di: '#esito', proprieta: 'color', valore: '#666666', descrizione: 'grigio', hint: 'h' },
        { controlla: 'visibile', di: '#segreto', visibile: false, descrizione: 'nascosto', hint: 'h' },
        { fai: 'clic', su: '#btnRispondi' },
        { controlla: 'visibile', di: '#segreto', visibile: true, descrizione: 'visibile', hint: 'h' },
      ],
    };
    const js = `function mostra() { document.getElementById("segreto").style.display = "block"; }
document.getElementById("btnRispondi").addEventListener("click", mostra);`;
    const esito = eseguiProvaServer({ ...PAGINA, js }, prova);
    expect(esito.controlli.map((c) => c.ok)).toEqual([true, true, true]);
  });

  it('boccia la risposta scritta a mano quando la prova nascosta cambia le risposte', () => {
    const furbo = `function controlla() {
  prompt("Quanto fa 5 + 3?");
  document.getElementById("esito").innerHTML = "Giusto!";
  document.getElementById("esito").style.color = "green";
}
document.getElementById("btnRispondi").addEventListener("click", controlla);`;
    const nascosta: Prova = {
      nome: 'rispondendo «3»',
      passi: [
        { fai: 'prompt', risposte: ['3'] },
        { fai: 'clic', su: '#btnRispondi' },
        { controlla: 'testo', di: '#esito', uguale: 'Sbagliato!', descrizione: 'dice Sbagliato!', hint: 'Deve controllare la risposta con if' },
      ],
    };
    const esiti = eseguiProveServer({ ...PAGINA, js: furbo }, [QUIZ, nascosta]);
    expect(esiti[0].ok).toBe(true);
    expect(esiti[1].ok).toBe(false);
    const v = valuta([QUIZ, nascosta], esiti);
    expect(v.promosso).toBe(false);
    expect(v.hint).toContain('rispondendo «3»');
    expect(v.hint).toContain('Il paragrafo «esito» dice «Giusto!», invece deve dire «Sbagliato!».');
  });

  it('traduce un id sbagliato in un hint comprensibile', () => {
    const js = SOLUZIONE.replace('"btnRispondi"', '"btnrispondi"');
    const esito = eseguiProvaServer({ ...PAGINA, js }, QUIZ);
    expect(esito.ok).toBe(false);
    const v = valuta([QUIZ], [esito]);
    expect(v.hint).toMatch(/^getElementById non trova nessun elemento con id «btnrispondi»: nella pagina gli id sono .*«btnRispondi»/);
  });

  it('traduce un errore di sintassi e un nome sbagliato', () => {
    const sintassi = eseguiProvaServer({ ...PAGINA, js: 'function controlla( {' }, QUIZ);
    expect(valuta([QUIZ], [sintassi]).hint).toMatch(/Errore di scrittura|simbolo|parentesi/);
    const nome = eseguiProvaServer({ ...PAGINA, js: 'document.getElementById("btnRispondi").addEventListener("click", controla);' }, QUIZ);
    expect(valuta([QUIZ], [nome]).hint).toMatch(/«controla» non esiste/);
  });

  it('ferma un ciclo infinito senza bloccare il server', () => {
    const esito = eseguiProvaServer({ ...PAGINA, js: 'while (true) {}' }, QUIZ, 300);
    expect(esito.tempoScaduto).toBe(true);
    expect(valuta([QUIZ], [esito]).hint).toMatch(/ciclo/);
  });

  it('ferma anche un ciclo infinito dentro il clic', () => {
    const js = `function controlla() { while (true) {} }
document.getElementById("btnRispondi").addEventListener("click", controlla);`;
    const esito = eseguiProvaServer({ ...PAGINA, js }, QUIZ, 300);
    expect(esito.tempoScaduto).toBe(true);
  });

  it('registra alert, console e caselle', () => {
    const prova: Prova = {
      passi: [
        { fai: 'scrivi', in: '#casella', valore: '12' },
        { fai: 'clic', su: '#btnRispondi' },
        { controlla: 'alert', uguale: 'Il doppio è 24', descrizione: 'alert', hint: 'h' },
        { controlla: 'alerts', quanti: 1, descrizione: 'un alert', hint: 'h' },
        { controlla: 'console', contiene: 'cliccato', descrizione: 'console', hint: 'h' },
      ],
    };
    const js = `function raddoppia() {
  console.log("cliccato");
  let n = Number(document.getElementById("casella").value);
  alert("Il doppio è " + n * 2);
}
document.getElementById("btnRispondi").addEventListener("click", raddoppia);`;
    const esito = eseguiProvaServer({ ...PAGINA, js }, prova);
    expect(esito.alerts).toEqual(['Il doppio è 24']);
    expect(esito.ok).toBe(true);
  });

  it('non si fa chiudere lo script dal codice dell’allievo', () => {
    const js = 'document.getElementById("esito").innerHTML = "</script><b>x</b>";';
    const prova: Prova = { passi: [{ controlla: 'html', di: '#esito', contiene: '<b>x</b>', descrizione: 'b', hint: 'h' }] };
    expect(eseguiProvaServer({ ...PAGINA, js }, prova).ok).toBe(true);
  });
});

describe('colori ed errori', () => {
  it('normalizza i colori', () => {
    expect(normalizzaColore('Red')).toBe('rgb(255, 0, 0)');
    expect(normalizzaColore('#f00')).toBe('rgb(255, 0, 0)');
    expect(normalizzaColore('rgb(255,0,0)')).toBe('rgb(255, 0, 0)');
    expect(normalizzaColore('rgba(255, 0, 0, 1)')).toBe('rgb(255, 0, 0)');
    expect(normalizzaColore('40px')).toBe('40px');
  });

  it('traduce gli errori più comuni', () => {
    expect(traduciErroreJs('Uncaught ReferenceError: salutta is not defined')).toContain('«salutta» non esiste');
    expect(traduciErroreJs("TypeError: Cannot read properties of null (reading 'addEventListener')")).toContain('getElementById non ha trovato');
    expect(traduciErroreJs('TypeError: saluta is not a function')).toContain('non è una funzione');
    expect(traduciErroreJs("SyntaxError: missing ) after argument list")).toContain('parentesi tonda');
  });
});

describe('i fatti sul codice', () => {
  it('conta funzioni, listener e il resto, ignorando le stringhe', () => {
    const f = fattiJs(`${SOLUZIONE}\n// function finta()\nlet s = "function ancora() addEventListener(";`);
    expect(f.funzioniConNome).toBe(1);
    expect(f.funzioniAnonime).toBe(0);
    expect(f.addEventListener).toBe(1);
    expect(f.prompt).toBe(1);
    expect(f.ifs).toBe(1);
    expect(f.numberConversioni).toBe(1);
    expect(fattiJs('btn.addEventListener("click", () => alert(1)); btn.onclick = function () {};').funzioniAnonime).toBe(2);
  });
});
