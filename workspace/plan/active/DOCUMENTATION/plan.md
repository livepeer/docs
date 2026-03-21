---
title: Documentation Governance — Execution Plan
status: active
owner: DOCUMENTATION
created: 2026-03-21
---

# Documentation Governance — Execution Plan

> **Status**: Phase 1 pending (model co-creation gate — human approval required before any execution)
> **Working folder**: `workspace/plan/active/DOCUMENTATION/`
> **PRD**: [prd.md](./prd.md) — aims, outcomes, co-working rules

---

## Workflow Protocol

Every phase follows two rules:

1. ⏸ **CHECKPOINT** — Each phase gate pauses for human review. Nothing proceeds without explicit approval.
2. 🔄 **INTERACTIVE** — Any task involving definition, classification, or judgment is co-authored. AI drafts, human refines.

---

## Phase Overview

| Phase | Name | Status | Gate |
|---|---|---|---|
| 0 | Foundations | ✅ Complete | PRD + audit written |
| 1 | Model Co-Creation | ⏸ Pending human | Human approves model fields + enums |
| 2 | Immediate Fixes | 🔒 Blocked on Phase 1 | Phase 1 approval |
| 3 | Inventory Application | 🔒 Blocked on Phase 1 | Phase 1 approval + model frozen |
| 4 | Structural Remediation | 🔒 Blocked on Phase 3 | Phase 3 complete |
| 5 | Validator + Ownerless Coverage | 🔒 Blocked on Phase 3 | Phase 3 complete |
| 6 | Public Surface Sync | 🔒 Blocked on Phase 4 | Phase 4 + REPO Phase 1.3 complete |
| 7 | Governance Doc Output | 🔒 Blocked on Phase 5 | Phase 5 complete |
| 8 | Handoffs + Plan Closure | 🔒 Blocked on Phase 7 | Phase 7 complete |

---

## Phase 0 — Foundations ✅ Complete

All research, audit, and scaffolding work done in this thread.

- [x] **0.1** Write `context.md` — working context, aim, key facts
- [x] **0.2** Review all active plans (REPO, SCRIPT, COMPONENT, CONTENT-WRITING, AI-TOOLS, CANONICAL-TRUTH-GUIDES, OSS-OWNERLESS, TOOLING)
- [x] **0.3** Write `research.md` — plan review summaries + docs-guide/repo scan
- [x] **0.4** Write `audit.md` — full documentation audit: locations, duplicates, gaps, type×concern inventory
- [x] **0.5** Write `recommendations.md` — prioritised action list with type/concern/audience inventory
- [x] **0.6** Write `prd.md` — product requirements, output model, co-working rules
- [x] **0.7** Write `plan.md` — this file

---

## Phase 1 — Model Co-Creation ⏸ Pending

> **Gate**: Human must approve the model fields and enums before anything executes.
> **Output**: Frozen `Frameworks/doc-item-model.md` — the contract for all downstream work.

This phase is **entirely interactive**. AI drafts, human refines and approves.

### What we're defining

The core documentation item model:

```
canonical source  →  single authoritative file path
audience          →  human | agent | both
maintenance       →  generated | hand-maintained | mixed
validator         →  script/CI that enforces currency
repair            →  deterministic repair command
ownerless         →  registered in ownerless-governance-surfaces.json
```

### Tasks

- [ ] **1.1** 🔄 Co-define `audience` enum values and their precise meanings
  - `human`: contributor-facing only — not read by agents in operational context
  - `agent`: read by AI agents for operational/governance decisions — humans may also read
  - `both`: intentionally serves both audiences; must be legible to both
  - ⏸ CHECKPOINT: human approves enum + edge cases

- [ ] **1.2** 🔄 Co-define `maintenance` enum values and rules per value
  - `generated`: produced by a script; do not edit directly; banner required
  - `hand-maintained`: written by humans; freshness gate required
  - `mixed`: partly generated sections + hand-maintained sections; both rules apply
  - ⏸ CHECKPOINT: human approves

- [ ] **1.3** 🔄 Co-define what counts as a valid `validator` for a hand-maintained file
  - Option A: Structural freshness (file exists, non-empty, has required frontmatter fields)
  - Option B: Content freshness (linked canonical source has changed → flag for review)
  - Option C: Test-based (specific assertions about the file's content)
  - Minimum acceptable: Option A; ideal: Option B where source relationship is clear
  - ⏸ CHECKPOINT: human chooses minimum validator standard

- [ ] **1.4** 🔄 Co-define `repair` path requirements
  - For generated files: must be a single runnable command
  - For hand-maintained files: must be a clear instruction pointing to the correct source to read and update from
  - ⏸ CHECKPOINT: human approves repair path standard

- [ ] **1.5** 🔄 Co-define the `ownerless` registration requirement
  - All new documentation surfaces created by this plan go into the manifest
  - Existing documentation surfaces: register in phases (Phase 5 does bulk registration)
  - ⏸ CHECKPOINT: human approves registration scope

- [ ] **1.6** Write `Frameworks/doc-item-model.md` with all agreed definitions
  - ⏸ FINAL GATE: human approves before Phase 2 starts

---

## Phase 2 — Immediate Fixes

> **Prerequisite**: Phase 1 approved.
> **Scope**: Fixes that require no coordination with other plans. Safe, targeted, reversible.
> **Note**: These are audit items I1–I5 from `recommendations.md`.

- [ ] **2.1** Fix wrong filename in `docs-guide/policies/source-of-truth-policy.mdx`
  - Change `docs-guide/overview.mdx` reference → `docs-guide/source-of-truth-guide.mdx`
  - ⏸ CHECKPOINT

- [ ] **2.2** Fix stale `tasks/` path in `docs-guide/docs-glossary.md`
  - Change `tasks/plan/active/COMPONENT-GOVERNANCE/structure.md` → `workspace/plan/active/...`
  - ⏸ CHECKPOINT

- [ ] **2.3** Re-run `components-catalog.mdx` generator
  - Run: `node tools/scripts/generators/governance/catalogs/generate-docs-guide-components-index.js --write`
  - Verify: no `undefined` category rows; banner path correct
  - ⏸ CHECKPOINT

- [ ] **2.4** Resolve `v2/internal/docs-philosophy.mdx` duplicate
  - Confirm `documentation-overview.mdx` imports from `overview/docs-philosophy.mdx`
  - Add redirect comment or deletion — human to decide
  - ⏸ CHECKPOINT: human decides delete vs. redirect

- [ ] **2.5** Add scope notes + cross-links to all three glossary files
  - `docs-guide/docs-glossary.md` — add note: scope is internal contributor/agent terms; link to v2 glossary
  - `v2/resources/livepeer-glossary.mdx` — add note: scope is protocol/video/AI/web3; link to docs-glossary for repo terms
  - `v2/resources/resources/compendium/glossary.mdx` — clarify scope vs. livepeer-glossary
  - ⏸ CHECKPOINT

---

## Phase 3 — Inventory Application

> **Prerequisite**: Phase 1 model approved + frozen.
> **Scope**: Apply the model fields to all docs-guide pages and all documentation surfaces across the repo.
> **Output**: Every docs-guide page has `audience` + `maintenance` frontmatter. Full `documentation-catalog.mdx` drafted.

### 3A — Frontmatter rollout (docs-guide pages)

- [ ] **3A.1** Draft `audience` + `maintenance` field assignments for all ~40 docs-guide pages
  - Present as a review table for human approval before touching any files
  - ⏸ CHECKPOINT: human approves field assignments

- [ ] **3A.2** Apply approved frontmatter to all `docs-guide/catalog/` pages (generated — add to template, not manually)
- [ ] **3A.3** Apply approved frontmatter to all `docs-guide/policies/` pages
- [ ] **3A.4** Apply approved frontmatter to all `docs-guide/frameworks/` pages
- [ ] **3A.5** Apply approved frontmatter to all `docs-guide/features/` pages
- [ ] **3A.6** Apply approved frontmatter to all `docs-guide/tooling/` pages
- [ ] **3A.7** Apply approved frontmatter to all `docs-guide/contributing/` pages
  - ⏸ CHECKPOINT: verify all pages updated

### 3B — Documentation surfaces inventory

- [ ] **3B.1** Draft full `documentation-catalog.mdx` — every documentation surface in the repo with model fields
  - Format: one row per item; columns = canonical, audience, maintenance, validator, repair, ownerless
  - ⏸ CHECKPOINT: human reviews for completeness

- [ ] **3B.2** Identify all surfaces that are `ownerless: false` — these are Phase 5 targets
- [ ] **3B.3** Identify all surfaces with `validator: none` — these are Phase 5 targets

---

## Phase 4 — Structural Remediation

> **Prerequisite**: Phase 3 inventory complete; human approval per item.
> **Scope**: Content consolidation, duplicate removal, missing file creation. Coordinated with other plans.
> **Gate per item**: Each structural change requires human approval.

### 4A — Missing required files

- [ ] **4A.1** Populate `docs-guide/features/ai-features.mdx` OR remove it from the required-file list
  - Decision: does `ai-features.mdx` cover "what AI features exist" and `ai-tools.mdx` covers "how to use them"? Or collapse to one?
  - ⏸ CHECKPOINT: human decides

- [ ] **4A.2** Write `docs-guide/policies/documentation-governance-policy.mdx`
  - Output of this entire plan — written last, after all decisions are made
  - Content: the governance model, the inventory pipeline, update rules, validator requirements
  - ⏸ CHECKPOINT

### 4B — Contributing consolidation (coordinate with REPO Phase 1.3)

- [ ] **4B.1** Coordinate with REPO-STRUCTURE-GOV: confirm Phase 1.3 timeline
- [ ] **4B.2** Once `contribute/` moves: update all inbound links, verify `docs-guide/contributing/` is complete
- [ ] **4B.3** Add `.env.example` reference to `docs-guide/contributing/contributing.mdx` and `AGENTS.md`
  - ⏸ CHECKPOINT after Phase 1.3 merge

### 4C — Duplicate / overlap resolution

- [ ] **4C.1** Resolve AI governance overlap: `v2/internal/overview/governance.mdx` vs `docs-guide/policies/agent-governance-framework.mdx`
  - Options: (a) `v2/internal/` becomes a summary+link to docs-guide; (b) scope declared (v2/internal = narrative; docs-guide = operational)
  - ⏸ CHECKPOINT: human decides

- [ ] **4C.2** Resolve governance pipeline overlap: `v2/internal/overview/governance-pipeline.mdx`
  - ⏸ CHECKPOINT

- [ ] **4C.3** Verify `docs-guide/component-registry.json` vs `tools/vscode/components/component-registry.json` sync (REPO 2E.3)
  - ⏸ CHECKPOINT: report finding to REPO plan

### 4D — Secrets documentation

- [ ] **4D.1** Add `.env.example` entry in the documentation catalog
- [ ] **4D.2** Add cross-reference in contributing guide (4B.3)
- [ ] **4D.3** Decide: should `tools/notion/.env.example` be merged into root `.env.example` with a section header, or stay separate with a cross-link?
  - ⏸ CHECKPOINT: human decides

---

## Phase 5 — Validator + Ownerless Coverage

> **Prerequisite**: Phase 3 inventory complete.
> **Scope**: Register documentation surfaces in ownerless manifest; create missing validators.
> **This phase is where the model becomes enforced.**

### 5A — Ownerless surface registrations

- [ ] **5A.1** Register `.env.example` as an ownerless surface (R17 from recommendations)
- [ ] **5A.2** Register AI adapter file parity as an ownerless surface (R18)
- [ ] **5A.3** Register all required hand-maintained docs-guide files from source-of-truth-policy (R19)
- [ ] **5A.4** Register `docs-guide/tooling/lpd-cli.mdx` with freshness gate requirement
  - ⏸ CHECKPOINT after each registration batch

### 5B — Validator creation

- [ ] **5B.1** Write docs-guide naming convention validator (extends `docs-guide-sot.test.js`)
  - Checks: suffix patterns, no `-index.mdx`, no 0-byte files at nav paths, audience+maintenance fields present
- [ ] **5B.2** Write adapter file parity check script
  - Input: AGENTS.md critical rules list; checks each adapter file
- [ ] **5B.3** Write workflow-to-secrets mapping validator (R23)
  - Input: `.github/workflows/*.yml`; output: secrets not in `.env.example`
  - ⏸ CHECKPOINT after each validator

### 5C — Freshness gates

- [ ] **5C.1** Add `lpd-cli.mdx` freshness gate (R10) — tied to `lpd --help` command surface
- [ ] **5C.2** Add ownerless manifest self-check: verify all declared paths exist
  - ⏸ CHECKPOINT

---

## Phase 6 — Public Surface Sync

> **Prerequisite**: Phase 4 complete; REPO Phase 1.3 merged.
> **Scope**: Ensure `v2/resources/documentation-guide/` public pages are correctly positioned vs `docs-guide/`.

- [ ] **6.1** Audit all 18 pages in `v2/resources/documentation-guide/` against docs-guide counterparts
  - For each: is the relationship clear? Is it summarising, duplicating, or providing genuine public detail?
  - ⏸ CHECKPOINT: human reviews audit table

- [ ] **6.2** For each page with an unclear relationship: propose one of three actions:
  - (a) Add explicit cross-reference and scope note
  - (b) Replace with a summary+link to docs-guide canonical
  - (c) Confirm it is a genuine public-audience page with different content (document why)
  - ⏸ CHECKPOINT: human approves per-page decisions

- [ ] **6.3** Decide whether to create a generator for `component-library/*.mdx` public pages (R11)
  - ⏸ CHECKPOINT: human decides on automation vs. hand-maintained

---

## Phase 7 — Governance Doc Output

> **Prerequisite**: Phases 4 + 5 complete.
> **Output**: The canonical governance doc that makes this plan's decisions permanent.

- [ ] **7.1** Write `docs-guide/policies/documentation-governance-policy.mdx`
  - Content: documentation item model, audience/maintenance enums, validator requirements, ownerless requirement, update rules
  - ⏸ CHECKPOINT: human reviews

- [ ] **7.2** Update `docs-guide/policies/source-of-truth-policy.mdx`
  - Add documentation governance as a canonical boundary
  - Update Required Files list (post Phase 4A)
  - ⏸ CHECKPOINT

- [ ] **7.3** Update `docs-guide/source-of-truth-guide.mdx` Update Rules
  - Add documentation-catalog regeneration command
  - Add adapter parity check command
  - ⏸ CHECKPOINT

- [ ] **7.4** Add `documentation-catalog.mdx` to `docs-guide/catalog/` (generated or semi-generated)
  - ⏸ CHECKPOINT

---

## Phase 8 — Handoffs + Plan Closure

- [ ] **8.1** Deliver handoff to REPO-STRUCTURE-GOV: Phase 1.3 dependencies resolved, v2/ overlap decisions made
- [ ] **8.2** Deliver handoff to SCRIPT-GOVERNANCE: post-Task 14 generator banner update list
- [ ] **8.3** Deliver handoff to COMPONENT-GOVERNANCE: component library public pages decision (Phase 6.3)
- [ ] **8.4** Absorb or close `workspace/plan/active/CANONICAL-TRUTH-GUIDES/` — its scope is now here
- [ ] **8.5** Mark this plan complete; move to `workspace/plan/complete/DOCUMENTATION/`
  - ⏸ FINAL CHECKPOINT: human confirms plan closure

---

## Open Questions

| # | Question | Status | Blocks |
|---|---|---|---|
| Q1 | Should `audience` be a frontmatter field in docs-guide pages, or a separate machine-readable sidecar file? | Open | Phase 1.1 |
| Q2 | Does `ai-features.mdx` get populated or collapsed into `ai-tools.mdx`? | Open | Phase 4A.1 |
| Q3 | Should `v2/internal/` governance pages be converted to summary+link or kept as narrative? | Open | Phase 4C.1 |
| Q4 | Should `tools/notion/.env.example` be merged into root `.env.example`? | Open | Phase 4D.3 |
| Q5 | Should the documentation-catalog be generated (requires a generator script) or hand-maintained with a freshness validator? | Open | Phase 3B.1 |
| Q6 | Should `docs-guide/docs-glossary.md` become `.mdx` (Mintlify-served) or stay `.md` (internal/agent only)? | Open | Phase 2.5 |
| Q7 | Should CANONICAL-TRUTH-GUIDES be formally absorbed into this plan, or stay separate with a pointer? | Open | Phase 8.4 |

---

## Decision Log

| Date | Decision | Made by |
|---|---|---|
| 2026-03-21 | Phase 0 (research, audit, recommendations) complete before co-creation | Human |
| 2026-03-21 | Phase 1 is a co-creation gate — no execution before model is approved | Human |
| 2026-03-21 | Ownerless governance model is the template for all documentation surfaces | From OSS plan |
| 2026-03-21 | SCRIPT-GOVERNANCE three-tier `<type>/<concern>` is the structural framework for inventory | Derived from audit |
