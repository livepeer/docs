#!/usr/bin/env node
/**
 * @script      add-pagetype-mechanical
 * @type        remediator
 * @concern     governance
 * @niche       classification
 * @purpose     
 * @description Mechanically assigns pageType frontmatter to eligible v2 MDX pages.
 * @mode        repair
 * @pipeline    manual — deterministic metadata rollout utility for v2 docs
 * @scope       operations/scripts, v2, workspace/reports
 * @usage       node operations/scripts/remediators/content/classification/add-pagetype-mechanical.js [flags]
 */

'use strict';

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { CANONICAL_PAGE_TYPES, normalizePageType } = require('../../../../../tools/lib/docs/frontmatter-taxonomy');

const REPO_ROOT = process.cwd();
const V2_ROOT = path.join(REPO_ROOT, 'v2');
const EXCLUDED_SEGMENTS = new Set(['cn', 'es', 'fr', 'views', 'groups']);
// Canonical types that can be emitted by this script's classification rules.
// 'overview' removed — it is not a canonical pageType and is no longer assigned.
// 'navigation' and 'concept' added to cover index.mdx and overview.mdx outputs.
// Canonical types only — deprecated aliases (landing, quickstart, glossary, faq, troubleshooting) removed.
const SUMMARY_TYPES = ['reference', 'navigation', 'concept', 'tutorial', 'guide', 'instruction', 'resource'];

function toPosix(filePath) {
  return String(filePath || '').split(path.sep).join('/');
}

function detectNewline(content) {
  return String(content || '').includes('\r\n') ? '\r\n' : '\n';
}

function printUsage() {
  console.log('Usage: node operations/scripts/add-pagetype-mechanical.js [--dry-run]');
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
    if (token === '--verify') { args.verify = true; continue; }

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
  if (hasModeFrame(frontmatterRaw)) return { type: 'navigation', rule: 2 };
  if (fileName.includes('portal') || /-hub\.mdx$/i.test(fileName) || /-path\.mdx$/i.test(fileName)) {
    return { type: 'navigation', rule: 3 };
  }
  if (normalized.includes('/quickstart/') || fileName === 'quickstart.mdx') {
    return { type: 'instruction', pageVariant: 'quickstart', rule: 4 };
  }
  if (fileName.includes('glossary')) return { type: 'reference', pageVariant: 'compendium', rule: 5 };
  if (fileName.includes('faq')) return { type: 'reference', pageVariant: 'compendium', rule: 6 };
  if (fileName.includes('troubleshoot') || normalized.includes('/troubleshoot')) {
    return { type: 'instruction', pageVariant: 'troubleshooting', rule: 7 };
  }
  if (normalized.includes('/api-reference/') && fileName === 'overview.mdx') {
    // overview is not a canonical pageType and is not aliased — api-reference entry pages
    // are concept pages with a pageVariant to distinguish them from generic concepts.
    return { type: 'concept', pageVariant: 'overview', rule: 8 };
  }
  if (normalized.includes('/api-reference/') && !hasField(frontmatterRaw, 'openapi') && fileName !== 'overview.mdx') {
    return { type: 'reference', rule: 9 };
  }
  // FIX (rule 10): 'overview' was previously assigned here but it is not a canonical pageType
  // and has no alias in frontmatter-taxonomy.js — normalizePageType() returns valid:false and
  // the guard at the call-site throws.  Correct assignments per taxonomy:
  //   index.mdx   → pageType: navigation  (tab / section entry points)
  //   overview.mdx → pageType: concept, pageVariant: overview  (conceptual overview pages)
  //   portal.mdx  → pageType: navigation  (already covered by rule 3 via fileName.includes('portal'))
  if (fileName === 'index.mdx') {
    return { type: 'navigation', rule: 10 };
  }
  if (fileName === 'overview.mdx') {
    return { type: 'concept', pageVariant: 'overview', rule: 10 };
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

function buildUpdatedContent(content, pageType, pageVariant) {
  const newline = detectNewline(content);
  const frontmatter = extractFrontmatterBlock(content);
  if (!frontmatter.exists) {
    return '';
  }

  // Insert pageType first, then pageVariant immediately after if provided.
  // pageVariant is used for concept/overview.mdx pages (rule 8, rule 10) to preserve
  // the semantic distinction without using the invalid 'overview' pageType value.
  let nextFrontmatter = insertPageType(frontmatter.raw, pageType, newline);
  if (pageVariant) {
    nextFrontmatter = insertFieldAfterPageType(nextFrontmatter, 'pageVariant', pageVariant, newline);
  }
  return `---${newline}${nextFrontmatter}${newline}---${newline}${frontmatter.body}`;
}

function insertFieldAfterPageType(frontmatterRaw, fieldName, fieldValue, newline) {
  const lines = String(frontmatterRaw || '').split(/\r?\n/);
  if (lines.some((line) => new RegExp(`^${fieldName}\\s*:`).test(line))) {
    return frontmatterRaw;
  }
  const pageTypeIndex = lines.findIndex((line) => /^pageType\s*:/.test(line));
  const insertAt = pageTypeIndex === -1 ? lines.length : pageTypeIndex + 1;
  lines.splice(insertAt, 0, `${fieldName}: ${fieldValue}`);
  return lines.join(newline);
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
  console.log(`  navigation: ${summary.navigation}`);
  console.log(`  concept (overview variant): ${summary.concept}`);
  console.log(`  landing: ${summary.landing}`);
  console.log(`  quickstart: ${summary.quickstart}`);
  console.log(`  glossary: ${summary.glossary}`);
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
    navigation: 0,
    concept: 0,
    landing: 0,
    quickstart: 0,
    glossary: 0,
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

    // Classification rules now emit canonical values directly — no alias resolution needed.
    if (!CANONICAL_PAGE_TYPES.includes(classification.type)) {
      throw new Error(`Internal classification error: "${classification.type}" is not a canonical pageType`);
    }

    const updatedContent = buildUpdatedContent(content, classification.type, classification.pageVariant || '');
    validateUpdatedFrontmatter(updatedContent, relPath);

    // NOTE (pre-existing issue — do not fix here): summary keys use the deprecated type names
    // (quickstart, glossary, faq, troubleshooting) but this line increments by the canonical
    // resolved type (e.g. 'instruction' for quickstart files). 'instruction' is not a key in
    summary[classification.type] = (summary[classification.type] || 0) + 1;
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
