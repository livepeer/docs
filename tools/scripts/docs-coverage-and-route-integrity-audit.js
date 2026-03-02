#!/usr/bin/env node
/**
 * @script docs-coverage-and-route-integrity-audit
 * @summary Audit docs coverage integrity, missing routes, legacy /v2/pages references, and orphan candidate files.
 * @owner docs
 * @scope tools/scripts, docs.json, v2, tasks/reports/navigation-links
 *
 * @usage
 *   node tools/scripts/docs-coverage-and-route-integrity-audit.js --scope full
 *
 * @inputs
 *   --scope <changed|full> (default: full)
 *   --output-dir <path> (default: tasks/reports/repo-ops)
 *
 * @outputs
 *   - tasks/reports/repo-ops/docs-coverage-and-route-integrity-audit.md
 *   - tasks/reports/repo-ops/docs-coverage-and-route-integrity-audit.json
 *
 * @exit-codes
 *   0 = audit completed
 *   1 = runtime error
 *
 * @examples
 *   node tools/scripts/docs-coverage-and-route-integrity-audit.js --scope full
 *
 * @notes
 *   Static-only analysis. Uses existing navigation and link reports when available.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const STAGE_ID = 'docs-coverage-and-route-integrity-audit';
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

function readJson(repoPath, fallback = null) {
  try {
    return JSON.parse(fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8'));
  } catch (_error) {
    return fallback;
  }
}

function normalizeRoute(route) {
  let value = String(route || '').trim();
  value = value.replace(/^\/+/, '');
  value = value.replace(/\.(md|mdx)$/i, '');
  value = value.replace(/\/index$/i, '');
  value = value.replace(/\/README$/i, '');
  value = value.replace(/\/+$/, '');
  return value;
}

function collectDocsJsonPageEntries(node, out = []) {
  if (Array.isArray(node)) {
    node.forEach((item) => collectDocsJsonPageEntries(item, out));
    return out;
  }

  if (!node || typeof node !== 'object') {
    return out;
  }

  if (Array.isArray(node.pages)) {
    node.pages.forEach((item) => {
      if (typeof item === 'string') {
        out.push(item);
      } else {
        collectDocsJsonPageEntries(item, out);
      }
    });
  }

  Object.entries(node).forEach(([key, value]) => {
    if (key === 'pages') return;
    collectDocsJsonPageEntries(value, out);
  });

  return out;
}

function getDocsRoutesSet() {
  const docs = readJson('docs.json', {});
  const entries = collectDocsJsonPageEntries(docs?.navigation?.versions || []);
  return new Set(entries.map(normalizeRoute).filter(Boolean));
}

function shouldExcludeV2File(relPath) {
  const rel = toPosix(relPath);
  const excludedSegments = ['/_contextData_/', '/_context_data_/', '/_tests-to-delete/', '/_move_me/'];
  if (!rel.startsWith('v2/')) return true;
  if (rel.includes('/x-')) return true;
  if (rel.endsWith('todo.txt')) return true;
  if (rel.endsWith('todo.mdx')) return true;
  if (rel.endsWith('NOTES_V2.md')) return true;
  if (excludedSegments.some((segment) => rel.includes(segment))) return true;
  return false;
}

function walkV2DocsFiles(dirPath, out = []) {
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const rel = toPosix(path.relative(REPO_ROOT, fullPath));

    if (entry.isDirectory()) {
      if (entry.name === '.git' || entry.name === 'node_modules') continue;
      walkV2DocsFiles(fullPath, out);
      continue;
    }

    if (!/\.(md|mdx)$/i.test(entry.name)) continue;
    if (shouldExcludeV2File(rel)) continue;
    out.push({ absPath: fullPath, relPath: rel });
  }
  return out;
}

function getChangedV2Files() {
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
      .filter((line) => /\.(md|mdx)$/i.test(line))
      .filter((line) => !shouldExcludeV2File(line));
  } catch (_error) {
    return [];
  }
}

function scanLegacyV2PagesLinks(issues, files) {
  for (const file of files) {
    const content = fs.readFileSync(file.absPath, 'utf8');
    const lines = content.split('\n');

    lines.forEach((lineText, index) => {
      if (!lineText.includes('/v2/pages/')) return;
      addIssue(issues, {
        id: 'legacy-v2-pages-path',
        title: 'Legacy /v2/pages path reference detected',
        severity: 'high',
        path: file.relPath,
        line: index + 1,
        evidence: lineText.trim().slice(0, 220),
        recommendation: 'Update to modern v2 route paths and rerun route/link audits.'
      });
    });
  }
}

function scanOrphanCandidates(issues, files, docsRoutes) {
  files.forEach((file) => {
    const normalized = normalizeRoute(file.relPath);
    if (!normalized) return;
    if (!docsRoutes.has(normalized)) {
      addIssue(issues, {
        id: 'non-nav-doc-candidate',
        title: 'Doc file not represented in docs.json navigation',
        severity: 'medium',
        path: file.relPath,
        evidence: `${normalized} is missing from docs navigation entries.`,
        recommendation: 'Classify as intentional hidden/internal content or add route/navigation entry.'
      });
    }
  });
}

function scanNavigationReport(issues) {
  const report = readJson('tasks/reports/navigation-links/navigation-report.json', null);
  if (!report) {
    addIssue(issues, {
      id: 'navigation-report-missing',
      title: 'Navigation report is missing',
      severity: 'low',
      path: 'tasks/reports/navigation-links/navigation-report.json',
      evidence: 'Navigation report file not found.',
      recommendation: 'Run `node tests/unit/docs-navigation.test.js` to regenerate navigation findings.'
    });
    return;
  }

  (report.syntaxErrors || []).forEach((entry) => {
    addIssue(issues, {
      id: 'docs-nav-syntax-error',
      title: 'docs.json syntax/navigation entry violation',
      severity: 'critical',
      path: entry.file || 'docs.json',
      evidence: `${entry.rule}: ${entry.value || 'unknown'}`,
      recommendation: 'Fix docs.json entry syntax and regenerate navigation report.'
    });
  });

  (report.missingRoutes || []).forEach((entry) => {
    addIssue(issues, {
      id: 'docs-nav-missing-route',
      title: 'docs.json references a missing route',
      severity: 'high',
      path: entry.file || 'docs.json',
      evidence: `${entry.value} (${entry.pointer || 'no pointer'})`,
      recommendation: 'Remap to existing canonical route or create the missing page.'
    });
  });
}

function markdownTableRows(issues, maxRows = 350) {
  return issues.slice(0, maxRows).map((issue) => {
    const safe = (value) => String(value || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
    return `| ${safe(issue.severity)} | ${safe(issue.title)} | ${safe(issue.path)} | ${safe(issue.evidence)} | ${safe(issue.recommendation)} |`;
  });
}

function buildMarkdown(report) {
  const lines = [];
  lines.push('# Docs Coverage and Route Integrity Audit');
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

function main() {
  const args = parseArgs(process.argv.slice(2));
  const outputDirAbs = path.resolve(REPO_ROOT, args.outputDir);
  ensureDir(outputDirAbs);

  const docsRoutes = getDocsRoutesSet();

  const files = args.scope === 'changed'
    ? getChangedV2Files().map((filePath) => ({
        relPath: filePath,
        absPath: path.join(REPO_ROOT, filePath)
      }))
    : walkV2DocsFiles(path.join(REPO_ROOT, 'v2'));

  const issues = [];
  scanNavigationReport(issues);
  scanLegacyV2PagesLinks(issues, files);
  scanOrphanCandidates(issues, files, docsRoutes);

  const report = {
    stage_id: STAGE_ID,
    generated_at: new Date().toISOString(),
    scope: args.scope,
    analyzed_file_count: files.length,
    docs_json_route_count: docsRoutes.size,
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
