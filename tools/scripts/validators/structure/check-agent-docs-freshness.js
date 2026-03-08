#!/usr/bin/env node
/**
 * @script            check-agent-docs-freshness
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tools/scripts/validators/structure, .github, .cursorrules, AGENTS.md
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Validates agent instruction files against current repo paths, frontmatter guidance, validator locations, and convention freshness anchors
 * @pipeline          manual — diagnostic/investigation tool, run on-demand only
 * @usage             node tools/scripts/validators/structure/check-agent-docs-freshness.js [--help]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const STATIC_TARGETS = [
  'AGENTS.md',
  '.github/AGENTS.md',
  '.cursorrules',
  '.github/copilot-instructions.md'
];
const INSTRUCTIONS_DIR = '.github/instructions';
const ANCHOR_PATHS = [
  'tests/unit/quality.test.js',
  'tests/unit/script-docs.test.js',
  'tools/scripts/new-script.js',
  'docs.json'
];
const FRONTMATTER_FIELDS = ['pageType', 'audience', 'status', 'lastVerified'];
const FRONTMATTER_TRIGGER_RE = /\b(frontmatter|metadata|seo)\b/i;
const VALIDATOR_TRIGGER_RE = /\b(validat(?:e|ion|or|ors)|check(?:er|ers|ing|s)?|enforcement)\b/i;
const EXACT_REPLACEMENTS = new Map([
  ['openapi.yaml', 'api/studio.yaml'],
  ['ai/worker/api/openapi.yaml', 'api/ai-worker.yaml'],
  ['v2/pages/07_resources/documentation-guide/style-guide.mdx', 'v2/resources/documentation-guide/style-guide.mdx'],
  [
    'v2/pages/07_resources/documentation-guide/component-library.mdx',
    'v2/resources/documentation-guide/component-library/component-library.mdx'
  ]
]);
const PREFIX_REPLACEMENTS = [
  ['docs/v2/pages/', 'v2/'],
  ['v2/pages/', 'v2/'],
  ['docs/v1/', 'v1/']
];
const STALE_ANCHORS = ['package.json', 'mint.json', 'mint_v1.json', 'tools/wiki/'];
const ROOT_PREFIXES = new Set([
  '.codex',
  '.git',
  '.github',
  '.githooks',
  'ai-tools',
  'api',
  'contribute',
  'docs',
  'docs-guide',
  'snippets',
  'tasks',
  'tests',
  'tools',
  'v1',
  'v2'
]);
const ROOT_FILE_NAMES = new Set([
  '.allowlist',
  '.cursorrules',
  '.gitattributes',
  '.gitignore',
  '.mintignore',
  '.prettierrc',
  '.prettierrc.yaml',
  'AGENTS.md',
  'ASSISTANT.md',
  'Dockerfile',
  'LICENSE',
  'Makefile',
  'README.md',
  'README-custom-view.md',
  'README_V2.md',
  'SECURITY.md',
  'docs.json',
  'lpd',
  'mint.json',
  'mint_v1.json',
  'openapi.yaml',
  'package.json',
  'style.css'
]);
const COMMAND_PREFIX_RE = /^(?:\$ ?)?(?:\.\/|node\b|bash\b|npm\b|npx\b|git\b|make\b|docker\b|lpd\b)/i;
const HELP_TEXT = [
  'Usage: node tools/scripts/validators/structure/check-agent-docs-freshness.js [--help]',
  '',
  'Checks agent instruction files for stale repo paths, missing frontmatter audit-field guidance,',
  'validator path drift, and file freshness relative to current convention anchors.'
].join('\n');

function getRepoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' });
  if (result.status === 0 && String(result.stdout || '').trim()) {
    return String(result.stdout || '').trim();
  }
  return process.cwd();
}

const REPO_ROOT = getRepoRoot();

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function usage() {
  console.log(HELP_TEXT);
}

function fail(message) {
  console.error(`❌ ${message}`);
  process.exit(1);
}

function parseArgs(argv) {
  const args = { help: false };

  argv.forEach((token) => {
    if (token === '--help' || token === '-h') {
      args.help = true;
      return;
    }
    throw new Error(`Unknown argument: ${token}`);
  });

  return args;
}

function pathExists(repoPath) {
  const normalized = toPosix(repoPath).replace(/^\/+/, '');
  if (!normalized) return false;

  if (normalized === '.git' || normalized.startsWith('.git/')) {
    const suffix = normalized === '.git' ? '' : normalized.slice('.git/'.length);
    if (!suffix) {
      return fs.existsSync(path.join(REPO_ROOT, '.git'));
    }

    const result = spawnSync('git', ['rev-parse', '--git-path', suffix], {
      cwd: REPO_ROOT,
      encoding: 'utf8'
    });
    if (result.status !== 0) return false;
    const resolved = String(result.stdout || '').trim();
    return Boolean(resolved) && fs.existsSync(path.resolve(REPO_ROOT, resolved));
  }

  const direct = path.join(REPO_ROOT, normalized);
  if (fs.existsSync(direct)) return true;

  const trimmed = normalized.replace(/\/+$/, '');
  if (!trimmed || trimmed === normalized) return false;
  return fs.existsSync(path.join(REPO_ROOT, trimmed));
}

function normalizeCandidate(raw) {
  if (!raw) return '';
  let candidate = String(raw).trim();
  candidate = candidate.replace(/^['"`(<[{]+/, '');
  candidate = candidate.replace(/[>'"`)\]}.,;:!?]+$/g, '');
  candidate = candidate.replace(/^\.\/+/, '');
  candidate = candidate.replace(/^\/+/, '/');
  candidate = candidate.replace(/[#?].*$/, '');

  if (!candidate) return '';
  if (candidate.startsWith('../')) return '';
  if (candidate.includes('://') || candidate.startsWith('mailto:')) return '';
  if (candidate.includes('*')) return '';

  return candidate;
}

function canonicalCandidate(candidate) {
  return normalizeCandidate(candidate).replace(/^\/+/, '');
}

function getSuggestion(candidate) {
  const normalized = canonicalCandidate(candidate);
  if (!normalized) return '';
  if (EXACT_REPLACEMENTS.has(normalized)) {
    return EXACT_REPLACEMENTS.get(normalized);
  }

  for (const [prefix, replacement] of PREFIX_REPLACEMENTS) {
    const prefixWithoutSlash = prefix.replace(/\/+$/, '');
    if (normalized === prefixWithoutSlash) {
      return replacement.replace(/\/+$/, '');
    }
    if (normalized.startsWith(prefix)) {
      return `${replacement}${normalized.slice(prefix.length)}`;
    }
  }

  return '';
}

function isExplicitStaleAnchor(candidate) {
  const normalized = canonicalCandidate(candidate);
  if (!normalized) return false;
  return STALE_ANCHORS.some((anchor) => {
    const cleanAnchor = anchor.replace(/\/+$/, '');
    return normalized === cleanAnchor || normalized.startsWith(anchor);
  });
}

function extractCandidatesFromText(text) {
  const matches = new Set();
  String(text || '')
    .split(/\s+/)
    .map((token) => canonicalCandidate(token))
    .filter(Boolean)
    .filter(looksLikePathCandidate)
    .forEach((candidate) => matches.add(candidate));
  return [...matches];
}

function extractCandidatesFromLine(line) {
  const candidates = new Set();
  const backtickRe = /`([^`]+)`/g;
  let backtickMatch;

  while ((backtickMatch = backtickRe.exec(line)) !== null) {
    extractCandidatesFromText(backtickMatch[1]).forEach((candidate) => candidates.add(candidate));
  }

  return [...candidates];
}

function looksLikePathCandidate(candidate) {
  const normalized = canonicalCandidate(candidate);
  if (!normalized) return false;
  if (normalized.startsWith('../')) return false;
  if (normalized.includes('://') || normalized.startsWith('mailto:')) return false;
  if (normalized.includes('*')) return false;

  if (normalized.includes('/')) {
    const firstSegment = normalized.split('/').filter(Boolean)[0] || '';
    return ROOT_PREFIXES.has(firstSegment);
  }

  return ROOT_FILE_NAMES.has(normalized);
}

function isCommandLikeLine(line, inCodeFence) {
  const trimmed = String(line || '').trim();
  if (!trimmed) return false;
  if (inCodeFence) return true;
  if (/^```/.test(trimmed)) return false;
  if (/^\s{4,}\S/.test(line)) return true;
  return COMMAND_PREFIX_RE.test(trimmed);
}

function readText(repoPath) {
  return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
}

function addFinding(findings, finding) {
  const entry = {
    severity: finding.severity === 'warning' ? 'warning' : 'error',
    file: toPosix(finding.file),
    line: Number.isInteger(finding.line) && finding.line > 0 ? finding.line : 1,
    rule: String(finding.rule || '').trim() || 'agent-docs-freshness',
    message: String(finding.message || '').trim(),
    suggestion: String(finding.suggestion || '').trim()
  };

  if (!entry.message) return;

  const key = [
    entry.severity,
    entry.file,
    entry.line,
    entry.rule,
    entry.message,
    entry.suggestion
  ].join('|');

  if (findings.seen.has(key)) return;
  findings.seen.add(key);
  findings.items.push(entry);
}

function getGitCommitMeta(repoPath) {
  const result = spawnSync(
    'git',
    ['log', '-1', '--format=%ct|%cs', '--', repoPath],
    { cwd: REPO_ROOT, encoding: 'utf8' }
  );

  if (result.status !== 0) {
    return null;
  }

  const [timestampRaw, date] = String(result.stdout || '').trim().split('|');
  const timestamp = Number(timestampRaw);
  if (!Number.isFinite(timestamp) || !date) {
    return null;
  }

  return {
    timestamp,
    date
  };
}

function getLatestAnchor() {
  return ANCHOR_PATHS
    .map((repoPath) => {
      const meta = getGitCommitMeta(repoPath);
      if (!meta) return null;
      return {
        path: repoPath,
        timestamp: meta.timestamp,
        date: meta.date
      };
    })
    .filter(Boolean)
    .sort((left, right) => right.timestamp - left.timestamp)[0] || null;
}

function collectTargetFiles() {
  const files = [];

  STATIC_TARGETS.forEach((repoPath) => {
    if (pathExists(repoPath)) files.push(toPosix(repoPath));
  });

  const instructionsAbs = path.join(REPO_ROOT, INSTRUCTIONS_DIR);
  if (fs.existsSync(instructionsAbs) && fs.statSync(instructionsAbs).isDirectory()) {
    fs.readdirSync(instructionsAbs, { withFileTypes: true })
      .filter((entry) => entry.isFile() && entry.name.endsWith('.instructions.md'))
      .map((entry) => toPosix(path.join(INSTRUCTIONS_DIR, entry.name)))
      .sort((left, right) => left.localeCompare(right, 'en', { sensitivity: 'base' }))
      .forEach((repoPath) => files.push(repoPath));
  }

  return files;
}

function checkPathReferences(repoPath, lines, findings) {
  let inCodeFence = false;

  lines.forEach((line, index) => {
    const lineNumber = index + 1;
    const trimmed = line.trim();

    if (/^```/.test(trimmed)) {
      inCodeFence = !inCodeFence;
      return;
    }

    const candidates = new Set(extractCandidatesFromLine(line));
    if (isCommandLikeLine(line, inCodeFence)) {
      extractCandidatesFromText(line).forEach((candidate) => candidates.add(candidate));
    }

    [...candidates].forEach((candidate) => {
      const suggestion = getSuggestion(candidate);
      if (suggestion) {
        addFinding(findings, {
          severity: 'error',
          file: repoPath,
          line: lineNumber,
          rule: 'legacy-path-reference',
          message: `Referenced path \`${candidate}\` uses a deprecated repo convention.`,
          suggestion: `Use \`${suggestion}\` instead.`
        });
        return;
      }

      if (isExplicitStaleAnchor(candidate) && !pathExists(candidate)) {
        addFinding(findings, {
          severity: 'error',
          file: repoPath,
          line: lineNumber,
          rule: 'stale-repo-anchor',
          message: `Referenced path \`${candidate}\` does not exist in the current repo layout.`
        });
        return;
      }

      if (!pathExists(candidate)) {
        addFinding(findings, {
          severity: 'error',
          file: repoPath,
          line: lineNumber,
          rule: 'missing-repo-path',
          message: `Referenced path \`${candidate}\` does not exist in the repository.`
        });
      }
    });
  });
}

function checkFrontmatterGuidance(repoPath, lines, findings) {
  const triggerIndex = lines.findIndex((line) => FRONTMATTER_TRIGGER_RE.test(line));
  if (triggerIndex === -1) return;

  const content = lines.join('\n');
  const missingFields = FRONTMATTER_FIELDS.filter((field) => !new RegExp(`\\b${field}\\b`).test(content));
  if (missingFields.length === 0) return;

  addFinding(findings, {
    severity: 'error',
    file: repoPath,
    line: triggerIndex + 1,
    rule: 'frontmatter-guidance-drift',
    message: `Frontmatter guidance is missing current audit fields: ${missingFields.join(', ')}.`
  });
}

function checkValidatorStructureGuidance(repoPath, lines, findings) {
  const content = lines.join('\n');
  if (!VALIDATOR_TRIGGER_RE.test(content)) return;
  if (!content.includes('tools/scripts/')) return;
  if (content.includes('tools/scripts/validators/')) return;

  const lineIndex = lines.findIndex((line) => line.includes('tools/scripts/'));
  addFinding(findings, {
    severity: 'warning',
    file: repoPath,
    line: lineIndex >= 0 ? lineIndex + 1 : 1,
    rule: 'validator-path-guidance',
    message: 'Validation guidance references `tools/scripts/` without mentioning `tools/scripts/validators/`.'
  });
}

function checkFreshness(repoPath, findingsForFile, aggregateFindings, latestAnchor) {
  if (!latestAnchor || findingsForFile.length === 0) return;

  const fileMeta = getGitCommitMeta(repoPath);
  if (!fileMeta) return;
  if (fileMeta.timestamp >= latestAnchor.timestamp) return;

  addFinding(aggregateFindings, {
    severity: 'warning',
    file: repoPath,
    line: 1,
    rule: 'agent-doc-freshness',
    message: `File last updated on ${fileMeta.date}, older than convention anchor \`${latestAnchor.path}\` (${latestAnchor.date}).`
  });
}

function compareFindings(left, right) {
  const severityRank = { error: 0, warning: 1 };
  if (severityRank[left.severity] !== severityRank[right.severity]) {
    return severityRank[left.severity] - severityRank[right.severity];
  }
  if (left.file !== right.file) return left.file.localeCompare(right.file, 'en', { sensitivity: 'base' });
  if (left.line !== right.line) return left.line - right.line;
  return left.rule.localeCompare(right.rule, 'en', { sensitivity: 'base' });
}

function analyzeFile(repoPath, aggregateFindings, latestAnchor) {
  const lines = readText(repoPath).split(/\r?\n/);
  const fileFindings = {
    seen: new Set(),
    items: []
  };

  checkPathReferences(repoPath, lines, fileFindings);
  checkFrontmatterGuidance(repoPath, lines, fileFindings);
  checkValidatorStructureGuidance(repoPath, lines, fileFindings);

  fileFindings.items.forEach((item) => addFinding(aggregateFindings, item));
  checkFreshness(repoPath, fileFindings.items, aggregateFindings, latestAnchor);
}

function printResults(files, findings, latestAnchor) {
  const errors = findings.filter((finding) => finding.severity === 'error');
  const warnings = findings.filter((finding) => finding.severity === 'warning');

  console.log('Agent docs freshness check');
  console.log(`Files scanned: ${files.length}`);
  console.log(`Errors: ${errors.length}`);
  console.log(`Warnings: ${warnings.length}`);
  if (latestAnchor) {
    console.log(`Latest convention anchor: ${latestAnchor.path} (${latestAnchor.date})`);
  }

  if (findings.length === 0) {
    console.log('No freshness issues found.');
    return;
  }

  findings
    .slice()
    .sort(compareFindings)
    .forEach((finding) => {
      const severity = finding.severity.toUpperCase();
      const suggestion = finding.suggestion ? ` | suggestion: ${finding.suggestion}` : '';
      console.log(
        `${severity} ${finding.file}:${finding.line} [${finding.rule}] ${finding.message}${suggestion}`
      );
    });
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    return;
  }

  const files = collectTargetFiles();
  const latestAnchor = getLatestAnchor();
  const findings = {
    seen: new Set(),
    items: []
  };

  files.forEach((repoPath) => analyzeFile(repoPath, findings, latestAnchor));
  printResults(files, findings.items, latestAnchor);
  process.exit(findings.items.some((finding) => finding.severity === 'error') ? 1 : 0);
}

try {
  main();
} catch (error) {
  fail(error instanceof Error ? error.message : String(error));
}
