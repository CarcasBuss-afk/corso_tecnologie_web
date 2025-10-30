import { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import DownloadPDFButton from '../DownloadPDFButton';

interface LessonLayoutProps {
  children: ReactNode;
  moduloSlug: string;
  moduloTitolo: string;
  lezioni: Array<{
    id: string;
    titolo: string;
    slug: string;
  }>;
  lezioneSlug?: string;
  lezioneTitolo?: string;
}

export default function LessonLayout({
  children,
  moduloSlug,
  moduloTitolo,
  lezioni,
  lezioneSlug,
  lezioneTitolo,
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
        <main className="flex-1 p-8 max-w-4xl relative ml-64">
          {/* Pulsante PDF in alto a destra */}
          {lezioneSlug && lezioneTitolo && (
            <div className="absolute top-4 right-4 z-10">
              <DownloadPDFButton
                moduloSlug={moduloSlug}
                lezioneSlug={lezioneSlug}
                lezioneTitolo={lezioneTitolo}
              />
            </div>
          )}

          {children}
        </main>
      </div>
    </div>
  );
}
