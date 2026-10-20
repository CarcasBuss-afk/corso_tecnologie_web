import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import LessonPreview from '@/components/didattica/LessonPreview';

export default function Lezione3ClassiDimensioniTesto() {
  const lezioni = getLezioniByModuloSlug('modulo-2-css');

  return (
    <LessonLayout
      moduloSlug="modulo-2-css"
      moduloTitolo="Modulo 2: CSS"
      lezioni={lezioni}
      lezioneSlug="lezione-3-classi-dimensioni-testo"
      lezioneTitolo="Classi CSS + Dimensioni Testo"
    >
      <LessonHeader
        numero={3}
        titolo="Classi CSS + Dimensioni Testo"
        durata="1.5 ore"
        difficolta="facile"
        obiettivi={[
          'Capire cosa sono le classi CSS e perché sono fondamentali',
          'Usare il selettore .classe per dare stili diversi agli elementi',
          'Controllare le dimensioni del testo con font-size',
          'Modificare lo spessore del testo con font-weight',
          'Allineare il testo con text-align'
        ]}
      />

      {/* Il Problema */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🤔 Il Problema dei Selettori Elemento</h2>
        <p className="text-lg mb-4">
          Finora abbiamo usato solo selettori elemento come <code className="bg-gray-200 px-2 py-1 rounded">p</code> e <code className="bg-gray-200 px-2 py-1 rounded">h1</code>.
        </p>
        <p className="text-lg mb-6">
          Ma c&apos;è un <strong>GRANDE PROBLEMA</strong>: il selettore elemento colora <strong>TUTTI</strong> gli elementi di quel tipo!
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
          <h3 className="font-bold text-red-700 mb-2">❌ Problema</h3>
          <p className="mb-3">Se scrivi questo CSS:</p>
          <CodeExample
            language="css"
            code={`p {
  color: red;
  font-size: 20px;
}`}
          />
          <p className="mt-3 text-red-700"><strong>Tutti i paragrafi</strong> della pagina diventeranno rossi e grandi. Non puoi scegliere!</p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6">
          <h3 className="font-bold text-green-700 mb-2">✅ Soluzione: Le CLASSI!</h3>
          <p>Le classi ti permettono di dire: "Questo stile va solo su <strong>questi specifici</strong> elementi!"</p>
        </div>
      </section>

      {/* Cos'è una Classe */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🏷️ Cos&apos;è una Classe CSS?</h2>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">📘 Definizione</h3>
          <p className="text-lg mb-3">
            Una <strong>classe</strong> è come un&apos;<strong>etichetta</strong> che puoi attaccare agli elementi HTML per dire: &quot;questo elemento appartiene a questo gruppo&quot;.
          </p>
          <div className="bg-black/20 p-4 rounded border-2 border-white/30">
            <p className="font-mono text-lg mb-2 text-yellow-200">.nome-classe {'{ proprietà: valore; }'}</p>
            <p className="text-sm">Il punto (.) dice a CSS: &quot;questo è un selettore di classe&quot;</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Come Funziona</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">1️⃣ In HTML - Aggiungi class=&quot;...&quot;</h4>
            <CodeExample
              language="html"
              code={`<p class="importante">Questo è importante!</p>
<p>Questo è normale.</p>
<p class="importante">Anche questo è importante!</p>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">2️⃣ In CSS - Usa il punto (.)</h4>
            <CodeExample
              language="css"
              code={`.importante {
  color: red;
  font-size: 24px;
  font-weight: bold;
}`}
            />
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
          <h3 className="font-bold text-blue-700 mb-2">💡 La Magia delle Classi</h3>
          <ul className="space-y-2">
            <li>✅ Puoi usare la stessa classe su <strong>più elementi</strong></li>
            <li>✅ Puoi usare classi su <strong>elementi diversi</strong> (p, h1, div...)</li>
            <li>✅ Un elemento può avere <strong>più classi</strong> (separate da spazi)</li>
          </ul>
        </div>
      </section>

      {/* Esempio Visivo */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">👀 Vediamolo in Azione!</h2>

        <LessonPreview
          title="Classe .importante"
          html={`<style>
  .importante {
    color: #E74C3C;
    font-size: 24px;
    font-weight: bold;
  }
</style>

<p>Questo è un paragrafo normale.</p>
<p class="importante">Questo paragrafo è IMPORTANTE!</p>
<p>Un altro paragrafo normale.</p>
<p class="importante">Anche questo è IMPORTANTE!</p>`}
        />

        <div className="mt-6">
          <LessonPreview
            title="Stessa Classe su Elementi Diversi"
            html={`<style>
  .evidenziato {
    background-color: yellow;
    padding: 10px;
    border: 2px solid orange;
  }
</style>

<h2 class="evidenziato">Titolo Evidenziato</h2>
<p class="evidenziato">Paragrafo evidenziato</p>
<div class="evidenziato">Anche un div evidenziato!</div>`}
          />
        </div>
      </section>

      {/* Classi Multiple */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎯 Combinare Più Classi</h2>

        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">💎 Il Superpotere delle Classi</h3>
          <p className="text-lg mb-3">
            Puoi applicare <strong>più classi allo stesso elemento</strong> separandole con uno <strong>spazio</strong>!
          </p>
          <p className="text-lg">
            Gli stili di tutte le classi si <strong>sommano</strong> e si applicano insieme.
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3">Come Funziona</h3>
        <p className="text-lg mb-4">
          Invece di creare una classe gigante con tutti gli stili, puoi creare <strong>tante piccole classi</strong> e combinarle!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 border-2 border-red-200 p-4 rounded-lg">
            <h4 className="font-bold mb-2 text-red-700">❌ Approccio NON Flessibile</h4>
            <p className="text-sm mb-3">Una classe con tutto dentro:</p>
            <CodeExample
              language="css"
              code={`.testo-rosso-grassetto-grande {
  color: red;
  font-weight: bold;
  font-size: 24px;
}`}
            />
            <p className="text-sm text-gray-600 mt-2">
              Devi creare una classe diversa per ogni combinazione possibile! 😰
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
            <h4 className="font-bold mb-2 text-green-700">✅ Approccio Flessibile</h4>
            <p className="text-sm mb-3">Tante classi piccole combinate:</p>
            <CodeExample
              language="css"
              code={`.rosso { color: red; }
.grassetto { font-weight: bold; }
.grande { font-size: 24px; }`}
            />
            <p className="text-sm text-gray-600 mt-2">
              Puoi combinare come vuoi: solo rosso, rosso + grassetto, tutte e tre! 🎯
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Combinare le Classi</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML - Varie Combinazioni</h4>
            <CodeExample
              language="html"
              code={`<!-- Solo una classe -->
<p class="rosso">Testo rosso</p>

<!-- Due classi separate da spazio -->
<p class="rosso grassetto">Rosso E grassetto</p>

<!-- Tre classi insieme! -->
<p class="rosso grassetto sottolineato">
  Rosso, grassetto E sottolineato!
</p>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS - Classi Separate</h4>
            <CodeExample
              language="css"
              code={`.rosso {
  color: red;
}

.grassetto {
  font-weight: bold;
}

.sottolineato {
  text-decoration: underline;
}`}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Risultato nel Browser</h3>
        <LessonPreview
          title="Combinare Più Classi"
          html={`<style>
  .rosso { color: red; }
  .grassetto { font-weight: bold; }
  .sottolineato { text-decoration: underline; }
  .grande { font-size: 24px; }
</style>

<p class="rosso">Solo rosso</p>
<p class="rosso grassetto">Rosso E grassetto</p>
<p class="rosso grassetto sottolineato">Rosso, grassetto E sottolineato</p>
<p class="rosso grassetto sottolineato grande">Tutte e quattro le classi insieme!</p>`}
        />

        <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6">
          <h3 className="font-bold text-yellow-700 mb-2">⚠️ ATTENZIONE: Spazio, NON Virgola!</h3>
          <div className="grid md:grid-cols-2 gap-4 mt-3">
            <div>
              <p className="font-bold text-green-700 mb-2">✅ CORRETTO - Spazio tra le classi</p>
              <CodeExample
                language="html"
                code={`<p class="rosso grassetto">Testo</p>`}
              />
            </div>
            <div>
              <p className="font-bold text-red-700 mb-2">❌ SBAGLIATO - Virgola</p>
              <CodeExample
                language="html"
                code={`<p class="rosso, grassetto">Testo</p>`}
              />
              <p className="text-sm text-red-600 mt-1">NON funziona! Usa lo spazio!</p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6">
          <h3 className="font-bold text-blue-700 mb-2">💡 Perché è Utile?</h3>
          <ul className="space-y-2">
            <li>✅ <strong>Riutilizzo</strong> - La classe .rosso può essere usata ovunque, anche con altre classi</li>
            <li>✅ <strong>Flessibilità</strong> - Puoi combinare le classi come vuoi senza crearne di nuove</li>
            <li>✅ <strong>Manutenzione</strong> - Se cambi .rosso, cambia ovunque venga usato</li>
            <li>✅ <strong>Meno Codice</strong> - Invece di 100 classi, ne scrivi 10 e le combini!</li>
          </ul>
        </div>
      </section>

      {/* Proprietà 1: font-size */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">📏 font-size - Dimensione del Testo</h2>
        <p className="text-lg mb-4">
          La proprietà <code className="bg-gray-200 px-2 py-1 rounded">font-size</code> controlla la <strong>grandezza</strong> del testo.
        </p>

        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">📐 Unità di Misura: px (pixel)</h3>
          <p className="mb-3">Per ora usiamo solo i <strong>pixel (px)</strong> - sono facili e precisi!</p>
          <div className="bg-black/20 p-4 rounded border-2 border-white/30">
            <p className="font-mono text-yellow-200">font-size: 20px;</p>
          </div>
          <ul className="mt-3 space-y-1 text-sm">
            <li>• 16px = testo normale (default del browser)</li>
            <li>• 12-14px = testo piccolo</li>
            <li>• 20-24px = testo grande</li>
            <li>• 32px+ = titoli grandi</li>
          </ul>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Come Scriverlo</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML</h4>
            <CodeExample
              language="html"
              code={`<p class="piccolo">Testo piccolo (12px)</p>
<p class="normale">Testo normale (16px)</p>
<p class="grande">Testo grande (24px)</p>
<p class="enorme">Testo enorme (36px)</p>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS</h4>
            <CodeExample
              language="css"
              code={`.piccolo {
  font-size: 12px;
}

.normale {
  font-size: 16px;
}

.grande {
  font-size: 24px;
}

.enorme {
  font-size: 36px;
}`}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Risultato nel Browser</h3>
        <LessonPreview
          title="font-size con Diverse Dimensioni"
          html={`<style>
  .piccolo { font-size: 12px; }
  .normale { font-size: 16px; }
  .grande { font-size: 24px; }
  .enorme { font-size: 36px; }
</style>

<p class="piccolo">Testo piccolo (12px)</p>
<p class="normale">Testo normale (16px)</p>
<p class="grande">Testo grande (24px)</p>
<p class="enorme">Testo enorme (36px)</p>`}
        />
      </section>

      {/* Proprietà 2: font-weight */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">💪 font-weight - Spessore del Carattere</h2>
        <p className="text-lg mb-4">
          La proprietà <code className="bg-gray-200 px-2 py-1 rounded">font-weight</code> controlla quanto è <strong>grassetto</strong> il testo.
        </p>

        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">⚖️ Valori Disponibili</h3>
          <div className="grid md:grid-cols-2 gap-4 mt-3">
            <div className="bg-black/20 p-3 rounded border-2 border-white/30">
              <p className="font-bold text-yellow-200 mb-1">Parole Chiave:</p>
              <code className="text-sm">normal</code> - testo normale<br/>
              <code className="text-sm">bold</code> - grassetto
            </div>
            <div className="bg-black/20 p-3 rounded border-2 border-white/30">
              <p className="font-bold text-yellow-200 mb-1">Numeri (100-900):</p>
              <code className="text-sm">100-300</code> - leggero<br/>
              <code className="text-sm">400</code> - normal<br/>
              <code className="text-sm">700</code> - bold<br/>
              <code className="text-sm">900</code> - molto bold
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Come Scriverlo</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML</h4>
            <CodeExample
              language="html"
              code={`<p class="leggero">Testo leggero (300)</p>
<p class="normale">Testo normale (normal)</p>
<p class="grassetto">Testo grassetto (bold)</p>
<p class="molto-grassetto">Testo molto grassetto (900)</p>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS</h4>
            <CodeExample
              language="css"
              code={`.leggero {
  font-weight: 300;
  font-size: 18px;
}

.normale {
  font-weight: normal;
  font-size: 18px;
}

.grassetto {
  font-weight: bold;
  font-size: 18px;
}

.molto-grassetto {
  font-weight: 900;
  font-size: 18px;
}`}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Risultato nel Browser</h3>
        <LessonPreview
          title="font-weight con Diversi Spessori"
          html={`<style>
  .leggero { font-weight: 300; font-size: 18px; }
  .normale { font-weight: normal; font-size: 18px; }
  .grassetto { font-weight: bold; font-size: 18px; }
  .molto-grassetto { font-weight: 900; font-size: 18px; }
</style>

<p class="leggero">Testo leggero (300)</p>
<p class="normale">Testo normale (normal)</p>
<p class="grassetto">Testo grassetto (bold)</p>
<p class="molto-grassetto">Testo molto grassetto (900)</p>`}
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
          <h3 className="font-bold text-yellow-700 mb-2">⚠️ Nota sui Font</h3>
          <p>Non tutti i font supportano tutti i pesi (100-900). Arial e molti font di sistema supportano principalmente <code className="bg-gray-200 px-2 py-1 rounded">normal</code> e <code className="bg-gray-200 px-2 py-1 rounded">bold</code>.</p>
        </div>
      </section>

      {/* Proprietà 3: text-align */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">↔️ text-align - Allineamento del Testo</h2>
        <p className="text-lg mb-4">
          La proprietà <code className="bg-gray-200 px-2 py-1 rounded">text-align</code> controlla l&apos;<strong>allineamento orizzontale</strong> del testo.
        </p>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">📍 Valori Disponibili</h3>
          <div className="grid md:grid-cols-3 gap-3 mt-3">
            <div className="bg-black/20 p-3 rounded border-2 border-white/30">
              <code className="text-yellow-200 font-bold">left</code>
              <p className="text-sm mt-1">Allinea a sinistra (default)</p>
            </div>
            <div className="bg-black/20 p-3 rounded border-2 border-white/30">
              <code className="text-yellow-200 font-bold">center</code>
              <p className="text-sm mt-1">Centra il testo</p>
            </div>
            <div className="bg-black/20 p-3 rounded border-2 border-white/30">
              <code className="text-yellow-200 font-bold">right</code>
              <p className="text-sm mt-1">Allinea a destra</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Come Scriverlo</h3>
        <p className="text-sm text-gray-600 mb-4">
          💡 <em>Nota: Abbiamo aggiunto sfondi colorati (già imparati nella Lezione 2) per vedere meglio dove si allinea il testo!</em>
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML</h4>
            <CodeExample
              language="html"
              code={`<p class="allinea-sinistra">
  ← Testo allineato a SINISTRA
</p>
<p class="allinea-centro">
  ↔ Testo CENTRATO
</p>
<p class="allinea-destra">
  Testo allineato a DESTRA →
</p>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS</h4>
            <CodeExample
              language="css"
              code={`.allinea-sinistra {
  text-align: left;
  background-color: #E8F4F8;
}

.allinea-centro {
  text-align: center;
  background-color: #FFF4E6;
}

.allinea-destra {
  text-align: right;
  background-color: #F3E5F5;
}`}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Risultato nel Browser</h3>
        <LessonPreview
          title="text-align con Diversi Allineamenti"
          html={`<style>
  .allinea-sinistra {
    text-align: left;
    background-color: #E8F4F8;
  }
  .allinea-centro {
    text-align: center;
    background-color: #FFF4E6;
  }
  .allinea-destra {
    text-align: right;
    background-color: #F3E5F5;
  }
</style>

<p class="allinea-sinistra">← Testo allineato a SINISTRA</p>
<p class="allinea-centro">↔ Testo CENTRATO</p>
<p class="allinea-destra">Testo allineato a DESTRA →</p>`}
        />

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
          <h3 className="font-bold text-blue-700 mb-2">💡 Quando Usare Ogni Allineamento</h3>
          <ul className="space-y-2">
            <li><strong>left</strong> - Testo normale, paragrafi, articoli (più leggibile)</li>
            <li><strong>center</strong> - Titoli, citazioni, elementi decorativi</li>
            <li><strong>right</strong> - Firme, date, elementi speciali</li>
          </ul>
        </div>
      </section>

      {/* Combinare Tutto */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎨 Combinare Tutto Insieme</h2>
        <p className="text-lg mb-6">
          Il vero potere delle classi è poter combinare più proprietà in una sola classe!
        </p>

        <LessonPreview
          title="Classi Complete"
          html={`<style>
  .titolo-hero {
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    color: #2C3E50;
  }

  .sottotitolo {
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    color: #7F8C8D;
  }

  .testo-importante {
    font-size: 18px;
    font-weight: bold;
    color: #E74C3C;
  }

  .citazione {
    font-size: 16px;
    text-align: center;
    color: #555;
    background-color: #ECF0F1;
  }
</style>

<h1 class="titolo-hero">Il Mio Blog Personale</h1>
<p class="sottotitolo">Scopri le mie avventure nel mondo del web</p>
<p class="testo-importante">Attenzione: Questo sito è in costruzione!</p>
<p class="citazione">"Il CSS è come la magia del web" - Un programmatore saggio</p>`}
        />

        <div className="mt-6">
          <CodeExample
            title="CSS Completo"
            language="css"
            code={`.titolo-hero {
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: #2C3E50;
}

.sottotitolo {
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  color: #7F8C8D;
}

.testo-importante {
  font-size: 18px;
  font-weight: bold;
  color: #E74C3C;
}

.citazione {
  font-size: 16px;
  text-align: center;
  color: #555;
  background-color: #ECF0F1;
}`}
          />
        </div>
      </section>

      {/* Esercizio */}
      <Exercise
        title="🎯 Esercizio Guidato: Il Tuo Sistema di Classi CSS"
        steps={[
          'Crea una cartella "classi-css" in VS Code',
          'Dentro la cartella, crea due file: "index.html" e "style.css"',
          {
            text: 'Apri index.html e scrivi la struttura con titoli e paragrafi (SENZA classi ancora)',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Sistema di Classi</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Il Potere delle Classi CSS</h1>
  <h2>Impariamo a Controllare lo Stile</h2>
  <p>Le classi ci permettono di dare stili diversi agli elementi.</p>
  <p>Possiamo controllare dimensione, peso e allineamento del testo.</p>
  <p>Questa sezione è particolarmente importante!</p>
  <p>"CSS is awesome!" - Un web developer</p>
</body>
</html>`,
            language: 'html',
          },
          {
            text: 'Apri style.css e crea la prima classe: .titolo-principale (grande, grassetto, centrato)',
            code: `/* Sistema di Classi CSS */
.titolo-principale {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #2C3E50;
}`,
            language: 'css',
          },
          {
            text: 'Torna in index.html e applica la classe al h1',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Sistema di Classi</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1 class="titolo-principale">Il Potere delle Classi CSS</h1>
  <h2>Impariamo a Controllare lo Stile</h2>
  <p>Le classi ci permettono di dare stili diversi agli elementi.</p>
  <p>Possiamo controllare dimensione, peso e allineamento del testo.</p>
  <p>Questa sezione è particolarmente importante!</p>
  <p>"CSS is awesome!" - Un web developer</p>
</body>
</html>`,
            language: 'html',
            highlightLines: [9],
          },
          'Salva entrambi i file (Ctrl+S) e fai doppio click su index.html',
          'Verifica che il titolo h1 sia GRANDE, GRASSETTO e CENTRATO! 🎨',
          {
            text: 'Torna in style.css e aggiungi la classe .sottotitolo (medio, leggero, centrato)',
            code: `/* Sistema di Classi CSS */
.titolo-principale {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #2C3E50;
}

.sottotitolo {
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  color: #7F8C8D;
}`,
            language: 'css',
            highlightLines: [9, 10, 11, 12, 13, 14],
          },
          {
            text: 'In index.html, applica la classe al h2',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Sistema di Classi</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1 class="titolo-principale">Il Potere delle Classi CSS</h1>
  <h2 class="sottotitolo">Impariamo a Controllare lo Stile</h2>
  <p>Le classi ci permettono di dare stili diversi agli elementi.</p>
  <p>Possiamo controllare dimensione, peso e allineamento del testo.</p>
  <p>Questa sezione è particolarmente importante!</p>
  <p>"CSS is awesome!" - Un web developer</p>
</body>
</html>`,
            language: 'html',
            highlightLines: [10],
          },
          'Salva (Ctrl+S) e ricarica il browser (F5) - h2 deve essere centrato e leggero!',
          {
            text: 'In style.css, aggiungi la classe .importante (grande, grassetto, rosso)',
            code: `/* Sistema di Classi CSS */
.titolo-principale {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #2C3E50;
}

.sottotitolo {
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  color: #7F8C8D;
}

.importante {
  font-size: 20px;
  font-weight: bold;
  color: #E74C3C;
}`,
            language: 'css',
            highlightLines: [16, 17, 18, 19, 20],
          },
          {
            text: 'In index.html, applica .importante ai primi DUE paragrafi',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Sistema di Classi</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1 class="titolo-principale">Il Potere delle Classi CSS</h1>
  <h2 class="sottotitolo">Impariamo a Controllare lo Stile</h2>
  <p class="importante">Le classi ci permettono di dare stili diversi agli elementi.</p>
  <p class="importante">Possiamo controllare dimensione, peso e allineamento del testo.</p>
  <p>Questa sezione è particolarmente importante!</p>
  <p>"CSS is awesome!" - Un web developer</p>
</body>
</html>`,
            language: 'html',
            highlightLines: [11, 12],
          },
          'Salva e ricarica (F5) - i primi 2 paragrafi devono essere ROSSI e GRASSETTI!',
          {
            text: 'In style.css, aggiungi la classe .evidenziato (sfondo giallo)',
            code: `/* Sistema di Classi CSS */
.titolo-principale {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #2C3E50;
}

.sottotitolo {
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  color: #7F8C8D;
}

.importante {
  font-size: 20px;
  font-weight: bold;
  color: #E74C3C;
}

.evidenziato {
  background-color: #FFFACD;
  color: #333;
}`,
            language: 'css',
            highlightLines: [22, 23, 24, 25],
          },
          {
            text: 'In index.html, applica .evidenziato al terzo paragrafo',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Sistema di Classi</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1 class="titolo-principale">Il Potere delle Classi CSS</h1>
  <h2 class="sottotitolo">Impariamo a Controllare lo Stile</h2>
  <p class="importante">Le classi ci permettono di dare stili diversi agli elementi.</p>
  <p class="importante">Possiamo controllare dimensione, peso e allineamento del testo.</p>
  <p class="evidenziato">Questa sezione è particolarmente importante!</p>
  <p>"CSS is awesome!" - Un web developer</p>
</body>
</html>`,
            language: 'html',
            highlightLines: [13],
          },
          'Salva e ricarica (F5) - il terzo paragrafo deve avere sfondo GIALLO!',
          {
            text: 'In style.css, aggiungi la classe .citazione (centrato, leggero, grigio)',
            code: `/* Sistema di Classi CSS */
.titolo-principale {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #2C3E50;
}

.sottotitolo {
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  color: #7F8C8D;
}

.importante {
  font-size: 20px;
  font-weight: bold;
  color: #E74C3C;
}

.evidenziato {
  background-color: #FFFACD;
  color: #333;
}

.citazione {
  font-size: 18px;
  text-align: center;
  font-weight: 300;
  color: #555;
}`,
            language: 'css',
            highlightLines: [27, 28, 29, 30, 31, 32],
          },
          {
            text: 'In index.html, applica .citazione al quarto paragrafo (la citazione)',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Sistema di Classi</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1 class="titolo-principale">Il Potere delle Classi CSS</h1>
  <h2 class="sottotitolo">Impariamo a Controllare lo Stile</h2>
  <p class="importante">Le classi ci permettono di dare stili diversi agli elementi.</p>
  <p class="importante">Possiamo controllare dimensione, peso e allineamento del testo.</p>
  <p class="evidenziato">Questa sezione è particolarmente importante!</p>
  <p class="citazione">"CSS is awesome!" - Un web developer</p>
</body>
</html>`,
            language: 'html',
            highlightLines: [14],
          },
          'Salva e ricarica (F5) - la citazione deve essere CENTRATA e LEGGERA! ✨',
          'Verifica nel browser: ogni paragrafo ha uno stile diverso grazie alle classi!',
        ]}
        experiments={[
          'Cambia font-size di .titolo-principale da 40px a 60px - diventa gigante!',
          'Cambia font-weight di .citazione da 300 a 700 (bold) - diventa grassetto!',
          'Cambia text-align di .importante da sinistra a "center" - si centra!',
          'Applica la classe .importante anche al terzo paragrafo (quello evidenziato) - può avere DUE classi: class="evidenziato importante"',
          'Crea una nuova classe .piccolo con font-size: 12px e applicala a un paragrafo - diventa minuscolo!',
        ]}
      />

      {/* Sfida */}
      <Challenge
        title="Pagina Articolo Completa"
        description="Crea una pagina articolo completa con un sistema di classi professionale. Usa SOLO classi, nessun selettore elemento!"
        requirements={[
          'Crea un articolo con: titolo principale, autore, data, introduzione, 3 sezioni con sottotitoli, conclusione',
          'Crea classe .articolo-titolo (font-size: 42px, bold, center, colore scuro)',
          'Crea classe .articolo-meta (font-size: 14px, center, colore grigio, italic) per autore e data',
          'Crea classe .articolo-intro (font-size: 20px, weight 300, allineato left)',
          'Crea classe .sezione-titolo (font-size: 28px, bold, colore blu scuro)',
          'Crea classe .sezione-testo (font-size: 16px, normale, left)',
          'Crea classe .nota-importante (font-size: 18px, bold, center, sfondo giallo chiaro)',
          'Crea classe .conclusione (font-size: 18px, center, weight 300, corsivo)',
          'Usa i colori HEX che hai imparato',
          'Ogni classe deve avere almeno 3 proprietà tra quelle imparate',
          'L\'articolo deve essere visivamente ben strutturato e leggibile'
        ]}
      />

      {/* Checklist */}
      <Checklist
        items={[
          'Ho capito cos\'è una classe CSS e perché è importante',
          'So usare il selettore .classe nel CSS',
          'So aggiungere class="..." agli elementi HTML',
          'So usare font-size con i pixel (px)',
          'So usare font-weight con normal, bold e numeri',
          'So usare text-align con left, center, right',
          'So combinare più proprietà in una classe',
          'So riutilizzare la stessa classe su più elementi',
          'So quando usare classe vs selettore elemento',
          'Ho completato l\'esercizio con le 5 classi',
          'Ho completato la sfida: articolo completo'
        ]}
      />

      {/* Conclusione */}
      <section className="mt-12 bg-gradient-to-r from-green-500 to-teal-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Fantastico Lavoro!</h2>
        <p className="text-xl mb-4">
          Hai appena imparato il <strong>concetto più importante del CSS</strong>: le CLASSI!
        </p>
        <div className="bg-black/20 p-4 rounded border-2 border-white/30">
          <p className="font-bold mb-2 text-yellow-200">📊 Proprietà Totali Imparate: 6</p>
          <ul className="list-disc list-inside space-y-1">
            <li>color (Lezione 1 + 2)</li>
            <li>background-color (Lezione 1 + 2)</li>
            <li>border (Lezione 2)</li>
            <li>font-size (Lezione 3) ✨ NUOVO</li>
            <li>font-weight (Lezione 3) ✨ NUOVO</li>
            <li>text-align (Lezione 3) ✨ NUOVO</li>
          </ul>
        </div>
        <p className="text-lg font-semibold mt-4">
          Prossima lezione: Gli <strong>ID</strong> e la <strong>spaziatura</strong> (padding e margin)! 🚀
        </p>
      </section>
    </LessonLayout>
  );
}
