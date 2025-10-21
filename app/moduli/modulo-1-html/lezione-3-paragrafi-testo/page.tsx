import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import LessonPreview from '@/components/didattica/LessonPreview';
import Link from 'next/link';
import { getLezioniByModuloSlug } from '@/lib/moduli';

export default function Lezione3() {
  const lezioni = getLezioniByModuloSlug('modulo-1-html');

  return (
    <LessonLayout
      moduloSlug="modulo-1-html"
      moduloTitolo="Modulo 1: HTML"
      lezioni={lezioni}
    >
      <LessonHeader
        numero={3}
        titolo="Paragrafi e Testo"
        durata="1 ora"
        difficolta="facile"
        obiettivi={[
          'Usare correttamente il tag <p> per i paragrafi',
          'Capire come funzionano gli spazi e le interruzioni di riga',
          'Usare <br> per andare a capo',
          'Usare <hr> per creare separatori visivi',
        ]}
      />

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">I Paragrafi in HTML</h2>

        <p className="text-gray-700 mb-4">
          Hai già usato il tag <code className="bg-gray-100 px-2 py-1 rounded">&lt;p&gt;</code> nelle lezioni precedenti,
          ma ora scoprirai tutti i suoi segreti!
        </p>

        <p className="text-gray-700 mb-4">
          Il tag <strong>&lt;p&gt;</strong> (paragrafo) è uno dei tag più usati in HTML. Serve per organizzare il testo in blocchi logici,
          proprio come i paragrafi che trovi in un libro o in un articolo.
        </p>

        <CodeExample
          title="Il tag <p> base"
          code={`<p>Questo è un paragrafo di testo.</p>

<p>Questo è un altro paragrafo, completamente separato dal primo.</p>

<p>Ogni paragrafo ha uno spazio automatico sopra e sotto!</p>`}
        />

        <LessonPreview
          title="🔍 Ecco come appare:"
          description="Nota lo spazio automatico tra i paragrafi"
          html={`<p>Questo è un paragrafo di testo.</p>

<p>Questo è un altro paragrafo, completamente separato dal primo.</p>

<p>Ogni paragrafo ha uno spazio automatico sopra e sotto!</p>`}
        />

        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 my-6">
          <p className="text-gray-700 font-semibold">💡 Curiosità sugli spazi:</p>
          <p className="text-gray-700">
            HTML ignora gli spazi multipli e gli a capo nel codice! Se scrivi 10 spazi di fila,
            il browser ne mostrerà solo uno. Se vai a capo più volte, il browser lo ignorerà.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Il Mistero degli Spazi</h2>

        <p className="text-gray-700 mb-4">
          Ecco una cosa che sorprende tutti all'inizio: HTML comprime automaticamente gli spazi!
        </p>

        <CodeExample
          title="Gli spazi vengono compressi"
          code={`<!-- Anche se scrivi così... -->
<p>Questo     testo     ha     molti     spazi.</p>

<!-- Il browser mostrerà questo: -->
<p>Questo testo ha molti spazi.</p>

<!-- E anche se vai a capo... -->
<p>Questa frase
va su più righe
nel codice</p>

<!-- Il browser la mostra su una riga sola! -->`}
        />

        <LessonPreview
          title="🔍 Guarda cosa succede:"
          html={`<p>Questo     testo     ha     molti     spazi.</p>

<p>Questa frase
va su più righe
nel codice ma appare tutta di seguito!</p>`}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Andare a Capo: il Tag &lt;br&gt;</h2>

        <p className="text-gray-700 mb-4">
          E se vuoi davvero andare a capo <strong>dentro</strong> un paragrafo? Usi il tag <code className="bg-gray-100 px-2 py-1 rounded">&lt;br&gt;</code>!
        </p>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 my-6">
          <p className="text-gray-700 font-semibold">📌 Tag auto-chiudente:</p>
          <p className="text-gray-700">
            &lt;br&gt; è un tag speciale: non ha tag di chiusura! Si scrive così: <code className="bg-white px-2 py-1 rounded">&lt;br&gt;</code> oppure <code className="bg-white px-2 py-1 rounded">&lt;br /&gt;</code>
          </p>
        </div>

        <CodeExample
          title="Usare <br> per andare a capo"
          code={`<p>
  Questa è la prima riga<br>
  Questa è la seconda riga<br>
  Questa è la terza riga
</p>

<p>
  Mario Rossi<br>
  Via Roma 123<br>
  00100 Roma
</p>`}
        />

        <LessonPreview
          title="🔍 Risultato con <br>:"
          html={`<p>
  Questa è la prima riga<br>
  Questa è la seconda riga<br>
  Questa è la terza riga
</p>

<p>
  Mario Rossi<br>
  Via Roma 123<br>
  00100 Roma
</p>`}
        />

        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 my-6">
          <p className="text-gray-700 font-semibold">⚠️ Attenzione:</p>
          <p className="text-gray-700">
            Non usare tanti &lt;br&gt; di fila per creare spazio! Per quello si usa il CSS.
            Usa &lt;br&gt; solo quando serve davvero andare a capo (come negli indirizzi o nelle poesie).
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Il Separatore: &lt;hr&gt;</h2>

        <p className="text-gray-700 mb-4">
          Il tag <code className="bg-gray-100 px-2 py-1 rounded">&lt;hr&gt;</code> (horizontal rule = linea orizzontale)
          crea una riga che separa visivamente diverse sezioni della pagina.
        </p>

        <CodeExample
          title="Usare <hr> per separare contenuti"
          code={`<h2>Capitolo 1</h2>
<p>Contenuto del primo capitolo...</p>

<hr>

<h2>Capitolo 2</h2>
<p>Contenuto del secondo capitolo...</p>

<hr>

<h2>Capitolo 3</h2>
<p>Contenuto del terzo capitolo...</p>`}
        />

        <LessonPreview
          title="🔍 La linea separatrice:"
          description="<hr> crea una linea orizzontale che separa i contenuti"
          html={`<h2>Capitolo 1</h2>
<p>Contenuto del primo capitolo...</p>

<hr>

<h2>Capitolo 2</h2>
<p>Contenuto del secondo capitolo...</p>

<hr>

<h2>Capitolo 3</h2>
<p>Contenuto del terzo capitolo...</p>`}
        />

        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400 my-6">
          <p className="text-gray-700 font-semibold">💭 Quando usare &lt;hr&gt;?</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Per separare sezioni tematicamente diverse</li>
            <li>Tra capitoli o parti di un articolo</li>
            <li>Per creare una divisione visiva tra contenuti</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Riepilogo Tag del Testo</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
            <h3 className="font-bold text-blue-900 mb-2">&lt;p&gt;</h3>
            <p className="text-gray-700 text-sm">
              Paragrafo di testo. Ha margini automatici sopra e sotto.
            </p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
            <h3 className="font-bold text-green-900 mb-2">&lt;br&gt;</h3>
            <p className="text-gray-700 text-sm">
              Interruzione di riga (line break). Va a capo dentro un paragrafo.
            </p>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
            <h3 className="font-bold text-purple-900 mb-2">&lt;hr&gt;</h3>
            <p className="text-gray-700 text-sm">
              Linea orizzontale separatrice. Divide visivamente le sezioni.
            </p>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
            <h3 className="font-bold text-yellow-900 mb-2">Spazi</h3>
            <p className="text-gray-700 text-sm">
              HTML comprime spazi multipli in uno solo. Gli a capo vengono ignorati.
            </p>
          </div>
        </div>

        <Exercise
          title="Esercizio Guidato: Scrivi una Storia"
          difficulty="facile"
          steps={[
            'Crea un nuovo file "storia.html" in VS Code',
            'Scrivi la struttura HTML base (DOCTYPE, html, head, body)',
            'Nel <title> scrivi: "La Mia Prima Storia"',
            'Nel body, aggiungi un <h1> con il titolo della tua storia',
            'Scrivi il primo paragrafo della storia (almeno 2-3 righe)',
            'Aggiungi <hr> per separare',
            'Scrivi un secondo paragrafo con il seguito della storia',
            'Nel secondo paragrafo, usa almeno un <br> per andare a capo',
            'Aggiungi un terzo paragrafo per concludere',
            'Salva e apri con Live Server per vedere il risultato!',
          ]}
        />

        <Challenge
          title="Sfida: Crea una Pagina di Poesie"
          description="Le poesie hanno un formato particolare con versi che vanno a capo. Usa i tag che hai imparato per formattarle correttamente!"
          requirements={[
            'Un h1 con: "La Mia Raccolta di Poesie"',
            'Scrivi almeno 2 poesie (puoi inventarle o usare poesie famose)',
            'Ogni poesia deve avere un h2 con il titolo',
            'Ogni verso della poesia deve andare a capo (usa <br>)',
            'Separa le due poesie con <hr>',
            'Aggiungi un paragrafo finale con una tua riflessione',
          ]}
          hint="Ricorda: ogni poesia sta dentro un <p>, e usi <br> alla fine di ogni verso per andare a capo. Tra una poesia e l'altra, usa <hr> per separare!"
        />

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-400 my-8">
          <h3 className="text-lg font-bold text-blue-900 mb-3">🎨 Esempio Pratico: Formattare un Indirizzo</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Codice:</p>
              <CodeExample
                code={`<p>
  <strong>Contatti</strong><br>
  Mario Rossi<br>
  Via Roma 123<br>
  00100 Roma (RM)<br>
  Tel: 06-1234567
</p>`}
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">Risultato:</p>
              <div className="bg-white p-4 rounded border-2 border-blue-200">
                <LessonPreview
                  title="🔍 Indirizzo formattato:"
                  html={`<p>
  <strong>Contatti</strong><br>
  Mario Rossi<br>
  Via Roma 123<br>
  00100 Roma (RM)<br>
  Tel: 06-1234567
</p>`}
                />
              </div>
            </div>
          </div>
        </div>

        <Checklist
          items={[
            'So usare il tag <p> per creare paragrafi',
            'Capisco che HTML comprime gli spazi multipli',
            'So usare <br> per andare a capo dentro un paragrafo',
            'So usare <hr> per creare separatori visivi',
            'Ho completato l\'esercizio della storia',
            'Ho completato la sfida delle poesie',
          ]}
        />

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold text-gray-800 mb-2">🎯 Prossima Lezione</h3>
          <p className="text-gray-700 mb-3">
            Ora che sai gestire paragrafi e interruzioni, nella prossima lezione imparerai a
            <strong> formattare il testo</strong> con grassetto, corsivo, sottolineato e molto altro!
          </p>
          <Link
            href="/moduli/modulo-1-html/lezione-4-formattare-testo"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Vai alla Lezione 4 →
          </Link>
        </div>
      </section>
    </LessonLayout>
  );
}
