import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import JavaScriptDemo from '@/components/didattica/JavaScriptDemo';
import Challenge from '@/components/didattica/Challenge';
import AllenatiOfficina from '@/components/didattica/AllenatiOfficina';

export default function Lezione10AltriEventi() {
  const lezioni = getLezioniByModuloSlug('modulo-4-javascript');

  return (
    <LessonLayout
      moduloSlug="modulo-4-javascript"
      moduloTitolo="Modulo 4: JavaScript - Interattività"
      lezioni={lezioni}
      lezioneSlug="lezione-10-altri-eventi"
      lezioneTitolo="Altri Eventi"
    >
      <LessonHeader
        numero={10}
        titolo="Altri Eventi"
        durata="2 ore"
        difficolta="media"
        obiettivi={[
          'Far reagire la pagina mentre l\'utente scrive, con l\'evento input',
          'Reagire a una scelta da un menu con l\'evento change',
          'Sapere quale tasto è stato premuto, con keydown e il parametro event',
          'Usare di nuovo il form senza far ricaricare la pagina, con submit ed event.preventDefault()'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Non Solo Click!</h2>

        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-8 rounded-lg mb-6">
          <p className="text-xl mb-4">
            Finora ogni pagina che hai scritto restava ferma ad <strong>aspettare un click</strong>. Ma chi usa una pagina fa molto di più:
            scrive, sceglie da un menu, preme i tasti, invia un modulo...
          </p>
          <p className="text-2xl font-bold">
            Pensa alla barra di ricerca di YouTube: i suggerimenti compaiono mentre scrivi, senza premere nessun pulsante! 🔍
          </p>
        </div>

        <p className="text-lg mb-6">
          Ognuna di queste azioni è un <strong>evento</strong>, e JavaScript le può ascoltare tutte con lo stesso
          {' '}<code className="bg-gray-100 px-2 py-1 rounded">addEventListener</code> che usi dalla Lezione 2. Oggi ne impari quattro nuovi.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 my-8">
          <div className="bg-sky-50 p-5 rounded-lg border-2 border-sky-200">
            <div className="text-4xl mb-3">⌨️</div>
            <h3 className="font-bold text-gray-900 mb-2">input</h3>
            <p className="text-gray-600 text-sm">
              Mentre <strong>scrivi</strong> in una casella, a ogni lettera
            </p>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg border-2 border-blue-200">
            <div className="text-4xl mb-3">🔽</div>
            <h3 className="font-bold text-gray-900 mb-2">change</h3>
            <p className="text-gray-600 text-sm">
              Quando <strong>scegli</strong> qualcosa, per esempio da un menu
            </p>
          </div>

          <div className="bg-indigo-50 p-5 rounded-lg border-2 border-indigo-200">
            <div className="text-4xl mb-3">🎹</div>
            <h3 className="font-bold text-gray-900 mb-2">keydown</h3>
            <p className="text-gray-600 text-sm">
              Quando <strong>premi un tasto</strong> della tastiera
            </p>
          </div>

          <div className="bg-violet-50 p-5 rounded-lg border-2 border-violet-200">
            <div className="text-4xl mb-3">📨</div>
            <h3 className="font-bold text-gray-900 mb-2">submit</h3>
            <p className="text-gray-600 text-sm">
              Quando <strong>invii</strong> un modulo &lt;form&gt;
            </p>
          </div>
        </div>
      </section>

      {/* Lo schema non cambia */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🔁 Lo Schema Non Cambia</h2>

        <p className="text-lg mb-4">
          Buona notizia: non devi imparare un modo nuovo di collegare le funzioni. In <code className="bg-gray-100 px-2 py-1 rounded">addEventListener</code>
          {' '}cambia solo <strong>la prima parola</strong>, il nome dell&apos;evento.
        </p>

        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Come Funziona</h3>
          <div className="bg-black/30 p-4 rounded border-2 border-white/30 space-y-1">
            <p className="font-mono text-yellow-200">elemento.addEventListener(&quot;click&quot;, saluta);</p>
            <p className="font-mono text-yellow-200">elemento.addEventListener(&quot;input&quot;, aggiorna);</p>
            <p className="font-mono text-yellow-200">elemento.addEventListener(&quot;change&quot;, cambiaTema);</p>
          </div>
          <p className="text-sm mt-3 text-white/80">
            Quale elemento ascolti + quale evento aspetti + quale funzione parte. Sempre il nome della funzione, senza parentesi.
          </p>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-2 border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-gray-900">Evento</th>
                <th className="p-3 text-left text-gray-900">Quando parte</th>
                <th className="p-3 text-left text-gray-900">Su quale elemento</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="p-3 font-mono">click</td><td className="p-3">clic del mouse (o tocco del dito)</td><td className="p-3">di solito un pulsante</td></tr>
              <tr className="border-t"><td className="p-3 font-mono">input</td><td className="p-3">a ogni lettera scritta o cancellata</td><td className="p-3">una casella o un cursore</td></tr>
              <tr className="border-t"><td className="p-3 font-mono">change</td><td className="p-3">quando la scelta è fatta</td><td className="p-3">un menu a tendina</td></tr>
              <tr className="border-t"><td className="p-3 font-mono">keydown</td><td className="p-3">quando un tasto viene premuto</td><td className="p-3">una casella o tutta la pagina</td></tr>
              <tr className="border-t"><td className="p-3 font-mono">submit</td><td className="p-3">quando il modulo viene inviato</td><td className="p-3">il &lt;form&gt;</td></tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <p className="font-bold text-blue-800 mb-2">🏷️ E gli id?</p>
          <p className="text-gray-700">
            Il prefisso <code className="bg-blue-100 px-1 rounded">btn</code> resta per i pulsanti. Le caselle, i menu e i moduli hanno un id che
            dice <strong>cosa contengono</strong>: <code className="bg-blue-100 px-1 rounded">nome</code>,
            {' '}<code className="bg-blue-100 px-1 rounded">volume</code>, <code className="bg-blue-100 px-1 rounded">tema</code>, come le caselle della
            Lezione 7.
          </p>
        </div>
      </section>

      {/* Evento input */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">⌨️ L&apos;Evento input: Mentre Scrivi</h2>

        <p className="text-lg mb-4">
          L&apos;evento <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">input</code> parte <strong>ogni volta che il contenuto di una
          casella cambia</strong>: a ogni lettera scritta, a ogni lettera cancellata. Niente pulsante da premere: la pagina si aggiorna da sola.
        </p>

        <CodeExample
          title="Ascoltare una casella"
          code={`function aggiorna() {
  let nome = document.getElementById("nome").value;
  document.getElementById("anteprima").innerHTML = "Ciao " + nome + "!";
}

document.getElementById("nome").addEventListener("input", aggiorna);`}
          language="javascript"
          showLineNumbers
        />

        <p className="text-gray-700 mt-4 mb-6">
          Nota che l&apos;ascoltatore non è più su un pulsante ma <strong>sulla casella stessa</strong>: è lei che &quot;sente&quot; quando scrivi.
          Dentro la funzione leggi il valore con <code className="bg-gray-100 px-2 py-1 rounded">.value</code>, come nella Lezione 7.
        </p>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Il Biglietto d'Auguri"
          description="Scrivi un nome nella casella: il biglietto si aggiorna a ogni lettera. Poi cancella tutto"
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
      background-color: #fce4ec;
    }
    input {
      padding: 10px;
      font-size: 18px;
      text-align: center;
    }
    .biglietto {
      max-width: 340px;
      margin: 25px auto 0;
      padding: 25px;
      background-color: white;
      border: 3px dashed #ec407a;
      border-radius: 15px;
      font-size: 26px;
      font-weight: bold;
      color: #ad1457;
    }
  </style>
</head>
<body>
  <label for="nome">Per chi è il biglietto?</label>
  <input type="text" id="nome">

  <p class="biglietto" id="biglietto">🎂 Tanti auguri!</p>

  <script>
    function aggiorna() {
      let nome = document.getElementById("nome").value;

      if (nome === "") {
        document.getElementById("biglietto").innerHTML = "🎂 Tanti auguri!";
      } else {
        document.getElementById("biglietto").innerHTML = "🎂 Tanti auguri, " + nome + "!";
      }
    }

    document.getElementById("nome").addEventListener("input", aggiorna);
  </script>
</body>
</html>`}
        />

        <p className="text-gray-700 mt-4 mb-6">
          Il controllo <code className="bg-gray-100 px-2 py-1 rounded">nome === &quot;&quot;</code> è quello della Lezione 8: quando cancelli tutto,
          il biglietto torna come all&apos;inizio invece di dire &quot;Tanti auguri, !&quot;.
        </p>

        <h3 className="text-xl font-bold mb-3 mt-8">Il cursore (range)</h3>
        <p className="text-gray-700 mb-4">
          L&apos;evento input funziona anche con il cursore <code className="bg-gray-100 px-2 py-1 rounded">&lt;input type=&quot;range&quot;&gt;</code>
          {' '}che hai visto nel modulo HTML: parte mentre trascini, a ogni scatto. Il suo <code className="bg-gray-100 px-2 py-1 rounded">.value</code>
          {' '}è un testo, quindi per confrontarlo con i numeri serve <code className="bg-gray-100 px-2 py-1 rounded">Number()</code>.
        </p>

        <JavaScriptDemo
          title="Il Volume"
          description="Trascina il cursore: il numero, l'icona e la barra cambiano mentre ti muovi. Portalo fino a 0"
          height="320px"
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
    input {
      width: 260px;
    }
    p {
      font-size: 30px;
      font-weight: bold;
    }
    .fondo {
      width: 260px;
      height: 20px;
      margin: 0 auto;
      background-color: #e0e0e0;
      border-radius: 10px;
    }
    .barra {
      width: 50%;
      height: 20px;
      background-color: #5c6bc0;
      border-radius: 10px;
    }
  </style>
</head>
<body>
  <h1>🎵 Volume</h1>

  <input type="range" id="volume" min="0" max="100" value="50">

  <p id="livello">🔉 50</p>

  <div class="fondo">
    <div class="barra" id="barra"></div>
  </div>

  <script>
    function icona(volume) {
      if (volume === 0) {
        return "🔇";
      } else if (volume < 40) {
        return "🔈";
      } else if (volume < 75) {
        return "🔉";
      } else {
        return "🔊";
      }
    }

    function cambiaVolume() {
      let volume = Number(document.getElementById("volume").value);
      document.getElementById("livello").innerHTML = icona(volume) + " " + volume;
      document.getElementById("barra").style.width = volume + "%";
    }

    document.getElementById("volume").addEventListener("input", cambiaVolume);
  </script>
</body>
</html>`}
        />

        <p className="text-gray-700 mt-4">
          Riconosci la squadra della Lezione 9? <code className="bg-gray-100 px-2 py-1 rounded">icona</code> riceve il volume e restituisce
          l&apos;emoji giusta; <code className="bg-gray-100 px-2 py-1 rounded">cambiaVolume</code>, quella collegata all&apos;evento, legge e scrive
          nella pagina. E la larghezza della barra è lo <code className="bg-gray-100 px-2 py-1 rounded">.style</code> della Lezione 5.
        </p>
      </section>

      {/* Evento change */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🔽 L&apos;Evento change: Quando Scegli</h2>

        <p className="text-lg mb-4">
          Per scegliere fra poche opzioni fisse c&apos;è il <strong>menu a tendina</strong>, il tag <code className="bg-gray-100 px-2 py-1 rounded">&lt;select&gt;</code>.
          Ogni voce del menu è un <code className="bg-gray-100 px-2 py-1 rounded">&lt;option&gt;</code>.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <CodeExample
            title="Il menu a tendina in HTML"
            code={`<label for="tema">Tema</label>
<select id="tema">
  <option value="chiaro">☀️ Chiaro</option>
  <option value="scuro">🌙 Scuro</option>
  <option value="mare">🌊 Mare</option>
</select>`}
            language="html"
            showLineNumbers
          />
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <h3 className="font-bold text-yellow-800 mb-2">💡 Due nomi per ogni voce</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Il testo fra i tag (<strong>☀️ Chiaro</strong>) è quello che <strong>vede l&apos;utente</strong>.</li>
              <li>• Il <code className="bg-yellow-100 px-1 rounded">value</code> (<strong>chiaro</strong>) è quello che <strong>legge JavaScript</strong>.</li>
              <li>• Con <code className="bg-yellow-100 px-1 rounded">document.getElementById(&quot;tema&quot;).value</code> ottieni il value della voce scelta, come per una casella.</li>
              <li>• All&apos;inizio è scelta la prima voce.</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 mb-4">
          L&apos;evento <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">change</code> parte quando la scelta <strong>è fatta</strong>: per il
          menu, appena l&apos;utente clicca una voce diversa.
        </p>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Il Tema della Scheda"
          description="Scegli un tema dal menu: la scheda cambia colore appena scegli"
          height="330px"
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
    select {
      padding: 8px;
      font-size: 18px;
    }
    .scheda {
      max-width: 340px;
      margin: 25px auto 0;
      padding: 25px;
      border: 2px solid #ccc;
      border-radius: 15px;
    }
  </style>
</head>
<body>
  <label for="tema">Tema</label>
  <select id="tema">
    <option value="chiaro">☀️ Chiaro</option>
    <option value="scuro">🌙 Scuro</option>
    <option value="mare">🌊 Mare</option>
  </select>

  <div class="scheda" id="scheda">
    <h2>La mia scheda</h2>
    <p>Scegli un tema dal menu qui sopra.</p>
  </div>

  <script>
    function cambiaTema() {
      let tema = document.getElementById("tema").value;
      let scheda = document.getElementById("scheda");

      if (tema === "scuro") {
        scheda.style.backgroundColor = "#263238";
        scheda.style.color = "white";
      } else if (tema === "mare") {
        scheda.style.backgroundColor = "#0277bd";
        scheda.style.color = "white";
      } else {
        scheda.style.backgroundColor = "white";
        scheda.style.color = "black";
      }
    }

    document.getElementById("tema").addEventListener("change", cambiaTema);
  </script>
</body>
</html>`}
        />

        <div className="overflow-x-auto my-6">
          <table className="w-full border-2 border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-gray-900">Su una casella di testo</th>
                <th className="p-3 text-left text-gray-900">Quando parte</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="p-3 font-mono">input</td><td className="p-3">a <strong>ogni lettera</strong>, mentre scrivi</td></tr>
              <tr className="border-t"><td className="p-3 font-mono">change</td><td className="p-3">una volta sola, quando <strong>esci dalla casella</strong> (con un clic fuori o con Tab) dopo averla cambiata</td></tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <p className="font-bold text-blue-800 mb-2">🧭 Quale scelgo?</p>
          <ul className="text-gray-700 space-y-1">
            <li>• Vuoi che la pagina segua chi scrive, lettera per lettera? <strong>input</strong> sulla casella.</li>
            <li>• Vuoi reagire a una scelta da un menu? <strong>change</strong> sul select.</li>
          </ul>
        </div>
      </section>

      {/* Il parametro event */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎁 Il Parametro event</h2>

        <p className="text-lg mb-4">
          Quando succede un evento, è <strong>il browser</strong> a chiamare la tua funzione. E nel chiamarla le passa un valore, come hai fatto tu
          con i parametri nella Lezione 9: un pacchetto di informazioni su <strong>cosa è successo</strong>. Per riceverlo basta scrivere un
          parametro fra le parentesi. Lo chiamiamo sempre <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">event</code>.
        </p>

        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Come Funziona</h3>
          <div className="bg-black/30 p-4 rounded border-2 border-white/30 space-y-1">
            <p className="font-mono text-yellow-200">function mostraTasto(event) {'{'}</p>
            <p className="font-mono text-yellow-200">&nbsp;&nbsp;console.log(event.key);   // il tasto premuto</p>
            <p className="font-mono text-yellow-200">{'}'}</p>
            <p className="font-mono text-yellow-200 pt-2">document.addEventListener(&quot;keydown&quot;, mostraTasto);</p>
          </div>
          <p className="text-sm mt-3 text-white/80">
            Il valore di event non lo passi tu: ci pensa il browser ogni volta che l&apos;evento succede. In addEventListener resta solo il nome.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
          <h3 className="font-bold text-yellow-800 mb-2">⚠️ Una piccola eccezione alla regola</h3>
          <p className="text-gray-700">
            Nella Lezione 9 hai imparato che le funzioni collegate con <code className="bg-yellow-100 px-1 rounded">addEventListener</code> restano
            {' '}<strong>senza parametri</strong>. Ora sai che possono averne <strong>uno solo</strong>: <code className="bg-yellow-100 px-1 rounded">event</code>,
            {' '}che riempie il browser. Se non ti serve, come negli esempi di input e change qui sopra, non lo scrivi.
          </p>
        </div>
      </section>

      {/* Evento keydown */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎹 L&apos;Evento keydown: Quale Tasto?</h2>

        <p className="text-lg mb-4">
          L&apos;evento <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">keydown</code> parte quando premi un tasto. Per sapere
          {' '}<strong>quale</strong>, leggi <code className="bg-gray-100 px-2 py-1 rounded">event.key</code>: contiene il nome del tasto, come testo.
        </p>

        <p className="text-gray-700 mb-4">
          Per ascoltare i tasti premuti in <strong>tutta la pagina</strong>, e non solo dentro una casella, metti l&apos;ascoltatore su
          {' '}<code className="bg-gray-100 px-2 py-1 rounded">document</code>, la pagina intera: <code className="bg-gray-100 px-2 py-1 rounded">document.addEventListener(&quot;keydown&quot;, ...)</code>.
        </p>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Il Tasto Misterioso"
          description="Prima clicca dentro la demo, così i tasti arrivano a lei. Poi premi lettere, numeri, Invio, Esc, le frecce, Shift..."
          height="300px"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 30px;
      text-align: center;
      background-color: #ede7f6;
    }
    .tasto {
      display: inline-block;
      min-width: 80px;
      padding: 20px 30px;
      font-size: 40px;
      font-weight: bold;
      background-color: white;
      border: 3px solid #5e35b1;
      border-radius: 12px;
    }
  </style>
</head>
<body>
  <h1>🎹 Il Tasto Misterioso</h1>
  <p>Premi un tasto qualsiasi</p>

  <p class="tasto" id="tasto">?</p>

  <script>
    function mostraTasto(event) {
      document.getElementById("tasto").innerHTML = event.key;
    }

    document.addEventListener("keydown", mostraTasto);
  </script>
</body>
</html>`}
        />

        <div className="overflow-x-auto my-6">
          <table className="w-full border-2 border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-gray-900">Tasto</th>
                <th className="p-3 text-left text-gray-900">event.key vale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="p-3">Invio</td><td className="p-3 font-mono">&quot;Enter&quot;</td></tr>
              <tr className="border-t"><td className="p-3">Esc</td><td className="p-3 font-mono">&quot;Escape&quot;</td></tr>
              <tr className="border-t"><td className="p-3">Frecce</td><td className="p-3 font-mono">&quot;ArrowUp&quot;, &quot;ArrowDown&quot;, &quot;ArrowLeft&quot;, &quot;ArrowRight&quot;</td></tr>
              <tr className="border-t"><td className="p-3">Barra spaziatrice</td><td className="p-3 font-mono">&quot; &quot; (uno spazio)</td></tr>
              <tr className="border-t"><td className="p-3">Una lettera</td><td className="p-3 font-mono">&quot;a&quot;, ma &quot;A&quot; con le maiuscole</td></tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-6">
          <h3 className="font-bold text-yellow-800 mb-2">⚠️ Maiuscole e minuscole contano</h3>
          <p className="text-gray-700">
            <code className="bg-yellow-100 px-1 rounded">event.key === &quot;enter&quot;</code> non sarà mai vero: il nome giusto è
            {' '}<code className="bg-yellow-100 px-1 rounded">&quot;Enter&quot;</code>, con la E maiuscola. Nel dubbio, scoprilo con il Tasto Misterioso
            qui sopra.
          </p>
        </div>

        <p className="text-gray-700 mb-4">
          Con <code className="bg-gray-100 px-2 py-1 rounded">event.key</code> e un <code className="bg-gray-100 px-2 py-1 rounded">if</code> la pagina
          fa cose diverse a seconda del tasto. Ecco il primo videogioco: la posizione del razzo è una variabile <strong>fuori dalla funzione</strong>,
          come il contatore della Lezione 7, così si ricorda il valore fra un tasto e l&apos;altro.
        </p>

        <JavaScriptDemo
          title="Il Razzo"
          description="Prima clicca dentro la demo, poi muovi il razzo con le frecce ← e →"
          height="280px"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #1a237e;
      color: white;
    }
    .pista {
      width: 360px;
      padding: 10px 0;
      border-bottom: 3px dashed #9fa8da;
    }
    .razzo {
      font-size: 50px;
      margin: 0;
    }
  </style>
</head>
<body>
  <h2>🚀 Usa le frecce ← e →</h2>

  <div class="pista">
    <p class="razzo" id="razzo">🚀</p>
  </div>

  <p id="posizione">Posizione: 0</p>

  <script>
    let posizione = 0;

    function muovi(event) {
      if (event.key === "ArrowRight" && posizione < 300) {
        posizione = posizione + 20;
      } else if (event.key === "ArrowLeft" && posizione > 0) {
        posizione = posizione - 20;
      }

      document.getElementById("razzo").style.marginLeft = posizione + "px";
      document.getElementById("posizione").innerHTML = "Posizione: " + posizione;
    }

    document.addEventListener("keydown", muovi);
  </script>
</body>
</html>`}
        />

        <p className="text-gray-700 mt-4">
          Il <code className="bg-gray-100 px-2 py-1 rounded">&amp;&amp;</code> della Lezione 8 tiene il razzo dentro la pista: si va a destra solo se
          hai premuto la freccia destra <strong>e</strong> non sei già in fondo.
        </p>
      </section>

      {/* Evento submit */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">📨 Il Ritorno del Form: l&apos;Evento submit</h2>

        <p className="text-lg mb-4">
          Ricordi l&apos;avviso della Lezione 7? &quot;Niente <code className="bg-gray-100 px-2 py-1 rounded">&lt;form&gt;</code>, per ora&quot;: un
          pulsante dentro un form <strong>invia il modulo</strong> e la pagina si ricarica, cancellando il risultato. Il form serviva a spedire i dati
          a un server; noi invece i dati vogliamo usarli <strong>subito, nella pagina</strong>. Ora sai come fare.
        </p>

        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Come Funziona</h3>
          <div className="bg-black/30 p-4 rounded border-2 border-white/30 space-y-1">
            <p className="font-mono text-yellow-200">function invia(event) {'{'}</p>
            <p className="font-mono text-yellow-200">&nbsp;&nbsp;event.preventDefault();   // niente ricaricamento!</p>
            <p className="font-mono text-yellow-200">&nbsp;&nbsp;// ...qui leggi le caselle e scrivi nella pagina</p>
            <p className="font-mono text-yellow-200">{'}'}</p>
            <p className="font-mono text-yellow-200 pt-2">document.getElementById(&quot;modulo&quot;).addEventListener(&quot;submit&quot;, invia);</p>
          </div>
          <p className="text-sm mt-3 text-white/80">
            L&apos;id va sul &lt;form&gt;, e l&apos;evento è submit. Il pulsante non ha bisogno di id: basta che sia type=&quot;submit&quot;.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-violet-50 border-2 border-violet-200 rounded-lg p-5">
            <p className="font-bold text-violet-800 mb-2">🛑 event.preventDefault()</p>
            <p className="text-gray-700 text-sm">
              Vuol dire &quot;<strong>impedisci il comportamento predefinito</strong>&quot;. Il comportamento predefinito del submit è spedire il modulo e
              ricaricare la pagina: con questa riga, come prima cosa della funzione, non succede. Attenzione alle parentesi finali!
            </p>
          </div>
          <div className="bg-sky-50 border-2 border-sky-200 rounded-lg p-5">
            <p className="font-bold text-sky-800 mb-2">🎁 Due regali del form</p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Premendo <strong>Invio</strong> in una casella il modulo parte, come se cliccassi il pulsante.</li>
              <li>• Le caselle con <strong>required</strong> (Lezione 11 HTML) le controlla il browser: se una è vuota, la tua funzione non parte nemmeno.</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
          <p className="font-bold text-blue-800 mb-2">✏️ Svuotare una casella</p>
          <p className="text-gray-700">
            Finora <code className="bg-blue-100 px-1 rounded">.value</code> l&apos;hai solo letto. Ma ci puoi anche <strong>scrivere</strong>, come con
            {' '}<code className="bg-blue-100 px-1 rounded">innerHTML</code>: <code className="bg-blue-100 px-1 rounded">document.getElementById(&quot;nome&quot;).value = &quot;&quot;;</code>
            {' '}svuota la casella, pronta per il prossimo messaggio.
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Il Libro degli Ospiti"
          description="Firma il libro: scrivi nome e messaggio, poi premi Firma oppure Invio. Prova anche a firmare con una casella vuota"
          height="460px"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #efebe9;
    }
    form {
      background-color: white;
      max-width: 360px;
      margin: 0 auto;
      padding: 20px;
      border-radius: 12px;
    }
    label {
      display: block;
      margin-top: 10px;
      font-weight: bold;
    }
    input {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      box-sizing: border-box;
    }
    button {
      margin-top: 15px;
      padding: 10px 25px;
      font-size: 17px;
      background-color: #6d4c41;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    .firme {
      max-width: 360px;
      margin: 15px auto 0;
    }
  </style>
</head>
<body>
  <form id="modulo">
    <label for="nome">Nome</label>
    <input type="text" id="nome" required>

    <label for="frase">Messaggio</label>
    <input type="text" id="frase" required>

    <button type="submit">✍️ Firma</button>
  </form>

  <div class="firme" id="firme"></div>

  <script>
    function firma(event) {
      event.preventDefault();

      let nome = document.getElementById("nome").value;
      let frase = document.getElementById("frase").value;
      let firme = document.getElementById("firme");

      firme.innerHTML = "<p><strong>" + nome + "</strong>: " + frase + "</p>" + firme.innerHTML;

      document.getElementById("nome").value = "";
      document.getElementById("frase").value = "";
    }

    document.getElementById("modulo").addEventListener("submit", firma);
  </script>
</body>
</html>`}
        />

        <p className="text-gray-700 mt-4">
          La firma nuova va <strong>davanti</strong> a quelle che c&apos;erano già (<code className="bg-gray-100 px-2 py-1 rounded">nuova + firme.innerHTML</code>),
          così le più recenti stanno in alto. E nota che nessuna riga controlla le caselle vuote: ci pensa <code className="bg-gray-100 px-2 py-1 rounded">required</code>.
        </p>
      </section>

      {/* Errori Tipici */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🐛 Errori Tipici</h2>

        <div className="space-y-6">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 1: Il click sul pulsante invece del submit sul form</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm whitespace-pre-wrap">{`<form>
  ...
  <button id="btnFirma">Firma</button>
</form>

btnFirma.addEventListener("click", firma);`}</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm whitespace-pre-wrap">{`<form id="modulo">
  ...
  <button type="submit">Firma</button>
</form>

modulo.addEventListener("submit", firma);`}</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Dentro un form, il clic sul pulsante fa partire la funzione e poi <strong>invia comunque il modulo</strong>: la pagina si ricarica.
              Ascolta sempre il <strong>submit del form</strong>, che arriva sia dal pulsante sia dal tasto Invio.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 2: preventDefault dimenticato o senza parentesi</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm whitespace-pre-wrap">{`function firma(event) {
  event.preventDefault;
  ...
}`}</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm whitespace-pre-wrap">{`function firma(event) {
  event.preventDefault();
  ...
}`}</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Senza parentesi la funzione preventDefault viene solo nominata, <strong>non eseguita</strong>. Nessun errore in console, ma la pagina
              si ricarica e il risultato compare per un attimo, poi sparisce.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 3: &quot;on&quot; davanti al nome dell&apos;evento</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm whitespace-pre-wrap">{`casella.addEventListener("oninput", aggiorna);`}</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm whitespace-pre-wrap">{`casella.addEventListener("input", aggiorna);`}</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Un evento &quot;oninput&quot; non esiste, ma JavaScript non si lamenta: aspetta in silenzio qualcosa che non succederà mai. Nessun
              errore, semplicemente <strong>non succede niente</strong>. I nomi giusti sono corti: click, input, change, keydown, submit.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 4: Il nome del tasto scritto male</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm whitespace-pre-wrap">{`if (event.key === "enter") { ... }
if (event.key === "Freccia destra") { ... }`}</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm whitespace-pre-wrap">{`if (event.key === "Enter") { ... }
if (event.key === "ArrowRight") { ... }`}</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Il confronto è fra due testi, e devono essere <strong>identici</strong>, maiuscole comprese. I nomi dei tasti sono in inglese:
              se non sei sicuro, scrivi <code className="bg-white px-1 rounded">console.log(event.key)</code> e premi il tasto.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 5: change dove serviva input</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato (per un&apos;anteprima dal vivo)</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm whitespace-pre-wrap">{`nome.addEventListener("change", aggiorna);`}</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm whitespace-pre-wrap">{`nome.addEventListener("input", aggiorna);`}</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Sembra rotto: scrivi e non cambia niente. Poi clicchi fuori dalla casella e l&apos;anteprima si aggiorna tutta insieme. Su una casella
              di testo change aspetta che tu <strong>esca</strong>; per seguire ogni lettera serve input.
            </p>
          </div>
        </div>
      </section>

      {/* Esercizio Guidato */}
      <Exercise
        title="🎯 Esercizio Guidato: La Cartolina dalle Vacanze"
        steps={[
          'Crea una cartella "cartolina" in VS Code',
          'Dentro la cartella, crea un file "index.html"',
          {
            text: 'Scrivi la struttura HTML: un form con due caselle (a chi e messaggio) e un menu per il luogo, la cartolina e un paragrafo per la conferma',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>La Cartolina</title>
</head>
<body>

  <form id="modulo">
    <label for="destinatario">A chi la mandi?</label>
    <input type="text" id="destinatario" required>

    <label for="messaggio">Messaggio</label>
    <input type="text" id="messaggio">

    <label for="luogo">Dove sei?</label>
    <select id="luogo">
      <option value="mare">🏖️ Al mare</option>
      <option value="montagna">🏔️ In montagna</option>
      <option value="citta">🏙️ In città</option>
    </select>

    <button type="submit">Spedisci 📮</button>
  </form>

  <div class="cartolina" id="cartolina">
    <h2 id="saluto">Ciao!</h2>
    <p id="testo">Scrivi un messaggio...</p>
  </div>

  <p class="conferma" id="conferma"></p>

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
  <title>La Cartolina</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 30px;
      background-color: #fff8e1;
    }

    form {
      background-color: white;
      max-width: 400px;
      margin: 0 auto;
      padding: 25px;
      border-radius: 15px;
    }

    label {
      display: block;
      margin-top: 12px;
      font-weight: bold;
    }

    input, select {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      margin-top: 5px;
      box-sizing: border-box;
    }

    button {
      width: 100%;
      margin-top: 20px;
      padding: 12px;
      font-size: 18px;
      background-color: #f57c00;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    .cartolina {
      max-width: 400px;
      margin: 25px auto 0;
      padding: 30px;
      border-radius: 15px;
      background-color: #81d4fa;
      text-align: center;
    }

    .conferma {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      color: #2e7d32;
    }
  </style>
</head>
<body>

  <form id="modulo">
    <label for="destinatario">A chi la mandi?</label>
    <input type="text" id="destinatario" required>

    <label for="messaggio">Messaggio</label>
    <input type="text" id="messaggio">

    <label for="luogo">Dove sei?</label>
    <select id="luogo">
      <option value="mare">🏖️ Al mare</option>
      <option value="montagna">🏔️ In montagna</option>
      <option value="citta">🏙️ In città</option>
    </select>

    <button type="submit">Spedisci 📮</button>
  </form>

  <div class="cartolina" id="cartolina">
    <h2 id="saluto">Ciao!</h2>
    <p id="testo">Scrivi un messaggio...</p>
  </div>

  <p class="conferma" id="conferma"></p>

</body>
</html>`,
            language: 'html',
          },
          {
            text: 'L\'anteprima dal vivo: una funzione aggiorna che legge le due caselle e scrive nella cartolina. La colleghi con l\'evento input a tutte e due le caselle: la stessa funzione, due ascoltatori. Prova a scrivere: la cartolina ti segue lettera per lettera',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>La Cartolina</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 30px;
      background-color: #fff8e1;
    }

    form {
      background-color: white;
      max-width: 400px;
      margin: 0 auto;
      padding: 25px;
      border-radius: 15px;
    }

    label {
      display: block;
      margin-top: 12px;
      font-weight: bold;
    }

    input, select {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      margin-top: 5px;
      box-sizing: border-box;
    }

    button {
      width: 100%;
      margin-top: 20px;
      padding: 12px;
      font-size: 18px;
      background-color: #f57c00;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    .cartolina {
      max-width: 400px;
      margin: 25px auto 0;
      padding: 30px;
      border-radius: 15px;
      background-color: #81d4fa;
      text-align: center;
    }

    .conferma {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      color: #2e7d32;
    }
  </style>
</head>
<body>

  <form id="modulo">
    <label for="destinatario">A chi la mandi?</label>
    <input type="text" id="destinatario" required>

    <label for="messaggio">Messaggio</label>
    <input type="text" id="messaggio">

    <label for="luogo">Dove sei?</label>
    <select id="luogo">
      <option value="mare">🏖️ Al mare</option>
      <option value="montagna">🏔️ In montagna</option>
      <option value="citta">🏙️ In città</option>
    </select>

    <button type="submit">Spedisci 📮</button>
  </form>

  <div class="cartolina" id="cartolina">
    <h2 id="saluto">Ciao!</h2>
    <p id="testo">Scrivi un messaggio...</p>
  </div>

  <p class="conferma" id="conferma"></p>

  <script>
    function aggiorna() {
      let nome = document.getElementById("destinatario").value;
      let messaggio = document.getElementById("messaggio").value;

      if (nome === "") {
        document.getElementById("saluto").innerHTML = "Ciao!";
      } else {
        document.getElementById("saluto").innerHTML = "Ciao " + nome + "!";
      }

      document.getElementById("testo").innerHTML = messaggio;
    }

    document.getElementById("destinatario").addEventListener("input", aggiorna);
    document.getElementById("messaggio").addEventListener("input", aggiorna);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [90, 91, 92, 93, 95, 96, 97, 98, 99, 101, 102, 104, 105, 106],
          },
          {
            text: 'Il colore del luogo: coloreDi riceve il luogo e restituisce un colore (una funzione con return, come nella Lezione 9); cambiaLuogo la usa quando il menu cambia. Prova anche a premere Invio in una casella: la pagina si ricarica e perdi tutto. Lo sistemi nel prossimo passo',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>La Cartolina</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 30px;
      background-color: #fff8e1;
    }

    form {
      background-color: white;
      max-width: 400px;
      margin: 0 auto;
      padding: 25px;
      border-radius: 15px;
    }

    label {
      display: block;
      margin-top: 12px;
      font-weight: bold;
    }

    input, select {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      margin-top: 5px;
      box-sizing: border-box;
    }

    button {
      width: 100%;
      margin-top: 20px;
      padding: 12px;
      font-size: 18px;
      background-color: #f57c00;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    .cartolina {
      max-width: 400px;
      margin: 25px auto 0;
      padding: 30px;
      border-radius: 15px;
      background-color: #81d4fa;
      text-align: center;
    }

    .conferma {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      color: #2e7d32;
    }
  </style>
</head>
<body>

  <form id="modulo">
    <label for="destinatario">A chi la mandi?</label>
    <input type="text" id="destinatario" required>

    <label for="messaggio">Messaggio</label>
    <input type="text" id="messaggio">

    <label for="luogo">Dove sei?</label>
    <select id="luogo">
      <option value="mare">🏖️ Al mare</option>
      <option value="montagna">🏔️ In montagna</option>
      <option value="citta">🏙️ In città</option>
    </select>

    <button type="submit">Spedisci 📮</button>
  </form>

  <div class="cartolina" id="cartolina">
    <h2 id="saluto">Ciao!</h2>
    <p id="testo">Scrivi un messaggio...</p>
  </div>

  <p class="conferma" id="conferma"></p>

  <script>
    function aggiorna() {
      let nome = document.getElementById("destinatario").value;
      let messaggio = document.getElementById("messaggio").value;

      if (nome === "") {
        document.getElementById("saluto").innerHTML = "Ciao!";
      } else {
        document.getElementById("saluto").innerHTML = "Ciao " + nome + "!";
      }

      document.getElementById("testo").innerHTML = messaggio;
    }

    function coloreDi(luogo) {
      if (luogo === "mare") {
        return "#81d4fa";
      } else if (luogo === "montagna") {
        return "#a5d6a7";
      } else {
        return "#ffcc80";
      }
    }

    function cambiaLuogo() {
      let luogo = document.getElementById("luogo").value;
      document.getElementById("cartolina").style.backgroundColor = coloreDi(luogo);
    }

    document.getElementById("destinatario").addEventListener("input", aggiorna);
    document.getElementById("messaggio").addEventListener("input", aggiorna);
    document.getElementById("luogo").addEventListener("change", cambiaLuogo);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [104, 105, 106, 107, 108, 109, 110, 111, 112, 114, 115, 116, 117, 121],
          },
          {
            text: 'La spedizione: spedisci riceve event e come prima cosa blocca il ricaricamento con event.preventDefault(). Poi scrive la conferma. L\'ascoltatore va sul form, con l\'evento submit',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>La Cartolina</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 30px;
      background-color: #fff8e1;
    }

    form {
      background-color: white;
      max-width: 400px;
      margin: 0 auto;
      padding: 25px;
      border-radius: 15px;
    }

    label {
      display: block;
      margin-top: 12px;
      font-weight: bold;
    }

    input, select {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      margin-top: 5px;
      box-sizing: border-box;
    }

    button {
      width: 100%;
      margin-top: 20px;
      padding: 12px;
      font-size: 18px;
      background-color: #f57c00;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    .cartolina {
      max-width: 400px;
      margin: 25px auto 0;
      padding: 30px;
      border-radius: 15px;
      background-color: #81d4fa;
      text-align: center;
    }

    .conferma {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
      color: #2e7d32;
    }
  </style>
</head>
<body>

  <form id="modulo">
    <label for="destinatario">A chi la mandi?</label>
    <input type="text" id="destinatario" required>

    <label for="messaggio">Messaggio</label>
    <input type="text" id="messaggio">

    <label for="luogo">Dove sei?</label>
    <select id="luogo">
      <option value="mare">🏖️ Al mare</option>
      <option value="montagna">🏔️ In montagna</option>
      <option value="citta">🏙️ In città</option>
    </select>

    <button type="submit">Spedisci 📮</button>
  </form>

  <div class="cartolina" id="cartolina">
    <h2 id="saluto">Ciao!</h2>
    <p id="testo">Scrivi un messaggio...</p>
  </div>

  <p class="conferma" id="conferma"></p>

  <script>
    function aggiorna() {
      let nome = document.getElementById("destinatario").value;
      let messaggio = document.getElementById("messaggio").value;

      if (nome === "") {
        document.getElementById("saluto").innerHTML = "Ciao!";
      } else {
        document.getElementById("saluto").innerHTML = "Ciao " + nome + "!";
      }

      document.getElementById("testo").innerHTML = messaggio;
    }

    function coloreDi(luogo) {
      if (luogo === "mare") {
        return "#81d4fa";
      } else if (luogo === "montagna") {
        return "#a5d6a7";
      } else {
        return "#ffcc80";
      }
    }

    function cambiaLuogo() {
      let luogo = document.getElementById("luogo").value;
      document.getElementById("cartolina").style.backgroundColor = coloreDi(luogo);
    }

    function spedisci(event) {
      event.preventDefault();
      let nome = document.getElementById("destinatario").value;
      document.getElementById("conferma").innerHTML = "📮 Cartolina spedita a " + nome + "!";
    }

    document.getElementById("destinatario").addEventListener("input", aggiorna);
    document.getElementById("messaggio").addEventListener("input", aggiorna);
    document.getElementById("luogo").addEventListener("change", cambiaLuogo);
    document.getElementById("modulo").addEventListener("submit", spedisci);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [119, 120, 121, 122, 123, 128],
          },
          'Ricarica e prova: scrivi, cambia luogo, poi premi Spedisci o Invio. La pagina non si ricarica più. Lascia vuoto "A chi la mandi?": il browser ti ferma da solo grazie a required 🎉'
        ]}
        experiments={[
          'Aggiungi al menu la voce "neve" (❄️ Sulla neve) con un colore azzurro chiaro: che cosa devi cambiare, oltre all\'HTML?',
          'Collega aggiorna con "change" invece di "input" sulla casella del messaggio: che differenza noti mentre scrivi?',
          'Togli la riga event.preventDefault() e spedisci: che cosa succede alla cartolina? Rimettila',
          'Dopo la spedizione svuota le due caselle con .value = "" e richiama aggiorna(), così anche la cartolina torna vuota',
          'Ascolta "keydown" sulla casella del messaggio: se il tasto è "Escape", svuota la casella e richiama aggiorna()'
        ]}
      />

      {/* Checklist Finale */}
      <section className="mb-12 mt-12">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✅</span> Hai Completato la Lezione!
          </h2>
          <p className="text-gray-700 mb-4">
            Ora la tua pagina non aspetta più solo un click: ascolta tutto quello che fa l&apos;utente! 👂
          </p>
          <div className="bg-white rounded p-4 border border-green-200">
            <p className="font-bold text-gray-900 mb-2">Cosa hai imparato:</p>
            <ul className="space-y-1 text-gray-700">
              <li>✅ Aggiornare la pagina mentre l&apos;utente scrive, con l&apos;evento <strong>input</strong></li>
              <li>✅ Creare un menu a tendina con <strong>&lt;select&gt;</strong> e reagire alla scelta con <strong>change</strong></li>
              <li>✅ Ricevere il parametro <strong>event</strong>, che passa il browser</li>
              <li>✅ Riconoscere il tasto premuto con <strong>keydown</strong> ed <strong>event.key</strong></li>
              <li>✅ Ascoltare i tasti in tutta la pagina con <strong>document.addEventListener</strong></li>
              <li>✅ Usare il form con <strong>submit</strong> ed <strong>event.preventDefault()</strong>, senza ricaricare la pagina</li>
              <li>✅ Svuotare una casella scrivendo nel suo <strong>.value</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sfida Opzionale */}
      <Challenge
        title="Il Convertitore Istantaneo"
        description="Un convertitore di valuta senza pulsante: scrivi quanti euro hai, scegli la valuta dal menu e il risultato compare subito, mentre scrivi."
        requirements={[
          'Una casella con id euro, un menu con id valuta (dollari, sterline, franchi svizzeri) e un paragrafo con id risultato, con i loro label',
          'Una funzione converti(euro, valuta) che restituisce l\'importo convertito: 1 € = 1.08 dollari, 0.85 sterline, 0.94 franchi',
          'Una funzione aggiorna, senza parametri, che legge casella e menu e scrive per esempio "10 € = 10.8 dollari"',
          'aggiorna collegata due volte: con "input" alla casella e con "change" al menu',
          'Bonus: se la casella è vuota, il paragrafo dice "Scrivi un importo" invece di "0 € = 0 dollari"'
        ]}
        hint="converti è una funzione con return come quelle della Lezione 9: un if per ogni valuta, e in ogni ramo return euro * il cambio. Per il bonus, controlla il testo della casella prima di usare Number(), come nella Lezione 8."
      />

      {/* Riepilogo Finale */}
      <section className="mt-12 bg-gradient-to-r from-sky-500 to-indigo-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Ottimo Lavoro!</h2>
        <p className="text-xl mb-4">
          La tua pagina ora <strong>ascolta</strong>: chi scrive, chi sceglie, chi preme i tasti e chi invia un modulo! 👂
        </p>
        <div className="bg-black/20 p-4 rounded border-2 border-white/30">
          <p className="font-bold mb-2 text-yellow-200">🚀 Comandi JavaScript Totali Imparati: 21</p>
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
            <li>return - Restituisce un risultato; i parametri ricevono i valori (Lezione 9)</li>
            <li>input / change / keydown / submit - Altri eventi da ascoltare con addEventListener (Lezione 10) ✨ NUOVO</li>
            <li>event.key / event.preventDefault() - Il tasto premuto e lo stop al ricaricamento del form (Lezione 10) ✨ NUOVO</li>
          </ul>
          <p className="font-bold mt-4 mb-2 text-yellow-200">💡 Concetti Chiave:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Lo schema è sempre lo stesso: cambia solo il nome dell&apos;evento</li>
            <li>input segue ogni lettera, change aspetta la scelta fatta</li>
            <li>Il parametro event lo riempie il browser: non lo passi tu</li>
            <li>Il form si ascolta con submit, e la prima riga è event.preventDefault()</li>
          </ul>
        </div>
        <p className="text-lg font-semibold mt-4">
          Prossima lezione: <strong>Manipolare le Classi CSS</strong>! Cambiare l&apos;aspetto di un elemento in un colpo solo 🎨
        </p>
      </section>

      {/* Allenati nell'Officina */}
      <AllenatiOfficina lezioneSlug="lezione-10-altri-eventi" />

      {/* Prossimi Passi */}
      <section className="mb-12 mt-12">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Prossimi Passi
          </h2>
          <p className="text-gray-700 mb-4">
            Nel tema della scheda hai scritto due o tre righe di <code className="bg-blue-100 px-1 rounded">.style</code> per ogni scelta. Nella
            prossima lezione imparerai a preparare l&apos;aspetto <strong>nel CSS</strong>, con una classe, e ad accenderlo o spegnerlo da JavaScript
            con una riga sola: <strong>classList</strong>.
          </p>
          <p className="text-gray-700">
            Tema chiaro e scuro, menu che si aprono, risposte giuste e sbagliate colorate: tutto più corto e più ordinato. ✨
          </p>
        </div>
      </section>

    </LessonLayout>
  );
}
