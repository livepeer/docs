#!/usr/bin/env node
/**
 * @script            generate-llms-files
 * @category          generator
 * @purpose           governance:index-management
 * @scope             tools/scripts, docs.json, v2
 * @owner             docs
 * @needs             R-R16, R-R17
 * @purpose-statement LLMs file generator — produces llms.txt and llms-full.txt for AI consumption. Dual-mode: --check / --write.
 * @pipeline          P2, P3, P6
 * @dualmode          --check (enforcer) | --write (generator)
 * @usage             node tools/scripts/generate-llms-files.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const yaml = require('js-yaml');

const BASE_URL = 'https://docs.livepeer.org/';
const DOCS_JSON = 'docs.json';
const OUTPUT_LLM = 'llms.txt';
const OUTPUT_FULL = 'llms-full.txt';

const DOMAIN_RENAME_MAP = {
  '00_home': 'home',
  '010_products': 'solutions',
  '01_about': 'about',
  '02_community': 'community',
  '03_developers': 'developers',
  '04_gateways': 'gateways',
  '05_orchestrators': 'orchestrators',
  '06_lptoken': 'lpt',
  '07_resources': 'resources',
  '09_internal': 'internal',
  deprecated: 'deprecated',
  experimental: 'experimental',
  notes: 'notes'
};

const DOMAIN_REVERSE_MAP = Object.fromEntries(
  Object.entries(DOMAIN_RENAME_MAP).map(([legacy, modern]) => [modern, legacy])
);

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_err) {
    return process.cwd();
  }
}

const REPO_ROOT = getRepoRoot();

function normalizeRoute(route) {
  if (!route) return '';
  const trimmed = String(route).trim();
  if (!trimmed || trimmed === '-') return '';
  return trimmed.replace(/^\//, '').replace(/\.(md|mdx)$/i, '');
}

function isSeparatorValue(value) {
  return !value || String(value).trim().length === 0;
}

function cleanLabel(value) {
  if (!value) return '';
  const trimmed = String(value).trim();
  return trimmed.length ? trimmed : '';
}

function isExcludedRoute(route) {
  const normalized = normalizeRoute(route);
  if (!normalized) return true;
  const legacyMapped = normalized.startsWith('v2/pages/')
    ? mapLegacyRepoPathToModern(normalized)
    : normalized;
  if (legacyMapped.startsWith('v2/internal')) return true;
  if (legacyMapped.startsWith('v2/x-')) return true;
  return false;
}

function mapLegacyRepoPathToModern(repoRelPath) {
  const normalized = normalizeRoute(repoRelPath);
  if (!normalized.startsWith('v2/pages/')) return normalized;
  const rest = normalized.slice('v2/pages/'.length);
  const [legacyDomain, ...tail] = rest.split('/').filter(Boolean);
  const modernDomain = DOMAIN_RENAME_MAP[legacyDomain] || legacyDomain;
  return ['v2', modernDomain, ...tail].filter(Boolean).join('/');
}

function mapModernRepoPathToLegacy(repoRelPath) {
  const normalized = normalizeRoute(repoRelPath);
  if (!normalized.startsWith('v2/') || normalized.startsWith('v2/pages/')) return normalized;
  const rest = normalized.slice('v2/'.length);
  const [modernDomain, ...tail] = rest.split('/').filter(Boolean);
  const legacyDomain = DOMAIN_REVERSE_MAP[modernDomain];
  if (!legacyDomain) return normalized;
  return ['v2', 'pages', legacyDomain, ...tail].filter(Boolean).join('/');
}

function resolvePageFile(route) {
  const base = normalizeRoute(route);
  if (!base) return null;

  const candidates = [];
  const addCandidates = (candidateBase) => {
    if (!candidateBase) return;
    candidates.push(`${candidateBase}.mdx`, `${candidateBase}.md`);
  };

  addCandidates(base);

  if (base.startsWith('v2/pages/')) {
    addCandidates(mapLegacyRepoPathToModern(base));
  } else if (base.startsWith('v2/')) {
    addCandidates(mapModernRepoPathToLegacy(base));
  }

  for (const candidate of candidates) {
    const absPath = path.join(REPO_ROOT, candidate);
    if (fs.existsSync(absPath)) {
      return { relative: candidate, absolute: absPath };
    }
  }

  return null;
}

function extractFrontmatter(raw) {
  if (!raw.startsWith('---')) {
    return { frontmatter: {}, body: raw };
  }

  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) {
    return { frontmatter: {}, body: raw };
  }

  const yamlContent = match[1];
  const body = raw.slice(match[0].length);
  let frontmatter = {};

  try {
    const parsed = yaml.load(yamlContent);
    if (parsed && typeof parsed === 'object') {
      frontmatter = parsed;
    }
  } catch (_err) {
    frontmatter = parseFrontmatterFallback(yamlContent);
  }

  return { frontmatter, body };
}

function parseFrontmatterFallback(yamlContent) {
  const frontmatter = {};
  const lines = yamlContent.split('\n');

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const colonIndex = trimmed.indexOf(':');
    if (colonIndex === -1) continue;
    const key = trimmed.slice(0, colonIndex).trim().replace(/^["']|["']$/g, '');
    let value = trimmed.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
    if (!key) continue;
    frontmatter[key] = value;
  }

  return frontmatter;
}

function nodeToText(node) {
  if (!node) return '';
  if (node.type === 'text' || node.type === 'inlineCode') {
    return String(node.value || '');
  }
  if (!node.children) return '';
  return node.children.map(nodeToText).join('');
}

function cleanWhitespace(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function truncate(value, maxLength) {
  if (!value) return '';
  if (value.length <= maxLength) return value;
  const trimmed = value.slice(0, maxLength - 3).trimEnd();
  return `${trimmed}...`;
}

function deriveTitle(route) {
  const parts = normalizeRoute(route).split('/');
  const slug = parts[parts.length - 1] || '';
  return slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim();
}

function buildSectionLabel(anchorLabel, groupPath) {
  const parts = [];
  if (anchorLabel) parts.push(anchorLabel);
  if (groupPath && groupPath.length) parts.push(...groupPath);
  return parts.join(' / ');
}

function joinUrl(base, route) {
  const normalized = normalizeRoute(route);
  if (!normalized) return base;
  return `${base.replace(/\/$/, '')}/${normalized}`;
}

function collectSectionPages(pages, context, groupPath, sections) {
  const directPages = [];

  for (const entry of pages || []) {
    if (typeof entry === 'string') {
      if (!isSeparatorValue(entry)) directPages.push(entry);
      continue;
    }

    if (entry && typeof entry === 'object') {
      if (entry.group && Array.isArray(entry.pages)) {
        const nextGroupPath = [...groupPath];
        const groupLabel = cleanLabel(entry.group);
        if (groupLabel) nextGroupPath.push(groupLabel);
        collectSectionPages(entry.pages, context, nextGroupPath, sections);
        continue;
      }
    }
  }

  if (directPages.length) {
    const sectionLabel = buildSectionLabel(context.anchorLabel, groupPath);
    sections.push({ label: sectionLabel, routes: directPages });
  }
}

function collectAnchorSections(anchor, tabLabel) {
  const sections = [];
  if (!anchor || typeof anchor !== 'object') return sections;

  const anchorLabel = cleanLabel(anchor.anchor);
  const context = { tabLabel, anchorLabel };

  if (Array.isArray(anchor.pages)) {
    collectSectionPages(anchor.pages, context, [], sections);
  }

  if (Array.isArray(anchor.groups)) {
    for (const group of anchor.groups) {
      if (!group || typeof group !== 'object') continue;
      const groupLabel = cleanLabel(group.group);
      const groupPath = groupLabel ? [groupLabel] : [];
      collectSectionPages(group.pages || [], context, groupPath, sections);
    }
  }

  return sections;
}

function collectTabSections(tab) {
  const sections = [];
  if (!tab || typeof tab !== 'object') return sections;

  if (Array.isArray(tab.anchors)) {
    for (const anchor of tab.anchors) {
      const anchorSections = collectAnchorSections(anchor, tab.tab);
      sections.push(...anchorSections);
    }
  }

  if (Array.isArray(tab.pages)) {
    const anchorLabel = '';
    const context = { tabLabel: tab.tab, anchorLabel };
    collectSectionPages(tab.pages, context, [], sections);
  }

  return sections;
}

async function loadMdxHelpers() {
  const unifiedMod = await import('unified');
  const remarkParseMod = await import('remark-parse');
  const remarkMdxMod = await import('remark-mdx');
  const remarkStringifyMod = await import('remark-stringify');
  const visitMod = await import('unist-util-visit');

  return {
    unified: unifiedMod.unified || unifiedMod.default || unifiedMod,
    remarkParse: remarkParseMod.default || remarkParseMod,
    remarkMdx: remarkMdxMod.default || remarkMdxMod,
    remarkStringify: remarkStringifyMod.default || remarkStringifyMod,
    visit: visitMod.visit || visitMod.default || visitMod,
    EXIT: visitMod.EXIT
  };
}

function stripMdxNodes(node) {
  if (!node || !Array.isArray(node.children)) return;

  const nextChildren = [];
  for (const child of node.children) {
    if (!child) continue;
    const type = child.type;
    if (type === 'mdxjsEsm' || type === 'mdxFlowExpression' || type === 'mdxTextExpression') {
      continue;
    }

    if (type === 'mdxJsxFlowElement' || type === 'mdxJsxTextElement') {
      stripMdxNodes(child);
      if (Array.isArray(child.children) && child.children.length) {
        nextChildren.push(...child.children);
      }
      continue;
    }

    stripMdxNodes(child);
    nextChildren.push(child);
  }

  node.children = nextChildren;
}

function stripEsmLines(value) {
  return String(value || '').replace(/^\s*(import|export)\s.+$/gm, '');
}

async function parseAndCleanMarkdown(body, routeLabel) {
  const { unified, remarkParse, remarkMdx, remarkStringify, visit, EXIT } = await loadMdxHelpers();
  const cleanedBody = stripEsmLines(body);
  let tree;

  try {
    tree = unified().use(remarkParse).use(remarkMdx).parse(cleanedBody);
  } catch (err) {
    console.warn(`MDX parse failed for ${routeLabel || 'unknown page'}, falling back to markdown parser.`);
    tree = unified().use(remarkParse).parse(cleanedBody);
  }
  stripMdxNodes(tree);

  let firstParagraph = '';
  let firstHeading = '';

  if (typeof visit === 'function') {
    visit(tree, 'heading', (node) => {
      if (node.depth === 1 && !firstHeading) {
        firstHeading = cleanWhitespace(nodeToText(node));
        return EXIT;
      }
      return undefined;
    });

    visit(tree, 'paragraph', (node) => {
      if (!firstParagraph) {
        const text = cleanWhitespace(nodeToText(node));
        if (text) {
          firstParagraph = text;
          return EXIT;
        }
      }
      return undefined;
    });
  }

  const markdown = unified()
    .use(remarkStringify, { fences: true, listItemIndent: 'one' })
    .stringify(tree)
    .trim();

  return { markdown, firstHeading, firstParagraph };
}

async function buildOutputs() {
  const docsJsonPath = path.join(REPO_ROOT, DOCS_JSON);
  const docsJson = JSON.parse(fs.readFileSync(docsJsonPath, 'utf8'));
  const siteName = docsJson.name || 'Livepeer Docs';

  const v2Version = (docsJson.navigation?.versions || []).find((version) => version.version === 'v2');
  if (!v2Version) {
    throw new Error('Could not find v2 navigation in docs.json.');
  }

  const language = (v2Version.languages || []).find((lang) => lang.language === 'en');
  if (!language) {
    throw new Error('Could not find English language config for v2 in docs.json.');
  }

  const tabs = Array.isArray(language.tabs) ? language.tabs : [];
  const outputLines = [`# ${siteName}`, ''];
  const fullBlocks = [];
  const missingRoutes = new Set();
  const pageCache = new Map();

  for (const tab of tabs) {
    if (tab.hidden) continue;
    const tabLabel = cleanLabel(tab.tab || tab.dropdown || tab.anchor || 'Docs');
    if (!tabLabel) continue;

    const sections = collectTabSections(tab);
    outputLines.push(`## ${tabLabel}`, '');

    for (const section of sections) {
      const routes = section.routes || [];
      const filteredRoutes = routes
        .map((route) => normalizeRoute(route))
        .filter((route) => route && !isExcludedRoute(route));

      if (!filteredRoutes.length) continue;

      const sectionLabel = cleanLabel(section.label);
      if (sectionLabel) {
        outputLines.push(`### ${sectionLabel}`, '');
      }

      for (const route of filteredRoutes) {
        if (isExcludedRoute(route)) continue;
        const pageData = await getPageData(route, pageCache, missingRoutes);
        if (!pageData) continue;

        const description = truncate(cleanWhitespace(pageData.description), 200);
        const descriptionSuffix = description ? `: ${description}` : '';
        outputLines.push(`- [${pageData.title}](${joinUrl(BASE_URL, route)})${descriptionSuffix}`);

        fullBlocks.push(buildFullBlock(route, pageData));
      }

      outputLines.push('');
    }

    outputLines.push('');
  }

  const llmsIndex = outputLines.join('\n').trimEnd() + '\n';
  const llmsFull = fullBlocks.join('\n\n---\n\n').trimEnd() + '\n';

  return { llmsIndex, llmsFull, missingRoutes: Array.from(missingRoutes) };
}

async function getPageData(route, cache, missingRoutes) {
  const fileInfo = resolvePageFile(route);
  if (!fileInfo) {
    missingRoutes.add(route);
    return null;
  }

  if (cache.has(fileInfo.absolute)) {
    return cache.get(fileInfo.absolute);
  }

  const raw = fs.readFileSync(fileInfo.absolute, 'utf8');
  const { frontmatter, body } = extractFrontmatter(raw);
  const { markdown, firstHeading, firstParagraph } = await parseAndCleanMarkdown(body, route);

  let title = cleanWhitespace(frontmatter.title);
  if (!title) title = firstHeading;
  if (!title) title = deriveTitle(route);

  let description = frontmatter.description;
  if (Array.isArray(description)) {
    description = description.join(', ');
  }
  if (!description) description = firstParagraph;
  description = cleanWhitespace(description);

  const pageData = { title, description, markdown };
  cache.set(fileInfo.absolute, pageData);
  return pageData;
}

function buildFullBlock(route, pageData) {
  const lines = [
    `# ${pageData.title}`,
    `URL: ${joinUrl(BASE_URL, route)}`,
    '',
    pageData.markdown || ''
  ];
  return lines.join('\n').trim();
}

function writeFile(fileName, contents) {
  const targetPath = path.join(REPO_ROOT, fileName);
  fs.writeFileSync(targetPath, contents);
}

function readFile(fileName) {
  const targetPath = path.join(REPO_ROOT, fileName);
  if (!fs.existsSync(targetPath)) return null;
  return fs.readFileSync(targetPath, 'utf8');
}

function usage() {
  console.log('Usage: node tools/scripts/generate-llms-files.js --write|--check');
}

async function main() {
  const args = process.argv.slice(2);
  const shouldWrite = args.includes('--write');
  const shouldCheck = args.includes('--check');

  if (!shouldWrite && !shouldCheck) {
    usage();
    process.exit(1);
  }

  const { llmsIndex, llmsFull, missingRoutes } = await buildOutputs();

  if (missingRoutes.length) {
    console.warn('Missing docs pages referenced in docs.json:');
    missingRoutes.forEach((route) => console.warn(`- ${route}`));
  }

  if (shouldWrite) {
    writeFile(OUTPUT_LLM, llmsIndex);
    writeFile(OUTPUT_FULL, llmsFull);
  }

  if (shouldCheck) {
    const existingIndex = readFile(OUTPUT_LLM);
    const existingFull = readFile(OUTPUT_FULL);

    if (existingIndex === null || existingFull === null) {
      console.error('Missing llms.txt or llms-full.txt outputs.');
      process.exit(1);
    }

    const normalize = (value) => String(value || '').trimEnd() + '\n';
    const indexMatches = normalize(existingIndex) === normalize(llmsIndex);
    const fullMatches = normalize(existingFull) === normalize(llmsFull);

    if (!indexMatches || !fullMatches || missingRoutes.length) {
      console.error('llms outputs are stale or incomplete.');
      process.exit(1);
    }
  }

  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
