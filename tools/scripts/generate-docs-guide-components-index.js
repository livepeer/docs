#!/usr/bin/env node
/**
 * @script           generate-docs-guide-components-index
 * @category         generator
 * @purpose          governance:index-management
 * @scope            generated-output
 * @owner            docs
 * @needs            R-R10, R-R16, R-R17
 * @purpose-statement Generates docs-guide and published component overview indexes from the governed component registry.
 * @pipeline         manual
 * @usage            node tools/scripts/generate-docs-guide-components-index.js [--write|--check]
 */

const fs = require('fs');
const path = require('path');
const { VALID_CATEGORIES } = require('../lib/component-governance-utils');
const { buildRegistry } = require('./generate-component-registry');
const { renderOverviewPage } = require('./generate-component-docs');
const {
  buildGeneratedFrontmatterLines,
  buildGeneratedHiddenBannerLines,
  buildGeneratedNoteLines
} = require('../lib/generated-file-banners');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const OUTPUT_PATHS = [
  'docs-guide/indexes/components-index.mdx',
  'v2/resources/documentation-guide/component-library/overview.mdx'
];

const CATEGORY_LABELS = {
  primitives: 'Primitives',
  layout: 'Layout',
  content: 'Content',
  data: 'Data',
  'page-structure': 'Page Structure'
};

const CATEGORY_DESCRIPTIONS = {
  primitives: 'Standalone visual atoms reused across authored docs.',
  layout: 'Arrangement and grouping components that shape flow and spacing.',
  content: 'Reader-facing renderers for code, media, response fields, and structured content.',
  data: 'Components bound to feeds, release metadata, or external datasets.',
  'page-structure': 'Portal and frame-mode scaffolding for whole sections or hero treatments.'
};

function usage() {
  console.log(
    [
      'Usage: node tools/scripts/generate-docs-guide-components-index.js [options]',
      '',
      'Options:',
      '  --write      Write generated output files',
      '  --check      Verify generated output files are current',
      '  --help, -h   Show this help message'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    write: false,
    check: false,
    help: false
  };

  argv.forEach((token) => {
    if (token === '--write') {
      args.write = true;
      return;
    }
    if (token === '--check') {
      args.check = true;
      return;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      return;
    }
    throw new Error(`Unknown argument: ${token}`);
  });

  if (!args.write && !args.check) {
    args.write = true;
  }

  return args;
}

function normalizeFileContent(content) {
  return `${String(content || '').trim()}\n`;
}

function renderComponentsIndex(registry) {
  const details = {
    script: 'tools/scripts/generate-docs-guide-components-index.js',
    purpose: 'Aggregate inventory of governed component exports from snippets/components for docs-guide maintenance.',
    runWhen: 'Governed component files, exported signatures, or registry metadata change.',
    runCommand: 'node tools/scripts/generate-docs-guide-components-index.js --write'
  };

  const summaryLines = [
    '| Category | Exports | Primary purpose |',
    '| --- | --- | --- |'
  ];

  VALID_CATEGORIES.forEach((category) => {
    summaryLines.push(
      `| [${CATEGORY_LABELS[category]}](#${category}) | ${registry.categories[category].count} | ${CATEGORY_DESCRIPTIONS[category]} |`
    );
  });

  const sections = VALID_CATEGORIES.map((category) => {
    const components = registry.components.filter((component) => component.category === category);
    const table = [
      '| Component | Status | Tier | File |',
      '| --- | --- | --- | --- |'
    ];

    components.forEach((component) => {
      table.push(
        `| ${component.name} | \`${component.status}\` | \`${component.tier}\` | \`/${component.file}\` |`
      );
    });

    return [
      `## ${category}`,
      '',
      CATEGORY_DESCRIPTIONS[category],
      '',
      table.join('\n')
    ].join('\n');
  });

  return normalizeFileContent(
    [
      ...buildGeneratedFrontmatterLines({
        title: 'Components Index',
        sidebarTitle: 'Components Index',
        description: 'Aggregate inventory of governed component exports from snippets/components.',
        pageType: 'overview',
        keywords: ['livepeer', 'components index', 'snippets', 'registry', 'inventory']
      }),
      '',
      ...buildGeneratedHiddenBannerLines(details),
      '',
      ...buildGeneratedNoteLines(details),
      '',
      `The governed component library currently exposes **${registry._meta.componentCount}** named export(s).`,
      '',
      '## Category Summary',
      '',
      summaryLines.join('\n'),
      '',
      ...sections.flatMap((section, index) => (index === 0 ? [section] : ['', section]))
    ].join('\n')
  );
}

function buildOutputs() {
  const { registry, issues } = buildRegistry();
  if (issues.length > 0) {
    throw new Error(issues.join('\n'));
  }

  return new Map([
    ['docs-guide/indexes/components-index.mdx', renderComponentsIndex(registry)],
    ['v2/resources/documentation-guide/component-library/overview.mdx', normalizeFileContent(renderOverviewPage(registry))]
  ]);
}

function writeOutputs(outputs) {
  outputs.forEach((content, relativePath) => {
    const absolutePath = path.join(REPO_ROOT, relativePath);
    fs.mkdirSync(path.dirname(absolutePath), { recursive: true });
    fs.writeFileSync(absolutePath, content, 'utf8');
  });
}

function checkOutputs(outputs) {
  const stale = [];

  outputs.forEach((expected, relativePath) => {
    const absolutePath = path.join(REPO_ROOT, relativePath);
    const actual = fs.existsSync(absolutePath) ? fs.readFileSync(absolutePath, 'utf8') : '';
    if (normalizeFileContent(actual) !== expected) {
      stale.push(relativePath);
    }
  });

  return stale;
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

  let outputs;
  try {
    outputs = buildOutputs();
  } catch (error) {
    console.error(`❌ ${error.message}`);
    return 1;
  }

  if (args.check) {
    const stale = checkOutputs(outputs);
    if (stale.length > 0) {
      stale.forEach((filePath) => console.error(`Components index is out of date: ${filePath}`));
      console.error('Run: node tools/scripts/generate-docs-guide-components-index.js --write');
      return 1;
    }
    console.log('Components indexes are up to date.');
    return 0;
  }

  writeOutputs(outputs);
  OUTPUT_PATHS.forEach((filePath) => console.log(`Wrote ${filePath}`));
  return 0;
}

if (require.main === module) {
  process.exit(run());
}

module.exports = {
  buildOutputs,
  parseArgs,
  run
};
