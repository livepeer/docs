#!/usr/bin/env node
/**
 * @script            docs-page-research
 * @category          validator
 * @purpose           governance:agent-governance
 * @scope             tools/scripts, tasks/research/claims, tests/unit/docs-page-research.test.js, tasks/reports/repo-ops
 * @owner             docs
 * @needs             R-R27, R-R30
 * @purpose-statement Docs page research runner — extracts factual claims from docs pages, checks evidence sources, detects contradictions across related pages, and emits manual-first research reports.
 * @pipeline          manual — experimental research system
 * @usage             node tools/scripts/docs-page-research.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { loadRegistry, flattenClaimFamilies } = require('./docs-fact-registry');

const DEFAULT_REGISTRY = 'tasks/research/claims';

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
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

function scoreFamilyForTargets(family, targetFiles, fileContents) {
  let score = 0;
  const lowerTerms = family.match_terms.map((entry) => entry.toLowerCase());
  const domainPrefix = family.domain ? `v2/${family.domain}/` : null;
  targetFiles.forEach((file) => {
    if (file === family.canonical_owner || family.dependent_pages.includes(file)) {
      score += 3;
    }
    if (domainPrefix && !file.startsWith(domainPrefix)) {
      return;
    }
    const text = stripMdx(fileContents[file] || '').toLowerCase();
    lowerTerms.forEach((term) => {
      if (term && text.includes(term)) score += 1;
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
  const response = await fetch(url, {
    headers: {
      'user-agent': 'livepeer-docs-research/1.0',
      accept: 'application/json, text/html;q=0.9, text/plain;q=0.8',
      ...headers
    }
  });
  const text = await response.text();
  return {
    ok: response.ok,
    status: response.status,
    text
  };
}

async function fetchEvidenceRef(ref) {
  const checked_on = localIsoDate();
  if (ref.type === 'repo-file' || ref.type === 'repo-discord-signal') {
    const absPath = path.resolve(repoRoot(), ref.ref);
    if (!fs.existsSync(absPath)) {
      return { type: ref.type, ref: ref.ref, checked_on, ok: false, matched: false, summary: 'repo file missing' };
    }
    const text = readFile(absPath);
    const matched = matchAnySignal(text, ref.match_any);
    const matchedSummary = ref.type === 'repo-discord-signal' ? 'repo Discord/community signal matched' : 'repo evidence matched';
    const missingSummary =
      ref.type === 'repo-discord-signal'
        ? 'repo Discord/community signal fetched but signal missing'
        : 'repo evidence fetched but signal missing';
    return {
      type: ref.type,
      ref: ref.ref,
      checked_on,
      ok: true,
      matched,
      summary: matched ? matchedSummary : missingSummary
    };
  }

  if (ref.type === 'official-page') {
    const response = await fetchText(ref.ref);
    const text = htmlToText(response.text);
    const matched = response.ok && matchAnySignal(text, ref.match_any);
    return {
      type: ref.type,
      ref: ref.ref,
      checked_on,
      ok: response.ok,
      matched,
      summary: response.ok ? (matched ? 'official page matched' : 'official page fetched but signal missing') : `official page fetch failed (${response.status})`
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
    const matched = response.ok && matchAnySignal(corpus, ref.match_any);
    return {
      type: ref.type,
      ref: ref.ref,
      checked_on,
      ok: response.ok,
      matched,
      summary: response.ok ? (matched ? 'forum topic matched' : 'forum topic fetched but signal missing') : `forum topic fetch failed (${response.status})`
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
      apiUrl += parsed.value ? `/releases/tags/${parsed.value}` : '/releases/latest';
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
    const matched = response.ok && matchAnySignal(corpus, ref.match_any);
    return {
      type: ref.type,
      ref: ref.ref,
      checked_on,
      ok: response.ok,
      matched,
      summary: response.ok ? (matched ? 'GitHub evidence matched' : 'GitHub evidence fetched but signal missing') : `GitHub fetch failed (${response.status})`
    };
  }

  return {
    type: ref.type,
    ref: ref.ref,
    checked_on,
    ok: false,
    matched: false,
    summary: `unsupported evidence ref type: ${ref.type}`
  };
}

async function collectEvidence(family) {
  const evidence = [];
  for (const ref of family.evidence_refs) {
    evidence.push(await fetchEvidenceRef(ref));
  }
  return evidence;
}

function confidenceLabel(status, evidence) {
  const matchedCount = evidence.filter((entry) => entry.ok && entry.matched).length;
  if (status === 'verified' && matchedCount > 0) return 'high';
  if (status === 'conflicted') return 'low';
  if (status === 'time-sensitive') return matchedCount > 0 ? 'medium' : 'low';
  return matchedCount > 0 ? 'medium' : 'low';
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

function buildPropagationQueue(family, classification) {
  const files = [family.canonical_owner, ...family.dependent_pages];
  return [...new Set(files)]
    .sort()
    .map((file) => ({
      file,
      page_class: pageClass(file),
      role: file === family.canonical_owner ? 'canonical-owner' : 'dependent-page',
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

async function buildFamilyReport(family, fileContents) {
  const pages = [family.canonical_owner, ...family.dependent_pages].filter(fileExists);
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

  const evidence = await collectEvidence(family);
  const classification = classifyFamily(family, evidence, pageObservations);
  return {
    claim_id: family.claim_id,
    claim_family: family.claim_family,
    entity: family.entity,
    canonical_owner: family.canonical_owner,
    registry_status: family.status,
    status: classification.status,
    freshness_class: family.freshness_class,
    confidence: classification.confidence,
    summary: family.claim_summary,
    evidence,
    page_observations: pageObservations,
    propagation_queue: buildPropagationQueue(family, classification),
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
      summary: evidence.summary
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
        lines.push(`  - summary: ${mdxSafe(entry.summary)}`);
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
      lines.push(`  - checked: ${entry.checked_on}`);
      lines.push(`  - result: ${mdxSafe(entry.summary)}`);
    });
  }
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
    familyReports.push(await buildFamilyReport(family, fileContents));
  }

  const report = {
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
    validation: {}
  };
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
  extractClaimsFromContent,
  extractObservationSnippets,
  extractPatternValues,
  fetchEvidenceRef,
  parseArgs,
  run,
  selectFamilies,
  splitSentences,
  stripMdx
};
