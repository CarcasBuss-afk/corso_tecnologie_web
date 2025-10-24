import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Checklist from '@/components/didattica/Checklist';
import { getLezioniByModuloSlug } from '@/lib/moduli';

export default function Lezione17() {
  const lezioni = getLezioniByModuloSlug('modulo-1-html');

  return (
    <LessonLayout
      moduloSlug="modulo-1-html"
      moduloTitolo="Modulo 1: HTML"
      lezioni={lezioni}
      lezioneSlug="lezione-17-mini-progetto-parte-2"
      lezioneTitolo="Mini-Progetto Parte 2: Chi Sono e Progetti"
    >
      <LessonHeader
        numero={17}
        titolo="Mini-Progetto Parte 2: Chi Sono e Progetti"
        durata="2 ore"
        difficolta="media"
        obiettivi={[
          'Creare una pagina "Chi Sono" completa e coinvolgente',
          'Implementare una timeline formativa',
          'Costruire una galleria progetti professionale',
          'Usare tabelle per comparazioni e skills',
        ]}
      />

      <section className="prose max-w-none">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border-l-4 border-purple-500 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">📖 Benvenuto nella Parte 2!</h2>
          <p className="text-gray-700 mb-3">
            Hai creato una homepage fantastica! Ora è il momento di raccontare la tua storia
            e mostrare i tuoi lavori migliori.
          </p>
          <p className="text-gray-700">
            In questa lezione completerai le pagine <strong>Chi Sono</strong> e <strong>Progetti</strong>,
            aggiungendo personalità e professionalità al tuo portfolio!
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Pagina 1: Chi Sono (about.html)</h2>

        <p className="text-gray-700 mb-4">
          La pagina "Chi Sono" è dove racconti la tua storia, mostri il tuo percorso e fai conoscere
          meglio chi sei. Deve essere personale, autentica e coinvolgente!
        </p>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 my-6">
          <h3 className="font-bold text-gray-800 mb-2">🎯 Obiettivi della Pagina Chi Sono</h3>
          <ul className="text-gray-700 space-y-1">
            <li>✓ Presentarti in modo autentico e professionale</li>
            <li>✓ Mostrare il tuo percorso formativo e professionale</li>
            <li>✓ Evidenziare le tue competenze tecniche</li>
            <li>✓ Far trasparire la tua personalità</li>
            <li>✓ Creare connessione con chi visita</li>
          </ul>
        </div>

        <CodeExample
          title="Struttura Completa about.html - Sezione <main>"
          code={`<main>
  <!-- Sezione Introduzione con Foto -->
  <section>
    <h2>Ciao, sono [Tuo Nome]!</h2>

    <article>
      <figure>
        <img src="images/profile.jpg" alt="Foto profilo di [Tuo Nome]" width="300" height="300">
        <figcaption>Web Developer & Studente</figcaption>
      </figure>

      <div>
        <p>
          Benvenuto nella mia pagina! Sono un <strong>appassionato di tecnologia</strong>
          con un grande interesse per lo sviluppo web. Ho iniziato questo percorso
          perché credo che il web sia il futuro e voglio esserne parte attiva.
        </p>

        <p>
          Quando non programmo, mi piace [inserisci i tuoi hobby: leggere, suonare,
          giocare ai videogiochi, fare sport, ecc.]. Credo che le migliori idee
          nascano dall'unione di passioni diverse!
        </p>

        <p>
          <strong>Cosa mi motiva:</strong> Amo la sensazione di creare qualcosa
          da zero e vederlo prendere vita nel browser. Ogni progetto è una sfida
          che mi spinge a migliorare sempre di più.
        </p>
      </div>
    </article>
  </section>

  <!-- Sezione Timeline Formazione -->
  <section>
    <h2>📚 Il Mio Percorso</h2>

    <article>
      <h3>
        <time datetime="2025">2025</time> - Inizio del Viaggio Web
      </h3>
      <p>
        Ho iniziato a studiare HTML, CSS e JavaScript. Il primo "Hello World"
        nel browser è stata una rivelazione: potevo creare qualcosa di visibile
        e interattivo!
      </p>
      <details>
        <summary>Scopri cosa ho imparato</summary>
        <ul>
          <li>HTML5 semantico e accessibile</li>
          <li>CSS per layout e design responsive</li>
          <li>JavaScript per interattività</li>
          <li>Git e GitHub per version control</li>
        </ul>
      </details>
    </article>

    <article>
      <h3>
        <time datetime="2024">2024</time> - Formazione Scolastica
      </h3>
      <p>
        [Inserisci qui il tuo percorso scolastico o universitario: scuola,
        diploma, università, corso di studi, ecc.]
      </p>
    </article>

    <article>
      <h3>
        <time datetime="2023">2023</time> - Prime Esperienze
      </h3>
      <p>
        [Racconta le tue prime esperienze lavorative, progetti scolastici,
        volontariato, o qualsiasi cosa rilevante per la tua storia]
      </p>
    </article>
  </section>

  <!-- Sezione Competenze Tecniche con Tabella -->
  <section>
    <h2>💻 Competenze Tecniche</h2>

    <table>
      <thead>
        <tr>
          <th>Tecnologia</th>
          <th>Livello</th>
          <th>Esperienza</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>HTML5</strong></td>
          <td>⭐⭐⭐⭐⭐</td>
          <td>6 mesi - Uso quotidiano</td>
        </tr>
        <tr>
          <td><strong>CSS3</strong></td>
          <td>⭐⭐⭐⭐</td>
          <td>4 mesi - In corso di apprendimento</td>
        </tr>
        <tr>
          <td><strong>JavaScript</strong></td>
          <td>⭐⭐⭐</td>
          <td>2 mesi - Livello base</td>
        </tr>
        <tr>
          <td><strong>Git & GitHub</strong></td>
          <td>⭐⭐⭐</td>
          <td>3 mesi - Version control</td>
        </tr>
        <tr>
          <td><strong>VS Code</strong></td>
          <td>⭐⭐⭐⭐</td>
          <td>6 mesi - Editor principale</td>
        </tr>
      </tbody>
    </table>
  </section>

  <!-- Sezione Soft Skills -->
  <section>
    <h2>🌟 Soft Skills</h2>

    <div>
      <article>
        <h3>💡 Problem Solving</h3>
        <p>
          Mi piace affrontare problemi complessi e trovare soluzioni creative.
          Il debugging è diventato una delle mie attività preferite!
        </p>
      </article>

      <article>
        <h3>🎯 Determinazione</h3>
        <p>
          Non mi arrendo facilmente. Quando un bug resiste, diventa una sfida
          personale che non posso lasciare irrisolta.
        </p>
      </article>

      <article>
        <h3>📚 Apprendimento Continuo</h3>
        <p>
          Il mondo del web è in costante evoluzione e amo tenermi aggiornato.
          Ogni giorno imparo qualcosa di nuovo!
        </p>
      </article>

      <article>
        <h3>🤝 Lavoro di Squadra</h3>
        <p>
          Credo nella collaborazione e nello scambio di conoscenze. Le migliori
          soluzioni nascono dal confronto!
        </p>
      </article>
    </div>
  </section>

  <!-- Sezione Interessi Personali -->
  <section>
    <h2>🎨 Oltre al Codice</h2>

    <p>Quando non sono davanti al computer, mi dedico a:</p>

    <ul>
      <li>
        <strong>📚 Lettura:</strong> Amo i libri di [genere preferito: fantasy,
        sci-fi, thriller, ecc.]. Lettura corrente: [titolo libro].
      </li>
      <li>
        <strong>🎮 Gaming:</strong> Appassionato di [tipo giochi]. Gioco preferito: [nome].
      </li>
      <li>
        <strong>🎵 Musica:</strong> Ascolto principalmente [genere musicale].
        La musica mi aiuta a concentrarmi mentre codifico!
      </li>
      <li>
        <strong>⚽ Sport:</strong> Pratico [sport preferito] e seguo [squadra/atleta].
      </li>
    </ul>

    <p>
      <em>
        Credo che gli interessi diversi arricchiscano la creatività e portino
        prospettive nuove anche nel lavoro!
      </em>
    </p>
  </section>

  <!-- Call to Action -->
  <section>
    <h2>Vuoi Collaborare?</h2>
    <p>
      Sono sempre aperto a nuovi progetti interessanti e opportunità di apprendimento!
    </p>
    <p>
      <a href="contact.html">Contattami →</a>
      <a href="projects.html">Vedi i miei progetti →</a>
    </p>
  </section>
</main>`}
        />

        <Exercise
          title="Crea la Pagina Chi Sono"
          difficulty="media"
          steps={[
            'Apri about.html in VS Code',
            'Incolla il template base (header, nav, footer) da index.html',
            'Cambia il <title> in "Chi Sono - [Tuo Nome]"',
            'Incolla il contenuto <main> della pagina Chi Sono',
            'Personalizza OGNI sezione con le TUE informazioni reali',
            'Nella timeline, aggiungi il TUO percorso formativo',
            'Aggiorna la tabella competenze con le tue skills reali',
            'Modifica le soft skills con esempi personali',
            'Personalizza la sezione interessi con i tuoi hobby veri',
            'Assicurati che tutti i link interni funzionino',
            'Salva e visualizza nel browser',
          ]}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Pagina 2: Progetti (projects.html)</h2>

        <p className="text-gray-700 mb-4">
          La pagina Progetti è il tuo portfolio! Qui mostri i tuoi lavori migliori, anche se
          sono progetti di pratica. Ricorda: anche i progetti didattici sono progetti veri!
        </p>

        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 my-6">
          <h3 className="font-bold text-gray-800 mb-2">💡 Suggerimento Pro</h3>
          <p className="text-gray-700 text-sm">
            Non hai ancora progetti "reali"? Nessun problema! Puoi includere:
          </p>
          <ul className="text-gray-700 text-sm space-y-1 mt-2">
            <li>• Gli esercizi del corso (landing page, blog, ricette)</li>
            <li>• Questo stesso portfolio che stai creando!</li>
            <li>• Progetti immaginari ma ben descritti</li>
            <li>• Redesign di siti esistenti (solo come esercizio)</li>
          </ul>
        </div>

        <CodeExample
          title="Struttura Completa projects.html - Sezione <main>"
          code={`<main>
  <!-- Introduzione -->
  <section>
    <h2>I Miei Progetti</h2>
    <p>
      Ecco una selezione dei miei lavori più recenti. Ogni progetto rappresenta
      una sfida superata e nuove competenze acquisite!
    </p>
  </section>

  <!-- Progetto 1 -->
  <article id="progetto1">
    <header>
      <h3>Portfolio Personale</h3>
      <p>
        <time datetime="2025-01">Gennaio 2025</time> •
        <mark>In Corso</mark>
      </p>
    </header>

    <figure>
      <img src="images/project1.jpg" alt="Screenshot Portfolio Personale" width="600" height="400">
      <figcaption>
        Homepage del mio portfolio personale con design moderno
      </figcaption>
    </figure>

    <section>
      <h4>📋 Descrizione</h4>
      <p>
        Un sito web portfolio completo realizzato da zero con HTML5 semantico.
        Il progetto include homepage, pagina chi sono, galleria progetti e
        form di contatto funzionante.
      </p>
    </section>

    <section>
      <h4>🎯 Obiettivi</h4>
      <ul>
        <li>Creare una presenza online professionale</li>
        <li>Mettere in pratica HTML5 semantico</li>
        <li>Implementare best practices SEO</li>
        <li>Garantire accessibilità</li>
      </ul>
    </section>

    <section>
      <h4>💻 Tecnologie Utilizzate</h4>
      <table>
        <thead>
          <tr>
            <th>Tecnologia</th>
            <th>Utilizzo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>HTML5</strong></td>
            <td>Markup semantico e struttura</td>
          </tr>
          <tr>
            <td><strong>CSS3</strong></td>
            <td>Styling e layout responsive</td>
          </tr>
          <tr>
            <td><strong>Git</strong></td>
            <td>Version control</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h4>✨ Caratteristiche Principali</h4>
      <ul>
        <li><strong>Design Responsive:</strong> Ottimizzato per desktop, tablet e mobile</li>
        <li><strong>SEO Friendly:</strong> Meta tag e struttura ottimizzata per i motori di ricerca</li>
        <li><strong>Accessibile:</strong> Conforme alle linee guida WCAG</li>
        <li><strong>Performance:</strong> Caricamento veloce e ottimizzato</li>
      </ul>
    </section>

    <section>
      <h4>📚 Cosa Ho Imparato</h4>
      <p>
        Questo progetto mi ha insegnato l'importanza della pianificazione.
        Ho imparato a strutturare un sito multi-pagina mantenendo consistenza
        nel design e nella navigazione. Il markup semantico è diventato una
        seconda natura!
      </p>
    </section>

    <footer>
      <p>
        <a href="#" target="_blank">Vedi il Progetto Live →</a>
        <a href="#" target="_blank">Codice su GitHub →</a>
      </p>
    </footer>
  </article>

  <!-- Progetto 2 -->
  <article id="progetto2">
    <header>
      <h3>Blog di Tecnologia</h3>
      <p>
        <time datetime="2024-12">Dicembre 2024</time> •
        <mark>Completato</mark>
      </p>
    </header>

    <figure>
      <img src="images/project2.jpg" alt="Screenshot Blog Tecnologia" width="600" height="400">
      <figcaption>
        Homepage del blog con articoli recenti
      </figcaption>
    </figure>

    <section>
      <h4>📋 Descrizione</h4>
      <p>
        Un blog personale dove condivido il mio percorso di apprendimento
        nel mondo dello sviluppo web. Include sistema di articoli, categorie,
        commenti e form di iscrizione newsletter.
      </p>
    </section>

    <section>
      <h4>🎯 Obiettivi</h4>
      <ul>
        <li>Documentare il mio percorso di apprendimento</li>
        <li>Praticare la scrittura tecnica</li>
        <li>Creare una community di lettori</li>
        <li>Implementare form complessi</li>
      </ul>
    </section>

    <section>
      <h4>💻 Tecnologie Utilizzate</h4>
      <ul>
        <li><strong>HTML5:</strong> Struttura semantica con article, section, aside</li>
        <li><strong>Form HTML5:</strong> Commenti e newsletter con validazione</li>
        <li><strong>Figure & Time:</strong> Gestione immagini e date</li>
      </ul>
    </section>

    <section>
      <h4>✨ Caratteristiche Principali</h4>
      <details>
        <summary>📝 Sistema Articoli</summary>
        <p>
          Ogni articolo è strutturato con header, contenuto suddiviso in sezioni,
          immagini con didascalie e metadata (autore, data, categoria).
        </p>
      </details>

      <details>
        <summary>💬 Sezione Commenti</summary>
        <p>
          Sistema di commenti con form di validazione e visualizzazione commenti
          esistenti in ordine cronologico inverso.
        </p>
      </details>

      <details>
        <summary>📱 Layout Responsive</summary>
        <p>
          Sidebar che si riposiziona su mobile, menu hamburger, immagini adattive.
        </p>
      </details>
    </section>

    <section>
      <h4>📚 Cosa Ho Imparato</h4>
      <p>
        Ho acquisito padronanza dei form HTML5 e della validazione client-side.
        Ho imparato a strutturare contenuti editoriali in modo semantico e
        accessibile. La gestione dei commenti mi ha fatto capire l'importanza
        della UX nei flussi di interazione.
      </p>
    </section>

    <footer>
      <p>
        <a href="#" target="_blank">Vedi il Progetto Live →</a>
        <a href="#" target="_blank">Codice su GitHub →</a>
      </p>
    </footer>
  </article>

  <!-- Progetto 3 -->
  <article id="progetto3">
    <header>
      <h3>Landing Page E-commerce</h3>
      <p>
        <time datetime="2024-11">Novembre 2024</time> •
        <mark>Completato</mark>
      </p>
    </header>

    <figure>
      <img src="images/project3.jpg" alt="Screenshot Landing Page" width="600" height="400">
      <figcaption>
        Landing page con sezione hero e call-to-action
      </figcaption>
    </figure>

    <section>
      <h4>📋 Descrizione</h4>
      <p>
        Una landing page per un prodotto immaginario con l'obiettivo di massimizzare
        le conversioni. Include hero section, features, prezzi, testimonianze e FAQ.
      </p>
    </section>

    <section>
      <h4>💻 Tecnologie e Struttura</h4>
      <ul>
        <li>Hero section con video embedded</li>
        <li>Tabella comparativa prezzi (3 piani)</li>
        <li>FAQ con details/summary</li>
        <li>Form di contatto multi-step</li>
        <li>Testimonianze con figure</li>
      </ul>
    </section>

    <section>
      <h4>📚 Cosa Ho Imparato</h4>
      <p>
        Ho compreso i principi del marketing applicati al web design. L'uso
        strategico di heading, call-to-action e social proof. L'importanza
        della gerarchia visiva per guidare l'utente alla conversione.
      </p>
    </section>

    <footer>
      <p>
        <a href="#" target="_blank">Vedi il Progetto Live →</a>
        <a href="#" target="_blank">Codice su GitHub →</a>
      </p>
    </footer>
  </article>

  <!-- Call to Action Finale -->
  <section>
    <h2>Vuoi Vedere Altri Progetti?</h2>
    <p>
      Questi sono solo alcuni esempi. Sto continuamente lavorando su nuovi
      progetti e sfide!
    </p>
    <p>
      <a href="https://github.com/tuousername" target="_blank">
        Seguimi su GitHub per vedere tutto il mio lavoro →
      </a>
    </p>
    <p>
      <a href="contact.html">
        Hai un progetto in mente? Parliamone! →
      </a>
    </p>
  </section>
</main>`}
        />

        <Exercise
          title="Crea la Pagina Progetti"
          difficulty="media"
          steps={[
            'Apri projects.html in VS Code',
            'Incolla il template base (header, nav, footer)',
            'Cambia il <title> in "Progetti - [Tuo Nome]"',
            'Incolla il contenuto <main> della pagina Progetti',
            'Personalizza i 3 progetti con TUOI progetti reali o didattici',
            'Aggiungi screenshot reali nella cartella images/',
            'Aggiorna date, tecnologie, obiettivi per ogni progetto',
            'Aggiungi link reali a GitHub (se hai i progetti online)',
            'Usa <details> per espandere informazioni extra',
            'Assicurati che gli ID (progetto1, progetto2, progetto3) siano corretti',
            'Testa i link dalla homepage che puntano a #progetto1, #progetto2, #progetto3',
            'Salva e visualizza nel browser',
          ]}
        />

        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 my-6">
          <h3 className="font-bold text-gray-800 mb-2">💡 Idee per Progetti da Aggiungere</h3>
          <p className="text-gray-700 mb-3">
            Se non hai 3 progetti pronti, puoi includere:
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>1. Questo Portfolio:</strong> È un progetto a tutti gli effetti!
              Descrivi le sfide affrontate, le tecnologie usate, cosa hai imparato.
            </li>
            <li>
              <strong>2. Esercizi del Corso:</strong> La landing page, il blog, la ricetta.
              Trasformali in progetti "veri" aggiungendo descrizioni professionali.
            </li>
            <li>
              <strong>3. Redesign Concettuale:</strong> Prendi un sito famoso e immagina
              come lo miglioreresti. Descrivi le modifiche (anche senza implementarle).
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Collegamento tra le Pagine</h2>

        <p className="text-gray-700 mb-4">
          Ora che hai 3 pagine complete (Home, Chi Sono, Progetti), assicurati che siano
          ben collegate tra loro!
        </p>

        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 my-6">
          <h3 className="font-bold text-gray-800 mb-2">✅ Checklist Collegamenti</h3>
          <ul className="text-gray-700 space-y-2 text-sm">
            <li>
              ✓ Il menu di navigazione funziona da TUTTE e 3 le pagine
            </li>
            <li>
              ✓ Dalla homepage puoi cliccare "Scopri di più" e andare su about.html
            </li>
            <li>
              ✓ Dalla homepage puoi cliccare "Scopri di più →" sui progetti e andare su projects.html#progetto1
            </li>
            <li>
              ✓ Da about.html puoi cliccare "Vedi i miei progetti" e andare su projects.html
            </li>
            <li>
              ✓ Da projects.html puoi tornare alla home cliccando sul logo/nome
            </li>
            <li>
              ✓ Il footer è identico in tutte e 3 le pagine
            </li>
          </ul>
        </div>

        <Checklist
          items={[
            'Ho creato la pagina Chi Sono (about.html) completa',
            'Ho personalizzato la timeline formativa con la mia storia',
            'Ho aggiunto la tabella competenze con le mie skills reali',
            'Ho incluso le soft skills con esempi personali',
            'Ho aggiunto i miei interessi e hobby',
            'Ho creato la pagina Progetti (projects.html)',
            'Ho descritto almeno 3 progetti con dettagli completi',
            'Ho aggiunto screenshot dei progetti nella cartella images/',
            'Ho usato tabelle per comparazioni tecnologie',
            'Ho implementato <details> per informazioni extra',
            'Tutti i link interni tra le pagine funzionano correttamente',
            'Gli ID dei progetti corrispondono ai link dalla homepage',
            'Ho testato la navigazione completa del sito',
            'Sono pronto per l\'ultima parte del progetto! 🚀',
          ]}
        />

        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
          <h3 className="text-xl font-bold text-gray-800 mb-2">🎯 Prossimo Step: Pagina Contatti</h3>
          <p className="text-gray-700 mb-3">
            Fantastico lavoro! Hai completato le pagine principali del tuo portfolio.
            Nella <strong>Lezione 18 (finale!)</strong> completeremo la pagina Contatti
            con un form professionale e daremo gli ultimi ritocchi al progetto!
          </p>
          <a
            href="/moduli/modulo-1-html/lezione-18-mini-progetto-parte-3"
            className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition mt-4"
          >
            Completa il Progetto - Parte 3 →
          </a>
        </div>
      </section>
    </LessonLayout>
  );
}
