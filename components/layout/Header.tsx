import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold hover:opacity-80 transition">
            🌐 Corso Web
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/moduli" className="hover:underline">
              Moduli
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
