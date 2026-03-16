#!/usr/bin/env node
/**
 * @script            check-naming-conventions
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             tools/scripts/validators/components, tests/run-all.js, tests/run-pr-checks.js, snippets/components
 * @owner             docs
 * @needs             R-R10
 * @purpose-statement Validates active component filenames against directory-aware file naming and PascalCase exports under snippets/components.
 * @pipeline          P1, P3
 * @usage             node tools/scripts/validators/components/check-naming-conventions.js [--path snippets/components] [--files path[,path...]] [--mode migration|strict-camel]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const DEFAULT_TARGET = 'snippets/components';
const DEFAULT_MODE = process.env.LP_COMPONENT_NAMING_MODE || 'strict-camel';
const VALID_MODES = new Set(['migration', 'strict-camel']);
const FILE_RULE_LABEL = '[4.6]';
const EXPORT_RULE_LABEL = '[4.7]';
const CAMEL_FILE_NAME_RE = /^[a-z][a-zA-Z0-9]*\.jsx$/;
const KEBAB_FILE_NAME_RE = /^[a-z][a-z0-9-]*\.jsx$/;
const PASCAL_FILE_NAME_RE = /^[A-Z][a-zA-Z0-9]*\.jsx$/;
const EXPORT_NAME_RE = /^[A-Z][a-zA-Z0-9]*$/;

function getRepoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' });
  if (result.status === 0 && String(result.stdout || '').trim()) {
    return String(result.stdout || '').trim();
  }
  return process.cwd();
}

const REPO_ROOT = getRepoRoot();
if (process.cwd() !== REPO_ROOT) {
  process.chdir(REPO_ROOT);
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function usage() {
  console.log(
    'Usage: node tools/scripts/validators/components/check-naming-conventions.js [--path snippets/components] [--files path[,path...]] [--mode migration|strict-camel]'
  );
}

function parseArgs(argv) {
  const args = {
    targetPath: DEFAULT_TARGET,
    files: [],
    mode: DEFAULT_MODE,
    help: false
  };

  for (let index = 0; index < argv.length; index += 1) {
    const token = argv[index];

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    if (token === '--path') {
      args.targetPath = String(argv[index + 1] || '').trim() || DEFAULT_TARGET;
      index += 1;
      continue;
    }

    if (token.startsWith('--path=')) {
      args.targetPath = token.slice('--path='.length).trim() || DEFAULT_TARGET;
      continue;
    }

    if (token === '--files' || token === '--file') {
      const raw = String(argv[index + 1] || '').trim();
      if (raw) {
        raw
          .split(',')
          .map((part) => part.trim())
          .filter(Boolean)
          .forEach((part) => args.files.push(part));
      }
      index += 1;
      continue;
    }

    if (token.startsWith('--files=')) {
      token
        .slice('--files='.length)
        .split(',')
        .map((part) => part.trim())
        .filter(Boolean)
        .forEach((part) => args.files.push(part));
      continue;
    }

    if (token.startsWith('--file=')) {
      token
        .slice('--file='.length)
        .split(',')
        .map((part) => part.trim())
        .filter(Boolean)
        .forEach((part) => args.files.push(part));
      continue;
    }

    if (token === '--mode') {
      args.mode = String(argv[index + 1] || '').trim() || DEFAULT_MODE;
      index += 1;
      continue;
    }

    if (token.startsWith('--mode=')) {
      args.mode = token.slice('--mode='.length).trim() || DEFAULT_MODE;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  args.files = [...new Set(args.files)];
  if (!VALID_MODES.has(args.mode)) {
    throw new Error(`Invalid mode: ${args.mode}`);
  }
  return args;
}

function resolveRepoPath(inputPath) {
  const raw = String(inputPath || '').trim();
  const candidate = raw || DEFAULT_TARGET;
  let absolute = path.isAbsolute(candidate)
    ? path.resolve(candidate)
    : path.resolve(REPO_ROOT, candidate);

  if (fs.existsSync(absolute)) {
    const realPath = fs.realpathSync.native
      ? fs.realpathSync.native(absolute)
      : fs.realpathSync(absolute);
    absolute = path.resolve(realPath);
  }

  const relative = toPosix(path.relative(REPO_ROOT, absolute));

  if (relative === '..' || relative.startsWith('../')) {
    throw new Error(`Path escapes repository root: ${candidate}`);
  }

  return {
    absolute,
    relative
  };
}

function shouldSkipDirectory(displayPath) {
  return (
    displayPath.includes('/_archive/') ||
    displayPath.endsWith('/_archive') ||
    displayPath.includes('/node_modules/') ||
    displayPath.includes('/.git/')
  );
}

function walkJsxFiles(absDir, out = []) {
  const entries = fs.readdirSync(absDir, { withFileTypes: true });

  entries.forEach((entry) => {
    const absPath = path.join(absDir, entry.name);
    const displayPath = toPosix(path.relative(REPO_ROOT, absPath));

    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name === '_archive') {
      return;
    }

    if (entry.isDirectory()) {
      if (shouldSkipDirectory(displayPath)) return;
      walkJsxFiles(absPath, out);
      return;
    }

    if (!entry.isFile() || path.extname(entry.name).toLowerCase() !== '.jsx') {
      return;
    }

    if (displayPath.includes('/_archive/')) return;

    out.push({
      absolutePath: absPath,
      displayPath
    });
  });

  return out;
}

function collectTargetFiles(targetPath = DEFAULT_TARGET, options = {}) {
  const explicitFiles = Array.isArray(options.files) ? options.files : [];
  if (explicitFiles.length > 0) {
    const expanded = [];

    explicitFiles.forEach((inputPath) => {
      const resolved = resolveRepoPath(inputPath);
      if (!fs.existsSync(resolved.absolute)) {
        throw new Error(`Path not found: ${inputPath}`);
      }

      const stat = fs.statSync(resolved.absolute);
      if (stat.isDirectory()) {
        walkJsxFiles(resolved.absolute, expanded);
        return;
      }

      if (path.extname(resolved.absolute).toLowerCase() !== '.jsx') {
        return;
      }

      if (resolved.relative.includes('/_archive/')) {
        return;
      }

      expanded.push({
        absolutePath: resolved.absolute,
        displayPath: resolved.relative
      });
    });

    return sortFiles(dedupeFiles(expanded));
  }

  const resolved = resolveRepoPath(targetPath);
  if (!fs.existsSync(resolved.absolute)) {
    throw new Error(`Path not found: ${targetPath}`);
  }

  const stat = fs.statSync(resolved.absolute);
  if (stat.isFile()) {
    if (path.extname(resolved.absolute).toLowerCase() !== '.jsx') {
      return [];
    }

    if (resolved.relative.includes('/_archive/')) {
      return [];
    }

    return [
      {
        absolutePath: resolved.absolute,
        displayPath: resolved.relative
      }
    ];
  }

  return sortFiles(walkJsxFiles(resolved.absolute));
}

function dedupeFiles(files) {
  const seen = new Set();
  return files.filter((file) => {
    const key = file.absolutePath;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function sortFiles(files) {
  return [...files].sort((left, right) =>
    left.displayPath.localeCompare(right.displayPath, 'en', { sensitivity: 'base' })
  );
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
    const ch = input[index];

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

function lineNumberAt(content, index) {
  return String(content || '').slice(0, Math.max(0, index)).split('\n').length;
}

function makeFinding(file, line, rule, message, name) {
  return {
    file,
    line: Number.isInteger(line) && line > 0 ? line : 1,
    rule,
    message,
    name: name || ''
  };
}

function addFinding(findings, finding) {
  const dedupeKey = `${finding.file}:${finding.line}:${finding.rule}:${finding.name}:${finding.message}`;
  if (!findings._seen.has(dedupeKey)) {
    findings._seen.add(dedupeKey);
    findings.items.push(finding);
  }
}

function scanExports(content) {
  const exportsList = [];
  const addExport = (name, index, meta = {}) => {
    exportsList.push({
      name: String(name || '').trim(),
      index,
      line: lineNumberAt(content, index),
      isAnonymousDefault: Boolean(meta.isAnonymousDefault)
    });
  };

  let match;
  const inlineExportPattern = /(^|\n)\s*export\s+(?:const|let|var|function|class)\s+([A-Za-z_$][\w$]*)\b/gm;
  while ((match = inlineExportPattern.exec(content)) !== null) {
    const fullMatch = match[0];
    addExport(match[2], match.index + Math.max(0, fullMatch.search(/\S/)));
  }

  const defaultFunctionPattern = /(^|\n)\s*export\s+default\s+(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\b/gm;
  while ((match = defaultFunctionPattern.exec(content)) !== null) {
    const fullMatch = match[0];
    addExport(match[2], match.index + Math.max(0, fullMatch.search(/\S/)));
  }

  const defaultClassPattern = /(^|\n)\s*export\s+default\s+class\s+([A-Za-z_$][\w$]*)\b/gm;
  while ((match = defaultClassPattern.exec(content)) !== null) {
    const fullMatch = match[0];
    addExport(match[2], match.index + Math.max(0, fullMatch.search(/\S/)));
  }

  const defaultReferencePattern = /(^|\n)\s*export\s+default\s+(?!async\s+function\b)(?!function\b)(?!class\b)([A-Za-z_$][\w$]*)\s*;?/gm;
  while ((match = defaultReferencePattern.exec(content)) !== null) {
    const fullMatch = match[0];
    addExport(match[2], match.index + Math.max(0, fullMatch.search(/\S/)));
  }

  const exportListPattern = /export\s*{\s*([\s\S]*?)\s*}\s*(?:from\s*['"][^'"]+['"])?\s*;?/gm;
  while ((match = exportListPattern.exec(content)) !== null) {
    const body = stripComments(match[1]);
    splitTopLevel(body, ',').forEach((entry) => {
      const cleaned = stripComments(entry);
      if (!cleaned) return;

      const aliasMatch = cleaned.match(/^([A-Za-z_$][\w$]*|default)\s+as\s+([A-Za-z_$][\w$]*)$/);
      if (aliasMatch) {
        addExport(aliasMatch[2], match.index);
        return;
      }

      if (/^[A-Za-z_$][\w$]*$/.test(cleaned)) {
        addExport(cleaned, match.index);
      }
    });
  }

  const namespaceExportPattern = /(^|\n)\s*export\s+\*\s+as\s+([A-Za-z_$][\w$]*)\b/gm;
  while ((match = namespaceExportPattern.exec(content)) !== null) {
    const fullMatch = match[0];
    addExport(match[2], match.index + Math.max(0, fullMatch.search(/\S/)));
  }

  const anonymousPatterns = [
    /(^|\n)\s*export\s+default\s+(?:async\s+)?function\s*\(/gm,
    /(^|\n)\s*export\s+default\s+class\s*(?:\{|extends\b)/gm,
    /(^|\n)\s*export\s+default\s+\(/gm,
    /(^|\n)\s*export\s+default\s+(?:async\s+)?\([^)]*\)\s*=>/gm,
    /(^|\n)\s*export\s+default\s+(?:async\s+)?[A-Za-z_$][\w$]*\s*=>/gm
  ];

  anonymousPatterns.forEach((pattern) => {
    let anonymousMatch = pattern.exec(content);
    while (anonymousMatch !== null) {
      const fullMatch = anonymousMatch[0];
      addExport('(anonymous default export)', anonymousMatch.index + Math.max(0, fullMatch.search(/\S/)), {
        isAnonymousDefault: true
      });
      anonymousMatch = pattern.exec(content);
    }
  });

  return exportsList;
}

function usesDisplayKebabCase(displayPath) {
  return toPosix(displayPath).startsWith('snippets/components/display/');
}

function isAllowedFilename(fileName, mode, displayPath) {
  if (mode === 'strict-camel') {
    if (usesDisplayKebabCase(displayPath)) {
      return KEBAB_FILE_NAME_RE.test(fileName);
    }
    return CAMEL_FILE_NAME_RE.test(fileName);
  }

  return (
    CAMEL_FILE_NAME_RE.test(fileName) ||
    KEBAB_FILE_NAME_RE.test(fileName) ||
    PASCAL_FILE_NAME_RE.test(fileName)
  );
}

function fileNamingMessage(mode, fileName, displayPath) {
  if (mode === 'strict-camel') {
    if (usesDisplayKebabCase(displayPath)) {
      return `Filename must be kebab-case in display/: ${fileName}`;
    }
    return `Filename must be camelCase: ${fileName}`;
  }
  return `Filename must be legacy-compatible or camelCase during migration: ${fileName}`;
}

function analyzeFile(absolutePath, options = {}) {
  const displayPath = options.displayPath || toPosix(path.relative(REPO_ROOT, absolutePath));
  const mode = options.mode || DEFAULT_MODE;
  const findings = {
    items: [],
    _seen: new Set()
  };
  const content = fs.readFileSync(absolutePath, 'utf8');
  const fileName = path.basename(displayPath);

  if (!isAllowedFilename(fileName, mode, displayPath)) {
    addFinding(
      findings,
      makeFinding(
        displayPath,
        1,
        FILE_RULE_LABEL,
        fileNamingMessage(mode, fileName, displayPath),
        fileName
      )
    );
  }

  scanExports(content).forEach((entry) => {
    if (entry.isAnonymousDefault) {
      addFinding(
        findings,
        makeFinding(
          displayPath,
          entry.line,
          EXPORT_RULE_LABEL,
          'Anonymous default exports are not allowed; export a PascalCase name instead.',
          'default'
        )
      );
      return;
    }

    if (!EXPORT_NAME_RE.test(entry.name)) {
      addFinding(
        findings,
        makeFinding(
          displayPath,
          entry.line,
          EXPORT_RULE_LABEL,
          `Export name must be PascalCase: ${entry.name}`,
          entry.name
        )
      );
    }
  });

  return findings.items;
}

function sortFindings(findings) {
  return [...findings].sort((left, right) => {
    const fileComparison = left.file.localeCompare(right.file, 'en', { sensitivity: 'base' });
    if (fileComparison !== 0) return fileComparison;
    if (left.line !== right.line) return left.line - right.line;
    const ruleComparison = left.rule.localeCompare(right.rule);
    if (ruleComparison !== 0) return ruleComparison;
    return left.message.localeCompare(right.message);
  });
}

function formatFinding(finding) {
  return `${finding.file}:${finding.line} ${finding.rule} ${finding.message}`;
}

function run(options = {}) {
  const mode = options.mode || DEFAULT_MODE;
  if (!VALID_MODES.has(mode)) {
    throw new Error(`Invalid mode: ${mode}`);
  }

  const files = collectTargetFiles(options.targetPath || DEFAULT_TARGET, {
    files: options.files
  });
  const findings = [];

  files.forEach((file) => {
    findings.push(...analyzeFile(file.absolutePath, { displayPath: file.displayPath, mode }));
  });

  const sortedFindings = sortFindings(findings);
  return {
    mode,
    filesScanned: files.length,
    findings: sortedFindings,
    exitCode: sortedFindings.length === 0 ? 0 : 1
  };
}

if (require.main === module) {
  let args;

  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(`Error: ${error.message}`);
    usage();
    process.exit(1);
  }

  if (args.help) {
    usage();
    process.exit(0);
  }

  let result;
  try {
    result = run({
      targetPath: args.targetPath,
      files: args.files,
      mode: args.mode
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  result.findings.forEach((finding) => {
    console.log(formatFinding(finding));
  });

  if (result.findings.length === 0) {
    console.log(`No component naming violations found (${result.mode}).`);
  }

  process.exit(result.exitCode);
}

module.exports = {
  analyzeFile,
  collectTargetFiles,
  formatFinding,
  parseArgs,
  run,
  scanExports,
  sortFindings
};
