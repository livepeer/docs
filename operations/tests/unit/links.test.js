#!/usr/bin/env node
/**
 * @script            links.test
 * @category          validator
 * @type              validator
 * @concern           content
 * @niche             health
 * @purpose           qa:link-integrity
 * @description       Fast link validator for staged and repo-scoped markdown/MDX checks, with explicit file-read failures and JSX href detection for local validation lanes.
 * @mode              execute
 * @scope             tests
 * @domain            docs
 * @needs             E-R12, E-R14
 * @purpose-statement Primary link validator — validates internal markdown/MDX links only, with repo-wide dry-run support.
 * @pipeline          P1, P3
 * @usage             node operations/tests/unit/links.test.js [--dry-run] [--scope routable-v2|repo] [--staged] [--files <paths>]
 * @policy            E-R12, E-R14
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');
const { getMdxFiles, getStagedDocsPageFiles, getStagedFiles, readFile } = require('../utils/file-walker');

let errors = [];
let warnings = [];
const REPO_ROOT = getRepoRoot();
const LINKABLE_ATTRS = ['href', 'src', 'srcset', 'poster', 'action', 'data', 'to', 'image', 'url'];
const SCOPE_VALUES = new Set(['routable-v2', 'repo']);
const V2_DOMAIN_DIRS = new Set([
  'home',
  'about',
  'solutions',
  'community',
  'developers',
  'gateways',
  'orchestrators',
  'lpt',
  'resources',
  'internal',
  'deprecated',
  'experimental',
  'notes'
]);

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

function parseArgs(argv) {
  const parsed = {
    stagedOnly: false,
    dryRun: false,
    scope: 'routable-v2',
    files: []
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--staged') {
      parsed.stagedOnly = true;
      continue;
    }
    if (token === '--dry-run') {
      parsed.dryRun = true;
      continue;
    }
    if (token === '--scope') {
      parsed.scope = String(argv[i + 1] || '').trim().toLowerCase();
      i += 1;
      continue;
    }
    if (token === '--files' || token === '--file') {
      const raw = String(argv[i + 1] || '').trim();
      if (raw) {
        raw
          .split(',')
          .map((entry) => entry.trim())
          .filter(Boolean)
          .forEach((entry) => {
            parsed.files.push(path.isAbsolute(entry) ? entry : path.resolve(process.cwd(), entry));
          });
      }
      i += 1;
    }
  }

  if (!SCOPE_VALUES.has(parsed.scope)) {
    throw new Error(`Invalid --scope value "${parsed.scope}". Use routable-v2|repo.`);
  }

  parsed.files = [...new Set(parsed.files)];
  return parsed;
}

function isStyleGuideExampleFile(file) {
  return file.includes('style-guide.mdx');
}

function fileExists(filePath) {
  if (fs.existsSync(filePath)) {
    return { exists: true, path: filePath };
  }

  const withMdx = filePath.endsWith('.mdx') ? filePath : `${filePath}.mdx`;
  if (fs.existsSync(withMdx)) {
    return { exists: true, path: withMdx };
  }

  const withMd = filePath.endsWith('.md') ? filePath : `${filePath}.md`;
  if (fs.existsSync(withMd)) {
    return { exists: true, path: withMd };
  }

  const dirIndex = path.join(filePath, 'index.mdx');
  if (fs.existsSync(dirIndex)) {
    return { exists: true, path: dirIndex };
  }

  const dirIndexMd = path.join(filePath, 'index.md');
  if (fs.existsSync(dirIndexMd)) {
    return { exists: true, path: dirIndexMd };
  }

  const dirReadme = path.join(filePath, 'README.mdx');
  if (fs.existsSync(dirReadme)) {
    return { exists: true, path: dirReadme };
  }

  const dirReadmeMd = path.join(filePath, 'README.md');
  if (fs.existsSync(dirReadmeMd)) {
    return { exists: true, path: dirReadmeMd };
  }

  return { exists: false, path: null };
}

function linkToFilePath(linkPath, currentFile) {
  const rootDir = REPO_ROOT;
  let normalizedLinkPath = linkPath
    .split('#')[0]
    .split('?')[0]
    .trim()
    .replace(/^['"]+|['"]+$/g, '');

  try {
    normalizedLinkPath = decodeURI(normalizedLinkPath);
  } catch (_error) {
    // Leave malformed encodings untouched so the validator can report them.
  }

  if (
    normalizedLinkPath.startsWith('http://') ||
    normalizedLinkPath.startsWith('https://') ||
    normalizedLinkPath.startsWith('mailto:') ||
    normalizedLinkPath.startsWith('tel:') ||
    normalizedLinkPath.startsWith('javascript:') ||
    normalizedLinkPath.startsWith('data:') ||
    normalizedLinkPath.startsWith('#') ||
    normalizedLinkPath.length === 0
  ) {
    return null;
  }

  if (normalizedLinkPath.startsWith('/')) {
    const repoRelativePath = normalizedLinkPath.replace(/^\//, '').replace(/\/$/, '');
    if (!repoRelativePath) {
      return null;
    }

    const directRepoPath = path.join(REPO_ROOT, repoRelativePath);
    if (fileExists(directRepoPath).exists) {
      return directRepoPath;
    }

    if (repoRelativePath.startsWith('v2/')) {
      return path.join(REPO_ROOT, repoRelativePath);
    }

    const firstSegment = repoRelativePath.split('/')[0];
    if (V2_DOMAIN_DIRS.has(firstSegment)) {
      return path.join(REPO_ROOT, 'v2', repoRelativePath);
    }

    return path.join(REPO_ROOT, `v2/pages/${repoRelativePath}`);
  }

  const currentDir = path.dirname(currentFile);
  const resolved = path.resolve(currentDir, normalizedLinkPath);
  const relativePath = path.relative(rootDir, resolved);
  const normalizedRelative = relativePath.split(path.sep).join('/');
  const pagesPrefix = 'v2/pages/';

  if (normalizedRelative.startsWith(pagesPrefix)) {
    const parts = normalizedRelative.split('/');
    const maybeDomain = parts[2];
    if (V2_DOMAIN_DIRS.has(maybeDomain)) {
      const migratedPath = path.join(rootDir, 'v2', ...parts.slice(2));
      if (fileExists(migratedPath).exists) {
        return migratedPath;
      }
    }
  }

  return path.join(rootDir, relativePath);
}

function splitSrcsetTargets(rawValue) {
  return String(rawValue || '')
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => entry.split(/\s+/)[0])
    .filter(Boolean);
}

function getAttrTargets(attrName, rawValue) {
  if (String(attrName || '').toLowerCase() === 'srcset') {
    return splitSrcsetTargets(rawValue);
  }
  return [String(rawValue || '').trim()].filter(Boolean);
}

function getRepoMarkdownFiles() {
  const result = spawnSync('git', ['ls-files', '--', '*.md', '*.mdx'], {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });

  if (result.status !== 0) {
    return [];
  }

  return String(result.stdout || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => path.resolve(REPO_ROOT, line))
    .filter((filePath) => fs.existsSync(filePath));
}

function getIgnoredRanges(content) {
  const ignoredRanges = [];
  const ignoreRegexes = [
    /```[\s\S]*?```/g,
    /~~~[\s\S]*?~~~/g,
    /\{\/\*[\s\S]*?\*\/\}/g,
    /<!--[\s\S]*?-->/g
  ];

  ignoreRegexes.forEach((regex) => {
    let match;

    while ((match = regex.exec(content)) !== null) {
      ignoredRanges.push({
        start: match.index,
        end: match.index + match[0].length
      });
    }
  });

  return ignoredRanges;
}

function isIgnoredIndex(index, ignoredRanges) {
  return ignoredRanges.some((range) => index >= range.start && index < range.end);
}

function getMatchesOutsideIgnoredRanges(content, regex, ignoredRanges) {
  const matches = [];
  let match;

  regex.lastIndex = 0;
  while ((match = regex.exec(content)) !== null) {
    if (!isIgnoredIndex(match.index, ignoredRanges)) {
      matches.push(match);
    }
  }

  return matches;
}

function checkBrokenLinks(files) {
  files.forEach((file) => {
    const content = readFile(file);
    if (content === null) {
      errors.push({
        file,
        rule: 'File read error',
        message: 'Unable to read file content for link validation'
      });
      return;
    }
    const ignoredRanges = getIgnoredRanges(content);

    const markdownLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const markdownMatches = getMatchesOutsideIgnoredRanges(content, markdownLinkRegex, ignoredRanges);

    markdownMatches.forEach((match) => {
      const linkPath = match[2];
      const filePath = linkToFilePath(linkPath, file);

      if (!filePath) return;

      const exists = fileExists(filePath);
      if (!exists.exists) {
        errors.push({
          file,
          rule: 'Broken link',
          message: `Link to "${linkPath}" points to non-existent file`,
          link: linkPath,
          expected: filePath.replace(`${REPO_ROOT}/`, '')
        });
      }
    });

    const anchorRegex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
    const anchorMatches = getMatchesOutsideIgnoredRanges(content, anchorRegex, ignoredRanges);
    anchorMatches.forEach((match) => {
      const linkPath = match[1];
      const filePath = linkToFilePath(linkPath, file);

      if (!filePath) return;

      const exists = fileExists(filePath);
      if (!exists.exists) {
        errors.push({
          file,
          rule: 'Broken link',
          message: `Anchor link to "${linkPath}" points to non-existent file`,
          link: linkPath,
          expected: filePath.replace(`${REPO_ROOT}/`, '')
        });
      }
    });

    const jsxAttrRegex = new RegExp(
      `\\b(${LINKABLE_ATTRS.join('|')})\\s*=\\s*(?:"([^"]+)"|'([^']+)'|\\{\\s*"([^"]+)"\\s*\\}|\\{\\s*'([^']+)'\\s*\\})`,
      'gi'
    );
    const jsxMatches = getMatchesOutsideIgnoredRanges(content, jsxAttrRegex, ignoredRanges);
    jsxMatches.forEach((match) => {
      const attrName = (match[1] || '').toLowerCase();
      const rawValue = match[2] || match[3] || match[4] || match[5] || '';

      getAttrTargets(attrName, rawValue).forEach((linkPath) => {
        const filePath = linkToFilePath(linkPath, file);
        if (!filePath) return;

        const exists = fileExists(filePath);
        if (!exists.exists) {
          errors.push({
            file,
            rule: 'Broken link',
            message: `${attrName}="${linkPath}" points to non-existent file`,
            link: linkPath,
            expected: filePath.replace(`${REPO_ROOT}/`, '')
          });
        }
      });
    });
  });
}

function checkEmptyLinks(files) {
  files.forEach((file) => {
    const content = readFile(file);
    if (content === null) {
      errors.push({
        file,
        rule: 'File read error',
        message: 'Unable to read file content for link validation'
      });
      return;
    }

    const ignoredRanges = getIgnoredRanges(content);
    const emptyMarkdownLinkRegex = /\[\]\s*\(([^)]+)\)/g;
    const emptyJsxLinkRegex = /<(?:Link|a)\s+[^>]*href\s*=\s*["'][^"']+["'][^>]*>\s*<\/(?:Link|a)>/g;
    const emptySelfClosingJsxLinkRegex = /<(?:Link|a)\s+[^>]*href\s*=\s*["'][^"']+["'][^>]*\/>/g;

    getMatchesOutsideIgnoredRanges(content, emptyMarkdownLinkRegex, ignoredRanges).forEach(() => {
      errors.push({
        file,
        rule: 'Empty link',
        message: 'Empty link text: [](url) — link has no visible text'
      });
    });

    getMatchesOutsideIgnoredRanges(content, emptyJsxLinkRegex, ignoredRanges).forEach(() => {
      errors.push({
        file,
        rule: 'Empty link',
        message: 'Empty JSX link — element has no visible text'
      });
    });

    getMatchesOutsideIgnoredRanges(content, emptySelfClosingJsxLinkRegex, ignoredRanges).forEach(() => {
      errors.push({
        file,
        rule: 'Empty link',
        message: 'Empty JSX link — element has no visible text'
      });
    });
  });
}

function runTests(options = {}) {
  errors = [];
  warnings = [];

  const { files = null, stagedOnly = false, scope = 'routable-v2', dryRun = false } = options;

  let testFiles = files;
  if (!testFiles) {
    if (stagedOnly) {
      testFiles = scope === 'repo'
        ? getStagedFiles().filter((filePath) => /\.(md|mdx)$/i.test(filePath))
        : getStagedDocsPageFiles().filter((filePath) => filePath.endsWith('.mdx'));
    } else if (scope === 'repo') {
      testFiles = getRepoMarkdownFiles();
    } else {
      testFiles = getMdxFiles();
    }
  }

  testFiles = testFiles.filter((file) => /\.(md|mdx)$/i.test(file));
  testFiles = testFiles.filter((file) => !isStyleGuideExampleFile(file));

  checkBrokenLinks(testFiles);
  checkEmptyLinks(testFiles);

  return {
    errors,
    warnings,
    passed: errors.length === 0,
    total: testFiles.length,
    scope,
    dryRun
  };
}

function runCli(argv = process.argv.slice(2), options = {}) {
  const { scriptName = 'links.test.js' } = options;
  const parsed = parseArgs(argv);
  const result = runTests({
    stagedOnly: parsed.stagedOnly,
    files: parsed.files.length > 0 ? parsed.files : null,
    scope: parsed.scope,
    dryRun: parsed.dryRun
  });

  if (parsed.dryRun) {
    console.log(`\nℹ️  Dry run: ${scriptName} is read-only; no files were modified.`);
  }

  if (result.errors.length > 0) {
    console.error('\n❌ Broken Links Errors:\n');
    result.errors.forEach((err) => {
      console.error(`  ${err.file}`);
      console.error(`    ${err.rule}: ${err.message}`);
      if (err.expected) {
        console.error(`    Expected: ${err.expected}`);
      }
      console.error('');
    });
  }

  if (result.warnings.length > 0) {
    console.warn('\n⚠️  Link Warnings:\n');
    result.warnings.forEach((warn) => {
      console.warn(`  ${warn.file} - ${warn.message}`);
    });
  }

  if (result.passed) {
    console.log(`\n✅ All links valid (${result.total} files checked)`);
    return 0;
  }

  console.error(`\n❌ ${result.errors.length} broken link(s) found`);
  return 1;
}

if (require.main === module) {
  process.exit(runCli(process.argv.slice(2), { scriptName: 'links.test.js' }));
}

module.exports = { parseArgs, runTests, runCli };
