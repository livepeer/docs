#!/usr/bin/env node
/**
 * @script script-footprint-and-usage-audit
 * @summary Audit script sprawl, duplicate fixtures, backup artifacts, and report-size hotspots.
 * @owner docs
 * @scope tools/scripts, tests, tasks/reports, ai-tools/ai-skills
 *
 * @usage
 *   node tools/scripts/script-footprint-and-usage-audit.js --scope full
 *
 * @inputs
 *   --scope <changed|full> (default: full)
 *   --output-dir <path> (default: tasks/reports/repo-ops)
 *
 * @outputs
 *   - tasks/reports/repo-ops/script-footprint-and-usage-audit.md
 *   - tasks/reports/repo-ops/script-footprint-and-usage-audit.json
 *
 * @exit-codes
 *   0 = audit completed
 *   1 = runtime error
 *
 * @examples
 *   node tools/scripts/script-footprint-and-usage-audit.js --scope full
 *
 * @notes
 *   Static-only analysis. No file mutations are performed.
 */

const fs = require('fs');
const path = require('path');

const STAGE_ID = 'script-footprint-and-usage-audit';
const REPO_ROOT = process.cwd();
const DEFAULT_OUTPUT_DIR = 'tasks/reports/repo-ops';

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function parseArgs(argv) {
  const out = { scope: 'full', outputDir: DEFAULT_OUTPUT_DIR };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--scope') {
      out.scope = String(argv[i + 1] || out.scope).trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--scope=')) {
      out.scope = token.slice('--scope='.length).trim() || out.scope;
      continue;
    }
    if (token === '--output-dir') {
      out.outputDir = String(argv[i + 1] || out.outputDir).trim() || out.outputDir;
      i += 1;
      continue;
    }
    if (token.startsWith('--output-dir=')) {
      out.outputDir = token.slice('--output-dir='.length).trim() || out.outputDir;
      continue;
    }
    throw new Error(`Unknown argument: ${token}`);
  }

  if (!['changed', 'full'].includes(out.scope)) {
    throw new Error(`Invalid --scope: ${out.scope}`);
  }

  return out;
}

function walkFiles(dirPath, out = []) {
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const rel = toPosix(path.relative(REPO_ROOT, fullPath));

    if (entry.isDirectory()) {
      if (entry.name === '.git' || entry.name === 'node_modules') continue;
      walkFiles(fullPath, out);
      continue;
    }

    out.push({ absPath: fullPath, relPath: rel });
  }
  return out;
}

function readText(repoPath) {
  try {
    return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
  } catch (_error) {
    return '';
  }
}

function addIssue(issues, issue) {
  issues.push({
    id: issue.id,
    title: issue.title,
    severity: issue.severity,
    evidence: issue.evidence,
    recommendation: issue.recommendation,
    path: issue.path || '',
    line: Number.isFinite(Number(issue.line)) ? Number(issue.line) : 1
  });
}

function summarize(issues) {
  const summary = {
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    info: 0,
    total: issues.length
  };

  for (const issue of issues) {
    if (Object.prototype.hasOwnProperty.call(summary, issue.severity)) {
      summary[issue.severity] += 1;
    }
  }

  return summary;
}

function markdownTableRows(issues, maxRows = 250) {
  return issues.slice(0, maxRows).map((issue) => {
    const safe = (value) => String(value || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
    return `| ${safe(issue.severity)} | ${safe(issue.title)} | ${safe(issue.path)} | ${safe(issue.evidence)} | ${safe(issue.recommendation)} |`;
  });
}

function buildMarkdown(report) {
  const lines = [];
  lines.push('# Script Footprint and Usage Audit');
  lines.push('');
  lines.push(`- Generated: ${report.generated_at}`);
  lines.push(`- Scope: ${report.scope}`);
  lines.push(`- Stage ID: ${report.stage_id}`);
  lines.push('');
  lines.push('## Severity Summary');
  lines.push('');
  lines.push(`- Critical: ${report.summary.critical}`);
  lines.push(`- High: ${report.summary.high}`);
  lines.push(`- Medium: ${report.summary.medium}`);
  lines.push(`- Low: ${report.summary.low}`);
  lines.push(`- Info: ${report.summary.info}`);
  lines.push(`- Total: ${report.summary.total}`);
  lines.push('');
  lines.push('## Issues');
  lines.push('');
  lines.push('| Severity | Title | Path | Evidence | Recommendation |');
  lines.push('|---|---|---|---|---|');
  lines.push(...markdownTableRows(report.issues));
  lines.push('');
  return `${lines.join('\n')}\n`;
}

function detectBackupArtifacts(issues, files) {
  files
    .filter((file) => /\.bak2?$/.test(file.relPath))
    .forEach((file) => {
      const isScriptPath = file.relPath.startsWith('tools/scripts/') || file.relPath.startsWith('tests/');
      addIssue(issues, {
        id: 'backup-artifact',
        title: 'Backup artifact tracked in repo',
        severity: isScriptPath ? 'high' : 'medium',
        path: file.relPath,
        evidence: 'File name ends with .bak or .bak2',
        recommendation: 'Classify with cleanup-quarantine-manager and quarantine from active tree.'
      });
    });
}

function detectPlaceholderScripts(issues) {
  const targets = [
    'tools/scripts/test/allowed.js',
    'tools/scripts/test/allowed-script.js',
    'tools/scripts/test/allowed-test.js'
  ];

  targets.forEach((target) => {
    if (!fs.existsSync(path.join(REPO_ROOT, target))) return;
    const text = readText(target);
    const stripped = text
      .replace(/\/\*[\s\S]*?\*\//g, '')
      .replace(/\/\/.*$/gm, '')
      .trim();

    if (/^test\s*$/.test(stripped)) {
      addIssue(issues, {
        id: 'placeholder-script',
        title: 'Placeholder script is discoverable as runnable',
        severity: 'critical',
        path: target,
        evidence: 'Script body is only `test` and fails when executed.',
        recommendation: 'Quarantine or replace with explicit fixture guard that exits 0 with clear message.'
      });
    }
  });
}

function detectDuplicatePairs(issues, files) {
  const rootScripts = files
    .filter((file) => file.relPath.startsWith('tools/scripts/'))
    .filter((file) => /\.js$/.test(file.relPath))
    .filter((file) => !file.relPath.startsWith('tools/scripts/test/'));

  for (const root of rootScripts) {
    const base = path.basename(root.relPath);
    const candidate = `tools/scripts/test/${base}`;
    const candidateAbs = path.join(REPO_ROOT, candidate);
    if (!fs.existsSync(candidateAbs)) continue;

    const rootContent = readText(root.relPath);
    const testContent = readText(candidate);

    const normalized = (value) =>
      String(value)
        .replace(/tools\/scripts\/test\//g, 'tools/scripts/')
        .replace(/tools\/scripts\//g, 'tools/scripts/')
        .trim();

    if (normalized(rootContent) === normalized(testContent)) {
      addIssue(issues, {
        id: 'duplicate-script-pair',
        title: 'Duplicate root/test script pair detected',
        severity: 'medium',
        path: `${root.relPath} <-> ${candidate}`,
        evidence: 'Root and test variant share equivalent script body.',
        recommendation: 'Keep one canonical script and replace the second with a wrapper or remove after reference migration.'
      });
    }
  }
}

function detectReportBloat(issues) {
  const policyPath = path.join(REPO_ROOT, 'tools/config/report-retention-policy.json');
  let policy = null;

  try {
    policy = JSON.parse(fs.readFileSync(policyPath, 'utf8'));
  } catch (_error) {
    policy = null;
  }

  const warnBytes = policy?.size_thresholds?.warn_bytes || 524288;
  const highBytes = policy?.size_thresholds?.high_bytes || 2097152;
  const criticalBytes = policy?.size_thresholds?.critical_bytes || 10485760;

  const reportRoot = path.join(REPO_ROOT, 'tasks/reports');
  if (!fs.existsSync(reportRoot)) return;

  walkFiles(reportRoot)
    .filter((file) => /\.(json|md)$/.test(file.relPath))
    .forEach((file) => {
      const size = fs.statSync(file.absPath).size;
      if (size < warnBytes) return;

      let severity = 'low';
      if (size >= criticalBytes) severity = 'high';
      else if (size >= highBytes) severity = 'medium';

      addIssue(issues, {
        id: 'report-size-hotspot',
        title: 'Large report artifact tracked in repository',
        severity,
        path: file.relPath,
        evidence: `Size is ${(size / 1024 / 1024).toFixed(2)} MB.`,
        recommendation: 'Apply report retention policy and keep only concise latest summaries tracked.'
      });
    });
}

function detectScriptAuditSignals(issues) {
  const reportPath = path.join(REPO_ROOT, 'tasks/reports/repo-ops/SCRIPT_AUDIT.json');
  if (!fs.existsSync(reportPath)) {
    addIssue(issues, {
      id: 'missing-script-audit-baseline',
      title: 'SCRIPT_AUDIT baseline report missing',
      severity: 'low',
      path: 'tasks/reports/repo-ops/SCRIPT_AUDIT.json',
      evidence: 'Baseline script report could not be found.',
      recommendation: 'Generate with `node tools/scripts/audit-scripts.js --format both`.'
    });
    return;
  }

  try {
    const payload = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    const exactOverlap = Number(payload?.summary?.exactOverlapClusters || 0);
    const templateNonCompliant = Number(payload?.summary?.templateNonCompliant || 0);

    if (exactOverlap > 0) {
      addIssue(issues, {
        id: 'script-overlap-clusters',
        title: 'Existing script overlap clusters require consolidation',
        severity: 'medium',
        path: 'tasks/reports/repo-ops/SCRIPT_AUDIT.json',
        evidence: `${exactOverlap} exact overlap cluster(s) are currently reported.`,
        recommendation: 'Prioritize overlap recommendations and consolidate duplicate script trees.'
      });
    }

    if (templateNonCompliant > 0) {
      addIssue(issues, {
        id: 'script-template-noncompliant',
        title: 'Script metadata/template compliance gaps detected',
        severity: 'low',
        path: 'tasks/reports/repo-ops/SCRIPT_AUDIT.json',
        evidence: `${templateNonCompliant} script(s) are marked template non-compliant.`,
        recommendation: 'Backfill required script headers for discoverability and maintainability.'
      });
    }
  } catch (_error) {
    addIssue(issues, {
      id: 'script-audit-parse-error',
      title: 'Unable to parse SCRIPT_AUDIT baseline report',
      severity: 'low',
      path: 'tasks/reports/repo-ops/SCRIPT_AUDIT.json',
      evidence: 'JSON parse failed for existing script baseline report.',
      recommendation: 'Regenerate the baseline report to restore machine-readable status.'
    });
  }
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const outputDirAbs = path.resolve(REPO_ROOT, args.outputDir);
  ensureDir(outputDirAbs);

  const files = [
    ...walkFiles(path.join(REPO_ROOT, 'tools/scripts')),
    ...walkFiles(path.join(REPO_ROOT, 'tests')),
    ...walkFiles(path.join(REPO_ROOT, 'tasks/reports'))
  ];

  const issues = [];
  detectBackupArtifacts(issues, files);
  detectPlaceholderScripts(issues);
  detectDuplicatePairs(issues, files);
  detectReportBloat(issues);
  detectScriptAuditSignals(issues);

  const report = {
    stage_id: STAGE_ID,
    generated_at: new Date().toISOString(),
    scope: args.scope,
    issues,
    summary: summarize(issues)
  };

  const jsonPath = path.join(outputDirAbs, `${STAGE_ID}.json`);
  const mdPath = path.join(outputDirAbs, `${STAGE_ID}.md`);

  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);
  fs.writeFileSync(mdPath, buildMarkdown(report));

  console.log(`✅ ${STAGE_ID} wrote:`);
  console.log(`- ${toPosix(path.relative(REPO_ROOT, jsonPath))}`);
  console.log(`- ${toPosix(path.relative(REPO_ROOT, mdPath))}`);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`❌ ${STAGE_ID} failed: ${error.message}`);
    process.exit(1);
  }
}
