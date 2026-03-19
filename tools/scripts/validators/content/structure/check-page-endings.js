#!/usr/bin/env node
/**
 * @script            check-page-endings
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tools/scripts/validators/content, v2
 * @owner             docs
 * @needs             R-R14
 * @purpose-statement Validates that English v2 MDX pages end with an approved navigational or closing element
 * @pipeline          manual, ci
 * @usage             node tools/scripts/validators/content/check-page-endings.js [--fix] [--json]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { isExcludedV2ExperimentalPath } = require('../../../lib/docs-publishability');
const { isGeneratedDocsPageFile } = require('../../../lib/docs-page-scope');

const TODO_COMMENT = '<!-- TODO: add page ending -->';
const REPO_ROOT = getRepoRoot();
const V2_ROOT = path.join(REPO_ROOT, 'v2');

function getRepoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' });
  if (result.status === 0 && String(result.stdout || '').trim()) {
    return String(result.stdout || '').trim();
  }
  return process.cwd();
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function usage() {
  console.log('Usage: node tools/scripts/validators/content/check-page-endings.js [--fix] [--json]');
}

function parseArgs(argv) {
  const args = {
    fix: false,
    json: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--fix') {
      args.fix = true;
      continue;
    }

    if (token === '--json') {
      args.json = true;
      continue;
    }

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  return args;
}

function shouldExclude(repoPath) {
  const relPath = toPosix(repoPath).replace(/^\/+/, '');
  if (!relPath.startsWith('v2/')) return true;
  if (!/\.mdx$/i.test(relPath)) return true;
  if (relPath.startsWith('v2/es/') || relPath.startsWith('v2/fr/') || relPath.startsWith('v2/cn/')) return true;
  if (relPath.startsWith('v2/internal/')) return true;
  if (relPath.includes('/_contextData_/') || relPath.includes('/_context_data_/')) return true;
  if (relPath.includes('/_move_me/') || relPath.includes('/_tests-to-delete/')) return true;
  if (relPath.endsWith('/todo.mdx') || relPath.endsWith('/NOTES_V2.md') || relPath.endsWith('/todo.txt')) return true;
  return isExcludedV2ExperimentalPath(relPath);
}

function walkFiles(dirPath, out = []) {
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  entries.forEach((entry) => {
    if (entry.name === '.git' || entry.name === 'node_modules') {
      return;
    }

    const absPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walkFiles(absPath, out);
      return;
    }

    const relPath = toPosix(path.relative(REPO_ROOT, absPath));
    if (shouldExclude(relPath)) return;
    if (isGeneratedDocsPageFile(absPath)) return;
    out.push({ absPath, relPath });
  });

  return out;
}

function maskComments(content) {
  return String(content || '')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, (match) => match.replace(/[^\n]/g, ' '))
    .replace(/<!--[\s\S]*?-->/g, (match) => match.replace(/[^\n]/g, ' '));
}

function stripFrontmatter(content) {
  const raw = String(content || '');
  if (!raw.startsWith('---')) return raw;
  const match = raw.match(/^---[ \t]*\r?\n[\s\S]*?\r?\n---[ \t]*(?:\r?\n|$)/);
  return match ? raw.slice(match[0].length) : raw;
}

function getTrimmedBody(content) {
  return stripFrontmatter(maskComments(content)).replace(/\s+$/, '');
}

function getLastMeaningfulRecord(body) {
  const lines = String(body || '').split('\n');
  let inCodeFence = false;
  let lastRecord = null;

  lines.forEach((line, index) => {
    const trimmed = String(line || '').trim();
    if (!trimmed) return;
    if (/^(import|export)\b/.test(trimmed)) return;

    if (/^```/.test(trimmed)) {
      lastRecord = {
        line: index + 1,
        type: 'code-fence',
        text: trimmed
      };
      inCodeFence = !inCodeFence;
      return;
    }

    lastRecord = {
      line: index + 1,
      type: inCodeFence ? 'code' : 'body',
      text: trimmed
    };
  });

  return lastRecord;
}

function endsWithApprovedComponent(body) {
  const trimmed = String(body || '').trim();
  if (!trimmed) return false;

  return (
    /<CardGroup\b[\s\S]*<\/CardGroup>\s*$/i.test(trimmed) ||
    /<AccordionGroup\b[\s\S]*<\/AccordionGroup>\s*$/i.test(trimmed) ||
    /<Card\b[\s\S]*<\/Card>\s*$/i.test(trimmed) ||
    /<Card\b[^\n]*\/>\s*$/i.test(trimmed)
  );
}

function getLastHeadingSection(body) {
  const lines = String(body || '').split('\n');
  const headings = [];
  let inCodeFence = false;

  lines.forEach((line, index) => {
    const trimmed = String(line || '').trim();
    if (!trimmed) return;

    if (/^```/.test(trimmed)) {
      inCodeFence = !inCodeFence;
      return;
    }

    if (inCodeFence) return;

    const match = trimmed.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (!match) return;

    headings.push({
      title: match[2].trim(),
      lineIndex: index
    });
  });

  if (headings.length === 0) return null;
  const heading = headings[headings.length - 1];
  return {
    title: heading.title,
    sectionBody: lines.slice(heading.lineIndex + 1).join('\n')
  };
}

function hasApprovedNavigationalEnding(body) {
  const lastHeading = getLastHeadingSection(body);
  if (!lastHeading) return false;

  if (!/^(related|next\s+steps|see\s+also|resources)\b/i.test(lastHeading.title)) {
    return false;
  }

  return /\[[^\]]+\]\([^)]+\)|<(Card|CardGroup|AccordionGroup)\b/i.test(lastHeading.sectionBody);
}

function analyzeFile(file, options) {
  const raw = fs.readFileSync(file.absPath, 'utf8');
  const body = getTrimmedBody(raw);
  const lastRecord = getLastMeaningfulRecord(body);

  let verdict = 'ok';
  let reason = 'approved-closing';

  if (!body.trim()) {
    verdict = 'warning';
    reason = 'no-meaningful-content';
  } else if (endsWithApprovedComponent(body)) {
    reason = 'approved-component-ending';
  } else if (hasApprovedNavigationalEnding(body)) {
    reason = 'approved-navigation-ending';
  } else if (lastRecord && (lastRecord.type === 'code' || lastRecord.type === 'code-fence')) {
    verdict = 'warning';
    reason = 'ends-with-code-block';
  } else {
    verdict = 'warning';
    reason = 'ends-with-raw-prose';
  }

  let fixed = false;
  if (options.fix && verdict === 'warning' && !new RegExp(`${TODO_COMMENT.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`).test(raw)) {
    const nextContent = raw.replace(/\s*$/, '');
    fs.writeFileSync(file.absPath, `${nextContent}\n\n${TODO_COMMENT}\n`, 'utf8');
    fixed = true;
  }

  return {
    file: file.relPath,
    verdict,
    reason,
    fixed
  };
}

function summarize(results) {
  const summary = {
    filesScanned: results.length,
    ok: 0,
    warnings: 0,
    fixed: 0
  };

  results.forEach((result) => {
    if (result.verdict === 'warning') {
      summary.warnings += 1;
    } else {
      summary.ok += 1;
    }
    if (result.fixed) summary.fixed += 1;
  });

  return summary;
}

function writeHumanReport(results, summary) {
  results.forEach((result) => {
    const state = result.verdict === 'warning' ? 'WARN' : 'OK';
    const suffix = result.fixed ? ' (comment appended)' : '';
    console.log(`${state} ${result.file} ${result.reason}${suffix}`);
  });

  console.log(
    `Summary: ${summary.filesScanned} files, ${summary.ok} OK, ${summary.warnings} warnings, ${summary.fixed} fixed`
  );
}

function main() {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      usage();
      process.exit(0);
    }

    const results = walkFiles(V2_ROOT)
      .sort((left, right) => left.relPath.localeCompare(right.relPath))
      .map((file) => analyzeFile(file, args));
    const summary = summarize(results);
    const payload = {
      summary,
      results
    };

    if (args.json) {
      process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);
    } else {
      writeHumanReport(results, summary);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`check-page-endings failed: ${message}`);
    process.exit(1);
  }
}

main();
