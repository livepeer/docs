# Repo Audit: Consolidated Findings & Recommendations

*Audited: 2026-03-20 — covers all top-level directories except v1/ and v2/*

---

## 1. Quick Summary

| Directory | Overall Health | Top Issue | Priority |
|---|---|---|---|
| `snippets/` | Good but bloated | 20+ MB of unreferenced community assets | **HIGH** |
| `tools/` | Good — pre-push hook broken | Codex script paths not updated after restructure | **CRITICAL** |
| `docs-guide/` | Good — minor stale items | Archive files in wrong location, empty stubs | Medium |
| `tasks/` | Well-governed | 4 loose orphan files, 1 deprecated plan | Low |
| `ai-tools/` | Active repair in-flight | Template numbering collisions, IDE guides can drift | **BLOCKER** |
| `contribute/` | Clean | Ready to move to `docs-guide/` | Low |
| `api/` | Partially stale | Backup duplicate, disconnected from Mintlify | Medium |
| `tests/` | Good | Empty README.mdx, no report TTL policy | Low |
| `docs/` | **Unknown / risky** | 506 files not in .allowlist, 7 todo.txt planning notes | **HIGH** |

---

## 2. Critical Issues (Fix First)

### CRITICAL: Pre-push hook is broken

The pre-push hook references a script that no longer exists at its expected path:

```
Expected by hook:    tools/scripts/codex/validate-locks.js      ← DOES NOT EXIST
Actual location:     tools/scripts/validators/ai/codex/validate-locks.js  ✓
```

This means Codex lock validation is silently not running on push. Direct result of SCRIPT-GOVERNANCE restructure not updating all hook references.

**Fix:** Update pre-push hook path. One-line change.

---

### HIGH: `docs/` is unallowlisted and ungoverned

`docs/` contains 506 MDX files mirroring the `v2/` section structure, plus 7 `todo.txt` files with per-section restructuring plans. It is **not in `.allowlist`** — meaning it either fails the pre-commit root-structure gate or the gate isn't catching it.

The git log shows `docs/` was actively modified during the component restructure (last 3 weeks). It is not purely historical. It appears to be a staging/draft copy of v2 used to plan an upcoming restructure — but this work is **untracked in the task system**.

**Actions:**
1. Run `git log --oneline -- docs/ | head -20` to confirm origin
2. Extract the 7 `todo.txt` planning notes into `tasks/plan/active/V2-RESTRUCTURE/` (or similar)
3. Delete `docs/` — or if it must stay, add to `.allowlist` and document its purpose

---

### HIGH: ~26 MB of unused or duplicate assets in `snippets/assets/`

| Waste | Size | Cause |
|---|---|---|
| `domain/02_COMMUNITY/hero-images/` (19 files) | ~20 MB | 100% unreferenced — community section pages don't use them |
| `media/heros/` (20 files) | ~2 MB | Complete duplicate of `domain/00_HOME/Hero_Images/` |
| `data/protocol-overview.html` | ~4 MB | Single large file, no consumer found |
| Unreferenced home hero variants (13 files) | ~500 KB | Alternate hero designs that were never shipped |
| Logo triplication (`logo/`, `logos/`, `site/logo/`) | ~40 KB | Same SVGs in three locations |

**Conservative cleanup: ~26 MB recoverable from a 65 MB directory.**

---

## 3. Medium Priority Issues

### `tools/script-index.md` is stale

References old `tools/scripts/codex/` paths throughout. Since this is supposed to be auto-generated, the fix is to regenerate it — not hand-edit it.

### `docs/` planning notes need to be captured

Before deleting `docs/`, extract the per-section restructuring TODOs. These represent real intent:
- Home: move `/home` to root, rename `why-livepeer` → `benefits`, remove Get Started anchor
- Multiple sections: SEO/AEO upgrades, OG image improvements, link fixes

These belong in a proper task, not buried in an untracked directory.

### `api/` has a stale backup and possible disconnection

- `openapi.yaml.backup` is a manual backup artifact not in `.allowlist`. Safe to delete.
- `worker/api/` is a partial mirror of root `api/` — unclear if active or stale.
- No docs.json routing found that points to `api/`. Specs may be disconnected from the published docs. Worth verifying whether any script actively reads from `api/`.

### `docs-guide/` has archive files in the wrong place

`catalog/scripts-catalog-archive.mdx` and `catalog/visual-explainer-workflows-archive.mdx` are archived content sitting in the active catalog directory. They belong in `docs-guide/_workspace/archive/`.

### `docs-guide/frameworks/component-framework.mdx` is a dead redirect

11-line file that only points to `component-governance.mdx`. Confirmed deprecated. Safe to delete after checking for inbound links.

### `tasks/plan/active/` has 4 orphan files

These files have no owning task folder:
- `optimise-performance.md`
- `usefulness-scoring-gap-analysis.md`
- `usefulness-scoring-implementation-strategy.md`
- `visual-explainer-workflows.mdx`

Either create a task folder for them or move to `plan/future/`.

---

## 4. Low Priority / Cleanup

| Item | Action |
|---|---|
| `tasks/plan/active/dep-COPYWRITING FRAMEWORK/` — prefixed deprecated | Move to `plan/complete/` or delete |
| `tasks/staging/deprecated-n8n/` — 4 JSON files, marked deprecated | Delete if migration confirmed complete |
| 5 empty `source-of-truth.md` stubs in `docs-guide/` subdirectories | Delete — `source-of-truth-policy.mdx` already exists |
| `docs-guide/features/ai-features.mdx` — 43 lines, stub level | Expand or explicitly mark as placeholder |
| `tests/README.mdx` — empty file | Delete |
| `tests/reports/` — no TTL policy | Add cleanup policy matching `tasks/reports/` retention |
| `snippets/composables/` — empty directory | Delete |
| `snippets/templates/pages/tutorial-and-guides/tutorial-template.md` — 0 bytes | Delete |
| `snippets/automations/showcase/README.md` — 0 bytes | Delete |
| `ai-tools/ai-rules/.AI-SAFEGUARDS.md` — empty | Populate or delete |
| `ai-tools/ai-skills/templates/` — template numbering collisions (53 files, 42 slots, "32-" duplicated) | Audit after AI-TOOLS-GOVERNANCE completes |
| `docs.json.bak` at root | Delete |
| `ASSISTANT.md` at root — superseded by AGENTS.md | Move to docs-guide/ historical or delete |
| `root-allowlist-governance.mdx` references `llms-full.txt` — file doesn't exist | Update doc to remove stale reference |

---

## 5. Governance: `_workspace/` and Scratch File Policy

### The problem

Planning artifacts and scratch work are currently scattered:
- `docs/` — 506 files + 7 todo.txt with restructuring plans, outside the task system
- `tasks/plan/active/` — 4 loose files with no owning folder
- `docs-guide/_workspace/` — active design specs, no lifecycle governance
- `ai-tools/ai-skills/_workspace/` — research drafts, no lifecycle governance
- `docs-guide/catalog/` — archive files mixed with active catalogs

There is no consistent policy for:
1. When scratch/planning work goes into `_workspace/` vs a formal task folder
2. When `_workspace/` content graduates to "official" content
3. How long `_workspace/` content lives before cleanup

### Recommended `_workspace/` governance policy

Add to `docs-guide/policies/` (or as a section of `cleanup-quarantine-policy.mdx`):

```
_workspace/ directories are for:
- Active design specs and PRDs in-progress
- Research drafts being used to inform decisions
- Archived/superseded versions retained for reference

NOT for:
- Planning TODO notes (→ go in tasks/plan/)
- Final governance documentation (→ graduate to parent directory)
- Archive files from active catalogs (→ go in _workspace/archive/)

Lifecycle:
- Active specs: no TTL while work is ongoing
- Completed specs: graduate to parent dir or archive within 30 days of decision
- archive/ subdirectory: retain indefinitely (for migration traceability)
```

### Specific `_workspace/` locations currently in repo

| Location | Status | Governance needed? |
|---|---|---|
| `docs-guide/_workspace/` | Active planning specs | Add lifecycle policy |
| `ai-tools/ai-skills/_workspace/` | Research drafts | Add lifecycle policy |
| `docs-guide/_workspace/archive/` | Migration traceability | Keep indefinitely |

---

## 6. Recommended Actions by Sequence

### Do now — no dependencies, no risk

1. **Fix pre-push hook** — update `tools/scripts/codex/validate-locks.js` path to `tools/scripts/validators/ai/codex/validate-locks.js`
2. **Delete `docs.json.bak`** from root
3. **Delete `snippets/assets/domain/02_COMMUNITY/hero-images/`** — all 19 files, 100% unreferenced, ~20 MB
4. **Delete `snippets/assets/media/heros/`** — complete duplicate of domain/00_HOME/Hero_Images/, ~2 MB
5. **Delete `api/openapi.yaml.backup`** — stale backup artifact
6. **Delete empty stubs** — the 5 × `source-of-truth.md` (0 bytes) in docs-guide/, `tests/README.mdx`, `snippets/composables/`, two empty 0-byte files in snippets/

### Do next — low risk, investigate first

7. **Resolve `docs/`** — run `git log --oneline -- docs/ | head -20`, extract todo.txt notes to tasks/, then delete
8. **Investigate `data/protocol-overview.html`** — 4.3 MB with no consumer found. If unused, delete.
9. **Investigate Embody avatars** — verify whether dynamically loaded. If not, delete (~4 MB).
10. **Delete 13 unreferenced home hero variants** — hero_developer, hero_help, hero_partner, hero_reference, etc.
11. **Consolidate logos** — `logo/` and `site/logo/` are duplicates of `logos/`. Canonicalize to `logos/`, delete others.
12. **Move catalog archives** — `docs-guide/catalog/scripts-catalog-archive.mdx` + `visual-explainer-workflows-archive.mdx` → `docs-guide/_workspace/archive/`
13. **Delete `docs-guide/frameworks/component-framework.mdx`** — after verifying no inbound links (it's a 11-line deprecated redirect)
14. **Clean `tasks/plan/active/`** — create task folder for 4 loose files or move to future/; deprecate dep-COPYWRITING FRAMEWORK

### After AI-TOOLS-GOVERNANCE completes

15. **Fix ai-tools template numbering** — audit 53 templates, remove duplicates, consider named not numbered
16. **Move `ai-tools/` → `tools/ai-tools/`** — per research.md sequencing plan

### After SCRIPT-GOVERNANCE completes + merges

17. **Move `contribute/` → `docs-guide/contributing/`** — update AGENTS.md, pre-commit, README (full dependency map in audit-contribute.md)
18. **Consolidate `tools/scripts/archive/` + `x-archive/`** into single strategy
19. **Prune 28 empty organizational dirs** in `tools/scripts/`
20. **Evaluate `tests/` → `tools/tests/`**

### Governance additions (write, not delete)

21. **Add `_workspace/` lifecycle policy** — document when specs graduate and when archives are retained (see Section 5 above)
22. **Add TTL policy for `tests/reports/`** — mirror the existing `tasks/reports/` retention workflow
23. **Write `_workspace/` governance** as a new entry in `docs-guide/policies/cleanup-quarantine-policy.mdx` or standalone

---

## 7. Root File Decision Matrix (Condensed)

| Entry | Decision | Rationale |
|---|---|---|
| `docs.json`, `style.css`, `.mintignore` | Keep at root | Mintlify platform discovery |
| `snippets/`, `v1/`, `v2/` | Keep at root | Mintlify content roots |
| `.allowlist`, `LICENSE`, `README.md`, `AGENTS.md`, `SECURITY.md` | Keep | Repo governance |
| `.gitignore`, `.gitattributes`, `.github/`, `.githooks/` | Keep | Git |
| `.claude/`, `.codex/`, `.cursor/`, `.windsurf/` | Keep | AI adapter platform paths |
| `.vscode/`, `.editorconfig`, `.prettierrc`, `.lpdignore` | Keep | IDE + helpers |
| `lpd`, `Makefile`, `Dockerfile` | Keep | Workflow entrypoints |
| `sitemap-ai.xml`, `llms.txt` | Conditional | Keep only if platform requires root URL |
| `ai-tools/` | Move → `tools/ai-tools/` | After AI-TOOLS-GOVERNANCE |
| `contribute/` | Move → `docs-guide/contributing/` | After SCRIPT-GOVERNANCE |
| `docs-index.json` | Move → `tools/data/` or `docs-guide/catalog/` | Low risk; update generator path |
| `ASSISTANT.md` | Retire | Superseded by AGENTS.md; references stale paths |
| `api/` | Keep — investigate | Possible Mintlify routing dependency |
| `tests/` | Keep — defer | Evaluate move to `tools/tests/` with SCRIPT-GOVERNANCE |
| `tasks/` | Keep — rename deferred | Rename to `operations/` only after all active plans complete |
| `docs/` | Delete after extracting todos | Not in allowlist, ungoverned, risky |
| `docs.json.bak` | Delete | Backup artifact |
| `.cache/`, `.DS_Store`, `mint-debug.log` | Gitignore | Platform clutter |

---

## 8. Individual Audit Files

- [audit-snippets.md](audit-snippets.md) — Full asset usage analysis, component frequencies, cleanup savings
- [audit-tools.md](audit-tools.md) — Script taxonomy, critical hook breakage, archive strategy
- [audit-docs-guide.md](audit-docs-guide.md) — Catalog staleness, policy overlaps, empty stubs, workspace status
- [audit-tasks.md](audit-tasks.md) — Active plans, loose files, reports structure
- [audit-ai-tools.md](audit-ai-tools.md) — Skills, templates, IDE adapters, active repair blocker
- [audit-contribute.md](audit-contribute.md) — Contents, move readiness, dependency map
- [audit-api.md](audit-api.md) — OpenAPI specs, duplicates, Mintlify routing investigation
- [audit-tests.md](audit-tests.md) — Test types, invocation, move candidacy
- [audit-docs-mystery.md](audit-docs-mystery.md) — The unallowlisted `docs/` directory — origin, risk, and resolution
