#!/usr/bin/env node
/**
 * @script      check-pipeline-orphans
 * @type        validator
 * @concern     governance
 * @niche       pipelines
 * @purpose     Flag atomic dispatch pipelines that are not referenced by ANY meta-dispatcher in their folder. Substitutes the auto-discovery refactor proposed by the Principal Engineer audit 2026-05-26 (Architecture W1): rather than auto-include every sibling — which would lump unrelated curated subsets together — this validator detects the silent-omission case (a new pipeline added but forgotten in every meta).
 * @description Walks operations/scripts/dispatch/. For each concern folder, finds atomic pipelines (dispatch-<name>.js where <name> is not a meta verb like check/repair/scan/sync/update/generate) and confirms each is named in at least one same-folder meta's hardcoded PIPELINES array. Report-only by default; --strict makes it blocking.
 * @mode        check
 * @pipeline    P3 (PR), P5 (scheduled) — wire under dispatch-governance.yml
 * @scope       operations/scripts/dispatch/{ai,content,governance}/**
 * @usage       node operations/scripts/validators/governance/pipelines/check-pipeline-orphans.js [--strict] [--json]
 * @policy      D-GOV-08; Principal Engineer audit 2026-05-26 (Architecture W1 substitute)
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const DISPATCH_ROOT = path.join(REPO_ROOT, 'operations/scripts/dispatch');
const META_VERBS = new Set(['check', 'repair', 'scan', 'sync', 'update', 'generate']);

function parseArgs(argv) {
  const args = { strict: false, json: false, help: false };
  for (const token of argv) {
    if (token === '--strict') args.strict = true;
    else if (token === '--json') args.json = true;
    else if (token === '--help' || token === '-h') args.help = true;
  }
  if (process.env.PIPELINE_ORPHANS_STRICT === '1') args.strict = true;
  return args;
}

function walkDirs(root, out = []) {
  if (!fs.existsSync(root)) return out;
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(root, entry.name);
    out.push(full);
    walkDirs(full, out);
  }
  return out;
}

/**
 * A meta-dispatcher is a dispatch-<concern>-<verb>.js where <verb> is a
 * lifecycle verb (check/repair/scan/sync/update/generate).
 * Atomic pipelines are everything else matching dispatch-*.js.
 */
function classifyDispatch(filename) {
  const m = /^dispatch-(.+)\.js$/.exec(filename);
  if (!m) return null;
  const stem = m[1];
  const parts = stem.split('-');
  if (parts.length >= 2 && META_VERBS.has(parts[parts.length - 1])) {
    return { kind: 'meta', stem };
  }
  return { kind: 'atomic', stem, filename };
}

function extractReferencedAtomics(metaPath) {
  // Find every "dispatch-foo.js" string literal in the meta — robust against
  // both single-line and multi-line PIPELINES arrays, and against any other
  // string reference (helps catch metas that build paths differently).
  const src = fs.readFileSync(metaPath, 'utf8');
  const refs = new Set();
  const re = /['"](dispatch-[a-zA-Z0-9_-]+\.js)['"]/g;
  let match;
  while ((match = re.exec(src)) !== null) {
    refs.add(match[1]);
  }
  return refs;
}

/**
 * Does this meta opt into auto-discovery of sibling pipelines? Detected by the
 * presence of a `discoverPipelines` helper or `fs.readdirSync` of a sibling
 * directory. Discovery-based metas cover all atomic siblings by definition.
 */
function metaUsesDiscovery(metaPath) {
  const src = fs.readFileSync(metaPath, 'utf8');
  return /function\s+discoverPipelines\s*\(/.test(src) || /fs\.readdirSync\s*\(\s*[A-Z_]*DIR\b/.test(src);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    console.log('Usage: node operations/scripts/validators/governance/pipelines/check-pipeline-orphans.js [--strict] [--json]');
    console.log('  Default: report-only (exit 0). Use --strict or PIPELINE_ORPHANS_STRICT=1 to make blocking.');
    process.exit(0);
  }

  const orphans = [];
  const dirs = walkDirs(DISPATCH_ROOT);

  for (const dir of dirs) {
    const entries = fs.readdirSync(dir, { withFileTypes: true })
      .filter((e) => e.isFile() && e.name.endsWith('.js'));
    const classified = entries.map((e) => ({ name: e.name, klass: classifyDispatch(e.name) })).filter((x) => x.klass);

    const metas = classified.filter((x) => x.klass.kind === 'meta').map((x) => path.join(dir, x.name));
    const atomics = classified.filter((x) => x.klass.kind === 'atomic').map((x) => x.name);

    if (metas.length === 0 || atomics.length === 0) continue;

    // If any meta in this folder uses filesystem discovery, every atomic
    // sibling is covered by definition — skip the orphan check entirely.
    if (metas.some(metaUsesDiscovery)) continue;

    const referenced = new Set();
    for (const meta of metas) {
      for (const ref of extractReferencedAtomics(meta)) referenced.add(ref);
    }

    for (const atomic of atomics) {
      if (!referenced.has(atomic)) {
        orphans.push({
          atomic: path.relative(REPO_ROOT, path.join(dir, atomic)),
          folder: path.relative(REPO_ROOT, dir),
          metas_in_folder: metas.map((m) => path.basename(m)),
        });
      }
    }
  }

  if (args.json) {
    process.stdout.write(JSON.stringify({
      orphans,
      count: orphans.length,
      strict: args.strict,
      exit: args.strict && orphans.length > 0 ? 1 : 0,
    }, null, 2) + '\n');
  } else {
    if (orphans.length === 0) {
      process.stderr.write('✓ pipeline-orphans: every atomic dispatch pipeline is referenced by at least one meta.\n');
    } else {
      process.stderr.write(`\n⚠️  pipeline-orphans: ${orphans.length} atomic pipeline(s) not referenced by any meta in their folder:\n\n`);
      for (const o of orphans) {
        process.stderr.write(`  ${o.atomic}\n`);
        process.stderr.write(`    folder metas: ${o.metas_in_folder.join(', ')}\n`);
      }
      process.stderr.write(`\nRemediation: add the atomic to the appropriate meta's PIPELINES array, or delete it if dead.\n`);
    }
  }

  if (args.strict && orphans.length > 0) process.exit(1);
  process.exit(0);
}

main();
