#!/usr/bin/env node
/**
 * @script      sync-generated-files
 * @type        dispatch
 * @concern     governance
 * @niche       pipelines
 * @purpose     governance:index-management
 * @description Dispatches generator scripts to sync generated catalog/index files, then validates banners.
 * @mode        execute
 * @pipeline    manual | pre-commit --staged
 * @scope       tools/scripts/generators, docs-guide/catalog, v2
 * @usage       node tools/scripts/dispatch/governance/pipelines/sync-generated-files.js --write | --check [--staged]
 * @policy      R-R16, R-R17
 */

const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = process.cwd();

const CHECK_COMMANDS = [
  ['operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js', '--check'],
  ['operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js', '--check'],
  ['operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js', '--check'],
  ['operations/scripts/generators/components/documentation/generate-component-docs.js', '--check', '--template-only'],
  ['operations/tests/unit/script-docs.test.js', '--check-indexes'],
  ['operations/scripts/generators/content/catalogs/generate-pages-index.js']
];

const WRITE_COMMANDS = [
  ['operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js', '--write'],
  ['operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js', '--write'],
  ['operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js', '--write'],
  ['operations/scripts/generators/components/documentation/generate-component-docs.js', '--fix', '--template-only'],
  ['operations/tests/unit/script-docs.test.js', '--write', '--rebuild-indexes'],
  ['operations/scripts/generators/content/catalogs/generate-pages-index.js', '--write', '--rebuild-indexes']
];

function runNodeCommand(args) {
  const result = spawnSync('node', args, {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  return result.status === 0;
}

function normalizeRepoPath(value) {
  return String(value || '').split(path.sep).join('/');
}

function getStagedFiles() {
  const snapshot = String(process.env.LPD_STAGED_FILES_SNAPSHOT || '')
    .split(/\r?\n/)
    .map((entry) => normalizeRepoPath(entry.trim()))
    .filter(Boolean);
  if (snapshot.length > 0) {
    return [...new Set(snapshot)].sort();
  }

  const result = spawnSync('git', ['diff', '--cached', '--name-only', '--diff-filter=ACMRD'], {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
  if (result.status !== 0) return [];

  return [...new Set(String(result.stdout || '')
    .split(/\r?\n/)
    .map((entry) => normalizeRepoPath(entry.trim()))
    .filter(Boolean))].sort();
}

function runGeneratorSet(writeMode, violations, options = {}) {
  const commands = writeMode ? WRITE_COMMANDS : CHECK_COMMANDS;
  const staged = Boolean(options.staged);
  const relevantFiles = new Set(options.relevantFiles || []);

  if (staged) {
    if (!writeMode) return;

    const stagedCommands = [];
    const hasV2Index = [...relevantFiles].some((rp) => rp === 'v2/index.mdx' || /^v2\/[^/]+\/index\.mdx$/.test(rp));
    if (hasV2Index) {
      stagedCommands.push(writeMode
        ? ['operations/scripts/generators/content/catalogs/generate-pages-index.js', '--staged', '--write', '--stage']
        : ['operations/scripts/generators/content/catalogs/generate-pages-index.js', '--staged']);
    }

    if (relevantFiles.has('docs-guide/catalog/pages-catalog.mdx')) {
      stagedCommands.push(writeMode
        ? ['operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js', '--write']
        : ['operations/scripts/generators/governance/catalogs/generate-docs-guide-pages-index.js', '--check']);
    }

    const hasDocsGuideIndex = [...relevantFiles].some((rp) =>
      ['docs-guide/catalog/components-catalog.mdx', 'docs-guide/catalog/scripts-catalog.mdx',
       'docs-guide/catalog/templates-catalog.mdx', 'docs-guide/catalog/workflows-catalog.mdx'].includes(rp)
    );
    if (hasDocsGuideIndex) {
      stagedCommands.push(writeMode
        ? ['operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js', '--write']
        : ['operations/scripts/generators/governance/catalogs/generate-docs-guide-indexes.js', '--check']);
      stagedCommands.push(writeMode
        ? ['operations/tests/unit/script-docs.test.js', '--write', '--rebuild-indexes']
        : ['operations/tests/unit/script-docs.test.js', '--check-indexes']);
    }

    const hasComponentDocs = [...relevantFiles].some((rp) =>
      rp.startsWith('v2/resources/documentation-guide/component-library/')
    );
    if (hasComponentDocs) {
      stagedCommands.push(writeMode
        ? ['operations/scripts/generators/components/documentation/generate-component-docs.js', '--fix', '--template-only']
        : ['operations/scripts/generators/components/documentation/generate-component-docs.js', '--check', '--template-only']);
    }

    stagedCommands.forEach((args) => {
      const ok = runNodeCommand(args);
      if (!ok) {
        violations.push({ rule: 'GENERATOR_SYNC', file: args[0], message: `Generator command failed: node ${args.join(' ')}` });
      }
    });
    return;
  }

  commands.forEach((args) => {
    const ok = runNodeCommand(args);
    if (!ok) {
      violations.push({ rule: 'GENERATOR_SYNC', file: args[0], message: `Generator command failed: node ${args.join(' ')}` });
    }
  });
}

function main(argv = process.argv.slice(2)) {
  const write = argv.includes('--write');
  const check = argv.includes('--check') || !write;
  const staged = argv.includes('--staged');
  const violations = [];

  const stagedFiles = staged ? getStagedFiles() : [];

  if (write) {
    runGeneratorSet(true, violations, { staged, relevantFiles: stagedFiles });
  }
  if (check || write) {
    runGeneratorSet(false, violations, { staged, relevantFiles: stagedFiles });
  }

  // After generators, run banner validation
  const bannerValidator = 'operations/scripts/validators/content/structure/enforce-generated-file-banners.js';
  const bannerArgs = [bannerValidator, '--check'];
  if (staged) bannerArgs.push('--staged');
  const ok = runNodeCommand(bannerArgs);
  if (!ok) {
    violations.push({ rule: 'BANNER_VALIDATION', file: bannerValidator, message: 'Banner validation failed after generator sync.' });
  }

  if (violations.length > 0) {
    console.error('\n❌ Generated file sync failed:');
    violations.forEach((v) => console.error(`  - [${v.rule}] ${v.file}: ${v.message}`));
    process.exit(1);
  }

  console.log('✅ Generated file sync passed.');
}

main();
module.exports = { runGeneratorSet, CHECK_COMMANDS, WRITE_COMMANDS, runNodeCommand };
