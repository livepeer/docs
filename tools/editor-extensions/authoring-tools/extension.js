'use strict';

const path = require('path');
const vscode = require('vscode');
const {
  formatMdxContent,
  getMdxComponentSuggestions,
  getMdxImportSuggestions,
  getRealDocsRoutes,
  normalizeRel,
  upsertNamedImport,
  validateImportPathsExist
} = require('./lib/authoring-core');

const ALPHANUMERIC_TRIGGER_CHARACTERS = [
  ...'abcdefghijklmnopqrstuvwxyz',
  ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ...'0123456789'
];

function getWorkspaceRoot(document) {
  const workspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri);
  return workspaceFolder ? workspaceFolder.uri.fsPath : '';
}

function isFeatureEnabled(document, key) {
  return vscode.workspace
    .getConfiguration('livepeer.authoringTools', document.uri)
    .get(key, true);
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
  return values.map((value, index) => {
    const item = new vscode.CompletionItem(value, kind);
    item.insertText = value;
    item.range = range;
    item.sortText = `!${String(index).padStart(5, '0')}`;
    item.preselect = index === 0;
    item.detail = 'repo path (verified)';
    return item;
  });
}

function buildRange(document, startOffset, endOffset) {
  return new vscode.Range(document.positionAt(startOffset), document.positionAt(endOffset));
}

function getComponentTagContext(lineText, character) {
  const beforeCursor = lineText.slice(0, character);
  const match = beforeCursor.match(/<([A-Za-z][A-Za-z0-9]*)?$/);
  if (!match) {
    return null;
  }

  const typed = match[1] || '';
  return {
    typed,
    start: character - typed.length
  };
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
      if (!isFeatureEnabled(document, 'docsJsonCompletions.enabled')) {
        return [];
      }

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

function extractNamedImportsFromLine(lineText) {
  const match = lineText.match(/import\s+\{([^}]*)\}/);
  if (!match) return [];
  return match[1].split(',').map((s) => s.trim().split(/\s+as\s+/)[0].trim()).filter(Boolean);
}

function createMdxImportCompletionProvider() {
  return {
    provideCompletionItems(document, position) {
      if (!isFeatureEnabled(document, 'mdxImportCompletions.enabled')) {
        return [];
      }

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

      const namedImports = extractNamedImportsFromLine(line);
      const currentFileRel = normalizeRel(path.relative(repoRoot, document.uri.fsPath));
      const suggestions = getMdxImportSuggestions(repoRoot, currentFileRel, context.value, namedImports);
      const range = new vscode.Range(
        new vscode.Position(position.line, context.start),
        new vscode.Position(position.line, context.end)
      );

      const registryItems = suggestions.registryMatches.map((value, index) => {
        const item = new vscode.CompletionItem(value, vscode.CompletionItemKind.Module);
        item.insertText = value;
        item.range = range;
        item.sortText = `!!${String(index).padStart(3, '0')}`;
        item.preselect = true;
        item.detail = 'component registry (exact match)';
        return item;
      });

      return [
        ...registryItems,
        ...buildCompletionItems(suggestions.snippetSuggestions, range, vscode.CompletionItemKind.File),
        ...buildCompletionItems(suggestions.localSuggestions, range, vscode.CompletionItemKind.Reference)
      ];
    }
  };
}

function createMdxComponentCompletionProvider() {
  return {
    provideCompletionItems(document, position) {
      if (!isFeatureEnabled(document, 'mdxComponentCompletions.enabled')) {
        return [];
      }

      const line = document.lineAt(position.line).text;
      if (/^\s*import\b/.test(line)) {
        return [];
      }

      const context = getComponentTagContext(line, position.character);
      if (!context) {
        return [];
      }

      const repoRoot = getWorkspaceRoot(document);
      if (!repoRoot) {
        return [];
      }

      const range = new vscode.Range(
        new vscode.Position(position.line, context.start),
        new vscode.Position(position.line, position.character)
      );

      return getMdxComponentSuggestions(repoRoot, context.typed).map((component) => {
        const item = new vscode.CompletionItem(component.name, vscode.CompletionItemKind.Class);
        item.range = range;
        item.sortText = component.name;
        item.filterText = component.name;
        item.detail = [component.category, component.subniche].filter(Boolean).join(' / ');
        item.documentation = component.description;
        item.insertText = new vscode.SnippetString(
          component.hasChildren
            ? `${component.name}>\n  $0\n</${component.name}>`
            : `${component.name} />`
        );

        const importEdit = upsertNamedImport(document.getText(), component.importPath, component.name);
        if (importEdit) {
          item.additionalTextEdits = [
            vscode.TextEdit.replace(buildRange(document, importEdit.start, importEdit.end), importEdit.text)
          ];
        }

        return item;
      });
    }
  };
}

function getImportNameContext(lineText, character) {
  const importStart = lineText.match(/^\s*import\s+\{/);
  if (!importStart) return null;

  const braceOpen = lineText.indexOf('{');
  const braceClose = lineText.indexOf('}');

  if (braceOpen === -1) return null;
  if (braceClose !== -1 && character > braceClose) return null;
  if (character <= braceOpen) return null;

  const inside = lineText.slice(braceOpen + 1, character);
  const lastComma = inside.lastIndexOf(',');
  const typed = inside.slice(lastComma + 1).trim();

  return {
    typed,
    start: braceOpen + 1 + (lastComma === -1 ? 0 : lastComma + 1) + (inside.slice(lastComma + 1).length - inside.slice(lastComma + 1).trimStart().length),
    lineHasFrom: /\bfrom\s+['"]/.test(lineText),
    lineEnd: lineText.length
  };
}

function createImportNameCompletionProvider() {
  return {
    provideCompletionItems(document, position) {
      if (!isFeatureEnabled(document, 'mdxComponentCompletions.enabled')) {
        return [];
      }

      const line = document.lineAt(position.line).text;
      const context = getImportNameContext(line, position.character);
      if (!context || !context.typed) return [];

      if (context.lineHasFrom) return [];

      const repoRoot = getWorkspaceRoot(document);
      if (!repoRoot) return [];

      return getMdxComponentSuggestions(repoRoot, context.typed).map((component) => {
        const item = new vscode.CompletionItem(component.name, vscode.CompletionItemKind.Module);
        item.sortText = `!${component.name}`;
        item.preselect = true;
        item.detail = `from ${component.importPath}`;
        item.documentation = component.description;

        item.insertText = `${component.name} } from '${component.importPath}'`;
        item.range = new vscode.Range(
          new vscode.Position(position.line, context.start),
          new vscode.Position(position.line, context.lineEnd)
        );

        return item;
      });
    }
  };
}

const SUPPORTED_LANGUAGES = new Set(['mdx', 'javascriptreact', 'javascript']);

function runImportDiagnostics(document, diagnosticCollection) {
  if (!SUPPORTED_LANGUAGES.has(document.languageId)) {
    return;
  }

  const repoRoot = getWorkspaceRoot(document);
  if (!repoRoot) {
    return;
  }

  const currentFileRel = normalizeRel(path.relative(repoRoot, document.uri.fsPath));
  const findings = validateImportPathsExist(repoRoot, document.getText(), currentFileRel);
  const diagnostics = findings.map((finding) => {
    const range = new vscode.Range(
      new vscode.Position(finding.line, finding.startChar),
      new vscode.Position(finding.line, finding.endChar)
    );
    const diagnostic = new vscode.Diagnostic(range, finding.message, vscode.DiagnosticSeverity.Error);
    diagnostic.source = 'livepeer-authoring';
    return diagnostic;
  });

  diagnosticCollection.set(document.uri, diagnostics);
}

function activate(context) {
  const importDiagnostics = vscode.languages.createDiagnosticCollection('livepeer-imports');
  context.subscriptions.push(importDiagnostics);

  const importTriggers = ['/', '.', '"', "'"];
  const componentTriggers = ['<', ...ALPHANUMERIC_TRIGGER_CHARACTERS];

  context.subscriptions.push(
    vscode.languages.registerDocumentFormattingEditProvider({ language: 'mdx' }, createMdxFormatter()),
    vscode.languages.registerCompletionItemProvider(
      { language: 'json', scheme: 'file', pattern: '**/docs.json' },
      createDocsJsonCompletionProvider(),
      '/',
      '"'
    ),
    // MDX import + component completions
    vscode.languages.registerCompletionItemProvider(
      { language: 'mdx', scheme: 'file' },
      createMdxImportCompletionProvider(),
      ...importTriggers
    ),
    vscode.languages.registerCompletionItemProvider(
      { language: 'mdx', scheme: 'file' },
      createMdxComponentCompletionProvider(),
      ...componentTriggers
    ),
    // JSX import + component completions
    vscode.languages.registerCompletionItemProvider(
      { language: 'javascriptreact', scheme: 'file' },
      createMdxImportCompletionProvider(),
      ...importTriggers
    ),
    vscode.languages.registerCompletionItemProvider(
      { language: 'javascriptreact', scheme: 'file' },
      createMdxComponentCompletionProvider(),
      ...componentTriggers
    ),
    // JS import + component completions
    vscode.languages.registerCompletionItemProvider(
      { language: 'javascript', scheme: 'file' },
      createMdxImportCompletionProvider(),
      ...importTriggers
    ),
    vscode.languages.registerCompletionItemProvider(
      { language: 'javascript', scheme: 'file' },
      createMdxComponentCompletionProvider(),
      ...componentTriggers
    ),
    // Import name completions (type component name inside import {}, get full import line)
    vscode.languages.registerCompletionItemProvider(
      { language: 'mdx', scheme: 'file' },
      createImportNameCompletionProvider(),
      ...ALPHANUMERIC_TRIGGER_CHARACTERS
    ),
    vscode.languages.registerCompletionItemProvider(
      { language: 'javascriptreact', scheme: 'file' },
      createImportNameCompletionProvider(),
      ...ALPHANUMERIC_TRIGGER_CHARACTERS
    ),
    vscode.languages.registerCompletionItemProvider(
      { language: 'javascript', scheme: 'file' },
      createImportNameCompletionProvider(),
      ...ALPHANUMERIC_TRIGGER_CHARACTERS
    )
  );

  context.subscriptions.push(
    vscode.workspace.onDidSaveTextDocument((document) => {
      runImportDiagnostics(document, importDiagnostics);
    }),
    vscode.workspace.onDidOpenTextDocument((document) => {
      runImportDiagnostics(document, importDiagnostics);
    }),
    vscode.workspace.onDidChangeTextDocument((event) => {
      runImportDiagnostics(event.document, importDiagnostics);
    })
  );

  if (vscode.window.activeTextEditor) {
    runImportDiagnostics(vscode.window.activeTextEditor.document, importDiagnostics);
  }
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
