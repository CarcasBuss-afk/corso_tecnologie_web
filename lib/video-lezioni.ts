/* I video delle lezioni, su Google Drive. Per aggiungerne uno: lo slug della lezione e l'ID del
 * file, cioè il pezzo del link di Drive che sta dopo /file/d/. */

/** Il dominio con cui i file sono condivisi su Drive. */
export const DOMINIO_VIDEO = 'ciacdidattica.it';

export const VIDEO_LEZIONI: Record<string, { titolo: string; driveId: string }> = {
  'lezione-1-primo-giorno': {
    titolo: 'La prima pagina web',
    driveId: '1HbHD5a-wb1lPCqOwhg383Li0DVMlgb20',
  },
  'lezione-2-titoli-gerarchia': {
    titolo: 'I titoli da h1 a h6',
    driveId: '1Ax_VNKNVEtPmcYtpVciAEZUgW75AJQ9K',
  },
  'lezione-2-pulsanti-funzioni': {
    titolo: 'Pulsanti e funzioni',
    driveId: '1igUQXJjiPW32r0Ptx7C9V3sMO9j6LKjz',
  },
  'lezione-3-dialoghi-utente': {
    titolo: 'Dialoghi e variabili',
    driveId: '10GUj4NXwY5-2iMccREGKUP5eTJ3-tx1U',
  },
  'lezione-4-cambiare-pagina': {
    titolo: 'Cambiare la pagina',
    driveId: '1eIyfJjhxZIFtsLlUvwrtQp3Ijpjvu-ZV',
  },
  'lezione-1-primo-javascript': {
    titolo: 'Il primo JavaScript',
    driveId: '1ZlPhS0HPe6qJ4WNtS6hQf6jv0Jty6j7j',
  },
};
