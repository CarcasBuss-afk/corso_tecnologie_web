import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import JavaScriptDemo from '@/components/didattica/JavaScriptDemo';
import Challenge from '@/components/didattica/Challenge';

export default function Lezione4CambiarePagina() {
  const lezioni = getLezioniByModuloSlug('modulo-4-javascript');

  return (
    <LessonLayout
      moduloSlug="modulo-4-javascript"
      moduloTitolo="Modulo 4: JavaScript - Interattività"
      lezioni={lezioni}
      lezioneSlug="lezione-4-cambiare-pagina"
      lezioneTitolo="Cambiare la Pagina HTML"
    >
      <LessonHeader
        numero={4}
        titolo="Cambiare la Pagina HTML"
        durata="1.5 ore"
        difficolta="facile"
        obiettivi={[
          'Capire cos\'è il DOM (Document Object Model)',
          'Usare getElementById() per trovare qualsiasi elemento, non solo i pulsanti',
          'Cambiare il testo con innerHTML e textContent',
          'Modificare la pagina senza ricaricarla'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Il Superpotere di JavaScript!</h2>

        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg mb-6">
          <p className="text-xl mb-4">
            Finora hai usato <code className="bg-white bg-opacity-20 px-2 py-1 rounded">alert()</code> e <code className="bg-white bg-opacity-20 px-2 py-1 rounded">prompt()</code> per comunicare...
          </p>
          <p className="text-2xl font-bold">
            Ora imparerai a <strong>cambiare la pagina HTML</strong> in tempo reale! 🎨
          </p>
        </div>

        <p className="text-lg mb-4">
          Questo è il vero superpotere di JavaScript: <strong>modificare quello che l'utente vede</strong> senza ricaricare la pagina!
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <div className="text-4xl mb-3">📝</div>
            <h3 className="font-bold text-gray-900 mb-2">Cambiare Testi</h3>
            <p className="text-gray-600 text-sm">
              Modificare titoli, paragrafi, pulsanti...
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
            <div className="text-4xl mb-3">🔄</div>
            <h3 className="font-bold text-gray-900 mb-2">Aggiornare Contenuti</h3>
            <p className="text-gray-600 text-sm">
              Mostrare punteggi, messaggi, risultati...
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-gray-900 mb-2">Senza Ricaricare</h3>
            <p className="text-gray-600 text-sm">
              Tutto accade istantaneamente!
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
          <h3 className="font-bold text-yellow-800 mb-2">💡 Esempi nel Mondo Reale</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong>Instagram:</strong> Il numero di like cambia quando clicchi ❤️</li>
            <li>• <strong>YouTube:</strong> I commenti appaiono senza ricaricare</li>
            <li>• <strong>Amazon:</strong> Il carrello si aggiorna quando aggiungi prodotti</li>
          </ul>
        </div>
      </section>

      {/* Cos'è il DOM */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🌳 Cos'è il DOM?</h2>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-lg mb-6">
          <h3 className="text-2xl font-bold mb-3">DOM = Document Object Model</h3>
          <p className="text-xl mb-4">
            Il DOM è come una <strong>mappa della tua pagina HTML</strong> che JavaScript può leggere e modificare.
          </p>
        </div>

        <p className="text-lg mb-4">
          Immagina la tua pagina HTML come un <strong>albero genealogico</strong>:
        </p>

        <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 mb-6">
          <div className="font-mono text-sm">
            <div className="text-center mb-4">
              <span className="bg-blue-500 text-white px-4 py-2 rounded-lg inline-block">document</span>
            </div>
            <div className="text-center mb-2 text-gray-400">↓</div>
            <div className="text-center mb-4">
              <span className="bg-purple-500 text-white px-4 py-2 rounded-lg inline-block">&lt;html&gt;</span>
            </div>
            <div className="text-center mb-2 text-gray-400">↓</div>
            <div className="flex justify-center gap-8 mb-4">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-lg">&lt;head&gt;</span>
              <span className="bg-orange-500 text-white px-4 py-2 rounded-lg">&lt;body&gt;</span>
            </div>
            <div className="text-center mb-2 text-gray-400">↓</div>
            <div className="flex justify-center gap-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded">&lt;h1&gt;</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded">&lt;p&gt;</span>
              <span className="bg-green-500 text-white px-3 py-1 rounded">&lt;button&gt;</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <p className="font-bold text-blue-800 mb-2">💡 In Parole Semplici</p>
          <p className="text-gray-700">
            Il DOM permette a JavaScript di <strong>"vedere"</strong> tutti gli elementi HTML della pagina
            e di <strong>modificarli</strong> come vuole. È come avere un telecomando per la pagina web! 📺
          </p>
        </div>
      </section>

      {/* getElementById */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎯 getElementById() - Non Solo Pulsanti</h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
          <p className="font-bold text-blue-800 mb-2">🔙 Lo conosci già dalla Lezione 2!</p>
          <p className="text-gray-700">
            Finora l&apos;hai usato per trovare i <strong>pulsanti</strong> e collegarli a una funzione.
            Ma <code className="bg-blue-100 px-1 rounded">getElementById()</code> trova <strong>qualsiasi</strong> elemento
            che abbia un id: titoli, paragrafi, immagini, div...
          </p>
        </div>

        <p className="text-lg mb-4">
          Per cambiare qualcosa nella pagina, prima devi <strong>trovarlo</strong>!
        </p>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Come Funziona</h3>
          <p className="text-lg mb-3">
            <code className="bg-white bg-opacity-20 px-2 py-1 rounded">getElementById()</code> cerca un elemento HTML usando il suo <strong>id</strong>.
          </p>
          <div className="bg-black bg-opacity-30 p-4 rounded border-2 border-white border-opacity-30">
            <p className="font-mono text-yellow-200">document.getElementById("nome-id");</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Passo 1: Dai un ID all'elemento HTML</h3>
        <CodeExample
          title="HTML con ID"
          code={`<!-- L'attributo id="titolo" serve a identificare questo h1 -->
<h1 id="titolo">Ciao Mondo!</h1>

<!-- Ogni elemento può avere un ID unico -->
<p id="messaggio">Questo è un paragrafo.</p>

<button id="bottone">Cliccami</button>`}
          language="html"
          showLineNumbers
        />

        <h3 className="text-xl font-bold mb-3 mt-6">Passo 2: Trova l'elemento e salvalo in una variabile</h3>
        <CodeExample
          title="JavaScript per trovare elementi"
          code={`// Trova l'elemento con id="titolo"
// e SALVALO in una variabile (Lezione 3!)
let elemento = document.getElementById("titolo");

// Ora "elemento" contiene il riferimento all'h1!
console.log(elemento);  // Stampa: <h1 id="titolo">Ciao Mondo!</h1>`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded mt-6">
          <p className="font-bold text-purple-800 mb-2">💡 Perché salvarlo in una variabile?</p>
          <p className="text-gray-700">
            Con i pulsanti trovavamo l&apos;elemento e lo usavamo <strong>subito</strong>, tutto in una riga.
            Ora invece vogliamo fare <strong>più cose</strong> con lo stesso elemento: salvandolo in una variabile
            lo cerchiamo una volta sola e poi lo usiamo quante volte vogliamo.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mt-6">
          <h3 className="font-bold text-yellow-800 mb-2">⚠️ Regole Importanti</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• L'ID deve essere <strong>unico</strong> nella pagina (non puoi avere due elementi con lo stesso ID)</li>
            <li>• L'ID è <strong>case-sensitive</strong>: "Titolo" ≠ "titolo"</li>
            <li>• L'ID va tra <strong>virgolette</strong> in JavaScript: <code className="bg-yellow-100 px-1 rounded">"titolo"</code></li>
          </ul>
        </div>
      </section>

      {/* innerHTML */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">✏️ innerHTML - Cambia il Contenuto</h2>

        <p className="text-lg mb-4">
          Ora che hai trovato l'elemento, puoi <strong>cambiare quello che c'è dentro</strong>!
        </p>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Come Funziona</h3>
          <p className="text-lg mb-3">
            <code className="bg-white bg-opacity-20 px-2 py-1 rounded">innerHTML</code> legge o modifica il contenuto HTML di un elemento.
          </p>
          <div className="bg-black bg-opacity-30 p-4 rounded border-2 border-white border-opacity-30">
            <p className="font-mono text-yellow-200">elemento.innerHTML = "Nuovo contenuto";</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempi di Sintassi</h3>
        <CodeExample
          title="Cambiare il contenuto con innerHTML"
          code={`// 1. TROVA l'elemento
let titolo = document.getElementById("titolo");

// 2. CAMBIA il contenuto
titolo.innerHTML = "Ciao JavaScript!";

// Puoi anche mettere HTML dentro!
titolo.innerHTML = "Ciao <strong>JavaScript</strong>!";

// Con emoji funziona!
titolo.innerHTML = "Benvenuto! 🎉";`}
          language="javascript"
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
  <title>Cambiare Testo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1 id="titolo">Testo Originale</h1>

  <button id="btnCambia">
    Cambia il Titolo!
  </button>

  <script>
    function cambiaTesto() {
      // TROVA l'elemento
      let titolo = document.getElementById("titolo");
      // CAMBIA il contenuto
      titolo.innerHTML = "Testo Cambiato! 🎉";
    }

    document.getElementById("btnCambia").addEventListener("click", cambiaTesto);
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

h1 {
  color: #667eea;
  font-size: 2.5rem;
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

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="innerHTML - Cambia il Titolo"
          description="Clicca il pulsante per vedere il titolo cambiare!"
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
    h1 {
      color: #667eea;
      font-size: 2.5rem;
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
  <h1 id="titolo">Testo Originale</h1>

  <button id="btnCambia">
    Cambia il Titolo!
  </button>

  <script>
    function cambiaTesto() {
      let titolo = document.getElementById("titolo");
      titolo.innerHTML = "Testo Cambiato! 🎉";
    }

    document.getElementById("btnCambia").addEventListener("click", cambiaTesto);
  </script>
</body>
</html>`}
        />
      </section>

      {/* textContent */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">📝 textContent - Solo Testo</h2>

        <p className="text-lg mb-4">
          <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">textContent</code> è simile a innerHTML, ma lavora solo con il <strong>testo puro</strong> (senza HTML).
        </p>

        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Differenza innerHTML vs textContent</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black bg-opacity-20 p-4 rounded">
              <p className="font-bold text-yellow-200 mb-2">innerHTML</p>
              <p className="text-sm">Interpreta i tag HTML</p>
              <code className="text-xs text-white block mt-2">"&lt;strong&gt;Ciao&lt;/strong&gt;" → <strong>Ciao</strong></code>
            </div>
            <div className="bg-black bg-opacity-20 p-4 rounded">
              <p className="font-bold text-yellow-200 mb-2">textContent</p>
              <p className="text-sm">Mostra tutto come testo</p>
              <code className="text-xs text-white block mt-2">"&lt;strong&gt;Ciao&lt;/strong&gt;" → &lt;strong&gt;Ciao&lt;/strong&gt;</code>
            </div>
          </div>
        </div>

        <CodeExample
          title="Confronto innerHTML vs textContent"
          code={`let elemento = document.getElementById("test");

// Con innerHTML - il tag <strong> funziona
elemento.innerHTML = "<strong>Testo in grassetto</strong>";
// Risultato: Testo in grassetto (in grassetto!)

// Con textContent - mostra i tag come testo
elemento.textContent = "<strong>Testo in grassetto</strong>";
// Risultato: <strong>Testo in grassetto</strong> (vedi i tag!)`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mt-6">
          <p className="font-bold text-blue-800 mb-2">💡 Quando Usare Quale?</p>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong>innerHTML:</strong> Quando vuoi inserire HTML (tag, formattazione)</li>
            <li>• <strong>textContent:</strong> Quando vuoi inserire solo testo semplice</li>
          </ul>
        </div>
      </section>

      {/* Usare Variabili */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🔗 Combinare con le Variabili</h2>

        <p className="text-lg mb-4">
          Ricordi le <strong>variabili</strong> della lezione scorsa? Puoi usarle per creare contenuti dinamici!
        </p>

        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">🌟 La Magia delle Variabili + DOM</h3>
          <p className="text-lg">
            Salva dati nelle variabili, poi mostrali nella pagina!
          </p>
        </div>

        <CodeExample
          title="Variabili + innerHTML"
          code={`// SALVA i dati in variabili
let nome = "Mario";
let punteggio = 100;

// USA le variabili nel contenuto
let messaggio = document.getElementById("messaggio");
messaggio.innerHTML = "Ciao " + nome + "! Hai " + punteggio + " punti!";

// Oppure con prompt()
let nomeUtente = prompt("Come ti chiami?");
messaggio.innerHTML = "Benvenuto " + nomeUtente + "!";`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-xl font-bold mb-3 mt-8">📄 Esempio con Prompt - Copia e Prova!</h3>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <CodeExample
            title="📄 HTML"
            code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Saluto Personalizzato</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1 id="saluto">Clicca il pulsante!</h1>

  <button id="btnSaluta">
    Dimmi il tuo nome
  </button>

  <script>
    function saluta() {
      // CHIEDI il nome
      let nome = prompt("Come ti chiami?");

      // TROVA l'elemento
      let saluto = document.getElementById("saluto");

      // CAMBIA il contenuto con la variabile
      saluto.innerHTML = "Ciao " + nome + "! 👋";
    }

    document.getElementById("btnSaluta").addEventListener("click", saluta);
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
}

h1 {
  color: white;
  font-size: 2.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

button {
  padding: 15px 30px;
  font-size: 18px;
  background: white;
  color: #667eea;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
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
          title="Saluto Personalizzato"
          description="Inserisci il tuo nome e vedrai il titolo cambiare!"
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
    }
    h1 {
      color: white;
      font-size: 2.5rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    button {
      padding: 15px 30px;
      font-size: 18px;
      background: white;
      color: #667eea;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
    }
    button:hover {
      transform: scale(1.05);
    }
  </style>
</head>
<body>
  <h1 id="saluto">Clicca il pulsante!</h1>

  <button id="btnSaluta">
    Dimmi il tuo nome
  </button>

  <script>
    function saluta() {
      let nome = prompt("Come ti chiami?");
      let saluto = document.getElementById("saluto");
      saluto.innerHTML = "Ciao " + nome + "! 👋";
    }

    document.getElementById("btnSaluta").addEventListener("click", saluta);
  </script>
</body>
</html>`}
        />
      </section>

      {/* Cambiare Più Elementi */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎨 Cambiare Più Elementi</h2>

        <p className="text-lg mb-4">
          Puoi cambiare <strong>quanti elementi vuoi</strong> nella stessa pagina!
        </p>

        <CodeExample
          title="Cambiare più elementi insieme"
          code={`// Trova tutti gli elementi che vuoi cambiare
let titolo = document.getElementById("titolo");
let sottotitolo = document.getElementById("sottotitolo");
let messaggio = document.getElementById("messaggio");

// Cambia ognuno di loro
titolo.innerHTML = "Nuovo Titolo! 🎉";
sottotitolo.innerHTML = "Un nuovo sottotitolo";
messaggio.innerHTML = "Il contenuto è stato aggiornato!";`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-xl font-bold mb-3 mt-8">📄 Esempio Completo - Card Profilo</h3>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <CodeExample
            title="📄 HTML"
            code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Card Profilo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">
    <h1 id="nome">Nome Utente</h1>
    <p id="eta">Età: ???</p>
    <p id="citta">Città: ???</p>
  </div>

  <button id="btnProfilo">
    Inserisci i tuoi dati
  </button>

  <script>
    function aggiornaProfilo() {
      // Chiedi i dati
      let nome = prompt("Come ti chiami?");
      let eta = prompt("Quanti anni hai?");
      let citta = prompt("Di che città sei?");

      // Aggiorna la card
      document.getElementById("nome").innerHTML = nome;
      document.getElementById("eta").innerHTML = "Età: " + eta + " anni";
      document.getElementById("citta").innerHTML = "Città: " + citta;
    }

    document.getElementById("btnProfilo").addEventListener("click", aggiornaProfilo);
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
  background: #f0f0f0;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  max-width: 300px;
  margin: 0 auto 20px;
}

.card h1 {
  color: #667eea;
  margin-bottom: 10px;
}

.card p {
  color: #666;
  margin: 5px 0;
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

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Card Profilo Dinamica"
          description="Inserisci i tuoi dati e vedrai la card aggiornarsi!"
          height="450px"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      text-align: center;
      background: #f0f0f0;
    }
    .card {
      background: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      max-width: 300px;
      margin: 0 auto 20px;
    }
    .card h1 {
      color: #667eea;
      margin-bottom: 10px;
    }
    .card p {
      color: #666;
      margin: 5px 0;
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
  <div class="card">
    <h1 id="nome">Nome Utente</h1>
    <p id="eta">Età: ???</p>
    <p id="citta">Città: ???</p>
  </div>

  <button id="btnProfilo">
    Inserisci i tuoi dati
  </button>

  <script>
    function aggiornaProfilo() {
      let nome = prompt("Come ti chiami?");
      let eta = prompt("Quanti anni hai?");
      let citta = prompt("Di che città sei?");

      document.getElementById("nome").innerHTML = nome;
      document.getElementById("eta").innerHTML = "Età: " + eta + " anni";
      document.getElementById("citta").innerHTML = "Città: " + citta;
    }

    document.getElementById("btnProfilo").addEventListener("click", aggiornaProfilo);
  </script>
</body>
</html>`}
        />
      </section>

      {/* Esercizio Guidato */}
      <Exercise
        title="🎯 Esercizio Guidato: Contatore di Click"
        steps={[
          'Crea una cartella "contatore-click" in VS Code',
          'Dentro la cartella, crea un file "index.html"',
          {
            text: 'Scrivi la struttura HTML base con un numero e un pulsante',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Contatore Click</title>
</head>
<body>

  <h1>Contatore Click</h1>
  <p id="contatore">0</p>
  <button id="btnClicca">Clicca!</button>

</body>
</html>`,
            language: 'html',
          },
          'Salva (Ctrl+S) e apri nel browser - per ora il pulsante non fa nulla',
          {
            text: 'Aggiungi lo stile CSS per rendere il contatore bello',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Contatore Click</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 50px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }

    h1 {
      color: white;
    }

    #contatore {
      font-size: 100px;
      color: white;
      font-weight: bold;
    }

    button {
      padding: 20px 40px;
      font-size: 24px;
      background: white;
      color: #667eea;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }

    button:hover {
      transform: scale(1.1);
    }
  </style>
</head>
<body>

  <h1>Contatore Click</h1>
  <p id="contatore">0</p>
  <button id="btnClicca">Clicca!</button>

</body>
</html>`,
            language: 'html',
            highlightLines: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
          },
          'Ricarica - ora è bello ma ancora non funziona',
          {
            text: 'Crea una variabile globale per contare i click',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Contatore Click</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 50px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }

    h1 {
      color: white;
    }

    #contatore {
      font-size: 100px;
      color: white;
      font-weight: bold;
    }

    button {
      padding: 20px 40px;
      font-size: 24px;
      background: white;
      color: #667eea;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }

    button:hover {
      transform: scale(1.1);
    }
  </style>
</head>
<body>

  <h1>Contatore Click</h1>
  <p id="contatore">0</p>
  <button id="btnClicca">Clicca!</button>

  <script>
    // Variabile per contare i click
    let click = 0;
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [46, 47, 48, 49],
          },
          {
            text: 'Crea la function che incrementa il contatore',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Contatore Click</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 50px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }

    h1 {
      color: white;
    }

    #contatore {
      font-size: 100px;
      color: white;
      font-weight: bold;
    }

    button {
      padding: 20px 40px;
      font-size: 24px;
      background: white;
      color: #667eea;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }

    button:hover {
      transform: scale(1.1);
    }
  </style>
</head>
<body>

  <h1>Contatore Click</h1>
  <p id="contatore">0</p>
  <button id="btnClicca">Clicca!</button>

  <script>
    // Variabile per contare i click
    let click = 0;

    function aggiungiClick() {
      // Aumenta il contatore di 1
      click = click + 1;

      // Trova l'elemento e aggiorna il numero
      document.getElementById("contatore").innerHTML = click;
    }
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [50, 51, 52, 53, 54, 55, 56],
          },
          {
            text: 'Collega il pulsante alla function con addEventListener (lo schema della Lezione 2!)',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Contatore Click</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 50px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }

    h1 {
      color: white;
    }

    #contatore {
      font-size: 100px;
      color: white;
      font-weight: bold;
    }

    button {
      padding: 20px 40px;
      font-size: 24px;
      background: white;
      color: #667eea;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }

    button:hover {
      transform: scale(1.1);
    }
  </style>
</head>
<body>

  <h1>Contatore Click</h1>
  <p id="contatore">0</p>
  <button id="btnClicca">Clicca!</button>

  <script>
    // Variabile per contare i click
    let click = 0;

    function aggiungiClick() {
      // Aumenta il contatore di 1
      click = click + 1;

      // Trova l'elemento e aggiorna il numero
      document.getElementById("contatore").innerHTML = click;
    }

    // Collega il pulsante alla funzione
    document.getElementById("btnClicca").addEventListener("click", aggiungiClick);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [58, 59],
          },
          'Ricarica e clicca il pulsante - il numero aumenta! 🎉',
          'Prova a cliccare tante volte e guarda il contatore salire!'
        ]}
        experiments={[
          'Aggiungi un secondo pulsante "Reset" che riporta il contatore a 0',
          'Cambia il colore del numero quando supera 10 click',
          'Aggiungi emoji al numero: "🔥 15 click!"',
          'Crea un contatore che va in negativo con un pulsante "Togli"'
        ]}
      />

      {/* Checklist Finale */}
      <section className="mb-12 mt-12">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✅</span> Hai Completato la Lezione!
          </h2>
          <p className="text-gray-700 mb-4">
            Fantastico! Ora sai modificare la pagina HTML con JavaScript! 🎉
          </p>
          <div className="bg-white rounded p-4 border border-green-200">
            <p className="font-bold text-gray-900 mb-2">Cosa hai imparato:</p>
            <ul className="space-y-1 text-gray-700">
              <li>✅ Cos'è il <strong>DOM</strong> (Document Object Model)</li>
              <li>✅ Trovare <strong>qualsiasi</strong> elemento con <strong>getElementById()</strong>, non solo i pulsanti</li>
              <li>✅ Cambiare contenuti con <strong>innerHTML</strong></li>
              <li>✅ Usare <strong>textContent</strong> per testo puro</li>
              <li>✅ Combinare <strong>variabili</strong> con il DOM</li>
              <li>✅ Creare un <strong>contatore di click</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sfida Opzionale */}
      <Challenge
        title="Quiz con Punteggio Visibile"
        description="Crea un mini-quiz dove il punteggio viene mostrato direttamente nella pagina (non con alert)! Ogni risposta corretta aumenta il punteggio visibile."
        requirements={[
          'Almeno 3 domande con prompt()',
          'Un elemento HTML che mostra il punteggio (es: <p id="punteggio">0</p>)',
          'Aggiorna il punteggio nella pagina dopo ogni risposta corretta',
          'Alla fine mostra un messaggio di congratulazioni nella pagina',
          'Usa le variabili per tenere traccia delle risposte'
        ]}
        hint="Usa una variabile 'punti' che parte da 0, e ogni volta che la risposta è giusta fai punti = punti + 1 e aggiorna il DOM!"
      />

      {/* Riepilogo Finale */}
      <section className="mt-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Ottimo Lavoro!</h2>
        <p className="text-xl mb-4">
          Ora sai <strong>modificare la pagina HTML</strong> con JavaScript! Questo è il vero superpotere! 💪
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded border-2 border-white border-opacity-30">
          <p className="font-bold mb-2 text-yellow-200">🚀 Comandi JavaScript Totali Imparati: 11</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>console.log() - Stampa nella console (Lezione 1)</li>
            <li>function - Blocco di istruzioni (Lezione 2)</li>
            <li>document.getElementById() - Trova un elemento tramite il suo id (Lezione 2)</li>
            <li>addEventListener() - Esegue una funzione quando succede qualcosa (Lezione 2)</li>
            <li>alert() - Mostra messaggi popup (Lezione 3)</li>
            <li>prompt() - Chiede input all'utente (Lezione 3)</li>
            <li>confirm() - Chiede conferma OK/Annulla (Lezione 3)</li>
            <li>let / const - Dichiara variabili (Lezione 3)</li>
            <li>.innerHTML - Cambia contenuto HTML (Lezione 4) ✨ NUOVO</li>
            <li>.textContent - Cambia solo testo (Lezione 4) ✨ NUOVO</li>
          </ul>
          <p className="font-bold mt-4 mb-2 text-yellow-200">💡 Concetti Chiave:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>DOM - La mappa della pagina che JavaScript può modificare</li>
            <li>ID - Identificatore unico per trovare elementi</li>
            <li>Modificare la pagina senza ricaricare</li>
          </ul>
        </div>
        <p className="text-lg font-semibold mt-4">
          Prossima lezione: <strong>Cambiare gli Stili CSS</strong>! Modificherai colori, dimensioni e posizioni! 🎨
        </p>
      </section>

      {/* Prossimi Passi */}
      <section className="mb-12 mt-12">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Prossimi Passi
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Nella prossima lezione</strong> imparerai a <strong>cambiare gli stili CSS</strong> con JavaScript!
            Potrai modificare colori, dimensioni, bordi e molto altro in tempo reale!
          </p>
          <p className="text-gray-700">
            Useremo <code className="bg-blue-100 px-2 py-1 rounded">element.style</code> per controllare ogni proprietà CSS! 🎨
          </p>
        </div>
      </section>

    </LessonLayout>
  );
}
