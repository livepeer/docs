#!/usr/bin/env node
/**
 * @script            check-mdx-safe-markdown
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tools/scripts/validators/content, first-party markdown/mdx files
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Validates first-party markdown and MDX content for repo-wide MDX-safe syntax, including parse failures and deterministic unsafe patterns.
 * @pipeline          P1, P3
 * @dualmode          --staged (changed-file scope) | --files (explicit scope) | default full-repo
 * @usage             node tools/scripts/validators/content/check-mdx-safe-markdown.js [--staged|--files a,b] [--json]
 */

const path = require('path');
const {
  REPO_ROOT,
  collectTargetMarkdownFiles,
  normalizeRepoPath,
  readFileSafe,
  validateMarkdownContent
} = require('../../../lib/mdx-safe-markdown');

function printHelp() {
  console.log(
    [
      'Usage:',
      '  node tools/scripts/validators/content/check-mdx-safe-markdown.js [--staged|--files a,b] [--json]',
      '',
      'Scope:',
      '  --staged    Validate staged first-party .md/.mdx files only.',
      '  --files     Validate explicit repo-relative files or directories (comma-separated, repeatable).',
      '',
      'Output:',
      '  --json      Emit machine-readable JSON findings.'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    stagedOnly: false,
    files: [],
    json: false,
    help: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    if (token === '--staged') {
      args.stagedOnly = true;
      continue;
    }

    if (token === '--json') {
      args.json = true;
      continue;
    }

    if (token === '--files') {
      const raw = String(argv[index + 1] || '').trim();
      if (!raw) throw new Error('Missing value for --files');
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

  if (args.stagedOnly && args.files.length > 0) {
    throw new Error('Use either --staged or --files, not both');
  }

  args.files = [...new Set(args.files)];
  return args;
}

function run(options = {}) {
  const args = options.args || parseArgs([]);
  const files = Array.isArray(options.files) && options.files.length > 0
    ? options.files
    : collectTargetMarkdownFiles({
        rootDir: REPO_ROOT,
        stagedOnly: args.stagedOnly,
        files: args.files
      });

  const findings = [];

  files.forEach((filePath) => {
    const content = readFileSafe(filePath);
    if (!content) return;

    const relPath = normalizeRepoPath(path.relative(REPO_ROOT, filePath));
    const result = validateMarkdownContent(content, relPath);
    result.findings.forEach((finding) => {
      findings.push({
        file: relPath,
        line: finding.line || 1,
        column: finding.column || 1,
        rule: finding.rule || 'mdx-safe-markdown',
        message: finding.message || 'Unknown MDX-safe markdown violation'
      });
    });
  });

  return {
    files,
    findings,
    errors: findings,
    warnings: [],
    passed: findings.length === 0,
    total: files.length
  };
}

if (require.main === module) {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      printHelp();
      process.exit(0);
    }

    const result = run({ args });
    if (args.json) {
      process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    } else if (result.findings.length > 0) {
      console.error('\n❌ MDX-safe Markdown Violations:\n');
      result.findings.forEach((finding) => {
        console.error(`  ${finding.file}:${finding.line}:${finding.column} - ${finding.rule}: ${finding.message}`);
      });
      console.error(`\n❌ ${result.findings.length} violation(s) found across ${result.total} file(s)`);
    } else {
      console.log(`\n✅ MDX-safe markdown validation passed (${result.total} files checked)`);
    }

    process.exit(result.passed ? 0 : 1);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  parseArgs,
  run
};
