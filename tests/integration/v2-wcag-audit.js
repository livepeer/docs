#!/usr/bin/env node
/**
 * @script            v2-wcag-audit
 * @category          validator
 * @purpose           qa:content-quality
 * @scope             tests/integration, tests/utils, tasks/reports, v2
 * @owner             docs
 * @needs             E-R1, R-R11
 * @purpose-statement WCAG accessibility audit for v2 pages — checks heading hierarchy, alt text, ARIA. Supports --fix mode for auto-repair.
 * @pipeline          P6 (on-demand, WCAG audit/repair)
 * @usage             node tests/integration/v2-wcag-audit.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');
const { URL } = require('url');
const {
  getV2DocsFiles,
  toDocsRouteKeyFromFileV2Aware,
  isExcludedV2ExperimentalPath,
  filterPathsByMintIgnore
} = require('../utils/file-walker');

const REPO_ROOT = getRepoRoot();
if (process.cwd() !== REPO_ROOT) {
  process.chdir(REPO_ROOT);
}
const DEFAULT_REPORT_MD = path.join(REPO_ROOT, 'tasks', 'reports', 'quality-accessibility', 'v2-wcag-audit-report.md');
const DEFAULT_REPORT_JSON = path.join(REPO_ROOT, 'tasks', 'reports', 'quality-accessibility', 'v2-wcag-audit-report.json');
const DEFAULT_TIMEOUT_MS = 30000;
const DEFAULT_WAIT_AFTER_NAV_MS = 2000;
const WCAG_PROFILE = 'WCAG 2.2 AA';
const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22a', 'wcag22aa'];
const BEST_PRACTICE_TAGS = ['best-practice'];
const ADVISORY_ONLY_RULES = new Set(['color-contrast']);
const IMPACT_ORDER = ['minor', 'moderate', 'serious', 'critical'];
const IMPACT_RANK = {
  none: -1,
  minor: 0,
  moderate: 1,
  serious: 2,
  critical: 3,
  unknown: 0
};
const VALID_FAIL_IMPACTS = new Set(['critical', 'serious', 'moderate', 'minor', 'none']);

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

function relFromRoot(absPath) {
  return toPosix(path.relative(REPO_ROOT, absPath));
}

function parseArgs(argv) {
  const args = {
    mode: 'full',
    files: [],
    respectMintIgnore: true,
    fix: true,
    stage: false,
    maxPages: null,
    baseUrl: process.env.MINT_BASE_URL || '',
    failImpact: 'serious',
    report: DEFAULT_REPORT_MD,
    reportJson: DEFAULT_REPORT_JSON,
    timeoutMs: DEFAULT_TIMEOUT_MS
  };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === '--full') {
      args.mode = 'full';
      continue;
    }
    if (token === '--staged') {
      args.mode = 'staged';
      continue;
    }
    if (token === '--files' || token === '--file') {
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
    if (token === '--no-mintignore') {
      args.respectMintIgnore = false;
      continue;
    }
    if (token === '--fix') {
      args.fix = true;
      continue;
    }
    if (token === '--no-fix') {
      args.fix = false;
      continue;
    }
    if (token === '--stage') {
      args.stage = true;
      continue;
    }
    if (token === '--max-pages') {
      const parsed = Number(argv[i + 1]);
      if (Number.isFinite(parsed) && parsed >= 0) {
        args.maxPages = Math.floor(parsed);
      }
      i += 1;
      continue;
    }
    if (token === '--base-url') {
      args.baseUrl = String(argv[i + 1] || '').trim();
      i += 1;
      continue;
    }
    if (token === '--fail-impact') {
      const value = String(argv[i + 1] || '').trim().toLowerCase();
      if (!VALID_FAIL_IMPACTS.has(value)) {
        throw new Error(`Invalid --fail-impact value: ${value}. Use critical|serious|moderate|minor|none`);
      }
      args.failImpact = value;
      i += 1;
      continue;
    }
    if (token === '--report') {
      args.report = path.resolve(REPO_ROOT, argv[i + 1] || '');
      i += 1;
      continue;
    }
    if (token === '--report-json') {
      args.reportJson = path.resolve(REPO_ROOT, argv[i + 1] || '');
      i += 1;
      continue;
    }
    if (token === '--help' || token === '-h') {
      args.help = true;
      continue;
    }
    throw new Error(`Unknown option: ${token}`);
  }

  args.files = [...new Set(args.files)].map((p) => normalizeInputPath(p)).filter(Boolean);
  if (args.files.length > 0) {
    args.mode = 'files';
  }

  if (args.mode === 'staged' && args.maxPages === null) {
    // Keep staged/files runs bounded by default for local hook-style usage.
    args.maxPages = 10;
  }

  return args;
}

function normalizeInputPath(input) {
  return toPosix(String(input || '').trim().replace(/^\.\//, '').replace(/^\//, ''));
}

function printHelp() {
  console.log(`Usage: node tests/integration/v2-wcag-audit.js [--full|--staged|--files <path[,path...]>] [--no-mintignore] [--fix|--no-fix] [--stage] [--max-pages <n>] [--base-url <url>] [--fail-impact <level>] [--report <path>] [--report-json <path>]`);
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function severityMeetsThreshold(impact, threshold) {
  if (String(threshold) === 'none') return false;
  const impactKey = normalizeImpact(impact);
  return (IMPACT_RANK[impactKey] ?? IMPACT_RANK.unknown) >= (IMPACT_RANK[threshold] ?? IMPACT_RANK.serious);
}

function normalizeImpact(impact) {
  const value = String(impact || '').trim().toLowerCase();
  if (!value) return 'unknown';
  if (value === 'critical' || value === 'serious' || value === 'moderate' || value === 'minor') return value;
  if (value === 'none') return 'none';
  return 'unknown';
}

function impactCounts(items, field = 'impact') {
  const counts = { critical: 0, serious: 0, moderate: 0, minor: 0, unknown: 0 };
  (items || []).forEach((item) => {
    const key = normalizeImpact(item?.[field]);
    if (key === 'none') return;
    if (!Object.prototype.hasOwnProperty.call(counts, key)) counts.unknown += 1;
    else counts[key] += 1;
  });
  return counts;
}

function sortedObjectEntries(obj) {
  return Object.entries(obj || {}).sort((a, b) => a[0].localeCompare(b[0]));
}

function getLineNumberFromIndex(content, index) {
  if (!Number.isFinite(index) || index < 0) return 1;
  let line = 1;
  for (let i = 0; i < index && i < content.length; i += 1) {
    if (content[i] === '\n') line += 1;
  }
  return line;
}

function buildSkipRanges(content) {
  const ranges = [];

  // MDX comments {/* ... */}
  const mdxComment = /\{\/\*[\s\S]*?\*\/\}/g;
  let match;
  while ((match = mdxComment.exec(content))) {
    ranges.push([match.index, match.index + match[0].length]);
  }

  // HTML comments <!-- ... -->
  const htmlComment = /<!--[\s\S]*?-->/g;
  while ((match = htmlComment.exec(content))) {
    ranges.push([match.index, match.index + match[0].length]);
  }

  // Fenced code blocks ``` or ~~~
  const lines = content.split('\n');
  let cursor = 0;
  let inFence = false;
  let fenceChar = '';
  let fenceStart = 0;
  lines.forEach((line) => {
    const trimmed = line.trimStart();
    const fenceMatch = trimmed.match(/^(```+|~~~+)/);
    if (fenceMatch) {
      const char = fenceMatch[1][0];
      if (!inFence) {
        inFence = true;
        fenceChar = char;
        fenceStart = cursor;
      } else if (fenceChar === char) {
        const end = cursor + line.length + 1;
        ranges.push([fenceStart, end]);
        inFence = false;
        fenceChar = '';
      }
    }
    cursor += line.length + 1;
  });
  if (inFence) {
    ranges.push([fenceStart, content.length]);
  }

  return ranges.sort((a, b) => a[0] - b[0]);
}

function indexInRanges(index, ranges) {
  for (const [start, end] of ranges) {
    if (index < start) return false;
    if (index >= start && index < end) return true;
  }
  return false;
}

function hasAttr(tag, attrName) {
  const re = new RegExp(`\\b${attrName}\\s*=`, 'i');
  return re.test(tag);
}

function extractAttrValue(tag, attrName) {
  const quoted = new RegExp(`\\b${attrName}\\s*=\\s*(["'])([\\s\\S]*?)\\1`, 'i');
  const m = tag.match(quoted);
  if (m) return m[2];
  const bare = new RegExp(`\\b${attrName}\\s*=\\s*([^\\s>]+)`, 'i');
  const b = tag.match(bare);
  return b ? b[1] : '';
}

function insertAttrIntoTag(tag, attrName, attrValue) {
  const attr = ` ${attrName}="${escapeHtmlAttr(attrValue)}"`;
  if (/\/\s*>$/.test(tag)) {
    return tag.replace(/\s*\/\s*>$/, `${attr} />`);
  }
  return tag.replace(/\s*>$/, `${attr}>`);
}

function escapeHtmlAttr(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function humanizeSlug(value) {
  const cleaned = decodeURIComponent(String(value || ''))
    .replace(/\?.*$/, '')
    .replace(/#.*$/, '')
    .replace(/\.(png|jpe?g|gif|webp|svg|mp4|webm)$/i, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!cleaned) return '';
  return cleaned
    .split(' ')
    .map((part) => part ? (part[0].toUpperCase() + part.slice(1)) : part)
    .join(' ');
}

function deriveIframeTitle(src) {
  if (!src) return { label: 'Embedded content', confidence: 0.2 };
  try {
    const url = new URL(src, 'https://example.invalid');
    const host = url.hostname.replace(/^www\./, '');
    if (/youtube\.com|youtu\.be/i.test(host)) return { label: 'Embedded YouTube video', confidence: 0.9 };
    if (/linkedin\.com/i.test(host)) return { label: 'Embedded LinkedIn content', confidence: 0.9 };
    if (/x\.com|twitter\.com/i.test(host)) return { label: 'Embedded X post', confidence: 0.8 };
    if (/forum\.livepeer\.org/i.test(host)) return { label: 'Embedded Livepeer forum content', confidence: 0.9 };
    return { label: `Embedded content from ${host || 'external site'}`, confidence: 0.6 };
  } catch (_error) {
    return { label: 'Embedded content', confidence: 0.3 };
  }
}

function deriveImgAlt(src) {
  if (!src) return { label: 'Image', confidence: 0.2 };
  const basename = src.split('/').pop() || src;
  const human = humanizeSlug(basename);
  if (human) return { label: human, confidence: 0.55 };
  return { label: 'Image', confidence: 0.2 };
}

function deriveAnchorAriaLabel(href, innerHtml) {
  const iconMatch = String(innerHtml || '').match(/<Icon[^>]*icon\s*=\s*(["'])([^"']+)\1/i);
  if (iconMatch) {
    const icon = humanizeSlug(iconMatch[2]);
    if (href) {
      const hrefHint = describeHref(href);
      return { label: `${icon || 'Link'} ${hrefHint}`.trim(), confidence: 0.8 };
    }
    return { label: icon || 'Link', confidence: 0.6 };
  }
  if (href) {
    return { label: describeHref(href), confidence: 0.5 };
  }
  return { label: 'Link', confidence: 0.2 };
}

function describeHref(href) {
  const raw = String(href || '').trim();
  if (!raw) return 'link';
  if (raw.startsWith('#')) return `link to section ${humanizeSlug(raw.slice(1)) || ''}`.trim();
  if (/^mailto:/i.test(raw)) return 'email link';
  try {
    const url = new URL(raw, 'https://example.invalid');
    if (url.origin === 'https://example.invalid') {
      const last = url.pathname.split('/').filter(Boolean).pop() || 'page';
      return `link to ${humanizeSlug(last) || 'page'}`;
    }
    const host = url.hostname.replace(/^www\./, '');
    return `link to ${host}`;
  } catch (_error) {
    return 'link';
  }
}

function stripTags(html) {
  return String(html || '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&#x?[0-9a-f]+;/gi, ' ')
    .trim();
}

function collectReplacements(content, regex, handler, ranges) {
  const replacements = [];
  let match;
  while ((match = regex.exec(content))) {
    const index = match.index;
    if (indexInRanges(index, ranges)) continue;
    const decision = handler(match[0], index, content, match);
    if (!decision || decision.replace == null || decision.replace === match[0]) continue;
    replacements.push({
      start: index,
      end: index + match[0].length,
      original: match[0],
      replacement: decision.replace,
      meta: decision.meta || {}
    });
  }
  return replacements;
}

function applyNonOverlappingReplacements(content, replacements) {
  if (!replacements.length) return { content, applied: [] };
  const sorted = [...replacements].sort((a, b) => a.start - b.start);
  const applied = [];
  let out = '';
  let cursor = 0;
  let lastEnd = -1;
  for (const repl of sorted) {
    if (repl.start < cursor || repl.start < lastEnd) {
      continue;
    }
    out += content.slice(cursor, repl.start);
    out += repl.replacement;
    applied.push(repl);
    cursor = repl.end;
    lastEnd = repl.end;
  }
  out += content.slice(cursor);
  return { content: out, applied };
}

function buildStaticFinding({ file, line, rule, impact, message, suggestion, fixable = false, fixed = false, reviewRequired = false }) {
  return {
    source: 'static',
    file,
    line,
    rule,
    impact: normalizeImpact(impact),
    message,
    suggestion,
    fixable: Boolean(fixable),
    fixed: Boolean(fixed),
    reviewRequired: Boolean(reviewRequired)
  };
}

function applyConservativeAutofixes(content, relPath, options = {}) {
  const fixEnabled = options.fix !== false;
  const allFindings = [];
  const fixActions = [];
  let working = content;

  const pass = (regex, handler) => {
    const ranges = buildSkipRanges(working);
    const replacements = collectReplacements(working, regex, (tag, index, current) => handler(tag, index, current), ranges);
    const { content: next, applied } = applyNonOverlappingReplacements(working, replacements);
    working = next;
    applied.forEach((item) => fixActions.push(item));
  };

  // iframe title
  pass(/<iframe\b[\s\S]*?>/gi, (tag, index, current) => {
    if (hasAttr(tag, 'title')) return null;
    const src = extractAttrValue(tag, 'src');
    const derived = deriveIframeTitle(src);
    const line = getLineNumberFromIndex(current, index);
    const finding = buildStaticFinding({
      file: relPath,
      line,
      rule: 'raw-iframe-missing-title',
      impact: 'moderate',
      message: 'Raw <iframe> is missing a title attribute.',
      suggestion: `Add a descriptive title attribute (for example: \`${derived.label}\`).`,
      fixable: true,
      fixed: fixEnabled,
      reviewRequired: derived.confidence < 0.8
    });
    allFindings.push(finding);
    if (!fixEnabled) return null;
    return {
      replace: insertAttrIntoTag(tag, 'title', derived.label),
      meta: {
        type: 'autofix',
        rule: finding.rule,
        line,
        file: relPath,
        inserted: { title: derived.label },
        reviewRequired: derived.confidence < 0.8
      }
    };
  });

  // img alt
  pass(/<img\b[\s\S]*?>/gi, (tag, index, current) => {
    if (hasAttr(tag, 'alt')) return null;
    const src = extractAttrValue(tag, 'src');
    const derived = deriveImgAlt(src);
    const line = getLineNumberFromIndex(current, index);
    const finding = buildStaticFinding({
      file: relPath,
      line,
      rule: 'raw-img-missing-alt',
      impact: 'serious',
      message: 'Raw <img> is missing an alt attribute.',
      suggestion: 'Add an `alt` attribute. Use meaningful descriptive text, or `alt=""` only when the image is purely decorative.',
      fixable: true,
      fixed: fixEnabled,
      reviewRequired: true
    });
    allFindings.push(finding);
    if (!fixEnabled) return null;
    return {
      replace: insertAttrIntoTag(tag, 'alt', derived.label),
      meta: {
        type: 'autofix',
        rule: finding.rule,
        line,
        file: relPath,
        inserted: { alt: derived.label },
        reviewRequired: true
      }
    };
  });

  // empty/icon-only anchors
  pass(/<a\b[\s\S]*?>[\s\S]*?<\/a>/gi, (tagBlock, index, current) => {
    const openTagMatch = tagBlock.match(/^<a\b[\s\S]*?>/i);
    if (!openTagMatch) return null;
    const openTag = openTagMatch[0];
    if (hasAttr(openTag, 'aria-label') || hasAttr(openTag, 'aria-labelledby') || hasAttr(openTag, 'title')) return null;
    const inner = tagBlock.slice(openTag.length, tagBlock.length - 4);
    if (stripTags(inner)) return null;
    const href = extractAttrValue(openTag, 'href');
    const derived = deriveAnchorAriaLabel(href, inner);
    const line = getLineNumberFromIndex(current, index);
    const finding = buildStaticFinding({
      file: relPath,
      line,
      rule: 'raw-anchor-missing-accessible-name',
      impact: 'serious',
      message: 'Raw <a> appears to be empty or icon-only and has no accessible name.',
      suggestion: 'Add `aria-label` (or visible text) that describes the destination/action.',
      fixable: true,
      fixed: fixEnabled,
      reviewRequired: derived.confidence < 0.85
    });
    allFindings.push(finding);
    if (!fixEnabled) return null;
    const newOpenTag = insertAttrIntoTag(openTag, 'aria-label', derived.label);
    return {
      replace: `${newOpenTag}${inner}</a>`,
      meta: {
        type: 'autofix',
        rule: finding.rule,
        line,
        file: relPath,
        inserted: { 'aria-label': derived.label },
        reviewRequired: derived.confidence < 0.85
      }
    };
  });

  return {
    content: working,
    changed: working !== content,
    findings: allFindings,
    autofixes: fixActions.map((action) => action.meta).filter(Boolean),
    suggestions: allFindings.map((f) => ({ rule: f.rule, file: f.file, line: f.line, suggestion: f.suggestion, impact: f.impact }))
  };
}

function normalizeAxeNode(node) {
  return {
    target: Array.isArray(node?.target) ? node.target : [],
    html: truncateString(String(node?.html || ''), 240),
    failureSummary: truncateString(String(node?.failureSummary || ''), 500)
  };
}

function normalizeAxeViolation(violation, context = {}) {
  const id = String(violation?.id || '');
  let impact = normalizeImpact(violation?.impact);
  const advisoryOnly = ADVISORY_ONLY_RULES.has(id);
  if (advisoryOnly) {
    impact = 'none';
  }
  const tags = Array.isArray(violation?.tags) ? violation.tags.slice().sort() : [];
  return {
    source: 'axe',
    file: context.file || '',
    routeKey: context.routeKey || '',
    url: context.url || '',
    type: context.type || 'wcag',
    id,
    impact,
    advisory: advisoryOnly,
    help: String(violation?.help || ''),
    helpUrl: String(violation?.helpUrl || ''),
    tags,
    nodeCount: Array.isArray(violation?.nodes) ? violation.nodes.length : 0,
    nodes: Array.isArray(violation?.nodes) ? violation.nodes.map(normalizeAxeNode) : [],
    suggestion: suggestFixForRule(id)
  };
}

function suggestFixForRule(ruleId) {
  const suggestions = {
    'image-alt': 'Add descriptive `alt` text to informative images, or `alt=""` for decorative images.',
    'frame-title': 'Add a descriptive `title` to each iframe so screen-reader users can identify embedded content.',
    'link-name': 'Ensure every link has visible text or an accessible name (`aria-label`/`aria-labelledby`).',
    'color-contrast': 'Adjust foreground/background colors to meet WCAG contrast minimums; avoid relying on color alone.',
    'heading-order': 'Use hierarchical headings without skipping levels (H1 -> H2 -> H3...).',
    'region': 'Ensure major page sections are inside landmarks (`main`, `nav`, `header`, `footer`) where appropriate.',
    'button-name': 'Give interactive controls a visible label or accessible name.'
  };
  return suggestions[ruleId] || 'Review the axe rule guidance and update the source/component markup to provide semantic structure and accessible labels.';
}

function truncateString(value, maxLen) {
  const str = String(value || '');
  if (str.length <= maxLen) return str;
  return `${str.slice(0, Math.max(0, maxLen - 1))}…`;
}

function getV2DocsJsonRoutes() {
  try {
    const { getV2Pages } = require('../../tools/scripts/test-v2-pages');
    return new Set(getV2Pages().map((route) => normalizeInputPath(route)));
  } catch (error) {
    console.warn(`⚠️  Could not load docs.json v2 pages from tools/scripts/test-v2-pages.js: ${error.message}`);
    return new Set();
  }
}

function routeKeyToUrlPath(routeKey) {
  let key = normalizeInputPath(routeKey).replace(/\.(md|mdx)$/i, '');
  // Preserve version-prefixed routes from docs.json/folder structure (e.g. `v2/...`).
  // Only normalize legacy `v2/pages/...` entries to the migrated `v2/...` shape.
  if (key.startsWith('v2/pages/')) key = `v2/${key.slice('v2/pages/'.length)}`;
  if (key.endsWith('/index')) key = key.slice(0, -('/index'.length));
  if (!key) return '/';
  return `/${key}`;
}

function fileToV2RouteKey(absOrRelPath) {
  return toDocsRouteKeyFromFileV2Aware(absOrRelPath, REPO_ROOT);
}

function resolveFilesForArgs(args) {
  const excludedInputs = [];
  let files = [];

  if (args.mode === 'files') {
    const rawFiles = args.files.map((p) => path.resolve(REPO_ROOT, p));
    files = filterPathsByMintIgnore(rawFiles, {
      rootDir: REPO_ROOT,
      respectMintIgnore: args.respectMintIgnore
    });

    const kept = new Set(files.map((filePath) => path.resolve(filePath)));
    rawFiles.forEach((filePath) => {
      const abs = path.resolve(filePath);
      if (!kept.has(abs)) {
        excludedInputs.push(relFromRoot(abs));
      }
    });
  } else if (args.mode === 'staged') {
    files = getV2DocsFiles({
      rootDir: REPO_ROOT,
      stagedOnly: true,
      respectMintIgnore: args.respectMintIgnore
    });
  } else {
    files = getV2DocsFiles({
      rootDir: REPO_ROOT,
      stagedOnly: false,
      respectMintIgnore: args.respectMintIgnore
    });
  }

  const seen = new Set();
  const out = [];
  files.forEach((filePath) => {
    const abs = path.isAbsolute(filePath) ? filePath : path.resolve(REPO_ROOT, filePath);
    const rel = relFromRoot(abs);
    if (!rel.startsWith('v2/')) return;
    if (!/\.(md|mdx)$/i.test(rel)) return;
    if (isExcludedV2ExperimentalPath(rel)) {
      if (args.mode === 'files') excludedInputs.push(rel);
      return;
    }
    if (!fs.existsSync(abs) || !fs.statSync(abs).isFile()) return;
    if (!seen.has(abs)) {
      seen.add(abs);
      out.push(abs);
    }
  });

  out.sort((a, b) => relFromRoot(a).localeCompare(relFromRoot(b)));
  return { files: out, excludedInputs };
}

function filterFilesToDocsJsonV2Navigation(absPaths, docsRoutes, options = {}) {
  const mode = String(options.mode || 'full');
  const explicitExcluded = [];
  const out = [];
  const seen = new Set();

  (absPaths || []).forEach((filePath) => {
    const abs = path.isAbsolute(filePath) ? filePath : path.resolve(REPO_ROOT, filePath);
    if (seen.has(abs)) return;
    seen.add(abs);

    const routeKey = fileToV2RouteKey(abs);
    if (routeKey && docsRoutes.has(routeKey)) {
      out.push(abs);
      return;
    }

    if (mode === 'files') {
      explicitExcluded.push(relFromRoot(abs));
    }
  });

  out.sort((a, b) => relFromRoot(a).localeCompare(relFromRoot(b)));
  return { files: out, explicitExcluded };
}

function maybeStageFiles(absPaths) {
  const files = [...new Set((absPaths || []).map((p) => path.resolve(p)))];
  if (!files.length) return { attempted: 0, staged: 0, error: '' };
  const rels = files.map((filePath) => relFromRoot(filePath));
  const cmd = spawnSync('git', ['add', '--', ...rels], { cwd: REPO_ROOT, encoding: 'utf8' });
  return {
    attempted: files.length,
    staged: cmd.status === 0 ? files.length : 0,
    error: cmd.status === 0 ? '' : (cmd.stderr || cmd.stdout || 'git add failed').trim()
  };
}

function loadAxeSource() {
  const axePath = require.resolve('axe-core/axe.min.js');
  return fs.readFileSync(axePath, 'utf8');
}

function getPuppeteer() {
  return require('puppeteer');
}

async function runAxeOnUrl(browser, url, options = {}) {
  const page = await browser.newPage();
  const timeoutMs = options.timeoutMs || DEFAULT_TIMEOUT_MS;
  const axeSource = options.axeSource || loadAxeSource();
  const waitAfterNavMs = options.waitAfterNavMs || DEFAULT_WAIT_AFTER_NAV_MS;
  const routeContext = {
    file: options.file || '',
    routeKey: options.routeKey || '',
    url
  };

  try {
    page.setDefaultNavigationTimeout(timeoutMs);
    const response = await page.goto(url, { waitUntil: 'networkidle2', timeout: timeoutMs });
    if (waitAfterNavMs > 0) {
      await new Promise((resolve) => setTimeout(resolve, waitAfterNavMs));
    }
    try {
      await page.waitForFunction(() => document.title && document.title.trim().length > 0, { timeout: 2000 });
    } catch (_error) {
      // ignore title wait timeout
    }
    await page.addScriptTag({ content: axeSource });

    const axeOut = await page.evaluate(async ({ wcagTags, bestPracticeTags }) => {
      const wcag = await window.axe.run(document, {
        runOnly: { type: 'tag', values: wcagTags },
        resultTypes: ['violations', 'incomplete']
      });
      const best = await window.axe.run(document, {
        runOnly: { type: 'tag', values: bestPracticeTags },
        resultTypes: ['violations', 'incomplete']
      });
      return {
        wcag,
        best,
        title: document.title || '',
        h1: document.querySelector('h1')?.innerText || '',
        bodyTextLength: (document.body?.innerText || '').length
      };
    }, {
      wcagTags: WCAG_TAGS,
      bestPracticeTags: BEST_PRACTICE_TAGS
    });

    const isNotFoundShell =
      /page not found/i.test(String(axeOut.title || '')) &&
      /doesn['’]t exist/i.test(String(axeOut.h1 || ''));

    if (isNotFoundShell) {
      return {
        ok: false,
        url,
        file: routeContext.file,
        routeKey: routeContext.routeKey,
        status: response ? response.status() : null,
        title: axeOut.title,
        h1: axeOut.h1,
        bodyTextLength: axeOut.bodyTextLength,
        error: 'Mint not-found shell detected (likely URL/path mapping mismatch for this page).',
        wcagViolations: [],
        bestPracticeViolations: [],
        incomplete: []
      };
    }

    const wcagViolations = (axeOut.wcag.violations || []).map((v) => normalizeAxeViolation(v, { ...routeContext, type: 'wcag' }));
    const bestPracticeViolations = (axeOut.best.violations || []).map((v) => normalizeAxeViolation(v, { ...routeContext, type: 'best-practice' }));
    const incomplete = (axeOut.wcag.incomplete || []).map((v) => normalizeAxeViolation(v, { ...routeContext, type: 'incomplete' }));

    return {
      ok: true,
      url,
      file: routeContext.file,
      routeKey: routeContext.routeKey,
      status: response ? response.status() : null,
      title: axeOut.title,
      h1: axeOut.h1,
      bodyTextLength: axeOut.bodyTextLength,
      wcagViolations,
      bestPracticeViolations,
      incomplete
    };
  } catch (error) {
    return {
      ok: false,
      url,
      file: routeContext.file,
      routeKey: routeContext.routeKey,
      status: null,
      title: '',
      h1: '',
      bodyTextLength: 0,
      error: error.message,
      wcagViolations: [],
      bestPracticeViolations: [],
      incomplete: []
    };
  } finally {
    await page.close();
  }
}

async function createBrowserAndMaybeServer(baseUrlArg, options = {}) {
  const { probePath, allowCommonPorts } = options;
  let startedServer = false;
  let baseUrl = String(baseUrlArg || '').trim();
  let serverManager = null;

  if (!baseUrl) {
    serverManager = require('../../.githooks/server-manager');
    startedServer = await serverManager.ensureServerRunning({ probePath, allowCommonPorts });
    baseUrl = serverManager.getServerUrl();
  }

  const puppeteer = getPuppeteer();
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  return {
    browser,
    baseUrl,
    cleanup: async () => {
      try {
        await browser.close();
      } catch (_error) {
        // ignore
      }
      if (serverManager && startedServer) {
        try {
          serverManager.stopServer();
        } catch (_error) {
          // ignore
        }
      }
    }
  };
}

function summarizeResults(results, allStaticFindings, failImpact) {
  const wcagViolations = [];
  const bestPractice = [];
  const incomplete = [];
  const staticOpen = [];
  const staticFixed = [];
  const autofixes = [];

  (results || []).forEach((result) => {
    (result.wcagViolations || []).forEach((v) => wcagViolations.push(v));
    (result.bestPracticeViolations || []).forEach((v) => bestPractice.push(v));
    (result.incomplete || []).forEach((v) => incomplete.push(v));
    (result.autofixes || []).forEach((f) => autofixes.push({ ...f, file: result.file }));
  });

  (allStaticFindings || []).forEach((finding) => {
    if (finding.fixed) staticFixed.push(finding);
    else staticOpen.push(finding);
  });

  const blockingWcag = wcagViolations.filter((v) => severityMeetsThreshold(v.impact, failImpact));
  const blockingStatic = staticOpen.filter((f) => severityMeetsThreshold(f.impact, failImpact));
  const ruleCounts = {};
  wcagViolations.forEach((v) => {
    ruleCounts[v.id] = (ruleCounts[v.id] || 0) + 1;
  });
  staticOpen.forEach((f) => {
    ruleCounts[f.rule] = (ruleCounts[f.rule] || 0) + 1;
  });

  return {
    totals: {
      results: results.length,
      wcagViolations: wcagViolations.length,
      bestPracticeViolations: bestPractice.length,
      incomplete: incomplete.length,
      staticOpen: staticOpen.length,
      staticFixed: staticFixed.length,
      autofixes: autofixes.length,
      blockingWcag: blockingWcag.length,
      blockingStatic: blockingStatic.length,
      // Runtime/navigation failures are reported separately and are not counted as WCAG blocking totals.
      blockingTotal: blockingWcag.length + blockingStatic.length
    },
    impacts: {
      wcag: impactCounts(wcagViolations),
      bestPractice: impactCounts(bestPractice),
      staticOpen: impactCounts(staticOpen),
      staticFixed: impactCounts(staticFixed)
    },
    byRule: Object.fromEntries(sortedObjectEntries(ruleCounts)),
    blockingWcag,
    blockingStatic,
    wcagViolations,
    bestPractice,
    incomplete,
    staticOpen,
    staticFixed,
    autofixes
  };
}

function collectTopSuggestions(summary) {
  const counts = new Map();
  const add = (rule, suggestion) => {
    if (!rule || !suggestion) return;
    const key = `${rule}::${suggestion}`;
    const item = counts.get(key) || { rule, suggestion, count: 0 };
    item.count += 1;
    counts.set(key, item);
  };
  (summary.wcagViolations || []).forEach((v) => add(v.id, v.suggestion));
  (summary.staticOpen || []).forEach((f) => add(f.rule, f.suggestion));
  return [...counts.values()]
    .sort((a, b) => b.count - a.count || a.rule.localeCompare(b.rule))
    .slice(0, 20);
}

function buildJsonReport({
  args,
  files,
  excludedInputs,
  browserTargetCount,
  browserAuditedCount,
  staticOnlyCount,
  results,
  allStaticFindings,
  summary,
  suggestions,
  baseUrl,
  runtimeDiagnostics
}) {
  return {
    metadata: {
      timestamp: new Date().toISOString(),
      mode: args.mode,
      wcagProfile: WCAG_PROFILE,
      failImpact: args.failImpact,
      advisoryOnlyRules: Array.from(ADVISORY_ONLY_RULES),
      baseUrl: baseUrl || '',
      fixEnabled: args.fix,
      maxPages: args.maxPages,
      reportMarkdown: relFromRoot(args.report),
      reportJson: relFromRoot(args.reportJson),
      respectMintIgnore: args.respectMintIgnore
    },
    scope: {
      filesScanned: files.map(relFromRoot),
      filesExcluded: excludedInputs,
      totalFilesScanned: files.length,
      browserTargetPages: browserTargetCount,
      browserAuditedPages: browserAuditedCount,
      staticOnlyFiles: staticOnlyCount
    },
    summary: {
      ...summary.totals,
      runtimeDiagnostics: (runtimeDiagnostics || []).length,
      impacts: summary.impacts,
      byRule: summary.byRule
    },
    runtimeDiagnostics: runtimeDiagnostics || [],
    results,
    autofix: {
      applied: summary.autofixes,
      reviewRequired: summary.autofixes.filter((f) => f.reviewRequired)
    },
    staticFindings: allStaticFindings,
    suggestions
  };
}

function buildMarkdownReport(report) {
  const lines = [];
  const md = report.metadata;
  const sum = report.summary;

  lines.push('# V2 WCAG Accessibility Audit Report');
  lines.push('');
  lines.push(`- Timestamp: ${md.timestamp}`);
  lines.push(`- Mode: ${md.mode}`);
  lines.push(`- WCAG Profile: ${md.wcagProfile}`);
  lines.push(`- Fail Threshold: ${md.failImpact}`);
  lines.push(`- Base URL: ${md.baseUrl || '(none / static-only run)'}`);
  lines.push(`- Fix Enabled (default): ${md.fixEnabled ? 'yes' : 'no'}`);
  lines.push(`- Max Browser Pages: ${md.maxPages === null ? 'unlimited' : md.maxPages}`);
  lines.push('');

  lines.push('## Summary');
  lines.push('');
  lines.push(`- Files scanned: ${report.scope.totalFilesScanned}`);
  lines.push(`- Browser target pages: ${report.scope.browserTargetPages ?? report.scope.browserAuditedPages}`);
  lines.push(`- Browser-audited pages: ${report.scope.browserAuditedPages}`);
  lines.push(`- Static-only files: ${report.scope.staticOnlyFiles}`);
  lines.push(`- WCAG violations: ${sum.wcagViolations}`);
  lines.push(`- Best-practice violations (advisory): ${sum.bestPracticeViolations}`);
  lines.push(`- Incomplete/manual-review results: ${sum.incomplete}`);
  lines.push(`- Static findings still open: ${sum.staticOpen}`);
  lines.push(`- Static findings auto-fixed: ${sum.staticFixed}`);
  lines.push(`- Autofix edits applied: ${sum.autofixes}`);
  lines.push(`- Runtime/navigation failures (ignored): ${sum.runtimeDiagnostics || 0}`);
  lines.push(`- Blocking WCAG/static issues (>= ${md.failImpact}): ${sum.blockingTotal}`);
  if ((report.scope.browserTargetPages ?? 0) > report.scope.browserAuditedPages) {
    lines.push(`- Browser audit completion: incomplete (${report.scope.browserAuditedPages}/${report.scope.browserTargetPages})`);
  }
  lines.push('');

  lines.push('## Blocking Issues');
  lines.push('');
  if (sum.blockingTotal === 0) {
    lines.push('_No blocking issues found at configured threshold._');
  } else {
    const blockingRows = [];
    (report.results || []).forEach((r) => {
      (r.wcagViolations || []).forEach((v) => {
        if (severityMeetsThreshold(v.impact, md.failImpact)) {
          blockingRows.push({ file: r.file, impact: v.impact, rule: v.id, line: '', note: v.help });
        }
      });
      (r.staticFindings || []).forEach((f) => {
        if (!f.fixed && severityMeetsThreshold(f.impact, md.failImpact)) {
          blockingRows.push({ file: r.file, impact: f.impact, rule: f.rule, line: f.line || '', note: f.message });
        }
      });
    });
    blockingRows.sort((a, b) => a.file.localeCompare(b.file) || (IMPACT_RANK[b.impact] - IMPACT_RANK[a.impact]) || a.rule.localeCompare(b.rule));
    blockingRows.forEach((row) => {
      lines.push(`- \`${row.file}\` [${row.impact}] ${row.rule}${row.line ? ` (line ${row.line})` : ''}: ${row.note}`);
    });
  }
  lines.push('');

  lines.push('## Top Rules And Suggestions');
  lines.push('');
  if (!(report.suggestions || []).length) {
    lines.push('_No suggestions generated._');
  } else {
    report.suggestions.forEach((s) => {
      lines.push(`- **${s.rule}** (${s.count}) - ${s.suggestion}`);
    });
  }
  lines.push('');

  lines.push('## Autofixes Applied');
  lines.push('');
  if (!(report.autofix?.applied || []).length) {
    lines.push('_No autofixes applied._');
  } else {
    report.autofix.applied
      .slice()
      .sort((a, b) => (a.file || '').localeCompare(b.file || '') || (a.line || 0) - (b.line || 0))
      .forEach((f) => {
        const inserted = Object.entries(f.inserted || {}).map(([k, v]) => `${k}="${v}"`).join(', ');
        lines.push(`- \`${f.file}\`:${f.line || 1} - ${f.rule} -> added ${inserted}${f.reviewRequired ? ' (review suggested)' : ''}`);
      });
  }
  lines.push('');

  lines.push('## Static-Only Findings');
  lines.push('');
  const staticOnly = (report.results || []).filter((r) => r.kind === 'static-only' || (r.kind === 'browser+static' && !(r.routeKey && r.browserAudited)));
  if (!staticOnly.some((r) => (r.staticFindings || []).some((f) => !f.fixed))) {
    lines.push('_No open static-only findings._');
  } else {
    staticOnly.forEach((r) => {
      (r.staticFindings || [])
        .filter((f) => !f.fixed)
        .forEach((f) => lines.push(`- \`${r.file}\`:${f.line || 1} [${f.impact}] ${f.rule} - ${f.message}`));
    });
  }
  lines.push('');

  lines.push('## Runtime/Navigation Failures');
  lines.push('');
  const runtimeDiagnostics = report.runtimeDiagnostics || [];
  if (!runtimeDiagnostics.length) {
    lines.push('_No runtime/navigation failures recorded._');
  } else {
    const grouped = new Map();
    runtimeDiagnostics.forEach((item) => {
      const key = item.error || 'Unknown error';
      const entries = grouped.get(key) || [];
      entries.push(item);
      grouped.set(key, entries);
    });
    [...grouped.entries()]
      .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
      .forEach(([error, entries]) => {
        const examples = entries.slice(0, 5).map((e) => `\`${e.file}\``).join(', ');
        lines.push(`- ${entries.length}× ${error}${examples ? ` (examples: ${examples})` : ''}`);
      });
  }
  lines.push('');

  lines.push('## Notes');
  lines.push('');
  lines.push('- Automated WCAG checks are partial coverage and do not replace manual accessibility review (keyboard, screen-reader UX, content meaning, and task flows).');
  if ((md.advisoryOnlyRules || []).length) {
    lines.push(`- Advisory-only WCAG rules (non-blocking): ${md.advisoryOnlyRules.join(', ')}.`);
  }
  lines.push('- Best-practice findings are reported separately as advisory and are not blocking by default.');
  lines.push('- Default autofix only applies conservative raw-tag attribute insertions (iframe title, img alt, empty/icon-only anchor aria-label).');
  lines.push('');

  return lines.join('\n');
}

function writeReports(args, jsonReport) {
  ensureDir(path.dirname(args.report));
  ensureDir(path.dirname(args.reportJson));
  fs.writeFileSync(args.reportJson, JSON.stringify(jsonReport, null, 2));
  fs.writeFileSync(args.report, buildMarkdownReport(jsonReport));
}

async function runAudit(options = {}) {
  const args = options.parsedArgs || parseArgs(options.argv || process.argv.slice(2));
  if (args.help) {
    printHelp();
    return { exitCode: 0, args, help: true };
  }

  const docsRoutes = getV2DocsJsonRoutes();
  if (docsRoutes.size === 0) {
    console.error('❌ Could not load v2 docs.json navigation routes; refusing to run WCAG audit with an empty route set.');
    return { exitCode: 1, args, error: 'empty-v2-docs-json-routes' };
  }

  const resolved = resolveFilesForArgs(args);
  let files = resolved.files;
  const excludedInputs = [...resolved.excludedInputs];
  if (excludedInputs.length) {
    excludedInputs.forEach((rel) => console.warn(`⚠️  Excluding x-* path from audit scope: ${rel}`));
  }

  const navFiltered = filterFilesToDocsJsonV2Navigation(files, docsRoutes, { mode: args.mode });
  const nonNavExcludedCount = files.length - navFiltered.files.length;
  files = navFiltered.files;
  if (navFiltered.explicitExcluded.length) {
    navFiltered.explicitExcluded.forEach((rel) => {
      console.warn(`⚠️  Excluding non-navigation v2 path from WCAG scope (not in docs.json v2 navigation): ${rel}`);
      excludedInputs.push(rel);
    });
  } else if (nonNavExcludedCount > 0) {
    console.log(`ℹ️  Excluding ${nonNavExcludedCount} v2 file(s) not present in docs.json v2 navigation from WCAG scope.`);
  }

  if (files.length === 0) {
    console.log('ℹ️  No matching v2 docs.json navigation files to audit.');
    if (args.mode === 'staged') {
      console.log('ℹ️  Staged mode with no matching files; leaving existing reports unchanged.');
      return { exitCode: 0, args, skipped: true, files: [] };
    }
    const emptyResults = [];
    const summary = summarizeResults(emptyResults, [], args.failImpact);
    const suggestions = [];
    const jsonReport = buildJsonReport({
      args,
      files,
      excludedInputs,
      browserTargetCount: 0,
      browserAuditedCount: 0,
      staticOnlyCount: 0,
      results: emptyResults,
      allStaticFindings: [],
      summary,
      suggestions,
      baseUrl: args.baseUrl || '',
      runtimeDiagnostics: []
    });
    writeReports(args, jsonReport);
    return { exitCode: 0, args, jsonReport, results: emptyResults, files };
  }

  console.log(`♿ Auditing ${files.length} v2 docs.json navigation file(s) (mode: ${args.mode})`);
  console.log(`   WCAG profile: ${WCAG_PROFILE}`);
  console.log(`   Fail threshold: ${args.failImpact}`);
  console.log(`   Autofix: ${args.fix ? 'enabled (default)' : 'disabled'}`);
  const allStaticFindings = [];
  const results = [];
  const changedContentFiles = [];
  const runtimeDiagnostics = [];

  // Static scan + optional autofix for all files.
  for (const absPath of files) {
    const relPath = relFromRoot(absPath);
    const original = fs.readFileSync(absPath, 'utf8');
    const fixPass = applyConservativeAutofixes(original, relPath, { fix: args.fix });

    if (args.fix && fixPass.changed) {
      fs.writeFileSync(absPath, fixPass.content, 'utf8');
      changedContentFiles.push(absPath);
    }

    allStaticFindings.push(...fixPass.findings);

    const routeKey = fileToV2RouteKey(absPath);
    const isRoutable = Boolean(routeKey && docsRoutes.has(routeKey));
    results.push({
      file: relPath,
      routeKey,
      kind: isRoutable ? 'browser+static' : 'static-only',
      browserAudited: false,
      url: '',
      status: null,
      title: '',
      h1: '',
      bodyTextLength: 0,
      wcagViolations: [],
      bestPracticeViolations: [],
      incomplete: [],
      staticFindings: fixPass.findings,
      autofixes: fixPass.autofixes
    });
  }

  let stageResult = { attempted: 0, staged: 0, error: '' };
  if (args.stage && changedContentFiles.length) {
    stageResult = maybeStageFiles(changedContentFiles);
    if (stageResult.error) {
      console.warn(`⚠️  Failed to stage some autofixed files: ${stageResult.error}`);
    }
  }

  // Browser audit for routable pages only.
  const browserCandidates = results.filter((r) => r.kind === 'browser+static');
  const cappedCandidates = args.maxPages === null ? browserCandidates : browserCandidates.slice(0, args.maxPages);
  const staticOnlyCount = results.length - cappedCandidates.length;

  let browserCtx = null;
  if (cappedCandidates.length > 0) {
    console.log(`🌐 Browser WCAG audit target pages: ${cappedCandidates.length}${browserCandidates.length > cappedCandidates.length ? ` (capped from ${browserCandidates.length})` : ''}`);
    try {
      const probePath = cappedCandidates[0]?.routeKey ? routeKeyToUrlPath(cappedCandidates[0].routeKey) : '';
      browserCtx = await createBrowserAndMaybeServer(args.baseUrl, { probePath, allowCommonPorts: false });
      const axeSource = loadAxeSource();
      for (const item of cappedCandidates) {
        const urlPath = routeKeyToUrlPath(item.routeKey);
        const url = `${String(browserCtx.baseUrl).replace(/\/$/, '')}${urlPath}`;
        process.stdout.write(`   - ${item.file} -> ${urlPath} ... `);
        const pageResult = await runAxeOnUrl(browserCtx.browser, url, {
          file: item.file,
          routeKey: item.routeKey,
          axeSource,
          timeoutMs: args.timeoutMs
        });
        item.url = url;
        item.status = pageResult.status;
        item.title = pageResult.title;
        item.h1 = pageResult.h1;
        item.bodyTextLength = pageResult.bodyTextLength;
        if (!pageResult.ok) {
          item.kind = 'static-only';
          runtimeDiagnostics.push({ file: item.file, routeKey: item.routeKey, url, error: pageResult.error });
          console.log('⚠️  skipped (non-WCAG runtime issue)');
        } else {
          item.browserAudited = true;
          item.wcagViolations = pageResult.wcagViolations;
          item.bestPracticeViolations = pageResult.bestPracticeViolations;
          item.incomplete = pageResult.incomplete;
          console.log(`✅ ${pageResult.wcagViolations.length} WCAG / ${pageResult.bestPracticeViolations.length} BP`);
        }
      }
    } catch (error) {
      console.error(`❌ Browser WCAG audit infrastructure failed: ${error.message}`);
      cappedCandidates.forEach((item) => {
        if (!item.browserAudited) {
          item.kind = 'static-only';
          runtimeDiagnostics.push({
            file: item.file,
            routeKey: item.routeKey,
            url: item.url,
            error: `Browser infrastructure error: ${error.message}`
          });
        }
      });
    } finally {
      if (browserCtx) {
        await browserCtx.cleanup();
      }
    }
  } else {
    console.log('ℹ️  No routable v2 docs pages in scope for browser WCAG audit; reporting static-only results.');
  }

  // Any routable candidates skipped due to max-pages remain static-only in this run.
  if (browserCandidates.length > cappedCandidates.length) {
    browserCandidates.slice(cappedCandidates.length).forEach((item) => {
      item.kind = 'static-only';
    });
  }

  results.sort((a, b) => a.file.localeCompare(b.file));
  results.forEach((r) => {
    r.wcagViolations.sort((a, b) => (IMPACT_RANK[b.impact] - IMPACT_RANK[a.impact]) || a.id.localeCompare(b.id));
    r.bestPracticeViolations.sort((a, b) => (IMPACT_RANK[b.impact] - IMPACT_RANK[a.impact]) || a.id.localeCompare(b.id));
    r.incomplete.sort((a, b) => (IMPACT_RANK[b.impact] - IMPACT_RANK[a.impact]) || a.id.localeCompare(b.id));
    r.staticFindings.sort((a, b) => (a.line || 0) - (b.line || 0) || a.rule.localeCompare(b.rule));
    r.autofixes.sort((a, b) => (a.line || 0) - (b.line || 0) || String(a.rule || '').localeCompare(String(b.rule || '')));
  });

  const summary = summarizeResults(results, allStaticFindings, args.failImpact);
  const suggestions = collectTopSuggestions(summary);
  const baseUrlForReport = browserCtx ? browserCtx.baseUrl : (args.baseUrl || '');
  const actualBrowserAuditedCount = results.filter((r) => r.browserAudited).length;
  const browserTargetCount = cappedCandidates.length;
  const jsonReport = buildJsonReport({
    args,
    files,
    excludedInputs,
    browserTargetCount,
    browserAuditedCount: actualBrowserAuditedCount,
    staticOnlyCount: results.filter((r) => r.kind === 'static-only').length,
    results,
    allStaticFindings,
    summary,
    suggestions,
    baseUrl: baseUrlForReport,
    runtimeDiagnostics
  });
  writeReports(args, jsonReport);

  console.log('');
  console.log('📊 WCAG Audit Summary');
  console.log(`   Files scanned: ${jsonReport.scope.totalFilesScanned}`);
  console.log(`   Browser target pages: ${jsonReport.scope.browserTargetPages}`);
  console.log(`   Browser-audited pages: ${jsonReport.scope.browserAuditedPages}`);
  console.log(`   Static-only files: ${jsonReport.scope.staticOnlyFiles}`);
  console.log(`   WCAG violations: ${summary.totals.wcagViolations}`);
  console.log(`   Best-practice (advisory): ${summary.totals.bestPracticeViolations}`);
  console.log(`   Static findings open/fixed: ${summary.totals.staticOpen}/${summary.totals.staticFixed}`);
  console.log(`   Autofix edits applied: ${summary.totals.autofixes}`);
  if (args.stage) {
    console.log(`   Autofix files staged: ${stageResult.staged}/${stageResult.attempted}`);
  }
  console.log(`   Non-WCAG runtime diagnostics (ignored): ${runtimeDiagnostics.length}`);
  console.log(`   Blocking total (>= ${args.failImpact}): ${summary.totals.blockingTotal}`);
  console.log(`   Report (md): ${relFromRoot(args.report)}`);
  console.log(`   Report (json): ${relFromRoot(args.reportJson)}`);

  const exitCode = summary.totals.blockingTotal > 0 ? 1 : 0;
  return {
    exitCode,
    args,
    files,
    results,
    jsonReport,
    summary,
    stageResult
  };
}

if (require.main === module) {
  runAudit({ argv: process.argv.slice(2) })
    .then((out) => process.exit(out.exitCode || 0))
    .catch((error) => {
      console.error(`v2-wcag-audit failed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = {
  WCAG_TAGS,
  BEST_PRACTICE_TAGS,
  WCAG_PROFILE,
  DEFAULT_REPORT_MD,
  DEFAULT_REPORT_JSON,
  parseArgs,
  normalizeImpact,
  severityMeetsThreshold,
  impactCounts,
  buildSkipRanges,
  getLineNumberFromIndex,
  deriveIframeTitle,
  deriveImgAlt,
  deriveAnchorAriaLabel,
  describeHref,
  routeKeyToUrlPath,
  fileToV2RouteKey,
  applyConservativeAutofixes,
  normalizeAxeViolation,
  suggestFixForRule,
  buildMarkdownReport,
  buildJsonReport,
  collectTopSuggestions,
  summarizeResults,
  runAxeOnUrl,
  runAudit
};
