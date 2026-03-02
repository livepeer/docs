#!/usr/bin/env node
/**
 * @script script-docs-test
 * @summary Enforce script header schema, keep group script indexes in sync, and build aggregate script index.
 * @owner docs
 * @scope .githooks, .github/scripts, tests, tools/scripts, tasks/scripts, docs-guide/indexes/scripts-index.mdx
 *
 * @usage
 *   node tests/unit/script-docs.test.js --staged --write --stage --autofill
 *   node tests/unit/script-docs.test.js --enforce-existing --write --rebuild-indexes
 *
 * @inputs
 *   --staged Enforce only newly added staged scripts.
 *   --enforce-existing Enforce all scoped scripts.
 *   --files <path[,path...]> Enforce explicit script file list (repeatable).
 *   --autofill Inject placeholder header for brand-new scripts missing the template.
 *   --backfill-existing Inject non-placeholder headers for existing scripts missing the template.
 *   --write Update script-index files and aggregate index.
 *   --check-indexes Validate script index files without writing.
 *   --rebuild-indexes Rebuild all group indexes regardless of staged scope.
 *   --stage Stage any updated script/index files.
 *
 * @outputs
 *   - .githooks/script-index.md
 *   - .github/script-index.md
 *   - tests/script-index.md
 *   - tools/script-index.md
 *   - tasks/scripts/script-index.md
 *   - docs-guide/indexes/scripts-index.mdx
 *
 * @exit-codes
 *   0 = validation passed
 *   1 = template or index validation failed
 *
 * @examples
 *   node tests/unit/script-docs.test.js --staged --write --stage --autofill
 *   node tests/unit/script-docs.test.js --enforce-existing --write --rebuild-indexes
 *
 * @notes
 *   Excludes node_modules, .venv, .git, tmp, notion, and backup files matching .bak*.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const {
  buildGeneratedFrontmatterLines,
  buildGeneratedHiddenBannerLines,
  buildGeneratedNoteLines
} = require('../../tools/lib/generated-file-banners');

const REPO_ROOT = process.cwd();
const INDEX_START = '{/* SCRIPT-INDEX:START */}';
const INDEX_END = '{/* SCRIPT-INDEX:END */}';

const REQUIRED_TAGS = [
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

const INLINE_REQUIRED_TAGS = ['@script', '@summary', '@owner', '@scope'];
const BLOCK_REQUIRED_TAGS = ['@usage', '@inputs', '@outputs', '@exit-codes', '@examples', '@notes'];
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

const SCRIPT_EXTENSIONS = new Set(['.js', '.cjs', '.mjs', '.ts', '.tsx', '.sh', '.bash', '.py']);
const SCOPED_ROOTS = ['.githooks', '.github/scripts', 'tests', 'tools/scripts', 'tasks/scripts'];

const GROUP_INDEX_MAP = [
  { root: '.githooks', index: '.githooks/script-index.md' },
  { root: '.github/scripts', index: '.github/script-index.md' },
  { root: 'tests', index: 'tests/script-index.md' },
  { root: 'tools/scripts', index: 'tools/script-index.md' },
  { root: 'tasks/scripts', index: 'tasks/scripts/script-index.md' }
];

const AGGREGATE_INDEX_PATH = 'docs-guide/indexes/scripts-index.mdx';
const LEGACY_AGGREGATE_INDEX_PATH = 'docs-guide/indexes/scripts-index.md';
const AGGREGATE_FRONTMATTER_LINES = buildGeneratedFrontmatterLines({
  title: 'Scripts Index',
  sidebarTitle: 'Scripts Index',
  description: 'This page provides an aggregate catalog inventory of repository scripts generated from group script indexes.',
  keywords: ['livepeer', 'scripts index', 'aggregate inventory', 'repository', 'scripts']
});
const AGGREGATE_DETAILS = {
  script: 'tests/unit/script-docs.test.js',
  purpose: 'Enforce script header schema, keep group script indexes in sync, and build aggregate script index.',
  runWhen: 'Scripts are added, removed, renamed, or script metadata changes in scoped roots.',
  runCommand: 'node tests/unit/script-docs.test.js --write --rebuild-indexes'
};

function normalizeRepoPath(filePath) {
  return filePath.split(path.sep).join('/');
}

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
  return (
    p.includes('/node_modules/') ||
    p.startsWith('node_modules/') ||
    p.includes('/.git/') ||
    p.startsWith('.git/') ||
    p.includes('/.venv/') ||
    p.startsWith('.venv/') ||
    p.includes('/tmp/') ||
    p.startsWith('tmp/') ||
    p.startsWith('notion/') ||
    p.includes('.bak') ||
    p.endsWith('.disabled')
  );
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

function getAllScopedScripts() {
  const scripts = [];
  for (const root of SCOPED_ROOTS) {
    walkFiles(root, scripts);
  }
  return [...new Set(scripts)].filter(isScriptFile).sort();
}

function getStagedAddedScripts() {
  let output = '';
  try {
    output = execSync('git diff --cached --name-only --diff-filter=A', { encoding: 'utf8' });
  } catch (_err) {
    return [];
  }

  return output
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map(normalizeRepoPath)
    .filter((file) => SCOPED_ROOTS.some((root) => file === root || file.startsWith(`${root}/`)))
    .filter(isScriptFile);
}

function getHeaderChunk(content) {
  return content.split('\n').slice(0, 160).join('\n');
}

function getTagValue(header, tagName) {
  const re = new RegExp(`\\${tagName}\\s+(.+)`);
  const match = header.match(re);
  return match ? match[1].trim() : '';
}

function isPlaceholderValue(value) {
  const v = String(value || '').trim();
  if (!v) return true;
  return PLACEHOLDER_PATTERNS.some((pattern) => pattern.test(v));
}

function getSectionLines(header, tagName) {
  const lines = header.split('\n');
  const tagToken = tagName.replace('@', '');
  const idx = lines.findIndex((line) => line.includes(`@${tagToken}`));
  if (idx === -1) return [];

  const out = [];
  for (let i = idx + 1; i < lines.length; i++) {
    const raw = lines[i];
    const trimmed = raw.trim();
    if (!trimmed) continue;

    const stripped = trimmed
      .replace(/^\*\s?/, '')
      .replace(/^#\s?/, '')
      .trim();

    if (stripped.startsWith('@')) break;
    if (stripped.startsWith('/**') || stripped.startsWith('*/')) continue;
    out.push(stripped);
  }

  return out;
}

function extractPrimaryUsage(header) {
  const lines = getSectionLines(header, '@usage');
  for (const line of lines) {
    if (line && !line.startsWith('@')) return line;
  }
  return '';
}

function validateTemplate(repoPath) {
  const content = readFileSafe(repoPath);
  const header = getHeaderChunk(content);
  const missing = REQUIRED_TAGS.filter((tag) => !header.includes(tag));
  const empty = [];

  for (const tag of INLINE_REQUIRED_TAGS) {
    if (missing.includes(tag)) continue;
    const value = getTagValue(header, tag);
    if (isPlaceholderValue(value)) empty.push(tag);
  }

  for (const tag of BLOCK_REQUIRED_TAGS) {
    if (missing.includes(tag)) continue;
    const sectionLines = getSectionLines(header, tag);
    const meaningful = sectionLines.filter((line) => !isPlaceholderValue(line));
    if (meaningful.length === 0) empty.push(tag);
  }

  return {
    file: repoPath,
    valid: missing.length === 0 && empty.length === 0,
    missing,
    empty,
    script: getTagValue(header, '@script') || path.basename(repoPath),
    summary: getTagValue(header, '@summary') || '',
    owner: getTagValue(header, '@owner') || '',
    usage: extractPrimaryUsage(header)
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
  const ownerValue = 'docs';

  if (placeholderMode) {
    return {
      script: scriptName,
      summary: 'TODO: one-line purpose',
      owner: ownerValue,
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
    owner: ownerValue,
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
      `# @owner ${values.owner}`,
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
    ` * @owner ${values.owner}`,
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

  const header = getHeaderChunk(existing);
  const hasAnyTag = REQUIRED_TAGS.some((tag) => header.includes(tag));
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
  execSync(`git add ${args}`, { stdio: 'ignore' });
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
  return getAllScopedScripts().filter((file) => file === root || file.startsWith(`${root}/`));
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
      owner: entry.owner || ''
    }));
}

function buildGroupIndexMarkdown(root) {
  const rows = buildGroupRows(root);

  if (rows.length === 0) {
    return ['## Script Index', '', '_No scripts indexed yet._'].join('\n');
  }

  const lines = ['## Script Index', '', '| Script | Summary | Usage | Owner |', '|---|---|---|---|'];
  rows.forEach((row) => {
    const summary = row.summary.replace(/\|/g, '\\|');
    const usage = row.usage.replace(/\|/g, '\\|');
    const owner = row.owner.replace(/\|/g, '\\|');
    lines.push(`| \`${row.script}\` | ${summary} | \`${usage}\` | ${owner} |`);
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
    lines.push('| Script | Summary | Usage | Owner |');
    lines.push('|---|---|---|---|');
    rows.forEach((row) => {
      lines.push(`| \`${row.script}\` | ${row.summary} | \`${row.usage}\` | ${row.owner} |`);
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

  const scopedScripts = getAllScopedScripts();
  const stagedAddedScripts = getStagedAddedScripts();
  const explicitTargets = [...new Set(files.map(normalizeRepoPath))]
    .filter((file) => SCOPED_ROOTS.some((root) => file === root || file.startsWith(`${root}/`)))
    .filter(isScriptFile);

  if (autofill) {
    for (const scriptPath of stagedAddedScripts) {
      if (injectTemplate(scriptPath, true)) autofilledScripts.push(scriptPath);
    }
  }

  if (backfillExisting) {
    for (const scriptPath of scopedScripts) {
      if (injectTemplate(scriptPath, false)) backfilledScripts.push(scriptPath);
    }
  }

  const enforceTargets = explicitTargets.length > 0
    ? explicitTargets
    : enforceExisting
      ? scopedScripts
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

  const stagedPaths = [...autofilledScripts, ...backfilledScripts];

  if (write || rebuildIndexes || checkIndexes) {
    const indexTargets = rebuildIndexes || checkIndexes
      ? GROUP_INDEX_MAP
      : GROUP_INDEX_MAP.filter((g) => {
          const candidates = stagedOnly ? stagedAddedScripts : scopedScripts;
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
          message: 'Missing aggregate scripts index. Run with --write --rebuild-indexes.',
          line: 1
        });
      } else if (aggregateCheck.changed) {
        errors.push({
          file: AGGREGATE_INDEX_PATH,
          rule: 'Aggregate script index freshness',
          message: 'Outdated aggregate scripts index. Run with --write --rebuild-indexes.',
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
        message: 'Legacy scripts-index.md should be removed; use scripts-index.mdx.',
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
  const stagedOnly = args.includes('--staged');
  const write = args.includes('--write');
  const stage = args.includes('--stage');
  const autofill = args.includes('--autofill');
  const backfillExisting = args.includes('--backfill-existing');
  const enforceExisting = args.includes('--enforce-existing');
  const checkIndexes = args.includes('--check-indexes');
  const rebuildIndexes = args.includes('--rebuild-indexes');
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
    files
  });

  if (result.errors.length > 0) {
    console.error('\n❌ Script documentation enforcement failed:\n');
    result.errors.forEach((err) => {
      console.error(`  ${err.file}:${err.line} - ${err.message}`);
    });
    if (result.errors.some((err) => err.rule === 'Script header template')) {
      console.error('\nRequired template tags:');
      console.error(`  ${REQUIRED_TAGS.join(', ')}`);
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

module.exports = { runTests };
