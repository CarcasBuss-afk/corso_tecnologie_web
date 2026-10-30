'use client';
/* Chiamate alle API dell'Officina dal browser (allievo e docente), con l'ID token Firebase
 * dell'account Google, e le forme delle risposte. */
import { getClientAuth } from '@/lib/firebaseClient';
import type { Livello } from './compiti/elenco';
import type { SchedaCompito } from './compiti/tipi';
import type { EsitoProva, Pannello, Prova, Sorgente } from './motore/tipi';
import type { StatoCompito } from './regole';

export class ErroreOfficina extends Error {
  constructor(
    readonly code: string,
    message: string,
  ) {
    super(message);
  }
}

async function chiama<T>(url: string, body: Record<string, unknown>, timeoutMs: number): Promise<T> {
  const utente = getClientAuth().currentUser;
  if (!utente) throw new ErroreOfficina('UNAUTHENTICATED', 'Accedi con il tuo account Google');
  const token = await utente.getIdToken();
  const annulla = new AbortController();
  const scadenza = setTimeout(() => annulla.abort(), timeoutMs);
  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(body),
      signal: annulla.signal,
    });
    const corpo = (await r.json().catch(() => null)) as { error?: string; message?: string } | null;
    if (!r.ok) throw new ErroreOfficina(corpo?.error ?? 'INTERNAL', corpo?.message ?? 'Errore del server: chiama il prof');
    return corpo as T;
  } catch (e) {
    if (e instanceof ErroreOfficina) throw e;
    throw new ErroreOfficina('RETE', 'Connessione al server persa: riprova fra poco');
  } finally {
    clearTimeout(scadenza);
  }
}

export const chiamaOfficina = <T>(azione: string, dati: Record<string, unknown> = {}) => chiama<T>('/api/officina', { azione, ...dati }, 60_000);

export const chiamaDocente = <T = Record<string, unknown>>(azione: string, dati: Record<string, unknown> = {}) =>
  chiama<T>('/api/officina/docente', { azione, ...dati }, 30_000);

export const chiamaAccessoDocente = () => chiama<{ claimAggiornato: boolean; email: string }>('/api/officina/docente/accesso', {}, 30_000);

export const messaggioErrore = (e: unknown) => (e instanceof Error ? e.message : 'Qualcosa è andato storto: chiama il prof');

/* ------------------------------------------------------------- forma delle risposte */

export type Io = { uid: string; email: string; nome: string; classi: Array<{ id: string; nome: string; chiusa: boolean }> };

export type CompitoInElenco = {
  id: string;
  titolo: string;
  lezione: string;
  stato: StatoCompito;
  fasi: number;
  fasiTotali: number;
  consigli: number;
  voto: number | null;
  votoSeFinisci: number;
  sezione: string;
  esame: boolean;
  livello: Livello;
};

export type SezionePercorso = { id: string; titolo: string; compiti: string[] };

export type Percorso = { classe: { id: string; nome: string; chiusa: boolean }; compiti: CompitoInElenco[]; sezioni: SezionePercorso[]; media: number | null; bonus: number };

export type Scambio = { fase: number; domanda: string; risposta: string };

/** La fase come la vede l'allievo: la consegna e la sola prova mostrata. */
export type FasePubblica = { indice: number; consegna: string; prova: Prova; regola: string | null };

export type CompitoAperto = {
  id: string;
  classeChiusa: boolean;
  esame: boolean;
  fasi: number;
  fasiTotali: number;
  consigli: number;
  domandeRimaste: number;
  finito: boolean;
  voto: number | null;
  votoSeFinisci: number;
  scheda: SchedaCompito;
  pagina: Omit<Sorgente, 'js'>;
  pannelli: Pannello[];
  fase: FasePubblica | null;
  /** Il JavaScript da cui riparte l'editor. */
  codice: string;
  codicePromosso: Record<string, string>;
  tutor: Scambio[];
  errori: number;
};

export type RispostaConsegna =
  | { promosso: true; fasi: number; finito: boolean; voto: number | null; votoSeFinisci: number; fase: FasePubblica | null }
  | { promosso: false; hint: string | null; esitoMostrata: EsitoProva | null; errori: number };

export type RispostaTutor = { risposta: string; consigli: number; domandeRimaste: number; votoSeFinisci: number; fase: number };
