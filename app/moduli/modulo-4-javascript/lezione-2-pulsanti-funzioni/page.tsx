import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import JavaScriptDemo from '@/components/didattica/JavaScriptDemo';
import Challenge from '@/components/didattica/Challenge';

export default function Lezione2PulsantiFunzioni() {
  const lezioni = getLezioniByModuloSlug('modulo-4-javascript');

  return (
    <LessonLayout
      moduloSlug="modulo-4-javascript"
      moduloTitolo="Modulo 4: JavaScript - Interattività"
      lezioni={lezioni}
      lezioneSlug="lezione-2-pulsanti-funzioni"
      lezioneTitolo="Pulsanti e Funzioni"
    >
      <LessonHeader
        numero={2}
        titolo="Pulsanti e Funzioni"
        durata="1.5 ore"
        difficolta="facile"
        obiettivi={[
          'Collegare un pulsante HTML a JavaScript con onclick',
          'Capire cos\'è una funzione (blocco di istruzioni)',
          'Creare funzioni che stampano nella console',
          'Chiamare funzioni quando si clicca un pulsante'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Rendere i Pulsanti "Vivi"!</h2>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-lg mb-6">
          <p className="text-xl mb-4">
            Nella lezione scorsa hai imparato a <strong>stampare messaggi nella console</strong>.
          </p>
          <p className="text-2xl font-bold">
            Ora imparerai a far succedere qualcosa <strong>quando clicchi un pulsante</strong>! 🖱️
          </p>
        </div>

        <p className="text-lg mb-4">
          Finora il codice JavaScript veniva eseguito <strong>automaticamente</strong> quando la pagina si caricava.
          Ma cosa succede se vogliamo che qualcosa accada solo <strong>quando l'utente clicca</strong>?
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <div className="text-4xl mb-3">❤️</div>
            <h3 className="font-bold text-gray-900 mb-2">Instagram</h3>
            <p className="text-gray-600 text-sm">
              Clicchi il cuore → diventa rosso
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
            <div className="text-4xl mb-3">▶️</div>
            <h3 className="font-bold text-gray-900 mb-2">YouTube</h3>
            <p className="text-gray-600 text-sm">
              Clicchi play → parte il video
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <div className="text-4xl mb-3">🛒</div>
            <h3 className="font-bold text-gray-900 mb-2">Amazon</h3>
            <p className="text-gray-600 text-sm">
              Clicchi "Aggiungi" → va nel carrello
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
          <h3 className="font-bold text-yellow-800 mb-2">💡 Cosa Imparerai Oggi</h3>
          <p className="text-gray-700">
            Come collegare un <strong>pulsante HTML</strong> a del <strong>codice JavaScript</strong>,
            così quando clicchi il pulsante, JavaScript esegue le tue istruzioni!
          </p>
        </div>
      </section>

      {/* Ricordi il Button? */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">📦 Ricordi il Pulsante HTML?</h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
          <p className="font-bold text-blue-800 mb-2">🔙 Dal Modulo HTML...</p>
          <p className="text-gray-700 mb-4">
            Hai già imparato a creare pulsanti con il tag <code className="bg-blue-100 px-2 py-1 rounded">&lt;button&gt;</code>.
            Ecco un veloce ripasso:
          </p>
          <CodeExample
            code={`<!-- Un semplice pulsante HTML -->
<button>Cliccami!</button>

<!-- Pulsante con testo diverso -->
<button>Invia</button>
<button>Salva</button>`}
            language="html"
          />
        </div>

        <p className="text-lg mb-4">
          Il problema è che questi pulsanti <strong>non fanno nulla</strong> quando li clicchi!
          Sono solo "decorativi". Per renderli utili, dobbiamo collegarli a JavaScript.
        </p>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-white">🎯 Il Nostro Obiettivo</h3>
          <p className="text-lg">
            Fare in modo che quando clicchi un pulsante, JavaScript esegua del codice!
          </p>
        </div>
      </section>

      {/* onclick */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🖱️ L'Attributo onclick</h2>

        <p className="text-lg mb-4">
          Per far "reagire" un pulsante al click, usiamo l'attributo <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">onclick</code>.
        </p>

        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Come Funziona</h3>
          <p className="text-lg mb-3">
            <code className="bg-white bg-opacity-20 px-2 py-1 rounded">onclick</code> significa:
            <strong> "quando clicchi, esegui questo codice JavaScript"</strong>
          </p>
          <div className="bg-black bg-opacity-30 p-4 rounded border-2 border-white border-opacity-30">
            <p className="font-mono text-yellow-200">&lt;button onclick="codice JavaScript"&gt;Testo&lt;/button&gt;</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Semplice</h3>
        <CodeExample
          title="onclick con console.log()"
          code={`<!-- Quando clicchi, stampa nella console -->
<button onclick="console.log('Hai cliccato!')">
  Cliccami!
</button>`}
          language="html"
          showLineNumbers
        />

        <h3 className="text-xl font-bold mb-3 mt-8">📄 Esempio Completo - Copia e Prova!</h3>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <CodeExample
            title="📄 HTML"
            code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Onclick Demo</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      text-align: center;
    }
    button {
      padding: 15px 30px;
      font-size: 18px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    button:hover {
      background: #5a6fd6;
    }
  </style>
</head>
<body>

  <h1>Prova onclick!</h1>
  <p>Apri la console (F12) e clicca il pulsante</p>

  <button onclick="console.log('🎉 Hai cliccato!')">
    Cliccami!
  </button>

</body>
</html>`}
            language="html"
            showLineNumbers
          />

          <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
            <p className="text-gray-500 mb-2">// Console del browser (F12)</p>
            <p className="mb-1">&gt; <span className="text-white">Clicchi una volta...</span></p>
            <p className="text-green-400">🎉 Hai cliccato!</p>
            <p className="mb-1 mt-3">&gt; <span className="text-white">Clicchi ancora...</span></p>
            <p className="text-green-400">🎉 Hai cliccato!</p>
            <p className="text-green-400">🎉 Hai cliccato!</p>
            <p className="text-gray-500 mt-3">// Ogni click = un messaggio!</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="onclick - Esempio Live"
          description="Apri la console (F12) e clicca il pulsante per vedere il messaggio!"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      text-align: center;
    }
    button {
      padding: 15px 30px;
      font-size: 18px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    button:hover {
      background: #5a6fd6;
    }
    .nota {
      margin-top: 20px;
      padding: 15px;
      background: #fff3cd;
      border-radius: 8px;
      color: #856404;
    }
  </style>
</head>
<body>

  <h2>Prova onclick!</h2>

  <button onclick="console.log('🎉 Hai cliccato!')">
    Cliccami!
  </button>

  <div class="nota">
    ⚠️ Apri la console del browser (F12) per vedere il messaggio!
  </div>

</body>
</html>`}
        />

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mt-6">
          <p className="font-bold text-green-800 mb-2">✅ Funziona!</p>
          <p className="text-gray-700">
            Ogni volta che clicchi il pulsante, il codice dentro <code className="bg-green-100 px-1 rounded">onclick=""</code> viene eseguito.
            In questo caso, stampa un messaggio nella console!
          </p>
        </div>
      </section>

      {/* Il Problema */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🤔 Il Problema: Codice Lungo</h2>

        <p className="text-lg mb-4">
          Mettere il codice direttamente dentro <code className="bg-gray-100 px-2 py-1 rounded">onclick=""</code> funziona,
          ma cosa succede se vuoi fare <strong>tante cose</strong>?
        </p>

        <CodeExample
          title="❌ Diventa illeggibile!"
          code={`<!-- Questo è confuso e difficile da leggere -->
<button onclick="console.log('Ciao!'); console.log('Come stai?'); console.log('Benvenuto!'); console.log('Buon lavoro!')">
  Saluta
</button>

<!-- Immagina con 10 o 20 istruzioni... 😱 -->`}
          language="html"
          showLineNumbers
        />

        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded mt-6 mb-6">
          <h3 className="font-bold text-red-800 mb-2">❌ Problemi di Questo Approccio</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Il codice diventa <strong>lunghissimo e illeggibile</strong></li>
            <li>• Difficile trovare <strong>errori</strong></li>
            <li>• Se vuoi usare lo stesso codice in 3 pulsanti, devi <strong>copiarlo 3 volte</strong></li>
            <li>• Mescola HTML e JavaScript in modo <strong>confuso</strong></li>
          </ul>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-white">💡 La Soluzione: Le Funzioni!</h3>
          <p className="text-lg">
            Invece di scrivere tutto dentro onclick, mettiamo il codice in una <strong>funzione</strong>
            e chiamiamo solo il nome della funzione!
          </p>
        </div>
      </section>

      {/* Le Funzioni */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">📦 Le Funzioni: Blocchi di Istruzioni</h2>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg mb-6">
          <h3 className="text-2xl font-bold mb-3 text-white">Cos'è una Funzione?</h3>
          <p className="text-xl mb-4">
            Una funzione è un <strong>blocco di istruzioni con un nome</strong>.
          </p>
          <p className="text-lg">
            Scrivi le istruzioni una volta, poi le esegui quando vuoi chiamando il nome!
          </p>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200 mb-6">
          <h3 className="text-xl font-bold text-yellow-900 mb-3">🍕 Analogia: La Ricetta</h3>
          <p className="text-gray-700 mb-4">
            Pensa a una <strong>ricetta di cucina</strong>:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-yellow-300">
              <p className="font-bold text-yellow-800 mb-2">📋 Ricetta "Pizza"</p>
              <ol className="text-gray-600 text-sm space-y-1">
                <li>1. Impasta la farina</li>
                <li>2. Stendi la pasta</li>
                <li>3. Aggiungi pomodoro</li>
                <li>4. Aggiungi mozzarella</li>
                <li>5. Inforna 15 minuti</li>
              </ol>
            </div>
            <div className="bg-white p-4 rounded border border-yellow-300">
              <p className="font-bold text-yellow-800 mb-2">💻 Funzione "saluta"</p>
              <ol className="text-gray-600 text-sm space-y-1">
                <li>1. Stampa "Ciao!"</li>
                <li>2. Stampa "Come stai?"</li>
                <li>3. Stampa "Benvenuto!"</li>
              </ol>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            Quando dici <strong>"Fai la pizza!"</strong> → esegui tutti i passaggi della ricetta.<br/>
            Quando scrivi <strong>"saluta()"</strong> → JavaScript esegue tutte le istruzioni nella funzione!
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3">Come Si Scrive una Funzione</h3>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
          <p className="font-bold text-blue-800 mb-3">📝 La Sintassi</p>
          <CodeExample
            code={`function nomeFunzione() {
  // Le istruzioni vanno qui dentro
  // Tra le parentesi graffe { }
}`}
            language="javascript"
          />
          <div className="mt-4 space-y-2 text-gray-700">
            <p>• <code className="bg-blue-100 px-1 rounded">function</code> = parola chiave per creare una funzione</p>
            <p>• <code className="bg-blue-100 px-1 rounded">nomeFunzione</code> = il nome che scegli tu (senza spazi!)</p>
            <p>• <code className="bg-blue-100 px-1 rounded">()</code> = parentesi tonde (obbligatorie)</p>
            <p>• <code className="bg-blue-100 px-1 rounded">{"{ }"}</code> = parentesi graffe che contengono le istruzioni</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico</h3>
        <CodeExample
          title="Creare e chiamare una funzione"
          code={`// PASSO 1: Creo la funzione (la "ricetta")
function saluta() {
  console.log("Ciao!");
  console.log("Come stai?");
  console.log("Benvenuto!");
}

// PASSO 2: Chiamo la funzione (eseguo la "ricetta")
saluta();

// Posso chiamarla quante volte voglio!
saluta();
saluta();`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded mt-6">
          <h3 className="font-bold text-purple-800 mb-2">💡 Importante!</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong>Creare</strong> una funzione = scrivere la ricetta (non succede nulla ancora)</li>
            <li>• <strong>Chiamare</strong> una funzione = eseguire la ricetta con <code className="bg-purple-100 px-1 rounded">nomeFunzione()</code></li>
            <li>• Le parentesi <code className="bg-purple-100 px-1 rounded">()</code> dopo il nome sono <strong>obbligatorie</strong> per chiamarla!</li>
          </ul>
        </div>
      </section>

      {/* Collegare Funzione a Pulsante */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🔗 Collegare Funzione e Pulsante</h2>

        <p className="text-lg mb-4">
          Ora uniamo i due concetti: creiamo una funzione e la chiamiamo quando clicchiamo un pulsante!
        </p>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Il Pattern</h3>
          <div className="bg-black bg-opacity-30 p-4 rounded border-2 border-white border-opacity-30 space-y-2">
            <p className="font-mono text-yellow-200">1. Crea la funzione dentro &lt;script&gt;</p>
            <p className="font-mono text-yellow-200">2. Nel pulsante: onclick="nomeFunzione()"</p>
            <p className="font-mono text-yellow-200">3. Clicchi → JavaScript esegue la funzione!</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">📄 Esempio Completo - Copia e Prova!</h3>

        <CodeExample
          title="Pulsante + Funzione"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Pulsante e Funzione</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      text-align: center;
    }
    button {
      padding: 15px 30px;
      font-size: 18px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      margin: 10px;
    }
    button:hover {
      transform: scale(1.05);
    }
  </style>
</head>
<body>

  <h1>Pulsanti e Funzioni</h1>
  <p>Apri la console (F12) e clicca i pulsanti!</p>

  <!-- I pulsanti chiamano le funzioni -->
  <button onclick="saluta()">Saluta</button>
  <button onclick="contaFinoA3()">Conta</button>

  <script>
    // Funzione 1: Saluta
    function saluta() {
      console.log("👋 Ciao!");
      console.log("Come stai?");
      console.log("Benvenuto nel sito!");
    }

    // Funzione 2: Conta
    function contaFinoA3() {
      console.log("1️⃣ Uno");
      console.log("2️⃣ Due");
      console.log("3️⃣ Tre!");
    }
  </script>

</body>
</html>`}
          language="html"
          showLineNumbers
        />

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Due Pulsanti, Due Funzioni"
          description="Apri la console (F12) e clicca i pulsanti per vedere i messaggi!"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      text-align: center;
    }
    button {
      padding: 15px 30px;
      font-size: 18px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      margin: 10px;
    }
    button:hover {
      transform: scale(1.05);
    }
    .nota {
      margin-top: 20px;
      padding: 15px;
      background: #fff3cd;
      border-radius: 8px;
      color: #856404;
    }
  </style>
</head>
<body>

  <h2>Pulsanti e Funzioni</h2>

  <button onclick="saluta()">Saluta</button>
  <button onclick="contaFinoA3()">Conta</button>

  <div class="nota">
    ⚠️ Apri la console del browser (F12) per vedere i messaggi!
  </div>

  <script>
    function saluta() {
      console.log("👋 Ciao!");
      console.log("Come stai?");
      console.log("Benvenuto nel sito!");
    }

    function contaFinoA3() {
      console.log("1️⃣ Uno");
      console.log("2️⃣ Due");
      console.log("3️⃣ Tre!");
    }
  </script>

</body>
</html>`}
        />

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mt-6">
          <p className="font-bold text-green-800 mb-2">✅ Vantaggi delle Funzioni</p>
          <ul className="text-gray-700 space-y-2">
            <li>• Il codice è <strong>organizzato e leggibile</strong></li>
            <li>• Puoi <strong>riutilizzare</strong> la stessa funzione in più pulsanti</li>
            <li>• Facile trovare e correggere <strong>errori</strong></li>
            <li>• HTML e JavaScript sono <strong>separati</strong></li>
          </ul>
        </div>
      </section>

      {/* Regole per i Nomi */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">📝 Regole per i Nomi delle Funzioni</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h3 className="font-bold text-green-800 mb-3">✅ Nomi Corretti</h3>
            <CodeExample
              code={`function saluta() { }
function mostraMessaggio() { }
function calcolaSomma() { }
function bottone1() { }
function faiQualcosa() { }`}
              language="javascript"
            />
            <ul className="text-gray-600 text-sm mt-3 space-y-1">
              <li>• Iniziano con lettera minuscola</li>
              <li>• Usano camelCase per più parole</li>
              <li>• Nomi descrittivi</li>
            </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <h3 className="font-bold text-red-800 mb-3">❌ Nomi Sbagliati</h3>
            <CodeExample
              code={`function Saluta() { }     // maiuscola
function mostra messaggio() { } // spazio!
function 1bottone() { }   // inizia con numero
function fai-qualcosa() { } // trattino`}
              language="javascript"
            />
            <ul className="text-gray-600 text-sm mt-3 space-y-1">
              <li>• No spazi nel nome</li>
              <li>• No trattini</li>
              <li>• Non iniziare con numeri</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <p className="font-bold text-blue-800 mb-2">💡 Consiglio</p>
          <p className="text-gray-700">
            Dai alle funzioni nomi che <strong>descrivono cosa fanno</strong>:
            <code className="bg-blue-100 px-1 rounded mx-1">mostraMessaggio</code>,
            <code className="bg-blue-100 px-1 rounded mx-1">salutaUtente</code>,
            <code className="bg-blue-100 px-1 rounded mx-1">stampaNumeri</code>.
            Così capirai subito cosa fa la funzione!
          </p>
        </div>
      </section>

      {/* Esercizio Guidato */}
      <Exercise
        title="🎯 Esercizio Guidato: Tastiera della Console"
        steps={[
          'Crea una cartella "tastiera-console" in VS Code',
          'Dentro la cartella, crea un file "index.html"',
          {
            text: 'Scrivi la struttura HTML base con stile',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Tastiera Console</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      text-align: center;
      background: #1a1a2e;
      color: white;
    }

    h1 {
      color: #eee;
    }

    .tastiera {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      max-width: 400px;
      margin: 30px auto;
    }

    button {
      padding: 20px 30px;
      font-size: 24px;
      background: #16213e;
      color: white;
      border: 2px solid #0f3460;
      border-radius: 10px;
      cursor: pointer;
    }

    button:hover {
      background: #0f3460;
      transform: scale(1.1);
    }
  </style>
</head>
<body>

  <h1>🎹 Tastiera della Console</h1>
  <p>Apri la console (F12) e premi i pulsanti!</p>

  <div class="tastiera">
    <!-- I pulsanti andranno qui -->
  </div>

</body>
</html>`,
            language: 'html',
          },
          'Salva (Ctrl+S) e apri index.html nel browser - vedrai solo il titolo',
          {
            text: 'Aggiungi il primo pulsante con onclick inline (per provare)',
            code: `<div class="tastiera">
  <button onclick="console.log('🎵 Do!')">🎵</button>
</div>`,
            language: 'html',
          },
          'Ricarica, apri la console (F12), clicca il pulsante - funziona!',
          {
            text: 'Ora convertiamo a funzione. Aggiungi il tag <script> prima di </body>',
            code: `  <script>
    function suonaDo() {
      console.log("🎵 Do!");
    }
  </script>

</body>`,
            language: 'html',
          },
          {
            text: 'Modifica il pulsante per chiamare la funzione invece del codice inline',
            code: `<div class="tastiera">
  <button onclick="suonaDo()">🎵</button>
</div>`,
            language: 'html',
          },
          'Ricarica e prova - stesso risultato, ma codice più pulito!',
          {
            text: 'Aggiungi altri pulsanti e funzioni per ogni "nota"',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Tastiera Console</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      text-align: center;
      background: #1a1a2e;
      color: white;
    }

    h1 {
      color: #eee;
    }

    .tastiera {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      max-width: 500px;
      margin: 30px auto;
    }

    button {
      padding: 20px 30px;
      font-size: 24px;
      background: #16213e;
      color: white;
      border: 2px solid #0f3460;
      border-radius: 10px;
      cursor: pointer;
    }

    button:hover {
      background: #0f3460;
      transform: scale(1.1);
    }
  </style>
</head>
<body>

  <h1>🎹 Tastiera della Console</h1>
  <p>Apri la console (F12) e premi i pulsanti!</p>

  <div class="tastiera">
    <button onclick="suonaDo()">🎵 Do</button>
    <button onclick="suonaRe()">🎶 Re</button>
    <button onclick="suonaMi()">🎼 Mi</button>
    <button onclick="suonaFa()">🎹 Fa</button>
  </div>

  <script>
    function suonaDo() {
      console.log("🎵 Do!");
    }

    function suonaRe() {
      console.log("🎶 Re!");
    }

    function suonaMi() {
      console.log("🎼 Mi!");
    }

    function suonaFa() {
      console.log("🎹 Fa!");
    }
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [43, 44, 45, 46, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65],
          },
          'Ricarica e prova tutti i pulsanti - ogni uno stampa un messaggio diverso! 🎉',
          {
            text: 'Aggiungi altre note (Sol, La, Si) e un pulsante speciale che stampa più righe',
            code: `<div class="tastiera">
  <button onclick="suonaDo()">🎵 Do</button>
  <button onclick="suonaRe()">🎶 Re</button>
  <button onclick="suonaMi()">🎼 Mi</button>
  <button onclick="suonaFa()">🎹 Fa</button>
  <button onclick="suonaSol()">🎤 Sol</button>
  <button onclick="suonaLa()">🎧 La</button>
  <button onclick="suonaSi()">🎸 Si</button>
  <button onclick="suonaTutte()">🎺 TUTTE!</button>
</div>

<script>
  function suonaDo() {
    console.log("🎵 Do!");
  }

  function suonaRe() {
    console.log("🎶 Re!");
  }

  function suonaMi() {
    console.log("🎼 Mi!");
  }

  function suonaFa() {
    console.log("🎹 Fa!");
  }

  function suonaSol() {
    console.log("🎤 Sol!");
  }

  function suonaLa() {
    console.log("🎧 La!");
  }

  function suonaSi() {
    console.log("🎸 Si!");
  }

  function suonaTutte() {
    console.log("=== 🎺 SCALA COMPLETA ===");
    console.log("🎵 Do!");
    console.log("🎶 Re!");
    console.log("🎼 Mi!");
    console.log("🎹 Fa!");
    console.log("🎤 Sol!");
    console.log("🎧 La!");
    console.log("🎸 Si!");
    console.log("=== 🎺 FINE SCALA ===");
  }
</script>`,
            language: 'html',
          },
          'Salva e prova il pulsante "TUTTE!" - stampa tutta la scala! 🎉'
        ]}
        experiments={[
          'Aggiungi emoji diverse per ogni nota',
          'Crea un pulsante "Pulisci Console" che chiama console.clear()',
          'Aggiungi numeri: ogni pulsante stampa anche un numero (Do=1, Re=2...)',
          'Crea pulsanti per i tuoi hobby (🎮 Gaming, ⚽ Calcio, 🎬 Film...)'
        ]}
      />

      {/* Checklist Finale */}
      <section className="mb-12 mt-12">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✅</span> Hai Completato la Lezione!
          </h2>
          <p className="text-gray-700 mb-4">
            Fantastico! Ora sai collegare pulsanti a funzioni JavaScript! 🎉
          </p>
          <div className="bg-white rounded p-4 border border-green-200">
            <p className="font-bold text-gray-900 mb-2">Cosa hai imparato:</p>
            <ul className="space-y-1 text-gray-700">
              <li>✅ L'attributo <strong>onclick</strong> per reagire ai click</li>
              <li>✅ Cos'è una <strong>funzione</strong> (blocco di istruzioni con nome)</li>
              <li>✅ Come <strong>creare</strong> una funzione con <code className="bg-green-100 px-1 rounded">function nome() {"{}"}</code></li>
              <li>✅ Come <strong>chiamare</strong> una funzione con <code className="bg-green-100 px-1 rounded">nome()</code></li>
              <li>✅ Collegare <strong>pulsanti HTML</strong> a <strong>funzioni JavaScript</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sfida Opzionale */}
      <Challenge
        title="Telecomando della Console"
        description="Crea un 'telecomando' con almeno 8 pulsanti. Ogni pulsante chiama una funzione diversa che stampa qualcosa di unico nella console!"
        requirements={[
          'Almeno 8 pulsanti con design da telecomando',
          'Ogni pulsante chiama una funzione con nome descrittivo',
          'Almeno una funzione deve stampare 3+ righe',
          'Usa emoji diverse per ogni messaggio',
          'Aggiungi un pulsante "Info" che spiega cosa fa il telecomando'
        ]}
        hint="Pensa a un telecomando TV: Play, Pause, Volume+, Volume-, Canale+, Canale-, Muto, Info..."
      />

      {/* Riepilogo Finale */}
      <section className="mt-12 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Ottimo Lavoro!</h2>
        <p className="text-xl mb-4">
          Hai imparato a rendere i pulsanti <strong>interattivi</strong> con le funzioni! 🖱️
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded border-2 border-white border-opacity-30">
          <p className="font-bold mb-2 text-yellow-200">🚀 Comandi JavaScript Imparati: 3</p>
          <ul className="list-disc list-inside space-y-1">
            <li>console.log() - Stampa messaggi nella console (Lezione 1)</li>
            <li>onclick="" - Esegue codice quando clicchi (Lezione 2) ✨ NUOVO</li>
            <li>function nome() {"{ }"} - Crea un blocco di istruzioni (Lezione 2) ✨ NUOVO</li>
          </ul>
          <p className="font-bold mt-4 mb-2 text-yellow-200">💡 Concetti Chiave:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>onclick collega HTML a JavaScript</li>
            <li>Le funzioni organizzano il codice in blocchi riutilizzabili</li>
            <li>Chiamare una funzione = eseguire le sue istruzioni</li>
          </ul>
        </div>
        <p className="text-lg font-semibold mt-4">
          Prossima lezione: <strong>Dialoghi con l'Utente</strong>! Imparerai alert(), prompt() e confirm()! 💬
        </p>
      </section>

      {/* Prossimi Passi */}
      <section className="mb-12 mt-12">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Prossimi Passi
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Nella prossima lezione</strong> imparerai a <strong>comunicare con l'utente</strong>
            usando finestre popup!
          </p>
          <p className="text-gray-700">
            Scoprirai <code className="bg-blue-100 px-2 py-1 rounded">alert()</code> per mostrare messaggi,
            <code className="bg-blue-100 px-2 py-1 rounded">prompt()</code> per fare domande, e
            <code className="bg-blue-100 px-2 py-1 rounded">confirm()</code> per chiedere conferme! 💬
          </p>
        </div>
      </section>

    </LessonLayout>
  );
}
