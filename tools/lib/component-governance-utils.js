/**
 * @script           component-governance-utils
 * @category         utility
 * @purpose          governance:repo-health
 * @scope            single-domain
 * @owner            docs
 * @needs            R-R10
 * @purpose-statement Shared parsing and validation utilities for component governance scripts.
 * @pipeline         indirect — library module
 * @usage            const utils = require('../lib/component-governance-utils');
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const VALID_CATEGORIES = ['primitives', 'layout', 'content', 'data', 'page-structure'];
const VALID_STATUSES = ['stable', 'experimental', 'deprecated', 'broken', 'placeholder'];
const VALID_TIERS = ['primitive', 'composite', 'pattern'];
const VALID_RISKS = ['low', 'medium', 'high'];
const VALID_DECISIONS = ['KEEP', 'MOVE', 'SPLIT', 'MERGE', 'REMOVE'];
const VALID_CONTENT_AFFINITY = [
  'landing',
  'overview',
  'tutorial',
  'how_to',
  'concept',
  'reference',
  'faq',
  'troubleshooting',
  'changelog',
  'glossary',
  'universal'
];
const GOVERNANCE_FIELDS = [
  'component',
  'category',
  'tier',
  'status',
  'description',
  'contentAffinity',
  'owner',
  'dependencies',
  'usedIn',
  'breakingChangeRisk',
  'decision',
  'dataSource',
  'duplicates',
  'lastMeaningfulChange'
];
const COMPONENT_IMPORT_RE = /import\s*\{([\s\S]*?)\}\s*from\s*['"]([^'"]+)['"]/g;
const COLOR_LITERAL_RE = /#[0-9a-fA-F]{3,8}\b|\brgba?\([^)]*\)|\bhsla?\([^)]*\)/g;
const COLOR_CONTEXT_RE = /\b(?:accentcolor|background(?:color)?|border(?:color)?|caretcolor|color|fill|floodcolor|icon|lightingcolor|outlinecolor|stopcolor|stroke|textdecorationcolor)\b/;

function getRepoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' });
  if (result.status === 0 && String(result.stdout || '').trim()) {
    return String(result.stdout || '').trim();
  }
  return process.cwd();
}

const REPO_ROOT = getRepoRoot();

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function compactWhitespace(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function lineNumberAt(content, index) {
  return String(content || '').slice(0, Math.max(0, index)).split('\n').length;
}

function normalizeRepoPath(inputPath) {
  const raw = String(inputPath || '').trim();
  const absolute = path.isAbsolute(raw) ? path.resolve(raw) : path.resolve(REPO_ROOT, raw);
  return toPosix(path.relative(REPO_ROOT, absolute));
}

function isArchivePath(filePath) {
  return toPosix(filePath).split('/').includes('_archive');
}

function getCategoryFromPath(filePath) {
  const parts = toPosix(filePath).split('/');
  const index = parts.findIndex((part) => part === 'components');
  if (index === -1) return '';
  const candidate = parts[index + 1] || '';
  return VALID_CATEGORIES.includes(candidate) ? candidate : '';
}

function walkFiles(targetPath, predicate, files = []) {
  if (!fs.existsSync(targetPath)) return files;
  const stat = fs.statSync(targetPath);
  if (stat.isFile()) {
    if (predicate(targetPath)) files.push(targetPath);
    return files;
  }

  const entries = fs.readdirSync(targetPath, { withFileTypes: true });
  entries.forEach((entry) => {
    if (entry.name === '.git' || entry.name === 'node_modules') return;
    walkFiles(path.join(targetPath, entry.name), predicate, files);
  });
  return files;
}

function getComponentFiles(baseDir = 'snippets/components') {
  const absoluteBase = path.isAbsolute(baseDir) ? baseDir : path.join(REPO_ROOT, baseDir);
  return walkFiles(
    absoluteBase,
    (absolutePath) =>
      absolutePath.endsWith('.jsx') &&
      !isArchivePath(absolutePath) &&
      VALID_CATEGORIES.includes(getCategoryFromPath(absolutePath))
  )
    .map((absolutePath) => ({
      absolutePath,
      displayPath: normalizeRepoPath(absolutePath)
    }))
    .sort((a, b) => a.displayPath.localeCompare(b.displayPath, 'en', { sensitivity: 'base' }));
}

function stripComments(value) {
  return String(value || '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '')
    .trim();
}

function splitTopLevel(input, separator = ',') {
  const parts = [];
  let current = '';
  let depthParen = 0;
  let depthBrace = 0;
  let depthBracket = 0;
  let quote = null;
  let escaped = false;

  for (let index = 0; index < input.length; index += 1) {
    const char = input[index];

    if (quote) {
      current += char;
      if (!escaped && char === '\\') {
        escaped = true;
      } else if (!escaped && char === quote) {
        quote = null;
      } else {
        escaped = false;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      current += char;
      continue;
    }

    if (char === '(') depthParen += 1;
    else if (char === ')') depthParen = Math.max(0, depthParen - 1);
    else if (char === '{') depthBrace += 1;
    else if (char === '}') depthBrace = Math.max(0, depthBrace - 1);
    else if (char === '[') depthBracket += 1;
    else if (char === ']') depthBracket = Math.max(0, depthBracket - 1);

    if (
      char === separator &&
      depthParen === 0 &&
      depthBrace === 0 &&
      depthBracket === 0
    ) {
      parts.push(current.trim());
      current = '';
      continue;
    }

    current += char;
  }

  if (current.trim()) {
    parts.push(current.trim());
  }

  return parts;
}

function splitTopLevelOnce(input, separator) {
  const parts = splitTopLevel(input, separator);
  if (parts.length <= 1) return [input.trim(), ''];
  const first = parts.shift();
  return [first, parts.join(separator).trim()];
}

function findMatchingBracket(input, startIndex, openChar, closeChar) {
  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let index = startIndex; index < input.length; index += 1) {
    const char = input[index];

    if (quote) {
      if (!escaped && char === '\\') {
        escaped = true;
      } else if (!escaped && char === quote) {
        quote = null;
      } else {
        escaped = false;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === '`') {
      quote = char;
      continue;
    }

    if (char === openChar) depth += 1;
    if (char === closeChar) {
      depth -= 1;
      if (depth === 0) return index;
    }
  }

  return -1;
}

function scanDeclarations(content) {
  const scanSource = maskComments(content);
  const declarations = new Map();
  const functionRe = /\bfunction\s+([A-Z][A-Za-z0-9_]*)\s*\(/g;
  const constRe = /\bconst\s+([A-Z][A-Za-z0-9_]*)\s*=\s*/g;

  let match = functionRe.exec(scanSource);
  while (match) {
    const name = match[1];
    const index = match.index;
    const paramsStart = scanSource.indexOf('(', functionRe.lastIndex - 1);
    const paramsEnd = findMatchingBracket(scanSource, paramsStart, '(', ')');
    declarations.set(name, {
      name,
      index,
      line: lineNumberAt(content, index),
      paramsText: paramsStart >= 0 && paramsEnd > paramsStart ? content.slice(paramsStart + 1, paramsEnd) : ''
    });
    match = functionRe.exec(scanSource);
  }

  match = constRe.exec(scanSource);
  while (match) {
    const name = match[1];
    const index = match.index;
    let cursor = constRe.lastIndex;
    while (/\s/.test(scanSource[cursor] || '')) cursor += 1;
    if (scanSource.slice(cursor, cursor + 5) === 'async') {
      cursor += 5;
      while (/\s/.test(scanSource[cursor] || '')) cursor += 1;
    }

    let paramsText = '';
    if (scanSource[cursor] === '(') {
      const paramsEnd = findMatchingBracket(scanSource, cursor, '(', ')');
      const afterParams = scanSource.slice(paramsEnd + 1).trimStart();
      if (paramsEnd > cursor && afterParams.startsWith('=>')) {
        paramsText = content.slice(cursor + 1, paramsEnd);
      }
    } else {
      const singleParamMatch = scanSource.slice(cursor).match(/^([A-Za-z_$][A-Za-z0-9_$]*)\s*=>/);
      if (singleParamMatch) {
        paramsText = singleParamMatch[1];
      }
    }

    declarations.set(name, {
      name,
      index,
      line: lineNumberAt(content, index),
      paramsText
    });
    match = constRe.exec(scanSource);
  }

  return declarations;
}

function scanExports(content) {
  const scanSource = maskComments(content);
  const exportsList = [];
  const exportFunctionRe = /export\s+(?:default\s+)?function\s+([A-Z][A-Za-z0-9_]*)\s*\(/g;
  const exportConstRe = /export\s+(?:default\s+)?const\s+([A-Z][A-Za-z0-9_]*)\s*=/g;
  let match = exportFunctionRe.exec(scanSource);

  while (match) {
    exportsList.push({
      exportedName: match[1],
      localName: match[1],
      index: match.index,
      line: lineNumberAt(content, match.index)
    });
    match = exportFunctionRe.exec(scanSource);
  }

  match = exportConstRe.exec(scanSource);
  while (match) {
    exportsList.push({
      exportedName: match[1],
      localName: match[1],
      index: match.index,
      line: lineNumberAt(content, match.index)
    });
    match = exportConstRe.exec(scanSource);
  }

  const namedExportRe = /export\s*\{([\s\S]*?)\};?/g;
  match = namedExportRe.exec(scanSource);
  while (match) {
    splitTopLevel(match[1]).forEach((entry) => {
      const [localName, exportedName] = splitTopLevelOnce(entry.replace(/\s+as\s+/i, ':'), ':');
      const local = String(localName || '').trim();
      const exported = String(exportedName || '').trim() || local;
      if (!local) return;
      exportsList.push({
        exportedName: exported,
        localName: local,
        index: match.index,
        line: lineNumberAt(content, match.index)
      });
    });
    match = namedExportRe.exec(scanSource);
  }

  const deduped = [];
  const seen = new Set();
  exportsList.forEach((entry) => {
    const key = `${entry.exportedName}:${entry.localName}:${entry.index}`;
    if (seen.has(key)) return;
    seen.add(key);
    deduped.push(entry);
  });

  return deduped;
}

function getImmediateJsdoc(content, declarationIndex) {
  const prior = content.slice(0, declarationIndex);
  const endIndex = prior.lastIndexOf('*/');
  if (endIndex === -1) return null;
  const startIndex = prior.lastIndexOf('/**', endIndex);
  if (startIndex === -1) return null;

  const between = compactWhitespace(prior.slice(endIndex + 2));
  if (between && !/^export(?:\s+default)?$/.test(between)) return null;

  return {
    text: prior.slice(startIndex, endIndex + 2),
    start: startIndex,
    end: endIndex + 2,
    line: lineNumberAt(content, startIndex)
  };
}

function normalizeDocPropName(token) {
  let normalized = String(token || '').trim();
  if (!normalized) return '';

  normalized = normalized.replace(/^\[|\]$/g, '');
  const equalsIndex = normalized.indexOf('=');
  if (equalsIndex >= 0) {
    normalized = normalized.slice(0, equalsIndex).trim();
  }
  normalized = normalized.replace(/^\.\.\./, '').trim();
  return normalized;
}

function inferTypeFromDefaultValue(value) {
  const trimmed = String(value || '').trim();
  if (!trimmed) return 'any';
  if (/^(true|false)$/.test(trimmed)) return 'boolean';
  if (/^['"`].*['"`]$/.test(trimmed)) return 'string';
  if (/^[0-9]+(?:\.[0-9]+)?$/.test(trimmed)) return 'number';
  if (/^\[/.test(trimmed)) return 'Array';
  if (/^\{/.test(trimmed)) return 'object';
  return 'any';
}

function extractPropsFromParams(paramsText) {
  const cleaned = stripComments(paramsText);
  if (!cleaned) {
    return { status: 'ok', props: [] };
  }

  if (!cleaned.trim().startsWith('{')) {
    return { status: 'skipped', reason: 'params are not a destructured props object', props: [] };
  }

  const objectStart = cleaned.indexOf('{');
  const objectEnd = findMatchingBracket(cleaned, objectStart, '{', '}');
  if (objectEnd === -1) {
    return { status: 'skipped', reason: 'unable to match destructured props braces', props: [] };
  }

  const body = cleaned.slice(objectStart + 1, objectEnd);
  const props = splitTopLevel(body)
    .map((entry) => entry.trim())
    .filter(Boolean)
    .filter((entry) => entry !== '...rest')
    .map((entry) => {
      const nameToken = entry.split(':')[0].trim();
      const normalizedName = normalizeDocPropName(nameToken);
      const defaultMatch = entry.match(/=(.*)$/);
      const defaultValue = defaultMatch ? defaultMatch[1].trim() : '';
      return {
        name: normalizedName,
        required: !defaultValue && !/^\[/.test(nameToken),
        defaultValue,
        type: inferTypeFromDefaultValue(defaultValue)
      };
    })
    .filter((prop) => Boolean(prop.name));

  return { status: 'ok', props };
}

function parseParamTag(value) {
  const match = String(value || '').trim().match(/^\{([^}]+)\}\s+(\[[^\]]+\]|[^\s]+)\s*-?\s*(.*)$/);
  if (!match) {
    return {
      raw: String(value || '').trim(),
      type: 'any',
      name: '',
      required: true,
      defaultValue: '',
      description: ''
    };
  }

  const rawName = match[2];
  const normalizedName = normalizeDocPropName(rawName);
  const defaultMatch = rawName.match(/\[.*=(.*)\]/);

  return {
    raw: String(value || '').trim(),
    type: compactWhitespace(match[1]),
    name: normalizedName,
    required: !rawName.startsWith('['),
    defaultValue: defaultMatch ? defaultMatch[1].trim() : '',
    description: compactWhitespace(match[3])
  };
}

function parseJSDocBlock(sourceText) {
  const block = String(sourceText || '').trim();
  if (!block.startsWith('/**')) {
    return {
      raw: block,
      tags: {},
      params: [],
      examples: [],
      deprecated: '',
      see: ''
    };
  }

  const lines = block
    .replace(/^\/\*\*/, '')
    .replace(/\*\/$/, '')
    .split('\n')
    .map((line) => line.replace(/^\s*\*\s?/, ''));

  const tags = {};
  const params = [];
  const examples = [];
  let summary = '';
  let currentTag = '';

  const appendToTag = (tag, value) => {
    const nextValue = compactWhitespace(value);
    if (!nextValue) return;
    if (tag === 'param') {
      params.push(parseParamTag(nextValue));
      return;
    }
    if (tag === 'example') {
      examples.push(value.trimEnd());
      return;
    }
    tags[tag] = tags[tag] ? `${tags[tag]}\n${value}`.trim() : value.trim();
  };

  lines.forEach((line) => {
    if (!line.trim()) {
      if (currentTag === 'example' && examples.length > 0) {
        examples[examples.length - 1] = `${examples[examples.length - 1]}\n`;
      }
      return;
    }

    const tagMatch = line.match(/^@([A-Za-z][A-Za-z0-9_-]*)\s*(.*)$/);
    if (tagMatch) {
      currentTag = tagMatch[1];
      appendToTag(currentTag, tagMatch[2]);
      return;
    }

    if (!currentTag) {
      summary = summary ? `${summary} ${compactWhitespace(line)}` : compactWhitespace(line);
      return;
    }

    if (currentTag === 'example') {
      if (!examples.length) {
        examples.push(line);
      } else {
        examples[examples.length - 1] = `${examples[examples.length - 1]}\n${line}`.trimEnd();
      }
      return;
    }

    appendToTag(currentTag, line);
  });

  if (summary && !tags.description) {
    tags.description = summary;
  }

  const parsed = {
    raw: block,
    tags,
    params,
    examples: examples.map((entry) => entry.trim()).filter(Boolean),
    deprecated: compactWhitespace(tags.deprecated || ''),
    see: compactWhitespace(tags.see || '')
  };

  GOVERNANCE_FIELDS.forEach((field) => {
    parsed[field] = compactWhitespace(tags[field] || '');
  });
  return parsed;
}

function validateGovernanceFields(jsDoc, opts = {}) {
  const errors = [];
  const warnings = [];
  const exportName = String(opts.exportName || '').trim();
  const filePath = String(opts.filePath || '').trim();
  const expectedCategory = getCategoryFromPath(filePath);

  GOVERNANCE_FIELDS.forEach((field) => {
    if (!compactWhitespace(jsDoc[field])) {
      errors.push(`missing @${field}`);
    }
  });

  if (jsDoc.component && exportName && jsDoc.component !== exportName) {
    errors.push(`@component must match export name (${exportName})`);
  }

  if (jsDoc.category) {
    if (!VALID_CATEGORIES.includes(jsDoc.category)) {
      errors.push(`@category must be one of: ${VALID_CATEGORIES.join(', ')}`);
    } else if (expectedCategory && jsDoc.category !== expectedCategory) {
      errors.push(`@category ${jsDoc.category} does not match folder ${expectedCategory}`);
    }
  }

  if (jsDoc.tier && !VALID_TIERS.includes(jsDoc.tier)) {
    errors.push(`@tier must be one of: ${VALID_TIERS.join(', ')}`);
  }

  if (jsDoc.status && !VALID_STATUSES.includes(jsDoc.status)) {
    errors.push(`@status must be one of: ${VALID_STATUSES.join(', ')}`);
  }

  if (jsDoc.breakingChangeRisk && !VALID_RISKS.includes(jsDoc.breakingChangeRisk)) {
    errors.push(`@breakingChangeRisk must be one of: ${VALID_RISKS.join(', ')}`);
  }

  if (jsDoc.decision && !VALID_DECISIONS.includes(jsDoc.decision)) {
    errors.push(`@decision must be one of: ${VALID_DECISIONS.join(', ')}`);
  }

  if (jsDoc.contentAffinity) {
    const values = jsDoc.contentAffinity
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean);
    if (!values.length) {
      errors.push('@contentAffinity must contain at least one value');
    }
    values.forEach((value) => {
      if (!VALID_CONTENT_AFFINITY.includes(value)) {
        errors.push(`@contentAffinity contains invalid value: ${value}`);
      }
    });
  }

  if (jsDoc.lastMeaningfulChange && Number.isNaN(Date.parse(jsDoc.lastMeaningfulChange))) {
    errors.push('@lastMeaningfulChange must be a valid ISO 8601 date');
  }

  if (jsDoc.status === 'deprecated') {
    if (!jsDoc.deprecated) {
      errors.push('deprecated components require an @deprecated tag');
    }
    if (!jsDoc.see) {
      errors.push('deprecated components require an @see tag');
    }
  }

  const extractedProps = Array.isArray(opts.props) ? opts.props : [];
  if (extractedProps.length > 0) {
    if (jsDoc.params.length !== extractedProps.length) {
      warnings.push(`@param count ${jsDoc.params.length} does not match destructured props ${extractedProps.length}`);
    }

    const docParamNames = new Set(jsDoc.params.map((param) => param.name));
    extractedProps.forEach((prop) => {
      if (!docParamNames.has(prop.name)) {
        warnings.push(`missing @param for prop ${prop.name}`);
      }
    });
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}

function extractExports(filePath) {
  const absolutePath = path.isAbsolute(filePath) ? filePath : path.join(REPO_ROOT, filePath);
  const displayPath = normalizeRepoPath(absolutePath);
  if (isArchivePath(displayPath)) return [];

  const content = fs.readFileSync(absolutePath, 'utf8');
  const declarations = scanDeclarations(content);

  return scanExports(content)
    .map((entry) => {
      const declaration = declarations.get(entry.localName);
      if (!declaration) {
        return {
          name: entry.exportedName,
          line: entry.line,
          jsDocBlock: null,
          props: [],
          filePath: displayPath
        };
      }

      const jsdoc = getImmediateJsdoc(content, declaration.index);
      const extractedProps = extractPropsFromParams(declaration.paramsText);
      return {
        name: entry.exportedName,
        line: declaration.line,
        jsDocBlock: jsdoc ? jsdoc.text : null,
        props: extractedProps.status === 'ok' ? extractedProps.props : [],
        filePath: displayPath
      };
    })
    .sort((a, b) => a.line - b.line || a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
}

function getLocaleForPath(filePath) {
  const normalized = toPosix(filePath);
  if (normalized.startsWith('v2/es/')) return 'es';
  if (normalized.startsWith('v2/fr/')) return 'fr';
  if (normalized.startsWith('v2/cn/')) return 'cn';
  if (normalized.startsWith('v2/')) return 'en';
  return 'other';
}

function stripFencedCodeBlocks(content) {
  return String(content || '').replace(/```[\s\S]*?```/g, (match) =>
    match.replace(/[^\n]/g, ' ')
  );
}

function isNonPublishedDocsPath(filePath) {
  const normalized = toPosix(filePath);
  return /^v2(?:\/(?:cn|es|fr))?\/x-(archived|deprecated|experimental|notes)\//.test(normalized);
}

function scanMDXImports(globPattern = 'v2/**/*.mdx') {
  const base = String(globPattern || '').includes('docs-guide') ? 'docs-guide' : 'v2';
  const absoluteBase = path.join(REPO_ROOT, base);
  const mdxFiles = walkFiles(absoluteBase, (filePath) => filePath.endsWith('.mdx'));
  const results = new Map();

  mdxFiles.forEach((absolutePath) => {
    const repoPath = normalizeRepoPath(absolutePath);
    if (isNonPublishedDocsPath(repoPath)) {
      return;
    }
    const locale = getLocaleForPath(repoPath);
    const content = stripFencedCodeBlocks(fs.readFileSync(absolutePath, 'utf8'));
    let match = COMPONENT_IMPORT_RE.exec(content);

    while (match) {
      const source = String(match[2] || '').trim();
      if (!source.startsWith('/snippets/components/') || isArchivePath(source)) {
        match = COMPONENT_IMPORT_RE.exec(content);
        continue;
      }

      splitTopLevel(match[1])
        .map((entry) => entry.trim())
        .filter(Boolean)
        .forEach((entry) => {
          const importName = entry.replace(/\s+as\s+.+$/i, '').trim();
          if (!importName) return;
          const current = results.get(importName) || {
            pages: [],
            count: 0,
            localeBreakdown: { en: 0, es: 0, fr: 0, cn: 0, other: 0 }
          };
          current.count += 1;
          if (!current.pages.includes(repoPath)) {
            current.pages.push(repoPath);
          }
          current.localeBreakdown[locale] = (current.localeBreakdown[locale] || 0) + 1;
          results.set(importName, current);
        });

      match = COMPONENT_IMPORT_RE.exec(content);
    }

    COMPONENT_IMPORT_RE.lastIndex = 0;
  });

  return results;
}

function maskComments(content) {
  const characters = String(content || '').split('');
  let state = 'code';

  for (let index = 0; index < characters.length; index += 1) {
    const char = characters[index];
    const next = characters[index + 1];

    if (state === 'code') {
      if (char === '/' && next === '/') {
        state = 'line-comment';
        characters[index] = ' ';
        continue;
      }
      if (char === '/' && next === '*') {
        state = 'block-comment';
        characters[index] = ' ';
        continue;
      }
      if (char === '"' || char === "'" || char === '`') {
        state = char;
      }
      continue;
    }

    if (state === 'line-comment') {
      characters[index] = char === '\n' ? '\n' : ' ';
      if (char === '\n') {
        state = 'code';
      }
      continue;
    }

    if (state === 'block-comment') {
      characters[index] = char === '\n' ? '\n' : ' ';
      if (char === '*' && next === '/') {
        characters[index + 1] = ' ';
        index += 1;
        state = 'code';
      }
      continue;
    }

    if (state === '"' || state === "'" || state === '`') {
      if (char === '\\') {
        index += 1;
        continue;
      }
      if (char === state) {
        state = 'code';
      }
    }
  }

  return characters.join('');
}

function maskVarExpressions(line) {
  return String(line || '').replace(/var\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\)/g, (match) =>
    ' '.repeat(match.length)
  );
}

function scanStylingViolations(filePath) {
  const absolutePath = path.isAbsolute(filePath) ? filePath : path.join(REPO_ROOT, filePath);
  const displayPath = normalizeRepoPath(absolutePath);
  const content = fs.readFileSync(absolutePath, 'utf8');
  const masked = maskComments(content);
  const originalLines = content.split('\n');
  const maskedLines = masked.split('\n');
  const banned = [];
  const advisory = [];

  maskedLines.forEach((line, index) => {
    const originalLine = originalLines[index] || '';
    const lineNumber = index + 1;

    if (line.includes('ThemeData')) {
      banned.push({ line: lineNumber, pattern: 'ThemeData', value: compactWhitespace(originalLine) });
    }

    if (line.includes('!important')) {
      banned.push({ line: lineNumber, pattern: '!important', value: compactWhitespace(originalLine) });
    }

    if (/style\s*=\s*\{\{/.test(line)) {
      advisory.push({ line: lineNumber, pattern: 'inline-style', value: compactWhitespace(originalLine) });
    }

    const sanitized = maskVarExpressions(line);
    let match = COLOR_LITERAL_RE.exec(sanitized);
    while (match) {
      const prefix = sanitized.slice(0, match.index).toLowerCase();
      const snippet = sanitized.toLowerCase();
      if (!COLOR_CONTEXT_RE.test(prefix) && !COLOR_CONTEXT_RE.test(snippet)) {
        match = COLOR_LITERAL_RE.exec(sanitized);
        continue;
      }
      banned.push({
        line: lineNumber,
        pattern: 'hardcoded-color',
        value: match[0]
      });
      match = COLOR_LITERAL_RE.exec(sanitized);
    }
    COLOR_LITERAL_RE.lastIndex = 0;
  });

  return { banned, advisory, filePath: displayPath };
}

module.exports = {
  parseJSDocBlock,
  extractExports,
  validateGovernanceFields,
  VALID_CATEGORIES,
  VALID_STATUSES,
  VALID_TIERS,
  VALID_RISKS,
  VALID_DECISIONS,
  scanMDXImports,
  scanStylingViolations,
  getCategoryFromPath,
  isArchivePath,
  getComponentFiles
};
