#!/usr/bin/env node
/**
 * @script            audit-v1-to-v2-mapping
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tools/scripts, v1, v2, docs.json, tasks/reports
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Diagnostic — maps v1 page URLs to v2 equivalents for migration tracking
 * @pipeline          manual — diagnostic/investigation tool, run on-demand only
 * @dualmode          dual-mode (document flags)
 * @usage             node tools/scripts/audit-v1-to-v2-mapping.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { extractFrontmatter } = require('../../tests/utils/mdx-parser');

const DEFAULT_OUT_DIR = 'tasks/reports/v1-v2-mapping-audit';
const DEFAULT_CANDIDATE_COUNT = 8;
const DEFAULT_ADJUDICATE_THRESHOLD = 0.8;
const DEFAULT_SEED =
  'tools/config/v1-v2-mapping-seeds/v1-to-v2-gap-fill-matrix.csv';

const TARGET_FILES = {
  csv: 'v1-v2-page-mapping-audit.csv',
  json: 'v1-v2-page-mapping-audit.json',
  report: 'v1-v2-page-mapping-audit-report.md',
  queue: 'v1-v2-page-mapping-adjudication-queue.json',
  meta: 'v1-v2-page-mapping-run-metadata.json'
};

const V1_STATE_VALUES = new Set([
  'active',
  'legacy',
  'deprecated',
  'beta_experimental',
  'superseded',
  'orphan_not_in_nav',
  'unknown_needs_review'
]);

const TARGET_TYPE_VALUES = new Set([
  'existing_v2_page',
  'existing_v2_hub_merge',
  'new_page_in_existing_group',
  'new_group_in_existing_tab',
  'split_across_multiple_v2_pages',
  'deprecated_or_superseded'
]);

const COVERAGE_VALUES = new Set([
  'adequately_covered',
  'partially_covered',
  'minimally_covered',
  'not_covered',
  'superseded_obsolete'
]);

const ACTION_VALUES = new Set([
  'keep_as_is',
  'add_section_to_existing_page',
  'create_new_page',
  'create_new_group',
  'merge_and_redirect',
  'deprecate_no_new_content'
]);

const ADJUDICATION_VALUES = new Set([
  'not_required',
  'queued',
  'confirmed',
  'revised',
  'needs_manual_review'
]);

const STOPWORDS = new Set([
  'a',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'by',
  'for',
  'from',
  'how',
  'in',
  'is',
  'it',
  'of',
  'on',
  'or',
  'that',
  'the',
  'this',
  'to',
  'v1',
  'v2',
  'with',
  'your',
  'you',
  'overview',
  'readme',
  'index',
  'livepeer',
  'docs',
  'documentation'
]);

const LEGACY_DOMAIN_MAP = {
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

const CANONICAL_ROUTE_MAP = {
  'v2/pages/03_developers/building-on-livepeer/index': ['v2/pages/03_developers/developer-portal'],
  'v2/resources/redirect': ['v2/resources/resources-portal'],
  'v2/pages/08_help/redirect': ['v2/pages/08_help/README', 'v2/resources/resources-portal'],
  'v2/pages/08_help/README': ['v2/resources/resources-portal'],
  'v2/pages/010_streamplace/introduction/streamplace-funding-model': [
    'v2/pages/010_streamplace/introduction/streamplace-funding-model'
  ],
  'v2/resources/changelog/migration-guides': ['v2/resources/changelog/migration-guide'],
  'v2/pages/04_gateways/run-a-gateway/quickstart-a-gateway': [
    'v2/pages/04_gateways/quickstart/gateway-setup'
  ],
  'v2/pages/04_gateways/run-a-gateway/get-AI-to-setup-the-gateway': [
    'v2/pages/04_gateways/quickstart/AI-prompt'
  ],
  'v2/pages/04_gateways/using-gateways/gateway-providers/streamplace': [
    'v2/pages/010_streamplace/overview'
  ],
  'v2/pages/04_gateways/run-a-gateway/test/test-gateway': [
    'v2/pages/04_gateways/quickstart/gateway-setup'
  ],
  'v2/pages/04_gateways/run-a-gateway/test/publish-content': [
    'v2/pages/04_gateways/quickstart/gateway-setup'
  ],
  'v2/pages/04_gateways/run-a-gateway/test/playback-content': [
    'v2/pages/04_gateways/quickstart/gateway-setup'
  ],
  'v2/pages/04_gateways/references/video-flags': ['v2/pages/04_gateways/references/configuration-flags'],
  'v2/orchestrators/setting-up-an-orchestrator/setting-up-an-orchestrator/data-centres-and-large-scale-hardware-providers': [
    'v2/orchestrators/setting-up-an-orchestrator/data-centres-and-large-scale-hardware-providers'
  ],
  'v2/pages/02_community/livepeer-community/media-kit': ['v2/resources/media-kit'],
  'v2/pages/01_about/livepeer-network/actors': ['v2/about/livepeer-network/actors'],
  'v2/pages/03_developers/ai-inference-on-livepeer/livepeer-ai/livepeer-ai-content-directory': [
    'v2/developers/ai-inference-on-livepeer/livepeer-ai/livepeer-ai-content-directory'
  ],
  'v2/resources/concepts/livepeer-core-concepts': ['v2/about/core-concepts'],
  'v2/resources/concepts/livepeer-actors': ['v2/about/livepeer-network/actors'],
  'v2/resources/ai-inference-on-livepeer/livepeer-ai/livepeer-ai-content-directory': [
    'v2/pages/03_developers/ai-inference-on-livepeer/livepeer-ai/livepeer-ai-content-directory'
  ],
  'v2/pages/00_home/changelog/changelog': ['v2/resources/changelog/changelog'],
  'v2/pages/00_home/changelog/migration-guide': ['v2/resources/changelog/migration-guide']
};

const CSV_COLUMNS = [
  'v1_page',
  'v1_nav_status',
  'v1_top_section',
  'v1_title',
  'v1_page_content_summary',
  'v1_key_topics',
  'v1_state',
  'v1_state_flags',
  'v1_state_rationale',
  'v1_state_confidence',
  'recommended_target_type',
  'recommended_v2_tab',
  'recommended_v2_anchor',
  'recommended_v2_group_path',
  'recommended_v2_route',
  'recommended_v2_route_in_docs_json',
  'recommended_v2_target_file_exists',
  'recommended_v2_target_file_path',
  'recommended_new_location',
  'coverage_grade',
  'coverage_rationale',
  'deprecate_or_supersede_recommendation',
  'recommended_action',
  'confidence_score',
  'adjudication_status',
  'notes',
  'seed_row_present',
  'seed_target_match_status'
];

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

function parseArgs(argv) {
  const args = {
    outDir: DEFAULT_OUT_DIR,
    candidateCount: DEFAULT_CANDIDATE_COUNT,
    adjudicateThreshold: DEFAULT_ADJUDICATE_THRESHOLD,
    useSeed: DEFAULT_SEED,
    section: '',
    resume: ''
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--out-dir') {
      args.outDir = String(argv[i + 1] || '').trim() || DEFAULT_OUT_DIR;
      i += 1;
      continue;
    }
    if (token === '--candidate-count') {
      const n = Number(argv[i + 1]);
      if (Number.isFinite(n) && n > 0) args.candidateCount = Math.floor(n);
      i += 1;
      continue;
    }
    if (token === '--adjudicate-threshold') {
      const n = Number(argv[i + 1]);
      if (Number.isFinite(n) && n >= 0 && n <= 1) args.adjudicateThreshold = n;
      i += 1;
      continue;
    }
    if (token === '--use-seed') {
      args.useSeed = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token === '--section') {
      args.section = String(argv[i + 1] || '').trim().toLowerCase();
      i += 1;
      continue;
    }
    if (token === '--resume') {
      args.resume = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
  }

  return args;
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function normalizeRoute(raw) {
  let value = String(raw || '').trim();
  value = toPosix(value);
  value = value.replace(/^\/+/, '');
  value = value.replace(/\.(md|mdx)$/i, '');
  value = value.replace(/\/(index|README)$/i, '');
  value = value.replace(/\/+$/, '');
  return value;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function walkFiles(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(full, out);
      continue;
    }
    if (/\.mdx$/i.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function collectRouteStrings(node, predicate, out = []) {
  if (typeof node === 'string') {
    const value = node.trim();
    if (predicate(value)) out.push(normalizeRoute(value));
    return out;
  }
  if (Array.isArray(node)) {
    node.forEach((item) => collectRouteStrings(item, predicate, out));
    return out;
  }
  if (!node || typeof node !== 'object') return out;
  Object.values(node).forEach((value) => collectRouteStrings(value, predicate, out));
  return out;
}

function extractV1NavRoutes(docsJson) {
  const version = (docsJson?.navigation?.versions || []).find((item) => item.version === 'v1');
  if (!version) return new Set();
  const routes = collectRouteStrings(version, (value) => value.startsWith('v1/'));
  return new Set(routes.filter(Boolean));
}

function extractV2EnglishRouteMeta(docsJson) {
  const version = (docsJson?.navigation?.versions || []).find((item) => item.version === 'v2');
  if (!version) return new Map();

  const en = (version.languages || []).find((lang) => lang.language === 'en');
  if (!en) return new Map();

  const occurrences = [];

  function visit(node, context) {
    if (typeof node === 'string') {
      const raw = node.trim();
      if (!raw.startsWith('v2/')) return;
      const route = normalizeRoute(raw);
      if (!route || route === 'v2') return;
      occurrences.push({
        route,
        tab: context.tab || '',
        anchor: context.anchor || '',
        groupPath: context.groupPath || []
      });
      return;
    }

    if (Array.isArray(node)) {
      node.forEach((item) => visit(item, context));
      return;
    }

    if (!node || typeof node !== 'object') return;

    const nextContext = {
      tab: context.tab || '',
      anchor: context.anchor || '',
      groupPath: [...(context.groupPath || [])]
    };

    if (typeof node.tab === 'string' && node.tab.trim()) {
      nextContext.tab = node.tab.trim();
    }

    if (typeof node.anchor === 'string' && node.anchor.trim() && node.anchor.trim() !== ' ') {
      nextContext.anchor = node.anchor.trim();
    }

    if (typeof node.group === 'string' && node.group.trim()) {
      nextContext.groupPath = [...nextContext.groupPath, node.group.trim()];
    }

    Object.values(node).forEach((value) => visit(value, nextContext));
  }

  visit(en.tabs || [], { tab: '', anchor: '', groupPath: [] });

  const meta = new Map();
  for (const row of occurrences) {
    if (!meta.has(row.route)) {
      meta.set(row.route, {
        route: row.route,
        tab: row.tab,
        anchor: row.anchor,
        groupPath: row.groupPath,
        occurrences: [row]
      });
      continue;
    }
    meta.get(row.route).occurrences.push(row);
  }

  return meta;
}

function buildRedirectMap(docsJson) {
  const redirects = Array.isArray(docsJson?.redirects) ? docsJson.redirects : [];
  const map = new Map();
  redirects.forEach((item) => {
    if (!item || typeof item !== 'object') return;
    const source = normalizeRoute(item.source);
    const destination = normalizeRoute(item.destination);
    if (!source || !destination) return;
    map.set(source, destination);
  });
  return map;
}

function directResolveRoute(repoRoot, route) {
  const normalized = normalizeRoute(route);
  if (!normalized) return null;
  const candidates = [
    `${normalized}.mdx`,
    `${normalized}.md`,
    `${normalized}/index.mdx`,
    `${normalized}/index.md`,
    `${normalized}/README.mdx`,
    `${normalized}/README.md`
  ];
  for (const candidate of candidates) {
    const abs = path.join(repoRoot, candidate);
    if (fs.existsSync(abs)) {
      return {
        route: normalized,
        filePath: toPosix(candidate)
      };
    }
  }
  return null;
}

function normalizeKnownLegacyPatterns(route) {
  const normalized = normalizeRoute(route);
  if (!normalized) return [];

  const candidates = [];

  if (normalized.startsWith('v2/pages/')) {
    const rest = normalized.slice('v2/pages/'.length);
    const [legacyDomain, ...tail] = rest.split('/').filter(Boolean);
    const modernDomain = LEGACY_DOMAIN_MAP[legacyDomain];
    if (modernDomain) {
      candidates.push(normalizeRoute(path.posix.join('v2', modernDomain, ...tail)));
    }
  }

  const deDuplicated = normalized.replace(
    '/setting-up-an-orchestrator/setting-up-an-orchestrator/',
    '/setting-up-an-orchestrator/'
  );
  if (deDuplicated !== normalized) candidates.push(deDuplicated);

  const quickstartRewritten = normalized
    .replace('/run-a-gateway/quickstart-a-gateway', '/quickstart/gateway-setup')
    .replace('/run-a-gateway/get-AI-to-setup-the-gateway', '/quickstart/AI-prompt')
    .replace('/run-a-gateway/quickstart/quickstart-a-gateway', '/quickstart/gateway-setup')
    .replace('/run-a-gateway/quickstart/get-AI-to-setup-the-gateway', '/quickstart/AI-prompt')
    .replace('/changelog/migration-guides', '/changelog/migration-guide')
    .replace('/streamplace-funding', '/streamplace-funding-model')
    .replace('/references/video-flags', '/references/configuration-flags');
  if (quickstartRewritten !== normalized) candidates.push(quickstartRewritten);

  return [...new Set(candidates.map((item) => normalizeRoute(item)).filter(Boolean))];
}

function resolveRouteWithChain(repoRoot, docsJson, redirectMap, route) {
  const normalized = normalizeRoute(route);
  if (!normalized) {
    return {
      exists: false,
      resolutionType: 'none',
      inputRoute: normalized,
      resolvedRoute: '',
      filePath: ''
    };
  }

  const direct = directResolveRoute(repoRoot, normalized);
  if (direct) {
    return {
      exists: true,
      resolutionType: 'direct',
      inputRoute: normalized,
      resolvedRoute: direct.route,
      filePath: direct.filePath
    };
  }

  const redirected = redirectMap.get(normalized);
  if (redirected) {
    const resolved = directResolveRoute(repoRoot, redirected);
    if (resolved) {
      return {
        exists: true,
        resolutionType: 'redirect',
        inputRoute: normalized,
        resolvedRoute: resolved.route,
        filePath: resolved.filePath
      };
    }
  }

  const canonicalRoutes = CANONICAL_ROUTE_MAP[normalized] || [];
  for (const candidate of canonicalRoutes) {
    const resolved = directResolveRoute(repoRoot, candidate);
    if (resolved) {
      return {
        exists: true,
        resolutionType: 'canonical-map',
        inputRoute: normalized,
        resolvedRoute: resolved.route,
        filePath: resolved.filePath
      };
    }
  }

  const legacyCandidates = normalizeKnownLegacyPatterns(normalized);
  for (const candidate of legacyCandidates) {
    const resolved = directResolveRoute(repoRoot, candidate);
    if (resolved) {
      return {
        exists: true,
        resolutionType: 'legacy-cleanup',
        inputRoute: normalized,
        resolvedRoute: resolved.route,
        filePath: resolved.filePath
      };
    }
  }

  return {
    exists: false,
    resolutionType: 'unresolved',
    inputRoute: normalized,
    resolvedRoute: '',
    filePath: ''
  };
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function tokenize(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => token.length > 1 && !STOPWORDS.has(token));
}

function toTokenSet(text) {
  return new Set(tokenize(text));
}

function jaccardScore(setA, setB) {
  if (!setA.size || !setB.size) return 0;
  let intersection = 0;
  for (const token of setA) {
    if (setB.has(token)) intersection += 1;
  }
  const union = setA.size + setB.size - intersection;
  if (!union) return 0;
  return intersection / union;
}

function stripFrontmatter(content) {
  return String(content || '').replace(/^---\s*\n[\s\S]*?\n---\s*(?:\n|$)/, '');
}

function extractFirstHeading(body) {
  const match = String(body || '').match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : '';
}

function extractReadableText(content) {
  let text = stripFrontmatter(content);
  text = text.replace(/^import\s+.*$/gm, '');
  text = text.replace(/^export\s+.*$/gm, '');
  text = text.replace(/```[\s\S]*?```/g, ' ');
  text = text.replace(/<[^>]+>/g, ' ');
  text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
  text = text.replace(/`([^`]+)`/g, '$1');
  text = text.replace(/\{[^}]*\}/g, ' ');
  text = text.replace(/\s+/g, ' ').trim();
  return text;
}

function sentenceSplit(text) {
  return String(text || '')
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function slugToTitle(slug) {
  return String(slug || '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function inferTopSection(route) {
  const parts = normalizeRoute(route).split('/').filter(Boolean);
  return parts[1] || 'unknown';
}

function classifyV1State(route, inNav, content) {
  const normalizedRoute = normalizeRoute(route);
  const lower = String(content || '').toLowerCase();
  const flags = [];

  if (!inNav) flags.push('not_in_v1_docs_json_nav');
  if (normalizedRoute.startsWith('v1/api-reference/')) flags.push('api_endpoint_page');
  if (normalizedRoute.startsWith('v1/sdks/') || normalizedRoute.startsWith('v1/ai/sdks/')) {
    flags.push('sdk_reference_page');
  }

  const hasDeprecation = /(deprecated|no longer maintained|sunset|obsolete|use .* instead)/i.test(content);
  const hasSuperseded = /(superseded|replaced by|use .* instead)/i.test(content);
  const hasBeta = /(beta|experimental|preview|coming soon)/i.test(content);

  let state = 'legacy';
  let rationale = 'Default legacy classification for v1 content.';
  let confidence = 0.72;

  if (!inNav) {
    state = 'orphan_not_in_nav';
    rationale = 'Page exists in filesystem but is not referenced in v1 docs.json navigation.';
    confidence = 0.9;
  }

  if (hasSuperseded && state === 'legacy') {
    state = 'superseded';
    rationale = 'Page text includes explicit replacement/superseded cues.';
    confidence = 0.95;
    flags.push('has_deprecation_notice');
  } else if (hasDeprecation && state === 'legacy') {
    state = 'deprecated';
    rationale = 'Page text includes deprecation/obsolete cues.';
    confidence = 0.92;
    flags.push('has_deprecation_notice');
  } else if (hasBeta && state === 'legacy') {
    state = 'beta_experimental';
    rationale = 'Page text indicates beta/experimental or preview status.';
    confidence = 0.88;
    flags.push('has_beta_label');
  }

  return {
    state: V1_STATE_VALUES.has(state) ? state : 'unknown_needs_review',
    flags: [...new Set(flags)],
    rationale,
    confidence: Number(confidence.toFixed(2))
  };
}

function buildV1PageRecords(repoRoot, v1NavRoutes, filterSection) {
  const files = walkFiles(path.join(repoRoot, 'v1')).sort((a, b) => toPosix(a).localeCompare(toPosix(b)));
  const rows = [];

  for (const absPath of files) {
    const rel = toPosix(path.relative(repoRoot, absPath));
    const route = normalizeRoute(rel);
    const topSection = inferTopSection(route);

    if (filterSection && topSection.toLowerCase() !== filterSection) {
      continue;
    }

    const raw = fs.readFileSync(absPath, 'utf8');
    const frontmatter = extractFrontmatter(raw);
    const body = stripFrontmatter(raw);
    const heading = extractFirstHeading(body);
    const title =
      String(frontmatter?.data?.title || '').trim() ||
      heading ||
      slugToTitle(route.split('/').filter(Boolean).pop() || 'Untitled');

    const readableText = extractReadableText(raw);
    const sentences = sentenceSplit(readableText);
    const description = String(frontmatter?.data?.description || '').replace(/\s+/g, ' ').trim();

    let summary = '';
    if (description) {
      const descSentence = sentenceSplit(description).slice(0, 2).join(' ');
      summary = `${title}. ${descSentence}`.trim();
    } else {
      const firstSentence = sentences[0] || '';
      const secondSentence = sentences[1] || '';
      summary = `${title}. ${[firstSentence, secondSentence].filter(Boolean).join(' ')}`.trim();
    }
    summary = summary.replace(/\s+/g, ' ').trim();
    if (!summary) summary = `${title}.`; 

    const tokens = tokenize(`${route} ${title} ${description} ${sentences.slice(0, 5).join(' ')}`);
    const freq = new Map();
    tokens.forEach((token) => {
      freq.set(token, (freq.get(token) || 0) + 1);
    });
    const keyTopics = [...freq.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6)
      .map(([token]) => token)
      .join('|');

    const inNav = v1NavRoutes.has(route);
    const v1State = classifyV1State(route, inNav, raw);

    rows.push({
      absPath,
      route,
      topSection,
      title,
      description,
      summary,
      keyTopics,
      inNav,
      content: raw,
      readableText,
      v1State
    });
  }

  return rows;
}

function sectionPrior(topSection, targetRoute, context) {
  const route = normalizeRoute(targetRoute);
  const tab = String(context.tab || '').toLowerCase();
  const anchor = String(context.anchor || '').toLowerCase();

  function starts(prefix) {
    return route.startsWith(prefix);
  }

  switch (topSection) {
    case 'developers':
      if (starts('v2/developers/')) return 0.26;
      if (starts('v2/solutions/livepeer-studio/')) return 0.18;
      if (starts('v2/resources/')) return 0.06;
      break;
    case 'gateways':
      if (starts('v2/gateways/')) return 0.3;
      if (starts('v2/resources/')) return 0.05;
      break;
    case 'orchestrators':
      if (starts('v2/orchestrators/')) return 0.32;
      if (starts('v2/resources/')) return 0.05;
      break;
    case 'delegators':
      if (starts('v2/lpt/')) return 0.34;
      break;
    case 'api-reference':
      if (/\/reference|\/api-reference|\/apis/.test(route)) return 0.3;
      if (tab.includes('developers') || tab.includes('gateways')) return 0.08;
      break;
    case 'sdks':
      if (route.includes('/sdks')) return 0.34;
      if (route.includes('/reference/')) return 0.2;
      break;
    case 'ai':
      if (/ai|inference|llm|segment|upscale|text-to|image-to/.test(route)) return 0.28;
      if (starts('v2/developers/')) return 0.12;
      break;
    case 'references':
      if (starts('v2/resources/')) return 0.24;
      if (route.includes('/technical-references/')) return 0.24;
      break;
    case 'self-hosting':
      if (starts('v2/orchestrators/') || starts('v2/gateways/')) return 0.22;
      break;
    default:
      if (anchor.includes(topSection) || tab.includes(topSection)) return 0.15;
      break;
  }

  return 0;
}

function keywordBonus(v1Route, v1Text, targetRoute) {
  const source = `${v1Route} ${v1Text}`.toLowerCase();
  const target = targetRoute.toLowerCase();
  let bonus = 0;

  const pairs = [
    ['webhook', 'webhook'],
    ['multistream', 'multistream'],
    ['delegat', 'delegat'],
    ['govern', 'govern'],
    ['treasury', 'treasury'],
    ['orchestrator', 'orchestrator'],
    ['gateway', 'gateway'],
    ['stream', 'livestream'],
    ['asset', 'video-on-demand'],
    ['api', 'api-reference'],
    ['sdk', 'sdks'],
    ['cli', 'studio-cli'],
    ['clip', 'clip'],
    ['latency', 'latency'],
    ['analytics', 'analytics'],
    ['transcode', 'transcod']
  ];

  for (const [src, dst] of pairs) {
    if (source.includes(src) && target.includes(dst)) {
      bonus += 0.04;
    }
  }

  return Math.min(0.22, bonus);
}

function isHubRoute(route) {
  const normalized = normalizeRoute(route);
  return (
    /\/overview$/.test(normalized) ||
    /\/portal$/.test(normalized) ||
    /\/resources-portal$/.test(normalized) ||
    /\/reference\//.test(normalized) ||
    /\/technical-references\//.test(normalized)
  );
}

function buildTargetCatalog(repoRoot, docsJson, v2RouteMeta) {
  const redirectMap = buildRedirectMap(docsJson);
  const records = [];

  for (const [route, meta] of v2RouteMeta.entries()) {
    const resolution = resolveRouteWithChain(repoRoot, docsJson, redirectMap, route);
    const contextText = `${meta.tab} ${meta.anchor} ${(meta.groupPath || []).join(' ')}`;
    records.push({
      route,
      tab: meta.tab,
      anchor: meta.anchor,
      groupPath: meta.groupPath,
      contextText,
      tokens: toTokenSet(`${route} ${contextText}`),
      resolution,
      isHub: isHubRoute(route),
      inDocsJson: true
    });
  }

  return {
    records,
    redirectMap
  };
}

function scoreCandidates(v1Record, targetCatalog, candidateCount) {
  const sourceTokens = toTokenSet(
    `${v1Record.route} ${v1Record.title} ${v1Record.description} ${v1Record.summary} ${v1Record.keyTopics}`
  );
  const sourceLeaf = v1Record.route.split('/').filter(Boolean).pop() || '';

  const candidates = targetCatalog.records.map((target) => {
    const lexical = jaccardScore(sourceTokens, target.tokens);
    const leaf = target.route.split('/').filter(Boolean).pop() || '';
    const leafBonus = sourceLeaf && leaf === sourceLeaf ? 0.18 : 0;
    const prior = sectionPrior(v1Record.topSection, target.route, target);
    const hint = keywordBonus(v1Record.route, `${v1Record.title} ${v1Record.summary}`, target.route);
    const resolvabilityBonus = target.resolution.exists ? 0.08 : 0.02;

    let score = lexical * 0.55 + prior + leafBonus + hint + resolvabilityBonus;
    if (target.isHub) score += 0.03;

    score = Number(Math.max(0, Math.min(0.99, score)).toFixed(4));

    return {
      route: target.route,
      tab: target.tab,
      anchor: target.anchor,
      groupPath: target.groupPath,
      score,
      lexical: Number(lexical.toFixed(4)),
      prior: Number(prior.toFixed(4)),
      leafBonus: Number(leafBonus.toFixed(4)),
      hint: Number(hint.toFixed(4)),
      resolvabilityBonus: Number(resolvabilityBonus.toFixed(4)),
      isHub: target.isHub,
      resolution: target.resolution,
      inDocsJson: target.inDocsJson
    };
  });

  candidates.sort((a, b) => b.score - a.score || a.route.localeCompare(b.route));
  return candidates.slice(0, candidateCount);
}

function formatGroupPath(parts) {
  if (!Array.isArray(parts) || parts.length === 0) return '';
  return parts.join(' > ');
}

function buildNewLocation(best) {
  const group = formatGroupPath(best.groupPath);
  const base = [best.tab, best.anchor, group].filter(Boolean).join(' > ');
  return base || 'Unassigned > Needs new placement';
}

function determineRecommendation(v1Record, candidates) {
  const best = candidates[0] || null;
  const second = candidates[1] || null;

  if (!best) {
    return {
      recommendedTargetType: 'new_group_in_existing_tab',
      recommendedV2Route: '',
      recommendedV2Tab: '',
      recommendedV2Anchor: '',
      recommendedV2GroupPath: '',
      recommendedNewLocation: 'Unassigned > Needs new placement',
      recommendedV2RouteInDocsJson: false,
      recommendedV2TargetFileExists: false,
      recommendedV2TargetFilePath: '',
      coverageGrade: 'not_covered',
      coverageRationale: 'No viable v2 candidate generated from current IA taxonomy.',
      recommendedAction: 'create_new_group',
      confidenceScore: 0.25,
      notes: 'No candidates available for this v1 page.'
    };
  }

  let targetType = 'new_page_in_existing_group';

  if ((v1Record.v1State.state === 'deprecated' || v1Record.v1State.state === 'superseded') && best.score < 0.5) {
    targetType = 'deprecated_or_superseded';
  } else if (best.score >= 0.82 && best.resolution.exists) {
    targetType = 'existing_v2_page';
  } else if (best.score >= 0.6) {
    targetType = 'existing_v2_hub_merge';
  } else if (best.score < 0.45) {
    targetType = 'new_group_in_existing_tab';
  }

  let coverageGrade = 'not_covered';
  if (targetType === 'deprecated_or_superseded') {
    coverageGrade = 'superseded_obsolete';
  } else if (best.score >= 0.82) {
    coverageGrade = 'adequately_covered';
  } else if (best.score >= 0.65) {
    coverageGrade = 'partially_covered';
  } else if (best.score >= 0.5) {
    coverageGrade = 'minimally_covered';
  }

  let action = 'create_new_page';
  if (targetType === 'deprecated_or_superseded') {
    action = 'deprecate_no_new_content';
  } else if (targetType === 'existing_v2_page') {
    action = coverageGrade === 'adequately_covered' ? 'keep_as_is' : 'add_section_to_existing_page';
  } else if (targetType === 'existing_v2_hub_merge') {
    action = 'merge_and_redirect';
  } else if (targetType === 'new_group_in_existing_tab') {
    action = 'create_new_group';
  }

  let confidence = best.score;
  if (best.resolution.exists) confidence += 0.07;
  if (best.score - (second ? second.score : 0) >= 0.15) confidence += 0.05;
  confidence = Number(Math.max(0, Math.min(0.98, confidence)).toFixed(2));

  const recommendedRoute = targetType.startsWith('new_') || targetType === 'deprecated_or_superseded' ? '' : best.route;

  return {
    recommendedTargetType: TARGET_TYPE_VALUES.has(targetType) ? targetType : 'new_page_in_existing_group',
    recommendedV2Route: recommendedRoute,
    recommendedV2Tab: best.tab || '',
    recommendedV2Anchor: best.anchor || '',
    recommendedV2GroupPath: formatGroupPath(best.groupPath || []),
    recommendedNewLocation: targetType.startsWith('new_') ? buildNewLocation(best) : '',
    recommendedV2RouteInDocsJson: !!best.inDocsJson,
    recommendedV2TargetFileExists: !!best.resolution.exists,
    recommendedV2TargetFilePath: best.resolution.filePath || '',
    coverageGrade: COVERAGE_VALUES.has(coverageGrade) ? coverageGrade : 'not_covered',
    coverageRationale:
      targetType === 'deprecated_or_superseded'
        ? 'Source page appears deprecated/superseded and does not warrant direct migration.'
        : `Best candidate score ${best.score.toFixed(2)} against English IA route ${best.route}.`,
    recommendedAction: ACTION_VALUES.has(action) ? action : 'create_new_page',
    confidenceScore: confidence,
    notes: `Top candidate: ${best.route} (score ${best.score.toFixed(2)}, resolution ${best.resolution.resolutionType}).`
  };
}

function parseCsvLine(line) {
  const cols = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }
    if (char === ',' && !inQuotes) {
      cols.push(current);
      current = '';
      continue;
    }
    current += char;
  }

  cols.push(current);
  return cols;
}

function parseSeedCsv(seedPath) {
  if (!seedPath || !fs.existsSync(seedPath)) {
    return new Map();
  }

  const raw = fs.readFileSync(seedPath, 'utf8').trim();
  if (!raw) return new Map();

  const lines = raw.split('\n');
  if (lines.length <= 1) return new Map();

  const header = parseCsvLine(lines[0]);
  const idxV1 = header.indexOf('v1_path');
  const idxTarget = header.indexOf('target_v2_path');

  if (idxV1 === -1 || idxTarget === -1) {
    return new Map();
  }

  const map = new Map();
  for (let i = 1; i < lines.length; i += 1) {
    const cols = parseCsvLine(lines[i]);
    const v1Path = normalizeRoute(cols[idxV1] || '');
    const target = String(cols[idxTarget] || '').trim();
    if (!v1Path) continue;
    map.set(v1Path, {
      rawTarget: target,
      normalizedTarget: normalizeRoute(target.replace(/\s*\(.*\)\s*$/, ''))
    });
  }

  return map;
}

function seedMatchStatus(seedRecord, recommendation, repoRoot, docsJson, redirectMap) {
  if (!seedRecord) return '';

  const resolved = resolveRouteWithChain(repoRoot, docsJson, redirectMap, seedRecord.normalizedTarget);
  if (!resolved.exists) {
    return 'non_resolvable';
  }

  const recRoute = normalizeRoute(recommendation.recommendedV2Route);
  if (recRoute && normalizeRoute(resolved.resolvedRoute) === recRoute) {
    return 'valid_match';
  }

  return 'stale';
}

function buildDeprecationRecommendation(v1State, coverageGrade) {
  if (v1State === 'deprecated' || v1State === 'superseded') {
    return 'deprecate_and_redirect_to_recommended_target';
  }
  if (coverageGrade === 'not_covered' || v1State === 'beta_experimental') {
    return 'review_for_deprecation_or_merge';
  }
  return 'no_deprecation_recommended';
}

function buildAuditRows(options) {
  const {
    repoRoot,
    docsJson,
    v1Records,
    targetCatalog,
    candidateCount,
    seedMap,
    adjudicateThreshold,
    resumeMap
  } = options;

  const rows = [];
  const queue = [];

  for (const v1Record of v1Records) {
    const existingRow = resumeMap.get(v1Record.route);
    if (existingRow) {
      rows.push(existingRow);
      continue;
    }

    const candidates = scoreCandidates(v1Record, targetCatalog, candidateCount);
    const recommendation = determineRecommendation(v1Record, candidates);

    if (recommendation.recommendedTargetType === 'existing_v2_hub_merge') {
      v1Record.v1State.flags.push('overlaps_v2_hub');
    }
    if (!recommendation.recommendedV2TargetFileExists) {
      v1Record.v1State.flags.push('broken_or_missing_target_risk');
    }

    const seedRecord = seedMap.get(v1Record.route);
    const seedStatus = seedMatchStatus(
      seedRecord,
      recommendation,
      repoRoot,
      docsJson,
      targetCatalog.redirectMap
    );

    const queueReasons = [];
    if (recommendation.confidenceScore < adjudicateThreshold) queueReasons.push('low_confidence');
    if (
      recommendation.recommendedTargetType === 'new_page_in_existing_group' ||
      recommendation.recommendedTargetType === 'new_group_in_existing_tab' ||
      recommendation.recommendedTargetType === 'split_across_multiple_v2_pages'
    ) {
      queueReasons.push('new_structure_recommended');
    }
    if (
      recommendation.coverageGrade === 'not_covered' ||
      recommendation.coverageGrade === 'superseded_obsolete'
    ) {
      queueReasons.push('coverage_gap');
    }
    if (!v1Record.inNav) queueReasons.push('orphan_v1_page');
    if (!recommendation.recommendedV2TargetFileExists) queueReasons.push('target_unresolved');
    if (seedStatus === 'stale' || seedStatus === 'non_resolvable') queueReasons.push('seed_disagreement_or_stale');

    const adjudicationStatus = queueReasons.length > 0 ? 'queued' : 'not_required';

    const row = {
      v1_page: v1Record.route,
      v1_nav_status: v1Record.inNav ? 'in_v1_nav' : 'orphan_not_in_v1_nav',
      v1_top_section: v1Record.topSection,
      v1_title: v1Record.title,
      v1_page_content_summary: v1Record.summary,
      v1_key_topics: v1Record.keyTopics,
      v1_state: v1Record.v1State.state,
      v1_state_flags: [...new Set(v1Record.v1State.flags)].join('|'),
      v1_state_rationale: v1Record.v1State.rationale,
      v1_state_confidence: v1Record.v1State.confidence,
      recommended_target_type: recommendation.recommendedTargetType,
      recommended_v2_tab: recommendation.recommendedV2Tab,
      recommended_v2_anchor: recommendation.recommendedV2Anchor,
      recommended_v2_group_path: recommendation.recommendedV2GroupPath,
      recommended_v2_route: recommendation.recommendedV2Route,
      recommended_v2_route_in_docs_json: recommendation.recommendedV2RouteInDocsJson,
      recommended_v2_target_file_exists: recommendation.recommendedV2TargetFileExists,
      recommended_v2_target_file_path: recommendation.recommendedV2TargetFilePath,
      recommended_new_location: recommendation.recommendedNewLocation,
      coverage_grade: recommendation.coverageGrade,
      coverage_rationale: recommendation.coverageRationale,
      deprecate_or_supersede_recommendation: buildDeprecationRecommendation(
        v1Record.v1State.state,
        recommendation.coverageGrade
      ),
      recommended_action: recommendation.recommendedAction,
      confidence_score: recommendation.confidenceScore,
      adjudication_status: adjudicationStatus,
      notes: recommendation.notes,
      seed_row_present: !!seedRecord,
      seed_target_match_status: seedStatus,
      _queue_reasons: queueReasons,
      _candidate_snapshot: candidates,
      _seed_target: seedRecord ? seedRecord.normalizedTarget : ''
    };

    if (queueReasons.length > 0) {
      queue.push({
        v1_page: row.v1_page,
        reasons: queueReasons,
        confidence_score: row.confidence_score,
        recommended_target_type: row.recommended_target_type,
        recommended_v2_route: row.recommended_v2_route,
        candidate_snapshot: candidates,
        seed_target: row._seed_target
      });
    }

    rows.push(row);
  }

  // Heuristic second-pass adjudication.
  for (const row of rows) {
    if (row.adjudication_status !== 'queued') continue;

    const candidates = Array.isArray(row._candidate_snapshot) ? row._candidate_snapshot : [];
    const bestResolvable = candidates.find((candidate) => candidate.resolution && candidate.resolution.exists);
    const secondResolvable = candidates.slice(1).find((candidate) => candidate.resolution && candidate.resolution.exists);

    let revised = false;

    if (!row.recommended_v2_target_file_exists && bestResolvable) {
      row.recommended_target_type = bestResolvable.score >= 0.75 ? 'existing_v2_page' : 'existing_v2_hub_merge';
      row.recommended_v2_route = bestResolvable.route;
      row.recommended_v2_tab = bestResolvable.tab;
      row.recommended_v2_anchor = bestResolvable.anchor;
      row.recommended_v2_group_path = formatGroupPath(bestResolvable.groupPath || []);
      row.recommended_v2_route_in_docs_json = true;
      row.recommended_v2_target_file_exists = true;
      row.recommended_v2_target_file_path = bestResolvable.resolution.filePath;
      row.recommended_new_location = '';
      row.coverage_grade = bestResolvable.score >= 0.82 ? 'adequately_covered' : 'partially_covered';
      row.coverage_rationale = `Adjudication revised to resolvable route ${bestResolvable.route} (score ${bestResolvable.score.toFixed(2)}).`;
      row.recommended_action = row.recommended_target_type === 'existing_v2_page' ? 'add_section_to_existing_page' : 'merge_and_redirect';
      row.confidence_score = Number(Math.max(row.confidence_score, Math.min(0.95, bestResolvable.score + 0.08)).toFixed(2));
      revised = true;
    } else if (row.seed_row_present && row.seed_target_match_status === 'valid_match') {
      row.confidence_score = Number(Math.min(0.97, row.confidence_score + 0.08).toFixed(2));
    } else if (!revised && secondResolvable && row.confidence_score < DEFAULT_ADJUDICATE_THRESHOLD) {
      const currentRoute = normalizeRoute(row.recommended_v2_route);
      if (normalizeRoute(secondResolvable.route) !== currentRoute && secondResolvable.score >= 0.7) {
        row.recommended_target_type = 'existing_v2_hub_merge';
        row.recommended_v2_route = secondResolvable.route;
        row.recommended_v2_tab = secondResolvable.tab;
        row.recommended_v2_anchor = secondResolvable.anchor;
        row.recommended_v2_group_path = formatGroupPath(secondResolvable.groupPath || []);
        row.recommended_v2_route_in_docs_json = true;
        row.recommended_v2_target_file_exists = true;
        row.recommended_v2_target_file_path = secondResolvable.resolution.filePath;
        row.recommended_new_location = '';
        row.coverage_grade = 'partially_covered';
        row.coverage_rationale = `Adjudication selected alternate candidate ${secondResolvable.route} (score ${secondResolvable.score.toFixed(2)}).`;
        row.recommended_action = 'merge_and_redirect';
        row.confidence_score = Number(Math.min(0.93, secondResolvable.score + 0.06).toFixed(2));
        revised = true;
      }
    }

    if (revised) {
      row.adjudication_status = 'revised';
      row.notes = `${row.notes} Adjudication revised target for higher resolvability.`.trim();
      continue;
    }

    if (row.confidence_score >= adjudicateThreshold && row.recommended_v2_target_file_exists) {
      row.adjudication_status = 'confirmed';
      row.notes = `${row.notes} Adjudication confirmed recommendation.`.trim();
    } else {
      row.adjudication_status = 'needs_manual_review';
      row.notes = `${row.notes} Adjudication could not raise confidence to threshold.`.trim();
    }
  }

  return { rows, queue };
}

function loadResumeRows(resumePath) {
  const map = new Map();
  if (!resumePath) return map;
  if (!fs.existsSync(resumePath)) return map;

  const data = readJson(resumePath);
  const rows = Array.isArray(data?.rows) ? data.rows : [];
  for (const row of rows) {
    const key = normalizeRoute(row.v1_page);
    if (!key) continue;
    map.set(key, row);
  }
  return map;
}

function validateRow(row) {
  if (!V1_STATE_VALUES.has(row.v1_state)) return false;
  if (!TARGET_TYPE_VALUES.has(row.recommended_target_type)) return false;
  if (!COVERAGE_VALUES.has(row.coverage_grade)) return false;
  if (!ACTION_VALUES.has(row.recommended_action)) return false;
  if (!ADJUDICATION_VALUES.has(row.adjudication_status)) return false;
  if (typeof row.confidence_score !== 'number' || row.confidence_score < 0 || row.confidence_score > 1) {
    return false;
  }
  return true;
}

function csvEscape(value) {
  const stringValue = value === null || value === undefined ? '' : String(value);
  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  return stringValue;
}

function writeCsv(filePath, rows) {
  const lines = [];
  lines.push(CSV_COLUMNS.join(','));
  rows.forEach((row) => {
    const cells = CSV_COLUMNS.map((column) => csvEscape(row[column]));
    lines.push(cells.join(','));
  });
  fs.writeFileSync(filePath, `${lines.join('\n')}\n`, 'utf8');
}

function countBy(rows, field) {
  const map = new Map();
  rows.forEach((row) => {
    const key = String(row[field] || '');
    map.set(key, (map.get(key) || 0) + 1);
  });
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
}

function buildMarkdownReport(payload) {
  const {
    generatedAt,
    commit,
    rowCount,
    v1Total,
    v1NavCount,
    v1OrphanCount,
    seedStats,
    unresolvedRows,
    newStructureRows,
    deprecatedRows,
    adjudicationCounts,
    coverageCounts,
    v1StateCounts,
    rows
  } = payload;

  const topOrphans = rows
    .filter((row) => row.v1_nav_status === 'orphan_not_in_v1_nav')
    .slice(0, 40)
    .map((row) => `- \`${row.v1_page}\``)
    .join('\n');

  const unresolvedList = unresolvedRows
    .slice(0, 60)
    .map((row) => `- \`${row.v1_page}\` -> \`${row.recommended_v2_route || row.recommended_new_location}\``)
    .join('\n');

  const newStructList = newStructureRows
    .slice(0, 60)
    .map((row) => `- \`${row.v1_page}\` -> ${row.recommended_new_location || row.recommended_v2_group_path}`)
    .join('\n');

  const deprecatedList = deprecatedRows
    .slice(0, 60)
    .map((row) => `- \`${row.v1_page}\` (${row.v1_state})`)
    .join('\n');

  function renderCountTable(title, counts) {
    const rowsText = counts.map(([name, count]) => `| ${name || '(blank)'} | ${count} |`).join('\n');
    return `### ${title}\n\n| Value | Count |\n|---|---:|\n${rowsText || '| (none) | 0 |'}`;
  }

  return `# v1 -> v2 Mapping Audit Report\n\nGenerated: ${generatedAt}\n\nCommit: \`${commit}\`\n\n## Methodology\n\n- Source inventory from \`v1/**/*.mdx\` (filesystem truth).\n- Canonical target IA from \`docs.json\` \`version=v2\`, \`language=en\`.\n- Resolver chain: direct file resolve -> redirects -> canonical remap rules -> legacy-path cleanup.\n- Seed matrix is advisory only and revalidated row-by-row.\n- Two-pass classification: primary heuristic pass + adjudication pass for low-confidence/high-risk rows.\n\n## Baseline Counts\n\n- v1 filesystem pages: **${v1Total}**\n- v1 docs.json routes: **${v1NavCount}**\n- v1 orphan pages (filesystem-only): **${v1OrphanCount}**\n- audited rows generated: **${rowCount}**\n\n## Seed Carry-Forward Stats\n\n- seed rows considered: **${seedStats.considered}**\n- seed valid match: **${seedStats.validMatch}**\n- seed stale: **${seedStats.stale}**\n- seed non-resolvable: **${seedStats.nonResolvable}**\n\n${renderCountTable('Coverage Distribution', coverageCounts)}\n\n${renderCountTable('v1 State Distribution', v1StateCounts)}\n\n${renderCountTable('Adjudication Outcomes', adjudicationCounts)}\n\n## Orphan v1 Pages (sample)\n\n${topOrphans || '- (none)'}\n\n## Unresolved / Missing Target Recommendations\n\n${unresolvedList || '- (none)'}\n\n## New Page / Group Recommendations\n\n${newStructList || '- (none)'}\n\n## Deprecated / Superseded Recommendations\n\n${deprecatedList || '- (none)'}\n\n## Residual Manual Queue\n\n- rows with \`adjudication_status=needs_manual_review\`: **${(adjudicationCounts.find((x) => x[0] === 'needs_manual_review') || [null, 0])[1]}**\n\n`;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const repoRoot = getRepoRoot();
  const docsJsonPath = path.join(repoRoot, 'docs.json');
  const outDir = path.isAbsolute(args.outDir) ? args.outDir : path.join(repoRoot, args.outDir);
  ensureDir(outDir);

  const docsJson = readJson(docsJsonPath);
  const v1NavRoutes = extractV1NavRoutes(docsJson);
  const v2RouteMeta = extractV2EnglishRouteMeta(docsJson);

  const v1Records = buildV1PageRecords(repoRoot, v1NavRoutes, args.section);
  const targetCatalog = buildTargetCatalog(repoRoot, docsJson, v2RouteMeta);
  const seedPath = args.useSeed
    ? path.isAbsolute(args.useSeed)
      ? args.useSeed
      : path.join(repoRoot, args.useSeed)
    : '';
  const seedMap = parseSeedCsv(seedPath);
  const resumePath = args.resume
    ? path.isAbsolute(args.resume)
      ? args.resume
      : path.join(repoRoot, args.resume)
    : '';
  const resumeMap = loadResumeRows(resumePath);

  const result = buildAuditRows({
    repoRoot,
    docsJson,
    v1Records,
    targetCatalog,
    candidateCount: args.candidateCount,
    seedMap,
    adjudicateThreshold: args.adjudicateThreshold,
    resumeMap
  });

  const invalidRows = result.rows.filter((row) => !validateRow(row));
  if (invalidRows.length > 0) {
    throw new Error(`Schema validation failed for ${invalidRows.length} rows. Example: ${invalidRows[0].v1_page}`);
  }

  const strippedRows = result.rows.map((row) => {
    const clone = { ...row };
    delete clone._queue_reasons;
    delete clone._candidate_snapshot;
    delete clone._seed_target;
    return clone;
  });

  const generatedAt = new Date().toISOString();
  const commit = execSync('git rev-parse --short HEAD', { cwd: repoRoot, encoding: 'utf8' }).trim();

  const queueRows = result.rows
    .filter((row) => row.adjudication_status === 'queued' || row.adjudication_status === 'needs_manual_review')
    .map((row) => ({
      v1_page: row.v1_page,
      adjudication_status: row.adjudication_status,
      reasons: row._queue_reasons,
      recommended_target_type: row.recommended_target_type,
      recommended_v2_route: row.recommended_v2_route,
      confidence_score: row.confidence_score,
      seed_target_match_status: row.seed_target_match_status,
      candidate_snapshot: row._candidate_snapshot
    }));

  const coverageCounts = countBy(strippedRows, 'coverage_grade');
  const v1StateCounts = countBy(strippedRows, 'v1_state');
  const adjudicationCounts = countBy(strippedRows, 'adjudication_status');

  const seedRows = strippedRows.filter((row) => row.seed_row_present);
  const seedStats = {
    considered: seedRows.length,
    validMatch: seedRows.filter((row) => row.seed_target_match_status === 'valid_match').length,
    stale: seedRows.filter((row) => row.seed_target_match_status === 'stale').length,
    nonResolvable: seedRows.filter((row) => row.seed_target_match_status === 'non_resolvable').length
  };

  const unresolvedRows = strippedRows.filter((row) => !row.recommended_v2_target_file_exists);
  const newStructureRows = strippedRows.filter(
    (row) =>
      row.recommended_target_type === 'new_page_in_existing_group' ||
      row.recommended_target_type === 'new_group_in_existing_tab'
  );
  const deprecatedRows = strippedRows.filter(
    (row) => row.v1_state === 'deprecated' || row.v1_state === 'superseded'
  );

  const report = buildMarkdownReport({
    generatedAt,
    commit,
    rowCount: strippedRows.length,
    v1Total: walkFiles(path.join(repoRoot, 'v1')).length,
    v1NavCount: v1NavRoutes.size,
    v1OrphanCount: strippedRows.filter((row) => row.v1_nav_status === 'orphan_not_in_v1_nav').length,
    seedStats,
    unresolvedRows,
    newStructureRows,
    deprecatedRows,
    adjudicationCounts,
    coverageCounts,
    v1StateCounts,
    rows: strippedRows
  });

  const jsonPayload = {
    metadata: {
      generatedAt,
      commit,
      repoRoot,
      outDir,
      source: {
        v1Root: 'v1',
        docsJson: 'docs.json',
        targetVersion: 'v2',
        targetLanguage: 'en'
      },
      options: {
        candidateCount: args.candidateCount,
        adjudicateThreshold: args.adjudicateThreshold,
        useSeed: seedPath || '',
        section: args.section || '',
        resume: resumePath || ''
      },
      counts: {
        v1Pages: strippedRows.length,
        v1NavRoutes: v1NavRoutes.size,
        v2EnRoutes: v2RouteMeta.size,
        seedRows: seedRows.length,
        queueRows: queueRows.length
      }
    },
    rows: result.rows
  };

  const metaPayload = {
    generatedAt,
    commit,
    options: jsonPayload.metadata.options,
    counts: jsonPayload.metadata.counts,
    seedStats,
    coverageCounts: Object.fromEntries(coverageCounts),
    v1StateCounts: Object.fromEntries(v1StateCounts),
    adjudicationCounts: Object.fromEntries(adjudicationCounts)
  };

  writeCsv(path.join(outDir, TARGET_FILES.csv), strippedRows);
  fs.writeFileSync(path.join(outDir, TARGET_FILES.json), `${JSON.stringify(jsonPayload, null, 2)}\n`, 'utf8');
  fs.writeFileSync(path.join(outDir, TARGET_FILES.queue), `${JSON.stringify(queueRows, null, 2)}\n`, 'utf8');
  fs.writeFileSync(path.join(outDir, TARGET_FILES.report), report, 'utf8');
  fs.writeFileSync(path.join(outDir, TARGET_FILES.meta), `${JSON.stringify(metaPayload, null, 2)}\n`, 'utf8');

  console.log('✅ v1->v2 mapping audit generated');
  console.log(`- rows: ${strippedRows.length}`);
  console.log(`- out: ${outDir}`);
  console.log(`- csv: ${TARGET_FILES.csv}`);
  console.log(`- json: ${TARGET_FILES.json}`);
  console.log(`- report: ${TARGET_FILES.report}`);
  console.log(`- queue: ${TARGET_FILES.queue}`);
  console.log(`- metadata: ${TARGET_FILES.meta}`);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`❌ audit-v1-to-v2-mapping failed: ${error.message}`);
    process.exit(1);
  }
}
