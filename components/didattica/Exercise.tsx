'use client';

import CodeExample from './CodeExample';

// Step può essere una stringa semplice (retrocompatibilità) o un oggetto con codice
export interface ExerciseStep {
  text?: string;
  title?: string; // Alias per text (nuovo formato)
  code?: string | {
    code: string;
    language: string;
    highlightLines?: number[];
  };
  language?: string;
  highlightLines?: number[]; // Righe da evidenziare (1-based)
}

interface ExerciseProps {
  title: string;
  steps: (string | ExerciseStep)[]; // Supporta sia stringhe che oggetti
  experiments?: string[]; // Esperimenti da provare (obbligatorio pedagogicamente)
  difficulty?: 'facile' | 'media' | 'difficile';
}

export default function Exercise({
  title,
  steps,
  experiments = [],
  difficulty = 'facile'
}: ExerciseProps) {
  const difficultyColors = {
    facile: 'bg-green-100 text-green-800 border-green-300',
    media: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    difficile: 'bg-red-100 text-red-800 border-red-300',
  };

  const difficultyLabels = {
    facile: 'Facile',
    media: 'Media',
    difficile: 'Difficile',
  };

  // Normalizza gli step: converte stringhe in oggetti
  const normalizedSteps = steps.map(step => {
    if (typeof step === 'string') {
      return { text: step };
    }

    // Gestisce il nuovo formato con title invece di text
    const text = step.title || step.text || '';

    // Gestisce code come oggetto o stringa
    if (typeof step.code === 'object' && step.code !== null) {
      return {
        text,
        code: step.code.code,
        language: step.code.language,
        highlightLines: step.code.highlightLines
      };
    }

    // Formato vecchio: code, language, highlightLines come proprietà separate
    return {
      text,
      code: step.code,
      language: step.language,
      highlightLines: step.highlightLines
    };
  });

  return (
    <div className="my-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-lg">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">💪</span>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-blue-900">{title}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${difficultyColors[difficulty]}`}>
          {difficultyLabels[difficulty]}
        </span>
      </div>

      {/* Steps */}
      <div className="space-y-4">
        {normalizedSteps.map((step, index) => (
          <div key={index}>
            {/* Step text */}
            <div className="flex gap-3 mb-2">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {index + 1}
              </span>
              <span className="text-gray-700 pt-0.5 font-medium">{step.text}</span>
            </div>

            {/* Codice opzionale per questo step */}
            {step.code && (
              <div className="ml-9">
                <CodeExample
                  title="💻 Codice completo fino a questo punto"
                  code={step.code}
                  language={step.language || 'html'}
                  highlightLines={step.highlightLines}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Sezione Esperimenti */}
      {experiments.length > 0 && (
        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🧪</span>
            <h4 className="text-lg font-bold text-purple-900">Esperimenti da Provare</h4>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Ora che hai completato l'esercizio, prova a fare questi esperimenti per vedere cosa succede:
          </p>
          <ol className="space-y-2">
            {experiments.map((experiment, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </span>
                <span className="text-gray-700 text-sm pt-0.5">{experiment}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
