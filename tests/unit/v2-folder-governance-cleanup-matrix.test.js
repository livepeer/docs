#!/usr/bin/env node
/**
 * @script            v2-folder-governance-cleanup-matrix.test
 * @category          validator
 * @purpose           governance:repo-health
 * @scope             tests/unit, tools/scripts/generate-v2-folder-governance-cleanup-matrix.js
 * @domain            docs
 * @needs             E-C1, R-R14
 * @purpose-statement Unit tests for the v2 folder governance cleanup matrix generator — verifies core classification, targeting, and age-bucket rules.
 * @pipeline          manual — planning artifact validator
 * @usage             node tests/unit/v2-folder-governance-cleanup-matrix.test.js
 */

const assert = require('assert');
const matrix = require('../../tools/scripts/generate-v2-folder-governance-cleanup-matrix');

let failures = [];

function runCase(name, fn) {
  try {
    fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    failures.push(`${name}: ${error.message}`);
  }
}

function runTests() {
  failures = [];

  console.log('🧪 V2 Folder Governance Cleanup Matrix Unit Tests');

  runCase('Detects targeted inventory paths across legacy workspace buckets', () => {
    assert.strictEqual(matrix.isTargetInventoryPath('v2/orchestrators/_contextData/product-thinking-handoff.md'), true);
    assert.strictEqual(matrix.isTargetInventoryPath('v2/orchestrators/_plans-and-research/product-thinking-review.md'), true);
    assert.strictEqual(matrix.isTargetInventoryPath('v2/gateways/guides/advanced-operations/x-resources/sources.md'), true);
    assert.strictEqual(matrix.isTargetInventoryPath('v2/orchestrators/guides/deployment-details/review.md'), true);
    assert.strictEqual(matrix.isTargetInventoryPath('v2/orchestrators/portal.mdx'), false);
  });

  runCase('Classifies artifact classes for review, handoff, plan, draft, archive, and deprecated paths', () => {
    assert.strictEqual(matrix.classifyArtifactClass('v2/orchestrators/guides/deployment-details/review.md'), 'review');
    assert.strictEqual(matrix.classifyArtifactClass('v2/orchestrators/_contextData/product-thinking-handoff.md'), 'handoff');
    assert.strictEqual(matrix.classifyArtifactClass('v2/orchestrators/_plans-and-research/concepts-restructure.md'), 'plan');
    assert.strictEqual(matrix.classifyArtifactClass('v2/developers/_contextData/Developers_new/ai-on-livepeer-draft.mdx'), 'draft-page');
    assert.strictEqual(matrix.classifyArtifactClass('v2/developers/_archive/research-documents/brief-01-research-report.md'), 'archive');
    assert.strictEqual(matrix.classifyArtifactClass('v2/orchestrators/concepts/x-deprecated/legacy-page.mdx'), 'deprecated-page');
  });

  runCase('Derives locale, core, internal, and archive scope roots', () => {
    assert.deepStrictEqual(matrix.getScopeInfo('v2/orchestrators/_contextData/product-thinking-handoff.md'), {
      localeScope: 'core',
      localeCode: '',
      section: 'orchestrators',
      sectionRoot: 'v2/orchestrators',
      sectionIndex: 1
    });
    assert.deepStrictEqual(matrix.getScopeInfo('v2/es/developers/_contextData/brief-01-research-report.md'), {
      localeScope: 'locale',
      localeCode: 'es',
      section: 'developers',
      sectionRoot: 'v2/es/developers',
      sectionIndex: 2
    });
    assert.deepStrictEqual(matrix.getScopeInfo('v2/internal/rfp/report.mdx'), {
      localeScope: 'internal',
      localeCode: '',
      section: 'internal',
      sectionRoot: 'v2/internal',
      sectionIndex: 1
    });
    assert.deepStrictEqual(matrix.getScopeInfo('v2/x-archived/orchestrators/legacy-plan.md'), {
      localeScope: 'archive',
      localeCode: '',
      section: 'orchestrators',
      sectionRoot: 'v2/x-archived/orchestrators',
      sectionIndex: 2
    });
    assert.deepStrictEqual(matrix.getScopeInfo('v2/cn/README.md'), {
      localeScope: 'locale',
      localeCode: 'cn',
      section: 'cn',
      sectionRoot: 'v2/cn',
      sectionIndex: 1
    });
    assert.deepStrictEqual(matrix.getScopeInfo('v2/x-archived/index.mdx'), {
      localeScope: 'archive',
      localeCode: '',
      section: 'x-archived',
      sectionRoot: 'v2/x-archived',
      sectionIndex: 1
    });
  });

  runCase('Computes recommended workspace, deprecated, and archive target paths', () => {
    const coreScope = matrix.getScopeInfo('v2/orchestrators/_contextData/product-thinking-handoff.md');
    assert.strictEqual(
      matrix.computeRecommendedTargetPath(
        'v2/orchestrators/_contextData/product-thinking-handoff.md',
        coreScope,
        'handoff',
        matrix.computeRecommendedLane('handoff')
      ),
      'v2/orchestrators/_workspace/handoff/product-thinking-handoff.md'
    );

    const reviewScope = matrix.getScopeInfo('v2/orchestrators/guides/deployment-details/review.md');
    assert.strictEqual(
      matrix.computeRecommendedTargetPath(
        'v2/orchestrators/guides/deployment-details/review.md',
        reviewScope,
        'review',
        matrix.computeRecommendedLane('review')
      ),
      'v2/orchestrators/_workspace/reviews/guides/deployment-details/review.md'
    );

    const deprecatedScope = matrix.getScopeInfo('v2/orchestrators/concepts/x-deprecated/legacy-page.mdx');
    assert.strictEqual(
      matrix.computeRecommendedTargetPath(
        'v2/orchestrators/concepts/x-deprecated/legacy-page.mdx',
        deprecatedScope,
        'deprecated-page',
        matrix.computeRecommendedLane('deprecated-page')
      ),
      'v2/orchestrators/x-deprecated/concepts/legacy-page.mdx'
    );

    const archiveScope = matrix.getScopeInfo('v2/developers/_archive/research-documents/brief-01-research-report.md');
    assert.strictEqual(
      matrix.computeRecommendedTargetPath(
        'v2/developers/_archive/research-documents/brief-01-research-report.md',
        archiveScope,
        'archive',
        matrix.computeRecommendedLane('archive')
      ),
      'v2/x-archived/developers/research-documents/brief-01-research-report.md'
    );

    const localeRootScope = matrix.getScopeInfo('v2/cn/README.md');
    assert.strictEqual(
      matrix.computeRecommendedTargetPath(
        'v2/cn/README.md',
        localeRootScope,
        'research',
        matrix.computeRecommendedLane('research')
      ),
      'v2/cn/_workspace/research/README.md'
    );
  });

  runCase('Calculates publishability risk from docs routes and ambiguous md files', () => {
    const docsRoutes = new Set(['v2/orchestrators/portal', 'v2/orchestrators/navigator']);
    assert.strictEqual(matrix.determinePublishabilityRisk('v2/orchestrators/portal.mdx', docsRoutes), 'routable');
    assert.strictEqual(
      matrix.determinePublishabilityRisk('v2/orchestrators/_contextData/product-thinking-handoff.md', docsRoutes),
      'non-routable'
    );
    assert.strictEqual(matrix.determinePublishabilityRisk('v2/orchestrators/execution-plan.md', docsRoutes), 'ambiguous');
  });

  runCase('Builds the expected age buckets', () => {
    assert.strictEqual(matrix.classifyAgeBucket(1), '0-7d');
    assert.strictEqual(matrix.classifyAgeBucket(12), '8-30d');
    assert.strictEqual(matrix.classifyAgeBucket(45), '31-90d');
    assert.strictEqual(matrix.classifyAgeBucket(120), '90d+');
  });

  return failures;
}

if (require.main === module) {
  const result = runTests();
  if (result.length === 0) {
    console.log('\n✅ V2 folder governance cleanup matrix unit tests passed (6 cases)');
    process.exit(0);
  }
  console.error(`\n❌ ${result.length} v2 folder governance cleanup matrix unit test failure(s)`);
  result.forEach((message) => console.error(`  - ${message}`));
  process.exit(1);
}

module.exports = { runTests };
