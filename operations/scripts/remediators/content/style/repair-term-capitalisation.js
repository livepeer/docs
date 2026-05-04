#!/usr/bin/env node
/**
 * @script      repair-term-capitalisation
 * @type        remediator
 * @concern     brand
 * @niche       style
 * @purpose     qa:content-quality
 * @description Enforces correct capitalisation of proper nouns (Livepeer, Orchestrator, Ethereum, etc.) in routable v2 MDX prose. Reads rules from tools/config/quality/term-capitalisation.json. Skips code, frontmatter, URLs, imports, JSX attributes.
 * @mode        repair
 * @pipeline    manual — batch remediation utility, run with --dry-run first
 * @scope       v2/ (published routable MDX pages, excluding _workspace, x-archived, x-deprecated, locales)
 * @usage       node operations/scripts/remediators/content/style/repair-term-capitalisation.js [--dry-run|--write] [--verify] [--staged] [--files path,path]
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const V2_ROOT = path.join(REPO_ROOT, 'v2');

const EXCLUDED_SEGMENTS = new Set(['_workspace', 'x-archived', 'x-deprecated', 'cn', 'es', 'fr']);

// ── Load rules ─────────────────────────
function loadRules() {
  const rulesPath = path.join(REPO_ROOT, 'tools', 'config', 'quality', 'term-capitalisation.json');
  try {
    const data = JSON.parse(fs.readFileSync(rulesPath, 'utf8'));
    return data.rules.map((rule) => ({
      term: rule.term,
      regex: new RegExp(rule.pattern, 'gi'),
      replacement: rule.replacement,
      tier: rule.tier,
      exceptions: rule.exceptions || [],
    }));
  } catch (err) {
    console.error('Failed to load term capitalisation rules: ' + err.message);
    process.exit(1);
  }
}

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
    '  node operations/scripts/remediators/content/style/repair-term-capitalisation.js [flags]',
    '',
    'Modes:',
    '  --dry-run       Show capitalisation fixes without modifying files (default).',
    '  --write         Apply capitalisation fixes to published v2 MDX files.',
    '',
    'Scope:',
    '  --staged        Only process staged files.',
    '  --files a,b,c   Only process specified files (comma-separated).',
    '  (default)       Process all routable v2 MDX files.',
    '',
    'Flags:',
    '  --verify    After --write, re-run detection on affected files.',
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

// ── Zone detection (reused from remediate-us-spelling.js) ──
function buildZoneMap(content) {
  const zones = [];
  let m;

  if (content.startsWith('---')) {
    const close = content.indexOf('---', 3);
    if (close > 0) {
      zones.push({ start: 0, end: close + 3, type: 'frontmatter' });
    }
  }

  const codeRegex = /^[ \t]*```[^\n]*$/gm;
  const codeStarts = [];
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

  const templateLitRegex = /=\{`[\s\S]*?`\}/g;
  while ((m = templateLitRegex.exec(content)) !== null) {
    zones.push({ start: m.index, end: m.index + m[0].length, type: 'template-literal' });
  }

  const urlRegex = /\bhttps?:\/\/[^\s<`)"'\]]+/g;
  while ((m = urlRegex.exec(content)) !== null) {
    zones.push({ start: m.index, end: m.index + m[0].length, type: 'url' });
  }

  const attrDoubleRegex = /\b\w+="[^"]*"/g;
  while ((m = attrDoubleRegex.exec(content)) !== null) {
    const eqPos = m[0].indexOf('="');
    zones.push({ start: m.index + eqPos + 1, end: m.index + m[0].length, type: 'jsx-attr' });
  }
  const attrSingleRegex = /\b\w+='[^']*'/g;
  while ((m = attrSingleRegex.exec(content)) !== null) {
    const eqPos = m[0].indexOf("='");
    zones.push({ start: m.index + eqPos + 1, end: m.index + m[0].length, type: 'jsx-attr' });
  }

  const jsxTagRegex = /<\/?[A-Z][A-Za-z0-9.]*(?:\s[^>]*)?\/?>/g;
  while ((m = jsxTagRegex.exec(content)) !== null) {
    zones.push({ start: m.index, end: m.index + m[0].length, type: 'jsx-tag' });
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

function isInJsxTag(content, index) {
  const searchStart = Math.max(0, index - 500);
  const before = content.slice(searchStart, index + 1);
  const lastOpen = before.lastIndexOf('<');
  const lastClose = before.lastIndexOf('>');
  if (lastOpen < 0) return false;
  if (lastOpen > lastClose) {
    const afterOpen = before.slice(lastOpen + 1);
    return /^[A-Za-z\/]/.test(afterOpen);
  }
  return false;
}

// ── Exception checking ──────────────────
function isInException(content, index, matchedWord, exceptions) {
  if (exceptions.length === 0) return false;
  // Check a window around the match for exception patterns
  const windowStart = Math.max(0, index - 30);
  const windowEnd = Math.min(content.length, index + matchedWord.length + 30);
  const window = content.slice(windowStart, windowEnd).toLowerCase();
  return exceptions.some((exc) => window.includes(exc.toLowerCase()));
}

// ── Core ────────────────────────────────
function processFile(content, rules) {
  const zones = buildZoneMap(content);
  const replacements = [];

  for (const rule of rules) {
    const regex = new RegExp(rule.regex.source, rule.regex.flags);
    let match;
    while ((match = regex.exec(content)) !== null) {
      const idx = match.index;
      const matched = match[0];

      // Skip if already correctly capitalised
      const expected = matched.replace(new RegExp(rule.regex.source, 'i'), rule.replacement);
      if (matched === expected) continue;

      if (isInZone(zones, idx)) continue;
      if (isOnImportExportLine(content, idx)) continue;
      if (isInJsxTag(content, idx)) continue;
      if (isInException(content, idx, matched, rule.exceptions)) continue;

      const lineNum = content.slice(0, idx).split('\n').length;
      const lineStart = content.lastIndexOf('\n', idx - 1) + 1;
      const lineEnd = content.indexOf('\n', idx);
      const line = content.slice(lineStart, lineEnd > 0 ? lineEnd : content.length);

      replacements.push({
        index: idx,
        length: matched.length,
        from: matched,
        to: expected,
        rule: rule.term,
        tier: rule.tier,
        lineNum,
        line: line.trim(),
      });
    }
  }

  // Deduplicate overlapping
  replacements.sort((a, b) => a.index - b.index);
  const deduped = [];
  let lastEnd = -1;
  for (const r of replacements) {
    if (r.index >= lastEnd) {
      deduped.push(r);
      lastEnd = r.index + r.length;
    }
  }

  return deduped;
}

function applyReplacements(content, replacements) {
  const sorted = [...replacements].sort((a, b) => b.index - a.index);
  let result = content;
  for (const r of sorted) {
    result = result.slice(0, r.index) + r.to + result.slice(r.index + r.length);
  }
  return result;
}

// ── Run (programmatic API) ──────────────
function run(options = {}) {
  const args = options.args || parseArgs([]);
  const quiet = options.quiet === true;
  const rules = loadRules();

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
    const replacements = processFile(content, rules);
    if (replacements.length === 0) continue;

    totalReplacements += replacements.length;
    filesChanged++;

    report.push({
      file: relPath,
      count: replacements.length,
      samples: replacements.slice(0, 8).map(r => ({
        lineNum: r.lineNum,
        from: r.from,
        to: r.to,
        rule: r.rule,
        tier: r.tier,
      })),
    });

    if (args.mode === 'write') {
      affectedFiles.push({ fullPath, relPath, originalContent: content });
      const updated = applyReplacements(content, replacements);
      fs.writeFileSync(fullPath, updated, 'utf8');
    }
  }

  if (!quiet) {
    console.log('\n' + '='.repeat(60));
    console.log('Term capitalisation remediation \u2014 ' + (args.mode === 'write' ? 'APPLIED' : 'DRY RUN'));
    console.log('='.repeat(60) + '\n');

    for (const entry of report) {
      console.log('  ' + entry.file + ' (' + entry.count + ' fix' + (entry.count > 1 ? 'es' : '') + ')');
      for (const s of entry.samples) {
        console.log('    L' + s.lineNum + ': "' + s.from + '" \u2192 "' + s.to + '"  [' + s.rule + ', tier ' + s.tier + ']');
      }
      if (entry.count > 8) console.log('    ... and ' + (entry.count - 8) + ' more');
    }

    console.log('\nTotal: ' + totalReplacements + ' fixes in ' + filesChanged + ' files (' + rules.length + ' rules loaded)');

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

    const failures = [];
    for (const { fullPath, relPath } of affectedFiles) {
      const updatedContent = fs.readFileSync(fullPath, 'utf8');
      const remaining = processFile(updatedContent, rules);
      if (remaining.length > 0) {
        failures.push({ file: relPath, count: remaining.length });
      }
    }

    if (failures.length > 0) {
      const regressedFiles = new Set(failures.map(f => f.file));
      if (!quiet) {
        console.error('\n\u274c VERIFY FAILED \u2014 capitalisation issues still present:');
        for (const f of failures) {
          console.error('  ' + f.file + ' (' + f.count + ' remaining)');
        }
      }

      for (const af of affectedFiles) {
        if (regressedFiles.has(af.relPath)) {
          fs.writeFileSync(af.fullPath, af.originalContent, 'utf8');
          reverted++;
        }
      }
      if (!quiet) {
        console.error('Reverted ' + reverted + ' regressed file(s).');
      }
    } else if (!quiet) {
      console.log('\u2705 Verify passed \u2014 0 capitalisation issues remaining.');
    }
  }

  return {
    remediator: 'repair-term-capitalisation',
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
