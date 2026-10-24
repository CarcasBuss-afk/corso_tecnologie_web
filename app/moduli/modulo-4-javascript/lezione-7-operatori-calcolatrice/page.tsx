import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import JavaScriptDemo from '@/components/didattica/JavaScriptDemo';
import Challenge from '@/components/didattica/Challenge';
import AllenatiOfficina from '@/components/didattica/AllenatiOfficina';

export default function Lezione7OperatoriCalcolatrice() {
  const lezioni = getLezioniByModuloSlug('modulo-4-javascript');

  return (
    <LessonLayout
      moduloSlug="modulo-4-javascript"
      moduloTitolo="Modulo 4: JavaScript - Interattività"
      lezioni={lezioni}
      lezioneSlug="lezione-7-operatori-calcolatrice"
      lezioneTitolo="Operatori e Calcolatrice"
    >
      <LessonHeader
        numero={7}
        titolo="Operatori e Calcolatrice"
        durata="2 ore"
        difficolta="media"
        obiettivi={[
          'Fare calcoli con + - * / e il resto %',
          'Leggere quello che l\'utente scrive in una casella di testo con .value',
          'Usare Number() per non far diventare i numeri "testo attaccato"',
          'Contare i click con ++ e -- e una variabile fuori dalla funzione'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">JavaScript Fa i Conti!</h2>

        <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white p-8 rounded-lg mb-6">
          <p className="text-xl mb-4">
            Nella lezione scorsa JavaScript ha imparato a <strong>decidere</strong>...
          </p>
          <p className="text-2xl font-bold">
            Ora imparerà a <strong>calcolare</strong>, leggendo i numeri direttamente dalle caselle della pagina! 🧮
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200">
            <div className="text-4xl mb-3">➕</div>
            <h3 className="font-bold text-gray-900 mb-2">Operatori</h3>
            <p className="text-gray-600 text-sm">
              Somme, sottrazioni, moltiplicazioni, divisioni e resto
            </p>
          </div>

          <div className="bg-cyan-50 p-6 rounded-lg border-2 border-cyan-200">
            <div className="text-4xl mb-3">⌨️</div>
            <h3 className="font-bold text-gray-900 mb-2">Caselle di Testo</h3>
            <p className="text-gray-600 text-sm">
              Basta prompt(): l&apos;utente scrive direttamente nella pagina
            </p>
          </div>

          <div className="bg-sky-50 p-6 rounded-lg border-2 border-sky-200">
            <div className="text-4xl mb-3">🔢</div>
            <h3 className="font-bold text-gray-900 mb-2">Contatori</h3>
            <p className="text-gray-600 text-sm">
              Contare i click, i punti, le vite...
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
          <h3 className="font-bold text-yellow-800 mb-2">💡 Esempi nel Mondo Reale</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong>Carrello online:</strong> quantità × prezzo, più la spedizione 🛒</li>
            <li>• <strong>Videogiochi:</strong> il punteggio sale di 1 a ogni moneta raccolta 🪙</li>
            <li>• <strong>Like:</strong> il numero accanto al cuore aumenta quando clicchi ❤️</li>
          </ul>
        </div>
      </section>

      {/* Operatori matematici */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">➕ Gli Operatori Matematici</h2>

        <p className="text-lg mb-4">
          Sono quasi gli stessi della matematica che conosci. Cambiano solo i simboli di <strong>per</strong> e <strong>diviso</strong>,
          e ce n&apos;è uno nuovo: il <strong>resto</strong>.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-2 border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-gray-900">Simbolo</th>
                <th className="p-3 text-left text-gray-900">Operazione</th>
                <th className="p-3 text-left text-gray-900">Esempio</th>
                <th className="p-3 text-left text-gray-900">Risultato</th>
              </tr>
            </thead>
            <tbody className="font-mono text-sm">
              <tr className="border-t"><td className="p-3 font-bold text-blue-700">+</td><td className="p-3 font-sans">Addizione</td><td className="p-3">7 + 3</td><td className="p-3 font-bold">10</td></tr>
              <tr className="border-t"><td className="p-3 font-bold text-blue-700">-</td><td className="p-3 font-sans">Sottrazione</td><td className="p-3">7 - 3</td><td className="p-3 font-bold">4</td></tr>
              <tr className="border-t"><td className="p-3 font-bold text-blue-700">*</td><td className="p-3 font-sans">Moltiplicazione (per)</td><td className="p-3">7 * 3</td><td className="p-3 font-bold">21</td></tr>
              <tr className="border-t"><td className="p-3 font-bold text-blue-700">/</td><td className="p-3 font-sans">Divisione (diviso)</td><td className="p-3">7 / 2</td><td className="p-3 font-bold">3.5</td></tr>
              <tr className="border-t"><td className="p-3 font-bold text-blue-700">%</td><td className="p-3 font-sans">Resto della divisione</td><td className="p-3">7 % 2</td><td className="p-3 font-bold">1</td></tr>
            </tbody>
          </table>
        </div>

        <CodeExample
          title="Prova i calcoli nella console"
          code={`console.log(7 + 3);       // 10
console.log(7 * 3);       // 21
console.log(7 / 2);       // 3.5 (i decimali si scrivono con il PUNTO)

// Si possono salvare i risultati nelle variabili
let prezzo = 4;
let quantita = 3;
let totale = prezzo * quantita;
console.log(totale);      // 12`}
          language="javascript"
          showLineNumbers
        />

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <h3 className="font-bold text-blue-800 mb-2">📐 Prima Moltiplicazioni e Divisioni</h3>
            <p className="text-gray-700 mb-2">Come in matematica: <code className="bg-blue-100 px-1 rounded">*</code> e <code className="bg-blue-100 px-1 rounded">/</code> vengono prima di <code className="bg-blue-100 px-1 rounded">+</code> e <code className="bg-blue-100 px-1 rounded">-</code>.</p>
            <ul className="text-gray-700 space-y-1 font-mono text-sm">
              <li>2 + 3 * 4 → 14</li>
              <li>(2 + 3) * 4 → 20</li>
            </ul>
            <p className="text-gray-700 mt-2 text-sm">Le parentesi tonde decidono cosa calcolare per primo.</p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
            <h3 className="font-bold text-purple-800 mb-2">🍬 Il Resto %: Cos&apos;è?</h3>
            <p className="text-gray-700 mb-2">
              Hai 7 caramelle da dividere tra 2 amici: ognuno ne prende 3 e ne <strong>avanza 1</strong>.
              Quella che avanza è il resto: <code className="bg-purple-100 px-1 rounded">7 % 2</code> → 1.
            </p>
            <p className="text-gray-700 text-sm">
              Trucco utile: un numero è <strong>pari</strong> se <code className="bg-purple-100 px-1 rounded">numero % 2 === 0</code> (non avanza niente).
            </p>
          </div>
        </div>
      </section>

      {/* La trappola del + */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">⚠️ La Trappola del +</h2>

        <p className="text-lg mb-4">
          Dalla Lezione 3 sai che il <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">+</code> serve anche ad <strong>attaccare i testi</strong>
          {' '}(&quot;Ciao &quot; + nome). Ma allora, se i numeri sono scritti come testo...
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <p className="font-mono text-lg font-bold text-red-700 mb-2">&quot;5&quot; + &quot;3&quot; → &quot;53&quot; 😱</p>
            <p className="text-gray-700 text-sm">Due testi: il + li <strong>attacca</strong> uno dopo l&apos;altro</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <p className="font-mono text-lg font-bold text-green-700 mb-2">5 + 3 → 8 ✅</p>
            <p className="text-gray-700 text-sm">Due numeri: il + li <strong>somma</strong></p>
          </div>
        </div>

        <CodeExample
          title="Number() ti salva"
          code={`let testo1 = "5";
let testo2 = "3";

console.log(testo1 + testo2);                  // "53" ❌ attaccati
console.log(Number(testo1) + Number(testo2));  // 8   ✅ sommati`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mt-6">
          <p className="font-bold text-blue-800 mb-2">🔙 Ripasso dalla Lezione 6</p>
          <p className="text-gray-700">
            Quello che arriva dall&apos;utente (prompt, e come vedrai subito anche le caselle di testo) è <strong>sempre un testo</strong>.
            Prima di fare i conti, trasformalo con <code className="bg-blue-100 px-1 rounded">Number()</code>. Sempre!
          </p>
        </div>
      </section>

      {/* Caselle di testo */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">⌨️ Leggere una Casella di Testo: .value</h2>

        <p className="text-lg mb-4">
          Il <code className="bg-gray-100 px-2 py-1 rounded">prompt()</code> apre ogni volta una finestra che blocca la pagina. I siti veri usano le
          {' '}<strong>caselle</strong> <code className="bg-gray-100 px-2 py-1 rounded">&lt;input&gt;</code> che conosci dal modulo HTML.
          Per leggere cosa c&apos;è scritto dentro si usa <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">.value</code>.
        </p>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Come Funziona</h3>
          <div className="bg-black/30 p-4 rounded border-2 border-white/30 space-y-1">
            <p className="font-mono text-yellow-200">&lt;input type=&quot;number&quot; id=&quot;casella&quot;&gt;</p>
            <p className="font-mono text-yellow-200">let testo = document.getElementById(&quot;casella&quot;).value;</p>
          </div>
          <p className="text-sm mt-3 text-white/80">
            Trovi la casella con il suo id (come per i pulsanti) e ne leggi il contenuto con .value
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <CodeExample
            title="Versione lunga: un passo alla volta"
            code={`let testo = document.getElementById("casella").value;
let numero = Number(testo);`}
            language="javascript"
            showLineNumbers
          />
          <CodeExample
            title="Versione corta: tutto in una riga"
            code={`let numero = Number(document.getElementById("casella").value);`}
            language="javascript"
            showLineNumbers
          />
        </div>

        <p className="text-gray-700 mt-4 mb-6">
          La versione corta si legge <strong>da dentro a fuori</strong>: prima trova la casella, poi ne legge il valore, infine lo trasforma
          in numero. Fanno esattamente la stessa cosa: da qui in avanti useremo quella corta.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-6">
          <h3 className="font-bold text-yellow-800 mb-2">⚠️ Tre Cose da Sapere</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Anche con <code className="bg-yellow-100 px-1 rounded">type=&quot;number&quot;</code>, <strong>.value è un testo</strong>: serve comunque Number(). Il type number serve a far comparire la tastiera numerica sul telefono.</li>
            <li>• Casella <strong>vuota</strong>: <code className="bg-yellow-100 px-1 rounded">Number(&quot;&quot;)</code> dà <strong>0</strong>. Nella prossima lezione impareremo a controllarlo.</li>
            <li>• I decimali vogliono il <strong>punto</strong>: <code className="bg-yellow-100 px-1 rounded">Number(&quot;2.5&quot;)</code> → 2.5, ma <code className="bg-yellow-100 px-1 rounded">Number(&quot;2,5&quot;)</code> → NaN.</li>
          </ul>
        </div>

        <h3 className="text-xl font-bold mb-3">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Il Raddoppiatore"
          description="Scrivi un numero nella casella e clicca il pulsante"
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
    input {
      width: 120px;
      padding: 10px;
      font-size: 20px;
      text-align: center;
    }
    button {
      padding: 12px 25px;
      font-size: 18px;
      background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    p {
      font-size: 26px;
      font-weight: bold;
      color: #11998e;
    }
  </style>
</head>
<body>
  <h1>✖️2 Il Raddoppiatore</h1>

  <input type="number" id="casella" placeholder="Numero">
  <button id="btnRaddoppia">Raddoppia</button>

  <p id="risultato"></p>

  <script>
    function raddoppia() {
      let numero = Number(document.getElementById("casella").value);
      let doppio = numero * 2;
      document.getElementById("risultato").innerHTML = "Il doppio è " + doppio;
    }

    document.getElementById("btnRaddoppia").addEventListener("click", raddoppia);
  </script>
</body>
</html>`}
        />
      </section>

      {/* Esempio: Calcolatrice */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🧮 Esempio: La Calcolatrice</h2>

        <p className="text-lg mb-4">
          Due caselle, quattro pulsanti, quattro funzioni. Nella divisione usiamo anche un <strong>if</strong> della lezione scorsa:
          dividere per zero non si può!
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <CodeExample
            title="📄 HTML"
            code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Calcolatrice</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>🧮 Calcolatrice</h1>

  <input type="number" id="primoNumero">
  <input type="number" id="secondoNumero">

  <div>
    <button id="btnSomma">+</button>
    <button id="btnSottrai">-</button>
    <button id="btnMoltiplica">×</button>
    <button id="btnDividi">÷</button>
  </div>

  <p id="risultato">Scrivi due numeri</p>

  <script>
    function somma() {
      let a = Number(document.getElementById("primoNumero").value);
      let b = Number(document.getElementById("secondoNumero").value);
      let risultato = a + b;
      document.getElementById("risultato").innerHTML = "Risultato: " + risultato;
    }

    function sottrai() {
      let a = Number(document.getElementById("primoNumero").value);
      let b = Number(document.getElementById("secondoNumero").value);
      let risultato = a - b;
      document.getElementById("risultato").innerHTML = "Risultato: " + risultato;
    }

    function moltiplica() {
      let a = Number(document.getElementById("primoNumero").value);
      let b = Number(document.getElementById("secondoNumero").value);
      let risultato = a * b;
      document.getElementById("risultato").innerHTML = "Risultato: " + risultato;
    }

    function dividi() {
      let a = Number(document.getElementById("primoNumero").value);
      let b = Number(document.getElementById("secondoNumero").value);

      if (b === 0) {
        document.getElementById("risultato").innerHTML = "⚠️ Non si può dividere per zero!";
      } else {
        let risultato = a / b;
        document.getElementById("risultato").innerHTML = "Risultato: " + risultato;
      }
    }

    document.getElementById("btnSomma").addEventListener("click", somma);
    document.getElementById("btnSottrai").addEventListener("click", sottrai);
    document.getElementById("btnMoltiplica").addEventListener("click", moltiplica);
    document.getElementById("btnDividi").addEventListener("click", dividi);
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
  background-color: #f0f4ff;
}

input {
  width: 100px;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  margin: 5px;
}

button {
  width: 60px;
  height: 60px;
  font-size: 26px;
  margin: 15px 5px;
  background-color: #667eea;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}

p {
  font-size: 26px;
  font-weight: bold;
  color: #333;
}`}
            language="css"
            showLineNumbers
          />
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded mb-6">
          <p className="font-bold text-purple-800 mb-2">💡 Quanta ripetizione!</p>
          <p className="text-gray-700">
            Le prime due righe di ogni funzione sono identiche. Per ora va bene così: nella <strong>Lezione 9</strong> imparerai a
            scrivere funzioni che si &quot;passano&quot; i valori, e il codice diventerà molto più corto.
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="La Calcolatrice"
          description="Prova tutte e quattro le operazioni... e prova anche a dividere per 0!"
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
      background-color: #f0f4ff;
    }
    input {
      width: 100px;
      padding: 10px;
      font-size: 20px;
      text-align: center;
      margin: 5px;
    }
    button {
      width: 60px;
      height: 60px;
      font-size: 26px;
      margin: 15px 5px;
      background-color: #667eea;
      color: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
    }
    p {
      font-size: 26px;
      font-weight: bold;
      color: #333;
    }
  </style>
</head>
<body>
  <h1>🧮 Calcolatrice</h1>

  <input type="number" id="primoNumero">
  <input type="number" id="secondoNumero">

  <div>
    <button id="btnSomma">+</button>
    <button id="btnSottrai">-</button>
    <button id="btnMoltiplica">×</button>
    <button id="btnDividi">÷</button>
  </div>

  <p id="risultato">Scrivi due numeri</p>

  <script>
    function somma() {
      let a = Number(document.getElementById("primoNumero").value);
      let b = Number(document.getElementById("secondoNumero").value);
      let risultato = a + b;
      document.getElementById("risultato").innerHTML = "Risultato: " + risultato;
    }

    function sottrai() {
      let a = Number(document.getElementById("primoNumero").value);
      let b = Number(document.getElementById("secondoNumero").value);
      let risultato = a - b;
      document.getElementById("risultato").innerHTML = "Risultato: " + risultato;
    }

    function moltiplica() {
      let a = Number(document.getElementById("primoNumero").value);
      let b = Number(document.getElementById("secondoNumero").value);
      let risultato = a * b;
      document.getElementById("risultato").innerHTML = "Risultato: " + risultato;
    }

    function dividi() {
      let a = Number(document.getElementById("primoNumero").value);
      let b = Number(document.getElementById("secondoNumero").value);

      if (b === 0) {
        document.getElementById("risultato").innerHTML = "⚠️ Non si può dividere per zero!";
      } else {
        let risultato = a / b;
        document.getElementById("risultato").innerHTML = "Risultato: " + risultato;
      }
    }

    document.getElementById("btnSomma").addEventListener("click", somma);
    document.getElementById("btnSottrai").addEventListener("click", sottrai);
    document.getElementById("btnMoltiplica").addEventListener("click", moltiplica);
    document.getElementById("btnDividi").addEventListener("click", dividi);
  </script>
</body>
</html>`}
        />
      </section>

      {/* Esempio: Pari o dispari */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎲 Esempio: Pari o Dispari?</h2>

        <p className="text-lg mb-4">
          Il resto <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">%</code> insieme a un <strong>if</strong>: se dividendo per 2 non avanza
          niente, il numero è pari.
        </p>

        <CodeExample
          title="Il resto per decidere"
          code={`let numero = Number(document.getElementById("casella").value);
let esito = document.getElementById("esito");

if (numero % 2 === 0) {
  esito.innerHTML = numero + " è PARI";
  esito.style.color = "royalblue";
} else {
  esito.innerHTML = numero + " è DISPARI";
  esito.style.color = "darkorange";
}`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Pari o Dispari?"
          description="Prova con 4, con 7 e con 100"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      text-align: center;
      background: #fffde7;
    }
    input {
      width: 120px;
      padding: 10px;
      font-size: 20px;
      text-align: center;
    }
    button {
      padding: 12px 25px;
      font-size: 18px;
      background: #444;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    p {
      font-size: 30px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>🎲 Pari o Dispari?</h1>

  <input type="number" id="casella" placeholder="Numero">
  <button id="btnControlla">Controlla</button>

  <p id="esito"></p>

  <script>
    function pariDispari() {
      let numero = Number(document.getElementById("casella").value);
      let esito = document.getElementById("esito");

      if (numero % 2 === 0) {
        esito.innerHTML = numero + " è PARI";
        esito.style.color = "royalblue";
      } else {
        esito.innerHTML = numero + " è DISPARI";
        esito.style.color = "darkorange";
      }
    }

    document.getElementById("btnControlla").addEventListener("click", pariDispari);
  </script>
</body>
</html>`}
        />
      </section>

      {/* ++ e -- */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🔢 ++ e -- : il Contatore</h2>

        <p className="text-lg mb-4">
          Aumentare di 1 è così frequente (punti, like, click...) che JavaScript ha una scorciatoia apposta.
        </p>

        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Le Due Scorciatoie</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black/20 p-4 rounded">
              <p className="font-mono text-yellow-200 mb-2">conteggio++;</p>
              <p className="text-sm">uguale a <span className="font-mono">conteggio = conteggio + 1;</span></p>
            </div>
            <div className="bg-black/20 p-4 rounded">
              <p className="font-mono text-yellow-200 mb-2">conteggio--;</p>
              <p className="text-sm">uguale a <span className="font-mono">conteggio = conteggio - 1;</span></p>
            </div>
          </div>
        </div>

        <CodeExample
          title="Un contatore di click"
          code={`let conteggio = 0;   // FUORI dalla funzione: si ricorda il valore

function aumenta() {
  conteggio++;
  document.getElementById("contatore").innerHTML = conteggio;
}

function diminuisci() {
  if (conteggio > 0) {   // non scende sotto zero
    conteggio--;
  }
  document.getElementById("contatore").innerHTML = conteggio;
}

function azzera() {
  conteggio = 0;
  document.getElementById("contatore").innerHTML = conteggio;
}`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded mt-6">
          <p className="font-bold text-purple-800 mb-2">💡 Perché la variabile sta FUORI dalla funzione?</p>
          <p className="text-gray-700 mb-2">
            Una variabile creata <strong>dentro</strong> una funzione nasce quando la funzione parte e <strong>sparisce</strong> quando finisce:
            al click successivo ripartirebbe da 0.
          </p>
          <p className="text-gray-700">
            Creata <strong>fuori</strong>, all&apos;inizio dello script, resta viva per tutto il tempo: è la <strong>memoria</strong> del
            contatore. Ti ricordi che in Lezione 5 JavaScript &quot;non aveva memoria&quot;? Ecco come dargliela!
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Il Contatore"
          description="Clicca più volte: il numero si ricorda il valore! Prova anche a scendere sotto zero."
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
    p {
      font-size: 80px;
      font-weight: bold;
      color: #5c6bc0;
      margin: 20px 0;
    }
    button {
      padding: 12px 25px;
      font-size: 20px;
      margin: 5px;
      background: #5c6bc0;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <p id="contatore">0</p>

  <button id="btnMeno">➖ Meno</button>
  <button id="btnPiu">➕ Più</button>
  <button id="btnAzzera">🔄 Azzera</button>

  <script>
    let conteggio = 0;

    function aumenta() {
      conteggio++;
      document.getElementById("contatore").innerHTML = conteggio;
    }

    function diminuisci() {
      if (conteggio > 0) {
        conteggio--;
      }
      document.getElementById("contatore").innerHTML = conteggio;
    }

    function azzera() {
      conteggio = 0;
      document.getElementById("contatore").innerHTML = conteggio;
    }

    document.getElementById("btnPiu").addEventListener("click", aumenta);
    document.getElementById("btnMeno").addEventListener("click", diminuisci);
    document.getElementById("btnAzzera").addEventListener("click", azzera);
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
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 1: Dimenticare Number() con il +</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm">let a = document.getElementById(&quot;primoNumero&quot;).value;</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm">let a = Number(document.getElementById(&quot;primoNumero&quot;).value);</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Nessun errore nella console, ma 5 + 3 fa <strong>53</strong>: i due testi vengono attaccati. Curiosamente - * / funzionano lo stesso,
              per questo l&apos;errore è difficile da scovare. Usa <strong>sempre</strong> Number().
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 2: Dimenticare .value</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm">Number(document.getElementById(&quot;casella&quot;))</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm">Number(document.getElementById(&quot;casella&quot;).value)</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Senza .value stai provando a trasformare in numero <strong>la casella intera</strong>, non quello che c&apos;è scritto dentro.
              Il risultato è <strong>NaN</strong>.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 3: Leggere la casella fuori dalla funzione</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm whitespace-pre-wrap">{`let numero = Number(document.getElementById("casella").value);

function raddoppia() {
  let doppio = numero * 2;`}</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm whitespace-pre-wrap">{`function raddoppia() {
  let numero = Number(document.getElementById("casella").value);
  let doppio = numero * 2;`}</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Fuori dalla funzione la casella viene letta <strong>una volta sola</strong>, appena si apre la pagina, quando è ancora vuota.
              Il risultato è sempre 0! La casella va letta <strong>dentro</strong> la funzione, al momento del click.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 4: Il contatore dentro la funzione</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm whitespace-pre-wrap">{`function aumenta() {
  let conteggio = 0;
  conteggio++;`}</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm whitespace-pre-wrap">{`let conteggio = 0;

function aumenta() {
  conteggio++;`}</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              È l&apos;errore opposto al precedente: il contatore deve <strong>ricordare</strong>, quindi sta fuori. Dentro, ripartirebbe
              da 0 a ogni click e mostrerebbe <strong>sempre 1</strong>.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mt-6">
          <p className="font-bold text-blue-800 mb-2">🧭 Dentro o fuori? La regola</p>
          <ul className="text-gray-700 space-y-1">
            <li>• Quello che deve essere <strong>letto al momento del click</strong> (le caselle) → <strong>dentro</strong> la funzione.</li>
            <li>• Quello che deve essere <strong>ricordato tra un click e l&apos;altro</strong> (contatori, punteggi) → <strong>fuori</strong>.</li>
          </ul>
        </div>
      </section>

      {/* Esercizio Guidato */}
      <Exercise
        title="🎯 Esercizio Guidato: Il Conto della Pizzeria"
        steps={[
          'Crea una cartella "conto-pizzeria" in VS Code',
          'Dentro la cartella, crea un file "index.html"',
          {
            text: 'Scrivi la struttura HTML: due caselle per le quantità, un pulsante e un paragrafo per il totale',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Conto della Pizzeria</title>
</head>
<body>

  <div>
    <h1>🍕 Pizzeria da Mario</h1>

    <label>Pizze (7 € l'una)</label>
    <input type="number" id="pizze" value="0" min="0">

    <label>Bibite (3 € l'una)</label>
    <input type="number" id="bibite" value="0" min="0">

    <button id="btnCalcola">Calcola il conto</button>

    <p id="conto"></p>
  </div>

</body>
</html>`,
            language: 'html',
          },
          'Salva (Ctrl+S) e apri nel browser - per ora il pulsante non fa nulla',
          {
            text: 'Aggiungi lo stile CSS della pagina',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Conto della Pizzeria</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 40px;
      background-color: #fff3e0;
    }

    div {
      background-color: white;
      max-width: 350px;
      margin: 0 auto;
      padding: 30px;
      border-radius: 15px;
    }

    label {
      display: block;
      margin-top: 15px;
      font-weight: bold;
    }

    input {
      width: 80px;
      padding: 8px;
      font-size: 18px;
      text-align: center;
      margin-top: 5px;
    }

    button {
      margin-top: 20px;
      padding: 12px 25px;
      font-size: 18px;
      background-color: #e65100;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    p {
      font-size: 22px;
      font-weight: bold;
      color: #e65100;
    }
  </style>
</head>
<body>

  <div>
    <h1>🍕 Pizzeria da Mario</h1>

    <label>Pizze (7 € l'una)</label>
    <input type="number" id="pizze" value="0" min="0">

    <label>Bibite (3 € l'una)</label>
    <input type="number" id="bibite" value="0" min="0">

    <button id="btnCalcola">Calcola il conto</button>

    <p id="conto"></p>
  </div>

</body>
</html>`,
            language: 'html',
            highlightLines: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
          },
          {
            text: 'Scrivi la funzione calcolaConto: legge le due caselle, calcola il totale e lo scrive in pagina. Collegala al pulsante',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Conto della Pizzeria</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 40px;
      background-color: #fff3e0;
    }

    div {
      background-color: white;
      max-width: 350px;
      margin: 0 auto;
      padding: 30px;
      border-radius: 15px;
    }

    label {
      display: block;
      margin-top: 15px;
      font-weight: bold;
    }

    input {
      width: 80px;
      padding: 8px;
      font-size: 18px;
      text-align: center;
      margin-top: 5px;
    }

    button {
      margin-top: 20px;
      padding: 12px 25px;
      font-size: 18px;
      background-color: #e65100;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    p {
      font-size: 22px;
      font-weight: bold;
      color: #e65100;
    }
  </style>
</head>
<body>

  <div>
    <h1>🍕 Pizzeria da Mario</h1>

    <label>Pizze (7 € l'una)</label>
    <input type="number" id="pizze" value="0" min="0">

    <label>Bibite (3 € l'una)</label>
    <input type="number" id="bibite" value="0" min="0">

    <button id="btnCalcola">Calcola il conto</button>

    <p id="conto"></p>
  </div>

  <script>
    function calcolaConto() {
      let pizze = Number(document.getElementById("pizze").value);
      let bibite = Number(document.getElementById("bibite").value);

      let totale = pizze * 7 + bibite * 3;

      document.getElementById("conto").innerHTML = "Totale: " + totale + " €";
    }

    document.getElementById("btnCalcola").addEventListener("click", calcolaConto);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81],
          },
          'Ricarica, scrivi 2 pizze e 2 bibite e clicca: il totale deve essere 20 €',
          {
            text: 'Aggiungi la promozione: se il totale arriva ad almeno 30 €, la pizzeria regala uno sconto di 5 €',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Conto della Pizzeria</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 40px;
      background-color: #fff3e0;
    }

    div {
      background-color: white;
      max-width: 350px;
      margin: 0 auto;
      padding: 30px;
      border-radius: 15px;
    }

    label {
      display: block;
      margin-top: 15px;
      font-weight: bold;
    }

    input {
      width: 80px;
      padding: 8px;
      font-size: 18px;
      text-align: center;
      margin-top: 5px;
    }

    button {
      margin-top: 20px;
      padding: 12px 25px;
      font-size: 18px;
      background-color: #e65100;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    p {
      font-size: 22px;
      font-weight: bold;
      color: #e65100;
    }
  </style>
</head>
<body>

  <div>
    <h1>🍕 Pizzeria da Mario</h1>

    <label>Pizze (7 € l'una)</label>
    <input type="number" id="pizze" value="0" min="0">

    <label>Bibite (3 € l'una)</label>
    <input type="number" id="bibite" value="0" min="0">

    <button id="btnCalcola">Calcola il conto</button>

    <p id="conto"></p>
  </div>

  <script>
    function calcolaConto() {
      let pizze = Number(document.getElementById("pizze").value);
      let bibite = Number(document.getElementById("bibite").value);

      let totale = pizze * 7 + bibite * 3;

      if (totale >= 30) {
        totale = totale - 5;
        document.getElementById("conto").innerHTML = "Totale: " + totale + " € (sconto di 5 € applicato! 🎉)";
      } else {
        document.getElementById("conto").innerHTML = "Totale: " + totale + " €";
      }
    }

    document.getElementById("btnCalcola").addEventListener("click", calcolaConto);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [77, 78, 79, 80, 81, 82],
          },
          'Ricarica e prova con 4 pizze e 2 bibite: 28 + 6 = 34 €, meno lo sconto... 29 €! 🎉'
        ]}
        experiments={[
          'Cambia i prezzi: pizza a 8 € e bibita a 2.5 € (ricorda: i decimali con il punto!)',
          'Aggiungi una terza casella "dolci" a 4 € l\'uno e includila nel totale',
          'Aggiungi una casella "persone" e mostra anche quanto paga ognuno: totale / persone',
          'Togli Number() dalle due righe che leggono le caselle: il conto è ancora giusto (con * sì!). Ora prova a mostrare pizze + bibite: con 2 e 3 cosa esce?',
          'Con il resto %: se il numero di pizze è dispari, scrivi sotto al conto "Ne aggiungiamo una per fare pari?"'
        ]}
      />

      {/* Checklist Finale */}
      <section className="mb-12 mt-12">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✅</span> Hai Completato la Lezione!
          </h2>
          <p className="text-gray-700 mb-4">
            JavaScript ora sa fare i conti con i numeri che l&apos;utente scrive nella pagina! 🧮
          </p>
          <div className="bg-white rounded p-4 border border-green-200">
            <p className="font-bold text-gray-900 mb-2">Cosa hai imparato:</p>
            <ul className="space-y-1 text-gray-700">
              <li>✅ Calcolare con <strong>+ - * /</strong> e trovare il resto con <strong>%</strong></li>
              <li>✅ Le <strong>parentesi tonde</strong> decidono l&apos;ordine dei calcoli</li>
              <li>✅ Leggere una casella di testo con <strong>.value</strong></li>
              <li>✅ Usare <strong>Number()</strong> per evitare che &quot;5&quot; + &quot;3&quot; diventi &quot;53&quot;</li>
              <li>✅ Aumentare e diminuire di 1 con <strong>++</strong> e <strong>--</strong></li>
              <li>✅ Mettere la variabile <strong>fuori</strong> dalla funzione per farle ricordare il valore</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sfida Opzionale */}
      <Challenge
        title="Il Tabellone della Partita"
        description="Costruisci il tabellone di una partita: due squadre (Casa e Ospiti), un pulsante per dare un punto a ciascuna e uno per azzerare. Sotto al punteggio compare chi è in vantaggio."
        requirements={[
          'Due variabili puntiCasa e puntiOspiti create fuori dalle funzioni, entrambe a 0',
          'Tre pulsanti con id btnCasa, btnOspiti, btnAzzera e tre funzioni con nome collegate con addEventListener',
          'Il punteggio mostrato in pagina come "2 - 1" (usa il + per attaccare i pezzi)',
          'Un paragrafo che con if / else if / else scrive "In vantaggio: Casa", "In vantaggio: Ospiti" oppure "Pareggio"',
          'Nessun JavaScript dentro i tag HTML: solo addEventListener nello script'
        ]}
        hint="Il messaggio sul vantaggio va aggiornato dopo ogni punto: puoi scrivere lo stesso if / else if / else in tutte e tre le funzioni. Per il punteggio: puntiCasa + ' - ' + puntiOspiti."
      />

      {/* Riepilogo Finale */}
      <section className="mt-12 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Ottimo Lavoro!</h2>
        <p className="text-xl mb-4">
          Ora sai costruire <strong>calcolatrici, conti e contatori</strong>! 🧮
        </p>
        <div className="bg-black/20 p-4 rounded border-2 border-white/30">
          <p className="font-bold mb-2 text-yellow-200">🚀 Comandi JavaScript Totali Imparati: 17</p>
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
            <li>if / else / else if - Fa scegliere a JavaScript cosa fare (Lezione 6)</li>
            <li>Number() - Trasforma un testo in numero (Lezione 6)</li>
            <li>+ - * / % - Operatori matematici (Lezione 7) ✨ NUOVO</li>
            <li>++ / -- - Aumenta o diminuisce di 1 (Lezione 7) ✨ NUOVO</li>
            <li>.value - Legge cosa c&apos;è scritto in una casella (Lezione 7) ✨ NUOVO</li>
          </ul>
          <p className="font-bold mt-4 mb-2 text-yellow-200">💡 Concetti Chiave:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>&quot;5&quot; + &quot;3&quot; fa &quot;53&quot;: prima di sommare usa sempre Number()</li>
            <li>Le caselle si leggono dentro la funzione, al momento del click</li>
            <li>Le variabili che devono ricordare un valore stanno fuori dalla funzione</li>
            <li>I decimali si scrivono con il punto: 2.5</li>
          </ul>
        </div>
        <p className="text-lg font-semibold mt-4">
          Prossima lezione: <strong>Operatori Logici e Validazione</strong>! Più condizioni insieme con &amp;&amp;, || e ! 🔍
        </p>
      </section>

      {/* Allenati nell'Officina */}
      <AllenatiOfficina lezioneSlug="lezione-7-operatori-calcolatrice" />

      {/* Prossimi Passi */}
      <section className="mb-12 mt-12">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Prossimi Passi
          </h2>
          <p className="text-gray-700 mb-4">
            Cosa succede se l&apos;utente lascia una casella <strong>vuota</strong>, o scrive un voto di 15? Nella prossima lezione imparerai a
            {' '}<strong>controllare</strong> i dati prima di usarli.
          </p>
          <p className="text-gray-700">
            Userai gli operatori logici <code className="bg-blue-100 px-2 py-1 rounded">&amp;&amp;</code> (e),
            {' '}<code className="bg-blue-100 px-2 py-1 rounded">||</code> (oppure) e <code className="bg-blue-100 px-2 py-1 rounded">!</code> (non)
            per unire più condizioni in un solo if! 🔍
          </p>
        </div>
      </section>

    </LessonLayout>
  );
}
