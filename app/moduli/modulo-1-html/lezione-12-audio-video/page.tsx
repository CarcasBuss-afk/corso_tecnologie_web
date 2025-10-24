import LessonLayout from '@/components/layout/LessonLayout';
import LessonHeader from '@/components/layout/LessonHeader';
import CodeExample from '@/components/didattica/CodeExample';
import LessonPreview from '@/components/didattica/LessonPreview';
import Exercise from '@/components/didattica/Exercise';
import Challenge from '@/components/didattica/Challenge';
import Checklist from '@/components/didattica/Checklist';
import { getLezioniByModuloSlug } from '@/lib/moduli';

export default function Lezione12Page() {
  const lezioni = getLezioniByModuloSlug('modulo-1-html');

  return (
    <LessonLayout
      moduloSlug="modulo-1-html"
      moduloTitolo="Modulo 1: HTML - Le Fondamenta del Web"
      lezioni={lezioni}
      lezioneSlug="lezione-12-audio-video"
      lezioneTitolo="Audio e Video"
    >
      <LessonHeader
        numero={12}
        titolo="Audio e Video"
        durata="1 ora"
        difficolta="facile"
        obiettivi={[
          'Inserire file audio con il tag <audio>',
          'Aggiungere video con il tag <video>',
          'Usare <source> per formati multipli',
          'Incorporare video da YouTube e Vimeo',
          'Aggiungere sottotitoli con <track>',
          'Conoscere i controlli e gli attributi multimediali',
        ]}
      />

      {/* Introduzione */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          🎵 Portare Audio e Video sul Web
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Fino a pochi anni fa, per aggiungere audio e video a una pagina web servivano plugin esterni come Flash Player.
          Oggi, grazie a HTML5, puoi incorporare contenuti multimediali direttamente nel codice HTML con due tag speciali:
          <code className="bg-gray-100 px-2 py-1 rounded mx-1">&lt;audio&gt;</code> e
          <code className="bg-gray-100 px-2 py-1 rounded mx-1">&lt;video&gt;</code>!
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          In questa lezione imparerai a inserire musica, podcast, filmati e video da piattaforme come YouTube.
          Preparati a rendere il tuo sito molto più dinamico! 🎬
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-blue-900">💡 Perché i Media sul Web?</h3>
          <ul className="space-y-2 text-gray-800">
            <li className="flex items-start">
              <span className="text-2xl mr-3">🎓</span>
              <span><strong>Educazione:</strong> Tutorial video, corsi online, lezioni registrate</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">🎮</span>
              <span><strong>Intrattenimento:</strong> Podcast, musica, trailer, gameplay</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">📢</span>
              <span><strong>Marketing:</strong> Presentazioni prodotti, testimonianze clienti</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">🎨</span>
              <span><strong>Portfolio:</strong> Showreel, demo progetti, video esplicativi</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Tag Audio */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          🔊 Tag <code className="bg-gray-100 px-2 py-1 rounded">&lt;audio&gt;</code> - Suoni e Musica
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Il tag <code className="bg-gray-100 px-2 py-1 rounded">&lt;audio&gt;</code> serve per inserire file audio
          come musica, podcast, effetti sonori. Il browser crea automaticamente un player con play, pausa e volume!
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 border-2 border-green-500 p-4 rounded-lg text-center">
            <div className="text-4xl mb-2">▶️</div>
            <h3 className="text-lg font-bold mb-2 text-green-900">controls</h3>
            <p className="text-gray-700 text-sm">Mostra pulsanti play/pausa/volume</p>
          </div>
          <div className="bg-purple-50 border-2 border-purple-500 p-4 rounded-lg text-center">
            <div className="text-4xl mb-2">🔁</div>
            <h3 className="text-lg font-bold mb-2 text-purple-900">loop</h3>
            <p className="text-gray-700 text-sm">Ripete l'audio in continuazione</p>
          </div>
          <div className="bg-orange-50 border-2 border-orange-500 p-4 rounded-lg text-center">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="text-lg font-bold mb-2 text-orange-900">autoplay</h3>
            <p className="text-gray-700 text-sm">Parte automaticamente (sconsigliato!)</p>
          </div>
        </div>

        <CodeExample
          language="html"
          title="Audio Base con Controls"
          code={`<!-- Audio semplice con controlli -->
<audio controls>
  <source src="musica.mp3" type="audio/mpeg">
  <source src="musica.ogg" type="audio/ogg">
  Il tuo browser non supporta l'audio HTML5.
</audio>

<!-- Audio con più attributi -->
<audio controls loop>
  <source src="podcast.mp3" type="audio/mpeg">
</audio>

<!-- Audio senza controlli (per effetti sonori con JavaScript) -->
<audio id="effetto-suono">
  <source src="click.mp3" type="audio/mpeg">
</audio>`}
        />

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mt-6 mb-6">
          <h3 className="text-xl font-bold mb-3 text-yellow-900">⚠️ Autoplay: Perché Evitarlo?</h3>
          <p className="text-gray-800">
            L'attributo <code className="bg-white px-2 py-1 rounded">autoplay</code> fa partire l'audio automaticamente
            quando la pagina si carica. <strong>Evitalo!</strong> Gli utenti lo odiano e molti browser lo bloccano.
            Immagina di aprire un sito in biblioteca e parte musica a palla! 😱
          </p>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-gray-800">Formati Audio Comuni</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border-2 border-gray-300 p-4 rounded-lg">
            <h4 className="font-bold text-lg mb-2">🎵 MP3</h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Più usato</strong></p>
            <p className="text-sm text-gray-600">Compatibile con tutti i browser. File compressi, buona qualità.</p>
          </div>
          <div className="bg-white border-2 border-gray-300 p-4 rounded-lg">
            <h4 className="font-bold text-lg mb-2">🎧 OGG</h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Open source</strong></p>
            <p className="text-sm text-gray-600">Ottima qualità, supporto Firefox/Chrome. Non su Safari.</p>
          </div>
          <div className="bg-white border-2 border-gray-300 p-4 rounded-lg">
            <h4 className="font-bold text-lg mb-2">🍎 WAV</h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Non compresso</strong></p>
            <p className="text-sm text-gray-600">Qualità massima ma file enormi. Usalo solo per audio brevi.</p>
          </div>
        </div>

        <LessonPreview
          title="Esempio Audio Player"
          description="Ecco come appare un player audio HTML5. I controlli cambiano in base al browser!"
          html={`<div style="padding: 20px; background: #f9fafb; border-radius: 8px;">
  <h4 style="margin-bottom: 10px; color: #1f2937;">🎵 Esempio Audio Player</h4>
  <p style="font-size: 14px; color: #6b7280; margin-bottom: 10px;">
    Nota: in questa demo non c'è un file audio reale, ma il player viene mostrato.
    Nella tua pagina, sostituisci "musica.mp3" con il percorso del tuo file audio!
  </p>
  <audio controls style="width: 100%; max-width: 500px;">
    <source src="musica.mp3" type="audio/mpeg">
    Il tuo browser non supporta l'audio HTML5.
  </audio>
</div>`}
        />
      </section>

      {/* Tag Video */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          🎬 Tag <code className="bg-gray-100 px-2 py-1 rounded">&lt;video&gt;</code> - Filmati e Clip
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Il tag <code className="bg-gray-100 px-2 py-1 rounded">&lt;video&gt;</code> funziona come
          <code className="bg-gray-100 px-2 py-1 rounded">&lt;audio&gt;</code>, ma per i video!
          Puoi controllare dimensioni, poster (immagine anteprima) e molto altro.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-blue-900">📐 width e height</h3>
            <p className="text-gray-800 mb-2">Imposta le dimensioni del video</p>
            <code className="bg-white px-2 py-1 rounded text-sm">width="640" height="360"</code>
          </div>
          <div className="bg-purple-50 border-2 border-purple-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-purple-900">🖼️ poster</h3>
            <p className="text-gray-800 mb-2">Immagine mostrata prima del play</p>
            <code className="bg-white px-2 py-1 rounded text-sm">poster="anteprima.jpg"</code>
          </div>
        </div>

        <CodeExample
          language="html"
          title="Video Base con Controls"
          code={`<!-- Video semplice -->
<video width="640" height="360" controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Il tuo browser non supporta il video HTML5.
</video>

<!-- Video con poster e autoplay muted -->
<video
  width="800"
  height="450"
  controls
  poster="anteprima.jpg"
  preload="metadata"
>
  <source src="presentazione.mp4" type="video/mp4">
</video>

<!-- Video che si ripete in loop (per sfondi) -->
<video width="100%" autoplay loop muted>
  <source src="sfondo.mp4" type="video/mp4">
</video>`}
        />

        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mt-6 mb-6">
          <h3 className="text-xl font-bold mb-3 text-green-900">🎯 Trucco: Autoplay con Muted</h3>
          <p className="text-gray-800">
            I browser bloccano <code className="bg-white px-2 py-1 rounded">autoplay</code> con audio,
            ma lo permettono se aggiungi <code className="bg-white px-2 py-1 rounded">muted</code> (senza audio).
            Perfetto per video di sfondo o animazioni decorative!
          </p>
        </div>

        <h3 className="text-2xl font-bold mb-4 text-gray-800">Formati Video Comuni</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border-2 border-gray-300 p-4 rounded-lg">
            <h4 className="font-bold text-lg mb-2">🎥 MP4</h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Più usato</strong></p>
            <p className="text-sm text-gray-600">Compatibile ovunque. Codec H.264. File compressi e di qualità.</p>
          </div>
          <div className="bg-white border-2 border-gray-300 p-4 rounded-lg">
            <h4 className="font-bold text-lg mb-2">🌐 WebM</h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Open source</strong></p>
            <p className="text-sm text-gray-600">Ottima compressione. Supporto Chrome/Firefox. Non su Safari.</p>
          </div>
          <div className="bg-white border-2 border-gray-300 p-4 rounded-lg">
            <h4 className="font-bold text-lg mb-2">🎞️ OGG</h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Alternativa</strong></p>
            <p className="text-sm text-gray-600">Meno usato oggi. Supporto limitato. Preferisci MP4 o WebM.</p>
          </div>
        </div>

        <LessonPreview
          title="Esempio Video Player"
          description="Ecco come appare un video player HTML5 con poster e controlli!"
          html={`<div style="padding: 20px; background: #f9fafb; border-radius: 8px;">
  <h4 style="margin-bottom: 10px; color: #1f2937;">🎬 Esempio Video Player</h4>
  <p style="font-size: 14px; color: #6b7280; margin-bottom: 10px;">
    In questa demo non c'è un video reale, ma vedi il player con controlli.
    Puoi aggiungere poster="immagine.jpg" per mostrare un'anteprima!
  </p>
  <video width="100%" height="300" controls style="max-width: 640px; background: #000; border-radius: 8px;">
    <source src="video.mp4" type="video/mp4">
    Il tuo browser non supporta il video HTML5.
  </video>
</div>`}
        />
      </section>

      {/* Source Tag */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          📂 Tag <code className="bg-gray-100 px-2 py-1 rounded">&lt;source&gt;</code> - Formati Multipli
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Non tutti i browser supportano gli stessi formati. Il tag <code className="bg-gray-100 px-2 py-1 rounded">&lt;source&gt;</code>
          ti permette di fornire più versioni dello stesso file. Il browser sceglie automaticamente quello che funziona!
        </p>

        <CodeExample
          language="html"
          title="Source - Fallback per Compatibilità"
          code={`<!-- Audio con fallback -->
<audio controls>
  <source src="podcast.mp3" type="audio/mpeg">
  <source src="podcast.ogg" type="audio/ogg">
  <source src="podcast.wav" type="audio/wav">
  Il tuo browser non supporta l'audio.
</audio>

<!-- Video con fallback -->
<video width="640" height="360" controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <source src="video.ogv" type="video/ogg">
  <p>
    Il tuo browser non supporta il video HTML5.
    <a href="video.mp4">Scarica il video</a>
  </p>
</video>`}
        />

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mt-6">
          <h3 className="text-xl font-bold mb-3 text-blue-900">💡 Come Funziona?</h3>
          <p className="text-gray-800 mb-4">
            Il browser prova il primo <code className="bg-white px-2 py-1 rounded">&lt;source&gt;</code>.
            Se non funziona, passa al secondo, poi al terzo, ecc. Si ferma quando ne trova uno compatibile.
          </p>
          <p className="text-gray-800">
            <strong>Best practice:</strong> Metti prima il formato più comune (MP4 per video, MP3 per audio),
            poi i formati alternativi!
          </p>
        </div>
      </section>

      {/* Iframe YouTube/Vimeo */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          📺 Incorporare Video da YouTube e Vimeo
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Spesso è più facile caricare video su YouTube o Vimeo e incorporarli nel sito usando
          <code className="bg-gray-100 px-2 py-1 rounded mx-1">&lt;iframe&gt;</code>.
          Risparmia banda, hai player avanzati e statistiche gratuite!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 border-2 border-red-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-red-900">▶️ YouTube</h3>
            <p className="text-gray-800 mb-3">Vai sul video → Condividi → Incorpora → Copia codice iframe</p>
            <p className="text-sm text-gray-600">Formato URL: youtube.com/embed/VIDEO_ID</p>
          </div>
          <div className="bg-blue-50 border-2 border-blue-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-blue-900">🎬 Vimeo</h3>
            <p className="text-gray-800 mb-3">Sul video → Condividi → Mostra opzioni → Copia codice embed</p>
            <p className="text-sm text-gray-600">Formato URL: player.vimeo.com/video/VIDEO_ID</p>
          </div>
        </div>

        <CodeExample
          language="html"
          title="Iframe YouTube e Vimeo"
          code={`<!-- Video YouTube -->
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>

<!-- Video Vimeo -->
<iframe
  src="https://player.vimeo.com/video/123456789"
  width="640"
  height="360"
  frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen
></iframe>

<!-- Responsive: video che si adatta allo schermo -->
<div style="position: relative; padding-bottom: 56.25%; height: 0;">
  <iframe
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
    frameborder="0"
    allowfullscreen
  ></iframe>
</div>`}
        />

        <LessonPreview
          title="Esempio Iframe YouTube"
          description="Ecco come appare un video di YouTube incorporato nella tua pagina!"
          html={`<div style="padding: 20px; background: #f9fafb; border-radius: 8px;">
  <h4 style="margin-bottom: 10px; color: #1f2937;">📺 Video YouTube Incorporato</h4>
  <div style="position: relative; padding-bottom: 56.25%; height: 0; max-width: 640px;">
    <iframe
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 8px;"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <p style="font-size: 14px; color: #6b7280; margin-top: 10px;">
    Il video è completamente funzionante! Prova a cliccare play.
  </p>
</div>`}
        />
      </section>

      {/* Track - Sottotitoli */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          💬 Tag <code className="bg-gray-100 px-2 py-1 rounded">&lt;track&gt;</code> - Sottotitoli e Accessibilità
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Il tag <code className="bg-gray-100 px-2 py-1 rounded">&lt;track&gt;</code> aggiunge sottotitoli,
          trascrizioni o descrizioni audio ai video. Fondamentale per l'accessibilità (persone sorde o straniere)!
        </p>

        <CodeExample
          language="html"
          title="Track - Sottotitoli WebVTT"
          code={`<!-- Video con sottotitoli in italiano e inglese -->
<video width="640" height="360" controls>
  <source src="lezione.mp4" type="video/mp4">

  <!-- Sottotitoli italiano (default) -->
  <track
    kind="subtitles"
    src="sottotitoli-it.vtt"
    srclang="it"
    label="Italiano"
    default
  >

  <!-- Sottotitoli inglese -->
  <track
    kind="subtitles"
    src="subtitles-en.vtt"
    srclang="en"
    label="English"
  >

  <!-- Descrizione audio per non vedenti -->
  <track
    kind="descriptions"
    src="descrizione-it.vtt"
    srclang="it"
    label="Descrizione Audio"
  >
</video>`}
        />

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg mt-6 mb-6">
          <h3 className="text-xl font-bold mb-3 text-purple-900">📝 Formato WebVTT</h3>
          <p className="text-gray-800 mb-4">
            I file sottotitoli usano il formato <strong>WebVTT</strong> (Web Video Text Tracks), con estensione
            <code className="bg-white px-2 py-1 rounded mx-1">.vtt</code>.
          </p>
          <div className="bg-white p-4 rounded border border-purple-300">
            <pre className="text-sm overflow-x-auto"><code>{`WEBVTT

00:00:00.000 --> 00:00:05.000
Benvenuti a questa lezione su HTML!

00:00:05.500 --> 00:00:10.000
Oggi impareremo i tag audio e video.

00:00:10.500 --> 00:00:15.000
Iniziamo con il tag <audio>...`}</code></pre>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white border-2 border-gray-300 p-4 rounded-lg">
            <h4 className="font-bold text-lg mb-2">💬 subtitles</h4>
            <p className="text-sm text-gray-700">Sottotitoli/traduzione del dialogo</p>
          </div>
          <div className="bg-white border-2 border-gray-300 p-4 rounded-lg">
            <h4 className="font-bold text-lg mb-2">📖 captions</h4>
            <p className="text-sm text-gray-700">Trascrizione completa (include effetti sonori)</p>
          </div>
          <div className="bg-white border-2 border-gray-300 p-4 rounded-lg">
            <h4 className="font-bold text-lg mb-2">🔊 descriptions</h4>
            <p className="text-sm text-gray-700">Descrizione audio per non vedenti</p>
          </div>
        </div>
      </section>

      {/* Attributi Utili */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          ⚙️ Attributi Utili per Audio e Video
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-2 border-gray-300">
            <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <tr>
                <th className="border border-gray-300 px-4 py-3 text-left">Attributo</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Cosa Fa</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Valore</th>
                <th className="border border-gray-300 px-4 py-3 text-left">Esempio</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-mono text-sm">controls</td>
                <td className="border border-gray-300 px-4 py-3">Mostra controlli play/pausa/volume</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">Booleano</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-xs">controls</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-mono text-sm">autoplay</td>
                <td className="border border-gray-300 px-4 py-3">Avvia automaticamente (sconsigliato)</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">Booleano</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-xs">autoplay</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-mono text-sm">loop</td>
                <td className="border border-gray-300 px-4 py-3">Ripete in continuazione</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">Booleano</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-xs">loop</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-mono text-sm">muted</td>
                <td className="border border-gray-300 px-4 py-3">Inizia senza audio</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">Booleano</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-xs">muted</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-mono text-sm">preload</td>
                <td className="border border-gray-300 px-4 py-3">Quando caricare il file</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">none, metadata, auto</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-xs">preload="metadata"</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-mono text-sm">poster</td>
                <td className="border border-gray-300 px-4 py-3">Immagine anteprima (solo video)</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">URL</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-xs">poster="img.jpg"</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-mono text-sm">width / height</td>
                <td className="border border-gray-300 px-4 py-3">Dimensioni in pixel (solo video)</td>
                <td className="border border-gray-300 px-4 py-3 text-sm">Numero</td>
                <td className="border border-gray-300 px-4 py-3 font-mono text-xs">width="640"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Esercizio */}
      <Exercise
        title="Pagina Portfolio Multimediale"
        steps={[
          'Crea un file "portfolio-media.html"',
          'Aggiungi la struttura HTML base',
          'Titolo H1: "Il Mio Portfolio Multimediale"',
          'Sezione 1 - Audio: Aggiungi un tag <audio> con controls per una tua playlist/podcast',
          'Usa almeno 2 formati (<source> con MP3 e OGG) per compatibilità',
          'Sezione 2 - Video Locale: Aggiungi un tag <video> con width="640" height="360" e controls',
          'Aggiungi poster="anteprima.jpg" al video',
          'Usa 2 formati video (MP4 e WebM)',
          'Sezione 3 - Video YouTube: Incorpora un tuo video preferito da YouTube con <iframe>',
          'Rendi l\'iframe responsive usando il trucco padding-bottom: 56.25%',
          'BONUS: Aggiungi un file di sottotitoli .vtt al video locale con <track>',
          'BONUS: Crea un video background muted loop autoplay per la hero section',
          'Testa che tutti i player funzionino correttamente',
        ]}
      />

      {/* Challenge */}
      <Challenge
        title="Challenge: Piattaforma Video Educativa"
        description="Crea una pagina completa per una piattaforma di corsi online con video lezioni, audio podcast e trascrizioni accessibili."
        requirements={[
          'Header con logo e titolo del corso',
          'Sezione Hero con video background (muted, loop, autoplay)',
          'Griglia di 3 video lezioni con <video>, poster e controls',
          'Ogni video deve avere almeno 2 formati (MP4 e WebM)',
          'Almeno 1 video con sottotitoli in italiano (<track kind="subtitles">)',
          'Sezione Podcast: 2 file audio con <audio> e controls',
          'Sezione Video Esterni: Incorpora 2 video da YouTube o Vimeo con iframe responsive',
          'Usa dimensioni diverse per i video: piccoli (320x180), medi (640x360), grandi (1280x720)',
          'Aggiungi attributo preload="metadata" ai video per risparmiare banda',
          'BONUS: Crea file WebVTT con sottotitoli reali (almeno 3-4 righe)',
          'BONUS: Aggiungi <track kind="descriptions"> per descrizioni audio',
          'BONUS: Usa poster personalizzati per ogni video',
          'BONUS: Crea playlist audio con più tracce',
          'Assicurati che tutto funzioni su Chrome, Firefox e Safari',
        ]}
        hint="Per i file .vtt, crea un file di testo con estensione .vtt e usa il formato: WEBVTT seguito da timestamp e testo. Per iframe responsive, usa un div contenitore con position: relative e padding-bottom: 56.25% (rapporto 16:9). Per testare i sottotitoli, attiva i CC nel player video. Ricorda che autoplay funziona solo con muted!"
      />

      {/* Checklist */}
      <Checklist
        items={[
          'So usare <audio> per inserire file audio con controls',
          'So usare <video> per inserire video con dimensioni e poster',
          'Conosco i formati audio (MP3, OGG, WAV) e video (MP4, WebM, OGG)',
          'So usare <source> per fornire formati multipli',
          'Capisco perché evitare autoplay e quando usare muted',
          'So incorporare video YouTube/Vimeo con <iframe>',
          'So rendere iframe responsive con padding-bottom trick',
          'Conosco il tag <track> per sottotitoli e accessibilità',
          'So creare file WebVTT per sottotitoli base',
          'Capisco l\'importanza dell\'accessibilità per audio/video',
        ]}
      />

      {/* Box Finale */}
      <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">🎉 Sei Diventato un Regista del Web!</h2>
        <p className="text-xl mb-4">
          Ora sai aggiungere audio, video e sottotitoli alle tue pagine. Il tuo sito è pronto per contenuti multimediali
          professionali e accessibili a tutti! 🎬🎵
        </p>
        <p className="text-lg">
          Prossima lezione: <strong>Contenitori e Divisioni</strong> - Organizziamo il layout con div e span! 📦
        </p>
      </div>
    </LessonLayout>
  );
}
