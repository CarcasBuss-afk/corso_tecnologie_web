import { defineConfig } from 'vitest/config';
import path from 'node:path';

/* Vitest copre la logica pura dell'Officina (lib/officina): il motore di correzione in
 * jsdom, il catalogo dei compiti (le soluzioni di riferimento passano, le scorciatoie no),
 * le regole del percorso. */
export default defineConfig({
  test: {
    include: ['lib/**/*.test.ts'],
    environment: 'node',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      // Nei test non c'è il bundle client: il marcatore di Next non deve lanciare.
      'server-only': path.resolve(__dirname, 'lib/officina/motore/serverOnlyFinto.ts'),
    },
  },
});
