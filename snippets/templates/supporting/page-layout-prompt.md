# Page Layout Prompt

> **For AI agents and human authors.** Follow this process to lay out any page in the Livepeer docs.
> This prompt orchestrates the three-layer framework: classify → compose → build → validate.

---

## Inputs

Before starting, you need:

1. **Content brief or inventory** — what information this page must contain
2. **Audience** — who is the primary reader (developer, gateway-operator, orchestrator, delegator, community, general, everyone)
3. **Context** — where this page sits in the navigation (which tab, what comes before/after)

---

## Step 1: Classify the Page

Read `snippets/templates/page-classification.md` and run the content through the decision tree.

**Ask in order (first match wins):**

| Question | If YES → |
|---|---|
| Does this page ROUTE the reader to other pages? | `navigation` |
| Does this page EXPLAIN a mechanism or system? | `concept` (or `concept/overview` if section entry) |
| Does this page TEACH by building something? | `tutorial` |
| Does this page give PRACTICAL UNDERSTANDING of a system? | `guide` |
| Does this page get a TASK DONE step-by-step? | `instruction` (+ variant: `quickstart` or `setup`) |
| Does this page provide STRUCTURED LOOKUP data? | `reference` (+ variant: `specification`, `compendium`, or `changelog`) |
| Does this page present a CURATED COLLECTION? | `resource` |

**Output:** pageType (and variant if applicable)

**Verify:** Check the ambiguous-cases table in page-classification.md if unsure. A page serves ONE purpose — if it seems to serve two, it probably needs splitting.

---

## Step 2: Select the Template

Open the matching template from `snippets/templates/pages/gold-standard-templates/`:

| pageType | Template file |
|---|---|
| navigation | `navigation-template.mdx` |
| concept | `concept-template.mdx` |
| tutorial | `tutorial-template.mdx` |
| guide | `guide-template.mdx` |
| instruction | `instruction-template.mdx` |
| reference | `reference-template.mdx` |
| resource | `resource-template.mdx` |

**Read the template header comment** — it lists:
- Which blocks to compose from
- The gold standard page to emulate
- Dos and don'ts for this pageType

---

## Step 3: Compose from Blocks

For each zone in the template, pull the relevant block from `snippets/templates/pages/gold-standard/`:

### Zone 1: Header
- Read `header-cta.mdx` — choose the variant that matches the pageType
- concept → Quote | guide/instruction → Tip | quickstart → CodeBlock | navigation → Card
- This zone is optional — skip if the introduction does the job alone

### Zone 2: Introduction
- Read `introduction.mdx` — required on all types except navigation
- First sentence: what the reader will have/learn/accomplish (value-led)
- No preamble, no "this page covers", no qualifiers

### Zone 3: Body
Map the content inventory to section blocks:

| Content type | Block to use |
|---|---|
| Ordered steps to accomplish a task | `step-sequence.mdx` |
| Platform/mode variants of the same procedure | `multi-view-layout.mdx` |
| Explanation of how something works | `concept-explanation.mdx` |
| Reader needs to choose between options | `decision-matrix.mdx` |
| Side-by-side comparison of types/modes | `comparison-table.mdx` |
| Flag/parameter/config lookup | `config-reference.mdx` |
| Confirm something works | `verification-checklist.mdx` |
| Progressive disclosure (FAQ, troubleshooting, analogies) | `accordion-group.mdx` |
| What the reader needs before starting | `prerequisites.mdx` |

**Section ordering** — follow the reader journey:
1. Orient (what is this, why does it matter)
2. Learn (how does it work)
3. Do (steps, commands, configuration)
4. Optimise (tuning, advanced options)
5. Extend (next steps, related topics)

### Zone 4: Footer
- Sequential page → `next-step-cta.mdx` (single card pointing forward)
- Non-sequential page → `related-pages-footer.mdx` (2-3 lateral cards)
- Never use both on the same page

---

## Step 4: Fill the Content

For each section, follow the content guidance comments in the block file. Key rules:

### Voice
- Entity-led: the subject is the system, node, or action — never "this page" or "we"
- Fact-led paragraphs: lead with fact, end with fact — never end with a hedge
- UK English: organise, colour, recognised, favour
- Quantify or remove: "14 orchestrators" not "several orchestrators"
- No banned words: simply, just, easily, leverage, utilise, in order to, please note

### Section Headings
- Governing-concept labels only (1-3 words, Title Case)
- No questions, numbers, comparators, sentences, negation, first person
- Bad: "How Pools Work" → Good: "Pool Mechanics"
- Bad: "Three Setup Paths" → Good: "Deployment Types"

### Components
- All `<Tab>` elements must have `icon` prop
- All `<Accordion>` elements must have `icon` prop
- All code blocks must have `language`, `icon`, and `title` props
- Use `<CustomDivider />` between H2 sections (not bare `---`)
- Icons must come from the icon-map registry (`snippets/data/reference-maps/icon-map.jsx`)

### Data
- Never hardcode contract addresses, port numbers, CLI defaults, pricing values
- Import from `snippets/data/` — zero exceptions
- Use `.mdx` variables for prose interpolation, `.jsx` for complex objects

### Imports
Organise by category with section comments:
```
{/* COMPONENT IMPORTS */}
{/* DATA IMPORTS */}
{/* MDX PAGE IMPORTS */}
{/* MDX COMPOSABLE IMPORTS */}
```
- Root-absolute paths (`/snippets/...`) for shared resources
- Relative paths (`./views/...`) for page-local files only
- File extensions always included

---

## Step 5: Fill the Frontmatter

Every page requires these fields:

```yaml
---
title: "[Full Descriptive Title — SEO-aware, can be longer]"
sidebarTitle: "[1-3 words, Title Case, governing-concept]"
description: "[1-2 sentences — what this page PROVIDES, not what Livepeer is]"
pageType: "[navigation|concept|tutorial|guide|instruction|reference|resource]"
pageVariant: "[variant if applicable]"
purpose: "[orient|explain|choose|start|build|configure|operate|verify|troubleshoot|reference|update|learn|compare|integrate|optimize]"
audience: "[developer|gateway-operator|orchestrator|delegator|platform-builder|community|internal|general|everyone]"
keywords: ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"]
---
```

**Naming contract:**
- `sidebarTitle`: the concept name (what appears in nav) — 1-3 words
- `title`: the full descriptive title (what appears on page) — can be longer, SEO-aware
- Filename: kebab-case, matches `sidebarTitle` concept

---

## Step 6: Validate

Run through these checks before the page is done:

### Structure (checks.mdx category 4)
- [ ] Page serves single purpose (one pageType, one audience)
- [ ] Every H2 heading uses governing-concept label (no questions, numbers, comparators)
- [ ] Required sections present for this pageType (check page-classification.md)
- [ ] Forbidden content absent for this pageType
- [ ] Section order follows reader journey (orient → learn → do → optimise → extend)
- [ ] No dead ends — footer routes to next step or related pages
- [ ] No hardcoded data — all structured data imported from canonical source
- [ ] Max one major layout element (Tabs/Views/AccordionGroup) unless nested

### Layout (checks.mdx category 5)
- [ ] Components match approved palette for this pageType
- [ ] Import paths use correct convention (root-absolute for shared, relative for local)
- [ ] Imports organised with category comments
- [ ] CustomDivider used between H2 sections
- [ ] Badge colours follow standard palette (blue=Video, purple=AI, green=Dual, yellow=Linux)
- [ ] All Tabs, Accordions, code blocks have icon props

### Copy
- [ ] First sentence is value-led (no preamble)
- [ ] No "we/our" — entity-led voice
- [ ] No banned words (simply, just, easily, leverage, utilise, etc.)
- [ ] UK English spelling (organise, colour, recognised)
- [ ] All claims quantified (no "various", "several", "significant")
- [ ] Paragraphs lead and end with facts (no hedges)

### For instruction/tutorial pages additionally:
- [ ] Prerequisites listed before first step
- [ ] One action per step
- [ ] Every step has visible expected result
- [ ] Steps not inside Accordions
- [ ] Tabs not inside Steps
- [ ] Verification section at end with copy-able commands + expected output

---

## Quick Reference: pageType → Blocks

| pageType | Required blocks | Optional blocks |
|---|---|---|
| navigation | (none — pure card grid) | — |
| concept | introduction, concept-explanation, related-pages-footer | header-cta (Quote), accordion-group, comparison-table |
| tutorial | introduction, prerequisites, step-sequence, verification-checklist, related-pages-footer | header-cta |
| guide | introduction, related-pages-footer OR next-step-cta | header-cta (Tip), decision-matrix, concept-explanation, comparison-table |
| instruction | introduction, prerequisites, step-sequence OR multi-view-layout, verification-checklist | header-cta (Tip/Code), related-pages-footer |
| reference | introduction, config-reference OR accordion-group | related-pages-footer |
| resource | introduction | related-pages-footer |
