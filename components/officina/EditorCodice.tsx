'use client';
/* L'editor dell'Officina: Monaco, lo stesso motore di VS Code che gli allievi usano in
 * laboratorio, con i suggerimenti di JavaScript e un tema scuro. Monaco arriva da CDN
 * (jsdelivr) al primo uso: niente worker da impacchettare. */
import { Editor, type OnMount } from '@monaco-editor/react';
import { useEffect, useRef } from 'react';
import type * as MonacoNs from 'monaco-editor';

type Monaco = typeof MonacoNs;
type EditorIstanza = MonacoNs.editor.IStandaloneCodeEditor;

const TEMA = 'officina-scuro';

function definisciTema(monaco: Monaco) {
  monaco.editor.defineTheme(TEMA, {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'keyword', foreground: 'c678dd' },
      { token: 'identifier', foreground: 'e5c07b' },
      { token: 'string', foreground: '98c379' },
      { token: 'number', foreground: 'd19a66' },
      { token: 'comment', foreground: '5c6370', fontStyle: 'italic' },
      { token: 'delimiter', foreground: 'abb2bf' },
      { token: 'tag', foreground: 'e06c75' },
      { token: 'attribute.name', foreground: 'd19a66' },
      { token: 'attribute.value', foreground: '98c379' },
    ],
    colors: {
      'editor.background': '#111419',
      'editor.foreground': '#e2e8f0',
      'editorLineNumber.foreground': '#4b5563',
      'editorLineNumber.activeForeground': '#e2e8f0',
      'editor.lineHighlightBackground': '#1a1e2a',
      'editorCursor.foreground': '#facc15',
      'editor.selectionBackground': '#334155',
      'editorIndentGuide.background1': '#1f2937',
    },
  });
}

interface Props {
  linguaggio: 'javascript' | 'html' | 'css';
  valore: string;
  onChange?: (valore: string) => void;
  soloLettura?: boolean;
  /** Ctrl+Invio: consegna. */
  onConsegna?: () => void;
  altezza?: string;
  attivo?: boolean;
}

export default function EditorCodice({ linguaggio, valore, onChange, soloLettura = false, onConsegna, altezza = '380px', attivo = true }: Props) {
  const editorRef = useRef<EditorIstanza | null>(null);
  // I callback stanno in ref: Monaco registra i comandi una volta sola al mount.
  const consegna = useRef(onConsegna);
  consegna.current = onConsegna;

  const alMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    definisciTema(monaco);
    monaco.editor.setTheme(TEMA);
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => consegna.current?.());
    // Niente controlli di tipo: gli allievi scrivono JavaScript semplice, i sottolineati rossi di TypeScript confonderebbero.
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({ noSemanticValidation: true, noSyntaxValidation: false });
    if (!soloLettura) editor.focus();
  };

  useEffect(() => {
    editorRef.current?.updateOptions({ readOnly: soloLettura || !attivo });
  }, [soloLettura, attivo]);

  return (
    <div className="overflow-hidden rounded-xl border border-(--color-bordo)" style={{ height: altezza }}>
      <Editor
        height="100%"
        language={linguaggio}
        value={valore}
        theme="vs-dark"
        onMount={alMount}
        onChange={(v) => onChange?.(v ?? '')}
        loading={<div className="flex h-full items-center justify-center text-sm text-(--color-testo-tenue)">Carico l&apos;editor…</div>}
        options={{
          readOnly: soloLettura || !attivo,
          fontSize: 16,
          fontFamily: 'Consolas, "Courier New", monospace',
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          lineNumbers: 'on',
          tabSize: 2,
          wordWrap: 'on',
          padding: { top: 10, bottom: 10 },
          scrollbar: { verticalScrollbarSize: 8, horizontalScrollbarSize: 8 },
          fixedOverflowWidgets: true,
          quickSuggestions: { other: true, comments: false, strings: false },
          suggestOnTriggerCharacters: true,
          acceptSuggestionOnEnter: 'off',
          tabCompletion: 'on',
          autoClosingBrackets: 'always',
          autoClosingQuotes: 'always',
          autoIndent: 'advanced',
          formatOnType: true,
          renderWhitespace: 'none',
          domReadOnly: soloLettura,
        }}
      />
    </div>
  );
}
