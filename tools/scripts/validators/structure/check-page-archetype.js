#!/usr/bin/env node
/**
 * @script            check-page-archetype
 * @category          validator
 * @purpose           qa:content-structure
 * @scope             tools/scripts/validators/structure, v2, docs.json
 * @owner             docs
 * @needs             SE-1-01, S-3.3
 * @purpose-statement Validates English v2 docs headings against required section archetypes by pageType
 * @pipeline          scheduled advisory only - do not add to commit or PR checks
 * @usage             node tools/scripts/validators/structure/check-page-archetype.js [--path <repo-path>] [--strict]
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const REPO_ROOT = path.resolve(__dirname, '../../../../');
const DOCS_JSON_PATH = path.join(REPO_ROOT, 'docs.json');
const SUPPORTED_EXTENSIONS = new Set(['.md', '.mdx']);

const ARCHETYPES = {
  portal: { required: ['hero', 'cards'], optional: ['overview'] },
  quickstart: { required: ['prerequisites', 'steps'], optional: ['next-steps'] },
  tutorial: { required: ['overview', 'steps', 'next-steps'], optional: ['prerequisites'] },
  reference: { required: ['overview'], optional: ['api', 'parameters', 'examples'] },
  conceptual: { required: ['overview'], optional: ['details', 'related'] },
  guide: { required: ['overview', 'steps'], optional: ['next-steps', 'related'] }
};

const PAGE_TYPE_ALIASES = {
  concept: 'conceptual'
};

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function usage() {
  console.log(
    [
      'Usage: node tools/scripts/validators/structure/check-page-archetype.js [options]',
      '',
      'Options:',
      '  --path <repo-path>  Scan a specific file or directory instead of docs.json English v2 routes',
      '  --strict            Exit 1 when archetype findings are detected',
      '  --help, -h          Show this help message'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const options = {
    targetPath: '',
    strict: false,
    help: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--strict') {
      options.strict = true;
      continue;
    }

    if (token === '--help' || token === '-h') {
      options.help = true;
      continue;
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

function loadDefaultFiles() {
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
      files.push(fileEntryFromRepoPath(repoPath));
    });
  });

  return files.sort((left, right) => left.relPath.localeCompare(right.relPath));
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

    const relPath = toPosix(path.relative(REPO_ROOT, absPath));
    if (!isSupportedDocFile(relPath) || shouldExclude(relPath)) {
      return;
    }

    out.push({
      absPath,
      relPath
    });
  });

  return out;
}

function loadTargetFiles(targetPath) {
  const resolvedPath = resolvePathInput(targetPath);
  const stat = fs.statSync(resolvedPath);

  if (stat.isDirectory()) {
    return walkDirectory(resolvedPath).sort((left, right) => left.relPath.localeCompare(right.relPath));
  }

  const relPath = toPosix(path.relative(REPO_ROOT, resolvedPath));
  if (!isSupportedDocFile(relPath) || shouldExclude(relPath)) {
    return [];
  }

  return [{ absPath: resolvedPath, relPath }];
}

function extractFrontmatter(content) {
  const match = String(content || '').match(/^---\s*\n([\s\S]*?)\n---\s*(?:\n|$)/);
  if (!match) {
    return { exists: false, data: {} };
  }

  try {
    const parsed = yaml.load(match[1]);
    return {
      exists: true,
      data: parsed && typeof parsed === 'object' ? parsed : {}
    };
  } catch (error) {
    return {
      exists: true,
      data: {},
      error: error.message
    };
  }
}

function blankPreservingLines(value) {
  return String(value || '').replace(/[^\n]/g, '');
}

function stripFrontmatterPreservingLines(content) {
  return String(content || '').replace(
    /^---\s*\n([\s\S]*?)\n---\s*(?:\n|$)/,
    (match) => blankPreservingLines(match)
  );
}

function stripFencedCodeBlocksPreservingLines(content) {
  return String(content || '')
    .replace(/```[\s\S]*?```/g, (match) => blankPreservingLines(match))
    .replace(/~~~[\s\S]*?~~~/g, (match) => blankPreservingLines(match));
}

function normalizeHeading(value) {
  return String(value || '')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[`*_~]/g, ' ')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/[^A-Za-z0-9\s-]/g, ' ')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function extractHeadings(content) {
  const scanContent = stripFencedCodeBlocksPreservingLines(
    stripFrontmatterPreservingLines(content)
  );
  const headings = [];
  const lines = scanContent.split('\n');

  lines.forEach((line, index) => {
    const match = line.match(/^#{1,6}\s+(.+?)\s*#*\s*$/);
    if (!match) return;

    const rawText = String(match[1] || '').trim();
    const key = normalizeHeading(rawText);
    if (!key) return;

    headings.push({
      raw: rawText,
      key,
      line: index + 1
    });
  });

  return headings;
}

function resolvePageType(frontmatterData) {
  const raw = String(frontmatterData?.pageType || '').trim().toLowerCase();
  if (!raw) {
    return { raw: '', resolved: '' };
  }

  return {
    raw,
    resolved: PAGE_TYPE_ALIASES[raw] || raw
  };
}

function addCount(map, key) {
  if (!key) return;
  map.set(key, (map.get(key) || 0) + 1);
}

function describeCounts(map) {
  if (map.size === 0) return '';

  return [...map.entries()]
    .sort((left, right) => left[0].localeCompare(right[0]))
    .map(([key, count]) => `${key}:${count}`)
    .join(', ');
}

function analyzeFile(file) {
  const content = fs.readFileSync(file.absPath, 'utf8');
  const frontmatter = extractFrontmatter(content);

  if (frontmatter.error) {
    throw new Error(`Invalid frontmatter YAML in ${file.relPath}: ${frontmatter.error}`);
  }

  const pageType = resolvePageType(frontmatter.data);
  if (!pageType.raw) {
    return {
      status: 'skipped-missing-page-type'
    };
  }

  const archetype = ARCHETYPES[pageType.resolved];
  if (!archetype) {
    return {
      status: 'skipped-unsupported-page-type',
      pageType: pageType.raw
    };
  }

  const orderedSections = [...archetype.required, ...archetype.optional];
  const allowedSections = new Set(orderedSections);
  const headings = extractHeadings(content);
  const recognizedHeadings = headings.filter((heading) => allowedSections.has(heading.key));
  const recognizedKeys = new Set(recognizedHeadings.map((heading) => heading.key));
  const findings = [];

  archetype.required.forEach((section) => {
    if (recognizedKeys.has(section)) return;

    findings.push({
      type: 'missing-required',
      file: file.relPath,
      line: 1,
      message: `Missing required section "${section}" for pageType "${pageType.resolved}".`
    });
  });

  let highestSeenIndex = -1;
  let highestSeenSection = '';

  recognizedHeadings.forEach((heading) => {
    const sectionIndex = orderedSections.indexOf(heading.key);
    if (sectionIndex === -1) return;

    if (sectionIndex < highestSeenIndex) {
      findings.push({
        type: 'order-violation',
        file: file.relPath,
        line: heading.line,
        message: `Section "${heading.key}" appears after "${highestSeenSection}" but must follow ${orderedSections.join(' -> ')}.`
      });
      return;
    }

    highestSeenIndex = sectionIndex;
    highestSeenSection = heading.key;
  });

  return {
    status: 'checked',
    findings
  };
}

function analyzeFiles(files) {
  const findings = [];
  const stats = {
    filesScanned: files.length,
    filesChecked: 0,
    skippedMissingPageType: 0,
    skippedUnsupportedType: 0,
    missingRequired: 0,
    orderViolations: 0,
    unsupportedTypes: new Map()
  };

  files.forEach((file) => {
    const result = analyzeFile(file);

    if (result.status === 'skipped-missing-page-type') {
      stats.skippedMissingPageType += 1;
      return;
    }

    if (result.status === 'skipped-unsupported-page-type') {
      stats.skippedUnsupportedType += 1;
      addCount(stats.unsupportedTypes, result.pageType);
      return;
    }

    stats.filesChecked += 1;

    result.findings.forEach((finding) => {
      findings.push(finding);
      if (finding.type === 'missing-required') {
        stats.missingRequired += 1;
      } else if (finding.type === 'order-violation') {
        stats.orderViolations += 1;
      }
    });
  });

  return { findings, stats };
}

function sortFindings(findings) {
  return [...findings].sort((left, right) => {
    const fileComparison = left.file.localeCompare(right.file);
    if (fileComparison !== 0) return fileComparison;

    const lineComparison = left.line - right.line;
    if (lineComparison !== 0) return lineComparison;

    return left.message.localeCompare(right.message);
  });
}

function printFindings(findings) {
  if (findings.length === 0) {
    return;
  }

  const sorted = sortFindings(findings);
  console.warn(`\nPage Archetype Findings (${sorted.length}):\n`);

  let currentFile = '';
  sorted.forEach((finding) => {
    if (finding.file !== currentFile) {
      currentFile = finding.file;
      console.warn(`  ${currentFile}`);
    }

    console.warn(`    line ${finding.line}: ${finding.message}`);
  });
}

function buildSummary(stats) {
  const parts = [
    `files scanned: ${stats.filesScanned}`,
    `files checked: ${stats.filesChecked}`,
    `skipped missing pageType: ${stats.skippedMissingPageType}`,
    `skipped unsupported type: ${stats.skippedUnsupportedType}`,
    `missing required: ${stats.missingRequired}`,
    `order violations: ${stats.orderViolations}`
  ];

  const unsupportedSummary = describeCounts(stats.unsupportedTypes);
  if (unsupportedSummary) {
    parts.push(`unsupported pageTypes: ${unsupportedSummary}`);
  }

  return parts.join(', ');
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    usage();
    process.exit(0);
  }

  const files = options.targetPath ? loadTargetFiles(options.targetPath) : loadDefaultFiles();
  if (files.length === 0) {
    console.log('No eligible English v2 docs files found for page archetype validation.');
    process.exit(0);
  }

  const result = analyzeFiles(files);
  const summary = buildSummary(result.stats);

  if (result.findings.length === 0) {
    console.log(`\nPage archetype checks passed (${summary})`);
    return;
  }

  printFindings(result.findings);

  const finalMessage = `\nPage archetype scan complete (${summary})`;
  if (options.strict) {
    console.error(finalMessage);
    process.exit(1);
  }

  console.log(finalMessage);
}

try {
  main();
} catch (error) {
  console.error(`Page archetype validator failed: ${error.message}`);
  process.exit(1);
}
