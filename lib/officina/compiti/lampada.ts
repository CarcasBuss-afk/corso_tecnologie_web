/* Compito 3 · La lampada da comodino (Modulo 4, lezione 5).
 * Idea nuova: .style cambia l'aspetto: colore di sfondo, misure con "px", display per
 * nascondere e mostrare. I valori arrivano anche dal prompt. */
import { clic, CSS_BASE, domandaFatta, GIALLI, GRIGI, risposte, stile, testo, visibile } from './aiuti';
import { generatore, REGOLE, scegli, type Compito } from './tipi';

const NOMI = ['Luca', 'Giulia', 'Matteo', 'Sara', 'Davide', 'Chiara', 'Omar', 'Aisha'] as const;

const ACCESA = 'La lampada è accesa.';
const SPENTA = 'La lampada è spenta.';

export function generaLampada(seme: number): Compito {
  const rnd = generatore(seme);
  const nome = scegli(rnd, NOMI);

  const html = `<h1>Camera di ${nome}</h1>
<div id="lampada">💡</div>
<p id="stato">${SPENTA}</p>
<div>
  <button id="btnAccendi">Accendi</button>
  <button id="btnSpegni">Spegni</button>
  <button id="btnColore">Cambia colore</button>
  <button id="btnGrande">Cambia misura</button>
</div>
<p id="buonanotte" class="nascosto">Buonanotte, ${nome}! 🌙</p>`;

  const css = `${CSS_BASE}

div {
  margin: 10px auto;
}

#lampada {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: gray;
  font-size: 60px;
  line-height: 120px;
  margin: 20px auto;
}

.nascosto {
  display: none;
}`;

  return {
    scheda: {
      id: 'lampada',
      titolo: 'La lampada da comodino',
      lezione: 'Modulo 4 · Lezione 5',
      committente: `${nome} vuole comandare la lampada della camera da una pagina sul telefono: accenderla, spegnerla, cambiarle colore e grandezza.`,
      prodotto: 'Una pagina in cui i pulsanti cambiano lo stile di un elemento: colore, misure, visibilità.',
      dati: [`proprietario: ${nome}`, 'colore accesa: giallo', 'colore spenta: grigio'],
      risultatoFinale: [
        '«Accendi» colora la lampada di giallo e aggiorna il paragrafo di stato; «Spegni» la rimette grigia.',
        '«Cambia colore» chiede un colore e lo applica; «Cambia misura» chiede i pixel e li applica a larghezza e altezza.',
        'Quando la lampada si spegne compare la scritta della buonanotte; quando si accende sparisce.',
      ],
    },
    pagina: { html, css },
    pannelli: ['js'],
    fasi: [
      {
        consegna: `Quando si clicca **Accendi**, la lampada (id \`lampada\`) diventa gialla (\`style.backgroundColor\`) e il paragrafo di stato (id \`stato\`) dice \`${ACCESA}\`.`,
        regola: REGOLE.treGesti,
        prove: [
          {
            passi: [
              clic('btnAccendi', 'Accendi'),
              stile('lampada', 'backgroundColor', GIALLI, 'La lampada ha lo sfondo giallo', 'Il colore di sfondo si cambia con style.backgroundColor (con la B maiuscola) e il valore fra virgolette, per esempio un giallo.'),
              testo('stato', ACCESA, `Lo stato dice «${ACCESA}»`, 'Il paragrafo di stato ha l\'id «stato»: cambia il suo innerHTML nella stessa funzione.'),
            ],
          },
        ],
        codiceIniziale: '// 1. Scrivi la funzione\n\n// 2. Collega il pulsante alla funzione\n',
      },
      {
        consegna: `**Spegni** rimette la lampada grigia e lo stato a \`${SPENTA}\`. Seconda funzione, secondo collegamento. Accendi continua a funzionare.`,
        regola: `${REGOLE.treGesti} Ogni pulsante ha la sua funzione con nome.`,
        prove: [
          {
            passi: [
              clic('btnAccendi', 'Accendi'),
              clic('btnSpegni', 'Spegni'),
              stile('lampada', 'backgroundColor', GRIGI, 'Dopo Spegni la lampada è grigia', 'Nella funzione di Spegni rimetti un grigio come sfondo (gray).'),
              testo('stato', SPENTA, `Lo stato dice «${SPENTA}»`, 'Rimetti il testo iniziale nello stato.'),
              clic('btnAccendi', 'Accendi'),
              stile('lampada', 'backgroundColor', GIALLI, 'Accendi la ricolora di giallo', 'Accendi deve continuare a funzionare.'),
            ],
          },
        ],
      },
      {
        consegna: '**Cambia colore** chiede con `prompt` un colore (in inglese, per esempio `red`) e lo usa come sfondo della lampada.',
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalPrompt}`,
        prove: [
          {
            nome: 'rispondendo «red»',
            passi: [
              risposte('red'),
              clic('btnColore', 'Cambia colore'),
              domandaFatta(1, 'La pagina chiede il colore con prompt', 'Non è comparsa nessuna domanda: il prompt va dentro la funzione.'),
              stile('lampada', 'backgroundColor', 'red', 'La lampada diventa rossa', 'Il valore di style.backgroundColor deve essere la variabile con la risposta, senza virgolette intorno al nome della variabile.'),
            ],
          },
          {
            nome: 'rispondendo «blue»',
            passi: [risposte('blue'), clic('btnColore', 'Cambia colore'), stile('lampada', 'backgroundColor', 'blue', 'La lampada diventa blu', 'Il colore deve essere quello risposto al prompt.')],
          },
        ],
      },
      {
        consegna: '**Cambia misura** chiede con `prompt` un numero di pixel (per esempio `200`) e lo applica a larghezza e altezza della lampada (`style.width` e `style.height`). Ricorda: alla misura va attaccato `px`.',
        regola: `${REGOLE.treGesti} ${REGOLE.datiDalPrompt} La misura arriva dal prompt e si aggiunge "px".`,
        prove: [
          {
            nome: 'rispondendo «200»',
            passi: [
              risposte('200'),
              clic('btnGrande', 'Cambia misura'),
              stile('lampada', 'width', '200px', 'La larghezza è 200px', 'La larghezza si imposta con style.width; il valore è il numero risposto più "px": unisci con il +.'),
              stile('lampada', 'height', '200px', 'L\'altezza è 200px', 'Anche style.height, con lo stesso valore.'),
            ],
          },
          {
            nome: 'rispondendo «150»',
            passi: [risposte('150'), clic('btnGrande', 'Cambia misura'), stile('lampada', 'width', '150px', 'La larghezza è 150px', 'La misura deve essere quella risposta al prompt.'), stile('lampada', 'height', '150px', 'L\'altezza è 150px', 'Anche l\'altezza.')],
          },
        ],
      },
      {
        consegna: `Quando la lampada si spegne compare la scritta della buonanotte (id \`buonanotte\`, nascosta all'inizio dal CSS): mettile \`style.display\` a \`block\`. Quando si accende, sparisce di nuovo (\`none\`).`,
        regola: `${REGOLE.treGesti} Nascondere e mostrare si fa con style.display.`,
        prove: [
          {
            passi: [
              visibile('buonanotte', false, 'All\'inizio la buonanotte non si vede', 'All\'inizio non devi fare niente: la nasconde il CSS.'),
              clic('btnSpegni', 'Spegni'),
              visibile('buonanotte', true, 'Dopo Spegni la buonanotte si vede', 'Nella funzione di Spegni metti style.display = "block" al paragrafo della buonanotte.'),
              clic('btnAccendi', 'Accendi'),
              visibile('buonanotte', false, 'Dopo Accendi sparisce', 'Nella funzione di Accendi metti style.display = "none".'),
              stile('lampada', 'backgroundColor', GIALLI, 'La lampada è gialla', 'Accendi deve continuare a colorare di giallo.'),
            ],
          },
        ],
      },
    ],
    soluzioni: [
      `function accendi() {
  document.getElementById("lampada").style.backgroundColor = "yellow";
  document.getElementById("stato").innerHTML = "${ACCESA}";
}

document.getElementById("btnAccendi").addEventListener("click", accendi);`,
      `function accendi() {
  document.getElementById("lampada").style.backgroundColor = "yellow";
  document.getElementById("stato").innerHTML = "${ACCESA}";
}

function spegni() {
  document.getElementById("lampada").style.backgroundColor = "gray";
  document.getElementById("stato").innerHTML = "${SPENTA}";
}

document.getElementById("btnAccendi").addEventListener("click", accendi);
document.getElementById("btnSpegni").addEventListener("click", spegni);`,
      `function accendi() {
  document.getElementById("lampada").style.backgroundColor = "yellow";
  document.getElementById("stato").innerHTML = "${ACCESA}";
}

function spegni() {
  document.getElementById("lampada").style.backgroundColor = "gray";
  document.getElementById("stato").innerHTML = "${SPENTA}";
}

function cambiaColore() {
  let colore = prompt("Che colore vuoi?");
  document.getElementById("lampada").style.backgroundColor = colore;
}

document.getElementById("btnAccendi").addEventListener("click", accendi);
document.getElementById("btnSpegni").addEventListener("click", spegni);
document.getElementById("btnColore").addEventListener("click", cambiaColore);`,
      `function accendi() {
  document.getElementById("lampada").style.backgroundColor = "yellow";
  document.getElementById("stato").innerHTML = "${ACCESA}";
}

function spegni() {
  document.getElementById("lampada").style.backgroundColor = "gray";
  document.getElementById("stato").innerHTML = "${SPENTA}";
}

function cambiaColore() {
  let colore = prompt("Che colore vuoi?");
  document.getElementById("lampada").style.backgroundColor = colore;
}

function cambiaMisura() {
  let misura = prompt("Quanti pixel?");
  let lampada = document.getElementById("lampada");
  lampada.style.width = misura + "px";
  lampada.style.height = misura + "px";
}

document.getElementById("btnAccendi").addEventListener("click", accendi);
document.getElementById("btnSpegni").addEventListener("click", spegni);
document.getElementById("btnColore").addEventListener("click", cambiaColore);
document.getElementById("btnGrande").addEventListener("click", cambiaMisura);`,
      `function accendi() {
  document.getElementById("lampada").style.backgroundColor = "yellow";
  document.getElementById("stato").innerHTML = "${ACCESA}";
  document.getElementById("buonanotte").style.display = "none";
}

function spegni() {
  document.getElementById("lampada").style.backgroundColor = "gray";
  document.getElementById("stato").innerHTML = "${SPENTA}";
  document.getElementById("buonanotte").style.display = "block";
}

function cambiaColore() {
  let colore = prompt("Che colore vuoi?");
  document.getElementById("lampada").style.backgroundColor = colore;
}

function cambiaMisura() {
  let misura = prompt("Quanti pixel?");
  let lampada = document.getElementById("lampada");
  lampada.style.width = misura + "px";
  lampada.style.height = misura + "px";
}

document.getElementById("btnAccendi").addEventListener("click", accendi);
document.getElementById("btnSpegni").addEventListener("click", spegni);
document.getElementById("btnColore").addEventListener("click", cambiaColore);
document.getElementById("btnGrande").addEventListener("click", cambiaMisura);`,
    ],
  };
}
