#!/usr/bin/env node
/**
 * @script           check-duplicate-content
 * @category         validator
 * @purpose          qa:content-quality
 * @scope            v2-content
 * @owner            docs
 * @needs            R-R14
 * @purpose-statement Detects near-duplicate MDX pages using content hashing and similarity scoring.
 * @pipeline         manual, P5 (scheduled)
 * @usage            node tools/scripts/validators/content/check-duplicate-content.js [--threshold <0-1>] [--json]
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execSync } = require('child_process');

const DEFAULT_THRESHOLD = 0.85;
const REPO_ROOT = getRepoRoot();

if (process.cwd() !== REPO_ROOT) {
  process.chdir(REPO_ROOT);
}

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function printHelp() {
  console.log(
    [
      'Usage: node tools/scripts/validators/content/check-duplicate-content.js [options]',
      '',
      'Options:',
      '  --threshold <0-1>  Near-duplicate Jaccard threshold (default: 0.85)',
      '  --json             Emit machine-readable JSON',
      '  --help, -h         Show this help message'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    threshold: DEFAULT_THRESHOLD,
    json: false,
    help: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--json') {
      args.json = true;
      continue;
    }

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    if (token === '--threshold') {
      args.threshold = Number(argv[index + 1]);
      index += 1;
      continue;
    }

    if (token.startsWith('--threshold=')) {
      args.threshold = Number(token.slice('--threshold='.length));
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (!Number.isFinite(args.threshold) || args.threshold < 0 || args.threshold > 1) {
    throw new Error(`Invalid --threshold value: ${args.threshold}`);
  }

  return args;
}

function shouldExclude(repoPath) {
  const relPath = toPosix(repoPath).replace(/^\/+/, '');
  if (!relPath.startsWith('v2/')) return true;
  if (!/\.mdx$/i.test(relPath)) return true;
  if (relPath.startsWith('v2/es/') || relPath.startsWith('v2/fr/') || relPath.startsWith('v2/cn/')) return true;
  if (relPath.startsWith('v2/internal/')) return true;
  if (relPath.includes('/views/') || relPath.includes('/groups/')) return true;
  if (relPath.includes('/_contextData_/') || relPath.includes('/_context_data_/')) return true;
  if (relPath.includes('/_move_me/') || relPath.includes('/_tests-to-delete/')) return true;
  if (relPath.endsWith('todo.txt') || relPath.endsWith('todo.mdx') || relPath.endsWith('NOTES_V2.md')) return true;
  if (path.posix.basename(relPath).toLowerCase() === 'index.mdx') return true;

  return relPath.split('/').some((segment) => segment.toLowerCase().startsWith('x-'));
}

function walkFiles(dirPath, out = []) {
  const absoluteDir = path.join(REPO_ROOT, dirPath);
  if (!fs.existsSync(absoluteDir)) return out;

  fs.readdirSync(absoluteDir, { withFileTypes: true }).forEach((entry) => {
    if (entry.name === '.git' || entry.name === 'node_modules') return;
    const relPath = toPosix(path.join(dirPath, entry.name));
    if (entry.isDirectory()) {
      walkFiles(relPath, out);
      return;
    }
    if (!shouldExclude(relPath)) {
      out.push(relPath);
    }
  });

  return out;
}

function normalizeVisibleMdxLine(lineText) {
  return String(lineText || '')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/`[^`\n]*`/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function collectVisibleMdxLines(content) {
  const lines = String(content || '').split('\n');
  const visibleLines = [];
  let inFrontmatter = lines[0] && lines[0].trim() === '---';
  let inCodeFence = false;

  lines.forEach((lineText, index) => {
    const trimmed = String(lineText || '').trim();
    if (inFrontmatter) {
      if (index > 0 && trimmed === '---') {
        inFrontmatter = false;
      }
      return;
    }

    if (/^```/.test(trimmed)) {
      inCodeFence = !inCodeFence;
      return;
    }

    if (inCodeFence || !trimmed) return;
    if (/^(import|export)\b/.test(trimmed)) return;
    if (trimmed.startsWith('//')) return;
    if (/^<!--[\s\S]*-->$/.test(trimmed)) return;
    if (/^\{\/\*[\s\S]*\*\/\}$/.test(trimmed)) return;

    const visibleText = normalizeVisibleMdxLine(lineText);
    if (visibleText) {
      visibleLines.push(visibleText);
    }
  });

  return visibleLines;
}

function normalizeText(content) {
  return collectVisibleMdxLines(content)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function tokenize(text) {
  return text.match(/[a-z0-9]+/g) || [];
}

function buildPageRecord(repoPath) {
  const absolutePath = path.join(REPO_ROOT, repoPath);
  const content = fs.readFileSync(absolutePath, 'utf8');
  const normalizedText = normalizeText(content);
  const words = tokenize(normalizedText);
  const wordCount = words.length;
  if (wordCount < 100) return null;

  return {
    file: repoPath,
    wordCount,
    normalizedText,
    wordSet: new Set(words),
    hash: crypto.createHash('sha256').update(normalizedText).digest('hex')
  };
}

function groupExactDuplicates(records) {
  const groups = new Map();
  records.forEach((record) => {
    const list = groups.get(record.hash) || [];
    list.push(record);
    groups.set(record.hash, list);
  });

  return [...groups.entries()]
    .filter(([, entries]) => entries.length > 1)
    .map(([hash, entries]) => ({
      hash,
      similarity: 1,
      files: entries.map((entry) => entry.file).sort(),
      wordCount: entries[0].wordCount
    }))
    .sort((left, right) => left.files[0].localeCompare(right.files[0]));
}

function computeJaccard(leftSet, rightSet) {
  if (leftSet.size === 0 && rightSet.size === 0) return 1;
  let intersection = 0;
  const smaller = leftSet.size <= rightSet.size ? leftSet : rightSet;
  const larger = smaller === leftSet ? rightSet : leftSet;
  smaller.forEach((token) => {
    if (larger.has(token)) {
      intersection += 1;
    }
  });
  const union = leftSet.size + rightSet.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

function findNearDuplicates(records, threshold, exactHashes) {
  const findings = [];
  for (let leftIndex = 0; leftIndex < records.length; leftIndex += 1) {
    const left = records[leftIndex];
    if (exactHashes.has(left.hash)) continue;

    for (let rightIndex = leftIndex + 1; rightIndex < records.length; rightIndex += 1) {
      const right = records[rightIndex];
      if (exactHashes.has(right.hash)) continue;

      const similarity = computeJaccard(left.wordSet, right.wordSet);
      if (similarity < threshold) continue;

      findings.push({
        similarity: Number(similarity.toFixed(4)),
        files: [left.file, right.file].sort(),
        wordCounts: [left.wordCount, right.wordCount]
      });
    }
  }

  return findings.sort((left, right) => {
    if (right.similarity !== left.similarity) return right.similarity - left.similarity;
    return left.files[0].localeCompare(right.files[0]) || left.files[1].localeCompare(right.files[1]);
  });
}

function buildSummary(records, exactDuplicates, nearDuplicates) {
  return {
    scanned: records.length,
    exactDuplicateGroups: exactDuplicates.length,
    exactDuplicatePages: exactDuplicates.reduce((count, group) => count + group.files.length, 0),
    nearDuplicatePairs: nearDuplicates.length
  };
}

function renderText(report) {
  const lines = [
    'Duplicate content report',
    `Threshold: ${report.threshold}`,
    `Scanned: ${report.summary.scanned} | Exact duplicate groups: ${report.summary.exactDuplicateGroups} | Near-duplicate pairs: ${report.summary.nearDuplicatePairs}`,
    ''
  ];

  if (report.exactDuplicates.length === 0) {
    lines.push('Exact duplicates: none');
  } else {
    lines.push('Exact duplicates:');
    report.exactDuplicates.forEach((group) => {
      lines.push(`ERROR   ${group.files.join(' <-> ')} | sha256=${group.hash.slice(0, 12)} | words=${group.wordCount}`);
    });
  }

  lines.push('');

  if (report.nearDuplicates.length === 0) {
    lines.push('Near duplicates: none');
  } else {
    lines.push('Near duplicates:');
    report.nearDuplicates.forEach((pair) => {
      lines.push(`WARNING ${pair.files.join(' <-> ')} | similarity=${pair.similarity.toFixed(4)}`);
    });
  }

  return lines.join('\n');
}

function buildJsonReport(report) {
  return {
    generatedAt: report.generatedAt,
    threshold: report.threshold,
    summary: report.summary,
    exactDuplicates: report.exactDuplicates,
    nearDuplicates: report.nearDuplicates
  };
}

function run(args = parseArgs(process.argv.slice(2))) {
  const records = walkFiles('v2')
    .sort()
    .map(buildPageRecord)
    .filter(Boolean);

  const exactDuplicates = groupExactDuplicates(records);
  const exactHashes = new Set(exactDuplicates.map((group) => group.hash));
  const nearDuplicates = findNearDuplicates(records, args.threshold, exactHashes);
  const summary = buildSummary(records, exactDuplicates, nearDuplicates);

  return {
    generatedAt: new Date().toISOString(),
    threshold: args.threshold,
    summary,
    exactDuplicates,
    nearDuplicates,
    exitCode: exactDuplicates.length > 0 ? 1 : 0
  };
}

if (require.main === module) {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      printHelp();
      process.exit(0);
    }

    const report = run(args);
    if (args.json) {
      process.stdout.write(`${JSON.stringify(buildJsonReport(report))}\n`);
    } else {
      process.stdout.write(`${renderText(report)}\n`);
    }
    process.exit(report.exitCode);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  parseArgs,
  run,
  shouldExclude,
  normalizeText,
  collectVisibleMdxLines,
  computeJaccard,
  buildJsonReport,
  renderText
};
