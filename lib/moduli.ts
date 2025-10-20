export interface Lezione {
  id: string;
  titolo: string;
  slug: string;
  durata: string; // es. "45 min"
  difficolta: "facile" | "media" | "difficile";
}

export interface Modulo {
  id: number;
  titolo: string;
  slug: string;
  descrizione: string;
  ore: number;
  icona: string; // emoji
  colore: string; // classe Tailwind
  lezioni: Lezione[];
}

export const moduli: Modulo[] = [
  {
    id: 1,
    titolo: "HTML - Le Basi",
    slug: "modulo-1-html",
    descrizione: "Impara a creare la struttura delle pagine web",
    ore: 15,
    icona: "📄",
    colore: "bg-blue-500",
    lezioni: [
      // Le lezioni verranno aggiunte dopo il briefing
    ],
  },
  {
    id: 2,
    titolo: "CSS - Stile e Design",
    slug: "modulo-2-css",
    descrizione: "Dai vita e colore alle tue pagine",
    ore: 22,
    icona: "🎨",
    colore: "bg-purple-500",
    lezioni: [],
  },
  {
    id: 3,
    titolo: "Progetto Intermedio",
    slug: "modulo-3-progetto-intermedio",
    descrizione: "Crea il tuo primo sito completo",
    ore: 5,
    icona: "🚀",
    colore: "bg-green-500",
    lezioni: [],
  },
  {
    id: 4,
    titolo: "JavaScript - Interattività",
    slug: "modulo-4-javascript",
    descrizione: "Rendi le tue pagine dinamiche e interattive",
    ore: 28,
    icona: "⚡",
    colore: "bg-yellow-500",
    lezioni: [],
  },
  {
    id: 5,
    titolo: "Progetto Finale",
    slug: "modulo-5-progetto-finale",
    descrizione: "Realizza la tua web app completa",
    ore: 8,
    icona: "🏆",
    colore: "bg-red-500",
    lezioni: [],
  },
  {
    id: 6,
    titolo: "Strumenti Moderni",
    slug: "modulo-6-strumenti-moderni",
    descrizione: "Git, GitHub e pubblicazione online",
    ore: 2,
    icona: "🛠️",
    colore: "bg-gray-500",
    lezioni: [],
  },
];
