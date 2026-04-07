# Decision Registry

This file is the authoritative record of all **locked structural decisions** for the Content Writing Pipeline.

- A decision is "locked" when a named human authority has explicitly signed off on it and it has been recorded here with a date.
- **Proposals do not belong here.** Items under discussion or awaiting human review live in `blocking-items.md`.
- **No phase may consume a decision that is not in this registry.** If a collation note, agent output, or prior chat says something is "locked" or "confirmed" — it is not confirmed unless it appears in this table with a date and sign-off.

---

## Decision Table

| ID | Decision | Tab(s) | Decided by | Date | Unblocks | Record |
|---|---|---|---|---|---|---|
| D-NAV-01 | `pageType: navigation` disambiguation page is a locked cross-tab pattern — one file per tab, shared entry point for all paths, all downstream sections reference it | ALL tabs with multiple setup paths (Orchestrators confirmed; apply to Gateways, Developers, and any other multi-path tab) | Human | 2026-03-23 | Phase 2.5 content research packs; Phase 6 WRITE mode page briefs for S1 | — |

---

### D-NAV-01 — Navigation disambiguation page is a locked cross-tab pattern

**Decision**: `pageType: navigation` disambiguation page is a locked cross-tab pattern — one file per tab, shared entry point for all paths, all downstream sections reference it. The navigation page (e.g. S1 "Which path is mine?" on the Orchestrators tab) is a single file that appears as the first content section on every tab that requires path disambiguation. All setup paths within that tab must reference or link to this file as their entry point. The file is not per-persona — it is shared across all personas arriving at the tab.
**Tab(s)**: ALL tabs with multiple setup paths (Orchestrators confirmed; apply to Gateways, Developers, and any other multi-path tab)
**Decided by**: Human
**Date**: 2026-03-23
**Unblocks**: Phase 2.5 content research packs (agents must know S1 = shared navigation file, not a per-path section); Phase 6 WRITE mode (page brief for S1 is a navigation page brief, not an instruction page brief)
**Record**: —

**Decision authority**: Human
**Information required**: Tab has multiple setup paths requiring reader self-identification before a path can be assigned
**Reversal condition**: This decision holds as long as `pageType: navigation` remains a canonical page type. If the canonical design removes `pageType: navigation` as a type, this decision must be reopened.

**Notes**: S1 on the Orchestrators tab is the confirmed instance. When Phase 2.5 packs or Phase 6 briefs are produced for any multi-path tab, the S1-equivalent section must be treated as a single shared navigation file — not duplicated per persona, not treated as an instruction page. Any agent or phase that encounters an S1-equivalent section on a multi-path tab must apply this pattern without requiring re-confirmation.

---

## Full Entry Schema

For each decision, record all fields below. The table row is the summary; the full entry block is required for structural decisions.

```
### [ID] — [Short decision title]

**Decision**: [Exact statement of what was decided]
**Tab(s)**: [Which tabs this applies to, or "All"]
**Decided by**: [Named person — not "human" or "team". A real name or role title.]
**Date**: [YYYY-MM-DD]
**Unblocks**: [Phase(s) or tasks that are now unblocked by this decision]
**Record**: [Link or reference to the conversation, doc, or review where this was decided]

**Decision authority**: [Who has the right to make this decision — named role or person]
**Information required**: [What must be known or confirmed before this decision can be made]
**Reversal condition**: [This decision holds as long as: {specific condition}. If the condition changes, this decision must be reopened.]

**Notes**: [Any clarifications, edge cases, or constraints the decision carries]
```

---

---

### OPEN — S1 Path Model (Orchestrators IA Review)

**Status**: PROPOSED — awaiting human decision
**Tab(s)**: Orchestrators (may apply cross-tab)
**Date raised**: 2026-03-24
**Raised by**: IA review session (Claude + Alison)

**Issue**: The IA defines 3 flat paths (solo video/dual, AI-focused, pool node). Existing content has 4 paths (solo, pool worker, pool operator, enterprise). Both are wrong.

**Proposal**: S1 disambiguation should use a 2-step model, but workload comes first because it determines whether the participation question even applies:

1. **Workload type**: Video, AI, or Dual?
   - Driven by hardware, goals, and what jobs you want to run
2. **Participation mode** (conditional):
   - If video/dual: active set requires LPT stake - solo needs sufficient LPT, pool if insufficient
   - If AI only: no LPT needed, no active set - solo is viable regardless of capital. AI routing is capability advertisement + price, not stake weight.

The IA's 3 flat paths (solo video/dual, AI-focused, pool node) collapse these into false choices. The existing 4-path model (solo, pool worker, pool operator, enterprise) also wrong - "enterprise" is scale, not path.

Additionally: "pool worker" vs "pool operator" is a real distinction the IA misses. Pool worker = contributes GPU to someone else's pool. Pool operator = runs the pool.

**CORRECTION (2026-03-24)**: Initial proposal had participation mode first, workload second. Wrong - LPT stake only gates video/dual path, not AI. Workload decision must come first because it determines whether stake question applies at all.

**Blocks**: S1 page brief, Phase 2.5 research pack for S1, downstream content
**Decision authority**: Human
**Information required**: Confirm the 2-step model with workload-first ordering; confirm pool worker/pool operator distinction belongs in S1 or S6

---

## Registry Notes

- No phase may consume a decision that is not in this registry.
- Reversal conditions are mandatory for all structural decisions. A structural decision reversed after Phase 3 runs requires rebuilding the tab-map, reconsolidation plan, all page briefs, and all affected content — the cost of a late reversal must be explicit.
- Decisions made in chat that are not written here do not exist. A decision not in the registry has no status — it cannot be referenced, built on, or treated as resolved across context resets or handoffs.
- Proposals and open items go in `blocking-items.md`, not here.
