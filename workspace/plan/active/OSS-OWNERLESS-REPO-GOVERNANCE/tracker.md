# Tracker — OSS Contributor Governance
**Last updated:** 2026-03-28
**Owner:** Community (post-handover) — no internal owner

---

## Master Constraint

This repo is being handed to the **OSS community + a human review team**. There is no internal owner after handover. Every phase must produce outputs that are community-executable and agent-operable without prior context.

---

## Phase 1 — State Assessment ✅ COMPLETE

| Deliverable | Status | File |
|---|---|---|
| Gap analysis | ✅ Done | `gap-analysis.md` |
| Live label inventory | ✅ Done | `live-label-inventory.md` |
| Planning folder triage (status headers) | ✅ Done | `05_OSS-Governance-Framework/**` |
| Decision log (D1–D8) | ✅ Done | `decisions/decision-log.md` |
| Project tracker | ✅ Done | `tracker.md` (this file) |
| master-status.mdx updated | ✅ Done | `master-status.mdx` |

**Phase 1 outcome:** Current state fully mapped. 8 decisions recorded. Community handover confirmed as master constraint. Ready for Phase 2 design.

---

## Phase 2 — Design 🔲 NOT STARTED

*Gate: Phase 1 approved by Alison. Opens on: 2026-03-28.*

### Scope

| Item | Input | Output |
|---|---|---|
| Holistic contributor journey | gap-analysis.md + D1–D8 decisions | `design/contributor-journey.md` |
| Label taxonomy (final) | live-label-inventory.md + D8 | `design/label-taxonomy.md` |
| Stale/lifecycle automation | D5 (90/30) | `design/stale-automation.md` |
| Copilot integration | D1 (enabled), D2 (advisory), D6 (both) | `design/copilot-integration.md` |
| agent-ready auto-classification | D3 (open) | `design/agent-ready-flow.md` |
| Contributor ladder (lightweight) | D4 (Contributor + Reviewer only) | `design/contributor-ladder.md` |
| Community handover package | D7 + all design outputs | `design/handover-package.md` |

### Design principles (from D7)
- No step requires internal knowledge
- Every failure emits an exact repair command
- Human review team receives escalations only — not routine contributions
- AI agents are primary contributors; humans are secondary escalation layer

### Phase 2 gate
- All design docs written
- Alison reviews and approves
- Handover package spec complete and community-readable

---

## Phase 3 — Execution + Testing 🔲 NOT STARTED

*Gate: Phase 2 design approved.*

### Scope

| Item | Executor | Type |
|---|---|---|
| Delete 11 tasks-retention labels (verify 0 issues first) | Agent (label-remove.sh) | Script |
| Delete/rename 3 legacy labels (`type: feature`, `status: core contributors working on it`, `Docs:v2`) | Agent (label-remove.sh) | Script |
| Create 5 solution product labels (`area: daydream`, etc.) | Agent | Script |
| Create remaining missing labels from taxonomy | Agent | Script |
| Wire stale automation workflow | Agent | Workflow |
| Wire agent-ready auto-classification in issue-auto-label.yml | Agent | Workflow |
| Deploy custom Copilot instruction files | Agent | Files |
| Write contributor ladder docs | Agent | Docs |
| Write community GOVERNANCE.md | Agent | Docs |
| Promote migrating governance surfaces to autofix | Agent (lpd repair) | Repair |
| Full regression: ownerless-governance.test.js | Agent (CI) | Test |
| Community handover: verify all entry points self-explanatory | Human review team | QA |

### Phase 3 gate (done when)
- `ownerless-governance.test.js` passes clean
- `gh label list` matches approved taxonomy exactly
- All contributor entry points (README, CONTRIBUTING, issue templates) reviewed by human review team
- No step in any contributor flow requires internal knowledge to complete

---

## Blocked Decisions

None — all D1–D8 resolved as of 2026-03-28.

---

## Key Files

| File | Role |
|---|---|
| `gap-analysis.md` | Current vs target — input to Phase 2 |
| `live-label-inventory.md` | Live label state + action map |
| `decisions/decision-log.md` | D1–D8 decisions — source of truth for design |
| `design/` | Phase 2 outputs (to be created) |
| `tools/config/ownerless-governance-surfaces.json` | Machine-readable governance surface manifest |
| `.github/workflows/issue-auto-label.yml` | Live label management |
| `docs-guide/policies/ownerless-governance.mdx` | Canonical ownerless policy |
