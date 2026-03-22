#!/usr/bin/env node
/**
 * @script            authoring-tools.test
 * @category          validator
 * @purpose           tooling:dev-tools
 * @scope             tests/unit, tools/editor-extensions/authoring-tools, operations/scripts/format-mdx.js
 * @owner             docs
 * @needs             E-C6, F-C1
 * @purpose-statement Unit tests for repo-owned authoring tools — verifies MDX formatting and real-path completion/validation helpers.
 * @pipeline          P1, P3
 * @usage             node tests/unit/authoring-tools.test.js
 */

const assert = require('assert');
const path = require('path');

const {
  formatMdxContent,
  getMdxImportSuggestions,
  getRealDocsRoutes,
  validateDocsJsonRoutes,
  validateSnippetImports
} = require('../../../tools/editor-extensions/authoring-tools/lib/authoring-core');

const REPO_ROOT = path.resolve(__dirname, '../../..');

let errors = [];
let warnings = [];

function runCase(name, fn) {
  try {
    fn();
    console.log(`   ✓ ${name}`);
  } catch (error) {
    errors.push({
      file: 'tests/unit/authoring-tools.test.js',
      line: 1,
      rule: 'authoring-tools',
      message: `${name}: ${error.message}`
    });
  }
}

function runTests() {
  errors = [];
  warnings = [];

  console.log('🧪 Authoring Tools Unit Tests');

  runCase('collects only real docs routes from docs and scoped navigation', () => {
    const routes = getRealDocsRoutes(REPO_ROOT);
    assert(routes.includes('v2/about/resources/blockchain-contracts'));
    assert(!routes.includes('v2/resources/redirect'));
    assert(!routes.includes(' '));
  });

  runCase('suggests snippets as absolute root imports', () => {
    const suggestions = getMdxImportSuggestions(
      REPO_ROOT,
      'v2/about/resources/blockchain-contracts.mdx',
      '/snippets/components/displays/quotes/Q'
    );

    assert(
      suggestions.snippetSuggestions.includes('/snippets/components/displays/quotes/Quote.jsx'),
      'expected /snippets/components/displays/quotes/Quote.jsx in snippet suggestions'
    );
    assert(
      suggestions.snippetSuggestions.every((entry) => entry.startsWith('/snippets/')),
      'all snippet suggestions must be absolute /snippets/ imports'
    );
  });

  runCase('flags relative snippet imports in MDX', () => {
    const findings = validateSnippetImports(
      "import { Quote } from '../snippets/components/displays/quotes/Quote.jsx'\n",
      'v2/example.mdx'
    );
    assert.strictEqual(findings.length, 1);
    assert.strictEqual(findings[0].rule, 'snippet-import-path');
  });

  runCase('preserves JSX comments and fixes closing tag indentation', () => {
    const input = [
      '<Accordion title="Controller">',
      '{/* Keep this comment */}',
      '',
      '**Key functions**:',
      '',
      '- one',
      '- two',
      '  </Accordion>',
      ''
    ].join('\n');

    const output = formatMdxContent(input);
    assert(output.includes('{/* Keep this comment */}'));
    assert(output.includes('\n</Accordion>\n'));
    assert(!output.includes('\n  </Accordion>\n'));
  });

  runCase('flags invalid docs.json routes in provided content', () => {
    const findings = validateDocsJsonRoutes(
      REPO_ROOT,
      JSON.stringify({
        navigation: {
          versions: [
            {
              version: 'v2',
              languages: [
                {
                  language: 'en',
                  tabs: [
                    {
                      tab: 'Test',
                      pages: ['v2/about/resources/blockchain-contracts', 'v2/resources/redirect']
                    }
                  ]
                }
              ]
            }
          ]
        }
      })
    );

    assert.strictEqual(findings.length, 1);
    assert(findings[0].message.includes('v2/resources/redirect'));
  });

  return {
    errors,
    warnings,
    passed: errors.length === 0,
    total: 5
  };
}

if (require.main === module) {
  const result = runTests();

  if (result.errors.length > 0) {
    console.error('\n❌ Authoring tools unit test failures:\n');
    result.errors.forEach((error) => {
      console.error(`  ${error.file}:${error.line} - ${error.rule}: ${error.message}`);
    });
  } else {
    console.log(`\n✅ Authoring tools unit tests passed (${result.total} cases checked)`);
  }

  process.exit(result.passed ? 0 : 1);
}

module.exports = { runTests };
