# DOCUMENTATION Plan — Folder Index

**Last updated:** 2026-03-23
**Working folder:** `workspace/plan/active/DOCUMENTATION/`

This index maps every file and subfolder in the DOCUMENTATION plan folder. Use it as the entry point for a new agent or contributor entering this folder.

---

## What This Plan Is

The DOCUMENTATION plan is building a holistic governance layer for all repo documentation — policies, catalogs, frameworks, contributor guides, AI adapter files, and generated inventories. The goal: every documentation item has a canonical location, a declared audience, a maintenance mode, and a validator or repair path.

The model is defined. The immediate fixes are done. Execution of the frontmatter rollout (Parts ②–⑤) is pending human review approval.

See `plan.md` for the current execution state and next action.

---

## Recommended Reading Order

For a new agent entering this folder:

1. `context.md` — Aim, scope, current state, key facts
2. `plan.md` — Current execution state and next action
3. `design-canonical.mdx` — System architecture and quality bars
4. `Frameworks/doc-item-model.md` — The frozen classification contract (governs all downstream work)
5. `audits/master-audit.md` — Cross-cutting findings across all 10 concerns
6. `recommendations.md` — Structural/location recommendations R1–R23
7. `recommendations-pipeline.md` — CI/pipeline/automation recommendations

For deep-dive on a specific concern: see the relevant file in `audits/` and `system-canonical-design/`.

---

## Root-Level Files

### Canonical (read these)

| File | What it is | Status |
|---|---|---|
| `context.md` | Aim, scope, current state, key facts, folder map | Current |
| `plan.md` | Phased execution plan with progress tracking and decision log | Current |
| `prd.md` | Product requirements: aims, outcomes, process, project management rules | Current |
| `design-canonical.mdx` | System architecture (5-part system), per-part ideal state, quality bars, execution steps | Authoritative — execution reference |
| `research-best-practices.md` | Mintlify platform features + docs CI/CD + AI-native architecture best practices | Current — do not edit |
| `recommendations.md` | Full recommendation list R1–R23 (structural/location concerns) | Current — do not edit |
| `recommendations-pipeline.md` | Full recommendation list R1–R12 (CI/pipeline/automation concerns) | Current — do not edit |
| `plan-recs-agent-1.md` | Agent-generated project management recommendation plan (2026-03-23) | Current — do not edit |
| `plan-recs-agent-2.md` | Agent-generated technical architecture recommendation plan (2026-03-23) | Current — do not edit |
| `plan-recs-agent-3.md` | Agent-generated contributor experience + content pipeline recommendations (2026-03-23) | Current — do not edit |

### Archived (historical reference only)

| File | Why archived |
|---|---|
| `audit.md` | Superseded by `audits/master-audit.md` (more complete, 10-concern synthesis, 2026-03-23) |
| `research.md` | Superseded by `research-best-practices.md` (current best practices, 2026-03-23) |

---

## Subfolders

### `audits/` — Authoritative (do not edit)

10 concern-level audits plus a master synthesis. These are the ground truth for the current state of each documentation concern.

| File | Scope |
|---|---|
| `master-audit.md` | Cross-cutting synthesis: 8 patterns, prioritised P0–P6 remediation plan |
| `audit-components.md` | 117 components, 15 orphaned, 25 JSDoc drift, race condition |
| `audit-scripts.md` | 277 scripts, 138 type:unknown, 160 incomplete JSDoc, zero CI coverage |
| `audit-tooling.md` | 5 docs (2 draft/stub), stale script tip, missing frontmatter, no policy |
| `audit-workflows.md` | 43 workflows, well-wired catalog, race condition, shallow metadata |
| `audit-templates.md` | 33 page templates with no catalog, 6 duplicate names |
| `audit-ui-templates.md` | Declared autofix but nothing wired; no registry JSON |
| `audit-ui.md` | 32 pages with stale banner path, no contributor guide |
| `audit-pages.md` | 703 pages, frontmatter advisory only, catalog is tree-only |
| `audit-ai.md` | ai-features stub, no llms.txt, no adapter parity check |
| `audit-repo-structure.md` | 3-file governance fragmentation, stale generated-artifacts.json |

### `system-canonical-design/` — Authoritative (do not edit)

11 system design files — one canonical design per concern plus a master. These define the target state for each concern's documentation system.

| File | Concern |
|---|---|
| `master.mdx` | Cross-cutting system design |
| `components.mdx` | Component documentation system |
| `scripts.mdx` | Script documentation system |
| `tooling.mdx` | Tooling documentation system |
| `workflows.mdx` | Workflow documentation system |
| `templates.mdx` | Template documentation system |
| `ui-templates.mdx` | UI template documentation system |
| `ui.mdx` | Published UI documentation system |
| `pages.mdx` | Pages documentation system |
| `ai.mdx` | AI/agent documentation system |
| `repo-structure.mdx` | Repo structure documentation system |

### `Frameworks/` — Locked (do not modify without HUMAN REVIEW)

| File | What it is |
|---|---|
| `doc-item-model.md` | Frozen classification contract — docType enum, concern enum, format enum, directory convention, D9 rename table, metadata spec, enforcement summary |

### `designing/` — Mixed (see status per file)

Design iteration files from Phase 1 co-creation. Some are active references; the rest are archived.

| File | Status | What it is |
|---|---|---|
| `design-plan-v2.md` | Active reference | Final holistic design plan — all decisions resolved, full phase plan |
| `structure.md` | Active reference | Full taxonomy, directory map, and metadata spec per file format |
| `consumer-assignments.md` | Active — pending HUMAN REVIEW | Draft consumer/concern/status assignments for all ~40 docs-guide pages |
| `context.md` | Archived | Duplicate of root `context.md` — see root version |
| `design-plan.md` | Archived | First-iteration design plan — superseded by `design-plan-v2.md` |
| `dep-design-plan-v1.md` | Archived | Early iteration note — superseded by `design-plan-v2.md` |

### `_archive/` — Historical reference only

Copies of superseded files. Do not act on content here. See the notices at the top of each file for where to find the current version.

| File | Superseded by |
|---|---|
| `audit.md` | `audits/master-audit.md` |
| `research.md` | `research-best-practices.md` |
| `designing-design-plan.md` | `designing/design-plan-v2.md` |
| `designing-dep-design-plan-v1.md` | `designing/design-plan-v2.md` |
| `designing-context.md` | Root `context.md` |

---

## Completion Report

**Audit performed:** 2026-03-23

### Files archived

| Original file | Reason |
|---|---|
| `audit.md` | Superseded by `audits/master-audit.md` — new file is a 10-concern cross-cutting synthesis written 2026-03-23, substantially more complete |
| `research.md` | Superseded by `research-best-practices.md` — new file covers current Mintlify platform features, docs CI/CD patterns, and AI-native architecture; written 2026-03-23 |
| `designing/design-plan.md` | Superseded by `designing/design-plan-v2.md` — v2 file has `supersedes: design-plan.md` in frontmatter; resolves all pending design decisions |
| `designing/dep-design-plan-v1.md` | Iteration note from early design co-creation — already prefixed `dep-`; superseded by v2 |
| `designing/context.md` | Exact content duplicate of root `context.md` — root file is the canonical version |

Archive method: Archived copies written to `_archive/` with header notice. Archive notices added to the top of each original file.

### Files rewritten

| File | What changed |
|---|---|
| `context.md` | Rewrote to reflect current folder structure (audits/, system-canonical-design/, research-best-practices.md, recommendations-pipeline.md); added current state section; updated Files in This Folder table; removed stale 4-file map |
| `plan.md` | Rewrote to accurately reflect current execution state — Phase 1 and Phase 2 complete, ①EXECUTION in progress, ②+④ blocked on HUMAN REVIEW, new audit/research files noted in decision log |

### Index created

`_index.md` (this file) — created as the navigational entry point for the folder.

### Additional files catalogued

`plan-recs-agent-1.md`, `plan-recs-agent-2.md`, `plan-recs-agent-3.md` — three agent-generated recommendation plans written 2026-03-23. These were present in the folder but not listed in any prior navigation file. Added to this index as current canonical files.
