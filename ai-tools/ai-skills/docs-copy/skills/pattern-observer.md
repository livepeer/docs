---
name: pattern-observer
version: 1.0
description: >
  L7 pattern observer skill. Load when the same error class has appeared
  across 3+ pages, or when pattern-observer.js has produced a report
  requiring interpretation. This skill reads across sessions and pages
  to determine what recurrence means, not how to fix individual sentences.
invoke_when:
  - "why does this keep coming up"
  - "same pattern across multiple pages"
  - "interpret the pattern report"
  - "pattern observer report"
---

# Pattern Observer - L7

## What this skill does

It reads recurrence to find cause. A pattern that survives multiple
fix cycles is not a copy problem. It is a signal. This skill
interprets that signal and produces an escalation call.

This skill does not produce fixes. It produces one of three outputs:
- COPY PROBLEM
- ARCHITECTURE PROBLEM
- PRODUCT CLARITY PROBLEM

<CustomDivider />

## The four observer questions

Ask these in order for any recurring pattern.

<CustomDivider />

### Q1: Frequency

Where is this pattern appearing?

In one section type only -> structural or IA problem -> likely ARCHITECTURE
Everywhere across the tab -> value prop or persona definition problem -> likely PRODUCT CLARITY
In isolated individual pages -> writer internalisation gap -> likely COPY

<CustomDivider />

### Q2: Author behaviour

Is the writer reaching for this construction, or falling back to it?

**Reaching** (the writer is actively choosing it, apparently to solve a
communication problem):
The framework is not giving them a way to say what they need to say.
This is a signal that either the VP is undefined (they have nothing
positive to assert) or the persona is undefined (they are covering
multiple readers at once).
-> Escalate to ARCHITECTURE or PRODUCT CLARITY.

**Falling back** (the writer uses it despite knowing the rule,
because it feels natural):
Rule not internalised. Discipline problem.
-> COPY PROBLEM.

<CustomDivider />

### Q3: What is the pattern protecting?

Remove the construction mentally. What would the copy have to claim,
without qualification, if it were gone?

If that claim feels uncertain or uncomfortable:
The value prop is unresolved upstream. The construction is protecting
the writer from asserting something they do not believe is true.
-> PRODUCT CLARITY PROBLEM.

If the claim is clear but the writer avoided stating it directly:
Voice or confidence problem. The VP exists but the writer is
hedging defensively.
-> COPY PROBLEM (with an L0 verification pass to confirm the VP is clean).

<CustomDivider />

### Q4: What does the reader lose if this is never fixed?

Nothing. They just read worse prose:
Sentence-level fix. Low priority. COPY PROBLEM.

They cannot evaluate whether to commit to the path described:
This is blocking conversion. High priority.
Escalate to product owner, not copy editor.
-> PRODUCT CLARITY PROBLEM.

They cannot find the right path for their situation:
This is a routing failure. High priority.
-> ARCHITECTURE PROBLEM.

<CustomDivider />

## Pattern interpretation table

Use this table as a starting reference before applying the four questions.

| Recurring pattern | L7 reading |
|---|---|
| `not [X]` persists after fixes | VP not strong enough to stand alone - writer reaches for contrast because there is no clear positive to lead with |
| Conditionals cluster in one section | Section is serving an undefined reader - hedges cover multiple personas simultaneously |
| `This page covers` persists | Pages do not have a defined single job - writer announces because scope is uncertain |
| Cost or warning before value persists | Writer does not believe the VP being asserted |
| Majority path is buried as a footnote or aside | IA built around edge cases or product structure, not operator reality |
| Dangling claims persist | Missing linked content or incomplete briefs - staged action paths absent |

<CustomDivider />

## Output format

The observer produces one of three escalation calls:

- **Copy problem** -> route to L4/L5. Writer self-corrects with rule reinforcement.
- **Architecture problem** -> route to L1/L2. Page scope or IA needs restructuring.
- **Product clarity problem** -> route to L0. Value proposition must be redefined before any copy work continues.
