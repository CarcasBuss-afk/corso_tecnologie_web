# LOG PROGETTO CORSO WEB - Manuale Didattico

**Data inizio:** 20 Ottobre 2025
**Ultimo aggiornamento:** 30 Ottobre 2025 - Sessione 12 Lezione 9 Display
**Piattaforma:** Next.js 15 + Tailwind CSS 4 + Vercel
**Target:** Studenti 14 anni - 80 ore annuali

---

## 📅 CHANGELOG SESSIONE 12 (30 Ottobre 2025) - LEZIONE 9 CSS: DISPLAY E LAYOUT

### 🎉 Creazione Lezione 9: Display e Layout Base

**Contesto:**
Nelle lezioni 7 e 8 gli studenti hanno creato card verticali con la nota "Nella prossima lezione imparerai come affiancarle orizzontalmente!". Oggi è arrivato quel momento!

**Obiettivi della Lezione:**
- ✅ Insegnare la proprietà `display` e il "flusso" del documento
- ✅ Spiegare `block`, `inline`, `inline-block`, `none`
- ✅ Permettere agli studenti di affiancare elementi orizzontalmente
- ✅ Creare layout a 2-3 colonne con card

**Contenuti Sviluppati:**

**1. Introduzione al Concetto di Display**
- Spiegazione del "flusso del documento"
- I 4 valori principali di display
- Quando usare ciascuno

**2. display: block**
- Come funziona (occupa 100% larghezza, va a capo)
- Elementi block di default (div, p, h1-h6, section, etc.)
- Esempio visivo con 3 box colorati verticali
- LessonPreview interattivo

**3. display: inline**
- Come funziona (sulla stessa riga, solo spazio necessario)
- Limitazioni (no width/height, margin/padding verticali problematici)
- Elementi inline di default (span, a, strong, em, img)
- Esempio visivo con 3 elementi sulla stessa riga
- Warning box sul problema delle dimensioni

**4. display: inline-block (Il Migliore!)**
- Combina vantaggi di block e inline
- Permette width, height, margin, padding completi
- Perfetto per affiancare card
- Esempio con 3 card affiancate
- Box "Quando usare inline-block"

**5. Confronto Visivo dei 3 Tipi**
- LessonPreview con sezioni separate per block, inline, inline-block
- Tabella di confronto completa con tutte le proprietà
- Chiara distinzione visiva tra i comportamenti

**6. display: none**
- Nascondere elementi completamente
- Differenza tra nascondere e occupare spazio
- Esempi pratici (menu mobile, messaggi errore, etc.)

**7. Applicazione Pratica: Card Orizzontali**
- 🎉 Finalmente card affiancate!
- Tecnica: inline-block + width 30% + margin
- Trucco importante: `vertical-align: top`
- Container con `text-align: center`

**8. Esempio Completo: Card Prodotto**
- Combina tutti i concetti delle lezioni precedenti:
  - display: inline-block (Lezione 9)
  - border + border-radius (Lezione 8)
  - background-image (Lezione 8)
  - :hover (Lezione 6)
  - box-sizing (Lezione 7)
- Card professionali con immagine, contenuto, bottone
- Hover sulla card (cambio border-color)
- Hover sul bottone (cambio background-color)

**9. Esercizio Guidato**
- Galleria servizi con 3 card orizzontali
- 20 step progressivi
- Focus su: inline-block, width 30%, vertical-align top
- Test responsive (card vanno a capo automaticamente)

**10. Challenge Avanzato**
- Shop e-commerce con 4 card prodotto
- Immagini di sfondo con gradient o url
- Prezzi, descrizioni, bottoni
- Hover effects multipli
- Extra: badge "SCONTO 20%" con margin/padding creativi

**Coerenza Didattica (REGOLA FONDAMENTALE rispettata):**
- ✅ Solo CSS già insegnato nelle lezioni 1-8
- ✅ Nessun flexbox, grid, position (verranno dopo)
- ✅ Nessun transform, transition (già rimossi lezione 8)
- ✅ Nessun selettore avanzato (solo elemento, class, id)
- ✅ Tutti gli esempi replicabili dagli studenti con conoscenze attuali

**Progressione Pedagogica:**
```
Lezione 7: Box Model → margin, padding, border
Lezione 8: Bordi + Sfondi → border-radius, background-image
Lezione 9: Display → FINALMENTE affiancare elementi! 🎉
```

**Statistiche:**
- **File creato:** `app/moduli/modulo-2-css/lezione-9-display-layout/page.tsx`
- **Righe di codice:** ~1100 righe
- **LessonPreview:** 5 demo interattivi
- **Esercizi:** 1 guidato + 1 challenge
- **Durata stimata:** 2 ore
- **Difficoltà:** Media

**File Modificati:**
- ✅ Creato: `app/moduli/modulo-2-css/lezione-9-display-layout/page.tsx`
- ✅ Aggiornato: `lib/moduli.ts` (aggiunta Lezione 9 all'elenco)

**Impatto:**
- 🎯 Gli studenti possono finalmente creare layout orizzontali
- 🎯 Le card non sono più solo verticali
- 🎯 Capiscono il flusso del documento HTML
- 🎯 Sanno quando usare block, inline, inline-block
- 🎯 Possono creare gallerie, menu, griglie di prodotti

**Prossimi Passi:**
- Lezione 10: Position (relative, absolute, fixed)
- Lezione 11: Flexbox (layout moderno)
- Lezione 12: Grid (layout bidimensionale)

---

## 📅 CHANGELOG SESSIONE 11 (29 Ottobre 2025) - Parte 3 (FIX E MIGLIORAMENTI)

### 1. Fix Visibilità Testo - Lezione 7 CSS: Box Model

**Problema Segnalato dall'Utente:**
- ❌ Nella sezione "Quando Usare Cosa?" (riquadro verde) i riquadri bianchi avevano testo illeggibile
- ❌ Testo bianco su sfondo bianco semi-trasparente (`bg-white bg-opacity-20`)
- ❌ Eredità del colore `text-white` dal contenitore genitore verde

**Soluzione Implementata:**
- ✅ Aggiunto `text-gray-900` ai titoli in grassetto nei riquadri bianchi
- ✅ Aggiunto `text-gray-800` ai paragrafi nei riquadri bianchi
- ✅ Mantenuto `text-white` esplicito per i tag `<code>` (sfondo nero)

**Commit:** `b3e3802` - Fix: Risolto problema visibilità testo in Lezione 7 Box Model

### 2. Miglioramenti Didattici - Lezione 7 CSS: Box Model

**Problemi Identificati dall'Utente:**
- ❌ Termine "responsive" usato senza spiegazione
- ❌ Sezione box-sizing spiegata teoricamente ma senza output visivo

**Miglioramenti Implementati:**

**A) Spiegazione del termine "Responsive"**
- ✅ Aggiunto box informativo blu prima della grid width/height
- ✅ Definizione: "Un sito responsive si adatta automaticamente alle dimensioni dello schermo"
- ✅ Esempi visivi: smartphone (stretto) → tablet (medio) → desktop (largo)
- ✅ Statistica: "oltre il 60% degli utenti naviga da mobile"
- ✅ Ora gli studenti capiscono il concetto prima di usare max-width

**B) Demo Visivo border-box vs content-box**
- ✅ Aggiunto LessonPreview interattivo dopo il confronto testuale
- ✅ Due box side-by-side:
  - Box rosso (content-box): width 200px → larghezza totale 250px (padding/border aggiunti fuori)
  - Box verde (border-box): width 200px → larghezza totale 200px (padding/border inclusi)
- ✅ Etichette con calcoli espliciti sotto ogni box
- ✅ Nota finale gialla: "entrambi hanno width: 200px, ma il box rosso è più largo!"
- ✅ Gli studenti VEDONO la differenza reale, non solo teoria

**File Modificato:**
- `app/moduli/modulo-2-css/lezione-7-box-model/page.tsx` (+89 righe)

**Commit:** `af49c0a` - Feature: Migliorata Lezione 7 - Spiegazione responsive + Demo visivo box-sizing

### 3. Miglioramento Continuità Didattica - Lezione 8 CSS: Bordi e Sfondi

**Problema Identificato dall'Utente:**
- ❌ La proprietà `border` era già stata introdotta nella Lezione 2 in modo semplice
- ❌ Nella Lezione 8 si riprende `border` per approfondire, ma senza riferimento alla lezione precedente
- ❌ Rischio di confusione negli studenti: "Ma questo non l'avevamo già visto?"

**Soluzione Implementata:**
- ✅ Aggiunto box informativo blu all'inizio della sezione border (Lezione 8)
- ✅ Richiamo esplicito: "Nella Lezione 2 hai già visto border con lo stile base solid"
- ✅ Contestualizzazione: "Oggi approfondiamo: scoprirai tutti gli stili disponibili"
- ✅ Migliora il flusso didattico e la continuità tra le lezioni

**File Modificato:**
- `app/moduli/modulo-2-css/lezione-8-bordi-sfondi/page.tsx` (linee 68-76)

**Commit:** `e66941b` - Feature: Aggiunto richiamo Lezione 2 per evitare confusione su border

### 4. Box Richiamo Lezioni Precedenti - Lezione 7 CSS: Box Model

**Miglioramento Implementato:**
- ✅ Aggiunto box informativo blu "📌 Ti Ricordi?" all'inizio della Lezione 7
- ✅ Richiama border (Lezione 2), padding e margin (Lezione 4)
- ✅ Contestualizza: "Oggi capirai come funzionano davvero insieme"
- ✅ Migliora continuità didattica tra le lezioni

**Commit:** `de0a132` - Feature: Aggiunto richiamo lezioni precedenti in Lezione 7 Box Model

### 5. Coerenza Didattica Esercizio - Lezione 7 CSS: Box Model

**Problema Identificato dall'Utente:**
- ❌ L'esercizio della Lezione 7 chiedeva di affiancare 3 colonne con `display inline-block`
- ❌ Incoerente: display non ancora insegnato (arriverà nella Lezione 9)
- ❌ Mancava la nota esplicativa come nella Lezione 8

**Soluzione Implementata:**
- ✅ Aggiunta nota iniziale: "📝 NOTA: Le 3 card saranno una sotto l'altra (verticali). Nella prossima lezione imparerai come affiancarle orizzontalmente!"
- ✅ Rimosso `display inline-block` e `width 30%`
- ✅ Card verticali al 100% larghezza con `margin-bottom` per separazione
- ✅ Cambiato "colonne" → "card" per coerenza terminologica con Lezione 8
- ✅ max-width 800px invece di 1200px (più adatto per layout verticale)
- ✅ Ora coerente con l'approccio didattico progressivo

**File Modificato:**
- `app/moduli/modulo-2-css/lezione-7-box-model/page.tsx` (esercizio guidato)

**Commit:** `7bbb5f5` - Feature: Aggiunta nota card verticali in Lezione 7 esercizio

### 6. Miglioramenti Precisione e UX - Lezione 8 CSS: Bordi e Sfondi

**Problemi Identificati dall'Utente:**
- ❌ Richiamo Lezione 2 impreciso: diceva solo "solid" ma erano stati visti anche dashed e dotted
- ❌ Sintassi border con frecce ASCII disallineate e poco chiare

**Soluzioni Implementate:**

**A) Correzione Richiamo Lezione 2**
- Prima: "hai già visto border con lo stile base solid"
- Ora: "hai già visto border con alcuni stili base: solid, dashed, dotted"
- ✅ Più accurato rispetto ai contenuti effettivi della Lezione 2

**B) Visualizzazione Sintassi Border**
- ❌ Rimosse frecce ASCII disallineate: `/*  ↑    ↑      ↑ */`
- ✅ Aggiunta sezione "Anatomia del border" con 3 blocchi colorati visivi:
  - Blocco blu: "3px" → larghezza
  - Blocco verde: "solid" → stile
  - Blocco viola: "#3498DB" → colore
- ✅ Grid responsive 3 colonne, molto più chiara e intuitiva

**File Modificato:**
- `app/moduli/modulo-2-css/lezione-8-bordi-sfondi/page.tsx` (linee 68-108)

**Commit:** `2a66fe6` - Fix: Migliorata precisione e chiarezza Lezione 8 - Sezione border

### 7. Ristrutturazione Didattica Completa - Lezione 8 CSS: Bordi e Sfondi (OPZIONE B)

**Problema Identificato dall'Utente:**
- ❌ Shorthand `border` usata da subito senza spiegazione
- ❌ Concetto "shorthand" spiegato solo alla fine della lezione
- ❌ Studenti confusi: usavano una sintassi senza capire cos'è
- ❌ Incoerenza didattica: prima uso → poi spiegazione

**Decisione Presa:**
- Implementazione **Opzione B** (ristrutturazione media)
- Flow didattico: proprietà separate → problema → shorthand → concetto generale
- Stimato 3-4 ore di lavoro, ~200-250 righe modifiche

**Ristrutturazione Implementata:**

**1. 🔧 Nuova Sezione: "Le 3 Proprietà Separate del Bordo"**
- Grid 3 colonne: border-width, border-style, border-color
- Esempio pratico con 3 proprietà separate
- LessonPreview interattivo per vedere il risultato
- Box giallo "Il Problema": "Scrivere 3 righe è lungo e ripetitivo!"
- ✅ Gli studenti CAPISCONO cosa compone un bordo

**2. ⚡ Sezione Modificata: "La Scorciatoia: border (shorthand)"**
- Introduce il concetto di shorthand naturalmente
- Mostra equivalenza: `border: 3px solid red` = 3 proprietà separate
- "Anatomia della shorthand" con blocchi colorati (già presente)
- Box viola "Perché la Shorthand è Meglio": veloce, leggibile, comune, meno errori
- Dichiarazione: "D'ora in poi useremo sempre la shorthand!"
- ✅ Gli studenti CAPISCONO perché la shorthand è meglio

**3. ⚡ Sezione Ampliata: "Shorthand: Il Concetto Generale nel CSS"**
- Box viola: definizione chiara "shorthand properties = più proprietà in una riga"
- Grid comparativa 2 colonne:
  - border (già vista): 3 proprietà → 1 riga
  - background (la più complessa): 8 proprietà → 1 riga
- Sintassi completa background (invariata)
- Box verde finale: "Il Concetto Generale delle Shorthand"
  - Lista tutte le shorthand viste nel corso
  - Richiama padding e margin (Lezione 4)
  - Anticipa font (prossime lezioni)
  - **Regola d'Oro:** "Impara prima le proprietà separate per capire, poi usa shorthand per velocità"
- ✅ Gli studenti CAPISCONO il pattern generale

**Benefici Didattici:**
- ✅ Progressione logica: semplice → complesso → scorciatoia
- ✅ Studenti capiscono PERCHÉ shorthand è utile (non solo COME usarla)
- ✅ Concetto "shorthand" introdotto naturalmente, non "buttato alla fine"
- ✅ Coerenza: stesso approccio per border e background
- ✅ Preparazione: ora sanno riconoscere shorthand in futuro
- ✅ Riduce confusione: "Ah ecco, prima abbiamo visto le basi!"

**Statistiche:**
- +217 righe, -10 righe (netto: +207 righe)
- Tempo effettivo: ~2 ore
- 3 nuove sezioni didattiche
- 1 LessonPreview aggiunto
- 4 box informativi colorati

**File Modificato:**
- `app/moduli/modulo-2-css/lezione-8-bordi-sfondi/page.tsx` (+207 righe nette)

**Commit:** `300c498` - Refactor: Ristrutturata Lezione 8 - Approccio didattico proprietà separate → shorthand

---

## 📅 CHANGELOG SESSIONE 11 (29 Ottobre 2025) - Parte 2

### Nuova Lezione Creata - Lezione 8 CSS: Bordi e Sfondi

**Creazione Completa:**
- ✅ **1200+ righe** di contenuto didattico
- ✅ **Durata:** 1.5 ore
- ✅ **Difficoltà:** Facile
- ✅ Aggiunta a `lib/moduli.ts` per navigazione sidebar

**Argomenti Insegnati - Decorazioni Visive:**
1. **Bordi Personalizzati (border):**
   - Sintassi: width style color (es: 3px solid #3498DB)
   - 6 stili: solid, dashed, dotted, double, groove, ridge
   - Bordi individuali: border-top, border-right, border-bottom, border-left
   - Trucco: border-bottom per linea sotto titoli

2. **border-radius - Angoli Arrotondati:**
   - 5-10px per card e box moderni
   - 20-30px per bottoni pillola
   - 50% per cerchi perfetti (avatar, icone)
   - Quasi tutti i siti moderni usano border-radius

3. **background-image - Immagini di Sfondo:**
   - Sintassi: url('percorso/immagine.jpg')
   - Percorsi relativi e assoluti
   - Hero section con immagini

4. **background-size - Controllo Dimensione:**
   - cover: copre tutto (può tagliare) - meglio per hero
   - contain: immagine intera (spazi vuoti possibili) - meglio per loghi
   - 100% 100%: riempi esattamente (può deformare)

5. **background-position - Posizionamento:**
   - center (default), top, bottom, left, right
   - Combinazioni: top right, bottom left
   - Percentuali e pixel precisi

6. **background-repeat - Ripetizione:**
   - repeat (default): si ripete ovunque
   - no-repeat: immagine singola (più usato)
   - repeat-x: solo orizzontale
   - repeat-y: solo verticale

7. **background-attachment - Effetto Parallasse:**
   - scroll (default): sfondo scrolla con la pagina
   - fixed: sfondo fermo (effetto parallax wow!)

8. **Shorthand background:**
   - Sintassi: color image position/size repeat attachment
   - Esempio: url('foto.jpg') center/cover no-repeat
   - Slash (/) obbligatorio tra position e size

**Struttura Pedagogica Applicata:**
- ✅ Grid 3x2 stili bordo con esempi visivi
- ✅ Grid 2x2 per border-radius (0px, 8px, 20px, 50%)
- ✅ Confronto visivo cover vs contain side-by-side
- ✅ **7 LessonPreview interattivi** con sfondi reali
- ✅ Grid 4 colonne per background-position
- ✅ Grid 2x2 per background-repeat
- ✅ Card prodotto finale con tutti i concetti applicati

**Contenuti Pratici:**
- ✅ Esempio 1: Box con bordi solid, dashed, dotted
- ✅ Esempio 2: Box con 4 bordi diversi su ogni lato
- ✅ Esempio 3: border-radius da 0px a 50% (cerchio)
- ✅ Esempio 4: Hero section con background-image
- ✅ Esempio 5: Confronto cover vs contain
- ✅ Esempio 6: Hero perfetta con tutti i parametri
- ✅ Esempio 7: Card prodotto professionale completa
- ✅ Tutti gli esempi con HTML + CSS side-by-side

**Esercizi e Sfide:**
- ✅ **Exercise:** Portfolio con bordi e sfondi (15 step)
  - Hero con background-image + border-radius
  - Sezione con border dashed
  - 3 card con immagini di sfondo
  - Bottoni pillola (border-radius 25px)
  - Footer con border-top
  - Hover su tutte le card
- ✅ **Challenge:** Sito multi-sezione con parallasse (15 requisiti)
  - 5 sezioni alternate (testo → parallax → testo)
  - background-attachment: fixed per effetto parallax
  - Bordi personalizzati su ogni sezione
  - Almeno 3 border-radius diversi
  - Hero section completa
  - Responsive con max-width
- ✅ **Checklist:** 15 punti auto-valutazione

**Highlights Didattici Speciali:**
- 🎨 **Grid Stili Bordo**: 6 tipi visualizzati con esempi reali
- ⭕ **Magia border-radius**: Da quadrato a cerchio in 4 step
- 📐 **cover vs contain**: Confronto side-by-side per capire differenze
- 🌄 **Hero Section Perfetta**: Template completo con tutti i parametri
- 📌 **Effetto Parallasse**: background-attachment: fixed spiegato
- ⚡ **Shorthand Potente**: Tutte le proprietà in una riga

**Sezione Riepilogo Completa:**
- ✅ **Riepilogo Selettori CSS (3)**: elemento, .classe, #id
- ✅ **Riepilogo Pseudo-classi (5)**: :link, :visited, :hover, :active, :focus
- ✅ **Riepilogo Unità (6)**: px, %, em, rem, vw, vh
- ✅ **Riepilogo Proprietà CSS (30 totali)**:
  - Lezione 1-2: color, background-color, border
  - Lezione 3: font-size, font-weight, text-align
  - Lezione 4: padding, margin, width
  - Lezione 5: font-family, font-style, text-decoration, text-transform, letter-spacing, word-spacing
  - Lezione 6: cursor, transition
  - Lezione 7: box-sizing, max-width, min-height
  - **Lezione 8 (9 NUOVE)**: border-radius, border-top/right/bottom/left, background-image, background-size, background-position, background-repeat, background-attachment ✨
- ✅ **Preview Prossima Lezione**: Display e Posizionamento - block vs inline, position!

**Principi Pedagogici Applicati:**
- ✅ Esempi visuali immediati per ogni concetto
- ✅ Confronti side-by-side (cover vs contain)
- ✅ Progressione da semplice a complesso
- ✅ Card finale che combina tutti i concetti
- ✅ Trucchi pratici (border-bottom per titoli)
- ✅ Casi d'uso reali (hero section, parallax)

### File Creati/Modificati (Parte 2)
1. `/app/moduli/modulo-2-css/lezione-8-bordi-sfondi/page.tsx` - Lezione completa (1200+ righe)
2. `/lib/moduli.ts` - Aggiunta Lezione 8 al Modulo 2

### Commit Sessione 11 (Parte 2)
- Da committare: Feature: Lezione 8 CSS - Bordi e Sfondi completa

### Stato Modulo 2 CSS
**Progresso:** 8/17 lezioni implementate (47%)
- ✅ Lezione 1: Il Primo Stile
- ✅ Lezione 2: Selettore Elemento + Colori
- ✅ Lezione 3: Classi + Dimensioni Testo
- ✅ Lezione 4: ID + Spaziatura Base
- ✅ Lezione 5: Font e Decorazioni Testo
- ✅ Lezione 6: Link Interattivi e :hover + Unità
- ✅ Lezione 7: Box Model
- ✅ Lezione 8: Bordi e Sfondi (NUOVA - DECORAZIONI)
- ⏳ Lezione 9: Display e Posizionamento Base (prossima)
- ⏳ Lezioni 10-17: Da creare

**BLOCCO 3: Box Model e Layout Base** 🟡 2/3 completato
- ✅ Lezione 7: Box Model
- ✅ Lezione 8: Bordi e Sfondi
- ⏳ Lezione 9: Display e Posizionamento Base (ultima del blocco)

---

## 📅 CHANGELOG SESSIONE 11 (29 Ottobre 2025) - Parte 1

### Nuova Lezione Creata - Lezione 7 CSS: Box Model - Il Concetto Fondamentale

**Creazione Completa:**
- ✅ **1300+ righe** di contenuto didattico
- ✅ **Durata:** 2 ore
- ✅ **Difficoltà:** Media
- ✅ Aggiunta a `lib/moduli.ts` per navigazione sidebar

**Argomenti Insegnati - Concetto Più Importante del CSS:**
1. **I 4 Livelli del Box Model:**
   - Content - il contenuto vero e proprio (testo, immagini)
   - Padding - imbottitura interna (background visibile)
   - Border - bordo visibile attorno all'elemento
   - Margin - spazio esterno trasparente (separazione da altri elementi)

2. **box-sizing: border-box vs content-box:**
   - content-box (default): width include SOLO il content
   - border-box (MEGLIO): width include content + padding + border
   - Best practice: applicare `* { box-sizing: border-box; }` all'inizio del CSS

3. **Proprietà Dimensioni:**
   - width, height - dimensioni fisse
   - max-width - larghezza massima (responsive!)
   - min-width - larghezza minima
   - max-height - altezza massima
   - min-height - altezza minima (consigliato per flessibilità)

4. **Margin Collapsing:**
   - Fenomeno: margin verticali si "uniscono"
   - Viene usato il margin più grande (non si sommano!)
   - Solo margin verticali (top/bottom), non orizzontali
   - Non succede con padding/border intermedi

5. **DevTools per Visualizzare Box Model:**
   - F12 o Ctrl+Shift+I (Windows/Linux)
   - Cmd+Option+I (Mac)
   - Diagramma visivo con colori: content (blu), padding (verde), border (giallo), margin (arancione)

**Struttura Pedagogica Applicata:**
- ✅ Diagramma Box Model visivo a 4 livelli (matrioska CSS)
- ✅ Grid 2x2 per i 4 livelli con spiegazioni colorate
- ✅ **6 LessonPreview interattivi** con box model in azione
- ✅ Confronto visivo content-box vs border-box (grid 2 colonne)
- ✅ Spiegazione margin collapsing con esempi "aspettativa vs realtà"
- ✅ Grid 3x2 per proprietà width/height (6 varianti)
- ✅ Sezione DevTools con istruzioni multi-piattaforma
- ✅ Card completa come esempio finale con tutti i concetti

**Contenuti Pratici:**
- ✅ Esempio 1: Box con tutti e 4 i livelli visibili
- ✅ Esempio 2: Confronto box-sizing (content-box vs border-box)
- ✅ Esempio 3: Contenitore responsive con max-width
- ✅ Esempio 4: Margin collapsing visualizzato
- ✅ Esempio 5: Card professionale con box model perfetto
- ✅ Tutti gli esempi con HTML + CSS side-by-side

**Esercizi e Sfide:**
- ✅ **Exercise:** Layout a 3 colonne con box model (15 step)
  - box-sizing: border-box applicato universalmente
  - Container responsive con max-width
  - 3 colonne inline-block con width percentuale
  - Padding, border, margin corretti
  - Uso DevTools per verificare dimensioni
  - Sperimentazione live con DevTools
- ✅ **Challenge:** Dashboard completa con box model maestria (15 requisiti)
  - Header fixed, sidebar fixed, main content, footer
  - 6 card in grid 3x2
  - Tutti gli elementi con dimensioni precise
  - Uso consapevole margin collapsing (con commenti)
  - max-width per responsive
  - min-height per flessibilità
  - Zero scroll orizzontale
- ✅ **Checklist:** 15 punti auto-valutazione

**Highlights Didattici Speciali:**
- 📦 **Metafora Matrioska**: Box Model come scatole concentriche
- 🎯 **Best Practice Universale**: `* { box-sizing: border-box; }`
- 🔄 **Margin Collapsing Spiegato**: Con confronto aspettativa vs realtà
- 🔍 **DevTools Come Alleato**: Guida completa all'uso del Box Model diagram
- 📏 **Quando Usare Cosa**: max-width per responsive, min-height per flessibilità
- 💡 **Trucco Pro**: Hover sui valori nei DevTools per evidenziarli live

**Sezione Riepilogo Completa:**
- ✅ **Riepilogo Selettori CSS (3 totali)**: elemento, .classe, #id
- ✅ **Riepilogo Pseudo-classi (5)**: :link, :visited, :hover, :active, :focus
- ✅ **Riepilogo Unità (6)**: px, %, em, rem, vw, vh
- ✅ **Riepilogo Proprietà CSS (21 totali)**:
  - Lezione 1-2: color, background-color, border
  - Lezione 3: font-size, font-weight, text-align
  - Lezione 4: padding, margin, width
  - Lezione 5: font-family, font-style, text-decoration, text-transform, letter-spacing, word-spacing
  - Lezione 6: cursor, transition
  - **Lezione 7 (3 NUOVE)**: box-sizing, max-width, min-height ✨
- ✅ **Preview Prossima Lezione**: Bordi e Sfondi - border-radius, background-image, gradienti!

**Principi Pedagogici Applicati:**
- ✅ Metafora visiva efficace (matrioska per livelli concentrici)
- ✅ Diagrammi colorati per comprensione immediata
- ✅ Confronti "aspettativa vs realtà" per concetti controintuitivi
- ✅ DevTools integrato nella lezione come strumento di apprendimento
- ✅ Best practice insegnata subito (box-sizing: border-box)
- ✅ Progressione: semplice → complesso → caso d'uso reale

### File Creati/Modificati
1. `/app/moduli/modulo-2-css/lezione-7-box-model/page.tsx` - Lezione completa (1300+ righe)
2. `/lib/moduli.ts` - Aggiunta Lezione 7 al Modulo 2

### Commit Sessione 11
- Da committare: Feature: Lezione 7 CSS - Box Model completa

### Stato Modulo 2 CSS
**Progresso:** 7/17 lezioni implementate (41%)
- ✅ Lezione 1: Il Primo Stile
- ✅ Lezione 2: Selettore Elemento + Colori
- ✅ Lezione 3: Classi + Dimensioni Testo
- ✅ Lezione 4: ID + Spaziatura Base
- ✅ Lezione 5: Font e Decorazioni Testo
- ✅ Lezione 6: Link Interattivi e :hover + Unità
- ✅ Lezione 7: Box Model (NUOVA - FONDAMENTALE)
- ⏳ Lezione 8: Bordi e Sfondi (prossima)
- ⏳ Lezioni 9-17: Da creare

### Deployment
- ⏳ Build locale da testare
- ⏳ Commit da pushare su GitHub
- ⏳ Vercel deploy dopo push

### Principi Pedagogici Applicati Sessione 11
1. ✅ **Fondamentali Prima**: Box Model è IL concetto più importante, insegnato con cura
2. ✅ **Visualizzazione**: Diagrammi colorati a 4 livelli per comprensione immediata
3. ✅ **Tool Integration**: DevTools insegnato come parte dell'apprendimento
4. ✅ **Best Practice Immediate**: box-sizing: border-box dall'inizio
5. ✅ **Confronti Efficaci**: Aspettativa vs realtà per margin collapsing
6. ✅ **Metafore Potenti**: Matrioska russa per livelli concentrici

---

## 📅 CHANGELOG SESSIONE 10 (29 Ottobre 2025)

### Nuova Lezione Creata - Lezione 6 CSS: Link Interattivi e :hover + Unità Responsive

**Creazione Completa (Commit `19f3e9e`):**
- ✅ **1100+ righe** di contenuto didattico
- ✅ **Durata:** 1.5 ore
- ✅ **Difficoltà:** Media
- ✅ Aggiunta a `lib/moduli.ts` per navigazione sidebar

**Argomenti Insegnati - Parte 1: Pseudo-classi CSS (5 nuove):**
1. **:link** - Link non ancora visitato (stato default)
2. **:visited** - Link già visitato (da cronologia browser)
3. **:hover** - Mouse passa sopra l'elemento (effetti interattivi) ✨
4. **:active** - Elemento nel momento del click
5. **:focus** - Elemento selezionato con Tab (accessibilità keyboard)

**Argomenti Insegnati - Parte 2: Unità di Misura Responsive (6 unità):**
1. **px** - Pixel assoluti (dimensione fissa)
2. **%** - Percentuale relativa al genitore ✨
3. **em** - Relativa al font-size del genitore ✨
4. **rem** - Relativa al font-size della radice (html) ✨
5. **vw** - Viewport Width (% larghezza schermo) ✨
6. **vh** - Viewport Height (% altezza schermo) ✨

**Argomenti Insegnati - Parte 3: Proprietà Aggiuntive:**
- **cursor** - Cambiare aspetto puntatore mouse (pointer, help, wait, move, not-allowed)
- **transition** - Effetti smooth e graduali (durata, proprietà)
- Applicazione :hover su qualsiasi elemento (non solo link!)

**Struttura Pedagogica Applicata:**
- ✅ Grid 2x2 pseudo-classi principali (link, visited, hover, active)
- ✅ Box speciale :focus per accessibilità
- ✅ **Trucco mnemonico**: LoVe HAte per ordine corretto pseudo-classi
- ✅ Grid 3x2 unità di misura con emoji e spiegazioni
- ✅ **7 LessonPreview interattivi** con effetti hover funzionanti
- ✅ Comparazione px vs % vs em vs rem vs vw/vh
- ✅ Box cursor con 6 tipi di puntatore
- ✅ Grid 2 colonne: Best Practice vs Errori da Evitare

**Contenuti Pratici:**
- ✅ Esempio 1: Link con hover semplice (colore + background)
- ✅ Esempio 2: Link con tutte e 5 le pseudo-classi
- ✅ Esempio 3: Box cliccabile con cursor: pointer
- ✅ Esempio 4: Confronto unità (16px vs 1rem vs 1.5rem vs 50% vs 20vw)
- ✅ Esempio 5: Link con transition smooth (0.3s)
- ✅ Esempio 6: Card interattiva con hover completo
- ✅ Tutti gli esempi con HTML + CSS side-by-side

**Esercizi e Sfide:**
- ✅ **Exercise:** Menu navigazione interattivo (15 step)
  - Nav con 5 link, background colorato
  - Tutti gli stati hover/active/focus
  - Transition 0.3s smooth
  - H1 con font-size 3rem
  - Card con padding 2em e width 30%
  - Hover su card con effetti
- ✅ **Challenge:** Portfolio interattivo completo (14 requisiti)
  - Header responsive con rem
  - 6 card con width percentuale
  - 3 box con width in vw
  - Tutti gli effetti hover diversi
  - Footer 10vh
  - Cursor personalizzati
  - Focus per accessibilità
- ✅ **Checklist:** 15 punti auto-valutazione

**Highlights Didattici Speciali:**
- 🎯 **Ordine LoVe HAte**: Metodo mnemonico per ricordare ordine pseudo-classi
- 📱 **Mobile-first thinking**: Nota che hover non funziona su touch
- ♿ **Accessibilità**: Importanza di :focus per navigazione keyboard
- 🎬 **Transizioni**: Introduzione a effetti smooth (0.2-0.3s ideale)
- 📏 **Quando usare quale unità**: Guida pratica per ogni caso d'uso
- 🖱️ **UX dei cursori**: Quando cambiare cursor per feedback utente

**Sezione Riepilogo Completa:**
- ✅ **Riepilogo Selettori CSS (3 totali)**: elemento, .classe, #id
- ✅ **Riepilogo Pseudo-classi (5 NUOVE)**: :link, :visited, :hover, :active, :focus ✨
- ✅ **Riepilogo Unità (6 NUOVE)**: px, %, em, rem, vw, vh ✨
- ✅ **Riepilogo Proprietà CSS (18 totali)**:
  - Lezione 1-2: color, background-color, border
  - Lezione 3: font-size, font-weight, text-align
  - Lezione 4: padding, margin, width
  - Lezione 5: font-family, font-style, text-decoration, text-transform, letter-spacing, word-spacing
  - **Lezione 6 (2 NUOVE)**: cursor, transition ✨
- ✅ **Preview Prossima Lezione**: Box Model - il concetto più importante del CSS!

**Principi UX e Best Practice:**
- ✅ Sempre aggiungere transition per effetti smooth
- ✅ Durata ideale: 0.2s - 0.3s (non troppo lento)
- ✅ cursor: pointer su elementi cliccabili
- ✅ Mai rimuovere :focus (accessibilità!)
- ✅ Testare su mobile (hover non funziona su touch)
- ✅ Evitare cambi troppo drastici (disorientano)
- ✅ Non cambiare posizione elementi al hover

### File Creati/Modificati
1. `/app/moduli/modulo-2-css/lezione-6-hover-unita/page.tsx` - Lezione completa (1100+ righe)
2. `/lib/moduli.ts` - Aggiunta Lezione 6 al Modulo 2

### Commit Sessione 10
- `19f3e9e` - Feature: Lezione 6 CSS completa (hover + unità responsive)

### Stato Modulo 2 CSS
**Progresso:** 6/17 lezioni implementate (35%)
- ✅ Lezione 1: Il Primo Stile
- ✅ Lezione 2: Selettore Elemento + Colori
- ✅ Lezione 3: Classi + Dimensioni Testo
- ✅ Lezione 4: ID + Spaziatura Base
- ✅ Lezione 5: Font e Decorazioni Testo
- ✅ Lezione 6: Link Interattivi e :hover + Unità (NUOVA)
- ⏳ Lezione 7: Box Model (prossima)
- ⏳ Lezioni 8-17: Da creare

### Deployment
- ✅ Commit pushato su GitHub
- ✅ Vercel deploy in corso...
- ✅ Lezione 6 CSS pronta per il test

### Principi Pedagogici Applicati Sessione 10
1. ✅ **Interattività Immediata**: Tutti i LessonPreview hanno effetti hover funzionanti
2. ✅ **Progressive Enhancement**: Da hover semplice → complesso → transizioni
3. ✅ **Responsive First**: Unità responsive insegnate presto per buone abitudini
4. ✅ **Accessibilità**: :focus spiegato come parte fondamentale, non optional
5. ✅ **UX Awareness**: Best practice e errori comuni per sviluppare sensibilità
6. ✅ **Memoria Facilitata**: LoVe HAte come trucco mnemonico

---

## 📅 CHANGELOG SESSIONE 9 (29 Ottobre 2025)

### Nuova Lezione Creata - Lezione 5 CSS: Font e Decorazioni Testo

**Creazione Completa (Commit `80850c9`):**
- ✅ **1000+ righe** di contenuto didattico
- ✅ **Durata:** 1.5 ore
- ✅ **Difficoltà:** Facile
- ✅ Aggiunta a `lib/moduli.ts` per navigazione sidebar

**Argomenti Insegnati (6 nuove proprietà CSS):**
1. **font-family** - Cambiare tipo di carattere (web safe fonts)
   - Sans-Serif: Arial, Helvetica, Verdana, Tahoma
   - Serif: Times New Roman, Georgia, Garamond
   - Monospace: Courier New, Monaco
   - Corsivi: Comic Sans MS, Brush Script MT
2. **font-style** - Corsivo (italic, normal, oblique)
3. **text-decoration** - Sottolineature (underline, line-through, none, overline)
4. **text-transform** - Maiuscole/minuscole (uppercase, lowercase, capitalize)
5. **letter-spacing** - Spazio tra lettere
6. **word-spacing** - Spazio tra parole

**Struttura Pedagogica Applicata:**
- ✅ Grid 2x2 web safe fonts (4 categorie con esempi)
- ✅ **6 LessonPreview interattivi** con HTML renderizzato
- ✅ **Layout side-by-side** HTML + CSS → Risultato
- ✅ Box colorati per ogni proprietà con valori disponibili
- ✅ Trucchi Pro:
  - Link puliti con `text-decoration: none`
  - Font con spazi tra virgolette
  - Non esagerare con spacing (1-5px lettere, 5-15px parole)
- ✅ Note importanti su web safe fonts e compatibilità

**Esercizi e Sfide:**
- ✅ **Exercise:** 12 step guidati - Stile tipografico articolo completo
  - 5 classi diverse per titoli, sottotitoli, testo, citazioni, link
  - Combinazione di font-family, font-size, font-style, color
- ✅ **Challenge:** Catalogo tipografico con 6-8 sezioni
  - Dimostrare TUTTE le proprietà imparate
  - 3 font diversi, tutti gli stili, decorazioni, trasformazioni
  - Esempi di letter-spacing e word-spacing
- ✅ **Checklist:** 15 punti auto-valutazione

**Sezione Riepilogo Completa:**
- ✅ **Riepilogo Selettori CSS (3 totali)**: elemento, .classe, #id
- ✅ **Riepilogo Proprietà CSS (15 totali)**:
  - Lezione 1-2: color, background-color
  - Lezione 2: border
  - Lezione 3: font-size, font-weight, text-align
  - Lezione 4: padding, margin, width
  - **Lezione 5 (6 NUOVE)**: font-family, font-style, text-decoration, text-transform, letter-spacing, word-spacing ✨
- ✅ **Preview Prossima Lezione**: :hover e unità responsive

### Miglioramento Pedagogico Fondamentale - HTML vs CSS

**Problema Identificato dall'Utente (Commit `0952753`):**
> "Gli allievi potrebbero chiedersi perché alcuni stili come grassetto, corsivo e sottolineato
> siano presenti sia in HTML che in CSS e sarebbe bene spiegare la differenza"

**Nuova Sezione Completa: "HTML vs CSS: Quando Usare Cosa?" (200+ righe)**

**1. Grid Comparativa 2x2:**
- **📝 HTML - Significato (Semantica)**
  - `<strong>` = Importante (screen reader voce forte)
  - `<em>` = Enfatizzato (screen reader intonazione diversa)
  - `<del>` = Cancellato/Rimosso
  - **Pro:** Accessibilità, SEO, Semantica chiara

- **🎨 CSS - Aspetto (Stile)**
  - `font-weight: bold` = Grassetto visivo
  - `font-style: italic` = Corsivo visivo
  - `text-decoration: line-through` = Decorazione
  - **Pro:** Controllo totale, Flessibilità, Separazione concerns

**2. Quando Usare Cosa (3 Casi Pratici):**
1. ✅ **HTML** → Testo con significato speciale (avvisi, enfasi concettuale)
2. ✅ **CSS** → Solo aspetto visivo (design, decorazione)
3. ✅ **ENTRAMBI** → Best practice (semantica HTML + stile CSS personalizzato)

**3. Esempio Comparativo Interattivo (LessonPreview):**
- Solo HTML semantico
- Solo CSS visuale
- **HTML + CSS combinati (MEGLIO!)**

**4. Regola Pratica Semplice:**
> "Chiediti: Questo testo è importante per il SIGNIFICATO o solo per l'ASPETTO?"

**Benefici Pedagogici:**
- ✅ Chiarisce confusione comune tra `<strong>` e `font-weight: bold`
- ✅ Insegna importanza accessibilità (screen reader)
- ✅ Introduce concetto separazione concerns (HTML ≠ CSS)
- ✅ Best practice: HTML semantico + CSS stile
- ✅ Anticipa concetti avanzati (SEO, a11y)

### Fix UX - Leggibilità Sezione "Quando Usare Cosa" (Commit `5c820d7`)

**Problema Segnalato dall'Utente:**
> "Il riquadro quando usare cosa non si capisce niente, c'è del codice a destra
> ma non si vede nessun testo a sinistra"

**Causa:**
- ❌ Testo bianco su sfondo bianco trasparente (`bg-white bg-opacity-20`) = invisibile
- ❌ `CodeExample` causava problemi di layout nel grid

**Soluzioni Implementate:**

**1. Box Completamente Ridisegnati:**
- ✅ `bg-white` opaco invece di trasparente
- ✅ `text-gray-800` scuro invece di `text-white`
- ✅ Testo ora perfettamente leggibile

**2. Codice Ristrutturato:**
- ✅ Rimosso componente `CodeExample` problematico
- ✅ Usato `<pre><code>` custom con sfondo `bg-gray-800`
- ✅ Etichette "HTML:", "CSS:", "HTML + CSS:" in grigio
- ✅ `overflow-x-auto` per codice lungo

**3. Miglioramenti Visivi:**
- ✅ Colori distintivi per ogni caso:
  - 🟢 Verde per HTML semantico (`text-green-700`)
  - 🟣 Viola per CSS visuale (`text-purple-700`)
  - 🔵 Blu per best practice (`text-blue-700`)
- ✅ Tag HTML evidenziati con `bg-green-100`
- ✅ Border e spacing migliorati
- ✅ Contrasto perfetto tra testo e sfondo

**Risultato:**
- ✅ Sezione completamente leggibile e chiara
- ✅ Layout stabile senza overflow
- ✅ Esperienza utente ottimale

### File Creati/Modificati
1. `/lib/moduli.ts` - Aggiunta Lezione 5 al Modulo 2
2. `/app/moduli/modulo-2-css/lezione-5-font-decorazioni/page.tsx` - Lezione completa (1200+ righe finali)
3. `/PROGETTO_LOG.md` - Aggiornato con Sessione 9

### Commit Totali Sessione 9
- `80850c9` - Feature: Creata Lezione 5 CSS completa (1000+ righe)
- `0952753` - Feature: Aggiunta sezione HTML vs CSS (200+ righe)
- `5c820d7` - Fix: Migliorata leggibilità sezione "Quando Usare Cosa"

### Stato Modulo 2 CSS
**Progresso:** 5/17 lezioni implementate (29%)
- ✅ Lezione 1: Il Primo Stile
- ✅ Lezione 2: Selettore Elemento + Colori
- ✅ Lezione 3: Classi + Dimensioni Testo
- ✅ Lezione 4: ID + Spaziatura Base
- ✅ Lezione 5: Font e Decorazioni Testo (NUOVA + sezione HTML vs CSS)
- ⏳ Lezione 6: Link Interattivi e :hover (prossima)
- ⏳ Lezioni 7-17: Da creare

### Deployment
- ✅ Build Vercel: Pronto per deploy
- ✅ TypeScript validation: PASSED
- ✅ Nessun errore di runtime
- ✅ Lezione 5 CSS pronta per il deploy

### Principi Pedagogici Applicati Sessione 9
1. ✅ **Anticipare Domande**: Risposta proattiva a "Perché HTML E CSS per stesso effetto?"
2. ✅ **Accessibilità come Valore**: Spiegare importanza screen reader e SEO
3. ✅ **Best Practice sin dall'Inizio**: HTML semantico + CSS stile
4. ✅ **UX del Materiale Didattico**: Fix immediato di problemi di leggibilità
5. ✅ **Completezza**: 6 proprietà CSS + sezione bonus da 200 righe

---

## 📅 CHANGELOG SESSIONE 8 (28 Ottobre 2025)

### Fix Deployment Vercel - Lezione 3 CSS
**Problema:** Build Vercel falliva con errori TypeScript e import mancanti

**Errori risolti:**
1. ✅ **Import Path Errati** (Commit `d02027c`)
   - Problema: Import da `@/components/` invece di `@/components/didattica/`
   - Fix: Corretti tutti gli import per allinearli con le altre lezioni CSS
   - Aggiunto import `getLezioniByModuloSlug` mancante

2. ✅ **Props Mancanti LessonLayout** (Commit `bb21c85`)
   - Problema: TypeScript richiedeva `moduloTitolo`, `lezioni`, `lezioneTitolo`
   - Fix: Aggiunte tutte le props richieste + componente `LessonHeader`
   - Struttura ora allineata con Lezioni 1 e 2 CSS

3. ✅ **Prop `difficulty` Non Supportata** (Commit `426ac3d`)
   - Problema: Componente `Challenge` non accetta prop `difficulty`
   - Fix: Rimossa prop non supportata (già corretto in Sessione 6 per altre lezioni)

### Miglioramenti Pedagogici - Lezione 3 CSS

**Problema identificato dall'utente:**
- ❌ Codice veniva DOPO il risultato visivo (ordine sbagliato)
- ❌ Esempi mostravano solo CSS, mancava l'HTML
- ❌ Gli studenti non vedevano la struttura completa

**Refactor Struttura (Commit `64d7be7`):**
- ✅ **Ordine corretto**: Prima codice (HTML + CSS), poi risultato
- ✅ **Layout side-by-side**: HTML e CSS affiancati in 2 colonne
- ✅ **Titoli chiari**: "Esempio Pratico: Come Scriverlo" → "Risultato nel Browser"
- ✅ Applicato a tutte e 3 le sezioni: `font-size`, `font-weight`, `text-align`

**Fix Coerenza Codice/Output (Commit `bb239ed`):**
- ✅ **font-size**: Testo HTML sincronizzato tra codice e preview
- ✅ **font-weight**: Testo HTML sincronizzato tra codice e preview
- ✅ **text-align**: CSS completo mostrato (incluso `background-color`, `padding`)
- ✅ Aggiunta nota esplicativa per proprietà ausiliarie

**Fix Progressione Didattica (Commit `6f77455` + `edb2915`):**

**Problema critico:** Lezione 3 usava `padding` e `margin` prima della Lezione 4

- ❌ Prima: `padding: 10px` e `margin-bottom: 10px` in esempi `text-align`
- ❌ Prima: `padding: 15px` nell'esempio "Combinare Tutto Insieme"
- ✅ Ora: Rimossi completamente `padding` e `margin` da tutti gli esempi
- ✅ Ora: Usa SOLO proprietà già insegnate:
  - `font-size`, `font-weight`, `text-align` (Lezione 3)
  - `color`, `background-color` (Lezione 2)

**Nota aggiunta:** Chiarisce che gli sfondi colorati sono già stati imparati nella Lezione 2

### Principi Pedagogici Rispettati

1. ✅ **Progressione Graduale**: Nessuna proprietà futura usata prematuramente
2. ✅ **Trasparenza Totale**: Codice mostrato = Risultato ottenuto (zero "magia nascosta")
3. ✅ **Ordine Logico**: Prima scrivi (codice), poi vedi (risultato)
4. ✅ **Contesto Completo**: HTML + CSS sempre mostrati insieme

### File Modificati
- `/app/moduli/modulo-2-css/lezione-3-classi-dimensioni-testo/page.tsx` - 5 refactor iterativi

### Commit Effettuati
- `d02027c` - Fix: Corretti import path componenti
- `bb21c85` - Fix: Aggiunte props mancanti e LessonHeader
- `426ac3d` - Fix: Rimossa prop difficulty non supportata
- `64d7be7` - Refactor: Migliorata struttura pedagogica (codice prima, risultato dopo)
- `bb239ed` - Fix: Risolti problemi coerenza tra codice e preview
- `6f77455` - Fix: Rimosso padding e margin non ancora insegnati
- `edb2915` - Fix: Rimosso padding dall'esempio "Combinare Tutto Insieme"

### Nuova Lezione Creata - Lezione 4 CSS: ID + Spaziatura Base

**Creazione Completa (Commit `db339de`):**
- ✅ **900+ righe** di contenuto didattico
- ✅ **Durata:** 1.5 ore
- ✅ **Difficoltà:** Facile
- ✅ Aggiunta a `lib/moduli.ts` per navigazione sidebar

**Argomenti Insegnati:**
1. **Selettore #id** - Per elementi unici nella pagina
2. **ID vs Classe** - Differenza tra unico e riutilizzabile
3. **padding** - Spazio INTERNO (tra contenuto e bordo)
4. **margin** - Spazio ESTERNO (tra elementi)
5. **margin: auto** - Centrare elementi orizzontalmente
6. **width** - Larghezza fissa degli elementi

**Struttura Pedagogica Applicata:**
- ✅ Grid comparativa 2x2: ID vs Classe (blu vs verde)
- ✅ Grid comparativa 2x2: Padding vs Margin (viola)
- ✅ **6 LessonPreview interattivi** con HTML renderizzato
- ✅ **Layout side-by-side** HTML + CSS → Risultato
- ✅ Metafore efficaci:
  - ID = nome proprio (unico)
  - Padding = imbottitura dentro la scatola
  - Margin = distanza tra scatole
- ✅ Box colorati per spiegazioni teoriche
- ✅ Note importanti: background riempie padding ma non margin

**Esercizi e Sfide:**
- ✅ **Exercise:** 11 step guidati - Layout con header, nav, content, footer
- ✅ **Challenge:** Portfolio con 5 sezioni ID uniche (#hero, #about, #projects, #skills, #contact)
- ✅ **Checklist:** 11 punti auto-valutazione

**Sezione Riepilogo Completa (Commit `2cad385`):**
- ✅ **Riepilogo Selettori CSS (3 totali)**:
  - elemento (Lezione 2)
  - .classe (Lezione 3)
  - #id (Lezione 4) ✨ NUOVO
- ✅ **Riepilogo Proprietà CSS (9 totali)**:
  - color, background-color (Lezione 1-2)
  - border (Lezione 2)
  - font-size, font-weight, text-align (Lezione 3)
  - padding, margin, width (Lezione 4) ✨ NUOVO
- ✅ **Preview Prossima Lezione**: Anticipa argomenti Lezione 5

**File Creati/Modificati:**
1. `/lib/moduli.ts` - Aggiunta Lezione 4 al Modulo 2
2. `/app/moduli/modulo-2-css/lezione-4-id-spaziatura/page.tsx` - Lezione completa (638 righe)

### Commit Totali Sessione 8
- `d02027c` - Fix: Corretti import path componenti Lezione 3
- `bb21c85` - Fix: Aggiunte props mancanti e LessonHeader Lezione 3
- `426ac3d` - Fix: Rimossa prop difficulty Lezione 3
- `64d7be7` - Refactor: Migliorata struttura pedagogica Lezione 3
- `bb239ed` - Fix: Risolti problemi coerenza Lezione 3
- `6f77455` - Fix: Rimosso padding/margin non insegnati Lezione 3
- `edb2915` - Fix: Rimosso padding esempio finale Lezione 3
- `5ebe1d2` - Docs: Aggiornato PROGETTO_LOG Sessione 8
- `db339de` - Feature: Creata Lezione 4 CSS completa
- `2cad385` - Feature: Aggiunto riepilogo Lezione 4

### Stato Modulo 2 CSS
**Progresso:** 4/17 lezioni implementate (24%)
- ✅ Lezione 1: Il Primo Stile
- ✅ Lezione 2: Selettore Elemento + Colori
- ✅ Lezione 3: Classi + Dimensioni Testo (rivista e ottimizzata)
- ✅ Lezione 4: ID + Spaziatura Base (NUOVA)
- ⏳ Lezione 5: Font e Decorazioni Testo (prossima)
- ⏳ Lezioni 6-17: Da creare

### Deployment
- ✅ Build Vercel: **SUCCESSO**
- ✅ TypeScript validation: **PASSED**
- ✅ Nessun errore di runtime
- ✅ Lezione 3 CSS completamente funzionante
- ✅ Lezione 4 CSS pronta per il deploy

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

#### 📝 LEZIONE 5: Font e Decorazioni Testo
**Durata:** 1.5 ore
**Difficoltà:** Facile
**Argomenti:**
- `font-family` (Arial, Helvetica, sans-serif)
- Web safe fonts
- `font-style` (italic, normal)
- `text-decoration` (underline, none, line-through)
- `text-transform` (uppercase, lowercase, capitalize)
- `letter-spacing` e `word-spacing`
- Link stilizzati con text-decoration

**Proprietà insegnate:** `font-family`, `font-style`, `text-decoration`, `text-transform`, `letter-spacing`
**Esercizio VS Code:** Creare pagina articolo con titoli, testo normale, citazioni stilizzate
**Sfida:** Blog post completo con tipografia elegante

---

#### 📝 LEZIONE 6: Link Interattivi e :hover
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

### 7. Ristrutturazione Didattica Completa - Lezione 8 CSS: Bordi e Sfondi (OPZIONE B) - Sessione 11 Parte 4

**Problema Identificato dall'Utente:**
- ❌ Shorthand `border` usata da subito senza spiegazione
- ❌ Concetto "shorthand" spiegato solo alla fine della lezione
- ❌ Studenti confusi: usavano una sintassi senza capire cos'è
- ❌ Incoerenza didattica: prima uso → poi spiegazione

**Decisione Presa:**
- Implementazione **Opzione B** (ristrutturazione media)
- Flow didattico: proprietà separate → problema → shorthand → concetto generale
- Stimato 3-4 ore di lavoro, ~200-250 righe modifiche

**Ristrutturazione Implementata:**

**1. 🔧 Nuova Sezione: "Le 3 Proprietà Separate del Bordo"**
- Grid 3 colonne: border-width, border-style, border-color
- Esempio pratico con 3 proprietà separate
- LessonPreview interattivo per vedere il risultato
- Box giallo "Il Problema": "Scrivere 3 righe è lungo e ripetitivo!"
- ✅ Gli studenti CAPISCONO cosa compone un bordo

**2. ⚡ Sezione Modificata: "La Scorciatoia: border (shorthand)"**
- Introduce il concetto di shorthand naturalmente
- Mostra equivalenza: `border: 3px solid red` = 3 proprietà separate
- "Anatomia della shorthand" con blocchi colorati (già presente)
- Box viola "Perché la Shorthand è Meglio": veloce, leggibile, comune, meno errori
- Dichiarazione: "D'ora in poi useremo sempre la shorthand!"
- ✅ Gli studenti CAPISCONO perché la shorthand è meglio

**3. ⚡ Sezione Ampliata: "Shorthand: Il Concetto Generale nel CSS"**
- Box viola: definizione chiara "shorthand properties = più proprietà in una riga"
- Grid comparativa 2 colonne:
  - border (già vista): 3 proprietà → 1 riga
  - background (la più complessa): 8 proprietà → 1 riga
- Sintassi completa background (invariata)
- Box verde finale: "Il Concetto Generale delle Shorthand"
  - Lista tutte le shorthand viste nel corso
  - Richiama padding e margin (Lezione 4)
  - Anticipa font (prossime lezioni)
  - **Regola d'Oro:** "Impara prima le proprietà separate per capire, poi usa shorthand per velocità"
- ✅ Gli studenti CAPISCONO il pattern generale

**Benefici Didattici:**
- ✅ Progressione logica: semplice → complesso → scorciatoia
- ✅ Studenti capiscono PERCHÉ shorthand è utile (non solo COME usarla)
- ✅ Concetto "shorthand" introdotto naturalmente, non "buttato alla fine"
- ✅ Coerenza: stesso approccio per border e background
- ✅ Preparazione: ora sanno riconoscere shorthand in futuro
- ✅ Riduce confusione: "Ah ecco, prima abbiamo visto le basi!"

**Statistiche:**
- +217 righe, -10 righe (netto: +207 righe)
- Tempo effettivo: ~2 ore
- 3 nuove sezioni didattiche
- 1 LessonPreview aggiunto
- 4 box informativi colorati

**File Modificato:**
- `app/moduli/modulo-2-css/lezione-8-bordi-sfondi/page.tsx` (+207 righe nette)

**Commit:** `300c498` - Refactor: Ristrutturata Lezione 8 - Approccio didattico proprietà separate → shorthand

---

### 8. Migliorato Collegamento Didattico - Lezione 8: Transizione border → background shorthand

**Problema Identificato dall'Utente:**
- ❌ Sezione background presentava shorthand come concetto nuovo
- ❌ Nessun richiamo alla shorthand border già vista in precedenza
- ❌ Studenti confusi: "Ma non l'avevamo già spiegato?"
- ❌ Rottura della continuità didattica

**Soluzione Implementata:**

**1. Box di Transizione Giallo "🤔 Troppe Righe da Scrivere!"**
- Posizionato dopo background-attachment, prima della sezione shorthand
- Mostra il problema: 5 righe CSS per uno sfondo completo
- **Richiama esplicitamente:** "Ti ricordi la shorthand di border?"
- Anticipa: "Anche background ha la sua scorciatoia!"
- ✅ Crea ponte tra le due sezioni

**2. Titolo Sezione Modificato**
- Prima: "⚡ Shorthand: Il Concetto Generale nel CSS" (troppo generico)
- Ora: "⚡ Shorthand background: Ancora Più Potente!" (specifico + richiama progressione)

**3. Box Viola Introduttivo Modificato**
- Prima: "💡 Cosa Sono le Shorthand?" (presentate come nuove)
- Ora: "🔁 Ripassiamo: Cosa Sono le Shorthand?" (richiama conoscenze)
- Aggiunto: "Hai già visto le shorthand con border!"
- Confronto esplicito: border (3→1) vs background (8→1)
- ✅ Valorizza conoscenza pregressa

**4. Titolo Grid Comparativa Modificato**
- Prima: "📚 Le Shorthand Viste Oggi" (implica novità)
- Ora: "📚 Confronto: border vs background" (enfatizza parallelismo)

**Benefici Didattici:**
- ✅ Continuità didattica: richiama border prima di introdurre background
- ✅ Valorizza apprendimento pregresso: "Hai già visto..."
- ✅ Non ripete concetto da zero: "Ripassiamo" invece di "Impariamo"
- ✅ Progressione naturale: semplice (border 3) → complesso (background 8)
- ✅ Riduce confusione: transizione esplicita tra sezioni

**File Modificato:**
- `app/moduli/modulo-2-css/lezione-8-bordi-sfondi/page.tsx` (+37 righe, -5 righe)

**Commit:** `24b73eb` - Fix: Migliorato collegamento didattico tra border e background shorthand

---

### 9. Fix Visibilità Testo - Lezione 8: Box "Regola d'Oro"

**Problema Segnalato dall'Utente:**
- ❌ Nel box verde "Il Concetto Generale delle Shorthand" il riquadro bianco interno aveva testo illeggibile
- ❌ Testo bianco su sfondo bianco semi-trasparente (`bg-white bg-opacity-20`)
- ❌ Stesso problema già risolto nella Lezione 7, ripetuto qui

**Soluzione Implementata:**
- ✅ Aggiunto `text-gray-900` al titolo "💡 Regola d'Oro:"
- ✅ Aggiunto `text-gray-800` al paragrafo descrittivo
- ✅ Ora perfettamente leggibile

**File Modificato:**
- `app/moduli/modulo-2-css/lezione-8-bordi-sfondi/page.tsx` (linee 1123-1124)

**Commit:** `9a66c99` - Fix: Risolto problema visibilità testo in box bianco "Regola d'Oro"

**Nota:** Stesso pattern di fix applicato con successo in Lezione 7. Potrebbe essere utile creare un componente riutilizzabile per questi box in futuro per evitare il problema.

---

### 10. Rimozione Ombreggiature - Lezione 8: Coerenza Didattica

**Problema Identificato dall'Utente:**
- ❌ `text-shadow` e `box-shadow` usati negli esempi e demo
- ❌ Proprietà NON ancora insegnate
- ❌ Studenti vedono CSS senza spiegazione
- ❌ Incoerenza: lezione su bordi/sfondi ma usa anche ombre

**Ombreggiature Rimosse:**
1. `text-shadow` da Hero demo (riga ~658)
2. `text-shadow` da Hero section perfetta (riga ~890)
3. `box-shadow` da Card prodotto professionale (riga ~1204)
4. `text-shadow` da step Esercizio guidato (riga ~1279)
5. `text-shadow` da step Challenge (riga ~1308)

**Motivazione Didattica:**
- ✅ Mantiene focus esclusivo su bordi e sfondi (argomento della lezione)
- ✅ Non introduce concetti non spiegati
- ✅ Coerenza: insegniamo solo ciò che è stato già spiegato
- ✅ Le ombreggiature saranno insegnate in una lezione futura dedicata
- ✅ Gli esempi rimangono visivamente chiari anche senza ombre

**File Modificato:**
- `app/moduli/modulo-2-css/lezione-8-bordi-sfondi/page.tsx` (-3 righe nette)

**Commit:** `5b73305` - Refactor: Rimosse tutte le ombreggiature dalla Lezione 8

**Principio Didattico:** "Insegna prima le basi, poi aggiungi decorazioni avanzate". Le ombreggiature sono effetti avanzati che meritano una spiegazione dedicata.

---

### 11. Rimozione CSS Avanzati - Lezione 8: Card Professionale

**Problemi Identificati dall'Utente:**
1. ❌ `transition` + `transform` sulla card con `:hover` (non insegnati)
2. ❌ Selettori discendenza: `.card-content h3`, `.card-content p` (non insegnati)
3. ❌ Discrepanza tra CSS di esempio e LessonPreview

**Modifiche Implementate:**

**A) Rimossi Effetti Avanzati:**
- ❌ Rimosso `transition: transform 0.3s`
- ❌ Rimosso `:hover { transform: translateY(-5px); }` sulla card
- ✅ Mantenuto `:hover` sul bottone (già insegnato Lezione 6)

**B) Sostituiti Selettori Discendenza con Classi Dirette:**
- Prima: `.card-content h3 { ... }` (selettore discendenza)
- Ora: `.card-title { ... }` (classe diretta)
- Prima: `.card-content p { ... }` (selettore discendenza)
- Ora: `.card-text { ... }` (classe diretta)

**C) Aggiornato HTML con Classi Esplicite:**
```html
<h3 class="card-title">Prodotto Premium</h3>
<p class="card-text">Descrizione del prodotto...</p>
```

**D) Applicato Coerenza:**
- CSS di esempio e LessonPreview ora identici
- Lista "Elementi usati" aggiornata: "Hover sul bottone (cambio colore)"

**Motivazione Didattica:**
- ✅ Usa solo selettori già insegnati (elemento, classe, ID)
- ✅ Non introduce CSS avanzato senza spiegazione
- ✅ Coerenza totale tra teoria ed esempi
- ✅ transform, transition e selettori discendenza saranno insegnati in futuro

**File Modificato:**
- `app/moduli/modulo-2-css/lezione-8-bordi-sfondi/page.tsx` (-6 righe nette)

**Commit:** `c388718` - Refactor: Rimossi CSS avanzati non insegnati da Card Professionale

---

## 📐 REGOLA DIDATTICA FONDAMENTALE

### Principio di Coerenza Pedagogica degli Esempi

**REGOLA AUREA:**
> **Tutti gli output, esempi, LessonPreview, esercizi e demo NON POSSONO MAI utilizzare HTML, CSS o JavaScript non ancora studiato fino alla lezione corrente.**

**Motivazioni:**
1. **Confusione Cognitiva:** Gli studenti vedono codice sconosciuto e si chiedono "cosa significa?"
2. **Perdita di Fiducia:** "Non capisco l'esempio" → frustrazione → abbandono
3. **Progressione Rotta:** Viola il principio "semplice → complesso"
4. **Incoerenza:** "Nella teoria non c'era, perché nell'esempio sì?"

**Esempi Concreti di Violazioni Corrette:**

| Lezione | Violazione | Problema | Soluzione |
|---------|-----------|----------|-----------|
| 7 | `display: inline-block` in esercizio | Display non insegnato | Card verticali (block default) |
| 8 | `text-shadow`, `box-shadow` | Ombre non insegnate | Rimosso completamente |
| 8 | `transform`, `transition` | Animazioni non insegnate | Rimosso, mantenuto :hover |
| 8 | `.parent child` selettori | Selettori discendenza non insegnati | Classi dirette (.card-title) |

**Checklist Pre-Commit per Ogni Lezione:**
- [ ] Tutti i selettori CSS usati sono stati spiegati?
- [ ] Tutte le proprietà CSS usate sono state insegnate?
- [ ] Tutti i tag HTML usati sono stati presentati?
- [ ] LessonPreview usa SOLO concetti già visti?
- [ ] Esempi di codice coerenti con teoria?
- [ ] Esercizi e Challenge accessibili con conoscenze attuali?

**Eccezioni Permesse:**
1. **Stili di Layout Necessari:** `display: flex` nel LessonPreview per visualizzazione (se invisibile, va bene)
2. **Reset CSS Standard:** `* { box-sizing: border-box; }` anche se non ancora spiegato nel dettaglio
3. **Con Nota Esplicita:** Se ASSOLUTAMENTE necessario, aggiungere nota: "💡 Nota: [proprietà] sarà spiegata nella Lezione X"

**Responsabilità:**
- Prima di creare una nuova lezione: rivedere tutte le lezioni precedenti per sapere cosa è permesso
- Prima di ogni commit: verificare checklist
- Nei code review: priorità massima alla coerenza didattica

**Beneficio Atteso:**
- ✅ Studenti mai confusi da "codice magico"
- ✅ Progressione lineare e chiara
- ✅ Fiducia nel materiale didattico
- ✅ Tasso di completamento più alto

---
