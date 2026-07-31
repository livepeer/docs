#!/usr/bin/env node
/**
 * @script      audit-pipeline-inventory
 * @type        audit
 * @concern     governance
 * @niche       repo
 * @purpose     Single canonical pipeline inventory: one row per dispatcher with tier classification, atomics called, output destinations, live consumers, schedule, and test coverage — gives SME and contributors a one-stop "is pipeline X healthy" view across all 65 dispatchers
 * @description Walks operations/scripts/dispatch/ for every dispatcher. Parses JSDoc for concern/niche/type/pipeline/mode/purpose. Statically extracts the atomics each dispatcher invokes (ATOMICS const + runAtomic/runIfExists/runIfExists). Greps v2/ + snippets/ for live consumers of declared outputs. Cross-references workflow YAMLs for the Tier-1 caller. Checks pipeline-smoke-test exclusion list and pipeline-functional-tests TESTS array for test coverage. Emits per-concern sections to workspace/reports/governance/pipeline-inventory.md plus a JSON sibling for programmatic consumers.
 * @mode        scan
 * @pipeline    manual — SME-driven full-inventory snapshot, run on-demand
 * @scope       operations/scripts/dispatch/**, .github/workflows/*.yml, operations/tests/integration/pipeline-*.js
 * @usage       node operations/scripts/audits/governance/repo/audit-pipeline-inventory.js [--json] [--concern <name>]
 * @policy      D-GOV-03 (every pipeline must declare its detect-repair-verify state); D-ACT-04 (canonical naming)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { atomicWrite } = require('../../../../../tools/lib/bootstrap/safe-io');

const REPO_ROOT = process.cwd();
const DISPATCH_ROOT = path.join(REPO_ROOT, 'operations/scripts/dispatch');
const WORKFLOWS_DIR = path.join(REPO_ROOT, '.github/workflows');
const SMOKE_TEST_PATH = 'operations/tests/integration/pipeline-smoke-test.js';
const FUNCTIONAL_TEST_PATH = 'operations/tests/integration/pipeline-functional-tests.js';
const REPORT_MD = path.join(REPO_ROOT, 'workspace/reports/governance/pipeline-inventory.md');
const REPORT_JSON = path.join(REPO_ROOT, 'workspace/reports/governance/pipeline-inventory.json');

function walk(root) {
  const out = [];
  if (!fs.existsSync(root)) return out;
  const stack = [root];
  while (stack.length) {
    const dir = stack.pop();
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name === 'x-archive' || entry.name.startsWith('x-archive')) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) stack.push(full);
      else if (entry.isFile() && entry.name.startsWith('dispatch-') && entry.name.endsWith('.js')) {
        out.push(full);
      }
    }
  }
  return out.sort();
}

function extractJSDocTags(source) {
  const tags = {};
  const match = source.match(/\/\*\*([\s\S]*?)\*\//);
  if (!match) return tags;
  for (const line of match[1].split('\n')) {
    const m = line.match(/@(\w+)([\t ]*)([^\n]*)/);
    if (m) tags[m[1].toLowerCase()] = m[3].trim();
  }
  return tags;
}

function extractAtomics(source) {
  const out = new Set();
  // ATOMICS = { ... 'path' ... }
  const atomicsBlock = source.match(/ATOMICS\s*=\s*\{([\s\S]*?)\}\s*;/);
  if (atomicsBlock) {
    const paths = atomicsBlock[1].match(/['"`](operations\/scripts\/[^'"`]+)['"`]/g) || [];
    for (const p of paths) out.add(p.replace(/['"`]/g, ''));
  }
  // const CHECK = path.join(REPO_ROOT, 'operations/scripts/...')
  const constJoin = /const\s+\w+\s*=\s*path\.join\([^,]*,\s*['"`](operations\/scripts\/[^'"`]+)['"`]\)/g;
  let m;
  while ((m = constJoin.exec(source)) !== null) out.add(m[1]);
  // runAtomic(path.join(REPO_ROOT, 'operations/scripts/...'))
  const runJoin = /runAtomic\([^,]*path\.join\([^,]*,\s*['"`](operations\/scripts\/[^'"`]+)['"`]/g;
  while ((m = runJoin.exec(source)) !== null) out.add(m[1]);
  return Array.from(out).sort();
}

function extractOutputs(source) {
  const out = new Set();
  // OUTPUT_PATH = 'snippets/...' or v2/ or workspace/
  const outputDecl = /(?:OUTPUT_PATH|outputPath|REPORT_PATH|outDir)\s*=\s*(?:path\.join\([^)]*?,\s*)?['"`]([^'"`]+)['"`]/g;
  let m;
  while ((m = outputDecl.exec(source)) !== null) {
    if (/^(snippets|v2|workspace|docs-guide|api)\//.test(m[1]) || /\.(json|jsx|mdx|md|xml|txt)$/i.test(m[1])) {
      out.add(m[1]);
    }
  }
  // Mentioned in JSDoc @scope or @description
  return Array.from(out).sort();
}

function extractScopeOutputs(jsdoc) {
  const out = new Set();
  // Parse @scope for paths like "snippets/data/X" or "v2/Y"
  const scope = jsdoc.scope || '';
  const matches = scope.match(/(?:snippets|v2|workspace|docs-guide|api)\/[A-Za-z0-9_\-./*]+/g) || [];
  for (const p of matches) out.add(p.replace(/\/$/, ''));
  return Array.from(out).sort();
}

function findCallers(scriptRel) {
  const callers = new Set();
  const basename = path.basename(scriptRel);
  // Two passes: search by full path (catches workflow refs) AND by basename (catches meta-dispatcher
  // PIPELINES arrays that reference dispatchers by file name only).
  for (const needle of [scriptRel, basename]) {
    try {
      const out = execSync(
        `grep -rlF "${needle}" .github/workflows operations/scripts .claude operations/governance/config 2>/dev/null || true`,
        { cwd: REPO_ROOT, encoding: 'utf8' }
      );
      for (const line of out.split('\n').filter(Boolean)) {
        if (line === scriptRel) continue;
        if (line.includes('x-archive/')) continue;
        if (line.endsWith('.archived')) continue;
        callers.add(line);
      }
    } catch { /* tolerate */ }
  }
  return Array.from(callers).sort();
}

function findConsumers(outputPaths) {
  const consumers = new Set();
  for (const out of outputPaths) {
    if (!out || out.includes('*')) continue;
    try {
      const grepOut = execSync(
        `grep -rlF "${out}" v2 snippets docs-guide ai-tools 2>/dev/null || true`,
        { cwd: REPO_ROOT, encoding: 'utf8' }
      );
      for (const line of grepOut.split('\n').filter(Boolean)) {
        if (line === out) continue;
        if (line.includes('_workspace/archive/')) continue;
        consumers.add(line);
      }
    } catch { /* tolerate */ }
  }
  return Array.from(consumers).slice(0, 8); // cap noise
}

function classifyTier(jsdoc, atomics) {
  const niche = (jsdoc.niche || '').toLowerCase();
  if (niche === 'meta') return 'meta';
  // Pipeline tier: invokes atomics directly OR is a niche-named dispatcher
  return 'pipeline';
}

function loadSmokeExclusions() {
  const src = fs.readFileSync(path.join(REPO_ROOT, SMOKE_TEST_PATH), 'utf8');
  const m = src.match(/INFRASTRUCTURE_DEPENDENT\s*=\s*new Set\(\[([\s\S]*?)\]\)/);
  if (!m) return new Set();
  const paths = m[1].match(/['"`]([^'"`]+)['"`]/g) || [];
  return new Set(paths.map((p) => p.replace(/['"`]/g, '')));
}

function loadFunctionalCoverage() {
  const src = fs.readFileSync(path.join(REPO_ROOT, FUNCTIONAL_TEST_PATH), 'utf8');
  const dispatchers = new Set();
  // dispatcherPath: path.join(CONTENT_DIR/GOV_DIR, 'foo/dispatch-bar.js')
  const matches = src.match(/dispatcherPath:\s*path\.join\([^,]+,\s*['"`]([^'"`]+)['"`]/g) || [];
  for (const m of matches) {
    const pm = m.match(/['"`]([^'"`]+)['"`]/);
    if (pm) {
      const sub = pm[1];
      // Reconstruct full path
      if (sub.startsWith('governance/')) dispatchers.add(`operations/scripts/dispatch/${sub}`);
      else dispatchers.add(`operations/scripts/dispatch/content/${sub}`);
    }
  }
  return dispatchers;
}

function loadWorkflowCallers() {
  const callers = new Map(); // dispatcher → Set of workflow files (de-duped — same dispatcher in multiple jobs of the same YAML counts once)
  if (!fs.existsSync(WORKFLOWS_DIR)) return callers;
  for (const f of fs.readdirSync(WORKFLOWS_DIR)) {
    if (!f.endsWith('.yml') && !f.endsWith('.yaml')) continue;
    const abs = path.join(WORKFLOWS_DIR, f);
    const src = fs.readFileSync(abs, 'utf8');
    const refs = src.match(/operations\/scripts\/dispatch\/[A-Za-z0-9_\-./]+\.js/g) || [];
    for (const ref of refs) {
      if (!callers.has(ref)) callers.set(ref, new Set());
      callers.get(ref).add(f);
    }
  }
  // Normalise to Array (callers of a dispatcher = unique workflow files).
  for (const [k, v] of callers.entries()) callers.set(k, Array.from(v).sort());
  return callers;
}

function inventoryDispatcher(scriptAbs, ctx) {
  const rel = path.relative(REPO_ROOT, scriptAbs);
  let source = '';
  try { source = fs.readFileSync(scriptAbs, 'utf8'); }
  catch { return null; }
  const jsdoc = extractJSDocTags(source);
  const atomics = extractAtomics(source);
  const outputsFromCode = extractOutputs(source);
  const outputsFromScope = extractScopeOutputs(jsdoc);
  const outputs = Array.from(new Set([...outputsFromCode, ...outputsFromScope])).sort();
  const callers = findCallers(rel);
  const consumers = findConsumers(outputs);
  const tier = classifyTier(jsdoc, atomics);

  const inSmoke = !ctx.smokeExclusions.has(rel);
  const inFunctional = ctx.functionalDispatchers.has(rel);
  const workflowCallers = ctx.workflowCallers.get(rel) || [];

  return {
    path: rel,
    name: path.basename(scriptAbs),
    tier,
    concern: (jsdoc.concern || '').trim(),
    niche: (jsdoc.niche || '').trim(),
    pipelineTag: (jsdoc.pipeline || '').trim(),
    mode: (jsdoc.mode || '').trim(),
    purpose: (jsdoc.purpose || '').trim(),
    atomics,
    outputs,
    consumers,
    callers: workflowCallers,
    scriptCallers: callers.filter((c) => !c.startsWith('.github/workflows/')),
    coverage: {
      smoke: inSmoke,
      functional: inFunctional,
      smokeExcluded: ctx.smokeExclusions.has(rel),
    },
  };
}

function renderMarkdown(rows) {
  const byConcern = {};
  for (const r of rows) {
    const c = r.concern || 'unknown';
    if (!byConcern[c]) byConcern[c] = [];
    byConcern[c].push(r);
  }

  const lines = [];
  lines.push('# Pipeline inventory');
  lines.push('');
  lines.push(`Generated ${new Date().toISOString().split('T')[0]} by \`operations/scripts/audits/governance/repo/audit-pipeline-inventory.js\`.`);
  lines.push('');
  lines.push('Single source of truth for every dispatcher (pipeline + meta tier). One row per dispatcher with tier, concern, atomics called, output destinations, live consumers, schedule/caller, and test coverage. Use this to answer "is pipeline X healthy?" without grepping 4 sources.');
  lines.push('');

  // Summary table
  const total = rows.length;
  const smokeCovered = rows.filter((r) => r.coverage.smoke).length;
  const functionalCovered = rows.filter((r) => r.coverage.functional).length;
  const orphans = rows.filter((r) => r.callers.length === 0 && r.scriptCallers.length === 0).length;
  lines.push('## Summary');
  lines.push('');
  lines.push(`- **Total dispatchers:** ${total}`);
  lines.push(`- **Smoke-test coverage:** ${smokeCovered}/${total} (${total - smokeCovered} infrastructure-dependent exclusions)`);
  lines.push(`- **Functional-test coverage:** ${functionalCovered}/${total}`);
  lines.push(`- **Dispatchers with zero callers** (orphan / manual-only): ${orphans}`);
  lines.push('');
  for (const [c, list] of Object.entries(byConcern).sort()) {
    lines.push(`- **${c}** — ${list.length} dispatchers`);
  }
  lines.push('');

  // Per concern detail
  for (const c of Object.keys(byConcern).sort()) {
    const list = byConcern[c].sort((a, b) => a.name.localeCompare(b.name));
    lines.push(`## ${c} concern — ${list.length} dispatchers`);
    lines.push('');
    for (const r of list) {
      lines.push(`### \`${r.path}\``);
      lines.push('');
      lines.push(`- **Tier:** ${r.tier}`);
      lines.push(`- **Niche:** ${r.niche || '_(missing)_'}`);
      lines.push(`- **Pipeline tag:** ${r.pipelineTag || '_(missing)_'}`);
      lines.push(`- **Mode:** ${r.mode || '_(missing)_'}`);
      if (r.purpose) lines.push(`- **Purpose:** ${r.purpose}`);
      lines.push('');
      lines.push(`**Atomics called (${r.atomics.length}):**`);
      if (r.atomics.length === 0) {
        lines.push('  - _(none detected — meta dispatcher or no atomics)_');
      } else {
        for (const a of r.atomics.slice(0, 8)) lines.push(`  - \`${a}\``);
        if (r.atomics.length > 8) lines.push(`  - _… +${r.atomics.length - 8} more_`);
      }
      lines.push('');
      lines.push(`**Outputs (${r.outputs.length}):**`);
      if (r.outputs.length === 0) lines.push('  - _(no static output paths detected)_');
      else for (const o of r.outputs.slice(0, 5)) lines.push(`  - \`${o}\``);
      lines.push('');
      lines.push(`**Workflow callers (${r.callers.length}):** ${r.callers.length ? r.callers.map((s) => `\`${s}\``).join(', ') : '_(none — not wired into any Action workflow)_'}`);
      lines.push('');
      lines.push(`**Script callers (${r.scriptCallers.length}):** ${r.scriptCallers.length ? r.scriptCallers.slice(0, 4).map((s) => `\`${s}\``).join(', ') + (r.scriptCallers.length > 4 ? ` _(+${r.scriptCallers.length - 4} more)_` : '') : '_(none)_'}`);
      lines.push('');
      lines.push(`**Live consumers of outputs (${r.consumers.length}):** ${r.consumers.length ? r.consumers.slice(0, 4).map((s) => `\`${s}\``).join(', ') + (r.consumers.length > 4 ? ` _(+${r.consumers.length - 4} more)_` : '') : '_(none detected)_'}`);
      lines.push('');
      const smokeMark = r.coverage.smokeExcluded ? '⏭  EXCLUDED (infrastructure-dependent)' : (r.coverage.smoke ? '✅' : '—');
      const functionalMark = r.coverage.functional ? '✅' : '—';
      lines.push(`**Test coverage:** smoke ${smokeMark} · functional ${functionalMark}`);
      lines.push('');
      lines.push('---');
      lines.push('');
    }
  }
  return lines.join('\n');
}

function parseArgs(argv) {
  const args = { json: false, concern: null };
  for (let i = 0; i < argv.length; i += 1) {
    const t = argv[i];
    if (t === '--json') args.json = true;
    if (t === '--concern') { args.concern = argv[i + 1]; i += 1; }
  }
  return args;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  console.log('Walking dispatchers...');
  const scripts = walk(DISPATCH_ROOT);
  console.log(`Found ${scripts.length} dispatchers`);

  const ctx = {
    smokeExclusions: loadSmokeExclusions(),
    functionalDispatchers: loadFunctionalCoverage(),
    workflowCallers: loadWorkflowCallers(),
  };

  console.log(`Smoke-test exclusions: ${ctx.smokeExclusions.size}`);
  console.log(`Functional-test dispatchers: ${ctx.functionalDispatchers.size}`);
  console.log(`Workflow caller map: ${ctx.workflowCallers.size} dispatcher → workflow entries`);

  const rows = [];
  for (const s of scripts) {
    const row = inventoryDispatcher(s, ctx);
    if (row) rows.push(row);
  }

  const filtered = args.concern ? rows.filter((r) => r.concern === args.concern) : rows;

  fs.mkdirSync(path.dirname(REPORT_MD), { recursive: true });
  atomicWrite(REPORT_MD, renderMarkdown(filtered));
  atomicWrite(REPORT_JSON, JSON.stringify(filtered, null, 2));

  console.log('');
  console.log(`Wrote ${path.relative(REPO_ROOT, REPORT_MD)}`);
  console.log(`Wrote ${path.relative(REPO_ROOT, REPORT_JSON)}`);
  console.log('');
  console.log(`Inventoried ${filtered.length} dispatchers across ${new Set(filtered.map((r) => r.concern)).size} concerns.`);

  if (args.json) {
    const summary = {
      total: filtered.length,
      smoke: filtered.filter((r) => r.coverage.smoke).length,
      functional: filtered.filter((r) => r.coverage.functional).length,
      byConcern: filtered.reduce((acc, r) => { acc[r.concern || 'unknown'] = (acc[r.concern || 'unknown'] || 0) + 1; return acc; }, {}),
    };
    console.log('');
    console.log(JSON.stringify(summary, null, 2));
  }
}

if (require.main === module) main();
