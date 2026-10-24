/* Il correttore: lo script che entra NELLA pagina dell'allievo, prima del suo codice, e
 * la guarda da dentro. Intercetta alert, prompt, confirm e console.log, raccoglie gli
 * errori, e sa eseguire i passi di una prova (clic, scrivere, controllare) restituendo
 * l'esito. È una stringa perché deve girare in un iframe sandbox e in jsdom, dove non si
 * importa niente: tutto quello che gli serve sta qui dentro (anche la tabella dei colori).
 *
 * Nel browser l'host gli parla con postMessage ({ tipo: 'esegui', passi }); sul server lo
 * si chiama direttamente (window.__officina.esegui(passi)). Modulo puro. */
import { COLORI_CSS, CORPO_NORMALIZZA_COLORE } from './colori';

/** Il marcatore dei messaggi fra host e iframe. */
export const CANALE = 'officina-correttore';

export const CORRETTORE_JS = `(function () {
  var COLORI = ${JSON.stringify(COLORI_CSS)};
  function normalizzaColore(v) {${CORPO_NORMALIZZA_COLORE}}
  function normalizzaTesto(v) { return String(v == null ? '' : v).replace(/\\s+/g, ' ').trim(); }

  var O = {
    alerts: [], confirms: [], prompts: [], console: [], errori: [],
    codaPrompt: [], codaConfirm: []
  };
  window.__officina = O;

  window.alert = function (m) { O.alerts.push(normalizzaTesto(m)); };
  window.prompt = function (m, predefinito) {
    O.prompts.push(normalizzaTesto(m));
    if (O.codaPrompt.length) return O.codaPrompt.shift();
    return predefinito === undefined ? '' : String(predefinito);
  };
  window.confirm = function (m) {
    O.confirms.push(normalizzaTesto(m));
    return O.codaConfirm.length ? O.codaConfirm.shift() : true;
  };
  var logOriginale = console.log;
  console.log = function () {
    var parti = [];
    for (var i = 0; i < arguments.length; i++) parti.push(String(arguments[i]));
    O.console.push(parti.join(' '));
  };
  window.addEventListener('error', function (e) {
    var msg = e && e.message ? e.message : (e && e.error ? String(e.error) : 'Errore sconosciuto');
    if (e && e.lineno && !/line/i.test(msg)) msg += ' (line ' + e.lineno + ')';
    O.errori.push(msg);
  });

  function trova(selettore) {
    try { return document.querySelector(selettore); } catch (err) { return null; }
  }
  function nomeSelettore(s) { return s.charAt(0) === '#' ? 'id="' + s.slice(1) + '"' : s; }

  function visibile(el) {
    var e = el;
    while (e && e.nodeType === 1) {
      var st = window.getComputedStyle(e);
      if (st.display === 'none' || st.visibility === 'hidden') return false;
      e = e.parentElement;
    }
    return true;
  }

  function stile(el, proprieta) {
    var kebab = proprieta.replace(/[A-Z]/g, function (c) { return '-' + c.toLowerCase(); });
    var calcolato = window.getComputedStyle(el).getPropertyValue(kebab);
    // In jsdom lo stile calcolato non vede sempre lo stile inline: si guarda anche quello.
    if (!calcolato && el.style) calcolato = el.style.getPropertyValue(kebab);
    return calcolato || '';
  }
  function eColore(p) { return /color/i.test(p); }

  function azione(p) {
    if (p.fai === 'prompt') { O.codaPrompt = p.risposte.slice(); return null; }
    if (p.fai === 'confirm') { O.codaConfirm = p.risposte.slice(); return null; }
    if (p.fai === 'clic') {
      var el = trova(p.su);
      if (!el) return 'Non trovo l\\'elemento ' + nomeSelettore(p.su) + ' nella pagina';
      el.click();
      return null;
    }
    if (p.fai === 'scrivi') {
      var casella = trova(p.in);
      if (!casella) return 'Non trovo la casella ' + nomeSelettore(p.in) + ' nella pagina';
      casella.value = p.valore;
      casella.dispatchEvent(new Event('input', { bubbles: true }));
      casella.dispatchEvent(new Event('change', { bubbles: true }));
      return null;
    }
    return 'Azione sconosciuta';
  }

  function controllo(p) {
    var esito = { ok: false, descrizione: p.descrizione, hint: p.hint };
    var el;
    switch (p.controlla) {
      case 'testo': {
        el = trova(p.di);
        if (!el) { esito.attuale = 'elemento ' + nomeSelettore(p.di) + ' non trovato'; return esito; }
        var t = normalizzaTesto(el.textContent);
        esito.attuale = t;
        if (p.uguale !== undefined) esito.ok = t === normalizzaTesto(p.uguale);
        else if (p.contiene !== undefined) esito.ok = t.indexOf(normalizzaTesto(p.contiene)) !== -1;
        return esito;
      }
      case 'html': {
        el = trova(p.di);
        if (!el) { esito.attuale = 'elemento ' + nomeSelettore(p.di) + ' non trovato'; return esito; }
        var h = el.innerHTML.replace(/\\s+/g, ' ').trim();
        esito.attuale = h;
        esito.ok = h.toLowerCase().indexOf(p.contiene.replace(/\\s+/g, ' ').trim().toLowerCase()) !== -1;
        return esito;
      }
      case 'stile': {
        el = trova(p.di);
        if (!el) { esito.attuale = 'elemento ' + nomeSelettore(p.di) + ' non trovato'; return esito; }
        var valore = stile(el, p.proprieta);
        var attesi = Array.isArray(p.valore) ? p.valore : [p.valore];
        var norm = eColore(p.proprieta) ? normalizzaColore : function (v) { return normalizzaTesto(v).toLowerCase(); };
        var attuale = norm(valore);
        esito.attuale = valore ? valore : '(niente)';
        for (var i = 0; i < attesi.length; i++) if (norm(attesi[i]) === attuale) esito.ok = true;
        return esito;
      }
      case 'visibile': {
        el = trova(p.di);
        if (!el) { esito.attuale = 'elemento ' + nomeSelettore(p.di) + ' non trovato'; return esito; }
        var v = visibile(el);
        esito.attuale = v ? 'visibile' : 'nascosto';
        esito.ok = v === p.visibile;
        return esito;
      }
      case 'alert': {
        var ultimo = O.alerts.length ? O.alerts[O.alerts.length - 1] : null;
        esito.attuale = ultimo === null ? 'nessun alert' : ultimo;
        if (ultimo === null) return esito;
        if (p.uguale !== undefined) esito.ok = ultimo === normalizzaTesto(p.uguale);
        else if (p.contiene !== undefined) esito.ok = ultimo.indexOf(normalizzaTesto(p.contiene)) !== -1;
        else esito.ok = true;
        return esito;
      }
      case 'alerts': {
        esito.attuale = O.alerts.length + (O.alerts.length === 1 ? ' alert' : ' alert');
        esito.ok = O.alerts.length === p.quanti;
        return esito;
      }
      case 'prompt': {
        esito.attuale = O.prompts.length === 0 ? 'nessuna domanda' : O.prompts.length + ' domande';
        esito.ok = O.prompts.length >= p.almeno;
        return esito;
      }
      case 'console': {
        var cerca = normalizzaTesto(p.contiene);
        esito.attuale = O.console.length ? O.console.join(' | ') : '(console vuota)';
        for (var j = 0; j < O.console.length; j++) if (normalizzaTesto(O.console[j]).indexOf(cerca) !== -1) esito.ok = true;
        return esito;
      }
      default:
        esito.attuale = 'controllo sconosciuto';
        return esito;
    }
  }

  O.esegui = function (passi) {
    var controlli = [];
    for (var i = 0; i < passi.length; i++) {
      var p = passi[i];
      if (p.controlla) {
        try { controlli.push(controllo(p)); }
        catch (err) { controlli.push({ ok: false, descrizione: p.descrizione, hint: p.hint, attuale: 'errore: ' + String(err && err.message ? err.message : err) }); }
      } else {
        // Un'azione che non riesce (elemento non trovato) è un errore della prova, non un
        // controllo: così i controlli dell'esito restano allineati a quelli dei passi.
        var problema = null;
        try { problema = azione(p); }
        catch (err) { O.errori.push(String(err && err.message ? err.message : err)); }
        if (problema) O.errori.push(problema);
      }
    }
    var ok = O.errori.length === 0;
    for (var k = 0; k < controlli.length; k++) if (!controlli[k].ok) ok = false;
    return { ok: ok, controlli: controlli, errori: O.errori.slice(), alerts: O.alerts.slice(), console: O.console.slice() };
  };

  window.addEventListener('message', function (e) {
    var d = e.data;
    if (!d || d.canale !== '${CANALE}' || d.tipo !== 'esegui') return;
    var esito;
    try { esito = O.esegui(d.passi || []); }
    catch (err) { esito = { ok: false, controlli: [], errori: [String(err && err.message ? err.message : err)], alerts: O.alerts.slice(), console: O.console.slice() }; }
    e.source.postMessage({ canale: '${CANALE}', tipo: 'esito', id: d.id, esito: esito }, '*');
  });
  void logOriginale;
})();`;
