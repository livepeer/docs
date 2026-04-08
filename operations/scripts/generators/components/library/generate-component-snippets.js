#!/usr/bin/env node
/**
 * @script      generate-component-snippets
 * @type        generator
 * @concern     maintenance
 * @niche       library
 * @purpose     tooling:dev-tools
 * @description Generate VS Code snippet definitions from component-registry.json.
 * @mode        generate
 * @pipeline    manual → component-registry.json → .vscode/components.code-snippets
 * @scope       .vscode/components.code-snippets
 * @usage       node operations/scripts/generators/components/library/generate-component-snippets.js [--check] [--write]
 * @policy      —
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const REGISTRY_PATH = path.join(REPO_ROOT, 'docs-guide', 'config', 'component-registry.json');
const SNIPPETS_PATH = path.join(REPO_ROOT, '.vscode', 'components.code-snippets');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function usage() {
  console.log(
    [
      'Usage: node operations/scripts/generators/components/library/generate-component-snippets.js [options]',
      '',
      'Options:',
      '  --check   Verify snippets are up-to-date (exit 1 if stale)',
      '  --write   Overwrite .vscode/components.code-snippets',
      '  --help    Show this help message',
      '',
      'With no flags, prints the generated JSON to stdout (dry-run).'
    ].join('\n')
  );
}

/**
 * Convert PascalCase to camelCase.
 * @param {string} name
 * @returns {string}
 */
function toCamelCase(name) {
  if (!name) return name;
  return name.charAt(0).toLowerCase() + name.slice(1);
}

/**
 * Build the snippet body string for a component based on its params.
 *
 * Rules:
 *  - Required string/any params → prop="example"
 *  - Required boolean params   → prop={true}
 *  - Required number params    → prop={0}
 *  - Optional params           → omitted from the body
 *  - style/className/...rest   → omitted (standard, consumers add when needed)
 *  - If no required params     → self-closing: ComponentName />
 *  - Config objects (no params)→ self-closing
 *
 * @param {string} name
 * @param {Array<{name: string, type: string, required: boolean, defaultValue: string}>} params
 * @returns {string}
 */
function buildBody(name, params) {
  const SKIP_PROPS = new Set(['style', 'className', 'rest', '...rest', 'children']);

  const requiredProps = (params || []).filter(
    (p) => p.required && !SKIP_PROPS.has(p.name)
  );

  if (requiredProps.length === 0) {
    return `${name} />`;
  }

  const propStrings = requiredProps.map((p) => {
    const t = (p.type || 'any').toLowerCase();
    if (t === 'boolean' || t === 'bool') return `${p.name}={true}`;
    if (t === 'number') return `${p.name}={0}`;
    return `${p.name}="example"`;
  });

  // If any param is named "children" or component typically wraps content,
  // we still use self-closing for simplicity — MDX authors add children manually.
  return `${name} ${propStrings.join(' ')} />`;
}

/**
 * Generate the full snippets object from the registry.
 *
 * @param {object} registry  Parsed component-registry.json
 * @returns {object}         Snippets object keyed by component name
 */
function generateSnippets(registry) {
  const snippets = {};

  const components = registry.components || [];
  // Sort alphabetically for stable output
  const sorted = [...components].sort((a, b) => a.name.localeCompare(b.name));

  for (const comp of sorted) {
    const name = comp.name;
    if (!name) continue;

    snippets[name] = {
      scope: 'mdx,markdown',
      prefix: [name, toCamelCase(name)],
      body: [buildBody(name, comp.params)],
      description: comp.description || `${name} component.`
    };
  }

  return snippets;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const args = process.argv.slice(2);

  if (args.includes('--help') || args.includes('-h')) {
    usage();
    process.exit(0);
  }

  const checkMode = args.includes('--check');
  const writeMode = args.includes('--write');

  // Read registry
  if (!fs.existsSync(REGISTRY_PATH)) {
    console.error(`ERROR: Component registry not found at ${REGISTRY_PATH}`);
    console.error('Run generate-component-registry.js first.');
    process.exit(2);
  }

  const registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));
  const snippets = generateSnippets(registry);
  const generated = JSON.stringify(snippets, null, 2) + '\n';

  if (checkMode) {
    if (!fs.existsSync(SNIPPETS_PATH)) {
      console.error('STALE: .vscode/components.code-snippets does not exist.');
      process.exit(1);
    }
    const current = fs.readFileSync(SNIPPETS_PATH, 'utf8');
    if (current.trim() === generated.trim()) {
      console.log('OK: .vscode/components.code-snippets is up-to-date.');
      process.exit(0);
    } else {
      console.error('STALE: .vscode/components.code-snippets differs from registry.');
      console.error('Run with --write to regenerate.');
      process.exit(1);
    }
  }

  if (writeMode) {
    fs.writeFileSync(SNIPPETS_PATH, generated, 'utf8');
    const count = Object.keys(snippets).length;
    console.log(`Wrote ${count} snippets to ${SNIPPETS_PATH}`);
    process.exit(0);
  }

  // Default: dry-run — print to stdout
  process.stdout.write(generated);
  process.exit(0);
}

if (require.main === module) {
  main();
}

module.exports = { generateSnippets, buildBody, toCamelCase };
