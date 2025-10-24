"use client";

import { Printer } from "lucide-react";

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
    <div className="flex flex-col gap-2">
      <button
        onClick={handlePrint}
        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium
          bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg
          transition-all duration-200 print:hidden"
        aria-label={`Stampa o salva ${lezioneTitolo} come PDF`}
      >
        <Printer className="w-5 h-5" />
        <span>Stampa / Salva PDF</span>
      </button>

      <p className="text-sm text-gray-600 print:hidden">
        💡 Suggerimento: Nella finestra di stampa, seleziona "Salva come PDF" come destinazione
        e assicurati che l'opzione "Grafica di sfondo" sia attivata per mantenere tutti i colori.
      </p>
    </div>
  );
}
