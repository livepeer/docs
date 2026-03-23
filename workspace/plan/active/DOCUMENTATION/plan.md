---
title: Documentation Governance — Execution Plan
status: active
owner: DOCUMENTATION
created: 2026-03-21
updated: 2026-03-23
---

# Documentation Governance — Execution Plan

> **System design reference**: [design-canonical.mdx](design-canonical.mdx) — system architecture, per-part ideal state, quality bars, outputs
> **Working folder**: `workspace/plan/active/DOCUMENTATION/`
> **Audit synthesis**: [audits/master-audit.md](audits/master-audit.md) — current state across all 10 concerns
> **Pipeline recommendations**: [recommendations-pipeline.md](recommendations-pipeline.md) — CI/automation gaps and fixes

---

## Current State Summary (2026-03-23)

The model and design phases are complete. The 10-concern audit is complete. Research and recommendations are current. Execution of Parts ②–⑤ is blocked pending human review approval of the consumer/maintenance assignment table.

| System Part | Status | Next action |
|---|---|---|
| ① One Canonical Location | 🔄 In progress | ① EXECUTION steps 3–5 pending (catalog renames, catalog skeleton, concern nav) |
| ② Known Freshness | ❌ Pending HUMAN REVIEW | Review `designing/consumer-assignments.md` — approve maintenance type per page |
| ③ Owned and Repairable | ❌ Not started | Blocked by ①② |
| ④ Machine-Readable | ❌ Pending HUMAN REVIEW | Review consumer/concern/status assignment table in `designing/consumer-assignments.md` |
| ⑤ Self-Describing | ❌ Not started | Blocked by ①②③④ |

---

## Immediate Next Action

Two HUMAN REVIEW gates can run in parallel now:

| Track | Task | File to review |
|---|---|---|
| ② HUMAN REVIEW | Approve maintenance type per page | `designing/consumer-assignments.md` |
| ④ HUMAN REVIEW | Approve consumer + concern + status assignments | `designing/consumer-assignments.md` |

While reviews are in progress, ① EXECUTION steps 3–5 are unblocked and can proceed.

---

## Phase 1: Model and Design — COMPLETE

All design decisions resolved and locked in `Frameworks/doc-item-model.md`.

| Decision | Outcome | Logged |
|---|---|---|
| D1: concern as file prefix vs sub-folder | Option B: concern as sub-folder within type folders | 2026-03-22 |
| D-CONCERN: `governance` as a valid concern | Collapsed to 4 values: content / components / governance / ai | 2026-03-22 |
| D9: catalog file rename table | Confirmed — see `Frameworks/doc-item-model.md` | 2026-03-22 |
| D8: JSON config files home | `docs-guide/config/` | Executed: 5 files moved, 31 consumers updated (commit `40aeb990`) |

---

## Phase 2: Immediate Fixes — COMPLETE

All 5 immediate fixes executed before model was frozen.

| Fix | Status |
|---|---|
| I1: Fix wrong filename in `source-of-truth-policy.mdx` (`overview.mdx` → `source-of-truth-guide.mdx`) | ✅ Done |
| I2: Fix stale `tasks/` path in `docs-guide/docs-glossary.md` | ✅ Done |
| I3: Re-run `components-catalog.mdx` generator | ✅ Done |
| I4: Delete `v2/internal/docs-philosophy.mdx` duplicate (merged unique content first) | ✅ Done |
| I5: Add scope cross-links to all three glossary files | ✅ Done |

---

## Phase 3 / Part ① EXECUTION — In Progress

**Blocked by**: Nothing — unblocked as of 2026-03-22.

Remaining steps:

| Step | Status | Notes |
|---|---|---|
| 1. Write `Frameworks/doc-item-model.md` | ✅ Done | Frozen contract |
| 2. Create `docs-guide/config/` and move JSON files | ✅ Done | Commit `40aeb990` |
| 3. Rename catalog files to concern-prefix convention (per D9) | ❌ Pending | D9 table in `doc-item-model.md` |
| 4. Build `governance-documentation-catalog.mdx` skeleton | ❌ Pending | One row per surface |
| 5. Add concern navigation table to `source-of-truth-guide.mdx` | ❌ Pending | For all 4 concerns |
| 6. `v2/internal/governance.mdx` | N/A | File does not exist |
| 7. `v2/internal/governance-pipeline.mdx` | N/A | File does not exist |

**Testing (after step 5):**
- Run duplicate-path check on `governance-documentation-catalog.mdx`
- Verify all declared paths resolve to existing files
- Verify `source-of-truth-guide.mdx` concern nav reaches correct file per concern

---

## Phase 3 / Parts ② + ④ EXECUTION — Blocked by HUMAN REVIEW

**These two execution passes are coordinated — all frontmatter fields applied in one batch pass per page (not two separate passes).**

**Blocked by**: ② HUMAN REVIEW + ④ HUMAN REVIEW (run in parallel).

Once both reviews approve the assignment table in `designing/consumer-assignments.md`, execute in one coordinated batch:

- Apply `maintenance` + `generator`/`validator`/`lastVerified` + `consumer` + `concern` + `status` to all ~40 `docs-guide/**/*.mdx` pages
- Populate `governance-documentation-catalog.mdx` with all model fields per surface
- Update `AGENTS.md` with concern navigation rules
- Update `.claude/CLAUDE.md` and `.cursor/rules/` adapter files with concern navigation
- Write `validate-lpd-cli-freshness.js`

---

## Phase 4 / Part ③ EXECUTION — Blocked by ①②

Write three new validators and register five new ownerless surfaces:

| Script | Purpose |
|---|---|
| `docs-guide-naming-convention.js` | Concern prefix, no `-index.mdx`, frontmatter fields present |
| `validate-adapter-parity.js` | AGENTS.md critical rules vs each adapter file |
| `validate-workflow-secrets.js` | `.github/workflows/*.yml` secrets vs `.env.example` |

Five new ownerless surface entries: `.env.example`, adapter parity, required docs-guide files, `lpd-cli.mdx`, `governance-documentation-catalog.mdx`.

---

## Phase 5 / Part ⑤ EXECUTION — Blocked by ①②③④

Write `docs-guide/policies/documentation-governance-policy.mdx`. Update `source-of-truth-policy.mdx` and `source-of-truth-guide.mdx`. Lock the plan complete.

---

## Pipeline Recommendations (from master audit + research)

The full prioritised remediation plan is in `audits/master-audit.md` (P0–P6) and `recommendations-pipeline.md` (R1–R12). Critical path:

```
R1 (data correctness) → R8 (dispatch layer) → R9 (governance validators) → R10 (config schemas)
```

Items that can run in parallel with the above: R6 (freshness contracts), R7 (taxonomy enforcement), R11 (Mintlify Workflows), R12 (contributor guides).

**P0 items (fix immediately, no sprint required):**
- Fix stale banner path in `generate-component-docs.js` → triggers fix for 32 v2 pages
- Fix stale paths in `generated-artifacts.json` (4+ entries)
- Fix `ai-tools.mdx` missing frontmatter opening delimiter
- Fix `dev-tools.mdx` stale Tip callout (Python path + draft comment block)

---

## Cross-Plan Handoffs

| Handoff to | What | When |
|---|---|---|
| **REPO-STRUCTURE-GOV** | `v2/internal/` overlap decisions resolved | After ① EXECUTION |
| **REPO-STRUCTURE-GOV** | `contribute/` → `docs-guide/contributing/` migration dependencies | Before ③ EXECUTION |
| **SCRIPT-GOVERNANCE** | Generator banner update list (new catalog paths after D9 renames) | After ① EXECUTION |
| **COMPONENT-GOVERNANCE** | Component library public pages decision (`v2/resources/documentation-guide/`) | After ⑤ HUMAN REVIEW |
| **AI-TOOLS** | Adapter files updated with concern navigation rules | After ④ EXECUTION |
| **CANONICAL-TRUTH-GUIDES** | Absorb — scope covered by this plan | After ⑤ HUMAN REVIEW |

---

## Open Questions

| # | Question | Blocks |
|---|---|---|
| Q1 | Does `ai-features.mdx` get populated or collapsed into `ai-tools.mdx`? | ① EXECUTION step 6 |
| Q2 | Should `v2/internal/` governance pages be scope-declared or converted to summary+link? | ① EXECUTION steps 6–7 |
| Q3 | Should `tools/notion/.env.example` be merged into root `.env.example`? | ③ EXECUTION step 4 |
| Q4 | Should the documentation-catalog be generated (script) or hand-maintained + freshness gate? | ① EXECUTION step 4 |
| Q5 | Should `docs-guide/docs-glossary.md` become `.mdx` (Mintlify-served) or stay `.md`? | ② EXECUTION |

---

## Decision Log

| Date | Decision | Made by |
|---|---|---|
| 2026-03-21 | Phase 0 (research, audit, recommendations) complete before co-creation | Human |
| 2026-03-21 | Execution gate — no execution before model is approved | Human |
| 2026-03-21 | Ownerless governance model is the template for all documentation surfaces | From OSS plan |
| 2026-03-21 | SCRIPT-GOVERNANCE three-tier `<type>/<concern>` is the structural framework for inventory | Derived from audit |
| 2026-03-22 | concern enum collapsed to 4 values: content / components / governance / ai | Derived from script taxonomy — homogeneity over granularity |
| 2026-03-22 | ② + ④ frontmatter applied in one coordinated batch pass — not separately | Same ~40 files; two passes would double the risk of conflicts |
| 2026-03-22 | Phase 2 immediate fixes (I1–I5) completed before model was frozen | Low-risk, no coordination needed; unblocked immediately |
| 2026-03-22 | D1 resolved: Option B — concern as sub-folder within type folders | Better nav grouping; naming review flagged and handed to scripts thread |
| 2026-03-22 | D-CONCERN resolved: Option A — `governance` is a valid concern value (4 values) | Flagged for later review as execution may surface issues |
| 2026-03-22 | D9 resolved: catalog rename table confirmed — see table in `Frameworks/doc-item-model.md` | `ui` is a content sub-area per structure.md; documentation-catalog is governance concern |
| 2026-03-23 | 10-concern audit complete — all findings in `audits/` + master synthesis | Audit phase |
| 2026-03-23 | `recommendations-pipeline.md` written — CI/pipeline recommendations current | Research phase |
| 2026-03-23 | `research-best-practices.md` written — Mintlify platform + docs CI/CD best practices | Research phase |
