import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import { getLezioniByModuloSlug } from '@/lib/moduli';

export default function Lezione15() {
  const lezioni = getLezioniByModuloSlug('modulo-1-html');

  return (
    <LessonLayout
      moduloSlug="modulo-1-html"
      moduloTitolo="Modulo 1: HTML"
      lezioni={lezioni}
      lezioneSlug="lezione-15-consolidamento"
      lezioneTitolo="Consolidamento e Pratica HTML"
    >
      <LessonHeader
        numero={15}
        titolo="Consolidamento e Pratica HTML"
        durata="2 ore"
        difficolta="media"
        obiettivi={[
          'Ripassare tutti i concetti HTML appresi',
          'Mettere in pratica le conoscenze acquisite',
          'Creare progetti completi e realistici',
          'Prepararsi per il mini-progetto finale',
        ]}
      />

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recap: Cosa Hai Imparato Finora</h2>

        <p className="text-gray-700 mb-4">
          Congratulazioni! Hai completato 14 lezioni di HTML e hai imparato tantissimo!
          Prima di passare al mini-progetto finale, facciamo un ripasso veloce di tutto quello che sai fare.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <h3 className="font-bold text-gray-800 mb-2">📝 Testo e Struttura</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ Tag di base (html, head, body)</li>
              <li>✓ Titoli (h1-h6) e gerarchia</li>
              <li>✓ Paragrafi e interruzioni</li>
              <li>✓ Formattazione testo (strong, em, mark...)</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <h3 className="font-bold text-gray-800 mb-2">🔗 Link e Media</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ Link interni ed esterni</li>
              <li>✓ Immagini con alt e dimensioni</li>
              <li>✓ Audio e video embedded</li>
              <li>✓ Attributi target e download</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h3 className="font-bold text-gray-800 mb-2">📋 Liste e Tabelle</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ Liste ordinate e non ordinate</li>
              <li>✓ Liste annidate</li>
              <li>✓ Tabelle complete (thead, tbody, tfoot)</li>
              <li>✓ Celle unite (colspan, rowspan)</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <h3 className="font-bold text-gray-800 mb-2">📝 Form e Input</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ Input di tutti i tipi</li>
              <li>✓ Textarea e select</li>
              <li>✓ Checkbox e radio button</li>
              <li>✓ Validazione HTML5</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <h3 className="font-bold text-gray-800 mb-2">📦 Contenitori</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ Div e span</li>
              <li>✓ Differenza block vs inline</li>
              <li>✓ Quando usare div vs span</li>
            </ul>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
            <h3 className="font-bold text-gray-800 mb-2">🏗️ HTML Semantico</h3>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ header, nav, main, footer</li>
              <li>✓ article, section, aside</li>
              <li>✓ Figure, time, mark</li>
              <li>✓ Benefici SEO e accessibilità</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Quiz Rapido di Auto-Valutazione</h2>

        <p className="text-gray-700 mb-4">
          Rispondi mentalmente a queste domande per capire cosa hai capito bene e cosa ripassare:
        </p>

        <div className="space-y-4 my-6">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500 shadow-sm">
            <p className="text-gray-800 font-semibold mb-2">1. Qual è la differenza tra &lt;strong&gt; e &lt;b&gt;?</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600 text-sm hover:text-blue-700">
                📖 Mostra risposta
              </summary>
              <p className="text-gray-700 text-sm mt-2 pl-4">
                <strong>&lt;strong&gt;</strong> è semantico e indica importanza (aiuta SEO e screen reader),
                mentre <strong>&lt;b&gt;</strong> è solo visivo (grassetto senza significato).
              </p>
            </details>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500 shadow-sm">
            <p className="text-gray-800 font-semibold mb-2">2. Quando devo usare &lt;article&gt; e quando &lt;section&gt;?</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-purple-600 text-sm hover:text-purple-700">
                📖 Mostra risposta
              </summary>
              <p className="text-gray-700 text-sm mt-2 pl-4">
                <strong>&lt;article&gt;</strong> per contenuti indipendenti che hanno senso da soli (blog post, notizia).
                <strong>&lt;section&gt;</strong> per raggruppare contenuti per tema all'interno di una pagina.
              </p>
            </details>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500 shadow-sm">
            <p className="text-gray-800 font-semibold mb-2">3. Qual è l'attributo più importante per le immagini?</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-green-600 text-sm hover:text-green-700">
                📖 Mostra risposta
              </summary>
              <p className="text-gray-700 text-sm mt-2 pl-4">
                L'attributo <strong>alt</strong>! È fondamentale per l'accessibilità (screen reader)
                e per il SEO. Descrive l'immagine quando non può essere caricata.
              </p>
            </details>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500 shadow-sm">
            <p className="text-gray-800 font-semibold mb-2">4. Perché usare &lt;label&gt; nei form?</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-yellow-600 text-sm hover:text-yellow-700">
                📖 Mostra risposta
              </summary>
              <p className="text-gray-700 text-sm mt-2 pl-4">
                Il <strong>&lt;label&gt;</strong> associa un'etichetta a un input, rendendo il form più accessibile
                e permettendo di cliccare sul testo per selezionare l'input collegato (migliore UX).
              </p>
            </details>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-red-500 shadow-sm">
            <p className="text-gray-800 font-semibold mb-2">5. Quando usare una lista ordinata vs non ordinata?</p>
            <details className="mt-2">
              <summary className="cursor-pointer text-red-600 text-sm hover:text-red-700">
                📖 Mostra risposta
              </summary>
              <p className="text-gray-700 text-sm mt-2 pl-4">
                <strong>&lt;ol&gt;</strong> (ordinata) quando l'ordine è importante (passi di una ricetta, classifica).
                <strong>&lt;ul&gt;</strong> (non ordinata) quando l'ordine non conta (lista spesa, caratteristiche prodotto).
              </p>
            </details>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Esercizio 1: Pagina Profilo Completa</h2>

        <p className="text-gray-700 mb-4">
          Crea una pagina profilo personale che metta insieme TUTTO quello che hai imparato!
        </p>

        <Exercise
          title="Profilo Personale All-in-One"
          difficulty="media"
          steps={[
            'Crea un nuovo file "profilo-completo.html"',
            'Usa la struttura HTML5 completa (<!DOCTYPE>, html, head, body)',
            'Nel <head>: aggiungi title, charset UTF-8, meta viewport',
            'Crea un <header> semantico con il tuo nome in <h1> e un menu <nav>',
            'Nel <main>: crea almeno 3 <section> diverse',
            'Sezione 1 "Chi sono": paragrafi, strong/em, immagine profilo con <figure>',
            'Sezione 2 "Competenze": lista non ordinata con le tue skills',
            'Sezione 3 "Progetti": usa <article> per ogni progetto (titolo, descrizione, immagine)',
            'Sezione 4 "Contatti": crea un form con nome, email, messaggio',
            'Aggiungi un <aside> con link social',
            'Concludi con un <footer> con copyright e info',
            'BONUS: Usa <time> per le date, <mark> per evidenziare, <details> per info extra',
          ]}
        />

        <CodeExample
          title="Struttura base da cui partire"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Il Mio Profilo - [Tuo Nome]</title>
</head>
<body>
  <header>
    <h1>Benvenuto nel profilo di [Tuo Nome]</h1>
    <nav>
      <ul>
        <li><a href="#chi-sono">Chi sono</a></li>
        <li><a href="#competenze">Competenze</a></li>
        <li><a href="#progetti">Progetti</a></li>
        <li><a href="#contatti">Contatti</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="chi-sono">
      <h2>Chi sono</h2>
      <!-- Il tuo contenuto qui -->
    </section>

    <!-- Altre sezioni... -->
  </main>

  <aside>
    <!-- Contenuto correlato -->
  </aside>

  <footer>
    <p>&copy; 2025 [Tuo Nome]. Tutti i diritti riservati.</p>
  </footer>
</body>
</html>`}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Esercizio 2: Blog Post con Commenti</h2>

        <Exercise
          title="Articolo di Blog Completo"
          difficulty="media"
          steps={[
            'Crea "blog-post.html"',
            'Header con logo/titolo blog e menu navigazione',
            'Main con un <article> per il post principale',
            'Dentro l\'article: titolo, data pubblicazione con <time>, autore',
            'Dividi il contenuto in più <section> (introduzione, corpo, conclusione)',
            'Aggiungi almeno 2 immagini con <figure> e <figcaption>',
            'Crea una lista ordinata per "Punti chiave dell\'articolo"',
            'Usa una tabella per confrontare 2-3 elementi',
            'Sotto l\'article: sezione commenti con <section id="commenti">',
            'Ogni commento è un <article> con nome, data, testo',
            'Form per aggiungere un nuovo commento (nome, email, messaggio)',
            'Aside con "Articoli correlati" (lista con link)',
            'Footer con info autore e link social',
          ]}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Esercizio 3: Landing Page Prodotto</h2>

        <Exercise
          title="Pagina Vendita Prodotto"
          difficulty="media"
          steps={[
            'Crea "landing-page.html" per vendere un prodotto (inventane uno!)',
            'Header con logo e menu sticky (Home, Caratteristiche, Prezzi, FAQ)',
            'Sezione Hero: titolo accattivante, sottotitolo, immagine prodotto, bottone "Acquista ora"',
            'Sezione Caratteristiche: usa <section> con 3-4 <article> per ogni feature',
            'Ogni feature: icona (emoji), titolo, descrizione breve',
            'Sezione Video: embed di un video (anche fittizio)',
            'Sezione Prezzi: tabella con 3 piani (Base, Pro, Premium)',
            'Sezione Testimonianze: 3 <article> con foto, nome, recensione',
            'Sezione FAQ: usa <details> e <summary> per domande frequenti',
            'Sezione Contatti: form con nome, email, messaggio, checkbox privacy',
            'Footer con link legali, social, copyright',
          ]}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Errori Comuni da Evitare</h2>

        <div className="space-y-4 my-6">
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <h3 className="font-bold text-gray-800 mb-2">❌ Dimenticare il DOCTYPE</h3>
            <p className="text-gray-700 text-sm mb-2">
              Inizia SEMPRE con <code className="bg-gray-100 px-2 py-1 rounded">{'<!DOCTYPE html>'}</code>
            </p>
            <p className="text-gray-700 text-sm">
              Senza DOCTYPE, il browser potrebbe entrare in "quirks mode" e comportarsi in modo strano.
            </p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <h3 className="font-bold text-gray-800 mb-2">❌ Dimenticare l'attributo alt nelle immagini</h3>
            <p className="text-gray-700 text-sm">
              Ogni <code className="bg-gray-100 px-2 py-1 rounded">{'<img>'}</code> DEVE avere un alt descrittivo.
              È fondamentale per accessibilità e SEO!
            </p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <h3 className="font-bold text-gray-800 mb-2">❌ Usare div per tutto</h3>
            <p className="text-gray-700 text-sm">
              Non usare <code className="bg-gray-100 px-2 py-1 rounded">{'<div>'}</code> quando esiste
              un tag semantico più appropriato! Preferisci header, nav, article, section, footer.
            </p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <h3 className="font-bold text-gray-800 mb-2">❌ Non chiudere i tag</h3>
            <p className="text-gray-700 text-sm">
              Ogni tag aperto deve essere chiuso (tranne i self-closing come img, br, input).
              Usa l'indentazione per vedere facilmente la struttura!
            </p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <h3 className="font-bold text-gray-800 mb-2">❌ Usare più di un &lt;h1&gt; per pagina</h3>
            <p className="text-gray-700 text-sm">
              Ogni pagina dovrebbe avere UN SOLO <code className="bg-gray-100 px-2 py-1 rounded">{'<h1>'}</code>.
              È il titolo principale! Poi usa h2, h3, ecc. per sottotitoli.
            </p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <h3 className="font-bold text-gray-800 mb-2">❌ Form senza label</h3>
            <p className="text-gray-700 text-sm">
              Associa sempre un <code className="bg-gray-100 px-2 py-1 rounded">{'<label>'}</code> ai tuoi
              input usando l'attributo for. Migliora accessibilità e usabilità!
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Best Practices HTML</h2>

        <div className="space-y-4 my-6">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h3 className="font-bold text-gray-800 mb-2">✅ Usa l'indentazione consistente</h3>
            <p className="text-gray-700 text-sm">
              Indenta il codice con 2 spazi (o 4, ma sii consistente!). Rende il codice molto più leggibile.
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h3 className="font-bold text-gray-800 mb-2">✅ Usa nomi descrittivi per ID e classi</h3>
            <p className="text-gray-700 text-sm">
              Preferisci <code className="bg-gray-100 px-2 py-1 rounded">id="header-principale"</code> invece
              di <code className="bg-gray-100 px-2 py-1 rounded">id="h1"</code>. Sii chiaro!
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h3 className="font-bold text-gray-800 mb-2">✅ Valida il tuo HTML</h3>
            <p className="text-gray-700 text-sm">
              Usa il validatore W3C (validator.w3.org) per controllare che il tuo HTML sia corretto!
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h3 className="font-bold text-gray-800 mb-2">✅ Commenta le sezioni importanti</h3>
            <p className="text-gray-700 text-sm">
              Usa <code className="bg-gray-100 px-2 py-1 rounded">{'<!-- Commento -->'}</code> per
              spiegare sezioni complesse. Te ne ringrazierai tra qualche mese!
            </p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h3 className="font-bold text-gray-800 mb-2">✅ Pensa mobile-first</h3>
            <p className="text-gray-700 text-sm">
              Anche se non sai ancora il CSS, pensa già a come il tuo contenuto appare su mobile.
              Usa una struttura semplice e lineare!
            </p>
          </div>
        </div>

        <Challenge
          title="Mega-Sfida: Sito Multi-Pagina"
          description="Crea un mini-sito completo con più pagine collegate tra loro!"
          requirements={[
            'Almeno 3 pagine HTML separate: index.html, chi-sono.html, contatti.html',
            'Menu di navigazione UGUALE in tutte le pagine con link relativi',
            'index.html: homepage con benvenuto, sezioni, immagini, video',
            'chi-sono.html: biografia, competenze, formazione (usa tabella per CV)',
            'contatti.html: form completo + mappa embedded (iframe Google Maps o simile)',
            'OGNI pagina deve avere: header, nav, main, footer con struttura semantica',
            'Usa TUTTI i tipi di tag imparati: liste, tabelle, form, immagini, link',
            'Assicurati che tutti i link interni funzionino correttamente',
            'BONUS: aggiungi una 4a pagina "portfolio.html" con i tuoi progetti',
          ]}
          hint="Crea prima la struttura di una pagina, poi duplicala e modifica solo il contenuto del <main>. Così mantieni header e footer consistenti!"
        />

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 my-6">
          <h3 className="font-bold text-gray-800 mb-2">💡 Suggerimento per la Mega-Sfida</h3>
          <p className="text-gray-700 mb-3">
            Organizza il tuo progetto così:
          </p>
          <CodeExample
            code={`mio-sito/
├── index.html
├── chi-sono.html
├── contatti.html
├── portfolio.html
└── immagini/
    ├── foto-profilo.jpg
    ├── progetto1.jpg
    └── progetto2.jpg`}
          />
          <p className="text-gray-700 text-sm mt-3">
            Quando colleghi le immagini, usa percorsi relativi:
            <code className="bg-gray-100 px-2 py-1 rounded ml-2">src="immagini/foto-profilo.jpg"</code>
          </p>
        </div>

        <Checklist
          items={[
            'Ho ripassato tutti i concetti HTML delle 14 lezioni precedenti',
            'Ho completato il quiz di auto-valutazione',
            'Ho creato la pagina profilo completa (Esercizio 1)',
            'Ho creato il blog post con commenti (Esercizio 2)',
            'Ho creato la landing page prodotto (Esercizio 3)',
            'Conosco gli errori comuni da evitare',
            'Applico le best practices HTML',
            'Ho tentato la mega-sfida del sito multi-pagina!',
            'Sono pronto per il mini-progetto finale! 🚀',
          ]}
        />

        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
          <h3 className="text-xl font-bold text-gray-800 mb-2">🎯 Prossimo Step: Mini-Progetto Finale!</h3>
          <p className="text-gray-700 mb-3">
            Complimenti per essere arrivato fin qui! Hai fatto un lavoro fantastico.
            Nelle prossime lezioni (16-18) ti guiderò passo-passo nella creazione del
            <strong> Mini-Progetto Finale del Modulo HTML</strong>: un sito web completo e professionale
            che potrai mostrare con orgoglio!
          </p>
          <div className="bg-white p-4 rounded-lg mt-4">
            <p className="text-gray-700 text-sm mb-2 font-semibold">📋 Cosa creeremo:</p>
            <p className="text-gray-700 text-sm">
              Un <strong>sito portfolio personale professionale</strong> con homepage, pagina chi sono,
              galleria progetti, blog e form contatti. Tutto quello che serve per presentarti al mondo del web!
            </p>
          </div>
          <a
            href="/moduli/modulo-1-html/lezione-16-mini-progetto-parte-1"
            className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition mt-4"
          >
            Inizia il Mini-Progetto →
          </a>
        </div>
      </section>
    </LessonLayout>
  );
}
