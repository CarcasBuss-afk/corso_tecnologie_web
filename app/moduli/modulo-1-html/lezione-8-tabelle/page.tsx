import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import LessonPreview from '@/components/didattica/LessonPreview';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import { getLezioniByModuloSlug } from '@/lib/moduli';

export default function Lezione8Page() {
  const lezioni = getLezioniByModuloSlug('modulo-1-html');

  return (
    <LessonLayout
      moduloSlug="modulo-1-html"
      moduloTitolo="Modulo 1: HTML - Le Fondamenta del Web"
      lezioni={lezioni}
    >
      <LessonHeader
        numero={8}
        titolo="Tabelle"
        durata="1.5 ore"
        difficolta="media"
        obiettivi={[
          'Creare tabelle con <table>, <tr>, <td>',
          'Aggiungere intestazioni con <th>',
          'Strutturare tabelle con <thead>, <tbody>, <tfoot>',
          'Unire celle con colspan e rowspan',
          'Creare tabelle accessibili e semantiche'
        ]}
      />

      <div className="space-y-8">
        {/* Introduzione */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Organizzare Dati in Tabelle</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <p className="text-lg leading-relaxed">
              Le <strong>tabelle</strong> sono perfette per mostrare dati organizzati in righe e colonne:
              orari scolastici, risultati sportivi, listini prezzi, confronti prodotti...
            </p>
            <p className="text-lg leading-relaxed mt-3">
              In HTML creare tabelle è un po' come giocare con i LEGO: serve pazienza, ma il risultato
              è molto ordinato e professionale!
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-yellow-800 flex items-start gap-2">
              <span className="text-xl">💡</span>
              <span><strong>Nota importante:</strong> Le tabelle HTML servono SOLO per mostrare dati tabulari
              (come un foglio Excel). NON usare mai le tabelle per creare il layout della pagina!
              Per quello useremo CSS (prossimo modulo).</span>
            </p>
          </div>
        </section>

        {/* Struttura Base */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🏗️ Struttura Base di una Tabella</h2>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <p className="text-lg mb-4">
              Per creare una tabella servono almeno <strong>3 tag</strong>:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
                <h4 className="font-bold text-blue-900 mb-2">🏷️ &lt;table&gt;</h4>
                <p className="text-sm text-gray-700">
                  Il contenitore di tutta la tabella
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
                <h4 className="font-bold text-green-900 mb-2">🏷️ &lt;tr&gt;</h4>
                <p className="text-sm text-gray-700">
                  <strong>T</strong>able <strong>R</strong>ow - una riga
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300">
                <h4 className="font-bold text-purple-900 mb-2">🏷️ &lt;td&gt;</h4>
                <p className="text-sm text-gray-700">
                  <strong>T</strong>able <strong>D</strong>ata - una cella
                </p>
              </div>
            </div>
          </div>

          <CodeExample
            code={`<table>
  <!-- RIGA 1 -->
  <tr>
    <td>Lunedì</td>
    <td>Matematica</td>
    <td>Italiano</td>
  </tr>

  <!-- RIGA 2 -->
  <tr>
    <td>Martedì</td>
    <td>Storia</td>
    <td>Inglese</td>
  </tr>

  <!-- RIGA 3 -->
  <tr>
    <td>Mercoledì</td>
    <td>Scienze</td>
    <td>Ed. Fisica</td>
  </tr>
</table>`}
            language="html"
            showLineNumbers={true}
          />

          <LessonPreview
            title="🔍 Risultato:"
            description="Tabella semplice 3x3 (3 righe × 3 colonne)"
            html={`<table border="1">
  <tr>
    <td>Lunedì</td>
    <td>Matematica</td>
    <td>Italiano</td>
  </tr>
  <tr>
    <td>Martedì</td>
    <td>Storia</td>
    <td>Inglese</td>
  </tr>
  <tr>
    <td>Mercoledì</td>
    <td>Scienze</td>
    <td>Ed. Fisica</td>
  </tr>
</table>`}
          />

          <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mt-4">
            <p className="text-sm text-indigo-900">
              <strong>📐 Come funziona:</strong><br/>
              • <code>&lt;table&gt;</code> crea la tabella<br/>
              • Ogni <code>&lt;tr&gt;</code> è una RIGA orizzontale<br/>
              • Ogni <code>&lt;td&gt;</code> è una CELLA dentro la riga<br/>
              • Tutte le righe devono avere lo stesso numero di celle!
            </p>
          </div>
        </section>

        {/* Intestazioni */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📌 Intestazioni di Tabella: &lt;th&gt;</h2>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <p className="text-lg mb-4">
              Per le <strong>intestazioni</strong> (prima riga o prima colonna) usa <code>&lt;th&gt;</code>
              invece di <code>&lt;td&gt;</code>:
            </p>

            <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-300">
              <h4 className="font-bold text-orange-900 mb-2">🏷️ &lt;th&gt;</h4>
              <p className="text-sm text-gray-700 mb-2">
                <strong>T</strong>able <strong>H</strong>eader - cella di intestazione
              </p>
              <ul className="text-xs space-y-1 text-gray-700">
                <li>✅ Testo in grassetto automaticamente</li>
                <li>✅ Centrato per default</li>
                <li>✅ Migliora accessibilità (screen reader)</li>
              </ul>
            </div>
          </div>

          <CodeExample
            code={`<table>
  <!-- Prima riga con intestazioni -->
  <tr>
    <th>Giorno</th>
    <th>Prima ora</th>
    <th>Seconda ora</th>
  </tr>

  <!-- Righe con dati -->
  <tr>
    <td>Lunedì</td>
    <td>Matematica</td>
    <td>Italiano</td>
  </tr>
  <tr>
    <td>Martedì</td>
    <td>Storia</td>
    <td>Inglese</td>
  </tr>
</table>`}
            language="html"
            showLineNumbers={true}
          />

          <LessonPreview
            title="🔍 Risultato:"
            description="Tabella con intestazioni in grassetto"
            html={`<table border="1">
  <tr>
    <th>Giorno</th>
    <th>Prima ora</th>
    <th>Seconda ora</th>
  </tr>
  <tr>
    <td>Lunedì</td>
    <td>Matematica</td>
    <td>Italiano</td>
  </tr>
  <tr>
    <td>Martedì</td>
    <td>Storia</td>
    <td>Inglese</td>
  </tr>
</table>`}
          />
        </section>

        {/* Sezioni */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Sezioni: &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;</h2>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <p className="text-lg mb-4">
              Per tabelle più complesse, puoi dividere la tabella in <strong>3 sezioni semantiche</strong>:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-cyan-50 p-4 rounded-lg border-2 border-cyan-300">
                <h4 className="font-bold text-cyan-900 mb-2">📋 &lt;thead&gt;</h4>
                <p className="text-sm text-gray-700">
                  Table Head - intestazione della tabella
                </p>
              </div>

              <div className="bg-teal-50 p-4 rounded-lg border-2 border-teal-300">
                <h4 className="font-bold text-teal-900 mb-2">📊 &lt;tbody&gt;</h4>
                <p className="text-sm text-gray-700">
                  Table Body - corpo con i dati principali
                </p>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg border-2 border-emerald-300">
                <h4 className="font-bold text-emerald-900 mb-2">📐 &lt;tfoot&gt;</h4>
                <p className="text-sm text-gray-700">
                  Table Foot - piè di pagina (totali, note)
                </p>
              </div>
            </div>
          </div>

          <CodeExample
            code={`<table>
  <!-- INTESTAZIONE -->
  <thead>
    <tr>
      <th>Prodotto</th>
      <th>Quantità</th>
      <th>Prezzo</th>
    </tr>
  </thead>

  <!-- CORPO DATI -->
  <tbody>
    <tr>
      <td>Penne</td>
      <td>3</td>
      <td>€1.50</td>
    </tr>
    <tr>
      <td>Quaderni</td>
      <td>2</td>
      <td>€4.00</td>
    </tr>
  </tbody>

  <!-- PIEDE CON TOTALE -->
  <tfoot>
    <tr>
      <td colspan="2"><strong>TOTALE</strong></td>
      <td><strong>€5.50</strong></td>
    </tr>
  </tfoot>
</table>`}
            language="html"
            showLineNumbers={true}
          />

          <LessonPreview
            title="🔍 Risultato:"
            description="Tabella organizzata in sezioni"
            html={`<table border="1">
  <thead>
    <tr>
      <th>Prodotto</th>
      <th>Quantità</th>
      <th>Prezzo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Penne</td>
      <td>3</td>
      <td>€1.50</td>
    </tr>
    <tr>
      <td>Quaderni</td>
      <td>2</td>
      <td>€4.00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2"><strong>TOTALE</strong></td>
      <td><strong>€5.50</strong></td>
    </tr>
  </tfoot>
</table>`}
          />

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 mt-4">
            <p className="text-sm text-green-900">
              <strong>✅ Vantaggi:</strong><br/>
              • Migliora l'accessibilità<br/>
              • Facilita lo styling con CSS<br/>
              • I browser possono rendere il <code>&lt;thead&gt;</code> fisso durante lo scroll!<br/>
              • Più professionale e semantico
            </p>
          </div>
        </section>

        {/* Colspan e Rowspan */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🔗 Unire Celle: colspan e rowspan</h2>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <p className="text-lg mb-4">
              A volte serve <strong>unire più celle</strong> in una sola, come in Excel quando fai "unisci celle":
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-pink-50 p-4 rounded-lg border-2 border-pink-300">
                <h4 className="font-bold text-pink-900 mb-2">↔️ colspan</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Unisce celle ORIZZONTALMENTE (su più colonne)
                </p>
                <code className="text-xs bg-white px-2 py-1 rounded block">
                  &lt;td colspan="3"&gt;...&lt;/td&gt;
                </code>
                <p className="text-xs text-gray-600 mt-2">Questa cella occupa 3 colonne</p>
              </div>

              <div className="bg-violet-50 p-4 rounded-lg border-2 border-violet-300">
                <h4 className="font-bold text-violet-900 mb-2">↕️ rowspan</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Unisce celle VERTICALMENTE (su più righe)
                </p>
                <code className="text-xs bg-white px-2 py-1 rounded block">
                  &lt;td rowspan="2"&gt;...&lt;/td&gt;
                </code>
                <p className="text-xs text-gray-600 mt-2">Questa cella occupa 2 righe</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">Esempio colspan (orizzontale)</h3>
          <CodeExample
            code={`<table>
  <tr>
    <th colspan="3">Classifica Finale</th>
  </tr>
  <tr>
    <th>Posizione</th>
    <th>Nome</th>
    <th>Punti</th>
  </tr>
  <tr>
    <td>1°</td>
    <td>Mario</td>
    <td>100</td>
  </tr>
  <tr>
    <td>2°</td>
    <td>Luigi</td>
    <td>95</td>
  </tr>
</table>`}
            language="html"
            showLineNumbers={true}
          />

          <LessonPreview
            title="🔍 Risultato colspan:"
            description="Titolo che si espande su 3 colonne"
            html={`<table border="1">
  <tr>
    <th colspan="3">Classifica Finale</th>
  </tr>
  <tr>
    <th>Posizione</th>
    <th>Nome</th>
    <th>Punti</th>
  </tr>
  <tr>
    <td>1°</td>
    <td>Mario</td>
    <td>100</td>
  </tr>
  <tr>
    <td>2°</td>
    <td>Luigi</td>
    <td>95</td>
  </tr>
</table>`}
          />

          <h3 className="text-xl font-bold text-gray-800 mb-3 mt-8">Esempio rowspan (verticale)</h3>
          <CodeExample
            code={`<table>
  <tr>
    <th>Categoria</th>
    <th>Prodotto</th>
    <th>Prezzo</th>
  </tr>
  <tr>
    <td rowspan="2">Frutta</td>
    <td>Mele</td>
    <td>€2.50</td>
  </tr>
  <tr>
    <!-- Categoria è già occupata da rowspan sopra! -->
    <td>Banane</td>
    <td>€1.80</td>
  </tr>
  <tr>
    <td rowspan="2">Verdura</td>
    <td>Pomodori</td>
    <td>€3.00</td>
  </tr>
  <tr>
    <td>Zucchine</td>
    <td>€2.20</td>
  </tr>
</table>`}
            language="html"
            showLineNumbers={true}
          />

          <LessonPreview
            title="🔍 Risultato rowspan:"
            description="Categorie che si espandono verticalmente"
            html={`<table border="1">
  <tr>
    <th>Categoria</th>
    <th>Prodotto</th>
    <th>Prezzo</th>
  </tr>
  <tr>
    <td rowspan="2">Frutta</td>
    <td>Mele</td>
    <td>€2.50</td>
  </tr>
  <tr>
    <td>Banane</td>
    <td>€1.80</td>
  </tr>
  <tr>
    <td rowspan="2">Verdura</td>
    <td>Pomodori</td>
    <td>€3.00</td>
  </tr>
  <tr>
    <td>Zucchine</td>
    <td>€2.20</td>
  </tr>
</table>`}
          />

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mt-4">
            <p className="text-sm text-red-900">
              <strong>⚠️ Attenzione con rowspan:</strong><br/>
              Quando usi rowspan, le righe successive avranno MENO celle!<br/>
              Esempio: se la prima riga ha una cella con rowspan="2", la seconda riga avrà una cella in meno.
            </p>
          </div>
        </section>

        {/* Caption */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📝 Didascalia: &lt;caption&gt;</h2>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <p className="text-lg mb-4">
              Puoi aggiungere un <strong>titolo/descrizione</strong> alla tabella con <code>&lt;caption&gt;</code>:
            </p>
          </div>

          <CodeExample
            code={`<table>
  <caption>Orario Scolastico - Classe 2B</caption>
  <tr>
    <th>Ora</th>
    <th>Lunedì</th>
    <th>Martedì</th>
  </tr>
  <tr>
    <td>8:00</td>
    <td>Matematica</td>
    <td>Italiano</td>
  </tr>
  <tr>
    <td>9:00</td>
    <td>Storia</td>
    <td>Scienze</td>
  </tr>
</table>`}
            language="html"
            showLineNumbers={true}
          />

          <LessonPreview
            title="🔍 Risultato:"
            description="Tabella con didascalia sopra"
            html={`<table border="1">
  <caption><strong>Orario Scolastico - Classe 2B</strong></caption>
  <tr>
    <th>Ora</th>
    <th>Lunedì</th>
    <th>Martedì</th>
  </tr>
  <tr>
    <td>8:00</td>
    <td>Matematica</td>
    <td>Italiano</td>
  </tr>
  <tr>
    <td>9:00</td>
    <td>Storia</td>
    <td>Scienze</td>
  </tr>
</table>`}
          />
        </section>

        {/* Riassunto Tag */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Riassunto: Tutti i Tag delle Tabelle</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left font-bold">Tag</th>
                  <th className="px-6 py-3 text-left font-bold">Nome Completo</th>
                  <th className="px-6 py-3 text-left font-bold">Cosa Fa</th>
                  <th className="px-6 py-3 text-left font-bold">Dove Va</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-mono text-sm bg-blue-50">&lt;table&gt;</td>
                  <td className="px-6 py-4">Table</td>
                  <td className="px-6 py-4">Contenitore tabella</td>
                  <td className="px-6 py-4">Radice</td>
                </tr>
                <tr className="hover:bg-green-50">
                  <td className="px-6 py-4 font-mono text-sm bg-green-50">&lt;caption&gt;</td>
                  <td className="px-6 py-4">Caption</td>
                  <td className="px-6 py-4">Titolo/didascalia</td>
                  <td className="px-6 py-4">Primo figlio di &lt;table&gt;</td>
                </tr>
                <tr className="hover:bg-cyan-50">
                  <td className="px-6 py-4 font-mono text-sm bg-cyan-50">&lt;thead&gt;</td>
                  <td className="px-6 py-4">Table Head</td>
                  <td className="px-6 py-4">Sezione intestazione</td>
                  <td className="px-6 py-4">Dentro &lt;table&gt;</td>
                </tr>
                <tr className="hover:bg-teal-50">
                  <td className="px-6 py-4 font-mono text-sm bg-teal-50">&lt;tbody&gt;</td>
                  <td className="px-6 py-4">Table Body</td>
                  <td className="px-6 py-4">Sezione corpo dati</td>
                  <td className="px-6 py-4">Dentro &lt;table&gt;</td>
                </tr>
                <tr className="hover:bg-emerald-50">
                  <td className="px-6 py-4 font-mono text-sm bg-emerald-50">&lt;tfoot&gt;</td>
                  <td className="px-6 py-4">Table Foot</td>
                  <td className="px-6 py-4">Sezione piè di pagina</td>
                  <td className="px-6 py-4">Dentro &lt;table&gt;</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-mono text-sm bg-purple-50">&lt;tr&gt;</td>
                  <td className="px-6 py-4">Table Row</td>
                  <td className="px-6 py-4">Una riga</td>
                  <td className="px-6 py-4">Dentro sezioni o &lt;table&gt;</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="px-6 py-4 font-mono text-sm bg-orange-50">&lt;th&gt;</td>
                  <td className="px-6 py-4">Table Header</td>
                  <td className="px-6 py-4">Cella intestazione (grassetto)</td>
                  <td className="px-6 py-4">Dentro &lt;tr&gt;</td>
                </tr>
                <tr className="hover:bg-pink-50">
                  <td className="px-6 py-4 font-mono text-sm bg-pink-50">&lt;td&gt;</td>
                  <td className="px-6 py-4">Table Data</td>
                  <td className="px-6 py-4">Cella dati normale</td>
                  <td className="px-6 py-4">Dentro &lt;tr&gt;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Accessibilità */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">♿ Tabelle Accessibili</h2>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-2 border-blue-300">
            <h3 className="font-bold text-blue-900 mb-4 text-lg">🌟 Best Practice per l'Accessibilità</h3>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">1. Usa sempre &lt;th&gt; per le intestazioni</h4>
                <p className="text-sm text-gray-700">Gli screen reader usano &lt;th&gt; per capire la struttura</p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">2. Aggiungi &lt;caption&gt; descrittivo</h4>
                <p className="text-sm text-gray-700">Aiuta tutti a capire immediatamente il contenuto della tabella</p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">3. Usa &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;</h4>
                <p className="text-sm text-gray-700">Struttura semantica chiara = migliore accessibilità</p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">4. Attributo scope (avanzato)</h4>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded">&lt;th scope="col"&gt;</code> per intestazioni colonna<br/>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">&lt;th scope="row"&gt;</code> per intestazioni riga
              </div>
            </div>
          </div>
        </section>

        {/* Esercizio Guidato */}
        <Exercise
          title="🎯 Esercizio Guidato: Tabella Voti Scolastici"
          difficulty="media"
          steps={[
            'Inizia con i tag <table>, <thead>, <tbody>, <tfoot>',
            'Inserisci <caption>Voti Primo Quadrimestre - Classe 2B</caption>',
            'In <thead>, crea una riga con 4 celle <th>: Materia, Ottobre, Novembre, Dicembre',
            'In <tbody>, crea riga con Matematica e voti: 8, 7, 9',
            'Crea righe per Italiano (7, 8, 8), Inglese (9, 9, 8), Storia (6, 7, 7)',
            'Aggiungi ultima riga in <tbody> con Media: 7.5, 7.75, 8',
            'In <tfoot>, crea riga con colspan="3" per "Media Generale:" e cella con 7.75',
            'Usa <strong> per rendere in grassetto i numeri delle medie',
            'Verifica che tutte le intestazioni usino <th> e ci sia il caption'
          ]}
        />

        {/* Challenge */}
        <Challenge
          title="🚀 Challenge: Calendario Mensile Completo"
          difficulty="difficile"
          description="Crea un calendario HTML del mese corrente con una tabella professionale e accessibile."
          requirements={[
            'Caption con mese e anno (es: "Ottobre 2025")',
            'Intestazione con i 7 giorni della settimana (Lun, Mar, Mer, Gio, Ven, Sab, Dom)',
            '4-5 righe per le settimane del mese',
            'Numeri dei giorni nelle celle corrette',
            'Celle vuote per giorni del mese precedente/successivo',
            'Evidenzia in grassetto i weekend (Sabato e Domenica)',
            'Aggiungi nota in <tfoot> con "Giorni di lezione: 20"',
            'Usa <thead>, <tbody>, <tfoot> correttamente',
            'Stile: aggiungi attributo border="1" per vedere i bordi',
            'BONUS: Evidenzia il giorno corrente con sfondo colorato (inline style)',
            'BONUS: Aggiungi eventi in celle specifiche (es: "15 - Verifica Matematica")',
            'BONUS: Usa rowspan o colspan per unire giorni di eventi speciali multi-giorno'
          ]}
          hints={[
            'Inizia disegnando su carta: 7 colonne (giorni) × 5-6 righe (settimane)',
            'I mesi non iniziano sempre di lunedì! Lascia celle vuote all\'inizio',
            'Conta bene i giorni del mese (28, 30 o 31)',
            'Usa <strong> o <b> per evidenziare weekend',
            'Per il BONUS colore: <td style="background-color: yellow;">15</td>',
            'Testa con uno screen reader (VoiceOver su Mac, NVDA su Windows)'
          ]}
        />

        {/* Checklist */}
        <Checklist
          items={[
            'So creare tabelle con <table>, <tr>, <td>',
            'So quando usare <th> invece di <td>',
            'So strutturare tabelle con <thead>, <tbody>, <tfoot>',
            'Capisco cosa fa colspan e quando usarlo',
            'Capisco cosa fa rowspan e quando usarlo',
            'So aggiungere didascalie con <caption>',
            'Conosco tutti gli 8 tag principali delle tabelle',
            'So creare tabelle accessibili per screen reader',
            'Ho completato l\'esercizio della tabella voti',
            'Ho completato il challenge del calendario mensile',
            'Capisco che le tabelle HTML sono SOLO per dati tabulari, non per layout pagina'
          ]}
        />
      </div>
    </LessonLayout>
  );
}
