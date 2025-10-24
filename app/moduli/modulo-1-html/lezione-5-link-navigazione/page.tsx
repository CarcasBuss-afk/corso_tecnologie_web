import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import LessonPreview from '@/components/didattica/LessonPreview';
import Link from 'next/link';
import { getLezioniByModuloSlug } from '@/lib/moduli';

export default function Lezione5() {
  const lezioni = getLezioniByModuloSlug('modulo-1-html');

  return (
    <LessonLayout
      moduloSlug="modulo-1-html"
      moduloTitolo="Modulo 1: HTML"
      lezioni={lezioni}
      lezioneSlug="lezione-5-link-navigazione"
      lezioneTitolo="Link e Navigazione"
    >
      <LessonHeader
        numero={5}
        titolo="Link e Navigazione"
        durata="2 ore"
        difficolta="media"
        obiettivi={[
          'Usare il tag <a> per creare link',
          'Capire la differenza tra link esterni e interni',
          'Usare anchor link per navigare nella stessa pagina',
          'Creare link email e telefono',
          'Conoscere gli attributi target, title e rel',
        ]}
      />

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Il Cuore del Web: I Link</h2>

        <p className="text-gray-700 mb-4">
          I link (collegamenti ipertestuali) sono ciò che rende il web un <strong>web</strong>!
          Senza link, ogni pagina sarebbe isolata. Grazie ai link puoi saltare da una pagina all'altra,
          da un sito all'altro, proprio come fai ogni giorno quando navighi.
        </p>

        <p className="text-gray-700 mb-4">
          Il tag per creare link è <code className="bg-gray-100 px-2 py-1 rounded">&lt;a&gt;</code>
          (che sta per "anchor", ancora in inglese).
        </p>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 my-6">
          <p className="text-gray-700 font-semibold">💡 Fun Fact:</p>
          <p className="text-gray-700">
            Il primo link della storia del web fu creato da Tim Berners-Lee nel 1991.
            Da allora, Internet è diventato una gigantesca rete di miliardi di link!
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Il Tag &lt;a&gt; e l'Attributo href</h2>

        <p className="text-gray-700 mb-4">
          Per creare un link usi il tag <code className="bg-gray-100 px-2 py-1 rounded">&lt;a&gt;</code>
          con l'attributo <code className="bg-gray-100 px-2 py-1 rounded">href</code> (hypertext reference).
        </p>

        <CodeExample
          title="Struttura base di un link"
          code={`<!-- Struttura: <a href="dove_andare">testo cliccabile</a> -->

<a href="https://www.google.com">Vai su Google</a>

<a href="https://www.wikipedia.org">Enciclopedia Wikipedia</a>

<p>Leggi l'articolo su <a href="https://www.wikipedia.org/wiki/HTML">HTML</a>.</p>`}
        />

        <LessonPreview
          title="🔍 Come appaiono i link:"
          description="I link sono sottolineati e di colore blu (poi viola dopo il click)"
          html={`<a href="https://www.google.com">Vai su Google</a>

<a href="https://www.wikipedia.org">Enciclopedia Wikipedia</a>

<p>Leggi l'articolo su <a href="https://www.wikipedia.org/wiki/HTML">HTML</a>.</p>`}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Link Esterni vs Link Interni</h2>

        <p className="text-gray-700 mb-4">
          Ci sono due tipi principali di link: esterni (verso altri siti) e interni (all'interno del tuo sito).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-400">
            <h3 className="font-bold text-purple-900 mb-2">🌍 Link Esterni</h3>
            <p className="text-gray-700 text-sm mb-2">
              Portano a siti web esterni. Usa URL completi.
            </p>
            <code className="text-xs bg-white px-2 py-1 rounded block mt-2">
              href="https://www.example.com"
            </code>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border-2 border-green-400">
            <h3 className="font-bold text-green-900 mb-2">🏠 Link Interni</h3>
            <p className="text-gray-700 text-sm mb-2">
              Portano ad altre pagine del tuo sito. Usa percorsi relativi.
            </p>
            <code className="text-xs bg-white px-2 py-1 rounded block mt-2">
              href="pagina2.html"
            </code>
          </div>
        </div>

        <CodeExample
          title="Link esterni ed interni"
          code={`<!-- Link ESTERNO (URL completo con https://) -->
<a href="https://www.google.com">Cerca su Google</a>

<!-- Link INTERNO (percorso relativo, stessa cartella) -->
<a href="chi-sono.html">Chi sono</a>
<a href="contatti.html">Contatti</a>

<!-- Link INTERNO (sottocartella) -->
<a href="progetti/portfolio.html">Il mio portfolio</a>

<!-- Link INTERNO (cartella superiore) -->
<a href="../index.html">Torna alla home</a>`}
        />

        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 my-6">
          <p className="text-gray-700 font-semibold">📁 Percorsi Relativi:</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
            <li><code>pagina.html</code> - stessa cartella</li>
            <li><code>cartella/pagina.html</code> - sottocartella</li>
            <li><code>../pagina.html</code> - cartella superiore</li>
            <li><code>../../pagina.html</code> - due cartelle superiori</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Anchor Link: Navigare nella Stessa Pagina</h2>

        <p className="text-gray-700 mb-4">
          Gli anchor link ti permettono di saltare a una sezione specifica della stessa pagina.
          Perfetti per pagine lunghe con indici!
        </p>

        <CodeExample
          title="Come creare anchor link"
          code={`<!-- 1. Crea un'ancora con id -->
<h2 id="capitolo1">Capitolo 1: Introduzione</h2>
<p>Testo del capitolo...</p>

<h2 id="capitolo2">Capitolo 2: Sviluppo</h2>
<p>Altro testo...</p>

<!-- 2. Crea link che puntano all'ancora -->
<nav>
  <a href="#capitolo1">Vai al Capitolo 1</a>
  <a href="#capitolo2">Vai al Capitolo 2</a>
</nav>

<!-- Link per tornare all'inizio della pagina -->
<a href="#top">Torna su ↑</a>`}
        />

        <div className="bg-indigo-50 p-4 rounded-lg my-6">
          <h3 className="font-bold text-indigo-900 mb-2">🎯 Caso d'uso pratico:</h3>
          <p className="text-gray-700 text-sm">
            Immagina un articolo lungo con sezioni: Introduzione, Metodo, Risultati, Conclusioni.
            All'inizio metti un indice con anchor link per saltare rapidamente a ogni sezione!
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Link Speciali: Email e Telefono</h2>

        <p className="text-gray-700 mb-4">
          HTML ti permette di creare link che aprono il client email o il dialer telefonico!
        </p>

        <CodeExample
          title="Link email e telefono"
          code={`<!-- Link EMAIL (apre client di posta) -->
<a href="mailto:info@example.com">Scrivici via email</a>

<!-- Email con oggetto e corpo predefiniti -->
<a href="mailto:info@example.com?subject=Richiesta%20Info&body=Ciao,%20vorrei%20sapere...">
  Richiedi informazioni
</a>

<!-- Link TELEFONO (apre dialer su mobile) -->
<a href="tel:+393331234567">Chiamaci: +39 333 123 4567</a>

<!-- Link SMS (apre app messaggi) -->
<a href="sms:+393331234567">Invia SMS</a>`}
        />

        <LessonPreview
          title="🔍 Link speciali in azione:"
          html={`<p>📧 Email: <a href="mailto:info@example.com">info@example.com</a></p>

<p>📱 Telefono: <a href="tel:+393331234567">+39 333 123 4567</a></p>

<p>💬 SMS: <a href="sms:+393331234567">Invia un messaggio</a></p>`}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Attributi Importanti del Tag &lt;a&gt;</h2>

        <div className="space-y-4 mb-6">
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <h3 className="font-bold text-blue-900 mb-2">target="_blank" - Apri in Nuova Tab</h3>
            <p className="text-gray-700 text-sm mb-2">
              Fa aprire il link in una nuova scheda del browser. Utile per link esterni.
            </p>
            <code className="text-xs bg-white px-2 py-1 rounded block">
              &lt;a href="https://google.com" target="_blank"&gt;Google&lt;/a&gt;
            </code>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
            <h3 className="font-bold text-green-900 mb-2">title - Tooltip al Passaggio del Mouse</h3>
            <p className="text-gray-700 text-sm mb-2">
              Mostra un testo quando passi il mouse sul link.
            </p>
            <code className="text-xs bg-white px-2 py-1 rounded block">
              &lt;a href="about.html" title="Scopri chi siamo"&gt;Chi siamo&lt;/a&gt;
            </code>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
            <h3 className="font-bold text-purple-900 mb-2">rel="noopener noreferrer" - Sicurezza</h3>
            <p className="text-gray-700 text-sm mb-2">
              Usalo con target="_blank" per motivi di sicurezza e privacy.
            </p>
            <code className="text-xs bg-white px-2 py-1 rounded block">
              &lt;a href="https://external.com" target="_blank" rel="noopener noreferrer"&gt;Link&lt;/a&gt;
            </code>
          </div>

          <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
            <h3 className="font-bold text-orange-900 mb-2">download - Download File</h3>
            <p className="text-gray-700 text-sm mb-2">
              Fa scaricare il file invece di aprirlo.
            </p>
            <code className="text-xs bg-white px-2 py-1 rounded block">
              &lt;a href="documento.pdf" download&gt;Scarica PDF&lt;/a&gt;
            </code>
          </div>
        </div>

        <CodeExample
          title="Esempio completo con tutti gli attributi"
          code={`<!-- Link esterno sicuro -->
<a href="https://www.wikipedia.org"
   target="_blank"
   rel="noopener noreferrer"
   title="Vai su Wikipedia">
  Wikipedia
</a>

<!-- Download file -->
<a href="files/brochure.pdf"
   download
   title="Scarica la brochure">
  📥 Scarica Brochure (PDF)
</a>

<!-- Link con icona -->
<a href="https://github.com"
   target="_blank"
   rel="noopener noreferrer">
  🔗 Vai su GitHub
</a>`}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Link con Immagini</h2>

        <p className="text-gray-700 mb-4">
          Puoi rendere cliccabile qualsiasi cosa, anche le immagini! Basta mettere l'immagine dentro il tag &lt;a&gt;.
        </p>

        <CodeExample
          title="Immagini cliccabili"
          code={`<!-- Immagine che porta a un link -->
<a href="https://www.example.com">
  <img src="logo.png" alt="Logo Example">
</a>

<!-- Immagine con testo -->
<a href="portfolio.html">
  <img src="anteprima.jpg" alt="Anteprima portfolio">
  <p>Guarda il mio portfolio →</p>
</a>`}
        />

        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 my-6">
          <p className="text-gray-700 font-semibold">⚠️ Best Practice:</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 text-sm">
            <li>Usa <code>target="_blank"</code> per link esterni, così non perdi il visitatore</li>
            <li>Sempre <code>rel="noopener noreferrer"</code> con target="_blank" per sicurezza</li>
            <li>Scrivi testi link descrittivi (no "clicca qui", sì "scarica la guida PDF")</li>
            <li>Non abusare dei link: troppi confondono l'utente</li>
          </ul>
        </div>

        <Exercise
          title="Esercizio Guidato: Crea un Menu di Navigazione"
          difficulty="media"
          steps={[
            'Crea un nuovo file "menu-navigazione.html" in VS Code',
            'Scrivi la struttura HTML base',
            'Nel <title> scrivi: "Menu di Navigazione"',
            'Crea un <nav> con 5 link a pagine diverse (home.html, chi-sono.html, servizi.html, portfolio.html, contatti.html)',
            'Usa una lista <ul> per organizzare i link',
            'Aggiungi un link esterno a Google con target="_blank" e rel="noopener noreferrer"',
            'Crea una sezione con id="contatti"',
            'Aggiungi un anchor link nel menu che porta alla sezione contatti',
            'Aggiungi un link email: mailto:tuo@email.com',
            'Aggiungi un link telefono: tel:+393331234567',
            'Salva e apri con Live Server!',
          ]}
        />

        <Challenge
          title="Sfida: Crea una Pagina Portfolio Navigabile"
          description="Crea un sito multi-pagina con navigazione completa! Usa tutto quello che hai imparato sui link."
          requirements={[
            'Almeno 3 pagine HTML separate (index.html, about.html, projects.html)',
            'Menu di navigazione identico in tutte le pagine',
            'Link esterni a 2 social media (target="_blank")',
            'Un anchor link per tornare all\'inizio della pagina',
            'Link email e telefono nella sezione contatti',
            'Almeno un\'immagine cliccabile',
            'Tutti i link devono avere l\'attributo title',
            'Usa rel="noopener noreferrer" dove necessario',
          ]}
          hint="Crea prima la homepage con il menu, poi copia il menu nelle altre pagine. Ricorda di usare percorsi relativi corretti per i link interni!"
        />

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-400 my-8">
          <h3 className="text-lg font-bold text-blue-900 mb-3">🎨 Link e UX (User Experience)</h3>

          <div className="space-y-3 text-gray-700 text-sm">
            <div className="flex gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <strong>Chiarezza:</strong> Il testo del link deve far capire dove porta.
                "Scarica la guida" è meglio di "Clicca qui".
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-2xl">👁️</span>
              <div>
                <strong>Visibilità:</strong> I link devono essere riconoscibili (colore diverso, sottolineati).
                Non confondere l'utente!
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-2xl">🔗</span>
              <div>
                <strong>Consistenza:</strong> Mantieni lo stesso stile per tutti i link del sito.
                Gli utenti si abituano ai pattern.
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-2xl">📱</span>
              <div>
                <strong>Mobile-friendly:</strong> I link devono essere abbastanza grandi da cliccarci
                con il dito (minimo 44x44 pixel).
              </div>
            </div>
          </div>
        </div>

        <Checklist
          items={[
            'So creare link con il tag <a> e l\'attributo href',
            'Capisco la differenza tra link esterni e interni',
            'So usare anchor link per navigare nella stessa pagina',
            'So creare link email (mailto:) e telefono (tel:)',
            'Conosco gli attributi target, title, rel e download',
            'So rendere un\'immagine cliccabile',
            'Capisco l\'importanza di testi link descrittivi',
            'Ho completato l\'esercizio del menu di navigazione',
            'Ho completato la sfida del portfolio navigabile',
          ]}
        />

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold text-gray-800 mb-2">🎯 Prossima Lezione</h3>
          <p className="text-gray-700 mb-3">
            Ora che sai creare link, nella prossima lezione imparerai ad aggiungere
            <strong> immagini</strong> alle tue pagine web!
          </p>
          <Link
            href="/moduli/modulo-1-html/lezione-6-immagini"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Vai alla Lezione 6 →
          </Link>
        </div>
      </section>
    </LessonLayout>
  );
}
