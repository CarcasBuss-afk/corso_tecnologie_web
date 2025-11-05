'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeExampleProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[]; // Righe da evidenziare (1-based)
}

export default function CodeExample({
  code,
  language = 'html',
  title,
  showLineNumbers = true,
  highlightLines = []
}: CodeExampleProps) {
  // Impedisce la copia del codice
  const handleCopy = (e: React.ClipboardEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="my-6 rounded-lg overflow-hidden border border-gray-700 select-none"
      onCopy={handleCopy}
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
      }}
    >
      {title && (
        <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300 font-semibold">
          {title}
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        wrapLines={highlightLines.length > 0}
        lineProps={(lineNumber) => {
          const isHighlighted = highlightLines.includes(lineNumber);
          return {
            style: {
              backgroundColor: isHighlighted ? 'rgba(34, 197, 94, 0.15)' : 'transparent',
              display: 'block',
              width: '100%',
            }
          };
        }}
        customStyle={{
          margin: 0,
          padding: '1rem',
          fontSize: '0.9rem',
          userSelect: 'none',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
