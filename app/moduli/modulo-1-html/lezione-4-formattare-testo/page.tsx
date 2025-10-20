import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import LessonPreview from '@/components/didattica/LessonPreview';
import Link from 'next/link';
import { getLezioniByModuloSlug } from '@/lib/moduli';

export default function Lezione4() {
  const lezioni = getLezioniByModuloSlug('modulo-1-html');

  return (
    <LessonLayout
      moduloSlug="modulo-1-html"
      moduloTitolo="Modulo 1: HTML"
      lezioni={lezioni}
    >
      <LessonHeader
        numero={4}
        titolo="Formattare il Testo"
        durata="1.5 ore"
        difficolta="facile"
        obiettivi={[
          'Usare <strong> e <b> per il grassetto',
          'Usare <em> e <i> per il corsivo',
          'Conoscere i tag per sottolineato, evidenziato, barrato',
          'Capire la differenza tra tag semantici e visuali',
        ]}
      />

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Dare Stile al Testo</h2>

        <p className="text-gray-700 mb-4">
          Finora hai scritto testo semplice, ma cosa succede se vuoi mettere in <strong>grassetto</strong> una parola importante,
          o in <em>corsivo</em> per dare enfasi? HTML ha i tag perfetti per questo!
        </p>

        <p className="text-gray-700 mb-4">
          In questa lezione scoprirai tutti i modi per formattare il testo e renderlo più espressivo.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 my-6">
          <p className="text-gray-700 font-semibold">🎯 Importante:</p>
          <p className="text-gray-700">
            Questi tag cambiano l'<strong>aspetto</strong> del testo, ma ricorda: per lo stile vero e proprio
            userai il CSS. Questi tag hanno anche un <strong>significato semantico</strong> importante!
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Grassetto: &lt;strong&gt; vs &lt;b&gt;</h2>

        <p className="text-gray-700 mb-4">
          Ci sono <strong>due modi</strong> per rendere il testo in grassetto, ma non sono la stessa cosa!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-green-50 rounded-lg border-2 border-green-400">
            <h3 className="font-bold text-green-900 mb-2">✅ &lt;strong&gt; - Semantico</h3>
            <p className="text-gray-700 text-sm mb-2">
              Indica che il testo è <strong>importante</strong>. Ha un significato!
            </p>
            <p className="text-gray-600 text-xs">
              Usa quando vuoi dire: "Questa cosa è davvero importante!"
            </p>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-400">
            <h3 className="font-bold text-yellow-900 mb-2">⚠️ &lt;b&gt; - Visuale</h3>
            <p className="text-gray-700 text-sm mb-2">
              Rende il testo in grassetto, ma <b>solo per stile</b>.
            </p>
            <p className="text-gray-600 text-xs">
              Usa quando vuoi solo grassetto senza enfasi semantica.
            </p>
          </div>
        </div>

        <CodeExample
          title="Grassetto: <strong> e <b>"
          code={`<!-- Strong: testo IMPORTANTE -->
<p>Attenzione: <strong>non toccare!</strong></p>

<!-- B: solo grassetto visuale -->
<p>Il nome del prodotto: <b>SuperWidget 3000</b></p>

<!-- Meglio usare strong nella maggior parte dei casi -->
<p><strong>Importante:</strong> salvare sempre il lavoro!</p>`}
        />

        <LessonPreview
          title="🔍 Risultato:"
          html={`<p>Attenzione: <strong>non toccare!</strong></p>
<p>Il nome del prodotto: <b>SuperWidget 3000</b></p>
<p><strong>Importante:</strong> salvare sempre il lavoro!</p>`}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Corsivo: &lt;em&gt; vs &lt;i&gt;</h2>

        <p className="text-gray-700 mb-4">
          Stesso discorso per il corsivo: ci sono due tag, con scopi diversi!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-green-50 rounded-lg border-2 border-green-400">
            <h3 className="font-bold text-green-900 mb-2">✅ &lt;em&gt; - Enfasi</h3>
            <p className="text-gray-700 text-sm mb-2">
              Dà <em>enfasi</em> al testo. Ha un significato semantico!
            </p>
            <p className="text-gray-600 text-xs">
              Usa quando vuoi sottolineare qualcosa verbalmente.
            </p>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg border-2 border-yellow-400">
            <h3 className="font-bold text-yellow-900 mb-2">⚠️ &lt;i&gt; - Visuale</h3>
            <p className="text-gray-700 text-sm mb-2">
              Corsivo per nomi tecnici, parole straniere, ecc.
            </p>
            <p className="text-gray-600 text-xs">
              Usa per titoli, termini tecnici, lingue diverse.
            </p>
          </div>
        </div>

        <CodeExample
          title="Corsivo: <em> e <i>"
          code={`<!-- Em: enfasi vocale -->
<p>Non puoi <em>davvero</em> credere a questo!</p>

<!-- I: termini tecnici o stranieri -->
<p>Il film <i>Inception</i> è fantastico.</p>
<p>In francese si dice <i>bonjour</i>.</p>

<!-- Enfasi su una parola -->
<p>Questo è <em>esattamente</em> quello che intendevo!</p>`}
        />

        <LessonPreview
          title="🔍 Risultato:"
          html={`<p>Non puoi <em>davvero</em> credere a questo!</p>
<p>Il film <i>Inception</i> è fantastico.</p>
<p>In francese si dice <i>bonjour</i>.</p>
<p>Questo è <em>esattamente</em> quello che intendevo!</p>`}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Altri Tag di Formattazione</h2>

        <p className="text-gray-700 mb-4">
          Ci sono tantissimi altri tag per formattare il testo in modi diversi!
        </p>

        <div className="space-y-4 mb-6">
          <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
            <h3 className="font-bold text-purple-900 mb-2">&lt;u&gt; - Sottolineato</h3>
            <p className="text-gray-700 text-sm">
              Sottolinea il testo. <strong>Attenzione:</strong> evita di usarlo perché confonde con i link!
            </p>
            <code className="text-xs bg-white px-2 py-1 rounded mt-2 inline-block">
              &lt;u&gt;Testo sottolineato&lt;/u&gt;
            </code>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
            <h3 className="font-bold text-yellow-900 mb-2">&lt;mark&gt; - Evidenziato</h3>
            <p className="text-gray-700 text-sm">
              Evidenzia il testo come con un evidenziatore giallo. Perfetto per ricerche!
            </p>
            <code className="text-xs bg-white px-2 py-1 rounded mt-2 inline-block">
              &lt;mark&gt;Testo evidenziato&lt;/mark&gt;
            </code>
          </div>

          <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
            <h3 className="font-bold text-red-900 mb-2">&lt;del&gt; e &lt;s&gt; - Barrato</h3>
            <p className="text-gray-700 text-sm">
              <strong>&lt;del&gt;</strong>: testo cancellato/eliminato (semantico)<br />
              <strong>&lt;s&gt;</strong>: testo non più accurato (visuale)
            </p>
            <code className="text-xs bg-white px-2 py-1 rounded mt-2 inline-block">
              &lt;del&gt;Vecchio prezzo: €100&lt;/del&gt;
            </code>
          </div>

          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
            <h3 className="font-bold text-green-900 mb-2">&lt;ins&gt; - Inserito</h3>
            <p className="text-gray-700 text-sm">
              Testo inserito/aggiunto. Spesso sottolineato.
            </p>
            <code className="text-xs bg-white px-2 py-1 rounded mt-2 inline-block">
              &lt;ins&gt;Nuovo prezzo: €80&lt;/ins&gt;
            </code>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
            <h3 className="font-bold text-blue-900 mb-2">&lt;small&gt; - Testo Piccolo</h3>
            <p className="text-gray-700 text-sm">
              Testo più piccolo. Utile per note legali, copyright, ecc.
            </p>
            <code className="text-xs bg-white px-2 py-1 rounded mt-2 inline-block">
              &lt;small&gt;Copyright 2025&lt;/small&gt;
            </code>
          </div>

          <div className="p-4 bg-indigo-50 rounded-lg border-l-4 border-indigo-400">
            <h3 className="font-bold text-indigo-900 mb-2">&lt;sub&gt; e &lt;sup&gt; - Pedice e Apice</h3>
            <p className="text-gray-700 text-sm">
              <strong>&lt;sub&gt;</strong>: pedice (formule chimiche)<br />
              <strong>&lt;sup&gt;</strong>: apice (potenze matematiche)
            </p>
            <code className="text-xs bg-white px-2 py-1 rounded mt-2 inline-block">
              H&lt;sub&gt;2&lt;/sub&gt;O | 2&lt;sup&gt;3&lt;/sup&gt; = 8
            </code>
          </div>
        </div>

        <CodeExample
          title="Tutti i tag insieme"
          code={`<p>Testo <u>sottolineato</u> (evita con i link!)</p>

<p>Cerca la parola <mark>importante</mark> evidenziata!</p>

<p>Prezzo: <del>€100</del> <ins>€80</ins> in offerta!</p>

<p><small>Copyright 2025 - Tutti i diritti riservati</small></p>

<p>Formula chimica: H<sub>2</sub>O (acqua)</p>

<p>Matematica: 2<sup>3</sup> = 8</p>`}
        />

        <LessonPreview
          title="🔍 Guarda tutti i formati:"
          html={`<p>Testo <u>sottolineato</u> (evita con i link!)</p>

<p>Cerca la parola <mark>importante</mark> evidenziata!</p>

<p>Prezzo: <del>€100</del> <ins>€80</ins> in offerta!</p>

<p><small>Copyright 2025 - Tutti i diritti riservati</small></p>

<p>Formula chimica: H<sub>2</sub>O (acqua)</p>

<p>Matematica: 2<sup>3</sup> = 8</p>`}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Combinare i Tag</h2>

        <p className="text-gray-700 mb-4">
          Puoi <strong>combinare</strong> più tag insieme per ottenere effetti multipli!
        </p>

        <CodeExample
          title="Tag annidati"
          code={`<!-- Grassetto + Corsivo -->
<p>Questo è <strong><em>molto importante</em></strong>!</p>

<!-- Evidenziato + Grassetto -->
<p>Nota: <mark><strong>Attenzione!</strong></mark></p>

<!-- Apice + Grassetto -->
<p>E = mc<sup><strong>2</strong></sup></p>

<!-- Barrato + Piccolo -->
<p><small><del>Questo non vale più</del></small></p>`}
        />

        <LessonPreview
          title="🔍 Tag combinati:"
          html={`<p>Questo è <strong><em>molto importante</em></strong>!</p>
<p>Nota: <mark><strong>Attenzione!</strong></mark></p>
<p>E = mc<sup><strong>2</strong></sup></p>
<p><small><del>Questo non vale più</del></small></p>`}
        />

        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 my-6">
          <p className="text-gray-700 font-semibold">⚠️ Regola importante:</p>
          <p className="text-gray-700">
            Quando annidi i tag, CHIUDILI NELL'ORDINE INVERSO!<br />
            ✅ Giusto: <code className="bg-white px-2 py-1 rounded">&lt;strong&gt;&lt;em&gt;testo&lt;/em&gt;&lt;/strong&gt;</code><br />
            ❌ Sbagliato: <code className="bg-white px-2 py-1 rounded">&lt;strong&gt;&lt;em&gt;testo&lt;/strong&gt;&lt;/em&gt;</code>
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Riepilogo Veloce</h2>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border-2 border-gray-300">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Tag</th>
                <th className="px-4 py-3 text-left font-semibold">Effetto</th>
                <th className="px-4 py-3 text-left font-semibold">Quando Usarlo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-blue-50">
                <td className="px-4 py-3"><code>&lt;strong&gt;</code></td>
                <td className="px-4 py-3"><strong>Grassetto</strong></td>
                <td className="px-4 py-3">Testo importante</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="px-4 py-3"><code>&lt;em&gt;</code></td>
                <td className="px-4 py-3"><em>Corsivo</em></td>
                <td className="px-4 py-3">Enfasi vocale</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="px-4 py-3"><code>&lt;mark&gt;</code></td>
                <td className="px-4 py-3"><mark>Evidenziato</mark></td>
                <td className="px-4 py-3">Evidenziare parole chiave</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="px-4 py-3"><code>&lt;del&gt;</code></td>
                <td className="px-4 py-3"><del>Barrato</del></td>
                <td className="px-4 py-3">Testo eliminato</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="px-4 py-3"><code>&lt;ins&gt;</code></td>
                <td className="px-4 py-3"><ins>Sottolineato</ins></td>
                <td className="px-4 py-3">Testo aggiunto</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="px-4 py-3"><code>&lt;small&gt;</code></td>
                <td className="px-4 py-3"><small>Piccolo</small></td>
                <td className="px-4 py-3">Note legali, copyright</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="px-4 py-3"><code>&lt;sub&gt;</code></td>
                <td className="px-4 py-3">H<sub>2</sub>O</td>
                <td className="px-4 py-3">Formule chimiche</td>
              </tr>
              <tr className="hover:bg-blue-50">
                <td className="px-4 py-3"><code>&lt;sup&gt;</code></td>
                <td className="px-4 py-3">2<sup>3</sup></td>
                <td className="px-4 py-3">Potenze matematiche</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Exercise
          title="Esercizio Guidato: Formatta le tue Note Scolastiche"
          difficulty="facile"
          steps={[
            'Crea un file "note-scolastiche.html" in VS Code',
            'Scrivi la struttura HTML base',
            'Aggiungi un h1: "Le Mie Note di Scienze"',
            'Scrivi un h2: "Lezione 1: L\'Acqua"',
            'Scrivi un paragrafo e usa <strong> per evidenziare "formula chimica"',
            'Aggiungi la formula: H<sub>2</sub>O usando il tag <sub>',
            'Aggiungi un h2: "Lezione 2: La Fisica"',
            'Scrivi un paragrafo con la formula E=mc<sup>2</sup> usando <sup>',
            'Usa <mark> per evidenziare parole chiave importanti',
            'Aggiungi <small> alla fine con "Note dell\'anno 2025"',
          ]}
        />

        <Challenge
          title="Sfida: Crea un Volantino Promozionale"
          description="Immagina di creare un volantino per un negozio. Usa tutti i tag di formattazione che hai imparato!"
          requirements={[
            'Un h1 con il nome del negozio',
            'Un h2: "Super Offerta del Giorno!"',
            'Usa <del> per il vecchio prezzo e <ins> per il nuovo',
            'Usa <strong> per evidenziare "Solo oggi!"',
            'Usa <mark> per evidenziare lo sconto percentuale',
            'Aggiungi un paragrafo con <em> per enfatizzare qualcosa',
            'Usa <small> per i termini e condizioni in fondo',
            'Combina almeno 2 tag insieme (es: <strong><mark>)',
          ]}
          hint="Pensa a come sono fatti i volantini veri: prezzi barrati, sconti evidenziati, scritte in grassetto per attirare l'attenzione. Usa creatività!"
        />

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-400 my-8">
          <h3 className="text-lg font-bold text-purple-900 mb-3">💡 Semantico vs Visuale: Perché Importa?</h3>

          <div className="space-y-3 text-gray-700">
            <div className="flex gap-3">
              <span className="text-2xl">🤖</span>
              <div>
                <strong>Screen Reader:</strong> I lettori di schermo per non vedenti leggono <code>&lt;strong&gt;</code>
                con enfasi, ma ignorano <code>&lt;b&gt;</code>.
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-2xl">🔍</span>
              <div>
                <strong>Google:</strong> I motori di ricerca capiscono che <code>&lt;strong&gt;</code> e <code>&lt;em&gt;</code>
                indicano contenuto importante.
              </div>
            </div>

            <div className="flex gap-3">
              <span className="text-2xl">🎨</span>
              <div>
                <strong>CSS:</strong> Puoi cambiare lo stile di <code>&lt;strong&gt;</code> (non solo grassetto!)
                mantenendo il significato.
              </div>
            </div>
          </div>
        </div>

        <Checklist
          items={[
            'Capisco la differenza tra <strong> e <b>',
            'Capisco la differenza tra <em> e <i>',
            'So usare <mark> per evidenziare testo',
            'So usare <del> e <ins> per prezzi scontati',
            'So usare <sub> per formule chimiche e <sup> per potenze',
            'So combinare più tag insieme rispettando l\'ordine di chiusura',
            'Ho completato l\'esercizio delle note scolastiche',
            'Ho completato la sfida del volantino promozionale',
          ]}
        />

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold text-gray-800 mb-2">🎯 Prossima Lezione</h3>
          <p className="text-gray-700 mb-3">
            Ora che sai formattare il testo, nella prossima lezione imparerai a creare
            <strong> link e collegamenti</strong> per navigare tra le pagine!
          </p>
          <Link
            href="/moduli/modulo-1-html/lezione-5-link-navigazione"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Vai alla Lezione 5 →
          </Link>
        </div>
      </section>
    </LessonLayout>
  );
}
