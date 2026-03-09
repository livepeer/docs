#!/usr/bin/env node
/**
 * @script           generate-component-docs
 * @category         generator
 * @purpose          governance:index-management
 * @scope            generated-output
 * @owner            docs
 * @needs            R-R10
 * @purpose-statement Generates published component library MDX pages from the registry.
 * @pipeline         P6 (on-demand)
 * @usage            node tools/scripts/generate-component-docs.js [--template-only] [--category <name>]
 */

const fs = require('fs');
const path = require('path');
const { VALID_CATEGORIES } = require('../lib/component-governance-utils');
const {
  buildGeneratedHiddenBannerLines,
  buildGeneratedNoteLines
} = require('../lib/generated-file-banners');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const REGISTRY_PATH = path.join(REPO_ROOT, 'docs-guide', 'component-registry.json');
const ENGLISH_OUTPUT_DIR = path.join(
  REPO_ROOT,
  'v2',
  'resources',
  'documentation-guide',
  'component-library'
);
const LOCALE_DIRS = [
  path.join(REPO_ROOT, 'v2', 'es', 'resources', 'documentation-guide', 'component-library'),
  path.join(REPO_ROOT, 'v2', 'fr', 'resources', 'documentation-guide', 'component-library'),
  path.join(REPO_ROOT, 'v2', 'cn', 'resources', 'documentation-guide', 'component-library')
];

const CATEGORY_LABELS = {
  primitives: 'Primitives',
  layout: 'Layout',
  content: 'Content',
  data: 'Data',
  'page-structure': 'Page Structure'
};

const CATEGORY_DESCRIPTIONS = {
  primitives: 'Standalone visual atoms used across authored documentation.',
  layout: 'Containers and arrangements that define spacing, grouping, and page flow.',
  content: 'Renderers for reader-facing media, code, quotations, and structured content.',
  data: 'Components that are coupled to feeds, release data, or other external sources.',
  'page-structure': 'Portal and frame-mode scaffolding components that shape whole sections.'
};

function usage() {
  console.log(
    [
      'Usage: node tools/scripts/generate-component-docs.js [options]',
      '',
      'Options:',
      '  --template-only        Use template prose only (default for this phase)',
      '  --category <name>      Regenerate one category page only',
      '  --help, -h             Show this help message'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    templateOnly: true,
    category: '',
    help: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--template-only') {
      args.templateOnly = true;
      continue;
    }
    if (token === '--category') {
      args.category = String(argv[index + 1] || '').trim();
      index += 1;
      continue;
    }
    if (token.startsWith('--category=')) {
      args.category = token.slice('--category='.length).trim();
      continue;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    throw new Error(`Unknown argument: ${token}`);
  }

  if (args.category && !VALID_CATEGORIES.includes(args.category)) {
    throw new Error(`Unknown category: ${args.category}`);
  }

  return args;
}

function loadRegistry() {
  if (!fs.existsSync(REGISTRY_PATH)) {
    throw new Error('Missing docs-guide/component-registry.json. Run generate-component-registry first.');
  }

  return JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));
}

function escapePipes(value) {
  return String(value || '').replace(/\|/g, '\\|');
}

function renderGeneratedNote(scriptPath, runCommand) {
  const details = {
    script: scriptPath,
    purpose: 'Generated component-library MDX pages derived from docs-guide/component-registry.json.',
    runWhen: 'Component governance metadata, registry outputs, or published component-library templates change.',
    runCommand
  };

  return [...buildGeneratedHiddenBannerLines(details), '', ...buildGeneratedNoteLines(details), ''].join('\n');
}

function renderDecisionTree() {
  return [
    '1. Bound to an external data source or automation pipeline? `data/`',
    '2. Only makes sense on frame-mode or portal pages? `page-structure/`',
    '3. Accepts children and arranges them spatially? `layout/`',
    '4. Formats or renders content for the reader? `content/`',
    '5. Otherwise: `primitives/`'
  ].join('\n');
}

function renderPropsTable(params) {
  if (!params.length) {
    return 'No documented props.\n';
  }

  const lines = [
    '| Prop | Type | Required | Default | Description |',
    '| --- | --- | --- | --- | --- |'
  ];

  params.forEach((param) => {
    lines.push(
      `| \`${escapePipes(param.name)}\` | \`${escapePipes(param.type || 'any')}\` | ${
        param.required ? 'Yes' : 'No'
      } | \`${escapePipes(param.defaultValue || '')}\` | ${escapePipes(param.description || '')} |`
    );
  });

  return `${lines.join('\n')}\n`;
}

function renderExample(example) {
  if (!example) return '';
  return ['```jsx', example.trim(), '```', ''].join('\n');
}

function renderUsageSummary(component) {
  if (!component.usedIn.length) {
    return '`@usedIn`: none';
  }

  const preview = component.usedIn.slice(0, 6).map((entry) => `\`${entry}\``).join(', ');
  if (component.usedIn.length <= 6) {
    return `\`@usedIn\`: ${preview}`;
  }

  return `\`@usedIn\`: ${preview}, and ${component.usedIn.length - 6} more page(s)`;
}

function renderComponentSection(component) {
  return [
    `### ${component.name}`,
    '',
    component.description,
    '',
    `- File: \`/${component.file}\``,
    `- Tier: \`${component.tier}\``,
    `- Status: \`${component.status}\``,
    `- Risk: \`${component.breakingChangeRisk}\``,
    `- Decision: \`${component.decision}\``,
    `- Owner: \`${component.owner}\``,
    `- Content affinity: ${
      component.contentAffinity.length ? component.contentAffinity.map((value) => `\`${value}\``).join(', ') : '`none`'
    }`,
    `- Dependencies: ${
      component.dependencies.length ? component.dependencies.map((value) => `\`${value}\``).join(', ') : '`none`'
    }`,
    `- Data source: \`${component.dataSource || 'none'}\``,
    `- Duplicates: ${
      component.duplicates.length ? component.duplicates.map((value) => `\`${value}\``).join(', ') : '`none`'
    }`,
    `- Last meaningful change: \`${component.lastMeaningfulChange}\``,
    `- ${renderUsageSummary(component)}`,
    component.status === 'deprecated' && component.deprecated
      ? `- Deprecation note: ${component.deprecated}${component.see ? ` See \`${component.see}\`.` : ''}`
      : null,
    '',
    '**Import**',
    '',
    '```jsx',
    `import { ${component.name} } from '/${component.file}'`,
    '```',
    '',
    '**Props**',
    '',
    renderPropsTable(component.params),
    component.examples.length
      ? ['**Example**', '', renderExample(component.examples[0])].join('\n')
      : ''
  ]
    .filter(Boolean)
    .join('\n');
}

function renderCategoryPage(category, components) {
  const label = CATEGORY_LABELS[category];
  const description = CATEGORY_DESCRIPTIONS[category];
  const summaryLines = [
    '| Component | Status | Tier | Risk | Source file |',
    '| --- | --- | --- | --- | --- |'
  ];

  components.forEach((component) => {
    summaryLines.push(
      `| [${component.name}](#${component.name.toLowerCase()}) | \`${component.status}\` | \`${component.tier}\` | \`${component.breakingChangeRisk}\` | \`/${component.file}\` |`
    );
  });

  return [
    '---',
    `title: '${label}'`,
    `sidebarTitle: '${label}'`,
    `description: '${description}'`,
    "pageType: reference",
    '---',
    '',
    renderGeneratedNote(
      'tools/scripts/generate-component-docs.js',
      `node tools/scripts/generate-component-docs.js --template-only --category ${category}`
    ),
    '<Card title="Back to Component Library" icon="arrow-left" href="../component-library" arrow>',
    '  Return to the generated component library landing page.',
    '</Card>',
    '',
    `## ${label}`,
    '',
    description,
    '',
    `This category currently contains **${components.length}** governed export(s).`,
    '',
    '### Summary Table',
    '',
    summaryLines.join('\n'),
    '',
    '### Component Entries',
    '',
    components.map(renderComponentSection).join('\n\n---\n\n'),
    ''
  ].join('\n');
}

function renderOverviewPage(registry) {
  const categoryTable = [
    '| Category | Purpose | Exports |',
    '| --- | --- | --- |'
  ];

  VALID_CATEGORIES.forEach((category) => {
    categoryTable.push(
      `| [${CATEGORY_LABELS[category]}](./${category}) | ${escapePipes(
        registry.categories[category].purpose
      )} | ${registry.categories[category].count} |`
    );
  });

  return [
    '---',
    "title: 'Component Library Overview'",
    "sidebarTitle: 'Overview'",
    "description: 'Generated overview for the governed snippets/components library.'",
    "pageType: overview",
    '---',
    '',
    renderGeneratedNote(
      'tools/scripts/generate-component-docs.js',
      'node tools/scripts/generate-component-docs.js --template-only'
    ),
    '## Governance Snapshot',
    '',
    `The governed component library currently exposes **${registry._meta.componentCount}** named export(s) across five active categories.`,
    '',
    '### Category Matrix',
    '',
    categoryTable.join('\n'),
    '',
    '### Classification Decision Tree',
    '',
    renderDecisionTree(),
    '',
    '### Canonical Sources',
    '',
    '- Registry JSON: [`docs-guide/component-registry.json`](/docs-guide/component-registry.json)',
    '- Governance framework: [`docs-guide/contributing/component-framework.mdx`](/docs-guide/contributing/component-framework.mdx)',
    '- Usage map: [`docs-guide/component-usage-map.json`](/docs-guide/component-usage-map.json)',
    ''
  ].join('\n');
}

function renderLandingPage(registry) {
  return [
    '---',
    "title: 'Component Library'",
    "sidebarTitle: 'Component Library'",
    "description: 'Generated component-library landing page backed by the component registry.'",
    "pageType: overview",
    '---',
    '',
    renderGeneratedNote(
      'tools/scripts/generate-component-docs.js',
      'node tools/scripts/generate-component-docs.js --template-only'
    ),
    '<CardGroup cols={2}>',
    ...VALID_CATEGORIES.flatMap((category) => [
      `  <Card title="${CATEGORY_LABELS[category]}" href="./${category}" icon="puzzle-piece">`,
      `    ${CATEGORY_DESCRIPTIONS[category]} (${registry.categories[category].count} exports)`,
      '  </Card>'
    ]),
    '</CardGroup>',
    '',
    '## What This Page Publishes',
    '',
    '- Category landing pages derived from JSDoc governance metadata.',
    '- Source-file, prop, ownership, and deprecation summaries from the registry.',
    '- A stable page set for `primitives`, `layout`, `content`, `data`, and `page-structure`.',
    '',
    '## Decision Tree Excerpt',
    '',
    renderDecisionTree(),
    ''
  ].join('\n');
}

function renderLocaleScaffold(locale, fileSlug, title, description, registry) {
  const cards = VALID_CATEGORIES.flatMap((category) => [
    `  <Card title="${CATEGORY_LABELS[category]}" href="./${category}" icon="puzzle-piece">`,
    `    ${registry.categories[category].count} exports`,
    '  </Card>'
  ]);

  if (fileSlug === 'component-library') {
    return [
      '---',
      `title: '${title}'`,
      `sidebarTitle: '${title}'`,
      `description: '${description}'`,
      '---',
      '',
      renderGeneratedNote(
        'tools/scripts/generate-component-docs.js',
        `node tools/scripts/generate-component-docs.js --template-only`
      ),
      `<Note>Localized prose refresh for \`${locale}\` is pending. This route is kept current so navigation and links continue to resolve.</Note>`,
      '',
      '<CardGroup cols={2}>',
      ...cards,
      '</CardGroup>',
      ''
    ].join('\n');
  }

  if (fileSlug === 'overview') {
    return [
      '---',
      `title: '${title}'`,
      `sidebarTitle: '${title}'`,
      `description: '${description}'`,
      '---',
      '',
      renderGeneratedNote(
        'tools/scripts/generate-component-docs.js',
        `node tools/scripts/generate-component-docs.js --template-only`
      ),
      `<Note>Localized prose refresh for \`${locale}\` is pending. Use the category pages below; structure now matches the English component-library routes.</Note>`,
      '',
      '| Category | Exports |',
      '| --- | --- |',
      ...VALID_CATEGORIES.map((category) => `| [${CATEGORY_LABELS[category]}](./${category}) | ${registry.categories[category].count} |`),
      ''
    ].join('\n');
  }

  const category = fileSlug;
  const components = registry.components.filter((component) => component.category === category);
  return [
    '---',
    `title: '${title}'`,
    `sidebarTitle: '${title}'`,
    `description: '${description}'`,
    '---',
    '',
    renderGeneratedNote(
      'tools/scripts/generate-component-docs.js',
      `node tools/scripts/generate-component-docs.js --template-only --category ${category}`
    ),
    `<Note>Localized prose refresh for \`${locale}\` is pending. This page preserves the new route and mirrors the English category inventory at a summary level.</Note>`,
    '',
    '<Card title="Back to Component Library" icon="arrow-left" href="../component-library" arrow>',
    '  Return to the localized component-library landing page.',
    '</Card>',
    '',
    '| Component | Status | Tier | Source file |',
    '| --- | --- | --- | --- |',
    ...components.map(
      (component) =>
        `| ${component.name} | \`${component.status}\` | \`${component.tier}\` | \`/${component.file}\` |`
    ),
    ''
  ].join('\n');
}

function writeFile(targetPath, content) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, `${content.trim()}\n`, 'utf8');
}

function removeLegacyPages(baseDir) {
  ['display.mdx', 'domain.mdx', 'integrations.mdx'].forEach((fileName) => {
    const targetPath = path.join(baseDir, fileName);
    if (fs.existsSync(targetPath)) {
      fs.unlinkSync(targetPath);
    }
  });
}

function generateDocs(args = parseArgs(process.argv.slice(2))) {
  const registry = loadRegistry();
  const targets = args.category ? [args.category] : VALID_CATEGORIES;

  if (!args.category) {
    writeFile(path.join(ENGLISH_OUTPUT_DIR, 'overview.mdx'), renderOverviewPage(registry));
    writeFile(path.join(ENGLISH_OUTPUT_DIR, 'component-library.mdx'), renderLandingPage(registry));
  }

  targets.forEach((category) => {
    const components = registry.components.filter((component) => component.category === category);
    writeFile(path.join(ENGLISH_OUTPUT_DIR, `${category}.mdx`), renderCategoryPage(category, components));
  });

  if (!args.category) {
    removeLegacyPages(ENGLISH_OUTPUT_DIR);
  }

  LOCALE_DIRS.forEach((localeDir) => {
    const locale = path.relative(path.join(REPO_ROOT, 'v2'), localeDir).split(path.sep)[0];
    if (!args.category) {
      writeFile(
        path.join(localeDir, 'overview.mdx'),
        renderLocaleScaffold(locale, 'overview', 'Component Library Overview', 'Localized route-safe overview.', registry)
      );
      writeFile(
        path.join(localeDir, 'component-library.mdx'),
        renderLocaleScaffold(locale, 'component-library', 'Component Library', 'Localized route-safe landing page.', registry)
      );
    }

    targets.forEach((category) => {
      writeFile(
        path.join(localeDir, `${category}.mdx`),
        renderLocaleScaffold(locale, category, CATEGORY_LABELS[category], CATEGORY_DESCRIPTIONS[category], registry)
      );
    });

    if (!args.category) {
      removeLegacyPages(localeDir);
    }
  });

  return { registry, targets };
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

  generateDocs(args);
  console.log(
    args.category
      ? `Generated component-library page for ${args.category}.`
      : 'Generated English component-library pages and localized route scaffolds.'
  );
  return 0;
}

if (require.main === module) {
  process.exit(run());
}

module.exports = {
  generateDocs,
  parseArgs,
  renderOverviewPage,
  renderLandingPage,
  renderCategoryPage,
  run
};
