'use strict';

const vscode = require('vscode');

function normalizeItem(text) {
  return String(text || '')
    .replace(/^\s*(?:[-*+]\s+|\d+[.)]\s+)+/, '')
    .trim();
}

function getConfig() {
  return vscode.workspace.getConfiguration('livepeer.markdownListTools');
}

function splitSelection(text) {
  const raw = String(text || '').trim();
  if (!raw) return [];

  if (raw.includes('\n')) {
    return raw
      .split(/\r?\n/)
      .map(normalizeItem)
      .filter(Boolean);
  }

  if (raw.includes(',')) {
    return raw
      .split(/\s*,\s*/)
      .map(normalizeItem)
      .filter(Boolean);
  }

  if (raw.includes(';')) {
    return raw
      .split(/\s*;\s*/)
      .map(normalizeItem)
      .filter(Boolean);
  }

  return [normalizeItem(raw)].filter(Boolean);
}

function commaSeparatedItems(text) {
  const raw = String(text || '').trim();
  if (!raw || raw.includes('\n') || !raw.includes(',')) return [];

  return raw
    .split(/\s*,\s*/)
    .map(normalizeItem)
    .filter(Boolean);
}

function toBulletList(items) {
  return items.map((item) => `- ${item}`).join('\n');
}

function toNumberedList(items) {
  return items.map((item, index) => `${index + 1}. ${item}`).join('\n');
}

function toCsv(items) {
  return items.join(', ');
}

function lineIndentAt(document, position) {
  const line = document.lineAt(position.line).text;
  const before = line.slice(0, position.character);
  const indentMatch = before.match(/^\s*/);
  return indentMatch ? indentMatch[0] : '';
}

function previousNonEmptyLine(document, lineNumber) {
  for (let current = lineNumber - 1; current >= 0; current -= 1) {
    const text = document.lineAt(current).text;
    if (text.trim()) {
      return { lineNumber: current, text };
    }
  }
  return null;
}

function shouldBreakSelectionOntoNewLine(document, selection, replacementText) {
  if (!replacementText.includes('\n')) return false;

  const line = document.lineAt(selection.start.line).text;
  const prefix = line.slice(0, selection.start.character);
  return Boolean(prefix.trim());
}

function shouldIndentUnderPreviousLabel(document, selection, replacementText) {
  if (!replacementText.includes('\n')) return false;

  const line = document.lineAt(selection.start.line).text;
  const prefix = line.slice(0, selection.start.character);
  if (prefix.trim()) return false;

  const previousLine = previousNonEmptyLine(document, selection.start.line);
  if (!previousLine) return false;

  return previousLine.text.trim().endsWith(':');
}

function formatReplacementText(document, selection, replacementText) {
  const breakOntoNewLine = shouldBreakSelectionOntoNewLine(document, selection, replacementText);
  const indentUnderPreviousLabel = shouldIndentUnderPreviousLabel(document, selection, replacementText);

  if (!breakOntoNewLine && !indentUnderPreviousLabel) {
    return replacementText;
  }

  const baseIndent = indentUnderPreviousLabel
    ? lineIndentAt(document, new vscode.Position(selection.start.line - 1, 0))
    : lineIndentAt(document, selection.start);
  const indent = `${baseIndent}  `;
  const indentedBody = replacementText
    .split('\n')
    .map((line) => `${indent}${line}`)
    .join('\n');

  return breakOntoNewLine ? `\n${indentedBody}` : indentedBody;
}

async function replaceSelections(editor, formatter) {
  const edits = [];

  for (const selection of editor.selections) {
    if (selection.isEmpty) continue;

    const selectedText = editor.document.getText(selection);
    const items = splitSelection(selectedText);
    if (!items.length) continue;

    const replacementText = formatter(items);
    edits.push({
      selection,
      text: formatReplacementText(editor.document, selection, replacementText)
    });
  }

  if (!edits.length) {
    void vscode.window.showInformationMessage('Select text to format as a Markdown list.');
    return;
  }

  await editor.edit((editBuilder) => {
    edits.forEach(({ selection, text }) => {
      editBuilder.replace(selection, text);
    });
  });
}

function shouldAutoFormatCommaSeparated(text) {
  const config = getConfig();
  const enabled = config.get('autoFormatCommaSeparated.enabled', false);
  const minItems = config.get('autoFormatCommaSeparated.minItems', 4);
  if (!enabled) return false;

  const items = commaSeparatedItems(text);
  return items.length >= minItems;
}

async function runListPicker() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return;

  const nonEmptySelections = editor.selections.filter((selection) => !selection.isEmpty);
  if (!nonEmptySelections.length) {
    void vscode.window.showInformationMessage('Select text to format as a Markdown list.');
    return;
  }

  const allSelectionsEligible = nonEmptySelections.every((selection) => {
    const selectedText = editor.document.getText(selection);
    return shouldAutoFormatCommaSeparated(selectedText);
  });

  if (allSelectionsEligible) {
    await replaceSelections(editor, toBulletList);
    return;
  }

  const choice = await vscode.window.showQuickPick(
    [
      { label: 'Bullet List', formatter: toBulletList },
      { label: 'Numbered List', formatter: toNumberedList }
    ],
    { placeHolder: 'Choose a Markdown list format' }
  );

  if (!choice) return;
  await replaceSelections(editor, choice.formatter);
}

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand('livepeer.formatSelectionAsBulletedList', async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;
      await replaceSelections(editor, toBulletList);
    }),
    vscode.commands.registerCommand('livepeer.formatSelectionAsNumberedList', async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;
      await replaceSelections(editor, toNumberedList);
    }),
    vscode.commands.registerCommand('livepeer.formatSelectionAsCsv', async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;
      await replaceSelections(editor, toCsv);
    }),
    vscode.commands.registerCommand('livepeer.formatSelectionAsList', runListPicker)
  );
}

function deactivate() {}

module.exports = { activate, deactivate };
