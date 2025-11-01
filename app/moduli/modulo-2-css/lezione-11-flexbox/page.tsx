import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import LessonPreview from '@/components/didattica/LessonPreview';

export default function Lezione11Flexbox() {
  const lezioni = getLezioniByModuloSlug('modulo-2-css');

  return (
    <LessonLayout
      moduloSlug="modulo-2-css"
      moduloTitolo="Modulo 2: CSS"
      lezioni={lezioni}
      lezioneSlug="lezione-11-flexbox"
      lezioneTitolo="Flexbox - Layout Moderno"
    >
      <LessonHeader
        numero={11}
        titolo="Flexbox - Layout Moderno e Potente"
        durata="2.5 ore"
        difficolta="media"
        obiettivi={[
          'Capire cos\'è Flexbox e quando usarlo',
          'Creare layout responsive in modo semplice',
          'Usare flex-direction per cambiare orientamento',
          'Distribuire spazio con justify-content',
          'Allineare elementi con align-items',
          'Gestire elementi che vanno a capo con flex-wrap',
          'Controllare dimensioni con flex-grow, flex-shrink, flex-basis',
        ]}
      />

        {/* Introduzione */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-4">
              🚀 Flexbox: La Rivoluzione dei Layout!
            </h2>
            <p className="text-xl mb-4">
              Fino ad ora hai usato <code className="bg-white bg-opacity-20 px-2 py-1 rounded text-gray-900 font-bold">display: inline-block</code> per
              affiancare elementi. Funziona, ma è limitato!
            </p>
            <p className="text-xl mb-4">
              💪 <strong>Flexbox è il modo MODERNO</strong> di creare layout: più potente, più flessibile, più semplice!
            </p>
            <p className="text-lg">
              Con Flexbox puoi centrare elementi, distribuire spazio, creare layout responsive... tutto con poche righe di CSS!
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="font-bold text-blue-700 mb-3">🎯 Cosa Imparerai</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Flex container e flex items - il concetto base</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Direzione: orizzontale (row) o verticale (column)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Distribuire spazio automaticamente</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Centrare elementi facilmente (verticalmente E orizzontalmente!)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Layout responsive che si adattano</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h3 className="font-bold text-yellow-800 mb-2">💡 Perché Flexbox è Meglio?</h3>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="font-bold text-yellow-700 mb-2">❌ Con inline-block:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Calcoli manuali delle larghezze (30%, 28%, etc.)</li>
                  <li>• Difficile centrare verticalmente</li>
                  <li>• Spazi bianchi tra elementi</li>
                  <li>• Non si adatta automaticamente</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-green-700 mb-2">✅ Con Flexbox:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Distribuzione automatica dello spazio</li>
                  <li>• Centrare verticalmente è semplicissimo</li>
                  <li>• Controllo totale sulla spaziatura</li>
                  <li>• Responsive di default!</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Concetto Base: Container e Items */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🧩 Concetto Base: Container e Items</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Come Funziona Flexbox</h3>
            <p className="text-lg mb-4">
              Flexbox ha <strong>2 livelli</strong>:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300">
                <h4 className="font-bold text-purple-700 mb-2">1️⃣ Flex Container (Genitore)</h4>
                <p className="text-sm text-gray-700 mb-2">
                  L&apos;elemento con <code>display: flex</code>
                </p>
                <p className="text-sm text-gray-700">
                  Controlla <strong>come</strong> i figli vengono disposti
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
                <h4 className="font-bold text-green-700 mb-2">2️⃣ Flex Items (Figli)</h4>
                <p className="text-sm text-gray-700 mb-2">
                  I figli diretti del flex container
                </p>
                <p className="text-sm text-gray-700">
                  Si adattano automaticamente alle regole del container
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.container {
  display: flex;
  background-color: #E8F4F8;
  padding: 20px;
  border-radius: 12px;
}

.item {
  background-color: #3498DB;
  color: white;
  padding: 20px;
  margin: 5px;
  border-radius: 8px;
  font-weight: bold;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="display: flex - Gli items si affiancano automaticamente!"
            html={`<style>
.flex-container-demo {
  display: flex;
  background-color: #E8F4F8;
  padding: 20px;
  border-radius: 12px;
}

.flex-item-demo {
  background-color: #3498DB;
  color: white;
  padding: 20px;
  margin: 5px;
  border-radius: 8px;
  font-weight: bold;
}
</style>

<div class="flex-container-demo">
  <div class="flex-item-demo">Item 1</div>
  <div class="flex-item-demo">Item 2</div>
  <div class="flex-item-demo">Item 3</div>
</div>

<p style="margin-top: 20px; text-align: center; color: #666; font-weight: bold;">
  ✨ Con solo "display: flex" gli items si sono affiancati automaticamente!
</p>`}
          />

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
            <h3 className="font-bold text-blue-700 mb-2">🔑 Cosa è Successo?</h3>
            <p className="text-gray-700 mb-3">
              Aggiungendo <code>display: flex</code> al container:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Gli items (figli diretti) si sono affiancati orizzontalmente</li>
              <li>✅ Si adattano automaticamente alla loro larghezza naturale</li>
              <li>✅ Nessun calcolo manuale di percentuali!</li>
              <li>✅ Nessun problema di spazi bianchi (come con inline-block)</li>
            </ul>
          </div>
        </section>

        {/* flex-direction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">↔️ flex-direction: Scegli la Direzione</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Orientamento del Layout</h3>
            <p className="text-lg mb-4">
              <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">flex-direction</code> controlla
              la <strong>direzione</strong> in cui gli items si dispongono:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-700 mb-2">row (default)</p>
                <p className="text-sm text-gray-700">→ Orizzontale, da sinistra a destra</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">column</p>
                <p className="text-sm text-gray-700">↓ Verticale, dall&apos;alto verso il basso</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-700 mb-2">row-reverse</p>
                <p className="text-sm text-gray-700">← Orizzontale, da destra a sinistra</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="font-bold text-pink-700 mb-2">column-reverse</p>
                <p className="text-sm text-gray-700">↑ Verticale, dal basso verso l&apos;alto</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="container-row">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<div class="container-column">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.container-row {
  display: flex;
  flex-direction: row;
  background-color: #E8F4F8;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
}

.container-column {
  display: flex;
  flex-direction: column;
  background-color: #FDE8F4;
  padding: 20px;
  border-radius: 12px;
}

.item {
  background-color: #3498DB;
  color: white;
  padding: 20px;
  margin: 5px;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="flex-direction: row vs column"
            html={`<style>
.container-row-demo {
  display: flex;
  flex-direction: row;
  background-color: #E8F4F8;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
}

.container-column-demo {
  display: flex;
  flex-direction: column;
  background-color: #FDE8F4;
  padding: 20px;
  border-radius: 12px;
}

.item-direction {
  background-color: #3498DB;
  color: white;
  padding: 20px;
  margin: 5px;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
}
</style>

<p style="font-weight: bold; margin-bottom: 10px; color: #3498DB;">flex-direction: row (orizzontale →)</p>
<div class="container-row-demo">
  <div class="item-direction">1</div>
  <div class="item-direction">2</div>
  <div class="item-direction">3</div>
</div>

<p style="font-weight: bold; margin-bottom: 10px; margin-top: 30px; color: #E91E63;">flex-direction: column (verticale ↓)</p>
<div class="container-column-demo">
  <div class="item-direction">1</div>
  <div class="item-direction">2</div>
  <div class="item-direction">3</div>
</div>

<p style="margin-top: 20px; text-align: center; color: #666; font-weight: bold;">
  🔄 Con flex-direction puoi cambiare completamente l'orientamento!
</p>`}
          />
        </section>

        {/* justify-content */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">⚖️ justify-content: Distribuire lo Spazio</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Allineamento sull&apos;Asse Principale</h3>
            <p className="text-lg mb-4">
              <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">justify-content</code> controlla
              come gli items vengono <strong>distribuiti lungo l&apos;asse principale</strong>:
            </p>
            <ul className="list-disc ml-8 space-y-2">
              <li>Se <code>flex-direction: row</code> → controlla distribuzione <strong>orizzontale</strong></li>
              <li>Se <code>flex-direction: column</code> → controlla distribuzione <strong>verticale</strong></li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg mb-6">
            <h3 className="font-bold text-xl mb-3">🎯 I Valori Principali</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">flex-start</p>
                <p className="text-sm text-gray-800">Inizio (default)</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">center</p>
                <p className="text-sm text-gray-800">Centro</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">flex-end</p>
                <p className="text-sm text-gray-800">Fine</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">space-between</p>
                <p className="text-sm text-gray-800">Spazio tra items</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">space-around</p>
                <p className="text-sm text-gray-800">Spazio intorno</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">space-evenly</p>
                <p className="text-sm text-gray-800">Spazio uguale</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML (uguale per tutti):</h4>
              <CodeExample
                language="html"
                code={`<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS (cambia justify-content):</h4>
              <CodeExample
                language="css"
                code={`.container {
  display: flex;
  justify-content: center;
  background-color: #E8F4F8;
  padding: 20px;
  border-radius: 12px;
}

.item {
  background-color: #3498DB;
  color: white;
  padding: 20px;
  margin: 5px;
  border-radius: 8px;
  font-weight: bold;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="justify-content - Tutte le opzioni visualizzate"
            html={`<style>
.justify-demo {
  display: flex;
  background-color: #E8F4F8;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 12px;
  border: 2px solid #3498DB;
}

.justify-item {
  background-color: #3498DB;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  font-weight: bold;
}

.start { justify-content: flex-start; }
.center { justify-content: center; }
.end { justify-content: flex-end; }
.between { justify-content: space-between; }
.around { justify-content: space-around; }
.evenly { justify-content: space-evenly; }
</style>

<p style="font-weight: bold; margin-bottom: 8px; color: #555; font-size: 14px;">flex-start (default)</p>
<div class="justify-demo start">
  <div class="justify-item">1</div>
  <div class="justify-item">2</div>
  <div class="justify-item">3</div>
</div>

<p style="font-weight: bold; margin-bottom: 8px; color: #555; font-size: 14px;">center</p>
<div class="justify-demo center">
  <div class="justify-item">1</div>
  <div class="justify-item">2</div>
  <div class="justify-item">3</div>
</div>

<p style="font-weight: bold; margin-bottom: 8px; color: #555; font-size: 14px;">flex-end</p>
<div class="justify-demo end">
  <div class="justify-item">1</div>
  <div class="justify-item">2</div>
  <div class="justify-item">3</div>
</div>

<p style="font-weight: bold; margin-bottom: 8px; color: #555; font-size: 14px;">space-between (spazio solo TRA items)</p>
<div class="justify-demo between">
  <div class="justify-item">1</div>
  <div class="justify-item">2</div>
  <div class="justify-item">3</div>
</div>

<p style="font-weight: bold; margin-bottom: 8px; color: #555; font-size: 14px;">space-around (spazio INTORNO a ogni item)</p>
<div class="justify-demo around">
  <div class="justify-item">1</div>
  <div class="justify-item">2</div>
  <div class="justify-item">3</div>
</div>

<p style="font-weight: bold; margin-bottom: 8px; color: #555; font-size: 14px;">space-evenly (spazio UGUALE ovunque)</p>
<div class="justify-demo evenly">
  <div class="justify-item">1</div>
  <div class="justify-item">2</div>
  <div class="justify-item">3</div>
</div>

<p style="margin-top: 20px; text-align: center; color: #666; font-weight: bold;">
  ⚖️ Nota le differenze tra space-between, space-around e space-evenly!
</p>`}
          />

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
            <h3 className="font-bold text-yellow-800 mb-3">🤔 Quale Usare?</h3>
            <ul className="space-y-2 text-gray-700">
              <li><strong>center:</strong> Per centrare elementi orizzontalmente</li>
              <li><strong>space-between:</strong> Per navbar (logo a sinistra, menu a destra)</li>
              <li><strong>space-evenly:</strong> Per gallerie con spaziatura uniforme</li>
              <li><strong>flex-end:</strong> Per allineare a destra</li>
            </ul>
          </div>
        </section>

        {/* align-items */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">⬆️ align-items: Allineamento Verticale</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Allineamento sull&apos;Asse Secondario</h3>
            <p className="text-lg mb-4">
              <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">align-items</code> controlla
              l&apos;allineamento <strong>perpendicolare</strong> all&apos;asse principale:
            </p>
            <ul className="list-disc ml-8 space-y-2">
              <li>Se <code>flex-direction: row</code> → controlla allineamento <strong>verticale</strong></li>
              <li>Se <code>flex-direction: column</code> → controlla allineamento <strong>orizzontale</strong></li>
            </ul>
            <div className="bg-green-50 p-4 rounded-lg mt-4">
              <p className="font-bold text-green-700 mb-2">🎯 Super utile per:</p>
              <p className="text-sm text-gray-700">
                Centrare verticalmente (impossibile senza Flexbox o position!)
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="container-tall">
  <div class="item">Item 1</div>
  <div class="item tall">Item 2 Alto</div>
  <div class="item">Item 3</div>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.container-tall {
  display: flex;
  align-items: center;
  background-color: #E8F4F8;
  padding: 20px;
  height: 200px;
  border-radius: 12px;
}

.item {
  background-color: #3498DB;
  color: white;
  padding: 20px;
  margin: 5px;
  border-radius: 8px;
  font-weight: bold;
}

.tall {
  padding: 40px 20px;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="align-items - Allineamento verticale con altezze diverse"
            html={`<style>
.align-demo {
  display: flex;
  background-color: #E8F4F8;
  padding: 20px;
  height: 180px;
  border-radius: 12px;
  border: 2px solid #3498DB;
  margin-bottom: 15px;
}

.align-item {
  background-color: #3498DB;
  color: white;
  padding: 20px;
  margin: 0 5px;
  border-radius: 8px;
  font-weight: bold;
}

.tall-item {
  padding: 40px 20px;
}

.stretch-demo { align-items: stretch; }
.start-demo { align-items: flex-start; }
.center-demo { align-items: center; }
.end-demo { align-items: flex-end; }
</style>

<p style="font-weight: bold; margin-bottom: 8px; color: #555; font-size: 14px;">align-items: stretch (default - occupano tutta l'altezza)</p>
<div class="align-demo stretch-demo">
  <div class="align-item">1</div>
  <div class="align-item tall-item">2 Alto</div>
  <div class="align-item">3</div>
</div>

<p style="font-weight: bold; margin-bottom: 8px; color: #555; font-size: 14px;">align-items: flex-start (allineati in alto)</p>
<div class="align-demo start-demo">
  <div class="align-item">1</div>
  <div class="align-item tall-item">2 Alto</div>
  <div class="align-item">3</div>
</div>

<p style="font-weight: bold; margin-bottom: 8px; color: #555; font-size: 14px;">align-items: center (centrati verticalmente ✨)</p>
<div class="align-demo center-demo">
  <div class="align-item">1</div>
  <div class="align-item tall-item">2 Alto</div>
  <div class="align-item">3</div>
</div>

<p style="font-weight: bold; margin-bottom: 8px; color: #555; font-size: 14px;">align-items: flex-end (allineati in basso)</p>
<div class="align-demo end-demo">
  <div class="align-item">1</div>
  <div class="align-item tall-item">2 Alto</div>
  <div class="align-item">3</div>
</div>

<p style="margin-top: 20px; text-align: center; color: #666; font-weight: bold;">
  🎯 align-items: center è MAGICO per centrare verticalmente!
</p>`}
          />
        </section>

        {/* Centrare Perfettamente */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🎯 Il Trick Perfetto: Centrare in Entrambe le Direzioni!</h2>

          <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-8 rounded-lg mb-6">
            <h3 className="text-2xl font-bold mb-4">✨ La Combinazione Magica!</h3>
            <p className="text-lg mb-4">
              Combinando <code className="bg-white bg-opacity-20 px-2 py-1 rounded text-gray-900 font-bold">justify-content: center</code> +{' '}
              <code className="bg-white bg-opacity-20 px-2 py-1 rounded text-gray-900 font-bold">align-items: center</code> ottieni il
              <strong> centraggio PERFETTO</strong> sia orizzontalmente che verticalmente!
            </p>
            <p className="text-lg">
              Questo era quasi impossibile prima di Flexbox! 🎉
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="center-box">
  <div class="content">
    Perfettamente Centrato!
  </div>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.center-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: #E8F4F8;
  border-radius: 12px;
}

.content {
  background-color: #2ECC71;
  color: white;
  padding: 30px 40px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 20px;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="Centraggio Perfetto - Orizzontale E Verticale!"
            html={`<style>
.perfect-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: #E8F4F8;
  border-radius: 12px;
  border: 3px dashed #3498DB;
}

.centered-content {
  background-color: #2ECC71;
  color: white;
  padding: 30px 40px;
  border-radius: 12px;
  font-weight: bold;
  font-size: 20px;
}
</style>

<div class="perfect-center">
  <div class="centered-content">
    🎯 Perfettamente Centrato!
  </div>
</div>

<p style="margin-top: 20px; text-align: center; color: #666; font-weight: bold;">
  ✨ Solo 2 proprietà CSS per il centraggio perfetto! Prima era complicatissimo.
</p>`}
          />
        </section>

        {/* gap */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">📏 gap: Spaziatura Semplificata</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Spazio tra Items Senza Margin</h3>
            <p className="text-lg mb-4">
              Prima usavi <code>margin</code> su ogni item per creare spazio. Con{' '}
              <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">gap</code> è molto più semplice:
            </p>
            <ul className="list-disc ml-8 space-y-2">
              <li>✅ Spazio <strong>solo tra</strong> gli items (non ai bordi)</li>
              <li>✅ Una proprietà invece di margin su ogni elemento</li>
              <li>✅ Più pulito e manutenibile</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="container-gap">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.container-gap {
  display: flex;
  gap: 20px;
  background-color: #E8F4F8;
  padding: 20px;
  border-radius: 12px;
}

.item {
  background-color: #3498DB;
  color: white;
  padding: 20px;
  border-radius: 8px;
  font-weight: bold;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="gap - Spazio tra items senza margin"
            html={`<style>
.gap-demo {
  display: flex;
  gap: 20px;
  background-color: #E8F4F8;
  padding: 20px;
  border-radius: 12px;
  border: 2px solid #3498DB;
}

.gap-item {
  background-color: #3498DB;
  color: white;
  padding: 20px;
  border-radius: 8px;
  font-weight: bold;
}
</style>

<div class="gap-demo">
  <div class="gap-item">Item 1</div>
  <div class="gap-item">Item 2</div>
  <div class="gap-item">Item 3</div>
</div>

<p style="margin-top: 20px; text-align: center; color: #666; font-weight: bold;">
  📏 gap: 20px crea 20px di spazio TRA gli items, ma non ai bordi!
</p>`}
          />
        </section>

        {/* flex-wrap */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🔄 flex-wrap: Layout Responsive</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <h3 className="text-xl font-bold mb-4">Andare a Capo Automaticamente</h3>
            <p className="text-lg mb-4">
              Di default, gli items Flexbox cercano di stare tutti su <strong>una sola riga</strong>, anche se non c&apos;è spazio.
            </p>
            <p className="text-lg mb-4">
              Con <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">flex-wrap: wrap</code> gli items
              vanno automaticamente <strong>a capo</strong> quando serve!
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-bold text-green-700 mb-2">🎯 Perfetto per:</p>
              <p className="text-sm text-gray-700">
                Layout responsive che si adattano su mobile senza media queries!
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="container-wrap">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
  <div class="card">Card 6</div>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.container-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  background-color: #E8F4F8;
  padding: 20px;
  border-radius: 12px;
}

.card {
  width: 150px;
  background-color: #3498DB;
  color: white;
  padding: 30px 20px;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="flex-wrap: wrap - Card che vanno a capo automaticamente"
            html={`<style>
.wrap-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  background-color: #E8F4F8;
  padding: 20px;
  border-radius: 12px;
}

.wrap-card {
  width: 150px;
  background-color: #3498DB;
  color: white;
  padding: 30px 20px;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
}
</style>

<div class="wrap-demo">
  <div class="wrap-card">Card 1</div>
  <div class="wrap-card">Card 2</div>
  <div class="wrap-card">Card 3</div>
  <div class="wrap-card">Card 4</div>
  <div class="wrap-card">Card 5</div>
  <div class="wrap-card">Card 6</div>
</div>

<p style="margin-top: 20px; text-align: center; color: #666; font-weight: bold;">
  🔄 Riduci la larghezza della finestra: le card vanno automaticamente a capo!
</p>`}
          />
        </section>

        {/* Esempio Pratico: Navbar */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">✨ Esempio Pratico: Navbar con Flexbox</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              Creiamo una navbar professionale combinando le proprietà Flexbox:
            </p>
            <ul className="list-disc ml-8 space-y-2">
              <li>✅ <code>display: flex</code> per struttura orizzontale</li>
              <li>✅ <code>justify-content: space-between</code> per logo a sinistra, menu a destra</li>
              <li>✅ <code>align-items: center</code> per allineamento verticale</li>
              <li>✅ <code>gap</code> per spaziare i link del menu</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<nav class="navbar">
  <div class="logo">MioSito</div>
  <div class="menu">
    <a href="#" class="link">Home</a>
    <a href="#" class="link">About</a>
    <a href="#" class="link">Contatti</a>
  </div>
</nav>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2C3E50;
  padding: 15px 30px;
  border-radius: 12px;
}

.logo {
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.menu {
  display: flex;
  gap: 25px;
}

.link {
  color: white;
  font-weight: bold;
}

.link:hover {
  color: #3498DB;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="Navbar Professionale con Flexbox"
            html={`<style>
.navbar-demo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2C3E50;
  padding: 15px 30px;
  border-radius: 12px;
}

.logo-demo {
  color: white;
  font-size: 24px;
  font-weight: bold;
}

.menu-demo {
  display: flex;
  gap: 25px;
}

.link-demo {
  color: white;
  font-weight: bold;
  text-decoration: none;
}

.link-demo:hover {
  color: #3498DB;
}
</style>

<nav class="navbar-demo">
  <div class="logo-demo">🌐 MioSito</div>
  <div class="menu-demo">
    <a href="#" class="link-demo">Home</a>
    <a href="#" class="link-demo">About</a>
    <a href="#" class="link-demo">Contatti</a>
  </div>
</nav>

<p style="margin-top: 20px; text-align: center; color: #666; font-weight: bold;">
  ✨ Logo a sinistra, menu a destra, tutto centrato verticalmente - con poche righe di Flexbox!
</p>`}
          />
        </section>

        {/* Tabella Riepilogativa */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">📊 Tabella Riepilogativa Flexbox</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-purple-100 dark:bg-purple-900">
                  <th className="border border-gray-300 p-3 text-left">Proprietà</th>
                  <th className="border border-gray-300 p-3">Applicata a</th>
                  <th className="border border-gray-300 p-3">Cosa Fa</th>
                  <th className="border border-gray-300 p-3">Valori Comuni</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-bold">display: flex</td>
                  <td className="border border-gray-300 p-3">Container</td>
                  <td className="border border-gray-300 p-3">Attiva Flexbox</td>
                  <td className="border border-gray-300 p-3">flex</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 p-3 font-bold">flex-direction</td>
                  <td className="border border-gray-300 p-3">Container</td>
                  <td className="border border-gray-300 p-3">Direzione items</td>
                  <td className="border border-gray-300 p-3">row, column</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-bold">justify-content</td>
                  <td className="border border-gray-300 p-3">Container</td>
                  <td className="border border-gray-300 p-3">Distribuzione asse principale</td>
                  <td className="border border-gray-300 p-3">center, space-between, flex-end</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 p-3 font-bold">align-items</td>
                  <td className="border border-gray-300 p-3">Container</td>
                  <td className="border border-gray-300 p-3">Allineamento asse secondario</td>
                  <td className="border border-gray-300 p-3">center, flex-start, flex-end, stretch</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-bold">flex-wrap</td>
                  <td className="border border-gray-300 p-3">Container</td>
                  <td className="border border-gray-300 p-3">Andare a capo</td>
                  <td className="border border-gray-300 p-3">nowrap, wrap</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 p-3 font-bold">gap</td>
                  <td className="border border-gray-300 p-3">Container</td>
                  <td className="border border-gray-300 p-3">Spazio tra items</td>
                  <td className="border border-gray-300 p-3">20px, 1rem</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Esercizio */}
        <Exercise
          title="Crea una Card Gallery Responsive con Flexbox"
          steps={[
            'Crea una cartella "gallery-flexbox" in VS Code',
            'Crea index.html con struttura base HTML5',
            'Crea style.css e collegalo',
            'CSS universale: * { box-sizing: border-box; margin: 0; padding: 0; }',
            'Body: font-family Arial, padding 40px, background-color #F5F5F5',
            'Header: h1 "Galleria Progetti", text-align center, margin-bottom 40px, color #2C3E50',
            'Container .gallery: display flex, flex-wrap wrap, gap 20px, justify-content center',
            'Crea 6 div.card dentro .gallery',
            'Ogni card: width 250px, background white, border-radius 12px, overflow hidden, border 2px solid #E0E0E0',
            'Dentro card: div.card-image (height 150px, background gradient diverso per ognuna)',
            'Sotto image: div.card-body (padding 20px)',
            'In card-body: h3.card-title (margin 0 0 10px 0, color #2C3E50), p.card-description (color #7F8C8D, margin 0 0 15px 0)',
            'Button: padding 10px 20px, background #3498DB, color white, border none, border-radius 25px, font-weight bold, cursor pointer, width 100%',
            'Button hover: background #2980B9',
            'Card hover: border-color #3498DB',
            'Testa con Live Server - riduci finestra: le card vanno a capo automaticamente!',
            'Verifica che con finestra larga ci siano 3 card per riga, con finestra stretta 2 o 1',
            'Prova a cambiare gap e justify-content per sperimentare',
          ]}
        />

        {/* Challenge */}
        <Challenge
          title="Landing Page Completa con Flexbox"
          description="Crea una landing page professionale usando SOLO Flexbox per tutti i layout. Navbar, hero, features, footer - tutto con Flexbox!"
          requirements={[
            'Crea "landing-flexbox" con index.html e style.css',
            'Navbar: display flex, justify-content space-between, align-items center, padding 20px 40px, background #2C3E50',
            'Logo a sinistra (font-size 28px, font-weight bold, color white)',
            'Menu a destra: display flex, gap 30px, link bianchi con hover color #3498DB',
            'Hero section: display flex, justify-content center, align-items center, height 400px, background gradient, color white',
            'Hero content: text-align center, h1 (font-size 48px, margin-bottom 20px), p (font-size 20px, margin-bottom 30px)',
            'Hero button: padding 15px 40px, background white, color #3498DB, border none, border-radius 30px, font-size 18px, font-weight bold',
            'Features section: display flex, flex-wrap wrap, gap 30px, justify-content center, padding 60px 20px',
            'Ogni feature: width 300px, text-align center, padding 30px, background white, border-radius 15px, border 2px solid #E0E0E0',
            'Feature icon: font-size 60px, margin-bottom 20px (usa emoji)',
            'Feature title: font-size 24px, font-weight bold, margin-bottom 15px, color #2C3E50',
            'Feature description: color #7F8C8D, line-height 1.6',
            'Footer: display flex, justify-content space-between, align-items center, background #2C3E50, color white, padding 30px 40px',
            'Footer left: copyright text',
            'Footer right: display flex, gap 20px, social links',
            'Tutto deve essere responsive: riduci finestra e verifica che funzioni su mobile',
            'Hover effects su tutti i link e bottoni',
          ]}
        />

      {/* Conclusione e Riepilogo */}
      <section className="mt-12 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Fantastico! Ora Sei un Maestro di Flexbox!</h2>
        <p className="text-xl mb-4">
          Hai imparato il <strong>sistema di layout moderno</strong> più potente del CSS!
        </p>
        <p className="text-lg mb-6">
          Flexbox rende facilissimo creare navbar, centrare elementi, allineare contenuti e creare layout responsive! 💪
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
            <p className="font-bold text-yellow-200 mb-2">🎨 Proprietà CSS (49 totali):</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>Lezione 1-2: color, background-color, border</li>
              <li>Lezione 3: font-size, font-weight, text-align</li>
              <li>Lezione 4: padding, margin, width</li>
              <li>Lezione 5: font-family, font-style, text-decoration, text-transform, letter-spacing, word-spacing</li>
              <li>Lezione 6: cursor, transition</li>
              <li>Lezione 7: box-sizing, max-width, min-height</li>
              <li>Lezione 8: border-radius, border-top/right/bottom/left, background-image, background-size, background-position, background-repeat, background-attachment</li>
              <li>Lezione 9: display, vertical-align</li>
              <li>Lezione 10: position, top, right, bottom, left, z-index</li>
              <li><strong>Lezione 11 (6 NUOVE)</strong>: flex-direction, justify-content, align-items, gap, flex-wrap, flex (display flex già in Lez. 9) ✨</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-400 bg-opacity-30 p-4 rounded border-2 border-green-300">
          <p className="font-bold mb-2">🚀 Prossima Lezione</p>
          <p className="text-lg">
            Imparerai <strong>CSS Grid</strong>! Il sistema di layout bidimensionale per creare gallery e layout complessi! 📐
          </p>
        </div>
      </section>
    </LessonLayout>
  );
}
