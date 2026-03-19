#!/usr/bin/env node
/**
 * @script            generate-docs-guide-components-index
 * @category          generator
 * @purpose           governance:index-management
 * @scope             generated-output
 * @owner             docs
 * @needs             R-R10, R-R16, R-R17
 * @purpose-statement Generates components-catalog.mdx in docs-guide/catalog/ from component-registry.json and component-usage-map.json.
 * @pipeline          P1 (commit — auto-regenerated when components staged)
 * @usage             node tools/scripts/generate-docs-guide-components-index.js [--fix|--write|--check]
 */

const fs = require('fs');
const path = require('path');
const { VALID_CATEGORIES, VALID_STATUSES } = require('../lib/component-governance-utils');
const {
  buildGeneratedFrontmatterLines,
  buildGeneratedHiddenBannerLines,
  buildGeneratedNoteLines
} = require('../lib/generated-file-banners');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const REGISTRY_PATH = path.join(REPO_ROOT, 'docs-guide', 'component-registry.json');
const USAGE_MAP_PATH = path.join(REPO_ROOT, 'docs-guide', 'component-usage-map.json');
const OUTPUT_PATH = path.join(REPO_ROOT, 'docs-guide', 'catalog', 'components-catalog.mdx');
const LEGACY_OUTPUT_PATHS = [toLegacyCatalogPath(OUTPUT_PATH)];
const STATUS_COLUMNS = VALID_STATUSES.filter((status) =>
  ['stable', 'experimental', 'deprecated', 'broken', 'placeholder'].includes(status)
);

const CATEGORY_LABELS = {
  primitives: 'Primitives',
  layout: 'Layout',
  content: 'Content',
  data: 'Data',
  'page-structure': 'Page Structure'
};

function toLegacyCatalogPath(filePath) {
  return path.join(
    path.dirname(filePath).replace(`${path.sep}catalog`, `${path.sep}indexes`),
    path.basename(filePath).replace(/-catalog\.mdx$/i, () => ['-', 'index', '.mdx'].join(''))
  );
}

function printHelp() {
  console.log(
    [
      'Usage:',
      '  node tools/scripts/generate-docs-guide-components-index.js [--fix|--write|--check]',
      '',
      'Modes:',
      '  --fix      Write the generated components catalog.',
      '  --write    Compatibility alias for --fix.',
      '  --check    Fail when the generated output is stale.'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    mode: 'fix',
    help: false
  };

  let explicitModeCount = 0;

  argv.forEach((token) => {
    if (token === '--help' || token === '-h') {
      args.help = true;
      return;
    }
    if (token === '--fix' || token === '--write') {
      args.mode = 'fix';
      explicitModeCount += 1;
      return;
    }
    if (token === '--check') {
      args.mode = 'check';
      explicitModeCount += 1;
      return;
    }
    throw new Error(`Unknown argument: ${token}`);
  });

  if (explicitModeCount > 1) {
    throw new Error('Choose only one mode: --fix/--write or --check');
  }

  return args;
}

function readJsonFile(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing required input: ${path.relative(REPO_ROOT, filePath)}`);
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function normalizeFileContent(content) {
  return `${String(content || '').trim()}\n`;
}

function mdEscape(value) {
  return String(value || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

function buildStatusBreakdown(components) {
  return STATUS_COLUMNS.reduce((accumulator, status) => {
    accumulator[status] = components.filter((component) => component.status === status).length;
    return accumulator;
  }, {});
}

function renderSummaryTable(registry) {
  const rows = [
    '| Category | Exports | Stable | Experimental | Deprecated | Broken | Placeholder |',
    '| --- | --- | --- | --- | --- | --- | --- |'
  ];

  const totals = {
    exports: 0,
    stable: 0,
    experimental: 0,
    deprecated: 0,
    broken: 0,
    placeholder: 0
  };

  VALID_CATEGORIES.forEach((category) => {
    const components = registry.components.filter((component) => component.category === category);
    const counts = buildStatusBreakdown(components);
    totals.exports += components.length;
    STATUS_COLUMNS.forEach((status) => {
      totals[status] += counts[status];
    });

    rows.push(
      `| [${CATEGORY_LABELS[category]}](#${category}) | ${components.length} | ${counts.stable} | ${counts.experimental} | ${counts.deprecated} | ${counts.broken} | ${counts.placeholder} |`
    );
  });

  rows.push(
    `| **Total** | **${totals.exports}** | **${totals.stable}** | **${totals.experimental}** | **${totals.deprecated}** | **${totals.broken}** | **${totals.placeholder}** |`
  );

  return rows.join('\n');
}

function renderCategorySection(category, components) {
  const rows = [
    '| Component | File | Tier | Status | Description | Import path |',
    '| --- | --- | --- | --- | --- | --- |'
  ];

  components.forEach((component) => {
    rows.push(
      `| ${mdEscape(component.name)} | \`/${mdEscape(component.file)}\` | \`${mdEscape(component.tier)}\` | \`${mdEscape(component.status)}\` | ${mdEscape(component.description)} | \`/${mdEscape(component.file)}\` |`
    );
  });

  return [
    `## ${category}`,
    '',
    rows.join('\n')
  ].join('\n');
}

function renderDeprecatedSection(components) {
  if (components.length === 0) return '';

  const rows = [
    '| Component | File | Replacement | Deprecation note |',
    '| --- | --- | --- | --- |'
  ];

  components.forEach((component) => {
    rows.push(
      `| ${mdEscape(component.name)} | \`/${mdEscape(component.file)}\` | ${component.see ? `\`${mdEscape(component.see)}\`` : '`none`'} | ${mdEscape(component.deprecated || 'No note provided.')} |`
    );
  });

  return ['## Deprecated Components', '', rows.join('\n')].join('\n');
}

function getRegistryLookupKeys(component) {
  const keys = [];
  if (component?.name && component?.file && component?.category) {
    keys.push(`${component.name}::${component.file}::${component.category}`);
  }
  if (component?.name && component?.file) {
    keys.push(`${component.name}::${component.file}`);
  }
  if (component?.name) {
    keys.push(component.name);
  }
  return keys;
}

function renderOrphanedSection(usageMap, registry) {
  if (!Array.isArray(usageMap.orphaned) || usageMap.orphaned.length === 0) return '';

  const componentLookup = new Map();
  registry.components.forEach((component) => {
    getRegistryLookupKeys(component).forEach((key) => {
      if (!componentLookup.has(key)) {
        componentLookup.set(key, component);
      }
    });
  });
  const rows = [
    '| Component | Category | File | Status | Description |',
    '| --- | --- | --- | --- | --- |'
  ];

  usageMap.orphaned.forEach((entry) => {
    const component = getRegistryLookupKeys(entry)
      .map((key) => componentLookup.get(key))
      .find(Boolean);
    rows.push(
      `| ${mdEscape(entry.name)} | \`${mdEscape(entry.category)}\` | \`/${mdEscape(entry.file)}\` | \`${mdEscape(component?.status || 'unknown')}\` | ${mdEscape(component?.description || '')} |`
    );
  });

  return ['## Orphaned Components', '', rows.join('\n')].join('\n');
}

function buildOutput(registry, usageMap) {
  const details = {
    script: 'tools/scripts/generate-docs-guide-components-index.js',
    purpose: 'Generated inventory of governed component exports from docs-guide/component-registry.json and docs-guide/component-usage-map.json.',
    runWhen: 'Component governance metadata, registry output, or usage-map output changes.',
    runCommand: 'node tools/scripts/generate-docs-guide-components-index.js --fix'
  };

  const sections = VALID_CATEGORIES.map((category) =>
    renderCategorySection(
      category,
      registry.components.filter((component) => component.category === category)
    )
  );

  const deprecatedSection = renderDeprecatedSection(
    registry.components.filter((component) => component.status === 'deprecated')
  );
  const orphanedSection = renderOrphanedSection(usageMap, registry);

  return normalizeFileContent(
    [
      ...buildGeneratedFrontmatterLines({
        title: 'Components Catalog',
        sidebarTitle: 'Components Catalog',
        description: 'Generated catalog of all governed component exports.',
        pageType: 'overview',
        keywords: ['livepeer', 'components catalog', 'registry', 'usage map', 'inventory']
      }),
      '',
      ...buildGeneratedHiddenBannerLines(details),
      '',
      ...buildGeneratedNoteLines(details),
      '',
      `The governed component library currently exposes **${registry._meta.componentCount}** named export(s).`,
      '',
      '## Summary',
      '',
      renderSummaryTable(registry),
      '',
      ...sections.flatMap((section, index) => (index === 0 ? [section] : ['', section])),
      ...(deprecatedSection ? ['', deprecatedSection] : []),
      ...(orphanedSection ? ['', orphanedSection] : [])
    ].join('\n')
  );
}

function buildOutputs() {
  const registry = readJsonFile(REGISTRY_PATH);
  const usageMap = readJsonFile(USAGE_MAP_PATH);

  return new Map([[OUTPUT_PATH, buildOutput(registry, usageMap)]]);
}

function writeOutputs(outputs) {
  outputs.forEach((content, filePath) => {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, content, 'utf8');
  });
}

function checkOutputs(outputs) {
  const stale = [];

  outputs.forEach((expected, filePath) => {
    const actual = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
    if (normalizeFileContent(actual) !== expected) {
      stale.push(path.relative(REPO_ROOT, filePath));
    }
  });

  return stale;
}

function checkLegacyOutputs() {
  return LEGACY_OUTPUT_PATHS.filter((filePath) => fs.existsSync(filePath)).map((filePath) => path.relative(REPO_ROOT, filePath));
}

function removeLegacyOutputs() {
  const removed = [];
  LEGACY_OUTPUT_PATHS.forEach((filePath) => {
    if (!fs.existsSync(filePath)) return;
    fs.unlinkSync(filePath);
    removed.push(path.relative(REPO_ROOT, filePath));
  });
  return removed;
}

function run(argv = process.argv.slice(2)) {
  let args;
  try {
    args = parseArgs(argv);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    printHelp();
    return 1;
  }

  if (args.help) {
    printHelp();
    return 0;
  }

  let outputs;
  try {
    outputs = buildOutputs();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    return 1;
  }

  if (args.mode === 'check') {
    const stale = checkOutputs(outputs);
    const legacy = checkLegacyOutputs();
    if (stale.length > 0 || legacy.length > 0) {
      stale.forEach((filePath) => console.error(`Components catalog is out of date: ${filePath}`));
      legacy.forEach((filePath) => console.error(`Legacy components index must be removed: ${filePath}`));
      console.error('Run: node tools/scripts/generate-docs-guide-components-index.js --fix');
      return 1;
    }
    console.log('Components catalog is up to date.');
    return 0;
  }

  writeOutputs(outputs);
  const removed = removeLegacyOutputs();
  outputs.forEach((_content, filePath) => {
    console.log(`Wrote ${path.relative(REPO_ROOT, filePath)}`);
  });
  removed.forEach((filePath) => {
    console.log(`Removed legacy ${filePath}`);
  });
  return 0;
}

if (require.main === module) {
  process.exit(run());
}

module.exports = {
  buildOutputs,
  buildOutput,
  parseArgs,
  run
};
