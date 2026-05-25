# Decision Registry — Master Index

> Single lookup point for all decision registries across the repo.
> Each registry stays in its own location. This file cross-references them all.
> Last verified: 2026-05-22

<CustomDivider />

## Active Decision Registries

| Registry | Location | Scope | Locked Decisions |
|----------|----------|-------|-----------------|
| Docs Guide Structure | `docs-guide/decisions/docs-guide-structure.md` | docs-guide/ folder layout, authority tiers, frontmatter contract, adapter parity, PR enforcement (D-DG-01 through D-DG-13) | 13 locked |
| Glossary Boundary | `docs-guide/decisions/glossary-boundary.md` | Public vs internal glossary split; canonical corpus contract (D-GLOS-01) | 1 locked |
| Content Writing | `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md` | Structural content decisions (IA, page patterns, voice) | D-NAV-01 |
| Content Writing — Blocking Items | `workspace/plan/active/CONTENT-WRITING/decisions/blocking-items.md` | P0 gaps blocking content production | — |
| Content Writing — Tab Status | `workspace/plan/active/CONTENT-WRITING/decisions/tab-status.md` | Per-tab gate status | — |
| Script Governance | `workspace/plan/active/SCRIPT-GOVERNANCE/decision-log.md` | Script architecture decisions | Multiple |
| OSS Ownerless Governance | `workspace/plan/active/OSS-OWNERLESS-REPO-GOVERNANCE/decisions/decision-log.md` | Ownerless contribution decisions | — |
| GitHub Actions | `.github/workspace/decisions-log.mdx` | Workflow architecture (D-ACT-01 through D-ACT-10) | 10 locked |
| Governance Design | `.github/workspace/design/governance/design-overview.md` + `.github/workspace/decisions-log.mdx` | Governance infrastructure (D-GOV-01 through D-GOV-08; D-GOV-08 = every folder is governed, prevention at earliest layer) | 8 locked |
| Ship-Content | `workspace/plan/active/SHIP-CONTENT/decisions.md` | Runtime execution decisions (D-01 through D-12) | — |

<CustomDivider />

## Tab-Specific Decision Logs

| Tab | Location | Scope |
|-----|----------|-------|
| Orchestrators | `v2/orchestrators/_workspace/canonical/check/decision-log.md` | Tab IA and content decisions |
| Gateways | `v2/gateways/_workspace/canonical/decision-log.md` | Tab IA and content decisions |

<CustomDivider />

## Decision Format

All registries use this format:

```markdown
| ID | Decision | Scope | Decided by | Date | Status | Unblocks | Supersedes |
|---|---|---|---|---|---|---|---|
| D-XXX-NN | [What was decided] | [Tab or area] | [Human/AI] | YYYY-MM-DD | proposed \| locked \| superseded \| retired | [What this unblocks] | [D-YYY-NN if applicable] |
```

ID grammar: `D-{SCOPE}-{NN}` where SCOPE is one of NAV, ACT, GOV, SCRIPT, OWN, CONTENT, ORCH, GW, DG, GLOS. NN is a zero-padded sequence within scope.

Decisions are locked when a human signs off. Locked decisions cannot be changed without a new decision that explicitly supersedes the old one. The D-DG-NN scope is reserved for `docs-guide/` structural decisions; D-GLOS-NN for terminology and glossary decisions.

Status, Supersedes, and ID-uniqueness are validated by `check-decisions-registry.js` (Phase 4 of the docs-guide redesign plan).

<CustomDivider />

## How to Add a Decision

1. Add the decision to the relevant registry (by scope)
2. If it affects multiple scopes, add to the primary registry and cross-reference from this index
3. Update this index if you create a new registry
