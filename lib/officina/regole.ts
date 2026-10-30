/* L'Officina web: le regole pure del percorso (OFFICINA.md). Come nell'Officina del Giro:
 * non è una gara, ogni allievo percorre da solo lo stesso elenco di compiti, uno sbloccato
 * alla volta; il voto c'è solo a compito finito: 10 meno un punto a domanda al tutor, mai
 * sotto 5. Modulo puro: niente Firestore, niente Next. */
import { eFacoltativo, ELENCO_COMPITI, fasiDi, type CompitoId } from './compiti/elenco';

/** Il voto parte da qui e scende di uno a domanda al tutor. */
export const VOTO_MASSIMO = 10;
/** Sotto questo non si scende: le domande servono a imparare, non a bocciare. */
export const VOTO_MINIMO_FINITO = 5;

export const votoSeFinisce = (domande: number) => Math.max(VOTO_MINIMO_FINITO, VOTO_MASSIMO - domande);

/** I compiti del percorso, nell'ordine in cui si sbloccano. */
export const PERCORSO: CompitoId[] = ELENCO_COMPITI;

/**
 * Il seme del compito per un allievo: dal suo uid e dal compito, così i parametri sono
 * suoi e restano gli stessi a ogni apertura. FNV-1a a 32 bit.
 */
export function semeDa(testo: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < testo.length; i++) {
    h ^= testo.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0 || 1;
}

export type ProgressoCompito = { fasi: number; consigli: number };

export type StatoCompito = 'finito' | 'in-corso' | 'da-cominciare' | 'bloccato';

export type VoceCompito = {
  id: CompitoId;
  stato: StatoCompito;
  fasi: number;
  consigli: number;
  /** Solo a compito finito. */
  voto: number | null;
};

/**
 * Il percorso di un allievo: il primo compito è sempre aperto; ogni altro si sblocca quando è
 * finito l'ultimo compito obbligatorio prima di lui. La sfida è facoltativa: si apre insieme al
 * compito dopo e non blocca niente. Un compito già aperto non si blocca più, e nemmeno quelli
 * prima di lui: se nel percorso entra un compito nuovo prima (i facili delle lezioni), chi era
 * già più avanti non perde niente e non deve tornare indietro.
 */
export function percorsoDi(lavori: Record<string, ProgressoCompito | undefined>): VoceCompito[] {
  const ultimoAperto = PERCORSO.findLastIndex((id) => lavori[id] !== undefined);
  let obbligatorioFinito = true;
  return PERCORSO.map((id, i) => {
    const l = lavori[id] ?? { fasi: 0, consigli: 0 };
    const finito = l.fasi >= fasiDi(id);
    const aperto = obbligatorioFinito || i <= ultimoAperto;
    const stato: StatoCompito = finito ? 'finito' : !aperto ? 'bloccato' : l.fasi > 0 ? 'in-corso' : 'da-cominciare';
    if (!eFacoltativo(id)) obbligatorioFinito = finito;
    return { id, stato, fasi: l.fasi, consigli: l.consigli, voto: finito ? votoSeFinisce(l.consigli) : null };
  });
}

/** La media dei voti dei compiti obbligatori finiti, con un decimale; null se nessuno è finito. Le sfide qui non contano: danno il bonus. */
export function mediaVoti(voci: Array<{ id?: CompitoId; voto: number | null }>): number | null {
  const voti = voci
    .filter((v) => !v.id || !eFacoltativo(v.id))
    .map((v) => v.voto)
    .filter((v): v is number => v !== null);
  if (voti.length === 0) return null;
  return Math.round((voti.reduce((s, v) => s + v, 0) / voti.length) * 10) / 10;
}

/** Quanto vale ogni sfida finita: si somma alla media, con qualunque voto. */
export const BONUS_SFIDA = 0.5;

/** Il bonus delle sfide finite. */
export function bonusSfide(voci: Array<{ id?: CompitoId; voto: number | null }>): number {
  return voci.filter((v) => v.id && eFacoltativo(v.id) && v.voto !== null).length * BONUS_SFIDA;
}

/** La media che conta: quella dei compiti obbligatori più il bonus delle sfide, mai sopra 10; null finché non c'è un obbligatorio finito. */
export function mediaConBonus(voci: Array<{ id?: CompitoId; voto: number | null }>): number | null {
  const media = mediaVoti(voci);
  if (media === null) return null;
  return Math.min(VOTO_MASSIMO, Math.round((media + bonusSfide(voci)) * 10) / 10);
}

/** Dominio ammesso per gli account degli allievi (OFFICINA_DOMINIO, anche più d'uno separati da virgola). */
export function dominiAmmessi(valore: string | undefined): string[] {
  return (valore ?? '')
    .split(',')
    .map((d) => d.trim().toLowerCase().replace(/^@/, ''))
    .filter(Boolean);
}

/** Vero se l'email può entrare: nessun dominio configurato = tutti. */
export function emailAmmessa(email: string, domini: string[]): boolean {
  if (domini.length === 0) return true;
  const dominio = email.toLowerCase().split('@')[1] ?? '';
  return domini.includes(dominio);
}
