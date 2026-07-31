# Terminology Tracking

> **Purpose**: Cross-phase terminology tracking file. Collects terminology splits, new terms, and disambiguation candidates surfaced during audience design (Phase 1), content research (Phase 2.5), and veracity passes (Phase 7).
>
> This file feeds the v7 audience design prompt — v7 must track new terminology distinctions and produce a canonical terminology file based on this input.
>
> Populated incrementally as phases run. Human reviews and locks terms before they are written to the human-authored glossary.

---

## Format

| Term | v1 form | v2 form | Glossary has it? | Split candidate? | Source | Status |
|---|---|---|---|---|---|---|
| [term] | [form used in v1] | [form used in v2] | Yes/No | Yes/No | [file or phase that surfaced it] | OPEN / RESOLVED |

---

## Terminology Decisions (locked)

| Term | Canonical form | Decision date | Authority | Notes |
|---|---|---|---|---|
| BYOC | Bring Your Own Container | 2026-03-23 | Human | Confirmed by human |
| NaaP | Network-as-a-Product | 2026-03-23 | Human (provisional) | Style guide confirmation pending |
| LIP-92 | Treasury Contribution Percentage | 2026-03-23 | Human | Non-blocking; verified |

---

## Open Terminology Items

| Term | Conflict description | Tabs affected | Priority | Owner |
|---|---|---|---|---|
| NaaP style guide form | Provisional: Network-as-a-Product. May also be Network as a Platform. Needs style guide check. | Gateways | LOW | Human |
| Unbonding period | 21 rounds in some sources, "21 hours" disputed — contact: Mehrdad/Rick | Delegators | BLOCKING | Human |
| Fee cut direction convention | v1→v2 possible inversion of fee cut percentage direction | Orchestrators | HIGH | SME verification |

---

## Surfaced During Phases (pending human review)

_Populated as phases run._
