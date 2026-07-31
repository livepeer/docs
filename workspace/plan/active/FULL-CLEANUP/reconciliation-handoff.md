# Branch Reconciliation Handoff
> docs-v2-dev ↔ origin/docs-v2

**Plan:** `/Users/alisonhaire/.claude/plans/bright-floating-pebble.md`
**Status:** Phase -1 complete. Ready for Phase 0 (reconciliation).
**Date:** 2026-03-28

---

## What was done

### docs-v2-dev full cleanup (cleanup/full-repo branch)
- All 36 root folders audited and dispositioned
- 2,486 files removed from git tracking via gitignore:
  - `_dep-docs/` — 525 files (legacy docs/ renamed and gitignored)
  - `v2/cn/`, `v2/es/`, `v2/fr/` — i18n stubs (24 files)
  - `**/_workspace/` — 1,937 files (all planning/staging/archive material)
- 86 x-deprecated/x-archived files consolidated into `_workspace/` at parent level before gitignore
- docs.json audited: 421 OK, 17 broken (B017), 270 orphans (B018), 0 stale
- Backlog logged: B001–B018 in `workspace/plan/active/FULL-CLEANUP/backlog.md`
- Rollback anchor: `3a996563b0d6737646cbb7e51a6c2393257ccc82`

### docs-v2 cleanup (cleanup/docs-v2 branch, pushed to origin)
- Gitignored and untracked 2,180 files:
  - `docs/` — 525 files (ff1c3a2d4)
  - `tasks/` — 588 files (ba2de35ea)
  - `v2/cn/`, `v2/es/`, `v2/fr/` — 1,067 files (fa581c618)
- 11 broken links fixed in v2/solutions/livepeer-studio + v2/developers (4c5330935)
- Tests pass: `test:docs-nav` (1,336 entries, clean), `test:links` (0 broken links)
- `_workspace/` NOT gitignored on docs-v2 — intentional, to preserve visibility for post-merge review
- Same 2 broken links fixed on docs-v2-dev (a12cd8897)

---

## Current divergence (post-cleanup)

Measured: docs-v2-dev HEAD vs origin/cleanup/docs-v2

| Metric | Count |
|---|---|
| Commits ahead (docs-v2-dev) | 994 |
| Commits behind (on cleanup/docs-v2 not in dev) | 784 |
| Files that differ | 7,040 |
| MDX files that differ | 3,889 |
| docs.json differs | 1 |

### Breakdown by change type
| Type | Count | Meaning |
|---|---|---|
| A — Added on docs-v2-dev | 4,706 | New content not on docs-v2 — no conflicts |
| D — Deleted on docs-v2-dev | 1,135 | Intentional removals |
| M — Modified (both exist) | **384** | Real reconciliation workload |
| R — Renamed | ~800 | Mostly docs/→_dep-docs/, structural moves |

**The 384 modified files are the actual reconciliation workload.** Everything else is additive or intentional deletion.

---

## Reconciliation strategy (approved)

**"Ours-first cherry-pick"** — docs-v2-dev structure wins, cherry-pick content updates from docs-v2.

### Phase 0: Setup
```bash
git worktree add ../Docs-v2-dev-reconcile -b reconcile/docs-v2 docs-v2-dev
```
Record SHAs of:
- docs-v2-dev HEAD: `e4788be71` (current as of 2026-03-28)
- origin/cleanup/docs-v2 HEAD: `4c5330935`
- Merge base: `017c25c1`

Run baseline test suite — capture BEFORE state.

### Phase 1: Categorise origin commits
```bash
git log origin/cleanup/docs-v2 ^docs-v2-dev --oneline --no-merges
```
Categorise each commit:
- **CONTENT** — page edits, copy changes → cherry-pick
- **STRUCTURAL** — folder moves, renames, file deletions → skip (docs-v2-dev version wins)
- **CONFIG** — docs.json, package.json → manual merge per file
- **INFRA** — scripts, tests, .githooks → manual review
- **CHORE** — lint, spelling, SEO → cherry-pick

### Phase 2: Cherry-pick in batches
Batch by category. Test after each batch. Rollback if batch breaks tests.

**Priority order:**
1. CONTENT commits (page edits) — highest value, lowest conflict risk
2. CHORE commits (spelling, SEO, redirects)
3. CONFIG commits (docs.json changes — manual merge)
4. INFRA commits — review individually

### Phase 3: Validate
Full test suite: `cd tests && npm test`
Playwright browser test on key pages.
Manual spot check: 5 pages from each tab.

### Phase 4: Push
```bash
git push origin reconcile/docs-v2:docs-v2 --force-with-lease
```
(after Alison approval)

---

## Key risks

| Risk | Mitigation |
|---|---|
| docs.json conflict — both branches modified nav | Manual merge — docs-v2-dev wins on structure, apply content-only changes from docs-v2 |
| .githooks conflict | Review diffs manually, take the more restrictive version |
| Renamed files (docs/→_dep-docs/) confuse cherry-pick | Use `--strategy-option=ours` for structural files, content-only apply for page edits |
| Test suite not installed in reconcile worktree | Run `npm install` in tests/ after worktree creation |

---

## Worktrees in use

| Worktree | Branch | Purpose | Status |
|---|---|---|---|
| `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev` | `docs-v2-dev` | Main working branch | Active |
| `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev-cleanup` | `cleanup/full-repo` | docs-v2-dev cleanup work | Complete |
| `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev-docs-v2-cleanup` | `cleanup/docs-v2` | docs-v2 branch cleanup | Complete, pushed |

---

## Backlog items (B001–B018)

See: `workspace/plan/active/FULL-CLEANUP/backlog.md` (in cleanup worktree)
Copy at: `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev-cleanup/workspace/plan/active/FULL-CLEANUP/backlog.md`

Key P1 items:
- B010 — v1 still default in docs.json
- B012 — gateways 277 deprecated files need _workspace consolidation
- B014 — orchestrators active content stream
- B017 — 17 broken docs.json entries in v2/internal/reports/
- B018 — 270 orphan MDX files not in docs.json nav
