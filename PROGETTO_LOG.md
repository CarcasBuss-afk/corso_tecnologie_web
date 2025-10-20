# LOG PROGETTO CORSO WEB - Manuale Didattico

**Data inizio:** 20 Ottobre 2025
**Piattaforma:** Next.js 15 + Tailwind CSS 4 + Vercel
**Target:** Studenti 14 anni - 80 ore annuali

---

## DECISIONI DIDATTICHE FONDAMENTALI

### Approccio Pedagogico
✅ **NESSUN COPIA-INCOLLA**: Gli studenti devono scrivere tutto il codice a mano in VS Code
- Obiettivo: memorizzazione e appropriazione del codice
- Il sito mostra solo esempi visuali + codice formattato
- Nessun bottone "copia codice"

✅ **PRATICO > TEORICO**:
- Teoria minima (2-3 paragrafi max)
- Focus su esempi concreti
- Esercizi guidati step-by-step
- Sfide pratiche immediate

✅ **LINGUAGGIO INFORMALE**:
- Tono amichevole ("Hey!", "Figata!", "Ora tocca a te!")
- Analogie con vita reale
- Esempi legati agli interessi dei ragazzi

✅ **RISULTATI IMMEDIATI**:
- Gli studenti vedono subito l'output nel browser
- Ogni lezione ha preview visivi del risultato
- Feedback immediato tramite checklist interattive

---

## STRUTTURA TECNICA

### Stack Tecnologico
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4.x con @tailwindcss/postcss
- **Syntax Highlighting:** react-syntax-highlighter
- **Linguaggio:** TypeScript
- **Hosting:** Vercel
- **Repository:** Git/GitHub

### Struttura Cartelle
```
corso_tecnologie_web/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx (homepage)
│   └── moduli/
│       ├── modulo-1-html/
│       │   └── lezione-1-primo-giorno/
│       │       └── page.tsx
│       ├── modulo-2-css/
│       ├── modulo-3-progetto-intermedio/
│       ├── modulo-4-javascript/
│       ├── modulo-5-progetto-finale/
│       └── modulo-6-strumenti-moderni/
├── components/
│   ├── didattica/
│   │   ├── CodeExample.tsx
│   │   ├── Exercise.tsx
│   │   ├── Challenge.tsx
│   │   ├── Checklist.tsx
│   │   └── LessonPreview.tsx
│   └── layout/
│       ├── Header.tsx
│       ├── Sidebar.tsx
│       ├── LessonLayout.tsx
│       └── LessonHeader.tsx
└── lib/
    └── moduli.ts
```

---

## COMPONENTI DIDATTICI CREATI

### 1. CodeExample
**Scopo:** Mostrare codice con syntax highlighting
**Props:**
- `code`: stringa con il codice
- `language`: linguaggio (html, css, js)
- `title`: titolo opzionale
- `showLineNumbers`: mostra numeri di riga

**Stile:** Dark theme (vscDarkPlus)

---

### 2. Exercise
**Scopo:** Esercizi guidati step-by-step
**Props:**
- `title`: titolo esercizio
- `steps`: array di stringhe (passi da seguire)
- `difficulty`: facile | media | difficile

**Design:**
- Sfondo blu chiaro
- Emoji 💪
- Numerazione automatica con pallini blu
- Badge difficoltà colorato

---

### 3. Challenge
**Scopo:** Sfide pratiche con requisiti
**Props:**
- `title`: titolo sfida
- `description`: descrizione
- `requirements`: array di requisiti
- `hint`: suggerimento opzionale (nascosto, cliccabile)

**Design:**
- Sfondo viola chiaro
- Emoji 🎯
- Checkbox per requisiti
- Button per mostrare/nascondere hint

---

### 4. Checklist
**Scopo:** Auto-valutazione prima di passare alla lezione successiva
**Props:**
- `items`: array di string (cosa verificare)

**Funzionalità:**
- Checkbox interattive (salva stato in React)
- Quando tutte spuntate → messaggio congratulazioni 🎉
- Colore verde

---

### 5. LessonPreview
**Scopo:** Mostrare il risultato HTML renderizzato COME UNA PAGINA VERA
**Props:**
- `title`: titolo preview
- `html`: stringa HTML da renderizzare
- `description`: descrizione opzionale

**Funzionalità:**
- Usa `dangerouslySetInnerHTML` per renderizzare HTML
- Bordo blu e sfondo bianco per evidenziare il risultato
- **CSS inline per stili nativi:** mostra i tag HTML con le loro dimensioni e stili reali
  - h1, h2, h3, h4, h5, h6 con dimensioni progressive (2em, 1.5em, 1.17em...)
  - strong/b in grassetto
  - em/i in corsivo
  - u sottolineato
  - mark evidenziato giallo
  - hr con linea orizzontale
  - Tutti gli stili come in un browser reale

**IMPORTANTE:** L'output visualizzato deve essere ESATTAMENTE come appare in un browser, non solo codice. Gli studenti devono vedere le differenze visive tra i vari tag HTML.

---

### 6. LessonHeader
**Scopo:** Intestazione di ogni lezione
**Props:**
- `numero`: numero lezione
- `titolo`: titolo lezione
- `durata`: tempo stimato (es. "2 ore")
- `difficolta`: facile | media | difficile
- `obiettivi`: array di obiettivi di apprendimento

**Design:**
- Badge difficoltà colorato
- Icona orologio per durata
- Box blu con obiettivi "🎯 Cosa imparerai"

---

### 7. Layout Components

**Header:**
- Logo "🌐 Corso Web"
- Link: Home, Moduli
- Gradiente blu-viola

**Sidebar:**
- Navigazione tra lezioni del modulo
- Highlight lezione corrente
- Link "← Tutti i moduli"

**LessonLayout:**
- Wrapper completo: Header + Sidebar + Contenuto
- Responsive

---

## HOMEPAGE

### Sezioni Create

1. **Hero Section**
   - Titolo principale: "Impara a Creare Siti Web!"
   - Sottotitolo motivazionale
   - 2 CTA: "Inizia Ora" e "Scopri di Più"
   - Gradiente blu-viola

2. **Come Funziona** (3 step)
   - 👀 Guarda gli Esempi
   - ✍️ Scrivi il Codice (no copia-incolla)
   - 🎯 Fai le Sfide

3. **I Moduli del Corso** (Grid 3 colonne)
   - 6 card moduli con:
     - Icona emoji grande
     - Titolo e ore
     - Descrizione
     - Bottone "Inizia il Modulo" o "Prossimamente"
   - Solo Modulo 1 attivo

4. **CTA Finale**
   - "Pronto a Iniziare?"
   - Link diretto a Lezione 1

---

## MODULO 1: HTML - STRUTTURA COMPLETA

### Informazioni Generali
- **Ore totali:** 15 ore
- **Lezioni:** 18 lezioni
- **Icona:** 📄
- **Colore:** Blu (from-blue-500 to-blue-600)

### Lezioni Pianificate

#### ✅ LEZIONE 1: Il Primo Giorno (COMPLETATA)
**Durata:** 2 ore
**Difficoltà:** Facile
**Argomenti:**
- Cos'è l'HTML
- Struttura base (DOCTYPE, html, head, body)
- Tag h1 e p
- Creare primo file HTML in VS Code
- Aprire con Live Server

**Componenti usati:**
- CodeExample (struttura HTML base)
- LessonPreview (mostra risultato h1+p)
- Exercise (9 step guidati per creare prima pagina)
- Challenge (pagina "Chi sono" con requisiti)
- Checklist (5 punti di auto-valutazione)

**File:** `/app/moduli/modulo-1-html/lezione-1-primo-giorno/page.tsx`

---

#### 📝 LEZIONE 2: Titoli e Gerarchia
**Durata:** 1.5 ore
**Difficoltà:** Facile
**Argomenti:**
- Heading da h1 a h6
- Gerarchia e importanza
- Quando usare ogni livello
- Best practice (un solo h1 per pagina)

**Esercizio:** Articolo blog con titoli e sottotitoli
**Sfida:** Strutturare contenuto gerarchico complesso

---

#### 📝 LEZIONE 3: Paragrafi e Testo
**Durata:** 1 ora
**Difficoltà:** Facile
**Argomenti:**
- Tag `<p>`
- `<br>` per andare a capo
- `<hr>` per separatori
- Gestione spazi

**Esercizio:** Scrivere una storia con paragrafi
**Sfida:** Formattare un testo lungo con interruzioni logiche

---

#### 📝 LEZIONE 4: Formattare il Testo
**Durata:** 1.5 ore
**Difficoltà:** Facile
**Argomenti:**
- Grassetto: `<strong>` vs `<b>`
- Corsivo: `<em>` vs `<i>`
- Sottolineato: `<u>`
- Evidenziato: `<mark>`
- Barrato: `<del>`, `<s>`
- Piccolo: `<small>`
- Pedice/Apice: `<sub>`, `<sup>`

**Esercizio:** Formattare note scolastiche
**Sfida:** Creare documento con formattazione complessa

---

#### 📝 LEZIONE 5: Link e Navigazione
**Durata:** 2 ore
**Difficoltà:** Media
**Argomenti:**
- Tag `<a>` e href
- Link esterni, interni, anchor
- Link email (mailto:)
- target="_blank"
- Attributo title

**Esercizio:** Menu di navigazione tra 3 pagine
**Sfida:** Sistema di navigazione completo con anchor

---

#### 📝 LEZIONE 6: Immagini
**Durata:** 1.5 ore
**Difficoltà:** Facile
**Argomenti:**
- Tag `<img>`
- Attributi src, alt
- width, height
- Percorsi relativi vs assoluti
- Immagini cliccabili
- Formati (jpg, png, gif, svg)

**Esercizio:** Gallery 4 immagini con didascalie
**Sfida:** Portfolio immagini con link

---

#### 📝 LEZIONE 7: Liste
**Durata:** 1.5 ore
**Difficoltà:** Facile
**Argomenti:**
- Liste non ordinate `<ul>`, `<li>`
- Liste ordinate `<ol>`, `<li>`
- Attributi ol (type, start, reversed)
- Liste annidate
- Liste definizione `<dl>`, `<dt>`, `<dd>`

**Esercizio:** To-do list e classifica
**Sfida:** Menu navigazione multilivello

---

#### 📝 LEZIONE 8: Tabelle
**Durata:** 1.5 ore
**Difficoltà:** Media
**Argomenti:**
- `<table>`, `<tr>`, `<td>`, `<th>`
- `<thead>`, `<tbody>`, `<tfoot>`
- colspan, rowspan
- `<caption>`
- Quando usare tabelle (dati tabulari)

**Esercizio:** Orario scolastico
**Sfida:** Tabella complessa con celle unite

---

#### 📝 LEZIONE 9: Form - Input Base
**Durata:** 1.5 ore
**Difficoltà:** Media
**Argomenti:**
- Tag `<form>` (action, method)
- `<input>` types: text, password, email, number, tel
- `<label>` e accessibilità
- Attributo name
- placeholder
- `<button>` e submit

**Esercizio:** Form login e registrazione
**Sfida:** Form contatti completo

---

#### 📝 LEZIONE 10: Form - Input Avanzati
**Durata:** 1.5 ore
**Difficoltà:** Media
**Argomenti:**
- Checkbox
- Radio button
- Select dropdown
- Textarea
- Input date, time, color
- Input range

**Esercizio:** Sondaggio con vari input
**Sfida:** Form configurazione completo

---

#### 📝 LEZIONE 11: Form - Validazione
**Durata:** 1 ora
**Difficoltà:** Media
**Argomenti:**
- required
- minlength, maxlength
- min, max, step
- pattern (regex base)
- disabled, readonly
- Messaggi errore browser

**Esercizio:** Form iscrizione con validazione
**Sfida:** Form complesso con tutte le validazioni

---

#### 📝 LEZIONE 12: Audio e Video
**Durata:** 1 ora
**Difficoltà:** Facile
**Argomenti:**
- `<audio>` e attributi
- `<video>` e attributi
- `<source>` per formati multipli
- Iframe YouTube/Vimeo
- Sottotitoli `<track>`

**Esercizio:** Pagina portfolio multimediale
**Sfida:** Playlist video e audio

---

#### 📝 LEZIONE 13: Contenitori e Divisioni
**Durata:** 1 ora
**Difficoltà:** Facile
**Argomenti:**
- `<div>` - contenitore blocco
- `<span>` - contenitore inline
- Differenza blocco vs inline
- Attributi id e class
- Commenti HTML `<!-- -->`

**Esercizio:** Strutturare pagina con div
**Sfida:** Layout complesso con div annidati

---

#### 📝 LEZIONE 14: HTML Semantico
**Durata:** 1.5 ore
**Difficoltà:** Media
**Argomenti:**
- Importanza semantica
- `<header>`, `<nav>`, `<main>`
- `<article>`, `<section>`, `<aside>`
- `<footer>`
- `<figure>`, `<figcaption>`
- `<time>`

**Esercizio:** Trasformare div in semantic HTML
**Sfida:** Layout completo semantico

---

#### 📝 LEZIONE 15: Meta Tag e Head
**Durata:** 1 ora
**Difficoltà:** Media
**Argomenti:**
- `<title>` e SEO
- Meta charset
- Meta viewport
- Meta description
- Open Graph
- Favicon
- Link CSS esterni
- Google Fonts

**Esercizio:** Ottimizzare head delle pagine
**Sfida:** Setup completo per SEO e social

---

#### 📝 LEZIONE 16: Entità HTML e Caratteri Speciali
**Durata:** 45 min
**Difficoltà:** Facile
**Argomenti:**
- Cosa sono le entità
- Caratteri riservati (&lt;, &gt;, &amp;)
- Spazi &nbsp;
- Simboli (&copy;, &euro;, &trade;)
- Emoji
- Unicode UTF-8

**Esercizio:** Pagina con simboli matematici
**Sfida:** Glossario con caratteri speciali

---

#### 📝 LEZIONE 17: Best Practices e Accessibilità
**Durata:** 1 ora
**Difficoltà:** Media
**Argomenti:**
- Indentazione codice
- Semantica corretta
- Alt text
- Label per form
- ARIA basics
- Heading hierarchy
- Contrasto colori
- Test con screen reader

**Esercizio:** Audit accessibilità
**Sfida:** Rendere pagina 100% accessibile

---

#### 📝 LEZIONE 18: PROGETTO FINALE MODULO 1
**Durata:** 2-3 ore
**Difficoltà:** Difficile

**Progetto:** Sito personale completo (4-5 pagine)

**Pagine richieste:**
1. Homepage (presentazione, foto, link)
2. About (biografia, hobby, liste, immagini)
3. Portfolio/Progetti (gallery immagini)
4. Contatti (form completo)
5. Navigazione in tutte le pagine

**Requisiti tecnici:**
- HTML semantico
- Tutti i tag imparati
- Form con validazione
- Link funzionanti
- Immagini con alt
- Accessibilità completa
- Validazione W3C

**Criteri valutazione:**
- Struttura HTML ✓
- Semantica ✓
- Form funzionante ✓
- Accessibilità ✓
- Creatività ✓

---

## MODULI 2-6: PIANIFICAZIONE

### MODULO 2: CSS (22 ore)
**Stato:** Da creare
**Icona:** 🎨
**Colore:** Viola

**Argomenti previsti:**
- Selettori CSS
- Box model
- Colori e tipografia
- Layout (Flexbox, Grid)
- Responsive design
- Animazioni e transizioni

---

### MODULO 3: Progetto Intermedio (5 ore)
**Stato:** Da creare
**Icona:** 🚀
**Colore:** Verde

**Progetto:** Sito statico multi-pagina HTML+CSS completo

---

### MODULO 4: JavaScript (28 ore)
**Stato:** Da creare
**Icona:** ⚡
**Colore:** Giallo

**Argomenti previsti:**
- Variabili e tipi
- Operatori e logica
- Cicli e funzioni
- DOM manipulation
- Eventi
- Fetch API base

---

### MODULO 5: Progetto Finale (8 ore)
**Stato:** Da creare
**Icona:** 🏆
**Colore:** Rosso

**Progetto:** Web app interattiva completa (mini-gioco, app utile, o sito dinamico)

---

### MODULO 6: Strumenti Moderni (2 ore)
**Stato:** Da creare
**Icona:** 🛠️
**Colore:** Grigio

**Argomenti:**
- Git e GitHub basics
- Pubblicazione con Vercel/Netlify
- Cenni a framework (React, Vue, Next.js)

---

## PROBLEMI RISOLTI

### Problema 1: Tailwind CSS 4.x
**Errore:** PostCSS plugin non trovato
**Soluzione:**
- Installato `@tailwindcss/postcss`
- Aggiornato `postcss.config.mjs` con `'@tailwindcss/postcss': {}`
- Cambiato `globals.css` con `@import "tailwindcss"`
- Rimosso `tailwind.config.ts` (non più necessario in v4)

---

## PROSSIMI PASSI

### Immediati
1. ✅ Creare questo file di log
2. ⏳ Creare Lezione 2 (Titoli e Gerarchia)
3. ⏳ Creare Lezioni 3-17
4. ⏳ Creare Progetto Finale Lezione 18

### A Medio Termine
- Completare Modulo 2 CSS
- Completare Modulo 3 Progetto Intermedio
- Completare Modulo 4 JavaScript

### Prima del Deploy
- Test completo di tutte le lezioni
- Verifica responsive
- SEO ottimizzazione
- Performance check
- Deploy su Vercel

---

## NOTE TECNICHE

### Performance
- Syntax highlighter caricato solo dove necessario
- Componenti client (`'use client'`) solo quando serve interattività
- Next.js 15 con App Router per routing ottimizzato

### Accessibilità
- Tutti i componenti seguono WCAG 2.1
- Contrasti colori verificati
- Keyboard navigation supportata
- Screen reader friendly

### Browser Support
- Chrome/Edge (Chromium)
- Firefox
- Safari
- Mobile browsers

---

## CONTACT & INFO

**Repository:** https://github.com/CarcasBuss-afk/corso_tecnologie_web
**Dev Server:** http://localhost:3000
**Deploy URL:** (da configurare su Vercel)

---

*Log aggiornato il: 20 Ottobre 2025*
