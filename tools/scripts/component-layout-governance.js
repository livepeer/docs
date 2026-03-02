#!/usr/bin/env node
/**
 * @script component-layout-governance
 * @summary Validate v2 English docs against component-layout contracts by page type.
 * @owner docs
 * @scope tools/scripts, v2, tools/config/component-layout-profile.json
 *
 * @usage
 *   node tools/scripts/component-layout-governance.js --scope full
 *
 * @inputs
 *   --scope <changed|full> (default: full)
 *   --output-dir <path> (default: tasks/reports/repo-ops)
 *   --profile <path> (default: tools/config/component-layout-profile.json)
 *
 * @outputs
 *   - tasks/reports/repo-ops/component-layout-governance.md
 *   - tasks/reports/repo-ops/component-layout-governance.json
 *
 * @exit-codes
 *   0 = audit completed
 *   1 = runtime error
 *
 * @examples
 *   node tools/scripts/component-layout-governance.js --scope changed
 *
 * @notes
 *   Static-only analysis. Phase-1 scope is English v2 documentation.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const STAGE_ID = 'component-layout-governance';
const REPO_ROOT = process.cwd();
const DEFAULT_OUTPUT_DIR = 'tasks/reports/repo-ops';
const DEFAULT_PROFILE_PATH = 'tools/config/component-layout-profile.json';

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function parseArgs(argv) {
  const out = {
    scope: 'full',
    outputDir: DEFAULT_OUTPUT_DIR,
    profilePath: DEFAULT_PROFILE_PATH
  };

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
    if (token === '--profile') {
      out.profilePath = String(argv[i + 1] || out.profilePath).trim() || out.profilePath;
      i += 1;
      continue;
    }
    if (token.startsWith('--profile=')) {
      out.profilePath = token.slice('--profile='.length).trim() || out.profilePath;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (!['changed', 'full'].includes(out.scope)) {
    throw new Error(`Invalid --scope: ${out.scope}`);
  }

  return out;
}

function readJsonFile(repoPath) {
  return JSON.parse(fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8'));
}

function shouldExclude(relPath) {
  const rel = toPosix(relPath);
  if (!rel.startsWith('v2/')) return true;
  if (!/\.mdx$/i.test(rel)) return true;
  if (rel.startsWith('v2/es/') || rel.startsWith('v2/fr/') || rel.startsWith('v2/cn/')) return true;
  if (rel.startsWith('v2/internal/')) return true;
  if (rel.includes('/x-')) return true;
  if (rel.includes('/_contextData_/') || rel.includes('/_context_data_/')) return true;
  if (rel.includes('/_tests-to-delete/') || rel.includes('/_move_me/')) return true;
  if (rel.endsWith('todo.mdx') || rel.endsWith('NOTES_V2.md')) return true;
  return false;
}

function walkFiles(dirPath, out = []) {
  if (!fs.existsSync(dirPath)) return out;

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relPath = toPosix(path.relative(REPO_ROOT, fullPath));

    if (entry.isDirectory()) {
      if (entry.name === '.git' || entry.name === 'node_modules') continue;
      walkFiles(fullPath, out);
      continue;
    }

    if (shouldExclude(relPath)) continue;
    out.push({ absPath: fullPath, relPath });
  }

  return out;
}

function getChangedFiles() {
  try {
    const output = execSync('git diff --name-only --diff-filter=ACMR HEAD', {
      cwd: REPO_ROOT,
      encoding: 'utf8'
    });

    return output
      .split('\n')
      .map((line) => toPosix(line.trim()))
      .filter(Boolean)
      .filter((line) => !shouldExclude(line))
      .map((line) => ({ relPath: line, absPath: path.join(REPO_ROOT, line) }));
  } catch (_error) {
    return [];
  }
}

function normalizeHeading(value) {
  return String(value || '')
    .replace(/[`*_~]/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function extractHeadings(content) {
  const lines = String(content || '').split('\n');
  const headings = [];

  lines.forEach((line) => {
    const match = line.match(/^#{1,6}\s+(.+)$/);
    if (!match) return;
    headings.push(normalizeHeading(match[1]));
  });

  return headings;
}

function extractComponents(content) {
  const names = new Set();
  const regex = /<([A-Z][A-Za-z0-9]*)\b/g;
  let match = regex.exec(content);

  while (match) {
    names.add(match[1]);
    match = regex.exec(content);
  }

  return [...names].sort();
}

function findPageType(relPath, pageTypes) {
  const lowerPath = String(relPath || '').toLowerCase();

  for (const pageType of pageTypes) {
    const patterns = Array.isArray(pageType?.match?.path_contains) ? pageType.match.path_contains : [];
    const matched = patterns.some((pattern) => lowerPath.includes(String(pattern || '').toLowerCase()));
    if (matched) return pageType;
  }

  return null;
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

function analyzeFile(issues, file, pageType, governedComponents) {
  const content = fs.readFileSync(file.absPath, 'utf8');
  const headings = extractHeadings(content);
  const components = extractComponents(content);

  const requiredSections = Array.isArray(pageType.required_sections) ? pageType.required_sections : [];
  requiredSections.forEach((section) => {
    const needle = normalizeHeading(section);
    const hasSection = headings.some((heading) => heading === needle || heading.includes(needle));

    if (!hasSection) {
      addIssue(issues, {
        id: 'layout-missing-required-section',
        title: 'Required section missing for page type',
        severity: 'high',
        path: file.relPath,
        evidence: `Page type \`${pageType.page_type}\` requires section \`${section}\` but it was not found in headings.`,
        recommendation: 'Add the required section heading or adjust page-type matching rules if classification is incorrect.'
      });
    }
  });

  const allowed = new Set(Array.isArray(pageType.allowed_components) ? pageType.allowed_components : []);
  components.forEach((componentName) => {
    if (!governedComponents.has(componentName)) return;
    if (allowed.has(componentName)) return;

    addIssue(issues, {
      id: 'layout-component-not-allowed',
      title: 'Component used outside allowed set for page type',
      severity: 'medium',
      path: file.relPath,
      evidence: `Component \`${componentName}\` is not in allowed_components for page type \`${pageType.page_type}\`.`,
      recommendation: 'Replace with an approved component or update the page-type contract when the exception is intentional.'
    });
  });

  const forbiddenPatterns = Array.isArray(pageType.forbidden_patterns) ? pageType.forbidden_patterns : [];
  const lower = content.toLowerCase();

  forbiddenPatterns.forEach((pattern) => {
    const normalized = String(pattern || '').toLowerCase();
    if (!normalized) return;
    if (!lower.includes(normalized)) return;

    addIssue(issues, {
      id: 'layout-forbidden-pattern',
      title: 'Forbidden pattern detected for page type',
      severity: 'high',
      path: file.relPath,
      evidence: `Found forbidden pattern \`${pattern}\` for page type \`${pageType.page_type}\`.`,
      recommendation: 'Replace placeholder or disallowed pattern with production-ready content.'
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
  lines.push('# Component Layout Governance Audit');
  lines.push('');
  lines.push(`- Generated: ${report.generated_at}`);
  lines.push(`- Scope: ${report.scope}`);
  lines.push(`- Stage ID: ${report.stage_id}`);
  lines.push(`- Profile: ${report.profile}`);
  lines.push(`- Files analyzed: ${report.analyzed_file_count}`);
  lines.push(`- Matched page types: ${report.matched_page_type_count}`);
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
  const profile = readJsonFile(args.profilePath);
  const pageTypes = Array.isArray(profile?.page_types) ? profile.page_types : [];
  const governedComponents = new Set(
    pageTypes
      .flatMap((pageType) => (Array.isArray(pageType.allowed_components) ? pageType.allowed_components : []))
      .filter(Boolean)
  );

  const outputDirAbs = path.resolve(REPO_ROOT, args.outputDir);
  ensureDir(outputDirAbs);

  const files = args.scope === 'changed' ? getChangedFiles() : walkFiles(path.join(REPO_ROOT, 'v2'));
  const issues = [];
  let matchedPageTypeCount = 0;

  files.forEach((file) => {
    const pageType = findPageType(file.relPath, pageTypes);
    if (!pageType) return;
    matchedPageTypeCount += 1;
    analyzeFile(issues, file, pageType, governedComponents);
  });

  const report = {
    stage_id: STAGE_ID,
    generated_at: new Date().toISOString(),
    profile: args.profilePath,
    scope: args.scope,
    analyzed_file_count: files.length,
    matched_page_type_count: matchedPageTypeCount,
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
