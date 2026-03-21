#!/usr/bin/env node
/**
 * @script      generate-component-registry
 * @type        generator
 * @concern     components
 * @niche       library
 * @purpose     governance:index-management
 * @description Parses JSDoc from all component exports and produces component-registry.json.
 * @mode        generate
 * @pipeline    manual, P3, P5, P6, manual, manual
 * @scope       single-domain
 * @usage       node tools/scripts/generators/components/library/generate-component-registry.js [--validate-only]
 * @policy      R-R10
 */

const fs = require('fs');
const path = require('path');
const {
  extractExports,
  getComponentFiles,
  parseJSDocBlock,
  validateGovernanceFields,
  VALID_CATEGORIES
} = require('../../../../../tools/lib/component-governance-utils');

const REPO_ROOT = process.cwd();
const REGISTRY_PATH = path.join(REPO_ROOT, 'docs-guide', 'component-registry.json');
const SCHEMA_PATH = path.join(REPO_ROOT, 'docs-guide', 'component-registry-schema.json');

const CATEGORY_PURPOSES = {
  elements: 'Smallest visual atoms — no children, no fetching, no arrangement',
  wrappers: 'Holds, groups, or spatially arranges other components',
  displays: 'Renders authored content into a specific visual format',
  scaffolding: 'One-per-page structural skeleton — heroes, portals, frame-mode',
  integrators: 'Fetches, embeds, or binds to external/third-party data',
  config: 'Non-component config objects'
};

function usage() {
  console.log(
    [
      'Usage: node tools/scripts/generate-component-registry.js [options]',
      '',
      'Options:',
      '  --validate-only    Validate component governance metadata without writing files',
      '  --strict           Exit non-zero if any component is missing required governance fields',
      '  --help, -h         Show this help message'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    validateOnly: false,
    strict: false,
    help: false
  };

  argv.forEach((token) => {
    if (token === '--validate-only') {
      args.validateOnly = true;
      return;
    }
    if (token === '--strict') {
      args.strict = true;
      args.validateOnly = true;
      return;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      return;
    }
    throw new Error(`Unknown argument: ${token}`);
  });

  return args;
}

function normalizeCsv(value) {
  const normalized = String(value || '').trim();
  if (!normalized || normalized.toLowerCase() === 'none') return [];
  return normalized
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function serializeParam(param) {
  return {
    name: param.name,
    type: param.type || 'any',
    required: Boolean(param.required),
    defaultValue: param.defaultValue || '',
    description: param.description || ''
  };
}

function formatValidationMessage(filePath, exportName, message) {
  return `${filePath} :: ${exportName} :: ${message}`;
}

function buildRegistry() {
  const issues = [];
  const warnings = [];
  const components = [];
  const categoryCounts = Object.fromEntries(VALID_CATEGORIES.map((category) => [category, 0]));

  getComponentFiles().forEach((file) => {
    const exportsList = extractExports(file.displayPath);
    if (!exportsList.length) {
      issues.push(`${file.displayPath} :: no governed exports found`);
      return;
    }

    exportsList.forEach((entry) => {
      if (!entry.jsDocBlock) {
        issues.push(formatValidationMessage(file.displayPath, entry.name, 'missing JSDoc block'));
        return;
      }

      const jsDoc = parseJSDocBlock(entry.jsDocBlock);
      const validation = validateGovernanceFields(jsDoc, {
        exportName: entry.name,
        filePath: entry.filePath,
        props: entry.props
      });

      validation.errors.forEach((message) => {
        issues.push(formatValidationMessage(file.displayPath, entry.name, message));
      });
      validation.warnings.forEach((message) => {
        warnings.push(formatValidationMessage(file.displayPath, entry.name, message));
      });

      components.push({
        name: entry.name,
        file: file.displayPath,
        category: jsDoc.type || jsDoc.category,
        status: jsDoc.status,
        description: jsDoc.description,
        subniche: jsDoc.subniche,
        accepts: jsDoc.accepts,
        dataSource: jsDoc.dataSource,
        aiDiscoverability: jsDoc.aiDiscoverability || '',
        deprecated: jsDoc.deprecated || '',
        see: jsDoc.see || '',
        params: jsDoc.params.map(serializeParam),
        examples: jsDoc.examples || []
      });
    });
  });

  components.sort((left, right) => {
    if (left.category !== right.category) {
      return left.category.localeCompare(right.category, 'en', { sensitivity: 'base' });
    }
    return left.name.localeCompare(right.name, 'en', { sensitivity: 'base' });
  });

  components.forEach((component) => {
    if (categoryCounts[component.category] !== undefined) {
      categoryCounts[component.category] += 1;
    }
  });

  const registry = {
    _meta: {
      generated: new Date().toISOString(),
      generator: 'operations/scripts/generate-component-registry.js',
      componentCount: components.length
    },
    categories: VALID_CATEGORIES.reduce((accumulator, category) => {
      accumulator[category] = {
        count: categoryCounts[category],
        purpose: CATEGORY_PURPOSES[category]
      };
      return accumulator;
    }, {}),
    components,
    deprecated: components
      .filter((component) => component.status === 'deprecated')
      .map((component) => ({
        name: component.name,
        file: component.file,
        category: component.category,
        see: component.see || '',
        deprecated: component.deprecated || ''
      }))
  };

  return {
    registry,
    issues,
    warnings
  };
}

function buildRegistrySchema() {
  return {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    title: 'Livepeer Component Registry',
    type: 'object',
    required: ['_meta', 'categories', 'components', 'deprecated'],
    additionalProperties: false,
    properties: {
      _meta: {
        type: 'object',
        required: ['generated', 'generator', 'componentCount'],
        properties: {
          generated: { type: 'string', format: 'date-time' },
          generator: { type: 'string' },
          componentCount: { type: 'integer', minimum: 0 }
        }
      },
      categories: {
        type: 'object',
        additionalProperties: {
          type: 'object',
          required: ['count', 'purpose'],
          properties: {
            count: { type: 'integer', minimum: 0 },
            purpose: { type: 'string' }
          }
        }
      },
      components: {
        type: 'array',
        items: {
          type: 'object',
          required: [
            'name',
            'file',
            'category',
            'status',
            'description',
            'subniche',
            'accepts',
            'dataSource',
            'params',
            'examples'
          ],
          properties: {
            name: { type: 'string' },
            file: { type: 'string' },
            category: { type: 'string', enum: VALID_CATEGORIES },
            status: { type: 'string' },
            description: { type: 'string' },
            subniche: { type: 'string' },
            accepts: { type: 'string' },
            dataSource: { type: 'string' },
            deprecated: { type: 'string' },
            see: { type: 'string' },
            params: {
              type: 'array',
              items: {
                type: 'object',
                required: ['name', 'type', 'required', 'defaultValue', 'description'],
                properties: {
                  name: { type: 'string' },
                  type: { type: 'string' },
                  required: { type: 'boolean' },
                  defaultValue: { type: 'string' },
                  description: { type: 'string' }
                }
              }
            },
            examples: { type: 'array', items: { type: 'string' } }
          }
        }
      },
      deprecated: {
        type: 'array',
        items: {
          type: 'object',
          required: ['name', 'file', 'category', 'see', 'deprecated'],
          properties: {
            name: { type: 'string' },
            file: { type: 'string' },
            category: { type: 'string', enum: VALID_CATEGORIES },
            see: { type: 'string' },
            deprecated: { type: 'string' }
          }
        }
      }
    }
  };
}

function writeJson(targetPath, data) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

function run(argv = process.argv.slice(2)) {
  let args;
  try {
    args = parseArgs(argv);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    usage();
    return 1;
  }

  if (args.help) {
    usage();
    return 0;
  }

  const { registry, issues, warnings } = buildRegistry();

  if (warnings.length > 0 && !args.validateOnly) {
    console.warn(`⚠️  ${warnings.length} governance warning(s):`);
    warnings.forEach((w) => console.warn(`  - ${w}`));
  }

  if (issues.length > 0) {
    console.error('❌ Component registry generation failed:');
    issues.forEach((issue) => console.error(`- ${issue}`));
    return 1;
  }

  if (args.strict && warnings.length > 0) {
    console.error(`\n❌ --strict mode: ${warnings.length} governance warning(s) found. Exiting non-zero.`);
    return 1;
  }

  if (!args.validateOnly) {
    writeJson(REGISTRY_PATH, registry);
    writeJson(SCHEMA_PATH, buildRegistrySchema());
    console.log(`Wrote ${path.relative(REPO_ROOT, REGISTRY_PATH)}`);
    console.log(`Wrote ${path.relative(REPO_ROOT, SCHEMA_PATH)}`);
  } else {
    const warningNote = warnings.length > 0 ? ` (${warnings.length} warning(s))` : '';
    console.log(`✅ Validated ${registry.components.length} governed component export(s). No errors${warningNote}.`);
  }

  return 0;
}

if (require.main === module) {
  process.exit(run());
}

module.exports = {
  buildRegistry,
  buildRegistrySchema,
  parseArgs,
  run
};
