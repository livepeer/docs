#!/usr/bin/env node
/**
 * @script      repair-ai-discoverability
 * @type        remediator
 * @concern     maintenance
 * @niche       library
 * @purpose     qa:component-quality
 * @description Repair AI discoverability compliance: add missing @aiDiscoverability tags to hook-using components, create placeholder companion JSON files.
 * @mode        repair
 * @pipeline    manual > snippets/components (all .jsx) > repaired files, placeholder JSONs
 * @scope       snippets/components, snippets/data/snapshots
 * @usage       node operations/scripts/remediators/components/library/repair-ai-discoverability.js [--dry-run] [--write] [--staged]
 * @policy      —
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const REPO_ROOT = process.cwd();
const COMPONENTS_DIR = path.join(REPO_ROOT, 'snippets', 'components');
const SNAPSHOTS_DIR = path.join(REPO_ROOT, 'snippets', 'data', 'snapshots');

const args = process.argv.slice(2);
  const verifyMode = args.includes('--verify');
const writeMode = args.includes('--write');
const staged = args.includes('--staged');
const helpFlag = args.includes('--help') || args.includes('-h');

const HOOK_PATTERN = /use(State|Effect|Ref|Callback|Memo)\s*\(/;
const FETCH_PATTERN = /fetch\s*\(|\.get\s*\(|\.post\s*\(|axios|api\./;

// ---------------------------------------------------------------------------
// Help
// ---------------------------------------------------------------------------

function usage() {
  console.log(
    [
      'Usage: node operations/scripts/remediators/components/library/repair-ai-discoverability.js [options]',
      '',
      'Repairs AI discoverability compliance in JSX components.',
      '',
      'Options:',
      '  --dry-run   Preview changes without writing (default)',
      '  --write     Apply repairs to files',
      '  --staged    Limit to git-staged files only',
      '  --help, -h  Show this help message',
      '',
      'Fixes:',
      '  1. Adds missing @aiDiscoverability tag to hook-using components',
      '  2. Creates placeholder companion JSON for snapshot components',
      '',
      'Never removes or changes existing @aiDiscoverability tags.'
    ].join('\n')
  );
}

// ---------------------------------------------------------------------------
// File discovery
// ---------------------------------------------------------------------------

function findJsxFiles(dir) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findJsxFiles(full));
    } else if (entry.name.endsWith('.jsx')) {
      results.push(full);
    }
  }
  return results;
}

function getStagedJsxFiles() {
  try {
    const output = execSync('git diff --cached --name-only --diff-filter=ACMR', {
      encoding: 'utf8',
      cwd: REPO_ROOT
    });
    return output
      .trim()
      .split('\n')
      .filter((f) => f.endsWith('.jsx') && f.startsWith('snippets/components/'))
      .map((f) => path.join(REPO_ROOT, f));
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------------------
// JSDoc parsing
// ---------------------------------------------------------------------------

/**
 * Extract JSDoc block and its line range from file content.
 * @param {string} content
 * @returns {{ block: string, startLine: number, endLine: number } | null}
 */
function extractJSDoc(content) {
  const lines = content.split('\n');
  let startLine = -1;
  let endLine = -1;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('/**') && startLine === -1) {
      startLine = i;
    }
    if (startLine !== -1 && lines[i].includes('*/')) {
      endLine = i;
      break;
    }
  }

  if (startLine === -1 || endLine === -1) return null;

  return {
    block: lines.slice(startLine, endLine + 1).join('\n'),
    startLine,
    endLine
  };
}

/**
 * Extract a JSDoc tag value.
 * @param {string} block
 * @param {string} tag - Tag name without @
 * @returns {string | null}
 */
function getTagValue(block, tag) {
  const match = block.match(new RegExp(`@${tag}\\s+(.+)`));
  return match ? match[1].trim() : null;
}

/**
 * Classify what @aiDiscoverability value to add.
 * @param {string} content - Full file content
 * @returns {'snapshot' | 'none'}
 */
function classifyDiscoverability(content) {
  const hasUseEffect = /useEffect\s*\(/.test(content);
  const hasFetch = FETCH_PATTERN.test(content);

  if (hasUseEffect && hasFetch) return 'snapshot';
  return 'none';
}

// ---------------------------------------------------------------------------
// Repairs
// ---------------------------------------------------------------------------

/**
 * Add @aiDiscoverability tag to a JSDoc block.
 * Inserts after the last governance tag and before @param lines.
 *
 * @param {string} content - Full file content
 * @param {{ block: string, startLine: number, endLine: number }} jsdoc
 * @param {string} value - Tag value to insert
 * @returns {string} Modified content
 */
function insertAiDiscoverabilityTag(content, jsdoc, value) {
  const lines = content.split('\n');
  const jsdocLines = lines.slice(jsdoc.startLine, jsdoc.endLine + 1);

  // Find the last non-@param tag line, or the line before the first @param
  let insertIdx = -1;
  for (let i = jsdocLines.length - 1; i >= 0; i--) {
    const trimmed = jsdocLines[i].trim();
    if (trimmed.startsWith('* @param')) continue;
    if (trimmed.startsWith('* @') || trimmed === '*' || trimmed === '*/') {
      // Insert after the last governance tag
      if (trimmed.startsWith('* @') && !trimmed.startsWith('* @param')) {
        insertIdx = i + 1;
        break;
      }
    }
  }

  // Fallback: insert before the closing */
  if (insertIdx === -1) {
    for (let i = 0; i < jsdocLines.length; i++) {
      if (jsdocLines[i].trim() === '*/') {
        insertIdx = i;
        break;
      }
    }
  }

  if (insertIdx === -1) return content;

  // Determine indentation from surrounding lines
  const indent = ' * ';
  const newLine = `${indent}@aiDiscoverability ${value}`;

  jsdocLines.splice(insertIdx, 0, newLine);
  lines.splice(jsdoc.startLine, jsdoc.endLine - jsdoc.startLine + 1, ...jsdocLines);

  return lines.join('\n');
}

/**
 * Create a placeholder companion JSON for a snapshot component.
 *
 * @param {string} componentName
 * @param {string | null} dataSource
 * @returns {string} JSON content
 */
function createPlaceholderJson(componentName, dataSource) {
  const obj = {
    _generated: true,
    _note: 'Placeholder - populate with real snapshot data from the API source',
    _component: componentName,
    _dataSource: dataSource || 'unknown'
  };
  return JSON.stringify(obj, null, 2) + '\n';
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  if (helpFlag) {
    usage();
    process.exit(0);
  }

  const files = staged ? getStagedJsxFiles() : findJsxFiles(COMPONENTS_DIR);

  if (files.length === 0) {
    console.log('No JSX files to process.');
    process.exit(0);
  }

  let tagsAdded = 0;
  let jsonsCreated = 0;
  let filesModified = 0;

  for (const file of files) {
    const relPath = path.relative(REPO_ROOT, file);
    let content = fs.readFileSync(file, 'utf8');

    // Check for hook usage
    if (!HOOK_PATTERN.test(content)) continue;

    const jsdoc = extractJSDoc(content);
    if (!jsdoc) continue;

    const existingValue = getTagValue(jsdoc.block, 'aiDiscoverability');
    const componentMatch = content.match(/export\s+const\s+(\w+)/);
    const componentName = componentMatch ? componentMatch[1] : path.basename(file, '.jsx');
    const dataSource = getTagValue(jsdoc.block, 'dataSource');

    let fileChanged = false;

    // Fix 1: Missing @aiDiscoverability tag
    if (!existingValue) {
      const value = classifyDiscoverability(content);
      if (writeMode) {
        content = insertAiDiscoverabilityTag(content, jsdoc, value);
        fs.writeFileSync(file, content, 'utf8');
        console.log(`  FIXED  ${relPath} — added @aiDiscoverability ${value}`);
      } else {
        console.log(`  WOULD ADD  ${relPath} — @aiDiscoverability ${value}`);
      }
      tagsAdded++;
      fileChanged = true;
    }

    // Fix 2: Missing companion JSON for snapshot
    const effectiveValue = existingValue || classifyDiscoverability(content);
    if (effectiveValue === 'snapshot') {
      const snapshotName = componentName + '.json';
      const snapshotPath = path.join(SNAPSHOTS_DIR, snapshotName);

      if (!fs.existsSync(snapshotPath)) {
        if (writeMode) {
          if (!fs.existsSync(SNAPSHOTS_DIR)) {
            fs.mkdirSync(SNAPSHOTS_DIR, { recursive: true });
          }
          fs.writeFileSync(snapshotPath, createPlaceholderJson(componentName, dataSource), 'utf8');
          console.log(`  CREATED  snippets/data/snapshots/${snapshotName}`);
        } else {
          console.log(`  WOULD CREATE  snippets/data/snapshots/${snapshotName}`);
        }
        jsonsCreated++;
        fileChanged = true;
      }
    }

    if (fileChanged) filesModified++;
  }

  console.log('');
  console.log(`Summary: ${tagsAdded} tag(s) added, ${jsonsCreated} JSON(s) created, ${filesModified} file(s) affected`);
  if (!writeMode && (tagsAdded > 0 || jsonsCreated > 0)) {
    console.log('Run with --write to apply repairs.');
  }

  process.exit(tagsAdded > 0 && !writeMode ? 1 : 0);
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

if (require.main === module) {
  main();
}

module.exports = { classifyDiscoverability, insertAiDiscoverabilityTag, createPlaceholderJson };
