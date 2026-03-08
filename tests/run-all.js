#!/usr/bin/env node
/**
 * @script            run-all
 * @category          orchestrator
 * @purpose           infrastructure:pipeline-orchestration
 * @scope             tests
 * @owner             docs
 * @needs             R-R29
 * @purpose-statement Test orchestrator — dispatches all unit test suites. Called by pre-commit hook and npm test.
 * @pipeline          P1 (commit, orchestrator)
 * @usage             node tests/run-all.js [flags]
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
const scriptDocsTests = require('./unit/script-docs.test');
const componentNamingTests = require('../tools/scripts/validators/components/check-naming-conventions');
const pagesIndexGenerator = require('../tools/scripts/generate-pages-index');
const browserTests = require('./integration/browser.test');
const REPO_ROOT = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const stagedOnly = args.includes('--staged');
const skipBrowser = args.includes('--skip-browser');
const watch = args.includes('--watch');
const runWcag = args.includes('--wcag');
const wcagNoFix = args.includes('--wcag-no-fix');

let totalErrors = 0;
let totalWarnings = 0;

/**
 * Run all tests
 */
async function runAllTests() {
  console.log('🧪 Running Livepeer Documentation Test Suite\n');
  console.log('='.repeat(60));
  
  // Style Guide Tests
  console.log('\n📋 Running Style Guide Tests...');
  const styleResult = styleGuideTests.runTests({ stagedOnly });
  totalErrors += styleResult.errors.length;
  totalWarnings += styleResult.warnings.length;
  console.log(`   ${styleResult.errors.length} errors, ${styleResult.warnings.length} warnings`);

  // Component Naming
  console.log('\n🧩 Running Component Naming Checks...');
  const componentNamingResult = componentNamingTests.run();
  componentNamingResult.findings.forEach((finding) => {
    console.error(`  ${componentNamingTests.formatFinding(finding)}`);
  });
  totalErrors += componentNamingResult.findings.length;
  console.log(`   ${componentNamingResult.findings.length} errors, 0 warnings`);
  
  // MDX Tests
  console.log('\n📄 Running MDX Validation Tests...');
  const mdxResult = mdxTests.runTests({ stagedOnly });
  totalErrors += mdxResult.errors.length;
  totalWarnings += mdxResult.warnings.length;
  console.log(`   ${mdxResult.errors.length} errors, ${mdxResult.warnings.length} warnings`);

  // MDX Guardrails
  console.log('\n🛡️  Running MDX Guardrail Tests...');
  const mdxGuardsResult = mdxGuardsTests.runTests();
  totalErrors += mdxGuardsResult.errors.length;
  totalWarnings += mdxGuardsResult.warnings.length;
  console.log(`   ${mdxGuardsResult.errors.length} errors, ${mdxGuardsResult.warnings.length} warnings`);
  
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

  // Docs Navigation Validation
  console.log('\n🧭 Running Docs Navigation Validation...');
  const docsNavigationResult = docsNavigationTests.runTests({ writeReport: false });
  totalErrors += docsNavigationResult.errors.length;
  totalWarnings += docsNavigationResult.warnings.length;
  console.log(`   ${docsNavigationResult.errors.length} errors, ${docsNavigationResult.warnings.length} warnings`);

  // Script Docs Enforcement
  console.log('\n🧾 Running Script Documentation Enforcement...');
  const scriptDocsResult = scriptDocsTests.runTests({ stagedOnly });
  totalErrors += scriptDocsResult.errors.length;
  totalWarnings += scriptDocsResult.warnings.length;
  console.log(`   ${scriptDocsResult.errors.length} errors, ${scriptDocsResult.warnings.length} warnings`);

  // Usefulness Unit Tests
  console.log('\n📈 Running Usefulness Unit Tests...');
  const usefulnessRubricCheck = spawnSync(
    'node',
    ['tests/unit/usefulness-rubric.test.js'],
    { cwd: REPO_ROOT, encoding: 'utf8' }
  );
  if (usefulnessRubricCheck.stdout) process.stdout.write(usefulnessRubricCheck.stdout);
  if (usefulnessRubricCheck.stderr) process.stderr.write(usefulnessRubricCheck.stderr);
  if (usefulnessRubricCheck.status !== 0) totalErrors += 1;

  const usefulnessJourneyCheck = spawnSync(
    'node',
    ['tests/unit/usefulness-journey.test.js'],
    { cwd: REPO_ROOT, encoding: 'utf8' }
  );
  if (usefulnessJourneyCheck.stdout) process.stdout.write(usefulnessJourneyCheck.stdout);
  if (usefulnessJourneyCheck.stderr) process.stderr.write(usefulnessJourneyCheck.stderr);
  if (usefulnessJourneyCheck.status !== 0) totalErrors += 1;
  const usefulnessFailures = (usefulnessRubricCheck.status === 0 ? 0 : 1) + (usefulnessJourneyCheck.status === 0 ? 0 : 1);
  console.log(`   ${usefulnessFailures} errors, 0 warnings`);

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

  // Generated Banner Enforcement
  console.log('\n🏷️  Running Generated Banner Enforcement...');
  if (stagedOnly) {
    console.log('   skipped in --staged mode (covered by changed-file PR checks)');
  } else {
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
      // Lazy require so default test runs do not depend on optional wcag dependencies until invoked.
      const wcagAudit = require('./integration/v2-wcag-audit');
      const wcagArgs = stagedOnly
        ? ['--staged', '--max-pages', '10']
        : ['--full'];
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
  } else {
    console.log(`\n❌ ${totalErrors} error(s) found`);
    return 1;
  }
}

// Run tests
if (watch) {
  console.log('👀 Watch mode not yet implemented');
  process.exit(1);
} else {
  runAllTests().then(exitCode => {
    process.exit(exitCode);
  }).catch(error => {
    console.error('Test runner error:', error);
    process.exit(1);
  });
}
