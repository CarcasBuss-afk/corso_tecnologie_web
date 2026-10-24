import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "L'Officina · Tecnologie Web",
  description: "Gli esercizi del corso di Tecnologie Web, con l'account della scuola",
};

/* L'Officina ha il suo tema: fondo scuro da laboratorio e accento giallo, come l'Officina
 * del Giro dei Cicli. Il manuale resta chiaro: i colori vivono nella classe `officina`. */
export default function LayoutOfficina({ children }: { children: React.ReactNode }) {
  return <div className="officina min-h-screen">{children}</div>;
}
