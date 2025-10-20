'use client';

import { useState } from 'react';

interface ChallengeProps {
  title: string;
  description: string;
  requirements: string[];
  hint?: string;
}

export default function Challenge({ title, description, requirements, hint }: ChallengeProps) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="my-8 p-6 bg-purple-50 border-2 border-purple-300 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">🎯</span>
        <h3 className="text-xl font-bold text-purple-900">{title}</h3>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>

      <div className="mb-4">
        <p className="font-semibold text-purple-900 mb-2">Requisiti:</p>
        <ul className="space-y-2">
          {requirements.map((req, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-purple-500">□</span>
              <span className="text-gray-700">{req}</span>
            </li>
          ))}
        </ul>
      </div>

      {hint && (
        <div className="mt-4">
          <button
            onClick={() => setShowHint(!showHint)}
            className="text-purple-700 hover:text-purple-900 font-semibold text-sm underline"
          >
            {showHint ? '🙈 Nascondi suggerimento' : '💡 Mostra suggerimento'}
          </button>
          {showHint && (
            <div className="mt-3 p-4 bg-purple-100 rounded border border-purple-200">
              <p className="text-sm text-gray-700">{hint}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
