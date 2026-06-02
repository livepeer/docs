#!/usr/bin/env node
/**
 * @script      repair-divider-before-related
 * @type        remediator
 * @concern     maintenance
 * @niche       library
 * @purpose     Insert <CustomDivider /> before "## Related" / "## Related pages" headings on v2 MDX pages — pairs with check-component-props.js rule prop-divider-missing-before-related
 * @description Reads target MDX, scans for "## Related" / "## Related pages" headings, and inserts a <CustomDivider /> on a blank line above each heading that lacks a divider in the preceding 4 non-empty lines. Idempotent. Skips frontmatter and code blocks. Per D-GOV-03 supports --dry-run / --write / --verify.
 * @mode        repair
 * @pipeline    P3 (PR preview), P5/P6 (scheduled write), manual
 * @scope       v2 MDX pages with a Related-pages section
 * @usage       node operations/scripts/remediators/components/library/repair-divider-before-related.js [--dry-run|--write] [--verify] [--files <paths>|--staged|--full]
 * @policy      D-GOV-03 (paired remediator for prop-divider-missing-before-related)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { atomicWrite } = require('../../../../../tools/lib/bootstrap/safe-io');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');
const V2_DIR = path.join(REPO_ROOT, 'v2');
const SKIP_V2_DIRS = new Set(['_workspace', 'x-archive', 'x-deprecated', 'cn', 'es', 'fr', 'internal']);

// Match the validator's looser pattern: any "## Related ..." heading (Blog Posts, Resources, Pages, etc.)
const RELATED_HEADING_RE = /^##\s+related\b/i;
const DIVIDER_RE = /^<CustomDivider\b/;
const LOOKBACK_LINES = 2; // aligned with check-component-props.js: divider within 2 nearest non-empty lines
const INSERT_LINE = '<CustomDivider />';

function parseArgs(argv) {
  const args = { dryRun: false, write: false, verify: false, files: null, staged: false, full: false };
  for (let i = 0; i < argv.length; i += 1) {
    const t = argv[i];
    if (t === '--dry-run') args.dryRun = true;
    else if (t === '--write') args.write = true;
    else if (t === '--verify') args.verify = true;
    else if (t === '--staged') args.staged = true;
    else if (t === '--full') args.full = true;
    else if (t === '--files') { args.files = argv[i + 1]; i += 1; }
  }
  if (!args.dryRun && !args.write) args.dryRun = true;
  return args;
}

function collectFiles(args) {
  if (args.files) {
    return args.files.split(',').map((f) => f.trim()).filter(Boolean).map((f) => path.isAbsolute(f) ? f : path.join(REPO_ROOT, f)).filter((f) => fs.existsSync(f));
  }
  if (args.staged) {
    try {
      const out = execSync('git diff --cached --name-only --diff-filter=ACMRT', { cwd: REPO_ROOT, encoding: 'utf8' });
      return out.split('\n').map((f) => f.trim()).filter((f) => f && f.startsWith('v2/') && f.endsWith('.mdx')).map((f) => path.join(REPO_ROOT, f)).filter((f) => fs.existsSync(f));
    } catch { return []; }
  }
  if (args.full) {
    const files = [];
    const walk = (dir) => {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        if (e.isDirectory()) {
          if (SKIP_V2_DIRS.has(e.name)) continue;
          walk(path.join(dir, e.name));
        } else if (e.name.endsWith('.mdx')) {
          files.push(path.join(dir, e.name));
        }
      }
    };
    if (fs.existsSync(V2_DIR)) walk(V2_DIR);
    return files;
  }
  return [];
}

// Build zone map so we don't accidentally match "## Related" inside frontmatter or code fence.
function buildSkipMap(lines) {
  const skip = new Array(lines.length).fill(false);
  let inFrontmatter = false;
  let fmCount = 0;
  let inFence = false;
  let inJsxComment = false;
  for (let i = 0; i < lines.length; i += 1) {
    const t = lines[i].trim();
    if (t === '---' && fmCount < 2) {
      fmCount += 1;
      inFrontmatter = fmCount === 1;
      skip[i] = true;
      if (fmCount === 2) inFrontmatter = false;
      continue;
    }
    if (inFrontmatter) { skip[i] = true; continue; }
    if (inJsxComment) {
      skip[i] = true;
      if (t.includes('*/}')) inJsxComment = false;
      continue;
    }
    if (/^```/.test(t)) {
      skip[i] = true;
      inFence = !inFence;
      continue;
    }
    if (inFence) { skip[i] = true; continue; }
    // JSX comment open. If it doesn't close on the same line, enter multi-line state.
    if (t.includes('{/*')) {
      skip[i] = true;
      if (!t.includes('*/}')) inJsxComment = true;
      continue;
    }
  }
  return skip;
}

function findInsertions(content) {
  const lines = content.split('\n');
  const skip = buildSkipMap(lines);
  const insertions = []; // line indices where we should insert BEFORE
  for (let i = 0; i < lines.length; i += 1) {
    if (skip[i]) continue;
    if (!RELATED_HEADING_RE.test(lines[i].trim())) continue;
    // Look back up to LOOKBACK_LINES non-empty, non-skipped lines for a divider.
    // Skipped lines (frontmatter, code fences, JSX comments) don't count — a divider
    // inside a {/* ... */} comment is not an active divider.
    let dividerFound = false;
    let nonEmptySeen = 0;
    for (let j = i - 1; j >= 0 && nonEmptySeen < LOOKBACK_LINES; j -= 1) {
      if (skip[j]) continue;
      const trimmed = lines[j].trim();
      if (!trimmed) continue;
      nonEmptySeen += 1;
      if (DIVIDER_RE.test(trimmed)) { dividerFound = true; break; }
    }
    if (!dividerFound) insertions.push(i);
  }
  return { lines, insertions };
}

function applyInsertions(lines, insertions) {
  // Insert in reverse so earlier indices stay valid.
  const out = [...lines];
  for (let k = insertions.length - 1; k >= 0; k -= 1) {
    const headingIdx = insertions[k];
    // Insert divider + blank line before heading. If the line immediately above is already
    // blank, don't add an extra blank.
    const prevBlank = headingIdx > 0 && out[headingIdx - 1].trim() === '';
    const block = prevBlank ? [INSERT_LINE, ''] : ['', INSERT_LINE, ''];
    out.splice(headingIdx, 0, ...block);
  }
  return out.join('\n');
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const files = collectFiles(args);
  if (files.length === 0) {
    console.log('repair-divider-before-related: no target files (use --files, --staged, or --full).');
    process.exit(0);
  }

  let touchedCount = 0;
  let totalInserts = 0;
  const touched = [];

  for (const abs of files) {
    const rel = path.relative(REPO_ROOT, abs);
    const original = fs.readFileSync(abs, 'utf8');
    const { lines, insertions } = findInsertions(original);
    if (insertions.length === 0) continue;
    touchedCount += 1;
    totalInserts += insertions.length;
    const updated = applyInsertions(lines, insertions);
    if (args.write) {
      atomicWrite(abs, updated);
      touched.push({ rel, abs, original, insertions: insertions.length });
      console.log(`✓ ${rel}: ${insertions.length} divider(s) inserted`);
    } else {
      console.log(`would insert ${insertions.length} divider(s) in ${rel} (at lines: ${insertions.map((i) => i + 1).join(', ')})`);
    }
  }

  console.log('');
  console.log(`repair-divider-before-related: ${args.write ? 'applied' : 'previewed'} ${totalInserts} insertion(s) across ${touchedCount} file(s).`);

  if (args.write && args.verify && touched.length > 0) {
    // Self-verify: re-scan each touched file. If any still has a missing divider, revert that file.
    let reverted = 0;
    for (const t of touched) {
      const current = fs.readFileSync(t.abs, 'utf8');
      const { insertions: remaining } = findInsertions(current);
      if (remaining.length > 0) {
        atomicWrite(t.abs, t.original);
        reverted += 1;
        console.log(`reverted: ${t.rel} (validator still flagged it after repair)`);
      }
    }
    console.log(`verify: reverted ${reverted} regressed file(s).`);
  }

  process.exit(0);
}

main();
