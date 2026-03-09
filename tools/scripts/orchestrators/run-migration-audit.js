#!/usr/bin/env node
/**
 * @script           run-migration-audit
 * @category         orchestrator
 * @purpose          governance:repo-health
 * @scope            full-repo
 * @owner            docs
 * @needs            E-C1, R-R14, R-C6
 * @purpose-statement Runs all framework validation checks after a migration phase and produces a compliance report.
 * @pipeline         manual
 * @usage            node tools/scripts/orchestrators/run-migration-audit.js [--phase E|A|B|C|D|F] [--output <path>]
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');
const {
  VALID_CATEGORIES,
  VALID_PURPOSES,
  VALID_SCOPES,
  discoverScripts,
  parseHeaderTags
} = require('../validators/structure/validate-framework-integrity.js');

const INVOCATION_CWD = process.cwd();
const REPO_ROOT = getRepoRoot();
const CLASSIFICATION_PATH = path.join(REPO_ROOT, 'tasks/reports/script-classifications.json');
const AGGREGATE_INDEX_PATH = path.join(REPO_ROOT, 'docs-guide/indexes/scripts-index.mdx');
const REQUIRED_FIELDS = ['script', 'category', 'purpose', 'scope', 'owner'];
const OPTIONAL_FIELDS = ['needs', 'purposeStatement', 'pipeline', 'usage'];
const REQUIREMENT_RE = /^(?:E|R|F)-[RC]\d+$/;

if (process.cwd() !== REPO_ROOT) {
  process.chdir(REPO_ROOT);
}

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore']
    }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

function parseArgs(argv) {
  const args = { phase: 'A', output: '' };
  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--phase') {
      const value = String(argv[index + 1] || '').trim();
      if (!value || !/^[EABCDF]$/.test(value)) {
        throw new Error('Expected --phase E|A|B|C|D|F');
      }
      args.phase = value;
      index += 1;
      continue;
    }
    if (token === '--output') {
      const value = String(argv[index + 1] || '').trim();
      if (!value) {
        throw new Error('Expected path after --output');
      }
      args.output = value;
      index += 1;
      continue;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    throw new Error(`Unknown argument: ${token}`);
  }
  return args;
}

function printHelp() {
  console.log('Usage: node tools/scripts/orchestrators/run-migration-audit.js [--phase E|A|B|C|D|F] [--output <path>]');
}

function runCommand(command, args) {
  const result = spawnSync(command, args, {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });

  return {
    command: [command, ...args].join(' '),
    status: typeof result.status === 'number' ? result.status : 1,
    ok: result.status === 0,
    stdout: String(result.stdout || ''),
    stderr: String(result.stderr || '')
  };
}

function readJsonFile(filePath) {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function parseIndexEntries(filePath) {
  if (!fs.existsSync(filePath)) return new Set();
  return new Set(
    fs
      .readFileSync(filePath, 'utf8')
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.startsWith('| `'))
      .map((line) => {
        const match = line.match(/^\|\s*`([^`]+)`\s*\|/);
        return match ? match[1] : '';
      })
      .filter(Boolean)
  );
}

function getUsageValue(repoPath) {
  const content = fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
  const header = content.split('\n').slice(0, 160).join('\n');
  const inlineMatch = header.match(/\@usage[ \t]+([^\n\r]+)/);
  if (inlineMatch && inlineMatch[1].trim()) {
    return inlineMatch[1].trim();
  }

  const lines = header.split('\n');
  const usageIndex = lines.findIndex((line) => line.includes('@usage'));
  if (usageIndex === -1) return '';

  for (let index = usageIndex + 1; index < lines.length; index += 1) {
    const stripped = lines[index]
      .trim()
      .replace(/^\*\s?/, '')
      .replace(/^#\s?/, '')
      .trim();
    if (!stripped) continue;
    if (stripped.startsWith('@')) break;
    if (stripped.startsWith('/**') || stripped.startsWith('*/')) continue;
    return stripped;
  }

  return '';
}

function hasValidNeeds(rawValue) {
  const value = String(rawValue || '').trim();
  if (!value) return false;
  return value
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean)
    .every((entry) => REQUIREMENT_RE.test(entry));
}

function countRequiredIssues(tags) {
  let issues = 0;
  if (!tags.script) issues += 1;
  if (!tags.owner) issues += 1;
  if (!VALID_CATEGORIES.includes(tags.category || '')) issues += 1;
  if (!VALID_PURPOSES.includes(tags.purpose || '')) issues += 1;
  if (!VALID_SCOPES.includes(tags.scope || '')) issues += 1;
  return issues;
}

function countOptionalIssues(tags) {
  let issues = 0;
  if (!hasValidNeeds(tags.needs)) issues += 1;
  if (!String(tags.purposeStatement || '').trim()) issues += 1;
  if (!String(tags.pipeline || '').trim()) issues += 1;
  if (!String(tags.usage || '').trim()) issues += 1;
  return issues;
}

function buildGradeBreakdown() {
  const scripts = discoverScripts();
  const classifications = new Map(readJsonFile(CLASSIFICATION_PATH).map((row) => [String(row.path), row]));
  const indexedPaths = parseIndexEntries(AGGREGATE_INDEX_PATH);
  const grades = { A: 0, B: 0, C: 0, F: 0 };

  scripts.forEach((repoPath) => {
    const tags = { ...parseHeaderTags(repoPath), usage: getUsageValue(repoPath) };
    const hasAnyHeader = REQUIRED_FIELDS.some((field) => String(tags[field] || '').trim())
      || OPTIONAL_FIELDS.some((field) => String(tags[field] || '').trim());
    const hasClassification = classifications.has(repoPath);
    const isIndexed = indexedPaths.has(repoPath);
    const requiredIssues = countRequiredIssues(tags);
    const optionalIssues = countOptionalIssues(tags);

    if (!hasAnyHeader || !hasClassification) {
      grades.F += 1;
      return;
    }

    if (requiredIssues === 0 && optionalIssues === 0 && isIndexed) {
      grades.A += 1;
      return;
    }

    if (requiredIssues === 0) {
      grades.B += 1;
      return;
    }

    if (requiredIssues <= 2) {
      grades.C += 1;
      return;
    }

    grades.F += 1;
  });

  return { scriptsChecked: scripts.length, grades };
}

function parseIntegritySummary(rawJson) {
  try {
    const parsed = JSON.parse(rawJson);
    return {
      errors: Number(parsed?.summary?.error || 0),
      warnings: Number(parsed?.summary?.warning || 0)
    };
  } catch (_error) {
    return { errors: -1, warnings: -1 };
  }
}

function formatPercent(numerator, denominator) {
  if (!denominator) return '0%';
  return `${Math.round((numerator / denominator) * 100)}%`;
}

function runAudit(args = parseArgs(process.argv.slice(2))) {
  const integrity = runCommand('node', ['tools/scripts/validators/structure/validate-framework-integrity.js', '--json']);
  const scriptDocs = runCommand('node', ['tests/unit/script-docs.test.js']);
  const tests = runCommand('node', ['tests/run-all.js', '--skip-browser']);

  const gradeBreakdown = buildGradeBreakdown();
  const report = {
    date: new Date().toISOString(),
    phase: args.phase,
    scripts_checked: gradeBreakdown.scriptsChecked,
    grades: gradeBreakdown.grades,
    enforcement_rate: formatPercent(gradeBreakdown.grades.A + gradeBreakdown.grades.B, gradeBreakdown.scriptsChecked),
    integrity: parseIntegritySummary(integrity.stdout),
    tests: integrity.ok && scriptDocs.ok && tests.ok ? 'PASS' : 'FAIL'
  };

  if (args.output) {
    const outputPath = path.resolve(INVOCATION_CWD, args.output);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, `${JSON.stringify(report, null, 2)}\n`);
  }

  return {
    report,
    commands: { integrity, scriptDocs, tests }
  };
}

if (require.main === module) {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      printHelp();
      process.exit(0);
    }

    const result = runAudit(args);
    process.stdout.write(`${JSON.stringify(result.report, null, 2)}\n`);
    process.exit(0);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  parseArgs,
  runAudit
};
