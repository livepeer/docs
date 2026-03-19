#!/usr/bin/env node
/**
 * @script            check-agent-docs-freshness
 * @category          validator
 * @purpose           governance:agent-governance
 * @scope             tools/scripts/validators/governance, AGENTS.md, .github, .claude, .cursor, .windsurf, docs-guide/policies, ai-tools/ai-skills, contribute
 * @owner             docs
 * @needs             R-R14, R-R18
 * @purpose-statement Validates that canonical agent governance docs and native adapters exist and have been touched within a freshness threshold
 * @pipeline          manual, ci
 * @usage             node tools/scripts/validators/governance/check-agent-docs-freshness.js [--threshold <days>] [--json]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const DEFAULT_THRESHOLD_DAYS = 90;
const REPO_ROOT = getRepoRoot();
const REQUIRED_BASE_ENTRIES = [
  { label: 'AGENTS', path: 'AGENTS.md' },
  { label: 'COPILOT-ADAPTER', path: '.github/copilot-instructions.md' },
  { label: 'CLAUDE-ADAPTER', path: '.claude/CLAUDE.md' },
  { label: 'CURSOR-ADAPTER', path: '.cursor/rules/repo-governance.mdc' },
  { label: 'WINDSURF-ADAPTER', path: '.windsurf/rules/repo-governance.md' },
  { label: 'AGENT-GOVERNANCE-POLICY', path: 'docs-guide/policies/agent-governance-framework.mdx' },
  { label: 'ROOT-ALLOWLIST-GOVERNANCE-POLICY', path: 'docs-guide/policies/root-allowlist-governance.mdx' },
  { label: 'CONTRIBUTOR-AGENT-INSTRUCTIONS', path: 'contribute/CONTRIBUTING/AGENT-INSTRUCTIONS.md' }
];

function getRepoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' });
  if (result.status === 0 && String(result.stdout || '').trim()) {
    return String(result.stdout || '').trim();
  }
  return process.cwd();
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function usage() {
  console.log(
    'Usage: node tools/scripts/validators/governance/check-agent-docs-freshness.js [--threshold <days>] [--json]'
  );
}

function parseArgs(argv) {
  const args = {
    thresholdDays: DEFAULT_THRESHOLD_DAYS,
    json: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--threshold') {
      args.thresholdDays = Number(argv[index + 1]);
      index += 1;
      continue;
    }

    if (token.startsWith('--threshold=')) {
      args.thresholdDays = Number(token.slice('--threshold='.length));
      continue;
    }

    if (token === '--json') {
      args.json = true;
      continue;
    }

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (!Number.isFinite(args.thresholdDays) || args.thresholdDays < 0) {
    throw new Error('Threshold must be a non-negative number of days');
  }

  return args;
}

function runGit(args) {
  const result = spawnSync('git', args, { cwd: REPO_ROOT, encoding: 'utf8' });
  if (result.status !== 0) {
    return '';
  }
  return String(result.stdout || '').trim();
}

function getGitTimestamp(repoPath) {
  const output = runGit(['log', '-1', '--format=%ct', '--', repoPath]);
  if (!output) return null;
  const timestamp = Number(output);
  return Number.isFinite(timestamp) ? timestamp : null;
}

function getSkillDocs() {
  const skillsDir = path.join(REPO_ROOT, 'ai-tools', 'ai-skills');
  if (!fs.existsSync(skillsDir)) return [];

  return fs
    .readdirSync(skillsDir, { withFileTypes: true })
    .filter((entry) => entry.isFile() && /\.md$/i.test(entry.name))
    .map((entry) => toPosix(path.join('ai-tools/ai-skills', entry.name)))
    .sort((left, right) => left.localeCompare(right));
}

function buildRequiredEntries() {
  const records = REQUIRED_BASE_ENTRIES.map((entry) => ({
    label: entry.label,
    candidates: [entry.path],
    resolvedPath: fs.existsSync(path.join(REPO_ROOT, entry.path)) ? entry.path : ''
  }));

  const skillDocs = getSkillDocs();
  if (skillDocs.length === 0) {
    records.push({
      label: 'AI-SKILLS-TOPLEVEL',
      candidates: ['ai-tools/ai-skills/*.md'],
      resolvedPath: ''
    });
  } else {
    skillDocs.forEach((skillDoc) => {
      records.push({
        label: `AI-SKILL:${path.basename(skillDoc)}`,
        candidates: [skillDoc],
        resolvedPath: skillDoc
      });
    });
  }

  return records;
}

function buildRecord(entry, thresholdDays) {
  if (!entry.resolvedPath) {
    return {
      label: entry.label,
      candidates: entry.candidates,
      path: '',
      status: 'ERROR',
      ageDays: null,
      lastTouched: '',
      message: `Missing required file. Checked: ${entry.candidates.join(', ')}`
    };
  }

  const timestamp = getGitTimestamp(entry.resolvedPath);
  if (!timestamp) {
    return {
      label: entry.label,
      candidates: entry.candidates,
      path: entry.resolvedPath,
      status: 'ERROR',
      ageDays: null,
      lastTouched: '',
      message: 'File exists but has no git history'
    };
  }

  const ageDays = Math.floor((Date.now() - timestamp * 1000) / 86400000);
  const lastTouched = new Date(timestamp * 1000).toISOString().slice(0, 10);
  const status = ageDays > thresholdDays ? 'WARNING' : 'INFO';
  const message =
    status === 'WARNING'
      ? `Last updated ${ageDays} days ago`
      : `Touched within ${thresholdDays}-day threshold`;

  return {
    label: entry.label,
    candidates: entry.candidates,
    path: entry.resolvedPath,
    status,
    ageDays,
    lastTouched,
    message
  };
}

function run(options = {}) {
  const thresholdDays = Number.isFinite(options.thresholdDays)
    ? options.thresholdDays
    : DEFAULT_THRESHOLD_DAYS;

  const records = buildRequiredEntries().map((entry) => buildRecord(entry, thresholdDays));
  const summary = summarize(records);
  summary.thresholdDays = thresholdDays;

  return {
    passed: summary.errors === 0,
    summary,
    records
  };
}

function summarize(records) {
  const summary = {
    info: 0,
    warnings: 0,
    errors: 0,
    total: records.length,
    thresholdDays: 0
  };

  records.forEach((record) => {
    if (record.status === 'INFO') summary.info += 1;
    if (record.status === 'WARNING') summary.warnings += 1;
    if (record.status === 'ERROR') summary.errors += 1;
  });

  return summary;
}

function writeHumanReport(records, summary) {
  records.forEach((record) => {
    const location = record.path || '(missing)';
    if (record.status === 'INFO') {
      console.log(`INFO ${location} ${record.message}${record.lastTouched ? ` (${record.lastTouched})` : ''}`);
      return;
    }

    if (record.status === 'WARNING') {
      console.warn(`WARNING ${location} ${record.message} (${record.lastTouched})`);
      return;
    }

    console.error(`ERROR ${location} ${record.message}`);
  });

  const stream = summary.errors > 0 ? process.stderr : process.stdout;
  stream.write(
    `Summary: ${summary.total} files, ${summary.info} info, ${summary.warnings} warnings, ${summary.errors} errors (threshold ${summary.thresholdDays} days)\n`
  );
}

function main() {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      usage();
      process.exit(0);
    }

    const payload = run({ thresholdDays: args.thresholdDays });

    if (args.json) {
      process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);
    } else {
      writeHumanReport(payload.records, payload.summary);
    }

    process.exit(payload.summary.errors > 0 ? 1 : 0);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`check-agent-docs-freshness failed: ${message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  DEFAULT_THRESHOLD_DAYS,
  REQUIRED_BASE_ENTRIES,
  REPO_ROOT,
  parseArgs,
  getSkillDocs,
  buildRequiredEntries,
  buildRecord,
  summarize,
  run
};
