#!/usr/bin/env node
/**
 * @script      check-component-health
 * @type        validator
 * @concern     components
 * @niche       library
 * @purpose     governance:quality-gate
 * @description Checks component library health:
 *   1. No non-archive MDX page imports a planned/deprecated/broken component
 *   2. Registry-source sync: every registry entry's source file exists on disk
 *   3. Every stable source file has a corresponding examples file (coverage check)
 * @mode        read-only
 * @pipeline    pr-workflow → component-registry.json, v2/**/*.mdx, snippets/components/**/*.jsx → exit-code, stdout:violations
 * @scope       v2-content, snippets/components
 * @usage       node operations/scripts/validators/components/library/check-component-health.js [--check] [--report]
 * @policy      R-R10
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '../../../../..');
const REGISTRY_PATH = path.join(ROOT, 'docs-guide', 'config', 'component-registry.json');
const SNIPPETS_COMPONENTS = path.join(ROOT, 'snippets', 'components');
const V2_ROOT = path.join(ROOT, 'v2');
const ARCHIVE_PATTERNS = ['_archive', 'x-archive', '_workspace', 'x-deprecated', 'x-archived'];

const args = {
  check: process.argv.includes('--check'),
  report: process.argv.includes('--report'),
};

if (!args.check && !args.report) {
  args.report = true;
}

// ─── Load registry ──────────────────────────────────────────────────────────

if (!fs.existsSync(REGISTRY_PATH)) {
  console.error(`❌ Registry not found: ${REGISTRY_PATH}`);
  process.exit(1);
}
const registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));

// ─── Build indexes ───────────────────────────────────────────────────────────

const UNHEALTHY_STATUSES = ['planned', 'deprecated', 'broken'];
const ACTIVE_STATUSES = ['stable', 'experimental'];

// name → status map
const componentStatus = {};
for (const comp of registry.components) {
  componentStatus[comp.name] = comp.status;
}
// deprecated array (removed from source but tracked)
for (const dep of registry.deprecated || []) {
  componentStatus[dep.name] = 'deprecated';
}

// ─── Helper: check if a path is inside an archive directory ──────────────────

function isArchivePath(filePath) {
  return ARCHIVE_PATTERNS.some((pat) => filePath.includes(path.sep + pat + path.sep) || filePath.includes('/' + pat + '/'));
}

// ─── Helper: recursively collect .mdx files ──────────────────────────────────

function collectMdxFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectMdxFiles(full));
    } else if (entry.name.endsWith('.mdx')) {
      results.push(full);
    }
  }
  return results;
}

// ─── Check 1: stale imports in non-archive docs ───────────────────────────────

const staleImportIssues = [];

const allMdx = collectMdxFiles(V2_ROOT).filter((f) => !isArchivePath(f));

const importRe = /^import\s+\{([^}]+)\}\s+from\s+"([^"]+)"/gm;

for (const mdxFile of allMdx) {
  const content = fs.readFileSync(mdxFile, 'utf8');
  let m;
  importRe.lastIndex = 0;
  while ((m = importRe.exec(content)) !== null) {
    const from = m[2];
    if (!from.includes('/snippets/components/')) continue;
    const names = m[1].split(',').map((n) => n.trim()).filter(Boolean);
    for (const name of names) {
      const status = componentStatus[name];
      if (status && UNHEALTHY_STATUSES.includes(status)) {
        staleImportIssues.push({
          file: path.relative(ROOT, mdxFile),
          component: name,
          status,
          importedFrom: from,
        });
      }
    }
  }
}

// ─── Check 2: registry-source sync ───────────────────────────────────────────

const syncIssues = [];

const byFile = {};
for (const comp of registry.components) {
  if (!byFile[comp.file]) byFile[comp.file] = [];
  byFile[comp.file].push(comp.name);
}

for (const sourceFile of Object.keys(byFile)) {
  const fullPath = path.join(ROOT, sourceFile);
  if (!fs.existsSync(fullPath)) {
    syncIssues.push({
      type: 'missing-source-file',
      file: sourceFile,
      components: byFile[sourceFile],
      message: `Source file missing on disk: ${sourceFile} (components: ${byFile[sourceFile].join(', ')})`,
    });
  }
}

// Also check: source files exist on disk but are NOT in registry
function getComponentSourceFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'examples' && !entry.name.startsWith('_') && !entry.name.startsWith('x-')) {
      results.push(...getComponentSourceFiles(full));
    } else if (entry.isFile() && (entry.name.endsWith('.jsx') || entry.name.endsWith('.mdx'))) {
      if (!entry.name.startsWith('_') && !entry.name.startsWith('x-')) {
        results.push(full);
      }
    }
  }
  return results;
}

const diskSourceFiles = new Set(
  getComponentSourceFiles(SNIPPETS_COMPONENTS).map((f) => path.relative(ROOT, f))
);
const registrySourceFiles = new Set(Object.keys(byFile));

for (const diskFile of diskSourceFiles) {
  if (!registrySourceFiles.has(diskFile) && diskFile.endsWith('.jsx')) {
    syncIssues.push({
      type: 'unregistered-source-file',
      file: diskFile,
      message: `Source file exists on disk but not in registry: ${diskFile}`,
    });
  }
}

// ─── Check 3: examples coverage ──────────────────────────────────────────────

const coverageIssues = [];

for (const sourceFile of registrySourceFiles) {
  const relToSnippets = path.relative(SNIPPETS_COMPONENTS, path.join(ROOT, sourceFile));
  const parts = relToSnippets.split(path.sep);
  if (parts.length < 3) continue;

  const category = parts[0];
  const subniche = parts[1];
  const examplesFile = path.join(SNIPPETS_COMPONENTS, category, 'examples', `${subniche}-examples.mdx`);

  const comps = byFile[sourceFile] || [];
  const hasActive = comps.some((name) => {
    const s = componentStatus[name];
    return s && ACTIVE_STATUSES.includes(s);
  });

  if (hasActive && !fs.existsSync(examplesFile)) {
    coverageIssues.push({
      file: sourceFile,
      expectedExamples: path.relative(ROOT, examplesFile),
      message: `No examples file for ${path.basename(sourceFile)} — run generate-component-examples.js --scaffold`,
    });
  }
}

// ─── Report ──────────────────────────────────────────────────────────────────

const totalIssues = staleImportIssues.length + syncIssues.length + coverageIssues.length;

console.log(`\n════ Component Health Check ════`);
console.log(`Non-archive MDX pages scanned: ${allMdx.length}`);
console.log(`Registry entries: ${registry.components.length}`);
console.log(`Source files on disk: ${diskSourceFiles.size}`);
console.log(`\nIssues found: ${totalIssues}`);
console.log(`  [1] Stale imports (non-archive docs): ${staleImportIssues.length}`);
console.log(`  [2] Registry-source sync issues:      ${syncIssues.length}`);
console.log(`  [3] Missing example coverage:         ${coverageIssues.length}`);

if (staleImportIssues.length > 0) {
  console.log(`\n[1] Stale imports — non-stable components used in live docs:`);
  const grouped = {};
  for (const issue of staleImportIssues) {
    if (!grouped[issue.file]) grouped[issue.file] = [];
    grouped[issue.file].push(`${issue.component} (${issue.status})`);
  }
  for (const [file, comps] of Object.entries(grouped)) {
    console.log(`  ❌ ${file}`);
    for (const c of comps) console.log(`       → ${c}`);
  }
}

if (syncIssues.length > 0) {
  console.log(`\n[2] Registry-source sync issues:`);
  syncIssues.forEach((i) => console.log(`  ❌ [${i.type}] ${i.message}`));
}

if (coverageIssues.length > 0) {
  console.log(`\n[3] Missing example files:`);
  coverageIssues.forEach((i) => console.log(`  ⚠️  ${i.message}`));
}

if (totalIssues === 0) {
  console.log(`\n  ✅ Component library is healthy`);
}

if (args.check && (staleImportIssues.length > 0 || syncIssues.length > 0)) {
  process.exit(1);
}
