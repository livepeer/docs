#!/usr/bin/env node
/**
 * @script      studio-docs-migration
 * @type        integrator
 * @concern     copy
 * @niche       
 * @purpose     
 * @description Migrates livepeer-studio subfolder path references after moving
 * @mode        integrate
 * @pipeline    manual
 * @scope       * @usage       node operations/scripts/integrators/content/studio-docs-migration.js [--write]
 * @usage       
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..', '..', '..', '..');

const WRITE_MODE = process.argv.includes('--write');

// Lookahead regex: matches 'livepeer-studio/' ONLY when followed by one of the
// 7 moved folder names. (?:api-)?reference handles both 'reference' and
// 'api-reference' without double-matching.
const MIGRATION_REGEX = /livepeer-studio\/(?=access-control|analytics|get-started|livestream|video-on-demand|(?:api-)?reference)/g;
const REPLACEMENT = 'livepeer-studio/docs/';

// ── Tier 1: Build-breaking (Mintlify nav) ──
const TIER_1 = [
  'docs.json',
  'tools/config/scoped-navigation/docs-solutions.json',
  'tools/config/scoped-navigation/docs.json.jsx',
  'tools/config/scoped-navigation/docs-gate-orch.json',
];

// ── Tier 2: Link-breaking (functional content) ──
const TIER_2 = [
  // Active MDX files
  'v2/solutions/livepeer-studio/overview.mdx',
  'v2/solutions/livepeer-studio/dep-overview.mdx',
  'v2/solutions/livepeer-studio/quickstart.mdx',
  'v2/solutions/livepeer-studio/player.mdx',
  'v2/solutions/livepeer-studio/client-use-cases.mdx',
  'v2/solutions/livepeer-studio/community.mdx',
  'v2/solutions/index.mdx',
  'v2/index.mdx',
  'v2/developers/navigator.mdx',
  'v2/developers/get-started/transcoding-quickstart.mdx',
  'v2/developers/resources/reference/apis.mdx',
  'v2/developers/resources/reference/sdks.mdx',
  'v2/home/get-started.mdx',
  'v2/community/livepeer-community/trending-topics.mdx',
  'docs-guide/tooling/reference-maps/icon-map.mdx',
  // JSX data files
  'snippets/data/solutions/hrefs.jsx',
  'snippets/data/reference-maps/icon-map.jsx',
  'snippets/data/home/hrefs.jsx',
];

// ── Tier 3: Index/SEO ──
const TIER_3 = [
  'docs-index.json',
  'llms.txt',
  'ai-tools/ai-skills/source-content/llms.txt',
  'sitemap-ai.xml',
];

// Also process all moved files that may contain absolute self-references
const MOVED_FILES_DIR = 'v2/solutions/livepeer-studio/docs';

function collectMovedFiles(dir) {
  const results = [];
  const absDir = path.join(REPO_ROOT, dir);
  if (!fs.existsSync(absDir)) return results;
  const entries = fs.readdirSync(absDir, { withFileTypes: true });
  for (const entry of entries) {
    const rel = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectMovedFiles(rel));
    } else if (entry.name.endsWith('.mdx') || entry.name.endsWith('.jsx')) {
      results.push(rel);
    }
  }
  return results;
}

function processFile(relPath) {
  const absPath = path.join(REPO_ROOT, relPath);
  if (!fs.existsSync(absPath)) {
    return { file: relPath, status: 'SKIP (not found)', count: 0, changes: [] };
  }

  const original = fs.readFileSync(absPath, 'utf8');
  const changes = [];
  const lines = original.split('\n');

  lines.forEach((line, idx) => {
    let match;
    const lineRegex = new RegExp(MIGRATION_REGEX.source, 'g');
    while ((match = lineRegex.exec(line)) !== null) {
      changes.push({
        line: idx + 1,
        col: match.index,
        context: line.trim().substring(0, 120),
      });
    }
  });

  if (changes.length === 0) {
    return { file: relPath, status: 'NO MATCHES', count: 0, changes: [] };
  }

  const updated = original.replace(MIGRATION_REGEX, REPLACEMENT);

  if (WRITE_MODE) {
    fs.writeFileSync(absPath, updated, 'utf8');
  }

  return { file: relPath, status: WRITE_MODE ? 'UPDATED' : 'DRY RUN', count: changes.length, changes };
}

// ── Main ──
console.log(`\n${'='.repeat(60)}`);
console.log(`  Studio Docs Migration — ${WRITE_MODE ? 'WRITE MODE' : 'DRY RUN'}`);
console.log(`${'='.repeat(60)}\n`);

const allFiles = [
  ...TIER_1,
  ...TIER_2,
  ...TIER_3,
  ...collectMovedFiles(MOVED_FILES_DIR),
];

// Deduplicate
const uniqueFiles = [...new Set(allFiles)];

let totalReplacements = 0;
let filesModified = 0;
const results = [];

for (const relPath of uniqueFiles) {
  const result = processFile(relPath);
  results.push(result);
  if (result.count > 0) {
    filesModified++;
    totalReplacements += result.count;
  }
}

// ── Report ──
console.log('FILE RESULTS:');
console.log('-'.repeat(80));

for (const r of results) {
  if (r.count > 0) {
    console.log(`  [${r.status}] ${r.file} — ${r.count} replacement(s)`);
    if (!WRITE_MODE) {
      for (const c of r.changes.slice(0, 5)) {
        console.log(`    L${c.line}: ${c.context}`);
      }
      if (r.changes.length > 5) {
        console.log(`    ... and ${r.changes.length - 5} more`);
      }
    }
  }
}

const skipped = results.filter(r => r.status === 'SKIP (not found)');
if (skipped.length > 0) {
  console.log(`\nSKIPPED (not found): ${skipped.map(r => r.file).join(', ')}`);
}

console.log(`\n${'='.repeat(60)}`);
console.log(`  Total files processed: ${uniqueFiles.length}`);
console.log(`  Files with replacements: ${filesModified}`);
console.log(`  Total replacements: ${totalReplacements}`);
console.log(`  Mode: ${WRITE_MODE ? 'WRITE (changes applied)' : 'DRY RUN (no changes)'}`);
console.log(`${'='.repeat(60)}\n`);
