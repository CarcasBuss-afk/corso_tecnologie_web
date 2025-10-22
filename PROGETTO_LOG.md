# LOG PROGETTO CORSO WEB - Manuale Didattico

**Data inizio:** 20 Ottobre 2025
**Ultimo aggiornamento:** 22 Ottobre 2025 - Sessione 5
**Piattaforma:** Next.js 15 + Tailwind CSS 4 + Vercel
**Target:** Studenti 14 anni - 80 ore annuali

---

## 📅 CHANGELOG SESSIONE 2 (20 Ottobre 2025)

### Lezioni Create
- ✅ **Lezione 3: Paragrafi e Testo** - Completata
- ✅ **Lezione 4: Formattare il Testo** - Completata

### Miglioramenti Architetturali
- ✅ **Sidebar Unificata**: Centralizzata configurazione lezioni in `/lib/moduli.ts`
- ✅ Funzione helper `getLezioniByModuloSlug()` per accesso uniforme
- ✅ Tutte le 8 lezioni del Modulo 1 visibili in sidebar da qualsiasi lezione
- ✅ Navigazione fluida tra lezioni garantita

### File Modificati
- `/lib/moduli.ts` - Aggiunto array completo 8 lezioni Modulo 1
- `/app/moduli/modulo-1-html/lezione-1-primo-giorno/page.tsx` - Usa config centralizzata
- `/app/moduli/modulo-1-html/lezione-2-titoli-gerarchia/page.tsx` - Usa config centralizzata
- `/app/moduli/modulo-1-html/lezione-3-paragrafi-testo/page.tsx` - Creata + config centralizzata
- `/app/moduli/modulo-1-html/lezione-4-formattare-testo/page.tsx` - Creata + config centralizzata

### Stato Modulo 1
**Progresso:** 4/18 lezioni completate (22%)
- ✅ Lezione 1: Il Primo Giorno
- ✅ Lezione 2: Titoli e Gerarchia
- ✅ Lezione 3: Paragrafi e Testo
- ✅ Lezione 4: Formattare il Testo
- ⏳ Lezione 5: Link e Navigazione (pianificata in sidebar)
- ⏳ Lezione 6: Immagini (pianificata in sidebar)
- ⏳ Lezione 7: Liste (pianificata in sidebar)
- ⏳ Lezione 8: Tabelle (pianificata in sidebar)
- ⏳ Lezioni 9-18: Da pianificare

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

#### ✅ LEZIONE 3: Paragrafi e Testo (COMPLETATA)
**Durata:** 1 ora
**Difficoltà:** Facile
**Argomenti:**
- Tag `<p>` per paragrafi
- `<br>` per andare a capo
- `<hr>` per separatori
- Gestione spazi e compressione automatica HTML
- Differenza tra spazi nel codice e spazi nel browser

**Componenti usati:**
- CodeExample (esempi di p, br, hr e gestione spazi)
- LessonPreview (mostra risultati visivi nel browser)
- Exercise (10 step guidati per creare una storia)
- Challenge (pagina poesie con formattazione corretta)
- Checklist (6 punti di auto-valutazione)

**Caratteristiche didattiche:**
- Spiega il "mistero degli spazi" che sorprende i principianti
- Box colorati per attenzione, curiosità e quando usare i tag
- Esempio pratico di formattazione indirizzo
- Grid comparativa dei 4 concetti principali

**File:** `/app/moduli/modulo-1-html/lezione-3-paragrafi-testo/page.tsx`

---

#### ✅ LEZIONE 4: Formattare il Testo (COMPLETATA)
**Durata:** 1.5 ore
**Difficoltà:** Facile
**Argomenti:**
- Grassetto: `<strong>` vs `<b>` (semantico vs visuale)
- Corsivo: `<em>` vs `<i>` (enfasi vs styling)
- Sottolineato: `<u>`
- Evidenziato: `<mark>`
- Barrato: `<del>`, `<s>`
- Inserito: `<ins>`
- Piccolo: `<small>`
- Pedice/Apice: `<sub>`, `<sup>`
- Combinare tag multipli
- Differenza semantico vs visuale

**Componenti usati:**
- CodeExample (8 esempi di codice per tutti i tag)
- LessonPreview (6 preview visivi dei risultati)
- Exercise (10 step guidati per note scolastiche con formule)
- Challenge (volantino promozionale creativo)
- Checklist (8 punti di auto-valutazione)

**Caratteristiche didattiche:**
- Grid comparativa 2x2 per strong vs b e em vs i
- 6 box colorati per ogni tipo di formattazione
- Tabella riepilogativa completa con tutti i tag
- Box speciale "Semantico vs Visuale" con emoji e spiegazioni
- Regola importante per annidamento tag corretto
- Esempi pratici: note scolastiche, volantino, formule

**Elementi speciali:**
- Tabella HTML nativa con 8 righe (tutti i tag)
- Grid verde/giallo per confronto semantico/visuale
- Box rosso per regola di chiusura tag annidati
- Box gradiente finale per importanza semantica

**File:** `/app/moduli/modulo-1-html/lezione-4-formattare-testo/page.tsx`

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

### Problema 1: Tailwind CSS 4.x (Sessione 1)
**Errore:** PostCSS plugin non trovato
**Soluzione:**
- Installato `@tailwindcss/postcss`
- Aggiornato `postcss.config.mjs` con `'@tailwindcss/postcss': {}`
- Cambiato `globals.css` con `@import "tailwindcss"`
- Rimosso `tailwind.config.ts` (non più necessario in v4)

### Problema 2: Sidebar Lezioni Inconsistente (Sessione 2)
**Problema:** Ogni lezione aveva un array locale diverso, mostrando solo alcune lezioni
**Impatto:** Gli studenti vedevano lezioni diverse in base a dove si trovavano
**Soluzione:**
- Centralizzata configurazione in `/lib/moduli.ts`
- Creata funzione helper `getLezioniByModuloSlug(moduloSlug: string)`
- Aggiornate tutte le lezioni per usare la configurazione centralizzata
- Ora tutte le 8 lezioni del Modulo 1 sono sempre visibili

---

## PROSSIMI PASSI

### Immediati
1. ✅ Creare questo file di log
2. ✅ Creare Lezione 2 (Titoli e Gerarchia)
3. ✅ Creare Lezione 3 (Paragrafi e Testo)
4. ✅ Creare Lezione 4 (Formattare il Testo)
5. ⏳ Creare Lezioni 5-17
6. ⏳ Creare Progetto Finale Lezione 18

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

*Log aggiornato il: 20 Ottobre 2025 - Sessione 2*

---

## 📊 RIEPILOGO SESSIONE 2

### Statistiche
- **Lezioni create:** 2 (Lezione 3 e 4)
- **Righe di codice:** ~600 righe totali
- **Componenti didattici:** 28 elementi (CodeExample, LessonPreview, Exercise, Challenge, Checklist)
- **Tempo sviluppo:** ~3 ore
- **File modificati:** 5 file

### Highlights Didattici

**Lezione 3 - Paragrafi e Testo:**
- Spiega il "mistero degli spazi" (HTML comprime spazi multipli)
- Esempi pratici: storia, poesie, indirizzi
- Grid comparativa 2x2 dei concetti principali
- 6 punti di auto-valutazione

**Lezione 4 - Formattare il Testo:**
- Focus su differenza semantico vs visuale
- Grid comparativa strong/b e em/i
- Tabella HTML riepilogativa con 8 tag
- Box speciale "Perché la semantica importa" con esempi accessibilità/SEO
- Esercizi creativi: note scolastiche, volantino promozionale

### Miglioramenti UX
- ✅ Sidebar sempre sincronizzata con tutte le lezioni
- ✅ Navigazione fluida garantita
- ✅ Configurazione centralizzata facilita manutenzione futura

### Prossimi Passi
1. Lezione 5: Link e Navigazione (2 ore)
2. Lezione 6: Immagini (1.5 ore)
3. Lezione 7: Liste (1.5 ore)
4. Lezione 8: Tabelle (1.5 ore)

---

## 📊 RIEPILOGO SESSIONE 2

### Statistiche
- **Lezioni create:** 2 (Lezione 3 e 4)
- **Righe di codice:** ~600 righe totali
- **Componenti didattici:** 28 elementi (CodeExample, LessonPreview, Exercise, Challenge, Checklist)
- **Tempo sviluppo:** ~3 ore
- **File modificati:** 5 file

### Highlights Didattici

**Lezione 3 - Paragrafi e Testo:**
- Spiega il "mistero degli spazi" (HTML comprime spazi multipli)
- Esempi pratici: storia, poesie, indirizzi
- Grid comparativa 2x2 dei concetti principali
- 6 punti di auto-valutazione

**Lezione 4 - Formattare il Testo:**
- Focus su differenza semantico vs visuale
- Grid comparativa strong/b e em/i
- Tabella HTML riepilogativa con 8 tag
- Box speciale "Perché la semantica importa" con esempi accessibilità/SEO
- Esercizi creativi: note scolastiche, volantino promozionale

### Miglioramenti UX
- ✅ Sidebar sempre sincronizzata con tutte le lezioni
- ✅ Navigazione fluida garantita
- ✅ Configurazione centralizzata facilita manutenzione futura

### Prossimi Passi
1. Lezione 5: Link e Navigazione (2 ore)
2. Lezione 6: Immagini (1.5 ore)
3. Lezione 7: Liste (1.5 ore)
4. Lezione 8: Tabelle (1.5 ore)

#### ✅ LEZIONE 5: Link e Navigazione (COMPLETATA)
**Durata:** 2 ore
**Difficoltà:** Media
**Argomenti:**
- Tag `<a>` e attributo `href`
- Link esterni vs link interni
- Percorsi relativi e assoluti
- Anchor link (navigazione stessa pagina con `#id`)
- Link speciali: `mailto:`, `tel:`, `sms:`
- Attributi: `target`, `title`, `rel`, `download`
- Link con immagini
- Best practice UX per i link

**Componenti usati:**
- CodeExample (8 esempi di codice progressivi)
- LessonPreview (3 preview visivi con link funzionanti)
- Exercise (11 step guidati per menu navigazione)
- Challenge (portfolio multi-pagina con navigazione completa)
- Checklist (9 punti di auto-valutazione)

**Caratteristiche didattiche:**
- Grid comparativa 2x2 link esterni vs interni
- 4 box colorati per attributi principali del tag <a>
- Fun fact storico sul primo link del web (Tim Berners-Lee 1991)
- Box percorsi relativi con esempi pratici
- Box "Link e UX" con 4 principi di usabilità (emoji grandi)
- Box best practice con lista di consigli

**Elementi speciali:**
- Spiegazione anchor link con esempio indice navigabile
- Link email con parametri (subject, body)
- Link telefono/SMS per mobile
- Esempi sicurezza (rel="noopener noreferrer")
- 4 casi d'uso UX con icone emoji

**File:** `/app/moduli/modulo-1-html/lezione-5-link-navigazione/page.tsx`

---

#### ✅ LEZIONE 6: Immagini (COMPLETATA)
**Durata:** 1.5 ore
**Difficoltà:** Facile
**Argomenti:**
- Tag `<img>` auto-chiudente
- Attributi `src` (percorso) e `alt` (accessibilità)
- Dimensioni: `width` e `height`
- Percorsi relativi vs assoluti
- Immagini cliccabili (dentro tag `<a>`)
- Formati immagine: JPG, PNG, GIF, SVG, WebP, AVIF
- Attributi avanzati: `title`, `loading="lazy"`
- Ottimizzazione e best practice

**Componenti usati:**
- CodeExample (7 esempi progressivi)
- Exercise (11 step guidati per gallery)
- Challenge (portfolio fotografico con 9 requisiti)
- Checklist (9 punti di auto-valutazione)

**Caratteristiche didattiche:**
- Grid 2x2 src vs alt (attributi fondamentali)
- Grid 2x2 percorsi relativi vs assoluti
- Grid 2x3 formati immagine con emoji e pro/contro
- Fun fact: primo banner pubblicitario web (1994)
- Box importanza alt (4 motivi: accessibilità, SEO, fallback, legge)
- Box best practice dimensioni (3 opzioni)
- Box ottimizzazione immagini (4 principi con emoji)

**Elementi speciali:**
- Spiegazione dettagliata percorsi con esempi struttura cartelle
- Confronto tutti i formati immagine (JPG, PNG, GIF, SVG, WebP, AVIF)
- Attributo loading="lazy" per performance
- Immagini cliccabili con esempi social
- 4 principi ottimizzazione (performance, responsive, SEO, accessibilità)

**File:** `/app/moduli/modulo-1-html/lezione-6-immagini/page.tsx`

**Aggiornamenti Sessione 4:**
- Aggiunti 3 box visivi interattivi con immagini fotografiche reali (picsum.photos)
- Box 1: Dimostrazione tag `<img>` con foto paesaggio
- Box 2: Grid con 3 dimensioni diverse della stessa foto (width: 100, 200, 280px)
- Box 3: Immagini cliccabili interattive con effetti hover (ClickableImageDemo component)
- Creato Client Component separato per interattività (`ClickableImageDemo.tsx`)
- Immagini con angoli arrotondati e effetti zoom al passaggio del mouse

---

#### ✅ LEZIONE 7: Liste (COMPLETATA)
**Durata:** 1.5 ore
**Difficoltà:** Facile
**Argomenti:**
- Liste non ordinate: `<ul>` e `<li>` (bullet points)
- Liste ordinate: `<ol>` e `<li>` (numerate)
- Confronto UL vs OL - quando usare quale
- Liste annidate (liste dentro liste, matrioske)
- Attributi liste ordinate: `type`, `start`, `reversed`
- Liste di descrizione: `<dl>`, `<dt>`, `<dd>` (glossari/FAQ)
- Tabella riassuntiva di tutti i tag delle liste

**Componenti usati:**
- CodeExample (7 esempi progressivi)
- LessonPreview (5 preview HTML - NOTA: richiede fix CSS per visualizzare liste)
- Exercise (10 step guidati per menu ristorante con liste annidate)
- Challenge (guida turistica con tutti i tipi di liste)
- Checklist (10 punti di auto-valutazione)

**Caratteristiche didattiche:**
- Grid comparativa 2 colonne: UL vs OL con icone emoji
- 3 box colorati per attributi liste ordinate (type, start, reversed)
- Metafora matrioske russe per spiegare liste annidate
- Esempi progressivi: spesa → ricetta → vacanza → menu
- Tabella HTML con tutti i 6 tag delle liste spiegati
- Fun fact: liste usate per menu di navigazione

**File:** `/app/moduli/modulo-1-html/lezione-7-liste/page.tsx`

---

#### ✅ LEZIONE 8: Tabelle (COMPLETATA)
**Durata:** 1.5 ore
**Difficoltà:** Media
**Argomenti:**
- Struttura base tabella: `<table>`, `<tr>`, `<td>`, `<th>`
- Sezioni semantiche: `<thead>`, `<tbody>`, `<tfoot>`
- Celle che si estendono: `colspan` e `rowspan`
- Didascalia tabella: `<caption>`
- Quando usare le tabelle (dati tabulari, NON layout)
- Accessibilità tabelle (scope, headers)
- Best practice e tabelle responsive

**Componenti usati:**
- CodeExample (9 esempi progressivi)
- LessonPreview (6 preview HTML con tabelle pure senza stili CSS)
- Exercise (12 step guidati per tabella voti scolastici)
- Challenge (dashboard statistiche complessa)
- Checklist (11 punti di auto-valutazione)

**Caratteristiche didattiche:**
- Grid comparativa 2x2: TD vs TH
- 3 box colorati per sezioni tabella (thead, tbody, tfoot)
- 2 box arancioni per colspan e rowspan con esempi visivi
- Box rosso importante: "Tabelle solo per dati, NON per layout"
- Fun fact storico: tabelle nei primi siti web anni '90
- Grid 2x2 best practice (semantica, accessibilità, responsive, performance)
- Sezione congratulazioni completamento Modulo 1 HTML

**File:** `/app/moduli/modulo-1-html/lezione-8-tabelle/page.tsx`

**Nota pedagogica:**
- Tabelle visualizzate senza bordi CSS (comportamento HTML puro)
- Solo stili default browser: `<th>` grassetto e centrato
- Bordi e stili verranno insegnati nel Modulo 2 CSS

---

## 📅 CHANGELOG SESSIONE 5 (22 Ottobre 2025)

### Fix e Miglioramenti

**1. LessonPreview Component - Stili CSS Liste**
- ✅ **Problema risolto:** Liste non visualizzavano pallini/numeri/indentazione
- ✅ **Aggiunto CSS per:**
  - `<ul>` con pallini (list-style-type: disc)
  - `<ol>` con numeri (list-style-type: decimal)
  - `<li>` con margine e spacing
  - Liste annidate con stili progressivi (circle, square, lower-alpha, lower-roman)
  - Liste di definizione: `<dl>`, `<dt>`, `<dd>`
- ✅ **File modificato:** `/components/didattica/LessonPreview.tsx` (righe 92-127)

**2. Decisione Pedagogica - Tabelle HTML Pure**
- ✅ **Discussione:** Tabelle con o senza bordi CSS?
- ✅ **Scelta:** Opzione 1 - Nessuno stile CSS per tabelle
- ✅ **Motivazione:** Modulo 1 insegna HTML puro, CSS nel Modulo 2
- ✅ **Comportamento:** Tabelle senza bordi, solo default browser
- ✅ **Risultato:** `<th>` grassetto/centrato, `<td>` testo normale

**3. Stato Modulo 1**
- ✅ **Progresso:** 8/18 lezioni completate (44%)
- ✅ Lezioni 1-8: Completate e funzionanti
- ⏳ Lezioni 9-18: Da creare

### File Modificati Sessione 5
1. `/components/didattica/LessonPreview.tsx` - Aggiunto CSS liste
2. `/PROGETTO_LOG.md` - Aggiornato con Sessione 5

### Decisioni Tecniche
- **Stili HTML nativi:** LessonPreview mostra comportamento browser default
- **Pedagogia progressiva:** HTML puro → CSS styling (Modulo 2)
- **Liste:** Completamente funzionanti con formattazione corretta
- **Tabelle:** Visualizzazione HTML pura senza CSS aggiuntivo

---
