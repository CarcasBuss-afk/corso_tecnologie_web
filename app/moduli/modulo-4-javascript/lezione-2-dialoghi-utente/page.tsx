import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import LessonPreview from '@/components/didattica/LessonPreview';
import Challenge from '@/components/didattica/Challenge';

export default function Lezione2DialoghiUtente() {
  const lezioni = getLezioniByModuloSlug('modulo-4-javascript');

  return (
    <LessonLayout
      moduloSlug="modulo-4-javascript"
      moduloTitolo="Modulo 4: JavaScript - Interattività"
      lezioni={lezioni}
      lezioneSlug="lezione-2-dialoghi-utente"
      lezioneTitolo="Dialoghi con l'Utente"
    >
      <LessonHeader
        numero={2}
        titolo="Dialoghi con l'Utente"
        durata="1.5 ore"
        difficolta="facile"
        obiettivi={[
          'Usare alert() per mostrare messaggi all\'utente',
          'Usare prompt() per chiedere informazioni',
          'Usare confirm() per chiedere conferme',
          'Salvare le risposte dell\'utente',
          'Creare il tuo primo quiz interattivo'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Parlare con l'Utente 💬</h2>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-lg mb-6">
          <p className="text-xl mb-4">
            Nella lezione scorsa hai imparato a <strong>stampare messaggi nella console</strong>.
          </p>
          <p className="text-2xl font-bold">
            Ora imparerai a <strong>parlare DIRETTAMENTE con l'utente</strong>! 🗣️
          </p>
        </div>

        <p className="text-lg mb-4">
          Pensa a una conversazione su WhatsApp o TikTok: tu scrivi un messaggio, l'altra persona risponde,
          tu fai una domanda... È un <strong>dialogo</strong>!
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-bold text-gray-900 mb-2">alert()</h3>
            <p className="text-gray-600 text-sm">
              "Ho qualcosa da dirti!" - Mostra un messaggio
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
            <div className="text-4xl mb-3">❓</div>
            <h3 className="font-bold text-gray-900 mb-2">prompt()</h3>
            <p className="text-gray-600 text-sm">
              "Come ti chiami?" - Fa una domanda
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="font-bold text-gray-900 mb-2">confirm()</h3>
            <p className="text-gray-600 text-sm">
              "Sei sicuro?" - Chiede OK/Annulla
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
          <h3 className="font-bold text-yellow-800 mb-2">💡 Differenza con console.log()</h3>
          <p className="text-gray-700 mb-2">
            <code className="bg-yellow-100 px-2 py-1 rounded">console.log()</code> stampa nella console (solo developer)
          </p>
          <p className="text-gray-700">
            <code className="bg-yellow-100 px-2 py-1 rounded">alert()</code>, <code className="bg-yellow-100 px-2 py-1 rounded">prompt()</code>,
            <code className="bg-yellow-100 px-2 py-1 rounded">confirm()</code> mostrano finestre che <strong>tutti vedono</strong>!
          </p>
        </div>
      </section>

      {/* alert() */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">💬 alert() - Mostra un Messaggio</h2>

        <p className="text-lg mb-4">
          <code className="bg-gray-100 px-2 py-1 rounded text-blue-600 font-mono">alert()</code>
          {' '}mostra una finestra popup con un messaggio. L'utente deve cliccare OK per continuare.
        </p>

        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Come Funziona</h3>
          <p className="text-lg mb-3">
            È come quando un'app ti manda una <strong>notifica importante</strong> e devi cliccare OK.
          </p>
          <div className="bg-black bg-opacity-30 p-4 rounded border-2 border-white border-opacity-30">
            <p className="font-mono text-lg text-yellow-200">alert("Il tuo messaggio");</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempi Pratici</h3>
        <CodeExample
          title="Esempi di alert()"
          code={`// Messaggio semplice
alert("Ciao! Benvenuto nel sito!");

// Messaggio con emoji
alert("🎉 Complimenti! Hai vinto!");

// Più righe (usa \\n per andare a capo)
alert("Questo è il tuo punteggio:\\n100 punti!");

// Con calcoli
alert("Hai " + (15 * 365) + " giorni!");`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <LessonPreview
          title="alert() - Esempio Live"
          html={`<!DOCTYPE html>
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
      transition: transform 0.2s;
    }
    button:hover {
      transform: scale(1.05);
    }
  </style>
</head>
<body>
  <h2>Clicca il pulsante!</h2>
  <button onclick="alert('🎉 Ciao! Questo è un alert!')">
    Mostra Alert
  </button>
</body>
</html>`}
        />

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mt-6">
          <p className="font-bold text-green-800 mb-2">✅ Quando Usare alert()</p>
          <ul className="text-gray-700 space-y-2 ml-4">
            <li>• Per mostrare messaggi importanti</li>
            <li>• Per salutare l'utente</li>
            <li>• Per mostrare risultati di un quiz</li>
            <li>• Per conferme: "Dati salvati!"</li>
          </ul>
        </div>
      </section>

      {/* prompt() */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">❓ prompt() - Fai una Domanda</h2>

        <p className="text-lg mb-4">
          <code className="bg-gray-100 px-2 py-1 rounded text-blue-600 font-mono">prompt()</code>
          {' '}mostra una finestra che <strong>chiede qualcosa all'utente</strong>. L'utente può scrivere la risposta!
        </p>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Come Funziona</h3>
          <p className="text-lg mb-3">
            È come quando un sito ti chiede il tuo nome o email per registrarti.
          </p>
          <div className="bg-black bg-opacity-30 p-4 rounded border-2 border-white border-opacity-30">
            <p className="font-mono text-lg text-yellow-200">let risposta = prompt("La domanda");</p>
          </div>
          <p className="text-sm mt-3">La risposta viene <strong>salvata</strong> nella variabile!</p>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempi Pratici</h3>
        <CodeExample
          title="Esempi di prompt()"
          code={`// Chiede il nome
let nome = prompt("Come ti chiami?");

// Chiede l'età
let eta = prompt("Quanti anni hai?");

// Con valore predefinito
let citta = prompt("In che città vivi?", "Roma");

// Usa la risposta
let colore = prompt("Qual è il tuo colore preferito?");
alert("Bello il " + colore + "!");`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <LessonPreview
          title="prompt() - Esempio Live"
          html={`<!DOCTYPE html>
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
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s;
    }
    button:hover {
      transform: scale(1.05);
    }
    #risultato {
      margin-top: 20px;
      font-size: 20px;
      font-weight: bold;
      color: #f5576c;
    }
  </style>
</head>
<body>
  <h2>Clicca per rispondere!</h2>
  <button onclick="chiediNome()">
    Dimmi il tuo nome
  </button>
  <div id="risultato"></div>

  <script>
    function chiediNome() {
      let nome = prompt("Come ti chiami?");
      if (nome) {
        document.getElementById('risultato').innerHTML = "Ciao " + nome + "! 👋";
      }
    }
  </script>
</body>
</html>`}
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mt-6">
          <h3 className="font-bold text-yellow-800 mb-2">⚠️ Attenzione!</h3>
          <p className="text-gray-700 mb-2">
            Se l'utente clicca "Annulla", prompt() restituisce <code className="bg-yellow-100 px-1 rounded">null</code>.
          </p>
          <p className="text-gray-700">
            Se l'utente non scrive nulla e clicca OK, restituisce una stringa vuota <code className="bg-yellow-100 px-1 rounded">""</code>.
          </p>
        </div>
      </section>

      {/* confirm() */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">✅ confirm() - Chiedi Conferma</h2>

        <p className="text-lg mb-4">
          <code className="bg-gray-100 px-2 py-1 rounded text-blue-600 font-mono">confirm()</code>
          {' '}mostra una finestra con due pulsanti: <strong>OK</strong> e <strong>Annulla</strong>.
        </p>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Come Funziona</h3>
          <p className="text-lg mb-3">
            È come quando vuoi cancellare un file e il computer chiede: "Sei sicuro?"
          </p>
          <div className="bg-black bg-opacity-30 p-4 rounded border-2 border-white border-opacity-30">
            <p className="font-mono text-lg text-yellow-200">let risposta = confirm("Sei sicuro?");</p>
          </div>
          <div className="mt-3 grid md:grid-cols-2 gap-3">
            <div className="bg-black bg-opacity-20 p-3 rounded">
              <p className="text-sm"><strong>Se clicca OK:</strong> restituisce <code className="bg-white bg-opacity-30 px-1 rounded">true</code></p>
            </div>
            <div className="bg-black bg-opacity-20 p-3 rounded">
              <p className="text-sm"><strong>Se clicca Annulla:</strong> restituisce <code className="bg-white bg-opacity-30 px-1 rounded">false</code></p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempi Pratici</h3>
        <CodeExample
          title="Esempi di confirm()"
          code={`// Chiede conferma
let sicuro = confirm("Vuoi davvero cancellare tutto?");

// Controlla la risposta
if (sicuro === true) {
  alert("Cancellato!");
} else {
  alert("Operazione annullata");
}

// Versione corta (true/false è già booleano)
if (confirm("Vuoi continuare?")) {
  alert("Ok, continuiamo!");
}`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <LessonPreview
          title="confirm() - Esempio Live"
          html={`<!DOCTYPE html>
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
      background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s;
    }
    button:hover {
      transform: scale(1.05);
    }
    #risultato {
      margin-top: 20px;
      font-size: 20px;
      font-weight: bold;
      color: #43e97b;
    }
  </style>
</head>
<body>
  <h2>Clicca per confermare!</h2>
  <button onclick="chiediConferma()">
    Sei pronto?
  </button>
  <div id="risultato"></div>

  <script>
    function chiediConferma() {
      let risposta = confirm("Sei pronto per iniziare?");
      if (risposta) {
        document.getElementById('risultato').innerHTML = "🎉 Perfetto! Iniziamo!";
      } else {
        document.getElementById('risultato').innerHTML = "😊 Va bene, aspetto...";
      }
    }
  </script>
</body>
</html>`}
        />

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mt-6">
          <p className="font-bold text-blue-800 mb-2">💡 Quando Usare confirm()</p>
          <ul className="text-gray-700 space-y-2 ml-4">
            <li>• Prima di cancellare dati importanti</li>
            <li>• Per chiedere "Vuoi davvero uscire?"</li>
            <li>• Per confermare acquisti o azioni</li>
            <li>• Ogni volta che serve un Sì/No</li>
          </ul>
        </div>
      </section>

      {/* Combinare i 3 comandi */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎯 Combinare alert, prompt e confirm</h2>

        <p className="text-lg mb-6">
          La vera magia succede quando <strong>combini</strong> questi 3 comandi per creare conversazioni!
        </p>

        <CodeExample
          title="Esempio Completo - Quiz Interattivo"
          code={`// 1. Saluta l'utente
alert("Benvenuto al quiz! 🎯");

// 2. Chiedi il nome
let nome = prompt("Come ti chiami?");

// 3. Saluta per nome
alert("Ciao " + nome + "! Pronto per il quiz?");

// 4. Prima domanda
let risposta = prompt("Quanto fa 5 + 3?");

// 5. Controlla risposta
if (risposta === "8") {
  alert("✅ Esatto " + nome + "! Bravo!");
} else {
  alert("❌ Sbagliato! La risposta è 8");
}

// 6. Chiedi se vuole continuare
if (confirm("Vuoi fare un'altra domanda?")) {
  alert("Ok! Prossima domanda...");
} else {
  alert("Va bene, alla prossima!");
}`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi il Quiz Completo!</h3>
        <LessonPreview
          title="Quiz Interattivo Completo"
          html={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .container {
      background: white;
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    button {
      padding: 20px 40px;
      font-size: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: transform 0.2s;
    }
    button:hover {
      transform: scale(1.05);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 Quiz Matematico</h1>
    <p>Clicca per iniziare il quiz!</p>
    <button onclick="iniziaQuiz()">
      Inizia Quiz
    </button>
  </div>

  <script>
    function iniziaQuiz() {
      // Saluta
      alert("Benvenuto al quiz matematico! 🎯");

      // Chiedi nome
      let nome = prompt("Come ti chiami?");

      if (!nome) {
        alert("Ok, ci vediamo!");
        return;
      }

      // Saluta per nome
      alert("Ciao " + nome + "! Pronto per il quiz?");

      // Prima domanda
      let risposta1 = prompt("Quanto fa 5 + 3?");

      if (risposta1 === "8") {
        alert("✅ Esatto " + nome + "! Bravo!");
      } else {
        alert("❌ Sbagliato! La risposta era 8");
      }

      // Chiedi se vuole continuare
      if (confirm("Vuoi fare un'altra domanda?")) {
        let risposta2 = prompt("Quanto fa 10 - 4?");
        if (risposta2 === "6") {
          alert("✅ Fantastico " + nome + "!");
        } else {
          alert("❌ La risposta era 6");
        }
        alert("Grazie per aver giocato " + nome + "! 🎉");
      } else {
        alert("Va bene " + nome + ", alla prossima!");
      }
    }
  </script>
</body>
</html>`}
        />
      </section>

      {/* Esercizio Guidato */}
      <Exercise
        title="🎯 Esercizio Guidato: Il Tuo Quiz Personalizzato"
        steps={[
          'Crea una cartella "quiz-interattivo" in VS Code',
          'Dentro la cartella, crea un file "index.html"',
          {
            text: 'Scrivi la struttura HTML base',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Mio Quiz</title>
</head>
<body>

  <h1>Quiz Interattivo</h1>
  <p>Apri la pagina e il quiz partirà automaticamente!</p>

</body>
</html>`,
            language: 'html',
          },
          'Salva (Ctrl+S) e apri index.html nel browser - per ora non succede nulla',
          {
            text: 'Aggiungi il tag <script> e saluta l\'utente con alert()',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Mio Quiz</title>
</head>
<body>

  <h1>Quiz Interattivo</h1>
  <p>Apri la pagina e il quiz partirà automaticamente!</p>

  <script>
    // Saluto iniziale
    alert("Benvenuto al mio quiz! 🎉");
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [12, 13, 14, 15],
          },
          'Ricarica (F5) - Dovresti vedere il popup di benvenuto!',
          {
            text: 'Chiedi il nome dell\'utente con prompt() e salvalo',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Mio Quiz</title>
</head>
<body>

  <h1>Quiz Interattivo</h1>
  <p>Apri la pagina e il quiz partirà automaticamente!</p>

  <script>
    // Saluto iniziale
    alert("Benvenuto al mio quiz! 🎉");

    // Chiedi il nome
    let nome = prompt("Come ti chiami?");
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [17, 18],
          },
          'Ricarica (F5) - Scrivi il tuo nome nel prompt!',
          {
            text: 'Usa il nome per un saluto personalizzato',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Mio Quiz</title>
</head>
<body>

  <h1>Quiz Interattivo</h1>
  <p>Apri la pagina e il quiz partirà automaticamente!</p>

  <script>
    // Saluto iniziale
    alert("Benvenuto al mio quiz! 🎉");

    // Chiedi il nome
    let nome = prompt("Come ti chiami?");

    // Saluto personalizzato
    alert("Ciao " + nome + "! Iniziamo! 🚀");
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [20, 21],
          },
          'Ricarica - Dovresti vedere il tuo nome nel secondo alert!',
          {
            text: 'Aggiungi la prima domanda del quiz',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Mio Quiz</title>
</head>
<body>

  <h1>Quiz Interattivo</h1>
  <p>Apri la pagina e il quiz partirà automaticamente!</p>

  <script>
    // Saluto iniziale
    alert("Benvenuto al mio quiz! 🎉");

    // Chiedi il nome
    let nome = prompt("Come ti chiami?");

    // Saluto personalizzato
    alert("Ciao " + nome + "! Iniziamo! 🚀");

    // Prima domanda
    let risposta1 = prompt("Domanda 1: Quanto fa 7 + 8?");
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [23, 24],
          },
          {
            text: 'Controlla la risposta e mostra se è giusta o sbagliata',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Mio Quiz</title>
</head>
<body>

  <h1>Quiz Interattivo</h1>
  <p>Apri la pagina e il quiz partirà automaticamente!</p>

  <script>
    // Saluto iniziale
    alert("Benvenuto al mio quiz! 🎉");

    // Chiedi il nome
    let nome = prompt("Come ti chiami?");

    // Saluto personalizzato
    alert("Ciao " + nome + "! Iniziamo! 🚀");

    // Prima domanda
    let risposta1 = prompt("Domanda 1: Quanto fa 7 + 8?");

    // Controlla risposta
    if (risposta1 === "15") {
      alert("✅ Esatto! Bravo " + nome + "!");
    } else {
      alert("❌ Sbagliato! La risposta è 15");
    }
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [26, 27, 28, 29, 30, 31],
          },
          'Ricarica e prova a rispondere 15, poi prova con una risposta sbagliata!',
          {
            text: 'Aggiungi una seconda domanda',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Mio Quiz</title>
</head>
<body>

  <h1>Quiz Interattivo</h1>
  <p>Apri la pagina e il quiz partirà automaticamente!</p>

  <script>
    // Saluto iniziale
    alert("Benvenuto al mio quiz! 🎉");

    // Chiedi il nome
    let nome = prompt("Come ti chiami?");

    // Saluto personalizzato
    alert("Ciao " + nome + "! Iniziamo! 🚀");

    // Prima domanda
    let risposta1 = prompt("Domanda 1: Quanto fa 7 + 8?");

    // Controlla risposta
    if (risposta1 === "15") {
      alert("✅ Esatto! Bravo " + nome + "!");
    } else {
      alert("❌ Sbagliato! La risposta è 15");
    }

    // Seconda domanda
    let risposta2 = prompt("Domanda 2: Quanti pianeti ha il sistema solare?");

    if (risposta2 === "8") {
      alert("✅ Corretto! Ottimo!");
    } else {
      alert("❌ Sbagliato! Sono 8 pianeti");
    }
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [33, 34, 35, 36, 37, 38, 39, 40],
          },
          {
            text: 'Alla fine, chiedi con confirm() se vuole rifare il quiz',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Mio Quiz</title>
</head>
<body>

  <h1>Quiz Interattivo</h1>
  <p>Apri la pagina e il quiz partirà automaticamente!</p>

  <script>
    // Saluto iniziale
    alert("Benvenuto al mio quiz! 🎉");

    // Chiedi il nome
    let nome = prompt("Come ti chiami?");

    // Saluto personalizzato
    alert("Ciao " + nome + "! Iniziamo! 🚀");

    // Prima domanda
    let risposta1 = prompt("Domanda 1: Quanto fa 7 + 8?");

    if (risposta1 === "15") {
      alert("✅ Esatto! Bravo " + nome + "!");
    } else {
      alert("❌ Sbagliato! La risposta è 15");
    }

    // Seconda domanda
    let risposta2 = prompt("Domanda 2: Quanti pianeti ha il sistema solare?");

    if (risposta2 === "8") {
      alert("✅ Corretto! Ottimo!");
    } else {
      alert("❌ Sbagliato! Sono 8 pianeti");
    }

    // Messaggio finale
    alert("Quiz completato! Grazie " + nome + "! 🎊");

    // Chiedi se vuole rigiocare
    if (confirm("Vuoi rifare il quiz?")) {
      alert("Ricarica la pagina (F5) per giocare ancora!");
    } else {
      alert("Ok, alla prossima! 👋");
    }
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [41, 42, 43, 44, 45, 46, 47, 48, 49],
          },
          'Ricarica e completa tutto il quiz! 🎉',
          'Prova a cliccare OK e Annulla nel confirm finale per vedere i due messaggi diversi'
        ]}
        experiments={[
          'Aggiungi una terza domanda (di cultura generale, sport, o quello che vuoi!)',
          'Cambia i messaggi di risposta giusta/sbagliata con emoji diverse',
          'Aggiungi più emoji nei messaggi per renderlo più divertente',
          'Cosa succede se clicchi "Annulla" nel primo prompt? (prova!)',
          'Conta quante risposte giuste ha dato (useremo le variabili nella prossima lezione!)'
        ]}
      />

      {/* Checklist Finale */}
      <section className="mb-12 mt-12">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✅</span> Hai Completato la Lezione!
          </h2>
          <p className="text-gray-700 mb-4">
            Fantastico! Ora sai creare conversazioni interattive con JavaScript! 🎉
          </p>
          <div className="bg-white rounded p-4 border border-green-200">
            <p className="font-bold text-gray-900 mb-2">Cosa hai imparato:</p>
            <ul className="space-y-1 text-gray-700">
              <li>✅ Usare alert() per mostrare messaggi</li>
              <li>✅ Usare prompt() per fare domande</li>
              <li>✅ Usare confirm() per chiedere OK/Annulla</li>
              <li>✅ Salvare risposte dell'utente in variabili</li>
              <li>✅ Combinare i 3 comandi per creare dialoghi</li>
              <li>✅ Creare un quiz interattivo completo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sfida Opzionale */}
      <Challenge
        title="Quiz a Tema Libero"
        description="Crea un quiz di almeno 5 domande su un tema che ti piace: sport, videogiochi, musica, film, scuola... Usa alert(), prompt() e confirm()!"
        requirements={[
          'Almeno 5 domande con prompt()',
          'Saluto iniziale con alert() che chiede il nome',
          'Controlla ogni risposta e mostra se è giusta o sbagliata',
          'Alla fine, chiedi con confirm() se vuole vedere il punteggio',
          'Usa emoji per rendere il quiz più divertente 🎮'
        ]}
        hint="Pensa a un tema che conosci bene! Esempio: quiz su Fortnite, quiz su Marvel, quiz sulla tua classe..."
      />

      {/* Prossimi Passi */}
      <section className="mb-12">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Prossimi Passi
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Nella prossima lezione</strong> imparerai a <strong>cambiare la pagina HTML</strong> con JavaScript!
            Potrai modificare titoli, paragrafi, colori... tutto senza ricaricare la pagina!
          </p>
          <p className="text-gray-700">
            Useremo <code className="bg-blue-100 px-2 py-1 rounded">getElementById()</code> e
            <code className="bg-blue-100 px-2 py-1 rounded">innerHTML</code> per controllare la pagina come un <strong>superpotere</strong>! 💪
          </p>
        </div>
      </section>

    </LessonLayout>
  );
}
