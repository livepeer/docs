#!/usr/bin/env node
/**
 * Main test runner - orchestrates all test suites
 */

const styleGuideTests = require('./unit/style-guide.test');
const mdxTests = require('./unit/mdx.test');
const spellingTests = require('./unit/spelling.test');
const qualityTests = require('./unit/quality.test');
const browserTests = require('./integration/browser.test');

const args = process.argv.slice(2);
const stagedOnly = args.includes('--staged');
const skipBrowser = args.includes('--skip-browser');
const watch = args.includes('--watch');

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
  
  // MDX Tests
  console.log('\n📄 Running MDX Validation Tests...');
  const mdxResult = mdxTests.runTests({ stagedOnly });
  totalErrors += mdxResult.errors.length;
  totalWarnings += mdxResult.warnings.length;
  console.log(`   ${mdxResult.errors.length} errors, ${mdxResult.warnings.length} warnings`);
  
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
