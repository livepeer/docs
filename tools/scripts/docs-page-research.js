#!/usr/bin/env node
/**
 * @script            docs-page-research
 * @category          validator
 * @purpose           governance:agent-governance
 * @scope             tools/scripts, tasks/research/claims, tests/unit/docs-page-research.test.js, tasks/reports/repo-ops
 * @domain            docs
 * @needs             R-R27, R-R30
 * @purpose-statement Docs page research runner — extracts factual claims from docs pages, checks evidence sources, detects contradictions across related pages, and emits manual-first research reports.
 * @pipeline          manual — experimental research system
 * @usage             node tools/scripts/docs-page-research.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const crypto = require('crypto');
const { loadRegistry, flattenClaimFamilies } = require('./docs-fact-registry');

const DEFAULT_REGISTRY = 'tasks/research/claims';
const GENERIC_PATH_TOKENS = new Set([
  'and',
  'mdx',
  'v2',
  'guides',
  'guide',
  'setup',
  'resources',
  'resource',
  'concepts',
  'concept',
  'quickstart',
  'payments',
  'payment',
  'pricing',
  'funding',
  'roadmap',
  'pricing',
  'details',
  'deployment',
  'monitoring',
  'tooling',
  'operator',
  'operators',
  'gateway',
  'gateways',
  'orchestrator',
  'orchestrators',
  'current',
  'page',
  'docs'
]);
const INFERENCE_EXCLUDED_BASENAMES = new Set(['review', 'to', 'sources', 'source', 'index', 'funding']);
const EVIDENCE_TYPE_PRIORITY = {
  'official-page': 100,
  'repo-file': 90,
  'repo-v1-file': 88,
  'github-release': 80,
  'github-pr': 70,
  'github-issue': 65,
  'github-repo': 60,
  'forum-topic': 50,
  'deepwiki-page': 44,
  'repo-context-file': 42,
  'repo-archive-file': 40,
  'repo-discord-signal': 35
};
const DISCOVERY_LANE_PATTERNS = {
  v1: [/^v1\//],
  context: [/\/_contextData(?:_)?\//, /\/_plans-and-research\//, /\/_workspace\/research\//],
  archive: [/^v2\/x-archived\//, /\/x-archived\//]
};
const GITHUB_DISCOVERY_ORG = 'livepeer';
const MAX_DISCOVERED_REPO_REFS = 4;
const MAX_DISCOVERED_GITHUB_REFS = 4;
const MAX_DISCOVERED_DEEPWIKI_REFS = 3;
const FETCH_TIMEOUT_MS = 4000;
const FETCH_CACHE = new Map();
const CURRENT_LANGUAGE_PATTERNS = [
  /\bcurrent(?:ly)?\b/gi,
  /\btoday\b/gi,
  /\bsupported?\b/gi,
  /\brecommended?\b/gi,
  /\bviab(?:le|ility)\b/gi,
  /\bworth it\b/gi,
  /\bactive\b/gi,
  /\bproduction\b/gi,
  /\bgeneral availability\b/gi,
  /\bga\b/gi
];
const HISTORICAL_LANGUAGE_PATTERNS = [
  /\bhistorical(?:ly)?\b/gi,
  /\bprevious(?:ly)?\b/gi,
  /\bdeprecated\b/gi,
  /\bno longer\b/gi,
  /\bnot yet\b/gi,
  /\bin development\b/gi,
  /\bearly 20\d{2}\b/gi
];
const FORUM_STATUS_PATTERNS = [
  /\bprogram(?:me)?\b/gi,
  /\bfunding\b/gi,
  /\bgrant\b/gi,
  /\bcohort\b/gi,
  /\bmilestone\b/gi,
  /\bgovernance\b/gi,
  /\bspe\b/gi,
  /\bstartup\b/gi,
  /\boperator support\b/gi,
  /\bsupport status\b/gi,
  /\bprogramme status\b/gi
];
const IMPLEMENTATION_STATUS_PATTERNS = [
  /\bgithub\b/gi,
  /\bprotocol\b/gi,
  /\bremote signer\b/gi,
  /\bclearinghouse\b/gi,
  /\brelease\b/gi,
  /\bpr\b/gi,
  /\bissue\b/gi,
  /\bsupport boundary\b/gi,
  /\bcurrent scope\b/gi
];
const MAX_DISCORD_SELECTION_SCORE = 59;

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function repoRelative(absPath) {
  return toPosix(path.relative(repoRoot(), absPath));
}

function repoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], {
    cwd: process.cwd(),
    encoding: 'utf8'
  });
  if (result.status === 0 && String(result.stdout || '').trim()) {
    return String(result.stdout || '').trim();
  }
  return process.cwd();
}

function resetCaches() {
  FETCH_CACHE.clear();
  REPO_DISCOVERY_FILE_CACHE.clear();
}

function discoveryDisabled() {
  return ['1', 'true', 'yes'].includes(String(process.env.DOCS_RESEARCH_DISABLE_DISCOVERY || '').trim().toLowerCase());
}

function remoteDiscoveryDisabled() {
  return discoveryDisabled() || ['1', 'true', 'yes'].includes(String(process.env.DOCS_RESEARCH_DISABLE_REMOTE_DISCOVERY || '').trim().toLowerCase());
}

function usage() {
  console.log(
    [
      'Usage: node tools/scripts/docs-page-research.js [options]',
      '',
      'Options:',
      '  --registry <path>       Registry file or directory (default: tasks/research/claims)',
      '  --page <path>           Single page path',
      '  --files <a,b,c>         Explicit file list',
      '  --report-md <path>      Write markdown report',
      '  --report-json <path>    Write json report',
      '  --quiet                 Suppress success logs',
      '  --help                  Show help'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const out = {
    registry: DEFAULT_REGISTRY,
    page: '',
    files: [],
    reportMd: '',
    reportJson: '',
    quiet: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--help' || token === '-h') {
      out.help = true;
      continue;
    }
    if (token === '--registry') {
      out.registry = String(argv[i + 1] || '').trim() || out.registry;
      i += 1;
      continue;
    }
    if (token.startsWith('--registry=')) {
      out.registry = token.slice('--registry='.length).trim() || out.registry;
      continue;
    }
    if (token === '--page') {
      out.page = toPosix(String(argv[i + 1] || '').trim());
      i += 1;
      continue;
    }
    if (token.startsWith('--page=')) {
      out.page = toPosix(token.slice('--page='.length).trim());
      continue;
    }
    if (token === '--files') {
      out.files = String(argv[i + 1] || '')
        .split(',')
        .map((entry) => toPosix(entry.trim()))
        .filter(Boolean);
      i += 1;
      continue;
    }
    if (token.startsWith('--files=')) {
      out.files = token
        .slice('--files='.length)
        .split(',')
        .map((entry) => toPosix(entry.trim()))
        .filter(Boolean);
      continue;
    }
    if (token === '--report-md') {
      out.reportMd = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--report-md=')) {
      out.reportMd = token.slice('--report-md='.length).trim();
      continue;
    }
    if (token === '--report-json') {
      out.reportJson = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--report-json=')) {
      out.reportJson = token.slice('--report-json='.length).trim();
      continue;
    }
    if (token === '--quiet') {
      out.quiet = true;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (out.page && out.files.length) {
    throw new Error('Use either --page or --files, not both');
  }
  if (!out.page && out.files.length === 0) {
    throw new Error('Use --page or --files');
  }
  return out;
}

function readFile(absPath) {
  return fs.readFileSync(absPath, 'utf8');
}

function writeJson(absPath, value) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function writeText(absPath, value) {
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, value, 'utf8');
}

function fileExists(relPath) {
  return fs.existsSync(path.resolve(repoRoot(), relPath));
}

function stripMdx(content) {
  return content
    .replace(/^---[\s\S]*?---\n?/m, '')
    .replace(/^import\s.+$/gm, '')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')
    .replace(/<[^>\n]+>/g, ' ')
    .replace(/\[[^\]]+\]\([^)]+\)/g, ' ')
    .replace(/\*\*/g, '')
    .replace(/[_#>*|-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function splitSentences(text) {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((entry) => entry.trim())
    .filter((entry) => entry.length >= 20);
}

function looksMaterialClaim(sentence) {
  const lower = sentence.toLowerCase();
  const hasNumber = /\b\d/.test(sentence);
  const riskyTerm = /(current|currently|supported|minimum|requires|must|active set|top 100|reward|vram|stake|discord|forum|github|fee|latency|profit|program|milestone|pipeline|service uri)/i.test(
    sentence
  );
  return hasNumber || riskyTerm;
}

function extractClaimsFromContent(content, limit = 15) {
  return splitSentences(stripMdx(content))
    .filter(looksMaterialClaim)
    .slice(0, limit);
}

function normalizeSnippet(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function extractObservationSnippets(content, matchTerms, limit = 4) {
  const sentences = splitSentences(stripMdx(content));
  const lowerTerms = matchTerms.map((entry) => entry.toLowerCase());
  const out = [];

  sentences.forEach((sentence) => {
    const lower = sentence.toLowerCase();
    if (lowerTerms.some((term) => lower.includes(term))) {
      out.push(normalizeSnippet(sentence));
    }
  });

  return [...new Set(out)].slice(0, limit);
}

function extractPatternValues(snippets, patterns) {
  const values = [];
  patterns.forEach((pattern) => {
    const re = new RegExp(pattern, 'gi');
    snippets.forEach((snippet) => {
      const matches = snippet.match(re);
      if (matches) {
        matches.forEach((match) => values.push(normalizeSnippet(match)));
      }
    });
  });
  return [...new Set(values)].sort();
}

function pathTokens(file) {
  return [
    ...new Set(
      toPosix(file)
        .replace(/\.mdx$/i, '')
        .split(/[\/._-]+/)
        .flatMap((entry) => significantTokens(entry))
        .filter((entry) => !GENERIC_PATH_TOKENS.has(entry))
    )
  ];
}

function fileDir(relPath) {
  return toPosix(path.dirname(toPosix(relPath)));
}

function basenameTokens(relPath) {
  return significantTokens(path.basename(toPosix(relPath), path.extname(toPosix(relPath))).replace(/[-_]/g, ' '));
}

function sameDir(left, right) {
  return fileDir(left) === fileDir(right);
}

function sectionPath(relPath) {
  const parts = toPosix(relPath).split('/');
  return parts.slice(0, 5).join('/');
}

function inferenceEligibleFile(relPath) {
  const normalized = toPosix(relPath);
  const base = path.basename(normalized, path.extname(normalized));
  if (!normalized.endsWith('.mdx')) return false;
  if (normalized.includes('/x-')) return false;
  if (normalized.includes('/x_')) return false;
  if (base.startsWith('dep-')) return false;
  if (base.startsWith('funding')) return false;
  if (INFERENCE_EXCLUDED_BASENAMES.has(base)) return false;
  return true;
}

function listSiblingDocFiles(relDir) {
  const absDir = path.resolve(repoRoot(), relDir);
  if (!fs.existsSync(absDir)) return [];
  if (!fs.statSync(absDir).isDirectory()) return [];
  return fs
    .readdirSync(absDir)
    .filter((entry) => entry.endsWith('.mdx'))
    .map((entry) => toPosix(path.join(relDir, entry)))
    .filter(inferenceEligibleFile)
    .sort();
}

function familySeedFiles(family, targetFiles) {
  const domainPrefix = family.domain ? `v2/${family.domain}/` : null;
  return [...new Set([family.canonical_owner, ...(family.dependent_pages || [])])]
    .filter(Boolean)
    .filter((file) => !domainPrefix || toPosix(file).startsWith(domainPrefix));
}

function inferFamilyPages(family, targetFiles = []) {
  if ((family.dependent_pages || []).length >= 2 && fileExists(family.canonical_owner)) {
    return [];
  }
  const explicit = new Set([family.canonical_owner, ...(family.dependent_pages || [])].map(toPosix));
  const seeds = familySeedFiles(family, targetFiles);
  const seedDirs = [...new Set(seeds.map(fileDir))];
  const seedTokens = uniqueTerms([
    ...seeds.flatMap((file) => pathTokens(file)),
    ...(family.match_terms || []),
    family.claim_family.replace(/-/g, ' '),
    path.basename(family.canonical_owner || '', path.extname(family.canonical_owner || '')).replace(/[-_]/g, ' ')
  ]).flatMap((value) => significantTokens(value));
  const seedDirSet = new Set(seedDirs);
  const domainPrefix = family.domain ? `v2/${family.domain}/` : null;

  return [...new Set(seedDirs.flatMap((dir) => listSiblingDocFiles(dir)))]
    .filter((candidate) => (!domainPrefix ? true : candidate.startsWith(domainPrefix)))
    .filter((candidate) => !explicit.has(candidate))
    .map((candidate) => {
      const candidateTokens = basenameTokens(candidate);
      let score = 0;
      let overlap = 0;
      let contentSignal = false;
      if (seedDirSet.has(fileDir(candidate))) score += 2;
      if (sectionPath(candidate) === sectionPath(family.canonical_owner)) score += 1;
      overlap = sharedCount(seedTokens, candidateTokens);
      if (overlap >= 3) score += 3;
      else if (overlap >= 2) score += 2;
      else if (overlap >= 1) score += 1;
      if (targetFiles.some((file) => sameDir(file, candidate))) score += 1;
      const absCandidate = path.resolve(repoRoot(), candidate);
      if (fs.existsSync(absCandidate)) {
        const inferenceTerms = (family.match_terms || [])
          .slice(0, 8)
          .filter((term) => significantTokens(term).length >= 2);
        contentSignal = matchedTerms(readFile(absCandidate), inferenceTerms).length > 0;
        if (contentSignal) score += 2;
      }
      return { candidate, score, overlap, contentSignal };
    })
    .filter((entry) => entry.score >= 3 && (entry.overlap >= 1 || entry.contentSignal))
    .sort((left, right) => {
      if (right.score !== left.score) return right.score - left.score;
      return left.candidate.localeCompare(right.candidate);
    })
    .map((entry) => entry.candidate)
    .slice(0, 8);
}

function familyRelatedFiles(family, targetFiles = [], options = {}) {
  const includeInferred = options.includeInferred !== false;
  const existingOnly = options.existingOnly === true;
  const files = [
    family.canonical_owner,
    ...(family.dependent_pages || []),
    ...(includeInferred ? inferFamilyPages(family, targetFiles) : [])
  ]
    .filter(Boolean)
    .map(toPosix);
  const unique = [...new Set(files)];
  return existingOnly ? unique.filter(fileExists) : unique;
}

function sharedCount(left, right) {
  const leftSet = new Set(left);
  return right.filter((entry) => leftSet.has(entry)).length;
}

function familyPathAffinity(file, family, targetFiles = []) {
  const target = toPosix(file);
  const targetTokens = pathTokens(target);
  const targetBase = path.basename(target, path.extname(target));
  const relatedFiles = familyRelatedFiles(family, targetFiles, { includeInferred: true, existingOnly: false });
  let score = 0;

  relatedFiles.forEach((related) => {
    const relatedPath = toPosix(related);
    const relatedBase = path.basename(relatedPath, path.extname(relatedPath));
    if (target === relatedPath) {
      score = Math.max(score, 4);
      return;
    }
    if (targetBase === relatedBase) {
      score = Math.max(score, 3);
    }
    const overlap = sharedCount(targetTokens, pathTokens(relatedPath));
    if (overlap >= 3) {
      score = Math.max(score, 3);
    } else if (overlap >= 2) {
      score = Math.max(score, 2);
    } else if (overlap >= 1) {
      score = Math.max(score, 1);
    }
  });

  return score;
}

function scoreFamilyForTargets(family, targetFiles, fileContents) {
  let score = 0;
  const lowerTerms = family.match_terms.map((entry) => entry.toLowerCase());
  const summaryTerms = [
    family.claim_family.replace(/-/g, ' '),
    path.basename(family.canonical_owner, path.extname(family.canonical_owner)).replace(/[-_]/g, ' ')
  ];
  const domainPrefix = family.domain ? `v2/${family.domain}/` : null;
  targetFiles.forEach((file) => {
    if (domainPrefix && !file.startsWith(domainPrefix)) {
      return;
    }
    score += familyPathAffinity(file, family, targetFiles);
    const text = stripMdx(fileContents[file] || '').toLowerCase();
    lowerTerms.forEach((term) => {
      if (term && text.includes(term)) score += 1;
    });
    summaryTerms.forEach((term) => {
      if (term && text.includes(term.toLowerCase())) score += 1;
    });
  });
  return score;
}

function selectFamilies(claimFamilies, targetFiles, fileContents) {
  return claimFamilies
    .map((family) => ({ family, score: scoreFamilyForTargets(family, targetFiles, fileContents) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.family.claim_id.localeCompare(b.family.claim_id);
    })
    .map((entry) => entry.family);
}

function htmlToText(html) {
  return String(html || '')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function localIsoDate() {
  const now = new Date();
  const year = String(now.getFullYear());
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function normalizeForMatch(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/\bbreak[\s-]?even\b/g, ' payback ')
    .replace(/\bamorti[sz]ation\b/g, ' payback ')
    .replace(/\bfeasibilit(?:y|ies)\b/g, ' viable ')
    .replace(/\bworth it\b/g, ' viable ')
    .replace(/\bprofitab(?:le|ility)\b/g, ' viable ')
    .replace(/\bcommercial(?:ly)?\s+viable\b/g, ' viable ')
    .replace(/\bpre[\s-]?loaded\b/g, ' warm ')
    .replace(/\bkeep\s+(?:them|models?)\s+warm\b/g, ' warm ')
    .replace(/\bwarmed?\s+at\s+startup\b/g, ' warm startup ')
    .replace(/\bcold[\s-]?starts?\b/g, ' cold start ')
    .replace(/\bservice[\s-]?level\s+agreement[s]?\b/g, ' sla ')
    .replace(/\bgeneral\s+availability\b/g, ' public ga ')
    .replace(/\bpublic\s+use\s+status\b/g, ' public ga ')
    .replace(/\bmarketplace\s+filter\b/g, ' price filter ')
    .replace(/\bsafety\s+ceiling\b/g, ' price ceiling ')
    .replace(/\bsession\s+cap\b/g, ' session limit ')
    .replace(/\bconcurrent\s+encoding\s+sessions?\b/g, ' nvenc session ')
    .replace(/\bmax\s*price\s*per\s*capability\b/g, ' price ceiling ')
    .replace(/\bmaxpricepercapability\b/g, ' price ceiling ')
    .replace(/\bmax\s*price\s*per\s*unit\b/g, ' price ceiling ')
    .replace(/\bmaxpriceperunit\b/g, ' price ceiling ')
    .replace(/\bcapability-based\b/g, ' capability match ')
    .replace(/\bno\s+lpt\s+(?:needed|required)\b/g, ' no lpt required ')
    .replace(/\bdo(?:es)?\s+not\s+require\s+lpt\b/g, ' no lpt required ')
    .replace(/\breward\(\)\b/g, ' reward call ')
    .replace(/\breward calls?\b/g, ' reward call ')
    .replace(/[`'"“”‘’]/g, '')
    .replace(/[^a-z0-9+]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function significantTokens(value) {
  return normalizeForMatch(value)
    .split(' ')
    .map((entry) => entry.trim())
    .filter((entry) => entry.length >= 3)
    .filter((entry) => !new Set(['the', 'and', 'for', 'with', 'that', 'this', 'from']).has(entry));
}

function signalMatches(text, term) {
  const haystack = normalizeForMatch(text);
  const needle = normalizeForMatch(term);
  if (!needle) return true;
  if (haystack.includes(needle)) return true;

  const tokens = significantTokens(needle);

  if (tokens.length < 2) {
    return false;
  }

  const matched = tokens.filter((token) => {
    if (haystack.includes(token)) return true;
    const stemmed = token.replace(/(?:ing|ed|es|s)$/i, '');
    return stemmed.length >= 3 && haystack.includes(stemmed);
  });

  return matched.length / tokens.length >= 0.6;
}

function matchAnySignal(text, terms) {
  if (!terms || terms.length === 0) return true;
  return terms.some((term) => signalMatches(text, term));
}

function matchedTerms(text, terms) {
  const list = [];
  (terms || []).forEach((term) => {
    if (signalMatches(text, term)) {
      list.push(String(term).trim());
    }
  });
  return uniqueTerms(list, 12);
}

function uniqueTerms(terms, limit = 16) {
  const seen = new Set();
  const out = [];
  terms
    .map((entry) => String(entry || '').trim())
    .filter(Boolean)
    .forEach((entry) => {
      const key = normalizeForMatch(entry);
      if (!key || seen.has(key)) return;
      seen.add(key);
      out.push(entry);
  });
  return out.slice(0, limit);
}

function familyTruthMode(family) {
  return String(family?.truth_mode || '').trim() || 'repo_behavior';
}

function isCurrentStateTruthMode(family) {
  return familyTruthMode(family) !== 'historical_lineage';
}

function discoveryConfig(family) {
  const truthMode = familyTruthMode(family);
  const configured = family?.discovery || {};
  const defaultRepoLanes =
    truthMode === 'historical_lineage'
      ? ['v1', 'context', 'archive']
      : ['implementation_status', 'support_status'].includes(truthMode)
        ? ['context', 'archive']
        : [];
  const repoLanes = Array.isArray(configured.repo_lanes) ? configured.repo_lanes : defaultRepoLanes;
  return {
    repo_lanes: repoLanes,
    github: configured.github === true || ['implementation_status', 'support_status'].includes(truthMode),
    deepwiki: configured.deepwiki === true || Array.isArray(family?.deepwiki_repos) && family.deepwiki_repos.length > 0,
    search_hints: Array.isArray(configured.search_hints) ? configured.search_hints : []
  };
}

function evidenceLaneType(relPath) {
  const normalized = toPosix(relPath);
  if (DISCOVERY_LANE_PATTERNS.v1.some((pattern) => pattern.test(normalized))) return 'repo-v1-file';
  if (DISCOVERY_LANE_PATTERNS.context.some((pattern) => pattern.test(normalized))) return 'repo-context-file';
  if (DISCOVERY_LANE_PATTERNS.archive.some((pattern) => pattern.test(normalized))) return 'repo-archive-file';
  return '';
}

const REPO_DISCOVERY_FILE_CACHE = new Map();

function listRepoDiscoveryFiles() {
  const root = repoRoot();
  if (REPO_DISCOVERY_FILE_CACHE.has(root)) return REPO_DISCOVERY_FILE_CACHE.get(root);
  const out = [];

  function walk(dirAbs) {
    const entries = fs.readdirSync(dirAbs, { withFileTypes: true });
    entries.forEach((entry) => {
      const abs = path.join(dirAbs, entry.name);
      const rel = repoRelative(abs);
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.next') return;
        walk(abs);
        return;
      }
      if (!/\.(md|mdx)$/i.test(entry.name)) return;
      if (rel.includes('/_workspace/drafts/')) return;
      const laneType = evidenceLaneType(rel);
      if (!laneType) return;
      out.push({ file: rel, laneType });
    });
  }

  walk(root);
  const sorted = out.sort((a, b) => a.file.localeCompare(b.file));
  REPO_DISCOVERY_FILE_CACHE.set(root, sorted);
  return sorted;
}

function laneEnabled(laneType, lanes) {
  if (laneType === 'repo-v1-file') return lanes.includes('v1');
  if (laneType === 'repo-context-file') return lanes.includes('context');
  if (laneType === 'repo-archive-file') return lanes.includes('archive');
  return false;
}

function familySearchHints(family) {
  const discovery = discoveryConfig(family);
  return uniqueTerms([
    ...(discovery.search_hints || []),
    ...(family.match_terms || []),
    family.claim_family?.replace(/-/g, ' '),
    family.claim_summary,
    family.notes,
    path.basename(family.canonical_owner || '', path.extname(family.canonical_owner || '')).replace(/[-_]/g, ' ')
  ], 12);
}

function repoDiscoveryCandidates(family, targetFiles = []) {
  if (discoveryDisabled()) {
    return [];
  }
  const discovery = discoveryConfig(family);
  if (!Array.isArray(discovery.repo_lanes) || discovery.repo_lanes.length === 0) {
    return [];
  }
  const hints = familySearchHints(family);
  if (hints.length === 0) {
    return [];
  }
  const hintTokens = uniqueTerms([
    ...hints.flatMap((term) => significantTokens(term)),
    ...pathTokens(family.canonical_owner || '')
  ], 24);
  const targetSet = new Set((targetFiles || []).map(toPosix));
  const currentDir = fileDir(family.canonical_owner || '');

  return listRepoDiscoveryFiles()
    .filter((entry) => laneEnabled(entry.laneType, discovery.repo_lanes))
    .map((entry) => {
      const baseTokens = basenameTokens(entry.file);
      const relTokens = pathTokens(entry.file);
      const overlap = sharedCount(hintTokens, [...baseTokens, ...relTokens]);
      let score = overlap;
      if (path.basename(entry.file, path.extname(entry.file)) === path.basename(family.canonical_owner || '', path.extname(family.canonical_owner || ''))) {
        score += 4;
      }
      if (sameDir(entry.file, family.canonical_owner || '')) score += 1;
      if (fileDir(entry.file) === currentDir) score += 1;
      if (targetSet.has(entry.file)) score += 2;
      let matched = [];
      if (score >= 2) {
        const abs = path.resolve(repoRoot(), entry.file);
        const content = readFile(abs);
        matched = matchedTerms(content, hints);
      }
      if (matched.length > 0) score += matched.length * 2;
      return {
        ...entry,
        score,
        matched
      };
    })
    .filter((entry) => entry.score >= 4 && entry.matched.length > 0)
    .sort((left, right) => {
      if (right.score !== left.score) return right.score - left.score;
      return left.file.localeCompare(right.file);
    })
    .slice(0, MAX_DISCOVERED_REPO_REFS)
    .map((entry) => ({
      type: entry.laneType,
      ref: entry.file,
      match_any: entry.matched,
      source_origin: 'discovered',
      discovered_via: entry.laneType
    }));
}

function parseGitHubRepo(value) {
  const raw = String(value || '')
    .trim()
    .replace(/^https?:\/\/github\.com\//i, '')
    .replace(/\/+$/, '');
  if (!raw) return '';
  return raw;
}

function familyGithubRepos(family) {
  const explicit = (family.evidence_refs || [])
    .filter((entry) => String(entry.type || '').startsWith('github-'))
    .map((entry) => {
      try {
        const parsed = parseGithubUrl(entry.ref);
        return `${parsed.owner}/${parsed.repo}`;
      } catch (_error) {
        return '';
      }
    })
    .filter(Boolean);
  const configured = (family.github_repos || []).map(parseGitHubRepo).filter(Boolean);
  const repos = [];
  [...explicit, ...configured].forEach((repo) => {
    if (!repo || repos.includes(repo)) return;
    repos.push(repo);
  });
  return repos;
}

function deepwikiUrlForRepo(repo) {
  return `https://deepwiki.com/${repo}`;
}

function deepwikiSearchUrl(family) {
  const query = familySearchHints(family)
    .slice(0, 4)
    .join(' ')
    .trim();
  if (!query) return '';
  return `https://deepwiki.com/search?q=${encodeURIComponent(query)}`;
}

async function discoverGithubEvidenceRefs(family) {
  if (remoteDiscoveryDisabled()) return [];
  if (!discoveryConfig(family).github) return [];

  const hints = familySearchHints(family).slice(0, 4);
  if (hints.length === 0) return [];
  const repos = familyGithubRepos(family);
  const repoQualifier = repos.length ? repos.map((repo) => `repo:${repo}`).join(' ') : `org:${GITHUB_DISCOVERY_ORG}`;
  const baseQuery = `${repoQualifier} ${hints.map((term) => `"${term}"`).join(' ')}`.trim();

  const discovered = [];
  const searches = [
    { type: 'github-issue', query: `${baseQuery} is:issue` },
    { type: 'github-pr', query: `${baseQuery} is:pr` }
  ];

  for (const search of searches) {
    const response = await fetchText(`https://api.github.com/search/issues?q=${encodeURIComponent(search.query)}&per_page=2`, {
      accept: 'application/vnd.github+json'
    });
    if (!response.ok) continue;
    let parsed = null;
    try {
      parsed = JSON.parse(response.text);
    } catch (_error) {
      parsed = null;
    }
    const items = Array.isArray(parsed?.items) ? parsed.items : [];
    items.forEach((item) => {
      if (!item?.html_url) return;
      discovered.push({
        type: search.type,
        ref: item.html_url,
        match_any: hints,
        source_origin: 'discovered',
        discovered_via: 'github-search'
      });
    });
  }

  familyGithubRepos(family)
    .slice(0, 2)
    .forEach((repo) => {
      discovered.push({
        type: 'github-release',
        ref: `https://github.com/${repo}/releases/latest`,
        match_any: hints,
        source_origin: 'discovered',
        discovered_via: 'github-release-latest'
      });
    });

  return dedupeEvidenceRefs(discovered).slice(0, MAX_DISCOVERED_GITHUB_REFS);
}

function discoverDeepwikiEvidenceRefs(family) {
  if (remoteDiscoveryDisabled()) return [];
  if (!discoveryConfig(family).deepwiki) return [];
  const repos = ((family.deepwiki_repos && family.deepwiki_repos.length > 0 ? family.deepwiki_repos : familyGithubRepos(family)) || [])
    .map(parseGitHubRepo)
    .filter(Boolean);
  const refs = repos.map((repo) => ({
    type: 'deepwiki-page',
    ref: deepwikiUrlForRepo(repo),
    match_any: familySearchHints(family),
    source_origin: 'discovered',
    discovered_via: 'deepwiki-repo'
  }));
  const searchRef = deepwikiSearchUrl(family);
  if (searchRef) {
    refs.push({
      type: 'deepwiki-page',
      ref: searchRef,
      match_any: familySearchHints(family),
      source_origin: 'discovered',
      discovered_via: 'deepwiki-search'
    });
  }
  return dedupeEvidenceRefs(refs).slice(0, MAX_DISCOVERED_DEEPWIKI_REFS);
}

function dedupeEvidenceRefs(refs) {
  const seen = new Set();
  const out = [];
  refs.forEach((entry) => {
    const key = `${entry.type}|${entry.ref}`;
    if (seen.has(key)) return;
    seen.add(key);
    out.push(entry);
  });
  return out;
}

function evidenceClassification(type) {
  if (type === 'repo-v1-file') return 'historical-v1';
  if (type === 'repo-context-file' || type === 'repo-archive-file') return 'context-lane';
  if (type === 'deepwiki-page') return 'corroboration-only';
  return 'active-current';
}

function expandedEvidenceTerms(family, ref) {
  return uniqueTerms([
    ...(ref.match_any || []),
    ...(family.match_terms || []),
    family.claim_family.replace(/-/g, ' '),
    family.claim_summary,
    path.basename(family.canonical_owner || '', path.extname(family.canonical_owner || '')).replace(/[-_]/g, ' ')
  ]);
}

function countPatternHits(text, patterns) {
  return patterns.reduce((count, pattern) => {
    const matches = text.match(pattern);
    return count + (matches ? matches.length : 0);
  }, 0);
}

function parseIsoDate(value) {
  const normalized = String(value || '').trim();
  if (!normalized) return null;
  const parsed = Date.parse(normalized);
  return Number.isNaN(parsed) ? null : new Date(parsed);
}

function ageInDays(value) {
  const parsed = parseIsoDate(value);
  if (!parsed) return null;
  return Math.max(0, Math.floor((Date.now() - parsed.getTime()) / 86400000));
}

function sourcePriority(type) {
  return EVIDENCE_TYPE_PRIORITY[type] || 10;
}

function familyNeedsCurrentness(family) {
  const corpus = [family.claim_summary, family.notes, ...(family.match_terms || []), family.status].join(' ');
  return countPatternHits(corpus, CURRENT_LANGUAGE_PATTERNS) > 0;
}

function familyCorpus(family) {
  if (!family) return '';
  return [family.claim_family, family.claim_summary, family.notes, family.source_type, ...(family.match_terms || [])].join(' ');
}

function familyPrefersForum(family) {
  if (!family) return false;
  const corpus = familyCorpus(family);
  return countPatternHits(corpus, FORUM_STATUS_PATTERNS) > 0 || /forum-/i.test(family.source_type || '');
}

function familyPrefersGithub(family) {
  if (!family) return false;
  const corpus = familyCorpus(family);
  return countPatternHits(corpus, IMPLEMENTATION_STATUS_PATTERNS) > 0 || /^github-/.test(family.source_type || '');
}

function sourceOriginScore(origin) {
  return origin === 'explicit' ? 2 : 0;
}

function extractEvidenceMeta(type, parsedJson, responseText) {
  if (type === 'forum-topic') {
    return {
      date:
        parsedJson?.last_posted_at ||
        parsedJson?.created_at ||
        parsedJson?.post_stream?.posts?.[0]?.created_at ||
        '',
      state: parsedJson?.archived ? 'archived' : 'open'
    };
  }
  if (type === 'github-pr') {
    return {
      date: parsedJson?.merged_at || parsedJson?.updated_at || parsedJson?.created_at || '',
      state: parsedJson?.merged_at ? 'merged' : parsedJson?.state || ''
    };
  }
  if (type === 'github-issue') {
    return {
      date: parsedJson?.updated_at || parsedJson?.created_at || '',
      state: parsedJson?.state || ''
    };
  }
  if (type === 'github-release') {
    return {
      date: parsedJson?.published_at || parsedJson?.created_at || '',
      state: parsedJson?.draft ? 'draft' : 'published'
    };
  }
  if (type === 'github-repo') {
    return {
      date: parsedJson?.pushed_at || parsedJson?.updated_at || parsedJson?.created_at || '',
      state: parsedJson?.archived ? 'archived' : 'active'
    };
  }
  if (type === 'official-page') {
    return { date: '', state: responseText ? 'reachable' : '' };
  }
  return { date: '', state: '' };
}

function recencyScoreForEvidence(type, meta, family) {
  const age = ageInDays(meta?.date);
  if (age == null) return { score: 0, reason: '' };
  const freshness = family?.freshness_class || 'review-periodic';
  let score = 0;

  if (freshness === 'volatile') {
    if (age <= 14) score += 18;
    else if (age <= 45) score += 10;
    else if (age <= 120) score += 3;
    else score -= 10;
  } else if (freshness === 'review-on-change') {
    if (age <= 30) score += 12;
    else if (age <= 120) score += 6;
    else if (age > 365) score -= 6;
  } else if (freshness === 'review-periodic') {
    if (age <= 90) score += 8;
    else if (age <= 365) score += 3;
    else score -= 4;
  }

  if (type === 'github-release') {
    score += 10;
  } else if (type === 'github-pr' && meta?.state === 'merged') {
    score += 6;
  } else if (type === 'github-issue' && meta?.state === 'open') {
    score += 2;
  }

  return {
    score,
    reason: `recency ${age}d${meta?.state ? `; state ${meta.state}` : ''}`
  };
}

function sourcePreferenceScore(type, family, meta = {}, ref = null) {
  const truthMode = familyTruthMode(family);
  const prefersForum = familyPrefersForum(family);
  const prefersGithub = familyPrefersGithub(family);
  let score = 0;

  if (truthMode === 'implementation_status') {
    if (type === 'github-release') score += 18;
    else if (type === 'github-pr') score += meta?.state === 'merged' ? 16 : 10;
    else if (type === 'github-issue') score += 8;
    else if (type === 'official-page') score += 6;
    else if (type === 'forum-topic') score -= 2;
    else if (type === 'repo-context-file' || type === 'repo-archive-file') score -= 4;
    else if (type === 'repo-v1-file') score -= 6;
    else if (type === 'deepwiki-page') score -= 8;
  } else if (truthMode === 'support_status') {
    if (type === 'official-page') score += 16;
    else if (type === 'forum-topic') score += 14;
    else if (type === 'github-release') score += 8;
    else if (type === 'github-pr') score += 6;
    else if (type === 'github-issue') score += 4;
    else if (type === 'repo-discord-signal') score -= 8;
    else if (type === 'repo-context-file' || type === 'repo-archive-file') score -= 3;
    else if (type === 'repo-v1-file') score -= 6;
    else if (type === 'deepwiki-page') score -= 8;
  } else if (truthMode === 'historical_lineage') {
    if (type === 'repo-v1-file') score += 18;
    else if (type === 'repo-archive-file') score += 12;
    else if (type === 'repo-context-file') score += 8;
    else if (type === 'repo-file') score += 6;
    else if (type === 'deepwiki-page') score += 4;
    else if (type === 'official-page') score -= 2;
  } else {
    if (type === 'repo-file') score += 8;
    else if (type === 'official-page') score += 4;
    else if (type === 'github-release') score += 2;
    else if (type === 'github-pr') score += meta?.state === 'merged' ? 4 : 1;
    else if (type === 'github-issue') score -= 4;
    else if (type === 'forum-topic') score -= 3;
    else if (type === 'repo-context-file' || type === 'repo-archive-file') score -= 4;
    else if (type === 'repo-v1-file') score -= 6;
    else if (type === 'deepwiki-page') score -= 8;
  }

  if (prefersForum && type === 'forum-topic') score += 6;
  if (prefersForum && !prefersGithub && type.startsWith('github-')) score -= 2;
  if (prefersGithub && type === 'github-release') score += 4;
  else if (prefersGithub && type === 'github-pr') score += 3;
  else if (prefersGithub && type === 'github-issue') score += 2;
  if (prefersGithub && !prefersForum && type === 'forum-topic') score -= 1;
  score += sourceOriginScore(ref?.source_origin || 'explicit');
  return score;
}

function evidenceRanking(type, corpus, terms, family, meta = {}, ref = null) {
  const matched = matchedTerms(corpus, terms);
  const needsCurrentness = family ? familyNeedsCurrentness(family) : false;
  const currentHits = countPatternHits(corpus, CURRENT_LANGUAGE_PATTERNS);
  const historicalHits = countPatternHits(corpus, HISTORICAL_LANGUAGE_PATTERNS);
  const recency = recencyScoreForEvidence(type, meta, family);
  const preference = sourcePreferenceScore(type, family, meta, ref);
  const origin = ref?.source_origin || 'explicit';
  let score = sourcePriority(type) + matched.length * 10 + recency.score + preference;
  const reasons = [`source priority ${sourcePriority(type)}`];

  if (matched.length > 0) {
    reasons.push(`${matched.length} matched term${matched.length === 1 ? '' : 's'}`);
  }
  if (preference !== 0) {
    reasons.push(`claim-family source preference ${preference}`);
  }
  if (origin === 'explicit') {
    reasons.push('explicit evidence ref');
  } else if (ref?.discovered_via) {
    reasons.push(`discovered via ${ref.discovered_via}`);
  }
  if (recency.reason) {
    reasons.push(recency.reason);
  }
  if (needsCurrentness && currentHits > 0) {
    score += 8;
    reasons.push(`current-language match ${currentHits}`);
  }
  if (needsCurrentness && historicalHits > 0) {
    score -= Math.min(12, historicalHits * 3);
    reasons.push(`historical-language penalty ${historicalHits}`);
  }
  if (type === 'repo-discord-signal') {
    score = Math.min(score, MAX_DISCORD_SELECTION_SCORE);
    reasons.push(`discord cap ${MAX_DISCORD_SELECTION_SCORE}`);
  }

  return {
    matched_terms: matched,
    matched_terms_count: matched.length,
    source_rank: sourcePriority(type),
    preference_score: preference,
    recency_score: recency.score,
    evidence_date: meta?.date || '',
    evidence_state: meta?.state || '',
    current_language_hits: currentHits,
    historical_language_hits: historicalHits,
    selection_score: score,
    ranking_reason: reasons.join('; ')
  };
}

function parseGithubUrl(ref) {
  const url = new URL(ref);
  const parts = url.pathname.split('/').filter(Boolean);
  if (parts.length < 2) {
    throw new Error(`Unsupported GitHub URL: ${ref}`);
  }
  const [owner, repo, kind, value] = parts;
  return { owner, repo, kind: kind || 'repo', value: value || '' };
}

async function fetchText(url, headers = {}) {
  const normalizedHeaders = {
    'user-agent': 'livepeer-docs-research/1.0',
    accept: 'application/json, text/html;q=0.9, text/plain;q=0.8',
    ...headers
  };
  const cacheKey = JSON.stringify([url, Object.entries(normalizedHeaders).sort((a, b) => a[0].localeCompare(b[0]))]);
  if (FETCH_CACHE.has(cacheKey)) {
    return FETCH_CACHE.get(cacheKey);
  }
  let result;
  let timeoutId = null;
  try {
    const controller = new AbortController();
    timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    const response = await fetch(url, {
      headers: normalizedHeaders,
      signal: controller.signal
    });
    const text = await response.text();
    result = {
      ok: response.ok,
      status: response.status,
      text
    };
  } catch (error) {
    result = {
      ok: false,
      status: 0,
      text: '',
      error: error.message
    };
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
  FETCH_CACHE.set(cacheKey, result);
  return result;
}

async function fetchEvidenceRef(ref, options = null) {
  const checked_on = localIsoDate();
  const matchTerms = Array.isArray(options) ? options : options?.termsOverride || ref.match_any || [];
  const family = Array.isArray(options) ? null : options?.family || null;
  const sourceOrigin = ref.source_origin || 'explicit';
  const discoveredVia = ref.discovered_via || (sourceOrigin === 'explicit' ? 'registry-evidence' : '');
  if (
    ref.type === 'repo-file' ||
    ref.type === 'repo-discord-signal' ||
    ref.type === 'repo-v1-file' ||
    ref.type === 'repo-context-file' ||
    ref.type === 'repo-archive-file'
  ) {
    const absPath = path.resolve(repoRoot(), ref.ref);
    if (!fs.existsSync(absPath)) {
      return {
        type: ref.type,
        ref: ref.ref,
        checked_on,
        ok: false,
        matched: false,
        source_origin: sourceOrigin,
        discovered_via: discoveredVia,
        evidence_class: evidenceClassification(ref.type),
        truth_mode: familyTruthMode(family),
        summary: 'repo file missing',
        source_rank: sourcePriority(ref.type),
        matched_terms: [],
        matched_terms_count: 0,
        current_language_hits: 0,
        historical_language_hits: 0,
        selection_score: 0,
        ranking_reason: `source priority ${sourcePriority(ref.type)}; repo file missing`
      };
    }
    const text = readFile(absPath);
    const matched = matchAnySignal(text, matchTerms);
    const repoState = ref.type === 'repo-v1-file'
      ? 'repo-historical'
      : ref.type === 'repo-context-file'
        ? 'repo-context'
        : ref.type === 'repo-archive-file'
          ? 'repo-archive'
          : 'repo-current';
    const ranking = evidenceRanking(ref.type, text, matchTerms, family, { date: '', state: repoState }, ref);
    const matchedSummary = ref.type === 'repo-discord-signal'
      ? 'repo Discord/community signal matched'
      : ref.type === 'repo-v1-file'
        ? 'historical v1 repo evidence matched'
        : ref.type === 'repo-context-file'
          ? 'repo context evidence matched'
          : ref.type === 'repo-archive-file'
            ? 'repo archive evidence matched'
            : 'repo evidence matched';
    const missingSummary =
      ref.type === 'repo-discord-signal'
        ? 'repo Discord/community signal fetched but signal missing'
        : ref.type === 'repo-v1-file'
          ? 'historical v1 repo evidence fetched but signal missing'
          : ref.type === 'repo-context-file'
            ? 'repo context evidence fetched but signal missing'
            : ref.type === 'repo-archive-file'
              ? 'repo archive evidence fetched but signal missing'
              : 'repo evidence fetched but signal missing';
    return {
      type: ref.type,
      ref: ref.ref,
      checked_on,
      source_origin: sourceOrigin,
      discovered_via: discoveredVia,
      evidence_class: evidenceClassification(ref.type),
      truth_mode: familyTruthMode(family),
      ok: true,
      matched,
      summary: matched ? matchedSummary : missingSummary,
      ...ranking
    };
  }

  if (ref.type === 'official-page' || ref.type === 'deepwiki-page') {
    const response = await fetchText(ref.ref);
    const text = htmlToText(response.text);
    const matched = response.ok && matchAnySignal(text, matchTerms);
    const ranking = evidenceRanking(ref.type, text, matchTerms, family, extractEvidenceMeta(ref.type, null, response.text), ref);
    return {
      type: ref.type,
      ref: ref.ref,
      checked_on,
      source_origin: sourceOrigin,
      discovered_via: discoveredVia,
      evidence_class: evidenceClassification(ref.type),
      truth_mode: familyTruthMode(family),
      ok: response.ok,
      matched,
      summary: response.ok
        ? (matched
          ? (ref.type === 'deepwiki-page' ? 'DeepWiki page matched' : 'official page matched')
          : (ref.type === 'deepwiki-page' ? 'DeepWiki page fetched but signal missing' : 'official page fetched but signal missing'))
        : `${ref.type === 'deepwiki-page' ? 'DeepWiki' : 'official page'} fetch failed (${response.status}${response.error ? `: ${response.error}` : ''})`,
      ...ranking
    };
  }

  if (ref.type === 'forum-topic') {
    const url = ref.ref.endsWith('.json') ? ref.ref : `${ref.ref.replace(/\/$/, '')}.json`;
    const response = await fetchText(url, { accept: 'application/json' });
    let parsed = null;
    try {
      parsed = JSON.parse(response.text);
    } catch (_error) {
      parsed = null;
    }
    const corpus = parsed ? JSON.stringify(parsed) : response.text;
    const matched = response.ok && matchAnySignal(corpus, matchTerms);
    const ranking = evidenceRanking(ref.type, corpus, matchTerms, family, extractEvidenceMeta(ref.type, parsed, response.text), ref);
    return {
      type: ref.type,
      ref: ref.ref,
      checked_on,
      source_origin: sourceOrigin,
      discovered_via: discoveredVia,
      evidence_class: evidenceClassification(ref.type),
      truth_mode: familyTruthMode(family),
      ok: response.ok,
      matched,
      summary: response.ok ? (matched ? 'forum topic matched' : 'forum topic fetched but signal missing') : `forum topic fetch failed (${response.status})`,
      ...ranking
    };
  }

  if (ref.type.startsWith('github-')) {
    const parsed = parseGithubUrl(ref.ref);
    let apiUrl = `https://api.github.com/repos/${parsed.owner}/${parsed.repo}`;
    if (ref.type === 'github-issue') {
      apiUrl += `/issues/${parsed.value || parsed.kind}`;
    } else if (ref.type === 'github-pr') {
      apiUrl += `/pulls/${parsed.value || parsed.kind}`;
    } else if (ref.type === 'github-release') {
      apiUrl += parsed.value && parsed.value !== 'latest' ? `/releases/tags/${parsed.value}` : '/releases/latest';
    }
    const response = await fetchText(apiUrl, {
      accept: 'application/vnd.github+json'
    });
    let parsedJson = null;
    try {
      parsedJson = JSON.parse(response.text);
    } catch (_error) {
      parsedJson = null;
    }
    const corpus = parsedJson ? JSON.stringify(parsedJson) : response.text;
    const matched = response.ok && matchAnySignal(corpus, matchTerms);
    const ranking = evidenceRanking(ref.type, corpus, matchTerms, family, extractEvidenceMeta(ref.type, parsedJson, response.text), ref);
    return {
      type: ref.type,
      ref: ref.ref,
      checked_on,
      source_origin: sourceOrigin,
      discovered_via: discoveredVia,
      evidence_class: evidenceClassification(ref.type),
      truth_mode: familyTruthMode(family),
      ok: response.ok,
      matched,
      summary: response.ok ? (matched ? 'GitHub evidence matched' : 'GitHub evidence fetched but signal missing') : `GitHub fetch failed (${response.status})`,
      ...ranking
    };
  }

  return {
    type: ref.type,
    ref: ref.ref,
    checked_on,
    source_origin: sourceOrigin,
    discovered_via: discoveredVia,
    evidence_class: evidenceClassification(ref.type),
    truth_mode: familyTruthMode(family),
    ok: false,
    matched: false,
    summary: `unsupported evidence ref type: ${ref.type}`,
    source_rank: sourcePriority(ref.type),
    matched_terms: [],
    matched_terms_count: 0,
    current_language_hits: 0,
    historical_language_hits: 0,
    selection_score: 0,
    ranking_reason: `source priority ${sourcePriority(ref.type)}; unsupported evidence type`
  };
}

async function collectEvidence(family, targetFiles = []) {
  const explicitRefs = (family.evidence_refs || []).map((ref) => ({
    ...ref,
    source_origin: 'explicit',
    discovered_via: 'registry-evidence'
  }));
  const discoveredRefs = dedupeEvidenceRefs([
    ...repoDiscoveryCandidates(family, targetFiles),
    ...(await discoverGithubEvidenceRefs(family)),
    ...discoverDeepwikiEvidenceRefs(family)
  ]);
  const refs = dedupeEvidenceRefs([...explicitRefs, ...discoveredRefs]);
  const evidence = [];
  for (const ref of refs) {
    evidence.push(
      await fetchEvidenceRef(ref, {
        termsOverride: expandedEvidenceTerms(family, ref),
        family
      })
    );
  }
  return evidence.sort((left, right) => {
    if (Number(right.ok && right.matched) !== Number(left.ok && left.matched)) {
      return Number(right.ok && right.matched) - Number(left.ok && left.matched);
    }
    if (Number(right.ok) !== Number(left.ok)) {
      return Number(right.ok) - Number(left.ok);
    }
    if ((right.selection_score || 0) !== (left.selection_score || 0)) {
      return (right.selection_score || 0) - (left.selection_score || 0);
    }
    if ((left.source_rank || 0) !== (right.source_rank || 0)) {
      return (right.source_rank || 0) - (left.source_rank || 0);
    }
    if ((left.source_origin || 'explicit') !== (right.source_origin || 'explicit')) {
      return Number((right.source_origin || 'explicit') === 'explicit') - Number((left.source_origin || 'explicit') === 'explicit');
    }
    return (right.matched_terms_count || 0) - (left.matched_terms_count || 0);
  });
}

function confidenceLabel(status, evidence) {
  const matchedCount = evidence.filter((entry) => entry.ok && entry.matched).length;
  if (status === 'verified' && matchedCount > 0) return 'high';
  if (status === 'conflicted') return 'low';
  if (status === 'time-sensitive') return matchedCount > 0 ? 'medium' : 'low';
  return matchedCount > 0 ? 'medium' : 'low';
}

function annotateEvidenceCompetition(evidence) {
  const primary =
    evidence.find((entry) => entry.ok && entry.matched) ||
    evidence.find((entry) => entry.ok) ||
    evidence[0] ||
    null;
  if (!primary) return [];

  return evidence.map((entry) => {
    let selection_role = 'supporting';
    let comparison_reason = 'supporting evidence';
    if (entry === primary) {
      selection_role = 'primary';
      comparison_reason = 'highest ranked matched source';
    } else if (!entry.ok) {
      selection_role = 'weaker';
      comparison_reason = 'fetch failed or unsupported evidence type';
    } else if (!entry.matched) {
      selection_role = 'weaker';
      comparison_reason = 'signal missing from fetched source';
    } else if ((entry.source_rank || 0) < (primary.source_rank || 0)) {
      selection_role = 'weaker';
      comparison_reason = 'lower source priority than primary evidence';
    } else if ((entry.recency_score || 0) < (primary.recency_score || 0)) {
      selection_role = 'weaker';
      comparison_reason = 'older or less current than primary evidence';
    } else if ((entry.matched_terms_count || 0) < (primary.matched_terms_count || 0)) {
      selection_role = 'weaker';
      comparison_reason = 'fewer matched signals than primary evidence';
    }
    return {
      ...entry,
      selection_role,
      comparison_reason,
      primary_ref: primary.ref
    };
  });
}

function classifyFamily(family, evidence, pageObservations) {
  const extractedValues = pageObservations.flatMap((entry) => entry.values);
  const distinctValues = [...new Set(extractedValues)].sort();
  const evidenceMatched = evidence.some((entry) => entry.ok && entry.matched);
  let status = family.status;

  if (distinctValues.length > 1) {
    status = 'conflicted';
  } else if (status === 'verified' && !evidenceMatched && family.evidence_refs.length > 0) {
    status = 'unverified';
  }

  return {
    status,
    confidence: confidenceLabel(status, evidence),
    evidenceMatched,
    distinctValues
  };
}

function actionForStatus(status) {
  if (status === 'verified') return 'update-now';
  if (status === 'historical-only' || status === 'deprecated') return 'historical-review';
  if (status === 'conflicted' || status === 'time-sensitive' || status === 'unverified') return 'verify-only';
  return 'follow-up';
}

function pageClass(file) {
  const normalized = toPosix(file);
  if (normalized.includes('/resources/') || normalized.includes('/glossary')) return 'reference';
  if (normalized.includes('/faq')) return 'faq';
  if (normalized.includes('/concepts/')) return 'concept';
  if (normalized.includes('/guides/')) return 'guide';
  if (normalized.includes('/quickstart/')) return 'quickstart';
  if (normalized.includes('/setup/')) return 'setup';
  return 'other';
}

function familyRole(file, family) {
  if (file === family.canonical_owner) return 'canonical-owner';
  if ((family.dependent_pages || []).includes(file)) return 'dependent-page';
  return 'inferred-page';
}

function buildPropagationQueue(family, classification, targetFiles = []) {
  const files = familyRelatedFiles(family, targetFiles, { includeInferred: true, existingOnly: true });
  return [...new Set(files)]
    .sort()
    .map((file) => ({
      file,
      page_class: pageClass(file),
      role: familyRole(file, family),
      action: actionForStatus(classification.status),
      claim_id: family.claim_id
    }));
}

function buildContradictions(family, classification, pageObservations) {
  if (classification.status !== 'conflicted') return [];
  const relevant = pageObservations.filter((entry) => entry.values.length > 0 || entry.snippets.length > 0);
  return [
    {
      claim_family: family.claim_family,
      claim_id: family.claim_id,
      pages: relevant.map((entry) => ({
        file: entry.file,
        values: entry.values,
        snippet: entry.snippets[0] || ''
      })),
      best_known_truth: family.claim_summary,
      confidence: classification.confidence,
      recommended_action: 'verify-more'
    }
  ];
}

async function buildFamilyReport(family, fileContents, targetFiles = []) {
  const targetPageSet = new Set((targetFiles || []).map(toPosix));
  const pages = familyRelatedFiles(family, targetFiles, { includeInferred: true, existingOnly: true }).filter(
    (file) =>
      fileExists(file) &&
      (file === family.canonical_owner ||
        (family.dependent_pages || []).includes(file) ||
        targetPageSet.has(file) ||
        sameDir(file, family.canonical_owner))
  );
  const pageObservations = pages.map((file) => {
    const content = fileContents[file] || readFile(path.resolve(repoRoot(), file));
    const snippets = extractObservationSnippets(content, family.match_terms);
    const values = extractPatternValues(snippets, family.comparison_patterns);
    return {
      file,
      snippets,
      values
    };
  });

  const evidence = annotateEvidenceCompetition(await collectEvidence(family, targetFiles));
  const classification = classifyFamily(family, evidence, pageObservations);
  const primaryEvidence = evidence.find((entry) => entry.selection_role === 'primary') || null;
  return {
    claim_id: family.claim_id,
    claim_family: family.claim_family,
    entity: family.entity,
    canonical_owner: family.canonical_owner,
    registry_status: family.status,
    status: classification.status,
    freshness_class: family.freshness_class,
    truth_mode: familyTruthMode(family),
    confidence: classification.confidence,
    summary: family.claim_summary,
    primary_evidence: primaryEvidence
      ? {
          type: primaryEvidence.type,
          ref: primaryEvidence.ref,
          source_origin: primaryEvidence.source_origin,
          discovered_via: primaryEvidence.discovered_via,
          evidence_class: primaryEvidence.evidence_class,
          summary: primaryEvidence.summary,
          selection_score: primaryEvidence.selection_score,
          ranking_reason: primaryEvidence.ranking_reason
        }
      : null,
    evidence,
    page_observations: pageObservations,
    propagation_queue: buildPropagationQueue(family, classification, targetFiles),
    contradictions: buildContradictions(family, classification, pageObservations),
    notes: family.notes
  };
}

function buildClaimsReviewed(targetFiles, fileContents, families) {
  return targetFiles.map((file) => ({
    file,
    extracted_claims: extractClaimsFromContent(fileContents[file] || '', 12),
    matched_claim_families: families
      .filter((family) => file === family.canonical_owner || family.dependent_pages.includes(file))
      .map((family) => family.claim_id)
      .sort()
  }));
}

function groupByStatus(familyReports, status) {
  return familyReports.filter((entry) => entry.status === status);
}

function buildEvidenceSources(familyReports) {
  return familyReports.flatMap((entry) =>
    entry.evidence.map((evidence) => ({
      claim_id: entry.claim_id,
      type: evidence.type,
      ref: evidence.ref,
      checked_on: evidence.checked_on,
      ok: evidence.ok,
      matched: evidence.matched,
      summary: evidence.summary,
      source_rank: evidence.source_rank,
      preference_score: evidence.preference_score || 0,
      recency_score: evidence.recency_score || 0,
      evidence_date: evidence.evidence_date || '',
      evidence_state: evidence.evidence_state || '',
      matched_terms: evidence.matched_terms || [],
      selection_score: evidence.selection_score || 0,
      ranking_reason: evidence.ranking_reason || '',
      source_origin: evidence.source_origin || 'explicit',
      discovered_via: evidence.discovered_via || '',
      evidence_class: evidence.evidence_class || evidenceClassification(evidence.type),
      truth_mode: evidence.truth_mode || entry.truth_mode || familyTruthMode(entry),
      issue_truth_role:
        evidence.type === 'github-issue'
          ? (String(evidence.truth_mode || entry.truth_mode || familyTruthMode(entry)) === 'repo_behavior'
            ? 'behavior-adjacent'
            : 'status-evidence')
          : '',
      selection_role: evidence.selection_role || 'supporting',
      comparison_reason: evidence.comparison_reason || '',
      primary_ref: evidence.primary_ref || ''
    }))
  );
}

function buildValidation(report) {
  return {
    target_files: report.scope.target_files.length,
    claim_families: new Set(
      report.claims_reviewed
        .flatMap((entry) => entry.matched_claim_families)
        .filter(Boolean)
    ).size,
    contradictions: report.cross_page_contradictions.length,
    evidence_sources: report.evidence_sources.length
  };
}

function buildTrustSummary(report) {
  const explicitTargets = new Set();
  const inferredTargets = new Set();

  report.propagation_queue.forEach((entry) => {
    if (!entry?.file) return;
    if (entry.role === 'inferred-page') {
      inferredTargets.add(entry.file);
    } else {
      explicitTargets.add(entry.file);
    }
  });

  return {
    unresolved_claims: report.unverified_or_historical_claims.length,
    contradiction_groups: report.cross_page_contradictions.length,
    evidence_sources: report.evidence_sources.length,
    explicit_page_targets: explicitTargets.size,
    inferred_page_targets: inferredTargets.size
  };
}

function buildReportId(kind, targetFiles, generatedAt) {
  const hash = crypto
    .createHash('sha1')
    .update([kind, generatedAt, ...targetFiles].join('|'))
    .digest('hex')
    .slice(0, 12);
  return `page-content-research-${String(generatedAt || '').slice(0, 10)}-${hash}`;
}

function buildMarkdown(report) {
  const mdxSafe = (value) =>
    String(value || '')
      .replace(/[{}]/g, (match) => `\\${match}`)
      .replace(/\s+/g, ' ')
      .trim();
  const lines = [];
  lines.push('# Docs Page Research Report');
  lines.push('');
  lines.push('## Scope');
  lines.push('');
  report.scope.target_files.forEach((file) => lines.push(`- \`${file}\``));
  lines.push('');
  lines.push('## Claims Reviewed');
  lines.push('');
  report.claims_reviewed.forEach((entry) => {
    lines.push(`- \`${entry.file}\``);
    lines.push(`  - claim families: ${entry.matched_claim_families.length ? `\`${entry.matched_claim_families.join('`, `')}\`` : 'none'}`);
    entry.extracted_claims.slice(0, 4).forEach((claim) => lines.push(`  - extracted: ${mdxSafe(claim)}`));
  });
  lines.push('');

  const sections = [
    ['Verified Claims', report.verified_claims],
    ['Conflicted Claims', report.conflicted_claims],
    ['Time-Sensitive Claims', report.time_sensitive_claims],
    ['Unverified / Historical Claims', report.unverified_or_historical_claims]
  ];
  sections.forEach(([title, entries]) => {
    lines.push(`## ${title}`);
    lines.push('');
    if (entries.length === 0) {
      lines.push('- None');
    } else {
      entries.forEach((entry) => {
        lines.push(`- \`${entry.claim_id}\` (${entry.status}, ${entry.confidence})`);
        lines.push(`  - owner: \`${entry.canonical_owner}\``);
        lines.push(`  - truth mode: ${entry.truth_mode}`);
        lines.push(`  - summary: ${mdxSafe(entry.summary)}`);
        if (entry.primary_evidence) {
          lines.push(`  - primary evidence: ${mdxSafe(`${entry.primary_evidence.type} → ${entry.primary_evidence.ref}`)}`);
          lines.push(`  - evidence origin: ${entry.primary_evidence.source_origin}${entry.primary_evidence.discovered_via ? ` via ${entry.primary_evidence.discovered_via}` : ''}`);
          lines.push(`  - evidence class: ${entry.primary_evidence.evidence_class}`);
          lines.push(`  - evidence why: ${mdxSafe(entry.primary_evidence.ranking_reason)}`);
        }
      });
    }
    lines.push('');
  });

  lines.push('## Cross-Page Contradictions');
  lines.push('');
  if (report.cross_page_contradictions.length === 0) {
    lines.push('- None');
  } else {
    report.cross_page_contradictions.forEach((entry) => {
      lines.push(`- \`${entry.claim_id}\` (${entry.claim_family})`);
      lines.push(`  - action: ${entry.recommended_action}`);
      entry.pages.forEach((page) => lines.push(`  - \`${page.file}\`: ${mdxSafe(page.values.join(', ') || page.snippet)}`));
    });
  }
  lines.push('');

  lines.push('## Propagation Queue');
  lines.push('');
  lines.push('| File | Class | Role | Action | Claim |');
  lines.push('|---|---|---|---|---|');
  report.propagation_queue.forEach((entry) => {
    lines.push(`| \`${entry.file}\` | ${entry.page_class} | ${entry.role} | ${entry.action} | \`${entry.claim_id}\` |`);
  });
  lines.push('');

  lines.push('## Evidence Sources');
  lines.push('');
  if (report.evidence_sources.length === 0) {
    lines.push('- None');
  } else {
    report.evidence_sources.forEach((entry) => {
      lines.push(`- \`${entry.claim_id}\` → ${entry.type}: ${mdxSafe(entry.ref)}`);
      lines.push(`  - role: ${entry.selection_role}`);
      lines.push(`  - origin: ${entry.source_origin}${entry.discovered_via ? ` via ${entry.discovered_via}` : ''}`);
      lines.push(`  - class: ${entry.evidence_class}; truth mode: ${entry.truth_mode}`);
      lines.push(`  - checked: ${entry.checked_on}`);
      lines.push(`  - result: ${mdxSafe(entry.summary)}`);
      lines.push(`  - rank: ${entry.source_rank}; score: ${entry.selection_score}`);
      if (entry.evidence_date || entry.evidence_state) {
        lines.push(`  - source metadata: ${mdxSafe([entry.evidence_date, entry.evidence_state].filter(Boolean).join(' | '))}`);
      }
      if (entry.matched_terms.length) {
        lines.push(`  - matched terms: ${mdxSafe(entry.matched_terms.join(', '))}`);
      }
      if (entry.ranking_reason) {
        lines.push(`  - why selected: ${mdxSafe(entry.ranking_reason)}`);
      }
      if (entry.comparison_reason) {
        lines.push(`  - why not primary: ${mdxSafe(entry.comparison_reason)}`);
      }
      if (entry.issue_truth_role) {
        lines.push(`  - issue role: ${entry.issue_truth_role}`);
      }
    });
  }
  lines.push('');

  lines.push('## Trust Summary');
  lines.push('');
  Object.entries(report.trust_summary).forEach(([key, value]) => {
    lines.push(`- ${key}: ${value}`);
  });
  lines.push('');

  lines.push('## Validation');
  lines.push('');
  Object.entries(report.validation).forEach(([key, value]) => {
    lines.push(`- ${key}: ${value}`);
  });
  lines.push('');

  return `${lines.join('\n').trimEnd()}\n`;
}

async function run(args) {
  const targetFiles = [...new Set([args.page, ...args.files].filter(Boolean))].sort();
  const fileContents = {};
  targetFiles.forEach((file) => {
    const absPath = path.resolve(repoRoot(), file);
    if (!fs.existsSync(absPath)) {
      throw new Error(`Target page not found: ${file}`);
    }
    fileContents[file] = readFile(absPath);
  });

  const registries = loadRegistry({ registry: args.registry });
  const claimFamilies = flattenClaimFamilies(registries);
  const selectedFamilies = selectFamilies(claimFamilies, targetFiles, fileContents);

  const familyReports = [];
  for (const family of selectedFamilies) {
    familyReports.push(await buildFamilyReport(family, fileContents, targetFiles));
  }

  const report = {
    report_kind: 'page-research',
    report_id: '',
    generated_at: new Date().toISOString(),
    scope: {
      target_files: targetFiles
    },
    claims_reviewed: buildClaimsReviewed(targetFiles, fileContents, selectedFamilies),
    verified_claims: groupByStatus(familyReports, 'verified'),
    conflicted_claims: groupByStatus(familyReports, 'conflicted'),
    time_sensitive_claims: groupByStatus(familyReports, 'time-sensitive'),
    unverified_or_historical_claims: familyReports.filter((entry) =>
      ['unverified', 'historical-only', 'deprecated'].includes(entry.status)
    ),
    cross_page_contradictions: familyReports.flatMap((entry) => entry.contradictions),
    propagation_queue: familyReports.flatMap((entry) => entry.propagation_queue).sort((a, b) => {
      if (a.file !== b.file) return a.file.localeCompare(b.file);
      return a.claim_id.localeCompare(b.claim_id);
    }),
    evidence_sources: buildEvidenceSources(familyReports),
    trust_summary: {},
    validation: {}
  };
  report.report_id = buildReportId(report.report_kind, targetFiles, report.generated_at);
  report.trust_summary = buildTrustSummary(report);
  report.validation = buildValidation(report);

  if (args.reportJson) {
    writeJson(path.resolve(repoRoot(), args.reportJson), report);
  }
  if (args.reportMd) {
    writeText(path.resolve(repoRoot(), args.reportMd), buildMarkdown(report));
  }

  if (!args.quiet) {
    console.log(
      `✅ docs-page-research: ${selectedFamilies.length} claim family/families, ${report.cross_page_contradictions.length} contradiction(s), ${report.evidence_sources.length} evidence source(s)`
    );
  }

  return 0;
}

function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(`❌ ${error.message}`);
    usage();
    process.exit(1);
  }

  if (args.help) {
    usage();
    process.exit(0);
  }

  run(args)
    .then((code) => process.exit(code))
    .catch((error) => {
      console.error(`❌ ${error.message}`);
      process.exit(1);
    });
}

if (require.main === module) {
  main();
}

module.exports = {
  actionForStatus,
  buildClaimsReviewed,
  buildContradictions,
  classifyFamily,
  collectEvidence,
  resetCaches,
  extractClaimsFromContent,
  extractObservationSnippets,
  extractPatternValues,
  fetchEvidenceRef,
  parseArgs,
  run,
  selectFamilies,
  inferFamilyPages,
  familyRelatedFiles,
  buildReportId,
  buildTrustSummary,
  splitSentences,
  stripMdx
};
