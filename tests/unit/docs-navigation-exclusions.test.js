#!/usr/bin/env node
/**
 * @script            docs-navigation-exclusions.test
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tests/unit, tools/lib, tests/utils, tools/config
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Unit tests for validator-specific docs.json navigation exclusions
 * @pipeline          manual — targeted unit coverage for docs navigation exclusion helpers
 * @usage             node tests/unit/docs-navigation-exclusions.test.js
 */

const assert = require('assert');
const { execSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const {
  clearNavigationExclusionsCache,
  collectDocsJsonRouteKeys,
  collectNavigationPageEntries,
  isExemptNavigationEntry
} = require('../../tools/lib/docs-navigation');
const { getDocsJsonRouteKeys, getMdxFiles } = require('../utils/file-walker');

let errors = [];

function runCase(name, fn) {
  try {
    fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push(`${name}: ${error.message}`);
  }
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeJson(filePath, data) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

function createFixtureRepo() {
  const repoRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'docs-nav-exclusions-'));
  execSync('git init -q', { cwd: repoRoot, stdio: 'ignore' });

  writeJson(path.join(repoRoot, 'tools', 'config', 'navigation-exclusions.json'), {
    _comment: 'Fixture exclusions for docs navigation tests',
    exempt_page_values: [' '],
    exempt_anchor_values: [' '],
    exempt_pages: ['/v2/resources/redirect'],
    exempt_from_validators: ['docs-navigation.test.js', 'quality.test.js']
  });

  const docsJson = {
    navigation: {
      versions: [
        {
          version: 'v2',
          languages: [
            {
              language: 'en',
              tabs: [
                {
                  tab: 'Resources',
                  groups: [
                    {
                      anchor: ' ',
                      pages: [' ']
                    },
                    {
                      anchor: 'Redirect Slash',
                      pages: ['/v2/resources/redirect']
                    },
                    {
                      anchor: 'Redirect Plain',
                      pages: ['v2/resources/redirect']
                    },
                    {
                      anchor: 'Portal',
                      pages: ['v2/resources/resources-portal']
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  };

  writeJson(path.join(repoRoot, 'docs.json'), docsJson);
  ensureDir(path.join(repoRoot, 'v2', 'resources'));
  fs.writeFileSync(path.join(repoRoot, 'v2', 'resources', 'redirect.mdx'), '# Redirect\n', 'utf8');
  fs.writeFileSync(path.join(repoRoot, 'v2', 'resources', 'resources-portal.mdx'), '# Portal\n', 'utf8');

  return { repoRoot, docsJson };
}

function runTests() {
  errors = [];
  console.log('🧪 Docs Navigation Exclusions Unit Tests');

  const fixture = createFixtureRepo();
  const { repoRoot, docsJson } = fixture;
  const pageEntries = collectNavigationPageEntries(docsJson.navigation, { pointer: 'navigation' });
  const separatorEntry = pageEntries.find((entry) => entry.value === ' ');
  const redirectEntries = pageEntries.filter((entry) => String(entry.value).includes('resources/redirect'));

  try {
    clearNavigationExclusionsCache(repoRoot);

    runCase('Separator entries are exempt only for opted-in validators', () => {
      assert.ok(separatorEntry, 'Expected to find a separator page entry');
      assert.strictEqual(
        isExemptNavigationEntry(separatorEntry.value, separatorEntry.node, {
          repoRoot,
          validatorName: 'docs-navigation.test.js'
        }),
        true
      );
      assert.strictEqual(
        isExemptNavigationEntry(separatorEntry.value, separatorEntry.node, {
          repoRoot,
          validatorName: 'browser.test.js'
        }),
        false
      );
    });

    runCase('Redirect route exclusions normalize slash and no-slash forms', () => {
      assert.strictEqual(redirectEntries.length, 2, 'Expected both redirect route variants in fixture');
      redirectEntries.forEach((entry) => {
        assert.strictEqual(
          isExemptNavigationEntry(entry.value, entry.node, {
            repoRoot,
            validatorName: 'quality.test.js'
          }),
          true
        );
      });
    });

    runCase('Opted-in route collection excludes redirect workaround routes', () => {
      const validatorRoutes = collectDocsJsonRouteKeys(repoRoot, {
        version: 'v2',
        language: 'en',
        validatorName: 'quality.test.js'
      });
      assert.strictEqual(validatorRoutes.has('v2/resources/redirect'), false);
      assert.strictEqual(validatorRoutes.has('v2/resources/resources-portal'), true);
    });

    runCase('Runtime route collection keeps redirect workaround routes', () => {
      const runtimeRoutes = collectDocsJsonRouteKeys(repoRoot, {
        version: 'v2',
        language: 'en'
      });
      assert.strictEqual(runtimeRoutes.has('v2/resources/redirect'), true);
      assert.strictEqual(runtimeRoutes.has('v2/resources/resources-portal'), true);
    });

    runCase('file-walker excludes exempt files only when validator name is supplied', () => {
      const defaultFiles = getMdxFiles(repoRoot, { respectMintIgnore: false }).map((filePath) => path.basename(filePath));
      const validatorFiles = getMdxFiles(repoRoot, {
        respectMintIgnore: false,
        validatorName: 'quality.test.js'
      }).map((filePath) => path.basename(filePath));
      const validatorRoutes = [...getDocsJsonRouteKeys(repoRoot, { validatorName: 'quality.test.js' })];

      assert.ok(defaultFiles.includes('redirect.mdx'));
      assert.ok(defaultFiles.includes('resources-portal.mdx'));
      assert.ok(!validatorFiles.includes('redirect.mdx'));
      assert.ok(validatorFiles.includes('resources-portal.mdx'));
      assert.ok(!validatorRoutes.includes('v2/resources/redirect'));
    });
  } finally {
    clearNavigationExclusionsCache(repoRoot);
    fs.rmSync(repoRoot, { recursive: true, force: true });
  }

  return {
    errors,
    passed: errors.length === 0,
    total: 5
  };
}

if (require.main === module) {
  const result = runTests();
  if (result.passed) {
    console.log(`\n✅ Docs navigation exclusion unit tests passed (${result.total} cases)`);
    process.exit(0);
  }

  console.error(`\n❌ ${result.errors.length} docs navigation exclusion unit test failure(s)`);
  result.errors.forEach((message) => console.error(`  - ${message}`));
  process.exit(1);
}

module.exports = { runTests };
