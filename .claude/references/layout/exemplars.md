# Exemplary Page Layouts

> Pointer + analysis. Do not copy files — emulate the patterns.
> These pages demonstrate strong visual hierarchy, component choices, and information architecture.

---

### Gateway Quickstart (Gold Standard — Human-Written)

**File:** `v2/gateways/quickstart/gateway-setup.mdx`
**Supporting files:** `v2/gateways/quickstart/views/`, `v2/gateways/quickstart/groups/`, `v2/gateways/quickstart/data/`, `v2/gateways/quickstart/components/`

**Why it's good:** The most complex layout in the repo, and it works. A single entry page (`gateway-setup.mdx`) imports views (platform-specific MDX), groups (shared sections), data (code blocks, flags), and components (callouts) — all as separate files. This is the composable page pattern: one page, many paths, no duplication. The import organisation is commented by category: DATA & CODE, BANNERS, COMPONENTS, LAYOUTS & VIEWS, LAYOUT COMPOSABLE GROUPS.

**Key patterns:**
- Multi-path layout: views per platform (Docker/Linux/Windows) x payment mode (on-chain/off-chain)
- Import organisation by category with section comments
- Data files separate from views — code blocks and flags live in `data/` as JSX exports
- Shared callouts in a dedicated `components/callouts.jsx` — reusable warning/note content
- TipWithArrow for page-level navigation hint (dropdown selector)
- WidthCard for software version display with live data import
- Badge colour coding: blue=Video, purple=AI, green=Dual — consistent throughout

**Watch out:** The relative imports here are acceptable because the views, groups, and components are page-local and colocated with the route. The actual drift to avoid is in page-level inline styling and small implementation mistakes such as the `narginTop` typo in `CustomDivider`.

---

### Blockchain Contracts

**File:** `v2/about/livepeer-protocol/blockchain-contracts.mdx`

**Why it's good:** Dense technical reference that stays navigable. Opens with a JSX comment verification log documenting 13 corrections made during fact-checking — this is the standard for verified content. Uses ScrollableDiagram for architecture diagrams, SolidityEmbed for contract interfaces, and FunctionField for API surfaces. Data is pulled from the pipeline (`contractAddressesData.jsx`), not hardcoded.

**Key patterns:**
- Verification log in JSX comments: numbered corrections with sources
- ScrollableDiagram for complex mermaid diagrams (pannable, zoomable)
- SolidityEmbed for rendering contract interfaces inline
- FunctionField for documenting contract function signatures
- AddressLinks for rendering verified on-chain links
- LazyLoad wrapping heavy sections
- Pipeline data consumption — addresses come from `contractAddressesData.jsx`

**Watch out:** The page is very long. Consider this a reference for component composition, not page length.

---

### Setup Options (Orchestrators)

**File:** `v2/orchestrators/guides/deployment-details/setup-options.mdx`

**Why it's good:** Orientation page done right. Opens with a Tip listing the 4 key decisions, then a CardGroup with Badge-based categorisation. StyledTable for comparison matrices. Each section has a clear decision axis (Setup Type, Software Path, Operational Mode, Workload Mode) with consistent Badge colour coding.

**Key patterns:**
- Tip as structured decision framework — numbered key decisions up front
- CardGroup cols={2} for decision categories with Badge labels
- StyledTable with TableRow/TableCell for comparison matrices
- Consistent Badge colour scheme: surface=generic, green=go-livepeer, yellow=Siphon, blue=Video, purple=AI
- CustomDivider for visual section separation
- Quote component for key definitions

**Watch out:** Good layout pattern, but copy is AI-written — use for layout reference only.

---

### Join a Pool (Orchestrators)

**File:** `v2/orchestrators/guides/deployment-details/join-a-pool.mdx`

**Why it's good:** Strong page flow: Quote definition → context → DynamicTable comparison → StyledSteps walkthrough. The DynamicTable is data-driven inline (itemsList as array of objects). Nested Accordions inside StyledSteps for progressive disclosure — heavy detail available without cluttering the main flow.

**Key patterns:**
- Quote component for opening definition
- DynamicTable with inline data for feature comparison (Pool vs Orchestrator)
- StyledSteps + StyledStep for sequential walkthrough
- Nested Accordions inside steps for optional depth ("Finding a Pool", "Pool Due Diligence Checklist")
- Tip for important caveats positioned at point of relevance
- Note for current-state information ("no canonical directory of pools")

**Watch out:** DynamicTable data is inline rather than imported from a data file. For reusable comparisons, extract to a data file.

---

### Orchestrator Role (Concepts)

**File:** `v2/orchestrators/concepts/role.mdx`

**Why it's good:** Audience-entry pattern — opens with CenteredContainer + AccordionGroup offering different entry points by background (Cloud, Crypto). Each accordion contains a mermaid diagram with themed colours. The TODO comments are exemplary: terminology validation, verify checklist, human review items — all structured.

**Key patterns:**
- Audience-entry accordions: "From a Cloud Background?" / "From a Crypto Background?" — same content, different framing
- ScrollableDiagram wrapping mermaid charts
- Mermaid theme variables matching repo brand colours
- Structured TODO comments: Terminology Validation, Verify, Human sections
- CenteredContainer for constraining width of entry-point content

**Watch out:** The accordion entry pattern is good here but should NOT be the default glossary pattern (Alison flagged). Use for audience disambiguation, not for all content.

---

### Ecosystem (Home)

**File:** `v2/home/about/ecosystem.mdx`

**Why it's good:** QuadGrid for entity overview — four cards with icons, descriptions, and anchor links. Clean organisational hierarchy: values list → entity cards → detailed sections per entity. FrameQuote for significant quotations.

**Key patterns:**
- QuadGrid with centre icon for entity overview
- Card with icon + anchor href for in-page navigation
- CustomDivider for section breaks
- LinkArrow for external references within prose
- FrameQuote for attributed quotations

**Watch out:** Some values are duplicated ("Collaboration" and "Community" say the same thing). Use for layout pattern, verify copy independently.

---

### Evolution Timeline (Home)

**File:** `v2/home/about/evolution.mdx`

**Why it's good:** Update component used as a timeline — each entry is a year/period with tags and bullet content. YouTubeVideo component at top for video-first opening. This is the pattern for any chronological content (changelogs, roadmaps, history).

**Key patterns:**
- Update component with `label` (year), `description` (subtitle), `tags` (categories)
- Chronological ordering with consistent entry structure
- YouTubeVideo component for video-first content
- LinkArrow for source references within timeline entries

**Watch out:** `mode: wide` in frontmatter — only appropriate for timeline/showcase pages, not standard content.

---

### Mental Model (About)

**File:** `v2/about/mental-model.mdx`

**Why it's good:** Layered information architecture — Protocol / Network / Applications as stacked bordered divs with Badge labels. Accordion for "More on Crypto-Primitive Advantages" provides depth without cluttering the main narrative. The mental model framing (serverless GPU fabric with cryptoeconomic control plane) gives readers an anchor.

**Key patterns:**
- Layered div blocks with border + Badge for architectural layers
- Accordion for optional depth on complex topics
- Subtitle component for sub-headings
- AccordionLayout for structured expandable content

**Watch out:** Uses inline `div style` with hardcoded border colour (`#2d9a67`) — should use CSS variables. Layout pattern is good; style implementation needs updating.

---

### Orchestrator Glossary

**File:** `v2/orchestrators/resources/reference/glossary.mdx`

**Why it's good:** StyledTable with variant="bordered" for structured terminology. Three-column format: Axis / Options / What it decides. Good pattern for any structured reference content. Deployment section opens with a definition paragraph, then immediately shows the decision matrix.

**Key patterns:**
- StyledTable variant="bordered" for glossary/reference tables
- Three-column taxonomy: dimension / values / purpose
- Opening definition paragraph before the table
- CustomDivider for section separation
- Structured TODO comments for verification

**Watch out:** The accordion pattern in this page is NOT exemplary (Alison flagged). Use the StyledTable glossary pattern only.
