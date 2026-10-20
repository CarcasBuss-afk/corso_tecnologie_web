import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import JavaScriptDemo from '@/components/didattica/JavaScriptDemo';
import Challenge from '@/components/didattica/Challenge';

export default function Lezione5CambiareStili() {
  const lezioni = getLezioniByModuloSlug('modulo-4-javascript');

  return (
    <LessonLayout
      moduloSlug="modulo-4-javascript"
      moduloTitolo="Modulo 4: JavaScript - Interattività"
      lezioni={lezioni}
      lezioneSlug="lezione-5-cambiare-stili"
      lezioneTitolo="Cambiare Stili e Colori"
    >
      <LessonHeader
        numero={5}
        titolo="Cambiare Stili e Colori"
        durata="1.5 ore"
        difficolta="facile"
        obiettivi={[
          'Cambiare l\'aspetto di un elemento con .style',
          'Tradurre i nomi delle proprietà CSS in JavaScript (camelCase)',
          'Scrivere i valori giusti: tra virgolette e con l\'unità di misura',
          'Nascondere e mostrare elementi con style.display'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Dal Contenuto all&apos;Aspetto!</h2>

        <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white p-8 rounded-lg mb-6">
          <p className="text-xl mb-4">
            Nella lezione scorsa hai cambiato <strong>cosa c&apos;è scritto</strong> con <code className="bg-white/20 px-2 py-1 rounded">innerHTML</code>...
          </p>
          <p className="text-2xl font-bold">
            Ora cambierai <strong>come appare</strong>: colori, dimensioni, forme! 🎨
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-pink-50 p-6 rounded-lg border-2 border-pink-200">
            <div className="text-4xl mb-3">🌈</div>
            <h3 className="font-bold text-gray-900 mb-2">Colori</h3>
            <p className="text-gray-600 text-sm">
              Testo, sfondo, bordi...
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
            <div className="text-4xl mb-3">📏</div>
            <h3 className="font-bold text-gray-900 mb-2">Dimensioni</h3>
            <p className="text-gray-600 text-sm">
              Grandezza del testo, larghezza, altezza...
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
            <div className="text-4xl mb-3">👻</div>
            <h3 className="font-bold text-gray-900 mb-2">Visibilità</h3>
            <p className="text-gray-600 text-sm">
              Far sparire e riapparire gli elementi!
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
          <h3 className="font-bold text-yellow-800 mb-2">💡 Esempi nel Mondo Reale</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong>Tema scuro:</strong> con un click tutta l&apos;app diventa scura 🌙</li>
            <li>• <strong>Instagram:</strong> il cuore diventa rosso quando metti like ❤️</li>
            <li>• <strong>Menu dei siti:</strong> compaiono e spariscono quando clicchi ☰</li>
          </ul>
        </div>
      </section>

      {/* Come funziona .style */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🖌️ .style - Il Pennello di JavaScript</h2>

        <p className="text-lg mb-4">
          Ogni elemento trovato con <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">getElementById()</code> ha
          un &quot;pennello&quot; chiamato <strong>style</strong>. Con lui puoi cambiare qualsiasi proprietà CSS!
        </p>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Come Funziona</h3>
          <div className="bg-black/30 p-4 rounded border-2 border-white/30">
            <p className="font-mono text-yellow-200">elemento.style.proprietà = &quot;valore&quot;;</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Smontiamo la Riga</h3>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <p className="font-mono text-lg text-center">
            <span className="text-blue-300">titolo</span>
            <span className="text-white">.</span>
            <span className="text-pink-300">style</span>
            <span className="text-white">.</span>
            <span className="text-green-300">color</span>
            <span className="text-white"> = </span>
            <span className="text-yellow-300">&quot;red&quot;</span>
            <span className="text-white">;</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
            <p className="font-mono font-bold text-blue-700 mb-1">titolo</p>
            <p className="text-gray-700 text-sm">L&apos;elemento che hai trovato con getElementById() e salvato in una variabile</p>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg border-2 border-pink-200">
            <p className="font-mono font-bold text-pink-700 mb-1">.style</p>
            <p className="text-gray-700 text-sm">&quot;Voglio cambiare l&apos;aspetto&quot;: apre il pennello</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
            <p className="font-mono font-bold text-green-700 mb-1">.color</p>
            <p className="text-gray-700 text-sm">Quale proprietà CSS cambiare (qui: il colore del testo)</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
            <p className="font-mono font-bold text-yellow-700 mb-1">= &quot;red&quot;</p>
            <p className="text-gray-700 text-sm">Il nuovo valore, sempre <strong>tra virgolette</strong></p>
          </div>
        </div>

        <CodeExample
          title="Esempi di sintassi"
          code={`// 1. TROVA l'elemento e salvalo in una variabile
let titolo = document.getElementById("titolo");

// 2. CAMBIA il suo aspetto
titolo.style.color = "red";            // testo rosso
titolo.style.fontSize = "40px";        // testo grande
titolo.style.backgroundColor = "yellow"; // sfondo giallo`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mt-6">
          <p className="font-bold text-blue-800 mb-2">🔙 Lo schema è sempre lo stesso!</p>
          <p className="text-gray-700">
            Cambia solo <strong>cosa</strong> fa la funzione. Per far partire il cambiamento con un click usi
            lo schema che conosci dalla Lezione 2: <strong>id nel pulsante → funzione → addEventListener</strong>.
          </p>
        </div>
      </section>

      {/* Dal CSS al JavaScript: camelCase */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🐫 Dal CSS al JavaScript: i Nomi Cambiano!</h2>

        <p className="text-lg mb-4">
          Nel CSS molte proprietà hanno il <strong>trattino</strong>: <code className="bg-gray-100 px-2 py-1 rounded">background-color</code>,{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">font-size</code>... Ma in JavaScript il trattino è il <strong>meno</strong> della sottrazione!
        </p>

        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 La Regola del Cammello (camelCase)</h3>
          <ol className="list-decimal list-inside space-y-2 text-lg">
            <li>Togli il trattino</li>
            <li>La lettera dopo il trattino diventa <strong>MAIUSCOLA</strong></li>
          </ol>
          <div className="bg-black/30 p-4 rounded border-2 border-white/30 mt-4">
            <p className="font-mono text-yellow-200">background-color → backgroundColor</p>
          </div>
          <p className="text-sm mt-3 text-white/80">
            Si chiama così perché le maiuscole in mezzo alla parola sembrano le gobbe di un cammello! 🐫
          </p>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-2 border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-gray-900">Nel CSS</th>
                <th className="p-3 text-left text-gray-900">In JavaScript</th>
                <th className="p-3 text-left text-gray-900">Cosa cambia</th>
              </tr>
            </thead>
            <tbody className="font-mono text-sm">
              <tr className="border-t"><td className="p-3">color</td><td className="p-3 text-green-700 font-bold">color</td><td className="p-3 font-sans">Colore del testo</td></tr>
              <tr className="border-t"><td className="p-3">background-color</td><td className="p-3 text-green-700 font-bold">backgroundColor</td><td className="p-3 font-sans">Colore di sfondo</td></tr>
              <tr className="border-t"><td className="p-3">font-size</td><td className="p-3 text-green-700 font-bold">fontSize</td><td className="p-3 font-sans">Grandezza del testo</td></tr>
              <tr className="border-t"><td className="p-3">font-family</td><td className="p-3 text-green-700 font-bold">fontFamily</td><td className="p-3 font-sans">Tipo di carattere</td></tr>
              <tr className="border-t"><td className="p-3">text-align</td><td className="p-3 text-green-700 font-bold">textAlign</td><td className="p-3 font-sans">Allineamento del testo</td></tr>
              <tr className="border-t"><td className="p-3">border-radius</td><td className="p-3 text-green-700 font-bold">borderRadius</td><td className="p-3 font-sans">Angoli arrotondati</td></tr>
              <tr className="border-t"><td className="p-3">width / height</td><td className="p-3 text-green-700 font-bold">width / height</td><td className="p-3 font-sans">Larghezza / altezza</td></tr>
              <tr className="border-t"><td className="p-3">display</td><td className="p-3 text-green-700 font-bold">display</td><td className="p-3 font-sans">Visibile o nascosto</td></tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
          <h3 className="font-bold text-yellow-800 mb-2">⚠️ I Valori: Sempre tra Virgolette</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Il valore si scrive <strong>come nel CSS</strong>, ma tra virgolette: <code className="bg-yellow-100 px-1 rounded">&quot;red&quot;</code>, <code className="bg-yellow-100 px-1 rounded">&quot;#ff6347&quot;</code>, <code className="bg-yellow-100 px-1 rounded">&quot;center&quot;</code></li>
            <li>• Le misure vogliono <strong>l&apos;unità</strong>: <code className="bg-yellow-100 px-1 rounded">&quot;40px&quot;</code> funziona, <code className="bg-yellow-100 px-1 rounded">&quot;40&quot;</code> no!</li>
          </ul>
        </div>
      </section>

      {/* Esempio 1: La scatola dei colori */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎨 Esempio: La Scatola dei Colori</h2>

        <p className="text-lg mb-4">
          Tre pulsanti, tre funzioni, tre colori. Ogni pulsante colora la stessa scatola in modo diverso.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <CodeExample
            title="📄 HTML"
            code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Scatola dei Colori</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="scatola"></div>

  <button id="btnRosso">Rosso</button>
  <button id="btnVerde">Verde</button>
  <button id="btnBlu">Blu</button>

  <script>
    function coloraRosso() {
      document.getElementById("scatola").style.backgroundColor = "tomato";
    }

    function coloraVerde() {
      document.getElementById("scatola").style.backgroundColor = "mediumseagreen";
    }

    function coloraBlu() {
      document.getElementById("scatola").style.backgroundColor = "royalblue";
    }

    document.getElementById("btnRosso").addEventListener("click", coloraRosso);
    document.getElementById("btnVerde").addEventListener("click", coloraVerde);
    document.getElementById("btnBlu").addEventListener("click", coloraBlu);
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

div {
  width: 200px;
  height: 200px;
  background-color: lightgray;
  margin: 0 auto 30px;
  border-radius: 15px;
}

button {
  padding: 12px 25px;
  font-size: 18px;
  margin: 5px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}`}
            language="css"
            showLineNumbers
          />
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="La Scatola dei Colori"
          description="Clicca i pulsanti per cambiare il colore della scatola!"
          height="420px"
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
    div {
      width: 200px;
      height: 200px;
      background-color: lightgray;
      margin: 0 auto 30px;
      border-radius: 15px;
    }
    button {
      padding: 12px 25px;
      font-size: 18px;
      margin: 5px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div id="scatola"></div>

  <button id="btnRosso">Rosso</button>
  <button id="btnVerde">Verde</button>
  <button id="btnBlu">Blu</button>

  <script>
    function coloraRosso() {
      document.getElementById("scatola").style.backgroundColor = "tomato";
    }

    function coloraVerde() {
      document.getElementById("scatola").style.backgroundColor = "mediumseagreen";
    }

    function coloraBlu() {
      document.getElementById("scatola").style.backgroundColor = "royalblue";
    }

    document.getElementById("btnRosso").addEventListener("click", coloraRosso);
    document.getElementById("btnVerde").addEventListener("click", coloraVerde);
    document.getElementById("btnBlu").addEventListener("click", coloraBlu);
  </script>
</body>
</html>`}
        />

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mt-6">
          <p className="font-bold text-blue-800 mb-2">💡 Che colori posso usare?</p>
          <p className="text-gray-700">
            Tutti quelli che usi nel CSS: i <strong>nomi in inglese</strong> (<code className="bg-blue-100 px-1 rounded">&quot;tomato&quot;</code>,{' '}
            <code className="bg-blue-100 px-1 rounded">&quot;gold&quot;</code>, <code className="bg-blue-100 px-1 rounded">&quot;pink&quot;</code>)
            oppure i codici <strong>esadecimali</strong> (<code className="bg-blue-100 px-1 rounded">&quot;#ff6347&quot;</code>).
          </p>
        </div>
      </section>

      {/* Esempio 2: Più proprietà insieme */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">✨ Cambiare Più Proprietà Insieme</h2>

        <p className="text-lg mb-4">
          Se vuoi cambiare <strong>tante cose</strong> sullo stesso elemento, salvalo in una variabile
          (come nella Lezione 4) e usa la variabile per ogni proprietà.
        </p>

        <CodeExample
          title="Una variabile, tante proprietà"
          code={`function trasforma() {
  // Trova la scatola UNA volta sola
  let scatola = document.getElementById("scatola");

  // Cambia quante proprietà vuoi
  scatola.style.backgroundColor = "gold";
  scatola.style.width = "250px";
  scatola.style.height = "250px";
  scatola.style.borderRadius = "50%";   // diventa un cerchio!
}`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Quadrato o Cerchio?"
          description="Trasforma il quadrato in un cerchio dorato, poi riportalo com'era!"
          height="470px"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 30px;
      text-align: center;
    }
    div {
      width: 150px;
      height: 150px;
      background-color: royalblue;
      margin: 0 auto 30px;
      border-radius: 0;
    }
    button {
      padding: 12px 25px;
      font-size: 18px;
      margin: 5px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div id="scatola"></div>

  <button id="btnTrasforma">✨ Trasforma</button>
  <button id="btnRipristina">↩️ Ripristina</button>

  <script>
    function trasforma() {
      let scatola = document.getElementById("scatola");
      scatola.style.backgroundColor = "gold";
      scatola.style.width = "250px";
      scatola.style.height = "250px";
      scatola.style.borderRadius = "50%";
    }

    function ripristina() {
      let scatola = document.getElementById("scatola");
      scatola.style.backgroundColor = "royalblue";
      scatola.style.width = "150px";
      scatola.style.height = "150px";
      scatola.style.borderRadius = "0";
    }

    document.getElementById("btnTrasforma").addEventListener("click", trasforma);
    document.getElementById("btnRipristina").addEventListener("click", ripristina);
  </script>
</body>
</html>`}
        />

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded mt-6">
          <p className="font-bold text-purple-800 mb-2">💡 JavaScript non ha memoria dello stile di prima</p>
          <p className="text-gray-700">
            Per &quot;tornare indietro&quot; serve una seconda funzione (<code className="bg-purple-100 px-1 rounded">ripristina</code>)
            che rimette <strong>a mano</strong> i valori originali.
          </p>
        </div>
      </section>

      {/* Esempio 3: Con prompt e variabili */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🔗 Lo Stile lo Sceglie l&apos;Utente</h2>

        <p className="text-lg mb-4">
          Il valore può arrivare da una <strong>variabile</strong>, per esempio da quello che l&apos;utente scrive in un <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">prompt()</code>.
        </p>

        <CodeExample
          title="Valori dalle variabili"
          code={`// Il colore lo scrive l'utente
let colore = prompt("Scrivi un colore in inglese (es: red, pink, orange)");
titolo.style.color = colore;

// La dimensione è un numero: aggiungi "px" con il +
let dimensione = prompt("Quanto grande? Scrivi un numero (es: 50)");
titolo.style.fontSize = dimensione + "px";   // "50" + "px" = "50px"`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Titolo su Misura"
          description="Scegli tu colore e grandezza del titolo!"
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
      color: #333;
      font-size: 32px;
    }
    button {
      padding: 12px 25px;
      font-size: 18px;
      margin: 5px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1 id="titolo">Il Mio Titolo</h1>

  <button id="btnColore">🎨 Scegli il colore</button>
  <button id="btnDimensione">📏 Scegli la grandezza</button>

  <script>
    function scegliColore() {
      let colore = prompt("Scrivi un colore in inglese (es: red, pink, orange)");
      document.getElementById("titolo").style.color = colore;
    }

    function scegliDimensione() {
      let dimensione = prompt("Quanto grande? Scrivi un numero (es: 50)");
      document.getElementById("titolo").style.fontSize = dimensione + "px";
    }

    document.getElementById("btnColore").addEventListener("click", scegliColore);
    document.getElementById("btnDimensione").addEventListener("click", scegliDimensione);
  </script>
</body>
</html>`}
        />
      </section>

      {/* Nascondere e mostrare */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">👻 Nascondere e Mostrare</h2>

        <p className="text-lg mb-4">
          Una delle cose più usate in assoluto: far <strong>sparire</strong> un elemento e farlo <strong>riapparire</strong>.
          Si fa con la proprietà <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">display</code>.
        </p>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 I Due Valori da Ricordare</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black/20 p-4 rounded">
              <p className="font-mono text-yellow-200 mb-2">style.display = &quot;none&quot;</p>
              <p className="text-sm">L&apos;elemento sparisce (e non occupa più spazio)</p>
            </div>
            <div className="bg-black/20 p-4 rounded">
              <p className="font-mono text-yellow-200 mb-2">style.display = &quot;block&quot;</p>
              <p className="text-sm">L&apos;elemento torna visibile</p>
            </div>
          </div>
        </div>

        <CodeExample
          title="Nascondere e mostrare un paragrafo"
          code={`// Il paragrafo sparisce
document.getElementById("soluzione").style.display = "none";

// Il paragrafo riappare
document.getElementById("soluzione").style.display = "block";`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="L'Indovinello"
          description="Prova a indovinare, poi mostra la soluzione!"
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
    h2 {
      color: #667eea;
    }
    p {
      font-size: 28px;
      font-weight: bold;
      color: #764ba2;
    }
    button {
      padding: 12px 25px;
      font-size: 18px;
      margin: 5px;
      background: white;
      color: #667eea;
      border: 2px solid #667eea;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h2>Cosa ha i tasti ma non apre nessuna porta? 🤔</h2>

  <p id="soluzione">La tastiera! ⌨️</p>

  <button id="btnNascondi">🙈 Nascondi</button>
  <button id="btnMostra">👀 Mostra</button>

  <script>
    function nascondi() {
      document.getElementById("soluzione").style.display = "none";
    }

    function mostra() {
      document.getElementById("soluzione").style.display = "block";
    }

    document.getElementById("btnNascondi").addEventListener("click", nascondi);
    document.getElementById("btnMostra").addEventListener("click", mostra);
  </script>
</body>
</html>`}
        />
      </section>

      {/* Errori Tipici */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🐛 Errori Tipici</h2>

        <div className="space-y-6">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 1: Il trattino del CSS</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm">titolo.style.font-size = &quot;40px&quot;;</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm">titolo.style.fontSize = &quot;40px&quot;;</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              JavaScript legge il trattino come un <strong>meno</strong>. Nella console vedi un errore rosso come
              <code className="bg-red-100 px-1 rounded mx-1">SyntaxError: Invalid left-hand side in assignment</code>
              e <strong>tutto lo script</strong> smette di funzionare.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 2: Manca l&apos;unità di misura</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm">titolo.style.fontSize = &quot;40&quot;;</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm">titolo.style.fontSize = &quot;40px&quot;;</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Questo è subdolo: <strong>nessun errore</strong> nella console, semplicemente non succede niente.
              Se uno stile &quot;non funziona&quot;, controlla per prima cosa il <code className="bg-red-100 px-1 rounded">px</code>!
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 3: Il valore senza virgolette</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm">titolo.style.color = red;</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm">titolo.style.color = &quot;red&quot;;</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Senza virgolette JavaScript pensa che <code className="bg-red-100 px-1 rounded">red</code> sia il nome di una variabile.
              Nella console: <code className="bg-red-100 px-1 rounded">ReferenceError: red is not defined</code>.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 4: Dimenticare .style</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm">titolo.color = &quot;red&quot;;</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm">titolo.style.color = &quot;red&quot;;</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Anche qui <strong>nessun errore</strong> e nessun cambiamento: senza <code className="bg-red-100 px-1 rounded">.style</code> non
              stai usando il pennello!
            </p>
          </div>
        </div>
      </section>

      {/* Esercizio Guidato */}
      <Exercise
        title="🎯 Esercizio Guidato: Personalizza la Card"
        steps={[
          'Crea una cartella "personalizza-card" in VS Code',
          'Dentro la cartella, crea un file "index.html"',
          {
            text: 'Scrivi la struttura HTML: una card con un titolo e quattro pulsanti, ognuno con il suo id',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Personalizza la Card</title>
</head>
<body>

  <div id="card">
    <h1 id="titolo">La Mia Card</h1>
    <p>Usa i pulsanti per cambiare il suo aspetto!</p>
  </div>

  <button id="btnScuro">🌙 Tema Scuro</button>
  <button id="btnChiaro">☀️ Tema Chiaro</button>
  <button id="btnGrande">🔍 Testo Grande</button>
  <button id="btnNormale">🔎 Testo Normale</button>

</body>
</html>`,
            language: 'html',
          },
          'Salva (Ctrl+S) e apri nel browser - per ora i pulsanti non fanno nulla',
          {
            text: 'Aggiungi lo stile CSS iniziale della pagina',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Personalizza la Card</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 40px;
    }

    div {
      background-color: white;
      color: #333;
      max-width: 400px;
      margin: 0 auto 30px;
      padding: 30px;
      border: 2px solid #ddd;
      border-radius: 15px;
    }

    button {
      padding: 12px 20px;
      font-size: 16px;
      margin: 5px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div id="card">
    <h1 id="titolo">La Mia Card</h1>
    <p>Usa i pulsanti per cambiare il suo aspetto!</p>
  </div>

  <button id="btnScuro">🌙 Tema Scuro</button>
  <button id="btnChiaro">☀️ Tema Chiaro</button>
  <button id="btnGrande">🔍 Testo Grande</button>
  <button id="btnNormale">🔎 Testo Normale</button>

</body>
</html>`,
            language: 'html',
            highlightLines: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
          },
          {
            text: 'Scrivi la funzione temaScuro e collegala al pulsante btnScuro',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Personalizza la Card</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 40px;
    }

    div {
      background-color: white;
      color: #333;
      max-width: 400px;
      margin: 0 auto 30px;
      padding: 30px;
      border: 2px solid #ddd;
      border-radius: 15px;
    }

    button {
      padding: 12px 20px;
      font-size: 16px;
      margin: 5px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div id="card">
    <h1 id="titolo">La Mia Card</h1>
    <p>Usa i pulsanti per cambiare il suo aspetto!</p>
  </div>

  <button id="btnScuro">🌙 Tema Scuro</button>
  <button id="btnChiaro">☀️ Tema Chiaro</button>
  <button id="btnGrande">🔍 Testo Grande</button>
  <button id="btnNormale">🔎 Testo Normale</button>

  <script>
    function temaScuro() {
      let card = document.getElementById("card");
      card.style.backgroundColor = "#222";
      card.style.color = "white";
    }

    document.getElementById("btnScuro").addEventListener("click", temaScuro);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [45, 46, 47, 48, 49, 50, 51, 52, 53],
          },
          'Ricarica e clicca "Tema Scuro": la card diventa scura! 🌙',
          {
            text: 'Aggiungi la funzione temaChiaro, che rimette i colori originali, e collegala a btnChiaro',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Personalizza la Card</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 40px;
    }

    div {
      background-color: white;
      color: #333;
      max-width: 400px;
      margin: 0 auto 30px;
      padding: 30px;
      border: 2px solid #ddd;
      border-radius: 15px;
    }

    button {
      padding: 12px 20px;
      font-size: 16px;
      margin: 5px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div id="card">
    <h1 id="titolo">La Mia Card</h1>
    <p>Usa i pulsanti per cambiare il suo aspetto!</p>
  </div>

  <button id="btnScuro">🌙 Tema Scuro</button>
  <button id="btnChiaro">☀️ Tema Chiaro</button>
  <button id="btnGrande">🔍 Testo Grande</button>
  <button id="btnNormale">🔎 Testo Normale</button>

  <script>
    function temaScuro() {
      let card = document.getElementById("card");
      card.style.backgroundColor = "#222";
      card.style.color = "white";
    }

    function temaChiaro() {
      let card = document.getElementById("card");
      card.style.backgroundColor = "white";
      card.style.color = "#333";
    }

    document.getElementById("btnScuro").addEventListener("click", temaScuro);
    document.getElementById("btnChiaro").addEventListener("click", temaChiaro);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [52, 53, 54, 55, 56, 59],
          },
          {
            text: 'Infine le funzioni per la grandezza del titolo: testoGrande e testoNormale, collegate ai loro pulsanti',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Personalizza la Card</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 40px;
    }

    div {
      background-color: white;
      color: #333;
      max-width: 400px;
      margin: 0 auto 30px;
      padding: 30px;
      border: 2px solid #ddd;
      border-radius: 15px;
    }

    button {
      padding: 12px 20px;
      font-size: 16px;
      margin: 5px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <div id="card">
    <h1 id="titolo">La Mia Card</h1>
    <p>Usa i pulsanti per cambiare il suo aspetto!</p>
  </div>

  <button id="btnScuro">🌙 Tema Scuro</button>
  <button id="btnChiaro">☀️ Tema Chiaro</button>
  <button id="btnGrande">🔍 Testo Grande</button>
  <button id="btnNormale">🔎 Testo Normale</button>

  <script>
    function temaScuro() {
      let card = document.getElementById("card");
      card.style.backgroundColor = "#222";
      card.style.color = "white";
    }

    function temaChiaro() {
      let card = document.getElementById("card");
      card.style.backgroundColor = "white";
      card.style.color = "#333";
    }

    function testoGrande() {
      document.getElementById("titolo").style.fontSize = "50px";
    }

    function testoNormale() {
      document.getElementById("titolo").style.fontSize = "32px";
    }

    document.getElementById("btnScuro").addEventListener("click", temaScuro);
    document.getElementById("btnChiaro").addEventListener("click", temaChiaro);
    document.getElementById("btnGrande").addEventListener("click", testoGrande);
    document.getElementById("btnNormale").addEventListener("click", testoNormale);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [58, 59, 60, 61, 62, 63, 64, 68, 69],
          },
          'Ricarica e prova tutti e quattro i pulsanti, anche in ordine diverso! 🎉'
        ]}
        experiments={[
          'Cambia i colori del tema scuro: prova "navy" o "#1e1e2f" per lo sfondo',
          'Aggiungi un pulsante "btnNascondi" che nasconde la card con style.display = "none" (e uno per farla riapparire)',
          'Prova a scrivere apposta font-size con il trattino al posto di fontSize: cosa dice la console?',
          'Togli "px" da "50px": il titolo cambia ancora? Rimettilo e verifica',
          'Nel tema scuro cambia anche il bordo con card.style.borderColor'
        ]}
      />

      {/* Checklist Finale */}
      <section className="mb-12 mt-12">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✅</span> Hai Completato la Lezione!
          </h2>
          <p className="text-gray-700 mb-4">
            Ora con JavaScript puoi cambiare non solo il contenuto, ma anche l&apos;aspetto della pagina! 🎨
          </p>
          <div className="bg-white rounded p-4 border border-green-200">
            <p className="font-bold text-gray-900 mb-2">Cosa hai imparato:</p>
            <ul className="space-y-1 text-gray-700">
              <li>✅ Cambiare lo stile con <strong>elemento.style.proprietà = &quot;valore&quot;</strong></li>
              <li>✅ Tradurre i nomi CSS in <strong>camelCase</strong> (background-color → backgroundColor)</li>
              <li>✅ Scrivere i valori <strong>tra virgolette</strong> e con l&apos;<strong>unità</strong> (&quot;40px&quot;)</li>
              <li>✅ Cambiare <strong>più proprietà</strong> usando una variabile</li>
              <li>✅ Usare valori presi da un <strong>prompt()</strong></li>
              <li>✅ Nascondere e mostrare con <strong>style.display</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sfida Opzionale */}
      <Challenge
        title="Il Semaforo"
        description="Costruisci un semaforo con tre cerchi (rosso, giallo, verde) tutti grigi all'inizio. Tre pulsanti accendono una luce alla volta: quando una si accende, le altre due tornano grigie."
        requirements={[
          'Tre div con id luceRosso, luceGiallo, luceVerde, a forma di cerchio (border-radius: 50%) e grigi',
          'Tre pulsanti con id btnRosso, btnGiallo, btnVerde',
          'Una funzione per ogni pulsante (accendiRosso, accendiGiallo, accendiVerde)',
          'Ogni funzione colora la sua luce e rimette grigie le altre due',
          'Nessun JavaScript dentro i tag HTML: solo addEventListener nello script'
        ]}
        hint="Dentro accendiRosso scrivi tre righe: una che colora luceRosso di rosso e due che rimettono luceGiallo e luceVerde a 'gray'. Le altre funzioni sono uguali, cambia solo quale luce si accende!"
      />

      {/* Riepilogo Finale */}
      <section className="mt-12 bg-gradient-to-r from-pink-500 to-orange-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Ottimo Lavoro!</h2>
        <p className="text-xl mb-4">
          Ora sai cambiare <strong>colori, dimensioni e visibilità</strong> con JavaScript! 🎨
        </p>
        <div className="bg-black/20 p-4 rounded border-2 border-white/30">
          <p className="font-bold mb-2 text-yellow-200">🚀 Comandi JavaScript Totali Imparati: 12</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>console.log() - Stampa nella console (Lezione 1)</li>
            <li>function - Blocco di istruzioni (Lezione 2)</li>
            <li>document.getElementById() - Trova un elemento tramite il suo id (Lezione 2)</li>
            <li>addEventListener() - Esegue una funzione quando succede qualcosa (Lezione 2)</li>
            <li>alert() - Mostra messaggi popup (Lezione 3)</li>
            <li>prompt() - Chiede input all&apos;utente (Lezione 3)</li>
            <li>confirm() - Chiede conferma OK/Annulla (Lezione 3)</li>
            <li>let / const - Dichiara variabili (Lezione 3)</li>
            <li>.innerHTML - Cambia contenuto HTML (Lezione 4)</li>
            <li>.textContent - Cambia solo testo (Lezione 4)</li>
            <li>.style - Cambia l&apos;aspetto di un elemento (Lezione 5) ✨ NUOVO</li>
          </ul>
          <p className="font-bold mt-4 mb-2 text-yellow-200">💡 Concetti Chiave:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>camelCase - I nomi CSS senza trattino, con la maiuscola (fontSize)</li>
            <li>I valori vanno tra virgolette e le misure con l&apos;unità (&quot;40px&quot;)</li>
            <li>display: &quot;none&quot; nasconde, &quot;block&quot; mostra</li>
          </ul>
        </div>
        <p className="text-lg font-semibold mt-4">
          Prossima lezione: <strong>Decisioni e Quiz</strong>! JavaScript imparerà a scegliere cosa fare con if/else! 🤔
        </p>
      </section>

      {/* Prossimi Passi */}
      <section className="mb-12 mt-12">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Prossimi Passi
          </h2>
          <p className="text-gray-700 mb-4">
            Finora i tuoi programmi fanno <strong>sempre la stessa cosa</strong>. Nella prossima lezione imparerai a
            farli <strong>decidere</strong>: &quot;se la risposta è giusta, colora di verde; altrimenti, di rosso&quot;.
          </p>
          <p className="text-gray-700">
            Useremo <code className="bg-blue-100 px-2 py-1 rounded">if</code> e <code className="bg-blue-100 px-2 py-1 rounded">else</code> insieme
            a tutto quello che sai già: innerHTML e style! 🎯
          </p>
        </div>
      </section>

    </LessonLayout>
  );
}
