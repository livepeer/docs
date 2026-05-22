# **Classification & Purpose Model**

**Deliverable:** D1 — Component Governance Framework, Part 1 **Repository:** `livepeer/docs`, `docs-v2` branch **Scope:** `snippets/components/` — ~83 exported JSX components across 37 files **Platform:** Mintlify (MDX-based) **Date:** 7 March 2026 **Author:** Wonderland (Alison Haire) / Claude collaboration **Status:** COMPLETE

## **1. Purpose**

This document defines how components in the Livepeer docs-v2 component library are classified, how a contributor determines which category a component belongs to, what metadata every component carries, and where the governed library boundary sits.

It is the foundation for all downstream deliverables: D2 (Repo Structure), D3–D5 (Technical Design), D6 (Lifecycle), D7 (Compiled Framework), D8 (Audit), and D9 (Migration Plan).

## **2. Upstream Dependencies**

This model consumes but does not redefine:

| **Document** | **What it provides** |
| --- | --- |
| Page Taxonomy (SOT-00) | 10 page types: landing, overview, tutorial, how_to, concept, reference, faq, troubleshooting, changelog, glossary. Components map to these via @contentAffinity. |
| Content Taxonomy | Structural patterns per page type. Components are the rendering layer. |
| Composable Content Structure (UX Framework) | Four reuse patterns: UI components (this framework), content snippets (MDX-in-MDX), data snippets, generated content. This framework governs UI components only. |
| Mintlify Considerations | Platform constraints, global components, MDX behaviour, import rules, styling limitations. |

## **3. Decisions Already Made (Upstream)**

These were locked prior to D1 and constrain the design space:

| **Decision** | **Detail** |
| --- | --- |
| Library boundary | snippets/components/ is the governed component library |
| Domain/ retired | Section-specific components live in the IA taxonomy via MDX-in-MDX; domain/ folder retired |
| Functional grouping | Classification uses purpose-driven categories intuitive to content authors |
| Three-tier hierarchy | Primitives → composites → patterns, with content-type and governance tags |
| Bug triage is implementation | Framework defines "healthy"; implementation achieves it |

## **4. Category Taxonomy**

Five categories. Each has a name, purpose, boundary, and example components.

### **4.1 Primitives**

**Purpose:** Standalone visual atoms. No custom component dependencies. Maximum reuse across any page type. A content author picks one of these to solve a single visual need.

**Boundary:** The component is self-contained — it does not import other custom components from the library. It does not accept children for spatial arrangement. It does not fetch or depend on external data.

**Examples:** CustomDivider, LivepeerIcon, Subtitle, CopyText, GotoCard, GotoLink, Image, LinkImage, SocialLinks, MathInline, MathBlock, ComingSoonCallout, PreviewCallout, ReviewCallout, FocusableScrollRegions, Spacer, DownloadButton, CustomCallout, BlinkingIcon, BlinkingTerminal, TipWithArrow, DoubleIconLink, LinkArrow, CardTitleTextWithArrow, AccordionTitleWithArrow, BasicBtn (placeholder), LivepeerSVG, LivepeerIconOld, LivepeerIconFlipped.

**Count:** 29 components.

### **4.2 Layout**

**Purpose:** Accept children or structured data and arrange them spatially. The component's job is positional — where things go, not what they are. A content author picks one of these to solve "how do I arrange these items?"

**Boundary:** The component accepts children (or a data array) and provides spatial structure — flex, grid, columns, steps, scrolling, tables. It does not define page-level chrome (that's Page Structure) and it does not format content for reading (that's Content).

**Examples:** BorderedBox, CenteredContainer, FullWidthContainer, FlexContainer, GridContainer, QuadGrid, ScrollBox, CardCarousel, AccordionLayout, StyledSteps, StyledStep, ListSteps, StepList, StepLinkList, StyledTable, TableRow, TableCell, DynamicTable, SearchTable, BasicList (placeholder), IconList (placeholder), UpdateList (placeholder), UpdateLinkList (placeholder).

**Count:** 23 components (5 are placeholders).

### **4.3 Content**

**Purpose:** Format or render content for the reader. This includes documentation-specific formatting (code blocks, quotes, API fields, version strings) and rich media embedding (video, external platforms, diagrams). A content author picks one of these to present a specific kind of content.

**Boundary:** The component formats, displays, or embeds content that the reader consumes. It does not arrange other components spatially (that's Layout). It does not depend on the automation pipeline or an external API for its data (that's Data). It takes props — a URL, a code string, a quote — and renders them.

**Subgroups (informational, not structural):**

- **Documentation formatting:** Code blocks, quotes, API response fields, version display, external repo content.
- **Media & embeds:** Video players, YouTube embeds, LinkedIn embeds, markdown embeds, Twitter timelines, zoomable diagrams, animated backgrounds.

**Examples:**

Documentation formatting: CustomCodeBlock, CodeComponent, ComplexCodeBlock, CodeSection, Quote, FrameQuote, ExternalContent, LatestVersion, ValueResponseField, CustomResponseField, ResponseFieldExpandable, ResponseFieldAccordion, ResponseFieldGroup.

Media & embeds: Video, YouTubeVideo, YouTubeVideoDownload, CardVideo, TitledVideo, ShowcaseVideo, LinkedInEmbed, MarkdownEmbed, EmbedMarkdown, TwitterTimeline, ScrollableDiagram, Starfield.

**Count:** 25 components.

### **4.4 Data**

**Purpose:** Render content bound to external data sources or the automation pipeline. The component expects data shaped by fetch scripts (blog, forum, Discord, Luma, CoinGecko, showcase) or a live API. A content author picks one of these to display dynamic content from a known source.

**Boundary:** The component is bound to a specific data source. Its rendering is tied to the data schema — change the data shape and the component breaks. This distinguishes Data from Content: Content components take a prop and render it; Data components depend on an upstream pipeline or API contract.

**Examples:** BlogCard, PostCard, CardBlogDataLayout, ColumnsBlogCardLayout, BlogDataLayout (duplicate), CardColumnsPostLayout, CardInCardLayout (broken), ForumLatestLayout, DiscordAnnouncements, LumaEvents, YouTubeVideoData, CoinGeckoExchanges, ShowcaseCards.

**Count:** 13 components (1 duplicate, 1 broken).

### **4.5 Page Structure**

**Purpose:** Define page-level structure for frame-mode and portal pages. These components build the chrome that content sits inside. A content author uses these when building a portal landing page or a frame-mode section page, not when writing documentation prose.

**Boundary:** The component only makes sense on a frame-mode or portal page. A contributor writing a standard documentation page would never reach for these — they'd use markdown headings, not `H1` from `frameMode.jsx`. The category answers the question "I'm building a portal page — what do I need?" in one place.

**Examples:** PageHeader, H1–H6, P, Divider (frameMode), HeroImageBackgroundComponent, HeroContentContainer, PortalContentContainer, PortalHeroContent, LogoHeroContainer, RefCardContainer, HeroOverviewContent, HeroSectionContainer, PortalCardsHeader, PortalSectionHeader, DisplayCard, CustomCardTitle, WidthCard, InlineImageCard.

**Count:** 23 components.

## **5. Compositional Model**

**Model:** Metadata only — flat files within each category folder, tier expressed as a JSDoc tag (`@tier`).

**Tiers:**

| **Tier** | **Definition** | **Assignment rule** |
| --- | --- | --- |
| primitive | Standalone. No custom component dependencies from the library. Renders independently. | Does the component import any other component from snippets/components/? If no → primitive. |
| composite | Combines two or more library primitives or other composites. | Does the component import and compose other custom components? If yes, and it's reusable across multiple page types → composite. |
| pattern | Page-level composition. Orchestrates multiple components into a complete page section or page template. | Does the component define the structure of a major page section or full page? If yes → pattern. |

**File system structure:**

One level of category folders. No sub-nesting by tier. Tier is a metadata tag only.

## **6. Per-Component Metadata Schema**

Every component carries a JSDoc block with all 14 fields. All fields are required.

### **6.1 Schema Definition**

| **#** | **Field** | **JSDoc Tag** | **Type** | **Values / Format** |
| --- | --- | --- | --- | --- |
| 1 | Name | @component | string | PascalCase export name |
| 2 | Category | @category | enum | primitives · layout · content · data · page-structure |
| 3 | Tier | @tier | enum | primitive · composite · pattern |
| 4 | Status | @status | enum | Defined in D6 (Lifecycle). Placeholder values: stable · experimental · deprecated · broken · placeholder |
| 5 | Description | @description | string | One-line purpose statement |
| 6 | Content affinity | @contentAffinity | enum[] | Page types from Page Taxonomy: landing · overview · tutorial · how_to · concept · reference · faq · troubleshooting · changelog · glossary · universal |
| 7 | Owner | @owner | string | GitHub handle or team (e.g. @livepeer/docs-team) |
| 8 | Dependencies | @dependencies | string[] | Other custom components this imports. none if standalone. |
| 9 | Used in | @usedIn | string[] | Page paths that consume this component |
| 10 | Breaking change risk | @breakingChangeRisk | enum | low · medium · high |
| 11 | Decision | @decision | enum | KEEP · MOVE · SPLIT · MERGE · REMOVE |
| 12 | Data source | @dataSource | string | For Data category: pipeline script or API. none for non-Data components. |
| 13 | Duplicates | @duplicates | string[] | Known overlapping components. none if unique. |
| 14 | Last meaningful change | @lastMeaningfulChange | date | ISO 8601 date of last non-trivial edit (e.g. 2026-03-07) |

### **6.2 JSDoc Template**

### **6.3 Validation Rules**

A validation script (to be defined in D2/D3) must enforce:

- All 14 tags present in every exported component's JSDoc block.
- `@category` value matches the folder the file lives in.
- `@tier` value is one of the three valid enums.
- `@contentAffinity` values are drawn from the Page Taxonomy enum set.
- `@dependencies` lists only component names that exist in the library.
- `@decision` is a valid enum value.
- `@breakingChangeRisk` is a valid enum value.
- `@lastMeaningfulChange` is a valid ISO 8601 date.
- `@dataSource` is `none` for non-Data category components; non-empty for Data category components.

## **7. Decision Tree**

A contributor classifies a component by answering these questions in order. First match wins.

### **7.1 Question Order Rationale**

The order is deliberate:

1. **Data first** — the most constrained category. If a component is pipeline-bound, nothing else matters; the data dependency defines its governance concern (schema changes break it). Only 13 components qualify.
1. **Page Structure second** — also highly constrained. These components are useless outside frame-mode/portal pages. Checking early prevents them from being misclassified as Layout (they do arrange things spatially, but only in a page-chrome context).
1. **Layout third** — the "accepts children and arranges them" test is concrete and binary. This cleanly separates containers/grids/steps from content-rendering components.
1. **Content fourth** — the broadest remaining category. Everything that formats or renders reader-facing content (including media embeds, which were merged into Content per Decision 1).
1. **Primitives last** — the default bucket. If none of the above apply, the component is a standalone visual atom.

### **7.2 Edge Cases**

| **Component** | **Apparent ambiguity** | **Resolution** |
| --- | --- | --- |
| CardCarousel | Arranges children spatially (Layout) but used primarily on portal pages (Page Structure) | Q2: Is it only used on portal pages? If used elsewhere too → Q3 triggers: Layout. If genuinely portal-only → Page Structure. Current usage determines. |
| SearchTable | Arranges data in a table (Layout) but could be seen as data-bound | Q1: Does it import from the automation pipeline? No — it takes a data prop. → Falls to Q3: accepts children/data and arranges spatially → Layout. |
| YouTubeVideoData | Renders video (Content?) but from a data array (Data?) | Q1: Is it bound to the automation pipeline? Yes — it consumes youtubeData.jsx. → Data. |
| Starfield | Animated visual (Primitives?) but rich media (Content?) | Q1: No data source. Q2: Used on portal pages only? If yes → Page Structure. If reusable elsewhere → Q4: renders media content → Content. |
| Image | Could be Primitives (standalone) or Content (renders media) | Q3: Does it arrange children? No. Q4: Does it render content? It renders an image with Frame and caption — this is content formatting. → Content. BUT: it has no dependencies, is self-contained, and is used identically to an icon or divider. Classification could go either way. Current placement: Primitives (per first-principles analysis, Group A). The decision tree would send it to Content. This is a framework refinement signal — the D8 audit should resolve Image's final category. |

## **8. Library Boundary**

### **8.1 Inside the Governed Library**

`snippets/components/` — all JSX component files within this directory and its category subdirectories. Every exported component in this path is subject to the full governance framework: 14-field metadata schema, category classification, tier assignment, lifecycle management, and validation enforcement.

### **8.2 Outside the Governed Library**

| **Pattern** | **Location** | **Governed by** | **Why it's excluded** |
| --- | --- | --- | --- |
| Mintlify globals | Platform-provided (no file) | Mintlify platform | Not importable, not modifiable, not managed. Card, CardGroup, Tabs, Accordion, Steps, Note, Tip, Warning, Frame, Columns, etc. |
| Content snippets | snippets/*.mdx (outside components/) | Composable Content Structure (UX Framework) | MDX-in-MDX reuse pattern. Different governance concern — content consistency, not component health. |
| Data snippets | snippets/data/, snippets/automations/ | Data integration layer | Data modules consumed by Data category components. Governed by pipeline contracts, not component standards. |
| Inline MDX components | Defined inside an .mdx page file | Page author | Mintlify allows inline component definitions in MDX. These are page-local, not shared, not reusable. |

### **8.3 Mintlify Platform Constraint**

Mintlify requires all importable JSX to live under `/snippets/`. Import paths must start with `/snippets/`. JSX files outside this path cannot be imported into MDX pages. This platform constraint naturally enforces the library boundary — there is no possibility of "section-local components" outside `snippets/`.

## **9. Content-Type Mapping**

Components connect to the Page Taxonomy through the `@contentAffinity` metadata field. This is not a rigid mapping ("only use X on page type Y") but an affinity signal ("X works well on page types Y and Z").

The `universal` value indicates a component is appropriate on any page type.

### **9.1 Category-Level Affinities (Defaults)**

These are starting points. Individual components may override.

| **Category** | **Typical content affinities** |
| --- | --- |
| Primitives | universal — icons, dividers, callouts, links work everywhere |
| Layout | universal — spatial arrangement is page-type-agnostic |
| Content | Varies by subgroup — code blocks skew tutorial, how_to, reference; video skews overview, landing; API fields skew reference |
| Data | Skews landing, overview, changelog — dynamic content surfaces are typically discovery or news-oriented |
| Page Structure | landing only — frame-mode and portal pages are landing pages by definition |

### **9.2 Per-Component Assignment**

Individual `@contentAffinity` values are assigned during the D8 audit when every component is classified against the framework. The schema is defined here; the data is populated there.

## **10. Decision Register**

All D1 decisions with rationale, for traceability.

| **#** | **Decision** | **Choice** | **Options considered** | **Rationale** |
| --- | --- | --- | --- | --- |
| 1 | Category taxonomy | Five categories: Primitives, Layout, Content (absorbs Media), Data, Page Structure | Six (all groups); Five (merge Media→Content); Five (merge PageStructure→Layout); Four (merge both) | Media embeds are a specialised form of content rendering. Merging keeps folder count manageable (5 vs 6) while preserving the Page Structure affordance for portal page builders. Content becomes the broadest category (25) but has a clear boundary. |
| 2 | Compositional model | Metadata only — flat files per category, tier as JSDoc tag | Subfolders per tier; metadata only; filename prefix; barrel file grouping | Keeps file system clean and shallow. Reclassifying tier is a tag change, not a file move. Tooling consumes the tag. Trade-off: tier not visible from ls — requires registry or JSDoc. |
| 3a | Metadata location | JSDoc block in each JSX file | JSDoc in file; central JSON registry; co-located sidecar .meta.json; hybrid JSDoc + registry | Co-located with code, version-controlled, self-describing. No drift risk from a separate manifest. Scripts parse JSDoc tags directly. |
| 3b | Metadata schema size | Full schema — all 14 fields required | Lean core (7 required, rest optional); full (all 14); tiered mandate (7 at creation, rest at audit) | Complete governance data on every component. No ambiguity about what's populated. D8 audit backfills existing components; new components ship with all fields. |
| 4 | Decision mechanism | Decision tree — ordered yes/no, first match wins | Decision tree; heuristic scoring; lookup table + fallback; tree + tiebreaker | Deterministic, enforceable by tooling, fast. Same tree can be walked by a validation script. Question order resolves known ambiguities (Data/Page Structure checked before Layout/Content). |
| 5 | Library boundary | snippets/components/ only | Strict boundary; strict + advisory register; two-tier governance | Mintlify enforces all JSX under /snippets/. Content snippets governed by Composable Content Structure. No other adjacent patterns exist. Simplest correct answer. |

## **11. Success Criteria**

Per the Component Governance Framework plan:

- [x] Category taxonomy defined — each category has a name, purpose, boundary, and decision rule
- [x] Compositional model defined — how hierarchy is expressed (metadata tags) and assigned (tier definitions)
- [x] Content-type mapping defined — components connected to Page Taxonomy via `@contentAffinity`
- [x] Metadata schema defined — 14 fields, types, all required, JSDoc location
- [x] Decision mechanism defined — five-question decision tree, first match wins
- [x] Library boundary defined — `snippets/components/` only, aligned with Composable Content Structure
- [x] Every decision has documented rationale (Section 10)

## **12. Open Items for Downstream Deliverables**

| **Item** | **Downstream deliverable** | **Notes** |
| --- | --- | --- |
| @status enum values | D6 (Lifecycle & Governance) | Placeholder values used here; D6 defines the canonical lifecycle states and transitions |
| Folder names confirmed | D2 (Repo Structure) | Category names map to folders; D2 confirms naming convention (e.g. page-structure/ kebab-case) |
| Validation script | D2/D3 (Repo Structure / Technical Design) | Schema validation rules defined here; implementation in D2/D3 |
| Image component classification | D8 (Audit) | Decision tree sends Image to Content; first-principles analysis placed it in Primitives. D8 resolves. |
| Per-component metadata population | D8 (Audit) | Schema defined here; every component gets its 14 fields populated during the D8 audit |
| @contentAffinity per component | D8 (Audit) | Category-level defaults defined here; per-component values assigned during audit |