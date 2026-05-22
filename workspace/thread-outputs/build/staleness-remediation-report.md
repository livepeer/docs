# Staleness Remediation - Completion Report

**Date**: 2026-03-26
**Scope**: SCRIPT-GOVERNANCE, COMPONENT-GOVERNANCE, AI-TOOLS-GOVERNANCE, index.md
**Handoff source**: `workspace/thread-outputs/research/staleness-remediation-handoff.md`

---

## Framework 1: SCRIPT-GOVERNANCE

**File**: `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md`

| # | Fix | Detail |
|---|---|---|
| 1 | Stale root path (15 occurrences) | Replaced all `tools/scripts/` with `operations/scripts/` across the entire file. Verified: 0 remaining `tools/scripts/` references. |
| 2 | Missing niche: `generators/content/data` | Added `data/` to generators/content niche table. Confirmed folder exists at `operations/scripts/generators/content/data/`. |
| 3 | Missing niche: `audits/content/data` | Added `data/` to audits/content niche table. Confirmed folder exists at `operations/scripts/audits/content/data/`. |
| 4 | Stale niche: `generators/content/reconciliation` | Removed `reconciliation/` from generators/content niche table. Confirmed folder does NOT exist. Note: `reconciliation/` correctly remains in audits/content (that folder exists at `operations/scripts/audits/content/reconciliation/`). |
| 5 | Undocumented folder: `validators/governance/ai` | Added `ai/` to validators/governance niche table. Confirmed folder exists with `check-companion-manifest.js`. |
| 6 | Undocumented folder: `validators/governance/repo` | Added `repo/` to validators/governance niche table. Confirmed folder exists with `validate-lpd-paths.js`. |
| 7 | Undocumented folder: `remediators/governance/scripts` | Added `scripts/` to remediators/governance niche table. Confirmed folder exists with `repair-script-inventory.js`. |
| 8 | Dual archive structure | Added `archive/` row to the non-type folders table (with sub-folders `deprecated/`, `fixtures/`, `legacy/` and D2 consolidation note). Added a note to the x-archive policy section documenting the coexistence of both `archive/` and `x-archive/`. |

---

## Framework 2: COMPONENT-GOVERNANCE

**File**: `workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md`

| # | Fix | Detail |
|---|---|---|
| 1 | Component count: 118 to 45 | Updated the Component Counts table. Old: 118 total (30/30/17/20/20/1). New: 45 total (12/17/5/3/7/1). Sub-niche count updated from 30 to 36. Verified against `find snippets/components -name "*.jsx" -o -name "*.tsx" | wc -l` = 45. |
| 2 | Badges sub-niche undocumented | Added `badges/` with `Badges.jsx` to the wrappers section of the folder tree. Added `badges` to the `@subniche` allowed values list. Confirmed folder exists at `snippets/components/wrappers/badges/Badges.jsx`. |
| 3 | Examples folders undocumented | Added `examples/` entries to all five main categories in the folder tree (elements, wrappers, displays, scaffolding, integrators). Confirmed all five exist via `find snippets/components -type d -name "examples"`. |
| 4 | Empty page-containers/ | Updated the tree entry from listing `RefCardContainer.jsx` (does not exist) to marking as `(empty - placeholder)`. Confirmed folder is empty via `ls`. |
| 5 | State accuracy note | Added accuracy blockquote at file top noting the 2026-03-26 update, that component counts and category structure are verified, and that individual component entries within sub-niches in the tree are aspirational. |

---

## Framework 3: AI-TOOLS-GOVERNANCE

### completion-report.md
`workspace/plan/active/AI-TOOLS-GOVERNANCE/completion-report.md`

| # | Fix | Detail |
|---|---|---|
| 1 | R4 stale `invoke_when` reference | Struck through R4 heading, marked as RESOLVED with 2026-03-26 date. Added blockquote explaining that `invoke_when` was removed during agentskills.io alignment and `content-pipeline` is already in SKILL.md v1.4. |
| 2 | Phase 4 table row 4.3 | Updated description to note that `invoke_when` was subsequently removed and replaced by `metadata:` block. |

### client-side-component-audit.md
`workspace/plan/active/AI-TOOLS-GOVERNANCE/client-side-component-audit.md`

| # | Fix | Detail |
|---|---|---|
| 1 | Placement flag | Added blockquote at top of file noting the audit covers component concerns and may belong in COMPONENT-GOVERNANCE/. Flagged for Alison to decide. |

### .github/AGENTS.md

| # | Fix | Detail |
|---|---|---|
| 1 | Fictional checkpoint branch system | Added MDX comment block before the checkpoint section explaining the system is aspirational and not yet implemented. Added inline annotation to the "Automatic Checkpoints" bullet and the "Recovery" bullet noting checkpoint branches are not auto-created. |

### generate-ai-tools-inventory.js (validateFullRegistry)

| # | Fix | Detail |
|---|---|---|
| - | No action taken | The `validateFullRegistry` import does not exist anywhere in the current codebase (searched `ai-tools/` and `operations/` recursively). The broken import was either already fixed or the file was refactored. No target to act on. |

---

## Framework 4: index.md

**File**: `workspace/plan/active/index.md`

| # | Fix | Detail |
|---|---|---|
| 1 | Stale path `tasks/plan/active/` | Replaced with `workspace/plan/active/` in the scope line. Verified: 0 remaining `tasks/plan/active/` path references. |
| 2 | Missing DOCUMENTATION entry | Added full entry for `DOCUMENTATION/` folder with plan.md, design-canonical.mdx, audit.md, research.md, and master-status.mdx file table. Confirmed folder exists with substantial content. |
| 3 | Component count 118 to 45 | Updated "118 components" to "45 components" in the COMPONENT-GOVERNANCE summary paragraph. Verified: 0 remaining "118 components" in index.md. |
| 4 | Cross-plan dependency table | Added "Cross-Plan Dependencies" section at end of file with 5 dependency rows: AUTOMATIONS blocked on SCRIPT-GOVERNANCE T15c, shared JSDoc standards, AI-TOOLS Phase 1 path dependency (complete), client-side audit placement, and CONTENT-WRITING to DOCUMENTATION dependency. |
| 5 | Updated date | Changed from 2026-03-20 to 2026-03-26. |

---

## Final Cross-Framework Verification

| Check | Result |
|---|---|
| `grep "tools/scripts/" script-framework.md` | 0 matches |
| `grep "118 components" index.md` | 0 matches |
| `grep "118 components" component-framework-canonical.md` | 0 matches |
| `grep "tasks/plan/active/" index.md` | 0 matches |
| `invoke_when` in completion-report.md R4 | Marked RESOLVED with explanation |
| Checkpoint branch annotation in AGENTS.md | Present (aspirational note + inline annotations) |
| Client-side audit placement flag | Present (blockquote at top) |

---

## Notes

- **"118 components" in other files**: The string "118 components" still appears in 9 other files (master-summary.mdx, master-status.mdx, changelog.md, etc.). These files were outside the remediation scope. They refer to the historical count of governed component *exports* (118 exports from 44 JSX files), which is a different metric from the 45 JSX/TSX *files* counted by `find`. These should be reviewed separately to determine whether they need the same update.
- **AUTOMATIONS-RESTRUCTURE**: Not touched per handoff instructions.
- **`dep-COPYWRITING FRAMEWORK/`** in index.md: The deprecated plan references `tools/scripts/audit-v2-usefulness.js` in the Usefulness Scoring entry (line 256). This path may also be stale but was not in scope for this remediation.
