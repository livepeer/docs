#!/usr/bin/env node
/**
 * @script      repair-divider-opening
 * @type        remediator
 * @concern     maintenance
 * @niche       library
 * @purpose     Insert an opening <CustomDivider /> on v2 pages whose first content element is a markdown heading — pairs with check-component-props.js rule prop-divider-missing-opening
 * @description Targets ONLY heading-first pages (the first non-empty, non-import content line after frontmatter is a # / ## / ### heading) with no preceding divider. Inserts <CustomDivider /> directly above that heading. Deliberately skips prose-first / intro-callout-first pages: the divider placement there is a judgement call (top vs. after a multi-line intro) and is left for manual review. Skips single-component mounts. Per D-GOV-03 supports --dry-run / --write / --verify.
 * @mode        repair
 * @pipeline    P3 (PR preview), P5/P6 (scheduled write), manual
 * @scope       v2 MDX pages whose first content element is a markdown heading
 * @usage       node operations/scripts/remediators/components/library/repair-divider-opening.js [--dry-run|--write] [--verify] [--files <paths>|--staged|--full]
 * @policy      D-GOV-03 (paired remediator for prop-divider-missing-opening)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { atomicWrite } = require('../../../../../tools/lib/bootstrap/safe-io');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');
const V2_DIR = path.join(REPO_ROOT, 'v2');
const SKIP_V2_DIRS = new Set(['_workspace', 'x-archive', 'x-deprecated', 'cn', 'es', 'fr', 'internal']);
// Partial / fragment locations: these .mdx are imported into a parent page, not standalone
// routes. The opening-divider rule does not apply (a divider would land inside the parent's
// layout, e.g. at the top of each tab panel). Excluded from both the remediator and validator.
const PARTIAL_PATH_RE = /\/(custom\/views|composables|groups|stubs|components)\//;

const HEADING_RE = /^#{1,3}\s/;
const DIVIDER_RE = /^<CustomDivider\b/;
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

// Returns the 0-based line index of the first heading to insert before, or -1 if this
// page is not a heading-first page (or already has an opening divider).
function findOpeningHeading(content) {
  const lines = content.split('\n');
  let fmCount = 0;
  let inFrontmatter = false;
  let inFence = false;
  let inJsxComment = false;
  let firstContentIsHeading = null; // null = not yet determined

  for (let i = 0; i < lines.length; i += 1) {
    const t = lines[i].trim();

    if (t === '---' && fmCount < 2) {
      fmCount += 1;
      inFrontmatter = fmCount === 1;
      if (fmCount === 2) inFrontmatter = false;
      continue;
    }
    if (inFrontmatter) continue;
    if (inJsxComment) { if (t.includes('*/}')) inJsxComment = false; continue; }
    if (/^```/.test(t)) { inFence = !inFence; continue; }
    if (inFence) continue;
    if (t.includes('{/*')) { if (!t.includes('*/}')) inJsxComment = true; continue; }
    if (/^import\b/.test(t) || /^"import\b/.test(t) || /^export\b/.test(t)) continue;
    if (!t) continue;

    // First real content line.
    if (firstContentIsHeading === null) {
      firstContentIsHeading = HEADING_RE.test(t);
      // If the first content is already a divider, page is fine — bail.
      if (DIVIDER_RE.test(t)) return -1;
      // Only heading-first pages are in scope.
      if (!firstContentIsHeading) return -1;
      return i; // insert before this heading line
    }
  }
  return -1;
}

function applyInsertion(content, headingIdx) {
  const lines = content.split('\n');
  const prevBlank = headingIdx > 0 && lines[headingIdx - 1].trim() === '';
  const block = prevBlank ? [INSERT_LINE, ''] : ['', INSERT_LINE, ''];
  lines.splice(headingIdx, 0, ...block);
  return lines.join('\n');
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const files = collectFiles(args);
  if (files.length === 0) {
    console.log('repair-divider-opening: no target files (use --files, --staged, or --full).');
    process.exit(0);
  }

  let touchedCount = 0;
  const touched = [];

  let skippedNoImport = 0;
  for (const abs of files) {
    const rel = path.relative(REPO_ROOT, abs);
    if (PARTIAL_PATH_RE.test('/' + rel.split(path.sep).join('/'))) continue; // skip imported partials
    const original = fs.readFileSync(abs, 'utf8');
    const headingIdx = findOpeningHeading(original);
    if (headingIdx === -1) continue;
    // Safety: only insert <CustomDivider /> on pages that already import it. Pages without
    // the import are either missing it (would need an import injected — out of scope) or are
    // fragment/partial files included into a parent (composables/, custom/views/, stubs/) that
    // must not gain their own opening divider. Both are left for manual review.
    if (!/import[^\n]*\bCustomDivider\b|\bCustomDivider\b[^\n]*from/.test(original)) {
      skippedNoImport += 1;
      continue;
    }
    touchedCount += 1;
    const updated = applyInsertion(original, headingIdx);
    if (args.write) {
      atomicWrite(abs, updated);
      touched.push({ rel, abs, original });
      console.log(`✓ ${rel}: opening <CustomDivider /> inserted before line ${headingIdx + 1}`);
    } else {
      console.log(`would insert opening divider in ${rel} (before line ${headingIdx + 1})`);
    }
  }

  console.log('');
  console.log(`repair-divider-opening: ${args.write ? 'applied' : 'previewed'} ${touchedCount} insertion(s) (heading-first pages only).`);
  if (skippedNoImport > 0) {
    console.log(`skipped ${skippedNoImport} heading-first page(s) that do not import CustomDivider (manual review — needs import or is a partial).`);
  }

  if (args.write && args.verify && touched.length > 0) {
    let reverted = 0;
    for (const t of touched) {
      const current = fs.readFileSync(t.abs, 'utf8');
      if (findOpeningHeading(current) !== -1) {
        atomicWrite(t.abs, t.original);
        reverted += 1;
        console.log(`reverted: ${t.rel} (still flagged after repair)`);
      }
    }
    console.log(`verify: reverted ${reverted} regressed file(s).`);
  }

  process.exit(0);
}

main();
