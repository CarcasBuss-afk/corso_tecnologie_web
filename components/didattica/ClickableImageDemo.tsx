'use client';

export default function ClickableImageDemo() {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-2 border-orange-300 my-6">
      <h3 className="font-bold text-orange-900 mb-4 text-lg">🔗 Immagini cliccabili in azione!</h3>
      <p className="text-gray-700 mb-4 text-sm">
        Clicca su queste immagini e vedrai che funzionano come link:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg border-2 border-orange-300">
          <p className="text-xs text-gray-600 mb-3 font-mono">
            &lt;a href="#"&gt;&lt;img ... /&gt;&lt;/a&gt;
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert('Hai cliccato l\'immagine! 🎉\n\nÈ così che si fanno le gallery cliccabili.');
            }}
            className="block"
          >
            <img
              src="https://picsum.photos/seed/montagna/250/150"
              alt="Montagne innevate"
              className="mx-auto hover:opacity-80 hover:scale-105 transition-all cursor-pointer rounded"
            />
          </a>
          <p className="text-xs text-gray-500 mt-2 text-center">👆 Clicca la foto!</p>
        </div>

        <div className="bg-white p-4 rounded-lg border-2 border-orange-300">
          <p className="text-xs text-gray-600 mb-3 font-mono">
            &lt;a href="..." target="_blank"&gt;
          </p>
          <a href="https://picsum.photos" target="_blank" rel="noopener noreferrer" className="block">
            <img
              src="https://picsum.photos/seed/citta/250/150"
              alt="Città di notte"
              className="mx-auto hover:opacity-80 hover:scale-105 transition-all cursor-pointer rounded"
            />
          </a>
          <p className="text-xs text-gray-500 mt-2 text-center">👆 Apre sito esterno!</p>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-4">
        ✅ L'immagine è dentro un tag <code>&lt;a&gt;</code><br />
        ✅ Al passaggio del mouse (hover) l'opacità cambia per mostrare che è cliccabile
      </p>
    </div>
  );
}
