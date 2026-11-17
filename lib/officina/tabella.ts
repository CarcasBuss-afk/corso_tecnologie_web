/* La tabella della classe per la dashboard: allievi × compiti del percorso, con fasi, domande
 * al tutor, voto e media; e il CSV per il registro. Funzioni pure, girano nel browser del
 * docente sui dati che arrivano da Firestore in tempo reale. */
import { eFacoltativo, SEZIONI, titoloCompito, type CompitoId } from './compiti/elenco';
import { aiutiFiniti, bonusSfide, mediaConBonus, PERCORSO, percorsoDi, type VoceCompito } from './regole';

export type LavoroVisto = {
  fasi: number;
  consigli: number;
  errori: number;
  finitoAt: Date | null;
  ultimoAt: Date | null;
  codice: Record<string, string>;
  bozza: string;
  tutor: Array<{ fase: number; domanda: string; risposta: string; at: Date | null }>;
  /** I giudizi sul codice alle consegne con la pagina giusta (fase da 1). */
  giudice: Array<{ fase: number; esito: string; motivo: string; at: Date | null }>;
  /** L'ultimo giro in cui l'allievo ha rifatto il compito per esercizio (senza voto); null se non l'ha mai rifatto. */
  ripasso: { giro: number; fasi: number; errori: number; consigli: number; ultimoAt: Date | null } | null;
};

export type AllievoVisto = { uid: string; nome: string; email: string; lavori: Record<string, LavoroVisto> };

export type RigaTabella = { uid: string; nome: string; email: string; voci: VoceCompito[]; media: number | null; bonus: number };

/** I titoli dei compiti del percorso, nell'ordine; le sfide sono facoltative: fuori dalla media, danno il bonus. */
export const TITOLI_PERCORSO = PERCORSO.map((id) => ({ id, titolo: titoloCompito(id), sfida: eFacoltativo(id) }));

/** Le sezioni del percorso con quanti compiti hanno: per raggruppare le colonne della tabella. */
export const SEZIONI_PERCORSO = SEZIONI.filter((s) => s.compiti.length > 0).map((s) => ({ id: s.id, titolo: s.titolo, compiti: s.compiti.length }));

/** Una riga per allievo, in ordine alfabetico, con il percorso e la media. */
export function tabellaClasse(allievi: AllievoVisto[]): RigaTabella[] {
  return [...allievi]
    .sort((a, b) => a.nome.localeCompare(b.nome, 'it'))
    .map((a) => {
      const voci = percorsoDi(a.lavori ?? {});
      return { uid: a.uid, nome: a.nome, email: a.email, voci, media: mediaConBonus(voci), bonus: bonusSfide(voci) };
    });
}

/** I compiti obbligatori del percorso e le sfide: i totali del riepilogo. */
export const OBBLIGATORI_TOTALI = PERCORSO.filter((id) => !eFacoltativo(id)).length;
export const SFIDE_TOTALI = PERCORSO.length - OBBLIGATORI_TOTALI;

export type RigaRiepilogo = {
  uid: string;
  nome: string;
  email: string;
  /** Compiti obbligatori (facili e normali) finiti. */
  obbligatoriFiniti: number;
  /** Sfide finite. */
  sfideFinite: number;
  /** Compiti finiti e poi rifatti per esercizio almeno una volta. */
  rifatti: number;
  /** I compiti cominciati e non finiti, nell'ordine del percorso. */
  inCorso: Array<{ id: CompitoId; titolo: string }>;
  /** Domande al tutor in tutto il percorso (senza quelle dei ripassi, che non costano). */
  domande: number;
  /** L'ultima consegna su qualunque compito, ripassi compresi. */
  ultimaConsegna: Date | null;
  media: number | null;
};

/** Il riepilogo della classe: per ogni allievo quanti compiti ha finito, dove sta lavorando, quanto ha chiesto al tutor. In ordine alfabetico. */
export function riepilogoClasse(allievi: AllievoVisto[]): RigaRiepilogo[] {
  return tabellaClasse(allievi).map((r) => {
    const lavori = allievi.find((a) => a.uid === r.uid)?.lavori ?? {};
    const finiti = r.voci.filter((v) => v.stato === 'finito');
    const date = Object.values(lavori)
      .flatMap((l) => [l.ultimoAt, l.ripasso?.ultimoAt ?? null])
      .filter((d): d is Date => d !== null);
    return {
      uid: r.uid,
      nome: r.nome,
      email: r.email,
      obbligatoriFiniti: finiti.filter((v) => !eFacoltativo(v.id)).length,
      sfideFinite: finiti.filter((v) => eFacoltativo(v.id)).length,
      rifatti: finiti.filter((v) => lavori[v.id]?.ripasso).length,
      inCorso: r.voci.filter((v) => v.stato !== 'finito' && v.stato !== 'bloccato' && v.fasi > 0).map((v) => ({ id: v.id, titolo: titoloCompito(v.id) })),
      domande: r.voci.reduce((s, v) => s + v.consigli, 0),
      ultimaConsegna: date.length ? new Date(Math.max(...date.map((d) => d.getTime()))) : null,
      media: r.media,
    };
  });
}

/** Vero se l'allievo è su questo compito senza averlo finito e non ha più aiuti del tutor: tocca al prof. */
export const chiamaIlProf = (v: VoceCompito) => v.stato !== 'finito' && v.stato !== 'bloccato' && aiutiFiniti(v.consigli);

/** Gli allievi che devono chiamare il prof, con il compito su cui sono fermi. */
export function daAiutare(righe: RigaTabella[]): Array<{ uid: string; nome: string; compito: string }> {
  return righe.flatMap((r) => r.voci.filter(chiamaIlProf).map((v) => ({ uid: r.uid, nome: r.nome, compito: titoloCompito(v.id) })));
}

/** Il CSV della classe: tre colonne per compito, il bonus delle sfide e la media con il bonus. Punto e virgola per Excel in italiano. */
export function csvClasse(righe: RigaTabella[]): string {
  const pulisci = (v: string) => (/[;"\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
  const testa = ['Nome', 'Email', ...TITOLI_PERCORSO.flatMap((c) => [`${c.titolo} · fasi`, `${c.titolo} · domande`, `${c.titolo} · voto`]), 'Bonus sfide', 'Media'];
  const corpo = righe.map((r) => [pulisci(r.nome), r.email, ...r.voci.flatMap((v) => [v.fasi, v.consigli, v.voto ?? '']), r.bonus, r.media ?? ''].join(';'));
  return [testa.join(';'), ...corpo].join('\n') + '\n';
}
