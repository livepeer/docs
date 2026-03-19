---
name: copy-rules
description: >-
  Applies sentence-level copy rules to Livepeer v2 documentation.
  Use when drafting, editing, or reviewing any documentation prose.
  Enforces banned constructions, value-proposition-first structure,
  and the master sentence test. Do not use for MDX mechanics or
  component placement — see page-authoring for those.
---

# SKILL: Copy Rules for Livepeer v2 Docs

Documentation copy must give the operator something they can act on, believe, or use to make a decision — stated directly, with no qualifications, contrasts, or conditions. Apply every rule below to every sentence before it ships.

---

## The master test

Before any sentence is written, ask:
Does this sentence give the operator something they can act on, believe, or use to make a decision — stated directly, with no qualifications, contrasts, or conditions?
If no: rewrite or delete.

---

## Banned words

Never use in body prose:

effectively, essentially, basically, meaningful, significant, real (as intensifier), various, several, simply, obviously, clearly, just (as minimiser)

---

## Banned phrases

- "This page covers / explains / describes"
- "This section covers"
- "In this guide"
- "The reason is straightforward"
- "Understanding X is essential"
- "It is important to note"
- "As mentioned above"
- "among other factors" / "and so on" / "etc."
- "low but not zero"
- "not just [X]"
- "rather than"
- "what it takes"
- "once [X] is stable"
- "it should be noted"
- "not preference"
- "depends on various factors"
- "can generate" / "may produce" in value claims

---

## Banned constructions

**`not [X]` in value statements**
Defines value by contrast. Rewrite as a positive assertion. Delete the contrast.

**`if [condition]` in body prose**
Conditional gatekeeping. State the condition as a fact or remove it.
Exception: code blocks and prerequisite lists.

**`[value statement] — if [condition]`**
Undercuts the value in the same breath. Split into two sentences. Value first. Requirement second.

**`rather than`**
Contrast-by-diminishment. Delete the contrast clause. State the positive directly.

**`This page [verb]`**
Announces content instead of delivering it. Delete. Start with the content.

**`what it takes`**
Hurdle framing. State the requirements directly.

**`consistently` without a number**
Vague standard. Add a threshold or rewrite.

**`can/may [verb]` in value claims**
Weakened assertion. Assert directly or delete.

---

## Frontmatter description field

The `description` field is SEO copy and social preview text. Rules:
- Opens with the operator outcome, not a list of page contents
- Never uses "The X alternatives to..." or "How to..." constructions — these announce content rather than deliver value
- No em-dashes
- Max 160 characters
- Correct: `Earn from GPU compute through a pool without acquiring LPT or managing on-chain operations.`
- Wrong: `The three alternatives to running go-livepeer as a single-process deployment - pool worker, O-T split, and Siphon.`

---

## Section opening order

For every section describing a deployment option, capability, or path:
1. First sentence: what the operator gets or avoids
2. Second: technical mechanism that delivers it
3. Then: configuration, flags, commands

Never open a section with a command, flag name, process name, or mechanism description.
The operator benefit is always sentence one.

---

## Undefined jargon rule

Any term that is not standard English, standard Linux/Go tooling, or defined in the Livepeer glossary must be defined in full prose on first use — before it appears in a heading, table cell, or diagram label.

Coined abbreviations (e.g. "O-T split") must be written out in full on first use: "Orchestrator-Transcoder split (O-T split)". The abbreviation may be used thereafter.

---

## Comparative headers are banned

Section headers and bold lead-ins must not use differential or comparative framing.

Banned patterns:
- "What changes from X"
- "Unlike X"
- "Compared to X"
- "Differences from X"

State what this option does. Never frame it relative to something else.

---

## Structural rules

- One paragraph, one job
- Lead sentence states the operator benefit; remaining sentences extend or evidence it
- Final sentence: fact, number, or next step — never a hedge or restatement
- Prose that restates a table or diagram is deleted
- High-value URLs and commands appear in body copy — not only inside accordions
- Every path introduced is developed on the page or linked

---

## Currency

All monetary examples use USD. If content is region-scoped, declare the region once at section opening.

---

## REVIEW flags

`{/* REVIEW: */}` flags must never appear in rendered content. Any page with an unresolved REVIEW flag in a decision-critical position is blocked from merge.
