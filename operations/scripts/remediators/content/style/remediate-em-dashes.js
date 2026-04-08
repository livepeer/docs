#!/usr/bin/env node
/**
 * @script      remediate-em-dashes
 * @type        remediator
 * @concern     brand
 * @niche       style
 * @purpose     qa:content-quality
 * @description Replaces em-dashes (U+2014) with en-dashes (U+2013) in routable v2 MDX content text only. Skips frontmatter, code blocks, inline code, JSX comments, import/export lines, and JSX attribute values.
 * @mode        repair
 * @pipeline    manual — batch remediation utility, run with --dry-run first
 * @scope       v2/ (published routable MDX pages, excluding _workspace, x-archived, x-deprecated, locales)
 * @usage       node operations/scripts/remediators/content/style/remediate-em-dashes.js [--dry-run|--write|--write --verify]
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const V2_ROOT = path.join(REPO_ROOT, 'v2');

const EM_DASH = '\u2014'; // —
const EN_DASH = '\u2013'; // –

const EXCLUDED_SEGMENTS = new Set(['_workspace', 'x-archived', 'x-deprecated', 'cn', 'es', 'fr']);

// ── Args ────────────────────────────────
function parseArgs(argv) {
  const args = { mode: 'dry-run', verify: false, help: false };
  argv.forEach((token) => {
    if (token === '--write') { args.mode = 'write'; return; }
    if (token === '--dry-run') { args.mode = 'dry-run'; return; }
    if (token === '--verify') { args.verify = true; return; }
    if (token === '--help' || token === '-h') { args.help = true; return; }
  });
  return args;
}

function printHelp() {
  console.log([
    'Usage:',
    '  node operations/scripts/remediators/content/style/remediate-em-dashes.js [--dry-run|--write] [--verify]',
    '',
    'Modes:',
    '  --dry-run   Show em-dash replacements without modifying files (default).',
    '  --write     Apply em-dash \u2192 en-dash replacements to published v2 MDX files.',
    '',
    'Flags:',
    '  --verify    After --write, re-run detection on affected files. If any em-dashes',
    '              remain, revert all changes and exit non-zero. No-op in --dry-run mode.',
    '',
    'Safety:',
    '  - Replaces only in prose content text.',
    '  - Skips frontmatter, fenced code blocks, inline code, JSX comments,',
    '    import/export lines, and JSX attribute values.',
  ].join('\n'));
}

// ── File walker ─────────────────────────
function toPosix(filePath) {
  return String(filePath || '').split(path.sep).join('/');
}

function isExcluded(relPath) {
  const segments = toPosix(relPath).split('/');
  return segments.some(s => EXCLUDED_SEGMENTS.has(s) || /^x-/.test(s) || s.startsWith('_'));
}

function walkMdxFiles(dirPath, out = []) {
  let entries;
  try {
    entries = fs.readdirSync(dirPath, { withFileTypes: true });
  } catch (_) {
    return out;
  }
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relPath = toPosix(path.relative(REPO_ROOT, fullPath));
    if (isExcluded(relPath)) continue;
    if (entry.isDirectory()) {
      walkMdxFiles(fullPath, out);
    } else if (entry.isFile() && /\.mdx$/i.test(entry.name)) {
      out.push({ fullPath, relPath });
    }
  }
  return out;
}

// ── Zone detection ──────────────────────
function buildZoneMap(content) {
  const zones = []; // { start, end, type }

  // Frontmatter
  if (content.startsWith('---')) {
    const close = content.indexOf('---', 3);
    if (close > 0) {
      zones.push({ start: 0, end: close + 3, type: 'frontmatter' });
    }
  }

  // Fenced code blocks (including indented fences inside JSX)
  const codeRegex = /^[ \t]*```[^\n]*$/gm;
  const codeStarts = [];
  let m;
  while ((m = codeRegex.exec(content)) !== null) {
    codeStarts.push(m.index);
  }
  for (let i = 0; i < codeStarts.length - 1; i += 2) {
    const endIdx = content.indexOf('\n', codeStarts[i + 1]);
    zones.push({ start: codeStarts[i], end: endIdx > 0 ? endIdx : codeStarts[i + 1] + 3, type: 'code' });
  }

  // JSX comments {/* ... */}
  const jsxCommentRegex = /\{\/\*[\s\S]*?\*\/\}/g;
  while ((m = jsxCommentRegex.exec(content)) !== null) {
    zones.push({ start: m.index, end: m.index + m[0].length, type: 'jsx-comment' });
  }

  // Inline code `...`
  const inlineCodeRegex = /`[^`\n]+`/g;
  while ((m = inlineCodeRegex.exec(content)) !== null) {
    zones.push({ start: m.index, end: m.index + m[0].length, type: 'inline-code' });
  }

  return zones;
}

function isInZone(zones, index) {
  return zones.some(z => index >= z.start && index < z.end);
}

function isOnImportExportLine(content, index) {
  const lineStart = content.lastIndexOf('\n', index - 1) + 1;
  const lineText = content.slice(lineStart, lineStart + 20);
  return /^(import |export )/.test(lineText);
}

function isInJsxAttribute(content, index) {
  const before = content.slice(Math.max(0, index - 200), index);
  const afterEq = before.lastIndexOf('="');
  const afterEqSingle = before.lastIndexOf("='");
  const afterEqBrace = before.lastIndexOf('={');
  const bestStart = Math.max(afterEq, afterEqSingle, afterEqBrace);
  if (bestStart < 0) return false;

  const charAfterEq = before[bestStart + 1];
  if (charAfterEq === '"' || charAfterEq === "'") {
    const segment = before.slice(bestStart + 2);
    return !segment.includes(charAfterEq);
  }
  if (charAfterEq === '{') {
    const segment = before.slice(bestStart + 2);
    let depth = 1;
    for (const ch of segment) {
      if (ch === '{') depth++;
      if (ch === '}') depth--;
      if (depth === 0) return false;
    }
    return depth > 0;
  }
  return false;
}

// ── Core ────────────────────────────────
function processFile(filePath, content) {
  const zones = buildZoneMap(content);
  const replacements = [];

  const regex = new RegExp(EM_DASH, 'g');
  let match;
  while ((match = regex.exec(content)) !== null) {
    const idx = match.index;
    if (isInZone(zones, idx)) continue;
    if (isOnImportExportLine(content, idx)) continue;
    if (isInJsxAttribute(content, idx)) continue;

    const lineNum = content.slice(0, idx).split('\n').length;
    const lineStart = content.lastIndexOf('\n', idx - 1) + 1;
    const lineEnd = content.indexOf('\n', idx);
    const line = content.slice(lineStart, lineEnd > 0 ? lineEnd : content.length);

    replacements.push({ index: idx, lineNum, line: line.trim() });
  }

  return replacements;
}

function applyReplacements(content, replacements) {
  let result = content;
  const sorted = [...replacements].sort((a, b) => b.index - a.index);
  for (const r of sorted) {
    result = result.slice(0, r.index) + EN_DASH + result.slice(r.index + EM_DASH.length);
  }
  return result;
}

// ── Verify ──────────────────────────────
function verifyFiles(affectedFiles) {
  const failures = [];
  for (const { fullPath, relPath } of affectedFiles) {
    const content = fs.readFileSync(fullPath, 'utf8');
    if (!content.includes(EM_DASH)) continue;
    const remaining = processFile(relPath, content);
    if (remaining.length > 0) {
      failures.push({ file: relPath, count: remaining.length, samples: remaining.slice(0, 3) });
    }
  }
  return failures;
}

// ── Main ────────────────────────────────
function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) { printHelp(); process.exit(0); }

  const files = walkMdxFiles(V2_ROOT);
  let totalReplacements = 0;
  let filesChanged = 0;
  const report = [];
  const affectedFiles = []; // { fullPath, relPath, originalContent }

  for (const { fullPath, relPath } of files) {
    const content = fs.readFileSync(fullPath, 'utf8');
    if (!content.includes(EM_DASH)) continue;

    const replacements = processFile(relPath, content);
    if (replacements.length === 0) continue;

    totalReplacements += replacements.length;
    filesChanged++;

    report.push({ file: relPath, count: replacements.length, samples: replacements.slice(0, 5) });

    if (args.mode === 'write') {
      affectedFiles.push({ fullPath, relPath, originalContent: content });
      const updated = applyReplacements(content, replacements);
      fs.writeFileSync(fullPath, updated, 'utf8');
    }
  }

  // Print report
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Em-dash remediation \u2014 ${args.mode === 'write' ? 'APPLIED' : 'DRY RUN'}`);
  console.log(`${'='.repeat(60)}\n`);

  for (const entry of report) {
    console.log(`  ${entry.file} (${entry.count} replacement${entry.count > 1 ? 's' : ''})`);
    for (const s of entry.samples) {
      console.log(`    L${s.lineNum}: ${s.line.slice(0, 120)}`);
    }
    if (entry.count > 5) console.log(`    ... and ${entry.count - 5} more`);
  }

  console.log(`\nTotal: ${totalReplacements} em-dashes in ${filesChanged} files`);

  if (args.mode === 'dry-run') {
    console.log('Run with --write to apply changes.');
    process.exit(0);
  }

  // ── Verify step (Layer 1) ──────────────
  if (args.verify && affectedFiles.length > 0) {
    console.log(`\n${'─'.repeat(40)}`);
    console.log('Verify: re-running detection on affected files...');

    const failures = verifyFiles(affectedFiles);

    if (failures.length > 0) {
      const regressedFiles = new Set(failures.map(f => f.file));
      console.error('\n\u274c VERIFY FAILED \u2014 em-dashes still present after remediation:');
      for (const f of failures) {
        console.error(`  ${f.file} (${f.count} remaining)`);
        for (const s of f.samples) {
          console.error(`    L${s.lineNum}: ${s.line.slice(0, 100)}`);
        }
      }

      // Per-file revert: only revert regressed files, keep successful fixes
      const reverted = [];
      const kept = [];
      for (const af of affectedFiles) {
        if (regressedFiles.has(af.relPath)) {
          fs.writeFileSync(af.fullPath, af.originalContent, 'utf8');
          reverted.push(af.relPath);
        } else {
          kept.push(af.relPath);
        }
      }
      console.error(`\nReverted ${reverted.length} regressed file(s). Kept ${kept.length} successful fix(es).`);
      process.exit(1);
    }

    console.log(`\u2705 Verify passed \u2014 0 em-dashes remaining in ${affectedFiles.length} affected files.`);
  }

  process.exit(0);
}

main();
