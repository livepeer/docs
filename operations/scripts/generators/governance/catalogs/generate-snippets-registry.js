#!/usr/bin/env node
/**
 * @script      generate-snippets-registry
 * @type        generator
 * @concern     governance
 * @niche       catalogs
 * @purpose     
 * @description Generates the snippets root registry from the live snippets filesystem plus structured folder metadata embedded in snippets/guide.mdx.
 * @mode        generate
 * @pipeline    manual, P3
 * @scope       operations/scripts, snippets/guide.mdx, snippets/snippets-registry.mdx, operations/governance/config/generated-artifacts.json
 * @usage       node operations/scripts/generators/governance/catalogs/generate-snippets-registry.js [--write|--check]
 * @policy      R-R16, R-R17
 */

const fs = require('fs');
const path = require('path');
const {
  buildGeneratedFrontmatterLines,
  buildGeneratedHiddenBannerLines,
  buildGeneratedNoteLines
} = require('../../../../../tools/lib/governance/generated-file-banners');

const REPO_ROOT = process.cwd();
const SNIPPETS_ROOT = 'snippets';
const GUIDE_PATH = 'snippets/guide.mdx';
const OUTPUT_PATH = 'snippets/snippets-registry.mdx';
const SCRIPT_PATH = 'operations/scripts/generators/governance/catalogs/generate-snippets-registry.js';
const EXCLUDED_ROOTS = new Set(['_workspace', 'automations']);
const EXCLUDED_FILE_NAMES = new Set(['.DS_Store']);
const GUIDE_METADATA_START = '{/* SNIPPETS_FOLDER_METADATA:START */}';
const GUIDE_METADATA_END = '{/* SNIPPETS_FOLDER_METADATA:END */}';
const COMPONENT_GOVERNANCE_PATH = '/docs-guide/frameworks/component-framework-canonical';
const COMPONENT_LIBRARY_OVERVIEW_PATH = '/v2/resources/documentation-guide/component-library/overview';

const FRONTMATTER_LINES = buildGeneratedFrontmatterLines({
  title: 'Snippets Registry',
  sidebarTitle: 'Snippets Registry',
  description: 'Generated tree and folder registry for the governed snippets directory.',
  consumer: ['human', 'agent'],
  maintenance: 'generated',
  status: 'active',
  generator: SCRIPT_PATH,
  keywords: ['livepeer', 'snippets', 'registry', 'catalog', 'governance', 'directory inventory'],
  keywordsStyle: 'multiline'
});

function parseArgs(argv) {
  const args = {
    mode: 'write',
    help: false
  };

  let explicitModeCount = 0;
  argv.forEach((token) => {
    if (token === '--help' || token === '-h') {
      args.help = true;
      return;
    }
    if (token === '--write') {
      args.mode = 'write';
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
    throw new Error('Choose only one mode: --write or --check');
  }

  return args;
}

function printHelp() {
  console.log(
    [
      'Usage:',
      `  node ${SCRIPT_PATH} [--write|--check]`,
      '',
      'Modes:',
      '  --write    Generate snippets/snippets-registry.mdx.',
      '  --check    Fail when snippets/snippets-registry.mdx is stale or metadata coverage is invalid.'
    ].join('\n')
  );
}

function normalizeRepoPath(value) {
  return String(value || '').split(path.sep).join('/');
}

function ensureFileExists(repoPath) {
  const fullPath = path.join(REPO_ROOT, repoPath);
  if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isFile()) {
    throw new Error(`Missing required file: ${repoPath}`);
  }
  return fullPath;
}

function readFile(repoPath) {
  return fs.readFileSync(ensureFileExists(repoPath), 'utf8');
}

function normalizeContent(content) {
  return `${String(content || '').trim()}\n`;
}

function compareEntries(a, b) {
  if (a.type !== b.type) return a.type === 'directory' ? -1 : 1;
  return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
}

function shouldExcludeRootChild(name) {
  return EXCLUDED_ROOTS.has(name);
}

function shouldExcludeEntry(name) {
  return EXCLUDED_FILE_NAMES.has(name);
}

function toTreeNode(fullPath, repoPath) {
  const stats = fs.statSync(fullPath);
  if (stats.isDirectory()) {
    const entries = fs
      .readdirSync(fullPath, { withFileTypes: true })
      .filter((entry) => !shouldExcludeEntry(entry.name))
      .filter((entry) => !(repoPath === SNIPPETS_ROOT && shouldExcludeRootChild(entry.name)))
      .map((entry) =>
        toTreeNode(path.join(fullPath, entry.name), normalizeRepoPath(path.join(repoPath, entry.name)))
      )
      .sort(compareEntries);

    return {
      type: 'directory',
      name: path.basename(repoPath),
      path: repoPath,
      children: entries
    };
  }

  return {
    type: 'file',
    name: path.basename(repoPath),
    path: repoPath
  };
}

function collectSnippetsTree() {
  const fullPath = path.join(REPO_ROOT, SNIPPETS_ROOT);
  if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isDirectory()) {
    throw new Error(`Missing required directory: ${SNIPPETS_ROOT}`);
  }
  return toTreeNode(fullPath, SNIPPETS_ROOT);
}

function collectFolderPaths(node, out = []) {
  if (node.type !== 'directory') return out;
  out.push(node.path);
  node.children.forEach((child) => collectFolderPaths(child, out));
  return out;
}

function renderTreeNode(node, depth = 0) {
  const indent = '  '.repeat(depth);
  if (node.type === 'directory') {
    const defaultOpen = depth === 0 ? ' defaultOpen' : '';
    const lines = [`${indent}<Tree.Folder name="${node.name}"${defaultOpen}>`];
    node.children.forEach((child) => {
      lines.push(renderTreeNode(child, depth + 1));
    });
    lines.push(`${indent}</Tree.Folder>`);
    return lines.join('\n');
  }

  return `${indent}<Tree.File name="${node.name}" />`;
}

function parseGuideMetadata(rawGuide) {
  const source = String(rawGuide || '');
  const startIndex = source.indexOf(GUIDE_METADATA_START);
  const endIndex = source.indexOf(GUIDE_METADATA_END);
  if (startIndex < 0 || endIndex < 0 || endIndex <= startIndex) {
    throw new Error(`Guide metadata block not found in ${GUIDE_PATH}`);
  }

  const block = source.slice(startIndex + GUIDE_METADATA_START.length, endIndex).trim();
  const match = block.match(/```json\s*([\s\S]*?)```/);
  if (!match) {
    throw new Error(`Guide metadata block in ${GUIDE_PATH} must contain a fenced JSON object`);
  }

  let parsed = null;
  try {
    parsed = JSON.parse(match[1]);
  } catch (error) {
    throw new Error(`Unable to parse guide metadata JSON in ${GUIDE_PATH}: ${error.message}`);
  }

  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error(`Guide metadata in ${GUIDE_PATH} must be a JSON object`);
  }

  if (!parsed.folders || typeof parsed.folders !== 'object' || Array.isArray(parsed.folders)) {
    throw new Error(`Guide metadata in ${GUIDE_PATH} must expose a top-level "folders" object`);
  }

  const folders = {};
  Object.entries(parsed.folders).forEach(([repoPath, description]) => {
    const normalizedPath = normalizeRepoPath(repoPath).trim();
    const normalizedDescription = String(description || '').replace(/\s+/g, ' ').trim();
    if (!normalizedPath) {
      throw new Error(`Guide metadata contains an empty folder path key in ${GUIDE_PATH}`);
    }
    if (!normalizedDescription) {
      throw new Error(`Guide metadata entry for ${normalizedPath} must have a non-empty description`);
    }
    folders[normalizedPath] = normalizedDescription;
  });

  return folders;
}

function getComponentDelegatedDescription(repoPath) {
  const normalizedPath = normalizeRepoPath(repoPath);
  if (normalizedPath === 'snippets/components') {
    return `Governed component library root. Placement, status, and authoring rules are delegated to \`${COMPONENT_GOVERNANCE_PATH}\` and the published component library at \`${COMPONENT_LIBRARY_OVERVIEW_PATH}\`.`;
  }

  const relative = normalizedPath.slice('snippets/components/'.length);
  const segments = relative.split('/').filter(Boolean);
  const leaf = segments[segments.length - 1] || 'components';
  const category = segments[0] || 'components';

  if (segments.length === 1) {
    return `Top-level \`${leaf}\` subtree inside the governed components library. Follow component governance in \`${COMPONENT_GOVERNANCE_PATH}\` instead of defining local placement rules here.`;
  }

  if (leaf === 'examples') {
    return `Examples-only subtree for the governed \`${category}\` components. Usage and approval rules stay delegated to \`${COMPONENT_GOVERNANCE_PATH}\` and the component-library docs.`;
  }

  if (leaf === 'x-archive') {
    return `Archive/staging subtree inside the governed components library. Component retention and retirement decisions remain delegated to component governance.`;
  }

  return `Subgroup inside the governed \`${category}\` components subtree. Placement and lifecycle rules remain delegated to \`${COMPONENT_GOVERNANCE_PATH}\` and the published component library.`;
}

function isDelegatedComponentPath(repoPath) {
  return normalizeRepoPath(repoPath) === 'snippets/components' || normalizeRepoPath(repoPath).startsWith('snippets/components/');
}

function resolveFolderDescriptions(folderPaths, metadata) {
  const descriptions = {};
  const missing = [];

  folderPaths.forEach((repoPath) => {
    if (isDelegatedComponentPath(repoPath)) {
      descriptions[repoPath] = getComponentDelegatedDescription(repoPath);
      return;
    }

    if (!metadata[repoPath]) {
      missing.push(repoPath);
      return;
    }

    descriptions[repoPath] = metadata[repoPath];
  });

  const extra = Object.keys(metadata)
    .filter((repoPath) => !isDelegatedComponentPath(repoPath))
    .filter((repoPath) => !folderPaths.includes(repoPath))
    .sort();

  if (missing.length > 0) {
    throw new Error(
      `Guide metadata is missing folder descriptions for: ${missing.sort().join(', ')}`
    );
  }

  if (extra.length > 0) {
    throw new Error(
      `Guide metadata contains folder descriptions for paths that do not exist: ${extra.join(', ')}`
    );
  }

  return descriptions;
}

function renderDescriptionTable(folderPaths, descriptions) {
  const lines = ['| Folder | Purpose |', '| --- | --- |'];
  folderPaths
    .slice()
    .sort((a, b) => a.localeCompare(b))
    .forEach((repoPath) => {
      const description = String(descriptions[repoPath] || '')
        .replace(/\|/g, '\\|')
        .replace(/\r?\n/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      lines.push(`| \`${repoPath}/\` | ${description} |`);
    });
  return lines.join('\n');
}

function buildRegistryContent() {
  const guideContent = readFile(GUIDE_PATH);
  const metadata = parseGuideMetadata(guideContent);
  const tree = collectSnippetsTree();
  const folderPaths = collectFolderPaths(tree);
  const descriptions = resolveFolderDescriptions(folderPaths, metadata);
  const bannerDetails = {
    script: SCRIPT_PATH,
    purpose: 'Full snippets tree inventory generated from the live filesystem plus guide-owned folder descriptions.',
    runWhen: 'Snippets folders move, new snippets folders are added, or snippets governance descriptions change.',
    runCommand: `node ${SCRIPT_PATH} --write`
  };

  const lines = [];
  FRONTMATTER_LINES.forEach((line) => lines.push(line));
  lines.push('');
  buildGeneratedHiddenBannerLines(bannerDetails).forEach((line) => lines.push(line));
  lines.push('');
  buildGeneratedNoteLines(bannerDetails).forEach((line) => lines.push(line));
  lines.push('');
  lines.push('## Scope');
  lines.push('');
  lines.push('- Full live tree for `snippets/`, excluding `snippets/_workspace/` and `snippets/automations/`.');
  lines.push('- Folder descriptions sourced from `snippets/guide.mdx` metadata.');
  lines.push('- `snippets/components/**` remains governed separately and is described here by delegated pointers only.');
  lines.push('');
  lines.push('## Repo Tree');
  lines.push('');
  lines.push('<Tree>');
  lines.push(renderTreeNode(tree, 1));
  lines.push('</Tree>');
  lines.push('');
  lines.push('## Folder Descriptions');
  lines.push('');
  lines.push(renderDescriptionTable(folderPaths, descriptions));
  lines.push('');

  return normalizeContent(lines.join('\n'));
}

function writeOutput(content) {
  const fullPath = path.join(REPO_ROOT, OUTPUT_PATH);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
}

function run(argv = process.argv.slice(2)) {
  const args = parseArgs(argv);
  if (args.help) {
    printHelp();
    return { ok: true, mode: 'help' };
  }

  const nextContent = buildRegistryContent();
  const fullOutputPath = path.join(REPO_ROOT, OUTPUT_PATH);
  const currentContent = fs.existsSync(fullOutputPath) ? normalizeContent(fs.readFileSync(fullOutputPath, 'utf8')) : '';

  if (args.mode === 'check') {
    if (currentContent !== nextContent) {
      throw new Error(`Generated file is stale: ${OUTPUT_PATH}. Run: node ${SCRIPT_PATH} --write`);
    }
    return { ok: true, mode: 'check' };
  }

  writeOutput(nextContent);
  return { ok: true, mode: 'write' };
}

if (require.main === module) {
  try {
    const result = run(process.argv.slice(2));
    if (result.mode === 'write') {
      console.log(`Updated ${OUTPUT_PATH}`);
    } else if (result.mode === 'check') {
      console.log(`Up to date: ${OUTPUT_PATH}`);
    }
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  GUIDE_PATH,
  OUTPUT_PATH,
  SCRIPT_PATH,
  collectFolderPaths,
  collectSnippetsTree,
  buildRegistryContent,
  getComponentDelegatedDescription,
  isDelegatedComponentPath,
  normalizeRepoPath,
  parseGuideMetadata,
  resolveFolderDescriptions,
  run
};
