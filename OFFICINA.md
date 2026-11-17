# L'Officina del corso di Tecnologie Web

Il sistema con cui gli allievi si esercitano su HTML, CSS e JavaScript **dentro il sito del
corso**, con l'account Google della scuola. È la stessa idea dell'Officina del Giro dei Cicli
(`C:\Users\Regnaud\Cicli-game`, `PERCORSO.md` §12 e seguenti), portata sul web: cambia il
motore di correzione, resta tutto il resto.

**Stato (17 novembre 2026)**: pubblicata su Vercel dal 25 ottobre e **in uso in classe**. Il
percorso JavaScript ha **27 compiti** per le Lezioni 1-9 del Modulo 4, tre per lezione (facile,
normale, sfida: §4), con il ripasso «Rifallo» a compito finito (12 novembre) e gli sfondi delle
feste (13 novembre, §6). Le Lezioni 10 (altri eventi) e 11 (classi CSS) del manuale non hanno
ancora compiti: vedi §7. Prima versione costruita il 23 ottobre con sei compiti, provata con gli
emulatori Firebase.

## 1. Le decisioni prese con il docente (23 ottobre 2026)

1. **Solo l'Officina, niente gara**, per ora. Stesso stile grafico dell'Officina del Giro
   (fondo scuro, accento giallo) e **lo stesso interruttore**: il docente apre l'Officina a
   inizio lezione e la chiude alla fine; chiusa, nessuno consegna né chiede al tutor.
2. **Dentro il repository del corso**, sotto `/officina`. Il manuale resta pubblico; l'area
   esercizi chiede il login.
3. **Correzione anche sul server**: il browser dell'allievo corregge in tempo reale mentre
   scrive (gratis, nessuna chiamata), ma la fase si promuove solo quando **il server rifà la
   verifica** sul codice consegnato.
4. **Tutor IA con il costo in punti**: voto = 10 − domande, mai sotto 5; arrivato a 5 il tutor si ferma e l'allievo chiama il prof, che lo vede nella dashboard. Gratis i messaggi fuori tema e un «non ho capito» per risposta.
5. **Si parte da JavaScript**, perché la classe è lì (lezione 7-8 del Modulo 4). HTML e CSS
   arrivano dopo, come sezioni del percorso.

Componenti riusabili da `C:\Users\Regnaud\html_exlplorer` (Monaco, anteprima in iframe,
controlli dichiarativi) sono stati presi come riferimento, non copiati: qui il motore deve
girare anche sul server.

## 2. Che cosa cambia rispetto all'Officina del Giro

| | Officina del Giro (Python) | Officina del corso web |
|---|---|---|
| Che cosa scrive l'allievo | un programma Python | il JavaScript di una pagina data (poi anche HTML e CSS) |
| Che cosa si corregge | l'output di `print` | **la pagina che ne risulta**: testi, stili, finestre `alert`/`prompt`, dopo clic simulati |
| Interprete | micro-interprete TypeScript | il **browser** (iframe nel client, **jsdom** sul server) |
| Prove nascoste | altre risposte alle `input()` | altre risposte ai `prompt()` e altri valori nelle caselle |
| Giudice anti-furbo | Haiku con i fatti misurati sul codice | Sonnet, con i fatti misurati sul JavaScript |

Tutto il resto è identico: login Google del dominio della scuola, classi scelte da un elenco,
percorso con i compiti sbloccati uno alla volta, fasi che fanno crescere lo stesso programma,
bozza salvata, tutor Sonnet che mostra al massimo un piccolo esempio con altri nomi, mai la riga da scrivere, dashboard di solo monitoraggio, CSV.

## 3. Il motore: la pagina si corregge guardandola

Un compito è **una pagina web** (HTML e CSS dati, con gli `id` già pronti) a cui l'allievo
aggiunge il JavaScript, fase per fase. Ogni fase ha delle **prove**; una prova è una
sequenza di **passi**:

- **azioni**: `clic` su un pulsante, `scrivi` in una casella, risposte pronte per i
  `prompt()` e i `confirm()` che la pagina farà;
- **controlli**: il `testo` di un elemento, il suo `stile` calcolato (il colore vale che si
  scriva `red`, `#ff0000` o `rgb(255,0,0)`), se è `visibile`, che cosa ha detto l'ultimo
  `alert`, se un `prompt` è stato fatto, che cosa è finito in `console.log`.

Quando un controllo non passa, l'allievo legge **l'errore fatto, in una frase**, come nel Giro
(`lib/officina/motore/messaggi.ts`): «Il pulsante «Suona il campanello» non è collegato a
nessuna funzione», «Compare l'alert «Arrivo subito», invece deve dire «Arrivo subito!»». Il
messaggio nasce da quello che la pagina ha fatto davvero: il correttore annota gli
`addEventListener` (collegato o no, a quale evento) e gli id che `getElementById` non trova.
Niente consigli su come correggere: quello è il lavoro del tutor, che riceve anche la nota
scritta a mano su ogni controllo (il campo `hint`, che l'allievo non vede). Anche il giudice
dice solo che cosa non rispetta la regola. Gli errori JavaScript (nome sbagliato, parentesi
mancante) diventano messaggi in italiano. La prima prova è mostrata; le altre sono nascoste e hanno
risposte diverse: chi scrive il risultato a mano passa la prima e cade sulla seconda.

Lo stesso script di correzione (`lib/officina/motore/correttore.ts`) gira:

- **nel browser**, in un iframe sandbox nascosto, a ogni modifica (con un piccolo ritardo):
  la checklist a fianco dell'editor si aggiorna da sola; un secondo iframe è l'anteprima
  vera, dove l'allievo clicca e vede i `prompt` reali;
- **sul server**, in jsdom con un timeout (2 secondi per prova: un `while (true)` non ferma
  il server), alla consegna. Promuove solo il server.

I **parametri** di ogni compito (nomi, prezzi, colori, soglie) escono da un seme fatto con
l'uid dell'allievo e l'id del compito: il vicino non può copiare i testi.

Il **giudice** (Sonnet 5.5) legge il codice promosso, la regola a parole della fase e i fatti
misurati (quante funzioni con nome, quanti `addEventListener`, `prompt`, `if`, `Number()`,
funzioni anonime, `onclick`) e dice OK o NO. Le regole del corso che fa rispettare: schema
in tre passi (id → funzione con nome → `addEventListener`), niente funzioni anonime, i dati
arrivano dal `prompt` o dalle caselle, non sono scritti nel programma, e la forma che la
regola chiede esplicitamente (una costante usata nel messaggio, non riscritta a mano). Se il
modello non risponde, la consegna passa (fail-open) e resta nei log.

Fino al 28 ottobre 2026 il giudice era Haiku, con un prompt che bocciava solo le frodi di un
elenco. Un allievo ha passato la fase della `const` del campanello con la costante dichiarata e
il nome del negozio riscritto a mano nell'alert. Alla prova (3 ripetizioni per caso) Haiku
lasciava passare la costante non usata 3 volte su 3, Sonnet la fermava sempre; con il prompt
attuale nessuno dei due ha bocciato una delle 94 soluzioni di riferimento (47 fasi, due semi).
Costo: circa un terzo di centesimo a consegna promossa, uno o due secondi di attesa.

Le forme che si possono contare non dipendono dal modello: i **controlli sul testo del
codice** (`motore/struttura.ts`), esatti e senza IA, vengono prima del giudice. Ogni id
cercato una volta sola in alto (`elementiInAlto`, le fasi di riordino), un minimo di commenti
(`almenoCommenti`), il valore della costante scritto una volta sola nel codice
(`scrittoUnaVolta`: il negozio del campanello, il condominio del citofono, il torneo del
tabellone, dalla fase della `const` in poi).

Ogni consegna con la pagina giusta lascia una riga nel **registro del giudice** del lavoro
(`giudice` in `LavoroDoc`, le ultime 60): OK, NO con il motivo, CONTROLLO (fermata dai conti
sul testo) o GUASTO (il modello non ha risposto e la consegna è passata senza giudizio). Il
docente le vede sotto il codice di ogni fase, nel lavoro dell'allievo.

## 4. Il percorso JavaScript

Due sezioni: «JavaScript: le basi» (Lezioni 1-8) e «JavaScript: funzioni e dati» (Lezione 9).
**Tre compiti per lezione** del Modulo 4 (dal 30 ottobre 2026; la mappa è `COMPITI_PER_LEZIONE`
in `compiti/elenco.ts`, i livelli in `TITOLI`):

- **facile**: tre fasi molto guidate, il codice d'esempio quasi tutto nella consegna;
- **normale**: cinque fasi (sei dove si riordina il codice), **una sola idea nuova per compito**;
- **sfida**: le consegne dicono che cosa deve fare la pagina, non come si scrive; è
  **facoltativa**: si apre come il normale, ma non blocca la lezione dopo e **non entra nella media**.

Facile e normale si fanno in fila: per andare avanti servono tutti i compiti obbligatori prima.
Le fasi fanno crescere la stessa pagina. La lampada e la porta
ne hanno una sesta: la pagina funziona già e si **riordina il codice** (Lezione 4, «anche i
pulsanti in una variabile»): ogni elemento in una variabile, cercato una volta sola in alto,
fuori dalle funzioni. Il correttore non vede la differenza, perché la pagina fa le stesse cose;
la controlla un conto esatto sul testo del codice (`motore/struttura.ts`, flag
`elementiInAlto` della fase), senza IA. Il numero di fasi sta in `compiti/elenco.ts`. Lo scontrino (Lezione 1) non ha pulsanti: si
controllano le righe esatte della console (controllo `console` con `uguale`) e, nell'ultima
fase, che ci siano almeno due commenti (flag `almenoCommenti`). L'anteprima mostra sotto la pagina
una console con le righe di `console.log` e gli errori, utile anche negli altri compiti. Un compito
già aperto non si blocca mai, anche se nel percorso ne entra uno nuovo prima.
L'HTML e il CSS sono dati e in sola lettura: l'allievo li legge (per gli `id`) ma scrive solo
il JavaScript.

**Rifare un compito per esercizio** (12 novembre 2026, richiesta del docente). A compito finito
l'allievo trova il pulsante «Rifallo per esercitarti» e ricomincia dalla traccia con **dati
nuovi**: un seme suo per ogni giro (`semeRipasso` in `compiti/index.ts`), scelto in modo che
la scheda sia diversa dalla prima volta e dal giro prima, così non basta ricopiare il codice.
Il **voto resta quello della prima volta**, e conta solo quello per la media; nel ripasso errori
e domande al tutor non costano punti, ma resta il tetto dei 5 aiuti, poi si chiama il prof. Un
giro nuovo si comincia solo a ripasso finito e con l'Officina aperta. Su Firestore il ripasso
sta dentro il lavoro (`lavori.<compito>.ripasso`, con `giro` e `seme`): ogni «Rifallo» lo
sostituisce. Il docente lo vede nel dettaglio del lavoro dell'allievo; nell'elenco l'allievo
vede «lo stai rifacendo».

| Lezione | Facile | Normale | Sfida |
|---|---|---|---|
| L1 Il primo JavaScript | Il biglietto da visita | Lo scontrino del bar | La paghetta |
| L2 Pulsanti e funzioni | Il pulsante che saluta | Il telecomando | La pulsantiera del DJ |
| L3 Dialoghi e variabili | La biglietteria del cinema | Il campanello del negozio | Il citofono del condominio |
| L4 Cambiare la pagina | Il cartellino del nome | La bacheca della classe | Il tabellone del torneo |
| L5 Cambiare stili | Il semaforo | La lampada da comodino (6 fasi) | Il tema chiaro e scuro |
| L6 Decisioni | Il termometro | La porta del club (6 fasi) | Il quiz a tre domande |
| L7 Operatori | Il convertitore dei tempi | La cassa della pizzeria | La spesa della gita |
| L8 Operatori logici | La giostra del luna park | Il modulo d'iscrizione | La prenotazione del campo |
| L9 Parametri e return | La macchinetta dei numeri | Il negozio di magliette | La pagella |

Le idee di ogni compito sono scritte nel commento in cima al suo file in `lib/officina/compiti/`.
In fondo a ogni lezione del manuale il box «Allenati nell'Officina» (`AllenatiOfficina`) porta ai
tre compiti della lezione; nelle lezioni senza compiti non compare.

## 5. Dove sta il codice

```
lib/officina/
  motore/        tipi (Fase, Prova, Passo), correttore (script in-page), pagina (compone
                 l'HTML), colori, erroriJs (traduzione), fatti (per il giudice),
                 esecutoreServer (jsdom + timeout), verifica (correttore + giudice)
  compiti/       il catalogo: una scheda e tre o cinque fasi per compito (sei per lampada e porta),
                 parametri dal seme; elenco.ts (titoli, livelli, sezioni) per il browser
  regole.ts      percorso, sblocco, voto, seme (puro)
  store.ts       Firestore: webOfficinaClassi/{classe}/allievi/{uid}, webOfficinaAllievi/{uid}
  service.ts     le API dell'allievo (io, classi, entra, compiti, compito, consegna, tutor)
  docenteService.ts, docenteAuth.ts, auth.ts, http.ts, rateLimit.ts
  tutor.ts, tutorPrompt.ts, consiglio.ts, filtroCodice.ts, giudice.ts, giudiceClient.ts
  client.ts      le chiamate dal browser e le forme delle risposte
  tabella.ts     la tabella della classe e il CSV (puro, gira dal docente)
app/officina/            l'allievo: percorso e compito
app/officina/docente/    il docente: classi, interruttore, tabella allievi × compiti
app/api/officina/        le rotte (allievo, docente, accesso, test-login per gli emulatori)
components/officina/     editor (Monaco), anteprima, checklist, tutor, scheda, accesso
```

Il progetto Firebase è lo stesso dell'escape room e del Giro (`html-css-attivita`), con
collezioni proprie (`webOfficina*`). Le regole Firestore sono **un solo file per progetto**:
`firestore.rules` di questo repository contiene tutti i blocchi (escape room, Giro, Officina
del Giro, Officina web); lo stesso blocco `webOfficina*` è stato aggiunto al file del Giro,
così pubblicare da uno dei due repository non toglie niente all'altro.

## 6. Per usarla in classe

1. Variabili d'ambiente su Vercel: vedi `.env.example` (stesse del Giro, più
   `OFFICINA_DOMINIO` con il dominio degli account degli allievi).
2. Pubblicare le regole: `npm run deploy-rules`.
3. Autorizzare il dominio Vercel del corso in Firebase → Authentication → Domini autorizzati.
4. `/officina/docente`: accedere con Google, creare la classe, lasciarla aperta.
5. Gli allievi aprono `/officina`, accedono con l'account della scuola, scelgono la classe.
6. A fine lezione: «Chiudi l'Officina». La volta dopo: «Apri l'Officina».

**Gli sfondi delle feste** (13 novembre 2026). Da `/officina/docente/sfondi` (link «🎄 sfondi
del sito» nelle classi) il docente carica immagini e le accende o spegne quando vuole. Quelle
accese compaiono dietro il frontespizio e l'elenco dei compiti dell'Officina (non nei compiti,
non nelle lezioni), una a caso per visita, la stessa per tutta la visita. Il browser del docente
riduce l'immagine (lato lungo 1920 px, WebP, max 900 kB) e il server la salva intera in un
documento di `webSfondi`, letto e scritto solo dal server: nessuna regola Firestore nuova.
Le API pubbliche sono `/api/sfondi` (gli accesi, un minuto di cache) e `/api/sfondi/<id>`
(l'immagine, cache lunga: non cambia mai). Da terminale: `npm run carica-sfondo -- file.webp "Nome"`.
Codice: `lib/sfondi/`, `components/SfondoFestivo.tsx`, classi `con-sfondo` e `pannello-sfondo` in `globals.css`.

## 7. Idee per dopo

- Le sezioni HTML e CSS, con i pannelli HTML/CSS scrivibili e i controlli sul DOM e sugli
  stili calcolati (già previsti dal motore: cambia solo quale pannello è aperto).
- Il «patentino di JavaScript» a fine sezione, con il tutor spento, come nel Giro.
- I compiti delle **Lezioni 10 e 11**. Per la L11 (classList) bastano i clic e i controlli
  `stile` e `visibile` di oggi; forse un controllo nuovo sulle classi di un elemento. Per la L10
  il motore oggi sa solo `clic` e `scrivi` (che manda input e change): servono azioni nuove per
  un tasto premuto (keydown con `event.key`), la scelta da un `<select>` e l'invio di un form
  (submit, con il controllo che la pagina non si ricarichi).
- I test automatici delle API con gli emulatori (oggi la prova di fumo si fa a mano).
