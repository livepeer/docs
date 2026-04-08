#!/usr/bin/env node
/**
 * @script      audit-ai-discoverability
 * @type        audit
 * @concern     maintenance
 * @niche       library
 * @purpose     qa:component-quality
 * @description Audit JSX components for AI discoverability compliance: missing tags on hook-using components, missing companion JSON files.
 * @mode        scan
 * @pipeline    manual > snippets/components (all .jsx) > stdout:report
 * @scope       snippets/components, snippets/data/snapshots
 * @usage       node operations/scripts/audits/components/library/audit-ai-discoverability.js [--json] [--md] [--staged]
 * @policy      —
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO_ROOT = process.cwd();
const COMPONENTS_DIR = path.join(REPO_ROOT, 'snippets', 'components');
const SNAPSHOTS_DIR = path.join(REPO_ROOT, 'snippets', 'data', 'snapshots');

const HOOK_PATTERN = /use(State|Effect|Ref|Callback|Memo)\s*\(/;
const USE_EFFECT_PATTERN = /useEffect\s*\(/;
const FETCH_PATTERN = /fetch\s*\(|\.get\s*\(|\.post\s*\(|axios|api\./;
const JSDOC_BLOCK_PATTERN = /\/\*\*([\s\S]*?)\*\//;
const AI_DISCOVERABILITY_PATTERN = /@aiDiscoverability\s+(\S+)/;
const DATA_SOURCE_PATTERN = /@dataSource\s+(.+)/;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function collectJsxFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectJsxFiles(full));
    } else if (entry.isFile() && entry.name.endsWith('.jsx')) {
      results.push(full);
    }
  }
  return results;
}

function getStagedFiles() {
  try {
    const output = execSync('git diff --cached --name-only --diff-filter=ACMR', {
      cwd: REPO_ROOT,
      encoding: 'utf8'
    });
    return output
      .trim()
      .split('\n')
      .filter(Boolean)
      .map((f) => path.join(REPO_ROOT, f));
  } catch {
    return [];
  }
}

function extractJsDocBlock(source) {
  const match = source.match(JSDOC_BLOCK_PATTERN);
  return match ? match[1] : null;
}

function extractTag(jsDocBody, pattern) {
  if (!jsDocBody) return null;
  const match = jsDocBody.match(pattern);
  return match ? match[1].trim() : null;
}

/**
 * Extract all @component names paired with their @aiDiscoverability values.
 * Handles multi-export files (e.g. DataEmbed.jsx has SolidityEmbed, MarkdownEmbed, PdfEmbed).
 * @param {string} source
 * @returns {Array<{name: string, aiTag: string|null}>}
 */
function extractComponentBlocks(source) {
  const blocks = [];
  const jsdocPattern = /\/\*\*[\s\S]*?\*\//g;
  let match;
  while ((match = jsdocPattern.exec(source)) !== null) {
    const block = match[0];
    const nameMatch = block.match(/@component\s+(\S+)/);
    const aiMatch = block.match(/@aiDiscoverability\s+(\S+)/);
    if (nameMatch) {
      blocks.push({ name: nameMatch[1], aiTag: aiMatch ? aiMatch[1] : null });
    }
  }
  return blocks;
}

// ---------------------------------------------------------------------------
// Violation detection
// ---------------------------------------------------------------------------

function auditFile(filePath) {
  const violations = [];
  const source = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative(REPO_ROOT, filePath);

  const hasHooks = HOOK_PATTERN.test(source);
  const hasUseEffect = USE_EFFECT_PATTERN.test(source);
  const hasFetch = FETCH_PATTERN.test(source);
  const isDataFetching = hasUseEffect && hasFetch;

  // Skip pure components (no hooks at all)
  if (!hasHooks) return violations;

  const jsDocBody = extractJsDocBlock(source);
  const aiTag = extractTag(jsDocBody, AI_DISCOVERABILITY_PATTERN);

  // Rule 1: hooks present but no @aiDiscoverability tag
  if (!aiTag) {
    violations.push({
      file: relPath,
      rule: 1,
      severity: 'ERROR',
      message: 'Missing @aiDiscoverability on hook-using component'
    });
    return violations;
  }

  // Rule 2: snapshot mode requires companion JSON (check per @component export)
  const compBlocks = extractComponentBlocks(source);
  const snapshotComps = compBlocks.filter((c) => c.aiTag === 'snapshot');
  for (const comp of snapshotComps) {
    const jsonFile = path.join(SNAPSHOTS_DIR, `${comp.name}.json`);
    if (!fs.existsSync(jsonFile)) {
      violations.push({
        file: relPath,
        rule: 2,
        severity: 'ERROR',
        message: `Missing companion JSON for snapshot (@component ${comp.name}): expected ${path.relative(REPO_ROOT, jsonFile)}`
      });
    }
  }

  // Rule 3: props-extracted mode — warn if no adjacent -data.json
  if (aiTag === 'props-extracted') {
    const dir = path.dirname(filePath);
    const base = path.basename(filePath, '.jsx');
    const dataJson = path.join(dir, `${base}-data.json`);
    if (!fs.existsSync(dataJson)) {
      violations.push({
        file: relPath,
        rule: 3,
        severity: 'WARNING',
        message: `Missing companion JSON for props-extracted: expected ${path.relative(REPO_ROOT, dataJson)}`
      });
    }
  }

  // Rule 4: stale none on data-fetching component
  if (aiTag === 'none' && isDataFetching) {
    violations.push({
      file: relPath,
      rule: 4,
      severity: 'WARNING',
      message: 'Stale @aiDiscoverability none on data-fetching component'
    });
  }

  return violations;
}

// ---------------------------------------------------------------------------
// Output formatters
// ---------------------------------------------------------------------------

function formatText(violations) {
  if (violations.length === 0) {
    return 'AI discoverability audit: PASS — no violations found.';
  }

  const errors = violations.filter((v) => v.severity === 'ERROR');
  const warnings = violations.filter((v) => v.severity === 'WARNING');
  const lines = [`AI discoverability audit: ${errors.length} error(s), ${warnings.length} warning(s)\n`];

  for (const v of violations) {
    lines.push(`[${v.severity}] ${v.file}`);
    lines.push(`  Rule ${v.rule}: ${v.message}`);
    lines.push('');
  }

  return lines.join('\n');
}

function formatJson(violations) {
  return JSON.stringify(
    {
      _meta: {
        generated: new Date().toISOString(),
        generator: 'operations/scripts/audits/components/library/audit-ai-discoverability.js'
      },
      summary: {
        total: violations.length,
        errors: violations.filter((v) => v.severity === 'ERROR').length,
        warnings: violations.filter((v) => v.severity === 'WARNING').length
      },
      violations
    },
    null,
    2
  );
}

function formatMarkdown(violations) {
  if (violations.length === 0) {
    return '## AI Discoverability Audit\n\nNo violations found.';
  }

  const errors = violations.filter((v) => v.severity === 'ERROR');
  const warnings = violations.filter((v) => v.severity === 'WARNING');
  const lines = [
    '## AI Discoverability Audit',
    '',
    `**${errors.length}** error(s), **${warnings.length}** warning(s)`,
    '',
    '| Severity | File | Rule | Message |',
    '|----------|------|------|---------|'
  ];

  for (const v of violations) {
    lines.push(`| ${v.severity} | \`${v.file}\` | ${v.rule} | ${v.message} |`);
  }

  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const args = { json: false, md: false, staged: false, help: false };

  for (const token of argv) {
    if (token === '--json') args.json = true;
    else if (token === '--md') args.md = true;
    else if (token === '--staged') args.staged = true;
    else if (token === '--help' || token === '-h') args.help = true;
    else {
      console.error(`Unknown argument: ${token}`);
      process.exit(1);
    }
  }

  return args;
}

function usage() {
  console.log(
    [
      'Usage: node operations/scripts/audits/components/library/audit-ai-discoverability.js [options]',
      '',
      'Options:',
      '  --json     Output as JSON',
      '  --md       Output as Markdown table',
      '  --staged   Limit to git-staged files only',
      '  --help     Show this help message'
    ].join('\n')
  );
}

function run(argv = process.argv.slice(2)) {
  const args = parseArgs(argv);

  if (args.help) {
    usage();
    return 0;
  }

  let files = collectJsxFiles(COMPONENTS_DIR);

  if (args.staged) {
    const staged = new Set(getStagedFiles());
    files = files.filter((f) => staged.has(f));
  }

  const violations = [];
  for (const file of files) {
    violations.push(...auditFile(file));
  }

  // Sort: errors first, then warnings, then by file
  violations.sort((a, b) => {
    if (a.severity !== b.severity) return a.severity === 'ERROR' ? -1 : 1;
    return a.file.localeCompare(b.file, 'en', { sensitivity: 'base' });
  });

  if (args.json) {
    console.log(formatJson(violations));
  } else if (args.md) {
    console.log(formatMarkdown(violations));
  } else {
    console.log(formatText(violations));
  }

  const hasErrors = violations.some((v) => v.severity === 'ERROR');
  return hasErrors ? 1 : 0;
}

if (require.main === module) {
  process.exit(run());
}

module.exports = { auditFile, collectJsxFiles, run };
