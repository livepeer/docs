#!/usr/bin/env node
/**
 * @script      audit-component-styles
 * @type        audit
 * @concern     maintenance
 * @niche       library
 * @purpose     qa:component-quality
 * @description Audit JSX components for style pattern violations: inline styles, top-level constants, missing named style objects.
 * @mode        scan
 * @pipeline    manual > snippets/components (all .jsx) > stdout:report
 * @scope       snippets/components
 * @usage       node operations/scripts/audits/components/library/audit-component-styles.js [--json] [--md] [--staged] [--fix-preview]
 * @policy      —
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const REPO_ROOT = process.cwd();
const SCAN_DIR = path.join(REPO_ROOT, 'snippets', 'components');
const GLOB_PATTERN = 'snippets/components/**/*.jsx';

// Violation severity
const SEVERITY = {
  ERROR: 'ERROR',
  WARNING: 'WARNING',
};

// Violation classes
const VIOLATION = {
  INLINE_STYLE: {
    id: 'inline-style-object',
    label: 'Inline style object in JSX',
    severity: SEVERITY.ERROR,
    fix: 'Move the inline style={{ ... }} object into a named `const styles = { ... }` inside the function body, then reference it as style={styles.name}.',
  },
  TOP_LEVEL_CONST: {
    id: 'top-level-constant',
    label: 'Top-level constant outside export function',
    severity: SEVERITY.ERROR,
    fix: 'Move the declaration inside the nearest export function body. Top-level constants outside exports break the Mintlify runtime.',
  },
  MISSING_NAMED_STYLES: {
    id: 'missing-named-styles',
    label: 'Component uses style= but has no named styles object',
    severity: SEVERITY.WARNING,
    fix: 'Add a `const styles = { ... }` object inside the function body that collects all style definitions for this component.',
  },
};

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const jsonOutput = args.includes('--json');
const mdOutput = args.includes('--md');
const staged = args.includes('--staged');
const fixPreview = args.includes('--fix-preview');
const helpFlag = args.includes('--help') || args.includes('-h');

if (helpFlag) {
  console.log([
    'Usage: node operations/scripts/audits/components/library/audit-component-styles.js [options]',
    '',
    'Options:',
    '  --json         Output violations as a JSON array',
    '  --md           Output violations as a Markdown report table',
    '  --staged       Limit scan to git-staged .jsx files only',
    '  --fix-preview  Show remediation guidance for each violation',
    '  --help, -h     Show this help message',
  ].join('\n'));
  process.exit(0);
}

// ---------------------------------------------------------------------------
// File discovery
// ---------------------------------------------------------------------------

/**
 * Recursively walk a directory and return files matching an extension.
 * @param {string} dir - Directory to walk.
 * @param {string} ext - Extension to match (e.g. '.jsx').
 * @returns {string[]} Absolute file paths.
 */
function walkDir(dir, ext) {
  const results = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkDir(full, ext));
    } else if (entry.isFile() && full.endsWith(ext)) {
      results.push(full);
    }
  }
  return results;
}

/**
 * Return the list of .jsx files to audit.
 * @returns {string[]} Absolute paths.
 */
function getFilesToAudit() {
  if (staged) {
    try {
      const raw = execSync('git diff --cached --name-only --diff-filter=ACMR', {
        cwd: REPO_ROOT,
        encoding: 'utf8',
      });
      return raw
        .split('\n')
        .map((l) => l.trim())
        .filter((l) => l.endsWith('.jsx') && l.startsWith('snippets/components/'))
        .map((l) => path.join(REPO_ROOT, l));
    } catch {
      console.error('Failed to read git staged files. Falling back to full scan.');
      return walkDir(SCAN_DIR, '.jsx');
    }
  }
  return walkDir(SCAN_DIR, '.jsx');
}

// ---------------------------------------------------------------------------
// Parsing helpers
// ---------------------------------------------------------------------------

/**
 * Find matching closing brace index for an opening brace at `start`.
 * Respects string literals and template literals but not comments (good enough
 * for the patterns we need to detect in component files).
 * @param {string} src - Source text.
 * @param {number} start - Index of the opening brace.
 * @returns {number} Index of the matching closing brace, or -1.
 */
function findMatchingBrace(src, start) {
  if (src[start] !== '{') return -1;

  let depth = 0;
  let i = start;
  const len = src.length;

  while (i < len) {
    const ch = src[i];

    // Skip string literals
    if (ch === '"' || ch === "'" || ch === '`') {
      const quote = ch;
      i++;
      while (i < len && src[i] !== quote) {
        if (src[i] === '\\') i++; // skip escaped char
        i++;
      }
      i++; // skip closing quote
      continue;
    }

    // Skip single-line comments
    if (ch === '/' && src[i + 1] === '/') {
      while (i < len && src[i] !== '\n') i++;
      continue;
    }

    // Skip multi-line comments
    if (ch === '/' && src[i + 1] === '*') {
      i += 2;
      while (i < len && !(src[i] === '*' && src[i + 1] === '/')) i++;
      i += 2;
      continue;
    }

    if (ch === '{') depth++;
    if (ch === '}') {
      depth--;
      if (depth === 0) return i;
    }
    i++;
  }
  return -1;
}

/**
 * Extract all `export const Name = (...) => { ... };` function boundaries.
 * Returns an array of { name, bodyStart, bodyEnd, body } where bodyStart/bodyEnd
 * are indices into the source string of the function body braces.
 * @param {string} src - File source.
 * @returns {Array<{name: string, bodyStart: number, bodyEnd: number, body: string}>}
 */
function findExportFunctions(src) {
  const results = [];
  // Match: export const Name = ( ... ) => {
  const re = /export\s+const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const name = m[1];
    const braceIndex = src.indexOf('{', m.index + m[0].length - 1);
    const endIndex = findMatchingBrace(src, braceIndex);
    if (endIndex === -1) continue;

    results.push({
      name,
      bodyStart: braceIndex,
      bodyEnd: endIndex,
      body: src.slice(braceIndex, endIndex + 1),
    });
  }
  return results;
}

/**
 * Determine the line number (1-based) for a character index.
 * @param {string} src - Source text.
 * @param {number} index - Character index.
 * @returns {number}
 */
function lineAt(src, index) {
  let line = 1;
  for (let i = 0; i < index && i < src.length; i++) {
    if (src[i] === '\n') line++;
  }
  return line;
}

// ---------------------------------------------------------------------------
// Violation detection
// ---------------------------------------------------------------------------

/**
 * Detect all three violation classes in a single file.
 * @param {string} filePath - Absolute path.
 * @param {string} src - File source.
 * @returns {Array<{file: string, line: number, violation: object, detail: string}>}
 */
function auditFile(filePath, src) {
  const relPath = path.relative(REPO_ROOT, filePath);
  const violations = [];
  const exports = findExportFunctions(src);

  // -----------------------------------------------------------------------
  // Class 1: Inline style objects — style={{ ... }} inside function bodies
  // -----------------------------------------------------------------------
  for (const fn of exports) {
    const inlineRe = /style=\{\{/g;
    let im;
    while ((im = inlineRe.exec(fn.body)) !== null) {
      const absIndex = fn.bodyStart + im.index;
      violations.push({
        file: relPath,
        component: fn.name,
        line: lineAt(src, absIndex),
        violation: VIOLATION.INLINE_STYLE,
        detail: `style={{ ... }} found inside ${fn.name}()`,
      });
    }
  }

  // -----------------------------------------------------------------------
  // Class 2: Top-level const/let/var outside all export function bodies
  // -----------------------------------------------------------------------
  // Strategy: find all const/let/var declarations at module scope.
  // A declaration is "at module scope" if its index is NOT inside any
  // export function body range and is NOT part of the JSDoc header, an
  // import/require, or an export statement.

  const declRe = /^[ \t]*(const|let|var)\s+/gm;
  let dm;
  while ((dm = declRe.exec(src)) !== null) {
    const idx = dm.index;

    // Skip if inside any export function body
    const insideExport = exports.some((fn) => idx >= fn.bodyStart && idx <= fn.bodyEnd);
    if (insideExport) continue;

    // Skip if inside a JSDoc block comment (/** ... */)
    const preceding = src.slice(0, idx);
    const lastBlockOpen = preceding.lastIndexOf('/**');
    const lastBlockClose = preceding.lastIndexOf('*/');
    if (lastBlockOpen > lastBlockClose) continue;

    // Get the full line text for context
    const lineEnd = src.indexOf('\n', idx);
    const lineText = src.slice(idx, lineEnd === -1 ? src.length : lineEnd).trim();

    // Skip require() statements — these are fine at module scope
    if (/require\s*\(/.test(lineText)) continue;

    // Skip lines that are part of export declarations (export const ...)
    if (/^export\s/.test(lineText)) continue;

    // Skip 'use strict' and 'use client' pragma-like const assignments
    // (these are string literals, not real constants — but just in case)
    if (/^(const|let|var)\s+\w+\s*=\s*require/.test(lineText)) continue;

    violations.push({
      file: relPath,
      component: null,
      line: lineAt(src, idx),
      violation: VIOLATION.TOP_LEVEL_CONST,
      detail: `Top-level declaration: ${lineText.length > 80 ? lineText.slice(0, 77) + '...' : lineText}`,
    });
  }

  // -----------------------------------------------------------------------
  // Class 3: Missing named styles const — component uses style= but has
  // no `const styles` inside the function body
  // -----------------------------------------------------------------------
  for (const fn of exports) {
    const usesStyleAttr = /style\s*=/.test(fn.body);
    if (!usesStyleAttr) continue;

    const hasNamedStyles = /const\s+styles\s*=\s*\{/.test(fn.body);
    if (hasNamedStyles) continue;

    violations.push({
      file: relPath,
      component: fn.name,
      line: lineAt(src, fn.bodyStart),
      violation: VIOLATION.MISSING_NAMED_STYLES,
      detail: `${fn.name}() uses style= attributes but has no \`const styles = { ... }\``,
    });
  }

  return violations;
}

// ---------------------------------------------------------------------------
// Output formatters
// ---------------------------------------------------------------------------

/**
 * Format violations as a human-readable summary.
 * @param {Array} violations
 * @returns {string}
 */
function formatHuman(violations) {
  if (violations.length === 0) {
    return 'No style violations found.';
  }

  const lines = [];
  const errors = violations.filter((v) => v.violation.severity === SEVERITY.ERROR);
  const warnings = violations.filter((v) => v.violation.severity === SEVERITY.WARNING);

  lines.push(`Found ${violations.length} violation(s): ${errors.length} error(s), ${warnings.length} warning(s)`);
  lines.push('');

  // Group by file
  const byFile = new Map();
  for (const v of violations) {
    if (!byFile.has(v.file)) byFile.set(v.file, []);
    byFile.get(v.file).push(v);
  }

  for (const [file, fileViolations] of byFile) {
    lines.push(`  ${file}`);
    for (const v of fileViolations) {
      const tag = v.violation.severity === SEVERITY.ERROR ? 'ERROR' : 'WARN ';
      lines.push(`    L${v.line}  [${tag}] ${v.violation.label}`);
      lines.push(`           ${v.detail}`);
      if (fixPreview) {
        lines.push(`           Fix: ${v.violation.fix}`);
      }
    }
    lines.push('');
  }

  return lines.join('\n');
}

/**
 * Format violations as a JSON array.
 * @param {Array} violations
 * @returns {string}
 */
function formatJson(violations) {
  const data = violations.map((v) => ({
    file: v.file,
    component: v.component,
    line: v.line,
    severity: v.violation.severity,
    id: v.violation.id,
    label: v.violation.label,
    detail: v.detail,
    ...(fixPreview ? { fix: v.violation.fix } : {}),
  }));
  return JSON.stringify(data, null, 2);
}

/**
 * Format violations as a Markdown report table.
 * @param {Array} violations
 * @returns {string}
 */
function formatMarkdown(violations) {
  if (violations.length === 0) {
    return '## Component style audit\n\nNo violations found.';
  }

  const errors = violations.filter((v) => v.violation.severity === SEVERITY.ERROR);
  const warnings = violations.filter((v) => v.violation.severity === SEVERITY.WARNING);

  const lines = [
    '## Component style audit',
    '',
    `**${violations.length}** violation(s): **${errors.length}** error(s), **${warnings.length}** warning(s)`,
    '',
    '| Severity | File | Line | Component | Violation | Detail |',
    '|----------|------|------|-----------|-----------|--------|',
  ];

  for (const v of violations) {
    const comp = v.component || '—';
    const detail = v.detail.replace(/\|/g, '\\|');
    lines.push(`| ${v.violation.severity} | \`${v.file}\` | ${v.line} | ${comp} | ${v.violation.label} | ${detail} |`);
  }

  if (fixPreview) {
    lines.push('');
    lines.push('### Remediation');
    lines.push('');
    const seen = new Set();
    for (const v of violations) {
      if (seen.has(v.violation.id)) continue;
      seen.add(v.violation.id);
      lines.push(`- **${v.violation.label}**: ${v.violation.fix}`);
    }
  }

  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function run() {
  const files = getFilesToAudit();

  if (files.length === 0) {
    if (!jsonOutput) {
      console.log(staged ? 'No staged .jsx files to audit.' : 'No .jsx files found in snippets/components/.');
    } else {
      console.log('[]');
    }
    return 0;
  }

  const allViolations = [];

  for (const filePath of files) {
    let src;
    try {
      src = fs.readFileSync(filePath, 'utf8');
    } catch (err) {
      console.error(`Failed to read ${filePath}: ${err.message}`);
      continue;
    }

    // Skip empty files
    if (!src.trim()) continue;

    const fileViolations = auditFile(filePath, src);
    allViolations.push(...fileViolations);
  }

  // Sort: errors first, then warnings, then by file/line
  allViolations.sort((a, b) => {
    const sevOrder = { ERROR: 0, WARNING: 1 };
    const sa = sevOrder[a.violation.severity] ?? 2;
    const sb = sevOrder[b.violation.severity] ?? 2;
    if (sa !== sb) return sa - sb;
    if (a.file !== b.file) return a.file.localeCompare(b.file);
    return a.line - b.line;
  });

  // Output
  if (jsonOutput) {
    console.log(formatJson(allViolations));
  } else if (mdOutput) {
    console.log(formatMarkdown(allViolations));
  } else {
    console.log(formatHuman(allViolations));
  }

  // Exit code: 1 if any violations, 0 otherwise
  return allViolations.length > 0 ? 1 : 0;
}

if (require.main === module) {
  process.exit(run());
}

module.exports = { auditFile, findExportFunctions, findMatchingBrace, run };
