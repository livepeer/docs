#!/usr/bin/env node
/**
 * @script            check-grammar-en-gb
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tools/scripts/validators/content, tools/script-index.md, tests/script-index.md, docs-guide/indexes/scripts-index.mdx, v2
 * @owner             docs
 * @needs             SE-1-11, S-1.15
 * @purpose-statement Deterministic UK English grammar checker for prose content with optional conservative autofix for safe rules.
 * @pipeline          manual/CI validator for English v2 docs and explicit content files
 * @dualmode          --check (default) | --fix (safe in-place rewrites)
 * @usage             node tools/scripts/validators/content/check-grammar-en-gb.js [--scope full|changed] [--file <path[,path...]>] [--fix] [--strict]
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const DEFAULT_SCOPE = 'full';
const DEFAULT_REPORT_RULE_IDS = new Set([
  'double-space',
  'repeated-word',
  'an-before-consonant',
  'sentence-lowercase',
  'its-vs-its'
]);
const TERMINAL_PUNCTUATION_RE = /[.!?:;][)"'\]]*\s*$/;
const URL_RE = /\b(?:https?:\/\/|www\.)[^\s<>()]+/g;
const RULES = [
  {
    id: 'double-space',
    pattern: /  +/g,
    message: 'Double space detected',
    fixable: true,
    fix: () => ' '
  },
  {
    id: 'repeated-word',
    pattern: /\b(\w+)\s+\1\b/gi,
    message: 'Repeated word: "$1 $1"',
    fixable: true,
    fix: (_match, word) => word
  },
  {
    id: 'a-before-vowel',
    pattern: /\ba\s+(?=[aeiouAEIOU]\w)/g,
    message: '"a" before vowel sound — should this be "an"?',
    fixable: false
  },
  {
    id: 'an-before-consonant',
    pattern: /\ban\s+(?=[^aeiouAEIOU\s]\w)/g,
    message: '"an" before consonant sound — should this be "a"?',
    fixable: false
  },
  {
    id: 'sentence-lowercase',
    pattern: /\.\s+[a-z]/g,
    message: 'Sentence starts with lowercase after full stop',
    fixable: true,
    fix: (match) => match.slice(0, -1) + match.slice(-1).toUpperCase()
  },
  {
    id: 'its-vs-its',
    pattern: /\bit's\s+(?:own|way|self|name|value|role)\b/gi,
    message: 'Possible "it\'s" vs "its" error — did you mean "its" (possessive)?',
    fixable: false
  },
  {
    id: 'missing-full-stop',
    pattern: null,
    message: 'Paragraph ends without punctuation',
    fixable: false
  }
];

const REPO_ROOT = getRepoRoot();
if (process.cwd() !== REPO_ROOT) {
  process.chdir(REPO_ROOT);
}

function getRepoRoot() {
  const result = spawnSync('git', ['rev-parse', '--show-toplevel'], { encoding: 'utf8' });
  if (result.status === 0) {
    const root = String(result.stdout || '').trim();
    if (root) return root;
  }
  return process.cwd();
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function usage() {
  console.log(
    'Usage: node tools/scripts/validators/content/check-grammar-en-gb.js [--scope full|changed] [--file <path[,path...]>] [--fix] [--strict]'
  );
}

function parseArgs(argv) {
  const args = {
    scope: DEFAULT_SCOPE,
    files: [],
    fix: false,
    strict: false,
    help: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];

    if (token === '--scope') {
      args.scope = String(argv[i + 1] || '').trim() || DEFAULT_SCOPE;
      i += 1;
      continue;
    }

    if (token.startsWith('--scope=')) {
      args.scope = token.slice('--scope='.length).trim() || DEFAULT_SCOPE;
      continue;
    }

    if (token === '--file' || token === '--files') {
      const raw = String(argv[i + 1] || '').trim();
      if (raw) {
        raw
          .split(',')
          .map((part) => part.trim())
          .filter(Boolean)
          .forEach((part) => args.files.push(part));
      }
      i += 1;
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

    if (token.startsWith('--files=')) {
      token
        .slice('--files='.length)
        .split(',')
        .map((part) => part.trim())
        .filter(Boolean)
        .forEach((part) => args.files.push(part));
      continue;
    }

    if (token === '--fix') {
      args.fix = true;
      continue;
    }

    if (token === '--strict') {
      args.strict = true;
      continue;
    }

    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }

    throw new Error(`Unknown argument: ${token}`);
  }

  if (!['full', 'changed'].includes(args.scope)) {
    throw new Error(`Invalid --scope value: ${args.scope}`);
  }

  args.files = [...new Set(args.files.map(resolveInputPath))];

  return args;
}

function resolveInputPath(inputPath) {
  const raw = String(inputPath || '').trim();
  if (!raw) return '';
  return path.isAbsolute(raw) ? path.normalize(raw) : path.resolve(REPO_ROOT, raw);
}

function relFromRoot(absPath) {
  if (!absPath.startsWith(REPO_ROOT)) {
    return absPath;
  }
  return toPosix(path.relative(REPO_ROOT, absPath));
}

function isEnglishV2File(relPath) {
  const rel = toPosix(relPath);
  if (!rel.startsWith('v2/')) return false;
  if (!rel.endsWith('.mdx')) return false;
  if (rel.startsWith('v2/es/') || rel.startsWith('v2/fr/') || rel.startsWith('v2/cn/')) return false;
  if (rel.startsWith('v2/internal/')) return false;
  if (rel.includes('/x-')) return false;
  return true;
}

function walkEnglishV2Files(rootDir = path.join(REPO_ROOT, 'v2'), out = []) {
  if (!fs.existsSync(rootDir)) return out;

  const entries = fs.readdirSync(rootDir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);
    const relPath = relFromRoot(fullPath);
    if (entry.isDirectory()) {
      if (entry.name === '.git' || entry.name === 'node_modules') continue;
      walkEnglishV2Files(fullPath, out);
      continue;
    }
    if (!isEnglishV2File(relPath)) continue;
    out.push(fullPath);
  }

  return out;
}

function getChangedEnglishV2Files() {
  const result = spawnSync('git', ['diff', '--name-only', '--diff-filter=ACMR', 'HEAD'], {
    cwd: REPO_ROOT,
    encoding: 'utf8'
  });

  if (result.status !== 0) {
    return [];
  }

  return String(result.stdout || '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => path.resolve(REPO_ROOT, line))
    .filter((fullPath) => isEnglishV2File(relFromRoot(fullPath)))
    .filter((fullPath) => fs.existsSync(fullPath));
}

function collectTargetFiles(args) {
  if (args.files.length > 0) {
    const missing = args.files.filter((filePath) => !fs.existsSync(filePath));
    if (missing.length > 0) {
      throw new Error(`File not found: ${missing[0]}`);
    }
    return [...args.files].sort((a, b) => relFromRoot(a).localeCompare(relFromRoot(b)));
  }

  const files =
    args.scope === 'changed'
      ? getChangedEnglishV2Files()
      : walkEnglishV2Files();

  return [...new Set(files)].sort((a, b) => relFromRoot(a).localeCompare(relFromRoot(b)));
}

function splitLines(content) {
  const lines = [];
  let start = 0;

  for (let i = 0; i < content.length; i += 1) {
    if (content[i] !== '\n') continue;
    lines.push({
      start,
      end: i,
      newlineEnd: i + 1,
      text: content.slice(start, i)
    });
    start = i + 1;
  }

  lines.push({
    start,
    end: content.length,
    newlineEnd: content.length,
    text: content.slice(start)
  });

  return lines;
}

function mergeRanges(ranges) {
  const sorted = [...ranges]
    .filter((range) => Number.isFinite(range.start) && Number.isFinite(range.end) && range.end > range.start)
    .sort((a, b) => a.start - b.start || a.end - b.end);

  if (sorted.length === 0) return [];

  const merged = [sorted[0]];
  for (let i = 1; i < sorted.length; i += 1) {
    const current = sorted[i];
    const previous = merged[merged.length - 1];
    if (current.start <= previous.end) {
      previous.end = Math.max(previous.end, current.end);
      continue;
    }
    merged.push({ start: current.start, end: current.end });
  }

  return merged;
}

function findFrontmatterRange(lines) {
  if (!lines.length) return null;
  if (String(lines[0].text || '').trim() !== '---') return null;

  for (let i = 1; i < lines.length; i += 1) {
    if (String(lines[i].text || '').trim() === '---') {
      return { start: 0, end: lines[i].newlineEnd };
    }
  }

  return null;
}

function findFenceRanges(lines, initialIgnored) {
  const ignored = mergeRanges(initialIgnored);
  const ranges = [];
  let activeFence = null;

  for (const line of lines) {
    if (isFullyIgnored(line.start, line.end, ignored)) continue;

    const trimmed = String(line.text || '').trimStart();
    const opener = trimmed.match(/^(```+|~~~+)/);

    if (!activeFence) {
      if (!opener) continue;
      activeFence = {
        marker: opener[1][0],
        start: line.start
      };
      continue;
    }

    const closer = new RegExp(`^${activeFence.marker}{3,}`).exec(trimmed);
    if (!closer) continue;

    ranges.push({
      start: activeFence.start,
      end: line.newlineEnd
    });
    activeFence = null;
  }

  if (activeFence) {
    ranges.push({
      start: activeFence.start,
      end: lines.length > 0 ? lines[lines.length - 1].newlineEnd : 0
    });
  }

  return ranges;
}

function isFullyIgnored(start, end, ranges) {
  for (const range of ranges) {
    if (range.end <= start) continue;
    if (range.start >= end) break;
    if (range.start <= start && range.end >= end) return true;
  }
  return false;
}

function findContainingRange(index, ranges) {
  let low = 0;
  let high = ranges.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const range = ranges[mid];
    if (index < range.start) {
      high = mid - 1;
      continue;
    }
    if (index >= range.end) {
      low = mid + 1;
      continue;
    }
    return range;
  }

  return null;
}

function findTagEnd(content, startIndex, ignoredRanges) {
  let quote = null;
  let braceDepth = 0;

  for (let i = startIndex + 1; i < content.length; i += 1) {
    const ignored = findContainingRange(i, ignoredRanges);
    if (ignored) {
      i = ignored.end - 1;
      continue;
    }

    const ch = content[i];
    const prev = content[i - 1];

    if (braceDepth > 0) {
      if (ch === '{') {
        braceDepth += 1;
      } else if (ch === '}') {
        braceDepth -= 1;
      }
      continue;
    }

    if (quote) {
      if (ch === quote && prev !== '\\') {
        quote = null;
      }
      continue;
    }

    if (ch === '"' || ch === '\'' || ch === '`') {
      quote = ch;
      continue;
    }

    if (ch === '{') {
      braceDepth += 1;
      continue;
    }

    if (ch === '>' && braceDepth === 0) {
      return i;
    }
  }

  return -1;
}

function findJsxTagRanges(content, ignoredRanges) {
  const ranges = [];

  for (let i = 0; i < content.length; i += 1) {
    const ignored = findContainingRange(i, ignoredRanges);
    if (ignored) {
      i = ignored.end - 1;
      continue;
    }

    if (content[i] !== '<') continue;

    let nameStart = i + 1;
    if (content[nameStart] === '/' || content[nameStart] === '!' || content[nameStart] === '?') {
      nameStart += 1;
    }

    if (!/[A-Za-z]/.test(content[nameStart] || '')) continue;

    const end = findTagEnd(content, i, ignoredRanges);
    if (end === -1) continue;

    ranges.push({ start: i, end: end + 1 });
    i = end;
  }

  return ranges;
}

function findInlineCodeRanges(lines, content, ignoredRanges) {
  const ranges = [];

  lines.forEach((line) => {
    const segments = buildAllowedSegments(line, ignoredRanges);
    segments.forEach((segment) => {
      const text = content.slice(segment.start, segment.end);
      let cursor = 0;

      while (cursor < text.length) {
        if (text[cursor] !== '`') {
          cursor += 1;
          continue;
        }

        let ticks = 1;
        while (text[cursor + ticks] === '`') ticks += 1;
        const fence = '`'.repeat(ticks);
        const closeIndex = text.indexOf(fence, cursor + ticks);

        if (closeIndex === -1) {
          cursor += ticks;
          continue;
        }

        ranges.push({
          start: segment.start + cursor,
          end: segment.start + closeIndex + ticks
        });
        cursor = closeIndex + ticks;
      }
    });
  });

  return ranges;
}

function trimUrlMatch(raw) {
  let value = String(raw || '');
  while (/[.,!?;:)]+$/.test(value)) {
    value = value.slice(0, -1);
  }
  return value;
}

function findUrlRanges(lines, content, ignoredRanges) {
  const ranges = [];

  lines.forEach((line) => {
    const segments = buildAllowedSegments(line, ignoredRanges);
    segments.forEach((segment) => {
      const text = content.slice(segment.start, segment.end);
      const regex = new RegExp(URL_RE.source, URL_RE.flags);
      let match;

      while ((match = regex.exec(text)) !== null) {
        const trimmed = trimUrlMatch(match[0]);
        if (!trimmed) continue;
        ranges.push({
          start: segment.start + match.index,
          end: segment.start + match.index + trimmed.length
        });
      }
    });
  });

  return ranges;
}

function buildAllowedSegments(line, ignoredRanges) {
  const segments = [];
  let cursor = line.start;

  for (const range of ignoredRanges) {
    if (range.end <= line.start) continue;
    if (range.start >= line.end) break;

    if (range.start > cursor) {
      segments.push({
        start: cursor,
        end: Math.min(range.start, line.end)
      });
    }

    cursor = Math.max(cursor, Math.min(line.end, range.end));
    if (cursor >= line.end) break;
  }

  if (cursor < line.end) {
    segments.push({
      start: cursor,
      end: line.end
    });
  }

  return segments.filter((segment) => segment.end > segment.start);
}

function getSkipReason(visibleText) {
  const trimmed = String(visibleText || '').trim();
  if (!trimmed) return 'blank';
  if (/^\s*(?:import|export)\b/.test(visibleText)) return 'module';
  if (/^\s*#{1,6}\s+/.test(visibleText)) return 'heading';
  if (/^\s*(?:[-+*]|\d+\.)\s+/.test(visibleText)) return 'list';
  if (/^\s*\|.*\|\s*$/.test(visibleText)) return 'table';
  if (/^\s*>/.test(visibleText)) return 'blockquote';
  return '';
}

function buildLineInfos(content, ignoredRanges) {
  const lines = splitLines(content);
  const infos = [];

  lines.forEach((line, index) => {
    const segments = buildAllowedSegments(line, ignoredRanges).map((segment) => ({
      start: segment.start,
      end: segment.end,
      text: content.slice(segment.start, segment.end)
    }));
    const visibleText = segments.map((segment) => segment.text).join('');
    const skipReason = getSkipReason(visibleText);

    infos.push({
      number: index + 1,
      start: line.start,
      end: line.end,
      newlineEnd: line.newlineEnd,
      rawText: content.slice(line.start, line.end),
      visibleText,
      trimmedVisibleText: visibleText.trim(),
      skipReason,
      segments
    });
  });

  return infos;
}

function getLineColumn(lineStart, absoluteIndex) {
  return Math.max(1, absoluteIndex - lineStart + 1);
}

function cloneRegex(pattern) {
  return new RegExp(pattern.source, pattern.flags);
}

function formatMessage(rule, match) {
  if (typeof rule.message === 'function') {
    return rule.message(...match);
  }

  return String(rule.message).replace(/\$(\d+)/g, (_token, groupIndex) => {
    const value = match[Number(groupIndex)] || '';
    return value;
  });
}

function activeRules(strict) {
  return RULES.filter((rule) => strict || DEFAULT_REPORT_RULE_IDS.has(rule.id));
}

function scanRegexRules(filePath, lineInfos, rules) {
  const findings = [];
  const regexRules = rules.filter((rule) => rule.pattern instanceof RegExp);

  lineInfos.forEach((line) => {
    if (line.skipReason) return;

    regexRules.forEach((rule) => {
      line.segments.forEach((segment) => {
        const regex = cloneRegex(rule.pattern);
        let match;

        while ((match = regex.exec(segment.text)) !== null) {
          const absoluteIndex = segment.start + match.index;
          findings.push({
            file: filePath,
            line: line.number,
            column: getLineColumn(line.start, absoluteIndex),
            ruleId: rule.id,
            message: formatMessage(rule, match)
          });

          if (match[0] === '') {
            regex.lastIndex += 1;
          }
        }
      });
    });
  });

  return findings;
}

function getLastVisibleIndex(line) {
  for (let segmentIndex = line.segments.length - 1; segmentIndex >= 0; segmentIndex -= 1) {
    const segment = line.segments[segmentIndex];
    for (let i = segment.text.length - 1; i >= 0; i -= 1) {
      if (!/\s/.test(segment.text[i])) {
        return segment.start + i;
      }
    }
  }
  return line.end > line.start ? line.end - 1 : line.start;
}

function scanParagraphEndings(filePath, lineInfos, rules) {
  if (!rules.some((rule) => rule.id === 'missing-full-stop')) return [];

  const findings = [];
  let paragraph = [];

  function flushParagraph() {
    if (paragraph.length === 0) return;
    const lastLine = paragraph[paragraph.length - 1];
    const ending = lastLine.trimmedVisibleText;

    if (ending && !TERMINAL_PUNCTUATION_RE.test(ending)) {
      const absoluteIndex = getLastVisibleIndex(lastLine);
      findings.push({
        file: filePath,
        line: lastLine.number,
        column: getLineColumn(lastLine.start, absoluteIndex),
        ruleId: 'missing-full-stop',
        message: 'Paragraph ends without punctuation'
      });
    }

    paragraph = [];
  }

  lineInfos.forEach((line) => {
    if (line.skipReason || !line.trimmedVisibleText) {
      flushParagraph();
      return;
    }
    paragraph.push(line);
  });
  flushParagraph();

  return findings;
}

function analyzeContent(filePath, content, strict) {
  const lines = splitLines(content);
  const initialRanges = [];
  const frontmatterRange = findFrontmatterRange(lines);
  if (frontmatterRange) initialRanges.push(frontmatterRange);

  const fenceRanges = findFenceRanges(lines, initialRanges);
  const jsxBaseRanges = mergeRanges([...initialRanges, ...fenceRanges]);
  const jsxRanges = findJsxTagRanges(content, jsxBaseRanges);
  const inlineBaseRanges = mergeRanges([...jsxBaseRanges, ...jsxRanges]);
  const inlineCodeRanges = findInlineCodeRanges(lines, content, inlineBaseRanges);
  const urlBaseRanges = mergeRanges([...inlineBaseRanges, ...inlineCodeRanges]);
  const urlRanges = findUrlRanges(lines, content, urlBaseRanges);
  const ignoredRanges = mergeRanges([...urlBaseRanges, ...urlRanges]);
  const lineInfos = buildLineInfos(content, ignoredRanges);
  const rules = activeRules(strict);

  const findings = [
    ...scanRegexRules(filePath, lineInfos, rules),
    ...scanParagraphEndings(filePath, lineInfos, rules)
  ].sort((a, b) => {
    if (a.file !== b.file) return a.file.localeCompare(b.file);
    if (a.line !== b.line) return a.line - b.line;
    if (a.column !== b.column) return a.column - b.column;
    return a.ruleId.localeCompare(b.ruleId);
  });

  return {
    findings,
    lineInfos
  };
}

function applyFixRules(text, rules) {
  let updated = text;

  rules.forEach((rule) => {
    if (!rule.fixable) return;
    const regex = cloneRegex(rule.pattern);
    updated = updated.replace(regex, (...args) => rule.fix(...args));
  });

  return updated;
}

function applyFixes(content, lineInfos) {
  const fixRules = RULES.filter((rule) => rule.fixable);
  let output = '';
  let cursor = 0;

  lineInfos.forEach((line) => {
    output += content.slice(cursor, line.start);

    if (line.skipReason || line.segments.length === 0) {
      output += content.slice(line.start, line.newlineEnd);
      cursor = line.newlineEnd;
      return;
    }

    let lineOutput = '';
    let lineCursor = line.start;

    line.segments.forEach((segment) => {
      lineOutput += content.slice(lineCursor, segment.start);
      lineOutput += applyFixRules(segment.text, fixRules);
      lineCursor = segment.end;
    });

    lineOutput += content.slice(lineCursor, line.end);
    output += lineOutput;
    output += content.slice(line.end, line.newlineEnd);
    cursor = line.newlineEnd;
  });

  output += content.slice(cursor);
  return output;
}

function printFindings(findings) {
  findings.forEach((finding) => {
    console.log(`${finding.file}:${finding.line}:${finding.column} [${finding.ruleId}] ${finding.message}`);
  });
}

function countByRule(findings) {
  const counts = {};
  findings.forEach((finding) => {
    counts[finding.ruleId] = (counts[finding.ruleId] || 0) + 1;
  });
  return Object.entries(counts).sort((a, b) => a[0].localeCompare(b[0]));
}

function run(args) {
  const targets = collectTargetFiles(args);

  if (targets.length === 0) {
    console.log('No files selected.');
    return {
      exitCode: 0,
      findings: [],
      modifiedFiles: []
    };
  }

  const modifiedFiles = [];
  const allFindings = [];

  targets.forEach((target) => {
    const originalContent = fs.readFileSync(target, 'utf8');
    const displayPath = relFromRoot(target);
    const initial = analyzeContent(displayPath, originalContent, args.strict);
    let contentForReport = originalContent;
    let lineInfosForFix = initial.lineInfos;

    if (args.fix) {
      const updatedContent = applyFixes(originalContent, lineInfosForFix);
      if (updatedContent !== originalContent) {
        fs.writeFileSync(target, updatedContent, 'utf8');
        modifiedFiles.push(displayPath);
        contentForReport = updatedContent;
      }
    }

    const finalAnalysis = analyzeContent(displayPath, contentForReport, args.strict);
    allFindings.push(...finalAnalysis.findings);
  });

  if (allFindings.length > 0) {
    printFindings(allFindings);
  }

  const ruleCounts = countByRule(allFindings);
  console.log('');
  console.log(`Files checked: ${targets.length}`);
  console.log(`Files modified: ${modifiedFiles.length}`);
  console.log(`Reportable findings: ${allFindings.length}`);
  ruleCounts.forEach(([ruleId, count]) => {
    console.log(`  ${ruleId}: ${count}`);
  });

  if (modifiedFiles.length > 0) {
    console.log('');
    console.log('Modified files:');
    modifiedFiles.forEach((filePath) => {
      console.log(`  ${filePath}`);
    });
  }

  if (allFindings.length === 0) {
    console.log('');
    console.log('No reportable grammar issues found.');
  }

  return {
    exitCode: allFindings.length > 0 ? 1 : 0,
    findings: allFindings,
    modifiedFiles
  };
}

function main() {
  let args;

  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    usage();
    process.exit(1);
  }

  if (args.help) {
    usage();
    process.exit(0);
  }

  try {
    const result = run(args);
    process.exit(result.exitCode);
  } catch (error) {
    console.error(`Grammar checker failed: ${error.message}`);
    process.exit(1);
  }
}

main();
