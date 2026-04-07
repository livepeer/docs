#!/usr/bin/env node
/**
 * @script            ui-template-generator.test
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tests, operations/scripts/generators/components/library/generate-ui-templates.js, .vscode, snippets/templates, docs-guide/config/component-registry.json, .mintignore, docs.json, v1, v2, snippets
 * @owner             docs
 * @needs             E-C1, R-R14
 * @purpose-statement Validates UI template artifacts, canonical template MDX safety, and Mint parse-surface boundaries before mint dev encounters them
 * @pipeline          P1, P3
 * @usage             node operations/tests/unit/ui-template-generator.test.js [flags]
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const generator = require('../../scripts/generators/components/library/generate-ui-templates');
const { validateMdx, extractImports } = require('../utils/mdx-parser');
const { getDocsJsonRouteKeys, resolveDocsRouteToFile } = require('../utils/file-walker');
const { listMintIgnoredRepoPaths } = require('../utils/mintignore');

const REPO_ROOT = process.cwd();
const TEMPLATE_ROOT = path.join(REPO_ROOT, 'snippets', 'templates');
const CONTENT_SCAN_ROOTS = [
  'workspace',
  '.github/workspace',
  'ai-tools',
  'api',
  'docs-guide',
  'operations/tests',
  'snippets',
  'tools',
  'v2',
];
const BANNED_PARSE_SURFACE_PATTERNS = [
  { label: 'workspace', test: (repoPath) => repoPath.startsWith('workspace/') },
  { label: '.github/workspace', test: (repoPath) => repoPath.startsWith('.github/workspace/') },
  { label: 'nested _workspace', test: (repoPath) => repoPath.includes('/_workspace/') || repoPath.startsWith('_workspace/') },
  { label: 'vendored node_modules docs', test: (repoPath) => repoPath.includes('/node_modules/') || repoPath.startsWith('node_modules/') },
];
const PARSER_HOSTILE_PATTERNS = [
  {
    regex: /\{\{[A-Za-z0-9_-]+\}[A-Za-z0-9_-]*\}/g,
    message: 'Nested placeholder braces are not valid live JSX. Use inert tokens in strings/comments or a real exported variable.',
  },
];
const GLOBALS_MDX_IMPORT_PATTERN = /from\s*['"]\/snippets\/automations\/globals\/globals\.mdx['"]/g;

function readJson(repoPath) {
  return JSON.parse(fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8'));
}

function readText(repoPath) {
  return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
}

function firstMeaningfulLine(body) {
  const lines = Array.isArray(body) ? body : [body];
  return String(lines.find((line) => String(line || '').trim()) || '').trim();
}

function toPosix(filePath) {
  return String(filePath || '').split(path.sep).join('/');
}

function getRepoPath(absolutePath) {
  return toPosix(path.relative(REPO_ROOT, absolutePath));
}

function getLineNumber(content, index) {
  return content.slice(0, index).split('\n').length;
}

function walkFiles(dirPath, predicate, out = []) {
  if (!fs.existsSync(dirPath)) return out;

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  entries.forEach((entry) => {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walkFiles(fullPath, predicate, out);
      return;
    }

    if (entry.isFile() && predicate(fullPath)) {
      out.push(fullPath);
    }
  });

  return out;
}

function resolveImportPath(importPath, sourceRepoPath) {
  if (!importPath || /^https?:\/\//.test(importPath)) return null;

  let baseAbsolute;
  if (importPath.startsWith('/')) {
    baseAbsolute = path.join(REPO_ROOT, importPath.replace(/^\/+/, ''));
  } else if (importPath.startsWith('.')) {
    baseAbsolute = path.resolve(path.dirname(path.join(REPO_ROOT, sourceRepoPath)), importPath);
  } else {
    return null;
  }

  const candidates = [
    baseAbsolute,
    `${baseAbsolute}.mdx`,
    `${baseAbsolute}.md`,
    `${baseAbsolute}.jsx`,
    `${baseAbsolute}.js`,
    path.join(baseAbsolute, 'index.mdx'),
    path.join(baseAbsolute, 'index.md'),
    path.join(baseAbsolute, 'index.jsx'),
    path.join(baseAbsolute, 'index.js'),
  ];

  return candidates.find((candidate) => fs.existsSync(candidate)) || null;
}

function getTemplateFiles() {
  return walkFiles(TEMPLATE_ROOT, (filePath) => filePath.endsWith('.mdx') || filePath.endsWith('.md'))
    .map(getRepoPath)
    .sort((left, right) => left.localeCompare(right));
}

function isCanonicalMintFacingRepoPath(repoPath) {
  return (
    (repoPath.startsWith('v2/') || repoPath.startsWith('snippets/')) &&
    /\.(md|mdx)$/i.test(repoPath) &&
    !repoPath.startsWith('workspace/') &&
    !repoPath.startsWith('.github/workspace/') &&
    !repoPath.includes('/_workspace/') &&
    !repoPath.includes('/node_modules/')
  );
}

function getCanonicalMintFacingFiles() {
  return ['v2', 'snippets']
    .flatMap((root) => walkFiles(path.join(REPO_ROOT, root), (filePath) => /\.(md|mdx)$/i.test(filePath)))
    .map(getRepoPath)
    .filter(isCanonicalMintFacingRepoPath)
    .sort((left, right) => left.localeCompare(right));
}

function collectBannedMarkdownFiles() {
  const results = [];

  CONTENT_SCAN_ROOTS.forEach((root) => {
    const absoluteRoot = path.join(REPO_ROOT, root);
    walkFiles(absoluteRoot, (filePath) => /\.(md|mdx)$/i.test(filePath), results);
  });

  return [...new Set(results.map(getRepoPath))]
    .filter((repoPath) => BANNED_PARSE_SURFACE_PATTERNS.some((pattern) => pattern.test(repoPath)))
    .sort((left, right) => left.localeCompare(right));
}

function validateTemplateMdxContracts(errors) {
  const templateFiles = getTemplateFiles();

  templateFiles.forEach((repoPath) => {
    const content = readText(repoPath);
    const mdxResult = validateMdx(content, repoPath);
    mdxResult.errors.forEach((error) => {
      errors.push({
        file: repoPath,
        rule: 'Template MDX safety',
        message: error.message || error,
        line: error.line || 1,
      });
    });

    PARSER_HOSTILE_PATTERNS.forEach(({ regex, message }) => {
      let match;
      while ((match = regex.exec(content)) !== null) {
        errors.push({
          file: repoPath,
          rule: 'Template placeholder contract',
          message,
          line: getLineNumber(content, match.index),
        });
      }
      regex.lastIndex = 0;
    });

    extractImports(content).forEach((imp) => {
      if (!imp.path.startsWith('/') && !imp.path.startsWith('.')) return;
      if (resolveImportPath(imp.path, repoPath)) return;

      errors.push({
        file: repoPath,
        rule: 'Template import resolution',
        message: `Import does not resolve from template source: ${imp.path}`,
        line: imp.line || 1,
      });
    });
  });

  return { totalTemplateFiles: templateFiles.length };
}

function validateDocsJsonRoutes(errors) {
  const routeKeys = [...getDocsJsonRouteKeys(REPO_ROOT)].sort((left, right) => left.localeCompare(right));

  routeKeys.forEach((routeKey) => {
    if (resolveDocsRouteToFile(routeKey, REPO_ROOT)) return;

    errors.push({
      file: 'docs.json',
      rule: 'Mint route resolution',
      message: `docs.json route does not resolve to a file: ${routeKey}`,
      line: 1,
    });
  });

  return { totalRoutes: routeKeys.length };
}

function validateBannedParseSurface(errors) {
  const bannedFiles = collectBannedMarkdownFiles();
  const ignored = listMintIgnoredRepoPaths(bannedFiles, { rootDir: REPO_ROOT });

  bannedFiles.forEach((repoPath) => {
    if (ignored.has(repoPath)) return;

    const matchedPattern = BANNED_PARSE_SURFACE_PATTERNS.find((pattern) => pattern.test(repoPath));
    errors.push({
      file: repoPath,
      rule: 'Mint parse-surface boundary',
      message: `Markdown in banned Mint surface (${matchedPattern?.label || 'unknown'}) must be covered by .mintignore.`,
      line: 1,
    });
  });

  return { totalBannedFiles: bannedFiles.length };
}

function validateCanonicalImportContracts(errors) {
  const routeFileSet = new Set(
    [...getDocsJsonRouteKeys(REPO_ROOT)]
      .map((routeKey) => resolveDocsRouteToFile(routeKey, REPO_ROOT))
      .filter(Boolean)
      .map(getRepoPath)
  );
  const canonicalFiles = getCanonicalMintFacingFiles();

  canonicalFiles.forEach((repoPath) => {
    const content = readText(repoPath);
    const imports = extractImports(content);

    let globalsMatch;
    while ((globalsMatch = GLOBALS_MDX_IMPORT_PATTERN.exec(content)) !== null) {
      errors.push({
        file: repoPath,
        rule: 'Mint globals import contract',
        message: 'Import latestVersion data from /snippets/data/globals/latestRelease.jsx. globals.mdx must stay a thin wrapper, not the canonical import path.',
        line: getLineNumber(content, globalsMatch.index),
      });
    }
    GLOBALS_MDX_IMPORT_PATTERN.lastIndex = 0;

    imports.forEach((imp) => {
      const resolvedImport = resolveImportPath(imp.path, repoPath);
      if (!resolvedImport) return;

      const importedRepoPath = getRepoPath(resolvedImport);
      if (!routeFileSet.has(importedRepoPath)) return;

      errors.push({
        file: repoPath,
        rule: 'Routed MDX composition contract',
        message: `Do not import routed docs page content directly (${imp.path}). Extract reusable content to snippets/composables and keep routed pages as wrappers.`,
        line: imp.line || 1,
      });
    });
  });

  return { totalCanonicalFiles: canonicalFiles.length };
}

function runTests() {
  const errors = [];

  try {
    const pageTemplates = generator.collectTemplates(generator.PAGE_TEMPLATE_ROOT, 'page');
    const blockTemplates = generator.collectTemplates(generator.BLOCK_TEMPLATE_ROOT, 'block');
    const registry = readJson(generator.COMPONENT_REGISTRY_PATH);

    const expectedTemplateSnippets = generator.buildTemplateSnippetsObject(pageTemplates, blockTemplates);
    const expectedComponentSnippets = generator.buildComponentSnippetsObject(registry);
    const parsedTemplateFile = readJson(generator.TEMPLATE_SNIPPETS_PATH);
    const parsedComponentFile = readJson(generator.COMPONENT_SNIPPETS_PATH);

    assert.deepStrictEqual(parsedTemplateFile, expectedTemplateSnippets, 'Generated template snippets file drifted from generator output.');
    assert.deepStrictEqual(parsedComponentFile, expectedComponentSnippets, 'Generated component snippets file drifted from generator output.');

    Object.entries(parsedComponentFile).forEach(([name, snippet]) => {
      const firstLine = firstMeaningfulLine(snippet.body);
      assert.ok(firstLine, `Component snippet has no body: ${name}`);
      assert.ok(!firstLine.startsWith('<'), `Component snippet body must not start with "<": ${name}`);
    });

    assert.ok(parsedComponentFile.PreviewCallout, 'Expected PreviewCallout snippet from component registry.');
    assert.ok(
      firstMeaningfulLine(parsedComponentFile.PreviewCallout.body).startsWith('PreviewCallout'),
      'PreviewCallout snippet should be derived deterministically from the registry example.'
    );

    const templateContractResult = validateTemplateMdxContracts(errors);
    const docsRouteResult = validateDocsJsonRoutes(errors);
    const parseSurfaceResult = validateBannedParseSurface(errors);
    const canonicalImportContractResult = validateCanonicalImportContracts(errors);

    return {
      passed: errors.length === 0,
      errors,
      warnings: [],
      totalTemplateSnippets: Object.keys(parsedTemplateFile).length,
      totalComponentSnippets: Object.keys(parsedComponentFile).length,
      totalTemplateFiles: templateContractResult.totalTemplateFiles,
      totalRoutes: docsRouteResult.totalRoutes,
      totalBannedFiles: parseSurfaceResult.totalBannedFiles,
      totalCanonicalFiles: canonicalImportContractResult.totalCanonicalFiles,
    };
  } catch (error) {
    errors.push({
      file: 'operations/tests/unit/ui-template-generator.test.js',
      rule: 'UI template and Mint parse surface',
      message: error.message,
    });

    return {
      passed: false,
      errors,
      warnings: [],
      totalTemplateSnippets: 0,
      totalComponentSnippets: 0,
      totalTemplateFiles: 0,
      totalRoutes: 0,
      totalBannedFiles: 0,
    };
  }
}

if (require.main === module) {
  const result = runTests();
  if (result.passed) {
    console.log(
      `✅ UI template and Mint parse-surface test passed (${result.totalTemplateSnippets} template snippets, ${result.totalComponentSnippets} component snippets, ${result.totalTemplateFiles} canonical templates, ${result.totalRoutes} docs routes, ${result.totalBannedFiles} banned-surface markdown files checked)`
    );
    process.exit(0);
  }

  console.error(`❌ UI template generator test failed: ${result.errors[0]?.message || 'unknown error'}`);
  process.exit(1);
}

module.exports = { runTests };
