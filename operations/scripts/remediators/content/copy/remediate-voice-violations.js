#!/usr/bin/env node
/**
 * @script      remediate-voice-violations
 * @type        remediator
 * @concern     brand
 * @niche       copy
 * @purpose     content:voice-compliance
 * @description Self-remediates voice register violations by deleting self-referential phrases and audience-specific prohibited constructions
 * @mode        repair
 * @pipeline    manual -> v2/*.mdx -> edited pages with violations removed
 * @scope       v2/
 * @usage       node operations/scripts/remediators/content/copy/remediate-voice-violations.js [--dry-run|--write]
 */
'use strict';

const fs = require('fs');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '../../../../..');
const V2_DIR = path.join(REPO_ROOT, 'v2');

// ── Args ────────────────────────────────
function parseArgs(argv) {
  const args = { mode: 'dry-run', help: false,
    verify: false };
  argv.forEach((token) => {
    if (token === '--write') { args.mode = 'write'; return; }
    if (token === '--dry-run') { args.mode = 'dry-run'; return; }
    if (token === '--help' || token === '-h') { args.help = true; return; }
  });
  return args;
}

// ── Universal violations ────────────────
// Rule: "This page [verb]" = delete self-reference, start with content
// Source: content-pass.md line 232, copy-rules.md Tier Blocking, phrase-mapping.md
const UNIVERSAL_PATTERNS = [
  {
    id: 'THIS_PAGE_COVERS',
    regex: /([Tt]his (?:page|section|guide) (?:covers|explains|walks you through|describes|outlines|provides|introduces|details))\s+/g,
    fix: (match, captured, rest) => {
      // Delete the self-reference prefix, capitalise the remainder
      return rest.charAt(0).toUpperCase() + rest.slice(1);
    },
    description: 'Self-referential opening deleted'
  },
];

// ── Audience-specific violations ────────
const AUDIENCE_PATTERNS = {
  orchestrator: [
    {
      id: 'AS_AN_ORCHESTRATOR',
      regex: /[Aa]s an orchestrator,?\s*/g,
      fix: (match) => '',
      description: 'Removed "As an orchestrator" framing (audience is assumed)'
    },
  ],
  gateway: [
    {
      id: 'KEEP_IN_MIND',
      regex: /[Kk]eep in mind that\s*/g,
      fix: (match) => '',
      description: 'Removed "keep in mind that" qualifier (state fact directly)'
    },
    {
      id: 'REMEMBER_THAT',
      regex: /[Rr]emember that\s*/g,
      fix: (match) => '',
      description: 'Removed "remember that" qualifier'
    },
  ],
  developer: [
    {
      id: 'EASY_TO',
      regex: /\b[Ee]asy to\s+/g,
      fix: (match) => '',
      description: 'Removed "easy to" intensifier'
    },
  ],
};

// ── Helpers ─────────────────────────────
function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  match[1].split('\n').forEach(line => {
    const kv = line.match(/^(\w[\w-]*)\s*:\s*(.+)/);
    if (kv) fm[kv[1].trim()] = kv[2].trim().replace(/^['"]|['"]$/g, '');
  });
  return fm;
}

function isInCodeBlock(content, index) {
  // Check if the index falls inside a fenced code block
  const before = content.slice(0, index);
  const backtickCount = (before.match(/```/g) || []).length;
  return backtickCount % 2 === 1;
}

function isInFrontmatter(content, index) {
  const firstFm = content.indexOf('---');
  if (firstFm !== 0) return false;
  const secondFm = content.indexOf('---', 4);
  return index < secondFm + 3;
}

function isInJsxComment(content, index) {
  const before = content.slice(Math.max(0, index - 50), index);
  return before.includes('{/*') && !before.includes('*/}');
}

function walkMdx(dir, results = []) {
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.name.startsWith('_') || entry.name === 'node_modules') continue;
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) walkMdx(fullPath, results);
      else if (entry.name.endsWith('.mdx')) results.push(fullPath);
    }
  } catch (e) { /* skip */ }
  return results;
}

// ── Core ────────────────────────────────
function findAndFix(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fm = extractFrontmatter(content);
  const audience = fm.audience;
  const rel = path.relative(REPO_ROOT, filePath);
  const fixes = [];
  let newContent = content;

  // Apply universal patterns
  for (const pattern of UNIVERSAL_PATTERNS) {
    const regex = new RegExp(pattern.regex.source, pattern.regex.flags);
    let match;
    while ((match = regex.exec(content)) !== null) {
      if (isInFrontmatter(content, match.index)) continue;
      if (isInCodeBlock(content, match.index)) continue;
      if (isInJsxComment(content, match.index)) continue;

      const captured = match[1];
      const afterMatch = content.slice(match.index + match[0].length);
      const restOfSentence = afterMatch.split(/[.\n]/)[0];

      fixes.push({
        id: pattern.id,
        line: content.slice(0, match.index).split('\n').length,
        before: match[0] + restOfSentence.slice(0, 60),
        after: restOfSentence.charAt(0).toUpperCase() + restOfSentence.slice(1, 61),
        description: pattern.description
      });
    }

    // Apply fix to newContent
    newContent = newContent.replace(new RegExp(pattern.regex.source, pattern.regex.flags), (fullMatch, captured) => {
      const idx = newContent.indexOf(fullMatch);
      if (isInFrontmatter(newContent, idx)) return fullMatch;
      if (isInCodeBlock(newContent, idx)) return fullMatch;
      if (isInJsxComment(newContent, idx)) return fullMatch;
      // Capitalise whatever follows the deleted prefix
      return '';
    });
  }

  // Apply audience-specific patterns
  if (audience && AUDIENCE_PATTERNS[audience]) {
    for (const pattern of AUDIENCE_PATTERNS[audience]) {
      const regex = new RegExp(pattern.regex.source, pattern.regex.flags);
      let match;
      while ((match = regex.exec(content)) !== null) {
        if (isInFrontmatter(content, match.index)) continue;
        if (isInCodeBlock(content, match.index)) continue;
        if (isInJsxComment(content, match.index)) continue;

        fixes.push({
          id: pattern.id,
          line: content.slice(0, match.index).split('\n').length,
          before: match[0].trim(),
          after: '(deleted)',
          description: pattern.description
        });
      }

      newContent = newContent.replace(new RegExp(pattern.regex.source, pattern.regex.flags), (fullMatch) => {
        const idx = newContent.indexOf(fullMatch);
        if (isInFrontmatter(newContent, idx)) return fullMatch;
        if (isInCodeBlock(newContent, idx)) return fullMatch;
        if (isInJsxComment(newContent, idx)) return fullMatch;
        return pattern.fix(fullMatch);
      });
    }
  }

  // Capitalise sentences that now start with lowercase after prefix deletion
  newContent = newContent.replace(/\.\s+([a-z])/g, (match, letter) => {
    return match.replace(letter, letter.toUpperCase());
  });

  return { file: rel, audience, fixes, originalContent: content, newContent, changed: content !== newContent };
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    console.log('Usage: node operations/scripts/remediators/content/copy/remediate-voice-violations.js [--dry-run|--write]');
    console.log('  --dry-run   Show what would change (default)');
    console.log('  --write     Apply changes to files');
    return 0;
  }

  const dryRun = args.mode === 'dry-run';
  const pages = walkMdx(V2_DIR);
  const results = [];
  let totalFixes = 0;

  for (const page of pages) {
    const result = findAndFix(page);
    if (result.changed) {
      results.push(result);
      totalFixes += result.fixes.length;
    }
  }

  console.log(`Voice Register Remediation ${dryRun ? '(DRY RUN)' : '(WRITE MODE)'}`);
  console.log(`${'─'.repeat(50)}`);
  console.log(`Pages scanned: ${pages.length}`);
  console.log(`Pages with fixes: ${results.length}`);
  console.log(`Total fixes: ${totalFixes}`);
  console.log('');

  for (const result of results) {
    console.log(`  ${result.file} (audience: ${result.audience || 'none'}):`);
    for (const fix of result.fixes) {
      console.log(`    L${fix.line} [${fix.id}] ${fix.description}`);
      console.log(`      - "${fix.before.trim()}"`);
      console.log(`      + "${fix.after.trim()}"`);
    }

    if (!dryRun) {
      fs.writeFileSync(path.join(REPO_ROOT, result.file), result.newContent);
      console.log(`    ✓ Written`);
    }
    console.log('');
  }

  if (dryRun && results.length > 0) {
    console.log(`Run with --write to apply ${totalFixes} fixes across ${results.length} pages.`);
  }

  return 0;
}

process.exit(main());
