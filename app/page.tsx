import Link from 'next/link';
import Header from '@/components/layout/Header';

export default function Home() {
  const moduli = [
    {
      id: 1,
      titolo: 'HTML - Le Basi',
      slug: 'modulo-1-html',
      descrizione: 'Impara a creare la struttura delle pagine web',
      ore: 15,
      icona: '📄',
      colore: 'from-blue-500 to-blue-600',
      disponibile: true,
      primaLezione: 'lezione-1-primo-giorno',
    },
    {
      id: 2,
      titolo: 'CSS - Stile e Design',
      slug: 'modulo-2-css',
      descrizione: 'Dai vita e colore alle tue pagine',
      ore: 22,
      icona: '🎨',
      colore: 'from-purple-500 to-purple-600',
      disponibile: true,
      primaLezione: 'lezione-1-primo-stile',
    },
    {
      id: 3,
      titolo: 'Progetto Intermedio',
      slug: 'modulo-3-progetto-intermedio',
      descrizione: 'Crea il tuo primo sito completo',
      ore: 5,
      icona: '🚀',
      colore: 'from-green-500 to-green-600',
      disponibile: true,
      primaLezione: 'lezione-1-planning-setup',
    },
    {
      id: 4,
      titolo: 'JavaScript - Interattività',
      slug: 'modulo-4-javascript',
      descrizione: 'Rendi le tue pagine dinamiche e interattive',
      ore: 28,
      icona: '⚡',
      colore: 'from-yellow-500 to-yellow-600',
      disponibile: false,
    },
    {
      id: 5,
      titolo: 'Progetto Finale',
      slug: 'modulo-5-progetto-finale',
      descrizione: 'Realizza la tua web app completa',
      ore: 8,
      icona: '🏆',
      colore: 'from-red-500 to-red-600',
      disponibile: false,
    },
    {
      id: 6,
      titolo: 'Strumenti Moderni',
      slug: 'modulo-6-strumenti-moderni',
      descrizione: 'Git, GitHub e pubblicazione online',
      ore: 2,
      icona: '🛠️',
      colore: 'from-gray-500 to-gray-600',
      disponibile: false,
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Impara a Creare Siti Web!
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Un corso pratico per imparare HTML, CSS e JavaScript.
              Scrivi codice vero, vedi i risultati subito, diventa un web developer!
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#moduli"
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
              >
                Inizia Ora
              </a>
              <a
                href="#about"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
              >
                Scopri di Più
              </a>
            </div>
          </div>
        </div>

        <div id="about" className="py-16 px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Come Funziona
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">👀</div>
                <h3 className="text-xl font-semibold mb-2">Guarda gli Esempi</h3>
                <p className="text-gray-600">
                  Ogni lezione ha esempi di codice chiari con il risultato visivo
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">✍️</div>
                <h3 className="text-xl font-semibold mb-2">Scrivi il Codice</h3>
                <p className="text-gray-600">
                  Niente copia-incolla! Scrivi tutto a mano in VS Code per imparare davvero
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Fai le Sfide</h3>
                <p className="text-gray-600">
                  Metti alla prova quello che hai imparato con sfide pratiche
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="moduli" className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              I Moduli del Corso
            </h2>
            <p className="text-center text-gray-600 mb-12">
              80 ore totali - 6 moduli - Tanti progetti pratici
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moduli.map((modulo) => (
                <div
                  key={modulo.id}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all ${
                    modulo.disponibile
                      ? 'border-gray-200 hover:shadow-xl hover:scale-105 cursor-pointer'
                      : 'border-gray-200 opacity-60'
                  }`}
                >
                  <div className={`h-32 bg-gradient-to-r ${modulo.colore} flex items-center justify-center`}>
                    <span className="text-6xl">{modulo.icona}</span>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {modulo.titolo}
                      </h3>
                      <span className="text-sm text-gray-500">{modulo.ore}h</span>
                    </div>
                    <p className="text-gray-600 mb-4">{modulo.descrizione}</p>
                    {modulo.disponibile ? (
                      <Link
                        href={`/moduli/${modulo.slug}/${modulo.primaLezione}`}
                        className={`block text-center px-4 py-2 bg-gradient-to-r ${modulo.colore} text-white font-semibold rounded-lg hover:opacity-90 transition`}
                      >
                        Inizia il Modulo →
                      </Link>
                    ) : (
                      <div className="text-center px-4 py-2 bg-gray-200 text-gray-500 font-semibold rounded-lg">
                        Prossimamente
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-16 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto a Iniziare?</h2>
            <p className="text-xl mb-8 opacity-90">
              Inizia subito con il Modulo 1 e crea la tua prima pagina web!
            </p>
            <Link
              href="/moduli/modulo-1-html/lezione-1-primo-giorno"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Vai alla Prima Lezione 🚀
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
