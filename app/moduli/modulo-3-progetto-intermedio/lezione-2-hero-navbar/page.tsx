import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Checklist from '@/components/didattica/Checklist';
import ProjectMilestone from '@/components/didattica/ProjectMilestone';

export default function Lezione2HeroNavbar() {
  const lezioni = getLezioniByModuloSlug('modulo-3-progetto-intermedio');

  return (
    <LessonLayout
      moduloSlug="modulo-3-progetto-intermedio"
      moduloTitolo="Modulo 3: Progetto Intermedio"
      lezioni={lezioni}
      lezioneSlug="lezione-2-hero-navbar"
      lezioneTitolo="Hero + Navbar"
    >
      <LessonHeader
        numero={2}
        titolo="Hero + Navbar"
        durata="1.5 ore"
        difficolta="media"
        obiettivi={[
          'Costruire una navbar professionale con logo, menu e CTA',
          'Creare un hero section impattante full-height',
          'Applicare Flexbox per layout navbar e hero',
          'Usare position: sticky per navbar fissa in alto',
          'Creare button con hover effects e transitions',
          'Applicare gradients e typography avanzata'
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎯 Obiettivo della Lezione</h2>

        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg mb-6">
          <h3 className="text-2xl font-bold mb-4">Le Prime Impressioni Contano!</h3>
          <p className="text-lg mb-4">
            La <strong>navbar</strong> e l&apos;<strong>hero section</strong> sono le prime cose che i visitatori vedono.
          </p>
          <p className="text-lg mb-4">
            Se queste due sezioni sono brutte o confuse, il visitatore <strong>chiude la tab in 3 secondi</strong>. 😱
          </p>
          <p className="text-xl font-bold text-yellow-200">
            Oggi costruiamo le due sezioni PIÙ IMPORTANTI della landing page!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-indigo-50 border-2 border-indigo-300 p-6 rounded-lg">
            <h4 className="font-bold text-indigo-900 mb-3 text-xl flex items-center gap-2">
              <span>🧭</span> Navbar
            </h4>
            <p className="mb-3">Navigazione principale del sito:</p>
            <ul className="space-y-2 text-sm">
              <li>✅ Logo (identità brand)</li>
              <li>✅ Menu links (sezioni pagina)</li>
              <li>✅ CTA button (azione principale)</li>
              <li>✅ Sticky: rimane fissa in alto quando scrolli</li>
            </ul>
          </div>

          <div className="bg-pink-50 border-2 border-pink-300 p-6 rounded-lg">
            <h4 className="font-bold text-pink-900 mb-3 text-xl flex items-center gap-2">
              <span>🚀</span> Hero Section
            </h4>
            <p className="mb-3">Cattura attenzione e spiega cosa offri:</p>
            <ul className="space-y-2 text-sm">
              <li>✅ Headline grande (value proposition)</li>
              <li>✅ Subheadline (dettagli)</li>
              <li>✅ CTA buttons (azioni)</li>
              <li>✅ Hero image (visual appeal)</li>
              <li>✅ Full-height: occupa tutto lo schermo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Milestone */}
      <ProjectMilestone
        numero={1}
        titolo="Navbar + Hero Completi"
        requisiti={[
          "Navbar con logo (testo + emoji), 4 menu items, CTA button",
          "Navbar sticky (rimane fissa quando scrolli)",
          "Hero section full-height (min-height: 100vh)",
          "Hero con h1 headline grande (font-size 48px+)",
          "Hero con subheadline descrittiva",
          "Due CTA buttons (primary + secondary)",
          "Navbar e Hero usano Flexbox per layout",
          "Hover effects su tutti i link e button",
          "Font del tuo tema applicati correttamente",
          "Colori del tuo tema applicati correttamente"
        ]}
        suggerimenti={[
          "Usa display: flex e justify-content: space-between per navbar",
          "Hero: display: flex, flex-direction: column, align-items: center",
          "Button primary: background colore primario + padding generoso",
          "Transitions: transition: all 0.3s ease per hover smooth"
        ]}
      />

      {/* Parte 1: NAVBAR */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🧭 Parte 1: Costruire la Navbar</h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="font-bold text-blue-900 mb-2">📘 Anatomia di una Navbar Professionale</h3>
          <p className="mb-3">Una navbar ben fatta ha 3 aree orizzontali:</p>
          <div className="bg-white p-4 rounded border-2 border-blue-200">
            <div className="flex justify-between items-center">
              <div className="font-bold text-blue-700">[LOGO]</div>
              <div className="flex gap-4 text-sm">
                <span>Link 1</span>
                <span>Link 2</span>
                <span>Link 3</span>
                <span>Link 4</span>
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-bold">CTA Button</div>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-700">
            Usiamo <strong>Flexbox</strong> con <code className="bg-blue-100 px-2 py-1 rounded">justify-content: space-between</code> per distribuire gli spazi!
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3">Step 1: HTML della Navbar</h3>
        <p className="mb-4">Apri <code className="bg-gray-200 px-2 py-1 rounded">index.html</code> e <strong>SOSTITUISCI</strong> tutto il contenuto del <code className="bg-gray-200 px-2 py-1 rounded">&lt;body&gt;</code> con questo:</p>

        <CodeExample
          title="index.html - Struttura Navbar"
          language="html"
          code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GameVerse - La Tua Destinazione Gaming</title>
  <!-- Cambia title con il TUO tema! -->
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- ========== NAVBAR ========== -->
  <nav class="navbar">
    <!-- Logo -->
    <div class="logo">
      🎮 GameVerse
      <!-- Se TasteHub: 🍕 TasteHub -->
      <!-- Se BeatStream: 🎵 BeatStream -->
    </div>

    <!-- Menu Links -->
    <ul class="nav-menu">
      <li><a href="#features">Features</a></li>
      <li><a href="#how-it-works">Come Funziona</a></li>
      <li><a href="#pricing">Prezzi</a></li>
      <li><a href="#contact">Contatti</a></li>
    </ul>

    <!-- CTA Button -->
    <a href="#" class="nav-cta">Inizia Gratis</a>
  </nav>

  <!-- Hero section verrà dopo -->

</body>
</html>`}
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4 mb-6">
          <p className="font-bold text-yellow-800 mb-2">⚠️ Personalizza con il TUO tema!</p>
          <ul className="space-y-1 text-sm">
            <li>🎮 <strong>GameVerse:</strong> Logo &quot;🎮 GameVerse&quot;, CTA &quot;Inizia Gratis&quot;</li>
            <li>🍕 <strong>TasteHub:</strong> Logo &quot;🍕 TasteHub&quot;, CTA &quot;Ordina Ora&quot;</li>
            <li>🎵 <strong>BeatStream:</strong> Logo &quot;🎵 BeatStream&quot;, CTA &quot;Prova Gratis&quot;</li>
          </ul>
        </div>

        <h3 className="text-xl font-bold mb-3">Step 2: CSS della Navbar</h3>
        <p className="mb-4">Apri <code className="bg-gray-200 px-2 py-1 rounded">css/style.css</code> e <strong>AGGIUNGI</strong> alla fine del file:</p>

        <CodeExample
          title="css/style.css - Stili Navbar (aggiungi dopo tutto)"
          language="css"
          code={`/* ========================================
   NAVBAR
   ======================================== */

.navbar {
  /* Layout Flexbox */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Spaziatura */
  padding: 20px 80px;

  /* Background (varia per tema) */
  /* GameVerse/BeatStream: background scuro */
  background-color: var(--bg-dark);

  /* TasteHub: background bianco */
  /* background-color: var(--bg-white); */

  /* Border bottom per separazione */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  /* TasteHub: rgba(0, 0, 0, 0.1) */

  /* Sticky: rimane fissa in alto */
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Logo */
.logo {
  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 700;
  color: var(--primary);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

/* Menu Links */
.nav-menu {
  display: flex;
  gap: 40px;
  list-style: none;
}

.nav-menu a {
  /* GameVerse/BeatStream: testo chiaro */
  color: var(--text-secondary);

  /* TasteHub: testo scuro */
  /* color: var(--text-muted); */

  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s ease;
}

.nav-menu a:hover {
  color: var(--primary);
}

/* CTA Button */
.nav-cta {
  background-color: var(--primary);

  /* GameVerse/BeatStream: testo bianco */
  color: white;

  /* TasteHub: testo bianco */
  /* color: white; */

  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
}

.nav-cta:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}`}
        />

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6 mb-6">
          <h3 className="font-bold text-blue-900 mb-3">💡 Spiegazione CSS Navbar</h3>
          <ul className="space-y-3">
            <li>
              <strong className="text-blue-800">display: flex + justify-content: space-between</strong><br/>
              <span className="text-sm">Distribuisce logo, menu, button equamente nello spazio orizzontale</span>
            </li>
            <li>
              <strong className="text-blue-800">position: sticky + top: 0</strong><br/>
              <span className="text-sm">Navbar rimane fissa in alto quando scrolli (prova dopo con hero lungo!)</span>
            </li>
            <li>
              <strong className="text-blue-800">z-index: 100</strong><br/>
              <span className="text-sm">Assicura che navbar stia sempre sopra tutto il resto</span>
            </li>
            <li>
              <strong className="text-blue-800">transition: all 0.3s ease</strong><br/>
              <span className="text-sm">Rende gli hover effects smooth e professionali</span>
            </li>
            <li>
              <strong className="text-blue-800">transform: translateY(-2px)</strong><br/>
              <span className="text-sm">Button si solleva leggermente al hover (micro-interaction)</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-100 border-2 border-green-400 p-6 rounded-lg">
          <h3 className="font-bold text-green-900 mb-3 text-xl">✅ Test Navbar</h3>
          <ol className="space-y-2 list-decimal list-inside">
            <li>Salva <strong>index.html</strong> e <strong>css/style.css</strong></li>
            <li>Ricarica il browser (F5)</li>
            <li>Dovresti vedere la navbar con logo, 4 link, button CTA</li>
            <li>Passa il mouse sui link: cambiano colore</li>
            <li>Passa il mouse sul button: si solleva e cambia colore</li>
          </ol>
          <p className="mt-4 font-semibold text-green-800">
            🎉 Se tutto funziona, la navbar è COMPLETA!
          </p>
        </div>
      </section>

      {/* Parte 2: HERO SECTION */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🚀 Parte 2: Costruire l&apos;Hero Section</h2>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
          <h3 className="font-bold text-purple-900 mb-2">📘 Anatomia di un Hero Efficace</h3>
          <p className="mb-3">Un hero ben fatto comunica:</p>
          <ul className="space-y-2">
            <li>✅ <strong>Cosa offri</strong> (headline)</li>
            <li>✅ <strong>Perché è utile</strong> (subheadline)</li>
            <li>✅ <strong>Cosa fare</strong> (CTA buttons)</li>
            <li>✅ <strong>Come appare</strong> (hero image)</li>
          </ul>
          <p className="mt-3 font-semibold text-purple-800">
            Tutto questo in <strong>3 secondi</strong> di lettura! ⚡
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3">Step 3: HTML dell&apos;Hero</h3>
        <p className="mb-4">
          Sempre in <code className="bg-gray-200 px-2 py-1 rounded">index.html</code>, <strong>AGGIUNGI</strong> dopo la navbar:
        </p>

        <CodeExample
          title="index.html - Hero Section (dopo navbar)"
          language="html"
          code={`  <!-- ========== HERO SECTION ========== -->
  <section class="hero">
    <div class="hero-content">
      <!-- Headline -->
      <h1 class="hero-headline">
        La Tua Destinazione Gaming Definitiva
        <!-- TasteHub: Il Cibo che Ami, a Casa Tua in 30 Minuti -->
        <!-- BeatStream: Milioni di Brani, Zero Pubblicità -->
      </h1>

      <!-- Subheadline -->
      <p class="hero-subheadline">
        Gioca, competi e connettiti con milioni di giocatori in tutto il mondo.
        Accedi a migliaia di giochi, partecipa a tornei epici e traccia le tue statistiche.
      </p>

      <!-- TasteHub Subheadline:
      Scopri migliaia di ristoranti nella tua città. Pizza, sushi, burger e molto altro.
      Consegna veloce, tracking in tempo reale, zero stress.
      -->

      <!-- BeatStream Subheadline:
      Ascolta la tua musica preferita senza limiti. Playlist personalizzate con AI,
      modalità offline, qualità HiFi. Il tuo soundtrack perfetto ti aspetta.
      -->

      <!-- CTA Buttons -->
      <div class="hero-buttons">
        <a href="#" class="btn-primary">Inizia Gratis</a>
        <!-- TasteHub: Ordina Ora -->
        <!-- BeatStream: Prova Gratis 3 Mesi -->

        <a href="#" class="btn-secondary">Guarda il Trailer</a>
        <!-- TasteHub: Vedi il Menu -->
        <!-- BeatStream: Vedi i Piani -->
      </div>
    </div>
  </section>

</body>
</html>`}
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4 mb-6">
          <p className="font-bold text-yellow-800 mb-2">⚠️ Usa i TUOI contenuti!</p>
          <p className="text-sm">Copia headline + subheadline + CTA del tuo tema dal file <strong>MODULO_3_TEMI.md</strong> (aperto nella Lezione 1)!</p>
        </div>

        <h3 className="text-xl font-bold mb-3">Step 4: CSS dell&apos;Hero</h3>
        <p className="mb-4">Aggiungi questo CSS alla fine di <code className="bg-gray-200 px-2 py-1 rounded">style.css</code>:</p>

        <CodeExample
          title="css/style.css - Stili Hero (aggiungi dopo navbar)"
          language="css"
          code={`/* ========================================
   HERO SECTION
   ======================================== */

.hero {
  /* Full-height: occupa tutto lo schermo */
  min-height: 100vh;

  /* Layout Flexbox centrato */
  display: flex;
  justify-content: center;
  align-items: center;

  /* Padding per spaziatura */
  padding: 80px 80px;

  /* Background con gradient */
  /* GameVerse: dark con gradient indigo/pink */
  background: linear-gradient(135deg, var(--bg-dark) 0%, #1a1347 100%);

  /* TasteHub: cream con gradient caldo */
  /* background: linear-gradient(135deg, var(--bg-cream) 0%, var(--bg-light-orange) 100%); */

  /* BeatStream: dark con gradient purple/cyan */
  /* background: linear-gradient(135deg, var(--bg-dark) 0%, #1e1b4b 100%); */

  /* Pattern texture (opzionale) */
  background-image:
    radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%);
}

.hero-content {
  /* Centra contenuto */
  text-align: center;
  max-width: 800px;
}

/* Headline */
.hero-headline {
  font-family: var(--font-heading);
  font-size: 56px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 24px;

  /* GameVerse/BeatStream: testo chiaro */
  color: var(--text-primary);

  /* TasteHub: testo scuro */
  /* color: var(--text-dark); */

  /* Gradient text effect (opzionale, molto figo!) */
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Subheadline */
.hero-subheadline {
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 40px;

  /* GameVerse/BeatStream: testo secondario */
  color: var(--text-secondary);

  /* TasteHub: testo muted */
  /* color: var(--text-muted); */
}

/* Buttons Container */
.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Button Primary */
.btn-primary {
  background-color: var(--primary);
  color: white;
  padding: 16px 40px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
}

.btn-primary:hover {
  background-color: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.6);
}

/* Button Secondary */
.btn-secondary {
  background-color: transparent;
  color: var(--primary);
  padding: 16px 40px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  border: 2px solid var(--primary);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: var(--primary);
  color: white;
  transform: translateY(-3px);
}`}
        />

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6 mb-6">
          <h3 className="font-bold text-blue-900 mb-3">💡 Spiegazione CSS Hero</h3>
          <ul className="space-y-3">
            <li>
              <strong className="text-blue-800">min-height: 100vh</strong><br/>
              <span className="text-sm">100vh = 100% dell&apos;altezza del viewport (schermo). Hero occupa tutto!</span>
            </li>
            <li>
              <strong className="text-blue-800">linear-gradient()</strong><br/>
              <span className="text-sm">Crea sfondo con gradiente di colori. Molto più figo di colore piatto!</span>
            </li>
            <li>
              <strong className="text-blue-800">radial-gradient() in background-image</strong><br/>
              <span className="text-sm">Aggiunge cerchi sfocati per texture. Effetto professionale!</span>
            </li>
            <li>
              <strong className="text-blue-800">-webkit-background-clip: text</strong><br/>
              <span className="text-sm">Magia CSS: il gradient diventa il colore del testo! 🌈</span>
            </li>
            <li>
              <strong className="text-blue-800">box-shadow con opacity</strong><br/>
              <span className="text-sm">Button sembra &quot;sospeso&quot; con ombra colorata</span>
            </li>
            <li>
              <strong className="text-blue-800">flex-wrap: wrap</strong><br/>
              <span className="text-sm">Su mobile, button vanno su 2 righe se necessario</span>
            </li>
          </ul>
        </div>

        <div className="bg-green-100 border-2 border-green-400 p-6 rounded-lg">
          <h3 className="font-bold text-green-900 mb-3 text-xl">✅ Test Hero Section</h3>
          <ol className="space-y-2 list-decimal list-inside">
            <li>Salva index.html e style.css</li>
            <li>Ricarica il browser (F5)</li>
            <li>L&apos;hero dovrebbe occupare tutto lo schermo</li>
            <li>Headline: grande, grassetto, con gradient colorato</li>
            <li>Subheadline: più piccolo e chiaro</li>
            <li>Due button: uno pieno (primary), uno outline (secondary)</li>
            <li>Passa mouse sui button: si sollevano con animazione smooth</li>
            <li>Scrolla in basso: navbar rimane fissa in alto (sticky!)
            </li>
          </ol>
          <p className="mt-4 font-semibold text-green-800">
            🎉 Se tutto è ok, hai completato Navbar + Hero!
          </p>
        </div>
      </section>

      {/* Personalizzazioni per Tema */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎨 Personalizzazioni per Tema</h2>

        <p className="text-lg mb-6">
          Il CSS fornito ha commenti per <strong>adattare</strong> stili ai 3 temi. Ecco un riepilogo:
        </p>

        <div className="space-y-6">
          {/* GameVerse */}
          <div className="border-4 border-indigo-300 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white p-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <span>🎮</span> GameVerse - CSS Specifico
              </h3>
            </div>
            <div className="bg-white p-6">
              <CodeExample
                language="css"
                code={`/* Navbar */
.navbar {
  background-color: var(--bg-dark);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Hero */
.hero {
  background: linear-gradient(135deg, var(--bg-dark) 0%, #1a1347 100%);
}

/* Colori testo */
.hero-headline {
  color: var(--text-primary); /* Bianco */
}
.hero-subheadline {
  color: var(--text-secondary); /* Grigio chiaro */
}`}
              />
            </div>
          </div>

          {/* TasteHub */}
          <div className="border-4 border-red-300 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-amber-500 text-white p-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <span>🍕</span> TasteHub - CSS Specifico
              </h3>
            </div>
            <div className="bg-white p-6">
              <CodeExample
                language="css"
                code={`/* Navbar */
.navbar {
  background-color: var(--bg-white); /* Bianco invece di dark */
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.nav-menu a {
  color: var(--text-muted); /* Grigio scuro invece di chiaro */
}

/* Hero */
.hero {
  background: linear-gradient(135deg, var(--bg-cream) 0%, var(--bg-light-orange) 100%);
}

/* Colori testo */
.hero-headline {
  color: var(--text-dark); /* Nero invece di bianco */
}
.hero-subheadline {
  color: var(--text-muted); /* Grigio scuro */
}`}
              />
            </div>
          </div>

          {/* BeatStream */}
          <div className="border-4 border-purple-300 rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white p-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <span>🎵</span> BeatStream - CSS Specifico
              </h3>
            </div>
            <div className="bg-white p-6">
              <CodeExample
                language="css"
                code={`/* Navbar */
.navbar {
  background-color: var(--bg-dark);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Hero */
.hero {
  background: linear-gradient(135deg, var(--bg-dark) 0%, #1e1b4b 100%);
}

/* Colori testo */
.hero-headline {
  color: var(--text-primary); /* Bianco */
}
.hero-subheadline {
  color: var(--text-secondary); /* Grigio chiaro */
}`}
              />
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
          <h3 className="font-bold text-yellow-800 mb-2">💡 Come Applicare</h3>
          <ol className="space-y-2 list-decimal list-inside text-sm">
            <li>Guarda il CSS del <strong>TUO tema</strong> sopra</li>
            <li>Apri <code className="bg-yellow-100 px-2 py-1 rounded">style.css</code></li>
            <li>Trova le righe da modificare (hanno commenti con nome tema)</li>
            <li>Commenta le righe sbagliate con <code className="bg-yellow-100 px-2 py-1 rounded">/*  */</code></li>
            <li>Decommenta le righe giuste togliendo <code className="bg-yellow-100 px-2 py-1 rounded">/*  */</code></li>
          </ol>
        </div>
      </section>

      {/* Conclusione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎯 Recap Lezione 2</h2>

        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Cosa Hai Costruito Oggi</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex gap-3">
              <span>✅</span>
              <span><strong>Navbar professionale</strong> con logo, menu, CTA button sticky</span>
            </li>
            <li className="flex gap-3">
              <span>✅</span>
              <span><strong>Hero section full-height</strong> che cattura attenzione immediatamente</span>
            </li>
            <li className="flex gap-3">
              <span>✅</span>
              <span>Layout con <strong>Flexbox</strong> per distribuzione spazi perfetta</span>
            </li>
            <li className="flex gap-3">
              <span>✅</span>
              <span><strong>Gradients background</strong> per visual impact professionale</span>
            </li>
            <li className="flex gap-3">
              <span>✅</span>
              <span><strong>Hover effects smooth</strong> su tutti gli elementi interattivi</span>
            </li>
            <li className="flex gap-3">
              <span>✅</span>
              <span><strong>Typography avanzata</strong> con gradient text effect</span>
            </li>
          </ul>

          <div className="mt-6 bg-white bg-opacity-20 p-4 rounded">
            <p className="font-bold text-yellow-200 mb-2">🚀 Prossima Lezione:</p>
            <p className="text-lg">
              Costruiremo la <strong>sezione Features</strong> (Grid 3x2) e <strong>How It Works</strong> (3 step)!
            </p>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <Checklist
        items={[
          'Navbar HTML creata con logo, 4 menu items, CTA button',
          'Navbar CSS applicato: flexbox, sticky, hover effects',
          'Navbar sticky funziona: rimane fissa scrollando',
          'Hero HTML creato con headline, subheadline, 2 CTA buttons',
          'Hero CSS applicato: full-height (100vh), gradients',
          'Hero headline ha gradient text effect applicato',
          'Entrambi i button hanno hover effects smooth',
          'Contenuti personalizzati con il MIO tema (testi, emoji)',
          'Colori del mio tema applicati correttamente',
          'Font Google del mio tema caricati e visibili',
          'Navbar + Hero visualizzati correttamente nel browser',
          'Ho testato hover su tutti link e button'
        ]}
      />
    </LessonLayout>
  );
}
