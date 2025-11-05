import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import LessonPreview from '@/components/didattica/LessonPreview';
import { getLezioniByModuloSlug } from '@/lib/moduli';

export default function Lezione14() {
  const lezioni = getLezioniByModuloSlug('modulo-1-html');

  return (
    <LessonLayout
      moduloSlug="modulo-1-html"
      moduloTitolo="Modulo 1: HTML"
      lezioni={lezioni}
      lezioneSlug="lezione-14-html-semantico"
      lezioneTitolo="HTML Semantico - Tag con Significato"
    >
      <LessonHeader
        numero={14}
        titolo="HTML Semantico - Tag con Significato"
        durata="2 ore"
        difficolta="media"
        obiettivi={[
          'Capire cosa significa "semantico" in HTML',
          'Conoscere i principali tag semantici HTML5',
          'Imparare a strutturare una pagina con tag semantici',
          'Comprendere i benefici dell\'HTML semantico',
        ]}
      />

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Cos'è l'HTML Semantico?</h2>

        <p className="text-gray-700 mb-4">
          Nella lezione precedente hai imparato a usare <code className="bg-gray-100 px-2 py-1 rounded">{'<div>'}</code> e{' '}
          <code className="bg-gray-100 px-2 py-1 rounded">{'<span>'}</code> per organizzare i contenuti.
          Ma c'è un problema: questi tag non dicono <strong>nulla</strong> sul contenuto che contengono!
        </p>

        <p className="text-gray-700 mb-4">
          Quando guardi <code className="bg-gray-100 px-2 py-1 rounded">{'<div>Menu</div>'}</code>,
          tu capisci che è un menu, ma il <strong>browser</strong> e i <strong>motori di ricerca</strong> (come Google)
          non lo sanno. Per loro è solo un div qualsiasi!
        </p>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 my-6">
          <p className="text-gray-700 font-semibold">💡 HTML Semantico significa:</p>
          <p className="text-gray-700 mt-2">
            Usare tag HTML che <strong>descrivono il loro contenuto</strong>, non solo come appare visivamente,
            ma anche <strong>cosa significa</strong> nella struttura della pagina.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Perché è Importante?</h2>

        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h3 className="font-bold text-gray-800 mb-2">🔍 SEO</h3>
            <p className="text-gray-700 text-sm">
              Google capisce meglio il tuo sito e lo posiziona più in alto nei risultati di ricerca
            </p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <h3 className="font-bold text-gray-800 mb-2">♿ Accessibilità</h3>
            <p className="text-gray-700 text-sm">
              Gli screen reader (per persone ipovedenti) leggono meglio la tua pagina
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <h3 className="font-bold text-gray-800 mb-2">📖 Leggibilità</h3>
            <p className="text-gray-700 text-sm">
              Altri sviluppatori capiscono subito la struttura del tuo codice
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">I Tag Semantici Principali</h2>

        <p className="text-gray-700 mb-4">
          HTML5 ha introdotto molti tag semantici. Vediamo i più importanti!
        </p>

        <div className="space-y-6 my-6">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">
              <code className="bg-gray-100 px-2 py-1 rounded">{'<header>'}</code> - L'Intestazione
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              Contiene l'intestazione della pagina o di una sezione: logo, titolo, menu di navigazione.
            </p>
            <CodeExample
              code={`<header>
  <h1>Il Mio Blog</h1>
  <p>Benvenuto nel mio spazio personale</p>
</header>`}
            />
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">
              <code className="bg-gray-100 px-2 py-1 rounded">{'<nav>'}</code> - La Navigazione
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              Contiene i link di navigazione principali del sito.
            </p>
            <CodeExample
              code={`<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/chi-sono">Chi sono</a></li>
    <li><a href="/contatti">Contatti</a></li>
  </ul>
</nav>`}
            />
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">
              <code className="bg-gray-100 px-2 py-1 rounded">{'<main>'}</code> - Il Contenuto Principale
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              Il contenuto principale della pagina. Deve essere <strong>unico</strong> (uno solo per pagina)!
            </p>
            <CodeExample
              code={`<main>
  <h2>Benvenuto</h2>
  <p>Questo è il contenuto principale della pagina.</p>
</main>`}
            />
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">
              <code className="bg-gray-100 px-2 py-1 rounded">{'<article>'}</code> - Un Articolo
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              Contenuto indipendente e riutilizzabile: articolo blog, notizia, post, commento.
            </p>
            <CodeExample
              code={`<article>
  <h2>Il Mio Primo Post</h2>
  <p>Oggi ho imparato l'HTML semantico...</p>
  <p>È stato super interessante!</p>
</article>`}
            />
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">
              <code className="bg-gray-100 px-2 py-1 rounded">{'<section>'}</code> - Una Sezione
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              Raggruppa contenuti correlati per tema. Di solito ha un titolo.
            </p>
            <CodeExample
              code={`<section>
  <h2>Le Mie Competenze</h2>
  <p>HTML, CSS, JavaScript</p>
</section>`}
            />
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-gray-500 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">
              <code className="bg-gray-100 px-2 py-1 rounded">{'<aside>'}</code> - Contenuto Correlato
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              Contenuto tangenziale: sidebar, box informazioni, widget.
            </p>
            <CodeExample
              code={`<aside>
  <h3>Articoli Correlati</h3>
  <ul>
    <li><a href="#">Introduzione a HTML</a></li>
    <li><a href="#">CSS per principianti</a></li>
  </ul>
</aside>`}
            />
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-500 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">
              <code className="bg-gray-100 px-2 py-1 rounded">{'<footer>'}</code> - Il Piè di Pagina
            </h3>
            <p className="text-gray-700 text-sm mb-2">
              Informazioni finali: copyright, contatti, link secondari.
            </p>
            <CodeExample
              code={`<footer>
  <p>&copy; 2025 Il Mio Sito. Tutti i diritti riservati.</p>
  <p>Email: info@miosito.it</p>
</footer>`}
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Esempio Completo: Struttura di una Pagina</h2>

        <p className="text-gray-700 mb-4">
          Ecco come si usa l'HTML semantico per strutturare un'intera pagina web:
        </p>

        <CodeExample
          title="Struttura completa con tag semantici"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Mio Blog Personale</title>
</head>
<body>
  <header>
    <h1>Il Mio Blog</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contatti">Contatti</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <h2>Il mio viaggio nell'HTML</h2>
      <p>Pubblicato il 24 ottobre 2025</p>
      <p>Oggi voglio raccontarvi la mia esperienza...</p>

      <section>
        <h3>Cosa ho imparato</h3>
        <p>L'HTML semantico è fantastico perché...</p>
      </section>

      <section>
        <h3>Le difficoltà</h3>
        <p>All'inizio non era facile ricordare tutti i tag...</p>
      </section>
    </article>

    <aside>
      <h3>Articoli Recenti</h3>
      <ul>
        <li><a href="#">Come imparare il web</a></li>
        <li><a href="#">I miei primi passi</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2025 Il Mio Blog. Tutti i diritti riservati.</p>
    <p>Seguimi su: Instagram | Twitter | GitHub</p>
  </footer>
</body>
</html>`}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Prima vs Dopo: Il Confronto</h2>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div>
            <h3 className="font-bold text-red-600 mb-3">❌ PRIMA (senza semantica)</h3>
            <CodeExample
              code={`<div class="header">
  <div class="title">Blog</div>
  <div class="menu">
    <div><a href="/">Home</a></div>
    <div><a href="/blog">Blog</a></div>
  </div>
</div>

<div class="content">
  <div class="post">
    <div class="post-title">Articolo</div>
    <div class="post-text">Testo...</div>
  </div>
</div>

<div class="footer">
  <div>© 2025</div>
</div>`}
            />
          </div>

          <div>
            <h3 className="font-bold text-green-600 mb-3">✅ DOPO (con semantica)</h3>
            <CodeExample
              code={`<header>
  <h1>Blog</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
  </nav>
</header>

<main>
  <article>
    <h2>Articolo</h2>
    <p>Testo...</p>
  </article>
</main>

<footer>
  <p>© 2025</p>
</footer>`}
            />
          </div>
        </div>

        <p className="text-gray-700 mb-4">
          Guarda come il codice di destra è più <strong>chiaro</strong>, <strong>corto</strong> e
          <strong> significativo</strong>!
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Article vs Section: Qual è la Differenza?</h2>

        <p className="text-gray-700 mb-4">
          Questa è una domanda che fanno tutti! Ecco la regola semplice:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <h3 className="font-bold text-gray-800 mb-2">📄 &lt;article&gt;</h3>
            <p className="text-gray-700 text-sm mb-3">
              Usa quando il contenuto ha senso <strong>da solo</strong>, anche fuori dal contesto della pagina.
            </p>
            <p className="text-gray-700 text-sm font-semibold">Esempi:</p>
            <ul className="text-gray-700 text-sm space-y-1 mt-2">
              <li>• Post di un blog</li>
              <li>• Articolo di notizia</li>
              <li>• Commento in un forum</li>
              <li>• Card prodotto</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <h3 className="font-bold text-gray-800 mb-2">📦 &lt;section&gt;</h3>
            <p className="text-gray-700 text-sm mb-3">
              Usa per raggruppare contenuti <strong>per tema</strong>. Ha senso solo nel contesto della pagina.
            </p>
            <p className="text-gray-700 text-sm font-semibold">Esempi:</p>
            <ul className="text-gray-700 text-sm space-y-1 mt-2">
              <li>• Capitolo di un articolo</li>
              <li>• Sezione "Chi siamo"</li>
              <li>• Gruppo di competenze</li>
              <li>• Sezione "Testimonianze"</li>
            </ul>
          </div>
        </div>

        <CodeExample
          title="Esempio pratico della differenza"
          code={`<article>
  <h2>Guida completa all'HTML</h2>

  <!-- Questo articolo contiene più sezioni -->
  <section>
    <h3>Introduzione</h3>
    <p>L'HTML è il linguaggio base del web...</p>
  </section>

  <section>
    <h3>Storia</h3>
    <p>L'HTML è nato nel 1991...</p>
  </section>

  <section>
    <h3>Tag Fondamentali</h3>
    <p>I tag HTML più usati sono...</p>
  </section>
</article>`}
        />

        <Exercise
          title="🎯 Esercizio Guidato: Blog Post con HTML Semantico"
          difficulty="media"
          steps={[
            'Crea un file "blog-semantico.html" in VS Code',
            {
              text: 'Scrivi la struttura HTML base con title "Il Mio Blog"',
              code: `<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8">
    <title>Il Mio Blog</title>
  </head>
  <body>

  </body>
</html>`,
              language: 'html',
            },
            {
              text: 'Aggiungi un <header> con titolo del blog e barra di navigazione',
              code: `<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8">
    <title>Il Mio Blog</title>
  </head>
  <body>
    <header>
      <h1>Il Mio Blog di Tecnologia</h1>
      <nav>
        <a href="#home">Home</a> |
        <a href="#articoli">Articoli</a> |
        <a href="#contatti">Contatti</a>
      </nav>
    </header>
  </body>
</html>`,
              language: 'html',
              highlightLines: [8, 9, 10, 11, 12, 13, 14, 15],
            },
            {
              text: 'Apri il <main> per il contenuto principale della pagina',
              code: `<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8">
    <title>Il Mio Blog</title>
  </head>
  <body>
    <header>
      <h1>Il Mio Blog di Tecnologia</h1>
      <nav>
        <a href="#home">Home</a> |
        <a href="#articoli">Articoli</a> |
        <a href="#contatti">Contatti</a>
      </nav>
    </header>

    <main>
    </main>
  </body>
</html>`,
              language: 'html',
              highlightLines: [17, 18],
            },
            {
              text: 'Dentro <main>, crea un <article> per il primo articolo del blog con titolo H2',
              code: `<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8">
    <title>Il Mio Blog</title>
  </head>
  <body>
    <header>
      <h1>Il Mio Blog di Tecnologia</h1>
      <nav>
        <a href="#home">Home</a> |
        <a href="#articoli">Articoli</a> |
        <a href="#contatti">Contatti</a>
      </nav>
    </header>

    <main>
      <article>
        <h2>Guida all'HTML Semantico</h2>
        <p>Pubblicato il 5 novembre 2025</p>
        <p>Scopriamo insieme come usare i tag semantici per creare pagine web più chiare e accessibili!</p>
      </article>
    </main>
  </body>
</html>`,
              language: 'html',
              highlightLines: [18, 19, 20, 21, 22],
            },
            {
              text: 'Dentro l\'<article>, aggiungi due <section>: una per l\'introduzione e una per i dettagli',
              code: `<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8">
    <title>Il Mio Blog</title>
  </head>
  <body>
    <header>
      <h1>Il Mio Blog di Tecnologia</h1>
      <nav>
        <a href="#home">Home</a> |
        <a href="#articoli">Articoli</a> |
        <a href="#contatti">Contatti</a>
      </nav>
    </header>

    <main>
      <article>
        <h2>Guida all'HTML Semantico</h2>
        <p>Pubblicato il 5 novembre 2025</p>
        <p>Scopriamo insieme come usare i tag semantici per creare pagine web più chiare e accessibili!</p>

        <section>
          <h3>Cos'è l'HTML Semantico?</h3>
          <p>L'HTML semantico usa tag che descrivono il significato del contenuto, non solo l'aspetto.</p>
        </section>

        <section>
          <h3>Tag Principali</h3>
          <ul>
            <li><strong>header:</strong> intestazione della pagina</li>
            <li><strong>nav:</strong> menu di navigazione</li>
            <li><strong>main:</strong> contenuto principale</li>
            <li><strong>article:</strong> contenuto autonomo</li>
            <li><strong>section:</strong> sezioni tematiche</li>
            <li><strong>footer:</strong> piè di pagina</li>
          </ul>
        </section>
      </article>
    </main>
  </body>
</html>`,
              language: 'html',
              highlightLines: [23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
            },
            {
              text: 'Aggiungi un <footer> alla fine del body con informazioni sull\'autore e copyright',
              code: `<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8">
    <title>Il Mio Blog</title>
  </head>
  <body>
    <header>
      <h1>Il Mio Blog di Tecnologia</h1>
      <nav>
        <a href="#home">Home</a> |
        <a href="#articoli">Articoli</a> |
        <a href="#contatti">Contatti</a>
      </nav>
    </header>

    <main>
      <article>
        <h2>Guida all'HTML Semantico</h2>
        <p>Pubblicato il 5 novembre 2025</p>
        <p>Scopriamo insieme come usare i tag semantici per creare pagine web più chiare e accessibili!</p>

        <section>
          <h3>Cos'è l'HTML Semantico?</h3>
          <p>L'HTML semantico usa tag che descrivono il significato del contenuto, non solo l'aspetto.</p>
        </section>

        <section>
          <h3>Tag Principali</h3>
          <ul>
            <li><strong>header:</strong> intestazione della pagina</li>
            <li><strong>nav:</strong> menu di navigazione</li>
            <li><strong>main:</strong> contenuto principale</li>
            <li><strong>article:</strong> contenuto autonomo</li>
            <li><strong>section:</strong> sezioni tematiche</li>
            <li><strong>footer:</strong> piè di pagina</li>
          </ul>
        </section>
      </article>
    </main>

    <footer>
      <p>© 2025 Il Mio Blog - Scritto con passione da Marco</p>
      <p>Contattami: marco@esempio.com</p>
    </footer>
  </body>
</html>`,
              language: 'html',
              highlightLines: [42, 43, 44, 45],
            },
            'Salva il file (Ctrl+S o Cmd+S)',
            'Fai doppio click sul file "blog-semantico.html" per aprirlo nel browser! 🎉',
            'Nota come <header> contiene intestazione e navigazione - ha senso semanticamente! 🎯',
            'Nota come <main> racchiude il contenuto principale (l\'articolo) 📄',
            'Nota come <article> è un contenuto completo che potrebbe stare da solo 📰',
            'Nota come le <section> dividono l\'articolo in parti tematiche 📚',
            'Nota come <footer> contiene informazioni sul sito e l\'autore 👤',
          ]}
          experiments={[
            'Aggiungi un secondo <article> dopo il primo con un altro post del blog, salva e ricarica (F5)!',
            'Rimuovi il tag <nav> e lascia solo i link dentro <header>, salva e ricarica - funziona ma perde significato semantico!',
            'Aggiungi un <aside> dopo il <main> con una sidebar "Articoli Correlati", salva e ricarica',
            'Cambia <article> in <div>, salva e ricarica - visivamente uguale ma semanticamente sbagliato!',
            'Aggiungi un tag <time datetime="2025-11-05"> alla data di pubblicazione per renderlo ancora più semantico!',
          ]}
        />

        <Challenge
          title="Sfida: Crea una Pagina Portfolio Semantica"
          description="Metti in pratica tutto l'HTML semantico creando la tua pagina portfolio personale!"
          requirements={[
            'Un <header> con il tuo nome e un menu di navigazione (<nav>)',
            'Un <main> che contiene tutto il contenuto',
            'Una <section> "Chi sono" con la tua presentazione',
            'Una <section> "Progetti" con almeno 2 progetti, ognuno in un <article>',
            'Una <section> "Competenze" con lista delle tue skills',
            'Un <aside> con i tuoi contatti social (opzionale)',
            'Un <footer> con copyright e link utili',
            'BONUS: Aggiungi <figure> e <figcaption> per le immagini dei progetti',
          ]}
          hint="Ricorda: <header>, <main> e <footer> sono i pilastri della pagina. Dentro <main> organizza i contenuti con <section>, <article> e <aside>!"
        />

        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 my-6">
          <h3 className="font-bold text-gray-800 mb-2">📚 Tag Semantici Extra (da esplorare!)</h3>
          <p className="text-gray-700 mb-3">
            Ci sono altri tag semantici utili che puoi usare:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded">{'<figure>'}</code> e{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">{'<figcaption>'}</code> - Per immagini con didascalie
            </li>
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded">{'<time>'}</code> - Per date e orari
            </li>
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded">{'<mark>'}</code> - Per evidenziare testo importante
            </li>
            <li>
              <code className="bg-gray-100 px-2 py-1 rounded">{'<details>'}</code> e{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">{'<summary>'}</code> - Per contenuti espandibili
            </li>
          </ul>
        </div>

        <CodeExample
          title="Esempio di tag semantici extra"
          code={`<article>
  <h2>La Storia del Web</h2>
  <p>Pubblicato il <time datetime="2025-10-24">24 ottobre 2025</time></p>

  <p>
    Il web è nato nel <mark>1991</mark> grazie a Tim Berners-Lee.
  </p>

  <figure>
    <img src="tim-berners-lee.jpg" alt="Tim Berners-Lee">
    <figcaption>Tim Berners-Lee, creatore del World Wide Web</figcaption>
  </figure>

  <details>
    <summary>Vuoi sapere di più?</summary>
    <p>Clicca qui per leggere informazioni aggiuntive sulla storia del web...</p>
  </details>
</article>`}
        />

        <Checklist
          items={[
            'Ho capito cosa significa "HTML semantico"',
            'Conosco i 7 tag semantici principali (header, nav, main, article, section, aside, footer)',
            'So la differenza tra <article> e <section>',
            'Ho completato l\'esercizio di conversione',
            'Ho creato la mia pagina portfolio con HTML semantico',
            'Ho scoperto i tag semantici extra!',
          ]}
        />

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold text-gray-800 mb-2">🎯 Prossima Lezione</h3>
          <p className="text-gray-700 mb-3">
            Nella prossima lezione farai pratica e consolidamento di tutto quello che hai imparato
            finora su HTML. Ti prepareremo per il mini-progetto finale del Modulo 1!
          </p>
          <a
            href="/moduli/modulo-1-html/lezione-15-consolidamento"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Vai alla Lezione 15 →
          </a>
        </div>
      </section>
    </LessonLayout>
  );
}
