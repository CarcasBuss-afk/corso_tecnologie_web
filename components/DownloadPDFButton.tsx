"use client";

import { Printer } from "lucide-react";
import { useState } from "react";

interface DownloadPDFButtonProps {
  moduloSlug: string;
  lezioneSlug: string;
  lezioneTitolo: string;
}

export default function DownloadPDFButton({
  moduloSlug,
  lezioneSlug,
  lezioneTitolo,
}: DownloadPDFButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handlePrint = () => {
    // Imposta il titolo della pagina per il nome del file PDF
    const originalTitle = document.title;
    document.title = `${lezioneTitolo} - ${lezioneSlug}`;

    // Apre la finestra di stampa del browser
    window.print();

    // Ripristina il titolo originale
    document.title = originalTitle;
  };

  return (
    <div className="relative">
      <button
        onClick={handlePrint}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm
          bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg
          transition-all duration-200 print:hidden whitespace-nowrap"
        aria-label={`Stampa o salva ${lezioneTitolo} come PDF`}
      >
        <Printer className="w-4 h-4" />
        <span>Salva PDF</span>
      </button>

      {/* Tooltip con suggerimento */}
      {showTooltip && (
        <div className="absolute top-full right-0 mt-2 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl z-20 print:hidden">
          <p className="mb-1 font-medium">💡 Suggerimento:</p>
          <p>
            Nella finestra di stampa, seleziona "Salva come PDF" e attiva
            "Grafica di sfondo" per mantenere tutti i colori.
          </p>
          <div className="absolute -top-1 right-4 w-2 h-2 bg-gray-900 transform rotate-45"></div>
        </div>
      )}
    </div>
  );
}
