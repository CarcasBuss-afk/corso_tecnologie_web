# DIPENDENZE DEL PROGETTO

**Progetto:** Corso Web - Manuale Didattico
**Data creazione:** 20 Ottobre 2025
**Node.js version richiesta:** >= 18.17.0
**Package Manager:** npm

---

## DIPENDENZE PRINCIPALI (dependencies)

### 1. Next.js
- **Pacchetto:** `next`
- **Versione:** ^15.5.6
- **Scopo:** Framework React per applicazioni web con routing, SSR, e ottimizzazioni
- **Utilizzo nel progetto:**
  - App Router per routing delle lezioni
  - Server-side rendering per performance
  - Ottimizzazione automatica bundle
  - File-based routing per moduli e lezioni

**Documentazione:** https://nextjs.org/docs

---

### 2. React
- **Pacchetto:** `react`
- **Versione:** ^19.2.0
- **Scopo:** Libreria JavaScript per costruire interfacce utente
- **Utilizzo nel progetto:**
  - Componenti UI (Header, Sidebar, ecc.)
  - Componenti didattici (CodeExample, Exercise, Challenge, ecc.)
  - State management per interattività (Checklist, Challenge hints)

**Documentazione:** https://react.dev

---

### 3. React DOM
- **Pacchetto:** `react-dom`
- **Versione:** ^19.2.0
- **Scopo:** Package per il rendering di React nel DOM
- **Utilizzo nel progetto:**
  - Rendering dei componenti React nel browser
  - Gestione eventi e aggiornamenti DOM

**Documentazione:** https://react.dev/reference/react-dom

---

### 4. Tailwind CSS (PostCSS Plugin)
- **Pacchetto:** `@tailwindcss/postcss`
- **Versione:** ^4.1.14
- **Scopo:** Plugin PostCSS per Tailwind CSS v4
- **Utilizzo nel progetto:**
  - Sistema di styling utility-first
  - Responsive design
  - Dark mode support
  - Stili componenti layout e didattici

**Nota importante:** Tailwind CSS 4.x usa un plugin PostCSS separato, non più il pacchetto principale

**Documentazione:** https://tailwindcss.com/docs

---

### 5. React Syntax Highlighter
- **Pacchetto:** `react-syntax-highlighter`
- **Versione:** ^15.6.6
- **Scopo:** Componente React per syntax highlighting del codice
- **Utilizzo nel progetto:**
  - Componente `CodeExample` per mostrare codice HTML/CSS/JS
  - Theme: vscDarkPlus (Visual Studio Code dark)
  - Supporto HTML, CSS, JavaScript

**Documentazione:** https://github.com/react-syntax-highlighter/react-syntax-highlighter

---

### 6. Types: React Syntax Highlighter
- **Pacchetto:** `@types/react-syntax-highlighter`
- **Versione:** ^15.5.13
- **Scopo:** Definizioni TypeScript per react-syntax-highlighter
- **Utilizzo nel progetto:**
  - Type checking per componente CodeExample
  - Autocompletamento IDE

---

## DIPENDENZE DI SVILUPPO (devDependencies)

### 1. TypeScript
- **Pacchetto:** `typescript`
- **Versione:** ^5.9.3
- **Scopo:** Linguaggio di programmazione con type checking
- **Utilizzo nel progetto:**
  - Type safety per tutti i componenti
  - Interfaces per props componenti
  - Type checking durante sviluppo

**Documentazione:** https://www.typescriptlang.org/docs

---

### 2. Types: Node.js
- **Pacchetto:** `@types/node`
- **Versione:** ^24.8.1
- **Scopo:** Definizioni TypeScript per Node.js
- **Utilizzo nel progetto:**
  - Type checking per API Node.js
  - Supporto per path, fs, ecc. se necessario

---

### 3. Types: React
- **Pacchetto:** `@types/react`
- **Versione:** ^19.2.2
- **Scopo:** Definizioni TypeScript per React
- **Utilizzo nel progetto:**
  - Type checking componenti React
  - Props, State, Hooks types

---

### 4. Types: React DOM
- **Pacchetto:** `@types/react-dom`
- **Versione:** ^19.2.2
- **Scopo:** Definizioni TypeScript per React DOM
- **Utilizzo nel progetto:**
  - Type checking per rendering React

---

### 5. ESLint
- **Pacchetto:** `eslint`
- **Versione:** ^9.38.0
- **Scopo:** Linter JavaScript/TypeScript per qualità codice
- **Utilizzo nel progetto:**
  - Analisi statica codice
  - Individuazione errori e bad practices
  - Code quality enforcement

**Documentazione:** https://eslint.org/docs

---

### 6. ESLint Config Next.js
- **Pacchetto:** `eslint-config-next`
- **Versione:** ^15.5.6
- **Scopo:** Configurazione ESLint ottimizzata per Next.js
- **Utilizzo nel progetto:**
  - Regole specifiche Next.js
  - Best practices React e Next.js

---

### 7. PostCSS
- **Pacchetto:** `postcss`
- **Versione:** ^8.5.6
- **Scopo:** Tool per trasformare CSS con plugin JavaScript
- **Utilizzo nel progetto:**
  - Processing Tailwind CSS
  - Autoprefixer
  - Ottimizzazioni CSS

**Documentazione:** https://postcss.org

---

### 8. Autoprefixer
- **Pacchetto:** `autoprefixer`
- **Versione:** ^10.4.21
- **Scopo:** Plugin PostCSS per aggiungere vendor prefixes automaticamente
- **Utilizzo nel progetto:**
  - Cross-browser compatibility CSS
  - Prefissi automatici (-webkit-, -moz-, ecc.)

**Documentazione:** https://github.com/postcss/autoprefixer

---

### 9. Tailwind CSS (core)
- **Pacchetto:** `tailwindcss`
- **Versione:** ^4.1.14
- **Scopo:** Framework CSS utility-first (versione 4.x)
- **Utilizzo nel progetto:**
  - Classi utility per styling
  - Configurazione tema (in v4 via CSS)

**Nota:** In Tailwind v4, la configurazione avviene tramite CSS invece di un file .config.js

---

## SCRIPTS NPM

### `npm run dev`
- **Comando:** `next dev`
- **Scopo:** Avvia server di sviluppo Next.js
- **Porta:** http://localhost:3000
- **Features:**
  - Hot reload automatico
  - Fast refresh
  - Error reporting dettagliato

### `npm run build`
- **Comando:** `next build`
- **Scopo:** Crea build di produzione
- **Output:** Cartella `.next/`
- **Ottimizzazioni:**
  - Minificazione codice
  - Tree shaking
  - Code splitting
  - Image optimization

### `npm run start`
- **Comando:** `next start`
- **Scopo:** Avvia server di produzione
- **Prerequisito:** Deve essere eseguito dopo `npm run build`
- **Porta:** http://localhost:3000

### `npm run lint`
- **Comando:** `next lint`
- **Scopo:** Esegue ESLint su tutto il progetto
- **Controlli:**
  - Errori sintassi
  - Best practices
  - Regole Next.js

---

## VERSIONI COMPATIBILI

### Browser Support
- **Chrome/Edge:** Ultimi 2 versioni
- **Firefox:** Ultimi 2 versioni
- **Safari:** Ultimi 2 versioni
- **Mobile browsers:** iOS Safari 12+, Chrome Android ultimi 2

### Node.js
- **Versione minima:** 18.17.0
- **Versione consigliata:** 20.x LTS o successiva

### npm
- **Versione minima:** 8.x
- **Versione consigliata:** 10.x

---

## INSTALLAZIONE DIPENDENZE

### Prima installazione
```bash
npm install
```

### Aggiornare dipendenze
```bash
# Controlla versioni disponibili
npm outdated

# Aggiorna a versioni minori
npm update

# Aggiorna a versioni major (con attenzione!)
npm install <package>@latest
```

### Pulire node_modules
```bash
# Rimuove node_modules e package-lock.json
rm -rf node_modules package-lock.json

# Reinstalla tutto
npm install
```

---

## NOTE IMPORTANTI

### Tailwind CSS 4.x
- **Breaking change:** La v4 usa `@tailwindcss/postcss` invece di `tailwindcss` come plugin
- **Configurazione:** Non usa più `tailwind.config.js`, ma configurazione CSS-based
- **Import:** Usa `@import "tailwindcss"` invece di `@tailwind base/components/utilities`

### React 19
- **Versione:** React 19 è una release recente
- **Compatibilità:** Verificare che tutte le librerie siano compatibili con React 19
- **Features nuove:** Server Components, Actions, e altre features moderne

### Next.js 15
- **App Router:** Usa esclusivamente App Router (non Pages Router)
- **Turbopack:** Supporto per Turbopack (bundler più veloce di Webpack)
- **React Server Components:** Componenti server di default

---

## TROUBLESHOOTING

### Errore: "Cannot find module"
```bash
npm install
```

### Errore: Porta 3000 già in uso
```bash
# Trova processo
lsof -i :3000

# Killa processo
kill -9 <PID>

# Oppure usa porta diversa
next dev -p 3001
```

### Errore: Build fallito
```bash
# Pulisci cache Next.js
rm -rf .next

# Rebuilda
npm run build
```

### Errore: TypeScript types
```bash
# Rigenera types Next.js
npm run dev
# Aspetta che carichi, poi ferma
```

---

## SICUREZZA

### Audit dipendenze
```bash
# Controlla vulnerabilità
npm audit

# Fix automatico vulnerabilità
npm audit fix

# Fix forzato (attenzione!)
npm audit fix --force
```

### Aggiornamenti sicurezza
- Controllare regolarmente `npm audit`
- Aggiornare dipendenze con vulnerabilità note
- Testare dopo ogni aggiornamento

---

## PERFORMANCE

### Bundle size
```bash
# Analizza bundle size
npm run build
```

### Ottimizzazioni attive
- Tree shaking automatico (Next.js)
- Code splitting per route
- Lazy loading componenti
- Image optimization (Next.js Image)
- CSS minification
- JavaScript minification

---

*Documento aggiornato il: 20 Ottobre 2025*
