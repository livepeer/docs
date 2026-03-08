#!/usr/bin/env node
/**
 * @script            check-component-docs
 * @summary           Validate component JSDoc coverage, prop documentation, and docs-entry coverage for snippets/components exports.
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             single-domain
 * @owner             docs
 * @needs             R-R10
 * @purpose-statement Validates component JSDoc coverage, prop documentation, and docs-entry coverage for exported components under snippets/components.
 * @pipeline          PR (snippets/components/** scope)
 * @usage             node tools/scripts/validators/components/check-component-docs.js [--path snippets/components] [--base-ref docs-v2]
 *   node tools/scripts/validators/components/check-component-docs.js [--path snippets/components] [--base-ref docs-v2]
 * 
 * @inputs
 *   --path <dir> Scan a component root (default: snippets/components).
 *   --base-ref <ref> Enable new-component docs-entry checks against a base ref.
 *   --help Show CLI usage information.
 * 
 * @outputs
 *   - Stable advisory findings in path:line format grouped by rules 4.9, 4.10, and 4.11.
 *   - Summary counts and 4.11 execution status in stdout.
 * 
 * @exit-codes
 *   0 = scan completed, including advisory findings
 *   1 = invalid arguments, unreadable inputs, or git/reference resolution failure
 * 
 * @examples
 *   node tools/scripts/validators/components/check-component-docs.js
 *   node tools/scripts/validators/components/check-component-docs.js --base-ref docs-v2
 * 
 * @notes
 *   Advisory-only validator: findings report documentation gaps but do not fail the scan.
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const DEFAULT_COMPONENTS_PATH = 'snippets/components';
const COMPONENT_LIBRARY_DIR = 'v2/resources/documentation-guide/component-library';
const RULES = ['4.9', '4.10', '4.11'];
const COMPONENT_EXPORT_NAME_RE = /^[A-Z][A-Za-z0-9_]*$/;

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

function usage() {
  console.log(
    [
      'Usage: node tools/scripts/validators/components/check-component-docs.js [options]',
      '',
      'Options:',
      `  --path <dir>        Component root to scan (default: ${DEFAULT_COMPONENTS_PATH})`,
      '  --base-ref <ref>    Base ref for added-component docs-entry checks',
      '  --help, -h          Show this help message'
    ].join('\n')
  );
}

function fail(message) {
  console.error(`❌ ${message}`);
  process.exit(1);
}

function parseArgs(argv) {
  const args = {
    targetPath: DEFAULT_COMPONENTS_PATH,
    baseRef: ''
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    if (token === '--path') {
      args.targetPath = String(argv[i + 1] || '').trim() || DEFAULT_COMPONENTS_PATH;
      i += 1;
      continue;
    }
    if (token.startsWith('--path=')) {
      args.targetPath = token.slice('--path='.length).trim() || DEFAULT_COMPONENTS_PATH;
      continue;
    }
    if (token === '--base-ref') {
      args.baseRef = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token.startsWith('--base-ref=')) {
      args.baseRef = token.slice('--base-ref='.length).trim();
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  return args;
}

function normalizeRepoPath(inputPath) {
  const raw = String(inputPath || '').trim();
  if (!raw) return DEFAULT_COMPONENTS_PATH;

  const absCandidate = path.isAbsolute(raw) ? path.resolve(raw) : path.resolve(REPO_ROOT, raw);
  const relative = path.relative(REPO_ROOT, absCandidate);

  if (!relative.startsWith('..') && !path.isAbsolute(relative)) {
    return toPosix(relative);
  }

  return toPosix(raw);
}

function readText(repoPath) {
  return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
}

function walkJsxFiles(repoPath) {
  const absRoot = path.join(REPO_ROOT, repoPath);
  const files = [];

  function walk(absDir) {
    const entries = fs.readdirSync(absDir, { withFileTypes: true });
    for (const entry of entries) {
      const absPath = path.join(absDir, entry.name);
      const relPath = toPosix(path.relative(REPO_ROOT, absPath));

      if (entry.isDirectory()) {
        if (entry.name === '.git' || entry.name === 'node_modules') continue;
        walk(absPath);
        continue;
      }

      if (!entry.isFile()) continue;
      if (!/\.jsx$/i.test(entry.name)) continue;
      files.push(relPath);
    }
  }

  walk(absRoot);
  return files.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
}

function compactWhitespace(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function escapeRegExp(value) {
  return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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

  for (let i = 0; i < input.length; i += 1) {
    const ch = input[i];

    if (quote) {
      current += ch;
      if (!escaped && ch === '\\') {
        escaped = true;
      } else if (!escaped && ch === quote) {
        quote = null;
      } else {
        escaped = false;
      }
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
      current += ch;
      continue;
    }

    if (ch === '(') depthParen += 1;
    else if (ch === ')') depthParen = Math.max(0, depthParen - 1);
    else if (ch === '{') depthBrace += 1;
    else if (ch === '}') depthBrace = Math.max(0, depthBrace - 1);
    else if (ch === '[') depthBracket += 1;
    else if (ch === ']') depthBracket = Math.max(0, depthBracket - 1);

    if (ch === separator && depthParen === 0 && depthBrace === 0 && depthBracket === 0) {
      parts.push(current.trim());
      current = '';
      continue;
    }

    current += ch;
  }

  if (current.trim()) {
    parts.push(current.trim());
  }

  return parts;
}

function splitTopLevelOnce(input, separator) {
  let depthParen = 0;
  let depthBrace = 0;
  let depthBracket = 0;
  let quote = null;
  let escaped = false;

  for (let i = 0; i < input.length; i += 1) {
    const ch = input[i];

    if (quote) {
      if (!escaped && ch === '\\') {
        escaped = true;
      } else if (!escaped && ch === quote) {
        quote = null;
      } else {
        escaped = false;
      }
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
      continue;
    }

    if (ch === '(') depthParen += 1;
    else if (ch === ')') depthParen = Math.max(0, depthParen - 1);
    else if (ch === '{') depthBrace += 1;
    else if (ch === '}') depthBrace = Math.max(0, depthBrace - 1);
    else if (ch === '[') depthBracket += 1;
    else if (ch === ']') depthBracket = Math.max(0, depthBracket - 1);

    if (ch === separator && depthParen === 0 && depthBrace === 0 && depthBracket === 0) {
      return [input.slice(0, i), input.slice(i + 1)];
    }
  }

  return [input, ''];
}

function findMatchingBracket(input, startIndex, openChar, closeChar) {
  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let i = startIndex; i < input.length; i += 1) {
    const ch = input[i];

    if (quote) {
      if (!escaped && ch === '\\') {
        escaped = true;
      } else if (!escaped && ch === quote) {
        quote = null;
      } else {
        escaped = false;
      }
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      quote = ch;
      continue;
    }

    if (ch === openChar) {
      depth += 1;
      continue;
    }
    if (ch === closeChar) {
      depth -= 1;
      if (depth === 0) return i;
    }
  }

  return -1;
}

function lineNumberAt(content, index) {
  return String(content || '').slice(0, Math.max(0, index)).split('\n').length;
}

function scanDeclarations(content) {
  const declarations = new Map();
  const patterns = [
    {
      regex: /(^|\n)\s*export\s+default\s+function\s+([A-Za-z_$][\w$]*)\s*\(([\s\S]*?)\)\s*\{/gm,
      hasParams: true
    },
    {
      regex: /(^|\n)\s*(?:export\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(([\s\S]*?)\)\s*\{/gm,
      hasParams: true
    },
    {
      regex: /(^|\n)\s*(?:export\s+)?(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*(?:async\s*)?\(([\s\S]*?)\)\s*=>/gm,
      hasParams: true
    },
    {
      regex: /(^|\n)\s*(?:export\s+)?(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*(?:async\s*)?([A-Za-z_$][\w$]*)\s*=>/gm,
      hasParams: true
    },
    {
      regex: /(^|\n)\s*(?:export\s+)?(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*(?:async\s*)?function(?:\s+[A-Za-z_$][\w$]*)?\s*\(([\s\S]*?)\)/gm,
      hasParams: true
    },
    {
      regex: /(^|\n)\s*(?:export\s+)?(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*([A-Za-z_$][\w$]*)\s*;?/gm,
      hasParams: false
    }
  ];

  patterns.forEach((patternConfig) => {
    let match = patternConfig.regex.exec(content);
    while (match) {
      const fullMatch = match[0];
      const name = match[2];
      const paramsText = patternConfig.hasParams ? (match[3] || '') : '';
      const declarationIndex = match.index + Math.max(0, fullMatch.search(/\S/));
      const existing = declarations.get(name);

      if (!existing || declarationIndex < existing.index) {
        declarations.set(name, {
          name,
          paramsText,
          index: declarationIndex,
          line: lineNumberAt(content, declarationIndex)
        });
      }

      match = patternConfig.regex.exec(content);
    }
  });

  return declarations;
}

function scanExports(content) {
  const exportsMap = new Map();

  function addExport(exportedName, localName, index) {
    if (!COMPONENT_EXPORT_NAME_RE.test(exportedName)) return;
    if (!exportsMap.has(exportedName)) {
      exportsMap.set(exportedName, {
        exportedName,
        localName,
        index
      });
    }
  }

  const inlineExportPattern = /(^|\n)\s*export\s+(?:const|let|var|function)\s+([A-Za-z_$][\w$]*)\b/gm;
  let match = inlineExportPattern.exec(content);
  while (match) {
    const fullMatch = match[0];
    const name = match[2];
    const index = match.index + Math.max(0, fullMatch.search(/\S/));
    addExport(name, name, index);
    match = inlineExportPattern.exec(content);
  }

  const defaultFunctionPattern = /(^|\n)\s*export\s+default\s+function\s+([A-Za-z_$][\w$]*)\b/gm;
  match = defaultFunctionPattern.exec(content);
  while (match) {
    const fullMatch = match[0];
    const name = match[2];
    const index = match.index + Math.max(0, fullMatch.search(/\S/));
    addExport(name, name, index);
    match = defaultFunctionPattern.exec(content);
  }

  const defaultReferencePattern = /(^|\n)\s*export\s+default\s+([A-Za-z_$][\w$]*)\s*;?/gm;
  match = defaultReferencePattern.exec(content);
  while (match) {
    const fullMatch = match[0];
    const name = match[2];
    const index = match.index + Math.max(0, fullMatch.search(/\S/));
    addExport(name, name, index);
    match = defaultReferencePattern.exec(content);
  }

  const exportListPattern = /export\s*{\s*([\s\S]*?)\s*}\s*;?/gm;
  match = exportListPattern.exec(content);
  while (match) {
    const body = stripComments(match[1]);
    splitTopLevel(body, ',').forEach((entry) => {
      const cleaned = stripComments(entry);
      if (!cleaned) return;

      const aliasMatch = cleaned.match(/^([A-Za-z_$][\w$]*)\s+as\s+([A-Za-z_$][\w$]*)$/);
      if (aliasMatch) {
        addExport(aliasMatch[2], aliasMatch[1], match.index);
      } else if (/^[A-Za-z_$][\w$]*$/.test(cleaned)) {
        addExport(cleaned, cleaned, match.index);
      }
    });
    match = exportListPattern.exec(content);
  }

  return [...exportsMap.values()].sort((a, b) => a.exportedName.localeCompare(b.exportedName, 'en', { sensitivity: 'base' }));
}

function getImmediateJsdoc(content, declarationIndex) {
  let cursor = declarationIndex - 1;

  while (cursor >= 0 && /\s/.test(content[cursor])) {
    cursor -= 1;
  }

  if (cursor < 1) return null;
  if (content[cursor] !== '/' || content[cursor - 1] !== '*') {
    return null;
  }

  const endIndex = cursor + 1;
  const startIndex = content.lastIndexOf('/*', cursor - 1);
  if (startIndex === -1) return null;

  const raw = content.slice(startIndex, endIndex + 1);
  if (!raw.startsWith('/**')) {
    return null;
  }

  return {
    start: startIndex,
    end: endIndex + 1,
    text: raw,
    line: lineNumberAt(content, startIndex)
  };
}

function normalizeDocPropName(token) {
  let value = String(token || '').trim();
  if (!value) return null;

  if (value.startsWith('[') && value.endsWith(']')) {
    value = value.slice(1, -1).trim();
  }

  if (value.includes('=')) {
    value = value.split('=')[0].trim();
  }

  if (value.startsWith('props.')) {
    const remainder = value.slice('props.'.length).trim();
    if (/^[A-Za-z_$][\w$]*$/.test(remainder)) return remainder;
    return null;
  }

  if (/^[A-Za-z_$][\w$]*$/.test(value)) {
    return value;
  }

  return null;
}

function collectDocumentedProps(jsdocText) {
  const documented = new Set();
  const pattern = /@(param|prop)\s+\{[^}]+\}\s+([^\s*]+)/g;
  let match = pattern.exec(jsdocText);

  while (match) {
    const normalized = normalizeDocPropName(match[2]);
    if (normalized) documented.add(normalized);
    match = pattern.exec(jsdocText);
  }

  return documented;
}

function extractPropsFromParams(paramsText) {
  const raw = String(paramsText || '');
  const trimmed = compactWhitespace(raw);

  if (!trimmed) {
    return { status: 'ok', props: [] };
  }

  if (trimmed.startsWith('{')) {
    const closeIndex = findMatchingBracket(trimmed, 0, '{', '}');
    if (closeIndex === -1) {
      return { status: 'unresolved', reason: 'unmatched object destructuring in signature' };
    }

    const body = trimmed.slice(1, closeIndex).trim();
    if (!body) {
      return { status: 'ok', props: [] };
    }

    const props = splitTopLevel(body, ',')
      .map((entry) => stripComments(entry))
      .map((entry) => entry.trim())
      .filter(Boolean)
      .map((entry) => {
        if (entry.startsWith('...')) return null;

        const [leftRaw] = splitTopLevelOnce(entry, '=');
        const left = leftRaw.trim();
        if (!left) return null;

        const [propToken] = splitTopLevelOnce(left, ':');
        const propName = propToken.trim().replace(/^['"]|['"]$/g, '');
        if (!/^[A-Za-z_$][\w$]*$/.test(propName)) return null;

        return { name: propName };
      })
      .filter(Boolean);

    return { status: 'ok', props };
  }

  const params = splitTopLevel(trimmed, ',')
    .map((entry) => stripComments(entry))
    .map((entry) => entry.trim())
    .filter(Boolean);

  if (params.length === 1 && /^(props|componentProps)$/i.test(params[0])) {
    return {
      status: 'unresolved',
      reason: `signature uses generic object parameter \`${params[0]}\``
    };
  }

  const props = [];
  for (const entry of params) {
    if (entry.startsWith('...')) continue;

    const [leftRaw] = splitTopLevelOnce(entry, '=');
    const name = leftRaw.trim();
    if (!/^[A-Za-z_$][\w$]*$/.test(name)) {
      return { status: 'unresolved', reason: `unsupported parameter pattern \`${compactWhitespace(entry)}\`` };
    }
    props.push({ name });
  }

  return { status: 'ok', props };
}

function addFinding(findings, finding) {
  findings.push({
    path: finding.path,
    line: Number.isFinite(Number(finding.line)) ? Number(finding.line) : 1,
    rule: finding.rule,
    message: finding.message
  });
}

function analyzeComponentFile(repoPath, findings) {
  const content = readText(repoPath);
  const declarations = scanDeclarations(content);
  const exports = scanExports(content);

  exports.forEach((exportedComponent) => {
    const declaration = declarations.get(exportedComponent.localName);

    if (!declaration) {
      addFinding(findings, {
        path: repoPath,
        line: lineNumberAt(content, exportedComponent.index),
        rule: '4.9',
        message: `${exportedComponent.exportedName}: could not resolve exported declaration for JSDoc validation`
      });
      return;
    }

    const jsdoc = getImmediateJsdoc(content, declaration.index);
    if (!jsdoc) {
      addFinding(findings, {
        path: repoPath,
        line: declaration.line,
        rule: '4.9',
        message: `${exportedComponent.exportedName}: missing an immediately preceding JSDoc block`
      });
      return;
    }

    const extracted = extractPropsFromParams(declaration.paramsText);
    if (extracted.status !== 'ok') {
      addFinding(findings, {
        path: repoPath,
        line: declaration.line,
        rule: '4.10',
        message: `${exportedComponent.exportedName}: skipped prop coverage check (${extracted.reason})`
      });
      return;
    }

    if (!extracted.props.length) {
      return;
    }

    const documentedProps = collectDocumentedProps(jsdoc.text);
    const undocumented = extracted.props
      .map((prop) => prop.name)
      .filter((name) => !documentedProps.has(name));

    if (undocumented.length > 0) {
      addFinding(findings, {
        path: repoPath,
        line: declaration.line,
        rule: '4.10',
        message: `${exportedComponent.exportedName}: undocumented props: ${undocumented.join(', ')}`
      });
    }
  });
}

function loadComponentDocsIndex() {
  const docsRoot = path.join(REPO_ROOT, COMPONENT_LIBRARY_DIR);
  const docsEntries = [];

  if (!fs.existsSync(docsRoot) || !fs.statSync(docsRoot).isDirectory()) {
    throw new Error(`Component library docs directory not found: ${COMPONENT_LIBRARY_DIR}`);
  }

  const entries = fs.readdirSync(docsRoot, { withFileTypes: true });
  entries.forEach((entry) => {
    if (!entry.isFile() || !/\.mdx$/i.test(entry.name)) return;
    const repoPath = toPosix(path.join(COMPONENT_LIBRARY_DIR, entry.name));
    docsEntries.push({
      path: repoPath,
      content: readText(repoPath)
    });
  });

  return docsEntries.sort((a, b) => a.path.localeCompare(b.path, 'en', { sensitivity: 'base' }));
}

function componentHasDocsEntry(componentName, docsEntries) {
  const escapedName = escapeRegExp(componentName);
  const headingPattern = new RegExp(`^#{1,6}\\s+.*\\b${escapedName}\\b.*$`, 'm');
  const responseFieldPattern = new RegExp(`<ResponseField\\s+name=["']${escapedName}["']`);

  return docsEntries.some((entry) => headingPattern.test(entry.content) || responseFieldPattern.test(entry.content));
}

function runGit(args) {
  const result = spawnSync('git', args, { cwd: REPO_ROOT, encoding: 'utf8' });
  if (result.status !== 0) {
    const stderr = String(result.stderr || '').trim();
    const stdout = String(result.stdout || '').trim();
    throw new Error(stderr || stdout || `git ${args.join(' ')} failed`);
  }
  return String(result.stdout || '').trim();
}

function resolveBaseRef(baseRef) {
  const candidates = [String(baseRef || '').trim(), `origin/${String(baseRef || '').trim()}`].filter(Boolean);

  for (const candidate of candidates) {
    try {
      runGit(['rev-parse', '--verify', candidate]);
      return candidate;
    } catch (_error) {
      continue;
    }
  }

  throw new Error(`Unable to resolve base ref: ${baseRef}`);
}

function getAddedComponentFiles(targetPath, resolvedBaseRef) {
  const output = runGit(['diff', '--name-status', '--diff-filter=A', `${resolvedBaseRef}...HEAD`, '--', targetPath]);
  if (!output) return [];

  return output
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.split('\t').slice(-1)[0].trim())
    .map(toPosix)
    .filter((repoPath) => repoPath === targetPath || repoPath.startsWith(`${targetPath}/`))
    .filter((repoPath) => /\.jsx$/i.test(repoPath))
    .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
}

function analyzeNewComponentDocs(targetPath, baseRef, findings) {
  const resolvedBaseRef = resolveBaseRef(baseRef);
  const docsEntries = loadComponentDocsIndex();
  const newFiles = getAddedComponentFiles(targetPath, resolvedBaseRef);

  newFiles.forEach((repoPath) => {
    const content = readText(repoPath);
    const exports = scanExports(content);
    const declarations = scanDeclarations(content);

    exports
      .filter((entry) => COMPONENT_EXPORT_NAME_RE.test(entry.exportedName))
      .forEach((entry) => {
        if (componentHasDocsEntry(entry.exportedName, docsEntries)) return;

        const declaration = declarations.get(entry.localName);
        addFinding(findings, {
          path: repoPath,
          line: declaration ? declaration.line : 1,
          rule: '4.11',
          message: `${entry.exportedName}: new component is missing an English component-library docs entry`
        });
      });
  });

  return {
    executed: true,
    resolvedBaseRef,
    addedFiles: newFiles.length
  };
}

function printFindings(findings) {
  const sorted = [...findings].sort((a, b) => {
    if (a.path !== b.path) return a.path.localeCompare(b.path, 'en', { sensitivity: 'base' });
    if (a.line !== b.line) return a.line - b.line;
    if (a.rule !== b.rule) return a.rule.localeCompare(b.rule, 'en', { sensitivity: 'base' });
    return a.message.localeCompare(b.message, 'en', { sensitivity: 'base' });
  });

  sorted.forEach((finding) => {
    console.log(`${finding.path}:${finding.line}: [${finding.rule}] ${finding.message}`);
  });

  return sorted;
}

function printSummary(findings, docsEntryStatus) {
  const counts = new Map(RULES.map((rule) => [rule, 0]));
  findings.forEach((finding) => {
    counts.set(finding.rule, (counts.get(finding.rule) || 0) + 1);
  });

  console.log('');
  console.log('Summary:');
  RULES.forEach((rule) => {
    console.log(`  [${rule}] ${counts.get(rule) || 0} finding(s)`);
  });
  console.log(`  Total ${findings.length} finding(s)`);

  if (docsEntryStatus.executed) {
    console.log(`Rule 4.11: executed against ${docsEntryStatus.resolvedBaseRef} (${docsEntryStatus.addedFiles} added file(s))`);
  } else {
    console.log('Rule 4.11: skipped (no --base-ref provided)');
  }
}

function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    fail(error.message);
  }

  if (args.help) {
    usage();
    process.exit(0);
  }

  const targetPath = normalizeRepoPath(args.targetPath);
  const targetAbsPath = path.join(REPO_ROOT, targetPath);

  if (!fs.existsSync(targetAbsPath)) {
    fail(`Target path does not exist: ${targetPath}`);
  }
  if (!fs.statSync(targetAbsPath).isDirectory()) {
    fail(`Target path is not a directory: ${targetPath}`);
  }

  const findings = [];
  const docsEntryStatus = {
    executed: false,
    resolvedBaseRef: '',
    addedFiles: 0
  };

  let files;
  try {
    files = walkJsxFiles(targetPath);
  } catch (error) {
    fail(`Unable to walk component files under ${targetPath}: ${error.message}`);
  }

  try {
    files.forEach((repoPath) => analyzeComponentFile(repoPath, findings));
  } catch (error) {
    fail(`Component scan failed: ${error.message}`);
  }

  if (args.baseRef) {
    try {
      const result = analyzeNewComponentDocs(targetPath, args.baseRef, findings);
      docsEntryStatus.executed = result.executed;
      docsEntryStatus.resolvedBaseRef = result.resolvedBaseRef;
      docsEntryStatus.addedFiles = result.addedFiles;
    } catch (error) {
      fail(`Rule 4.11 failed: ${error.message}`);
    }
  }

  const sortedFindings = printFindings(findings);
  if (sortedFindings.length === 0) {
    console.log('No findings.');
  }
  printSummary(sortedFindings, docsEntryStatus);
  process.exit(0);
}

if (require.main === module) {
  main();
}

module.exports = {
  analyzeComponentFile,
  analyzeNewComponentDocs,
  collectDocumentedProps,
  extractPropsFromParams,
  getImmediateJsdoc,
  scanDeclarations,
  scanExports
};
