#!/usr/bin/env node
/**
 * @script           component-governance-utils.test
 * @category         validator
 * @purpose          qa:repo-health
 * @scope            tests
 * @owner            docs
 * @needs            R-R10
 * @purpose-statement Verifies shared component governance utility parsing, scanning, and archive exclusion behavior.
 * @pipeline         P1 (commit, via run-all)
 * @usage            node tests/unit/component-governance-utils.test.js
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const {
  extractExports,
  getComponentFiles,
  parseJSDocBlock,
  scanMDXImports,
  scanStylingViolations
} = require('../../tools/lib/component-governance-utils');

function runTests() {
  const errors = [];
  const warnings = [];

  try {
    const parsed = parseJSDocBlock(`/**
 * Example summary.
 * @component SampleComponent
 * @category primitives
 * @tier primitive
 * @status stable
 * @description Sample description
 * @contentAffinity universal
 * @owner docs
 * @dependencies none
 * @usedIn none
 * @breakingChangeRisk low
 * @decision KEEP
 * @dataSource none
 * @duplicates none
 * @lastMeaningfulChange 2026-03-09
 * @param {string} [label="demo"] - Label text.
 * @example
 * <SampleComponent label="demo" />
 */`);

    assert.equal(parsed.component, 'SampleComponent');
    assert.equal(parsed.params.length, 1);
    assert.equal(parsed.params[0].name, 'label');
    assert.equal(parsed.examples[0], '<SampleComponent label="demo" />');
  } catch (error) {
    errors.push(`parseJSDocBlock failed: ${error.message}`);
  }

  try {
    const exportsList = extractExports('snippets/components/content/responseField.jsx');
    const responseFieldGroup = exportsList.find((entry) => entry.name === 'ResponseFieldGroup');
    assert(responseFieldGroup, 'ResponseFieldGroup export should be discovered');
    assert(responseFieldGroup.jsDocBlock, 'ResponseFieldGroup should have an attached JSDoc block');
    assert(responseFieldGroup.props.some((prop) => prop.name === 'component'));
  } catch (error) {
    errors.push(`extractExports failed: ${error.message}`);
  }

  try {
    const importMap = scanMDXImports('v2/**/*.mdx');
    const codeComponent = importMap.get('CodeComponent');
    assert(codeComponent, 'CodeComponent should be present in the MDX usage map');
    assert(
      !codeComponent.pages.includes('v2/resources/documentation-guide/component-library/content.mdx'),
      'fenced code samples must not be treated as live MDX imports'
    );
  } catch (error) {
    errors.push(`scanMDXImports failed: ${error.message}`);
  }

  try {
    const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'component-governance-utils-'));
    const tempFile = path.join(tempDir, 'styling-scan.jsx');
    fs.writeFileSync(
      tempFile,
      [
        '/**',
        ' * @example',
        ' * <Demo color="#ffffff" />',
        ' */',
        'const Demo = () => <div style={{ color: "var(--lp-color-text-primary)" }} />;',
        'const ThemeSafe = () => <div>{/* #123456 */}</div>;'
      ].join('\n'),
      'utf8'
    );

    const violations = scanStylingViolations(tempFile);
    assert.equal(violations.banned.length, 0);
    assert.equal(violations.advisory.length, 1);
  } catch (error) {
    errors.push(`scanStylingViolations failed: ${error.message}`);
  }

  try {
    const componentFiles = getComponentFiles();
    assert(componentFiles.length > 0, 'component file discovery should find governed files');
    assert(componentFiles.every((file) => !file.displayPath.includes('/_archive/')));
  } catch (error) {
    errors.push(`getComponentFiles failed: ${error.message}`);
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
