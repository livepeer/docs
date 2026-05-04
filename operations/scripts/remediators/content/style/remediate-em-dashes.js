#!/usr/bin/env node
/**
 * @script      remediate-em-dashes
 * @type        remediator
 * @concern     brand
 * @niche       style
 * @purpose     qa:content-quality
 * @description Replaces em-dashes (U+2014) with en-dashes (U+2013) in routable v2 MDX content text and user-facing frontmatter fields (title, sidebarTitle, description). Skips other frontmatter keys, code blocks, inline code, JSX comments, import/export lines, and JSX attribute values.
 * @mode        repair
 * @pipeline    manual — batch remediation utility, run with --dry-run first
 * @scope       v2/ (published routable MDX pages, excluding _workspace, x-archived, x-deprecated, locales)
 * @usage       node operations/scripts/remediators/content/style/remediate-em-dashes.js [--dry-run|--write] [--verify] [--staged] [--files path,path]
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const V2_ROOT = path.join(REPO_ROOT, 'v2');

const EM_DASH = '\u2014'; // —
const EN_DASH = '\u2013'; // –

const EXCLUDED_SEGMENTS = new Set(['_workspace', 'x-archived', 'x-deprecated', 'cn', 'es', 'fr']);

// Frontmatter keys whose values should be checked for em-dashes
const CHECKED_FM_KEYS = /^(title|sidebarTitle|description)\s*:/;

// ── Args ────────────────────────────────
function parseArgs(argv) {
  const args = { mode: 'dry-run', verify: false, help: false, stagedOnly: false, files: [] };
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === '--write') { args.mode = 'write'; continue; }
    if (token === '--dry-run') { args.mode = 'dry-run'; continue; }
    if (token === '--verify') { args.verify = true; continue; }
    if (token === '--help' || token === '-h') { args.help = true; continue; }
    if (token === '--staged') { args.stagedOnly = true; continue; }
    if (token === '--files' && i + 1 < argv.length) {
      args.files = argv[++i].split(',').map((f) => f.trim()).filter(Boolean);
      continue;
    }
    if (token.startsWith('--files=')) {
      args.files = token.slice('--files='.length).split(',').map((f) => f.trim()).filter(Boolean);
      continue;
    }
  }
  return args;
}

function printHelp() {
  console.log([
    'Usage:',
    '  node operations/scripts/remediators/content/style/remediate-em-dashes.js [flags]',
    '',
    'Modes:',
    '  --dry-run   Show em-dash replacements without modifying files (default).',
    '  --write     Apply em-dash → en-dash replacements to published v2 MDX files.',
    '',
    'Scope:',
    '  --staged    Only process staged files.',
    '  --files a,b,c  Only process specified files (comma-separated).',
    '  (default)   Process all routable v2 MDX files.',
    '',
    'Flags:',
    '  --verify    After --write, re-run detection on affected files. If any em-dashes',
    '              remain, revert all changes and exit non-zero.',
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

function getStagedMdxFiles() {
  const { execSync } = require('child_process');
  try {
    const output = execSync('git diff --cached --name-only --diff-filter=ACM', {
      cwd: REPO_ROOT, encoding: 'utf8',
    });
    return output.trim().split('\n')
      .filter((f) => f && /\.mdx$/i.test(f) && f.startsWith('v2/') && !isExcluded(f))
      .map((relPath) => ({ fullPath: path.join(REPO_ROOT, relPath), relPath }));
  } catch (_) {
    return [];
  }
}

function resolveTargetFiles(args) {
  if (args.files.length > 0) {
    return args.files.map((f) => {
      const abs = path.isAbsolute(f) ? f : path.join(REPO_ROOT, f);
      return { fullPath: abs, relPath: toPosix(path.relative(REPO_ROOT, abs)) };
    }).filter((f) => /\.mdx$/i.test(f.relPath));
  }
  if (args.stagedOnly) {
    return getStagedMdxFiles();
  }
  return walkMdxFiles(V2_ROOT);
}

// ── Zone detection ──────────────────────
function buildZoneMap(content) {
  const zones = [];

  if (content.startsWith('---')) {
    const close = content.indexOf('---', 3);
    if (close > 0) {
      const fmEnd = close + 3;
      const fmBlock = content.slice(0, fmEnd);
      const fmLines = fmBlock.split('\n');
      let offset = 0;

      for (const line of fmLines) {
        const lineEnd = offset + line.length;
        const trimmed = line.trimStart();

        if (CHECKED_FM_KEYS.test(trimmed)) {
          // Zone only the key portion; leave the value exposed for remediation
          const colonPos = line.indexOf(':');
          let valueStart = offset + colonPos + 1;
          while (valueStart < lineEnd && content[valueStart] === ' ') valueStart++;
          zones.push({ start: offset, end: valueStart, type: 'frontmatter' });
        } else {
          zones.push({ start: offset, end: lineEnd, type: 'frontmatter' });
        }

        offset = lineEnd + 1; // +1 for newline
      }
    }
  }

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

  const jsxCommentRegex = /\{\/\*[\s\S]*?\*\/\}/g;
  while ((m = jsxCommentRegex.exec(content)) !== null) {
    zones.push({ start: m.index, end: m.index + m[0].length, type: 'jsx-comment' });
  }

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

// ── Run (programmatic API) ──────────────
function run(options = {}) {
  const args = options.args || parseArgs([]);
  const quiet = options.quiet === true;

  const files = Array.isArray(options.files) && options.files.length > 0
    ? options.files.map((f) => {
        const abs = path.isAbsolute(f) ? f : path.join(REPO_ROOT, f);
        return { fullPath: abs, relPath: toPosix(path.relative(REPO_ROOT, abs)) };
      })
    : resolveTargetFiles(args);

  let totalReplacements = 0;
  let filesChanged = 0;
  const report = [];
  const affectedFiles = [];

  for (const { fullPath, relPath } of files) {
    let content;
    try {
      content = fs.readFileSync(fullPath, 'utf8');
    } catch (_) {
      continue;
    }
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

  if (!quiet) {
    console.log('\n' + '='.repeat(60));
    console.log('Em-dash remediation — ' + (args.mode === 'write' ? 'APPLIED' : 'DRY RUN'));
    console.log('='.repeat(60) + '\n');

    for (const entry of report) {
      console.log('  ' + entry.file + ' (' + entry.count + ' replacement' + (entry.count > 1 ? 's' : '') + ')');
      for (const s of entry.samples) {
        console.log('    L' + s.lineNum + ': ' + s.line.slice(0, 120));
      }
      if (entry.count > 5) console.log('    ... and ' + (entry.count - 5) + ' more');
    }

    console.log('\nTotal: ' + totalReplacements + ' em-dashes in ' + filesChanged + ' files');

    if (args.mode === 'dry-run') {
      console.log('Run with --write to apply changes.');
    }
  }

  let reverted = 0;
  if (args.verify && args.mode === 'write' && affectedFiles.length > 0) {
    if (!quiet) {
      console.log('\n' + '\u2500'.repeat(40));
      console.log('Verify: re-running detection on affected files...');
    }

    const failures = verifyFiles(affectedFiles);

    if (failures.length > 0) {
      const regressedFiles = new Set(failures.map(f => f.file));
      if (!quiet) {
        console.error('\n\u274c VERIFY FAILED \u2014 em-dashes still present after remediation:');
        for (const f of failures) {
          console.error('  ' + f.file + ' (' + f.count + ' remaining)');
          for (const s of f.samples) {
            console.error('    L' + s.lineNum + ': ' + s.line.slice(0, 100));
          }
        }
      }

      for (const af of affectedFiles) {
        if (regressedFiles.has(af.relPath)) {
          fs.writeFileSync(af.fullPath, af.originalContent, 'utf8');
          reverted++;
        }
      }
      if (!quiet) {
        console.error('\nReverted ' + reverted + ' regressed file(s). Kept ' + (affectedFiles.length - reverted) + ' successful fix(es).');
      }
    } else if (!quiet) {
      console.log('\u2705 Verify passed \u2014 0 em-dashes remaining in ' + affectedFiles.length + ' affected files.');
    }
  }

  return {
    remediator: 'remediate-em-dashes',
    mode: args.mode,
    filesScanned: files.length,
    filesFixed: filesChanged,
    totalFixes: totalReplacements,
    reverted,
    report,
  };
}

// ── Main (CLI entry) ────────────────────
function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) { printHelp(); process.exit(0); }

  const result = run({ args });

  if (args.mode === 'write' && result.reverted > 0) {
    process.exit(1);
  }
  process.exit(0);
}

if (require.main === module) {
  main();
}

module.exports = { parseArgs, run };
