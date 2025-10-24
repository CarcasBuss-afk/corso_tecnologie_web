import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Checklist from '@/components/didattica/Checklist';
import { getLezioniByModuloSlug } from '@/lib/moduli';

export default function Lezione16() {
  const lezioni = getLezioniByModuloSlug('modulo-1-html');

  return (
    <LessonLayout
      moduloSlug="modulo-1-html"
      moduloTitolo="Modulo 1: HTML"
      lezioni={lezioni}
      lezioneSlug="lezione-16-mini-progetto-parte-1"
      lezioneTitolo="Mini-Progetto Parte 1: Struttura e Homepage"
    >
      <LessonHeader
        numero={16}
        titolo="Mini-Progetto Parte 1: Struttura e Homepage"
        durata="2 ore"
        difficolta="media"
        obiettivi={[
          'Pianificare la struttura di un sito completo',
          'Creare la struttura di cartelle e file',
          'Costruire una homepage professionale',
          'Implementare un menu di navigazione funzionante',
        ]}
      />

      <section className="prose max-w-none">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-500 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">🎉 Benvenuto nel Mini-Progetto Finale!</h2>
          <p className="text-gray-700 mb-3">
            È arrivato il momento più emozionante: metterai in pratica TUTTO quello che hai imparato
            creando un <strong>sito portfolio personale completo</strong>!
          </p>
          <p className="text-gray-700">
            Nelle prossime 3 lezioni costruirai, passo dopo passo, un sito web professionale che potrai
            mostrare con orgoglio ai tuoi amici, famiglia e futuri datori di lavoro!
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Cosa Costruiremo</h2>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📦 Il Progetto: "Il Mio Portfolio Personale"</h3>

          <p className="text-gray-700 mb-4">
            Un sito web multi-pagina completo con:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">🏠 Homepage (index.html)</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Hero section accattivante</li>
                <li>• Sezioni presentazione</li>
                <li>• Call-to-action</li>
                <li>• Video/immagini</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">👤 Chi Sono (about.html)</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Biografia dettagliata</li>
                <li>• Timeline formazione</li>
                <li>• Competenze e skills</li>
                <li>• Interessi personali</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">💼 Progetti (projects.html)</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Galleria progetti</li>
                <li>• Descrizioni dettagliate</li>
                <li>• Immagini e link</li>
                <li>• Tecnologie usate</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-2">📧 Contatti (contact.html)</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Form di contatto completo</li>
                <li>• Informazioni contatto</li>
                <li>• Link social media</li>
                <li>• Mappa (opzionale)</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mt-4">
            <p className="text-gray-700 font-semibold mb-2">✨ Caratteristiche speciali:</p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Menu di navigazione presente in tutte le pagine</li>
              <li>• Struttura HTML5 semantica completa</li>
              <li>• Accessibilità ottimizzata</li>
              <li>• Ottimizzazione SEO di base</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Fase 1: Pianificazione e Struttura</h2>

        <p className="text-gray-700 mb-4">
          Prima di scrivere codice, pianifichiamo! Un buon progetto inizia sempre con una struttura chiara.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 my-6">
          <h3 className="font-bold text-gray-800 mb-2">📁 Struttura File del Progetto</h3>
          <p className="text-gray-700 mb-3 text-sm">
            Crea questa struttura di cartelle sul tuo computer:
          </p>
          <CodeExample
            code={`mio-portfolio/
├── index.html          (Homepage)
├── about.html          (Chi sono)
├── projects.html       (Progetti)
├── contact.html        (Contatti)
├── images/            (Cartella per immagini)
│   ├── hero-bg.jpg
│   ├── profile.jpg
│   ├── project1.jpg
│   ├── project2.jpg
│   └── project3.jpg
└── README.txt         (Note sul progetto)`}
          />
        </div>

        <Exercise
          title="Setup Iniziale del Progetto"
          difficulty="facile"
          steps={[
            'Crea una nuova cartella chiamata "mio-portfolio" sul desktop',
            'Dentro la cartella, crea una sottocartella "images"',
            'Apri Visual Studio Code',
            'File → Apri Cartella → seleziona "mio-portfolio"',
            'Crea i 4 file HTML: index.html, about.html, projects.html, contact.html',
            'Crea un file README.txt con una breve descrizione del progetto',
            'Trova 4-5 immagini da usare (puoi usare foto personali o immagini da internet)',
            'Salva le immagini nella cartella "images"',
          ]}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Fase 2: Template Base Riutilizzabile</h2>

        <p className="text-gray-700 mb-4">
          Per mantenere consistenza, creiamo un template base che useremo per tutte le pagine.
          Questo include header, nav e footer identici ovunque!
        </p>

        <CodeExample
          title="Template Base - Da usare per TUTTE le pagine"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Portfolio personale di [Tuo Nome] - Web Developer">
  <meta name="author" content="[Tuo Nome]">
  <title>[Titolo Specifico] - [Tuo Nome]</title>
</head>
<body>
  <!-- Header con logo e navigazione -->
  <header>
    <nav>
      <div>
        <h1><a href="index.html">[Tuo Nome]</a></h1>
        <p>Web Developer & Designer</p>
      </div>

      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">Chi Sono</a></li>
        <li><a href="projects.html">Progetti</a></li>
        <li><a href="contact.html">Contatti</a></li>
      </ul>
    </nav>
  </header>

  <!-- Contenuto principale (CAMBIA PER OGNI PAGINA) -->
  <main>
    <!-- Il contenuto specifico della pagina va qui -->
  </main>

  <!-- Footer uguale per tutte le pagine -->
  <footer>
    <div>
      <section>
        <h3>Contatti Rapidi</h3>
        <p>Email: tuoemail@example.com</p>
        <p>Telefono: +39 123 456 7890</p>
      </section>

      <section>
        <h3>Social Media</h3>
        <ul>
          <li><a href="https://github.com/tuousername" target="_blank">GitHub</a></li>
          <li><a href="https://linkedin.com/in/tuousername" target="_blank">LinkedIn</a></li>
          <li><a href="https://instagram.com/tuousername" target="_blank">Instagram</a></li>
        </ul>
      </section>

      <section>
        <h3>Link Utili</h3>
        <ul>
          <li><a href="about.html">Chi Sono</a></li>
          <li><a href="projects.html">Portfolio</a></li>
          <li><a href="contact.html">Contattami</a></li>
        </ul>
      </section>
    </div>

    <div>
      <p>&copy; 2025 [Tuo Nome]. Tutti i diritti riservati.</p>
      <p>Realizzato con ❤️ e HTML</p>
    </div>
  </footer>
</body>
</html>`}
        />

        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 my-6">
          <h3 className="font-bold text-gray-800 mb-2">💡 Suggerimento Pro</h3>
          <p className="text-gray-700 text-sm">
            Una volta creato il template in index.html, <strong>copialo</strong> negli altri 3 file
            (about.html, projects.html, contact.html) e poi cambia solo:
          </p>
          <ul className="text-gray-700 text-sm space-y-1 mt-2 ml-4">
            <li>• Il <code className="bg-gray-100 px-2 py-1 rounded">{'<title>'}</code> nel head</li>
            <li>• Il contenuto dentro <code className="bg-gray-100 px-2 py-1 rounded">{'<main>'}</code></li>
          </ul>
          <p className="text-gray-700 text-sm mt-2">
            Header, nav e footer rimangono identici! Questo garantisce consistenza.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Fase 3: Homepage (index.html)</h2>

        <p className="text-gray-700 mb-4">
          La homepage è la prima impressione! Deve essere accattivante e invitare a esplorare.
        </p>

        <CodeExample
          title="Contenuto <main> per index.html"
          code={`<main>
  <!-- Sezione Hero (introduzione con impatto) -->
  <section>
    <article>
      <h2>Ciao! Sono [Tuo Nome] 👋</h2>
      <p>
        Web Developer appassionato di tecnologia e design.
        Trasformo idee in esperienze digitali uniche.
      </p>
      <p>
        <a href="projects.html">Scopri i miei progetti →</a>
        <a href="contact.html">Contattami</a>
      </p>
    </article>

    <figure>
      <img src="images/profile.jpg" alt="Foto profilo di [Tuo Nome]" width="400" height="400">
      <figcaption>Web Developer & Designer</figcaption>
    </figure>
  </section>

  <!-- Sezione Chi Sono (anteprima) -->
  <section>
    <h2>Chi Sono</h2>
    <article>
      <p>
        Sono uno studente/sviluppatore web con la passione per creare
        siti web belli e funzionali. Ho iniziato questo percorso per
        trasformare la mia curiosità in competenze concrete.
      </p>
      <p>
        <strong>Specializzazioni:</strong> HTML, CSS, JavaScript (in corso)
      </p>
      <p>
        <a href="about.html">Scopri di più su di me →</a>
      </p>
    </article>
  </section>

  <!-- Sezione Competenze -->
  <section>
    <h2>Le Mie Competenze</h2>

    <article>
      <h3>💻 Sviluppo Web</h3>
      <ul>
        <li><strong>HTML5</strong> - Markup semantico e accessibile</li>
        <li><strong>CSS3</strong> - Styling e responsive design (in corso)</li>
        <li><strong>JavaScript</strong> - Interattività (prossimamente)</li>
      </ul>
    </article>

    <article>
      <h3>🎨 Design & Creatività</h3>
      <ul>
        <li>User Experience (UX)</li>
        <li>User Interface (UI)</li>
        <li>Prototipazione</li>
      </ul>
    </article>

    <article>
      <h3>🛠️ Strumenti</h3>
      <ul>
        <li>Visual Studio Code</li>
        <li>Git & GitHub</li>
        <li>Browser DevTools</li>
      </ul>
    </article>
  </section>

  <!-- Sezione Progetti Recenti (anteprima) -->
  <section>
    <h2>Progetti Recenti</h2>
    <p>Ecco alcuni dei miei lavori più recenti:</p>

    <div>
      <article>
        <figure>
          <img src="images/project1.jpg" alt="Progetto 1 - Sito Web Personale" width="300" height="200">
          <figcaption>Sito Web Personale</figcaption>
        </figure>
        <h3>Portfolio Personale</h3>
        <p>Il mio primo sito web completo realizzato con HTML5 semantico.</p>
        <p><a href="projects.html#progetto1">Scopri di più →</a></p>
      </article>

      <article>
        <figure>
          <img src="images/project2.jpg" alt="Progetto 2 - Blog" width="300" height="200">
          <figcaption>Blog Personale</figcaption>
        </figure>
        <h3>Blog di Tecnologia</h3>
        <p>Un blog dove condivido il mio percorso di apprendimento.</p>
        <p><a href="projects.html#progetto2">Scopri di più →</a></p>
      </article>

      <article>
        <figure>
          <img src="images/project3.jpg" alt="Progetto 3 - Landing Page" width="300" height="200">
          <figcaption>Landing Page</figcaption>
        </figure>
        <h3>Landing Page Prodotto</h3>
        <p>Una pagina di atterraggio per un prodotto immaginario.</p>
        <p><a href="projects.html#progetto3">Scopri di più →</a></p>
      </article>
    </div>

    <p>
      <a href="projects.html">Vedi tutti i progetti →</a>
    </p>
  </section>

  <!-- Sezione Call-to-Action -->
  <section>
    <h2>Lavoriamo Insieme!</h2>
    <p>
      Hai un progetto in mente? Sono sempre aperto a nuove opportunità
      e collaborazioni interessanti.
    </p>
    <p>
      <a href="contact.html">Contattami Ora →</a>
    </p>
  </section>
</main>`}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Personalizzazione della Homepage</h2>

        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 my-6">
          <h3 className="font-bold text-gray-800 mb-2">✏️ Rendi il Sito Veramente TUO!</h3>
          <p className="text-gray-700 mb-3">
            Ora che hai la struttura, è il momento di personalizzare! Ecco cosa fare:
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>1. Sostituisci [Tuo Nome]</strong> ovunque appaia con il tuo vero nome
            </li>
            <li>
              <strong>2. Modifica la presentazione</strong> nella sezione Hero con la TUA storia
            </li>
            <li>
              <strong>3. Adatta le competenze</strong> alla tua realtà (cosa sai fare davvero?)
            </li>
            <li>
              <strong>4. Sostituisci le immagini</strong> con foto tue o immagini che ti rappresentano
            </li>
            <li>
              <strong>5. Cambia i link social</strong> con i tuoi profili reali
            </li>
            <li>
              <strong>6. Aggiungi la tua email</strong> e informazioni di contatto vere
            </li>
          </ul>
        </div>

        <Exercise
          title="Crea la Tua Homepage"
          difficulty="media"
          steps={[
            'Apri index.html in VS Code',
            'Incolla il template base completo',
            'Sostituisci [Tuo Nome] con il tuo nome reale in TUTTI i punti',
            'Personalizza il sottotitolo (es. "Studente & Aspirante Developer")',
            'Modifica la sezione Hero con una presentazione che ti rappresenta',
            'Aggiorna la lista competenze con quello che SAI fare realmente',
            'Collega le immagini corrette dalla cartella images/',
            'Aggiorna i link social con i tuoi profili (o rimuovili se non li hai)',
            'Controlla che tutti i link interni funzionino (about.html, projects.html, contact.html)',
            'Salva il file e aprilo nel browser con Live Server',
            'Naviga la pagina e verifica che tutto appaia corretto',
          ]}
        />

        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 my-6">
          <h3 className="font-bold text-gray-800 mb-2">⚠️ Checklist Pre-Controllo</h3>
          <p className="text-gray-700 mb-2">
            Prima di procedere, verifica questi punti critici:
          </p>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li>✓ Tutti i link nel menu funzionano (anche se le altre pagine sono vuote)</li>
            <li>✓ Le immagini si vedono correttamente (controlla i percorsi!)</li>
            <li>✓ Non ci sono errori nel codice (controlla la console del browser)</li>
            <li>✓ Hai sostituito TUTTI i placeholder [Tuo Nome]</li>
            <li>✓ Il <code className="bg-gray-100 px-2 py-1 rounded">{'<title>'}</code> è personalizzato</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Ottimizzazioni SEO di Base</h2>

        <p className="text-gray-700 mb-4">
          Già che ci sei, aggiungiamo alcune ottimizzazioni SEO (Search Engine Optimization) di base
          per aiutare Google a indicizzare meglio il tuo sito!
        </p>

        <CodeExample
          title="Meta tag SEO da aggiungere nel <head>"
          code={`<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- SEO Meta Tags -->
  <meta name="description" content="Portfolio di [Tuo Nome], web developer specializzato in HTML, CSS e JavaScript. Scopri i miei progetti e contattami per collaborazioni.">
  <meta name="keywords" content="web developer, HTML, CSS, JavaScript, portfolio, [Tuo Nome]">
  <meta name="author" content="[Tuo Nome]">

  <!-- Open Graph (per social media) -->
  <meta property="og:title" content="[Tuo Nome] - Web Developer Portfolio">
  <meta property="og:description" content="Scopri il portfolio di [Tuo Nome], web developer appassionato.">
  <meta property="og:image" content="images/profile.jpg">
  <meta property="og:url" content="https://tuosito.com">
  <meta property="og:type" content="website">

  <title>Home - [Tuo Nome] | Web Developer Portfolio</title>
</head>`}
        />

        <Checklist
          items={[
            'Ho creato la struttura di cartelle del progetto (mio-portfolio/)',
            'Ho creato tutti e 4 i file HTML (index, about, projects, contact)',
            'Ho creato la cartella images/ con le immagini',
            'Ho implementato il template base con header, nav, footer consistenti',
            'Ho creato la homepage completa (index.html) con tutte le sezioni',
            'Ho personalizzato il contenuto con il mio nome e le mie informazioni',
            'Ho collegato correttamente tutte le immagini',
            'Ho testato che tutti i link nel menu funzionino',
            'Ho aggiunto i meta tag SEO nel <head>',
            'Ho aperto il sito nel browser e verificato che appaia correttamente',
            'Sono pronto per la Parte 2 del progetto! 🚀',
          ]}
        />

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold text-gray-800 mb-2">🎯 Prossimo Step: Pagine Interne</h3>
          <p className="text-gray-700 mb-3">
            Ottimo lavoro! Hai completato la struttura base e la homepage del tuo portfolio.
            Nella <strong>Lezione 17</strong> creeremo le pagine interne: Chi Sono e Progetti,
            con gallerie, timeline e molto altro!
          </p>
          <a
            href="/moduli/modulo-1-html/lezione-17-mini-progetto-parte-2"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition mt-4"
          >
            Continua con Parte 2 →
          </a>
        </div>
      </section>
    </LessonLayout>
  );
}
