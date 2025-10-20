'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeExampleProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export default function CodeExample({
  code,
  language = 'html',
  title,
  showLineNumbers = true
}: CodeExampleProps) {
  return (
    <div className="my-6 rounded-lg overflow-hidden border border-gray-700">
      {title && (
        <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300 font-semibold">
          {title}
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          padding: '1rem',
          fontSize: '0.9rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
