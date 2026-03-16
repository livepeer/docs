#!/usr/bin/env node
/**
 * @script            docs-authoring-rules.test
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests, tools/lib
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Verifies guide-layout warning rules and deterministic code-block icon repair for authored docs pages.
 * @pipeline          P1 (commit, via run-all)
 * @usage             node tests/unit/docs-authoring-rules.test.js
 */

const assert = require('assert');
const {
  analyzeGuideLayoutWarnings,
  analyzeCodeBlockMetadata,
  repairCodeBlockMetadata
} = require('../../tools/lib/docs-authoring-rules');

function runTests() {
  const errors = [];
  const warnings = [];

  try {
    const repairedFence = repairCodeBlockMetadata(
      ['---', "title: 'Guide'", 'pageType: guide', '---', '', '```bash', 'echo ok', '```'].join('\n'),
      'v2/orchestrators/guides/setup/guide.mdx'
    );
    assert.match(repairedFence.content, /```bash icon="terminal"/);
    assert(repairedFence.findings.some((finding) => finding.rule === 'code-block-icon'));
    assert(repairedFence.findings.some((finding) => finding.rule === 'code-block-filename'));
  } catch (error) {
    errors.push(`fenced code block repair failed: ${error.message}`);
  }

  try {
    const mermaidResult = analyzeCodeBlockMetadata(
      ['```mermaid', 'graph TD', 'A-->B', '```'].join('\n'),
      'v2/orchestrators/concepts/architecture.mdx'
    );
    assert.strictEqual(mermaidResult.length, 0);
  } catch (error) {
    errors.push(`mermaid exemption failed: ${error.message}`);
  }

  try {
    const repairedComponent = repairCodeBlockMetadata(
      '<CustomCodeBlock filename="env.example" language="bash" />',
      'v2/orchestrators/setup/rs-install.mdx'
    );
    assert.match(repairedComponent.content, /icon="terminal"/);
  } catch (error) {
    errors.push(`code block component repair failed: ${error.message}`);
  }

  try {
    const spreadProps = analyzeCodeBlockMetadata(
      '<CustomCodeBlock {...DOCKER_CODE.install} />',
      'docs-guide/tooling/dev-tools.mdx'
    );
    assert.strictEqual(spreadProps.length, 0);
  } catch (error) {
    errors.push(`spread-props exemption failed: ${error.message}`);
  }

  try {
    const guideWarnings = analyzeGuideLayoutWarnings(
      [
        '---',
        "title: 'Guide'",
        'pageType: guide',
        '---',
        '',
        '## Workflow',
        '',
        '<Steps>',
        '  <Step title="One">Body</Step>',
        '</Steps>',
        '',
        '<Tabs>',
        '  <Tab title="One" icon="bolt">Body</Tab>',
        '</Tabs>'
      ].join('\n'),
      'v2/orchestrators/guides/setup-paths/find-your-path.mdx'
    );
    const rules = guideWarnings.map((finding) => finding.rule);
    assert(rules.includes('guide-steps-component'));
    assert(rules.includes('guide-tabs-accent-box'));
  } catch (error) {
    errors.push(`guide layout warnings failed: ${error.message}`);
  }

  try {
    const noTabWarning = analyzeGuideLayoutWarnings(
      [
        '---',
        "title: 'Guide'",
        'pageType: guide',
        '---',
        '',
        '## Workflow',
        '',
        '<BorderedBox variant="accent" padding="16px">',
        '  <Tabs>',
        '    <Tab title="One" icon="bolt">Body</Tab>',
        '  </Tabs>',
        '</BorderedBox>'
      ].join('\n'),
      'v2/orchestrators/guides/setup-paths/find-your-path.mdx'
    );
    assert(!noTabWarning.some((finding) => finding.rule === 'guide-tabs-accent-box'));
  } catch (error) {
    errors.push(`accent box tabs exemption failed: ${error.message}`);
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
