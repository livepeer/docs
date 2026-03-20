#!/usr/bin/env node
/**
 * @script      generate-script-registry
 * @type        generator
 * @concern     governance
 * @niche       catalogs
 * @purpose     governance:index-management
 * @description Derives tools/config/script-registry.json from JSDoc headers across all governed
 *   script roots. JSDoc headers are authoritative; this file is a derived index. Run whenever
 *   script headers change. Output schema uses the 11-tag standard (@type, @concern, @niche, etc.).
 * @mode        write
 * @pipeline    P3
 * @scope       tools/scripts, tests, workspace/scripts, .githooks, .github/scripts
 * @usage       node tools/scripts/generators/governance/catalogs/generate-script-registry.js [--dry-run]
 * @policy      JSDoc headers are source of truth (doc-recommendation.md Q2). Never hand-edit output.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const {
  GOVERNED_ROOTS,
  SCRIPT_EXTENSIONS,
  normalizeRepoPath,
  shouldExcludeScriptPath
} = require('../../../../lib/script-governance-config');
const {
  extractLeadingScriptHeader,
  getTagValue
} = require('../../../../lib/script-header-utils');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');
const OUTPUT_PATH = 'tools/config/script-registry.json';
const DRY_RUN = process.argv.includes('--dry-run');

const VALID_TYPES = new Set(['audit', 'generator', 'validator', 'remediator', 'dispatch', 'automation']);
const SCRIPT_EXTENSIONS_SET = new Set(SCRIPT_EXTENSIONS);

// ---------------------------------------------------------------------------
// File walking
// ---------------------------------------------------------------------------

function walkFiles(dirPath, out = []) {
  const full = path.join(REPO_ROOT, dirPath);
  if (!fs.existsSync(full)) return out;
  const entries = fs.readdirSync(full, { withFileTypes: true });
  for (const entry of entries) {
    const rel = normalizeRepoPath(path.join(dirPath, entry.name));
    if (shouldExcludeScriptPath(rel)) continue;
    if (entry.isDirectory()) {
      walkFiles(rel, out);
    } else {
      const ext = path.extname(rel).toLowerCase();
      if (SCRIPT_EXTENSIONS_SET.has(ext)) out.push(rel);
    }
  }
  return out;
}

function collectAllScripts() {
  const scripts = new Set();
  for (const root of GOVERNED_ROOTS) {
    walkFiles(root).forEach((p) => scripts.add(p));
  }
  // Also include hook scripts (no extension)
  const hooksDir = path.join(REPO_ROOT, '.githooks');
  if (fs.existsSync(hooksDir)) {
    for (const entry of fs.readdirSync(hooksDir, { withFileTypes: true })) {
      if (entry.isFile() && !path.extname(entry.name)) {
        const rel = normalizeRepoPath(path.join('.githooks', entry.name));
        if (!shouldExcludeScriptPath(rel)) scripts.add(rel);
      }
    }
  }
  return [...scripts].sort();
}

// ---------------------------------------------------------------------------
// Path-based taxonomy derivation (fallback when JSDoc tags are absent)
// ---------------------------------------------------------------------------

const TYPE_FROM_SEGMENT = new Map([
  ['audits', 'audit'],
  ['generators', 'generator'],
  ['validators', 'validator'],
  ['remediators', 'remediator'],
  ['dispatch', 'dispatch'],
  ['automations', 'automation']
]);

function deriveFromPath(repoPath) {
  const parts = repoPath.split('/');
  // tools/scripts/<type>/<concern>/<niche>/...
  // Find the type segment after 'scripts'
  const scriptsIdx = parts.indexOf('scripts');
  if (scriptsIdx >= 0 && parts.length > scriptsIdx + 1) {
    const typeSegment = parts[scriptsIdx + 1];
    const type = TYPE_FROM_SEGMENT.get(typeSegment) || '';
    const concern = parts[scriptsIdx + 2] || '';
    const niche = parts[scriptsIdx + 3] || '';
    return { type, concern, niche };
  }
  return { type: '', concern: '', niche: '' };
}

// ---------------------------------------------------------------------------
// JSDoc extraction
// ---------------------------------------------------------------------------

function extractEntry(repoPath) {
  const fullPath = path.join(REPO_ROOT, repoPath);
  let content = '';
  try {
    content = fs.readFileSync(fullPath, 'utf8');
  } catch (_) {
    return null;
  }

  const header = extractLeadingScriptHeader(content);
  const derived = deriveFromPath(repoPath);

  const rawType = getTagValue(header, '@type') || derived.type;
  const type = VALID_TYPES.has(rawType) ? rawType : (derived.type || rawType);

  return {
    path: repoPath,
    name: path.basename(repoPath),
    type: type || '',
    concern: getTagValue(header, '@concern') || derived.concern || '',
    niche: getTagValue(header, '@niche') || derived.niche || '',
    purpose: getTagValue(header, '@purpose') || '',
    description: getTagValue(header, '@description') || '',
    mode: getTagValue(header, '@mode') || '',
    pipeline: getTagValue(header, '@pipeline') || '',
    scope: getTagValue(header, '@scope') || '',
    usage: getTagValue(header, '@usage') || '',
    policy: getTagValue(header, '@policy') || '',
    status: repoPath.includes('/x-archive/') ? 'archived' : 'active'
  };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const scripts = collectAllScripts();
  const entries = [];
  let skipped = 0;

  for (const scriptPath of scripts) {
    const entry = extractEntry(scriptPath);
    if (!entry) { skipped++; continue; }
    entries.push(entry);
  }

  const output = JSON.stringify(entries, null, 2) + '\n';
  const outputFull = path.join(REPO_ROOT, OUTPUT_PATH);

  if (DRY_RUN) {
    console.log(`[dry-run] Would write ${OUTPUT_PATH} with ${entries.length} entries (${skipped} skipped).`);
    // Print first 3 entries as sample
    console.log('Sample entries:');
    entries.slice(0, 3).forEach((e) => console.log(JSON.stringify(e, null, 2)));
    return;
  }

  fs.mkdirSync(path.dirname(outputFull), { recursive: true });
  fs.writeFileSync(outputFull, output, 'utf8');
  console.log(`Wrote ${OUTPUT_PATH} — ${entries.length} entries (${skipped} skipped).`);
}

main();
