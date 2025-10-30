import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import LessonPreview from '@/components/didattica/LessonPreview';

export default function Lezione7BoxModel() {
  const lezioni = getLezioniByModuloSlug('modulo-2-css');

  return (
    <LessonLayout
      moduloSlug="modulo-2-css"
      moduloTitolo="Modulo 2: CSS"
      lezioni={lezioni}
      lezioneSlug="lezione-7-box-model"
      lezioneTitolo="Box Model"
    >
      <LessonHeader
        numero={7}
        titolo="Box Model - Il Concetto Fondamentale del CSS"
        durata="2 ore"
        difficolta="media"
        obiettivi={[
          'Capire cos\'è il Box Model e come funziona',
          'Conoscere i 4 livelli: content, padding, border, margin',
          'Usare box-sizing: border-box per semplificare i calcoli',
          'Capire il margin collapsing tra elementi',
          'Usare width, height, max-width, min-height per controllare dimensioni',
          'Visualizzare il Box Model con i DevTools del browser'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">📦 Il Box Model - La Chiave del CSS!</h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="font-bold text-blue-700 mb-2">📌 Ti Ricordi?</h3>
          <p className="mb-2">
            Nelle lezioni precedenti hai già usato alcune proprietà del Box Model:
          </p>
          <ul className="space-y-1 ml-6 mb-3">
            <li>• <strong>Lezione 2:</strong> <code className="bg-blue-100 px-2 py-1 rounded">border</code> per creare bordi base</li>
            <li>• <strong>Lezione 4:</strong> <code className="bg-blue-100 px-2 py-1 rounded">padding</code> e <code className="bg-blue-100 px-2 py-1 rounded">margin</code> per spaziatura</li>
          </ul>
          <p className="font-bold text-blue-700">
            Oggi capirai <strong>come funzionano davvero</strong> insieme e come controllare perfettamente le dimensioni dei tuoi elementi!
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg mb-6">
          <p className="text-xl mb-4">
            <strong>Ogni elemento HTML è una scatola.</strong> 📦
          </p>
          <p className="text-lg mb-4">
            Sì, davvero! Titoli, paragrafi, div, immagini, link... TUTTO è una scatola rettangolare.
          </p>
          <p className="text-lg font-bold">
            Il <strong>Box Model</strong> è il sistema che descrive come queste scatole occupano spazio nella pagina.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
          <h3 className="font-bold text-yellow-800 mb-3">💡 Perché è Così Importante?</h3>
          <p className="mb-3">
            Capire il Box Model è <strong>FONDAMENTALE</strong> per:
          </p>
          <ul className="space-y-2 ml-6">
            <li>✅ Controllare <strong>spacing</strong> e <strong>dimensioni</strong> perfettamente</li>
            <li>✅ Creare <strong>layout</strong> precisi e responsive</li>
            <li>✅ Capire perché gli elementi "non si incastrano" come vorremmo</li>
            <li>✅ Evitare bug di dimensionamento comuni</li>
          </ul>
          <p className="mt-4 font-bold text-yellow-700">
            💪 Una volta capito il Box Model, il CSS diventa 10 volte più facile!
          </p>
        </div>
      </section>

      {/* I 4 Livelli del Box Model */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🎯 I 4 Livelli del Box Model</h2>
        <p className="text-lg mb-6">
          Ogni elemento è composto da <strong>4 livelli concentrici</strong>, come una matrioska russa! 🪆
        </p>

        <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-purple-800">
            📦 Anatomia della Scatola CSS
          </h3>
          <div className="bg-white p-6 rounded-lg border-4 border-gray-300">
            <div className="text-center text-sm font-bold text-gray-600 mb-2">MARGIN (esterno - trasparente)</div>
            <div className="bg-orange-100 p-6 border-4 border-orange-400">
              <div className="text-center text-sm font-bold text-orange-700 mb-2">BORDER (bordo visibile)</div>
              <div className="bg-green-100 p-6 border-4 border-green-400">
                <div className="text-center text-sm font-bold text-green-700 mb-2">PADDING (interno - sfondo visibile)</div>
                <div className="bg-blue-200 p-8 border-4 border-blue-500">
                  <div className="text-center font-bold text-blue-800">CONTENT</div>
                  <div className="text-center text-sm text-blue-700">(testo, immagini)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid 2x2 dei 4 livelli */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h4 className="font-bold text-blue-700 mb-3 text-xl">1️⃣ CONTENT (Contenuto)</h4>
            <p className="mb-3">Il <strong>contenuto vero e proprio</strong>: testo, immagini, etc.</p>
            <p className="text-sm text-blue-600">
              📐 Dimensione controllata da: <code className="bg-blue-100 px-2 py-1 rounded">width</code> e <code className="bg-blue-100 px-2 py-1 rounded">height</code>
            </p>
            <p className="text-sm mt-2 font-bold text-blue-700">
              💙 È il "cuore" della scatola
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 className="font-bold text-green-700 mb-3 text-xl">2️⃣ PADDING (Imbottitura)</h4>
            <p className="mb-3">Spazio <strong>interno</strong> tra il contenuto e il bordo.</p>
            <p className="text-sm text-green-600">
              📐 Proprietà: <code className="bg-green-100 px-2 py-1 rounded">padding</code>
            </p>
            <p className="text-sm mt-2 font-bold text-green-700">
              💚 Il background-color riempie anche il padding!
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
            <h4 className="font-bold text-orange-700 mb-3 text-xl">3️⃣ BORDER (Bordo)</h4>
            <p className="mb-3">Il <strong>bordo visibile</strong> attorno all&apos;elemento.</p>
            <p className="text-sm text-orange-600">
              📐 Proprietà: <code className="bg-orange-100 px-2 py-1 rounded">border</code>
            </p>
            <p className="text-sm mt-2 font-bold text-orange-700">
              🧡 Può essere colorato, spesso, tratteggiato...
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
            <h4 className="font-bold text-purple-700 mb-3 text-xl">4️⃣ MARGIN (Margine)</h4>
            <p className="mb-3">Spazio <strong>esterno</strong> tra questo elemento e gli altri.</p>
            <p className="text-sm text-purple-600">
              📐 Proprietà: <code className="bg-purple-100 px-2 py-1 rounded">margin</code>
            </p>
            <p className="text-sm mt-2 font-bold text-purple-700">
              💜 È trasparente! Il background NON riempie il margin
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white p-6 rounded-lg">
          <h3 className="font-bold text-xl mb-3">🎯 Da Ricordare - Dall&apos;Interno all&apos;Esterno:</h3>
          <ol className="space-y-2 text-lg ml-6">
            <li>1. <strong>Content</strong> - il contenuto vero</li>
            <li>2. <strong>Padding</strong> - imbottitura interna (sfondo visibile)</li>
            <li>3. <strong>Border</strong> - bordo visibile</li>
            <li>4. <strong>Margin</strong> - spazio esterno (trasparente)</li>
          </ol>
        </div>
      </section>

      {/* Esempio Pratico 1 */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Esempio 1: Vedere il Box Model in Azione</h2>
        <p className="text-lg mb-6">
          Creiamo una scatola e applichiamo tutti e 4 i livelli per vederli chiaramente!
        </p>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Come Scriverlo</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML:</h4>
            <CodeExample
              language="html"
              code={`<div class="box-esempio">
  Il mio contenuto
</div>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS:</h4>
            <CodeExample
              language="css"
              code={`.box-esempio {
  /* Content */
  width: 200px;

  /* Padding - imbottitura interna */
  padding: 20px;

  /* Border - bordo visibile */
  border: 5px solid #E74C3C;

  /* Margin - spazio esterno */
  margin: 30px;

  /* Colori per vedere le aree */
  background-color: #3498DB;
  color: white;
}`}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Risultato nel Browser</h3>
        <LessonPreview
          title="Box Model Visualizzato - Guarda i 4 livelli!"
          html={`<style>
.box-esempio-demo {
  width: 200px;
  padding: 20px;
  border: 5px solid #E74C3C;
  margin: 30px auto;
  background-color: #3498DB;
  color: white;
  font-weight: bold;
  text-align: center;
}

.area-container {
  background-color: #F0F0F0;
  padding: 10px;
  border: 2px dashed #999;
}
</style>

<div class="area-container">
  <div style="text-align: center; font-size: 12px; color: #666; margin-bottom: 10px;">
    ⬇️ Area grigia = altri elementi (il margin crea spazio da loro)
  </div>
  <div class="box-esempio-demo">
    Il mio contenuto
  </div>
  <div style="text-align: center; font-size: 12px; color: #666; margin-top: 10px;">
    ⬆️ Margin di 30px separa la scatola dagli altri elementi
  </div>
</div>

<div style="margin-top: 20px; font-size: 14px;">
  <p><strong>🔍 Analisi:</strong></p>
  <ul style="list-style: disc; margin-left: 20px; line-height: 1.8;">
    <li><strong style="color: #3498DB;">Blu</strong> = Content + Padding (background visibile)</li>
    <li><strong style="color: #E74C3C;">Rosso</strong> = Border (5px spesso)</li>
    <li>Spazio bianco attorno = Margin (30px, trasparente)</li>
  </ul>
</div>`}
        />

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
          <h3 className="font-bold text-blue-700 mb-2">💡 Osserva:</h3>
          <ul className="space-y-2">
            <li>✅ Il <strong>background blu</strong> riempie content + padding (non il margin!)</li>
            <li>✅ Il <strong>bordo rosso</strong> è visibile tra padding e margin</li>
            <li>✅ Il <strong>margin</strong> crea spazio trasparente verso l&apos;esterno</li>
            <li>✅ La <strong>larghezza totale</strong> è: content (200px) + padding (40px) + border (10px) + margin (60px) = 310px!</li>
          </ul>
        </div>
      </section>

      {/* box-sizing */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">📐 box-sizing: Il Calcolo delle Dimensioni</h2>
        <p className="text-lg mb-6">
          C&apos;è un <strong>problema</strong> con il Box Model di default...
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
          <h3 className="font-bold text-red-700 mb-3">⚠️ Il Problema del box-sizing: content-box (default)</h3>
          <p className="mb-3">
            Di default, quando scrivi <code className="bg-red-100 px-2 py-1 rounded">width: 200px</code>, stai impostando SOLO la larghezza del <strong>contenuto</strong>.
          </p>
          <p className="mb-3">Il browser aggiunge padding e border <strong>in più</strong>!</p>
          <CodeExample
            language="css"
            code={`.box {
  width: 200px;       /* Solo content */
  padding: 20px;      /* +40px (20 sinistra + 20 destra) */
  border: 5px solid;  /* +10px (5 sinistra + 5 destra) */
}
/* Larghezza totale = 200 + 40 + 10 = 250px! */`}
          />
          <p className="mt-3 font-bold text-red-600">
            😱 Volevi 200px ma hai ottenuto 250px!
          </p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
          <h3 className="font-bold text-green-700 mb-3">✅ La Soluzione: box-sizing: border-box</h3>
          <p className="mb-3">
            Con <code className="bg-green-100 px-2 py-1 rounded">box-sizing: border-box</code>, la <strong>width include tutto</strong>!
          </p>
          <CodeExample
            language="css"
            code={`.box {
  box-sizing: border-box;  /* MAGIC! */
  width: 200px;            /* Include content + padding + border */
  padding: 20px;
  border: 5px solid;
}
/* Larghezza totale = 200px (come volevi!) */
/* Il browser riduce automaticamente lo spazio del content */`}
          />
          <p className="mt-3 font-bold text-green-600">
            🎉 Molto più intuitivo e prevedibile!
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3">Confronto Visivo: content-box vs border-box</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 p-4 border-2 border-red-300 rounded">
            <h4 className="font-bold text-red-700 mb-3">❌ content-box (default)</h4>
            <CodeExample
              language="css"
              code={`box-sizing: content-box;
width: 200px;

/* Calcolo: */
/* Content: 200px */
/* + Padding: 40px */
/* + Border: 10px */
/* = TOTALE: 250px */`}
            />
          </div>

          <div className="bg-green-50 p-4 border-2 border-green-300 rounded">
            <h4 className="font-bold text-green-700 mb-3">✅ border-box (meglio!)</h4>
            <CodeExample
              language="css"
              code={`box-sizing: border-box;
width: 200px;

/* Calcolo: */
/* Totale: 200px */
/* (include content + padding + border) */
/* Content si adatta: 140px */`}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Vedi la Differenza nel Browser</h3>
        <LessonPreview
          title="content-box vs border-box - Entrambi con width: 200px"
          html={`<style>
.demo-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}

.box-content-box {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 5px solid #E74C3C;
  background-color: #FADBD8;
  text-align: center;
  font-weight: bold;
}

.box-border-box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid #2ECC71;
  background-color: #D5F4E6;
  text-align: center;
  font-weight: bold;
}

.label {
  text-align: center;
  margin-top: 10px;
  font-size: 12px;
  font-weight: bold;
}
</style>

<div class="demo-container">
  <div>
    <div class="box-content-box">
      width: 200px<br>
      padding: 20px<br>
      border: 5px
    </div>
    <div class="label" style="color: #E74C3C;">
      ❌ content-box<br>
      Larghezza TOTALE: 250px<br>
      (200 + 40 + 10)
    </div>
  </div>

  <div>
    <div class="box-border-box">
      width: 200px<br>
      padding: 20px<br>
      border: 5px
    </div>
    <div class="label" style="color: #2ECC71;">
      ✅ border-box<br>
      Larghezza TOTALE: 200px<br>
      (come dichiarato!)
    </div>
  </div>
</div>

<div style="text-align: center; margin-top: 20px; padding: 15px; background-color: #FFF3CD; border-left: 4px solid #FFC107; font-size: 14px;">
  <strong>👀 Guarda bene:</strong> entrambi hanno <code>width: 200px</code>, ma il box rosso (content-box) è più largo perché padding e border vengono aggiunti FUORI!
</div>`}
        />

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
          <h3 className="font-bold text-xl mb-3">🎯 Best Practice Universale</h3>
          <p className="mb-3">
            La maggior parte dei sviluppatori applica <code className="bg-black bg-opacity-20 px-2 py-1 rounded">box-sizing: border-box</code> a <strong>TUTTI</strong> gli elementi:
          </p>
          <CodeExample
            language="css"
            code={`/* All'inizio del tuo CSS: */
* {
  box-sizing: border-box;
}

/* Ora width è sempre prevedibile! */`}
          />
        </div>
      </section>

      {/* Width e Height */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">📏 Controllare Dimensioni: width e height</h2>
        <p className="text-lg mb-6">
          Abbiamo già visto <code className="bg-gray-200 px-2 py-1 rounded">width</code>, ma ci sono molte varianti utili!
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="font-bold text-blue-700 mb-3">💡 Cosa Significa "Responsive"?</h3>
          <p className="mb-3">
            Un sito <strong>responsive</strong> (dall&apos;inglese &quot;reattivo&quot;) si <strong>adatta automaticamente</strong> alle dimensioni dello schermo.
          </p>
          <p className="mb-3">
            📱 Su smartphone è stretto → 📱 Su tablet è medio → 💻 Su desktop è largo
          </p>
          <p className="mb-3">
            Il contenuto si <strong>ridimensiona</strong> per essere leggibile su qualsiasi dispositivo!
          </p>
          <p className="font-bold text-blue-700">
            🌟 Questo è fondamentale oggi: oltre il 60% degli utenti naviga da mobile!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-bold text-blue-700 mb-2">width</h4>
            <p className="text-sm mb-2">Larghezza fissa</p>
            <code className="text-xs bg-blue-100 px-2 py-1 rounded">width: 300px;</code>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-bold text-green-700 mb-2">height</h4>
            <p className="text-sm mb-2">Altezza fissa</p>
            <code className="text-xs bg-green-100 px-2 py-1 rounded">height: 200px;</code>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-bold text-purple-700 mb-2">max-width</h4>
            <p className="text-sm mb-2">Larghezza massima (responsive!)</p>
            <code className="text-xs bg-purple-100 px-2 py-1 rounded">max-width: 600px;</code>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
            <h4 className="font-bold text-orange-700 mb-2">min-width</h4>
            <p className="text-sm mb-2">Larghezza minima</p>
            <code className="text-xs bg-orange-100 px-2 py-1 rounded">min-width: 200px;</code>
          </div>

          <div className="bg-pink-50 border-l-4 border-pink-500 p-4">
            <h4 className="font-bold text-pink-700 mb-2">max-height</h4>
            <p className="text-sm mb-2">Altezza massima</p>
            <code className="text-xs bg-pink-100 px-2 py-1 rounded">max-height: 400px;</code>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h4 className="font-bold text-yellow-700 mb-2">min-height</h4>
            <p className="text-sm mb-2">Altezza minima</p>
            <code className="text-xs bg-yellow-100 px-2 py-1 rounded">min-height: 100px;</code>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg mb-6">
          <h3 className="font-bold text-xl mb-3">🎯 Quando Usare Cosa?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-20 p-4 rounded">
              <p className="font-bold mb-2 text-gray-900">✅ max-width (CONSIGLIATO)</p>
              <p className="text-sm text-gray-800">Usa per contenitori responsive:</p>
              <code className="text-xs bg-black bg-opacity-30 px-2 py-1 rounded block mt-2 text-white">
                width: 90%;<br/>
                max-width: 1200px;
              </code>
              <p className="text-xs mt-2 text-gray-800">
                Si restringe su mobile, max 1200px su desktop!
              </p>
            </div>

            <div className="bg-white bg-opacity-20 p-4 rounded">
              <p className="font-bold mb-2 text-gray-900">✅ min-height</p>
              <p className="text-sm text-gray-800">Per sezioni con altezza flessibile:</p>
              <code className="text-xs bg-black bg-opacity-30 px-2 py-1 rounded block mt-2 text-white">
                min-height: 300px;
              </code>
              <p className="text-xs mt-2 text-gray-800">
                Minimo 300px, ma cresce se il contenuto è più lungo
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Contenitore Responsive</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML:</h4>
            <CodeExample
              language="html"
              code={`<div class="container">
  <p>Questo contenitore è responsive!</p>
  <p>Ridimensiona la finestra per vedere.</p>
</div>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS:</h4>
            <CodeExample
              language="css"
              code={`.container {
  box-sizing: border-box;
  width: 90%;          /* 90% del genitore */
  max-width: 600px;    /* Max 600px su schermi grandi */
  min-height: 150px;   /* Minimo 150px altezza */
  margin: 0 auto;      /* Centrato */
  padding: 20px;
  background-color: #3498DB;
  color: white;
  border: 3px solid #2980B9;
}`}
            />
          </div>
        </div>

        <LessonPreview
          title="Ridimensiona il browser per vedere max-width in azione!"
          html={`<style>
.container-demo {
  box-sizing: border-box;
  width: 90%;
  max-width: 600px;
  min-height: 150px;
  margin: 0 auto;
  padding: 20px;
  background-color: #3498DB;
  color: white;
  border: 3px solid #2980B9;
  text-align: center;
}
</style>

<div class="container-demo">
  <p style="margin: 0 0 10px 0; font-weight: bold;">📱 Contenitore Responsive</p>
  <p style="margin: 0; font-size: 14px;">Larghezza: 90% (max 600px)</p>
  <p style="margin: 10px 0 0 0; font-size: 14px;">Altezza minima: 150px</p>
</div>

<p style="text-align: center; margin-top: 15px; font-size: 12px; color: #666;">
  💡 Su mobile: largo 90%. Su desktop: max 600px (non diventa troppo largo)
</p>`}
        />
      </section>

      {/* Margin Collapsing */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🔄 Margin Collapsing - Un Comportamento Strano</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
          <h3 className="font-bold text-yellow-800 mb-3">🤔 Il Fenomeno del Margin Collapsing</h3>
          <p className="mb-3">
            Quando due elementi con <strong>margin verticali</strong> si toccano, i loro margin NON si sommano!
          </p>
          <p className="font-bold text-yellow-700">
            I margin si "uniscono" e viene usato solo il <strong>più grande</strong> dei due.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 p-6 border-2 border-red-300 rounded">
            <h4 className="font-bold text-red-700 mb-3">❓ Cosa Ti Aspetti</h4>
            <CodeExample
              language="css"
              code={`.box1 {
  margin-bottom: 30px;
}

.box2 {
  margin-top: 20px;
}

/* Ti aspetti: 30 + 20 = 50px di spazio */`}
            />
            <div className="mt-4 bg-white p-4 rounded border-2 border-red-200">
              <div className="bg-blue-200 p-3 mb-1">Box 1</div>
              <div style={{height: '50px', borderLeft: '2px dashed red'}} className="text-center text-xs text-red-600">
                50px?
              </div>
              <div className="bg-green-200 p-3">Box 2</div>
            </div>
          </div>

          <div className="bg-green-50 p-6 border-2 border-green-300 rounded">
            <h4 className="font-bold text-green-700 mb-3">✅ Cosa Succede Davvero</h4>
            <CodeExample
              language="css"
              code={`.box1 {
  margin-bottom: 30px;
}

.box2 {
  margin-top: 20px;
}

/* Realtà: max(30, 20) = 30px di spazio */`}
            />
            <div className="mt-4 bg-white p-4 rounded border-2 border-green-200">
              <div className="bg-blue-200 p-3 mb-1">Box 1</div>
              <div style={{height: '30px', borderLeft: '2px dashed green'}} className="text-center text-xs text-green-600">
                30px (il maggiore!)
              </div>
              <div className="bg-green-200 p-3">Box 2</div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="font-bold text-blue-700 mb-3">📋 Regole del Margin Collapsing</h3>
          <ul className="space-y-2">
            <li>✅ Succede solo con margin <strong>verticali</strong> (top/bottom)</li>
            <li>✅ NON succede con margin <strong>orizzontali</strong> (left/right)</li>
            <li>✅ Viene usato il margin <strong>più grande</strong> tra i due</li>
            <li>✅ NON succede se c&apos;è padding o border tra gli elementi</li>
            <li>✅ NON succede con elementi float o position absolute</li>
          </ul>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
          <h3 className="font-bold text-purple-700 mb-3">🎯 Come "Evitare" il Margin Collapsing</h3>
          <p className="mb-3">Se vuoi davvero 50px di spazio:</p>
          <ul className="space-y-2 ml-6">
            <li><strong>Opzione 1:</strong> Usa solo margin-bottom (o solo margin-top)</li>
            <li><strong>Opzione 2:</strong> Usa padding invece di margin</li>
            <li><strong>Opzione 3:</strong> Aggiungi un border trasparente <code className="bg-purple-100 px-1 rounded text-sm">border: 1px solid transparent;</code></li>
          </ul>
        </div>
      </section>

      {/* DevTools */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🔍 Visualizzare il Box Model con i DevTools</h2>
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg mb-6">
          <p className="text-lg mb-4">
            I <strong>DevTools</strong> del browser sono il tuo migliore amico per capire il Box Model!
          </p>
          <p className="text-lg font-bold text-purple-700">
            Puoi vedere ESATTAMENTE content, padding, border e margin di ogni elemento! 🔬
          </p>
        </div>

        <div className="bg-white border-2 border-gray-300 rounded-lg p-6 mb-6">
          <h3 className="font-bold mb-4 text-xl">🎯 Come Aprire i DevTools</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded border border-blue-200">
              <p className="font-bold text-blue-700 mb-2">Windows/Linux</p>
              <code className="bg-blue-100 px-3 py-2 rounded block text-center">F12</code>
              <p className="text-xs mt-2 text-center">oppure</p>
              <code className="bg-blue-100 px-3 py-2 rounded block text-center text-xs mt-1">Ctrl + Shift + I</code>
            </div>

            <div className="bg-green-50 p-4 rounded border border-green-200">
              <p className="font-bold text-green-700 mb-2">Mac</p>
              <code className="bg-green-100 px-3 py-2 rounded block text-center">Cmd + Option + I</code>
            </div>

            <div className="bg-purple-50 p-4 rounded border border-purple-200">
              <p className="font-bold text-purple-700 mb-2">Click Destro</p>
              <p className="text-sm mt-2">Clicca destro su un elemento → <strong>Ispeziona</strong></p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg mb-6">
          <h3 className="font-bold text-xl mb-4">📊 Cosa Vedrai nel Box Model Diagram</h3>
          <div className="bg-white text-gray-800 p-6 rounded-lg">
            <div className="text-center mb-4">
              <div className="bg-orange-200 p-2 inline-block rounded">
                <div className="bg-yellow-200 p-2">
                  <div className="bg-green-200 p-2">
                    <div className="bg-blue-300 p-4 font-bold">
                      Content<br/>
                      <span className="text-sm">250 × 100</span>
                    </div>
                    <div className="text-xs mt-1">padding: 20</div>
                  </div>
                  <div className="text-xs mt-1">border: 5</div>
                </div>
                <div className="text-xs mt-1">margin: 30</div>
              </div>
            </div>
            <ul className="space-y-2 text-sm">
              <li>🔵 <strong>Blu</strong> = Content (width × height)</li>
              <li>🟢 <strong>Verde</strong> = Padding (tutti i 4 lati)</li>
              <li>🟡 <strong>Giallo</strong> = Border (spessore)</li>
              <li>🟠 <strong>Arancione</strong> = Margin (spazio esterno)</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
          <h3 className="font-bold text-yellow-800 mb-3">💡 Pro Tip: Hover sui Valori!</h3>
          <p>
            Nei DevTools puoi <strong>passare il mouse</strong> sui valori di padding, margin, border per vederli
            evidenziati direttamente nella pagina! È il modo migliore per capire dove sta lo spazio.
          </p>
        </div>
      </section>

      {/* Esempio Completo */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🎨 Esempio Completo: Card con Box Model Perfetto</h2>
        <p className="text-lg mb-6">
          Mettiamo insieme tutto per creare una card ben spaziata usando il Box Model!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML:</h4>
            <CodeExample
              language="html"
              code={`<div class="card">
  <h3>Prodotto Speciale</h3>
  <p>Descrizione del prodotto fantastico.</p>
  <a href="#" class="button">Acquista Ora</a>
</div>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS:</h4>
            <CodeExample
              language="css"
              code={`.card {
  box-sizing: border-box;
  width: 90%;
  max-width: 400px;
  margin: 20px auto;
  padding: 30px;
  background-color: white;
  border: 2px solid #E0E0E0;
  border-radius: 8px;
}

.card h3 {
  margin: 0 0 15px 0;
  color: #2C3E50;
}

.card p {
  margin: 0 0 20px 0;
  color: #7F8C8D;
  line-height: 1.6;
}

.button {
  display: inline-block;
  padding: 12px 24px;
  background-color: #3498DB;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}`}
            />
          </div>
        </div>

        <LessonPreview
          title="Card Professionale - Box Model in Azione"
          html={`<style>
.card-complete-demo {
  box-sizing: border-box;
  width: 90%;
  max-width: 400px;
  margin: 20px auto;
  padding: 30px;
  background-color: white;
  border: 2px solid #E0E0E0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.card-complete-demo h3 {
  margin: 0 0 15px 0;
  color: #2C3E50;
  font-size: 24px;
}

.card-complete-demo p {
  margin: 0 0 20px 0;
  color: #7F8C8D;
  line-height: 1.6;
  font-size: 16px;
}

.button-demo {
  display: inline-block;
  padding: 12px 24px;
  background-color: #3498DB;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.button-demo:hover {
  background-color: #2980B9;
  cursor: pointer;
}
</style>

<div class="card-complete-demo">
  <h3>🌟 Prodotto Speciale</h3>
  <p>Descrizione del prodotto fantastico con spazi perfettamente bilanciati grazie al Box Model!</p>
  <a href="#" class="button-demo">Acquista Ora</a>
</div>

<div style="text-align: center; margin-top: 20px; font-size: 14px; color: #666;">
  <p><strong>📦 Box Model usato:</strong></p>
  <ul style="list-style: none; padding: 0;">
    <li>✅ Padding: 30px (respiro interno)</li>
    <li>✅ Border: 2px grigio</li>
    <li>✅ Margin: 20px auto (centratura)</li>
    <li>✅ box-sizing: border-box (calcolo semplice)</li>
  </ul>
</div>`}
        />

        <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-6">
          <h3 className="font-bold text-green-700 mb-3">✨ Cosa Rende Questa Card Perfetta?</h3>
          <ul className="space-y-2">
            <li>✅ <strong>box-sizing: border-box</strong> - width prevedibile</li>
            <li>✅ <strong>padding: 30px</strong> - respiro interno generoso</li>
            <li>✅ <strong>margin: 20px auto</strong> - centrata con spazio esterno</li>
            <li>✅ <strong>max-width: 400px</strong> - non diventa troppo larga</li>
            <li>✅ Margin precisi su h3 e p per spacing verticale perfetto</li>
          </ul>
        </div>
      </section>

      {/* Esercizio */}
      <Exercise
        title="Crea un Layout a 3 Card con Box Model"
        steps={[
          '📝 NOTA: Le 3 card saranno una sotto l\'altra (verticali). Nella prossima lezione imparerai come affiancarle orizzontalmente!',
          'Crea una cartella "box-model-layout" in VS Code',
          'Crea index.html con struttura base',
          'Aggiungi CSS universale: * { box-sizing: border-box; }',
          'Crea un container con class="container": width 90%, max-width 800px, margin 0 auto',
          'Dentro il container, crea 3 div con class="card" (una sotto l\'altra)',
          'Ogni card: width 100%, padding 25px, margin-bottom 20px',
          'Card: background-color diverso per ognuna, border 3px solid, border-radius 8px',
          'Aggiungi h3 e p dentro ogni card con margin adeguati',
          'Card h3: margin 0 0 15px 0',
          'Card p: margin 0 (ultimo margin già dato dal padding della card)',
          'Apri in Live Server - vedrai le 3 card una sotto l\'altra (verticali)',
          'Apri DevTools (F12) e ispeziona una card',
          'Guarda il Box Model diagram e verifica padding, border, margin',
          'Sperimenta cambiando padding e margin nei DevTools per vedere l\'effetto in tempo reale!'
        ]}
      />

      {/* Sfida */}
      <Challenge
        title="Dashboard con Box Model Maestria"
        description="Crea una dashboard completa che dimostra la tua padronanza del Box Model!"
        requirements={[
          'Pagina con header, sidebar, main content, footer (4 sezioni)',
          'Usa * { box-sizing: border-box; } all\'inizio',
          'Header: width 100%, height 80px, padding 20px, background colorato, position fixed top',
          'Sidebar: width 250px, min-height 100vh, padding 30px, background diverso, position fixed left',
          'Main content: margin-left 250px, margin-top 80px, padding 40px',
          'Main: crea 6 card in grid 3x2',
          'Ogni card: width 30%, padding 25px, margin-bottom 20px, border 2px, border-radius 10px',
          'Card: min-height 200px per contenuto variabile',
          'Footer: width 100%, padding 20px, background, text-align center',
          'Tutti gli elementi devono avere padding e margin corretti (no overlap!)',
          'Usa margin collapsing consapevolmente (spiega in un commento dove succede)',
          'Almeno 3 elementi con max-width per responsive',
          'Almeno 2 elementi con min-height',
          'Testa in DevTools: verifica che TUTTE le dimensioni siano corrette',
          'Il layout deve essere perfettamente allineato senza scroll orizzontale'
        ]}
        hint="Inizia disegnando il layout su carta! Poi crea la struttura HTML, applica box-sizing: border-box a tutto, e aggiungi gli stili uno alla volta verificando con i DevTools."
      />

      {/* Checklist */}
      <Checklist
        items={[
          'Capisco che ogni elemento HTML è una scatola rettangolare',
          'Conosco i 4 livelli del Box Model: content, padding, border, margin',
          'So che background-color riempie content + padding (ma NON margin)',
          'Capisco la differenza tra box-sizing: content-box e border-box',
          'So che border-box è meglio e più intuitivo per calcolare dimensioni',
          'So applicare box-sizing: border-box a tutti gli elementi con *',
          'Capisco il margin collapsing: i margin verticali si uniscono (viene usato il maggiore)',
          'So usare width, height per dimensioni fisse',
          'So usare max-width per contenitori responsive',
          'So usare min-height per altezze flessibili',
          'So che margin: 0 auto; centra un elemento orizzontalmente',
          'So aprire i DevTools (F12) e trovare il Box Model diagram',
          'So interpretare il diagramma del Box Model nei DevTools',
          'Ho completato l\'esercizio: layout a 3 colonne',
          'Ho completato la sfida: dashboard con box model perfetto'
        ]}
      />

      {/* Conclusione e Riepilogo */}
      <section className="mt-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Grandioso! Hai Conquistato il Box Model!</h2>
        <p className="text-xl mb-4">
          Ora capisci come OGNI elemento occupa spazio nella pagina! 📦
        </p>
        <p className="text-lg mb-6">
          Questo è uno dei concetti più importanti del CSS. Da qui in poi, tutto il resto diventa più facile!
        </p>

        <div className="bg-black bg-opacity-20 p-6 rounded border-2 border-white border-opacity-30 mb-6">
          <p className="font-bold mb-3 text-yellow-200 text-xl">📊 Riepilogo Completo CSS Finora</p>

          <div className="mb-4">
            <p className="font-bold text-yellow-200 mb-2">🎯 Selettori CSS (3):</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>elemento (Lezione 2) - es: <code className="bg-black bg-opacity-30 px-1 rounded">p</code></li>
              <li>.classe (Lezione 3) - es: <code className="bg-black bg-opacity-30 px-1 rounded">.card</code></li>
              <li>#id (Lezione 4) - es: <code className="bg-black bg-opacity-30 px-1 rounded">#header</code></li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-bold text-yellow-200 mb-2">🔮 Pseudo-classi (5):</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>:link, :visited, :hover, :active, :focus (Lezione 6)</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-bold text-yellow-200 mb-2">📏 Unità di Misura (6):</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>px (pixel fissi), % (percentuale), em/rem (relativi), vw/vh (viewport)</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-yellow-200 mb-2">🎨 Proprietà CSS (21 totali):</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>Lezione 1-2: color, background-color, border</li>
              <li>Lezione 3: font-size, font-weight, text-align</li>
              <li>Lezione 4: padding, margin, width</li>
              <li>Lezione 5: font-family, font-style, text-decoration, text-transform, letter-spacing, word-spacing</li>
              <li>Lezione 6: cursor, transition</li>
              <li><strong>Lezione 7 (3 NUOVE)</strong>: box-sizing, max-width, min-height ✨</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-400 bg-opacity-30 p-4 rounded border-2 border-green-300">
          <p className="font-bold mb-2">🚀 Prossima Lezione</p>
          <p className="text-lg">
            Imparerai tutto su <strong>Bordi e Sfondi</strong>! border-radius per angoli arrotondati,
            background-image, gradienti e molto altro! 🎨
          </p>
        </div>
      </section>
    </LessonLayout>
  );
}
