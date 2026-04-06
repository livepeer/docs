'use strict';

const path = require('path');
const vscode = require('vscode');
const {
  formatMdxContent,
  getMdxImportSuggestions,
  getRealDocsRoutes,
  normalizeRel
} = require('./lib/authoring-core');

function getWorkspaceRoot(document) {
  const workspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri);
  return workspaceFolder ? workspaceFolder.uri.fsPath : '';
}

function fullDocumentRange(document) {
  const lastLine = document.lineCount > 0 ? document.lineAt(document.lineCount - 1) : null;
  const end = lastLine ? lastLine.range.end : new vscode.Position(0, 0);
  return new vscode.Range(new vscode.Position(0, 0), end);
}

function getQuotedStringContext(lineText, character) {
  const quoteChars = [`'`, `"`];
  for (const quoteChar of quoteChars) {
    let start = -1;
    for (let index = 0; index < lineText.length; index += 1) {
      if (lineText[index] !== quoteChar) continue;
      if (start === -1) {
        start = index;
        continue;
      }
      if (character >= start + 1 && character <= index) {
        return {
          value: lineText.slice(start + 1, index),
          start: start + 1,
          end: index
        };
      }
      start = -1;
    }
  }
  return null;
}

function buildCompletionItems(values, range, kind) {
  return values.map((value) => {
    const item = new vscode.CompletionItem(value, kind);
    item.insertText = value;
    item.range = range;
    item.sortText = value;
    return item;
  });
}

function createMdxFormatter() {
  return {
    provideDocumentFormattingEdits(document) {
      const nextContent = formatMdxContent(document.getText());
      if (nextContent === document.getText()) {
        return [];
      }
      return [vscode.TextEdit.replace(fullDocumentRange(document), nextContent)];
    }
  };
}

function createDocsJsonCompletionProvider() {
  return {
    provideCompletionItems(document, position) {
      if (path.basename(document.uri.fsPath) !== 'docs.json') {
        return [];
      }

      const line = document.lineAt(position.line).text;
      const context = getQuotedStringContext(line, position.character);
      if (!context) {
        return [];
      }

      const repoRoot = getWorkspaceRoot(document);
      if (!repoRoot) {
        return [];
      }

      const range = new vscode.Range(
        new vscode.Position(position.line, context.start),
        new vscode.Position(position.line, context.end)
      );
      const routes = getRealDocsRoutes(repoRoot).filter((route) =>
        !context.value || route.startsWith(context.value)
      );

      return buildCompletionItems(routes, range, vscode.CompletionItemKind.File);
    }
  };
}

function createMdxImportCompletionProvider() {
  return {
    provideCompletionItems(document, position) {
      const line = document.lineAt(position.line).text;
      if (!/^\s*import\b/.test(line) || !/\bfrom\s+['"]/.test(line)) {
        return [];
      }

      const context = getQuotedStringContext(line, position.character);
      if (!context) {
        return [];
      }

      const repoRoot = getWorkspaceRoot(document);
      if (!repoRoot) {
        return [];
      }

      const currentFileRel = normalizeRel(path.relative(repoRoot, document.uri.fsPath));
      const suggestions = getMdxImportSuggestions(repoRoot, currentFileRel, context.value);
      const range = new vscode.Range(
        new vscode.Position(position.line, context.start),
        new vscode.Position(position.line, context.end)
      );

      return [
        ...buildCompletionItems(suggestions.snippetSuggestions, range, vscode.CompletionItemKind.File),
        ...buildCompletionItems(suggestions.localSuggestions, range, vscode.CompletionItemKind.Reference)
      ];
    }
  };
}

function activate(context) {
  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider({ language: 'mdx' }, createMdxFormatter()),
    vscode.languages.registerCompletionItemProvider(
      { language: 'json', scheme: 'file', pattern: '**/docs.json' },
      createDocsJsonCompletionProvider(),
      '/',
      '"'
    ),
    vscode.languages.registerCompletionItemProvider(
      { language: 'mdx', scheme: 'file' },
      createMdxImportCompletionProvider(),
      '/',
      '.',
      '"',
      "'"
    )
  );
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
