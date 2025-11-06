import { getLezioniByModuloSlug } from '@/lib/moduli';
import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import Checklist from '@/components/didattica/Checklist';

export default function Lezione1PlanningSetup() {
  const lezioni = getLezioniByModuloSlug('modulo-3-progetto-intermedio');

  return (
    <LessonLayout
      moduloSlug="modulo-3-progetto-intermedio"
      moduloTitolo="Modulo 3: Progetto Intermedio"
      lezioni={lezioni}
      lezioneSlug="lezione-1-planning-setup"
      lezioneTitolo="Planning & Setup"
    >
      <LessonHeader
        numero={1}
        titolo="Planning & Setup"
        durata="1 ora"
        difficolta="facile"
        obiettivi={[
          'Imparare a progettare PRIMA di codare (design thinking)',
          'Creare wireframe per visualizzare la struttura',
          'Scegliere palette colori e tipografia coerente',
          'Impostare progetto con struttura professionale',
          'Preparare CSS con custom properties per il tema scelto'
        ]}
      />

      {/* Introduzione al Progetto */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🚀 Il Tuo Primo Progetto Completo!</h2>

        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-8 rounded-lg mb-6">
          <h3 className="text-2xl font-bold mb-4">Benvenuto al Progetto Intermedio!</h3>
          <p className="text-lg mb-4">
            In questo modulo creerai la tua <strong>prima Landing Page professionale</strong> da zero.
          </p>
          <p className="text-lg mb-4">
            Una landing page è una pagina web progettata per <strong>convincere</strong> i visitatori a fare un&apos;azione
            (iscriversi, scaricare, acquistare). Le trovi ovunque: app, prodotti, servizi.
          </p>
          <div className="bg-black bg-opacity-20 p-4 rounded border-2 border-white border-opacity-30 mt-4">
            <p className="font-bold mb-2 text-yellow-200">📊 Cosa costruirai:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Navbar con logo e menu</li>
              <li>Hero section impattante con CTA</li>
              <li>Sezione Features (6 caratteristiche)</li>
              <li>How It Works (3 step processo)</li>
              <li>Form Newsletter/Contatti</li>
              <li>Footer completo multi-colonna</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
          <h3 className="font-bold text-blue-900 mb-2">💡 Differenza con le Lezioni Precedenti</h3>
          <p className="mb-2">Finora hai imparato HTML e CSS attraverso <strong>micro-esercizi</strong> (es: crea un bottone, stylo un paragrafo).</p>
          <p className="mb-2">Ora è il momento di mettere insieme <strong>tutto</strong> in un <strong>progetto unico e coerente</strong>!</p>
          <p className="font-semibold text-blue-800">Questo progetto sarà il tuo primo &quot;portfolio piece&quot; da mostrare! 🎨</p>
        </div>
      </section>

      {/* Glossario - Parole Nuove */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">📖 Parole Nuove da Imparare</h2>

        <p className="text-lg mb-6">
          In questo progetto useremo parole nuove del mondo del <strong>web design</strong>.
          Non preoccuparti! Te le spieghiamo tutte qui in modo semplice. 😊
        </p>

        <div className="space-y-4">
          {/* Landing Page */}
          <div className="bg-white border-2 border-purple-200 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🎯</span>
              <div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">Landing Page</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Cos&apos;è:</strong> Una pagina web speciale che vuole <strong>convincerti a fare qualcosa</strong>
                  (iscriverti, scaricare un&apos;app, comprare qualcosa).
                </p>
                <p className="text-gray-600 text-sm italic">
                  💡 Analogia: È come un <strong>poster pubblicitario</strong> ma digitale e interattivo!
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  📝 Esempio: La pagina dove ti iscrivi a Spotify o scarichi TikTok.
                </p>
              </div>
            </div>
          </div>

          {/* Navbar */}
          <div className="bg-white border-2 border-blue-200 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🧭</span>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Navbar (Navigation Bar)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Cos&apos;è:</strong> La <strong>barra di navigazione</strong> in cima alla pagina.
                  Contiene il logo e i link per muoverti nel sito.
                </p>
                <p className="text-gray-600 text-sm italic">
                  💡 Analogia: È come l&apos;<strong>indice</strong> all&apos;inizio di un libro che ti dice dove andare!
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  📝 Esempio: La barra in alto su YouTube con il logo, la ricerca e il tuo profilo.
                </p>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="bg-white border-2 border-pink-200 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🚀</span>
              <div>
                <h3 className="text-xl font-bold text-pink-900 mb-2">Hero Section</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Cos&apos;è:</strong> La <strong>sezione GRANDE</strong> appena sotto la navbar.
                  È la prima cosa che vedi e deve catturare la tua attenzione subito!
                </p>
                <p className="text-gray-600 text-sm italic">
                  💡 Analogia: È come la <strong>copertina</strong> di una rivista o di un videogioco - deve essere WOW! ✨
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  📝 Esempio: L&apos;immagine grande con il titolo quando apri Netflix o Instagram.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-white border-2 border-green-200 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-3xl">👆</span>
              <div>
                <h3 className="text-xl font-bold text-green-900 mb-2">CTA (Call To Action)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Cos&apos;è:</strong> Un <strong>bottone</strong> o link che ti dice cosa fare.
                  Tipo &quot;Iscriviti&quot;, &quot;Scarica&quot;, &quot;Inizia Gratis&quot;.
                </p>
                <p className="text-gray-600 text-sm italic">
                  💡 Analogia: È come quando qualcuno ti dice <strong>&quot;Clicca qui!&quot;</strong>
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  📝 Esempio: Il bottone rosso &quot;Iscriviti&quot; su YouTube.
                </p>
              </div>
            </div>
          </div>

          {/* Wireframe */}
          <div className="bg-white border-2 border-indigo-200 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-3xl">📝</span>
              <div>
                <h3 className="text-xl font-bold text-indigo-900 mb-2">Wireframe</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Cos&apos;è:</strong> Un <strong>disegno semplice</strong> (schizzo) di come sarà la pagina.
                  Solo rettangoli e linee, senza colori o dettagli.
                </p>
                <p className="text-gray-600 text-sm italic">
                  💡 Analogia: Come quando disegni la <strong>piantina</strong> della tua camera su carta prima di spostare i mobili!
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  📝 Esempio: Schizzo con scritto &quot;QUI VA IL TITOLO&quot;, &quot;QUI VA L&apos;IMMAGINE&quot;.
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white border-2 border-amber-200 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-3xl">⭐</span>
              <div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">Features (Caratteristiche)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Cos&apos;è:</strong> Le <strong>funzioni</strong> o <strong>vantaggi</strong> di quello che stai promuovendo.
                  Tipo &quot;Veloce&quot;, &quot;Gratis&quot;, &quot;Facile da usare&quot;.
                </p>
                <p className="text-gray-600 text-sm italic">
                  💡 Analogia: Come quando descrivi il tuo smartphone: &quot;Ha fotocamera da 48MP, batteria lunga, schermo grande&quot;!
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  📝 Esempio: Su Spotify: &quot;70M brani&quot;, &quot;Playlist personalizzate&quot;, &quot;Offline mode&quot;.
                </p>
              </div>
            </div>
          </div>

          {/* Palette Colori */}
          <div className="bg-white border-2 border-rose-200 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🎨</span>
              <div>
                <h3 className="text-xl font-bold text-rose-900 mb-2">Palette (Colori)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Cos&apos;è:</strong> Un <strong>set di colori</strong> che usi insieme in tutto il progetto.
                  Di solito 3-5 colori che stanno bene insieme.
                </p>
                <p className="text-gray-600 text-sm italic">
                  💡 Analogia: Come quando scegli i colori per <strong>dipingere la tua stanza</strong> - non ne usi 50 diversi!
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  📝 Esempio: Instagram usa viola/rosa/arancio. Facebook usa solo blu e bianco.
                </p>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="bg-white border-2 border-cyan-200 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-3xl">✍️</span>
              <div>
                <h3 className="text-xl font-bold text-cyan-900 mb-2">Typography (Tipografia)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Cos&apos;è:</strong> I <strong>font</strong> (caratteri) che usi per scrivere.
                  Di solito uno per i titoli e uno per il testo normale.
                </p>
                <p className="text-gray-600 text-sm italic">
                  💡 Analogia: Come quando scegli se scrivere <strong>a mano</strong> o con il <strong>computer</strong> - cambiano le lettere!
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  📝 Esempio: Google usa il font &quot;Roboto&quot;, Apple usa &quot;San Francisco&quot;.
                </p>
              </div>
            </div>
          </div>

          {/* Layout */}
          <div className="bg-white border-2 border-teal-200 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-3xl">📐</span>
              <div>
                <h3 className="text-xl font-bold text-teal-900 mb-2">Layout</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Cos&apos;è:</strong> Come <strong>organizzi</strong> gli elementi sulla pagina.
                  Dove metti titoli, immagini, bottoni, etc.
                </p>
                <p className="text-gray-600 text-sm italic">
                  💡 Analogia: Come quando <strong>sistemi i quaderni</strong> nello zaino - metti quelli pesanti sotto, leggeri sopra!
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  📝 Esempio: Su Instagram il layout mette le foto al centro, i bottoni sotto.
                </p>
              </div>
            </div>
          </div>

          {/* Gradient */}
          <div className="bg-white border-2 border-violet-200 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🌈</span>
              <div>
                <h3 className="text-xl font-bold text-violet-900 mb-2">Gradient (Sfumatura)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Cos&apos;è:</strong> Un colore che <strong>sfuma</strong> gradualmente in un altro.
                  Tipo dal blu al viola, dal rosso all&apos;arancio.
                </p>
                <p className="text-gray-600 text-sm italic">
                  💡 Analogia: Come il <strong>tramonto</strong> - il cielo passa da arancione a rosa a blu! 🌅
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  📝 Esempio: Il logo di Instagram è un gradient rosa-viola-arancio.
                </p>
              </div>
            </div>
          </div>

          {/* Hover */}
          <div className="bg-white border-2 border-orange-200 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🖱️</span>
              <div>
                <h3 className="text-xl font-bold text-orange-900 mb-2">Hover (Al passaggio del mouse)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Cos&apos;è:</strong> Cosa succede quando <strong>passi il mouse</strong> sopra qualcosa.
                  Tipo un bottone che cambia colore.
                </p>
                <p className="text-gray-600 text-sm italic">
                  💡 Analogia: Come quando <strong>punti il dito</strong> su qualcosa prima di prenderlo - gli dai attenzione!
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  📝 Esempio: I link su Google diventano sottolineati quando ci passi sopra col mouse.
                </p>
              </div>
            </div>
          </div>

          {/* Sticky */}
          <div className="bg-white border-2 border-lime-200 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-3xl">📌</span>
              <div>
                <h3 className="text-xl font-bold text-lime-900 mb-2">Sticky (Appiccicoso/Fisso)</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Cos&apos;è:</strong> Un elemento che <strong>rimane sempre visibile</strong> anche quando scrolli la pagina.
                  Tipo la navbar che resta in cima.
                </p>
                <p className="text-gray-600 text-sm italic">
                  💡 Analogia: Come un <strong>post-it attaccato</strong> al monitor - non si sposta mai! 📌
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  📝 Esempio: La barra di YouTube che rimane sempre in alto quando scrolli i video.
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Piece */}
          <div className="bg-white border-2 border-fuchsia-200 p-5 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🎨</span>
              <div>
                <h3 className="text-xl font-bold text-fuchsia-900 mb-2">Portfolio Piece</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Cos&apos;è:</strong> Un <strong>progetto finito</strong> che puoi mostrare per far vedere cosa sai fare.
                  Come un artista che mostra i suoi quadri!
                </p>
                <p className="text-gray-600 text-sm italic">
                  💡 Analogia: Come quando fai un <strong>disegno bellissimo</strong> e lo appendi in camera per farlo vedere agli amici!
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  📝 Esempio: Questo progetto landing page sarà il tuo primo portfolio piece!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 p-6 rounded-lg mt-8">
          <h3 className="font-bold text-purple-900 mb-3 text-xl flex items-center gap-2">
            <span>💪</span> Non Preoccuparti!
          </h3>
          <p className="text-gray-800 mb-2">
            All&apos;inizio queste parole sembreranno strane, ma <strong>le userai così tanto</strong> in questo progetto
            che tra qualche giorno ti sembreranno normalissime! 🚀
          </p>
          <p className="text-gray-800 font-semibold">
            Se dimentichi una parola, torna qui a rileggerla. Questa pagina è il tuo <strong>dizionario</strong>! 📖
          </p>
        </div>
      </section>

      {/* Il Processo di Design */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎨 Il Processo di Design Professionale</h2>

        <p className="text-lg mb-6">
          I designer professionisti <strong>NON</strong> aprono VS Code e iniziano a scrivere codice random.
          Seguono un processo preciso:
        </p>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-purple-50 border-2 border-purple-300 p-6 rounded-lg text-center">
            <span className="text-4xl mb-2 block">📝</span>
            <h4 className="font-bold text-purple-900 mb-2">1. Wireframe</h4>
            <p className="text-sm text-gray-700">Disegna la struttura (carta o digitale)</p>
          </div>
          <div className="bg-pink-50 border-2 border-pink-300 p-6 rounded-lg text-center">
            <span className="text-4xl mb-2 block">🎨</span>
            <h4 className="font-bold text-pink-900 mb-2">2. Palette & Font</h4>
            <p className="text-sm text-gray-700">Scegli colori e tipografia</p>
          </div>
          <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg text-center">
            <span className="text-4xl mb-2 block">🏗️</span>
            <h4 className="font-bold text-blue-900 mb-2">3. Setup Progetto</h4>
            <p className="text-sm text-gray-700">Crea cartelle e file base</p>
          </div>
          <div className="bg-green-50 border-2 border-green-300 p-6 rounded-lg text-center">
            <span className="text-4xl mb-2 block">💻</span>
            <h4 className="font-bold text-green-900 mb-2">4. Codifica</h4>
            <p className="text-sm text-gray-700">Scrivi HTML e CSS</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
          <h3 className="font-bold text-yellow-700 mb-2">⚠️ Errore Comune Principianti</h3>
          <p className="mb-2">Molti principianti saltano step 1-3 e vanno dritti al codice. Risultato?</p>
          <ul className="list-disc list-inside space-y-1 text-yellow-800">
            <li>❌ Layout confuso e disorganizzato</li>
            <li>❌ Colori che non stanno bene insieme</li>
            <li>❌ File e cartelle caotici</li>
            <li>❌ Tanto tempo perso a &quot;rifare&quot;</li>
          </ul>
          <p className="mt-3 font-semibold">✅ Progettare prima = Codare più veloce e meglio!</p>
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3">🧠 Design Thinking</h3>
          <p className="mb-2">
            Questo approccio si chiama <strong>&quot;design thinking&quot;</strong>: pianificare e visualizzare PRIMA di costruire.
          </p>
          <p>
            Lo usano tutti i professionisti: designer, architetti, ingegneri. E ora anche tu! 🎯
          </p>
        </div>
      </section>

      {/* I 3 Temi tra cui Scegliere */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎯 Scegli il Tuo Tema</h2>

        <p className="text-lg mb-6">
          Hai <strong>3 temi predefiniti</strong> tra cui scegliere. Ognuno ha colori, contenuti e stile diversi.
          Scegli quello che ti ispira di più!
        </p>

        {/* Tema 1: GameVerse */}
        <div className="mb-8 border-4 border-indigo-300 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">🎮</span>
              <h3 className="text-2xl font-bold">Tema 1: GameVerse</h3>
            </div>
            <p className="text-lg">Piattaforma Gaming - Per chi ama i videogiochi</p>
          </div>
          <div className="bg-white p-6">
            <p className="mb-4"><strong>Cosa vendi:</strong> Accesso a libreria giochi, tornei, community gaming</p>

            <div className="mb-4">
              <h4 className="font-bold mb-2">🎨 Palette Colori:</h4>
              <div className="flex gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded" style={{backgroundColor: '#6366F1'}}></div>
                  <span className="text-sm">Indigo (#6366F1)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded" style={{backgroundColor: '#EC4899'}}></div>
                  <span className="text-sm">Pink (#EC4899)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded border" style={{backgroundColor: '#0F172A'}}></div>
                  <span className="text-sm">Dark (#0F172A)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded" style={{backgroundColor: '#10B981'}}></div>
                  <span className="text-sm">Green (#10B981)</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-bold mb-2">✍️ Font Google:</h4>
              <p><strong>Heading:</strong> Rajdhani (moderno, tech) | <strong>Body:</strong> Inter</p>
            </div>

            <div className="mb-4">
              <h4 className="font-bold mb-2">📋 Features Principali:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>🎯 Libreria Infinita (10,000+ giochi)</li>
                <li>🏆 Tornei Competitivi</li>
                <li>📊 Statistiche Avanzate</li>
                <li>👥 Community Globale (5M+ giocatori)</li>
                <li>🎙️ Voice Chat Integrato</li>
                <li>💾 Cloud Save</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-4 rounded">
              <p className="font-semibold text-indigo-900">✨ Stile: Tech, energetico, competitivo</p>
            </div>
          </div>
        </div>

        {/* Tema 2: TasteHub */}
        <div className="mb-8 border-4 border-red-300 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-amber-500 text-white p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">🍕</span>
              <h3 className="text-2xl font-bold">Tema 2: TasteHub</h3>
            </div>
            <p className="text-lg">Food Delivery - Per chi ama il cibo buono</p>
          </div>
          <div className="bg-white p-6">
            <p className="mb-4"><strong>Cosa vendi:</strong> Consegna cibo a domicilio da 500+ ristoranti</p>

            <div className="mb-4">
              <h4 className="font-bold mb-2">🎨 Palette Colori:</h4>
              <div className="flex gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded" style={{backgroundColor: '#EF4444'}}></div>
                  <span className="text-sm">Red (#EF4444)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded" style={{backgroundColor: '#F59E0B'}}></div>
                  <span className="text-sm">Amber (#F59E0B)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded border" style={{backgroundColor: '#FFFBEB'}}></div>
                  <span className="text-sm">Cream (#FFFBEB)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded" style={{backgroundColor: '#10B981'}}></div>
                  <span className="text-sm">Green (#10B981)</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-bold mb-2">✍️ Font Google:</h4>
              <p><strong>Heading:</strong> Poppins (friendly, arrotondato) | <strong>Body:</strong> Open Sans</p>
            </div>

            <div className="mb-4">
              <h4 className="font-bold mb-2">📋 Features Principali:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>🍔 Menu Infinito (500+ ristoranti)</li>
                <li>⚡ Consegna Veloce (30 minuti)</li>
                <li>📍 Tracking Real-Time</li>
                <li>💳 Pagamenti Sicuri</li>
                <li>⭐ Recensioni Verificate</li>
                <li>🎁 Offerte Esclusive</li>
              </ul>
            </div>

            <div className="bg-red-50 p-4 rounded">
              <p className="font-semibold text-red-900">✨ Stile: Caldo, appetitoso, accogliente</p>
            </div>
          </div>
        </div>

        {/* Tema 3: BeatStream */}
        <div className="mb-8 border-4 border-purple-300 rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">🎵</span>
              <h3 className="text-2xl font-bold">Tema 3: BeatStream</h3>
            </div>
            <p className="text-lg">Music Streaming - Per chi vive di musica</p>
          </div>
          <div className="bg-white p-6">
            <p className="mb-4"><strong>Cosa vendi:</strong> Streaming musicale illimitato, 70M+ brani</p>

            <div className="mb-4">
              <h4 className="font-bold mb-2">🎨 Palette Colori:</h4>
              <div className="flex gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded" style={{backgroundColor: '#8B5CF6'}}></div>
                  <span className="text-sm">Purple (#8B5CF6)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded" style={{backgroundColor: '#06B6D4'}}></div>
                  <span className="text-sm">Cyan (#06B6D4)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded border" style={{backgroundColor: '#18181B'}}></div>
                  <span className="text-sm">Dark (#18181B)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded" style={{backgroundColor: '#EC4899'}}></div>
                  <span className="text-sm">Pink (#EC4899)</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="font-bold mb-2">✍️ Font Google:</h4>
              <p><strong>Heading:</strong> Montserrat (bold, impattante) | <strong>Body:</strong> Lato</p>
            </div>

            <div className="mb-4">
              <h4 className="font-bold mb-2">📋 Features Principali:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>🎧 70M+ Brani</li>
                <li>🤖 Playlist AI (personalizzate)</li>
                <li>📱 Modalità Offline</li>
                <li>🎙️ Podcast Esclusivi</li>
                <li>🔊 Qualità HiFi (320kbps)</li>
                <li>👥 Listen Together</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded">
              <p className="font-semibold text-purple-900">✨ Stile: Moderno, vibrante, creativo</p>
            </div>
          </div>
        </div>

        <div className="bg-green-100 border-2 border-green-400 p-6 rounded-lg">
          <h3 className="font-bold text-green-900 mb-3 text-xl flex items-center gap-2">
            <span>✅</span> Scegli ORA il Tuo Tema
          </h3>
          <p className="mb-3">Prenditi 2 minuti per decidere quale tema ti piace di più:</p>
          <ul className="space-y-2">
            <li className="flex gap-2">
              <span>•</span>
              <span>Quale ti <strong>ispira</strong> di più?</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Quali colori ti <strong>attraggono</strong>?</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Quale settore ti <strong>interessa</strong>?</span>
            </li>
          </ul>
          <p className="mt-4 font-semibold text-green-800">
            📝 Scrivi la tua scelta su carta: &quot;Ho scelto [NOME TEMA]&quot;
          </p>
        </div>
      </section>

      {/* Wireframe */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">📝 Step 1: Creare il Wireframe</h2>

        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-3">📘 Cos&apos;è un Wireframe?</h3>
          <p className="mb-3">
            Un <strong>wireframe</strong> è uno schizzo/disegno della struttura della pagina, senza colori o dettagli.
          </p>
          <p className="mb-3">
            È come il <strong>progetto architettonico</strong> di una casa: mostra dove vanno le stanze (sezioni),
            ma non i mobili (dettagli).
          </p>
          <p className="font-semibold text-yellow-200">
            Obiettivo: Capire DOVE mettere le sezioni, PRIMA di scrivere codice
          </p>
        </div>

        <h3 className="text-xl font-bold mb-3">🖊️ Esercizio: Disegna il Tuo Wireframe</h3>

        <p className="mb-4">Prendi un <strong>foglio bianco</strong> e una <strong>matita/penna</strong>. Disegna questi rettangoli dall&apos;alto verso il basso:</p>

        <div className="bg-gray-50 border-2 border-gray-300 p-6 rounded-lg mb-6 space-y-4">
          <div className="border-2 border-gray-400 p-4">
            <p className="font-bold">1. NAVBAR (top fisso)</p>
            <p className="text-sm text-gray-600">Logo a sinistra | Menu centro | Button CTA destra</p>
          </div>
          <div className="border-2 border-blue-400 p-6 bg-blue-50">
            <p className="font-bold text-blue-900">2. HERO SECTION (grande)</p>
            <p className="text-sm text-gray-700">Headline grande | Subheadline | 2 Button | Immagine a destra</p>
          </div>
          <div className="border-2 border-green-400 p-6 bg-green-50">
            <p className="font-bold text-green-900">3. FEATURES (griglia 3x2)</p>
            <p className="text-sm text-gray-700">6 card con icona + titolo + descrizione</p>
          </div>
          <div className="border-2 border-amber-400 p-6 bg-amber-50">
            <p className="font-bold text-amber-900">4. HOW IT WORKS (3 step orizzontali)</p>
            <p className="text-sm text-gray-700">Step 1 | Step 2 | Step 3 con frecce tra loro</p>
          </div>
          <div className="border-2 border-purple-400 p-4 bg-purple-50">
            <p className="font-bold text-purple-900">5. NEWSLETTER FORM</p>
            <p className="text-sm text-gray-700">Titolo | Input email | Button submit</p>
          </div>
          <div className="border-2 border-gray-600 p-4 bg-gray-800 text-white">
            <p className="font-bold">6. FOOTER (4 colonne)</p>
            <p className="text-sm text-gray-300">4 liste link | Social icons | Copyright</p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
          <h3 className="font-bold text-blue-900 mb-2">💡 Consigli per il Wireframe</h3>
          <ul className="space-y-2">
            <li>✅ Non servono dettagli: usa rettangoli e linee</li>
            <li>✅ Scrivi nomi sezioni: &quot;NAVBAR&quot;, &quot;HERO&quot;, etc.</li>
            <li>✅ Indica proporzioni: hero GRANDE, footer PICCOLO</li>
            <li>❌ NON disegnare colori o font (vengono dopo)</li>
          </ul>
        </div>
      </section>

      {/* Setup Progetto */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🏗️ Step 2: Setup del Progetto</h2>

        <p className="text-lg mb-6">
          Ora creiamo la struttura di cartelle e file in VS Code. Seguimi passo-passo!
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">📁 Struttura Cartelle</h3>
          <p className="mb-4">Apri VS Code e crea questa struttura:</p>

          <CodeExample
            title="Struttura File e Cartelle"
            language="plaintext"
            code={`landing-page-progetto/
├── index.html
├── css/
│   └── style.css
└── images/
    └── (qui metteremo le immagini dopo)`}
          />

          <div className="mt-4 space-y-3">
            <div className="bg-gray-50 p-4 border-l-4 border-gray-400">
              <p className="font-bold mb-1">1️⃣ Crea la cartella principale</p>
              <p className="text-sm">File → Open Folder → Crea nuova cartella &quot;landing-page-progetto&quot; sul Desktop → Apri</p>
            </div>
            <div className="bg-gray-50 p-4 border-l-4 border-gray-400">
              <p className="font-bold mb-1">2️⃣ Crea index.html</p>
              <p className="text-sm">Click destro nella sidebar VS Code → New File → Chiama &quot;index.html&quot;</p>
            </div>
            <div className="bg-gray-50 p-4 border-l-4 border-gray-400">
              <p className="font-bold mb-1">3️⃣ Crea cartella css</p>
              <p className="text-sm">Click destro → New Folder → Chiama &quot;css&quot;</p>
            </div>
            <div className="bg-gray-50 p-4 border-l-4 border-gray-400">
              <p className="font-bold mb-1">4️⃣ Crea style.css dentro css/</p>
              <p className="text-sm">Click destro sulla cartella css → New File → Chiama &quot;style.css&quot;</p>
            </div>
            <div className="bg-gray-50 p-4 border-l-4 border-gray-400">
              <p className="font-bold mb-1">5️⃣ Crea cartella images</p>
              <p className="text-sm">Click destro → New Folder → Chiama &quot;images&quot; (la useremo dopo)</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">📄 HTML Base</h3>
          <p className="mb-4">Apri <code className="bg-gray-200 px-2 py-1 rounded">index.html</code> e scrivi la struttura base:</p>

          <CodeExample
            title="index.html - Struttura Base"
            language="html"
            code={`<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- CAMBIA IL TITOLO CON IL TUO TEMA! -->
  <title>GameVerse - La Tua Destinazione Gaming</title>
  <!-- Se hai scelto TasteHub: TasteHub - Food Delivery Veloce -->
  <!-- Se hai scelto BeatStream: BeatStream - Streaming Musicale -->

  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Qui costruiremo la landing page! -->

  <h1>🚀 Progetto Partito!</h1>
  <p>Se vedi questo testo, il setup è corretto!</p>

</body>
</html>`}
          />

          <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
            <p className="font-bold text-green-900 mb-2">✅ Test Rapido</p>
            <p className="text-sm">Salva il file (Ctrl+S) e fai doppio click su index.html. Dovresti vedere &quot;Progetto Partito!&quot; nel browser!</p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">🎨 CSS: Setup Custom Properties</h3>
          <p className="mb-4">
            Ora impostiamo i <strong>colori e font</strong> del tema scelto usando le <strong>CSS Custom Properties</strong> (variabili CSS).
          </p>
          <p className="mb-4">
            Apri <code className="bg-gray-200 px-2 py-1 rounded">css/style.css</code> e copia il CSS del <strong>TUO tema</strong>:
          </p>

          {/* GameVerse CSS */}
          <div className="mb-6">
            <div className="bg-indigo-100 border-2 border-indigo-400 p-3 rounded-t-lg">
              <p className="font-bold text-indigo-900">🎮 Se hai scelto GAMEVERSE:</p>
            </div>
            <CodeExample
              title="css/style.css - Tema GameVerse"
              language="css"
              code={`/* ========================================
   TEMA: GAMEVERSE - GAMING PLATFORM
   ======================================== */

/* Import Font Google */
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;600;700&family=Inter:wght@300;400;600;700&display=swap');

/* Custom Properties - Colori */
:root {
  /* Primary Colors */
  --primary: #6366F1;        /* Indigo vibrante */
  --primary-dark: #4F46E5;   /* Hover state */
  --primary-light: #818CF8;  /* Accents */

  /* Secondary Colors */
  --secondary: #EC4899;      /* Pink energetico */
  --secondary-dark: #DB2777;

  /* Backgrounds */
  --bg-dark: #0F172A;        /* Slate dark */
  --bg-card: #1E293B;        /* Card background */
  --bg-light: #F8FAFC;       /* Light sections */

  /* Text */
  --text-primary: #F1F5F9;   /* Light text su dark */
  --text-secondary: #94A3B8; /* Muted text */
  --text-dark: #0F172A;      /* Text su light bg */

  /* Accent */
  --accent-green: #10B981;   /* Success/online */
  --accent-yellow: #F59E0B;  /* Achievements */

  /* Typography */
  --font-heading: 'Rajdhani', sans-serif;
  --font-body: 'Inter', sans-serif;
}

/* Reset Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  background-color: var(--bg-dark);
  color: var(--text-primary);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
}

/* Test Visivo */
h1 {
  color: var(--primary);
  font-size: 48px;
}

p {
  color: var(--text-secondary);
}`}
            />
          </div>

          {/* TasteHub CSS */}
          <div className="mb-6">
            <div className="bg-red-100 border-2 border-red-400 p-3 rounded-t-lg">
              <p className="font-bold text-red-900">🍕 Se hai scelto TASTEHUB:</p>
            </div>
            <CodeExample
              title="css/style.css - Tema TasteHub"
              language="css"
              code={`/* ========================================
   TEMA: TASTEHUB - FOOD DELIVERY
   ======================================== */

/* Import Font Google */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Open+Sans:wght@300;400;600;700&display=swap');

/* Custom Properties - Colori */
:root {
  /* Primary Colors */
  --primary: #EF4444;        /* Red appetitoso */
  --primary-dark: #DC2626;
  --primary-light: #F87171;

  /* Secondary Colors */
  --secondary: #F59E0B;      /* Amber/gold */
  --secondary-dark: #D97706;

  /* Backgrounds */
  --bg-cream: #FFFBEB;       /* Warm cream */
  --bg-white: #FFFFFF;
  --bg-light-orange: #FEF3C7;

  /* Text */
  --text-dark: #1F2937;      /* Charcoal */
  --text-muted: #6B7280;     /* Gray */
  --text-light: #F9FAFB;     /* Light on dark */

  /* Accent */
  --accent-green: #10B981;   /* Fresh/healthy */
  --accent-orange: #FB923C;  /* Spicy */

  /* Typography */
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Open Sans', sans-serif;
}

/* Reset Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  background-color: var(--bg-cream);
  color: var(--text-dark);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
}

/* Test Visivo */
h1 {
  color: var(--primary);
  font-size: 48px;
}

p {
  color: var(--text-muted);
}`}
            />
          </div>

          {/* BeatStream CSS */}
          <div className="mb-6">
            <div className="bg-purple-100 border-2 border-purple-400 p-3 rounded-t-lg">
              <p className="font-bold text-purple-900">🎵 Se hai scelto BEATSTREAM:</p>
            </div>
            <CodeExample
              title="css/style.css - Tema BeatStream"
              language="css"
              code={`/* ========================================
   TEMA: BEATSTREAM - MUSIC STREAMING
   ======================================== */

/* Import Font Google */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;900&family=Lato:wght@300;400;700&display=swap');

/* Custom Properties - Colori */
:root {
  /* Primary Colors */
  --primary: #8B5CF6;        /* Purple vibrante */
  --primary-dark: #7C3AED;
  --primary-light: #A78BFA;

  /* Secondary Colors */
  --secondary: #06B6D4;      /* Cyan elettrico */
  --secondary-dark: #0891B2;

  /* Backgrounds */
  --bg-dark: #18181B;        /* Zinc dark */
  --bg-darker: #09090B;      /* Almost black */
  --bg-card: #27272A;        /* Card elevated */
  --bg-light: #FAFAFA;       /* Light mode */

  /* Text */
  --text-primary: #FAFAFA;   /* Light on dark */
  --text-secondary: #A1A1AA; /* Muted */
  --text-dark: #18181B;      /* Dark on light */

  /* Accent */
  --accent-pink: #EC4899;    /* Live/trending */
  --accent-green: #22C55E;   /* Playing now */

  /* Typography */
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Lato', sans-serif;
}

/* Reset Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-body);
  background-color: var(--bg-dark);
  color: var(--text-primary);
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 700;
}

/* Test Visivo */
h1 {
  color: var(--primary);
  font-size: 48px;
}

p {
  color: var(--text-secondary);
}`}
            />
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
            <h3 className="font-bold text-blue-900 mb-3">💡 Cosa Abbiamo Fatto?</h3>
            <ul className="space-y-2">
              <li>✅ <strong>Importato font Google</strong> - Il browser scarica i font automaticamente</li>
              <li>✅ <strong>Definito custom properties</strong> in <code className="bg-blue-100 px-2 py-1 rounded">:root</code> - Come variabili CSS riutilizzabili</li>
              <li>✅ <strong>Reset CSS</strong> - Toglie margin/padding default per controllo totale</li>
              <li>✅ <strong>Stili base body</strong> - Font, colori, line-height</li>
            </ul>
            <p className="mt-3 font-semibold text-blue-800">
              Ora possiamo usare <code className="bg-blue-100 px-2 py-1 rounded">var(--primary)</code> ovunque nel CSS invece di scrivere <code className="bg-blue-100 px-2 py-1 rounded">#6366F1</code>!
            </p>
          </div>
        </div>

        <div className="bg-green-100 border-2 border-green-400 p-6 rounded-lg">
          <h3 className="font-bold text-green-900 mb-3 text-xl">✅ Test Finale</h3>
          <ol className="space-y-2 list-decimal list-inside">
            <li>Salva <strong>index.html</strong> e <strong>css/style.css</strong> (Ctrl+S su entrambi)</li>
            <li>Ricarica il browser (F5)</li>
            <li>Dovresti vedere il titolo &quot;Progetto Partito!&quot; con il <strong>colore primario del tuo tema</strong></li>
            <li>Il font dovrebbe essere cambiato (più moderno)</li>
          </ol>
          <p className="mt-4 font-semibold text-green-800">
            🎉 Se vedi tutto corretto, il setup è COMPLETO!
          </p>
        </div>
      </section>

      {/* Conclusione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">🎯 Recap Lezione 1</h2>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Cosa Hai Imparato Oggi</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex gap-3">
              <span>✅</span>
              <span>Il <strong>processo di design</strong> professionale (wireframe → palette → setup → codice)</span>
            </li>
            <li className="flex gap-3">
              <span>✅</span>
              <span>Come <strong>scegliere un tema</strong> coerente (colori + font + contenuti)</span>
            </li>
            <li className="flex gap-3">
              <span>✅</span>
              <span>Creare <strong>wireframe</strong> per visualizzare la struttura</span>
            </li>
            <li className="flex gap-3">
              <span>✅</span>
              <span>Setup <strong>professionale</strong> di un progetto (cartelle + file)</span>
            </li>
            <li className="flex gap-3">
              <span>✅</span>
              <span>Usare <strong>CSS Custom Properties</strong> per gestire colori e font</span>
            </li>
          </ul>

          <div className="mt-6 bg-white bg-opacity-20 p-4 rounded">
            <p className="font-bold text-yellow-200 mb-2">🚀 Prossima Lezione:</p>
            <p className="text-lg">
              Costruiremo la <strong>Navbar</strong> e il <strong>Hero Section</strong> - le due sezioni più importanti!
            </p>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <Checklist
        items={[
          'Ho scelto il mio tema tra GameVerse, TasteHub, BeatStream',
          'Ho disegnato il wireframe su carta con tutte le 6 sezioni',
          'Ho creato la cartella "landing-page-progetto" sul Desktop',
          'Ho creato index.html, css/, css/style.css, images/',
          'Ho scritto la struttura HTML base con <head> completo',
          'Ho copiato il CSS del MIO tema in style.css',
          'Ho testato nel browser: il titolo ha il colore giusto',
          'Ho testato nel browser: il font è cambiato',
          'Capisco cos\'è un wireframe e perché è importante',
          'Capisco cosa sono le CSS Custom Properties (variabili)'
        ]}
      />
    </LessonLayout>
  );
}
