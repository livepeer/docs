#!/usr/bin/env node
/**
 * @script            check-alt-text-quality
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tools/scripts/validators/content, v2
 * @owner             docs
 * @needs             SE-2-11, E-R1
 * @purpose-statement Flags weak alt text in English v2 docs by detecting generic placeholders and single-word descriptions.
 * @pipeline          manual - diagnostic validator, run on-demand only
 * @usage             node tools/scripts/validators/content/check-alt-text-quality.js [--path <repo-path>] [--strict]
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '../../../../');
const DOCS_JSON_PATH = path.join(REPO_ROOT, 'docs.json');
const SUPPORTED_EXTENSIONS = new Set(['.md', '.mdx']);
const GENERIC_ALT_TERMS = new Set(['image', 'screenshot', 'photo', 'picture', 'fig', 'untitled']);

let parserPromise = null;

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function usage() {
  console.log('Usage: node tools/scripts/validators/content/check-alt-text-quality.js [--path <repo-path>] [--strict]');
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

async function getParser() {
  if (!parserPromise) {
    parserPromise = (async () => {
      const [{ unified }, { default: remarkParse }, { default: remarkGfm }, { default: remarkMdx }] =
        await Promise.all([import('unified'), import('remark-parse'), import('remark-gfm'), import('remark-mdx')]);
      return unified().use(remarkParse).use(remarkGfm).use(remarkMdx);
    })();
  }

  return parserPromise;
}

function normalizeAltText(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim();
}

function isSingleWordAlt(normalizedAlt) {
  if (!normalizedAlt) return false;
  return normalizedAlt.split(/\s+/).length === 1;
}

function formatAltValue(value) {
  return JSON.stringify(String(value || ''));
}

function buildFinding(file, line, rule, altText) {
  const quotedAlt = formatAltValue(altText);
  if (rule === 'generic-alt-term') {
    return {
      file,
      line,
      rule,
      message: `Alt text ${quotedAlt} is a generic placeholder. Replace it with a specific description of the image's content or purpose.`
    };
  }

  return {
    file,
    line,
    rule,
    message: `Alt text ${quotedAlt} is a single word. Replace it with a more specific description of the image's content or purpose.`
  };
}

function getStaticStringFromExpression(expressionNode) {
  if (!expressionNode || typeof expressionNode !== 'object') {
    return null;
  }

  if (expressionNode.type === 'Literal' && typeof expressionNode.value === 'string') {
    return expressionNode.value;
  }

  if (expressionNode.type === 'TemplateLiteral' && expressionNode.expressions.length === 0) {
    return expressionNode.quasis.map((quasi) => quasi.value?.cooked || '').join('');
  }

  return null;
}

function getJsxAltState(node) {
  const attributes = Array.isArray(node?.attributes) ? node.attributes : [];
  const altAttribute = attributes.find((attribute) => attribute && attribute.type === 'mdxJsxAttribute' && attribute.name === 'alt');

  if (!altAttribute) {
    return { kind: 'missing' };
  }

  if (typeof altAttribute.value === 'string') {
    return {
      kind: 'static',
      value: altAttribute.value,
      line: altAttribute.position?.start?.line || node.position?.start?.line || 1
    };
  }

  if (altAttribute.value?.type === 'mdxJsxAttributeValueExpression') {
    const expression = altAttribute.value.data?.estree?.body?.[0]?.expression;
    const staticValue = getStaticStringFromExpression(expression);

    if (typeof staticValue === 'string') {
      return {
        kind: 'static',
        value: staticValue,
        line: altAttribute.position?.start?.line || node.position?.start?.line || 1
      };
    }

    return {
      kind: 'dynamic',
      line: altAttribute.position?.start?.line || node.position?.start?.line || 1
    };
  }

  return {
    kind: 'dynamic',
    line: altAttribute.position?.start?.line || node.position?.start?.line || 1
  };
}

function inspectStaticAlt(filePath, line, rawAltText, findings) {
  const normalizedAlt = normalizeAltText(rawAltText);
  if (!normalizedAlt) {
    return;
  }

  const comparableAlt = normalizedAlt.toLowerCase();

  // Prefer the more specific generic-term rule instead of emitting duplicate findings
  // for values like "image" that also happen to be single-word descriptions.
  if (GENERIC_ALT_TERMS.has(comparableAlt)) {
    findings.push(buildFinding(filePath, line, 'generic-alt-term', normalizedAlt));
    return;
  }

  if (isSingleWordAlt(normalizedAlt)) {
    findings.push(buildFinding(filePath, line, 'single-word-alt', normalizedAlt));
  }
}

function analyzeTree(tree, relPath) {
  const findings = [];
  let inspectedCount = 0;
  let skippedDynamicCount = 0;

  const stack = [tree];

  while (stack.length > 0) {
    const node = stack.pop();
    if (!node || typeof node !== 'object') {
      continue;
    }

    if (node.type === 'image' && typeof node.alt === 'string') {
      inspectedCount += 1;
      inspectStaticAlt(relPath, node.position?.start?.line || 1, node.alt, findings);
    }

    if (
      (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') &&
      (node.name === 'img' || node.name === 'Image')
    ) {
      const altState = getJsxAltState(node);

      if (altState.kind === 'dynamic') {
        skippedDynamicCount += 1;
      } else if (altState.kind === 'static') {
        inspectedCount += 1;
        inspectStaticAlt(relPath, altState.line || 1, altState.value, findings);
      }
    }

    if (Array.isArray(node.children)) {
      for (let index = node.children.length - 1; index >= 0; index -= 1) {
        stack.push(node.children[index]);
      }
    }
  }

  return {
    findings,
    inspectedCount,
    skippedDynamicCount
  };
}

async function analyzeFile(fileEntry, parser) {
  const content = fs.readFileSync(fileEntry.absPath, 'utf8');
  let tree;

  try {
    tree = parser.parse(content);
  } catch (error) {
    return {
      findings: [],
      inspectedCount: 0,
      skippedDynamicCount: 0,
      error: `${fileEntry.relPath}: ${error.message}`
    };
  }

  return analyzeTree(tree, fileEntry.relPath);
}

function sortFindings(findings) {
  return [...findings].sort((left, right) => {
    const fileComparison = left.file.localeCompare(right.file);
    if (fileComparison !== 0) return fileComparison;

    const lineComparison = (left.line || 0) - (right.line || 0);
    if (lineComparison !== 0) return lineComparison;

    return left.rule.localeCompare(right.rule);
  });
}

async function run(options = {}) {
  const files = options.targetPath ? loadTargetFiles(options.targetPath) : loadDefaultFiles();

  if (files.length === 0) {
    console.log('No eligible English v2 docs files found for alt text quality validation.');
    return {
      filesScanned: 0,
      inspectedCount: 0,
      skippedDynamicCount: 0,
      warningCount: 0,
      errorCount: 0,
      exitCode: 0
    };
  }

  const parser = await getParser();
  const findings = [];
  const errors = [];
  let inspectedCount = 0;
  let skippedDynamicCount = 0;

  for (const fileEntry of files) {
    const result = await analyzeFile(fileEntry, parser);

    inspectedCount += result.inspectedCount;
    skippedDynamicCount += result.skippedDynamicCount;
    findings.push(...result.findings);

    if (result.error) {
      errors.push(result.error);
    }
  }

  const sortedFindings = sortFindings(findings);

  if (sortedFindings.length > 0) {
    console.warn('\nAlt Text Quality Warnings:\n');
    sortedFindings.forEach((finding) => {
      console.warn(`  ${finding.file}:${finding.line} [${finding.rule}] ${finding.message}`);
    });
  }

  if (errors.length > 0) {
    console.error('\nAlt Text Quality Errors:\n');
    errors.forEach((errorMessage) => {
      console.error(`  ${errorMessage}`);
    });
  }

  const summary = [
    `files scanned: ${files.length}`,
    `image alts inspected: ${inspectedCount}`,
    `skipped dynamic alts: ${skippedDynamicCount}`,
    `warnings: ${sortedFindings.length}`,
    `errors: ${errors.length}`
  ].join(', ');

  if (errors.length > 0) {
    console.error(`\nAlt text quality scan failed (${summary})`);
    return {
      filesScanned: files.length,
      inspectedCount,
      skippedDynamicCount,
      warningCount: sortedFindings.length,
      errorCount: errors.length,
      exitCode: 1
    };
  }

  if (sortedFindings.length === 0) {
    console.log(`\nAlt text quality checks passed (${summary})`);
    return {
      filesScanned: files.length,
      inspectedCount,
      skippedDynamicCount,
      warningCount: 0,
      errorCount: 0,
      exitCode: 0
    };
  }

  console.warn(`\nAlt text quality scan complete (${summary})`);
  return {
    filesScanned: files.length,
    inspectedCount,
    skippedDynamicCount,
    warningCount: sortedFindings.length,
    errorCount: 0,
    exitCode: options.strict ? 1 : 0
  };
}

async function main() {
  let options;

  try {
    options = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(`Alt text quality validator failed: ${error.message}`);
    usage();
    process.exit(1);
  }

  if (options.help) {
    usage();
    process.exit(0);
  }

  try {
    const result = await run(options);
    process.exit(result.exitCode);
  } catch (error) {
    console.error(`Alt text quality validator failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  GENERIC_ALT_TERMS,
  analyzeTree,
  getJsxAltState,
  loadDefaultFiles,
  parseArgs,
  run,
  shouldExclude
};
