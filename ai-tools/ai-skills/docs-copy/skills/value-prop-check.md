---
name: value-prop-check
version: 1.0
description: >
  L0 value proposition gate. Load before writing any brief for an
  operator-facing page. If the four questions cannot be answered,
  drafting does not begin. This is a product clarity gate, not a
  writing gate.
invoke_when:
  - "start a brief"
  - "write a brief for"
  - "L0 check"
  - "value prop check"
  - "before drafting"
---

# Value Proposition Check - L0

## When to use this skill

Before writing any content brief for an operator-facing page.
Run this check first. If it cannot be completed, stop.

<CustomDivider />

## The four questions

Answer each in one sentence. If you cannot, the question has
surfaced a product clarity problem. Stop and escalate.

<CustomDivider />

**Q1 - Operator outcome**
What does this product, feature, or section do for the operator?

Rules:
- One sentence
- No `if`, `can`, `may`, `depends on`
- States a kept outcome, not a mechanism

Fail signal: The sentence contains a conditional.
Escalation: Product clarity problem. Escalate to product owner.

<CustomDivider />

**Q2 - Featured (majority) path**
Which operator is already succeeding with this, and what does
their setup look like?

Rules:
- Describes the majority real-world operating model
- Not an edge case, not an aspirational user
- This becomes the featured path on the page

Fail signal: Q2 describes a minority or edge-case operator.
Escalation: Architecture problem. Restructure around the actual majority.

<CustomDivider />

**Q3 - Reader's real alternative**
What would the reader do instead of this?

Rules:
- Specific. Names the alternative.
- Defines the competitive context the page must address.

Fail signal: Q3 is blank, vague, or says "nothing".
Escalation: Product clarity problem. The value proposition has no
competitive context. It cannot be written without one.

<CustomDivider />

**Q4 - Required belief**
What does the reader need to believe to take the next step?

Rules:
- One sentence
- A belief, not a mechanism description
- Specific to this page, not a generic product claim

Fail signal: Q4 is a mechanism ("they need to understand how X works").
Escalation: Rewrite Q4 as the belief that mechanism would produce.

<CustomDivider />

## L0 self-check

Before proceeding to the brief:

- [ ] Q1 contains no conditional
- [ ] Q2 describes the majority operator path, not an edge case
- [ ] Q3 is specific and names the alternative
- [ ] Q4 is a belief statement, not a mechanism description

If any box is unchecked: stop. Return to product owner before drafting.

<CustomDivider />

## What L0 is not

L0 is not a writing exercise. It is a product clarity check.
If L0 cannot be completed, the page cannot be written well by
anyone, not because the writer lacks skill, but because the
product questions have not been answered.

Do not draft around incomplete L0 answers.
