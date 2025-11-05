import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import LessonPreview from '@/components/didattica/LessonPreview';

export default function Lezione13ContenitioriFilgi() {
  const lezioni = getLezioniByModuloSlug('modulo-2-css');

  return (
    <LessonLayout
      moduloSlug="modulo-2-css"
      moduloTitolo="Modulo 2: CSS"
      lezioni={lezioni}
      lezioneSlug="lezione-13-contenitori-figli"
      lezioneTitolo="Contenitori e Figli - Relazioni CSS"
    >
      <LessonHeader
        numero={13}
        titolo="Contenitori e Figli - Relazioni CSS"
        durata="2 ore"
        difficolta="media"
        obiettivi={[
          'Capire come i contenitori padre influenzano gli elementi figli',
          'Gestire contenuti che superano le dimensioni del contenitore con overflow',
          'Comprendere quali proprietà CSS vengono ereditate dai figli',
          'Usare dimensioni in percentuale (%) rispetto al genitore',
          'Padroneggiare il concetto di "containing block"',
        ]}
      />

        {/* Introduzione */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-4">
              🔗 La Relazione Fondamentale: Padre e Figlio!
            </h2>
            <p className="text-xl mb-4">
              Hai usato contenitori e elementi figli in tutte le lezioni, ma oggi scopri <strong>come interagiscono</strong>!
            </p>
            <p className="text-xl mb-4">
              🎯 <strong>Oggi capirai:</strong> Come un contenitore influenza i suoi figli, cosa succede quando il contenuto è troppo grande, e quali proprietà vengono ereditate automaticamente!
            </p>
            <p className="text-lg">
              Questa lezione chiarisce molti &quot;perché&quot; che hai incontrato finora! 💡
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="font-bold text-blue-700 mb-3">🎯 Cosa Imparerai</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Dimensioni % - come funzionano rispetto al genitore</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>overflow: hidden/scroll/auto - gestire contenuti troppo grandi</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Inheritance - quali proprietà i figli ereditano</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Containing block - il riferimento per posizionamento e dimensioni</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Best practices - quando usare px, %, em, rem</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Dimensioni in Percentuale */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">📐 Dimensioni in Percentuale - Relazione col Genitore</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              Ricordi <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">width: 50%</code>?
              Significa <strong>&quot;50% della larghezza del GENITORE&quot;</strong>!
            </p>
            <p className="text-lg mb-4">
              🔑 <strong>Regola chiave:</strong> Le percentuali sono SEMPRE relative al contenitore padre.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4">Esempio: width in percentuale</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="container">
  <div class="box-50">50% del container</div>
  <div class="box-75">75% del container</div>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.container {
  width: 600px;
  background-color: #E8F4F8;
  padding: 20px;
  border: 3px solid #3498DB;
}

.box-50 {
  width: 50%;
  background-color: #3498DB;
  color: white;
  padding: 20px;
  margin-bottom: 10px;
  font-weight: bold;
}

.box-75 {
  width: 75%;
  background-color: #2ECC71;
  color: white;
  padding: 20px;
  font-weight: bold;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="Box al 50% e 75% del container"
            html={`<style>
.container-demo1 {
  width: 600px;
  background-color: #E8F4F8;
  padding: 20px;
  border: 3px solid #3498DB;
  border-radius: 8px;
  margin: 0 auto;
}

.box-50-demo {
  width: 50%;
  background-color: #3498DB;
  color: white;
  padding: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  border-radius: 6px;
}

.box-75-demo {
  width: 75%;
  background-color: #2ECC71;
  color: white;
  padding: 20px;
  font-weight: bold;
  border-radius: 6px;
}
</style>

<div class="container-demo1">
  <div class="box-50-demo">50% del container (300px)</div>
  <div class="box-75-demo">75% del container (450px)</div>
</div>`}
          />

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h3 className="font-bold text-yellow-700 mb-3">💡 Calcoli Automatici</h3>
            <p className="text-gray-700 mb-2">
              <strong>Container:</strong> 600px di larghezza<br/>
              <strong>Box 50%:</strong> 600px × 50% = 300px<br/>
              <strong>Box 75%:</strong> 600px × 75% = 450px
            </p>
            <p className="text-gray-700">
              Il browser calcola automaticamente! Se ridimensioni il container, i box si adattano! 🎯
            </p>
          </div>
        </section>

        {/* Height in Percentuale */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">📏 Height in Percentuale - Serve l&apos;Altezza del Padre!</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              <strong>⚠️ Attenzione:</strong> <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">height: 50%</code>{' '}
              funziona SOLO se il genitore ha un&apos;altezza definita!
            </p>
            <p className="text-lg">
              Se il genitore non ha <code>height</code>, il figlio non sa &quot;50% di cosa&quot;!
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4">Esempio: height in percentuale</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="container-height">
  <div class="box-half">
    Sono alto 50% del container
  </div>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.container-height {
  height: 400px;
  background-color: #F3E5F5;
  padding: 20px;
  border: 3px solid #9C27B0;
}

.box-half {
  height: 50%;
  background-color: #9C27B0;
  color: white;
  padding: 20px;
  font-weight: bold;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="Box alto 50% del container (200px)"
            html={`<style>
.container-height-demo {
  height: 400px;
  background-color: #F3E5F5;
  padding: 20px;
  border: 3px solid #9C27B0;
  border-radius: 8px;
}

.box-half-demo {
  height: 50%;
  background-color: #9C27B0;
  color: white;
  padding: 20px;
  font-weight: bold;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

<div class="container-height-demo">
  <div class="box-half-demo">
    Sono alto 50% del container (200px)
  </div>
</div>`}
          />

          <div className="bg-red-50 border-l-4 border-red-500 p-6">
            <h3 className="font-bold text-red-700 mb-3">⚠️ Errore Comune</h3>
            <p className="text-gray-700">
              Se rimuovi <code>height: 400px</code> dal container, il box figlio con <code>height: 50%</code>{' '}
              NON funzionerà come ti aspetti! Serve sempre un&apos;altezza di riferimento nel genitore.
            </p>
          </div>
        </section>

        {/* Overflow - Gestire Contenuti Grandi */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">📦 overflow - Quando il Contenuto è Troppo Grande!</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              Cosa succede quando il contenuto di un elemento è <strong>più grande del contenitore</strong>?
            </p>
            <p className="text-lg mb-4">
              Di default, il contenuto <strong>esce</strong> dal contenitore! Ma puoi controllarlo con{' '}
              <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">overflow</code>.
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg mb-6">
            <h3 className="font-bold text-xl mb-3">🎯 Valori di overflow</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">visible (default)</p>
                <p className="text-sm text-gray-800">Il contenuto esce dal box</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">hidden</p>
                <p className="text-sm text-gray-800">Nasconde il contenuto che esce</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">scroll</p>
                <p className="text-sm text-gray-800">Barra di scorrimento sempre visibile</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">auto</p>
                <p className="text-sm text-gray-800">Barra solo SE necessaria (consigliato!)</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Esempio 1: overflow: hidden</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="box-overflow-hidden">
  <p>Questo è un testo molto lungo che
  supera l'altezza del contenitore.
  Con overflow hidden, il testo che
  supera viene nascosto e non è più
  visibile all'utente. Utile per
  nascondere contenuto extra!</p>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.box-overflow-hidden {
  width: 300px;
  height: 100px;
  overflow: hidden;
  background-color: #FFF3E0;
  border: 2px solid #FF9800;
  padding: 15px;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="overflow: hidden - Il testo viene tagliato"
            html={`<style>
.box-overflow-hidden-demo {
  width: 300px;
  height: 100px;
  overflow: hidden;
  background-color: #FFF3E0;
  border: 2px solid #FF9800;
  padding: 15px;
  border-radius: 8px;
  margin: 0 auto;
}
</style>

<div class="box-overflow-hidden-demo">
  <p>Questo è un testo molto lungo che supera l'altezza del contenitore. Con overflow hidden, il testo che supera viene nascosto e non è più visibile all'utente. Utile per nascondere contenuto extra!</p>
</div>`}
          />

          <h3 className="text-2xl font-bold mb-4 mt-8">Esempio 2: overflow: auto (Consigliato!)</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="box-overflow-auto">
  <p>Questo è un testo molto lungo...
  Con overflow auto, appare una barra
  di scorrimento SOLO se necessaria!
  Puoi scorrere per vedere tutto il
  contenuto. Questa è l'opzione più
  usata nei siti moderni!</p>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.box-overflow-auto {
  width: 300px;
  height: 120px;
  overflow: auto;
  background-color: #E8F5E9;
  border: 2px solid #4CAF50;
  padding: 15px;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="overflow: auto - Barra di scorrimento se necessaria"
            html={`<style>
.box-overflow-auto-demo {
  width: 300px;
  height: 120px;
  overflow: auto;
  background-color: #E8F5E9;
  border: 2px solid #4CAF50;
  padding: 15px;
  border-radius: 8px;
  margin: 0 auto;
}
</style>

<div class="box-overflow-auto-demo">
  <p>Questo è un testo molto lungo che supera l'altezza del contenitore. Con overflow auto, appare una barra di scorrimento SOLO se necessaria! Puoi scorrere per vedere tutto il contenuto. Questa è l'opzione più usata nei siti moderni! Continua a scorrere per vedere tutto il testo...</p>
</div>
<p class="text-center text-sm text-gray-600 mt-2">↑ Prova a scorrere dentro il box!</p>`}
          />

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h3 className="font-bold text-green-700 mb-3">💡 Quando Usare Cosa?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ <strong>overflow: auto</strong> → Contenitori di testo, chat, liste (consigliato!)</li>
              <li>✅ <strong>overflow: hidden</strong> → Nascondere contenuto extra, immagini crop</li>
              <li>✅ <strong>overflow: scroll</strong> → Quando vuoi SEMPRE la barra (raro)</li>
              <li>❌ <strong>overflow: visible</strong> → Di solito non lo usi esplicitamente (è il default)</li>
            </ul>
          </div>
        </section>

        {/* Inheritance - Ereditarietà */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">👨‍👦 Inheritance - Le Proprietà Ereditate</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              Alcune proprietà CSS vengono <strong>automaticamente ereditate</strong> dai figli!
            </p>
            <p className="text-lg mb-4">
              Esempio: Se imposti <code>color: blue</code> sul body, TUTTO il testo della pagina diventa blu!
            </p>
            <p className="text-lg">
              🔑 <strong>Regola:</strong> Le proprietà legate al <strong>testo</strong> si ereditano. Quelle legate al <strong>box</strong> NO.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-6 rounded-lg mb-6">
            <h3 className="font-bold text-xl mb-3">📋 Proprietà che SI Ereditano</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold mb-2">✅ Testo:</p>
                <ul className="space-y-1 ml-4">
                  <li>• color</li>
                  <li>• font-family</li>
                  <li>• font-size</li>
                  <li>• font-weight</li>
                  <li>• font-style</li>
                  <li>• text-align</li>
                  <li>• text-decoration</li>
                  <li>• text-transform</li>
                  <li>• letter-spacing</li>
                  <li>• word-spacing</li>
                  <li>• line-height</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">❌ Box (NON ereditano):</p>
                <ul className="space-y-1 ml-4">
                  <li>• width, height</li>
                  <li>• margin, padding</li>
                  <li>• border</li>
                  <li>• background</li>
                  <li>• display</li>
                  <li>• position</li>
                  <li>• overflow</li>
                  <li>• z-index</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Esempio: Inheritance in azione</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="parent">
  <p>Questo paragrafo eredita
  il colore e il font del padre!</p>
  <div class="child">
    <p>Anche questo eredita!</p>
  </div>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.parent {
  color: #8B4513;
  font-family: Georgia, serif;
  font-size: 18px;
  background-color: #FFF8DC;
  padding: 20px;
  border: 3px solid #DAA520;
}

.child {
  background-color: #FFFACD;
  padding: 15px;
  border: 2px dashed #F0E68C;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="I figli ereditano color, font-family, font-size dal padre"
            html={`<style>
.parent-demo {
  color: #8B4513;
  font-family: Georgia, serif;
  font-size: 18px;
  background-color: #FFF8DC;
  padding: 20px;
  border: 3px solid #DAA520;
  border-radius: 8px;
}

.child-demo {
  background-color: #FFFACD;
  padding: 15px;
  border: 2px dashed #F0E68C;
  border-radius: 6px;
  margin-top: 10px;
}
</style>

<div class="parent-demo">
  <p>Questo paragrafo eredita il colore e il font del padre!</p>
  <div class="child-demo">
    <p>Anche questo eredita! Nota: background e border NON si ereditano.</p>
  </div>
</div>`}
          />

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
            <h3 className="font-bold text-purple-700 mb-3">🎯 Perché è Utile?</h3>
            <p className="text-gray-700 mb-2">
              Grazie all&apos;inheritance, puoi impostare <code>font-family</code> e <code>color</code> sul <code>body</code>{' '}
              e TUTTA la pagina usa quello stile!
            </p>
            <p className="text-gray-700">
              Non devi ripetere le stesse proprietà su ogni elemento! 🚀
            </p>
          </div>
        </section>

        {/* Containing Block */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🎯 Containing Block - Il Punto di Riferimento</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              Il <strong>&quot;containing block&quot;</strong> è l&apos;elemento di riferimento per:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Dimensioni %</strong> (width, height)</li>
              <li>• <strong>Posizionamento</strong> (position absolute)</li>
              <li>• <strong>Margini %</strong></li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h3 className="font-bold text-yellow-700 mb-3">📝 Regole Semplici</h3>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>1. Per width/height %:</strong><br/>
                Il containing block è il <strong>genitore diretto</strong>
              </li>
              <li>
                <strong>2. Per position: absolute:</strong><br/>
                Il containing block è il <strong>primo genitore positioned</strong> (relative, absolute, fixed, sticky)
              </li>
              <li>
                <strong>3. Per position: fixed:</strong><br/>
                Il containing block è sempre la <strong>viewport</strong> (lo schermo)
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-6">Riepilogo Visivo</h3>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
              <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <tr>
                  <th className="border border-gray-300 p-4 text-left">Proprietà</th>
                  <th className="border border-gray-300 p-4 text-left">Containing Block</th>
                  <th className="border border-gray-300 p-4 text-left">Esempio</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 p-3"><code>width: 50%</code></td>
                  <td className="border border-gray-300 p-3">Genitore diretto</td>
                  <td className="border border-gray-300 p-3">50% della larghezza del padre</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3"><code>height: 50%</code></td>
                  <td className="border border-gray-300 p-3">Genitore diretto (se ha height)</td>
                  <td className="border border-gray-300 p-3">50% dell&apos;altezza del padre</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 p-3"><code>position: absolute</code></td>
                  <td className="border border-gray-300 p-3">Primo genitore positioned</td>
                  <td className="border border-gray-300 p-3">top, right rispetto al genitore relative</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3"><code>position: fixed</code></td>
                  <td className="border border-gray-300 p-3">Viewport (schermo)</td>
                  <td className="border border-gray-300 p-3">Sempre rispetto alla finestra</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🌟 Best Practices - Quando Usare Cosa</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg">
              <h3 className="font-bold text-blue-700 mb-3">📐 Dimensioni</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ <strong>px</strong> → Dimensioni fisse (icone, pulsanti, bordi)</li>
                <li>✅ <strong>%</strong> → Layout responsive (width: 80%, max-width: 1200px)</li>
                <li>✅ <strong>em</strong> → Spacing relativo al testo (padding, margin)</li>
                <li>✅ <strong>rem</strong> → Font-size responsive</li>
                <li>✅ <strong>vw/vh</strong> → Dimensioni rispetto allo schermo</li>
              </ul>
            </div>

            <div className="bg-green-50 border-2 border-green-300 p-6 rounded-lg">
              <h3 className="font-bold text-green-700 mb-3">📦 Overflow</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ <strong>auto</strong> → Chat, commenti, liste lunghe</li>
                <li>✅ <strong>hidden</strong> → Immagini crop, nascondere extra</li>
                <li>✅ <strong>scroll</strong> → Quando vuoi sempre la barra (raro)</li>
                <li>❌ <strong>visible</strong> → Default, raramente lo imposti</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-2 border-purple-300 p-6 rounded-lg">
              <h3 className="font-bold text-purple-700 mb-3">👨‍👦 Inheritance</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ Imposta font-family sul <code>body</code></li>
                <li>✅ Imposta color principale sul <code>body</code></li>
                <li>✅ Usa inheritance per non ripetere codice</li>
                <li>❌ Non fare affidamento su inheritance per box properties</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-2 border-orange-300 p-6 rounded-lg">
              <h3 className="font-bold text-orange-700 mb-3">🎯 Layout</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ Container: max-width % + margin auto (centrato)</li>
                <li>✅ Figli: width % per responsive</li>
                <li>✅ Flexbox/Grid per allineamenti complessi</li>
                <li>✅ Position relative + absolute per overlay</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Esercizio */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">💪 Esercizio Pratico</h2>

          <Exercise
            title="Card Container con Overflow"
            difficulty="media"
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
  <title>Card Container</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Card Container con Overflow</h1>
</body>
</html>`,
                  highlightLines: []
                }
              },
              {
                title: "Crea il container con 8 card",
                code: {
                  language: "html",
                  code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Container</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Card Container con Overflow</h1>

  <div class="card-container">
    <div class="card">Card 1 - Lorem ipsum dolor sit amet</div>
    <div class="card">Card 2 - Consectetur adipiscing elit</div>
    <div class="card">Card 3 - Sed do eiusmod tempor</div>
    <div class="card">Card 4 - Incididunt ut labore et dolore</div>
    <div class="card">Card 5 - Magna aliqua ut enim</div>
    <div class="card">Card 6 - Ad minim veniam quis</div>
    <div class="card">Card 7 - Nostrud exercitation ullamco</div>
    <div class="card">Card 8 - Laboris nisi ut aliquip</div>
  </div>
</body>
</html>`,
                  highlightLines: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
                }
              },
              {
                title: "Crea style.css con body che definisce inheritance",
                code: {
                  language: "css",
                  code: `body {
  font-family: Arial, sans-serif;
  color: #333;
  margin: 0;
  padding: 20px;
  background-color: #ECF0F1;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}`,
                  highlightLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                }
              },
              {
                title: "Stila il container con overflow: auto",
                code: {
                  language: "css",
                  code: `body {
  font-family: Arial, sans-serif;
  color: #333;
  margin: 0;
  padding: 20px;
  background-color: #ECF0F1;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

.card-container {
  width: 400px;
  height: 300px;
  overflow: auto;
  background-color: #F5F5F5;
  padding: 20px;
  border: 2px solid #999;
  margin: 0 auto;
}`,
                  highlightLines: [14, 15, 16, 17, 18, 19, 20, 21, 22]
                }
              },
              {
                title: "Stila le card (width 100% eredita dal container!)",
                code: {
                  language: "css",
                  code: `body {
  font-family: Arial, sans-serif;
  color: #333;
  margin: 0;
  padding: 20px;
  background-color: #ECF0F1;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

.card-container {
  width: 400px;
  height: 300px;
  overflow: auto;
  background-color: #F5F5F5;
  padding: 20px;
  border: 2px solid #999;
  margin: 0 auto;
}

.card {
  width: 100%;
  height: 80px;
  background-color: white;
  margin-bottom: 15px;
  padding: 15px;
  border: 1px solid #DDD;
  border-radius: 8px;
  font-size: 16px;
}`,
                  highlightLines: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33]
                }
              },
              "Salva i file e apri in Live Server (doppio clic + F5)",
              "Osserva la barra di scorrimento nel container - ci sono 8 card ma lo spazio è solo per 3!",
              "Il colore #333 e font Arial sono ereditati dal body alle card",
              "Prova a cambiare overflow da auto a hidden - le card extra spariscono!",
              "Prova a cambiare width delle card da 100% a 80% - si adattano al container"
            ]}
            experiments={[
              "Cambia overflow da auto a scroll - la scrollbar sarà sempre visibile anche se non necessaria",
              "Cambia overflow a hidden - le card extra vengono tagliate fuori",
              "Cambia width delle card da 100% a 50% - saranno la metà del container",
              "Cambia height del container da 300px a 600px - vedrai tutte le 8 card senza scrollare",
              "Aggiungi color: red; alla classe .card - vedi come overrida l'inheritance del body!"
            ]}
          />
        </section>

        {/* Sfida */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🏆 Sfida Finale</h2>

          <Challenge
            title="Dashboard Responsive con Relazioni Parent-Child"
            description="Crea una dashboard che dimostra tutte le relazioni padre-figlio apprese: percentuali, overflow, inheritance e containing block."
            requirements={[
              'Body: font-family sans-serif, color #2C3E50, background #ECF0F1',
              'Container principale: width 90%, max-width 1200px, margin 0 auto, background white, padding 30px',
              'Sidebar: width 25%, height 500px, overflow auto, background #34495E, color white (override inheritance!), padding 20px, float left o display inline-block',
              'Main content: width 70%, display inline-block, vertical-align top, padding 20px',
              'Nella sidebar: 12 link (ul > li > a), ogni link padding 10px (vedi overflow in azione)',
              'Nel main: 6 card con class="info-card"',
              'Ogni card: width 48%, display inline-block, height 150px, overflow hidden, margin 1%, background gradient, border-radius 12px, padding 20px',
              'Card title: font-size 24px, font-weight bold, margin-bottom 10px (eredita color dal body)',
              'Card con position relative + badge position absolute (top 10px, right 10px)',
              'Badge: background #E74C3C, color white, padding 5px 10px, border-radius 15px, font-size 12px',
              'Testa: riduci larghezza finestra (width % responsive), scrolla sidebar (overflow auto), verifica inheritance color',
              'Bonus: Aggiungi height % su almeno 2 card (ricorda: serve height sul parent!)',
            ]}
          />
        </section>

      {/* Conclusione e Riepilogo */}
      <section className="mt-12 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Fantastico! Ora Capisci le Relazioni CSS!</h2>
        <p className="text-xl mb-4">
          Hai imparato come <strong>contenitori e figli interagiscono</strong> - il fondamento di tutto il CSS!
        </p>
        <p className="text-lg mb-6">
          Ora sai quando usare %, px, em, rem - e come gestire overflow e inheritance! 🚀
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
            <p className="font-bold text-yellow-200 mb-2">📏 Unità di Misura (7):</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>px, %, em, rem, vw, vh, fr</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-yellow-200 mb-2">🎨 Proprietà CSS (55 totali):</p>
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
              <li>Lezione 11: flex-direction, justify-content, align-items, gap, flex-wrap, flex</li>
              <li>Lezione 12: grid-template-columns, grid-template-rows, grid-column, grid-row, height</li>
              <li><strong>Lezione 13 (1 NUOVA)</strong>: overflow ✨</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-400 bg-opacity-30 p-4 rounded border-2 border-green-300">
          <p className="font-bold mb-2">🚀 Prossima Lezione</p>
          <p className="text-lg">
            Hai completato le basi del CSS! Nelle prossime lezioni metterai in pratica tutto ciò che hai imparato! 🎨
          </p>
        </div>
      </section>

    </LessonLayout>
  );
}
