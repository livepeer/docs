#!/usr/bin/env node
/**
 * @script           component-governance-generators.test
 * @category         validator
 * @purpose          qa:repo-health
 * @scope            tests
 * @owner            docs
 * @needs            R-R10
 * @purpose-statement Verifies component governance generators produce coherent registry, usage-map, and docs outputs.
 * @pipeline         P1 (commit, via run-all)
 * @usage            node tests/unit/component-governance-generators.test.js
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { buildRegistry } = require('../../tools/scripts/generate-component-registry');
const { buildUsageMap } = require('../../tools/scripts/scan-component-imports');
const { parseArgs: parseDocsArgs } = require('../../tools/scripts/generate-component-docs');

const REPO_ROOT = path.resolve(__dirname, '..', '..');

function readFile(relativePath) {
  return fs.readFileSync(path.join(REPO_ROOT, relativePath), 'utf8');
}

function runTests() {
  const errors = [];
  const warnings = [];

  try {
    const { registry, issues } = buildRegistry();
    assert.equal(issues.length, 0);
    assert(registry._meta.componentCount > 0);
    assert.equal(registry.categories.data.count > 0, true);
    assert.equal(registry.categories['page-structure'].count > 0, true);
  } catch (error) {
    errors.push(`buildRegistry failed: ${error.message}`);
  }

  try {
    const { usageMap, drift } = buildUsageMap();
    assert.equal(drift.length, 0);
    assert(usageMap.components.length > 0);
    assert(Array.isArray(usageMap.orphaned));
    assert(Array.isArray(usageMap.mostImported));
  } catch (error) {
    errors.push(`buildUsageMap failed: ${error.message}`);
  }

  try {
    const args = parseDocsArgs(['--category', 'data']);
    assert.equal(args.category, 'data');
    assert.equal(args.templateOnly, true);
  } catch (error) {
    errors.push(`generate-component-docs argument parsing failed: ${error.message}`);
  }

  try {
    const englishFiles = [
      'v2/resources/documentation-guide/component-library/component-library.mdx',
      'v2/resources/documentation-guide/component-library/overview.mdx',
      'v2/resources/documentation-guide/component-library/primitives.mdx',
      'v2/resources/documentation-guide/component-library/layout.mdx',
      'v2/resources/documentation-guide/component-library/content.mdx',
      'v2/resources/documentation-guide/component-library/data.mdx',
      'v2/resources/documentation-guide/component-library/page-structure.mdx'
    ];
    englishFiles.forEach((filePath) => {
      assert(fs.existsSync(path.join(REPO_ROOT, filePath)), `${filePath} should exist`);
    });
    assert(!fs.existsSync(path.join(REPO_ROOT, 'v2/resources/documentation-guide/component-library/display.mdx')));
    assert(!fs.existsSync(path.join(REPO_ROOT, 'v2/resources/documentation-guide/component-library/domain.mdx')));
    assert(!fs.existsSync(path.join(REPO_ROOT, 'v2/resources/documentation-guide/component-library/integrations.mdx')));

    const landingContent = readFile('v2/resources/documentation-guide/component-library/component-library.mdx');
    assert(landingContent.includes('./data'));
    assert(landingContent.includes('./page-structure'));
  } catch (error) {
    errors.push(`generated docs output validation failed: ${error.message}`);
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
