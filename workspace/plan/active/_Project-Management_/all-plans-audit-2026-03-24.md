# All Active Plans Audit — 2026-03-24

19 plans in `workspace/plan/active/`. Agents read every file. This is what exists.

---

## Summary

| Plan | Status | % | Blocked on | Recommendation |
|---|---|---|---|---|
| CONTENT-WRITING | Active, gated | 30% | Human IA lock (5 tabs), 3 structural decisions, 1 file corruption | ACTIVE — critical path |
| CONTENTI-PIPLEINE | Active, near done | 90% | Phase 7 veracity pending, LIP-92 flag | ACTIVE — finish |
| ORCHESTRATOR-CONTENT-WRITING | Active | 25% | Fee-cut direction, BYOC design, S5/S8 split | ACTIVE — critical path |
| ORCHS | Analysis done | 90% analysis | Stub pages, TODO debt, missing quantitative data | ACTIVE — depends on ORCH-CONTENT-WRITING Phase 3 |
| DOCUMENTATION | Execution 30% | 30% | Human review of consumer-assignments.md (2 gates) | ACTIVE — unblocks 5 other concerns |
| COMPONENT-GOVERNANCE | Near done | 95% | T16 test suite pass | ACTIVE — 3 tasks left |
| REPO-STRUCTURE-GOV | Near done | 80% | SCRIPT-GOVERNANCE Task 14 merge, Phase 3B approval | ACTIVE — finish |
| SCRIPT-GOVERNANCE | Partially blocked | 60% | DOCUMENTATION thread decisions, 7 broken workflows | ACTIVE — fix workflows |
| TERMINOLOGY-COLLATE | Gated | 50% | Human review of harvest.md | ACTIVE — gated on approval |
| SNIPPETS | Ready | Phase 1 done | Nothing — phases 2-5 ready | ACTIVE — execute in one session |
| AI-TOOLS-GOVERNANCE | Maintenance | 95% | Skill consolidation decision, external deps | PARK |
| AUTOMATIONS-RESTRUCTURE | Not started | 0% | SCRIPT-GOVERNANCE Task 15c | PARK |
| CONTENT-STRUCTURE-TEMPLATES | Pre-research | 30% | CONTENT-WRITING taxonomy, Google Doc | PARK |
| SOLUTIONS-SOCIAL-DATA | Complete | 100% | Nothing | PARK — done |
| TOOLING | Complete | 100% | Nothing | PARK — done |
| SCRIPT WORKFLOW AUDIT | Complete (read-only) | 100% | Nothing | PARK — audit done |
| OSS-OWNERLESS-REPO-GOVERNANCE | Mostly done | 85% | Phase 2 label migration | PARK or finish quickly |
| CANONICAL-TRUTH-GUIDES | Stub | 0% | Scope unclear, overlaps DOCUMENTATION | DELETE — merge into DOCUMENTATION |
| _Project-Management_ | Infrastructure | N/A | Nothing — governance layer | KEEP — passive |

---

## By status

### COMPLETE — park these
- **SOLUTIONS-SOCIAL-DATA**: All 4 phases done, committed. 5 community pages live. Data feeds populate when workflows run on main.
- **TOOLING**: lpd paths fixed, documentation updated, validator created. Optional Layer 2/3 nice-to-have.
- **SCRIPT WORKFLOW AUDIT**: Read-only audit complete. Key finding: governance infrastructure 3-5x larger than content it governs. 154 scripts for ~2,259 pages. Findings should inform other plans.

### DELETE
- **CANONICAL-TRUTH-GUIDES**: 3-line stub. Scope overlaps entirely with DOCUMENTATION Part 1. Merge notes into DOCUMENTATION or retire.

### NEAR COMPLETION — finish these
- **COMPONENT-GOVERNANCE**: 95%. 118 components governed. 3 tasks left (T16 test suite, T20 cleanup, T21 merge). Low risk.
- **CONTENTI-PIPLEINE**: 90%. Phases 1-6 done. 12 MDX pages written. Phase 7 veracity pending. Blocked on LIP-92 flag + operator-rationale.mdx corruption.
- **REPO-STRUCTURE-GOV**: 80%. Phases 0-2F done. Blocked on SCRIPT-GOVERNANCE Task 14 merge + Phase 3B human approval.
- **SNIPPETS**: Phase 1 done. Phases 2-5 ready to execute in one session (2-3 hours).
- **OSS-OWNERLESS-REPO-GOVERNANCE**: 85%. Phase 0-1 complete. Phase 2 label migration partially done.

### ACTIVE — blocked on human decisions
- **CONTENT-WRITING**: Master plan. All frameworks locked. All 5 tabs blocked on human IA review + lock. P1: Orchestrators, P2: Gateways. 3 structural decisions pending (Delegators rewards, Developers S6 split, About multi-audience). 1 file corruption (operator-rationale.mdx).
- **ORCHESTRATOR-CONTENT-WRITING**: Gateways tab done (13 pages). Orchestrators not started. Blocked on fee-cut direction (HIGH), BYOC design, S5/S8 split.
- **DOCUMENTATION**: Phases 1-2 done. Execution 30%. Blocked on human review of consumer-assignments.md (2 gates in same file). Unblocks 5 other concerns.
- **SCRIPT-GOVERNANCE**: Tasks 1-9a done. Task 9b blocked on DOCUMENTATION thread. 7 broken GHA workflows. 25+ validators unwired. Decision log has 13 entries.
- **TERMINOLOGY-COLLATE**: 317 terms harvested. Blocked on human review of harvest.md before Task 3 (categorisation).

### PARKED — waiting on dependencies
- **AI-TOOLS-GOVERNANCE**: Core governance done. 3 open decision gates. Maintenance mode.
- **AUTOMATIONS-RESTRUCTURE**: Plan written, 0% executed. Depends on SCRIPT-GOVERNANCE Task 15c.
- **CONTENT-STRUCTURE-TEMPLATES**: Pre-research done. Depends on CONTENT-WRITING taxonomy + Google Doc export.

### INFRASTRUCTURE
- **_Project-Management_**: Governance layer. AI rules, decision registry, project state, completion reports. Working as designed. Read-only reference.

---

## Cross-plan dependencies

```
CONTENT-WRITING (master)
  blocks → all content production across 5 tabs
  blocked by → human IA lock (5 tabs), 3 structural decisions

ORCHESTRATOR-CONTENT-WRITING
  blocks → ORCHS execution
  blocked by → fee-cut direction, BYOC decision

SCRIPT-GOVERNANCE Task 14
  blocks → REPO-STRUCTURE-GOV Phase 1/2E
  blocked by → merge approval

SCRIPT-GOVERNANCE Task 9b
  blocks → docs-guide governance docs
  blocked by → DOCUMENTATION thread decisions

DOCUMENTATION consumer-assignments.md
  blocks → 5 downstream concerns
  blocked by → human review (2 gates)

CONTENT-WRITING taxonomy
  blocks → CONTENT-STRUCTURE-TEMPLATES
  blocked by → human IA lock cycle

SCRIPT-GOVERNANCE Task 15c
  blocks → AUTOMATIONS-RESTRUCTURE
  blocked by → earlier SCRIPT-GOVERNANCE tasks
```

---

## The actual problem

19 plans. 6 are done or should be deleted. 13 are active. Of those 13:
- 8 are blocked on human decisions
- 3 are blocked on other plans that are blocked on human decisions
- 2 could execute right now (SNIPPETS, COMPONENT-GOVERNANCE T16)

The bottleneck is human review. Not tooling, not planning, not AI capability. Every plan has thorough design work. Almost none have execution completed because every gate requires human sign-off and the sign-offs are not happening.

---

## What the SCRIPT WORKFLOW AUDIT found (relevant)

- Governance infrastructure is 3-5x larger than the documentation it governs
- 154 scripts, 44 workflows, 21 JSON configs, 90 docs-guide pages, 381 workspace plan files — to support ~2,259 content pages
- Content production has NOT started (pipeline designed, zero pages through it in the main pipeline)
- Only the CONTENTI-PIPLEINE parallel track has produced content (12 pages)
- 25+ validators declare CI tiers but have zero wiring
- 7 GHA workflows broken post-restructure
- Maturity inversion: governance layer built before content production is operational

---

*Audit by 3 agents reading all files in all 19 plan directories. 2026-03-24.*
