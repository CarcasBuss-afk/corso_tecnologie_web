# L'Officina del corso di Tecnologie Web

Il sistema con cui gli allievi si esercitano su HTML, CSS e JavaScript **dentro il sito del
corso**, con l'account Google della scuola. È la stessa idea dell'Officina del Giro dei Cicli
(`C:\Users\Regnaud\Cicli-game`, `PERCORSO.md` §12 e seguenti), portata sul web: cambia il
motore di correzione, resta tutto il resto.

**Stato (23 ottobre 2026)**: prima versione costruita, con il percorso JavaScript (sei compiti,
trenta fasi). Provata in locale con gli emulatori Firebase: percorso dell'allievo, consegna
(bocciata, promossa, bocciata dal giudice), tutor, interruttore, dashboard del docente in
tempo reale. **Non ancora provata in classe** e non ancora pubblicata su Vercel (servono le
variabili d'ambiente, §6).

## 1. Le decisioni prese con il docente (23 ottobre 2026)

1. **Solo l'Officina, niente gara**, per ora. Stesso stile grafico dell'Officina del Giro
   (fondo scuro, accento giallo) e **lo stesso interruttore**: il docente apre l'Officina a
   inizio lezione e la chiude alla fine; chiusa, nessuno consegna né chiede al tutor.
2. **Dentro il repository del corso**, sotto `/officina`. Il manuale resta pubblico; l'area
   esercizi chiede il login.
3. **Correzione anche sul server**: il browser dell'allievo corregge in tempo reale mentre
   scrive (gratis, nessuna chiamata), ma la fase si promuove solo quando **il server rifà la
   verifica** sul codice consegnato.
4. **Tutor IA con il costo in punti**: voto = 10 − domande, mai sotto 5, come nell'Officina.
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
| Giudice anti-furbo | Haiku con i fatti misurati sul codice | uguale, con i fatti misurati sul JavaScript |

Tutto il resto è identico: login Google del dominio della scuola, classi scelte da un elenco,
percorso con i compiti sbloccati uno alla volta, fasi che fanno crescere lo stesso programma,
bozza salvata, tutor Sonnet che non scrive mai codice, dashboard di solo monitoraggio, CSV.

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

Il **giudice** (Haiku) legge il codice promosso, la regola a parole della fase e i fatti
misurati (quante funzioni con nome, quanti `addEventListener`, `prompt`, `if`, `Number()`,
funzioni anonime, `onclick`) e dice OK o NO. Le regole del corso che fa rispettare: schema
in tre passi (id → funzione con nome → `addEventListener`), niente funzioni anonime, i dati
arrivano dal `prompt` o dalle caselle, non sono scritti nel programma. Se il modello non
risponde, la consegna passa (fail-open) e resta nei log.

## 4. Il percorso JavaScript

Una sezione, «JavaScript: le basi», un compito per lezione del Modulo 4, **una sola idea
nuova per compito**, cinque fasi che fanno crescere la stessa pagina. La lampada e la porta
ne hanno una sesta: la pagina funziona già e si **riordina il codice** (Lezione 4, «anche i
pulsanti in una variabile»): ogni elemento in una variabile, cercato una volta sola in alto,
fuori dalle funzioni. Il correttore non vede la differenza, perché la pagina fa le stesse cose;
la controlla un conto esatto sul testo del codice (`motore/struttura.ts`, flag
`elementiInAlto` della fase), senza IA. Il numero di fasi sta in `compiti/elenco.ts`.
L'HTML e il CSS sono dati e in sola lettura: l'allievo li legge (per gli `id`) ma scrive solo
il JavaScript.

| # | Compito | Lezione | Idea nuova |
|---|---|---|---|
| 1 | Il campanello del negozio | L2-L3 | funzione con nome + `addEventListener`; `alert`, `prompt`, `let` |
| 2 | La bacheca della classe | L4 | `innerHTML` / `textContent`: il risultato va in pagina |
| 3 | La lampada da comodino | L5 | `.style`: colori, dimensioni, `display`; poi il codice in ordine con le variabili |
| 4 | La porta del club | L6 | `if` / `else` / `else if`, `Number()`, confronti; poi il codice in ordine |
| 5 | La cassa della pizzeria | L7 | `.value`, operatori, `%`, il contatore fuori dalla funzione |
| 6 | Il modulo d'iscrizione | L8 | `&&`, `\|\|`, `!`: la validazione |

Le sezioni successive («JavaScript: funzioni e dati», «HTML», «CSS») sono previste e
arrivano quando la classe ci arriva.

## 5. Dove sta il codice

```
lib/officina/
  motore/        tipi (Fase, Prova, Passo), correttore (script in-page), pagina (compone
                 l'HTML), colori, erroriJs (traduzione), fatti (per il giudice),
                 esecutoreServer (jsdom + timeout), verifica (correttore + giudice)
  compiti/       il catalogo: una scheda e cinque fasi per compito (sei per lampada e porta), parametri dal seme
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

## 7. Idee per dopo

- Le sezioni HTML e CSS, con i pannelli HTML/CSS scrivibili e i controlli sul DOM e sugli
  stili calcolati (già previsti dal motore: cambia solo quale pannello è aperto).
- Il «patentino di JavaScript» a fine sezione, con il tutor spento, come nel Giro.
- Un collegamento «Allenati» in fondo a ogni lezione del Modulo 4 verso il compito relativo.
