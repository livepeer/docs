#!/usr/bin/env node
/**
 * @script            frontmatter-taxonomy.test
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests, tools/lib
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Verifies shared docs frontmatter taxonomy normalization and purpose mapping.
 * @pipeline          P1 (commit, via run-all)
 * @usage             node tests/unit/frontmatter-taxonomy.test.js
 */

const assert = require('assert');
const taxonomy = require('../../tools/lib/frontmatter-taxonomy');

function runTests() {
  const errors = [];
  const warnings = [];

  try {
    assert.strictEqual(taxonomy.isValidPageType('concept'), true);
    assert.strictEqual(taxonomy.isValidPageType('how_to'), true);
    assert.strictEqual(taxonomy.isValidPurpose('orientation'), true);
    assert.strictEqual(taxonomy.isValidPurpose('reference'), true);
    assert.strictEqual(taxonomy.isValidStatus('current'), true);
    assert.strictEqual(taxonomy.isValidStatus('review'), true);
  } catch (error) {
    errors.push(`canonical taxonomy acceptance failed: ${error.message}`);
  }

  try {
    const portal = taxonomy.normalizePageType('portal');
    const api = taxonomy.normalizePageType('api');
    const conceptual = taxonomy.normalizePageType('conceptual');

    assert.deepStrictEqual(
      { canonical: portal.canonical, valid: portal.valid, deprecatedAlias: portal.deprecatedAlias },
      { canonical: 'landing', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: api.canonical, valid: api.valid, deprecatedAlias: api.deprecatedAlias },
      { canonical: 'reference', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: conceptual.canonical, valid: conceptual.valid, deprecatedAlias: conceptual.deprecatedAlias },
      { canonical: 'concept', valid: true, deprecatedAlias: true }
    );
    assert.match(taxonomy.getPageTypeAdvisory('portal'), /Deprecated pageType alias "portal"/);
  } catch (error) {
    errors.push(`deprecated alias normalization failed: ${error.message}`);
  }

  try {
    const guide = taxonomy.normalizePurpose('guide');
    const operational = taxonomy.normalizePurpose('operational');
    const concepts = taxonomy.normalizePurpose('concepts');

    assert.deepStrictEqual(
      { canonical: guide.canonical, valid: guide.valid, deprecatedAlias: guide.deprecatedAlias },
      { canonical: 'operations', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: operational.canonical, valid: operational.valid, deprecatedAlias: operational.deprecatedAlias },
      { canonical: 'operations', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: concepts.canonical, valid: concepts.valid, deprecatedAlias: concepts.deprecatedAlias },
      { canonical: 'concept', valid: true, deprecatedAlias: true }
    );
    assert.match(taxonomy.getPurposeAdvisory('guide'), /Deprecated purpose alias "guide"/);
  } catch (error) {
    errors.push(`purpose alias normalization failed: ${error.message}`);
  }

  try {
    assert.strictEqual(taxonomy.isValidPageType('not-real'), false);
    assert.strictEqual(taxonomy.isValidPurpose('not-real'), false);
    assert.strictEqual(taxonomy.isValidStatus('active'), false);
    assert.strictEqual(taxonomy.pageTypeToPurpose('not-real'), '');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('not-real'), '');
  } catch (error) {
    errors.push(`invalid taxonomy rejection failed: ${error.message}`);
  }

  try {
    assert.strictEqual(taxonomy.pageTypeToPurpose('guide'), 'operations');
    assert.strictEqual(taxonomy.pageTypeToPurpose('quickstart'), 'tutorial');
    assert.strictEqual(taxonomy.pageTypeToPurpose('landing'), 'landing');
    assert.strictEqual(taxonomy.pageTypeToPurpose('portal'), 'landing');
    assert.strictEqual(taxonomy.pageTypeToPurpose('index'), 'overview');
  } catch (error) {
    errors.push(`pageType to purpose mapping failed: ${error.message}`);
  }

  try {
    assert.strictEqual(taxonomy.purposeToRubricPurpose('orientation', 'guide'), 'overview');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('evaluation', 'guide'), 'concept');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('setup', 'quickstart'), 'tutorial');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('setup', 'guide'), 'how_to');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('operations', 'troubleshooting'), 'troubleshooting');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('operations', 'guide'), 'how_to');
  } catch (error) {
    errors.push(`purpose rubric mapping failed: ${error.message}`);
  }

  try {
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('guide', 'orientation'), true);
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('guide', 'evaluation'), true);
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('troubleshooting', 'operational'), true);
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('reference', 'reference'), true);
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('reference', 'orientation'), false);
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('guide', 'landing'), false);
  } catch (error) {
    errors.push(`pageType + purpose pairing failed: ${error.message}`);
  }

  return { errors, warnings };
}

if (require.main === module) {
  const result = runTests();
  result.errors.forEach((error) => console.error(error));
  result.warnings.forEach((warning) => console.warn(warning));
  process.exit(result.errors.length > 0 ? 1 : 0);
}

module.exports = { runTests };
