#!/usr/bin/env node
/**
 * @script            generate-ui-templates
 * @category          generator
 * @purpose           governance:index-management
 * @scope             tools/scripts, docs-guide/catalog, docs-guide/features, snippets/templates, v2/templates, .vscode
 * @owner             docs
 * @needs             R-R16, R-R17
 * @purpose-statement Generates the UI template catalog, template preview routes, and VS Code snippets from canonical template/component sources
 * @pipeline          manual — interactive developer tool, not suited for automated pipelines
 * @dualmode          --check (validator) | --write (generator)
 * @usage             node tools/scripts/generate-ui-templates.js [flags]
 */

const fs = require('fs');
const path = require('path');
const yaml = require('../lib/load-js-yaml');
const {
  buildGeneratedFrontmatterLines,
  buildGeneratedHiddenBannerLines,
  buildGeneratedNoteLines
} = require('../lib/generated-file-banners');

const REPO_ROOT = process.cwd();
const TEMPLATE_ROOT = 'snippets/templates';
const PAGE_TEMPLATE_ROOT = 'snippets/templates/pages';
const BLOCK_TEMPLATE_ROOT = 'snippets/templates/blocks';
const TEMPLATE_README_PATH = 'snippets/templates/README.mdx';
const TEMPLATE_CATALOG_PATH = 'docs-guide/catalog/ui-templates.mdx';
const UI_SYSTEM_PAGE_PATH = 'docs-guide/features/ui-system.mdx';
const TEMPLATE_SNIPPETS_PATH = '.vscode/templates.code-snippets';
const COMPONENT_SNIPPETS_PATH = '.vscode/components.code-snippets';
const BLOCK_PREVIEW_PATH = 'v2/templates/blocks/block-examples.mdx';
const COMPONENT_REGISTRY_PATH = 'docs-guide/component-registry.json';

const UI_SYSTEM_SECTION_START = '[//]: # (AUTO-GENERATED:UI-TEMPLATES:START)';
const UI_SYSTEM_SECTION_END = '[//]: # (AUTO-GENERATED:UI-TEMPLATES:END)';

const CATALOG_DETAILS = {
  script: 'tools/scripts/generate-ui-templates.js',
  purpose: 'UI template catalog, preview routes, and snippet inventory derived from canonical template sources.',
  runWhen: 'Page/block templates or component registry examples change.',
  runCommand: 'node tools/scripts/generate-ui-templates.js --write'
};

const PREVIEW_DETAILS = {
  script: 'tools/scripts/generate-ui-templates.js',
  purpose: 'Direct-route preview pages for UI templates.',
  runWhen: 'Page/block templates change.',
  runCommand: 'node tools/scripts/generate-ui-templates.js --write'
};

const LEGACY_PAGE_PREVIEW_ALIASES = [
  {
    previewRepoPath: 'v2/templates/pages/landing-and-navigation/landing-page-template.mdx',
    previewTitle: 'Landing Page Template',
    title: 'Landing Page Template',
    description: 'Legacy alias preview route that now renders the canonical portal page template.',
    repoPath: 'snippets/templates/pages/landing-and-navigation/portal-page.mdx',
    importPath: '/snippets/templates/pages/landing-and-navigation/portal-page.mdx',
    snippetPrefix: 'template-portal-page',
    baseName: 'landing-page'
  }
];

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function normalizeRepoPath(value) {
  return toPosix(String(value || '')).replace(/^\.\//, '').replace(/^\/+/, '');
}

function ensureDir(repoPath) {
  fs.mkdirSync(path.dirname(path.join(REPO_ROOT, repoPath)), { recursive: true });
}

function readFileSafe(repoPath) {
  try {
    return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
  } catch (_error) {
    return '';
  }
}

function fileExists(repoPath) {
  try {
    return fs.existsSync(path.join(REPO_ROOT, repoPath));
  } catch (_error) {
    return false;
  }
}

function walkMdxFiles(repoPath, out = []) {
  const absolute = path.join(REPO_ROOT, repoPath);
  if (!fs.existsSync(absolute)) return out;
  const entries = fs.readdirSync(absolute, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(absolute, entry.name);
    const relPath = normalizeRepoPath(path.relative(REPO_ROOT, fullPath));
    if (entry.isDirectory()) {
      walkMdxFiles(relPath, out);
      continue;
    }
    if (entry.isFile() && relPath.endsWith('.mdx')) {
      out.push(relPath);
    }
  }

  return out;
}

function splitFrontmatter(raw, repoPath) {
  const source = String(raw || '');
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    throw new Error(`${repoPath}: missing frontmatter block`);
  }

  return {
    frontmatterSource: match[1],
    body: match[2],
    raw: source
  };
}

function loadFrontmatter(frontmatterSource, repoPath) {
  try {
    return yaml.load(frontmatterSource) || {};
  } catch (error) {
    throw new Error(`${repoPath}: invalid frontmatter (${error.message})`);
  }
}

function withTrailingNewline(value) {
  return value.endsWith('\n') ? value : `${value}\n`;
}

function stripLeadingBlankLines(value) {
  return String(value || '').replace(/^\s*\n/, '');
}

function escapeMdTable(value) {
  return String(value || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

function escapeJsxAttribute(value) {
  return String(value || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function sortAlpha(values) {
  return [...values].sort((left, right) => left.localeCompare(right, 'en', { sensitivity: 'base' }));
}

function lowerFirst(value) {
  return value ? `${value.charAt(0).toLowerCase()}${value.slice(1)}` : value;
}

function yamlSingleQuote(value) {
  return `'${String(value || '').replace(/'/g, "''")}'`;
}

function toImportName(value) {
  const normalized = String(value || '')
    .replace(/\.[^.]+$/, '')
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join('');
  return normalized || 'TemplatePreview';
}

function repoPathToRoute(repoPath) {
  let normalized = normalizeRepoPath(repoPath);
  normalized = normalized.replace(/\.(md|mdx)$/i, '');
  normalized = normalized.replace(/\/index$/i, '');
  normalized = normalized.replace(/^v2\//, '');
  return `/${normalized}`;
}

function buildPageSnippetLines(template) {
  const meta = template.frontmatter || {};
  const title = String(meta.pageTitle || `${template.title} Title`).trim();
  const sidebarTitle = String(meta.sidebarTitle || title).trim();
  const pageDescription = String(meta.pageDescription || 'Describe the page intent and the reader outcome.').trim();
  const audience = String(meta.audience || 'developer').trim();
  const pageType = String(meta.pageType || 'overview').trim();
  const purpose = String(meta.purpose || pageType).trim();
  const status = String(meta.status || 'current').trim();
  const lastVerified = String(meta.lastVerified || '2026-03-12').trim();
  const mode = String(meta.mode || '').trim();
  const tag = String(meta.tag || '').trim();
  const keywords = Array.isArray(meta.keywords)
    ? meta.keywords.map((keyword) => String(keyword || '').trim()).filter(Boolean)
    : ['livepeer', pageType];
  const lines = ['---'];

  if (mode) lines.push(`mode: ${mode}`);
  lines.push(`title: ${yamlSingleQuote(title)}`);
  lines.push(`sidebarTitle: ${yamlSingleQuote(sidebarTitle)}`);
  if (tag) lines.push(`tag: ${yamlSingleQuote(tag)}`);
  lines.push(`description: ${yamlSingleQuote(pageDescription)}`);
  lines.push(`audience: ${audience}`);
  lines.push(`pageType: ${pageType}`);
  lines.push(`purpose: ${purpose}`);
  lines.push(`status: ${status}`);
  lines.push(`lastVerified: ${lastVerified}`);
  lines.push('keywords:');
  keywords.forEach((keyword) => {
    lines.push(`  - ${keyword}`);
  });
  lines.push("'og:image': /snippets/assets/site/og-image/fallback.png");
  lines.push("'og:image:alt': Livepeer Docs social preview image");
  lines.push("'og:image:type': image/png");
  lines.push("'og:image:width': 1200");
  lines.push("'og:image:height': 630");
  lines.push('---');
  lines.push('');

  const body = stripLeadingBlankLines(template.body).trimEnd();
  if (!body) return lines;
  return [...lines, ...body.split(/\r?\n/)];
}

function getSnippetBodyLines(template) {
  if (template.kind === 'page') {
    return buildPageSnippetLines(template);
  }

  const source = stripLeadingBlankLines(template.body).trimEnd();
  if (!source) return [''];
  return source.split(/\r?\n/);
}

function collectTemplates(rootPath, kind) {
  const files = walkMdxFiles(rootPath);
  const items = files.map((repoPath) => {
    const raw = readFileSafe(repoPath);
    const { frontmatterSource, body } = splitFrontmatter(raw, repoPath);
    const frontmatter = loadFrontmatter(frontmatterSource, repoPath);
    const relativePath = normalizeRepoPath(path.posix.relative(rootPath, repoPath));
    const relativeDir = normalizeRepoPath(path.posix.dirname(relativePath));
    const baseName = path.posix.basename(repoPath, '.mdx');

    if (!frontmatter.title || !frontmatter.description) {
      throw new Error(`${repoPath}: frontmatter must include title and description`);
    }

    const previewRepoPath = kind === 'page'
      ? normalizeRepoPath(path.posix.join('v2/templates/pages', relativeDir === '.' ? '' : relativeDir, `${baseName}-template.mdx`))
      : BLOCK_PREVIEW_PATH;

    return {
      kind,
      repoPath,
      importPath: `/${repoPath}`,
      relativePath,
      relativeDir: relativeDir === '.' ? '' : relativeDir,
      baseName,
      title: String(frontmatter.title).trim(),
      description: String(frontmatter.description).trim(),
      snippetPrefix: String(frontmatter.snippetPrefix || `template-${baseName}`).trim(),
      snippetLabel: String(frontmatter.snippetLabel || frontmatter.title).trim(),
      previewTitle: String(frontmatter.previewTitle || frontmatter.title).trim(),
      previewRepoPath,
      previewRoute: repoPathToRoute(previewRepoPath),
      frontmatter,
      raw: raw.trimEnd(),
      body
    };
  });

  return items.sort((left, right) => left.relativePath.localeCompare(right.relativePath, 'en', { sensitivity: 'base' }));
}

function buildTree(paths) {
  const root = { name: 'snippets/templates', folders: new Map(), files: new Set() };

  sortAlpha(paths).forEach((repoPath) => {
    const normalized = normalizeRepoPath(repoPath);
    if (!normalized.startsWith(`${TEMPLATE_ROOT}/`)) return;
    const segments = normalized.split('/').slice(2);
    if (segments.length === 0) return;

    let current = root;
    for (let index = 0; index < segments.length - 1; index += 1) {
      const segment = segments[index];
      if (!current.folders.has(segment)) {
        current.folders.set(segment, { name: segment, folders: new Map(), files: new Set() });
      }
      current = current.folders.get(segment);
    }

    current.files.add(segments[segments.length - 1]);
  });

  return root;
}

function renderTreeFolder(node, indent, defaultOpen = false) {
  const attrs = [`name="${escapeJsxAttribute(node.name)}"`];
  if (defaultOpen) attrs.push('defaultOpen');

  const lines = [`${indent}<Tree.Folder ${attrs.join(' ')}>`];
  const folderNames = sortAlpha([...node.folders.keys()]);
  const fileNames = sortAlpha([...node.files]);

  folderNames.forEach((folderName) => {
    lines.push(...renderTreeFolder(node.folders.get(folderName), `${indent}  `, false));
  });

  fileNames.forEach((fileName) => {
    lines.push(`${indent}  <Tree.File name="${escapeJsxAttribute(fileName)}" />`);
  });

  lines.push(`${indent}</Tree.Folder>`);
  return lines;
}

function renderTemplatesTree(paths) {
  const tree = buildTree(paths);
  const lines = ['<Tree>', ...renderTreeFolder(tree, '  ', true), '</Tree>'];
  return lines;
}

function renderTemplateTable(templates, isBlockTable = false) {
  if (templates.length === 0) {
    return ['No templates are defined in this group yet.'];
  }

  const lines = [
    '| Template | Source | Preview | Snippet Prefix | Description |',
    '| --- | --- | --- | --- | --- |'
  ];

  templates.forEach((template) => {
    const previewLabel = isBlockTable ? `[block examples](${template.previewRoute})` : `[view](${template.previewRoute})`;
    lines.push(
      `| ${escapeMdTable(template.title)} | \`${escapeMdTable(template.repoPath)}\` | ${previewLabel} | \`${escapeMdTable(template.snippetPrefix)}\` | ${escapeMdTable(template.description)} |`
    );
  });

  return lines;
}

function renderCatalogContent(pageTemplates, blockTemplates) {
  const templatePaths = [...pageTemplates, ...blockTemplates].map((item) => item.repoPath);
  const lines = [
    ...buildGeneratedFrontmatterLines({
      title: 'UI Templates',
      sidebarTitle: 'UI Templates',
      description: 'Generated catalog of canonical UI page and block templates, preview routes, and authoring snippets.',
      keywords: ['livepeer', 'ui templates', 'templates', 'authoring', 'snippets', 'catalog'],
      keywordsStyle: 'multiline'
    }),
    '',
    ...buildGeneratedHiddenBannerLines(CATALOG_DETAILS),
    '',
    ...buildGeneratedNoteLines(CATALOG_DETAILS),
    '',
    '## Source of Truth',
    '',
    '- Canonical page templates live in `snippets/templates/pages/**`.',
    '- Canonical block templates live in `snippets/templates/blocks/**`.',
    '- Generated VS Code snippets live in `.vscode/templates.code-snippets` and `.vscode/components.code-snippets`.',
    '- Direct preview routes live under `v2/templates/**` and are intentionally excluded from `docs.json` navigation.',
    '',
    '## Source Tree',
    '',
    ...renderTemplatesTree(templatePaths),
    '',
    '## Page Templates',
    '',
    ...renderTemplateTable(pageTemplates, false),
    '',
    '## Block Templates',
    '',
    ...renderTemplateTable(blockTemplates, true),
    '',
    '## Generated Outputs',
    '',
    '- `docs-guide/catalog/ui-templates.mdx`',
    '- `v2/templates/pages/**/<name>-template.mdx`',
    '- `v2/templates/blocks/block-examples.mdx`',
    '- `.vscode/templates.code-snippets`',
    '- `.vscode/components.code-snippets`'
  ];

  return withTrailingNewline(lines.join('\n'));
}

function renderPagePreviewContent(template) {
  const lines = [
    ...buildGeneratedFrontmatterLines({
      title: `${template.previewTitle}`,
      sidebarTitle: template.previewTitle,
      description: `${template.description} Preview route generated from ${template.repoPath}.`,
      pageType: 'overview',
      keywords: ['livepeer', 'template preview', template.baseName]
    }),
    '',
    ...buildGeneratedHiddenBannerLines({
      ...PREVIEW_DETAILS,
      purpose: `Direct-route preview page for ${template.title}.`
    }),
    '',
    ...buildGeneratedNoteLines({
      ...PREVIEW_DETAILS,
      purpose: `Direct-route preview page for ${template.title}.`
    }),
    '',
    `import Template from '${template.importPath}'`,
    '',
    `Source template: \`${template.repoPath}\``,
    '',
    `Snippet prefix: \`${template.snippetPrefix}\``,
    '',
    '<Template />'
  ];

  return withTrailingNewline(lines.join('\n'));
}

function renderBlockPreviewContent(blockTemplates) {
  const lines = [
    ...buildGeneratedFrontmatterLines({
      title: 'Block Examples',
      sidebarTitle: 'Block Examples',
      description: 'Direct-route preview page that renders every canonical block template from snippets/templates/blocks.',
      pageType: 'overview',
      keywords: ['livepeer', 'block templates', 'template preview', 'blocks']
    }),
    '',
    ...buildGeneratedHiddenBannerLines({
      ...PREVIEW_DETAILS,
      purpose: 'Aggregate preview page for canonical block templates.'
    }),
    '',
    ...buildGeneratedNoteLines({
      ...PREVIEW_DETAILS,
      purpose: 'Aggregate preview page for canonical block templates.'
    }),
    ''
  ];

  if (blockTemplates.length === 0) {
    lines.push('No block templates are defined yet. Add `.mdx` files under `snippets/templates/blocks/` and rerun the generator.');
    return withTrailingNewline(lines.join('\n'));
  }

  blockTemplates.forEach((template) => {
    const importName = `${toImportName(template.relativePath)}BlockTemplate`;
    lines.push(`import ${importName} from '${template.importPath}'`);
  });

  lines.push('', '## Preview Surface', '');

  blockTemplates.forEach((template) => {
    const importName = `${toImportName(template.relativePath)}BlockTemplate`;
    lines.push(`### ${template.previewTitle}`);
    lines.push('');
    lines.push(`Source template: \`${template.repoPath}\``);
    lines.push('');
    lines.push(`Snippet prefix: \`${template.snippetPrefix}\``);
    lines.push('');
    lines.push(`<${importName} />`);
    lines.push('');
  });

  return withTrailingNewline(lines.join('\n'));
}

function buildTemplateSnippetsObject(pageTemplates, blockTemplates) {
  const snippets = {};

  [...pageTemplates, ...blockTemplates].forEach((template) => {
    const key = `${template.kind === 'page' ? 'Page' : 'Block'} Template: ${template.title}`;
    snippets[key] = {
      scope: 'mdx,markdown',
      prefix: template.snippetPrefix,
      body: getSnippetBodyLines(template),
      description: template.description
    };
  });

  return snippets;
}

function renderSnippetJson(snippets) {
  return `${JSON.stringify(snippets, null, 2)}\n`;
}

function sanitizeComponentExample(example, componentName) {
  const raw = String(example || '').trim();
  if (!raw) {
    return `${componentName} />`;
  }

  const stripped = raw.replace(/^<+/, '');
  return stripped || `${componentName} />`;
}

function readComponentRegistry() {
  const raw = readFileSafe(COMPONENT_REGISTRY_PATH);
  if (!raw.trim()) {
    throw new Error(`Missing component registry: ${COMPONENT_REGISTRY_PATH}`);
  }
  return JSON.parse(raw);
}

function buildComponentSnippetsObject(registry) {
  const snippets = {};
  const components = Array.isArray(registry.components) ? registry.components : [];
  const activeComponents = components
    .filter((component) => !String(component.deprecated || '').trim())
    .sort((left, right) => String(left.name || '').localeCompare(String(right.name || ''), 'en', { sensitivity: 'base' }));

  activeComponents.forEach((component) => {
    const name = String(component.name || '').trim();
    if (!name) return;
    const example = Array.isArray(component.examples) && component.examples.length > 0 ? component.examples[0] : '';
    const body = sanitizeComponentExample(example, name).split(/\r?\n/);
    const prefixes = [...new Set([name, lowerFirst(name)].filter(Boolean))];

    snippets[name] = {
      scope: 'mdx,markdown',
      prefix: prefixes.length === 1 ? prefixes[0] : prefixes,
      body,
      description: String(component.description || `${name} component snippet.`).trim()
    };
  });

  return snippets;
}

function renderUiSystemGeneratedSection(pageTemplates, blockTemplates) {
  const templatePaths = [...pageTemplates, ...blockTemplates].map((item) => item.repoPath);
  const lines = [
    '<Note>',
    '**Generated section**: This section is synchronized by `tools/scripts/generate-ui-templates.js`. Do not edit the generated block by hand. <br/>',
    '</Note>',
    '',
    '### Overview',
    '',
    '- Canonical page templates live in `snippets/templates/pages/**` and generate one direct preview route each.',
    '- Canonical block templates live in `snippets/templates/blocks/**` and render together on `/templates/blocks/block-examples`.',
    '- Generated authoring snippets live in `.vscode/templates.code-snippets` and `.vscode/components.code-snippets`.',
    '',
    '### Source Tree',
    '',
    ...renderTemplatesTree(templatePaths),
    '',
    '### Page Templates',
    '',
    ...renderTemplateTable(pageTemplates, false),
    '',
    '### Block Templates',
    '',
    ...renderTemplateTable(blockTemplates, true)
  ];

  return lines.join('\n');
}

function renderUiSystemShell() {
  return withTrailingNewline([
    '---',
    "title: 'UI System'",
    "sidebarTitle: 'UI System'",
    "description: 'Internal map of the UI authoring system: components, templates, and generated snippets.'",
    'keywords:',
    '  [',
    "    'livepeer',",
    "    'ui system',",
    "    'templates',",
    "    'components',",
    "    'snippets',",
    '  ]',
    '---',
    '',
    '# UI System',
    '',
    'This page tracks the internal UI authoring system for docs maintainers. It covers the governed component inventory, canonical template sources, and the generated VS Code snippets used to assemble new documentation pages.',
    '',
    '## Components',
    '',
    '- Governed JSX components live in `snippets/components/`.',
    '- The generated component inventory lives in `docs-guide/catalog/components-catalog.mdx`.',
    '- Component snippets are generated from `docs-guide/component-registry.json`.',
    '',
    '## Templates',
    '',
    'The section below is generated from the canonical `snippets/templates/**` source tree.',
    '',
    UI_SYSTEM_SECTION_START,
    UI_SYSTEM_SECTION_END,
    '',
    '## Snippets',
    '',
    '- Generic MDX helpers remain in `.vscode/mdx.code-snippets`.',
    '- Page/block template snippets are generated into `.vscode/templates.code-snippets`.',
    '- Component tag snippets are generated into `.vscode/components.code-snippets`.'
  ].join('\n'));
}

function updateUiSystemPage(pageTemplates, blockTemplates) {
  const generatedSection = renderUiSystemGeneratedSection(pageTemplates, blockTemplates);
  const replacement = `${UI_SYSTEM_SECTION_START}\n${generatedSection}\n${UI_SYSTEM_SECTION_END}`;

  const existing = readFileSafe(UI_SYSTEM_PAGE_PATH);
  const base = existing.trim() ? existing : renderUiSystemShell();

  if (!base.includes(UI_SYSTEM_SECTION_START) || !base.includes(UI_SYSTEM_SECTION_END)) {
    throw new Error(`${UI_SYSTEM_PAGE_PATH}: missing required generated section markers`);
  }

  const pattern = new RegExp(`${UI_SYSTEM_SECTION_START}[\\s\\S]*?${UI_SYSTEM_SECTION_END}`);
  return withTrailingNewline(base.replace(pattern, replacement).trimEnd());
}

function writeIfChanged(repoPath, nextContent, write) {
  const current = readFileSafe(repoPath);
  const changed = current !== nextContent;
  if (changed && write) {
    ensureDir(repoPath);
    fs.writeFileSync(path.join(REPO_ROOT, repoPath), nextContent, 'utf8');
  }
  return { changed, path: repoPath };
}

function parseArgs(argv) {
  const check = argv.includes('--check');
  const write = argv.includes('--write') || !check;
  return { check, write };
}

function buildExpectedOutputs() {
  const pageTemplates = collectTemplates(PAGE_TEMPLATE_ROOT, 'page');
  const blockTemplates = collectTemplates(BLOCK_TEMPLATE_ROOT, 'block');
  const registry = readComponentRegistry();
  const outputs = new Map();

  outputs.set(TEMPLATE_CATALOG_PATH, renderCatalogContent(pageTemplates, blockTemplates));
  outputs.set(UI_SYSTEM_PAGE_PATH, updateUiSystemPage(pageTemplates, blockTemplates));
  outputs.set(TEMPLATE_SNIPPETS_PATH, renderSnippetJson(buildTemplateSnippetsObject(pageTemplates, blockTemplates)));
  outputs.set(COMPONENT_SNIPPETS_PATH, renderSnippetJson(buildComponentSnippetsObject(registry)));
  outputs.set(BLOCK_PREVIEW_PATH, renderBlockPreviewContent(blockTemplates));

  pageTemplates.forEach((template) => {
    outputs.set(template.previewRepoPath, renderPagePreviewContent(template));
  });

  LEGACY_PAGE_PREVIEW_ALIASES.forEach((template) => {
    outputs.set(template.previewRepoPath, renderPagePreviewContent(template));
  });

  return { outputs, pageTemplates, blockTemplates };
}

function removeStalePagePreviews(currentPageTemplates, write) {
  const expected = new Set([
    ...currentPageTemplates.map((template) => template.previewRepoPath),
    ...LEGACY_PAGE_PREVIEW_ALIASES.map((template) => template.previewRepoPath)
  ]);
  const existing = walkMdxFiles('v2/templates/pages');
  const removed = [];

  existing.forEach((repoPath) => {
    if (expected.has(repoPath)) return;
    if (!write) return;
    fs.unlinkSync(path.join(REPO_ROOT, repoPath));
    removed.push(repoPath);
  });

  return removed;
}

function run(options = {}) {
  const { write } = options;
  const { outputs, pageTemplates, blockTemplates } = buildExpectedOutputs();
  const changed = [];

  outputs.forEach((content, repoPath) => {
    const result = writeIfChanged(repoPath, content, write);
    if (result.changed) changed.push(repoPath);
  });

  const removed = removeStalePagePreviews(pageTemplates, write);

  return {
    changed,
    removed,
    pageTemplates,
    blockTemplates,
    passed: changed.length === 0 && removed.length === 0
  };
}

if (require.main === module) {
  try {
    const options = parseArgs(process.argv.slice(2));
    const result = run(options);

    if (options.check) {
      if (result.passed) {
        console.log('UI template artifacts are up to date.');
        process.exit(0);
      }

      console.error('UI template artifacts are out of date. Run `node tools/scripts/generate-ui-templates.js --write`.');
      result.changed.forEach((repoPath) => console.error(`  - update ${repoPath}`));
      result.removed.forEach((repoPath) => console.error(`  - remove stale preview ${repoPath}`));
      process.exit(1);
    }

    if (result.changed.length === 0 && result.removed.length === 0) {
      console.log('No changes. UI template artifacts already current.');
      process.exit(0);
    }

    console.log('Updated UI template artifacts:');
    result.changed.forEach((repoPath) => console.log(`  - ${repoPath}`));
    result.removed.forEach((repoPath) => console.log(`  - removed ${repoPath}`));
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = {
  BLOCK_PREVIEW_PATH,
  COMPONENT_REGISTRY_PATH,
  COMPONENT_SNIPPETS_PATH,
  PAGE_TEMPLATE_ROOT,
  BLOCK_TEMPLATE_ROOT,
  TEMPLATE_CATALOG_PATH,
  TEMPLATE_SNIPPETS_PATH,
  UI_SYSTEM_PAGE_PATH,
  buildComponentSnippetsObject,
  buildExpectedOutputs,
  buildTemplateSnippetsObject,
  collectTemplates,
  renderSnippetJson,
  sanitizeComponentExample,
  run
};
