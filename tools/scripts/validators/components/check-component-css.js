#!/usr/bin/env node
/**
 * @script    check-component-css
 * @category  validator
 * @purpose   qa:repo-health
 * @scope     single-domain
 * @owner     docs
 * @needs     R-R10
 * @purpose-statement  Validates component files use CSS custom properties only. No ThemeData, no hardcoded hex, no inline styles.
 * @pipeline  PR (snippets/components/** scope)
 * @usage     node tools/scripts/validators/components/check-component-css.js [--path snippets/components/] [--fix]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const DEFAULT_TARGET = 'snippets/components';
const TODO_COMMENT = '/* TODO: replace with var(--) */';
const TOKEN_PLACEHOLDER = 'var(--lp-todo-color-token)';
const HARD_CODED_COLOR_LABEL = '[4.4]';
const NON_TOKEN_COLOR_LABEL = '[4.5]';
const THEME_DATA_LABEL = '[4.3]';
const INLINE_STYLE_LABEL = '[4.8]';

const COLOR_ATTR_RE = /\b(?:accentColor|background(?:Color)?|border(?:Color)?|caretColor|color|fill|floodColor|lightingColor|outlineColor|stopColor|stroke|textDecorationColor)\b/;
const CSS_COLOR_PROP_RE = /\b(?:accent-color|background(?:-color)?|border(?:-color)?|caret-color|color|fill|flood-color|lighting-color|outline-color|stop-color|stroke|text-decoration-color|--[\w-]+)\b/;
const COLOR_TOKEN_RE = /#[0-9a-fA-F]{3,8}\b|\brgba?\([^)]*\)|\bhsla?\([^)]*\)/g;
const INLINE_STYLE_RE = /style\s*=\s*\{\{/g;
const THEME_DATA_RE = /\bThemeData\b/g;

const CSS_NAMED_COLORS = new Set([
  'aliceblue',
  'antiquewhite',
  'aqua',
  'aquamarine',
  'azure',
  'beige',
  'bisque',
  'black',
  'blanchedalmond',
  'blue',
  'blueviolet',
  'brown',
  'burlywood',
  'cadetblue',
  'chartreuse',
  'chocolate',
  'coral',
  'cornflowerblue',
  'cornsilk',
  'crimson',
  'cyan',
  'darkblue',
  'darkcyan',
  'darkgoldenrod',
  'darkgray',
  'darkgreen',
  'darkgrey',
  'darkkhaki',
  'darkmagenta',
  'darkolivegreen',
  'darkorange',
  'darkorchid',
  'darkred',
  'darksalmon',
  'darkseagreen',
  'darkslateblue',
  'darkslategray',
  'darkslategrey',
  'darkturquoise',
  'darkviolet',
  'deeppink',
  'deepskyblue',
  'dimgray',
  'dimgrey',
  'dodgerblue',
  'firebrick',
  'floralwhite',
  'forestgreen',
  'fuchsia',
  'gainsboro',
  'ghostwhite',
  'gold',
  'goldenrod',
  'gray',
  'green',
  'greenyellow',
  'grey',
  'honeydew',
  'hotpink',
  'indianred',
  'indigo',
  'ivory',
  'khaki',
  'lavender',
  'lavenderblush',
  'lawngreen',
  'lemonchiffon',
  'lightblue',
  'lightcoral',
  'lightcyan',
  'lightgoldenrodyellow',
  'lightgray',
  'lightgreen',
  'lightgrey',
  'lightpink',
  'lightsalmon',
  'lightseagreen',
  'lightskyblue',
  'lightslategray',
  'lightslategrey',
  'lightsteelblue',
  'lightyellow',
  'lime',
  'limegreen',
  'linen',
  'magenta',
  'maroon',
  'mediumaquamarine',
  'mediumblue',
  'mediumorchid',
  'mediumpurple',
  'mediumseagreen',
  'mediumslateblue',
  'mediumspringgreen',
  'mediumturquoise',
  'mediumvioletred',
  'midnightblue',
  'mintcream',
  'mistyrose',
  'moccasin',
  'navajowhite',
  'navy',
  'oldlace',
  'olive',
  'olivedrab',
  'orange',
  'orangered',
  'orchid',
  'palegoldenrod',
  'palegreen',
  'paleturquoise',
  'palevioletred',
  'papayawhip',
  'peachpuff',
  'peru',
  'pink',
  'plum',
  'powderblue',
  'purple',
  'rebeccapurple',
  'red',
  'rosybrown',
  'royalblue',
  'saddlebrown',
  'salmon',
  'sandybrown',
  'seagreen',
  'seashell',
  'sienna',
  'silver',
  'skyblue',
  'slateblue',
  'slategray',
  'slategrey',
  'snow',
  'springgreen',
  'steelblue',
  'tan',
  'teal',
  'thistle',
  'tomato',
  'turquoise',
  'violet',
  'wheat',
  'white',
  'whitesmoke',
  'yellow',
  'yellowgreen'
]);

const ALLOWED_COLOR_KEYWORDS = new Set([
  'currentcolor',
  'inherit',
  'none',
  'transparent'
]);

function getRepoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], {
    encoding: 'utf8'
  });
  if (result.status === 0 && String(result.stdout || '').trim()) {
    return String(result.stdout || '').trim();
  }
  return process.cwd();
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function usage() {
  console.log(
    'Usage: node tools/scripts/validators/components/check-component-css.js [--path snippets/components/] [--fix]'
  );
}

function parseArgs(argv) {
  const args = {
    targetPath: DEFAULT_TARGET,
    fix: false,
    help: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

    if (token === '--fix') {
      args.fix = true;
      continue;
    }

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    if (token === '--path') {
      args.targetPath = String(argv[i + 1] || '').trim() || DEFAULT_TARGET;
      i += 1;
      continue;
    }

    if (token.startsWith('--path=')) {
      args.targetPath = token.slice('--path='.length).trim() || DEFAULT_TARGET;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  return args;
}

function resolveTargetPath(targetPath, options = {}) {
  const repoRoot = options.repoRoot || getRepoRoot();
  const allowOutsideRepo = Boolean(options.allowOutsideRepo);
  const raw = String(targetPath || DEFAULT_TARGET).trim();
  const candidate = raw || DEFAULT_TARGET;
  const absolute = path.isAbsolute(candidate)
    ? path.resolve(candidate)
    : path.resolve(repoRoot, candidate);
  const relative = toPosix(path.relative(repoRoot, absolute));

  if (!allowOutsideRepo && (relative === '..' || relative.startsWith('../'))) {
    throw new Error(`Path escapes repository root: ${candidate}`);
  }

  return {
    absolute,
    displayPath: !allowOutsideRepo || !(relative === '..' || relative.startsWith('../'))
      ? toPosix(relative)
      : absolute
  };
}

function collectTargetFiles(targetPath, options = {}) {
  const repoRoot = options.repoRoot || getRepoRoot();
  const allowOutsideRepo = Boolean(options.allowOutsideRepo);
  const target = resolveTargetPath(targetPath || DEFAULT_TARGET, {
    repoRoot,
    allowOutsideRepo
  });

  if (!fs.existsSync(target.absolute)) {
    throw new Error(`Target path does not exist: ${targetPath || DEFAULT_TARGET}`);
  }

  const out = [];

  function walk(absolutePath) {
    const stat = fs.statSync(absolutePath);
    if (stat.isDirectory()) {
      const entries = fs.readdirSync(absolutePath, { withFileTypes: true });
      entries
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach((entry) => {
          if (entry.name === '.git' || entry.name === 'node_modules') {
            return;
          }
          walk(path.join(absolutePath, entry.name));
        });
      return;
    }

    if (path.extname(absolutePath).toLowerCase() !== '.jsx') {
      return;
    }

    const relative = toPosix(path.relative(repoRoot, absolutePath));
    const isOutsideRepo = relative === '..' || relative.startsWith('../');
    out.push({
      absolutePath,
      displayPath: allowOutsideRepo && isOutsideRepo ? absolutePath : relative
    });
  }

  walk(target.absolute);
  return out.sort((a, b) => a.displayPath.localeCompare(b.displayPath));
}

function splitLines(content) {
  return String(content || '').split(/\r?\n/);
}

function maskComments(content) {
  let masked = '';
  let state = { type: 'code' };
  const stack = [];

  function push(nextState) {
    stack.push(state);
    state = nextState;
  }

  function pop() {
    state = stack.pop() || { type: 'code' };
  }

  for (let index = 0; index < content.length; index += 1) {
    const current = content[index];
    const next = content[index + 1] || '';
    const third = content[index + 2] || '';

    if (state.type === 'line-comment') {
      if (current === '\n') {
        masked += '\n';
        pop();
      } else {
        masked += current === '\r' ? '\r' : ' ';
      }
      continue;
    }

    if (state.type === 'block-comment') {
      if (current === '*' && next === '/') {
        masked += '  ';
        index += 1;
        pop();
      } else {
        masked += current === '\n' || current === '\r' ? current : ' ';
      }
      continue;
    }

    if (state.type === 'jsx-comment') {
      if (current === '*' && next === '/' && third === '}') {
        masked += '   ';
        index += 2;
        pop();
      } else {
        masked += current === '\n' || current === '\r' ? current : ' ';
      }
      continue;
    }

    if (state.type === 'single-quote') {
      masked += current;
      if (current === '\\' && next) {
        masked += next;
        index += 1;
        continue;
      }
      if (current === '\'') {
        pop();
      }
      continue;
    }

    if (state.type === 'double-quote') {
      masked += current;
      if (current === '\\' && next) {
        masked += next;
        index += 1;
        continue;
      }
      if (current === '"') {
        pop();
      }
      continue;
    }

    if (state.type === 'template') {
      if (current === '$' && next === '{') {
        masked += '${';
        index += 1;
        push({ type: 'template-expression', depth: 1 });
        continue;
      }

      masked += current;
      if (current === '\\' && next) {
        masked += next;
        index += 1;
        continue;
      }
      if (current === '`') {
        pop();
      }
      continue;
    }

    if (state.type === 'template-expression') {
      if (current === '{') {
        state.depth += 1;
        masked += current;
        continue;
      }
      if (current === '}') {
        state.depth -= 1;
        masked += current;
        if (state.depth === 0) {
          pop();
        }
        continue;
      }
    }

    if (current === '{' && next === '/' && third === '*') {
      masked += '   ';
      index += 2;
      push({ type: 'jsx-comment' });
      continue;
    }

    if (current === '/' && next === '/') {
      masked += '  ';
      index += 1;
      push({ type: 'line-comment' });
      continue;
    }

    if (current === '/' && next === '*') {
      masked += '  ';
      index += 1;
      push({ type: 'block-comment' });
      continue;
    }

    if (current === '\'') {
      masked += current;
      push({ type: 'single-quote' });
      continue;
    }

    if (current === '"') {
      masked += current;
      push({ type: 'double-quote' });
      continue;
    }

    if (current === '`') {
      masked += current;
      push({ type: 'template' });
      continue;
    }

    masked += current;
  }

  return masked;
}

function trimSnippet(line) {
  return String(line || '').replace(/\t/g, ' ').trim();
}

function sortFindings(findings) {
  return findings
    .slice()
    .sort((left, right) => (
      left.file.localeCompare(right.file) ||
      left.line - right.line ||
      left.column - right.column ||
      left.rule.localeCompare(right.rule)
    ));
}

function addFinding(findings, seen, finding) {
  const key = [
    finding.file,
    finding.line,
    finding.column,
    finding.rule,
    finding.message
  ].join('|');

  if (seen.has(key)) {
    return;
  }

  seen.add(key);
  findings.push(finding);
}

function addRange(lineRanges, lineNumber, start, end) {
  const ranges = lineRanges.get(lineNumber) || [];
  ranges.push({ start, end });
  lineRanges.set(lineNumber, ranges);
}

function overlapsExistingRange(lineRanges, lineNumber, start, end) {
  const ranges = lineRanges.get(lineNumber) || [];
  return ranges.some((range) => start < range.end && end > range.start);
}

function containsHardcodedColor(value) {
  resetColorTokenRegex();
  return COLOR_TOKEN_RE.test(String(value || ''));
}

function resetColorTokenRegex() {
  COLOR_TOKEN_RE.lastIndex = 0;
}

function isAllowedColorValue(value) {
  const normalized = String(value || '').trim().toLowerCase();
  if (!normalized) return false;
  if (ALLOWED_COLOR_KEYWORDS.has(normalized)) return true;
  return /var\(--/.test(normalized);
}

function isColorContext(line, startIndex) {
  const left = line.slice(0, startIndex);
  if (/(href|src)\s*=\s*\{?\s*["'][^"']*$/i.test(left)) {
    return false;
  }
  if (/url\(\s*["']?[^"')]*$/i.test(left)) {
    return false;
  }
  return true;
}

function tokenLabel(token) {
  return token.startsWith('#') ? 'Hardcoded hex' : 'Hardcoded color function';
}

function scanHardcodedColors(file, originalLine, maskedLine, lineNumber, findings, seen, lineRanges) {
  resetColorTokenRegex();
  let match = COLOR_TOKEN_RE.exec(maskedLine);

  while (match) {
    const token = match[0];
    const start = match.index;
    const end = start + token.length;

    if (isColorContext(maskedLine, start)) {
      addFinding(findings, seen, {
        file,
        line: lineNumber,
        column: start + 1,
        rule: HARD_CODED_COLOR_LABEL,
        message: `${tokenLabel(token)}: ${trimSnippet(originalLine)}`
      });
      addRange(lineRanges, lineNumber, start, end);
    }

    match = COLOR_TOKEN_RE.exec(maskedLine);
  }
}

function scanThemeData(file, originalLine, maskedLine, lineNumber, findings, seen) {
  let match = THEME_DATA_RE.exec(maskedLine);
  while (match) {
    addFinding(findings, seen, {
      file,
      line: lineNumber,
      column: match.index + 1,
      rule: THEME_DATA_LABEL,
      message: `ThemeData usage: ${trimSnippet(originalLine)}`
    });
    match = THEME_DATA_RE.exec(maskedLine);
  }
  THEME_DATA_RE.lastIndex = 0;
}

function scanInlineStyles(file, originalLine, maskedLine, lineNumber, findings, seen) {
  let match = INLINE_STYLE_RE.exec(maskedLine);
  while (match) {
    addFinding(findings, seen, {
      file,
      line: lineNumber,
      column: match.index + 1,
      rule: INLINE_STYLE_LABEL,
      message: `Inline style: ${trimSnippet(originalLine)}`
    });
    match = INLINE_STYLE_RE.exec(maskedLine);
  }
  INLINE_STYLE_RE.lastIndex = 0;
}

function scanNonTokenColorValues(file, originalLine, maskedLine, lineNumber, findings, seen, lineRanges) {
  const patterns = [
    /\b(?:accentColor|background(?:Color)?|border(?:Color)?|caretColor|color|fill|floodColor|lightingColor|outlineColor|stopColor|stroke|textDecorationColor)\b\s*(?:=|:)\s*\{?\s*(['"`])([^'"`\n]*?)\1/g,
    /\b(?:accent-color|background(?:-color)?|border(?:-color)?|caret-color|color|fill|flood-color|lighting-color|outline-color|stop-color|stroke|text-decoration-color|--[\w-]+)\b\s*:\s*([^;,\n}]+)/g
  ];

  patterns.forEach((pattern) => {
    let match = pattern.exec(maskedLine);

    while (match) {
      const rawValue = String(match[2] || match[1] || '').trim();
      const valueStart = match.index + match[0].indexOf(rawValue);
      const valueEnd = valueStart + rawValue.length;
      const lowerValue = rawValue.toLowerCase();

      if (
        rawValue &&
        !containsHardcodedColor(rawValue) &&
        !isAllowedColorValue(rawValue) &&
        !overlapsExistingRange(lineRanges, lineNumber, valueStart, valueEnd)
      ) {
        const names = rawValue.match(/\b[a-zA-Z]+\b/g) || [];
        const offendingName = names.find((name) => {
          const normalized = name.toLowerCase();
          return CSS_NAMED_COLORS.has(normalized) && !ALLOWED_COLOR_KEYWORDS.has(normalized);
        });

        if (offendingName) {
          const column = valueStart + lowerValue.indexOf(offendingName.toLowerCase()) + 1;
          addFinding(findings, seen, {
            file,
            line: lineNumber,
            column,
            rule: NON_TOKEN_COLOR_LABEL,
            message: `Non-token colour value: ${trimSnippet(originalLine)}`
          });
        }
      }

      match = pattern.exec(maskedLine);
    }
  });

  resetColorTokenRegex();
}

function collectJsSafeFixes(line) {
  const pattern = /((?:\b(?:const|let|return|var)\b[^"'`\n]*?=\s*|\b[A-Za-z_$][\w$]*\s*:\s*))(["'`])([^"'`\n]*?(?:#[0-9a-fA-F]{3,8}\b|\brgba?\([^)]*\)|\bhsla?\([^)]*\))[^"'`\n]*?)\2/g;
  const replacements = [];
  let match = pattern.exec(line);

  while (match) {
    const prefix = match[1];
    const quote = match[2];
    const value = match[3];
    const fullMatch = match[0];
    const start = match.index;
    const end = start + fullMatch.length;

    if (prefix.includes('<')) {
      match = pattern.exec(line);
      continue;
    }

    const replacedValue = value.replace(COLOR_TOKEN_RE, TOKEN_PLACEHOLDER);
    resetColorTokenRegex();

    if (replacedValue === value) {
      match = pattern.exec(line);
      continue;
    }

    const commentAlreadyPresent = /^\s*\/\*\s*TODO: replace with var\(--\)\s*\*\//.test(line.slice(end));
    const replacement = `${prefix}${quote}${replacedValue}${quote}${commentAlreadyPresent ? '' : ` ${TODO_COMMENT}`}`;

    replacements.push({
      start,
      end,
      replacement
    });

    match = pattern.exec(line);
  }

  return replacements;
}

function collectCssSafeFixes(line) {
  const pattern = /((?:^|[;{]\s*)(?:--[\w-]+|accent-color|background(?:-color)?|border(?:-color)?|caret-color|color|fill|flood-color|lighting-color|outline-color|stop-color|stroke|text-decoration-color)\s*:\s*)([^;]+)(;)/g;
  const replacements = [];
  let match = pattern.exec(line);

  while (match) {
    const prefix = match[1];
    const value = match[2];
    const suffix = match[3];
    const fullMatch = match[0];
    const start = match.index;
    const end = start + fullMatch.length;

    if (!containsHardcodedColor(value)) {
      match = pattern.exec(line);
      continue;
    }

    const replacedValue = value.replace(COLOR_TOKEN_RE, TOKEN_PLACEHOLDER);
    resetColorTokenRegex();
    const commentAlreadyPresent = /\/\*\s*TODO: replace with var\(--\)\s*\*\//.test(value);
    const replacement = `${prefix}${replacedValue.trim()}${commentAlreadyPresent ? '' : ` ${TODO_COMMENT}`}${suffix}`;

    replacements.push({
      start,
      end,
      replacement
    });

    match = pattern.exec(line);
  }

  return replacements;
}

function applyLineReplacements(line, replacements) {
  if (!replacements.length) {
    return { nextLine: line, applied: 0 };
  }

  const ordered = replacements
    .slice()
    .sort((left, right) => right.start - left.start);

  let nextLine = line;
  let applied = 0;

  ordered.forEach((replacement) => {
    nextLine =
      nextLine.slice(0, replacement.start) +
      replacement.replacement +
      nextLine.slice(replacement.end);
    applied += 1;
  });

  return { nextLine, applied };
}

function applyConservativeFixes(filePath, content) {
  const lines = splitLines(content);
  let applied = 0;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const jsFixes = collectJsSafeFixes(line);
    const cssFixes = collectCssSafeFixes(line);
    const allFixes = [...jsFixes, ...cssFixes];

    if (!allFixes.length) {
      continue;
    }

    const { nextLine, applied: lineApplied } = applyLineReplacements(line, allFixes);
    lines[index] = nextLine;
    applied += lineApplied;
  }

  return {
    changed: applied > 0,
    applied,
    content: lines.join('\n')
  };
}

function analyzeFile(filePath, options = {}) {
  const repoRoot = options.repoRoot || getRepoRoot();
  const displayPath = options.displayPath || toPosix(path.relative(repoRoot, filePath));
  const content = options.content != null
    ? String(options.content)
    : fs.readFileSync(filePath, 'utf8');
  const maskedContent = maskComments(content);
  const originalLines = splitLines(content);
  const maskedLines = splitLines(maskedContent);
  const findings = [];
  const seen = new Set();
  const lineRanges = new Map();

  for (let index = 0; index < originalLines.length; index += 1) {
    const originalLine = originalLines[index];
    const maskedLine = maskedLines[index] || '';
    const lineNumber = index + 1;

    if (!maskedLine.trim()) {
      continue;
    }

    scanThemeData(displayPath, originalLine, maskedLine, lineNumber, findings, seen);
    scanInlineStyles(displayPath, originalLine, maskedLine, lineNumber, findings, seen);
    scanHardcodedColors(displayPath, originalLine, maskedLine, lineNumber, findings, seen, lineRanges);
    scanNonTokenColorValues(displayPath, originalLine, maskedLine, lineNumber, findings, seen, lineRanges);
  }

  return {
    file: displayPath,
    findings: sortFindings(findings)
  };
}

function formatFinding(finding) {
  return `${finding.file}:${finding.line}: ${finding.rule} ${finding.message}`;
}

function run(options = {}) {
  const repoRoot = options.repoRoot || getRepoRoot();
  const allowOutsideRepo = Boolean(options.allowOutsideRepo);
  const targetPath = options.targetPath || DEFAULT_TARGET;
  const fix = Boolean(options.fix);
  const files = Array.isArray(options.files)
    ? options.files
    : collectTargetFiles(targetPath, { repoRoot, allowOutsideRepo });

  let appliedFixes = 0;
  const changedFiles = [];

  if (fix) {
    files.forEach((file) => {
      const original = fs.readFileSync(file.absolutePath, 'utf8');
      const fixed = applyConservativeFixes(file.absolutePath, original);
      if (!fixed.changed) {
        return;
      }

      fs.writeFileSync(file.absolutePath, fixed.content, 'utf8');
      appliedFixes += fixed.applied;
      changedFiles.push(file.displayPath);
    });
  }

  const findings = [];
  files.forEach((file) => {
    const result = analyzeFile(file.absolutePath, {
      repoRoot,
      displayPath: file.displayPath
    });
    findings.push(...result.findings);
  });

  return {
    repoRoot,
    targetPath,
    filesScanned: files.length,
    findings: sortFindings(findings),
    appliedFixes,
    changedFiles: changedFiles.sort(),
    exitCode: findings.length === 0 ? 0 : 1
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
      fix: args.fix
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  result.findings.forEach((finding) => {
    console.log(formatFinding(finding));
  });

  if (args.fix) {
    console.log(
      `Applied ${result.appliedFixes} conservative fix(es) across ${result.changedFiles.length} file(s).`
    );
    console.log(`Remaining findings: ${result.findings.length}`);
  } else if (result.findings.length === 0) {
    console.log('No component CSS violations found.');
  }

  process.exit(result.exitCode);
}

module.exports = {
  run,
  analyzeFile,
  collectTargetFiles,
  parseArgs
};
