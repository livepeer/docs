#!/usr/bin/env node
/**
 * @script            mdx-safe-markdown
 * @category          utility
 * @purpose           qa:content-quality
 * @scope             tools/lib, full-repo markdown/mdx content
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Shared MDX-safe markdown helpers — collects first-party markdown files, detects unsafe patterns, and applies deterministic repairs.
 * @pipeline          indirect — imported by validators, remediators, and report generators
 * @usage             node tools/lib/mdx-safe-markdown.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { unified } = require('unified');

function loadPlugin(name) {
  const plugin = require(name);
  return plugin.default || plugin;
}

const remarkParse = loadPlugin('remark-parse');
const remarkGfm = loadPlugin('remark-gfm');
const remarkMath = loadPlugin('remark-math');
const remarkMdx = loadPlugin('remark-mdx');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const STAGED_SNAPSHOT_ENV = 'LPD_STAGED_FILES_SNAPSHOT';
const MARKDOWN_EXTENSIONS = new Set(['.md', '.mdx']);
const PLACEHOLDER_TAG_RE = /<([a-z][a-z0-9-]{1,})>/g;
const RAW_BR_RE = /<br>(?!\s*\/>)/g;
const COMPARISON_RE = /(^|[\s([{])(<={0,1}|>={0,1})(?=\s*\d)/g;
const HTML_TAG_ALLOWLIST = new Set([
  'a',
  'abbr',
  'b',
  'blockquote',
  'body',
  'br',
  'caption',
  'code',
  'dd',
  'del',
  'details',
  'div',
  'dl',
  'dt',
  'em',
  'figcaption',
  'figure',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'hr',
  'html',
  'i',
  'img',
  'kbd',
  'li',
  'main',
  'mark',
  'ol',
  'p',
  'picture',
  'pre',
  'q',
  's',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'tfoot',
  'th',
  'thead',
  'time',
  'tr',
  'u',
  'ul',
  'option'
]);
const PLACEHOLDER_ALIASES = {
  issue: 'ISSUE_ID',
  'issue-id': 'ISSUE_ID',
  slug: 'TASK_SLUG',
  task: 'TASK_ID',
  'task-id': 'TASK_ID',
  id: 'ID',
  path: 'TARGET_PATH',
  'file-path': 'FILE_PATH',
  file: 'FILE_PATH',
  branch: 'BRANCH_NAME',
  scope: 'PATH_SCOPE'
};
const MDX_PROCESSOR = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkMath)
  .use(remarkMdx);

function normalizeRepoPath(value) {
  return String(value || '').split(path.sep).join('/');
}

function normalizeInline(value) {
  return String(value || '')
    .replace(/\r?\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeRegExp(value) {
  return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function isMarkdownFile(repoPath) {
  return MARKDOWN_EXTENSIONS.has(path.extname(String(repoPath || '')).toLowerCase());
}

function shouldExcludeMarkdownPath(repoPath) {
  const relPath = normalizeRepoPath(repoPath).replace(/^\/+/, '');
  if (!relPath) return true;
  if (!isMarkdownFile(relPath)) return true;

  return (
    relPath.startsWith('.git/') ||
    relPath.startsWith('node_modules/') ||
    relPath.includes('/.git/') ||
    relPath.includes('/node_modules/') ||
    relPath.startsWith('.venv/') ||
    relPath.includes('/.venv/') ||
    relPath.startsWith('tmp/') ||
    relPath.includes('/tmp/') ||
    relPath.includes('/__pycache__/') ||
    relPath.includes('/.next/') ||
    relPath.endsWith('.bak') ||
    relPath.endsWith('.disabled')
  );
}

function isEligibleRepoMarkdownPath(repoPath) {
  return !shouldExcludeMarkdownPath(repoPath);
}

function getRepoRoot(rootDir = REPO_ROOT) {
  try {
    return execSync('git rev-parse --show-toplevel', {
      cwd: rootDir,
      encoding: 'utf8'
    }).trim();
  } catch (_error) {
    return rootDir;
  }
}

function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (_error) {
    return '';
  }
}

function walkMarkdownFiles(dirPath, repoRoot, out = []) {
  if (!fs.existsSync(dirPath)) return out;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === '.venv' || entry.name === '__pycache__' || entry.name === '.next') {
      continue;
    }

    const absPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walkMarkdownFiles(absPath, repoRoot, out);
      continue;
    }

    const relPath = normalizeRepoPath(path.relative(repoRoot, absPath));
    if (isEligibleRepoMarkdownPath(relPath)) {
      out.push(absPath);
    }
  }

  return out;
}

function getAllRepoMarkdownFiles(rootDir = REPO_ROOT) {
  const repoRoot = getRepoRoot(rootDir);
  return walkMarkdownFiles(repoRoot, repoRoot).sort((left, right) =>
    normalizeRepoPath(path.relative(repoRoot, left)).localeCompare(normalizeRepoPath(path.relative(repoRoot, right)))
  );
}

function getStagedRepoMarkdownFiles(rootDir = REPO_ROOT) {
  const repoRoot = getRepoRoot(rootDir);
  const snapshot = String(process.env[STAGED_SNAPSHOT_ENV] || '')
    .split(/\r?\n/)
    .map((entry) => entry.trim())
    .filter(Boolean);

  const relFiles = snapshot.length > 0
    ? snapshot
    : String(
        execSync('git diff --cached --name-only --diff-filter=ACMR', {
          cwd: repoRoot,
          encoding: 'utf8'
        }) || ''
      )
        .split('\n')
        .map((entry) => entry.trim())
        .filter(Boolean);

  return [...new Set(relFiles.map((entry) => normalizeRepoPath(entry)))]
    .filter((entry) => isEligibleRepoMarkdownPath(entry))
    .map((entry) => path.join(repoRoot, entry))
    .sort((left, right) =>
      normalizeRepoPath(path.relative(repoRoot, left)).localeCompare(normalizeRepoPath(path.relative(repoRoot, right)))
    );
}

function resolveExplicitTarget(targetPath, repoRoot) {
  const rawPath = path.isAbsolute(targetPath) ? targetPath : path.join(repoRoot, targetPath);
  if (!fs.existsSync(rawPath)) return [];

  const stat = fs.statSync(rawPath);
  if (stat.isDirectory()) {
    return walkMarkdownFiles(rawPath, repoRoot);
  }

  const relPath = normalizeRepoPath(path.relative(repoRoot, rawPath));
  return isEligibleRepoMarkdownPath(relPath) ? [rawPath] : [];
}

function collectTargetMarkdownFiles(options = {}) {
  const repoRoot = getRepoRoot(options.rootDir || REPO_ROOT);
  const files = Array.isArray(options.files) ? options.files.filter(Boolean) : [];

  if (files.length > 0) {
    return [...new Set(files.flatMap((entry) => resolveExplicitTarget(entry, repoRoot)))].sort((left, right) =>
      normalizeRepoPath(path.relative(repoRoot, left)).localeCompare(normalizeRepoPath(path.relative(repoRoot, right)))
    );
  }

  if (options.stagedOnly) {
    return getStagedRepoMarkdownFiles(repoRoot);
  }

  return getAllRepoMarkdownFiles(repoRoot);
}

function buildGeneratedMarkdownCommentLines(details = {}) {
  const marker = normalizeInline(details.marker) || 'generated-markdown:v1';
  return [
    `[//]: # (generated-file: ${marker})`,
    `[//]: # (Generation Script: ${escapeMarkdownCommentText(details.script)})`,
    `[//]: # (Purpose: ${escapeMarkdownCommentText(details.purpose)})`,
    `[//]: # (Run when: ${escapeMarkdownCommentText(details.runWhen)})`,
    `[//]: # (Run command: ${escapeMarkdownCommentText(details.runCommand)})`
  ];
}

function escapeMarkdownCommentText(value) {
  return normalizeInline(value).replace(/\)/g, '\\)');
}

function toSafePlaceholderToken(name) {
  const normalized = String(name || '').trim().toLowerCase();
  if (!normalized) return '';
  return PLACEHOLDER_ALIASES[normalized] || normalized.toUpperCase().replace(/-/g, '_');
}

function getLineNumberAtIndex(content, index, baseLine = 1) {
  return baseLine + String(content || '').slice(0, Math.max(0, index)).split('\n').length - 1;
}

function mapOutsideInlineCode(line, transform) {
  let output = '';
  let index = 0;

  while (index < line.length) {
    const match = /`+/.exec(line.slice(index));
    if (!match) {
      output += transform(line.slice(index), index);
      break;
    }

    const tickStart = index + match.index;
    const tickToken = match[0];
    const codeEnd = line.indexOf(tickToken, tickStart + tickToken.length);

    output += transform(line.slice(index, tickStart), index);

    if (codeEnd === -1) {
      output += line.slice(tickStart);
      break;
    }

    output += line.slice(tickStart, codeEnd + tickToken.length);
    index = codeEnd + tickToken.length;
  }

  return output;
}

function isMarkdownTableLine(line) {
  const trimmed = String(line || '').trim();
  return trimmed.startsWith('|') && trimmed.includes('|');
}

function splitMarkdownTableLine(line) {
  const cells = [];
  let current = '';
  let escaped = false;
  const body = line.startsWith('|') ? line.slice(1) : line;
  const trimmedBody = body.endsWith('|') ? body.slice(0, -1) : body;

  for (const char of trimmedBody) {
    if (char === '|' && !escaped) {
      cells.push(current);
      current = '';
      escaped = false;
      continue;
    }

    current += char;
    escaped = char === '\\' && !escaped;
    if (char !== '\\') {
      escaped = false;
    }
  }

  cells.push(current);
  return {
    leadingPipe: line.startsWith('|'),
    trailingPipe: line.endsWith('|'),
    cells
  };
}

function joinMarkdownTableLine(parts) {
  const prefix = parts.leadingPipe ? '|' : '';
  const suffix = parts.trailingPipe ? '|' : '';
  return `${prefix}${parts.cells.join('|')}${suffix}`;
}

function isMarkdownTableSeparator(line) {
  if (!isMarkdownTableLine(line)) return false;
  const parts = splitMarkdownTableLine(line);
  return parts.cells.every((cell) => {
    const normalized = cell.trim();
    return normalized === '' || /^:?-{3,}:?$/.test(normalized);
  });
}

function isInlineCodeWrapped(value) {
  const trimmed = String(value || '').trim();
  return trimmed.startsWith('`') && trimmed.endsWith('`') && trimmed.length >= 2;
}

function looksLikeCodeSnippet(value) {
  const text = String(value || '').trim();
  if (!text) return false;
  if (isInlineCodeWrapped(text)) return false;

  return (
    /<[A-Za-z][^>]*\{[^}]+\}[^>]*\/?>/.test(text) ||
    /\{[^}]*:[^}]*\}/.test(text) ||
    /\bimport\s+.+\s+from\s+['"][^'"]+['"]/.test(text) ||
    /\b(?:const|let)\s+[A-Za-z_$][\w$]*\s*=/.test(text) ||
    /\breturn\s*\(/.test(text) ||
    /\btypeof\s+[A-Za-z_$][\w$]*\s*===/.test(text) ||
    /\bArray\.isArray\(/.test(text) ||
    /\bdangerouslySetInnerHTML\b/.test(text) ||
    /\bconsole\.warn\(/.test(text) ||
    /\b[A-Za-z_$][\w$]*\.(?:map|filter|slice|reduce|forEach|some|every)\(/.test(text) ||
    /=>/.test(text) ||
    /^[A-Za-z_$][\w$]*\s*=/.test(text)
  );
}

function wrapCodeSnippet(text) {
  const trimmed = String(text || '').trim();
  if (!trimmed || trimmed.includes('`') || isInlineCodeWrapped(trimmed) || !looksLikeCodeSnippet(trimmed)) {
    return text;
  }

  const leading = String(text || '').match(/^\s*/)?.[0] || '';
  const trailing = String(text || '').match(/\s*$/)?.[0] || '';
  return `${leading}\`${trimmed}\`${trailing}`;
}

function sanitizeMarkdownTableCellText(value) {
  const normalized = String(value || '')
    .replace(/\r\n/g, '\n')
    .replace(/\n/g, '<br />')
    .replace(RAW_BR_RE, '<br />');

  const segments = normalized.split(/(<br\s*\/?>)/i);
  return segments
    .map((segment, index) => (index % 2 === 1 ? segment.replace(/<br>/gi, '<br />') : wrapCodeSnippet(segment)))
    .join('');
}

function repairComparisonOperators(line) {
  if (!/[<>]/.test(line) || line.includes('$')) {
    return { line, changed: false };
  }

  let changed = false;
  const nextLine = mapOutsideInlineCode(line, (segment) =>
    segment.replace(COMPARISON_RE, (match, prefix, operator) => {
      if (!(operator === '<' || operator === '<=' || operator === '>' || operator === '>=')) {
        return match;
      }

      changed = true;
      if (operator === '<') return `${prefix}&lt;`;
      if (operator === '<=') return `${prefix}&lt;=`;
      if (operator === '>') return `${prefix}&gt;`;
      return `${prefix}&gt;=`;
    })
  );

  return { line: nextLine, changed };
}

function repairAnglePlaceholders(line) {
  let changed = false;
  const nextLine = mapOutsideInlineCode(line, (segment) =>
    segment.replace(PLACEHOLDER_TAG_RE, (match, tagName) => {
      const normalized = String(tagName || '').toLowerCase();
      if (HTML_TAG_ALLOWLIST.has(normalized)) {
        return match;
      }

      changed = true;
      return toSafePlaceholderToken(tagName);
    })
  );

  return { line: nextLine, changed };
}

function repairTableLine(line) {
  if (!isMarkdownTableLine(line) || isMarkdownTableSeparator(line)) {
    return { line, changes: [] };
  }

  const parts = splitMarkdownTableLine(line);
  const changes = [];
  const nextCells = parts.cells.map((cell, index) => {
    const repaired = sanitizeMarkdownTableCellText(cell);
    if (repaired === cell) {
      return cell;
    }

    if (RAW_BR_RE.test(cell)) {
      changes.push({
        rule: 'raw-br-in-table',
        cell: index + 1
      });
    }

    if (repaired !== cell && repaired.replace(/<br\s*\/?>/gi, '<br />') !== cell.replace(/<br\s*\/?>/gi, '<br />')) {
      changes.push({
        rule: 'code-like-table-cell',
        cell: index + 1
      });
    }

    return repaired;
  });

  return {
    line: joinMarkdownTableLine({ ...parts, cells: nextCells }),
    changes
  };
}

function convertHtmlCommentBlock(body) {
  const lines = String(body || '')
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length === 0) {
    return '[//]: # ()';
  }

  return lines.map((line) => `[//]: # (${escapeMarkdownCommentText(line)})`).join('\n');
}

function splitFencedSegments(content) {
  const lines = String(content || '').split('\n');
  const segments = [];
  let buffer = [];
  let protectedBlock = false;
  let fenceToken = '';
  let lineStart = 1;

  function pushBuffer() {
    if (buffer.length === 0) return;
    segments.push({
      protected: protectedBlock,
      text: buffer.join('\n'),
      lineStart
    });
    buffer = [];
  }

  lines.forEach((line, index) => {
    const lineNumber = index + 1;
    const fenceMatch = line.match(/^\s*(`{3,}|~{3,})/);

    if (!protectedBlock) {
      if (fenceMatch) {
        pushBuffer();
        protectedBlock = true;
        fenceToken = fenceMatch[1];
        lineStart = lineNumber;
        buffer.push(line);
        return;
      }

      if (buffer.length === 0) {
        lineStart = lineNumber;
      }
      buffer.push(line);
      return;
    }

    buffer.push(line);
    if (new RegExp(`^\\s*${escapeRegExp(fenceToken)}\\s*$`).test(line)) {
      pushBuffer();
      protectedBlock = false;
      fenceToken = '';
      lineStart = lineNumber + 1;
    }
  });

  pushBuffer();
  return segments;
}

function repairMarkdownContent(content, filePath = '', options = {}) {
  const original = String(content || '');
  const segments = splitFencedSegments(original);
  const repairedSegments = [];
  const changes = [];

  segments.forEach((segment) => {
    if (segment.protected) {
      repairedSegments.push(segment.text);
      return;
    }

    let working = segment.text;

    working = working.replace(/<!--([\s\S]*?)-->/g, (match, body, offset) => {
      changes.push({
        file: filePath,
        line: getLineNumberAtIndex(segment.text, offset, segment.lineStart),
        rule: 'html-comment',
        message: 'Replace HTML comments with Markdown reference comments.'
      });
      return convertHtmlCommentBlock(body);
    });

    const nextLines = working.split('\n').map((line, index) => {
      const lineNumber = segment.lineStart + index;
      let currentLine = line;

      const tableRepair = repairTableLine(currentLine);
      if (tableRepair.line !== currentLine) {
        tableRepair.changes.forEach((change) => {
          changes.push({
            file: filePath,
            line: lineNumber,
            rule: change.rule,
            message:
              change.rule === 'raw-br-in-table'
                ? 'Use <br /> in Markdown table cells.'
                : 'Wrap code-like Markdown table content in inline code.'
          });
        });
        currentLine = tableRepair.line;
      }

      const comparisonRepair = repairComparisonOperators(currentLine);
      if (comparisonRepair.changed) {
        changes.push({
          file: filePath,
          line: lineNumber,
          rule: 'comparison-operator',
          message: 'Escape raw comparison operators in prose so MDX does not parse them as tags.'
        });
        currentLine = comparisonRepair.line;
      }

      const placeholderRepair = repairAnglePlaceholders(currentLine);
      if (placeholderRepair.changed) {
        changes.push({
          file: filePath,
          line: lineNumber,
          rule: 'angle-placeholder',
          message: 'Replace angle-bracket placeholders with MDX-safe placeholder tokens.'
        });
        currentLine = placeholderRepair.line;
      }

      return currentLine;
    });

    repairedSegments.push(nextLines.join('\n'));
  });

  return {
    content: repairedSegments.join('\n'),
    changed: repairedSegments.join('\n') !== original,
    changes
  };
}

function parseMdxSafeContent(content, filePath = '') {
  try {
    MDX_PROCESSOR.parse({
      value: String(content || ''),
      path: filePath || undefined
    });
    return { ok: true, error: null };
  } catch (error) {
    return {
      ok: false,
      error: {
        file: filePath,
        line: error?.line || error?.loc?.line || error?.place?.line || 1,
        column: error?.column || error?.loc?.column || error?.place?.column || 1,
        rule: 'parse-error',
        message: error?.reason || error?.message || 'Unknown MDX parse error'
      }
    };
  }
}

function shouldRunFullParse(content, filePath, repaired) {
  const ext = path.extname(String(filePath || '')).toLowerCase();
  if (ext === '.mdx') {
    return true;
  }

  const text = String(content || '');
  const hasSuspiciousTokens = /[<{]|^\s*!/m.test(text);
  if (!hasSuspiciousTokens) {
    return false;
  }

  if ((repaired?.changes || []).length > 0) {
    return true;
  }

  return Buffer.byteLength(text, 'utf8') <= 250000;
}

function validateMarkdownContent(content, filePath = '') {
  const findings = [];
  const repaired = repairMarkdownContent(content, filePath);
  findings.push(...repaired.changes);

  if (shouldRunFullParse(content, filePath, repaired)) {
    const parseResult = parseMdxSafeContent(content, filePath);
    if (!parseResult.ok && parseResult.error) {
      findings.push(parseResult.error);
    }
  }

  return {
    findings,
    passed: findings.length === 0
  };
}

module.exports = {
  REPO_ROOT,
  buildGeneratedMarkdownCommentLines,
  collectTargetMarkdownFiles,
  isEligibleRepoMarkdownPath,
  normalizeRepoPath,
  parseMdxSafeContent,
  readFileSafe,
  repairMarkdownContent,
  sanitizeMarkdownTableCellText,
  toSafePlaceholderToken,
  validateMarkdownContent
};
