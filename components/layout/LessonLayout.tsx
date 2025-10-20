import { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface LessonLayoutProps {
  children: ReactNode;
  moduloSlug: string;
  moduloTitolo: string;
  lezioni: Array<{
    id: string;
    titolo: string;
    slug: string;
  }>;
}

export default function LessonLayout({
  children,
  moduloSlug,
  moduloTitolo,
  lezioni,
}: LessonLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar
          moduloSlug={moduloSlug}
          moduloTitolo={moduloTitolo}
          lezioni={lezioni}
        />
        <main className="flex-1 p-8 max-w-4xl">
          {children}
        </main>
      </div>
    </div>
  );
}
