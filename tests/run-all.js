#!/usr/bin/env node
/**
 * @script            run-all
 * @category          orchestrator
 * @purpose           infrastructure:pipeline-orchestration
 * @scope             tests
 * @owner             docs
 * @needs             R-R29
 * @purpose-statement Test orchestrator — dispatches all unit test suites. Called by pre-commit hook and npm test.
 * @pipeline          P1, P2, P3
 * @usage             node tests/run-all.js [flags]
 */
/**
 * Main test runner - orchestrates all test suites
 */
const { spawnSync } = require('child_process');
const path = require('path');

const styleGuideTests = require('./unit/style-guide.test');
const copyLintTests = require('./unit/copy-lint.test');
const mdxTests = require('./unit/mdx.test');
const mdxGuardsTests = require('./unit/mdx-guards.test');
const mdxSafeMarkdownUnitTests = require('./unit/mdx-safe-markdown.test');
const docsPageScopeTests = require('./unit/docs-page-scope.test');
const docsAuthoringRulesTests = require('./unit/docs-authoring-rules.test');
const frontmatterTaxonomyTests = require('./unit/frontmatter-taxonomy.test');
const spellingTests = require('./unit/spelling.test');
const qualityTests = require('./unit/quality.test');
const linksImportsTests = require('./unit/links-imports.test');
const docsNavigationTests = require('./unit/docs-navigation.test');
const docsPathSyncTests = require('./unit/docs-path-sync.test');
const scriptDocsTests = require('./unit/script-docs.test');
const skillDocsTests = require('./unit/skill-docs.test');
const aiToolsRegistryTests = require('./unit/ai-tools-registry.test');
const ownerlessGovernanceTests = require('./unit/ownerless-governance.test');
const checkAgentDocsFreshnessTests = require('./unit/check-agent-docs-freshness.test');
const rootAllowlistFormatTests = require('./unit/root-allowlist-format.test');
const exportPortableSkillsTests = require('./unit/export-portable-skills.test');
const docsGuideSotTests = require('./unit/docs-guide-sot.test');
const uiTemplateGeneratorTests = require('./unit/ui-template-generator.test');
const componentGovernanceUtilsTests = require('./unit/component-governance-utils.test');
const componentGovernanceGeneratorTests = require('./unit/component-governance-generators.test');
const componentNamingTests = require('../tools/scripts/validators/components/check-naming-conventions');
const doubleHeadersValidator = require('../tools/scripts/validators/content/check-double-headers');
const mdxSafeMarkdownValidator = require('../tools/scripts/validators/content/check-mdx-safe-markdown');
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

function getStagedRepoRelativeFiles() {
  return getStagedFiles(REPO_ROOT).map((filePath) => path.relative(REPO_ROOT, filePath).split(path.sep).join('/'));
}

function normalizeSuiteResult(result) {
  const normalized = result && typeof result === 'object' ? { ...result } : {};
  normalized.errors = Array.isArray(normalized.errors) ? normalized.errors : [];
  normalized.warnings = Array.isArray(normalized.warnings) ? normalized.warnings : [];
  return normalized;
}

function getStagedComponentFiles() {
  return getStagedRepoRelativeFiles()
    .filter((filePath) => filePath.startsWith('snippets/components/') && filePath.endsWith('.jsx'))
    .filter((filePath) => !filePath.includes('/_archive/'));
}

function hasStagedComponentGovernanceChanges() {
  if (!stagedOnly) {
    return true;
  }

  const relevantFiles = new Set([
    'docs-guide/component-registry.json',
    'docs-guide/component-usage-map.json',
    'tools/lib/component-governance-utils.js',
    'tools/scripts/audit-component-usage.js',
    'tools/scripts/generate-component-registry.js',
    'tools/scripts/scan-component-imports.js',
    'tools/scripts/generate-component-docs.js',
    'tools/scripts/generate-docs-guide-components-index.js',
    'tools/scripts/remediators/components/repair-component-metadata.js',
    'tests/unit/component-governance-generators.test.js'
  ]);

  return getStagedRepoRelativeFiles().some(
    (filePath) => filePath.startsWith('snippets/components/') || relevantFiles.has(filePath)
  );
}

function hasStagedDocsGuideSotChanges() {
  if (!stagedOnly) {
    return true;
  }

  return getStagedRepoRelativeFiles().some(
    (filePath) =>
      filePath === 'README.md' ||
      filePath.startsWith('docs-guide/') ||
      filePath === 'tests/unit/docs-guide-sot.test.js' ||
      filePath.startsWith('tools/scripts/generate-docs-guide-') ||
      filePath === 'tools/scripts/generate-ui-templates.js' ||
      filePath === 'tests/unit/script-docs.test.js'
  );
}

function hasStagedUiTemplateChanges() {
  if (!stagedOnly) {
    return true;
  }

  return getStagedRepoRelativeFiles().some(
    (filePath) =>
      filePath.startsWith('snippets/templates/') ||
      filePath.startsWith('v2/templates/') ||
      filePath.startsWith('.vscode/') ||
      filePath === 'docs-guide/catalog/ui-templates.mdx' ||
      filePath === 'docs-guide/features/ui-system.mdx' ||
      filePath === 'docs-guide/component-registry.json' ||
      filePath === 'tools/scripts/generate-ui-templates.js' ||
      filePath === 'tests/unit/ui-template-generator.test.js'
  );
}

/**
 * Run all tests
 */
async function runAllTests() {
  console.log('🧪 Running Livepeer Documentation Test Suite\n');
  console.log('='.repeat(60));
  
  // Style Guide Tests
  console.log('\n📋 Running Style Guide Tests...');
  const styleResult = normalizeSuiteResult(styleGuideTests.runTests({ stagedOnly }));
  totalErrors += styleResult.errors.length;
  totalWarnings += styleResult.warnings.length;
  console.log(`   ${styleResult.errors.length} errors, ${styleResult.warnings.length} warnings`);

  console.log('\n✍️  Running Copy Lint Tests...');
  const copyLintResult = normalizeSuiteResult(copyLintTests.runTests({ stagedOnly }));
  totalErrors += copyLintResult.errors.length;
  totalWarnings += copyLintResult.warnings.length;
  console.log(`   ${copyLintResult.errors.length} errors, ${copyLintResult.warnings.length} warnings`);

  // Component Naming
  console.log('\n🧩 Running Component Naming Checks...');
  const componentNamingOptions = stagedOnly
    ? {
        files: getStagedComponentFiles(),
        mode: 'migration'
      }
    : {};
  const componentNamingResult = componentNamingTests.run(componentNamingOptions);
  componentNamingResult.findings.forEach((finding) => {
    console.error(`  ${componentNamingTests.formatFinding(finding)}`);
  });
  totalErrors += componentNamingResult.findings.length;
  console.log(`   ${componentNamingResult.findings.length} errors, 0 warnings`);
  
  // MDX Tests
  console.log('\n📄 Running MDX Validation Tests...');
  const mdxResult = normalizeSuiteResult(mdxTests.runTests({ stagedOnly }));
  totalErrors += mdxResult.errors.length;
  totalWarnings += mdxResult.warnings.length;
  console.log(`   ${mdxResult.errors.length} errors, ${mdxResult.warnings.length} warnings`);

  // Duplicate Header Validation
  console.log('\n🪞 Running Duplicate Header Validation...');
  const doubleHeadersResult = await doubleHeadersValidator.run({ stagedOnly });
  doubleHeadersResult.results.forEach((result) => {
    if (result.error) {
      console.error(`  ${result.displayPath}:1 [error] ${result.error}`);
      return;
    }

    result.findings.forEach((finding) => {
      if (!finding.fixed) {
        console.error(`  ${result.displayPath}:${finding.line} [${finding.rule}] ${finding.message} ${finding.evidence}`);
      }
    });
  });
  totalErrors += doubleHeadersResult.errors.length + doubleHeadersResult.remaining;
  console.log(`   ${doubleHeadersResult.errors.length + doubleHeadersResult.remaining} errors, 0 warnings`);

  // Repo-wide MDX-safe Markdown Validation
  console.log('\n🧱 Running Repo-wide MDX-safe Markdown Validation...');
  const mdxSafeMarkdownResult = normalizeSuiteResult(mdxSafeMarkdownValidator.run({
    args: {
      stagedOnly,
      files: [],
      json: false
    }
  }));
  totalErrors += mdxSafeMarkdownResult.errors.length;
  totalWarnings += mdxSafeMarkdownResult.warnings.length;
  console.log(`   ${mdxSafeMarkdownResult.errors.length} errors, ${mdxSafeMarkdownResult.warnings.length} warnings`);

  // MDX Guardrails
  console.log('\n🛡️  Running MDX Guardrail Tests...');
  const mdxGuardsResult = normalizeSuiteResult(mdxGuardsTests.runTests());
  totalErrors += mdxGuardsResult.errors.length;
  totalWarnings += mdxGuardsResult.warnings.length;
  console.log(`   ${mdxGuardsResult.errors.length} errors, ${mdxGuardsResult.warnings.length} warnings`);

  // MDX-safe Markdown Unit Tests
  console.log('\n🧪 Running MDX-safe Markdown Unit Tests...');
  const mdxSafeMarkdownUnitResult = normalizeSuiteResult(mdxSafeMarkdownUnitTests.runTests());
  totalErrors += mdxSafeMarkdownUnitResult.errors.length;
  totalWarnings += mdxSafeMarkdownUnitResult.warnings.length;
  console.log(`   ${mdxSafeMarkdownUnitResult.errors.length} errors, ${mdxSafeMarkdownUnitResult.warnings.length} warnings`);

  // Docs Page Scope Tests
  console.log('\n🗂️  Running Docs Page Scope Tests...');
  const docsPageScopeResult = normalizeSuiteResult(docsPageScopeTests.runTests());
  totalErrors += docsPageScopeResult.errors.length;
  totalWarnings += docsPageScopeResult.warnings.length;
  console.log(`   ${docsPageScopeResult.errors.length} errors, ${docsPageScopeResult.warnings.length} warnings`);

  // Docs Authoring Rules Tests
  console.log('\n🧭 Running Docs Authoring Rules Tests...');
  const docsAuthoringRulesResult = normalizeSuiteResult(docsAuthoringRulesTests.runTests());
  totalErrors += docsAuthoringRulesResult.errors.length;
  totalWarnings += docsAuthoringRulesResult.warnings.length;
  console.log(`   ${docsAuthoringRulesResult.errors.length} errors, ${docsAuthoringRulesResult.warnings.length} warnings`);

  // Frontmatter Taxonomy Tests
  console.log('\n🧾 Running Frontmatter Taxonomy Tests...');
  const frontmatterTaxonomyResult = normalizeSuiteResult(frontmatterTaxonomyTests.runTests());
  totalErrors += frontmatterTaxonomyResult.errors.length;
  totalWarnings += frontmatterTaxonomyResult.warnings.length;
  console.log(`   ${frontmatterTaxonomyResult.errors.length} errors, ${frontmatterTaxonomyResult.warnings.length} warnings`);
  
  // Spelling Tests
  console.log('\n🔤 Running Spelling Tests...');
  const spellResult = normalizeSuiteResult(await spellingTests.runTests({ stagedOnly }));
  totalErrors += spellResult.errors.length;
  totalWarnings += (spellResult.warnings || []).length;
  console.log(`   ${spellResult.errors.length} errors`);
  
  // Quality Tests
  console.log('\n✨ Running Quality Checks...');
  const qualityResult = normalizeSuiteResult(qualityTests.runTests({ stagedOnly }));
  totalErrors += qualityResult.errors.length;
  totalWarnings += qualityResult.warnings.length;
  console.log(`   ${qualityResult.errors.length} errors, ${qualityResult.warnings.length} warnings`);
  
  // Links & Imports Tests
  console.log('\n🔗 Running Links & Imports Validation...');
  const linksResult = normalizeSuiteResult(linksImportsTests.runTests({ stagedOnly }));
  totalErrors += linksResult.errors.length;
  totalWarnings += linksResult.warnings.length;
  console.log(`   ${linksResult.errors.length} errors, ${linksResult.warnings.length} warnings`);

  // Docs Navigation Validation
  console.log('\n🧭 Running Docs Navigation Validation...');
  const docsNavigationResult = normalizeSuiteResult(docsNavigationTests.runTests({ writeReport: false }));
  totalErrors += docsNavigationResult.errors.length;
  totalWarnings += docsNavigationResult.warnings.length;
  console.log(`   ${docsNavigationResult.errors.length} errors, ${docsNavigationResult.warnings.length} warnings`);

  // Docs Path Sync Validation
  console.log('\n🛤️  Running Docs Path Sync Validation...');
  const docsPathSyncResult = normalizeSuiteResult(docsPathSyncTests.runTests());
  totalErrors += docsPathSyncResult.errors.length;
  totalWarnings += docsPathSyncResult.warnings.length;
  console.log(`   ${docsPathSyncResult.errors.length} errors, ${docsPathSyncResult.warnings.length} warnings`);

  // Script Docs Enforcement
  console.log('\n🧾 Running Script Documentation Enforcement...');
  const scriptDocsResult = normalizeSuiteResult(scriptDocsTests.runTests({ stagedOnly }));
  totalErrors += scriptDocsResult.errors.length;
  totalWarnings += scriptDocsResult.warnings.length;
  console.log(`   ${scriptDocsResult.errors.length} errors, ${scriptDocsResult.warnings.length} warnings`);

  // Skill Docs Enforcement
  console.log('\n📘 Running Skill Documentation Enforcement...');
  const skillDocsResult = normalizeSuiteResult(skillDocsTests.runTests({ stagedOnly }));
  totalErrors += skillDocsResult.errors.length;
  totalWarnings += skillDocsResult.warnings.length;
  console.log(`   ${skillDocsResult.errors.length} errors, ${skillDocsResult.warnings.length} warnings`);

  // AI-tools Registry Governance
  console.log('\n🗂️  Running AI-tools Registry Checks...');
  const aiToolsRegistryResult = normalizeSuiteResult(aiToolsRegistryTests.runTests({ stagedOnly }));
  totalErrors += aiToolsRegistryResult.errors.length;
  totalWarnings += aiToolsRegistryResult.warnings.length;
  if (aiToolsRegistryResult.skipped) {
    console.log('   skipped (no staged AI-tools governance changes)');
  } else {
    console.log(
      `   ${aiToolsRegistryResult.errors.length} errors, ${aiToolsRegistryResult.warnings.length} warnings`
    );
  }

  // Ownerless Governance
  console.log('\n🧭 Running Ownerless Governance Checks...');
  const ownerlessGovernanceResult = normalizeSuiteResult(ownerlessGovernanceTests.runTests({ stagedOnly }));
  totalErrors += ownerlessGovernanceResult.errors.length;
  totalWarnings += ownerlessGovernanceResult.warnings.length;
  console.log(`   ${ownerlessGovernanceResult.errors.length} errors, ${ownerlessGovernanceResult.warnings.length} warnings`);

  // Agent Docs Freshness
  console.log('\n🤖 Running Agent Docs Freshness Checks...');
  const agentDocsFreshnessResult = normalizeSuiteResult(checkAgentDocsFreshnessTests.runTests());
  totalErrors += agentDocsFreshnessResult.errors.length;
  totalWarnings += agentDocsFreshnessResult.warnings.length;
  console.log(`   ${agentDocsFreshnessResult.errors.length} errors, ${agentDocsFreshnessResult.warnings.length} warnings`);

  // Root Allowlist Format
  console.log('\n🧱 Running Root Allowlist Format Checks...');
  const rootAllowlistFormatResult = normalizeSuiteResult(rootAllowlistFormatTests.runTests());
  totalErrors += rootAllowlistFormatResult.errors.length;
  totalWarnings += rootAllowlistFormatResult.warnings.length;
  console.log(`   ${rootAllowlistFormatResult.errors.length} errors, ${rootAllowlistFormatResult.warnings.length} warnings`);

  // Portable Skill Export
  console.log('\n📦 Running Portable Skill Export Checks...');
  const exportPortableSkillsResult = normalizeSuiteResult(await exportPortableSkillsTests.runTests());
  totalErrors += exportPortableSkillsResult.errors.length;
  totalWarnings += exportPortableSkillsResult.warnings.length;
  console.log(`   ${exportPortableSkillsResult.errors.length} errors, ${exportPortableSkillsResult.warnings.length} warnings`);

  // Docs-guide Source of Truth
  console.log('\n📚 Running Docs-guide Source-of-Truth Checks...');
  if (hasStagedDocsGuideSotChanges()) {
    const docsGuideSotResult = normalizeSuiteResult(docsGuideSotTests.runTests({ stagedOnly }));
    totalErrors += docsGuideSotResult.errors.length;
    totalWarnings += docsGuideSotResult.warnings.length;
    console.log(`   ${docsGuideSotResult.errors.length} errors, ${docsGuideSotResult.warnings.length} warnings`);
  } else {
    console.log('   skipped (no staged docs-guide source-of-truth changes)');
  }

  // UI Template Generator
  console.log('\n🧱 Running UI Template Generator Checks...');
  if (hasStagedUiTemplateChanges()) {
    const uiTemplateGeneratorResult = normalizeSuiteResult(uiTemplateGeneratorTests.runTests());
    totalErrors += uiTemplateGeneratorResult.errors.length;
    totalWarnings += uiTemplateGeneratorResult.warnings.length;
    console.log(`   ${uiTemplateGeneratorResult.errors.length} errors, ${uiTemplateGeneratorResult.warnings.length} warnings`);
  } else {
    console.log('   skipped (no staged UI template changes)');
  }

  // Component Governance Utility Tests
  console.log('\n🧩 Running Component Governance Utility Tests...');
  const componentGovernanceUtilsResult = normalizeSuiteResult(componentGovernanceUtilsTests.runTests());
  totalErrors += componentGovernanceUtilsResult.errors.length;
  totalWarnings += componentGovernanceUtilsResult.warnings.length;
  console.log(
    `   ${componentGovernanceUtilsResult.errors.length} errors, ${componentGovernanceUtilsResult.warnings.length} warnings`
  );

  // Component Governance Generator Tests
  console.log('\n🗂️  Running Component Governance Generator Tests...');
  if (hasStagedComponentGovernanceChanges()) {
    const componentGovernanceGeneratorResult = normalizeSuiteResult(componentGovernanceGeneratorTests.runTests());
    totalErrors += componentGovernanceGeneratorResult.errors.length;
    totalWarnings += componentGovernanceGeneratorResult.warnings.length;
    console.log(
      `   ${componentGovernanceGeneratorResult.errors.length} errors, ${componentGovernanceGeneratorResult.warnings.length} warnings`
    );
  } else {
    console.log('   skipped (no staged component governance changes)');
  }

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
  const pagesIndexResult = normalizeSuiteResult(pagesIndexGenerator.run({ stagedOnly }));
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
