#!/usr/bin/env node
/**
 * @script            check-anchor-usage
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             v2-content
 * @owner             docs
 * @needs             R-R14, R-C6
 * @purpose-statement Validates same-page anchor links in maintained v2 MDX files against heading IDs on the same page
 * @pipeline          manual, ci
 * @usage             node tools/scripts/validators/content/check-anchor-usage.js [--json] [--scope <glob>]
 */
// Baseline 2026-03-09: 100 errors, 8106 warnings - wired as advisory until debt cleared
// Promote to blocking once error count reaches 0

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { isExcludedV2ExperimentalPath } = require('../../../lib/docs-publishability');

const REPO_ROOT = getRepoRoot();
const V2_ROOT = path.join(REPO_ROOT, 'v2');

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

function usage() {
  console.log(
    'Usage: node tools/scripts/validators/content/check-anchor-usage.js [--json] [--scope <glob>]'
  );
}

function parseArgs(argv) {
  const args = {
    json: false,
    scope: ''
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--json') {
      args.json = true;
      continue;
    }

    if (token === '--scope') {
      args.scope = String(argv[index + 1] || '').trim();
      index += 1;
      continue;
    }

    if (token.startsWith('--scope=')) {
      args.scope = token.slice('--scope='.length).trim();
      continue;
    }

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (argv.includes('--scope') && !args.scope) {
    throw new Error('Missing value for --scope');
  }

  return args;
}

function shouldExclude(repoPath) {
  const relPath = toPosix(repoPath).replace(/^\/+/, '');
  if (!relPath.startsWith('v2/')) return true;
  if (!/\.mdx$/i.test(relPath)) return true;
  if (relPath.startsWith('v2/internal/')) return true;
  if (relPath.includes('/_contextData_/') || relPath.includes('/_context_data_/')) return true;
  if (relPath.includes('/_move_me/') || relPath.includes('/_tests-to-delete/')) return true;
  if (relPath.endsWith('/todo.mdx') || relPath.endsWith('/NOTES_V2.md') || relPath.endsWith('/todo.txt')) return true;
  return isExcludedV2ExperimentalPath(relPath);
}

function globToRegExp(glob) {
  let pattern = String(glob || '').trim().replace(/^\.?\//, '');
  if (!pattern) return null;

  let out = '^';
  for (let index = 0; index < pattern.length; index += 1) {
    const char = pattern[index];
    const next = pattern[index + 1];

    if (char === '*') {
      if (next === '*') {
        out += '.*';
        index += 1;
      } else {
        out += '[^/]*';
      }
      continue;
    }

    if (char === '?') {
      out += '.';
      continue;
    }

    if ('\\.[]{}()+-^$|'.includes(char)) {
      out += `\\${char}`;
      continue;
    }

    out += char;
  }

  out += '$';
  return new RegExp(out);
}

function walkFiles(dirPath, out = []) {
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  entries.forEach((entry) => {
    if (entry.name === '.git' || entry.name === 'node_modules') {
      return;
    }

    const absPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walkFiles(absPath, out);
      return;
    }

    const relPath = toPosix(path.relative(REPO_ROOT, absPath));
    if (shouldExclude(relPath)) return;
    out.push({ absPath, relPath });
  });

  return out;
}

function loadTargetFiles(scopeGlob) {
  const matcher = scopeGlob ? globToRegExp(scopeGlob) : null;
  return walkFiles(V2_ROOT)
    .filter((entry) => (!matcher ? true : matcher.test(entry.relPath)))
    .sort((left, right) => left.relPath.localeCompare(right.relPath));
}

function maskComments(content) {
  return String(content || '')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, (match) => match.replace(/[^\n]/g, ' '))
    .replace(/<!--[\s\S]*?-->/g, (match) => match.replace(/[^\n]/g, ' '));
}

function decodeFragment(value) {
  try {
    return decodeURIComponent(value);
  } catch (_error) {
    return value;
  }
}

function normalizeAnchorId(value) {
  return decodeFragment(String(value || '').trim().replace(/^#/, ''))
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function slugify(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function stripHeadingMarkup(value) {
  return String(value || '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[*_~]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function collectHeadingIds(content) {
  const lines = maskComments(content).split('\n');
  const headings = [];
  const slugCounts = new Map();

  let inFrontmatter = lines[0] && lines[0].trim() === '---';
  let inCodeFence = false;

  lines.forEach((line, index) => {
    const trimmed = String(line || '').trim();

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

    if (inCodeFence || !trimmed) return;

    const explicitHtmlHeading = trimmed.match(/^<h([1-6])\b[^>]*\bid=(['"])([^'"]+)\2[^>]*>([\s\S]*?)<\/h\1>$/i);
    if (explicitHtmlHeading) {
      headings.push({
        id: normalizeAnchorId(explicitHtmlHeading[3]),
        heading: stripHeadingMarkup(explicitHtmlHeading[4]),
        line: index + 1
      });
      return;
    }

    const markdownHeading = trimmed.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (!markdownHeading) return;

    let headingText = markdownHeading[2].trim();
    let explicitId = '';
    const explicitIdMatch = headingText.match(/\s+\{#([A-Za-z0-9_-]+)\}\s*$/);
    if (explicitIdMatch) {
      explicitId = normalizeAnchorId(explicitIdMatch[1]);
      headingText = headingText.slice(0, explicitIdMatch.index).trim();
    }

    const normalizedHeading = stripHeadingMarkup(headingText);
    let id = explicitId || slugify(normalizedHeading);
    if (!id) return;

    if (!explicitId) {
      const seen = slugCounts.get(id) || 0;
      slugCounts.set(id, seen + 1);
      if (seen > 0) {
        id = `${id}-${seen}`;
      }
    }

    headings.push({
      id,
      heading: normalizedHeading,
      line: index + 1
    });
  });

  return headings;
}

function collectAnchors(content) {
  const lines = maskComments(content).split('\n');
  const anchors = [];

  let inFrontmatter = lines[0] && lines[0].trim() === '---';
  let inCodeFence = false;

  lines.forEach((line, index) => {
    const trimmed = String(line || '').trim();

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

    if (inCodeFence || !trimmed) return;

    const markdownLinkRe = /\[([^\]]+)\]\((#[^) \t]+)(?:\s+["'][^"']*["'])?\)/g;
    let markdownMatch = markdownLinkRe.exec(line);
    while (markdownMatch) {
      if (line[markdownMatch.index - 1] !== '!') {
        const id = normalizeAnchorId(markdownMatch[2]);
        if (id) {
          anchors.push({
            anchor: id,
            raw: markdownMatch[2],
            line: index + 1
          });
        }
      }
      markdownMatch = markdownLinkRe.exec(line);
    }

    const hrefRes = [
      /\bhref\s*=\s*"(#([^"]*))"/g,
      /\bhref\s*=\s*'(#([^']*))'/g,
      /\bhref\s*=\s*\{\s*"(#([^"]*))"\s*\}/g,
      /\bhref\s*=\s*\{\s*'(#([^']*))'\s*\}/g
    ];

    hrefRes.forEach((hrefRe) => {
      let hrefMatch = hrefRe.exec(line);
      while (hrefMatch) {
        const id = normalizeAnchorId(hrefMatch[1]);
        if (id) {
          anchors.push({
            anchor: id,
            raw: hrefMatch[1],
            line: index + 1
          });
        }
        hrefMatch = hrefRe.exec(line);
      }
    });
  });

  return anchors;
}

function analyzeFile(file) {
  const raw = fs.readFileSync(file.absPath, 'utf8');
  const headings = collectHeadingIds(raw);
  const anchors = collectAnchors(raw);

  const headingMap = new Map();
  headings.forEach((heading) => {
    headingMap.set(heading.id, heading);
  });

  const linkedHeadingIds = new Set();
  const findings = [];

  anchors.forEach((anchor) => {
    if (!headingMap.has(anchor.anchor)) {
      findings.push({
        type: 'broken-anchor',
        severity: 'error',
        file: file.relPath,
        line: anchor.line,
        anchor: anchor.raw
      });
      return;
    }

    linkedHeadingIds.add(anchor.anchor);
  });

  headings.forEach((heading) => {
    if (linkedHeadingIds.has(heading.id)) return;
    findings.push({
      type: 'unlinked-heading-id',
      severity: 'warning',
      file: file.relPath,
      line: heading.line,
      anchor: `#${heading.id}`,
      heading: heading.heading
    });
  });

  return {
    file: file.relPath,
    headings,
    anchors,
    findings
  };
}

function summarize(results) {
  const summary = {
    filesScanned: results.length,
    anchorsScanned: 0,
    headingIds: 0,
    errors: 0,
    warnings: 0
  };

  results.forEach((result) => {
    summary.anchorsScanned += result.anchors.length;
    summary.headingIds += result.headings.length;
    result.findings.forEach((finding) => {
      if (finding.severity === 'error') summary.errors += 1;
      if (finding.severity === 'warning') summary.warnings += 1;
    });
  });

  return summary;
}

function writeHumanReport(results, summary) {
  const brokenAnchors = [];
  results.forEach((result) => {
    result.findings.forEach((finding) => {
      if (finding.severity === 'error') {
        brokenAnchors.push(finding);
      }
    });
  });

  if (brokenAnchors.length === 0) {
    console.log('✅ No broken same-page anchors found.');
  } else {
    console.error('Broken anchors');
    brokenAnchors.forEach((finding) => {
      console.error(`  ${finding.file}:${finding.line} ${finding.anchor}`);
    });
  }

  const stream = summary.errors > 0 ? process.stderr : process.stdout;
  stream.write(
    `Summary: ${summary.filesScanned} files, ${summary.anchorsScanned} anchors, ${summary.headingIds} heading IDs, ${summary.errors} errors, ${summary.warnings} warnings\n`
  );
}

function main() {
  try {
    const args = parseArgs(process.argv.slice(2));
    if (args.help) {
      usage();
      process.exit(0);
    }

    const results = loadTargetFiles(args.scope).map((file) => analyzeFile(file));
    const summary = summarize(results);
    const findings = results.flatMap((result) => result.findings);
    const payload = {
      passed: summary.errors === 0,
      summary,
      findings
    };

    if (args.json) {
      process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);
    } else {
      writeHumanReport(results, summary);
    }

    process.exit(summary.errors > 0 ? 1 : 0);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`check-anchor-usage failed: ${message}`);
    process.exit(1);
  }
}

main();
