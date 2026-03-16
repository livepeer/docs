#!/usr/bin/env node
/**
 * @script            repair-component-metadata
 * @category          remediator
 * @purpose           governance:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R10
 * @purpose-statement Auto-repairs derived JSDoc metadata fields from repo state. Safe fields only. Mirrors AUDIT-00 --fix pattern for components.
 * @pipeline          P1, P5, P6, indirect
 * @usage             node tools/scripts/remediators/components/repair-component-metadata.js [--dry-run] [--fix] [--staged]
 */

const fs = require('fs');
const path = require('path');
const {
  REPO_ROOT,
  buildComponentUsageSummary,
  collectGovernedExportCodeSegments,
  compactWhitespace,
  deriveBreakingChangeRisk,
  extractExports,
  getCategoryFromPath,
  getComponentFiles,
  getLastMeaningfulChange,
  getStagedComponentFiles,
  parseJSDocBlock,
  replaceRange,
  scanMDXImports,
  serializeCsvField,
  updateJSDocTags,
  validateGovernanceFields
} = require('../../../lib/component-governance-utils');

const SAFE_FIELDS = new Set([
  'component',
  'category',
  'usedIn',
  'breakingChangeRisk',
  'lastMeaningfulChange'
]);

function printHelp() {
  console.log(
    [
      'Usage:',
      '  node tools/scripts/remediators/components/repair-component-metadata.js [--dry-run|--fix] [--staged]',
      '',
      'Modes:',
      '  --dry-run   Report safe metadata repairs without writing files (default).',
      '  --fix       Apply safe metadata repairs.',
      '',
      'Scope:',
      '  --staged    Limit processing to staged component files.',
      '',
      'Safety:',
      '  - Repairs only @usedIn, @lastMeaningfulChange, @breakingChangeRisk, @component, and @category.',
      '  - Reports all non-derivable metadata problems as NEEDS_HUMAN.',
      '  - Verifies export code segments are byte-identical before writing.'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    mode: 'dry-run',
    staged: false,
    help: false
  };

  let explicitModeCount = 0;

  argv.forEach((token) => {
    if (token === '--help' || token === '-h') {
      args.help = true;
      return;
    }
    if (token === '--dry-run') {
      args.mode = 'dry-run';
      explicitModeCount += 1;
      return;
    }
    if (token === '--fix') {
      args.mode = 'fix';
      explicitModeCount += 1;
      return;
    }
    if (token === '--staged') {
      args.staged = true;
      return;
    }
    throw new Error(`Unknown argument: ${token}`);
  });

  if (explicitModeCount > 1) {
    throw new Error('Choose only one mode: --dry-run or --fix');
  }

  return args;
}

function isSafeValidationIssue(message) {
  const text = String(message || '');
  return (
    /@component\b/.test(text) ||
    /@category\b/.test(text) ||
    /@usedIn\b/.test(text) ||
    /@breakingChangeRisk\b/.test(text) ||
    /@lastMeaningfulChange\b/.test(text)
  );
}

function compareSegmentMaps(beforeSegments, afterSegments) {
  const before = new Map(beforeSegments.map((segment) => [segment.name, segment.code]));
  const after = new Map(afterSegments.map((segment) => [segment.name, segment.code]));

  if (before.size !== after.size) return false;
  for (const [name, code] of before.entries()) {
    if (!after.has(name) || after.get(name) !== code) {
      return false;
    }
  }

  return true;
}

function formatChangeLabel(field) {
  return `@${field}`;
}

function resolveLastMeaningfulChange(filePath, currentValue) {
  try {
    const derived = compactWhitespace(getLastMeaningfulChange(filePath));
    if (derived) return derived;
  } catch (_error) {
    // Fall through for new files with no committed history.
  }

  return compactWhitespace(currentValue) || new Date().toISOString().slice(0, 10);
}

function collectFiles(args) {
  return args.staged ? getStagedComponentFiles() : getComponentFiles();
}

function run(options = {}) {
  const args = options.args || parseArgs([]);
  const files = collectFiles(args);
  const importMap = scanMDXImports('v2/**/*.mdx', { publishedOnly: true });
  const repairs = [];
  const humanIssues = [];
  let filesModified = 0;

  files.forEach((file) => {
    const originalContent = fs.readFileSync(file.absolutePath, 'utf8');
    const beforeSegments = collectGovernedExportCodeSegments(originalContent);
    const fileReplacements = [];

    extractExports(file.displayPath).forEach((entry) => {
      if (!entry.jsDocBlock || !entry.jsDocRange) return;

      const jsDoc = parseJSDocBlock(entry.jsDocBlock);
      const validation = validateGovernanceFields(jsDoc, {
        exportName: entry.name,
        filePath: entry.filePath,
        props: entry.props
      });

      [...validation.errors, ...validation.warnings].forEach((message) => {
        if (isSafeValidationIssue(message)) return;
        humanIssues.push({
          type: 'NEEDS_HUMAN',
          file: file.displayPath,
          exportName: entry.name,
          message
        });
      });

      const usage = buildComponentUsageSummary(importMap, entry.name);
      const desired = {
        component: entry.name,
        category: getCategoryFromPath(file.displayPath),
        usedIn: serializeCsvField(usage.englishCanonicalPages),
        breakingChangeRisk: deriveBreakingChangeRisk(usage.englishCanonicalPages.length),
        lastMeaningfulChange: resolveLastMeaningfulChange(file.displayPath, jsDoc.lastMeaningfulChange)
      };

      const current = {
        component: compactWhitespace(jsDoc.component),
        category: compactWhitespace(jsDoc.category),
        usedIn: serializeCsvField(jsDoc.usedIn, { publishedOnly: true }),
        breakingChangeRisk: compactWhitespace(jsDoc.breakingChangeRisk),
        lastMeaningfulChange: compactWhitespace(jsDoc.lastMeaningfulChange)
      };

      const fieldChanges = Object.entries(desired)
        .filter(([field, value]) => SAFE_FIELDS.has(field) && compactWhitespace(current[field]) !== compactWhitespace(value))
        .reduce((accumulator, [field, value]) => {
          accumulator[field] = value;
          return accumulator;
        }, {});

      if (Object.keys(fieldChanges).length === 0) return;

      repairs.push(
        ...Object.entries(fieldChanges).map(([field, value]) => ({
          file: file.displayPath,
          exportName: entry.name,
          field,
          before: current[field] || 'none',
          after: value || 'none'
        }))
      );

      fileReplacements.push({
        range: entry.jsDocRange,
        nextBlock: updateJSDocTags(entry.jsDocBlock, fieldChanges)
      });
    });

    if (args.mode !== 'fix' || fileReplacements.length === 0) {
      return;
    }

    let nextContent = originalContent;
    fileReplacements
      .sort((left, right) => right.range.start - left.range.start)
      .forEach((replacement) => {
        nextContent = replaceRange(
          nextContent,
          replacement.range.start,
          replacement.range.end,
          replacement.nextBlock
        );
      });

    const afterSegments = collectGovernedExportCodeSegments(nextContent);
    if (!compareSegmentMaps(beforeSegments, afterSegments)) {
      humanIssues.push({
        type: 'SAFETY_CHECK_FAILED',
        file: file.displayPath,
        exportName: '',
        message: 'Repair would modify export code outside JSDoc metadata; file was left unchanged.'
      });
      return;
    }

    if (nextContent !== originalContent) {
      fs.writeFileSync(file.absolutePath, nextContent, 'utf8');
      filesModified += 1;
    }
  });

  return {
    mode: args.mode,
    scannedFiles: files.length,
    filesModified,
    repairs,
    humanIssues
  };
}

if (require.main === module) {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      printHelp();
      process.exit(0);
    }

    const summary = run({ args });

    if (summary.repairs.length === 0 && summary.humanIssues.length === 0) {
      console.log(`No component metadata repairs needed (${summary.scannedFiles} file(s) scanned).`);
    } else {
      summary.repairs.forEach((repair) => {
        console.log(
          `[REPAIR] ${repair.file} :: ${repair.exportName} :: ${formatChangeLabel(repair.field)} :: ${repair.before} -> ${repair.after}`
        );
      });
      summary.humanIssues.forEach((issue) => {
        const exportLabel = issue.exportName ? ` :: ${issue.exportName}` : '';
        console.log(`[${issue.type}] ${issue.file}${exportLabel} :: ${issue.message}`);
      });
      console.log('');
      console.log(`Repairs proposed/applied: ${summary.repairs.length}`);
      console.log(`Files modified: ${summary.filesModified}`);
      console.log(`NEEDS_HUMAN: ${summary.humanIssues.length}`);
    }

    if (args.mode === 'dry-run') {
      process.exit(summary.repairs.length > 0 || summary.humanIssues.length > 0 ? 1 : 0);
    }

    process.exit(summary.humanIssues.length > 0 ? 1 : 0);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  parseArgs,
  run
};
