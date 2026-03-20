'use strict';

const path = require('path');
const vscode = require('vscode');
const { parse } = require('./lib/mdx-parser');
const { renderSegments } = require('./lib/component-map');
const { buildWebviewHtml } = require('./lib/webview-template');

/** @type {Map<string, vscode.WebviewPanel>} uri → panel */
const panels = new Map();

/** @type {Map<string, NodeJS.Timeout>} uri → debounce timer */
const timers = new Map();

function getWorkspaceRoot(document) {
  const folder = vscode.workspace.getWorkspaceFolder(document.uri);
  return folder ? folder.uri.fsPath : path.dirname(document.uri.fsPath);
}

function isDarkTheme() {
  const kind = vscode.window.activeColorTheme.kind;
  return kind === vscode.ColorThemeKind.Dark ||
         kind === vscode.ColorThemeKind.HighContrast;
}

function openPreview(document, viewColumn) {
  const uri = document.uri.toString();

  if (panels.has(uri)) {
    panels.get(uri).reveal(viewColumn);
    return;
  }

  const fileName = path.basename(document.uri.fsPath);
  const panel = vscode.window.createWebviewPanel(
    'lpdMdxPreview',
    `Preview: ${fileName}`,
    viewColumn,
    {
      enableScripts: true,
      localResourceRoots: [
        vscode.Uri.file(path.join(__dirname, 'media')),
        vscode.Uri.file(getWorkspaceRoot(document))
      ],
      retainContextWhenHidden: true
    }
  );

  panels.set(uri, panel);

  panel.onDidDispose(() => {
    panels.delete(uri);
    const timer = timers.get(uri);
    if (timer) {
      clearTimeout(timer);
      timers.delete(uri);
    }
  });

  updatePreview(panel, document);
}

function updatePreview(panel, document) {
  const text = document.getText();
  const segments = parse(text);
  const dark = isDarkTheme();
  const bodyHtml = renderSegments(segments);

  const mediaPath = path.join(__dirname, 'media');
  const cssUri = panel.webview.asWebviewUri(
    vscode.Uri.file(path.join(mediaPath, 'preview.css'))
  );
  const jsUri = panel.webview.asWebviewUri(
    vscode.Uri.file(path.join(mediaPath, 'preview.js'))
  );
  const markdownItUri = panel.webview.asWebviewUri(
    vscode.Uri.file(path.join(mediaPath, 'markdown-it.min.js'))
  );
  const mermaidUri = panel.webview.asWebviewUri(
    vscode.Uri.file(path.join(mediaPath, 'mermaid.min.js'))
  );

  const workspaceRoot = getWorkspaceRoot(document);

  panel.webview.html = buildWebviewHtml({
    bodyHtml,
    cssUri: cssUri.toString(),
    jsUri: jsUri.toString(),
    markdownItUri: markdownItUri.toString(),
    mermaidUri: mermaidUri.toString(),
    dark,
    workspaceRoot,
    webview: panel.webview
  });
}

function scheduleUpdate(document) {
  const uri = document.uri.toString();
  const panel = panels.get(uri);
  if (!panel) return;

  const existing = timers.get(uri);
  if (existing) clearTimeout(existing);

  timers.set(uri, setTimeout(() => {
    timers.delete(uri);
    updatePreview(panel, document);
  }, 300));
}

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand('livepeer.openMdxPreview', () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;
      openPreview(editor.document, vscode.ViewColumn.Active);
    }),

    vscode.commands.registerCommand('livepeer.openMdxPreviewToSide', () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;
      openPreview(editor.document, vscode.ViewColumn.Beside);
    }),

    vscode.workspace.onDidChangeTextDocument((e) => {
      scheduleUpdate(e.document);
    }),

    vscode.window.onDidChangeActiveColorTheme(() => {
      for (const [uri, panel] of panels) {
        const doc = vscode.workspace.textDocuments.find(
          (d) => d.uri.toString() === uri
        );
        if (doc) updatePreview(panel, doc);
      }
    })
  );
}

function deactivate() {
  for (const panel of panels.values()) {
    panel.dispose();
  }
  panels.clear();
}

module.exports = { activate, deactivate };
