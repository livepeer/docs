#!/usr/bin/env node
/**
 * SME Script Audit Generator (one-shot Phase 1 tool)
 *
 * Reads tools/config/registry/script-registry.json + scans .github/workflows/*.yml
 * for callers + git log for last-modified. Outputs one markdown audit doc per
 * concern at workspace/reports/script-audit/{concern}.md.
 *
 * Usage: node workspace/reports/script-audit/generate.js [concern]
 *   (with no arg: generates all 7 concerns)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO = process.cwd();
const REGISTRY = path.join(REPO, 'tools/config/registry/script-registry.json');
const WORKFLOWS_DIR = path.join(REPO, '.github/workflows');
const OUT_DIR = path.join(REPO, 'workspace/reports/script-audit');

const VALID_CONCERNS = ['copy', 'health', 'maintenance', 'discoverability', 'governance', 'brand', 'integrations'];

// ---------------------------------------------------------------------------
// Load registry
// ---------------------------------------------------------------------------
const rawRegistry = JSON.parse(fs.readFileSync(REGISTRY, 'utf8'));
const allEntries = Array.isArray(rawRegistry) ? rawRegistry : Object.values(rawRegistry);

// Filter to operations/scripts/ only, exclude x-archive
const inScope = allEntries.filter(e =>
  e.path
  && e.path.startsWith('operations/scripts/')
  && !e.path.includes('/x-archive/')
  && !e.path.includes('/test/')
);

// ---------------------------------------------------------------------------
// Scan workflows for callers
// ---------------------------------------------------------------------------
function loadWorkflowCallers() {
  const callers = new Map(); // script path -> [workflow filenames]
  const files = fs.readdirSync(WORKFLOWS_DIR).filter(f => f.endsWith('.yml'));
  for (const wf of files) {
    const content = fs.readFileSync(path.join(WORKFLOWS_DIR, wf), 'utf8');
    // Match node|bash|sh|require/import of operations/scripts paths
    const matches = content.match(/operations\/scripts\/[^\s'"`)]+/g) || [];
    const unique = [...new Set(matches.map(m => m.replace(/['"`)]+$/, '')))];
    for (const script of unique) {
      if (!callers.has(script)) callers.set(script, []);
      callers.get(script).push(wf);
    }
  }
  return callers;
}

const workflowCallers = loadWorkflowCallers();

// ---------------------------------------------------------------------------
// Cross-script callers (scripts that require other scripts)
// ---------------------------------------------------------------------------
function loadScriptCallers() {
  const callers = new Map();
  for (const entry of inScope) {
    const abs = path.join(REPO, entry.path);
    if (!fs.existsSync(abs)) continue;
    let content;
    try { content = fs.readFileSync(abs, 'utf8'); } catch (_) { continue; }
    const matches = content.match(/operations\/scripts\/[^\s'"`)]+/g) || [];
    const unique = [...new Set(matches.map(m => m.replace(/['"`)]+$/, '')))];
    for (const dep of unique) {
      if (dep === entry.path) continue;
      if (!callers.has(dep)) callers.set(dep, []);
      callers.get(dep).push(entry.path);
    }
  }
  return callers;
}
const scriptCallers = loadScriptCallers();

// ---------------------------------------------------------------------------
// Capabilities (--dry-run, --verify, --files) from file content
// ---------------------------------------------------------------------------
function detectCapabilities(scriptPath) {
  const abs = path.join(REPO, scriptPath);
  if (!fs.existsSync(abs)) return { dryRun: false, verify: false, files: false, error: 'missing' };
  let content;
  try { content = fs.readFileSync(abs, 'utf8'); } catch (_) { return { dryRun: false, verify: false, files: false, error: 'unreadable' }; }
  return {
    dryRun: /['"`]--dry-run['"`]|dry.run|dryRun|DRY_RUN/i.test(content),
    verify: /['"`]--verify['"`]|VERIFY_MODE|isVerify/.test(content),
    files: /['"`]--files['"`]/.test(content),
  };
}

// ---------------------------------------------------------------------------
// Git last-modified
// ---------------------------------------------------------------------------
function lastModified(scriptPath) {
  try {
    const date = execSync(
      `git log -1 --format=%cs -- ${JSON.stringify(scriptPath)}`,
      { encoding: 'utf8', cwd: REPO }
    ).trim();
    return date || 'never-committed';
  } catch (_) { return 'unknown'; }
}

// ---------------------------------------------------------------------------
// Generate per-concern audit doc
// ---------------------------------------------------------------------------
function generateConcernAudit(concern) {
  const entries = inScope.filter(e => e.concern === concern);
  if (entries.length === 0) return null;

  // Group by type, then niche
  const byType = {};
  for (const e of entries) {
    const type = e.type || '(no-type)';
    if (!byType[type]) byType[type] = {};
    const niche = e.niche || '(no-niche)';
    if (!byType[type][niche]) byType[type][niche] = [];
    byType[type][niche].push(e);
  }

  const lines = [];
  lines.push(`# SME Audit: \`${concern}\` concern`);
  lines.push('');
  lines.push(`> ${entries.length} scripts | Generated ${new Date().toISOString().slice(0, 10)}`);
  lines.push('> Walk through each script. Set verdict per row. SME notes column free-form.');
  lines.push('>');
  lines.push('> **Verdict options:** `keep` / `refactor` / `merge` / `archive` / `unknown`');
  lines.push('');
  lines.push('---');
  lines.push('');

  const typeOrder = ['audit', 'validator', 'generator', 'remediator', 'integrator', 'interface', 'dispatch'];
  const typeList = [...new Set([...typeOrder, ...Object.keys(byType)])].filter(t => byType[t]);

  for (const type of typeList) {
    const niches = byType[type];
    const total = Object.values(niches).reduce((sum, arr) => sum + arr.length, 0);
    lines.push(`## ${type} (${total})`);
    lines.push('');

    const nicheOrder = Object.keys(niches).sort();
    for (const niche of nicheOrder) {
      const items = niches[niche];
      lines.push(`### niche: \`${niche}\` (${items.length})`);
      lines.push('');

      for (const e of items) {
        const caps = detectCapabilities(e.path);
        const modified = lastModified(e.path);
        const wfCallers = workflowCallers.get(e.path) || [];
        const scrCallers = scriptCallers.get(e.path) || [];

        const capsTags = [];
        if (caps.dryRun) capsTags.push('`--dry-run`');
        if (caps.verify) capsTags.push('`--verify`');
        if (caps.files) capsTags.push('`--files`');
        const capsStr = capsTags.length ? capsTags.join(' ') : '(no flags)';

        const callerStr = wfCallers.length
          ? wfCallers.map(w => `\`${w}\``).join(', ')
          : (scrCallers.length ? `script-only: ${scrCallers.length} caller(s)` : '**ORPHAN — no caller**');

        lines.push(`#### \`${path.basename(e.path)}\``);
        lines.push('');
        lines.push(`- **Path:** \`${e.path}\``);
        lines.push(`- **Purpose:** ${e.purpose || '_(missing)_'}`);
        if (e.description && e.description !== e.purpose) {
          lines.push(`- **Description:** ${e.description}`);
        }
        lines.push(`- **Workflow callers:** ${callerStr}`);
        if (scrCallers.length && wfCallers.length) {
          lines.push(`- **Script callers:** ${scrCallers.length} other script(s)`);
        }
        lines.push(`- **Capabilities:** ${capsStr}`);
        lines.push(`- **Last modified:** ${modified}`);
        lines.push(`- **Mode:** ${e.mode || '_(unset)_'}`);
        lines.push(`- **Pipeline:** ${e.pipeline || '_(unset)_'}`);
        lines.push(`- **Usage:** \`${(e.usage || '_(missing)_').replace(/\n/g, ' ')}\``);
        lines.push('');
        lines.push('| Verdict | SME notes |');
        lines.push('|---|---|');
        lines.push('| _(pending)_ | _(pending)_ |');
        lines.push('');
        lines.push('---');
        lines.push('');
      }
    }
  }

  // Orphan summary
  const orphans = entries.filter(e => {
    const wf = workflowCallers.get(e.path) || [];
    const sc = scriptCallers.get(e.path) || [];
    return wf.length === 0 && sc.length === 0;
  });

  if (orphans.length) {
    lines.push('');
    lines.push(`## Orphan summary (${orphans.length})`);
    lines.push('');
    lines.push('Scripts with no workflow caller and no other script caller. Candidates for archive.');
    lines.push('');
    for (const o of orphans) {
      lines.push(`- \`${o.path}\` — ${o.purpose || '_(no purpose set)_'}`);
    }
    lines.push('');
  }

  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Generate all concerns (or one specified)
// ---------------------------------------------------------------------------
fs.mkdirSync(OUT_DIR, { recursive: true });

const concernArg = process.argv[2];
const concernsToProcess = concernArg ? [concernArg] : VALID_CONCERNS;

let totalScripts = 0;
const summary = [];

for (const concern of concernsToProcess) {
  const doc = generateConcernAudit(concern);
  if (!doc) {
    console.log(`SKIP ${concern}: no entries`);
    continue;
  }
  const outPath = path.join(OUT_DIR, `${concern}.md`);
  fs.writeFileSync(outPath, doc);
  const count = inScope.filter(e => e.concern === concern).length;
  totalScripts += count;
  summary.push({ concern, count, path: outPath.replace(REPO + '/', '') });
  console.log(`Generated ${concern}: ${count} scripts -> ${outPath.replace(REPO + '/', '')}`);
}

// Also list scripts with malformed/missing concern (need JSDoc fix)
const needsFix = inScope.filter(e =>
  !VALID_CONCERNS.includes(e.concern)
  && !e.path.includes('/x-archive/')
);
if (needsFix.length && !concernArg) {
  const lines = [];
  lines.push('# SME Audit: Scripts with malformed/missing @concern');
  lines.push('');
  lines.push(`> ${needsFix.length} scripts need JSDoc header fixes before concern classification.`);
  lines.push('');
  for (const e of needsFix) {
    lines.push(`- \`${e.path}\` — current concern: \`${e.concern || '(empty)'}\` — purpose: ${e.purpose || '_(none)_'}`);
  }
  lines.push('');
  fs.writeFileSync(path.join(OUT_DIR, '_needs-jsdoc-fix.md'), lines.join('\n'));
  console.log(`Generated _needs-jsdoc-fix.md: ${needsFix.length} scripts`);
}

// Index doc
if (!concernArg) {
  const lines = [];
  lines.push('# SME Script Audit — Index');
  lines.push('');
  lines.push(`> Generated ${new Date().toISOString().slice(0, 10)}`);
  lines.push(`> Total scripts in scope: ${totalScripts}`);
  lines.push('');
  lines.push('Review order (smallest concern first; governance last):');
  lines.push('');
  const order = ['copy', 'brand', 'discoverability', 'maintenance', 'integrations', 'health', 'governance'];
  for (const c of order) {
    const s = summary.find(x => x.concern === c);
    if (s) lines.push(`- [${c} (${s.count})](./${c}.md)`);
  }
  if (needsFix.length) {
    lines.push('');
    lines.push(`- [_needs-jsdoc-fix (${needsFix.length})](./_needs-jsdoc-fix.md)`);
  }
  lines.push('');
  fs.writeFileSync(path.join(OUT_DIR, 'INDEX.md'), lines.join('\n'));
  console.log(`Generated INDEX.md`);
}

console.log('');
console.log(`Total: ${totalScripts} scripts audited across ${concernsToProcess.length} concern(s)`);
