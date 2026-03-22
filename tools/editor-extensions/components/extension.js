'use strict';

const vscode = require('vscode');
const path = require('path');
const registry = require('./component-registry.json');

const CATEGORIES = [...new Set(registry.map(c => c.category))];

function getCategoryLabel(cat) {
  const labels = {
    elements: '$(symbol-misc) Elements — visual atoms',
    wrappers: '$(symbol-class) Wrappers — layout & grouping',
    displays: '$(symbol-file) Displays — content rendering',
    scaffolding: '$(symbol-structure) Scaffolding — page structure',
    integrators: '$(symbol-event) Integrators — external data',
    config: '$(gear) Config — non-component objects'
  };
  return labels[cat] || cat;
}

function getComponentQuickPickItem(comp) {
  return {
    label: comp.name,
    description: `${comp.category}/${comp.subniche}`,
    detail: comp.description || '',
    component: comp
  };
}

function buildImportLine(comp) {
  return `import { ${comp.name} } from "${comp.importPath}";`;
}

function buildUsageTag(comp) {
  if (comp.hasChildren) {
    return `<${comp.name}>\n  \n</${comp.name}>`;
  }
  return `<${comp.name} />`;
}

function findExistingImportLine(document, importPath) {
  for (let i = 0; i < document.lineCount; i++) {
    const line = document.lineAt(i).text;
    if (line.includes(importPath)) {
      return { lineNumber: i, text: line };
    }
  }
  return null;
}

function findLastImportLine(document) {
  let lastImport = -1;
  for (let i = 0; i < document.lineCount; i++) {
    const line = document.lineAt(i).text.trim();
    if (line.startsWith('import ')) {
      lastImport = i;
    }
    // Stop scanning after frontmatter + imports section
    if (lastImport > -1 && !line.startsWith('import ') && line !== '') {
      break;
    }
  }
  return lastImport;
}

async function insertComponent() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showWarningMessage('No active editor');
    return;
  }

  // Step 1: Pick category
  const categoryPick = await vscode.window.showQuickPick(
    CATEGORIES.map(cat => ({
      label: getCategoryLabel(cat),
      category: cat,
      description: `${registry.filter(c => c.category === cat && c.status === 'stable').length} components`
    })),
    { placeHolder: 'Pick a component category' }
  );

  if (!categoryPick) return;

  // Step 2: Pick component (filter out deprecated/broken)
  const components = registry
    .filter(c => c.category === categoryPick.category && c.status === 'stable')
    .map(getComponentQuickPickItem);

  const componentPick = await vscode.window.showQuickPick(components, {
    placeHolder: `Pick a ${categoryPick.category} component`,
    matchOnDescription: true,
    matchOnDetail: true
  });

  if (!componentPick) return;

  const comp = componentPick.component;

  // Step 3: Insert
  await editor.edit(editBuilder => {
    const existing = findExistingImportLine(editor.document, comp.importPath);

    if (!existing) {
      // Add import line after last import or at top
      const lastImport = findLastImportLine(editor.document);
      const importPos = lastImport > -1
        ? new vscode.Position(lastImport + 1, 0)
        : new vscode.Position(0, 0);
      editBuilder.insert(importPos, buildImportLine(comp) + '\n');
    }

    // Add component at cursor
    editBuilder.insert(editor.selection.active, buildUsageTag(comp));
  });
}

async function wrapWithComponent() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showWarningMessage('No active editor');
    return;
  }

  const selection = editor.selection;
  if (selection.isEmpty) {
    vscode.window.showWarningMessage('Select text to wrap first');
    return;
  }

  // Only show components that accept children
  const wrappers = registry
    .filter(c => c.hasChildren && c.status === 'stable')
    .map(getComponentQuickPickItem);

  const pick = await vscode.window.showQuickPick(wrappers, {
    placeHolder: 'Wrap selection with which component?',
    matchOnDescription: true,
    matchOnDetail: true
  });

  if (!pick) return;

  const comp = pick.component;
  const selectedText = editor.document.getText(selection);

  await editor.edit(editBuilder => {
    // Add import if not present
    const existing = findExistingImportLine(editor.document, comp.importPath);
    if (!existing) {
      const lastImport = findLastImportLine(editor.document);
      const importPos = lastImport > -1
        ? new vscode.Position(lastImport + 1, 0)
        : new vscode.Position(0, 0);
      editBuilder.insert(importPos, buildImportLine(comp) + '\n');
    }

    // Replace selection with wrapped content
    const wrapped = `<${comp.name}>\n  ${selectedText}\n</${comp.name}>`;
    editBuilder.replace(selection, wrapped);
  });
}

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand('livepeer.insertComponent', insertComponent),
    vscode.commands.registerCommand('livepeer.wrapWithComponent', wrapWithComponent)
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
