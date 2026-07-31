---
name: page-authoring
version: "1.0"
description: >-
  Comprehensive skill for writing new v2 documentation pages. Covers content standards, UX patterns, component usage, journey mapping, frontmatter, Mermaid theming, page type templates, and all repo-enforced rules.
invoke_when:
  - "write a new v2 docs page"
  - "draft mdx content for livepeer docs"
  - "apply repo authoring rules to a docs page"
---

# SKILL: Page Authoring for Livepeer v2 Docs

This skill contains everything needed to write a new MDX page in the Livepeer v2 documentation. It covers content strategy, UX patterns, component library usage, frontmatter standards, journey mapping, and hard repo rules. All rules are enforced by pre-commit hooks and tests.

<CustomDivider />

## 1. HARD RULES (Will Break Build or Fail Review)

### Language
- **UK English spelling** throughout. Use "colour" not "color", "behaviour" not "behavior", "organise" not "organize", "licence" (noun) not "license", "optimise" not "optimize", "catalogue" not "catalog", "centre" not "center", "programme" not "program" (except in computing context where "program" is correct), "analyse" not "analyze", "defence" not "defense", "travelled" not "traveled", "modelling" not "modeling", "labelled" not "labeled".
- Validated by `npm run test:spell` (UK English dictionary).
- Exception: code identifiers, CLI flags, and proper nouns retain their original spelling (e.g. `CenteredContainer`, `--color` flag).

### Typography
- **NO em dashes** ( --- ) anywhere in English docs. Use hyphens (-) or rewrite the sentence. This is a repo violation.
- **NO en dashes** with spaces. Use hyphens.
- **NO curly/smart quotes**. Use straight quotes only.

### Styling
- **ZERO inline styles in MDX files**. Use component primitives for all visual needs.
- **NO hardcoded hex colours**. Use `var(--lp-*)` CSS Custom Properties in JSX components.
- **NO ThemeData imports**. This pattern is deprecated.
- **NO Tailwind classes in MDX**. Only within JSX components.
- **NO external CSS files**. Styles live inside `.jsx` component files.

### Imports
- **Absolute paths only**. All imports from `/snippets/components/...`.
- **File extensions required**. Always include `.jsx` or `.js`.
- **Do NOT import Mintlify globals**. `Card`, `Tabs`, `Tab`, `AccordionGroup`, `Accordion`, `Note`, `Warning`, `Tip`, `Info`, `Danger`, `Steps`, `Step`, `Columns` are all globally available. Never import them.
- **Do NOT import React hooks**. `useState`, `useEffect`, etc. are globally available.
- **JSX files cannot import other JSX files**. Data must flow through MDX.

### Content Accuracy
- **On-chain vs off-chain = PAYMENT MODE**. This describes how the gateway handles payments, NOT the workload type. Never write "off-chain AI gateway" or tie on-chain/off-chain to video vs AI. All compute is off-chain on GPU hardware.
- **"Dual" = workload configuration**. Running both video and AI from one node. NOT a third payment mode. Never present it as a third column alongside on-chain and off-chain.
- **No speculative language** unless explicitly labelled as speculative.
- **No fabricated metrics**. Examples must be labelled "illustrative".
- **All claims traceable** to primary sources (GitHub, contracts, explorers, governance proposals, official announcements).

### Frontmatter (Required Fields)
Every page MUST have these fields:

```yaml
---
title: 'Full page title'
sidebarTitle: 'Short nav label'
description: >-
  One-sentence description for SEO and social preview (max ~160 chars).
keywords:
  - livepeer
  - [topic-specific keywords]
'og:image': /snippets/assets/site/og-image/en/[section].png  # or fallback.png
'og:image:alt': Livepeer Docs social preview image for [Section]
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
pageType: [overview|concept|tutorial|how_to|reference|faq|troubleshooting|changelog|glossary|landing]
audience: [gateway-operator|orchestrator|developer|delegator|general]
status: current
lastVerified: YYYY-MM-DD
---
```

Optional but recommended: `purpose`, `tag` (for "Start Here" badges).

<CustomDivider />

## 2. PAGE TYPES AND THEIR PURPOSE

Each page type answers a specific question. Never mix concerns.

| Type | Question it answers | Stage | Must include | Must exclude |
|------|-------------------|-------|--------------|--------------|
| **Landing** | Where do I go? | Entry | Value prop, visual navigation cards, entry path choosers | Deep technical explanation, setup steps |
| **Overview/Role** | What IS this? | Orienting | Identity, evolution, sub-roles, mental model analogies, network diagrams | Installation steps, pricing depth |
| **Concept** | How does it WORK? | Evaluating | Internals, layer position, request flow, components, system interactions | Installation commands, operational playbooks |
| **Tutorial** | How do I start? | Activating | Prerequisite checklist, minimum setup, first-job objective, verification | Every edge case, deep background |
| **How-to** | How do I do X? | Operating | Step-by-step workflows, expected outcomes, config examples | Conceptual marketing copy |
| **Reference** | What are the exact details? | Any | Flags, commands, parameters, examples, contract addresses, schemas | Setup walkthroughs, conceptual framing |
| **FAQ** | Quick answers | Any | Concise Q&A, links to canonical pages | Long explanations |
| **Troubleshooting** | Why is this broken? | Operating | Common issue, check, fix format | Broad conceptual explanation |

### The 4-Page Concepts Pattern

Every tab (Gateways, Orchestrators) has 4 concepts pages:

| Page | Question | What belongs here |
|------|----------|------------------|
| **Role** | What IS it? | Identity, evolution, sub-roles (technical/business/network/governance), mental model analogies, "who should care" |
| **Capabilities** | What can it DO? | Workload types, supported features, orchestrator/gateway selection mechanics, "what it does NOT do" boundary |
| **Architecture** | How does it WORK? | Layer position, system interactions, request flow lifecycle, internal components, software references |
| **Economics** | Should I CARE? | Revenue streams, cost structure, payment flow, pricing configuration, case studies, "why operate" motivation |

<CustomDivider />

## 3. UX PATTERNS (Gold Standard)

The approved page structure follows this pattern, derived from the gateway role.mdx which was explicitly approved as "excellent UX".

### Page Skeleton

```mdx
---
[frontmatter]
---

import { LinkArrow } from '/snippets/components/primitives/links.jsx'
import { StyledTable, TableRow, TableCell } from '/snippets/components/layout/tables.jsx'
import { CustomDivider } from '/snippets/components/primitives/divider.jsx'
import { ScrollableDiagram } from '/snippets/components/content/zoomableDiagram.jsx'
import { CenteredContainer, BorderedBox } from '/snippets/components/layout/containers.jsx'

<CenteredContainer style={{ width: '90%' }}>
  <Tip>[One sentence: the single most important thing the reader should know]</Tip>
</CenteredContainer>

---

[2-3 sentence narrative intro establishing context and scope]

[Mermaid diagram if the page needs an evolution timeline or overview visual]

<CustomDivider middleText="[Section Label]" />

## [First Major Section]

[Prose explanation - ALWAYS prose before any visual]

[Visual: StyledTable, Mermaid diagram, or code block]

[Prose after visual explaining implications]

<CustomDivider middleText="[Section Label]" />

## [Second Major Section]

[Continue pattern: prose -> visual -> prose]

<CustomDivider />

## Related Pages

<CardGroup cols={2}>
  <Card title="[Title]" icon="[icon]" href="[path]" arrow horizontal>
    [1-2 sentence description]
  </Card>
  [3 more cards]
</CardGroup>
```

### Section Break Pattern
- Use `<CustomDivider middleText="Label" />` between every major section
- The `middleText` should be 1-3 words naming the section's topic
- Final divider before Related Pages uses no middleText: `<CustomDivider />`

### Opening Hook Pattern
- Always start with `<CenteredContainer>` + `<Tip>` containing the page's core value prop
- Follow with `---` horizontal rule
- Then 2-3 sentences of narrative prose (evolution, context, scope)
- Optionally follow with a Mermaid timeline or overview diagram
- Then cross-reference links: "For X, see [Page]. For Y, see [Page]."

### Closing Pattern
- Always end with `## Related Pages` inside a `<CardGroup>`
- Use `cols={2}` for concept pages (4 cards)
- Use `cols={3}` for reference/navigator pages (6 cards)
- Every card needs `arrow` and `horizontal` props plus a 1-2 sentence description

### Prose-First Rule
- NEVER place a diagram, table, or code block without preceding prose
- Every visual must be introduced by at least one sentence explaining what it shows
- After complex visuals, add a sentence or two explaining the implications
- Pattern: **Explain -> Show -> Interpret**

<CustomDivider />

## 4. COMPONENT USAGE GUIDE

### When to Use Each Component

| Need | Component | Import path |
|------|-----------|-------------|
| Section dividers | `CustomDivider` | `/snippets/components/primitives/divider.jsx` |
| Data tables | `StyledTable`, `TableRow`, `TableCell` | `/snippets/components/layout/tables.jsx` |
| Cross-references | `LinkArrow` | `/snippets/components/primitives/links.jsx` |
| Zoomable diagrams | `ScrollableDiagram` | `/snippets/components/content/zoomableDiagram.jsx` |
| Centred content | `CenteredContainer` | `/snippets/components/layout/containers.jsx` |
| Bordered callout boxes | `BorderedBox` | `/snippets/components/layout/containers.jsx` |
| Sequential steps | `StyledSteps`, `StyledStep` | `/snippets/components/layout/steps.jsx` |
| Images | `Image` | `/snippets/components/primitives/image.jsx` |
| Videos | `YouTubeVideo` | `/snippets/components/content/video.jsx` |

### Mintlify Globals (Do NOT Import)
These are available without imports:
- `<Card>`, `<CardGroup>`
- `<Tabs>`, `<Tab>`
- `<AccordionGroup>`, `<Accordion>`
- `<Note>`, `<Warning>`, `<Tip>`, `<Info>`, `<Danger>`
- `<Steps>`, `<Step>`
- `<Columns>`

### Component Patterns by Use Case

**Binary comparison (on-chain vs off-chain, two options):**
```mdx
<Tabs>
  <Tab title="Option A">
    [Bullet list with feature specs]
  </Tab>
  <Tab title="Option B">
    [Bullet list with feature specs]
  </Tab>
</Tabs>
```

**Detailed spec comparison:**
```mdx
<StyledTable variant="bordered">
  <thead>
    <TableRow header>
      <TableCell header>Factor</TableCell>
      <TableCell header>Option A</TableCell>
      <TableCell header>Option B</TableCell>
    </TableRow>
  </thead>
  <tbody>
    <TableRow>
      <TableCell>**Row label**</TableCell>
      <TableCell>Value</TableCell>
      <TableCell>Value</TableCell>
    </TableRow>
  </tbody>
</StyledTable>
```

**Mental model analogies (persona routing):**
```mdx
<AccordionGroup>
  <Accordion title="From a Cloud Background?" icon="cloud">
    [Prose analogy]
    <ScrollableDiagram title="[Analogy Name]" maxHeight="400px">
      [Mermaid diagram]
    </ScrollableDiagram>
  </Accordion>
  <Accordion title="From an Ethereum Background?" icon="coin">
    [Prose analogy + diagram]
  </Accordion>
  <Accordion title="Neither?" icon="wrench">
    [Prose analogy + diagram]
  </Accordion>
</AccordionGroup>
```

**Multiple operator/business models:**
```mdx
<AccordionGroup>
  <Accordion title="Model name (benefit)" icon="server">
    [Description]
    **Who:** [Target persona]
    **Revenue model:** [How they earn]
  </Accordion>
</AccordionGroup>
```

**Sequential journey/process:**
```mdx
<StyledSteps iconColor="#2d9a67" titleColor="var(--accent)">
  <StyledStep title="Step Name" icon="icon-name">
    [Description with LinkArrow cross-references]
  </StyledStep>
</StyledSteps>
```

**Cross-references (inline):**
```mdx
See <LinkArrow href="/v2/path/to/page" label="Page Name" newline={false} /> for details.
```

**Clarification callouts:**
```mdx
<Note>
[Clarifying information that prevents common misunderstanding]
</Note>

<Warning>
[Constraint or limitation the reader must know]
</Warning>
```

<CustomDivider />

## 5. MERMAID DIAGRAM STANDARDS

### Required Theme Block
Every Mermaid diagram MUST use this exact theme configuration:

```
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#1a1a1a', 'primaryTextColor': '#fff', 'primaryBorderColor': '#2d9a67', 'lineColor': '#2d9a67', 'secondaryColor': '#0d0d0d', 'tertiaryColor': '#1a1a1a', 'background': '#0d0d0d', 'fontFamily': 'system-ui' }}}%%
```

### Colour Classes for Dual Pipelines
When showing video vs AI distinction:

```
classDef default fill:#1a1a1a,color:#fff,stroke:#2d9a67,stroke-width:2px
classDef video fill:#1a1a1a,color:#fff,stroke:#3b82f6,stroke-width:2px
classDef ai fill:#1a1a1a,color:#fff,stroke:#a855f7,stroke-width:2px
```

### Subgraph Styling
```
style SubgraphName fill:#0d0d0d,stroke:#2d9a67,stroke-width:1px
```

### Diagram Types by Content

| Content need | Diagram type | When to use |
|-------------|-------------|-------------|
| Evolution/history | `timeline` | Role pages, showing how a concept evolved |
| System layers | `flowchart TB` | Architecture pages, showing layer position |
| Request lifecycle | `sequenceDiagram` | Architecture pages, showing message flow |
| Decision tree | `flowchart TD` | Navigator pages, helping reader choose a path |
| Payment/revenue flow | `flowchart LR` | Economics pages, showing money movement |
| Comparison | `flowchart LR` with subgraphs | Analogies, showing parallel structures |

### ScrollableDiagram Wrapper
Use for any Mermaid that might exceed viewport height:

```mdx
<ScrollableDiagram title="Descriptive Title" maxHeight="600px">
  [Mermaid diagram block goes here]
</ScrollableDiagram>
```

<CustomDivider />

## 6. JOURNEY MAPPING AND PERSONAS

### Discovery Stages

Content maps to reader stages:

| Stage | Reader state | Content type | Example page types |
|-------|-------------|-------------|-------------------|
| **Orienting** | "What is this?" | Role, Overview | concepts/role, navigator |
| **Evaluating** | "How does it work? Should I care?" | Capabilities, Architecture, Economics | concepts/capabilities, concepts/architecture, concepts/business-model |
| **Activating** | "How do I start?" | Quickstart, Tutorial | quickstart, get-started |
| **Operating** | "How do I do X?" | How-to guides | guides/*, setup/* |
| **Deepening** | "How do I optimise?" | Advanced guides | guides/advanced-operations/* |
| **Reference** | "What are the exact details?" | Reference | resources/technical/* |

### Gateway Personas (5)

| Persona | Name | Core question | Start page | Payment mode |
|---------|------|--------------|------------|-------------|
| A | The Graduate | "How do I self-host?" | Role -> Navigator | Either |
| B | The Provider | "How do I run gateway-as-a-service?" | Business Model -> Opportunities | On-chain |
| C | The Builder | "How do I build a non-Go gateway?" | Architecture -> Remote Signers | Off-chain |
| D | The Broadcaster | "How do I replace cloud transcoding?" | Role -> Quickstart (video) | On-chain |
| E | The Platform Builder | "How do I build a platform on this?" | Business Model -> NaaP guide | Either |

### Orchestrator Personas (5)

| Persona | Name | Core question | Start page |
|---------|------|--------------|------------|
| A | The Miner | "Can I earn from my GPU?" | Role -> Join a Pool |
| B | The Easy Earner | "Simplest path to earnings?" | Join a Pool |
| C | The Pro Operator | "How do I add AI to my setup?" | Capabilities -> AI Config |
| D | The Business | "What's the business case at scale?" | Incentives -> Setup Guide |
| E | The AI Native | "How does Livepeer AI work?" | Capabilities -> Job Types |

### Navigator Page Pattern (7 Sections)

1. **Goal-based Tabs** - 4 tabs by reader goal (AI / Video / Platform / Evaluate), each with numbered LinkArrow path
2. **Gateway/Setup Types** - Payment mode comparison table + Mermaid decision flowchart
3. **Journey (StyledSteps)** - 6 sequential steps through the docs structure
4. **Guides Deep-Dive (AccordionGroup)** - 7-8 topic accordions with bulleted LinkArrow lists
5. **Path Matrix** - Markdown table: persona x (start / continue / reference)
6. **Quick Links (CardGroup)** - 6 cards in cols={3}

<CustomDivider />

## 7. CROSS-REFERENCING RULES

### Internal Links
- Use `<LinkArrow>` for inline cross-references within prose
- Use `<Card>` in `<CardGroup>` for navigational cross-references at section ends
- Use standard markdown links `[text](path)` in tables and lists only
- All paths are relative to site root: `/v2/gateways/concepts/role`

### Link Text Patterns
- "See [Page Name] for [what they'll find there]"
- "For X, see [Page Name]"
- Never "click here" or bare URLs

### Cross-Tab References
When referencing the other tab (gateways mentioning orchestrators or vice versa):
- Always include context: "Orchestrators, by contrast, earn at the protocol level"
- Use LinkArrow with full label: `<LinkArrow href="/v2/orchestrators/concepts/role" label="Orchestrator Role" />`

<CustomDivider />

## 8. WRITING STYLE

### Language Standard
- **UK English** for all prose, headings, descriptions, and frontmatter
- Common spelling differences to watch:
  - -ise/-isation (not -ize/-ization): organise, optimise, monetise, synchronisation
  - -our (not -or): colour, behaviour, favour, honour, neighbour
  - -re (not -er): centre, metre (but "parameter" is correct in both)
  - -lled/-lling (not -led/-ling): modelling, labelled, travelled, cancelled
  - -ence (not -ense): licence (noun), defence
  - -yse (not -yze): analyse
  - -ogue (not -og): catalogue, dialogue
- Exception: code identifiers retain their original spelling (`CenteredContainer`, `backgroundColor`, `--color`)
- Exception: proper nouns and brand names retain original spelling (GitHub, Ethereum, ComfyStream)

### Voice
- Direct, technical, actionable
- Second person ("your gateway", "you configure")
- Present tense for current behaviour, past tense for history
- Active voice preferred

### Structure
- Short paragraphs (2-4 sentences max)
- Bullet lists for 3+ parallel items
- Numbered lists only for sequential steps
- Bold for key terms on first use: **probabilistic micropayment tickets**
- Code formatting for CLI flags, file names, and config values: `-maxPricePerUnit`, `aiModels.json`

### Punctuation
- Hyphens (-) for all dashes. NEVER em dashes.
- Oxford comma: "video, AI, and BYOC"
- No trailing punctuation in bullet list items that are fragments
- Full stops in bullet list items that are complete sentences

### Headings
- H2 (`##`) for major sections
- H3 (`###`) for subsections within a major section
- H4 (`####`) rarely, only for sub-subsections in reference pages
- Never skip levels (no H2 then H4)
- Sentence case: "How gateways choose orchestrators" not "How Gateways Choose Orchestrators"

### Terminology
- "gateway" not "broadcaster" (legacy term, note once if relevant)
- "orchestrator" not "transcoder" (unless specifically referring to the transcoder worker process)
- "on-chain gateway" / "off-chain gateway" (payment modes)
- "dual-workload configuration" (NOT "dual mode" or "dual gateway type")
- "payment ticket" or "probabilistic micropayment ticket" (not just "ticket")
- "active set" (the pool of eligible orchestrators)
- "reward cut" / "fee cut" (orchestrator config parameters)
- Livepeer (capital L, no hyphen)
- go-livepeer (lowercase g, hyphenated)
- LPT (the token), ETH (the currency)
- Arbitrum One (the L2 chain)

<CustomDivider />

## 9. CONTENT BOUNDARIES

### What Belongs in Docs vs Not

| Content | In docs? | Where instead |
|---------|----------|--------------|
| How to use a feature | Yes | How-to guide |
| Why a feature exists | Yes | Concept page |
| Roadmap items / future features | No | Blog, governance proposals |
| Exact contract ABIs | Reference page | Or link to verified Etherscan |
| Community project tutorials | Yes (with attribution) | Community guides section |
| Price recommendations | No (market-dependent) | Note that prices are illustrative |
| Governance proposal outcomes | Yes (after ratification) | Reference or changelog |

### Per-Page Boundaries (Concepts)

**Role page contains:** Identity, evolution, sub-roles, mental models, "who should care"
**Role page does NOT contain:** Workload lists, architecture internals, pricing details, setup steps

**Capabilities page contains:** What it does, workload types, selection mechanics, boundaries
**Capabilities page does NOT contain:** Internal component details, payment flow, setup configuration

**Architecture page contains:** Layer position, system interactions, request flow, internal components
**Architecture page does NOT contain:** Business models, pricing, persona routing, "why" motivation

**Economics page contains:** Revenue, costs, payment flow, pricing config, case studies, "why operate"
**Economics page does NOT contain:** Architecture internals, setup steps, workload details

<CustomDivider />

## 10. PRE-COMMIT CHECKS

The following are validated by git hooks on every commit:

1. **Deprecated ThemeData imports** - blocked
2. **Hardcoded hex theme colours** - warned
3. **Relative snippets imports** - flagged
4. **Unnecessary global imports** (Card, Tabs, React hooks) - warned
5. **MDX syntax validation** - must parse
6. **JSON syntax validation** - must parse
7. **Component governance** - registry updated automatically

### Test Commands
```bash
npm test              # All tests
npm run test:style    # Style guide validation
npm run test:mdx      # MDX syntax
npm run test:spell    # UK English spelling
npm run test:quality  # Alt text, links, frontmatter
npm run test:browser  # Page rendering
```

<CustomDivider />

## 11. CHECKLIST: Before Submitting a New Page

- [ ] Frontmatter has all required fields (title, sidebarTitle, description, keywords, og:image set, pageType, audience, status, lastVerified)
- [ ] UK English spelling throughout (colour, behaviour, organise, optimise, etc.)
- [ ] No em dashes anywhere in the file
- [ ] No inline styles in MDX (only in JSX components)
- [ ] All imports use absolute paths with file extensions
- [ ] No imports of Mintlify globals (Card, Tabs, Note, etc.)
- [ ] Opening hook: CenteredContainer + Tip
- [ ] CustomDividers between all major sections
- [ ] Prose before every diagram, table, and code block
- [ ] Related Pages CardGroup at the bottom
- [ ] All cross-references use LinkArrow (inline) or Card (navigational)
- [ ] Mermaid diagrams use the standard dark theme block
- [ ] On-chain/off-chain described as payment modes, not workload types
- [ ] No speculative claims without explicit labels
- [ ] Page answers ONE question (matches its page type)
- [ ] Content does not duplicate another page's scope
- [ ] All personas considered: does this page serve at least one defined persona?
- [ ] Page routes correctly in docs.json (or will be added)
