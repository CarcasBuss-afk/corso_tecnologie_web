import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import LessonPreview from '@/components/didattica/LessonPreview';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import { getLezioniByModuloSlug } from '@/lib/moduli';

export default function Lezione10Page() {
  const lezioni = getLezioniByModuloSlug('modulo-1-html');

  return (
    <LessonLayout
      moduloSlug="modulo-1-html"
      moduloTitolo="Modulo 1: HTML - Le Fondamenta del Web"
      lezioni={lezioni}
    >
      <div className="max-w-4xl mx-auto">
        <LessonHeader
          numero={10}
          titolo="Form - Input Avanzati"
          durata="2 ore"
          difficolta="media"
          obiettivi={[
            'Usare checkbox per opzioni multiple',
            'Creare gruppi di radio button per scelte esclusive',
            'Usare input per date e orari',
            'Permettere l\'upload di file',
            'Creare slider con range',
            'Usare color picker e altri input avanzati'
          ]}
        />

        {/* Introduzione */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Input Avanzati</h2>
          <p className="text-lg text-gray-700 mb-6">
            Nella lezione precedente hai visto gli input base per testo. Ora scoprirai input più speciali
            che ti permettono di creare form ricchi e interattivi: checkbox per selezionare più opzioni,
            radio button per scelte esclusive, date picker, file upload e molto altro!
          </p>
        </section>

        {/* Checkbox */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Checkbox - Seleziona Più Opzioni</h2>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">💡 Cosa sono i Checkbox?</h3>
            <p className="text-blue-800">
              I checkbox sono delle caselle che puoi spuntare o deselezionare.
              Sono perfetti quando l'utente può scegliere <strong>più opzioni contemporaneamente</strong>.
              Ad esempio: interessi, hobby, ingredienti per una pizza, ecc.
            </p>
          </div>

          <CodeExample
            title="Checkbox Singolo"
            code={`<form>
  <label>
    <input type="checkbox" name="accetto" value="si">
    Accetto i termini e condizioni
  </label>
</form>`}
            language="html"
          />

          <LessonPreview
            title="Come appare"
            html={`<form>
  <label>
    <input type="checkbox" name="accetto" value="si">
    Accetto i termini e condizioni
  </label>
</form>`}
          />

          <CodeExample
            title="Gruppo di Checkbox"
            code={`<form>
  <p>Seleziona i tuoi hobby:</p>

  <label>
    <input type="checkbox" name="hobby" value="sport">
    Sport
  </label><br>

  <label>
    <input type="checkbox" name="hobby" value="musica">
    Musica
  </label><br>

  <label>
    <input type="checkbox" name="hobby" value="lettura">
    Lettura
  </label><br>

  <label>
    <input type="checkbox" name="hobby" value="videogiochi">
    Videogiochi
  </label>
</form>`}
            language="html"
          />

          <LessonPreview
            title="Come appare"
            html={`<form>
  <p><strong>Seleziona i tuoi hobby:</strong></p>

  <label>
    <input type="checkbox" name="hobby" value="sport">
    Sport
  </label><br>

  <label>
    <input type="checkbox" name="hobby" value="musica">
    Musica
  </label><br>

  <label>
    <input type="checkbox" name="hobby" value="lettura">
    Lettura
  </label><br>

  <label>
    <input type="checkbox" name="hobby" value="videogiochi">
    Videogiochi
  </label>
</form>`}
            description="Puoi selezionare più caselle contemporaneamente!"
          />

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="text-sm text-yellow-800">
              <strong>📌 Nota:</strong> Tutti i checkbox dello stesso gruppo hanno lo stesso
              <code className="bg-yellow-100 px-1 rounded">name</code>, ma
              <code className="bg-yellow-100 px-1 rounded">value</code> diversi.
            </p>
          </div>
        </section>

        {/* Radio Button */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Radio Button - Scegli Solo Una</h2>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-purple-900 mb-2">💡 Cosa sono i Radio Button?</h3>
            <p className="text-purple-800">
              I radio button sono bottoni circolari dove puoi selezionare <strong>una sola opzione</strong>
              alla volta. Quando ne selezioni uno, quello precedente si deseleziona automaticamente.
              Perfetti per: genere, taglia, metodo di pagamento, ecc.
            </p>
          </div>

          <CodeExample
            title="Gruppo di Radio Button"
            code={`<form>
  <p>Seleziona il tuo genere:</p>

  <label>
    <input type="radio" name="genere" value="maschio">
    Maschio
  </label><br>

  <label>
    <input type="radio" name="genere" value="femmina">
    Femmina
  </label><br>

  <label>
    <input type="radio" name="genere" value="altro">
    Altro
  </label>
</form>`}
            language="html"
          />

          <LessonPreview
            title="Come appare"
            html={`<form>
  <p><strong>Seleziona il tuo genere:</strong></p>

  <label>
    <input type="radio" name="genere" value="maschio">
    Maschio
  </label><br>

  <label>
    <input type="radio" name="genere" value="femmina">
    Femmina
  </label><br>

  <label>
    <input type="radio" name="genere" value="altro">
    Altro
  </label>
</form>`}
            description="Prova a selezionare: puoi sceglierne solo uno!"
          />

          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
            <p className="text-sm text-red-800">
              <strong>⚠️ Importante:</strong> Per funzionare correttamente, tutti i radio button dello stesso
              gruppo devono avere lo stesso <code className="bg-red-100 px-1 rounded">name</code>!
            </p>
          </div>
        </section>

        {/* Differenza Checkbox vs Radio */}
        <section>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-gray-300 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Checkbox vs Radio: Qual è la differenza?</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-blue-700 mb-2">☑️ Checkbox</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Puoi selezionare <strong>più opzioni</strong></li>
                  <li>Puoi anche non selezionarne nessuna</li>
                  <li>Forma: quadrato</li>
                  <li>Esempio: ingredienti pizza, hobby</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-purple-700 mb-2">🔘 Radio Button</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Puoi selezionare <strong>solo una opzione</strong></li>
                  <li>Devi sceglierne una (obbligatoria)</li>
                  <li>Forma: cerchio</li>
                  <li>Esempio: genere, taglia, pagamento</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Input Date */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Date - Seleziona una Data</h2>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-green-900 mb-2">📅 Input per le Date</h3>
            <p className="text-green-800">
              Con <code className="bg-green-100 px-1 rounded">type="date"</code> il browser mostra
              un calendario dove l'utente può scegliere una data. Comodo per prenotazioni, compleanni, ecc.
            </p>
          </div>

          <CodeExample
            title="Input Date"
            code={`<form>
  <label for="compleanno">Data di nascita:</label><br>
  <input type="date" id="compleanno" name="compleanno">
</form>`}
            language="html"
          />

          <LessonPreview
            title="Come appare"
            html={`<form>
  <label for="compleanno">Data di nascita:</label><br>
  <input type="date" id="compleanno" name="compleanno">
</form>`}
            description="Clicca sull'input per aprire il calendario!"
          />

          <CodeExample
            title="Altri Input Temporali"
            code={`<form>
  <!-- Data e ora -->
  <label for="appuntamento">Data e ora appuntamento:</label><br>
  <input type="datetime-local" id="appuntamento" name="appuntamento"><br><br>

  <!-- Solo ora -->
  <label for="orario">Orario preferito:</label><br>
  <input type="time" id="orario" name="orario"><br><br>

  <!-- Mese e anno -->
  <label for="periodo">Mese e anno:</label><br>
  <input type="month" id="periodo" name="periodo"><br><br>

  <!-- Settimana -->
  <label for="settimana">Settimana:</label><br>
  <input type="week" id="settimana" name="settimana">
</form>`}
            language="html"
          />

          <LessonPreview
            title="Come appaiono"
            html={`<form>
  <label for="appuntamento">Data e ora appuntamento:</label><br>
  <input type="datetime-local" id="appuntamento" name="appuntamento"><br><br>

  <label for="orario">Orario preferito:</label><br>
  <input type="time" id="orario" name="orario"><br><br>

  <label for="periodo">Mese e anno:</label><br>
  <input type="month" id="periodo" name="periodo"><br><br>

  <label for="settimana">Settimana:</label><br>
  <input type="week" id="settimana" name="settimana">
</form>`}
          />
        </section>

        {/* Input File */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">File - Carica un File</h2>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-orange-900 mb-2">📁 Upload di File</h3>
            <p className="text-orange-800">
              Con <code className="bg-orange-100 px-1 rounded">type="file"</code> l'utente può
              caricare file dal suo computer: foto, PDF, documenti, ecc.
            </p>
          </div>

          <CodeExample
            title="Input File Base"
            code={`<form>
  <label for="foto">Carica la tua foto:</label><br>
  <input type="file" id="foto" name="foto">
</form>`}
            language="html"
          />

          <LessonPreview
            title="Come appare"
            html={`<form>
  <label for="foto">Carica la tua foto:</label><br>
  <input type="file" id="foto" name="foto">
</form>`}
          />

          <CodeExample
            title="Limitare i Tipi di File"
            code={`<form>
  <!-- Solo immagini -->
  <label for="immagine">Carica un'immagine:</label><br>
  <input type="file" id="immagine" name="immagine" accept="image/*"><br><br>

  <!-- Solo PDF -->
  <label for="documento">Carica un PDF:</label><br>
  <input type="file" id="documento" name="documento" accept=".pdf"><br><br>

  <!-- File multipli -->
  <label for="allegati">Carica più file:</label><br>
  <input type="file" id="allegati" name="allegati" multiple>
</form>`}
            language="html"
          />

          <LessonPreview
            title="Come appaiono"
            html={`<form>
  <label for="immagine">Carica un'immagine:</label><br>
  <input type="file" id="immagine" name="immagine" accept="image/*"><br><br>

  <label for="documento">Carica un PDF:</label><br>
  <input type="file" id="documento" name="documento" accept=".pdf"><br><br>

  <label for="allegati">Carica più file:</label><br>
  <input type="file" id="allegati" name="allegati" multiple>
</form>`}
          />
        </section>

        {/* Input Range */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Range - Slider per Valori</h2>

          <div className="bg-pink-50 border-l-4 border-pink-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-pink-900 mb-2">🎚️ Slider Interattivi</h3>
            <p className="text-pink-800">
              Con <code className="bg-pink-100 px-1 rounded">type="range"</code> crei uno slider che
              l'utente può trascinare per scegliere un valore. Perfetto per volume, prezzo, valutazioni, ecc.
            </p>
          </div>

          <CodeExample
            title="Range Base"
            code={`<form>
  <label for="volume">Volume:</label><br>
  <input type="range" id="volume" name="volume" min="0" max="100">
</form>`}
            language="html"
          />

          <LessonPreview
            title="Come appare"
            html={`<form>
  <label for="volume">Volume:</label><br>
  <input type="range" id="volume" name="volume" min="0" max="100">
</form>`}
            description="Trascina lo slider per cambiare il valore!"
          />

          <CodeExample
            title="Range con Dettagli"
            code={`<form>
  <label for="prezzo">Prezzo massimo: €</label><br>
  <input type="range" id="prezzo" name="prezzo"
         min="0" max="1000" step="50" value="500"><br><br>

  <label for="valutazione">Valutazione (1-5 stelle):</label><br>
  <input type="range" id="valutazione" name="valutazione"
         min="1" max="5" step="1" value="3">
</form>`}
            language="html"
          />

          <LessonPreview
            title="Come appaiono"
            html={`<form>
  <label for="prezzo">Prezzo massimo: €</label><br>
  <input type="range" id="prezzo" name="prezzo"
         min="0" max="1000" step="50" value="500"><br><br>

  <label for="valutazione">Valutazione (1-5 stelle):</label><br>
  <input type="range" id="valutazione" name="valutazione"
         min="1" max="5" step="1" value="3">
</form>`}
          />

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">Attributi del Range:</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li><code className="bg-gray-200 px-1 rounded">min</code>: valore minimo</li>
              <li><code className="bg-gray-200 px-1 rounded">max</code>: valore massimo</li>
              <li><code className="bg-gray-200 px-1 rounded">step</code>: intervallo tra i valori (es. 5, 10, 50)</li>
              <li><code className="bg-gray-200 px-1 rounded">value</code>: valore iniziale</li>
            </ul>
          </div>
        </section>

        {/* Input Color */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Color - Seleziona un Colore</h2>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">🎨 Color Picker</h3>
            <p className="text-indigo-800">
              Con <code className="bg-indigo-100 px-1 rounded">type="color"</code> il browser mostra
              un selettore di colori dove l'utente può scegliere qualsiasi colore!
            </p>
          </div>

          <CodeExample
            title="Color Picker"
            code={`<form>
  <label for="colore-preferito">Scegli il tuo colore preferito:</label><br>
  <input type="color" id="colore-preferito" name="colore-preferito" value="#3B82F6">
</form>`}
            language="html"
          />

          <LessonPreview
            title="Come appare"
            html={`<form>
  <label for="colore-preferito">Scegli il tuo colore preferito:</label><br>
  <input type="color" id="colore-preferito" name="colore-preferito" value="#3B82F6">
</form>`}
            description="Clicca sul quadratino colorato per scegliere!"
          />
        </section>

        {/* Form Completo */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 Form Completo con Input Avanzati</h2>
          <p className="text-lg text-gray-700 mb-6">
            Vediamo un form che usa tutti gli input avanzati che hai imparato:
          </p>

          <CodeExample
            title="Form di Registrazione Evento"
            code={`<form>
  <h3>Registrazione Evento</h3>

  <!-- Checkbox -->
  <p>Attività di interesse:</p>
  <label><input type="checkbox" name="attivita" value="sport"> Sport</label><br>
  <label><input type="checkbox" name="attivita" value="musica"> Musica</label><br>
  <label><input type="checkbox" name="attivita" value="arte"> Arte</label><br><br>

  <!-- Radio -->
  <p>Taglia maglietta:</p>
  <label><input type="radio" name="taglia" value="s"> S</label>
  <label><input type="radio" name="taglia" value="m"> M</label>
  <label><input type="radio" name="taglia" value="l"> L</label>
  <label><input type="radio" name="taglia" value="xl"> XL</label><br><br>

  <!-- Date -->
  <label for="data-arrivo">Data di arrivo:</label><br>
  <input type="date" id="data-arrivo" name="data-arrivo"><br><br>

  <!-- Time -->
  <label for="orario-preferito">Orario preferito:</label><br>
  <input type="time" id="orario-preferito" name="orario-preferito"><br><br>

  <!-- File -->
  <label for="foto-profilo">Foto profilo:</label><br>
  <input type="file" id="foto-profilo" name="foto-profilo" accept="image/*"><br><br>

  <!-- Range -->
  <label for="esperienza">Livello di esperienza (1-10):</label><br>
  <input type="range" id="esperienza" name="esperienza" min="1" max="10" value="5"><br><br>

  <!-- Color -->
  <label for="colore-team">Colore del team:</label><br>
  <input type="color" id="colore-team" name="colore-team" value="#10B981"><br><br>

  <button type="submit">Registrati</button>
</form>`}
            language="html"
          />

          <LessonPreview
            title="Form Completo in Azione"
            html={`<form style="background: #f9fafb; padding: 20px; border-radius: 8px;">
  <h3 style="margin-top: 0;">Registrazione Evento</h3>

  <p><strong>Attività di interesse:</strong></p>
  <label><input type="checkbox" name="attivita" value="sport"> Sport</label><br>
  <label><input type="checkbox" name="attivita" value="musica"> Musica</label><br>
  <label><input type="checkbox" name="attivita" value="arte"> Arte</label><br><br>

  <p><strong>Taglia maglietta:</strong></p>
  <label><input type="radio" name="taglia" value="s"> S</label>
  <label><input type="radio" name="taglia" value="m"> M</label>
  <label><input type="radio" name="taglia" value="l"> L</label>
  <label><input type="radio" name="taglia" value="xl"> XL</label><br><br>

  <label for="data-arrivo"><strong>Data di arrivo:</strong></label><br>
  <input type="date" id="data-arrivo" name="data-arrivo"><br><br>

  <label for="orario-preferito"><strong>Orario preferito:</strong></label><br>
  <input type="time" id="orario-preferito" name="orario-preferito"><br><br>

  <label for="foto-profilo"><strong>Foto profilo:</strong></label><br>
  <input type="file" id="foto-profilo" name="foto-profilo" accept="image/*"><br><br>

  <label for="esperienza"><strong>Livello di esperienza (1-10):</strong></label><br>
  <input type="range" id="esperienza" name="esperienza" min="1" max="10" value="5"><br><br>

  <label for="colore-team"><strong>Colore del team:</strong></strong></label><br>
  <input type="color" id="colore-team" name="colore-team" value="#10B981"><br><br>

  <button type="submit">Registrati</button>
</form>`}
          />
        </section>

        {/* Tabella Riepilogo */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Riepilogo Input Avanzati</h2>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border-2 border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Cosa fa</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Quando usarlo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>checkbox</code></td>
                  <td className="border border-gray-300 px-4 py-2">Caselle da spuntare (multiple)</td>
                  <td className="border border-gray-300 px-4 py-2">Hobby, interessi, opzioni</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>radio</code></td>
                  <td className="border border-gray-300 px-4 py-2">Scelta esclusiva (una sola)</td>
                  <td className="border border-gray-300 px-4 py-2">Genere, taglia, pagamento</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>date</code></td>
                  <td className="border border-gray-300 px-4 py-2">Seleziona una data</td>
                  <td className="border border-gray-300 px-4 py-2">Compleanno, prenotazione</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>time</code></td>
                  <td className="border border-gray-300 px-4 py-2">Seleziona un orario</td>
                  <td className="border border-gray-300 px-4 py-2">Appuntamento, orario</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>datetime-local</code></td>
                  <td className="border border-gray-300 px-4 py-2">Data e ora insieme</td>
                  <td className="border border-gray-300 px-4 py-2">Evento con orario preciso</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>file</code></td>
                  <td className="border border-gray-300 px-4 py-2">Carica file dal computer</td>
                  <td className="border border-gray-300 px-4 py-2">Foto, documenti, allegati</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>range</code></td>
                  <td className="border border-gray-300 px-4 py-2">Slider per valori numerici</td>
                  <td className="border border-gray-300 px-4 py-2">Volume, prezzo, rating</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2"><code>color</code></td>
                  <td className="border border-gray-300 px-4 py-2">Selettore di colori</td>
                  <td className="border border-gray-300 px-4 py-2">Personalizzazione colori</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Esercizio */}
        <Exercise
          title="Esercizio: Form Sondaggio Musicale"
          difficulty="media"
          steps={[
            'Crea un form con titolo "Sondaggio Preferenze Musicali"',
            'Aggiungi un gruppo di checkbox per i generi musicali preferiti (Rock, Pop, Jazz, Classica, Hip-Hop)',
            'Aggiungi radio button per chiedere "Quante ore al giorno ascolti musica?" (0-1, 1-3, 3-5, Più di 5)',
            'Aggiungi un input date per chiedere "Data del tuo ultimo concerto"',
            'Aggiungi un input range (min=1, max=10) per chiedere "Quanto ami la musica?" con label appropriata',
            'Aggiungi un input color per chiedere "Colore associato alla tua musica preferita"',
            'Aggiungi un input file per "Carica la copertina del tuo album preferito" (solo immagini)',
            'Aggiungi un bottone "Invia Sondaggio"',
            'Testa il form: prova a selezionare checkbox multipli e verifica che i radio permettano una sola scelta'
          ]}
        />

        {/* Challenge */}
        <Challenge
          title="Challenge: Form Prenotazione Viaggio"
          difficulty="difficile"
          description="Crea un form completo per prenotare un viaggio usando TUTTI gli input avanzati che hai imparato!"
          requirements={[
            'Titolo del form: "Prenota il Tuo Viaggio"',
            'Checkbox per servizi extra (Assicurazione, Noleggio auto, Guida turistica, Trasferimento aeroporto)',
            'Radio button per classe di viaggio (Economica, Business, Prima Classe)',
            'Input date per "Data di partenza" e "Data di ritorno"',
            'Input time per "Orario preferito di partenza"',
            'Input file per "Carica documento di identità" (accetta solo .pdf e immagini)',
            'Input range (1-5) per "Livello di comfort desiderato"',
            'Input color per "Colore preferito per i servizi personalizzati"',
            'Un secondo gruppo di radio button per "Tipo di camera" (Singola, Doppia, Suite)',
            'Bottone submit "Prenota Ora"',
            'BONUS: Aggiungi un input month per "Periodo alternativo" e un input number per "Budget massimo (€)"'
          ]}
        />

        {/* Checklist */}
        <Checklist
          items={[
            'Ho capito la differenza tra checkbox e radio button',
            'So quando usare checkbox (scelte multiple) e quando radio (scelta singola)',
            'So usare input type="date" per le date',
            'So usare input type="time" per gli orari',
            'So usare input type="file" per caricare file',
            'So limitare i tipi di file con l\'attributo accept',
            'So creare slider con input type="range"',
            'Conosco gli attributi min, max, step e value per i range',
            'So usare input type="color" per i color picker',
            'Ho completato l\'esercizio del sondaggio musicale',
            'Ho provato la challenge della prenotazione viaggio',
            'Ricordo che tutti i radio dello stesso gruppo devono avere lo stesso name',
            'So che i checkbox possono avere più valori selezionati contemporaneamente'
          ]}
        />

        {/* Prossima Lezione */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-400 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">🎉 Ottimo Lavoro!</h3>
          <p className="text-gray-700 mb-4">
            Hai imparato a usare gli input avanzati per creare form interattivi e completi!
            Ora sai gestire checkbox, radio button, date, file upload, slider e color picker.
          </p>
          <p className="text-gray-700">
            <strong>Prossima lezione:</strong> Imparerai come validare i form per assicurarti
            che gli utenti inseriscano dati corretti! 🎯
          </p>
        </div>
      </div>
    </LessonLayout>
  );
}
