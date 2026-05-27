#!/usr/bin/env node
/**
 * @script      audit-script-purpose-fit
 * @type        audit
 * @concern     governance
 * @niche       repo
 * @purpose     Semantic SME audit: for every script in the repo, surface @purpose, inputs read, outputs written, callers, and auto-flags so the SME can verdict keep/refactor/merge/archive per concern
 * @description Walks operations/scripts/ and tools/scripts/. Parses JSDoc 11-tag block. Statically scans the source for file reads, writes, and require calls. Greps callers across workflows + other scripts. Cross-checks the @concern tag against the 7 canonical concerns. Flags writes outside governed folders, reads from archive paths, vague purposes, duplicate niches, and orphans. Outputs per-concern markdown packets the SME reviews to verdict each script. The SME records verdicts in script-registry.json as sme_status.
 * @mode        scan
 * @pipeline    manual — SME-driven review (one-time deep audit per Phase 1 of the consolidation plan)
 * @scope       operations/scripts/**, tools/scripts/**
 * @usage       node operations/scripts/audits/governance/repo/audit-script-purpose-fit.js [--concern <name>] [--json]
 * @policy      D-GOV-08 (every script and folder is governed)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { atomicWrite } = require('../../../../../tools/lib/bootstrap/safe-io');

const REPO_ROOT = process.cwd();
const SCAN_ROOTS = [
  path.join(REPO_ROOT, 'operations/scripts'),
  path.join(REPO_ROOT, 'tools/scripts'),
];
const REPORT_BASE = path.join(REPO_ROOT, 'workspace/reports/script-audit');

const CANONICAL_CONCERNS = new Set([
  'copy', 'health', 'maintenance', 'discoverability', 'governance', 'brand', 'integrations',
]);

const CANONICAL_TYPES = new Set([
  'audit', 'generator', 'validator', 'remediator', 'dispatch', 'integrator', 'interface',
]);

// Concepts that don't apply to this Mintlify-MDX ownerless docs repo.
const OUT_OF_REPO_CONCEPTS = [
  'speakeasy', // SDK gen — present but external service
  'vercel', // not the deploy target
  'nextjs', 'next.js', 'next-app',
  'gatsby',
  'hugo',
  'jekyll',
  'docusaurus',
  'docsify',
  'storybook', // not in use
  'firebase',
  'aws-amplify',
  'medusajs',
  'shopify',
];

// Paths that indicate reading from non-canonical / archive locations.
const NON_CANONICAL_READ_PREFIXES = [
  '_workspace/archive/',
  'x-archive/',
  'tasks/', // newly demoted — see folder-allowlist sweep
  '.github/x-archive/',
  'operations/scripts/x-archive/',
  'workspace/reports/_local/',
];

function walk(root) {
  const out = [];
  if (!fs.existsSync(root)) return out;
  const stack = [root];
  while (stack.length) {
    const dir = stack.pop();
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      // Skip archived/legacy/deprecated directories — they're already out of the canonical pipeline.
      if (entry.name === 'node_modules' || entry.name === 'archive' || entry.name === 'x-archive' || entry.name === 'deprecated' || entry.name === 'legacy' || entry.name.startsWith('x-archive')) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) stack.push(full);
      else if (entry.isFile() && /\.(js|sh|py)$/.test(entry.name)) out.push(full);
    }
  }
  return out;
}

function extractJSDocTags(source) {
  const tags = {};
  // JS/TS: /** ... */ block.
  const jsMatch = source.match(/\/\*\*([\s\S]*?)\*\//);
  let block = jsMatch ? jsMatch[1] : null;
  // Shell/Python: contiguous `# @tag value` lines in the file header.
  if (!block) {
    const headLines = source.split('\n').slice(0, 50);
    const tagLines = headLines.filter((l) => /^\s*#\s*@\w+/.test(l));
    if (tagLines.length > 0) block = tagLines.join('\n');
  }
  if (!block) return tags;
  for (const line of block.split('\n')) {
    const m = line.match(/@(\w+)\s+(.*)/);
    if (m) tags[m[1].toLowerCase()] = m[2].trim();
  }
  return tags;
}

// Known top-level directories that are legitimate path roots (matches our root .allowlist).
const KNOWN_ROOTS = new Set([
  'v1', 'v2', 'docs-guide', 'snippets', 'tools', 'operations',
  '.github', '.githooks', '.claude', 'ai-tools', 'workspace', 'api',
  'tasks', // legacy — still surfaced to flag remaining tasks/ writers
]);

function looksLikePath(s) {
  if (!s) return false;
  if (/[A-Z_]+|[a-z]+\.[a-z]+/.test(s) && !s.includes('/') && !KNOWN_ROOTS.has(s.split('/')[0])) {
    // Likely a variable like `result.file` or `outDir` — skip.
    return false;
  }
  // Either has a `/`, ends with a known extension, OR is a known root dir.
  if (s.includes('/')) return true;
  if (/\.(md|mdx|json|yml|yaml|js|sh|py|css|ts|tsx|txt|html|xml|csv)$/.test(s)) return true;
  if (KNOWN_ROOTS.has(s)) return true;
  return false;
}

function extractFileOps(source) {
  const reads = new Set();
  const writes = new Set();
  const joinPattern = /path\.join\(\s*(?:REPO_ROOT|repoRoot|repo_root)\s*,\s*([^)]+)\)/g;
  let m;
  while ((m = joinPattern.exec(source)) !== null) {
    const argList = m[1];
    // Only count if every arg is a string literal (skips variable interpolation).
    const parts = argList.split(',').map((p) => p.trim());
    const allLiteral = parts.every((p) => /^['"`].*['"`]$/.test(p));
    if (!allLiteral) continue;
    const cleaned = parts.map((p) => p.replace(/^['"`]|['"`]$/g, ''));
    const joined = cleaned.join('/').replace(/\/+/g, '/');
    if (!looksLikePath(joined)) continue;
    const idx = m.index;
    const window = source.slice(Math.max(0, idx - 80), Math.min(source.length, idx + 200));
    if (/writeFile|writeFileSync|appendFile|mkdir|fs\.write/.test(window)) writes.add(joined);
    else reads.add(joined);
  }
  const writeLiteral = /(?:fs\.writeFileSync|fs\.appendFileSync|fs\.writeFile|fs\.appendFile)\(\s*['"`]([^'"`]+)['"`]/g;
  while ((m = writeLiteral.exec(source)) !== null) {
    if (looksLikePath(m[1])) writes.add(m[1]);
  }
  const readLiteral = /(?:fs\.readFileSync|fs\.readFile)\(\s*['"`]([^'"`]+)['"`]/g;
  while ((m = readLiteral.exec(source)) !== null) {
    if (looksLikePath(m[1])) reads.add(m[1]);
  }
  return { reads: Array.from(reads), writes: Array.from(writes) };
}

function findCallers(scriptRel, scriptName) {
  const callers = new Set();
  // Search paths include .claude/ (Claude Code hooks reference scripts via settings.json) and
  // operations/governance/config/ (generated-artifacts.json declares generators).
  const searchRoots = [
    '.github/workflows', 'operations/scripts', 'operations/governance/config',
    'tools/scripts', '.githooks', '.claude', 'docs-guide',
  ];
  try {
    const out = execSync(
      `grep -rlE "${scriptName.replace('.', '\\.')}" ${searchRoots.join(' ')} 2>/dev/null || true`,
      { cwd: REPO_ROOT, encoding: 'utf8' }
    );
    for (const line of out.split('\n').filter(Boolean)) {
      if (line === scriptRel) continue; // self
      if (line.includes('x-archive/')) continue;
      if (line.endsWith('.archived')) continue;
      if (line.includes('script-classifications-legacy')) continue;
      if (line.includes('_workspace/archive/')) continue;
      callers.add(line);
    }
  } catch { /* tolerate */ }
  return Array.from(callers);
}

// Internal modules (lib/, test/, helpers under integrators) aren't governed dispatch scripts —
// they're code library modules consumed by other scripts. Mark them so the SME doesn't waste time.
function isInternalModule(scriptRel) {
  const parts = scriptRel.split(path.sep);
  return parts.some((p) => p === 'lib' || p === 'test' || p === 'tests' || p === 'helpers' || p === 'utils');
}

function classifyConcern(scriptAbs, tags) {
  const tagConcern = (tags.concern || '').toLowerCase();
  if (CANONICAL_CONCERNS.has(tagConcern)) return tagConcern;
  // Infer from path
  const rel = path.relative(REPO_ROOT, scriptAbs);
  const parts = rel.split(path.sep);
  for (const part of parts) {
    if (CANONICAL_CONCERNS.has(part)) return part;
  }
  // Some specific guesses
  if (rel.includes('brand') || rel.includes('style')) return 'brand';
  if (rel.includes('copy') || rel.includes('changelog') || rel.includes('social')) return 'copy';
  if (rel.includes('discover') || rel.includes('seo') || rel.includes('og-image') || rel.includes('sitemap')) return 'discoverability';
  if (rel.includes('health') || rel.includes('link') || rel.includes('wcag') || rel.includes('quality')) return 'health';
  if (rel.includes('maintenance') || rel.includes('catalog') || rel.includes('component') || rel.includes('contract')) return 'maintenance';
  if (rel.includes('integrat')) return 'integrations';
  if (rel.includes('governance') || rel.includes('script-') || rel.includes('jsdoc') || rel.includes('hooks')) return 'governance';
  return 'unknown';
}

function classifyType(scriptAbs, tags) {
  const tagType = (tags.type || '').toLowerCase();
  if (CANONICAL_TYPES.has(tagType)) return tagType;
  const rel = path.relative(REPO_ROOT, scriptAbs);
  for (const t of CANONICAL_TYPES) {
    if (rel.includes(`/${t}s/`) || rel.includes(`/${t}/`)) return t;
  }
  if (rel.includes('check-') || rel.includes('lint-') || rel.includes('validate')) return 'validator';
  if (rel.includes('generate-')) return 'generator';
  if (rel.includes('audit-')) return 'audit';
  if (rel.includes('repair-') || rel.includes('remediate-') || rel.includes('fix-')) return 'remediator';
  if (rel.includes('dispatch-') || rel.includes('orchestrat')) return 'dispatch';
  if (rel.includes('fetch-') || rel.includes('sync-') || rel.includes('-data')) return 'integrator';
  return 'unknown';
}

function computeFlags(scriptAbs, tags, ops, callers) {
  const flags = [];
  const rel = path.relative(REPO_ROOT, scriptAbs);
  const concern = classifyConcern(scriptAbs, tags);
  const internal = isInternalModule(rel);

  if (internal) {
    flags.push('lib-module (internal — imported by other scripts, not a standalone pipeline entry)');
  }
  // Only enforce JSDoc completeness on standalone (non-lib) scripts.
  if (!internal) {
    if (!CANONICAL_CONCERNS.has((tags.concern || '').toLowerCase())) {
      flags.push(`concern-missing-or-unknown (path suggests: ${concern})`);
    }
    if (!CANONICAL_TYPES.has((tags.type || '').toLowerCase())) {
      flags.push('type-missing-or-unknown');
    }
    if (!tags.purpose || tags.purpose.length < 20) {
      flags.push('purpose-vague-or-missing');
    }
  }
  if (tags.purpose) {
    const lower = tags.purpose.toLowerCase();
    for (const concept of OUT_OF_REPO_CONCEPTS) {
      if (lower.includes(concept)) flags.push(`out-of-repo-concept:${concept}`);
    }
  }
  for (const r of ops.reads) {
    for (const prefix of NON_CANONICAL_READ_PREFIXES) {
      if (r.startsWith(prefix)) flags.push(`reads-non-canonical:${r}`);
    }
  }
  for (const w of ops.writes) {
    // Ungoverned write: writes to a path whose top-level folder isn't on the root .allowlist
    const top = w.split('/')[0];
    const rootAllowlist = path.join(REPO_ROOT, '.allowlist');
    if (fs.existsSync(rootAllowlist)) {
      const allowed = fs.readFileSync(rootAllowlist, 'utf8')
        .split('\n').map((s) => s.replace(/#.*$/, '').trim().replace(/\/$/, ''))
        .filter(Boolean);
      if (top && !allowed.includes(top) && !top.startsWith('.')) {
        flags.push(`writes-ungoverned:${w}`);
      }
    }
  }
  if (callers.length === 0 && !/\.githooks\//.test(rel) && !/dispatch-/.test(path.basename(rel))) {
    flags.push('orphan-no-caller');
  }
  return flags;
}

function auditScript(scriptAbs) {
  const rel = path.relative(REPO_ROOT, scriptAbs);
  let source = '';
  try { source = fs.readFileSync(scriptAbs, 'utf8'); }
  catch { return null; }
  const tags = extractJSDocTags(source);
  const ops = extractFileOps(source);
  const callers = findCallers(rel, path.basename(scriptAbs));
  const concern = classifyConcern(scriptAbs, tags);
  const type = classifyType(scriptAbs, tags);
  const flags = computeFlags(scriptAbs, tags, ops, callers);
  return {
    path: rel,
    name: path.basename(scriptAbs),
    concern,
    type,
    niche: (tags.niche || '').trim(),
    purpose: (tags.purpose || '').trim(),
    description: (tags.description || '').trim(),
    scope: (tags.scope || '').trim(),
    reads: ops.reads,
    writes: ops.writes,
    callers,
    flags,
  };
}

function buildPacket(rows, concern) {
  const lines = [];
  lines.push(`# Script audit — ${concern} concern`);
  lines.push('');
  lines.push(`Generated ${new Date().toISOString().split('T')[0]}`);
  lines.push('');
  lines.push(`**${rows.length} scripts** in this concern.`);
  lines.push('');
  // Group by type
  const byType = {};
  for (const r of rows) (byType[r.type] = byType[r.type] || []).push(r);
  for (const t of Object.keys(byType).sort()) {
    lines.push(`## ${t} (${byType[t].length})`);
    lines.push('');
    for (const r of byType[t].sort((a, b) => a.name.localeCompare(b.name))) {
      lines.push(`### \`${r.path}\``);
      lines.push('');
      lines.push(`**Niche:** ${r.niche || '_(missing)_'}`);
      lines.push('');
      lines.push(`**Purpose:** ${r.purpose || '_(missing)_'}`);
      lines.push('');
      if (r.description) {
        lines.push(`**Description:** ${r.description}`);
        lines.push('');
      }
      lines.push(`**Scope:** ${r.scope || '_(missing)_'}`);
      lines.push('');
      lines.push(`**Reads (${r.reads.length}):** ${r.reads.length ? r.reads.slice(0, 6).map((s) => `\`${s}\``).join(', ') + (r.reads.length > 6 ? ` _(+${r.reads.length - 6} more)_` : '') : '_(none detected)_'}`);
      lines.push('');
      lines.push(`**Writes (${r.writes.length}):** ${r.writes.length ? r.writes.slice(0, 6).map((s) => `\`${s}\``).join(', ') + (r.writes.length > 6 ? ` _(+${r.writes.length - 6} more)_` : '') : '_(none detected)_'}`);
      lines.push('');
      lines.push(`**Callers (${r.callers.length}):** ${r.callers.length ? r.callers.slice(0, 5).map((s) => `\`${s}\``).join(', ') + (r.callers.length > 5 ? ` _(+${r.callers.length - 5} more)_` : '') : '_(none detected — orphan?)_'}`);
      lines.push('');
      if (r.flags.length) {
        lines.push(`**🚩 Auto-flags:**`);
        for (const f of r.flags) lines.push(`- ${f}`);
        lines.push('');
      }
      lines.push(`**SME verdict:** \`unknown\` _(keep | refactor | merge | archive)_`);
      lines.push('');
      lines.push(`**SME notes:** _(reason for verdict)_`);
      lines.push('');
      lines.push('---');
      lines.push('');
    }
  }
  return lines.join('\n');
}

function parseArgs(argv) {
  const args = { concern: null, json: false };
  for (let i = 0; i < argv.length; i += 1) {
    const t = argv[i];
    if (t === '--concern') { args.concern = argv[i + 1]; i += 1; }
    if (t === '--json') args.json = true;
  }
  return args;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  console.log('Walking script roots...');
  const allScripts = SCAN_ROOTS.flatMap((r) => walk(r));
  console.log(`Found ${allScripts.length} scripts`);
  const rows = [];
  for (const s of allScripts) {
    const row = auditScript(s);
    if (row) rows.push(row);
  }

  // Group
  const byConcern = {};
  for (const r of rows) (byConcern[r.concern] = byConcern[r.concern] || []).push(r);

  fs.mkdirSync(REPORT_BASE, { recursive: true });
  const summary = { total: rows.length, byConcern: {}, byType: {}, flagged: 0 };
  for (const c of Object.keys(byConcern).sort()) {
    summary.byConcern[c] = byConcern[c].length;
    if (args.concern && c !== args.concern) continue;
    const concernDir = path.join(REPORT_BASE, c);
    fs.mkdirSync(concernDir, { recursive: true });
    const packet = buildPacket(byConcern[c], c);
    atomicWrite(path.join(concernDir, 'review-packet.md'), packet);
    atomicWrite(path.join(concernDir, 'review-packet.json'), JSON.stringify(byConcern[c], null, 2));
    console.log(`  ${c}: ${byConcern[c].length} scripts → ${path.relative(REPO_ROOT, concernDir)}/`);
  }
  for (const r of rows) {
    summary.byType[r.type] = (summary.byType[r.type] || 0) + 1;
    if (r.flags.length) summary.flagged += 1;
  }
  atomicWrite(path.join(REPORT_BASE, 'summary.json'), JSON.stringify(summary, null, 2));

  console.log('');
  console.log(`Audit complete. ${summary.total} scripts, ${summary.flagged} flagged.`);
  console.log(`Per-concern packets at: workspace/reports/script-audit/{concern}/review-packet.md`);
  if (args.json) console.log(JSON.stringify(summary, null, 2));
}

if (require.main === module) main();
