import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import LessonPreview from '@/components/didattica/LessonPreview';

export default function Lezione1CSS() {
  const lezioni = getLezioniByModuloSlug('modulo-2-css');

  return (
    <LessonLayout
      moduloSlug="modulo-2-css"
      moduloTitolo="Modulo 2: CSS"
      lezioni={lezioni}
      lezioneSlug="lezione-1-primo-stile"
      lezioneTitolo="Il Primo Stile"
    >
      <LessonHeader
        numero={1}
        titolo="Il Primo Stile"
        durata="1.5 ore"
        difficolta="facile"
        obiettivi={[
          'Capire cos\'è il CSS e perché serve',
          'Conoscere i 3 modi per aggiungere CSS',
          'Scrivere la prima regola CSS',
          'Collegare un file CSS esterno',
          'Usare color e background-color',
          'Ispezionare CSS con Browser DevTools'
        ]}
      />

      {/* Intro */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Benvenuto nel Mondo del CSS!</h2>
        <p className="text-lg mb-4">
          Hai imparato l&apos;HTML e ora sai creare la <strong>struttura</strong> di una pagina web.
          Ma probabilmente hai notato che le pagine HTML pure sono... un po&apos; tristi.
        </p>
        <p className="text-lg mb-4">
          È il momento di dare <strong>vita e colore</strong> alle tue pagine con il <strong>CSS</strong>!
        </p>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">🎨 CSS = Cascading Style Sheets</h3>
          <p className="mb-2">Il CSS è il linguaggio che descrive <strong>come</strong> gli elementi HTML devono apparire:</p>
          <ul className="space-y-1 ml-6">
            <li>✓ Colori</li>
            <li>✓ Font e dimensioni testo</li>
            <li>✓ Spaziatura e layout</li>
            <li>✓ Animazioni ed effetti</li>
          </ul>
        </div>
      </section>

      {/* Prima/Dopo Visivo */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Il Potere del CSS: Prima e Dopo</h2>
        <p className="text-lg mb-6">
          Guarda la differenza! La stessa identica pagina HTML, con e senza CSS:
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold mb-3 text-gray-600 flex items-center gap-2">
              <span className="text-2xl">😢</span> Senza CSS
            </h3>
            <LessonPreview
              title="HTML Puro"
              html={`<h1>Il Mio Blog</h1>
<p>Benvenuto nel mio blog personale!</p>
<p>Qui scrivo di tecnologia e programmazione.</p>`}
            />
          </div>

          <div>
            <h3 className="font-bold mb-3 text-green-600 flex items-center gap-2">
              <span className="text-2xl">😍</span> Con CSS
            </h3>
            <LessonPreview
              title="HTML + CSS"
              html={`<h1 style="color: #6366f1; text-align: center; font-size: 32px; margin-bottom: 10px;">Il Mio Blog</h1>
<p style="color: #4b5563; font-size: 18px; line-height: 1.6; background-color: #f3f4f6; padding: 15px; border-left: 4px solid #6366f1;">Benvenuto nel mio blog personale!</p>
<p style="color: #4b5563; font-size: 18px; line-height: 1.6;">Qui scrivo di tecnologia e programmazione.</p>`}
            />
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6">
          <h3 className="font-bold text-blue-700 mb-2">✨ Differenze Visibili</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Il titolo è <strong>colorato, centrato e più grande</strong></li>
            <li>Il testo ha un <strong>colore più leggibile</strong></li>
            <li>C&apos;è uno <strong>sfondo grigio</strong> e <strong>spaziatura</strong> nel primo paragrafo</li>
            <li>Una <strong>barra colorata</strong> a sinistra attira l&apos;attenzione</li>
          </ul>
        </div>
      </section>

      {/* I 3 Metodi */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">I 3 Modi per Aggiungere CSS</h2>
        <p className="text-lg mb-6">
          Ci sono 3 modi per applicare CSS a una pagina HTML. Vediamoli tutti!
        </p>

        {/* Metodo 1: Inline */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">1. CSS Inline (dentro l&apos;attributo style)</h3>
          <p className="mb-3">
            Aggiungi l&apos;attributo <code className="bg-gray-200 px-2 py-1 rounded">style</code> direttamente nell&apos;elemento HTML.
          </p>

          <CodeExample
            language="html"
            title="CSS Inline"
            code={`<h1 style="color: blue;">Titolo Blu</h1>
<p style="color: red; font-size: 20px;">Paragrafo rosso e grande</p>`}
          />

          <div className="mt-4">
            <LessonPreview
              title="Risultato"
              html={`<h1 style="color: blue;">Titolo Blu</h1>
<p style="color: red; font-size: 20px;">Paragrafo rosso e grande</p>`}
            />
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-4">
            <p className="font-semibold text-orange-700">⚠️ Quando usarlo:</p>
            <p className="text-sm mt-1">Quasi mai! È utile solo per test rapidi. Non usare in progetti reali.</p>
          </div>
        </div>

        {/* Metodo 2: Internal */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">2. CSS Internal (tag &lt;style&gt; nell&apos;HTML)</h3>
          <p className="mb-3">
            Aggiungi un tag <code className="bg-gray-200 px-2 py-1 rounded">&lt;style&gt;</code> dentro il <code className="bg-gray-200 px-2 py-1 rounded">&lt;head&gt;</code>.
          </p>

          <CodeExample
            language="html"
            title="CSS Internal"
            code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Mia Pagina</title>
  <style>
    h1 {
      color: green;
    }
    p {
      color: purple;
      font-size: 18px;
    }
  </style>
</head>
<body>
  <h1>Titolo Verde</h1>
  <p>Paragrafo viola</p>
</body>
</html>`}
          />

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
            <p className="font-semibold text-yellow-700">🤔 Quando usarlo:</p>
            <p className="text-sm mt-1">Pagine singole semplici. Ma per progetti veri usiamo il metodo 3!</p>
          </div>
        </div>

        {/* Metodo 3: External */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">3. CSS External (file .css separato) ✅ CONSIGLIATO</h3>
          <p className="mb-3">
            Crea un file separato <code className="bg-gray-200 px-2 py-1 rounded">style.css</code> e collegalo con <code className="bg-gray-200 px-2 py-1 rounded">&lt;link&gt;</code>.
          </p>

          <CodeExample
            language="html"
            title="index.html"
            code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Mia Pagina</title>
  <!-- Collega il file CSS esterno -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Titolo Stilizzato</h1>
  <p>Paragrafo con stile.</p>
</body>
</html>`}
          />

          <CodeExample
            language="css"
            title="style.css"
            code={`/* File CSS separato */
h1 {
  color: navy;
}

p {
  color: gray;
  font-size: 16px;
}`}
          />

          <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
            <p className="font-semibold text-green-700">✅ METODO MIGLIORE!</p>
            <p className="text-sm mt-2"><strong>Vantaggi:</strong></p>
            <ul className="text-sm list-disc list-inside mt-1 space-y-1">
              <li>Separa contenuto (HTML) da presentazione (CSS)</li>
              <li>Un solo file CSS per TUTTO il sito (più pagine HTML)</li>
              <li>Facile da modificare e mantenere</li>
              <li>Il browser può memorizzare il CSS (più veloce)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sintassi CSS */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Sintassi CSS: Come Si Scrive una Regola</h2>
        <p className="text-lg mb-4">
          Ogni regola CSS ha questa struttura:
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mb-6">
          <pre className="text-lg font-mono">
            <span className="text-blue-600 font-bold">selettore</span> {'{'}
            {'\n  '}<span className="text-green-600 font-bold">proprietà</span>: <span className="text-purple-600 font-bold">valore</span>;
            {'\n'}{'}'}</pre>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-bold text-blue-700 mb-1">Selettore</h4>
            <p className="text-sm">Quale elemento HTML stilizzare</p>
            <code className="text-sm bg-white px-2 py-1 rounded block mt-2">h1, p, div...</code>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-bold text-green-700 mb-1">Proprietà</h4>
            <p className="text-sm">Cosa vuoi cambiare</p>
            <code className="text-sm bg-white px-2 py-1 rounded block mt-2">color, font-size...</code>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-bold text-purple-700 mb-1">Valore</h4>
            <p className="text-sm">Come vuoi che sia</p>
            <code className="text-sm bg-white px-2 py-1 rounded block mt-2">red, 20px...</code>
          </div>
        </div>

        <CodeExample
          language="css"
          title="Esempio Completo"
          code={`/* Selettore: tutti i <p> */
p {
  color: blue;        /* Proprietà: color, Valore: blue */
  background-color: yellow; /* Proprietà: background-color, Valore: yellow */
}`}
        />

        <div className="mt-4">
          <LessonPreview
            title="Risultato"
            html={`<p style="color: blue; background-color: yellow; padding: 10px;">Questo paragrafo ha testo blu su sfondo giallo!</p>`}
          />
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
          <h3 className="font-bold text-yellow-700 mb-2">📌 Regole da Ricordare</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Ogni proprietà termina con <code className="bg-gray-200 px-1 rounded">;</code> (punto e virgola)</li>
            <li>Le graffe <code className="bg-gray-200 px-1 rounded">{'{ }'}</code> racchiudono tutte le proprietà</li>
            <li>Puoi scrivere più proprietà per lo stesso selettore</li>
            <li>I commenti CSS usano <code className="bg-gray-200 px-1 rounded">/* testo */</code></li>
          </ul>
        </div>
      </section>

      {/* Le Prime Due Proprietà */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Le Tue Prime Due Proprietà CSS</h2>
        <p className="text-lg mb-6">
          Iniziamo con le due proprietà più usate: <code className="bg-gray-200 px-2 py-1 rounded">color</code> e <code className="bg-gray-200 px-2 py-1 rounded">background-color</code>
        </p>

        {/* color */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">1. color - Colore del Testo</h3>
          <p className="mb-3">Cambia il colore del testo.</p>

          <CodeExample
            language="css"
            code={`h1 {
  color: red;
}

p {
  color: blue;
}`}
          />

          <div className="mt-4">
            <LessonPreview
              title="Risultato"
              html={`<h1 style="color: red;">Questo titolo è rosso</h1>
<p style="color: blue;">Questo paragrafo è blu</p>`}
            />
          </div>

          <div className="mt-4 bg-blue-50 p-4 rounded">
            <p className="font-semibold text-blue-700 mb-2">Valori possibili (per ora):</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <code className="bg-white px-2 py-1 rounded">red</code>
              <code className="bg-white px-2 py-1 rounded">blue</code>
              <code className="bg-white px-2 py-1 rounded">green</code>
              <code className="bg-white px-2 py-1 rounded">yellow</code>
              <code className="bg-white px-2 py-1 rounded">purple</code>
              <code className="bg-white px-2 py-1 rounded">orange</code>
              <code className="bg-white px-2 py-1 rounded">pink</code>
              <code className="bg-white px-2 py-1 rounded">black</code>
            </div>
            <p className="text-xs mt-2">Nella prossima lezione vedremo molti altri modi di definire colori!</p>
          </div>
        </div>

        {/* background-color */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">2. background-color - Colore di Sfondo</h3>
          <p className="mb-3">Cambia il colore dello sfondo dell&apos;elemento.</p>

          <CodeExample
            language="css"
            code={`h1 {
  background-color: yellow;
}

p {
  background-color: lightblue;
}`}
          />

          <div className="mt-4">
            <LessonPreview
              title="Risultato"
              html={`<h1 style="background-color: yellow; padding: 10px;">Titolo con sfondo giallo</h1>
<p style="background-color: lightblue; padding: 10px; margin-top: 10px;">Paragrafo con sfondo azzurro</p>`}
            />
          </div>
        </div>

        {/* Combinazione */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Combiniamo le Due Proprietà!</h3>
          <p className="mb-3">Possiamo usare entrambe insieme:</p>

          <CodeExample
            language="css"
            code={`h1 {
  color: white;
  background-color: navy;
}

p {
  color: darkgreen;
  background-color: lightgreen;
}`}
          />

          <div className="mt-4">
            <LessonPreview
              title="Risultato"
              html={`<h1 style="color: white; background-color: navy; padding: 15px; margin-bottom: 10px;">Testo bianco su sfondo blu scuro</h1>
<p style="color: darkgreen; background-color: lightgreen; padding: 15px;">Testo verde scuro su sfondo verde chiaro</p>`}
            />
          </div>
        </div>
      </section>

      {/* Browser DevTools */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">🔧 Browser DevTools - Il Tuo Laboratorio CSS</h2>
        <p className="text-lg mb-4">
          I DevTools sono il <strong>superpotere</strong> di ogni sviluppatore web!
          Ti permettono di <strong>vedere e modificare CSS in tempo reale</strong>.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="font-bold text-blue-700 mb-3">Come Aprire i DevTools</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded">
              <p className="font-semibold mb-1">🪟 Windows/Linux</p>
              <code className="text-sm">F12</code> o <code className="text-sm">Ctrl + Shift + I</code>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="font-semibold mb-1">🍎 Mac</p>
              <code className="text-sm">Cmd + Option + I</code>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="font-semibold mb-1">🖱️ Click destro</p>
              <p className="text-sm">Clicca su un elemento → <strong>Inspect</strong></p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">💡 Cosa Puoi Fare con i DevTools</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-2xl">🔍</span>
              <div>
                <strong>Ispezionare elementi:</strong> Vedere quale CSS è applicato a un elemento
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-2xl">✏️</span>
              <div>
                <strong>Modificare CSS live:</strong> Cambiare colori, dimensioni, spaziature e vedere subito il risultato
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-2xl">🧪</span>
              <div>
                <strong>Sperimentare:</strong> Provare idee prima di scriverle nel codice
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-2xl">🐛</span>
              <div>
                <strong>Debuggare:</strong> Capire perché il tuo CSS non funziona come previsto
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6">
          <h3 className="font-bold text-yellow-700 mb-2">⚠️ Importante!</h3>
          <p>Le modifiche nei DevTools sono <strong>temporanee</strong>! Quando ricarichi la pagina, spariscono.</p>
          <p className="mt-2 text-sm">Usa i DevTools per <strong>sperimentare</strong>, poi copia il codice che funziona nel tuo file CSS!</p>
        </div>
      </section>

      {/* Exercise */}
      <Exercise
        title="🎯 Esercizio Guidato: Il Tuo Primo File CSS"
        steps={[
          'Apri VS Code e crea una nuova cartella chiamata "primo-css"',
          'Dentro la cartella, crea due file: "index.html" e "style.css"',
          {
            text: 'Apri index.html e scrivi la struttura HTML base con titoli e paragrafi',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Mio Primo CSS</title>
</head>
<body>
  <h1>Benvenuto nel Mondo CSS!</h1>
  <h2>Cosa Impareremo</h2>
  <p>CSS permette di dare stile alle pagine web.</p>
  <p>Possiamo cambiare colori, dimensioni e layout.</p>
  <p>Iniziamo con i colori del testo e dello sfondo!</p>
</body>
</html>`,
            language: 'html',
          },
          {
            text: 'Nel <head>, aggiungi il tag <link> per collegare il file CSS',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Mio Primo CSS</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Benvenuto nel Mondo CSS!</h1>
  <h2>Cosa Impareremo</h2>
  <p>CSS permette di dare stile alle pagine web.</p>
  <p>Possiamo cambiare colori, dimensioni e layout.</p>
  <p>Iniziamo con i colori del testo e dello sfondo!</p>
</body>
</html>`,
            language: 'html',
            highlightLines: [6],
          },
          {
            text: 'Apri style.css e scrivi la tua prima regola CSS per rendere il titolo blu',
            code: `/* Il mio primo file CSS! */
h1 {
  color: blue;
}`,
            language: 'css',
          },
          'Salva entrambi i file (Ctrl+S o Cmd+S)',
          'Fai doppio click su "index.html" per aprirlo nel browser 🎉',
          'Verifica che il titolo <h1> sia diventato BLU!',
          'Premi F12 per aprire i DevTools, clicca sulla freccia in alto a sinistra e poi clicca sul titolo blu per ispezionarlo',
          {
            text: 'Torna in style.css e aggiungi uno stile per h2 (testo verde su sfondo giallo)',
            code: `/* Il mio primo file CSS! */
h1 {
  color: blue;
}

h2 {
  color: green;
  background-color: yellow;
}`,
            language: 'css',
            highlightLines: [6, 7, 8, 9],
          },
          'Salva style.css (Ctrl+S) e ricarica il browser (F5)',
          'Verifica che il sottotitolo <h2> sia VERDE su sfondo GIALLO!',
          {
            text: 'Aggiungi uno stile per tutti i paragrafi (testo grigio)',
            code: `/* Il mio primo file CSS! */
h1 {
  color: blue;
}

h2 {
  color: green;
  background-color: yellow;
}

p {
  color: gray;
}`,
            language: 'css',
            highlightLines: [11, 12, 13],
          },
          'Salva style.css (Ctrl+S) e ricarica il browser (F5)',
          'Verifica che TUTTI e TRE i paragrafi siano grigi! ✨',
        ]}
        experiments={[
          'Cambia il colore di h1 da "blue" a "red", salva e ricarica (F5) - cosa succede?',
          'Aggiungi "background-color: lightblue;" dentro la regola h1, salva e ricarica',
          'Cambia il colore dei paragrafi da "gray" a "purple", salva e ricarica',
          'Nei DevTools (F12), clicca su un paragrafo e prova a cambiare il colore live - le modifiche spariscono ricaricando!',
          'Aggiungi una nuova regola "h2 { color: red; }" DOPO quella esistente - quale colore vince? (scoprirai il "cascade"!)',
        ]}
      />

      {/* Challenge */}
      <Challenge
        title="Pagina Colorata Completa"
        description="Crea una pagina HTML+CSS con almeno 3 sezioni diverse, ognuna con colori unici!"
        requirements={[
          'File index.html con struttura completa (<!DOCTYPE>, head, body)',
          'File style.css collegato con <link>',
          'Header con h1 - testo bianco su sfondo blu scuro (navy)',
          'Sezione "Chi Sono" con h2 verde e paragrafo con sfondo verde chiaro',
          'Sezione "Progetti" con h2 rosso e paragrafo con sfondo rosa chiaro',
          'Footer con p - testo grigio su sfondo grigio chiaro',
          'Usa solo color e background-color (non altre proprietà!)',
          'Almeno 6-7 regole CSS diverse',
          'Verifica con DevTools che tutti gli stili siano applicati',
          'Sperimenta con almeno 10 colori diversi'
        ]}
        hint="Inizia scrivendo prima tutto l'HTML. Poi apri il file CSS e scrivi una regola alla volta, salvando e controllando nel browser dopo ogni regola. Usa i DevTools per sperimentare con i colori prima di scriverli nel CSS!"
      />

      {/* Checklist */}
      <Checklist
        items={[
          'So cos\'è il CSS e a cosa serve',
          'Conosco i 3 metodi per aggiungere CSS (inline, internal, external)',
          'So che il metodo external è il migliore per progetti reali',
          'So creare un file .css e collegarlo con <link>',
          'Capisco la sintassi: selettore { proprietà: valore; }',
          'So usare la proprietà "color" per cambiare il colore del testo',
          'So usare "background-color" per cambiare lo sfondo',
          'So aprire i Browser DevTools (F12)',
          'So ispezionare un elemento e vedere il suo CSS',
          'So modificare CSS nei DevTools per sperimentare',
          'Ho completato l\'esercizio: file HTML + CSS collegati',
          'Ho completato la sfida: pagina con sezioni colorate'
        ]}
      />

      {/* Conclusione */}
      <section className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Prima Lezione Completata!</h2>
        <p className="text-xl mb-4">
          Hai dato i tuoi <strong>primi colori</strong> a una pagina web!
        </p>
        <p className="text-lg mb-4">
          Ora sai creare file CSS, collegarli all&apos;HTML e usare le prime due proprietà.
          Questo è solo l&apos;inizio!
        </p>
        <p className="text-lg font-semibold">
          Nella <strong>prossima lezione</strong> impareremo a selezionare elementi con precisione
          usando i <strong>selettori elemento</strong> e scopriremo molti altri colori con <strong>hex</strong> e <strong>RGB</strong>! 🌈
        </p>
      </section>
    </LessonLayout>
  );
}
