#!/usr/bin/env node
/**
 * @script            ui-template-generator.test
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tests, tools/scripts/generate-ui-templates.js, .vscode, snippets/templates, docs-guide/component-registry.json
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Validates UI template generator snippet outputs are valid JSON, deterministic, and safe for after-< component insertion
 * @pipeline          P1, P3
 * @usage             node tests/unit/ui-template-generator.test.js [flags]
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const generator = require('../../tools/scripts/generate-ui-templates');

const REPO_ROOT = process.cwd();

function readJson(repoPath) {
  return JSON.parse(fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8'));
}

function firstMeaningfulLine(body) {
  const lines = Array.isArray(body) ? body : [body];
  return String(lines.find((line) => String(line || '').trim()) || '').trim();
}

function runTests() {
  const errors = [];

  try {
    const pageTemplates = generator.collectTemplates(generator.PAGE_TEMPLATE_ROOT, 'page');
    const blockTemplates = generator.collectTemplates(generator.BLOCK_TEMPLATE_ROOT, 'block');
    const registry = readJson(generator.COMPONENT_REGISTRY_PATH);

    const expectedTemplateSnippets = generator.buildTemplateSnippetsObject(pageTemplates, blockTemplates);
    const expectedComponentSnippets = generator.buildComponentSnippetsObject(registry);
    const parsedTemplateFile = readJson(generator.TEMPLATE_SNIPPETS_PATH);
    const parsedComponentFile = readJson(generator.COMPONENT_SNIPPETS_PATH);

    assert.deepStrictEqual(parsedTemplateFile, expectedTemplateSnippets, 'Generated template snippets file drifted from generator output.');
    assert.deepStrictEqual(parsedComponentFile, expectedComponentSnippets, 'Generated component snippets file drifted from generator output.');

    Object.entries(parsedComponentFile).forEach(([name, snippet]) => {
      const firstLine = firstMeaningfulLine(snippet.body);
      assert.ok(firstLine, `Component snippet has no body: ${name}`);
      assert.ok(!firstLine.startsWith('<'), `Component snippet body must not start with "<": ${name}`);
    });

    assert.ok(parsedComponentFile.PreviewCallout, 'Expected PreviewCallout snippet from component registry.');
    assert.ok(
      firstMeaningfulLine(parsedComponentFile.PreviewCallout.body).startsWith('PreviewCallout'),
      'PreviewCallout snippet should be derived deterministically from the registry example.'
    );

    return {
      passed: true,
      errors,
      warnings: [],
      totalTemplateSnippets: Object.keys(parsedTemplateFile).length,
      totalComponentSnippets: Object.keys(parsedComponentFile).length
    };
  } catch (error) {
    errors.push({
      file: 'tests/unit/ui-template-generator.test.js',
      rule: 'UI template generator',
      message: error.message
    });

    return {
      passed: false,
      errors,
      warnings: [],
      totalTemplateSnippets: 0,
      totalComponentSnippets: 0
    };
  }
}

if (require.main === module) {
  const result = runTests();
  if (result.passed) {
    console.log(
      `✅ UI template generator test passed (${result.totalTemplateSnippets} template snippets, ${result.totalComponentSnippets} component snippets)`
    );
    process.exit(0);
  }

  console.error(`❌ UI template generator test failed: ${result.errors[0]?.message || 'unknown error'}`);
  process.exit(1);
}

module.exports = { runTests };
