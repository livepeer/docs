# Decision Registry

This file is the authoritative record of all **locked structural decisions** for the Content Writing Pipeline.

- A decision is "locked" when a named human authority has explicitly signed off on it and it has been recorded here with a date.
- **Proposals do not belong here.** Items under discussion or awaiting human review live in `blocking-items.md`.
- **No phase may consume a decision that is not in this registry.** If a collation note, agent output, or prior chat says something is "locked" or "confirmed" — it is not confirmed unless it appears in this table with a date and sign-off.

---

## Decision Table

| ID | Decision | Tab(s) | Decided by | Date | Unblocks | Record |
|---|---|---|---|---|---|---|

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

## Registry Notes

- No phase may consume a decision that is not in this registry.
- Reversal conditions are mandatory for all structural decisions. A structural decision reversed after Phase 3 runs requires rebuilding the tab-map, reconsolidation plan, all page briefs, and all affected content — the cost of a late reversal must be explicit.
- Decisions made in chat that are not written here do not exist. A decision not in the registry has no status — it cannot be referenced, built on, or treated as resolved across context resets or handoffs.
- Proposals and open items go in `blocking-items.md`, not here.
