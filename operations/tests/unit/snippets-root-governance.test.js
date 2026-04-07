#!/usr/bin/env node
/**
 * @script            snippets-root-governance.test
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             operations/tests/unit, snippets/guide.mdx, snippets/snippets-registry.mdx, snippets/_workspace/archive, operations/governance/config/generated-artifacts.json
 * @domain            docs
 * @needs             R-R16, R-R17
 * @purpose-statement Validates the governed two-file snippets root model and enforces freshness for the generated snippets registry.
 * @pipeline          manual, P3
 * @usage             node operations/tests/unit/snippets-root-governance.test.js
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const {
  GUIDE_PATH,
  OUTPUT_PATH,
  SCRIPT_PATH,
  buildRegistryContent,
  collectFolderPaths,
  collectSnippetsTree,
  getComponentDelegatedDescription
} = require('../../scripts/generators/governance/catalogs/generate-snippets-registry');

const REPO_ROOT = path.resolve(__dirname, '../../..');

function readRepoFile(repoPath) {
  return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
}

function getRootSnippetsDocs() {
  return fs
    .readdirSync(path.join(REPO_ROOT, 'snippets'), { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => name.endsWith('.mdx'))
    .sort();
}

async function runTests() {
  const failures = [];
  const cases = [];

  cases.push(async () => {
    execFileSync('node', [SCRIPT_PATH, '--check'], {
      cwd: REPO_ROOT,
      stdio: 'pipe',
      encoding: 'utf8'
    });
  });

  cases.push(async () => {
    assert.deepStrictEqual(getRootSnippetsDocs(), ['guide.mdx', 'snippets-registry.mdx']);
    assert.ok(!fs.existsSync(path.join(REPO_ROOT, 'snippets', 'framework-canonical.mdx')));
    assert.ok(fs.existsSync(path.join(REPO_ROOT, 'snippets', '_workspace', 'archive', 'framework-canonical.mdx')));
  });

  cases.push(async () => {
    const registry = readRepoFile(OUTPUT_PATH);
    assert.ok(!registry.includes('name="_workspace"'));
    assert.ok(!registry.includes('name="automations"'));
    assert.ok(!registry.includes('| `snippets/_workspace/` |'));
    assert.ok(!registry.includes('| `snippets/automations/` |'));
  });

  cases.push(async () => {
    const registry = readRepoFile(OUTPUT_PATH);
    const delegatedRootDescription = getComponentDelegatedDescription('snippets/components');
    const delegatedChildDescription = getComponentDelegatedDescription('snippets/components/displays');
    assert.ok(registry.includes(delegatedRootDescription));
    assert.ok(registry.includes(delegatedChildDescription));
    assert.ok(registry.includes('/docs-guide/frameworks/component-framework-canonical'));
    assert.ok(registry.includes('/v2/resources/documentation-guide/component-library/overview'));
  });

  cases.push(async () => {
    const registry = readRepoFile(OUTPUT_PATH);
    const folderPaths = collectFolderPaths(collectSnippetsTree());
    folderPaths.forEach((repoPath) => {
      assert.ok(
        registry.includes(`\`${repoPath}/\``),
        `Missing folder description row for ${repoPath}`
      );
    });
  });

  cases.push(async () => {
    const generated = buildRegistryContent();
    const current = `${readRepoFile(OUTPUT_PATH).trim()}\n`;
    assert.strictEqual(current, generated);
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
        console.log(`\n✅ snippets-root-governance tests passed (${result.total} cases)`);
        process.exit(0);
      }
      console.error(`\n❌ ${result.errors.length} snippets-root-governance test failure(s)`);
      result.errors.forEach((entry) => console.error(`  - ${entry}`));
      process.exit(1);
    })
    .catch((error) => {
      console.error(`\n❌ snippets-root-governance tests crashed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runTests };
