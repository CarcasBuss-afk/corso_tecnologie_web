'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarLezione {
  id: string;
  titolo: string;
  slug: string;
}

interface SidebarProps {
  moduloSlug: string;
  moduloTitolo: string;
  lezioni: SidebarLezione[];
}

export default function Sidebar({ moduloSlug, moduloTitolo, lezioni }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-50 border-r border-gray-200 h-screen sticky top-0 flex flex-col">
      {/* Header fisso - sempre visibile */}
      <div className="p-6 flex-shrink-0 border-b border-gray-200">
        <Link href="/" className="text-sm text-blue-600 hover:underline mb-4 block">
          ← Tutti i moduli
        </Link>

        <h2 className="text-lg font-bold text-gray-900">{moduloTitolo}</h2>
      </div>

      {/* Nav scrollabile - solo questa parte scorre */}
      <nav className="flex-1 overflow-y-auto px-6 py-4">
        <ul className="space-y-2">
          {lezioni.map((lezione, index) => {
            const lezioneUrl = `/moduli/${moduloSlug}/${lezione.slug}`;
            const isActive = pathname === lezioneUrl;

            return (
              <li key={lezione.id}>
                <Link
                  href={lezioneUrl}
                  className={`block px-3 py-2 rounded text-sm transition ${
                    isActive
                      ? 'bg-blue-500 text-white font-semibold'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="text-xs mr-2">{index + 1}.</span>
                  {lezione.titolo}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
