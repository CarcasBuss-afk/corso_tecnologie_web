import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import LessonPreview from '@/components/didattica/LessonPreview';

export default function Lezione9DisplayLayout() {
  const lezioni = getLezioniByModuloSlug('modulo-2-css');

  return (
    <LessonLayout
      moduloSlug="modulo-2-css"
      moduloTitolo="Modulo 2: CSS"
      lezioni={lezioni}
      lezioneSlug="lezione-9-display-layout"
      lezioneTitolo="Display e Layout Base"
    >
      <LessonHeader
        numero={9}
        titolo="Display e Layout Base - Affiancare Elementi"
        durata="2 ore"
        difficolta="media"
        obiettivi={[
          'Capire cos\'è la proprietà display e il flusso del documento',
          'Conoscere la differenza tra block, inline e inline-block',
          'Affiancare elementi orizzontalmente con inline-block',
          'Creare layout a 2-3 colonne con card',
          'Usare display: none per nascondere elementi',
          'Applicare vertical-align per allineare elementi',
        ]}
      />

        {/* Introduzione */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-4">
              📦 Finalmente: Elementi Affiancati!
            </h2>
            <p className="text-xl mb-4">
              Ti ricordi quando nelle lezioni precedenti abbiamo detto{' '}
              <strong>&quot;le card saranno verticali per ora&quot;</strong>?
            </p>
            <p className="text-xl mb-4">
              🎉 <strong>Oggi impari come affiancare gli elementi orizzontalmente!</strong>
            </p>
            <p className="text-lg">
              La chiave è la proprietà <code className="bg-white bg-opacity-20 px-2 py-1 rounded">display</code> che
              controlla <strong>come gli elementi si posizionano</strong> nella pagina.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="font-bold text-blue-700 mb-3">🎯 Cosa Imparerai</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Come funziona il &quot;flusso&quot; degli elementi HTML</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>La differenza tra <code>block</code>, <code>inline</code> e <code>inline-block</code></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Come affiancare elementi orizzontalmente</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Come nascondere/mostrare elementi</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Creare layout a 2 o 3 colonne</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Cos'è la proprietà display */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🧩 Cos&apos;è la Proprietà display?</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              La proprietà <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">display</code>{' '}
              determina <strong>come un elemento si comporta</strong> nel &quot;flusso&quot; della pagina.
            </p>
            <p className="text-lg mb-4">
              📄 <strong>Flusso del documento:</strong> l&apos;ordine naturale in cui il browser posiziona gli elementi
              dall&apos;alto verso il basso, da sinistra verso destra.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg mb-6">
            <h3 className="font-bold text-xl mb-3">🔑 I Valori Principali</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">display: block;</p>
                <p className="text-sm text-gray-800">Elemento occupa tutta la larghezza disponibile</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">display: inline;</p>
                <p className="text-sm text-gray-800">Elemento sta sulla stessa riga del testo</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">display: inline-block;</p>
                <p className="text-sm text-gray-800">Combina i vantaggi di block e inline</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">display: none;</p>
                <p className="text-sm text-gray-800">Elemento nascosto completamente</p>
              </div>
            </div>
          </div>
        </section>

        {/* display: block */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">📦 display: block</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Come Funziona</h3>
            <p className="text-lg mb-4">
              Gli elementi <code>block</code>:
            </p>
            <ul className="list-disc ml-8 space-y-2 mb-4">
              <li>📏 Occupano <strong>tutta la larghezza disponibile</strong> (100% del contenitore)</li>
              <li>⬇️ Vanno <strong>a capo automaticamente</strong> (uno sotto l&apos;altro)</li>
              <li>📐 Puoi impostare <code>width</code> e <code>height</code></li>
              <li>📦 Puoi usare <code>margin</code> e <code>padding</code> su tutti i lati</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="font-bold text-blue-700 mb-2">🏷️ Elementi Block di Default</p>
              <p className="text-sm">
                <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>,{' '}
                <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>,{' '}
                <code>&lt;footer&gt;</code>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="box1">Box 1</div>
<div class="box2">Box 2</div>
<div class="box3">Box 3</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.box1, .box2, .box3 {
  display: block;
  padding: 20px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
}

.box1 { background-color: #3498DB; }
.box2 { background-color: #E74C3C; }
.box3 { background-color: #2ECC71; }`}
              />
            </div>
          </div>

          <LessonPreview
            title="display: block - Elementi uno sotto l'altro"
            html={`<style>
.box-block {
  display: block;
  padding: 20px;
  margin-bottom: 10px;
  color: white;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
}

.box1-demo { background-color: #3498DB; }
.box2-demo { background-color: #E74C3C; }
.box3-demo { background-color: #2ECC71; }
</style>

<div class="box-block box1-demo">Box 1 - Occupa tutta la larghezza 📏</div>
<div class="box-block box2-demo">Box 2 - Va a capo automaticamente ⬇️</div>
<div class="box-block box3-demo">Box 3 - Anche questo block ⬇️</div>

<p style="margin-top: 20px; text-align: center; color: #666;">
  👆 Ogni box occupa tutta la larghezza disponibile!
</p>`}
          />
        </section>

        {/* display: inline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">↔️ display: inline</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Come Funziona</h3>
            <p className="text-lg mb-4">
              Gli elementi <code>inline</code>:
            </p>
            <ul className="list-disc ml-8 space-y-2 mb-4">
              <li>➡️ Stanno <strong>sulla stessa riga</strong> (come le parole in un testo)</li>
              <li>📦 Occupano <strong>solo lo spazio necessario</strong> per il loro contenuto</li>
              <li>❌ <strong>NON puoi</strong> impostare <code>width</code> e <code>height</code></li>
              <li>⚠️ <code>margin</code> e <code>padding</code> verticali non funzionano bene</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="font-bold text-blue-700 mb-2">🏷️ Elementi Inline di Default</p>
              <p className="text-sm">
                <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>,{' '}
                <code>&lt;em&gt;</code>, <code>&lt;img&gt;</code>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<span class="inline1">Primo</span>
<span class="inline2">Secondo</span>
<span class="inline3">Terzo</span>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.inline1, .inline2, .inline3 {
  display: inline;
  padding: 8px 15px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
}

.inline1 { background-color: #3498DB; }
.inline2 { background-color: #E74C3C; }
.inline3 { background-color: #2ECC71; }`}
              />
            </div>
          </div>

          <LessonPreview
            title="display: inline - Elementi sulla stessa riga"
            html={`<style>
.inline-demo {
  display: inline;
  padding: 8px 15px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
}

.inline1-demo { background-color: #3498DB; }
.inline2-demo { background-color: #E74C3C; }
.inline3-demo { background-color: #2ECC71; }
</style>

<div style="text-align: center; padding: 20px;">
  <span class="inline-demo inline1-demo">Primo</span>
  <span class="inline-demo inline2-demo">Secondo</span>
  <span class="inline-demo inline3-demo">Terzo</span>
</div>

<p style="margin-top: 20px; text-align: center; color: #666;">
  👆 Tutti e 3 sulla stessa riga! ➡️➡️➡️
</p>`}
          />

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
            <h3 className="font-bold text-yellow-800 mb-2">⚠️ Problema di inline</h3>
            <p className="mb-3">
              Con <code>display: inline</code> NON puoi impostare <code>width</code> e <code>height</code>!
            </p>
            <CodeExample
              language="css"
              code={`.inline-box {
  display: inline;
  width: 200px;    /* ❌ NON funziona! */
  height: 100px;   /* ❌ NON funziona! */
}`}
            />
            <p className="mt-3 font-bold text-yellow-700">
              💡 Soluzione: usa <code>inline-block</code>!
            </p>
          </div>
        </section>

        {/* display: inline-block */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">⭐ display: inline-block (Il Migliore!)</h2>

          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg mb-6">
            <h3 className="text-2xl font-bold mb-4">🎯 Il Meglio dei Due Mondi!</h3>
            <p className="text-lg mb-4">
              <code className="bg-white bg-opacity-20 px-2 py-1 rounded">inline-block</code> combina i vantaggi di{' '}
              <code>inline</code> e <code>block</code>:
            </p>
            <ul className="space-y-2 ml-6">
              <li>✅ <strong>Come inline:</strong> gli elementi stanno sulla stessa riga</li>
              <li>✅ <strong>Come block:</strong> puoi usare width, height, margin, padding</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Caratteristiche</h3>
            <ul className="list-disc ml-8 space-y-2 mb-4">
              <li>➡️ Elementi <strong>sulla stessa riga</strong> (come inline)</li>
              <li>📐 Puoi impostare <strong>width e height</strong> (come block)</li>
              <li>📦 <strong>margin e padding</strong> funzionano su tutti i lati (come block)</li>
              <li>🎯 <strong>PERFETTO per affiancare card, box, bottoni!</strong></li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="card">Card 1</div>
<div class="card">Card 2</div>
<div class="card">Card 3</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.card {
  display: inline-block;
  width: 150px;
  padding: 20px;
  margin: 10px;
  background-color: #3498DB;
  color: white;
  border-radius: 10px;
  border: 3px solid #2980B9;
  text-align: center;
  font-weight: bold;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="display: inline-block - Elementi affiancati con dimensioni!"
            html={`<style>
.card-inline-block {
  display: inline-block;
  width: 150px;
  padding: 20px;
  margin: 10px;
  background-color: #3498DB;
  color: white;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  border: 3px solid #2980B9;
}
</style>

<div style="text-align: center; padding: 20px;">
  <div class="card-inline-block">Card 1<br/>150px</div>
  <div class="card-inline-block">Card 2<br/>150px</div>
  <div class="card-inline-block">Card 3<br/>150px</div>
</div>

<p style="margin-top: 20px; text-align: center; color: #666; font-weight: bold;">
  🎉 Finalmente card orizzontali con width personalizzata!
</p>`}
          />

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-6">
            <h3 className="font-bold text-green-700 mb-3">💡 Quando Usare inline-block?</h3>
            <ul className="space-y-2">
              <li>✅ Card affiancate in una galleria</li>
              <li>✅ Menu di navigazione orizzontale</li>
              <li>✅ Bottoni affiancati</li>
              <li>✅ Griglia di prodotti/immagini</li>
              <li>✅ Qualsiasi elemento che vuoi affiancare con dimensioni precise</li>
            </ul>
          </div>
        </section>

        {/* Confronto Visivo */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🔍 Confronto Visivo: I 3 Tipi</h2>

          <LessonPreview
            title="block vs inline vs inline-block"
            html={`<style>
.demo-section {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #F8F9FA;
  border-radius: 10px;
}

.demo-title {
  font-weight: bold;
  margin-bottom: 10px;
  color: #2C3E50;
}

.block-item {
  display: block;
  background-color: #3498DB;
  color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
}

.inline-item {
  display: inline;
  background-color: #E74C3C;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: bold;
}

.inline-block-item {
  display: inline-block;
  width: 120px;
  background-color: #2ECC71;
  color: white;
  padding: 15px;
  margin: 5px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
}
</style>

<div class="demo-section">
  <p class="demo-title">1️⃣ display: block - Uno sotto l'altro ⬇️</p>
  <div class="block-item">Block 1</div>
  <div class="block-item">Block 2</div>
  <div class="block-item">Block 3</div>
</div>

<div class="demo-section">
  <p class="demo-title">2️⃣ display: inline - Sulla stessa riga ➡️</p>
  <span class="inline-item">Inline 1</span>
  <span class="inline-item">Inline 2</span>
  <span class="inline-item">Inline 3</span>
</div>

<div class="demo-section">
  <p class="demo-title">3️⃣ display: inline-block - Affiancati con width! ⭐</p>
  <div class="inline-block-item">IB 1</div>
  <div class="inline-block-item">IB 2</div>
  <div class="inline-block-item">IB 3</div>
</div>`}
          />

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
            <h3 className="text-xl font-bold mb-4">📊 Tabella di Confronto</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-purple-100 dark:bg-purple-900">
                    <th className="border border-gray-300 p-3 text-left">Proprietà</th>
                    <th className="border border-gray-300 p-3">block</th>
                    <th className="border border-gray-300 p-3">inline</th>
                    <th className="border border-gray-300 p-3">inline-block</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-bold">Sulla stessa riga?</td>
                    <td className="border border-gray-300 p-3 text-center">❌ No</td>
                    <td className="border border-gray-300 p-3 text-center">✅ Sì</td>
                    <td className="border border-gray-300 p-3 text-center">✅ Sì</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 p-3 font-bold">width/height?</td>
                    <td className="border border-gray-300 p-3 text-center">✅ Sì</td>
                    <td className="border border-gray-300 p-3 text-center">❌ No</td>
                    <td className="border border-gray-300 p-3 text-center">✅ Sì</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-bold">margin/padding?</td>
                    <td className="border border-gray-300 p-3 text-center">✅ Tutti i lati</td>
                    <td className="border border-gray-300 p-3 text-center">⚠️ Solo orizzontali</td>
                    <td className="border border-gray-300 p-3 text-center">✅ Tutti i lati</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <td className="border border-gray-300 p-3 font-bold">Larghezza default</td>
                    <td className="border border-gray-300 p-3 text-center">100%</td>
                    <td className="border border-gray-300 p-3 text-center">Auto (contenuto)</td>
                    <td className="border border-gray-300 p-3 text-center">Auto (contenuto)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-bold">Uso comune</td>
                    <td className="border border-gray-300 p-3 text-center">Layout verticali</td>
                    <td className="border border-gray-300 p-3 text-center">Testo, link</td>
                    <td className="border border-gray-300 p-3 text-center">Card, menu, grid</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* display: none */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">👻 display: none - Nascondere Elementi</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              Con <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">display: none;</code>{' '}
              l&apos;elemento <strong>scompare completamente</strong> dalla pagina.
            </p>
            <p className="text-lg mb-4">
              🚫 L&apos;elemento:
            </p>
            <ul className="list-disc ml-8 space-y-2">
              <li>Non è visibile</li>
              <li>Non occupa spazio</li>
              <li>È come se non esistesse nel documento</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="box visible">Sono visibile!</div>
<div class="box hidden">Sono nascosto!</div>
<div class="box visible">Sono visibile!</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.box {
  padding: 20px;
  margin-bottom: 10px;
  background-color: #3498DB;
  color: white;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}

.hidden {
  display: none;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="display: none - Elemento nascosto"
            html={`<style>
.box-visible {
  padding: 20px;
  margin-bottom: 10px;
  background-color: #3498DB;
  color: white;
  text-align: center;
  font-weight: bold;
  border-radius: 8px;
}

.box-hidden {
  display: none;
}
</style>

<div class="box-visible">1️⃣ Sono visibile!</div>
<div class="box-visible box-hidden">2️⃣ Sono nascosto con display: none</div>
<div class="box-visible">3️⃣ Sono visibile!</div>

<p style="margin-top: 20px; text-align: center; color: #666;">
  👆 Il box 2 è nascosto e non occupa spazio! Il box 3 si è spostato in alto.
</p>`}
          />

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
            <h3 className="font-bold text-blue-700 mb-3">💡 Quando Usare display: none?</h3>
            <ul className="space-y-2">
              <li>✅ Menu mobile nascosti fino al click</li>
              <li>✅ Messaggi di errore (mostrati solo quando necessario)</li>
              <li>✅ Contenuti per desktop non visibili su mobile</li>
              <li>✅ Elementi che appariranno più tardi con JavaScript</li>
            </ul>
          </div>
        </section>

        {/* Applicazione Pratica: Card Orizzontali */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🎨 Applicazione Pratica: Card Orizzontali!</h2>

          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-8 rounded-lg mb-6">
            <h3 className="text-2xl font-bold mb-4">🎉 Finalmente Possiamo Farlo!</h3>
            <p className="text-lg">
              Ricordi quando nelle Lezioni 7 e 8 abbiamo detto che le card sarebbero state verticali?
            </p>
            <p className="text-xl font-bold mt-3">
              Ora con <code className="bg-white bg-opacity-20 px-2 py-1 rounded">display: inline-block</code> possiamo
              affiancarle! 🚀
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">La Tecnica: Layout a 3 Card</h3>
            <p className="mb-4">
              Per creare 3 card affiancate orizzontalmente:
            </p>
            <ol className="list-decimal ml-8 space-y-2">
              <li>Usa <code>display: inline-block</code> sulle card</li>
              <li>Imposta <code>width</code> per ogni card (es. 30% per averne 3)</li>
              <li>Aggiungi <code>margin</code> per lo spazio tra le card</li>
              <li>Usa <code>text-align: center</code> sul contenitore per centrarle</li>
            </ol>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="container">
  <div class="card">
    <h3 class="card-title">Card 1</h3>
    <p class="card-text">Contenuto della card 1</p>
  </div>
  <div class="card">
    <h3 class="card-title">Card 2</h3>
    <p class="card-text">Contenuto della card 2</p>
  </div>
  <div class="card">
    <h3 class="card-title">Card 3</h3>
    <p class="card-text">Contenuto della card 3</p>
  </div>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.container {
  text-align: center;
}

.card {
  display: inline-block;
  width: 28%;
  margin: 10px;
  padding: 20px;
  background-color: white;
  border: 2px solid #E0E0E0;
  border-radius: 12px;
  vertical-align: top;
}

.card-title {
  margin: 0 0 10px 0;
  color: #2C3E50;
  font-size: 18px;
}

.card-text {
  margin: 0;
  color: #7F8C8D;
  font-size: 14px;
  line-height: 1.6;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="3 Card Affiancate Orizzontalmente - Finalmente!"
            html={`<style>
.card-container {
  text-align: center;
  padding: 20px;
}

.card-horizontal {
  display: inline-block;
  width: 28%;
  margin: 10px;
  padding: 20px;
  background-color: white;
  border: 2px solid #E0E0E0;
  border-radius: 12px;
  vertical-align: top;
}

.card-horizontal h3 {
  margin: 0 0 10px 0;
  color: #2C3E50;
  font-size: 18px;
}

.card-horizontal p {
  margin: 0;
  color: #7F8C8D;
  font-size: 14px;
  line-height: 1.6;
}
</style>

<div class="card-container">
  <div class="card-horizontal">
    <h3>🎨 Design</h3>
    <p>Creiamo interfacce belle e funzionali</p>
  </div>
  <div class="card-horizontal">
    <h3>💻 Sviluppo</h3>
    <p>Trasformiamo le idee in realtà</p>
  </div>
  <div class="card-horizontal">
    <h3>🚀 Deploy</h3>
    <p>Pubblichiamo il tuo progetto online</p>
  </div>
</div>

<p style="text-align: center; margin-top: 20px; color: #666; font-weight: bold;">
  🎉 Le card sono finalmente orizzontali!
</p>`}
          />

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
            <h3 className="font-bold text-yellow-800 mb-3">⚠️ Trucco Importante: vertical-align</h3>
            <p className="mb-3">
              Quando usi <code>inline-block</code>, potresti notare che le card con altezze diverse non si allineano
              bene.
            </p>
            <CodeExample
              language="css"
              code={`.card {
  display: inline-block;
  vertical-align: top;  /* 👈 Questo risolve il problema! */
}`}
            />
            <p className="mt-3 text-sm text-gray-700">
              💡 <code>vertical-align: top</code> allinea tutte le card in alto, anche se hanno contenuti di lunghezze
              diverse.
            </p>
          </div>
        </section>

        {/* Esempio Avanzato: Card Prodotto con Hover */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">✨ Esempio Completo: Card Prodotto</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              Combiniamo tutto quello che abbiamo imparato finora per creare card professionali:
            </p>
            <ul className="list-disc ml-8 space-y-2">
              <li>✅ <code>display: inline-block</code> per affiancarle</li>
              <li>✅ <code>border</code> e <code>border-radius</code> (Lezione 8)</li>
              <li>✅ <code>background</code> per immagine (Lezione 8)</li>
              <li>✅ <code>:hover</code> per interattività (Lezione 6)</li>
              <li>✅ <code>box-sizing: border-box</code> (Lezione 7)</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="products">
  <div class="product-card">
    <div class="product-image"></div>
    <div class="product-content">
      <h3 class="product-title">Prodotto 1</h3>
      <p class="product-text">Descrizione breve</p>
      <button class="btn">Scopri</button>
    </div>
  </div>
  <div class="product-card">
    <div class="product-image"></div>
    <div class="product-content">
      <h3 class="product-title">Prodotto 2</h3>
      <p class="product-text">Descrizione breve</p>
      <button class="btn">Scopri</button>
    </div>
  </div>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`* { box-sizing: border-box; }

.products {
  text-align: center;
}

.product-card {
  display: inline-block;
  width: 260px;
  margin: 15px;
  border: 2px solid #E0E0E0;
  border-radius: 15px;
  overflow: hidden;
  vertical-align: top;
  background-color: white;
}

.product-card:hover {
  border-color: #3498DB;
}

.product-image {
  height: 160px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.product-content {
  padding: 20px;
}

.product-title {
  margin: 0 0 10px 0;
  color: #2C3E50;
  font-size: 18px;
}

.product-text {
  margin: 0 0 15px 0;
  color: #7F8C8D;
  font-size: 14px;
  line-height: 1.6;
}

.btn {
  background-color: #3498DB;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 25px;
  cursor: pointer;
  font-weight: bold;
}

.btn:hover {
  background-color: #2980B9;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="Card Prodotto Professionali con Hover"
            html={`<style>
.products-demo {
  text-align: center;
  padding: 20px;
}

.product-card-demo {
  display: inline-block;
  width: 260px;
  margin: 15px;
  border: 2px solid #E0E0E0;
  border-radius: 15px;
  overflow: hidden;
  vertical-align: top;
  background-color: white;
}

.product-card-demo:hover {
  border-color: #3498DB;
}

.product-image-demo {
  height: 160px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.product-content-demo {
  padding: 20px;
}

.product-content-demo h3 {
  margin: 0 0 10px 0;
  color: #2C3E50;
  font-size: 18px;
}

.product-content-demo p {
  margin: 0 0 15px 0;
  color: #7F8C8D;
  font-size: 14px;
  line-height: 1.6;
}

.btn-demo {
  background-color: #3498DB;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 25px;
  cursor: pointer;
  font-weight: bold;
}

.btn-demo:hover {
  background-color: #2980B9;
}
</style>

<div class="products-demo">
  <div class="product-card-demo">
    <div class="product-image-demo"></div>
    <div class="product-content-demo">
      <h3>🎨 Prodotto Premium</h3>
      <p>Design moderno e funzionale per il tuo progetto</p>
      <button class="btn-demo">Scopri di più</button>
    </div>
  </div>
  <div class="product-card-demo">
    <div class="product-image-demo" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);"></div>
    <div class="product-content-demo">
      <h3>⚡ Prodotto Veloce</h3>
      <p>Performance ottimali per ogni esigenza</p>
      <button class="btn-demo">Scopri di più</button>
    </div>
  </div>
</div>

<p style="text-align: center; margin-top: 20px; color: #666;">
  <strong>✨ Prova l'hover:</strong> passa il mouse sulle card e sui bottoni!
</p>`}
          />
        </section>

        {/* Esercizio */}
        <Exercise
          title="Crea una Galleria di Servizi con Card Orizzontali"
          steps={[
            'Crea una cartella "galleria-servizi" in VS Code',
            'Crea index.html con struttura base HTML5',
            'Crea style.css e collegalo',
            'CSS universale: * { box-sizing: border-box; margin: 0; padding: 0; }',
            'Body: font-family Arial, background-color #F5F5F5, padding 20px',
            'Crea un <h1> centrato: "I Nostri Servizi"',
            'Crea un div.container con text-align: center',
            'Dentro il container, crea 3 div.service-card (classi multiple!)',
            'Ogni card: display inline-block, width 30%, margin 10px, vertical-align top',
            'Ogni card: border 2px solid #E0E0E0, border-radius 12px, padding 30px',
            'Ogni card: background-color white',
            'Dentro ogni card: h2 (titolo servizio), p (descrizione), button (CTA)',
            'Stile h2: color #2C3E50, margin-bottom 15px',
            'Stile p: color #7F8C8D, line-height 1.6, margin-bottom 20px',
            'Stile button: background #3498DB, color white, border none, border-radius 25px, padding 12px 30px, cursor pointer',
            'Hover sulla card: border-color cambia a #3498DB',
            'Hover sul button: background-color cambia a #2980B9',
            'Testa con Live Server - le card devono essere affiancate!',
            'Riduci la larghezza della finestra: nota come le card vanno a capo automaticamente',
          ]}
        />

        {/* Challenge */}
        <Challenge
          title="Card Prodotti E-commerce con Immagini di Sfondo"
          description="Crea una galleria di prodotti e-commerce professionale con card affiancate, immagini di sfondo, prezzi e bottoni. Usa tutto quello che hai imparato finora!"
          requirements={[
            'Crea "shop-cards" con index.html e style.css',
            'Header: "Prodotti in Offerta" centrato, font-size 36px, color #2C3E50, margin-bottom 30px',
            'Container con text-align: center, max-width 1200px, margin 0 auto',
            'Crea 4 card.product (4 prodotti diversi)',
            'Ogni product: display inline-block, width 22%, margin 10px, vertical-align top',
            'Ogni product: border 2px solid #E0E0E0, border-radius 15px, overflow hidden',
            'Dentro ogni product: div.image (immagine) + div.info (contenuto)',
            'div.image: height 200px, background con colore gradient o url immagine, background-size cover',
            'div.info: padding 20px, background-color white',
            'Dentro info: h3 (nome prodotto), p.price (prezzo in grassetto, color #E74C3C, font-size 24px)',
            'Dentro info: p.description (descrizione breve, color #7F8C8D)',
            'Dentro info: button.buy "Aggiungi al Carrello"',
            'Stile button: background #2ECC71, color white, border none, border-radius 25px, padding 12px 20px',
            'Hover product card: border-color #3498DB + leggero spostamento con margin-top (simula movimento)',
            'Hover button: background-color cambia a #27AE60',
            'Extra: aggiungi un badge "SCONTO 20%" in alto a destra dell\'immagine usando margin/padding creativi',
            'Testa responsive: riduci larghezza finestra e vedi card andare a capo automaticamente',
          ]}
        />
    </LessonLayout>
  );
}
