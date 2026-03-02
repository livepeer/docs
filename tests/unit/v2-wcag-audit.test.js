#!/usr/bin/env node
/**
 * @script v2-wcag-audit.test
 * @summary Unit tests for v2 WCAG audit helper logic (args, thresholds, route mapping, report sorting, and conservative autofixes).
 * @owner docs
 * @scope tests/unit, tests/integration
 *
 * @usage
 *   node tests/unit/v2-wcag-audit.test.js
 *
 * @inputs
 *   No required CLI flags.
 *
 * @outputs
 *   - Console test summary.
 *
 * @exit-codes
 *   0 = all unit cases passed
 *   1 = one or more cases failed
 *
 * @examples
 *   node tests/unit/v2-wcag-audit.test.js
 *
 * @notes
 *   Uses pure/helper exports from tests/integration/v2-wcag-audit.js to avoid browser/server dependencies.
 */

const assert = require('assert');
const path = require('path');
const wcag = require('../integration/v2-wcag-audit');
const fileWalker = require('../utils/file-walker');

let errors = [];
let warnings = [];

function runCase(name, fn) {
  try {
    fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push({
      rule: 'v2-wcag-audit unit',
      message: `${name}: ${error.message}`,
      line: 1,
      file: 'tests/unit/v2-wcag-audit.test.js'
    });
  }
}

function runTests() {
  errors = [];
  warnings = [];

  console.log('🧪 v2 WCAG Audit Unit Tests');

  runCase('Excludes x-* paths anywhere under v2', () => {
    assert.strictEqual(fileWalker.isExcludedV2ExperimentalPath('v2/x-pages/a.mdx'), true);
    assert.strictEqual(fileWalker.isExcludedV2ExperimentalPath('v2/about/x-archive/a.mdx'), true);
    assert.strictEqual(fileWalker.isExcludedV2ExperimentalPath('v2/about/livepeer-overview.mdx'), false);
  });

  runCase('Parses WCAG args with defaults and flags', () => {
    const parsed = wcag.parseArgs(['--staged', '--no-fix', '--fail-impact', 'moderate']);
    assert.strictEqual(parsed.mode, 'staged');
    assert.strictEqual(parsed.fix, false);
    assert.strictEqual(parsed.failImpact, 'moderate');
    assert.strictEqual(parsed.respectMintIgnore, true);
    assert.strictEqual(parsed.maxPages, 10);
  });

  runCase('Parses --no-mintignore override', () => {
    const parsed = wcag.parseArgs(['--full', '--no-mintignore']);
    assert.strictEqual(parsed.mode, 'full');
    assert.strictEqual(parsed.respectMintIgnore, false);
  });

  runCase('Files mode does not default-cap browser pages', () => {
    const parsed = wcag.parseArgs(['--files', 'v2/about/livepeer-overview.mdx']);
    assert.strictEqual(parsed.mode, 'files');
    assert.strictEqual(parsed.maxPages, null);
  });

  runCase('Maps legacy and migrated v2 route keys to URL paths', () => {
    assert.strictEqual(wcag.routeKeyToUrlPath('v2/pages/04_gateways/index'), '/v2/04_gateways');
    assert.strictEqual(wcag.routeKeyToUrlPath('v2/about/livepeer-overview'), '/v2/about/livepeer-overview');
  });

  runCase('Supports v2-aware file route key mapping', () => {
    const root = process.cwd();
    const migrated = path.join(root, 'v2', 'about', 'livepeer-overview.mdx');
    const legacy = path.join(root, 'v2', 'x-pages', '00_home', 'home', 'primer.mdx');
    assert.strictEqual(wcag.fileToV2RouteKey(migrated), 'v2/about/livepeer-overview');
    assert.strictEqual(wcag.fileToV2RouteKey(legacy), '');
  });

  runCase('Severity threshold logic blocks expected impacts', () => {
    assert.strictEqual(wcag.severityMeetsThreshold('critical', 'serious'), true);
    assert.strictEqual(wcag.severityMeetsThreshold('serious', 'serious'), true);
    assert.strictEqual(wcag.severityMeetsThreshold('moderate', 'serious'), false);
    assert.strictEqual(wcag.severityMeetsThreshold('minor', 'none'), false);
  });

  runCase('Color contrast is normalized to advisory-only (non-blocking)', () => {
    const normalized = wcag.normalizeAxeViolation({
      id: 'color-contrast',
      impact: 'serious',
      tags: ['wcag2aa']
    });
    assert.strictEqual(normalized.impact, 'none');
    assert.strictEqual(normalized.advisory, true);
    assert.strictEqual(wcag.severityMeetsThreshold(normalized.impact, 'serious'), false);
  });

  runCase('Conservative autofix inserts iframe title, img alt, and icon-link aria-label with line numbers', () => {
    const content = [
      '# Demo',
      '<iframe src="https://www.youtube.com/embed/abc123"></iframe>',
      '<img src="/snippets/assets/media/images/Livepeer%20Stats.png" />',
      '<a href="https://github.com/livepeer"><Icon icon="github" size={20} /></a>'
    ].join('\n');

    const out = wcag.applyConservativeAutofixes(content, 'v2/internal/test.mdx', { fix: true });
    assert.strictEqual(out.changed, true);
    assert.ok(out.content.includes('title="Embedded YouTube video"'));
    assert.ok(out.content.includes('alt="Livepeer Stats"') || out.content.includes('alt="Livepeer Stats.png"') === false);
    assert.ok(out.content.includes('aria-label='));
    const rules = out.findings.map((f) => f.rule).sort();
    assert.deepStrictEqual(rules, [
      'raw-anchor-missing-accessible-name',
      'raw-iframe-missing-title',
      'raw-img-missing-alt'
    ]);
    const iframeFinding = out.findings.find((f) => f.rule === 'raw-iframe-missing-title');
    const imgFinding = out.findings.find((f) => f.rule === 'raw-img-missing-alt');
    const anchorFinding = out.findings.find((f) => f.rule === 'raw-anchor-missing-accessible-name');
    assert.strictEqual(iframeFinding.line, 2);
    assert.strictEqual(imgFinding.line, 3);
    assert.strictEqual(anchorFinding.line, 4);
    assert.strictEqual(out.autofixes.length, 3);
  });

  runCase('Autofix is idempotent on second pass', () => {
    const content = '<iframe src="https://example.com/embed"></iframe>\n';
    const first = wcag.applyConservativeAutofixes(content, 'v2/internal/one.mdx', { fix: true });
    const second = wcag.applyConservativeAutofixes(first.content, 'v2/internal/one.mdx', { fix: true });
    assert.strictEqual(first.changed, true);
    assert.strictEqual(second.changed, false);
    assert.strictEqual(second.autofixes.length, 0);
    assert.strictEqual(second.findings.length, 0);
  });

  runCase('No-fix mode reports findings without mutating content', () => {
    const content = '<img src="/foo.png" />';
    const out = wcag.applyConservativeAutofixes(content, 'v2/internal/two.mdx', { fix: false });
    assert.strictEqual(out.changed, false);
    assert.strictEqual(out.content, content);
    assert.strictEqual(out.findings.length, 1);
    assert.strictEqual(out.findings[0].fixed, false);
  });

  runCase('Summary/report helpers produce deterministic sorted rule keys and suggestions', () => {
    const results = [
      {
        file: 'v2/b.mdx',
        wcagViolations: [
          { id: 'color-contrast', impact: 'serious', suggestion: 'Fix contrast.' },
          { id: 'image-alt', impact: 'serious', suggestion: 'Add alt.' }
        ],
        bestPracticeViolations: [],
        incomplete: [],
        staticFindings: [],
        autofixes: []
      },
      {
        file: 'v2/a.mdx',
        wcagViolations: [{ id: 'color-contrast', impact: 'serious', suggestion: 'Fix contrast.' }],
        bestPracticeViolations: [],
        incomplete: [],
        staticFindings: [],
        autofixes: []
      }
    ];
    const staticFindings = [
      { rule: 'raw-img-missing-alt', impact: 'serious', fixed: false },
      { rule: 'raw-iframe-missing-title', impact: 'moderate', fixed: true }
    ];
    const summary = wcag.summarizeResults(results, staticFindings, 'serious');
    const keys = Object.keys(summary.byRule);
    assert.deepStrictEqual(keys, [...keys].sort());
    const suggestions = wcag.collectTopSuggestions(summary);
    assert.strictEqual(suggestions[0].rule, 'color-contrast');
    const report = wcag.buildJsonReport({
      args: {
        mode: 'full',
        failImpact: 'serious',
        fix: true,
        maxPages: null,
        report: wcag.DEFAULT_REPORT_MD,
        reportJson: wcag.DEFAULT_REPORT_JSON
      },
      files: [path.join(process.cwd(), 'v2', 'a.mdx')],
      excludedInputs: [],
      browserAuditedCount: 1,
      staticOnlyCount: 0,
      results,
      allStaticFindings: staticFindings,
      summary,
      suggestions,
      baseUrl: 'http://localhost:3000'
    });
    const markdown = wcag.buildMarkdownReport(report);
    assert.ok(markdown.includes('# V2 WCAG Accessibility Audit Report'));
    assert.ok(markdown.includes('color-contrast'));
  });

  return {
    errors,
    warnings,
    passed: errors.length === 0,
    total: 12
  };
}

if (require.main === module) {
  const result = runTests();
  if (result.passed) {
    console.log(`\n✅ v2 WCAG audit unit tests passed (${result.total} cases)`);
    process.exit(0);
  }
  console.error(`\n❌ ${result.errors.length} v2 WCAG audit unit test failure(s)`);
  result.errors.forEach((err) => console.error(`  - ${err.message}`));
  process.exit(1);
}

module.exports = { runTests };
