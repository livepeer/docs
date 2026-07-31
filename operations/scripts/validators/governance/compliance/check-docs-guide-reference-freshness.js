#!/usr/bin/env node
/**
 * @script      check-docs-guide-reference-freshness
 * @category    validator
 * @type        validator
 * @concern     governance
 * @niche       compliance
 * @purpose     Validate docs-guide reference and feature pages for stale operational claims.
 * @description Checks docs-guide feature/reference pages for missing internal links, retired root references, unmanaged TODO markers, and missing evidence dates.
 * @mode        check
 * @pipeline    manual, pr-changed -> docs-guide reference freshness -> exit-code, stdout:violations
 * @scope       docs-guide/features, docs-guide/reference, operations/scripts/validators/governance/compliance
 * @domain      governance
 * @needs       D-DG-03, D-DG-07, D-DG-10
 * @purpose-statement Keep docs-guide feature and reference pages tied to live repo paths, dated evidence, and managed cleanup work.
 * @usage       node operations/scripts/validators/governance/compliance/check-docs-guide-reference-freshness.js [--json] [--include-reference]
 * @policy      D-DG-03, D-DG-07, D-DG-10
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const REPO_ROOT = getRepoRoot();
const DEFAULT_TARGETS = ['docs-guide/features'];
const REFERENCE_TARGET = 'docs-guide/reference';
const RETIRED_REFERENCES = [
  {
    pattern: /(^|[^A-Za-z0-9_./-])tasks\/staging\//,
    message: 'references retired tasks/staging root; current evidence should live under workspace/staging or governed docs-guide paths'
  },
  {
    pattern: /(^|[^A-Za-z0-9_./-])tasks\//,
    message: 'references retired tasks root; use workspace/ or current operations/docs-guide paths'
  },
  {
    pattern: /tools\/scripts\//,
    message: 'references retired tools/scripts path; use operations/scripts'
  },
  {
    pattern: /operations\/scripts\/snippets\//,
    message: 'references retired operations/scripts/snippets path; use current operations/scripts taxonomy'
  },
  {
    pattern: /\.github\/workflows\/update-blog-data\.yml/,
    message: 'references deprecated update-blog-data workflow; use current Ghost/Forum/RSS workflow names'
  }
];
const TODO_PATTERN = /\b(TODO|TBD|FIXME)\b/i;
const ALLOWLIST_PATTERN = /owner\s*[:=]|status\s*[:=]|allowlist|tracked in|tracked by/i;
const EVIDENCE_DATE_PATTERN = /(lastVerified:\s*["']?\d{4}-\d{2}-\d{2}|verified\s+\d{4}-\d{2}-\d{2}|Date:\s*\d{4}-\d{2}-\d{2})/i;

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

function parseArgs(argv) {
  const args = { json: false, includeReference: false, help: false };
  argv.forEach((token) => {
    if (token === '--json') {
      args.json = true;
      return;
    }
    if (token === '--include-reference') {
      args.includeReference = true;
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

function usage() {
  console.log(
    'Usage: node operations/scripts/validators/governance/compliance/check-docs-guide-reference-freshness.js [--json] [--include-reference]'
  );
}

function walkFiles(repoDir) {
  const absDir = path.join(REPO_ROOT, repoDir);
  if (!fs.existsSync(absDir)) return [];
  const files = [];

  function visit(absPath) {
    fs.readdirSync(absPath, { withFileTypes: true }).forEach((entry) => {
      const nextAbs = path.join(absPath, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules') return;
        visit(nextAbs);
        return;
      }
      if (/\.(md|mdx)$/i.test(entry.name)) {
        files.push(toPosix(path.relative(REPO_ROOT, nextAbs)));
      }
    });
  }

  visit(absDir);
  return files.sort((left, right) => left.localeCompare(right));
}

function stripCodeFences(content) {
  return String(content || '').replace(/```[\s\S]*?```/g, '');
}

function addIssue(issues, type, file, message, detail = '') {
  issues.push({ type, path: file, message, detail });
}

function resolveInternalLink(fromFile, target) {
  if (!target || /^[a-z]+:/i.test(target) || target.startsWith('#')) return null;
  if (target.startsWith('mailto:') || target.startsWith('tel:')) return null;
  if (target.startsWith('/snippets/')) return target.slice(1);
  if (target.startsWith('/')) return target.slice(1);
  const fromDir = path.dirname(fromFile);
  return toPosix(path.normalize(path.join(fromDir, target)));
}

function pathExists(repoPath) {
  const withoutAnchor = String(repoPath || '').split('#')[0].split('?')[0];
  if (!withoutAnchor) return true;
  const candidates = [withoutAnchor];
  if (!path.extname(withoutAnchor)) {
    candidates.push(`${withoutAnchor}.mdx`, `${withoutAnchor}.md`, path.join(withoutAnchor, 'index.mdx'), path.join(withoutAnchor, 'index.md'));
  }
  return candidates.some((candidate) => fs.existsSync(path.join(REPO_ROOT, candidate)));
}

function checkLinks(file, content, issues) {
  const linkPatterns = [
    /\[[^\]]+\]\(([^)]+)\)/g,
    /href=["']([^"']+)["']/g
  ];

  linkPatterns.forEach((pattern) => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const rawTarget = String(match[1] || '').trim();
      const target = resolveInternalLink(file, rawTarget);
      if (!target) continue;
      if (!pathExists(target)) {
        addIssue(issues, 'missing_link_target', file, `Missing internal link target: ${rawTarget}`, target);
      }
    }
  });
}

function checkRetiredReferences(file, content, issues) {
  RETIRED_REFERENCES.forEach((entry) => {
    if (entry.pattern.test(content)) {
      addIssue(issues, 'retired_reference', file, entry.message);
    }
  });
}

function checkTodos(file, content, issues) {
  stripCodeFences(content)
    .split('\n')
    .forEach((line, index) => {
      if (!TODO_PATTERN.test(line)) return;
      if (ALLOWLIST_PATTERN.test(line)) return;
      addIssue(issues, 'unmanaged_todo', file, `Unmanaged TODO/TBD marker on line ${index + 1}`, line.trim());
    });
}

function checkEvidenceDate(file, content, issues) {
  if (!EVIDENCE_DATE_PATTERN.test(content)) {
    addIssue(
      issues,
      'missing_evidence_date',
      file,
      'Feature/reference page needs a lastVerified frontmatter date or an explicit dated evidence note.'
    );
  }
}

function run() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    usage();
    return 0;
  }

  const targets = args.includeReference ? [...DEFAULT_TARGETS, REFERENCE_TARGET] : DEFAULT_TARGETS;
  const files = targets.flatMap(walkFiles);
  const issues = [];

  files.forEach((file) => {
    const content = fs.readFileSync(path.join(REPO_ROOT, file), 'utf8');
    checkLinks(file, content, issues);
    checkRetiredReferences(file, content, issues);
    checkTodos(file, content, issues);
    checkEvidenceDate(file, content, issues);
  });

  const result = {
    checkedFiles: files.length,
    issueCount: issues.length,
    issues
  };

  if (args.json) {
    console.log(JSON.stringify(result, null, 2));
  } else if (issues.length === 0) {
    console.log(`Docs-guide reference freshness check passed (${files.length} files).`);
  } else {
    console.error(`Docs-guide reference freshness check failed with ${issues.length} issue(s) across ${files.length} file(s).`);
    issues.forEach((issue) => {
      console.error(`- [${issue.type}] ${issue.path}: ${issue.message}${issue.detail ? ` (${issue.detail})` : ''}`);
    });
  }

  return issues.length === 0 ? 0 : 1;
}

try {
  process.exitCode = run();
} catch (error) {
  console.error(error.message);
  process.exitCode = 2;
}
