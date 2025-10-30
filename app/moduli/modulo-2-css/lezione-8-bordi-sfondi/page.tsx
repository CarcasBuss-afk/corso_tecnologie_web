import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import LessonPreview from '@/components/didattica/LessonPreview';

export default function Lezione8BordiSfondi() {
  const lezioni = getLezioniByModuloSlug('modulo-2-css');

  return (
    <LessonLayout
      moduloSlug="modulo-2-css"
      moduloTitolo="Modulo 2: CSS"
      lezioni={lezioni}
      lezioneSlug="lezione-8-bordi-sfondi"
      lezioneTitolo="Bordi e Sfondi"
    >
      <LessonHeader
        numero={8}
        titolo="Bordi e Sfondi - Decora i Tuoi Elementi"
        durata="1.5 ore"
        difficolta="facile"
        obiettivi={[
          'Creare bordi personalizzati con border (stile, spessore, colore)',
          'Arrotondare gli angoli con border-radius',
          'Controllare bordi individuali (top, right, bottom, left)',
          'Usare background-image per immagini di sfondo',
          'Controllare dimensione sfondo con background-size (cover, contain)',
          'Posizionare sfondi con background-position',
          'Gestire ripetizione con background-repeat',
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🎨 Rendi i Tuoi Elementi Bellissimi!</h2>
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-lg mb-6">
          <p className="text-xl mb-4">
            Finora hai usato <strong>colori solidi</strong> per background e <strong>bordi semplici</strong>.
          </p>
          <p className="text-lg mb-4">
            Oggi impari a creare bordi <strong>stilizzati</strong>, angoli <strong>arrotondati</strong> e sfondi con <strong>immagini</strong>!
          </p>
          <p className="text-lg font-bold">
            I tuoi siti diventeranno molto più professionali e accattivanti! ✨
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
          <h3 className="font-bold text-blue-800 mb-3">🎯 Cosa Imparerai Oggi</h3>
          <ul className="space-y-2 ml-6">
            <li>🔲 Bordi con stili diversi (solid, dashed, dotted, double)</li>
            <li>🔵 Angoli arrotondati con border-radius (cerchi perfetti!)</li>
            <li>🖼️ Immagini di sfondo con background-image</li>
            <li>📐 Controllo dimensione e posizione degli sfondi</li>
            <li>🎭 Sfondi che si ripetono o restano fissi</li>
          </ul>
        </div>
      </section>

      {/* Bordi Base */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🔲 border - Bordi Personalizzati</h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="font-bold text-blue-700 mb-2">📌 Ti Ricordi?</h3>
          <p className="mb-2">
            Nella <strong>Lezione 2</strong> hai già visto <code className="bg-blue-100 px-2 py-1 rounded">border</code> con alcuni stili base: <code className="bg-blue-100 px-2 py-1 rounded">solid</code>, <code className="bg-blue-100 px-2 py-1 rounded">dashed</code>, <code className="bg-blue-100 px-2 py-1 rounded">dotted</code>.
          </p>
          <p className="font-bold text-blue-700">
            Oggi approfondiamo: scoprirai <strong>TUTTI gli stili disponibili</strong> (anche double, groove, ridge) e come controllare ogni lato separatamente!
          </p>
        </div>

        <p className="text-lg mb-6">
          La proprietà <code className="bg-gray-200 px-2 py-1 rounded">border</code> ha 3 valori: <strong>spessore, stile, colore</strong>.
        </p>

        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">📋 Sintassi Completa</h3>
          <CodeExample
            language="css"
            code={`border: width style color;

/* Esempio: */
border: 3px solid #3498DB;`}
          />
          <div className="mt-4 bg-white bg-opacity-20 p-4 rounded">
            <p className="text-sm mb-3 font-bold">Anatomia del border:</p>
            <div className="grid grid-cols-3 gap-3 text-center text-sm">
              <div className="bg-blue-400 bg-opacity-70 p-3 rounded">
                <div className="font-bold mb-1">3px</div>
                <div className="text-xs">↑ larghezza</div>
              </div>
              <div className="bg-green-400 bg-opacity-70 p-3 rounded">
                <div className="font-bold mb-1">solid</div>
                <div className="text-xs">↑ stile</div>
              </div>
              <div className="bg-purple-400 bg-opacity-70 p-3 rounded">
                <div className="font-bold mb-1">#3498DB</div>
                <div className="text-xs">↑ colore</div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Stili Bordo */}
        <h3 className="text-xl font-bold mb-4">🎨 Stili di Bordo Disponibili</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 border-4 border-solid border-blue-500 rounded">
            <h4 className="font-bold text-blue-700 mb-2">solid</h4>
            <p className="text-sm">Linea continua (più comune)</p>
            <code className="text-xs bg-blue-50 px-2 py-1 rounded block mt-2">border: 4px solid blue;</code>
          </div>

          <div className="bg-white p-4 border-4 border-dashed border-green-500 rounded">
            <h4 className="font-bold text-green-700 mb-2">dashed</h4>
            <p className="text-sm">Linea tratteggiata</p>
            <code className="text-xs bg-green-50 px-2 py-1 rounded block mt-2">border: 4px dashed green;</code>
          </div>

          <div className="bg-white p-4 border-4 border-dotted border-purple-500 rounded">
            <h4 className="font-bold text-purple-700 mb-2">dotted</h4>
            <p className="text-sm">Linea punteggiata</p>
            <code className="text-xs bg-purple-50 px-2 py-1 rounded block mt-2">border: 4px dotted purple;</code>
          </div>

          <div className="bg-white p-4 border-4 border-double border-red-500 rounded">
            <h4 className="font-bold text-red-700 mb-2">double</h4>
            <p className="text-sm">Doppia linea</p>
            <code className="text-xs bg-red-50 px-2 py-1 rounded block mt-2">border: 4px double red;</code>
          </div>

          <div className="bg-white p-4 rounded" style={{borderWidth: '4px', borderStyle: 'groove', borderColor: '#F39C12'}}>
            <h4 className="font-bold text-orange-700 mb-2">groove</h4>
            <p className="text-sm">Bordo incavato 3D</p>
            <code className="text-xs bg-orange-50 px-2 py-1 rounded block mt-2">border: 4px groove orange;</code>
          </div>

          <div className="bg-white p-4 rounded" style={{borderWidth: '4px', borderStyle: 'ridge', borderColor: '#9B59B6'}}>
            <h4 className="font-bold text-purple-700 mb-2">ridge</h4>
            <p className="text-sm">Bordo in rilievo 3D</p>
            <code className="text-xs bg-purple-50 px-2 py-1 rounded block mt-2">border: 4px ridge purple;</code>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Come Scriverlo</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML:</h4>
            <CodeExample
              language="html"
              code={`<div class="box-solid">Bordo Solid</div>
<div class="box-dashed">Bordo Dashed</div>
<div class="box-dotted">Bordo Dotted</div>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS:</h4>
            <CodeExample
              language="css"
              code={`.box-solid {
  border: 3px solid #3498DB;
  padding: 15px;
  margin-bottom: 10px;
}

.box-dashed {
  border: 3px dashed #E74C3C;
  padding: 15px;
  margin-bottom: 10px;
}

.box-dotted {
  border: 3px dotted #2ECC71;
  padding: 15px;
}`}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Risultato nel Browser</h3>
        <LessonPreview
          title="Confronto Stili di Bordo"
          html={`<style>
.box-solid-demo {
  border: 3px solid #3498DB;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #EBF5FB;
}

.box-dashed-demo {
  border: 3px dashed #E74C3C;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #FADBD8;
}

.box-dotted-demo {
  border: 3px dotted #2ECC71;
  padding: 15px;
  background-color: #D5F4E6;
}
</style>

<div class="box-solid-demo">📦 Bordo Solid (linea continua)</div>
<div class="box-dashed-demo">✂️ Bordo Dashed (tratteggiato)</div>
<div class="box-dotted-demo">⚫ Bordo Dotted (puntini)</div>`}
        />
      </section>

      {/* Bordi Individuali */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🎯 Bordi Individuali</h2>
        <p className="text-lg mb-6">
          Puoi controllare <strong>ogni lato</strong> separatamente!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-bold text-blue-700 mb-2">border-top</h4>
            <p className="text-sm">Bordo solo sopra</p>
            <code className="text-xs bg-blue-100 px-2 py-1 rounded block mt-2">border-top: 5px solid red;</code>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-bold text-green-700 mb-2">border-right</h4>
            <p className="text-sm">Bordo solo a destra</p>
            <code className="text-xs bg-green-100 px-2 py-1 rounded block mt-2">border-right: 5px solid blue;</code>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-bold text-purple-700 mb-2">border-bottom</h4>
            <p className="text-sm">Bordo solo sotto</p>
            <code className="text-xs bg-purple-100 px-2 py-1 rounded block mt-2">border-bottom: 5px solid green;</code>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
            <h4 className="font-bold text-orange-700 mb-2">border-left</h4>
            <p className="text-sm">Bordo solo a sinistra</p>
            <code className="text-xs bg-orange-100 px-2 py-1 rounded block mt-2">border-left: 5px solid purple;</code>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Box con Bordi Diversi</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML:</h4>
            <CodeExample
              language="html"
              code={`<div class="box-fancy">
  Box con 4 bordi diversi!
</div>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS:</h4>
            <CodeExample
              language="css"
              code={`.box-fancy {
  padding: 20px;
  background-color: #ECF0F1;

  border-top: 5px solid #E74C3C;
  border-right: 5px dashed #3498DB;
  border-bottom: 5px dotted #2ECC71;
  border-left: 5px double #9B59B6;
}`}
            />
          </div>
        </div>

        <LessonPreview
          title="Box con Bordi Diversi su Ogni Lato"
          html={`<style>
.box-fancy-demo {
  padding: 20px;
  background-color: #ECF0F1;
  border-top: 5px solid #E74C3C;
  border-right: 5px dashed #3498DB;
  border-bottom: 5px dotted #2ECC71;
  border-left: 5px double #9B59B6;
  text-align: center;
  font-weight: bold;
}
</style>

<div class="box-fancy-demo">
  🎨 Box con 4 bordi diversi!<br>
  <span style="font-size: 12px;">(Top: solid rosso, Right: dashed blu, Bottom: dotted verde, Left: double viola)</span>
</div>`}
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
          <h3 className="font-bold text-yellow-800 mb-2">💡 Trucco: Bordo Solo Sotto</h3>
          <p className="mb-3">
            Un trucco comune per i titoli è usare <strong>solo border-bottom</strong>:
          </p>
          <CodeExample
            language="css"
            code={`h2 {
  border-bottom: 3px solid #3498DB;
  padding-bottom: 10px;
}
/* Crea una linea sotto il titolo! */`}
          />
        </div>
      </section>

      {/* border-radius */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">⭕ border-radius - Angoli Arrotondati</h2>
        <p className="text-lg mb-6">
          La proprietà <code className="bg-gray-200 px-2 py-1 rounded">border-radius</code> arrotonda gli angoli!
        </p>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">✨ Magia del border-radius</h3>
          <p className="mb-3">Con un solo valore, puoi trasformare:</p>
          <ul className="space-y-2 ml-6">
            <li>📦 Quadrati → Quadrati arrotondati</li>
            <li>🔵 Rettangoli → Pillole</li>
            <li>⭕ Con 50% → Cerchi perfetti!</li>
          </ul>
        </div>

        <h3 className="text-xl font-bold mb-4">📐 Valori Comuni</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-6 text-center" style={{border: '3px solid #3498DB'}}>
            <p className="font-bold text-blue-700 mb-2">0px (default)</p>
            <p className="text-sm">Angoli squadrati</p>
          </div>

          <div className="bg-white p-6 text-center rounded" style={{border: '3px solid #2ECC71'}}>
            <p className="font-bold text-green-700 mb-2">8px</p>
            <p className="text-sm">Leggermente arrotondato</p>
          </div>

          <div className="bg-white p-6 text-center" style={{border: '3px solid #E74C3C', borderRadius: '20px'}}>
            <p className="font-bold text-red-700 mb-2">20px</p>
            <p className="text-sm">Molto arrotondato</p>
          </div>

          <div className="bg-white p-6 text-center" style={{border: '3px solid #9B59B6', borderRadius: '50%'}}>
            <p className="font-bold text-purple-700 mb-2">50%</p>
            <p className="text-sm">Cerchio!</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Come Scriverlo</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML:</h4>
            <CodeExample
              language="html"
              code={`<div class="card">Card arrotondata</div>
<button class="btn">Bottone Pillola</button>
<div class="circle">Cerchio</div>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS:</h4>
            <CodeExample
              language="css"
              code={`.card {
  border-radius: 10px;
  padding: 20px;
  background-color: #3498DB;
  color: white;
}

.btn {
  border-radius: 25px; /* Pillola */
  padding: 12px 30px;
  background-color: #2ECC71;
  color: white;
  border: none;
}

.circle {
  border-radius: 50%; /* Cerchio */
  width: 100px;
  height: 100px;
  background-color: #E74C3C;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}`}
            />
          </div>
        </div>

        <LessonPreview
          title="border-radius in Azione"
          html={`<style>
.card-demo {
  border-radius: 10px;
  padding: 20px;
  background-color: #3498DB;
  color: white;
  margin-bottom: 15px;
  text-align: center;
  font-weight: bold;
}

.btn-demo {
  border-radius: 25px;
  padding: 12px 30px;
  background-color: #2ECC71;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.circle-demo {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #E74C3C;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-weight: bold;
}
</style>

<div class="card-demo">📦 Card con angoli arrotondati (10px)</div>
<button class="btn-demo">💊 Bottone Pillola (25px)</button>
<div class="circle-demo">⭕<br>50%</div>`}
        />

        <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-6">
          <h3 className="font-bold text-green-700 mb-3">🎯 Quando Usare border-radius</h3>
          <ul className="space-y-2">
            <li>✅ <strong>5-10px</strong> - Card, box, container moderni</li>
            <li>✅ <strong>20-30px</strong> - Bottoni stilizzati (pillola)</li>
            <li>✅ <strong>50%</strong> - Cerchi perfetti (avatar, icone)</li>
            <li>✅ Quasi tutti i siti moderni usano border-radius!</li>
          </ul>
        </div>
      </section>

      {/* background-image */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🖼️ background-image - Immagini di Sfondo</h2>
        <p className="text-lg mb-6">
          Invece di colori solidi, puoi usare <strong>immagini</strong> come sfondo!
        </p>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">📋 Sintassi Base</h3>
          <CodeExample
            language="css"
            code={`background-image: url('percorso/immagine.jpg');

/* Esempi: */
background-image: url('foto.jpg');
background-image: url('https://esempio.com/immagine.png');
background-image: url('../images/sfondo.jpg');`}
          />
          <p className="mt-3 text-sm">
            💡 Il percorso dell&apos;immagine va tra <strong>virgolette</strong> dentro <code className="bg-black bg-opacity-20 px-1 rounded">url()</code>
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Base: Sfondo con Immagine</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML:</h4>
            <CodeExample
              language="html"
              code={`<div class="hero">
  <h1>Benvenuto!</h1>
  <p>Sfondo con immagine</p>
</div>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS:</h4>
            <CodeExample
              language="css"
              code={`.hero {
  background-image: url('paesaggio.jpg');
  height: 300px;
  padding: 40px;
  color: white;
  text-align: center;
}`}
            />
          </div>
        </div>

        <LessonPreview
          title="Box con Immagine di Sfondo"
          html={`<style>
.hero-demo {
  background-image: url('https://picsum.photos/800/300');
  height: 300px;
  padding: 40px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #34495E;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
}

.hero-demo h1 {
  margin: 0 0 10px 0;
  font-size: 32px;
}

.hero-demo p {
  margin: 0;
  font-size: 18px;
}
</style>

<div class="hero-demo">
  <h1>🌄 Benvenuto!</h1>
  <p>Questo box ha un'immagine di sfondo</p>
</div>`}
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
          <h3 className="font-bold text-yellow-800 mb-2">⚠️ Nota: Percorsi Relativi</h3>
          <p className="mb-3">Il percorso dell&apos;immagine è <strong>relativo al file CSS</strong>:</p>
          <ul className="space-y-2 ml-6 text-sm">
            <li>✅ <code className="bg-yellow-100 px-2 py-1 rounded">url(&apos;immagine.jpg&apos;)</code> - stessa cartella del CSS</li>
            <li>✅ <code className="bg-yellow-100 px-2 py-1 rounded">url(&apos;../images/foto.jpg&apos;)</code> - cartella superiore</li>
            <li>✅ <code className="bg-yellow-100 px-2 py-1 rounded">url(&apos;https://...&apos;)</code> - URL completo</li>
          </ul>
        </div>
      </section>

      {/* background-size */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">📐 background-size - Controllare Dimensione Sfondo</h2>
        <p className="text-lg mb-6">
          Controlla <strong>come l&apos;immagine riempie</strong> lo spazio disponibile!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-bold text-blue-700 mb-2">cover (più usato)</h4>
            <p className="text-sm mb-2">Copre tutto lo spazio, può tagliare i bordi</p>
            <code className="text-xs bg-blue-100 px-2 py-1 rounded block">background-size: cover;</code>
            <p className="text-xs mt-2 text-blue-600">✅ Perfetto per hero section</p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-bold text-green-700 mb-2">contain</h4>
            <p className="text-sm mb-2">Mostra l&apos;immagine intera, può lasciare spazi vuoti</p>
            <code className="text-xs bg-green-100 px-2 py-1 rounded block">background-size: contain;</code>
            <p className="text-xs mt-2 text-green-600">✅ Per loghi e icone</p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-bold text-purple-700 mb-2">100% 100%</h4>
            <p className="text-sm mb-2">Riempi esattamente, può deformare</p>
            <code className="text-xs bg-purple-100 px-2 py-1 rounded block">background-size: 100% 100%;</code>
            <p className="text-xs mt-2 text-purple-600">⚠️ Può distorcere</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Confronto Visivo: cover vs contain</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2 text-center">background-size: cover</h4>
            <div
              className="h-48 border-4 border-blue-500 rounded flex items-center justify-center text-white font-bold text-xl"
              style={{
                backgroundImage: 'url(https://picsum.photos/400/600)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
              }}
            >
              COVER
            </div>
            <p className="text-sm text-center mt-2 text-blue-700">
              ✅ Copre tutto (può tagliare bordi)
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-2 text-center">background-size: contain</h4>
            <div
              className="h-48 border-4 border-green-500 rounded flex items-center justify-center text-gray-800 font-bold text-xl"
              style={{
                backgroundImage: 'url(https://picsum.photos/400/600)',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#F0F0F0'
              }}
            >
              CONTAIN
            </div>
            <p className="text-sm text-center mt-2 text-green-700">
              ✅ Immagine intera (spazi vuoti possibili)
            </p>
          </div>
        </div>

        <CodeExample
          language="css"
          code={`/* Meglio per hero section e background */
.hero {
  background-image: url('paesaggio.jpg');
  background-size: cover;  /* Copre tutto lo spazio */
  background-position: center;
  height: 500px;
}

/* Meglio per loghi e pattern */
.logo-bg {
  background-image: url('logo.png');
  background-size: contain;  /* Mostra immagine intera */
  background-repeat: no-repeat;
  background-position: center;
}`}
        />
      </section>

      {/* background-position e background-repeat */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">📍 background-position e background-repeat</h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">📍 background-position - Posizione Sfondo</h3>
          <p className="mb-4">Controlla <strong>dove</strong> l&apos;immagine è posizionata.</p>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded border-2 border-blue-200">
              <h4 className="font-bold text-blue-700 mb-2">center (default)</h4>
              <code className="text-xs bg-blue-100 px-2 py-1 rounded block">background-position: center;</code>
            </div>

            <div className="bg-green-50 p-4 rounded border-2 border-green-200">
              <h4 className="font-bold text-green-700 mb-2">top / bottom</h4>
              <code className="text-xs bg-green-100 px-2 py-1 rounded block">background-position: top;</code>
            </div>

            <div className="bg-purple-50 p-4 rounded border-2 border-purple-200">
              <h4 className="font-bold text-purple-700 mb-2">left / right</h4>
              <code className="text-xs bg-purple-100 px-2 py-1 rounded block">background-position: right;</code>
            </div>
          </div>

          <CodeExample
            language="css"
            code={`/* Valori comuni: */
background-position: center;
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: top right;  /* angolo */
background-position: 50% 50%;    /* percentuali */
background-position: 20px 40px;  /* pixel precisi */`}
          />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">🔁 background-repeat - Ripetizione Sfondo</h3>
          <p className="mb-4">Controlla se l&apos;immagine si <strong>ripete</strong> o no.</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
              <h4 className="font-bold text-orange-700 mb-2">repeat (default)</h4>
              <p className="text-sm mb-2">Si ripete orizzontalmente e verticalmente</p>
              <code className="text-xs bg-orange-100 px-2 py-1 rounded block">background-repeat: repeat;</code>
            </div>

            <div className="bg-pink-50 border-l-4 border-pink-500 p-4">
              <h4 className="font-bold text-pink-700 mb-2">no-repeat (più usato)</h4>
              <p className="text-sm mb-2">NON si ripete (immagine singola)</p>
              <code className="text-xs bg-pink-100 px-2 py-1 rounded block">background-repeat: no-repeat;</code>
            </div>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-4">
              <h4 className="font-bold text-teal-700 mb-2">repeat-x</h4>
              <p className="text-sm mb-2">Si ripete solo orizzontalmente</p>
              <code className="text-xs bg-teal-100 px-2 py-1 rounded block">background-repeat: repeat-x;</code>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4">
              <h4 className="font-bold text-indigo-700 mb-2">repeat-y</h4>
              <p className="text-sm mb-2">Si ripete solo verticalmente</p>
              <code className="text-xs bg-indigo-100 px-2 py-1 rounded block">background-repeat: repeat-y;</code>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Completo: Hero Section Perfetta</h3>
        <CodeExample
          language="css"
          code={`.hero {
  /* Immagine di sfondo */
  background-image: url('paesaggio.jpg');

  /* Copre tutto lo spazio */
  background-size: cover;

  /* Centrata */
  background-position: center;

  /* NON si ripete */
  background-repeat: no-repeat;

  /* Altre proprietà */
  height: 500px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}`}
        />

        <LessonPreview
          title="Hero Section con Background Perfetto"
          html={`<style>
.hero-perfect-demo {
  background-image: url('https://picsum.photos/1200/400');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 300px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.8);
  border-radius: 10px;
}

.hero-perfect-demo h2 {
  margin: 0 0 15px 0;
  font-size: 36px;
}

.hero-perfect-demo p {
  margin: 0 0 20px 0;
  font-size: 18px;
}

.hero-perfect-demo button {
  background-color: #E74C3C;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
}
</style>

<div class="hero-perfect-demo">
  <h2>🌟 Hero Section Perfetta</h2>
  <p>background-size: cover + background-position: center</p>
  <button>Inizia Ora</button>
</div>`}
        />
      </section>

      {/* background-attachment */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">📌 background-attachment - Sfondo Fisso</h2>
        <p className="text-lg mb-6">
          Con <code className="bg-gray-200 px-2 py-1 rounded">background-attachment: fixed</code> lo sfondo
          resta <strong>fermo</strong> mentre scrolli la pagina! (Effetto parallasse)
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-bold text-blue-700 mb-2">scroll (default)</h4>
            <p className="text-sm mb-2">Lo sfondo scrolla insieme alla pagina</p>
            <code className="text-xs bg-blue-100 px-2 py-1 rounded block">background-attachment: scroll;</code>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-bold text-purple-700 mb-2">fixed (effetto wow!)</h4>
            <p className="text-sm mb-2">Lo sfondo resta fermo (parallax effect)</p>
            <code className="text-xs bg-purple-100 px-2 py-1 rounded block">background-attachment: fixed;</code>
          </div>
        </div>

        <CodeExample
          language="css"
          code={`.parallax {
  background-image: url('montagna.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;  /* Magia! */

  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}`}
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
          <h3 className="font-bold text-yellow-800 mb-2">💡 Quando Usare background-attachment: fixed</h3>
          <ul className="space-y-2">
            <li>✅ Hero section con effetto parallasse</li>
            <li>✅ Sezioni alternate (testo → immagine fissa → testo)</li>
            <li>✅ Effetto "profondità" nella pagina</li>
            <li>⚠️ Può rallentare su mobile (usa con cautela)</li>
          </ul>
        </div>
      </section>

      {/* Shorthand background */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">⚡ Shorthand: Tutte le Proprietà in Una Riga</h2>
        <p className="text-lg mb-6">
          Invece di scrivere 5 proprietà separate, puoi usare la <strong>shorthand</strong>!
        </p>

        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">📝 Sintassi Completa</h3>
          <CodeExample
            language="css"
            code={`background: color image position/size repeat attachment;

/* Esempio completo: */
background: #3498DB url('foto.jpg') center/cover no-repeat fixed;

/* Equivale a: */
background-color: #3498DB;
background-image: url('foto.jpg');
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;`}
          />
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="font-bold text-blue-700 mb-3">🎯 Esempi Comuni di Shorthand</h3>
          <CodeExample
            language="css"
            code={`/* Hero section moderna: */
background: url('hero.jpg') center/cover no-repeat;

/* Con colore di fallback: */
background: #2C3E50 url('pattern.png') repeat;

/* Sfondo fisso con parallasse: */
background: url('montagna.jpg') center/cover no-repeat fixed;

/* Solo colore (shorthand semplice): */
background: #3498DB;`}
          />
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
          <h3 className="font-bold text-yellow-800 mb-2">⚠️ Nota su background-size</h3>
          <p className="mb-2">
            Nella shorthand, <code className="bg-yellow-100 px-2 py-1 rounded">background-size</code> va
            <strong> dopo position con uno slash</strong>:
          </p>
          <code className="bg-yellow-100 px-2 py-1 rounded block text-sm mt-2">
            background: url(&apos;foto.jpg&apos;) center<strong className="text-red-600">/</strong>cover;
          </code>
          <p className="text-sm mt-2">↑ Il <strong className="text-red-600">/</strong> è obbligatorio!</p>
        </div>
      </section>

      {/* Esempio Finale Completo */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🎨 Esempio Finale: Card Professionale</h2>
        <p className="text-lg mb-6">
          Mettiamo insieme <strong>tutto</strong>: bordi, border-radius, e background!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML:</h4>
            <CodeExample
              language="html"
              code={`<div class="product-card">
  <div class="card-image"></div>
  <div class="card-content">
    <h3>Prodotto Premium</h3>
    <p>Descrizione del prodotto fantastico.</p>
    <button class="buy-btn">Acquista - 49€</button>
  </div>
</div>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS:</h4>
            <CodeExample
              language="css"
              code={`.product-card {
  border: 2px solid #E0E0E0;
  border-radius: 15px;
  overflow: hidden;
  max-width: 350px;
}

.card-image {
  background: url('prodotto.jpg') center/cover;
  height: 200px;
}

.card-content {
  padding: 20px;
  background-color: white;
}

.card-content h3 {
  margin: 0 0 10px 0;
  color: #2C3E50;
}

.card-content p {
  margin: 0 0 15px 0;
  color: #7F8C8D;
}

.buy-btn {
  background-color: #3498DB;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px 25px;
  font-weight: bold;
  cursor: pointer;
}`}
            />
          </div>
        </div>

        <LessonPreview
          title="Card Prodotto Professionale - Tutti i Concetti Applicati"
          html={`<style>
.product-card-demo {
  border: 2px solid #E0E0E0;
  border-radius: 15px;
  overflow: hidden;
  max-width: 350px;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.product-card-demo:hover {
  transform: translateY(-5px);
}

.card-image-demo {
  background: url('https://picsum.photos/350/200') center/cover no-repeat;
  height: 200px;
}

.card-content-demo {
  padding: 20px;
  background-color: white;
}

.card-content-demo h3 {
  margin: 0 0 10px 0;
  color: #2C3E50;
  font-size: 22px;
}

.card-content-demo p {
  margin: 0 0 15px 0;
  color: #7F8C8D;
  line-height: 1.6;
}

.buy-btn-demo {
  background-color: #3498DB;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px 25px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.buy-btn-demo:hover {
  background-color: #2980B9;
}
</style>

<div class="product-card-demo">
  <div class="card-image-demo"></div>
  <div class="card-content-demo">
    <h3>🌟 Prodotto Premium</h3>
    <p>Descrizione del prodotto fantastico con tutti gli elementi di stile professionale.</p>
    <button class="buy-btn-demo">Acquista - 49€</button>
  </div>
</div>

<div style="text-align: center; margin-top: 20px; font-size: 14px; color: #666;">
  <p><strong>✨ Elementi usati:</strong></p>
  <ul style="list-style: none; padding: 0;">
    <li>✅ border + border-radius arrotondato</li>
    <li>✅ background-image con cover</li>
    <li>✅ Bottone pillola con border-radius</li>
    <li>✅ Hover effect con transition</li>
  </ul>
</div>`}
        />
      </section>

      {/* Esercizio */}
      <Exercise
        title="Crea una Pagina Portfolio con Bordi e Sfondi"
        steps={[
          '📝 NOTA: Le 3 card saranno una sotto l\'altra (verticali). Nella prossima lezione imparerai come affiancarle orizzontalmente!',
          'Crea una cartella "portfolio-bordi" in VS Code',
          'Crea index.html con struttura base',
          'Crea style.css con box-sizing: border-box universale',
          'Hero section: background-image, background-size: cover, height 400px, border-radius 15px',
          'Hero: aggiungi h1 e p centrati con text-shadow per leggibilità',
          'Sezione "Chi Sono": box con border 3px dashed, border-radius 10px, padding 30px',
          'Sezione "Progetti": crea 3 div.card (una sotto l\'altra - verticali)',
          'Ogni card: width 100% o max-width 600px, margin-bottom 20px per separarle',
          'Ogni card: border-radius 12px, border 2px solid #E0E0E0',
          'Card: div superiore per immagine di sfondo (height 150px, background-size: cover)',
          'Card: div inferiore per contenuto (padding 20px, h3 titolo, p descrizione)',
          'Bottone in ogni card: border-radius 25px (pillola), background colorato, padding 10px 20px',
          'Footer: border-top 5px solid con colore a scelta',
          'Aggiungi :hover su tutte le card (border-color cambia)',
          'Testa con Live Server - le card saranno verticali (è corretto!)',
          'Apri DevTools e verifica che tutti i border-radius siano applicati',
          'Sperimenta cambiando i valori di border-radius (5px, 20px, 50%)'
        ]}
      />

      {/* Sfida */}
      <Challenge
        title="Sito Multi-Sezione con Effetti Parallasse"
        description="Crea un sito con 5 sezioni alternate, una sotto l'altra: testo → immagine fissa → testo → immagine fissa → testo"
        requirements={[
          '📝 NOTA: Le 5 sezioni saranno una sotto l\'altra (verticali) - perfetto per lo scroll e l\'effetto parallasse!',
          'Crea 5 sezioni in totale',
          'Sezioni 1, 3, 5: Testo normale con background-color e padding generoso',
          'Sezioni 2, 4: Immagini con background-attachment: fixed (parallax)',
          'Sezioni parallax: height 400px, background-size: cover, background-position: center',
          'Ogni sezione testo: border-left 5px solid con colore diverso',
          'Almeno 3 elementi con border-radius (bottoni, box, immagini)',
          'Hero section iniziale: background-image + border-radius 20px + height 500px',
          'Hero: testo centrato con text-shadow per leggibilità',
          'Sezione contatti: box con border dashed, border-radius 15px',
          'Bottoni: border-radius 25px (pillola), almeno 3 colori diversi',
          'Almeno un elemento con border-top, uno con border-bottom (no border completo)',
          'Footer: border-top 3px double, background-color, padding 20px',
          'Tutti gli elementi interattivi con :hover (cambia border o background)',
          'Testa scrollando: le immagini fixed devono restare ferme!',
          'Responsive: max-width sui container, tutto deve funzionare su mobile'
        ]}
        hint="Inizia con la struttura HTML delle 5 sezioni, poi aggiungi gli stili base, e infine gli effetti speciali (parallax, hover). Testa scrollando per vedere l'effetto parallasse!"
      />

      {/* Checklist */}
      <Checklist
        items={[
          'Capisco la sintassi border: width style color',
          'Conosco gli stili di bordo: solid, dashed, dotted, double',
          'So usare border-top, border-right, border-bottom, border-left separatamente',
          'So usare border-radius per arrotondare gli angoli',
          'Capisco che border-radius: 50% crea un cerchio perfetto',
          'So usare background-image con url()',
          'Capisco la differenza tra background-size: cover e contain',
          'So che cover copre tutto lo spazio (può tagliare)',
          'So che contain mostra l\'immagine intera (può lasciare spazi vuoti)',
          'So usare background-position per posizionare l\'immagine',
          'So usare background-repeat: no-repeat per immagini singole',
          'Capisco background-attachment: fixed per effetto parallasse',
          'So usare la shorthand background per scrivere tutto in una riga',
          'Ho completato l\'esercizio: portfolio con bordi e sfondi',
          'Ho completato la sfida: sito con effetti parallasse'
        ]}
      />

      {/* Conclusione e Riepilogo */}
      <section className="mt-12 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Fantastico! I Tuoi Siti Ora Sono Bellissimi!</h2>
        <p className="text-xl mb-4">
          Hai imparato a creare <strong>bordi stilizzati</strong> e <strong>sfondi con immagini</strong>!
        </p>
        <p className="text-lg mb-6">
          Queste tecniche sono usate in TUTTI i siti web moderni! 🌐
        </p>

        <div className="bg-black bg-opacity-20 p-6 rounded border-2 border-white border-opacity-30 mb-6">
          <p className="font-bold mb-3 text-yellow-200 text-xl">📊 Riepilogo Completo CSS Finora</p>

          <div className="mb-4">
            <p className="font-bold text-yellow-200 mb-2">🎯 Selettori CSS (3):</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>elemento, .classe, #id</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-bold text-yellow-200 mb-2">🔮 Pseudo-classi (5):</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>:link, :visited, :hover, :active, :focus</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-bold text-yellow-200 mb-2">📏 Unità di Misura (6):</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>px, %, em, rem, vw, vh</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-yellow-200 mb-2">🎨 Proprietà CSS (30 totali):</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>Lezione 1-2: color, background-color, border</li>
              <li>Lezione 3: font-size, font-weight, text-align</li>
              <li>Lezione 4: padding, margin, width</li>
              <li>Lezione 5: font-family, font-style, text-decoration, text-transform, letter-spacing, word-spacing</li>
              <li>Lezione 6: cursor, transition</li>
              <li>Lezione 7: box-sizing, max-width, min-height</li>
              <li><strong>Lezione 8 (9 NUOVE)</strong>: border-radius, border-top/right/bottom/left, background-image, background-size, background-position, background-repeat, background-attachment ✨</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-400 bg-opacity-30 p-4 rounded border-2 border-green-300">
          <p className="font-bold mb-2">🚀 Prossima Lezione</p>
          <p className="text-lg">
            Imparerai <strong>Display e Posizionamento</strong>! block vs inline, position absolute/relative, z-index e molto altro! 📐
          </p>
        </div>
      </section>
    </LessonLayout>
  );
}
