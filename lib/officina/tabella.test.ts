import { describe, expect, it } from 'vitest';
import { fasiDi, TITOLI } from './compiti/elenco';
import { PERCORSO } from './regole';
import { OBBLIGATORI_TOTALI, riepilogoClasse, SFIDE_TOTALI, type AllievoVisto, type LavoroVisto } from './tabella';

const lavoro = (fasi: number, extra: Partial<LavoroVisto> = {}): LavoroVisto => ({
  fasi,
  consigli: 0,
  errori: 0,
  finitoAt: null,
  ultimoAt: null,
  codice: {},
  bozza: '',
  tutor: [],
  giudice: [],
  ripasso: null,
  ...extra,
});

const allievo = (nome: string, lavori: Record<string, LavoroVisto>): AllievoVisto => ({ uid: nome.toLowerCase(), nome, email: `${nome.toLowerCase()}@scuola.it`, lavori });

describe('riepilogo della classe', () => {
  it('i totali contano facili e normali da una parte, le sfide dall\'altra', () => {
    expect(OBBLIGATORI_TOTALI + SFIDE_TOTALI).toBe(PERCORSO.length);
    expect(SFIDE_TOTALI).toBe(PERCORSO.filter((id) => TITOLI[id].livello === 'sfida').length);
  });

  it('conta compiti finiti, sfide, ripassi, compiti in corso e domande', () => {
    const [facile, normale, sfida, facile2] = PERCORSO;
    const r = riepilogoClasse([
      allievo('Zeno', {}),
      allievo('Anna', {
        [facile]: lavoro(fasiDi(facile), { consigli: 1, ultimoAt: new Date('2026-11-10T09:00:00'), ripasso: { giro: 1, fasi: 1, errori: 0, consigli: 2, ultimoAt: new Date('2026-11-12T10:00:00') } }),
        [normale]: lavoro(fasiDi(normale), { consigli: 2, ultimoAt: new Date('2026-11-11T09:00:00') }),
        [sfida]: lavoro(fasiDi(sfida)),
        [facile2]: lavoro(1, { consigli: 3 }),
      }),
    ]);

    expect(r.map((x) => x.nome)).toEqual(['Anna', 'Zeno']);
    const anna = r[0];
    expect(anna.obbligatoriFiniti).toBe(2);
    expect(anna.sfideFinite).toBe(1);
    expect(anna.rifatti).toBe(1);
    expect(anna.inCorso.map((c) => c.id)).toEqual([facile2]);
    expect(anna.domande).toBe(6);
    expect(anna.ultimaConsegna).toEqual(new Date('2026-11-12T10:00:00'));
    expect(anna.media).not.toBeNull();

    const zeno = r[1];
    expect([zeno.obbligatoriFiniti, zeno.sfideFinite, zeno.rifatti, zeno.domande]).toEqual([0, 0, 0, 0]);
    expect(zeno.inCorso).toEqual([]);
    expect(zeno.ultimaConsegna).toBeNull();
    expect(zeno.media).toBeNull();
  });

  it('un compito aperto senza fasi superate non è in corso', () => {
    const [facile] = PERCORSO;
    expect(riepilogoClasse([allievo('Bea', { [facile]: lavoro(0, { consigli: 1 }) })])[0].inCorso).toEqual([]);
  });
});
