---
name: persona-routing
version: 1.0
description: >
  L1 persona path mapping rules. Load for any page serving more than
  one operator profile. Governs how functional routing language is
  written and where it appears on the page.
invoke_when:
  - "multi-profile page"
  - "persona routing"
  - "operator routing"
  - "different operator types"
---

# Persona Routing - L1

## Functional identifiers, not persona names

Routing language uses hardware, LPT position, and goal.
Named personas (A, B, C, D, E) are planning tools only.
They never appear in published copy.

Correct: `If you have a single GPU and limited LPT, start here.`
Banned: `Persona A operators should...`

<CustomDivider />

## The L1 mapping table

Before drafting a multi-profile page, complete this table in the brief.
Every row must be served by the page or routed to a linked page.

| Operator profile (hardware / LPT / goal) | Primary question on arrival | What this page must give them | Served here or linked? |
|---|---|---|---|

If a row cannot be filled in: the page scope is wrong.
Either the page cannot serve that profile, or the profile
belongs on a different page. Resolve before drafting.

<CustomDivider />

## Where routing language appears

Routing appears once, near the top of the page, after the operator
outcome sentence, before the featured path section.

Format: a brief functional description of who this page is for,
with two to four `Tabs` or inline routing sentences covering
different entry points.

It does not appear:
- In the middle of a section
- After the decision aid
- In a `<Note>` component

<CustomDivider />

## Routing language rules

**State the profile in functional terms.**
`Operators with 24 GB VRAM and no LPT` not `AI-focused operators`.

**State what they get, not what they are.**
`Start here for the pool worker path` not `This is for pool workers`.

**One sentence per profile maximum.**
Routing is a pointer, not a description. Description belongs in the
section the reader is being routed to.

**Do not route to a page that does not exist.**
If the destination page has not been written, either:
- Write the routing section after the destination page exists, or
- Mark it as `[Coming soon]` with a REVIEW flag. Do not merge
  without resolving it.

<CustomDivider />

## The majority path rule

The majority real-world operator profile is the default.
It is described first, in full, without routing language.
Routing language directs minority profiles to variants
or linked pages.

The majority path is never behind a `<Tab>` or collapsed state.
It is the page's main content.
