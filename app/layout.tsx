import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./print.css";

export const metadata: Metadata = {
  title: "Corso Web - Manuale per Ragazzi",
  description: "Impara HTML, CSS e JavaScript in modo pratico e divertente",
};

/* Sempre il tema chiaro: caselle, menu e barre di scorrimento non diventano scuri */
export const viewport: Viewport = {
  colorScheme: "only light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
