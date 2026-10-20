import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import ProjectMilestone from '@/components/didattica/ProjectMilestone';

export default function Lezione3FeaturesHowItWorks() {
  const lezioni = getLezioniByModuloSlug('modulo-3-progetto-intermedio');

  return (
    <LessonLayout
      moduloSlug="modulo-3-progetto-intermedio"
      moduloTitolo="Modulo 3: Progetto Intermedio"
      lezioni={lezioni}
      lezioneSlug="lezione-3-features-how-it-works"
      lezioneTitolo="Features + How It Works"
    >
      <LessonHeader
        numero={3}
        titolo="Features + How It Works"
        durata="1.5 ore"
        difficolta="media"
        obiettivi={[
          'Costruire Features Section con CSS Grid (layout 3x2)',
          'Creare How It Works con Flexbox (3 step process)',
          'Capire la differenza tra Grid e Flexbox',
          'Applicare hover effects avanzati (transform + shadow)',
          'Creare numeri circolari con gradient background',
          'Rendere le sezioni responsive su tutti i dispositivi'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎯 Cosa Faremo Oggi</h2>
        <p className="text-lg mb-4">
          Dopo aver creato <strong>Navbar + Hero</strong>, oggi costruiremo le due sezioni che{' '}
          <strong>convincono il visitatore</strong> a fidarsi del tuo prodotto:
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">✨</span>
              <h3 className="text-2xl font-bold text-blue-900">Features Section</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Mostra <strong>6 caratteristiche incredibili</strong> del tuo prodotto usando{' '}
              <strong>CSS Grid</strong> per creare una griglia perfetta 3x2.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <span>✓</span>
                <span>Layout Grid responsive (3 colonne su desktop)</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Card con icone emoji, titolo, descrizione</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Hover effects con transform e shadow</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl">🎬</span>
              <h3 className="text-2xl font-bold text-purple-900">How It Works</h3>
            </div>
            <p className="text-gray-700 mb-3">
              Spiega in <strong>3 semplici step</strong> come funziona il tuo prodotto usando{' '}
              <strong>Flexbox</strong> per allineare gli step orizzontalmente.
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <span>✓</span>
                <span>Layout Flexbox orizzontale (row)</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Step numerati con design circolare</span>
              </li>
              <li className="flex gap-2">
                <span>✓</span>
                <span>Icone grandi, testo chiaro, spazio generoso</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-6">
          <p className="font-bold text-yellow-800 mb-2">⚠️ Nota Importante</p>
          <p className="text-gray-700">
            Questa lezione è <strong>semi-guidata</strong>. Ti darò tutto il codice completo, ma{' '}
            <strong>dovrai adattarlo al tuo tema</strong> (colori, testi, emoji). Usa la{' '}
            <strong>milestone finale</strong> per verificare di aver completato tutto!
          </p>
        </div>
      </section>

      {/* Sezione 1: Features Section con CSS Grid */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-t-xl">
          <div className="flex items-center gap-3">
            <span className="text-5xl">✨</span>
            <div>
              <h2 className="text-3xl font-bold">Parte 1: Features Section</h2>
              <p className="text-blue-100 text-lg mt-2">
                Griglia di 6 caratteristiche con CSS Grid + Hover Effects
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-blue-200 rounded-b-xl p-8">
          {/* Teoria CSS Grid */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>📚</span>
              Teoria: CSS Grid per Layout Bidimensionali
            </h3>
            <p className="text-lg mb-4">
              <strong>CSS Grid</strong> è perfetto per creare layout a <strong>griglia</strong>{' '}
              (righe e colonne). È più potente di Flexbox quando vuoi controllare{' '}
              <strong>sia le righe che le colonne</strong>.
            </p>

            <div className="bg-gray-100 border-l-4 border-blue-500 p-6 rounded my-6">
              <h4 className="font-bold text-lg mb-3">💡 Differenza Flexbox vs Grid</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-blue-200">
                  <div className="font-bold text-blue-900 mb-2">Flexbox (1D)</div>
                  <p className="text-sm text-gray-600 mb-2">
                    Buono per allineare elementi in <strong>una direzione</strong> (riga O colonna)
                  </p>
                  <div className="text-xs bg-blue-50 p-2 rounded font-mono">
                    display: flex;
                    <br />
                    flex-direction: row;
                  </div>
                </div>

                <div className="bg-white p-4 rounded border border-purple-200">
                  <div className="font-bold text-purple-900 mb-2">Grid (2D)</div>
                  <p className="text-sm text-gray-600 mb-2">
                    Buono per layout con <strong>righe E colonne insieme</strong>
                  </p>
                  <div className="text-xs bg-purple-50 p-2 rounded font-mono">
                    display: grid;
                    <br />
                    grid-template-columns: ...;
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg p-6 my-6">
              <h4 className="font-bold text-lg mb-3 text-green-900">
                🎯 Proprietà CSS Grid Essenziali
              </h4>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border border-green-200">
                  <code className="text-purple-600 font-bold">display: grid;</code>
                  <p className="text-sm text-gray-700 mt-1">
                    Attiva la modalità Grid sul contenitore
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-green-200">
                  <code className="text-purple-600 font-bold">
                    grid-template-columns: repeat(3, 1fr);
                  </code>
                  <p className="text-sm text-gray-700 mt-1">
                    Crea <strong>3 colonne</strong> di uguale larghezza (
                    <code className="text-xs bg-gray-100 px-1">1fr</code> = 1 frazione dello spazio
                    disponibile)
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-green-200">
                  <code className="text-purple-600 font-bold">gap: 32px;</code>
                  <p className="text-sm text-gray-700 mt-1">
                    Spazio tra le celle (righe e colonne)
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-green-200">
                  <code className="text-purple-600 font-bold">
                    grid-template-columns: repeat(2, 1fr);
                  </code>
                  <p className="text-sm text-gray-700 mt-1">
                    Per responsive: su tablet mostra solo <strong>2 colonne</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
              <p className="font-bold text-blue-800 mb-2">💡 Suggerimento</p>
              <p className="text-gray-700">
                <strong>repeat(3, 1fr)</strong> è una scorciatoia per scrivere{' '}
                <code className="bg-blue-100 px-2 py-1 rounded">1fr 1fr 1fr</code>. Significa "ripeti 3 volte una frazione uguale".
              </p>
            </div>
          </div>

          {/* Step 1: HTML Structure */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>1️⃣</span>
              Step 1: Struttura HTML delle Features
            </h3>
            <p className="text-lg mb-4">
              Aggiungi questo codice HTML <strong>sotto la sezione Hero</strong> nel tuo{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">index.html</code>:
            </p>

            <CodeExample
              title="index.html - Sezione Features (dopo il Hero)"
              language="html"
              code={`<!-- Features Section -->
<section id="features" class="features-section">
  <div class="features-container">
    <!-- Header Sezione -->
    <div class="section-header">
      <h2 class="section-title">Funzionalità Incredibili</h2>
      <p class="section-subtitle">
        Tutto quello che ti serve per dominare il gaming
      </p>
    </div>

    <!-- Griglia Features (6 card) -->
    <div class="features-grid">
      <!-- Feature 1 -->
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3 class="feature-title">Prestazioni Ultra</h3>
        <p class="feature-description">
          Connessione a bassa latenza per gaming senza lag
        </p>
      </div>

      <!-- Feature 2 -->
      <div class="feature-card">
        <div class="feature-icon">🎮</div>
        <h3 class="feature-title">Controller Support</h3>
        <p class="feature-description">
          Compatibile con tutti i controller più popolari
        </p>
      </div>

      <!-- Feature 3 -->
      <div class="feature-card">
        <div class="feature-icon">👥</div>
        <h3 class="feature-title">Multiplayer Globale</h3>
        <p class="feature-description">
          Gioca con milioni di giocatori in tutto il mondo
        </p>
      </div>

      <!-- Feature 4 -->
      <div class="feature-card">
        <div class="feature-icon">💾</div>
        <h3 class="feature-title">Cloud Saves</h3>
        <p class="feature-description">
          I tuoi progressi salvati automaticamente nel cloud
        </p>
      </div>

      <!-- Feature 5 -->
      <div class="feature-card">
        <div class="feature-icon">🏆</div>
        <h3 class="feature-title">Achievements</h3>
        <p class="feature-description">
          Sistema di achievement e classifiche globali
        </p>
      </div>

      <!-- Feature 6 -->
      <div class="feature-card">
        <div class="feature-icon">📱</div>
        <h3 class="feature-title">Cross-Platform</h3>
        <p class="feature-description">
          Gioca su PC, console e dispositivi mobile
        </p>
      </div>
    </div>
  </div>
</section>`}
            />

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
              <p className="font-bold text-blue-800 mb-2">💡 Suggerimento</p>
              <p className="text-gray-700">
                Nota la struttura: un <strong>contenitore esterno</strong> (
                <code className="bg-blue-100 px-2 py-1 rounded">.features-section</code>), un <strong>contenitore interno</strong> (
                <code className="bg-blue-100 px-2 py-1 rounded">.features-container</code> per centrare), e la <strong>griglia</strong> (
                <code className="bg-blue-100 px-2 py-1 rounded">.features-grid</code>) che contiene le 6 card.
              </p>
            </div>
          </div>

          {/* Step 2: CSS Grid Styling */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>2️⃣</span>
              Step 2: CSS della Features Section
            </h3>
            <p className="text-lg mb-4">
              Aggiungi questo CSS al tuo file{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">css/style.css</code>:
            </p>

            <CodeExample
              title="css/style.css - Tema GameVerse (Features Section)"
              language="css"
              code={`/* ====================================
   FEATURES SECTION
   ==================================== */

/* Container esterno */
.features-section {
  padding: 100px 80px;
  background-color: #1E293B; /* Grigio scuro diverso dal bg-dark */
}

/* Container interno per centrare */
.features-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Header Sezione */
.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 42px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 18px;
  color: #94A3B8; /* Grigio chiaro */
  max-width: 600px;
  margin: 0 auto;
}

/* ====================================
   GRID LAYOUT - Qui inizia la magia!
   ==================================== */

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonne uguali */
  gap: 32px; /* Spazio tra le card */
}

/* Singola Feature Card */
.feature-card {
  background-color: rgba(255, 255, 255, 0.03); /* Sfondo scuro trasparente */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 40px 32px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

/* Hover Effect - Card si solleva */
.feature-card:hover {
  transform: translateY(-8px);
  background-color: rgba(255, 255, 255, 0.05);
  border-color: var(--primary);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3);
}

/* Icona emoji grande */
.feature-icon {
  font-size: 56px;
  margin-bottom: 20px;
}

/* Titolo feature */
.feature-title {
  font-family: var(--font-heading);
  font-size: 22px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}

/* Descrizione feature */
.feature-description {
  font-size: 15px;
  color: #94A3B8;
  line-height: 1.6;
}

/* ====================================
   RESPONSIVE - Tablet e Mobile
   ==================================== */

/* Tablet: 2 colonne */
@media (max-width: 1024px) {
  .features-section {
    padding: 80px 40px;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 colonne su tablet */
    gap: 24px;
  }
}

/* Mobile: 1 colonna */
@media (max-width: 768px) {
  .features-section {
    padding: 60px 24px;
  }

  .section-title {
    font-size: 32px;
  }

  .section-subtitle {
    font-size: 16px;
  }

  .features-grid {
    grid-template-columns: 1fr; /* 1 colonna su mobile */
    gap: 20px;
  }

  .feature-card {
    padding: 32px 24px;
  }
}`}
            />

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded my-6">
              <h4 className="font-bold text-yellow-900 mb-2">🔍 Analisi del Codice</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-yellow-600">→</span>
                  <span>
                    <strong>grid-template-columns: repeat(3, 1fr)</strong> crea 3 colonne di
                    larghezza uguale
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600">→</span>
                  <span>
                    <strong>gap: 32px</strong> mette spazio tra le card (sia orizzontale che
                    verticale)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600">→</span>
                  <span>
                    <strong>transform: translateY(-8px)</strong> su hover solleva la card di 8px
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600">→</span>
                  <span>
                    <strong>@media</strong> queries cambiano il grid: 3 col → 2 col → 1 col
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600">→</span>
                  <span>
                    <strong>rgba(255, 255, 255, 0.03)</strong> = sfondo bianco semi-trasparente per
                    effetto vetro
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
              <p className="font-bold text-blue-800 mb-2">💡 Suggerimento</p>
              <p className="text-gray-700">
                Prova a cambiare <code className="bg-blue-100 px-2 py-1 rounded">gap: 32px</code> in <code className="bg-blue-100 px-2 py-1 rounded">gap: 16px</code> o{' '}
                <code className="bg-blue-100 px-2 py-1 rounded">gap: 48px</code> per vedere come cambia lo spazio tra le card!
              </p>
            </div>
          </div>

          {/* Step 3: Personalizzazione */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>3️⃣</span>
              Step 3: Adatta al Tuo Tema
            </h3>
            <p className="text-lg mb-4">
              Il codice sopra è per <strong>GameVerse</strong>. Se hai scelto{' '}
              <strong>TasteHub</strong> o <strong>BeatStream</strong>, devi cambiare:
            </p>

            <div className="space-y-4">
              <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🍕</span>
                  <h4 className="font-bold text-orange-900">Adattamento per TasteHub</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>
                      Titolo: <strong>"Perché Scegliere TasteHub"</strong>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>
                      Subtitle: <strong>"La piattaforma food più completa d'Italia"</strong>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>
                      Features: 🍕 Ricette Esclusive, 👨‍🍳 Chef Professionisti, ⏱️ Preparazione
                      Rapida, 📱 App Mobile, ⭐ Recensioni Verificate, 🚚 Consegna Veloce
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>
                      Background: <code className="bg-orange-100 px-1">#FFF8F0</code> (crema
                      chiaro) invece di grigio scuro
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-pink-50 border-2 border-pink-300 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🎵</span>
                  <h4 className="font-bold text-pink-900">Adattamento per BeatStream</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>
                      Titolo: <strong>"Tutto il Potere della Musica"</strong>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>
                      Subtitle: <strong>"Milioni di brani, playlist infinite, zero pubblicità"</strong>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>
                      Features: 🎵 70M+ Brani, 📻 Radio Live, 🎧 Audio HD, 📥 Download Offline, 🎤
                      Testi Sincronizzati, 🌍 Disponibile Ovunque
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span>✓</span>
                    <span>
                      Background: <code className="bg-pink-100 px-1">#0A0E27</code> (blu scuro
                      profondo)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-6">
              <p className="font-bold text-yellow-800 mb-2">⚠️ Emoji Importanti!</p>
              <p className="text-gray-700">
                Le <strong>emoji</strong> sono importantissime! Scegli emoji che rappresentano bene
                la feature. Per TasteHub usa emoji food (🍕🍝🥗), per BeatStream usa emoji musicali
                (🎵🎧🎤).
              </p>
            </div>
          </div>

          {/* Test Risultato */}
          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-green-900 flex items-center gap-2">
              <span>✅</span>
              Verifica il Risultato
            </h3>
            <p className="text-gray-700 mb-4">
              Salva i file e apri <code className="bg-gray-100 px-2 py-1 rounded">index.html</code>{' '}
              nel browser. Dovresti vedere:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>Una griglia perfetta di 6 card disposte in 3 colonne e 2 righe</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>Ogni card con emoji grande, titolo e descrizione</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>
                  Effetto hover: card si solleva, cambia bordo, appare ombra colorata
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>Su mobile (riduci la finestra), le card vanno in colonna singola</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sezione 2: How It Works con Flexbox */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8 rounded-t-xl">
          <div className="flex items-center gap-3">
            <span className="text-5xl">🎬</span>
            <div>
              <h2 className="text-3xl font-bold">Parte 2: How It Works Section</h2>
              <p className="text-purple-100 text-lg mt-2">
                Processo in 3 step con Flexbox + Numeri Circolari
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-purple-200 rounded-b-xl p-8">
          {/* Intro */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>📚</span>
              Perché la Sezione "How It Works"?
            </h3>
            <p className="text-lg mb-4">
              Dopo aver mostrato le <strong>features</strong>, devi spiegare al visitatore{' '}
              <strong>"Come funziona?"</strong> in modo semplicissimo. L'obiettivo è mostrare che
              usare il tuo prodotto è <strong>facilissimo</strong>.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-purple-200 rounded-lg p-6 my-6">
              <h4 className="font-bold text-lg mb-3 text-purple-900">
                🎯 Struttura Ideale: 3 Step
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                    1
                  </div>
                  <div className="text-xl font-bold mb-2">Azione Iniziale</div>
                  <p className="text-sm text-gray-600">
                    Es. "Iscriviti gratis", "Scarica l'app"
                  </p>
                </div>

                <div className="bg-white p-4 rounded border-2 border-purple-300 text-center">
                  <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                    2
                  </div>
                  <div className="text-xl font-bold mb-2">Azione Centrale</div>
                  <p className="text-sm text-gray-600">
                    Es. "Scegli il gioco", "Personalizza profilo"
                  </p>
                </div>

                <div className="bg-white p-4 rounded border-2 border-pink-300 text-center">
                  <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                    3
                  </div>
                  <div className="text-xl font-bold mb-2">Risultato Finale</div>
                  <p className="text-sm text-gray-600">
                    Es. "Inizia a giocare!", "Goditi la musica"
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
              <p className="font-bold text-blue-800 mb-2">💡 Suggerimento</p>
              <p className="text-gray-700">
                Useremo <strong>Flexbox in modalità row</strong> per allineare i 3 step
                orizzontalmente. Ogni step avrà un <strong>numero circolare colorato</strong>, icona
                emoji, titolo e descrizione.
              </p>
            </div>
          </div>

          {/* Step 1: HTML Structure */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>1️⃣</span>
              Step 1: Struttura HTML di How It Works
            </h3>
            <p className="text-lg mb-4">
              Aggiungi questo codice HTML <strong>sotto la Features Section</strong> nel tuo{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">index.html</code>:
            </p>

            <CodeExample
              title="index.html - Sezione How It Works (dopo Features)"
              language="html"
              code={`<!-- How It Works Section -->
<section id="how-it-works" class="how-it-works-section">
  <div class="how-container">
    <!-- Header Sezione -->
    <div class="section-header">
      <h2 class="section-title">Come Funziona?</h2>
      <p class="section-subtitle">
        Inizia in pochi secondi, è semplicissimo!
      </p>
    </div>

    <!-- Container Flexbox con i 3 step -->
    <div class="steps-container">
      <!-- Step 1 -->
      <div class="step">
        <div class="step-number">1</div>
        <div class="step-icon">📝</div>
        <h3 class="step-title">Crea Account Gratis</h3>
        <p class="step-description">
          Registrati in 30 secondi con email o social. Zero costi nascosti.
        </p>
      </div>

      <!-- Step 2 -->
      <div class="step">
        <div class="step-number">2</div>
        <div class="step-icon">🎮</div>
        <h3 class="step-title">Scegli il Tuo Gioco</h3>
        <p class="step-description">
          Esplora migliaia di giochi in catalogo e trova il tuo preferito.
        </p>
      </div>

      <!-- Step 3 -->
      <div class="step">
        <div class="step-number">3</div>
        <div class="step-icon">🚀</div>
        <h3 class="step-title">Inizia a Giocare!</h3>
        <p class="step-description">
          Connettiti e gioca istantaneamente. Nessun download necessario.
        </p>
      </div>
    </div>
  </div>
</section>`}
            />

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
              <p className="font-bold text-blue-800 mb-2">💡 Suggerimento</p>
              <p className="text-gray-700">
                Nota: ogni <strong>.step</strong> contiene 4 elementi (numero, icona, titolo,
                descrizione). La struttura è ripetuta 3 volte.
              </p>
            </div>
          </div>

          {/* Step 2: CSS Flexbox Styling */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>2️⃣</span>
              Step 2: CSS della How It Works Section
            </h3>
            <p className="text-lg mb-4">
              Aggiungi questo CSS al tuo file{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">css/style.css</code>:
            </p>

            <CodeExample
              title="css/style.css - Tema GameVerse (How It Works Section)"
              language="css"
              code={`/* ====================================
   HOW IT WORKS SECTION
   ==================================== */

/* Container esterno */
.how-it-works-section {
  padding: 100px 80px;
  background-color: var(--bg-dark); /* Colore di sfondo principale */
}

/* Container interno per centrare */
.how-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ====================================
   FLEXBOX LAYOUT - 3 Step Orizzontali
   ==================================== */

.steps-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 48px; /* Spazio tra gli step */
  margin-top: 60px;
}

/* Singolo Step */
.step {
  flex: 1; /* Ogni step prende 1/3 dello spazio */
  text-align: center;
  position: relative;
}

/* Numero Circolare - Design Speciale */
.step-number {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 50%; /* Cerchio perfetto */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px auto;
  font-family: var(--font-heading);
  font-size: 36px;
  font-weight: 700;
  color: white;
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
  transition: transform 0.3s ease;
}

.step:hover .step-number {
  transform: scale(1.1) rotate(5deg);
}

/* Icona Emoji */
.step-icon {
  font-size: 64px;
  margin-bottom: 20px;
}

/* Titolo Step */
.step-title {
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 16px;
}

/* Descrizione Step */
.step-description {
  font-size: 16px;
  color: #94A3B8;
  line-height: 1.7;
}

/* ====================================
   RESPONSIVE - Tablet e Mobile
   ==================================== */

/* Tablet: Stack verticale */
@media (max-width: 1024px) {
  .how-it-works-section {
    padding: 80px 40px;
  }

  .steps-container {
    gap: 32px;
  }
}

/* Mobile: Stack verticale con meno gap */
@media (max-width: 768px) {
  .how-it-works-section {
    padding: 60px 24px;
  }

  .steps-container {
    flex-direction: column; /* Da orizzontale a verticale */
    gap: 48px;
  }

  .step-number {
    width: 70px;
    height: 70px;
    font-size: 32px;
  }

  .step-icon {
    font-size: 56px;
  }

  .step-title {
    font-size: 22px;
  }
}`}
            />

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded my-6">
              <h4 className="font-bold text-yellow-900 mb-2">🔍 Analisi del Codice</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-yellow-600">→</span>
                  <span>
                    <strong>display: flex</strong> su <code>.steps-container</code> allinea i 3
                    step orizzontalmente
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600">→</span>
                  <span>
                    <strong>flex: 1</strong> su <code>.step</code> fa sì che ogni step occupi
                    esattamente 1/3 dello spazio
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600">→</span>
                  <span>
                    <strong>border-radius: 50%</strong> + width/height uguali = cerchio perfetto
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600">→</span>
                  <span>
                    <strong>transform: scale(1.1) rotate(5deg)</strong> su hover ingrandisce e ruota
                    il numero
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-yellow-600">→</span>
                  <span>
                    <strong>flex-direction: column</strong> su mobile trasforma il layout da
                    orizzontale a verticale
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-6">
              <p className="font-bold text-blue-800 mb-2">💡 Suggerimento</p>
              <p className="text-gray-700">
                Il numero circolare usa un <strong>gradient background</strong> (da primary a
                secondary) per creare un effetto moderno. Prova a cambiare i colori!
              </p>
            </div>
          </div>

          {/* Step 3: Personalizzazione */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>3️⃣</span>
              Step 3: Adatta al Tuo Tema
            </h3>
            <p className="text-lg mb-4">
              Anche qui, se hai scelto <strong>TasteHub</strong> o <strong>BeatStream</strong>,
              personalizza i contenuti:
            </p>

            <div className="space-y-4">
              <div className="bg-orange-50 border-2 border-orange-300 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🍕</span>
                  <h4 className="font-bold text-orange-900">TasteHub - How It Works</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-white p-3 rounded border border-orange-200">
                    <div className="font-bold mb-1">Step 1: 📱 Scarica l'App</div>
                    <p className="text-gray-600">
                      "Scarica TasteHub gratis da App Store o Play Store in 1 click"
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border border-orange-200">
                    <div className="font-bold mb-1">Step 2: 🍝 Scegli il Ristorante</div>
                    <p className="text-gray-600">
                      "Esplora centinaia di ristoranti vicini e leggi le recensioni"
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border border-orange-200">
                    <div className="font-bold mb-1">Step 3: 🚚 Ricevi a Casa</div>
                    <p className="text-gray-600">
                      "Ordina e ricevi il cibo caldo a casa in 30 minuti!"
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 border-2 border-pink-300 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🎵</span>
                  <h4 className="font-bold text-pink-900">BeatStream - How It Works</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-white p-3 rounded border border-pink-200">
                    <div className="font-bold mb-1">Step 1: 🎧 Iscriviti Gratis</div>
                    <p className="text-gray-600">
                      "Registrati con email o Spotify e accedi a 70M di brani"
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border border-pink-200">
                    <div className="font-bold mb-1">Step 2: 🎵 Crea Playlist</div>
                    <p className="text-gray-600">
                      "Cerca i tuoi artisti preferiti e crea playlist illimitate"
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border border-pink-200">
                    <div className="font-bold mb-1">Step 3: 🚀 Ascolta Ovunque</div>
                    <p className="text-gray-600">
                      "Streaming su qualsiasi device, anche offline con Premium"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Test Risultato */}
          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-green-900 flex items-center gap-2">
              <span>✅</span>
              Verifica il Risultato
            </h3>
            <p className="text-gray-700 mb-4">
              Salva i file e ricarica il browser. Dovresti vedere:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>3 step allineati orizzontalmente (desktop)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>Ogni step con numero circolare grande, icona, titolo, descrizione</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>
                  Hover sui numeri circolari: si ingrandiscono leggermente e ruotano
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>Su mobile, gli step vanno in colonna verticale</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Confronto Grid vs Flexbox */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <span className="text-4xl">🤔</span>
            Grid vs Flexbox: Quando Usare Cosa?
          </h2>
          <p className="text-xl text-indigo-100 mb-6">
            Hai appena usato <strong>entrambi</strong> i sistemi di layout moderni! Ecco quando
            scegliere uno o l'altro:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Flexbox */}
            <div className="bg-white text-gray-900 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">📏</span>
                <h3 className="text-2xl font-bold text-purple-900">Usa Flexbox quando...</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>
                    Devi allineare elementi in <strong>una sola direzione</strong> (riga O colonna)
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>
                    Il contenuto è <strong>dinamico</strong> (non sai quanti elementi ci saranno)
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>
                    Vuoi che gli elementi <strong>si distribuiscano</strong> automaticamente nello
                    spazio
                  </span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-purple-50 rounded text-sm">
                <strong>Esempi:</strong> Navbar, liste di card, toolbar, footer con 3 colonne
              </div>
            </div>

            {/* Grid */}
            <div className="bg-white text-gray-900 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">🎯</span>
                <h3 className="text-2xl font-bold text-indigo-900">Usa Grid quando...</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>
                    Devi controllare <strong>sia righe che colonne</strong> simultaneamente
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>
                    Hai un layout <strong>strutturato</strong> (sai esattamente quante colonne
                    vuoi)
                  </span>
                </li>
                <li className="flex gap-2 items-start">
                  <span className="text-indigo-600 font-bold">✓</span>
                  <span>
                    Vuoi che gli elementi siano <strong>allineati su una griglia precisa</strong>
                  </span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-indigo-50 rounded text-sm">
                <strong>Esempi:</strong> Gallerie immagini, features section, pricing tables, blog
                layout
              </div>
            </div>
          </div>

          <div className="mt-6 p-5 bg-yellow-500/20 border-2 border-yellow-300 rounded-lg">
            <p className="text-lg text-white">
              <strong>💡 Pro Tip:</strong> Puoi anche <strong>combinarli</strong>! Ad esempio, una
              griglia Grid dove ogni cella usa Flexbox internamente per centrare il contenuto. È
              quello che fanno i web designer professionisti!
            </p>
          </div>
        </div>
      </section>

      {/* Milestone Finale */}
      <ProjectMilestone
        numero={1}
        titolo="Features + How It Works Completati"
        requisiti={[
          'Features Section con 6 card in griglia 3x2 (CSS Grid)',
          'Features grid responsive: 3 col desktop, 2 col tablet, 1 col mobile',
          'Ogni feature card con icona emoji, titolo, descrizione',
          'Hover effect sulle feature card (translateY + shadow)',
          'How It Works section con 3 step allineati orizzontalmente (Flexbox)',
          'Ogni step con numero circolare colorato (gradient background)',
          'Ogni step con icona emoji, titolo e descrizione',
          'Hover effect sui numeri circolari (scale + rotate)',
          'How It Works responsive: orizzontale desktop, verticale mobile',
          'Testi e emoji personalizzati per il tuo tema (GameVerse/TasteHub/BeatStream)',
          'Colori del tuo tema applicati correttamente (custom properties)',
          'Spazio generoso (padding) e gap appropriati tra gli elementi',
        ]}
        suggerimenti={[
          'Testa il responsive riducendo la finestra del browser per vedere il grid cambiare',
          'Prova a cambiare gap nelle grid/flexbox per vedere l\'impatto sullo spazio',
          'Sperimenta con colori diversi per i numeri circolari',
          'Aggiungi transition: all 0.3s ease su tutti gli elementi con hover',
          'Se una feature card è troppo lunga, riduci il testo della descrizione',
          'Usa font-size più grande per i titoli se vuoi più impatto visivo',
        ]}
      />

      {/* Sfida Opzionale */}
      <div className="my-8 p-6 bg-purple-50 border-2 border-purple-300 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">🎯</span>
          <h3 className="text-xl font-bold text-purple-900">Sfida Opzionale: Aggiungi Effetto 'Arrow' tra gli Step</h3>
        </div>
        <div className="space-y-4">
          <p>
            Vuoi rendere la sezione How It Works ancora più figa? Aggiungi delle{' '}
            <strong>frecce animate</strong> tra uno step e l'altro per mostrare il flusso del
            processo!
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <h4 className="font-bold mb-2">🎯 Obiettivo</h4>
            <p className="text-sm">
              Tra Step 1 e Step 2, e tra Step 2 e Step 3, inserisci una <strong>freccia →</strong>{' '}
              che appare solo su desktop (nascondi su mobile con media query).
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-bold mb-2">💡 Suggerimenti</h4>
            <ul className="text-sm space-y-1">
              <li>
                • Puoi usare uno <code className="bg-gray-100 px-1">&lt;span&gt;</code> con emoji
                → oppure un carattere Unicode
              </li>
              <li>
                • Posiziona la freccia con <code className="bg-gray-100 px-1">position: absolute</code>
              </li>
              <li>
                • Usa <code className="bg-gray-100 px-1">@keyframes</code> per animare la freccia
                (translateX avanti e indietro)
              </li>
              <li>
                • Nascondi le frecce su mobile:{' '}
                <code className="bg-gray-100 px-1">display: none</code> nel media query
              </li>
            </ul>
          </div>

          <details className="bg-gray-50 border border-gray-300 rounded p-4">
            <summary className="cursor-pointer font-bold text-gray-700">
              📝 Mostra Soluzione (prova prima da solo!)
            </summary>
            <div className="mt-4 space-y-3">
              <p className="text-sm text-gray-600">
                Aggiungi questo CSS dopo le regole di <code>.step</code>:
              </p>
              <CodeExample
                language="css"
                code={`/* Freccia tra gli step */
.step::after {
  content: "→";
  position: absolute;
  right: -60px; /* Posiziona a destra dello step */
  top: 40px; /* Allineamento verticale */
  font-size: 48px;
  color: var(--primary);
  opacity: 0.5;
  animation: arrow-move 2s ease-in-out infinite;
}

/* Rimuovi freccia dall'ultimo step */
.step:last-child::after {
  display: none;
}

/* Animazione freccia */
@keyframes arrow-move {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
}

/* Nascondi frecce su mobile */
@media (max-width: 768px) {
  .step::after {
    display: none;
  }
}`}
              />
            </div>
          </details>
        </div>
      </div>

      {/* Concetti Appresi */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">📚 Cosa Hai Imparato Oggi</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded">
            <h3 className="font-bold text-lg mb-2 text-blue-900">CSS Grid</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• display: grid per layout bidimensionali</li>
              <li>• grid-template-columns con repeat() e fr</li>
              <li>• gap per spaziatura tra celle</li>
              <li>• Responsive grid con media queries</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded">
            <h3 className="font-bold text-lg mb-2 text-purple-900">Flexbox Avanzato</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• flex: 1 per distribuire spazio equamente</li>
              <li>• justify-content: space-between</li>
              <li>• flex-direction: column su mobile</li>
              <li>• align-items per allineamento verticale</li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded">
            <h3 className="font-bold text-lg mb-2 text-green-900">Design Patterns</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Features section con card grid</li>
              <li>• How It Works con processo 3-step</li>
              <li>• Numeri circolari con border-radius: 50%</li>
              <li>• Section headers centrati</li>
            </ul>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded">
            <h3 className="font-bold text-lg mb-2 text-orange-900">Effetti Visivi</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• transform: translateY() per sollevare card</li>
              <li>• transform: scale() + rotate() su hover</li>
              <li>• box-shadow con rgba per ombre colorate</li>
              <li>• Gradient backgrounds su numeri circolari</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Recap Progetto */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <span className="text-4xl">🎉</span>
            Progresso della Landing Page
          </h2>
          <p className="text-xl text-green-100 mb-6">
            Hai completato <strong>3 lezioni su 4</strong>! Il tuo sito sta prendendo forma:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white/20 rounded-lg p-4 border-2 border-white/30">
              <div className="text-2xl mb-2">✅</div>
              <div className="font-bold mb-1 text-white">Lezione 1: Planning</div>
              <div className="text-sm text-green-100">
                Wireframe, tema, CSS variables
              </div>
            </div>

            <div className="bg-white/20 rounded-lg p-4 border-2 border-white/30">
              <div className="text-2xl mb-2">✅</div>
              <div className="font-bold mb-1 text-white">Lezione 2: Navbar + Hero</div>
              <div className="text-sm text-green-100">
                Flexbox, sticky navbar, hero full-height
              </div>
            </div>

            <div className="bg-white/20 rounded-lg p-4 border-2 border-white/30">
              <div className="text-2xl mb-2">✅</div>
              <div className="font-bold mb-1 text-white">Lezione 3: Features + How</div>
              <div className="text-sm text-green-100">CSS Grid, Flexbox, hover effects</div>
            </div>
          </div>

          <div className="bg-yellow-400/30 border-2 border-yellow-300 rounded-lg p-5">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🚀</span>
              <div>
                <h3 className="font-bold text-xl mb-2">Prossima Lezione: Form + Footer + Polish</h3>
                <p className="text-green-100">
                  Nell'ultima lezione completerai il progetto aggiungendo un{' '}
                  <strong>form di contatto</strong> funzionale, un <strong>footer professionale</strong> a
                  4 colonne, e darai il <strong>polish finale</strong> (smooth scroll, micro-animations,
                  spacing perfetto).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </LessonLayout>
  );
}
