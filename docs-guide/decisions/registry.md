# Decision Registry — Master Index

> Single lookup point for all decision registries across the repo.
> Each registry stays in its own location. This file cross-references them all.
> Last verified: 2026-04-07

---

## Active Decision Registries

| Registry | Location | Scope | Locked Decisions |
|----------|----------|-------|-----------------|
| Content Writing | `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md` | Structural content decisions (IA, page patterns, voice) | D-NAV-01 |
| Content Writing — Blocking Items | `workspace/plan/active/CONTENT-WRITING/decisions/blocking-items.md` | P0 gaps blocking content production | — |
| Content Writing — Tab Status | `workspace/plan/active/CONTENT-WRITING/decisions/tab-status.md` | Per-tab gate status | — |
| Script Governance | `workspace/plan/active/SCRIPT-GOVERNANCE/decision-log.md` | Script architecture decisions | Multiple |
| OSS Ownerless Governance | `workspace/plan/active/OSS-OWNERLESS-REPO-GOVERNANCE/decisions/decision-log.md` | Ownerless contribution decisions | — |
| GitHub Actions | `.github/workspace/decisions-log.mdx` | Workflow architecture (D-ACT-01 through D-ACT-08) | 8 locked |
| Ship-Content | `workspace/plan/active/SHIP-CONTENT/decisions.md` | Runtime execution decisions (D-01 through D-12) | — |

---

## Tab-Specific Decision Logs

| Tab | Location | Scope |
|-----|----------|-------|
| Orchestrators | `v2/orchestrators/_workspace/canonical/check/decision-log.md` | Tab IA and content decisions |
| Gateways | `v2/gateways/_workspace/canonical/decision-log.md` | Tab IA and content decisions |

---

## Decision Format

All registries use this format:

```markdown
| ID | Decision | Scope | Decided by | Date | Unblocks |
|---|---|---|---|---|---|
| D-XXX-NN | [What was decided] | [Tab or area] | [Human/AI] | YYYY-MM-DD | [What this unblocks] |
```

Decisions are locked when a human signs off. Locked decisions cannot be changed without a new decision that explicitly supersedes the old one.

---

## How to Add a Decision

1. Add the decision to the relevant registry (by scope)
2. If it affects multiple scopes, add to the primary registry and cross-reference from this index
3. Update this index if you create a new registry
