import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import Link from 'next/link';
import { getLezioniByModuloSlug } from '@/lib/moduli';

export default function Lezione6() {
  const lezioni = getLezioniByModuloSlug('modulo-1-html');

  return (
    <LessonLayout
      moduloSlug="modulo-1-html"
      moduloTitolo="Modulo 1: HTML"
      lezioni={lezioni}
    >
      <LessonHeader
        numero={6}
        titolo="Immagini"
        durata="1.5 ore"
        difficolta="facile"
        obiettivi={[
          'Usare il tag <img> per inserire immagini',
          'Capire gli attributi src e alt',
          'Conoscere width e height',
          'Capire i percorsi relativi e assoluti',
          'Rendere le immagini cliccabili',
          'Conoscere i formati immagine (JPG, PNG, GIF, SVG, WebP)',
        ]}
      />

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Un'Immagine Vale Mille Parole</h2>

        <p className="text-gray-700 mb-4">
          Le immagini sono uno degli elementi più importanti del web! Rendono le pagine belle da vedere,
          aiutano a comunicare meglio e catturano l'attenzione. Pensa a Instagram, Pinterest, o anche
          solo alle foto nei siti di notizie: senza immagini, il web sarebbe molto noioso!
        </p>

        <p className="text-gray-700 mb-4">
          In HTML, inserire un'immagine è semplicissimo grazie al tag{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">&lt;img&gt;</code>.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 my-6">
          <p className="text-gray-700 font-semibold">📸 Fun Fact:</p>
          <p className="text-gray-700">
            Il primo banner pubblicitario con immagine sul web apparve nel 1994.
            Oggi ci sono miliardi di immagini online!
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Il Tag &lt;img&gt;</h2>

        <p className="text-gray-700 mb-4">
          Il tag <code className="bg-gray-100 px-2 py-1 rounded">&lt;img&gt;</code> è un tag{' '}
          <strong>auto-chiudente</strong> (come <code>&lt;br&gt;</code> e <code>&lt;hr&gt;</code>),
          quindi non ha un tag di chiusura.
        </p>

        <CodeExample
          title="Struttura base del tag img"
          code={`<!-- Struttura: <img src="percorso-immagine" alt="descrizione"> -->

<img src="foto-gatto.jpg" alt="Un gatto arancione che dorme">

<img src="logo.png" alt="Logo del sito">

<img src="https://example.com/immagine.jpg" alt="Immagine esterna">`}
        />

        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 my-6">
          <p className="text-gray-700 font-semibold">⚠️ Tag auto-chiudente:</p>
          <p className="text-gray-700">
            <code>&lt;img&gt;</code> non ha contenuto dentro, quindi si chiude da solo.
            Puoi scrivere anche <code>&lt;img /&gt;</code> (con slash finale), ma è opzionale in HTML5.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Attributi Fondamentali: src e alt</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-green-50 rounded-lg border-2 border-green-400">
            <h3 className="font-bold text-green-900 mb-2">✅ src (source) - OBBLIGATORIO</h3>
            <p className="text-gray-700 text-sm mb-2">
              Indica il percorso dell'immagine. Può essere relativo o assoluto.
            </p>
            <code className="text-xs bg-white px-2 py-1 rounded block">
              src="immagini/foto.jpg"
            </code>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-400">
            <h3 className="font-bold text-blue-900 mb-2">♿ alt (alternative text) - IMPORTANTE</h3>
            <p className="text-gray-700 text-sm mb-2">
              Descrive l'immagine per chi non può vederla (screen reader, immagine mancante).
            </p>
            <code className="text-xs bg-white px-2 py-1 rounded block">
              alt="Descrizione immagine"
            </code>
          </div>
        </div>

        <CodeExample
          title="Esempi di src e alt"
          code={`<!-- Percorso relativo (stessa cartella) -->
<img src="gatto.jpg" alt="Gatto tigrato che gioca">

<!-- Percorso relativo (sottocartella) -->
<img src="immagini/paesaggio.jpg" alt="Montagne al tramonto">

<!-- Percorso assoluto (URL completo) -->
<img src="https://www.example.com/foto.jpg" alt="Foto esempio">

<!-- Alt descrive cosa c'è nell'immagine -->
<img src="logo-azienda.png" alt="Logo Azienda XYZ - scritta blu con stella">`}
        />

        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 my-6">
          <p className="text-gray-700 font-semibold">🚨 Perché l'alt è così importante?</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
            <li><strong>Accessibilità:</strong> Gli screen reader leggono l'alt per i non vedenti</li>
            <li><strong>SEO:</strong> Google usa l'alt per capire cosa c'è nell'immagine</li>
            <li><strong>Fallback:</strong> Se l'immagine non si carica, appare il testo alt</li>
            <li><strong>Legge:</strong> In molti paesi è obbligatorio per accessibilità!</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Dimensioni: width e height</h2>

        <p className="text-gray-700 mb-4">
          Puoi controllare le dimensioni dell'immagine con gli attributi{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">width</code> e{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">height</code>.
        </p>

        <CodeExample
          title="Impostare larghezza e altezza"
          code={`<!-- Dimensioni in pixel -->
<img src="foto.jpg" alt="Foto" width="300" height="200">

<!-- Solo larghezza (altezza proporzionale) -->
<img src="foto.jpg" alt="Foto" width="500">

<!-- Solo altezza (larghezza proporzionale) -->
<img src="foto.jpg" alt="Foto" height="400">

<!-- Immagine piccola per icona -->
<img src="icona.png" alt="Icona cuore" width="32" height="32">`}
        />

        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 my-6">
          <p className="text-gray-700 font-semibold">💡 Best Practice:</p>
          <p className="text-gray-700 text-sm">
            <strong>Opzione 1:</strong> Non impostare width/height e usa CSS per ridimensionare<br />
            <strong>Opzione 2:</strong> Imposta solo width OPPURE solo height (mantiene proporzioni)<br />
            <strong>⚠️ Evita:</strong> Impostare entrambi se non corrispondono alle proporzioni originali
            (l'immagine si deforma!)
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Percorsi Immagini: Relativi vs Assoluti</h2>

        <p className="text-gray-700 mb-4">
          Come per i link, i percorsi delle immagini possono essere relativi o assoluti.
        </p>

        <div className="space-y-4 mb-6">
          <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
            <h3 className="font-bold text-purple-900 mb-2">📂 Percorsi Relativi</h3>
            <p className="text-gray-700 text-sm mb-2">Partono dalla posizione del file HTML corrente.</p>
            <div className="space-y-1 text-xs">
              <code className="bg-white px-2 py-1 rounded block">foto.jpg</code>
              <p className="text-gray-600">↳ Stessa cartella del file HTML</p>
              <code className="bg-white px-2 py-1 rounded block">immagini/foto.jpg</code>
              <p className="text-gray-600">↳ Sottocartella "immagini"</p>
              <code className="bg-white px-2 py-1 rounded block">../foto.jpg</code>
              <p className="text-gray-600">↳ Cartella superiore</p>
            </div>
          </div>

          <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-400">
            <h3 className="font-bold text-indigo-900 mb-2">🌐 Percorsi Assoluti</h3>
            <p className="text-gray-700 text-sm mb-2">URL completi, spesso per immagini esterne.</p>
            <code className="text-xs bg-white px-2 py-1 rounded block">
              https://www.example.com/images/foto.jpg
            </code>
          </div>
        </div>

        <CodeExample
          title="Esempi di percorsi"
          code={`<!-- Struttura cartelle:
    index.html
    logo.png
    immagini/
      foto1.jpg
      foto2.jpg
-->

<!-- Nel file index.html -->
<img src="logo.png" alt="Logo">
<img src="immagini/foto1.jpg" alt="Foto 1">

<!-- URL esterno -->
<img src="https://picsum.photos/300/200" alt="Immagine random">`}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Immagini Cliccabili</h2>

        <p className="text-gray-700 mb-4">
          Come hai visto nella lezione sui link, puoi rendere un'immagine cliccabile mettendola dentro un tag{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">&lt;a&gt;</code>!
        </p>

        <CodeExample
          title="Link con immagini"
          code={`<!-- Immagine che porta a un'altra pagina -->
<a href="portfolio.html">
  <img src="anteprima-portfolio.jpg" alt="Anteprima del mio portfolio">
</a>

<!-- Immagine che porta a un sito esterno -->
<a href="https://www.instagram.com/mioprofilo" target="_blank">
  <img src="icona-instagram.png" alt="Seguimi su Instagram" width="48" height="48">
</a>

<!-- Logo cliccabile che torna alla home -->
<a href="index.html">
  <img src="logo.png" alt="Logo - Torna alla home" width="200">
</a>`}
        />

        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 my-6">
          <p className="text-gray-700 font-semibold">🎯 Uso Comune:</p>
          <p className="text-gray-700 text-sm">
            Le gallery di immagini spesso hanno thumbnail (anteprime piccole) cliccabili
            che aprono l'immagine grande. Le icone social sono quasi sempre immagini cliccabili!
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Formati Immagine</h2>

        <p className="text-gray-700 mb-4">
          Non tutte le immagini sono uguali! Esistono diversi formati, ognuno con i suoi pro e contro.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-300">
            <h3 className="font-bold text-blue-900 mb-2">📷 JPG / JPEG</h3>
            <p className="text-gray-700 text-sm mb-2"><strong>Uso:</strong> Foto, immagini complesse</p>
            <p className="text-gray-600 text-xs">✅ File piccoli, buona qualità</p>
            <p className="text-gray-600 text-xs">❌ Perde qualità con compressione</p>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-300">
            <h3 className="font-bold text-purple-900 mb-2">🎨 PNG</h3>
            <p className="text-gray-700 text-sm mb-2"><strong>Uso:</strong> Loghi, icone, trasparenze</p>
            <p className="text-gray-600 text-xs">✅ Qualità perfetta, trasparenza</p>
            <p className="text-gray-600 text-xs">❌ File più grandi</p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border-2 border-green-300">
            <h3 className="font-bold text-green-900 mb-2">🎬 GIF</h3>
            <p className="text-gray-700 text-sm mb-2"><strong>Uso:</strong> Animazioni semplici</p>
            <p className="text-gray-600 text-xs">✅ Supporta animazioni</p>
            <p className="text-gray-600 text-xs">❌ Max 256 colori</p>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
            <h3 className="font-bold text-yellow-900 mb-2">🎯 SVG</h3>
            <p className="text-gray-700 text-sm mb-2"><strong>Uso:</strong> Icone, loghi vettoriali</p>
            <p className="text-gray-600 text-xs">✅ Qualità infinita, scalabile</p>
            <p className="text-gray-600 text-xs">❌ Solo per grafica vettoriale</p>
          </div>

          <div className="p-4 bg-red-50 rounded-lg border-2 border-red-300">
            <h3 className="font-bold text-red-900 mb-2">🚀 WebP</h3>
            <p className="text-gray-700 text-sm mb-2"><strong>Uso:</strong> Tutto (formato moderno)</p>
            <p className="text-gray-600 text-xs">✅ File piccoli, ottima qualità</p>
            <p className="text-gray-600 text-xs">⚠️ Browser vecchi non lo supportano</p>
          </div>

          <div className="p-4 bg-indigo-50 rounded-lg border-2 border-indigo-300">
            <h3 className="font-bold text-indigo-900 mb-2">🆕 AVIF</h3>
            <p className="text-gray-700 text-sm mb-2"><strong>Uso:</strong> Futuro del web</p>
            <p className="text-gray-600 text-xs">✅ File miniuscoli, qualità top</p>
            <p className="text-gray-600 text-xs">❌ Supporto ancora limitato</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Attributi Avanzati</h2>

        <div className="space-y-4 mb-6">
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <h3 className="font-bold text-blue-900 mb-2">title - Tooltip</h3>
            <p className="text-gray-700 text-sm mb-2">
              Mostra un testo quando passi il mouse sull'immagine.
            </p>
            <code className="text-xs bg-white px-2 py-1 rounded block">
              &lt;img src="foto.jpg" alt="Foto" title="Clicca per ingrandire"&gt;
            </code>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
            <h3 className="font-bold text-purple-900 mb-2">loading="lazy" - Caricamento Pigro</h3>
            <p className="text-gray-700 text-sm mb-2">
              Carica l'immagine solo quando sta per essere visibile. Ottimo per performance!
            </p>
            <code className="text-xs bg-white px-2 py-1 rounded block">
              &lt;img src="foto-grande.jpg" alt="Foto" loading="lazy"&gt;
            </code>
          </div>
        </div>

        <CodeExample
          title="Immagine completa con tutti gli attributi"
          code={`<img
  src="immagini/prodotto.jpg"
  alt="Smartphone X1 - vista frontale con schermo acceso"
  width="600"
  height="400"
  title="Clicca per vedere i dettagli"
  loading="lazy"
>`}
        />

        <Exercise
          title="Esercizio Guidato: Crea una Gallery di Immagini"
          difficulty="facile"
          steps={[
            'Crea una cartella "immagini" nella stessa cartella del tuo HTML',
            'Trova 4 immagini a piacere e mettile nella cartella (puoi usare immagini da Unsplash o Pexels)',
            'Crea un file "gallery.html" con struttura HTML base',
            'Nel <title> scrivi: "La Mia Gallery Fotografica"',
            'Aggiungi un <h1> con: "La Mia Collezione di Foto"',
            'Inserisci le 4 immagini usando il tag <img> con percorso relativo',
            'Ogni immagine deve avere un alt descrittivo',
            'Imposta width="300" per tutte le immagini',
            'Aggiungi un <p> sotto ogni immagine con una didascalia',
            'Rendi cliccabile la prima immagine con un link a un sito a piacere',
            'Salva e apri con Live Server!',
          ]}
        />

        <Challenge
          title="Sfida: Portfolio Fotografico Professionale"
          description="Crea un sito portfolio con immagini, link e formattazione completa!"
          requirements={[
            'Almeno 6 immagini diverse',
            'Ogni immagine deve avere alt descrittivo e title',
            'Usa almeno 2 formati immagine diversi (es: JPG per foto, PNG per logo)',
            'Crea thumbnail piccoli (150x150) che aprono l\'immagine grande',
            'Usa loading="lazy" per le immagini sotto la fold',
            'Aggiungi un logo cliccabile in alto che torna alla home',
            'Crea almeno 2 categorie di immagini con titoli <h2>',
            'Usa <hr> per separare le sezioni',
            'Ogni immagine deve avere una didascalia in <p> o <figcaption>',
          ]}
          hint="Organizza le immagini in una struttura logica: logo in alto, poi sezioni tematiche. Pensa a come funzionano i portfolio veri su siti come Behance o Dribbble!"
        />

        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-400 my-8">
          <h3 className="text-lg font-bold text-orange-900 mb-3">🎨 Ottimizzazione Immagini</h3>

          <div className="space-y-3 text-gray-700 text-sm">
            <div className="flex gap-3">
              <span className="text-2xl">⚡</span>
              <div>
                <strong>Performance:</strong> Immagini grandi rallentano il sito. Comprimi e ridimensiona
                prima di caricarle online!
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-2xl">📱</span>
              <div>
                <strong>Responsive:</strong> Considera chi naviga da mobile. Un'immagine da 5MB è troppo
                per una connessione lenta.
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-2xl">🔍</span>
              <div>
                <strong>SEO:</strong> Usa nomi file descrittivi (foto-tramonto-mare.jpg invece di IMG_1234.jpg)
                e alt text accurati.
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-2xl">♿</span>
              <div>
                <strong>Accessibilità:</strong> L'alt non è opzionale! È un dovere morale e spesso legale
                per rendere il web accessibile a tutti.
              </div>
            </div>
          </div>
        </div>

        <Checklist
          items={[
            'So usare il tag <img> con src e alt',
            'Capisco la differenza tra percorsi relativi e assoluti',
            'So impostare width e height correttamente',
            'Conosco i principali formati immagine (JPG, PNG, GIF, SVG, WebP)',
            'So rendere un\'immagine cliccabile con <a>',
            'Capisco l\'importanza dell\'attributo alt per accessibilità e SEO',
            'So usare loading="lazy" per ottimizzare le performance',
            'Ho completato l\'esercizio della gallery',
            'Ho completato la sfida del portfolio fotografico',
          ]}
        />

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold text-gray-800 mb-2">🎯 Prossima Lezione</h3>
          <p className="text-gray-700 mb-3">
            Ora che sai inserire immagini, nella prossima lezione imparerai a creare
            <strong> liste</strong> ordinate e non ordinate!
          </p>
          <Link
            href="/moduli/modulo-1-html/lezione-7-liste"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Vai alla Lezione 7 →
          </Link>
        </div>
      </section>
    </LessonLayout>
  );
}
