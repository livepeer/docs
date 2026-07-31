#!/usr/bin/env node
/**
 * @script            frontmatter-taxonomy.test
 * @type              validator
 * @concern           governance
 * @niche             taxonomy
 * @purpose           qa:content-quality
 * @scope             tests, tools/lib
 * @description       Verifies shared docs frontmatter taxonomy normalization and purpose mapping.
 * @mode              read-only
 * @pipeline          P1 (commit, via run-all)
 * @usage             node operations/tests/unit/frontmatter-taxonomy.test.js
 * @policy            E-R1, R-R11
 */

const assert = require('assert');
const taxonomy = require('../../../tools/lib/docs/frontmatter-taxonomy');

function runTests() {
  const errors = [];
  const warnings = [];

  // ── Phase 1 canonical acceptance ──────────────────────────────────────────
  try {
    // pageType
    assert.strictEqual(taxonomy.isValidPageType('navigation'),  true);
    assert.strictEqual(taxonomy.isValidPageType('concept'),     true);
    assert.strictEqual(taxonomy.isValidPageType('tutorial'),    true);
    assert.strictEqual(taxonomy.isValidPageType('guide'),       true);
    assert.strictEqual(taxonomy.isValidPageType('instruction'), true);
    assert.strictEqual(taxonomy.isValidPageType('reference'),   true);
    assert.strictEqual(taxonomy.isValidPageType('resource'),    true);
    // purpose
    assert.strictEqual(taxonomy.isValidPurpose('orient'),      true);
    assert.strictEqual(taxonomy.isValidPurpose('explain'),     true);
    assert.strictEqual(taxonomy.isValidPurpose('choose'),      true);
    assert.strictEqual(taxonomy.isValidPurpose('start'),       true);
    assert.strictEqual(taxonomy.isValidPurpose('build'),       true);
    assert.strictEqual(taxonomy.isValidPurpose('configure'),   true);
    assert.strictEqual(taxonomy.isValidPurpose('operate'),     true);
    assert.strictEqual(taxonomy.isValidPurpose('troubleshoot'),true);
    assert.strictEqual(taxonomy.isValidPurpose('optimise'),    true);
    assert.strictEqual(taxonomy.isValidPurpose('integrate'),   true);
    assert.strictEqual(taxonomy.isValidPurpose('verify'),      true);
    assert.strictEqual(taxonomy.isValidPurpose('evaluate'),    true);
    assert.strictEqual(taxonomy.isValidPurpose('reference'),   true);
    assert.strictEqual(taxonomy.isValidPurpose('learn'),       true);
    assert.strictEqual(taxonomy.isValidPurpose('update'),      true);
    // status
    assert.strictEqual(taxonomy.isValidStatus('current'), true);
    assert.strictEqual(taxonomy.isValidStatus('review'),  true);
  } catch (error) {
    errors.push(`canonical taxonomy acceptance failed: ${error.message}`);
  }

  // ── Old pageType values as deprecated aliases ─────────────────────────────
  try {
    const landing        = taxonomy.normalizePageType('landing');
    const how_to         = taxonomy.normalizePageType('how_to');
    const quickstart     = taxonomy.normalizePageType('quickstart');
    const faq            = taxonomy.normalizePageType('faq');
    const troubleshooting= taxonomy.normalizePageType('troubleshooting');
    const changelog      = taxonomy.normalizePageType('changelog');
    const glossary       = taxonomy.normalizePageType('glossary');
    const portal         = taxonomy.normalizePageType('portal');
    const conceptual     = taxonomy.normalizePageType('conceptual');

    assert.deepStrictEqual(
      { canonical: landing.canonical, valid: landing.valid, deprecatedAlias: landing.deprecatedAlias },
      { canonical: 'navigation', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: how_to.canonical, valid: how_to.valid, deprecatedAlias: how_to.deprecatedAlias },
      { canonical: 'instruction', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: quickstart.canonical, valid: quickstart.valid, deprecatedAlias: quickstart.deprecatedAlias },
      { canonical: 'instruction', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: faq.canonical, valid: faq.valid, deprecatedAlias: faq.deprecatedAlias },
      { canonical: 'reference', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: troubleshooting.canonical, valid: troubleshooting.valid, deprecatedAlias: troubleshooting.deprecatedAlias },
      { canonical: 'reference', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: changelog.canonical, valid: changelog.valid, deprecatedAlias: changelog.deprecatedAlias },
      { canonical: 'reference', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: glossary.canonical, valid: glossary.valid, deprecatedAlias: glossary.deprecatedAlias },
      { canonical: 'reference', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: portal.canonical, valid: portal.valid, deprecatedAlias: portal.deprecatedAlias },
      { canonical: 'navigation', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: conceptual.canonical, valid: conceptual.valid, deprecatedAlias: conceptual.deprecatedAlias },
      { canonical: 'concept', valid: true, deprecatedAlias: true }
    );
    assert.match(taxonomy.getPageTypeAdvisory('landing'), /Deprecated pageType alias "landing"/);
    assert.match(taxonomy.getPageTypeAdvisory('how_to'),  /Deprecated pageType alias "how_to"/);
  } catch (error) {
    errors.push(`deprecated pageType alias normalization failed: ${error.message}`);
  }

  // ── Old purpose values as deprecated aliases ──────────────────────────────
  try {
    const orientation    = taxonomy.normalizePurpose('orientation');
    const evaluation     = taxonomy.normalizePurpose('evaluation');
    const operations     = taxonomy.normalizePurpose('operations');
    const setup          = taxonomy.normalizePurpose('setup');
    const how_to_p       = taxonomy.normalizePurpose('how_to');
    const concept_p      = taxonomy.normalizePurpose('concept');
    const guide_p        = taxonomy.normalizePurpose('guide');
    const changelog_p    = taxonomy.normalizePurpose('changelog');
    const troubleshoot_p = taxonomy.normalizePurpose('troubleshooting');

    assert.deepStrictEqual(
      { canonical: orientation.canonical, valid: orientation.valid, deprecatedAlias: orientation.deprecatedAlias },
      { canonical: 'orient', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: evaluation.canonical, valid: evaluation.valid, deprecatedAlias: evaluation.deprecatedAlias },
      { canonical: 'choose', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: operations.canonical, valid: operations.valid, deprecatedAlias: operations.deprecatedAlias },
      { canonical: 'operate', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: setup.canonical, valid: setup.valid, deprecatedAlias: setup.deprecatedAlias },
      { canonical: 'configure', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: how_to_p.canonical, valid: how_to_p.valid, deprecatedAlias: how_to_p.deprecatedAlias },
      { canonical: 'build', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: concept_p.canonical, valid: concept_p.valid, deprecatedAlias: concept_p.deprecatedAlias },
      { canonical: 'explain', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: guide_p.canonical, valid: guide_p.valid, deprecatedAlias: guide_p.deprecatedAlias },
      { canonical: 'operate', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: changelog_p.canonical, valid: changelog_p.valid, deprecatedAlias: changelog_p.deprecatedAlias },
      { canonical: 'update', valid: true, deprecatedAlias: true }
    );
    assert.deepStrictEqual(
      { canonical: troubleshoot_p.canonical, valid: troubleshoot_p.valid, deprecatedAlias: troubleshoot_p.deprecatedAlias },
      { canonical: 'troubleshoot', valid: true, deprecatedAlias: true }
    );
    assert.match(taxonomy.getPurposeAdvisory('orientation'), /Deprecated purpose alias "orientation"/);
    assert.match(taxonomy.getPurposeAdvisory('guide'),       /Deprecated purpose alias "guide"/);
  } catch (error) {
    errors.push(`deprecated purpose alias normalization failed: ${error.message}`);
  }

  // ── Invalid rejection ─────────────────────────────────────────────────────
  try {
    assert.strictEqual(taxonomy.isValidPageType('not-real'), false);
    assert.strictEqual(taxonomy.isValidPageType('overview'), false);  // no alias — must be explicitly migrated
    assert.strictEqual(taxonomy.isValidPurpose('not-real'),  false);
    assert.strictEqual(taxonomy.isValidStatus('active'),     false);
    assert.strictEqual(taxonomy.pageTypeToPurpose('not-real'),    '');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('not-real'), '');
  } catch (error) {
    errors.push(`invalid taxonomy rejection failed: ${error.message}`);
  }

  // ── pageTypeToPurpose ─────────────────────────────────────────────────────
  try {
    // Direct canonical values
    assert.strictEqual(taxonomy.pageTypeToPurpose('navigation'),  'orient');
    assert.strictEqual(taxonomy.pageTypeToPurpose('concept'),     'explain');
    assert.strictEqual(taxonomy.pageTypeToPurpose('tutorial'),    'learn');
    assert.strictEqual(taxonomy.pageTypeToPurpose('guide'),       'operate');
    assert.strictEqual(taxonomy.pageTypeToPurpose('instruction'), 'build');
    assert.strictEqual(taxonomy.pageTypeToPurpose('reference'),   'reference');
    assert.strictEqual(taxonomy.pageTypeToPurpose('resource'),    'orient');
    // Via deprecated aliases
    assert.strictEqual(taxonomy.pageTypeToPurpose('landing'),    'orient');   // landing→navigation→orient
    assert.strictEqual(taxonomy.pageTypeToPurpose('how_to'),     'build');    // how_to→instruction→build
    assert.strictEqual(taxonomy.pageTypeToPurpose('quickstart'), 'build');    // quickstart→instruction→build
    assert.strictEqual(taxonomy.pageTypeToPurpose('portal'),     'orient');   // portal→navigation→orient
  } catch (error) {
    errors.push(`pageType to purpose mapping failed: ${error.message}`);
  }

  // ── purposeToRubricPurpose ────────────────────────────────────────────────
  try {
    assert.strictEqual(taxonomy.purposeToRubricPurpose('orient',      'navigation'),  'overview');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('explain',     'concept'),     'concept');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('choose',      'concept'),     'concept');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('evaluate',    'concept'),     'concept');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('learn',       'tutorial'),    'tutorial');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('start',       'instruction'), 'tutorial');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('build',       'instruction'), 'how_to');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('configure',   'tutorial'),    'tutorial');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('configure',   'instruction'), 'how_to');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('operate',     'guide'),       'how_to');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('operate',     'reference'),   'reference');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('troubleshoot','reference'),   'troubleshooting');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('optimise',    'guide'),       'how_to');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('integrate',   'guide'),       'how_to');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('verify',      'tutorial'),    'tutorial');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('verify',      'instruction'), 'how_to');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('reference',   'reference'),   'reference');
    assert.strictEqual(taxonomy.purposeToRubricPurpose('update',      'reference'),   'changelog');
    // Via deprecated aliases — resolve to canonical first, then rubric
    assert.strictEqual(taxonomy.purposeToRubricPurpose('orientation', 'guide'),       'overview');   // deprecated→orient→overview
    assert.strictEqual(taxonomy.purposeToRubricPurpose('operations',  'guide'),       'how_to');     // deprecated→operate→how_to
    assert.strictEqual(taxonomy.purposeToRubricPurpose('setup',       'guide'),       'how_to');     // deprecated→configure→how_to
  } catch (error) {
    errors.push(`purpose rubric mapping failed: ${error.message}`);
  }

  // ── isAllowedPageTypePurpose ──────────────────────────────────────────────
  try {
    // Direct canonical pairings
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('navigation',  'orient'),      true);
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('concept',     'explain'),     true);
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('concept',     'choose'),      true);
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('tutorial',    'learn'),       true);
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('guide',       'operate'),     true);
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('guide',       'build'),       true);
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('instruction', 'build'),       true);
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('instruction', 'configure'),   true);
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('reference',   'reference'),   true);
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('reference',   'learn'),       true);
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('resource',    'orient'),      true);
    // Invalid pairings
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('reference',   'build'),       false);
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('navigation',  'build'),       false);
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('reference',   'orient'),      false);
    // Via deprecated aliases
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('guide', 'operations'),  true);   // operations→operate, allowed for guide
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('guide', 'orientation'), true);   // orientation→orient, allowed for guide
    assert.strictEqual(taxonomy.isAllowedPageTypePurpose('guide', 'update'),      false);  // update not in guide's allowed purposes
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
