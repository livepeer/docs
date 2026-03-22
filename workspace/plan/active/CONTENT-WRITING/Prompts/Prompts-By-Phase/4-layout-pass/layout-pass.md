# Livepeer Docs — Layout Pass
## Pass B · Layout & Style Application

**Your task**: Execute the phases below in order and write the final MDX file. Do not summarise instructions. Begin the pre-flight check immediately.

**Layout layer only.** This pass handles template selection, MDX structure, component placement, frontmatter completion, section naming, and render validation. Do not rewrite content — if content needs changing, return to Pass A.

**Input**: Approved Pass A content (plain markdown with section headings).
**Output**: Production-ready `.mdx` file written to PAGE_PATH.

---

## Context Block

_All fields required. Carry AUDIENCE through COMPLEXITY from the Pass A context block._

```
PAGE_PATH:        [e.g. v2/gateways/guides/payments-and-pricing/clearinghouse.mdx]
PAGE_TYPE:        [concept / tutorial / guide / instruction / navigation / reference / resource]
PAGE_VARIANT:     [overview / specification / compendium / changelog / quickstart / setup / knowledge-hub / none]
PASS_A_SOURCE:    [path to approved Pass A output — or paste the content]

[Carry from Pass A:]
AUDIENCE:         [canonical audience token]
PERSONA:          [persona token or "none"]
PURPOSE:          [canonical 15-value purpose token]
LIFECYCLE_STAGE:  [canonical 7-value lifecycle token]
COMPLEXITY:       [beginner / intermediate / advanced]
VERACITY_STATUS:  [verified / unverified / stale — from Pass A veracity check]
```

---

## Pre-flight

Before running:

1. **Is Pass A approved?** Pass B does not run on unapproved Pass A output. If the Pass A verdict was REWRITE REQUIRED, return to Pass A. If NEEDS WORK, confirm fixes have been applied.
2. **Does Pass A output include content type tags?** Pass A Phase 4 should have identified the information type for every section. If not, run that classification now — component selection in Phase 3 depends on it.
3. **Frontmatter validator status**: `tools/lib/frontmatter-taxonomy.js` currently uses the old 12-type schema. This pass produces frontmatter using the canonical 7-type schema. Pages with new canonical values will fail CI until the validator is updated. Mark the frontmatter block with a `{/* REVIEW: new-schema frontmatter — pending validator update */}` comment if the validator has not yet been updated.

---

## Phase 1 — Template Selection

Map PAGE_TYPE + PAGE_VARIANT to the correct template:

| PAGE_TYPE | PAGE_VARIANT | Template |
|---|---|---|
| `instruction` | `quickstart` / `setup` / default | `snippets/templates/pages/how-to-page.mdx` |
| `concept` | any | `snippets/templates/pages/overview-page.mdx` |
| `guide` | any | `snippets/templates/pages/overview-page.mdx` |
| `tutorial` | any | `snippets/templates/pages/tutorial-page.mdx` |
| `reference` | `compendium` | `snippets/templates/pages/faq-page.mdx` |
| `reference` | `specification` / `changelog` | `snippets/templates/pages/reference-page.mdx` |
| `navigation` | `portal` / `landing` | `snippets/templates/pages/landing-frame-page.mdx` |
| `resource` | `knowledge-hub` | `snippets/templates/pages/overview-page.mdx` |

Read the selected template. Note its required sections and skeleton structure.

**Template gap flag**: Templates are minimal scaffolds — they define section order and some component examples, but do not fully specify component choices for every content type. Where the template doesn't specify, apply Phase 3 component rules. Flag any gap where no clear rule exists. Do not silently guess — state the decision made.

---

## Phase 2 — Section Structure Mapping

Map each approved content section onto the template structure:

| Content section | Template slot | Heading level | Component needed? |
|---|---|---|---|

**Heading levels**:
- `##` — top-level sections (primary steps, major concepts, main topics)
- `###` — sub-sections within a top-level section
- `####` — granular detail only; not for navigational sections; use sparingly

**Slot mapping by PAGE_TYPE**:

`instruction`: Overview → `## Overview` | Prerequisites → `## Prerequisites` | Steps → `## Steps` (inside `<Steps>`) | Validate → `## Validate` | Next → `## Next Steps`

`concept`: Context/framing → `## Overview` | How it works → `## [Concept name]` | Architecture → `## Architecture` | Key terms → `## Reference` (or inline) | Next → `## Next Steps`

`guide`: Outcome → `## Overview` | Main content → `## [Primary subject sections]` | Decision aid → `## [Which path / comparison]` | Next → `## Next Steps`

`tutorial`: Goal → `## Overview` | Prerequisites → `## Prerequisites` | Steps → `<Steps>` | What you built → `## What You Built` | Next → `## Next Steps`

`reference / specification`: Index → `## Overview` (or `<AccordionGroup>`) | Lookup sections → `## [Term / endpoint / flag]`

---

## Phase 3 — Component Selection

For each section, apply these rules to select the correct MDX component.

### Procedures and steps

`<Steps>` with `<Step title="">` for any sequential procedure with 2 or more steps.
Do not use numbered markdown lists for procedures — use `<Steps>`.
Do not nest `<Steps>` — flatten multi-stage procedures or split into sub-sections.

### Code

`<CodeGroup>` — multiple code variants (different languages, OS, or configs).
Single code fence — a single standalone example.
`<CodeBlock filename="" icon="">` — when filename or icon context matters.

**Rule**: Commands that answer the primary question on the page appear in body copy — not only inside accordions, notes, or card CTAs.

### Callouts

`<Note>` — forward-pointing supplementary context. Must not hedge or apologise for preceding content. ✅ "Orchestrator profiles update frequently — #orchestrators on Discord is the current source." ❌ "Note that this may change."
`<Tip>` — specific actionable shortcut or time-saver.
`<Warning>` — a real failure mode with real consequences. Not general caution.
`<Info>` — non-critical supplementary context; must not be on the critical reader path.

**Rule**: A section must not end with a `<Note>` that qualifies or hedges the section's content.

### Tables

Native markdown tables. No table should duplicate information in adjacent prose — if it does, delete the prose.

### Tabs

`<Tabs>` only when content genuinely splits by persona, OS, or configuration variant, and the reader can self-identify which tab applies.
The majority path is never behind a `<Tab>` — it is the page's default content.
Do not use `<Tabs>` for visual variety.

### Cards

`<Card title="" href="">` — next-step CTAs at the end of a page or major section.
`<CardGroup cols={2}>` — 2–4 equal-priority options.
Do not use Cards as navigation lists — that is the sidebar's function.

### Accordions

`<AccordionGroup><Accordion title="">` — supplementary detail the primary reader can skip.
High-value commands, critical steps, and primary CTAs must not be inside an `<Accordion>`.

### Quotes

`<Quote>` — definitions or strong value propositions at the top of a page (header CTA position only).

---

## Phase 4 — Frontmatter Completion

Produce the complete frontmatter block:

```yaml
---
title: [See title rules below]
sidebarTitle: [Shorter form if title > 3 words — 1–2 words. Omit if same as title.]
description: [One sentence, outcome-focused, ≤ 160 chars. See description rules below.]
pageType: [canonical: navigation / concept / tutorial / guide / instruction / reference / resource]
pageVariant: [if applicable: overview / specification / compendium / changelog / quickstart / setup / knowledge-hub]
audience: [canonical: gateway / orchestrator / developer / builder / delegator / community / founder]
persona: [audience-scoped persona token, or omit]
purpose: [canonical 15-value token]
lifecycleStage: [canonical 7-value token]
complexity: [beginner / intermediate / advanced]
veracityStatus: [verified / unverified / stale]
status: [current / draft / deprecated]
lastVerified: [YYYY-MM-DD]
---
```

⚠️ **Validator note**: `tools/lib/frontmatter-taxonomy.js` uses the old 12-type pageType schema. If the validator has not yet been updated, add a comment after the frontmatter block: `{/* REVIEW: new-schema frontmatter — will fail CI until frontmatter-taxonomy.js is updated */}`. Do not use old-schema values (`how_to`, `quickstart`, `landing`, `faq`, etc.) — produce canonical values and flag them.

### Title rules

- 1–3 words
- Concept-derived: use the domain's native terminology, not a generic tech substitute
  ✅ "Reward Cut" not "Earnings Percentage" | ✅ "Clearinghouse" not "Payment Settlement"
- Not gerund-first: "Build a Gateway" → "Gateway Build Guide" or restructure
- Not "Overview of", "Introduction to", "Understanding", "Guide to"
- Not a question form
- Not the section name repeated — the title distinguishes the page within its section

### Description rules

- One sentence, subject-first
- Opens with reader outcome or subject — not "This page" or "Overview of"
- ≤ 160 characters
- No announcement framing ("The three paths to...") — state the subject directly
- No conditional in sentence 1

---

## Phase 5 — Section Naming Check

For every `##` and `###` heading in the page, check against the naming rubric in `workspace/plan/active/CONTENT-WRITING/Prompts/section-naming.md`.

Key rules:

- **Domain anchor**: uses the domain's native term — not a generic substitute
  ✅ "Reward Cut" | ❌ "Earnings Parameter" | ✅ "Pipeline Throughput" | ❌ "Processing Speed"
- **Form**: imperative for instructional headings (`Configure the Pipeline`), noun phrase for reference/concept headings (`Pipeline Architecture`)
- **Generic structure words** — flag; allowed only where no specific term exists:
  `Overview`, `Introduction`, `Background`, `Summary`, `Details`, `More Information`

For each flagged heading: write the corrected version.

---

## Phase 6 — Render Validation

Before writing the final file:

- [ ] All component names exist in `snippets/components/`
- [ ] All `<Card href="">` and link values use valid repo paths — no absolute URLs for internal pages; unverifiable paths get `{/* REVIEW: verify link */}`
- [ ] No unclosed JSX tags
- [ ] No invalid prop types (e.g. string where boolean expected)
- [ ] All `{/* REVIEW: */}` flags from Pass A are present in the MDX output — they must not be removed
- [ ] `status: current` only if `veracityStatus: verified` and no REVIEW flags remain
- [ ] `status: draft` if any `{/* REVIEW: */}` flags remain unresolved
- [ ] UK English throughout — content, frontmatter labels, component text
- [ ] Heading hierarchy consistent: `##` before `###`, no skipped levels

---

## Output

**Before writing the file**, flag any decisions requiring human approval:
- Template gap (no rule covers a specific content type)
- Structural mismatch (content doesn't map cleanly to any template slot)
- Ambiguous component choice (two components both applicable)
- Heading naming tie

Do not silently apply a workaround. State the decision and the default chosen.

Then write the final `.mdx` file to PAGE_PATH:

```
---
[complete frontmatter]
---

{/* IMPORTS — list any component imports required */}

[MDX content with components applied]

{/* REVIEW flags carried through from Pass A */}
```

---

## Quality Gates

- [ ] Template matched and read before Phase 2
- [ ] Every content section mapped to a template slot with a heading level
- [ ] Component decisions follow Phase 3 rules — no primary content hidden in accordions
- [ ] Frontmatter complete: all required fields, canonical enum values only
- [ ] Validator note added if frontmatter-taxonomy.js not yet updated
- [ ] Title: 1–3 words, concept-derived, no banned forms
- [ ] Description: subject-first, ≤ 160 chars, no self-reference
- [ ] Section headings checked against naming rubric — all generic structure words resolved or flagged
- [ ] All `{/* REVIEW: */}` flags from Pass A present in output
- [ ] No MDX syntax errors or unclosed tags
- [ ] UK English throughout
- [ ] `status: draft` if any REVIEW flags remain; `status: current` only if all verified
