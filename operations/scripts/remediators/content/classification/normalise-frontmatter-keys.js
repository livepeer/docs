#!/usr/bin/env node
/**
 * @script      normalise-frontmatter-keys
 * @type        remediator
 * @concern     governance
 * @niche       classification
 * @purpose     qa:content-quality
 * @description Normalises capitalised frontmatter YAML keys to lowercase canonical form across v2 MDX pages.
 * @mode        repair
 * @pipeline    manual — batch remediation utility, run with --dry-run first
 * @scope       v2/ (all MDX files, excluding _workspace, x-archived, translations)
 * @usage       node operations/scripts/remediators/content/classification/normalise-frontmatter-keys.js [--dry-run] [--write] [--staged] [--files path,path]
 */

'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = process.cwd();
const V2_ROOT = path.join(REPO_ROOT, 'v2');

const KEY_MAP = {
  'Keywords': 'keywords',
  'PageType': 'pageType',
  'Purpose': 'purpose',
  'Audience': 'audience',
  'Complexity': 'complexity',
  'LifecycleStage': 'lifecycleStage',
  'Pagetype': 'pageType',
  'Pagevariant': 'pageVariant',
  'PageVariant': 'pageVariant',
  'Lifecyclestage': 'lifecycleStage',
  'Sidebartitle': 'sidebarTitle',
  'SidebarTitle': 'sidebarTitle',
  'Veracitystatus': 'veracityStatus',
  'VeracityStatus': 'veracityStatus',
};

const KEY_PATTERNS = Object.keys(KEY_MAP).map(k => ({
  pattern: new RegExp('^(' + k + ')\\s*:', 'm'),
  from: k,
  to: KEY_MAP[k]
}));

const EXCLUDED_SEGMENTS = new Set(['_workspace', 'x-archived', 'x-deprecated', 'cn', 'es', 'fr']);

function toPosix(filePath) {
  return String(filePath || '').split(path.sep).join('/');
}

function isExcluded(relPath) {
  const segments = toPosix(relPath).split('/');
  return segments.some(s => EXCLUDED_SEGMENTS.has(s) || /^x-/.test(s) || s.startsWith('_'));
}

function walkMdxFiles(dirPath, out = []) {
  let entries;
  try {
    entries = fs.readdirSync(dirPath, { withFileTypes: true });
  } catch (_) {
    return out;
  }
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relPath = toPosix(path.relative(REPO_ROOT, fullPath));
    if (isExcluded(relPath)) continue;
    if (entry.isDirectory()) {
      walkMdxFiles(fullPath, out);
    } else if (entry.isFile() && /\.mdx$/i.test(entry.name)) {
      out.push({ fullPath, relPath });
    }
  }
  return out;
}

function getStagedMdxFiles() {
  const { execSync } = require('child_process');
  try {
    const output = execSync('git diff --cached --name-only --diff-filter=ACM', {
      cwd: REPO_ROOT, encoding: 'utf8',
    });
    return output.trim().split('\n')
      .filter((f) => f && /\.mdx$/i.test(f) && f.startsWith('v2/') && !isExcluded(f))
      .map((relPath) => ({ fullPath: path.join(REPO_ROOT, relPath), relPath }));
  } catch (_) {
    return [];
  }
}

function resolveTargetFiles(args) {
  if (args.files.length > 0) {
    return args.files.map((f) => {
      const abs = path.isAbsolute(f) ? f : path.join(REPO_ROOT, f);
      return { fullPath: abs, relPath: toPosix(path.relative(REPO_ROOT, abs)) };
    }).filter((f) => /\.mdx$/i.test(f.relPath));
  }
  if (args.stagedOnly) {
    return getStagedMdxFiles();
  }
  return walkMdxFiles(V2_ROOT);
}

function extractFrontmatter(content) {
  const match = String(content || '').match(/^(---\r?\n)([\s\S]*?)(\r?\n---(?:\r?\n|$))/);
  if (!match) return null;
  return {
    before: match[1],
    raw: match[2],
    after: match[3],
    body: String(content || '').slice(match[0].length)
  };
}

function normaliseKeys(frontmatterRaw) {
  const changes = [];
  let result = frontmatterRaw;

  for (const { pattern, from, to } of KEY_PATTERNS) {
    if (pattern.test(result)) {
      result = result.replace(new RegExp('^' + from + '(\\s*:)', 'm'), to + '$1');
      changes.push({ from, to });
    }
  }

  return { result, changes };
}

function hasField(frontmatterRaw, fieldName) {
  return new RegExp('^' + fieldName + '\\s*:', 'm').test(frontmatterRaw);
}

function inferComplexity(relPath) {
  const p = relPath.toLowerCase();
  const base = path.basename(p);
  if (/\/quickstart\//.test(p) || /quickstart\.mdx$/.test(base)) return 'beginner';
  if (/\/get-started\//.test(p) || /get-started\.mdx$/.test(base)) return 'beginner';
  if (/\/concepts?\//.test(p)) return 'beginner';
  if (/overview\.mdx$/.test(base)) return 'beginner';
  if (/portal\.mdx$/.test(base)) return 'beginner';
  if (/navigator\.mdx$/.test(base)) return 'beginner';
  if (/primer\.mdx$/.test(base)) return 'beginner';
  if (/glossary\.mdx$/.test(base)) return 'beginner';
  if (/faq\.mdx$/.test(base)) return 'beginner';
  if (/index\.mdx$/.test(base)) return 'beginner';
  if (/\/advanced-operations\//.test(p)) return 'advanced';
  if (/\/economics?\//.test(p)) return 'advanced';
  if (/optimi[sz]e/.test(base)) return 'advanced';
  if (/scaling/.test(base)) return 'advanced';
  if (/\/setup\//.test(p) || /\/install\//.test(p) || /\/configure\//.test(p)) return 'intermediate';
  if (/\/guides?\//.test(p)) return 'intermediate';
  if (/\/build\//.test(p)) return 'intermediate';
  if (/\/resources?\//.test(p)) return 'intermediate';
  if (/\/references?\//.test(p)) return 'intermediate';
  return 'intermediate';
}

function inferLifecycleStage(relPath) {
  const p = relPath.toLowerCase();
  const base = path.basename(p);
  if (/portal\.mdx$/.test(base)) return 'discover';
  if (/navigator\.mdx$/.test(base)) return 'discover';
  if (/index\.mdx$/.test(base)) return 'discover';
  if (/overview\.mdx$/.test(base)) return 'discover';
  if (/\/concepts?\//.test(p)) return 'discover';
  if (/primer\.mdx$/.test(base)) return 'discover';
  if (/glossary\.mdx$/.test(base)) return 'discover';
  if (/evaluating/.test(base)) return 'evaluate';
  if (/\/quickstart\//.test(p) || /quickstart\.mdx$/.test(base)) return 'setup';
  if (/\/get-started\//.test(p) || /get-started\.mdx$/.test(base)) return 'setup';
  if (/\/setup\//.test(p) || /\/install\//.test(p)) return 'setup';
  if (/\/configure\//.test(p) || /configure\.mdx$/.test(base)) return 'setup';
  if (/\/build\//.test(p)) return 'build';
  if (/\/guides?\//.test(p)) return 'operate';
  if (/\/advanced-operations\//.test(p)) return 'operate';
  if (/\/economics?\//.test(p)) return 'operate';
  if (/troubleshoot/.test(base)) return 'troubleshoot';
  if (/faq\.mdx$/.test(base)) return 'troubleshoot';
  if (/optimi[sz]e/.test(base)) return 'optimise';
  if (/changelog|release-notes/.test(base)) return 'operate';
  return 'discover';
}

function addMissingFields(frontmatterRaw, relPath) {
  const additions = [];
  let result = frontmatterRaw;

  if (!hasField(result, 'complexity')) {
    const val = inferComplexity(relPath);
    result += '\ncomplexity: ' + val;
    additions.push('+complexity: ' + val);
  }

  if (!hasField(result, 'lifecycleStage')) {
    const val = inferLifecycleStage(relPath);
    result += '\nlifecycleStage: ' + val;
    additions.push('+lifecycleStage: ' + val);
  }

  return { result, additions };
}

function parseArgs(argv) {
  const args = { write: false, verify: false, stagedOnly: false, files: [] };
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (token === '--write') { args.write = true; continue; }
    if (token === '--dry-run') { args.write = false; continue; }
    if (token === '--verify') { args.verify = true; continue; }
    if (token === '--staged') { args.stagedOnly = true; continue; }
    if (token === '--files' && i + 1 < argv.length) {
      args.files = argv[++i].split(',').map((f) => f.trim()).filter(Boolean);
      continue;
    }
    if (token.startsWith('--files=')) {
      args.files = token.slice('--files='.length).split(',').map((f) => f.trim()).filter(Boolean);
      continue;
    }
    if (token === '--help' || token === '-h') {
      console.log('Usage: node normalise-frontmatter-keys.js [--dry-run | --write] [--staged] [--files path,path]');
      process.exit(0);
    }
  }
  return args;
}

function run(options = {}) {
  const args = options.args || parseArgs([]);
  const quiet = options.quiet === true;

  const files = Array.isArray(options.files) && options.files.length > 0
    ? options.files.map((f) => {
        const abs = path.isAbsolute(f) ? f : path.join(REPO_ROOT, f);
        return { fullPath: abs, relPath: toPosix(path.relative(REPO_ROOT, abs)) };
      })
    : resolveTargetFiles(args);

  let totalChanges = 0;
  let filesChanged = 0;
  const report = [];

  for (const { fullPath, relPath } of files) {
    let content;
    try {
      content = fs.readFileSync(fullPath, 'utf8');
    } catch (_) {
      continue;
    }
    const fm = extractFrontmatter(content);
    if (!fm) continue;

    const { result: keysFixed, changes } = normaliseKeys(fm.raw);
    const { result: fieldsAdded, additions } = addMissingFields(keysFixed, relPath);

    if (changes.length === 0 && additions.length === 0) continue;

    filesChanged++;
    totalChanges += changes.length + additions.length;
    const allChanges = [
      ...changes.map(c => c.from + '\u2192' + c.to),
      ...additions
    ].join(', ');
    report.push({ relPath, changes: allChanges, count: changes.length + additions.length });

    if (args.write) {
      const newContent = fm.before + fieldsAdded + fm.after + fm.body;
      fs.writeFileSync(fullPath, newContent, 'utf8');
    }
  }

  if (!quiet) {
    console.log('\nFrontmatter Key Casing Normalisation ' + (args.write ? '(WRITE)' : '(DRY-RUN)'));
    console.log('='.repeat(60));

    if (report.length === 0) {
      console.log('No capitalised frontmatter keys found. All clean.');
    } else {
      console.log('\n' + 'FILE'.padEnd(70) + ' ' + 'CHANGES'.padEnd(40) + ' COUNT');
      console.log('-'.repeat(115));
      for (const r of report) {
        console.log(r.relPath.padEnd(70) + ' ' + r.changes.padEnd(40) + ' ' + r.count);
      }
    }

    console.log('\nSummary: ' + filesChanged + ' files, ' + totalChanges + ' keys normalised' + (args.write ? '' : ' (dry-run, no files modified)'));
  }

  return {
    remediator: 'normalise-frontmatter-keys',
    mode: args.write ? 'write' : 'dry-run',
    filesScanned: files.length,
    filesFixed: filesChanged,
    totalFixes: totalChanges,
    reverted: 0,
    report,
  };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  run({ args });
  process.exit(0);
}

if (require.main === module) {
  main();
}

module.exports = { parseArgs, run };
