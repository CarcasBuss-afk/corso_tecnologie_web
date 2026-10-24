'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface HeaderLezione {
  id: string;
  titolo: string;
  slug: string;
}

interface HeaderProps {
  // Lezioni del modulo: su mobile compaiono nel menu hamburger al posto della sidebar
  moduloSlug?: string;
  moduloTitolo?: string;
  lezioni?: HeaderLezione[];
}

export default function Header({ moduloSlug, moduloTitolo, lezioni }: HeaderProps) {
  const pathname = usePathname();
  const [menuAperto, setMenuAperto] = useState(false);

  // Chiude il menu quando si cambia pagina
  useEffect(() => {
    setMenuAperto(false);
  }, [pathname]);

  // Blocca lo scroll della pagina sotto il menu aperto
  useEffect(() => {
    document.body.style.overflow = menuAperto ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuAperto]);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/manuale" className="text-2xl font-bold hover:opacity-80 transition">
            🌐 Corso Web
          </Link>

          {/* Desktop: link sempre visibili */}
          <nav className="hidden lg:flex gap-6">
            <Link href="/manuale" className="hover:underline">
              Home
            </Link>
            <Link href="/moduli" className="hover:underline">
              Moduli
            </Link>
            <Link href="/officina" className="hover:underline">
              🔧 Officina
            </Link>
          </nav>

          {/* Mobile: pulsante hamburger */}
          <button
            type="button"
            onClick={() => setMenuAperto(!menuAperto)}
            className="lg:hidden p-2 -mr-2 rounded hover:bg-white/10 transition"
            aria-label={menuAperto ? 'Chiudi il menu' : 'Apri il menu'}
            aria-expanded={menuAperto}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuAperto ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile: pannello del menu */}
      {menuAperto && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuAperto(false)}
            aria-hidden="true"
          />
          <nav className="relative bg-white text-gray-900 max-h-full overflow-y-auto shadow-xl">
            <div className="flex flex-col p-4 border-b border-gray-200">
              <Link href="/manuale" className="px-3 py-3 rounded font-semibold hover:bg-gray-100">
                🏠 Home
              </Link>
              <Link href="/moduli" className="px-3 py-3 rounded font-semibold hover:bg-gray-100">
                📚 Moduli
              </Link>
              <Link href="/officina" className="px-3 py-3 rounded font-semibold hover:bg-gray-100">
                🔧 Officina
              </Link>
            </div>

            {moduloSlug && lezioni && lezioni.length > 0 && (
              <div className="p-4">
                <h2 className="px-3 mb-2 text-sm font-bold text-gray-500 uppercase">{moduloTitolo}</h2>
                <ul className="space-y-1">
                  {lezioni.map((lezione, index) => {
                    const lezioneUrl = `/moduli/${moduloSlug}/${lezione.slug}`;
                    const isActive = pathname === lezioneUrl;

                    return (
                      <li key={lezione.id}>
                        <Link
                          href={lezioneUrl}
                          className={`block px-3 py-3 rounded text-sm transition ${
                            isActive
                              ? 'bg-blue-500 text-white font-semibold'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span className="text-xs mr-2">{index + 1}.</span>
                          {lezione.titolo}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
