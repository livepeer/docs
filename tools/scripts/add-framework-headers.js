#!/usr/bin/env node
/**
 * @script           add-framework-headers
 * @summary          Insert or verify governance framework metadata headers from classification JSON.
 * @category         generator
 * @purpose          governance:repo-health
 * @scope            full-repo
 * @owner            docs
 * @needs            R-R14
 * @purpose-statement Inserts or extends framework headers on all repo scripts from classification data.
 * @pipeline         manual — interactive developer tool, not suited for automated pipelines
 *
 * @usage
 *   node tools/scripts/add-framework-headers.js --data script-classifications.json --dry-run
 *
 * @inputs
 *   --data <path> --dry-run|--write|--verify [--filter <prefix>] [--exclude-subdirs] [--force]
 *
 * @outputs
 *   - Console summary with files processed, updated, skipped, and errors
 *
 * @exit-codes
 *   0 = success
 *   1 = argument, I/O, parse, or verification failure
 *
 * @examples
 *   node tools/scripts/add-framework-headers.js --data script-classifications.json --dry-run
 *   node tools/scripts/add-framework-headers.js --data script-classifications.json --filter tools/scripts --write
 *
 * @notes
 *   Tool-only migration utility; it does not execute repo-wide header rewrites unless explicitly run.
 */

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const JS_EXTENSIONS = new Set(['.js', '.cjs', '.mjs', '.ts', '.tsx']);
const SHELL_EXTENSIONS = new Set(['.sh', '.bash']);
const PYTHON_EXTENSIONS = new Set(['.py']);

function printHelp() {
  console.log(
    [
      'Usage:',
      '  node tools/scripts/add-framework-headers.js --data <path> (--dry-run | --write | --verify) [options]',
      '',
      'Required:',
      '  --data <path>            Path to classification JSON data file.',
      '',
      'Modes (choose exactly one):',
      '  --dry-run                Show planned changes without writing files.',
      '  --write                  Apply header updates to files.',
      '  --verify                 Read-only validation of headers against classification data.',
      '',
      'Options:',
      '  --filter <prefix>        Process only files under this repo-relative prefix.',
      '  --exclude-subdirs        With --filter, include only direct child files.',
      '  --force                  Overwrite rows that already contain @category or @purpose.',
      '  --help                   Show this help output.',
      '',
      'Examples:',
      '  node tools/scripts/add-framework-headers.js --data script-classifications.json --dry-run',
      '  node tools/scripts/add-framework-headers.js --data /tmp/classifications.json --filter tools/scripts --write',
      '  node tools/scripts/add-framework-headers.js --data script-classifications.json --filter .githooks --exclude-subdirs --verify'
    ].join('\n')
  );
}

function parseArgs(argv) {
  const args = {
    dataPath: '',
    filter: '',
    excludeSubdirs: false,
    dryRun: false,
    write: false,
    verify: false,
    force: false,
    help: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

    if (token === '--help') {
      args.help = true;
      continue;
    }
    if (token === '--dry-run') {
      args.dryRun = true;
      continue;
    }
    if (token === '--write') {
      args.write = true;
      continue;
    }
    if (token === '--verify') {
      args.verify = true;
      continue;
    }
    if (token === '--exclude-subdirs') {
      args.excludeSubdirs = true;
      continue;
    }
    if (token === '--force') {
      args.force = true;
      continue;
    }

    if (token === '--data') {
      args.dataPath = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--data=')) {
      args.dataPath = token.slice('--data='.length).trim();
      continue;
    }

    if (token === '--filter') {
      args.filter = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--filter=')) {
      args.filter = token.slice('--filter='.length).trim();
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (args.help) return args;

  if (!args.dataPath) {
    throw new Error('Missing required --data <path> argument.');
  }

  const modeCount = [args.dryRun, args.write, args.verify].filter(Boolean).length;
  if (modeCount !== 1) {
    throw new Error('Exactly one mode is required: --dry-run, --write, or --verify.');
  }

  if (args.excludeSubdirs && !args.filter) {
    throw new Error('--exclude-subdirs requires --filter.');
  }

  return args;
}

function normalizeRepoPath(value, label) {
  const raw = String(value || '').trim();
  if (!raw) {
    throw new Error(`Missing ${label || 'path'} value.`);
  }

  let candidate = raw;
  if (path.isAbsolute(raw)) {
    candidate = path.relative(REPO_ROOT, raw);
  }

  const posix = path.posix.normalize(String(candidate).replace(/\\/g, '/'));
  const withoutDotPrefix = posix.replace(/^\.\//, '');

  if (!withoutDotPrefix || withoutDotPrefix === '.') {
    throw new Error(`Invalid ${label || 'path'} value: "${raw}"`);
  }

  if (
    withoutDotPrefix === '..' ||
    withoutDotPrefix.startsWith('../') ||
    path.isAbsolute(withoutDotPrefix)
  ) {
    throw new Error(`Path escapes repository root: "${raw}"`);
  }

  return withoutDotPrefix;
}

function normalizePrefix(prefix) {
  const normalized = normalizeRepoPath(prefix, '--filter');
  return normalized.endsWith('/') ? normalized.slice(0, -1) : normalized;
}

function stringField(row, fieldName) {
  const value = row[fieldName];
  if (value === undefined || value === null) return '';
  return String(value).trim();
}

function loadClassificationData(dataPath) {
  const absPath = path.isAbsolute(dataPath) ? dataPath : path.join(REPO_ROOT, dataPath);

  let raw = '';
  try {
    raw = fs.readFileSync(absPath, 'utf8');
  } catch (error) {
    throw new Error(`Unable to read data file: ${absPath} (${error.message})`);
  }

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    throw new Error(`Invalid JSON in ${absPath}: ${error.message}`);
  }

  if (!Array.isArray(parsed)) {
    throw new Error(`Classification data must be an array: ${absPath}`);
  }

  const rows = [];
  const seenPaths = new Set();

  parsed.forEach((row, index) => {
    if (!row || typeof row !== 'object' || Array.isArray(row)) {
      throw new Error(`data[${index}] must be an object.`);
    }

    const repoPath = normalizeRepoPath(row.path, `data[${index}].path`);
    if (seenPaths.has(repoPath)) {
      throw new Error(`Duplicate path in classification data: ${repoPath}`);
    }
    seenPaths.add(repoPath);

    rows.push({
      path: repoPath,
      category: stringField(row, 'category'),
      purpose: stringField(row, 'purpose'),
      scope: stringField(row, 'scope'),
      needs: stringField(row, 'needs'),
      purposeStatement: stringField(row, 'purpose_statement'),
      pipeline: stringField(row, 'pipeline'),
      dualmode: stringField(row, 'dualmode')
    });
  });

  rows.sort((a, b) => a.path.localeCompare(b.path));
  return rows;
}

function pathMatchesFilter(repoPath, prefix) {
  return repoPath === prefix || repoPath.startsWith(`${prefix}/`);
}

function applyFilter(rows, filterPrefix, excludeSubdirs) {
  if (!filterPrefix) return rows;
  const prefix = normalizePrefix(filterPrefix);

  let selected = rows.filter((row) => pathMatchesFilter(row.path, prefix));
  if (!excludeSubdirs) return selected;

  selected = selected.filter((row) => {
    if (row.path === prefix) return true;
    let remainder = row.path.slice(prefix.length);
    if (remainder.startsWith('/')) remainder = remainder.slice(1);
    if (!remainder) return true;
    return !remainder.includes('/');
  });

  return selected;
}

function detectShebang(content) {
  const match = String(content || '').match(/^#![^\r\n]*/);
  if (!match) return 'none';

  const line = match[0].toLowerCase();
  if (line.includes('node')) return 'node';
  if (line.includes('python')) return 'python';
  if (line.includes('bash') || /\bsh\b/.test(line)) return 'bash';
  return 'unknown';
}

function inferFileKind(repoPath, content) {
  const ext = path.extname(repoPath).toLowerCase();
  const shebang = detectShebang(content);
  const extensionless = ext === '';
  const inHooks = repoPath === '.githooks' || repoPath.startsWith('.githooks/');

  if (JS_EXTENSIONS.has(ext)) {
    return { commentStyle: 'jsdoc', command: 'node', extensionless: false };
  }
  if (SHELL_EXTENSIONS.has(ext)) {
    return { commentStyle: 'hash', command: 'bash', extensionless: false };
  }
  if (PYTHON_EXTENSIONS.has(ext)) {
    return { commentStyle: 'hash', command: 'python3', extensionless: false };
  }

  if (extensionless || inHooks) {
    if (shebang === 'node') {
      return { commentStyle: 'jsdoc', command: 'node', extensionless: true };
    }
    if (shebang === 'python') {
      return { commentStyle: 'hash', command: 'python3', extensionless: true };
    }
    return { commentStyle: 'hash', command: 'bash', extensionless: true };
  }

  if (shebang === 'node') {
    return { commentStyle: 'jsdoc', command: 'node', extensionless: false };
  }
  if (shebang === 'python') {
    return { commentStyle: 'hash', command: 'python3', extensionless: false };
  }
  if (shebang === 'bash') {
    return { commentStyle: 'hash', command: 'bash', extensionless: false };
  }

  throw new Error(`Unsupported script file type: ${repoPath}`);
}

function findInsertionPoint(content) {
  const text = String(content || '');
  let index = 0;

  const shebangMatch = text.match(/^(#![^\r\n]*(?:\r?\n|$))/);
  if (shebangMatch) {
    index = shebangMatch[0].length;
  }

  let cursor = index;
  const blankMatch = text.slice(cursor).match(/^(?:[ \t]*\r?\n)*/);
  if (blankMatch) {
    cursor += blankMatch[0].length;
  }

  const strictMatch = text
    .slice(cursor)
    .match(/^[ \t]*(?:'use strict'|"use strict")[ \t]*;?[ \t]*(?:\r?\n|$)/);
  if (strictMatch) {
    cursor += strictMatch[0].length;
  }

  return cursor;
}

function extractTopHeader(content) {
  const text = String(content || '');
  let start = 0;

  const shebangMatch = text.match(/^(#![^\r\n]*(?:\r?\n|$))/);
  if (shebangMatch) {
    start = shebangMatch[0].length;
  }

  const leadingBlankMatch = text.slice(start).match(/^(?:[ \t]*\r?\n)*/);
  if (leadingBlankMatch) {
    start += leadingBlankMatch[0].length;
  }

  const afterStart = text.slice(start);
  if (afterStart.startsWith('/**')) {
    const closeIdx = afterStart.indexOf('*/');
    if (closeIdx !== -1) {
      let end = start + closeIdx + 2;
      const trailingNewline = text.slice(end).match(/^\r?\n/);
      if (trailingNewline) end += trailingNewline[0].length;
      return {
        style: 'jsdoc',
        start,
        end,
        text: text.slice(start, end)
      };
    }
  }

  let cursor = start;
  let sawTagLine = false;
  let sawAnyHeaderLine = false;

  while (cursor < text.length) {
    const lineEnd = text.indexOf('\n', cursor);
    const nextCursor = lineEnd === -1 ? text.length : lineEnd + 1;
    const line = text.slice(cursor, lineEnd === -1 ? text.length : lineEnd);
    const trimmed = line.trim();

    if (!trimmed) {
      if (!sawAnyHeaderLine) break;
      cursor = nextCursor;
      continue;
    }

    if (!trimmed.startsWith('#')) {
      break;
    }

    const isTag = /^#\s*@[\w-]+/.test(trimmed);
    const isContinuation = /^#(?:\s{2,}\S.*|\s*)$/.test(trimmed);

    if (!sawTagLine) {
      if (!isTag) break;
      sawTagLine = true;
      sawAnyHeaderLine = true;
      cursor = nextCursor;
      continue;
    }

    if (isTag || isContinuation) {
      sawAnyHeaderLine = true;
      cursor = nextCursor;
      continue;
    }

    break;
  }

  if (sawTagLine) {
    return {
      style: 'hash',
      start,
      end: cursor,
      text: text.slice(start, cursor)
    };
  }

  return null;
}

function parseTagMap(headerText) {
  const tags = {};
  String(headerText || '')
    .split(/\r?\n/)
    .forEach((line) => {
      const cleaned = String(line || '')
        .trim()
        .replace(/^\/\*\*?/, '')
        .replace(/\*\/$/, '')
        .replace(/^\*\s?/, '')
        .replace(/^#\s?/, '')
        .trim();

      const match = cleaned.match(/^@([a-z0-9-]+)\s+(.+)$/i);
      if (!match) return;
      const tagName = match[1].toLowerCase();
      const value = String(match[2] || '').trim();
      if (!(tagName in tags)) {
        tags[tagName] = value;
      }
    });
  return tags;
}

function defaultScriptName(repoPath, commentStyle) {
  if (commentStyle === 'jsdoc') {
    const ext = path.extname(repoPath);
    return path.basename(repoPath, ext);
  }
  return path.basename(repoPath);
}

function defaultUsage(repoPath, command) {
  const runner = command || 'node';
  return `${runner} ${repoPath} [flags]`;
}

function fallbackPurposeStatement(row, repoPath) {
  if (row.purposeStatement) return row.purposeStatement;
  if (row.purpose) return row.purpose;
  return defaultScriptName(repoPath, 'jsdoc');
}

function formatTagLines(entries, prefix) {
  const tagsOnly = entries.map(([tag]) => tag);
  const maxTagLen = tagsOnly.reduce((max, tag) => Math.max(max, tag.length), 0);
  return entries.map(([tag, value]) => `${prefix}${tag}${' '.repeat(maxTagLen - tag.length + 1)}${value}`);
}

function buildJSDocHeader(values) {
  const entries = [
    ['@script', values.script],
    ['@category', values.category],
    ['@purpose', values.purpose],
    ['@scope', values.scope],
    ['@owner', values.owner],
    ['@needs', values.needs],
    ['@purpose-statement', values.purposeStatement],
    ['@pipeline', values.pipeline]
  ];

  if (values.dualmode) {
    entries.push(['@dualmode', values.dualmode]);
  }
  entries.push(['@usage', values.usage]);

  return ['/**', ...formatTagLines(entries, ' * '), ' */', ''].join('\n');
}

function buildHashHeader(values, options = {}) {
  const includeUsage = Boolean(options.includeUsage);
  const entries = [
    ['@script', values.script],
    ['@category', values.category],
    ['@purpose', values.purpose],
    ['@scope', values.scope],
    ['@owner', values.owner],
    ['@needs', values.needs],
    ['@purpose-statement', values.purposeStatement],
    ['@pipeline', values.pipeline]
  ];

  if (includeUsage) {
    entries.push(['@usage', values.usage]);
  }

  return [...formatTagLines(entries, '# '), ''].join('\n');
}

function buildHeaderValues(row, kind, existingTags, hasExistingHeader) {
  const script = existingTags.script || defaultScriptName(row.path, kind.commentStyle);
  const owner = existingTags.owner || 'docs';
  const usage = existingTags.usage || defaultUsage(row.path, kind.command);

  return {
    script,
    category: row.category,
    purpose: row.purpose,
    scope: row.scope,
    owner,
    needs: row.needs,
    purposeStatement: fallbackPurposeStatement(row, row.path),
    pipeline: row.pipeline,
    dualmode: row.dualmode,
    usage,
    hasExistingHeader
  };
}

function makeReplacementContent(content, headerInfo, headerText) {
  if (headerInfo) {
    return content.slice(0, headerInfo.start) + headerText + content.slice(headerInfo.end);
  }

  const insertAt = findInsertionPoint(content);
  return content.slice(0, insertAt) + headerText + content.slice(insertAt);
}

function applyRowTransform(row, args) {
  const fullPath = path.join(REPO_ROOT, row.path);
  if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isFile()) {
    return { status: 'error', path: row.path, reason: 'File does not exist.' };
  }

  let content = '';
  try {
    content = fs.readFileSync(fullPath, 'utf8');
  } catch (error) {
    return { status: 'error', path: row.path, reason: `Unable to read file: ${error.message}` };
  }

  let kind;
  try {
    kind = inferFileKind(row.path, content);
  } catch (error) {
    return { status: 'error', path: row.path, reason: error.message };
  }

  const headerInfo = extractTopHeader(content);
  const existingTags = headerInfo ? parseTagMap(headerInfo.text) : {};
  const hasFrameworkTags = Boolean(existingTags.category || existingTags.purpose);

  if (hasFrameworkTags && !args.force) {
    return {
      status: 'skip',
      path: row.path,
      reason: 'Existing framework tags found (@category or @purpose). Use --force to overwrite.'
    };
  }

  const values = buildHeaderValues(row, kind, existingTags, Boolean(headerInfo));

  const headerText =
    kind.commentStyle === 'jsdoc'
      ? buildJSDocHeader(values)
      : buildHashHeader(values, { includeUsage: Boolean(headerInfo) });

  const nextContent = makeReplacementContent(content, headerInfo, headerText);
  if (nextContent === content) {
    return { status: 'skip', path: row.path, reason: 'Already has framework headers.' };
  }

  if (args.write) {
    try {
      fs.writeFileSync(fullPath, nextContent, 'utf8');
    } catch (error) {
      return { status: 'error', path: row.path, reason: `Unable to write file: ${error.message}` };
    }
    return { status: 'update', path: row.path, reason: 'Header updated.' };
  }

  return {
    status: 'update',
    path: row.path,
    reason: args.dryRun ? 'Would update header.' : 'Header update planned.'
  };
}

function verifyRequiredTags(kind, tags, row) {
  const failures = [];

  const requiredForJsdoc = [
    'script',
    'category',
    'purpose',
    'scope',
    'owner',
    'needs',
    'purpose-statement',
    'pipeline',
    'usage'
  ];
  const requiredForHash = ['script', 'category', 'purpose', 'scope', 'owner', 'needs', 'purpose-statement', 'pipeline'];
  const required = kind.commentStyle === 'jsdoc' ? requiredForJsdoc : requiredForHash;

  required.forEach((tag) => {
    if (!tags[tag]) {
      failures.push(`Missing @${tag}`);
    }
  });

  const expectedPurposeStatement = fallbackPurposeStatement(row, row.path);
  const expectedValues = {
    category: row.category,
    purpose: row.purpose,
    scope: row.scope,
    needs: row.needs,
    'purpose-statement': expectedPurposeStatement,
    pipeline: row.pipeline
  };

  Object.entries(expectedValues).forEach(([tag, expected]) => {
    const actual = String(tags[tag] || '').trim();
    if (actual !== String(expected || '').trim()) {
      failures.push(`@${tag} mismatch (expected "${expected}", found "${actual || '<missing>'}")`);
    }
  });

  if (kind.commentStyle === 'jsdoc') {
    if (row.dualmode) {
      if (String(tags.dualmode || '').trim() !== row.dualmode) {
        failures.push(`@dualmode mismatch (expected "${row.dualmode}", found "${tags.dualmode || '<missing>'}")`);
      }
    } else if (String(tags.dualmode || '').trim()) {
      failures.push('@dualmode must be omitted when data dualmode is empty');
    }
  } else if (String(tags.dualmode || '').trim()) {
    failures.push('@dualmode is not valid for hash-style headers');
  }

  return failures;
}

function verifyRow(row) {
  const fullPath = path.join(REPO_ROOT, row.path);
  if (!fs.existsSync(fullPath) || !fs.statSync(fullPath).isFile()) {
    return { status: 'error', path: row.path, reason: 'File does not exist.' };
  }

  let content = '';
  try {
    content = fs.readFileSync(fullPath, 'utf8');
  } catch (error) {
    return { status: 'error', path: row.path, reason: `Unable to read file: ${error.message}` };
  }

  let kind;
  try {
    kind = inferFileKind(row.path, content);
  } catch (error) {
    return { status: 'error', path: row.path, reason: error.message };
  }

  const headerInfo = extractTopHeader(content);
  if (!headerInfo) {
    return { status: 'error', path: row.path, reason: 'Missing top-of-file header.' };
  }

  if (headerInfo.style !== kind.commentStyle) {
    return {
      status: 'error',
      path: row.path,
      reason: `Header style mismatch (expected ${kind.commentStyle}, found ${headerInfo.style}).`
    };
  }

  const tags = parseTagMap(headerInfo.text);
  const failures = verifyRequiredTags(kind, tags, row);
  if (failures.length > 0) {
    return { status: 'error', path: row.path, reason: failures.join(' | ') };
  }

  return { status: 'ok', path: row.path, reason: 'Header verified.' };
}

function printSummary(summary) {
  console.log('');
  console.log('Summary:');
  console.log(`  filesProcessed: ${summary.filesProcessed}`);
  console.log(`  filesUpdated: ${summary.filesUpdated}`);
  console.log(`  filesSkipped: ${summary.filesSkipped}`);
  console.log(`  errors: ${summary.errors}`);
}

function run() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.error('Run with --help to see usage.');
    process.exit(1);
  }

  if (args.help) {
    printHelp();
    process.exit(0);
  }

  let rows;
  try {
    rows = loadClassificationData(args.dataPath);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  const selectedRows = applyFilter(rows, args.filter, args.excludeSubdirs);

  const summary = {
    filesProcessed: selectedRows.length,
    filesUpdated: 0,
    filesSkipped: 0,
    errors: 0
  };

  if (selectedRows.length === 0) {
    console.log('No files selected by the provided data/filter criteria.');
    printSummary(summary);
    process.exit(0);
  }

  selectedRows.forEach((row) => {
    const result = args.verify ? verifyRow(row) : applyRowTransform(row, args);

    if (result.status === 'update') {
      summary.filesUpdated += 1;
      const modeVerb = args.dryRun ? 'DRY-RUN' : 'UPDATED';
      console.log(`${modeVerb} ${result.path} - ${result.reason}`);
      return;
    }

    if (result.status === 'skip') {
      summary.filesSkipped += 1;
      console.log(`SKIPPED ${result.path} - ${result.reason}`);
      return;
    }

    if (result.status === 'ok') {
      console.log(`VERIFIED ${result.path} - ${result.reason}`);
      return;
    }

    summary.errors += 1;
    console.error(`ERROR ${result.path} - ${result.reason}`);
  });

  printSummary(summary);

  if (summary.errors > 0) {
    process.exit(1);
  }
}

if (require.main === module) {
  run();
}
