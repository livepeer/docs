# README "Where Details Live" Table -- Verification Report

Date: 2026-03-26
Source: `README.md` lines 102-131 (24 canonical docs-guide files) + additional referenced paths (lines 136-227)

---

## 1. Canonical docs-guide files (24 entries from "Where Details Live" table)

| # | Path | Exists | Status field | Lines | Content quality | Notes |
|---|------|--------|-------------|-------|----------------|-------|
| 1 | `docs-guide/source-of-truth-guide.mdx` | Yes | None | 70 | Substantial | Landing page for docs-guide; defines source-of-truth model and section routes. No status frontmatter. |
| 2 | `docs-guide/policies/source-of-truth-policy.mdx` | Yes | None | 148 | Substantial | Canonical ownership boundaries across README, docs-guide, tests docs, and Mintlify pages. Well-structured with tables. No status frontmatter. |
| 3 | `docs-guide/policies/generated-artifact-and-hook-governance.mdx` | Yes | None | 96 | Substantial | Defines artifact classes (committed_authoritative, committed_derived_scoped, ephemeral_local) and hook rules. No status frontmatter. |
| 4 | `docs-guide/policies/v2-folder-governance.mdx` | Yes | None | 143 | Substantial | Publishable vs non-publishable folder lanes, cleanup matrix. Has OG image metadata but no status. |
| 5 | `docs-guide/policies/ownerless-governance.mdx` | Yes | **current** | 125 | Substantial | `status: current`, `lastVerified: 2026-03-16`. Best-practice frontmatter. Self-governance contract for OSS/AI agents. |
| 6 | `docs-guide/features/feature-map.mdx` | Yes | None | 120 | Substantial | Repo capability inventory across 4 domains (Frontend, Backend, AI/Automation, Product). No status frontmatter. |
| 7 | `docs-guide/features/architecture-map.mdx` | Yes | None | 80 | Substantial | Systems interaction map (content, runtime, local tooling, CI/automation). Compact but covers key flows. No status frontmatter. |
| 8 | `docs-guide/tooling/lpd-cli.mdx` | Yes | **current** | 832 | Substantial | `status: current`, `lastVerified: 2026-03-22`. Largest hand-authored file. Full CLI command reference with DynamicTable component. |
| 9 | `docs-guide/policies/quality-gates.mdx` | Yes | None | 115 | Substantial | Gate layers map (pre-commit, pre-push, CI). References infrastructure-principles.mdx as canonical policy source. No status frontmatter. |
| 10 | `docs-guide/policies/audit-system-overview.mdx` | Yes | None | 69 | Moderate | Audit system purpose and design. Shorter than peers but covers key rules. No status frontmatter. |
| 11 | `docs-guide/policies/skill-pipeline-map.mdx` | Yes | None | 59 | Moderate | Run order and contract files for audit skill pipeline. Concise but complete for its scope. No status frontmatter. |
| 12 | `docs-guide/policies/cleanup-quarantine-policy.mdx` | Yes | None | 59 | Moderate | Conservative cleanup rules (keep, quarantine, delete-later). Compact. No status frontmatter. |
| 13 | `docs-guide/policies/component-layout-decisions.mdx` | Yes | **current** | 54 | Substantial | `status: current`, `lastVerified: 2026-03-21`. Page-type layout contract with required sections and approved components. Compact but high-signal. |
| 14 | `docs-guide/features/automations.mdx` | Yes | None | 209 | **Needs work** | Contains `{/* TODO: VERIFY THIS FILE */}` and `{/* NEEDS WORK */}` at lines 22-23. Content exists but is flagged as unverified. No status frontmatter. |
| 15 | `docs-guide/frameworks/content-system.mdx` | Yes | **current** | 104 | Substantial | `status: current`, `lastVerified: 2026-03-12`. Content system objectives, IA model, and technical depth organisation. |
| 16 | `docs-guide/features/data-integrations.mdx` | Yes | None | 81 | Moderate | API specifications, external data sources. Covers scope but no status frontmatter. |
| 17 | `docs-guide/features/ui-system.mdx` | Yes | **current** | 110 | Substantial | `status: current`, `lastVerified: 2026-03-12`. UI authoring system covering components, templates, and generated snippets. |
| 18 | `docs-guide/tooling/ai-tools.mdx` | Yes | None | 197 | Substantial | AI-tools governance index: registry, lane contract, audit pipeline. No status frontmatter. |
| 19 | `docs-guide/catalog/ui-templates.mdx` | Yes | **active** (generated) | 128 | Substantial (generated) | `status: active`, `maintenance: generated`. Generated from `generate-ui-templates.js`. |
| 20 | `docs-guide/catalog/pages-catalog.mdx` | Yes | **active** (generated) | 686 | Substantial (generated) | `status: active`, `maintenance: generated`. Tree catalog of all docs.json pages. |
| 21 | `docs-guide/catalog/components-catalog.mdx` | Yes | **active** (generated) | 1192 | Substantial (generated) | `status: active`, `maintenance: generated`. Full component export inventory with inline data. |
| 22 | `docs-guide/catalog/scripts-catalog.mdx` | Yes | **active** (generated) | 432 | Substantial (generated) | `status: active`, `maintenance: generated`. 265 scripts indexed. |
| 23 | `docs-guide/catalog/workflows-catalog.mdx` | Yes | **active** (generated) | 80 | Substantial (generated) | `status: active`, `maintenance: generated`. GitHub workflow inventory. |
| 24 | `docs-guide/catalog/templates-catalog.mdx` | Yes | **active** (generated) | 45 | Moderate (generated) | `status: active`, `maintenance: generated`. Issue/PR template inventory. Smallest catalog. |

---

## 2. Additional referenced paths (outside the 24-entry table)

| # | Path in README | Exists | Actual path (if different) | Lines | Content quality | Notes |
|---|---------------|--------|---------------------------|-------|----------------|-------|
| A1 | `contribute/CONTRIBUTING/README.md` | Yes | Same | 75 | Substantial | Quick-start contributing guide. No frontmatter (plain Markdown). |
| A2 | `contribute/CONTRIBUTING/GIT-HOOKS.md` | Yes | Same | 45 | Substantial | Hook install/verify guide, references canonical policy sources. No frontmatter. |
| A3 | `tests/WHEN-TESTS-RUN.md` | **No** | `operations/tests/WHEN-TESTS-RUN.md` | 239 | Substantial | README links to `tests/WHEN-TESTS-RUN.md` (line 190) but file is at `operations/tests/WHEN-TESTS-RUN.md`. **Broken link.** |
| A4 | `tests/PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md` | **No** | `operations/tests/PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md` | 112 | Substantial | README links to `tests/PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md` (line 191) but file is at `operations/tests/PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md`. **Broken link.** |
| A5 | `tools/ai-rules/` (directory) | **No** | Does not exist | -- | -- | README line 223 says "AI assistant rules and safety: `tools/ai-rules/`" but directory does not exist anywhere in `tools/`. **Phantom reference.** |
| A6 | `v2/resources/documentation-guide/style-guide.mdx` | Yes | Same | 1122 | Substantial | Full style guide. No status frontmatter but has `lastVerified: 2026-03-17`. |
| A7 | `v2/resources/documentation-guide/component-library/` (directory) | Yes | Same | -- | Substantial (8 files) | Contains: `component-library.mdx`, `config.mdx`, `displays.mdx`, `elements.mdx`, `integrators.mdx`, `overview.mdx`, `scaffolding.mdx`, `wrappers.mdx`. |
| A8 | `v2/resources/documentation-guide/automations-workflows.mdx` | Yes | Same | 1040 | Substantial | Full automation/workflow guide. No status frontmatter but has `lastVerified: 2026-03-17`. |

---

## 3. Summary

### Canonical docs-guide files (24 entries)

- **All 24 exist** at the stated paths.
- **5 have `status: current`** with `lastVerified` dates: ownerless-governance, lpd-cli, component-layout-decisions, content-system, ui-system.
- **6 have `status: active`** (all generated catalogs): ui-templates, pages-catalog, components-catalog, scripts-catalog, workflows-catalog, templates-catalog.
- **13 have no `status` frontmatter field** at all: source-of-truth-guide, source-of-truth-policy, generated-artifact-and-hook-governance, v2-folder-governance, feature-map, architecture-map, quality-gates, audit-system-overview, skill-pipeline-map, cleanup-quarantine-policy, automations, data-integrations, ai-tools.
- **1 file is flagged as needing work**: `docs-guide/features/automations.mdx` (has `{/* TODO: VERIFY THIS FILE */}` and `{/* NEEDS WORK */}`).
- **0 files are stubs** (all have real content, even if some are short).
- Content depth ranges from 45 lines (templates-catalog) to 1192 lines (components-catalog).

### Additional referenced paths (8 entries)

- **5 exist** at stated paths: CONTRIBUTING/README.md, GIT-HOOKS.md, style-guide.mdx, component-library/ directory, automations-workflows.mdx.
- **2 exist but at wrong paths**: WHEN-TESTS-RUN.md and PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md are under `operations/tests/`, not `tests/`. **README links are broken.**
- **1 does not exist**: `tools/ai-rules/` directory. **README reference is phantom.**

### By the numbers

| Category | Count |
|----------|-------|
| Total files verified | 32 (24 + 8 additional) |
| Exist at stated path | 29 |
| Exist but wrong path in README | 2 |
| Do not exist at all | 1 |
| Have `status: current` | 5 |
| Have `status: active` (generated) | 6 |
| No status field | 21 |
| Flagged needing work | 1 |
| Stubs / empty | 0 |

---

## 4. Recommendations

### Fix broken README links (high priority)

1. **`tests/WHEN-TESTS-RUN.md`** -- Update README line 190 to `operations/tests/WHEN-TESTS-RUN.md`.
2. **`tests/PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md`** -- Update README line 191 to `operations/tests/PR-CI-TESTS-AND-SCRIPT-RUN-MATRIX.md`.
3. **`tools/ai-rules/`** -- Remove or replace the reference at README line 223. This directory does not exist. AI rules live in `.claude/CLAUDE.md`, `.github/copilot-instructions.md`, `.cursor/rules/`, `.windsurf/rules/`, and `docs-guide/policies/agent-governance-framework.mdx` (all of which are already listed on line 225-226).

### Add `status` frontmatter to the 13 files missing it (medium priority)

These 13 docs-guide files have no `status` field, making it impossible to programmatically assess freshness. Recommended action: add `status: current` and `lastVerified: <date>` after a human spot-check of each, or `status: draft` for those needing review.

Files needing `status`:
- `docs-guide/source-of-truth-guide.mdx`
- `docs-guide/policies/source-of-truth-policy.mdx`
- `docs-guide/policies/generated-artifact-and-hook-governance.mdx`
- `docs-guide/policies/v2-folder-governance.mdx`
- `docs-guide/features/feature-map.mdx`
- `docs-guide/features/architecture-map.mdx`
- `docs-guide/policies/quality-gates.mdx`
- `docs-guide/policies/audit-system-overview.mdx`
- `docs-guide/policies/skill-pipeline-map.mdx`
- `docs-guide/policies/cleanup-quarantine-policy.mdx`
- `docs-guide/features/automations.mdx` (should be `draft` given TODO flags)
- `docs-guide/features/data-integrations.mdx`
- `docs-guide/tooling/ai-tools.mdx`

### Resolve the TODO-flagged file (medium priority)

`docs-guide/features/automations.mdx` has explicit `{/* TODO: VERIFY THIS FILE */}` and `{/* NEEDS WORK */}` comments. It should either be verified and promoted to `status: current`, or marked `status: draft` in frontmatter so governance tooling catches it.

### All 24 canonical files should remain linked from README (low priority / no change needed)

All 24 files contain real, substantial content. None are stubs or empty. The table is accurate as a navigation index. The only quality concern is `automations.mdx`, but it still has 209 lines of real content and is worth linking -- just needs a verification pass.

### No files are too internal or stale to link

The generated catalogs (6 files) are machine-maintained and always fresh. The policy/feature/tooling docs (18 files) are all substantive. None should be removed from the README table.
