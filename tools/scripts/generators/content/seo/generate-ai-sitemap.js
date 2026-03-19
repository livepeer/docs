#!/usr/bin/env node
/**
 * @script            generate-ai-sitemap
 * @category          generator
 * @purpose           governance:index-management
 * @scope             tools/scripts, docs.json, v2
 * @owner             docs
 * @needs             R-R16, R-R17
 * @purpose-statement AI sitemap generator — produces AI-optimised sitemap files. Dual-mode: --check (enforcer) / --write (generator).
 * @pipeline          P2, P3, P6
 * @dualmode          --check (enforcer) | --write (generator)
 * @usage             node tools/scripts/generate-ai-sitemap.js [flags]
 */

const fs = require('fs');
const path = require('path');
const {
  getRepoRoot,
  normalizeRel,
  normalizeDocPathForUrl,
  mapLegacyRepoPathToModern,
  resolveDocPath,
  extractFrontmatter,
  stripForWordCount,
  countWords,
  buildGitLastModifiedMap,
  getLastVerified
} = require('../lib/docs-index-utils');

const BASE_URL = 'https://docs.livepeer.org';
const DOCS_JSON = 'docs.json';
const OUTPUT_FILE = 'sitemap-ai.xml';
const AI_NAMESPACE = 'https://docs.livepeer.org/schemas/ai-sitemap/1.0';

const REPO_ROOT = getRepoRoot();

function usage() {
  console.log('Usage: node tools/scripts/generate-ai-sitemap.js --write|--check');
}

function normalizeRoute(route) {
  if (!route) return '';
  const trimmed = String(route).trim();
  if (!trimmed || trimmed === '-') return '';
  return trimmed.replace(/^\//, '').replace(/\.(md|mdx)$/i, '');
}

function isSeparatorValue(value) {
  return !value || String(value).trim().length === 0;
}

function isExcludedRoute(route) {
  const normalized = normalizeRoute(route);
  if (!normalized) return true;
  const legacyMapped = normalized.startsWith('v2/pages/')
    ? mapLegacyRepoPathToModern(normalized)
    : normalized;
  if (!legacyMapped.startsWith('v2/')) return true;
  if (legacyMapped.startsWith('v2/internal')) return true;
  if (legacyMapped.startsWith('v2/x-')) return true;
  return false;
}

function collectPagesFromList(pages, routes) {
  for (const entry of pages || []) {
    if (typeof entry === 'string') {
      if (!isSeparatorValue(entry)) routes.push(entry);
      continue;
    }

    if (entry && typeof entry === 'object') {
      if (Array.isArray(entry.pages)) {
        collectPagesFromList(entry.pages, routes);
      }
    }
  }
}

function collectRoutesFromAnchor(anchor, routes) {
  if (!anchor || typeof anchor !== 'object') return;
  if (Array.isArray(anchor.pages)) {
    collectPagesFromList(anchor.pages, routes);
  }
  if (Array.isArray(anchor.groups)) {
    for (const group of anchor.groups) {
      if (!group || typeof group !== 'object') continue;
      if (Array.isArray(group.pages)) {
        collectPagesFromList(group.pages, routes);
      }
    }
  }
}

function collectRoutesFromTab(tab) {
  const routes = [];
  if (!tab || typeof tab !== 'object') return routes;
  if (tab.hidden) return routes;

  if (Array.isArray(tab.anchors)) {
    for (const anchor of tab.anchors) {
      collectRoutesFromAnchor(anchor, routes);
    }
  }

  if (Array.isArray(tab.pages)) {
    collectPagesFromList(tab.pages, routes);
  }

  return routes;
}

function collectV2Routes(docsJson) {
  const v2Version = (docsJson.navigation?.versions || []).find((version) => version.version === 'v2');
  if (!v2Version) {
    throw new Error('Could not find v2 navigation in docs.json.');
  }

  const language = (v2Version.languages || []).find((lang) => lang.language === 'en') || v2Version.languages?.[0];
  if (!language) {
    throw new Error('Could not find language config for v2 in docs.json.');
  }

  const tabs = Array.isArray(language.tabs) ? language.tabs : [];
  const routes = [];

  for (const tab of tabs) {
    routes.push(...collectRoutesFromTab(tab));
  }

  return routes;
}

function xmlEscape(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function normalizeForUrl(route) {
  const normalized = normalizeRoute(route);
  if (!normalized) return '';
  const mapped = normalized.startsWith('v2/pages/')
    ? mapLegacyRepoPathToModern(normalized)
    : normalized;
  if (!mapped.startsWith('v2/')) return '';
  return normalizeDocPathForUrl(mapped);
}

function joinUrl(route) {
  const normalized = normalizeForUrl(route);
  if (!normalized) return '';
  return `${BASE_URL.replace(/\/$/, '')}/${normalized}`;
}

function getSection(route) {
  const normalized = normalizeForUrl(route);
  if (!normalized.startsWith('v2/')) return '';
  const rest = normalized.slice('v2/'.length);
  return rest.split('/').filter(Boolean)[0] || '';
}

function coerceStringArray(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.map((item) => String(item));
  if (typeof value === 'string') return [value];
  return [];
}

function collectFrontmatterList(frontmatter, keys) {
  const items = [];
  keys.forEach((key) => {
    coerceStringArray(frontmatter?.[key]).forEach((item) => {
      const trimmed = String(item || '').trim();
      if (trimmed) items.push(trimmed);
    });
  });
  const deduped = [];
  items.forEach((item) => {
    if (!deduped.includes(item)) deduped.push(item);
  });
  return deduped;
}

function getLastModified(relPath, gitMap) {
  if (gitMap && gitMap.has(relPath)) {
    return gitMap.get(relPath);
  }
  try {
    const stats = fs.statSync(path.join(REPO_ROOT, relPath));
    return stats.mtime.toISOString();
  } catch (_err) {
    return new Date().toISOString();
  }
}

function buildEntries() {
  const docsJsonPath = path.join(REPO_ROOT, DOCS_JSON);
  const docsJson = JSON.parse(fs.readFileSync(docsJsonPath, 'utf8'));
  const rawRoutes = collectV2Routes(docsJson);
  const gitMap = buildGitLastModifiedMap(REPO_ROOT);
  const missingRoutes = new Set();
  const entriesMap = new Map();

  rawRoutes.forEach((route) => {
    if (isExcludedRoute(route)) return;
    const normalized = normalizeRoute(route);
    if (!normalized) return;
    const mapped = normalized.startsWith('v2/pages/')
      ? mapLegacyRepoPathToModern(normalized)
      : normalized;
    if (!mapped.startsWith('v2/')) return;

    const resolvedPath = resolveDocPath(mapped, REPO_ROOT);
    if (!resolvedPath) {
      missingRoutes.add(normalized);
      return;
    }

    const absPath = path.join(REPO_ROOT, resolvedPath);
    const content = fs.readFileSync(absPath, 'utf8');
    const frontmatter = extractFrontmatter(content);
    const body = frontmatter.body || content;

    const loc = joinUrl(mapped);
    if (!loc) return;

    const wordCount = countWords(stripForWordCount(body));
    const lastmod = getLastModified(resolvedPath, gitMap);
    const lastVerified = getLastVerified(resolvedPath, frontmatter.data || {}, gitMap, REPO_ROOT);
    const section = getSection(mapped);
    const tags = collectFrontmatterList(frontmatter.data || {}, ['tags', 'tag', 'keywords']);
    const entities = collectFrontmatterList(frontmatter.data || {}, ['entities']);
    const difficulty = typeof frontmatter.data?.difficulty === 'string' ? frontmatter.data.difficulty.trim() : '';

    if (!entriesMap.has(loc)) {
      entriesMap.set(loc, {
        loc,
        lastmod,
        section,
        wordCount,
        lastVerified,
        tags,
        entities,
        difficulty
      });
    }
  });

  const entries = Array.from(entriesMap.values()).sort((a, b) => a.loc.localeCompare(b.loc));
  return { entries, missingRoutes: Array.from(missingRoutes) };
}

function buildXml({ entries }) {
  const lines = [];
  lines.push('<?xml version="1.0" encoding="UTF-8"?>');
  lines.push(
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:ai="${xmlEscape(AI_NAMESPACE)}">`
  );

  entries.forEach((entry) => {
    lines.push('  <url>');
    lines.push(`    <loc>${xmlEscape(entry.loc)}</loc>`);
    if (entry.lastmod) {
      lines.push(`    <lastmod>${xmlEscape(entry.lastmod)}</lastmod>`);
    }
    if (entry.section) {
      lines.push(`    <ai:section>${xmlEscape(entry.section)}</ai:section>`);
    }
    lines.push(`    <ai:wordCount>${entry.wordCount}</ai:wordCount>`);
    if (entry.lastVerified) {
      lines.push(`    <ai:lastVerified>${xmlEscape(entry.lastVerified)}</ai:lastVerified>`);
    }
    if (entry.tags && entry.tags.length) {
      lines.push(`    <ai:tags>${xmlEscape(entry.tags.join(', '))}</ai:tags>`);
    }
    if (entry.difficulty) {
      lines.push(`    <ai:difficulty>${xmlEscape(entry.difficulty)}</ai:difficulty>`);
    }
    if (entry.entities && entry.entities.length) {
      lines.push(`    <ai:entities>${xmlEscape(entry.entities.join(', '))}</ai:entities>`);
    }
    lines.push('  </url>');
  });

  lines.push('</urlset>');
  return lines.join('\n').trimEnd() + '\n';
}

function readFile(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, 'utf8');
}

function main() {
  const args = process.argv.slice(2);
  const shouldWrite = args.includes('--write');
  const shouldCheck = args.includes('--check');

  if (!shouldWrite && !shouldCheck) {
    usage();
    process.exit(1);
  }

  const result = buildEntries();
  const xml = buildXml(result);

  if (result.missingRoutes.length) {
    console.warn('Missing docs pages referenced in docs.json:');
    result.missingRoutes.forEach((route) => console.warn(`- ${route}`));
  }

  const outputPath = path.join(REPO_ROOT, OUTPUT_FILE);

  if (shouldWrite) {
    fs.writeFileSync(outputPath, xml, 'utf8');
  }

  if (shouldCheck) {
    const existing = readFile(outputPath);
    if (existing === null) {
      console.error('Missing sitemap-ai.xml output.');
      process.exit(1);
    }

    const normalize = (value) => String(value || '').trimEnd() + '\n';
    const matches = normalize(existing) === normalize(xml);
    if (!matches || result.missingRoutes.length) {
      console.error('sitemap-ai.xml is stale or incomplete.');
      process.exit(1);
    }
  }

  process.exit(0);
}

main();
