'use strict';

const fs = require('fs');
const path = require('path');

const DOC_EXTENSIONS = new Set(['.md', '.mdx']);
const IMPORT_EXTENSIONS = new Set(['.js', '.jsx', '.ts', '.tsx', '.md', '.mdx']);
const COMPONENT_REGISTRY_PATH = path.join('docs-guide', 'config', 'component-registry.json');
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
  'node_modules',
  '_workspace',
  'x-archived',
  'archive',
  'archived',
  'deprecated',
  'DEPRECATED',
  'reports',
  'recovered-chats',
  'locale-page-archive',
  'examples'
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

const COMPONENT_SOURCE_EXTENSIONS = new Set(['.js', '.jsx', '.ts', '.tsx']);

function getImportableFiles(repoRoot) {
  const files = [];
  walkImportableFiles(repoRoot, 'snippets/components', files);
  walkImportableFiles(repoRoot, 'snippets/composables', files);
  walkImportableFiles(repoRoot, 'snippets/data', files);
  walkImportableFiles(repoRoot, 'v2', files);

  const SNIPPET_ROOT_JUNK = /^snippets\/(components|composables)\/[^/]+\.(md|mdx)$/;

  return [...new Set(files)]
    .filter((f) => {
      if (SNIPPET_ROOT_JUNK.test(f)) return false;
      if (f.startsWith('snippets/components/') && !COMPONENT_SOURCE_EXTENSIONS.has(path.extname(f).toLowerCase())) return false;
      return true;
    })
    .sort((left, right) => left.localeCompare(right));
}

function toRelativeImport(fromFileRel, targetFileRel) {
  const fromDir = path.posix.dirname(toPosix(fromFileRel));
  let relPath = path.posix.relative(fromDir, toPosix(targetFileRel));
  if (!relPath.startsWith('.')) {
    relPath = `./${relPath}`;
  }
  return relPath;
}

function resolveNamedImports(repoRoot, names) {
  const registryPath = path.join(repoRoot, COMPONENT_REGISTRY_PATH);
  if (!fs.existsSync(registryPath)) return [];

  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  } catch (_error) {
    return [];
  }

  const components = Array.isArray(parsed.components) ? parsed.components : [];
  const resolved = [];
  const nameSet = new Set(names);

  for (const component of components) {
    const name = String(component.name || '').trim();
    const file = normalizeRel(component.file || '');
    if (name && file && nameSet.has(name)) {
      resolved.push(`/${file}`);
    }
  }

  return [...new Set(resolved)];
}

function getMdxImportSuggestions(repoRoot, currentFileRel, currentValue = '', namedImports = []) {
  const value = String(currentValue || '');
  const normalizedValue = value.trim();

  const registryMatches = namedImports.length > 0
    ? resolveNamedImports(repoRoot, namedImports)
    : [];

  const importable = getImportableFiles(repoRoot);
  const snippetSuggestions = [];
  const localSuggestions = [];
  const registryMatchSet = new Set(registryMatches);

  for (const fileRel of importable) {
    if (fileRel === normalizeRel(currentFileRel)) continue;

    if (fileRel.startsWith('snippets/')) {
      const absoluteSnippetPath = `/${fileRel}`;
      if (registryMatchSet.has(absoluteSnippetPath)) continue;
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
    registryMatches,
    snippetSuggestions,
    localSuggestions
  };
}

function componentAcceptsChildren(component) {
  const accepts = String(component.accepts || '').toLowerCase();
  if (accepts.includes('children')) {
    return true;
  }

  const params = Array.isArray(component.params) ? component.params : [];
  return params.some((param) => String(param && param.name ? param.name : '').trim() === 'children');
}

function getAuthoringComponents(repoRoot) {
  const registryPath = path.join(repoRoot, COMPONENT_REGISTRY_PATH);
  if (!fs.existsSync(registryPath)) {
    return [];
  }

  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  } catch (_error) {
    return [];
  }

  const components = Array.isArray(parsed.components) ? parsed.components : [];
  const deduped = new Map();

  components.forEach((component) => {
    const name = String(component.name || '').trim();
    const file = normalizeRel(component.file || '');
    const status = String(component.status || '').trim().toLowerCase();
    const deprecated = String(component.deprecated || '').trim();
    const category = String(component.category || '').trim();

    if (!name || !file) return;
    if (category === 'config') return;
    if (status && status !== 'stable') return;
    if (deprecated) return;
    if (PROTECTED_COMPONENTS.has(name)) return;

    deduped.set(name, {
      name,
      importPath: `/${file}`,
      description: String(component.description || '').trim(),
      category,
      subniche: String(component.subniche || '').trim(),
      hasChildren: componentAcceptsChildren(component)
    });
  });

  return [...deduped.values()].sort((left, right) =>
    left.name.localeCompare(right.name, 'en', { sensitivity: 'base' })
  );
}

function getMdxComponentSuggestions(repoRoot, currentValue = '') {
  const value = String(currentValue || '').trim().toLowerCase();
  return getAuthoringComponents(repoRoot).filter((component) => {
    if (!value) return true;
    return component.name.toLowerCase().startsWith(value);
  });
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

function getFrontmatterEndIndex(content) {
  const match = String(content || '').match(/^---\n[\s\S]*?\n---\n?/);
  return match ? match[0].length : 0;
}

function parseImportLine(line) {
  const match = String(line || '').match(/^import\s+(.+?)\s+from\s+['"]([^'"]+)['"];?\s*$/);
  if (!match) {
    return null;
  }

  return {
    clause: match[1].trim(),
    importPath: match[2]
  };
}

function parseNamedBindings(clause) {
  const normalizedClause = String(clause || '').trim();
  const braceStart = normalizedClause.indexOf('{');
  const braceEnd = normalizedClause.lastIndexOf('}');

  if (braceStart === -1 || braceEnd === -1 || braceEnd < braceStart) {
    return {
      prefix: normalizedClause,
      namedEntries: []
    };
  }

  const prefix = normalizedClause
    .slice(0, braceStart)
    .trim()
    .replace(/,\s*$/, '');
  const namedEntries = normalizedClause
    .slice(braceStart + 1, braceEnd)
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);

  return {
    prefix,
    namedEntries
  };
}

function importedNameFromSpecifier(specifier) {
  return String(specifier || '')
    .split(/\s+as\s+/i)[0]
    .trim();
}

function buildImportClause(prefix, namedEntries) {
  const namedBlock = namedEntries.length > 0 ? `{ ${namedEntries.join(', ')} }` : '';
  if (prefix && namedBlock) {
    return `${prefix}, ${namedBlock}`;
  }
  return prefix || namedBlock;
}

function buildImportLine(clause, importPath) {
  return `import ${clause} from "${importPath}";`;
}

function mergeNamedImportClause(clause, importName) {
  const { prefix, namedEntries } = parseNamedBindings(clause);
  const merged = [...namedEntries];
  const existingNames = new Set(merged.map(importedNameFromSpecifier));
  if (!existingNames.has(importName)) {
    merged.push(importName);
  }

  merged.sort((left, right) =>
    importedNameFromSpecifier(left).localeCompare(importedNameFromSpecifier(right), 'en', {
      sensitivity: 'base'
    })
  );

  return buildImportClause(prefix, merged);
}

function getLineStartOffsets(content) {
  const offsets = [0];
  for (let index = 0; index < content.length; index += 1) {
    if (content[index] === '\n' && index + 1 < content.length) {
      offsets.push(index + 1);
    }
  }
  return offsets;
}

function buildInsertedImportText(content, insertionStart, importLine) {
  const nextChar = content[insertionStart] || '';
  if (!nextChar || nextChar === '\n') {
    return `${importLine}\n`;
  }
  return `${importLine}\n\n`;
}

function upsertNamedImport(content, importPath, importName) {
  const normalizedContent = String(content || '').replace(/\r\n?/g, '\n');
  const lineOffsets = getLineStartOffsets(normalizedContent);
  const frontmatterEnd = getFrontmatterEndIndex(normalizedContent);
  let lastImportEnd = frontmatterEnd;

  for (let lineIndex = 0; lineIndex < lineOffsets.length; lineIndex += 1) {
    const start = lineOffsets[lineIndex];
    const end = lineIndex + 1 < lineOffsets.length ? lineOffsets[lineIndex + 1] : normalizedContent.length;
    const line = normalizedContent.slice(start, end).replace(/\n$/, '');

    if (start < frontmatterEnd) {
      continue;
    }

    if (!line.trim()) {
      if (lastImportEnd > frontmatterEnd) {
        break;
      }
      continue;
    }

    const parsed = parseImportLine(line);
    if (!parsed) {
      if (lastImportEnd > frontmatterEnd) {
        break;
      }
      continue;
    }

    lastImportEnd = end;
    if (parsed.importPath !== importPath) {
      continue;
    }

    const existingNames = new Set(parseNamedBindings(parsed.clause).namedEntries.map(importedNameFromSpecifier));
    if (existingNames.has(importName)) {
      return null;
    }

    return {
      start,
      end,
      text: `${buildImportLine(mergeNamedImportClause(parsed.clause, importName), importPath)}\n`
    };
  }

  return {
    start: lastImportEnd,
    end: lastImportEnd,
    text: buildInsertedImportText(normalizedContent, lastImportEnd, buildImportLine(`{ ${importName} }`, importPath))
  };
}

function validateImportPathsExist(repoRoot, content, currentFileRel) {
  const normalizedContent = String(content || '').replace(/\r\n?/g, '\n');
  const lines = normalizedContent.split('\n');
  const findings = [];
  const fileDir = currentFileRel
    ? path.posix.dirname(normalizeRel(currentFileRel))
    : '';

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const line = lines[lineIndex];
    const importMatch = line.match(/^\s*import\s+.+?\s+from\s+['"]([^'"]+)['"]/);
    if (!importMatch) continue;

    const importPath = importMatch[1];
    const pathStart = line.indexOf(importMatch[1]);
    const pathEnd = pathStart + importMatch[1].length;

    let diskPath;
    if (importPath.startsWith('/')) {
      diskPath = importPath.slice(1);
    } else if (importPath.startsWith('.')) {
      diskPath = path.posix.join(fileDir, importPath);
    } else {
      continue;
    }

    const absPath = path.join(repoRoot, diskPath);
    if (!fs.existsSync(absPath)) {
      findings.push({
        line: lineIndex,
        startChar: pathStart,
        endChar: pathEnd,
        importPath,
        message: `Import path does not exist: ${importPath}`
      });
    }
  }

  return findings;
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
  getAuthoringComponents,
  getMdxComponentSuggestions,
  getMdxImportSuggestions,
  getRealDocsRoutes,
  normalizeRel,
  normalizeRoute,
  resolveNamedImports,
  resolveRouteToFile,
  upsertNamedImport,
  validateDocsJsonRoutes,
  validateImportPathsExist,
  validateSnippetImports
};
