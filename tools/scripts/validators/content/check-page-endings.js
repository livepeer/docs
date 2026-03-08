#!/usr/bin/env node
/**
 * @script            check-page-endings
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tools/scripts/validators/content, v2, docs.json
 * @owner             docs
 * @needs             SE-2-04, S-1.7
 * @purpose-statement Checks English route-backed v2 docs for canonical resources or next-step endings in the visible last 20 lines.
 * @pipeline          manual — scheduled advisory validator, run on-demand only
 * @usage             node tools/scripts/validators/content/check-page-endings.js [--path <repo-path>] [--strict]
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '../../../../');
const DOCS_JSON_PATH = path.join(REPO_ROOT, 'docs.json');
const SUPPORTED_EXTENSIONS = new Set(['.mdx', '.md']);
const TAIL_LINE_COUNT = 20;
const CANONICAL_HEADINGS = new Set([
  '## Additional Resources',
  '## Resources',
  '## Further Reading',
  '## Next Steps',
  "## What's Next",
  '## What’s Next'
]);
const NON_CANONICAL_RELATED_RESOURCES = '## Related Resources';
const CARD_PATTERNS = [/<\s*CardGroup\b/, /<\s*GotoCard\b/, /<\s*Card\b/];

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function usage() {
  console.log(
    'Usage: node tools/scripts/validators/content/check-page-endings.js [--path <repo-path>] [--strict]'
  );
}

function parseArgs(argv) {
  const options = {
    targetPath: '',
    strict: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--strict') {
      options.strict = true;
      continue;
    }

    if (token === '--help' || token === '-h') {
      usage();
      process.exit(0);
    }

    if (token === '--path') {
      options.targetPath = String(argv[index + 1] || '').trim();
      index += 1;
      continue;
    }

    if (token.startsWith('--path=')) {
      options.targetPath = token.slice('--path='.length).trim();
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (argv.includes('--path') && !options.targetPath) {
    throw new Error('Missing value for --path');
  }

  return options;
}

function normalizeRoutePath(routePath) {
  return toPosix(routePath)
    .trim()
    .replace(/^\/+/, '')
    .replace(/\.(md|mdx)$/i, '')
    .replace(/\/index$/i, '')
    .replace(/\/+$/, '');
}

function shouldExclude(repoPath) {
  const relPath = toPosix(repoPath).replace(/^\/+/, '');
  if (!relPath.startsWith('v2/')) return true;
  if (relPath.startsWith('v2/es/') || relPath.startsWith('v2/fr/') || relPath.startsWith('v2/cn/')) return true;
  if (relPath.startsWith('v2/internal/')) return true;
  if (relPath.includes('/_contextData_/') || relPath.includes('/_context_data_/')) return true;
  if (relPath.includes('/_move_me/') || relPath.includes('/_tests-to-delete/')) return true;
  if (relPath.endsWith('todo.txt') || relPath.endsWith('todo.mdx') || relPath.endsWith('NOTES_V2.md')) return true;

  return relPath
    .split('/')
    .some((segment) => segment.toLowerCase().startsWith('x-'));
}

function isSupportedDocFile(repoPath) {
  return SUPPORTED_EXTENSIONS.has(path.extname(repoPath).toLowerCase());
}

function collectDocsPageEntries(node, out = []) {
  if (typeof node === 'string') {
    const value = node.trim().replace(/^\/+/, '');
    if (value.startsWith('v2/') && !shouldExclude(value)) {
      out.push(value);
    }
    return out;
  }

  if (Array.isArray(node)) {
    node.forEach((item) => collectDocsPageEntries(item, out));
    return out;
  }

  if (!node || typeof node !== 'object') {
    return out;
  }

  Object.values(node).forEach((value) => collectDocsPageEntries(value, out));
  return out;
}

function fileEntryFromRepoPath(repoPath) {
  return {
    absPath: path.join(REPO_ROOT, repoPath),
    relPath: toPosix(repoPath)
  };
}

function getEligibleRoutePaths() {
  if (!fs.existsSync(DOCS_JSON_PATH)) {
    throw new Error('docs.json not found at repository root');
  }

  const docsJson = JSON.parse(fs.readFileSync(DOCS_JSON_PATH, 'utf8'));
  const versions = docsJson?.navigation?.versions || [];
  const routeEntries = [];

  versions.forEach((versionNode) => {
    const languages = versionNode?.languages;

    if (Array.isArray(languages)) {
      languages
        .filter((item) => item && item.language === 'en')
        .forEach((item) => collectDocsPageEntries(item, routeEntries));
      return;
    }

    if (languages && typeof languages === 'object' && languages.en) {
      collectDocsPageEntries(languages.en, routeEntries);
      return;
    }

    collectDocsPageEntries(versionNode, routeEntries);
  });

  const files = [];
  const seen = new Set();

  routeEntries.forEach((routePath) => {
    const routeKey = normalizeRoutePath(routePath);
    if (!routeKey) return;

    ['.mdx', '.md'].forEach((extension) => {
      const repoPath = `${routeKey}${extension}`;
      if (seen.has(repoPath) || shouldExclude(repoPath)) return;
      if (!fs.existsSync(path.join(REPO_ROOT, repoPath))) return;

      seen.add(repoPath);
      files.push(repoPath);
    });
  });

  return files.sort();
}

function loadDefaultFiles() {
  return getEligibleRoutePaths().map(fileEntryFromRepoPath);
}

function resolvePathInput(targetPath) {
  const candidatePaths = [];
  const raw = path.isAbsolute(targetPath) ? targetPath : path.join(REPO_ROOT, targetPath);
  candidatePaths.push(raw);

  if (!path.extname(raw)) {
    candidatePaths.push(`${raw}.mdx`, `${raw}.md`);
  }

  const resolved = candidatePaths.find((candidate) => fs.existsSync(candidate));
  if (!resolved) {
    throw new Error(`Path not found: ${targetPath}`);
  }

  const repoRelative = toPosix(path.relative(REPO_ROOT, resolved));
  if (repoRelative.startsWith('..')) {
    throw new Error(`Path must be inside the repository: ${targetPath}`);
  }

  return resolved;
}

function walkDirectory(dirPath, out = []) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  entries.forEach((entry) => {
    if (entry.name === '.git' || entry.name === 'node_modules') {
      return;
    }

    const absPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      walkDirectory(absPath, out);
      return;
    }

    out.push(absPath);
  });

  return out;
}

function loadTargetFiles(targetPath) {
  const eligiblePaths = new Set(getEligibleRoutePaths());
  const resolvedPath = resolvePathInput(targetPath);
  const stat = fs.statSync(resolvedPath);
  const candidates = stat.isDirectory() ? walkDirectory(resolvedPath) : [resolvedPath];
  const files = [];
  const seen = new Set();

  candidates.forEach((absPath) => {
    const relPath = toPosix(path.relative(REPO_ROOT, absPath));
    if (seen.has(relPath)) return;
    if (!isSupportedDocFile(relPath) || shouldExclude(relPath)) return;
    if (!eligiblePaths.has(relPath)) return;

    seen.add(relPath);
    files.push({ absPath, relPath });
  });

  return files.sort((left, right) => left.relPath.localeCompare(right.relPath));
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function stripFencedCodeBlocks(raw) {
  const normalized = String(raw || '').replace(/\r\n?/g, '\n');
  const lines = normalized.split('\n');
  const out = [];
  let activeFenceChar = '';
  let activeFenceLength = 0;

  lines.forEach((line) => {
    if (!activeFenceChar) {
      const openMatch = line.match(/^\s*(`{3,}|~{3,})/);
      if (openMatch) {
        activeFenceChar = openMatch[1][0];
        activeFenceLength = openMatch[1].length;
        return;
      }

      out.push(line);
      return;
    }

    const closePattern = new RegExp(`^\\s*${escapeRegExp(activeFenceChar)}{${activeFenceLength},}\\s*$`);
    if (closePattern.test(line)) {
      activeFenceChar = '';
      activeFenceLength = 0;
    }
  });

  return out.join('\n');
}

function stripVisibleNoise(raw) {
  return stripFencedCodeBlocks(raw)
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/<!--[\s\S]*?-->/g, '');
}

function getVisibleTailLines(raw) {
  const lines = stripVisibleNoise(raw)
    .split('\n')
    .map((line) => line.replace(/\s+$/, ''));

  while (lines.length > 0 && !lines[lines.length - 1].trim()) {
    lines.pop();
  }

  return lines.slice(-TAIL_LINE_COUNT);
}

function hasCardPattern(line) {
  return CARD_PATTERNS.some((pattern) => pattern.test(line));
}

function analyzeTailLines(lines) {
  let hasCanonicalPattern = false;
  let hasAliasHeading = false;

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    if (CANONICAL_HEADINGS.has(trimmed) || hasCardPattern(trimmed)) {
      hasCanonicalPattern = true;
    }

    if (trimmed === NON_CANONICAL_RELATED_RESOURCES) {
      hasAliasHeading = true;
    }
  });

  const findings = [];

  if (hasAliasHeading) {
    findings.push({
      kind: 'non-canonical-related-resources',
      message:
        'Ends with non-canonical heading "## Related Resources"; use a canonical resources or next-steps ending.'
    });
  } else if (!hasCanonicalPattern) {
    findings.push({
      kind: 'missing-ending-pattern',
      message:
        'Missing canonical ending pattern in the visible last 20 lines (resources heading, next-steps heading, CardGroup/Card, or GotoCard).'
    });
  }

  return {
    compliant: hasCanonicalPattern,
    findings
  };
}

function analyzeFile(file) {
  const raw = fs.readFileSync(file.absPath, 'utf8');
  const tailLines = getVisibleTailLines(raw);
  const analysis = analyzeTailLines(tailLines);

  return {
    file: file.relPath,
    compliant: analysis.compliant,
    findings: analysis.findings
  };
}

function analyzeFiles(files) {
  const analyses = files.map(analyzeFile);
  const findings = analyses.flatMap((analysis) =>
    analysis.findings.map((finding) => ({
      file: analysis.file,
      kind: finding.kind,
      message: finding.message
    }))
  );

  return {
    analyses,
    findings,
    filesChecked: files.length,
    compliantPages: analyses.filter((analysis) => analysis.compliant).length,
    aliasFindings: findings.filter((finding) => finding.kind === 'non-canonical-related-resources').length,
    missingFindings: findings.filter((finding) => finding.kind === 'missing-ending-pattern').length
  };
}

function printFindings(findings) {
  if (findings.length === 0) {
    return;
  }

  console.warn('\nPage ending advisories:\n');
  findings.forEach((finding) => {
    console.warn(`  ${finding.file} - ${finding.message}`);
  });
}

function summaryLine(result) {
  return [
    `files checked: ${result.filesChecked}`,
    `compliant pages: ${result.compliantPages}`,
    `alias findings: ${result.aliasFindings}`,
    `missing-pattern findings: ${result.missingFindings}`
  ].join(', ');
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const files = options.targetPath ? loadTargetFiles(options.targetPath) : loadDefaultFiles();

  if (files.length === 0) {
    console.log('No eligible English v2 docs files found for page ending validation.');
    process.exit(0);
  }

  const result = analyzeFiles(files);
  printFindings(result.findings);

  const summary = summaryLine(result);
  if (result.findings.length === 0) {
    console.log(`\nPage ending checks passed (${summary})`);
    process.exit(0);
  }

  if (options.strict) {
    console.error(`\nPage ending scan failed (${summary})`);
    process.exit(1);
  }

  console.log(`\nPage ending scan complete (${summary})`);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(`Page ending validator failed: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  analyzeFile,
  analyzeFiles,
  analyzeTailLines,
  getEligibleRoutePaths,
  getVisibleTailLines,
  loadDefaultFiles,
  loadTargetFiles,
  parseArgs,
  shouldExclude,
  stripFencedCodeBlocks,
  stripVisibleNoise
};
