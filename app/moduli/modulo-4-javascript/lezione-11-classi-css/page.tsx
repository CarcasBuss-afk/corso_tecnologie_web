import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import JavaScriptDemo from '@/components/didattica/JavaScriptDemo';
import Challenge from '@/components/didattica/Challenge';
import AllenatiOfficina from '@/components/didattica/AllenatiOfficina';

export default function Lezione11ClassiCss() {
  const lezioni = getLezioniByModuloSlug('modulo-4-javascript');

  return (
    <LessonLayout
      moduloSlug="modulo-4-javascript"
      moduloTitolo="Modulo 4: JavaScript - Interattività"
      lezioni={lezioni}
      lezioneSlug="lezione-11-classi-css"
      lezioneTitolo="Manipolare le Classi CSS"
    >
      <LessonHeader
        numero={11}
        titolo="Manipolare le Classi CSS"
        durata="2 ore"
        difficolta="media"
        obiettivi={[
          'Preparare un aspetto nel CSS con una classe e metterlo o toglierlo da JavaScript, con classList.add e classList.remove',
          'Accendere e spegnere una classe con un solo pulsante, con classList.toggle',
          'Chiedere se un elemento ha una classe con classList.contains e decidere con if',
          'Costruire un tema scuro, un menu che si apre e si chiude e delle schede (tab)'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Il Guardaroba di JavaScript</h2>

        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-8 rounded-lg mb-6">
          <p className="text-xl mb-4">
            Con <code className="bg-white/20 px-2 py-1 rounded">.style</code> JavaScript è un <strong>sarto</strong>: cuce il vestito un punto alla
            volta. Il colore dello sfondo, poi quello del testo, poi il bordo, poi la grandezza...
          </p>
          <p className="text-2xl font-bold">
            E se il vestito fosse già pronto nell&apos;armadio? Basterebbe dire: &quot;mettiti questo&quot;. 👕
          </p>
        </div>

        <p className="text-lg mb-6">
          L&apos;armadio è il <strong>CSS</strong> e i vestiti pronti sono le <strong>classi</strong>, quelle che conosci dal Modulo 2. Oggi impari a
          {' '}<strong>mettere e togliere una classe</strong> da JavaScript, con <code className="bg-gray-100 px-2 py-1 rounded">classList</code>: tutto
          l&apos;aspetto cambia con una riga sola.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 my-8">
          <div className="bg-emerald-50 p-5 rounded-lg border-2 border-emerald-200">
            <div className="text-4xl mb-3">➕</div>
            <h3 className="font-bold text-gray-900 mb-2">add</h3>
            <p className="text-gray-600 text-sm">
              <strong>Mette</strong> una classe all&apos;elemento
            </p>
          </div>

          <div className="bg-teal-50 p-5 rounded-lg border-2 border-teal-200">
            <div className="text-4xl mb-3">➖</div>
            <h3 className="font-bold text-gray-900 mb-2">remove</h3>
            <p className="text-gray-600 text-sm">
              <strong>Toglie</strong> una classe all&apos;elemento
            </p>
          </div>

          <div className="bg-cyan-50 p-5 rounded-lg border-2 border-cyan-200">
            <div className="text-4xl mb-3">🔀</div>
            <h3 className="font-bold text-gray-900 mb-2">toggle</h3>
            <p className="text-gray-600 text-sm">
              Come un <strong>interruttore</strong>: la mette se manca, la toglie se c&apos;è
            </p>
          </div>

          <div className="bg-sky-50 p-5 rounded-lg border-2 border-sky-200">
            <div className="text-4xl mb-3">❓</div>
            <h3 className="font-bold text-gray-900 mb-2">contains</h3>
            <p className="text-gray-600 text-sm">
              <strong>Chiede</strong> se l&apos;elemento ha già quella classe
            </p>
          </div>
        </div>
      </section>

      {/* CSS prepara, JavaScript sceglie */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎨 Il CSS Prepara, JavaScript Sceglie</h2>

        <p className="text-lg mb-4">
          Ricordi il Tema della Scheda della Lezione 10? Per il tema scuro scrivevi due righe di <code className="bg-gray-100 px-2 py-1 rounded">.style</code>,
          {' '}e altre due per ogni tema. Ecco la stessa cosa con una classe.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6 items-start">
          <CodeExample
            title="Prima: tutto in JavaScript"
            code={`// JavaScript
scheda.style.backgroundColor = "#263238";
scheda.style.color = "white";`}
            language="javascript"
          />
          <CodeExample
            title="Ora: il vestito è pronto nel CSS"
            code={`/* CSS */
.scuro {
  background-color: #263238;
  color: white;
}

// JavaScript
scheda.classList.add("scuro");`}
            language="javascript"
          />
        </div>

        <p className="text-gray-700 mb-6">
          Il <strong>CSS</strong> decide <strong>come</strong> appare il tema scuro; <strong>JavaScript</strong> decide solo <strong>quando</strong>.
          Vuoi un altro grigio? Cambi il CSS, e il JavaScript non lo tocchi nemmeno.
        </p>

        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📘 Come Funziona</h3>
          <div className="bg-black/30 p-4 rounded border-2 border-white/30 space-y-1">
            <p className="font-mono text-yellow-200">elemento.classList.add(&quot;scuro&quot;);        // mette la classe</p>
            <p className="font-mono text-yellow-200">elemento.classList.remove(&quot;scuro&quot;);     // toglie la classe</p>
            <p className="font-mono text-yellow-200">elemento.classList.toggle(&quot;scuro&quot;);     // la mette se manca, la toglie se c&apos;è</p>
            <p className="font-mono text-yellow-200">elemento.classList.contains(&quot;scuro&quot;);   // c&apos;è? risponde true o false</p>
          </div>
          <p className="text-sm mt-3 text-white/80">
            classList è la lista delle classi dell&apos;elemento. add, remove, toggle e contains sono le quattro cose che le puoi chiedere.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <h3 className="font-bold text-yellow-800 mb-2">⚠️ Il nome della classe va senza punto</h3>
            <p className="text-gray-700">
              Nel CSS scrivi <code className="bg-yellow-100 px-1 rounded">.scuro</code>, perché il punto vuol dire &quot;questa è una classe&quot;.
              In classList scrivi solo il nome, fra virgolette: <code className="bg-yellow-100 px-1 rounded">&quot;scuro&quot;</code>. Che sia una
              classe, classList lo sa già.
            </p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
            <h3 className="font-bold text-blue-800 mb-2">🏷️ Le altre classi restano</h3>
            <p className="text-gray-700">
              Un elemento può avere più classi, come hai visto nella Lezione 3 di CSS. Se l&apos;elemento è
              {' '}<code className="bg-blue-100 px-1 rounded">class=&quot;scheda&quot;</code>, dopo <code className="bg-blue-100 px-1 rounded">add(&quot;scuro&quot;)</code>
              {' '}diventa <code className="bg-blue-100 px-1 rounded">class=&quot;scheda scuro&quot;</code>: la classe nuova si aggiunge, non cancella le altre.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded mt-4">
          <p className="font-bold text-gray-800 mb-2">🧭 La regola di sempre</p>
          <p className="text-gray-700">
            L&apos;<strong>id</strong> serve a JavaScript per trovare l&apos;elemento, la <strong>classe</strong> serve al CSS per vestirlo. Non cambia
            niente: JavaScript trova l&apos;elemento con il suo id e gli cambia la classe.
          </p>
        </div>
      </section>

      {/* add e remove */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">➕ add e ➖ remove: Mettere e Togliere</h2>

        <p className="text-lg mb-4">
          Nel CSS prepari la classe <code className="bg-gray-100 px-2 py-1 rounded">.accesa</code>: sfondo giallo e un alone di luce. All&apos;inizio
          nessun elemento ce l&apos;ha. Un pulsante la mette, l&apos;altro la toglie.
        </p>

        <CodeExample
          title="Accendere e spegnere"
          code={`function accendi() {
  document.getElementById("lampadina").classList.add("accesa");
}

function spegni() {
  document.getElementById("lampadina").classList.remove("accesa");
}`}
          language="javascript"
          showLineNumbers
        />

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="La Lampadina"
          description="Accendi e spegni la lampadina. Prova anche a premere Accendi due volte di seguito"
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
      background-color: #37474f;
    }
    .lampadina {
      width: 120px;
      height: 120px;
      margin: 0 auto 25px;
      border-radius: 50%;
      background-color: #78909c;
      font-size: 60px;
      line-height: 120px;
    }
    .accesa {
      background-color: #ffeb3b;
      box-shadow: 0 0 60px #ffeb3b;
    }
    button {
      padding: 10px 25px;
      margin: 5px;
      font-size: 18px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="lampadina" id="lampadina">💡</div>

  <button id="btnAccendi">Accendi</button>
  <button id="btnSpegni">Spegni</button>

  <script>
    function accendi() {
      document.getElementById("lampadina").classList.add("accesa");
    }

    function spegni() {
      document.getElementById("lampadina").classList.remove("accesa");
    }

    document.getElementById("btnAccendi").addEventListener("click", accendi);
    document.getElementById("btnSpegni").addEventListener("click", spegni);
  </script>
</body>
</html>`}
        />

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mt-6">
          <p className="font-bold text-green-800 mb-2">😌 Due cose che non fanno danni</p>
          <ul className="text-gray-700 space-y-1">
            <li>• <strong>add</strong> di una classe che c&apos;è già: non succede niente, la classe non viene scritta due volte.</li>
            <li>• <strong>remove</strong> di una classe che non c&apos;è: non succede niente, e nessun errore in console.</li>
          </ul>
        </div>
      </section>

      {/* toggle */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🔀 toggle: l&apos;Interruttore</h2>

        <p className="text-lg mb-4">
          La lampadina ha due pulsanti. Ma l&apos;interruttore di casa è uno solo: lo premi e la luce si accende, lo premi di nuovo e si spegne.
          {' '}<code className="bg-gray-100 px-2 py-1 rounded text-blue-600">toggle</code> fa proprio questo: se la classe <strong>manca la mette</strong>,
          se <strong>c&apos;è la toglie</strong>.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
          <p className="font-bold text-blue-800 mb-2">📄 document.body: tutta la pagina</p>
          <p className="text-gray-700">
            Per il tema scuro la classe va sul <code className="bg-blue-100 px-1 rounded">&lt;body&gt;</code>, così cambia tutta la pagina. Il body è
            uno solo e non serve dargli un id: JavaScript lo trova già pronto in <code className="bg-blue-100 px-1 rounded">document.body</code>.
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Il Tema Scuro"
          description="Premi il pulsante più volte: il tema passa da chiaro a scuro e ritorno"
          height="300px"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 30px;
      background-color: white;
      color: #212121;
      transition: background-color 0.5s, color 0.5s;
    }
    .scuro {
      background-color: #121212;
      color: #eeeeee;
    }
    button {
      padding: 10px 20px;
      font-size: 18px;
      border-radius: 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <button id="btnTema">🌙 Cambia tema</button>

  <h1>Il mio blog</h1>
  <p>Oggi ho imparato a cambiare il tema di tutta la pagina con una riga sola di JavaScript.</p>

  <script>
    function cambiaTema() {
      document.body.classList.toggle("scuro");
    }

    document.getElementById("btnTema").addEventListener("click", cambiaTema);
  </script>
</body>
</html>`}
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-5">
            <p className="font-bold text-emerald-800 mb-2">✨ Un&apos;animazione in regalo</p>
            <p className="text-gray-700 text-sm">
              Hai notato che il cambio è morbido? È la <code className="bg-emerald-100 px-1 rounded">transition</code> della Lezione 14 di CSS, scritta
              nella regola del body. Quando JavaScript cambia la classe, il CSS anima il passaggio da un colore all&apos;altro. Una riga di JavaScript,
              e l&apos;animazione la fa il CSS.
            </p>
          </div>
          <div className="bg-sky-50 border-2 border-sky-200 rounded-lg p-5">
            <p className="font-bold text-sky-800 mb-2">🏆 Perché .scuro vince su body?</p>
            <p className="text-gray-700 text-sm">
              Il body ha due regole che dicono colori diversi: quella del tag <code className="bg-sky-100 px-1 rounded">body</code> e quella della classe
              {' '}<code className="bg-sky-100 px-1 rounded">.scuro</code>. Una regola con una classe è più precisa di una con il solo nome del tag,
              quindi vince lei.
            </p>
          </div>
        </div>
      </section>

      {/* contains */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">❓ contains: C&apos;è o Non C&apos;è?</h2>

        <p className="text-lg mb-4">
          <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">contains</code> non cambia niente: fa una <strong>domanda</strong>. &quot;Hai la
          classe aperto?&quot;. La risposta è <code className="bg-gray-100 px-2 py-1 rounded">true</code> (vero) o
          {' '}<code className="bg-gray-100 px-2 py-1 rounded">false</code> (falso), proprio come un confronto: per questo puoi metterla dentro un
          {' '}<code className="bg-gray-100 px-2 py-1 rounded">if</code>.
        </p>

        <CodeExample
          title="Una domanda dentro un if"
          code={`if (menu.classList.contains("aperto")) {
  // il menu è aperto
} else {
  // il menu è chiuso
}`}
          language="javascript"
          showLineNumbers
        />

        <p className="text-gray-700 mt-4 mb-4">
          Serve quando, oltre alla classe, devi cambiare <strong>anche qualcos&apos;altro</strong>. Nel menu qui sotto toggle apre e chiude, e poi
          contains guarda com&apos;è finita per scrivere sul pulsante la parola giusta.
        </p>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Il Menu Hamburger"
          description="Premi ☰ Menu per aprire il menu, poi ✖ Chiudi per richiuderlo"
          height="330px"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background-color: #f5f5f5;
    }
    .barra {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      background-color: #00897b;
      color: white;
    }
    h1 {
      margin: 0;
      font-size: 22px;
    }
    button {
      padding: 8px 15px;
      font-size: 16px;
      border: 2px solid white;
      border-radius: 8px;
      background-color: transparent;
      color: white;
      cursor: pointer;
    }
    .menu {
      display: none;
      margin: 0;
      padding: 0 20px;
      list-style: none;
      background-color: #004d40;
    }
    .aperto {
      display: block;
    }
    li {
      padding: 12px 0;
      color: white;
      font-size: 18px;
    }
    .contenuto {
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="barra">
    <h1>🍕 Pizzeria Bella Napoli</h1>
    <button id="btnMenu">☰ Menu</button>
  </div>

  <ul class="menu" id="menu">
    <li>🏠 Home</li>
    <li>🍕 Le pizze</li>
    <li>📞 Contatti</li>
  </ul>

  <p class="contenuto">Benvenuti! Il forno a legna è acceso dalle 19.</p>

  <script>
    function apriChiudi() {
      let menu = document.getElementById("menu");
      menu.classList.toggle("aperto");

      if (menu.classList.contains("aperto")) {
        document.getElementById("btnMenu").innerHTML = "✖ Chiudi";
      } else {
        document.getElementById("btnMenu").innerHTML = "☰ Menu";
      }
    }

    document.getElementById("btnMenu").addEventListener("click", apriChiudi);
  </script>
</body>
</html>`}
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mt-6">
          <h3 className="font-bold text-yellow-800 mb-2">⚠️ Nel CSS conta l&apos;ordine</h3>
          <p className="text-gray-700">
            Il menu ha due classi che dicono cose opposte: <code className="bg-yellow-100 px-1 rounded">.menu</code> dice
            {' '}<code className="bg-yellow-100 px-1 rounded">display: none</code>, <code className="bg-yellow-100 px-1 rounded">.aperto</code> dice
            {' '}<code className="bg-yellow-100 px-1 rounded">display: block</code>. Sono due classi, ugualmente precise: vince quella
            {' '}<strong>scritta dopo</strong> nel CSS. Per questo la regola <code className="bg-yellow-100 px-1 rounded">.aperto</code> viene dopo
            {' '}<code className="bg-yellow-100 px-1 rounded">.menu</code>. Al contrario, il menu non si aprirebbe mai.
          </p>
        </div>
      </section>

      {/* Le schede */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🗂️ Tutto Insieme: le Schede</h2>

        <p className="text-lg mb-4">
          Le <strong>schede</strong> (in inglese <em>tab</em>) le vedi ovunque: nel browser, nelle impostazioni del telefono, sui siti di cucina. Tante
          linguette, un solo pannello visibile alla volta. Con le classi sono facili:
        </p>

        <ul className="text-gray-700 space-y-2 mb-6 ml-4">
          <li>1️⃣ Ogni pannello ha la classe <code className="bg-gray-100 px-2 py-1 rounded">.scheda</code>, che lo nasconde. Quello visibile ha in più la classe <code className="bg-gray-100 px-2 py-1 rounded">.visibile</code>.</li>
          <li>2️⃣ La linguetta del pannello aperto ha la classe <code className="bg-gray-100 px-2 py-1 rounded">.attiva</code>, che la colora.</li>
          <li>3️⃣ Al clic su una linguetta: <strong>prima si chiude tutto</strong>, poi si apre solo quella giusta.</li>
        </ul>

        <p className="text-gray-700 mb-4">
          Il punto 3 è uguale per tutte le linguette, quindi diventa una funzione con <strong>parametri</strong>, come nella Lezione 9:
          {' '}<code className="bg-gray-100 px-2 py-1 rounded">apri(idScheda, idPulsante)</code>. Le funzioni collegate ai pulsanti restano senza
          parametri e la chiamano con i valori giusti.
        </p>

        <h3 className="text-xl font-bold mb-3 mt-6">Vedi in Azione!</h3>
        <JavaScriptDemo
          title="Le Schede della Ricetta"
          description="Clicca le tre linguette: si vede un pannello alla volta, e la linguetta scelta resta evidenziata"
          height="300px"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #fff3e0;
    }
    button {
      padding: 10px 15px;
      font-size: 16px;
      border: none;
      border-radius: 8px 8px 0 0;
      background-color: #ffcc80;
      cursor: pointer;
    }
    .attiva {
      background-color: white;
      font-weight: bold;
    }
    .scheda {
      display: none;
      padding: 5px 20px;
      background-color: white;
      border-radius: 0 8px 8px 8px;
    }
    .visibile {
      display: block;
    }
  </style>
</head>
<body>
  <h2>🍝 Pasta al pomodoro</h2>

  <button id="btnIngredienti" class="attiva">Ingredienti</button>
  <button id="btnPreparazione">Preparazione</button>
  <button id="btnConsigli">Consigli</button>

  <div class="scheda visibile" id="ingredienti">
    <p>🍝 Pasta, 🍅 passata di pomodoro, 🫒 olio, 🌿 basilico, sale.</p>
  </div>
  <div class="scheda" id="preparazione">
    <p>Scalda il sugo con l'olio, cuoci la pasta, scolala e uniscila al sugo.</p>
  </div>
  <div class="scheda" id="consigli">
    <p>Il basilico va aggiunto alla fine, a fuoco spento: così resta profumato.</p>
  </div>

  <script>
    function chiudiTutto() {
      document.getElementById("ingredienti").classList.remove("visibile");
      document.getElementById("preparazione").classList.remove("visibile");
      document.getElementById("consigli").classList.remove("visibile");

      document.getElementById("btnIngredienti").classList.remove("attiva");
      document.getElementById("btnPreparazione").classList.remove("attiva");
      document.getElementById("btnConsigli").classList.remove("attiva");
    }

    function apri(idScheda, idPulsante) {
      chiudiTutto();
      document.getElementById(idScheda).classList.add("visibile");
      document.getElementById(idPulsante).classList.add("attiva");
    }

    function mostraIngredienti() {
      apri("ingredienti", "btnIngredienti");
    }

    function mostraPreparazione() {
      apri("preparazione", "btnPreparazione");
    }

    function mostraConsigli() {
      apri("consigli", "btnConsigli");
    }

    document.getElementById("btnIngredienti").addEventListener("click", mostraIngredienti);
    document.getElementById("btnPreparazione").addEventListener("click", mostraPreparazione);
    document.getElementById("btnConsigli").addEventListener("click", mostraConsigli);
  </script>
</body>
</html>`}
        />

        <p className="text-gray-700 mt-4">
          Nota l&apos;HTML di partenza: il primo pannello ha già <code className="bg-gray-100 px-2 py-1 rounded">class=&quot;scheda visibile&quot;</code> e
          la prima linguetta <code className="bg-gray-100 px-2 py-1 rounded">class=&quot;attiva&quot;</code>, così all&apos;apertura della pagina si vede
          subito qualcosa. Poi ci pensa JavaScript.
        </p>
      </section>

      {/* style o classList */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🤔 .style o classList?</h2>

        <p className="text-lg mb-4">
          <code className="bg-gray-100 px-2 py-1 rounded">.style</code> non va in pensione: le due strade servono a cose diverse.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-2 border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-gray-900">Usa</th>
                <th className="p-3 text-left text-gray-900">Quando</th>
                <th className="p-3 text-left text-gray-900">Esempi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3 font-mono">classList</td>
                <td className="p-3">l&apos;aspetto si può <strong>preparare prima</strong>: pochi stati fissi, acceso/spento, aperto/chiuso, giusto/sbagliato</td>
                <td className="p-3">tema scuro, menu, schede, risposte colorate</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-mono">.style</td>
                <td className="p-3">il valore lo <strong>calcola JavaScript</strong> mentre la pagina è aperta, e può essere qualsiasi numero</td>
                <td className="p-3">la barra del Volume (<code className="bg-gray-100 px-1 rounded">volume + &quot;%&quot;</code>), il Razzo (<code className="bg-gray-100 px-1 rounded">posizione + &quot;px&quot;</code>)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <p className="font-bold text-blue-800 mb-2">🧭 La domanda da farti</p>
          <p className="text-gray-700">
            &quot;Posso scrivere questo aspetto nel CSS <strong>prima</strong> che la pagina si apra?&quot; Se sì, classe. Se il valore dipende da un
            numero che cambia, <code className="bg-blue-100 px-1 rounded">.style</code>.
          </p>
        </div>
      </section>

      {/* Errori Tipici */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🐛 Errori Tipici</h2>

        <div className="space-y-6">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 1: Il punto davanti al nome della classe</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm whitespace-pre-wrap">{`menu.classList.add(".aperto");`}</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm whitespace-pre-wrap">{`menu.classList.add("aperto");`}</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Nessun errore in console, ma <strong>non succede niente</strong>: l&apos;elemento riceve una classe che si chiama proprio &quot;.aperto&quot;,
              punto compreso, e nel CSS non c&apos;è nessuna regola per lei. Il punto si scrive solo nel CSS.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 2: classList scritto male</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm whitespace-pre-wrap">{`menu.classlist.add("aperto");
menu.classList("aperto");`}</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm whitespace-pre-wrap">{`menu.classList.add("aperto");`}</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Con la <strong>l minuscola</strong> la console dice <code className="bg-white px-1 rounded">Cannot read properties of undefined (reading &apos;add&apos;)</code>:
              {' '}<code className="bg-white px-1 rounded">classlist</code> non esiste. Senza <code className="bg-white px-1 rounded">.add</code> dice
              {' '}<code className="bg-white px-1 rounded">classList is not a function</code>: classList è la lista, e devi dirle che cosa fare.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 3: Mettere una classe senza togliere l&apos;altra</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm whitespace-pre-wrap">{`// risposta sbagliata, poi giusta
esito.classList.add("sbagliata");
...
esito.classList.add("giusta");`}</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm whitespace-pre-wrap">{`esito.classList.remove("sbagliata");
esito.classList.add("giusta");`}</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Ora l&apos;elemento ha <strong>tutte e due</strong> le classi, e il colore lo decide quella scritta dopo nel CSS, non quella messa per
              ultima. Il risultato sembra a caso. Prima togli la classe vecchia, poi metti quella nuova: è il &quot;chiudi tutto&quot; delle schede.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 4: La classe scritta prima nel CSS</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm whitespace-pre-wrap">{`.aperto {
  display: block;
}
.menu {
  display: none;
}`}</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm whitespace-pre-wrap">{`.menu {
  display: none;
}
.aperto {
  display: block;
}`}</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              JavaScript funziona: se guardi l&apos;elemento, la classe aperto c&apos;è. Ma <code className="bg-white px-1 rounded">.menu</code>, scritta dopo,
              vince e il menu resta nascosto. Le classi che JavaScript accende e spegne vanno <strong>dopo</strong> le regole che devono battere.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-800 mb-3">❌ Errore 5: .style e classe sulla stessa proprietà</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-bold text-red-700 mb-1">Sbagliato</p>
                <code className="block bg-white p-3 rounded border border-red-200 text-sm whitespace-pre-wrap">{`// all'inizio
document.body.style.backgroundColor = "white";
...
// più tardi
document.body.classList.add("scuro");`}</code>
              </div>
              <div>
                <p className="text-sm font-bold text-green-700 mb-1">Giusto</p>
                <code className="block bg-white p-3 rounded border border-green-200 text-sm whitespace-pre-wrap">{`/* il colore di partenza nel CSS */
body {
  background-color: white;
}

// JavaScript usa solo la classe
document.body.classList.add("scuro");`}</code>
              </div>
            </div>
            <p className="text-gray-700 mt-3 text-sm">
              Quello che scrivi con <code className="bg-white px-1 rounded">.style</code> vince su <strong>tutte</strong> le classi: lo sfondo resta bianco
              anche con la classe scuro. Per la stessa proprietà scegli una strada sola, e se usi le classi lascia i colori al CSS.
            </p>
          </div>
        </div>
      </section>

      {/* Esercizio Guidato */}
      <Exercise
        title="🎯 Esercizio Guidato: La Pagina della Band"
        steps={[
          'Crea una cartella "band" in VS Code',
          'Dentro la cartella, crea un file "index.html"',
          {
            text: 'Scrivi la struttura HTML: una barra con il nome della band e il pulsante del menu, il menu con tre voci e una card con il pulsante del tema',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>La Band</title>
</head>
<body>

  <div class="barra">
    <h1>🎸 I Fulmini</h1>
    <button id="btnMenu">☰ Menu</button>
  </div>

  <ul class="menu" id="menu">
    <li>🎵 Canzoni</li>
    <li>📅 Concerti</li>
    <li>📸 Foto</li>
  </ul>

  <div class="card">
    <h2>Il nuovo album è uscito!</h2>
    <p>Dieci canzoni registrate in garage: ascoltale tutte.</p>
    <button id="btnTema">🌙 Tema scuro</button>
  </div>

</body>
</html>`,
            language: 'html',
          },
          {
            text: 'Aggiungi il CSS: qui prepari i vestiti. Il menu parte nascosto (.menu) e la classe .aperto lo mostra; la classe .scuro cambia i colori della pagina. Nota che .aperto viene dopo .menu, e la transition nel body',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>La Band</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background-color: #fafafa;
      color: #212121;
      transition: background-color 0.5s, color 0.5s;
    }

    .barra {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      background-color: #7e57c2;
      color: white;
    }

    h1 {
      margin: 0;
      font-size: 24px;
    }

    button {
      padding: 8px 15px;
      font-size: 16px;
      border: 2px solid #7e57c2;
      border-radius: 8px;
      background-color: white;
      color: #7e57c2;
      cursor: pointer;
    }

    .menu {
      display: none;
      margin: 0;
      padding: 0 20px;
      list-style: none;
      background-color: #5e35b1;
    }

    .aperto {
      display: block;
    }

    li {
      padding: 12px 0;
      color: white;
      font-size: 18px;
    }

    .card {
      max-width: 400px;
      margin: 30px auto;
      padding: 25px;
      border: 3px solid #7e57c2;
      border-radius: 15px;
      text-align: center;
    }

    .scuro {
      background-color: #121212;
      color: #eeeeee;
    }
  </style>
</head>
<body>

  <div class="barra">
    <h1>🎸 I Fulmini</h1>
    <button id="btnMenu">☰ Menu</button>
  </div>

  <ul class="menu" id="menu">
    <li>🎵 Canzoni</li>
    <li>📅 Concerti</li>
    <li>📸 Foto</li>
  </ul>

  <div class="card">
    <h2>Il nuovo album è uscito!</h2>
    <p>Dieci canzoni registrate in garage: ascoltale tutte.</p>
    <button id="btnTema">🌙 Tema scuro</button>
  </div>

</body>
</html>`,
            language: 'html',
          },
          {
            text: 'Il tema scuro: cambiaTema accende e spegne la classe scuro sul body con toggle, poi con contains scrive sul pulsante il tema che si può scegliere. Prova: il passaggio è animato',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>La Band</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background-color: #fafafa;
      color: #212121;
      transition: background-color 0.5s, color 0.5s;
    }

    .barra {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      background-color: #7e57c2;
      color: white;
    }

    h1 {
      margin: 0;
      font-size: 24px;
    }

    button {
      padding: 8px 15px;
      font-size: 16px;
      border: 2px solid #7e57c2;
      border-radius: 8px;
      background-color: white;
      color: #7e57c2;
      cursor: pointer;
    }

    .menu {
      display: none;
      margin: 0;
      padding: 0 20px;
      list-style: none;
      background-color: #5e35b1;
    }

    .aperto {
      display: block;
    }

    li {
      padding: 12px 0;
      color: white;
      font-size: 18px;
    }

    .card {
      max-width: 400px;
      margin: 30px auto;
      padding: 25px;
      border: 3px solid #7e57c2;
      border-radius: 15px;
      text-align: center;
    }

    .scuro {
      background-color: #121212;
      color: #eeeeee;
    }
  </style>
</head>
<body>

  <div class="barra">
    <h1>🎸 I Fulmini</h1>
    <button id="btnMenu">☰ Menu</button>
  </div>

  <ul class="menu" id="menu">
    <li>🎵 Canzoni</li>
    <li>📅 Concerti</li>
    <li>📸 Foto</li>
  </ul>

  <div class="card">
    <h2>Il nuovo album è uscito!</h2>
    <p>Dieci canzoni registrate in garage: ascoltale tutte.</p>
    <button id="btnTema">🌙 Tema scuro</button>
  </div>

  <script>
    function cambiaTema() {
      document.body.classList.toggle("scuro");

      if (document.body.classList.contains("scuro")) {
        document.getElementById("btnTema").innerHTML = "☀️ Tema chiaro";
      } else {
        document.getElementById("btnTema").innerHTML = "🌙 Tema scuro";
      }
    }

    document.getElementById("btnTema").addEventListener("click", cambiaTema);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [91, 92, 93, 95, 96, 97, 98, 99, 100, 102, 103],
          },
          {
            text: 'Il menu: apriChiudi fa lo stesso lavoro con la classe aperto sul menu, e cambia la scritta del pulsante fra ☰ Menu e ✖ Chiudi',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>La Band</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background-color: #fafafa;
      color: #212121;
      transition: background-color 0.5s, color 0.5s;
    }

    .barra {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      background-color: #7e57c2;
      color: white;
    }

    h1 {
      margin: 0;
      font-size: 24px;
    }

    button {
      padding: 8px 15px;
      font-size: 16px;
      border: 2px solid #7e57c2;
      border-radius: 8px;
      background-color: white;
      color: #7e57c2;
      cursor: pointer;
    }

    .menu {
      display: none;
      margin: 0;
      padding: 0 20px;
      list-style: none;
      background-color: #5e35b1;
    }

    .aperto {
      display: block;
    }

    li {
      padding: 12px 0;
      color: white;
      font-size: 18px;
    }

    .card {
      max-width: 400px;
      margin: 30px auto;
      padding: 25px;
      border: 3px solid #7e57c2;
      border-radius: 15px;
      text-align: center;
    }

    .scuro {
      background-color: #121212;
      color: #eeeeee;
    }
  </style>
</head>
<body>

  <div class="barra">
    <h1>🎸 I Fulmini</h1>
    <button id="btnMenu">☰ Menu</button>
  </div>

  <ul class="menu" id="menu">
    <li>🎵 Canzoni</li>
    <li>📅 Concerti</li>
    <li>📸 Foto</li>
  </ul>

  <div class="card">
    <h2>Il nuovo album è uscito!</h2>
    <p>Dieci canzoni registrate in garage: ascoltale tutte.</p>
    <button id="btnTema">🌙 Tema scuro</button>
  </div>

  <script>
    function cambiaTema() {
      document.body.classList.toggle("scuro");

      if (document.body.classList.contains("scuro")) {
        document.getElementById("btnTema").innerHTML = "☀️ Tema chiaro";
      } else {
        document.getElementById("btnTema").innerHTML = "🌙 Tema scuro";
      }
    }

    function apriChiudi() {
      let menu = document.getElementById("menu");
      menu.classList.toggle("aperto");

      if (menu.classList.contains("aperto")) {
        document.getElementById("btnMenu").innerHTML = "✖ Chiudi";
      } else {
        document.getElementById("btnMenu").innerHTML = "☰ Menu";
      }
    }

    document.getElementById("btnTema").addEventListener("click", cambiaTema);
    document.getElementById("btnMenu").addEventListener("click", apriChiudi);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [102, 103, 104, 106, 107, 108, 109, 110, 111, 114],
          },
          {
            text: 'Il tasto Esc, come nella Lezione 10: chiudiConEsc riceve event e, se il tasto è Escape, toglie la classe aperto con remove e rimette la scritta ☰ Menu. Qui serve remove e non toggle: Esc deve solo chiudere, mai aprire',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>La Band</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      background-color: #fafafa;
      color: #212121;
      transition: background-color 0.5s, color 0.5s;
    }

    .barra {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      background-color: #7e57c2;
      color: white;
    }

    h1 {
      margin: 0;
      font-size: 24px;
    }

    button {
      padding: 8px 15px;
      font-size: 16px;
      border: 2px solid #7e57c2;
      border-radius: 8px;
      background-color: white;
      color: #7e57c2;
      cursor: pointer;
    }

    .menu {
      display: none;
      margin: 0;
      padding: 0 20px;
      list-style: none;
      background-color: #5e35b1;
    }

    .aperto {
      display: block;
    }

    li {
      padding: 12px 0;
      color: white;
      font-size: 18px;
    }

    .card {
      max-width: 400px;
      margin: 30px auto;
      padding: 25px;
      border: 3px solid #7e57c2;
      border-radius: 15px;
      text-align: center;
    }

    .scuro {
      background-color: #121212;
      color: #eeeeee;
    }
  </style>
</head>
<body>

  <div class="barra">
    <h1>🎸 I Fulmini</h1>
    <button id="btnMenu">☰ Menu</button>
  </div>

  <ul class="menu" id="menu">
    <li>🎵 Canzoni</li>
    <li>📅 Concerti</li>
    <li>📸 Foto</li>
  </ul>

  <div class="card">
    <h2>Il nuovo album è uscito!</h2>
    <p>Dieci canzoni registrate in garage: ascoltale tutte.</p>
    <button id="btnTema">🌙 Tema scuro</button>
  </div>

  <script>
    function cambiaTema() {
      document.body.classList.toggle("scuro");

      if (document.body.classList.contains("scuro")) {
        document.getElementById("btnTema").innerHTML = "☀️ Tema chiaro";
      } else {
        document.getElementById("btnTema").innerHTML = "🌙 Tema scuro";
      }
    }

    function apriChiudi() {
      let menu = document.getElementById("menu");
      menu.classList.toggle("aperto");

      if (menu.classList.contains("aperto")) {
        document.getElementById("btnMenu").innerHTML = "✖ Chiudi";
      } else {
        document.getElementById("btnMenu").innerHTML = "☰ Menu";
      }
    }

    function chiudiConEsc(event) {
      if (event.key === "Escape") {
        document.getElementById("menu").classList.remove("aperto");
        document.getElementById("btnMenu").innerHTML = "☰ Menu";
      }
    }

    document.getElementById("btnTema").addEventListener("click", cambiaTema);
    document.getElementById("btnMenu").addEventListener("click", apriChiudi);
    document.addEventListener("keydown", chiudiConEsc);
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [113, 114, 115, 116, 117, 118, 122],
          },
          'Apri la pagina e prova tutto: il tema scuro avanti e indietro, il menu con il pulsante e con Esc. Poi guarda il JavaScript: non c\'è nemmeno un .style 🎉'
        ]}
        experiments={[
          'Nel CSS cambia i colori della classe .scuro (per esempio un blu notte #0d1b2a): quante righe di JavaScript devi toccare?',
          'In cambiaTema sostituisci toggle con add: che cosa succede quando premi il pulsante la seconda volta? Rimetti toggle',
          'Sposta la regola .aperto prima di .menu nel CSS e prova ad aprire il menu. Poi rimettila al suo posto',
          'Aggiungi alla card un pulsante btnSegui "Segui la band": con toggle mette e toglie una classe .seguito (sfondo viola, testo bianco) e con contains scrive "✓ Segui già" o "Segui la band"',
          'Aggiungi una classe .grande con font-size: 20px e un pulsante che la mette e la toglie alla card, con toggle',
        ]}
      />

      {/* Checklist Finale */}
      <section className="mb-12 mt-12">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✅</span> Hai Completato la Lezione!
          </h2>
          <p className="text-gray-700 mb-4">
            Ora il CSS prepara i vestiti e JavaScript sceglie quale indossare. Il tuo codice è più corto e più ordinato! 👕
          </p>
          <div className="bg-white rounded p-4 border border-green-200">
            <p className="font-bold text-gray-900 mb-2">Cosa hai imparato:</p>
            <ul className="space-y-1 text-gray-700">
              <li>✅ Preparare un aspetto nel CSS con una classe e metterlo con <strong>classList.add</strong></li>
              <li>✅ Toglierlo con <strong>classList.remove</strong>, senza toccare le altre classi</li>
              <li>✅ Fare un interruttore con un solo pulsante, con <strong>classList.toggle</strong></li>
              <li>✅ Chiedere se una classe c&apos;è con <strong>classList.contains</strong>, dentro un if</li>
              <li>✅ Cambiare tutta la pagina con <strong>document.body</strong></li>
              <li>✅ Animare i cambi di classe con la <strong>transition</strong> del CSS</li>
              <li>✅ Costruire un tema scuro, un menu hamburger e delle schede</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sfida Opzionale */}
      <Challenge
        title="Il Quiz a Colori"
        description="Una domanda con tre risposte: la risposta cliccata si colora di verde se è giusta e di rosso se è sbagliata. Tutti i colori stanno nel CSS: JavaScript non usa mai .style."
        requirements={[
          'Una domanda, tre pulsanti di risposta (id btnA, btnB, btnC) e un paragrafo con id esito',
          'Nel CSS due classi: .giusta (sfondo verde) e .sbagliata (sfondo rosso)',
          'Clic sulla risposta giusta: il pulsante prende la classe giusta e l\'esito dice "Esatto! 🎉". Clic su una sbagliata: classe sbagliata e "Riprova!"',
          'Un pulsante btnRicomincia con una funzione che toglie giusta e sbagliata da tutti e tre i pulsanti e svuota l\'esito',
          'Bonus: un pulsante btnAiuto che mostra e nasconde un suggerimento con toggle, e scrive "Nascondi l\'aiuto" o "Mostra l\'aiuto" con contains'
        ]}
        hint="Ogni pulsante di risposta ha la sua funzione senza parametri. Il lavoro comune (mettere la classe e scrivere l'esito) può stare in una funzione con parametri, come apri(idScheda, idPulsante) delle schede: per esempio rispondi(idPulsante, classe, messaggio). Per il bonus, il suggerimento parte con una classe .nascosto che ha display: none."
      />

      {/* Riepilogo Finale */}
      <section className="mt-12 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Ottimo Lavoro!</h2>
        <p className="text-xl mb-4">
          Il CSS prepara, JavaScript sceglie: temi, menu e schede con poche righe! 👕
        </p>
        <div className="bg-black/20 p-4 rounded border-2 border-white/30">
          <p className="font-bold mb-2 text-yellow-200">🚀 Comandi JavaScript Totali Imparati: 23</p>
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
            <li>input / change / keydown / submit - Altri eventi da ascoltare con addEventListener (Lezione 10)</li>
            <li>event.key / event.preventDefault() - Il tasto premuto e lo stop al ricaricamento del form (Lezione 10)</li>
            <li>classList.add / remove / toggle / contains - Mette, toglie, alterna e cerca le classi CSS (Lezione 11) ✨ NUOVO</li>
            <li>document.body - Il body di tutta la pagina, senza bisogno di id (Lezione 11) ✨ NUOVO</li>
          </ul>
          <p className="font-bold mt-4 mb-2 text-yellow-200">💡 Concetti Chiave:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Il CSS decide come appare, JavaScript decide quando</li>
            <li>In classList il nome della classe va senza punto</li>
            <li>toggle è un interruttore; contains è una domanda che risponde true o false</li>
            <li>Prima togli la classe vecchia, poi metti la nuova</li>
            <li>Classi per gli aspetti fissi, .style per i valori calcolati</li>
          </ul>
        </div>
        <p className="text-lg font-semibold mt-4">
          Prossima lezione: <strong>Array, le Liste</strong>! Tanti valori in una variabile sola 📝
        </p>
      </section>

      {/* Allenati nell'Officina */}
      <AllenatiOfficina lezioneSlug="lezione-11-classi-css" />

      {/* Prossimi Passi */}
      <section className="mb-12 mt-12">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Prossimi Passi
          </h2>
          <p className="text-gray-700 mb-4">
            Nelle schede, <code className="bg-blue-100 px-1 rounded">chiudiTutto</code> ripete la stessa riga per ogni pannello. Con tre pannelli va
            bene, ma con venti? Nella prossima lezione imparerai a mettere <strong>tanti valori in una variabile sola</strong>: gli
            {' '}<strong>array</strong>.
          </p>
          <p className="text-gray-700">
            La lista della spesa, la classifica di un gioco, i nomi della classe: tutto in una lista ordinata. 📝
          </p>
        </div>
      </section>

    </LessonLayout>
  );
}
