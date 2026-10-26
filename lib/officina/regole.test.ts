import { describe, expect, it } from 'vitest';
import { PERCORSO } from './regole';
import { dominiAmmessi, emailAmmessa, mediaVoti, percorsoDi, semeDa, votoSeFinisce } from './regole';

describe('il percorso', () => {
  it('sblocca un compito alla volta', () => {
    const voci = percorsoDi({});
    expect(voci[0].stato).toBe('da-cominciare');
    expect(voci.slice(1).every((v) => v.stato === 'bloccato')).toBe(true);
    const dopo = percorsoDi({ [PERCORSO[0]]: { fasi: 5, consigli: 2 } });
    expect(dopo[0]).toMatchObject({ stato: 'finito', voto: 8 });
    expect(dopo[1].stato).toBe('da-cominciare');
    expect(percorsoDi({ [PERCORSO[0]]: { fasi: 2, consigli: 0 } })[0].stato).toBe('in-corso');
  });

  it('un compito già aperto non si blocca, anche se prima ne arriva uno nuovo', () => {
    // Chi lavorava al secondo compito prima che il primo esistesse: il secondo resta aperto, il terzo no.
    const voci = percorsoDi({ [PERCORSO[1]]: { fasi: 2, consigli: 0 } });
    expect(voci[0].stato).toBe('da-cominciare');
    expect(voci[1].stato).toBe('in-corso');
    expect(voci[2].stato).toBe('bloccato');
  });

  it('il voto non scende sotto 5 e la media ha un decimale', () => {
    expect(votoSeFinisce(0)).toBe(10);
    expect(votoSeFinisce(7)).toBe(5);
    expect(mediaVoti([{ voto: 10 }, { voto: 7 }, { voto: null }])).toBe(8.5);
    expect(mediaVoti([{ voto: null }])).toBeNull();
  });

  it('il seme è stabile e diverso fra allievi', () => {
    expect(semeDa('a|campanello')).toBe(semeDa('a|campanello'));
    expect(semeDa('a|campanello')).not.toBe(semeDa('b|campanello'));
  });

  it('ammette solo il dominio della scuola, se configurato', () => {
    const d = dominiAmmessi(' @Scuola.it, altra.edu ');
    expect(d).toEqual(['scuola.it', 'altra.edu']);
    expect(emailAmmessa('luca@scuola.it', d)).toBe(true);
    expect(emailAmmessa('luca@gmail.com', d)).toBe(false);
    expect(emailAmmessa('luca@gmail.com', [])).toBe(true);
  });
});
