import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import LessonPreview from '@/components/didattica/LessonPreview';
import { getLezioniByModuloSlug } from '@/lib/moduli';

export default function Lezione13() {
  const lezioni = getLezioniByModuloSlug('modulo-1-html');

  return (
    <LessonLayout
      moduloSlug="modulo-1-html"
      moduloTitolo="Modulo 1: HTML"
      lezioni={lezioni}
      lezioneSlug="lezione-13-contenitori-divisioni"
      lezioneTitolo="Contenitori e Divisioni"
    >
      <LessonHeader
        numero={13}
        titolo="Contenitori e Divisioni"
        durata="1.5 ore"
        difficolta="facile"
        obiettivi={[
          'Capire cosa sono i contenitori in HTML',
          'Imparare a usare il tag <div>',
          'Imparare a usare il tag <span>',
          'Comprendere la differenza tra elementi block e inline',
        ]}
      />

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Cosa Sono i Contenitori?</h2>

        <p className="text-gray-700 mb-4">
          Fino ad ora hai imparato tanti tag specifici: <code className="bg-gray-100 px-2 py-1 rounded">{'<h1>'}</code> per i titoli,
          {' '}<code className="bg-gray-100 px-2 py-1 rounded">{'<p>'}</code> per i paragrafi,
          {' '}<code className="bg-gray-100 px-2 py-1 rounded">{'<img>'}</code> per le immagini, e così via.
        </p>

        <p className="text-gray-700 mb-4">
          Ma cosa succede quando vuoi <strong>raggruppare</strong> diversi elementi insieme?
          O quando vuoi applicare uno stile solo a una <strong>parte</strong> di un paragrafo?
        </p>

        <p className="text-gray-700 mb-4">
          È qui che entrano in gioco i <strong>contenitori</strong>! Sono come delle scatole
          invisibili che puoi usare per organizzare e raggruppare i tuoi elementi HTML.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 my-6">
          <p className="text-gray-700 font-semibold">💡 Pensa ai contenitori come:</p>
          <ul className="space-y-2 mt-2">
            <li className="text-gray-700">📦 <strong>Una scatola</strong> che contiene altri elementi</li>
            <li className="text-gray-700">🎨 <strong>Un'area</strong> dove applicare uno stile specifico</li>
            <li className="text-gray-700">🧩 <strong>Un modo</strong> per organizzare il contenuto della pagina</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Il Tag &lt;div&gt;</h2>

        <p className="text-gray-700 mb-4">
          <code className="bg-gray-100 px-2 py-1 rounded">{'<div>'}</code> (abbreviazione di "division")
          è il contenitore più usato in HTML. È un elemento <strong>block</strong>,
          il che significa che:
        </p>

        <ul className="space-y-2 mb-6">
          <li className="text-gray-700">✅ Occupa tutta la larghezza disponibile</li>
          <li className="text-gray-700">✅ Va sempre a capo prima e dopo</li>
          <li className="text-gray-700">✅ Può contenere qualsiasi altro elemento HTML</li>
        </ul>

        <CodeExample
          title="Esempio base di <div>"
          code={`<div>
  <h2>Sezione Notizie</h2>
  <p>Questa è una notizia importante!</p>
  <p>E questa è un'altra notizia.</p>
</div>

<div>
  <h2>Sezione Contatti</h2>
  <p>Email: contatto@esempio.it</p>
</div>`}
        />

        <LessonPreview
          title="🔍 Ecco come appare nel browser:"
          html={`<div style="border: 2px dashed #3b82f6; padding: 10px; margin-bottom: 10px;">
  <h2>Sezione Notizie</h2>
  <p>Questa è una notizia importante!</p>
  <p>E questa è un'altra notizia.</p>
</div>

<div style="border: 2px dashed #3b82f6; padding: 10px;">
  <h2>Sezione Contatti</h2>
  <p>Email: contatto@esempio.it</p>
</div>`}
        />

        <p className="text-gray-700 mb-4 mt-6">
          <em>Nota: I bordi tratteggiati blu nell'esempio sopra sono stati aggiunti solo per far vedere
          dove inizia e finisce ogni <code className="bg-gray-100 px-2 py-1 rounded">{'<div>'}</code>.
          Normalmente i div sono invisibili!</em>
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Quando Usare &lt;div&gt;</h2>

        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 my-6">
          <p className="text-gray-700 font-semibold mb-2">✅ Usa &lt;div&gt; quando vuoi:</p>
          <ul className="space-y-2">
            <li className="text-gray-700">• Raggruppare elementi correlati insieme</li>
            <li className="text-gray-700">• Creare sezioni nella tua pagina</li>
            <li className="text-gray-700">• Applicare uno stile (colore di sfondo, bordo, ecc.) a un gruppo di elementi</li>
            <li className="text-gray-700">• Organizzare il layout della pagina</li>
          </ul>
        </div>

        <CodeExample
          title="Esempio pratico: Card prodotto"
          code={`<div>
  <h3>Smartphone XY</h3>
  <img src="telefono.jpg" alt="Smartphone">
  <p>Il migliore smartphone del 2025!</p>
  <p><strong>Prezzo:</strong> 599€</p>
  <a href="/acquista">Acquista ora</a>
</div>`}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Il Tag &lt;span&gt;</h2>

        <p className="text-gray-700 mb-4">
          <code className="bg-gray-100 px-2 py-1 rounded">{'<span>'}</code> è l'altro contenitore fondamentale,
          ma è un elemento <strong>inline</strong>, il che significa che:
        </p>

        <ul className="space-y-2 mb-6">
          <li className="text-gray-700">✅ Occupa solo lo spazio necessario per il contenuto</li>
          <li className="text-gray-700">✅ Non va a capo automaticamente</li>
          <li className="text-gray-700">✅ Rimane "in linea" con il testo circostante</li>
          <li className="text-gray-700">✅ Perfetto per evidenziare parti di testo</li>
        </ul>

        <CodeExample
          title="Esempio base di <span>"
          code={`<p>
  Questo è un testo normale, ma
  <span>questa parte è speciale</span>
  e poi continua il testo normale.
</p>`}
        />

        <LessonPreview
          title="🔍 Ecco come appare nel browser:"
          html={`<p>
  Questo è un testo normale, ma
  <span style="background-color: yellow; font-weight: bold;">questa parte è speciale</span>
  e poi continua il testo normale.
</p>`}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Quando Usare &lt;span&gt;</h2>

        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 my-6">
          <p className="text-gray-700 font-semibold mb-2">✅ Usa &lt;span&gt; quando vuoi:</p>
          <ul className="space-y-2">
            <li className="text-gray-700">• Evidenziare una parola o frase in un paragrafo</li>
            <li className="text-gray-700">• Applicare uno stile a una parte specifica del testo</li>
            <li className="text-gray-700">• Aggiungere un'icona in mezzo a una frase</li>
            <li className="text-gray-700">• Fare qualsiasi modifica che deve rimanere "in linea"</li>
          </ul>
        </div>

        <CodeExample
          title="Esempio pratico: Testo con evidenziazioni"
          code={`<p>
  Il prezzo originale era <span>150€</span>,
  ma oggi è in offerta a <span>99€</span>!
  Affrettati, l'offerta scade <span>domani</span>!
</p>`}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Block vs Inline: La Differenza Chiave</h2>

        <p className="text-gray-700 mb-4">
          Capire la differenza tra elementi <strong>block</strong> e <strong>inline</strong> è fondamentale!
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <h3 className="font-bold text-gray-800 mb-2">📦 Elementi BLOCK</h3>
            <p className="text-gray-700 text-sm mb-2">Esempi: &lt;div&gt;, &lt;p&gt;, &lt;h1&gt;, &lt;ul&gt;</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Occupano tutta la larghezza</li>
              <li>• Vanno sempre a capo</li>
              <li>• Impilati uno sopra l'altro</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <h3 className="font-bold text-gray-800 mb-2">✏️ Elementi INLINE</h3>
            <p className="text-gray-700 text-sm mb-2">Esempi: &lt;span&gt;, &lt;a&gt;, &lt;strong&gt;, &lt;em&gt;</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Occupano solo lo spazio necessario</li>
              <li>• Restano nella stessa riga</li>
              <li>• Affiancati uno all'altro</li>
            </ul>
          </div>
        </div>

        <CodeExample
          title="Confronto diretto"
          code={`<!-- Elementi BLOCK -->
<div>Primo div</div>
<div>Secondo div</div>
<div>Terzo div</div>

<!-- Elementi INLINE -->
<p>
  <span>Primo span</span>
  <span>Secondo span</span>
  <span>Terzo span</span>
</p>`}
        />

        <LessonPreview
          title="🔍 Ecco come appaiono nel browser:"
          html={`<!-- Elementi BLOCK -->
<div style="background-color: #e0e7ff; padding: 10px; margin-bottom: 5px;">Primo div</div>
<div style="background-color: #e0e7ff; padding: 10px; margin-bottom: 5px;">Secondo div</div>
<div style="background-color: #e0e7ff; padding: 10px; margin-bottom: 15px;">Terzo div</div>

<!-- Elementi INLINE -->
<p>
  <span style="background-color: #fef3c7; padding: 5px; margin-right: 5px;">Primo span</span>
  <span style="background-color: #fef3c7; padding: 5px; margin-right: 5px;">Secondo span</span>
  <span style="background-color: #fef3c7; padding: 5px;">Terzo span</span>
</p>`}
        />

        <Exercise
          title="Esercizio Guidato: Crea una Scheda Ricetta"
          difficulty="facile"
          steps={[
            'Crea un nuovo file HTML chiamato "ricetta.html"',
            'Usa un <div> per contenere tutta la ricetta',
            'Dentro il div, aggiungi un titolo <h2> con il nome della ricetta',
            'Aggiungi un paragrafo <p> con la descrizione',
            'Crea un altro <div> per gli ingredienti con un <h3> e una lista',
            'Usa <span> per evidenziare le quantità importanti negli ingredienti',
            'Salva e visualizza nel browser!',
          ]}
        />

        <CodeExample
          title="Esempio da seguire"
          code={`<!DOCTYPE html>
<html>
<head>
  <title>La Mia Ricetta</title>
</head>
<body>
  <div>
    <h2>Pasta al Pomodoro</h2>
    <p>Una ricetta semplice e deliziosa!</p>

    <div>
      <h3>Ingredienti:</h3>
      <ul>
        <li><span>500g</span> di pasta</li>
        <li><span>400g</span> di pomodori pelati</li>
        <li><span>2 cucchiai</span> di olio d'oliva</li>
      </ul>
    </div>
  </div>
</body>
</html>`}
        />

        <Challenge
          title="Sfida: Crea il Layout di un Blog Post"
          description="Metti in pratica tutto quello che hai imparato creando la struttura di un articolo di blog completo con div e span!"
          requirements={[
            'Un <div> principale che contiene tutto l\'articolo',
            'Un <div> per l\'header con titolo e data (usa <span> per evidenziare la data)',
            'Un <div> per il contenuto con almeno 3 paragrafi',
            'Usa <span> per evidenziare almeno 3 parole chiave importanti nei paragrafi',
            'Un <div> per l\'autore con nome e biografia',
            'Un <div> per i commenti con almeno 2 commenti (ogni commento in un div separato)',
          ]}
          hint="Ricorda: usa <div> per le sezioni grandi, <span> per le piccole parti di testo! E non dimenticare di indentare bene il codice per renderlo leggibile."
        />

        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 my-6">
          <h3 className="font-bold text-gray-800 mb-2">⚠️ Errore Comune da Evitare</h3>
          <p className="text-gray-700 mb-3">
            Non usare <code className="bg-gray-100 px-2 py-1 rounded">{'<div>'}</code> quando esiste un tag
            più specifico!
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-red-600 font-semibold mb-2">❌ Non fare così:</p>
              <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
{`<div>Questo è un titolo</div>
<div>Questo è un paragrafo</div>`}
              </pre>
            </div>
            <div>
              <p className="text-green-600 font-semibold mb-2">✅ Fai così:</p>
              <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
{`<h2>Questo è un titolo</h2>
<p>Questo è un paragrafo</p>`}
              </pre>
            </div>
          </div>
          <p className="text-gray-700 mt-3 text-sm">
            Usa <code className="bg-gray-100 px-2 py-1 rounded">{'<div>'}</code> solo quando non esiste
            un tag semantico più appropriato (nella prossima lezione vedrai cosa significa "semantico"!).
          </p>
        </div>

        <Checklist
          items={[
            'Ho capito cosa sono i contenitori in HTML',
            'So usare <div> per raggruppare elementi',
            'So usare <span> per evidenziare parti di testo',
            'Capisco la differenza tra block e inline',
            'Ho completato l\'esercizio guidato sulla ricetta',
            'Ho provato la sfida del blog post!',
          ]}
        />

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold text-gray-800 mb-2">🎯 Prossima Lezione</h3>
          <p className="text-gray-700 mb-3">
            Nella prossima lezione scoprirai i tag <strong>semantici</strong>:
            tag speciali che hanno un significato specifico e rendono il tuo codice
            più professionale! Imparerai a usare &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;,
            &lt;article&gt;, &lt;section&gt; e &lt;footer&gt;.
          </p>
          <a
            href="/moduli/modulo-1-html/lezione-14-html-semantico"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Vai alla Lezione 14 →
          </a>
        </div>
      </section>
    </LessonLayout>
  );
}
