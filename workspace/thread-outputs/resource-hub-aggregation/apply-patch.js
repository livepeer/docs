#!/usr/bin/env node
/**
 * Apply the Resource HUB groups patch to docs.json.
 * - Reads docs.json
 * - Finds the tab "Resource HUB" and replaces its anchor's groups[]
 * - Writes a backup before saving
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../../..');
const DOCS = path.join(ROOT, 'docs.json');
const BACKUP = path.join(__dirname, `docs.json.backup-${Date.now()}`);

const newGroups = JSON.parse(fs.readFileSync(path.join(__dirname, 'new-hub-groups.json'), 'utf8'));

const docs = JSON.parse(fs.readFileSync(DOCS, 'utf8'));

// docs.navigation.versions[].tabs[] OR docs.navigation.tabs[] — Mintlify can be either
// Walk to find a tab with name "Resource HUB"
function findHubTab(node, foundList) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) { node.forEach(n => findHubTab(n, foundList)); return; }
  if (node.tab === 'Resource HUB' && Array.isArray(node.anchors)) {
    foundList.push(node);
  }
  for (const k of Object.keys(node)) {
    if (typeof node[k] === 'object') findHubTab(node[k], foundList);
  }
}

const found = [];
findHubTab(docs, found);
if (found.length !== 1) {
  console.error(`Expected exactly 1 Resource HUB tab, found ${found.length}`);
  process.exit(1);
}
const hubTab = found[0];

// Find the anchor with name "Resource HUB"
const hubAnchor = hubTab.anchors.find(a => a.anchor === 'Resource HUB');
if (!hubAnchor) {
  console.error('No anchor named "Resource HUB" inside the Resource HUB tab');
  process.exit(1);
}

const oldGroupCount = hubAnchor.groups.length;
const oldPageCount = JSON.stringify(hubAnchor.groups).match(/"v2\/|"docs-guide\/|"snippets\/|"ai-tools\/|"operations\//g)?.length || 0;

// Backup
fs.writeFileSync(BACKUP, fs.readFileSync(DOCS));
console.log(`Backup written: ${BACKUP}`);

// Replace
hubAnchor.groups = newGroups;

const newGroupCount = newGroups.length;
const newPageCount = JSON.stringify(newGroups).match(/"v2\/|"docs-guide\/|"snippets\/|"ai-tools\/|"operations\//g)?.length || 0;

// Write back, preserving 2-space indent (Mintlify convention)
fs.writeFileSync(DOCS, JSON.stringify(docs, null, 2) + '\n');

console.log(`Patched docs.json`);
console.log(`  Groups: ${oldGroupCount} → ${newGroupCount}`);
console.log(`  Pages : ${oldPageCount} → ${newPageCount}`);
