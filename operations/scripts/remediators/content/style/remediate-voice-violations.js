#!/usr/bin/env node
/**
 * @script      remediate-voice-violations
 * @type        remediator
 * @concern     brand
 * @niche       voice-register
 * @purpose     Apply deterministic voice-register fixes to v2 MDX pages
 * @description Pairs with check-voice-register.js. Applies safe deterministic rewrites only (the prohibited-phrase patterns that map 1:1 to a documented replacement). Ambiguous cases stay flagged for human review via rolling-issue. Supports --dry-run preview and --verify (re-runs check after fix, reverts regressions per file).
 * @mode        repair
 * @pipeline    P6 (self-heal) or manual via dispatch-voice-register.js
 * @scope       v2 MDX pages with audience frontmatter
 * @usage       node operations/scripts/remediators/content/style/remediate-voice-violations.js [--dry-run|--write] [--verify] [--files <paths>|--staged|--full]
 * @policy      D-GOV-03 (paired remediator for every detector)
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');
const V2_DIR = path.join(REPO_ROOT, 'v2');

// Deterministic 1:1 phrase rewrites. Patterns that can be safely replaced without human judgment.
// Anything not in this map stays flagged for human review (no auto-fix).
const DETERMINISTIC_REPLACEMENTS = [
  { pattern: /don'?t worry,?\s*this is easy[\.,]?\s*/gi, replacement: '' },
  { pattern: /the gateway simply/gi, replacement: 'the gateway' },
  { pattern: /(keep in mind that|remember that)\s+/gi, replacement: '' },
  { pattern: /\bsimply\s+/gi, replacement: '' },
  { pattern: /\bjust\s+/gi, replacement: '' },
  { pattern: /this document will guide you/gi, replacement: 'this page covers' },
  { pattern: /\bessentially\s+/gi, replacement: '' },
  { pattern: /\bbasically\s+/gi, replacement: '' },
];

function parseArgs(argv) {
  const args = { dryRun: false, write: false, verify: false, files: null, staged: false, full: false };
  for (let i = 0; i < argv.length; i += 1) {
    const t = argv[i];
    if (t === '--dry-run') args.dryRun = true;
    else if (t === '--write') args.write = true;
    else if (t === '--verify') args.verify = true;
    else if (t === '--staged') args.staged = true;
    else if (t === '--full') args.full = true;
    else if (t === '--files') { args.files = argv[i + 1]; i += 1; }
  }
  if (!args.dryRun && !args.write) args.dryRun = true;
  return args;
}

function collectFiles(args) {
  if (args.files) {
    return args.files.split(',').map((f) => f.trim()).filter((f) => fs.existsSync(f));
  }
  if (args.staged) {
    try {
      const out = execSync('git diff --cached --name-only --diff-filter=ACMRT', { cwd: REPO_ROOT, encoding: 'utf8' });
      return out.split('\n').map((f) => f.trim()).filter((f) => f && f.startsWith('v2/') && f.endsWith('.mdx') && fs.existsSync(path.join(REPO_ROOT, f)));
    } catch { return []; }
  }
  if (args.full) {
    const files = [];
    const walk = (dir) => {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) {
          if (['_workspace', 'x-archive', 'x-deprecated', 'cn', 'es', 'fr', 'internal'].includes(e.name)) continue;
          walk(p);
        } else if (e.name.endsWith('.mdx')) {
          files.push(path.relative(REPO_ROOT, p));
        }
      }
    };
    if (fs.existsSync(V2_DIR)) walk(V2_DIR);
    return files;
  }
  return [];
}

function applyReplacements(content) {
  let out = content;
  let changes = 0;
  for (const { pattern, replacement } of DETERMINISTIC_REPLACEMENTS) {
    out = out.replace(pattern, (match) => {
      changes += 1;
      return replacement;
    });
  }
  return { content: out, changes };
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const files = collectFiles(args);
  if (files.length === 0) {
    console.log('remediate-voice-violations: no target files (use --files, --staged, or --full).');
    process.exit(0);
  }
  let totalChanges = 0;
  let filesChanged = 0;
  const changedFiles = [];
  for (const rel of files) {
    const abs = path.isAbsolute(rel) ? rel : path.join(REPO_ROOT, rel);
    const original = fs.readFileSync(abs, 'utf8');
    const { content, changes } = applyReplacements(original);
    if (changes === 0) continue;
    totalChanges += changes;
    filesChanged += 1;
    if (args.write) {
      fs.writeFileSync(abs, content);
      changedFiles.push(rel);
      console.log(`✓ ${rel}: ${changes} replacement(s)`);
    } else {
      console.log(`would change ${rel}: ${changes} replacement(s)`);
    }
  }
  console.log('');
  console.log(`remediate-voice-violations: ${args.write ? 'applied' : 'previewed'} ${totalChanges} replacement(s) across ${filesChanged} file(s).`);
  if (args.write && args.verify && changedFiles.length > 0) {
    // Per-file verify: re-run check-voice-register on each changed file; if any regresses, revert.
    const verifierPath = path.join(REPO_ROOT, 'operations/scripts/validators/content/copy/check-voice-register.js');
    if (fs.existsSync(verifierPath)) {
      let reverted = 0;
      for (const rel of changedFiles) {
        try {
          execSync(`node "${verifierPath}" --files ${rel}`, { cwd: REPO_ROOT, stdio: 'pipe' });
        } catch {
          execSync(`git checkout -- ${rel}`, { cwd: REPO_ROOT, stdio: 'pipe' });
          reverted += 1;
          console.log(`reverted: ${rel} (validator still flagged it after repair)`);
        }
      }
      console.log(`verify: reverted ${reverted} regressed file(s).`);
    }
  }
  process.exit(0);
}

main();
