#!/usr/bin/env node
/**
 * @script            add-pagetype-mechanical
 * @category          remediator
 * @purpose           qa:content-quality
 * @scope             tools/scripts, v2, tasks/reports
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Mechanically assigns pageType frontmatter to eligible v2 MDX pages.
 * @pipeline          manual — deterministic metadata rollout utility for v2 docs
 * @usage             node tools/scripts/add-pagetype-mechanical.js [flags]
 */

'use strict';

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { CANONICAL_PAGE_TYPES, normalizePageType } = require('../lib/frontmatter-taxonomy');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const V2_ROOT = path.join(REPO_ROOT, 'v2');
const EXCLUDED_SEGMENTS = new Set(['cn', 'es', 'fr', 'views', 'groups']);
const SUMMARY_TYPES = ['reference', 'landing', 'quickstart', 'glossary', 'overview', 'faq', 'troubleshooting'];

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
  if (fileName.includes('faq')) return { type: 'faq', rule: 6 };
  if (fileName.includes('troubleshoot') || normalized.includes('/troubleshoot')) {
    return { type: 'troubleshooting', rule: 7 };
  }
  if (normalized.includes('/api-reference/') && fileName === 'overview.mdx') {
    return { type: 'overview', rule: 8 };
  }
  if (normalized.includes('/api-reference/') && !hasField(frontmatterRaw, 'openapi') && fileName !== 'overview.mdx') {
    return { type: 'reference', rule: 9 };
  }
  if (fileName === 'overview.mdx' || fileName === 'index.mdx') {
    return { type: 'overview', rule: 10 };
  }

  return { type: '', rule: 11 };
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

  const insertAt = insertAfterIndex === -1 ? lines.length : getInsertionIndex(lines, insertAfterIndex);
  lines.splice(insertAt, 0, `pageType: ${pageType}`);
  return lines.join(newline);
}

function getInsertionIndex(lines, keyIndex) {
  const currentLine = String(lines[keyIndex] || '');
  const indentMatch = currentLine.match(/^(\s*)/);
  const baseIndent = indentMatch ? indentMatch[1].length : 0;
  const valueMatch = currentLine.match(/^[^:]+:\s*(.*)$/);
  const value = valueMatch ? valueMatch[1].trim() : '';
  const startsBlock = value === '' || value.startsWith('|') || value.startsWith('>');

  if (!startsBlock) {
    return keyIndex + 1;
  }

  let cursor = keyIndex;
  while (cursor + 1 < lines.length) {
    const nextLine = String(lines[cursor + 1] || '');
    const trimmed = nextLine.trim();
    if (!trimmed) {
      cursor += 1;
      continue;
    }

    const nextIndentMatch = nextLine.match(/^(\s*)/);
    const nextIndent = nextIndentMatch ? nextIndentMatch[1].length : 0;
    if (nextIndent > baseIndent) {
      cursor += 1;
      continue;
    }

    break;
  }

  return cursor + 1;
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
  console.log(`  faq: ${summary.faq}`);
  console.log(`  troubleshooting: ${summary.troubleshooting}`);
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
    faq: 0,
    troubleshooting: 0,
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

    const normalizedType = normalizePageType(classification.type);
    if (!normalizedType.valid || !CANONICAL_PAGE_TYPES.includes(normalizedType.canonical)) {
      throw new Error(`Internal classification error: "${classification.type}" is not a canonical pageType`);
    }

    const updatedContent = buildUpdatedContent(content, normalizedType.canonical);
    validateUpdatedFrontmatter(updatedContent, relPath);

    summary[normalizedType.canonical] += 1;
    logs.push(
      `CLASSIFIED: ${relPath} -> ${normalizedType.canonical} (rule ${classification.rule}${args.dryRun ? ', dry-run' : ''})`
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
