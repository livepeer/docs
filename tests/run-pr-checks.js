#!/usr/bin/env node
/**
 * @script run-pr-checks
 * @summary Run changed-file scoped validation checks for pull request CI.
 * @owner docs
 * @scope tests, .github/workflows
 *
 * @usage
 *   node tests/run-pr-checks.js --base-ref main
 *
 * @inputs
 *   --base-ref <branch> Base branch used to compute merge-base (default: env GITHUB_BASE_REF).
 *
 * @outputs
 *   - Console summary
 *   - GitHub step summary table when GITHUB_STEP_SUMMARY is set
 *
 * @exit-codes
 *   0 = all applicable checks passed
 *   1 = one or more checks failed, or changed-file discovery failed
 *
 * @examples
 *   node tests/run-pr-checks.js --base-ref docs-v2
 *
 * @notes
 *   Designed for pull_request CI. Uses changed-file scope to avoid blocking on legacy full-repo debt.
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');
const { getDocsJsonRouteKeys, toDocsRouteKeyFromFileV2Aware } = require('./utils/file-walker');

const styleGuideTests = require('./unit/style-guide.test');
const mdxTests = require('./unit/mdx.test');
const mdxGuardsTests = require('./unit/mdx-guards.test');
const spellingTests = require('./unit/spelling.test');
const qualityTests = require('./unit/quality.test');
const linksImportsTests = require('./unit/links-imports.test');
const docsNavigationTests = require('./unit/docs-navigation.test');
const scriptDocsTests = require('./unit/script-docs.test');

const REPO_ROOT = getRepoRoot();
const SCRIPT_EXTENSIONS = new Set(['.js', '.cjs', '.mjs', '.ts', '.tsx', '.sh', '.bash', '.py']);
const SCRIPT_SCOPES = ['.githooks', '.github/scripts', 'tests', 'tools/scripts', 'tasks/scripts'];
const LINK_AUDIT_REPORT = '/tmp/livepeer-link-audit-pr.md';

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

function toPosix(filePath) {
  return String(filePath || '').split(path.sep).join('/');
}

function parseArgs(argv) {
  const args = { baseRef: process.env.GITHUB_BASE_REF || '' };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--base-ref') {
      args.baseRef = String(argv[i + 1] || '').trim();
      i += 1;
    }
  }
  return args;
}

function runGit(args) {
  return execSync(`git ${args}`, { cwd: REPO_ROOT, encoding: 'utf8' }).trim();
}

function ensureBaseRef(baseRef) {
  if (!baseRef) {
    throw new Error('Missing base ref. Provide --base-ref or set GITHUB_BASE_REF.');
  }

  try {
    runGit(`rev-parse --verify origin/${baseRef}`);
  } catch (_error) {
    throw new Error(
      `Could not resolve origin/${baseRef}. Ensure checkout uses fetch-depth: 0 and base ref is fetched.`
    );
  }
}

function getChangedFiles(baseRef) {
  ensureBaseRef(baseRef);
  const mergeBase = runGit(`merge-base origin/${baseRef} HEAD`);
  if (!mergeBase) {
    throw new Error(`Failed to compute merge-base for origin/${baseRef} and HEAD.`);
  }

  const output = runGit(`diff --name-only --diff-filter=ACMR ${mergeBase}..HEAD`);
  if (!output) return [];
  return output
    .split('\n')
    .map((line) => toPosix(line.trim()))
    .filter(Boolean);
}

function relToAbs(relPath) {
  return path.join(REPO_ROOT, relPath);
}

function dedupe(values) {
  return [...new Set(values)];
}

function partitionFiles(changedFiles) {
  const docsRouteKeys = getDocsJsonRouteKeys(REPO_ROOT);
  const docsMdx = changedFiles.filter((file) => {
    if (!file.endsWith('.mdx')) return false;
    const routeKey = toDocsRouteKeyFromFileV2Aware(file, REPO_ROOT);
    return Boolean(routeKey) && docsRouteKeys.has(routeKey);
  });
  const componentJsx = changedFiles.filter(
    (file) => file.startsWith('snippets/components/') && file.endsWith('.jsx')
  );

  const scriptFiles = changedFiles.filter((file) => {
    const inScope = SCRIPT_SCOPES.some((scope) => file === scope || file.startsWith(`${scope}/`));
    const ext = path.extname(file).toLowerCase();
    return inScope && SCRIPT_EXTENSIONS.has(ext);
  });

  return {
    docsMdx,
    componentJsx,
    styleFiles: dedupe([...docsMdx, ...componentJsx]).map(relToAbs),
    docsMdxAbs: docsMdx.map(relToAbs),
    scriptFiles: dedupe(scriptFiles)
  };
}

function rowResult(status) {
  if (status === 'passed') return '✅ Pass';
  if (status === 'failed') return '❌ Fail';
  return '⏭️ Skipped';
}

function pushSummary(lines) {
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryPath) return;
  fs.appendFileSync(summaryPath, `${lines.join('\n')}\n`, 'utf8');
}

async function runUnitCheck(label, files, fn) {
  if (!files.length) {
    return { label, status: 'skipped', files: 0, errors: 0, warnings: 0 };
  }
  const result = await fn({ files });
  return {
    label,
    status: result.passed ? 'passed' : 'failed',
    files: files.length,
    errors: Array.isArray(result.errors) ? result.errors.length : 0,
    warnings: Array.isArray(result.warnings) ? result.warnings.length : 0
  };
}

function runScriptDocsCheck(files) {
  if (!files.length) {
    return { label: 'Script Docs', status: 'skipped', files: 0, errors: 0, warnings: 0 };
  }

  const result = scriptDocsTests.runTests({ files });
  return {
    label: 'Script Docs',
    status: result.passed ? 'passed' : 'failed',
    files: files.length,
    errors: Array.isArray(result.errors) ? result.errors.length : 0,
    warnings: Array.isArray(result.warnings) ? result.warnings.length : 0
  };
}

function runLinkAuditCheck(files) {
  if (!files.length) {
    return { label: 'V2 Link Audit (Strict)', status: 'skipped', files: 0, errors: 0, warnings: 0 };
  }

  const cmd = spawnSync(
    'node',
    ['tests/integration/v2-link-audit.js', '--files', files.join(','), '--strict', '--report', LINK_AUDIT_REPORT],
    { cwd: REPO_ROOT, encoding: 'utf8' }
  );

  if (cmd.stdout) process.stdout.write(cmd.stdout);
  if (cmd.stderr) process.stderr.write(cmd.stderr);

  return {
    label: 'V2 Link Audit (Strict)',
    status: cmd.status === 0 ? 'passed' : 'failed',
    files: files.length,
    errors: cmd.status === 0 ? 0 : 1,
    warnings: 0
  };
}

function runGlobalCheck(label, fn) {
  const result = fn();
  return {
    label,
    status: result.passed ? 'passed' : 'failed',
    files: result.total || 1,
    errors: Array.isArray(result.errors) ? result.errors.length : 0,
    warnings: Array.isArray(result.warnings) ? result.warnings.length : 0
  };
}

function runDocsNavigationCheck() {
  const result = docsNavigationTests.runTests({ writeReport: false });
  return {
    label: 'Docs Navigation',
    status: result.passed ? 'passed' : 'failed',
    files: result.total || 1,
    errors: Array.isArray(result.errors) ? result.errors.length : 0,
    warnings: Array.isArray(result.warnings) ? result.warnings.length : 0
  };
}

function runGeneratedBannerCheck() {
  const cmd = spawnSync('node', ['tools/scripts/enforce-generated-file-banners.js', '--check'], {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
  if (cmd.stdout) process.stdout.write(cmd.stdout);
  if (cmd.stderr) process.stderr.write(cmd.stderr);
  return {
    label: 'Generated Banners',
    status: cmd.status === 0 ? 'passed' : 'failed',
    files: 1,
    errors: cmd.status === 0 ? 0 : 1,
    warnings: 0
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const changedFiles = getChangedFiles(args.baseRef);
  const groups = partitionFiles(changedFiles);

  console.log('🧪 Running PR changed-file checks');
  console.log(`Base ref: ${args.baseRef}`);
  console.log(`Changed files: ${changedFiles.length}`);
  console.log(`Changed docs pages: ${groups.docsMdx.length}`);
  console.log(`Changed components: ${groups.componentJsx.length}`);
  console.log(`Changed scripts: ${groups.scriptFiles.length}`);

  const checks = [];
  checks.push(await runUnitCheck('Style Guide', groups.styleFiles, styleGuideTests.runTests));
  checks.push(await runUnitCheck('MDX Validation', groups.docsMdxAbs, mdxTests.runTests));
  checks.push(await runUnitCheck('Spelling', groups.docsMdxAbs, spellingTests.runTests));
  checks.push(await runUnitCheck('Quality', groups.docsMdxAbs, qualityTests.runTests));
  checks.push(await runUnitCheck('Links & Imports', groups.docsMdxAbs, linksImportsTests.runTests));
  checks.push(runGlobalCheck('MDX Guardrails', mdxGuardsTests.runTests));
  checks.push(runDocsNavigationCheck());
  checks.push(runGeneratedBannerCheck());
  checks.push(runScriptDocsCheck(groups.scriptFiles));
  checks.push(runLinkAuditCheck(groups.docsMdx));

  console.log('\n============================================================');
  console.log('PR Changed-File Checks Summary');
  console.log('============================================================');
  checks.forEach((check) => {
    console.log(
      `${rowResult(check.status)} ${check.label} (files: ${check.files}, errors: ${check.errors}, warnings: ${check.warnings})`
    );
  });

  pushSummary([
    '## PR Changed-File Checks',
    '',
    '| Check | Files | Result | Errors | Warnings |',
    '|---|---:|---|---:|---:|',
    ...checks.map(
      (check) =>
        `| ${check.label} | ${check.files} | ${rowResult(check.status)} | ${check.errors} | ${check.warnings} |`
    ),
    ''
  ]);

  const failed = checks.filter((check) => check.status === 'failed');
  if (failed.length > 0) {
    console.error(`\n❌ ${failed.length} changed-file check(s) failed`);
    process.exit(1);
  }

  console.log('\n✅ All applicable changed-file checks passed');
}

main().catch((error) => {
  console.error(`❌ Failed to run PR checks: ${error.message}`);
  process.exit(1);
});
