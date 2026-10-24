import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import JavaScriptDemo from '@/components/didattica/JavaScriptDemo';
import Challenge from '@/components/didattica/Challenge';
import AllenatiOfficina from '@/components/didattica/AllenatiOfficina';

export default function Lezione6DecisioniQuiz() {
  const lezioni = getLezioniByModuloSlug('modulo-4-javascript');

  return (
    <LessonLayout
      moduloSlug="modulo-4-javascript"
      moduloTitolo="Modulo 4: JavaScript - Interattività"
      lezioni={lezioni}
      lezioneSlug="lezione-6-decisioni-quiz"
      lezioneTitolo="Decisioni e Quiz"
    >
      <LessonHeader
        numero={6}
        titolo="Decisioni e Quiz"
        durata="2 ore"
        difficolta="media"
        obiettivi={[
          'Confrontare due valori con === !== > < >= <=',
          'Far scegliere a JavaScript cosa fare con if ed else',
          'Trasformare il testo del prompt in un numero con Number()',
          'Gestire più di due casi con else if',
          'Mostrare il risultato di una decisione con innerHTML e style'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">JavaScript Impara a Scegliere!</h2>

        <div className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-8 rounded-lg mb-6">
          <p className="text-xl mb-4">
            Finora i tuoi programmi fanno <strong>sempre la stessa cosa</strong>, qualunque cosa risponda l&apos;utente...
          </p>
          <p className="text-2xl font-bold">
            Ora impareranno a <strong>decidere</strong>: &quot;se è giusto fai questo, altrimenti fai quello&quot;! 🤔
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-teal-50 p-6 rounded-lg border-2 border-teal-200">
            <div className="text-4xl mb-3">⚖️</div>
            <h3 className="font-bold text-gray-900 mb-2">Confrontare</h3>
            <p className="text-gray-600 text-sm">
              Uguale? Diverso? Più grande? Più piccolo?
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <div className="text-4xl mb-3">🔀</div>
            <h3 className="font-bold text-gray-900 mb-2">Scegliere</h3>
            <p className="text-gray-600 text-sm">
              Prendere una strada o l&apos;altra con if ed else
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-200">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold text-gray-900 mb-2">Reagire</h3>
            <p className="text-gray-600 text-sm">
              Mostrare in pagina il risultato giusto, con il colore giusto!
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
          <h3 className="font-bold text-yellow-800 mb-2">💡 Esempi nel Mondo Reale</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong>Login:</strong> se la password è giusta entri, altrimenti &quot;Password errata&quot; 🔐</li>
            <li>• <strong>Videogiochi:</strong> se le vite arrivano a 0... GAME OVER 🎮</li>
            <li>• <strong>Registro elettronico:</strong> se il voto è sotto il 6 diventa rosso 📕</li>
          </ul>
        </div>
      </section>

      {/* I confronti */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">⚖️ I Confronti: Domande con Risposta Sì o No</h2>

        <p className="text-lg mb-4">
          Per decidere, JavaScript deve prima <strong>fare una domanda</strong>: &quot;questi due valori sono uguali?&quot;,
          &quot;questo numero è più grande di quello?&quot;. La risposta è sempre una sola parola:
          {' '}<code className="bg-gray-100 px-2 py-1 rounded text-green-600">true</code> (vero) oppure
          {' '}<code className="bg-gray-100 px-2 py-1 rounded text-red-600">false</code> (falso).
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-2 border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-gray-900">Simbolo</th>
                <th className="p-3 text-left text-gray-900">Domanda</th>
                <th className="p-3 text-left text-gray-900">Esempio</th>
                <th className="p-3 text-left text-gray-900">Risultato</th>
              </tr>
            </thead>
            <tbody className="font-mono text-sm">
              <tr className="border-t"><td className="p-3 font-bold text-blue-700">===</td><td className="p-3 font-sans">Sono uguali?</td><td className="p-3">5 === 5</td><td className="p-3 text-green-700 font-bold">true</td></tr>
              <tr className="border-t"><td className="p-3 font-bold text-blue-700">!==</td><td className="p-3 font-sans">Sono diversi?</td><td className="p-3">5 !== 3</td><td className="p-3 text-green-700 font-bold">true</td></tr>
              <tr className="border-t"><td className="p-3 font-bold text-blue-700">&gt;</td><td className="p-3 font-sans">È maggiore?</td><td className="p-3">10 &gt; 3</td><td className="p-3 text-green-700 font-bold">true</td></tr>
              <tr className="border-t"><td className="p-3 font-bold text-blue-700">&lt;</td><td className="p-3 font-sans">È minore?</td><td className="p-3">10 &lt; 3</td><td className="p-3 text-red-700 font-bold">false</td></tr>
              <tr className="border-t"><td className="p-3 font-bold text-blue-700">&gt;=</td><td className="p-3 font-sans">È maggiore o uguale?</td><td className="p-3">18 &gt;= 18</td><td className="p-3 text-green-700 font-bold">true</td></tr>
              <tr className="border-t"><td className="p-3 font-bold text-blue-700">&lt;=</td><td className="p-3 font-sans">È minore o uguale?</td><td className="p-3">7 &lt;= 6</td><td className="p-3 text-red-700 font-bold">false</td></tr>
            </tbody>
          </table>
        </div>

        <CodeExample
          title="Prova i confronti nella console"
          code={`console.log(5 === 5);          // true
console.log(5 === 3);          // false
console.log("ciao" === "ciao"); // true
console.log("Ciao" === "ciao"); // false: le maiuscole contano!
console.log(10 > 3);           // true
console.log(18 >= 18);         // true`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded mt-6">
          <h3 className="font-bold text-red-800 mb-2">⚠️ Attenzione: = e === sono due cose diverse!</h3>
          <div className="grid md:grid-cols-2 gap-4 mt-3">
            <div className="bg-white p-4 rounded border border-red-200">
              <p className="font-mono font-bold text-gray-900 mb-1">let voto = 8;</p>
              <p className="text-gray-700 text-sm">Un <strong>uguale</strong> = <strong>metti</strong> 8 dentro la variabile (lo conosci dalla Lezione 3)</p>
            </div>
            <div className="bg-white p-4 rounded border border-red-200">
              <p className="font-mono font-bold text-gray-900 mb-1">voto === 8</p>
              <p className="text-gray-700 text-sm">Tre <strong>uguali</strong> = <strong>chiedi</strong> &quot;voto è uguale a 8?&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* if */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🤔 if - &quot;Se...&quot;</h2>

        <p className="text-lg mb-4">
          <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">if</code> in inglese vuol dire <strong>&quot;se&quot;</strong>.
          Esegue le istruzioni tra graffe <strong>solo se</strong> la condizione è <code className="bg-gray-100 px-1 rounded">true</code>.
        </p>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Come Funziona</h3>
          <div className="bg-black/30 p-4 rounded border-2 border-white/30">
            <p className="font-mono text-yellow-200">if (condizione) &#123;</p>
            <p className="font-mono text-yellow-200 pl-6">// istruzioni da eseguire se è vera</p>
            <p className="font-mono text-yellow-200">&#125;</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Smontiamo la Riga</h3>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <p className="font-mono text-lg text-center">
            <span className="text-pink-300">if</span>
            <span className="text-white"> </span>
            <span className="text-green-300">(risposta === &quot;8&quot;)</span>
            <span className="text-white"> </span>
            <span className="text-yellow-300">&#123; ... &#125;</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-pink-50 p-4 rounded-lg border-2 border-pink-200">
            <p className="font-mono font-bold text-pink-700 mb-1">if</p>
            <p className="text-gray-700 text-sm">&quot;Se...&quot;: sta per arrivare una domanda</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
            <p className="font-mono font-bold text-green-700 mb-1">( condizione )</p>
            <p className="text-gray-700 text-sm">La domanda, sempre tra <strong>parentesi tonde</strong></p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
            <p className="font-mono font-bold text-yellow-700 mb-1">&#123; ... &#125;</p>
            <p className="text-gray-700 text-sm">Cosa fare se la risposta è sì, tra <strong>parentesi graffe</strong></p>
          </div>
        </div>

        <CodeExample
          title="Il primo if"
          code={`let risposta = prompt("Quanto fa 5 + 3?");

if (risposta === "8") {
  alert("✅ Giusto!");
}

// Se la risposta è sbagliata... non succede niente!`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded mt-6">
          <p className="font-bold text-purple-800 mb-2">💡 Perché &quot;8&quot; tra virgolette?</p>
          <p className="text-gray-700">
            <code className="bg-purple-100 px-1 rounded">prompt()</code> restituisce sempre un <strong>testo</strong>, anche se l&apos;utente
            scrive un numero. Quindi qui lo confrontiamo con il testo <code className="bg-purple-100 px-1 rounded">&quot;8&quot;</code>.
            Funziona, ma c&apos;è un modo migliore: trasformare il testo in un <strong>numero vero</strong>. Lo vediamo subito!
          </p>
        </div>
      </section>

      {/* Number() */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🔢 Number() - Dal Testo al Numero</h2>

        <p className="text-lg mb-4">
          Per JavaScript <code className="bg-gray-100 px-2 py-1 rounded">&quot;8&quot;</code> (testo, tra virgolette) e
          {' '}<code className="bg-gray-100 px-2 py-1 rounded">8</code> (numero) sono <strong>due cose diverse</strong>, e per
          {' '}<code className="bg-gray-100 px-2 py-1 rounded text-blue-600">===</code> non sono uguali!
        </p>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Come Funziona</h3>
          <div className="bg-black/30 p-4 rounded border-2 border-white/30">
            <p className="font-mono text-yellow-200">Number(&quot;8&quot;) → 8</p>
          </div>
          <p className="text-sm mt-3 text-white/80">
            Gli dai un testo tra le parentesi, ti restituisce il numero corrispondente.
          </p>
        </div>

        <CodeExample
          title="Testo o numero?"
          code={`console.log("8" === 8);          // false: testo e numero sono diversi
console.log(Number("8") === 8);  // true: ora sono due numeri
console.log(Number("ciao"));     // NaN: "ciao" non è un numero!`}
          language="javascript"
          showLineNumbers
        />

        <p className="text-lg mb-4 mt-6">
          Quando dal <code className="bg-gray-100 px-2 py-1 rounded">prompt()</code> ti serve un numero, usa sempre questo schema in due righe:
        </p>

        <CodeExample
          title="Il primo if con Number()"
          code={`let testo = prompt("Quanto fa 5 + 3?");   // "8" (testo)
let risposta = Number(testo);              // 8 (numero)

if (risposta === 8) {
  alert("✅ Giusto!");
}`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mt-6">
          <h3 className="font-bold text-yellow-800 mb-2">⭐ Regola d&apos;Oro</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Ti serve un <strong>numero</strong> (risultato, età, voto...)? → <code className="bg-yellow-100 px-1 rounded">Number()</code> e confronta con un numero <strong>senza virgolette</strong>.</li>
            <li>• Ti serve un <strong>testo</strong> (nome, password, città...)? → niente Number(), confronta con un testo <strong>tra virgolette</strong>.</li>
            <li>• <strong>NaN</strong> vuol dire &quot;Not a Number&quot; (non è un numero): succede se l&apos;utente scrive lettere al posto di cifre.</li>
          </ul>
        </div>
      </section>

      {/* if / else */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🔀 else - &quot;Altrimenti...&quot;</h2>

        <p className="text-lg mb-4">
          Con il solo <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">if</code>, se la risposta è sbagliata non succede nulla.
          Con <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">else</code> (&quot;altrimenti&quot;) diciamo a JavaScript
          cosa fare <strong>in tutti gli altri casi</strong>.
        </p>

        <div className="bg-gradient-to-r from-green-500 to-red-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Due Strade, Se ne Prende Sempre Una</h3>
          <div className="bg-black/30 p-4 rounded border-2 border-white/30">
            <p className="font-mono text-yellow-200">if (condizione) &#123;</p>
            <p className="font-mono text-yellow-200 pl-6">// strada 1: la condizione è vera</p>
            <p className="font-mono text-yellow-200">&#125; else &#123;</p>
            <p className="font-mono text-yellow-200 pl-6">// strada 2: la condizione è falsa</p>
            <p className="font-mono text-yellow-200">&#125;</p>
          </div>
          <p className="text-sm mt-3 text-white/80">
            Dopo <strong>else</strong> non si scrive nessuna condizione: vale per &quot;tutto il resto&quot;.
          </p>
        </div>

        <CodeExample
          title="Il quiz che controlla la risposta"
          code={`let testo = prompt("Quanto fa 5 + 3?");
let risposta = Number(testo);
let esito = document.getElementById("esito");

if (risposta === 8) {
  esito.innerHTML = "✅ Giusto! Bravissimo!";
  esito.style.color = "green";
} else {
  esito.innerHTML = "❌ Sbagliato! La risposta era 8";
  esito.style.color = "red";
}`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mt-6">
          <p className="font-bold text-blue-800 mb-2">🔙 Ti ricordi il quiz della Lezione 3?</p>
          <p className="text-gray-700">
            Chiedeva &quot;Quanto fa 5 + 3?&quot; ma non controllava la risposta. Ora sì! Trasformiamo la risposta in numero
            con <strong>Number()</strong>, scriviamo il risultato in pagina con <strong>innerHTML</strong> (Lezione 4) e lo coloriamo
            con <strong>style</strong> (Lezione 5).
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Il Quiz che Controlla"
          description="Rispondi giusto e poi sbagliato: cosa cambia?"
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
    }
    p {
      font-size: 24px;
      font-weight: bold;
      color: #666;
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
  </style>
</head>
<body>
  <h1>🎯 Quiz Matematico</h1>

  <button id="btnRispondi">Rispondi alla domanda</button>

  <p id="esito">Clicca il pulsante per iniziare!</p>

  <script>
    function controllaRisposta() {
      let testo = prompt("Quanto fa 5 + 3?");
      let risposta = Number(testo);
      let esito = document.getElementById("esito");

      if (risposta === 8) {
        esito.innerHTML = "✅ Giusto! Bravissimo!";
        esito.style.color = "green";
      } else {
        esito.innerHTML = "❌ Sbagliato! La risposta era 8";
        esito.style.color = "red";
      }
    }

    document.getElementById("btnRispondi").addEventListener("click", controllaRisposta);
  </script>
</body>
</html>`}
        />
      </section>

      {/* Esempio: La porta segreta */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🔐 Esempio: La Porta Segreta</h2>

        <p className="text-lg mb-4">
          Un classico: la porta si apre solo con la password giusta. La password è <strong>apriti</strong>
          {' '}(tutta minuscola!).
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <CodeExample
            title="📄 HTML"
            code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>La Porta Segreta</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div id="porta">🔒 Porta chiusa</div>

  <button id="btnEntra">Inserisci la password</button>

  <script>
    function controllaPassword() {
      let password = prompt("Qual è la password?");
      let porta = document.getElementById("porta");

      if (password === "apriti") {
        porta.innerHTML = "🔓 Benvenuto!";
        porta.style.backgroundColor = "mediumseagreen";
      } else {
        porta.innerHTML = "⛔ Password sbagliata!";
        porta.style.backgroundColor = "tomato";
      }
    }

    document.getElementById("btnEntra").addEventListener("click", controllaPassword);
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
  width: 250px;
  padding: 40px 20px;
  margin: 0 auto 30px;
  background-color: #555;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border-radius: 15px;
}

button {
  padding: 12px 25px;
  font-size: 18px;
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
          title="La Porta Segreta"
          description="Prova prima una password a caso, poi quella giusta: apriti"
          height="400px"
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
      width: 250px;
      padding: 40px 20px;
      margin: 0 auto 30px;
      background-color: #555;
      color: white;
      font-size: 24px;
      font-weight: bold;
      border-radius: 15px;
    }
    button {
      padding: 12px 25px;
      font-size: 18px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div id="porta">🔒 Porta chiusa</div>

  <button id="btnEntra">Inserisci la password</button>

  <script>
    function controllaPassword() {
      let password = prompt("Qual è la password?");
      let porta = document.getElementById("porta");

      if (password === "apriti") {
        porta.innerHTML = "🔓 Benvenuto!";
        porta.style.backgroundColor = "mediumseagreen";
      } else {
        porta.innerHTML = "⛔ Password sbagliata!";
        porta.style.backgroundColor = "tomato";
      }
    }

    document.getElementById("btnEntra").addEventListener("click", controllaPassword);
  </script>
</body>
</html>`}
        />

        <h3 className="text-xl font-bold mb-3 mt-8">La Stessa Cosa con !==</h3>
        <p className="text-lg mb-4">
          Con <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">!==</code> (&quot;è diverso da&quot;) la domanda si capovolge,
          e quindi si scambiano anche le due strade:
        </p>

        <CodeExample
          title="Domanda al contrario, stesso risultato"
          code={`if (password !== "apriti") {
  porta.innerHTML = "⛔ Password sbagliata!";
  porta.style.backgroundColor = "tomato";
} else {
  porta.innerHTML = "🔓 Benvenuto!";
  porta.style.backgroundColor = "mediumseagreen";
}`}
          language="javascript"
          showLineNumbers
        />
      </section>

      {/* Esempio: maggiore o uguale */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎢 Esempio: Puoi Salire sulle Montagne Russe?</h2>

        <p className="text-lg mb-4">
          Non sempre si controlla se due cose sono uguali: a volte serve sapere se un numero è <strong>abbastanza grande</strong>.
          Per salire bisogna essere alti almeno 140 cm.
        </p>

        <CodeExample
          title="Confrontare numeri con >="
          code={`let testo = prompt("Quanto sei alto? (in cm)");
let altezza = Number(testo);
let cartello = document.getElementById("cartello");

if (altezza >= 140) {
  cartello.innerHTML = "🎢 Puoi salire! Buon divertimento!";
  cartello.style.color = "green";
} else {
  cartello.innerHTML = "🚫 Mi dispiace, sei troppo basso";
  cartello.style.color = "red";
}`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded mt-6">
          <p className="font-bold text-purple-800 mb-2">💡 Numeri con numeri</p>
          <p className="text-gray-700">
            L&apos;altezza è un numero, quindi la trasformiamo con <code className="bg-purple-100 px-1 rounded">Number()</code> e la
            confrontiamo con 140 scritto <strong>senza virgolette</strong>. &quot;Maggiore o uguale&quot; ha senso solo tra numeri!
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Le Montagne Russe"
          description="Prova con 120, con 140 e con 175"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      text-align: center;
      background: #fff8e1;
    }
    p {
      font-size: 24px;
      font-weight: bold;
      color: #666;
    }
    button {
      padding: 15px 30px;
      font-size: 18px;
      background: orange;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>🎢 Montagne Russe</h1>
  <p>Altezza minima: 140 cm</p>

  <button id="btnMisura">📏 Misurati</button>

  <p id="cartello"></p>

  <script>
    function controllaAltezza() {
      let testo = prompt("Quanto sei alto? (in cm)");
      let altezza = Number(testo);
      let cartello = document.getElementById("cartello");

      if (altezza >= 140) {
        cartello.innerHTML = "🎢 Puoi salire! Buon divertimento!";
        cartello.style.color = "green";
      } else {
        cartello.innerHTML = "🚫 Mi dispiace, sei troppo basso";
        cartello.style.color = "red";
      }
    }

    document.getElementById("btnMisura").addEventListener("click", controllaAltezza);
  </script>
</body>
</html>`}
        />
      </section>

      {/* else if */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🪜 else if - Quando le Strade Sono Più di Due</h2>

        <p className="text-lg mb-4">
          Giusto o sbagliato, dentro o fuori... e se i casi sono <strong>tre o più</strong>? Si aggiungono altre domande in mezzo
          con <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">else if</code> (&quot;altrimenti, se...&quot;).
        </p>

        <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Una Scala di Domande</h3>
          <div className="bg-black/30 p-4 rounded border-2 border-white/30">
            <p className="font-mono text-yellow-200">if (prima domanda) &#123;</p>
            <p className="font-mono text-yellow-200 pl-6">// se la prima è vera</p>
            <p className="font-mono text-yellow-200">&#125; else if (seconda domanda) &#123;</p>
            <p className="font-mono text-yellow-200 pl-6">// se la prima è falsa ma la seconda è vera</p>
            <p className="font-mono text-yellow-200">&#125; else &#123;</p>
            <p className="font-mono text-yellow-200 pl-6">// se nessuna è vera</p>
            <p className="font-mono text-yellow-200">&#125;</p>
          </div>
        </div>

        <CodeExample
          title="La pagella"
          code={`let testo = prompt("Che voto hai preso? (da 1 a 10)");
let voto = Number(testo);
let giudizio = document.getElementById("giudizio");

if (voto >= 9) {
  giudizio.innerHTML = "🏆 Ottimo!";
  giudizio.style.color = "green";
} else if (voto >= 6) {
  giudizio.innerHTML = "👍 Sufficiente";
  giudizio.style.color = "orange";
} else {
  giudizio.innerHTML = "📕 Insufficiente, ma non mollare!";
  giudizio.style.color = "red";
}`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mt-6">
          <h3 className="font-bold text-yellow-800 mb-2">⚠️ L&apos;Ordine Conta!</h3>
          <p className="text-gray-700 mb-2">
            JavaScript legge le domande <strong>dall&apos;alto in basso</strong> e si ferma alla <strong>prima vera</strong>: le altre le salta.
          </p>
          <ul className="text-gray-700 space-y-1">
            <li>• Voto 10: <code className="bg-yellow-100 px-1 rounded">10 &gt;= 9</code> è vero → &quot;Ottimo&quot; e basta.</li>
            <li>• Voto 7: <code className="bg-yellow-100 px-1 rounded">7 &gt;= 9</code> è falso, <code className="bg-yellow-100 px-1 rounded">7 &gt;= 6</code> è vero → &quot;Sufficiente&quot;.</li>
            <li>• Voto 4: entrambe false → si arriva all&apos;<strong>else</strong> → &quot;Insufficiente&quot;.</li>
          </ul>
          <p className="text-gray-700 mt-2">
            Se mettessi <code className="bg-yellow-100 px-1 rounded">voto &gt;= 6</code> per primo, anche un 10 diventerebbe &quot;Sufficiente&quot;!
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="La Pagella"
          description="Prova con 10, con 7 e con 4"
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
    p {
      font-size: 28px;
      font-weight: bold;
    }
    button {
      padding: 15px 30px;
      font-size: 18px;
      background: white;
      color: #667eea;
      border: 2px solid #667eea;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h1>📒 La Pagella</h1>

  <button id="btnVoto">Inserisci il voto</button>

  <p id="giudizio"></p>

  <script>
    function valutaVoto() {
      let testo = prompt("Che voto hai preso? (da 1 a 10)");
      let voto = Number(testo);
      let giudizio = document.getElementById("giudizio");

      if (voto >= 9) {
        giudizio.innerHTML = "🏆 Ottimo!";
        giudizio.style.color = "green";
      } else if (voto >= 6) {
        giudizio.innerHTML = "👍 Sufficiente";
        giudizio.style.color = "orange";
      } else {
        giudizio.innerHTML = "📕 Insufficiente, ma non mollare!";
        giudizio.style.color = "red";
      }
    }

    document.getElementById("btnVoto").addEventListener("click", valutaVoto);
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
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 1: Un solo uguale</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm">if (risposta = &quot;8&quot;) &#123;</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm">if (risposta === &quot;8&quot;) &#123;</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Il più subdolo di tutti: <strong>nessun errore</strong> nella console, ma con un solo uguale stai <strong>mettendo</strong> &quot;8&quot;
              dentro la variabile invece di chiedere. Risultato: <strong>qualsiasi risposta</strong> diventa giusta!
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 2: Dimenticare Number()</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm whitespace-pre-wrap">{`let risposta = prompt("Quanto fa 5 + 3?");
if (risposta === 8) {`}</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm whitespace-pre-wrap">{`let testo = prompt("Quanto fa 5 + 3?");
let risposta = Number(testo);
if (risposta === 8) {`}</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Senza Number() la variabile contiene il testo &quot;8&quot;, non il numero 8. Per <code className="bg-red-100 px-1 rounded">===</code> sono
              due cose diverse: la risposta risulta <strong>sempre sbagliata</strong>, anche quando è giusta. Nessun errore nella console!
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 3: Maiuscole e minuscole</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">L&apos;utente scrive</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm">roma</code>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-700 mb-1">Il codice controlla</p>
                <code className="block bg-white p-3 rounded border border-gray-200 text-sm">if (risposta === &quot;Roma&quot;) &#123;</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Per JavaScript <code className="bg-red-100 px-1 rounded">&quot;roma&quot;</code> e <code className="bg-red-100 px-1 rounded">&quot;Roma&quot;</code> sono
              {' '}<strong>diversi</strong>: === controlla lettera per lettera. Scrivi nella domanda come va data la risposta, oppure
              aggiungi un <strong>else if</strong> per la versione minuscola.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 4: Dimenticare le parentesi tonde</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm">if risposta === &quot;8&quot; &#123;</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm">if (risposta === &quot;8&quot;) &#123;</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              La condizione va <strong>sempre</strong> tra parentesi tonde. Senza, nella console vedi
              <code className="bg-red-100 px-1 rounded mx-1">SyntaxError: Unexpected identifier &apos;risposta&apos;</code>
              e <strong>tutto lo script</strong> smette di funzionare.
            </p>
          </div>
        </div>
      </section>

      {/* Esercizio Guidato */}
      <Exercise
        title="🎯 Esercizio Guidato: Il Quiz delle Capitali"
        steps={[
          'Crea una cartella "quiz-capitali" in VS Code',
          'Dentro la cartella, crea un file "index.html"',
          {
            text: 'Scrivi la struttura HTML: un titolo e tre domande. Ogni domanda ha un pulsante e un paragrafo vuoto dove apparirà il risultato',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Quiz delle Capitali</title>
</head>
<body>

  <h1>🌍 Quiz delle Capitali</h1>

  <button id="btnDomanda1">Domanda 1: Italia</button>
  <p id="esito1"></p>

  <button id="btnDomanda2">Domanda 2: Francia</button>
  <p id="esito2"></p>

  <button id="btnDomanda3">Domanda 3: Spagna</button>
  <p id="esito3"></p>

</body>
</html>`,
            language: 'html',
          },
          'Salva (Ctrl+S) e apri nel browser - per ora i pulsanti non fanno nulla',
          {
            text: 'Aggiungi lo stile CSS della pagina',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Quiz delle Capitali</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 40px;
      background-color: #f0f4ff;
    }

    h1 {
      color: #667eea;
    }

    button {
      padding: 12px 20px;
      font-size: 16px;
      margin-top: 10px;
      background-color: #667eea;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    p {
      font-size: 20px;
      font-weight: bold;
      min-height: 25px;
    }
  </style>
</head>
<body>

  <h1>🌍 Quiz delle Capitali</h1>

  <button id="btnDomanda1">Domanda 1: Italia</button>
  <p id="esito1"></p>

  <button id="btnDomanda2">Domanda 2: Francia</button>
  <p id="esito2"></p>

  <button id="btnDomanda3">Domanda 3: Spagna</button>
  <p id="esito3"></p>

</body>
</html>`,
            language: 'html',
            highlightLines: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
          },
          {
            text: 'Scrivi la funzione domanda1 con if/else e collegala al pulsante btnDomanda1',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Quiz delle Capitali</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 40px;
      background-color: #f0f4ff;
    }

    h1 {
      color: #667eea;
    }

    button {
      padding: 12px 20px;
      font-size: 16px;
      margin-top: 10px;
      background-color: #667eea;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    p {
      font-size: 20px;
      font-weight: bold;
      min-height: 25px;
    }
  </style>
</head>
<body>

  <h1>🌍 Quiz delle Capitali</h1>

  <button id="btnDomanda1">Domanda 1: Italia</button>
  <p id="esito1"></p>

  <button id="btnDomanda2">Domanda 2: Francia</button>
  <p id="esito2"></p>

  <button id="btnDomanda3">Domanda 3: Spagna</button>
  <p id="esito3"></p>

  <script>
    function domanda1() {
      let risposta = prompt("Qual è la capitale dell'Italia? (con la maiuscola)");
      let esito = document.getElementById("esito1");

      if (risposta === "Roma") {
        esito.innerHTML = "✅ Esatto!";
        esito.style.color = "green";
      } else {
        esito.innerHTML = "❌ No, è Roma";
        esito.style.color = "red";
      }
    }

    document.getElementById("btnDomanda1").addEventListener("click", domanda1);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64],
          },
          'Ricarica e prova la domanda 1: prima con la risposta giusta, poi con una sbagliata',
          {
            text: 'Aggiungi le funzioni domanda2 e domanda3: sono uguali alla prima, cambiano solo la domanda, la risposta e il paragrafo',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Quiz delle Capitali</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 40px;
      background-color: #f0f4ff;
    }

    h1 {
      color: #667eea;
    }

    button {
      padding: 12px 20px;
      font-size: 16px;
      margin-top: 10px;
      background-color: #667eea;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    p {
      font-size: 20px;
      font-weight: bold;
      min-height: 25px;
    }
  </style>
</head>
<body>

  <h1>🌍 Quiz delle Capitali</h1>

  <button id="btnDomanda1">Domanda 1: Italia</button>
  <p id="esito1"></p>

  <button id="btnDomanda2">Domanda 2: Francia</button>
  <p id="esito2"></p>

  <button id="btnDomanda3">Domanda 3: Spagna</button>
  <p id="esito3"></p>

  <script>
    function domanda1() {
      let risposta = prompt("Qual è la capitale dell'Italia? (con la maiuscola)");
      let esito = document.getElementById("esito1");

      if (risposta === "Roma") {
        esito.innerHTML = "✅ Esatto!";
        esito.style.color = "green";
      } else {
        esito.innerHTML = "❌ No, è Roma";
        esito.style.color = "red";
      }
    }

    function domanda2() {
      let risposta = prompt("Qual è la capitale della Francia? (con la maiuscola)");
      let esito = document.getElementById("esito2");

      if (risposta === "Parigi") {
        esito.innerHTML = "✅ Esatto!";
        esito.style.color = "green";
      } else {
        esito.innerHTML = "❌ No, è Parigi";
        esito.style.color = "red";
      }
    }

    function domanda3() {
      let risposta = prompt("Qual è la capitale della Spagna? (con la maiuscola)");
      let esito = document.getElementById("esito3");

      if (risposta === "Madrid") {
        esito.innerHTML = "✅ Esatto!";
        esito.style.color = "green";
      } else {
        esito.innerHTML = "❌ No, è Madrid";
        esito.style.color = "red";
      }
    }

    document.getElementById("btnDomanda1").addEventListener("click", domanda1);
    document.getElementById("btnDomanda2").addEventListener("click", domanda2);
    document.getElementById("btnDomanda3").addEventListener("click", domanda3);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 90, 91],
          },
          'Ricarica e rispondi a tutte e tre le domande: il quiz è completo! 🎉'
        ]}
        experiments={[
          'Aggiungi una quarta domanda (Germania → Berlino) con btnDomanda4, esito4 e la funzione domanda4',
          'Rispondi "roma" tutto minuscolo: cosa succede? Aggiungi un else if che scrive "Quasi! Ricorda la maiuscola" in arancione',
          'Prova a scrivere = al posto di === nella domanda 1: ora qualsiasi risposta è giusta! Riesci a spiegare perché?',
          'Quando la risposta è giusta cambia anche lo sfondo del paragrafo con esito.style.backgroundColor',
          'Riscrivi la domanda 1 usando !== al posto di === (ricordati di scambiare le due strade)',
          'Aggiungi una domanda di matematica ("Quanto fa 7 x 6?"): qui la risposta è un numero, quindi usa Number() e confronta con 42 senza virgolette'
        ]}
      />

      {/* Checklist Finale */}
      <section className="mb-12 mt-12">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✅</span> Hai Completato la Lezione!
          </h2>
          <p className="text-gray-700 mb-4">
            Ora i tuoi programmi non fanno più sempre la stessa cosa: sanno <strong>decidere</strong>! 🤔
          </p>
          <div className="bg-white rounded p-4 border border-green-200">
            <p className="font-bold text-gray-900 mb-2">Cosa hai imparato:</p>
            <ul className="space-y-1 text-gray-700">
              <li>✅ Confrontare valori con <strong>=== !== &gt; &lt; &gt;= &lt;=</strong></li>
              <li>✅ Un confronto dà sempre <strong>true</strong> o <strong>false</strong></li>
              <li>✅ La differenza tra <strong>=</strong> (metti) e <strong>===</strong> (chiedi)</li>
              <li>✅ Trasformare il testo del prompt in un numero con <strong>Number()</strong></li>
              <li>✅ Eseguire istruzioni solo se una condizione è vera con <strong>if</strong></li>
              <li>✅ Scegliere tra due strade con <strong>if / else</strong></li>
              <li>✅ Gestire più casi con <strong>else if</strong>, facendo attenzione all&apos;ordine</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sfida Opzionale */}
      <Challenge
        title="Indovina il Numero"
        description="Il computer pensa un numero segreto: 7. Un pulsante chiede all'utente di indovinarlo e in pagina compare un indizio: troppo alto, troppo basso oppure indovinato!"
        requirements={[
          'Un paragrafo con id indizio e un pulsante con id btnProva',
          'Una funzione indovina collegata al pulsante con addEventListener',
          'Una variabile segreto con il valore 7 e il tentativo dell\'utente preso con prompt() e trasformato in numero con Number()',
          'Con if / else if / else: "📈 Troppo alto!" in arancione, "📉 Troppo basso!" in blu, "🎉 Indovinato!" in verde',
          'Nessun JavaScript dentro i tag HTML: solo addEventListener nello script'
        ]}
        hint="Prima chiedi se tentativo > segreto (troppo alto), poi con else if se tentativo < segreto (troppo basso). Se non è né più grande né più piccolo... per forza è uguale: basta un else!"
      />

      {/* Riepilogo Finale */}
      <section className="mt-12 bg-gradient-to-r from-teal-500 to-blue-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Ottimo Lavoro!</h2>
        <p className="text-xl mb-4">
          Ora JavaScript sa <strong>prendere decisioni</strong> e i tuoi quiz controllano davvero le risposte! 🎯
        </p>
        <div className="bg-black/20 p-4 rounded border-2 border-white/30">
          <p className="font-bold mb-2 text-yellow-200">🚀 Comandi JavaScript Totali Imparati: 14</p>
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
            <li>.style - Cambia l&apos;aspetto di un elemento (Lezione 5)</li>
            <li>if / else / else if - Fa scegliere a JavaScript cosa fare (Lezione 6) ✨ NUOVO</li>
            <li>Number() - Trasforma un testo in numero (Lezione 6) ✨ NUOVO</li>
          </ul>
          <p className="font-bold mt-4 mb-2 text-yellow-200">💡 Concetti Chiave:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>I confronti (=== !== &gt; &lt; &gt;= &lt;=) rispondono true o false</li>
            <li>= mette un valore, === fa una domanda</li>
            <li>prompt() restituisce sempre un testo: se ti serve un numero usa Number()</li>
            <li>Con else if JavaScript si ferma alla prima condizione vera</li>
          </ul>
        </div>
        <p className="text-lg font-semibold mt-4">
          Prossima lezione: <strong>Operatori e Calcolatrice</strong>! JavaScript imparerà a fare i conti! 🧮
        </p>
      </section>

      {/* Allenati nell'Officina */}
      <AllenatiOfficina lezioneSlug="lezione-6-decisioni-quiz" />

      {/* Prossimi Passi */}
      <section className="mb-12 mt-12">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Prossimi Passi
          </h2>
          <p className="text-gray-700 mb-4">
            Nella prossima lezione JavaScript diventerà una <strong>calcolatrice</strong>: somme, sottrazioni, moltiplicazioni e divisioni
            con <code className="bg-blue-100 px-2 py-1 rounded">+ - * /</code>.
          </p>
          <p className="text-gray-700">
            Imparerai anche a leggere quello che l&apos;utente scrive in una <strong>casella di testo</strong>, senza più usare prompt(),
            e ritroverai <code className="bg-blue-100 px-2 py-1 rounded">Number()</code>: servirà per fare i conti con i numeri scritti nelle caselle! 🧮
          </p>
        </div>
      </section>

    </LessonLayout>
  );
}
