import { describe, expect, it } from 'vitest';
import { generaCompito } from '../compiti/index';
import { eseguiProveServer } from './esecutoreServer';
import { nomeColore } from './messaggi';
import { valuta } from './valuta';

/* I messaggi della consegna sul campanello, fase 1: una frase sola, l'errore fatto. */
const c = generaCompito('campanello', 1);
const fase1 = c.fasi[0].prove;
const hint = (js: string) => valuta(fase1, eseguiProveServer({ ...c.pagina, js }, fase1)).hint;
const collega = 'document.getElementById("btnSuona").addEventListener("click", suona);';

describe('i messaggi costruiti da quello che fa la pagina', () => {
  it('pulsante non collegato', () => {
    expect(hint('function suona() {\n  alert("Arrivo subito!");\n}')).toBe('Il pulsante «Suona il campanello» non è collegato a nessuna funzione: cliccandolo non succede niente.');
  });

  it('collegato a un evento che non esiste', () => {
    expect(hint('function suona() { alert("Arrivo subito!"); }\ndocument.getElementById("btnSuona").addEventListener("clik", suona);')).toMatch(/ascolta l'evento «clik», non il clic/);
  });

  it('collegato, ma la funzione non fa alert', () => {
    expect(hint(`function suona() {}\n${collega}`)).toBe('Clic su «Suona il campanello»: la funzione parte, ma non compare nessun alert.');
  });

  it('testo quasi giusto: punteggiatura e maiuscole', () => {
    expect(hint(`function suona() { alert("Arrivo subito"); }\n${collega}`)).toBe('Controlla la punteggiatura: compare l\'alert «Arrivo subito», invece deve dire «Arrivo subito!».');
    expect(hint(`function suona() { alert("arrivo subito!"); }\n${collega}`)).toMatch(/^Attento alle maiuscole e minuscole/);
  });

  it('testo diverso e alert di troppo', () => {
    expect(hint(`function suona() { alert("Ciao"); }\n${collega}`)).toBe('Compare l\'alert «Ciao», invece deve dire «Arrivo subito!».');
    expect(hint(`function suona() { alert("Arrivo subito!"); alert("Arrivo subito!"); }\n${collega}`)).toBe('Compaiono 2 alert, invece ne deve comparire uno solo.');
  });

  it('id sbagliato o con il #', () => {
    expect(hint('function suona() { alert("Arrivo subito!"); }\ndocument.getElementById("btnsuona").addEventListener("click", suona);')).toMatch(/^getElementById non trova nessun elemento con id «btnsuona»: nella pagina gli id sono «btnSuona» e «btnOrari»/);
    expect(hint('function suona() { alert("Arrivo subito!"); }\ndocument.getElementById("#btnSuona").addEventListener("click", suona);')).toMatch(/^getElementById cerca «#btnSuona», ma l'id nella pagina è «btnSuona», senza il #/);
  });

  it('una variabile senza let è un errore (modalità rigorosa), anche se nel browser normale funzionerebbe', () => {
    const fase2 = c.fasi[1].prove;
    const js = `function suona() {\n  nome = prompt("Come ti chiami?");\n  alert("Arrivo subito, " + nome + "!");\n}\n${collega}`;
    const v = valuta(fase2, eseguiProveServer({ ...c.pagina, js }, fase2));
    expect(v.promosso).toBe(false);
    expect(v.hint).toMatch(/^«nome» non esiste/);
    expect(valuta(fase2, eseguiProveServer({ ...c.pagina, js: js.replace('  nome =', '  let nome =') }, fase2)).promosso).toBe(true);
  });

  it('la soluzione passa', () => {
    expect(hint(c.soluzioni[0])).toBeNull();
  });

  it('i colori con il loro nome', () => {
    expect(nomeColore('rgb(255, 0, 0)')).toBe('red');
    expect(nomeColore('#123456')).toBe('#123456');
    expect(nomeColore('rgba(0, 0, 0, 0)')).toBe('trasparente');
  });

  it('lo stile dice il colore a parole', () => {
    const l = generaCompito('lampada', 1);
    const f = l.fasi.findIndex((x) => x.prove.some((p) => p.passi.some((s) => 'controlla' in s && s.controlla === 'stile')));
    const js = l.soluzioni[f].replace(/"(yellow|gold)"/g, '"blue"');
    const h = valuta(l.fasi[f].prove, eseguiProveServer({ ...l.pagina, js }, l.fasi[f].prove)).hint;
    expect(h).toMatch(/Lo sfondo .*«lampada» è «blue», invece deve essere un giallo\./);
  });
});
