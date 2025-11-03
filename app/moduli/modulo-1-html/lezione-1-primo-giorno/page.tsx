import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import LessonPreview from '@/components/didattica/LessonPreview';
import { getLezioniByModuloSlug } from '@/lib/moduli';

export default function Lezione1() {
  const lezioni = getLezioniByModuloSlug('modulo-1-html');

  return (
    <LessonLayout
      moduloSlug="modulo-1-html"
      moduloTitolo="Modulo 1: HTML"
      lezioni={lezioni}
      lezioneSlug="lezione-1-primo-giorno"
      lezioneTitolo="Il Primo Giorno - Ciao Web!"
    >
      <LessonHeader
        numero={1}
        titolo="Il Primo Giorno - Ciao Web!"
        durata="2 ore"
        difficolta="facile"
        obiettivi={[
          'Capire cos\'è l\'HTML e a cosa serve',
          'Conoscere la struttura base di una pagina HTML',
          'Creare il tuo primo file HTML',
          'Visualizzare la tua pagina nel browser',
        ]}
      />

      <section className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Cos'è l'HTML?</h2>

        <p className="text-gray-700 mb-4">
          Hey! Benvenuto nel mondo del web! 🎉
        </p>

        <p className="text-gray-700 mb-4">
          Hai mai pensato a come sono fatte le pagine web che usi ogni giorno?
          Instagram, YouTube, TikTok... tutte queste app e siti web sono costruiti
          con qualcosa chiamato <strong>HTML</strong>.
        </p>

        <p className="text-gray-700 mb-4">
          HTML sta per <em>HyperText Markup Language</em> (ma non serve ricordarlo!).
          Pensa all'HTML come alla <strong>struttura di una casa</strong>: è lo scheletro,
          le mura, le stanze. Senza HTML, un sito web non esisterebbe!
        </p>

        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 my-6">
          <p className="text-gray-700 font-semibold">💡 In poche parole:</p>
          <p className="text-gray-700">
            HTML è il linguaggio che usiamo per dire al browser (Chrome, Firefox, Safari...)
            cosa mostrare sullo schermo: testi, immagini, video, link e tutto il resto!
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">La Struttura Base</h2>

        <p className="text-gray-700 mb-4">
          Ogni pagina HTML ha una struttura base, come le fondamenta di una casa.
          Ecco come appare:
        </p>

        <CodeExample
          title="La struttura base di ogni pagina HTML"
          code={`<!DOCTYPE html>
<html>
  <head>
    <title>La mia prima pagina</title>
  </head>
  <body>
    <h1>Ciao, mondo!</h1>
    <p>Questa è la mia prima pagina web!</p>
  </body>
</html>`}
        />

        <p className="text-gray-700 mb-4">
          Vediamo cosa significa ogni pezzo:
        </p>

        <ul className="space-y-3 mb-6">
          <li className="text-gray-700">
            <code className="bg-gray-100 px-2 py-1 rounded">&lt;!DOCTYPE html&gt;</code> -
            Dice al browser: "Ehi, questo è un file HTML!"
          </li>
          <li className="text-gray-700">
            <code className="bg-gray-100 px-2 py-1 rounded">&lt;html&gt;</code> -
            Inizia la pagina HTML (tutto il resto va dentro)
          </li>
          <li className="text-gray-700">
            <code className="bg-gray-100 px-2 py-1 rounded">&lt;head&gt;</code> -
            Informazioni "nascoste" sulla pagina (come il titolo nella tab del browser)
          </li>
          <li className="text-gray-700">
            <code className="bg-gray-100 px-2 py-1 rounded">&lt;title&gt;</code> -
            Il titolo che appare nella tab del browser
          </li>
          <li className="text-gray-700">
            <code className="bg-gray-100 px-2 py-1 rounded">&lt;body&gt;</code> -
            Qui va tutto quello che vuoi far vedere sulla pagina!
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">I Tag HTML</h2>

        <p className="text-gray-700 mb-4">
          Hai notato quelle cose con <code className="bg-gray-100 px-2 py-1 rounded">&lt;&gt;</code>?
          Si chiamano <strong>tag</strong>!
        </p>

        <p className="text-gray-700 mb-4">
          I tag funzionano così:
        </p>

        <ul className="space-y-2 mb-6">
          <li className="text-gray-700">
            • Si aprono: <code className="bg-gray-100 px-2 py-1 rounded">&lt;h1&gt;</code>
          </li>
          <li className="text-gray-700">
            • Contengono del contenuto: <code className="bg-gray-100 px-2 py-1 rounded">Il mio testo</code>
          </li>
          <li className="text-gray-700">
            • Si chiudono: <code className="bg-gray-100 px-2 py-1 rounded">&lt;/h1&gt;</code>
            (nota la barra <code>/</code>)
          </li>
        </ul>

        <CodeExample
          title="Esempio di tag"
          code={`<h1>Questo è un titolo grande</h1>
<p>Questo è un paragrafo di testo normale.</p>`}
        />

        <LessonPreview
          title="🔍 Ecco come appare nel browser:"
          html={`<h1>Questo è un titolo grande</h1>
<p>Questo è un paragrafo di testo normale.</p>`}
        />

        <Exercise
          title="Esercizio Guidato: La Tua Prima Pagina"
          difficulty="facile"
          steps={[
            'Apri Visual Studio Code sul tuo computer',
            'Vai su File → Nuovo File (oppure premi Ctrl+N su Windows o Cmd+N su Mac)',
            'Salva il file: File → Salva con nome... e chiamalo "prima-pagina.html"',
            {
              text: 'Scrivi la struttura base HTML nel tuo file',
              code: `<!DOCTYPE html>
<html>
  <head>
    <title>La mia prima pagina</title>
  </head>
  <body>

  </body>
</html>`,
            },
            {
              text: 'Dentro il tag <body>, aggiungi un titolo con il tuo nome',
              code: `<!DOCTYPE html>
<html>
  <head>
    <title>La mia prima pagina</title>
  </head>
  <body>
    <h1>Ciao, sono Marco!</h1>
  </body>
</html>`,
              highlightLines: [7], // Evidenzia la riga nuova
            },
            {
              text: 'Sotto il titolo, aggiungi un paragrafo di presentazione',
              code: `<!DOCTYPE html>
<html>
  <head>
    <title>La mia prima pagina</title>
  </head>
  <body>
    <h1>Ciao, sono Marco!</h1>
    <p>Questa è la mia prima pagina web e sono super fiero!</p>
  </body>
</html>`,
              highlightLines: [8], // Evidenzia la riga nuova
            },
            'Salva il file (Ctrl+S o Cmd+S)',
            'Clicca col tasto destro sul file e seleziona "Open with Live Server"',
            'Guarda la tua pagina aprirsi nel browser! 🎉',
          ]}
          experiments={[
            'Cambia il testo dentro <title> e guarda la tab del browser cambiare',
            'Aggiungi un secondo paragrafo <p> con una frase a tua scelta - vedrai che va automaticamente a capo',
            'Prova a scrivere "Benvenuto" al posto di "Ciao" nel tag <h1> - il testo grande cambierà',
            'Prova a dimenticare di chiudere un tag </p> - cosa succede? Il browser prova a indovinare!',
            'Cambia <h1> con <h2> e guarda come il titolo diventa più piccolo',
          ]}
        />

        <Challenge
          title="Sfida: Presentati!"
          description="Ora che hai creato la tua prima pagina, è il momento di personalizzarla!
          Crea una pagina 'Chi sono' dove ti presenti."
          requirements={[
            'Un titolo principale con il tuo nome',
            'Almeno 3 paragrafi: parla dei tuoi hobby, della tua scuola, e di cosa ti piace fare',
            'Usa sia <h1> per il titolo che <p> per i paragrafi',
            'Aggiungi un titolo secondario con <h2> per ogni argomento',
          ]}
          hint="Ricorda: ogni paragrafo va dentro il suo tag <p>! E non dimenticare di chiudere i tag con </p>"
        />

        <Checklist
          items={[
            'Ho creato il mio primo file HTML',
            'Ho capito cos\'è un tag e come si usa',
            'La mia pagina si apre correttamente nel browser',
            'Ho usato sia <h1> che <p> nella mia pagina',
            'Ho completato la sfida e sono pronto per la prossima lezione!',
          ]}
        />

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold text-gray-800 mb-2">🎯 Prossima Lezione</h3>
          <p className="text-gray-700 mb-3">
            Nella prossima lezione imparerai tutti i segreti dei titoli (da h1 a h6)
            e come strutturare bene i tuoi testi!
          </p>
          <a
            href="/moduli/modulo-1-html/lezione-2-titoli-gerarchia"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Vai alla Lezione 2 →
          </a>
        </div>
      </section>
    </LessonLayout>
  );
}
