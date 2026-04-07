#!/usr/bin/env node
/**
 * @script      generate-component-docs
 * @type        generator
 * @concern     components
 * @niche       documentation
 * @purpose     governance:index-management
 * @description Generates published component library MDX pages from the registry. Replaces update-component-library.sh.
 * @mode        generate
 * @pipeline    manual
 * @scope       generated-output
 * @usage       node operations/scripts/generators/components/documentation/generate-component-docs.js [--dry-run|--fix|--write|--check] [--template-only] [--category <name>]
 * @policy      R-R10
 */

const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const {
  VALID_CATEGORIES,
  compactWhitespace,
  normalizeRepoPath
} = require('../../../../../tools/lib/governance/component-governance-utils');
const {
  buildGeneratedFrontmatterLines,
  buildGeneratedHiddenBannerLines,
  buildGeneratedNoteLines
} = require('../../../../../tools/lib/governance/generated-file-banners');
const {
  buildProvenanceComment,
  injectOrReplaceProvenanceComment,
  parseProvenanceComment
} = require('../../../automations/content/language-translation/lib/provenance');

const REPO_ROOT = process.cwd();
const REGISTRY_PATH = path.join(REPO_ROOT, 'docs-guide', 'config', 'component-registry.json');
const EDITORIAL_CACHE_PATH = path.join(REPO_ROOT, 'docs-guide', '.editorial-cache.json');
const ENGLISH_OUTPUT_DIR = path.join(REPO_ROOT, 'v2', 'resources', 'documentation-guide', 'component-library');
const LOCALE_DIRS = {
  es: path.join(REPO_ROOT, 'v2', 'es', 'resources', 'documentation-guide', 'component-library'),
  fr: path.join(REPO_ROOT, 'v2', 'fr', 'resources', 'documentation-guide', 'component-library'),
  cn: path.join(REPO_ROOT, 'v2', 'cn', 'resources', 'documentation-guide', 'component-library')
};
const ENGLISH_COMPONENT_LIBRARY_ROUTE = '/v2/resources/documentation-guide/component-library';
const LOCALE_COMPONENT_LIBRARY_ROUTES = {
  es: '/v2/es/resources/documentation-guide/component-library',
  fr: '/v2/fr/resources/documentation-guide/component-library',
  cn: '/v2/cn/resources/documentation-guide/component-library'
};
const LEGACY_COMPONENT_LIBRARY_FILES = [
  'display.mdx', 'domain.mdx', 'integrations.mdx',
  'primitives.mdx', 'layout.mdx', 'content.mdx', 'data.mdx', 'page-structure.mdx'
];
const ARCHIVE_SOURCE_PATH = path.join(REPO_ROOT, 'tools', 'scripts', 'snippets', 'update-component-library.sh');
const ARCHIVE_TARGET_PATH = path.join(REPO_ROOT, 'tools', 'scripts', 'archive', 'deprecated', 'update-component-library.sh');
const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL || 'qwen/qwen-turbo';

const CATEGORY_LABELS = {
  elements: 'Elements',
  wrappers: 'Wrappers',
  displays: 'Displays',
  scaffolding: 'Scaffolding',
  integrators: 'Integrators',
  config: 'Config'
};

const CATEGORY_DESCRIPTIONS = {
  elements: 'Standalone visual atoms — icons, text, links, callouts, math, spacing, images.',
  wrappers: 'Containers that hold, group, or spatially arrange other components.',
  displays: 'Renderers for authored content — code, video, diagrams, quotes, response fields.',
  scaffolding: 'One-per-page structural skeleton — heroes, portals, frame-mode overrides.',
  integrators: 'Fetches, embeds, or binds to external data — feeds, embeds, video, APIs.',
  config: 'Non-component configuration objects (e.g. theme, colour maps).'
};

function printHelp() {
  console.log(
    [
      'Usage:',
      '  node operations/scripts/generators/components/documentation/generate-component-docs.js [--dry-run|--fix|--write|--check] [--template-only] [--category <name>]',
      '',
      'Modes:',
      '  --dry-run       Preview generated outputs without writing files (default).',
      '  --fix           Write generated files and remove/archive legacy outputs.',
      '  --write         Compatibility alias for --fix.',
      '  --check         Fail when generated outputs are stale.',
      '',
      'Options:',
      '  --template-only Skip OpenRouter editorial generation and use deterministic template prose.',
      '  --category      Restrict generation/checking to one component category.'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    mode: 'dry-run',
    templateOnly: false,
    category: '',
    help: false
  };

  let explicitModeCount = 0;

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    if (token === '--dry-run') {
      args.mode = 'dry-run';
      explicitModeCount += 1;
      continue;
    }

    if (token === '--fix' || token === '--write') {
      args.mode = 'fix';
      explicitModeCount += 1;
      continue;
    }

    if (token === '--check') {
      args.mode = 'check';
      explicitModeCount += 1;
      continue;
    }

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

    throw new Error(`Unknown argument: ${token}`);
  }

  if (explicitModeCount > 1) {
    throw new Error('Choose only one mode: --dry-run, --fix/--write, or --check');
  }

  if (args.category && !VALID_CATEGORIES.includes(args.category)) {
    throw new Error(`Unknown category: ${args.category}`);
  }

  return args;
}

function normalizeFileContent(content) {
  return `${String(content || '').trim()}\n`;
}

function readRegistry() {
  if (!fs.existsSync(REGISTRY_PATH)) {
    throw new Error('Missing docs-guide/config/component-registry.json. Run generate-component-registry first.');
  }
  return JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf8'));
}

function loadEditorialCache() {
  if (!fs.existsSync(EDITORIAL_CACHE_PATH)) {
    return {};
  }
  try {
    return JSON.parse(fs.readFileSync(EDITORIAL_CACHE_PATH, 'utf8'));
  } catch (_error) {
    return {};
  }
}

function saveEditorialCache(cache) {
  fs.mkdirSync(path.dirname(EDITORIAL_CACHE_PATH), { recursive: true });
  fs.writeFileSync(EDITORIAL_CACHE_PATH, `${JSON.stringify(cache, null, 2)}\n`, 'utf8');
}

function sha256(value) {
  return crypto.createHash('sha256').update(String(value || ''), 'utf8').digest('hex');
}

function escapePipes(value) {
  return String(value || '').replace(/\|/g, '\\|');
}

function stripLeadingComponentName(description, componentName) {
  const text = compactWhitespace(description);
  if (!text) return 'the documented component behavior';
  const pattern = new RegExp(`^${componentName}\\s+`, 'i');
  const stripped = text.replace(pattern, '');
  return stripped.charAt(0).toLowerCase() + stripped.slice(1);
}

function formatGeneratedPreamble(meta) {
  return [
    ...buildGeneratedFrontmatterLines(meta.frontmatter),
    '',
    ...buildGeneratedHiddenBannerLines(meta.banner),
    '',
    ...buildGeneratedNoteLines(meta.banner),
    ''
  ].join('\n');
}

function renderDecisionTree() {
  return [
    '1. Fetches, embeds, or binds to external/third-party data? → `integrators/`',
    '2. Part of the page\'s outer structure, typically used once? → `scaffolding/`',
    '3. Takes content and presents it in a formatted way? → `displays/`',
    '4. Exists to hold, group, or arrange other things? → `wrappers/`',
    '5. Single visual piece — no wrapping, no arranging, no fetching? → `elements/`'
  ].join('\n');
}

function buildComponentLibraryRoute(baseRoute, slug = '') {
  return slug ? `${baseRoute}/${slug}` : baseRoute;
}

function renderPropsTable(params) {
  if (!params.length) {
    return 'No documented props.\n';
  }

  const lines = [
    '| Prop | Type | Default | Required | Description |',
    '| --- | --- | --- | --- | --- |'
  ];

  params.forEach((param) => {
    lines.push(
      `| \`${escapePipes(param.name)}\` | \`${escapePipes(param.type || 'any')}\` | \`${escapePipes(param.defaultValue || '')}\` | ${
        param.required ? 'Yes' : 'No'
      } | ${escapePipes(param.description || '')} |`
    );
  });

  return `${lines.join('\n')}\n`;
}

function renderExample(example) {
  if (!example) return '';
  return ['```jsx', example.trim(), '```'].join('\n');
}

function buildTemplateEditorial(component) {
  const description = stripLeadingComponentName(component.description, component.name);
  const accepts = component.accepts ? ` Accepts: ${component.accepts}.` : '';
  return `Use **${component.name}** when you need ${description}.${accepts}`;
}

async function requestOpenRouterEditorial(component) {
  const prompt = [
    'Write 2 concise sentences for a documentation component reference entry.',
    `Component: ${component.name}`,
    `Description: ${component.description}`,
    `Status: ${component.status}`,
    `Accepts: ${component.accepts || 'none'}`,
    `Data source: ${component.dataSource || 'none'}`,
    'Avoid hype, avoid headings, and keep it factual.'
  ].join('\n');

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: OPENROUTER_MODEL,
      messages: [{ role: 'user', content: prompt }]
    }),
    signal: AbortSignal.timeout(30000)
  });

  if (!response.ok) {
    throw new Error(`OpenRouter request failed (${response.status})`);
  }

  const payload = await response.json();
  return compactWhitespace(payload?.choices?.[0]?.message?.content || '');
}

async function getEditorialProse(component, args, cache, warnings) {
  const fallback = buildTemplateEditorial(component);
  if (args.templateOnly || !process.env.OPENROUTER_API_KEY) {
    return fallback;
  }

  const cacheKey = sha256(
    JSON.stringify({
      name: component.name,
      description: component.description,
      status: component.status,
      accepts: component.accepts,
      dataSource: component.dataSource
    })
  );

  if (cache[cacheKey]?.text) {
    return cache[cacheKey].text;
  }

  try {
    const text = await requestOpenRouterEditorial(component);
    if (!text) return fallback;
    cache[cacheKey] = {
      text,
      generatedAt: new Date().toISOString(),
      model: OPENROUTER_MODEL
    };
    return text;
  } catch (error) {
    warnings.push(`Fell back to template prose for ${component.name}: ${error.message}`);
    return fallback;
  }
}

function renderUsageSummary(_component) {
  return '';
}

function renderMetadataList(component) {
  return [
    `- Status: \`${component.status}\``,
    `- Accepts: \`${component.accepts || 'none'}\``,
    `- Data source: \`${component.dataSource || 'none'}\``
  ].join('\n');
}

function renderComponentSection(component, editorialProse) {
  return [
    `### ${component.name}`,
    '',
    editorialProse,
    '',
    `Source description: ${component.description}`,
    '',
    '**Import path**',
    '',
    '```jsx',
    `import { ${component.name} } from '/${component.file}'`,
    '```',
    '',
    '**Metadata**',
    '',
    renderMetadataList(component),
    component.status === 'deprecated' && component.deprecated
      ? ['', `Deprecation note: ${component.deprecated}${component.see ? ` See \`${component.see}\`.` : ''}`].join('\n')
      : '',
    '',
    '**Props**',
    '',
    renderPropsTable(component.params),
    component.examples.length > 0
      ? ['**Code example**', '', renderExample(component.examples[0])].join('\n')
      : ''
  ]
    .filter(Boolean)
    .join('\n');
}

async function renderCategoryPage(category, components, args, cache, warnings) {
  const label = CATEGORY_LABELS[category];
  const description = CATEGORY_DESCRIPTIONS[category];
  const summaryRows = [
    '| Component | Status | Import path | Description |',
    '| --- | --- | --- | --- |'
  ];

  components.forEach((component) => {
    summaryRows.push(
      `| ${component.name} | \`${component.status}\` | \`/${component.file}\` | ${escapePipes(component.description)} |`
    );
  });

  const sections = [];
  for (const component of components) {
    const editorialProse = await getEditorialProse(component, args, cache, warnings);
    sections.push(renderComponentSection(component, editorialProse));
  }

  const meta = {
    frontmatter: {
      title: label,
      sidebarTitle: label,
      description,
      pageType: 'reference'
    },
    banner: {
      script: 'operations/scripts/generators/components/documentation/generate-component-docs.js',
      purpose: 'Generated component-library MDX pages derived from docs-guide/config/component-registry.json.',
      runWhen: 'Component governance metadata, registry outputs, or published component-library templates change.',
      runCommand: `node operations/scripts/generators/components/documentation/generate-component-docs.js --fix --template-only --category ${category}`
    }
  };

  return normalizeFileContent(
    [
      formatGeneratedPreamble(meta),
      `<Card title="Back to Component Library" icon="arrow-left" href="${buildComponentLibraryRoute(ENGLISH_COMPONENT_LIBRARY_ROUTE)}" arrow>`,
      '  Return to the generated component library landing page.',
      '</Card>',
      '',
      `## ${label}`,
      '',
      description,
      '',
      `This category currently contains **${components.length}** governed export(s).`,
      '',
      '### Decision Tree Excerpt',
      '',
      renderDecisionTree(),
      '',
      '### Summary Table',
      '',
      summaryRows.join('\n'),
      '',
      '## Component Reference',
      '',
      sections.join('\n\n<CustomDivider />\n\n'),
      ''
    ].join('\n')
  );
}

function renderOverviewPage(registry) {
  const rows = [
    '| Category | Purpose | Exports |',
    '| --- | --- | --- |'
  ];

  VALID_CATEGORIES.forEach((category) => {
    rows.push(
      `| [${CATEGORY_LABELS[category]}](${buildComponentLibraryRoute(ENGLISH_COMPONENT_LIBRARY_ROUTE, category)}) | ${escapePipes(registry.categories[category].purpose)} | ${registry.categories[category].count} |`
    );
  });

  const meta = {
    frontmatter: {
      title: 'Component Library Overview',
      sidebarTitle: 'Overview',
      description: 'Generated overview for the governed snippets/components library.',
      pageType: 'overview'
    },
    banner: {
      script: 'operations/scripts/generators/components/documentation/generate-component-docs.js',
      purpose: 'Generated component-library MDX pages derived from docs-guide/config/component-registry.json.',
      runWhen: 'Component governance metadata, registry outputs, or published component-library templates change.',
      runCommand: 'node operations/scripts/generators/components/documentation/generate-component-docs.js --fix --template-only'
    }
  };

  return normalizeFileContent(
    [
      formatGeneratedPreamble(meta),
      '## Governance Snapshot',
      '',
      `The governed component library currently exposes **${registry._meta.componentCount}** named export(s) across five active categories.`,
      '',
      '### Category Matrix',
      '',
      rows.join('\n'),
      '',
      '### Classification Decision Tree',
      '',
      renderDecisionTree(),
      '',
      '### Canonical Sources',
      '',
      '- Registry JSON: [`docs-guide/config/component-registry.json`](/docs-guide/config/component-registry.json)',
      '- Usage map: [`docs-guide/config/component-usage-map.json`](/docs-guide/config/component-usage-map.json)',
      '- Docs-guide index: [`docs-guide/catalog/components-catalog.mdx`](/docs-guide/catalog/components-catalog.mdx)',
      ''
    ].join('\n')
  );
}

function renderLandingPage(registry) {
  const meta = {
    frontmatter: {
      title: 'Component Library',
      sidebarTitle: 'Component Library',
      description: 'Generated component-library landing page backed by the component registry.',
      pageType: 'overview'
    },
    banner: {
      script: 'operations/scripts/generators/components/documentation/generate-component-docs.js',
      purpose: 'Generated component-library MDX pages derived from docs-guide/config/component-registry.json.',
      runWhen: 'Component governance metadata, registry outputs, or published component-library templates change.',
      runCommand: 'node operations/scripts/generators/components/documentation/generate-component-docs.js --fix --template-only'
    }
  };

  return normalizeFileContent(
    [
      formatGeneratedPreamble(meta),
      '<CardGroup cols={2}>',
      ...VALID_CATEGORIES.flatMap((category) => [
        `  <Card title="${CATEGORY_LABELS[category]}" href="${buildComponentLibraryRoute(ENGLISH_COMPONENT_LIBRARY_ROUTE, category)}" icon="puzzle-piece">`,
        `    ${CATEGORY_DESCRIPTIONS[category]} (${registry.categories[category].count} exports)`,
        '  </Card>'
      ]),
      '</CardGroup>',
      '',
      '## What This Page Publishes',
      '',
      '- Category landing pages derived from governed JSDoc metadata.',
      '- Props tables, import paths, and usage summaries from the component registry.',
      '- Route-safe localized scaffolds for `es`, `fr`, and `cn` component-library pages.',
      '',
      '## Decision Tree Excerpt',
      '',
      renderDecisionTree(),
      '',
      '## Start Here',
      '',
      `- Review [Overview](${buildComponentLibraryRoute(ENGLISH_COMPONENT_LIBRARY_ROUTE, 'overview')}) for the governance snapshot and category matrix.`,
      '- Jump to a category page for component-level reference details.',
      ''
    ].join('\n')
  );
}

function insertScaffoldMarker(content) {
  const marker = '{/* codex-i18n: scaffold — translation pending */}';
  if (content.includes(marker)) return content;

  const provenanceMatch = content.match(/\{\/\*\s*codex-i18n:\s*[A-Za-z0-9+/=]+\s*\*\/\}/);
  if (provenanceMatch) {
    const markerIndex = provenanceMatch.index + provenanceMatch[0].length;
    return `${content.slice(0, markerIndex)}\n${marker}\n${content.slice(markerIndex).replace(/^\n*/, '')}`;
  }

  const frontmatterEnd = content.indexOf('\n\n');
  if (frontmatterEnd < 0) {
    return `${marker}\n${content}`;
  }

  return `${content.slice(0, frontmatterEnd + 2)}${marker}\n${content.slice(frontmatterEnd + 2)}`;
}

function getScaffoldGeneratedAt(targetPath, locale, sourcePath, sourceHash) {
  if (!fs.existsSync(targetPath)) {
    return new Date().toISOString();
  }

  try {
    const existing = fs.readFileSync(targetPath, 'utf8');
    const provenance = parseProvenanceComment(existing);
    const expectedSourcePath = normalizeRepoPath(sourcePath);
    const expectedSourceRoute = expectedSourcePath.replace(/\.mdx$/, '');
    if (
      provenance &&
      provenance.provider === 'scaffold' &&
      provenance.language === locale &&
      provenance.sourceHash === sourceHash &&
      provenance.sourcePath === expectedSourcePath &&
      provenance.sourceRoute === expectedSourceRoute &&
      provenance.generatedAt
    ) {
      return provenance.generatedAt;
    }
  } catch (_error) {
    return new Date().toISOString();
  }

  return new Date().toISOString();
}

function buildLocalizedScaffold(locale, targetPath, sourcePath, sourceContent, content) {
  const normalizedSourcePath = normalizeRepoPath(sourcePath);
  const sourceHash = sha256(sourceContent);
  const withProvenance = injectOrReplaceProvenanceComment(
    content,
    buildProvenanceComment({
      sourcePath: normalizedSourcePath,
      sourceRoute: normalizedSourcePath.replace(/\.mdx$/, ''),
      sourceHash,
      language: locale,
      provider: 'scaffold',
      model: '',
      generatedAt: getScaffoldGeneratedAt(targetPath, locale, sourcePath, sourceHash)
    })
  );
  return normalizeFileContent(insertScaffoldMarker(withProvenance));
}

function renderLocaleScaffold(locale, slug, registry) {
  const localeBaseRoute = LOCALE_COMPONENT_LIBRARY_ROUTES[locale];
  const titleMap = {
    overview: 'Component Library Overview',
    'component-library': 'Component Library',
    elements: 'Elements',
    wrappers: 'Wrappers',
    displays: 'Displays',
    scaffolding: 'Scaffolding',
    integrators: 'Integrators',
    config: 'Config'
  };

  const descriptionMap = {
    overview: 'Localized route-safe overview.',
    'component-library': 'Localized route-safe landing page.',
    elements: CATEGORY_DESCRIPTIONS.elements,
    wrappers: CATEGORY_DESCRIPTIONS.wrappers,
    displays: CATEGORY_DESCRIPTIONS.displays,
    scaffolding: CATEGORY_DESCRIPTIONS.scaffolding,
    integrators: CATEGORY_DESCRIPTIONS.integrators,
    config: CATEGORY_DESCRIPTIONS.config
  };

  const meta = {
    frontmatter: {
      title: titleMap[slug],
      sidebarTitle: titleMap[slug],
      description: descriptionMap[slug]
    },
    banner: {
      script: 'operations/scripts/generators/components/documentation/generate-component-docs.js',
      purpose: 'Generated localized component-library route scaffolds derived from docs-guide/config/component-registry.json.',
      runWhen: 'Component governance metadata, registry outputs, or component-library templates change.',
      runCommand:
        slug === 'overview' || slug === 'component-library'
          ? 'node operations/scripts/generators/components/documentation/generate-component-docs.js --fix --template-only'
          : `node operations/scripts/generators/components/documentation/generate-component-docs.js --fix --template-only --category ${slug}`
    }
  };

  if (slug === 'component-library') {
    return normalizeFileContent(
      [
        formatGeneratedPreamble(meta),
        `<Note>Localized prose refresh for \`${locale}\` is pending. This route is kept current so navigation and links continue to resolve.</Note>`,
        '',
        '<CardGroup cols={2}>',
        ...VALID_CATEGORIES.flatMap((category) => [
          `  <Card title="${CATEGORY_LABELS[category]}" href="${buildComponentLibraryRoute(localeBaseRoute, category)}" icon="puzzle-piece">`,
          `    ${registry.categories[category].count} exports`,
          '  </Card>'
        ]),
        '</CardGroup>',
        ''
      ].join('\n')
    );
  }

  if (slug === 'overview') {
    return normalizeFileContent(
      [
        formatGeneratedPreamble(meta),
        `<Note>Localized prose refresh for \`${locale}\` is pending. Use the category pages below; structure now matches the English component-library routes.</Note>`,
        '',
        '| Category | Exports |',
        '| --- | --- |',
        ...VALID_CATEGORIES.map((category) => `| [${CATEGORY_LABELS[category]}](${buildComponentLibraryRoute(localeBaseRoute, category)}) | ${registry.categories[category].count} |`),
        ''
      ].join('\n')
    );
  }

  const components = registry.components.filter((component) => component.category === slug);
  return normalizeFileContent(
    [
      formatGeneratedPreamble(meta),
      `<Note>Localized prose refresh for \`${locale}\` is pending. This page preserves the new route and mirrors the English category inventory at a summary level.</Note>`,
      '',
      `<Card title="Back to Component Library" icon="arrow-left" href="${buildComponentLibraryRoute(localeBaseRoute)}" arrow>`,
      '  Return to the localized component-library landing page.',
      '</Card>',
      '',
      '| Component | Status | Source file |',
      '| --- | --- | --- |',
      ...components.map(
        (component) =>
          `| ${component.name} | \`${component.status}\` | \`/${component.file}\` |`
      ),
      ''
    ].join('\n')
  );
}

function buildOutputPaths(args) {
  const slugs = args.category
    ? [args.category]
    : ['overview', 'component-library', ...VALID_CATEGORIES];

  return slugs;
}

function writeTextFile(filePath, content) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
}

function archiveLegacyScript(writeMode) {
  if (!fs.existsSync(ARCHIVE_SOURCE_PATH)) {
    return { archived: false, stale: false };
  }

  const original = fs.readFileSync(ARCHIVE_SOURCE_PATH, 'utf8');
  const note = [
    '# Archived by generate-component-docs.js',
    '# Replaced by node operations/scripts/generators/components/documentation/generate-component-docs.js --fix --template-only',
    '# Legacy snippet-tree generation retained for historical reference.',
    ''
  ].join('\n');
  const archivedContent = original.startsWith('#!')
    ? original.replace(/\n/, `\n${note}`)
    : `${note}${original}`;

  if (writeMode) {
    fs.mkdirSync(path.dirname(ARCHIVE_TARGET_PATH), { recursive: true });
    fs.writeFileSync(ARCHIVE_TARGET_PATH, archivedContent, 'utf8');
    fs.unlinkSync(ARCHIVE_SOURCE_PATH);
  }

  return { archived: true, stale: true };
}

async function buildOutputs(args) {
  const registry = readRegistry();
  const cache = loadEditorialCache();
  const warnings = [];
  const slugs = buildOutputPaths(args);
  const outputs = new Map();
  const deletions = [];
  const fullRun = !args.category;

  if (slugs.includes('overview')) {
    outputs.set(path.join(ENGLISH_OUTPUT_DIR, 'overview.mdx'), renderOverviewPage(registry));
  }

  if (slugs.includes('component-library')) {
    outputs.set(path.join(ENGLISH_OUTPUT_DIR, 'component-library.mdx'), renderLandingPage(registry));
  }

  for (const category of VALID_CATEGORIES) {
    if (!slugs.includes(category)) continue;
    const components = registry.components.filter((component) => component.category === category);
    outputs.set(
      path.join(ENGLISH_OUTPUT_DIR, `${category}.mdx`),
      await renderCategoryPage(category, components, args, cache, warnings)
    );
  }

  Object.entries(LOCALE_DIRS).forEach(([locale, localeDir]) => {
    slugs.forEach((slug) => {
      const sourcePath = path.join(ENGLISH_OUTPUT_DIR, `${slug}.mdx`);
      const sourceContent = outputs.get(sourcePath);
      if (!sourceContent) return;
      const localized = renderLocaleScaffold(locale, slug, registry);
      const targetPath = path.join(localeDir, `${slug}.mdx`);
      outputs.set(
        targetPath,
        buildLocalizedScaffold(locale, targetPath, sourcePath, sourceContent, localized)
      );
    });
  });

  if (fullRun) {
    [ENGLISH_OUTPUT_DIR, ...Object.values(LOCALE_DIRS)].forEach((dirPath) => {
      LEGACY_COMPONENT_LIBRARY_FILES.forEach((fileName) => {
        deletions.push(path.join(dirPath, fileName));
      });
    });
  }

  return {
    registry,
    outputs,
    deletions,
    warnings,
    cache,
    fullRun
  };
}

function collectStaleOutputs(bundle) {
  const stale = [];

  bundle.outputs.forEach((expected, filePath) => {
    const actual = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
    if (normalizeFileContent(actual) !== expected) {
      stale.push(normalizeRepoPath(filePath));
    }
  });

  bundle.deletions.forEach((filePath) => {
    if (fs.existsSync(filePath)) {
      stale.push(normalizeRepoPath(filePath));
    }
  });

  if (bundle.fullRun && fs.existsSync(ARCHIVE_SOURCE_PATH)) {
    stale.push(normalizeRepoPath(ARCHIVE_SOURCE_PATH));
  }

  return [...new Set(stale)];
}

function applyOutputs(bundle) {
  bundle.outputs.forEach((content, filePath) => {
    writeTextFile(filePath, content);
  });

  bundle.deletions.forEach((filePath) => {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  });

  if (bundle.fullRun) {
    archiveLegacyScript(true);
  }

  if (Object.keys(bundle.cache || {}).length > 0) {
    saveEditorialCache(bundle.cache);
  }
}

async function run(argv = process.argv.slice(2)) {
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

  let bundle;
  try {
    bundle = await buildOutputs(args);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    return 1;
  }

  if (bundle.warnings.length > 0) {
    bundle.warnings.forEach((warning) => console.warn(`⚠️ ${warning}`));
  }

  if (args.mode === 'check') {
    const stale = collectStaleOutputs(bundle);
    if (stale.length > 0) {
      stale.forEach((filePath) => console.error(`Stale component docs output: ${filePath}`));
      console.error('Run: node operations/scripts/generators/components/documentation/generate-component-docs.js --fix --template-only');
      return 1;
    }
    console.log('Component library docs are up to date.');
    return 0;
  }

  if (args.mode === 'dry-run') {
    console.log('Component library generation preview:');
    bundle.outputs.forEach((_content, filePath) => {
      console.log(`  would write ${normalizeRepoPath(filePath)}`);
    });
    bundle.deletions
      .filter((filePath) => fs.existsSync(filePath))
      .forEach((filePath) => console.log(`  would delete ${normalizeRepoPath(filePath)}`));
    if (fs.existsSync(ARCHIVE_SOURCE_PATH)) {
      console.log(`  would archive ${normalizeRepoPath(ARCHIVE_SOURCE_PATH)} -> ${normalizeRepoPath(ARCHIVE_TARGET_PATH)}`);
    }
    return 0;
  }

  applyOutputs(bundle);
  bundle.outputs.forEach((_content, filePath) => {
    console.log(`Wrote ${normalizeRepoPath(filePath)}`);
  });
  bundle.deletions
    .filter((filePath) => !fs.existsSync(filePath))
    .forEach((filePath) => console.log(`Removed ${normalizeRepoPath(filePath)}`));
  if (!fs.existsSync(ARCHIVE_SOURCE_PATH) && fs.existsSync(ARCHIVE_TARGET_PATH)) {
    console.log(`Archived ${normalizeRepoPath(ARCHIVE_TARGET_PATH)}`);
  }
  return 0;
}

if (require.main === module) {
  run()
    .then((code) => process.exit(code))
    .catch((error) => {
      console.error(`❌ ${error.message}`);
      process.exit(1);
    });
}

module.exports = {
  buildOutputs,
  parseArgs,
  renderOverviewPage,
  renderLandingPage,
  renderCategoryPage,
  run
};
