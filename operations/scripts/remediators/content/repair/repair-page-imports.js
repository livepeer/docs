#!/usr/bin/env node
/**
 * @script      repair-page-imports
 * @type        
 * @concern     
 * @niche       
 * @purpose     qa:import-integrity
 * @description Repair only proven-safe page import failures from canonical operations scripts while leaving ambiguous import issues unchanged for review.
 * @mode        read-only
 * @pipeline    manual
 * @scope       operations/scripts, operations/reports/health/page-imports
 * @usage       node operations/scripts/remediators/content/repair/repair-page-imports.js [--dry-run|--write] [--files <paths>] [--output-dir <dir>]
 * @policy      E-R12, E-R14
 */

const fs = require('fs');
const path = require('path');
const importsAudit = require('../../../audits/content/health/page-imports-audit');

const REPO_ROOT = path.resolve(__dirname, '../../../../../');
const DEFAULT_REPORT_DIR = path.join(REPO_ROOT, 'operations', 'reports', 'health', 'page-imports');
const DEFAULT_REPORT = path.join(DEFAULT_REPORT_DIR, 'page-imports-repair.md');
const DEFAULT_REPORT_JSON = path.join(DEFAULT_REPORT_DIR, 'page-imports-repair.json');

function parseArgs(argv) {
  const args = {
    mode: 'dry-run',
    files: [],
    outputDir: DEFAULT_REPORT_DIR,
    report: DEFAULT_REPORT,
    reportJson: DEFAULT_REPORT_JSON,
    json: false,
    help: false
  };
  let reportExplicit = false;
  let reportJsonExplicit = false;
  let outputDirExplicit = false;
  let explicitModeCount = 0;

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    if (token === '--dry-run') {
      args.mode = 'dry-run';
      explicitModeCount += 1;
      continue;
    }
    if (token === '--write') {
      args.mode = 'write';
      explicitModeCount += 1;
      continue;
    }
    if (token === '--json') {
      args.json = true;
      continue;
    }
    if (token === '--files' || token === '--file') {
      const raw = String(argv[index + 1] || '').trim();
      if (raw) {
        raw
          .split(',')
          .map((entry) => entry.trim())
          .filter(Boolean)
          .forEach((entry) => args.files.push(entry));
      }
      index += 1;
      continue;
    }
    if (token === '--output-dir') {
      args.outputDir = path.resolve(REPO_ROOT, argv[index + 1] || '');
      outputDirExplicit = true;
      index += 1;
      continue;
    }
    if (token === '--report') {
      args.report = path.resolve(REPO_ROOT, argv[index + 1] || '');
      reportExplicit = true;
      index += 1;
      continue;
    }
    if (token === '--report-json') {
      args.reportJson = path.resolve(REPO_ROOT, argv[index + 1] || '');
      reportJsonExplicit = true;
      index += 1;
      continue;
    }
    throw new Error(`Unknown argument: ${token}`);
  }

  if (explicitModeCount > 1) {
    throw new Error('Choose only one mode: --dry-run or --write');
  }

  args.files = [...new Set(args.files)];

  if (outputDirExplicit) {
    if (!reportExplicit) args.report = path.join(args.outputDir, 'page-imports-repair.md');
    if (!reportJsonExplicit) args.reportJson = path.join(args.outputDir, 'page-imports-repair.json');
  }

  if (reportExplicit && !reportJsonExplicit) {
    const parsed = path.parse(args.report);
    args.reportJson = path.join(parsed.dir, `${parsed.name}.json`);
  }

  return args;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function relFromRoot(filePath) {
  return path.relative(REPO_ROOT, filePath).split(path.sep).join('/');
}

function escapeRegExp(value) {
  return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function applyRemoval(content, statement) {
  const pattern = new RegExp(`^\\s*${escapeRegExp(statement)}\\s*\\r?\\n?`, 'm');
  if (!pattern.test(content)) {
    return { changed: false, content };
  }
  return {
    changed: true,
    content: content.replace(pattern, '')
  };
}

function renderMarkdown(report) {
  const lines = [];
  lines.push('# Page Imports Repair');
  lines.push('');
  lines.push('## Summary');
  lines.push(`- Mode: ${report.mode}`);
  lines.push(`- Fixable findings: ${report.fixableCount}`);
  lines.push(`- Applied repairs: ${report.appliedCount}`);
  lines.push(`- Remaining unresolved findings: ${report.remainingCount}`);
  lines.push('');
  lines.push('## Repairs');
  if (report.repairs.length === 0) {
    lines.push('- None');
  } else {
    report.repairs.forEach((repair) => {
      lines.push(`- ${repair.file}:${repair.line} ${repair.statement}`);
    });
  }
  lines.push('');
  return `${lines.join('\n')}\n`;
}

function run(options = {}) {
  const args = options.parsedArgs || parseArgs(options.argv || process.argv.slice(2));
  const auditArgs = importsAudit.parseArgs([]);
  auditArgs.files = [...args.files];
  auditArgs.report = path.join(args.outputDir, 'page-imports-audit.pre-repair.md');
  auditArgs.reportJson = path.join(args.outputDir, 'page-imports-audit.pre-repair.json');

  const auditResult = importsAudit.runAudit({ parsedArgs: auditArgs });
  const fixableFindings = auditResult.findings.filter(
    (finding) =>
      finding.findingType === 'forbidden-import' &&
      finding.autoFixable &&
      finding.statement
  );

  const repairs = [];
  const grouped = new Map();
  fixableFindings.forEach((finding) => {
    if (!grouped.has(finding.file)) grouped.set(finding.file, []);
    grouped.get(finding.file).push(finding);
  });

  grouped.forEach((findings, repoPath) => {
        const absPath = path.resolve(REPO_ROOT, repoPath);
    const content = fs.readFileSync(absPath, 'utf8');
    let next = content;
    let appliedForFile = 0;

    findings.forEach((finding) => {
      const result = applyRemoval(next, finding.statement);
      if (result.changed) {
        next = result.content;
        appliedForFile += 1;
        repairs.push({
          file: repoPath,
          line: finding.line,
          statement: finding.statement,
          applied: args.mode === 'write'
        });
      }
    });

    if (args.mode === 'write' && appliedForFile > 0 && next !== content) {
      fs.writeFileSync(absPath, next, 'utf8');
    }
  });

  const summary = {
    generatedAt: new Date().toISOString(),
    mode: args.mode,
    fixableCount: fixableFindings.length,
    appliedCount: repairs.length,
    remainingCount: auditResult.findings.length - fixableFindings.length,
    repairs,
    remainingFindings: auditResult.findings.filter((finding) => !fixableFindings.includes(finding))
  };
  const markdownReport = renderMarkdown(summary);

  ensureDir(path.dirname(args.report));
  fs.writeFileSync(args.report, markdownReport, 'utf8');
  ensureDir(path.dirname(args.reportJson));
  fs.writeFileSync(args.reportJson, `${JSON.stringify(summary, null, 2)}\n`, 'utf8');

  return {
    ...summary,
    markdownReport,
    reportPath: args.report,
    reportJsonPath: args.reportJson
  };
}

function printHelp() {
  console.log(
    [
      'Usage:',
      '  node operations/scripts/remediators/content/repair/repair-page-imports.js [--dry-run|--write] [--files <path[,path...]>] [--output-dir <dir>] [--json]',
      '',
      'Modes:',
      '  --dry-run     Preview safe import repairs without modifying files (default).',
      '  --write       Apply safe repairs to files.',
      '',
      'Safety:',
      '  - Only removes unused page-reachable `react` and `react-dom` imports when the audit marks them auto-fixable.',
      '  - Missing or ambiguous module targets are never guessed or rewritten.'
    ].join('\n')
  );
}

if (require.main === module) {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      printHelp();
      process.exit(0);
    }
    const result = run({ parsedArgs: args });
    if (args.json) {
      process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    }
    process.exit(0);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  DEFAULT_REPORT,
  DEFAULT_REPORT_DIR,
  DEFAULT_REPORT_JSON,
  parseArgs,
  run
};
