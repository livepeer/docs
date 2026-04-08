#!/usr/bin/env node
/**
 * @script      check-script-locations
 * @type        validator
 * @concern     governance
 * @niche       compliance
 * @purpose     
 * @description Validates all JS files are in governed locations per the script framework
 * @mode        check
 * @pipeline    pr-changed -> all .js files -> exit-code, stdout:violations
 * @scope       full-repo
 * @usage       node operations/scripts/validators/governance/compliance/check-script-locations.js [--json]
 */
'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');

// Governed locations where .js files are allowed
const GOVERNED_PATHS = [
  'operations/scripts',
  'operations/tests',
  'operations/config',
  '.github/scripts',
  '.github/workspace/actions-library',
  '.githooks',
  'tools',
  'snippets',
];

// Paths to skip entirely (non-script directories, archives, IDE configs)
const SKIP_PATTERNS = [
  'node_modules',
  'x-archive',
  'archive',
  '_workspace',
  'workspace',
  'v1',
  'v2',
  'api',
  'docs-guide',
  '.claude',
  '.vscode',
  '.cursor',
  '.windsurf',
  '.augment',
  '.codex',
];

// Known exceptions — files outside governed paths that are intentionally placed
const EXCEPTIONS = [
  'snippets/components/integrators/feeds/contractVerifierData.js',
  'snippets/data/social-feeds/transformers/filterVideos.js',
];

function parseArgs(argv) {
  const args = { json: false, help: false };
  argv.forEach((token) => {
    if (token === '--json') { args.json = true; return; }
    if (token === '--help' || token === '-h') { args.help = true; return; }
  });
  return args;
}

function shouldSkip(relPath) {
  const parts = relPath.split(path.sep);
  return parts.some(p => SKIP_PATTERNS.includes(p));
}

function isGoverned(relPath) {
  return GOVERNED_PATHS.some(gp => relPath.startsWith(gp + path.sep) || relPath.startsWith(gp + '/'));
}

function isException(relPath) {
  return EXCEPTIONS.includes(relPath);
}

function walkDir(dir, results = []) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (SKIP_PATTERNS.includes(entry.name)) continue;
      if (entry.name.startsWith('.') && !['.github', '.githooks'].includes(entry.name)) continue;
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walkDir(fullPath, results);
      } else if (entry.isFile() && entry.name.endsWith('.js')) {
        results.push(fullPath);
      }
    }
  } catch (e) { /* skip */ }
  return results;
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log('Usage: node operations/scripts/validators/governance/compliance/check-script-locations.js [--json]');
    return 0;
  }

  const allJs = walkDir(REPO_ROOT);
  const violations = [];
  const exceptions = [];

  for (const file of allJs) {
    const rel = path.relative(REPO_ROOT, file);
    if (shouldSkip(rel)) continue;
    if (isGoverned(rel)) continue;
    if (isException(rel)) {
      exceptions.push(rel);
      continue;
    }
    violations.push(rel);
  }

  if (args.json) {
    console.log(JSON.stringify({
      totalFiles: allJs.length,
      violations: violations.length,
      exceptions: exceptions.length,
      violationDetails: violations,
      exceptionDetails: exceptions
    }, null, 2));
    return violations.length > 0 ? 1 : 0;
  }

  console.log('Script Location Check');
  console.log('─────────────────────');
  console.log(`JS files scanned: ${allJs.length}`);
  console.log(`Governed: ${allJs.length - violations.length - exceptions.length}`);
  console.log(`Exceptions: ${exceptions.length}`);

  if (violations.length === 0) {
    console.log('✓ All JS files are in governed locations or registered exceptions.');
    return 0;
  }

  console.log(`\nViolations (${violations.length}):`);
  violations.forEach(v => console.log(`  ✗ ${v}`));
  console.log('\nMove these files to operations/scripts/<type>/<concern>/<niche>/ or register as exceptions.');
  console.log('See docs-guide/frameworks/file-placement.mdx');

  return 1;
}

process.exit(main());
