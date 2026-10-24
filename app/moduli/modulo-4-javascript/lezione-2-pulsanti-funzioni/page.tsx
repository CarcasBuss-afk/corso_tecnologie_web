import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import JavaScriptDemo from '@/components/didattica/JavaScriptDemo';
import Challenge from '@/components/didattica/Challenge';
import AllenatiOfficina from '@/components/didattica/AllenatiOfficina';

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
          'Capire cos\'è una funzione (blocco di istruzioni con un nome)',
          'Dare un id a un pulsante e trovarlo con getElementById()',
          'Collegare un pulsante a una funzione con addEventListener()',
          'Tenere separati HTML e JavaScript, come già fai con HTML e CSS'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Rendere i Pulsanti &quot;Vivi&quot;!</h2>

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
          Ma cosa succede se vogliamo che qualcosa accada solo <strong>quando l&apos;utente clicca</strong>?
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
              Clicchi &quot;Aggiungi&quot; → va nel carrello
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
          <h3 className="font-bold text-yellow-800 mb-2">💡 Cosa Imparerai Oggi</h3>
          <p className="text-gray-700 mb-3">
            Per far reagire un pulsante servono <strong>tre ingredienti</strong>:
          </p>
          <ol className="text-gray-700 space-y-1 list-decimal list-inside">
            <li>una <strong>funzione</strong>: le istruzioni da eseguire</li>
            <li>un <strong>id</strong> sul pulsante: il suo nome, per poterlo trovare</li>
            <li>un <strong>collegamento</strong>: &quot;quando clicchi questo pulsante, esegui questa funzione&quot;</li>
          </ol>
        </div>
      </section>

      {/* Le Funzioni */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">📦 Ingrediente 1: Le Funzioni</h2>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg mb-6">
          <h3 className="text-2xl font-bold mb-3 text-white">Cos&apos;è una Funzione?</h3>
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
              <p className="font-bold text-yellow-800 mb-2">📋 Ricetta &quot;Pizza&quot;</p>
              <ol className="text-gray-600 text-sm space-y-1">
                <li>1. Impasta la farina</li>
                <li>2. Stendi la pasta</li>
                <li>3. Aggiungi pomodoro</li>
                <li>4. Aggiungi mozzarella</li>
                <li>5. Inforna 15 minuti</li>
              </ol>
            </div>
            <div className="bg-white p-4 rounded border border-yellow-300">
              <p className="font-bold text-yellow-800 mb-2">💻 Funzione &quot;saluta&quot;</p>
              <ol className="text-gray-600 text-sm space-y-1">
                <li>1. Stampa &quot;Ciao!&quot;</li>
                <li>2. Stampa &quot;Come stai?&quot;</li>
                <li>3. Stampa &quot;Benvenuto!&quot;</li>
              </ol>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            Quando dici <strong>&quot;Fai la pizza!&quot;</strong> → esegui tutti i passaggi della ricetta.<br/>
            Quando scrivi <strong>&quot;saluta()&quot;</strong> → JavaScript esegue tutte le istruzioni nella funzione!
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
            <li>• Per ora chiamiamo noi la funzione nel codice. Tra poco sarà il <strong>pulsante</strong> a chiamarla quando lo clicchi!</li>
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
function suonaDo() { }
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

      {/* L'id del pulsante */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🏷️ Ingrediente 2: Un id per il Pulsante</h2>

        <p className="text-lg mb-4">
          Una pagina può avere tanti pulsanti. Per dire a JavaScript <strong>quale</strong> pulsante usare,
          gli diamo un <strong>nome</strong> con l&apos;attributo <code className="bg-gray-100 px-2 py-1 rounded">id</code>.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
          <p className="font-bold text-blue-800 mb-2">🏷️ L&apos;attributo id</p>
          <p className="text-gray-700 mb-4">
            Si scrive dentro il tag di apertura, come gli altri attributi che conosci (ad esempio <code className="bg-blue-100 px-1 rounded">href</code> o <code className="bg-blue-100 px-1 rounded">src</code>):
          </p>
          <CodeExample
            code={`<!-- Un pulsante con un id: il suo nome è "btnSaluta" -->
<button id="btnSaluta">Saluta</button>`}
            language="html"
          />
        </div>

        <p className="text-lg mb-4">
          Da solo, questo pulsante <strong>non fa nulla</strong> quando lo clicchi.
          L&apos;id è come un <strong>cartellino con il nome</strong>: serve a JavaScript per trovarlo nella pagina.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
          <p className="font-bold text-yellow-800 mb-2">📌 Regole dell&apos;id</p>
          <ul className="text-gray-700 space-y-1">
            <li>• Ogni id deve essere <strong>unico</strong> nella pagina</li>
            <li>• Niente spazi: <code className="bg-yellow-100 px-1 rounded">btnSaluta</code> va bene, <code className="bg-yellow-100 px-1 rounded">btn saluta</code> no</li>
            <li>• Maiuscole e minuscole contano: <code className="bg-yellow-100 px-1 rounded">btnSaluta</code> e <code className="bg-yellow-100 px-1 rounded">btnsaluta</code> sono diversi</li>
            <li>• Consiglio: inizia gli id dei pulsanti con <code className="bg-yellow-100 px-1 rounded">btn</code> (da &quot;button&quot;), così non li confondi con il nome della funzione</li>
          </ul>
        </div>
      </section>

      {/* Collegare */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🔗 Ingrediente 3: Collegare Pulsante e Funzione</h2>

        <p className="text-lg mb-4">
          Ora uniamo tutto con <strong>una sola riga</strong> di JavaScript:
        </p>

        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 La Riga Magica</h3>
          <div className="bg-black/30 p-4 rounded border-2 border-white/30 mb-4">
            <p className="font-mono text-yellow-200 break-all">
              document.getElementById(&quot;btnSaluta&quot;).addEventListener(&quot;click&quot;, saluta);
            </p>
          </div>
          <p className="text-lg">Leggila come una frase:</p>
          <p className="text-lg font-bold mt-2">
            &quot;Nella pagina, trova l&apos;elemento con id <span className="text-yellow-200">btnSaluta</span>,
            e quando viene <span className="text-yellow-200">cliccato</span>, esegui la funzione <span className="text-yellow-200">saluta</span>.&quot;
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
            <p className="font-mono text-blue-700 font-bold mb-1">document</p>
            <p className="text-gray-700 text-sm">La pagina HTML</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
            <p className="font-mono text-blue-700 font-bold mb-1">.getElementById(&quot;btnSaluta&quot;)</p>
            <p className="text-gray-700 text-sm">Trova l&apos;elemento con quell&apos;id</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
            <p className="font-mono text-blue-700 font-bold mb-1">.addEventListener(&quot;click&quot;, ...)</p>
            <p className="text-gray-700 text-sm">&quot;Mettiti in ascolto&quot;: quando succede un click...</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
            <p className="font-mono text-blue-700 font-bold mb-1">saluta</p>
            <p className="text-gray-700 text-sm">...esegui questa funzione. <strong>Senza parentesi!</strong></p>
          </div>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded mb-6">
          <h3 className="font-bold text-purple-800 mb-2">🤔 Perché saluta e non saluta()?</h3>
          <p className="text-gray-700">
            Con <code className="bg-purple-100 px-1 rounded">saluta()</code> la funzione partirebbe <strong>subito</strong>,
            appena si carica la pagina. Noi invece diamo al pulsante solo il <strong>nome</strong> della funzione:
            sarà il browser a chiamarla, <strong>ogni volta che qualcuno clicca</strong>.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Lo Schema da Ricordare (sempre uguale!)</h3>
          <div className="bg-black/30 p-4 rounded border-2 border-white/30 space-y-2">
            <p className="font-mono text-yellow-200">1. HTML: dai un id al pulsante</p>
            <p className="font-mono text-yellow-200">2. JavaScript: scrivi la funzione</p>
            <p className="font-mono text-yellow-200">3. JavaScript: collega id e funzione con addEventListener</p>
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

  <!-- 1. HTML: ogni pulsante ha un id -->
  <button id="btnSaluta">Saluta</button>
  <button id="btnConta">Conta</button>

  <script>
    // 2. Le funzioni
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

    // 3. I collegamenti: pulsante → funzione
    document.getElementById("btnSaluta").addEventListener("click", saluta);
    document.getElementById("btnConta").addEventListener("click", contaFinoA3);
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

  <button id="btnSaluta">Saluta</button>
  <button id="btnConta">Conta</button>

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

    document.getElementById("btnSaluta").addEventListener("click", saluta);
    document.getElementById("btnConta").addEventListener("click", contaFinoA3);
  </script>

</body>
</html>`}
        />

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mt-6">
          <p className="font-bold text-green-800 mb-2">✅ Ogni linguaggio al suo posto</p>
          <p className="text-gray-700 mb-3">
            Nel CSS hai imparato a <strong>non</strong> scrivere <code className="bg-green-100 px-1 rounded">style=&quot;...&quot;</code> dentro
            i tag, ma a tenere lo stile separato. Con JavaScript facciamo lo stesso:
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>• <strong>HTML</strong> = la struttura (il pulsante e il suo id)</li>
            <li>• <strong>CSS</strong> = l&apos;aspetto (colori, dimensioni)</li>
            <li>• <strong>JavaScript</strong> = il comportamento (cosa succede al click), tutto dentro <code className="bg-green-100 px-1 rounded">&lt;script&gt;</code></li>
          </ul>
        </div>
      </section>

      {/* Errori tipici */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🐞 Errori Tipici (e come riconoscerli)</h2>

        <p className="text-lg mb-4">
          Se clicchi e <strong>non succede niente</strong>, apri la console (F12): spesso c&apos;è un messaggio rosso.
          Controlla questi errori, sono i più comuni!
        </p>

        <div className="space-y-4">
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <h3 className="font-bold text-red-800 mb-3">❌ 1. L&apos;id scritto in modo diverso</h3>
            <CodeExample
              code={`<button id="btnSaluta">Saluta</button>

<script>
  // "btnsaluta" ≠ "btnSaluta" → non lo trova!
  document.getElementById("btnsaluta").addEventListener("click", saluta);
</script>`}
              language="html"
            />
            <p className="text-gray-700 mt-3">
              L&apos;id nell&apos;HTML e quello nel JavaScript devono essere <strong>identici</strong>, lettera per lettera.
              In console vedrai <code className="bg-red-100 px-1 rounded text-red-700">Cannot read properties of null</code>
              {' '}= &quot;non ho trovato nessun elemento con quell&apos;id&quot;.
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <h3 className="font-bold text-red-800 mb-3">❌ 2. Le parentesi dopo il nome della funzione</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <CodeExample
                title="Sbagliato"
                code={`.addEventListener("click", saluta())`}
                language="javascript"
              />
              <CodeExample
                title="Giusto"
                code={`.addEventListener("click", saluta)`}
                language="javascript"
              />
            </div>
            <p className="text-gray-700 mt-3">
              Con le parentesi la funzione parte <strong>subito</strong>, all&apos;apertura della pagina,
              e poi il pulsante non fa più niente. Nessun messaggio rosso: è un errore &quot;silenzioso&quot;!
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <h3 className="font-bold text-red-800 mb-3">❌ 3. &quot;Click&quot; con la maiuscola</h3>
            <p className="text-gray-700">
              Si scrive <code className="bg-red-100 px-1 rounded">&quot;click&quot;</code>, tutto minuscolo.
              Con <code className="bg-red-100 px-1 rounded">&quot;Click&quot;</code> il browser non riconosce l&apos;evento
              e non succede nulla, senza errori in console.
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <h3 className="font-bold text-red-800 mb-3">❌ 4. Lo &lt;script&gt; nel posto sbagliato</h3>
            <p className="text-gray-700">
              Ricorda la Lezione 1: lo <code className="bg-red-100 px-1 rounded">&lt;script&gt;</code> va
              <strong> alla fine del body</strong>. Se lo metti nell&apos;<code className="bg-red-100 px-1 rounded">&lt;head&gt;</code>,
              JavaScript cerca il pulsante <strong>prima</strong> che esista e non lo trova.
            </p>
          </div>
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
    <!-- I pulsanti andranno qui -->
  </div>

</body>
</html>`,
            language: 'html',
          },
          'Salva (Ctrl+S) e apri index.html nel browser - vedrai solo il titolo',
          {
            text: 'Passo 1 dello schema: aggiungi il primo pulsante con un id',
            code: `<div class="tastiera">
  <button id="btnDo">🎵 Do</button>
</div>`,
            language: 'html',
          },
          'Ricarica e clicca: il pulsante c\'è ma non fa ancora nulla. Normale, manca JavaScript!',
          {
            text: 'Passo 2 dello schema: aggiungi lo <script> prima di </body> e scrivi la funzione',
            code: `  <script>
    function suonaDo() {
      console.log("🎵 Do!");
    }
  </script>

</body>`,
            language: 'html',
          },
          {
            text: 'Passo 3 dello schema: collega il pulsante alla funzione (dentro lo <script>, dopo la funzione)',
            code: `  <script>
    function suonaDo() {
      console.log("🎵 Do!");
    }

    document.getElementById("btnDo").addEventListener("click", suonaDo);
  </script>`,
            language: 'html',
            highlightLines: [6],
          },
          'Ricarica, apri la console (F12), clicca il pulsante: funziona! 🎉',
          {
            text: 'Ripeti lo schema per Re, Mi e Fa: un id, una funzione e un collegamento per ogni pulsante',
            code: `<div class="tastiera">
  <button id="btnDo">🎵 Do</button>
  <button id="btnRe">🎶 Re</button>
  <button id="btnMi">🎼 Mi</button>
  <button id="btnFa">🎹 Fa</button>
</div>

<script>
  // Le funzioni
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

  // I collegamenti
  document.getElementById("btnDo").addEventListener("click", suonaDo);
  document.getElementById("btnRe").addEventListener("click", suonaRe);
  document.getElementById("btnMi").addEventListener("click", suonaMi);
  document.getElementById("btnFa").addEventListener("click", suonaFa);
</script>`,
            language: 'html',
            highlightLines: [3, 4, 5, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 28, 29, 30],
          },
          'Ricarica e prova tutti i pulsanti - ognuno stampa un messaggio diverso! 🎉',
          {
            text: 'Aggiungi un pulsante speciale "TUTTE!" che stampa tutta la scala',
            code: `<!-- HTML: dentro .tastiera, dopo gli altri pulsanti -->
<button id="btnTutte">🎺 TUTTE!</button>

<script>
  // ... le altre funzioni ...

  function suonaTutte() {
    console.log("=== 🎺 SCALA ===");
    console.log("🎵 Do!");
    console.log("🎶 Re!");
    console.log("🎼 Mi!");
    console.log("🎹 Fa!");
    console.log("=== 🎺 FINE ===");
  }

  // ... gli altri collegamenti ...

  document.getElementById("btnTutte").addEventListener("click", suonaTutte);
</script>`,
            language: 'html',
          },
          'Salva e prova il pulsante "TUTTE!" 🎉 Se qualcosa non va, ricontrolla la sezione "Errori Tipici"!'
        ]}
        experiments={[
          'Aggiungi le note mancanti (Sol, La, Si) seguendo lo schema in 3 passi',
          'Crea un pulsante "Pulisci" che chiama una funzione con console.clear()',
          'Prova a sbagliare apposta una lettera dell\'id in getElementById: che errore compare in console?',
          'Prova a scrivere suonaDo() con le parentesi nel collegamento: cosa succede quando ricarichi?'
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
              <li>✅ Cos&apos;è una <strong>funzione</strong> (blocco di istruzioni con nome)</li>
              <li>✅ Come <strong>creare</strong> una funzione con <code className="bg-green-100 px-1 rounded">function nome() {"{}"}</code></li>
              <li>✅ Come <strong>trovare</strong> un pulsante con <code className="bg-green-100 px-1 rounded">getElementById(&quot;id&quot;)</code></li>
              <li>✅ Come <strong>collegare</strong> pulsante e funzione con <code className="bg-green-100 px-1 rounded">addEventListener(&quot;click&quot;, nome)</code></li>
              <li>✅ Riconoscere gli <strong>errori tipici</strong> e leggere la console</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sfida Opzionale */}
      <Challenge
        title="Telecomando della Console"
        description="Crea un 'telecomando' con almeno 5 pulsanti. Ogni pulsante ha un id ed è collegato a una funzione diversa che stampa qualcosa di unico nella console!"
        requirements={[
          'Almeno 5 pulsanti, ognuno con un id che inizia con btn',
          'Ogni pulsante è collegato con addEventListener a una funzione con nome descrittivo',
          'Nessun JavaScript dentro i tag HTML: tutto nello <script>',
          'Almeno una funzione deve stampare 3+ righe',
          'Usa emoji diverse per ogni messaggio'
        ]}
        hint="Pensa a un telecomando TV: Play, Pausa, Volume+, Volume-, Info... Ripeti lo schema in 3 passi per ogni tasto!"
      />

      {/* Riepilogo Finale */}
      <section className="mt-12 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Ottimo Lavoro!</h2>
        <p className="text-xl mb-4">
          Hai imparato a rendere i pulsanti <strong>interattivi</strong> con le funzioni! 🖱️
        </p>
        <div className="bg-black/20 p-4 rounded border-2 border-white/30">
          <p className="font-bold mb-2 text-yellow-200">🚀 Comandi JavaScript Imparati: 4</p>
          <ul className="list-disc list-inside space-y-1">
            <li>console.log() - Stampa messaggi nella console (Lezione 1)</li>
            <li>function nome() {"{ }"} - Crea un blocco di istruzioni (Lezione 2) ✨ NUOVO</li>
            <li>document.getElementById() - Trova un elemento tramite il suo id (Lezione 2) ✨ NUOVO</li>
            <li>addEventListener() - Esegue una funzione quando succede qualcosa (Lezione 2) ✨ NUOVO</li>
          </ul>
          <p className="font-bold mt-4 mb-2 text-yellow-200">💡 Concetti Chiave:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Lo schema in 3 passi: id → funzione → collegamento</li>
            <li>Le funzioni organizzano il codice in blocchi riutilizzabili</li>
            <li>HTML, CSS e JavaScript restano separati, ognuno al suo posto</li>
          </ul>
        </div>
        <p className="text-lg font-semibold mt-4">
          Prossima lezione: <strong>Dialoghi e Variabili</strong>! Imparerai alert(), prompt() e confirm()! 💬
        </p>
      </section>

      {/* Allenati nell'Officina */}
      <AllenatiOfficina lezioneSlug="lezione-2-pulsanti-funzioni" />

      {/* Prossimi Passi */}
      <section className="mb-12 mt-12">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Prossimi Passi
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Nella prossima lezione</strong> i tuoi pulsanti smetteranno di parlare solo con la console:
            impareranno a <strong>comunicare con l&apos;utente</strong> usando finestre popup!
          </p>
          <p className="text-gray-700">
            Scoprirai <code className="bg-blue-100 px-2 py-1 rounded">alert()</code> per mostrare messaggi,
            <code className="bg-blue-100 px-2 py-1 rounded">prompt()</code> per fare domande, e
            <code className="bg-blue-100 px-2 py-1 rounded">confirm()</code> per chiedere conferme.
            Lo schema per collegare i pulsanti resta <strong>lo stesso</strong>! 💬
          </p>
        </div>
      </section>

    </LessonLayout>
  );
}
