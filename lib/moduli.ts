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

// Helper per ottenere le lezioni di un modulo
export function getLezioniByModuloSlug(moduloSlug: string): Lezione[] {
  const modulo = moduli.find((m) => m.slug === moduloSlug);
  return modulo?.lezioni || [];
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
      {
        id: "1",
        titolo: "Il Primo Giorno",
        slug: "lezione-1-primo-giorno",
        durata: "2 ore",
        difficolta: "facile",
      },
      {
        id: "2",
        titolo: "Titoli e Gerarchia",
        slug: "lezione-2-titoli-gerarchia",
        durata: "1.5 ore",
        difficolta: "facile",
      },
      {
        id: "3",
        titolo: "Paragrafi e Testo",
        slug: "lezione-3-paragrafi-testo",
        durata: "1 ora",
        difficolta: "facile",
      },
      {
        id: "4",
        titolo: "Formattare il Testo",
        slug: "lezione-4-formattare-testo",
        durata: "1.5 ore",
        difficolta: "facile",
      },
      {
        id: "5",
        titolo: "Link e Navigazione",
        slug: "lezione-5-link-navigazione",
        durata: "2 ore",
        difficolta: "media",
      },
      {
        id: "6",
        titolo: "Immagini",
        slug: "lezione-6-immagini",
        durata: "1.5 ore",
        difficolta: "facile",
      },
      {
        id: "7",
        titolo: "Liste",
        slug: "lezione-7-liste",
        durata: "1.5 ore",
        difficolta: "facile",
      },
      {
        id: "8",
        titolo: "Tabelle",
        slug: "lezione-8-tabelle",
        durata: "1.5 ore",
        difficolta: "media",
      },
      {
        id: "9",
        titolo: "Form - Input Base",
        slug: "lezione-9-form-input-base",
        durata: "1.5 ore",
        difficolta: "media",
      },
      {
        id: "10",
        titolo: "Form - Input Avanzati",
        slug: "lezione-10-form-input-avanzati",
        durata: "2 ore",
        difficolta: "media",
      },
      {
        id: "11",
        titolo: "Form - Validazione",
        slug: "lezione-11-form-validazione",
        durata: "1 ora",
        difficolta: "media",
      },
      {
        id: "12",
        titolo: "Audio e Video",
        slug: "lezione-12-audio-video",
        durata: "1 ora",
        difficolta: "facile",
      },
      {
        id: "13",
        titolo: "Contenitori e Divisioni",
        slug: "lezione-13-contenitori-divisioni",
        durata: "1.5 ore",
        difficolta: "facile",
      },
      {
        id: "14",
        titolo: "HTML Semantico",
        slug: "lezione-14-html-semantico",
        durata: "2 ore",
        difficolta: "media",
      },
      {
        id: "15",
        titolo: "Consolidamento e Pratica",
        slug: "lezione-15-consolidamento",
        durata: "2 ore",
        difficolta: "media",
      },
      {
        id: "16",
        titolo: "Mini-Progetto Parte 1",
        slug: "lezione-16-mini-progetto-parte-1",
        durata: "2 ore",
        difficolta: "media",
      },
      {
        id: "17",
        titolo: "Mini-Progetto Parte 2",
        slug: "lezione-17-mini-progetto-parte-2",
        durata: "2 ore",
        difficolta: "media",
      },
      {
        id: "18",
        titolo: "Mini-Progetto Parte 3",
        slug: "lezione-18-mini-progetto-parte-3",
        durata: "2 ore",
        difficolta: "media",
      },
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
    lezioni: [
      {
        id: "1",
        titolo: "Il Primo Stile",
        slug: "lezione-1-primo-stile",
        durata: "1.5 ore",
        difficolta: "facile",
      },
      {
        id: "2",
        titolo: "Selettore Elemento + Colori",
        slug: "lezione-2-selettori-elemento-colori",
        durata: "1.5 ore",
        difficolta: "facile",
      },
      {
        id: "3",
        titolo: "Classi + Dimensioni Testo",
        slug: "lezione-3-classi-dimensioni-testo",
        durata: "1.5 ore",
        difficolta: "facile",
      },
      {
        id: "4",
        titolo: "ID + Spaziatura Base",
        slug: "lezione-4-id-spaziatura",
        durata: "1.5 ore",
        difficolta: "facile",
      },
      {
        id: "5",
        titolo: "Font e Decorazioni Testo",
        slug: "lezione-5-font-decorazioni",
        durata: "1.5 ore",
        difficolta: "facile",
      },
    ],
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
