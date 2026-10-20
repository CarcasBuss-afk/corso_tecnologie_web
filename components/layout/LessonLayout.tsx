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
      <Header moduloSlug={moduloSlug} moduloTitolo={moduloTitolo} lezioni={lezioni} />
      <div className="flex flex-1">
        <Sidebar
          moduloSlug={moduloSlug}
          moduloTitolo={moduloTitolo}
          lezioni={lezioni}
        />
        <main className="flex-1 min-w-0 p-4 lg:p-8 max-w-4xl relative lg:ml-64">
          {/* Pulsante PDF in alto a destra */}
          {lezioneSlug && lezioneTitolo && (
            <div className="flex justify-end mb-4 lg:mb-0 lg:absolute lg:top-4 lg:right-4 z-10">
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
