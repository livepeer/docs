#!/usr/bin/env node
/**
 * @script            check-description-quality
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tools/scripts/validators/content, v2
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Validates English v2 frontmatter descriptions for SEO length, boilerplate openings, and duplicate reuse
 * @pipeline          manual — diagnostic/investigation tool, run on-demand only
 * @usage             node tools/scripts/validators/content/check-description-quality.js [--path <repo-path>] [--strict]
 */

const fs = require('fs');
const path = require('path');
const yaml = require('../../lib/load-js-yaml');
const { isExcludedV2ExperimentalPath } = require('../../lib/docs-publishability');
const { isGeneratedDocsPageFile } = require('../../lib/docs-page-scope');

const REPO_ROOT = path.resolve(__dirname, '../../../../');
const DOCS_JSON_PATH = path.join(REPO_ROOT, 'docs.json');
const SUPPORTED_EXTENSIONS = new Set(['.mdx', '.md']);
const BOILERPLATE_OPENINGS = [
  'this page',
  'this document',
  'this section',
  'welcome to',
  'a page about',
  'an overview of'
];

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function usage() {
  console.log(
    'Usage: node tools/scripts/validators/content/check-description-quality.js [--path <repo-path>] [--strict]'
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

  return isExcludedV2ExperimentalPath(relPath);
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

function isGeneratedEntry(entry) {
  return isGeneratedDocsPageFile(entry.absPath);
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
      const entry = fileEntryFromRepoPath(repoPath);
      if (!isGeneratedEntry(entry)) {
        files.push(entry);
      }
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

    const entry = {
      absPath,
      relPath
    };
    if (!isGeneratedEntry(entry)) {
      out.push(entry);
    }
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

  const entry = { absPath: resolvedPath, relPath };
  return isGeneratedEntry(entry) ? [] : [entry];
}

function extractFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*(?:\n|$)/);
  if (!match) {
    return { exists: false, data: null };
  }

  try {
    return {
      exists: true,
      data: yaml.load(match[1]) || {}
    };
  } catch (error) {
    return {
      exists: true,
      data: null,
      error: error.message
    };
  }
}

function normalizeDescription(description) {
  return String(description || '')
    .replace(/\s+/g, ' ')
    .trim();
}

function report(collection, level, file, message) {
  collection.push({ level, file, message });
}

function clipDescription(description, length = 30) {
  if (description.length <= length) {
    return description;
  }
  return `${description.slice(0, length)}...`;
}

function formatSiblingList(files) {
  if (files.length <= 5) {
    return files.join(', ');
  }

  return `${files.slice(0, 5).join(', ')} (+${files.length - 5} more)`;
}

function analyzeDescriptions(files) {
  const findings = [];
  const descriptionsByKey = new Map();
  let checkedDescriptions = 0;
  let skippedWithoutDescription = 0;

  files.forEach((file) => {
    const content = fs.readFileSync(file.absPath, 'utf8');
    const frontmatter = extractFrontmatter(content);

    if (frontmatter.error) {
      throw new Error(`Invalid frontmatter YAML in ${file.relPath}: ${frontmatter.error}`);
    }

    const description = normalizeDescription(frontmatter?.data?.description);
    if (!description) {
      skippedWithoutDescription += 1;
      return;
    }

    checkedDescriptions += 1;

    if (description.length < 50) {
      report(
        findings,
        'warning',
        file.relPath,
        `Description too short: ${description.length} chars (min 50 recommended)`
      );
    }

    if (description.length > 160) {
      report(
        findings,
        'error',
        file.relPath,
        `Description too long: ${description.length} chars (max 160 for SEO)`
      );
    }

    const lowerDescription = description.toLowerCase();
    if (BOILERPLATE_OPENINGS.some((opening) => lowerDescription.startsWith(opening))) {
      report(
        findings,
        'warning',
        file.relPath,
        `Description starts with boilerplate: "${clipDescription(description)}"`
      );
    }

    const normalizedKey = lowerDescription;
    const group = descriptionsByKey.get(normalizedKey) || [];
    group.push({ file: file.relPath, description });
    descriptionsByKey.set(normalizedKey, group);
  });

  descriptionsByKey.forEach((group) => {
    if (group.length < 2) return;

    group.forEach((entry) => {
      const siblingFiles = group
        .filter((candidate) => candidate.file !== entry.file)
        .map((candidate) => candidate.file);

      report(
        findings,
        'error',
        entry.file,
        `Duplicate description used by ${siblingFiles.length} other page(s): ${formatSiblingList(siblingFiles)}`
      );
    });
  });

  return {
    findings,
    checkedDescriptions,
    skippedWithoutDescription
  };
}

function sortFindings(findings) {
  return [...findings].sort((left, right) => {
    const fileComparison = left.file.localeCompare(right.file);
    if (fileComparison !== 0) return fileComparison;

    if (left.level !== right.level) {
      return left.level === 'error' ? -1 : 1;
    }

    return left.message.localeCompare(right.message);
  });
}

function printFindings(findings, level, label) {
  const scoped = sortFindings(findings).filter((finding) => finding.level === level);
  if (scoped.length === 0) {
    return 0;
  }

  const stream = level === 'error' ? console.error : console.warn;
  stream(`\n${label} (${scoped.length}):\n`);
  scoped.forEach((finding) => {
    stream(`  ${finding.file} - ${finding.message}`);
  });
  return scoped.length;
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const files = options.targetPath ? loadTargetFiles(options.targetPath) : loadDefaultFiles();

  if (files.length === 0) {
    console.log('No eligible English v2 docs files found for description quality validation.');
    process.exit(0);
  }

  const result = analyzeDescriptions(files);
  const errorCount = printFindings(result.findings, 'error', 'Description Quality Errors');
  const warningCount = printFindings(result.findings, 'warning', 'Description Quality Warnings');

  const summary = [
    `files checked: ${files.length}`,
    `descriptions checked: ${result.checkedDescriptions}`,
    `skipped without description: ${result.skippedWithoutDescription}`,
    `errors: ${errorCount}`,
    `warnings: ${warningCount}`
  ].join(', ');

  if (errorCount === 0 && warningCount === 0) {
    console.log(`\nDescription quality checks passed (${summary})`);
    return;
  }

  const finalMessage = `\nDescription quality scan complete (${summary})`;
  if (errorCount > 0) {
    console.error(finalMessage);
  } else {
    console.log(finalMessage);
  }

  if (options.strict && errorCount > 0) {
    process.exit(1);
  }
}

try {
  main();
} catch (error) {
  console.error(`Description quality validator failed: ${error.message}`);
  process.exit(1);
}
