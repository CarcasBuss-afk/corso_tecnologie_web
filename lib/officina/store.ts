/* Modello dati dell'Officina web su Firestore (collezioni con prefisso `webOfficina`, nello
 * stesso progetto Firebase del Giro e dell'escape room). Scritto solo dal server; il docente
 * lo legge in tempo reale con il claim `teacher`, gli allievi passano dalle API.
 *
 *   webOfficinaClassi/{classeId}                 una classe (serve solo a raggruppare gli allievi)
 *   webOfficinaClassi/{classeId}/allievi/{uid}   l'allievo nella classe, con i suoi lavori (chiave = compito)
 *   webOfficinaAllievi/{uid}                     a quali classi appartiene (per ritrovarle senza query di gruppo)
 */
import 'server-only';
import type { Timestamp } from 'firebase-admin/firestore';
import { getDb } from '@/lib/firebaseAdmin';
import { ALLIEVI, APPARTENENZE, CLASSI } from './nomiCollezioni';

export type ClasseDoc = {
  nome: string;
  docenteUid: string;
  docenteEmail: string;
  createdAt: Timestamp;
  chiusa: boolean;
};

/** Una domanda al tutor e la sua risposta. */
export type ScambioDoc = {
  /** Fase (0-based) in cui è stata fatta. */
  fase: number;
  domanda: string;
  risposta: string;
  at: Timestamp;
};

/** Il lavoro di un allievo su un compito (chiave = id del compito). */
export type LavoroDoc = {
  /** Fasi completate. */
  fasi: number;
  fasiAt: Record<string, Timestamp>;
  /** Il codice promosso a ogni fase (chiave = indice). */
  codice: Record<string, string>;
  /** L'ultimo codice consegnato, giusto o no: alla riapertura l'editor riparte da qui. */
  bozza: string;
  errori: number;
  erroriFase: Record<string, number>;
  consigli: number;
  tutor: ScambioDoc[];
  finitoAt: Timestamp | null;
  ultimoAt: Timestamp | null;
};

export type AllievoDoc = {
  uid: string;
  nome: string;
  email: string;
  entratoAt: Timestamp;
  lavori: Record<string, LavoroDoc>;
};

export type AppartenenzaDoc = {
  nome: string;
  email: string;
  classi: string[];
};

export { ALLIEVI, APPARTENENZE, CLASSI };

export const classiRef = () => getDb().collection(CLASSI);
export const allieviRef = (classeId: string) => classiRef().doc(classeId).collection(ALLIEVI);
export const appartenenzeRef = () => getDb().collection(APPARTENENZE);

export function lavoroVuoto(): LavoroDoc {
  return {
    fasi: 0,
    fasiAt: {},
    codice: {},
    bozza: '',
    errori: 0,
    erroriFase: {},
    consigli: 0,
    tutor: [],
    finitoAt: null,
    ultimoAt: null,
  };
}
