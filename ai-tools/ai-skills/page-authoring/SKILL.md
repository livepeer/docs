---
name: page-authoring
version: "1.1"
description: >-
  Canonical guidance for authoring new v2 documentation pages. Covers frontmatter, page-type and purpose alignment, MDX/component constraints, and repo-backed validation without collapsing copy quality into rigid templates.
invoke_when:
  - "write a new v2 docs page"
  - "draft mdx content for livepeer docs"
  - "apply repo authoring rules to a docs page"
---

# SKILL: Page Authoring for Livepeer v2 Docs

Use this skill for page structure, frontmatter, MDX constraints, and repo-backed authoring rules.
Use `docs-copy` skills for prose decisions. This file does not assume every editorial preference is auto-enforced.

<CustomDivider />

## Enforcement Model

The authoring contract has three tiers:

- **Hard rules**: parser/build/import/frontmatter issues that should fail validation
- **Warning-only guidance**: defaults that usually improve docs, but may allow accurate exceptions
- **Manual review**: judgement calls that need product, research, or editorial sign-off

Do not treat all guidance here as a pre-commit blocker.

<CustomDivider />

## Hard Rules

### Imports and MDX constraints

- Use absolute snippet imports such as `/snippets/components/...`
- Include file extensions for local imports: `.jsx` or `.js`
- Do not import Mintlify globals like `Card`, `Tabs`, `Accordion`, `Note`, `Steps`, or `Columns`
- Do not import React hooks in MDX
- Keep JSX composition MDX-safe; pass data through MDX rather than chaining JSX-to-JSX imports

### Styling constraints

- Do not use inline styles in MDX
- Do not hardcode hex colours in MDX
- Do not import deprecated `ThemeData`
- Do not rely on external CSS files for page-level MDX content

### Frontmatter minimums

Every routable page should include:

```yaml
---
title: 'Full page title'
sidebarTitle: 'Short nav label'
description: >-
  One-sentence reader outcome or page-value statement.
keywords:
  - livepeer
  - [topic-specific keywords]
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': Livepeer Docs social preview image
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
pageType: guide
audience: orchestrator
purpose: orientation
status: current
lastVerified: YYYY-MM-DD
---
```

Canonical `pageType` and `purpose` values live in:

- `tools/lib/frontmatter-taxonomy.js`

Do not hardcode your own enum list in local docs or prompts.

### Accuracy boundaries

- Do not fabricate metrics
- Do not imply certainty where product or protocol truth is unsettled
- Do not let copy cleanup override factual correctness

<CustomDivider />

## Warning-Only Guidance

### Frontmatter intent

- `description` should state the reader outcome, not announce page contents
- `purpose` should describe the page job, not repeat a vague label such as `guide`
- Prefer canonical purpose values over deprecated aliases even when aliases are still normalised

### Prose and visuals

- Explain before you show: prose before diagram, table, or code block
- Use visuals to compress complexity, not replace the explanation
- Prefer one clear section job over mixed-purpose sections

### Component usage

- Prefer governed snippets/components before inventing new presentation patterns
- Use cards for navigation, tables for exact comparisons, steps for sequential task completion, and accordions for optional depth
- If styling pressure is high, solve it in a component primitive rather than in page-level MDX
- **Never stack consecutive tables.** Two StyledTables back-to-back is a layout failure. Use tabs, accordions, cards, bordered boxes, or prose to break up tabular content. The component library has over 100 components - use them.

### Terminology and context

- Define coined terms and Livepeer-specific shorthand before relying on them in headings
- Assume domain context based on `audience`, but do not assume the reader already knows a newly introduced internal label
- If terminology is disputed, route to research/SME review instead of inventing a local term

<CustomDivider />

## PageType + Purpose Defaults

`pageType` controls the surface form. `purpose` refines the reader job.
The pair should guide structure, but not force formulaic prose.

| `pageType` | Common `purpose` values | Default opening and flow | Avoid by default |
|---|---|---|---|
| `landing` | `landing`, `orientation` | Route the reader, explain entry choices, show next paths | Deep internals before routing |
| `overview` | `overview`, `orientation`, `evaluation` | Define the thing, explain why it matters, then expand | Jumping into setup or flags |
| `concept` | `concept`, `orientation`, `evaluation`, `decision` | State the core idea or decision pressure, then the mechanism | Step-by-step setup at the top |
| `tutorial` / `quickstart` | `tutorial`, `setup` | Prerequisites, intended outcome, ordered steps, verification | Long conceptual preambles |
| `how_to` / `guide` | `orientation`, `evaluation`, `setup`, `operations`, `decision`, `reference` | Start with the job, fit, or decision, then move into steps/specs/mechanics as needed | Mechanism-first openings when the reader needs a decision first |
| `reference` | `reference` | Exact value, signature, flag, or schema first | Narrative marketing framing |
| `troubleshooting` | `troubleshooting`, `operations` | Symptom, checks, fix, escalation path | Broad concept exposition |
| `faq` | `faq` | Question-led scan surface with canonical links | Long narrative blocks |

Use the taxonomy helpers and quality checks to catch invalid or mismatched pairs.

<CustomDivider />

## Audience Defaults

Use `audience` to tune assumptions, not to excuse undefined jargon.

| `audience` | Safe default |
|---|---|
| `general` | Define all non-obvious terms |
| `developer` | Assume code/API literacy, not deep Livepeer internals |
| `gateway-operator` | Assume infra operation context; still define coined labels |
| `orchestrator` | Assume node/operator context; still define new deployment shorthand |
| `delegator` | Assume staking context, not `go-livepeer` operational detail |

<CustomDivider />

## Recommended Page Skeleton

Use this as a starting pattern, not a rigid template:

```mdx
---
[frontmatter]
---

[imports]

<CustomDivider />                           ← opening divider (always present, always first visual element)

[optional media: video embed, hero image, or bordered callout — placed ABOVE intro prose]

[brief prose opening: what this page helps the reader do, decide, or understand]

## [First major section]                    ← NO divider between intro and first H2

[prose]

[diagram, table, or code block only if it reduces complexity]

[follow-up interpretation or next action]

<CustomDivider />                           ← between major sections (optional, use for visual breathing room)

## [Next major section]

[repeat as needed]

<CustomDivider />

## Related pages

[navigation cards or links only when they help the next move]
```

### CustomDivider placement rules

1. **ONE opening divider** after imports, before any content. Always present.
2. **NO second divider before the first H2.** The intro text flows directly into the first heading. Never place a `middleText` divider between the intro and the first section.
3. **Between major sections** (optional) for visual separation. Use plain `<CustomDivider />` or `<CustomDivider middleText="..." />` between H2 blocks when the topic shift warrants it.
4. **Before Related Pages** - always place a divider before the closing Related Pages / CardGroup section.
5. **Media and callouts above intro prose.** If the page has a video embed, bordered callout, or visual asset in the intro area, place it AFTER the opening divider and BEFORE the intro prose paragraph.

### What matters

- The opening matches the declared page job
- Visuals support the prose instead of replacing it
- Related links help the next decision or action
- The opening divider is the only divider before the first H2

<CustomDivider />

## Mermaid and Visual Rules

- Add prose before diagrams
- Use governed wrappers such as `ScrollableDiagram` when the asset would exceed viewport bounds
- Keep diagram labels readable and define non-obvious labels before the visual appears
- If a diagram exists only to restate prose, remove it

<CustomDivider />

## Pre-Writing Process (mandatory for reviews and rewrites)

Before writing or rewriting any page, complete these steps in order. Do not write content until Step 4.

### Step 1: Identify the reader's real question (5 Whys)

Ask the surface question, then ask WHY five times. The first attempt is always too generic.

```
1. [Surface question] → WHY? →
2. [Deeper] → WHY? →
3. [Deeper] → WHY? →
4. [Deeper] → WHY? →
5. [Deeper] → WHY? →
6. [Real question — this is what the page answers]
```

**Success output**: a single sentence starting with "The reader is on this page because..." that is specific to their journey position. If it could apply to any page, it is too vague.

### Step 2: Build tier questions

From the real question, ask 5 more tier questions. Each becomes a page section.

| Tier | Purpose | Template |
|------|---------|----------|
| 0 | Opening — answer immediately | The options or the answer |
| 1 | Why do these options/answers exist? | Minimum 5 value props per option across financial, operational, risk, time, complexity, flexibility |
| 2 | What are the risks or tradeoffs? | Per option |
| 3 | What does the reader need? | Per option |
| 4 | Which fits the reader's situation? | Situation-to-option mapping |
| 5 | What happens next? | Links to detail pages |

**Rules**:
- Minimum 5 value props per option. One value prop repeated is anchoring. Challenge it.
- No explicit questions as prose ("Do you want X?"). State situations and options directly.
- Tier 0 answers the reader's question in the first 3 lines. No preamble.

### Step 3: Map H2 structure to tier questions

- Tier 0 = opening prose (no H2)
- Tiers 1-4 = H2 sections
- Tier 5 = Related Pages / Next Steps

Every H2 must map to a tier question. If an H2 does not answer a tier question, remove it. If a tier question has no H2, add one.

Check: does the page intro/Tip promise match what the sections deliver? If the Tip lists 4 decisions, the page must have sections for all 4.

### Step 4: Write — then self-check

Write the draft following all rules in this skill. Then verify before presenting:

- [ ] Opening answers the real question within 3 lines
- [ ] Every H2 maps to a tier question
- [ ] No H2 exists without a tier question
- [ ] Intro/Tip promise matches section delivery
- [ ] Minimum 5 value props per option (for decision pages)
- [ ] Prose under 400 words (for overview/routing pages)
- [ ] Reference tables at end, not beginning
- [ ] Decision-critical info visible without clicking tabs/accordions
- [ ] No consecutive StyledTables
- [ ] All terms from glossary
- [ ] ONE opening CustomDivider, NONE before first H2
- [ ] Entity-led voice, no explicit questions as prose
- [ ] Draft saved to `_workspace/drafts/`, live page not touched

Present to human: state the real question, the tier table, and draft location. Do NOT paste draft content inline.

<CustomDivider />

## Enforced Anti-Patterns

These patterns are banned. They are the most common failures in page reviews.

| Anti-pattern | What it looks like | The rule |
|-------------|-------------------|---------|
| **Reference before reasoning** | Page opens with a large comparison table | Decision support first. Reference tables at the END. |
| **Single value prop anchoring** | Same reason given for an option across every response | Minimum 5 distinct value props per option, across different dimensions. |
| **Preamble before answer** | Definitions, context, or framing before the actual options | Answer the reader's question in the first 3 lines. Context supports, never precedes. |
| **Explicit questions as prose** | "Do you want full control?" as a section framing | State the option directly. Never use questions to frame decisions. |
| **Lazy question framing** | "What are my options?" as the page purpose | Run 5 Whys. The real question is always more specific than the first attempt. |
| **Hidden info in tabs** | Decision-critical content behind a tab click | Decision info must be visible without interaction. Tabs for reference variants only. |
| **Flowcharts as decision aids** | Mermaid tree diagramming page structure | Flowcharts for technical processes. Prose for "which should I choose?" decisions. |
| **Hardware instead of architecture** | "Uses NVENC" without explaining the protocol design reason | Explain the architecture reason. Hardware is a secondary detail. |
| **Invented terminology** | New terms without checking glossary, v1, or community usage | Glossary is source of truth. Check before using any term. |
| **Dismissing legitimate options** | "Off-chain is testing only" | Acknowledge all production-viable configurations. |
| **Consecutive tables** | Two or more StyledTables stacked with no visual break | Never stack tables. Use tabs, accordions, cards, bordered boxes, or prose between them. |
| **Overwriting live pages** | Writing directly to the live .mdx file | Draft in `_workspace/drafts/`. Never touch the live file until human approves. |

<CustomDivider />

## Manual Review Required

These checks need human judgement:

- whether the chosen `purpose` actually matches the page
- whether the opening order is right for this reader and this claim
- whether terminology is canonical or needs research/SME confirmation
- whether a deliberate exception should override the default structure heuristic

Document exceptions instead of hiding them behind generic prose.

<CustomDivider />

## Validation

Use repo-backed validation rather than inventing local checks:

```bash
node tests/unit/frontmatter-taxonomy.test.js
node tests/unit/quality.test.js --files <file-list>
node tests/unit/mdx.test.js --files <file-list>
node tests/unit/style-guide.test.js --files <file-list>
node tests/run-all.js --staged --skip-browser
```

For copy-specific heuristics, run the docs-copy validators as a separate pass.
