# Phrase Mapping Reference

Human-maintained guidance for recurring weak constructions.
This file is advisory. It is not a one-to-one thesaurus and it does not auto-promote entries into the banned lists.

Use it when a review pass identifies a repeated failure mode that is real, but still needs judgement and multiple acceptable rewrite shapes.

<CustomDivider />

## How To Use This File

For each recurring pattern, capture:

- the pattern or opening shape
- why it fails
- rewrite shapes that usually work
- any accuracy caveat that should prevent blind substitution

Prefer rewrite families over a single mandatory replacement.

<CustomDivider />

## Comparative Openings

| Pattern | Why it usually fails | Rewrite shapes |
|---|---|---|
| `What changes from X` | Starts from comparison before the thing itself is defined | `What this option does`; `When to choose this path`; `What the operator gains here` |
| `Unlike X` | Defines value by contrast | `This option gives you ...`; `Choose this when ...`; `This path is for ...` |
| `Compared to X` | Assumes the reader already has a baseline | `This path keeps ...`; `This design separates ...`; `Use this when ...` |
| `The key difference is` | Signals comparison-led framing | `The primary outcome is ...`; `The operational trade-off is ...` |

Accuracy caveat:
Use comparison after the concept is established if the comparison materially helps the decision.

<CustomDivider />

## Announcement And Throat-Clearing

| Pattern | Why it usually fails | Rewrite shapes |
|---|---|---|
| `This section walks you through` | Announces instead of delivering | Delete and start with the content; `Use this path when ...`; `Do X by ...` |
| `Before we begin` | Preamble instead of prerequisite | `Prerequisites`; `You need ... before ...` |
| `Now that you understand X` | Patronising and unnecessary | Delete; move directly to the next point |
| `It is worth noting that` | Throat-clearing | Delete; state the fact |
| `In order to` | Verbose | `To ...` |

<CustomDivider />

## Mechanism-First Openings

| Pattern | Why it usually fails | Rewrite shapes |
|---|---|---|
| `[tool] runs [flag] against [address]` as the first sentence | Leads with internals before fit or outcome | `Use this path to ...`; `Choose this when ...`; `This option lets you ...` |
| `[component] handles [list of operations]` as the first sentence | Describes machinery before why the reader should care | `The operator keeps ...`; `This setup offloads ...`; `This model is for ...` |
| `The [thing] separates what [other thing] runs together` | Defines only by structural difference | `This split lets you ...`; `Use this separation when ...`; `This setup isolates ...` |

Accuracy caveat:
If the mechanism itself is the irreducible fact, keep it and document why the normal benefit-first rewrite would be misleading.

<CustomDivider />

## Decision Language

| Pattern | Why it usually fails | Rewrite shapes |
|---|---|---|
| `Use this when:` followed by a long checklist | Delays the primary fit condition | `Use this when [single strongest fit]`; follow with constraints or checks |
| `This may be appropriate if` | Hedged recommendation | `Use this when ...`; `Choose this if ...` |
| `It depends on your situation` | Refuses the decision | `The deciding factor is ...`; `Choose A when ... Choose B when ...` |
| `There are several options` | Vague quantity, no orientation | Name the options immediately |

<CustomDivider />

## First-Use Terminology

| Pattern | Why it usually fails | Rewrite shapes |
|---|---|---|
| Abbreviation in a heading before definition | Reader has no referent | Define in prose first, then reuse the shorthand |
| Coined term in a table before prose introduction | Scan order beats comprehension | Add a short prose definition before the table |
| Flag name as the grammatical subject of the opening sentence | Assumes prior command knowledge | Name the capability first, then introduce the flag |

<CustomDivider />

## Description Field Anti-Patterns

| Pattern | Why it usually fails | Rewrite shapes |
|---|---|---|
| `The X alternatives to ...` | Announces page contents, not reader value | `Choose the right ...`; `Pick the ... path for ...`; `Decide between ... based on ...` |
| `How to configure X` | Repeats page type, not outcome | `Configure X so you can ...`; `Set up X for ...` |
| `Overview of X, Y, and Z` | Table of contents in one sentence | `Understand how X affects ...`; `Learn when to use ...` |

<CustomDivider />

## Maintenance Rule

Add a new row only when:

- the pattern recurs across reviews
- a single banned phrase would be too blunt
- human judgement is still required to choose the right rewrite

If a pattern truly becomes non-negotiable, promote it explicitly into the canonical banned list with human approval.
