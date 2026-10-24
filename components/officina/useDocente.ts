'use client';
/* Stato di accesso del docente: login Google (o accesso di prova con gli emulatori),
 * verifica dell'autorizzazione sul server, claim `teacher` al primo accesso. */
import { useCallback, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut, type User } from 'firebase/auth';
import { EMULATORI, getClientAuth, providerGoogle } from '@/lib/firebaseClient';
import { chiamaAccessoDocente, messaggioErrore } from '@/lib/officina/client';
import { accediProvaEmulatori, spiegaErroreLogin, type StatoAccesso } from './useAllievo';

export function useDocente() {
  const [utente, setUtente] = useState<User | null>(null);
  const [stato, setStato] = useState<StatoAccesso>('caricamento');
  const [messaggio, setMessaggio] = useState('');

  useEffect(() => {
    return onAuthStateChanged(getClientAuth(), async (u) => {
      setUtente(u);
      if (!u) {
        setStato('anonimo');
        return;
      }
      setStato('verifica');
      try {
        const r = await chiamaAccessoDocente();
        // Il claim appena assegnato entra nel token solo dopo un refresh.
        if (r.claimAggiornato) await u.getIdToken(true);
        setStato('ok');
      } catch (e) {
        setMessaggio(messaggioErrore(e));
        setStato('negato');
      }
    });
  }, []);

  const accediGoogle = useCallback(async () => {
    setMessaggio('');
    try {
      await signInWithPopup(getClientAuth(), providerGoogle());
    } catch (e) {
      setMessaggio(spiegaErroreLogin(e));
    }
  }, []);

  const accediProva = useCallback(async (email: string) => {
    setMessaggio('');
    try {
      await accediProvaEmulatori(email, 'Docente di prova');
    } catch (e) {
      setMessaggio(`Accesso di prova non riuscito: ${messaggioErrore(e)}`);
    }
  }, []);

  const esci = useCallback(() => signOut(getClientAuth()), []);

  return { utente, stato, messaggio, accediGoogle, accediProva: EMULATORI ? accediProva : null, esci };
}
