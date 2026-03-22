---
title: Documentation Governance — Execution Plan
status: active
owner: DOCUMENTATION
created: 2026-03-21
updated: 2026-03-22
---

# Documentation Governance — Execution Plan

> **System design reference**: [design-canonical.mdx](design-canonical.mdx) — system architecture, per-part ideal state, quality bars, outputs
> **Working folder**: `workspace/plan/active/DOCUMENTATION/`

The Steps below come from the design-canonical accordions. This plan extends them with parallel run paths, handoffs, and cross-plan dependencies.

**Every phase follows two mandatory rules:**
1. **READ FIRST** — Before starting any DESIGN, HUMAN REVIEW, or EXECUTION step, read: `designing/structure.md`, `design-canonical.mdx`, this plan's Decision Log, and any locked framework files referenced. No work starts until this is done.
2. **DOCUMENT DECISIONS** — At the end of every HUMAN REVIEW, write all decisions made to the Decision Log below — named, dated, with rationale. Decisions made in chat that are not written down do not exist.

---

## Immediate Next Action

`Frameworks/doc-item-model.md` written and approved. ① HUMAN REVIEW lock is cleared.

**Next:** ① EXECUTION begins. In parallel: ② HUMAN REVIEW and ④ HUMAN REVIEW can start.

| Track | First step | Blocked by |
|---|---|---|
| ① EXECUTION | Create `docs-guide/config/` · move JSON files · rename catalog files (D9) | Nothing — unblocked |
| ② HUMAN REVIEW | Review `designing/consumer-assignments.md` maintenance type per page | `doc-item-model.md` ✅ |
| ④ HUMAN REVIEW | Review consumer/concern/status assignment table | `doc-item-model.md` ✅ |

---

## Execution Sequence

```
D1 + D-CONCERN + D9 resolved
         │
         ▼
① HUMAN REVIEW lock → doc-item-model.md written
         │
         ├──────────────────────────────────────────┐
         ▼                                          ▼
① EXECUTION                              ② HUMAN REVIEW + ④ HUMAN REVIEW
(config/, renames, catalog skeleton,      (approve frontmatter assignments —
 concern nav, v2/internal/ overlaps)       can run in parallel with each other)
         │                                          │
         └──────────────┬───────────────────────────┘
                        ▼
              ② + ④ EXECUTION — coordinated single pass
              (apply all frontmatter fields to ~40 pages in one batch:
               maintenance + generator/validator + consumer + concern + status)
                        │
                        ▼
                ① + ② + ④ TESTING
                        │
              ┌─────────┴─────────┐
              ▼                   ▼
        ③ EXECUTION          ⑤ EXECUTION
   (validators + ownerless)   (blocked on ①②③④)
              │
              ▼
        ③ TESTING
              │
              ▼
        ⑤ EXECUTION
              │
              ▼
    ⑤ HUMAN REVIEW + ITERATION
```

**Parallel paths:**
- ② HUMAN REVIEW and ④ HUMAN REVIEW can run simultaneously (same assignment table, different fields)
- ② EXECUTION and ④ EXECUTION **must be coordinated** — both apply frontmatter to the same ~40 pages; run as one pass, not two separate passes
- ① TESTING, ② TESTING, ④ TESTING can run together once their respective executions complete

---

## ① One Canonical Location

**AUDIT** ✅
1. ✅ Scan all repo documentation locations and classify each file by docType/concern/format
2. ✅ Identify duplicate canonical files
3. ✅ List all orphaned files with no declared owner

**DESIGN** 🔄
1. ✅ Define `docType` enum and map all existing docs-guide files to it
2. ✅ Define `concern` enum — content / components / governance / ai
3. ✅ Map all existing docs-guide files to docType/concern/format classification
4. 🔄 Resolve D1: concern as file prefix vs sub-folder
5. 🔄 Resolve D-CONCERN: confirm `governance` as a valid concern value
6. 🔄 Resolve D9: confirm catalog file rename table

**HUMAN REVIEW** ❌ — blocked by D1 + D-CONCERN + D9
1. ❌ Confirm D1 decision
2. ❌ Confirm D-CONCERN decision
3. ❌ Confirm D9 rename table
4. ❌ Approve completed `Frameworks/doc-item-model.md`

**EXECUTION** 🔄
1. ✅ Write `Frameworks/doc-item-model.md` — frozen model contract
2. ✅ Create `docs-guide/config/` and move JSON files — merged at `40aeb990` (31 consumers updated; 5 files moved)
3. ❌ Rename catalog files to concern-prefix convention (per D9)
4. ❌ Build `governance-documentation-catalog.mdx` skeleton — one row per surface
5. ❌ Add concern navigation table to `source-of-truth-guide.mdx`
6. N/A `v2/internal/governance.mdx` — file does not exist; step closed
7. N/A `v2/internal/governance-pipeline.mdx` — file does not exist; step closed

**TESTING** ❌
1. ❌ Run duplicate-path check on `governance-documentation-catalog.mdx`
2. ❌ Verify all declared paths resolve to existing files
3. ❌ Verify `source-of-truth-guide.mdx` concern nav reaches correct file per concern

---

## ② Known Freshness

**DESIGN** ✅
1. ✅ Define `maintenance` enum: generated | hand-maintained | mixed
2. ✅ Define conditional fields: `generator:`, `validator:`, `lastVerified:`
3. ✅ Write full frontmatter examples per docType in `designing/structure.md` Part 3

**HUMAN REVIEW** ❌ — blocked by doc-item-model.md (①)
1. ❌ Review draft assignment table in `designing/consumer-assignments.md`
2. ❌ Approve maintenance type per page
3. ❌ Confirm generator/validator paths are correct or flag for ③

**EXECUTION** ❌ — coordinated with ④; blocked by HUMAN REVIEW
> Run as one batch pass with ④ — apply all frontmatter fields to the same ~40 pages together
1. ❌ Apply maintenance frontmatter to all `catalog/` pages
2. ❌ Apply to all `policies/` pages
3. ❌ Apply to all `frameworks/` pages
4. ❌ Apply to all `features/` pages
5. ❌ Apply to all `tooling/` pages
6. ❌ Apply to all `contributing/` pages
7. ❌ Write `validate-lpd-cli-freshness.js`

**TESTING** ❌
1. ❌ Run `docs-guide-sot.test.js --check` — verify 0 unknown-state pages
2. ❌ Simulate `lpd --help` change; verify freshness gate detects and warns

---

## ③ Owned and Repairable

**AUDIT** ✅
1. ✅ Identify unregistered surfaces: `.env.example`, adapter parity, required docs-guide files, `lpd-cli.mdx`, `governance-documentation-catalog.mdx`
2. ✅ Document enforcement gap per surface in `recommendations.md` R17–R19

**DESIGN** ✅
1. ✅ Specify `docs-guide-naming-convention.js`
2. ✅ Specify `validate-adapter-parity.js`
3. ✅ Specify `validate-workflow-secrets.js`

**EXECUTION** ❌ — blocked by ① + ②
> Each registration is drafted by AI, approved by human, then written to manifest — one batch per surface type
1. ❌ Write `docs-guide-naming-convention.js`
2. ❌ Write `validate-adapter-parity.js`
3. ❌ Write `validate-workflow-secrets.js`
4. ❌ Draft + approve + write ownerless registration: `.env.example`
5. ❌ Draft + approve + write ownerless registration: adapter parity
6. ❌ Draft + approve + write ownerless registration: required docs-guide files
7. ❌ Draft + approve + write ownerless registration: `lpd-cli.mdx`
8. ❌ Draft + approve + write ownerless registration: `governance-documentation-catalog.mdx`

**TESTING** ❌
1. ❌ Test `docs-guide-naming-convention.js` — pass on valid, fail on invalid
2. ❌ Test `validate-adapter-parity.js` — detect drift between AGENTS.md and adapter files
3. ❌ Test `validate-workflow-secrets.js` — detect undeclared secrets in workflows
4. ❌ Run `validate-ownerless-surfaces.js` — confirm zero unregistered surfaces
5. ❌ Confirm each of the 5 new repair commands runs without error

---

## ④ Machine-Readable

**DESIGN** ✅
1. ✅ Define `consumer` enum: human | agent | automation
2. ✅ Define `concern` enum: content | components | governance | ai
3. ✅ Define `status` enum: active | draft | deprecated
4. ✅ Draft per-page consumer + concern assignments in `designing/consumer-assignments.md`

**HUMAN REVIEW** ❌ — blocked by doc-item-model.md (①); can run in parallel with ② HUMAN REVIEW
1. ❌ Review consumer/concern/status assignment table
2. ❌ Flag any misclassified pages
3. ❌ Approve final table

**EXECUTION** ❌ — coordinated with ②; blocked by HUMAN REVIEW
> Run as one batch pass with ② — apply all frontmatter fields to the same ~40 pages together
1. ❌ Apply consumer + concern + status to all `catalog/` pages (with ② maintenance fields)
2. ❌ Apply to all `policies/` pages
3. ❌ Apply to all `frameworks/` pages
4. ❌ Apply to all `features/` pages
5. ❌ Apply to all `tooling/` pages
6. ❌ Apply to all `contributing/` pages
7. ❌ Populate `governance-documentation-catalog.mdx` — all model fields per surface
8. ❌ Update `AGENTS.md` with concern navigation rules
9. ❌ Update `.claude/CLAUDE.md` and `.cursor/rules/` adapter files with concern navigation

**TESTING** ❌
1. ❌ Agent test: "canonical source for component governance?" → correct file in ≤1 hop
2. ❌ Agent test: "canonical source for content governance?" → correct file in ≤1 hop
3. ❌ Agent test: "canonical source for scripts?" → correct file in ≤1 hop
4. ❌ Agent test: "canonical source for AI governance?" → correct file in ≤1 hop
5. ❌ Script: parse catalog, filter by `consumer: agent`, verify correct rows returned

---

## ⑤ Self-Describing

**DESIGN** ✅
1. ✅ Define content spec for `documentation-governance-policy.mdx`
2. ✅ List required updates to `source-of-truth-policy.mdx`
3. ✅ List required updates to `source-of-truth-guide.mdx`

**EXECUTION** ❌ — blocked by ①②③④
1. ❌ Draft `documentation-governance-policy.mdx`
2. ❌ Update `source-of-truth-policy.mdx` — add documentation governance as canonical boundary; update Required Files list
3. ❌ Update `source-of-truth-guide.mdx` — add catalog regen commands + concern nav + adapter parity check command

**HUMAN REVIEW** ❌
1. ❌ Read `documentation-governance-policy.mdx` as a new contributor — can you reproduce the model?
2. ❌ Confirm `source-of-truth-guide.mdx` is the complete operational entry point
3. ❌ Lock and mark plan complete

**ITERATION** ❌
1. ❌ Agent test: navigate from policy doc to component governance file (≤2 hops)
2. ❌ Agent test: navigate from policy doc to content governance file (≤2 hops)
3. ❌ Agent test: navigate from policy doc to scripts governance file (≤2 hops)
4. ❌ Agent test: navigate from policy doc to AI governance file (≤2 hops)
5. ❌ Update metadata/navigation aids where any agent test failed
6. ❌ Re-run tests until all 4 concerns pass in ≤2 hops

---

## Cross-Plan Handoffs

| Handoff to | What | When |
|---|---|---|
| **REPO-STRUCTURE-GOV** | v2/internal/ overlap decisions resolved (governance.mdx, governance-pipeline.mdx) | After ① EXECUTION |
| **REPO-STRUCTURE-GOV** | contribute/ → docs-guide/contributing/ migration dependencies confirmed | Before ③ EXECUTION |
| **SCRIPT-GOVERNANCE** | Generator banner update list (new catalog paths after D9 renames) | After ① EXECUTION |
| **COMPONENT-GOVERNANCE** | Component library public pages decision (v2/resources/documentation-guide/) | After ⑤ HUMAN REVIEW |
| **AI-TOOLS** | Adapter files updated with concern navigation rules | After ④ EXECUTION |
| **CANONICAL-TRUTH-GUIDES** | Absorb or close — scope now covered by this plan | After ⑤ HUMAN REVIEW |

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
| 2026-03-22 | D9 resolved: catalog rename table confirmed — see table in ① DESIGN | `ui` is a content sub-area per structure.md; documentation-catalog is governance concern |
