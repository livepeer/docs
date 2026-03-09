#!/usr/bin/env node
/**
 * @script            repair-mdx-safe-markdown
 * @category          remediator
 * @purpose           qa:content-quality
 * @scope             tools/scripts/remediators/content, first-party markdown/mdx files
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Auto-repairs deterministic MDX-unsafe markdown patterns across first-party markdown and MDX content.
 * @pipeline          P1
 * @dualmode          --dry-run (validator) | --write (remediator)
 * @usage             node tools/scripts/remediators/content/repair-mdx-safe-markdown.js --dry-run [--staged|--files a,b]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const {
  REPO_ROOT,
  collectTargetMarkdownFiles,
  normalizeRepoPath,
  readFileSafe,
  repairMarkdownContent
} = require('../../../lib/mdx-safe-markdown');

function printHelp() {
  console.log(
    [
      'Usage:',
      '  node tools/scripts/remediators/content/repair-mdx-safe-markdown.js [--dry-run|--write] [--staged|--files a,b] [--stage]',
      '',
      'Modes:',
      '  --dry-run   Report deterministic MDX-safe markdown repairs without writing files (default).',
      '  --write     Apply deterministic MDX-safe markdown repairs.',
      '',
      'Scope:',
      '  --staged    Limit repairs to staged first-party .md/.mdx files.',
      '  --files     Limit repairs to explicit repo-relative files or directories (comma-separated, repeatable).',
      '',
      'Staging:',
      '  --stage     Re-stage files changed by --write.',
      '',
      'Safety:',
      '  - Repairs HTML comments, raw <br> table breaks, raw comparison operators, code-like table cells, and angle-bracket placeholders.',
      '  - Skips fenced code blocks and inline code spans.',
      '  - Leaves ambiguous prose rewrites untouched.'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    mode: 'dry-run',
    stagedOnly: false,
    files: [],
    stage: false,
    help: false
  };

  let explicitModeCount = 0;

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    if (token === '--dry-run') {
      args.mode = 'dry-run';
      explicitModeCount += 1;
      continue;
    }

    if (token === '--write') {
      args.mode = 'write';
      explicitModeCount += 1;
      continue;
    }

    if (token === '--staged') {
      args.stagedOnly = true;
      continue;
    }

    if (token === '--stage') {
      args.stage = true;
      continue;
    }

    if (token === '--files') {
      const raw = String(argv[index + 1] || '').trim();
      if (!raw) {
        throw new Error('Missing value for --files');
      }
      raw
        .split(',')
        .map((entry) => entry.trim())
        .filter(Boolean)
        .forEach((entry) => args.files.push(entry));
      index += 1;
      continue;
    }

    if (token.startsWith('--files=')) {
      token
        .slice('--files='.length)
        .split(',')
        .map((entry) => entry.trim())
        .filter(Boolean)
        .forEach((entry) => args.files.push(entry));
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (explicitModeCount > 1) {
    throw new Error('Choose only one mode: --dry-run or --write');
  }

  if (args.stagedOnly && args.files.length > 0) {
    throw new Error('Use either --staged or --files, not both');
  }

  if (args.stage && args.mode !== 'write') {
    throw new Error('--stage requires --write');
  }

  args.files = [...new Set(args.files)];
  return args;
}

function stageFiles(files) {
  if (!files.length) return;
  const relFiles = files.map((filePath) => normalizeRepoPath(path.relative(REPO_ROOT, filePath)));
  const result = spawnSync('git', ['add', '--', ...relFiles], {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });

  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout || 'Failed to stage repaired files');
  }
}

function summariseRepairsByRule(repairs) {
  return repairs.reduce((accumulator, repair) => {
    repair.changes.forEach((change) => {
      accumulator[change.rule] = (accumulator[change.rule] || 0) + 1;
    });
    return accumulator;
  }, {});
}

function run(options = {}) {
  const args = options.args || parseArgs([]);
  const quiet = options.quiet === true;
  const files = Array.isArray(options.files) && options.files.length > 0
    ? options.files
    : collectTargetMarkdownFiles({
        rootDir: REPO_ROOT,
        stagedOnly: args.stagedOnly,
        files: args.files
      });

  const repairs = [];
  const changedFiles = [];

  files.forEach((filePath) => {
    const content = readFileSafe(filePath);
    if (!content) return;

    const result = repairMarkdownContent(content, normalizeRepoPath(path.relative(REPO_ROOT, filePath)));
    if (!result.changed) return;

    repairs.push({
      file: filePath,
      changes: result.changes,
      nextContent: result.content
    });

    if (args.mode === 'write') {
      fs.writeFileSync(filePath, result.content, 'utf8');
      changedFiles.push(filePath);
    }
  });

  if (args.mode === 'write' && args.stage && changedFiles.length > 0) {
    stageFiles(changedFiles);
  }

  const byRule = summariseRepairsByRule(repairs);
  const summary = {
    mode: args.mode,
    scannedFiles: files.length,
    changedFiles: repairs.length,
    stagedFiles: changedFiles.length,
    proposedRepairs: repairs.reduce((total, repair) => total + repair.changes.length, 0),
    byRule,
    repairs
  };

  if (!quiet) {
    const verb = args.mode === 'write' ? 'Applied' : 'Proposed';
    console.log(`\n${verb} ${summary.proposedRepairs} MDX-safe markdown repair(s) across ${summary.changedFiles} file(s) (${summary.scannedFiles} scanned).`);
    Object.entries(byRule)
      .sort((left, right) => left[0].localeCompare(right[0]))
      .forEach(([rule, count]) => {
        console.log(`  - ${rule}: ${count}`);
      });
    repairs.forEach((repair) => {
      console.log(`  ${normalizeRepoPath(path.relative(REPO_ROOT, repair.file))}`);
      repair.changes.forEach((change) => {
        console.log(`    line ${change.line}: ${change.rule}`);
      });
    });
  }

  return summary;
}

if (require.main === module) {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      printHelp();
      process.exit(0);
    }

    const summary = run({ args });
    if (summary.proposedRepairs > 0 && args.mode === 'dry-run') {
      process.exit(1);
    }
    process.exit(0);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  parseArgs,
  run
};
