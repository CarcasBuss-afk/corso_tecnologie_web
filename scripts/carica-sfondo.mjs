/* Carica uno sfondo festivo del sito (lib/sfondi) direttamente su Firestore, acceso, senza
 * passare dalla pagina del docente. Le credenziali dell'Admin SDK arrivano da .env.local;
 * con FIRESTORE_EMULATOR_HOST impostato scrive sull'emulatore.
 *
 *   npm run carica-sfondo -- percorso/immagine.webp "Natale sulla neve"
 *
 * L'immagine deve essere WebP, JPEG o PNG e pesare al massimo 900 kB (la pagina del docente
 * invece la riduce da sola). */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { cert, initializeApp } from 'firebase-admin/app';
import { FieldValue, getFirestore } from 'firebase-admin/firestore';

const PESO_MASSIMO = 900_000;

const radice = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const envFile = path.join(radice, '.env.local');
if (fs.existsSync(envFile)) process.loadEnvFile(envFile);

const [file, ...parole] = process.argv.slice(2);
const nome = parole.join(' ').trim().slice(0, 60) || 'Sfondo senza nome';
if (!file || !fs.existsSync(file)) {
  console.error('Uso: npm run carica-sfondo -- <immagine> "<nome>"');
  process.exit(2);
}

const dati = fs.readFileSync(file);
const ascii = (da, a) => dati.subarray(da, a).toString('latin1');
const tipo =
  ascii(0, 4) === 'RIFF' && ascii(8, 12) === 'WEBP'
    ? 'image/webp'
    : dati[0] === 0xff && dati[1] === 0xd8 && dati[2] === 0xff
      ? 'image/jpeg'
      : dati[0] === 0x89 && ascii(1, 4) === 'PNG'
        ? 'image/png'
        : null;
if (!tipo) {
  console.error('ERRORE: il file non è un’immagine WebP, JPEG o PNG');
  process.exit(1);
}
if (dati.length > PESO_MASSIMO) {
  console.error(`ERRORE: l'immagine pesa ${Math.round(dati.length / 1000)} kB, il massimo è ${PESO_MASSIMO / 1000} kB: riducila o caricala dalla pagina del docente`);
  process.exit(1);
}

if (process.env.FIRESTORE_EMULATOR_HOST) {
  initializeApp({ projectId: process.env.FIREBASE_PROJECT_ID || 'demo-officina' });
} else {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
  if (!projectId || !clientEmail || !privateKey) {
    console.error('ERRORE: mancano FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL o FIREBASE_PRIVATE_KEY (vedi .env.example)');
    process.exit(1);
  }
  initializeApp({ credential: cert({ projectId, clientEmail, privateKey }) });
}

const ref = await getFirestore()
  .collection('webSfondi')
  .add({ nome, acceso: true, tipo, peso: dati.length, dati, caricatoAt: FieldValue.serverTimestamp() });
console.log(`Sfondo «${nome}» caricato e acceso (id ${ref.id}, ${Math.round(dati.length / 1000)} kB, ${tipo}).`);
