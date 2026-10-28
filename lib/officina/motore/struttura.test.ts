import { describe, expect, it } from 'vitest';
import { controlloStruttura, ricercheGetElementById } from './struttura';

const FASE = { elementiInAlto: true };

describe('i conti sul testo del codice', () => {
  it('trova le ricerche, dice se stanno dentro una funzione, salta commenti e stringhe', () => {
    const js = `// document.getElementById("commento")
let l = document.getElementById("lampada");
let testo = "getElementById('nella stringa') { ";
function f() {
  document.getElementById( 'stato' ).innerHTML = "}";
}`;
    expect(ricercheGetElementById(js)).toEqual([
      { id: 'lampada', dentro: false },
      { id: 'stato', dentro: true },
    ]);
  });

  it('dice quali id sono cercati più volte', () => {
    const js = 'let a = document.getElementById("lampada"); document.getElementById("lampada"); document.getElementById("btnSpegni"); document.getElementById("btnSpegni"); document.getElementById("btnSpegni");';
    expect(controlloStruttura(FASE, js)).toBe(
      'La pagina funziona, ma con getElementById cerchi «lampada» 2 volte e «btnSpegni» 3 volte: in questa fase ogni elemento si cerca una volta sola.',
    );
  });

  it('dice quali id sono cercati dentro una funzione', () => {
    const js = 'function entra() {\n  let esito = document.getElementById("esito");\n}\ndocument.getElementById("btnEntra").addEventListener("click", entra);';
    expect(controlloStruttura(FASE, js)).toBe(
      'La pagina funziona, ma cerchi «esito» con getElementById dentro una funzione: in questa fase gli elementi si cercano in alto, fuori dalle funzioni.',
    );
  });

  it('va bene con ogni id cercato una volta in alto, e non conta nelle fasi senza la regola', () => {
    expect(controlloStruttura(FASE, 'let a = document.getElementById("a");\nfunction f() { a.innerHTML = "x"; }')).toBeNull();
    expect(controlloStruttura({}, 'document.getElementById("a"); document.getElementById("a");')).toBeNull();
  });

  describe('il valore scritto una volta sola, nella const', () => {
    const NEGOZIO = { scrittoUnaVolta: { testo: 'Il Gelato di Nonna Rosa', cosa: 'il nome del negozio' } };

    it('ferma la costante dichiarata e poi riscritta a mano nel messaggio', () => {
      // Il codice consegnato davvero da un allievo, promosso prima di questo controllo.
      const js = `// 1. Scrivi la funzione
const nomeNegozio = "Benvenuto da Il Gelato di Nonna Rosa"
function suona() {
  let nome = prompt("il tuo nome?")
  alert("Benvenuto da Il Gelato di Nonna Rosa, " + nome + "!")
}`;
      expect(controlloStruttura(NEGOZIO, js)).toBe(
        'La pagina funziona, ma nel codice il nome del negozio «Il Gelato di Nonna Rosa» è scritto 2 volte: va scritto una volta sola, nella const, e nei messaggi si usa la costante.',
      );
    });

    it('ferma la costante con dentro tutta la frase invece del solo nome', () => {
      // Anche questo è un codice consegnato davvero: la costante è usata, ma contiene il saluto intero.
      const js = `const negozio = "Benvenuto da Il Gelato di Nonna Rosa, "
function Suona() {
  let nome = prompt("Come ti chiami?")
  alert(negozio + nome + "!")
}`;
      expect(controlloStruttura(NEGOZIO, js)).toBe(
        'La pagina funziona, ma nel codice non c\'è il nome del negozio, «Il Gelato di Nonna Rosa», da solo fra virgolette: la costante contiene solo il nome, e il resto del messaggio si scrive fuori, unito con il +.',
      );
    });

    it('va bene con la costante usata, con qualunque nome e anche con il valore citato in un commento', () => {
      const js = `// il negozio è Il Gelato di Nonna Rosa
const negozio = "Il Gelato di Nonna Rosa";
function suona() {
  let messaggio = "Benvenuto da " + negozio + ", " + prompt("Nome?") + "!";
  alert(messaggio);
}`;
      expect(controlloStruttura(NEGOZIO, js)).toBeNull();
    });
  });
});
