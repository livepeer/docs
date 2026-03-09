#!/usr/bin/env node
/**
 * @script add-pagetype-mechanical
 * @summary Mechanically assign pageType frontmatter to eligible v2 MDX pages.
 * @owner docs
 * @scope tools/scripts, v2, tasks/reports
 * @pipeline manual — deterministic metadata rollout utility for v2 docs
 *
 * @usage
 *   node tools/scripts/add-pagetype-mechanical.js [--dry-run]
 *
 * @inputs
 *   --dry-run Report classifications and Phase 2 candidates without writing files.
 *
 * @outputs
 *   - Updated `pageType` frontmatter for mechanically classifiable English v2 MDX pages unless `--dry-run`.
 *   - Console summary including already typed and Phase 2 candidate counts.
 *
 * @exit-codes
 *   0 = completed
 *   1 = invalid args or runtime failure
 *
 * @examples
 *   node tools/scripts/add-pagetype-mechanical.js
 *   node tools/scripts/add-pagetype-mechanical.js --dry-run
 *
 * @notes
 *   Excludes locale trees, views/groups, and any `v2/x-*` path segment to match repo-wide docs validation scope.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const V2_ROOT = path.join(REPO_ROOT, 'v2');
const EXCLUDED_SEGMENTS = new Set(['cn', 'es', 'fr', 'views', 'groups']);
const SUMMARY_TYPES = ['reference', 'landing', 'quickstart', 'glossary', 'overview'];

function toPosix(filePath) {
  return String(filePath || '').split(path.sep).join('/');
}

function detectNewline(content) {
  return String(content || '').includes('\r\n') ? '\r\n' : '\n';
}

function printUsage() {
  console.log('Usage: node tools/scripts/add-pagetype-mechanical.js [--dry-run]');
}

function parseArgs(argv) {
  const args = {
    dryRun: false
  };

  for (const token of argv) {
    if (token === '--dry-run') {
      args.dryRun = true;
      continue;
    }
    if (token === '--help' || token === '-h') {
      printUsage();
      process.exit(0);
    }
    throw new Error(`Unknown argument: ${token}`);
  }

  return args;
}

function isExcluded(relPath) {
  const segments = toPosix(relPath).split('/');
  return segments.some((segment) => EXCLUDED_SEGMENTS.has(segment) || /^x-[^/]+$/i.test(segment));
}

function walkMdxFiles(dirPath, out = []) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relPath = toPosix(path.relative(REPO_ROOT, fullPath));

    if (isExcluded(relPath)) {
      continue;
    }

    if (entry.isDirectory()) {
      walkMdxFiles(fullPath, out);
      continue;
    }

    if (entry.isFile() && /\.mdx$/i.test(entry.name)) {
      out.push(relPath);
    }
  }

  return out;
}

function extractFrontmatterBlock(content) {
  const match = String(content || '').match(/^---\r?\n([\s\S]*?)\r?\n---(\r?\n|$)/);
  if (!match) {
    return {
      exists: false,
      raw: '',
      full: '',
      body: String(content || '')
    };
  }

  return {
    exists: true,
    raw: match[1],
    full: match[0],
    body: String(content || '').slice(match[0].length)
  };
}

function hasField(frontmatterRaw, fieldName) {
  const pattern = new RegExp(`^${fieldName}\\s*:`, 'm');
  return pattern.test(String(frontmatterRaw || ''));
}

function hasModeFrame(frontmatterRaw) {
  return /^mode:\s*['"]?frame['"]?\s*$/m.test(String(frontmatterRaw || ''));
}

function classifyFile(relPath, frontmatterRaw) {
  const normalized = toPosix(relPath);
  const fileName = path.basename(normalized).toLowerCase();

  if (hasField(frontmatterRaw, 'openapi')) return { type: 'reference', rule: 1 };
  if (hasModeFrame(frontmatterRaw)) return { type: 'landing', rule: 2 };
  if (fileName.includes('portal') || /-hub\.mdx$/i.test(fileName) || /-path\.mdx$/i.test(fileName)) {
    return { type: 'landing', rule: 3 };
  }
  if (normalized.includes('/quickstart/') || fileName === 'quickstart.mdx') {
    return { type: 'quickstart', rule: 4 };
  }
  if (fileName.includes('glossary')) return { type: 'glossary', rule: 5 };
  if (fileName.includes('faq')) return { type: 'reference', rule: 6 };
  if (normalized.includes('/api-reference/') && fileName === 'overview.mdx') {
    return { type: 'overview', rule: 7 };
  }
  if (normalized.includes('/api-reference/') && !hasField(frontmatterRaw, 'openapi') && fileName !== 'overview.mdx') {
    return { type: 'reference', rule: 8 };
  }
  if (fileName === 'overview.mdx' || fileName === 'index.mdx') {
    return { type: 'overview', rule: 9 };
  }
  return { type: '', rule: 10 };
}

function insertPageType(frontmatterRaw, pageType, newline) {
  const lines = String(frontmatterRaw || '').split(/\r?\n/);
  if (lines.some((line) => /^pageType\s*:/.test(line))) {
    return frontmatterRaw;
  }

  let insertAfterIndex = lines.findIndex((line) => /^description\s*:/.test(line));
  if (insertAfterIndex === -1) {
    insertAfterIndex = lines.findIndex((line) => /^title\s*:/.test(line));
  }
  if (insertAfterIndex === -1) {
    insertAfterIndex = lines.findIndex((line) => String(line || '').trim() !== '');
  }

  const insertAt = insertAfterIndex === -1 ? lines.length : insertAfterIndex + 1;
  lines.splice(insertAt, 0, `pageType: ${pageType}`);
  return lines.join(newline);
}

function buildUpdatedContent(content, pageType) {
  const newline = detectNewline(content);
  const frontmatter = extractFrontmatterBlock(content);
  if (!frontmatter.exists) {
    return '';
  }

  const nextFrontmatter = insertPageType(frontmatter.raw, pageType, newline);
  return `---${newline}${nextFrontmatter}${newline}---${newline}${frontmatter.body}`;
}

function validateUpdatedFrontmatter(content, relPath) {
  try {
    matter(content);
  } catch (error) {
    throw new Error(`${relPath}: invalid frontmatter after pageType insertion: ${error.message}`);
  }
}

function writeOperations(operations) {
  operations.forEach((operation) => {
    fs.writeFileSync(operation.absPath, operation.content, 'utf8');
  });
}

function printSummary(summary) {
  console.log('Phase 1 classification complete:');
  console.log(`  reference: ${summary.reference}`);
  console.log(`  landing: ${summary.landing}`);
  console.log(`  quickstart: ${summary.quickstart}`);
  console.log(`  glossary: ${summary.glossary}`);
  console.log(`  overview: ${summary.overview}`);
  console.log(`  Already typed (skipped): ${summary.skipped}`);
  console.log(`  Unclassified (Phase 2): ${summary.unclassified}`);
  console.log(`  Total files scanned: ${summary.total}`);
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const files = walkMdxFiles(V2_ROOT).sort((left, right) => left.localeCompare(right));
  const summary = {
    reference: 0,
    landing: 0,
    quickstart: 0,
    glossary: 0,
    overview: 0,
    skipped: 0,
    unclassified: 0,
    total: files.length
  };
  const operations = [];
  const logs = [];

  files.forEach((relPath) => {
    const absPath = path.join(REPO_ROOT, relPath);
    const content = fs.readFileSync(absPath, 'utf8');
    const frontmatter = extractFrontmatterBlock(content);

    if (!frontmatter.exists) {
      summary.unclassified += 1;
      logs.push(`Unclassified: ${relPath} (Phase 2)`);
      return;
    }

    if (hasField(frontmatter.raw, 'pageType')) {
      summary.skipped += 1;
      return;
    }

    const classification = classifyFile(relPath, frontmatter.raw);
    if (!classification.type) {
      summary.unclassified += 1;
      logs.push(`Unclassified: ${relPath} (Phase 2)`);
      return;
    }

    const updatedContent = buildUpdatedContent(content, classification.type);
    validateUpdatedFrontmatter(updatedContent, relPath);

    summary[classification.type] += 1;
    logs.push(
      `CLASSIFIED: ${relPath} -> ${classification.type} (rule ${classification.rule}${args.dryRun ? ', dry-run' : ''})`
    );
    operations.push({
      absPath,
      content: updatedContent
    });
  });

  if (!args.dryRun) {
    writeOperations(operations);
  }

  logs.forEach((line) => console.log(line));
  printSummary(summary);

  if (!SUMMARY_TYPES.every((type) => typeof summary[type] === 'number')) {
    process.exitCode = 1;
  }
}

main();
