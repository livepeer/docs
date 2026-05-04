#!/usr/bin/env node
/**
 * @script      remediate-frontmatter-quotes
 * @type        remediator
 * @concern     brand
 * @niche       style
 * @purpose     qa:content-quality
 * @description Standardises MDX frontmatter scalar string values to double quotes. Decodes YAML single-quoted strings (including ''-escaped apostrophes) and re-encodes them as double-quoted strings, escaping internal double quotes and backslashes. Skips multi-line block scalars (| or >), explicit YAML tags, sequences, and mappings.
 * @mode        repair
 * @pipeline    PostToolUse:Edit|Write hook + remediator-brand-repair-frontmatter-quotes.yml workflow
 * @scope       v2/ (published routable MDX pages, excluding _workspace, x-archived, x-deprecated, locales)
 * @usage       node operations/scripts/remediators/content/style/remediate-frontmatter-quotes.js [--dry-run|--write] [--verify] [--staged] [--files path,path]
 *
 *   Examples:
 *     description: 'Foo''s bar'   → description: "Foo's bar"
 *     title: 'Plain title'         → title: "Plain title"
 *     description: "Already fine"  → unchanged
 *     description: Plain bareword  → description: "Plain bareword"
 *
 *   Untouched: list-of-strings, anchors, dates, multi-line blocks, numerics, booleans, !!tagged values.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const V2_ROOT = path.join(REPO_ROOT, 'v2');

const EXCLUDED_SEGMENTS = new Set(['_workspace', 'x-archived', 'x-deprecated', 'cn', 'es', 'fr']);

// ── Args ────────────────────────────────
function parseArgs(argv) {
  const args = { mode: 'dry-run', verify: false, help: false, stagedOnly: false, files: [] };
  for (let i = 0; i < argv.length; i++) {
    const t = argv[i];
    if (t === '--write') { args.mode = 'write'; continue; }
    if (t === '--dry-run') { args.mode = 'dry-run'; continue; }
    if (t === '--verify') { args.verify = true; continue; }
    if (t === '--help' || t === '-h') { args.help = true; continue; }
    if (t === '--staged') { args.stagedOnly = true; continue; }
    if (t === '--files' && i + 1 < argv.length) {
      args.files = argv[++i].split(',').map(f => f.trim()).filter(Boolean);
      continue;
    }
    if (t.startsWith('--files=')) {
      args.files = t.slice('--files='.length).split(',').map(f => f.trim()).filter(Boolean);
      continue;
    }
  }
  return args;
}

function printHelp() {
  process.stdout.write([
    'Usage: node operations/scripts/remediators/content/style/remediate-frontmatter-quotes.js [flags]',
    '',
    'Modes: --dry-run (default), --write, --verify',
    'Scope: --staged | --files a,b | (default: all v2 MDX)',
    '',
    'Standard: double quotes. Single-quoted scalars are converted; barewords are quoted only if they',
    'would otherwise create ambiguity (contain : # & * ! | > \\\' " % @ ` [ ] { } , or leading-space).',
    ''
  ].join('\n'));
}

// ── File walk ───────────────────────────
const toPosix = p => String(p || '').split(path.sep).join('/');
function isExcluded(rel) {
  return toPosix(rel).split('/').some(s => EXCLUDED_SEGMENTS.has(s) || /^x-/.test(s) || s.startsWith('_'));
}
function walkMdx(dir, out = []) {
  let entries; try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch (_) { return out; }
  for (const e of entries) {
    const full = path.join(dir, e.name);
    const rel = toPosix(path.relative(REPO_ROOT, full));
    if (isExcluded(rel)) continue;
    if (e.isDirectory()) walkMdx(full, out);
    else if (e.isFile() && /\.mdx$/i.test(e.name)) out.push({ fullPath: full, relPath: rel });
  }
  return out;
}
function getStaged() {
  const { execSync } = require('child_process');
  try {
    const o = execSync('git diff --cached --name-only --diff-filter=ACM', { cwd: REPO_ROOT, encoding: 'utf8' });
    return o.trim().split('\n')
      .filter(f => f && /\.mdx$/i.test(f) && f.startsWith('v2/') && !isExcluded(f))
      .map(rel => ({ fullPath: path.join(REPO_ROOT, rel), relPath: rel }));
  } catch (_) { return []; }
}
function resolveTargets(args) {
  if (args.files.length) {
    return args.files.map(f => {
      const abs = path.isAbsolute(f) ? f : path.join(REPO_ROOT, f);
      return { fullPath: abs, relPath: toPosix(path.relative(REPO_ROOT, abs)) };
    }).filter(f => /\.mdx$/i.test(f.relPath));
  }
  if (args.stagedOnly) return getStaged();
  return walkMdx(V2_ROOT);
}

// ── Frontmatter parsing ─────────────────
function extractFrontmatterBlock(content) {
  if (!content.startsWith('---')) return null;
  const close = content.indexOf('\n---', 3);
  if (close < 0) return null;
  const blockEnd = close + 4; // include trailing ---
  return { block: content.slice(0, blockEnd), end: blockEnd };
}

// Decode a YAML single-quoted scalar body (between the surrounding ').
// Single-quoted YAML escapes only '' → ' and treats everything else literally.
function decodeSingleQuoted(body) {
  return body.replace(/''/g, "'");
}

// Encode a JS string as a YAML double-quoted scalar.
// Frontmatter values for our use case are plain text;
// only backslash and double-quote need escaping.
function encodeDoubleQuoted(value) {
  const escaped = value
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"');
  return `"${escaped}"`;
}

// Test if a bareword needs quoting at all.
const NEEDS_QUOTING = /[:#&*!|>'"%@`\[\]\{\},]|^\s|\s$/;
const RESERVED_BAREWORDS = new Set(['true','false','null','yes','no','on','off','True','False','Null','TRUE','FALSE','NULL','~','']);

// Match a single-line key:value at any indent. Indent + key + colon + spaces + value (rest of line).
// Anchors (& *), tags (!!), block scalars (| >), sequences ([), mappings ({) are skipped.
const KEY_VALUE_LINE = /^([ \t]*)([A-Za-z_][\w.-]*|"(?:[^"\\]|\\.)*"|'(?:[^']|'')*')(\s*:\s*)(.*)$/;

function repairFrontmatter(block) {
  const lines = block.split('\n');
  const out = [];
  let changed = 0;
  // First and last lines are the --- markers; iterate lines between them.
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (i === 0 || (i === lines.length - 1 && /^---\s*$/.test(line))) {
      out.push(line);
      continue;
    }
    if (/^---\s*$/.test(line)) { out.push(line); continue; }

    const m = line.match(KEY_VALUE_LINE);
    if (!m) { out.push(line); continue; }

    const [, indent, key, sep, rawValue] = m;

    // Skip block scalar headers, sequence/mapping starts, anchors, tags, and empty values.
    if (/^[|>]/.test(rawValue.trim())) { out.push(line); continue; }
    if (/^[\[\{]/.test(rawValue.trim())) { out.push(line); continue; }
    if (/^[*&!]/.test(rawValue.trim())) { out.push(line); continue; }
    if (rawValue.trim() === '') { out.push(line); continue; } // value continues below or empty

    // Strip an inline trailing comment iff the value is unquoted (YAML allows '#' only after whitespace and outside quotes).
    let valuePart = rawValue;
    let trailingComment = '';
    if (!/^['"]/.test(valuePart)) {
      const hashMatch = valuePart.match(/(\s+#.*)$/);
      if (hashMatch) {
        trailingComment = hashMatch[1];
        valuePart = valuePart.slice(0, -trailingComment.length);
      }
    }
    valuePart = valuePart.replace(/[ \t]+$/, ''); // trim trailing whitespace

    let decoded = null;
    let wasQuoted = false;

    if (valuePart.startsWith("'") && valuePart.endsWith("'") && valuePart.length >= 2) {
      const inner = valuePart.slice(1, -1);
      if (!/(^|[^'])'(?!')/.test(inner)) { // ensure single-quotes inside are paired (escape form)
        decoded = decodeSingleQuoted(inner);
        wasQuoted = true;
      }
    } else if (valuePart.startsWith('"') && valuePart.endsWith('"') && valuePart.length >= 2) {
      // Already double-quoted: leave as-is.
      out.push(line);
      continue;
    } else {
      // Bareword: only quote if the YAML parser could misinterpret it.
      // Skip numerics, booleans/nulls, dates.
      const bw = valuePart.trim();
      if (/^-?\d[\d_]*(?:\.\d+)?(?:[eE][+-]?\d+)?$/.test(bw)) { out.push(line); continue; }
      if (RESERVED_BAREWORDS.has(bw)) { out.push(line); continue; }
      if (/^\d{4}-\d{2}-\d{2}/.test(bw)) { out.push(line); continue; }
      if (NEEDS_QUOTING.test(bw)) {
        decoded = bw;
        wasQuoted = false;
      } else {
        out.push(line);
        continue;
      }
    }

    if (decoded == null) { out.push(line); continue; }

    const encoded = encodeDoubleQuoted(decoded);
    const newLine = `${indent}${key}${sep}${encoded}${trailingComment}`;
    if (newLine !== line) {
      changed++;
      out.push(newLine);
    } else {
      out.push(line);
    }
    void wasQuoted; // currently only used for clarity; reserved for future logging
  }
  return { block: out.join('\n'), changed };
}

// ── Core ────────────────────────────────
function processFile(content) {
  const fm = extractFrontmatterBlock(content);
  if (!fm) return { content, changed: 0 };
  const { block, changed } = repairFrontmatter(fm.block);
  if (changed === 0) return { content, changed: 0 };
  return { content: block + content.slice(fm.end), changed };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) { printHelp(); return 0; }

  const targets = resolveTargets(args);
  let totalChanged = 0;
  let filesChanged = 0;
  const affected = [];

  for (const t of targets) {
    let content;
    try { content = fs.readFileSync(t.fullPath, 'utf8'); } catch (_) { continue; }
    const { content: out, changed } = processFile(content);
    if (changed === 0) continue;
    totalChanged += changed;
    filesChanged++;
    affected.push(t);
    if (args.mode === 'write') {
      fs.writeFileSync(t.fullPath, out);
      console.log(`fixed (${changed}): ${t.relPath}`);
    } else {
      console.log(`would fix (${changed}): ${t.relPath}`);
    }
  }

  console.log(`\n${args.mode === 'write' ? 'Repaired' : 'Would repair'} ${totalChanged} value(s) across ${filesChanged} file(s).`);

  if (args.verify && args.mode === 'write') {
    let regressed = 0;
    for (const t of affected) {
      const c = fs.readFileSync(t.fullPath, 'utf8');
      const { changed } = processFile(c);
      if (changed > 0) {
        console.error(`verify failed: ${t.relPath} still has ${changed} fixable value(s)`);
        regressed++;
      }
    }
    if (regressed > 0) { console.error(`\nVerify FAILED: ${regressed} regression(s).`); return 2; }
    console.log('Verify: PASS');
  }
  return 0;
}

if (require.main === module) {
  process.exit(main());
}

module.exports = { processFile, repairFrontmatter, encodeDoubleQuoted, decodeSingleQuoted };
