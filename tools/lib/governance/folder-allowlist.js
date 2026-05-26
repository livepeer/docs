'use strict';

/**
 * @module      tools/lib/governance/folder-allowlist
 * @purpose     Shared folder-allowlist helper. Reads .allowlist, lists actual entries, computes drift.
 * @policy      D-GOV-08 (every folder is governed)
 */

const fs = require('fs');
const path = require('path');

function readAllowlist(folderPath) {
  const allowlistPath = path.join(folderPath, '.allowlist');
  if (!fs.existsSync(allowlistPath)) return null;
  return fs
    .readFileSync(allowlistPath, 'utf8')
    .split('\n')
    .map((line) => line.replace(/#.*$/, '').trim())
    .filter((line) => line.length > 0);
}

const IMPLICIT_SKIPS = new Set([
  '.allowlist',
  '.DS_Store',
  '.git',
  '.cache',
  '.env',
  '.env.local',
  '.env.example',
  'node_modules',
]);

function listActualEntries(folderPath) {
  if (!fs.existsSync(folderPath)) return [];
  return fs
    .readdirSync(folderPath, { withFileTypes: true })
    .map((entry) => {
      if (IMPLICIT_SKIPS.has(entry.name)) return null;
      if (entry.name.startsWith('x-archive')) return null;
      return entry.isDirectory() ? `${entry.name}/` : entry.name;
    })
    .filter(Boolean);
}

function matchEntry(actual, allowlist) {
  // Normalise: strip trailing slash from both sides so '.claude' matches '.claude/' and vice versa.
  const norm = (s) => (s.endsWith('/') ? s.slice(0, -1) : s);
  const actualNorm = norm(actual);
  return allowlist.some((permitted) => norm(permitted) === actualNorm);
}

function computeDrift(folderPath) {
  const allowlist = readAllowlist(folderPath);
  if (allowlist === null) {
    return { ungoverned: true, allowlist: null, actual: [], drift: [], permitted: [] };
  }
  const actual = listActualEntries(folderPath);
  const drift = actual.filter((entry) => !matchEntry(entry, allowlist));
  const permitted = actual.filter((entry) => matchEntry(entry, allowlist));
  return { ungoverned: false, allowlist, actual, drift, permitted };
}

function findGovernedFolders(repoRoot) {
  const candidates = [
    '.',
    '.github',
    'ai-tools',
    'docs-guide',
    'tools/config',
    'snippets',
    'workspace',
    'v2',
  ];
  return candidates
    .map((rel) => ({ rel, abs: path.join(repoRoot, rel) }))
    .filter(({ abs }) => {
      const allowlistPath = path.join(abs, '.allowlist');
      return fs.existsSync(allowlistPath);
    });
}

module.exports = {
  readAllowlist,
  listActualEntries,
  matchEntry,
  computeDrift,
  findGovernedFolders,
};
