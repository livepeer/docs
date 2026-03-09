#!/usr/bin/env node
/**
 * @script           check-portal-pages
 * @category         validator
 * @purpose          qa:repo-health
 * @scope            v2-content
 * @owner            docs
 * @needs            R-R14
 * @purpose-statement Validates that pages with pageType: portal frontmatter follow the required portal structure.
 * @pipeline         manual, ci
 * @usage            node tools/scripts/validators/structure/check-portal-pages.js [--fix] [--json]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO_ROOT = getRepoRoot();
const DOCS_JSON_PATH = path.join(REPO_ROOT, 'docs.json');

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
      'Usage: node tools/scripts/validators/structure/check-portal-pages.js [options]',
      '',
      'Options:',
      '  --fix       Dry-run only. Print suggested structural changes without modifying files.',
      '  --json      Emit machine-readable JSON',
      '  --help, -h  Show this help message'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = { fix: false, json: false, help: false };

  argv.forEach((token) => {
    if (token === '--fix') {
      args.fix = true;
      return;
    }
    if (token === '--json') {
      args.json = true;
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
  const relPath = toPosix(repoPath).replace(/^\/+/, '');
  if (!relPath.startsWith('v2/')) return true;
  if (!/\.mdx$/i.test(relPath)) return true;
  if (relPath.startsWith('v2/es/') || relPath.startsWith('v2/fr/') || relPath.startsWith('v2/cn/')) return true;
  if (relPath.startsWith('v2/internal/')) return true;
  if (relPath.includes('/_contextData_/') || relPath.includes('/_context_data_/')) return true;
  if (relPath.includes('/_move_me/') || relPath.includes('/_tests-to-delete/')) return true;
  if (relPath.endsWith('todo.txt') || relPath.endsWith('todo.mdx') || relPath.endsWith('NOTES_V2.md')) return true;
  return relPath.split('/').some((segment) => segment.toLowerCase().startsWith('x-'));
}

function walkFiles(dirPath, out = []) {
  const absoluteDir = path.join(REPO_ROOT, dirPath);
  if (!fs.existsSync(absoluteDir)) return out;

  fs.readdirSync(absoluteDir, { withFileTypes: true }).forEach((entry) => {
    if (entry.name === '.git' || entry.name === 'node_modules') return;
    const relPath = toPosix(path.join(dirPath, entry.name));
    if (entry.isDirectory()) {
      walkFiles(relPath, out);
      return;
    }
    if (!shouldExclude(relPath)) {
      out.push(relPath);
    }
  });

  return out;
}

function extractFrontmatter(content) {
  const match = String(content || '').match(/^---\s*\n([\s\S]*?)\n---(?:\s*\n|$)/);
  return match ? match[1] : '';
}

function extractPageType(content) {
  const frontmatter = extractFrontmatter(content);
  const match = frontmatter.match(/^pageType:\s*["']?([^"'\n]+)["']?\s*$/m);
  return match ? match[1].trim() : '';
}

function collectPortalFiles() {
  return walkFiles('v2')
    .filter((repoPath) => /(?:^|\/)(?:[^/]+-)?portal\.mdx$/i.test(repoPath))
    .filter((repoPath) => extractPageType(fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8')) === 'landing')
    .sort();
}

function stripFrontmatterAndImports(content) {
  let body = String(content || '');
  body = body.replace(/^---\s*\n[\s\S]*?\n---(?:\s*\n|$)/, '');
  body = body.replace(/^(?:import|export)\b[^\n]*\n/gm, '');
  return body;
}

function firstBodyLines(body, count) {
  return body
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, count);
}

function countPlainParagraphs(body) {
  const lines = body.split('\n');
  const paragraphs = [];
  let current = [];

  function flush() {
    if (current.length > 0) {
      paragraphs.push(current.join(' ').trim());
      current = [];
    }
  }

  lines.forEach((line) => {
    const trimmed = line.trim();
    const isPlainText =
      trimmed &&
      !trimmed.startsWith('<') &&
      !trimmed.startsWith('{') &&
      !trimmed.startsWith('}') &&
      !trimmed.startsWith('#') &&
      !trimmed.startsWith('//') &&
      !/^[A-Za-z0-9_-]+\s*=/.test(trimmed) &&
      !trimmed.includes('={') &&
      !trimmed.includes('=>');

    if (isPlainText) {
      current.push(trimmed);
    } else {
      flush();
    }
  });
  flush();

  return paragraphs.filter(Boolean);
}

function collectDocsRoutes() {
  if (!fs.existsSync(DOCS_JSON_PATH)) return new Set();
  const docsJson = JSON.parse(fs.readFileSync(DOCS_JSON_PATH, 'utf8'));
  const versions = docsJson?.navigation?.versions || [];
  const routes = new Set();

  function collect(node) {
    if (typeof node === 'string') {
      const normalized = normalizeRoute(node);
      if (normalized.startsWith('v2/')) {
        routes.add(normalized);
      }
      return;
    }

    if (Array.isArray(node)) {
      node.forEach(collect);
      return;
    }

    if (!node || typeof node !== 'object') return;
    Object.values(node).forEach(collect);
  }

  versions.forEach((versionNode) => {
    const languages = versionNode?.languages;
    if (Array.isArray(languages)) {
      languages.filter((entry) => entry?.language === 'en').forEach(collect);
      return;
    }
    if (languages && typeof languages === 'object' && languages.en) {
      collect(languages.en);
      return;
    }
    collect(versionNode);
  });

  return routes;
}

function normalizeRoute(value) {
  return toPosix(String(value || '').trim())
    .replace(/^https?:\/\/[^/]+/i, '')
    .replace(/^\/+/, '')
    .replace(/\.(md|mdx)$/i, '')
    .replace(/\/index$/i, '')
    .replace(/\/+$/, '');
}

function resolveRelativeRepoPath(currentFile, href) {
  const sourceDir = path.posix.dirname(currentFile);
  const cleanedHref = String(href || '').split('#')[0].split('?')[0].trim();
  if (!cleanedHref) return '';

  if (cleanedHref.startsWith('/')) {
    if (cleanedHref.startsWith('/v2/')) {
      return normalizeRoute(cleanedHref);
    }
    return normalizeRoute(`v2${cleanedHref}`);
  }

  return normalizeRoute(path.posix.join(sourceDir, cleanedHref));
}

function fileExistsForRoute(routeKey) {
  if (!routeKey.startsWith('v2/')) return false;
  const candidates = [
    `${routeKey}.mdx`,
    `${routeKey}.md`,
    path.posix.join(routeKey, 'index.mdx'),
    path.posix.join(routeKey, 'index.md')
  ];

  return candidates.some((candidate) => fs.existsSync(path.join(REPO_ROOT, candidate)));
}

function validateCardHref(currentFile, href, docsRoutes) {
  if (!href || /^(https?:\/\/|mailto:|#)/i.test(href)) return true;
  const routeKey = resolveRelativeRepoPath(currentFile, href);
  if (!routeKey) return false;
  return docsRoutes.has(routeKey) || fileExistsForRoute(routeKey);
}

function analyzePortalPage(repoPath, docsRoutes, fixMode) {
  const content = fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
  const body = stripFrontmatterAndImports(content);
  const bodyHead = firstBodyLines(body, 10);
  const paragraphs = countPlainParagraphs(body);
  const findings = [];
  const suggestions = [];

  if (!bodyHead.some((line) => /^#{1,6}\s/.test(line) || /<CustomDivider\b/.test(line))) {
    findings.push({
      level: 'warning',
      rule: 'opening-structure',
      message: 'Missing heading or <CustomDivider> within the first 10 body lines.'
    });
    suggestions.push('Add a heading or <CustomDivider> near the top of the body to anchor the navigation hub.');
  }

  if (!/<CardGroup\b/.test(body) && !/<Card\b/.test(body)) {
    findings.push({
      level: 'warning',
      rule: 'missing-cards',
      message: 'Portal page does not contain a <CardGroup> or <Card> component.'
    });
    suggestions.push('Replace prose-heavy sections with cards that link to destination pages.');
  }

  if (paragraphs.length > 2) {
    findings.push({
      level: 'warning',
      rule: 'too-much-prose',
      message: `Portal page contains ${paragraphs.length} prose paragraphs; expected no more than 2.`
    });
    suggestions.push('Reduce prose paragraphs and move navigation detail into cards or linked destination pages.');
  }

  const invalidHrefs = [];
  [...body.matchAll(/<Card\b[\s\S]*?\bhref\s*=\s*["']([^"']+)["'][\s\S]*?(?:\/>|>)/g)].forEach((match) => {
    const href = match[1];
    if (!validateCardHref(repoPath, href, docsRoutes)) {
      invalidHrefs.push(href);
    }
  });

  if (invalidHrefs.length > 0) {
    findings.push({
      level: 'warning',
      rule: 'invalid-card-hrefs',
      message: `Found ${invalidHrefs.length} card href value(s) that do not resolve to docs.json or on-disk pages.`,
      hrefs: invalidHrefs
    });
    suggestions.push('Retarget card href values to canonical routed pages or existing on-disk files.');
  }

  return {
    file: repoPath,
    findings,
    suggestions: fixMode ? suggestions : [],
    proseParagraphs: paragraphs.length,
    cardCount: (body.match(/<Card\b/g) || []).length
  };
}

function buildSummary(results) {
  return results.reduce(
    (summary, result) => {
      summary.scanned += 1;
      summary.warnings += result.findings.length;
      return summary;
    },
    { scanned: 0, warnings: 0 }
  );
}

function renderText(report) {
  const lines = [
    'Portal page structure report',
    `Scanned: ${report.summary.scanned} | Warnings: ${report.summary.warnings}`,
    report.fixMode ? 'Fix mode: dry-run only' : '',
    ''
  ].filter(Boolean);

  if (report.results.length === 0) {
    lines.push('No landing-style portal pages found.');
    return lines.join('\n');
  }

  report.results.forEach((result) => {
    if (result.findings.length === 0) {
      lines.push(`OK      ${result.file} | cards=${result.cardCount} | prose=${result.proseParagraphs}`);
      return;
    }

    result.findings.forEach((finding) => {
      lines.push(`WARNING ${result.file} | ${finding.rule} | ${finding.message}`);
      if (finding.hrefs) {
        lines.push(`         hrefs: ${finding.hrefs.join(', ')}`);
      }
    });

    if (report.fixMode && result.suggestions.length > 0) {
      result.suggestions.forEach((suggestion) => {
        lines.push(`SUGGEST ${result.file} | ${suggestion}`);
      });
    }
  });

  return lines.join('\n');
}

function buildJsonReport(report) {
  return {
    generatedAt: report.generatedAt,
    fixMode: report.fixMode,
    summary: report.summary,
    results: report.results
  };
}

function run(args = parseArgs(process.argv.slice(2))) {
  const docsRoutes = collectDocsRoutes();
  const results = collectPortalFiles().map((repoPath) => analyzePortalPage(repoPath, docsRoutes, args.fix));
  return {
    generatedAt: new Date().toISOString(),
    fixMode: args.fix,
    summary: buildSummary(results),
    results,
    exitCode: 0
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
      process.stdout.write(`${renderText(report)}\n`);
    }
    process.exit(report.exitCode);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  parseArgs,
  run,
  collectPortalFiles,
  validateCardHref,
  buildJsonReport,
  renderText
};
