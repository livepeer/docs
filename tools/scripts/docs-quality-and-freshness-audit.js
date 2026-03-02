#!/usr/bin/env node
/**
 * @script docs-quality-and-freshness-audit
 * @summary Audit v2 English docs for freshness and quality markers (TODO/TBD/Coming Soon, placeholders, and thin content).
 * @owner docs
 * @scope tools/scripts, v2, tasks/reports/quality-accessibility
 *
 * @usage
 *   node tools/scripts/docs-quality-and-freshness-audit.js --scope full
 *
 * @inputs
 *   --scope <changed|full> (default: full)
 *   --output-dir <path> (default: tasks/reports/repo-ops)
 *
 * @outputs
 *   - tasks/reports/repo-ops/docs-quality-and-freshness-audit.md
 *   - tasks/reports/repo-ops/docs-quality-and-freshness-audit.json
 *
 * @exit-codes
 *   0 = audit completed
 *   1 = runtime error
 *
 * @examples
 *   node tools/scripts/docs-quality-and-freshness-audit.js --scope full
 *
 * @notes
 *   Static-only analysis. Phase-1 scope is English v2 documentation.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const STAGE_ID = 'docs-quality-and-freshness-audit';
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

function shouldExclude(relPath) {
  const rel = toPosix(relPath);
  if (!rel.startsWith('v2/')) return true;
  if (rel.startsWith('v2/es/') || rel.startsWith('v2/fr/') || rel.startsWith('v2/cn/')) return true;
  if (rel.startsWith('v2/internal/')) return true;
  if (rel.includes('/x-')) return true;
  if (rel.includes('/_contextData_/') || rel.includes('/_context_data_/')) return true;
  if (rel.includes('/_move_me/') || rel.includes('/_tests-to-delete/')) return true;
  if (rel.endsWith('todo.txt') || rel.endsWith('todo.mdx') || rel.endsWith('NOTES_V2.md')) return true;
  return false;
}

function walkFiles(dirPath, out = []) {
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dirPath, entry.name);
    const rel = toPosix(path.relative(REPO_ROOT, full));

    if (entry.isDirectory()) {
      if (entry.name === '.git' || entry.name === 'node_modules') continue;
      walkFiles(full, out);
      continue;
    }

    if (!/\.mdx$/i.test(entry.name)) continue;
    if (shouldExclude(rel)) continue;
    out.push({ absPath: full, relPath: rel });
  }
  return out;
}

function getChangedEnglishFiles() {
  try {
    const output = execSync('git diff --name-only --diff-filter=ACMR HEAD', {
      cwd: REPO_ROOT,
      encoding: 'utf8'
    });

    return output
      .split('\n')
      .map((line) => toPosix(line.trim()))
      .filter(Boolean)
      .filter((line) => line.startsWith('v2/'))
      .filter((line) => /\.mdx$/i.test(line))
      .filter((line) => !shouldExclude(line))
      .map((line) => ({ relPath: line, absPath: path.join(REPO_ROOT, line) }));
  } catch (_error) {
    return [];
  }
}

function countWords(content) {
  return String(content || '')
    .replace(/^---[\s\S]*?---\s*/m, ' ')
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]+`/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\[[^\]]+\]\([^)]+\)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean).length;
}

function loadUsefulnessSignal(issues) {
  const metadataPath = path.join(
    REPO_ROOT,
    'tasks/reports/quality-accessibility/docs-usefulness/latest/run-metadata.json'
  );

  if (!fs.existsSync(metadataPath)) {
    addIssue(issues, {
      id: 'usefulness-metadata-missing',
      title: 'Docs usefulness metadata not found',
      severity: 'low',
      path: 'tasks/reports/quality-accessibility/docs-usefulness/latest/run-metadata.json',
      evidence: 'No usefulness metadata snapshot found for cross-check.',
      recommendation: 'Run `node tools/scripts/audit-v2-usefulness.js --mode full --accuracy-mode tiered` for a fresh baseline.'
    });
    return;
  }

  try {
    const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
    const pages = Number(metadata?.counts?.processed_pages || metadata?.processed_pages || 0);
    if (pages === 0) {
      addIssue(issues, {
        id: 'usefulness-empty-run',
        title: 'Usefulness metadata reports zero processed pages',
        severity: 'low',
        path: 'tasks/reports/quality-accessibility/docs-usefulness/latest/run-metadata.json',
        evidence: 'Processed pages count is zero in latest usefulness metadata.',
        recommendation: 'Verify usefulness run mode and regenerate metadata with a full run.'
      });
    }
  } catch (_error) {
    addIssue(issues, {
      id: 'usefulness-metadata-parse-failed',
      title: 'Unable to parse usefulness metadata',
      severity: 'low',
      path: 'tasks/reports/quality-accessibility/docs-usefulness/latest/run-metadata.json',
      evidence: 'Metadata JSON could not be parsed.',
      recommendation: 'Regenerate usefulness outputs to restore machine-readable state.'
    });
  }
}

function analyzeFileMarkers(issues, file) {
  const content = fs.readFileSync(file.absPath, 'utf8');
  const lines = content.split('\n');
  const markerRules = [
    { id: 'todo-marker', label: 'TODO marker detected', regex: /\bTODO\b/i, severity: 'medium' },
    { id: 'tbd-marker', label: 'TBD marker detected', regex: /\bTBD\b/i, severity: 'medium' },
    { id: 'coming-soon-marker', label: 'Coming Soon marker detected', regex: /Coming Soon/i, severity: 'high' },
    { id: 'preview-callout-marker', label: 'PreviewCallout marker detected', regex: /<PreviewCallout\b/, severity: 'high' }
  ];

  markerRules.forEach((rule) => {
    let count = 0;
    lines.forEach((line, index) => {
      if (!rule.regex.test(line)) return;
      count += 1;
      addIssue(issues, {
        id: rule.id,
        title: rule.label,
        severity: rule.severity,
        path: file.relPath,
        line: index + 1,
        evidence: line.trim().slice(0, 220),
        recommendation: 'Replace placeholder markers with complete, publish-ready content or isolate to internal draft paths.'
      });
    });

    if (count >= 3) {
      addIssue(issues, {
        id: `${rule.id}-density`,
        title: `High density of ${rule.label.toLowerCase()}`,
        severity: 'high',
        path: file.relPath,
        evidence: `${count} marker occurrences in a single page.`,
        recommendation: 'Prioritize this page for focused editorial completion and quality review.'
      });
    }
  });

  const words = countWords(content);
  const isLikelyLanding = /\/index\.mdx$/.test(file.relPath) || /portal|overview/.test(file.relPath);
  if (!isLikelyLanding && words < 120) {
    addIssue(issues, {
      id: 'thin-content',
      title: 'Thin content page detected',
      severity: 'low',
      path: file.relPath,
      evidence: `Estimated content length is ${words} words.`,
      recommendation: 'Expand page scope with prerequisites, actionable steps, and troubleshooting context.'
    });
  }
}

function markdownTableRows(issues, maxRows = 350) {
  return issues.slice(0, maxRows).map((issue) => {
    const safe = (value) => String(value || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
    return `| ${safe(issue.severity)} | ${safe(issue.title)} | ${safe(issue.path)} | ${safe(issue.evidence)} | ${safe(issue.recommendation)} |`;
  });
}

function buildMarkdown(report) {
  const lines = [];
  lines.push('# Docs Quality and Freshness Audit');
  lines.push('');
  lines.push(`- Generated: ${report.generated_at}`);
  lines.push(`- Scope: ${report.scope}`);
  lines.push(`- Stage ID: ${report.stage_id}`);
  lines.push(`- Files analyzed: ${report.analyzed_file_count}`);
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

function main() {
  const args = parseArgs(process.argv.slice(2));
  const outputDirAbs = path.resolve(REPO_ROOT, args.outputDir);
  ensureDir(outputDirAbs);

  const files = args.scope === 'changed'
    ? getChangedEnglishFiles()
    : walkFiles(path.join(REPO_ROOT, 'v2'));

  const issues = [];
  loadUsefulnessSignal(issues);
  files.forEach((file) => analyzeFileMarkers(issues, file));

  const report = {
    stage_id: STAGE_ID,
    generated_at: new Date().toISOString(),
    scope: args.scope,
    analyzed_file_count: files.length,
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
