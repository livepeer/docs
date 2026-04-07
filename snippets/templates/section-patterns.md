# Section Patterns Reference

> **Layer 2 of the Page Layout Framework.** Each section archetype has a composable block in `pages/gold-standard/`.
> Read `page-classification.md` first to know which pageType you're building.

---

## How to Use

1. Classify the page using `page-classification.md` → get pageType
2. Find the pageType's template in `pages/gold-standard-templates/`
3. The template tells you which section blocks to compose
4. Copy the relevant blocks from `pages/gold-standard/` into your page
5. Fill in the content following the guidance comments in each block

---

## Section Archetypes

| # | Block | File | Primary pageTypes | Purpose |
|---|---|---|---|---|
| 1 | [Header CTA](#1-header-cta) | `header-cta.mdx` | All (optional) | Immediate orientation at page top |
| 2 | [Introduction](#2-introduction) | `introduction.mdx` | All except navigation | Value-led opening |
| 3 | [Prerequisites](#3-prerequisites) | `prerequisites.mdx` | instruction, tutorial | What the reader needs before starting |
| 4 | [Step Sequence](#4-step-sequence) | `step-sequence.mdx` | instruction, tutorial, guide | Ordered actions |
| 5 | [Decision Matrix](#5-decision-matrix) | `decision-matrix.mdx` | guide, concept, reference | Help reader choose |
| 6 | [Concept Explanation](#6-concept-explanation) | `concept-explanation.mdx` | concept, overview, guide | Explain how something works |
| 7 | [Config Reference](#7-config-reference) | `config-reference.mdx` | reference, instruction | Structured parameter lookup |
| 8 | [Comparison Table](#8-comparison-table) | `comparison-table.mdx` | concept, guide, reference | Side-by-side evaluation |
| 9 | [Verification Checklist](#9-verification-checklist) | `verification-checklist.mdx` | instruction, tutorial | Confirm it works |
| 10 | [Accordion Group](#10-accordion-group) | `accordion-group.mdx` | concept, reference | Progressive disclosure |
| 11 | [Multi-View Layout](#11-multi-view-layout) | `multi-view-layout.mdx` | instruction (quickstart/setup) | Platform/mode variants |
| 12 | [Related Pages Footer](#12-related-pages-footer) | `related-pages-footer.mdx` | All except navigation | Lateral navigation |
| 13 | [Next Step CTA](#13-next-step-cta) | `next-step-cta.mdx` | instruction, guide | Sequential forward link |

---

## Block Requirements

Every block file contains exactly 4 elements:

1. **When to use / when not to use** — guidance at the top as HTML comments
2. **MDX skeleton** — real component imports and structure
3. **Component slots** — showing which components go where
4. **Content guidance** — HTML comments explaining what to write and rules to follow

---

## Archetype Details

### 1. Header CTA
**File**: `pages/gold-standard/header-cta.mdx`
**Purpose**: Optional element between frontmatter and introduction for immediate orientation.
**Variants**: Quote (definition), Tip (guidance), Card (route), CodeBlock (start), AccordionGroup (self-select)
**When**: Recommended for concept (Quote), instruction (Tip/Code), navigation (Card). Optional on all others.
**When not**: Never required. Skip if the introduction does the job alone.

### 2. Introduction
**File**: `pages/gold-standard/introduction.mdx`
**Purpose**: Value-led opening — what the reader will have, not what Livepeer is.
**Structure**: 1-3 paragraphs. First sentence immediately useful.
**When**: Required on all pageTypes except navigation.
**Rules**: No preamble, decode jargon, no qualifiers, entity-led voice (never "this page covers").

### 3. Prerequisites
**File**: `pages/gold-standard/prerequisites.mdx`
**Purpose**: What the reader needs before starting.
**Variants**: Simple list (<5 items) or StyledTable (Requirement | Why | How to get it).
**When**: Required on instruction, tutorial. Optional on guide.
**Rules**: Always BEFORE steps. Never inside steps or Accordions.

### 4. Step Sequence
**File**: `pages/gold-standard/step-sequence.mdx`
**Purpose**: Ordered actions to accomplish a task.
**Structure**: StyledSteps with StyledStep children. Each step: title + prose + code + result.
**When**: Primary on instruction, tutorial. Sometimes in guide.
**Rules**: One action per step. Every step has visible result. Accordions for optional depth inside steps. Action ≥ explanation.

### 5. Decision Matrix
**File**: `pages/gold-standard/decision-matrix.mdx`
**Purpose**: Help reader choose between options.
**Variants**: DynamicTable (3+ options), CardGroup (2-3 routes), StyledTable (comparison matrix).
**When**: Primary on guide. Sometimes in concept, reference.
**Rules**: Equal visual weight. Recommendation after table. No "vs" in headings.

### 6. Concept Explanation
**File**: `pages/gold-standard/concept-explanation.mdx`
**Purpose**: Explain how something works.
**Structure**: Prose + diagram (Mermaid or ScrollableDiagram) + optional Note.
**When**: Primary on concept, overview. Sometimes in guide.
**Rules**: Concrete before abstract. Diagram required — no diagram means too abstract. Layered: overview first, detail in Accordions.

### 7. Config Reference
**File**: `pages/gold-standard/config-reference.mdx`
**Purpose**: Structured lookup of flags, options, parameters.
**Variants**: Inline (≤5 flags, AccordionGroup) or dedicated (>5, SearchTable/DynamicTable).
**When**: Primary on reference. Sometimes in instruction, guide.
**Rules**: Grouped by function (not alphabetical). Searchable when >20.

### 8. Comparison Table
**File**: `pages/gold-standard/comparison-table.mdx`
**Purpose**: Side-by-side evaluation.
**Structure**: StyledTable variant="bordered" with Axis | Options | What it decides columns.
**When**: concept (deployment types), guide (setup options), reference (features).

### 9. Verification Checklist
**File**: `pages/gold-standard/verification-checklist.mdx`
**Purpose**: Confirm something works after setup or build.
**Structure**: StyledSteps with test commands + expected output.
**When**: Required on instruction (setup). Recommended on tutorial.
**Rules**: Every check has expected output. Commands are copy-able.

### 10. Accordion Group
**File**: `pages/gold-standard/accordion-group.mdx`
**Purpose**: Progressive disclosure for multiple related items.
**Variants**: Audience self-select, FAQ, Troubleshooting.
**When**: concept (analogies), reference/compendium (FAQ, troubleshooting), guide (optional detail).
**Rules**: Supplementary NEVER contains Steps. Main flow completable without opening. Every Accordion has icon prop.

### 11. Multi-View Layout
**File**: `pages/gold-standard/multi-view-layout.mdx`
**Purpose**: Same content across 2+ platform/mode variants.
**Structure**: Views → Tabs → Steps (fixed nesting hierarchy).
**When**: instruction/quickstart with platform variants.
**Rules**: Max 3 dimensions. 4+ = split pages. Steps never inside Accordions. Tabs never inside Steps.

### 12. Related Pages Footer
**File**: `pages/gold-standard/related-pages-footer.mdx`
**Purpose**: Route to next logical steps or related content.
**Structure**: CardGroup cols={2} with Card children (title, icon, href, horizontal, arrow).
**When**: All pageTypes except navigation.
**Rules**: 2-3 cards max. One-sentence descriptions (≤10 words).

### 13. Next Step CTA
**File**: `pages/gold-standard/next-step-cta.mdx`
**Purpose**: Direct to the single next action in a sequence.
**Structure**: Single Card with arrow, icon, and guidance text.
**When**: Sequential pages (prepare → install → configure → connect).
**Rules**: One card only. Clear action verb in title. Use INSTEAD of Related Pages footer, never both.

---

## Section Ordering by pageType

| pageType | Section order |
|---|---|
| navigation | Hero → Card grid (no other sections) |
| concept | Header CTA (Quote) → Introduction → Concept Explanation(s) → Comparison Table → Accordion Group → Related Pages Footer |
| tutorial | Introduction → Prerequisites → Step Sequence(s) → Verification Checklist → Related Pages Footer |
| guide | Header CTA (Tip) → Introduction → Decision Matrix or Concept Explanation → Comparison Table → Next Step CTA or Related Pages Footer |
| instruction | Header CTA (Tip/Code) → Introduction → Prerequisites → Multi-View Layout or Step Sequence → Verification Checklist → Related Pages Footer |
| reference | Introduction → Config Reference or Accordion Group → Related Pages Footer (optional) |
| resource | Introduction → Content sections (data-driven) → Related Pages Footer (optional) |

---

## Naming Rules for Section Headings

All section headings follow the naming rubric (see research `03-section-patterns.md` for full methodology).

**Hard rules**:
- Governing-concept labels only (not literal or example labels)
- 1-3 words, Title Case
- No questions, numbers, comparators, sentences, negation, first person
- Score ≥20/25 on 5-dimension rubric
