import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import LessonPreview from '@/components/didattica/LessonPreview';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import { getLezioniByModuloSlug } from '@/lib/moduli';

export default function Lezione9Page() {
  const lezioni = getLezioniByModuloSlug('modulo-1-html');

  return (
    <LessonLayout
      moduloSlug="modulo-1-html"
      moduloTitolo="Modulo 1: HTML - Le Fondamenta del Web"
      lezioni={lezioni}
    >
      <div className="max-w-4xl mx-auto">
        <LessonHeader
          numero={9}
          titolo="Form - Input Base"
          durata="1.5 ore"
          difficolta="media"
          obiettivi={[
            'Capire cosa sono i form e a cosa servono',
            'Creare form con il tag <form>',
            'Usare gli input base: text, password, email, number, tel',
            'Collegare label agli input per accessibilità',
            'Creare bottoni per inviare i form'
          ]}
        />

        {/* Introduzione */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📝 Cosa sono i Form?</h2>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-300 mb-6">
            <p className="text-gray-800 leading-relaxed">
              I <strong>form</strong> (moduli) sono come <strong>questionari interattivi</strong> che permettono agli utenti di inserire dati e inviarli al sito.
              Ogni volta che ti registri, fai login, cerchi qualcosa o lasci un commento, stai usando un form!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
              <h3 className="font-bold text-blue-900 mb-2">🔐 Login</h3>
              <p className="text-sm text-gray-700">Username e password per accedere</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
              <h3 className="font-bold text-green-900 mb-2">🔍 Ricerca</h3>
              <p className="text-sm text-gray-700">La barra di ricerca di Google è un form!</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-300">
              <h3 className="font-bold text-orange-900 mb-2">📧 Contatti</h3>
              <p className="text-sm text-gray-700">Moduli per inviare messaggi</p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400 my-6">
            <p className="text-sm text-gray-800">
              <strong>💡 Curiosità:</strong> Il primo form HTML è stato creato nel 1993 per permettere agli utenti di inviare feedback ai siti web!
            </p>
          </div>
        </section>

        {/* Tag form */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🏗️ Il Tag &lt;form&gt;</h2>

          <p className="text-gray-700 mb-4">
            Tutti i campi di input devono stare dentro un tag <code className="bg-gray-200 px-2 py-1 rounded">&lt;form&gt;</code>.
            È il "contenitore" che raccoglie tutti i dati.
          </p>

          <CodeExample
            language="html"
            title="Struttura base di un form"
            code={`<form action="/invia-dati" method="POST">
  <!-- Qui vanno i campi di input -->
  <!-- Qui va il bottone per inviare -->
</form>`}
            showLineNumbers
          />

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-2">📌 Attributo: action</h3>
              <p className="text-sm text-gray-700 mb-2">Dove inviare i dati del form (URL del server)</p>
              <code className="text-xs bg-white px-2 py-1 rounded block">action="/login"</code>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-bold text-green-900 mb-2">📌 Attributo: method</h3>
              <p className="text-sm text-gray-700 mb-2">Come inviare i dati (GET o POST)</p>
              <code className="text-xs bg-white px-2 py-1 rounded block">method="POST"</code>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400 my-6">
            <p className="text-sm text-gray-800">
              <strong>📚 Per ora:</strong> Puoi omettere action e method. Li studieremo meglio quando farai backend! Per ora concentriamoci sugli input.
            </p>
          </div>
        </section>

        {/* Tag input */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">⌨️ Il Tag &lt;input&gt;</h2>

          <p className="text-gray-700 mb-4">
            Il tag <code className="bg-gray-200 px-2 py-1 rounded">&lt;input&gt;</code> crea un campo dove l'utente può scrivere o selezionare qualcosa.
            È <strong>auto-chiudente</strong> (non ha tag di chiusura).
          </p>

          <CodeExample
            language="html"
            title="Input base"
            code={`<input type="text" name="nome" placeholder="Inserisci il tuo nome">`}
            showLineNumbers
          />

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border-2 border-cyan-300 my-6">
            <h3 className="font-bold text-cyan-900 mb-4 text-lg">🔑 Attributi fondamentali</h3>

            <div className="space-y-3">
              <div className="bg-white p-3 rounded">
                <strong className="text-gray-900">type:</strong>
                <span className="text-gray-700 ml-2">Che tipo di input (text, password, email, number...)</span>
              </div>
              <div className="bg-white p-3 rounded">
                <strong className="text-gray-900">name:</strong>
                <span className="text-gray-700 ml-2">Nome del campo (serve al server per riconoscere i dati)</span>
              </div>
              <div className="bg-white p-3 rounded">
                <strong className="text-gray-900">placeholder:</strong>
                <span className="text-gray-700 ml-2">Testo di esempio che sparisce quando scrivi</span>
              </div>
              <div className="bg-white p-3 rounded">
                <strong className="text-gray-900">value:</strong>
                <span className="text-gray-700 ml-2">Valore pre-compilato del campo</span>
              </div>
            </div>
          </div>
        </section>

        {/* Type text */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📝 Input type="text"</h2>

          <p className="text-gray-700 mb-4">
            L'input più semplice: un campo di testo normale dove puoi scrivere qualsiasi cosa.
          </p>

          <CodeExample
            language="html"
            title="Campo di testo"
            code={`<label for="nome">Nome:</label>
<input type="text" id="nome" name="nome" placeholder="Mario Rossi">`}
            showLineNumbers
          />

          <LessonPreview
            title="Come appare"
            html={`<label for="nome">Nome:</label><br>
<input type="text" id="nome" name="nome" placeholder="Mario Rossi" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; width: 250px;">`}
          />

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 my-6">
            <p className="text-sm text-gray-800">
              <strong>♿ Accessibilità:</strong> Il tag <code>&lt;label&gt;</code> è fondamentale!
              Collega il testo al campo grazie agli attributi <code>for</code> (label) e <code>id</code> (input) con lo stesso valore.
              Gli screen reader leggono la label quando l'utente è sul campo.
            </p>
          </div>
        </section>

        {/* Type password */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🔒 Input type="password"</h2>

          <p className="text-gray-700 mb-4">
            Nasconde il testo con pallini • • • per proteggere la privacy (utile per password!)
          </p>

          <CodeExample
            language="html"
            title="Campo password"
            code={`<label for="pwd">Password:</label>
<input type="password" id="pwd" name="password" placeholder="Inserisci password">`}
            showLineNumbers
          />

          <LessonPreview
            title="Come appare"
            html={`<label for="pwd">Password:</label><br>
<input type="password" id="pwd" name="password" placeholder="Inserisci password" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; width: 250px;">`}
          />
        </section>

        {/* Type email */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📧 Input type="email"</h2>

          <p className="text-gray-700 mb-4">
            Specifico per indirizzi email. Il browser controlla automaticamente che ci sia la @ e il punto!
          </p>

          <CodeExample
            language="html"
            title="Campo email"
            code={`<label for="email">Email:</label>
<input type="email" id="email" name="email" placeholder="mario@esempio.com">`}
            showLineNumbers
          />

          <LessonPreview
            title="Come appare"
            html={`<label for="email">Email:</label><br>
<input type="email" id="email" name="email" placeholder="mario@esempio.com" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; width: 250px;">`}
            description="Prova a scrivere un'email senza @ - il browser ti darà errore quando invii!"
          />

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 my-6">
            <p className="text-sm text-gray-800">
              <strong>✅ Validazione automatica:</strong> Su mobile, type="email" fa comparire la tastiera con @ facilmente accessibile!
            </p>
          </div>
        </section>

        {/* Type number */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🔢 Input type="number"</h2>

          <p className="text-gray-700 mb-4">
            Solo numeri! Ha freccette per aumentare/diminuire il valore.
          </p>

          <CodeExample
            language="html"
            title="Campo numerico"
            code={`<label for="eta">Età:</label>
<input type="number" id="eta" name="eta" min="1" max="120" placeholder="18">`}
            showLineNumbers
          />

          <LessonPreview
            title="Come appare"
            html={`<label for="eta">Età:</label><br>
<input type="number" id="eta" name="eta" min="1" max="120" placeholder="18" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; width: 150px;">`}
          />

          <div className="grid md:grid-cols-3 gap-4 my-6">
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="font-bold text-purple-900 mb-2">min</h3>
              <p className="text-sm text-gray-700">Valore minimo</p>
              <code className="text-xs">min="1"</code>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-bold text-pink-900 mb-2">max</h3>
              <p className="text-sm text-gray-700">Valore massimo</p>
              <code className="text-xs">max="120"</code>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-bold text-indigo-900 mb-2">step</h3>
              <p className="text-sm text-gray-700">Intervallo (default: 1)</p>
              <code className="text-xs">step="5"</code>
            </div>
          </div>
        </section>

        {/* Type tel */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📱 Input type="tel"</h2>

          <p className="text-gray-700 mb-4">
            Per numeri di telefono. Su mobile fa apparire il tastierino numerico!
          </p>

          <CodeExample
            language="html"
            title="Campo telefono"
            code={`<label for="telefono">Telefono:</label>
<input type="tel" id="telefono" name="telefono" placeholder="+39 123 456 7890">`}
            showLineNumbers
          />

          <LessonPreview
            title="Come appare"
            html={`<label for="telefono">Telefono:</label><br>
<input type="tel" id="telefono" name="telefono" placeholder="+39 123 456 7890" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; width: 250px;">`}
          />
        </section>

        {/* Button */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🔘 Il Tag &lt;button&gt;</h2>

          <p className="text-gray-700 mb-4">
            Per inviare il form, serve un bottone! Ci sono 2 modi:
          </p>

          <CodeExample
            language="html"
            title="Due modi di creare bottoni"
            code={`<!-- Metodo 1: button con type="submit" -->
<button type="submit">Invia</button>

<!-- Metodo 2: input con type="submit" -->
<input type="submit" value="Invia">`}
            showLineNumbers
          />

          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-900 mb-2">&lt;button type="submit"&gt;</h3>
              <p className="text-sm text-gray-700">✅ Più flessibile (puoi mettere icone, immagini)</p>
              <p className="text-sm text-gray-700">✅ Più moderno</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-2">&lt;input type="submit"&gt;</h3>
              <p className="text-sm text-gray-700">Solo testo</p>
              <p className="text-sm text-gray-700">Più vecchio (ma funziona)</p>
            </div>
          </div>

          <LessonPreview
            title="Come appaiono i bottoni"
            html={`<button type="submit" style="padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;">Invia con button</button>
<input type="submit" value="Invia con input" style="padding: 10px 20px; background: #10b981; color: white; border: none; border-radius: 4px; cursor: pointer;">`}
          />
        </section>

        {/* Form completo */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Form Completo</h2>

          <p className="text-gray-700 mb-4">
            Mettiamo tutto insieme! Ecco un form di registrazione completo:
          </p>

          <CodeExample
            language="html"
            title="Form registrazione completo"
            code={`<form action="/registrati" method="POST">
  <label for="nome">Nome completo:</label>
  <input type="text" id="nome" name="nome" placeholder="Mario Rossi">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="mario@esempio.com">

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" placeholder="Minimo 8 caratteri">

  <label for="eta">Età:</label>
  <input type="number" id="eta" name="eta" min="13" max="120">

  <label for="telefono">Telefono:</label>
  <input type="tel" id="telefono" name="telefono" placeholder="+39 123 456 7890">

  <button type="submit">Registrati</button>
</form>`}
            showLineNumbers
          />
        </section>

        {/* Tabella riepilogativa */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Riepilogo Input Types</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-blue-100 to-purple-100">
                  <th className="border-2 border-gray-300 px-4 py-3 text-left">Type</th>
                  <th className="border-2 border-gray-300 px-4 py-3 text-left">Quando usarlo</th>
                  <th className="border-2 border-gray-300 px-4 py-3 text-left">Esempio</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-blue-50">
                  <td className="border px-4 py-2 font-mono text-sm">text</td>
                  <td className="border px-4 py-2">Testo generico (nome, cognome, città...)</td>
                  <td className="border px-4 py-2 text-sm">Nome, indirizzo</td>
                </tr>
                <tr className="hover:bg-purple-50">
                  <td className="border px-4 py-2 font-mono text-sm">password</td>
                  <td className="border px-4 py-2">Password (nasconde il testo)</td>
                  <td className="border px-4 py-2 text-sm">Login, registrazione</td>
                </tr>
                <tr className="hover:bg-green-50">
                  <td className="border px-4 py-2 font-mono text-sm">email</td>
                  <td className="border px-4 py-2">Indirizzi email (valida @)</td>
                  <td className="border px-4 py-2 text-sm">Contatti, newsletter</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="border px-4 py-2 font-mono text-sm">number</td>
                  <td className="border px-4 py-2">Solo numeri (con freccette)</td>
                  <td className="border px-4 py-2 text-sm">Età, quantità</td>
                </tr>
                <tr className="hover:bg-pink-50">
                  <td className="border px-4 py-2 font-mono text-sm">tel</td>
                  <td className="border px-4 py-2">Numeri di telefono</td>
                  <td className="border px-4 py-2 text-sm">Contatti, ordini</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Esercizio */}
        <Exercise
          title="🎯 Esercizio Guidato: Form Login"
          difficulty="facile"
          steps={[
            'Crea un file "login.html"',
            'Aggiungi un titolo H1 "Accedi al tuo account"',
            'Crea un <form> (senza action e method per ora)',
            'Aggiungi un campo email con label "Email:"',
            'Aggiungi un campo password con label "Password:"',
            'Aggiungi un bottone "Accedi" con <button type="submit">',
            'Aggiungi placeholder appropriati ai campi',
            'Usa gli id e for per collegare label e input',
            'Testa il form nel browser',
            'Prova a inviare senza compilare la email - vedi l\'errore di validazione?'
          ]}
        />

        {/* Challenge */}
        <Challenge
          title="💪 Challenge: Form Iscrizione Newsletter"
          description="Crea un form per iscriversi a una newsletter!"
          requirements={[
            'Titolo H2: "Iscriviti alla Newsletter"',
            'Campo Nome (type="text")',
            'Campo Cognome (type="text")',
            'Campo Email (type="email") con placeholder "tua@email.com"',
            'Campo Età (type="number") con min="13" max="120"',
            'Bottone "Iscriviti" colorato',
            'Tutte le label devono essere collegate agli input',
            'Placeholder in tutti i campi',
            'Un paragrafo sotto il form: "Ti invieremo max 1 email a settimana"'
          ]}
          hint="Usa <br> per andare a capo tra i campi e renderlo più leggibile!"
        />

        {/* Checklist */}
        <Checklist
          items={[
            'So cosa sono i form e a cosa servono',
            'So usare il tag <form> con action e method',
            'So creare input di tipo text',
            'So creare input di tipo password',
            'So creare input di tipo email',
            'So creare input di tipo number',
            'So creare input di tipo tel',
            'So collegare label e input con for/id',
            'So creare bottoni submit',
            'Capisco l\'importanza delle label per l\'accessibilità',
            'Ho completato l\'esercizio del form login',
            'Ho completato il challenge della newsletter'
          ]}
        />
      </div>
    </LessonLayout>
  );
}
