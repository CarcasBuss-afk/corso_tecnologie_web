import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import JavaScriptDemo from '@/components/didattica/JavaScriptDemo';
import Challenge from '@/components/didattica/Challenge';

export default function Lezione2DialoghiUtente() {
  const lezioni = getLezioniByModuloSlug('modulo-4-javascript');

  return (
    <LessonLayout
      moduloSlug="modulo-4-javascript"
      moduloTitolo="Modulo 4: JavaScript - Interattività"
      lezioni={lezioni}
      lezioneSlug="lezione-2-dialoghi-utente"
      lezioneTitolo="Dialoghi e Variabili"
    >
      <LessonHeader
        numero={2}
        titolo="Dialoghi e Variabili"
        durata="1.5 ore"
        difficolta="facile"
        obiettivi={[
          'Salvare dati in variabili con let e const',
          'Capire i tipi di dati (stringhe, numeri, boolean)',
          'Concatenare stringhe con il simbolo +',
          'Usare alert() per mostrare messaggi',
          'Usare prompt() per chiedere informazioni e salvarle',
          'Usare confirm() per chiedere conferme',
          'Creare conversazioni interattive con l\'utente'
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

      {/* Variabili */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">📦 Variabili - Le Scatole della Memoria</h2>

        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg mb-6">
          <p className="text-xl mb-4">
            Prima di parlare con l'utente, dobbiamo imparare a <strong>salvare</strong> quello che ci dice!
          </p>
          <p className="text-2xl font-bold">
            Le <strong>variabili</strong> sono come scatole dove metti i dati! 📦
          </p>
        </div>

        <p className="text-lg mb-4">
          Immagina di avere tante scatole con etichette: una per il nome, una per l'età, una per la città...
        </p>

        <h3 className="text-2xl font-bold mb-4 mt-8">Come Si Creano le Variabili?</h3>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
          <h4 className="font-bold text-blue-800 mb-3 text-lg">Usa <code className="bg-blue-100 px-2 py-1 rounded">let</code> per creare una scatola</h4>

          <CodeExample
            title="Creare variabili con let"
            code={`// Creo una scatola chiamata "nome" con dentro "Mario"
let nome = "Mario";

// Creo una scatola "eta" con dentro il numero 15
let eta = 15;

// Creo una scatola "citta" con dentro "Roma"
let citta = "Roma";

// Posso usare le scatole per stampare!
console.log(nome);    // Mario
console.log(eta);     // 15`}
            language="javascript"
            showLineNumbers
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <h4 className="font-bold text-gray-900 mb-3">✅ let - Può cambiare</h4>
            <CodeExample
              code={`let punteggio = 0;
punteggio = 10;  // ✅ OK!
punteggio = 20;  // ✅ OK!`}
              language="javascript"
            />
            <p className="text-gray-600 text-sm mt-3">
              Usa <code className="bg-green-100 px-1 rounded">let</code> quando il valore può cambiare
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
            <h4 className="font-bold text-gray-900 mb-3">🔒 const - Non cambia mai</h4>
            <CodeExample
              code={`const SCUOLA = "Liceo";
SCUOLA = "Università"; // ❌ ERRORE!`}
              language="javascript"
            />
            <p className="text-gray-600 text-sm mt-3">
              Usa <code className="bg-purple-100 px-1 rounded">const</code> per valori fissi
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4 mt-8">Tipi di Dati</h3>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
            <div className="text-4xl mb-3">📝</div>
            <h4 className="font-bold text-gray-900 mb-2">Stringhe (testo)</h4>
            <CodeExample
              code={`let nome = "Mario";
let citta = "Roma";
let emoji = "🎉";`}
              language="javascript"
            />
            <p className="text-gray-600 text-sm mt-2">Testo tra virgolette</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <div className="text-4xl mb-3">🔢</div>
            <h4 className="font-bold text-gray-900 mb-2">Numeri</h4>
            <CodeExample
              code={`let eta = 15;
let punteggio = 100;
let prezzo = 9.99;`}
              language="javascript"
            />
            <p className="text-gray-600 text-sm mt-2">Senza virgolette</p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <div className="text-4xl mb-3">✅</div>
            <h4 className="font-bold text-gray-900 mb-2">Boolean (vero/falso)</h4>
            <CodeExample
              code={`let loggato = true;
let premium = false;`}
              language="javascript"
            />
            <p className="text-gray-600 text-sm mt-2">Solo true o false</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4 mt-8">Concatenare (Unire) Stringhe</h3>

        <p className="text-lg mb-4">
          Puoi <strong>unire</strong> più pezzi di testo con il simbolo <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">+</code>:
        </p>

        <CodeExample
          title="Concatenazione con +"
          code={`let nome = "Mario";
let eta = 15;

// Unisco stringhe e variabili
let messaggio = "Ciao " + nome + "!";
console.log(messaggio);  // Ciao Mario!

// Unisco anche numeri
let frase = nome + " ha " + eta + " anni";
console.log(frase);  // Mario ha 15 anni

// Unisco testo ed emoji
let saluto = "Ciao " + nome + "! 👋";
console.log(saluto);  // Ciao Mario! 👋`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mt-6">
          <p className="font-bold text-green-800 mb-2">✅ Ora sei pronto!</p>
          <p className="text-gray-700">
            Adesso che sai salvare dati in variabili e unirli, possiamo iniziare a parlare con l'utente! 🎉
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

        <h3 className="text-xl font-bold mb-3">Esempi di Sintassi</h3>
        <CodeExample
          title="Esempi di alert() - Solo JavaScript"
          code={`// Messaggio semplice
alert("Ciao! Benvenuto nel sito!");

// Messaggio con emoji
alert("🎉 Complimenti! Hai vinto!");

// Con variabili
let nome = "Mario";
alert("Ciao " + nome + "!");  // Ciao Mario!

// Con più variabili
let punteggio = 100;
alert("Bravo " + nome + "! Hai " + punteggio + " punti!");`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-xl font-bold mb-3 mt-8">📄 Esempio Completo - Copia e Prova!</h3>
        <p className="text-gray-700 mb-4">
          Crea un file <code className="bg-gray-100 px-2 py-1 rounded">index.html</code> e copia tutto questo codice per provarlo:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <CodeExample
            title="📄 HTML"
            code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Alert Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Clicca il pulsante!</h2>

  <!-- onclick chiama la function mostraAlert() -->
  <button onclick="mostraAlert()">
    Mostra Alert
  </button>

  <!-- TUTTO il JavaScript sta dentro <script> -->
  <script>
    function mostraAlert() {
      alert('🎉 Ciao! Questo è un alert!');
    }
  </script>
</body>
</html>`}
            language="html"
            showLineNumbers
          />

          <CodeExample
            title="🎨 CSS (style.css)"
            code={`body {
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
}

button:hover {
  transform: scale(1.05);
}`}
            language="css"
            showLineNumbers
          />
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
          <p className="font-bold text-blue-800 mb-3">💡 Dove va il codice JavaScript?</p>
          <p className="text-gray-700 mb-3">
            Ricordi la <strong>Lezione 1</strong>? Il codice JavaScript va SEMPRE dentro i tag{' '}
            <code className="bg-blue-100 px-2 py-1 rounded">&lt;script&gt;</code>!
          </p>
          <p className="text-gray-700 mb-3">
            L'attributo <code className="bg-blue-100 px-1 rounded">onclick="alert('...')"</code> nel pulsante
            serve solo per <strong>chiamare</strong> il codice JavaScript quando clicchi.
          </p>
          <div className="bg-white p-4 rounded border border-blue-200 mb-3">
            <p className="text-sm text-gray-600 mb-2">Esempio:</p>
            <code className="text-xs block text-gray-800">
              &lt;button onclick="alert('Ciao')"&gt; ← Chiama JavaScript<br/>
              &lt;script&gt; ← TUTTO il JavaScript sta qui!<br/>
              &nbsp;&nbsp;// Codice JavaScript...<br/>
              &lt;/script&gt;
            </code>
          </div>
          <p className="text-gray-600 text-sm">
            📝 Nelle prossime lezioni vedremo come mettere JavaScript in un file separato .js!
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="alert() - Esempio Live"
          description="Questo è esattamente il codice qui sopra ↑"
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
    }
    button:hover {
      transform: scale(1.05);
    }
  </style>
</head>
<body>
  <h2>Clicca il pulsante!</h2>
  <button onclick="mostraAlert()">
    Mostra Alert
  </button>

  <script>
    function mostraAlert() {
      alert('🎉 Ciao! Questo è un alert!');
    }
  </script>
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
          <p className="text-sm mt-3">La risposta viene <strong>salvata nella variabile</strong> e puoi riusarla!</p>
        </div>

        <h3 className="text-xl font-bold mb-3">Salvare la Risposta in una Variabile</h3>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded mb-6">
          <p className="font-bold text-purple-800 mb-3">💡 La vera potenza di prompt()</p>
          <p className="text-gray-700 mb-4">
            Puoi <strong>salvare</strong> quello che l'utente scrive in una variabile e usarlo più volte!
          </p>

          <CodeExample
            code={`// PASSO 1: Chiedi e salva in una variabile
let nome = prompt("Come ti chiami?");

// PASSO 2: Usa la variabile quante volte vuoi!
alert("Ciao " + nome + "!");
alert("Benvenuto " + nome + "!");
alert("Sei pronto " + nome + "?");`}
            language="javascript"
            showLineNumbers
          />
        </div>

        <h3 className="text-xl font-bold mb-3">Esempi di Sintassi</h3>
        <CodeExample
          title="Esempi di prompt() - Solo JavaScript"
          code={`// Chiedi il nome e salvalo
let nome = prompt("Come ti chiami?");
alert("Ciao " + nome + "!");

// Chiedi l'età
let eta = prompt("Quanti anni hai?");
alert("Hai " + eta + " anni!");

// Più domande insieme
let nome = prompt("Come ti chiami?");
let citta = prompt("Di dove sei?");
alert("Ciao " + nome + " di " + citta + "!");

// Con valore predefinito (suggerisce "Roma")
let citta = prompt("In che città vivi?", "Roma");`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-xl font-bold mb-3 mt-8">📄 Esempio Completo - Copia e Prova!</h3>
        <p className="text-gray-700 mb-4">
          Questo esempio chiede il nome e lo mostra in 3 alert diversi:
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <CodeExample
            title="📄 HTML"
            code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Prompt Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Clicca per rispondere!</h2>

  <!-- onclick chiama la function chiediNome() -->
  <button onclick="chiediNome()">
    Dimmi il tuo nome
  </button>

  <!-- TUTTO il JavaScript sta dentro <script> -->
  <script>
    function chiediNome() {
      // SALVA la risposta
      let nome = prompt("Come ti chiami?");

      // USA la variabile 3 volte
      alert("Ciao " + nome + "! 👋");
      alert("Benvenuto " + nome + "!");
      alert("Sei pronto " + nome + "?");
    }
  </script>
</body>
</html>`}
            language="html"
            showLineNumbers
          />

          <CodeExample
            title="🎨 CSS (style.css)"
            code={`body {
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
}

button:hover {
  transform: scale(1.05);
}`}
            language="css"
            showLineNumbers
          />
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded mb-6">
          <p className="font-bold text-purple-800 mb-3">💡 Come funziona?</p>
          <p className="text-gray-700 mb-3">
            Il pulsante ha <code className="bg-purple-100 px-1 rounded">onclick="chiediNome()"</code> che{' '}
            <strong>chiama</strong> la function <code className="bg-purple-100 px-1 rounded">chiediNome()</code>.
          </p>
          <p className="text-gray-700 mb-3">
            La function è scritta dentro i tag <code className="bg-purple-100 px-2 py-1 rounded">&lt;script&gt;</code>{' '}
            (come hai imparato nella Lezione 1!). Quando clicchi il pulsante, il codice dentro la function si esegue.
          </p>
          <p className="text-gray-600 text-sm">
            📝 Le funzioni le studieremo bene nella <strong>Lezione 4</strong>. Per ora ricorda: tutto il JavaScript sta dentro <code className="bg-gray-100 px-1 rounded">&lt;script&gt;</code>!
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="prompt() - Esempio Live"
          description="Questo è esattamente il codice qui sopra ↑"
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
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    button:hover {
      transform: scale(1.05);
    }
  </style>
</head>
<body>
  <h2>Clicca per rispondere!</h2>
  <button onclick="chiediNome()">
    Dimmi il tuo nome
  </button>

  <script>
    function chiediNome() {
      // SALVA la risposta
      let nome = prompt("Come ti chiami?");

      // USA la variabile 3 volte
      alert("Ciao " + nome + "! 👋");
      alert("Benvenuto " + nome + "!");
      alert("Sei pronto " + nome + "?");
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
            <p className="font-mono text-lg text-yellow-200">confirm("Sei sicuro?");</p>
          </div>
          <div className="mt-3 grid md:grid-cols-2 gap-3">
            <div className="bg-black bg-opacity-20 p-3 rounded">
              <p className="text-sm text-white"><strong>Se clicca OK:</strong> la risposta è <code className="bg-white bg-opacity-30 px-1 rounded text-gray-900">true</code></p>
            </div>
            <div className="bg-black bg-opacity-20 p-3 rounded">
              <p className="text-sm text-white"><strong>Se clicca Annulla:</strong> la risposta è <code className="bg-white bg-opacity-30 px-1 rounded text-gray-900">false</code></p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempi di Sintassi</h3>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded mb-6">
          <p className="font-bold text-purple-800 mb-3">💡 Salvare la Risposta di confirm()</p>
          <p className="text-gray-700 mb-4">
            confirm() restituisce <code className="bg-purple-100 px-1 rounded">true</code> (OK) o <code className="bg-purple-100 px-1 rounded">false</code> (Annulla).
            Possiamo salvare questa risposta in una variabile e visualizzarla!
          </p>
          <CodeExample
            code={`// SALVA la risposta in una variabile
let vuoleContinuare = confirm("Vuoi continuare?");

// MOSTRA la risposta
alert("Hai cliccato: " + vuoleContinuare);  // true o false`}
            language="javascript"
            showLineNumbers
          />
        </div>

        <CodeExample
          title="Altri Esempi - Solo JavaScript"
          code={`// Esempio 1: Conferma e mostra il risultato
let risposta = confirm("Sei pronto?");
alert("Risposta: " + risposta);  // true o false

// Esempio 2: Salva e concatena con messaggio
let vuoleCancellare = confirm("Vuoi davvero cancellare?");
alert("Hai scelto: " + vuoleCancellare);

// Esempio 3: Usa variabili con concatenazione
let nome = "Mario";
let conferma = confirm("Ciao " + nome + ", vuoi continuare?");
alert(nome + " ha risposto: " + conferma);`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-xl font-bold mb-3 mt-8">📄 Esempio Completo - Copia e Prova!</h3>
        <p className="text-gray-700 mb-4">
          Questo esempio chiede conferma e mostra cosa hai scelto (true/false):
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <CodeExample
            title="📄 HTML"
            code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Confirm Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Clicca per confermare!</h2>

  <!-- onclick chiama la function chiediConferma() -->
  <button onclick="chiediConferma()">
    Sei pronto?
  </button>

  <!-- TUTTO il JavaScript sta dentro <script> -->
  <script>
    function chiediConferma() {
      // SALVA la risposta
      let risposta = confirm("Sei pronto per iniziare?");

      // MOSTRA la risposta
      alert("Hai scelto: " + risposta);
    }
  </script>
</body>
</html>`}
            language="html"
            showLineNumbers
          />

          <CodeExample
            title="🎨 CSS (style.css)"
            code={`body {
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
}

button:hover {
  transform: scale(1.05);
}`}
            language="css"
            showLineNumbers
          />
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="confirm() - Esempio Live"
          description="Questo è esattamente il codice qui sopra ↑"
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
      background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    button:hover {
      transform: scale(1.05);
    }
  </style>
</head>
<body>
  <h2>Clicca per confermare!</h2>
  <button onclick="chiediConferma()">
    Sei pronto?
  </button>

  <script>
    function chiediConferma() {
      // SALVA la risposta
      let risposta = confirm("Sei pronto per iniziare?");

      // MOSTRA la risposta
      alert("Hai scelto: " + risposta);
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
          La vera magia succede quando <strong>combini</strong> questi 3 comandi con le <strong>variabili</strong> per creare conversazioni!
        </p>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">🌟 Il Potere delle Variabili</h3>
          <p className="text-lg mb-3">
            Salvando i dati in variabili, puoi riusarli tante volte senza chiedere di nuovo!
          </p>
          <div className="bg-black bg-opacity-30 p-4 rounded border-2 border-white border-opacity-30">
            <p className="font-mono text-yellow-200">let nome = prompt("Nome?");</p>
            <p className="font-mono text-yellow-200">alert("Ciao " + nome);</p>
            <p className="font-mono text-yellow-200">alert("Benvenuto " + nome);</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio JavaScript</h3>
        <CodeExample
          title="Conversazione con alert, prompt e confirm"
          code={`// 1. Saluta l'utente
alert("Benvenuto al quiz! 🎯");

// 2. SALVA il nome in una variabile
let nome = prompt("Come ti chiami?");

// 3. USA il nome salvato più volte
alert("Ciao " + nome + "! 👋");
alert("Benvenuto " + nome + "!");

// 4. FAI una domanda e SALVA la risposta
let risposta1 = prompt("Quanto fa 5 + 3?");

// 5. MOSTRA la risposta data
alert(nome + " ha risposto: " + risposta1);

// 6. CHIEDI conferma e SALVA
let vuoleContinuare = confirm("Vuoi continuare " + nome + "?");

// 7. MOSTRA la scelta
alert(nome + " ha scelto: " + vuoleContinuare);
alert("Grazie " + nome + "! 🎉");`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-xl font-bold mb-3 mt-8">📄 Quiz Completo - Copia e Prova!</h3>
        <p className="text-gray-700 mb-4">
          Questo quiz usa tutti e 3 i metodi insieme: alert(), prompt() e confirm()
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <CodeExample
            title="📄 HTML"
            code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Quiz Interattivo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>🎯 Quiz Matematico</h1>
    <p>Clicca per iniziare!</p>

    <!-- onclick chiama la function iniziaQuiz() -->
    <button onclick="iniziaQuiz()">
      Inizia Quiz
    </button>
  </div>

  <!-- TUTTO il JavaScript sta dentro <script> -->
  <script>
    function iniziaQuiz() {
      alert("Benvenuto! 🎯");

      let nome = prompt("Come ti chiami?");
      alert("Ciao " + nome + "! 👋");
      alert("Benvenuto " + nome + "!");

      let risp1 = prompt("Quanto fa 5 + 3?");
      alert(nome + " ha risposto: " + risp1);

      let vuole = confirm("Vuoi continuare " + nome + "?");
      alert(nome + " ha scelto: " + vuole);

      alert("Grazie " + nome + "! 🎉");
    }
  </script>
</body>
</html>`}
            language="html"
            showLineNumbers
          />

          <CodeExample
            title="🎨 CSS (style.css)"
            code={`body {
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
}

button:hover {
  transform: scale(1.05);
}`}
            language="css"
            showLineNumbers
          />
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi il Quiz Completo!</h3>
        <JavaScriptDemo
          title="Quiz Interattivo - Esempio Live"
          description="Questo è esattamente il codice qui sopra ↑"
          height="500px"
          code={`<!DOCTYPE html>
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
    }
    button:hover {
      transform: scale(1.05);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🎯 Quiz Matematico</h1>
    <p>Clicca per iniziare!</p>
    <button onclick="iniziaQuiz()">
      Inizia Quiz
    </button>
  </div>

  <script>
    function iniziaQuiz() {
      alert("Benvenuto! 🎯");

      let nome = prompt("Come ti chiami?");
      alert("Ciao " + nome + "! 👋");
      alert("Benvenuto " + nome + "!");

      let risp1 = prompt("Quanto fa 5 + 3?");
      alert(nome + " ha risposto: " + risp1);

      let vuole = confirm("Vuoi continuare " + nome + "?");
      alert(nome + " ha scelto: " + vuole);

      alert("Grazie " + nome + "! 🎉");
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
            text: 'SALVA il nome in una variabile e poi usalo nel saluto',
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

    // SALVA il nome in una variabile
    let nome = prompt("Come ti chiami?");

    // USA la variabile per salutare
    alert("Ciao " + nome + "! Iniziamo! 🚀");
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [17, 18, 19, 20],
          },
          'Ricarica (F5) - Scrivi il tuo nome nel prompt e vedrai il saluto personalizzato!',
          {
            text: 'SALVA la risposta alla prima domanda in una variabile',
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

    // SALVA il nome
    let nome = prompt("Come ti chiami?");

    // USA la variabile
    alert("Ciao " + nome + "! Iniziamo! 🚀");

    // SALVA la risposta alla prima domanda
    let risposta1 = prompt("Domanda 1: Quanto fa 7 + 8?");
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [23, 24],
          },
          {
            text: 'Mostra la risposta usando la variabile e personalizza con il nome',
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

    // SALVA il nome
    let nome = prompt("Come ti chiami?");

    // USA la variabile
    alert("Ciao " + nome + "! Iniziamo! 🚀");

    // SALVA la risposta
    let risposta1 = prompt("Domanda 1: Quanto fa 7 + 8?");

    // MOSTRA la risposta usando la variabile
    alert(nome + " ha risposto: " + risposta1);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [26, 27],
          },
          'Ricarica e scrivi la tua risposta - vedrai il quiz mostrarti cosa hai scritto!',
          {
            text: 'Aggiungi una seconda domanda con variabile',
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

    // SALVA il nome
    let nome = prompt("Come ti chiami?");
    alert("Ciao " + nome + "! Iniziamo! 🚀");

    // Prima domanda
    let risposta1 = prompt("Domanda 1: Quanto fa 7 + 8?");
    alert(nome + " ha risposto: " + risposta1);

    // SALVA la seconda risposta
    let risposta2 = prompt("Domanda 2: Quanti pianeti ha il sistema solare?");
    alert(nome + " ha risposto: " + risposta2);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [25, 26, 27],
          },
          {
            text: 'SALVA la conferma in una variabile e personalizza con il nome',
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

    // SALVA il nome
    let nome = prompt("Come ti chiami?");
    alert("Ciao " + nome + "! Iniziamo! 🚀");

    // Prima domanda
    let risposta1 = prompt("Domanda 1: Quanto fa 7 + 8?");
    alert(nome + " ha risposto: " + risposta1);

    // Seconda domanda
    let risposta2 = prompt("Domanda 2: Quanti pianeti ha il sistema solare?");
    alert(nome + " ha risposto: " + risposta2);

    // Messaggio finale con nome
    alert("Quiz completato " + nome + "! Grazie! 🎊");

    // SALVA la conferma
    let vuoleRigiocare = confirm("Vuoi rifare il quiz " + nome + "?");

    // MOSTRA la scelta
    alert(nome + " ha scelto: " + vuoleRigiocare);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [32, 33, 34, 35, 36],
          },
          'Ricarica e completa tutto il quiz! 🎉',
          'Prova a cliccare OK e Annulla nel confirm finale - vedrai true o false!'
        ]}
        experiments={[
          'Aggiungi una terza domanda (di cultura generale, sport, o quello che vuoi!)',
          'Usa il nome della persona in tutti i messaggi per personalizzare',
          'Aggiungi più emoji nei messaggi per renderlo più divertente',
          'Cosa succede se clicchi "Annulla" nel primo prompt? (prova!)',
          'Prova a salvare più risposte e mostrarle tutte insieme alla fine'
        ]}
      />

      {/* Checklist Finale */}
      <section className="mb-12 mt-12">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✅</span> Hai Completato la Lezione!
          </h2>
          <p className="text-gray-700 mb-4">
            Fantastico! Ora sai salvare dati e creare conversazioni interattive con JavaScript! 🎉
          </p>
          <div className="bg-white rounded p-4 border border-green-200">
            <p className="font-bold text-gray-900 mb-2">Cosa hai imparato:</p>
            <ul className="space-y-1 text-gray-700">
              <li>✅ Creare variabili con <strong>let</strong> e <strong>const</strong></li>
              <li>✅ Capire i tipi di dati: stringhe, numeri, boolean</li>
              <li>✅ Concatenare stringhe con il simbolo <strong>+</strong></li>
              <li>✅ Salvare dati in variabili e riusarli</li>
              <li>✅ Usare alert() per mostrare messaggi</li>
              <li>✅ Usare prompt() per fare domande e salvare le risposte</li>
              <li>✅ Usare confirm() per chiedere OK/Annulla</li>
              <li>✅ Combinare variabili e dialoghi per creare conversazioni personalizzate</li>
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
          'Almeno 5 domande con prompt() e salva tutte le risposte in variabili',
          'Saluto iniziale con alert() che chiede il nome',
          'Mostra ogni risposta usando alert() con il nome personalizzato',
          'Alla fine, chiedi con confirm() se vuole rifare il quiz',
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
