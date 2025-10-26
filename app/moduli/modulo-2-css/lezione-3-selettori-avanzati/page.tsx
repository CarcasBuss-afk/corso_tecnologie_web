import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import LessonPreview from '@/components/didattica/LessonPreview';

export default function Lezione3CSS() {
  const lezioni = getLezioniByModuloSlug('modulo-2-css');

  return (
    <LessonLayout
      moduloSlug="modulo-2-css"
      moduloTitolo="Modulo 2: CSS"
      lezioni={lezioni}
      lezioneSlug="lezione-3-selettori-avanzati"
      lezioneTitolo="Selettori Avanzati"
    >
      <LessonHeader
        numero={3}
        titolo="Selettori Avanzati"
        durata="1.5 ore"
        difficolta="media"
        obiettivi={[
          'Usare selettori discendenti e figli diretti',
          'Combinare più selettori con virgola',
          'Applicare pseudo-classi (:hover, :focus, :nth-child)',
          'Usare pseudo-elementi (::before, ::after)',
          'Capire i combinatori (+, ~)',
          'Calcolare la specificità avanzata'
        ]}
      />

      {/* Intro */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Selettori Più Potenti!</h2>
        <p className="text-lg mb-4">
          Hai imparato i selettori base (elemento, classe, ID). Ora è il momento di <strong>salire di livello</strong>!
        </p>
        <p className="text-lg mb-4">
          I selettori avanzati ti permettono di targettare elementi con <strong>precisione chirurgica</strong>,
          senza dover aggiungere classi ovunque.
        </p>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">🎯 Perché Imparare i Selettori Avanzati?</h3>
          <ul className="space-y-2">
            <li>✓ <strong>Meno HTML sporco</strong> - Non serve class=&quot;...&quot; ovunque</li>
            <li>✓ <strong>Stili dinamici</strong> - Hover, focus, stati interattivi</li>
            <li>✓ <strong>Contenuto generato</strong> - Aggiungere elementi decorativi con CSS</li>
            <li>✓ <strong>Codice più pulito</strong> - Seleziona esattamente ciò che serve</li>
          </ul>
        </div>
      </section>

      {/* Selettori Discendenti */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">1. Selettore Discendente (spazio)</h2>
        <p className="text-lg mb-4">
          Seleziona elementi che sono <strong>dentro</strong> un altro elemento (a qualsiasi livello di profondità).
        </p>

        <CodeExample
          language="css"
          title="Sintassi: genitore discendente"
          code={`/* Seleziona tutti i <p> dentro <div> */
div p {
  color: blue;
}

/* Seleziona tutti i <a> dentro <nav> */
nav a {
  text-decoration: none;
  color: white;
}`}
        />

        <CodeExample
          language="html"
          title="HTML"
          code={`<div>
  <p>Questo p sarà blu</p>
  <section>
    <p>Anche questo p sarà blu (è dentro div)</p>
  </section>
</div>

<p>Questo p NON sarà blu (non è dentro div)</p>`}
        />

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
          <h3 className="font-bold text-blue-700 mb-2">💡 Quando usarlo</h3>
          <p>Perfetto per stilizzare tutti gli elementi di un tipo dentro una sezione specifica.</p>
          <p className="mt-2 text-sm"><strong>Esempio reale:</strong> Tutti i link dentro il nav devono essere bianchi.</p>
        </div>
      </section>

      {/* Selettore Figlio Diretto */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">2. Selettore Figlio Diretto (&gt;)</h2>
        <p className="text-lg mb-4">
          Seleziona elementi che sono <strong>figli DIRETTI</strong> (primo livello) di un genitore.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
            <h3 className="font-bold text-purple-700 mb-2">Discendente (spazio)</h3>
            <code className="text-sm">div p</code>
            <p className="text-sm mt-2">Seleziona TUTTI i p dentro div,<br/>anche se annidati in profondità</p>
          </div>
          <div className="bg-pink-50 p-4 rounded border-l-4 border-pink-500">
            <h3 className="font-bold text-pink-700 mb-2">Figlio Diretto (&gt;)</h3>
            <code className="text-sm">div &gt; p</code>
            <p className="text-sm mt-2">Seleziona SOLO i p che sono<br/>figli diretti di div</p>
          </div>
        </div>

        <CodeExample
          language="css"
          code={`/* Seleziona solo i <p> figli DIRETTI di <div> */
div > p {
  color: red;
}`}
        />

        <CodeExample
          language="html"
          code={`<div>
  <p>ROSSO - figlio diretto</p>
  <section>
    <p>NON rosso - non è figlio diretto di div</p>
  </section>
  <p>ROSSO - figlio diretto</p>
</div>`}
        />
      </section>

      {/* Selettori Multipli */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">3. Selettori Multipli (virgola)</h2>
        <p className="text-lg mb-4">
          Applica gli stessi stili a <strong>più selettori diversi</strong> separandoli con la virgola.
        </p>

        <CodeExample
          language="css"
          title="Invece di ripetere..."
          code={`/* ❌ BRUTTO - codice ripetuto */
h1 {
  font-family: Arial, sans-serif;
  color: navy;
}

h2 {
  font-family: Arial, sans-serif;
  color: navy;
}

h3 {
  font-family: Arial, sans-serif;
  color: navy;
}`}
        />

        <CodeExample
          language="css"
          title="Usa la virgola!"
          code={`/* ✅ BELLO - codice pulito */
h1, h2, h3 {
  font-family: Arial, sans-serif;
  color: navy;
}`}
        />

        <div className="bg-green-50 border-l-4 border-green-500 p-6">
          <h3 className="font-bold text-green-700 mb-2">✅ Regola d&apos;Oro</h3>
          <p>Se più selettori hanno gli stessi stili, <strong>raggruppali con la virgola</strong> per evitare ripetizioni!</p>
        </div>
      </section>

      {/* Pseudo-classi */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">4. Pseudo-classi (:stato)</h2>
        <p className="text-lg mb-4">
          Le pseudo-classi selezionano elementi in uno <strong>stato particolare</strong>. Si usano con i due punti <code className="bg-gray-200 px-2 py-1 rounded">:</code>
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-bold text-blue-700 mb-1">:hover</h3>
            <p className="text-sm">Quando il mouse passa sopra</p>
          </div>
          <div className="bg-green-50 p-4 rounded">
            <h3 className="font-bold text-green-700 mb-1">:active</h3>
            <p className="text-sm">Mentre viene cliccato</p>
          </div>
          <div className="bg-purple-50 p-4 rounded">
            <h3 className="font-bold text-purple-700 mb-1">:focus</h3>
            <p className="text-sm">Quando ha il focus (tab)</p>
          </div>
          <div className="bg-pink-50 p-4 rounded">
            <h3 className="font-bold text-pink-700 mb-1">:visited</h3>
            <p className="text-sm">Link già visitato</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded">
            <h3 className="font-bold text-yellow-700 mb-1">:first-child</h3>
            <p className="text-sm">Primo figlio del genitore</p>
          </div>
          <div className="bg-orange-50 p-4 rounded">
            <h3 className="font-bold text-orange-700 mb-1">:last-child</h3>
            <p className="text-sm">Ultimo figlio del genitore</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">:hover - Effetto al passaggio del mouse</h3>
        <CodeExample
          language="css"
          code={`/* Button che cambia colore al passaggio del mouse */
button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: darkblue;
  transform: scale(1.05);
}`}
        />

        <h3 className="text-xl font-bold mb-3 mt-6">:focus - Per accessibilità</h3>
        <CodeExample
          language="css"
          code={`/* Input con bordo evidenziato quando ha il focus */
input {
  border: 2px solid gray;
  padding: 8px;
}

input:focus {
  border-color: blue;
  outline: 3px solid lightblue;
}`}
        />

        <h3 className="text-xl font-bold mb-3 mt-6">:nth-child() - Seleziona per posizione</h3>
        <CodeExample
          language="css"
          code={`/* Zebra striping - righe alternate colorate */
tr:nth-child(odd) {
  background-color: #f9f9f9;
}

tr:nth-child(even) {
  background-color: white;
}

/* Primo elemento */
li:first-child {
  font-weight: bold;
}

/* Ogni terzo elemento */
div:nth-child(3n) {
  border-left: 4px solid red;
}`}
        />
      </section>

      {/* Pseudo-elementi */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">5. Pseudo-elementi (::parte)</h2>
        <p className="text-lg mb-4">
          I pseudo-elementi creano e stilizzano <strong>parti</strong> di un elemento. Si usano con i due punti doppi <code className="bg-gray-200 px-2 py-1 rounded">::</code>
        </p>

        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-2">🎨 Pseudo-elementi Comuni</h3>
          <div className="grid md:grid-cols-2 gap-3 mt-3">
            <div>
              <code className="bg-white bg-opacity-20 px-2 py-1 rounded">::before</code>
              <p className="text-sm mt-1">Inserisce contenuto PRIMA dell&apos;elemento</p>
            </div>
            <div>
              <code className="bg-white bg-opacity-20 px-2 py-1 rounded">::after</code>
              <p className="text-sm mt-1">Inserisce contenuto DOPO l&apos;elemento</p>
            </div>
            <div>
              <code className="bg-white bg-opacity-20 px-2 py-1 rounded">::first-letter</code>
              <p className="text-sm mt-1">Stilizza la prima lettera</p>
            </div>
            <div>
              <code className="bg-white bg-opacity-20 px-2 py-1 rounded">::first-line</code>
              <p className="text-sm mt-1">Stilizza la prima riga</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">::before e ::after - Contenuto generato</h3>
        <p className="mb-3">Questi pseudo-elementi ti permettono di aggiungere contenuto decorativo con CSS!</p>

        <CodeExample
          language="css"
          code={`/* Aggiunge emoji prima di ogni link */
a::before {
  content: "🔗 ";
}

/* Aggiunge freccia dopo i link esterni */
a[href^="http"]::after {
  content: " →";
  color: blue;
}

/* Quote decorative */
blockquote::before {
  content: """;
  font-size: 4em;
  color: #ccc;
}

blockquote::after {
  content: """;
  font-size: 4em;
  color: #ccc;
}`}
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
          <h3 className="font-bold text-yellow-700 mb-2">⚠️ IMPORTANTE</h3>
          <p>La proprietà <code className="bg-gray-200 px-2 py-1 rounded">content</code> è <strong>OBBLIGATORIA</strong> per ::before e ::after!</p>
          <p className="mt-2 text-sm">Anche se vuoi lasciarlo vuoto, scrivi <code className="bg-gray-200 px-1 rounded">content: &quot;&quot;;</code></p>
        </div>

        <h3 className="text-xl font-bold mb-3 mt-6">::first-letter - Capolettera decorativo</h3>
        <CodeExample
          language="css"
          code={`/* Capolettera grande come nei libri antichi */
p::first-letter {
  font-size: 3em;
  font-weight: bold;
  color: maroon;
  float: left;
  line-height: 0.8;
  margin-right: 5px;
}`}
        />
      </section>

      {/* Combinatori */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">6. Altri Combinatori</h2>

        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-blue-700 mb-2 text-lg">Fratello Adiacente (+)</h3>
            <p className="mb-3">Seleziona l&apos;elemento immediatamente <strong>dopo</strong> un altro elemento (stesso livello).</p>
            <CodeExample
              language="css"
              code={`/* Paragrafo subito dopo un h2 */
h2 + p {
  font-weight: bold;
  color: blue;
}`}
            />
            <CodeExample
              language="html"
              code={`<h2>Titolo</h2>
<p>Questo p sarà blu (subito dopo h2)</p>
<p>Questo p sarà normale</p>`}
            />
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-green-700 mb-2 text-lg">Fratelli Generali (~)</h3>
            <p className="mb-3">Seleziona <strong>tutti</strong> i fratelli dopo un elemento.</p>
            <CodeExample
              language="css"
              code={`/* Tutti i p dopo un h2 (stesso livello) */
h2 ~ p {
  margin-left: 20px;
}`}
            />
            <CodeExample
              language="html"
              code={`<h2>Titolo</h2>
<p>Indentato (fratello dopo h2)</p>
<div>Qualcosa</div>
<p>Anche questo indentato (fratello dopo h2)</p>`}
            />
          </div>
        </div>
      </section>

      {/* Specificità Avanzata */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Specificità Avanzata</h2>
        <p className="text-lg mb-4">
          Con i selettori combinati, la specificità si <strong>somma</strong>!
        </p>

        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">🧮 Formula Specificità</h3>
          <div className="grid md:grid-cols-4 gap-3 text-sm">
            <div className="bg-white bg-opacity-20 p-3 rounded">
              <p className="font-bold">Inline</p>
              <p className="text-2xl">1000</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded">
              <p className="font-bold">ID</p>
              <p className="text-2xl">100</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded">
              <p className="font-bold">Classe/Pseudo</p>
              <p className="text-2xl">10</p>
            </div>
            <div className="bg-white bg-opacity-20 p-3 rounded">
              <p className="font-bold">Elemento</p>
              <p className="text-2xl">1</p>
            </div>
          </div>
        </div>

        <CodeExample
          language="css"
          title="Esempi di calcolo specificità"
          code={`/* Specificità: 1 (un elemento) */
p { }

/* Specificità: 10 (una classe) */
.testo { }

/* Specificità: 11 (una classe + un elemento) */
p.testo { }

/* Specificità: 20 (due classi) */
.importante.evidenziato { }

/* Specificità: 100 (un ID) */
#header { }

/* Specificità: 101 (un ID + un elemento) */
#header p { }

/* Specificità: 111 (un ID + una classe + un elemento) */
#header p.testo { }

/* Specificità: 21 (due classi + un elemento + una pseudo-classe) */
nav.menu a:hover { }`}
        />

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
          <h3 className="font-bold text-purple-700 mb-2">💡 Trucco Pro</h3>
          <p>Se due regole hanno la stessa specificità, vince l&apos;<strong>ultima scritta</strong> nel CSS.</p>
          <p className="mt-2 text-sm">Ordine conta quando la specificità è uguale!</p>
        </div>
      </section>

      {/* Trucco CSS */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">💡 Trucco CSS del Giorno</h3>
          <p className="text-lg mb-2"><strong>Transizioni Smooth con :hover</strong></p>
          <p className="mb-3">Aggiungi <code className="bg-white bg-opacity-20 px-2 py-1 rounded">transition</code> allo stato normale, non a :hover!</p>
          <CodeExample
            language="css"
            code={`/* ✅ GIUSTO - transition nello stato normale */
button {
  background-color: blue;
  transition: all 0.3s ease; /* Qui! */
}

button:hover {
  background-color: darkblue;
  transform: scale(1.1);
}

/* ❌ SBAGLIATO - non funziona bene */
button:hover {
  transition: all 0.3s ease; /* Non qui! */
}`}
          />
        </div>
      </section>

      {/* Exercise */}
      <Exercise
        title="Menu Navigazione Interattivo"
        difficulty="media"
        steps={[
          'Crea un file HTML con nav > ul > li > a (menu con 4 link)',
          'Aggiungi un file CSS collegato',
          'Rimuovi i pallini dalle liste (ul { list-style: none; })',
          'Rendi i li inline o flex per menu orizzontale',
          'Stilizza tutti i link: padding 10px, text-decoration none, color white',
          'Aggiungi sfondo blu al nav',
          'Usa a:hover per cambiare background del link (es: darkblue)',
          'Usa a::before per aggiungere emoji "→ " prima del testo al hover',
          'Usa li:first-child a per dare font-weight bold al primo link',
          'Aggiungi transition 0.3s ai link per animazioni smooth',
          'Testa hover e verifica che le transizioni siano fluide'
        ]}
      />

      {/* Challenge */}
      <Challenge
        title="Card Blog con Pseudo-elementi e Stati"
        description="Crea card blog professionali usando tutti i selettori avanzati che hai imparato!"
        requirements={[
          '3 card con article > h2, p, a (leggi di più)',
          'Usa ::before su h2 per aggiungere icona 📖 prima del titolo',
          'Usa ::after su a per aggiungere freccia → dopo il link',
          'Primo article con :first-child ha bordo sinistro blu 4px',
          'Ultimo article con :last-child ha bordo sinistro rosso 4px',
          'p dentro article ha colore grigio scuro',
          'a:hover con background giallo e transizione smooth',
          'article:hover con ombra (box-shadow: 0 4px 8px rgba(0,0,0,0.1))',
          'Usa ::first-letter su p per capolettera grande',
          'Aggiungi transition su article e a per animazioni fluide'
        ]}
        hint="Inizia con la struttura HTML delle 3 card. Poi aggiungi gli stili base. Infine aggiungi pseudo-classi e pseudo-elementi uno alla volta testando ogni volta!"
      />

      {/* Checklist */}
      <Checklist
        items={[
          'Capisco la differenza tra discendente (spazio) e figlio diretto (>)',
          'So raggruppare selettori con la virgola',
          'So usare :hover per effetti al passaggio del mouse',
          'So usare :focus per accessibilità',
          'Capisco :first-child, :last-child, :nth-child',
          'So usare ::before e ::after con content',
          'Capisco che content è obbligatorio per pseudo-elementi',
          'So usare ::first-letter per capolettera',
          'Capisco i combinatori + (adiacente) e ~ (fratelli)',
          'So calcolare la specificità dei selettori combinati',
          'So che transition va nello stato normale, non in :hover',
          'Ho completato esercizio e sfida con successo'
        ]}
      />

      {/* Conclusione */}
      <section className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Livello Sbloccato!</h2>
        <p className="text-xl mb-4">
          Ora hai un <strong>arsenale completo</strong> di selettori CSS!
        </p>
        <p className="text-lg mb-4">
          Con questi strumenti puoi creare effetti interattivi, contenuti generati,
          e selezionare con precisione qualsiasi elemento senza sporcare l&apos;HTML.
        </p>
        <p className="text-lg font-semibold">
          Nella prossima lezione esploreremo i <strong>COLORI CSS</strong>:
          hex, rgb, hsl, gradienti e teoria del colore! 🌈
        </p>
      </section>
    </LessonLayout>
  );
}
