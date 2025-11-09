import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import ProjectMilestone from '@/components/didattica/ProjectMilestone';

export default function Lezione1PrimoJavaScript() {
  const lezioni = getLezioniByModuloSlug('modulo-4-javascript');

  return (
    <LessonLayout
      moduloSlug="modulo-4-javascript"
      moduloTitolo="Modulo 4: JavaScript - Interattività"
      lezioni={lezioni}
      lezioneSlug="lezione-1-primo-javascript"
      lezioneTitolo="Il Primo JavaScript"
    >
      <LessonHeader
        numero={1}
        titolo="Il Primo JavaScript"
        durata="1.5 ore"
        difficolta="facile"
        obiettivi={[
          'Capire dove si scrive JavaScript',
          'Usare console.log() per stampare messaggi',
          'Aprire la Console del browser (F12)',
          'Scrivere commenti nel codice JavaScript',
          'Creare il tuo primo programma interattivo'
        ]}
      />

      {/* INTRODUZIONE */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Benvenuto nel Mondo di JavaScript!
        </h2>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-8 rounded-lg mb-8">
          <p className="text-xl mb-4">
            Se HTML è lo <strong>scheletro</strong> della pagina e CSS è il <strong>vestito</strong>...
          </p>
          <p className="text-2xl font-bold">
            JavaScript è il <strong>cervello</strong>! 🧠⚡
          </p>
        </div>

        <div className="prose max-w-none mb-8">
          <p className="text-lg text-gray-700 mb-4">
            JavaScript è quello che rende le pagine web <strong>vive</strong> e <strong>interattive</strong>.
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-bold text-gray-900 mb-2">Instagram</h3>
              <p className="text-gray-600 text-sm">
                Quando clicchi ❤️ e il cuore diventa rosso? JavaScript!
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
              <div className="text-4xl mb-3">🎮</div>
              <h3 className="font-bold text-gray-900 mb-2">Giochi Browser</h3>
              <p className="text-gray-600 text-sm">
                Il personaggio si muove quando premi le frecce? JavaScript!
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
              <div className="text-4xl mb-3">🛒</div>
              <h3 className="font-bold text-gray-900 mb-2">Shopping Online</h3>
              <p className="text-gray-600 text-sm">
                Il carrello che si aggiorna quando aggiungi prodotti? JavaScript!
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700">
            In questa lezione imparerai a scrivere il tuo primo codice JavaScript
            e a vedere i risultati nella <strong>Console del browser</strong>.
          </p>
        </div>
      </section>

      {/* TEORIA: DOVE SCRIVERE JAVASCRIPT */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Dove Si Scrive JavaScript?
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
          <p className="font-bold text-blue-800 mb-2">💡 Ricordi il tag &lt;style&gt; per il CSS?</p>
          <p className="text-gray-700">
            JavaScript si scrive dentro il tag <code className="bg-blue-100 px-2 py-1 rounded">&lt;script&gt;</code>,
            di solito alla fine del file HTML, prima di chiudere &lt;/body&gt;.
          </p>
        </div>

        <CodeExample
          title="Struttura HTML con JavaScript"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>La Mia Prima Pagina con JavaScript</title>
</head>
<body>

  <h1>Ciao Mondo!</h1>
  <p>Guarda la console per vedere la magia! 🎩✨</p>

  <!-- JavaScript va qui, alla fine del body -->
  <script>
    // Il tuo codice JavaScript va qui dentro!
    console.log("Ciao dal JavaScript!");
  </script>

</body>
</html>`}
          language="html"
          showLineNumbers
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded my-6">
          <p className="font-bold text-yellow-800 mb-2">⚠️ Perché alla fine del &lt;body&gt;?</p>
          <p className="text-gray-700">
            Così JavaScript può "vedere" tutto l'HTML che c'è prima. È come leggere un libro:
            prima leggi la storia (HTML), poi capisci cosa fare (JavaScript).
          </p>
        </div>
      </section>

      {/* TEORIA: CONSOLE.LOG */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Il Tuo Primo Comando: console.log()
        </h2>

        <div className="prose max-w-none mb-6">
          <p className="text-lg text-gray-700 mb-4">
            <code className="bg-gray-100 px-2 py-1 rounded text-blue-600 font-mono">console.log()</code>
            {' '}è il comando più importante per iniziare. Significa: <strong>"stampa questo messaggio nella console"</strong>.
          </p>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200 my-6">
            <h3 className="text-xl font-bold text-purple-900 mb-3">
              🎮 Pensa a console.log come alla chat di un gioco
            </h3>
            <p className="text-gray-700">
              Quando giochi online e scrivi messaggi che solo i developer (tu!) possono vedere.
              Gli utenti normali NON vedono la console, è il tuo <strong>strumento segreto</strong>! 🔧
            </p>
          </div>
        </div>

        <CodeExample
          title="Sintassi di console.log()"
          code={`// Stampa un messaggio di testo
console.log("Ciao a tutti!");

// Stampa un numero
console.log(42);

// Stampa con emoji (funziona!)
console.log("🚀 Decollo riuscito!");

// Stampa più cose insieme
console.log("Ho", 15, "anni e amo programmare! 💻");`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded my-6">
          <p className="font-bold text-green-800 mb-2">✅ Regole Importanti</p>
          <ul className="text-gray-700 space-y-2 ml-4">
            <li><strong>Virgolette:</strong> Il testo va tra virgolette: <code className="bg-green-100 px-1 rounded">"così"</code> o <code className="bg-green-100 px-1 rounded">'così'</code></li>
            <li><strong>Punto e virgola:</strong> Ogni comando finisce con <code className="bg-green-100 px-1 rounded">;</code></li>
            <li><strong>Maiuscole/minuscole:</strong> JavaScript è sensibile! <code className="bg-green-100 px-1 rounded">Console.log()</code> NON funziona (C maiuscola)</li>
            <li><strong>Parentesi:</strong> Apri <code className="bg-green-100 px-1 rounded">(</code> e chiudi <code className="bg-green-100 px-1 rounded">)</code> sempre!</li>
          </ul>
        </div>
      </section>

      {/* TEORIA: APRIRE LA CONSOLE */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Aprire la Console del Browser
        </h2>

        <div className="prose max-w-none mb-6">
          <p className="text-lg text-gray-700 mb-6">
            La <strong>Console</strong> è una finestra segreta nel browser dove puoi vedere
            i messaggi di <code className="bg-gray-100 px-2 py-1 rounded">console.log()</code>
            {' '}e gli errori del tuo codice.
          </p>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-6">
            <h3 className="text-2xl font-bold mb-4">🔑 Come Aprire la Console</h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="font-bold mb-2 text-white">Windows/Linux</p>
                <p className="text-xl font-mono text-white">F12</p>
                <p className="text-sm mt-2 text-white">oppure</p>
                <p className="text-xl font-mono text-white">Ctrl + Shift + I</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="font-bold mb-2 text-white">Mac</p>
                <p className="text-xl font-mono text-white">Cmd + Option + I</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <p className="font-bold mb-2 text-white">Oppure</p>
                <p className="text-sm text-white">Click destro sulla pagina</p>
                <p className="text-sm text-white">→ "Ispeziona"</p>
                <p className="text-sm text-white">→ Tab "Console"</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="font-bold text-blue-800 mb-2">💡 Pro Tip</p>
            <p className="text-gray-700">
              Lascia sempre la console aperta mentre programmi JavaScript.
              È come avere un pannello di controllo della tua astronave! 🚀
            </p>
          </div>
        </div>
      </section>

      {/* TEORIA: COMMENTI */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Commenti: Le Note per Te Stesso
        </h2>

        <div className="prose max-w-none mb-6">
          <p className="text-lg text-gray-700 mb-4">
            I <strong>commenti</strong> sono note che scrivi per te stesso (o per altri developer).
            JavaScript li ignora completamente!
          </p>

          <CodeExample
            title="Tipi di Commenti"
            code={`// Questo è un commento su una riga singola
// JavaScript ignora tutto quello che sta dopo //

console.log("Questo codice funziona!"); // Commento alla fine della riga

/*
  Questo è un commento
  su più righe.
  Utile per spiegazioni lunghe!
*/

console.log("Anche questo funziona!");

// console.log("Questo NON viene eseguito perché è commentato");`}
            language="javascript"
            showLineNumbers
          />

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200 my-6">
            <h3 className="text-xl font-bold text-purple-900 mb-3">
              📝 Quando Usare i Commenti?
            </h3>
            <ul className="text-gray-700 space-y-2 ml-4">
              <li>• Per spiegare <strong>perché</strong> hai scritto qualcosa (non <em>cosa</em> fa, quello si vede dal codice!)</li>
              <li>• Per organizzare sezioni del codice: <code className="bg-purple-100 px-1 rounded">// === GESTIONE PUNTEGGIO ===</code></li>
              <li>• Per "spegnere" temporaneamente del codice senza cancellarlo</li>
              <li>• Per lasciare TODO: <code className="bg-purple-100 px-1 rounded">// TODO: aggiungere animazione</code></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ESERCIZI GUIDATI */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Esercizi Guidati
        </h2>

        <Exercise
          title="Esercizio 1: Il Tuo Nome nella Console"
          difficulty="facile"
          steps={[
            'Crea un nuovo file HTML chiamato "primo-javascript.html"',
            'Copia la struttura HTML base vista sopra',
            'Dentro il tag <script>, scrivi console.log() con il tuo nome',
            'Apri il file nel browser e premi F12 per vedere la console',
            'Dovresti vedere il tuo nome stampato! 🎉'
          ]}
          experiments={[
            'Prova a scrivere il tuo nome in maiuscolo',
            'Aggiungi delle emoji vicino al tuo nome',
            'Cosa succede se dimentichi le virgolette?',
            'Cosa succede se scrivi Console.log() con la C maiuscola?'
          ]}
        />

        <details className="my-6 bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
          <summary className="font-bold text-gray-900 cursor-pointer hover:text-blue-600">
            💡 Soluzione Esercizio 1
          </summary>
          <CodeExample
            title="primo-javascript.html"
            code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Esercizio 1</title>
</head>
<body>

  <h1>Primo JavaScript</h1>

  <script>
    console.log("Mario"); // Sostituisci "Mario" con il tuo nome!
  </script>

</body>
</html>`}
            language="html"
            showLineNumbers
          />
        </details>

        <Exercise
          title="Esercizio 2: Numeri ed Emoji"
          difficulty="facile"
          steps={[
            'Nello stesso file, aggiungi altri console.log()',
            'Stampa la tua età (senza virgolette, è un numero!)',
            'Stampa la tua emoji preferita (con virgolette)',
            'Stampa un calcolo matematico: 10 + 5',
            'Stampa tutto insieme: il tuo nome, età e emoji sulla stessa riga'
          ]}
          experiments={[
            'Prova calcoli diversi: moltiplicazione (*), divisione (/), sottrazione (-)',
            'Cosa succede se metti un numero tra virgolette?',
            'Prova a stampare 5 cose diverse sulla stessa riga'
          ]}
        />

        <details className="my-6 bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
          <summary className="font-bold text-gray-900 cursor-pointer hover:text-blue-600">
            💡 Soluzione Esercizio 2
          </summary>
          <CodeExample
            title="Soluzione"
            code={`<script>
  // Nome
  console.log("Mario");

  // Età (numero, senza virgolette)
  console.log(15);

  // Emoji preferita
  console.log("🎮");

  // Calcolo
  console.log(10 + 5); // Stampa: 15

  // Tutto insieme
  console.log("Ciao, sono Mario, ho", 15, "anni e amo", "🎮");
</script>`}
            language="html"
            showLineNumbers
          />
        </details>

        <Exercise
          title="Esercizio 3: Organizza con i Commenti"
          difficulty="facile"
          steps={[
            'Aggiungi commenti al codice che hai scritto',
            'Crea un commento "titolo" sopra ogni sezione (esempio: // INFORMAZIONI PERSONALI)',
            'Aggiungi commenti inline per spiegare cosa fa ogni console.log()',
            'Prova a "commentare" (disattivare) una riga con //',
            'Prova a creare un commento su più righe con /* ... */'
          ]}
          experiments={[
            'Commenta diversi console.log() e vedi come cambia l\'output',
            'Prova a creare separatori con i commenti: // ========== SEZIONE 1 ==========',
            'Scrivi un TODO nel codice'
          ]}
        />

        <details className="my-6 bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
          <summary className="font-bold text-gray-900 cursor-pointer hover:text-blue-600">
            💡 Soluzione Esercizio 3
          </summary>
          <CodeExample
            title="Soluzione"
            code={`<script>
  // ========== INFORMAZIONI PERSONALI ==========

  // Stampa il nome
  console.log("Mario");

  // Stampa l'età
  console.log(15); // Numero senza virgolette

  // console.log("Questa riga NON viene eseguita!");

  /*
     Questa è una sezione di test
     con commenti su più righe
  */

  // ========== EMOJI E CALCOLI ==========

  console.log("🎮"); // Emoji preferita
  console.log(10 + 5); // Risultato: 15
</script>`}
            language="javascript"
            showLineNumbers
          />
        </details>

        <Exercise
          title="Esercizio 4: Messaggio Creativo"
          difficulty="facile"
          steps={[
            'Crea un messaggio di presentazione creativo con 5 console.log() separati',
            'Usa emoji, numeri e testo',
            'Ogni console.log() dovrebbe stampare una riga della presentazione',
            'Bonus: aggiungi calcoli matematici (esempio: giorni vissuti = età * 365)'
          ]}
          experiments={[
            'Calcola quante ore hai vissuto',
            'Calcola quanti minuti hai vissuto',
            'Crea una presentazione ancora più lunga con 10 righe'
          ]}
        />

        <details className="my-6 bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
          <summary className="font-bold text-gray-900 cursor-pointer hover:text-blue-600">
            💡 Soluzione Esercizio 4
          </summary>
          <CodeExample
            title="Soluzione"
            code={`<script>
  // ========== LA MIA PRESENTAZIONE ==========

  console.log("🌟 Ciao a tutti!");
  console.log("👋 Mi chiamo Mario e ho 15 anni");
  console.log("🎂 Questo significa che ho vissuto circa", 15 * 365, "giorni!");
  console.log("💻 Sto imparando JavaScript!");
  console.log("🚀 E mi piace un sacco!");

  // Bonus: calcoli divertenti
  console.log("Ho vissuto circa", 15 * 365 * 24, "ore! 🕐");
</script>`}
            language="javascript"
            showLineNumbers
          />
        </details>

        <Exercise
          title="Esercizio 5: Debug - Trova l'Errore!"
          difficulty="media"
          steps={[
            'Copia il codice con errori qui sotto nel tuo file',
            'Apri la console - vedrai degli ERRORI in rosso!',
            'Leggi i messaggi di errore (ti dicono cosa è sbagliato e in quale riga)',
            'Correggi gli errori uno alla volta',
            'Quando tutto è corretto, vedrai i messaggi stampati senza errori'
          ]}
          experiments={[
            'Prova a introdurre altri errori volontariamente per vedere i messaggi',
            'Cosa succede se dimentichi il punto e virgola?',
            'Cosa succede se scrivi log.console() invece di console.log()?'
          ]}
        />

        <details className="my-6 bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
          <summary className="font-bold text-gray-900 cursor-pointer hover:text-blue-600">
            💡 Codice con Errori e Soluzione
          </summary>
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Codice con errori (da correggere):</h4>
              <CodeExample
                title="Codice con errori"
                code={`Console.log("Ciao);           // Errore 1: Console con C maiuscola + virgolette non chiuse
console.log("Mondo!;          // Errore 2: virgolette non chiuse
console.log(Sono un messaggio); // Errore 3: testo senza virgolette
console.log("Fine"            // Errore 4: parentesi non chiusa`}
                language="javascript"
              />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Codice corretto:</h4>
              <CodeExample
                title="Soluzione"
                code={`console.log("Ciao");           // ✅ console minuscolo + virgolette chiuse
console.log("Mondo!");         // ✅ virgolette chiuse
console.log("Sono un messaggio"); // ✅ testo tra virgolette
console.log("Fine");           // ✅ parentesi chiusa`}
                language="javascript"
              />
            </div>
          </div>
        </details>
      </section>

      {/* MINI-PROGETTO */}
      <section className="mb-12">
        <ProjectMilestone
          numero={1}
          titolo="La Tua Carta d'Identità Digitale"
          requisiti={[
            'Creare un file HTML chiamato "carta-identita.html" con la struttura base',
            'Aggiungere il tag <script> alla fine del body',
            'Stampare un\'intestazione con emoji usando console.log()',
            'Stampare nome, età e città con console.log() separati',
            'Stampare almeno 3 hobby/passioni con emoji',
            'Calcolare e stampare: età in giorni, ore vissute, minuti vissuti',
            'Aggiungere commenti per organizzare le sezioni del codice',
            'Stampare un messaggio finale con emoji',
            'Testare aprendo il file nel browser e verificando che tutto appaia nella console (F12)'
          ]}
          suggerimenti={[
            'Usa righe vuote (console.log("");) per separare le sezioni',
            'Crea intestazioni con emoji e simboli: console.log("🌟 === LA MIA CARTA D\'IDENTITÀ ===")',
            'Per i calcoli: età * 365 per i giorni, età * 365 * 24 per le ore',
            'Organizza il codice con commenti tipo: // ========== SEZIONE ==========',
            'Testa spesso! Apri la console dopo ogni console.log() che aggiungi'
          ]}
        />

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-lg mt-6">
          <h3 className="text-xl font-bold mb-3">💡 Esempio di Risultato Finale nella Console</h3>
          <div className="bg-black bg-opacity-30 p-4 rounded font-mono text-sm">
            <p>🌟 === LA MIA CARTA D'IDENTITÀ ===</p>
            <p>&nbsp;</p>
            <p>👤 Nome: Mario Rossi</p>
            <p>🎂 Età: 15 anni</p>
            <p>🏠 Città: Milano</p>
            <p>&nbsp;</p>
            <p>❤️ === LE MIE PASSIONI ===</p>
            <p>🎮 Videogiochi</p>
            <p>⚽ Calcio</p>
            <p>💻 Programmazione</p>
            <p>&nbsp;</p>
            <p>📊 === STATISTICHE DIVERTENTI ===</p>
            <p>📅 Ho vissuto circa 5475 giorni</p>
            <p>🕐 Ho vissuto circa 131400 ore</p>
            <p>⏱️ Ho vissuto circa 7884000 minuti!</p>
            <p>&nbsp;</p>
            <p>🚀 Grazie per aver letto! 👋</p>
          </div>
        </div>

        <details className="mt-6 bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
          <summary className="font-bold text-gray-900 cursor-pointer hover:text-blue-600">
            💡 Soluzione Completa (prova prima da solo!)
          </summary>
          <CodeExample
            title="carta-identita.html"
            code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>La Mia Carta d'Identità Digitale</title>
</head>
<body>

  <h1>Apri la Console (F12) per vedere la tua carta d'identità! 🎉</h1>

  <script>
    // ========== INTESTAZIONE ==========
    console.log("🌟 === LA MIA CARTA D'IDENTITÀ ===");
    console.log(""); // Riga vuota per spaziare

    // ========== INFORMAZIONI BASE ==========
    console.log("👤 Nome: Mario Rossi");
    console.log("🎂 Età: 15 anni");
    console.log("🏠 Città: Milano");
    console.log(""); // Riga vuota

    // ========== PASSIONI E HOBBY ==========
    console.log("❤️ === LE MIE PASSIONI ===");
    console.log("🎮 Videogiochi (Fortnite, Minecraft)");
    console.log("⚽ Calcio - Tifo Inter!");
    console.log("💻 Programmazione - Sto imparando JavaScript!");
    console.log("🎵 Musica - Ascolto rap e pop");
    console.log(""); // Riga vuota

    // ========== STATISTICHE DIVERTENTI ==========
    console.log("📊 === STATISTICHE DIVERTENTI ===");
    console.log("📅 Ho vissuto circa", 15 * 365, "giorni");
    console.log("🕐 Ho vissuto circa", 15 * 365 * 24, "ore");
    console.log("⏱️ Ho vissuto circa", 15 * 365 * 24 * 60, "minuti!");
    console.log(""); // Riga vuota

    // ========== CHIUSURA ==========
    console.log("🚀 Grazie per aver letto la mia carta d'identità!");
    console.log("👋 A presto!");
  </script>

</body>
</html>`}
            language="html"
            showLineNumbers
          />
        </details>
      </section>

      {/* RIEPILOGO */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          📝 Riepilogo della Lezione
        </h2>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-white">Cosa Hai Imparato Oggi</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <h4 className="font-bold text-xl mb-3 text-white">✅ Concetti</h4>
              <ul className="space-y-2 text-white">
                <li>• JavaScript rende le pagine <strong>interattive</strong></li>
                <li>• Si scrive dentro il tag <code className="bg-white bg-opacity-30 px-2 py-1 rounded">&lt;script&gt;</code></li>
                <li>• La Console è il tuo strumento di debug</li>
                <li>• I commenti aiutano a organizzare il codice</li>
              </ul>
            </div>

            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <h4 className="font-bold text-xl mb-3 text-white">⚡ Comandi</h4>
              <ul className="space-y-2 text-white">
                <li>• <code className="bg-white bg-opacity-30 px-2 py-1 rounded">console.log()</code> - Stampa messaggi</li>
                <li>• <code className="bg-white bg-opacity-30 px-2 py-1 rounded">// commento</code> - Commento singolo</li>
                <li>• <code className="bg-white bg-opacity-30 px-2 py-1 rounded">/* */</code> - Commento multi-riga</li>
                <li>• <code className="bg-white bg-opacity-30 px-2 py-1 rounded">F12</code> - Apre la Console</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-white bg-opacity-20 rounded-lg p-6">
            <h4 className="font-bold text-xl mb-3 text-white">🎯 Regole d'Oro</h4>
            <ul className="space-y-2 text-white">
              <li>1. Il testo va sempre tra <strong>virgolette</strong>: <code className="bg-white bg-opacity-30 px-2 py-1 rounded">"così"</code></li>
              <li>2. I numeri NON vanno tra virgolette: <code className="bg-white bg-opacity-30 px-2 py-1 rounded">42</code></li>
              <li>3. Ogni comando finisce con <strong>punto e virgola</strong>: <code className="bg-white bg-opacity-30 px-2 py-1 rounded">;</code></li>
              <li>4. JavaScript è <strong>case-sensitive</strong>: <code className="bg-white bg-opacity-30 px-2 py-1 rounded">console</code> ≠ <code className="bg-white bg-opacity-30 px-2 py-1 rounded">Console</code></li>
              <li>5. Apri <code className="bg-white bg-opacity-30 px-2 py-1 rounded">(</code> chiudi <code className="bg-white bg-opacity-30 px-2 py-1 rounded">)</code> sempre!</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SFIDA OPZIONALE */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🏆</span>
            <h2 className="text-3xl font-bold">Sfida Opzionale: Console Art!</h2>
          </div>

          <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 text-white">🎨 Crea un'opera d'arte nella console!</h3>
            <p className="mb-4 text-white">
              Usa console.log() per disegnare qualcosa usando solo caratteri e emoji.
              Puoi creare: una faccina, un cuore, il tuo nome in ASCII art, una bandiera...
            </p>

            <div className="bg-black bg-opacity-50 p-4 rounded font-mono text-sm mb-4">
              <p className="text-white">Esempio - Faccina sorridente:</p>
              <p className="mt-2 text-white">😊 😊 😊 😊 😊</p>
              <p className="text-white">😊 👀 👀 👀 😊</p>
              <p className="text-white">😊 😊 😊 😊 😊</p>
              <p className="text-white">😊 😃 😃 😃 😊</p>
              <p className="text-white">😊 😊 😊 😊 😊</p>
            </div>

            <h4 className="font-bold mb-2 text-white">📋 Requisiti:</h4>
            <ul className="space-y-1 ml-4 text-white">
              <li>• Usa almeno 5 console.log()</li>
              <li>• Crea un "disegno" riconoscibile</li>
              <li>• Usa emoji o caratteri speciali (█ ░ ▓ ■ ● ★ ♥)</li>
              <li>• Aggiungi commenti per spiegare cosa hai disegnato</li>
            </ul>
          </div>

          <details className="bg-white bg-opacity-20 rounded-lg p-6">
            <summary className="font-bold cursor-pointer hover:text-yellow-200 text-white">
              💡 Idee e Suggerimenti
            </summary>
            <div className="mt-4 space-y-3 text-white">
              <p><strong>Idee facili:</strong></p>
              <ul className="ml-4 space-y-1">
                <li>• Cuore: usa ❤️ o ♥</li>
                <li>• Bandiera italiana: 🟢 ⚪ 🔴 ripetuti</li>
                <li>• Albero di Natale con 🎄 🎁 ⭐</li>
                <li>• Muraglia con █ e ░</li>
              </ul>

              <p className="mt-4"><strong>Esempio - Cuore:</strong></p>
              <div className="bg-black bg-opacity-50 p-3 rounded font-mono text-sm mt-2">
                <p>console.log("  ❤️ ❤️    ❤️ ❤️  ");</p>
                <p>console.log("❤️ ❤️ ❤️  ❤️ ❤️ ❤️");</p>
                <p>console.log("❤️ ❤️ ❤️ ❤️ ❤️ ❤️");</p>
                <p>console.log("  ❤️ ❤️ ❤️ ❤️  ");</p>
                <p>console.log("    ❤️ ❤️    ");</p>
                <p>console.log("      ❤️      ");</p>
              </div>
            </div>
          </details>
        </div>
      </section>

      {/* PROSSIMI PASSI */}
      <section className="mb-12">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Prossimi Passi
          </h2>
          <p className="text-gray-700 mb-4">
            Ottimo lavoro! Ora sai scrivere JavaScript e usare la console come un vero developer! 🎉
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Nella prossima lezione</strong> imparerai a creare <strong>dialoghi con l'utente</strong>
            usando <code className="bg-green-100 px-2 py-1 rounded">alert()</code>, <code className="bg-green-100 px-2 py-1 rounded">prompt()</code> e
            <code className="bg-green-100 px-2 py-1 rounded">confirm()</code>.
            Finalmente potrai creare pagine che <strong>parlano</strong> con chi le visita! 💬
          </p>

          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-lg mt-6">
            <p className="font-bold text-lg mb-2">💪 Pratica Consigliata</p>
            <p className="text-green-50">
              Prima di passare alla prossima lezione, prova a creare 2-3 file HTML con JavaScript diversi.
              Sperimenta con emoji, calcoli, messaggi creativi. Più scrivi codice, più diventa naturale! 🌟
            </p>
          </div>
        </div>
      </section>

    </LessonLayout>
  );
}
