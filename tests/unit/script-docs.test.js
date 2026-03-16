#!/usr/bin/env node
/**
 * @script            script-docs-test
 * @category          validator
 * @purpose           qa:repo-health
 * @scope             .githooks, .github/scripts, tests, tools/scripts, tasks/scripts, docs-guide/catalog/scripts-catalog.mdx
 * @domain            docs
 * @needs             E-C1, R-R14
 * @purpose-statement Enforces script header schema, keeps group script indexes in sync, and builds aggregate script catalog
 * @pipeline          P1, P3
 * @dualmode          --check (validator) | --write --rebuild-indexes (generator)
 * @usage             node tests/unit/script-docs.test.js [flags]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const {
  buildGeneratedFrontmatterLines,
  buildGeneratedHiddenBannerLines,
  buildGeneratedNoteLines
} = require('../../tools/lib/generated-file-banners');
const {
  extractLeadingScriptHeader,
  getSectionLines,
  getTagValue,
  hasFrameworkHeaderTags
} = require('../../tools/lib/script-header-utils');
const {
  AGGREGATE_INDEX_PATH,
  CLASSIFICATION_DATA_PATH,
  GOVERNED_ROOTS,
  GROUP_INDEX_MAP,
  INDEXED_ROOTS,
  LEGACY_AGGREGATE_INDEX_PATH,
  SCRIPT_EXTENSIONS: GOVERNED_SCRIPT_EXTENSIONS,
  isWithinRoots,
  normalizeRepoPath,
  shouldExcludeScriptPath
} = require('../../tools/lib/script-governance-config');

const REPO_ROOT = path.resolve(__dirname, '../..');
const INDEX_START = '{/* SCRIPT-INDEX:START */}';
const INDEX_END = '{/* SCRIPT-INDEX:END */}';

const LEGACY_REQUIRED_TAGS = [
  '@script',
  '@summary',
  '@owner',
  '@scope',
  '@usage',
  '@inputs',
  '@outputs',
  '@exit-codes',
  '@examples',
  '@notes'
];

const LEGACY_INLINE_REQUIRED_TAGS = ['@script', '@summary', '@owner', '@scope'];
const LEGACY_BLOCK_REQUIRED_TAGS = ['@usage', '@inputs', '@outputs', '@exit-codes', '@examples', '@notes'];
const FRAMEWORK_REQUIRED_TAGS = [
  '@script',
  '@category',
  '@purpose',
  '@scope',
  '@domain',
  '@needs',
  '@purpose-statement',
  '@pipeline',
  '@usage'
];
const FRAMEWORK_INLINE_REQUIRED_TAGS = FRAMEWORK_REQUIRED_TAGS;
const PLACEHOLDER_PATTERNS = [
  /^<.*>$/,
  /^todo\b/i,
  /^tbd\b/i,
  /^fill\b/i,
  /^replace$/i,
  /^replace me$/i,
  /^n\/a$/i,
  /^none$/i,
  /^placeholder$/i
];

const SCRIPT_EXTENSIONS = new Set(GOVERNED_SCRIPT_EXTENSIONS);
const VALIDATION_ROOTS = GOVERNED_ROOTS;
const CLASSIFICATION_ROOTS = GOVERNED_ROOTS;
const AGGREGATE_FRONTMATTER_LINES = buildGeneratedFrontmatterLines({
  title: 'Scripts Catalog',
  sidebarTitle: 'Scripts Catalog',
  description: 'This page provides an aggregate catalog inventory of repository scripts generated from group script indexes.',
  keywords: ['livepeer', 'scripts catalog', 'aggregate inventory', 'repository', 'scripts']
});
const AGGREGATE_DETAILS = {
  script: 'tests/unit/script-docs.test.js',
  purpose: 'Enforce script header schema, keep group script indexes in sync, and build aggregate script catalog.',
  runWhen: 'Script metadata changes in validation roots or script changes in indexed roots.',
  runCommand: 'node tests/unit/script-docs.test.js --write --rebuild-indexes'
};

function readFileSafe(repoPath) {
  try {
    return fs.readFileSync(path.join(REPO_ROOT, repoPath), 'utf8');
  } catch (_err) {
    return '';
  }
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function shouldExclude(repoPath) {
  const p = normalizeRepoPath(repoPath);
  return shouldExcludeScriptPath(p) || p.includes('/.venv/') || p.startsWith('.venv/') || p.includes('/tmp/') || p.startsWith('tmp/');
}

function isScriptFile(repoPath) {
  if (shouldExclude(repoPath)) return false;
  const ext = path.extname(repoPath).toLowerCase();
  if (SCRIPT_EXTENSIONS.has(ext)) return true;
  const content = readFileSafe(repoPath);
  return content.startsWith('#!/usr/bin/env') || content.startsWith('#!/bin/');
}

function walkFiles(dirPath, out = []) {
  const full = path.join(REPO_ROOT, dirPath);
  if (!fs.existsSync(full)) return out;

  const entries = fs.readdirSync(full, { withFileTypes: true });
  for (const entry of entries) {
    const rel = normalizeRepoPath(path.join(dirPath, entry.name));
    if (shouldExclude(rel)) continue;
    if (entry.isDirectory()) {
      walkFiles(rel, out);
    } else {
      out.push(rel);
    }
  }
  return out;
}

function getTrackedFilesForRoot(dirPath) {
  try {
    const output = execSync(`git ls-files -- "${normalizeRepoPath(dirPath)}"`, {
      cwd: REPO_ROOT,
      encoding: 'utf8'
    });

    return output
      .split('\n')
      .map((line) => normalizeRepoPath(line.trim()))
      .filter(Boolean)
      .filter((repoPath) => fileExists(repoPath));
  } catch (_err) {
    return [];
  }
}

function getScriptsForRoots(roots) {
  const scripts = [];
  for (const root of roots) {
    const trackedFiles = getTrackedFilesForRoot(root);
    if (trackedFiles.length > 0) {
      scripts.push(...trackedFiles);
      continue;
    }
    walkFiles(root, scripts);
  }
  return [...new Set(scripts)].filter(isScriptFile).sort();
}

function getAllValidationScripts() {
  return getScriptsForRoots(VALIDATION_ROOTS);
}

function getAllIndexedScripts() {
  return getScriptsForRoots(INDEXED_ROOTS);
}

function getAllClassificationScripts() {
  return getScriptsForRoots(CLASSIFICATION_ROOTS);
}

function isManagedRootPath(repoPath) {
  return isWithinRoots(repoPath, CLASSIFICATION_ROOTS);
}

function fileExists(repoPath) {
  const fullPath = path.join(REPO_ROOT, repoPath);
  return fs.existsSync(fullPath) && fs.statSync(fullPath).isFile();
}

function loadClassificationData() {
  const fullPath = path.join(REPO_ROOT, CLASSIFICATION_DATA_PATH);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const parsed = JSON.parse(raw);

  if (!Array.isArray(parsed)) {
    throw new Error('Classification data must be a JSON array.');
  }

  return parsed.map((row, index) => {
    if (!row || typeof row !== 'object' || Array.isArray(row)) {
      throw new Error(`classification[${index}] must be an object.`);
    }

    const repoPath = normalizeRepoPath(String(row.path || '').trim());
    if (!repoPath) {
      throw new Error(`classification[${index}].path is required.`);
    }

    return { ...row, path: repoPath };
  });
}

function validateClassificationCoverage(scopedScripts, classificationRows) {
  const errors = [];
  const liveScripts = [...new Set(scopedScripts.map(normalizeRepoPath))].sort();
  const managedRows = classificationRows
    .filter((row) => isManagedRootPath(row.path))
    .sort((a, b) => a.path.localeCompare(b.path));
  const classifiedPaths = new Set(managedRows.map((row) => row.path));

  for (const scriptPath of liveScripts) {
    if (!classifiedPaths.has(scriptPath)) {
      errors.push({
        file: CLASSIFICATION_DATA_PATH,
        rule: 'Script classification coverage',
        message: `Missing classification row for managed script: ${scriptPath}`,
        line: 1
      });
    }
  }

  for (const row of managedRows) {
    if (!fileExists(row.path)) {
      errors.push({
        file: CLASSIFICATION_DATA_PATH,
        rule: 'Script classification coverage',
        message: `Classification row points to a missing file: ${row.path}`,
        line: 1
      });
    }
  }

  for (const row of classificationRows) {
    if (row.path === 'tools/scripts/archive' || row.path.startsWith('tools/scripts/archive/')) {
      errors.push({
        file: CLASSIFICATION_DATA_PATH,
        rule: 'Script classification coverage',
        message: `Archive path must not appear in script classifications: ${row.path}`,
        line: 1
      });
    }
  }

  return errors;
}

function getStagedAddedScripts() {
  let output = '';
  try {
    output = execSync('git diff --cached --name-only --diff-filter=A', { cwd: REPO_ROOT, encoding: 'utf8' });
  } catch (_err) {
    return [];
  }

  return output
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map(normalizeRepoPath)
    .filter((file) => isWithinRoots(file, VALIDATION_ROOTS))
    .filter(isScriptFile);
}

function detectHeaderMode(header) {
  return hasFrameworkHeaderTags(header) ? 'framework' : 'legacy';
}

function isPlaceholderValue(value) {
  const v = String(value || '').trim();
  if (!v) return true;
  return PLACEHOLDER_PATTERNS.some((pattern) => pattern.test(v));
}

function extractPrimaryUsage(header) {
  const inlineUsage = getTagValue(header, '@usage');
  const lines = getSectionLines(header, '@usage');
  const command = [
    inlineUsage && !isPlaceholderValue(inlineUsage) ? inlineUsage : '',
    ...lines.filter((line) => line && !line.startsWith('@'))
  ]
    .filter(Boolean)
    .join(' ')
    .replace(/\s*\\\s*/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return command;
}

function normalizeTableCellValue(value) {
  return String(value || '')
    .replace(/\r?\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeMarkdownTableCell(value) {
  return normalizeTableCellValue(value).replace(/\|/g, '\\|');
}

function escapeMdxTableCell(value) {
  return normalizeTableCellValue(value)
    .replace(/&/g, '&amp;')
    .replace(/\|/g, '&#124;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;');
}

function renderMdxCodeCell(value) {
  const escaped = escapeMdxTableCell(value);
  if (!escaped) return '';
  return escaped.includes('`') ? `<code>${escaped}</code>` : `\`${escaped}\``;
}

function validateTemplate(repoPath) {
  const content = readFileSafe(repoPath);
  const header = extractLeadingScriptHeader(content);
  const mode = detectHeaderMode(header);
  const requiredTags = mode === 'framework' ? FRAMEWORK_REQUIRED_TAGS : LEGACY_REQUIRED_TAGS;
  const inlineTags = mode === 'framework' ? FRAMEWORK_INLINE_REQUIRED_TAGS : LEGACY_INLINE_REQUIRED_TAGS;
  const blockTags = mode === 'framework' ? [] : LEGACY_BLOCK_REQUIRED_TAGS;
  const missing = requiredTags.filter((tag) => {
    if (mode === 'framework') {
      return !getTagValue(header, tag);
    }
    return !header.includes(tag);
  });
  const empty = [];

  for (const tag of inlineTags) {
    if (missing.includes(tag)) continue;
    const value = getTagValue(header, tag);
    if (isPlaceholderValue(value)) empty.push(tag);
  }

  for (const tag of blockTags) {
    if (missing.includes(tag)) continue;
    const sectionLines = getSectionLines(header, tag);
    const meaningful = sectionLines.filter((line) => !isPlaceholderValue(line));
    if (meaningful.length === 0) empty.push(tag);
  }

  const summary = mode === 'framework'
    ? getTagValue(header, '@purpose-statement') ||
      getTagValue(header, '@purpose') ||
      getTagValue(header, '@summary') ||
      ''
    : getTagValue(header, '@summary') ||
      getTagValue(header, '@purpose-statement') ||
      getTagValue(header, '@purpose') ||
      '';
  const usage = extractPrimaryUsage(header) || (mode === 'framework' ? buildUsageDefault(repoPath) : '');

  return {
    file: repoPath,
    valid: missing.length === 0 && empty.length === 0,
    missing,
    empty,
    script: getTagValue(header, '@script') || path.basename(repoPath),
    summary,
    domain: getTagValue(header, '@domain') || '',
    usage
  };
}

function buildUsageDefault(repoPath) {
  if (repoPath.endsWith('.sh') || repoPath.endsWith('.bash')) return `bash ${repoPath}`;
  if (repoPath.endsWith('.py')) return `python3 ${repoPath}`;
  return `node ${repoPath}`;
}

function collectFilesFromArgs(args) {
  const files = [];
  for (let i = 0; i < args.length; i += 1) {
    const token = args[i];
    if (token === '--files' || token === '--file') {
      const raw = String(args[i + 1] || '').trim();
      if (raw) {
        raw
          .split(',')
          .map((part) => part.trim())
          .filter(Boolean)
          .forEach((part) => files.push(part));
      }
      i += 1;
    }
  }
  return [...new Set(files.map(normalizeRepoPath))];
}

function buildTemplateValues(repoPath, placeholderMode) {
  const scriptName = path.basename(repoPath, path.extname(repoPath));
  const usageDefault = buildUsageDefault(repoPath);
  const group = GROUP_INDEX_MAP.find((g) => repoPath === g.root || repoPath.startsWith(`${g.root}/`));
  const domainValue = 'docs';

  if (placeholderMode) {
    return {
      script: scriptName,
      summary: 'TODO: one-line purpose',
      domain: domainValue,
      scope: group ? group.root : path.dirname(repoPath),
      usage: usageDefault,
      inputs: 'TODO: --flag <description> (default: ...)',
      outputs: 'TODO: output file/path/side effect',
      exitCodes: ['0 = success', '1 = failure'],
      examples: usageDefault,
      notes: 'TODO: caveats, constraints, safety notes'
    };
  }

  return {
    script: scriptName,
    summary: `Utility script for ${repoPath}.`,
    domain: domainValue,
    scope: group ? group.root : path.dirname(repoPath),
    usage: usageDefault,
    inputs: 'No required CLI flags; optional flags are documented inline.',
    outputs: 'Console output and/or file updates based on script purpose.',
    exitCodes: ['0 = success', '1 = runtime or validation failure'],
    examples: usageDefault,
    notes: 'Keep script behavior deterministic and update script indexes after changes.'
  };
}

function buildTemplateBlock(repoPath, placeholderMode) {
  const values = buildTemplateValues(repoPath, placeholderMode);
  const hashStyle = repoPath.endsWith('.sh') || repoPath.endsWith('.bash') || repoPath.endsWith('.py');

  if (hashStyle) {
    return [
      `# @script ${values.script}`,
      `# @summary ${values.summary}`,
      `# @domain ${values.domain}`,
      `# @scope ${values.scope}`,
      '#',
      '# @usage',
      `#   ${values.usage}`,
      '#',
      '# @inputs',
      `#   ${values.inputs}`,
      '#',
      '# @outputs',
      `#   - ${values.outputs}`,
      '#',
      '# @exit-codes',
      `#   ${values.exitCodes[0]}`,
      `#   ${values.exitCodes[1]}`,
      '#',
      '# @examples',
      `#   ${values.examples}`,
      '#',
      '# @notes',
      `#   ${values.notes}`,
      ''
    ].join('\n');
  }

  return [
    '/**',
    ` * @script ${values.script}`,
    ` * @summary ${values.summary}`,
    ` * @domain ${values.domain}`,
    ` * @scope ${values.scope}`,
    ' *',
    ' * @usage',
    ` *   ${values.usage}`,
    ' *',
    ' * @inputs',
    ` *   ${values.inputs}`,
    ' *',
    ' * @outputs',
    ` *   - ${values.outputs}`,
    ' *',
    ' * @exit-codes',
    ` *   ${values.exitCodes[0]}`,
    ` *   ${values.exitCodes[1]}`,
    ' *',
    ' * @examples',
    ` *   ${values.examples}`,
    ' *',
    ' * @notes',
    ` *   ${values.notes}`,
    ' */',
    ''
  ].join('\n');
}

function injectTemplate(repoPath, placeholderMode) {
  const fullPath = path.join(REPO_ROOT, repoPath);
  const existing = readFileSafe(repoPath);
  if (!existing) return false;

  const header = extractLeadingScriptHeader(existing);
  const hasAnyTag = LEGACY_REQUIRED_TAGS.some((tag) => header.includes(tag)) || hasFrameworkHeaderTags(header);
  if (hasAnyTag) return false;

  const shebangMatch = existing.match(/^(#![^\n]*\n)/);
  const shebang = shebangMatch ? shebangMatch[1] : '';
  const body = shebang ? existing.slice(shebang.length) : existing;
  const template = buildTemplateBlock(repoPath, placeholderMode);
  const updated = `${shebang}${template}${body}`;

  if (updated !== existing) {
    fs.writeFileSync(fullPath, updated);
    return true;
  }
  return false;
}

function stageFiles(repoPaths) {
  if (!repoPaths.length) return;
  const args = repoPaths.map((p) => `"${p}"`).join(' ');
  execSync(`git add ${args}`, { cwd: REPO_ROOT, stdio: 'ignore' });
}

function buildDefaultIndexContent(indexPath) {
  const title = `# ${path.basename(path.dirname(indexPath) || indexPath)} Script Index`;
  return `${title}\n\n${INDEX_START}\n## Script Index\n\n_No scripts indexed yet._\n${INDEX_END}\n`;
}

function applyIndexBlock(existing, body) {
  const block = `${INDEX_START}\n${body}\n${INDEX_END}`;
  if (existing.includes(INDEX_START) && existing.includes(INDEX_END)) {
    const start = escapeRegExp(INDEX_START);
    const end = escapeRegExp(INDEX_END);
    return existing.replace(new RegExp(`${start}[\\s\\S]*?${end}`, 'm'), block);
  }
  return `${existing.trimEnd()}\n\n${block}\n`;
}

function ensureIndexFile(indexPath) {
  const fullPath = path.join(REPO_ROOT, indexPath);
  if (fs.existsSync(fullPath)) return;
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, buildDefaultIndexContent(indexPath));
}

function scriptsForGroup(root) {
  return getAllIndexedScripts().filter((file) => file === root || file.startsWith(`${root}/`));
}

function buildGroupRows(root) {
  return scriptsForGroup(root)
    .map(validateTemplate)
    .filter((x) => x.valid)
    .sort((a, b) => a.file.localeCompare(b.file))
    .map((entry) => ({
      script: entry.file,
      summary: entry.summary || '',
      usage: entry.usage || '',
      domain: entry.domain || ''
    }));
}

function normalizeTableCellValue(value) {
  return String(value || '')
    .replace(/\r?\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function escapeMarkdownTableCell(value) {
  return normalizeTableCellValue(value).replace(/\|/g, '\\|');
}

function escapeMdxTableCell(value) {
  return normalizeTableCellValue(value)
    .replace(/&/g, '&amp;')
    .replace(/\|/g, '&#124;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;');
}

function renderMdxCodeCell(value) {
  const escaped = escapeMdxTableCell(value);
  if (!escaped) return '';
  return escaped.includes('`') ? `<code>${escaped}</code>` : `\`${escaped}\``;
}

function buildGroupIndexMarkdown(root) {
  const rows = buildGroupRows(root);

  if (rows.length === 0) {
    return ['## Script Index', '', '_No scripts indexed yet._'].join('\n');
  }

  const lines = ['## Script Index', '', '| Script | Summary | Usage | Domain |', '|---|---|---|---|'];
  rows.forEach((row) => {
    const summary = escapeMarkdownTableCell(row.summary);
    const usage = escapeMarkdownTableCell(row.usage);
    const domain = escapeMarkdownTableCell(row.domain);
    lines.push(`| \`${row.script}\` | ${summary} | \`${usage}\` | ${domain} |`);
  });
  return lines.join('\n');
}

function updateIndexFile(indexPath, body) {
  ensureIndexFile(indexPath);
  const fullPath = path.join(REPO_ROOT, indexPath);
  const existing = fs.readFileSync(fullPath, 'utf8');
  const updated = applyIndexBlock(existing, body);

  if (updated !== existing) {
    fs.writeFileSync(fullPath, updated);
    return true;
  }
  return false;
}

function checkIndexFile(indexPath, body) {
  const fullPath = path.join(REPO_ROOT, indexPath);
  if (!fs.existsSync(fullPath)) {
    return { missing: true, changed: true };
  }
  const existing = fs.readFileSync(fullPath, 'utf8');
  const expected = applyIndexBlock(existing || buildDefaultIndexContent(indexPath), body);
  return {
    missing: false,
    changed: existing !== expected
  };
}

function buildAggregateMarkdown() {
  const lines = [
    ...AGGREGATE_FRONTMATTER_LINES,
    '',
    ...buildGeneratedHiddenBannerLines(AGGREGATE_DETAILS),
    '',
    ...buildGeneratedNoteLines(AGGREGATE_DETAILS),
    ''
  ];
  for (const group of GROUP_INDEX_MAP) {
    const rows = buildGroupRows(group.root);
    lines.push(`## ${group.root}`);
    lines.push('');
    if (rows.length === 0) {
      lines.push('_No scripts indexed yet._');
      lines.push('');
      continue;
    }
    lines.push('| Script | Summary | Usage | Domain |');
    lines.push('|---|---|---|---|');
    rows.forEach((row) => {
      lines.push(
        `| ${renderMdxCodeCell(row.script)} | ${escapeMdxTableCell(row.summary)} | ${renderMdxCodeCell(row.usage)} | ${escapeMdxTableCell(row.domain)} |`
      );
    });
    lines.push('');
  }
  return lines.join('\n');
}

function updateAggregateIndex() {
  const fullPath = path.join(REPO_ROOT, AGGREGATE_INDEX_PATH);
  const content = buildAggregateMarkdown();
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  const existing = fs.existsSync(fullPath) ? fs.readFileSync(fullPath, 'utf8') : '';
  if (content !== existing) {
    fs.writeFileSync(fullPath, content);
    return true;
  }
  return false;
}

function checkAggregateIndex() {
  const fullPath = path.join(REPO_ROOT, AGGREGATE_INDEX_PATH);
  if (!fs.existsSync(fullPath)) {
    return { missing: true, changed: true };
  }
  const existing = fs.readFileSync(fullPath, 'utf8');
  const expected = buildAggregateMarkdown();
  return {
    missing: false,
    changed: existing !== expected
  };
}

function runTests(options = {}) {
  const stagedOnly = Boolean(options.stagedOnly);
  const write = Boolean(options.write);
  const checkIndexes = Boolean(options.checkIndexes);
  const checkClassification = Boolean(options.checkClassification);
  const stage = Boolean(options.stage);
  const autofill = Boolean(options.autofill);
  const backfillExisting = Boolean(options.backfillExisting);
  const enforceExisting = Boolean(options.enforceExisting);
  const rebuildIndexes = Boolean(options.rebuildIndexes);
  const files = Array.isArray(options.files) ? options.files : [];

  const errors = [];
  const warnings = [];
  const changedIndexes = [];
  const autofilledScripts = [];
  const backfilledScripts = [];

  const validationScripts = getAllValidationScripts();
  const classificationScripts = getAllClassificationScripts();
  const stagedAddedScripts = getStagedAddedScripts();
  const explicitTargets = [...new Set(files.map(normalizeRepoPath))]
    .filter((file) => isWithinRoots(file, VALIDATION_ROOTS))
    .filter(isScriptFile);

  if (autofill) {
    for (const scriptPath of stagedAddedScripts) {
      if (injectTemplate(scriptPath, true)) autofilledScripts.push(scriptPath);
    }
  }

  if (backfillExisting) {
    for (const scriptPath of validationScripts) {
      if (injectTemplate(scriptPath, false)) backfilledScripts.push(scriptPath);
    }
  }

  const enforceTargets = explicitTargets.length > 0
    ? explicitTargets
    : enforceExisting
      ? validationScripts
      : stagedOnly
        ? stagedAddedScripts
        : [];
  for (const scriptPath of enforceTargets) {
    const result = validateTemplate(scriptPath);
    if (!result.valid) {
      const parts = [];
      if (result.missing.length > 0) parts.push(`missing required tags: ${result.missing.join(', ')}`);
      if (result.empty.length > 0) parts.push(`empty/placeholder values: ${result.empty.join(', ')}`);
      errors.push({ file: scriptPath, rule: 'Script header template', message: parts.join(' | '), line: 1 });
    }
  }

  if (checkClassification) {
    try {
      const classificationRows = loadClassificationData();
      errors.push(...validateClassificationCoverage(classificationScripts, classificationRows));
    } catch (error) {
      errors.push({
        file: CLASSIFICATION_DATA_PATH,
        rule: 'Script classification coverage',
        message: `Unable to validate script classifications: ${error.message}`,
        line: 1
      });
    }
  }

  const stagedPaths = [...autofilledScripts, ...backfilledScripts];

  if (write || rebuildIndexes || checkIndexes) {
    const indexTargets = rebuildIndexes || checkIndexes
      ? GROUP_INDEX_MAP
      : GROUP_INDEX_MAP.filter((g) => {
          const candidates = stagedOnly ? stagedAddedScripts : validationScripts;
          return candidates.some((f) => f === g.root || f.startsWith(`${g.root}/`));
        });

    for (const target of indexTargets) {
      const body = buildGroupIndexMarkdown(target.root);
      if (checkIndexes && !write) {
        const check = checkIndexFile(target.index, body);
        if (check.missing) {
          errors.push({
            file: target.index,
            rule: 'Script index freshness',
            message: 'Missing script index file. Run with --write --rebuild-indexes.',
            line: 1
          });
        } else if (check.changed) {
          errors.push({
            file: target.index,
            rule: 'Script index freshness',
            message: 'Outdated script index file. Run with --write --rebuild-indexes.',
            line: 1
          });
        }
      } else if (updateIndexFile(target.index, body)) {
        changedIndexes.push(target.index);
      }
    }

    if (checkIndexes && !write) {
      const aggregateCheck = checkAggregateIndex();
      if (aggregateCheck.missing) {
        errors.push({
          file: AGGREGATE_INDEX_PATH,
          rule: 'Aggregate script index freshness',
        message: 'Missing aggregate scripts catalog. Run with --write --rebuild-indexes.',
          line: 1
        });
      } else if (aggregateCheck.changed) {
        errors.push({
          file: AGGREGATE_INDEX_PATH,
          rule: 'Aggregate script index freshness',
        message: 'Outdated aggregate scripts catalog. Run with --write --rebuild-indexes.',
          line: 1
        });
      }
    } else if (updateAggregateIndex()) {
      changedIndexes.push(AGGREGATE_INDEX_PATH);
    }

    const legacyAggregatePath = path.join(REPO_ROOT, LEGACY_AGGREGATE_INDEX_PATH);
    if (checkIndexes && !write && fs.existsSync(legacyAggregatePath)) {
      errors.push({
        file: LEGACY_AGGREGATE_INDEX_PATH,
        rule: 'Legacy aggregate script index',
        message: 'Legacy scripts index should be removed; use docs-guide/catalog/scripts-catalog.mdx.',
        line: 1
      });
    }
    if (write && fs.existsSync(legacyAggregatePath)) {
      fs.unlinkSync(legacyAggregatePath);
      changedIndexes.push(LEGACY_AGGREGATE_INDEX_PATH);
    }
  }

  if (stage) {
    try {
      stageFiles([...new Set([...stagedPaths, ...changedIndexes])]);
    } catch (err) {
      warnings.push({ file: '(git add)', rule: 'Staging', message: `Failed to stage generated files: ${err.message}`, line: 1 });
    }
  }

  return {
    errors,
    warnings,
    changedIndexes,
    autofilledScripts,
    backfilledScripts,
    passed: errors.length === 0,
    total: enforceTargets.length
  };
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const checkMode = args.includes('--check');
  const stagedOnly = args.includes('--staged');
  const write = args.includes('--write');
  const stage = args.includes('--stage');
  const autofill = args.includes('--autofill');
  const backfillExisting = args.includes('--backfill-existing');
  const enforceExisting = checkMode || args.includes('--enforce-existing');
  const checkIndexes = checkMode || args.includes('--check-indexes');
  const rebuildIndexes = args.includes('--rebuild-indexes');
  const checkClassification = checkMode || enforceExisting || rebuildIndexes || checkIndexes;
  const files = collectFilesFromArgs(args);

  const result = runTests({
    stagedOnly,
    write,
    checkIndexes,
    stage,
    autofill,
    backfillExisting,
    enforceExisting,
    rebuildIndexes,
    checkClassification,
    files
  });

  if (result.errors.length > 0) {
    console.error('\n❌ Script documentation enforcement failed:\n');
    result.errors.forEach((err) => {
      console.error(`  ${err.file}:${err.line} - ${err.message}`);
    });
    if (result.errors.some((err) => err.rule === 'Script header template')) {
      console.error('\nRequired template tags:');
      console.error(`  Legacy: ${LEGACY_REQUIRED_TAGS.join(', ')}`);
      console.error(`  Framework: ${FRAMEWORK_REQUIRED_TAGS.join(', ')}`);
    }
  }

  if (result.autofilledScripts.length > 0) {
    console.log('\n🧩 Injected placeholder header template into:');
    result.autofilledScripts.forEach((p) => console.log(`  - ${p}`));
    console.log('Fill placeholder values before commit.');
  }

  if (result.backfilledScripts.length > 0) {
    console.log('\n🛠️  Backfilled non-placeholder headers into:');
    result.backfilledScripts.forEach((p) => console.log(`  - ${p}`));
  }

  if (result.changedIndexes.length > 0) {
    console.log('\n📝 Updated script indexes:');
    result.changedIndexes.forEach((p) => console.log(`  - ${p}`));
  }

  if (result.errors.length === 0) {
    console.log('\n✅ Script documentation checks passed');
    process.exit(0);
  }

  process.exit(1);
}

module.exports = {
  AGGREGATE_INDEX_PATH,
  buildAggregateMarkdown,
  checkAggregateIndex,
  runTests
};
