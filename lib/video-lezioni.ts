/* I video delle lezioni, su Google Drive. Per aggiungerne uno: una chiave, lo slug della lezione a
 * cui appartiene e l'ID del file, cioè il pezzo del link di Drive che sta dopo /file/d/. La chiave
 * è lo slug della lezione; un secondo video della stessa lezione usa lo slug seguito
 * dall'argomento. Poi si mette <VideoLezione lezioneSlug="<chiave>" /> nel punto della pagina in
 * cui il video serve. La pagina /video li elenca da sola, per modulo e lezione, nell'ordine in cui
 * sono scritti qui. */

/** Il dominio con cui i file sono condivisi su Drive. */
export const DOMINIO_VIDEO = 'ciacdidattica.it';

export interface VideoDellaLezione {
  titolo: string;
  /** Lo slug della lezione in cui sta il video. */
  lezione: string;
  driveId: string;
}

export const VIDEO_LEZIONI: Record<string, VideoDellaLezione> = {
  'lezione-1-primo-giorno': {
    titolo: 'La prima pagina web',
    lezione: 'lezione-1-primo-giorno',
    driveId: '1HbHD5a-wb1lPCqOwhg383Li0DVMlgb20',
  },
  'lezione-2-titoli-gerarchia': {
    titolo: 'I titoli da h1 a h6',
    lezione: 'lezione-2-titoli-gerarchia',
    driveId: '1Ax_VNKNVEtPmcYtpVciAEZUgW75AJQ9K',
  },
  'lezione-1-primo-javascript': {
    titolo: 'Il primo JavaScript',
    lezione: 'lezione-1-primo-javascript',
    driveId: '1ZlPhS0HPe6qJ4WNtS6hQf6jv0Jty6j7j',
  },
  'lezione-2-pulsanti-funzioni': {
    titolo: 'Pulsanti e funzioni',
    lezione: 'lezione-2-pulsanti-funzioni',
    driveId: '1igUQXJjiPW32r0Ptx7C9V3sMO9j6LKjz',
  },
  'lezione-3-dialoghi-utente': {
    titolo: 'Dialoghi e variabili',
    lezione: 'lezione-3-dialoghi-utente',
    driveId: '10GUj4NXwY5-2iMccREGKUP5eTJ3-tx1U',
  },
  'lezione-4-cambiare-pagina': {
    titolo: 'Cambiare la pagina',
    lezione: 'lezione-4-cambiare-pagina',
    driveId: '1eIyfJjhxZIFtsLlUvwrtQp3Ijpjvu-ZV',
  },
  'lezione-4-cambiare-pagina-elementi-variabili': {
    titolo: 'Elementi nelle variabili',
    lezione: 'lezione-4-cambiare-pagina',
    driveId: '19KujE-QTLl5jm6Sz1Ux4QOJk1YVjcyaT',
  },
  'lezione-4-cambiare-pagina-contatore': {
    titolo: 'Il contatore di click',
    lezione: 'lezione-4-cambiare-pagina',
    driveId: '1cnuQAvBwf9aKs3zHjC8cV-e1vwgSuTmN',
  },
};

/** L'id HTML del riquadro di un video, per arrivarci con un link (…/lezione#video-<chiave>). */
export function ancoraVideo(chiave: string): string {
  return `video-${chiave}`;
}
