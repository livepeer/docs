#!/usr/bin/env node
/**
 * @script            page-integrity-rolling-issue.test
 * @category          validator
 * @type              validator
 * @purpose           qa:repo-health
 * @scope             tests/unit, operations/scripts/dispatch/content/health
 * @owner             docs
 * @needs             E-R12, E-R14
 * @purpose-statement Tests page integrity rolling issue helper — validates dedup, issue action selection, and issue body structure.
 * @pipeline          manual
 * @usage             node operations/tests/unit/page-integrity-rolling-issue.test.js
 */

const assert = require('assert');
const helpers = require('../../scripts/dispatch/content/health/page-integrity-rolling-issue');

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
  console.log('🧪 page-integrity rolling issue unit tests');

  runCase('findMarkerIssue prefers open issue with page-integrity marker', () => {
    const items = [
      { number: 1, state: 'closed', body: 'x <!-- page-integrity-dispatch --> x' },
      { number: 2, state: 'open', body: 'x <!-- page-integrity-dispatch --> x' }
    ];
    const issue = helpers.findMarkerIssue(items);
    assert(issue);
    assert.strictEqual(issue.number, 2);
  });

  runCase('getIssueAction selects create update close noop as expected', () => {
    assert.strictEqual(helpers.getIssueAction({ existingIssue: null, unresolvedCount: 2 }), 'create');
    assert.strictEqual(
      helpers.getIssueAction({ existingIssue: { number: 4, state: 'open' }, unresolvedCount: 2 }),
      'update'
    );
    assert.strictEqual(
      helpers.getIssueAction({ existingIssue: { number: 4, state: 'open' }, unresolvedCount: 0 }),
      'close'
    );
    assert.strictEqual(helpers.getIssueAction({ existingIssue: null, unresolvedCount: 0 }), 'noop');
  });

  runCase('buildIssueBody includes required sections and marker', () => {
    const body = helpers.buildIssueBody({
      runUrl: 'https://example.test/run/1',
      topFindings: '- missing-link: v2/foo.mdx:10 (/v2/missing)',
      unresolvedCount: 1,
      scannedFiles: 3,
      linksSummary: { unresolvedCount: 1, fileCount: 2 },
      importsSummary: { errorCount: 0, fileCount: 1 }
    });

    [
      '### Area',
      '### Failing command or workflow',
      '### Script or workflow path',
      '### Full error output',
      '### Reproduction conditions',
      '### Expected behavior',
      '### Requested repository outcome',
      '### Classification',
      '### Priority'
    ].forEach((heading) => assert(body.includes(heading), `missing ${heading}`));

    assert(body.includes(helpers.ROLLING_ISSUE_MARKER));
  });

  if (failures.length > 0) {
    console.error('\n❌ page-integrity rolling issue unit tests failed\n');
    failures.forEach((failure) => console.error(`  - ${failure}`));
    process.exit(1);
  }

  console.log('\n✅ page-integrity rolling issue unit tests passed');
}

if (require.main === module) {
  runTests();
}

module.exports = { runTests };
