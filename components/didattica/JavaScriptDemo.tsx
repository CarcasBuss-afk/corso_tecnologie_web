'use client';

import { useState } from 'react';

interface JavaScriptDemoProps {
  title: string;
  description?: string;
  code: string; // Codice HTML completo con <script>
  height?: string; // Altezza iframe, default 400px
}

export default function JavaScriptDemo({
  title,
  description,
  code,
  height = '400px'
}: JavaScriptDemoProps) {
  const [key, setKey] = useState(0);

  // Funzione per resettare l'iframe
  const resetDemo = () => {
    setKey(prevKey => prevKey + 1);
  };

  return (
    <div className="my-8 border-2 border-purple-300 rounded-lg overflow-hidden bg-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-bold mb-1">{title}</h4>
            {description && <p className="text-sm text-purple-100">{description}</p>}
          </div>
          <button
            onClick={resetDemo}
            className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-100 transition-colors text-sm"
          >
            🔄 Reset
          </button>
        </div>
      </div>

      {/* Iframe Demo */}
      <div className="bg-white p-4">
        <iframe
          key={key}
          srcDoc={code}
          style={{
            width: '100%',
            height: height,
            border: 'none',
            borderRadius: '4px',
            backgroundColor: 'white'
          }}
          sandbox="allow-scripts allow-modals"
          title={title}
        />
      </div>

      {/* Footer info */}
      <div className="bg-purple-100 px-4 py-2 text-sm text-purple-800 border-t border-purple-200">
        💡 <strong>Interattivo:</strong> Clicca i pulsanti per vedere JavaScript in azione! Usa "Reset" per ricominciare.
      </div>
    </div>
  );
}
