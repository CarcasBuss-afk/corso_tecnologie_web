import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import LessonPreview from '@/components/didattica/LessonPreview';
import Challenge from '@/components/didattica/Challenge';

export default function Lezione1PrimoJavaScript() {
  const lezioni = getLezioniByModuloSlug('modulo-4-javascript');

  return (
    <LessonLayout
      moduloSlug="modulo-4-javascript"
      moduloTitolo="Modulo 4: JavaScript - Interattività"
      lezioni={lezioni}
      lezioneSlug="lezione-1-primo-javascript"
      lezioneTitolo="Il Primo JavaScript"
    >
      <LessonHeader
        numero={1}
        titolo="Il Primo JavaScript"
        durata="1.5 ore"
        difficolta="facile"
        obiettivi={[
          'Capire dove si scrive JavaScript',
          'Usare console.log() per stampare messaggi',
          'Aprire la Console del browser (F12)',
          'Scrivere commenti nel codice JavaScript'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Benvenuto nel Mondo di JavaScript!</h2>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-8 rounded-lg mb-6">
          <p className="text-xl mb-4">
            Se HTML è lo <strong>scheletro</strong> della pagina e CSS è il <strong>vestito</strong>...
          </p>
          <p className="text-2xl font-bold">
            JavaScript è il <strong>cervello</strong>! 🧠⚡
          </p>
        </div>

        <p className="text-lg mb-4">
          JavaScript è quello che rende le pagine web <strong>vive</strong> e <strong>interattive</strong>.
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="font-bold text-gray-900 mb-2">Instagram</h3>
            <p className="text-gray-600 text-sm">
              Quando clicchi ❤️ e il cuore diventa rosso? JavaScript!
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
            <div className="text-4xl mb-3">🎮</div>
            <h3 className="font-bold text-gray-900 mb-2">Giochi Browser</h3>
            <p className="text-gray-600 text-sm">
              Il personaggio si muove quando premi le frecce? JavaScript!
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <div className="text-4xl mb-3">🛒</div>
            <h3 className="font-bold text-gray-900 mb-2">Shopping Online</h3>
            <p className="text-gray-600 text-sm">
              Il carrello che si aggiorna quando aggiungi prodotti? JavaScript!
            </p>
          </div>
        </div>
      </section>

      {/* Dove scrivere JavaScript */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">📄 Dove Si Scrive JavaScript?</h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
          <p className="font-bold text-blue-800 mb-2">💡 Ricordi il tag &lt;style&gt; per il CSS?</p>
          <p className="text-gray-700">
            JavaScript si scrive dentro il tag <code className="bg-blue-100 px-2 py-1 rounded">&lt;script&gt;</code>,
            di solito alla fine del file HTML, prima di chiudere &lt;/body&gt;.
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3">Struttura HTML con JavaScript</h3>
        <CodeExample
          title="La posizione del tag <script>"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>La Mia Prima Pagina con JavaScript</title>
</head>
<body>

  <h1>Ciao Mondo!</h1>
  <p>Guarda la console per vedere la magia! 🎩✨</p>

  <!-- JavaScript va QUI, alla fine del body -->
  <script>
    // Il tuo codice JavaScript va qui dentro!
    console.log("Ciao dal JavaScript!");
  </script>

</body>
</html>`}
          language="html"
          showLineNumbers
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mt-6">
          <h3 className="font-bold text-yellow-800 mb-2">⚠️ Perché alla fine del &lt;body&gt;?</h3>
          <p className="text-gray-700">
            Così JavaScript può "vedere" tutto l'HTML che c'è prima. È come leggere un libro:
            prima leggi la storia (HTML), poi capisci cosa fare (JavaScript).
          </p>
        </div>
      </section>

      {/* console.log() */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🖨️ Il Tuo Primo Comando: console.log()</h2>

        <p className="text-lg mb-4">
          <code className="bg-gray-100 px-2 py-1 rounded text-blue-600 font-mono">console.log()</code>
          {' '}è il comando più importante per iniziare.
        </p>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">📘 Cosa Fa?</h3>
          <p className="text-lg mb-3">
            <strong>"Stampa questo messaggio nella console del browser"</strong>
          </p>
          <div className="bg-black bg-opacity-20 p-4 rounded border-2 border-white border-opacity-30">
            <p className="font-mono text-lg text-yellow-200">console.log("Il tuo messaggio");</p>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200 mb-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">
            🎮 Pensa a console.log come alla chat di un gioco
          </h3>
          <p className="text-gray-700">
            Quando giochi online e scrivi messaggi che solo i developer (tu!) possono vedere.
            Gli utenti normali NON vedono la console, è il tuo <strong>strumento segreto</strong>! 🔧
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3">Esempi di Utilizzo</h3>
        <CodeExample
          title="Diversi tipi di messaggi"
          code={`// Stampa un messaggio di testo
console.log("Ciao a tutti!");

// Stampa un numero
console.log(42);

// Stampa con emoji (funziona!)
console.log("🚀 Decollo riuscito!");

// Stampa più cose insieme
console.log("Ho", 15, "anni e amo programmare! 💻");`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded mt-6">
          <p className="font-bold text-green-800 mb-2">✅ Regole Importanti</p>
          <ul className="text-gray-700 space-y-2 ml-4">
            <li><strong>Virgolette:</strong> Il testo va tra virgolette: <code className="bg-green-100 px-1 rounded">"così"</code> o <code className="bg-green-100 px-1 rounded">'così'</code></li>
            <li><strong>Punto e virgola:</strong> Ogni comando finisce con <code className="bg-green-100 px-1 rounded">;</code></li>
            <li><strong>Maiuscole/minuscole:</strong> JavaScript è sensibile! <code className="bg-green-100 px-1 rounded">Console.log()</code> NON funziona</li>
            <li><strong>Parentesi:</strong> Apri <code className="bg-green-100 px-1 rounded">(</code> e chiudi <code className="bg-green-100 px-1 rounded">)</code> sempre!</li>
          </ul>
        </div>
      </section>

      {/* Aprire la Console */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🔍 Aprire la Console del Browser</h2>

        <p className="text-lg mb-6">
          La <strong>Console</strong> è una finestra segreta nel browser dove puoi vedere
          i messaggi di <code className="bg-gray-100 px-2 py-1 rounded">console.log()</code>
          {' '}e gli errori del tuo codice.
        </p>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-6">
          <h3 className="text-2xl font-bold mb-4 text-white">🔑 Come Aprire la Console</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-black bg-opacity-30 rounded-lg p-4 border-2 border-white border-opacity-30">
              <p className="font-bold mb-2 text-white">Windows/Linux</p>
              <p className="text-xl font-mono text-white">F12</p>
              <p className="text-sm mt-2 text-white">oppure</p>
              <p className="text-xl font-mono text-white">Ctrl + Shift + I</p>
            </div>
            <div className="bg-black bg-opacity-30 rounded-lg p-4 border-2 border-white border-opacity-30">
              <p className="font-bold mb-2 text-white">Mac</p>
              <p className="text-xl font-mono text-white">Cmd + Option + I</p>
            </div>
            <div className="bg-black bg-opacity-30 rounded-lg p-4 border-2 border-white border-opacity-30">
              <p className="font-bold mb-2 text-white">Oppure</p>
              <p className="text-sm text-white">Click destro sulla pagina</p>
              <p className="text-sm text-white">→ "Ispeziona"</p>
              <p className="text-sm text-white">→ Tab "Console"</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
          <p className="font-bold text-blue-800 mb-2">💡 Pro Tip</p>
          <p className="text-gray-700">
            Lascia sempre la console aperta mentre programmi JavaScript.
            È come avere un pannello di controllo della tua astronave! 🚀
          </p>
        </div>
      </section>

      {/* Commenti */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">💬 Commenti: Le Note per Te Stesso</h2>

        <p className="text-lg mb-4">
          I <strong>commenti</strong> sono note che scrivi per te stesso (o per altri developer).
          JavaScript li ignora completamente!
        </p>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">📝 Due Tipi di Commenti</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black bg-opacity-20 p-4 rounded border-2 border-white border-opacity-30">
              <p className="font-bold text-yellow-200 mb-2">Commento Singolo</p>
              <code className="text-sm text-white">// Commento su una riga</code>
            </div>
            <div className="bg-black bg-opacity-20 p-4 rounded border-2 border-white border-opacity-30">
              <p className="font-bold text-yellow-200 mb-2">Commento Multi-riga</p>
              <code className="text-sm text-white">/* Commento su<br/>più righe */</code>
            </div>
          </div>
        </div>

        <CodeExample
          title="Esempi di Commenti"
          code={`// Questo è un commento su una riga singola
// JavaScript ignora tutto quello che sta dopo //

console.log("Questo codice funziona!"); // Commento alla fine

/*
  Questo è un commento
  su più righe.
  Utile per spiegazioni lunghe!
*/

console.log("Anche questo funziona!");

// console.log("Questo NON viene eseguito");`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200 mt-6">
          <h3 className="text-xl font-bold text-purple-900 mb-3">📌 Quando Usare i Commenti?</h3>
          <ul className="text-gray-700 space-y-2 ml-4">
            <li>• Per spiegare <strong>perché</strong> hai scritto qualcosa</li>
            <li>• Per organizzare sezioni: <code className="bg-purple-100 px-1 rounded">// === SEZIONE ===</code></li>
            <li>• Per "spegnere" temporaneamente del codice</li>
            <li>• Per lasciare note: <code className="bg-purple-100 px-1 rounded">// TODO: migliorare</code></li>
          </ul>
        </div>
      </section>

      {/* Calcoli Matematici */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🧮 Calcoli Matematici in JavaScript</h2>

        <p className="text-lg mb-4">
          JavaScript sa fare calcoli matematici! Puoi usare i numeri direttamente (senza virgolette).
        </p>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-white">➕ Operatori Matematici</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-black bg-opacity-20 p-4 rounded border-2 border-white border-opacity-30">
              <p className="font-mono text-yellow-200">+ addizione</p>
              <p className="font-mono text-yellow-200">- sottrazione</p>
            </div>
            <div className="bg-black bg-opacity-20 p-4 rounded border-2 border-white border-opacity-30">
              <p className="font-mono text-yellow-200">* moltiplicazione</p>
              <p className="font-mono text-yellow-200">/ divisione</p>
            </div>
          </div>
        </div>

        <CodeExample
          title="Esempi di Calcoli"
          code={`// Calcoli semplici
console.log(10 + 5);  // 15
console.log(20 - 8);  // 12
console.log(6 * 7);   // 42
console.log(100 / 4); // 25

// Calcoli con testo
console.log("Ho", 15, "anni");
console.log("Sono circa", 15 * 365, "giorni!");`}
          language="javascript"
          showLineNumbers
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mt-6">
          <p className="font-bold text-yellow-800 mb-2">⚠️ Attenzione!</p>
          <p className="text-gray-700">
            I <strong>numeri NON vanno tra virgolette</strong>. Se scrivi <code className="bg-yellow-100 px-1 rounded">"15"</code> è un testo,
            se scrivi <code className="bg-yellow-100 px-1 rounded">15</code> è un numero che puoi usare nei calcoli!
          </p>
        </div>
      </section>

      {/* Esercizio Guidato */}
      <Exercise
        title="🎯 Esercizio Guidato: La Tua Prima Pagina JavaScript"
        steps={[
          'Crea una cartella "primo-javascript" in VS Code',
          'Dentro la cartella, crea un file "index.html"',
          {
            text: 'Scrivi la struttura HTML base (senza JavaScript ancora)',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Mio Primo JavaScript</title>
</head>
<body>

  <h1>La Console JavaScript</h1>
  <p>Premi F12 e guarda la tab "Console"! 🎉</p>

</body>
</html>`,
            language: 'html',
          },
          'Salva (Ctrl+S) e apri index.html nel browser',
          'Premi F12 per aprire gli strumenti per sviluppatori',
          'Clicca sulla tab "Console" in alto - deve essere vuota per ora',
          {
            text: 'Torna in VS Code e aggiungi il tag <script> alla fine, prima di </body>',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Mio Primo JavaScript</title>
</head>
<body>

  <h1>La Console JavaScript</h1>
  <p>Premi F12 e guarda la tab "Console"! 🎉</p>

  <script>
    // Il mio primo JavaScript!
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [12, 13, 14],
          },
          {
            text: 'Dentro <script>, scrivi il tuo primo console.log con il tuo nome',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Mio Primo JavaScript</title>
</head>
<body>

  <h1>La Console JavaScript</h1>
  <p>Premi F12 e guarda la tab "Console"! 🎉</p>

  <script>
    // Il mio primo JavaScript!
    console.log("Ciao, sono Mario!");
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [14],
          },
          'Salva (Ctrl+S) e ricarica il browser (F5)',
          'Guarda la Console - dovresti vedere il tuo messaggio! 🎉',
          {
            text: 'Aggiungi altri console.log con la tua età e città',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Mio Primo JavaScript</title>
</head>
<body>

  <h1>La Console JavaScript</h1>
  <p>Premi F12 e guarda la tab "Console"! 🎉</p>

  <script>
    // Il mio primo JavaScript!
    console.log("Ciao, sono Mario!");
    console.log("Ho 15 anni");
    console.log("Vivo a Milano");
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [15, 16],
          },
          'Salva (Ctrl+S) e ricarica (F5) - dovresti vedere 3 messaggi nella console!',
          {
            text: 'Aggiungi un commento-sezione e stampa delle emoji',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Mio Primo JavaScript</title>
</head>
<body>

  <h1>La Console JavaScript</h1>
  <p>Premi F12 e guarda la tab "Console"! 🎉</p>

  <script>
    // Il mio primo JavaScript!
    console.log("Ciao, sono Mario!");
    console.log("Ho 15 anni");
    console.log("Vivo a Milano");

    // === LE MIE PASSIONI ===
    console.log("🎮 Videogiochi");
    console.log("⚽ Calcio");
    console.log("💻 Programmazione");
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [18, 19, 20, 21],
          },
          'Salva e ricarica - dovresti vedere anche le emoji! 😊',
          {
            text: 'Aggiungi una sezione con calcoli matematici (età in giorni!)',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Mio Primo JavaScript</title>
</head>
<body>

  <h1>La Console JavaScript</h1>
  <p>Premi F12 e guarda la tab "Console"! 🎉</p>

  <script>
    // Il mio primo JavaScript!
    console.log("Ciao, sono Mario!");
    console.log("Ho 15 anni");
    console.log("Vivo a Milano");

    // === LE MIE PASSIONI ===
    console.log("🎮 Videogiochi");
    console.log("⚽ Calcio");
    console.log("💻 Programmazione");

    // === CALCOLI DIVERTENTI ===
    console.log("Ho vissuto circa", 15 * 365, "giorni!");
    console.log("Sono circa", 15 * 365 * 24, "ore!");
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [23, 24, 25],
          },
          'Salva e ricarica - JavaScript ha calcolato automaticamente i numeri! 🧮',
          {
            text: 'Aggiungi un messaggio finale e una riga vuota per separare le sezioni',
            code: `<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Il Mio Primo JavaScript</title>
</head>
<body>

  <h1>La Console JavaScript</h1>
  <p>Premi F12 e guarda la tab "Console"! 🎉</p>

  <script>
    // === PRESENTAZIONE ===
    console.log("Ciao, sono Mario!");
    console.log("Ho 15 anni");
    console.log("Vivo a Milano");
    console.log(""); // Riga vuota

    // === LE MIE PASSIONI ===
    console.log("🎮 Videogiochi");
    console.log("⚽ Calcio");
    console.log("💻 Programmazione");
    console.log(""); // Riga vuota

    // === CALCOLI DIVERTENTI ===
    console.log("Ho vissuto circa", 15 * 365, "giorni!");
    console.log("Sono circa", 15 * 365 * 24, "ore!");
    console.log(""); // Riga vuota

    // === SALUTI ===
    console.log("🚀 Grazie per aver letto!");
    console.log("👋 A presto!");
  </script>

</body>
</html>`,
            language: 'html',
            highlightLines: [13, 17, 23, 28, 30, 31, 32],
          },
          'Salva e ricarica - la tua presentazione completa è pronta! 🎊',
          'Prova a modificare i valori (nome, età, città, passioni) e ricarica per vedere i cambiamenti'
        ]}
        experiments={[
          'Aggiungi altre passioni/hobby con emoji diverse',
          'Calcola quanti minuti hai vissuto (età * 365 * 24 * 60)',
          'Prova a commentare una riga con // e vedi cosa succede',
          'Cosa succede se scrivi Console.log() con la C maiuscola?',
          'Cosa succede se dimentichi le virgolette intorno al testo?'
        ]}
      />

      {/* Checklist Finale */}
      <section className="mb-12 mt-12">
        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>✅</span> Hai Completato la Lezione!
          </h2>
          <p className="text-gray-700 mb-4">
            Fantastico! Ora sai usare JavaScript e la console come un vero developer! 🎉
          </p>
          <div className="bg-white rounded p-4 border border-green-200">
            <p className="font-bold text-gray-900 mb-2">Cosa hai imparato:</p>
            <ul className="space-y-1 text-gray-700">
              <li>✅ Dove scrivere JavaScript (tag &lt;script&gt;)</li>
              <li>✅ Come usare console.log() per stampare messaggi</li>
              <li>✅ Come aprire la Console del browser (F12)</li>
              <li>✅ Come scrivere commenti in JavaScript</li>
              <li>✅ Come fare calcoli matematici</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sfida Opzionale */}
      <Challenge
        title="Console Art!"
        description="Usa console.log() per disegnare qualcosa nella console usando solo caratteri ed emoji. Esempi: una faccina, un cuore, il tuo nome in ASCII art, una bandiera..."
        requirements={[
          'Usa almeno 5 console.log() per creare il tuo disegno',
          'Usa emoji o caratteri speciali (█ ░ ▓ ■ ● ★ ♥)',
          'Aggiungi commenti per spiegare cosa hai disegnato',
          'Bonus: crea un\'animazione o un pattern ripetuto'
        ]}
        hint="Esempio di cuore: console.log('  ❤️ ❤️    ❤️ ❤️  ');"
      />

      {/* Prossimi Passi */}
      <section className="mb-12">
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Prossimi Passi
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Nella prossima lezione</strong> imparerai a creare <strong>dialoghi con l'utente</strong>
            usando <code className="bg-blue-100 px-2 py-1 rounded">alert()</code>,
            <code className="bg-blue-100 px-2 py-1 rounded">prompt()</code> e
            <code className="bg-blue-100 px-2 py-1 rounded">confirm()</code>.
          </p>
          <p className="text-gray-700">
            Finalmente potrai creare pagine che <strong>parlano</strong> con chi le visita! 💬
          </p>
        </div>
      </section>

    </LessonLayout>
  );
}
