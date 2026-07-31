---
name: copy-rules
version: 1.1
description: >
  Sentence-level copy rules for Livepeer documentation.
  Load this skill before drafting, editing, or reviewing prose.
  Distinguishes blocking copy failures from warning-only heuristics and manual sign-off.
---

# Copy Rules - L4

Use this file for sentence and section-level copy decisions.
Not every rule below is a hard blocker. The framework now uses three tiers:

- **Blocking**: merge blockers or CI blockers
- **Warning-only**: rewrite by default, but keep accurate exceptions
- **Manual sign-off**: human review decides whether the default heuristic should be overridden

<CustomDivider />

## The master test

Before any sentence ships, ask:
Does this sentence give the reader something they can act on, trust, or use to make a decision, stated directly and in the right order for the page?

If no: rewrite or delete.

<CustomDivider />

## Blocking rules

### Banned words

Do not use these words in body prose under any circumstance.
If you reach for one, restate the sentence without it.

effectively, essentially, basically, meaningful, significant, real (as intensifier),
various, several, obviously, clearly

### Banned phrases

Do not use any of the following in any form:

- "This section covers"
- "The reason is straightforward"
- "Understanding X is essential"
- "It is important to note"
- "As mentioned above"
- "among other factors"
- "and so on" / "etc."
- "low but not zero"
- "not just [X]"
- "rather than"
- "what it takes"
- "once [X] is stable"
- "it should be noted"
- "not preference"
- "depends on various factors"
- "can generate" / "may produce" in value claims

### Banned constructions

**`not [X]` in value statements**
Rewrite as a positive assertion. Delete the contrast.

**`if [condition]` in body prose**
Do not make the reader resolve a knowledge gap the page should close.
Exception: code blocks, prerequisite lists, and exact configuration conditions.

**`[value statement] - if [condition]`**
Split into two sentences. Value first. Requirements second.

**`rather than`**
Delete the contrast clause. State the positive directly.

**`This page [verb]`**
Delete. Start with the content.

**`what it takes`**
State the requirements directly.

**`consistently` without a number**
Add the threshold or rewrite.

**`can/may [verb]` in value claims**
Assert directly or delete the claim.

### REVIEW flags

`{/* REVIEW: */}` flags are internal signals only.
They must never appear in rendered content.
Any unresolved REVIEW flag in a decision-critical position blocks merge.

<CustomDivider />

## Warning-only heuristics

These defaults are strong guidance, not absolute truth. Rewrite by default.
If product accuracy or research truth requires an exception, keep the accurate version and document the reason in review.

### Description field

The frontmatter `description` is a one-sentence outcome statement, not a table of contents.

- Open with the reader outcome or fit, not "this page" or "overview of"
- Target `<= 160` characters
- Avoid announcement framing such as "The three alternatives to..."
- Keep SEO keyword strategy out of scope here; this is about clarity, not search optimisation

### Opening order

Lead with the most useful fact for the reader.

- For option, path, or decision sections, that usually means outcome or fit before mechanism
- Do not open those sections with a command, flag, daemon, or process description unless accuracy requires it
- If accuracy requires the mechanism first, document the exception in review instead of forcing a formulaic rewrite

### First-use jargon

Define coined terms, shorthand labels, and unfamiliar abbreviations in body prose before they appear in headings, tables, or diagrams.

- Standard platform/tooling terms do not need redefinition on every page
- Livepeer-specific terms should follow the glossary or canonical terminology source when one exists

### Comparative framing

Do not make comparison the entry point when the thing itself has not been defined yet.

- Avoid openings like "What changes from X", "Unlike X", "Compared to X", "Differences from X"
- Once the concept is established, targeted comparison is allowed where it genuinely helps the decision

### Phrase guidance

Use the advisory rewrite patterns in:

- `ai-tools/ai-skills/docs-copy/reference/phrase-mapping.md`

That file is human-maintained. It is not an auto-promotion pipeline into hard bans.

<CustomDivider />

## Manual sign-off items

These require human judgement and should not be reduced to regex-only compliance:

- whether the stated operator benefit is the right one
- whether a term is canonically correct or needs SME/research confirmation
- whether product/research truth justifies breaking the default opening order
- whether the page actually helps the reader decide, not just passes sentence lint

<CustomDivider />

## Structural rules (summary)

Full page sequence rules live in `structure-rules.md`. Minimum expectations here:

- One paragraph, one job
- Lead sentence states the most useful fact for the reader
- Final sentence ends on a fact, number, or next step; never a hedge
- Tables and diagrams stand alone; duplicate prose is deleted
- High-value URLs and commands appear in body copy, not only inside accordions

<CustomDivider />

## What this skill does not govern

- Content accuracy or disputed terminology - SME/research gate
- Full page structure and section sequencing - load `structure-rules.md`
- Value proposition definition - load `value-prop-check.md`
- Persona routing - load `persona-routing.md`
- SEO keyword strategy - separate workstream
