'use strict';

const fs = require('fs');
const path = require('path');

const DOC_EXTENSIONS = new Set(['.md', '.mdx']);
const IMPORT_EXTENSIONS = new Set(['.js', '.jsx', '.ts', '.tsx', '.md', '.mdx']);
const PROTECTED_COMPONENTS = new Set([
  'Accordion',
  'AccordionGroup',
  'Card',
  'CardGroup',
  'Check',
  'Columns',
  'Note',
  'Steps',
  'Step',
  'Tab',
  'Tabs',
  'Tip',
  'Warning'
]);
const IGNORED_DIRS = new Set([
  '.git',
  '.next',
  '.venv',
  '__pycache__',
  'node_modules'
]);

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function normalizeRel(relPath) {
  return toPosix(relPath).replace(/^\.?\//, '').replace(/^\/+/, '');
}

function normalizeRoute(route) {
  let normalized = normalizeRel(route).trim();
  normalized = normalized.replace(/\.(md|mdx)$/i, '');
  normalized = normalized.replace(/\/index$/i, '');
  normalized = normalized.replace(/\/+$/, '');
  return normalized;
}

function isIgnoredDir(name) {
  return IGNORED_DIRS.has(name);
}

function collectPageStrings(node, out = []) {
  if (typeof node === 'string') {
    out.push(node);
    return out;
  }

  if (Array.isArray(node)) {
    node.forEach((item) => collectPageStrings(item, out));
    return out;
  }

  if (!node || typeof node !== 'object') {
    return out;
  }

  if (Array.isArray(node.pages)) {
    node.pages.forEach((item) => collectPageStrings(item, out));
    Object.entries(node).forEach(([key, value]) => {
      if (key === 'pages') return;
      collectPageStrings(value, out);
    });
    return out;
  }

  Object.values(node).forEach((value) => collectPageStrings(value, out));
  return out;
}

function resolveRouteToFile(repoRoot, route) {
  const normalized = normalizeRoute(route);
  if (!normalized) return null;

  const candidates = [
    `${normalized}.mdx`,
    `${normalized}.md`,
    `${normalized}/index.mdx`,
    `${normalized}/index.md`,
    `${normalized}/README.mdx`,
    `${normalized}/README.md`
  ];

  for (const candidate of candidates) {
    const absPath = path.join(repoRoot, candidate);
    if (fs.existsSync(absPath) && fs.statSync(absPath).isFile()) {
      return normalizeRel(candidate);
    }
  }

  return null;
}

function collectScopedNavigationRoutes(repoRoot) {
  const scopedDir = path.join(repoRoot, 'tools', 'config', 'scoped-navigation');
  const routes = [];

  if (!fs.existsSync(scopedDir)) {
    return routes;
  }

  for (const entry of fs.readdirSync(scopedDir)) {
    const absPath = path.join(scopedDir, entry);
    if (!fs.statSync(absPath).isFile()) continue;

    if (entry.endsWith('.json')) {
      try {
        const parsed = JSON.parse(fs.readFileSync(absPath, 'utf8'));
        collectPageStrings(parsed, routes);
      } catch (_error) {
        // Ignore malformed files here; validation handles correctness separately.
      }
      continue;
    }

    if (entry.endsWith('.jsx')) {
      const content = fs.readFileSync(absPath, 'utf8');
      const matches = content.match(/['"`](v2\/[^'"`\n]+?)['"`]/g) || [];
      matches.forEach((match) => {
        routes.push(match.slice(1, -1));
      });
    }
  }

  return routes;
}

function getRealDocsRoutes(repoRoot) {
  const routeSet = new Set();
  const docsJsonPath = path.join(repoRoot, 'docs.json');

  if (fs.existsSync(docsJsonPath)) {
    try {
      const docsJson = JSON.parse(fs.readFileSync(docsJsonPath, 'utf8'));
      collectPageStrings(docsJson, []).forEach((value) => routeSet.add(value));
    } catch (_error) {
      // Ignore parse errors here; validation covers it.
    }
  }

  collectScopedNavigationRoutes(repoRoot).forEach((value) => routeSet.add(value));

  const resolved = [];
  const seen = new Set();
  for (const rawValue of routeSet) {
    const route = normalizeRoute(rawValue);
    if (!route || route === ' ' || !route.startsWith('v2/')) continue;
    if (seen.has(route)) continue;
    if (!resolveRouteToFile(repoRoot, route)) continue;
    seen.add(route);
    resolved.push(route);
  }

  return resolved.sort((left, right) => left.localeCompare(right));
}

function walkImportableFiles(repoRoot, dirRel, out = []) {
  const dirAbs = path.join(repoRoot, dirRel);
  if (!fs.existsSync(dirAbs)) return out;

  for (const entry of fs.readdirSync(dirAbs, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (isIgnoredDir(entry.name)) continue;
      walkImportableFiles(repoRoot, path.join(dirRel, entry.name), out);
      continue;
    }

    const relPath = normalizeRel(path.join(dirRel, entry.name));
    if (!IMPORT_EXTENSIONS.has(path.extname(relPath).toLowerCase())) continue;
    out.push(relPath);
  }

  return out;
}

function getImportableFiles(repoRoot) {
  const roots = ['snippets', 'v2', 'docs-guide', 'contribute'];
  const files = [];
  roots.forEach((rootRel) => walkImportableFiles(repoRoot, rootRel, files));
  return [...new Set(files)].sort((left, right) => left.localeCompare(right));
}

function toRelativeImport(fromFileRel, targetFileRel) {
  const fromDir = path.posix.dirname(toPosix(fromFileRel));
  let relPath = path.posix.relative(fromDir, toPosix(targetFileRel));
  if (!relPath.startsWith('.')) {
    relPath = `./${relPath}`;
  }
  return relPath;
}

function getMdxImportSuggestions(repoRoot, currentFileRel, currentValue = '') {
  const value = String(currentValue || '');
  const normalizedValue = value.trim();
  const importable = getImportableFiles(repoRoot);
  const snippetSuggestions = [];
  const localSuggestions = [];

  for (const fileRel of importable) {
    if (fileRel === normalizeRel(currentFileRel)) continue;

    if (fileRel.startsWith('snippets/')) {
      const absoluteSnippetPath = `/${fileRel}`;
      if (!normalizedValue || absoluteSnippetPath.startsWith(normalizedValue) || normalizedValue.startsWith('/snippets')) {
        snippetSuggestions.push(absoluteSnippetPath);
      }
      continue;
    }

    const relativePath = toRelativeImport(currentFileRel, fileRel);
    if (!normalizedValue || relativePath.startsWith(normalizedValue)) {
      localSuggestions.push(relativePath);
    }
  }

  return {
    snippetSuggestions,
    localSuggestions
  };
}

function extractImportStatements(content) {
  const importRegex = /^import\s+(?:(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)(?:\s*,\s*(?:\{[^}]*\}|\*\s+as\s+\w+|\w+))*\s+from\s+)?['"]([^'"]+)['"];?/gm;
  const imports = [];
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    imports.push({
      value: match[1],
      index: match.index
    });
  }

  return imports;
}

function validateSnippetImports(content, filePath) {
  const findings = [];

  extractImportStatements(content).forEach((entry) => {
    const importValue = String(entry.value || '');
    if (!/snippets\//.test(importValue)) return;

    if (!importValue.startsWith('/snippets/')) {
      findings.push({
        file: filePath,
        rule: 'snippet-import-path',
        message: 'Snippet imports must use absolute root paths beginning with /snippets/.',
        importValue
      });
    }
  });

  return findings;
}

function validateDocsJsonRoutes(repoRoot, docsJsonContent) {
  const findings = [];
  let parsed;

  try {
    parsed = JSON.parse(docsJsonContent);
  } catch (error) {
    return [
      {
        file: 'docs.json',
        rule: 'docs-json-parse',
        message: error.message
      }
    ];
  }

  const rawRoutes = collectPageStrings(parsed, []);
  rawRoutes.forEach((rawRoute) => {
    const route = normalizeRoute(rawRoute);
    if (!route || route === ' ' || !route.startsWith('v2/')) return;
    if (!resolveRouteToFile(repoRoot, route)) {
      findings.push({
        file: 'docs.json',
        rule: 'docs-json-route',
        message: `Route does not resolve to a real repo page: ${route}`
      });
    }
  });

  return findings;
}

function isFenceLine(line) {
  return /^(\s*)(```|~~~)/.test(line);
}

function isStandaloneOpenTag(line) {
  const match = line.match(/^(\s*)<([A-Z][A-Za-z0-9]*)\b[^>]*>\s*$/);
  if (!match) return null;
  if (/\/>\s*$/.test(line)) return null;
  return {
    indent: match[1],
    name: match[2]
  };
}

function isStandaloneCloseTag(line) {
  const match = line.match(/^(\s*)<\/([A-Z][A-Za-z0-9]*)>\s*$/);
  if (!match) return null;
  return {
    indent: match[1],
    name: match[2]
  };
}

function formatMdxContent(content) {
  const original = String(content || '').replace(/\r\n?/g, '\n');
  const lines = original.split('\n');
  const formatted = [];
  const stack = [];
  let inFence = false;
  let fenceToken = '';

  for (const rawLine of lines) {
    let line = rawLine.replace(/[ \t]+$/g, '');

    const fenceMatch = line.match(/^(\s*)(```|~~~)/);
    if (fenceMatch) {
      if (!inFence) {
        inFence = true;
        fenceToken = fenceMatch[2];
      } else if (fenceMatch[2] === fenceToken) {
        inFence = false;
        fenceToken = '';
      }
      formatted.push(line);
      continue;
    }

    if (inFence) {
      formatted.push(line);
      continue;
    }

    const openTag = isStandaloneOpenTag(line);
    if (openTag && PROTECTED_COMPONENTS.has(openTag.name)) {
      stack.push(openTag);
      formatted.push(line);
      continue;
    }

    const closeTag = isStandaloneCloseTag(line);
    if (closeTag && PROTECTED_COMPONENTS.has(closeTag.name)) {
      const top = stack[stack.length - 1];
      if (top && top.name === closeTag.name) {
        line = `${top.indent}</${closeTag.name}>`;
        stack.pop();
      } else {
        const matchingIndex = stack.map((entry) => entry.name).lastIndexOf(closeTag.name);
        if (matchingIndex !== -1) {
          const matching = stack[matchingIndex];
          line = `${matching.indent}</${closeTag.name}>`;
          stack.splice(matchingIndex, stack.length - matchingIndex);
        }
      }
    }

    formatted.push(line);
  }

  let result = formatted.join('\n');
  result = result.replace(/\n{3,}/g, '\n\n');
  if (!result.endsWith('\n')) {
    result += '\n';
  }
  return result;
}

module.exports = {
  formatMdxContent,
  getMdxImportSuggestions,
  getRealDocsRoutes,
  normalizeRel,
  normalizeRoute,
  resolveRouteToFile,
  validateDocsJsonRoutes,
  validateSnippetImports
};
