import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import JavaScriptDemo from '@/components/didattica/JavaScriptDemo';
import Challenge from '@/components/didattica/Challenge';
import AllenatiOfficina from '@/components/didattica/AllenatiOfficina';

export default function Lezione8OperatoriLogici() {
  const lezioni = getLezioniByModuloSlug('modulo-4-javascript');

  return (
    <LessonLayout
      moduloSlug="modulo-4-javascript"
      moduloTitolo="Modulo 4: JavaScript - Interattività"
      lezioni={lezioni}
      lezioneSlug="lezione-8-operatori-logici"
      lezioneTitolo="Operatori Logici e Validazione"
    >
      <LessonHeader
        numero={8}
        titolo="Operatori Logici e Validazione"
        durata="2 ore"
        difficolta="media"
        obiettivi={[
          'Unire due condizioni con && (E) e || (O)',
          'Capovolgere una condizione con ! (NON)',
          'Controllare le caselle vuote e i valori fuori intervallo',
          'Validare un modulo prima di usare i dati'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Una Domanda Non Basta!</h2>

        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white p-8 rounded-lg mb-6">
          <p className="text-xl mb-4">
            Finora ogni <code className="bg-white/20 px-2 py-1 rounded">if</code> faceva <strong>una sola domanda</strong>...
          </p>
          <p className="text-2xl font-bold">
            Ma nella vita le regole sono spesso doppie: &quot;puoi uscire SE hai finito i compiti E non piove&quot;! 🤔
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-violet-50 p-6 rounded-lg border-2 border-violet-200">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="font-bold text-gray-900 mb-2">&amp;&amp; - E</h3>
            <p className="text-gray-600 text-sm">
              Devono essere vere <strong>tutte e due</strong>
            </p>
          </div>

          <div className="bg-fuchsia-50 p-6 rounded-lg border-2 border-fuchsia-200">
            <div className="text-4xl mb-3">🔀</div>
            <h3 className="font-bold text-gray-900 mb-2">|| - O</h3>
            <p className="text-gray-600 text-sm">
              Basta che <strong>una</strong> sia vera
            </p>
          </div>

          <div className="bg-pink-50 p-6 rounded-lg border-2 border-pink-200">
            <div className="text-4xl mb-3">🙃</div>
            <h3 className="font-bold text-gray-900 mb-2">! - NON</h3>
            <p className="text-gray-600 text-sm">
              Capovolge: vero diventa falso e viceversa
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
          <h3 className="font-bold text-yellow-800 mb-2">💡 Esempi nel Mondo Reale</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong>Moduli online:</strong> &quot;Il campo nome è obbligatorio&quot; compare se lo lasci vuoto 📝</li>
            <li>• <strong>Registrazione:</strong> &quot;Le password non coincidono&quot; se le due caselle sono diverse 🔑</li>
            <li>• <strong>Biglietti:</strong> ridotto se hai meno di 12 anni O più di 65 🎟️</li>
          </ul>
        </div>
      </section>

      {/* && */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🤝 &amp;&amp; - &quot;E&quot;: Tutte e Due Vere</h2>

        <p className="text-lg mb-4">
          Con <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">&amp;&amp;</code> la condizione è vera <strong>solo se entrambe</strong> le
          parti sono vere. Basta un &quot;no&quot; e tutto diventa falso.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-2 border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-gray-900">Compiti finiti?</th>
                <th className="p-3 text-left text-gray-900">Non piove?</th>
                <th className="p-3 text-left text-gray-900">Esco? (compiti &amp;&amp; non piove)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="p-3">✅ sì</td><td className="p-3">✅ sì</td><td className="p-3 font-bold text-green-700">✅ sì</td></tr>
              <tr className="border-t"><td className="p-3">✅ sì</td><td className="p-3">❌ no</td><td className="p-3 font-bold text-red-700">❌ no</td></tr>
              <tr className="border-t"><td className="p-3">❌ no</td><td className="p-3">✅ sì</td><td className="p-3 font-bold text-red-700">❌ no</td></tr>
              <tr className="border-t"><td className="p-3">❌ no</td><td className="p-3">❌ no</td><td className="p-3 font-bold text-red-700">❌ no</td></tr>
            </tbody>
          </table>
        </div>

        <CodeExample
          title="Due condizioni, entrambe obbligatorie"
          code={`let eta = Number(document.getElementById("eta").value);
let altezza = Number(document.getElementById("altezza").value);

if (eta >= 8 && altezza >= 120) {
  esito.innerHTML = "🌲 Puoi entrare nel percorso!";
} else {
  esito.innerHTML = "🚫 Non puoi ancora entrare";
}`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mt-6">
          <p className="font-bold text-blue-800 mb-2">💡 Molto usato per gli intervalli</p>
          <p className="text-gray-700">
            &quot;Il numero è tra 1 e 10?&quot; si scrive <code className="bg-blue-100 px-1 rounded">voto &gt;= 1 &amp;&amp; voto &lt;= 10</code>:
            deve essere almeno 1 <strong>e</strong> al massimo 10. Attenzione: la variabile va ripetuta in tutte e due le parti!
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Il Parco Avventura"
          description="Servono almeno 8 anni E almeno 120 cm. Prova 10 anni e 110 cm, poi 10 anni e 130 cm"
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
      background: #e8f5e9;
    }
    input {
      width: 90px;
      padding: 8px;
      font-size: 18px;
      text-align: center;
      margin: 5px;
    }
    button {
      padding: 12px 25px;
      font-size: 18px;
      margin-top: 10px;
      background: #2e7d32;
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
  <h1>🌲 Parco Avventura</h1>

  <label>Età</label>
  <input type="number" id="eta">
  <label>Altezza (cm)</label>
  <input type="number" id="altezza">
  <br>
  <button id="btnVerifica">Posso entrare?</button>

  <p id="esito"></p>

  <script>
    function verificaAccesso() {
      let eta = Number(document.getElementById("eta").value);
      let altezza = Number(document.getElementById("altezza").value);
      let esito = document.getElementById("esito");

      if (eta >= 8 && altezza >= 120) {
        esito.innerHTML = "🌲 Puoi entrare nel percorso!";
        esito.style.color = "green";
      } else {
        esito.innerHTML = "🚫 Non puoi ancora entrare";
        esito.style.color = "red";
      }
    }

    document.getElementById("btnVerifica").addEventListener("click", verificaAccesso);
  </script>
</body>
</html>`}
        />
      </section>

      {/* || */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🔀 || - &quot;O&quot;: Ne Basta Una</h2>

        <p className="text-lg mb-4">
          Con <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">||</code> la condizione è vera se <strong>almeno una</strong> delle parti
          è vera. È falsa solo quando sono false tutte.
        </p>

        <div className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded mb-6">
          <p className="text-gray-700 text-sm">
            ⌨️ <strong>Come si scrive |?</strong> È la &quot;barra verticale&quot;: sulla tastiera italiana è il tasto in alto a sinistra, sotto Esc,
            premuto insieme a <strong>Maiusc</strong>. Ne servono due di fila: <code className="bg-white px-1 rounded">||</code>
          </p>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-2 border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-gray-900">C&apos;è cioccolato?</th>
                <th className="p-3 text-left text-gray-900">C&apos;è fragola?</th>
                <th className="p-3 text-left text-gray-900">Prendo il gelato? (cioccolato || fragola)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t"><td className="p-3">✅ sì</td><td className="p-3">✅ sì</td><td className="p-3 font-bold text-green-700">✅ sì</td></tr>
              <tr className="border-t"><td className="p-3">✅ sì</td><td className="p-3">❌ no</td><td className="p-3 font-bold text-green-700">✅ sì</td></tr>
              <tr className="border-t"><td className="p-3">❌ no</td><td className="p-3">✅ sì</td><td className="p-3 font-bold text-green-700">✅ sì</td></tr>
              <tr className="border-t"><td className="p-3">❌ no</td><td className="p-3">❌ no</td><td className="p-3 font-bold text-red-700">❌ no</td></tr>
            </tbody>
          </table>
        </div>

        <CodeExample
          title="Più risposte giuste"
          code={`let giorno = document.getElementById("giorno").value;

if (giorno === "sabato" || giorno === "domenica") {
  esito.innerHTML = "😴 Weekend! Si dorme";
} else {
  esito.innerHTML = "⏰ Sveglia, si va a scuola!";
}`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mt-6">
          <p className="font-bold text-green-800 mb-2">🎉 Risolto il problema delle maiuscole della Lezione 6!</p>
          <p className="text-gray-700 mb-3">
            Ti ricordi il quiz delle capitali, dove &quot;roma&quot; scritto minuscolo era sbagliato? Con || accettiamo tutte e due:
          </p>
          <code className="block bg-white p-3 rounded border border-green-200 text-sm">if (risposta === &quot;Roma&quot; || risposta === &quot;roma&quot;) &#123;</code>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Che Giorno È?"
          description="Scrivi un giorno della settimana in minuscolo: sabato, lunedì, domenica..."
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      text-align: center;
      background: #ede7f6;
    }
    input {
      width: 160px;
      padding: 10px;
      font-size: 18px;
      text-align: center;
    }
    button {
      padding: 12px 25px;
      font-size: 18px;
      background: #5e35b1;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }
    p {
      font-size: 26px;
      font-weight: bold;
      color: #5e35b1;
    }
  </style>
</head>
<body>
  <h1>📅 Che Giorno È?</h1>

  <input type="text" id="giorno" placeholder="es: sabato">
  <button id="btnGiorno">Controlla</button>

  <p id="esito"></p>

  <script>
    function controllaGiorno() {
      let giorno = document.getElementById("giorno").value;
      let esito = document.getElementById("esito");

      if (giorno === "sabato" || giorno === "domenica") {
        esito.innerHTML = "😴 Weekend! Si dorme";
      } else {
        esito.innerHTML = "⏰ Sveglia, si va a scuola!";
      }
    }

    document.getElementById("btnGiorno").addEventListener("click", controllaGiorno);
  </script>
</body>
</html>`}
        />
      </section>

      {/* ! */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🙃 ! - &quot;NON&quot;: Capovolgere</h2>

        <p className="text-lg mb-4">
          Il punto esclamativo <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">!</code> davanti a una condizione la <strong>capovolge</strong>:
          {' '}<code className="bg-gray-100 px-1 rounded">true</code> diventa <code className="bg-gray-100 px-1 rounded">false</code> e viceversa.
          Lo conosci già senza saperlo: <code className="bg-gray-100 px-1 rounded">!==</code> vuol dire proprio &quot;NON uguale&quot;.
        </p>

        <p className="text-lg mb-4">
          È comodissimo con <code className="bg-gray-100 px-2 py-1 rounded">confirm()</code> della Lezione 3, che risponde proprio
          {' '}<strong>true</strong> (OK) oppure <strong>false</strong> (Annulla):
        </p>

        <CodeExample
          title="Se l'utente NON accetta..."
          code={`let accetta = confirm("Accetti il regolamento della chat?");

if (!accetta) {
  esito.innerHTML = "⛔ Senza accettare non puoi entrare";
} else {
  esito.innerHTML = "💬 Benvenuto nella chat!";
}`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded mt-6">
          <p className="font-bold text-purple-800 mb-2">💡 Come si legge</p>
          <p className="text-gray-700">
            <code className="bg-purple-100 px-1 rounded">if (!accetta)</code> si legge &quot;se NON accetta&quot;. Dato che accetta è già
            true o false, non serve scrivere <code className="bg-purple-100 px-1 rounded">=== true</code>.
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Il Regolamento"
          description="Clicca e prova sia OK sia Annulla"
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
      background: linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%);
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
  <h1>💬 Chat della Classe</h1>

  <button id="btnEntra">Entra nella chat</button>

  <p id="esito"></p>

  <script>
    function entra() {
      let accetta = confirm("Accetti il regolamento della chat?");
      let esito = document.getElementById("esito");

      if (!accetta) {
        esito.innerHTML = "⛔ Senza accettare non puoi entrare";
        esito.style.color = "red";
      } else {
        esito.innerHTML = "💬 Benvenuto nella chat!";
        esito.style.color = "green";
      }
    }

    document.getElementById("btnEntra").addEventListener("click", entra);
  </script>
</body>
</html>`}
        />
      </section>

      {/* Validazione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🛡️ La Validazione: Controlla Prima di Usare</h2>

        <p className="text-lg mb-4">
          Nella Lezione 7 hai visto che una casella vuota diventa 0, e nessuno impedisce di scrivere un voto di 15.
          <strong> Validare</strong> vuol dire controllare i dati <strong>prima</strong> di usarli, come un buttafuori all&apos;ingresso. 🕴️
        </p>

        <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Lo Schema della Validazione</h3>
          <div className="bg-black/30 p-4 rounded border-2 border-white/30">
            <p className="font-mono text-yellow-200">if (casella vuota) &#123; avviso &#125;</p>
            <p className="font-mono text-yellow-200">else if (valore non valido) &#123; avviso &#125;</p>
            <p className="font-mono text-yellow-200">else &#123; tutto ok: ora usa i dati! &#125;</p>
          </div>
          <p className="text-sm mt-3 text-white/80">
            Prima tutti i controlli, il lavoro vero solo alla fine.
          </p>
        </div>

        <CodeExample
          title="La pagella controllata"
          code={`let testo = document.getElementById("casellaVoto").value;
let voto = Number(testo);

if (testo === "") {
  giudizio.innerHTML = "⚠️ Scrivi un voto!";
} else if (voto < 1 || voto > 10) {
  giudizio.innerHTML = "⚠️ Il voto deve essere da 1 a 10";
} else if (voto >= 6) {
  giudizio.innerHTML = "✅ Promosso!";
} else {
  giudizio.innerHTML = "❌ Insufficiente";
}`}
          language="javascript"
          showLineNumbers
        />

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="font-bold text-blue-800 mb-2">🔍 Perché qui la versione lunga?</p>
            <p className="text-gray-700">
              Per sapere se la casella è vuota serve il <strong>testo</strong> originale (<code className="bg-blue-100 px-1 rounded">&quot;&quot;</code>):
              dopo Number() sarebbe già diventato 0, e non potremmo distinguerlo da uno 0 scritto davvero.
            </p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <p className="font-bold text-blue-800 mb-2">🔍 Perché || e non &amp;&amp;?</p>
            <p className="text-gray-700">
              Il voto è sbagliato se è troppo piccolo <strong>O</strong> troppo grande. Un numero non può essere minore di 1 e maggiore di 10
              contemporaneamente!
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="La Pagella Controllata"
          description="Prova a cliccare con la casella vuota, poi con 15, con 8 e con 4"
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
    input {
      width: 100px;
      padding: 10px;
      font-size: 20px;
      text-align: center;
    }
    button {
      padding: 12px 25px;
      font-size: 18px;
      background: white;
      color: #667eea;
      border: 2px solid #667eea;
      border-radius: 8px;
      cursor: pointer;
    }
    p {
      font-size: 26px;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>📒 La Pagella Controllata</h1>

  <input type="number" id="casellaVoto" placeholder="Voto">
  <button id="btnValuta">Valuta</button>

  <p id="giudizio"></p>

  <script>
    function valuta() {
      let testo = document.getElementById("casellaVoto").value;
      let voto = Number(testo);
      let giudizio = document.getElementById("giudizio");

      if (testo === "") {
        giudizio.innerHTML = "⚠️ Scrivi un voto!";
        giudizio.style.color = "darkorange";
      } else if (voto < 1 || voto > 10) {
        giudizio.innerHTML = "⚠️ Il voto deve essere da 1 a 10";
        giudizio.style.color = "darkorange";
      } else if (voto >= 6) {
        giudizio.innerHTML = "✅ Promosso!";
        giudizio.style.color = "green";
      } else {
        giudizio.innerHTML = "❌ Insufficiente";
        giudizio.style.color = "red";
      }
    }

    document.getElementById("btnValuta").addEventListener("click", valuta);
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
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 1: Non ripetere la variabile</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm">if (voto &gt;= 1 &amp;&amp; &lt;= 10) &#123;</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm">if (voto &gt;= 1 &amp;&amp; voto &lt;= 10) &#123;</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              In italiano diciamo &quot;maggiore di 1 e minore di 10&quot;, ma JavaScript vuole due domande <strong>complete</strong>.
              Nella console: <code className="bg-red-100 px-1 rounded">SyntaxError: Unexpected token &apos;&lt;=&apos;</code> e lo script si blocca.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 2: Il confronto a metà con ||</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm">if (giorno === &quot;sabato&quot; || &quot;domenica&quot;) &#123;</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm">if (giorno === &quot;sabato&quot; || giorno === &quot;domenica&quot;) &#123;</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Il più subdolo: <strong>nessun errore</strong>, ma la condizione è <strong>sempre vera</strong>, anche il lunedì!
              La seconda parte <code className="bg-red-100 px-1 rounded">&quot;domenica&quot;</code> da sola non è una domanda.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 3: &amp;&amp; al posto di ||</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm">if (voto &lt; 1 &amp;&amp; voto &gt; 10) &#123;</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm">if (voto &lt; 1 || voto &gt; 10) &#123;</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Nessun numero è minore di 1 <strong>e</strong> maggiore di 10 insieme: la condizione non è <strong>mai</strong> vera e il controllo
              non scatta mai. Prova a leggere la condizione ad alta voce: ti accorgi subito se ha senso.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 4: Cercare la casella vuota dopo Number()</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm">if (voto === &quot;&quot;) &#123;</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm">if (testo === &quot;&quot;) &#123;</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              <code className="bg-red-100 px-1 rounded">voto</code> è già passato da Number() ed è diventato 0, non è più un testo vuoto.
              Il controllo della casella vuota si fa sul <strong>testo</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Esercizio Guidato */}
      <Exercise
        title="🎯 Esercizio Guidato: L'Iscrizione al Torneo"
        steps={[
          'Crea una cartella "iscrizione-torneo" in VS Code',
          'Dentro la cartella, crea un file "index.html"',
          {
            text: 'Scrivi la struttura HTML del modulo: nome, età, password ripetuta due volte, un pulsante e un paragrafo per i messaggi',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Iscrizione al Torneo</title>
</head>
<body>

  <div>
    <h1>🏆 Iscrizione al Torneo</h1>

    <label>Nome</label>
    <input type="text" id="nome">

    <label>Età (da 14 a 19 anni)</label>
    <input type="number" id="eta">

    <label>Password</label>
    <input type="password" id="password">

    <label>Ripeti la password</label>
    <input type="password" id="conferma">

    <button id="btnIscriviti">Iscriviti</button>

    <p id="messaggio"></p>
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
  <title>Iscrizione al Torneo</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      background-color: #ede7f6;
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
      color: #5e35b1;
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
      background-color: #5e35b1;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    p {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
    }
  </style>
</head>
<body>

  <div>
    <h1>🏆 Iscrizione al Torneo</h1>

    <label>Nome</label>
    <input type="text" id="nome">

    <label>Età (da 14 a 19 anni)</label>
    <input type="number" id="eta">

    <label>Password</label>
    <input type="password" id="password">

    <label>Ripeti la password</label>
    <input type="password" id="conferma">

    <button id="btnIscriviti">Iscriviti</button>

    <p id="messaggio"></p>
  </div>

</body>
</html>`,
            language: 'html',
            highlightLines: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57],
          },
          {
            text: 'Scrivi la funzione iscriviti con il primo controllo: il nome non deve essere vuoto. Collegala al pulsante',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Iscrizione al Torneo</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      background-color: #ede7f6;
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
      color: #5e35b1;
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
      background-color: #5e35b1;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    p {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
    }
  </style>
</head>
<body>

  <div>
    <h1>🏆 Iscrizione al Torneo</h1>

    <label>Nome</label>
    <input type="text" id="nome">

    <label>Età (da 14 a 19 anni)</label>
    <input type="number" id="eta">

    <label>Password</label>
    <input type="password" id="password">

    <label>Ripeti la password</label>
    <input type="password" id="conferma">

    <button id="btnIscriviti">Iscriviti</button>

    <p id="messaggio"></p>
  </div>

  <script>
    function iscriviti() {
      let nome = document.getElementById("nome").value;
      let messaggio = document.getElementById("messaggio");

      if (nome === "") {
        messaggio.innerHTML = "⚠️ Scrivi il tuo nome";
        messaggio.style.color = "darkorange";
      } else {
        messaggio.innerHTML = "✅ Benvenuto nel torneo, " + nome + "!";
        messaggio.style.color = "green";
      }
    }

    document.getElementById("btnIscriviti").addEventListener("click", iscriviti);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96],
          },
          'Ricarica e clicca "Iscriviti" con il nome vuoto, poi scrivi un nome e riprova',
          {
            text: 'Aggiungi il controllo dell\'età con || : non va bene se è vuota, minore di 14 o maggiore di 19',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Iscrizione al Torneo</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      background-color: #ede7f6;
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
      color: #5e35b1;
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
      background-color: #5e35b1;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    p {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
    }
  </style>
</head>
<body>

  <div>
    <h1>🏆 Iscrizione al Torneo</h1>

    <label>Nome</label>
    <input type="text" id="nome">

    <label>Età (da 14 a 19 anni)</label>
    <input type="number" id="eta">

    <label>Password</label>
    <input type="password" id="password">

    <label>Ripeti la password</label>
    <input type="password" id="conferma">

    <button id="btnIscriviti">Iscriviti</button>

    <p id="messaggio"></p>
  </div>

  <script>
    function iscriviti() {
      let nome = document.getElementById("nome").value;
      let testoEta = document.getElementById("eta").value;
      let eta = Number(testoEta);
      let messaggio = document.getElementById("messaggio");

      if (nome === "") {
        messaggio.innerHTML = "⚠️ Scrivi il tuo nome";
        messaggio.style.color = "darkorange";
      } else if (testoEta === "" || eta < 14 || eta > 19) {
        messaggio.innerHTML = "⚠️ L'età deve essere da 14 a 19 anni";
        messaggio.style.color = "darkorange";
      } else {
        messaggio.innerHTML = "✅ Benvenuto nel torneo, " + nome + "!";
        messaggio.style.color = "green";
      }
    }

    document.getElementById("btnIscriviti").addEventListener("click", iscriviti);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [84, 85, 91, 92, 93],
          },
          {
            text: 'Infine il controllo delle password: non devono essere vuote e devono essere uguali (usa !==)',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Iscrizione al Torneo</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
      background-color: #ede7f6;
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
      color: #5e35b1;
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
      background-color: #5e35b1;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
    }

    p {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
    }
  </style>
</head>
<body>

  <div>
    <h1>🏆 Iscrizione al Torneo</h1>

    <label>Nome</label>
    <input type="text" id="nome">

    <label>Età (da 14 a 19 anni)</label>
    <input type="number" id="eta">

    <label>Password</label>
    <input type="password" id="password">

    <label>Ripeti la password</label>
    <input type="password" id="conferma">

    <button id="btnIscriviti">Iscriviti</button>

    <p id="messaggio"></p>
  </div>

  <script>
    function iscriviti() {
      let nome = document.getElementById("nome").value;
      let testoEta = document.getElementById("eta").value;
      let eta = Number(testoEta);
      let password = document.getElementById("password").value;
      let conferma = document.getElementById("conferma").value;
      let messaggio = document.getElementById("messaggio");

      if (nome === "") {
        messaggio.innerHTML = "⚠️ Scrivi il tuo nome";
        messaggio.style.color = "darkorange";
      } else if (testoEta === "" || eta < 14 || eta > 19) {
        messaggio.innerHTML = "⚠️ L'età deve essere da 14 a 19 anni";
        messaggio.style.color = "darkorange";
      } else if (password === "" || password !== conferma) {
        messaggio.innerHTML = "⚠️ Le due password devono essere uguali (e non vuote)";
        messaggio.style.color = "darkorange";
      } else {
        messaggio.innerHTML = "✅ Benvenuto nel torneo, " + nome + "!";
        messaggio.style.color = "green";
      }
    }

    document.getElementById("btnIscriviti").addEventListener("click", iscriviti);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [86, 87, 96, 97, 98],
          },
          'Ricarica e prova a sbagliare apposta ogni campo, uno alla volta: compare ogni volta il messaggio giusto? 🎉'
        ]}
        experiments={[
          'Cambia l\'intervallo dell\'età: il torneo ora è da 12 a 16 anni',
          'Aggiungi una casella "squadra" obbligatoria con il suo else if',
          'Prima del messaggio di benvenuto chiedi con confirm() "Accetti il regolamento?" e usa ! per bloccare chi non accetta',
          'Prova a scrivere apposta eta < 14 && eta > 19: il controllo funziona ancora? Perché?',
          'Accetta solo nomi diversi da "admin": aggiungi un else if con nome === "admin" e un avviso a tua scelta'
        ]}
      />

      {/* Checklist Finale */}
      <section className="mb-12 mt-12">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✅</span> Hai Completato la Lezione!
          </h2>
          <p className="text-gray-700 mb-4">
            Ora le tue pagine controllano i dati prima di usarli, come i veri siti! 🛡️
          </p>
          <div className="bg-white rounded p-4 border border-green-200">
            <p className="font-bold text-gray-900 mb-2">Cosa hai imparato:</p>
            <ul className="space-y-1 text-gray-700">
              <li>✅ Unire condizioni con <strong>&amp;&amp;</strong> (tutte vere) e <strong>||</strong> (almeno una vera)</li>
              <li>✅ Capovolgere una condizione con <strong>!</strong></li>
              <li>✅ Scrivere gli intervalli: <strong>voto &gt;= 1 &amp;&amp; voto &lt;= 10</strong></li>
              <li>✅ Riconoscere una casella vuota con <strong>testo === &quot;&quot;</strong></li>
              <li>✅ Validare: prima i controlli con <strong>else if</strong>, il lavoro vero solo alla fine</li>
              <li>✅ Accettare più risposte giuste (Roma o roma) con <strong>||</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sfida Opzionale */}
      <Challenge
        title="La Cassaforte a 3 Tentativi"
        description="Una cassaforte si apre con il codice 1234. L'utente lo scrive in una casella e clicca &quot;Apri&quot;. Dopo 3 tentativi sbagliati la cassaforte si blocca per sempre!"
        requirements={[
          'Una casella con id codice, un pulsante con id btnApri e un paragrafo con id esito',
          'Una variabile tentativi creata fuori dalla funzione (come il contatore della Lezione 7)',
          'Se i tentativi sono già 3 o più: "🔒 Cassaforte bloccata!"',
          'Altrimenti, se la casella è vuota: "⚠️ Scrivi un codice"; se il codice è giusto: "🔓 Aperta!"; se è sbagliato: tentativi++ e "❌ Codice errato"',
          'Bonus: mostra quanti tentativi restano, calcolandoli in una variabile rimasti = 3 - tentativi'
        ]}
        hint="L'ordine degli else if conta: il primo controllo è quello del blocco (tentativi >= 3), così chi ha finito i tentativi non può più provare. Il codice letto con .value è un testo: confrontalo con &quot;1234&quot;."
      />

      {/* Riepilogo Finale */}
      <section className="mt-12 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Ottimo Lavoro!</h2>
        <p className="text-xl mb-4">
          Ora sai fare <strong>domande composte</strong> e <strong>proteggere</strong> le tue pagine dai dati sbagliati! 🛡️
        </p>
        <div className="bg-black/20 p-4 rounded border-2 border-white/30">
          <p className="font-bold mb-2 text-yellow-200">🚀 Comandi JavaScript Totali Imparati: 18</p>
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
            <li>&amp;&amp; / || / ! - Operatori logici: E, O, NON (Lezione 8) ✨ NUOVO</li>
          </ul>
          <p className="font-bold mt-4 mb-2 text-yellow-200">💡 Concetti Chiave:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>&amp;&amp;: vere tutte e due. ||: ne basta una. !: capovolge</li>
            <li>In ogni parte va ripetuta la variabile: giorno === &quot;sabato&quot; || giorno === &quot;domenica&quot;</li>
            <li>La casella vuota si controlla sul testo, prima di Number()</li>
            <li>Validare: prima i controlli, poi il lavoro vero</li>
          </ul>
        </div>
        <p className="text-lg font-semibold mt-4">
          Prossima lezione: <strong>Funzioni con Parametri e Return</strong>! Basta codice ripetuto! ♻️
        </p>
      </section>

      {/* Allenati nell'Officina */}
      <AllenatiOfficina lezioneSlug="lezione-8-operatori-logici" />

      {/* Prossimi Passi */}
      <section className="mb-12 mt-12">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Prossimi Passi
          </h2>
          <p className="text-gray-700 mb-4">
            Ti ricordi la calcolatrice della Lezione 7, con le stesse righe ripetute in quattro funzioni? Nella prossima lezione imparerai a
            scrivere funzioni a cui <strong>passare dei valori</strong> (i parametri) e che <strong>restituiscono un risultato</strong> (return).
          </p>
          <p className="text-gray-700">
            Scriverai il codice una volta sola e lo riuserai quante volte vuoi! ♻️
          </p>
        </div>
      </section>

    </LessonLayout>
  );
}
