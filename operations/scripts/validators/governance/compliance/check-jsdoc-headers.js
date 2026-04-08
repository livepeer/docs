#!/usr/bin/env node
/**
 * @script      check-jsdoc-headers
 * @type        validator
 * @concern     governance
 * @niche       compliance
 * @purpose     
 * @description Validates that all JS files in governed locations have core JSDoc tags
 * @mode        check
 * @pipeline    pr-changed -> governed JS files -> exit-code, stdout:violations
 * @scope       operations/scripts/, .github/scripts/, .githooks/
 * @usage       node operations/scripts/validators/governance/compliance/check-jsdoc-headers.js [--json]
 */
'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');

const GOVERNED_DIRS = [
  'operations/scripts',
  '.github/scripts',
];

const GOVERNED_FILES_GLOB = [
  '.githooks/*.js'
];

const SKIP_DIRS = ['x-archive', 'archive', 'config', 'node_modules', 'test', 'tests', 'lib'];

const REQUIRED_TAGS = ['@script', '@type', '@description', '@mode', '@pipeline', '@scope', '@usage'];

// ── Args ────────────────────────────────
function parseArgs(argv) {
  const args = { json: false, help: false, files: [] };
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === '--json') { args.json = true; continue; }
    if (token === '--help' || token === '-h') { args.help = true; continue; }
    if (token === '--files' && argv[i + 1]) { argv[++i].split(',').map((f) => f.trim()).filter(Boolean).forEach((f) => args.files.push(f)); continue; }
    if (token.startsWith('--files=')) { token.slice('--files='.length).split(',').map((f) => f.trim()).filter(Boolean).forEach((f) => args.files.push(f)); continue; }
  }
  return args;
}

// ── Helpers ─────────────────────────────
function walkDir(dir, results = []) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (SKIP_DIRS.includes(entry.name)) continue;
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkDir(fullPath, results);
      } else if (entry.isFile() && entry.name.endsWith('.js')) {
        results.push(fullPath);
      }
    }
  } catch (e) { /* skip permission errors */ }
  return results;
}

function getGlobbedFiles(pattern) {
  const dir = path.join(REPO_ROOT, path.dirname(pattern));
  const ext = path.extname(pattern);
  const results = [];
  try {
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
      if (entry.endsWith(ext)) {
        results.push(path.join(dir, entry));
      }
    }
  } catch (e) { /* skip */ }
  return results;
}

function checkJSDocTags(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n').slice(0, 50);
  const header = lines.join('\n');

  const jsdocMatch = header.match(/\/\*\*[\s\S]*?\*\//);
  if (!jsdocMatch) {
    return { file: path.relative(REPO_ROOT, filePath), missing: ['JSDoc block'], hasBlock: false };
  }

  const jsdocBlock = jsdocMatch[0];
  const missingTags = [];
  for (const tag of REQUIRED_TAGS) {
    if (!jsdocBlock.includes(tag)) {
      missingTags.push(tag);
    }
  }

  if (missingTags.length > 0) {
    return { file: path.relative(REPO_ROOT, filePath), missing: missingTags, hasBlock: true };
  }
  return null;
}

// ── Core ────────────────────────────────
function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log('Usage: node operations/scripts/validators/governance/compliance/check-jsdoc-headers.js [--json]');
    return 0;
  }

  let files;
  if (args.files.length > 0) {
    files = args.files.filter((f) => fs.existsSync(f));
  } else {
    files = [];
    for (const dir of GOVERNED_DIRS) {
      files.push(...walkDir(path.join(REPO_ROOT, dir)));
    }
    for (const pattern of GOVERNED_FILES_GLOB) {
      files.push(...getGlobbedFiles(pattern));
    }
  }

  const violations = [];
  for (const file of files) {
    const result = checkJSDocTags(file);
    if (result) violations.push(result);
  }

  if (args.json) {
    console.log(JSON.stringify({
      totalFiles: files.length,
      violations: violations.length,
      details: violations
    }, null, 2));
    return violations.length > 0 ? 1 : 0;
  }

  console.log(`JSDoc Header Check`);
  console.log(`──────────────────`);
  console.log(`Files scanned: ${files.length}`);

  if (violations.length === 0) {
    console.log(`✓ All files have required JSDoc tags.`);
    return 0;
  }

  console.log(`\nViolations (${violations.length}):`);
  for (const v of violations) {
    if (!v.hasBlock) {
      console.log(`  ✗ ${v.file} — no JSDoc block`);
    } else {
      console.log(`  ✗ ${v.file} — missing: ${v.missing.join(', ')}`);
    }
  }
  return 1;
}

process.exit(main());
