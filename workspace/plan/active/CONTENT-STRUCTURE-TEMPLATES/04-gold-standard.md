# 04 — Gold Standard Pages Analysis

**Source agents**: A (references), B (live pages)

---

## Gold Standard Criteria

A page qualifies as gold standard when it:
- Follows the 4-zone anatomy (header → intro → body → footer)
- Uses governing-concept section headings
- Maps information types to correct components
- Has complete frontmatter
- Balances prose, visuals, and interactive elements
- Closes with clear routing (related pages or next step)
- Works for its target audience without assuming prior knowledge beyond stated prerequisites

---

## 1. Orchestrators / Role — BEST CONCEPT PAGE

**Path**: `v2/orchestrators/concepts/role.mdx`
**pageType**: concept | **purpose**: explain | **audience**: orchestrator

### Why it's gold
- Opens with 3 accordion analogies (Cloud, Ethereum, Fresh) — lets reader self-select entry point by background
- Each accordion has embedded Mermaid diagram with themed colours
- Clear H2 flow: Technical Role → Network Role → Deployment Types → Who Should Operate → Related Pages
- Uses `StyledTable` for deployment comparison (not just prose)
- Every section has tight prose + visual support
- Closes with 4-card `CardGroup`
- Balance: ~40% prose, ~40% diagrams, ~20% tables/cards

### Structure skeleton
```
H1: [Title]
  AccordionGroup (3 audience analogies with Mermaid diagrams)
  CustomDivider middleText="Role Functions"
  ## Technical Role (prose + Mermaid)
  CustomDivider
  ## Network Role (prose + StyledTable)
  CustomDivider middleText="Deployment"
  ## Deployment Types (StyledTable variant="bordered")
  CustomDivider
  ## Who Should Operate (prose)
  CustomDivider
  ## Related Pages (CardGroup cols={2}, 4 cards)
```

### Pattern to replicate
- **Accordion entry**: Use for any concept page where readers arrive from different backgrounds
- **CustomDivider with middleText**: Creates visual section breaks with semantic labels
- **StyledTable for comparisons**: Better than prose for 3+ options with attributes

### Watch-out
- Accordion entry pattern is for audience disambiguation ONLY — not a default for all glossaries or reference pages (flagged by Alison)

---

## 2. Gateways / Prepare — BEST GUIDE PAGE

**Path**: `v2/gateways/setup/prepare.mdx`
**pageType**: instruction/setup | **purpose**: configure | **audience**: gateway-operator

### Why it's gold
- Opens with `BorderedBox` establishing the 2-axis choice (off-chain vs on-chain, node type)
- Each major section is a `StyledTable` (Hardware → Network → OS Compatibility)
- "Choose Deployment Mode" section uses Tabs with nested decision trees
- Each tab branches to next steps (RPC setup, wallet funding)
- Progressive complexity: prepare → install → configure → connect
- Closes with single Next Step CTA card

### Structure skeleton
```
H1: [Title]
  BorderedBox (establishes scope and axes)
  CustomDivider
  ## Hardware Requirements (StyledTable)
  CustomDivider
  ## Network Requirements (StyledTable)
  CustomDivider
  ## OS Compatibility (StyledTable)
  CustomDivider
  ## Choose Deployment Mode (Tabs: Off-Chain | On-Chain)
    Tab: Off-Chain → decision tree + next steps
    Tab: On-Chain → RPC + wallet + funding steps
  CustomDivider
  ## Next Step (Card CTA → install page)
```

### Pattern to replicate
- **BorderedBox for scope framing**: Sets expectations before detail
- **StyledTable for requirements**: Structured, scannable, consistent
- **Tabs for binary choices**: Clean separation without page bloat
- **Single Next Step CTA**: Sequential pages should point forward

---

## 3. Gateways / Quickstart — BEST MULTI-VIEW INSTRUCTION PAGE

**Path**: `v2/gateways/quickstart/gateway-setup.mdx`
**pageType**: instruction/quickstart | **purpose**: start | **audience**: gateway-operator

### Why it's gold
- `TipWithArrow` callout (platform selector instruction)
- `WidthCard` badge showing latest version (data-imported)
- Multi-view: Docker (main) → Linux → Windows
- Each view: 2 sub-tabs (Off-Chain / On-Chain)
- Each sub-tab: full procedure with code blocks
- Composable architecture: imports views, groups, data, components as separate files
- Reference Pages section at end of each view
- Import organisation by category with section comments

### Structure skeleton
```
H1: [Title]
  TipWithArrow (platform selector guidance)
  WidthCard (version badge from data import)
  CustomDivider
  # Setup Guide
    Note (platform recommendations)
    Views:
      View: Docker
        Accordion (Docker details)
        Tabs: Off-Chain | On-Chain
          [Full procedure per tab — imported from views/]
          Reference Pages (Columns cols={2} with Cards)
      View: Linux
        [Same pattern — imported from views/]
      View: Windows
        [Same pattern — imported from views/]
```

### Pattern to replicate
- **File decomposition**: Parent page orchestrates; views/, groups/, data/ hold the content
- **Import organisation**: COMPONENT → DATA → MDX PAGE → MDX COMPOSABLE
- **Views for platform selection**: Keeps all platforms in one page without bloat
- **Nested tabs for secondary axis**: Off-chain/On-chain within each platform

### Architecture
```
gateway-setup.mdx (parent — orchestration)
├── views/docker/dockerOffChainTab.mdx
├── views/docker/dockerOnChainTab.mdx
├── views/linux/linuxOffChainTab.mdx
├── views/linux/linuxOnChainTab.mdx
├── views/windows/windowsTab.mdx
├── groups/docker/dockerSupport.mdx
├── groups/shared/prerequisiteBlock.mdx
├── data/docker/code.jsx
└── components/callouts.jsx
```

---

## 4. About / Core Concepts — BEST LAYERED CONCEPT PAGE

**Path**: `v2/about/concepts/core-concepts.mdx`
**pageType**: concept | **purpose**: explain | **audience**: general

### Why it's gold
- Opens with clear "Overview and separation" prose
- Defines 3 boundaries (On-chain, Off-chain, Bridge)
- `Tabs` component with 4 tabs (Overview, Protocol, Network, Actors)
- Each tab imports composable content from snippets
- Clean definitions section with 3 key terms
- On-chain vs Off-chain comparison table

### Structure skeleton
```
H1: [Title]
  Intro prose (scope + boundaries)
  CustomDivider
  ## Core Boundaries
    Tabs: Overview | Protocol | Network | Actors
      [Each tab: composable import from snippets/]
  CustomDivider
  ## Key Definitions (term list or StyledTable)
  CustomDivider
  ## Comparison (On-chain vs Off-chain table)
```

### Pattern to replicate
- **Tabs for conceptual layers**: Lets reader explore depth without overwhelming
- **Composable imports**: Each tab is a self-contained MDX import
- **Definitions section**: Explicitly defines terms used on the page

---

## 5. Protocol / Overview — BEST OVERVIEW PAGE

**Path**: `v2/about/livepeer-protocol/overview.mdx`
**pageType**: overview | **purpose**: orient | **audience**: general

### Why it's gold
- Centred GitHub card at top (external resource)
- `Quote` sets the protocol definition
- "Protocol Section Map" divider + 2-column card grid (6 cards, each with icon + bullets)
- Layered H2 progression: Design 101 → Whitepaper → Design Goals → Principles → Actors → Architecture
- `DynamicTable` for actors and architecture
- `FrameQuote` for emphasis on whitepaper excerpt
- Closes with protocol contracts CTA card

### Structure skeleton
```
H1: [Title]
  CardTitleTextWithArrow (centred, external link)
  Quote (definition)
  CustomDivider middleText="Section Map"
  Columns cols={2} → 6 Card components (topic routing)
  CustomDivider
  ## Protocol Design (prose list)
  ## Whitepaper (Card + FrameQuote)
  ## Design Goals (prose list)
  ## Guiding Principles (prose list)
  ## Actors and Roles (DynamicTable)
  ## Protocol Architecture (DynamicTable)
```

### Pattern to replicate
- **Section map as card grid**: Lets reader jump to any section
- **Quote for anchor definition**: Sets the conceptual frame
- **DynamicTable for structured data**: Actors, architecture, any multi-attribute entity

---

## Coverage Gaps

| pageType | Gold standard exists? | What's needed |
|---|---|---|
| concept | ✅ role.mdx, core-concepts.mdx | Covered |
| overview | ✅ protocol/overview.mdx | Covered |
| guide | ✅ prepare.mdx | Covered |
| instruction/quickstart | ✅ gateway-setup.mdx | Covered |
| instruction/setup | ✅ prepare.mdx | Covered |
| tutorial | ❌ | Need annotated example |
| reference/specification | ❌ | Need annotated example (e.g., cli-flags.mdx or configuration-flags.mdx) |
| reference/compendium | ❌ | Need annotated example (e.g., glossary.mdx or faq.mdx) |
| navigation/portal | ❌ | Need annotated example (e.g., portal.mdx — frame mode) |
| resource | ❌ | Need annotated example (e.g., trending.mdx or showcase.mdx) |
| reference/changelog | ❌ | Need annotated example |
