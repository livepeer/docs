#!/usr/bin/env node
/**
 * @script      generate-script-registry
 * @type        generator
 * @concern     governance
 * @niche       catalogs
 * @purpose     
 * @description Generate the governed script registry from script headers so classification, catalogs, and script-docs enforcement share one derived source of truth.
 * @mode        generate
 * @pipeline    manual
 * @scope       operations/scripts, operations/tests, workspace/scripts, .githooks, .github/scripts
 * @usage       node operations/scripts/generators/governance/catalogs/generate-script-registry.js [--dry-run]
 * @policy      R-R14, R-R18
 */

'use strict';

const fs = require('fs');
const path = require('path');

const {
  GOVERNED_ROOTS,
  SCRIPT_EXTENSIONS,
  normalizeRepoPath,
  shouldExcludeScriptPath
} = require('../../../../../tools/lib/governance/script-governance-config');
const {
  extractLeadingScriptHeader,
  getTagValue
} = require('../../../../../tools/lib/governance/script-header-utils');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');
const OUTPUT_PATH = 'tools/config/registry/script-registry.json';
const DRY_RUN = process.argv.includes('--dry-run');

// Aligned to actions framework: D-ACT-07 (integrator), D-ACT-01 (interface)
const VALID_TYPES = new Set(['audit', 'generator', 'validator', 'remediator', 'dispatch', 'integrator', 'interface']);
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
      if (SCRIPT_EXTENSIONS_SET.has(ext)) {
        out.push(rel);
        continue;
      }

      if (!ext) {
        try {
          const content = fs.readFileSync(path.join(REPO_ROOT, rel), 'utf8');
          if (content.startsWith('#!/usr/bin/env') || content.startsWith('#!/bin/')) {
            out.push(rel);
          }
        } catch (_) {
          // Ignore unreadable files; extractEntry will handle read failures later.
        }
      }
    }
  }
  return out;
}

function collectAllScripts() {
  const scripts = new Set();
  for (const root of GOVERNED_ROOTS) {
    walkFiles(root).forEach((p) => scripts.add(p));
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
  ['integrators', 'integrator'],
  ['interfaces', 'interface'],
]);

// Legacy concern mapping — matches LEGACY_CONCERN_MAP in script-governance-config.js
const LEGACY_CONCERN_MAP = { components: 'maintenance', ai: 'discoverability', governance: 'governance' };
const CONTENT_NICHE_TO_CONCERN = {
  health: 'health', quality: 'health', structure: 'health', repair: 'health', veracity: 'health',
  style: 'brand', grammar: 'brand', copy: 'brand',
  data: 'integrations', 'language-translation': 'integrations',
  seo: 'discoverability', reference: 'maintenance', catalogs: 'maintenance',
  reconciliation: 'maintenance', classification: 'governance',
};
// Legacy type mapping
const LEGACY_TYPE_MAP = { automation: 'integrator', orchestrator: 'dispatch', enforcer: 'validator' };

function deriveFromPath(repoPath) {
  const parts = repoPath.split('/');
  const scriptsIdx = parts.indexOf('scripts');
  if (scriptsIdx >= 0 && parts.length > scriptsIdx + 1) {
    const typeSegment = parts[scriptsIdx + 1];
    let type = TYPE_FROM_SEGMENT.get(typeSegment) || '';
    if (LEGACY_TYPE_MAP[type]) type = LEGACY_TYPE_MAP[type];

    let concern = parts[scriptsIdx + 2] || '';
    const niche = parts[scriptsIdx + 3] || '';

    // Map legacy concerns
    if (concern === 'content' && niche && CONTENT_NICHE_TO_CONCERN[niche]) {
      concern = CONTENT_NICHE_TO_CONCERN[niche];
    } else if (LEGACY_CONCERN_MAP[concern] !== undefined) {
      concern = LEGACY_CONCERN_MAP[concern] || concern;
    }

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

  let rawType = getTagValue(header, '@type') || derived.type;
  if (LEGACY_TYPE_MAP[rawType]) rawType = LEGACY_TYPE_MAP[rawType];
  const type = VALID_TYPES.has(rawType) ? rawType : (derived.type || rawType);

  return {
    path: repoPath,
    name: path.basename(repoPath),
    type: type || '',
    concern: (() => {
      let c = getTagValue(header, '@concern') || derived.concern || '';
      if (LEGACY_CONCERN_MAP[c] !== undefined) c = LEGACY_CONCERN_MAP[c] || c;
      const niche = getTagValue(header, '@niche') || derived.niche || '';
      if (c === 'content' && niche && CONTENT_NICHE_TO_CONCERN[niche]) c = CONTENT_NICHE_TO_CONCERN[niche];
      return c;
    })(),
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
