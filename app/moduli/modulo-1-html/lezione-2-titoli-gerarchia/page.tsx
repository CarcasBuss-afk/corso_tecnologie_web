import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import LessonPreview from '@/components/didattica/LessonPreview';
import Link from 'next/link';
import { getLezioniByModuloSlug } from '@/lib/moduli';

export default function Lezione2() {
  const lezioni = getLezioniByModuloSlug('modulo-1-html');

  return (
    <LessonLayout
      moduloSlug="modulo-1-html"
      moduloTitolo="Modulo 1: HTML"
      lezioni={lezioni}
      lezioneSlug="lezione-2-titoli-gerarchia"
      lezioneTitolo="Titoli e Gerarchia"
    >
      <LessonHeader
        numero={2}
        titolo="Titoli e Gerarchia"
        durata="1.5 ore"
        difficolta="facile"
        obiettivi={[
          'Conoscere tutti i tag heading da h1 a h6',
          'Capire la gerarchia e l\'importanza dei titoli',
          'Sapere quando usare ogni livello di titolo',
          'Strutturare un documento in modo logico',
        ]}
      />

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">I Titoli in HTML</h2>

        <p className="text-gray-700 mb-4">
          Nella lezione precedente hai già incontrato il tag <code className="bg-gray-100 px-2 py-1 rounded">&lt;h1&gt;</code>.
          Ma non è l'unico! HTML ha <strong>6 livelli di titoli</strong>, da h1 a h6.
        </p>

        <p className="text-gray-700 mb-4">
          Pensa ai titoli come alla struttura di un libro: il titolo del libro è il più importante (h1),
          poi ci sono i capitoli (h2), le sezioni dei capitoli (h3), e così via.
        </p>

        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 my-6">
          <p className="text-gray-700 font-semibold">💡 Regola d'oro:</p>
          <p className="text-gray-700">
            Più il numero è basso, più il titolo è importante!
            h1 è il più grande e importante, h6 il più piccolo.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Tutti i Tag Heading</h2>

        <CodeExample
          title="I 6 livelli di titoli"
          code={`<h1>Titolo Principale - Il più importante</h1>
<h2>Titolo di Secondo Livello</h2>
<h3>Titolo di Terzo Livello</h3>
<h4>Titolo di Quarto Livello</h4>
<h5>Titolo di Quinto Livello</h5>
<h6>Titolo di Sesto Livello - Il più piccolo</h6>`}
        />

        <LessonPreview
          title="🔍 Ecco come appaiono nel browser:"
          description="Nota come ogni livello diventa progressivamente più piccolo"
          html={`<h1>Titolo Principale - Il più importante</h1>
<h2>Titolo di Secondo Livello</h2>
<h3>Titolo di Terzo Livello</h3>
<h4>Titolo di Quarto Livello</h4>
<h5>Titolo di Quinto Livello</h5>
<h6>Titolo di Sesto Livello - Il più piccolo</h6>`}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">La Gerarchia dei Titoli</h2>

        <p className="text-gray-700 mb-4">
          La gerarchia è super importante! Non puoi usare i titoli a caso, devono seguire un ordine logico.
        </p>

        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 my-6">
          <p className="text-gray-700 font-semibold">❌ SBAGLIATO:</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Usare più di un h1 nella stessa pagina</li>
            <li>Saltare livelli (da h1 direttamente a h3)</li>
            <li>Usare i titoli solo perché sono grandi (usa CSS per quello!)</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 my-6">
          <p className="text-gray-700 font-semibold">✅ CORRETTO:</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Un solo h1 per pagina (il titolo principale)</li>
            <li>Seguire l'ordine: h1 → h2 → h3 → h4...</li>
            <li>Usare i titoli per strutturare il contenuto logicamente</li>
          </ul>
        </div>

        <CodeExample
          title="Esempio di gerarchia corretta"
          code={`<h1>Il Mio Blog di Tecnologia</h1>

<h2>Articoli Recenti</h2>

<h3>Come Creare un Sito Web</h3>
<p>Contenuto dell'articolo...</p>

<h4>Passo 1: Scegliere l'Hosting</h4>
<p>Dettagli del passo...</p>

<h4>Passo 2: Installare WordPress</h4>
<p>Dettagli del passo...</p>

<h3>Guida a JavaScript</h3>
<p>Contenuto dell'articolo...</p>

<h2>Chi Sono</h2>
<p>Informazioni sull'autore...</p>`}
        />

        <LessonPreview
          title="🔍 Visualizza la struttura gerarchica:"
          html={`<h1>Il Mio Blog di Tecnologia</h1>

<h2>Articoli Recenti</h2>

<h3>Come Creare un Sito Web</h3>
<p>Contenuto dell'articolo...</p>

<h4>Passo 1: Scegliere l'Hosting</h4>
<p>Dettagli del passo...</p>

<h4>Passo 2: Installare WordPress</h4>
<p>Dettagli del passo...</p>

<h3>Guida a JavaScript</h3>
<p>Contenuto dell'articolo...</p>

<h2>Chi Sono</h2>
<p>Informazioni sull'autore...</p>`}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Quando Usare Ogni Livello</h2>

        <div className="space-y-4 mb-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-2">🏆 h1 - Titolo Principale</h3>
            <p className="text-gray-700">
              Il titolo della pagina. Solo uno per pagina!
              Esempio: "La Mia Raccolta di Ricette", "Portfolio di Mario Rossi"
            </p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-2">📚 h2 - Sezioni Principali</h3>
            <p className="text-gray-700">
              Le sezioni principali della pagina.
              Esempio: "Antipasti", "Primi Piatti", "Dolci"
            </p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-2">📖 h3 - Sottosezioni</h3>
            <p className="text-gray-700">
              Sottosezioni dentro un h2.
              Esempio: sotto "Primi Piatti" → "Pasta al Pomodoro", "Risotto ai Funghi"
            </p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-blue-900 mb-2">📝 h4, h5, h6 - Dettagli</h3>
            <p className="text-gray-700">
              Per contenuti molto dettagliati e strutturati. Usati raramente, ma utili in documenti complessi.
            </p>
          </div>
        </div>

        <Exercise
          title="Esercizio Guidato: Struttura un Articolo"
          difficulty="facile"
          steps={[
            'Apri VS Code e crea un nuovo file "articolo-blog.html"',
            'Scrivi la struttura HTML base (DOCTYPE, html, head, body)',
            'Nel body, aggiungi un h1 con: "Il Mio Primo Articolo"',
            'Aggiungi un h2 con: "Introduzione"',
            'Sotto, scrivi un paragrafo che spiega di cosa parla l\'articolo',
            'Aggiungi un altro h2 con: "Capitolo 1: Gli Inizi"',
            'Sotto questo h2, aggiungi un h3 con: "Come ho iniziato"',
            'Aggiungi un paragrafo con testo a piacere',
            'Aggiungi un altro h3 con: "Le prime difficoltà"',
            'Salva e apri con Live Server per vedere la gerarchia!',
          ]}
        />

        <Challenge
          title="Sfida: Crea la Struttura di un Sito di Ricette"
          description="Ora che sai come funziona la gerarchia, crea una pagina completa per un sito di ricette!"
          requirements={[
            'Un h1 con il nome del tuo sito di ricette',
            'Almeno 3 h2 per diverse categorie (es: Antipasti, Primi, Dolci)',
            'Sotto ogni h2, almeno 2 h3 con nomi di ricette specifiche',
            'Sotto ogni ricetta (h3), usa h4 per "Ingredienti" e "Preparazione"',
            'Aggiungi paragrafi sotto ogni titolo con testo inventato',
          ]}
          hint="Inizia con il titolo principale del sito, poi pensa alle macro-categorie (h2), poi alle ricette specifiche (h3), e infine ai dettagli (h4). Segui sempre l'ordine gerarchico!"
        />

        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 my-8">
          <h3 className="text-lg font-bold text-purple-900 mb-2">🎓 Perché la Gerarchia è Importante?</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex gap-2">
              <span>•</span>
              <span><strong>Accessibilità:</strong> I lettori di schermo usano i titoli per navigare</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span><strong>SEO:</strong> Google usa i titoli per capire di cosa parla la pagina</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span><strong>Leggibilità:</strong> I visitatori scansionano i titoli per trovare info rapidamente</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span><strong>Struttura:</strong> Rende il codice più organizzato e facile da mantenere</span>
            </li>
          </ul>
        </div>

        <Checklist
          items={[
            'Conosco tutti i 6 livelli di titoli (h1-h6)',
            'So che h1 è il più importante e va usato solo una volta per pagina',
            'Capisco come seguire l\'ordine gerarchico (h1 → h2 → h3...)',
            'Ho creato un articolo con struttura gerarchica corretta',
            'Ho completato la sfida del sito di ricette',
          ]}
        />

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold text-gray-800 mb-2">🎯 Prossima Lezione</h3>
          <p className="text-gray-700 mb-3">
            Ora che sai gestire i titoli, nella prossima lezione approfondirai i paragrafi,
            le interruzioni di riga e i separatori!
          </p>
          <Link
            href="/moduli/modulo-1-html/lezione-3-paragrafi-testo"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Vai alla Lezione 3 →
          </Link>
        </div>
      </section>
    </LessonLayout>
  );
}
