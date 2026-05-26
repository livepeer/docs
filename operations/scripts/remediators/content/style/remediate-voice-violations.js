#!/usr/bin/env node
/**
 * @script      remediate-voice-violations
 * @type        remediator
 * @concern     brand
 * @niche       voice-register
 * @purpose     Apply deterministic voice-register fixes to v2 MDX pages
 * @description Pairs with check-voice-register.js. Applies safe deterministic rewrites only — universal phrase replacements plus audience-keyed deletions (orchestrator, gateway, developer). Skips code blocks, frontmatter, and JSX comments. Ambiguous cases stay flagged for human review via rolling-issue. Supports --dry-run preview and --verify (re-runs check after fix, reverts regressions per file).
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
  // Self-referential opening: delete "this page covers" and capitalise the remainder.
  // Special-cased below (needs capitalisation fix-up).
  { pattern: /([Tt]his (?:page|section|guide) (?:covers|explains|walks you through|describes|outlines|provides|introduces|details))\s+/g, replacement: '__SELFREF__' },
];

// Audience-keyed deterministic deletions. Only applied when the page's frontmatter declares a matching audience.
const AUDIENCE_PATTERNS = {
  orchestrator: [
    { pattern: /[Aa]s an orchestrator,?\s*/g, replacement: '' },
  ],
  gateway: [
    // KEEP_IN_MIND / REMEMBER_THAT already covered by universal map above; nothing audience-specific to add.
  ],
  developer: [
    { pattern: /\b[Ee]asy to\s+/g, replacement: '' },
  ],
};

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split('\n')) {
    const kv = line.match(/^(\w[\w-]*)\s*:\s*(.+)/);
    if (kv) fm[kv[1].trim()] = kv[2].trim().replace(/^['"]|['"]$/g, '');
  }
  return fm;
}

function isProtectedZone(content, index) {
  // Frontmatter
  if (content.indexOf('---') === 0) {
    const second = content.indexOf('---', 4);
    if (index < second + 3) return true;
  }
  // Fenced code block (odd number of ``` before index)
  const before = content.slice(0, index);
  const fences = (before.match(/```/g) || []).length;
  if (fences % 2 === 1) return true;
  // JSX comment {/* ... */}
  const window = before.slice(-50);
  if (window.includes('{/*') && !window.includes('*/}')) return true;
  return false;
}

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
  const fm = extractFrontmatter(content);
  const audience = fm.audience;

  // Apply universal patterns with zone protection.
  for (const { pattern, replacement } of DETERMINISTIC_REPLACEMENTS) {
    out = out.replace(pattern, (match, ...args) => {
      const matchIndex = args[args.length - 2];
      if (typeof matchIndex === 'number' && isProtectedZone(out, matchIndex)) return match;
      changes += 1;
      return replacement;
    });
  }

  // Handle self-reference capitalisation: replace __SELFREF__ markers and capitalise the next letter.
  out = out.replace(/__SELFREF__([a-z])/g, (m, c) => c.toUpperCase());
  out = out.replace(/__SELFREF__/g, '');

  // Audience-keyed deletions.
  if (audience && AUDIENCE_PATTERNS[audience]) {
    for (const { pattern, replacement } of AUDIENCE_PATTERNS[audience]) {
      out = out.replace(pattern, (match, ...args) => {
        const matchIndex = args[args.length - 2];
        if (typeof matchIndex === 'number' && isProtectedZone(out, matchIndex)) return match;
        changes += 1;
        return replacement;
      });
    }
  }

  // Capitalise sentences that now start with lowercase after a deleted prefix.
  out = out.replace(/(\.\s+)([a-z])/g, (m, prefix, letter) => prefix + letter.toUpperCase());

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
