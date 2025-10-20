interface ExerciseProps {
  title: string;
  steps: string[];
  difficulty?: 'facile' | 'media' | 'difficile';
}

export default function Exercise({ title, steps, difficulty = 'facile' }: ExerciseProps) {
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

  return (
    <div className="my-8 p-6 bg-blue-50 border-2 border-blue-200 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">💪</span>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-blue-900">{title}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${difficultyColors[difficulty]}`}>
          {difficultyLabels[difficulty]}
        </span>
      </div>
      <ol className="space-y-3">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {index + 1}
            </span>
            <span className="text-gray-700 pt-0.5">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
