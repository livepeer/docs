/**
 * @script            accuracy-verifier
 * @category          utility
 * @purpose           qa:content-quality
 * @scope             full-repo
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Accuracy verification engine — scores page accuracy against source-weighted 2026 rules
 * @pipeline          indirect — library module
 * @usage             node tools/lib/docs-usefulness/accuracy-verifier.js [flags]
 */
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const DEFAULT_AS_OF_DATE = '2026-02-23';
const DEFAULT_VERIFY_SOURCES = ['github', 'deepwiki', 'official'];
const DEFAULT_TIME_SENSITIVE_FRESHNESS_DAYS = 365;
const DEFAULT_STATIC_FRESHNESS_DAYS = 730;
const CLAIM_EXTRACTION_MAX = 12;
const DEFAULT_GITHUB_CODE_RESULTS_PER_REPO = 2;
const DEFAULT_HTTP_TIMEOUT_MS = 10000;
const STOPWORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'to', 'of', 'in', 'on', 'for', 'with', 'from', 'that', 'this',
  'these', 'those', 'it', 'its', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'as', 'at',
  'by', 'can', 'could', 'should', 'would', 'may', 'might', 'will', 'must', 'does', 'do', 'did',
  'has', 'have', 'had', 'into', 'than', 'then', 'their', 'there', 'about', 'currently', 'latest',
  'livepeer'
]);

function toPosix(filePath) {
  return String(filePath || '').split(path.sep).join('/');
}

function repoRootFromModule() {
  return path.resolve(__dirname, '..', '..', '..');
}

function resolveRepoPath(...parts) {
  return path.join(repoRootFromModule(), ...parts);
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function loadAccuracySourceRegistry(customPath = null) {
  const registryPath = customPath || resolveRepoPath('tools', 'config', 'accuracy-source-registry.json');
  return readJson(registryPath);
}

function loadAccuracySourceWeights(customPath = null) {
  const weightsPath = customPath || resolveRepoPath('tools', 'config', 'accuracy-source-weights.json');
  return readJson(weightsPath);
}

function parseCsvList(value, fallback = []) {
  if (Array.isArray(value)) return value.map((v) => String(v).trim()).filter(Boolean);
  if (typeof value !== 'string') return [...fallback];
  const parts = value
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean);
  return parts.length > 0 ? parts : [...fallback];
}

function parseBoolean(value, fallback = false) {
  if (typeof value === 'boolean') return value;
  if (value === undefined || value === null || value === '') return fallback;
  const normalized = String(value).trim().toLowerCase();
  if (['true', '1', 'yes', 'y', 'on'].includes(normalized)) return true;
  if (['false', '0', 'no', 'n', 'off'].includes(normalized)) return false;
  return fallback;
}

function parseVerifySourcesOption(value, registry = null) {
  const reg = registry || loadAccuracySourceRegistry();
  const raw = parseCsvList(value, reg.default_verify_sources || DEFAULT_VERIFY_SOURCES);
  const allowed = new Set([
    'github',
    'deepwiki',
    'official',
    'openapi',
    'forum',
    'third_party'
  ]);
  return [...new Set(raw.filter((entry) => allowed.has(entry)))];
}

function normalizeIsoDate(value) {
  if (!value) return null;
  if (value instanceof Date && Number.isFinite(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  const parsed = new Date(String(value));
  if (!Number.isFinite(parsed.getTime())) return null;
  return parsed.toISOString().slice(0, 10);
}

function daysBetween(startIso, endIso) {
  if (!startIso || !endIso) return null;
  const start = new Date(`${startIso}T00:00:00Z`);
  const end = new Date(`${endIso}T00:00:00Z`);
  if (!Number.isFinite(start.getTime()) || !Number.isFinite(end.getTime())) return null;
  return Math.floor((end.getTime() - start.getTime()) / (24 * 60 * 60 * 1000));
}

function normalizeSupportsClaim(value) {
  if (value === true || value === false || value === 'partial') return value;
  const normalized = String(value || '').trim().toLowerCase();
  if (['true', 'support', 'supports', 'yes'].includes(normalized)) return true;
  if (['false', 'contradict', 'contradicts', 'no'].includes(normalized)) return false;
  if (['partial', 'mixed', 'unclear'].includes(normalized)) return 'partial';
  return 'partial';
}

function stableHash(input) {
  return crypto.createHash('sha256').update(String(input || ''), 'utf8').digest('hex');
}

function safeJsonParse(value, fallback = null) {
  try {
    return JSON.parse(String(value || ''));
  } catch (_error) {
    return fallback;
  }
}

function truncateText(text, max = 240) {
  const normalized = String(text || '').replace(/\s+/g, ' ').trim();
  if (normalized.length <= max) return normalized;
  return `${normalized.slice(0, Math.max(0, max - 1))}…`;
}

function claimKeywords(claimText, max = 6) {
  const tokens = String(claimText || '')
    .toLowerCase()
    .replace(/[^a-z0-9_\-/ ]+/g, ' ')
    .split(/\s+/)
    .map((t) => t.trim())
    .filter(Boolean)
    .filter((t) => t.length >= 3)
    .filter((t) => !STOPWORDS.has(t));

  const uniq = [...new Set(tokens)];
  return uniq.slice(0, max);
}

function overlapScore(aTokens, bText) {
  const tokens = new Set(
    String(bText || '')
      .toLowerCase()
      .replace(/[^a-z0-9_\-/ ]+/g, ' ')
      .split(/\s+/)
      .filter(Boolean)
  );
  if (!aTokens.length) return 0;
  let hits = 0;
  aTokens.forEach((token) => {
    if (tokens.has(token)) hits += 1;
  });
  return hits / aTokens.length;
}

function inferSupportFromText(claim, candidateText) {
  const text = String(candidateText || '');
  if (!text) return 'partial';
  const keywords = claimKeywords(claim.text || '', 8);
  const overlap = overlapScore(keywords, text);
  const lower = text.toLowerCase();
  const claimLower = String(claim.text || '').toLowerCase();
  const hasCurrentnessClaim = /\b(currently|latest|now)\b/.test(claimLower);
  const hasNegatingFreshness = /\b(deprecated|removed|obsolete|legacy|no longer)\b/.test(lower);
  if (hasCurrentnessClaim && hasNegatingFreshness) return false;
  if (overlap >= 0.45) return true;
  if (overlap > 0) return 'partial';
  return 'partial';
}

function inferGithubSourceTypeFromPath(filePath) {
  const rel = String(filePath || '').toLowerCase();
  if (!rel) return 'github_code';
  if (rel.endsWith('/readme.md') || rel === 'readme.md') return 'github_readme';
  if (/\/docs?\//.test(rel) || /\.(md|mdx)$/i.test(rel)) return 'github_docs';
  if (/\b(openapi|swagger)\b/.test(rel)) return 'github_spec';
  return 'github_code';
}

async function defaultFetchText(url, options = {}) {
  if (typeof fetch !== 'function') {
    throw new Error('global fetch is not available in this Node runtime');
  }
  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timeoutMs = Number.isFinite(Number(options.timeoutMs)) ? Number(options.timeoutMs) : DEFAULT_HTTP_TIMEOUT_MS;
  let timeoutId = null;
  if (controller) {
    timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  }
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: options.headers || {},
      signal: controller ? controller.signal : undefined
    });
    const text = await response.text();
    return {
      ok: response.ok,
      status: response.status,
      url: response.url || url,
      headers: Object.fromEntries(response.headers.entries()),
      text
    };
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
  }
}

function defaultGhApi(args, options = {}) {
  const output = execFileSync('gh', ['api', ...args], {
    encoding: 'utf8',
    timeout: Number.isFinite(Number(options.timeoutMs)) ? Number(options.timeoutMs) : DEFAULT_HTTP_TIMEOUT_MS * 2,
    maxBuffer: 5 * 1024 * 1024,
    stdio: ['ignore', 'pipe', 'pipe']
  });
  return safeJsonParse(output, null);
}

function extractTextMatchesFromGithubItem(item) {
  const matches = Array.isArray(item?.text_matches) ? item.text_matches : [];
  const fragments = matches
    .map((match) => String(match?.fragment || '').trim())
    .filter(Boolean);
  if (fragments.length > 0) return fragments.join(' | ');
  return '';
}

function buildGithubCodeSearchQuery(claim, repo) {
  const keywords = claimKeywords(claim.text, 6);
  const terms = [`repo:${repo}`];
  terms.push(...keywords);
  if (claim.time_sensitive) {
    terms.push('NOT', 'archived:true');
  }
  return terms.join(' ');
}

function buildDeepWikiUrlsForClaim(claim, context = {}, options = {}) {
  const urls = [];
  const baseUrl = String(options.deepwikiBaseUrl || 'https://deepwiki.com').replace(/\/+$/, '');
  const q = encodeURIComponent(claimKeywords(claim.text, 8).join(' ') || claim.text || '');
  if (q) {
    urls.push(`${baseUrl}/search?q=${q}`);
  }
  const githubRepos = parseCsvList(context.githubRepos, []);
  for (const repo of githubRepos.slice(0, 2)) {
    const normalized = repo.replace(/^https?:\/\/github\.com\//i, '').replace(/\.git$/i, '');
    if (/^[^/]+\/[^/]+$/.test(normalized)) {
      urls.push(`${baseUrl}/${normalized}`);
    }
  }
  return [...new Set(urls)];
}

function extractDateCandidatesFromText(text) {
  const candidates = [];
  const isoMatches = String(text || '').match(/\b20\d{2}-\d{2}-\d{2}\b/g) || [];
  isoMatches.forEach((value) => candidates.push(value));
  return [...new Set(candidates.map(normalizeIsoDate).filter(Boolean))];
}

async function collectGithubEvidence(claim, context = {}, options = {}) {
  const evidence = [];
  const errors = [];
  const verifySources = new Set(parseCsvList(context.verifySources, []));
  if (!verifySources.has('github')) return { evidence, errors };

  const ghApi = typeof options.ghApi === 'function' ? options.ghApi : defaultGhApi;
  const perRepo = Number.isFinite(Number(options.githubResultsPerRepo))
    ? Number(options.githubResultsPerRepo)
    : DEFAULT_GITHUB_CODE_RESULTS_PER_REPO;
  const repos = parseCsvList(context.githubRepos, []).slice(0, 6);
  if (repos.length === 0) return { evidence, errors };

  for (const repo of repos) {
    const q = buildGithubCodeSearchQuery(claim, repo);
    let payload = null;
    try {
      payload = ghApi(
        [
          'search/code',
          '-X', 'GET',
          '-H', 'Accept: application/vnd.github.text-match+json',
          '-f', `q=${q}`,
          '-f', `per_page=${perRepo}`
        ],
        { timeoutMs: context.verificationTimeoutMs }
      );
    } catch (error) {
      errors.push(`github ${repo}: ${error.message || String(error)}`);
      continue;
    }
    const items = Array.isArray(payload?.items) ? payload.items : [];
    for (const item of items) {
      const repoName = String(item?.repository?.full_name || repo);
      const itemPath = String(item?.path || '');
      const htmlUrl = String(item?.html_url || '').trim();
      const fragment = extractTextMatchesFromGithubItem(item);
      const excerpt = fragment || `${repoName}/${itemPath}`;
      evidence.push({
        source_type: inferGithubSourceTypeFromPath(itemPath),
        source_url: htmlUrl || `https://github.com/${repoName}/blob/HEAD/${itemPath}`,
        source_title: `${repoName}:${itemPath}`,
        source_date: normalizeIsoDate(item?.repository?.updated_at) || null,
        supports_claim: inferSupportFromText(claim, `${itemPath} ${fragment}`),
        evidence_excerpt: truncateText(excerpt, 400),
        claim_id: claim.id
      });
    }
  }

  return { evidence, errors };
}

async function collectDeepWikiEvidence(claim, context = {}, options = {}) {
  const evidence = [];
  const errors = [];
  const verifySources = new Set(parseCsvList(context.verifySources, []));
  if (!verifySources.has('deepwiki') || context.deepwikiEnabled === false) {
    return { evidence, errors };
  }

  const fetchText = typeof options.fetchText === 'function' ? options.fetchText : defaultFetchText;
  const urls = buildDeepWikiUrlsForClaim(claim, context, options);
  for (const url of urls.slice(0, 3)) {
    try {
      const response = await fetchText(url, {
        timeoutMs: context.verificationTimeoutMs,
        headers: {
          'User-Agent': 'livepeer-docs-usefulness-audit/1.0'
        }
      });
      if (!response?.ok) {
        errors.push(`deepwiki ${url}: HTTP ${response?.status || 'error'}`);
        continue;
      }
      const html = String(response.text || '');
      const stripped = html
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      const excerpt = truncateText(stripped, 400);
      if (!excerpt) continue;
      const dates = extractDateCandidatesFromText(stripped);
      evidence.push({
        source_type: 'deepwiki',
        source_url: response.url || url,
        source_title: 'DeepWiki',
        source_date: dates[dates.length - 1] || null,
        supports_claim: inferSupportFromText(claim, stripped),
        evidence_excerpt: excerpt,
        claim_id: claim.id
      });
    } catch (error) {
      errors.push(`deepwiki ${url}: ${error.message || String(error)}`);
    }
  }

  return { evidence, errors };
}

function buildOfficialDocsUrlsForClaim(claim, context = {}, options = {}) {
  const baseUrl = String(options.officialDocsBaseUrl || 'https://docs.livepeer.org').replace(/\/+$/, '');
  const urls = [];
  if (context.routePath) {
    const route = String(context.routePath).trim();
    if (route.startsWith('/')) urls.push(`${baseUrl}${route}`);
    else urls.push(`${baseUrl}/${route}`);
  }
  if (context.pagePath) {
    let route = `/${String(context.pagePath).replace(/\\/g, '/').replace(/^v2\//, 'v2/').replace(/\.mdx$/i, '')}`;
    route = route.replace(/\/index$/i, '');
    urls.push(`${baseUrl}${route}`);
  }
  return [...new Set(urls)];
}

async function collectOfficialEvidence(claim, context = {}, options = {}) {
  const evidence = [];
  const errors = [];
  const verifySources = new Set(parseCsvList(context.verifySources, []));
  if (!verifySources.has('official') && !verifySources.has('openapi')) {
    return { evidence, errors };
  }
  const fetchText = typeof options.fetchText === 'function' ? options.fetchText : defaultFetchText;
  const urls = buildOfficialDocsUrlsForClaim(claim, context, options);
  for (const url of urls.slice(0, 2)) {
    try {
      const response = await fetchText(url, {
        timeoutMs: context.verificationTimeoutMs,
        headers: {
          'User-Agent': 'livepeer-docs-usefulness-audit/1.0'
        }
      });
      if (!response?.ok) {
        errors.push(`official ${url}: HTTP ${response?.status || 'error'}`);
        continue;
      }
      const html = String(response.text || '');
      const stripped = html
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      const excerpt = truncateText(stripped, 400);
      if (!excerpt) continue;
      const dates = extractDateCandidatesFromText(stripped);
      const sourceType = /\b(openapi|swagger|endpoint)\b/i.test(claim.text || '') ? 'openapi' : 'official_docs';
      evidence.push({
        source_type: sourceType,
        source_url: response.url || url,
        source_title: 'Livepeer Docs',
        source_date: dates[dates.length - 1] || null,
        supports_claim: inferSupportFromText(claim, stripped),
        evidence_excerpt: excerpt,
        claim_id: claim.id
      });
    } catch (error) {
      errors.push(`official ${url}: ${error.message || String(error)}`);
    }
  }
  return { evidence, errors };
}

function createLiveQueryClaimEvidence(options = {}) {
  const adapterOptions = {
    ghApi: options.ghApi,
    fetchText: options.fetchText,
    githubResultsPerRepo: options.githubResultsPerRepo,
    deepwikiBaseUrl: options.deepwikiBaseUrl,
    officialDocsBaseUrl: options.officialDocsBaseUrl
  };

  return async function queryClaimEvidence(claim, context = {}) {
    const evidence = [];
    const errors = [];
    const collectors = [
      collectGithubEvidence,
      collectOfficialEvidence,
      collectDeepWikiEvidence
    ];
    for (const collector of collectors) {
      const result = await collector(claim, context, adapterOptions);
      if (Array.isArray(result?.evidence)) evidence.push(...result.evidence);
      if (Array.isArray(result?.errors)) errors.push(...result.errors);
    }
    return { evidence, errors };
  };
}

function normalizeWeightKeyForSourceType(sourceType, registry) {
  const reg = registry || loadAccuracySourceRegistry();
  const sourceTypes = reg.source_types || {};
  const aliases = reg.aliases || {};
  if (sourceTypes[sourceType] && sourceTypes[sourceType].weight_key) {
    return sourceTypes[sourceType].weight_key;
  }
  if (aliases[sourceType] && sourceTypes[aliases[sourceType]]) {
    return sourceTypes[aliases[sourceType]].weight_key;
  }
  if (aliases[sourceType]) return aliases[sourceType];
  return sourceType;
}

function normalizeSourceType(sourceType, registry) {
  const reg = registry || loadAccuracySourceRegistry();
  if ((reg.source_types || {})[sourceType]) return sourceType;
  const aliasTarget = (reg.aliases || {})[sourceType];
  if (aliasTarget && (reg.source_types || {})[aliasTarget]) return aliasTarget;
  return sourceType;
}

function getTierForSourceType(sourceType, registry) {
  const reg = registry || loadAccuracySourceRegistry();
  const normalized = normalizeSourceType(sourceType, reg);
  return reg.source_types?.[normalized]?.tier || null;
}

function getWeightForSourceType(sourceType, registry, weights) {
  const reg = registry || loadAccuracySourceRegistry();
  const weightConfig = weights || loadAccuracySourceWeights();
  const weightKey = normalizeWeightKeyForSourceType(sourceType, reg);
  const table = weightConfig.weights || weightConfig;
  const value = Number(table[weightKey]);
  return Number.isFinite(value) ? value : 0;
}

function buildVerificationSourceRecord(raw, options = {}) {
  const registry = options.registry || loadAccuracySourceRegistry(options.registryPath);
  const weights = options.weights || loadAccuracySourceWeights(options.weightsPath);
  const claimId = raw.claim_id || options.claimId || null;
  const normalizedSourceType = normalizeSourceType(String(raw.source_type || '').trim(), registry);
  const supportsClaim = normalizeSupportsClaim(raw.supports_claim);
  const sourceDate = normalizeIsoDate(raw.source_date);
  const retrievedAt = raw.retrieved_at ? new Date(raw.retrieved_at).toISOString() : new Date().toISOString();
  const confidenceWeight = Number.isFinite(Number(raw.confidence_weight))
    ? Number(raw.confidence_weight)
    : getWeightForSourceType(normalizedSourceType, registry, weights);
  const normalized = {
    source_type: normalizedSourceType,
    source_url: String(raw.source_url || '').trim(),
    source_title: String(raw.source_title || '').trim(),
    retrieved_at: retrievedAt,
    source_date: sourceDate,
    supports_claim: supportsClaim,
    confidence_weight: confidenceWeight,
    evidence_excerpt: String(raw.evidence_excerpt || '').trim().slice(0, 500),
    claim_id: claimId,
    tier: getTierForSourceType(normalizedSourceType, registry)
  };

  const hashPayload = JSON.stringify({
    claim_id: normalized.claim_id,
    source_type: normalized.source_type,
    source_url: normalized.source_url,
    source_date: normalized.source_date,
    supports_claim: normalized.supports_claim,
    evidence_excerpt: normalized.evidence_excerpt
  });
  normalized.evidence_hash = raw.evidence_hash || stableHash(hashPayload);
  return normalized;
}

function sourceContribution(record) {
  if (!record || !Number.isFinite(record.confidence_weight)) return 0;
  if (record.supports_claim === true) return record.confidence_weight;
  if (record.supports_claim === 'partial') return record.confidence_weight * 0.5;
  return 0;
}

function dedupeBy(items, keyFn) {
  const seen = new Set();
  const out = [];
  for (const item of items || []) {
    const key = keyFn(item);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

function minMaxSourceDates(records) {
  const dates = (records || [])
    .map((record) => normalizeIsoDate(record.source_date))
    .filter(Boolean)
    .sort();
  if (dates.length === 0) {
    return { latest: null, oldest: null };
  }
  return { oldest: dates[0], latest: dates[dates.length - 1] };
}

function buildConflictRecord(claim, support, conflict, resolution) {
  return {
    claim_id: claim.id,
    claim_text: claim.text,
    supporting_source_type: support ? support.source_type : null,
    supporting_source_url: support ? support.source_url : null,
    conflicting_source_type: conflict ? conflict.source_type : null,
    conflicting_source_url: conflict ? conflict.source_url : null,
    resolution
  };
}

function inferPreferredSourceTypesForClaim(claim) {
  const text = String(claim.text || '').toLowerCase();
  const preferred = new Set();

  if (/\b(api|endpoint|request|response|openapi|sdk|cli)\b/.test(text)) {
    preferred.add('openapi');
    preferred.add('official');
    preferred.add('github');
  }
  if (/\b(contract|protocol|validator|orchestrator|delegator|gateway|token|staking)\b/.test(text)) {
    preferred.add('github');
    preferred.add('official');
  }
  if (/\bdocs|guide|tutorial|quickstart|feature|supports|compatibility\b/.test(text)) {
    preferred.add('official');
    preferred.add('github');
  }

  preferred.add('deepwiki');
  preferred.add('official');
  preferred.add('github');

  return [...preferred];
}

function stripFrontmatter(content) {
  return String(content || '').replace(/^---\s*\n[\s\S]*?\n---\s*\n/, '');
}

function stripCodeAndImports(content) {
  let text = stripFrontmatter(content);
  text = text.replace(/^import\s.+$/gm, '');
  text = text.replace(/```[\s\S]*?```/g, ' ');
  text = text.replace(/`[^`]+`/g, ' ');
  text = text.replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ');
  text = text.replace(/<[^>]+>/g, ' ');
  return text;
}

function splitSentences(text) {
  return String(text || '')
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function isLikelyClaimSentence(sentence) {
  if (!sentence || sentence.length < 25) return false;
  if (/^(todo|tbd|note:|coming soon)/i.test(sentence)) return false;
  if (!/[A-Za-z]/.test(sentence)) return false;
  return (
    /\b(is|are|was|were|supports?|uses?|runs?|requires?|must|can|will|enables?|provides?|contains?|includes?|means|refers to)\b/i.test(sentence) ||
    /\b(currently|today|latest|now|as of|deprecated|migration|version|release)\b/i.test(sentence) ||
    /\b20\d{2}\b/.test(sentence)
  );
}

function isTimeSensitiveSentence(sentence) {
  return /\b(currently|today|latest|now|as of|deprecated|roadmap|upcoming|release|version|migrated|launch|202[0-9])\b/i.test(sentence);
}

function extractTier1Claims(options = {}) {
  const content = String(options.content || '');
  const maxClaims = Number.isFinite(Number(options.maxClaims)) ? Number(options.maxClaims) : CLAIM_EXTRACTION_MAX;
  const pagePath = String(options.pagePath || options.filePath || '');
  const stripped = stripCodeAndImports(content);
  const sentences = splitSentences(stripped);
  const claims = [];

  for (const sentence of sentences) {
    if (!isLikelyClaimSentence(sentence)) continue;
    const text = sentence.replace(/\s+/g, ' ').trim();
    const claimId = stableHash(`${pagePath}::${text}`).slice(0, 16);
    claims.push({
      id: claimId,
      text,
      time_sensitive: isTimeSensitiveSentence(text),
      preferred_source_types: inferPreferredSourceTypesForClaim({ text })
    });
    if (claims.length >= maxClaims) break;
  }

  return claims;
}

function evaluateClaimAccuracy(input = {}) {
  const claim = input.claim || { id: 'unknown', text: '' };
  const registry = input.registry || loadAccuracySourceRegistry(input.registryPath);
  const weights = input.weights || loadAccuracySourceWeights(input.weightsPath);
  const asOfDate = normalizeIsoDate(input.asOfDate || DEFAULT_AS_OF_DATE) || DEFAULT_AS_OF_DATE;
  const defaults = registry.decision_defaults || {};
  const timeFreshnessDays = Number.isFinite(Number(input.timeSensitiveFreshnessDays))
    ? Number(input.timeSensitiveFreshnessDays)
    : Number(defaults.time_sensitive_freshness_days) || DEFAULT_TIME_SENSITIVE_FRESHNESS_DAYS;
  const staticFreshnessDays = Number.isFinite(Number(input.staticFreshnessDays))
    ? Number(input.staticFreshnessDays)
    : Number(defaults.default_freshness_days) || DEFAULT_STATIC_FRESHNESS_DAYS;
  const verifiedMinSupport = Number.isFinite(Number(input.verifiedMinCombinedSupport))
    ? Number(input.verifiedMinCombinedSupport)
    : Number(defaults.verified_min_combined_support) || 0.9;
  const provisionalMinSupport = Number.isFinite(Number(input.provisionalMinCombinedSupport))
    ? Number(input.provisionalMinCombinedSupport)
    : Number(defaults.provisional_min_combined_support) || 0.5;

  const evidence = (input.evidence || []).map((raw) => buildVerificationSourceRecord(raw, {
    registry,
    weights,
    claimId: claim.id
  }));

  const supporting = evidence.filter((record) => record.supports_claim === true || record.supports_claim === 'partial');
  const contradicting = evidence.filter((record) => record.supports_claim === false);
  const supportContributions = supporting.map((record) => sourceContribution(record));
  const supportWeightRaw = supportContributions.reduce((sum, value) => sum + value, 0);
  const supportWeight = Number(Math.min(1.5, supportWeightRaw).toFixed(4));
  const strongestSupport = supporting.reduce((best, record) => {
    const contribution = sourceContribution(record);
    if (!best || contribution > best.contribution) return { record, contribution };
    return best;
  }, null);
  const strongestContradiction = contradicting.reduce((best, record) => {
    const weight = Number(record.confidence_weight) || 0;
    if (!best || weight > best.weight) return { record, weight };
    return best;
  }, null);

  const hasTierASupport = supporting.some((record) => record.tier === 'A');
  const onlyTierBSupport = supporting.length > 0 && supporting.every((record) => record.tier === 'B');
  const supportDates = minMaxSourceDates(supporting);
  const newestSupportAgeDays = supportDates.latest ? daysBetween(supportDates.latest, asOfDate) : null;
  const freshnessThreshold = claim.time_sensitive ? timeFreshnessDays : staticFreshnessDays;
  const providerErrors = Array.isArray(input.providerErrors) ? input.providerErrors : [];
  let staleRisk = false;
  if (claim.time_sensitive) {
    staleRisk = !supportDates.latest || newestSupportAgeDays === null || newestSupportAgeDays > freshnessThreshold;
  }

  const sourceConflicts = [];
  let contradicted = false;
  if (contradicting.length > 0) {
    if (!strongestSupport) {
      contradicted = true;
    } else {
      for (const conflictSource of contradicting) {
        const conflictWeight = Number(conflictSource.confidence_weight) || 0;
        const supportWeightForCompare = strongestSupport.contribution;
        if (conflictWeight > supportWeightForCompare) {
          contradicted = true;
          sourceConflicts.push(buildConflictRecord(claim, strongestSupport.record, conflictSource, 'higher_weight_conflict_overrides'));
        } else {
          sourceConflicts.push(buildConflictRecord(claim, strongestSupport.record, conflictSource, 'canonical_or_higher_support_wins'));
        }
      }
    }
  }

  let status = 'provisional';
  const degradedByProviderFailure = providerErrors.length > 0 && supporting.length === 0 && !contradicted;
  if (contradicted) {
    status = 'contradicted';
  } else if (staleRisk && !degradedByProviderFailure) {
    status = 'stale_risk';
  } else if (supportWeight >= verifiedMinSupport && hasTierASupport) {
    status = 'verified_2026';
  } else if (supportWeight >= provisionalMinSupport || supporting.length > 0) {
    status = 'provisional';
  } else {
    status = 'provisional';
  }

  let confidence = 0.15;
  if (supporting.length > 0) {
    confidence = Math.min(1, supportWeight);
    if (hasTierASupport) {
      confidence = Math.max(confidence, status === 'verified_2026' ? 0.9 : 0.55);
    } else if (onlyTierBSupport) {
      confidence = Math.min(confidence, 0.65);
      confidence = Math.max(confidence, 0.45);
    }
  }
  if (status === 'stale_risk') confidence = Math.min(confidence, 0.49);
  if (status === 'contradicted') confidence = Math.min(Math.max(confidence, 0.1), 0.25);
  if (sourceConflicts.length > 0 && status !== 'contradicted') confidence = Math.min(confidence, 0.89);
  confidence = Number(confidence.toFixed(3));

  const notes = [];
  if (status === 'verified_2026') {
    notes.push('Verified using Tier A source support.');
  } else if (degradedByProviderFailure) {
    notes.push('Tier 2 source fetch unavailable; degraded to provisional status.');
  } else if (status === 'stale_risk') {
    notes.push('Time-sensitive claim has missing or stale supporting evidence.');
  } else if (status === 'contradicted') {
    notes.push('Higher-weight conflicting source contradicts the claim.');
  } else if (onlyTierBSupport) {
    notes.push('Supported only by corroborating sources; Tier A source required for verified_2026.');
  } else if (supporting.length === 0) {
    notes.push('No supporting external evidence found; provisional status retained.');
  } else {
    notes.push('Partial or below-threshold support; provisional status retained.');
  }
  if (sourceConflicts.length > 0) {
    notes.push('Conflicting evidence detected and resolved by source weighting.');
  }

  return {
    claim_id: claim.id,
    claim_text: claim.text,
    time_sensitive: Boolean(claim.time_sensitive),
    preferred_source_types: claim.preferred_source_types || inferPreferredSourceTypesForClaim(claim),
    accuracy_2026_status: status,
    accuracy_2026_confidence: confidence,
    verification_sources: evidence,
    source_conflicts: sourceConflicts,
    source_types_used: [...new Set(evidence.map((record) => record.source_type).filter(Boolean))].sort(),
    source_freshness_latest_date: supportDates.latest,
    source_freshness_oldest_date: supportDates.oldest,
    verification_notes: notes.join(' '),
    support_weight: supportWeight,
    has_tier_a_support: hasTierASupport,
    provider_errors: providerErrors
  };
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function createVerificationCache(cacheDir) {
  const dir = cacheDir ? path.resolve(cacheDir) : null;
  if (dir) ensureDir(dir);

  function fileForKey(key) {
    return dir ? path.join(dir, `${stableHash(key)}.json`) : null;
  }

  return {
    dir,
    get(key) {
      if (!dir) return null;
      const filePath = fileForKey(key);
      if (!filePath || !fs.existsSync(filePath)) return null;
      try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
      } catch (_error) {
        return null;
      }
    },
    set(key, value) {
      if (!dir) return;
      const filePath = fileForKey(key);
      fs.writeFileSync(filePath, JSON.stringify(value, null, 2));
    }
  };
}

function buildClaimCacheKey(claim, context = {}) {
  return JSON.stringify({
    claim_id: claim.id,
    claim_text: claim.text,
    as_of: normalizeIsoDate(context.asOfDate || DEFAULT_AS_OF_DATE),
    verify_sources: (context.verifySources || []).slice().sort(),
    github_repos: (context.githubRepos || []).slice().sort(),
    deepwiki_enabled: Boolean(context.deepwikiEnabled)
  });
}

function createTier2Provider(options = {}) {
  const cache = options.cache || null;
  const fixturesByClaimId = options.fixturesByClaimId || {};
  const queryClaimEvidence = typeof options.queryClaimEvidence === 'function' ? options.queryClaimEvidence : null;
  const maxRequests = Number.isFinite(Number(options.maxRequests)) ? Number(options.maxRequests) : 50;
  let requestCount = 0;

  async function fetchEvidenceForClaim(claim, context = {}) {
    const cacheKey = buildClaimCacheKey(claim, context);
    if (cache) {
      const cached = cache.get(cacheKey);
      if (cached) {
        return { ...cached, from_cache: true };
      }
    }

    if (fixturesByClaimId[claim.id]) {
      const fixtureResult = {
        evidence: fixturesByClaimId[claim.id].evidence || [],
        errors: fixturesByClaimId[claim.id].errors || []
      };
      if (cache) cache.set(cacheKey, fixtureResult);
      return { ...fixtureResult, from_cache: false };
    }

    if (!queryClaimEvidence) {
      return { evidence: [], errors: [] };
    }
    if (requestCount >= maxRequests) {
      return { evidence: [], errors: ['verification request limit reached'] };
    }

    requestCount += 1;
    try {
      const result = await queryClaimEvidence(claim, context);
      const normalized = {
        evidence: Array.isArray(result?.evidence) ? result.evidence : [],
        errors: Array.isArray(result?.errors) ? result.errors : []
      };
      if (cache) cache.set(cacheKey, normalized);
      return { ...normalized, from_cache: false };
    } catch (error) {
      return { evidence: [], errors: [error.message || String(error)] };
    }
  }

  return { fetchEvidenceForClaim };
}

function createLiveTier2Provider(options = {}) {
  return createTier2Provider({
    cache: options.cache,
    fixturesByClaimId: options.fixturesByClaimId,
    maxRequests: options.maxRequests,
    queryClaimEvidence: createLiveQueryClaimEvidence(options)
  });
}

function aggregatePageAccuracy(claimResults, options = {}) {
  const asOfDate = normalizeIsoDate(options.asOfDate || DEFAULT_AS_OF_DATE) || DEFAULT_AS_OF_DATE;
  const results = Array.isArray(claimResults) ? claimResults : [];
  const allSources = dedupeBy(
    results.flatMap((result) => result.verification_sources || []),
    (record) => record.evidence_hash || `${record.claim_id}:${record.source_url}:${record.supports_claim}`
  );
  const allConflicts = results.flatMap((result) => result.source_conflicts || []);
  const providerErrors = [...new Set(results.flatMap((result) => result.provider_errors || []))];
  const sourceDates = minMaxSourceDates(allSources.filter((record) => record.supports_claim !== false));
  const statuses = results.map((result) => result.accuracy_2026_status);

  let pageStatus = 'provisional';
  if (statuses.includes('contradicted')) pageStatus = 'contradicted';
  else if (statuses.includes('stale_risk')) pageStatus = 'stale_risk';
  else if (results.length > 0 && statuses.every((status) => status === 'verified_2026')) pageStatus = 'verified_2026';
  else pageStatus = 'provisional';

  let weightedSum = 0;
  let weightTotal = 0;
  for (const result of results) {
    const weight = result.time_sensitive ? 1.5 : 1;
    weightedSum += (Number(result.accuracy_2026_confidence) || 0) * weight;
    weightTotal += weight;
  }
  let pageConfidence = weightTotal > 0 ? weightedSum / weightTotal : 0.15;
  if (pageStatus === 'contradicted') pageConfidence = Math.min(pageConfidence, 0.25);
  if (pageStatus === 'stale_risk') pageConfidence = Math.min(pageConfidence, 0.49);
  pageConfidence = Number(pageConfidence.toFixed(3));

  const flags = [];
  if (allConflicts.length > 0) flags.push('source_conflict');
  if (allConflicts.length > 0) flags.push('accuracy_needs_review');
  if (providerErrors.length > 0) flags.push('accuracy_needs_review');
  if (pageStatus === 'stale_risk' || pageStatus === 'contradicted') flags.push('accuracy_needs_review');
  if (pageStatus === 'provisional' && pageConfidence < 0.9) flags.push('accuracy_needs_review');

  const verifiedCount = statuses.filter((status) => status === 'verified_2026').length;
  const notes = [];
  if (results.length === 0) {
    notes.push(`No extractable claims found; provisional status as of ${asOfDate}.`);
  } else {
    notes.push(`Verified ${verifiedCount}/${results.length} extracted claim(s) as of ${asOfDate}.`);
  }
  if (allConflicts.length > 0) {
    notes.push(`${allConflicts.length} source conflict(s) detected and resolved by weighting.`);
  }
  if (providerErrors.length > 0) {
    notes.push(`Tier 2 source fetch degraded (${providerErrors.length} error(s)); provisional fallbacks may remain.`);
  }

  return {
    accuracy_2026_status: pageStatus,
    accuracy_2026_confidence: pageConfidence,
    verification_sources: allSources,
    source_conflicts: allConflicts,
    source_types_used: [...new Set(allSources.map((record) => record.source_type).filter(Boolean))].sort(),
    source_freshness_latest_date: sourceDates.latest,
    source_freshness_oldest_date: sourceDates.oldest,
    verification_notes: notes.join(' '),
    flags: [...new Set(flags)],
    claim_results: results,
    provider_errors: providerErrors
  };
}

async function verifyPageAccuracy(options = {}) {
  const registry = options.registry || loadAccuracySourceRegistry(options.registryPath);
  const weights = options.weights || loadAccuracySourceWeights(options.weightsPath);
  const asOfDate = normalizeIsoDate(options.asOfDate || DEFAULT_AS_OF_DATE) || DEFAULT_AS_OF_DATE;
  const accuracyMode = String(options.accuracyMode || 'tiered');
  const verifySources = parseVerifySourcesOption(options.verifySources, registry);
  const deepwikiEnabled = parseBoolean(options.deepwikiEnabled, true);
  const githubRepos = parseCsvList(options.githubRepos, []);

  let claims = Array.isArray(options.claims) ? options.claims : [];
  if (claims.length === 0 && typeof options.content === 'string') {
    claims = extractTier1Claims({
      content: options.content,
      pagePath: options.pagePath || options.filePath,
      maxClaims: options.maxClaims
    });
  }
  claims = claims.map((claim) => ({
    ...claim,
    preferred_source_types: Array.isArray(claim.preferred_source_types) && claim.preferred_source_types.length > 0
      ? claim.preferred_source_types
      : inferPreferredSourceTypesForClaim(claim)
  }));

  const cache = options.cache || (options.cacheDir ? createVerificationCache(options.cacheDir) : null);
  const provider = options.tier2Provider || createTier2Provider({
    cache,
    fixturesByClaimId: options.fixturesByClaimId,
    queryClaimEvidence: options.queryClaimEvidence,
    maxRequests: options.verificationMaxRequests
  });

  const claimResults = [];

  for (const claim of claims) {
    let providerEvidence = [];
    let providerErrors = [];

    if (accuracyMode === 'tiered' || accuracyMode === 'live') {
      try {
        const tier2 = await provider.fetchEvidenceForClaim(claim, {
          asOfDate,
          verifySources,
          githubRepos,
          deepwikiEnabled,
          verificationTimeoutMs: options.verificationTimeoutMs,
          pagePath: options.pagePath || options.filePath || null,
          routePath: options.routePath || null
        });
        providerEvidence = Array.isArray(tier2?.evidence) ? tier2.evidence : [];
        providerErrors = Array.isArray(tier2?.errors) ? tier2.errors : [];
      } catch (error) {
        providerErrors = [error.message || String(error)];
      }
    }

    const result = evaluateClaimAccuracy({
      claim,
      evidence: providerEvidence,
      providerErrors,
      registry,
      weights,
      asOfDate,
      timeSensitiveFreshnessDays: options.timeSensitiveFreshnessDays,
      staticFreshnessDays: options.staticFreshnessDays
    });
    claimResults.push(result);
  }

  return {
    claims,
    ...aggregatePageAccuracy(claimResults, { asOfDate })
  };
}

module.exports = {
  DEFAULT_AS_OF_DATE,
  DEFAULT_VERIFY_SOURCES,
  createLiveQueryClaimEvidence,
  createLiveTier2Provider,
  createTier2Provider,
  createVerificationCache,
  buildVerificationSourceRecord,
  buildClaimCacheKey,
  parseBoolean,
  parseCsvList,
  parseVerifySourcesOption,
  extractTier1Claims,
  inferPreferredSourceTypesForClaim,
  evaluateClaimAccuracy,
  aggregatePageAccuracy,
  verifyPageAccuracy,
  loadAccuracySourceRegistry,
  loadAccuracySourceWeights,
  normalizeIsoDate,
  stableHash,
  toPosix
};
