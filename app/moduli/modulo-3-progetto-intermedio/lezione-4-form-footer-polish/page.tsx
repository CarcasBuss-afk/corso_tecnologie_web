import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Challenge from '@/components/didattica/Challenge';
import ProjectMilestone from '@/components/didattica/ProjectMilestone';

export default function Lezione4FormFooterPolish() {
  const lezioni = getLezioniByModuloSlug('modulo-3-progetto-intermedio');

  return (
    <LessonLayout
      moduloSlug="modulo-3-progetto-intermedio"
      moduloTitolo="Modulo 3: Progetto Intermedio"
      lezioni={lezioni}
      lezioneSlug="lezione-4-form-footer-polish"
      lezioneTitolo="Form + Footer + Polish"
    >
      <LessonHeader
        numero={4}
        titolo="Form + Footer + Polish Finale"
        durata="1 ora"
        difficolta="media"
        obiettivi={[
          'Creare un form di contatto/newsletter con HTML5 validation',
          'Costruire un footer professionale a 4 colonne con Flexbox',
          'Applicare smooth scroll su tutta la pagina',
          'Aggiungere focus states avanzati su input',
          'Creare back to top button',
          'Finalizzare il progetto con polish e refinement'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎯 L'Ultima Lezione del Progetto!</h2>
        <p className="text-lg mb-4">
          Sei arrivato all'<strong>ultima lezione</strong> del Modulo 3! Oggi completerai la tua
          landing page aggiungendo gli <strong>ultimi 3 pezzi fondamentali</strong>:
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">📧</span>
              <h3 className="text-2xl font-bold text-blue-900">Form di Contatto</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Un <strong>form funzionale</strong> con validazione HTML5 per raccogliere email o
              messaggi dai visitatori.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <span>✓</span>
                <span>Input email con validazione automatica</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Button submit con hover effect</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Layout centrato e responsive</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">🦶</span>
              <h3 className="text-2xl font-bold text-purple-900">Footer Professionale</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Un <strong>footer completo</strong> a 4 colonne con logo, link utili, social media e
              copyright.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <span>✓</span>
                <span>Layout Flexbox a 4 colonne</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Link social con hover effect</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Responsive: stack su mobile</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">✨</span>
              <h3 className="text-2xl font-bold text-green-900">Polish Finale</h3>
            </div>
            <p className="text-gray-700 mb-3">
              I <strong>tocchi finali</strong> che trasformano un sito da "buono" a
              "professionale": smooth scroll, spacing, dettagli.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <span>✓</span>
                <span>Smooth scroll tra sezioni</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Spacing uniforme e armonioso</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Ottimizzazioni finali</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🎉</span>
            <div>
              <h3 className="font-bold text-xl text-yellow-900 mb-2">
                Alla Fine Avrai una Landing Page Completa!
              </h3>
              <p className="text-gray-700">
                Quando finisci questa lezione, avrai creato un{' '}
                <strong>sito web completo e professionale</strong> che potresti davvero pubblicare
                online. Questo è il tuo <strong>primo pezzo da portfolio</strong>!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parte 1: Form di Contatto */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-t-xl">
          <div className="flex items-center gap-3">
            <span className="text-5xl">📧</span>
            <div>
              <h2 className="text-3xl font-bold">Parte 1: Newsletter / Contact Form</h2>
              <p className="text-blue-100 text-lg mt-2">
                Raccogli email dai visitatori con HTML5 Form Validation
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-blue-200 rounded-b-xl p-8">
          {/* Teoria Form */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>📚</span>
              Perché il Form è Importante?
            </h3>
            <p className="text-lg mb-4">
              Una landing page senza <strong>form</strong> è come un negozio senza cassa: puoi
              mostrare i prodotti, ma non puoi <strong>convertire i visitatori in clienti</strong>.
              Il form ti permette di raccogliere:
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <div className="text-2xl mb-2">📧</div>
                <div className="font-bold mb-1">Email per Newsletter</div>
                <p className="text-sm text-gray-600">
                  Costruisci una mailing list per comunicare con gli utenti
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded p-4">
                <div className="text-2xl mb-2">💬</div>
                <div className="font-bold mb-1">Messaggi di Contatto</div>
                <p className="text-sm text-gray-600">
                  Permetti agli utenti di inviarti domande o feedback
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4">
                <div className="text-2xl mb-2">🎟️</div>
                <div className="font-bold mb-1">Registrazioni / Sign-Up</div>
                <p className="text-sm text-gray-600">
                  Raccogli iscrizioni per beta testing o early access
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-6 my-6">
              <h4 className="font-bold text-lg mb-3 text-green-900">
                🎯 HTML5 Form Validation (Gratis!)
              </h4>
              <p className="text-gray-700 mb-3">
                L'HTML5 ha una funzione <strong>incredibile</strong>: la validazione automatica dei
                form. Non serve JavaScript!
              </p>
              <div className="space-y-2 text-sm">
                <div className="bg-white p-3 rounded border border-green-200">
                  <code className="text-purple-600 font-bold">type="email"</code>
                  <span className="text-gray-700 ml-2">
                    → Il browser controlla automaticamente che sia un'email valida
                  </span>
                </div>
                <div className="bg-white p-3 rounded border border-green-200">
                  <code className="text-purple-600 font-bold">required</code>
                  <span className="text-gray-700 ml-2">
                    → Il campo non può essere lasciato vuoto
                  </span>
                </div>
                <div className="bg-white p-3 rounded border border-green-200">
                  <code className="text-purple-600 font-bold">placeholder="..."</code>
                  <span className="text-gray-700 ml-2">
                    → Testo di esempio che appare nel campo vuoto
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
              <p className="font-bold text-blue-800 mb-2">💡 Suggerimento</p>
              <p className="text-gray-700">
                Se provi a inviare un form con <code className="bg-blue-100 px-2 py-1 rounded">type="email"</code> e scrivi "ciao" invece di
                un'email valida, il browser ti fermerà automaticamente! Provalo quando hai finito.
              </p>
            </div>
          </div>

          {/* Step 1: HTML Form */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>1️⃣</span>
              Step 1: Struttura HTML del Form
            </h3>
            <p className="text-lg mb-4">
              Aggiungi questa sezione <strong>dopo How It Works</strong> e{' '}
              <strong>prima del footer</strong>:
            </p>

            <CodeExample
              title="index.html - Newsletter / Contact Form"
              language="html"
              code={`<!-- Newsletter / Contact Form Section -->
<section id="contact" class="form-section">
  <div class="form-container">
    <!-- Header Sezione -->
    <div class="form-header">
      <h2 class="section-title">Inizia Gratis Oggi</h2>
      <p class="section-subtitle">
        Unisciti a migliaia di giocatori. Nessuna carta di credito richiesta.
      </p>
    </div>

    <!-- Form -->
    <form class="signup-form" action="#" method="post">
      <!-- Input Email -->
      <input
        type="email"
        name="email"
        placeholder="Inserisci la tua email..."
        required
        class="form-input"
      />

      <!-- Button Submit -->
      <button type="submit" class="form-button">
        Inizia Gratis 🚀
      </button>
    </form>

    <!-- Messaggio Privacy (opzionale) -->
    <p class="form-privacy">
      Rispettiamo la tua privacy. Niente spam, promesso. ✌️
    </p>
  </div>
</section>`}
            />

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded my-6">
              <h4 className="font-bold text-yellow-900 mb-2">🔍 Analisi del Codice HTML</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-yellow-600">→</span>
                  <span>
                    <code>&lt;form action="#" method="post"&gt;</code>: per ora non invia a un
                    server reale (lo faremo con JavaScript più avanti)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600">→</span>
                  <span>
                    <code>type="email"</code>: attiva validazione automatica email
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600">→</span>
                  <span>
                    <code>required</code>: il campo è obbligatorio
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600">→</span>
                  <span>
                    <code>placeholder</code>: testo grigio che scompare quando inizi a scrivere
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 2: CSS Form */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>2️⃣</span>
              Step 2: CSS del Form
            </h3>
            <p className="text-lg mb-4">
              Ora stilizza il form per renderlo <strong>grande, visibile e invitante</strong>:
            </p>

            <CodeExample
              title="css/style.css - Tema GameVerse (Form Section)"
              language="css"
              code={`/* ====================================
   FORM SECTION (Newsletter / Contact)
   ==================================== */

.form-section {
  padding: 100px 80px;
  background: linear-gradient(135deg, var(--bg-dark) 0%, #1a1347 100%);
  background-image:
    radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%);
}

.form-container {
  max-width: 700px; /* Più stretto delle altre sezioni */
  margin: 0 auto;
  text-align: center;
}

.form-header {
  margin-bottom: 48px;
}

/* ====================================
   FORM LAYOUT - Flexbox Row
   ==================================== */

.signup-form {
  display: flex;
  gap: 16px; /* Spazio tra input e button */
  margin-bottom: 20px;
}

/* Input Email */
.form-input {
  flex: 1; /* Prende tutto lo spazio disponibile */
  padding: 18px 24px;
  font-size: 16px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.05);
  color: var(--text-primary);
  font-family: var(--font-body);
  transition: all 0.3s ease;
}

.form-input::placeholder {
  color: #64748B; /* Grigio per il placeholder */
}

.form-input:focus {
  outline: none;
  border-color: var(--primary);
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

/* Button Submit */
.form-button {
  padding: 18px 40px;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  font-family: var(--font-heading);
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap; /* Impedisce al testo di andare a capo */
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
}

.form-button:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6);
}

.form-button:active {
  transform: translateY(0); /* Ritorna giù quando clicchi */
}

/* Messaggio Privacy */
.form-privacy {
  font-size: 14px;
  color: #94A3B8;
  font-style: italic;
}

/* ====================================
   RESPONSIVE - Mobile
   ==================================== */

@media (max-width: 768px) {
  .form-section {
    padding: 60px 24px;
  }

  .signup-form {
    flex-direction: column; /* Stack verticale su mobile */
    gap: 12px;
  }

  .form-button {
    width: 100%; /* Button full-width su mobile */
  }
}`}
            />

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded my-6">
              <h4 className="font-bold text-blue-900 mb-2">💡 Dettagli Importanti</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-blue-600">→</span>
                  <span>
                    <strong>flex: 1</strong> sull'input fa sì che occupi tutto lo spazio
                    disponibile
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">→</span>
                  <span>
                    <strong>:focus</strong> cambia lo stile quando clicchi dentro l'input
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">→</span>
                  <span>
                    <strong>outline: none</strong> rimuove il bordo blu predefinito del browser
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">→</span>
                  <span>
                    <strong>box-shadow: 0 0 0 4px ...</strong> crea un "outline personalizzato"
                    colorato
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">→</span>
                  <span>
                    <strong>:active</strong> si attiva quando clicchi sul button (effetto "press")
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
              <p className="font-bold text-blue-800 mb-2">💡 Suggerimento</p>
              <p className="text-gray-700">
                Prova a scrivere nell'input email e nota come il bordo diventa colorato e appare
                un'ombra leggera quando è "focused". Questo si chiama <strong>focus state</strong> ed
                è importante per l'accessibilità!
              </p>
            </div>
          </div>

          {/* Personalizzazione */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>3️⃣</span>
              Personalizza per il Tuo Tema
            </h3>

            <div className="space-y-4">
              <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🍕</span>
                  <h4 className="font-bold text-orange-900">TasteHub - Form</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>Titolo:</strong> "Ricevi Ricette Settimanali Gratis"
                  </li>
                  <li>
                    <strong>Subtitle:</strong> "Iscriviti alla newsletter e ricevi ogni settimana
                    ricette esclusive dai migliori chef"
                  </li>
                  <li>
                    <strong>Button:</strong> "Iscriviti Ora 🍕"
                  </li>
                  <li>
                    <strong>Privacy:</strong> "Ti invieremo solo ricette fantastiche, zero spam!"
                  </li>
                </ul>
              </div>

              <div className="bg-pink-50 border-2 border-pink-300 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🎵</span>
                  <h4 className="font-bold text-pink-900">BeatStream - Form</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>Titolo:</strong> "Prova Premium Gratis per 30 Giorni"
                  </li>
                  <li>
                    <strong>Subtitle:</strong> "Ascolta 70 milioni di brani senza pubblicità.
                    Annulla quando vuoi."
                  </li>
                  <li>
                    <strong>Button:</strong> "Inizia Gratis 🎧"
                  </li>
                  <li>
                    <strong>Privacy:</strong> "Nessuna carta richiesta. Cancella in qualsiasi
                    momento."
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parte 2: Footer */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8 rounded-t-xl">
          <div className="flex items-center gap-3">
            <span className="text-5xl">🦶</span>
            <div>
              <h2 className="text-3xl font-bold">Parte 2: Footer Professionale</h2>
              <p className="text-purple-100 text-lg mt-2">
                Layout a 4 colonne con Flexbox + Link Utili + Social
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-purple-200 rounded-b-xl p-8">
          {/* Teoria Footer */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>📚</span>
              Anatomia di un Footer Professionale
            </h3>
            <p className="text-lg mb-4">
              Un buon footer è come il <strong>retro di un biglietto da visita</strong>: contiene
              tutte le info utili per contattarti o navigare il sito. Di solito ha:
            </p>

            <div className="grid md:grid-cols-4 gap-4 my-6">
              <div className="bg-blue-50 border border-blue-200 rounded p-4 text-center">
                <div className="text-2xl mb-2">🏢</div>
                <div className="font-bold mb-1 text-sm">Colonna 1: Brand</div>
                <p className="text-xs text-gray-600">Logo + breve descrizione dell'azienda</p>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded p-4 text-center">
                <div className="text-2xl mb-2">🔗</div>
                <div className="font-bold mb-1 text-sm">Colonna 2: Link Utili</div>
                <p className="text-xs text-gray-600">Link a pagine importanti (About, FAQ, ecc.)</p>
              </div>

              <div className="bg-pink-50 border border-pink-200 rounded p-4 text-center">
                <div className="text-2xl mb-2">🌐</div>
                <div className="font-bold mb-1 text-sm">Colonna 3: Social</div>
                <p className="text-xs text-gray-600">
                  Link ai social media (Instagram, Twitter, ecc.)
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-4 text-center">
                <div className="text-2xl mb-2">📧</div>
                <div className="font-bold mb-1 text-sm">Colonna 4: Contatti</div>
                <p className="text-xs text-gray-600">Email, telefono, indirizzo fisico</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
              <p className="font-bold text-blue-800 mb-2">💡 Suggerimento</p>
              <p className="text-gray-700">
                Useremo <strong>Flexbox</strong> per creare 4 colonne che si dispongono in stack
                verticale su mobile. È simile a How It Works ma con più colonne.
              </p>
            </div>
          </div>

          {/* Step 1: HTML Footer */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>1️⃣</span>
              Step 1: Struttura HTML del Footer
            </h3>
            <p className="text-lg mb-4">
              Aggiungi questo codice <strong>alla fine del body</strong>, dopo la form section:
            </p>

            <CodeExample
              title="index.html - Footer (alla fine, prima di </body>)"
              language="html"
              code={`<!-- Footer -->
<footer class="footer">
  <div class="footer-container">
    <!-- Colonna 1: Brand -->
    <div class="footer-column">
      <div class="footer-logo">🎮 GameVerse</div>
      <p class="footer-description">
        La piattaforma gaming definitiva. Gioca, connettiti, domina.
      </p>
    </div>

    <!-- Colonna 2: Link Prodotto -->
    <div class="footer-column">
      <h4 class="footer-heading">Prodotto</h4>
      <ul class="footer-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">Come Funziona</a></li>
        <li><a href="#pricing">Prezzi</a></li>
        <li><a href="#download">Download</a></li>
      </ul>
    </div>

    <!-- Colonna 3: Link Azienda -->
    <div class="footer-column">
      <h4 class="footer-heading">Azienda</h4>
      <ul class="footer-links">
        <li><a href="#about">Chi Siamo</a></li>
        <li><a href="#careers">Lavora con Noi</a></li>
        <li><a href="#press">Press Kit</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
    </div>

    <!-- Colonna 4: Social + Contatti -->
    <div class="footer-column">
      <h4 class="footer-heading">Seguici</h4>
      <div class="footer-social">
        <a href="#" class="social-link">📱 Instagram</a>
        <a href="#" class="social-link">🐦 Twitter</a>
        <a href="#" class="social-link">📘 Facebook</a>
        <a href="#" class="social-link">🎥 YouTube</a>
      </div>
    </div>
  </div>

  <!-- Copyright Bar -->
  <div class="footer-bottom">
    <p>&copy; 2025 GameVerse. Tutti i diritti riservati.</p>
    <div class="footer-legal">
      <a href="#privacy">Privacy Policy</a>
      <span>•</span>
      <a href="#terms">Termini di Servizio</a>
    </div>
  </div>
</footer>`}
            />

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
              <p className="font-bold text-blue-800 mb-2">💡 Suggerimento</p>
              <p className="text-gray-700">
                Nota la struttura: un <strong>contenitore principale</strong> (.footer-container) con
                4 colonne (.footer-column), e poi una <strong>barra copyright</strong> (
                .footer-bottom) separata sotto.
              </p>
            </div>
          </div>

          {/* Step 2: CSS Footer */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>2️⃣</span>
              Step 2: CSS del Footer
            </h3>

            <CodeExample
              title="css/style.css - Tema GameVerse (Footer)"
              language="css"
              code={`/* ====================================
   FOOTER
   ==================================== */

.footer {
  background-color: #0A0F1E; /* Ancora più scuro del bg-dark */
  padding-top: 80px;
  padding-bottom: 0; /* Niente padding bottom, lo mettiamo su footer-bottom */
}

/* Container Flexbox 4 colonne */
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  gap: 48px;
  padding-bottom: 60px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Singola Colonna */
.footer-column {
  flex: 1; /* Ogni colonna prende spazio uguale */
}

/* Logo Footer */
.footer-logo {
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 16px;
}

/* Descrizione Brand */
.footer-description {
  font-size: 14px;
  color: #64748B;
  line-height: 1.7;
}

/* Heading Colonna */
.footer-heading {
  font-family: var(--font-heading);
  font-size: 16px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Lista Link */
.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #94A3B8;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--primary);
}

/* Social Links */
.footer-social {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.social-link {
  color: #94A3B8;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
  display: inline-block;
}

.social-link:hover {
  color: var(--primary);
  transform: translateX(4px); /* Si sposta leggermente a destra */
}

/* ====================================
   FOOTER BOTTOM - Copyright Bar
   ==================================== */

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #64748B;
}

.footer-legal {
  display: flex;
  gap: 16px;
  align-items: center;
}

.footer-legal a {
  color: #64748B;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-legal a:hover {
  color: var(--primary);
}

/* ====================================
   RESPONSIVE - Mobile
   ==================================== */

@media (max-width: 1024px) {
  .footer-container {
    padding: 0 40px 40px 40px;
    gap: 32px;
  }

  .footer-bottom {
    padding: 24px 40px;
  }
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column; /* Stack verticale su mobile */
    padding: 0 24px 32px 24px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
    padding: 24px;
  }

  .footer-legal {
    flex-direction: column;
    gap: 8px;
  }

  .footer-legal span {
    display: none; /* Nascondi il bullet • su mobile */
  }
}`}
            />

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded my-6">
              <h4 className="font-bold text-yellow-900 mb-2">🔍 Punti Chiave</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-yellow-600">→</span>
                  <span>
                    <strong>border-bottom</strong> sul .footer-container separa le colonne dalla
                    copyright bar
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600">→</span>
                  <span>
                    <strong>text-transform: uppercase</strong> + <strong>letter-spacing</strong>{' '}
                    rende i titoli più "professionali"
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600">→</span>
                  <span>
                    <strong>translateX(4px)</strong> su hover dei social crea un effetto "freccia"
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600">→</span>
                  <span>
                    Su mobile, <strong>flex-direction: column</strong> mette le 4 colonne in stack
                    verticale
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Personalizzazione */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>3️⃣</span>
              Personalizza Logo e Link
            </h3>
            <p className="text-lg mb-4">
              Cambia logo, descrizione e link per il tuo tema:
            </p>

            <div className="space-y-4">
              <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🍕</span>
                  <h4 className="font-bold text-orange-900">TasteHub - Footer</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>Logo:</strong> "🍕 TasteHub"
                  </li>
                  <li>
                    <strong>Descrizione:</strong> "Ricette, ristoranti e chef a portata di click.
                    Il food non è mai stato così facile."
                  </li>
                  <li>
                    <strong>Link Prodotto:</strong> Ricette, Ristoranti, Chef, App Mobile
                  </li>
                </ul>
              </div>

              <div className="bg-pink-50 border-2 border-pink-300 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🎵</span>
                  <h4 className="font-bold text-pink-900">BeatStream - Footer</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>Logo:</strong> "🎵 BeatStream"
                  </li>
                  <li>
                    <strong>Descrizione:</strong> "70 milioni di brani, ovunque tu sia. La musica
                    che ami, senza limiti."
                  </li>
                  <li>
                    <strong>Link Prodotto:</strong> Premium, Famiglia, Studenti, Download
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parte 3: Polish Finale */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-t-xl">
          <div className="flex items-center gap-3">
            <span className="text-5xl">✨</span>
            <div>
              <h2 className="text-3xl font-bold">Parte 3: Polish Finale</h2>
              <p className="text-green-100 text-lg mt-2">
                Gli ultimi tocchi che trasformano "buono" in "professionale"
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-green-200 rounded-b-xl p-8">
          {/* Smooth Scroll */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>1️⃣</span>
              Smooth Scroll tra le Sezioni
            </h3>
            <p className="text-lg mb-4">
              Quando clicchi sui link della navbar (es. "Features"), la pagina{' '}
              <strong>salta bruscamente</strong> alla sezione. Con una sola riga di CSS possiamo
              renderlo <strong>super smooth</strong>!
            </p>

            <CodeExample
              title="css/style.css - Aggiungi questo all'inizio del file"
              language="css"
              code={`/* Smooth Scroll Globale */
html {
  scroll-behavior: smooth;
}`}
            />

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
              <p className="font-bold text-blue-800 mb-2">💡 Suggerimento</p>
              <p className="text-gray-700">
                Ora prova a cliccare su "Features" nella navbar. La pagina{' '}
                <strong>scrolla dolcemente</strong> invece di saltare! Questa è magia CSS pura.
              </p>
            </div>
          </div>

          {/* Back to Top Button (opzionale) */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>2️⃣</span>
              Button "Torna Su" (Opzionale)
            </h3>
            <p className="text-lg mb-4">
              Se vuoi essere ultra-professionale, aggiungi un <strong>button "↑ Top"</strong> nel
              footer che porta l'utente su in cima:
            </p>

            <CodeExample
              title="index.html - Aggiungi nel footer-bottom (dopo il copyright)"
              language="html"
              code={`<div class="footer-bottom">
  <p>&copy; 2025 GameVerse. Tutti i diritti riservati.</p>
  <div class="footer-legal">
    <a href="#privacy">Privacy Policy</a>
    <span>•</span>
    <a href="#terms">Termini di Servizio</a>
  </div>
  <!-- Back to Top Button -->
  <a href="#" class="back-to-top">↑ Torna Su</a>
</div>`}
            />

            <CodeExample
              title="css/style.css - Stile Back to Top"
              language="css"
              code={`/* Back to Top Button */
.back-to-top {
  color: var(--primary);
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  transition: all 0.3s ease;
  display: inline-block;
}

.back-to-top:hover {
  transform: translateY(-3px);
  color: var(--primary-dark);
}

/* Su mobile, rendilo più visibile */
@media (max-width: 768px) {
  .back-to-top {
    display: block;
    width: 100%;
    text-align: center;
    padding: 12px;
    background-color: rgba(99, 102, 241, 0.1);
    border-radius: 8px;
    margin-top: 16px;
  }
}`}
            />
          </div>

          {/* Spacing Refinement */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>3️⃣</span>
              Verifica Spacing Uniforme
            </h3>
            <p className="text-lg mb-4">
              Il <strong>segreto del design professionale</strong> è lo spacing consistente. Verifica
              che tutte le sezioni abbiano padding simile:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded">
              <h4 className="font-bold text-blue-900 mb-3">✓ Checklist Spacing</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span>□</span>
                  <span>
                    Tutte le sezioni hanno <code>padding: 100px 80px</code> su desktop (eccetto
                    hero)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>□</span>
                  <span>
                    Su mobile, tutte le sezioni hanno <code>padding: 60px 24px</code>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>□</span>
                  <span>
                    I titoli di sezione (.section-title) hanno sempre{' '}
                    <code>margin-bottom: 16px</code>
                  </span>
                </li>
                <li className="flex gap-2">
                  <span>□</span>
                  <span>
                    Gli elementi interni hanno spazio generoso (almeno 32-48px tra gruppi)
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-6">
              <p className="font-bold text-yellow-800 mb-2">⚠️ Attenzione</p>
              <p className="text-gray-700">
                Se una sezione sembra "schiacciata" o "troppo spaziosa" rispetto alle altre, è
                probabile che il padding non sia uniforme. Usa il browser DevTools per ispezionare!
              </p>
            </div>
          </div>

          {/* Final Touches */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>4️⃣</span>
              Ultimi Ritocchi Opzionali
            </h3>

            <div className="space-y-4">
              <div className="bg-purple-50 border border-purple-200 rounded p-5">
                <h4 className="font-bold mb-2 text-purple-900">🎨 Aggiungi :active agli hover</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Per ogni elemento con <code>:hover</code>, aggiungi anche <code>:active</code>{' '}
                  per feedback quando clicchi:
                </p>
                <CodeExample
                  language="css"
                  code={`.btn-primary:active,
.nav-cta:active,
.form-button:active {
  transform: translateY(0) !important;
  /* Annulla il translateY(-2px) dell'hover */
}`}
                />
              </div>

              <div className="bg-green-50 border border-green-200 rounded p-5">
                <h4 className="font-bold mb-2 text-green-900">🌈 Aggiungi Favicon</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Il favicon è l'icona che appare nella tab del browser. Aggiungi nella{' '}
                  <code>&lt;head&gt;</code>:
                </p>
                <CodeExample
                  language="html"
                  code={`<head>
  ...
  <!-- Favicon (usa un'emoji per semplicità) -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎮</text></svg>">
</head>`}
                />
                <p className="text-xs text-gray-600 mt-2">
                  Cambia 🎮 con 🍕 per TasteHub o 🎵 per BeatStream!
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded p-5">
                <h4 className="font-bold mb-2 text-yellow-900">
                  📏 Aggiungi max-width al body (opzionale)
                </h4>
                <p className="text-sm text-gray-700 mb-3">
                  Su schermi ultrawide (2560px+), il sito potrebbe sembrare "stirato". Limita la
                  larghezza:
                </p>
                <CodeExample
                  language="css"
                  code={`body {
  font-family: var(--font-body);
  background-color: var(--bg-dark);
  color: var(--text-primary);
  line-height: 1.6;
  max-width: 2000px; /* Limite massimo */
  margin: 0 auto; /* Centra */
}`}
                />
              </div>
            </div>
          </div>

          {/* Test Finale */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-green-900 flex items-center gap-2">
              <span>🧪</span>
              Test Finale Prima del Milestone
            </h3>
            <p className="text-gray-700 mb-4">
              Prima di considerare il progetto completato, fai questi test:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>
                  Clicca tutti i link della navbar: devono scrollare smooth alle sezioni
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>
                  Prova a inviare il form senza email: deve mostrare errore di validazione
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>Prova a inviare il form con "test" invece di email: deve bloccarti</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>
                  Riduci la finestra del browser a dimensione mobile: tutto deve essere leggibile
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>
                  Passa il mouse su tutti gli elementi interattivi: devono avere hover effect
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>Scrolling della pagina: deve essere fluido e smooth</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Milestone Finale del Progetto */}
      <ProjectMilestone
        numero={1}
        titolo="Landing Page Completa - PROGETTO FINITO! 🎉"
        requisiti={[
          'Form di contatto / newsletter funzionante con input email',
          'Validazione HTML5 attiva (type="email" + required)',
          'Form layout: input + button allineati in row (desktop), stack su mobile',
          'Form input con :focus state (bordo colorato + shadow)',
          'Form button con hover e active state',
          'Footer con 4 colonne (Brand, Prodotto, Azienda, Social)',
          'Footer responsive: 4 colonne desktop, stack verticale mobile',
          'Footer con copyright bar separata in basso',
          'Link footer con hover effect (cambio colore)',
          'Social link con hover effect (translateX)',
          'Smooth scroll attivo su tutta la pagina (html { scroll-behavior: smooth; })',
          'Spacing uniforme tra tutte le sezioni (padding consistente)',
          'Favicon aggiunto (emoji)',
          'Back to Top button nel footer (opzionale ma consigliato)',
          'Testi personalizzati per il tuo tema (GameVerse/TasteHub/BeatStream)',
          'Tutte le sezioni completate: Navbar, Hero, Features, How It Works, Form, Footer',
          'Sito testato su desktop e mobile (responsive completo)',
          'Tutti gli hover effects funzionanti',
          'Form validation testata (prova a inviare email invalida)',
          'Progetto pronto per essere pubblicato online!',
        ]}
        suggerimenti={[
          'Apri il browser DevTools (F12) e testa il responsive con "Device Toolbar"',
          'Prova tutti i viewport: Desktop (1920px), Tablet (1024px), Mobile (375px)',
          'Chiedi a un amico di testare il sito e darti feedback',
          'Fai screenshot del progetto finito per il tuo portfolio',
          'Se vuoi pubblicarlo davvero, usa GitHub Pages o Netlify (gratis!)',
          'Salva il codice su GitHub per mostrarlo nei colloqui di lavoro',
        ]}
      />

      {/* Celebrazione Finale */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 text-white p-12 rounded-xl text-center">
          <div className="text-8xl mb-6">🎉</div>
          <h2 className="text-4xl font-bold mb-4">HAI COMPLETATO IL PROGETTO INTERMEDIO!</h2>
          <p className="text-2xl mb-8 text-white text-opacity-90">
            Hai creato la tua prima <strong>landing page professionale</strong> completa!
          </p>

          <div className="bg-white bg-opacity-20 rounded-lg p-8 max-w-3xl mx-auto backdrop-blur-sm border-2 border-white border-opacity-30">
            <h3 className="text-2xl font-bold mb-6">Cosa Hai Imparato in Questo Progetto</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-bold mb-3 text-yellow-200">📐 Layout & Structure</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Wireframing e planning</li>
                  <li>• Flexbox per navbar e footer</li>
                  <li>• CSS Grid per features</li>
                  <li>• Position sticky per navbar</li>
                  <li>• Responsive design completo</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3 text-pink-200">🎨 Design & Styling</h4>
                <ul className="space-y-1 text-sm">
                  <li>• CSS Custom Properties (variabili)</li>
                  <li>• Gradient backgrounds e text</li>
                  <li>• Box-shadow con colori</li>
                  <li>• Typography pairing (Google Fonts)</li>
                  <li>• Color palette professionale</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3 text-purple-200">⚡ Interazioni & Effects</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Hover effects su button e card</li>
                  <li>• Focus state su form input</li>
                  <li>• Transform (scale, translate, rotate)</li>
                  <li>• Transitions smooth</li>
                  <li>• Smooth scroll behavior</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3 text-green-200">📋 Features Avanzate</h4>
                <ul className="space-y-1 text-sm">
                  <li>• HTML5 Form Validation</li>
                  <li>• Semantic HTML (section, footer, nav)</li>
                  <li>• Mobile-first responsive</li>
                  <li>• Media queries avanzate</li>
                  <li>• Best practices professionali</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <p className="text-xl">
              Questo progetto rappresenta il <strong>25% del corso totale</strong>.
            </p>
            <p className="text-lg text-white text-opacity-90">
              Hai le competenze per creare landing page vere. Ora manca solo{' '}
              <strong>JavaScript</strong> per renderle <strong>interattive</strong>!
            </p>
          </div>

          <div className="mt-10 p-6 bg-white bg-opacity-10 rounded-lg border-2 border-white border-opacity-40">
            <h3 className="text-2xl font-bold mb-4">🚀 Cosa Fare Adesso</h3>
            <div className="space-y-3 text-left max-w-2xl mx-auto">
              <div className="flex gap-3 items-start">
                <span className="text-2xl">📸</span>
                <div>
                  <div className="font-bold">Fai Screenshot</div>
                  <p className="text-sm text-white text-opacity-80">
                    Cattura il tuo progetto finito per il portfolio
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-2xl">💾</span>
                <div>
                  <div className="font-bold">Salva su GitHub</div>
                  <p className="text-sm text-white text-opacity-80">
                    Crea un repository per mostrarlo nei colloqui
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-2xl">🌐</span>
                <div>
                  <div className="font-bold">Pubblica Online (opzionale)</div>
                  <p className="text-sm text-white text-opacity-80">
                    Usa Netlify o GitHub Pages per un URL pubblico
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-2xl">🎯</span>
                <div>
                  <div className="font-bold">Personalizza Ulteriormente</div>
                  <p className="text-sm text-white text-opacity-80">
                    Cambia colori, immagini, testi per renderlo unico
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <span className="text-2xl">⚡</span>
                <div>
                  <div className="font-bold">Passa a JavaScript (Modulo 4)</div>
                  <p className="text-sm text-white text-opacity-80">
                    Impara a rendere il sito interattivo e dinamico
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Extra */}
      <div className="my-8 p-6 bg-purple-50 border-2 border-purple-300 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🎯</span>
          <h3 className="text-xl font-bold text-purple-900">Sfida Extra: Aggiungi una Sezione Pricing</h3>
        </div>
        <div className="space-y-4">
          <p>
            Vuoi spingere il progetto ancora più in là? Aggiungi una{' '}
            <strong>sezione Pricing</strong> tra "How It Works" e il form di contatto!
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <h4 className="font-bold mb-2">🎯 Obiettivo</h4>
            <p className="text-sm">
              Crea 3 card di pricing (Free, Pro, Enterprise) disposte in griglia con CSS Grid. Ogni
              card deve avere:
            </p>
            <ul className="text-sm mt-2 space-y-1">
              <li>• Nome piano (es. "Pro")</li>
              <li>• Prezzo grande (es. "€9.99/mese")</li>
              <li>• Lista di features (con checkmark ✓)</li>
              <li>• Button CTA ("Inizia Ora" o "Contattaci")</li>
              <li>• Effetto hover: card si solleva e ombra si intensifica</li>
              <li>• Piano centrale (Pro) con bordo colorato e badge "Più Popolare"</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-bold mb-2">💡 Suggerimenti</h4>
            <ul className="text-sm space-y-1">
              <li>• Usa Grid con 3 colonne: grid-template-columns: repeat(3, 1fr)</li>
              <li>
                • Piano centrale più grande: transform: scale(1.05) o padding maggiorato
              </li>
              <li>• Badge "Più Popolare": position absolute in alto a destra della card</li>
              <li>• Su mobile: grid-template-columns: 1fr (una colonna)</li>
            </ul>
          </div>

          <details className="bg-gray-50 border border-gray-300 rounded p-4">
            <summary className="cursor-pointer font-bold text-gray-700">
              📝 Mostra Soluzione (prova prima da solo!)
            </summary>
            <div className="mt-4 space-y-3">
              <p className="text-sm text-gray-600">HTML:</p>
              <CodeExample
                language="html"
                code={`<section id="pricing" class="pricing-section">
  <div class="pricing-container">
    <div class="section-header">
      <h2 class="section-title">Scegli il Tuo Piano</h2>
      <p class="section-subtitle">Prezzi trasparenti, nessun costo nascosto</p>
    </div>

    <div class="pricing-grid">
      <!-- Piano Free -->
      <div class="pricing-card">
        <h3 class="plan-name">Free</h3>
        <div class="plan-price">€0<span>/mese</span></div>
        <ul class="plan-features">
          <li>✓ Accesso base</li>
          <li>✓ 10 giochi</li>
          <li>✓ Community forum</li>
        </ul>
        <button class="plan-button btn-secondary">Inizia Gratis</button>
      </div>

      <!-- Piano Pro (featured) -->
      <div class="pricing-card featured">
        <div class="badge">Più Popolare</div>
        <h3 class="plan-name">Pro</h3>
        <div class="plan-price">€9.99<span>/mese</span></div>
        <ul class="plan-features">
          <li>✓ Tutti i giochi</li>
          <li>✓ Multiplayer illimitato</li>
          <li>✓ Cloud saves</li>
          <li>✓ Niente ads</li>
        </ul>
        <button class="plan-button btn-primary">Inizia Ora</button>
      </div>

      <!-- Piano Enterprise -->
      <div class="pricing-card">
        <h3 class="plan-name">Enterprise</h3>
        <div class="plan-price">Custom</div>
        <ul class="plan-features">
          <li>✓ Tutto di Pro</li>
          <li>✓ Team features</li>
          <li>✓ Priority support</li>
          <li>✓ Analytics avanzati</li>
        </ul>
        <button class="plan-button btn-secondary">Contattaci</button>
      </div>
    </div>
  </div>
</section>`}
              />

              <p className="text-sm text-gray-600 mt-4">CSS:</p>
              <CodeExample
                language="css"
                code={`.pricing-section {
  padding: 100px 80px;
  background-color: var(--bg-dark);
}

.pricing-container {
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 60px;
}

.pricing-card {
  background-color: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 40px 32px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
}

.pricing-card.featured {
  border-color: var(--primary);
  transform: scale(1.05);
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.3);
}

.badge {
  position: absolute;
  top: -12px;
  right: 20px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
}

.plan-name {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.plan-price {
  font-size: 48px;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 32px;
}

.plan-price span {
  font-size: 18px;
  color: #94A3B8;
}

.plan-features {
  list-style: none;
  margin-bottom: 32px;
  text-align: left;
}

.plan-features li {
  padding: 12px 0;
  color: #94A3B8;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

@media (max-width: 1024px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .pricing-card.featured {
    transform: scale(1);
  }
}`}
              />
            </div>
          </details>
        </div>
      </div>

      {/* Concetti Appresi */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">📚 Cosa Hai Imparato in Questa Lezione</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded">
            <h3 className="font-bold text-lg mb-2 text-blue-900">HTML5 Forms</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Form structure (form, input, button)</li>
              <li>• type="email" per validazione email</li>
              <li>• required attribute</li>
              <li>• placeholder text</li>
              <li>• Focus e active states</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded">
            <h3 className="font-bold text-lg mb-2 text-purple-900">Footer Layout</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Multi-column footer con Flexbox</li>
              <li>• Copyright bar separata</li>
              <li>• Link lists e social links</li>
              <li>• Responsive footer (column stack)</li>
              <li>• text-transform e letter-spacing</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <h3 className="font-bold text-lg mb-2 text-green-900">Polish & Details</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• scroll-behavior: smooth</li>
              <li>• Spacing uniforme tra sezioni</li>
              <li>• Back to top button</li>
              <li>• Favicon con emoji</li>
              <li>• Active states per feedback</li>
            </ul>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded">
            <h3 className="font-bold text-lg mb-2 text-orange-900">Project Management</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Completamento progetto multi-parte</li>
              <li>• Testing sistematico</li>
              <li>• Refinement e polish iterativo</li>
              <li>• Portfolio piece readiness</li>
              <li>• Best practices professionali</li>
            </ul>
          </div>
        </div>
      </section>

    </LessonLayout>
  );
}
