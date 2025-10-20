interface LessonHeaderProps {
  numero: number;
  titolo: string;
  durata: string;
  difficolta: 'facile' | 'media' | 'difficile';
  obiettivi: string[];
}

export default function LessonHeader({
  numero,
  titolo,
  durata,
  difficolta,
  obiettivi,
}: LessonHeaderProps) {
  const difficoltaColors = {
    facile: 'bg-green-100 text-green-800',
    media: 'bg-yellow-100 text-yellow-800',
    difficile: 'bg-red-100 text-red-800',
  };

  const difficoltaLabels = {
    facile: 'Facile',
    media: 'Media',
    difficile: 'Difficile',
  };

  return (
    <div className="mb-8 pb-6 border-b-2 border-gray-200">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-sm text-gray-500 font-semibold">LEZIONE {numero}</span>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficoltaColors[difficolta]}`}>
          {difficoltaLabels[difficolta]}
        </span>
        <span className="text-sm text-gray-500">⏱️ {durata}</span>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4">{titolo}</h1>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">🎯 Cosa imparerai:</h3>
        <ul className="space-y-1">
          {obiettivi.map((obiettivo, index) => (
            <li key={index} className="text-blue-800 text-sm flex gap-2">
              <span>✓</span>
              <span>{obiettivo}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
