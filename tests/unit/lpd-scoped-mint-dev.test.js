#!/usr/bin/env node
/**
 * @script lpd-scoped-mint-dev.test
 * @summary Validate scoped lpd mint-dev profile filtering, generated .mintignore exclusions, and dry-run flag wiring.
 * @owner docs
 * @scope tests/unit, lpd, tools/scripts/mint-dev.sh, tools/scripts/dev/generate-mint-dev-scope.js
 *
 * @usage
 *   node tests/unit/lpd-scoped-mint-dev.test.js
 *
 * @inputs
 *   No required CLI flags.
 *
 * @outputs
 *   - Console summary of scoped-mint-dev test assertions.
 *
 * @exit-codes
 *   0 = all test cases passed
 *   1 = one or more test cases failed
 *
 * @examples
 *   node tests/unit/lpd-scoped-mint-dev.test.js
 *
 * @notes
 *   Uses fixture navigation and temporary directories; does not mutate tracked repository files.
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');
const {
  collectRoutesFromNavigation,
  collectOptionsFromNavigation,
  buildScopedNavigation,
  buildScopedMetadata,
  buildScopedMintignore
} = require('../../tools/scripts/dev/generate-mint-dev-scope');

const REPO_ROOT = process.cwd();
const LPD_PATH = path.join(REPO_ROOT, 'lpd');
const SCOPE_SCRIPT_PATH = path.join(REPO_ROOT, 'tools/scripts/dev/generate-mint-dev-scope.js');

const SAMPLE_NAVIGATION = {
  versions: [
    {
      version: 'v2',
      languages: [
        {
          language: 'en',
          tabs: [
            {
              tab: 'Developers',
              anchors: [
                {
                  anchor: 'Build',
                  groups: [
                    {
                      group: 'Dev',
                      pages: ['v2/dev/get-started', 'v2/dev/api-reference/auth']
                    }
                  ]
                }
              ]
            },
            {
              tab: 'Gateways',
              anchors: [
                {
                  anchor: 'Run',
                  groups: [
                    {
                      group: 'Gateway',
                      pages: ['v2/gateways/overview']
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          language: 'es',
          tabs: [
            {
              tab: 'Developers',
              anchors: [
                {
                  anchor: 'Construir',
                  groups: [
                    {
                      group: 'Dev',
                      pages: ['v2/es/dev/get-started']
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      version: 'v1',
      languages: [
        {
          language: 'en',
          tabs: [
            {
              tab: 'Legacy',
              anchors: [
                {
                  anchor: 'Legacy',
                  groups: [
                    {
                      group: 'Legacy',
                      pages: ['v1/legacy/overview']
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

function runLpd(args) {
  return spawnSync('bash', [LPD_PATH, ...args], {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });
}

function runScopeScript(args, cwd) {
  return spawnSync('node', [SCOPE_SCRIPT_PATH, ...args], {
    cwd,
    encoding: 'utf8'
  });
}

function mkTmpDir(prefix) {
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

function writeFile(absPath, content) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, content, 'utf8');
}

async function runTests() {
  const failures = [];
  const cases = [];

  cases.push(async () => {
    const selection = {
      versions: ['v2'],
      languages: ['en'],
      tabs: ['Developers'],
      prefixes: ['v2/dev'],
      disableOpenapi: true
    };
    const scoped = buildScopedNavigation(SAMPLE_NAVIGATION, selection);
    const routes = collectRoutesFromNavigation(scoped);
    assert.deepStrictEqual(routes, ['v2/dev/get-started']);
  });

  cases.push(async () => {
    const selection = {
      versions: ['v2'],
      languages: ['en'],
      tabs: ['Developers'],
      prefixes: ['v2/dev'],
      disableOpenapi: true
    };
    const optionData = collectOptionsFromNavigation(SAMPLE_NAVIGATION);
    const allRoutes = collectRoutesFromNavigation(SAMPLE_NAVIGATION);
    const scopedRoutes = ['v2/dev/get-started'];
    const metadata = buildScopedMetadata(selection, optionData, allRoutes, scopedRoutes);
    const scopedMintignore = buildScopedMintignore('# base ignore\n', metadata);
    assert.match(scopedMintignore, /\/v1\/\*\*/, 'should exclude unselected version');
    assert.match(scopedMintignore, /\/v2\/es\/\*\*/, 'should exclude unselected language directory');
    assert.match(scopedMintignore, /api-reference/, 'should include openapi exclusion patterns');
  });

  cases.push(async () => {
    const run = runLpd([
      'dev',
      '--dry-run',
      '--scoped',
      '--scope-version',
      'v2',
      '--scope-language',
      'en',
      '--scope-tab',
      'Developers',
      '--scope-prefix',
      'v2/dev',
      '--disable-openapi'
    ]);
    assert.strictEqual(run.status, 0, `lpd dry-run failed: ${run.stderr || run.stdout}`);
    assert.match(run.stdout, /Scoped mint profile: enabled/);
    assert.match(run.stdout, /scope_versions:\s*v2/);
    assert.match(run.stdout, /scope_languages:\s*en/);
    assert.match(run.stdout, /scope_tabs:\s*Developers/);
    assert.match(run.stdout, /OpenAPI docs scope: disabled/);
    assert.match(run.stdout, /tools\/scripts\/mint-dev\.sh/);
  });

  cases.push(async () => {
    const run = runLpd(['dev', '--dry-run', '--', '--port', '3333']);
    assert.strictEqual(run.status, 0, `lpd pass-through dry-run failed: ${run.stderr || run.stdout}`);
    assert.doesNotMatch(run.stdout, /Scoped mint profile: enabled/);
    assert.match(run.stdout, /--port/);
    assert.match(run.stdout, /3333/);
  });

  cases.push(async () => {
    const tmp = mkTmpDir('lpd-scope-test-');
    const docs = {
      $schema: 'https://mintlify.com/docs.json',
      theme: 'palm',
      name: 'Fixture Docs',
      navigation: SAMPLE_NAVIGATION
    };
    writeFile(path.join(tmp, 'docs.json'), `${JSON.stringify(docs, null, 2)}\n`);
    writeFile(path.join(tmp, '.mintignore'), '# fixture\n');

    const run = runScopeScript(
      ['--repo-root', tmp, '--versions', 'v2', '--languages', 'en', '--tabs', 'Developers', '--disable-openapi', '--print-only'],
      REPO_ROOT
    );
    assert.strictEqual(run.status, 0, `scope generator failed: ${run.stderr || run.stdout}`);
    const payload = JSON.parse(String(run.stdout || '{}').trim());
    assert.ok(payload.routeCounts.original > payload.routeCounts.scoped, 'scoped profile should reduce route count');
    assert.strictEqual(payload.routeCounts.scoped, 1, 'expected Developers tab route count after OpenAPI filter');
  });

  for (let index = 0; index < cases.length; index += 1) {
    const label = `case-${index + 1}`;
    try {
      // eslint-disable-next-line no-await-in-loop
      await cases[index]();
      console.log(`   ✓ ${label}`);
    } catch (error) {
      failures.push(`${label}: ${error.message}`);
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
        console.log(`\n✅ lpd scoped mint-dev tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} lpd scoped mint-dev test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ lpd scoped mint-dev tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
