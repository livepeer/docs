#!/usr/bin/env node
/**
 * @script            docs-index-utils
 * @category          utility
 * @purpose           governance:index-management
 * @scope             tools/lib, tools/scripts, v2
 * @owner             docs
 * @needs             R-R16, R-R17
 * @purpose-statement Shared utilities for docs-index.json generation — path resolution, frontmatter extraction, index merging
 * @pipeline          indirect — library module imported by other scripts, not invoked directly
 * @usage             node tools/lib/docs-index-utils.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const yaml = require('js-yaml');

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

const DIFFICULTY_BEGINNER = ['quickstart', 'getting-started', 'overview', 'intro', 'primer'];
const DIFFICULTY_ADVANCED = ['advanced', 'architecture', 'reference', 'api-reference', 'cli', 'sdk'];

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_err) {
    return process.cwd();
  }
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function normalizeRel(relPath) {
  return toPosix(relPath).replace(/^\.\//, '').replace(/^\//, '');
}

function normalizeDocPathForUrl(relPath) {
  let normalized = normalizeRel(relPath);
  normalized = normalized.replace(/\.(md|mdx)$/i, '');
  normalized = normalized.replace(/\/index$/i, '');
  normalized = normalized.replace(/\/+$/, '');
  return normalized;
}

function mapLegacyRepoPathToModern(repoRelPath) {
  const normalized = normalizeRel(repoRelPath);
  if (!normalized.startsWith('v2/pages/')) return normalized;
  const rest = normalized.slice('v2/pages/'.length);
  const [legacyDomain, ...tail] = rest.split('/').filter(Boolean);
  const modernDomain = DOMAIN_RENAME_MAP[legacyDomain] || legacyDomain;
  return normalizeRel(path.posix.join('v2', modernDomain, ...tail));
}

function mapModernRepoPathToLegacy(repoRelPath) {
  const normalized = normalizeRel(repoRelPath);
  if (!normalized.startsWith('v2/') || normalized.startsWith('v2/pages/')) return normalized;
  const rest = normalized.slice('v2/'.length);
  const [modernDomain, ...tail] = rest.split('/').filter(Boolean);
  const legacyDomain = DOMAIN_REVERSE_MAP[modernDomain];
  if (!legacyDomain) return normalized;
  return normalizeRel(path.posix.join('v2/pages', legacyDomain, ...tail));
}

function resolveDocPathCandidates(pagePath) {
  const normalized = normalizeRel(pagePath);
  const candidates = [];

  function pushVariants(p) {
    candidates.push(`${p}.mdx`);
    candidates.push(`${p}.md`);
    candidates.push(path.posix.join(p, 'index.mdx'));
    candidates.push(path.posix.join(p, 'index.md'));
  }

  pushVariants(normalized);
  const modern = mapLegacyRepoPathToModern(normalized);
  if (modern !== normalized) pushVariants(modern);
  const legacy = mapModernRepoPathToLegacy(normalized);
  if (legacy !== normalized) pushVariants(legacy);

  return [...new Set(candidates.map((candidate) => normalizeRel(candidate)))];
}

function resolveDocPath(pagePath, repoRoot) {
  const root = repoRoot || getRepoRoot();
  const candidates = resolveDocPathCandidates(pagePath);
  for (const candidate of candidates) {
    const absPath = path.join(root, candidate);
    if (fs.existsSync(absPath) && fs.statSync(absPath).isFile()) {
      return candidate;
    }
  }
  return null;
}

function extractFrontmatter(content) {
  const rawContent = String(content || '');
  const match = rawContent.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) {
    return { exists: false, data: null, raw: null, body: rawContent };
  }
  try {
    return {
      exists: true,
      data: yaml.load(match[1]) || {},
      raw: match[1],
      body: rawContent.slice(match[0].length)
    };
  } catch (error) {
    return {
      exists: true,
      data: null,
      raw: match[1],
      error: error.message,
      body: rawContent.slice(match[0].length)
    };
  }
}

function stripCodeFences(lines) {
  const result = [];
  let inFence = false;
  let fenceToken = null;
  for (const line of lines) {
    const fenceMatch = line.match(/^(```|~~~)/);
    if (fenceMatch) {
      const token = fenceMatch[1];
      if (!inFence) {
        inFence = true;
        fenceToken = token;
      } else if (token === fenceToken) {
        inFence = false;
        fenceToken = null;
      }
      continue;
    }
    if (!inFence) result.push(line);
  }
  return result;
}

function extractHeadings(body) {
  const lines = stripCodeFences(String(body || '').split('\n'));
  return lines
    .map((line) => line.match(/^(#{1,6})\s+(.+)$/))
    .filter(Boolean)
    .map((match) => ({ level: match[1].length, text: match[2].trim() }));
}

function extractCodeLanguages(content) {
  const lines = String(content || '').split('\n');
  const languages = new Set();
  let inFence = false;
  let fenceToken = null;

  for (const line of lines) {
    const fenceMatch = line.match(/^(\s*)(```|~~~)([^\s]*)/);
    if (fenceMatch) {
      const token = fenceMatch[2];
      const lang = fenceMatch[3] ? fenceMatch[3].trim() : '';
      if (!inFence) {
        inFence = true;
        fenceToken = token;
        if (lang) languages.add(lang);
      } else if (token === fenceToken) {
        inFence = false;
        fenceToken = null;
      }
    }
  }

  return [...languages];
}

function stripForWordCount(body) {
  return String(body || '')
    .replace(/^import\s.+$/gm, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/~~~[\s\S]*?~~~/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[[^\]]+\]\([^)]+\)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function countWords(text) {
  return String(text || '')
    .split(/\s+/)
    .filter(Boolean).length;
}

function buildGitLastModifiedMap(repoRoot) {
  const root = repoRoot || getRepoRoot();
  const trackedRoots = ['v2/', 'docs-guide/', 'contribute/'];
  try {
    const output = execSync('git log --name-only --format=%cI -- v2 docs-guide contribute', {
      cwd: root,
      encoding: 'utf8',
      maxBuffer: 1024 * 1024 * 10
    });
    const map = new Map();
    let currentDate = null;
    output.split('\n').forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed) return;
      if (/^\d{4}-\d{2}-\d{2}T/.test(trimmed)) {
        currentDate = trimmed;
        return;
      }
      if (!currentDate) return;
      const normalized = toPosix(trimmed);
      if (!trackedRoots.some((prefix) => normalized.startsWith(prefix))) return;
      if (!/\.(md|mdx)$/i.test(normalized)) return;
      if (!map.has(normalized)) {
        map.set(normalized, currentDate);
      }
    });
    return map;
  } catch (_err) {
    return new Map();
  }
}

function getLastVerified(relPath, frontmatter, gitMap, repoRoot) {
  const lastVerified = frontmatter?.lastVerified || frontmatter?.last_verified;
  if (typeof lastVerified === 'string' && lastVerified.trim()) {
    return lastVerified.trim();
  }

  if (gitMap && gitMap.has(relPath)) {
    return gitMap.get(relPath);
  }

  const root = repoRoot || getRepoRoot();
  try {
    const stats = fs.statSync(path.join(root, relPath));
    return stats.mtime.toISOString();
  } catch (_err) {
    return new Date().toISOString();
  }
}

function normalizeToken(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/^-+|-+$/g, '');
}

function coerceStringArray(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.map((item) => String(item));
  if (typeof value === 'string') return [value];
  return [];
}

function derivePathTokens(relPath) {
  let normalized = normalizeRel(relPath);
  normalized = normalized.replace(/^v2\//, '');
  normalized = normalized.replace(/^pages\//, '');
  normalized = normalized.replace(/\.(md|mdx)$/i, '');
  normalized = normalized.replace(/\/index$/i, '');
  const segments = normalized.split('/').filter(Boolean);
  const tokens = [];

  for (let segment of segments) {
    if (/^\d+_/.test(segment)) segment = segment.replace(/^\d+_/, '');
    segment = segment.replace(/_/g, '-');
    if (!segment || segment === 'v2' || segment === 'pages' || segment === 'index') continue;
    tokens.push(segment.toLowerCase());
  }

  return tokens;
}

function deriveTags(frontmatter, relPath, maxTags = 12) {
  const tags = [];
  const existingTags = [
    ...coerceStringArray(frontmatter?.tags),
    ...coerceStringArray(frontmatter?.tag),
    ...coerceStringArray(frontmatter?.keywords)
  ];

  existingTags.forEach((value) => {
    const normalized = normalizeToken(value);
    if (normalized) tags.push(normalized);
  });

  derivePathTokens(relPath).forEach((token) => {
    const normalized = normalizeToken(token);
    if (normalized) tags.push(normalized);
  });

  const deduped = [];
  tags.forEach((token) => {
    if (!deduped.includes(token)) deduped.push(token);
  });

  return deduped.slice(0, maxTags);
}

function deriveEntities(frontmatter, relPath, apiEndpoints = []) {
  const entities = new Set();
  const tokens = derivePathTokens(relPath);
  const tokenSet = new Set(tokens);
  const pathString = tokens.join('/');

  if (tokenSet.has('gateways') || tokenSet.has('gateway') || /gateways/.test(pathString)) {
    entities.add('gateway');
  }
  if (tokenSet.has('orchestrators') || tokenSet.has('orchestrator') || /orchestrator/.test(pathString)) {
    entities.add('orchestrator');
  }
  if (tokenSet.has('developers') || tokenSet.has('developer') || /developers/.test(pathString)) {
    entities.add('developer');
  }
  if (pathString.includes('solutions/livepeer-studio') || tokenSet.has('livepeer-studio')) {
    entities.add('livepeer-studio');
  }
  if (pathString.includes('solutions/streamplace') || tokenSet.has('streamplace')) {
    entities.add('streamplace');
  }
  if (pathString.includes('solutions/daydream') || tokenSet.has('daydream')) {
    entities.add('daydream');
  }
  if (tokenSet.has('lpt') || tokenSet.has('token') || /lpt/.test(pathString)) {
    entities.add('lpt');
  }
  if (tokenSet.has('ai') || tokenSet.has('inference') || /ai/.test(pathString)) {
    entities.add('ai');
  }
  if (tokenSet.has('video') || tokenSet.has('stream') || /video/.test(pathString)) {
    entities.add('video');
  }

  coerceStringArray(frontmatter?.entities).forEach((value) => {
    const normalized = normalizeToken(value);
    if (normalized) entities.add(normalized);
  });

  apiEndpoints.forEach((endpoint) => {
    const match = String(endpoint || '').match(/^\s*\/?([^\/\s]+)/);
    if (match) {
      const normalized = normalizeToken(match[1]);
      if (normalized) entities.add(normalized);
    }
  });

  return [...entities];
}

function deriveDifficulty(relPath) {
  const normalized = derivePathTokens(relPath).join('/');
  if (DIFFICULTY_BEGINNER.some((token) => normalized.includes(token))) return 'beginner';
  if (DIFFICULTY_ADVANCED.some((token) => normalized.includes(token))) return 'advanced';
  return 'intermediate';
}

function extractOpenApiEndpoints(frontmatter) {
  const openapi = frontmatter?.openapi;
  if (!openapi) return [];
  const values = Array.isArray(openapi) ? openapi : [openapi];
  const endpoints = [];

  values.forEach((value) => {
    const text = String(value || '').trim();
    const match = text.match(/^(get|post|put|patch|delete|head|options)\s+(\S+)/i);
    if (match) {
      endpoints.push(`${match[1].toUpperCase()} ${match[2]}`);
    }
  });

  return endpoints;
}

function extractFirstParagraph(body) {
  const stripped = stripCodeFences(String(body || '').split('\n')).join('\n');
  const noImports = stripped.replace(/^import\s+.*$/gm, '').replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  const lines = noImports.split('\n').map((line) => line.trim());
  const paragraphs = [];
  let current = [];

  lines.forEach((line) => {
    if (!line) {
      if (current.length) {
        paragraphs.push(current.join(' '));
        current = [];
      }
      return;
    }
    if (/^#{1,6}\s+/.test(line)) return;
    if (/^</.test(line)) return;
    if (/^```|^~~~/.test(line)) return;
    current.push(line);
  });

  if (current.length) paragraphs.push(current.join(' '));
  return paragraphs.length ? paragraphs[0] : '';
}

function sentenceFromParagraph(paragraph) {
  if (!paragraph) return '';
  const cleaned = paragraph.replace(/\s+/g, ' ').trim();
  const match = cleaned.match(/^(.+?\.)\s/);
  return match ? match[1].trim() : cleaned;
}

function formatInlineArray(values) {
  const safeValues = (values || []).map((value) => String(value));
  const quoted = safeValues.map((value) => `"${value.replace(/"/g, '\\"')}"`);
  return `[${quoted.join(', ')}]`;
}

module.exports = {
  DOMAIN_RENAME_MAP,
  DOMAIN_REVERSE_MAP,
  getRepoRoot,
  toPosix,
  normalizeRel,
  normalizeDocPathForUrl,
  mapLegacyRepoPathToModern,
  mapModernRepoPathToLegacy,
  resolveDocPath,
  resolveDocPathCandidates,
  extractFrontmatter,
  extractHeadings,
  extractCodeLanguages,
  stripForWordCount,
  countWords,
  buildGitLastModifiedMap,
  getLastVerified,
  deriveTags,
  deriveEntities,
  deriveDifficulty,
  extractOpenApiEndpoints,
  derivePathTokens,
  extractFirstParagraph,
  sentenceFromParagraph,
  formatInlineArray
};
