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
          'Scrivere le prime regole CSS',
          'Collegare un file CSS esterno',
          'Usare i DevTools per ispezionare gli stili'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Benvenuto nel Mondo del CSS!</h2>
        <p className="text-lg mb-4">
          Hai appena completato il Modulo HTML e ora sai creare la <strong>struttura</strong> di una pagina web.
          Ma ammettiamolo... le tue pagine sembrano un po&apos; anni &apos;90, vero? 😅
        </p>
        <p className="text-lg mb-4">
          È arrivato il momento di farle diventare <strong>bellissime</strong>! Ed è qui che entra in gioco il <strong>CSS</strong>.
        </p>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-2">🎨 Cos&apos;è il CSS?</h3>
          <p className="text-lg">
            <strong>CSS</strong> sta per <strong>Cascading Style Sheets</strong> (Fogli di Stile a Cascata).
          </p>
          <p className="mt-2">
            È il linguaggio che usiamo per <strong>dare stile</strong> alle pagine HTML: colori, font, dimensioni, layout, animazioni... tutto!
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="text-lg font-bold mb-2">🏠 Analogia: Casa e Arredamento</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-blue-700">HTML = Struttura della casa</p>
              <p className="text-sm">Muri, porte, finestre, stanze</p>
            </div>
            <div>
              <p className="font-semibold text-purple-700">CSS = Arredamento e decorazioni</p>
              <p className="text-sm">Colori pareti, mobili, quadri, illuminazione</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sintassi CSS */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">La Sintassi Base del CSS</h2>
        <p className="text-lg mb-4">
          Una regola CSS è composta da 3 parti:
        </p>

        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6 font-mono">
          <p className="text-green-400">selettore</p>
          <p className="text-white">{'{'}</p>
          <p className="pl-4">
            <span className="text-blue-400">proprietà</span>
            <span className="text-white">: </span>
            <span className="text-yellow-400">valore</span>
            <span className="text-white">;</span>
          </p>
          <p className="text-white">{'}'}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
            <h4 className="font-bold text-green-700 mb-2">1. Selettore</h4>
            <p className="text-sm">Dice a quale elemento HTML applicare lo stile</p>
          </div>
          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700 mb-2">2. Proprietà</h4>
            <p className="text-sm">Cosa vuoi modificare (colore, dimensione, etc.)</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
            <h4 className="font-bold text-yellow-700 mb-2">3. Valore</h4>
            <p className="text-sm">Come vuoi modificarlo</p>
          </div>
        </div>

        <CodeExample
          language="css"
          title="Esempio Pratico"
          code={`/* Seleziono tutti i paragrafi */
p {
  color: blue;        /* Testo blu */
  font-size: 18px;    /* Dimensione 18 pixel */
  font-weight: bold;  /* Grassetto */
}`}
        />
      </section>

      {/* 3 Modi per Aggiungere CSS */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">I 3 Modi per Aggiungere CSS</h2>

        {/* Metodo 1: Inline */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">1</span>
            CSS Inline (nel tag HTML)
          </h3>
          <p className="mb-3">Usi l&apos;attributo <code className="bg-gray-200 px-2 py-1 rounded">style</code> direttamente nel tag HTML.</p>

          <CodeExample
            language="html"
            code={`<h1 style="color: red; font-size: 32px;">Titolo Rosso</h1>`}
          />

          <div className="bg-red-50 border-l-4 border-red-500 p-4 mt-3">
            <p className="font-semibold text-red-700">⚠️ Quando usarlo:</p>
            <p className="text-sm">Solo per test rapidi. NON è consigliato per progetti veri!</p>
            <p className="text-sm mt-1">Motivo: Mescola HTML e CSS, difficile da mantenere.</p>
          </div>
        </div>

        {/* Metodo 2: Internal */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center">2</span>
            CSS Interno (nel tag &lt;style&gt;)
          </h3>
          <p className="mb-3">Scrivi il CSS dentro un tag <code className="bg-gray-200 px-2 py-1 rounded">&lt;style&gt;</code> nell&apos;head della pagina.</p>

          <CodeExample
            language="html"
            code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Mia Pagina</title>
  <style>
    h1 {
      color: blue;
      text-align: center;
    }

    p {
      color: gray;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <h1>Titolo Blu Centrato</h1>
  <p>Paragrafo grigio.</p>
</body>
</html>`}
          />

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-3">
            <p className="font-semibold text-orange-700">🔶 Quando usarlo:</p>
            <p className="text-sm">Per pagine singole molto piccole o per prototipi.</p>
            <p className="text-sm mt-1">Limite: Se hai 10 pagine, devi riscrivere il CSS 10 volte!</p>
          </div>
        </div>

        {/* Metodo 3: External (BEST) */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center">3</span>
            CSS Esterno (file .css separato) ⭐
          </h3>
          <p className="mb-3">
            Crei un file separato (es: <code className="bg-gray-200 px-2 py-1 rounded">style.css</code>) e lo colleghi con il tag <code className="bg-gray-200 px-2 py-1 rounded">&lt;link&gt;</code>.
          </p>

          <div className="bg-gray-50 p-4 rounded mb-3">
            <p className="font-semibold mb-2">📁 Struttura file:</p>
            <pre className="text-sm bg-gray-900 text-green-400 p-3 rounded font-mono">
{`mio-sito/
├── index.html
└── style.css`}
            </pre>
          </div>

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
  color: purple;
  font-size: 40px;
  text-align: center;
}

p {
  color: #333;
  line-height: 1.6;
  font-size: 18px;
}`}
          />

          <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-3">
            <p className="font-semibold text-green-700">✅ METODO CONSIGLIATO!</p>
            <p className="text-sm mt-2"><strong>Vantaggi:</strong></p>
            <ul className="text-sm list-disc list-inside mt-1">
              <li>Separa contenuto (HTML) da presentazione (CSS)</li>
              <li>Un solo file CSS per TUTTE le pagine</li>
              <li>Facile da modificare e mantenere</li>
              <li>Il browser può memorizzare il CSS (più veloce)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Primo Esempio Pratico */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Il Tuo Primo Stile CSS</h2>
        <p className="text-lg mb-4">
          Vediamo CSS in azione! Confronta queste due pagine:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-bold mb-2 text-gray-600">❌ Senza CSS (HTML puro)</h3>
            <LessonPreview
              title="Pagina senza stile"
              html={`<h1>Benvenuto!</h1>
<p>Questa pagina non ha CSS.</p>
<p>È un po' triste, vero?</p>`}
            />
          </div>
          <div>
            <h3 className="font-bold mb-2 text-green-600">✅ Con CSS</h3>
            <LessonPreview
              title="Pagina con stile"
              html={`<h1 style="color: #6366f1; text-align: center; font-size: 32px;">Benvenuto!</h1>
<p style="color: #4b5563; font-size: 18px; line-height: 1.8;">Questa pagina ha CSS.</p>
<p style="color: #4b5563; font-size: 18px; line-height: 1.8;">Molto meglio, no? 😊</p>`}
            />
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="font-bold text-purple-700 mb-2">✨ Differenze Visibili</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Il titolo è <strong>colorato e centrato</strong></li>
            <li>Il testo ha un <strong>colore più gradevole</strong></li>
            <li>Le righe hanno più <strong>spazio tra loro</strong> (line-height)</li>
            <li>La dimensione del testo è <strong>più leggibile</strong></li>
          </ul>
        </div>
      </section>

      {/* DevTools */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">🔧 Browser DevTools - Il Tuo Migliore Amico</h2>
        <p className="text-lg mb-4">
          I DevTools del browser ti permettono di <strong>ispezionare</strong> e <strong>modificare</strong> CSS in tempo reale!
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="font-bold text-blue-700 mb-3">Come Aprire i DevTools</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded">
              <p className="font-semibold mb-1">🪟 Windows/Linux</p>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">F12</code> o <code className="text-sm bg-gray-100 px-2 py-1 rounded">Ctrl + Shift + I</code>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="font-semibold mb-1">🍎 Mac</p>
              <code className="text-sm bg-gray-100 px-2 py-1 rounded">Cmd + Option + I</code>
            </div>
            <div className="bg-white p-3 rounded">
              <p className="font-semibold mb-1">🖱️ Click destro</p>
              <p className="text-sm">Su un elemento → <strong>Ispeziona</strong></p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg mb-6">
          <h3 className="font-bold text-yellow-700 mb-3">🎯 Cosa Puoi Fare con i DevTools</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">1.</span>
              <span><strong>Vedere tutti gli stili CSS</strong> applicati a un elemento</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">2.</span>
              <span><strong>Modificare colori, dimensioni, etc.</strong> e vedere il risultato istantaneo</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">3.</span>
              <span><strong>Testare nuove idee</strong> prima di scriverle nel codice</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 font-bold">4.</span>
              <span><strong>Capire perché</strong> un certo stile non funziona (conflitti, errori)</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4">
          <p className="font-semibold text-green-700">💡 Trucco Pro</p>
          <p className="text-sm mt-1">
            Visita il tuo sito web preferito, apri i DevTools, e <strong>sperimenta</strong> cambiando i colori!
            È il modo migliore per imparare CSS giocando con siti reali.
          </p>
        </div>
      </section>

      {/* Exercise */}
      <Exercise
        title="Il Tuo Primo File CSS"
        difficulty="facile"
        steps={[
          'Crea una cartella chiamata "primo-css" sul desktop',
          'Dentro la cartella, crea un file "index.html"',
          'Sempre nella stessa cartella, crea un file "style.css"',
          'In index.html, scrivi la struttura HTML base con DOCTYPE, html, head e body',
          'Nell\'head, aggiungi il tag <link> per collegare style.css',
          'Nel body, aggiungi un h1 con il tuo nome e un paragrafo che ti descrive',
          'In style.css, cambia il colore del h1 in blu (color: blue;)',
          'Sempre in style.css, cambia la dimensione del paragrafo a 20px (font-size: 20px;)',
          'Aggiungi text-align: center; al h1 per centrarlo',
          'Apri index.html nel browser e ammira il risultato!',
          'Apri i DevTools (F12) e sperimenta cambiando i colori in tempo reale'
        ]}
      />

      {/* Challenge */}
      <Challenge
        title="Crea una Pagina Presentazione Colorata"
        description="Metti in pratica tutto quello che hai imparato creando una pagina di presentazione personale stilizzata con CSS esterno."
        requirements={[
          'File HTML con struttura completa (DOCTYPE, html, head, body)',
          'File CSS esterno collegato con <link>',
          'Titolo principale (h1) con colore personalizzato e centrato',
          'Sottotitolo (h2) con colore diverso',
          'Almeno 3 paragrafi con font-size di 18px',
          'Usa almeno 5 proprietà CSS diverse (color, font-size, text-align, line-height, font-weight)',
          'Commenti CSS che spiegano cosa fa ogni regola',
          'Testa il risultato aprendo la pagina nel browser'
        ]}
        hint="Inizia creando la struttura HTML, poi aggiungi il CSS poco alla volta. Usa i DevTools per sperimentare i colori prima di scriverli nel file CSS!"
      />

      {/* Checklist */}
      <Checklist
        items={[
          'So cos\'è il CSS e a cosa serve',
          'Conosco i 3 modi per aggiungere CSS (inline, interno, esterno)',
          'Capisco quale metodo è migliore (CSS esterno)',
          'So creare un file .css e collegarlo con <link>',
          'Conosco la sintassi base: selettore { proprietà: valore; }',
          'So usare le proprietà color, font-size, text-align',
          'So aprire i DevTools del browser (F12)',
          'So ispezionare gli elementi e vedere i loro stili',
          'So modificare CSS nei DevTools per testare',
          'Ho completato l\'esercizio e la sfida con successo'
        ]}
      />

      {/* Conclusione */}
      <section className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Congratulazioni!</h2>
        <p className="text-xl mb-4">
          Hai mosso i primi passi nel mondo del CSS! Ora le tue pagine HTML possono avere <strong>stile e personalità</strong>.
        </p>
        <p className="text-lg mb-4">
          Nella prossima lezione impareremo i <strong>selettori CSS</strong>, che ti permetteranno di scegliere con precisione
          quali elementi stilizzare.
        </p>
        <p className="text-lg font-semibold">
          Il viaggio verso il design web professionale è appena iniziato! 🚀
        </p>
      </section>
    </LessonLayout>
  );
}
