#!/usr/bin/env node
/**
 * @script apply-content-gap-reconciliation
 * @summary Apply content-gap reconciliation decisions by archiving selected files, syncing mapping state, and generating follow-up reports.
 * @owner docs
 * @scope tools/scripts, tools/config, tasks/reports/content-gap, docs.json, .mintignore, v2
 * @pipeline manual — interactive developer tool, not suited for automated pipelines
 *
 * @usage
 *   node tools/scripts/apply-content-gap-reconciliation.js
 *   node tools/scripts/apply-content-gap-reconciliation.js --apply
 *
 * @inputs
 *   --input <path> (default: tasks/reports/content-gap/reconciliation-decided.csv)
 *   --blueprint-pages <path> (default: tools/config/blueprint-pages.json)
 *   --mapping <path> (default: tools/config/blueprint-mapping.json)
 *   --docs-json <path> (default: docs.json)
 *   --mintignore <path> (default: .mintignore)
 *   --out-dir <path> (default: tasks/reports/content-gap)
 *   --apply Persist file moves and repo updates. Dry-run is the default.
 *
 * @outputs
 *   - tasks/reports/content-gap/archive-manifest.md
 *   - tasks/reports/content-gap/content-work-queue.md
 *   - updates to docs.json, .mintignore, tools/config/blueprint-mapping.json, and archived v2 files
 *
 * @exit-codes
 *   0 = success
 *   1 = validation or runtime failure
 *
 * @examples
 *   node tools/scripts/apply-content-gap-reconciliation.js
 *   node tools/scripts/apply-content-gap-reconciliation.js --apply --input tasks/reports/content-gap/reconciliation-decided.csv
 *
 * @notes
 *   Reads the verified reconciliation CSV as the source of truth. Does not create stub pages for CREATE rows or mutate KEEP/EXPAND page bodies.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const { extractImports } = require('../../tests/utils/mdx-parser');
const { normalizeRel } = require('../lib/docs-index-utils');

const REPO_ROOT = getRepoRoot();

const DEFAULTS = {
  input: 'tasks/reports/content-gap/reconciliation-decided.csv',
  blueprintPages: 'tools/config/blueprint-pages.json',
  mapping: 'tools/config/blueprint-mapping.json',
  docsJson: 'docs.json',
  mintignore: '.mintignore',
  outDir: 'tasks/reports/content-gap'
};

const EXPECTED_ROW_COUNT = 485;
const EXPECTED_DECISION_COUNTS = {
  ARCHIVE: 31,
  CREATE: 10,
  EXPAND: 14,
  KEEP: 429,
  DELETE: 1
};

const CSV_COLUMNS = [
  'source',
  'tab',
  'position',
  'blueprint_name',
  'blueprint_type',
  'blueprint_phase',
  'repo_file',
  'status',
  'word_count',
  'has_title',
  'has_description',
  'brand_violations',
  'decision',
  'notes'
];

const CREATE_SUGGESTED_PATHS = {
  'Video Integration Guide': 'v2/developers/guides-and-resources/video-integration-guide.mdx',
  'Production Integration Guide': 'v2/developers/guides-and-resources/production-integration-guide.mdx',
  'Studio Migration Guide': 'v2/developers/guides-and-resources/studio-migration-guide.mdx',
  'Platform Comparison': 'v2/solutions/platform-comparison.mdx',
  'Studio Guides': 'v2/solutions/livepeer-studio/guides/overview.mdx',
  'Daydream Guides': 'v2/solutions/daydream/guides/overview.mdx',
  'Daydream API Reference': 'v2/solutions/daydream/reference/overview.mdx',
  'Daydream SDKs': 'v2/solutions/daydream/reference/sdks.mdx',
  'Orchestrator Troubleshooting': 'v2/orchestrators/references/troubleshooting.mdx',
  'Delegator FAQ & Troubleshooting': 'v2/lpt/delegation/faq-and-troubleshooting.mdx'
};

const TEMPLATE_EXPANSIONS = {
  '[Platform]': ['Studio', 'Daydream'],
  '[Provider]': ['Cloud SPE', 'Daydream', 'Studio']
};

const GENERIC_BLUEPRINT_JOBS = new Set([
  'awareness',
  'activation',
  'acquisition',
  'retention',
  'referral',
  'product',
  'revenue'
]);

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', {
      cwd: process.cwd(),
      encoding: 'utf8'
    }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function ensureDir(absPath) {
  fs.mkdirSync(absPath, { recursive: true });
}

function fileExists(repoPath) {
  try {
    return fs.existsSync(path.resolve(REPO_ROOT, repoPath));
  } catch (_error) {
    return false;
  }
}

function readText(repoPath) {
  return fs.readFileSync(path.resolve(REPO_ROOT, repoPath), 'utf8');
}

function writeText(repoPath, content) {
  const absPath = path.resolve(REPO_ROOT, repoPath);
  ensureDir(path.dirname(absPath));
  fs.writeFileSync(absPath, content);
}

function readJson(repoPath) {
  return JSON.parse(readText(repoPath));
}

function parseArgs(argv) {
  const out = {
    ...DEFAULTS,
    apply: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

    if (token === '--apply') {
      out.apply = true;
      continue;
    }
    if (token === '--input') {
      out.input = String(argv[i + 1] || out.input).trim() || out.input;
      i += 1;
      continue;
    }
    if (token.startsWith('--input=')) {
      out.input = token.slice('--input='.length).trim() || out.input;
      continue;
    }
    if (token === '--blueprint-pages') {
      out.blueprintPages = String(argv[i + 1] || out.blueprintPages).trim() || out.blueprintPages;
      i += 1;
      continue;
    }
    if (token.startsWith('--blueprint-pages=')) {
      out.blueprintPages = token.slice('--blueprint-pages='.length).trim() || out.blueprintPages;
      continue;
    }
    if (token === '--mapping') {
      out.mapping = String(argv[i + 1] || out.mapping).trim() || out.mapping;
      i += 1;
      continue;
    }
    if (token.startsWith('--mapping=')) {
      out.mapping = token.slice('--mapping='.length).trim() || out.mapping;
      continue;
    }
    if (token === '--docs-json') {
      out.docsJson = String(argv[i + 1] || out.docsJson).trim() || out.docsJson;
      i += 1;
      continue;
    }
    if (token.startsWith('--docs-json=')) {
      out.docsJson = token.slice('--docs-json='.length).trim() || out.docsJson;
      continue;
    }
    if (token === '--mintignore') {
      out.mintignore = String(argv[i + 1] || out.mintignore).trim() || out.mintignore;
      i += 1;
      continue;
    }
    if (token.startsWith('--mintignore=')) {
      out.mintignore = token.slice('--mintignore='.length).trim() || out.mintignore;
      continue;
    }
    if (token === '--out-dir') {
      out.outDir = String(argv[i + 1] || out.outDir).trim() || out.outDir;
      i += 1;
      continue;
    }
    if (token.startsWith('--out-dir=')) {
      out.outDir = token.slice('--out-dir='.length).trim() || out.outDir;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  return out;
}

function parseCsv(raw) {
  const lines = String(raw || '').split(/\r?\n/).filter((line) => line.length > 0);
  if (lines.length < 2) {
    throw new Error('CSV input is missing rows.');
  }

  const headerLine = lines[0].trim().startsWith('#') ? lines[1] : lines[0];
  const dataLines = lines[0].trim().startsWith('#') ? lines.slice(2) : lines.slice(1);
  const header = parseCsvLine(headerLine);

  if (header.length !== CSV_COLUMNS.length) {
    throw new Error(`Unexpected CSV header width. Expected ${CSV_COLUMNS.length}, received ${header.length}.`);
  }

  return dataLines
    .filter((line) => line.trim().length > 0)
    .map((line, index) => {
      const values = parseCsvLine(line);
      const row = {};
      header.forEach((name, valueIndex) => {
        row[name] = values[valueIndex] || '';
      });
      row.__line = index + 3;
      return row;
    });
}

function parseCsvLine(line) {
  const values = [];
  let current = '';
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];

    if (char === '"') {
      if (inQuotes && line[index + 1] === '"') {
        current += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === ',' && !inQuotes) {
      values.push(current);
      current = '';
      continue;
    }

    current += char;
  }

  values.push(current);
  return values;
}

function countByDecision(rows) {
  const counts = new Map();
  rows.forEach((row) => {
    const key = String(row.decision || '').trim();
    counts.set(key, (counts.get(key) || 0) + 1);
  });
  return counts;
}

function expandBlueprintName(name) {
  let expanded = [String(name || '')];

  Object.entries(TEMPLATE_EXPANSIONS).forEach(([token, replacements]) => {
    const next = [];
    expanded.forEach((value) => {
      if (!value.includes(token)) {
        next.push(value);
        return;
      }
      replacements.forEach((replacement) => {
        next.push(value.replaceAll(token, replacement));
      });
    });
    expanded = next;
  });

  return expanded;
}

function validateCsv(rows) {
  if (rows.length !== EXPECTED_ROW_COUNT) {
    throw new Error(`Expected ${EXPECTED_ROW_COUNT} CSV rows but found ${rows.length}.`);
  }

  const counts = countByDecision(rows);
  Object.entries(EXPECTED_DECISION_COUNTS).forEach(([decision, expected]) => {
    const actual = counts.get(decision) || 0;
    if (actual !== expected) {
      throw new Error(`Expected ${expected} ${decision} rows but found ${actual}.`);
    }
  });
}

function toRouteKey(repoFile) {
  return normalizeRel(repoFile)
    .replace(/\.(md|mdx)$/i, '')
    .replace(/\/(index|README)$/i, '');
}

function toArchivedRepoPath(repoFile) {
  const normalized = normalizeRel(repoFile);
  if (!normalized.startsWith('v2/')) {
    throw new Error(`Archive candidates must live under v2/: ${repoFile}`);
  }
  return normalizeRel(path.posix.join('v2', 'x-archived', normalized.slice('v2/'.length)));
}

function isArchivedPath(repoPath) {
  return normalizeRel(repoPath).startsWith('v2/x-archived/');
}

function isActiveV2Mdx(repoPath) {
  const normalized = normalizeRel(repoPath);
  return normalized.startsWith('v2/') && normalized.endsWith('.mdx') && !isArchivedPath(normalized);
}

function walkFiles(absDir, out = []) {
  if (!fs.existsSync(absDir)) return out;
  const entries = fs.readdirSync(absDir, { withFileTypes: true });

  entries.forEach((entry) => {
    const absPath = path.join(absDir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === '.git' || entry.name === 'node_modules') return;
      walkFiles(absPath, out);
      return;
    }
    out.push(absPath);
  });

  return out;
}

function resolveImportTarget(fromRepoFile, importPath) {
  if (typeof importPath !== 'string' || !importPath.startsWith('.')) {
    return null;
  }

  const fromAbs = path.resolve(REPO_ROOT, fromRepoFile);
  const fromDir = path.dirname(fromAbs);
  const baseAbs = path.resolve(fromDir, importPath);
  const candidates = [
    baseAbs,
    `${baseAbs}.mdx`,
    `${baseAbs}.md`,
    path.join(baseAbs, 'index.mdx'),
    path.join(baseAbs, 'index.md'),
    path.join(baseAbs, 'README.mdx'),
    path.join(baseAbs, 'README.md')
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return normalizeRel(path.relative(REPO_ROOT, candidate));
    }
  }

  return null;
}

function removeArchivedImportLines(repoPath, importHits) {
  const lines = readText(repoPath).split('\n');
  importHits.forEach((hit) => {
    const lineIndex = Number(hit.line) - 1;
    if (lineIndex < 0 || lineIndex >= lines.length) return;
    lines[lineIndex] = `{/* Archived import removed: ${hit.spec} -> ${hit.target} */}`;
  });
  return `${lines.join('\n')}\n`.replace(/\n{3,}/g, '\n\n');
}

function detectImportHits(archivedTargets) {
  const archivedSet = new Set(archivedTargets.map((entry) => normalizeRel(entry.oldPath)));
  const files = walkFiles(path.resolve(REPO_ROOT, 'v2'))
    .map((absPath) => normalizeRel(path.relative(REPO_ROOT, absPath)))
    .filter(isActiveV2Mdx);

  const hits = [];

  files.forEach((repoPath) => {
    const content = readText(repoPath);
    extractImports(content).forEach((entry) => {
      const resolved = resolveImportTarget(repoPath, entry.path);
      if (resolved && archivedSet.has(resolved)) {
        hits.push({
          importer: repoPath,
          line: entry.line,
          spec: entry.path,
          target: resolved
        });
      }
    });
  });

  return hits;
}

function buildReferenceNeedles(oldPath) {
  const normalized = normalizeRel(oldPath);
  const routeKey = toRouteKey(normalized);
  const repoTail = normalized.replace(/^v2\//, '');
  const routeTail = routeKey.replace(/^v2\//, '');

  return [
    normalized,
    repoTail,
    routeKey,
    routeTail,
    `/${routeKey}`,
    `/${routeTail}`
  ];
}

function detectRouteReferenceHits(archivedTargets) {
  const files = walkFiles(path.resolve(REPO_ROOT, 'v2'))
    .map((absPath) => normalizeRel(path.relative(REPO_ROOT, absPath)))
    .filter(isActiveV2Mdx);

  const hits = [];

  files.forEach((repoPath) => {
    const content = readText(repoPath);
    archivedTargets.forEach((entry) => {
      const needles = buildReferenceNeedles(entry.oldPath);
      if (needles.some((needle) => needle && content.includes(needle))) {
        hits.push({
          file: repoPath,
          target: entry.oldPath
        });
      }
    });
  });

  return hits;
}

function syncBlueprintMapping(mappingPath, rows, shouldWrite) {
  const mapping = readJson(mappingPath);
  const changed = [];

  rows
    .filter((row) => row.source === 'BLUEPRINT')
    .filter((row) => row.repo_file && row.repo_file.trim())
    .forEach((row) => {
      const tab = String(row.tab || '').trim();
      const name = String(row.blueprint_name || '').trim();
      const repoFile = normalizeRel(row.repo_file);
      if (!tab || !name) return;

      if (!mapping[tab] || typeof mapping[tab] !== 'object') {
        mapping[tab] = {};
      }

      if (mapping[tab][name] !== repoFile) {
        changed.push({
          tab,
          blueprintName: name,
          before: mapping[tab][name] || null,
          after: repoFile
        });
        mapping[tab][name] = repoFile;
      }
    });

  if (shouldWrite && changed.length > 0) {
    writeText(mappingPath, `${JSON.stringify(mapping, null, 2)}\n`);
  }

  return changed;
}

function ensureMintIgnoreEntry(mintignorePath, shouldWrite) {
  const raw = readText(mintignorePath);
  const lines = raw.split('\n');
  const target = '/v2/x-archived/**';
  if (lines.includes(target)) {
    return false;
  }

  const insertAfter = lines.indexOf('/v2/x-*/**');
  if (insertAfter >= 0) {
    lines.splice(insertAfter + 1, 0, target);
  } else {
    if (lines.length > 0 && lines[lines.length - 1] !== '') {
      lines.push('');
    }
    lines.push(target);
  }

  if (shouldWrite) {
    writeText(mintignorePath, `${lines.join('\n').replace(/\n{3,}/g, '\n\n')}\n`);
  }

  return true;
}

function removeArchivedRoutesFromDocsJson(docsJsonPath, routes, shouldWrite) {
  const raw = readText(docsJsonPath);
  const removed = [];
  const lines = raw.split('\n').filter((line) => {
    for (const route of routes) {
      if (line.includes(`"${route}"`)) {
        removed.push(route);
        return false;
      }
    }
    return true;
  });

  let next = lines.join('\n');
  let previous = '';
  while (next !== previous) {
    previous = next;
    next = next.replace(/,\n(\s*[\]}])/g, '\n$1');
  }
  JSON.parse(next);

  if (shouldWrite && removed.length > 0) {
    writeText(docsJsonPath, `${next.trimEnd()}\n`);
  }

  return [...new Set(removed)];
}

function pruneEmptyParents(repoDir) {
  let current = path.resolve(REPO_ROOT, repoDir);
  const stop = path.resolve(REPO_ROOT, 'v2');
  const removed = [];

  while (current.startsWith(stop) && current !== stop) {
    const entries = fs.readdirSync(current);
    if (entries.length > 0) break;
    fs.rmdirSync(current);
    removed.push(normalizeRel(path.relative(REPO_ROOT, current)));
    current = path.dirname(current);
  }

  return removed;
}

function moveArchivedFiles(archiveEntries, shouldWrite) {
  const moved = [];
  const pruned = [];

  archiveEntries.forEach((entry) => {
    const oldPath = normalizeRel(entry.repo_file);
    const newPath = toArchivedRepoPath(oldPath);
    const oldAbs = path.resolve(REPO_ROOT, oldPath);
    const newAbs = path.resolve(REPO_ROOT, newPath);

    const oldExists = fs.existsSync(oldAbs);
    const newExists = fs.existsSync(newAbs);

    if (!oldExists && !newExists) {
      throw new Error(`Archive source missing: ${oldPath}`);
    }
    if (oldExists && newExists) {
      throw new Error(`Archive destination already exists: ${newPath}`);
    }
    if (!oldExists && newExists) {
      moved.push({
        oldPath,
        newPath,
        reason: 'Reconciliation decision: ARCHIVE'
      });
      return;
    }

    if (shouldWrite) {
      ensureDir(path.dirname(newAbs));
      fs.renameSync(oldAbs, newAbs);
      pruned.push(...pruneEmptyParents(path.dirname(oldPath)));
    }

    moved.push({
      oldPath,
      newPath,
      reason: 'Reconciliation decision: ARCHIVE'
    });
  });

  return {
    moved,
    pruned: [...new Set(pruned)]
  };
}

function renderArchiveManifest(entries) {
  const lines = [
    '# Archive Manifest',
    '',
    '| Old Path | New Path | Reason |',
    '|----------|----------|--------|'
  ];

  entries.forEach((entry) => {
    lines.push(`| ${entry.oldPath} | ${entry.newPath} | ${entry.reason} |`);
  });

  return `${lines.join('\n')}\n`;
}

function buildCreateDescription(row, blueprintJob) {
  const trimmedJob = String(blueprintJob || '').trim();
  if (trimmedJob && !GENERIC_BLUEPRINT_JOBS.has(trimmedJob.toLowerCase())) {
    return trimmedJob;
  }

  const typeLabel = String(row.blueprint_type || 'content')
    .replace(/_/g, ' ')
    .trim();
  const phaseLabel = String(row.blueprint_phase || '').trim();
  const phaseSuffix = phaseLabel ? ` for the ${phaseLabel.toLowerCase()} phase` : '';
  return `Template-derived ${typeLabel} page for ${row.blueprint_name}${phaseSuffix} in the ${row.tab} tab.`;
}

function renderContentWorkQueue(rows, blueprintPages) {
  const blueprintJobs = new Map();
  blueprintPages.forEach((entry) => {
    expandBlueprintName(entry.name).forEach((expandedName) => {
      blueprintJobs.set(`${entry.tab}::${expandedName}`, String(entry.job || '').trim());
    });
  });

  const lines = ['# Content Work Queue', ''];

  rows
    .filter((row) => row.decision === 'CREATE' || row.decision === 'EXPAND')
    .forEach((row, index) => {
      if (index > 0) lines.push('');
      const title = `## [${row.tab}] ${row.blueprint_name}`;
      const key = `${row.tab}::${row.blueprint_name}`;
      lines.push(title);

      if (row.decision === 'CREATE') {
        lines.push('**Action:** CREATE');
        lines.push(`**Blueprint type:** ${row.blueprint_type}`);
        lines.push(`**Blueprint phase:** ${row.blueprint_phase}`);
        lines.push(`**Suggested path:** ${CREATE_SUGGESTED_PATHS[row.blueprint_name] || 'TBD'}`);
        lines.push(`**Blueprint description:** ${buildCreateDescription(row, blueprintJobs.get(key))}`);
        return;
      }

      lines.push('**Action:** EXPAND');
      lines.push(`**Current file:** ${row.repo_file}`);
      lines.push(`**Current words:** ${row.word_count}`);
      lines.push(`**Blueprint type:** ${row.blueprint_type}`);
      lines.push(`**Blueprint phase:** ${row.blueprint_phase}`);
      lines.push(`**Issues:** ${String(row.brand_violations || '').trim() || 'None noted'}`);
    });

  return `${lines.join('\n')}\n`;
}

function printSummary(summary) {
  console.log(`Mode: ${summary.apply ? 'apply' : 'dry-run'}`);
  console.log(`CSV rows: ${summary.rowCount}`);
  console.log(`Decision counts: ${JSON.stringify(summary.decisionCounts)}`);
  console.log(`Archive moves: ${summary.archiveCount}`);
  console.log(`Blueprint mapping updates: ${summary.mappingUpdates}`);
  console.log(`docs.json routes removed: ${summary.docsJsonRoutesRemoved}`);
  console.log(`.mintignore updated: ${summary.mintignoreUpdated ? 'yes' : 'no'}`);
  console.log(`Import hits to archived files: ${summary.importHits}`);
  console.log(`Route/href hits to archived files: ${summary.routeReferenceHits}`);

  if (summary.importWarnings.length > 0) {
    console.log('\nArchived import warnings:');
    summary.importWarnings.forEach((warning) => {
      console.log(`- ${warning.importer}:${warning.line} imports ${warning.target} via ${warning.spec}`);
    });
  }

  if (summary.routeWarnings.length > 0) {
    console.log('\nArchived route/href references:');
    summary.routeWarnings.forEach((warning) => {
      console.log(`- ${warning.file} references ${warning.target}`);
    });
  }

  if (summary.prunedDirs.length > 0) {
    console.log('\nPruned empty source directories:');
    summary.prunedDirs.forEach((dir) => console.log(`- ${dir}`));
  }
}

function run(options) {
  const rows = parseCsv(readText(options.input));
  validateCsv(rows);

  const decisionCounts = Object.fromEntries(countByDecision(rows));
  const archiveRows = rows.filter((row) => row.decision === 'ARCHIVE');
  const blueprintPages = readJson(options.blueprintPages);
  const mappingChanges = syncBlueprintMapping(options.mapping, rows, options.apply);
  const moveResult = moveArchivedFiles(archiveRows, options.apply);
  const removedRoutes = removeArchivedRoutesFromDocsJson(
    options.docsJson,
    moveResult.moved.map((entry) => toRouteKey(entry.oldPath)),
    options.apply
  );
  const mintignoreUpdated = ensureMintIgnoreEntry(options.mintignore, options.apply);

  const importHits = detectImportHits(moveResult.moved);
  if (options.apply && importHits.length > 0) {
    const hitsByFile = new Map();
    importHits.forEach((hit) => {
      const bucket = hitsByFile.get(hit.importer) || [];
      bucket.push(hit);
      hitsByFile.set(hit.importer, bucket);
    });
    hitsByFile.forEach((hits, repoPath) => {
      writeText(repoPath, removeArchivedImportLines(repoPath, hits));
    });
  }

  const routeReferenceHits = detectRouteReferenceHits(moveResult.moved);
  const archiveManifestPath = normalizeRel(path.join(options.outDir, 'archive-manifest.md'));
  const contentQueuePath = normalizeRel(path.join(options.outDir, 'content-work-queue.md'));

  if (options.apply) {
    writeText(archiveManifestPath, renderArchiveManifest(moveResult.moved));
    writeText(contentQueuePath, renderContentWorkQueue(rows, blueprintPages));
  }

  return {
    apply: options.apply,
    rowCount: rows.length,
    decisionCounts,
    archiveCount: moveResult.moved.length,
    mappingUpdates: mappingChanges.length,
    docsJsonRoutesRemoved: removedRoutes.length,
    mintignoreUpdated,
    importHits: importHits.length,
    routeReferenceHits: routeReferenceHits.length,
    importWarnings: importHits,
    routeWarnings: routeReferenceHits,
    prunedDirs: moveResult.pruned,
    archiveManifestPath,
    contentQueuePath
  };
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const summary = run(options);
  printSummary(summary);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  parseCsv,
  parseCsvLine,
  toRouteKey,
  toArchivedRepoPath,
  run
};
