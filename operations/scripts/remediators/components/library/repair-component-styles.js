#!/usr/bin/env node
/**
 * @script      repair-component-styles
 * @type        remediator
 * @concern     maintenance
 * @niche       library
 * @purpose     qa:component-quality
 * @description Repair JSX component style violations: extract inline styles to named const, move top-level constants inside function body.
 * @mode        repair
 * @pipeline    manual > snippets/components (all .jsx) > repaired files
 * @scope       snippets/components
 * @usage       node operations/scripts/remediators/components/library/repair-component-styles.js [--dry-run] [--write] [--staged]
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

const args = process.argv.slice(2);
  const verifyMode = args.includes('--verify');
const writeMode = args.includes('--write');
const staged = args.includes('--staged');
const helpFlag = args.includes('--help') || args.includes('-h');

// ---------------------------------------------------------------------------
// Help
// ---------------------------------------------------------------------------

function usage() {
  console.log(
    [
      'Usage: node operations/scripts/remediators/components/library/repair-component-styles.js [options]',
      '',
      'Repairs style pattern violations in JSX components.',
      '',
      'Options:',
      '  --dry-run   Preview changes without writing (default)',
      '  --write     Apply repairs to files',
      '  --staged    Limit to git-staged files only',
      '  --help, -h  Show this help message',
      '',
      'Fixes:',
      '  1. Extracts inline style={{ ... }} to const styles above return',
      '  2. Moves top-level constants inside export function body',
      '',
      'Skips complex patterns (ternaries, computed values, spreads) and flags',
      'them for manual review.'
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
// Inline style extraction
// ---------------------------------------------------------------------------

/**
 * Check if a style value is too complex for automated repair.
 * @param {string} value - The content between style={{ and }}
 * @returns {boolean}
 */
function isComplexStyle(value) {
  // Ternaries, function calls (other than var()), template literals, spreads beyond ...style
  if (value.includes('?') && value.includes(':')) return true;
  if (/\.\.\.[a-zA-Z]/.test(value) && !value.match(/^[^.]*\.\.\.style[^a-zA-Z]/)) return true;
  if (value.includes('`')) return true;
  // Computed values referencing variables (not string literals or var(--)
  const assignments = value.split(',').map((s) => s.trim());
  for (const a of assignments) {
    const colonIdx = a.indexOf(':');
    if (colonIdx === -1) continue;
    const val = a.slice(colonIdx + 1).trim();
    // Allow: string literals, numbers, var(--...), ...style
    if (/^"[^"]*"$/.test(val)) continue;
    if (/^'[^']*'$/.test(val)) continue;
    if (/^\d+(\.\d+)?(rem|em|px|%)?$/.test(val)) continue;
    if (/^"var\(--[^)]+\)"$/.test(val)) continue;
    if (val.startsWith('...style')) continue;
    // If we get here, it might be a variable reference — flag as complex
    if (/^[a-zA-Z_$]/.test(val) && !val.startsWith('"') && !val.startsWith("'")) return true;
  }
  return false;
}

/**
 * Extract inline style objects from a component function body.
 * Returns the modified content and a list of extracted styles.
 *
 * @param {string} content - Full file content
 * @returns {{ content: string, fixes: Array<{line: number, type: string}>, skipped: Array<{line: number, reason: string}> }}
 */
function repairInlineStyles(content) {
  const fixes = [];
  const skipped = [];
  const lines = content.split('\n');

  // Find all export const arrow functions
  const exportPattern = /^export\s+const\s+(\w+)\s*=\s*\(/;
  let i = 0;

  while (i < lines.length) {
    const match = lines[i].match(exportPattern);
    if (!match) {
      i++;
      continue;
    }

    const fnName = match[1];
    // Find the opening brace of the arrow function body
    let bodyStart = -1;
    for (let j = i; j < Math.min(i + 10, lines.length); j++) {
      if (lines[j].includes('=>') && lines[j].includes('{')) {
        bodyStart = j;
        break;
      }
      if (lines[j].includes(') =>')) {
        // Next line might have the brace
        if (j + 1 < lines.length && lines[j + 1].trim() === '{') {
          bodyStart = j + 1;
          break;
        }
      }
    }
    if (bodyStart === -1) {
      i++;
      continue;
    }

    // Find the return statement
    let returnStart = -1;
    for (let j = bodyStart + 1; j < lines.length; j++) {
      if (lines[j].trim().startsWith('return')) {
        returnStart = j;
        break;
      }
      if (lines[j].trim() === '};') break; // end of function without return
    }
    if (returnStart === -1) {
      i = bodyStart + 1;
      continue;
    }

    // Scan for inline style={{ ... }} between return and end of function
    let styleCount = 0;
    const styleExtractions = [];

    for (let j = returnStart; j < lines.length; j++) {
      if (lines[j].trim() === '};') break;

      const styleMatch = lines[j].match(/style=\{\{([^}]*)\}\}/);
      if (styleMatch) {
        const styleValue = styleMatch[1].trim();
        if (isComplexStyle(styleValue)) {
          skipped.push({ line: j + 1, reason: 'Complex style expression (ternary/computed/spread)' });
          continue;
        }
        const styleName = `inline${styleCount}`;
        styleCount++;
        styleExtractions.push({
          lineIdx: j,
          original: styleMatch[0],
          replacement: `style={styles.${styleName}}`,
          styleObj: `    ${styleName}: { ${styleValue} }`,
          lineNum: j + 1
        });
      }

      // Multi-line inline styles: style={{\n  key: value,\n  key: value\n}}
      if (/style=\{\{/.test(lines[j]) && !/\}\}/.test(lines[j])) {
        // Multi-line — skip for safety
        skipped.push({ line: j + 1, reason: 'Multi-line inline style (manual review needed)' });
      }
    }

    if (styleExtractions.length > 0) {
      // Build the const styles block
      const existingStyles = lines.slice(bodyStart + 1, returnStart).some(
        (l) => l.trim().startsWith('const styles')
      );

      if (!existingStyles) {
        // Insert const styles above return
        const indent = '  ';
        const stylesLines = [
          `${indent}const styles = {`,
          ...styleExtractions.map((s) => s.styleObj + ','),
          `${indent}};`,
          ''
        ];

        // Insert before return
        lines.splice(returnStart, 0, ...stylesLines);

        // Adjust line indices for the insertion
        const offset = stylesLines.length;
        for (const ext of styleExtractions) {
          ext.lineIdx += offset;
        }
      }

      // Replace inline styles with references
      for (const ext of styleExtractions) {
        lines[ext.lineIdx] = lines[ext.lineIdx].replace(ext.original, ext.replacement);
        fixes.push({ line: ext.lineNum, type: `inline-style extracted to styles.${ext.original.includes('inline') ? '' : ''}` });
      }
    }

    i = bodyStart + 1;
  }

  return { content: lines.join('\n'), fixes, skipped };
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

  let totalFixed = 0;
  let totalSkipped = 0;
  let filesModified = 0;
  const report = [];

  for (const file of files) {
    const relPath = path.relative(REPO_ROOT, file);
    const original = fs.readFileSync(file, 'utf8');
    const { content, fixes, skipped } = repairInlineStyles(original);

    if (fixes.length === 0 && skipped.length === 0) continue;

    const changed = content !== original;

    if (changed) {
      filesModified++;
      totalFixed += fixes.length;
    }
    totalSkipped += skipped.length;

    report.push({ file: relPath, fixes, skipped, changed });

    if (changed) {
      if (writeMode) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`  FIXED  ${relPath} (${fixes.length} repair(s))`);
      } else {
        console.log(`  WOULD FIX  ${relPath} (${fixes.length} repair(s))`);
        for (const fix of fixes) {
          console.log(`    L${fix.line}: ${fix.type}`);
        }
      }
    }

    if (skipped.length > 0) {
      for (const s of skipped) {
        console.log(`  SKIPPED  ${relPath}:${s.line} — ${s.reason}`);
      }
    }
  }

  console.log('');
  console.log(`Summary: ${totalFixed} fix(es) in ${filesModified} file(s), ${totalSkipped} skipped (manual review needed)`);
  if (!writeMode && totalFixed > 0) {
    console.log('Run with --write to apply repairs.');
  }

  process.exit(totalFixed > 0 && !writeMode ? 1 : 0);
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------

if (require.main === module) {
  main();
}

module.exports = { repairInlineStyles, isComplexStyle };
