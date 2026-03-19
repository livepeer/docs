#!/usr/bin/env node
/**
 * @script            lint-patterns
 * @category          enforcer
 * @purpose           qa:content-quality
 * @scope             staged, changed, v2-content, single-file
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Enforce Tier 2 copy pattern rules on MDX content files.
 * @pipeline          indirect, manual
 * @usage             node tools/scripts/lint-patterns.js [file or glob] [flags]
 */

'use strict';

const fs = require('fs');
const { execSync } = require('child_process');

const PATTERNS = [
  {
    id: 'CONDITIONAL_IF',
    tier: 2,
    label: '"if" in body prose — conditional gatekeeping',
    fix: 'State the condition as a fact, or remove it.',
    test: (line) => /\bif\b/i.test(line),
    skip: (line) => isCode(line) || isComment(line) || isYaml(line)
  },
  {
    id: 'NOT_CONSTRUCTION',
    tier: 2,
    label: '"not [word]" — contrast-by-diminishment',
    fix: 'Restate as a positive claim. Delete the contrast.',
    test: (line) => /\bnot\s+[a-z]/i.test(line),
    skip: (line) => isCode(line) || isComment(line) || isYaml(line)
  },
  {
    id: 'NOT_JUST',
    tier: 2,
    label: '"not just" — contrast-by-diminishment',
    fix: 'Delete or restate as additive.',
    test: (line) => /\bnot just\b/i.test(line),
    skip: (line) => isCode(line) || isComment(line)
  },
  {
    id: 'RATHER_THAN',
    tier: 2,
    label: '"rather than" — contrast-by-diminishment',
    fix: 'Delete the contrast clause. State the positive directly.',
    test: (line) => /\brather than\b/i.test(line),
    skip: (line) => isCode(line) || isComment(line)
  },
  {
    id: 'WEAKENED_VALUE',
    tier: 2,
    label: '"can/may [verb]" in apparent value claim — weakened assertion',
    fix: 'Assert directly or delete.',
    test: (line) => /\b(can|may)\s+[a-z]+/i.test(line),
    skip: (line) => isCode(line) || isComment(line) || isYaml(line)
  },
  {
    id: 'SELF_UNDERMINING_VALUE',
    tier: 1,
    label: '"[value] — if" construction — value undercut in same sentence',
    fix: 'Split into two sentences. Value first. Requirement second.',
    test: (line) => /—\s*if\b/i.test(line),
    skip: (line) => isCode(line) || isComment(line)
  },
  {
    id: 'DEPENDS_ON',
    tier: 2,
    label: '"depends on" — hedged claim',
    fix: 'State the specific variable.',
    test: (line) => /\bdepends on\b/i.test(line),
    skip: (line) => isCode(line) || isComment(line)
  },
  {
    id: 'CONSISTENTLY_NO_NUMBER',
    tier: 2,
    label: '"consistently" without adjacent number — vague standard',
    fix: 'Add a threshold number or rewrite.',
    test: (line) => /\bconsistently\b/i.test(line) && !/\bconsistently\b.{0,60}\d/.test(line),
    skip: (line) => isCode(line) || isComment(line)
  },
  {
    id: 'AMONG_OTHER',
    tier: 2,
    label: '"among other [factors/things]" — incomplete claim',
    fix: 'Name the factors or delete the clause.',
    test: (line) => /\bamong other\b/i.test(line),
    skip: (line) => isCode(line) || isComment(line)
  },
  {
    id: 'THIS_PAGE_VERB',
    tier: 2,
    label: '"This page/section [verb]" — page announcement',
    fix: 'Delete. Start with the content.',
    test: (line) => /^(this page|this section|this guide)\s+\w+/i.test(line.trim()),
    skip: (line) => isCode(line) || isComment(line) || isYaml(line)
  },
  {
    id: 'DANGLING_CLAIM',
    tier: 2,
    label: 'Sentence ending with "is different" or "is the same" — unsupported claim',
    fix: 'Show the difference. Link to a page that does.',
    test: (line) => /is (different|the same)\.?\s*$/i.test(line.trim()),
    skip: (line) => isCode(line) || isComment(line)
  }
];

function isCode(line) {
  return /^\s*(```|~~~|`[^`]|\s{4})/.test(line);
}

function isComment(line) {
  return /^\s*(\{\/\*|\/\/|<!--|\[\/\/\]:\s*#)/.test(line);
}

function isYaml(line) {
  return /^[a-zA-Z_-]+:/.test(line.trim());
}

function inFrontmatter(lines, index) {
  let frontmatterMarkerCount = 0;
  for (let i = 0; i < index; i += 1) {
    if (lines[i].trim() === '---') frontmatterMarkerCount += 1;
  }
  return frontmatterMarkerCount < 2;
}

function inCodeFence(lines, index) {
  let inFence = false;
  for (let i = 0; i < index; i += 1) {
    if (/^\s*```/.test(lines[i])) inFence = !inFence;
  }
  return inFence;
}

function readFileListFromEnv() {
  const listPath = String(process.env.LINT_FILE_LIST || '').trim();
  if (!listPath || !fs.existsSync(listPath)) {
    return [];
  }

  return fs
    .readFileSync(listPath, 'utf8')
    .split('\n')
    .map((filePath) => filePath.trim())
    .filter(Boolean)
    .filter((filePath) => /\.(md|mdx)$/i.test(filePath))
    .filter((filePath) => fs.existsSync(filePath));
}

function getFiles() {
  const envFiles = readFileListFromEnv();
  if (envFiles.length > 0) {
    return envFiles;
  }

  const args = process.argv.slice(2);
  if (args.includes('--changed-files')) {
    const diff = execSync('git diff --cached --name-only --diff-filter=ACM', {
      encoding: 'utf8'
    });
    return diff
      .split('\n')
      .filter((filePath) => filePath.endsWith('.mdx') || filePath.endsWith('.md'))
      .filter((filePath) => fs.existsSync(filePath));
  }
  const target = args.find((arg) => !arg.startsWith('--'));
  if (target && fs.existsSync(target)) return [target];
  return [];
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const results = [];

  lines.forEach((line, index) => {
    if (inFrontmatter(lines, index)) return;
    if (inCodeFence(lines, index)) return;

    PATTERNS.forEach((pattern) => {
      if (pattern.skip && pattern.skip(line)) return;
      if (pattern.test(line)) {
        results.push({
          tier: pattern.tier,
          file: filePath,
          line: index + 1,
          id: pattern.id,
          label: pattern.label,
          fix: pattern.fix,
          text: line.trim().slice(0, 80)
        });
      }
    });
  });

  return results;
}

function run() {
  const args = process.argv.slice(2);
  const warnOnly = args.includes('--warn-only');
  const summaryOnly = args.includes('--summary');
  const files = getFiles();

  if (files.length === 0) {
    console.log('lint-patterns: no files to check.');
    process.exit(0);
  }

  let tier1Count = 0;
  let tier2Count = 0;
  const patternCounts = {};

  files.forEach((filePath) => {
    const results = checkFile(filePath);
    const tier1 = results.filter((result) => result.tier === 1);
    const tier2 = results.filter((result) => result.tier === 2);

    tier1Count += tier1.length;
    tier2Count += tier2.length;

    results.forEach((result) => {
      patternCounts[result.id] = (patternCounts[result.id] || 0) + 1;
    });

    if (!summaryOnly) {
      if (tier1.length > 0) {
        console.error(`\n❌  ${filePath} — ${tier1.length} BLOCKING pattern(s):\n`);
        tier1.forEach((result) => {
          console.error(`  [L${result.line}] ${result.id}: ${result.label}`);
          console.error(`        Fix: ${result.fix}`);
          console.error(`        → "${result.text}"`);
        });
      }
      if (tier2.length > 0) {
        console.warn(`\n⚠️   ${filePath} — ${tier2.length} pattern warning(s) (human sign-off required):\n`);
        tier2.forEach((result) => {
          console.warn(`  [L${result.line}] ${result.id}: ${result.label}`);
          console.warn(`        Fix: ${result.fix}`);
          console.warn(`        → "${result.text}"`);
        });
      }
    }
  });

  console.log(`\n── Pattern Summary (${files.length} file(s)) ──────────────────`);
  console.log(`Blocking (Tier 1): ${tier1Count}`);
  console.log(`Warnings (Tier 2): ${tier2Count}`);
  if (Object.keys(patternCounts).length > 0) {
    console.log('\nTop patterns:');
    Object.entries(patternCounts)
      .sort((left, right) => right[1] - left[1])
      .slice(0, 10)
      .forEach(([id, count]) => console.log(`  ${id.padEnd(30)} ${count}`));
  }
  console.log('────────────────────────────────────────────────────');

  if (tier1Count > 0 && !warnOnly) {
    console.error('\nMerge blocked. Resolve Tier 1 patterns before re-submitting.');
    process.exit(1);
  }

  process.exit(0);
}

if (require.main === module) {
  run();
}

module.exports = {
  PATTERNS,
  checkFile,
  getFiles,
  inCodeFence,
  inFrontmatter,
  isCode,
  isComment,
  isYaml,
  run
};
