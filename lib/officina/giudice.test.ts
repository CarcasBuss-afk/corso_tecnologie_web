import { describe, expect, it } from 'vitest';
import { hintGiudice, interpretaVerdetto } from './giudice';

describe('il verdetto del giudice', () => {
  it('legge il verdetto in fondo, dopo gli appunti', () => {
    expect(interpretaVerdetto('Riga 1: va bene.\nRiga 2: il conto è sui dati.\nVERDETTO: OK')).toEqual({ genuino: true });
    expect(interpretaVerdetto('Riga 1: va bene.\nVERDETTO: NO: il pulsante usa una funzione freccia')).toEqual({ genuino: false, motivo: 'il pulsante usa una funzione freccia' });
  });

  it('un «no» negli appunti non conta: vale solo il verdetto', () => {
    expect(interpretaVerdetto('NO, aspetta: il 2 è calcolato.\nOK anche il resto.\nVERDETTO: OK')).toEqual({ genuino: true });
  });

  it('se il verdetto è scritto due volte, vale l\'ultimo', () => {
    expect(interpretaVerdetto('VERDETTO: NO: il 2 è a mano\nCorreggo: è calcolato.\nVERDETTO: OK')).toEqual({ genuino: true });
  });

  it('accetta il grassetto e le minuscole', () => {
    expect(interpretaVerdetto('Appunti.\n**VERDETTO: OK**')).toEqual({ genuino: true });
    expect(interpretaVerdetto('Appunti.\n**VERDETTO:** **NO**: manca il conto')).toEqual({ genuino: false, motivo: 'manca il conto' });
    expect(interpretaVerdetto('Appunti.\nverdetto: ok')).toEqual({ genuino: true });
  });

  it('nel motivo i segni dei conti restano', () => {
    const v = interpretaVerdetto('VERDETTO: NO: la regola chiede (144 - 40) / (8 - 6), tu scrivi 104 * 1');
    expect(v).toEqual({ genuino: false, motivo: 'la regola chiede (144 - 40) / (8 - 6), tu scrivi 104 * 1' });
  });

  it('una risposta senza verdetto, tagliata o vuota, non si capisce', () => {
    expect(interpretaVerdetto('Riga 1: va bene.\nRiga 2: il conto')).toBeNull();
    expect(interpretaVerdetto('')).toBeNull();
    expect(interpretaVerdetto('OK')).toBeNull();
  });

  it('il messaggio per l\'allievo tiene i conti e non lascia passare il codice', () => {
    expect(hintGiudice('la regola chiede (144 - 40) / (8 - 6)')).toContain('(144 - 40) / (8 - 6)');
    expect(hintGiudice('function prova() {')).toContain('non segue la regola');
  });
});
