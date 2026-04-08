#!/usr/bin/env node
/**
 * @script      page-integrity-dispatch
 * @type        dispatch
 * @concern     health
 * @niche       health
 * @purpose     
 * @description Orchestrate the page-integrity family from canonical operations scripts so audit, repair, rerun, and report publication share one stable workflow contract.
 * @mode        dispatch
 * @pipeline    manual, P6
 * @scope       operations/scripts, operations/reports/health/page-integrity, .github/workflows
 * @usage       node operations/scripts/dispatch/content/health/page-integrity-dispatch.js [--staged|--files <paths>|--tab <tab>] [--strict] [--no-repair] [--issue-mode off|plan] [--output-dir <dir>]
 * @policy      E-R12, E-R14
 */

const fs = require('fs');
const path = require('path');
const linksAudit = require('../../../audits/content/health/page-links-audit');
const importsAudit = require('../../../audits/content/health/page-imports-audit');
const repairPageLinks = require('../../../remediators/content/repair/repair-page-links');
const repairPageImports = require('../../../remediators/content/repair/repair-page-imports');
const rollingIssue = require('./page-integrity-rolling-issue');

const REPO_ROOT = path.resolve(__dirname, '../../../../../');
const DEFAULT_OUTPUT_DIR = path.join(REPO_ROOT, 'operations', 'reports', 'health', 'page-integrity');
const DEFAULT_REPORT = path.join(DEFAULT_OUTPUT_DIR, 'page-integrity-dispatch.md');
const DEFAULT_REPORT_JSON = path.join(DEFAULT_OUTPUT_DIR, 'page-integrity-dispatch.json');
const ISSUE_MODE_VALUES = new Set(['off', 'plan']);
const LINK_BLOCKING_STATUSES = new Set(['missing', 'route-missing']);

function parseArgs(argv) {
  const args = {
    stagedOnly: false,
    strict: false,
    repair: true,
    scope: 'routable-v2',
    tab: '',
    anchor: '',
    group: '',
    files: [],
    outputDir: DEFAULT_OUTPUT_DIR,
    report: DEFAULT_REPORT,
    reportJson: DEFAULT_REPORT_JSON,
    issueMode: process.env.GITHUB_ACTIONS === 'true' ? 'plan' : 'off',
    externalPolicy: 'classify',
    externalLinkTypes: 'navigational',
    json: false
  };
  let reportExplicit = false;
  let reportJsonExplicit = false;
  let outputDirExplicit = false;

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];
    if (token === '--staged') {
      args.stagedOnly = true;
      continue;
    }
    if (token === '--strict') {
      args.strict = true;
      continue;
    }
    if (token === '--repair') {
      args.repair = true;
      continue;
    }
    if (token === '--no-repair') {
      args.repair = false;
      continue;
    }
    if (token === '--json') {
      args.json = true;
      continue;
    }
    if (token === '--scope') {
      args.scope = String(argv[index + 1] || '').trim().toLowerCase();
      index += 1;
      continue;
    }
    if (token === '--tab') {
      args.tab = String(argv[index + 1] || '').trim();
      index += 1;
      continue;
    }
    if (token === '--anchor') {
      args.anchor = String(argv[index + 1] || '').trim();
      index += 1;
      continue;
    }
    if (token === '--group') {
      args.group = String(argv[index + 1] || '').trim();
      index += 1;
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
    if (token === '--issue-mode') {
      args.issueMode = String(argv[index + 1] || '').trim().toLowerCase();
      index += 1;
      continue;
    }
    if (token === '--external-policy') {
      args.externalPolicy = String(argv[index + 1] || '').trim().toLowerCase();
      index += 1;
      continue;
    }
    if (token === '--external-link-types') {
      args.externalLinkTypes = String(argv[index + 1] || '').trim().toLowerCase();
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
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    throw new Error(`Unknown argument: ${token}`);
  }

  args.files = [...new Set(args.files)];

  if (!ISSUE_MODE_VALUES.has(args.issueMode)) {
    throw new Error('Invalid --issue-mode value. Use off|plan.');
  }

  if (args.group && !args.tab) {
    throw new Error('The --group option requires --tab.');
  }

  if (args.anchor && !args.tab) {
    throw new Error('The --anchor option requires --tab.');
  }

  if (outputDirExplicit) {
    if (!reportExplicit) args.report = path.join(args.outputDir, 'page-integrity-dispatch.md');
    if (!reportJsonExplicit) args.reportJson = path.join(args.outputDir, 'page-integrity-dispatch.json');
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

function resolveEntryFiles(args) {
  const seed = importsAudit.parseArgs([]);
  seed.stagedOnly = args.stagedOnly;
  seed.scope = args.scope;
  seed.tab = args.tab;
  seed.anchor = args.anchor;
  seed.group = args.group;
  seed.files = [...args.files];
  return importsAudit.resolveEntryFiles(seed);
}

function buildFileArg(files) {
  return files.map((filePath) => relFromRoot(filePath)).join(',');
}

function collectLinkFindings(jsonReport) {
  const findings = [];
  (jsonReport?.files || []).forEach((fileRecord) => {
    (fileRecord.refs || []).forEach((ref) => {
      if (!LINK_BLOCKING_STATUSES.has(String(ref.status || ''))) return;
      findings.push({
        findingType: 'missing-link',
        severity: 'error',
        file: fileRecord.file,
        line: Number(ref.line || 1),
        column: Number(ref.column || 1),
        sourceType: ref.sourceType || '',
        rawValue: ref.rawPath || '',
        resolvedTarget: ref.resolvedPath || '',
        status: ref.status || 'missing',
        suggestedFix: Array.isArray(ref.movedCandidates) && ref.movedCandidates.length > 0 ? ref.movedCandidates[0] : '',
        autoFixable: false,
        repairConfidence: null
      });
    });
  });
  return findings;
}

function collectImportFindings(jsonReport) {
  return (jsonReport?.findings || []).map((finding) => ({ ...finding }));
}

function buildMarkdownReport(summary) {
  const lines = [];
  lines.push('# Page Integrity Dispatch');
  lines.push('');
  lines.push('## Summary');
  lines.push(`- Entry files: ${summary.entryFiles.length}`);
  lines.push(`- Repair enabled: ${summary.repairEnabled ? 'true' : 'false'}`);
  lines.push(`- Initial link findings: ${summary.initial.links}`);
  lines.push(`- Initial import findings: ${summary.initial.imports}`);
  lines.push(`- Final link findings: ${summary.final.links}`);
  lines.push(`- Final import findings: ${summary.final.imports}`);
  lines.push(`- Combined unresolved findings: ${summary.unresolvedFindings.length}`);
  lines.push('');
  lines.push('## Repairs');
  lines.push(`- Link rewrites applied: ${summary.linkRepair.rewriteCount || 0}`);
  lines.push(`- Import repairs applied: ${summary.importRepair.appliedCount || 0}`);
  lines.push('');
  lines.push('## Unresolved Findings');
  if (summary.unresolvedFindings.length === 0) {
    lines.push('- None');
  } else {
    summary.unresolvedFindings.forEach((finding) => {
      lines.push(`- ${finding.file}:${finding.line} [${finding.findingType}] ${finding.rawValue || finding.resolvedTarget || ''}`);
      if (finding.suggestedFix) lines.push(`  - suggested fix: ${finding.suggestedFix}`);
    });
  }
  lines.push('');
  if (summary.issuePlan) {
    lines.push('## Rolling Issue Plan');
    lines.push(`- Action: ${summary.issuePlan.action}`);
    lines.push(`- Title: ${summary.issuePlan.title}`);
    lines.push('');
  }
  return `${lines.join('\n')}\n`;
}

async function run(options = {}) {
  const args = options.parsedArgs || parseArgs(options.argv || process.argv.slice(2));
  const entryFiles = options.entryFiles || resolveEntryFiles(args);
  if (entryFiles.length === 0) {
    const emptySummary = {
      generatedAt: new Date().toISOString(),
      repairEnabled: args.repair,
      entryFiles: [],
      initial: { links: 0, imports: 0 },
      final: { links: 0, imports: 0 },
      linkRepair: { rewriteCount: 0, unresolvedCount: 0 },
      importRepair: { appliedCount: 0, remainingCount: 0 },
      unresolvedFindings: [],
      issuePlan: null,
      reports: {}
    };
    const markdownReport = buildMarkdownReport(emptySummary);
    ensureDir(path.dirname(args.report));
    fs.writeFileSync(args.report, markdownReport, 'utf8');
    ensureDir(path.dirname(args.reportJson));
    fs.writeFileSync(args.reportJson, `${JSON.stringify(emptySummary, null, 2)}\n`, 'utf8');
    return {
      exitCode: 0,
      summary: emptySummary,
      markdownReport,
      reportPath: args.report,
      reportJsonPath: args.reportJson
    };
  }
  const fileArg = buildFileArg(entryFiles);
  const linksDir = path.join(args.outputDir, 'page-links');
  const importsDir = path.join(args.outputDir, 'page-imports');

  const linksAuditArgs = linksAudit.parseArgs([
    '--files', fileArg,
    '--output-dir', linksDir,
    '--external-policy', args.externalPolicy,
    '--external-link-types', args.externalLinkTypes,
    '--no-write-links'
  ]);
  const importsAuditArgs = importsAudit.parseArgs([
    '--files', fileArg,
    '--output-dir', importsDir
  ]);

  const initialLinks = await linksAudit.runAudit({ parsedArgs: linksAuditArgs });
  const initialImports = importsAudit.runAudit({ parsedArgs: importsAuditArgs });

  let linkRepair = { rewriteCount: 0 };
  let importRepair = { appliedCount: 0 };
  if (args.repair) {
    linkRepair = repairPageLinks.run({
      parsedArgs: repairPageLinks.parseArgs([
        '--write',
        '--files', fileArg,
        '--report-dir', linksDir
      ]),
      quiet: true
    });
    importRepair = repairPageImports.run({
      parsedArgs: repairPageImports.parseArgs([
        '--write',
        '--files', fileArg,
        '--output-dir', importsDir
      ])
    });
  }

  const finalLinks = await linksAudit.runAudit({ parsedArgs: linksAuditArgs });
  const finalImports = importsAudit.runAudit({ parsedArgs: importsAuditArgs });
  const unresolvedFindings = [
    ...collectLinkFindings(finalLinks.jsonReport),
    ...collectImportFindings(finalImports.jsonReport)
  ];

  const issuePlan = args.issueMode === 'plan'
    ? {
        action: rollingIssue.getIssueAction({ existingIssue: null, unresolvedCount: unresolvedFindings.length }),
        title: rollingIssue.ROLLING_ISSUE_TITLE,
        labels: rollingIssue.ROLLING_ISSUE_LABELS,
        body: rollingIssue.buildIssueBody({
          runUrl: process.env.GITHUB_RUN_ID
            ? `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}`
            : 'local-run',
          topFindings: rollingIssue.buildTopFindings(unresolvedFindings, 30),
          unresolvedCount: unresolvedFindings.length,
          scannedFiles: finalLinks.fileCount + finalImports.fileCount,
          linksSummary: {
            unresolvedCount: finalLinks.jsonReport?.aggregate?.internalMissingRefs || 0,
            fileCount: finalLinks.fileCount
          },
          importsSummary: {
            errorCount: finalImports.findings.length,
            fileCount: finalImports.fileCount
          }
        })
      }
    : null;

  const summary = {
    generatedAt: new Date().toISOString(),
    repairEnabled: args.repair,
    entryFiles: entryFiles.map((filePath) => relFromRoot(filePath)),
    initial: {
      links: initialLinks.jsonReport?.aggregate?.internalMissingRefs || 0,
      imports: initialImports.findings.length
    },
    final: {
      links: finalLinks.jsonReport?.aggregate?.internalMissingRefs || 0,
      imports: finalImports.findings.length
    },
    linkRepair: {
      rewriteCount: linkRepair.rewriteCount || 0,
      unresolvedCount: linkRepair.unresolvedCount || 0
    },
    importRepair: {
      appliedCount: importRepair.appliedCount || 0,
      remainingCount: importRepair.remainingCount || 0
    },
    unresolvedFindings,
    issuePlan,
    reports: {
      linksMarkdown: relFromRoot(finalLinks.reportPath),
      linksJson: relFromRoot(finalLinks.reportJsonPath),
      importsMarkdown: relFromRoot(finalImports.reportPath),
      importsJson: relFromRoot(finalImports.reportJsonPath)
    }
  };

  const markdownReport = buildMarkdownReport(summary);
  ensureDir(path.dirname(args.report));
  fs.writeFileSync(args.report, markdownReport, 'utf8');
  ensureDir(path.dirname(args.reportJson));
  fs.writeFileSync(args.reportJson, `${JSON.stringify(summary, null, 2)}\n`, 'utf8');

  const exitCode = args.strict && unresolvedFindings.length > 0 ? 1 : 0;
  return {
    exitCode,
    summary,
    markdownReport,
    reportPath: args.report,
    reportJsonPath: args.reportJson
  };
}

function printHelp() {
  console.log(
    [
      'Usage:',
      '  node operations/scripts/dispatch/content/health/page-integrity-dispatch.js [--staged|--files <paths>|--tab <tab>] [--strict] [--no-repair] [--issue-mode off|plan] [--output-dir <dir>] [--json]',
      '',
      'Behavior:',
      '  - Resolves page scope once and runs both page-links-audit and page-imports-audit against the same entry file set.',
      '  - Applies deterministic link and import repairs when repair is enabled.',
      '  - Reruns both audits and writes a combined unresolved-findings report.',
      '  - Emits rolling-issue planning data for workflow automation when --issue-mode plan is used.'
    ].join('\n')
  );
}

if (require.main === module) {
  (async () => {
    try {
      const args = parseArgs(process.argv.slice(2));
      if (args.help) {
        printHelp();
        process.exit(0);
      }
      const result = await run({ parsedArgs: args });
      if (args.json) {
        process.stdout.write(`${JSON.stringify(result.summary, null, 2)}\n`);
      }
      process.exit(result.exitCode || 0);
    } catch (error) {
      console.error(`❌ ${error.message}`);
      process.exit(1);
    }
  })();
}

module.exports = {
  DEFAULT_OUTPUT_DIR,
  DEFAULT_REPORT,
  DEFAULT_REPORT_JSON,
  collectImportFindings,
  collectLinkFindings,
  parseArgs,
  resolveEntryFiles,
  run
};
