#!/usr/bin/env node
/**
 * @script      generate-docs-guide-components-index
 * @type        generator
 * @concern     governance
 * @niche       catalogs
 * @purpose     governance:index-management
 * @description Generates components-catalog.mdx in docs-guide/catalog/ from component-registry.json and component-usage-map.json.
 * @mode        generate
 * @pipeline    commit — auto-regenerated when components staged)
 * @scope       generated-output
 * @usage       node operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js [--fix|--write|--check]
 * @policy      R-R10, R-R16, R-R17
 */

const fs = require('fs');
const path = require('path');
const { VALID_CATEGORIES, VALID_STATUSES } = require('../../../../../tools/lib/governance/component-governance-utils');
const {
  buildGeneratedFrontmatterLines,
  buildGeneratedHiddenBannerLines,
  buildGeneratedNoteLines,
  readCatalogMarkers
} = require('../../../../../tools/lib/governance/generated-file-banners');

// Template path — layout and diagram decisions are read from markers in this file.
// To change the catalog layout or add/remove a diagram, edit the template.
// Markers read by this generator:
//   @catalog-layout  — currently expected: 'accordion-group'
//   @diagram         — not used by components catalog (no pipeline diagram)
const TEMPLATE_PATH = path.join(process.cwd(), 'snippets', 'templates', 'docs-guide', 'catalog-page.mdx');

const REPO_ROOT = process.cwd();
const REGISTRY_PATH = path.join(REPO_ROOT, 'docs-guide', 'config', 'component-registry.json');
const USAGE_MAP_PATH = path.join(REPO_ROOT, 'docs-guide', 'config', 'component-usage-map.json');
const OUTPUT_PATH = path.join(REPO_ROOT, 'docs-guide', 'catalog', 'components-catalog.mdx');
const LEGACY_OUTPUT_PATHS = [toLegacyCatalogPath(OUTPUT_PATH)];
const STATUS_COLUMNS = VALID_STATUSES.filter((status) =>
  ['stable', 'experimental', 'deprecated', 'broken', 'placeholder'].includes(status)
);

const CATEGORY_LABELS = {
  elements: 'Elements',
  wrappers: 'Wrappers',
  displays: 'Displays',
  scaffolding: 'Scaffolding',
  integrators: 'Integrators',
  config: 'Config'
};

const STATUS_ICONS = {
  stable: '🟢',
  experimental: '🧪',
  deprecated: '🟠',
  broken: '🔴',
  placeholder: '⬜'
};

const STATUS_KEY_LINE =
  '**Status:** 🟢 stable · 🧪 experimental · 🟠 deprecated · 🔴 broken · ⬜ placeholder';

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
      '  node operations/scripts/generate-docs-guide-components-index.js [--fix|--write|--check]',
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

function buildUnusedSet(usageMap) {
  return new Set((usageMap.orphaned || []).map((e) => `${e.name}::${e.file}`));
}

function renderSummaryTable(registry, usageMap) {
  const unusedSet = buildUnusedSet(usageMap);

  const rows = [
    '| Category | Exports | 🟢 Stable | 🧪 Experimental | 🟠 Deprecated | 🔴 Broken | ⬜ Placeholder | Unused |',
    '| --- | --- | --- | --- | --- | --- | --- | --- |'
  ];

  const totals = {
    exports: 0,
    stable: 0,
    experimental: 0,
    deprecated: 0,
    broken: 0,
    placeholder: 0,
    unused: 0
  };

  VALID_CATEGORIES.forEach((category) => {
    const components = registry.components.filter((component) => component.category === category);
    const counts = buildStatusBreakdown(components);
    const unused = components.filter((c) => unusedSet.has(`${c.name}::${c.file}`)).length;
    totals.exports += components.length;
    STATUS_COLUMNS.forEach((status) => {
      totals[status] += counts[status];
    });
    totals.unused += unused;

    rows.push(
      `| [${CATEGORY_LABELS[category]}](#${category}) | ${components.length} | ${counts.stable} | ${counts.experimental} | ${counts.deprecated} | ${counts.broken} | ${counts.placeholder} | ${unused} |`
    );
  });

  rows.push(
    `| **Total** | **${totals.exports}** | **${totals.stable}** | **${totals.experimental}** | **${totals.deprecated}** | **${totals.broken}** | **${totals.placeholder}** | **${totals.unused}** |`
  );

  return rows.join('\n');
}

function renderCategorySection(category, components, usageMap) {
  const label = CATEGORY_LABELS[category] || category;
  if (components.length === 0) return '';

  const unusedSet = buildUnusedSet(usageMap);

  const accordions = components.map((component) => {
    const isUnused = unusedSet.has(`${component.name}::${component.file}`);
    const icon = STATUS_ICONS[component.status] || '';
    return [
      `<Accordion title="${icon ? `${icon} ` : ''}${mdEscape(component.name)}">`,
      `<ResponseField name="status" type="string">\`${mdEscape(component.status)}\`</ResponseField>`,
      `<ResponseField name="description" type="string">${mdEscape(component.description)}</ResponseField>`,
      `<ResponseField name="file" type="string">\`/${mdEscape(component.file)}\`</ResponseField>`,
      `<ResponseField name="usage" type="string">${isUnused ? 'unused' : 'in use'}</ResponseField>`,
      `</Accordion>`
    ].join('\n');
  });

  return [
    `## ${label}`,
    '',
    '<AccordionGroup>',
    '',
    accordions.join('\n\n'),
    '',
    '</AccordionGroup>'
  ].join('\n');
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

function renderAuditSection(registry, usageMap) {
  const componentLookup = new Map();
  registry.components.forEach((component) => {
    getRegistryLookupKeys(component).forEach((key) => {
      if (!componentLookup.has(key)) componentLookup.set(key, component);
    });
  });

  const rows = [
    '| Component | Category | Status | Note |',
    '| --- | --- | --- | --- |'
  ];

  const seen = new Set();

  registry.components
    .filter((c) => c.status === 'deprecated')
    .forEach((c) => {
      const key = `${c.name}::${c.file}`;
      seen.add(key);
      const seeIsComponent = c.see && /^[A-Z][a-zA-Z0-9]+$/.test(c.see.trim());
      const note = seeIsComponent
        ? `Replaced by \`${mdEscape(c.see)}\``
        : mdEscape(c.deprecated || c.see || 'No note provided.');
      rows.push(
        `| ${mdEscape(c.name)} | \`${mdEscape(c.category)}\` | \`deprecated\` | ${note} |`
      );
    });

  (usageMap.orphaned || []).forEach((entry) => {
    const key = `${entry.name}::${entry.file}`;
    if (seen.has(key)) return;
    const component = getRegistryLookupKeys(entry)
      .map((k) => componentLookup.get(k))
      .find(Boolean);
    rows.push(
      `| ${mdEscape(entry.name)} | \`${mdEscape(entry.category)}\` | \`${mdEscape(component?.status || 'unknown')}\` | Not imported in any page |`
    );
  });

  if (rows.length <= 2) return '';

  const itemCount = rows.length - 2;
  return [
    `<Accordion title="⚠️ Audit — ${itemCount} item${itemCount === 1 ? '' : 's'}">`,
    '',
    rows.join('\n'),
    '',
    '</Accordion>'
  ].join('\n');
}

function buildOutput(registry, usageMap) {
  const scriptPath =
    'operations/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js';
  const details = {
    script: scriptPath,
    purpose:
      'Generated inventory of governed component exports from docs-guide/config/component-registry.json and docs-guide/config/component-usage-map.json.',
    runWhen: 'Component governance metadata, registry output, or usage-map output changes.',
    runCommand: `node ${scriptPath} --fix`
  };

  const sections = VALID_CATEGORIES.map((category) =>
    renderCategorySection(
      category,
      registry.components.filter((component) => component.category === category),
      usageMap
    )
  ).filter(Boolean);

  const contentLines = sections.flatMap((section, index) => (index === 0 ? [section] : ['', section]));

  const auditSection = renderAuditSection(registry, usageMap);

  return normalizeFileContent(
    [
      ...buildGeneratedFrontmatterLines({
        title: 'Components Catalog',
        sidebarTitle: 'Components Catalog',
        description: 'Generated catalog of all governed component exports.',
        pageType: 'overview',
        consumer: ['human', 'agent'],
        maintenance: 'generated',
        status: 'active',
        generator: scriptPath,
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
      renderSummaryTable(registry, usageMap),
      '',
      STATUS_KEY_LINE,
      '',
      ...contentLines,

      ...(auditSection ? ['', auditSection] : [])
    ].join('\n')
  );
}

function buildOutputs() {
  const registry = readJsonFile(REGISTRY_PATH);
  const usageMap = readJsonFile(USAGE_MAP_PATH);

  // Read layout/diagram markers from the template so changes there automatically
  // surface as warnings here — generators should never need to be edited for
  // layout changes, but they do need to know if the template drifts.
  const markers = readCatalogMarkers(TEMPLATE_PATH);
  const templateLayout = markers['catalog-layout'];
  if (templateLayout && templateLayout !== 'accordion-group') {
    console.warn(
      `⚠️  Template @catalog-layout is '${templateLayout}' but this generator only supports 'accordion-group'. Update the generator to support the new layout, or revert the template.`
    );
  }

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
      console.error('Run: node operations/scripts/generate-docs-guide-components-index.js --fix');
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
  renderSummaryTable,
  renderCategorySection,
  renderAuditSection,
  parseArgs,
  run
};
