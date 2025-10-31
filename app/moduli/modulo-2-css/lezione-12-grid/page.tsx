import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import LessonPreview from '@/components/didattica/LessonPreview';

export default function Lezione12Grid() {
  const lezioni = getLezioniByModuloSlug('modulo-2-css');

  return (
    <LessonLayout
      moduloSlug="modulo-2-css"
      moduloTitolo="Modulo 2: CSS"
      lezioni={lezioni}
      lezioneSlug="lezione-12-grid"
      lezioneTitolo="Grid - Layout Bidimensionale"
    >
      <LessonHeader
        numero={12}
        titolo="Grid - Layout Bidimensionale"
        durata="2.5 ore"
        difficolta="media"
        obiettivi={[
          'Capire la differenza tra Flexbox (1D) e Grid (2D)',
          'Creare griglie con display: grid e grid-template-columns',
          'Definire righe con grid-template-rows',
          'Usare l\'unità fr (fraction) per colonne flessibili',
          'Far espandere elementi con grid-column e grid-row',
          'Creare layout complessi (header, sidebar, content, footer)',
        ]}
      />

        {/* Introduzione */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-4">
              📐 Layout Bidimensionali Potentissimi!
            </h2>
            <p className="text-xl mb-4">
              Nella Lezione 11 hai imparato <strong>Flexbox</strong> per layout <strong>unidimensionali</strong> (una riga O una colonna).
            </p>
            <p className="text-xl mb-4">
              🎯 <strong>Oggi scopri CSS Grid:</strong> layout <strong>bidimensionali</strong> con righe E colonne insieme!
            </p>
            <p className="text-lg">
              Perfetto per gallery, dashboard, layout di pagine complete e qualsiasi struttura complessa!
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="font-bold text-blue-700 mb-3">🎯 Cosa Imparerai</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Creare griglie con <code>display: grid</code></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Definire colonne con <code>grid-template-columns</code></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Definire righe con <code>grid-template-rows</code></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Usare l&apos;unità <code>fr</code> (fraction) per flessibilità</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Far espandere elementi su più celle</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Creare layout completi di pagine web</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h3 className="font-bold text-yellow-700 mb-3">🤔 Flexbox vs Grid - Quando Usare Cosa?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border-2 border-blue-300">
                <h4 className="font-bold text-blue-700 mb-2">💪 Flexbox (1D)</h4>
                <p className="text-sm mb-2">Una direzione: riga O colonna</p>
                <p className="text-xs text-gray-700 mb-2"><strong>Perfetto per:</strong></p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Navbar orizzontale</li>
                  <li>• Card in riga/colonna</li>
                  <li>• Centrare elementi</li>
                  <li>• Menu verticali</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-purple-300">
                <h4 className="font-bold text-purple-700 mb-2">📐 Grid (2D)</h4>
                <p className="text-sm mb-2">Due direzioni: righe E colonne</p>
                <p className="text-xs text-gray-700 mb-2"><strong>Perfetto per:</strong></p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Gallery fotografiche</li>
                  <li>• Layout pagine complete</li>
                  <li>• Dashboard complesse</li>
                  <li>• Tabelle personalizzate</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Il Primo Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🎬 Il Tuo Primo Grid!</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              Per creare una griglia, usi <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">display: grid</code>{' '}
              sul <strong>contenitore</strong>.
            </p>
            <p className="text-lg mb-4">
              Poi definisci quante <strong>colonne</strong> vuoi con{' '}
              <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">grid-template-columns</code>.
            </p>
          </div>

          <CodeExample
            language="html"
            code={`<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  gap: 20px;
  background-color: #F3F4F6;
  padding: 20px;
}

.item {
  background-color: #8B5CF6;
  color: white;
  padding: 30px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 8px;
}
</style>`}
          />

          <LessonPreview
            title="Risultato: 3 colonne da 200px ciascuna"
            html={`<style>
.grid-container-demo1 {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  gap: 20px;
  background-color: #F3F4F6;
  padding: 20px;
  border-radius: 8px;
}

.item-demo1 {
  background-color: #8B5CF6;
  color: white;
  padding: 30px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  border-radius: 8px;
}
</style>

<div class="grid-container-demo1">
  <div class="item-demo1">1</div>
  <div class="item-demo1">2</div>
  <div class="item-demo1">3</div>
  <div class="item-demo1">4</div>
  <div class="item-demo1">5</div>
  <div class="item-demo1">6</div>
</div>`}
          />

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h3 className="font-bold text-green-700 mb-3">✨ Cosa Succede?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ <code>display: grid</code> → Il container diventa una griglia</li>
              <li>✅ <code>grid-template-columns: 200px 200px 200px</code> → 3 colonne da 200px</li>
              <li>✅ <code>gap: 20px</code> → Spazio tra le celle (già visto con Flexbox!)</li>
              <li>✅ Gli elementi si dispongono automaticamente nelle celle</li>
              <li>✅ Dopo 3 elementi, va a capo automaticamente (nuova riga)</li>
            </ul>
          </div>
        </section>

        {/* grid-template-columns - Vari Modi */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">📏 grid-template-columns - Vari Modi</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              Puoi definire le colonne in <strong>molti modi</strong>:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <code>200px 200px 200px</code> - Larghezze fisse in pixel</li>
              <li>• <code>33% 33% 33%</code> - Percentuali (responsive!)</li>
              <li>• <code>1fr 1fr 1fr</code> - Frazioni dello spazio disponibile (NEW!)</li>
              <li>• <code>1fr 2fr 1fr</code> - Proporzioni diverse</li>
              <li>• <code>200px 1fr 200px</code> - Mix fisso + flessibile!</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-6">
            <h3 className="font-bold text-xl mb-3">🌟 Nuova Unità: fr (fraction)</h3>
            <p className="mb-2">
              <code className="bg-white bg-opacity-20 px-2 py-1 rounded text-gray-900 font-bold">fr</code> = frazione dello spazio <strong>disponibile</strong>
            </p>
            <p className="text-sm">
              📊 <code>1fr 1fr 1fr</code> = divide lo spazio in 3 parti uguali<br/>
              📊 <code>1fr 2fr 1fr</code> = la colonna centrale è DOPPIA delle altre<br/>
              📊 <code>200px 1fr</code> = prima colonna fissa, seconda prende tutto lo spazio restante
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4">Esempio 1: Tre Colonne Uguali con fr</h3>

          <CodeExample
            language="css"
            code={`.grid-equal {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  background-color: #F3F4F6;
  padding: 20px;
}

.box {
  background-color: #10B981;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}`}
          />

          <LessonPreview
            title="3 colonne uguali che si adattano allo spazio"
            html={`<style>
.grid-equal-demo {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  background-color: #F3F4F6;
  padding: 20px;
  border-radius: 8px;
}

.box-equal {
  background-color: #10B981;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}
</style>

<div class="grid-equal-demo">
  <div class="box-equal">1fr</div>
  <div class="box-equal">1fr</div>
  <div class="box-equal">1fr</div>
</div>`}
          />

          <h3 className="text-2xl font-bold mb-4 mt-8">Esempio 2: Colonna Centrale Doppia</h3>

          <CodeExample
            language="css"
            code={`.grid-proportion {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 15px;
  background-color: #F3F4F6;
  padding: 20px;
}

.box-small {
  background-color: #3B82F6;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}

.box-large {
  background-color: #EF4444;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}`}
          />

          <LessonPreview
            title="La colonna centrale è DOPPIA!"
            html={`<style>
.grid-proportion-demo {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 15px;
  background-color: #F3F4F6;
  padding: 20px;
  border-radius: 8px;
}

.box-small-demo {
  background-color: #3B82F6;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}

.box-large-demo {
  background-color: #EF4444;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}
</style>

<div class="grid-proportion-demo">
  <div class="box-small-demo">1fr</div>
  <div class="box-large-demo">2fr (DOPPIA!)</div>
  <div class="box-small-demo">1fr</div>
</div>`}
          />

          <h3 className="text-2xl font-bold mb-4 mt-8">Esempio 3: Mix Fisso + Flessibile</h3>

          <CodeExample
            language="css"
            code={`.grid-mix {
  display: grid;
  grid-template-columns: 150px 1fr 150px;
  gap: 15px;
  background-color: #F3F4F6;
  padding: 20px;
}

.box-fixed {
  background-color: #8B5CF6;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}

.box-flex {
  background-color: #F59E0B;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}`}
          />

          <LessonPreview
            title="Colonne laterali fisse, centrale flessibile"
            html={`<style>
.grid-mix-demo {
  display: grid;
  grid-template-columns: 150px 1fr 150px;
  gap: 15px;
  background-color: #F3F4F6;
  padding: 20px;
  border-radius: 8px;
}

.box-fixed-demo {
  background-color: #8B5CF6;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  font-size: 14px;
}

.box-flex-demo {
  background-color: #F59E0B;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}
</style>

<div class="grid-mix-demo">
  <div class="box-fixed-demo">150px fissi</div>
  <div class="box-flex-demo">1fr (prende tutto lo spazio!)</div>
  <div class="box-fixed-demo">150px fissi</div>
</div>`}
          />

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mt-6">
            <h3 className="font-bold text-purple-700 mb-3">💡 Quando Usare fr?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ <strong>Layout responsive</strong> - si adatta automaticamente</li>
              <li>✅ <strong>Proporzioni precise</strong> - 1fr 2fr = seconda colonna doppia</li>
              <li>✅ <strong>Sidebar + Content</strong> - 250px 1fr = sidebar fissa, content flessibile</li>
              <li>✅ <strong>Gallery uniformi</strong> - 1fr 1fr 1fr = 3 colonne sempre uguali</li>
            </ul>
          </div>
        </section>

        {/* grid-template-rows */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">📐 grid-template-rows - Controllare le Righe</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              Oltre alle colonne, puoi controllare anche l&apos;<strong>altezza delle righe</strong> con{' '}
              <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">grid-template-rows</code>.
            </p>
            <p className="text-lg">
              Funziona <strong>esattamente come grid-template-columns</strong>, ma per le righe!
            </p>
          </div>

          <CodeExample
            language="css"
            code={`.grid-rows {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 150px;
  gap: 15px;
  background-color: #F3F4F6;
  padding: 20px;
}

.row-item {
  background-color: #06B6D4;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}`}
          />

          <LessonPreview
            title="Prima riga 100px, seconda riga 150px"
            html={`<style>
.grid-rows-demo {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 150px;
  gap: 15px;
  background-color: #F3F4F6;
  padding: 20px;
  border-radius: 8px;
}

.row-item-demo {
  background-color: #06B6D4;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}
</style>

<div class="grid-rows-demo">
  <div class="row-item-demo">100px alto</div>
  <div class="row-item-demo">100px alto</div>
  <div class="row-item-demo">100px alto</div>
  <div class="row-item-demo">150px alto</div>
  <div class="row-item-demo">150px alto</div>
  <div class="row-item-demo">150px alto</div>
</div>`}
          />

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="font-bold text-blue-700 mb-3">📝 Nota Importante</h3>
            <p className="text-gray-700">
              <strong>Solitamente NON usi grid-template-rows</strong> per layout normali.<br/>
              Le righe si creano automaticamente in base al contenuto!<br/>
              <br/>
              Usi grid-template-rows solo quando vuoi <strong>altezze specifiche</strong> per ogni riga.
            </p>
          </div>
        </section>

        {/* Espandere elementi su più celle */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🎯 Espandere Elementi su Più Celle</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              A volte vuoi che un elemento <strong>occupi più celle</strong> (come un header largo quanto tutta la pagina).
            </p>
            <p className="text-lg mb-4">
              Usi:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <code className="bg-purple-100 px-2 py-1 rounded">grid-column: span 3;</code> → espandi su 3 colonne</li>
              <li>• <code className="bg-purple-100 px-2 py-1 rounded">grid-row: span 2;</code> → espandi su 2 righe</li>
            </ul>
          </div>

          <CodeExample
            language="html"
            code={`<div class="grid-span">
  <div class="header">Header (span 3 colonne)</div>
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>

<style>
.grid-span {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  background-color: #F3F4F6;
  padding: 20px;
}

.header {
  grid-column: span 3;
  background-color: #DC2626;
  color: white;
  padding: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  border-radius: 8px;
}

.box {
  background-color: #3B82F6;
  color: white;
  padding: 30px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}
</style>`}
          />

          <LessonPreview
            title="Header espanso su tutte e 3 le colonne!"
            html={`<style>
.grid-span-demo {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  background-color: #F3F4F6;
  padding: 20px;
  border-radius: 8px;
}

.header-span {
  grid-column: span 3;
  background-color: #DC2626;
  color: white;
  padding: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  border-radius: 8px;
}

.box-span {
  background-color: #3B82F6;
  color: white;
  padding: 30px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}
</style>

<div class="grid-span-demo">
  <div class="header-span">Header (span 3 colonne)</div>
  <div class="box-span">Box 1</div>
  <div class="box-span">Box 2</div>
  <div class="box-span">Box 3</div>
</div>`}
          />

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h3 className="font-bold text-green-700 mb-3">✨ Spiegazione</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ <code>grid-column: span 3</code> → L&apos;header si espande su 3 colonne</li>
              <li>✅ Perfetto per header, footer, banner</li>
              <li>✅ I box normali occupano 1 cella ciascuno (default)</li>
            </ul>
          </div>
        </section>

        {/* Layout Completo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🏗️ Layout Completo di Pagina</h2>

          <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-6 rounded-lg mb-6">
            <h3 className="font-bold text-xl mb-3">🎯 Il Pattern Più Usato nel Web!</h3>
            <p className="mb-2">
              Con Grid puoi creare il <strong>layout classico</strong> di un sito web:
            </p>
            <ul className="text-sm space-y-1">
              <li>• <strong>Header</strong> in alto (largo quanto tutta la pagina)</li>
              <li>• <strong>Sidebar</strong> a sinistra (larghezza fissa)</li>
              <li>• <strong>Main Content</strong> al centro (flessibile)</li>
              <li>• <strong>Footer</strong> in basso (largo quanto tutta la pagina)</li>
            </ul>
          </div>

          <CodeExample
            language="html"
            code={`<div class="page-layout">
  <header class="page-header">Header</header>
  <aside class="sidebar">Sidebar</aside>
  <main class="main-content">Main Content</main>
  <footer class="page-footer">Footer</footer>
</div>

<style>
.page-layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 80px 1fr 60px;
  gap: 15px;
  height: 500px;
  background-color: #F3F4F6;
  padding: 15px;
}

.page-header {
  grid-column: span 2;
  background-color: #1F2937;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  border-radius: 8px;
}

.sidebar {
  background-color: #3B82F6;
  color: white;
  padding: 20px;
  font-weight: bold;
  border-radius: 8px;
}

.main-content {
  background-color: white;
  padding: 30px;
  font-weight: bold;
  color: #1F2937;
  border-radius: 8px;
  border: 2px solid #E5E7EB;
}

.page-footer {
  grid-column: span 2;
  background-color: #1F2937;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}
</style>`}
          />

          <LessonPreview
            title="Layout completo: Header, Sidebar, Content, Footer"
            html={`<style>
.page-layout-demo {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 80px 1fr 60px;
  gap: 15px;
  height: 500px;
  background-color: #F3F4F6;
  padding: 15px;
  border-radius: 8px;
}

.page-header-demo {
  grid-column: span 2;
  background-color: #1F2937;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-demo {
  background-color: #3B82F6;
  color: white;
  padding: 20px;
  font-weight: bold;
  border-radius: 8px;
}

.main-content-demo {
  background-color: white;
  padding: 30px;
  font-weight: bold;
  color: #1F2937;
  border-radius: 8px;
  border: 2px solid #E5E7EB;
}

.page-footer-demo {
  grid-column: span 2;
  background-color: #1F2937;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<div class="page-layout-demo">
  <header class="page-header-demo">Header</header>
  <aside class="sidebar-demo">Sidebar</aside>
  <main class="main-content-demo">Main Content</main>
  <footer class="page-footer-demo">Footer</footer>
</div>`}
          />

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h3 className="font-bold text-yellow-700 mb-3">🔍 Analisi del Codice</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ <code>grid-template-columns: 200px 1fr</code> → Sidebar 200px, Content flessibile</li>
              <li>✅ <code>grid-template-rows: 80px 1fr 60px</code> → Header 80px, Content flessibile, Footer 60px</li>
              <li>✅ <code>grid-column: span 2</code> su Header e Footer → Si espandono su 2 colonne</li>
              <li>✅ <code>height: 500px</code> sul container → Altezza fissa per la demo</li>
              <li>✅ Sidebar e Main occupano automaticamente la riga centrale</li>
            </ul>
          </div>
        </section>

        {/* Tabella Comparativa */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">📊 Tabella Riepilogativa</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
              <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <tr>
                  <th className="border border-gray-300 p-4 text-left">Proprietà</th>
                  <th className="border border-gray-300 p-4 text-left">Descrizione</th>
                  <th className="border border-gray-300 p-4 text-left">Esempio</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 p-3"><code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">display: grid</code></td>
                  <td className="border border-gray-300 p-3">Attiva il Grid sul container</td>
                  <td className="border border-gray-300 p-3">.container {'{}'} display: grid; {'}'}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3"><code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">grid-template-columns</code></td>
                  <td className="border border-gray-300 p-3">Definisce numero e larghezza colonne</td>
                  <td className="border border-gray-300 p-3">1fr 1fr 1fr</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 p-3"><code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">grid-template-rows</code></td>
                  <td className="border border-gray-300 p-3">Definisce numero e altezza righe</td>
                  <td className="border border-gray-300 p-3">100px 200px</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3"><code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">gap</code></td>
                  <td className="border border-gray-300 p-3">Spazio tra righe e colonne</td>
                  <td className="border border-gray-300 p-3">gap: 20px;</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 p-3"><code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">fr</code></td>
                  <td className="border border-gray-300 p-3">Frazione dello spazio disponibile</td>
                  <td className="border border-gray-300 p-3">1fr 2fr (secondo doppio)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3"><code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">grid-column: span N</code></td>
                  <td className="border border-gray-300 p-3">Espandi elemento su N colonne</td>
                  <td className="border border-gray-300 p-3">grid-column: span 3;</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 p-3"><code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">grid-row: span N</code></td>
                  <td className="border border-gray-300 p-3">Espandi elemento su N righe</td>
                  <td className="border border-gray-300 p-3">grid-row: span 2;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Esercizio */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">💪 Esercizio Pratico</h2>

          <Exercise
            title="Gallery Fotografica Responsive"
            difficulty="media"
            steps={[
              'Crea un file HTML con un container class="gallery"',
              'Dentro il container, aggiungi 9 div class="photo" con testo "Photo 1", "Photo 2", etc.',
              'CSS: .gallery con display: grid, grid-template-columns: 1fr 1fr 1fr (3 colonne)',
              'Aggiungi gap: 20px',
              'Ogni .photo: background-color a scelta, padding 40px, text-align center, color white, font-weight bold',
              'Aggiungi border-radius: 12px alle foto',
              'La prima foto (aggiungi class="featured") deve espandersi su 2 colonne: grid-column: span 2',
              'Apri in Live Server e verifica che la gallery abbia 3 colonne e la prima foto sia doppia',
            ]}
          />
        </section>

        {/* Sfida */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🏆 Sfida Finale</h2>

          <Challenge
            title="Dashboard Completa"
            requirements={[
              'Crea un layout completo di dashboard con Grid',
              'Elementi richiesti: header (span tutte le colonne), sidebar 250px fissa, main content flessibile, 3 widget in riga (1fr ciascuno), footer (span tutto)',
              'Grid container: grid-template-columns: 250px 1fr, almeno 4 righe',
              'Header: background scuro, testo centrato, padding 30px',
              'Sidebar: background blu, lista di link (usa <ul><li>)',
              'Widget: 3 card in riga nella zona main (usa nested grid!), con titolo e contenuto',
              'Footer: background scuro, testo centrato',
              'Usa gap: 20px tra tutte le sezioni',
              'Almeno 5 colori diversi per distinguere le aree',
              'Altezza totale dashboard: 100vh (tutta la finestra)',
            ]}
          />
        </section>

        {/* Cosa hai imparato */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">🎉 Complimenti! Cosa Hai Imparato</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-3">✅ Concetti Fondamentali</h3>
                <ul className="space-y-2">
                  <li>✓ Grid vs Flexbox (2D vs 1D)</li>
                  <li>✓ display: grid attiva la griglia</li>
                  <li>✓ grid-template-columns per definire colonne</li>
                  <li>✓ grid-template-rows per definire righe</li>
                  <li>✓ L&apos;unità fr (fraction) per colonne flessibili</li>
                  <li>✓ gap per spaziatura</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">✅ Tecniche Avanzate</h3>
                <ul className="space-y-2">
                  <li>✓ grid-column: span N (espansione colonne)</li>
                  <li>✓ grid-row: span N (espansione righe)</li>
                  <li>✓ Mix px + fr (fisso + flessibile)</li>
                  <li>✓ Layout pagina completa</li>
                  <li>✓ Gallery responsive</li>
                  <li>✓ Nested grids (grid dentro grid)</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">🔥 Ora Sai Usare i 2 Sistemi di Layout Moderni!</h3>
              <p className="text-lg mb-2">
                <strong>Flexbox</strong> → Layout unidimensionali (navbar, card in riga, centratura)
              </p>
              <p className="text-lg">
                <strong>Grid</strong> → Layout bidimensionali (gallery, dashboard, pagine complete)
              </p>
            </div>
          </div>
        </section>

        {/* Prossima lezione */}
        <section className="mb-16">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="font-bold text-blue-700 mb-3">📚 Prossima Lezione</h3>
            <p className="text-gray-700">
              Hai completato i fondamentali di CSS Layout! Nella prossima lezione esploreremo concetti avanzati
              come la relazione tra contenitori padre e figli, overflow, e inheritance delle proprietà CSS.
            </p>
          </div>
        </section>

        {/* Riepilogo CSS imparati */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">📝 CSS Imparati in Questa Lezione</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <ul className="space-y-1 text-sm">
                <li><strong>Lezione 12 (NUOVE)</strong>:</li>
                <li>• display: grid ✨</li>
                <li>• grid-template-columns ✨</li>
                <li>• grid-template-rows ✨</li>
              </ul>
              <ul className="space-y-1 text-sm">
                <li><strong>Unità Nuova</strong>:</li>
                <li>• fr (fraction) ✨</li>
                <li><strong>Espansione</strong>:</li>
                <li>• grid-column: span N ✨</li>
                <li>• grid-row: span N ✨</li>
              </ul>
              <ul className="space-y-1 text-sm">
                <li><strong>Già Visto</strong>:</li>
                <li>• gap (Lezione 11)</li>
                <li>• border-radius (Lezione 8)</li>
                <li>• padding, margin (Lezione 4, 7)</li>
              </ul>
            </div>
          </div>
        </section>

    </LessonLayout>
  );
}
