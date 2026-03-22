**Status**: ⛔ DEPRECATED — pre-framework draft, does not reflect locked taxonomy or page template requirements. Build from spec after Step 11: `v2/_workspace/references/content-pipeline/10-prompt-input-spec.md` at Step 18.

---

# Prompt: Level 2 Pass B — Layout & Style

## Livepeer Docs Content Pipeline

---

## When to use this prompt

Run Pass B after Pass A content has been approved — either the page has a PASS or NEEDS WORK verdict with approved fixes applied, or a WRITE output has been reviewed.

**Input:** Approved content from Pass A (plain markdown with section headings)
**Output:** Production-ready MDX file

This prompt handles: template selection, MDX section structure, component placement, frontmatter completion, section naming, and render validation.

It does **not** rewrite content. If content needs changing, return to Pass A.

---

## Context block

```
PAGE_PATH:        [e.g. v2/gateways/guides/payments-and-pricing/clearinghouse.mdx]
PAGE_TYPE:        [concept / tutorial / guide / instruction / navigation / reference / resource]
PAGE_VARIANT:     [overview / specification / compendium / changelog / quickstart / setup / knowledge-hub / none]
PASS_A_SOURCE:    [path to Pass A output, or paste the approved content]

[From Pass A — carry these through:]
AUDIENCE:         [gateway / orchestrator / developer / builder / delegator / community / founder]
PERSONA:          [audience-scoped token or "none"]
PURPOSE:          [15-value purpose token]
LIFECYCLE_STAGE:  [7-value lifecycle token]
COMPLEXITY:       [beginner / intermediate / advanced]
INDUSTRY:         [array, max 2 — technical, finance, economics, business, marketing, governance, broadcast, AI, livepeer]
NICHE:            [array — web3, protocol, tokenomics, AI, video, streaming, hardware, infrastructure]
VERACITY_STATUS:  [verified / unverified / stale]
```

---

## Phase 1 — Template selection

Map PAGE_TYPE + PAGE_VARIANT to the base template:

| pageType      | pageVariant                        | Template                                          |
| ------------- | ---------------------------------- | ------------------------------------------------- |
| `instruction` | `quickstart` or `setup` or default | `snippets/templates/pages/how-to-page.mdx`        |
| `concept`     | any                                | `snippets/templates/pages/overview-page.mdx`      |
| `guide`       | any                                | `snippets/templates/pages/overview-page.mdx`      |
| `tutorial`    | any                                | `snippets/templates/pages/tutorial-page.mdx`      |
| `reference`   | `compendium`                       | `snippets/templates/pages/faq-page.mdx`           |
| `reference`   | `specification` or `changelog`     | `snippets/templates/pages/reference-page.mdx`     |
| `navigation`  | `portal` or `landing`              | `snippets/templates/pages/landing-frame-page.mdx` |
| `resource`    | `knowledge-hub`                    | `snippets/templates/pages/overview-page.mdx`      |

Read the selected template. Note its required sections and skeleton structure.

**Template gap flag:** Current templates are minimal scaffolds — they define section order and a few component examples, but do not fully specify component choices for all content types. Where the template doesn't specify, apply the component decision rules in Phase 3. Flag any gap where no clear rule exists.

---

## Phase 2 — Section structure mapping

Map the approved content sections onto the template's structure.

For each section from Pass A output:

| Content section | Template slot | Heading level | MDX component needed? |
| --------------- | ------------- | ------------- | --------------------- |

**Heading levels:**

- `##` — top-level sections (primary steps, major concepts)
- `###` — sub-sections within a top-level section
- `####` — granular detail; use sparingly; not for navigational sections

**Template slot mapping** (by pageType):

_instruction / how-to:_
Overview → ## Overview | Prerequisites → ## Prerequisites | Steps → ## Steps (inside `<Steps>`) | Validate → ## Validate | Next → ## Next Steps

_concept:_
Context/framing → ## Overview | How it works → ## [Concept name] | Architecture/diagram → ## Architecture | Key terms → ## Reference (or inline definitions) | Next → ## Next Steps

_guide:_
Outcome → ## Overview | Main content → ## [Primary subject sections] | Decision aid → ## [Which path / comparison table] | Next → ## Next Steps

_tutorial:_
Goal → ## Overview | Prerequisites → ## Prerequisites | Steps → `<Steps>` | What you built → ## What you built | Next → ## Next Steps

_reference / specification:_
Index → ## Overview (or `<AccordionGroup>`) | Lookup sections → ## [Term / endpoint / flag] | Source → ## Source

---

## Phase 3 — Component selection

For each section, apply these rules to select the correct MDX component.

### Procedures and steps

`<Steps>` with `<Step title="">` for any sequential procedure with 2 or more steps.
Do not use numbered markdown lists for procedures — use `<Steps>`.
Do not nest `<Steps>` — flatten multi-stage procedures into a single sequence or split into sub-sections.

### Code

`<CodeGroup>` — multiple code variants (different languages, different OS, different configs)
Single code fence — a single standalone example
`<CodeBlock filename="" icon="">` — when filename/icon context is important

**Rule:** Commands that answer the primary question on the page appear in body copy — not only inside accordions, notes, or card CTAs.

### Callouts

`<Note>` — forward-pointing supplementary context. Must not hedge or apologise for the content that precedes it. Allowed: "Orchestrator profiles update frequently — #orchestrators on Discord is the current source." Not allowed: "Note that this may change."
`<Tip>` — specific actionable shortcut or time-saver.
`<Warning>` — a real failure mode with real consequences. Not general caution.
`<Info>` — non-critical supplementary context. Must not be on the critical reader path.

**Rule:** A section must not end with a `<Note>` that qualifies or hedges the section's content.

### Tables

Native markdown tables. No table should duplicate information in adjacent prose — if it does, delete the prose.

### Tabs

`<Tabs>` only when content genuinely splits by persona, OS, or configuration variant — and the reader can self-identify which tab applies to them.
The majority path is never behind a `<Tab>`. It is the page's default content.
Do not use `<Tabs>` for visual variety.

### Cards

`<Card title="" href="">` — next-step CTAs at the end of a page or major section.
`<CardGroup cols={2}>` — 2–4 equal-priority options.
Do not use Cards as navigation lists — that is the sidebar's function.

### Accordions

`<AccordionGroup><Accordion title="">` — supplementary detail the primary reader can skip.
High-value commands, critical steps, and primary CTAs must not be inside an `<Accordion>`.

### Quotes and callouts

`<Quote>` — for definitions or strong value propositions at the top of a page (header CTA position).

---

## Phase 4 — Frontmatter completion

Produce the complete frontmatter block with all required fields:

```yaml
---
title: [See naming rules below]
sidebarTitle:
  [Shorter form if title > 3 words — 1–2 words. Omit if same as title.]
description: [One sentence, outcome-focused, <= 160 chars. See rules below.]
pageType: [canonical enum]
pageVariant: [canonical enum, or omit]
audience: [canonical audience token]
persona: [audience-scoped persona token, or omit]
purpose: [canonical 15-value purpose token]
lifecycleStage: [canonical 7-value lifecycle token]
complexity: [beginner / intermediate / advanced]
industry: [array, max 2, first dominates]
niche: [array]
veracityStatus: [verified / unverified / stale]
status: [current / draft / deprecated]
lastVerified: [YYYY-MM-DD]
---
```

### Title rules

- 1–3 words
- Concept-derived: use the domain's native terminology, not a generic tech substitute
  ✅ "Reward Cut" not "Earnings Percentage" | ✅ "Clearinghouse" not "Payment Settlement"
- Not gerund-first: "Build a Gateway" → "Gateway Build Guide" or restructure
- Not "Overview of", "Introduction to", "Understanding", "Guide to"
- Not question form: "How does X work?" is a description, not a title
- Not the section name repeated: the page title distinguishes the page within its section

### Description rules

- One sentence, subject-first
- Opens with the reader outcome or subject — not "This page" or "Overview of"
- <= 160 characters
- No announcement framing: "The three paths to..." → state the subject directly
- No conditional in sentence 1

---

## Phase 5 — Section naming check

For every `##` and `###` heading in the page:

Apply the scoring criteria from `Prompts/section-naming.md`.

Key rules to check:

- **Domain anchor**: uses the domain's native term — not a generic substitute
  ✅ "Reward Cut" | ❌ "Earnings Parameter"
  ✅ "Pipeline Throughput" | ❌ "Processing Speed"
- **Conditional precision**: technical specificity where it enables a decision; not where it creates noise
- **Form**: imperative for instructional headings (`Configure the Pipeline`), noun phrase for reference/concept headings (`Pipeline Architecture`)
- **Generic structure words**: flag these — they are allowed only where no specific term exists
  Flag: "Overview", "Introduction", "Background", "Summary", "Details", "More Information"

For each flagged heading, write the corrected version and score it.

---

## Phase 6 — Render validation

Before writing the final file:

- [ ] All component names match the component registry in `snippets/components/`
- [ ] All `<Card href="">` and link values use valid repo paths (no absolute URLs for internal pages)
- [ ] No unclosed JSX tags
- [ ] No invalid prop types (e.g. string where boolean expected)
- [ ] All `{/* REVIEW: */}` flags from Pass A are carried through to the MDX output — they must not be removed
- [ ] `status: current` only if `veracityStatus: verified` and page is complete
- [ ] `status: draft` if any `{/* REVIEW: */}` flags remain unresolved
- [ ] UK English throughout (no US spellings in any content, frontmatter value labels, or component text)
- [ ] Heading hierarchy is consistent: `##` before `###`, no skipped levels

---

## Output

Produce the final `.mdx` file ready to write to `PAGE_PATH`.

Structure:

```
---
[complete frontmatter]
---

{/* IMPORTS — list any component imports required */}

[MDX content with components applied]

{/* REVIEW flags carried through from Pass A */}
```

**Before writing the file**, flag any decisions that require human approval:

- Template gap (no rule covers a specific content type)
- Structural mismatch (content doesn't map cleanly to any template slot)
- Ambiguous component choice (two components could both apply)
- Heading where the naming rubric produces a tie

Do not silently apply a workaround. State the decision and the default chosen.

---

## Quality gates

- [ ] Template matched and applied
- [ ] Every content section mapped to a template slot with a heading level
- [ ] Component decisions follow Phase 3 rules (no accordion hiding of primary content)
- [ ] Frontmatter complete: all required fields with canonical enum values
- [ ] Title: 1–3 words, concept-derived, no banned forms
- [ ] Description: subject-first, <= 160 chars, no self-reference
- [ ] Section headings checked against naming rubric — no unresolved generic structure words
- [ ] No MDX syntax errors
- [ ] All `{/* REVIEW: */}` flags from Pass A present in the output
- [ ] UK English throughout
