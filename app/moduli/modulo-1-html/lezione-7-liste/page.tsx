import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import LessonPreview from '@/components/didattica/LessonPreview';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import { getLezioniByModuloSlug } from '@/lib/moduli';

export default function Lezione7Page() {
  const lezioni = getLezioniByModuloSlug('modulo-1-html');

  return (
    <LessonLayout
      moduloSlug="modulo-1-html"
      moduloTitolo="Modulo 1: HTML - Le Fondamenta del Web"
      lezioni={lezioni}
      lezioneSlug="lezione-7-liste"
      lezioneTitolo="Liste"
    >
      <LessonHeader
        numero={7}
        titolo="Liste"
        durata="1.5 ore"
        difficolta="facile"
        obiettivi={[
          'Creare liste non ordinate con <ul>',
          'Creare liste ordinate con <ol>',
          'Annidare liste dentro altre liste',
          'Usare attributi per personalizzare le liste',
          'Creare liste di descrizione con <dl>'
        ]}
      />

      <div className="space-y-8">
        {/* Introduzione */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📝 Organizzare le Informazioni</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <p className="text-lg leading-relaxed">
              Hai mai fatto la <strong>lista della spesa</strong>? O una <strong>lista di cose da fare</strong>?
              Le liste sono ovunque nella nostra vita quotidiana perché sono il modo più semplice e chiaro per
              organizzare informazioni!
            </p>
            <p className="text-lg leading-relaxed mt-3">
              In HTML abbiamo <strong>tre tipi di liste</strong> che usiamo ogni giorno sui siti web:
            </p>
            <ul className="mt-4 space-y-2 text-lg">
              <li><strong>📌 Liste non ordinate</strong> - quando l'ordine non è importante (lista della spesa)</li>
              <li><strong>🔢 Liste ordinate</strong> - quando l'ordine è fondamentale (ricetta di cucina)</li>
              <li><strong>📖 Liste di descrizione</strong> - per definire termini o concetti (dizionario)</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-yellow-800 flex items-start gap-2">
              <span className="text-xl">💡</span>
              <span><strong>Fun Fact:</strong> Le liste sono uno degli elementi più usati sul web!
              Anche i menu di navigazione che vedi sui siti sono quasi sempre fatti con liste.</span>
            </p>
          </div>
        </section>

        {/* Liste Non Ordinate */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📌 Liste Non Ordinate (Unordered Lists)</h2>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <p className="text-lg mb-4">
              Le liste non ordinate usano i <strong>pallini</strong> (bullet points) e sono perfette quando
              l'ordine degli elementi non è importante.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">🏷️ Tag &lt;ul&gt;</h4>
                <p className="text-sm text-gray-700">
                  <strong>U</strong>nordered <strong>L</strong>ist - il contenitore della lista
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold text-green-900 mb-2">🏷️ Tag &lt;li&gt;</h4>
                <p className="text-sm text-gray-700">
                  <strong>L</strong>ist <strong>I</strong>tem - ogni singolo elemento della lista
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded border-l-4 border-gray-400">
              <strong>Importante:</strong> I tag <code>&lt;li&gt;</code> devono SEMPRE stare dentro
              un <code>&lt;ul&gt;</code> o <code>&lt;ol&gt;</code>!
            </p>
          </div>

          <CodeExample
            code={`<h3>La mia lista della spesa</h3>
<ul>
  <li>Latte</li>
  <li>Pane</li>
  <li>Uova</li>
  <li>Marmellata</li>
  <li>Formaggio</li>
</ul>`}
            language="html"
            showLineNumbers={true}
          />

          <LessonPreview
            title="🔍 Risultato:"
            html={`<h3>La mia lista della spesa</h3>
<ul>
  <li>Latte</li>
  <li>Pane</li>
  <li>Uova</li>
  <li>Marmellata</li>
  <li>Formaggio</li>
</ul>`}
          />
        </section>

        {/* Liste Ordinate */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🔢 Liste Ordinate (Ordered Lists)</h2>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <p className="text-lg mb-4">
              Le liste ordinate usano i <strong>numeri</strong> e sono perfette quando l'ordine è importante,
              come nelle ricette o nelle istruzioni passo-passo.
            </p>

            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <h4 className="font-bold text-purple-900 mb-2">🏷️ Tag &lt;ol&gt;</h4>
              <p className="text-sm text-gray-700">
                <strong>O</strong>rdered <strong>L</strong>ist - lista numerata automaticamente dal browser
              </p>
            </div>

            <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded border-l-4 border-purple-400">
              <strong>Magia del browser:</strong> Non devi scrivere i numeri! Il browser li aggiunge
              automaticamente. Se aggiungi o rimuovi elementi, i numeri si aggiornano da soli!
            </p>
          </div>

          <CodeExample
            code={`<h3>Come fare una torta al cioccolato</h3>
<ol>
  <li>Preriscalda il forno a 180°C</li>
  <li>Mescola farina, cacao e zucchero</li>
  <li>Aggiungi uova e burro fuso</li>
  <li>Versa l'impasto nella teglia</li>
  <li>Cuoci per 30 minuti</li>
  <li>Lascia raffreddare e gusta!</li>
</ol>`}
            language="html"
            showLineNumbers={true}
          />

          <LessonPreview
            title="🔍 Risultato:"
            html={`<h3>Come fare una torta al cioccolato</h3>
<ol>
  <li>Preriscalda il forno a 180°C</li>
  <li>Mescola farina, cacao e zucchero</li>
  <li>Aggiungi uova e burro fuso</li>
  <li>Versa l'impasto nella teglia</li>
  <li>Cuoci per 30 minuti</li>
  <li>Lascia raffreddare e gusta!</li>
</ol>`}
          />
        </section>

        {/* Quando usare quale lista */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🤔 UL vs OL: Quale Usare?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-300">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="text-3xl">📌</span>
                Usa &lt;ul&gt; quando...
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>L'ordine NON è importante</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Puoi cambiare l'ordine senza problemi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Elenchi generici (spesa, caratteristiche prodotto)</span>
                </li>
              </ul>
              <div className="mt-4 text-sm text-blue-800 bg-blue-50 p-3 rounded">
                <strong>Esempi:</strong> lista spesa, caratteristiche smartphone, ingredienti
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                <span className="text-3xl">🔢</span>
                Usa &lt;ol&gt; quando...
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>L'ordine È importante</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Devi seguire i passi in sequenza</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Istruzioni, ricette, classifiche</span>
                </li>
              </ul>
              <div className="mt-4 text-sm text-purple-800 bg-purple-50 p-3 rounded">
                <strong>Esempi:</strong> ricette, tutorial, top 10, istruzioni montaggio
              </div>
            </div>
          </div>
        </section>

        {/* Liste Annidate */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🪆 Liste Annidate (Liste dentro Liste)</h2>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <p className="text-lg mb-4">
              Puoi mettere una lista <strong>dentro un elemento di un'altra lista</strong>! È come le
              matrioske russe 🪆: una dentro l'altra.
            </p>

            <p className="text-sm text-gray-600 bg-orange-50 p-3 rounded border-l-4 border-orange-400">
              <strong>Trucco:</strong> La lista "figlia" va DENTRO il <code>&lt;li&gt;</code> della
              lista "madre", non dopo!
            </p>
          </div>

          <CodeExample
            code={`<h3>Cose da portare in vacanza</h3>
<ul>
  <li>Vestiti
    <ul>
      <li>T-shirt</li>
      <li>Pantaloncini</li>
      <li>Costume da bagno</li>
    </ul>
  </li>
  <li>Tecnologia
    <ul>
      <li>Smartphone</li>
      <li>Caricabatterie</li>
      <li>Cuffie</li>
    </ul>
  </li>
  <li>Documenti
    <ul>
      <li>Carta d'identità</li>
      <li>Tessera sanitaria</li>
    </ul>
  </li>
</ul>`}
            language="html"
            showLineNumbers={true}
          />

          <LessonPreview
            title="🔍 Risultato:"
            html={`<h3>Cose da portare in vacanza</h3>
<ul>
  <li>Vestiti
    <ul>
      <li>T-shirt</li>
      <li>Pantaloncini</li>
      <li>Costume da bagno</li>
    </ul>
  </li>
  <li>Tecnologia
    <ul>
      <li>Smartphone</li>
      <li>Caricabatterie</li>
      <li>Cuffie</li>
    </ul>
  </li>
  <li>Documenti
    <ul>
      <li>Carta d'identità</li>
      <li>Tessera sanitaria</li>
    </ul>
  </li>
</ul>`}
          />

          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4 mt-4">
            <p className="text-sm text-green-800">
              <strong>👀 Nota bene:</strong> Il browser indenta automaticamente le liste annidate e
              cambia il tipo di pallino per ogni livello! Non devi fare nulla, è tutto automatico.
            </p>
          </div>
        </section>

        {/* Attributi Liste Ordinate */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">⚙️ Attributi delle Liste Ordinate</h2>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <p className="text-lg mb-4">
              Le liste ordinate hanno dei <strong>super-poteri</strong> grazie ad alcuni attributi speciali!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">🔤 type</h4>
              <p className="text-sm text-gray-700 mb-2">Cambia il tipo di numerazione</p>
              <ul className="text-xs space-y-1">
                <li><code>type="1"</code> → 1, 2, 3...</li>
                <li><code>type="A"</code> → A, B, C...</li>
                <li><code>type="a"</code> → a, b, c...</li>
                <li><code>type="I"</code> → I, II, III...</li>
                <li><code>type="i"</code> → i, ii, iii...</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
              <h4 className="font-bold text-green-900 mb-2">🎯 start</h4>
              <p className="text-sm text-gray-700 mb-2">Inizia da un numero specifico</p>
              <div className="text-xs bg-white p-2 rounded">
                <code>start="5"</code><br/>
                Lista inizia da 5 invece che da 1
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
              <h4 className="font-bold text-purple-900 mb-2">🔄 reversed</h4>
              <p className="text-sm text-gray-700 mb-2">Conta al contrario</p>
              <div className="text-xs bg-white p-2 rounded">
                <code>reversed</code><br/>
                Lista al contrario: 5, 4, 3, 2, 1
              </div>
            </div>
          </div>

          <CodeExample
            code={`<!-- Lista con lettere maiuscole -->
<h4>Opzioni menu:</h4>
<ol type="A">
  <li>Antipasto</li>
  <li>Primo piatto</li>
  <li>Secondo piatto</li>
  <li>Dolce</li>
</ol>

<!-- Lista che parte da 10 -->
<h4>Top 3 Film (da classifica top 10):</h4>
<ol start="8">
  <li>Il Signore degli Anelli</li>
  <li>Star Wars</li>
  <li>Avatar</li>
</ol>

<!-- Conto alla rovescia -->
<h4>Lancio del razzo:</h4>
<ol reversed>
  <li>Accensione motori</li>
  <li>Controllo finale</li>
  <li>Tutti a bordo</li>
  <li>DECOLLO! 🚀</li>
</ol>`}
            language="html"
            showLineNumbers={true}
          />

          <LessonPreview
            title="🔍 Risultato:"
            html={`<h4>Opzioni menu:</h4>
<ol type="A">
  <li>Antipasto</li>
  <li>Primo piatto</li>
  <li>Secondo piatto</li>
  <li>Dolce</li>
</ol>

<h4>Top 3 Film (da classifica top 10):</h4>
<ol start="8">
  <li>Il Signore degli Anelli</li>
  <li>Star Wars</li>
  <li>Avatar</li>
</ol>

<h4>Lancio del razzo:</h4>
<ol reversed>
  <li>Accensione motori</li>
  <li>Controllo finale</li>
  <li>Tutti a bordo</li>
  <li>DECOLLO! 🚀</li>
</ol>`}
          />
        </section>

        {/* Liste di Descrizione */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📖 Liste di Descrizione (Description Lists)</h2>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
            <p className="text-lg mb-4">
              Le liste di descrizione sono perfette per <strong>termini e definizioni</strong>, come
              in un dizionario o glossario. Ogni termine ha la sua spiegazione.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-bold text-indigo-900 mb-2">🏷️ &lt;dl&gt;</h4>
                <p className="text-sm text-gray-700">
                  <strong>D</strong>escription <strong>L</strong>ist - il contenitore
                </p>
              </div>

              <div className="bg-cyan-50 p-4 rounded-lg">
                <h4 className="font-bold text-cyan-900 mb-2">🏷️ &lt;dt&gt;</h4>
                <p className="text-sm text-gray-700">
                  <strong>D</strong>escription <strong>T</strong>erm - il termine
                </p>
              </div>

              <div className="bg-teal-50 p-4 rounded-lg">
                <h4 className="font-bold text-teal-900 mb-2">🏷️ &lt;dd&gt;</h4>
                <p className="text-sm text-gray-700">
                  <strong>D</strong>escription <strong>D</strong>etails - la definizione
                </p>
              </div>
            </div>
          </div>

          <CodeExample
            code={`<h3>Glossario HTML</h3>
<dl>
  <dt>HTML</dt>
  <dd>Linguaggio di markup per creare pagine web</dd>

  <dt>Tag</dt>
  <dd>Elemento HTML racchiuso tra parentesi angolari, come &lt;p&gt;</dd>

  <dt>Attributo</dt>
  <dd>Informazione aggiuntiva inserita in un tag, come href in &lt;a&gt;</dd>

  <dt>Browser</dt>
  <dd>Programma che visualizza le pagine web (Chrome, Firefox, Safari...)</dd>
</dl>`}
            language="html"
            showLineNumbers={true}
          />

          <LessonPreview
            title="🔍 Risultato:"
            html={`<h3>Glossario HTML</h3>
<dl>
  <dt>HTML</dt>
  <dd>Linguaggio di markup per creare pagine web</dd>

  <dt>Tag</dt>
  <dd>Elemento HTML racchiuso tra parentesi angolari, come &lt;p&gt;</dd>

  <dt>Attributo</dt>
  <dd>Informazione aggiuntiva inserita in un tag, come href in &lt;a&gt;</dd>

  <dt>Browser</dt>
  <dd>Programma che visualizza le pagine web (Chrome, Firefox, Safari...)</dd>
</dl>`}
          />

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-yellow-800">
              <strong>💡 Quando usarle:</strong> Liste di descrizione sono perfette per FAQ (domande frequenti),
              glossari, specifiche tecniche di prodotti, o qualsiasi situazione con coppie termine-definizione.
            </p>
          </div>
        </section>

        {/* Tabella Riassuntiva */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Riassunto: Tutti i Tag delle Liste</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left font-bold">Tag</th>
                  <th className="px-6 py-3 text-left font-bold">Nome Completo</th>
                  <th className="px-6 py-3 text-left font-bold">Cosa Fa</th>
                  <th className="px-6 py-3 text-left font-bold">Quando Usarlo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-blue-50">
                  <td className="px-6 py-4 font-mono text-sm bg-blue-50">&lt;ul&gt;</td>
                  <td className="px-6 py-4">Unordered List</td>
                  <td className="px-6 py-4">Lista con pallini</td>
                  <td className="px-6 py-4">Ordine non importante</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="px-6 py-4 font-mono text-sm bg-purple-50">&lt;ol&gt;</td>
                  <td className="px-6 py-4">Ordered List</td>
                  <td className="px-6 py-4">Lista numerata</td>
                  <td className="px-6 py-4">Ordine importante</td>
                </tr>
                <tr className="hover:bg-green-50">
                  <td className="px-6 py-4 font-mono text-sm bg-green-50">&lt;li&gt;</td>
                  <td className="px-6 py-4">List Item</td>
                  <td className="px-6 py-4">Singolo elemento lista</td>
                  <td className="px-6 py-4">Dentro &lt;ul&gt; o &lt;ol&gt;</td>
                </tr>
                <tr className="hover:bg-indigo-50">
                  <td className="px-6 py-4 font-mono text-sm bg-indigo-50">&lt;dl&gt;</td>
                  <td className="px-6 py-4">Description List</td>
                  <td className="px-6 py-4">Lista di descrizioni</td>
                  <td className="px-6 py-4">Termini + definizioni</td>
                </tr>
                <tr className="hover:bg-cyan-50">
                  <td className="px-6 py-4 font-mono text-sm bg-cyan-50">&lt;dt&gt;</td>
                  <td className="px-6 py-4">Description Term</td>
                  <td className="px-6 py-4">Il termine da definire</td>
                  <td className="px-6 py-4">Dentro &lt;dl&gt;</td>
                </tr>
                <tr className="hover:bg-teal-50">
                  <td className="px-6 py-4 font-mono text-sm bg-teal-50">&lt;dd&gt;</td>
                  <td className="px-6 py-4">Description Details</td>
                  <td className="px-6 py-4">La definizione/spiegazione</td>
                  <td className="px-6 py-4">Dentro &lt;dl&gt;, dopo &lt;dt&gt;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Esercizio Guidato */}
        <Exercise
          title="🎯 Esercizio Guidato: Menu Ristorante"
          difficulty="facile"
          steps={[
            'Aggiungi un titolo H2 "Menu del Giorno"',
            'Usa <ol> per creare una lista ordinata delle portate',
            'Crea 4 elementi <li>: Antipasto, Primo, Secondo, Dolce',
            'Dentro "Antipasto", crea una <ul> con 3 antipasti a scelta',
            'Dentro "Primo", crea una <ul> con 3 primi piatti',
            'Dentro "Secondo", crea una <ul> con 3 secondi piatti',
            'Dentro "Dolce", crea una <ul> con 3 dolci',
            'Dopo la lista ordinata, aggiungi un H3 "Bevande" e una <ul> con 5 bevande',
            'Crea un H3 "Allergie" e usa <dl> per definire 3 allergeni comuni (es: Glutine, Lattosio, Frutta a guscio)',
            'Salva il file e apri nel browser. Verifica che le liste siano ben annidate e leggibili'
          ]}
        />

        {/* Challenge */}
        <Challenge
          title="🚀 Challenge: Guida Turistica della Tua Città"
          description="Crea una pagina web completa che presenti una guida turistica della tua città (o città preferita)."
          requirements={[
            'Titolo H1 con nome della città',
            'Sezione "Top 5 Attrazioni" con lista ORDINATA (classifica)',
            'Sezione "Cosa portare" con lista NON ORDINATA annidata (categorie: vestiti, tech, documenti)',
            'Sezione "Itinerario 3 giorni" con lista ORDINATA dei giorni, ognuno con sottolista NON ORDINATA di attività',
            'Sezione "Glossario dialetto locale" con lista di DESCRIZIONE (almeno 5 parole in dialetto con traduzione)',
            'Sezione "Ristoranti consigliati" con lista NON ORDINATA per categoria (pizzerie, trattorie, gelaterie)',
            'Usa almeno una lista con attributo type="A" o type="I"',
            'Usa almeno una lista con start diverso da 1',
            'Aggiungi intestazioni H2/H3 appropriate per ogni sezione',
            'Usa grassetto, corsivo e altri tag di formattazione dove opportuno',
            'BONUS: Aggiungi una lista con attributo reversed per un conto alla rovescia',
            'BONUS: Inserisci link e immagini nelle liste'
          ]}
          hint="Pianifica la struttura prima di scrivere il codice • Le liste annidate vanno DENTRO il <li>, non dopo • Usa liste ordinate quando l'ordine conta (itinerari, classifiche) • Usa liste non ordinate per raggruppare elementi senza priorità • Le liste di descrizione sono perfette per glossari e FAQ • Puoi mescolare <ul> dentro <ol> e viceversa!"
        />

        {/* Checklist */}
        <Checklist
          items={[
            'So creare liste non ordinate con <ul> e <li>',
            'So creare liste ordinate con <ol> e <li>',
            'Capisco la differenza tra quando usare <ul> e quando usare <ol>',
            'So annidare liste dentro altre liste correttamente',
            'So usare gli attributi type, start, e reversed nelle liste ordinate',
            'So creare liste di descrizione con <dl>, <dt>, e <dd>',
            'So quando usare le liste di descrizione (glossari, FAQ)',
            'Ho completato l\'esercizio guidato del menu ristorante',
            'Ho completato il challenge della guida turistica',
            'So che le liste sono uno degli elementi più usati sul web (anche per i menu!)'
          ]}
        />
      </div>
    </LessonLayout>
  );
}
