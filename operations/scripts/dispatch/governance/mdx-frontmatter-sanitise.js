/**
 * @script      mdx-frontmatter-sanitise
 * @type        dispatch
 * @concern     governance
 * @niche       
 * @purpose     
 * @description PostToolUse hook for Edit/Write on ANY .mdx file (not just v2/).
 * @mode        dispatch
 * @pipeline    PostToolUse hook → parse frontmatter → detect errors → auto-fix → rewrite
 * @scope       .claude/settings.json PostToolUse hook (Edit|Write matcher)
 * @usage       Called automatically by Claude Code PostToolUse hook. Not invoked directly.
 */

const fs = require('fs');
const path = require('path');
const { stdin } = process;

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
      process.exit(0); // File doesn't exist (new file not yet written?)
    }

    const fm = extractFrontmatter(fileContent);
    if (!fm) {
      process.exit(0); // No frontmatter
    }

    // Check for duplicate keys
    const result = deduplicateFrontmatter(fm.content);

    if (!result.hasDuplicates) {
      process.exit(0); // Clean
    }

    // Auto-fix: rewrite the file with deduplicated frontmatter
    const fixedContent = fm.before + result.fixed + fm.after + fm.rest;
    fs.writeFileSync(fp, fixedContent);

    const dupList = result.duplicates.map((d) => `"${d.key}" (line ${d.line})`).join(', ');
    console.log(JSON.stringify({
      systemMessage: `FRONTMATTER AUTO-FIX: Removed duplicate keys in ${path.basename(fp)}: ${dupList}. File rewritten. Duplicate keys kill the Mintlify dev server — this has been fixed automatically.`
    }));

    process.exit(0);
  } catch (_) {
    process.exit(0);
  }
});
