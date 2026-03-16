#!/usr/bin/env node
/**
 * @script            docs-research-packet.test
 * @category          generator
 * @purpose           tooling:dev-tools
 * @scope             tests/unit, tools/scripts/docs-research-packet.js, tools/config/scoped-navigation/docs-gate-work.json
 * @domain            docs
 * @needs             R-R27, R-R30
 * @purpose-statement Tests docs-research-packet.js — validates nav, manifest, and path tranche derivation plus packet-summary rollups for the generic research packet engine.
 * @pipeline          manual — packet generator validation
 * @usage             node tests/unit/docs-research-packet.test.js
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const NAV_PATH = path.join(REPO_ROOT, 'tools/config/scoped-navigation/docs-gate-work.json');
const helpers = require('../../tools/scripts/docs-research-packet.js');

function mkTmpDir(prefix) {
  const root = path.join(REPO_ROOT, '.tmp');
  fs.mkdirSync(root, { recursive: true });
  return fs.mkdtempSync(path.join(root, prefix));
}

function writeFile(absPath, content = '# synthetic\n') {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content, 'utf8');
}

async function runTests() {
  const failures = [];
  const cases = [];

  cases.push(async () => {
    const nav = JSON.parse(fs.readFileSync(NAV_PATH, 'utf8'));
    const tranches = helpers.buildNavTranches(nav, {
      version: 'v2',
      language: 'en',
      tab: 'Orchestrators',
      group: 'Guides'
    });
    const totalPages = tranches.reduce((count, tranche) => count + tranche.pages.length, 0);

    assert.strictEqual(tranches.length, 9, 'expected 9 live nav tranches');
    assert.strictEqual(totalPages, 45, 'expected 45 live nav pages');
    assert.strictEqual(tranches[0].slug, '01-operator-considerations');
    assert.strictEqual(tranches[8].slug, '09-tutorials');
  });

  cases.push(async () => {
    const manifest = {
      name: 'Synthetic packet',
      outputRoot: 'tasks/reports/synthetic-review/research',
      excludePatterns: ['**/review.md'],
      tranches: [
        {
          title: 'Second Tranche',
          slug: 'second-tranche',
          files: [
            'v2/orchestrators/guides/deployment-details/setup-options.mdx',
            'v2/orchestrators/guides/deployment-details/review.md'
          ]
        },
        {
          title: 'First Tranche',
          files: ['v2/orchestrators/guides/operator-considerations/operator-rationale.mdx']
        }
      ]
    };

    const tranches = helpers.buildManifestTranches(manifest, { tranche: [] });

    assert.strictEqual(tranches.length, 2);
    assert.strictEqual(tranches[0].title, 'Second Tranche');
    assert.deepStrictEqual(tranches[0].pages, ['v2/orchestrators/guides/deployment-details/setup-options.mdx']);
    assert.strictEqual(tranches[1].slug, '02-first-tranche');
  });

  cases.push(async () => {
    const tmpRoot = mkTmpDir('docs-research-packet-');
    try {
      writeFile(path.join(tmpRoot, 'alpha', 'keep-a.mdx'));
      writeFile(path.join(tmpRoot, 'alpha', 'review.md'));
      writeFile(path.join(tmpRoot, 'beta', 'keep-b.mdx'));
      writeFile(path.join(tmpRoot, 'beta', 'dep-legacy.mdx'));
      writeFile(path.join(tmpRoot, 'beta', 'x-deprecated', 'hidden.mdx'));

      const tranches = helpers.buildPathTranches({
        files: [],
        folders: [path.relative(REPO_ROOT, tmpRoot)],
        splitBy: 'dir'
      });

      assert.strictEqual(tranches.length, 2, 'expected one tranche per in-scope directory');
      assert.deepStrictEqual(
        tranches.map((tranche) => tranche.pages),
        [
          [path.relative(REPO_ROOT, path.join(tmpRoot, 'alpha', 'keep-a.mdx')).split(path.sep).join('/')],
          [path.relative(REPO_ROOT, path.join(tmpRoot, 'beta', 'keep-b.mdx')).split(path.sep).join('/')]
        ]
      );
    } finally {
      fs.rmSync(tmpRoot, { recursive: true, force: true });
      const tmpParent = path.join(REPO_ROOT, '.tmp');
      if (fs.existsSync(tmpParent) && fs.readdirSync(tmpParent).length === 0) {
        fs.rmdirSync(tmpParent);
      }
    }
  });

  cases.push(async () => {
    const summary = helpers.buildPacketSummary(
      [
        {
          tranche: {
            index: 1,
            title: 'Synthetic',
            slug: '01-synthetic',
            pages: ['v2/orchestrators/guides/operator-considerations/operator-rationale.mdx']
          },
          registryValidate: { status: 0 },
          adjudicationValidate: { status: 0 },
          pageRun: { status: 0 },
          prRun: { status: 0 },
          pageReport: {
            verified_claims: [{}],
            conflicted_claims: [{}, {}],
            time_sensitive_claims: [{}],
            unverified_or_historical_claims: [],
            cross_page_contradictions: [{}, {}],
            propagation_queue: [{}, {}, {}],
            evidence_sources: [{}, {}, {}, {}],
            trust_summary: {
              explicit_page_targets: 2,
              inferred_page_targets: 1
            }
          },
          prReport: { summary: {} },
          artifacts: {
            summaryMd: 'tasks/reports/synthetic/01-synthetic/03-research.md',
            summaryJson: 'tasks/reports/synthetic/01-synthetic/research-summary.json'
          }
        }
      ],
      {
        title: 'Synthetic Packet',
        mode: 'manifest',
        outputRoot: 'tasks/reports/synthetic',
        navSource: '',
        manifestPath: 'tasks/reports/synthetic-manifest.json',
        scopeStatement: 'manifest-defined route groups',
        explicitFiles: [],
        explicitFolders: []
      }
    );

    assert.strictEqual(summary.totals.verified_claims, 1);
    assert.strictEqual(summary.totals.conflicted_claims, 2);
    assert.strictEqual(summary.tranches[0].counts.evidence_sources, 4);
    assert.strictEqual(summary.tranches[0].artifacts.summaryMd, 'tasks/reports/synthetic/01-synthetic/03-research.md');
  });

  for (let index = 0; index < cases.length; index += 1) {
    const name = `case-${index + 1}`;
    try {
      // eslint-disable-next-line no-await-in-loop
      await cases[index]();
      console.log(`   ✓ ${name}`);
    } catch (error) {
      failures.push(`${name}: ${error.message}`);
    }
  }

  return {
    passed: failures.length === 0,
    total: cases.length,
    errors: failures
  };
}

if (require.main === module) {
  runTests()
    .then((result) => {
      if (result.passed) {
        console.log(`\n✅ docs-research-packet tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} docs-research-packet test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ docs-research-packet tests crashed: ${error.message}`);
      process.exit(1);
    });
}
