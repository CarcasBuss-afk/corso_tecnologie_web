import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import LessonPreview from '@/components/didattica/LessonPreview';

export default function Lezione2CSS() {
  const lezioni = getLezioniByModuloSlug('modulo-2-css');

  return (
    <LessonLayout
      moduloSlug="modulo-2-css"
      moduloTitolo="Modulo 2: CSS"
      lezioni={lezioni}
      lezioneSlug="lezione-2-selettori-base"
      lezioneTitolo="Selettori Base"
    >
      <LessonHeader
        numero={2}
        titolo="Selettori Base"
        durata="1.5 ore"
        difficolta="facile"
        obiettivi={[
          'Capire cosa sono i selettori CSS',
          'Usare il selettore di elemento (tag)',
          'Usare il selettore classe (.classe)',
          'Usare il selettore ID (#id)',
          'Capire la differenza tra classe e ID',
          'Conoscere il selettore universale (*)',
          'Comprendere la specificità base'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">I Selettori: Scegliere Cosa Stilizzare</h2>
        <p className="text-lg mb-4">
          Nella lezione precedente hai imparato la sintassi CSS: <code className="bg-gray-200 px-2 py-1 rounded">selettore {'{}'} proprietà: valore; {'}'}</code>
        </p>
        <p className="text-lg mb-4">
          Ma come fa il CSS a sapere <strong>quale</strong> elemento HTML stilizzare?
          La risposta sta nei <strong>selettori</strong>!
        </p>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-2">🎯 Cos&apos;è un Selettore?</h3>
          <p className="text-lg">
            Un <strong>selettore</strong> è un pattern che identifica uno o più elementi HTML da stilizzare.
          </p>
          <p className="mt-2">
            Pensa al selettore come a un <strong>puntatore laser</strong> che dice al CSS: &quot;Applica questi stili QUI!&quot;
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
          <h3 className="text-lg font-bold mb-2">📌 Analogia: Inviti a una Festa</h3>
          <p className="mb-2">Immagina di dover invitare persone a una festa:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Tutti i ragazzi</strong> (selettore elemento) → inviti TUTTI i ragazzi</li>
            <li><strong>Persone con maglietta rossa</strong> (selettore classe) → inviti TUTTI quelli con maglietta rossa</li>
            <li><strong>Mario Rossi</strong> (selettore ID) → inviti UNA persona specifica</li>
          </ul>
        </div>
      </section>

      {/* Selettore Elemento */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">1. Selettore di Elemento (Tag)</h2>
        <p className="text-lg mb-4">
          Il selettore più semplice: seleziona <strong>TUTTI</strong> gli elementi di un certo tipo.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
          <h3 className="font-bold text-green-700 mb-2">✅ Quando usarlo</h3>
          <p>Quando vuoi applicare uno stile a <strong>tutti</strong> gli elementi di quel tipo in tutta la pagina.</p>
          <p className="mt-2 text-sm">Esempio: tutti i paragrafi grigi, tutti i titoli h1 blu, tutti i link rossi.</p>
        </div>

        <CodeExample
          language="css"
          title="Esempi Selettore Elemento"
          code={`/* Tutti i paragrafi */
p {
  color: gray;
  font-size: 16px;
}

/* Tutti i titoli h1 */
h1 {
  color: navy;
  font-size: 36px;
}

/* Tutti i link */
a {
  color: blue;
  text-decoration: underline;
}`}
        />

        <CodeExample
          language="html"
          title="HTML da stilizzare"
          code={`<h1>Titolo della Pagina</h1>
<p>Primo paragrafo.</p>
<p>Secondo paragrafo.</p>
<a href="#">Un link</a>`}
        />

        <LessonPreview
          title="Risultato"
          description="Tutti gli elementi dello stesso tipo hanno lo stesso stile"
          html={`<h1 style="color: navy; font-size: 36px;">Titolo della Pagina</h1>
<p style="color: gray; font-size: 16px;">Primo paragrafo.</p>
<p style="color: gray; font-size: 16px;">Secondo paragrafo.</p>
<a href="#" style="color: blue; text-decoration: underline;">Un link</a>`}
        />
      </section>

      {/* Selettore Classe */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">2. Selettore Classe (.classe)</h2>
        <p className="text-lg mb-4">
          Seleziona elementi con un attributo <code className="bg-gray-200 px-2 py-1 rounded">class</code> specifico.
          Usa il punto <code className="bg-gray-200 px-2 py-1 rounded">.</code> davanti al nome della classe.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="font-bold text-blue-700 mb-2">✅ Quando usarlo</h3>
          <p>Quando vuoi stilizzare un <strong>gruppo</strong> di elementi, anche di tipi diversi.</p>
          <p className="mt-2 text-sm">Esempio: pulsanti primari, card importanti, testo in evidenza.</p>
          <p className="mt-2 font-semibold">🔑 Le classi sono <strong>riutilizzabili</strong>: puoi usare la stessa classe su più elementi!</p>
        </div>

        <CodeExample
          language="html"
          title="HTML con classi"
          code={`<p class="importante">Questo è importante!</p>
<p>Questo è normale.</p>
<p class="importante">Anche questo è importante!</p>
<div class="importante">Div importante.</div>`}
        />

        <CodeExample
          language="css"
          title="CSS con selettore classe"
          code={`/* Tutti gli elementi con class="importante" */
.importante {
  color: red;
  font-weight: bold;
  background-color: yellow;
  padding: 10px;
}`}
        />

        <LessonPreview
          title="Risultato"
          description="Solo gli elementi con class='importante' sono stilizzati"
          html={`<p style="color: red; font-weight: bold; background-color: yellow; padding: 10px;">Questo è importante!</p>
<p>Questo è normale.</p>
<p style="color: red; font-weight: bold; background-color: yellow; padding: 10px;">Anche questo è importante!</p>
<div style="color: red; font-weight: bold; background-color: yellow; padding: 10px;">Div importante.</div>`}
        />

        <div className="bg-purple-50 p-6 rounded-lg mt-6">
          <h3 className="font-bold text-purple-700 mb-3">💡 Classi Multiple</h3>
          <p className="mb-3">Un elemento può avere <strong>più classi</strong> separate da spazio!</p>
          <CodeExample
            language="html"
            code={`<p class="testo-grande colore-blu bordo">Paragrafo con 3 classi</p>`}
          />
          <CodeExample
            language="css"
            code={`.testo-grande { font-size: 24px; }
.colore-blu { color: blue; }
.bordo { border: 2px solid black; }`}
          />
        </div>
      </section>

      {/* Selettore ID */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">3. Selettore ID (#id)</h2>
        <p className="text-lg mb-4">
          Seleziona un elemento con un attributo <code className="bg-gray-200 px-2 py-1 rounded">id</code> specifico.
          Usa il cancelletto <code className="bg-gray-200 px-2 py-1 rounded">#</code> davanti al nome dell&apos;ID.
        </p>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
          <h3 className="font-bold text-orange-700 mb-2">⚠️ REGOLA IMPORTANTE</h3>
          <p className="font-semibold text-lg">Un ID deve essere <strong>UNICO</strong> nella pagina!</p>
          <p className="mt-2 text-sm">Non puoi avere due elementi con lo stesso ID. È come il tuo codice fiscale: è unico e identifica solo te!</p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
          <h3 className="font-bold text-yellow-700 mb-2">✅ Quando usarlo</h3>
          <p>Per stilizzare un <strong>singolo elemento specifico</strong> e unico.</p>
          <p className="mt-2 text-sm">Esempio: header principale, footer, menu navigazione, contenitore principale.</p>
        </div>

        <CodeExample
          language="html"
          title="HTML con ID"
          code={`<header id="intestazione-principale">
  <h1>Sito Web</h1>
</header>

<div id="contenuto">
  <p>Contenuto della pagina...</p>
</div>

<footer id="footer-principale">
  <p>© 2025</p>
</footer>`}
        />

        <CodeExample
          language="css"
          title="CSS con selettore ID"
          code={`/* Elemento con id="intestazione-principale" */
#intestazione-principale {
  background-color: navy;
  color: white;
  padding: 20px;
  text-align: center;
}

#contenuto {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

#footer-principale {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 15px;
}`}
        />
      </section>

      {/* Classe vs ID */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Classe vs ID: Qual è la Differenza?</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-500">
            <h3 className="text-xl font-bold text-blue-700 mb-3">📦 CLASSE (.classe)</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Riutilizzabile</strong> - Usala su più elementi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Multipla</strong> - Un elemento può avere più classi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Flessibile</strong> - Usa per gruppi di elementi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">✓</span>
                <span><strong>Specificità bassa</strong> - Facile da sovrascrivere</span>
              </li>
            </ul>
            <div className="mt-4 bg-white p-3 rounded">
              <code className="text-sm">.pulsante {'{}'} /* ... */ {'}'}</code>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-500">
            <h3 className="text-xl font-bold text-orange-700 mb-3">🎯 ID (#id)</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">!</span>
                <span><strong>Unico</strong> - Un solo elemento per pagina</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">!</span>
                <span><strong>Singolo</strong> - Un elemento ha un solo ID</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">!</span>
                <span><strong>Specifico</strong> - Usa per elementi unici</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">!</span>
                <span><strong>Specificità alta</strong> - Difficile da sovrascrivere</span>
              </li>
            </ul>
            <div className="mt-4 bg-white p-3 rounded">
              <code className="text-sm">#header {'{}'} /* ... */ {'}'}</code>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6">
          <h3 className="font-bold text-green-700 mb-2">💡 Regola d&apos;Oro</h3>
          <p className="text-lg font-semibold">Usa le CLASSI per la maggior parte degli stili!</p>
          <p className="mt-2">Gli ID sono utili per elementi unici e per JavaScript, ma per il CSS le classi sono più flessibili.</p>
        </div>
      </section>

      {/* Selettore Universale */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">4. Selettore Universale (*)</h2>
        <p className="text-lg mb-4">
          L&apos;asterisco <code className="bg-gray-200 px-2 py-1 rounded">*</code> seleziona <strong>TUTTI</strong> gli elementi della pagina.
        </p>

        <CodeExample
          language="css"
          title="Selettore Universale"
          code={`/* Seleziona TUTTI gli elementi */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`}
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
          <h3 className="font-bold text-yellow-700 mb-2">⚠️ Usalo con Cautela</h3>
          <p>Il selettore universale applica gli stili a <strong>tutti</strong> gli elementi.</p>
          <p className="mt-2">Utile per reset CSS (azzerare margini e padding di default), ma può rallentare le performance se usato troppo.</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="font-bold text-blue-700 mb-2">✅ Uso Comune: CSS Reset</h3>
          <CodeExample
            language="css"
            code={`/* Reset CSS - si usa spesso all'inizio del file CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Include bordi e padding nella larghezza */
}`}
          />
        </div>
      </section>

      {/* Specificità Base */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Specificità: Chi Vince?</h2>
        <p className="text-lg mb-4">
          Cosa succede se più regole CSS vogliono stilizzare lo stesso elemento? Chi vince?
          La risposta è: <strong>la specificità</strong>!
        </p>

        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">🏆 Classifica Specificità (dal più forte al più debole)</h3>
          <ol className="space-y-2 text-lg">
            <li><strong>1. Inline style</strong> (nell&apos;attributo style) - VINCE SEMPRE</li>
            <li><strong>2. ID</strong> (#id) - Molto forte</li>
            <li><strong>3. Classe, attributo, pseudo-classe</strong> (.classe) - Medio</li>
            <li><strong>4. Elemento</strong> (p, h1, div) - Debole</li>
            <li><strong>5. Universale</strong> (*) - Debolissimo</li>
          </ol>
        </div>

        <CodeExample
          language="html"
          title="HTML"
          code={`<p id="testo-speciale" class="blu" style="color: green;">
  Che colore sarà questo testo?
</p>`}
        />

        <CodeExample
          language="css"
          title="CSS con regole in conflitto"
          code={`/* 4. Elemento - Specificità: 1 */
p {
  color: red;
}

/* 3. Classe - Specificità: 10 */
.blu {
  color: blue;
}

/* 2. ID - Specificità: 100 */
#testo-speciale {
  color: orange;
}

/* 1. Inline vince sempre! */`}
        />

        <div className="bg-green-50 border-l-4 border-green-500 p-6">
          <h3 className="font-bold text-green-700 mb-2">✅ Risultato</h3>
          <p className="text-lg">Il testo sarà <strong className="text-green-600">VERDE</strong>!</p>
          <p className="mt-2">L&apos;inline style (<code>style=&quot;color: green;&quot;</code>) ha la specificità più alta e vince su tutto.</p>
        </div>
      </section>

      {/* Trucco CSS */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">💡 Trucco CSS del Giorno</h3>
          <p className="text-lg mb-2"><strong>Nomi di Classi Descrittivi</strong></p>
          <p className="mb-3">Usa nomi che descrivono <strong>cosa fa</strong> la classe, non come appare.</p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-red-500 bg-opacity-20 p-3 rounded">
              <p className="font-semibold mb-1">❌ Male:</p>
              <code className="text-sm">.testo-rosso</code><br/>
              <code className="text-sm">.grande</code><br/>
              <code className="text-sm">.blu</code>
            </div>
            <div className="bg-green-500 bg-opacity-20 p-3 rounded">
              <p className="font-semibold mb-1">✅ Bene:</p>
              <code className="text-sm">.errore</code><br/>
              <code className="text-sm">.titolo-principale</code><br/>
              <code className="text-sm">.pulsante-primario</code>
            </div>
          </div>
          <p className="mt-3 text-sm">Motivo: Se cambi colore da rosso a arancione, il nome <code>.testo-rosso</code> non ha più senso, ma <code>.errore</code> sì!</p>
        </div>
      </section>

      {/* Exercise */}
      <Exercise
        title="Pratica con i Selettori"
        difficulty="facile"
        steps={[
          'Crea un file index.html con struttura completa',
          'Aggiungi un h1 con il tuo nome',
          'Aggiungi 3 paragrafi: uno normale, uno con class="importante", uno con class="importante evidenziato"',
          'Aggiungi un div con id="contenitore" che contiene tutto',
          'Crea un file style.css e collegalo',
          'Stilizza TUTTI i paragrafi (color: gray, font-size: 16px)',
          'Stilizza la classe .importante (color: red, font-weight: bold)',
          'Stilizza la classe .evidenziato (background-color: yellow, padding: 5px)',
          'Stilizza l\'ID #contenitore (max-width: 600px, margin: 0 auto, padding: 20px)',
          'Aggiungi un reset CSS con * per azzerare margin e padding',
          'Apri nel browser e verifica che gli stili siano applicati correttamente'
        ]}
      />

      {/* Challenge */}
      <Challenge
        title="Card Componenti Riutilizzabili"
        description="Crea un sistema di card riutilizzabili usando le classi CSS. Dimostra di aver capito la differenza tra classi e ID!"
        requirements={[
          'File HTML con 4 card (box con contenuto)',
          'Ogni card ha un titolo, descrizione e immagine (usa https://via.placeholder.com/300x200)',
          'Classe .card per lo stile base di tutte le card (bordo, padding, border-radius)',
          'Classe .card-primaria per card blu',
          'Classe .card-successo per card verde',
          'Classe .card-pericolo per card rossa',
          'Un elemento con ID unico (es: #card-speciale) con stile diverso',
          'Usa classi multiple su almeno una card (es: class="card card-primaria")',
          'File CSS esterno con commenti che spiegano ogni selettore',
          'Tutte le card devono avere layout coerente ma colori diversi'
        ]}
        hint="Inizia creando la classe .card con gli stili comuni (bordo, padding, etc.). Poi crea le classi per i colori che aggiungono solo color/background. Combina le classi nell'HTML!"
      />

      {/* Checklist */}
      <Checklist
        items={[
          'Capisco cosa sono i selettori CSS',
          'So usare il selettore elemento (p, h1, div)',
          'So usare il selettore classe (.classe)',
          'So usare il selettore ID (#id)',
          'Capisco la differenza tra classe e ID',
          'So quando usare classi (riutilizzabili) vs ID (unici)',
          'So che un elemento può avere più classi',
          'So usare il selettore universale (*)',
          'Capisco il concetto base di specificità',
          'So che inline > ID > classe > elemento > universale',
          'Uso nomi di classi descrittivi (non basati sull\'aspetto)',
          'Ho completato l\'esercizio e la sfida con successo'
        ]}
      />

      {/* Conclusione */}
      <section className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Ottimo Lavoro!</h2>
        <p className="text-xl mb-4">
          Ora sai <strong>scegliere con precisione</strong> quali elementi stilizzare!
        </p>
        <p className="text-lg mb-4">
          I selettori sono la base del CSS. Padroneggiandoli, hai il controllo completo sulla presentazione della tua pagina.
        </p>
        <p className="text-lg font-semibold">
          Nella prossima lezione esploreremo i <strong>selettori avanzati</strong>:
          combinatori, pseudo-classi (:hover, :focus) e pseudo-elementi (::before, ::after). 🚀
        </p>
      </section>
    </LessonLayout>
  );
}
