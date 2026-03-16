#!/usr/bin/env node
/**
 * @script            component-governance-generators.test
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tests
 * @owner             docs
 * @needs             R-R10
 * @purpose-statement Verifies component governance generators produce coherent registry, usage-map, and docs outputs.
 * @pipeline          P1 (commit, via run-all)
 * @usage             node tests/unit/component-governance-generators.test.js
 */

const assert = require('assert');
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const { buildRegistry } = require('../../tools/scripts/generate-component-registry');
const { buildUsageMap } = require('../../tools/scripts/scan-component-imports');
const { getComponentLibraryAuditFiles } = require('../../tools/scripts/audit-component-usage');
const { parseArgs: parseDocsArgs } = require('../../tools/scripts/generate-component-docs');
const { parseArgs: parseRepairArgs } = require('../../tools/scripts/remediators/components/repair-component-metadata');

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
    assert(usageMap.components.length > 0);
    assert(Array.isArray(drift));
    assert(Array.isArray(usageMap.orphaned));
    assert(Array.isArray(usageMap.mostImported));
    assert.equal(usageMap._meta.canonicalUsagePolicy, 'english-only-jsdoc');
    assert(usageMap.components.every((component) => Array.isArray(component.englishCanonicalPages)));
    assert(
      drift.every(
        (entry) =>
          typeof entry.name === 'string' &&
          typeof entry.file === 'string' &&
          Array.isArray(entry.missingFromJsDoc) &&
          Array.isArray(entry.staleInJsDoc)
      )
    );
  } catch (error) {
    errors.push(`buildUsageMap failed: ${error.message}`);
  }

  try {
    const args = parseDocsArgs(['--fix', '--template-only', '--category', 'data']);
    assert.equal(args.category, 'data');
    assert.equal(args.templateOnly, true);
    assert.equal(args.mode, 'fix');
  } catch (error) {
    errors.push(`generate-component-docs argument parsing failed: ${error.message}`);
  }

  try {
    const args = parseRepairArgs(['--fix', '--staged']);
    assert.equal(args.mode, 'fix');
    assert.equal(args.staged, true);
  } catch (error) {
    errors.push(`repair-component-metadata argument parsing failed: ${error.message}`);
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
    assert.deepEqual(getComponentLibraryAuditFiles(), englishFiles);

    const landingContent = readFile('v2/resources/documentation-guide/component-library/component-library.mdx');
    assert(landingContent.includes('./data'));
    assert(landingContent.includes('./page-structure'));
  } catch (error) {
    errors.push(`generated docs output validation failed: ${error.message}`);
  }

  try {
    const catalog = readFile('docs-guide/catalog/components-catalog.mdx');
    assert(!catalog.includes(',## Deprecated Components'));
    assert(!catalog.includes(',## Orphaned Components'));
    assert(
      catalog.includes(
        '| MermaidColours | `page-structure` | `/snippets/components/page-structure/mermaidColours.jsx` | `stable` | Centralised colour definitions for Mermaid diagrams. Mermaid requires literal colour values and does not support CSS custom properties. |'
      )
    );
  } catch (error) {
    errors.push(`components catalog output validation failed: ${error.message}`);
  }

  try {
    [
      'v2/resources/documentation-guide/snippets-inventory.mdx',
      'v2/resources/documentation-guide/style-guide.mdx',
      'v2/es/resources/documentation-guide/snippets-inventory.mdx',
      'v2/es/resources/documentation-guide/style-guide.mdx',
      'v2/fr/resources/documentation-guide/snippets-inventory.mdx',
      'v2/fr/resources/documentation-guide/style-guide.mdx',
      'v2/cn/resources/documentation-guide/snippets-inventory.mdx',
      'v2/cn/resources/documentation-guide/style-guide.mdx'
    ].forEach((filePath) => {
      assert(!readFile(filePath).includes('`frame-mode.jsx`'));
    });
  } catch (error) {
    errors.push(`governance surface filename validation failed: ${error.message}`);
  }

  try {
    execFileSync(
      process.execPath,
      ['tools/scripts/generate-component-docs.js', '--check', '--template-only'],
      {
        cwd: REPO_ROOT,
        stdio: 'pipe'
      }
    );
  } catch (error) {
    errors.push(
      `generate-component-docs --check failed: ${String(error.stderr || error.stdout || error.message).trim()}`
    );
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
