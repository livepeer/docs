# 01 — Page Anatomy & Structure Patterns

**Source agents**: A (references), B (live pages), D (UX framework)

---

## Universal 4-Zone Structure

Every page follows this anatomy. No exceptions.

### Zone 1: Header

**Contents**: Frontmatter + optional Header CTA

**Frontmatter fields** (from live page analysis):
- `title` (required) — full descriptive, Title Case, SEO-aware
- `sidebarTitle` (required) — 1-3 words, Title Case, governing-concept descriptor
- `description` (required) — 1-2 sentences, what the page PROVIDES (not what Livepeer is)
- `pageType` (required) — one of 7 canonical types
- `purpose` (required) — orient, explain, choose, start, build, configure, operate, verify, troubleshoot, reference, update, learn, compare, integrate, optimize
- `audience` (required) — developer, gateway-operator, orchestrator, delegator, platform-builder, community, internal, general, everyone
- `keywords` (required) — array, lowercase, 5-10 terms
- `lastVerified` (recommended) — ISO date
- `og:image` (recommended) — social preview image

**Header CTA options** (one, optional):
| CTA Type | Component | When to use |
|---|---|---|
| Definition | `<Quote>` | Concept pages — anchor the mental model |
| Clarity callout | `<Tip>` | Guide/instruction pages — orient the reader |
| CTA card | `<Card>` with `<CustomCardTitle>` | Landing/navigation — route immediately |
| Code start | `<CustomCodeBlock>` | Quickstart — show the first command |
| Mental model | `<AccordionGroup>` | Concept pages — let reader self-select entry point |

### Zone 2: Introduction

**Rules**:
- Value-led opening: "what you will have" not "what Livepeer is"
- No preamble — first sentence after title is immediately useful
- Decode jargon — if a term appears, define or link it
- Avoid qualifiers — no "various", "several", "significant"
- 1-3 paragraphs maximum

**Opening pattern by pageType**:
| pageType | Opening pattern |
|---|---|
| navigation | 1-sentence value prop → routing cards (no prose) |
| concept | Definition or analogy → scope statement → what the reader will understand |
| tutorial | Goal statement → what you'll build → time estimate |
| guide | System/problem statement → what this guide covers → who it's for |
| instruction | Task statement → what you'll accomplish → prerequisites inline or linked |
| reference | What's documented → how to use this page |
| resource | Collection scope → how items are organised |

### Zone 3: Body

**Section heading rules** (from naming rubric):
- Governing-concept labels only (name the concept, not the example)
- 1-3 words, Title Case
- No questions, no numbers, no comparators, no sentences, no negation, no first person
- Avoid generic descriptors ("Overview", "Introduction", "Basics") except as last resort
- Score ≥20/25 on 5-dimension rubric (precision, depth, stability, clarity, brevity)

**Section flow** (reader journey progression):
| Position | Stage | Reader state | Section type |
|---|---|---|---|
| 1 | Orient | "Where am I? What can I do?" | Start Here, Portal, Overview |
| 2 | Learn | "How does this work?" | Concepts, Definitions |
| 3 | Do | "Let me try / install it" | Quickstart, Setup, Steps |
| 4 | Optimise | "Make it better" | Config, Tuning, Strategy |
| 5 | Extend | "Do more complex things" | Advanced, Tutorials |

**Major layout element rule**: Max one major layout element per page (Tabs, Views, or large AccordionGroup) unless nested within the hierarchy.

### Zone 4: Footer

**Pattern**: Related Pages or Next Step CTA. Never both.

| Footer type | Component | When to use |
|---|---|---|
| Related Pages | `<CardGroup cols={2}>` with `<Card>` | Concept, guide, reference pages — lateral navigation |
| Next Step CTA | Single `<Card>` with arrow | Sequential pages (setup → configure → connect) |
| Card grid (no header) | `<Columns cols={2\|3}>` with `<Card>` | Portal/landing pages — grid IS the ending |
| No footer | — | Auto-generated indices, thin pointer pages |

**Related Pages rules**:
- 2-3 cards maximum
- One-sentence descriptions (≤10 words)
- Cards use `horizontal` layout with `arrow` prop

---

## H2 Flow Patterns by pageType

### navigation (portal/landing)
```
(HeroSectionContainer with Starfield — frame mode)
PortalHeroContent (title + subtitle)
PortalContentContainer
  PortalCardsHeader (with BlinkingIcon)
  Columns cols={3} → 6-9 Card components
```

### concept
```
H1 Title
  AccordionGroup (audience analogies — optional)
  CustomDivider middleText="Core Idea"
  ## Technical Definition (prose + optional table)
  CustomDivider
  ## How It Works (prose + diagram)
  CustomDivider middleText="Variations"
  ## Deployment/Configuration Types (table or accordion)
  CustomDivider
  ## Who Should Use This (optional)
  CustomDivider
  ## Related Pages (CardGroup cols={2})
```

### guide
```
H1 Title
  Intro callout (BorderedBox or Note)
  CustomDivider
  ## Requirements (StyledTable)
  CustomDivider
  ## Architecture/Overview (prose + diagram)
  CustomDivider
  ## Choose Your Path (Tabs or decision cards)
  CustomDivider
  ## Next Step (Card CTA)
```

### instruction (quickstart/setup)
```
H1 Title
  TipWithArrow (platform selector) — optional
  WidthCard (version badge) — optional
  CustomDivider
  ## Steps (Views → Tabs → StyledSteps)
  CustomDivider
  ## Verification (test commands + expected output)
  CustomDivider
  ## Related Pages (Columns cols={2} with Cards)
```

### tutorial
```
H1 Title
  Goal statement + time estimate
  ## What You'll Build (outcome description)
  ## Prerequisites (list or table)
  ## Step 1: [Action] (StyledSteps)
  ## Step 2: [Action]
  ...
  ## Verification (test + expected result)
  ## Next Steps (CardGroup)
```

### reference
```
H1 Title
  Tip (how to use this page)
  ## [Domain Group 1] (SearchTable or DynamicTable)
  ## [Domain Group 2]
  ...
  ## Related Pages (CardGroup) — optional
```

### overview
```
H1 Title
  Quote or definition paragraph
  CustomDivider middleText="Section Map"
  Columns cols={2} → Card components (topic routing)
  CustomDivider
  ## [Topic 1] (prose + optional table/diagram)
  ## [Topic 2]
  ...
  ## Related Pages (CardGroup)
```

### resource
```
H1 Title
  Intro (collection scope)
  ## [Category 1] (cards, tables, or embedded feeds)
  ## [Category 2]
  ...
```

---

## Import Organisation Pattern

All pages follow this import ordering with section comments:

```jsx
{/* COMPONENT IMPORTS */}
import { SearchTable } from '/snippets/components/wrappers/tables/SearchTable.jsx'
import { CustomDivider } from '/snippets/components/elements/spacing/Divider.jsx'

{/* DATA IMPORTS */}
import { contractAddresses } from '/snippets/data/contract-addresses/contractAddressesData.jsx'

{/* MDX PAGE IMPORTS */}
import DockerOffChainTab from './views/docker/dockerOffChainTab.mdx'

{/* MDX COMPOSABLE IMPORTS */}
import DockerSupport from './groups/docker/dockerSupport.mdx'
```

- Root-absolute paths (`/snippets/...`) for shared repo resources
- Relative paths (`./views/...`) for page-local colocated files only
- File extensions always included
