---
name: propagate
description: >-
  File rename/move propagation skill. Detects moved v2/ files, audits all 10 reference
  surfaces (docs.json, MDX links, hrefs.jsx, llms.txt, sitemap-ai.xml, ai-companion-manifest,
  config patterns, redirects), presents a structured dry-run report, waits for human approval,
  then applies all changes deterministically. Use after any v2/ file rename or move.
metadata:
  version: "1.0"
  category: governance
  status: "draft"
---

# SKILL: Propagate -- File Move/Rename Reference Propagation

A v2/ file was renamed or moved. Every reference to it across the repo must be updated. This skill finds them all, shows you what will change, and applies the changes only with your approval.

---

## When to use

- After renaming or moving any file under `v2/`
- After the move-detect hook fires a systemMessage about a detected move
- When you suspect stale path references exist after a manual file operation
- When `lpd move-page` was not used and references may be out of sync
- After a folder rename affecting multiple v2/ files

## When NOT to use

- The move was done via `lpd move-page` (it already runs sync-docs-paths internally)
- You are only renaming content inside a file (not moving the file itself)
- The file is outside v2/ and has no v2/ references

---

## Step 0: Detect move source

Determine what was moved and where it went. Three sources, checked in priority order:

1. **Explicit arguments** -- if the user provided `--from` and `--to` paths, use those
2. **Session temp file** -- read `/tmp/claude-moves-{CLAUDE_SESSION_ID}` for pairs stored by the move-detect hook
3. **Git staging** -- fall back to `git diff --cached --name-status -M` to detect staged renames

```
Move source: [explicit / hook temp file / git staging]
Pairs found: [N]
  source: v2/old/path.mdx -> dest: v2/new/path.mdx
```

If no moves are found from any source, report "No moves detected" and stop. Do not guess.

---

## Step 1: Validate

For each move pair, confirm the move actually happened:

1. **Destination exists** -- the new file is on disk
2. **Source does not exist** -- the old file was actually moved (not copied)
3. **Paths are well-formed** -- both are valid v2/ paths with .md or .mdx extension
4. **No conflicts** -- the destination was not already an existing file that got overwritten

```
Validation:
  v2/old/path.mdx -> v2/new/path.mdx
    Destination exists: [yes/no]
    Source removed: [yes/no]
    Paths valid: [yes/no]
```

If any validation fails, report the issue and stop. Do not attempt propagation with invalid pairs.

---

## Step 2: Dry-run report

Run the propagation engine in check mode. Use the `docs-path-sync` library:

```js
const sync = require('./operations/scripts/config/docs-path-sync');
const result = sync.runDocsPathSync({
  mode: 'check',
  explicitMoves: pairs.map(p => ({ sourcePath: p.source, targetPath: p.dest }))
});
```

Present a structured report covering all reference surfaces:

```
PROPAGATION REPORT -- Dry Run
=============================================

Move: v2/old/path.mdx -> v2/new/path.mdx

SURFACE                          CHANGES
----------------------------------------------
docs.json nav REMOVALS (old path) {N}
docs.json nav ADDITIONS (new path){N}
docs.json redirect destinations  {N}
NEW redirects to create          {N}
MDX/JS/JSON file references      {N} across {K} files
  - file-path tokens             {n}
  - route tokens                 {n}
  - rooted-route tokens          {n}
  - full-url tokens              {n}
  - relative-file tokens         {n}
  - relative-route tokens        {n}
llms.txt URL entries             {N}
sitemap-ai.xml URL entries       {N}
docs-guide/ config files         {N}

Total changes: {N}
Total files affected: {K}
Files: [list each affected file path]

Awaiting approval. Say "go" to apply, or "abort" to cancel.
```

Rules for this report:
- **docs.json navigation is a two-part operation.** A move means the old route is REMOVED from its current group AND the new route is ADDED to the destination group. Both parts are mandatory — leaving the old entry creates a dead nav link, omitting the new entry hides the page.
- **Report "0 changes" explicitly** for surfaces with no matches. The user must see that every surface was checked.
- **Group file changes by reason** so the user understands what types of references are being updated.
- **List every affected file** so the user can review which files will be modified.

---

## Step 3: Wait for approval (HUMAN GATE)

This is a hard gate. Do not proceed without explicit approval.

Valid approval signals: "go", "ok", "proceed", "yes", "do it", "apply"
Valid abort signals: "abort", "cancel", "no", "stop", "wait"

If the user wants to modify a specific change (e.g., skip a file, adjust a redirect), handle it before applying.

---

## Step 4: Apply

On approval, run the propagation engine in write mode:

```js
const result = sync.runDocsPathSync({
  mode: 'write',
  stage: false,  // do not auto-stage -- let user review with git diff first
  explicitMoves: pairs.map(p => ({ sourcePath: p.source, targetPath: p.dest }))
});
```

After applying:
1. Clear the session temp file (`/tmp/claude-moves-{sessionId}`) to prevent double-application
2. Report what was changed

---

## Step 5: Completion report

```
PROPAGATION COMPLETE
=============================================

Move: v2/old/path.mdx -> v2/new/path.mdx

Applied changes:
  docs.json:                    {N} navigation rewrites
  New redirect created:         {source} -> {dest}
  File reference rewrites:      {N} changes across {K} files
  llms.txt:                     {N} URL rewrites
  sitemap-ai.xml:               {N} URL rewrites
  docs-guide/ configs:          {N} path rewrites

Recommend:
  1. Review changes: git diff
  2. Verify a sample page renders correctly
  3. Commit when satisfied
```

---

## Step 6: Post-propagation checklist

After applying, verify these items that the automated system cannot check:

- [ ] **Frontmatter** -- does the moved page's frontmatter need updating (title, description, sidebarTitle)?
- [ ] **Breadcrumbs** -- does the new location affect the breadcrumb trail?
- [ ] **Tab membership** -- if the page moved between tabs (e.g., resources -> about), does `docs.json` tab assignment need updating?
- [ ] **SEO** -- does the redirect preserve SEO value? (Mintlify handles 301s via the redirects array)
- [ ] **Cross-tab links** -- are there links from other tabs that still make sense in context?

Present this checklist to the user. These require human judgement.

---

## Multiple moves in one session

When multiple files were moved before `/propagate` is invoked:

1. The session temp file accumulates all move pairs
2. Process all pairs in a single batch (the library handles multiple pairs natively)
3. The dry-run report shows all moves together
4. Apply all at once on approval

### Conflicting moves

If the temp file contains moves that conflict (e.g., A -> B then B -> C):
1. Detect the conflict: the first move's destination no longer exists
2. Report it: "Conflicting moves detected: A -> B, then B -> C. The effective move is A -> C."
3. Propose the resolved pair (A -> C) and wait for confirmation

---

## Folder renames

When a folder is renamed (e.g., `v2/old-section/` -> `v2/new-section/`):

1. The move-detect hook stores one pair per file found in the destination directory
2. If invoked manually, enumerate the destination directory and pair each file with its former path
3. All pairs are processed in a single batch
4. The redirect creation logic handles each file individually

For large folder renames (20+ files), the dry-run report should summarise by directory rather than listing every individual token replacement.

---

## Integration with other skills

- **`/thread`** -- propagate fits into the standard workflow. The hook fires automatically; Claude mentions it in the thread context.
- **`/diagnose`** -- if propagation produces unexpected results (references not found, wrong replacements), switch to `/diagnose` to investigate.
- **`/iterate`** -- after propagation, use `/iterate` to review the changes against quality standards.

---

## What this skill does NOT do

- **Content updates** -- if the page content references its own location (e.g., "this page lives at..."), that must be updated manually.
- **External references** -- links from external sites, bookmarks, shared URLs. The redirect creation covers these via 301 redirects.
- **workspace/ directory** -- historical research and audit files are NOT updated (they are point-in-time snapshots).
- **v1/ directory** -- v1 files are frozen and not scanned.

---

## Anti-patterns

1. **Applying without reviewing the dry-run.** The report exists for a reason. Skipping it risks mass corruption.
2. **Propagating a copy, not a move.** If both old and new files exist, this is a copy, not a move. References should not be rewritten because the old page still exists.
3. **Running propagation twice for the same move.** The temp file should be cleared after application. Double-applying creates broken references.
4. **Skipping the post-propagation checklist.** Automated reference updates handle paths; human context handles meaning.
5. **Ignoring the redirect.** The auto-created redirect is critical for SEO and external links. Do not remove it without understanding the consequences.

---

## Principles

1. **Deterministic, not heuristic.** Every rewrite is an exact token replacement. No fuzzy matching, no guessing.
2. **Show before changing.** The dry-run report is mandatory. Transparency builds trust.
3. **Human gate on writes.** The library can rewrite hundreds of files in seconds. That power requires a human checkpoint.
4. **Complete coverage.** All 10 reference surfaces are checked, every time. "0 changes" is a valid and important result.
5. **One source of truth.** The `docs-path-sync.js` library owns all rewrite logic. This skill orchestrates; it does not duplicate.

---

## Technical reference

### Library API

```js
const sync = require('./operations/scripts/config/docs-path-sync');

// Dry-run (check mode)
const result = sync.runDocsPathSync({
  mode: 'check',
  explicitMoves: [{ sourcePath: 'v2/old.mdx', targetPath: 'v2/new.mdx' }]
});

// Apply (write mode)
const result = sync.runDocsPathSync({
  mode: 'write',
  stage: false,
  explicitMoves: [{ sourcePath: 'v2/old.mdx', targetPath: 'v2/new.mdx' }]
});
```

### Result object

```js
{
  repoRoot: string,
  mode: 'check' | 'write',
  pairs: [{ type, sourcePath, targetPath, sourceRoute, targetRoute }],
  ambiguous: [{ sourcePath, candidates }],
  unmatchedAdds: [string],
  docsJsonChanges: [{ file, pointer, from, to, reason }],
  fileChanges: [{ file, from, to, reason, move }],
  changedFiles: [string],
  applied: boolean
}
```

### Reference surfaces and token variants

| Surface | Token variant | Example |
|---------|--------------|---------|
| MDX imports/requires | `file-path` | `v2/old/page.mdx` |
| docs.json navigation | `route` | `v2/old/page` |
| MDX href attributes | `rooted-route` | `/v2/old/page` |
| llms.txt, sitemap-ai.xml | `full-url` | `https://docs.livepeer.org/v2/old/page` |
| Relative MDX links | `relative-file` | `../../old/page.mdx` |
| Relative route links | `relative-route` | `../../old/page` |

### Hook temp file format

`/tmp/claude-moves-{CLAUDE_SESSION_ID}` -- newline-delimited JSON:

```json
{"source":"v2/old/path.mdx","dest":"v2/new/path.mdx","timestamp":1711700000000,"command":"git mv ..."}
```

---

## Status: Draft -- Testing in production

Known limitations updated after each real use.

### Known limitations
- Not yet tested on a real rename operation end-to-end
- Folder rename detection relies on hook capturing individual file moves
- Conflicting move resolution not yet implemented (design only)

### Test log
| Date | Used on | Worked | Didn't | Changes |
|---|---|---|---|---|
