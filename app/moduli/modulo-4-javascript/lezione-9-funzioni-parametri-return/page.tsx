import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import JavaScriptDemo from '@/components/didattica/JavaScriptDemo';
import Challenge from '@/components/didattica/Challenge';
import AllenatiOfficina from '@/components/didattica/AllenatiOfficina';

export default function Lezione9FunzioniParametriReturn() {
  const lezioni = getLezioniByModuloSlug('modulo-4-javascript');

  return (
    <LessonLayout
      moduloSlug="modulo-4-javascript"
      moduloTitolo="Modulo 4: JavaScript - Interattività"
      lezioni={lezioni}
      lezioneSlug="lezione-9-funzioni-parametri-return"
      lezioneTitolo="Funzioni con Parametri e Return"
    >
      <LessonHeader
        numero={9}
        titolo="Funzioni con Parametri e Return"
        durata="2 ore"
        difficolta="media"
        obiettivi={[
          'Passare dei valori a una funzione con i parametri',
          'Far restituire un risultato a una funzione con return',
          'Capire la differenza tra mostrare un risultato e restituirlo',
          'Far lavorare insieme più funzioni, senza ripetere il codice'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Basta Copiare e Incollare!</h2>

        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white p-8 rounded-lg mb-6">
          <p className="text-xl mb-4">
            Ti ricordi la calcolatrice della Lezione 7? Quattro funzioni, e in ognuna <strong>le stesse due righe</strong> per leggere le caselle...
          </p>
          <p className="text-2xl font-bold">
            Se domani vuoi cambiare qualcosa, devi correggerlo in quattro posti. E prima o poi uno lo dimentichi! 😩
          </p>
        </div>

        <p className="text-lg mb-6">
          In questa lezione impari a scrivere funzioni <strong>più furbe</strong>: funzioni a cui dai dei valori e che ti rispondono con un
          risultato. Le scrivi una volta sola e le usi quante volte vuoi. ♻️
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-teal-50 p-6 rounded-lg border-2 border-teal-200">
            <div className="text-4xl mb-3">🎁</div>
            <h3 className="font-bold text-gray-900 mb-2">I parametri</h3>
            <p className="text-gray-600 text-sm">
              I valori che <strong>dai</strong> alla funzione quando la chiami
            </p>
          </div>

          <div className="bg-emerald-50 p-6 rounded-lg border-2 border-emerald-200">
            <div className="text-4xl mb-3">↩️</div>
            <h3 className="font-bold text-gray-900 mb-2">Il return</h3>
            <p className="text-gray-600 text-sm">
              Il risultato che la funzione ti <strong>restituisce</strong>
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <div className="text-4xl mb-3">🔗</div>
            <h3 className="font-bold text-gray-900 mb-2">Lavoro di squadra</h3>
            <p className="text-gray-600 text-sm">
              Funzioni piccole che si <strong>aiutano</strong> a vicenda
            </p>
          </div>
        </div>
      </section>

      {/* Le usi già */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🔍 Sorpresa: le Usi Già!</h2>

        <p className="text-lg mb-4">
          Funzioni che ricevono un valore e ne restituiscono un altro le usi da settimane. Guarda questa riga della Lezione 6:
        </p>

        <CodeExample
          title="Una funzione che riceve e restituisce"
          code={`let eta = Number("15");`}
          language="javascript"
        />

        <p className="text-gray-700 mt-4 mb-6">
          A <code className="bg-gray-100 px-2 py-1 rounded">Number</code> <strong>dai</strong> un testo, tra le parentesi, e lei ti
          {' '}<strong>restituisce</strong> un numero, che finisce nella variabile <code className="bg-gray-100 px-2 py-1 rounded">eta</code>.
          Funziona così anche per le altre:
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-2 border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-gray-900">Funzione</th>
                <th className="p-3 text-left text-gray-900">🎁 Cosa le dai</th>
                <th className="p-3 text-left text-gray-900">↩️ Cosa ti restituisce</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="p-3 font-mono">Number(&quot;15&quot;)</td><td className="p-3">un testo</td><td className="p-3">il numero 15</td></tr>
              <tr className="border-t"><td className="p-3 font-mono">prompt(&quot;Come ti chiami?&quot;)</td><td className="p-3">la domanda</td><td className="p-3">la risposta scritta dall&apos;utente</td></tr>
              <tr className="border-t"><td className="p-3 font-mono">confirm(&quot;Sei sicuro?&quot;)</td><td className="p-3">la domanda</td><td className="p-3">true (OK) o false (Annulla)</td></tr>
              <tr className="border-t"><td className="p-3 font-mono">document.getElementById(&quot;titolo&quot;)</td><td className="p-3">un id</td><td className="p-3">l&apos;elemento della pagina</td></tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
          <h3 className="font-bold text-yellow-800 mb-2">💡 Come una macchinetta</h3>
          <p className="text-gray-700">
            Pensa a un distributore: metti dentro una moneta, lui lavora e ti restituisce una bibita. Quello che metti dentro sono i
            {' '}<strong>parametri</strong>, quello che esce è il <strong>valore restituito</strong>. Oggi impari a costruire le tue macchinette.
          </p>
        </div>
      </section>

      {/* Parametri */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎁 I Parametri: Dare Valori a una Funzione</h2>

        <p className="text-lg mb-4">
          Finora le parentesi delle tue funzioni erano sempre vuote. Ora ci metti dentro un <strong>nome</strong>: è il parametro, una
          variabile speciale che riceve il valore quando la funzione viene chiamata.
        </p>

        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Come Funziona</h3>
          <div className="bg-black/30 p-4 rounded border-2 border-white/30 space-y-1">
            <p className="font-mono text-yellow-200">function mostra(testo) {'{'}</p>
            <p className="font-mono text-yellow-200">&nbsp;&nbsp;document.getElementById(&quot;messaggio&quot;).innerHTML = testo;</p>
            <p className="font-mono text-yellow-200">{'}'}</p>
            <p className="font-mono text-yellow-200 pt-2">mostra(&quot;Ciao!&quot;);</p>
            <p className="font-mono text-yellow-200">mostra(&quot;Arrivederci!&quot;);</p>
          </div>
          <p className="text-sm mt-3 text-white/80">
            La prima volta testo vale &quot;Ciao!&quot;, la seconda &quot;Arrivederci!&quot;: la funzione è una sola, i valori cambiano.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <CodeExample
            title="Un parametro"
            code={`function saluta(nome) {
  alert("Ciao " + nome + "!");
}

saluta("Anna");  // Ciao Anna!
saluta("Luca");  // Ciao Luca!`}
            language="javascript"
            showLineNumbers
          />
          <CodeExample
            title="Due parametri, separati dalla virgola"
            code={`function colora(id, colore) {
  document.getElementById(id).style.color = colore;
}

colora("titolo", "red");
colora("sottotitolo", "blue");`}
            language="javascript"
            showLineNumbers
          />
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-6">
          <h3 className="font-bold text-yellow-800 mb-2">⚠️ Tre Cose da Sapere</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Il nome del parametro lo scegli tu, come per le variabili. Non serve <code className="bg-yellow-100 px-1 rounded">let</code>: ci pensano le parentesi.</li>
            <li>• Con più parametri conta <strong>l&apos;ordine</strong>: il primo valore va nel primo parametro, il secondo nel secondo.</li>
            <li>• Il parametro esiste <strong>solo dentro la sua funzione</strong>: fuori dalle graffe, <code className="bg-yellow-100 px-1 rounded">nome</code> non c&apos;è.</li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
          <p className="font-bold text-blue-800 mb-2">🔘 E i pulsanti?</p>
          <p className="text-gray-700">
            Le funzioni collegate ai pulsanti con <code className="bg-blue-100 px-1 rounded">addEventListener</code> restano
            {' '}<strong>senza parametri</strong>, come hai sempre fatto. Sono loro a chiamare le funzioni con i parametri, passando i valori
            giusti. Nell&apos;esempio qui sotto ogni pulsante ha la sua funzione di una riga, e tutte usano la stessa
            {' '}<code className="bg-blue-100 px-1 rounded">mostraMessaggio</code>.
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="I Messaggi Colorati"
          description="Tre pulsanti, una sola funzione che scrive il messaggio: cambiano solo il testo e il colore che le vengono dati"
          height="340px"
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
    button {
      padding: 12px 20px;
      font-size: 17px;
      margin: 5px;
      border: none;
      border-radius: 8px;
      background-color: #00897b;
      color: white;
      cursor: pointer;
    }
    p {
      font-size: 26px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>💬 Messaggi</h1>

  <button id="btnBuongiorno">Buongiorno</button>
  <button id="btnAttenzione">Attenzione</button>
  <button id="btnBravo">Bravo</button>

  <p id="messaggio">Clicca un pulsante</p>

  <script>
    function mostraMessaggio(testo, colore) {
      let messaggio = document.getElementById("messaggio");
      messaggio.innerHTML = testo;
      messaggio.style.color = colore;
    }

    function buongiorno() {
      mostraMessaggio("☀️ Buongiorno a tutti!", "orange");
    }

    function attenzione() {
      mostraMessaggio("⚠️ Attenzione al gradino!", "red");
    }

    function bravo() {
      mostraMessaggio("🏅 Bravo, ottimo lavoro!", "green");
    }

    document.getElementById("btnBuongiorno").addEventListener("click", buongiorno);
    document.getElementById("btnAttenzione").addEventListener("click", attenzione);
    document.getElementById("btnBravo").addEventListener("click", bravo);
  </script>
</body>
</html>`}
        />
      </section>

      {/* Return */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">↩️ Il Return: la Funzione Risponde</h2>

        <p className="text-lg mb-4">
          <code className="bg-gray-100 px-2 py-1 rounded">mostraMessaggio</code> fa qualcosa che si vede: scrive nella pagina. Ma spesso
          vuoi una funzione che <strong>calcoli</strong> un risultato e te lo <strong>consegni</strong>, così decidi tu cosa farne.
          Per consegnarlo si usa <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">return</code>.
        </p>

        <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Come Funziona</h3>
          <div className="bg-black/30 p-4 rounded border-2 border-white/30 space-y-1">
            <p className="font-mono text-yellow-200">function doppio(numero) {'{'}</p>
            <p className="font-mono text-yellow-200">&nbsp;&nbsp;return numero * 2;</p>
            <p className="font-mono text-yellow-200">{'}'}</p>
            <p className="font-mono text-yellow-200 pt-2">let risultato = doppio(5);   // risultato vale 10</p>
          </div>
          <p className="text-sm mt-3 text-white/80">
            doppio(5) calcola 5 * 2 e restituisce 10: è come se al posto di doppio(5) ci fosse scritto 10.
          </p>
        </div>

        <p className="text-gray-700 mb-4">
          Il valore restituito lo puoi usare <strong>dove vuoi</strong>, come un qualsiasi numero:
        </p>

        <CodeExample
          title="Un risultato, tanti usi"
          code={`let risultato = doppio(5);                       // in una variabile: 10
console.log(doppio(7));                          // nella console: 14
let somma = doppio(3) + doppio(4);               // in un calcolo: 6 + 8 = 14
esito.innerHTML = "Il doppio di 6 è " + doppio(6); // in pagina

if (doppio(eta) > 30) {                          // in un if
  esito.innerHTML = "Che numero grande!";
}`}
          language="javascript"
          showLineNumbers
        />

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-5">
            <p className="font-bold text-orange-800 mb-2">💬 alert e console.log</p>
            <p className="text-gray-700 text-sm">
              La funzione <strong>parla all&apos;utente</strong>: il risultato compare sullo schermo, ma il resto del programma non lo riceve
              e non può usarlo.
            </p>
          </div>
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-5">
            <p className="font-bold text-emerald-800 mb-2">↩️ return</p>
            <p className="text-gray-700 text-sm">
              La funzione <strong>risponde al programma</strong>: sullo schermo non compare niente, ma il risultato torna a chi l&apos;ha
              chiamata, che può metterlo in una variabile, in pagina o in un altro calcolo.
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-6">
          <h3 className="font-bold text-yellow-800 mb-2">⚠️ Dopo il return la funzione si ferma</h3>
          <p className="text-gray-700">
            Appena JavaScript incontra un <code className="bg-yellow-100 px-1 rounded">return</code>, consegna il valore ed <strong>esce
            subito</strong> dalla funzione. Le righe scritte dopo non vengono mai eseguite. Per questo il return di solito è l&apos;ultima riga.
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Il Termometro Americano"
          description="Negli Stati Uniti la temperatura si misura in gradi Fahrenheit. Scrivi i gradi Celsius e converti: prova 0, 37 e 100"
          height="360px"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 30px;
      text-align: center;
      background-color: #e0f2f1;
    }
    input {
      width: 100px;
      padding: 10px;
      font-size: 20px;
      text-align: center;
    }
    button {
      padding: 12px 25px;
      font-size: 18px;
      background-color: #00897b;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    p {
      font-size: 26px;
      font-weight: bold;
      color: #00695c;
    }
  </style>
</head>
<body>
  <h1>🌡️ Celsius → Fahrenheit</h1>

  <label for="celsius">Gradi Celsius</label>
  <input type="number" id="celsius">
  <button id="btnConverti">Converti</button>

  <p id="risultato"></p>

  <script>
    function inFahrenheit(celsius) {
      return celsius * 9 / 5 + 32;
    }

    function converti() {
      let celsius = Number(document.getElementById("celsius").value);
      let fahrenheit = inFahrenheit(celsius);
      document.getElementById("risultato").innerHTML = celsius + " °C = " + fahrenheit + " °F";
    }

    document.getElementById("btnConverti").addEventListener("click", converti);
  </script>
</body>
</html>`}
        />

        <p className="text-gray-700 mt-4">
          Nota la divisione dei compiti: <code className="bg-gray-100 px-2 py-1 rounded">inFahrenheit</code> fa solo il calcolo e non sa
          niente della pagina; <code className="bg-gray-100 px-2 py-1 rounded">converti</code>, quella del pulsante, legge la casella e
          scrive il risultato. La formula la puoi riusare in qualsiasi altra pagina.
        </p>
      </section>

      {/* Lavoro di squadra */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🔗 Funzioni che Lavorano Insieme</h2>

        <p className="text-lg mb-4">
          Ora rimettiamo mano alla calcolatrice della Lezione 7. Le righe ripetute diventano <strong>funzioni di aiuto</strong>, e le
          funzioni dei pulsanti si accorciano a una riga sola.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-2 border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-gray-900">Funzione di aiuto</th>
                <th className="p-3 text-left text-gray-900">Riceve</th>
                <th className="p-3 text-left text-gray-900">Fa</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="p-3 font-mono">leggiNumero(id)</td><td className="p-3">l&apos;id di una casella</td><td className="p-3"><strong>restituisce</strong> il numero scritto dentro</td></tr>
              <tr className="border-t"><td className="p-3 font-mono">mostra(testo)</td><td className="p-3">un testo</td><td className="p-3"><strong>scrive</strong> il testo nel paragrafo del risultato</td></tr>
              <tr className="border-t"><td className="p-3 font-mono">calcola(simbolo)</td><td className="p-3">&quot;+&quot;, &quot;-&quot;, &quot;*&quot; o &quot;/&quot;</td><td className="p-3">legge, calcola e mostra, usando le altre due</td></tr>
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <CodeExample
            title="❌ Prima (Lezione 7): le stesse righe quattro volte"
            code={`function somma() {
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

// ... e ancora moltiplica e dividi, uguali`}
            language="javascript"
            showLineNumbers
          />
          <CodeExample
            title="✅ Dopo: ogni cosa scritta una volta sola"
            code={`function leggiNumero(id) {
  return Number(document.getElementById(id).value);
}

function mostra(testo) {
  document.getElementById("risultato").innerHTML = testo;
}

function calcola(simbolo) {
  let a = leggiNumero("primoNumero");
  let b = leggiNumero("secondoNumero");

  if (simbolo === "+") {
    mostra("Risultato: " + (a + b));
  } else if (simbolo === "-") {
    mostra("Risultato: " + (a - b));
  } else if (simbolo === "*") {
    mostra("Risultato: " + (a * b));
  } else if (b === 0) {
    mostra("⚠️ Non si può dividere per zero!");
  } else {
    mostra("Risultato: " + (a / b));
  }
}

function somma() {
  calcola("+");
}`}
            language="javascript"
            showLineNumbers
          />
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-6">
          <h3 className="font-bold text-yellow-800 mb-2">⚠️ Le parentesi dentro mostra(...)</h3>
          <p className="text-gray-700">
            Ricordi la trappola del + della Lezione 7? <code className="bg-yellow-100 px-1 rounded">&quot;Risultato: &quot; + a + b</code>
            {' '}attaccherebbe i due numeri come testo (3 e 4 diventano &quot;34&quot;). Le parentesi in
            {' '}<code className="bg-yellow-100 px-1 rounded">(a + b)</code> fanno prima la somma, poi la attaccano al testo.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
          <p className="font-bold text-blue-800 mb-2">🧭 Dove le scrivo?</p>
          <ul className="text-gray-700 space-y-1">
            <li>• In alto nello script le <strong>funzioni di aiuto</strong> (leggiNumero, mostra, calcola).</li>
            <li>• Poi le <strong>funzioni dei pulsanti</strong>, senza parametri, che chiamano quelle di aiuto.</li>
            <li>• In fondo gli <strong>addEventListener</strong>, come sempre.</li>
          </ul>
          <p className="text-gray-700 mt-3">
            Vuoi scrivere &quot;=&quot; al posto di &quot;Risultato:&quot;? Ora basta cambiarlo dentro calcola, non in quattro funzioni.
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="La Calcolatrice di Squadra"
          description="Funziona come quella della Lezione 7, ma il codice ripetuto è sparito"
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
    // Funzioni di aiuto
    function leggiNumero(id) {
      return Number(document.getElementById(id).value);
    }

    function mostra(testo) {
      document.getElementById("risultato").innerHTML = testo;
    }

    function calcola(simbolo) {
      let a = leggiNumero("primoNumero");
      let b = leggiNumero("secondoNumero");

      if (simbolo === "+") {
        mostra("Risultato: " + (a + b));
      } else if (simbolo === "-") {
        mostra("Risultato: " + (a - b));
      } else if (simbolo === "*") {
        mostra("Risultato: " + (a * b));
      } else if (b === 0) {
        mostra("⚠️ Non si può dividere per zero!");
      } else {
        mostra("Risultato: " + (a / b));
      }
    }

    // Funzioni dei pulsanti: una riga ciascuna
    function somma() {
      calcola("+");
    }

    function sottrai() {
      calcola("-");
    }

    function moltiplica() {
      calcola("*");
    }

    function dividi() {
      calcola("/");
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

      {/* Esempio completo */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🏷️ Esempio: i Saldi del Negozio</h2>

        <p className="text-lg mb-4">
          Una funzione con return può restituire anche <strong>true o false</strong>, proprio come confirm. Così la domanda &quot;lo sconto
          va bene?&quot; diventa una funzione da usare dentro un if, insieme al ! della Lezione 8.
        </p>

        <CodeExample
          title="Due funzioni di calcolo"
          code={`function prezzoScontato(prezzo, percentuale) {
  return prezzo - prezzo * percentuale / 100;
}

function scontoValido(percentuale) {
  return percentuale >= 0 && percentuale <= 100;
}

prezzoScontato(80, 25);   // 60
scontoValido(25);         // true
scontoValido(150);        // false`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="I Saldi"
          description="Scrivi il prezzo e lo sconto. Prova 80 € con il 25%, poi uno sconto del 150%"
          height="420px"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 30px;
      text-align: center;
      background-color: #fff3e0;
    }
    label {
      display: block;
      margin-top: 10px;
      font-weight: bold;
    }
    input {
      width: 110px;
      padding: 8px;
      font-size: 18px;
      text-align: center;
      margin-top: 5px;
    }
    button {
      margin-top: 15px;
      padding: 12px 25px;
      font-size: 18px;
      background-color: #ef6c00;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    p {
      font-size: 24px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>🏷️ Saldi!</h1>

  <label for="prezzo">Prezzo (€)</label>
  <input type="number" id="prezzo">

  <label for="percentuale">Sconto (%)</label>
  <input type="number" id="percentuale">

  <button id="btnCalcola">Calcola</button>

  <p id="esito"></p>

  <script>
    function prezzoScontato(prezzo, percentuale) {
      return prezzo - prezzo * percentuale / 100;
    }

    function scontoValido(percentuale) {
      return percentuale >= 0 && percentuale <= 100;
    }

    function calcolaSaldo() {
      let prezzo = Number(document.getElementById("prezzo").value);
      let percentuale = Number(document.getElementById("percentuale").value);
      let esito = document.getElementById("esito");

      if (prezzo <= 0) {
        esito.innerHTML = "⚠️ Scrivi un prezzo";
        esito.style.color = "darkorange";
      } else if (!scontoValido(percentuale)) {
        esito.innerHTML = "⚠️ Lo sconto va da 0 a 100";
        esito.style.color = "darkorange";
      } else {
        esito.innerHTML = "Prezzo scontato: " + prezzoScontato(prezzo, percentuale) + " €";
        esito.style.color = "green";
      }
    }

    document.getElementById("btnCalcola").addEventListener("click", calcolaSaldo);
  </script>
</body>
</html>`}
        />

        <p className="text-gray-700 mt-4">
          Leggi la condizione ad alta voce: <code className="bg-gray-100 px-2 py-1 rounded">if (!scontoValido(percentuale))</code> diventa
          &quot;se lo sconto <strong>non</strong> è valido&quot;. Un buon nome di funzione rende il codice chiaro come una frase.
        </p>
      </section>

      {/* Errori Tipici */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🐛 Errori Tipici</h2>

        <div className="space-y-6">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 1: Dimenticare il return</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm whitespace-pre-wrap">{`function doppio(numero) {
  numero * 2;
}`}</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm whitespace-pre-wrap">{`function doppio(numero) {
  return numero * 2;
}`}</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Il calcolo viene fatto, ma nessuno lo consegna. Chi chiama la funzione riceve <strong>undefined</strong>, cioè &quot;niente&quot;:
              in pagina leggerai &quot;Il doppio è undefined&quot;.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 2: alert al posto di return</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm whitespace-pre-wrap">{`function doppio(numero) {
  alert(numero * 2);
}

let somma = doppio(3) + doppio(4);`}</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm whitespace-pre-wrap">{`function doppio(numero) {
  return numero * 2;
}

let somma = doppio(3) + doppio(4);`}</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Gli alert mostrano 6 e 8, quindi sembra tutto a posto... ma la somma è <strong>NaN</strong>: il programma non ha ricevuto
              nessun numero. alert parla all&apos;utente, return risponde al programma.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 3: Passare i valori dentro addEventListener</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm whitespace-pre-wrap">{`btn.addEventListener("click", saluta("Anna"));`}</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm whitespace-pre-wrap">{`function salutaAnna() {
  saluta("Anna");
}

btn.addEventListener("click", salutaAnna);`}</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Con le parentesi, <strong>saluta(&quot;Anna&quot;) parte subito</strong>, appena si apre la pagina, e il pulsante poi non fa più
              niente. In addEventListener va il <strong>nome</strong> della funzione, senza parentesi: per passare dei valori, scrivi una
              funzione del pulsante che chiama quella con i parametri.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 4: I valori nell&apos;ordine sbagliato</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm whitespace-pre-wrap">{`function colora(id, colore) { ... }

colora("red", "titolo");`}</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm whitespace-pre-wrap">{`function colora(id, colore) { ... }

colora("titolo", "red");`}</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              I valori entrano nei parametri <strong>in ordine</strong>: qui id varrebbe &quot;red&quot; e JavaScript cercherebbe un elemento
              con id red, che non esiste. Guarda sempre la prima riga della funzione per ricordare l&apos;ordine.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 5: Righe scritte dopo il return</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm whitespace-pre-wrap">{`function prezzoFinale(prezzo) {
  return prezzo + 2;
  console.log("Calcolato!");
}`}</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm whitespace-pre-wrap">{`function prezzoFinale(prezzo) {
  console.log("Calcolato!");
  return prezzo + 2;
}`}</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Il return fa uscire subito dalla funzione: il console.log scritto dopo <strong>non viene mai eseguito</strong>. Il return va in
              fondo.
            </p>
          </div>
        </div>
      </section>

      {/* Esercizio Guidato */}
      <Exercise
        title="🎯 Esercizio Guidato: Il Parco Acquatico"
        steps={[
          'Crea una cartella "parco-acquatico" in VS Code',
          'Dentro la cartella, crea un file "index.html"',
          {
            text: 'Scrivi la struttura HTML: due caselle (età e giorni), un pulsante e un paragrafo per il prezzo',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Parco Acquatico</title>
</head>
<body>

  <div>
    <h1>🌊 Parco Acquatico</h1>

    <label for="eta">Età</label>
    <input type="number" id="eta">

    <label for="giorni">Quanti giorni?</label>
    <input type="number" id="giorni" value="1">

    <button id="btnCalcola">Calcola il prezzo</button>

    <p id="prezzo"></p>
  </div>

</body>
</html>`,
            language: 'html',
          },
          {
            text: 'Aggiungi lo stile CSS della pagina',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Parco Acquatico</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      background-color: #e1f5fe;
    }

    div {
      background-color: white;
      max-width: 380px;
      margin: 0 auto;
      padding: 30px;
      border-radius: 15px;
    }

    h1 {
      text-align: center;
      color: #0277bd;
    }

    label {
      display: block;
      margin-top: 15px;
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      margin-top: 5px;
      box-sizing: border-box;
    }

    button {
      width: 100%;
      margin-top: 25px;
      padding: 12px;
      font-size: 18px;
      background-color: #0277bd;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    p {
      font-size: 22px;
      font-weight: bold;
      text-align: center;
    }
  </style>
</head>
<body>

  <div>
    <h1>🌊 Parco Acquatico</h1>

    <label for="eta">Età</label>
    <input type="number" id="eta">

    <label for="giorni">Quanti giorni?</label>
    <input type="number" id="giorni" value="1">

    <button id="btnCalcola">Calcola il prezzo</button>

    <p id="prezzo"></p>
  </div>

</body>
</html>`,
            language: 'html',
          },
          {
            text: 'Prima le funzioni di aiuto: leggiNumero restituisce il numero di una casella, mostra scrive nel paragrafo',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Parco Acquatico</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      background-color: #e1f5fe;
    }

    div {
      background-color: white;
      max-width: 380px;
      margin: 0 auto;
      padding: 30px;
      border-radius: 15px;
    }

    h1 {
      text-align: center;
      color: #0277bd;
    }

    label {
      display: block;
      margin-top: 15px;
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      margin-top: 5px;
      box-sizing: border-box;
    }

    button {
      width: 100%;
      margin-top: 25px;
      padding: 12px;
      font-size: 18px;
      background-color: #0277bd;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    p {
      font-size: 22px;
      font-weight: bold;
      text-align: center;
    }
  </style>
</head>
<body>

  <div>
    <h1>🌊 Parco Acquatico</h1>

    <label for="eta">Età</label>
    <input type="number" id="eta">

    <label for="giorni">Quanti giorni?</label>
    <input type="number" id="giorni" value="1">

    <button id="btnCalcola">Calcola il prezzo</button>

    <p id="prezzo"></p>
  </div>

  <script>
    function leggiNumero(id) {
      return Number(document.getElementById(id).value);
    }

    function mostra(testo) {
      document.getElementById("prezzo").innerHTML = testo;
    }
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [75, 76, 77, 78, 80, 81, 82, 83],
          },
          {
            text: 'La funzione del listino: fino a 2 anni si entra gratis, fino a 13 anni 12 € al giorno, dai 14 anni 20 €. Ogni ramo dell\'if ha il suo return. Per provarla subito, aggiungi tre console.log e guarda la console (F12): devono comparire 0, 12 e 20',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Parco Acquatico</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      background-color: #e1f5fe;
    }

    div {
      background-color: white;
      max-width: 380px;
      margin: 0 auto;
      padding: 30px;
      border-radius: 15px;
    }

    h1 {
      text-align: center;
      color: #0277bd;
    }

    label {
      display: block;
      margin-top: 15px;
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      margin-top: 5px;
      box-sizing: border-box;
    }

    button {
      width: 100%;
      margin-top: 25px;
      padding: 12px;
      font-size: 18px;
      background-color: #0277bd;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    p {
      font-size: 22px;
      font-weight: bold;
      text-align: center;
    }
  </style>
</head>
<body>

  <div>
    <h1>🌊 Parco Acquatico</h1>

    <label for="eta">Età</label>
    <input type="number" id="eta">

    <label for="giorni">Quanti giorni?</label>
    <input type="number" id="giorni" value="1">

    <button id="btnCalcola">Calcola il prezzo</button>

    <p id="prezzo"></p>
  </div>

  <script>
    function leggiNumero(id) {
      return Number(document.getElementById(id).value);
    }

    function mostra(testo) {
      document.getElementById("prezzo").innerHTML = testo;
    }

    function prezzoAlGiorno(eta) {
      if (eta < 3) {
        return 0;
      } else if (eta < 14) {
        return 12;
      } else {
        return 20;
      }
    }

    // Prove: guarda la console
    console.log(prezzoAlGiorno(2));
    console.log(prezzoAlGiorno(10));
    console.log(prezzoAlGiorno(30));
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [84, 85, 86, 87, 88, 89, 90, 91, 92, 94, 95, 96, 97],
          },
          {
            text: 'Una funzione che ne chiama un\'altra: prezzoTotale usa prezzoAlGiorno e moltiplica per i giorni. Cambia i console.log di prova: per 10 anni e 3 giorni deve comparire 36',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Parco Acquatico</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      background-color: #e1f5fe;
    }

    div {
      background-color: white;
      max-width: 380px;
      margin: 0 auto;
      padding: 30px;
      border-radius: 15px;
    }

    h1 {
      text-align: center;
      color: #0277bd;
    }

    label {
      display: block;
      margin-top: 15px;
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      margin-top: 5px;
      box-sizing: border-box;
    }

    button {
      width: 100%;
      margin-top: 25px;
      padding: 12px;
      font-size: 18px;
      background-color: #0277bd;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    p {
      font-size: 22px;
      font-weight: bold;
      text-align: center;
    }
  </style>
</head>
<body>

  <div>
    <h1>🌊 Parco Acquatico</h1>

    <label for="eta">Età</label>
    <input type="number" id="eta">

    <label for="giorni">Quanti giorni?</label>
    <input type="number" id="giorni" value="1">

    <button id="btnCalcola">Calcola il prezzo</button>

    <p id="prezzo"></p>
  </div>

  <script>
    function leggiNumero(id) {
      return Number(document.getElementById(id).value);
    }

    function mostra(testo) {
      document.getElementById("prezzo").innerHTML = testo;
    }

    function prezzoAlGiorno(eta) {
      if (eta < 3) {
        return 0;
      } else if (eta < 14) {
        return 12;
      } else {
        return 20;
      }
    }

    function prezzoTotale(eta, giorni) {
      return prezzoAlGiorno(eta) * giorni;
    }

    // Prova: guarda la console
    console.log(prezzoTotale(10, 3));
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [94, 95, 96, 98, 99],
          },
          {
            text: 'Infine la funzione del pulsante, senza parametri: legge le caselle, controlla i giorni e mostra il totale. I console.log di prova ora puoi toglierli',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Parco Acquatico</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      background-color: #e1f5fe;
    }

    div {
      background-color: white;
      max-width: 380px;
      margin: 0 auto;
      padding: 30px;
      border-radius: 15px;
    }

    h1 {
      text-align: center;
      color: #0277bd;
    }

    label {
      display: block;
      margin-top: 15px;
      font-weight: bold;
    }

    input {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      margin-top: 5px;
      box-sizing: border-box;
    }

    button {
      width: 100%;
      margin-top: 25px;
      padding: 12px;
      font-size: 18px;
      background-color: #0277bd;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    p {
      font-size: 22px;
      font-weight: bold;
      text-align: center;
    }
  </style>
</head>
<body>

  <div>
    <h1>🌊 Parco Acquatico</h1>

    <label for="eta">Età</label>
    <input type="number" id="eta">

    <label for="giorni">Quanti giorni?</label>
    <input type="number" id="giorni" value="1">

    <button id="btnCalcola">Calcola il prezzo</button>

    <p id="prezzo"></p>
  </div>

  <script>
    function leggiNumero(id) {
      return Number(document.getElementById(id).value);
    }

    function mostra(testo) {
      document.getElementById("prezzo").innerHTML = testo;
    }

    function prezzoAlGiorno(eta) {
      if (eta < 3) {
        return 0;
      } else if (eta < 14) {
        return 12;
      } else {
        return 20;
      }
    }

    function prezzoTotale(eta, giorni) {
      return prezzoAlGiorno(eta) * giorni;
    }

    function calcola() {
      let eta = leggiNumero("eta");
      let giorni = leggiNumero("giorni");

      if (giorni < 1) {
        mostra("⚠️ Almeno 1 giorno!");
      } else {
        let totale = prezzoTotale(eta, giorni);
        mostra("Totale: " + totale + " €");
      }
    }

    document.getElementById("btnCalcola").addEventListener("click", calcola);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [98, 99, 100, 102, 103, 104, 105, 106, 107, 108, 110],
          },
          'Ricarica e prova: 10 anni per 3 giorni fa 36 €, 2 anni è gratis, 0 giorni mostra l\'avviso 🎉'
        ]}
        experiments={[
          'Aggiungi la tariffa senior: dai 65 anni in su si pagano 15 € al giorno (attenzione all\'ordine degli else if!)',
          'Cambia mostra in modo che riceva anche un colore: mostra(testo, colore). Usa il verde per il totale e l\'arancione per l\'avviso',
          'Lascia vuota la casella dell\'età: il biglietto risulta gratis. Perché? Per accorgertene serve il testo della casella, prima di Number(): leggilo con .value e controlla se è vuoto, come nella Lezione 8',
          'Scrivi una funzione scontoFamiglia(totale) che restituisce il totale meno il 10%, e usala quando i giorni sono 3 o più',
          'Togli il return da prezzoAlGiorno e scrivi al suo posto un console.log: cosa compare in pagina? Perché?'
        ]}
      />

      {/* Checklist Finale */}
      <section className="mb-12 mt-12">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✅</span> Hai Completato la Lezione!
          </h2>
          <p className="text-gray-700 mb-4">
            Ora sai costruire le tue funzioni-macchinetta e farle lavorare in squadra! 🔗
          </p>
          <div className="bg-white rounded p-4 border border-green-200">
            <p className="font-bold text-gray-900 mb-2">Cosa hai imparato:</p>
            <ul className="space-y-1 text-gray-700">
              <li>✅ Dare valori a una funzione con i <strong>parametri</strong>: function saluta(nome)</li>
              <li>✅ Passare più valori, separati dalla virgola e <strong>nell&apos;ordine giusto</strong></li>
              <li>✅ Restituire un risultato con <strong>return</strong> e usarlo in una variabile, in pagina o in un calcolo</li>
              <li>✅ La differenza tra <strong>alert</strong> (parla all&apos;utente) e <strong>return</strong> (risponde al programma)</li>
              <li>✅ Restituire true o false e usare la funzione dentro un <strong>if</strong></li>
              <li>✅ Le funzioni dei pulsanti senza parametri, che chiamano le <strong>funzioni di aiuto</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sfida Opzionale */}
      <Challenge
        title="La Cassa con il Resto"
        description="Alla cassa del bar si scrive quanto costa la consumazione e quanto ha dato il cliente. La pagina dice il resto da dare, oppure quanto manca se i soldi non bastano."
        requirements={[
          'Due caselle con id prezzo e pagato, un pulsante con id btnResto e un paragrafo con id esito, ognuna con il suo label',
          'Una funzione resto(prezzo, pagato) che restituisce pagato - prezzo',
          'Una funzione bastano(prezzo, pagato) che restituisce true se pagato è maggiore o uguale a prezzo',
          'La funzione del pulsante, senza parametri: se bastano mostra "Resto: X €", altrimenti "⚠️ Mancano Y €"',
          'Bonus: per calcolare quanto manca riusa resto, scambiando l\'ordine dei valori'
        ]}
        hint="Per scrivere bastano basta una riga: return pagato >= prezzo; il confronto è già true o false. Nel bonus, resto(pagato, prezzo) calcola prezzo - pagato: è proprio quanto manca."
      />

      {/* Riepilogo Finale */}
      <section className="mt-12 bg-gradient-to-r from-teal-500 to-emerald-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Ottimo Lavoro!</h2>
        <p className="text-xl mb-4">
          Ora scrivi il codice <strong>una volta sola</strong> e lo riusi quante volte vuoi! ♻️
        </p>
        <div className="bg-black/20 p-4 rounded border-2 border-white/30">
          <p className="font-bold mb-2 text-yellow-200">🚀 Comandi JavaScript Totali Imparati: 19</p>
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
            <li>+ - * / % - Operatori matematici (Lezione 7)</li>
            <li>++ / -- - Aumenta o diminuisce di 1 (Lezione 7)</li>
            <li>.value - Legge cosa c&apos;è scritto in una casella (Lezione 7)</li>
            <li>&amp;&amp; / || / ! - Operatori logici: E, O, NON (Lezione 8)</li>
            <li>return - Restituisce un risultato; i parametri ricevono i valori (Lezione 9) ✨ NUOVO</li>
          </ul>
          <p className="font-bold mt-4 mb-2 text-yellow-200">💡 Concetti Chiave:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>I parametri sono i valori che dai alla funzione, return è quello che ti restituisce</li>
            <li>alert parla all&apos;utente, return risponde al programma</li>
            <li>Dopo il return la funzione si ferma</li>
            <li>Funzioni dei pulsanti senza parametri, che chiamano le funzioni di aiuto</li>
          </ul>
        </div>
        <p className="text-lg font-semibold mt-4">
          Prossima lezione: <strong>Altri Eventi</strong>! Non solo click: la pagina reagisce mentre scrivi e quando premi un tasto ⌨️
        </p>
      </section>

      {/* Allenati nell'Officina */}
      <AllenatiOfficina lezioneSlug="lezione-9-funzioni-parametri-return" />

      {/* Prossimi Passi */}
      <section className="mb-12 mt-12">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Prossimi Passi
          </h2>
          <p className="text-gray-700 mb-4">
            Finora tutto partiva da un click. Nella prossima lezione imparerai altri eventi: quando l&apos;utente <strong>scrive</strong> in
            una casella, quando <strong>sceglie</strong> un&apos;opzione, quando <strong>preme un tasto</strong> e quando invia un modulo.
          </p>
          <p className="text-gray-700">
            E finalmente tornerà il <strong>&lt;form&gt;</strong>: imparerai a non far ricaricare la pagina. 📝
          </p>
        </div>
      </section>

    </LessonLayout>
  );
}
