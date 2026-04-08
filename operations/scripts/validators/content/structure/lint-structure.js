#!/usr/bin/env node
/**
 * @script      lint-structure
 * @type        validator
 * @concern     health
 * @niche       structure
 * @purpose     
 * @description Enforce structural rules on MDX content files.
 * @mode        check
 * @pipeline    manual
 * @scope       staged, changed, v2-content, single-file
 * @usage       node operations/scripts/validators/content/structure/lint-structure.js [file] [flags]
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const taxonomy = require(path.resolve(__dirname, '../../../../../tools/lib/docs/frontmatter-taxonomy'));
const {
  isValidPageType,
  isValidPurpose,
  isValidAudience,
  isValidStatus,
  CANONICAL_AUDIENCES
} = taxonomy;

// Valid veracityStatus values — source: v2/orchestrators/_workspace/canonical/checks.mdx §1.8
const CANONICAL_VERACITY_STATUSES = Object.freeze(['verified', 'unverified', 'stale']);

// Valid pageVariant values — source: checks.mdx §1.3
const CANONICAL_PAGE_VARIANTS = Object.freeze([
  'overview',
  'specification',
  'compendium',
  'changelog',
  'knowledge-hub',
  'quickstart',
  'troubleshooting'
]);

const REQUIRED_FRONTMATTER = ['title', 'pageType', 'audience', 'purpose', 'lastVerified'];
const STALE_DAYS = 90;

const HEDGE_NOTE_PHRASES = [
  'is evolving',
  'may change',
  'cannot guarantee',
  'subject to change',
  'check for updates',
  'may not be accurate',
  'use with caution'
];

function readFileListFromEnv() {
  const listPath = String(process.env.LINT_FILE_LIST || '').trim();
  if (!listPath || !fs.existsSync(listPath)) {
    return [];
  }

  return fs
    .readFileSync(listPath, 'utf8')
    .split('\n')
    .map((filePath) => filePath.trim())
    .filter(Boolean)
    .filter((filePath) => /\.(md|mdx)$/i.test(filePath))
    .filter((filePath) => fs.existsSync(filePath));
}

function getFiles() {
  const envFiles = readFileListFromEnv();
  if (envFiles.length > 0) {
    return envFiles;
  }

  const args = process.argv.slice(2);

  // --files a.mdx,b.mdx (explicit file list — used by post-remediation-verify)
  const filesIdx = args.indexOf('--files');
  if (filesIdx >= 0 && args[filesIdx + 1]) {
    return args[filesIdx + 1].split(',').map((f) => f.trim()).filter(Boolean).filter((f) => fs.existsSync(f));
  }
  const filesEq = args.find((a) => a.startsWith('--files='));
  if (filesEq) {
    return filesEq.slice('--files='.length).split(',').map((f) => f.trim()).filter(Boolean).filter((f) => fs.existsSync(f));
  }

  if (args.includes('--changed-files')) {
    const diff = execSync('git diff --cached --name-only --diff-filter=ACM', {
      encoding: 'utf8'
    });
    return diff
      .split('\n')
      .filter((filePath) => filePath.endsWith('.mdx') || filePath.endsWith('.md'))
      .filter((filePath) => fs.existsSync(filePath));
  }

  const target = args.find((arg) => !arg.startsWith('--'));
  if (target && fs.existsSync(target)) return [target];
  return [];
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const frontmatter = {};
  match[1].split('\n').forEach((line) => {
    const [key, ...rest] = line.split(':');
    if (key && rest.length) {
      frontmatter[key.trim()] = rest.join(':').trim().replace(/['"]/g, '');
    }
  });
  return frontmatter;
}

function getEnforcementDepth(pageType) {
  const normalized = taxonomy.normalizePageType(pageType);
  const depths = {
    guide: 'full',
    concept: 'structural',
    reference: 'tier1-only',
    instruction: 'full',
    navigation: 'structural'
  };
  return depths[normalized.canonical || String(pageType || '').trim().toLowerCase()] || 'full';
}

function checkFrontmatter(content, filePath) {
  const results = [];
  const frontmatter = parseFrontmatter(content);

  REQUIRED_FRONTMATTER.forEach((field) => {
    if (!frontmatter[field]) {
      results.push({
        tier: 1,
        file: filePath,
        line: 1,
        id: 'MISSING_FRONTMATTER',
        label: `Missing required frontmatter field: "${field}"`,
        fix: `Add "${field}:" to the page frontmatter.`,
        match: field
      });
    }
  });

  if (frontmatter.lastVerified) {
    const verified = new Date(frontmatter.lastVerified);
    const now = new Date();
    const daysDiff = (now - verified) / (1000 * 60 * 60 * 24);
    if (daysDiff > STALE_DAYS) {
      results.push({
        tier: 2,
        file: filePath,
        line: 1,
        id: 'STALE_LAST_VERIFIED',
        label: `lastVerified is ${Math.floor(daysDiff)} days old (threshold: ${STALE_DAYS})`,
        fix: 'Update lastVerified after content review or SME confirmation.'
      });
    }
  }

  // Fix 1: Value validation — WARNING (tier 2), does not block CI
  // Checks pageType, audience, and purpose against canonical enum lists from frontmatter-taxonomy.js.
  if (frontmatter.pageType && !isValidPageType(frontmatter.pageType, { allowDeprecatedAliases: false })) {
    results.push({
      tier: 2,
      file: filePath,
      line: 1,
      id: 'INVALID_PAGE_TYPE',
      label: `pageType "${frontmatter.pageType}" is not a canonical value`,
      fix: `"${frontmatter.pageType}" is deprecated. Migrate to one of: ${taxonomy.describeCanonicalPageTypes()}. Check Frameworks.mdx §1.1 for the pageType + pageVariant required.`,
      match: frontmatter.pageType
    });
  }

  if (frontmatter.audience && !isValidAudience(frontmatter.audience)) {
    results.push({
      tier: 2,
      file: filePath,
      line: 1,
      id: 'INVALID_AUDIENCE',
      label: `audience "${frontmatter.audience}" is not a canonical token`,
      fix: `Use one of: ${taxonomy.describeCanonicalAudiences()}.`,
      match: frontmatter.audience
    });
  }

  if (frontmatter.purpose && !isValidPurpose(frontmatter.purpose, { allowDeprecatedAliases: false })) {
    results.push({
      tier: 2,
      file: filePath,
      line: 1,
      id: 'INVALID_PURPOSE',
      label: `purpose "${frontmatter.purpose}" is not a canonical value`,
      fix: `"${frontmatter.purpose}" is deprecated. Migrate to one of: ${taxonomy.describeCanonicalPurposes()}.`,
      match: frontmatter.purpose
    });
  }

  if (frontmatter.status && !isValidStatus(frontmatter.status)) {
    results.push({
      tier: 2,
      file: filePath,
      line: 1,
      id: 'INVALID_STATUS',
      label: `status "${frontmatter.status}" is not a canonical value`,
      fix: `Use one of: ${taxonomy.describeCanonicalPageStatuses()}.`,
      match: frontmatter.status
    });
  }

  if (!frontmatter.status) {
    results.push({
      tier: 2,
      file: filePath,
      line: 1,
      id: 'MISSING_STATUS',
      label: 'Missing status field',
      fix: 'Add a canonical status value to frontmatter.'
    });
  }

  if (frontmatter.pageVariant && !CANONICAL_PAGE_VARIANTS.includes(frontmatter.pageVariant.toLowerCase())) {
    results.push({
      tier: 2,
      file: filePath,
      line: 1,
      id: 'INVALID_PAGE_VARIANT',
      label: `pageVariant "${frontmatter.pageVariant}" is not a canonical value`,
      fix: `Use one of: ${CANONICAL_PAGE_VARIANTS.join(', ')}.`,
      match: frontmatter.pageVariant
    });
  }

  // Fix 3: veracityStatus validation — INFO (tier 3), never blocks CI
  // Rule: "status: current" requires "veracityStatus: verified" per checks.mdx §1.8
  if (frontmatter.veracityStatus && !CANONICAL_VERACITY_STATUSES.includes(frontmatter.veracityStatus.toLowerCase())) {
    results.push({
      tier: 3,
      file: filePath,
      line: 1,
      id: 'INVALID_VERACITY_STATUS',
      label: `veracityStatus "${frontmatter.veracityStatus}" is not a valid value`,
      fix: `Use one of: ${CANONICAL_VERACITY_STATUSES.join(', ')}.`,
      match: frontmatter.veracityStatus
    });
  }

  if (frontmatter.status === 'current' && !frontmatter.veracityStatus) {
    // "status: current" requires "veracityStatus: verified" per checks.mdx §1.8
    results.push({
      tier: 3,
      file: filePath,
      line: 1,
      id: 'MISSING_VERACITY_STATUS',
      label: 'status is "current" but veracityStatus is not set',
      fix: 'Add veracityStatus: verified (or unverified/stale) to frontmatter. See checks.mdx §1.8.'
    });
  }

  if (filePath.includes('/x-deprecated/') && String(frontmatter.status || '').trim().toLowerCase() !== 'deprecated') {
    results.push({
      tier: 2,
      file: filePath,
      line: 1,
      id: 'DEPRECATED_PATH_STATUS_MISMATCH',
      label: 'Page is under x-deprecated but status is not "deprecated"',
      fix: 'Set status: deprecated for authored pages under x-deprecated/.'
    });
  }

  return results;
}

function checkReviewFlags(content, filePath) {
  const errors = [];
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    if (/\{\/\*\s*REVIEW:/i.test(line)) {
      errors.push({
        tier: 1,
        file: filePath,
        line: index + 1,
        id: 'REVIEW_FLAG_RENDERED',
        label: 'Unresolved REVIEW flag in rendered content',
        fix: 'Resolve the REVIEW item or move the flag to a JSX comment outside the rendered tree.',
        text: line.trim().slice(0, 80)
      });
    }
  });
  return errors;
}

function checkEmptyTableCells(content, filePath) {
  const errors = [];
  const lines = content.split('\n');
  let inDecisionTable = false;
  let decisionTableStartLine = 0;

  lines.forEach((line, index) => {
    if (/^#+\s.*(decision|matrix|path|choose|select)/i.test(line)) {
      inDecisionTable = true;
      decisionTableStartLine = index;
    }
    if (inDecisionTable && index - decisionTableStartLine > 30) {
      inDecisionTable = false;
    }
    if (inDecisionTable) {
      if (
        /<TableCell>\s*<\/TableCell>/.test(line) ||
        /<TableCell>\s*\{\/\*[^*]*\*\/\}\s*<\/TableCell>/.test(line)
      ) {
        errors.push({
          tier: 1,
          file: filePath,
          line: index + 1,
          id: 'EMPTY_DECISION_CELL',
          label: 'Empty cell in decision table — incomplete decision aid',
          fix: 'Fill the cell or block merge until verified.',
          text: line.trim().slice(0, 80)
        });
      }
    }
  });
  return errors;
}

function checkAccordionUrls(content, filePath) {
  const warnings = [];
  const lines = content.split('\n');
  let inAccordion = false;
  const accordionUrls = [];
  const bodyUrls = [];

  lines.forEach((line, index) => {
    if (/<Accordion\b/i.test(line)) inAccordion = true;
    if (/<\/Accordion>/i.test(line)) inAccordion = false;

    const urlMatch = line.match(/href="([^"]+)"|https?:\/\/[^\s"')]+/g);
    if (urlMatch) {
      urlMatch.forEach((url) => {
        const cleaned = url.replace(/href="|"/g, '');
        if (inAccordion) {
          accordionUrls.push({ url: cleaned, line: index + 1 });
        } else {
          bodyUrls.push(cleaned);
        }
      });
    }
  });

  accordionUrls.forEach(({ url, line }) => {
    const inBody = bodyUrls.some((bodyUrl) => bodyUrl.includes(url) || url.includes(bodyUrl));
    if (!inBody && url.startsWith('http')) {
      warnings.push({
        tier: 2,
        file: filePath,
        line,
        id: 'ACCORDION_ONLY_URL',
        label: 'URL only inside Accordion — may be a primary action gated behind interaction',
        fix: 'If this is a primary action URL, add it to body copy above the accordion.',
        text: url.slice(0, 80)
      });
    }
  });
  return warnings;
}

function checkHedgeNotes(content, filePath) {
  const warnings = [];
  const lines = content.split('\n');
  let inNote = false;
  let noteLines = [];
  let noteStartLine = 0;

  lines.forEach((line, index) => {
    if (/<Note>/i.test(line)) {
      inNote = true;
      noteStartLine = index + 1;
      noteLines = [];
    }
    if (inNote) noteLines.push(line);
    if (/<\/Note>/i.test(line) && inNote) {
      inNote = false;
      const noteContent = noteLines.join(' ').toLowerCase();
      HEDGE_NOTE_PHRASES.forEach((phrase) => {
        if (noteContent.includes(phrase)) {
          warnings.push({
            tier: 2,
            file: filePath,
            line: noteStartLine,
            id: 'HEDGE_NOTE',
            label: `Note component contains hedge language: "${phrase}"`,
            fix: 'Replace with a forward-pointing statement or remove the Note.',
            text: noteLines[1] ? noteLines[1].trim().slice(0, 80) : ''
          });
        }
      });
    }
  });
  return warnings;
}

function run() {
  const args = process.argv.slice(2);
  const warnOnly = args.includes('--warn-only');
  const files = getFiles();

  if (files.length === 0) {
    console.log('lint-structure: no files to check.');
    process.exit(0);
  }

  let tier1Count = 0;
  let tier2Count = 0;
  let tier3Count = 0;

  files.forEach((filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const frontmatter = parseFrontmatter(content);
    const depth = getEnforcementDepth(frontmatter.pageType);

    const allResults = [
      ...checkFrontmatter(content, filePath),
      ...checkReviewFlags(content, filePath),
      ...(depth !== 'tier1-only' ? checkEmptyTableCells(content, filePath) : []),
      ...(depth === 'full' ? checkAccordionUrls(content, filePath) : []),
      ...(depth === 'full' ? checkHedgeNotes(content, filePath) : [])
    ];

    const tier1 = allResults.filter((result) => result.tier === 1);
    const tier2 = allResults.filter((result) => result.tier === 2);
    const tier3 = allResults.filter((result) => result.tier === 3);

    tier1Count += tier1.length;
    tier2Count += tier2.length;
    tier3Count += tier3.length;

    if (tier1.length > 0) {
      console.error(`\n❌  ${filePath} — ${tier1.length} BLOCKING structural error(s):\n`);
      tier1.forEach((result) => {
        console.error(`  [L${result.line}] ${result.id}: ${result.label}`);
        console.error(`        Fix: ${result.fix}`);
        if (result.text) console.error(`        → "${result.text}"`);
      });
    }

    if (tier2.length > 0) {
      console.warn(`\n⚠️   ${filePath} — ${tier2.length} structural warning(s):\n`);
      tier2.forEach((result) => {
        console.warn(`  [L${result.line}] ${result.id}: ${result.label}`);
        console.warn(`        Fix: ${result.fix}`);
        if (result.text) console.warn(`        → "${result.text}"`);
      });
    }

    // Tier 3 = INFO — informational only, never affects exit code
    if (tier3.length > 0) {
      console.log(`\nℹ️   ${filePath} — ${tier3.length} info notice(s):\n`);
      tier3.forEach((result) => {
        console.log(`  [L${result.line}] ${result.id}: ${result.label}`);
        console.log(`        Fix: ${result.fix}`);
        if (result.text) console.log(`        → "${result.text}"`);
      });
    }
  });

  console.log(
    `\nlint-structure: ${tier1Count} blocking, ${tier2Count} warnings, ${tier3Count} info across ${files.length} file(s).`
  );

  if (tier1Count > 0 && !warnOnly) {
    console.error('\nMerge blocked. Resolve structural errors before re-submitting.');
    process.exit(1);
  }

  process.exit(0);
}

if (require.main === module) {
  run();
}

module.exports = {
  REQUIRED_FRONTMATTER,
  STALE_DAYS,
  HEDGE_NOTE_PHRASES,
  CANONICAL_AUDIENCES,
  CANONICAL_PAGE_VARIANTS,
  CANONICAL_VERACITY_STATUSES,
  checkAccordionUrls,
  checkEmptyTableCells,
  checkFrontmatter,
  checkHedgeNotes,
  checkReviewFlags,
  getEnforcementDepth,
  getFiles,
  parseFrontmatter,
  run
};
