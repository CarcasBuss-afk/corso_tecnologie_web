import Image from 'next/image';
import Link from 'next/link';

export default function Frontespizio() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Loghi istituzionali */}
      <div className="px-4 pt-6 md:pt-10">
        <Image
          src="/loghi/loghi-istituzionali.png"
          alt="Coesione Italia 21-27 Piemonte, Cofinanziato dall'Unione europea, Repubblica Italiana, Regione Piemonte"
          width={1388}
          height={119}
          priority
          className="w-full max-w-5xl h-auto mx-auto"
        />
      </div>

      {/* Titolo */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-12">
        <Image
          src="/loghi/ciac.jpg"
          alt="CIAC"
          width={121}
          height={121}
          className="w-20 h-20 md:w-24 md:h-24 rounded mb-8"
        />

        <p className="text-sm md:text-base font-semibold tracking-widest text-gray-500 uppercase mb-4">
          Manuale del corso
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          Tecnologie Web
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-10">
          HTML, CSS e JavaScript
        </p>

        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded mb-10" />

        <p className="text-gray-500 mb-1">A cura di</p>
        <p className="text-2xl font-semibold text-gray-900 mb-12">Fabio Regnaud</p>

        <Link
          href="/manuale"
          className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
        >
          Entra nel Manuale →
        </Link>
      </div>
    </main>
  );
}
