# Blocking Item Tracker

This file is a **runtime document**. It is populated by humans as they review agent outputs at each phase — it is NOT pre-populated from AI runs.

- Items are added when a human reviews a collation output and decides an issue cannot be resolved automatically.
- AI agents may propose open items in their outputs. Those proposals are not blocking items until a human reviews them and records them here with an owner and resolution method.
- Resolved items are not deleted — they are marked RESOLVED with a date so the resolution history is preserved.

---

## Item Table

| ID | Item | Tab(s) | Type | Owner | Resolution method | Status |
|---|---|---|---|---|---|---|

---

## Type Values

| Type | Meaning |
|---|---|
| `BLOCKING` | This item must be resolved before the relevant phase can proceed. No work advances past this point without resolution. |
| `NON-BLOCKING` | This item is a known issue or open question that does not stop the current phase from running. Track for resolution in a later phase. |
| `VERIFY` | A claim, assumption, or output needs human verification before it can be treated as correct. Often produced when an agent flags something it cannot confirm itself. |

---

## Status Values

| Status | Meaning |
|---|---|
| `OPEN` | Item has been logged. No resolution in progress. |
| `IN PROGRESS` | Owner is actively working on resolution. |
| `RESOLVED (YYYY-MM-DD)` | Item resolved. Include the date. Brief resolution note optional but recommended. |

---

## Process Notes

- Items are added here by humans after reviewing agent collation outputs — not by agents directly.
- Each item must have: a named owner (a real person or role, not "team" or "agent"), a resolution method (how it will be decided — not just "TBD"), and a type.
- BLOCKING items must be resolved and recorded in `decision-registry.md` before the phase that depends on them can run.
- When a BLOCKING item is resolved, the corresponding entry in `decision-registry.md` is the authoritative record. This file records that it was blocking and when it was cleared.
