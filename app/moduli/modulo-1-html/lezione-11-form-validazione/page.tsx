import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import LessonPreview from '@/components/didattica/LessonPreview';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import { getLezioniByModuloSlug } from '@/lib/moduli';

export default function Lezione11Page() {
  const lezioni = getLezioniByModuloSlug('modulo-1-html');

  return (
    <LessonLayout
      moduloSlug="modulo-1-html"
      moduloTitolo="Modulo 1: HTML - Le Fondamenta del Web"
      lezioni={lezioni}
      lezioneSlug="lezione-11-form-validazione"
      lezioneTitolo="Form - Validazione"
    >
      <LessonHeader
        numero={11}
        titolo="Form - Validazione"
        durata="1 ora"
        difficolta="media"
        obiettivi={[
          'Usare required per campi obbligatori',
          'Controllare lunghezza testo con minlength e maxlength',
          'Limitare numeri con min, max e step',
          'Validare formati con pattern (regex base)',
          'Capire disabled e readonly',
          'Vedere messaggi errore nativi del browser',
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          🛡️ Proteggere i Form con la Validazione
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Hai mai provato a inviare un form senza compilare un campo importante e il sito ti ha fermato con un messaggio rosso?
          Quella è la <strong>validazione HTML</strong>! È come un guardiano che controlla che gli utenti inseriscano dati corretti
          PRIMA di inviare il form al server.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          La parte migliore? Non serve JavaScript! HTML ha attributi speciali che fanno tutto da soli. Il browser controlla,
          mostra messaggi di errore e blocca l'invio se qualcosa non va. Impariamo a usarli! 🎯
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-blue-900">💡 Perché Validare i Form?</h3>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start">
              <span className="text-2xl mr-3">✅</span>
              <span><strong>User Experience migliore:</strong> L'utente scopre subito gli errori, non dopo aver inviato</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">🔒</span>
              <span><strong>Sicurezza:</strong> Previeni dati mancanti o nel formato sbagliato</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">⚡</span>
              <span><strong>Risparmio banda:</strong> Non invii dati inutili al server</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">🎨</span>
              <span><strong>Feedback immediato:</strong> Messaggi in tempo reale mentre l'utente scrive</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Required */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          🚨 Attributo <code className="bg-gray-100 px-2 py-1 rounded">required</code> - Campo Obbligatorio
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          L'attributo <code className="bg-gray-100 px-2 py-1 rounded">required</code> rende un campo obbligatorio.
          Se l'utente prova a inviare il form senza compilarlo, il browser mostra un messaggio e blocca l'invio.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-yellow-900">⚠️ Importante!</h3>
          <p className="text-gray-800">
            <code className="bg-white px-2 py-1 rounded">required</code> è un attributo <strong>booleano</strong>:
            basta scriverlo senza valore. Non serve <code className="bg-white px-2 py-1 rounded">required="true"</code>!
          </p>
        </div>

        <CodeExample
          language="html"
          title="Required - Campo Obbligatorio"
          code={`<form>
  <label for="nome">Nome (obbligatorio):</label>
  <input type="text" id="nome" name="nome" required>

  <label for="email">Email (obbligatoria):</label>
  <input type="email" id="email" name="email" required>

  <label for="messaggio">Messaggio (opzionale):</label>
  <textarea id="messaggio" name="messaggio"></textarea>

  <button type="submit">Invia</button>
</form>

<!-- Se provi a inviare senza compilare nome o email,
     il browser ti blocca con un messaggio tipo:
     "Compila questo campo" oppure "Please fill out this field" -->`}
        />

        <LessonPreview
          title="Prova il Form con Required"
          description="Prova a cliccare 'Invia' senza compilare i campi obbligatori. Il browser ti bloccherà!"
          html={`<form>
  <label for="nome">Nome (obbligatorio):</label><br>
  <input type="text" id="nome" name="nome" required style="padding: 8px; margin: 8px 0; border: 2px solid #ccc; border-radius: 4px;"><br>

  <label for="email">Email (obbligatoria):</label><br>
  <input type="email" id="email" name="email" required style="padding: 8px; margin: 8px 0; border: 2px solid #ccc; border-radius: 4px;"><br>

  <label for="messaggio">Messaggio (opzionale):</label><br>
  <textarea id="messaggio" name="messaggio" style="padding: 8px; margin: 8px 0; border: 2px solid #ccc; border-radius: 4px; width: 100%; max-width: 400px;"></textarea><br>

  <button type="submit" style="background: #3b82f6; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px;">Invia</button>
</form>`}
        />
      </section>

      {/* Minlength e Maxlength */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          📏 <code className="bg-gray-100 px-2 py-1 rounded">minlength</code> e <code className="bg-gray-100 px-2 py-1 rounded">maxlength</code> - Lunghezza Testo
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Questi attributi controllano quanti caratteri l'utente può/deve inserire in un campo di testo.
          Perfetti per username, password, codici postali e molto altro!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-green-50 border-2 border-green-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-green-900">📐 minlength</h3>
            <p className="text-gray-800 mb-2"><strong>Lunghezza MINIMA</strong></p>
            <p className="text-gray-700">L'utente deve scrivere almeno N caratteri. Esempio: password minimo 8 caratteri.</p>
          </div>
          <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-blue-900">📐 maxlength</h3>
            <p className="text-gray-800 mb-2"><strong>Lunghezza MASSIMA</strong></p>
            <p className="text-gray-700">L'utente NON può superare N caratteri. Il browser blocca la digitazione quando raggiungi il limite.</p>
          </div>
        </div>

        <CodeExample
          language="html"
          title="Minlength e Maxlength"
          code={`<form>
  <!-- Username: tra 3 e 15 caratteri -->
  <label for="username">Username (3-15 caratteri):</label>
  <input
    type="text"
    id="username"
    name="username"
    minlength="3"
    maxlength="15"
    required
  >

  <!-- Password: minimo 8 caratteri -->
  <label for="password">Password (minimo 8 caratteri):</label>
  <input
    type="password"
    id="password"
    name="password"
    minlength="8"
    required
  >

  <!-- Tweet: massimo 280 caratteri -->
  <label for="tweet">Il tuo tweet (max 280 caratteri):</label>
  <textarea
    id="tweet"
    name="tweet"
    maxlength="280"
  ></textarea>

  <button type="submit">Invia</button>
</form>`}
        />

        <LessonPreview
          title="Prova Minlength e Maxlength"
          description="Prova a scrivere un username troppo corto (meno di 3 caratteri) o una password troppo corta. Prova anche a superare i 280 caratteri nel tweet!"
          html={`<form>
  <label for="username">Username (3-15 caratteri):</label><br>
  <input
    type="text"
    id="username"
    name="username"
    minlength="3"
    maxlength="15"
    required
    style="padding: 8px; margin: 8px 0; border: 2px solid #ccc; border-radius: 4px; display: block;"
  ><br>

  <label for="password">Password (minimo 8 caratteri):</label><br>
  <input
    type="password"
    id="password"
    name="password"
    minlength="8"
    required
    style="padding: 8px; margin: 8px 0; border: 2px solid #ccc; border-radius: 4px; display: block;"
  ><br>

  <label for="tweet">Il tuo tweet (max 280 caratteri):</label><br>
  <textarea
    id="tweet"
    name="tweet"
    maxlength="280"
    style="padding: 8px; margin: 8px 0; border: 2px solid #ccc; border-radius: 4px; width: 100%; max-width: 400px; display: block;"
  ></textarea><br>

  <button type="submit" style="background: #3b82f6; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;">Invia</button>
</form>`}
        />

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg mt-6">
          <h3 className="text-xl font-bold mb-3 text-purple-900">🎯 Quando Usarli?</h3>
          <ul className="space-y-2 text-gray-800">
            <li><strong>Password:</strong> minlength="8" per sicurezza</li>
            <li><strong>Username:</strong> minlength="3" maxlength="20"</li>
            <li><strong>Codice postale:</strong> minlength="5" maxlength="5"</li>
            <li><strong>Bio/Descrizione:</strong> maxlength="500" per limitare</li>
            <li><strong>SMS/Tweet:</strong> maxlength="160" o "280"</li>
          </ul>
        </div>
      </section>

      {/* Min, Max, Step */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          🔢 <code className="bg-gray-100 px-2 py-1 rounded">min</code>, <code className="bg-gray-100 px-2 py-1 rounded">max</code>, <code className="bg-gray-100 px-2 py-1 rounded">step</code> - Controllo Numeri
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Per input numerici (<code className="bg-gray-100 px-2 py-1 rounded">type="number"</code>,
          <code className="bg-gray-100 px-2 py-1 rounded">range</code>,
          <code className="bg-gray-100 px-2 py-1 rounded">date</code>), puoi limitare valori minimi, massimi e incrementi.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-orange-50 border-2 border-orange-500 p-4 rounded-lg text-center">
            <div className="text-4xl mb-2">⬇️</div>
            <h3 className="text-lg font-bold mb-2 text-orange-900">min</h3>
            <p className="text-gray-700 text-sm">Valore minimo accettato</p>
          </div>
          <div className="bg-red-50 border-2 border-red-500 p-4 rounded-lg text-center">
            <div className="text-4xl mb-2">⬆️</div>
            <h3 className="text-lg font-bold mb-2 text-red-900">max</h3>
            <p className="text-gray-700 text-sm">Valore massimo accettato</p>
          </div>
          <div className="bg-indigo-50 border-2 border-indigo-500 p-4 rounded-lg text-center">
            <div className="text-4xl mb-2">➕</div>
            <h3 className="text-lg font-bold mb-2 text-indigo-900">step</h3>
            <p className="text-gray-700 text-sm">Incremento/Decremento</p>
          </div>
        </div>

        <CodeExample
          language="html"
          title="Min, Max, Step per Numeri"
          code={`<form>
  <!-- Età: tra 13 e 120 anni -->
  <label for="eta">Età:</label>
  <input
    type="number"
    id="eta"
    name="eta"
    min="13"
    max="120"
    required
  >

  <!-- Voto: da 0 a 10, incrementi di 0.5 -->
  <label for="voto">Voto (0-10, decimali 0.5):</label>
  <input
    type="number"
    id="voto"
    name="voto"
    min="0"
    max="10"
    step="0.5"
  >

  <!-- Quantità: minimo 1, massimo 100, interi -->
  <label for="quantita">Quantità:</label>
  <input
    type="number"
    id="quantita"
    name="quantita"
    min="1"
    max="100"
    step="1"
    value="1"
  >

  <!-- Data compleanno: solo date passate -->
  <label for="compleanno">Data di nascita:</label>
  <input
    type="date"
    id="compleanno"
    name="compleanno"
    max="2024-12-31"
  >

  <button type="submit">Invia</button>
</form>`}
        />

        <LessonPreview
          title="Prova Min, Max e Step"
          description="Prova a inserire un'età inferiore a 13 o superiore a 120. Usa le freccette sul voto per vedere gli incrementi di 0.5. Prova a selezionare una data futura per la nascita!"
          html={`<form>
  <label for="eta">Età (13-120):</label><br>
  <input
    type="number"
    id="eta"
    name="eta"
    min="13"
    max="120"
    required
    style="padding: 8px; margin: 8px 0; border: 2px solid #ccc; border-radius: 4px; display: block; width: 200px;"
  ><br>

  <label for="voto">Voto (0-10, decimali 0.5):</label><br>
  <input
    type="number"
    id="voto"
    name="voto"
    min="0"
    max="10"
    step="0.5"
    style="padding: 8px; margin: 8px 0; border: 2px solid #ccc; border-radius: 4px; display: block; width: 200px;"
  ><br>

  <label for="quantita">Quantità (1-100):</label><br>
  <input
    type="number"
    id="quantita"
    name="quantita"
    min="1"
    max="100"
    step="1"
    value="1"
    style="padding: 8px; margin: 8px 0; border: 2px solid #ccc; border-radius: 4px; display: block; width: 200px;"
  ><br>

  <label for="compleanno">Data di nascita (solo passato):</label><br>
  <input
    type="date"
    id="compleanno"
    name="compleanno"
    max="2024-12-31"
    style="padding: 8px; margin: 8px 0; border: 2px solid #ccc; border-radius: 4px; display: block;"
  ><br>

  <button type="submit" style="background: #3b82f6; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px;">Invia</button>
</form>`}
        />

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mt-6">
          <h3 className="text-xl font-bold mb-3 text-blue-900">💡 Fun Fact: Step</h3>
          <p className="text-gray-800">
            <code className="bg-white px-2 py-1 rounded">step="any"</code> permette QUALSIASI numero decimale.
            <code className="bg-white px-2 py-1 rounded">step="1"</code> permette solo numeri interi.
            <code className="bg-white px-2 py-1 rounded">step="0.01"</code> è perfetto per prezzi in euro (centesimi)!
          </p>
        </div>
      </section>

      {/* Pattern */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          🔍 <code className="bg-gray-100 px-2 py-1 rounded">pattern</code> - Formati Personalizzati (Regex)
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          L'attributo <code className="bg-gray-100 px-2 py-1 rounded">pattern</code> usa le <strong>espressioni regolari (regex)</strong> per
          controllare il FORMATO del testo. Puoi validare codici postali, numeri di telefono, targhe, codici fiscali e molto altro!
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3 text-yellow-900">🤓 Regex Base - Non Spaventarti!</h3>
          <p className="text-gray-800 mb-4">
            Le regex sembrano complicatissime, ma per iniziare bastano pochi simboli:
          </p>
          <ul className="space-y-2 text-gray-800 font-mono text-sm">
            <li><code className="bg-white px-2 py-1 rounded">[0-9]</code> = una cifra da 0 a 9</li>
            <li><code className="bg-white px-2 py-1 rounded">[A-Z]</code> = una lettera maiuscola</li>
            <li><code className="bg-white px-2 py-1 rounded">[a-z]</code> = una lettera minuscola</li>
            <li><code className="bg-white px-2 py-1 rounded">{"{"}{3}{"}"}</code> = ripeti esattamente 3 volte</li>
            <li><code className="bg-white px-2 py-1 rounded">{"{2,5}"}</code> = ripeti da 2 a 5 volte</li>
            <li><code className="bg-white px-2 py-1 rounded">+</code> = uno o più caratteri</li>
          </ul>
        </div>

        <CodeExample
          language="html"
          title="Pattern - Esempi Pratici"
          code={`<form>
  <!-- Codice postale italiano: 5 cifre -->
  <label for="cap">CAP (5 cifre):</label>
  <input
    type="text"
    id="cap"
    name="cap"
    pattern="[0-9]{5}"
    placeholder="00100"
    title="Inserisci esattamente 5 cifre"
    required
  >

  <!-- Targa italiana: AA 123 BB -->
  <label for="targa">Targa (es: AB 123 CD):</label>
  <input
    type="text"
    id="targa"
    name="targa"
    pattern="[A-Z]{2} [0-9]{3} [A-Z]{2}"
    placeholder="AB 123 CD"
    title="Formato: 2 lettere, 3 numeri, 2 lettere"
  >

  <!-- Username: solo lettere minuscole e numeri, 3-15 caratteri -->
  <label for="user">Username (solo lettere e numeri):</label>
  <input
    type="text"
    id="user"
    name="user"
    pattern="[a-z0-9]{3,15}"
    placeholder="mario123"
    title="Solo lettere minuscole e numeri, 3-15 caratteri"
  >

  <!-- Telefono italiano: 10 cifre -->
  <label for="tel">Telefono (10 cifre):</label>
  <input
    type="tel"
    id="tel"
    name="tel"
    pattern="[0-9]{10}"
    placeholder="3331234567"
    title="Inserisci 10 cifre senza spazi"
  >

  <button type="submit">Invia</button>
</form>`}
        />

        <LessonPreview
          title="Prova Pattern (Regex)"
          description="Prova a inserire un CAP con lettere o meno di 5 cifre. Prova una targa sbagliata. Passa il mouse sui campi per vedere i tooltip con le istruzioni (title)!"
          html={`<form>
  <label for="cap">CAP (5 cifre):</label><br>
  <input
    type="text"
    id="cap"
    name="cap"
    pattern="[0-9]{5}"
    placeholder="00100"
    title="Inserisci esattamente 5 cifre"
    required
    style="padding: 8px; margin: 8px 0; border: 2px solid #ccc; border-radius: 4px; display: block; width: 200px;"
  ><br>

  <label for="targa">Targa (es: AB 123 CD):</label><br>
  <input
    type="text"
    id="targa"
    name="targa"
    pattern="[A-Z]{2} [0-9]{3} [A-Z]{2}"
    placeholder="AB 123 CD"
    title="Formato: 2 lettere, 3 numeri, 2 lettere"
    style="padding: 8px; margin: 8px 0; border: 2px solid #ccc; border-radius: 4px; display: block; width: 200px;"
  ><br>

  <label for="user">Username (solo lettere e numeri, 3-15 caratteri):</label><br>
  <input
    type="text"
    id="user"
    name="user"
    pattern="[a-z0-9]{3,15}"
    placeholder="mario123"
    title="Solo lettere minuscole e numeri, 3-15 caratteri"
    style="padding: 8px; margin: 8px 0; border: 2px solid #ccc; border-radius: 4px; display: block; width: 200px;"
  ><br>

  <button type="submit" style="background: #3b82f6; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px;">Invia</button>
</form>`}
        />

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mt-6">
          <h3 className="text-xl font-bold mb-3 text-green-900">✨ Attributo title con pattern</h3>
          <p className="text-gray-800">
            Quando usi <code className="bg-white px-2 py-1 rounded">pattern</code>, aggiungi SEMPRE
            l'attributo <code className="bg-white px-2 py-1 rounded">title</code>!
            Il browser lo mostra come tooltip per spiegare all'utente il formato richiesto. User experience ++! 🎯
          </p>
        </div>
      </section>

      {/* Disabled e Readonly */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          🔒 <code className="bg-gray-100 px-2 py-1 rounded">disabled</code> e <code className="bg-gray-100 px-2 py-1 rounded">readonly</code> - Campi Bloccati
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          A volte vuoi mostrare un campo ma impedire all'utente di modificarlo. Ecco a cosa servono questi due attributi!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-100 border-2 border-gray-400 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-gray-800">🚫 disabled</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✖️ Campo disabilitato, NON modificabile</li>
              <li>✖️ Aspetto grigio/opaco</li>
              <li>✖️ NON inviato con il form</li>
              <li>✖️ L'utente non può cliccarlo</li>
            </ul>
          </div>
          <div className="bg-blue-100 border-2 border-blue-400 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-blue-800">👁️ readonly</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Campo leggibile, NON modificabile</li>
              <li>✅ Aspetto normale</li>
              <li>✅ VIENE inviato con il form</li>
              <li>✅ L'utente può selezionare/copiare il testo</li>
            </ul>
          </div>
        </div>

        <CodeExample
          language="html"
          title="Disabled vs Readonly"
          code={`<form>
  <!-- Disabled: campo grigio, non inviato -->
  <label for="campo-disabilitato">Campo Disabilitato:</label>
  <input
    type="text"
    id="campo-disabilitato"
    name="campo-disabilitato"
    value="Non puoi modificarmi"
    disabled
  >

  <!-- Readonly: campo normale, inviato -->
  <label for="codice-ordine">Codice Ordine (generato automaticamente):</label>
  <input
    type="text"
    id="codice-ordine"
    name="codice-ordine"
    value="ORD-2024-001234"
    readonly
  >

  <!-- Readonly per email confermata -->
  <label for="email-verificata">Email Verificata:</label>
  <input
    type="email"
    id="email-verificata"
    name="email-verificata"
    value="mario@example.com"
    readonly
  >

  <!-- Disabled per campo non disponibile -->
  <label for="premium">
    <input type="checkbox" id="premium" disabled>
    Funzione Premium (non disponibile)
  </label>

  <button type="submit">Invia</button>
</form>`}
        />

        <LessonPreview
          title="Prova Disabled vs Readonly"
          description="Nota la differenza: il campo disabled è grigio e non puoi cliccarlo. I campi readonly hanno aspetto normale e puoi selezionare/copiare il testo! Prova a inviare il form e vedi cosa succede."
          html={`<form>
  <label for="campo-disabilitato">Campo Disabilitato:</label><br>
  <input
    type="text"
    id="campo-disabilitato"
    name="campo-disabilitato"
    value="Non puoi modificarmi"
    disabled
    style="padding: 8px; margin: 8px 0; border: 2px solid #ccc; border-radius: 4px; display: block; width: 100%; max-width: 400px;"
  ><br>

  <label for="codice-ordine">Codice Ordine (readonly - generato automaticamente):</label><br>
  <input
    type="text"
    id="codice-ordine"
    name="codice-ordine"
    value="ORD-2024-001234"
    readonly
    style="padding: 8px; margin: 8px 0; border: 2px solid #ccc; border-radius: 4px; display: block; width: 100%; max-width: 400px; background: #f9fafb;"
  ><br>

  <label for="email-verificata">Email Verificata (readonly):</label><br>
  <input
    type="email"
    id="email-verificata"
    name="email-verificata"
    value="mario@example.com"
    readonly
    style="padding: 8px; margin: 8px 0; border: 2px solid #ccc; border-radius: 4px; display: block; width: 100%; max-width: 400px; background: #f9fafb;"
  ><br>

  <label style="display: flex; align-items: center; margin: 8px 0;">
    <input type="checkbox" id="premium" disabled style="margin-right: 8px;">
    Funzione Premium (disabled - non disponibile)
  </label><br>

  <button type="submit" style="background: #3b82f6; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px;">Invia (i campi disabled NON vengono inviati!)</button>
</form>`}
        />

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg mt-6">
          <h3 className="text-xl font-bold mb-3 text-purple-900">🎯 Quando Usarli?</h3>
          <ul className="space-y-2 text-gray-800">
            <li><strong>disabled:</strong> Funzioni premium, campi non ancora disponibili, form in caricamento</li>
            <li><strong>readonly:</strong> Codici generati automaticamente, email già verificate, dati da mostrare ma non modificare</li>
          </ul>
        </div>
      </section>

      {/* Messaggi Errore Browser */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          💬 Messaggi di Errore del Browser
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Quando la validazione fallisce, ogni browser mostra messaggi automatici. Sono in inglese o nella lingua del browser,
          e cambiano in base al tipo di errore. Ecco i più comuni:
        </p>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-4 text-red-900">🚨 Messaggi Comuni di Validazione</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded border border-red-200">
              <p className="font-bold text-red-700 mb-2">Campo required vuoto:</p>
              <p className="text-sm text-gray-700">"Compila questo campo" / "Please fill out this field"</p>
            </div>
            <div className="bg-white p-4 rounded border border-red-200">
              <p className="font-bold text-red-700 mb-2">Email non valida:</p>
              <p className="text-sm text-gray-700">"Inserisci un indirizzo email" / "Please include an @"</p>
            </div>
            <div className="bg-white p-4 rounded border border-red-200">
              <p className="font-bold text-red-700 mb-2">Testo troppo corto (minlength):</p>
              <p className="text-sm text-gray-700">"Usa almeno 8 caratteri" / "Use at least 8 characters"</p>
            </div>
            <div className="bg-white p-4 rounded border border-red-200">
              <p className="font-bold text-red-700 mb-2">Pattern non rispettato:</p>
              <p className="text-sm text-gray-700">"Corrispondenza formato richiesto" / "Please match the format requested"</p>
            </div>
            <div className="bg-white p-4 rounded border border-red-200">
              <p className="font-bold text-red-700 mb-2">Numero fuori range (min/max):</p>
              <p className="text-sm text-gray-700">"Il valore deve essere maggiore di 13"</p>
            </div>
            <div className="bg-white p-4 rounded border border-red-200">
              <p className="font-bold text-red-700 mb-2">URL non valido:</p>
              <p className="text-sm text-gray-700">"Inserisci un URL" / "Please enter a URL"</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-blue-900">💡 Nota Importante</h3>
          <p className="text-gray-800">
            I messaggi di validazione cambiano in base al browser (Chrome, Firefox, Safari) e alla lingua.
            Per messaggi personalizzati ti servirà JavaScript (lo vedrai nel Modulo 4)! Per ora usiamo quelli nativi del browser. 😊
          </p>
        </div>
      </section>

      {/* Tabella Riepilogativa */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          📋 Tabella Riepilogativa Attributi di Validazione
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-2 border-gray-300">
            <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left">Attributo</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Cosa Fa</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Esempio</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Input Compatibili</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-mono text-sm">required</td>
                <td className="border border-gray-300 px-4 py-3">Campo obbligatorio</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-xs">required</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">Tutti</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-mono text-sm">minlength</td>
                <td className="border border-gray-300 px-4 py-3">Lunghezza minima testo</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-xs">minlength="8"</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">text, password, textarea</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-mono text-sm">maxlength</td>
                <td className="border border-gray-300 px-4 py-3">Lunghezza massima testo</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-xs">maxlength="15"</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">text, password, textarea</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-mono text-sm">min</td>
                <td className="border border-gray-300 px-4 py-3">Valore minimo</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-xs">min="13"</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">number, date, range</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-mono text-sm">max</td>
                <td className="border border-gray-300 px-4 py-3">Valore massimo</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-xs">max="120"</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">number, date, range</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-mono text-sm">step</td>
                <td className="border border-gray-300 px-4 py-3">Incremento/Decremento</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-xs">step="0.5"</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">number, range</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-mono text-sm">pattern</td>
                <td className="border border-gray-300 px-4 py-3">Formato regex personalizzato</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-xs">pattern="[0-9]{'{5}'}"</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">text, tel, email, url</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-mono text-sm">disabled</td>
                <td className="border border-gray-300 px-4 py-3">Campo disabilitato (non inviato)</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-xs">disabled</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">Tutti</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-mono text-sm">readonly</td>
                <td className="border border-gray-300 px-4 py-3">Campo solo lettura (inviato)</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-xs">readonly</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">text, email, number, textarea</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Esercizio */}
      <Exercise
        title="Form Iscrizione Evento con Validazione"
        steps={[
          'Crea un file "iscrizione.html"',
          'Aggiungi la struttura HTML base',
          'Crea un <form> con method="post"',
          'Campo Nome Completo: required, minlength="3", maxlength="50"',
          'Campo Email: type="email", required',
          'Campo Età: type="number", min="14", max="99", required',
          'Campo Telefono: type="tel", pattern="[0-9]{10}", title="10 cifre", required',
          'Campo Username: pattern="[a-z0-9]{4,12}", title="Solo minuscole e numeri, 4-12 caratteri"',
          'Textarea Messaggio: maxlength="300"',
          'Campo Codice Evento (readonly): value="EVT-2024-SUMMER", readonly',
          'Checkbox Accetto privacy: required',
          'Button submit con testo "Iscriviti"',
          'Testa il form: prova a inviare senza compilare, scrivi email sbagliate, testa tutti i vincoli',
          'BONUS: Aggiungi un input date per data di nascita con max="2010-12-31"',
        ]}
      />

      {/* Challenge */}
      <Challenge
        title="Challenge: Form Registrazione Completo con Tutte le Validazioni"
        description="Crea un form di registrazione avanzato per una piattaforma online. Deve avere validazioni robuste su ogni campo e gestire casi speciali come password forte, conferma email, accettazione termini obbligatoria."
        requirements={[
          'Form con tutti i campi richiesti (nome, cognome, email, conferma email, password, conferma password)',
          'Nome e Cognome: required, minlength="2", maxlength="30"',
          'Email: type="email", required',
          'Conferma Email: type="email", required (nota: HTML non può confrontare i due campi, serve JS)',
          'Password: type="password", required, minlength="8", pattern con almeno 1 maiuscola e 1 numero',
          'Conferma Password: type="password", required',
          'Username: pattern="[a-z0-9_]{5,15}", required, title esplicativo',
          'Data di Nascita: type="date", required, max="2010-12-31" (solo maggiori di 14 anni)',
          'Codice Invito (opzionale): pattern="[A-Z0-9]{6}", maxlength="6", placeholder="ABC123"',
          'Telefono: type="tel", pattern italiano, required',
          'Checkbox: Accetto termini e condizioni (required)',
          'Checkbox: Accetto newsletter (opzionale, NOT required)',
          'Campo readonly per mostrare ID utente generato automaticamente',
          'Campo disabled per funzione premium "Abbonamento Pro" non disponibile',
          'Button submit "Registrati Ora"',
          'BONUS: Aggiungi un select "Come ci hai conosciuto?" con required',
          'BONUS: Aggiungi input range (1-10) per "Esperienza con la programmazione" con min, max, step',
        ]}
        hint="Per il pattern della password puoi usare una regex semplice come pattern='(?=.*[A-Z])(?=.*[0-9]).{8,}' che significa: almeno 1 maiuscola, almeno 1 numero, minimo 8 caratteri totali. Per il telefono italiano usa pattern='[0-9]{10}' (10 cifre). Ricorda che HTML non può confrontare email e conferma email: metti solo required, il confronto si fa con JavaScript! Usa title su tutti i pattern per spiegare il formato richiesto."
      />

      {/* Checklist */}
      <Checklist
        items={[
          'So usare required per rendere campi obbligatori',
          'So usare minlength e maxlength per controllare la lunghezza del testo',
          'So usare min, max e step per validare numeri',
          'Capisco le basi delle regex e come usare pattern',
          'Aggiungo sempre title quando uso pattern per aiutare l\'utente',
          'So la differenza tra disabled (non inviato) e readonly (inviato)',
          'Conosco i messaggi di errore nativi del browser',
          'So combinare più attributi di validazione sullo stesso campo',
          'Capisco che la validazione HTML è il primo livello di difesa (poi serve validazione server)',
          'Ho testato i form nei diversi browser per vedere i messaggi di errore',
        ]}
      />

      {/* Box Finale */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">🎉 Ottimo Lavoro!</h2>
        <p className="text-xl mb-4">
          Ora sai validare i form come un professionista! I tuoi utenti ti ringrazieranno per i messaggi di errore chiari
          e per aver impedito loro di inviare dati sbagliati. 🛡️
        </p>
        <p className="text-lg">
          Nella prossima lezione: <strong>Audio e Video</strong> - Portiamo il multimediale nelle nostre pagine! 🎵🎬
        </p>
      </div>
    </LessonLayout>
  );
}
