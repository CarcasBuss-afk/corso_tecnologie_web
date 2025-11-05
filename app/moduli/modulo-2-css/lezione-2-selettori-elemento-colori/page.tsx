import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import LessonPreview from '@/components/didattica/LessonPreview';

export default function Lezione2CSS() {
  const lezioni = getLezioniByModuloSlug('modulo-2-css');

  return (
    <LessonLayout
      moduloSlug="modulo-2-css"
      moduloTitolo="Modulo 2: CSS"
      lezioni={lezioni}
      lezioneSlug="lezione-2-selettori-elemento-colori"
      lezioneTitolo="Selettore Elemento + Colori"
    >
      <LessonHeader
        numero={2}
        titolo="Selettore Elemento + Colori"
        durata="1.5 ore"
        difficolta="facile"
        obiettivi={[
          'Usare il selettore elemento per stilizzare tag HTML',
          'Capire come funzionano i nomi dei colori',
          'Imparare i codici hex per i colori',
          'Applicare bordi con la proprietà border',
          'Creare pagine colorate con solo selettori elemento'
        ]}
      />

      {/* Intro */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Il Selettore Elemento</h2>
        <p className="text-lg mb-4">
          Nella lezione precedente hai usato selettori come <code className="bg-gray-200 px-2 py-1 rounded">h1</code> e <code className="bg-gray-200 px-2 py-1 rounded">p</code>.
          Ora approfondiamo: questi sono chiamati <strong>selettori elemento</strong>!
        </p>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">🎯 Cos&apos;è il Selettore Elemento?</h3>
          <p className="mb-3">
            Il selettore elemento seleziona <strong>TUTTI</strong> gli elementi di quel tipo nella pagina.
          </p>
          <div className="bg-black bg-opacity-20 p-4 rounded border-2 border-white border-opacity-30">
            <p className="font-mono text-lg text-yellow-200">nome-tag {'{ proprietà: valore; }'}</p>
          </div>
          <p className="mt-3 text-sm">
            Esempio: <code className="bg-black bg-opacity-30 text-yellow-200 px-2 py-1 rounded">p</code> seleziona tutti i paragrafi,
            <code className="bg-black bg-opacity-30 text-yellow-200 px-2 py-1 rounded mx-2">h1</code> seleziona tutti gli h1.
          </p>
        </div>
      </section>

      {/* Selettori Elemento Comuni */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Selettori Elemento Più Comuni</h2>
        <p className="text-lg mb-6">
          Puoi usare come selettore <strong>qualsiasi tag HTML</strong>! Ecco i più usati:
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-700 mb-2">Testi</h4>
            <div className="space-y-1 text-sm">
              <code className="block bg-white px-2 py-1 rounded">h1, h2, h3...</code>
              <code className="block bg-white px-2 py-1 rounded">p</code>
              <code className="block bg-white px-2 py-1 rounded">span</code>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
            <h4 className="font-bold text-green-700 mb-2">Contenitori</h4>
            <div className="space-y-1 text-sm">
              <code className="block bg-white px-2 py-1 rounded">div</code>
              <code className="block bg-white px-2 py-1 rounded">section</code>
              <code className="block bg-white px-2 py-1 rounded">body</code>
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-700 mb-2">Interattivi</h4>
            <div className="space-y-1 text-sm">
              <code className="block bg-white px-2 py-1 rounded">a</code>
              <code className="block bg-white px-2 py-1 rounded">button</code>
              <code className="block bg-white px-2 py-1 rounded">input</code>
            </div>
          </div>
        </div>

        <CodeExample
          language="css"
          title="Esempio: stilizzare diversi elementi"
          code={`/* Tutti i titoli h1 */
h1 {
  color: blue;
}

/* Tutti i paragrafi */
p {
  color: gray;
}

/* Tutti i link */
a {
  color: purple;
}

/* Tutto il body */
body {
  background-color: lightyellow;
}`}
        />

        <div className="mt-6">
          <h3 className="font-bold mb-2 text-gray-700">📺 Risultato</h3>
          <LessonPreview
            title="Selettori Elemento in Azione"
            html={`<body style="background-color: lightyellow; padding: 20px;">
  <h1 style="color: blue;">Titolo Blu</h1>
  <p style="color: gray;">Paragrafo grigio</p>
  <p style="color: gray;">Anche questo paragrafo è grigio!</p>
  <a href="#" style="color: purple; text-decoration: none;">Link viola</a>
</body>`}
          />
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
          <h3 className="font-bold text-blue-700 mb-2">💡 Nota Importante</h3>
          <p>Quando usi un selettore elemento, lo stile si applica a <strong>TUTTI</strong> gli elementi di quel tipo!</p>
          <p className="mt-2 text-sm">Se hai 10 paragrafi, tutti e 10 avranno lo stesso stile.</p>
        </div>
      </section>

      {/* Colori con Nomi */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Colori: I Nomi</h2>
        <p className="text-lg mb-4">
          Nella lezione precedente hai usato nomi come <code className="bg-gray-200 px-2 py-1 rounded">red</code> e <code className="bg-gray-200 px-2 py-1 rounded">blue</code>.
          CSS supporta <strong>140 nomi di colori</strong>!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="text-center">
            <div className="h-20 rounded" style={{backgroundColor: 'red'}}></div>
            <code className="text-sm">red</code>
          </div>
          <div className="text-center">
            <div className="h-20 rounded" style={{backgroundColor: 'blue'}}></div>
            <code className="text-sm">blue</code>
          </div>
          <div className="text-center">
            <div className="h-20 rounded" style={{backgroundColor: 'green'}}></div>
            <code className="text-sm">green</code>
          </div>
          <div className="text-center">
            <div className="h-20 rounded" style={{backgroundColor: 'yellow'}}></div>
            <code className="text-sm">yellow</code>
          </div>
          <div className="text-center">
            <div className="h-20 rounded" style={{backgroundColor: 'purple'}}></div>
            <code className="text-sm">purple</code>
          </div>
          <div className="text-center">
            <div className="h-20 rounded" style={{backgroundColor: 'orange'}}></div>
            <code className="text-sm">orange</code>
          </div>
          <div className="text-center">
            <div className="h-20 rounded" style={{backgroundColor: 'pink'}}></div>
            <code className="text-sm">pink</code>
          </div>
          <div className="text-center">
            <div className="h-20 rounded" style={{backgroundColor: 'brown'}}></div>
            <code className="text-sm">brown</code>
          </div>
          <div className="text-center">
            <div className="h-20 rounded border border-gray-300" style={{backgroundColor: 'white'}}></div>
            <code className="text-sm">white</code>
          </div>
          <div className="text-center">
            <div className="h-20 rounded" style={{backgroundColor: 'black'}}></div>
            <code className="text-sm">black</code>
          </div>
          <div className="text-center">
            <div className="h-20 rounded" style={{backgroundColor: 'gray'}}></div>
            <code className="text-sm">gray</code>
          </div>
          <div className="text-center">
            <div className="h-20 rounded" style={{backgroundColor: 'navy'}}></div>
            <code className="text-sm">navy</code>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
          <h3 className="font-bold text-yellow-700 mb-2">⚠️ Limitazione dei Nomi</h3>
          <p>I nomi sono comodi ma limitati: solo 140 colori disponibili!</p>
          <p className="mt-2">Per avere <strong>milioni di colori</strong>, usiamo i codici <strong>HEX</strong> →</p>
        </div>
      </section>

      {/* Colori Hex */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Colori: Codici HEX (Esadecimali)</h2>
        <p className="text-lg mb-4">
          I codici HEX ti danno accesso a <strong>oltre 16 milioni di colori</strong>!
        </p>

        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">🎨 Come Funziona un Codice HEX</h3>
          <div className="bg-black bg-opacity-30 p-4 rounded font-mono text-lg mb-3 border-2 border-white border-opacity-30">
            <span className="text-yellow-200 font-bold">#</span>
            <span className="text-red-300 font-bold">RR</span>
            <span className="text-green-300 font-bold">GG</span>
            <span className="text-blue-300 font-bold">BB</span>
          </div>
          <ul className="space-y-2 text-sm">
            <li><span className="text-yellow-200 font-bold">#</span> = Simbolo che indica un colore hex</li>
            <li><span className="text-red-300 font-bold">RR</span> = Quantità di Rosso (00-FF)</li>
            <li><span className="text-green-300 font-bold">GG</span> = Quantità di Verde (00-FF)</li>
            <li><span className="text-blue-300 font-bold">BB</span> = Quantità di Blu (00-FF)</li>
          </ul>
          <p className="mt-3 text-sm">
            <strong>00</strong> = niente di quel colore | <strong>FF</strong> = massimo di quel colore
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempi di Codici HEX</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div>
            <div className="h-24 rounded mb-2" style={{backgroundColor: '#FF0000'}}></div>
            <code className="text-sm">#FF0000</code>
            <p className="text-xs text-gray-600">Rosso puro</p>
          </div>
          <div>
            <div className="h-24 rounded mb-2" style={{backgroundColor: '#00FF00'}}></div>
            <code className="text-sm">#00FF00</code>
            <p className="text-xs text-gray-600">Verde puro</p>
          </div>
          <div>
            <div className="h-24 rounded mb-2" style={{backgroundColor: '#0000FF'}}></div>
            <code className="text-sm">#0000FF</code>
            <p className="text-xs text-gray-600">Blu puro</p>
          </div>
          <div>
            <div className="h-24 rounded mb-2 border border-gray-300" style={{backgroundColor: '#FFFFFF'}}></div>
            <code className="text-sm">#FFFFFF</code>
            <p className="text-xs text-gray-600">Bianco (tutto al massimo)</p>
          </div>
          <div>
            <div className="h-24 rounded mb-2" style={{backgroundColor: '#000000'}}></div>
            <code className="text-sm">#000000</code>
            <p className="text-xs text-gray-600">Nero (tutto a zero)</p>
          </div>
          <div>
            <div className="h-24 rounded mb-2" style={{backgroundColor: '#808080'}}></div>
            <code className="text-sm">#808080</code>
            <p className="text-xs text-gray-600">Grigio (metà)</p>
          </div>
          <div>
            <div className="h-24 rounded mb-2" style={{backgroundColor: '#FF6B6B'}}></div>
            <code className="text-sm">#FF6B6B</code>
            <p className="text-xs text-gray-600">Rosso chiaro</p>
          </div>
          <div>
            <div className="h-24 rounded mb-2" style={{backgroundColor: '#4ECDC4'}}></div>
            <code className="text-sm">#4ECDC4</code>
            <p className="text-xs text-gray-600">Turchese</p>
          </div>
          <div>
            <div className="h-24 rounded mb-2" style={{backgroundColor: '#95E1D3'}}></div>
            <code className="text-sm">#95E1D3</code>
            <p className="text-xs text-gray-600">Menta</p>
          </div>
        </div>

        <CodeExample
          language="css"
          title="Usare i Codici HEX nel CSS"
          code={`h1 {
  color: #FF6B6B;  /* Rosso chiaro */
}

p {
  color: #2C3E50;  /* Grigio scuro */
  background-color: #ECF0F1;  /* Grigio chiarissimo */
}

a {
  color: #3498DB;  /* Blu chiaro */
}`}
        />

        <div className="mt-6">
          <LessonPreview
            title="HEX in Azione"
            html={`<h1 style="color: #FF6B6B; margin-bottom: 10px;">Titolo Rosso Chiaro</h1>
<p style="color: #2C3E50; background-color: #ECF0F1; padding: 15px; margin-bottom: 10px;">Paragrafo con colori hex eleganti</p>
<a href="#" style="color: #3498DB; text-decoration: none;">Link blu chiaro</a>`}
          />
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-6">
          <h3 className="font-bold text-green-700 mb-2">💡 Come Trovare Codici HEX</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Cerca "color picker" su Google</li>
            <li>Usa i DevTools del browser (hanno un color picker integrato!)</li>
            <li>Siti come <strong>coolors.co</strong> o <strong>colorhunt.co</strong></li>
            <li>VS Code ha un color picker quando clicchi su un colore!</li>
          </ul>
        </div>
      </section>

      {/* Border */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Nuova Proprietà: border</h2>
        <p className="text-lg mb-4">
          La proprietà <code className="bg-gray-200 px-2 py-1 rounded">border</code> aggiunge un <strong>bordo</strong> intorno all&apos;elemento.
        </p>

        <div className="bg-purple-50 p-6 rounded-lg mb-6">
          <h3 className="font-bold text-purple-700 mb-3">Sintassi border</h3>
          <div className="bg-white p-4 rounded font-mono">
            border: <span className="text-blue-600">larghezza</span> <span className="text-green-600">stile</span> <span className="text-purple-600">colore</span>;
          </div>
          <div className="mt-4 grid md:grid-cols-3 gap-3 text-sm">
            <div>
              <strong className="text-blue-700">Larghezza:</strong>
              <p className="mt-1">1px, 2px, 3px, 5px...</p>
            </div>
            <div>
              <strong className="text-green-700">Stile:</strong>
              <p className="mt-1">solid, dashed, dotted</p>
            </div>
            <div>
              <strong className="text-purple-700">Colore:</strong>
              <p className="mt-1">red, blue, #FF0000...</p>
            </div>
          </div>
        </div>

        <CodeExample
          language="css"
          title="Esempi di Border"
          code={`/* Bordo solido nero */
h1 {
  border: 2px solid black;
}

/* Bordo tratteggiato rosso */
p {
  border: 3px dashed red;
}

/* Bordo puntinato blu con hex */
div {
  border: 1px dotted #3498DB;
}`}
        />

        <div className="mt-6 space-y-4">
          <div>
            <h4 className="font-bold mb-2">Bordo Solid (continuo)</h4>
            <LessonPreview
              title="Bordo Solid"
              html={`<div style="border: 3px solid #2C3E50; padding: 15px;">
  Elemento con bordo solid
</div>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">Bordo Dashed (tratteggiato)</h4>
            <LessonPreview
              title="Bordo Dashed"
              html={`<div style="border: 3px dashed #E74C3C; padding: 15px;">
  Elemento con bordo dashed
</div>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">Bordo Dotted (puntinato)</h4>
            <LessonPreview
              title="Bordo Dotted"
              html={`<div style="border: 3px dotted #3498DB; padding: 15px;">
  Elemento con bordo dotted
</div>`}
            />
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
          <h3 className="font-bold text-blue-700 mb-2">🎯 Trucco Pro</h3>
          <p>Usa <code className="bg-gray-200 px-2 py-1 rounded">border</code> per "vedere" i confini dei tuoi elementi mentre lavori!</p>
          <p className="mt-2 text-sm">È super utile per capire dove finisce un div e ne inizia un altro.</p>
        </div>
      </section>

      {/* Esercizio */}
      <Exercise
        title="🎯 Esercizio Guidato: Pagina con Colori HEX e Bordi"
        steps={[
          'Crea una cartella "colori-css" in VS Code',
          'Dentro la cartella, crea due file: "index.html" e "style.css"',
          {
            text: 'Apri index.html e scrivi la struttura con titoli, paragrafi e link',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Colori HEX e Bordi</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Il Potere dei Colori HEX</h1>
  <h2>Cosa Sono i Codici Esadecimali?</h2>
  <p>I codici HEX ci danno accesso a milioni di colori!</p>
  <p>Ogni codice è formato da 6 caratteri: #RRGGBB</p>
  <p>Possiamo creare qualsiasi sfumatura vogliamo.</p>
  <a href="#">Scopri di più sui colori</a> |
  <a href="#">Guida completa HEX</a>
</body>
</html>`,
            language: 'html',
          },
          {
            text: 'Apri style.css e scrivi la prima regola: h1 con colore e bordo blu',
            code: `/* Selettori elemento con HEX */
h1 {
  color: #2C3E50;
  border: 3px solid #3498DB;
}`,
            language: 'css',
          },
          'Salva entrambi i file (Ctrl+S o Cmd+S)',
          'Fai doppio click su "index.html" per aprirlo nel browser',
          'Verifica che il titolo h1 sia grigio scuro con bordo blu! 🎨',
          {
            text: 'Torna in style.css e aggiungi lo stile per h2 (rosso su sfondo rosa)',
            code: `/* Selettori elemento con HEX */
h1 {
  color: #2C3E50;
  border: 3px solid #3498DB;
}

h2 {
  color: #E74C3C;
  background-color: #FADBD8;
}`,
            language: 'css',
            highlightLines: [7, 8, 9, 10],
          },
          'Salva (Ctrl+S) e ricarica il browser (F5)',
          'Verifica che h2 sia rosso su sfondo rosa chiaro!',
          {
            text: 'Aggiungi lo stile per TUTTI i paragrafi (colore grigio scuro)',
            code: `/* Selettori elemento con HEX */
h1 {
  color: #2C3E50;
  border: 3px solid #3498DB;
}

h2 {
  color: #E74C3C;
  background-color: #FADBD8;
}

p {
  color: #34495E;
}`,
            language: 'css',
            highlightLines: [12, 13, 14],
          },
          'Salva e ricarica (F5) - tutti e 3 i paragrafi devono essere grigio scuro!',
          {
            text: 'Aggiungi lo stile per TUTTI i link (viola)',
            code: `/* Selettori elemento con HEX */
h1 {
  color: #2C3E50;
  border: 3px solid #3498DB;
}

h2 {
  color: #E74C3C;
  background-color: #FADBD8;
}

p {
  color: #34495E;
}

a {
  color: #8E44AD;
}`,
            language: 'css',
            highlightLines: [16, 17, 18],
          },
          'Salva e ricarica (F5) - i link devono essere viola!',
          {
            text: 'Infine, aggiungi lo stile per body (sfondo grigio chiaro)',
            code: `/* Selettori elemento con HEX */
h1 {
  color: #2C3E50;
  border: 3px solid #3498DB;
}

h2 {
  color: #E74C3C;
  background-color: #FADBD8;
}

p {
  color: #34495E;
}

a {
  color: #8E44AD;
}

body {
  background-color: #ECF0F1;
}`,
            language: 'css',
            highlightLines: [20, 21, 22],
          },
          'Salva e ricarica (F5) - tutta la pagina deve avere sfondo grigio chiaro! ✨',
          'Premi F12, vai alla tab "Elements" e clicca su un elemento per vedere i colori HEX applicati',
        ]}
        experiments={[
          'Cambia il colore di h1 da #2C3E50 a #FF0000 (rosso puro), salva e ricarica - cosa noti?',
          'Cambia lo stile del border di h1 da "solid" a "dashed", poi prova "dotted"',
          'Nei DevTools (F12), clicca sul quadratino colorato vicino a un codice HEX - si apre il color picker! Scegli un nuovo colore',
          'Aggiungi "background-color: #D5F4E6;" dentro la regola p{} - tutti i paragrafi avranno lo sfondo verde chiaro!',
          'In VS Code, quando scrivi un codice HEX come #FF6B6B, clicca sul quadratino colorato che appare - puoi scegliere colori visivamente!',
        ]}
      />

      {/* Challenge */}
      <Challenge
        title="Sito Mini Colorato - Solo Selettori Elemento!"
        description="Crea un mini-sito con 3 sezioni diverse usando SOLO selettori elemento (nessuna classe o ID ancora!)"
        requirements={[
          'File HTML con 3 <section> (usa il tag <section>!)',
          'Ogni section ha: un h2 e 2-3 paragrafi',
          'File CSS collegato',
          'body con background-color (scegli tu il colore hex)',
          'Tutti gli h2 con lo stesso colore (hex) e border solid',
          'Tutti i p con colore testo scuro (hex) e background chiaro',
          'Tutti i section con border (scegli stile e colore)',
          'Almeno 8 codici HEX diversi nel CSS',
          'Usa almeno border solid, dashed e dotted',
          'Nessun nome colore (red, blue...) - solo HEX!',
          'Sperimenta con il color picker di VS Code'
        ]}
        hint="Ricorda: usando il selettore 'section', stili TUTTE le section nello stesso modo. Lo stesso vale per h2, p, ecc. Non puoi ancora dare stili diversi a elementi diversi dello stesso tipo (lo imparerai con le classi!)"
      />

      {/* Checklist */}
      <Checklist
        items={[
          'Capisco cos\'è un selettore elemento',
          'So che il selettore elemento seleziona TUTTI gli elementi di quel tipo',
          'So usare selettori come h1, p, div, body, a',
          'Conosco almeno 10 nomi di colori CSS',
          'Capisco cos\'è un codice HEX (#RRGGBB)',
          'So che HEX va da 00 (minimo) a FF (massimo) per ogni colore',
          'So scrivere colori hex come #FF0000, #00FF00, #0000FF',
          'So usare color con codici hex',
          'So usare background-color con codici hex',
          'Conosco la sintassi border: larghezza stile colore',
          'So la differenza tra solid, dashed e dotted',
          'So usare il color picker di VS Code o DevTools',
          'Ho completato l\'esercizio con sezioni colorate',
          'Ho completato la sfida: mini-sito solo con selettori elemento'
        ]}
      />

      {/* Conclusione */}
      <section className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎨 Ottimo Lavoro!</h2>
        <p className="text-xl mb-4">
          Ora sai usare i selettori elemento e hai accesso a <strong>milioni di colori</strong> con i codici HEX!
        </p>
        <p className="text-lg mb-4">
          Hai anche imparato a creare bordi con <code className="bg-black bg-opacity-30 text-yellow-200 px-2 py-1 rounded">border</code>.
        </p>
        <div className="bg-black bg-opacity-20 p-4 rounded border-2 border-white border-opacity-30">
          <p className="font-bold mb-2 text-yellow-200">📊 Proprietà Totali Imparate: 3</p>
          <ul className="list-disc list-inside space-y-1">
            <li>color (Lezione 1 + 2)</li>
            <li>background-color (Lezione 1 + 2)</li>
            <li>border (Lezione 2) ✨ NUOVO</li>
          </ul>
        </div>
        <p className="text-lg font-semibold mt-4">
          Prossima lezione: Le <strong>CLASSI</strong>! Finalmente potrai dare stili diversi a elementi dello stesso tipo! 🚀
        </p>
      </section>
    </LessonLayout>
  );
}
