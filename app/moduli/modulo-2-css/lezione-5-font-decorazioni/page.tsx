import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import LessonPreview from '@/components/didattica/LessonPreview';

export default function Lezione5FontDecorazioni() {
  const lezioni = getLezioniByModuloSlug('modulo-2-css');

  return (
    <LessonLayout
      moduloSlug="modulo-2-css"
      moduloTitolo="Modulo 2: CSS"
      lezioni={lezioni}
      lezioneSlug="lezione-5-font-decorazioni"
      lezioneTitolo="Font e Decorazioni Testo"
    >
      <LessonHeader
        numero={5}
        titolo="Font e Decorazioni Testo"
        durata="1.5 ore"
        difficolta="facile"
        obiettivi={[
          'Usare font-family per cambiare il tipo di carattere',
          'Conoscere i web safe fonts più comuni',
          'Rendere il testo corsivo con font-style',
          'Decorare il testo con text-decoration (sottolineato, barrato)',
          'Trasformare testo con text-transform (maiuscolo, minuscolo)',
          'Controllare la spaziatura con letter-spacing e word-spacing'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎨 Dai Personalità al Tuo Testo!</h2>
        <p className="text-lg mb-4">
          Finora hai cambiato <strong>dimensioni</strong>, <strong>spessore</strong> e <strong>allineamento</strong> del testo.
        </p>
        <p className="text-lg mb-6">
          Ora impari a cambiare il <strong>tipo di carattere (font)</strong> e ad aggiungere <strong>decorazioni</strong> come sottolineature e corsivo!
        </p>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">✨ Perché è Importante?</h3>
          <ul className="space-y-2">
            <li>🎯 I font giusti rendono il sito più <strong>leggibile</strong></li>
            <li>🎨 Font diversi comunicano <strong>stili diversi</strong> (formale, giocoso, moderno...)</li>
            <li>📱 Le decorazioni aiutano a <strong>evidenziare</strong> parti importanti</li>
            <li>✨ La spaziatura rende il testo più <strong>respirabile</strong> e piacevole</li>
          </ul>
        </div>
      </section>

      {/* Proprietà 1: font-family */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🔤 font-family - Cambiare il Tipo di Carattere</h2>
        <p className="text-lg mb-4">
          La proprietà <code className="bg-gray-200 px-2 py-1 rounded">font-family</code> cambia il <strong>tipo di carattere</strong> (font) del testo.
        </p>

        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">📚 Web Safe Fonts</h3>
          <p className="mb-3">
            I <strong>web safe fonts</strong> sono font disponibili su TUTTI i computer e browser.
          </p>
          <p className="mb-3">Usali per essere sicuro che tutti vedano il testo correttamente!</p>
          <div className="bg-black bg-opacity-20 p-4 rounded border-2 border-white border-opacity-30">
            <p className="font-mono text-yellow-200 mb-1">font-family: Arial, sans-serif;</p>
            <p className="text-sm">Se Arial non c&apos;è, usa un font sans-serif generico</p>
          </div>
        </div>

        {/* Grid Web Safe Fonts */}
        <h3 className="text-xl font-bold mb-3">I Font Web Safe Più Usati</h3>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-bold text-blue-700 mb-2">Sans-Serif (Senza grazie)</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>Arial</strong> - Moderno e pulito</li>
              <li><strong>Helvetica</strong> - Elegante e professionale</li>
              <li><strong>Verdana</strong> - Ottimo per lo schermo</li>
              <li><strong>Tahoma</strong> - Compatto e leggibile</li>
            </ul>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-bold text-purple-700 mb-2">Serif (Con grazie)</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>Times New Roman</strong> - Classico e formale</li>
              <li><strong>Georgia</strong> - Elegante per testi lunghi</li>
              <li><strong>Garamond</strong> - Raffinato e tradizionale</li>
            </ul>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-bold text-green-700 mb-2">Monospace (Spaziatura fissa)</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>Courier New</strong> - Come macchina da scrivere</li>
              <li><strong>Monaco</strong> - Perfetto per codice</li>
            </ul>
          </div>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
            <h4 className="font-bold text-orange-700 mb-2">Corsivi</h4>
            <ul className="space-y-1 text-sm">
              <li><strong>Comic Sans MS</strong> - Giocoso e informale</li>
              <li><strong>Brush Script MT</strong> - Calligrafico</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Come Scriverlo</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML</h4>
            <CodeExample
              language="html"
              code={`<p class="arial">Testo con Arial</p>
<p class="times">Testo con Times</p>
<p class="courier">Testo con Courier</p>
<p class="georgia">Testo con Georgia</p>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS</h4>
            <CodeExample
              language="css"
              code={`.arial {
  font-family: Arial, sans-serif;
}

.times {
  font-family: "Times New Roman", serif;
}

.courier {
  font-family: "Courier New", monospace;
}

.georgia {
  font-family: Georgia, serif;
}`}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Risultato nel Browser</h3>
        <LessonPreview
          title="Confronto Font Diversi"
          html={`<style>
  .arial { font-family: Arial, sans-serif; font-size: 18px; }
  .times { font-family: "Times New Roman", serif; font-size: 18px; }
  .courier { font-family: "Courier New", monospace; font-size: 18px; }
  .georgia { font-family: Georgia, serif; font-size: 18px; }
</style>

<p class="arial">Testo con Arial (sans-serif)</p>
<p class="times">Testo con Times New Roman (serif)</p>
<p class="courier">Testo con Courier New (monospace)</p>
<p class="georgia">Testo con Georgia (serif)</p>`}
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
          <h3 className="font-bold text-yellow-700 mb-2">⚠️ Nota sui Nomi con Spazi</h3>
          <p>Se il nome del font ha spazi (es. &quot;Times New Roman&quot;), mettilo tra virgolette!</p>
          <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">font-family: &quot;Times New Roman&quot;, serif;</code>
        </div>
      </section>

      {/* Proprietà 2: font-style */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">📐 font-style - Corsivo e Normale</h2>
        <p className="text-lg mb-4">
          La proprietà <code className="bg-gray-200 px-2 py-1 rounded">font-style</code> rende il testo <strong>corsivo</strong> (italic).
        </p>

        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">📋 Valori Disponibili</h3>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-black bg-opacity-20 p-3 rounded border-2 border-white border-opacity-30">
              <code className="text-yellow-200 font-bold">normal</code>
              <p className="text-sm mt-1">Testo normale (default)</p>
            </div>
            <div className="bg-black bg-opacity-20 p-3 rounded border-2 border-white border-opacity-30">
              <code className="text-yellow-200 font-bold">italic</code>
              <p className="text-sm mt-1">Testo in corsivo</p>
            </div>
            <div className="bg-black bg-opacity-20 p-3 rounded border-2 border-white border-opacity-30">
              <code className="text-yellow-200 font-bold">oblique</code>
              <p className="text-sm mt-1">Simile a italic (raro)</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Come Scriverlo</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML</h4>
            <CodeExample
              language="html"
              code={`<p class="normale">Testo normale</p>
<p class="corsivo">Testo in corsivo</p>
<p class="citazione">
  "Una citazione importante"
</p>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS</h4>
            <CodeExample
              language="css"
              code={`.normale {
  font-style: normal;
}

.corsivo {
  font-style: italic;
}

.citazione {
  font-style: italic;
  color: #555;
  background-color: #F0F0F0;
}`}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Risultato nel Browser</h3>
        <LessonPreview
          title="font-style: italic"
          html={`<style>
  .normale { font-style: normal; font-size: 18px; }
  .corsivo { font-style: italic; font-size: 18px; }
  .citazione { font-style: italic; color: #555; background-color: #F0F0F0; font-size: 18px; }
</style>

<p class="normale">Testo normale</p>
<p class="corsivo">Testo in corsivo</p>
<p class="citazione">"Una citazione importante"</p>`}
        />

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
          <h3 className="font-bold text-blue-700 mb-2">💡 Quando Usare Italic</h3>
          <ul className="space-y-2">
            <li>✅ Citazioni e virgolettati</li>
            <li>✅ Parole straniere o tecniche</li>
            <li>✅ Enfasi leggera su parole</li>
            <li>✅ Sottotitoli e didascalie</li>
          </ul>
        </div>
      </section>

      {/* Proprietà 3: text-decoration */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">✏️ text-decoration - Sottolineature e Decorazioni</h2>
        <p className="text-lg mb-4">
          La proprietà <code className="bg-gray-200 px-2 py-1 rounded">text-decoration</code> aggiunge <strong>linee</strong> sopra, sotto o attraverso il testo.
        </p>

        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">📋 Valori Disponibili</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-black bg-opacity-20 p-3 rounded border-2 border-white border-opacity-30">
              <code className="text-yellow-200 font-bold">none</code>
              <p className="text-sm mt-1">Nessuna decorazione (default)</p>
            </div>
            <div className="bg-black bg-opacity-20 p-3 rounded border-2 border-white border-opacity-30">
              <code className="text-yellow-200 font-bold">underline</code>
              <p className="text-sm mt-1">Sottolineato</p>
            </div>
            <div className="bg-black bg-opacity-20 p-3 rounded border-2 border-white border-opacity-30">
              <code className="text-yellow-200 font-bold">line-through</code>
              <p className="text-sm mt-1">Barrato (testo cancellato)</p>
            </div>
            <div className="bg-black bg-opacity-20 p-3 rounded border-2 border-white border-opacity-30">
              <code className="text-yellow-200 font-bold">overline</code>
              <p className="text-sm mt-1">Linea sopra (raro)</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Come Scriverlo</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML</h4>
            <CodeExample
              language="html"
              code={`<p class="normale">Testo normale</p>
<p class="sottolineato">Testo sottolineato</p>
<p class="barrato">Testo barrato</p>
<a href="#" class="link-no-underline">
  Link senza sottolineatura
</a>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS</h4>
            <CodeExample
              language="css"
              code={`.normale {
  text-decoration: none;
}

.sottolineato {
  text-decoration: underline;
}

.barrato {
  text-decoration: line-through;
  color: #999;
}

.link-no-underline {
  text-decoration: none;
  color: #3498DB;
}`}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Risultato nel Browser</h3>
        <LessonPreview
          title="text-decoration: underline, line-through"
          html={`<style>
  .normale { text-decoration: none; font-size: 18px; }
  .sottolineato { text-decoration: underline; font-size: 18px; }
  .barrato { text-decoration: line-through; color: #999; font-size: 18px; }
  .link-no-underline { text-decoration: none; color: #3498DB; font-size: 18px; }
</style>

<p class="normale">Testo normale (senza decorazione)</p>
<p class="sottolineato">Testo sottolineato</p>
<p class="barrato">Testo barrato (cancellato)</p>
<a href="#" class="link-no-underline">Link senza sottolineatura</a>`}
        />

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mt-6">
          <h3 className="font-bold text-purple-700 mb-2">🎯 Trucco Pro: Link Puliti</h3>
          <p className="mb-2">I link sono sottolineati di default. Usa <code className="bg-gray-200 text-gray-800 px-2 py-1 rounded">text-decoration: none</code> per togliere la sottolineatura!</p>
          <p className="text-sm">Utile per menu di navigazione e bottoni stilizzati come link.</p>
        </div>
      </section>

      {/* Proprietà 4: text-transform */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🔠 text-transform - Maiuscole e Minuscole</h2>
        <p className="text-lg mb-4">
          La proprietà <code className="bg-gray-200 px-2 py-1 rounded">text-transform</code> trasforma automaticamente il testo in <strong>MAIUSCOLO</strong>, <strong>minuscolo</strong> o <strong>Iniziali Maiuscole</strong>.
        </p>

        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">📋 Valori Disponibili</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-black bg-opacity-20 p-3 rounded border-2 border-white border-opacity-30">
              <code className="text-yellow-200 font-bold">none</code>
              <p className="text-sm mt-1">Nessuna trasformazione</p>
            </div>
            <div className="bg-black bg-opacity-20 p-3 rounded border-2 border-white border-opacity-30">
              <code className="text-yellow-200 font-bold">uppercase</code>
              <p className="text-sm mt-1">TUTTO MAIUSCOLO</p>
            </div>
            <div className="bg-black bg-opacity-20 p-3 rounded border-2 border-white border-opacity-30">
              <code className="text-yellow-200 font-bold">lowercase</code>
              <p className="text-sm mt-1">tutto minuscolo</p>
            </div>
            <div className="bg-black bg-opacity-20 p-3 rounded border-2 border-white border-opacity-30">
              <code className="text-yellow-200 font-bold">capitalize</code>
              <p className="text-sm mt-1">Ogni Parola Inizia Maiuscola</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Come Scriverlo</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML</h4>
            <CodeExample
              language="html"
              code={`<p class="maiuscolo">
  questo diventa maiuscolo
</p>
<p class="minuscolo">
  QUESTO DIVENTA MINUSCOLO
</p>
<p class="capitale">
  ogni parola inizia maiuscola
</p>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS</h4>
            <CodeExample
              language="css"
              code={`.maiuscolo {
  text-transform: uppercase;
}

.minuscolo {
  text-transform: lowercase;
}

.capitale {
  text-transform: capitalize;
}`}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Risultato nel Browser</h3>
        <LessonPreview
          title="text-transform: uppercase, lowercase, capitalize"
          html={`<style>
  .maiuscolo { text-transform: uppercase; font-size: 18px; }
  .minuscolo { text-transform: lowercase; font-size: 18px; }
  .capitale { text-transform: capitalize; font-size: 18px; }
</style>

<p class="maiuscolo">questo diventa maiuscolo</p>
<p class="minuscolo">QUESTO DIVENTA MINUSCOLO</p>
<p class="capitale">ogni parola inizia maiuscola</p>`}
        />

        <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-6">
          <h3 className="font-bold text-green-700 mb-2">💡 Quando Usare text-transform</h3>
          <ul className="space-y-2">
            <li>✅ <strong>uppercase</strong> - Titoli importanti, pulsanti, intestazioni</li>
            <li>✅ <strong>lowercase</strong> - URL, email, codici</li>
            <li>✅ <strong>capitalize</strong> - Nomi propri, titoli di sezioni</li>
          </ul>
        </div>
      </section>

      {/* Proprietà 5 e 6: letter-spacing e word-spacing */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">↔️ Spaziatura: letter-spacing e word-spacing</h2>
        <p className="text-lg mb-4">
          Queste proprietà controllano lo <strong>spazio tra lettere</strong> e lo <strong>spazio tra parole</strong>.
        </p>

        <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">🔍 Due Tipi di Spaziatura</h3>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-black bg-opacity-20 p-4 rounded border-2 border-white border-opacity-30">
              <p className="font-bold text-yellow-200 mb-2">letter-spacing</p>
              <p className="text-sm mb-1">Spazio tra LETTERE</p>
              <code className="text-xs">letter-spacing: 2px;</code>
            </div>
            <div className="bg-black bg-opacity-20 p-4 rounded border-2 border-white border-opacity-30">
              <p className="font-bold text-yellow-200 mb-2">word-spacing</p>
              <p className="text-sm mb-1">Spazio tra PAROLE</p>
              <code className="text-xs">word-spacing: 10px;</code>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Come Scriverlo</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML</h4>
            <CodeExample
              language="html"
              code={`<p class="normale">
  Testo normale senza spaziatura
</p>
<p class="lettere">
  Testo con letter-spacing
</p>
<p class="parole">
  Testo con word-spacing
</p>
<p class="entrambi">
  Testo con entrambe
</p>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS</h4>
            <CodeExample
              language="css"
              code={`.normale {
  /* Nessuna spaziatura extra */
}

.lettere {
  letter-spacing: 3px;
}

.parole {
  word-spacing: 10px;
}

.entrambi {
  letter-spacing: 2px;
  word-spacing: 8px;
}`}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Risultato nel Browser</h3>
        <LessonPreview
          title="letter-spacing e word-spacing"
          html={`<style>
  .normale { font-size: 16px; }
  .lettere { letter-spacing: 3px; font-size: 16px; }
  .parole { word-spacing: 10px; font-size: 16px; }
  .entrambi { letter-spacing: 2px; word-spacing: 8px; font-size: 16px; }
</style>

<p class="normale">Testo normale senza spaziatura extra</p>
<p class="lettere">Testo con letter-spacing 3px</p>
<p class="parole">Testo con word-spacing 10px</p>
<p class="entrambi">Testo con letter-spacing 2px e word-spacing 8px</p>`}
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
          <h3 className="font-bold text-yellow-700 mb-2">⚠️ Non Esagerare!</h3>
          <p>Troppo spacing rende il testo difficile da leggere. Usa valori piccoli (1-5px per letter-spacing, 5-15px per word-spacing).</p>
        </div>
      </section>

      {/* Esempio Completo */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎨 Mettere Tutto Insieme</h2>
        <p className="text-lg mb-6">
          Combiniamo tutte le proprietà per creare uno stile tipografico professionale!
        </p>

        <LessonPreview
          title="Tipografia Completa - Tutte le Proprietà Combinate"
          html={`<style>
  .hero-title {
    font-family: Georgia, serif;
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #2C3E50;
  }

  .subtitle {
    font-family: Arial, sans-serif;
    font-size: 18px;
    font-style: italic;
    text-align: center;
    color: #7F8C8D;
    word-spacing: 5px;
  }

  .link-styled {
    font-family: Verdana, sans-serif;
    font-size: 16px;
    color: #3498DB;
    text-decoration: none;
    text-transform: capitalize;
  }

  .cancellato {
    text-decoration: line-through;
    color: #E74C3C;
  }
</style>

<h1 class="hero-title">Il Mio Portfolio</h1>
<p class="subtitle">Designer creativo e sviluppatore web</p>
<p><a href="#" class="link-styled">scopri i miei progetti</a></p>
<p class="cancellato">Prezzo vecchio: 99€</p>`}
        />

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-3">Codice Completo</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">HTML</h4>
              <CodeExample
                language="html"
                code={`<h1 class="hero-title">
  Il Mio Portfolio
</h1>
<p class="subtitle">
  Designer creativo
</p>
<a href="#" class="link-styled">
  scopri i miei progetti
</a>
<p class="cancellato">
  Prezzo vecchio: 99€
</p>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS</h4>
              <CodeExample
                language="css"
                code={`.hero-title {
  font-family: Georgia, serif;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #2C3E50;
}

.subtitle {
  font-family: Arial, sans-serif;
  font-size: 18px;
  font-style: italic;
  text-align: center;
  color: #7F8C8D;
}

.link-styled {
  color: #3498DB;
  text-decoration: none;
  text-transform: capitalize;
}

.cancellato {
  text-decoration: line-through;
  color: #E74C3C;
}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* HTML vs CSS - Semantica vs Stile */}
      <section className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg border-2 border-orange-200">
        <h2 className="text-3xl font-bold mb-4 text-orange-800">🤔 HTML vs CSS: Quando Usare Cosa?</h2>
        <p className="text-lg mb-4 text-gray-700">
          Hai ragione se ti stai chiedendo: <strong>&quot;Perché esistono sia tag HTML che proprietà CSS per grassetto, corsivo e sottolineato?&quot;</strong>
        </p>
        <p className="text-lg mb-6 text-gray-700">
          Ottima domanda! La risposta è: <strong>HTML dà SIGNIFICATO</strong>, <strong>CSS dà STILE</strong>.
        </p>

        {/* Grid HTML vs CSS */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
            <h3 className="font-bold text-blue-700 mb-3 text-xl flex items-center gap-2">
              📝 HTML - Significato (Semantica)
            </h3>
            <p className="mb-4 text-gray-700">I tag HTML dicono <strong>cosa significa</strong> il testo:</p>
            <ul className="space-y-3">
              <li className="bg-blue-50 p-3 rounded">
                <code className="text-blue-700 font-bold">&lt;strong&gt;</code>
                <p className="text-sm mt-1">= Testo <strong>importante</strong> (enfasi forte)</p>
                <p className="text-xs text-gray-600">Screen reader lo legge con voce più forte</p>
              </li>
              <li className="bg-blue-50 p-3 rounded">
                <code className="text-blue-700 font-bold">&lt;em&gt;</code>
                <p className="text-sm mt-1">= Testo <em>enfatizzato</em> (enfasi leggera)</p>
                <p className="text-xs text-gray-600">Screen reader lo legge con intonazione diversa</p>
              </li>
              <li className="bg-blue-50 p-3 rounded">
                <code className="text-blue-700 font-bold">&lt;del&gt;</code>
                <p className="text-sm mt-1">= Testo <del>cancellato/rimosso</del></p>
                <p className="text-xs text-gray-600">Indica informazione rimossa (es. prezzo vecchio)</p>
              </li>
            </ul>
            <div className="mt-4 bg-blue-100 p-3 rounded">
              <p className="font-bold text-blue-800 text-sm">✅ Pro:</p>
              <ul className="text-xs space-y-1 text-blue-700 ml-4">
                <li>• Accessibile (screen reader capiscono il significato)</li>
                <li>• SEO (Google capisce cosa è importante)</li>
                <li>• Semantica chiara nel codice</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-purple-300">
            <h3 className="font-bold text-purple-700 mb-3 text-xl flex items-center gap-2">
              🎨 CSS - Aspetto (Stile)
            </h3>
            <p className="mb-4 text-gray-700">Le proprietà CSS dicono <strong>come appare</strong> il testo:</p>
            <ul className="space-y-3">
              <li className="bg-purple-50 p-3 rounded">
                <code className="text-purple-700 font-bold">font-weight: bold;</code>
                <p className="text-sm mt-1">= Rendi il testo grassetto (solo visivo)</p>
                <p className="text-xs text-gray-600">Screen reader NON cambia voce</p>
              </li>
              <li className="bg-purple-50 p-3 rounded">
                <code className="text-purple-700 font-bold">font-style: italic;</code>
                <p className="text-sm mt-1">= Rendi il testo corsivo (solo visivo)</p>
                <p className="text-xs text-gray-600">Screen reader NON cambia intonazione</p>
              </li>
              <li className="bg-purple-50 p-3 rounded">
                <code className="text-purple-700 font-bold">text-decoration: line-through;</code>
                <p className="text-sm mt-1">= Disegna una linea sopra il testo</p>
                <p className="text-xs text-gray-600">Solo decorazione visiva</p>
              </li>
            </ul>
            <div className="mt-4 bg-purple-100 p-3 rounded">
              <p className="font-bold text-purple-800 text-sm">✅ Pro:</p>
              <ul className="text-xs space-y-1 text-purple-700 ml-4">
                <li>• Controllo totale sull&apos;aspetto</li>
                <li>• Può cambiare in base al contesto (classi)</li>
                <li>• Separazione tra contenuto e presentazione</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quando usare cosa */}
        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-4">📚 Quando Usare Cosa?</h3>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg text-gray-800">
              <p className="font-bold mb-3 text-lg">1️⃣ Usa HTML quando il testo ha SIGNIFICATO speciale</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-bold text-green-700 mb-2">✅ Esempi:</p>
                  <ul className="ml-4 space-y-1 text-sm">
                    <li>• <code className="bg-green-100 px-2 py-1 rounded">&lt;strong&gt;</code> per avvisi importanti</li>
                    <li>• <code className="bg-green-100 px-2 py-1 rounded">&lt;em&gt;</code> per enfasi concettuale</li>
                    <li>• <code className="bg-green-100 px-2 py-1 rounded">&lt;del&gt;</code> per prezzi vecchi, info rimosse</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-200">
                  <p className="text-xs font-bold text-gray-600 mb-2">HTML:</p>
                  <pre className="text-xs bg-gray-800 text-white p-3 rounded overflow-x-auto"><code>{`<p>
  <strong>Attenzione!</strong>
  Questo è importante.
</p>`}</code></pre>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg text-gray-800">
              <p className="font-bold mb-3 text-lg">2️⃣ Usa CSS quando vuoi SOLO cambiare l&apos;aspetto</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-bold text-purple-700 mb-2">✅ Esempi:</p>
                  <ul className="ml-4 space-y-1 text-sm">
                    <li>• Titoli decorativi in grassetto</li>
                    <li>• Citazioni in corsivo per stile</li>
                    <li>• Link senza sottolineatura</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-200">
                  <p className="text-xs font-bold text-gray-600 mb-2">CSS:</p>
                  <pre className="text-xs bg-gray-800 text-white p-3 rounded overflow-x-auto"><code>{`.titolo-decorativo {
  font-weight: bold;
  font-style: italic;
}`}</code></pre>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg text-gray-800">
              <p className="font-bold mb-3 text-lg">3️⃣ Usa ENTRAMBI per il massimo controllo!</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-bold text-blue-700 mb-2">✅ Best Practice:</p>
                  <ul className="ml-4 space-y-1 text-sm">
                    <li>• HTML per la semantica</li>
                    <li>• CSS per personalizzare lo stile</li>
                    <li>• Accessibilità + Design perfetto</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded border border-gray-200">
                  <p className="text-xs font-bold text-gray-600 mb-2">HTML + CSS:</p>
                  <pre className="text-xs bg-gray-800 text-white p-3 rounded overflow-x-auto"><code>{`<!-- HTML semantico -->
<strong class="avviso">
  Pericolo!
</strong>

/* CSS per stile */
.avviso {
  color: red;
  font-size: 20px;
}`}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Esempio Comparativo */}
        <h3 className="text-xl font-bold mb-3 text-orange-800">👀 Esempio Comparativo</h3>
        <LessonPreview
          title="HTML Semantico vs CSS Visuale - Confronto"
          html={`<style>
  .solo-css-bold { font-weight: bold; }
  .solo-css-italic { font-style: italic; }
  .avviso-semantico { color: #E74C3C; font-size: 18px; background-color: #FADBD8; padding: 10px; }
</style>

<h3>1. Solo HTML (semantico):</h3>
<p><strong>Testo importante con &lt;strong&gt;</strong></p>
<p><em>Testo enfatizzato con &lt;em&gt;</em></p>

<h3>2. Solo CSS (visuale):</h3>
<p class="solo-css-bold">Testo grassetto con CSS font-weight</p>
<p class="solo-css-italic">Testo corsivo con CSS font-style</p>

<h3>3. HTML + CSS (MEGLIO!):</h3>
<p><strong class="avviso-semantico">IMPORTANTE: Questo combina semantica HTML + stile CSS!</strong></p>`}
        />

        {/* Regola Pratica */}
        <div className="mt-6 bg-amber-100 border-l-4 border-amber-500 p-6">
          <h3 className="font-bold text-amber-800 mb-3">🎯 Regola Pratica Semplice</h3>
          <div className="space-y-2 text-gray-800">
            <p>📝 <strong>Chiediti:</strong> &quot;Questo testo è importante per il SIGNIFICATO o solo per l&apos;ASPETTO?&quot;</p>
            <ul className="ml-6 space-y-2 mt-3">
              <li>💡 <strong>Se è IMPORTANTE per il significato</strong> → Usa <code className="bg-amber-200 px-2 py-1 rounded">&lt;strong&gt;</code>, <code className="bg-amber-200 px-2 py-1 rounded">&lt;em&gt;</code>, <code className="bg-amber-200 px-2 py-1 rounded">&lt;del&gt;</code></li>
              <li>🎨 <strong>Se è solo per l&apos;aspetto visivo</strong> → Usa CSS (<code className="bg-amber-200 px-2 py-1 rounded">font-weight</code>, <code className="bg-amber-200 px-2 py-1 rounded">font-style</code>)</li>
              <li>✨ <strong>Vuoi entrambi?</strong> → Combina HTML semantico + classe CSS per lo stile!</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Esercizio */}
      <Exercise
        title="Crea uno Stile Tipografico per un Articolo"
        steps={[
          'Crea una cartella "tipografia-css" in VS Code',
          'Crea index.html con struttura base',
          'Aggiungi un h1 (titolo), un h2 (sottotitolo), 3 paragrafi, una citazione, 2 link',
          'Crea style.css e collegalo',
          'Classe .titolo-principale: font Georgia, 32px, bold, uppercase, letter-spacing 3px, center',
          'Classe .sottotitolo: font Arial, 20px, italic, color #555, center',
          'Classe .testo-articolo: font Verdana, 16px, word-spacing 3px',
          'Classe .citazione: font Georgia, 18px, italic, color #666, background #F5F5F5, text-align center',
          'Classe .link-pulito: text-decoration none, color #3498DB, capitalize',
          'Applica le classi agli elementi HTML corrispondenti',
          'Apri in Live Server e verifica tutti gli stili',
          'Sperimenta cambiando font-family con altri web safe fonts'
        ]}
      />

      {/* Sfida */}
      <Challenge
        title="Pagina Tipografia Creativa - Mostra i Tuoi Stili!"
        description="Crea una pagina che dimostra TUTTE le proprietà tipografiche imparate in questa lezione!"
        requirements={[
          'Crea una pagina "Catalogo Tipografico" con 6-8 sezioni',
          'Sezione 1: Mostra 3 font diversi (Arial, Georgia, Courier)',
          'Sezione 2: Mostra font-style (normale vs italic)',
          'Sezione 3: Mostra text-decoration (normale, underline, line-through)',
          'Sezione 4: Mostra text-transform (uppercase, lowercase, capitalize)',
          'Sezione 5: Mostra letter-spacing (normale, stretto, largo)',
          'Sezione 6: Mostra word-spacing (normale, stretto, largo)',
          'Ogni sezione deve avere un titolo descrittivo e esempi visivi',
          'Usa classi CSS diverse per ogni esempio',
          'Combina almeno 2 proprietà in alcune classi',
          'La pagina deve essere ordinata e facile da leggere',
          'Usa colori e background per rendere gli esempi chiari',
          'Aggiungi almeno 2 link stilizzati senza sottolineatura'
        ]}
      />

      {/* Checklist */}
      <Checklist
        items={[
          'Capisco cos\'è font-family e come cambiare il tipo di carattere',
          'Conosco almeno 5 web safe fonts (Arial, Georgia, Courier, Verdana, Times)',
          'So la differenza tra serif, sans-serif e monospace',
          'So usare font-style: italic per rendere il testo corsivo',
          'So usare text-decoration: underline per sottolineare',
          'So usare text-decoration: line-through per barrare testo',
          'So usare text-decoration: none per togliere sottolineature dai link',
          'So usare text-transform: uppercase per MAIUSCOLO',
          'So usare text-transform: lowercase per minuscolo',
          'So usare text-transform: capitalize per Iniziali Maiuscole',
          'Capisco letter-spacing (spazio tra lettere)',
          'Capisco word-spacing (spazio tra parole)',
          'So combinare più proprietà tipografiche insieme',
          'Ho completato l\'esercizio tipografico',
          'Ho completato la sfida: catalogo tipografico'
        ]}
      />

      {/* Conclusione */}
      <section className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Fantastico Lavoro!</h2>
        <p className="text-xl mb-4">
          Ora hai il controllo COMPLETO sulla <strong>tipografia</strong> dei tuoi siti web!
        </p>
        <p className="text-lg mb-6">
          Font, decorazioni, trasformazioni e spaziatura: sei un maestro del testo CSS!
        </p>

        <div className="bg-black bg-opacity-20 p-6 rounded border-2 border-white border-opacity-30 mb-6">
          <p className="font-bold mb-3 text-yellow-200 text-xl">📊 Selettori e Proprietà Totali Imparate</p>

          <div className="mb-4">
            <p className="font-bold text-yellow-200 mb-2">🎯 Selettori CSS (3):</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>elemento (Lezione 2) - <span className="text-sm">seleziona tutti gli elementi di un tipo</span></li>
              <li>.classe (Lezione 3) - <span className="text-sm">riutilizzabile su più elementi</span></li>
              <li>#id (Lezione 4) - <span className="text-sm">unico, solo una volta per pagina</span></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-yellow-200 mb-2">🎨 Proprietà CSS (15):</p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
              <li>color, background-color (Lezione 1-2)</li>
              <li>border (Lezione 2)</li>
              <li>font-size, font-weight, text-align (Lezione 3)</li>
              <li>padding, margin, width (Lezione 4)</li>
              <li>font-family (Lezione 5) ✨ NUOVO</li>
              <li>font-style (Lezione 5) ✨ NUOVO</li>
              <li>text-decoration (Lezione 5) ✨ NUOVO</li>
              <li>text-transform (Lezione 5) ✨ NUOVO</li>
              <li>letter-spacing (Lezione 5) ✨ NUOVO</li>
              <li>word-spacing (Lezione 5) ✨ NUOVO</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-400 bg-opacity-30 p-4 rounded border-2 border-green-300">
          <p className="font-bold mb-2">🚀 Prossima Lezione</p>
          <p className="text-lg">
            Imparerai a usare <strong>:hover</strong> per link interattivi e le <strong>unità di misura</strong> responsive (em, rem, %, vw, vh)!
          </p>
        </div>
      </section>
    </LessonLayout>
  );
}
