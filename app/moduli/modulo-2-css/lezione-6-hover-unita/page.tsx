import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import LessonPreview from '@/components/didattica/LessonPreview';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import { getLezioniByModuloSlug } from '@/lib/moduli';

export default function Lezione6() {
  const lezioni = getLezioniByModuloSlug('modulo-2-css');

  return (
    <LessonLayout
      moduloSlug="modulo-2-css"
      moduloTitolo="Modulo 2: CSS"
      lezioni={lezioni}
      lezioneSlug="lezione-6-hover-unita"
      lezioneTitolo="Lezione 6: Link Interattivi e :hover + Unità Responsive"
    >
      <LessonHeader
        numero={6}
        titolo="Link Interattivi e :hover + Unità Responsive"
        durata="1.5 ore"
        difficolta="media"
        obiettivi={[
          'Capire cos\'è la pseudo-classe :hover e come funziona',
          'Usare :link, :visited, :hover, :active, :focus sui link',
          'Creare effetti interattivi al passaggio del mouse',
          'Conoscere le unità di misura responsive (em, rem, %, vw, vh)',
          'Introduzione alle transizioni CSS per effetti smooth',
          'Cambiare il cursore del mouse con cursor',
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">🎯 Rendi i tuoi Siti Interattivi!</h2>
        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg mb-6">
          <p className="text-lg mb-4">
            Finora abbiamo creato stili <strong>statici</strong> - il sito ha sempre lo stesso aspetto.
          </p>
          <p className="text-lg mb-4">
            Ma i siti web moderni sono <strong>interattivi</strong>! Quando passi il mouse su un bottone,
            su un link, su un&apos;immagine... qualcosa cambia!
          </p>
          <p className="text-lg font-bold text-purple-700">
            Oggi imparerai a creare <strong>effetti hover</strong> e a usare <strong>unità di misura responsive</strong>!
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
          <h3 className="font-bold text-yellow-800 mb-2">💡 Cos&apos;è :hover?</h3>
          <p className="mb-3">
            <code className="bg-yellow-100 px-2 py-1 rounded">:hover</code> è una <strong>pseudo-classe</strong> CSS
            che applica uno stile quando il mouse passa sopra un elemento.
          </p>
          <p className="font-bold text-yellow-700">
            Esempio: <code className="bg-yellow-100 px-2 py-1 rounded">a:hover</code> significa
            &quot;applica questo stile ai link quando ci passo sopra col mouse&quot;.
          </p>
        </div>
      </section>

      {/* Pseudo-classi per i Link */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">🔗 Pseudo-classi per i Link</h2>
        <p className="mb-6">
          I link hanno 5 <strong>stati</strong> diversi, e possiamo stilizzarli in modo diverso per ognuno!
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-bold text-blue-700 mb-2">:link</h4>
            <p className="text-sm">Link <strong>non ancora visitato</strong></p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-bold text-purple-700 mb-2">:visited</h4>
            <p className="text-sm">Link <strong>già visitato</strong> (storia browser)</p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-bold text-green-700 mb-2">:hover</h4>
            <p className="text-sm">Mouse <strong>passa sopra</strong> il link</p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
            <h4 className="font-bold text-orange-700 mb-2">:active</h4>
            <p className="text-sm">Link <strong>nel momento del click</strong></p>
          </div>

          <div className="bg-pink-50 border-l-4 border-pink-500 p-4 md:col-span-2">
            <h4 className="font-bold text-pink-700 mb-2">:focus</h4>
            <p className="text-sm">Link <strong>selezionato con Tab</strong> (accessibilità!)</p>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
          <h3 className="font-bold text-red-700 mb-2">⚠️ Ordine Importante!</h3>
          <p className="mb-3">
            Le pseudo-classi dei link devono essere scritte in questo ordine specifico nel CSS:
          </p>
          <ol className="list-decimal list-inside space-y-1 ml-4">
            <li><strong>:link</strong> - stato normale</li>
            <li><strong>:visited</strong> - stato visitato</li>
            <li><strong>:hover</strong> - passaggio mouse</li>
            <li><strong>:active</strong> - momento del click</li>
          </ol>
          <p className="mt-3 font-bold text-red-600">
            💡 Trucco per ricordare: <strong>L</strong>o<strong>V</strong>e <strong>HA</strong>te (LoVe HAte)
          </p>
        </div>
      </section>

      {/* Esempio 1: Link con Hover Semplice */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Esempio 1: Link con Hover - Cambiare Colore</h2>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Come Scriverlo</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML:</h4>
            <CodeExample
              language="html"
              code={`<a href="https://esempio.com" class="link-colorato">Passa il mouse qui!</a>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS:</h4>
            <CodeExample
              language="css"
              code={`.link-colorato {
  color: #3498DB;
  text-decoration: underline;
}

.link-colorato:hover {
  color: #E74C3C;
  background-color: #FFF9C4;
}`}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Risultato nel Browser</h3>
        <LessonPreview
          title="Prova tu! Passa il mouse sul link"
          html={`<style>
.link-colorato-demo {
  color: #3498DB;
  text-decoration: underline;
  font-size: 18px;
  padding: 5px 10px;
}

.link-colorato-demo:hover {
  color: #E74C3C;
  background-color: #FFF9C4;
}
</style>

<p>Ecco il link: <a href="#" class="link-colorato-demo">Passa il mouse qui!</a></p>
<p style="margin-top: 15px; font-size: 14px; color: #666;">👆 Guarda come cambia colore e sfondo quando ci passi sopra!</p>`}
        />
      </section>

      {/* Esempio 2: Link con Tutte le Pseudo-classi */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Esempio 2: Link con Tutti gli Stati</h2>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Come Scriverlo</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML:</h4>
            <CodeExample
              language="html"
              code={`<a href="#" class="link-completo">Link con tutti gli stati</a>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS:</h4>
            <CodeExample
              language="css"
              code={`.link-completo:link {
  color: #2980B9;
  text-decoration: none;
}

.link-completo:visited {
  color: #8E44AD;
}

.link-completo:hover {
  color: #E67E22;
  text-decoration: underline;
}

.link-completo:active {
  color: #C0392B;
  font-weight: bold;
}`}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Risultato nel Browser</h3>
        <LessonPreview
          title="Interagisci con il link: passa il mouse, clicca, premi Tab"
          html={`<style>
.link-completo-demo:link {
  color: #2980B9;
  text-decoration: none;
  font-size: 18px;
}

.link-completo-demo:visited {
  color: #8E44AD;
}

.link-completo-demo:hover {
  color: #E67E22;
  text-decoration: underline;
}

.link-completo-demo:active {
  color: #C0392B;
  font-weight: bold;
}

.link-completo-demo:focus {
  outline: 2px solid #F39C12;
}
</style>

<p>Prova tutte le interazioni: <a href="#" class="link-completo-demo">Link Interattivo</a></p>
<ul style="margin-top: 15px; font-size: 14px; color: #666;">
  <li>🔵 Blu = link normale</li>
  <li>🟣 Viola = già visitato</li>
  <li>🟠 Arancione = passa il mouse</li>
  <li>🔴 Rosso = mentre clicchi</li>
  <li>🟡 Bordo giallo = focus (premi Tab)</li>
</ul>`}
        />
      </section>

      {/* Proprietà cursor */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">🖱️ Cambiare il Cursore del Mouse</h2>
        <p className="mb-6">
          La proprietà <code className="bg-gray-100 px-2 py-1 rounded">cursor</code> cambia l&apos;aspetto
          del puntatore del mouse quando passa sopra un elemento.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded border-2 border-blue-200">
            <h4 className="font-bold text-blue-700 mb-2">cursor: pointer</h4>
            <p className="text-sm">Manina (per link e bottoni)</p>
          </div>

          <div className="bg-purple-50 p-4 rounded border-2 border-purple-200">
            <h4 className="font-bold text-purple-700 mb-2">cursor: help</h4>
            <p className="text-sm">Punto interrogativo</p>
          </div>

          <div className="bg-green-50 p-4 rounded border-2 border-green-200">
            <h4 className="font-bold text-green-700 mb-2">cursor: wait</h4>
            <p className="text-sm">Clessidra (caricamento)</p>
          </div>

          <div className="bg-orange-50 p-4 rounded border-2 border-orange-200">
            <h4 className="font-bold text-orange-700 mb-2">cursor: text</h4>
            <p className="text-sm">Linea verticale (selezionare testo)</p>
          </div>

          <div className="bg-pink-50 p-4 rounded border-2 border-pink-200">
            <h4 className="font-bold text-pink-700 mb-2">cursor: not-allowed</h4>
            <p className="text-sm">Cerchio sbarrato (disabilitato)</p>
          </div>

          <div className="bg-yellow-50 p-4 rounded border-2 border-yellow-200">
            <h4 className="font-bold text-yellow-700 mb-2">cursor: move</h4>
            <p className="text-sm">Croce a 4 frecce</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico:</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML:</h4>
            <CodeExample
              language="html"
              code={`<div class="box-cliccabile">
  Passa il mouse qui!
</div>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS:</h4>
            <CodeExample
              language="css"
              code={`.box-cliccabile {
  background-color: #3498DB;
  color: white;
  padding: 20px;
  text-align: center;
}

.box-cliccabile:hover {
  background-color: #2980B9;
  cursor: pointer;
}`}
            />
          </div>
        </div>

        <LessonPreview
          title="Nota come il cursore diventa una manina"
          html={`<style>
.box-cliccabile-demo {
  background-color: #3498DB;
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
}

.box-cliccabile-demo:hover {
  background-color: #2980B9;
  cursor: pointer;
}
</style>

<div class="box-cliccabile-demo">
  👆 Passa il mouse qui! Il cursore diventa una manina
</div>`}
        />
      </section>

      {/* Unità di Misura Responsive */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">📏 Unità di Misura Responsive</h2>
        <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg mb-6">
          <p className="text-lg mb-4">
            Finora abbiamo usato <strong>px</strong> (pixel) per le dimensioni. Ma i pixel sono <strong>fissi</strong>!
          </p>
          <p className="text-lg font-bold text-green-700">
            Oggi impariamo le unità <strong>responsive</strong> che si adattano allo schermo! 📱💻
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* px */}
          <div className="bg-gray-50 border-l-4 border-gray-500 p-4">
            <h4 className="font-bold text-gray-700 mb-2">px (pixel)</h4>
            <p className="text-sm mb-2">Unità <strong>assoluta</strong> - dimensione fissa</p>
            <p className="text-xs text-gray-600">
              Esempio: <code className="bg-gray-200 px-1 rounded">font-size: 16px</code>
            </p>
            <p className="text-xs mt-2 font-bold text-gray-700">📐 Sempre la stessa dimensione</p>
          </div>

          {/* % */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-bold text-blue-700 mb-2">% (percentuale)</h4>
            <p className="text-sm mb-2">Relativa al <strong>genitore</strong></p>
            <p className="text-xs text-blue-600">
              Esempio: <code className="bg-blue-200 px-1 rounded">width: 50%</code>
            </p>
            <p className="text-xs mt-2 font-bold text-blue-700">📦 Metà della larghezza del genitore</p>
          </div>

          {/* em */}
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-bold text-purple-700 mb-2">em</h4>
            <p className="text-sm mb-2">Relativa al font-size del <strong>genitore</strong></p>
            <p className="text-xs text-purple-600">
              Esempio: <code className="bg-purple-200 px-1 rounded">padding: 2em</code>
            </p>
            <p className="text-xs mt-2 font-bold text-purple-700">📊 2 volte il font-size del genitore</p>
          </div>

          {/* rem */}
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-bold text-green-700 mb-2">rem (root em)</h4>
            <p className="text-sm mb-2">Relativa al font-size della <strong>radice</strong> (html)</p>
            <p className="text-xs text-green-600">
              Esempio: <code className="bg-green-200 px-1 rounded">font-size: 1.5rem</code>
            </p>
            <p className="text-xs mt-2 font-bold text-green-700">🌳 1.5 volte il font-size di &lt;html&gt;</p>
          </div>

          {/* vw */}
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
            <h4 className="font-bold text-orange-700 mb-2">vw (viewport width)</h4>
            <p className="text-sm mb-2">Relativa alla <strong>larghezza dello schermo</strong></p>
            <p className="text-xs text-orange-600">
              Esempio: <code className="bg-orange-200 px-1 rounded">width: 50vw</code>
            </p>
            <p className="text-xs mt-2 font-bold text-orange-700">📱 Metà dello schermo</p>
          </div>

          {/* vh */}
          <div className="bg-pink-50 border-l-4 border-pink-500 p-4">
            <h4 className="font-bold text-pink-700 mb-2">vh (viewport height)</h4>
            <p className="text-sm mb-2">Relativa all&apos;<strong>altezza dello schermo</strong></p>
            <p className="text-xs text-pink-600">
              Esempio: <code className="bg-pink-200 px-1 rounded">height: 100vh</code>
            </p>
            <p className="text-xs mt-2 font-bold text-pink-700">📺 Tutta l&apos;altezza dello schermo</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
          <h3 className="font-bold text-yellow-800 mb-3">💡 Quale Unità Usare?</h3>
          <ul className="space-y-2">
            <li><strong>px</strong> → Bordi, dettagli piccoli che devono essere precisi</li>
            <li><strong>%</strong> → Larghezze responsive (width: 80% del genitore)</li>
            <li><strong>em</strong> → Spacing relativo al testo (padding, margin)</li>
            <li><strong>rem</strong> → Font-size responsive (migliore di em per i font!)</li>
            <li><strong>vw/vh</strong> → Sezioni hero, layout a schermo intero</li>
          </ul>
        </div>
      </section>

      {/* Esempio 3: Confronto Unità */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Esempio 3: Confronto Unità di Misura</h2>

        <h3 className="text-xl font-bold mb-3">CSS:</h3>
        <CodeExample
          language="css"
          code={`.testo-16px {
  font-size: 16px;
}

.testo-1rem {
  font-size: 1rem;
}

.testo-1-5rem {
  font-size: 1.5rem;
}

.box-50-percent {
  width: 50%;
  background-color: #3498DB;
  color: white;
  padding: 10px;
}

.box-20vw {
  width: 20vw;
  background-color: #E74C3C;
  color: white;
  padding: 10px;
}`}
        />

        <h3 className="text-xl font-bold mb-3 mt-6">Risultato nel Browser</h3>
        <LessonPreview
          title="Ridimensiona la finestra del browser per vedere le differenze!"
          html={`<style>
.testo-16px-demo {
  font-size: 16px;
  background-color: #ECF0F1;
  padding: 10px;
  margin-bottom: 10px;
}

.testo-1rem-demo {
  font-size: 1rem;
  background-color: #E8F8F5;
  padding: 10px;
  margin-bottom: 10px;
}

.testo-1-5rem-demo {
  font-size: 1.5rem;
  background-color: #FEF9E7;
  padding: 10px;
  margin-bottom: 10px;
}

.box-50-percent-demo {
  width: 50%;
  background-color: #3498DB;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.box-20vw-demo {
  width: 20vw;
  background-color: #E74C3C;
  color: white;
  padding: 10px;
  text-align: center;
}
</style>

<div class="testo-16px-demo">Testo 16px (fisso)</div>
<div class="testo-1rem-demo">Testo 1rem (di solito 16px)</div>
<div class="testo-1-5rem-demo">Testo 1.5rem (più grande!)</div>

<div style="margin-top: 20px;">
  <div class="box-50-percent-demo">Box 50% (metà del genitore)</div>
  <div class="box-20vw-demo">Box 20vw (20% dello schermo)</div>
</div>

<p style="font-size: 12px; color: #666; margin-top: 10px;">
  💡 Prova a ridimensionare la finestra: 50% e 20vw cambiano, 16px resta uguale!
</p>`}
        />
      </section>

      {/* Transizioni Base */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">✨ Transizioni: Effetti Smooth</h2>
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg mb-6">
          <p className="text-lg mb-4">
            Gli effetti :hover sono fichissimi, ma cambiano <strong>istantaneamente</strong>.
          </p>
          <p className="text-lg font-bold text-purple-700">
            Con <code className="bg-purple-200 px-2 py-1 rounded">transition</code> possiamo rendere
            i cambiamenti <strong>graduali e fluidi</strong>! 🎬
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="font-bold text-blue-700 mb-2">Sintassi Base:</h3>
          <CodeExample
            language="css"
            code={`transition: proprietà durata;

/* Esempi: */
transition: color 0.3s;
transition: background-color 0.5s;
transition: all 0.3s;  /* tutte le proprietà */`}
          />
          <p className="mt-3 text-sm">
            <strong>0.3s</strong> = 0.3 secondi (300 millisecondi)<br/>
            <strong>all</strong> = tutte le proprietà che cambiano
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Link con Transizione</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML:</h4>
            <CodeExample
              language="html"
              code={`<a href="#" class="link-smooth">Link con effetto smooth</a>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS:</h4>
            <CodeExample
              language="css"
              code={`.link-smooth {
  color: #3498DB;
  text-decoration: none;
  font-size: 20px;
  transition: all 0.3s;
}

.link-smooth:hover {
  color: #E74C3C;
  font-size: 24px;
  text-decoration: underline;
}`}
            />
          </div>
        </div>

        <LessonPreview
          title="Passa il mouse: nota come il cambiamento è graduale!"
          html={`<style>
.link-smooth-demo {
  color: #3498DB;
  text-decoration: none;
  font-size: 20px;
  transition: all 0.3s;
  display: inline-block;
}

.link-smooth-demo:hover {
  color: #E74C3C;
  font-size: 24px;
  text-decoration: underline;
}
</style>

<p style="text-align: center; padding: 20px;">
  <a href="#" class="link-smooth-demo">Passa il mouse qui!</a>
</p>
<p style="text-align: center; font-size: 14px; color: #666;">
  ✨ L&apos;effetto è fluido grazie a transition!
</p>`}
        />
      </section>

      {/* Hover su Altri Elementi */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">🎨 :hover Non Solo sui Link!</h2>
        <p className="mb-6">
          Puoi usare <code className="bg-gray-100 px-2 py-1 rounded">:hover</code> su
          <strong> qualsiasi elemento</strong>: div, immagini, box, bottoni, paragrafi!
        </p>

        <h3 className="text-xl font-bold mb-3">Esempio: Box Interattivo</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML:</h4>
            <CodeExample
              language="html"
              code={`<div class="card">
  <h3>Card Interattiva</h3>
  <p>Passa il mouse!</p>
</div>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS:</h4>
            <CodeExample
              language="css"
              code={`.card {
  background-color: white;
  border: 2px solid #BDC3C7;
  padding: 20px;
  width: 80%;
  cursor: pointer;
  transition: all 0.3s;
}

.card:hover {
  background-color: #3498DB;
  color: white;
  border-color: #2980B9;
}`}
            />
          </div>
        </div>

        <LessonPreview
          title="Prova a passare il mouse sulla card"
          html={`<style>
.card-demo {
  background-color: white;
  border: 2px solid #BDC3C7;
  padding: 20px;
  width: 80%;
  cursor: pointer;
  transition: all 0.3s;
  margin: 0 auto;
}

.card-demo:hover {
  background-color: #3498DB;
  color: white;
  border-color: #2980B9;
}
</style>

<div class="card-demo">
  <h3 style="margin: 0 0 10px 0; font-size: 20px; font-weight: bold;">Card Interattiva 🎯</h3>
  <p style="margin: 0;">Passa il mouse per vedere la magia!</p>
</div>
<p style="text-align: center; margin-top: 15px; font-size: 12px; color: #666;">
  💡 Questo effetto si usa spesso per card, prodotti, gallerie!
</p>`}
        />
      </section>

      {/* Trucchi Pro */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">🎯 Trucchi Pro per :hover</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h3 className="font-bold text-green-700 mb-3">✅ Best Practice</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Usa sempre <code className="bg-green-100 px-1 rounded">transition</code> per effetti smooth</li>
              <li>✓ Cambia <code className="bg-green-100 px-1 rounded">cursor: pointer</code> su elementi cliccabili</li>
              <li>✓ Evita cambi troppo drastici (disorientano l&apos;utente)</li>
              <li>✓ Durata ideale: 0.2s - 0.3s (non troppo lento)</li>
              <li>✓ Testa su mobile (hover non funziona su touch!)</li>
            </ul>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
            <h3 className="font-bold text-orange-700 mb-3">⚠️ Errori da Evitare</h3>
            <ul className="space-y-2 text-sm">
              <li>✗ Mai rimuovere :focus dai link (accessibilità!)</li>
              <li>✗ Non usare solo hover per info importanti (mobile!)</li>
              <li>✗ Evita transizioni troppo lunghe (&gt; 1s)</li>
              <li>✗ Non cambiare posizione elementi al hover (fastidioso)</li>
              <li>✗ Evita colori con basso contrasto</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Esercizio */}
      <Exercise
        title="🎯 Esercizio Guidato: Menu di Navigazione Interattivo"
        steps={[
          'Crea una cartella "menu-interattivo" in VS Code',
          'Dentro la cartella, crea due file: "index.html" e "style.css"',
          {
            text: 'Apri index.html e scrivi la struttura con menu di navigazione e contenuto',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Menu Interattivo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav>
    <a href="#home">Home</a>
    <a href="#chi-siamo">Chi Siamo</a>
    <a href="#servizi">Servizi</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#contatti">Contatti</a>
  </nav>

  <h1>Benvenuto nel Nostro Sito</h1>

  <div class="container">
    <div class="card">
      <h3>Servizio 1</h3>
      <p>Sviluppo Web Professionale</p>
    </div>
    <div class="card">
      <h3>Servizio 2</h3>
      <p>Design Responsive e Moderno</p>
    </div>
    <div class="card">
      <h3>Servizio 3</h3>
      <p>Consulenza Tecnologica</p>
    </div>
  </div>
</body>
</html>`,
            language: 'html',
          },
          {
            text: 'Apri style.css e scrivi lo stile base per nav (sfondo blu scuro, padding)',
            code: `/* Menu Interattivo con Hover */
nav {
  background-color: #2C3E50;
  padding: 15px;
  text-align: center;
}`,
            language: 'css',
          },
          'Salva entrambi i file (Ctrl+S) e fai doppio click su index.html',
          'Verifica che il menu abbia lo sfondo BLU SCURO! 🎨',
          {
            text: 'In style.css, aggiungi lo stile base per i link (bianco, senza sottolineatura, padding)',
            code: `/* Menu Interattivo con Hover */
nav {
  background-color: #2C3E50;
  padding: 15px;
  text-align: center;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  display: inline-block;
}`,
            language: 'css',
            highlightLines: [7, 8, 9, 10, 11, 12, 13],
          },
          'Salva (Ctrl+S) e ricarica (F5) - i link devono essere BIANCHI e SENZA SOTTOLINEATURA!',
          {
            text: 'Aggiungi la transizione smooth per effetti fluidi',
            code: `/* Menu Interattivo con Hover */
nav {
  background-color: #2C3E50;
  padding: 15px;
  text-align: center;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  display: inline-block;
  transition: all 0.3s;
}`,
            language: 'css',
            highlightLines: [14],
          },
          'Salva e ricarica (F5) - adesso i cambiamenti saranno SMOOTH!',
          {
            text: 'Aggiungi l\'effetto :hover (sfondo blu chiaro, grassetto, cursore pointer)',
            code: `/* Menu Interattivo con Hover */
nav {
  background-color: #2C3E50;
  padding: 15px;
  text-align: center;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  display: inline-block;
  transition: all 0.3s;
  cursor: pointer;
}

nav a:hover {
  background-color: #3498DB;
  font-weight: bold;
}`,
            language: 'css',
            highlightLines: [15, 18, 19, 20, 21],
          },
          'Salva e ricarica (F5) - passa il mouse sui link e guarda l\'effetto! ✨',
          'I link cambiano colore e peso quando ci passi sopra!',
          {
            text: 'Aggiungi l\'effetto :active (quando clicchi, colore ancora più scuro)',
            code: `/* Menu Interattivo con Hover */
nav {
  background-color: #2C3E50;
  padding: 15px;
  text-align: center;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  display: inline-block;
  transition: all 0.3s;
  cursor: pointer;
}

nav a:hover {
  background-color: #3498DB;
  font-weight: bold;
}

nav a:active {
  background-color: #2980B9;
}`,
            language: 'css',
            highlightLines: [23, 24, 25],
          },
          'Salva e ricarica (F5) - clicca sui link e nota il colore più SCURO al click!',
          {
            text: 'Aggiungi lo stile per h1 con unità responsive (3rem = 3 volte la dimensione base)',
            code: `/* Menu Interattivo con Hover */
nav {
  background-color: #2C3E50;
  padding: 15px;
  text-align: center;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  display: inline-block;
  transition: all 0.3s;
  cursor: pointer;
}

nav a:hover {
  background-color: #3498DB;
  font-weight: bold;
}

nav a:active {
  background-color: #2980B9;
}

h1 {
  font-size: 3rem;
  text-align: center;
  margin: 40px 0;
  color: #2C3E50;
}`,
            language: 'css',
            highlightLines: [27, 28, 29, 30, 31, 32],
          },
          'Salva e ricarica (F5) - il titolo deve essere MOLTO GRANDE! 3rem è responsive!',
          {
            text: 'Aggiungi gli stili per le card con unità em (relativa al font-size)',
            code: `/* Menu Interattivo con Hover */
nav {
  background-color: #2C3E50;
  padding: 15px;
  text-align: center;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  display: inline-block;
  transition: all 0.3s;
  cursor: pointer;
}

nav a:hover {
  background-color: #3498DB;
  font-weight: bold;
}

nav a:active {
  background-color: #2980B9;
}

h1 {
  font-size: 3rem;
  text-align: center;
  margin: 40px 0;
  color: #2C3E50;
}

.container {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.card {
  width: 30%;
  padding: 2em;
  background-color: #ECF0F1;
  border-radius: 8px;
  transition: all 0.3s;
}`,
            language: 'css',
            highlightLines: [34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47],
          },
          'Salva e ricarica (F5) - le card devono apparire affiancate! Padding 2em è responsive!',
          {
            text: 'Aggiungi l\'effetto hover sulle card (cambio colore sfondo, ombra)',
            code: `/* Menu Interattivo con Hover */
nav {
  background-color: #2C3E50;
  padding: 15px;
  text-align: center;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  display: inline-block;
  transition: all 0.3s;
  cursor: pointer;
}

nav a:hover {
  background-color: #3498DB;
  font-weight: bold;
}

nav a:active {
  background-color: #2980B9;
}

h1 {
  font-size: 3rem;
  text-align: center;
  margin: 40px 0;
  color: #2C3E50;
}

.container {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.card {
  width: 30%;
  padding: 2em;
  background-color: #ECF0F1;
  border-radius: 8px;
  transition: all 0.3s;
}

.card:hover {
  background-color: #3498DB;
  color: white;
  transform: scale(1.05);
  cursor: pointer;
}`,
            language: 'css',
            highlightLines: [49, 50, 51, 52, 53, 54],
          },
          'Salva e ricarica (F5) - passa il mouse sulle card e guarda l\'effetto WOW! 🎉',
          'Le card cambiano colore e si ingrandiscono leggermente!',
          'Prova a ridimensionare la finestra del browser - il font-size in rem si adatta!',
        ]}
        experiments={[
          'Cambia transition da 0.3s a 1s nei link - gli effetti diventano più LENTI e drammatici!',
          'Cambia font-size di h1 da 3rem a 5rem - il titolo diventa GIGANTE!',
          'Cambia padding delle card da 2em a 4em - le card hanno PIÙ SPAZIO interno!',
          'Aggiungi "nav a:hover { border-radius: 5px; }" - i link avranno angoli arrotondati al hover!',
          'Cambia transform: scale(1.05) in scale(1.2) nelle card - l\'ingrandimento è più evidente!',
        ]}
      />

      {/* Sfida */}
      <Challenge
        title="Portfolio Interattivo con Effetti Wow"
        description="Crea una pagina portfolio che usa TUTTE le tecniche di hover e unità responsive imparate!"
        requirements={[
          'Crea una pagina "Portfolio" con 3 sezioni',
          'Header: titolo con font-size 4rem, sottotitolo 1.5rem',
          'Navigazione: 4 link con tutti e 5 gli stati (:link, :visited, :hover, :active, :focus)',
          'Sezione progetti: 6 card con width in percentuale (30% o 45%)',
          'Card: padding in em, transition 0.3s, cursor pointer',
          'Card:hover: cambia almeno 3 proprietà (colore, background, dimensione)',
          'Sezione contatti: 3 box con width in vw (20vw ciascuno)',
          'Ogni box:hover deve avere effetto diverso',
          'Footer: altezza 10vh, centrato con text-align',
          'Usa rem per tutti i font-size (almeno 5 dimensioni diverse)',
          'Aggiungi transition su TUTTI gli elementi interattivi',
          'Almeno 3 elementi con cursor personalizzato (pointer, help, etc.)',
          'Box con :focus per accessibilità keyboard',
          'Tutto deve essere responsive con unità %, rem, vw/vh'
        ]}
        hint="Inizia creando la struttura HTML, poi aggiungi gli stili base, e infine aggiungi tutti gli effetti :hover uno alla volta. Testa ogni effetto prima di passare al successivo!"
      />

      {/* Checklist */}
      <Checklist
        items={[
          'Capisco cos\'è :hover e come si usa',
          'Conosco le 5 pseudo-classi dei link (:link, :visited, :hover, :active, :focus)',
          'So l\'ordine corretto: LoVe HAte',
          'So usare cursor: pointer e altri cursori',
          'So cambiare colori, sfondo, decorazioni al hover',
          'Capisco la differenza tra px (fisso) e unità responsive',
          'So usare % per larghezze relative al genitore',
          'So usare em per spacing relativo al font',
          'So usare rem per font-size responsive',
          'So usare vw/vh per dimensioni relative allo schermo',
          'So usare transition per effetti smooth',
          'So applicare :hover a qualsiasi elemento (non solo link)',
          'So quando usare quale unità di misura',
          'Ho completato l\'esercizio: menu interattivo',
          'Ho completato la sfida: portfolio con effetti wow'
        ]}
      />

      {/* Conclusione e Riepilogo */}
      <section className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Complimenti! Ora sei un Maestro dell&apos;Interattività CSS!</h2>
        <p className="text-xl mb-4">
          Hai imparato a creare <strong>effetti hover</strong> e a usare <strong>unità responsive</strong>!
        </p>
        <p className="text-lg mb-6">
          I tuoi siti ora sono interattivi e si adattano a ogni schermo! 📱💻🖥️
        </p>

        <div className="bg-black/20 p-6 rounded border-2 border-white/30 mb-6">
          <p className="font-bold mb-3 text-yellow-200 text-xl">📊 Riepilogo Completo</p>

          <div className="mb-4">
            <p className="font-bold text-yellow-200 mb-2">🎯 Selettori CSS (3):</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>elemento (Lezione 2)</li>
              <li>.classe (Lezione 3)</li>
              <li>#id (Lezione 4)</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-bold text-yellow-200 mb-2">🔮 Pseudo-classi (5) - NUOVO:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>:link - link non visitato</li>
              <li>:visited - link già visitato</li>
              <li>:hover - mouse sopra l&apos;elemento ✨</li>
              <li>:active - momento del click</li>
              <li>:focus - elemento selezionato (Tab)</li>
            </ul>
          </div>

          <div className="mb-4">
            <p className="font-bold text-yellow-200 mb-2">📏 Unità di Misura (6) - NUOVO:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>px - pixel (fisso)</li>
              <li>% - percentuale del genitore ✨</li>
              <li>em - relativo al font del genitore ✨</li>
              <li>rem - relativo al font della radice ✨</li>
              <li>vw - percentuale larghezza schermo ✨</li>
              <li>vh - percentuale altezza schermo ✨</li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-yellow-200 mb-2">🎨 Proprietà CSS (18 totali):</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>color, background-color, border (Lezione 1-2)</li>
              <li>font-size, font-weight, text-align (Lezione 3)</li>
              <li>padding, margin, width (Lezione 4)</li>
              <li>font-family, font-style, text-decoration, text-transform, letter-spacing, word-spacing (Lezione 5)</li>
              <li>cursor (Lezione 6) ✨ NUOVO</li>
              <li>transition (Lezione 6) ✨ NUOVO</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-400/30 p-4 rounded border-2 border-green-300">
          <p className="font-bold mb-2">🚀 Prossima Lezione</p>
          <p className="text-lg">
            Imparerai il <strong>Box Model</strong> - il concetto più importante del CSS!
            Content, padding, border, margin... tutto avrà finalmente senso! 📦
          </p>
        </div>
      </section>
    </LessonLayout>
  );
}
