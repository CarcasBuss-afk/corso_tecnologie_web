import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import LessonPreview from '@/components/didattica/LessonPreview';

export default function Lezione14TransitionsTransform() {
  const lezioni = getLezioniByModuloSlug('modulo-2-css');

  return (
    <LessonLayout
      moduloSlug="modulo-2-css"
      moduloTitolo="Modulo 2: CSS"
      lezioni={lezioni}
      lezioneSlug="lezione-14-transitions-transform"
      lezioneTitolo="Transitions e Transform 2D"
    >
      <LessonHeader
        numero={14}
        titolo="Transitions e Transform 2D"
        durata="2 ore"
        difficolta="media"
        obiettivi={[
          'Approfondire transition per creare animazioni fluide',
          'Usare transform per ruotare, scalare e spostare elementi',
          'Combinare transition e transform per effetti dinamici',
          'Controllare velocità e timing delle animazioni',
          'Creare effetti hover professionali',
        ]}
      />

        {/* Introduzione */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-8 rounded-lg mb-8">
            <h2 className="text-3xl font-bold mb-4">
              ✨ Dai Vita ai Tuoi Elementi con Movimento!
            </h2>
            <p className="text-xl mb-4">
              Nella Lezione 6 hai visto <code className="bg-white bg-opacity-20 px-2 py-1 rounded text-gray-900 font-bold">transition</code> brevemente.
              Oggi la approfondiamo e aggiungi <strong>transform</strong>!
            </p>
            <p className="text-xl mb-4">
              🎯 <strong>Oggi impari:</strong> Animazioni fluide, rotazioni, ingrandimenti e spostamenti - tutto con il CSS!
            </p>
            <p className="text-lg">
              Questi effetti rendono i siti web moderni e professionali! 🚀
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="font-bold text-blue-700 mb-3">🎯 Cosa Imparerai</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>transition - creare animazioni fluide tra stati</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>transform: translate - spostare elementi</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>transform: rotate - ruotare elementi</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>transform: scale - ingrandire/ridurre elementi</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span>Combinare effetti per animazioni complesse</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h3 className="font-bold text-yellow-700 mb-3">📌 Ti Ricordi?</h3>
            <p className="text-gray-700">
              Nella <strong>Lezione 6</strong> hai già usato <code className="bg-yellow-100 px-2 py-1 rounded">transition</code> con :hover!<br/>
              Oggi scopri TUTTI i parametri e la combini con <strong>transform</strong> per effetti spettacolari! 🌟
            </p>
          </div>
        </section>

        {/* Transition - Approfondimento */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">⚡ Transition - Animazioni Fluide</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">transition</code> rende i cambiamenti{' '}
              <strong>graduali</strong> invece che istantanei!
            </p>
            <p className="text-lg mb-4">
              Invece di cambiare colore subito, il colore &quot;sfuma&quot; dolcemente. 🎨
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 rounded-lg mb-6">
            <h3 className="font-bold text-xl mb-3">🔑 Parametri di transition</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">transition-property</p>
                <p className="text-sm text-gray-800">Quale proprietà animare (all, color, background...)</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">transition-duration</p>
                <p className="text-sm text-gray-800">Durata (0.3s, 1s, 500ms...)</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">transition-timing-function</p>
                <p className="text-sm text-gray-800">Velocità (ease, linear, ease-in-out...)</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">transition-delay</p>
                <p className="text-sm text-gray-800">Ritardo prima di iniziare (0s, 0.5s...)</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">Esempio: Transition Completa</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<button class="btn-transition">
  Passa sopra di me!
</button>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.btn-transition {
  background-color: #3498DB;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}

.btn-transition:hover {
  background-color: #2ECC71;
  padding: 20px 40px;
  border-radius: 20px;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="Passa sopra il pulsante - animazione fluida!"
            html={`<style>
.btn-transition-demo {
  background-color: #3498DB;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}

.btn-transition-demo:hover {
  background-color: #2ECC71;
  padding: 20px 40px;
  border-radius: 20px;
}
</style>

<div style="text-align: center; padding: 20px;">
  <button class="btn-transition-demo">Passa sopra di me!</button>
</div>`}
          />

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h3 className="font-bold text-green-700 mb-3">✨ Cosa Succede?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ <code>transition-property: all</code> → Anima TUTTE le proprietà che cambiano</li>
              <li>✅ <code>transition-duration: 0.3s</code> → L&apos;animazione dura 0.3 secondi</li>
              <li>✅ <code>transition-timing-function: ease-in-out</code> → Inizia piano, accelera, finisce piano</li>
              <li>✅ Quando passi sopra, background, padding e border-radius cambiano gradualmente!</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-8">Shorthand - Scrittura Abbreviata</h3>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
            <p className="text-gray-700 mb-4">
              Invece di scrivere 4 righe, puoi usare la <strong>shorthand</strong>:
            </p>
            <CodeExample
              language="css"
              code={`/* Forma lunga */
transition-property: all;
transition-duration: 0.3s;
transition-timing-function: ease-in-out;
transition-delay: 0s;

/* Forma abbreviata (shorthand) */
transition: all 0.3s ease-in-out 0s;

/* Ancora più breve (delay opzionale se 0s) */
transition: all 0.3s ease-in-out;

/* Brevissimo (ease-in-out è default) */
transition: all 0.3s;`}
            />
          </div>
        </section>

        {/* Transform - Translate */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🚀 transform: translate - Spostare Elementi</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">transform: translate()</code>{' '}
              sposta un elemento senza modificare il layout!
            </p>
            <p className="text-lg">
              È come &quot;sollevare&quot; l&apos;elemento e spostarlo. Gli altri elementi non si muovono! 📍
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4">Esempio: Spostamento su Hover</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="card-translate">
  <h3>Card Volante</h3>
  <p>Passa sopra di me!</p>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.card-translate {
  width: 200px;
  padding: 20px;
  background-color: #9B59B6;
  color: white;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;
}

.card-translate:hover {
  transform: translateY(-10px);
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="La card si solleva quando passi sopra!"
            html={`<style>
.card-translate-demo {
  width: 200px;
  padding: 20px;
  background-color: #9B59B6;
  color: white;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;
  margin: 20px auto;
}

.card-translate-demo:hover {
  transform: translateY(-10px);
}

.card-translate-demo h3 {
  margin: 0 0 10px 0;
  font-size: 20px;
}

.card-translate-demo p {
  margin: 0;
  font-size: 14px;
}
</style>

<div class="card-translate-demo">
  <h3>Card Volante</h3>
  <p>Passa sopra di me!</p>
</div>`}
          />

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
            <h3 className="font-bold text-yellow-700 mb-3">📝 Sintassi translate</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <code className="bg-yellow-100 px-2 py-1 rounded">translateX(50px)</code> → Sposta a destra di 50px</li>
              <li>• <code className="bg-yellow-100 px-2 py-1 rounded">translateY(-20px)</code> → Sposta in alto di 20px (negativo = su!)</li>
              <li>• <code className="bg-yellow-100 px-2 py-1 rounded">translate(30px, -10px)</code> → Sposta a destra 30px e in alto 10px</li>
            </ul>
          </div>
        </section>

        {/* Transform - Scale */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🔍 transform: scale - Ingrandire/Ridurre</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">transform: scale()</code>{' '}
              cambia la dimensione dell&apos;elemento!
            </p>
            <p className="text-lg">
              <code>scale(1)</code> = dimensione normale, <code>scale(1.5)</code> = 150% più grande, <code>scale(0.8)</code> = 80% più piccolo.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4">Esempio: Zoom su Hover</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="image-zoom">
  <div class="zoom-content">
    🖼️
  </div>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.image-zoom {
  width: 150px;
  height: 150px;
  background-color: #E8F4F8;
  border: 3px solid #3498DB;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.zoom-content {
  font-size: 60px;
  transition: transform 0.3s;
  cursor: pointer;
}

.zoom-content:hover {
  transform: scale(1.3);
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="Passa sopra l'emoji - si ingrandisce!"
            html={`<style>
.image-zoom-demo {
  width: 150px;
  height: 150px;
  background-color: #E8F4F8;
  border: 3px solid #3498DB;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 20px auto;
}

.zoom-content-demo {
  font-size: 60px;
  transition: transform 0.3s;
  cursor: pointer;
}

.zoom-content-demo:hover {
  transform: scale(1.3);
}
</style>

<div class="image-zoom-demo">
  <div class="zoom-content-demo">🖼️</div>
</div>`}
          />

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="font-bold text-blue-700 mb-3">📝 Sintassi scale</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <code className="bg-blue-100 px-2 py-1 rounded">scale(1.5)</code> → 150% più grande (uguale in entrambe le direzioni)</li>
              <li>• <code className="bg-blue-100 px-2 py-1 rounded">scaleX(1.2)</code> → Solo larghezza al 120%</li>
              <li>• <code className="bg-blue-100 px-2 py-1 rounded">scaleY(0.8)</code> → Solo altezza all&apos;80%</li>
              <li>• <code className="bg-blue-100 px-2 py-1 rounded">scale(1.5, 0.8)</code> → Larghezza 150%, altezza 80%</li>
            </ul>
          </div>
        </section>

        {/* Transform - Rotate */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🔄 transform: rotate - Ruotare</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">transform: rotate()</code>{' '}
              ruota un elemento!
            </p>
            <p className="text-lg">
              Usa <strong>gradi (deg)</strong>: <code>rotate(45deg)</code> = ruota di 45°, <code>rotate(-90deg)</code> = ruota indietro di 90°.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4">Esempio: Rotazione su Hover</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="card-rotate">
  <p>⚙️</p>
  <p>Ingranaggio</p>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.card-rotate {
  width: 150px;
  padding: 20px;
  background-color: #F39C12;
  color: white;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.5s;
}

.card-rotate:hover {
  transform: rotate(180deg);
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="Passa sopra - l'ingranaggio gira!"
            html={`<style>
.card-rotate-demo {
  width: 150px;
  padding: 20px;
  background-color: #F39C12;
  color: white;
  border-radius: 12px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.5s;
  margin: 20px auto;
}

.card-rotate-demo:hover {
  transform: rotate(180deg);
}

.card-rotate-demo p {
  margin: 0;
}

.card-rotate-demo p:first-child {
  font-size: 50px;
  margin-bottom: 10px;
}

.card-rotate-demo p:last-child {
  font-size: 16px;
  font-weight: bold;
}
</style>

<div class="card-rotate-demo">
  <p>⚙️</p>
  <p>Ingranaggio</p>
</div>`}
          />

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
            <h3 className="font-bold text-purple-700 mb-3">📝 Sintassi rotate</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <code className="bg-purple-100 px-2 py-1 rounded">rotate(45deg)</code> → Ruota in senso orario di 45°</li>
              <li>• <code className="bg-purple-100 px-2 py-1 rounded">rotate(-90deg)</code> → Ruota antiorario di 90°</li>
              <li>• <code className="bg-purple-100 px-2 py-1 rounded">rotate(360deg)</code> → Giro completo (torna alla posizione iniziale)</li>
            </ul>
          </div>
        </section>

        {/* Combinare Trasformazioni */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🎨 Combinare Trasformazioni - Effetti Spettacolari!</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              Puoi combinare <strong>translate, scale, rotate</strong> sulla stessa proprietà <code>transform</code>!
            </p>
            <p className="text-lg">
              Separa le trasformazioni con uno <strong>spazio</strong>.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4">Esempio: Card con Effetto Completo</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold mb-2">HTML:</h4>
              <CodeExample
                language="html"
                code={`<div class="card-combo">
  <h3>✨ Magia CSS</h3>
  <p>Passa sopra!</p>
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS:</h4>
              <CodeExample
                language="css"
                code={`.card-combo {
  width: 180px;
  padding: 25px;
  background-color: #E74C3C;
  color: white;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
}

.card-combo:hover {
  transform: translateY(-15px) scale(1.1) rotate(3deg);
  background-color: #C0392B;
}`}
              />
            </div>
          </div>

          <LessonPreview
            title="Combinazione di translate + scale + rotate!"
            html={`<style>
.card-combo-demo {
  width: 180px;
  padding: 25px;
  background-color: #E74C3C;
  color: white;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  margin: 30px auto;
}

.card-combo-demo:hover {
  transform: translateY(-15px) scale(1.1) rotate(3deg);
  background-color: #C0392B;
}

.card-combo-demo h3 {
  margin: 0 0 10px 0;
  font-size: 22px;
}

.card-combo-demo p {
  margin: 0;
  font-size: 16px;
}
</style>

<div class="card-combo-demo">
  <h3>✨ Magia CSS</h3>
  <p>Passa sopra!</p>
</div>`}
          />

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h3 className="font-bold text-green-700 mb-3">✨ Cosa Succede?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ <code>translateY(-15px)</code> → Si solleva di 15px</li>
              <li>✅ <code>scale(1.1)</code> → Si ingrandisce del 10%</li>
              <li>✅ <code>rotate(3deg)</code> → Si inclina leggermente</li>
              <li>✅ <code>background-color</code> → Cambia colore</li>
              <li>✅ Tutto animato fluidamente con <code>transition: all 0.4s</code>!</li>
            </ul>
          </div>
        </section>

        {/* Timing Functions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">⏱️ Timing Functions - Controllare la Velocità</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
            <p className="text-lg mb-4">
              <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">transition-timing-function</code>{' '}
              controlla <strong>come</strong> avviene l&apos;animazione nel tempo.
            </p>
          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg mb-6">
            <h3 className="font-bold text-xl mb-3">🎯 Timing Functions Principali</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">ease (default)</p>
                <p className="text-gray-800">Inizia piano, accelera, rallenta alla fine</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">linear</p>
                <p className="text-gray-800">Velocità costante dall&apos;inizio alla fine</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">ease-in</p>
                <p className="text-gray-800">Inizia piano, poi accelera</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">ease-out</p>
                <p className="text-gray-800">Inizia veloce, rallenta alla fine</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <p className="font-bold mb-2 text-gray-900">ease-in-out</p>
                <p className="text-gray-800">Piano all&apos;inizio e alla fine, veloce al centro</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="font-bold text-blue-700 mb-3">💡 Quando Usare Cosa?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ <strong>ease-in-out</strong> → Movimento naturale (consigliato per la maggior parte!)</li>
              <li>✅ <strong>ease-out</strong> → Elementi che appaiono (menu, modal)</li>
              <li>✅ <strong>linear</strong> → Rotazioni continue, caricamenti</li>
              <li>✅ <strong>ease-in</strong> → Elementi che scompaiono</li>
            </ul>
          </div>
        </section>

        {/* Tabella Riepilogativa */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">📊 Tabella Riepilogativa</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
              <thead className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
                <tr>
                  <th className="border border-gray-300 p-4 text-left">Proprietà</th>
                  <th className="border border-gray-300 p-4 text-left">Descrizione</th>
                  <th className="border border-gray-300 p-4 text-left">Esempio</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 p-3"><code>transition</code></td>
                  <td className="border border-gray-300 p-3">Anima cambiamenti di proprietà</td>
                  <td className="border border-gray-300 p-3">transition: all 0.3s ease-in-out;</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3"><code>transform: translate()</code></td>
                  <td className="border border-gray-300 p-3">Sposta elemento</td>
                  <td className="border border-gray-300 p-3">translateY(-10px)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 p-3"><code>transform: scale()</code></td>
                  <td className="border border-gray-300 p-3">Ingrandisce/riduce</td>
                  <td className="border border-gray-300 p-3">scale(1.2)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3"><code>transform: rotate()</code></td>
                  <td className="border border-gray-300 p-3">Ruota elemento</td>
                  <td className="border border-gray-300 p-3">rotate(45deg)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <td className="border border-gray-300 p-3"><code>timing-function</code></td>
                  <td className="border border-gray-300 p-3">Velocità animazione</td>
                  <td className="border border-gray-300 p-3">ease-in-out, linear, ease</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Esercizio */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">💪 Esercizio Pratico</h2>

          <Exercise
            title="Card Gallery con Effetti"
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
  <title>Card Interattive</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Servizi con Effetti</h1>
</body>
</html>`,
                  highlightLines: []
                }
              },
              {
                title: "Crea il container con 6 card",
                code: {
                  language: "html",
                  code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Interattive</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Servizi con Effetti</h1>

  <div class="container">
    <div class="card">
      <div class="emoji">🎨</div>
      <h3>Design</h3>
      <p>Creiamo design moderni</p>
    </div>

    <div class="card">
      <div class="emoji">💻</div>
      <h3>Development</h3>
      <p>Sviluppo web professionale</p>
    </div>

    <div class="card">
      <div class="emoji">📱</div>
      <h3>Mobile</h3>
      <p>App iOS e Android</p>
    </div>

    <div class="card featured">
      <div class="emoji">⭐</div>
      <h3>Premium</h3>
      <p>Servizio esclusivo VIP</p>
    </div>

    <div class="card">
      <div class="emoji">🚀</div>
      <h3>Marketing</h3>
      <p>Strategia digitale</p>
    </div>

    <div class="card">
      <div class="emoji">🎯</div>
      <h3>SEO</h3>
      <p>Ottimizzazione motori</p>
    </div>
  </div>
</body>
</html>`,
                  highlightLines: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]
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
  background-color: #F5F5F5;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
  color: #2C3E50;
}`,
                  highlightLines: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
                }
              },
              {
                title: "Stila il container con Flexbox",
                code: {
                  language: "css",
                  code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #F5F5F5;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
  color: #2C3E50;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 30px;
}`,
                  highlightLines: [19, 20, 21, 22, 23, 24, 25]
                }
              },
              {
                title: "Stila le card con transition",
                code: {
                  language: "css",
                  code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #F5F5F5;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
  color: #2C3E50;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 30px;
}

.card {
  width: 200px;
  height: 250px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}`,
                  highlightLines: [27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
                }
              },
              {
                title: "Aggiungi transform al hover",
                code: {
                  language: "css",
                  code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #F5F5F5;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
  color: #2C3E50;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 30px;
}

.card {
  width: 200px;
  height: 250px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-10px) scale(1.05);
}`,
                  highlightLines: [38, 39, 40]
                }
              },
              {
                title: "Stila i contenuti della card",
                code: {
                  language: "css",
                  code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #F5F5F5;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
  color: #2C3E50;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 30px;
}

.card {
  width: 200px;
  height: 250px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-10px) scale(1.05);
}

.emoji {
  font-size: 60px;
  margin-bottom: 15px;
}

.card h3 {
  color: white;
  margin-bottom: 10px;
  font-size: 20px;
}

.card p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
}`,
                  highlightLines: [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56]
                }
              },
              {
                title: "Stila la card featured con effetto speciale",
                code: {
                  language: "css",
                  code: `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #F5F5F5;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
  color: #2C3E50;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 30px;
}

.card {
  width: 200px;
  height: 250px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-10px) scale(1.05);
}

.emoji {
  font-size: 60px;
  margin-bottom: 15px;
}

.card h3 {
  color: white;
  margin-bottom: 10px;
  font-size: 20px;
}

.card p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 14px;
}

.featured {
  border: 3px solid gold;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.featured:hover {
  transform: translateY(-15px) scale(1.1) rotate(2deg);
}`,
                  highlightLines: [58, 59, 60, 61, 62, 63, 64, 65]
                }
              },
              "Salva i file e apri in Live Server (doppio clic + F5)",
              "Passa il mouse sulle card normali - si sollevano e ingrandiscono!",
              "Passa il mouse sulla card Premium (featured) - si solleva di più, ingrandisce di più E ruota!",
              "Osserva come la transizione rende tutto fluido grazie a transition: all 0.3s"
            ]}
            experiments={[
              "Cambia transition da 0.3s a 1s - l'animazione sarà più lenta",
              "Cambia ease-in-out in linear - l'animazione avrà velocità costante",
              "Cambia translateY(-10px) in translateY(-30px) - le card si solleveranno di più",
              "Cambia scale(1.05) in scale(1.2) - le card diventeranno più grandi",
              "Aggiungi box-shadow: 0 10px 30px rgba(0,0,0,0.3); nel hover - crea ombra!"
            ]}
          />
        </section>

        {/* Sfida */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">🏆 Sfida Finale</h2>

          <Challenge
            title="Portfolio Interattivo con Animazioni"
            description="Crea una pagina portfolio personale con effetti professionali usando transition e transform."
            requirements={[
              'Header: h1 centrato con transition color 0.5s, hover cambia colore',
              'Navbar: 5 link orizzontali (Flexbox), ogni link con transition all 0.3s',
              'Link hover: transform scale(1.1) + colore diverso',
              'Hero section: div hero con background gradient, height 400px, display flex center',
              'Hero button: padding 20px 40px, border-radius 30px, transition all 0.4s ease-in-out',
              'Button hover: transform translateY(-5px) + background più scuro + box-shadow (usa già visto!)',
              'Projects section: 9 card progetto (Grid 3 colonne)',
              'Ogni card: width 100%, height 300px, overflow hidden, border-radius 20px, cursor pointer, transition transform 0.3s',
              'Card hover: transform scale(1.05) rotate(1deg)',
              'Dentro card: immagine emoji grande (font-size 80px) con transition transform 0.5s',
              'Immagine hover: transform rotate(360deg)',
              'Footer: background scuro, padding 40px, text-align center, transition opacity 0.3s',
              'Almeno 5 elementi con animazioni diverse',
              'Testa tutti gli effetti: devono essere fluidi e professionali!',
            ]}
          />
        </section>

      {/* Conclusione e Riepilogo */}
      <section className="mt-12 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Fantastico! I Tuoi Siti Ora Sono Animati!</h2>
        <p className="text-xl mb-4">
          Hai imparato a creare <strong>animazioni fluide</strong> e <strong>trasformazioni dinamiche</strong>!
        </p>
        <p className="text-lg mb-6">
          transition e transform rendono i siti web moderni e professionali! 🚀
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
            <p className="font-bold text-yellow-200 mb-2">📏 Unità di Misura (8):</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>px, %, em, rem, vw, vh, fr, <strong className="text-yellow-300">deg (gradi) ✨</strong></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-yellow-200 mb-2">🎨 Proprietà CSS (59 totali):</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>Lezione 1-2: color, background-color, border</li>
              <li>Lezione 3: font-size, font-weight, text-align</li>
              <li>Lezione 4: padding, margin, width</li>
              <li>Lezione 5: font-family, font-style, text-decoration, text-transform, letter-spacing, word-spacing</li>
              <li>Lezione 6: cursor, transition (base)</li>
              <li>Lezione 7: box-sizing, max-width, min-height</li>
              <li>Lezione 8: border-radius, border-top/right/bottom/left, background-image, background-size, background-position, background-repeat, background-attachment</li>
              <li>Lezione 9: display, vertical-align</li>
              <li>Lezione 10: position, top, right, bottom, left, z-index</li>
              <li>Lezione 11: flex-direction, justify-content, align-items, gap, flex-wrap, flex</li>
              <li>Lezione 12: grid-template-columns, grid-template-rows, grid-column, grid-row, height</li>
              <li>Lezione 13: overflow</li>
              <li><strong>Lezione 14 (4 NUOVE)</strong>: transform, transition-duration, transition-timing-function, transition-delay ✨</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-400 bg-opacity-30 p-4 rounded border-2 border-green-300">
          <p className="font-bold mb-2">🚀 Prossima Lezione</p>
          <p className="text-lg">
            Imparerai i <strong>Pseudo-elementi ::before e ::after</strong> per aggiungere contenuto decorativo con il CSS! 🎨
          </p>
        </div>
      </section>

    </LessonLayout>
  );
}
