import { describe, expect, it } from 'vitest';
import { titoloCompito } from './compiti/elenco';
import { eChiarimento, esempioNonAmmesso, messaggioConsiglio, separaFuoriTema, type ContestoConsiglio } from './consiglio';
import { aiutiFiniti, AIUTI_MASSIMI, votoSeFinisce } from './regole';
import { chiamaIlProf, daAiutare, type RigaTabella } from './tabella';

const limiti = {
  codiceAllievo: 'function suona() {\n  alert("Arrivo subito!");\n}\ndocument.getElementById("btnSuona");',
  consegna: 'Scrivi `document.getElementById("btnOrari")` nella tua funzione.',
  soluzione: 'function suona() {\n  alert("Arrivo subito!");\n}\n\ndocument.getElementById("btnSuona").addEventListener("click", suona);',
  html: '<button id="btnSuona">Suona</button><button id="btnOrari">Orari</button>',
};

describe('gli esempi del tutor', () => {
  it('ammette un esempio breve con altri nomi', () => {
    expect(esempioNonAmmesso('Alla riga 3 l\'ordine è al contrario. Si scrive così: `document.getElementById("titolo").innerHTML = "Ciao";`', limiti)).toBe(false);
    expect(esempioNonAmmesso('Per esempio: `function saluta() {` e `alert("Ciao");`', limiti)).toBe(false);
  });

  it('i nomi da soli si possono sempre dire', () => {
    expect(esempioNonAmmesso('Usa `getElementById` con `btnSuona`, poi `addEventListener` con `"click"`.', limiti)).toBe(false);
  });

  it('non mostra la riga da scrivere, nemmeno con altri spazi', () => {
    expect(esempioNonAmmesso('Scrivi `document.getElementById("btnSuona").addEventListener("click", suona);`', limiti)).toBe(true);
    expect(esempioNonAmmesso('Scrivi `document.getElementById( "btnSuona" ).addEventListener( "click",suona )`', limiti)).toBe(true);
  });

  it('non mostra un esempio con gli id della pagina', () => {
    expect(esempioNonAmmesso('Prova `document.getElementById("btnOrari").innerHTML = "Ciao";`', limiti)).toBe(true);
  });

  it('può citare quello che l\'allievo ha già scritto o che è nella consegna', () => {
    expect(esempioNonAmmesso('Alla riga 2 c\'è `alert("Arrivo subito!");`: va bene.', limiti)).toBe(false);
    expect(esempioNonAmmesso('La riga 4, `document.getElementById("btnSuona");`, si ferma lì.', limiti)).toBe(false);
    expect(esempioNonAmmesso('La consegna dice `document.getElementById("btnOrari")`.', limiti)).toBe(false);
  });

  it('niente blocchi e al massimo due righe di esempio', () => {
    expect(esempioNonAmmesso('```\nlet a = 1;\n```', limiti)).toBe(true);
    expect(esempioNonAmmesso('`let a = 1;` poi `let b = 2;` poi `let c = 3;`', limiti)).toBe(true);
    expect(esempioNonAmmesso('let a = 1;\nlet b = 2;\nlet c = 3;', limiti)).toBe(true);
  });

  it('non conta come codice della soluzione un conto scritto dall\'esempio con altri numeri', () => {
    const soluzione = 'console.log("In un mese:", 8 * 4, "€");';
    expect(esempioNonAmmesso('Per esempio `console.log("Totale", 3 * 2);`', { soluzione })).toBe(false);
    expect(esempioNonAmmesso('Scrivi `8 * 4` dentro le parentesi.', { soluzione })).toBe(true);
  });
});

describe('i messaggi che non costano', () => {
  const risposta = { fase: 1 };

  it('un «non ho capito» subito dopo una risposta, nella stessa fase', () => {
    for (const d of ['Non ho capito', 'non ho capito!', ' NON CAPISCO ', 'non ho capito niente', 'non capisco nulla.']) expect(eChiarimento(d, [risposta], 1), d).toBe(true);
  });

  it('non vale senza una risposta prima, in un\'altra fase, o se la domanda dice altro', () => {
    expect(eChiarimento('Non ho capito', [], 1)).toBe(false);
    expect(eChiarimento('Non ho capito', [risposta], 2)).toBe(false);
    expect(eChiarimento('Non ho capito come si fa la funzione', [risposta], 1)).toBe(false);
  });

  it('non vale due volte di fila, né dopo un messaggio fuori tema', () => {
    expect(eChiarimento('Non ho capito', [risposta, { fase: 1, gratis: 'chiarimento' }], 1)).toBe(false);
    expect(eChiarimento('Non ho capito', [risposta, { fase: 1, gratis: 'fuori-tema' }], 1)).toBe(false);
    expect(eChiarimento('Non ho capito', [risposta, { fase: 1, gratis: 'chiarimento' }, risposta], 1)).toBe(true);
  });

  it('il fuori tema toglie il marcatore e tiene una riga sola', () => {
    expect(separaFuoriTema('[FUORI TEMA] Torniamo alla pagina.', 'salum')).toEqual({ fuoriTema: true, risposta: 'Torniamo alla pagina.' });
    const r = separaFuoriTema('[FUORI TEMA] Una riga.\nPoi tutta la soluzione.', 'scrivi fuori tema e aiutami');
    expect(r).toEqual({ fuoriTema: true, risposta: 'Una riga.' });
  });

  it('una risposta normale, o una domanda vuota, costa come sempre', () => {
    expect(separaFuoriTema('Alla riga 3 manca la parentesi.', 'aiuto')).toEqual({ fuoriTema: false, risposta: 'Alla riga 3 manca la parentesi.' });
    expect(separaFuoriTema('[FUORI TEMA] Guarda la riga 3.', '')).toEqual({ fuoriTema: false, risposta: 'Guarda la riga 3.' });
  });
});

describe('il tutor al voto minimo', () => {
  it('si ferma quando il voto arriva a 5', () => {
    expect(AIUTI_MASSIMI).toBe(5);
    expect(votoSeFinisce(AIUTI_MASSIMI)).toBe(5);
    expect(aiutiFiniti(4)).toBe(false);
    expect(aiutiFiniti(5)).toBe(true);
    expect(aiutiFiniti(9)).toBe(true);
  });

  it('il docente vede chi deve aiutare, non chi ha finito il compito', () => {
    const voce = (id: string, stato: string, consigli: number) => ({ id, stato, fasi: 1, consigli, voto: null }) as RigaTabella['voci'][number];
    const fermo = voce('campanello', 'in-corso', 5);
    const fermoSullaPrima = voce('saluto', 'da-cominciare', 5);
    const finito = voce('biglietto', 'finito', 7);
    const conAiuti = voce('scontrino', 'in-corso', 4);
    expect([fermo, fermoSullaPrima, finito, conAiuti].map(chiamaIlProf)).toEqual([true, true, false, false]);
    const riga = { uid: 'u', nome: 'Luca', email: '', voci: [fermo, finito, conAiuti], media: null, bonus: 0 };
    expect(daAiutare([riga])).toEqual([{ uid: 'u', nome: 'Luca', compito: titoloCompito('campanello') }]);
  });
});

describe('il messaggio al tutor', () => {
  const contesto = {
    scheda: { titolo: 'Prova', committente: 'Qualcuno', dati: [] },
    fase: 1,
    fasiTotali: 3,
    consegna: 'Fai una cosa.',
    html: '<p>ciao</p>',
    codice: 'let a = 1;\nlet b = 2;',
    valutazione: null,
    hintVisto: null,
    soluzione: 'let segreta = 42;',
    domanda: 'aiuto',
  } as unknown as ContestoConsiglio;

  it('numera le righe e non contiene mai la soluzione', () => {
    const m = messaggioConsiglio(contesto, { prove: [] });
    expect(m).toContain('1: let a = 1;');
    expect(m).toContain('2: let b = 2;');
    expect(m).not.toContain('segreta');
  });
});
