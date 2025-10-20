'use client';

import { useState } from 'react';

interface ChecklistProps {
  items: string[];
}

export default function Checklist({ items }: ChecklistProps) {
  const [checked, setChecked] = useState<boolean[]>(new Array(items.length).fill(false));

  const toggleCheck = (index: number) => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const allChecked = checked.every(item => item);

  return (
    <div className="my-8 p-6 bg-green-50 border-2 border-green-200 rounded-lg">
      <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
        <span>✅</span>
        <span>Prima di continuare...</span>
      </h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <label key={index} className="flex gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={checked[index]}
              onChange={() => toggleCheck(index)}
              className="w-5 h-5 mt-0.5 accent-green-600 cursor-pointer"
            />
            <span className={`flex-1 ${checked[index] ? 'text-gray-500 line-through' : 'text-gray-700'} group-hover:text-green-800`}>
              {item}
            </span>
          </label>
        ))}
      </div>
      {allChecked && (
        <div className="mt-4 p-4 bg-green-100 rounded border border-green-300">
          <p className="text-green-800 font-semibold text-center">
            🎉 Ottimo lavoro! Sei pronto per la prossima lezione!
          </p>
        </div>
      )}
    </div>
  );
}
