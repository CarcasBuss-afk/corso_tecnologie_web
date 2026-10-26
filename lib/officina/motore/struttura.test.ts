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
});
