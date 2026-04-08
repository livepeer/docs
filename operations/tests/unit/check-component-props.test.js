#!/usr/bin/env node
/**
 * @script            check-component-props.test
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tests
 * @owner             docs
 * @needs             —
 * @purpose-statement Unit tests for check-component-props.js validator. Tests each check function with inline MDX fixtures.
 * @pipeline          manual
 * @usage             node operations/tests/unit/check-component-props.test.js
 */

'use strict';

const assert = require('assert');

const {
  checkTabIcons,
  checkAccordionIcons,
  checkCodeBlockMetadata,
  checkCardCustomTitle,
  checkInlineStyles,
  checkCustomDividerPlacement,
  checkMermaidColours,
  checkImportOrdering,
  addIssue
} = require('../../scripts/validators/components/library/check-component-props');

// --- Helpers ------------------------------------------------------------------

function collectIssues(checkFn, content, extra) {
  const issues = [];
  if (extra !== undefined) {
    checkFn(content, 'test-file.mdx', issues, extra);
  } else {
    checkFn(content, 'test-file.mdx', issues);
  }
  return issues;
}

function expectViolation(issues, id) {
  const found = issues.filter((i) => i.id === id);
  assert.ok(found.length > 0, `Expected violation ${id} but found none. Issues: ${JSON.stringify(issues.map(i => i.id))}`);
  return found;
}

function expectNoViolation(issues, id) {
  const found = issues.filter((i) => i.id === id);
  assert.equal(found.length, 0, `Expected no violation ${id} but found ${found.length}`);
}

function expectClean(issues) {
  assert.equal(issues.length, 0, `Expected clean but found ${issues.length} issues: ${JSON.stringify(issues.map(i => i.id))}`);
}

// --- Test cases ---------------------------------------------------------------

function runTests() {
  const errors = [];
  const warnings = [];

  // --- 5.18: Tab icon prop ---

  try {
    const issues = collectIssues(checkTabIcons, '<Tabs><Tab title="Docker">content</Tab></Tabs>');
    expectViolation(issues, 'prop-tab-missing-icon');
  } catch (e) { errors.push(`5.18 missing icon: ${e.message}`); }

  try {
    const issues = collectIssues(checkTabIcons, '<Tabs><Tab title="Docker" icon="docker">content</Tab></Tabs>');
    expectClean(issues);
  } catch (e) { errors.push(`5.18 with icon: ${e.message}`); }

  try {
    const issues = collectIssues(checkTabIcons, '```jsx\n<Tab title="Example">\n```');
    expectClean(issues);
  } catch (e) { errors.push(`5.18 inside code block: ${e.message}`); }

  // --- 5.19: Accordion icon prop ---

  try {
    const issues = collectIssues(checkAccordionIcons, '<Accordion title="Details">content</Accordion>');
    expectViolation(issues, 'prop-accordion-missing-icon');
  } catch (e) { errors.push(`5.19 missing icon: ${e.message}`); }

  try {
    const issues = collectIssues(checkAccordionIcons, '<Accordion title="Details" icon="circle-info">content</Accordion>');
    expectClean(issues);
  } catch (e) { errors.push(`5.19 with icon: ${e.message}`); }

  // --- 5.20: Code block metadata ---

  try {
    const issues = collectIssues(checkCodeBlockMetadata, '```bash\necho hello\n```');
    expectViolation(issues, 'prop-code-block-missing-metadata');
  } catch (e) { errors.push(`5.20 bare fence: ${e.message}`); }

  try {
    const issues = collectIssues(checkCodeBlockMetadata, '```bash icon="terminal" title="example.sh"\necho hello\n```');
    expectClean(issues);
  } catch (e) { errors.push(`5.20 with metadata: ${e.message}`); }

  try {
    const issues = collectIssues(checkCodeBlockMetadata, '```bash icon="terminal"\necho hello\n```');
    expectViolation(issues, 'prop-code-block-missing-metadata');
  } catch (e) { errors.push(`5.20 icon only no title: ${e.message}`); }

  // --- 5.22: Card CustomCardTitle ---

  try {
    const issues = collectIssues(checkCardCustomTitle, '<Card title="Next" href="/v2/path">desc</Card>');
    expectViolation(issues, 'prop-card-missing-custom-title');
  } catch (e) { errors.push(`5.22 plain title: ${e.message}`); }

  try {
    const issues = collectIssues(checkCardCustomTitle, '<Card title={<CustomCardTitle icon="arrow-right" title="Next" />} href="/v2/path" horizontal>desc</Card>');
    expectClean(issues);
  } catch (e) { errors.push(`5.22 with CustomCardTitle: ${e.message}`); }

  try {
    const issues = collectIssues(checkCardCustomTitle, '<Card title="Info">no href, not navigation</Card>');
    expectClean(issues);
  } catch (e) { errors.push(`5.22 no href (not navigation): ${e.message}`); }

  // --- 5.34: Inline styles ---

  try {
    const issues = collectIssues(checkInlineStyles, '<div style={{color: "red"}}>content</div>');
    expectViolation(issues, 'prop-inline-style');
  } catch (e) { errors.push(`5.34 inline style: ${e.message}`); }

  try {
    const issues = collectIssues(checkInlineStyles, '<div className="styled">content</div>');
    expectNoViolation(issues, 'prop-inline-style');
  } catch (e) { errors.push(`5.34 no inline style: ${e.message}`); }

  try {
    const issues = collectIssues(checkInlineStyles, 'Use var(--accent) for colours.');
    expectClean(issues);
  } catch (e) { errors.push(`5.34 clean prose: ${e.message}`); }

  // --- 5.34: Hardcoded hex ---

  try {
    const issues = collectIssues(checkInlineStyles, 'The colour is #ff0000 in the design.');
    expectViolation(issues, 'prop-hardcoded-hex');
  } catch (e) { errors.push(`5.34 hardcoded hex: ${e.message}`); }

  // --- 5.27: Mermaid governed colours ---

  try {
    const governedHexes = new Set(['#2d9a67', '#ffffff']);
    const issues = collectIssues(checkMermaidColours, '```mermaid\ngraph TD\n  A[Start]:::accent\n  style A fill:#ff0000\n```', governedHexes);
    expectViolation(issues, 'prop-mermaid-ungoverned-colour');
  } catch (e) { errors.push(`5.27 ungoverned hex: ${e.message}`); }

  try {
    const governedHexes = new Set(['#2d9a67']);
    const issues = collectIssues(checkMermaidColours, '```mermaid\ngraph TD\n  style A fill:#2d9a67\n```', governedHexes);
    expectClean(issues);
  } catch (e) { errors.push(`5.27 governed hex: ${e.message}`); }

  // --- 5.26: CustomDivider placement ---

  try {
    const content = '---\ntitle: Test\n---\n\n<CustomDivider />\n\nIntro text.\n\n## First Section\n\nContent.';
    const issues = collectIssues(checkCustomDividerPlacement, content);
    expectNoViolation(issues, 'prop-divider-missing-opening');
  } catch (e) { errors.push(`5.26 correct opening divider: ${e.message}`); }

  try {
    const content = '---\ntitle: Test\n---\n\nIntro text without divider.\n\n## First Section\n\nContent.';
    const issues = collectIssues(checkCustomDividerPlacement, content);
    expectViolation(issues, 'prop-divider-missing-opening');
  } catch (e) { errors.push(`5.26 missing opening divider: ${e.message}`); }

  try {
    const content = '---\ntitle: Test\n---\n\n<CustomDivider />\n\nIntro.\n\n## Content\n\nBody.\n\n<CustomDivider />\n\n## Related Pages\n\n<Card>link</Card>';
    const issues = collectIssues(checkCustomDividerPlacement, content);
    expectNoViolation(issues, 'prop-divider-missing-before-related');
  } catch (e) { errors.push(`5.26 divider before related: ${e.message}`); }

  try {
    const content = '---\ntitle: Test\n---\n\n<CustomDivider />\n\nIntro.\n\n## Content\n\nBody.\n\n## Related Pages\n\n<Card>link</Card>';
    const issues = collectIssues(checkCustomDividerPlacement, content);
    expectViolation(issues, 'prop-divider-missing-before-related');
  } catch (e) { errors.push(`5.26 missing divider before related: ${e.message}`); }

  // --- 5.28: Import ordering ---

  try {
    const content = '{/* COMPONENT IMPORTS */}\nimport A from "a"\n{/* DATA IMPORTS */}\nimport B from "b"';
    const issues = collectIssues(checkImportOrdering, content);
    expectClean(issues);
  } catch (e) { errors.push(`5.28 correct order: ${e.message}`); }

  try {
    const content = '{/* DATA IMPORTS */}\nimport B from "b"\n{/* COMPONENT IMPORTS */}\nimport A from "a"';
    const issues = collectIssues(checkImportOrdering, content);
    expectViolation(issues, 'prop-import-ordering');
  } catch (e) { errors.push(`5.28 wrong order: ${e.message}`); }

  return { errors, warnings };
}

// --- Entry point --------------------------------------------------------------

if (require.main === module) {
  const result = runTests();
  if (result.errors.length > 0) {
    console.error(`FAIL: ${result.errors.length} test(s) failed:`);
    result.errors.forEach((e) => console.error(`  - ${e}`));
    process.exit(1);
  }
  console.log(`PASS: all tests passed (${result.warnings.length} warnings)`);
  result.warnings.forEach((w) => console.warn(`  warn: ${w}`));
  process.exit(0);
}

module.exports = { runTests };
