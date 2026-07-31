---
name: structure-rules
version: 1.0
description: >
  Structural and paragraph rules for Livepeer documentation.
  Load alongside copy-rules.md for any drafting, editing, or
  structural review task. Governs page sequence, paragraph discipline,
  and the handling of tables, diagrams, and action paths.
invoke_when:
  - "draft [page type]"
  - "review page structure"
  - "check sequence"
  - "structural review"
---

# Structure Rules - L2 and L3

<CustomDivider />

## Page sequence (L2)

Every evaluation or guide page follows this sequence.
Deviations require explicit justification in the brief.

1. **Operator outcome** - value kept, one sentence, no conditionals
2. **Featured path** - majority real-world model, described in full
3. **Variants** - alternative paths with specific entry requirements
4. **Economics** - concrete figures, no hedging
5. **Decision aid** - complete, no empty cells, no REVIEW flags
6. **Staged action path** - numbered, zero to first outcome
7. **Next page link** - one link, correct next step for primary reader

**Banned sequences:**
- Cost or warning before value proposition
- Variant paths before the majority path is fully described
- Decision aid before economics section
- Any section that introduces a path without developing it or linking to
  a page that does

<CustomDivider />

## Paragraph rules (L3)

**One paragraph, one job.**
Label the paragraph's job in three words. If you cannot, split it.

**Lead sentence states the fact.**
Remaining sentences extend or evidence it. No exceptions.

**Final sentence: fact, number, or next step.**
Never a hedge. Never a restatement of the paragraph's opening.
Never a conditional.

**Tables and diagrams stand alone.**
Prose that restates a table row or diagram node is deleted.
Every table and diagram must show something the surrounding prose
does not already say.

**Two representations of identical data: remove one.**
If a diagram and a table carry the same information, the diagram
must be replaced with a version that shows something the table cannot
(a decision path, a causal flow, a sequence) - or deleted.

<CustomDivider />

## Action path rules

**Staged action paths are numbered and imperative.**
Format: `1. [Command].` Not `1. You should [verb]`.

**Every introduced path is developed or linked.**
If a path is mentioned and not described on this page, there must be
a `<LinkArrow>` to the page that describes it. No abandoned paths.

**High-value actions appear in body copy.**
A URL or command that answers the reader's primary question must be
visible without interaction. It must not appear only inside:
- A collapsed `<Accordion>`
- A `<Note>` component
- A `Related Pages` card

<CustomDivider />

## Decision aid rules

Decision tables, matrices, and flowcharts must meet all of the following:

- No empty cells
- No placeholder text
- No `{/* REVIEW: */}` flags in any cell
- Every path in the decision aid has a corresponding section or link
- The majority operator path is the first or most prominent path shown

<CustomDivider />

## Diagram rules

Mermaid diagrams must show one of the following to justify inclusion:
- A causal flow (A causes B causes C)
- A decision path (if X then Y, if not X then Z)
- A sequence over time

A diagram that simply restates a comparison table is deleted.

<CustomDivider />

## Note and callout rules

`<Note>` components must forward-point, not apologise.

Allowed: `Operator profiles change frequently - the #orchestrators Discord channel is the current-state source.`
Banned: `The landscape is evolving. We cannot guarantee accuracy.`

A section must not end with a Note that hedges the content
that precedes it.

<CustomDivider />

## What this skill does not govern

- Sentence-level banned words and phrases (load `copy-rules.md`)
- Value proposition definition (load `value-prop-check.md`)
- Persona routing language (load `persona-routing.md`)
