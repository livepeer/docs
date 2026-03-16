#!/usr/bin/env node
/**
 * @script            check-proper-nouns
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             v2, tools/scripts/validators/content, tests/config/spell-dict.json
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement Detects and fixes incorrect proper noun capitalisation in prose while skipping code, frontmatter, URLs, and path-like tokens.
 * @pipeline          manual
 * @dualmode          --check (default) | --fix
 * @usage             node tools/scripts/validators/content/check-proper-nouns.js [--file <path[,path...]>] [--fix]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { unified } = require('unified');
const remarkParse = require('remark-parse').default;
const remarkMdx = require('remark-mdx').default;
const { getAuthoredMdxFiles } = require('../../../../tests/utils/file-walker');

const PROPER_NOUNS = {
  livepeer: 'Livepeer',
  ethereum: 'Ethereum',
  arbitrum: 'Arbitrum',
  mintlify: 'Mintlify',
  infura: 'Infura',
  alchemy: 'Alchemy',
  metamask: 'MetaMask',
  openrouter: 'OpenRouter',
  github: 'GitHub',
  youtube: 'YouTube',
  deepwiki: 'DeepWiki',
  'node.js': 'Node.js',
  'livepeer studio': 'Livepeer Studio',
  'livepeer network': 'Livepeer Network'
};

const PROPER_NOUN_KEYS = Object.keys(PROPER_NOUNS).sort((a, b) => b.length - a.length);
const PROSE_BLOCK_TYPES = new Set(['paragraph', 'heading', 'tableCell']);
const SKIP_NODE_TYPES = new Set([
  'code',
  'inlineCode',
  'yaml',
  'html',
  'mdxjsEsm',
  'mdxTextExpression',
  'mdxFlowExpression',
  'mdxJsxTextElement',
  'mdxJsxFlowElement'
]);
const WORD_CHAR_RE = /[A-Za-z0-9_-]/;
const URL_RE = /\bhttps?:\/\/[^\s<>()]+/gi;
const WWW_RE = /\bwww\.[^\s<>()]+/gi;
const DOMAIN_RE = /\b(?:[a-z0-9-]+\.)+[a-z]{2,}(?:\/[^\s<>()]*)?/gi;
const ROOT_PATH_RE = /(^|[\s(])((?:\.{1,2}\/|\/)[^\s<>()]+)/g;
const SLASH_TOKEN_RE = /(^|[\s(])(@?[A-Za-z0-9._-]+(?:\/[A-Za-z0-9._-]+)+)/g;

const PARSER = unified().use(remarkParse).use(remarkMdx);
const REPO_ROOT = getRepoRoot();

if (process.cwd() !== REPO_ROOT) {
  process.chdir(REPO_ROOT);
}

function getRepoRoot() {
  try {
    return execSync('git rev-parse --show-toplevel', { encoding: 'utf8' }).trim();
  } catch (_error) {
    return process.cwd();
  }
}

function toPosix(value) {
  return String(value || '').split(path.sep).join('/');
}

function toDisplayPath(filePath) {
  const relative = toPosix(path.relative(REPO_ROOT, filePath));
  if (!relative || relative.startsWith('..')) {
    return filePath;
  }
  return relative;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function parseArgs(argv) {
  const args = {
    fix: false,
    files: []
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--fix') {
      args.fix = true;
      continue;
    }
    if (token === '--file' || token === '--files') {
      const raw = String(argv[i + 1] || '').trim();
      if (!raw) {
        throw new Error(`${token} requires a path value`);
      }
      raw
        .split(',')
        .map((part) => part.trim())
        .filter(Boolean)
        .forEach((part) => args.files.push(part));
      i += 1;
      continue;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    throw new Error(`Unknown argument: ${token}`);
  }

  args.files = [...new Set(args.files.map(resolveInputPath))];
  return args;
}

function printHelp() {
  console.log('Usage: node tools/scripts/validators/content/check-proper-nouns.js [--file <path[,path...]>] [--fix]');
}

function resolveInputPath(input) {
  const trimmed = String(input || '').trim();
  if (!trimmed) return '';
  if (path.isAbsolute(trimmed)) {
    return path.resolve(trimmed);
  }
  return path.resolve(REPO_ROOT, trimmed.replace(/^\.\//, ''));
}

function resolveTargetFiles(explicitFiles) {
  if (explicitFiles.length > 0) {
    explicitFiles.forEach((filePath) => {
      if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
      }
    });
    return explicitFiles;
  }

  return getAuthoredMdxFiles(REPO_ROOT).map((filePath) => path.resolve(filePath));
}

function splitFrontmatter(raw) {
  const normalized = String(raw || '');
  if (!normalized.startsWith('---')) {
    return {
      prefix: '',
      body: normalized,
      bodyStartOffset: 0
    };
  }

  const match = normalized.match(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n)?/);
  if (!match) {
    return {
      prefix: '',
      body: normalized,
      bodyStartOffset: 0
    };
  }

  return {
    prefix: match[0],
    body: normalized.slice(match[0].length),
    bodyStartOffset: match[0].length
  };
}

function buildLineStarts(raw) {
  const starts = [0];
  for (let i = 0; i < raw.length; i += 1) {
    if (raw[i] === '\n') {
      starts.push(i + 1);
    }
  }
  return starts;
}

function getLineNumber(lineStarts, offset) {
  let low = 0;
  let high = lineStarts.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (lineStarts[mid] <= offset) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high + 1;
}

function collectProseBlocks(node, bodyStartOffset, out = []) {
  if (!node || typeof node !== 'object') return out;

  if (PROSE_BLOCK_TYPES.has(node.type)) {
    const block = buildVisibleBlock(node, bodyStartOffset);
    if (block && block.text.trim()) {
      out.push(block);
    }
    return out;
  }

  if (Array.isArray(node.children)) {
    node.children.forEach((child) => collectProseBlocks(child, bodyStartOffset, out));
  }

  return out;
}

function buildVisibleBlock(node, bodyStartOffset) {
  const segments = [];
  collectTextSegments(node, bodyStartOffset, segments);

  if (segments.length === 0) {
    return null;
  }

  let text = '';
  const charOffsets = [];

  segments.forEach((segment) => {
    text += segment.value;
    for (let i = 0; i < segment.value.length; i += 1) {
      charOffsets.push(segment.startOffset + i);
    }
  });

  return { text, charOffsets };
}

function collectTextSegments(node, bodyStartOffset, out) {
  if (!node || typeof node !== 'object') return;
  if (SKIP_NODE_TYPES.has(node.type)) return;

  if (node.type === 'text') {
    const startOffset = node.position && node.position.start ? node.position.start.offset : null;
    if (!Number.isInteger(startOffset)) {
      return;
    }
    out.push({
      value: String(node.value || ''),
      startOffset: bodyStartOffset + startOffset
    });
    return;
  }

  if (Array.isArray(node.children)) {
    node.children.forEach((child) => collectTextSegments(child, bodyStartOffset, out));
  }
}

function addRegexRanges(ranges, text, regex, adjustMatch = null) {
  regex.lastIndex = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const nextRange = adjustMatch ? adjustMatch(match) : [match.index, match.index + match[0].length];
    if (!nextRange) continue;
    ranges.push(nextRange);
  }
}

function buildSkipRanges(text) {
  const ranges = [];

  addRegexRanges(ranges, text, URL_RE);
  addRegexRanges(ranges, text, WWW_RE);
  addRegexRanges(ranges, text, DOMAIN_RE, (match) => {
    if (String(match[0]).toLowerCase() === 'node.js') {
      return null;
    }
    return [match.index, match.index + match[0].length];
  });
  addRegexRanges(ranges, text, ROOT_PATH_RE, (match) => {
    const start = match.index + String(match[1] || '').length;
    return [start, start + String(match[2] || '').length];
  });
  addRegexRanges(ranges, text, SLASH_TOKEN_RE, (match) => {
    const start = match.index + String(match[1] || '').length;
    return [start, start + String(match[2] || '').length];
  });

  return ranges.sort((a, b) => a[0] - b[0]);
}

function overlapsRange(start, end, ranges) {
  return ranges.some((range) => start < range[1] && end > range[0]);
}

function isBoundary(text, index) {
  if (index < 0 || index >= text.length) return true;
  return !WORD_CHAR_RE.test(text[index]);
}

function scanBlock(block, lineStarts) {
  const findings = [];
  const replacements = [];
  const skipRanges = buildSkipRanges(block.text);
  const occupiedRanges = [];

  PROPER_NOUN_KEYS.forEach((key) => {
    const canonical = PROPER_NOUNS[key];
    const regex = new RegExp(escapeRegExp(key), 'gi');
    let match;

    while ((match = regex.exec(block.text)) !== null) {
      const start = match.index;
      const end = start + match[0].length;

      if (!isBoundary(block.text, start - 1) || !isBoundary(block.text, end)) {
        continue;
      }

      if (match[0] === canonical) {
        continue;
      }

      if (overlapsRange(start, end, skipRanges) || overlapsRange(start, end, occupiedRanges)) {
        continue;
      }

      const offsets = block.charOffsets.slice(start, end);
      if (offsets.length !== canonical.length) {
        continue;
      }

      const firstOffset = offsets[0];
      findings.push({
        offset: firstOffset,
        line: getLineNumber(lineStarts, firstOffset),
        incorrect: match[0],
        canonical
      });
      occupiedRanges.push([start, end]);

      for (let i = 0; i < canonical.length; i += 1) {
        if (match[0][i] !== canonical[i]) {
          replacements.push({
            offset: offsets[i],
            value: canonical[i]
          });
        }
      }
    }
  });

  return { findings, replacements };
}

function dedupeReplacements(replacements) {
  const byOffset = new Map();
  replacements.forEach((replacement) => {
    const existing = byOffset.get(replacement.offset);
    if (existing && existing.value !== replacement.value) {
      throw new Error(`Conflicting replacement at offset ${replacement.offset}`);
    }
    byOffset.set(replacement.offset, replacement);
  });
  return [...byOffset.values()].sort((a, b) => b.offset - a.offset);
}

function applyReplacements(raw, replacements) {
  if (replacements.length === 0) return raw;
  const chars = raw.split('');
  replacements.forEach((replacement) => {
    chars[replacement.offset] = replacement.value;
  });
  return chars.join('');
}

function analyzeFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const displayPath = toDisplayPath(filePath);
  const lineStarts = buildLineStarts(raw);
  const { body, bodyStartOffset } = splitFrontmatter(raw);

  let tree;
  try {
    tree = PARSER.parse(body);
  } catch (error) {
    return {
      filePath,
      displayPath,
      raw,
      findings: [
        {
          line: 1,
          message: `Failed to parse MDX body: ${error.message}`
        }
      ],
      replacements: [],
      parseFailed: true
    };
  }

  const blocks = collectProseBlocks(tree, bodyStartOffset);
  const findings = [];
  const replacements = [];

  blocks.forEach((block) => {
    const result = scanBlock(block, lineStarts);
    findings.push(...result.findings);
    replacements.push(...result.replacements);
  });

  findings.sort((a, b) => a.offset - b.offset);

  return {
    filePath,
    displayPath,
    raw,
    findings,
    replacements: dedupeReplacements(replacements),
    parseFailed: false
  };
}

function run(argv = process.argv.slice(2)) {
  const args = parseArgs(argv);
  if (args.help) {
    printHelp();
    return 0;
  }

  const files = resolveTargetFiles(args.files);
  const analyses = files.map(analyzeFile);
  const findings = analyses.flatMap((analysis) =>
    analysis.findings.map((finding) => ({
      file: analysis.displayPath,
      filePath: analysis.filePath,
      ...finding
    }))
  );

  if (args.fix) {
    let changedFiles = 0;
    analyses.forEach((analysis) => {
      if (analysis.parseFailed || analysis.replacements.length === 0) {
        return;
      }
      const next = applyReplacements(analysis.raw, analysis.replacements);
      if (next !== analysis.raw) {
        fs.writeFileSync(analysis.filePath, next, 'utf8');
        changedFiles += 1;
      }
    });

    if (findings.length > 0) {
      console.log(`\n🛠️  Fixed ${findings.length} proper noun issue(s) across ${changedFiles} file(s)`);
    } else {
      console.log(`\n✅ Proper noun checks passed (${files.length} files checked)`);
    }

    const unresolved = analyses.some((analysis) => analysis.parseFailed);
    return unresolved ? 1 : 0;
  }

  if (findings.length > 0) {
    console.error('\n❌ Proper noun capitalisation issues:\n');
    findings.forEach((finding) => {
      if (finding.message) {
        console.error(`  ${finding.file}:${finding.line} - ${finding.message}`);
        return;
      }
      console.error(`  ${finding.file}:${finding.line} - "${finding.incorrect}" should be "${finding.canonical}"`);
    });
    console.error(`\n❌ ${findings.length} proper noun issue(s) found`);
    return 1;
  }

  console.log(`\n✅ Proper noun checks passed (${files.length} files checked)`);
  return 0;
}

if (require.main === module) {
  try {
    process.exit(run());
  } catch (error) {
    console.error(`Proper noun checker error: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  PROPER_NOUNS,
  analyzeFile,
  applyReplacements,
  buildSkipRanges,
  parseArgs,
  resolveTargetFiles,
  run,
  splitFrontmatter
};
