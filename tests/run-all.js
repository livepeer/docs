#!/usr/bin/env node
/**
 * @script run-all
 * @summary Utility script for tests/run-all.js.
 * @owner docs
 * @scope tests
 *
 * @usage
 *   node tests/run-all.js
 *
 * @inputs
 *   No required CLI flags; optional flags are documented inline.
 *
 * @outputs
 *   - Console output and/or file updates based on script purpose.
 *
 * @exit-codes
 *   0 = success
 *   1 = runtime or validation failure
 *
 * @examples
 *   node tests/run-all.js
 *
 * @notes
 *   Keep script behavior deterministic and update script indexes after changes.
 */
/**
 * Main test runner - orchestrates all test suites
 */
const { spawnSync } = require('child_process');
const path = require('path');

const styleGuideTests = require('./unit/style-guide.test');
const mdxTests = require('./unit/mdx.test');
const mdxGuardsTests = require('./unit/mdx-guards.test');
const spellingTests = require('./unit/spelling.test');
const qualityTests = require('./unit/quality.test');
const linksImportsTests = require('./unit/links-imports.test');
const docsNavigationTests = require('./unit/docs-navigation.test');
const lpdScopedMintDevTests = require('./unit/lpd-scoped-mint-dev.test');
const scriptDocsTests = require('./unit/script-docs.test');
const pagesIndexGenerator = require('../tools/scripts/generate-pages-index');
const browserTests = require('./integration/browser.test');
const { getStagedFiles } = require('./utils/file-walker');

const REPO_ROOT = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const stagedOnly = args.includes('--staged');
const skipBrowser = args.includes('--skip-browser');
const watch = args.includes('--watch');
const runWcag = args.includes('--wcag');
const wcagNoFix = args.includes('--wcag-no-fix');

let totalErrors = 0;
let totalWarnings = 0;

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function getStagedRelativeFiles() {
  if (!stagedOnly) return [];
  const staged = getStagedFiles(REPO_ROOT);
  return staged
    .map((absPath) => toPosix(path.relative(REPO_ROOT, absPath)))
    .filter(Boolean);
}

function hasAnyPrefix(files, prefixes) {
  return files.some((file) => prefixes.some((prefix) => file === prefix || file.startsWith(`${prefix}/`)));
}

function hasAnyExact(files, exactFiles) {
  const set = new Set(files);
  return exactFiles.some((entry) => set.has(entry));
}

function hasMdxGuardsRelevance(stagedFiles) {
  if (!stagedOnly) return true;
  return hasAnyPrefix(stagedFiles, ['v2/pages', 'snippets/pages', 'snippets/snippetsWiki', 'tests']);
}

function hasDocsNavigationRelevance(stagedFiles) {
  if (!stagedOnly) return true;
  return hasAnyPrefix(stagedFiles, ['docs.json', 'tests/unit/docs-navigation.test.js']);
}

function hasLpdScopedMintDevRelevance(stagedFiles) {
  if (!stagedOnly) return true;
  return hasAnyExact(stagedFiles, [
    'lpd',
    'docs.json',
    '.mintignore',
    'tools/scripts/mint-dev.sh',
    'tools/scripts/dev/generate-mint-dev-scope.js',
    'tests/unit/lpd-scoped-mint-dev.test.js'
  ]);
}

function hasGeneratedBannerRelevance(stagedFiles) {
  if (!stagedOnly) return true;

  const generatedTargets = [
    'docs-guide/indexes/components-index.mdx',
    'docs-guide/indexes/pages-index.mdx',
    'docs-guide/indexes/scripts-index.mdx',
    'docs-guide/indexes/templates-index.mdx',
    'docs-guide/indexes/workflows-index.mdx',
    'v2/resources/documentation-guide/component-library/overview.mdx',
    'v2/index.mdx'
  ];

  const generatorScripts = [
    'tools/scripts/enforce-generated-file-banners.js',
    'tools/scripts/generate-docs-guide-indexes.js',
    'tools/scripts/generate-docs-guide-pages-index.js',
    'tools/scripts/generate-docs-guide-components-index.js',
    'tools/scripts/generate-pages-index.js',
    'tests/unit/script-docs.test.js'
  ];

  if (hasAnyExact(stagedFiles, generatedTargets)) return true;
  if (hasAnyExact(stagedFiles, generatorScripts)) return true;
  return hasAnyPrefix(stagedFiles, ['v2/pages']);
}

/**
 * Run all tests
 */
async function runAllTests() {
  const stagedFiles = getStagedRelativeFiles();

  console.log('🧪 Running Livepeer Documentation Test Suite\n');
  console.log('='.repeat(60));

  if (stagedOnly) {
    console.log(`🔎 Staged mode enabled (${stagedFiles.length} staged file(s))`);
  }

  // Style Guide Tests
  console.log('\n📋 Running Style Guide Tests...');
  const styleResult = styleGuideTests.runTests({ stagedOnly });
  totalErrors += styleResult.errors.length;
  totalWarnings += styleResult.warnings.length;
  console.log(`   ${styleResult.errors.length} errors, ${styleResult.warnings.length} warnings`);

  // MDX Tests
  console.log('\n📄 Running MDX Validation Tests...');
  const mdxResult = mdxTests.runTests({ stagedOnly });
  totalErrors += mdxResult.errors.length;
  totalWarnings += mdxResult.warnings.length;
  console.log(`   ${mdxResult.errors.length} errors, ${mdxResult.warnings.length} warnings`);

  // MDX Guardrails
  if (hasMdxGuardsRelevance(stagedFiles)) {
    console.log('\n🛡️  Running MDX Guardrail Tests...');
    const mdxGuardsResult = mdxGuardsTests.runTests();
    totalErrors += mdxGuardsResult.errors.length;
    totalWarnings += mdxGuardsResult.warnings.length;
    console.log(`   ${mdxGuardsResult.errors.length} errors, ${mdxGuardsResult.warnings.length} warnings`);
  } else {
    console.log('\n🛡️  Running MDX Guardrail Tests...');
    console.log('   skipped (no staged guard-owned paths)');
  }

  // Spelling Tests
  console.log('\n🔤 Running Spelling Tests...');
  const spellResult = await spellingTests.runTests({ stagedOnly });
  totalErrors += spellResult.errors.length;
  totalWarnings += (spellResult.warnings || []).length;
  console.log(`   ${spellResult.errors.length} errors`);

  // Quality Tests
  console.log('\n✨ Running Quality Checks...');
  const qualityResult = qualityTests.runTests({ stagedOnly });
  totalErrors += qualityResult.errors.length;
  totalWarnings += qualityResult.warnings.length;
  console.log(`   ${qualityResult.errors.length} errors, ${qualityResult.warnings.length} warnings`);

  // Links & Imports Tests
  console.log('\n🔗 Running Links & Imports Validation...');
  const linksResult = linksImportsTests.runTests({ stagedOnly });
  totalErrors += linksResult.errors.length;
  totalWarnings += linksResult.warnings.length;
  console.log(`   ${linksResult.errors.length} errors, ${linksResult.warnings.length} warnings`);

  // Docs Navigation Validation (global check, now staged relevance gated)
  if (hasDocsNavigationRelevance(stagedFiles)) {
    console.log('\n🧭 Running Docs Navigation Validation...');
    const docsNavigationResult = docsNavigationTests.runTests({ writeReport: false });
    totalErrors += docsNavigationResult.errors.length;
    totalWarnings += docsNavigationResult.warnings.length;
    console.log(`   ${docsNavigationResult.errors.length} errors, ${docsNavigationResult.warnings.length} warnings`);
  } else {
    console.log('\n🧭 Running Docs Navigation Validation...');
    console.log('   skipped (no staged docs-navigation-owned paths)');
  }

  if (hasLpdScopedMintDevRelevance(stagedFiles)) {
    console.log('\n🚀 Running LPD Scoped Mint Dev Tests...');
    const scopedMintDevResult = await lpdScopedMintDevTests.runTests();
    totalErrors += scopedMintDevResult.errors.length;
    console.log(`   ${scopedMintDevResult.errors.length} errors, 0 warnings`);
  } else {
    console.log('\n🚀 Running LPD Scoped Mint Dev Tests...');
    console.log('   skipped (no staged scoped-mint-owned paths)');
  }

  // Script Docs Enforcement
  console.log('\n🧾 Running Script Documentation Enforcement...');
  const scriptDocsResult = scriptDocsTests.runTests({ stagedOnly });
  totalErrors += scriptDocsResult.errors.length;
  totalWarnings += scriptDocsResult.warnings.length;
  console.log(`   ${scriptDocsResult.errors.length} errors, ${scriptDocsResult.warnings.length} warnings`);

  // Pages Index Sync Validation
  console.log('\n🗂️  Running Pages Index Sync Validation...');
  const pagesIndexResult = pagesIndexGenerator.run({ stagedOnly });
  totalErrors += pagesIndexResult.errors.length;
  totalWarnings += pagesIndexResult.warnings.length;
  if (pagesIndexResult.skipped) {
    console.log('   skipped (no staged v2/pages changes)');
  } else {
    console.log(`   ${pagesIndexResult.errors.length} errors, ${pagesIndexResult.warnings.length} warnings`);
  }

  // Generated Banner Enforcement (global check, now staged relevance gated)
  if (hasGeneratedBannerRelevance(stagedFiles)) {
    console.log('\n🏷️  Running Generated Banner Enforcement...');
    const generatedBannerCheck = spawnSync(
      'node',
      ['tools/scripts/enforce-generated-file-banners.js', '--check'],
      { cwd: REPO_ROOT, encoding: 'utf8' }
    );
    if (generatedBannerCheck.stdout) process.stdout.write(generatedBannerCheck.stdout);
    if (generatedBannerCheck.stderr) process.stderr.write(generatedBannerCheck.stderr);
    if (generatedBannerCheck.status !== 0) {
      totalErrors += 1;
      console.log('   1 error, 0 warnings');
    } else {
      console.log('   0 errors, 0 warnings');
    }
  } else {
    console.log('\n🏷️  Running Generated Banner Enforcement...');
    console.log('   skipped (no staged generated-target/generator changes)');
  }

  // Browser Tests (optional)
  if (!skipBrowser) {
    console.log('\n🌐 Running Browser Tests...');
    try {
      const browserResult = await browserTests.runTests({ stagedOnly });
      totalErrors += browserResult.failed || 0;
      console.log(`   ${browserResult.failed || 0} failed, ${browserResult.passed || 0} passed`);
    } catch (error) {
      console.warn(`   ⚠️  Browser tests skipped: ${error.message}`);
    }
  }

  // WCAG Accessibility Audit (optional, explicit)
  if (runWcag) {
    console.log('\n♿ Running WCAG Accessibility Audit...');
    try {
      const wcagAudit = require('./integration/v2-wcag-audit');
      const wcagArgs = stagedOnly ? ['--staged', '--max-pages', '10'] : ['--full'];
      if (wcagNoFix) wcagArgs.push('--no-fix');
      const wcagResult = await wcagAudit.runAudit({ argv: wcagArgs });
      const blocking = wcagResult?.summary?.totals?.blockingTotal || 0;
      const filesScanned = wcagResult?.jsonReport?.scope?.totalFilesScanned || 0;
      if (wcagResult && wcagResult.exitCode !== 0) {
        totalErrors += 1;
      }
      console.log(`   ${blocking} blocking issue(s), ${filesScanned} file(s) scanned`);
    } catch (error) {
      totalErrors += 1;
      console.warn(`   ⚠️  WCAG audit failed: ${error.message}`);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 TEST SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total Errors: ${totalErrors}`);
  console.log(`Total Warnings: ${totalWarnings}`);

  if (totalErrors === 0) {
    console.log('\n✅ All tests passed!');
    return 0;
  }

  console.log(`\n❌ ${totalErrors} error(s) found`);
  return 1;
}

// Run tests
if (watch) {
  console.log('👀 Watch mode not yet implemented');
  process.exit(1);
} else {
  runAllTests()
    .then((exitCode) => {
      process.exit(exitCode);
    })
    .catch((error) => {
      console.error('Test runner error:', error);
      process.exit(1);
    });
}
