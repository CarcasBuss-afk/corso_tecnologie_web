import { describe, expect, it } from 'vitest';
import { eseguiProveServer } from '../motore/esecutoreServer';
import { fattiJs } from '../motore/fatti';
import { controlloStruttura } from '../motore/struttura';
import { eControllo } from '../motore/tipi';
import { valuta } from '../motore/valuta';
import { COMPITI_PER_LEZIONE, eCompito, ESAMI, fasiDi, TITOLI } from './elenco';
import { semeDelGiro } from '../regole';
import { ELENCO_COMPITI, generaCompito, semeRipasso, SEZIONI, type CompitoId } from './index';

const SEMI = [1, 7, 42, 1234, 98765, 2026];

/** La soluzione di una fase, provata su una fase (anche diversa). */
function prova(id: CompitoId, seme: number, faseSoluzione: number, faseProve: number) {
  const c = generaCompito(id, seme);
  const sorgente = { ...c.pagina, js: c.soluzioni[faseSoluzione] };
  const esiti = eseguiProveServer(sorgente, c.fasi[faseProve].prove);
  const v = valuta(c.fasi[faseProve].prove, esiti);
  // Come sul server (verifica.ts), senza il giudice: anche i conti sul testo del codice.
  const struttura = v.promosso ? controlloStruttura(c.fasi[faseProve], sorgente.js) : null;
  return struttura ? { ...v, promosso: false, hint: struttura } : v;
}

describe('il catalogo', () => {
  it("ha le fasi dichiarate nell'elenco, una soluzione per fase e almeno un controllo per prova", () => {
    for (const id of ELENCO_COMPITI) {
      const c = generaCompito(id, 1);
      expect(c.fasi, id).toHaveLength(fasiDi(id));
      expect(c.soluzioni, id).toHaveLength(fasiDi(id));
      expect(c.fasi[0].codiceIniziale, id).toBeTruthy();
      for (const f of c.fasi) {
        expect(f.regola, `${id}: regola`).toBeTruthy();
        expect(f.prove.length, `${id}: prove`).toBeGreaterThan(0);
        for (const p of f.prove) expect(p.passi.some(eControllo), `${id}: controlli`).toBe(true);
      }
    }
    expect(SEZIONI.flatMap((s) => s.compiti)).toEqual(ELENCO_COMPITI);
  });

  it("l'elenco per il browser combacia con i generatori", () => {
    for (const id of ELENCO_COMPITI) {
      const scheda = generaCompito(id, 7).scheda;
      expect(scheda.id).toBe(id);
      expect(TITOLI[id].titolo, id).toBe(scheda.titolo);
      expect(TITOLI[id].lezione, id).toBe(scheda.lezione);
      expect(ESAMI.has(id), id).toBe(Boolean(scheda.esame));
    }
    for (const id of Object.values(COMPITI_PER_LEZIONE).flat()) expect(eCompito(id)).toBe(true);
  });

  for (const id of ELENCO_COMPITI) {
    describe(id, () => {
      it('la soluzione di riferimento passa ogni fase, per semi diversi', () => {
        for (const seme of SEMI) {
          for (let f = 0; f < fasiDi(id); f++) {
            const v = prova(id, seme, f, f);
            expect(v.promosso, `${id} seme ${seme} fase ${f + 1}: ${v.hint}`).toBe(true);
          }
        }
      });

      it('la soluzione della fase prima non basta per la fase dopo', () => {
        for (const seme of SEMI.slice(0, 2)) {
          for (let f = 1; f < fasiDi(id); f++) {
            const v = prova(id, seme, f - 1, f);
            expect(v.promosso, `${id} seme ${seme}: la soluzione ${f} passa la fase ${f + 1}`).toBe(false);
            expect(v.hint, `${id} fase ${f + 1}`).toBeTruthy();
          }
        }
      });

      it('l\'editor vuoto non passa e produce un hint', () => {
        const c = generaCompito(id, 42);
        const esiti = eseguiProveServer({ ...c.pagina, js: c.fasi[0].codiceIniziale ?? '' }, c.fasi[0].prove);
        const v = valuta(c.fasi[0].prove, esiti);
        expect(v.promosso).toBe(false);
        expect(v.hint).toBeTruthy();
      });

      it('le soluzioni rispettano le regole del corso', () => {
        const c = generaCompito(id, 42);
        // Lo scontrino (Lezione 1) non ha pulsanti: niente funzioni da collegare.
        if (!c.pagina.html.includes('<button')) return;
        for (const s of c.soluzioni) {
          const f = fattiJs(s);
          expect(f.funzioniAnonime).toBe(0);
          expect(f.onclick).toBe(0);
          expect(f.funzioniConNome).toBeGreaterThan(0);
          // Dalla Lezione 9 ci sono anche le funzioni di aiuto con return, che non si collegano.
          if (/\breturn\b/.test(s)) expect(f.addEventListener).toBeLessThanOrEqual(f.funzioniConNome);
          else expect(f.addEventListener).toBe(f.funzioniConNome);
        }
      });
    });
  }

  describe('citofono, fase 4: il console.log sta nella funzione giusta', () => {
    const c = generaCompito('citofono', 1);
    const prove = c.fasi[3].prove;
    const corretta = c.soluzioni[3];
    const riga = corretta.match(/console\.log\(.*\);/)?.[0] ?? '';
    const esito = (js: string) => valuta(prove, eseguiProveServer({ ...c.pagina, js }, prove));

    it('nella funzione della Portineria non passa già con «Luca»', () => {
      const sbagliata = corretta
        .replace(`  ${riga}\n`, '')
        .replace('function orariPortineria() {\n', `function orariPortineria() {\n  ${riga.replace('" + nome', ' Luca"')}\n`);
      const v = esito(sbagliata);
      expect(v.promosso).toBe(false);
      expect(v.prove[0].ok).toBe(false);
      expect(v.hint).toContain('Interno 1');
      expect(v.hint).toContain('nella console non compare niente');
    });

    it('con il nome scritto a mano spiega da dove viene «Omar»', () => {
      const v = esito(corretta.replace(riga, riga.replace('" + nome', ' Luca"')));
      expect(v.promosso).toBe(false);
      expect(v.prove[0].ok).toBe(true);
      expect(v.hint).toContain('se a «Chi è?» si risponde «Omar»');
    });
  });

  it('due allievi hanno parametri diversi, lo stesso allievo sempre gli stessi', () => {
    const a = generaCompito('pizzeria', 1).scheda.dati.join();
    const b = generaCompito('pizzeria', 2).scheda.dati.join();
    const c = generaCompito('pizzeria', 3).scheda.dati.join();
    expect(generaCompito('pizzeria', 1).scheda.dati.join()).toBe(a);
    expect(new Set([a, b, c]).size).toBeGreaterThan(1);
  });

  it('rifatto per esercizio, il compito ha dati diversi dalla prima volta e dal ripasso prima', () => {
    for (const id of ELENCO_COMPITI) {
      for (let u = 0; u < 40; u++) {
        const uid = `allievo${u}`;
        const scheda = (seme: number) => JSON.stringify(generaCompito(id, seme).scheda);
        const primo = semeDelGiro(uid, id, 0);
        const uno = semeRipasso(uid, id, 1, [primo]);
        const due = semeRipasso(uid, id, 2, [primo, uno]);
        expect(scheda(uno), `${id} ${uid}: il ripasso 1 è uguale alla prima volta`).not.toBe(scheda(primo));
        expect(scheda(due), `${id} ${uid}: il ripasso 2 è uguale a un giro prima`).not.toBe(scheda(primo));
        expect(scheda(due), `${id} ${uid}: il ripasso 2 è uguale al ripasso 1`).not.toBe(scheda(uno));
        // Sempre lo stesso seme per lo stesso giro: la pagina riaperta non cambia.
        expect(semeRipasso(uid, id, 1, [primo])).toBe(uno);
      }
    }
  });
});
