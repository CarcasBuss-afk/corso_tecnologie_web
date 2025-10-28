import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import LessonPreview from '@/components/didattica/LessonPreview';

export default function Lezione4IDSpaziatura() {
  const lezioni = getLezioniByModuloSlug('modulo-2-css');

  return (
    <LessonLayout
      moduloSlug="modulo-2-css"
      moduloTitolo="Modulo 2: CSS"
      lezioni={lezioni}
      lezioneSlug="lezione-4-id-spaziatura"
      lezioneTitolo="ID + Spaziatura Base"
    >
      <LessonHeader
        numero={4}
        titolo="ID + Spaziatura Base"
        durata="1.5 ore"
        difficolta="facile"
        obiettivi={[
          'Capire cosa sono gli ID e quando usarli',
          'Differenza tra #id (unico) e .classe (riutilizzabile)',
          'Usare padding per creare spazio INTERNO agli elementi',
          'Usare margin per creare spazio ESTERNO tra elementi',
          'Centrare elementi con margin: auto'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🆔 Cos&apos;è un ID?</h2>
        <p className="text-lg mb-4">
          Nella Lezione 3 hai imparato le <strong>classi</strong>, che puoi riutilizzare su tanti elementi.
        </p>
        <p className="text-lg mb-6">
          Ora impari gli <strong>ID</strong>, che sono per elementi <strong>UNICI</strong> nella pagina!
        </p>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">🏷️ Definizione</h3>
          <p className="text-lg mb-3">
            Un <strong>ID</strong> è come un <strong>nome proprio</strong> che dai a un elemento speciale e unico.
          </p>
          <div className="bg-black bg-opacity-20 p-4 rounded border-2 border-white border-opacity-30">
            <p className="font-mono text-lg mb-2 text-yellow-200">#nome-id {'{ proprietà: valore; }'}</p>
            <p className="text-sm">Il cancelletto (#) dice a CSS: &quot;questo è un selettore di ID&quot;</p>
          </div>
        </div>

        {/* Differenza ID vs Classe */}
        <h3 className="text-xl font-bold mb-3">🤔 ID vs Classe: Qual è la Differenza?</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h4 className="font-bold text-blue-700 mb-3 flex items-center gap-2">
              <span className="text-2xl">#</span>
              ID (Unico)
            </h4>
            <ul className="space-y-2">
              <li>✅ Si usa UNA SOLA VOLTA nella pagina</li>
              <li>✅ Per elementi speciali (header, footer, nav...)</li>
              <li>✅ In HTML: <code className="bg-white px-2 py-1 rounded">id=&quot;nome&quot;</code></li>
              <li>✅ In CSS: <code className="bg-white px-2 py-1 rounded">#nome</code></li>
            </ul>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
              <span className="text-2xl">.</span>
              Classe (Riutilizzabile)
            </h4>
            <ul className="space-y-2">
              <li>✅ Si usa su TANTI elementi</li>
              <li>✅ Per stili ripetuti (titolo-grande, testo-rosso...)</li>
              <li>✅ In HTML: <code className="bg-white px-2 py-1 rounded">class=&quot;nome&quot;</code></li>
              <li>✅ In CSS: <code className="bg-white px-2 py-1 rounded">.nome</code></li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
          <h3 className="font-bold text-yellow-700 mb-2">⚡ Regola d&apos;Oro</h3>
          <p><strong>Un ID può esistere solo UNA volta per pagina!</strong> Se hai bisogno dello stesso stile su più elementi, usa una classe.</p>
        </div>
      </section>

      {/* Esempio ID */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">👀 Esempio: ID in Azione</h2>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Come Scriverlo</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML</h4>
            <CodeExample
              language="html"
              code={`<header id="intestazione">
  Logo del Sito
</header>

<nav id="menu-principale">
  Menu di navigazione
</nav>

<main id="contenuto">
  Contenuto principale
</main>

<footer id="pie-pagina">
  Copyright 2025
</footer>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS</h4>
            <CodeExample
              language="css"
              code={`#intestazione {
  background-color: #3498DB;
  color: white;
  text-align: center;
  font-size: 24px;
}

#menu-principale {
  background-color: #2C3E50;
  color: white;
}

#contenuto {
  background-color: #ECF0F1;
  font-size: 16px;
}

#pie-pagina {
  background-color: #34495E;
  color: white;
  text-align: center;
  font-size: 14px;
}`}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Risultato nel Browser</h3>
        <LessonPreview
          title="Layout con ID Unici"
          html={`<style>
  #intestazione {
    background-color: #3498DB;
    color: white;
    text-align: center;
    font-size: 24px;
  }
  #menu-principale {
    background-color: #2C3E50;
    color: white;
  }
  #contenuto {
    background-color: #ECF0F1;
    font-size: 16px;
  }
  #pie-pagina {
    background-color: #34495E;
    color: white;
    text-align: center;
    font-size: 14px;
  }
</style>

<header id="intestazione">Logo del Sito</header>
<nav id="menu-principale">Menu di navigazione</nav>
<main id="contenuto">Contenuto principale</main>
<footer id="pie-pagina">Copyright 2025</footer>`}
        />
      </section>

      {/* Proprietà 1: padding */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">📦 padding - Spazio Interno</h2>
        <p className="text-lg mb-4">
          La proprietà <code className="bg-gray-200 px-2 py-1 rounded">padding</code> crea <strong>spazio DENTRO</strong> l&apos;elemento, tra il contenuto e il bordo.
        </p>

        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">🔍 Cos&apos;è il Padding?</h3>
          <p className="mb-3">Immagina una scatola con del contenuto dentro:</p>
          <ul className="space-y-2">
            <li>📦 <strong>Padding</strong> = imbottitura, spazio tra contenuto e bordo della scatola</li>
            <li>🎁 Più padding = più &quot;aria&quot; intorno al contenuto</li>
            <li>✨ Il background-color riempie anche il padding!</li>
          </ul>
          <div className="bg-black bg-opacity-20 p-4 rounded border-2 border-white border-opacity-30 mt-4">
            <p className="font-mono text-yellow-200">padding: 20px;</p>
            <p className="text-sm mt-1">20px di spazio interno su tutti i lati</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Come Scriverlo</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML</h4>
            <CodeExample
              language="html"
              code={`<div id="senza-padding">
  Senza padding
</div>

<div id="con-padding">
  Con padding
</div>

<div id="tanto-padding">
  Con TANTO padding
</div>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS</h4>
            <CodeExample
              language="css"
              code={`#senza-padding {
  background-color: #E74C3C;
  color: white;
  /* Nessun padding */
}

#con-padding {
  background-color: #3498DB;
  color: white;
  padding: 20px;
}

#tanto-padding {
  background-color: #2ECC71;
  color: white;
  padding: 40px;
}`}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Risultato nel Browser</h3>
        <LessonPreview
          title="Confronto Padding"
          html={`<style>
  #senza-padding {
    background-color: #E74C3C;
    color: white;
  }
  #con-padding {
    background-color: #3498DB;
    color: white;
    padding: 20px;
  }
  #tanto-padding {
    background-color: #2ECC71;
    color: white;
    padding: 40px;
  }
</style>

<div id="senza-padding">Senza padding</div>
<div id="con-padding">Con padding</div>
<div id="tanto-padding">Con TANTO padding</div>`}
        />

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
          <h3 className="font-bold text-blue-700 mb-2">💡 Quando Usare il Padding</h3>
          <ul className="space-y-2">
            <li>✅ Dare &quot;aria&quot; ai bottoni (più facili da cliccare)</li>
            <li>✅ Distanziare testo dai bordi colorati</li>
            <li>✅ Rendere box e card più leggibili</li>
          </ul>
        </div>
      </section>

      {/* Proprietà 2: margin */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">↔️ margin - Spazio Esterno</h2>
        <p className="text-lg mb-4">
          La proprietà <code className="bg-gray-200 px-2 py-1 rounded">margin</code> crea <strong>spazio FUORI</strong> dall&apos;elemento, distanza tra elementi diversi.
        </p>

        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">🔍 Cos&apos;è il Margin?</h3>
          <p className="mb-3">Continuando la metafora della scatola:</p>
          <ul className="space-y-2">
            <li>📏 <strong>Margin</strong> = distanza tra scatole diverse</li>
            <li>🚀 Più margin = più spazio tra elementi</li>
            <li>⚠️ Il background-color NON riempie il margin (è trasparente)</li>
          </ul>
          <div className="bg-black bg-opacity-20 p-4 rounded border-2 border-white border-opacity-30 mt-4">
            <p className="font-mono text-yellow-200">margin: 30px;</p>
            <p className="text-sm mt-1">30px di spazio esterno su tutti i lati</p>
          </div>
        </div>

        {/* Padding vs Margin */}
        <div className="bg-purple-50 border-2 border-purple-500 p-6 rounded-lg mb-6">
          <h3 className="font-bold text-purple-700 mb-3 text-xl">🆚 Padding vs Margin - La Differenza</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold text-purple-600 mb-2">📦 Padding (Interno)</h4>
              <ul className="space-y-1 text-sm">
                <li>• Spazio DENTRO l&apos;elemento</li>
                <li>• Tra contenuto e bordo</li>
                <li>• Sfondo visibile nel padding</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-purple-600 mb-2">↔️ Margin (Esterno)</h4>
              <ul className="space-y-1 text-sm">
                <li>• Spazio FUORI dall&apos;elemento</li>
                <li>• Distanza tra elementi diversi</li>
                <li>• Margin è trasparente</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Come Scriverlo</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML</h4>
            <CodeExample
              language="html"
              code={`<div class="box">Box 1 - Senza margin</div>
<div class="box">Box 2 - Senza margin</div>

<div class="box-margin">Box 3 - Con margin</div>
<div class="box-margin">Box 4 - Con margin</div>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS</h4>
            <CodeExample
              language="css"
              code={`.box {
  background-color: #E67E22;
  color: white;
  padding: 10px;
  /* Nessun margin */
}

.box-margin {
  background-color: #9B59B6;
  color: white;
  padding: 10px;
  margin: 20px;
}`}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Risultato nel Browser</h3>
        <LessonPreview
          title="Confronto Margin"
          html={`<style>
  .box {
    background-color: #E67E22;
    color: white;
    padding: 10px;
  }
  .box-margin {
    background-color: #9B59B6;
    color: white;
    padding: 10px;
    margin: 20px;
  }
</style>

<div class="box">Box 1 - Senza margin</div>
<div class="box">Box 2 - Senza margin</div>

<div class="box-margin">Box 3 - Con margin</div>
<div class="box-margin">Box 4 - Con margin</div>`}
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
          <h3 className="font-bold text-yellow-700 mb-2">📌 Nota Importante</h3>
          <p>Vedi come Box 1 e 2 sono attaccati? E Box 3 e 4 hanno spazio tra loro? Quello è il margin in azione!</p>
        </div>
      </section>

      {/* margin: auto */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎯 margin: auto - Centrare Elementi</h2>
        <p className="text-lg mb-4">
          Un trucco MAGICO: <code className="bg-gray-200 px-2 py-1 rounded">margin: auto</code> centra gli elementi orizzontalmente!
        </p>

        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">✨ Come Funziona</h3>
          <p className="mb-3">
            <code className="bg-black bg-opacity-30 px-2 py-1 rounded">margin: auto</code> dice al browser:
            &quot;Distribuisci lo spazio ai lati in modo AUTOMATICO&quot;
          </p>
          <p className="text-sm">⚠️ <strong>Importante:</strong> Funziona solo se l&apos;elemento ha una larghezza fissa (width)!</p>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempio Pratico: Come Scriverlo</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-bold mb-2">HTML</h4>
            <CodeExample
              language="html"
              code={`<div id="box-non-centrato">
  Non centrato
</div>

<div id="box-centrato">
  Centrato con margin: auto
</div>`}
            />
          </div>
          <div>
            <h4 className="font-bold mb-2">CSS</h4>
            <CodeExample
              language="css"
              code={`#box-non-centrato {
  background-color: #E74C3C;
  color: white;
  padding: 20px;
  /* Nessun margin auto */
}

#box-centrato {
  background-color: #1ABC9C;
  color: white;
  padding: 20px;
  width: 300px;
  margin: auto;
}`}
            />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">Risultato nel Browser</h3>
        <LessonPreview
          title="Centrare con margin: auto"
          html={`<style>
  #box-non-centrato {
    background-color: #E74C3C;
    color: white;
    padding: 20px;
  }
  #box-centrato {
    background-color: #1ABC9C;
    color: white;
    padding: 20px;
    width: 300px;
    margin: auto;
  }
</style>

<div id="box-non-centrato">Non centrato</div>
<div id="box-centrato">Centrato con margin: auto</div>`}
        />

        <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-6">
          <h3 className="font-bold text-green-700 mb-2">🎨 Trucco Pro</h3>
          <p>Vuoi centrare una card, un box, o un contenuto? Usa <code className="bg-gray-200 px-2 py-1 rounded text-gray-800">width</code> + <code className="bg-gray-200 px-2 py-1 rounded text-gray-800">margin: auto</code>!</p>
        </div>
      </section>

      {/* Esempio Completo */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎨 Mettere Tutto Insieme</h2>
        <p className="text-lg mb-6">
          Ora combiniamo ID, padding, margin e margin: auto per creare un layout completo!
        </p>

        <LessonPreview
          title="Layout Completo con ID, Padding e Margin"
          html={`<style>
  #header {
    background-color: #2C3E50;
    color: white;
    text-align: center;
    padding: 30px;
  }

  #container {
    width: 600px;
    margin: auto;
    background-color: #ECF0F1;
    padding: 40px;
  }

  #footer {
    background-color: #34495E;
    color: white;
    text-align: center;
    padding: 20px;
    margin: 30px;
  }
</style>

<div id="header">Il Mio Sito Web</div>
<div id="container">
  Questo contenuto è centrato con margin: auto e ha padding per respirare!
</div>
<div id="footer">Footer con margin tutto intorno</div>`}
        />

        <div className="mt-6">
          <h3 className="text-xl font-bold mb-3">Codice Completo</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">HTML</h4>
              <CodeExample
                language="html"
                code={`<div id="header">
  Il Mio Sito Web
</div>

<div id="container">
  Contenuto centrato!
</div>

<div id="footer">
  Footer con margin
</div>`}
              />
            </div>
            <div>
              <h4 className="font-bold mb-2">CSS</h4>
              <CodeExample
                language="css"
                code={`#header {
  background-color: #2C3E50;
  color: white;
  text-align: center;
  padding: 30px;
}

#container {
  width: 600px;
  margin: auto;
  background-color: #ECF0F1;
  padding: 40px;
}

#footer {
  background-color: #34495E;
  color: white;
  text-align: center;
  padding: 20px;
  margin: 30px;
}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Esercizio */}
      <Exercise
        title="Layout con Header, Nav, Content e Footer"
        steps={[
          'Crea una cartella "layout-id" in VS Code',
          'Crea index.html con struttura base (<!DOCTYPE>, head, body)',
          'Crea 4 sezioni con ID: #header, #nav, #content, #footer',
          'Crea style.css e collegalo',
          '#header: background blu scuro (#2C3E50), testo bianco, padding 30px, text-align center',
          '#nav: background grigio (#95A5A6), testo bianco, padding 15px',
          '#content: width 800px, margin auto (per centrare), padding 40px, background grigio chiaro (#ECF0F1)',
          '#footer: background blu (#3498DB), testo bianco, padding 20px, text-align center, margin 30px sopra',
          'Apri con Live Server e verifica che il contenuto sia centrato',
          'Aggiungi testo in ogni sezione per vedere meglio padding e margin',
          'Cambia i valori di padding e margin per sperimentare!'
        ]}
      />

      {/* Sfida */}
      <Challenge
        title="Pagina Portfolio con Sezioni Uniche"
        description="Crea una pagina portfolio professionale usando ID per tutte le sezioni principali, con padding e margin per un design pulito!"
        requirements={[
          'Crea 5 sezioni con ID unici: #hero, #about, #projects, #skills, #contact',
          '#hero: padding 50px, background colore scuro, testo bianco centrato, font-size grande',
          '#about: width 700px, margin auto, padding 30px, background chiaro',
          '#projects: padding 40px, background colorato a scelta',
          '#skills: width 600px, margin auto, padding 25px',
          '#contact: padding 30px, text-align center, margin 40px sopra',
          'Ogni sezione deve avere colori diversi (usa hex che hai imparato)',
          'Usa padding per dare aria al contenuto',
          'Usa margin per distanziare le sezioni',
          'Usa margin: auto per centrare almeno 2 sezioni',
          'Aggiungi contenuto realistico in ogni sezione (titoli, paragrafi)',
          'Il risultato deve essere visivamente ordinato e professionale'
        ]}
      />

      {/* Checklist */}
      <Checklist
        items={[
          'Capisco la differenza tra ID (unico) e classe (riutilizzabile)',
          'So usare # per selezionare un ID in CSS',
          'So che un ID può esistere solo UNA volta per pagina',
          'Capisco che padding è lo spazio INTERNO (tra contenuto e bordo)',
          'Capisco che margin è lo spazio ESTERNO (tra elementi)',
          'So che il background-color riempie anche il padding',
          'So che il margin è trasparente',
          'So usare margin: auto per centrare elementi',
          'Ricordo che margin: auto funziona solo con width fissa',
          'So combinare ID, padding e margin per creare layout',
          'Ho completato l\'esercizio e la sfida con successo'
        ]}
      />

      {/* Conclusione */}
      <section className="mt-12 bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">🎉 Congratulazioni!</h2>
        <p className="text-xl mb-4">
          Hai appena imparato le basi del <strong>spacing</strong> in CSS e il selettore <strong>#id</strong>!
        </p>
        <p className="text-lg mb-6">
          Padding e margin sono FONDAMENTALI per creare layout professionali.
          Ora sai come dare &quot;aria&quot; ai tuoi elementi e creare spazio tra di loro.
        </p>

        <div className="bg-black bg-opacity-20 p-6 rounded border-2 border-white border-opacity-30 mb-6">
          <p className="font-bold mb-3 text-yellow-200 text-xl">📊 Selettori e Proprietà Totali Imparate</p>

          <div className="mb-4">
            <p className="font-bold text-yellow-200 mb-2">🎯 Selettori CSS (3):</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>elemento (Lezione 2) - <span className="text-sm">seleziona tutti gli elementi di un tipo</span></li>
              <li>.classe (Lezione 3) - <span className="text-sm">riutilizzabile su più elementi</span></li>
              <li>#id (Lezione 4) ✨ NUOVO - <span className="text-sm">unico, solo una volta per pagina</span></li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-yellow-200 mb-2">🎨 Proprietà CSS (9):</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>color (Lezione 1-2) - <span className="text-sm">colore del testo</span></li>
              <li>background-color (Lezione 1-2) - <span className="text-sm">colore di sfondo</span></li>
              <li>border (Lezione 2) - <span className="text-sm">bordo degli elementi</span></li>
              <li>font-size (Lezione 3) - <span className="text-sm">dimensione del testo</span></li>
              <li>font-weight (Lezione 3) - <span className="text-sm">spessore del carattere</span></li>
              <li>text-align (Lezione 3) - <span className="text-sm">allineamento del testo</span></li>
              <li>padding (Lezione 4) ✨ NUOVO - <span className="text-sm">spazio INTERNO</span></li>
              <li>margin (Lezione 4) ✨ NUOVO - <span className="text-sm">spazio ESTERNO</span></li>
              <li>width (Lezione 4) ✨ NUOVO - <span className="text-sm">larghezza elemento</span></li>
            </ul>
          </div>
        </div>

        <div className="bg-green-400 bg-opacity-30 p-4 rounded border-2 border-green-300">
          <p className="font-bold mb-2">🚀 Prossima Lezione</p>
          <p className="text-lg">
            Imparerai proprietà avanzate per lo stile del testo: <strong>font-family</strong>, <strong>text-decoration</strong>, <strong>letter-spacing</strong> e altro!
          </p>
        </div>
      </section>
    </LessonLayout>
  );
}
