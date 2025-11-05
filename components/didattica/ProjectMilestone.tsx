interface ProjectMilestoneProps {
  numero: number;
  titolo: string;
  requisiti: string[];
  screenshot?: string;
  suggerimenti?: string[];
}

export default function ProjectMilestone({
  numero,
  titolo,
  requisiti,
  screenshot,
  suggerimenti = []
}: ProjectMilestoneProps) {
  return (
    <div className="my-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">🎯</span>
        <div>
          <h3 className="text-2xl font-bold text-green-900">
            Milestone {numero}: {titolo}
          </h3>
          <p className="text-sm text-green-700 mt-1">
            Completa tutti i requisiti prima di procedere
          </p>
        </div>
      </div>

      {/* Requisiti */}
      <div className="mb-6">
        <h4 className="font-bold text-lg mb-3 text-green-900 flex items-center gap-2">
          <span>📋</span>
          Requisiti da completare:
        </h4>
        <ul className="space-y-3">
          {requisiti.map((req, i) => (
            <li key={i} className="flex gap-3 items-start bg-white p-3 rounded border border-green-200">
              <span className="flex-shrink-0 w-6 h-6 border-2 border-green-400 rounded flex items-center justify-center text-xs text-green-700 font-bold mt-0.5">
                {i + 1}
              </span>
              <span className="text-gray-800">{req}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Suggerimenti opzionali */}
      {suggerimenti.length > 0 && (
        <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
          <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
            <span>💡</span>
            Suggerimenti:
          </h4>
          <ul className="space-y-2">
            {suggerimenti.map((sug, i) => (
              <li key={i} className="text-sm text-blue-800 flex gap-2">
                <span className="text-blue-400">•</span>
                <span>{sug}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Screenshot risultato atteso (opzionale) */}
      {screenshot && (
        <div className="mt-6">
          <h4 className="font-bold text-lg mb-3 text-green-900 flex items-center gap-2">
            <span>📸</span>
            Risultato atteso:
          </h4>
          <div className="rounded-lg overflow-hidden border-2 border-green-200 shadow-md">
            <img
              src={screenshot}
              alt={`Preview Milestone ${numero}`}
              className="w-full"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2 text-center italic">
            Il tuo progetto dovrebbe assomigliare a questo quando hai completato la milestone
          </p>
        </div>
      )}

      {/* Footer motivazionale */}
      <div className="mt-6 pt-4 border-t-2 border-green-200">
        <p className="text-center text-sm text-green-700 font-medium">
          ✅ Quando hai completato tutti i requisiti, passa alla prossima sezione!
        </p>
      </div>
    </div>
  );
}
