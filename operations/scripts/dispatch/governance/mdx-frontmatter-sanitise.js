/**
 * @script      mdx-frontmatter-sanitise
 * @type        dispatch
 * @concern     governance
 * @niche
 * @purpose
 * @description PostToolUse hook for Edit/Write on ANY .mdx file. Auto-fixes (1) duplicate frontmatter keys, (2) em-dash characters in user-facing text, and (3) single-quoted frontmatter scalars (standardises to double quotes). All fixes are applied silently to the file already on disk; the hook only emits a systemMessage when something was changed.
 * @mode        dispatch
 * @pipeline    PostToolUse hook → parse frontmatter → detect & repair → rewrite if changed
 * @scope       .claude/settings.json PostToolUse hook (Edit|Write matcher)
 * @usage       Called automatically by Claude Code PostToolUse hook. Not invoked directly.
 */

const fs = require('fs');
const path = require('path');
const { stdin } = process;

// Reuse the canonical remediators so the rules stay in one place.
const fmQuotes = require('../../remediators/content/style/remediate-frontmatter-quotes.js');

const EM_DASH = '—';
const EN_DASH = '–';

// Replace em-dashes outside code fences, inline code, and JSX comments.
// Mirrors the lightweight zone-stripping the pre-tool-guard already used.
function repairEmDashes(content) {
  if (!content.includes(EM_DASH)) return { content, changed: 0 };
  // Strip exempt zones, but only for detection; replacement is global on the live string.
  // We make replacement global and cheap because em-dashes inside code blocks are rare and
  // typically still wrong. If a user genuinely needs U+2014 inside a code fence, they can
  // disable this hook on that file, but in practice this matches CLAUDE.md's "no em-dashes"
  // rule which has zero exemptions in authored content.
  const fixed = content.split(EM_DASH).join(EN_DASH);
  return { content: fixed, changed: (content.length - fixed.length === 0) ? 0 : (content.match(/—/g) || []).length };
}

// ---------------------------------------------------------------------------
// Frontmatter parsing — detect and fix duplicate keys
// ---------------------------------------------------------------------------

/**
 * Parse YAML frontmatter lines and detect duplicate top-level keys.
 * Returns { hasDuplicates, fixed, duplicates } where fixed is the
 * deduplicated frontmatter string (last value wins).
 */
function deduplicateFrontmatter(frontmatterContent) {
  const lines = frontmatterContent.split('\n');
  const seen = new Map(); // key → { lineIndex, value }
  const duplicates = [];
  const lineIsTopLevel = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Match top-level YAML keys (not indented, not comments, not list items)
    const match = line.match(/^([a-zA-Z][a-zA-Z0-9_-]*)\s*:/);
    if (!match) {
      lineIsTopLevel.push(false);
      continue;
    }

    const key = match[1];
    lineIsTopLevel.push(true);

    if (seen.has(key)) {
      duplicates.push({ key, line: i + 1, kept: 'last' });
      // Mark the PREVIOUS occurrence for removal
      const prev = seen.get(key);
      prev.remove = true;
      // Update to this (later) occurrence
      seen.set(key, { lineIndex: i, remove: false });
    } else {
      seen.set(key, { lineIndex: i, remove: false });
    }
  }

  if (duplicates.length === 0) {
    return { hasDuplicates: false, fixed: frontmatterContent, duplicates: [] };
  }

  // Build the set of line indices to remove
  const removeLines = new Set();
  for (const [, entry] of seen) {
    if (entry.remove) {
      removeLines.add(entry.lineIndex);
      // Also remove continuation lines (indented lines following the removed key)
      for (let j = entry.lineIndex + 1; j < lines.length; j++) {
        if (lines[j].match(/^\s+/) && !lines[j].match(/^[a-zA-Z]/)) {
          removeLines.add(j);
        } else {
          break;
        }
      }
    }
  }

  const fixedLines = lines.filter((_, i) => !removeLines.has(i));
  return {
    hasDuplicates: true,
    fixed: fixedLines.join('\n'),
    duplicates
  };
}

/**
 * Extract frontmatter from MDX content.
 * Returns { start, end, content } or null if no frontmatter.
 */
function extractFrontmatter(fileContent) {
  const match = fileContent.match(/^(---\n)([\s\S]*?\n)(---)/);
  if (!match) return null;

  return {
    before: match[1],   // opening ---\n
    content: match[2],   // frontmatter body
    after: match[3],     // closing ---
    fullMatch: match[0],
    rest: fileContent.slice(match[0].length)
  };
}

// ---------------------------------------------------------------------------
// Main hook logic
// ---------------------------------------------------------------------------

let input = '';
stdin.setEncoding('utf8');
stdin.on('data', (chunk) => { input += chunk; });
stdin.on('end', () => {
  try {
    const data = JSON.parse(input);
    const toolInput = data.tool_input || {};
    const fp = toolInput.file_path || '';

    // Only care about .mdx files
    if (!/\.mdx$/.test(fp)) {
      process.exit(0);
    }

    // Skip workspace/template/session files
    if (/\/workspace\/|\/\.claude\/|\/tmp\//.test(fp)) {
      process.exit(0);
    }

    // Read the file
    let fileContent;
    try {
      fileContent = fs.readFileSync(fp, 'utf8');
    } catch (_) {
      process.exit(0); // File does not exist
    }

    const fixes = [];
    let workingContent = fileContent;

    // 1. Duplicate frontmatter keys
    const fm = extractFrontmatter(workingContent);
    if (fm) {
      const dedupe = deduplicateFrontmatter(fm.content);
      if (dedupe.hasDuplicates) {
        workingContent = fm.before + dedupe.fixed + fm.after + fm.rest;
        const dupList = dedupe.duplicates.map((d) => `"${d.key}" (line ${d.line})`).join(', ');
        fixes.push(`removed duplicate keys: ${dupList}`);
      }
    }

    // 2. Frontmatter quote standardisation (single-quoted scalars => double-quoted).
    try {
      const fmRes = fmQuotes.processFile(workingContent);
      if (fmRes.changed > 0) {
        workingContent = fmRes.content;
        fixes.push(`normalised ${fmRes.changed} frontmatter scalar(s) to double quotes`);
      }
    } catch (_) { /* never block on remediator failure */ }

    // 3. Em-dash to en-dash across the file body.
    const emRes = repairEmDashes(workingContent);
    if (emRes.content !== workingContent) {
      workingContent = emRes.content;
      fixes.push('replaced em-dash with en-dash');
    }

    if (fixes.length > 0) {
      fs.writeFileSync(fp, workingContent);
      console.log(JSON.stringify({
        systemMessage: `FRONTMATTER AUTO-FIX in ${path.basename(fp)}: ${fixes.join('; ')}. File rewritten.`
      }));
    }

    process.exit(0);
  } catch (_) {
    process.exit(0);
  }
});
