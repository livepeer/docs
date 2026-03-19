# Component Governance — Structure & Standards

> **Source of truth** for folder taxonomy and JSDoc standards. Referenced by [plan.md](./plan.md).

```
snippets/
├── components/
│   ├── elements/                        # Smallest visual atoms — no children, no fetching, no arrangement
│   │   ├── a11y/                        # Accessibility helpers
│   │   │   └── FocusableScrollRegions.jsx
│   │   ├── buttons/                     # Button components
│   │   │   ├── DownloadButton.jsx
│   │   │   └── BasicBtn.jsx
│   │   ├── callouts/                    # Status/preview callout banners
│   │   │   ├── ComingSoonCallout.jsx
│   │   │   ├── PreviewCallout.jsx
│   │   │   └── ReviewCallout.jsx
│   │   ├── icons/                       # Brand and UI icons
│   │   │   ├── LivepeerSVG.jsx
│   │   │   ├── LivepeerIcon.jsx
│   │   │   ├── LivepeerIconOld.jsx
│   │   │   └── LivepeerIconFlipped.jsx
│   │   ├── images/                      # Static image display
│   │   │   ├── Image.jsx
│   │   │   └── LinkImage.jsx
│   │   ├── links/                       # Navigation and link elements
│   │   │   ├── CustomCallout.jsx
│   │   │   ├── BlinkingIcon.jsx
│   │   │   ├── BlinkingTerminal.jsx
│   │   │   ├── DoubleIconLink.jsx
│   │   │   ├── GotoLink.jsx
│   │   │   ├── GotoCard.jsx
│   │   │   ├── TipWithArrow.jsx
│   │   │   └── LinkArrow.jsx
│   │   ├── math/                        # Mathematical notation
│   │   │   ├── MathBlock.jsx
│   │   │   └── MathInline.jsx
│   │   ├── social/                      # Social media links
│   │   │   └── SocialLinks.jsx
│   │   ├── spacing/                     # Spacers and dividers
│   │   │   ├── Spacer.jsx
│   │   │   └── CustomDivider.jsx
│   │   └── text/                        # Text display primitives
│   │       ├── Subtitle.jsx
│   │       ├── CopyText.jsx
│   │       ├── CardTitleTextWithArrow.jsx
│   │       ├── AccordionTitleWithArrow.jsx
│   │       └── CustomCardTitle.jsx
│   │
│   ├── wrappers/                        # Holds, groups, or spatially arranges other components
│   │   ├── accordions/                  # Collapsible content groups
│   │   │   ├── AccordionGroupList.jsx
│   │   │   └── AccordionLayout.jsx
│   │   ├── cards/                       # Card-based layouts
│   │   │   ├── DisplayCard.jsx
│   │   │   ├── WidthCard.jsx
│   │   │   ├── InlineImageCard.jsx
│   │   │   ├── InteractiveCard.jsx
│   │   │   ├── InteractiveCards.jsx
│   │   │   └── ShowcaseCards.jsx
│   │   ├── containers/                  # Generic spatial containers
│   │   │   ├── BorderedBox.jsx
│   │   │   ├── CenteredContainer.jsx
│   │   │   ├── FullWidthContainer.jsx
│   │   │   ├── FlexContainer.jsx
│   │   │   ├── GridContainer.jsx
│   │   │   └── ScrollBox.jsx
│   │   ├── grids/                       # Grid and carousel layouts
│   │   │   ├── QuadGrid.jsx
│   │   │   └── CardCarousel.jsx
│   │   ├── lists/                       # List layouts
│   │   │   ├── BasicList.jsx
│   │   │   ├── IconList.jsx
│   │   │   ├── StepList.jsx
│   │   │   ├── StepLinkList.jsx
│   │   │   ├── UpdateList.jsx
│   │   │   ├── UpdateLinkList.jsx
│   │   │   └── ListSteps.jsx
│   │   ├── steps/                       # Step-flow layouts
│   │   │   ├── StyledSteps.jsx
│   │   │   └── StyledStep.jsx
│   │   └── tables/                      # Table layouts
│   │       ├── DynamicTable.jsx
│   │       ├── SearchTable.jsx
│   │       ├── StyledTable.jsx
│   │       ├── TableCell.jsx
│   │       └── TableRow.jsx
│   │
│   ├── displays/                        # Renders authored content into a specific visual format
│   │   ├── code/                        # Code block renderers
│   │   │   ├── CustomCodeBlock.jsx
│   │   │   ├── CodeComponent.jsx
│   │   │   ├── ComplexCodeBlock.jsx
│   │   │   └── CodeSection.jsx
│   │   ├── diagrams/                    # Diagram renderers
│   │   │   └── ScrollableDiagram.jsx
│   │   ├── quotes/                      # Quote renderers
│   │   │   ├── Quote.jsx
│   │   │   └── FrameQuote.jsx
│   │   ├── response-fields/             # API response field renderers
│   │   │   ├── ValueResponseField.jsx
│   │   │   ├── CustomResponseField.jsx
│   │   │   ├── ResponseFieldExpandable.jsx
│   │   │   ├── ResponseFieldAccordion.jsx
│   │   │   └── ResponseFieldGroup.jsx
│   │   └── video/                       # Video and media renderers
│   │       ├── Video.jsx
│   │       ├── TitledVideo.jsx
│   │       ├── ShowcaseVideo.jsx
│   │       ├── CardVideo.jsx
│   │       ├── YouTubeVideo.jsx
│   │       └── YouTubeVideoDownload.jsx
│   │
│   ├── scaffolding/                     # One-per-page structural skeleton
│   │   ├── frame-mode/                  # Frame-mode heading overrides
│   │   │   ├── PageHeader.jsx
│   │   │   ├── H1.jsx
│   │   │   ├── H2.jsx
│   │   │   ├── H3.jsx
│   │   │   ├── H4.jsx
│   │   │   ├── H5.jsx
│   │   │   ├── H6.jsx
│   │   │   ├── P.jsx
│   │   │   └── Divider.jsx
│   │   ├── heroes/                      # Hero section components
│   │   │   ├── HeroImageBackgroundComponent.jsx
│   │   │   ├── HeroContentContainer.jsx
│   │   │   ├── HeroSectionContainer.jsx
│   │   │   ├── HeroOverviewContent.jsx
│   │   │   └── Starfield.jsx
│   │   ├── page-containers/             # Page-level containers
│   │   │   └── RefCardContainer.jsx
│   │   └── portals/                     # Portal page layouts
│   │       ├── PortalContentContainer.jsx
│   │       ├── PortalHeroContent.jsx
│   │       ├── PortalCardsHeader.jsx
│   │       ├── PortalSectionHeader.jsx
│   │       └── LogoHeroContainer.jsx
│   │
│   ├── integrators/                     # Fetches, embeds, or binds to external/third-party data
│   │   ├── blog/                        # Blog feed renderers
│   │   │   ├── PostCard.jsx
│   │   │   ├── CardColumnsPostLayout.jsx
│   │   │   ├── BlogCard.jsx
│   │   │   ├── CardBlogDataLayout.jsx
│   │   │   ├── ColumnsBlogCardLayout.jsx
│   │   │   ├── BlogDataLayout.jsx
│   │   │   └── CardInCardLayout.jsx
│   │   ├── embeds/                      # Third-party embed components
│   │   │   ├── MarkdownEmbed.jsx
│   │   │   ├── EmbedMarkdown.jsx
│   │   │   ├── PdfEmbed.jsx
│   │   │   ├── TwitterTimeline.jsx
│   │   │   ├── LinkedInEmbed.jsx
│   │   │   └── ExternalContent.jsx
│   │   ├── feeds/                       # API-driven data feeds
│   │   │   ├── CoinGeckoExchanges.jsx
│   │   │   ├── DiscordAnnouncements.jsx
│   │   │   ├── ForumLatestLayout.jsx
│   │   │   ├── LumaEvents.jsx
│   │   │   └── LatestVersion.jsx
│   │   └── video-data/                  # Video data from APIs
│   │       └── YouTubeVideoData.jsx
│   │
│   ├── config/                          # Non-component config objects
│   │   └── MermaidColours.jsx
│   │
│   ├── x-archive/                       # Staging area for superseded files (cleared in Task 13)
│   │
│   └── _archive/                        # Existing legacy archive (untouched until cleanup)
│
└── composables/                         # Future: MDX-defined composable snippets (TBD)
    └── (ApiBaseUrlsTable.mdx — to be moved here from layout/)
```

## Decision Rules

| # | Folder | Rule |
|---|---|---|
| 1 | `elements/` | "Is it a single visual piece that doesn't wrap, arrange, or fetch anything?" |
| 2 | `wrappers/` | "Does it exist to hold, group, or arrange other things?" |
| 3 | `displays/` | "Does it take content and present it in a formatted way?" |
| 4 | `scaffolding/` | "Is it part of the page's outer structure, typically used once?" |
| 5 | `integrators/` | "Does the content come from outside the repo?" |
| 6 | `config/` | "Is it a non-component config/theme object?" |

## Component Counts

| Category | Components | Sub-niches |
|---|---|---|
| elements | 30 | 10 |
| wrappers | 30 | 7 |
| displays | 17 | 5 |
| scaffolding | 20 | 4 |
| integrators | 20 | 4 |
| config | 1 | — |
| **Total** | **118** | **30** |

<CustomDivider />

## Component JSDoc header standard

Every exported component must include a JSDoc header block with these 7 tags.
No other governance tags should be used — removed tags (`@owner`, `@category`,
`@tier`, `@contentAffinity`, `@decision`, `@duplicates`, `@lastMeaningfulChange`,
`@breakingChangeRisk`, `@dependencies`, `@usedIn`) must not appear.

### Tag reference

| Tag | Required | What it does | Values / format |
|---|---|---|---|
| `@component` | Yes | Component identity | Export name (PascalCase) |
| `@type` | Yes | Layer 1 — what kind of component | `elements`, `wrappers`, `displays`, `scaffolding`, `integrators`, `config` |
| `@subniche` | Yes | Layer 2 — specific sub-concern | Matches folder name: `buttons`, `icons`, `images`, `links`, `text`, `math`, `callouts`, `spacing`, `social`, `a11y`, `containers`, `cards`, `lists`, `steps`, `accordions`, `tables`, `grids`, `code`, `video`, `quotes`, `diagrams`, `response-fields`, `frame-mode`, `heroes`, `portals`, `page-containers`, `feeds`, `blog`, `embeds`, `video-data` |
| `@status` | Yes | Lifecycle state | `stable`, `experimental`, `deprecated`, `broken` |
| `@description` | Yes | One-line human-readable description | Plain English sentence — what it renders and when to use it |
| `@dataSource` | If integrator | Where external data comes from | `none`, `prop`, `CoinGecko API`, `fetch(url)`, `automation/blog`, etc. |
| `@accepts` | Yes | Extensibility declaration — what the consumer can customise | Comma-separated: `children`, `style`, `className`, `...rest` |

After the header block, each prop gets a standard `@param`:

```
@param {string} title - Card heading text
@param {React.ReactNode} children - Content rendered inside the card
@param {Object} [style={}] - Override/merge styles on outermost element
@param {string} [className=""] - CSS class on outermost element
```

### Removed tags (must not appear)

| Tag | Reason |
|---|---|
| `@owner` | Ownerless governance — was always `docs` for every component |
| `@category` | Replaced by `@type` (aligned with script governance) |
| `@tier` | primitive/composite/pattern — replaced by `@type`/`@subniche` |
| `@contentAffinity` | Not queried by anyone in practice |
| `@decision` | All said KEEP — served its purpose during audit |
| `@duplicates` | All resolved during restructure |
| `@lastMeaningfulChange` | Not maintained — git blame is authoritative |
| `@breakingChangeRisk` | All said "low" — not differentiated |
| `@dependencies` | Listed sibling exports, not actual import deps |
| `@usedIn` | Stale immediately — `scan-component-imports.js` is the live source |

### @status values

| Value | Meaning |
|---|---|
| `stable` | Production-ready, actively used in v2 pages |
| `experimental` | Working but API may change |
| `deprecated` | Still exported for backward compat, do not use in new pages |
| `broken` | Non-functional (e.g. empty stubs) — flagged for removal or rewrite |

### @accepts values

List which extensibility props the component supports:

| Value | Meaning |
|---|---|
| `children` | Accepts child content via React children |
| `style` | Accepts a `style` prop that merges with internal defaults |
| `className` | Accepts a `className` prop on the outermost element |
| `...rest` | Spreads remaining props onto the outermost element (id, data-*, aria-*) |

### Example headers

**Element:**
```js
/**
 * @component   CustomDivider
 * @type        elements
 * @subniche    spacing
 * @status      stable
 * @description Themed horizontal divider with optional centre text and Livepeer logo accents.
 * @accepts     children, style, className, ...rest
 *
 * @param {string} [color="var(--border)"] - Divider line and icon colour
 * @param {string} [middleText=""] - Optional text displayed in the centre
 * @param {string} [spacing="default"] - Spacing preset: default, overlap, compact, wide, none
 * @param {Object} [style={}] - Override/merge styles on outermost element
 * @param {string} [className=""] - CSS class on outermost element
 */
```

**Wrapper:**
```js
/**
 * @component   DynamicTable
 * @type        wrappers
 * @subniche    tables
 * @status      stable
 * @description Renders structured data as a table with optional section separators and sortable columns.
 * @accepts     style, className, ...rest
 *
 * @param {Array} data - Array of row objects to render
 * @param {Array} columns - Column definitions [{key, label, align}]
 * @param {Object} [style={}] - Override/merge styles on outermost element
 * @param {string} [className=""] - CSS class on outermost element
 */
```

**Integrator:**
```js
/**
 * @component   CoinGeckoExchanges
 * @type        integrators
 * @subniche    feeds
 * @status      stable
 * @description Fetches and renders a sortable table of exchanges listing a token from CoinGecko API.
 * @dataSource  CoinGecko API (GET /coins/{coinId}/tickers)
 * @accepts     style, className, ...rest
 *
 * @param {string} [coinId="arbitrum"] - CoinGecko coin identifier
 * @param {Object} [style={}] - Override/merge styles on outermost element
 * @param {string} [className=""] - CSS class on outermost element
 */
```

**Scaffolding:**
```js
/**
 * @component   Starfield
 * @type        scaffolding
 * @subniche    heroes
 * @status      stable
 * @description Animated canvas starfield background with floating Livepeer logos. Respects prefers-reduced-motion.
 * @accepts     style, className, ...rest
 *
 * @param {number} [density=1.1] - Logo density multiplier
 * @param {Object} [style={}] - Override/merge styles on canvas element
 * @param {string} [className=""] - CSS class on canvas element
 */
```

### Alignment with script governance

| Concept | Scripts | Components |
|---|---|---|
| Identity tag | `@script` | `@component` |
| Layer 1 taxonomy | `@type` (audit, generator, ...) | `@type` (elements, wrappers, ...) |
| Layer 2 taxonomy | `@concern` + `@niche` | `@subniche` |
| Human description | `@description` | `@description` |
| Status lifecycle | — | `@status` |
| System behaviour | `@mode` (read-only, write, ...) | `@accepts` (children, style, ...) |
| External data | — | `@dataSource` |
| Pipeline/flow | `@pipeline` | — (components don't have pipelines) |
| File scope | `@scope` | — (components don't operate on files) |
| CLI usage | `@usage` | — (components are imported, not invoked) |
| Policy tracing | `@policy` | — (governance enforced by scripts, not components) |
