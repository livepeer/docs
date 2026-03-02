#!/usr/bin/env node
/**
 * @script style-and-language-homogenizer-en-gb
 * @summary Enforce EN-GB style and terminology profile for English v2 docs in phase 1.
 * @owner docs
 * @scope tools/scripts, v2, tools/config/style-language-profile-en-gb.json
 *
 * @usage
 *   node tools/scripts/style-and-language-homogenizer-en-gb.js --scope full
 *
 * @inputs
 *   --scope <changed|full> (default: full)
 *   --output-dir <path> (default: tasks/reports/repo-ops)
 *   --profile <path> (default: tools/config/style-language-profile-en-gb.json)
 *
 * @outputs
 *   - tasks/reports/repo-ops/style-and-language-homogenizer-en-gb.md
 *   - tasks/reports/repo-ops/style-and-language-homogenizer-en-gb.json
 *
 * @exit-codes
 *   0 = audit completed
 *   1 = runtime error
 *
 * @examples
 *   node tools/scripts/style-and-language-homogenizer-en-gb.js --scope full
 *
 * @notes
 *   Static-only analysis. Does not modify source files.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const STAGE_ID = 'style-and-language-homogenizer-en-gb';
const REPO_ROOT = process.cwd();
const DEFAULT_OUTPUT_DIR = 'tasks/reports/repo-ops';
const DEFAULT_PROFILE_PATH = 'tools/config/style-language-profile-en-gb.json';

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

function loadProfile(profilePath) {
  const absPath = path.resolve(REPO_ROOT, profilePath);
  return JSON.parse(fs.readFileSync(absPath, 'utf8'));
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

function shouldExclude(relPath, profile) {
  const rel = toPosix(relPath);
  if (!rel.startsWith('v2/')) return true;

  const defaults = ['v2/es/', 'v2/fr/', 'v2/cn/', 'v2/internal/'];
  if (defaults.some((prefix) => rel.startsWith(prefix))) return true;
  if (rel.includes('/x-')) return true;

  const extraExcludes = Array.isArray(profile.exclude_globs) ? profile.exclude_globs : [];
  if (extraExcludes.some((glob) => glob.endsWith('/**') && rel.startsWith(glob.slice(0, -3)))) return true;

  return false;
}

function walkEnglishV2Files(profile, out = []) {
  const root = path.join(REPO_ROOT, 'v2');
  if (!fs.existsSync(root)) return out;

  function walk(dirPath) {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const relPath = toPosix(path.relative(REPO_ROOT, fullPath));

      if (entry.isDirectory()) {
        if (entry.name === '.git' || entry.name === 'node_modules') continue;
        walk(fullPath);
        continue;
      }

      if (!/\.mdx$/i.test(entry.name)) continue;
      if (shouldExclude(relPath, profile)) continue;

      out.push({ absPath: fullPath, relPath });
    }
  }

  walk(root);
  return out;
}

function getChangedEnglishFiles(profile) {
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
      .filter((line) => !shouldExclude(line, profile))
      .map((line) => ({ relPath: line, absPath: path.join(REPO_ROOT, line) }));
  } catch (_error) {
    return [];
  }
}

function getScannableLines(content) {
  const lines = String(content || '').split('\n');
  const out = [];

  let inFrontmatter = lines[0] && lines[0].trim() === '---';
  let inCodeFence = false;

  lines.forEach((lineText, index) => {
    const trimmed = String(lineText || '').trim();

    if (inFrontmatter) {
      if (index > 0 && trimmed === '---') {
        inFrontmatter = false;
      }
      return;
    }

    if (/^```/.test(trimmed)) {
      inCodeFence = !inCodeFence;
      return;
    }

    if (inCodeFence) return;

    out.push({
      lineText,
      line: index + 1
    });
  });

  return out;
}

function shouldSkipLanguageLine(lineText) {
  const trimmed = String(lineText || '').trim();
  if (!trimmed) return true;
  if (trimmed.startsWith('import ') || trimmed.startsWith('export ')) return true;
  if (trimmed.startsWith('//')) return true;
  if (trimmed.includes('`')) return true;
  if (/\[[^\]]+\]\([^)]+\)/.test(trimmed)) return true;
  if (/^<[^>]+>$/.test(trimmed)) return true;
  if (/^\|.*\|$/.test(trimmed)) return true;
  return false;
}

function scanForbiddenTerms(issues, file, terms) {
  if (!Array.isArray(terms) || terms.length === 0) return;
  const content = fs.readFileSync(file.absPath, 'utf8');
  const lines = getScannableLines(content);

  lines.forEach((lineEntry) => {
    if (shouldSkipLanguageLine(lineEntry.lineText)) return;
    terms.forEach((term) => {
      const regex = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\\]\\]/g, '\\\\$&')}\\b`, 'i');
      if (!regex.test(lineEntry.lineText)) return;
      addIssue(issues, {
        id: 'us-spelling-term',
        title: 'US spelling term detected in EN-GB scope',
        severity: 'medium',
        path: file.relPath,
        line: lineEntry.line,
        evidence: `Found term \`${term}\` in line: ${lineEntry.lineText.trim().slice(0, 180)}`,
        recommendation: 'Replace with approved EN-GB term from the language profile and dictionary.'
      });
    });
  });
}

function scanForbiddenPatterns(issues, file, patterns) {
  if (!Array.isArray(patterns) || patterns.length === 0) return;
  const content = fs.readFileSync(file.absPath, 'utf8');
  const lines = getScannableLines(content);

  lines.forEach((lineEntry) => {
    patterns.forEach((pattern) => {
      if (!lineEntry.lineText.includes(pattern)) return;
      let severity = 'medium';
      if (pattern === '/v2/pages/') severity = 'high';
      if (pattern === 'ThemeData') severity = 'high';

      addIssue(issues, {
        id: 'style-pattern-violation',
        title: 'Style/language profile pattern violation',
        severity,
        path: file.relPath,
        line: lineEntry.line,
        evidence: `Found pattern \`${pattern}\` in line: ${lineEntry.lineText.trim().slice(0, 180)}`,
        recommendation: 'Apply style-guide compliant pattern and rerun style/language checks.'
      });
    });
  });
}

function markdownTableRows(issues, maxRows = 300) {
  return issues.slice(0, maxRows).map((issue) => {
    const safe = (value) => String(value || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
    return `| ${safe(issue.severity)} | ${safe(issue.title)} | ${safe(issue.path)} | ${safe(issue.evidence)} | ${safe(issue.recommendation)} |`;
  });
}

function buildMarkdown(report) {
  const lines = [];
  lines.push('# Style and Language Homogenizer (EN-GB)');
  lines.push('');
  lines.push(`- Generated: ${report.generated_at}`);
  lines.push(`- Scope: ${report.scope}`);
  lines.push(`- Stage ID: ${report.stage_id}`);
  lines.push(`- Profile: ${report.profile}`);
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
  const profile = loadProfile(args.profilePath);
  const outputDirAbs = path.resolve(REPO_ROOT, args.outputDir);
  ensureDir(outputDirAbs);

  const files = args.scope === 'changed'
    ? getChangedEnglishFiles(profile)
    : walkEnglishV2Files(profile);

  const issues = [];
  files.forEach((file) => {
    scanForbiddenTerms(issues, file, profile.forbidden_terms || []);
    scanForbiddenPatterns(issues, file, profile.forbidden_patterns || []);
  });

  const report = {
    stage_id: STAGE_ID,
    generated_at: new Date().toISOString(),
    profile: args.profilePath,
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
