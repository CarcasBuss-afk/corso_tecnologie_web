import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import LessonPreview from '@/components/didattica/LessonPreview';

export default function Lezione10Position() {
  const lezioni = getLezioniByModuloSlug('modulo-2-css');

  return (
    <LessonLayout
      moduloSlug="modulo-2-css"
      moduloTitolo="Modulo 2: CSS"
      lezioni={lezioni}
      lezioneSlug="lezione-10-position"
      lezioneTitolo="Position - Posizionamento Avanzato"
    >
      <LessonHeader
        numero={10}
        titolo="Position - Posizionamento Avanzato"
        durata="2 ore"
        difficolta="media"
        obiettivi={[
          'Capire cos\'è la proprietà position e il "positioning context"',
          'Usare position: relative per spostare elementi',
          'Usare position: absolute per posizionamenti precisi',
          'Creare elementi fissi con position: fixed',
          'Scoprire position: sticky (mix di relative e fixed)',
          'Controllare la sovrapposizione con z-index',
        ]}
      />

        {/* Introduzione */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-4">
              🎯 Controllo Totale sul Posizionamento!
            </h2>
            <p className="text-xl mb-4">
              Fino ad ora gli elementi seguivano il <strong>&quot;flusso del documento&quot;</strong>: dall&apos;alto verso il basso, da sinistra a destra.
            </p>
            <p className="text-xl mb-4">
              🚀 <strong>Oggi impari a posizionare elementi OVUNQUE vuoi!</strong>
            </p>
            <p className="text-lg">
              Con la proprietà <code className="bg-white bg-opacity-20 px-2 py-1 rounded text-gray-900 font-bold">position</code> puoi:
              creare tooltip, badge, navbar fisse, elementi sovrapposti e molto altro!
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="font-bold text-blue-700 mb-3">🎯 Cosa Imparerai</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>I 5 valori di position: static, relative, absolute, fixed, sticky</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Come usare top, right, bottom, left per posizionare</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Come sovrapporre elementi con z-index</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Creare badge, tooltip, menu fissi</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Capire il &quot;positioning context&quot;</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Cos'è position */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🧩 Cos&apos;è la Proprietà position?</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              La proprietà <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">position</code>{' '}
              determina <strong>come un elemento viene posizionato</strong> nel documento.
            </p>
            <p className="text-lg mb-4">
              🔑 <strong>Concetto chiave:</strong> Con position puoi spostare elementi dal loro posto naturale
              e posizionarli in modo preciso usando <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code>.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg mb-6">
            <h3 className="font-bold text-xl mb-3">🔑 I 5 Valori Principali</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">position: static;</p>
                <p className="text-sm text-gray-800">Default - elemento nel flusso normale</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">position: relative;</p>
                <p className="text-sm text-gray-800">Spostato rispetto alla sua posizione originale</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">position: absolute;</p>
                <p className="text-sm text-gray-800">Posizionato rispetto al parent positioned</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">position: fixed;</p>
                <p className="text-sm text-gray-800">Fisso rispetto alla viewport (schermo)</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded col-span-2">
                <p className="font-bold mb-2 text-gray-900">position: sticky;</p>
                <p className="text-sm text-gray-800">Mix tra relative e fixed - resta visibile scrollando</p>
              </div>
            </div>
          </div>
        </section>

        {/* position: static */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">📌 position: static (Default)</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Come Funziona</h3>
            <p className="text-lg mb-4">
              <code>position: static</code> è il valore <strong>di default</strong> di tutti gli elementi.
            </p>
            <ul className="list-disc ml-8 space-y-2 mb-4">
              <li>📄 Elemento nel <strong>flusso normale</strong> del documento</li>
              <li>❌ <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> NON funzionano</li>
              <li>❌ <code>z-index</code> NON funziona</li>
              <li>✅ È come se position non fosse specificato</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="font-bold text-blue-700 mb-2">💡 Quando Usarlo?</p>
              <p className="text-sm text-gray-700">
                Quasi mai! È il default, quindi non serve scriverlo. Serve solo per <strong>rimuovere</strong> un position
                già impostato (es. in JavaScript o CSS condizionale).
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h3 className="font-bold text-yellow-800 mb-2">📚 Nota Importante</h3>
            <p className="text-gray-700">
              D&apos;ora in poi quando diciamo <strong>&quot;positioned element&quot;</strong> intendiamo un elemento
              con position diversa da static (relative, absolute, fixed, sticky).
            </p>
          </div>
        </section>

        {/* position: relative */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">↔️ position: relative</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Come Funziona</h3>
            <p className="text-lg mb-4">
              Con <code>position: relative</code> puoi spostare un elemento <strong>rispetto alla sua posizione originale</strong>:
            </p>
            <ul className="list-disc ml-8 space-y-2 mb-4">
              <li>📍 Elemento mantiene il suo <strong>spazio originale</strong> nel flusso</li>
              <li>➡️ Puoi spostarlo con <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code></li>
              <li>👻 Lascia uno &quot;spazio vuoto&quot; dove era prima</li>
              <li>📦 Diventa <strong>positioning context</strong> per elementi absolute al suo interno</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="box normal">Box 1</div>
<div class="box moved">Box 2 Spostato</div>
<div class="box normal">Box 3</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.box {
  width: 150px;
  padding: 20px;
  margin-bottom: 10px;
  background-color: #3498DB;
  color: white;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}

.moved {
  position: relative;
  top: 20px;
  left: 40px;
  background-color: #E74C3C;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="position: relative - Box spostato ma spazio originale mantenuto"
            html={`<style>
.box-demo {
  width: 150px;
  padding: 20px;
  margin-bottom: 10px;
  background-color: #3498DB;
  color: white;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}

.moved-demo {
  position: relative;
  top: 20px;
  left: 40px;
  background-color: #E74C3C;
}
</style>

<div style="padding: 20px;">
  <div class="box-demo">Box 1</div>
  <div class="box-demo moved-demo">Box 2 Spostato</div>
  <div class="box-demo">Box 3</div>
</div>

<p style="margin-top: 20px; text-align: center; color: #666; font-weight: bold;">
  👆 Box 2 si è spostato (top: 20px, left: 40px) ma il suo spazio originale è rimasto vuoto!
</p>`}
          />

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-6">
            <h3 className="font-bold text-green-700 mb-3">💡 Quando Usare position: relative?</h3>
            <ul className="space-y-2">
              <li>✅ Spostare leggermente un elemento (es. badge, icona)</li>
              <li>✅ Creare un <strong>positioning context</strong> per elementi absolute figli</li>
              <li>✅ Applicare z-index per sovrapporre elementi</li>
            </ul>
          </div>
        </section>

        {/* position: absolute */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🎯 position: absolute (Il Più Potente!)</h2>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg mb-6">
            <h3 className="text-2xl font-bold mb-4">🚀 Posizionamento Preciso!</h3>
            <p className="text-lg mb-4">
              <code className="bg-white bg-opacity-20 px-2 py-1 rounded text-gray-900 font-bold">position: absolute</code> è
              perfetto per posizionare elementi con precisione millimetrica!
            </p>
            <ul className="space-y-2 ml-6">
              <li>✅ <strong>Esce dal flusso:</strong> non occupa più spazio</li>
              <li>✅ <strong>Posizionato rispetto al parent positioned più vicino</strong></li>
              <li>✅ <strong>Coordinate precise:</strong> top, right, bottom, left funzionano perfettamente</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Positioning Context - Concetto Chiave! 🔑</h3>
            <p className="text-lg mb-4">
              Un elemento <code>absolute</code> si posiziona rispetto al primo <strong>parent positioned</strong> che trova
              (relative, absolute, fixed, sticky).
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
              <p className="font-bold text-yellow-800 mb-2">⚠️ Attenzione!</p>
              <p className="text-sm text-gray-700">
                Se NON trova parent positioned, si posiziona rispetto a <code>&lt;body&gt;</code> (l&apos;intera pagina)!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="container">
  <div class="box">
    Contenitore Relative
    <div class="badge">NUOVO</div>
  </div>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.container {
  padding: 20px;
}

.box {
  position: relative;
  width: 250px;
  padding: 30px;
  background-color: #3498DB;
  color: white;
  border-radius: 12px;
  font-weight: bold;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 12px;
  background-color: #E74C3C;
  color: white;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="position: absolute - Badge posizionato in alto a destra"
            html={`<style>
.container-demo {
  padding: 20px;
}

.box-absolute {
  position: relative;
  width: 250px;
  padding: 30px;
  background-color: #3498DB;
  color: white;
  border-radius: 12px;
  font-weight: bold;
  margin: 0 auto;
}

.badge-demo {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 12px;
  background-color: #E74C3C;
  color: white;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}
</style>

<div class="container-demo">
  <div class="box-absolute">
    Contenitore Relative
    <div class="badge-demo">NUOVO</div>
  </div>
</div>

<p style="margin-top: 20px; text-align: center; color: #666; font-weight: bold;">
  🎯 Il badge è posizionato 10px dall'alto e 10px da destra rispetto al box blu (parent relative)!
</p>`}
          />

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
            <h3 className="font-bold text-blue-700 mb-3">💡 Pattern Comune: Container Relative + Child Absolute</h3>
            <p className="text-gray-700 mb-3">
              Questo è il pattern più usato:
            </p>
            <ol className="list-decimal ml-8 space-y-2 text-gray-700">
              <li>Parent: <code>position: relative</code> (crea positioning context)</li>
              <li>Child: <code>position: absolute</code> + coordinate (top, right, etc.)</li>
              <li>Il child si posiziona rispetto al parent!</li>
            </ol>
          </div>
        </section>

        {/* position: fixed */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">📌 position: fixed</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Come Funziona</h3>
            <p className="text-lg mb-4">
              Con <code>position: fixed</code> l&apos;elemento rimane <strong>fisso rispetto alla viewport</strong> (finestra del browser):
            </p>
            <ul className="list-disc ml-8 space-y-2 mb-4">
              <li>🔒 <strong>Sempre visibile</strong> anche scrollando la pagina</li>
              <li>🚫 Esce completamente dal flusso del documento</li>
              <li>📍 Si posiziona rispetto alla <strong>viewport</strong>, non ai parent</li>
              <li>✅ Perfetto per navbar, pulsanti &quot;torna su&quot;, chat widget</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
              <p className="font-bold text-yellow-800 mb-2">💡 Differenza con absolute</p>
              <p className="text-sm text-gray-700">
                <strong>absolute:</strong> posizionato rispetto al parent positioned<br/>
                <strong>fixed:</strong> posizionato rispetto alla viewport (schermo)
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<button class="back-to-top">
  ↑ Torna Su
</button>

<div class="content">
  Contenuto pagina...
  (scrollabile)
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 15px 20px;
  background-color: #3498DB;
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  cursor: pointer;
}

.back-to-top:hover {
  background-color: #2980B9;
}`}
              />
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="font-bold text-blue-700 mb-2">✨ Hai già visto fixed!</h3>
            <p className="text-gray-700">
              Ricordi la navbar superiore e la sidebar laterale del corso? Usano <code>position: fixed</code> (o <code>sticky</code>)
              per restare sempre visibili! 🎯
            </p>
          </div>
        </section>

        {/* position: sticky */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🍯 position: sticky (Il Più Intelligente!)</h2>

          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-8 rounded-lg mb-6">
            <h3 className="text-2xl font-bold mb-4">🎭 Il Meglio di Due Mondi!</h3>
            <p className="text-lg mb-4">
              <code className="bg-white bg-opacity-20 px-2 py-1 rounded text-gray-900 font-bold">position: sticky</code> si
              comporta come <strong>relative</strong> finché scrolli, poi diventa <strong>fixed</strong>!
            </p>
            <ul className="space-y-2 ml-6">
              <li>✅ Inizialmente nel flusso normale (come relative)</li>
              <li>✅ Quando scrolli fino alla soglia (es. top: 0), diventa fisso</li>
              <li>✅ Perfetto per header di tabelle, menu di sezione</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Come Funziona</h3>
            <p className="text-lg mb-4">
              Sticky è come dire: <em>&quot;Resta nella tua posizione normale, ma quando stai per uscire dallo schermo
              scrollando, FERMATI e resta visibile!&quot;</em>
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
              <p className="font-bold text-blue-700 mb-2">🔑 Requisito Importante</p>
              <p className="text-sm text-gray-700">
                Devi specificare almeno una delle coordinate: <code>top</code>, <code>right</code>, <code>bottom</code>, o <code>left</code>.
                Altrimenti non funziona!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<h2 class="section-title">
  Sezione 1
</h2>
<p>Contenuto sezione...</p>
<p>Scrollando, il titolo resta in alto!</p>

<h2 class="section-title">
  Sezione 2
</h2>
<p>Altro contenuto...</p>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.section-title {
  position: sticky;
  top: 0;
  background-color: #3498DB;
  color: white;
  padding: 15px 20px;
  margin: 0;
  border-radius: 8px;
  font-weight: bold;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="position: sticky - Titoli che si attaccano in alto scrollando"
            html={`<style>
.section-title {
  position: sticky;
  top: 0;
  background-color: #3498DB;
  color: white;
  padding: 15px 20px;
  margin: 0;
  border-radius: 8px;
  font-weight: bold;
}

.sticky-container {
  height: 400px;
  overflow-y: auto;
  border: 2px solid #E0E0E0;
  border-radius: 12px;
  padding: 20px;
  background-color: #F8F9FA;
}
</style>

<div class="sticky-container">
  <h2 class="section-title">Sezione 1</h2>
  <p style="margin: 20px 0;">Contenuto della sezione 1...</p>
  <p style="margin: 20px 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  <p style="margin: 20px 0;">Prova a scrollare verso il basso! 👇</p>
  <p style="margin: 20px 0;">Il titolo "Sezione 1" resterà fermo in alto finché...</p>
  <p style="margin: 20px 0;">...non arriva il titolo "Sezione 2" che lo sostituirà!</p>

  <h2 class="section-title">Sezione 2</h2>
  <p style="margin: 20px 0;">Contenuto della sezione 2...</p>
  <p style="margin: 20px 0;">Continua a scrollare! Il titolo "Sezione 2" ora è sticky.</p>
  <p style="margin: 20px 0;">Mentre "Sezione 1" è scomparso scrollando.</p>
  <p style="margin: 20px 0;">Più contenuto per vedere l'effetto...</p>
  <p style="margin: 20px 0;">Ancora un po'...</p>

  <h2 class="section-title">Sezione 3</h2>
  <p style="margin: 20px 0;">Contenuto della sezione 3...</p>
  <p style="margin: 20px 0;">Ora "Sezione 3" è sticky!</p>
  <p style="margin: 20px 0;">Questa è l'ultima sezione.</p>
  <p style="margin: 20px 0;">Prova a scrollare su e giù per vedere l'effetto completo! 🎯</p>
  <p style="margin: 20px 0;">Contenuto extra per permettere lo scroll...</p>
  <p style="margin: 20px 0;">Ancora un po' di testo...</p>
  <p style="margin: 20px 0;">Questo permette al titolo "Sezione 3" di restare sticky in alto!</p>
  <p style="margin: 20px 0;">Senza questo contenuto extra, il titolo rimarrebbe a metà.</p>
  <p style="margin: 20px 0;">Fine del contenuto! 👋</p>
</div>

<p style="margin-top: 20px; text-align: center; color: #666; font-weight: bold;">
  📜 Scrolla il riquadro sopra! I titoli si "attaccano" in alto (sticky) finché non arriva il titolo successivo.
</p>`}
          />

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
            <h3 className="font-bold text-yellow-800 mb-3">⚠️ Importante: Serve Contenuto Sufficiente!</h3>
            <p className="text-gray-700 mb-3">
              Perché l&apos;ultimo titolo sticky funzioni correttamente, serve <strong>abbastanza contenuto</strong> dopo di esso
              per permettere lo scroll.
            </p>
            <p className="text-gray-700 mb-3">
              Se il contenuto finisce subito, il titolo resta &quot;a metà&quot; perché non ha più spazio per scrollare via!
            </p>
            <p className="text-gray-700">
              💡 <strong>Soluzione:</strong> Aggiungi più paragrafi o usa <code>padding-bottom</code> sul container scrollabile.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-6">
            <h3 className="font-bold text-green-700 mb-3">💡 Quando Usare sticky?</h3>
            <ul className="space-y-2">
              <li>✅ Header di tabelle che restano visibili scrollando</li>
              <li>✅ Menu di navigazione che si &quot;attacca&quot; in alto</li>
              <li>✅ Titoli di sezione sempre visibili</li>
              <li>✅ Sidebar che scorre con la pagina ma resta visibile</li>
            </ul>
          </div>
        </section>

        {/* z-index */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">📚 z-index - Controllare la Sovrapposizione</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Cos&apos;è z-index?</h3>
            <p className="text-lg mb-4">
              Quando usi position (tranne static), gli elementi possono <strong>sovrapporsi</strong>.
            </p>
            <p className="text-lg mb-4">
              <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">z-index</code> controlla
              chi sta <strong>sopra</strong> e chi sta <strong>sotto</strong>:
            </p>
            <ul className="list-disc ml-8 space-y-2">
              <li>📈 <strong>Numero più alto</strong> = elemento più in alto (sopra gli altri)</li>
              <li>📉 <strong>Numero più basso</strong> = elemento più in basso (sotto gli altri)</li>
              <li>🔢 Valori: numeri interi (anche negativi!)</li>
              <li>⚠️ Funziona SOLO su positioned elements (non su static)</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="container-overlap">
  <div class="box red">z-index: 1</div>
  <div class="box blue">z-index: 2</div>
  <div class="box green">z-index: 3</div>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.container-overlap {
  position: relative;
  height: 200px;
}

.box {
  position: absolute;
  width: 120px;
  height: 120px;
  color: white;
  padding: 15px;
  font-weight: bold;
  border-radius: 8px;
}

.red {
  top: 20px;
  left: 20px;
  background-color: #E74C3C;
  z-index: 1;
}

.blue {
  top: 60px;
  left: 60px;
  background-color: #3498DB;
  z-index: 2;
}

.green {
  top: 100px;
  left: 100px;
  background-color: #2ECC71;
  z-index: 3;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="z-index - Box sovrapposti con ordine controllato"
            html={`<style>
.container-zindex {
  position: relative;
  height: 220px;
  background-color: #F8F9FA;
  border-radius: 12px;
  padding: 20px;
}

.box-zindex {
  position: absolute;
  width: 120px;
  height: 120px;
  color: white;
  padding: 15px;
  font-weight: bold;
  border-radius: 8px;
  border: 3px solid rgba(0,0,0,0.2);
}

.red-box {
  top: 40px;
  left: 40px;
  background-color: #E74C3C;
  z-index: 1;
}

.blue-box {
  top: 80px;
  left: 80px;
  background-color: #3498DB;
  z-index: 2;
}

.green-box {
  top: 120px;
  left: 120px;
  background-color: #2ECC71;
  z-index: 3;
}
</style>

<div class="container-zindex">
  <div class="box-zindex red-box">z-index: 1<br/>(sotto)</div>
  <div class="box-zindex blue-box">z-index: 2<br/>(mezzo)</div>
  <div class="box-zindex green-box">z-index: 3<br/>(sopra)</div>
</div>

<p style="margin-top: 20px; text-align: center; color: #666; font-weight: bold;">
  📚 Il box verde (z-index: 3) è sopra tutti! Box rosso (z-index: 1) è sotto tutti.
</p>`}
          />

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
            <h3 className="font-bold text-blue-700 mb-3">💡 Valori Comuni di z-index</h3>
            <div className="space-y-2 text-gray-700">
              <p><code>z-index: -1</code> → Dietro al contenuto normale</p>
              <p><code>z-index: 0</code> → Default (come non avere z-index)</p>
              <p><code>z-index: 1-10</code> → Elementi leggermente sopra</p>
              <p><code>z-index: 100</code> → Tooltip, dropdown</p>
              <p><code>z-index: 1000</code> → Modal, popup</p>
              <p><code>z-index: 9999</code> → Elementi sempre sopra tutto</p>
            </div>
          </div>
        </section>

        {/* Esempio Completo: Tooltip */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">✨ Esempio Completo: Tooltip con Hover</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              Combiniamo tutto quello che abbiamo imparato per creare un tooltip professionale:
            </p>
            <ul className="list-disc ml-8 space-y-2">
              <li>✅ Container: <code>position: relative</code> (positioning context)</li>
              <li>✅ Tooltip: <code>position: absolute</code> (posizionamento preciso)</li>
              <li>✅ <code>:hover</code> per mostrare/nascondere (già imparato Lezione 6!)</li>
              <li>✅ <code>z-index</code> per metterlo sopra tutto</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="tooltip-container">
  <button class="btn-tooltip">
    Passa sopra
  </button>
  <div class="tooltip-box">
    Questo è un tooltip!
  </div>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.tooltip-container {
  position: relative;
  display: inline-block;
}

.btn-tooltip {
  padding: 12px 24px;
  background-color: #3498DB;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

.btn-tooltip:hover {
  background-color: #2980B9;
}

.tooltip-box {
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -75px;
  margin-bottom: 10px;
  width: 150px;
  padding: 10px;
  background-color: #2C3E50;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
  display: none;
  z-index: 100;
}

.tooltip-container:hover .tooltip-box {
  display: block;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="Tooltip Interattivo - Passa sopra il bottone!"
            html={`<style>
.tooltip-container-demo {
  position: relative;
  display: inline-block;
}

.btn-tooltip-demo {
  padding: 12px 24px;
  background-color: #3498DB;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}

.btn-tooltip-demo:hover {
  background-color: #2980B9;
}

.tooltip-box-demo {
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -75px;
  margin-bottom: 10px;
  width: 150px;
  padding: 10px;
  background-color: #2C3E50;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-size: 14px;
  display: none;
  z-index: 100;
}

.tooltip-container-demo:hover .tooltip-box-demo {
  display: block;
}
</style>

<div style="text-align: center; padding: 60px 20px;">
  <div class="tooltip-container-demo">
    <button class="btn-tooltip-demo">
      Passa sopra
    </button>
    <div class="tooltip-box-demo">
      Questo è un tooltip!
    </div>
  </div>
</div>

<p style="margin-top: 20px; text-align: center; color: #666; font-weight: bold;">
  💡 Passa il mouse sul bottone per vedere il tooltip apparire!
</p>`}
          />

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
            <h3 className="font-bold text-yellow-800 mb-3">🔍 Come Funziona il Posizionamento</h3>
            <div className="space-y-2 text-gray-700">
              <p><code>bottom: 100%</code> → Posiziona il tooltip sopra il bottone (al 100% dall&apos;altezza)</p>
              <p><code>left: 50%</code> → Parte dal centro orizzontale</p>
              <p><code>margin-left: -75px</code> → Si sposta indietro di metà larghezza per centrarlo perfettamente (150px / 2 = 75px)</p>
              <p><code>margin-bottom: 10px</code> → Spazio tra tooltip e bottone</p>
            </div>
          </div>
        </section>

        {/* Tabella Riepilogativa */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">📊 Tabella Riepilogativa</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-purple-100 dark:bg-purple-900">
                  <th className="border border-gray-300 p-3 text-left">Position</th>
                  <th className="border border-gray-300 p-3">Nel flusso?</th>
                  <th className="border border-gray-300 p-3">Coordinate?</th>
                  <th className="border border-gray-300 p-3">Posizionato rispetto a</th>
                  <th className="border border-gray-300 p-3">Uso principale</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-bold">static</td>
                  <td className="border border-gray-300 p-3 text-center">✅ Sì</td>
                  <td className="border border-gray-300 p-3 text-center">❌ No</td>
                  <td className="border border-gray-300 p-3">-</td>
                  <td className="border border-gray-300 p-3">Default normale</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 p-3 font-bold">relative</td>
                  <td className="border border-gray-300 p-3 text-center">✅ Sì</td>
                  <td className="border border-gray-300 p-3 text-center">✅ Sì</td>
                  <td className="border border-gray-300 p-3">Posizione originale</td>
                  <td className="border border-gray-300 p-3">Spostamenti lievi, context per absolute</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-bold">absolute</td>
                  <td className="border border-gray-300 p-3 text-center">❌ No</td>
                  <td className="border border-gray-300 p-3 text-center">✅ Sì</td>
                  <td className="border border-gray-300 p-3">Parent positioned</td>
                  <td className="border border-gray-300 p-3">Badge, tooltip, overlay</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 p-3 font-bold">fixed</td>
                  <td className="border border-gray-300 p-3 text-center">❌ No</td>
                  <td className="border border-gray-300 p-3 text-center">✅ Sì</td>
                  <td className="border border-gray-300 p-3">Viewport (schermo)</td>
                  <td className="border border-gray-300 p-3">Navbar, pulsanti torna su</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-bold">sticky</td>
                  <td className="border border-gray-300 p-3 text-center">⚡ Ibrido</td>
                  <td className="border border-gray-300 p-3 text-center">✅ Sì</td>
                  <td className="border border-gray-300 p-3">Parent scrollabile</td>
                  <td className="border border-gray-300 p-3">Header tabelle, menu sezione</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Esercizio */}
        <Exercise
          title="Crea una Card Prodotto con Badge e Tooltip"
          steps={[
            {
              title: "Crea index.html con struttura base",
              code: {
                language: "html",
                code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Prodotto</title>
</head>
<body>
  <h1>Card con Position</h1>
</body>
</html>`,
                highlightLines: []
              }
            },
            {
              title: "Collega style.css",
              code: {
                language: "html",
                code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Prodotto</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Card con Position</h1>
</body>
</html>`,
                highlightLines: [7]
              }
            },
            {
              title: "Crea style.css con reset",
              code: {
                language: "css",
                code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  padding: 40px;
  background-color: #F5F5F5;
}`,
                highlightLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
              }
            },
            {
              title: "Crea la card nel HTML",
              code: {
                language: "html",
                code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Prodotto</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Card con Position</h1>

  <div class="card-product">
    <!-- Contenuto card qui -->
  </div>
</body>
</html>`,
                highlightLines: [12, 13, 14]
              }
            },
            {
              title: "Stila la card con position: relative",
              code: {
                language: "css",
                code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  padding: 40px;
  background-color: #F5F5F5;
}

.card-product {
  position: relative;
  width: 300px;
  border: 2px solid #E0E0E0;
  border-radius: 12px;
  background-color: white;
  margin: 0 auto;
}`,
                highlightLines: [13, 14, 15, 16, 17, 18, 19, 20]
              }
            },
            {
              title: "Aggiungi l'immagine prodotto e il badge",
              code: {
                language: "html",
                code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Prodotto</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Card con Position</h1>

  <div class="card-product">
    <div class="product-image">
      <span class="badge">NUOVO</span>
    </div>
  </div>
</body>
</html>`,
                highlightLines: [13, 14, 15]
              }
            },
            {
              title: "Stila l'immagine prodotto",
              code: {
                language: "css",
                code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  padding: 40px;
  background-color: #F5F5F5;
}

.card-product {
  position: relative;
  width: 300px;
  border: 2px solid #E0E0E0;
  border-radius: 12px;
  background-color: white;
  margin: 0 auto;
}

.product-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px 12px 0 0;
}`,
                highlightLines: [22, 23, 24, 25, 26]
              }
            },
            {
              title: "Stila il badge con position: absolute",
              code: {
                language: "css",
                code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  padding: 40px;
  background-color: #F5F5F5;
}

.card-product {
  position: relative;
  width: 300px;
  border: 2px solid #E0E0E0;
  border-radius: 12px;
  background-color: white;
  margin: 0 auto;
}

.product-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px 12px 0 0;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 15px;
  background-color: #E74C3C;
  color: white;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  z-index: 10;
}`,
                highlightLines: [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
              }
            },
            {
              title: "Aggiungi le info prodotto nel HTML",
              code: {
                language: "html",
                code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Prodotto</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Card con Position</h1>

  <div class="card-product">
    <div class="product-image">
      <span class="badge">NUOVO</span>
    </div>

    <div class="product-info">
      <h2>Smartphone X Pro</h2>
      <p>Ultimo modello con fotocamera 108MP e 5G</p>
      <p class="price">€ 799</p>
    </div>
  </div>
</body>
</html>`,
                highlightLines: [17, 18, 19, 20, 21]
              }
            },
            {
              title: "Stila le info prodotto",
              code: {
                language: "css",
                code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  padding: 40px;
  background-color: #F5F5F5;
}

.card-product {
  position: relative;
  width: 300px;
  border: 2px solid #E0E0E0;
  border-radius: 12px;
  background-color: white;
  margin: 0 auto;
}

.product-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px 12px 0 0;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 15px;
  background-color: #E74C3C;
  color: white;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  z-index: 10;
}

.product-info {
  padding: 20px;
}

.product-info h2 {
  margin: 0 0 10px 0;
  color: #2C3E50;
  font-size: 20px;
}

.product-info p {
  margin: 0 0 10px 0;
  color: #7F8C8D;
  line-height: 1.6;
}

.price {
  font-size: 24px;
  color: #E74C3C;
  font-weight: bold;
  margin-top: 15px;
}`,
                highlightLines: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61]
              }
            },
            {
              title: "Aggiungi il bottone",
              code: {
                language: "html",
                code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Prodotto</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Card con Position</h1>

  <div class="card-product">
    <div class="product-image">
      <span class="badge">NUOVO</span>
    </div>

    <div class="product-info">
      <h2>Smartphone X Pro</h2>
      <p>Ultimo modello con fotocamera 108MP e 5G</p>
      <p class="price">€ 799</p>
      <button class="buy">Aggiungi al Carrello</button>
    </div>
  </div>
</body>
</html>`,
                highlightLines: [21]
              }
            },
            {
              title: "Stila il bottone con hover",
              code: {
                language: "css",
                code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  padding: 40px;
  background-color: #F5F5F5;
}

.card-product {
  position: relative;
  width: 300px;
  border: 2px solid #E0E0E0;
  border-radius: 12px;
  background-color: white;
  margin: 0 auto;
}

.product-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px 12px 0 0;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 15px;
  background-color: #E74C3C;
  color: white;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  z-index: 10;
}

.product-info {
  padding: 20px;
}

.product-info h2 {
  margin: 0 0 10px 0;
  color: #2C3E50;
  font-size: 20px;
}

.product-info p {
  margin: 0 0 10px 0;
  color: #7F8C8D;
  line-height: 1.6;
}

.price {
  font-size: 24px;
  color: #E74C3C;
  font-weight: bold;
  margin-top: 15px;
}

.buy {
  padding: 12px 30px;
  background-color: #3498DB;
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 15px;
  transition: all 0.3s;
}

.buy:hover {
  background-color: #2980B9;
}`,
                highlightLines: [63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77]
              }
            },
            {
              title: "Aggiungi tooltip nel HTML",
              code: {
                language: "html",
                code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Prodotto</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Card con Position</h1>

  <div class="card-product">
    <div class="product-image">
      <span class="badge">NUOVO</span>
    </div>

    <div class="product-info">
      <h2>
        Smartphone X Pro
        <div class="tooltip-wrapper">
          <span class="info-icon">ℹ️</span>
          <div class="tooltip-text">Disponibile in 3 colori: Nero, Bianco, Blu</div>
        </div>
      </h2>
      <p>Ultimo modello con fotocamera 108MP e 5G</p>
      <p class="price">€ 799</p>
      <button class="buy">Aggiungi al Carrello</button>
    </div>
  </div>
</body>
</html>`,
                highlightLines: [20, 21, 22, 23]
              }
            },
            {
              title: "Stila il wrapper tooltip con position: relative",
              code: {
                language: "css",
                code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  padding: 40px;
  background-color: #F5F5F5;
}

.card-product {
  position: relative;
  width: 300px;
  border: 2px solid #E0E0E0;
  border-radius: 12px;
  background-color: white;
  margin: 0 auto;
}

.product-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px 12px 0 0;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 15px;
  background-color: #E74C3C;
  color: white;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  z-index: 10;
}

.product-info {
  padding: 20px;
}

.product-info h2 {
  margin: 0 0 10px 0;
  color: #2C3E50;
  font-size: 20px;
}

.product-info p {
  margin: 0 0 10px 0;
  color: #7F8C8D;
  line-height: 1.6;
}

.price {
  font-size: 24px;
  color: #E74C3C;
  font-weight: bold;
  margin-top: 15px;
}

.buy {
  padding: 12px 30px;
  background-color: #3498DB;
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 15px;
  transition: all 0.3s;
}

.buy:hover {
  background-color: #2980B9;
}

.tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.info-icon {
  cursor: pointer;
  font-size: 18px;
}`,
                highlightLines: [79, 80, 81, 82, 83, 84, 85, 86, 87, 88]
              }
            },
            {
              title: "Stila il tooltip con position: absolute",
              code: {
                language: "css",
                code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  padding: 40px;
  background-color: #F5F5F5;
}

.card-product {
  position: relative;
  width: 300px;
  border: 2px solid #E0E0E0;
  border-radius: 12px;
  background-color: white;
  margin: 0 auto;
}

.product-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px 12px 0 0;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 15px;
  background-color: #E74C3C;
  color: white;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  z-index: 10;
}

.product-info {
  padding: 20px;
}

.product-info h2 {
  margin: 0 0 10px 0;
  color: #2C3E50;
  font-size: 20px;
}

.product-info p {
  margin: 0 0 10px 0;
  color: #7F8C8D;
  line-height: 1.6;
}

.price {
  font-size: 24px;
  color: #E74C3C;
  font-weight: bold;
  margin-top: 15px;
}

.buy {
  padding: 12px 30px;
  background-color: #3498DB;
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 15px;
  transition: all 0.3s;
}

.buy:hover {
  background-color: #2980B9;
}

.tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.info-icon {
  cursor: pointer;
  font-size: 18px;
}

.tooltip-text {
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -75px;
  margin-bottom: 10px;
  width: 150px;
  padding: 8px;
  background-color: #2C3E50;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-size: 12px;
  display: none;
  z-index: 100;
}`,
                highlightLines: [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106]
              }
            },
            {
              title: "Aggiungi effetto hover per mostrare tooltip",
              code: {
                language: "css",
                code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  padding: 40px;
  background-color: #F5F5F5;
}

.card-product {
  position: relative;
  width: 300px;
  border: 2px solid #E0E0E0;
  border-radius: 12px;
  background-color: white;
  margin: 0 auto;
}

.product-image {
  height: 200px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px 12px 0 0;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 15px;
  background-color: #E74C3C;
  color: white;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  z-index: 10;
}

.product-info {
  padding: 20px;
}

.product-info h2 {
  margin: 0 0 10px 0;
  color: #2C3E50;
  font-size: 20px;
}

.product-info p {
  margin: 0 0 10px 0;
  color: #7F8C8D;
  line-height: 1.6;
}

.price {
  font-size: 24px;
  color: #E74C3C;
  font-weight: bold;
  margin-top: 15px;
}

.buy {
  padding: 12px 30px;
  background-color: #3498DB;
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 15px;
  transition: all 0.3s;
}

.buy:hover {
  background-color: #2980B9;
}

.tooltip-wrapper {
  position: relative;
  display: inline-block;
}

.info-icon {
  cursor: pointer;
  font-size: 18px;
}

.tooltip-text {
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -75px;
  margin-bottom: 10px;
  width: 150px;
  padding: 8px;
  background-color: #2C3E50;
  color: white;
  text-align: center;
  border-radius: 6px;
  font-size: 12px;
  display: none;
  z-index: 100;
}

.tooltip-wrapper:hover .tooltip-text {
  display: block;
}`,
                highlightLines: [108, 109, 110]
              }
            },
            "Salva tutti i file (Ctrl+S su HTML e CSS) e apri in Live Server (doppio clic + F5)",
            "Osserva il badge 'NUOVO' posizionato in alto a destra sull'immagine",
            "Passa il mouse sull'icona info (ℹ️) - apparirà il tooltip sopra di essa!",
            "Il tooltip scompare quando togli il mouse - tutto grazie a position: absolute!"
          ]}
          experiments={[
            "Cambia le coordinate del badge (top: 10px; right: 10px) con (bottom: 10px; left: 10px) - il badge si sposta in basso a sinistra!",
            "Rimuovi position: relative dalla .card-product - il badge si posizionerà rispetto alla pagina invece che alla card",
            "Cambia bottom: 100% del tooltip in top: 100% - il tooltip apparirà sotto invece che sopra",
            "Cambia z-index del badge da 10 a 1 - potrebbe andare sotto altri elementi",
            "Aggiungi un secondo badge con position: absolute; top: 10px; left: 10px; - avrai 2 badge agli angoli opposti!"
          ]}
        />

        {/* Challenge */}
        <Challenge
          title="Landing Page con Navbar Fissa e Sezioni Sticky"
          description="Crea una landing page completa con navbar fixed, pulsante torna su, e titoli di sezione sticky. Usa tutti i position imparati!"
          requirements={[
            'Crea "landing-position" con index.html e style.css',
            'Navbar: position fixed, top 0, left 0, right 0, z-index 1000, background-color #2C3E50, color white, padding 15px 20px, height 60px',
            'Navbar con logo a sinistra e 3 link menu a destra',
            'Body: padding-top 60px (compensa navbar fixed)',
            'Hero section: height 100vh, background gradient, text-align center, padding-top 200px',
            'Crea 3 sezioni con position relative (per badge)',
            'Ogni sezione: h2.section-title (position sticky, top 60px, background-color, padding 15px, z-index 100)',
            'Ogni sezione: almeno 500px di contenuto per testare sticky',
            'Badge "HOT" su una sezione: position absolute, top 20px, right 20px, background #E74C3C, padding 8px 15px, border-radius 20px',
            'Pulsante "Torna Su": position fixed, bottom 30px, right 30px, width 50px, height 50px, border-radius 50%, background #3498DB, color white, border none, font-size 20px, cursor pointer, z-index 500',
            'Hover pulsante: background-color #2980B9',
            'Tooltip su un elemento: container relative + tooltip absolute',
            'Footer: background #2C3E50, color white, padding 40px, text-align center',
            'Testa scrollando: navbar sempre fissa, titoli sezioni diventano sticky, pulsante torna su sempre visibile',
            'Verifica z-index: navbar (1000) > sezioni sticky (100) > tooltip (100) > pulsante (500)',
          ]}
        />

      {/* Conclusione e Riepilogo */}
      <section className="mt-12 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Fantastico! Ora Controlli Completamente il Posizionamento!</h2>
        <p className="text-xl mb-4">
          Hai imparato a posizionare elementi <strong>ovunque</strong> nella pagina!
        </p>
        <p className="text-lg mb-6">
          position è una delle proprietà più potenti del CSS! Navbar fisse, badge, tooltip, tutto è possibile! 🚀
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
            <p className="font-bold text-yellow-200 mb-2">🎨 Proprietà CSS (43 totali):</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>Lezione 1-2: color, background-color, border</li>
              <li>Lezione 3: font-size, font-weight, text-align</li>
              <li>Lezione 4: padding, margin, width</li>
              <li>Lezione 5: font-family, font-style, text-decoration, text-transform, letter-spacing, word-spacing</li>
              <li>Lezione 6: cursor, transition</li>
              <li>Lezione 7: box-sizing, max-width, min-height</li>
              <li>Lezione 8: border-radius, border-top/right/bottom/left, background-image, background-size, background-position, background-repeat, background-attachment</li>
              <li>Lezione 9: display, vertical-align</li>
              <li><strong>Lezione 10 (6 NUOVE)</strong>: position, top, right, bottom, left, z-index ✨</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-400 bg-opacity-30 p-4 rounded border-2 border-green-300">
          <p className="font-bold mb-2">🚀 Prossima Lezione</p>
          <p className="text-lg">
            Imparerai <strong>Flexbox</strong>! Il sistema di layout moderno per creare layout flessibili e responsive! 💪
          </p>
        </div>
      </section>
    </LessonLayout>
  );
}
