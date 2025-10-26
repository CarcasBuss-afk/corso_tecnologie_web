import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import { getLezioniByModuloSlug } from '@/lib/moduli';

export default function Lezione18() {
  const lezioni = getLezioniByModuloSlug('modulo-1-html');

  return (
    <LessonLayout
      moduloSlug="modulo-1-html"
      moduloTitolo="Modulo 1: HTML"
      lezioni={lezioni}
      lezioneSlug="lezione-18-mini-progetto-parte-3"
      lezioneTitolo="Mini-Progetto Parte 3: Contatti e Ritocchi Finali"
    >
      <LessonHeader
        numero={18}
        titolo="Mini-Progetto Parte 3: Contatti e Ritocchi Finali"
        durata="2 ore"
        difficolta="media"
        obiettivi={[
          'Completare la pagina Contatti con form professionale',
          'Validare e testare tutto il sito',
          'Ottimizzare SEO e accessibilità',
          'Preparare il portfolio per la pubblicazione',
        ]}
      />

      <section className="prose max-w-none">
        <div className="bg-gradient-to-r from-yellow-50 to-green-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">🎊 Ultima Tappa del Viaggio!</h2>
          <p className="text-gray-700 mb-3">
            Sei arrivato all'ultima lezione del modulo HTML! Sei a un passo dal completare
            il tuo primo progetto web completo e professionale.
          </p>
          <p className="text-gray-700">
            In questa lezione finale completeremo la pagina Contatti e daremo gli ultimi
            ritocchi per rendere il portfolio perfetto. Preparati a celebrare! 🎉
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Pagina Contatti (contact.html)</h2>

        <p className="text-gray-700 mb-4">
          La pagina Contatti è fondamentale! È dove i visitatori ti contattano per
          opportunità, collaborazioni o semplicemente per fare due chiacchiere.
          Deve essere facile, accessibile e invitante.
        </p>

        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 my-6">
          <h3 className="font-bold text-gray-800 mb-2">🎯 Obiettivi della Pagina Contatti</h3>
          <ul className="text-gray-700 space-y-1">
            <li>✓ Form di contatto completo e validato</li>
            <li>✓ Informazioni di contatto chiare e visibili</li>
            <li>✓ Link ai social media</li>
            <li>✓ FAQ per domande comuni</li>
            <li>✓ Call-to-action efficace</li>
          </ul>
        </div>

        <CodeExample
          title="Struttura Completa contact.html - Sezione <main>"
          code={`<main>
  <!-- Introduzione -->
  <section>
    <h2>Entra in Contatto!</h2>
    <p>
      Hai un progetto interessante? Vuoi collaborare? O semplicemente
      fare due chiacchiere sul mondo del web? Sono sempre felice di
      conoscere persone nuove!
    </p>
    <p>
      Compila il form qui sotto e ti risponderò il prima possibile,
      di solito entro 24 ore. ⚡
    </p>
  </section>

  <!-- Form di Contatto -->
  <section>
    <h2>📬 Invia un Messaggio</h2>

    <form action="#" method="post">
      <!-- Informazioni Personali -->
      <fieldset>
        <legend>Le Tue Informazioni</legend>

        <div>
          <label for="nome">Nome Completo <abbr title="Obbligatorio">*</abbr></label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            placeholder="Mario Rossi"
            autocomplete="name"
          >
        </div>

        <div>
          <label for="email">Email <abbr title="Obbligatorio">*</abbr></label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="mario.rossi@example.com"
            autocomplete="email"
          >
        </div>

        <div>
          <label for="telefono">Telefono (Opzionale)</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="+39 123 456 7890"
            autocomplete="tel"
          >
        </div>
      </fieldset>

      <!-- Motivo del Contatto -->
      <fieldset>
        <legend>Motivo del Contatto</legend>

        <div>
          <label for="motivo">Riguardo a:</label>
          <select id="motivo" name="motivo" required>
            <option value="">-- Seleziona un'opzione --</option>
            <option value="lavoro">Opportunità di Lavoro</option>
            <option value="progetto">Collaborazione su Progetto</option>
            <option value="freelance">Lavoro Freelance</option>
            <option value="domanda">Domanda Generale</option>
            <option value="altro">Altro</option>
          </select>
        </div>

        <div>
          <label for="budget">Budget (se progetto)</label>
          <select id="budget" name="budget">
            <option value="">-- Non specificato --</option>
            <option value="piccolo">< 500€</option>
            <option value="medio">500€ - 2000€</option>
            <option value="grande">> 2000€</option>
          </select>
        </div>
      </fieldset>

      <!-- Messaggio -->
      <fieldset>
        <legend>Il Tuo Messaggio</legend>

        <div>
          <label for="oggetto">Oggetto <abbr title="Obbligatorio">*</abbr></label>
          <input
            type="text"
            id="oggetto"
            name="oggetto"
            required
            placeholder="Es: Collaborazione per progetto web"
            maxlength="100"
          >
        </div>

        <div>
          <label for="messaggio">Messaggio <abbr title="Obbligatorio">*</abbr></label>
          <textarea
            id="messaggio"
            name="messaggio"
            required
            rows="8"
            placeholder="Raccontami di più sul tuo progetto o sulla tua richiesta..."
            minlength="20"
            maxlength="1000"
          ></textarea>
          <small>Minimo 20 caratteri, massimo 1000</small>
        </div>
      </fieldset>

      <!-- Preferenze -->
      <fieldset>
        <legend>Preferenze di Contatto</legend>

        <div>
          <p>Come preferisci essere ricontattato?</p>
          <label>
            <input type="radio" name="contatto_preferito" value="email" checked>
            Email
          </label>
          <label>
            <input type="radio" name="contatto_preferito" value="telefono">
            Telefono
          </label>
          <label>
            <input type="radio" name="contatto_preferito" value="qualsiasi">
            Qualsiasi metodo va bene
          </label>
        </div>

        <div>
          <label>
            <input type="checkbox" name="newsletter" value="si">
            Iscrivimi alla newsletter (aggiornamenti mensili)
          </label>
        </div>
      </fieldset>

      <!-- Privacy -->
      <fieldset>
        <legend>Privacy</legend>

        <div>
          <label>
            <input type="checkbox" name="privacy" required>
            Accetto l'<a href="#" target="_blank">informativa sulla privacy</a>
            <abbr title="Obbligatorio">*</abbr>
          </label>
        </div>

        <div>
          <label>
            <input type="checkbox" name="marketing">
            Acconsento al trattamento dei dati per finalità di marketing
          </label>
        </div>
      </fieldset>

      <!-- Bottoni -->
      <div>
        <button type="submit">Invia Messaggio ✉️</button>
        <button type="reset">Cancella</button>
      </div>
    </form>
  </section>

  <!-- Informazioni di Contatto Dirette -->
  <section>
    <h2>📞 Contatti Diretti</h2>

    <p>Preferisci contattarmi direttamente? Ecco come trovarmi:</p>

    <dl>
      <dt><strong>Email:</strong></dt>
      <dd>
        <a href="mailto:tuoemail@example.com">tuoemail@example.com</a>
      </dd>

      <dt><strong>Telefono:</strong></dt>
      <dd>
        <a href="tel:+391234567890">+39 123 456 7890</a>
      </dd>

      <dt><strong>LinkedIn:</strong></dt>
      <dd>
        <a href="https://linkedin.com/in/tuousername" target="_blank">
          linkedin.com/in/tuousername
        </a>
      </dd>

      <dt><strong>GitHub:</strong></dt>
      <dd>
        <a href="https://github.com/tuousername" target="_blank">
          github.com/tuousername
        </a>
      </dd>

      <dt><strong>Disponibilità:</strong></dt>
      <dd>Lun-Ven, 9:00-18:00 (CET)</dd>

      <dt><strong>Tempo di Risposta:</strong></dt>
      <dd>Di solito entro 24 ore</dd>
    </dl>
  </section>

  <!-- Social Media -->
  <section>
    <h2>🌐 Seguimi sui Social</h2>

    <p>Resta aggiornato sul mio lavoro e i miei progetti:</p>

    <ul>
      <li>
        <a href="https://github.com/tuousername" target="_blank">
          <strong>GitHub</strong> - Codice e progetti open source
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/tuousername" target="_blank">
          <strong>LinkedIn</strong> - Aggiornamenti professionali
        </a>
      </li>
      <li>
        <a href="https://twitter.com/tuousername" target="_blank">
          <strong>Twitter</strong> - Pensieri su tecnologia e web
        </a>
      </li>
      <li>
        <a href="https://instagram.com/tuousername" target="_blank">
          <strong>Instagram</strong> - Dietro le quinte e vita quotidiana
        </a>
      </li>
    </ul>
  </section>

  <!-- FAQ -->
  <section>
    <h2>❓ Domande Frequenti</h2>

    <details>
      <summary>Accetti progetti freelance?</summary>
      <p>
        Sì! Sono sempre aperto a progetti interessanti, soprattutto se coinvolgono
        tecnologie che sto imparando o vogliono imparare. Contattami per discutere
        i dettagli del tuo progetto.
      </p>
    </details>

    <details>
      <summary>Quanto tempo impieghi a rispondere?</summary>
      <p>
        Di solito rispondo entro 24 ore durante la settimana. Nel weekend potrebbe
        volerci un po' di più, ma non più di 48 ore.
      </p>
    </details>

    <details>
      <summary>Lavori su progetti open source?</summary>
      <p>
        Assolutamente! Adoro contribuire a progetti open source. Se hai un progetto
        che pensi possa interessarmi, fammi sapere!
      </p>
    </details>

    <details>
      <summary>Offri consulenze gratuite?</summary>
      <p>
        Per domande brevi e consigli rapidi, sono sempre felice di aiutare gratuitamente.
        Per consulenze più approfondite, possiamo discutere le modalità caso per caso.
      </p>
    </details>

    <details>
      <summary>Sei disponibile per collaborazioni a lungo termine?</summary>
      <p>
        Dipende dal progetto! Contattami con i dettagli e vediamo se c'è un buon
        fit tra le nostre esigenze e disponibilità.
      </p>
    </details>
  </section>

  <!-- Call to Action Finale -->
  <section>
    <h2>🚀 Cosa Aspetti?</h2>
    <p>
      Non essere timido! Che tu abbia un progetto da proporre, una domanda da fare,
      o semplicemente voglia dire ciao, sarò felice di sentirti.
    </p>
    <p>
      <strong>Il momento migliore per contattarmi? Adesso!</strong>
    </p>
    <p>
      <a href="#" onclick="document.getElementById('nome').focus(); return false;">
        Torna al form e invia il tuo messaggio →
      </a>
    </p>
  </section>
</main>`}
        />

        <Exercise
          title="Crea la Pagina Contatti"
          difficulty="media"
          steps={[
            'Apri contact.html in VS Code',
            'Incolla il template base (header, nav, footer)',
            'Cambia il <title> in "Contatti - [Tuo Nome]"',
            'Incolla il contenuto <main> della pagina Contatti',
            'Sostituisci TUTTI i placeholder con le tue informazioni reali',
            'Aggiorna i link social con i tuoi profili veri',
            'Personalizza le FAQ con domande rilevanti per te',
            'Assicurati che tutti i campi required abbiano l\'asterisco',
            'Testa che la validazione HTML5 funzioni (prova a inviare form vuoto)',
            'Verifica che tutti i link interni ed esterni funzionino',
            'Salva e visualizza nel browser',
          ]}
        />

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Ritocchi Finali e Ottimizzazioni</h2>

        <p className="text-gray-700 mb-4">
          Il portfolio è quasi completo! Ora facciamo gli ultimi controlli e ottimizzazioni
          per renderlo perfetto.
        </p>

        <div className="space-y-6 my-6">
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
            <h3 className="font-bold text-gray-800 mb-2">1. ✅ Validazione HTML</h3>
            <p className="text-gray-700 mb-3">
              Valida TUTTE le 4 pagine con il validatore W3C:
            </p>
            <ol className="text-gray-700 text-sm space-y-1 ml-4">
              <li>1. Vai su <a href="https://validator.w3.org" target="_blank" className="text-blue-600 underline">validator.w3.org</a></li>
              <li>2. Carica ogni file HTML (o inserisci l'URL se online)</li>
              <li>3. Correggi tutti gli errori segnalati</li>
              <li>4. Ricontrolla finché non ottieni "Document checking completed. No errors or warnings to show."</li>
            </ol>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <h3 className="font-bold text-gray-800 mb-2">2. 🔍 SEO Check</h3>
            <p className="text-gray-700 mb-2">Verifica che OGNI pagina abbia:</p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ <code className="bg-gray-100 px-2 py-1 rounded">{'<title>'}</code> unico e descrittivo</li>
              <li>✓ Meta description (max 160 caratteri)</li>
              <li>✓ Almeno un <code className="bg-gray-100 px-2 py-1 rounded">{'<h1>'}</code> per pagina</li>
              <li>✓ Gerarchia heading corretta (h1 → h2 → h3, senza salti)</li>
              <li>✓ Attributo alt su TUTTE le immagini</li>
              <li>✓ Link descrittivi (no "clicca qui")</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <h3 className="font-bold text-gray-800 mb-2">3. ♿ Accessibilità</h3>
            <p className="text-gray-700 mb-2">Controlla che il sito sia accessibile:</p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ Tutti i form hanno <code className="bg-gray-100 px-2 py-1 rounded">{'<label>'}</code> associati</li>
              <li>✓ Link hanno testo descrittivo</li>
              <li>✓ Immagini decorative hanno alt=""</li>
              <li>✓ Immagini significative hanno alt descrittivo</li>
              <li>✓ Uso corretto di tag semantici</li>
              <li>✓ Contrasto colori sufficiente (se hai già CSS)</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <h3 className="font-bold text-gray-800 mb-2">4. 🧪 Test Funzionalità</h3>
            <p className="text-gray-700 mb-2">Testa TUTTO manualmente:</p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ Ogni link del menu porta alla pagina corretta</li>
              <li>✓ I link #progetto1, #progetto2, #progetto3 funzionano</li>
              <li>✓ Tutte le immagini si caricano</li>
              <li>✓ Il form non si invia se mancano campi required</li>
              <li>✓ Email validation funziona (prova con email invalida)</li>
              <li>✓ Footer è identico in tutte le 4 pagine</li>
              <li>✓ Header e nav sono identici in tutte le 4 pagine</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <h3 className="font-bold text-gray-800 mb-2">5. 📱 Preparazione Mobile</h3>
            <p className="text-gray-700 mb-2">Anche senza CSS, prepara il terreno:</p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>✓ Meta viewport presente: <code className="bg-gray-100 px-2 py-1 rounded">{'<meta name="viewport" content="width=device-width, initial-scale=1.0">'}</code></li>
              <li>✓ Contenuto ordinato logicamente (importante per mobile)</li>
              <li>✓ Niente layout table-based</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Checklist Finale Pre-Pubblicazione</h2>

        <p className="text-gray-700 mb-4">
          Prima di considerare il progetto completo, passa attraverso questa checklist
          completa. Ogni punto è importante!
        </p>

        <Checklist
          items={[
            '✅ Struttura: Ho creato tutte e 4 le pagine (index, about, projects, contact)',
            '✅ Consistenza: Header, nav e footer sono identici in tutte le pagine',
            '✅ Navigazione: Tutti i link del menu funzionano correttamente',
            '✅ Immagini: Tutte le immagini hanno attributo alt descrittivo',
            '✅ Immagini: Tutte le immagini si caricano correttamente',
            '✅ Form: Tutti i campi hanno label correttamente associate',
            '✅ Form: La validazione HTML5 funziona (required, email, minlength)',
            '✅ SEO: Ogni pagina ha un <title> unico e descrittivo',
            '✅ SEO: Ogni pagina ha meta description',
            '✅ SEO: Uso corretto della gerarchia heading (h1, h2, h3)',
            '✅ Semantica: Uso tag semantici (header, nav, main, article, section, footer)',
            '✅ Accessibilità: Test con screen reader o validatore accessibilità',
            '✅ Validazione: Tutte le 4 pagine validano senza errori su validator.w3.org',
            '✅ Link: Tutti i link esterni hanno target="_blank"',
            '✅ Link: I link a #progetto1, #progetto2, #progetto3 funzionano',
            '✅ Personalizzazione: Ho sostituito TUTTI i placeholder con i miei dati',
            '✅ Contenuto: Tutto il testo è personale e autentico',
            '✅ Test: Ho testato TUTTE le funzionalità manualmente',
          ]}
        />

        <Challenge
          title="Sfida Finale: Pubblica Online il Tuo Portfolio!"
          description="Porta il tuo portfolio sul web vero! Rendilo accessibile a tutti con un URL pubblico."
          requirements={[
            'Crea un account su GitHub (se non ce l\'hai già)',
            'Crea un nuovo repository chiamato "username.github.io" (sostituisci username con il tuo)',
            'Carica tutti i file del portfolio nel repository',
            'Attiva GitHub Pages nelle impostazioni del repository',
            'Visita https://username.github.io e ammira il tuo sito online!',
            'BONUS: Acquista un dominio personalizzato e collegalo',
            'EXTRA: Condividi il link del tuo portfolio sui social!',
          ]}
          hint="GitHub Pages è gratuito e perfetto per ospitare siti HTML statici! Tutorial completo disponibile su docs.github.com/pages"
        />

        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400 my-6">
          <h3 className="font-bold text-gray-800 mb-2">🎓 Prossimi Passi dopo il Portfolio</h3>
          <p className="text-gray-700 mb-3">
            Congratulazioni per aver completato il portfolio! Ecco cosa fare dopo:
          </p>
          <ol className="text-gray-700 space-y-2">
            <li>
              <strong>1. Aggiungi CSS:</strong> Nella prossima settimana, imparerai CSS e potrai
              dare stile al tuo portfolio rendendolo bellissimo!
            </li>
            <li>
              <strong>2. Continua ad Aggiornare:</strong> Man mano che completi nuovi progetti,
              aggiungili alla pagina Progetti. Un portfolio è sempre work-in-progress!
            </li>
            <li>
              <strong>3. Chiedi Feedback:</strong> Mostra il portfolio ad amici, famiglia,
              mentori. Il feedback è prezioso!
            </li>
            <li>
              <strong>4. Condividi:</strong> Non aver paura di condividere il tuo lavoro!
              Metti il link nel tuo profilo LinkedIn, su Twitter, ovunque!
            </li>
          </ol>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50 rounded-lg border-2 border-yellow-400">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            🎉🎊 CONGRATULAZIONI! 🎊🎉
          </h2>

          <p className="text-gray-700 text-lg mb-4 text-center">
            <strong>Hai completato il Modulo 1: HTML!</strong>
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="font-bold text-gray-800 mb-3 text-center">🏆 Cosa Hai Imparato</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>✅ Struttura HTML base</li>
                <li>✅ Tag semantici HTML5</li>
                <li>✅ Form complessi e validazione</li>
                <li>✅ Tabelle e liste</li>
                <li>✅ Immagini e multimedia</li>
              </ul>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>✅ Link e navigazione</li>
                <li>✅ SEO di base</li>
                <li>✅ Accessibilità web</li>
                <li>✅ Best practices HTML</li>
                <li>✅ Progetto completo end-to-end</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h3 className="font-bold text-gray-800 mb-3 text-center">📊 Le Tue Statistiche</h3>
            <ul className="text-gray-700 space-y-2 text-center">
              <li><strong>18 Lezioni</strong> completate</li>
              <li><strong>30+ Ore</strong> di apprendimento</li>
              <li><strong>50+ Esercizi</strong> pratici</li>
              <li><strong>1 Portfolio</strong> completo e professionale</li>
              <li><strong>∞ Possibilità</strong> future nel web development!</li>
            </ul>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-700 mb-4">
              <strong>Sei pronto per il prossimo modulo?</strong>
            </p>
            <p className="text-gray-700 mb-6">
              Nel <strong>Modulo 2: CSS</strong> imparerai a dare stile e vita al tuo portfolio,
              creando design moderni, animazioni e layout responsive!
            </p>
            <a
              href="/moduli"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg rounded-lg hover:from-purple-700 hover:to-blue-700 transition shadow-lg"
            >
              Vai al Modulo 2: CSS →
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-300 text-center">
            <p className="text-gray-600 text-sm italic">
              "Il viaggio di mille miglia inizia con un solo passo. Tu ne hai fatti già molti!" 💪
            </p>
          </div>
        </div>
      </section>
    </LessonLayout>
  );
}
