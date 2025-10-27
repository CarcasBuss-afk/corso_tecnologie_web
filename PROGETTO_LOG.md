# LOG PROGETTO CORSO WEB - Manuale Didattico

**Data inizio:** 20 Ottobre 2025
**Ultimo aggiornamento:** 24 Ottobre 2025 - Sessione 7
**Piattaforma:** Next.js 15 + Tailwind CSS 4 + Vercel
**Target:** Studenti 14 anni - 80 ore annuali

---

## 📅 CHANGELOG SESSIONE 7 (24 Ottobre 2025)

### Funzionalità PDF Implementata
- ✅ **Pulsante "Salva PDF" Automatico**: Disponibile in TUTTE le lezioni
  - Posizionato in alto a destra in ogni lezione
  - Tooltip hover con istruzioni per attivare "Grafica di sfondo"
  - Funziona con stampa browser nativa (`window.print()`)
  - Zero dipendenze aggiuntive (no Puppeteer)

### File Creati
1. **`/components/DownloadPDFButton.tsx`** - Componente pulsante PDF
   - Design compatto per posizione top-right
   - Tooltip informativo con istruzioni
   - Imposta titolo documento per nome file PDF

2. **`/app/print.css`** - CSS ottimizzato per stampa PDF
   - Forza stampa di tutti i colori e sfondi (`print-color-adjust: exact`)
   - Nasconde sidebar, navigazione, pulsanti durante stampa
   - Mantiene formattazione blocchi di codice con sfondi scuri
   - Evita divisione riquadri tra pagine (`page-break-inside: avoid`)
   - Layout ottimizzato per PDF A4

### File Modificati
3. **`/components/layout/LessonLayout.tsx`** - Integrato pulsante PDF
   - Aggiunti parametri opzionali `lezioneSlug` e `lezioneTitolo`
   - Pulsante automatico in `position: absolute` top-right
   - Visibile solo quando parametri forniti

4. **Tutte le 12 lezioni** (Lezione 1-12) - Aggiunti parametri PDF
   - `lezioneSlug` per identificare la lezione
   - `lezioneTitolo` per nome file PDF
   - Pulsante ora disponibile automaticamente

### Caratteristiche PDF
- ✅ **Colori e formattazioni identici** alla pagina web
- ✅ **Blocchi di codice** con sfondi scuri mantenuti
- ✅ **Riquadri colorati** (bg-blue-50, bg-green-50, ecc.) stampati correttamente
- ✅ **Nessuna divisione riquadri** tra pagine (quando possibile)
- ✅ **Orphans e widows** controllati per migliore leggibilità

### Note Importanti per Lezioni Future
**IMPORTANTE**: Quando si crea una nuova lezione, aggiungere SEMPRE questi parametri al `LessonLayout`:
```tsx
<LessonLayout
  moduloSlug="modulo-X-..."
  moduloTitolo="Modulo X: ..."
  lezioni={lezioni}
  lezioneSlug="lezione-Y-slug-lezione"      // ← OBBLIGATORIO per PDF
  lezioneTitolo="Titolo della Lezione"      // ← OBBLIGATORIO per PDF
>
```

### Commit Effettuati
- `5f1e9a9` - Feature: Aggiunto pulsante Stampa/Salva PDF alle lezioni
- `33b3c40` - Fix: Aggiunta dipendenza lucide-react per icone
- `6dd3199` - Feature: Pulsante PDF automatico in tutte le lezioni
- `5af3b35` - Fix: Evita divisione riquadri tra pagine PDF

---

## 📅 CHANGELOG SESSIONE 6 (23 Ottobre 2025)

### Lezioni Create
- ✅ **Lezione 11: Form - Validazione** - Completata
- ✅ **Lezione 12: Audio e Video** - Completata

### Fix TypeScript per Vercel
- ✅ **Fix Challenge/LessonHeader Props**: Risolti errori di validazione TypeScript
  - Rimossa prop `difficulty` da Challenge (non supportata)
  - Rimossa prop `prerequisiti` da LessonHeader (non supportata)
  - Convertiti array `hints` in stringa singola `hint` nelle Challenge
  - Tutti i fix committati e pushati su GitHub

### Nuove Funzionalità
- ✅ **LessonPreview Interattivi**: Aggiunti 5 esempi interattivi nella Lezione 11
  - Form con validazione required
  - Form con minlength/maxlength
  - Form con min/max/step per numeri
  - Form con pattern (regex) per formati personalizzati
  - Form con disabled vs readonly

### File Creati/Modificati
1. `/app/moduli/modulo-1-html/lezione-11-form-validazione/page.tsx` - Creata (800+ righe)
2. `/app/moduli/modulo-1-html/lezione-12-audio-video/page.tsx` - Creata (700+ righe)
3. `/lib/moduli.ts` - Aggiunte Lezioni 11 e 12
4. `/app/moduli/modulo-1-html/lezione-7-liste/page.tsx` - Fix hints → hint
5. `/app/moduli/modulo-1-html/lezione-8-tabelle/page.tsx` - Fix hints → hint

### Stato Modulo 1
**Progresso:** 12/18 lezioni completate (67%)
- ✅ Lezioni 1-12: Completate e funzionanti
- ⏳ Lezioni 13-18: Da creare

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

#### ✅ LEZIONE 11: Form - Validazione (COMPLETATA)
**Durata:** 1 ora
**Difficoltà:** Media
**Argomenti:**
- Attributo `required` per campi obbligatori
- `minlength` e `maxlength` per lunghezza testo
- `min`, `max` e `step` per controllo numeri
- `pattern` con regex base per formati personalizzati
- `disabled` vs `readonly` - differenze e casi d'uso
- Messaggi di errore nativi del browser
- Best practice validazione HTML

**Componenti usati:**
- CodeExample (6 esempi di validazione)
- LessonPreview (5 form interattivi)
- Exercise (Form iscrizione evento)
- Challenge (Form registrazione completo con tutte le validazioni)
- Checklist (10 punti)

**Caratteristiche didattiche:**
- Grid cards per attributi (required, minlength/maxlength, min/max/step)
- Spiegazione regex base senza spaventare gli studenti
- Tabella riepilogativa completa con tutti gli attributi
- 5 LessonPreview interattivi per testare validazioni in tempo reale
- Box colorati per casi d'uso (pattern italiano: CAP, targa, telefono)
- Confronto disabled vs readonly con esempi pratici

**File:** `/app/moduli/modulo-1-html/lezione-11-form-validazione/page.tsx` (800+ righe)

---

#### ✅ LEZIONE 12: Audio e Video (COMPLETATA)
**Durata:** 1 ora
**Difficoltà:** Facile
**Argomenti:**
- Tag `<audio>` per file audio, musica, podcast
- Tag `<video>` per filmati e clip
- Tag `<source>` per formati multipli (fallback)
- Incorporare video YouTube/Vimeo con `<iframe>`
- Tag `<track>` per sottotitoli WebVTT
- Attributi: controls, autoplay, loop, muted, poster, preload
- Formati audio: MP3, OGG, WAV
- Formati video: MP4, WebM, OGG
- Best practice: evitare autoplay, usare muted per sfondi
- Accessibilità: sottotitoli e descrizioni audio

**Componenti usati:**
- CodeExample (7 esempi audio/video)
- LessonPreview (3 preview: audio player, video player, iframe YouTube)
- Exercise (Portfolio multimediale)
- Challenge (Piattaforma video educativa completa)
- Checklist (10 punti)

**Caratteristiche didattiche:**
- Grid cards per attributi (controls, loop, autoplay)
- Grid formati audio/video con pro/contro
- Esempio iframe YouTube funzionante e cliccabile
- Spiegazione formato WebVTT con esempio pratico
- Tabella completa attributi audio/video
- Warning su autoplay e UX
- Box "Trucco: Autoplay con Muted" per video background

**File:** `/app/moduli/modulo-1-html/lezione-12-audio-video/page.tsx` (700+ righe)

---

#### 📝 LEZIONE 13: Contenitori e Divisioni
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

### MODULO 2: CSS - Stile e Design (22 ore)
**Stato:** In sviluppo - Approccio pratico e graduale
**Icona:** 🎨
**Colore:** Viola (bg-purple-500)
**Target:** Trasformare pagine HTML grezze in siti visivamente accattivanti
**Filosofia:** Imparare facendo - ogni lezione introduce poche proprietà, massima pratica

---

## STRUTTURA COMPLETA MODULO 2 CSS - APPROCCIO PRATICO

**IMPORTANTE:** Gli studenti usano VS Code. Ogni lezione deve avere esercizi pratici con file HTML e CSS reali.

### BLOCCO 1: FONDAMENTI - Iniziare a Colorare! (6 ore - 4 lezioni)

#### 📝 LEZIONE 1: Il Primo Stile
**Durata:** 1.5 ore
**Difficoltà:** Facile
**Argomenti:**
- Cos'è il CSS e perché serve (prima/dopo visivo)
- I 3 metodi: inline, internal (`<style>`), external (`.css` file)
- Sintassi base: `selettore { proprietà: valore; }`
- Come collegare file CSS: `<link rel="stylesheet" href="style.css">`
- Browser DevTools (F12) - vedere e modificare CSS live
- **Prima proprietà pratica: `color` e `background-color`**
- Esempi con vs senza CSS

**Proprietà insegnate:** `color`, `background-color`
**Esercizio VS Code:** Creare `index.html` e `style.css`, collegare, colorare h1 e paragrafi
**Sfida:** Pagina colorata completa con header, contenuto, footer

---

#### 📝 LEZIONE 2: Selettore Elemento + Primi Colori
**Durata:** 1.5 ore
**Difficoltà:** Facile
**Argomenti:**
- **Solo selettore elemento** (`h1`, `p`, `div`, `body`, `a`)
- Applicare stili a tutti gli elementi di un tipo
- Proprietà colore: nomi (`red`, `blue`, `green`)
- Proprietà colore: hex (`#FF0000`, `#00FF00`, `#0000FF`)
- `border` base (width, style, color)

**Proprietà insegnate:** selettore elemento, `color`, `background-color`, `border`
**Esercizio VS Code:** Pagina con 3 sezioni, ognuna con colori diversi usando solo selettori elemento
**Sfida:** Mini-sito colorato (home, about) senza usare classi

---

#### 📝 LEZIONE 3: Classi + Dimensioni Testo
**Durata:** 1.5 ore
**Difficoltà:** Facile
**Argomenti:**
- Il selettore `.classe` - cos'è e perché serve
- Riutilizzabilità: stessa classe su più elementi
- Quando usare classe vs elemento
- `font-size` (px per ora)
- `font-weight` (`normal`, `bold`, numeri 100-900)
- `text-align` (`left`, `center`, `right`)

**Proprietà insegnate:** `.classe`, `font-size`, `font-weight`, `text-align`
**Esercizio VS Code:** Creare classi `.importante`, `.evidenziato`, `.grande` e usarle su vari elementi
**Sfida:** Pagina articolo con classi per titoli, testo normale, citazioni, note

---

#### 📝 LEZIONE 4: ID + Spaziatura Base
**Durata:** 1.5 ore
**Difficoltà:** Facile
**Argomenti:**
- Il selettore `#id` - elementi unici
- Differenza classe vs ID (riutilizzabile vs unico)
- Quando usare ID (header, footer, nav, main-content)
- `padding` (valori semplici per ora - un valore)
- `margin` (valori semplici - un valore)
- `margin: auto` per centrare

**Proprietà insegnate:** `#id`, `padding`, `margin`
**Esercizio VS Code:** Layout con #header, #nav, #content, #footer con padding e margin
**Sfida:** Pagina portfolio con sezioni uniche identificate da ID

---

### BLOCCO 2: STILE DEL TESTO (4.5 ore - 3 lezioni)

#### 📝 LEZIONE 4: Colori
**Durata:** 1.5 ore
**Difficoltà:** Facile
**Argomenti:**
- Nomi colori (`red`, `blue`, `hotpink`, etc.)
- Hex (`#FF0000`, `#F00`)
- RGB `rgb(255, 0, 0)`
- RGBA con trasparenza `rgba(255, 0, 0, 0.5)`
- HSL `hsl(0, 100%, 50%)`
- HSLA con trasparenza
- `currentColor` e `inherit`
- Gradienti: `linear-gradient()`, `radial-gradient()`
- Palette colori e teoria dell'armonia cromatica

**Esercizio:** Creare palette a 5 colori e applicarla
**Sfida:** Design con gradienti complessi

---

#### 📝 LEZIONE 5: Tipografia
**Durata:** 1.5 ore
**Difficoltà:** Media
**Argomenti:**
- `font-family` e web safe fonts
- Google Fonts (import e utilizzo)
- `font-size` (px, em, rem, %)
- `font-weight` (bold, 100-900)
- `font-style` (italic, normal, oblique)
- `text-align`, `text-decoration`, `text-transform`
- `line-height` e leggibilità
- `letter-spacing`, `word-spacing`
- `text-shadow`
- Accessibilità e contrasto testi

**Esercizio:** Tipografia articolo blog leggibile
**Sfida:** Heading system completo con gerarchia visiva

---

#### 📝 LEZIONE 6: Unità di Misura
**Durata:** 1 ora
**Difficoltà:** Media
**Argomenti:**
- `px` (assoluta - pixel)
- `%` (relativa al genitore)
- `em` (relativa al font-size del genitore)
- `rem` (relativa al root - html)
- `vw`, `vh` (viewport width/height)
- `vmin`, `vmax`
- `ch` (larghezza carattere), `ex` (altezza x)
- Quando usare quale unità (best practice)
- Responsive sizing con unità fluide

**Esercizio:** Confronto pratico di tutte le unità
**Sfida:** Layout responsive con mix di unità

---

### BLOCCO 3: Box Model e Layout Base (5 ore)

#### 📝 LEZIONE 7: Box Model
**Durata:** 2 ore
**Difficoltà:** Media
**Argomenti:**
- Concetto fondamentale del box model
- Content, padding, border, margin (dall'interno all'esterno)
- Visualizzare box model nei DevTools
- `box-sizing: border-box` vs `content-box`
- `margin: auto` per centrare orizzontalmente
- Margin collapsing (cosa succede tra margini verticali)
- Padding vs margin - quando usare quale
- `width`, `height`, `max-width`, `min-height`, `max-height`

**Esercizio:** Card con spacing perfetto
**Sfida:** Layout a 3 colonne con box model

---

#### 📝 LEZIONE 8: Bordi e Sfondi
**Durata:** 1.5 ore
**Difficoltà:** Facile
**Argomenti:**
- `border`: width, style (solid, dashed, dotted), color
- `border-radius` per angoli arrotondati
- Bordi individuali (`border-top`, `border-right`, etc.)
- `background-color`
- `background-image` e `url()`
- `background-size` (cover, contain, custom)
- `background-position` (center, top left, etc.)
- `background-repeat` (no-repeat, repeat-x, etc.)
- `background-attachment` (fixed, scroll)
- Sfondi multipli

**Esercizio:** Hero section con background image
**Sfida:** Pattern decorativo con gradienti e immagini

---

#### 📝 LEZIONE 9: Display e Posizionamento Base
**Durata:** 1.5 ore
**Difficoltà:** Media
**Argomenti:**
- `display: block` (occupa tutta la larghezza)
- `display: inline` (in linea con il testo)
- `display: inline-block` (meglio di entrambi)
- `display: none` (nasconde completamente)
- `visibility: hidden` vs `display: none`
- `position: static` (default)
- `position: relative` (relativo a sé stesso)
- `position: absolute` (relativo al primo genitore posizionato)
- `position: fixed` (relativo al viewport)
- `position: sticky` (mix relative/fixed)
- `z-index` e stacking context
- `top`, `right`, `bottom`, `left`

**Esercizio:** Menu sticky e modal popup
**Sfida:** Layout complesso con elementi sovrapposti

---

### BLOCCO 4: Layout Moderni (5 ore)

#### 📝 LEZIONE 10: Flexbox Parte 1
**Durata:** 2 ore
**Difficoltà:** Media
**Argomenti:**
- Cos'è Flexbox e quando usarlo (layout 1D - riga o colonna)
- `display: flex` (attiva Flexbox sul container)
- `flex-direction` (row, column, row-reverse, column-reverse)
- `justify-content` (main axis): flex-start, center, space-between, space-around
- `align-items` (cross axis): flex-start, center, stretch
- `flex-wrap` (wrap, nowrap)
- `gap` (spazio tra elementi)
- Esempi pratici: navbar orizzontale, card layout

**Esercizio:** Navbar responsive con Flexbox
**Sfida:** Card grid con spacing perfetto

---

#### 📝 LEZIONE 11: Flexbox Parte 2
**Durata:** 1.5 ore
**Difficoltà:** Media
**Argomenti:**
- `align-content` (per righe multiple)
- `align-self` (override align-items per singolo elemento)
- `flex-grow` (espansione elemento)
- `flex-shrink` (contrazione elemento)
- `flex-basis` (dimensione base)
- Shorthand `flex` (grow shrink basis)
- `order` (riordinare elementi)
- Casi d'uso avanzati
- Centrare perfettamente con Flexbox
- Layout patterns comuni (holy grail, sidebar)

**Esercizio:** Dashboard layout con sidebar flessibile
**Sfida:** Footer sticky con Flexbox

---

#### 📝 LEZIONE 12: CSS Grid Parte 1
**Durata:** 1.5 ore
**Difficoltà:** Difficile
**Argomenti:**
- Cos'è Grid e quando usarlo (layout 2D - righe E colonne)
- `display: grid`
- `grid-template-columns` (definire colonne)
- `grid-template-rows` (definire righe)
- Unità `fr` (fraction)
- `repeat()` per pattern ripetuti
- `minmax()` per flessibilità
- `gap` (`row-gap`, `column-gap`)
- Grid vs Flexbox - quando usare cosa
- Esempi pratici: gallery immagini

**Esercizio:** Gallery fotografica 3 colonne
**Sfida:** Layout responsive con auto-fit

---

### BLOCCO 5: Responsive e Animazioni (3.5 ore)

#### 📝 LEZIONE 13: Responsive Design
**Durata:** 2 ore
**Difficoltà:** Media
**Argomenti:**
- Cos'è il responsive design
- Mobile-first approach
- Media queries `@media`
- Breakpoints comuni (320px mobile, 768px tablet, 1024px desktop)
- `max-width` vs `min-width` nelle media queries
- Immagini responsive (`max-width: 100%`)
- Viewport units per fluid sizing
- `clamp()` per sizing fluido
- Testare responsive (DevTools device toolbar)
- Best practice mobile-first

**Esercizio:** Convertire layout fisso in responsive
**Sfida:** Sito completo mobile-first con 3 breakpoint

---

#### 📝 LEZIONE 14: Transizioni e Animazioni
**Durata:** 1.5 ore
**Difficoltà:** Media
**Argomenti:**
- `transition` (property, duration, timing-function, delay)
- Timing functions (ease, linear, ease-in-out)
- Effetti hover con transition
- `transform`: translate, rotate, scale, skew
- Combinare trasformazioni multiple
- Keyframes `@keyframes`
- `animation` (name, duration, timing-function, iteration-count, direction)
- Animazioni all'ingresso (fade-in, slide-in)
- Performance (transform e opacity vs altre proprietà)
- `will-change` per ottimizzazione

**Esercizio:** Button con effetti hover animati
**Sfida:** Loading spinner e animazioni complesse

---

### BLOCCO 6: CSS Avanzato (4 ore)

#### 📝 LEZIONE 15: CSS Avanzato
**Durata:** 1.5 ore
**Difficoltà:** Difficile
**Argomenti:**
- CSS Variables (custom properties): `--colore-primario`
- `var()` per usare variabili
- Scope delle variabili (`:root` vs locale)
- `calc()` per calcoli (`calc(100% - 20px)`)
- Filtri CSS: blur, brightness, contrast, grayscale, hue-rotate
- Ombre: `box-shadow`, `text-shadow` (multiple)
- `opacity` e differenza con `rgba()`
- `overflow` (hidden, scroll, auto, clip)
- `object-fit` per immagini (cover, contain)
- `cursor` personalizzati
- `clip-path` per forme custom

**Esercizio:** Theme switcher con CSS variables
**Sfida:** Card con effetti filtro e ombre complesse

---

#### 📝 LEZIONE 16: CSS Grid Parte 2
**Durata:** 1 ora
**Difficoltà:** Difficile
**Argomenti:**
- `grid-template-areas` (layout nominali)
- Grid line naming
- `grid-column`, `grid-row` (posizionamento esplicito)
- Spanning cells (`grid-column: span 2`)
- `grid-auto-flow` (auto-placement)
- `grid-auto-rows`, `grid-auto-columns`
- Layout complessi (magazine, dashboard)
- Nested grids

**Esercizio:** Dashboard con grid areas
**Sfida:** Magazine layout complesso

---

#### 📝 LEZIONE 17: Best Practice e Ottimizzazione
**Durata:** 1.5 ore
**Difficoltà:** Media
**Argomenti:**
- Organizzazione CSS (file structure)
- Naming conventions (BEM basics: Block Element Modifier)
- Commenti CSS utili
- CSS reset vs normalize.css
- Performance CSS (evitare selettori complessi)
- `will-change` per animazioni
- Critical CSS
- Debugging errori CSS comuni
- Validazione CSS (W3C Validator)
- Browser compatibility e prefixes (-webkit, -moz)
- DevTools per debugging avanzato

**Esercizio:** Refactoring CSS con BEM
**Sfida:** Audit performance e ottimizzazione

---

## RIEPILOGO MODULO 2

**Totale:** 17 lezioni - 22 ore

### Distribuzione Difficoltà:
- **Facile:** 4 lezioni (1, 2, 4, 8)
- **Media:** 10 lezioni (3, 5, 6, 7, 9, 10, 11, 13, 14, 17)
- **Difficile:** 3 lezioni (12, 15, 16)

### Distribuzione per Blocco:
1. **Fondamenti CSS:** 4.5 ore (3 lezioni)
2. **Colori e Testo:** 4 ore (3 lezioni)
3. **Box Model e Layout Base:** 5 ore (3 lezioni)
4. **Layout Moderni:** 5 ore (3 lezioni)
5. **Responsive e Animazioni:** 3.5 ore (2 lezioni)
6. **CSS Avanzato:** 4 ore (3 lezioni)

### Progressione Pedagogica:
1. Sintassi base → Capire come funziona CSS
2. Selettori → Scegliere cosa stilizzare
3. Stile visuale → Colori, font, bellezza
4. Spazio e struttura → Box model, layout
5. Layout moderni → Flexbox e Grid
6. Adattabilità → Responsive e animazioni
7. Maestria → Tecniche avanzate e best practice

### Elementi Didattici per Ogni Lezione:
- **LessonPreview interattivi** con CSS applicato in tempo reale
- **CodeExample** con HTML + CSS side-by-side
- **Exercise** guidato step-by-step
- **Challenge** creativa (es: card prodotto, navbar responsive)
- **Checklist** auto-valutazione
- **Box "Trucco CSS"** con tips pratici
- **Comparazioni visive** (prima/dopo applicazione CSS)

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
