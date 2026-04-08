#!/usr/bin/env node
/**
 * @script      remediate-us-spelling
 * @type        remediator
 * @concern     brand
 * @niche       style
 * @purpose     qa:content-quality
 * @description Converts US English spellings to UK English in routable v2 MDX content text only. Skips frontmatter, code blocks, inline code, JSX comments, import/export lines, URLs, and JSX attribute values.
 * @mode        repair
 * @pipeline    manual — batch remediation utility, run with --dry-run first
 * @scope       v2/ (published routable MDX pages, excluding _workspace, x-archived, x-deprecated, locales)
 * @usage       node operations/scripts/remediators/content/style/remediate-us-spelling.js [--dry-run|--write] [--verify] [--verify]
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const V2_ROOT = path.join(REPO_ROOT, 'v2');

const EXCLUDED_SEGMENTS = new Set(['_workspace', 'x-archived', 'x-deprecated', 'cn', 'es', 'fr']);

// ── US → UK word map ────────────────────
// Each entry: [usPattern (regex source), ukReplacement]
// Word-boundary aware. Case-preserving via matchCase().
const US_TO_UK = [
  // -ize → -ise family
  ['optimize', 'optimise'],
  ['optimized', 'optimised'],
  ['optimizing', 'optimising'],
  ['optimization', 'optimisation'],
  ['optimizations', 'optimisations'],
  ['organize', 'organise'],
  ['organized', 'organised'],
  ['organizing', 'organising'],
  ['organization', 'organisation'],
  ['organizations', 'organisations'],
  ['recognize', 'recognise'],
  ['recognized', 'recognised'],
  ['recognizing', 'recognising'],
  ['customize', 'customise'],
  ['customized', 'customised'],
  ['customizing', 'customising'],
  ['customization', 'customisation'],
  ['customizations', 'customisations'],
  ['minimize', 'minimise'],
  ['minimized', 'minimised'],
  ['minimizing', 'minimising'],
  ['maximize', 'maximise'],
  ['maximized', 'maximised'],
  ['maximizing', 'maximising'],
  ['utilize', 'utilise'],
  ['utilized', 'utilised'],
  ['utilizing', 'utilising'],
  ['utilization', 'utilisation'],
  ['analyze', 'analyse'],
  ['analyzed', 'analysed'],
  ['analyzing', 'analysing'],
  ['stabilize', 'stabilise'],
  ['stabilized', 'stabilised'],
  ['synchronize', 'synchronise'],
  ['synchronized', 'synchronised'],
  ['synchronizing', 'synchronising'],
  ['decentralize', 'decentralise'],
  ['decentralized', 'decentralised'],
  ['decentralizing', 'decentralising'],
  ['incentivize', 'incentivise'],
  ['incentivized', 'incentivised'],
  ['incentivizing', 'incentivising'],
  ['prioritize', 'prioritise'],
  ['prioritized', 'prioritised'],
  ['prioritizing', 'prioritising'],
  ['initialize', 'initialise'],
  ['initialized', 'initialised'],
  ['initializing', 'initialising'],
  ['initialization', 'initialisation'],
  ['finalize', 'finalise'],
  ['finalized', 'finalised'],
  ['finalizing', 'finalising'],
  ['normalize', 'normalise'],
  ['normalized', 'normalised'],
  ['normalizing', 'normalising'],
  ['normalization', 'normalisation'],
  ['standardize', 'standardise'],
  ['standardized', 'standardised'],
  ['standardizing', 'standardising'],
  ['standardization', 'standardisation'],
  ['authorize', 'authorise'],
  ['authorized', 'authorised'],
  ['authorizing', 'authorising'],
  ['authorization', 'authorisation'],
  ['categorize', 'categorise'],
  ['categorized', 'categorised'],
  ['categorizing', 'categorising'],
  ['summarize', 'summarise'],
  ['summarized', 'summarised'],
  ['summarizing', 'summarising'],
  ['monetize', 'monetise'],
  ['monetized', 'monetised'],
  ['monetizing', 'monetising'],
  ['monetization', 'monetisation'],
  ['tokenize', 'tokenise'],
  ['tokenized', 'tokenised'],
  ['tokenizing', 'tokenising'],
  ['tokenization', 'tokenisation'],
  ['visualize', 'visualise'],
  ['visualized', 'visualised'],
  ['visualizing', 'visualising'],
  ['visualization', 'visualisation'],
  ['penalize', 'penalise'],
  ['penalized', 'penalised'],
  ['penalizing', 'penalising'],

  // -or → -our family
  ['behavior', 'behaviour'],
  ['behaviors', 'behaviours'],
  ['favor', 'favour'],
  ['favored', 'favoured'],
  ['favoring', 'favouring'],
  ['favorite', 'favourite'],
  ['favorites', 'favourites'],
  ['honor', 'honour'],
  ['honored', 'honoured'],
  ['honoring', 'honouring'],
  ['neighbor', 'neighbour'],
  ['neighbors', 'neighbours'],
  ['neighboring', 'neighbouring'],
  ['labor', 'labour'],
  ['humor', 'humour'],
  ['vigor', 'vigour'],

  // -er → -re family (careful — only specific words)
  ['center', 'centre'],
  ['centered', 'centred'],
  ['centering', 'centring'],
  ['fiber', 'fibre'],
  ['fibers', 'fibres'],
  ['liter', 'litre'],
  ['liters', 'litres'],

  // -ense → -ence family
  ['defense', 'defence'],
  ['offense', 'offence'],

  // -og → -ogue family (skip UI "dialog")
  ['catalog', 'catalogue'],
  ['catalogs', 'catalogues'],

  // Other
  ['gray', 'grey'],

  // -or → -our for color (content only — props excluded by zone detection)
  ['color', 'colour'],
  ['colors', 'colours'],
  ['colored', 'coloured'],
  ['colorful', 'colourful'],
];

// Sort by length descending so longer matches get tried first (e.g. "optimizations" before "optimization")
US_TO_UK.sort((a, b) => b[0].length - a[0].length);

// Compile regexes with word boundaries
const COMPILED_RULES = US_TO_UK.map(([us, uk]) => ({
  us,
  uk,
  regex: new RegExp(`\\b${us}\\b`, 'gi'),
}));

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
    '  node operations/scripts/remediators/content/style/remediate-us-spelling.js [--dry-run|--write] [--verify]',
    '',
    'Modes:',
    '  --dry-run   Show US → UK spelling replacements without modifying files (default).',
    '  --write     Apply US → UK spelling replacements to published v2 MDX files.',
    '',
    'Safety:',
    '  - Replaces only in prose content text.',
    '  - Skips frontmatter, fenced code blocks, inline code, JSX comments,',
    '    import/export lines, URLs, and JSX attribute values.',
    '  - JSX props like color=, backgroundColor=, etc. are never touched.',
    '',
    'Flags:',
    '  --verify    After --write, re-run detection on affected files. If any US spellings',
    '              remain, revert all changes and exit non-zero. No-op in --dry-run mode.',
    '',
    'Word map: ' + US_TO_UK.length + ' US → UK rules loaded.',
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
  let m;

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

  // Inline code `...` (single line)
  const inlineCodeRegex = /`[^`\n]+`/g;
  while ((m = inlineCodeRegex.exec(content)) !== null) {
    zones.push({ start: m.index, end: m.index + m[0].length, type: 'inline-code' });
  }

  // JSX template literals: chart={`...`} or similar multi-line template props
  const templateLitRegex = /=\{`[\s\S]*?`\}/g;
  while ((m = templateLitRegex.exec(content)) !== null) {
    zones.push({ start: m.index, end: m.index + m[0].length, type: 'template-literal' });
  }

  // URLs
  const urlRegex = /\bhttps?:\/\/[^\s<`)"'\]]+/g;
  while ((m = urlRegex.exec(content)) !== null) {
    zones.push({ start: m.index, end: m.index + m[0].length, type: 'url' });
  }

  // JSX attribute values: attr="..." or attr='...' or attr={...}
  // Match patterns like prop="value" within JSX tags
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

  // JSX tags: <Component ... /> or <Component ...>
  // Captures the entire tag including tag name and attributes
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
  // Check if position is inside a JSX opening/self-closing tag: <Component ... />
  // Look backwards for < not preceded by a closing >
  const searchStart = Math.max(0, index - 500);
  const before = content.slice(searchStart, index + 1);
  const lastOpen = before.lastIndexOf('<');
  const lastClose = before.lastIndexOf('>');
  if (lastOpen < 0) return false;
  // If the last < is after the last >, we're inside a tag
  if (lastOpen > lastClose) {
    // Verify it's a component/element tag, not a comparison operator
    const afterOpen = before.slice(lastOpen + 1);
    return /^[A-Za-z\/]/.test(afterOpen);
  }
  return false;
}

function isCodeIdentifierReference(content, index, matchedWord) {
  // Skip if the line contains the same word (case-insensitive) inside backticks — it's referencing a code identifier
  const lineStart = content.lastIndexOf('\n', index - 1) + 1;
  const lineEnd = content.indexOf('\n', index);
  const line = content.slice(lineStart, lineEnd > 0 ? lineEnd : content.length);
  const lower = matchedWord.toLowerCase();
  // Check for backtick-wrapped instances of the word (e.g., `color`, `backgroundColor`)
  const backtickRegex = /`([^`]+)`/g;
  let bm;
  while ((bm = backtickRegex.exec(line)) !== null) {
    if (bm[1].toLowerCase().includes(lower)) return true;
  }
  return false;
}

// ── Case matching ───────────────────────
function matchCase(original, replacement) {
  if (original === original.toUpperCase()) return replacement.toUpperCase();
  if (original[0] === original[0].toUpperCase()) {
    return replacement[0].toUpperCase() + replacement.slice(1);
  }
  return replacement;
}

// ── Core ────────────────────────────────
function processFile(content) {
  const zones = buildZoneMap(content);
  const replacements = []; // { index, length, from, to, lineNum, line }

  for (const rule of COMPILED_RULES) {
    const regex = new RegExp(rule.regex.source, rule.regex.flags);
    let match;
    while ((match = regex.exec(content)) !== null) {
      const idx = match.index;
      if (isInZone(zones, idx)) continue;
      if (isOnImportExportLine(content, idx)) continue;
      if (isInJsxTag(content, idx)) continue;
      if (isCodeIdentifierReference(content, idx, match[0])) continue;

      const lineNum = content.slice(0, idx).split('\n').length;
      const lineStart = content.lastIndexOf('\n', idx - 1) + 1;
      const lineEnd = content.indexOf('\n', idx);
      const line = content.slice(lineStart, lineEnd > 0 ? lineEnd : content.length);

      replacements.push({
        index: idx,
        length: match[0].length,
        from: match[0],
        to: matchCase(match[0], rule.uk),
        lineNum,
        line: line.trim(),
      });
    }
  }

  // Deduplicate overlapping replacements (longer match wins, already sorted by rule length)
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
    const replacements = processFile(content);
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
        line: r.line.slice(0, 120),
      })),
    });

    if (args.mode === 'write') {
      affectedFiles.push({ fullPath, relPath, originalContent: content });
      const updated = applyReplacements(content, replacements);
      fs.writeFileSync(fullPath, updated, 'utf8');
    }
  }

  // Print report
  console.log(`\n${'='.repeat(60)}`);
  console.log(`US → UK spelling remediation — ${args.mode === 'write' ? 'APPLIED' : 'DRY RUN'}`);
  console.log(`${'='.repeat(60)}\n`);

  for (const entry of report) {
    console.log(`  ${entry.file} (${entry.count} replacement${entry.count > 1 ? 's' : ''})`);
    for (const s of entry.samples) {
      console.log(`    L${s.lineNum}: "${s.from}" → "${s.to}"  |  ${s.line}`);
    }
    if (entry.count > 8) console.log(`    ... and ${entry.count - 8} more`);
  }

  console.log(`\nTotal: ${totalReplacements} replacements in ${filesChanged} files`);

  if (args.mode === 'dry-run') {
    console.log('Run with --write to apply changes.');
    process.exit(0);
  }

  // ── Verify step (Layer 1) ──────────────
  if (args.verify && affectedFiles.length > 0) {
    console.log(`\n${'\u2500'.repeat(40)}`);
    console.log('Verify: re-running detection on affected files...');

    const failures = [];
    for (const { fullPath, relPath } of affectedFiles) {
      const updatedContent = fs.readFileSync(fullPath, 'utf8');
      const remaining = processFile(updatedContent);
      if (remaining.length > 0) {
        failures.push({ file: relPath, count: remaining.length, samples: remaining.slice(0, 3) });
      }
    }

    if (failures.length > 0) {
      const regressedFiles = new Set(failures.map(f => f.file));
      console.error('\n\u274c VERIFY FAILED \u2014 US spellings still present after remediation:');
      for (const f of failures) {
        console.error(`  ${f.file} (${f.count} remaining)`);
        for (const s of f.samples) {
          console.error(`    L${s.lineNum}: "${s.from}" still present`);
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

    console.log(`\u2705 Verify passed \u2014 0 US spellings remaining in ${affectedFiles.length} affected files.`);
  }

  process.exit(0);
}

main();
