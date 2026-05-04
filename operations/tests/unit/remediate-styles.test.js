#!/usr/bin/env node
/**
 * @script            remediate-styles.test
 * @category          validator
 * @purpose           qa:style-governance
 * @scope             tests,tools/scripts/remediators/styles
 * @owner             docs
 * @needs             R-STYLE-GOV
 * @purpose-statement Unit tests for deterministic style remediations, including audit-category aliases.
 * @pipeline          P1, P3
 * @usage             node operations/tests/unit/remediate-styles.test.js
 */

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');

const {
  runRemediation
} = require('../../../tools/scripts/remediators/styles/remediate-styles');

function withTempMdx(content, fn) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'remediate-styles-'));
  const file = path.join(dir, 'example.mdx');
  fs.writeFileSync(file, content, 'utf8');

  try {
    return fn(file);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function runTests() {
  const errors = [];

  try {
    withTempMdx(
      [
        '---',
        "title: 'Example'",
        '---',
        '',
        '<div style={{ border: "1px solid var(--lp-color-accent)", borderRadius: "8px", padding: "16px", margin: "16px 0" }}>',
        '',
        'Content',
        '',
        '</div>',
        ''
      ].join('\n'),
      (file) => {
        const report = runRemediation({
          mode: 'dry-run',
          category: ['inline-style-mdx'],
          files: [file]
        });

        assert.strictEqual(report.totalFixes, 1);
        assert.strictEqual(report.byType['component-migration'], 1);
        assert.strictEqual(report.fixes[0].type, 'bordered-div-to-component');
      }
    );
  } catch (error) {
    errors.push(`inline-style-mdx alias dry-run failed: ${error.message}`);
  }

  try {
    withTempMdx(
      [
        '---',
        "title: 'Example'",
        '---',
        "import { CenteredContainer } from '/snippets/components/wrappers/containers/Containers.jsx'",
        '',
        '<div style={{ border: "1px solid var(--lp-color-accent)", borderRadius: "8px", padding: "16px", margin: "16px 0" }}>',
        '',
        'Content',
        '',
        '</div>',
        ''
      ].join('\n'),
      (file) => {
        const report = runRemediation({
          mode: 'write',
          category: ['inline-style-mdx'],
          files: [file]
        });
        const updated = fs.readFileSync(file, 'utf8');

        assert.strictEqual(report.totalFixes, 1);
        assert(updated.includes('<BorderedBox variant="accent">'));
        assert(updated.includes('</BorderedBox>'));
        assert(!updated.includes('<div style={{ border:'));
        assert(updated.includes("import { BorderedBox, CenteredContainer } from '/snippets/components/wrappers/containers/Containers.jsx'"));
      }
    );
  } catch (error) {
    errors.push(`inline-style-mdx write remediation failed: ${error.message}`);
  }

  try {
    withTempMdx(
      [
        '---',
        "title: 'Example'",
        '---',
        '',
        '<CenteredContainer style={{ width: "90%" }}>',
        'Content',
        '</CenteredContainer>',
        ''
      ].join('\n'),
      (file) => {
        const report = runRemediation({
          mode: 'write',
          category: ['inline-style-mdx'],
          files: [file]
        });
        const updated = fs.readFileSync(file, 'utf8');

        assert.strictEqual(report.totalFixes, 1);
        assert.strictEqual(report.fixes[0].type, 'centered-readable90-to-preset');
        assert(updated.includes('<CenteredContainer preset="readable90">'));
        assert(!updated.includes('style={{ width:'));
      }
    );
  } catch (error) {
    errors.push(`CenteredContainer width remediation failed: ${error.message}`);
  }

  return { errors, warnings: [] };
}

if (require.main === module) {
  const result = runTests();
  result.errors.forEach((error) => console.error(error));
  result.warnings.forEach((warning) => console.warn(warning));
  process.exit(result.errors.length > 0 ? 1 : 0);
}

module.exports = { runTests };
