#!/usr/bin/env node
/**
 * @script           validate-framework-integrity
 * @category         validator
 * @purpose          governance:repo-health
 * @scope            full-repo
 * @owner            docs
 * @needs            R-R14, R-R18, R-C6
 * @purpose-statement Validates the script governance framework matches actual repo state. Checks headers, classifications, pipelines, and requirements traceability.
 * @pipeline         P5 (scheduled, weekly), P6 (on-demand)
 * @usage            node tools/scripts/validators/structure/validate-framework-integrity.js [--fix-index] [--verbose] [--json] [--check-only]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync, execSync } = require('child_process');

const REPO_ROOT = getRepoRoot();
const CLASSIFICATION_PATH = path.join(REPO_ROOT, 'tasks/reports/script-classifications.json');
const AGGREGATE_INDEX_PATH = 'docs-guide/indexes/scripts-index.mdx';
const GROUP_INDEX_MAP = [
  { root: '.githooks', index: '.githooks/script-index.md' },
  { root: '.github/scripts', index: '.github/script-index.md' },
  { root: 'tests', index: 'tests/script-index.md' },
  { root: 'tools/scripts', index: 'tools/script-index.md' }
];

const SCRIPT_DIRS = [
  'tests/unit/',
  'tests/integration/',
  'tests/utils/',
  'tests/',
  'tools/scripts/',
  'tools/lib/',
  'tools/notion/',
  '.githooks/',
  '.github/scripts/',
  'tasks/scripts/',
  'snippets/automations/'
];

const VALID_CATEGORIES = ['validator', 'enforcer', 'remediator', 'generator', 'automation', 'utility', 'orchestrator'];
const VALID_PURPOSES = [
  'qa:content-quality',
  'qa:link-integrity',
  'qa:repo-health',
  'governance:index-management',
  'governance:agent-governance',
  'governance:repo-health',
  'feature:translation',
  'feature:seo',
  'infrastructure:data-feeds',
  'infrastructure:pipeline-orchestration',
  'tooling:api-spec',
  'tooling:dev-tools'
];
const VALID_SCOPES = ['staged', 'changed', 'full-repo', 'v2-content', 'single-domain', 'single-file', 'external', 'generated-output'];
const REQUIREMENT_RE = /^(?:E|R|F)-[RC]\d+$/;
const SCRIPT_EXTENSIONS = new Set(['.js', '.cjs', '.mjs', '.ts', '.tsx', '.sh', '.bash', '.py']);
const ACTIVE_PIPELINE_RE = /\bP[1-6]\b/;

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

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function printHelp() {
  console.log(
    [
      'Usage: node tools/scripts/validators/structure/validate-framework-integrity.js [options]',
      '',
      'Options:',
      '  --fix-index    Regenerate script indexes via tests/unit/script-docs.test.js --write --rebuild-indexes',
      '  --verbose      Print per-check counts, not just findings',
      '  --json         Emit machine-readable JSON',
      '  --check-only   Exit non-zero on warnings as well as errors',
      '  --help, -h     Show this help message'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = { fixIndex: false, verbose: false, json: false, checkOnly: false, help: false };
  argv.forEach((token) => {
    if (token === '--fix-index') {
      args.fixIndex = true;
      return;
    }
    if (token === '--verbose') {
      args.verbose = true;
      return;
    }
    if (token === '--json') {
      args.json = true;
      return;
    }
    if (token === '--check-only') {
      args.checkOnly = true;
      return;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      return;
    }
    throw new Error(`Unknown argument: ${token}`);
  });
  return args;
}

function shouldExclude(repoPath) {
  const relPath = toPosix(repoPath);
  return (
    relPath === 'tools/scripts/archive' ||
    relPath.startsWith('tools/scripts/archive/') ||
    relPath.includes('/node_modules/') ||
    relPath.startsWith('node_modules/') ||
    relPath.includes('/.git/') ||
    relPath.startsWith('.git/') ||
    relPath.includes('/.venv/') ||
    relPath.startsWith('.venv/') ||
    relPath.includes('/tmp/') ||
    relPath.startsWith('tmp/') ||
    relPath.includes('/__pycache__/') ||
    relPath.endsWith('.pyc') ||
    relPath.includes('.bak') ||
    relPath.endsWith('.disabled')
  );
}

function readFileSafe(repoPath) {
  try {
    return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
  } catch (_error) {
    return '';
  }
}

function isScriptFile(repoPath) {
  if (shouldExclude(repoPath)) return false;
  const ext = path.extname(repoPath).toLowerCase();
  if (SCRIPT_EXTENSIONS.has(ext)) return true;
  if (repoPath.startsWith('.githooks/') && !ext) return true;
  const content = readFileSafe(repoPath);
  return content.startsWith('#!/usr/bin/env') || content.startsWith('#!/bin/');
}

function walkFiles(dirPath, out = []) {
  const absoluteDir = path.join(REPO_ROOT, dirPath);
  if (!fs.existsSync(absoluteDir)) return out;

  fs.readdirSync(absoluteDir, { withFileTypes: true }).forEach((entry) => {
    const relPath = toPosix(path.join(dirPath, entry.name));
    if (shouldExclude(relPath)) return;
    if (entry.isDirectory()) {
      walkFiles(relPath, out);
      return;
    }
    out.push(relPath);
  });

  return out;
}

function discoverScripts() {
  const discovered = new Set();
  SCRIPT_DIRS.forEach((dirPath) => {
    walkFiles(dirPath.replace(/\/$/, ''), []).forEach((repoPath) => {
      if (isScriptFile(repoPath)) {
        discovered.add(repoPath);
      }
    });
  });
  return [...discovered].sort();
}

function discoverArchiveScripts() {
  return walkFiles('tools/scripts/archive', []).filter(isScriptFile).sort();
}

function getHeaderChunk(content) {
  return String(content || '').split('\n').slice(0, 160).join('\n');
}

function getTagValue(header, tagName) {
  const match = header.match(new RegExp(`\\${tagName}\\s+(.+)`));
  return match ? match[1].trim() : '';
}

function parseHeaderTags(repoPath) {
  const header = getHeaderChunk(readFileSafe(repoPath));
  return {
    path: repoPath,
    category: getTagValue(header, '@category'),
    purpose: getTagValue(header, '@purpose'),
    scope: getTagValue(header, '@scope'),
    needs: getTagValue(header, '@needs'),
    pipeline: getTagValue(header, '@pipeline'),
    purposeStatement: getTagValue(header, '@purpose-statement'),
    dualmode: getTagValue(header, '@dualmode'),
    owner: getTagValue(header, '@owner'),
    script: getTagValue(header, '@script')
  };
}

function loadClassificationMap() {
  if (!fs.existsSync(CLASSIFICATION_PATH)) return new Map();
  const parsed = JSON.parse(fs.readFileSync(CLASSIFICATION_PATH, 'utf8'));
  return new Map(
    parsed
      .filter((entry) => entry && typeof entry === 'object' && entry.path)
      .map((entry) => [String(entry.path), entry])
  );
}

function parseIndexEntries(repoPath) {
  const content = readFileSafe(repoPath);
  return content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.startsWith('| `'))
    .map((line) => {
      const match = line.match(/^\|\s*`([^`]+)`\s*\|/);
      return match ? match[1] : '';
    })
    .filter(Boolean);
}

function pushFinding(findings, type, check, pathValue, message) {
  findings.push({ type, check, path: pathValue, message });
}

function compareClassification(tags, classificationRow, findings, record) {
  const pairs = [
    ['category', tags.category, classificationRow.category || ''],
    ['purpose', tags.purpose, classificationRow.purpose || ''],
    ['scope', tags.scope, classificationRow.scope || ''],
    ['needs', tags.needs, classificationRow.needs || ''],
    ['pipeline', tags.pipeline, classificationRow.pipeline || ''],
    ['purpose-statement', tags.purposeStatement, classificationRow.purpose_statement || ''],
    ['dualmode', tags.dualmode, classificationRow.dualmode || '']
  ];

  pairs.forEach(([field, actual, expected]) => {
    if (String(actual || '') !== String(expected || '')) {
      pushFinding(findings, 'error', 'D5', tags.path, `Classification mismatch for ${field}: header="${actual || ''}" json="${expected || ''}"`);
      record('D5', 'error');
    }
  });
}

function auditFrameworkIntegrity(options = {}) {
  const scripts = discoverScripts();
  const indexedScripts = scripts.filter((repoPath) => GROUP_INDEX_MAP.some((group) => repoPath === group.root || repoPath.startsWith(`${group.root}/`)));
  const archiveScripts = discoverArchiveScripts();
  const classificationMap = loadClassificationMap();
  const findings = [];
  const perCheck = {};
  const purposeCoverage = new Map(VALID_PURPOSES.map((purpose) => [purpose, 0]));

  function record(check, type) {
    if (!perCheck[check]) {
      perCheck[check] = { error: 0, warning: 0, info: 0 };
    }
    perCheck[check][type] += 1;
  }

  scripts.forEach((repoPath) => {
    const tags = parseHeaderTags(repoPath);
    const classificationRow = classificationMap.get(repoPath);

    if (!tags.category || !VALID_CATEGORIES.includes(tags.category)) {
      pushFinding(findings, 'error', 'D1', repoPath, `Invalid or missing @category: ${tags.category || '<missing>'}`);
      record('D1', 'error');
    }

    if (!tags.purpose || !VALID_PURPOSES.includes(tags.purpose)) {
      pushFinding(findings, 'error', 'D2', repoPath, `Invalid or missing @purpose: ${tags.purpose || '<missing>'}`);
      record('D2', 'error');
    } else {
      purposeCoverage.set(tags.purpose, (purposeCoverage.get(tags.purpose) || 0) + 1);
    }

    if (tags.needs) {
      tags.needs
        .split(',')
        .map((entry) => entry.trim())
        .filter(Boolean)
        .forEach((entry) => {
          if (!REQUIREMENT_RE.test(entry)) {
            pushFinding(findings, 'error', 'D3', repoPath, `Invalid @needs requirement id: ${entry}`);
            record('D3', 'error');
          }
        });
    }

    if (!tags.scope || !VALID_SCOPES.includes(tags.scope)) {
      pushFinding(findings, 'error', 'D4', repoPath, `Invalid or missing @scope: ${tags.scope || '<missing>'}`);
      record('D4', 'error');
    }

    if (!classificationRow) {
      pushFinding(findings, 'warning', 'D5', repoPath, 'Script is missing from tasks/reports/script-classifications.json');
      record('D5', 'warning');
    } else {
      compareClassification(tags, classificationRow, findings, record);
    }

    if (classificationRow && classificationRow.dualmode && !tags.dualmode) {
      pushFinding(findings, 'warning', 'D7', repoPath, 'Known dual-mode script is missing @dualmode');
      record('D7', 'warning');
    }

    if (!repoPath.startsWith('tools/lib/') && !tags.needs) {
      pushFinding(findings, 'warning', 'D8', repoPath, 'Non-lib script is missing @needs');
      record('D8', 'warning');
    }

    if (!tags.pipeline) {
      pushFinding(findings, 'warning', 'D10', repoPath, 'Missing @pipeline');
      record('D10', 'warning');
    }
  });

  classificationMap.forEach((_row, repoPath) => {
    if (!scripts.includes(repoPath)) {
      pushFinding(findings, 'warning', 'D5', repoPath, 'Classification JSON entry does not match a discovered script');
      record('D5', 'warning');
    }
  });

  GROUP_INDEX_MAP.forEach((group) => {
    const expected = indexedScripts.filter((repoPath) => repoPath === group.root || repoPath.startsWith(`${group.root}/`));
    const actual = parseIndexEntries(group.index);

    expected.forEach((repoPath) => {
      if (!actual.includes(repoPath)) {
        pushFinding(findings, 'warning', 'D6', group.index, `Unindexed script: ${repoPath}`);
        record('D6', 'warning');
      }
    });

    actual.forEach((repoPath) => {
      if (!expected.includes(repoPath)) {
        pushFinding(findings, 'warning', 'D6', group.index, `Orphaned index entry: ${repoPath}`);
        record('D6', 'warning');
      }
    });
  });

  const aggregateEntries = parseIndexEntries(AGGREGATE_INDEX_PATH);
  indexedScripts.forEach((repoPath) => {
    if (!aggregateEntries.includes(repoPath)) {
      pushFinding(findings, 'warning', 'D6', AGGREGATE_INDEX_PATH, `Aggregate index missing script: ${repoPath}`);
      record('D6', 'warning');
    }
  });
  aggregateEntries.forEach((repoPath) => {
    if (!indexedScripts.includes(repoPath)) {
      pushFinding(findings, 'warning', 'D6', AGGREGATE_INDEX_PATH, `Aggregate index orphan entry: ${repoPath}`);
      record('D6', 'warning');
    }
  });

  VALID_PURPOSES.forEach((purpose) => {
    if ((purposeCoverage.get(purpose) || 0) === 0) {
      pushFinding(findings, 'warning', 'D9', purpose, `No active script found for purpose group ${purpose}`);
      record('D9', 'warning');
    }
  });

  archiveScripts.forEach((repoPath) => {
    const tags = parseHeaderTags(repoPath);
    if (ACTIVE_PIPELINE_RE.test(tags.pipeline || '')) {
      pushFinding(findings, 'warning', 'D11', repoPath, `Archived script declares active pipeline: ${tags.pipeline}`);
      record('D11', 'warning');
    }
  });

  const summary = findings.reduce(
    (acc, finding) => {
      acc[finding.type] += 1;
      return acc;
    },
    { totalChecked: scripts.length, error: 0, warning: 0 }
  );

  return {
    scripts,
    findings,
    perCheck,
    summary,
    exitCode: summary.error > 0 || (options.checkOnly && summary.warning > 0) ? 1 : 0
  };
}

function maybeFixIndexes(enabled) {
  if (!enabled) return { ran: false, ok: true, message: 'not requested' };
  const result = spawnSync('node', ['tests/unit/script-docs.test.js', '--write', '--rebuild-indexes'], {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });

  return {
    ran: true,
    ok: result.status === 0,
    message: String(result.stdout || result.stderr || '').trim()
  };
}

function renderText(report, options) {
  const lines = [
    'Framework integrity report',
    `Total checked: ${report.summary.totalChecked} | Errors: ${report.summary.error} | Warnings: ${report.summary.warning}`
  ];

  if (options.verbose) {
    lines.push('');
    Object.entries(report.perCheck)
      .sort(([left], [right]) => left.localeCompare(right))
      .forEach(([check, counts]) => {
        lines.push(`${check}: errors=${counts.error} warnings=${counts.warning} info=${counts.info}`);
      });
  }

  if (report.findings.length > 0) {
    lines.push('');
    report.findings.forEach((finding) => {
      lines.push(`${finding.type.toUpperCase()} ${finding.check} ${finding.path} | ${finding.message}`);
    });
  }

  if (options.fixIndex && report.fixIndex) {
    lines.push('');
    lines.push(`Fix index: ${report.fixIndex.ok ? 'ok' : 'failed'}`);
    if (report.fixIndex.message) {
      lines.push(report.fixIndex.message);
    }
  }

  return lines.join('\n');
}

function buildJsonReport(report) {
  return {
    summary: report.summary,
    perCheck: report.perCheck,
    findings: report.findings
  };
}

function run(args = parseArgs(process.argv.slice(2))) {
  const audit = auditFrameworkIntegrity({ checkOnly: args.checkOnly });
  const fixIndex = maybeFixIndexes(args.fixIndex);
  return {
    ...audit,
    fixIndex
  };
}

if (require.main === module) {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      printHelp();
      process.exit(0);
    }

    const report = run(args);
    if (args.json) {
      process.stdout.write(`${JSON.stringify(buildJsonReport(report))}\n`);
    } else {
      process.stdout.write(`${renderText(report, args)}\n`);
    }
    process.exit(report.exitCode);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  SCRIPT_DIRS,
  VALID_CATEGORIES,
  VALID_PURPOSES,
  VALID_SCOPES,
  discoverScripts,
  parseHeaderTags,
  auditFrameworkIntegrity,
  buildJsonReport,
  run
};
