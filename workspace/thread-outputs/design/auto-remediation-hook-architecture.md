# Auto-Remediation Hook Architecture

## Problem

Agents introduce fixable errors (duplicate frontmatter keys, broken links, UK English violations, MDX-unsafe patterns). Current hooks only BLOCK or WARN. The existing 8+ remediation scripts sit unused until a human manually runs them. The hook should auto-fix using those scripts immediately after the agent's edit.

## Principle

**PostToolUse on Edit|Write → detect file type → run matching fixers → rewrite file in place → report what was fixed.**

Not pre-commit. Not manual. Not batch. Runs on the specific file that was just edited, immediately after the tool call.

---

## Architecture: Single Dispatch Hook

One new PostToolUse hook: `mdx-auto-remediate.js`. Replaces the standalone `mdx-frontmatter-sanitise.js` (absorbs it). Runs a pipeline of fixers based on file type and path.

### Why one hook, not eight

Each PostToolUse hook is a separate Node.js process spawn. 8 hooks × stdin parsing × script loading = slow. One hook that dispatches internally is faster and easier to maintain.

### Hook flow

```
PostToolUse (Edit|Write)
  │
  mdx-auto-remediate.js
  │
  ├─ Parse stdin → extract file_path
  ├─ Classify: .mdx in v2/? .mdx in docs-guide/? .jsx in snippets/? .js in operations/?
  ├─ Select fixers from registry (based on file type + path)
  ├─ Run each fixer sequentially on the single file
  ├─ Collect: what was fixed, what was already clean
  ├─ If anything was fixed → rewrite file, emit systemMessage with details
  └─ Exit(0) — PostToolUse, can only warn
```

### Fixer registry

Each fixer entry:
```javascript
{
  id: 'mdx-safe-markdown',
  name: 'MDX-safe markdown',
  match: (filePath) => /\.mdx$/.test(filePath),
  command: 'node operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js --write --files {file}',
  maxTime: 5000 // ms
}
```

### Registry — Tier 1 (ship first, all safe + deterministic + single-file)

| ID | Fixer | File types | Script | Flag | Speed |
|---|---|---|---|---|---|
| `frontmatter-dedup` | Duplicate YAML keys | .mdx | Built-in (inline) | N/A | <500ms |
| `mdx-safe-markdown` | MDX-unsafe patterns | .mdx | `repair-mdx-safe-markdown.js` | `--write --files` | 3-5s |
| `double-headers` | Duplicate H1/paragraphs | .mdx | `check-double-headers.js` | `--fix --file` | 2-3s |
| `page-links` | Broken internal hrefs | .mdx | `repair-page-links.js` | `--write --files` | 3-4s |
| `page-imports` | Unused/broken imports | .mdx, .jsx | `repair-page-imports.js` | `--write --files` | 3s |
| `grammar-en-gb` | UK English violations | .mdx | `check-grammar-en-gb.js` | `--fix --file` | 3-4s |
| `proper-nouns` | Capitalisation | .mdx | `check-proper-nouns.js` | `--fix --file` | 2-3s |
| `ownerless-lang` | Ownerless wording | .mdx | `repair-ownerless-language.js` | `--write --files` | 1-2s |

### Registry — Tier 2 (add after Tier 1 is proven)

| ID | Fixer | Notes |
|---|---|---|
| `spelling` | Spelling via cspell | 5-8s per file — may be too slow for PostToolUse |
| `component-css` | CSS token fixes | Needs --staged, no --file support yet |
| `em-dash-replace` | Auto-replace em-dashes | New: replace `—` with ` — ` or rewrite (needs policy decision) |

### File type → fixer mapping

| File matches | Fixers run (in order) |
|---|---|
| `.mdx` in `v2/` or `docs-guide/` | frontmatter-dedup → mdx-safe-markdown → double-headers → page-links → page-imports → grammar-en-gb → proper-nouns → ownerless-lang |
| `.mdx` elsewhere | frontmatter-dedup → mdx-safe-markdown → double-headers |
| `.jsx` in `snippets/components/` | page-imports |
| `.js` in `operations/scripts/` | (none in Tier 1 — Tier 2 adds script-inventory --fix) |
| Everything else | Skip |

### Execution model

1. **Sequential, not parallel.** Each fixer reads the file, fixes it, writes it back. The next fixer reads the updated file. This prevents conflicts.
2. **Timeout per fixer.** Each fixer gets `maxTime` ms. If it times out, skip it and continue with the next.
3. **Total budget: 30 seconds.** If cumulative time exceeds 30s, stop and report what was done.
4. **Frontmatter dedup runs inline** (no subprocess — it's <500ms). All others spawn `node <script> --write --files <path>`.

### Output

```json
{
  "systemMessage": "AUTO-REMEDIATE: Fixed 2 issues in prepare.mdx:\n  ✓ frontmatter-dedup: removed duplicate 'lastVerified' key\n  ✓ grammar-en-gb: 1 fix (capitalise → capitalise)\n  ○ mdx-safe-markdown: clean\n  ○ double-headers: clean"
}
```

Only reports fixers that actually changed the file. Clean fixers listed as `○` for transparency.

---

## Settings.json registration

Replace the existing `mdx-frontmatter-sanitise.js` PostToolUse entry with:

```json
{
  "matcher": "Edit|Write",
  "hooks": [
    {
      "type": "command",
      "command": "node operations/scripts/dispatch/governance/mdx-auto-remediate.js",
      "statusMessage": "Auto-remediating..."
    }
  ]
}
```

This should run BEFORE `mdx-render-verify.js` (which does the Puppeteer check). The render verify sees the already-fixed file — so it's less likely to fail on fixable issues.

**Hook order for Edit|Write PostToolUse:**
1. `mdx-auto-remediate.js` — fix known patterns
2. `mdx-render-verify.js` — verify the page renders
3. `blast-radius-scanner.js` — warn about consumers
4. `phase-gate-hook.js` — check phase checkpoints
5. `edit-loop-guard.js` — detect edit loops
6. `scope-checkpoint.js` — drift detection
7. `session-register.js` (async) — session tracking

---

## Gap fixes (new inline fixers, no new scripts)

### Em-dash auto-replace (built into the dispatch hook)
Currently the pre-tool-guard BLOCKS em-dashes. Instead, the auto-remediate hook could:
1. Detect em-dashes in the newly written content
2. Replace `—` with ` – ` (en-dash) or rewrite as comma/semicolon
3. **Decision needed:** What's the replacement policy? Block? Auto-replace with en-dash? Remove and warn?

### Missing file extension in imports (built into the dispatch hook)
Detect `import Foo from '/snippets/components/elements/text/Foo'` (no extension) and auto-append `.jsx` if the file exists with that extension.

### Explicit React/hook imports (built into the dispatch hook)
Detect `import React from 'react'` or `import { useState } from 'react'` in .jsx snippet files and remove them (Mintlify provides these as globals).

---

## What this does NOT cover

- **ReferenceError from broken components** — too context-dependent for auto-fix. The render gate (mdx-render-gate.js) blocks the agent and forces manual repair.
- **Top-level const in JSX exports** — requires understanding the component's intent. Block, don't fix.
- **Content quality** — voice, accuracy, structure. These are human review items, not auto-fixable patterns.

---

## Implementation plan

1. Build `mdx-auto-remediate.js` with the fixer registry
2. Inline the frontmatter dedup (absorb from mdx-frontmatter-sanitise.js)
3. Wire the 8 Tier 1 external fixers via `execSync` with timeout
4. Register in settings.json (replace mdx-frontmatter-sanitise.js entry)
5. Test: edit a file with known violations, verify auto-fix runs
6. Retire `mdx-frontmatter-sanitise.js` (absorbed)
