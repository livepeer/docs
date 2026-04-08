# Component Naming & Consolidation Audit

**Date:** 2026-04-08
**Thread:** Component Naming Audit
**Scope:** Full inventory of all components — names, locations, exports, naming problems, consolidation candidates
**Status:** Read-only report. No changes made.

---

## Stats

- **52 component files** in `snippets/components/`
- **~100+ exported components** across those files
- **12 components** defined outside `snippets/components/` (inline in MDX pages, v2 jsx files)
- **2 dead components** (never imported)
- **674 → 1 import range** (Divider.jsx most used, MermaidColours least)

---

## 1. Full inventory

### elements/ — Atomic building blocks

| File | Exports | Imports | Purpose |
|---|---|---|---|
| `elements/spacing/Divider.jsx` | `InlineDivider`, `CustomDivider` | 674 | Horizontal rules (simple + ornate) |
| `elements/spacing/Spacer.jsx` | `Spacer` | 7 | Empty spacing div |
| `elements/links/Links.jsx` | `CustomCallout`, `BlinkingIcon`, `BlinkingTerminal`, `DoubleIconLink`, `GotoLink`, `GotoCard`, `TipWithArrow`, `LinkArrow`, `LinkIcon`, `AddressLinks` | 617 | Links, callout-links, navigation elements |
| `elements/text/Text.jsx` | `Subtitle`, `CopyText`, `CardTitleTextWithArrow`, `AccordionTitleWithArrow` | 103 | Styled text fragments |
| `elements/text/CustomCardTitle.jsx` | `CustomCardTitle`, `AccordionTitle` | 51 | Card/accordion title rows with icon |
| `elements/icons/Icons.jsx` | `LivepeerSVG`, `ArbitrumSVG`, `ArbitrumIcon`, `LivepeerIcon` | 49 | Brand SVG icons |
| `elements/images/Image.jsx` | `Image`, `LinkImage` | 60 | Framed images with optional caption/link |
| `elements/buttons/Buttons.jsx` | `ExternalLinkButton`, `DownloadButton` | 29 | Action buttons |
| `elements/math/Math.jsx` | `MathInline`, `MathBlock` | 66 | KaTeX math rendering |
| `elements/callouts/PreviewCallouts.jsx` | `ComingSoonCallout`, `PreviewCallout`, `ReviewCallout`, `CalloutWrapper` | 88 | Status banners |
| `elements/social/SocialLinks.jsx` | `SocialLinks` | 31 | Social media icon row |
| `elements/a11y/A11y.jsx` | `FocusableScrollRegions` | 12 | Keyboard accessibility helper |

### wrappers/ — Layout containers and structural wrappers

| File | Exports | Imports | Purpose |
|---|---|---|---|
| `wrappers/containers/Containers.jsx` | `BorderedBox`, `CenteredContainer`, `FullWidthContainer` + re-exports FlexContainer, GridContainer, Spacer | 283 | General-purpose layout containers |
| `wrappers/containers/Layout.jsx` | `FlexContainer`, `GridContainer`, `Spacer` | 37 | Core flex/grid primitives |
| `wrappers/containers/ScrollBox.jsx` | `ScrollBox` | 53 | Scrollable container with overflow hint |
| `wrappers/containers/LazyLoad.jsx` | `LazyLoad` | 46 | Intersection Observer deferred rendering |
| `wrappers/tables/Tables.jsx` | `StyledTable`, `TableRow`, `TableCell` | 349 | Low-level semantic table elements |
| `wrappers/tables/Table.jsx` | `DynamicTable`, `DynamicTableV2` | 134 | Data-driven table renderers |
| `wrappers/tables/SearchTable.jsx` | `SearchTable`, `SearchTableV2` | 39 | Filterable/searchable table |
| `wrappers/steps/Steps.jsx` | `StyledSteps`, `StyledStep` | 199 | Styled Mintlify Steps wrapper |
| `wrappers/lists/Lists.jsx` | `BasicList`\*, `IconList`\*, `StepList`, `StepLinkList`, `UpdateList`\*, `UpdateLinkList` | 47 | List renderers (\* = not implemented) |
| `wrappers/lists/ListSteps.jsx` | `ListSteps` | 7 | Steps list (duplicate of StepList) |
| `wrappers/cards/CustomCards.jsx` | `DisplayCard`, `WidthCard`, `InlineImageCard` | 70 | Card layout variants |
| `wrappers/cards/ShowcaseCards.jsx` | `InteractiveCard`, `InteractiveCards`, `ShowcaseCards` | 12 | Filtered/paginated card display |
| `wrappers/cards/SolutionCard.jsx` | `SolutionCard` | 1 | Solutions portal card |
| `wrappers/accordions/AccordionGroupList.jsx` | `AccordionGroupList` | 2 | Numbered accordion sections |
| `wrappers/accordions/AccordionLayout.jsx` | `AccordionLayout` | 11 | Accordion content layout |
| `wrappers/grids/QuadGrid.jsx` | `QuadGrid` | 20 | 2x2 grid with rotating icon |
| `wrappers/grids/CardCarousel.jsx` | `CardCarousel` | 17 | Paginated horizontal carousel |
| `wrappers/badges/Badges.jsx` | `BadgeWrapper`, `IconBadgeWrapper` | 9 | Badge/tag row containers |
| `wrappers/custom/SolutionItem.jsx` | `SolutionItem` | 1 | Solutions listing entry |
| `wrappers/data/workflows.jsx` | `DataWrap` | 15 | Transparent data value renderer |

### displays/ — Content visualisation

| File | Exports | Imports | Purpose |
|---|---|---|---|
| `displays/video/Video.jsx` | `TitledVideo`, `ShowcaseVideo`, `Video`, `YouTubeVideo`, `YouTubeVideoData`, `LinkedInEmbed`, `YouTubeVideoDownload`, `CardVideo` | 163 | Video players and embeds |
| `displays/code/Code.jsx` | `CustomCodeBlock`, `CodeComponent`, `ComplexCodeBlock`, `CodeSection` | 72 | Code blocks with notes |
| `displays/quotes/Quote.jsx` | `Quote`, `FrameQuote` | 87 | Styled blockquotes |
| `displays/response-fields/ResponseField.jsx` | `ValueResponseField`, `CustomResponseField`, `ResponseFieldExpandable`, `ResponseFieldAccordion`, `ResponseFieldGroup`, `FunctionField` | 62 | API response field display |
| `displays/diagrams/ZoomableDiagram.jsx` | `ScrollableDiagram` | 131 | Pannable diagram container |
| `displays/tables/HistoricalContractTable.jsx` | `HistoricalContractTable` | 7 | Contract version history table |
| `displays/pages/BlockchainContractsRenderers.jsx` | `RenderFactLine`, `RenderAddressLine`, `RenderSourceInheritance`, `RenderGeneratedFunctionFields`, `RenderContractEmbed` | **0 (DEAD)** | Contract page render helpers |

### scaffolding/ — Page-level structure

| File | Exports | Imports | Purpose |
|---|---|---|---|
| `scaffolding/frame-mode/FrameMode.jsx` | `PageHeader`, `H1`-`H6`, `P`, `Divider` | 129 | Frame-mode page overrides |
| `scaffolding/portals/Portals.jsx` | `HeroSectionContainer`, `HeroImageBackgroundComponent`, `HeroContentContainer`, `HeroOverviewContent`, `PortalContentContainer`, `PortalHeroContent`, `PortalCardsHeader`, `PortalSectionHeader`, `LogoHeroContainer`, `RefCardContainer` | 110 | Portal page layout containers |
| `scaffolding/heroes/HeroGif.jsx` | `Starfield` | 45 | Animated starfield background |

### integrators/ — Data-driven and external content

| File | Exports | Imports | Purpose |
|---|---|---|---|
| `integrators/blog/Data.jsx` | `BlogCard`, `CardBlogDataLayout`, `ColumnsBlogCardLayout`, `RssBlogCard`, `RssBlogCardLayout`, `BlogDataLayout`, `PostCard`, `CardColumnsPostLayout`, `CardInCardLayout`, `ForumLatestLayout`, `DiscordAnnouncements`, `LumaEvents` | 87 | Blog/feed/event card layouts |
| `integrators/embeds/DataEmbed.jsx` | `SolidityEmbed`, `MarkdownEmbed`, `PdfEmbed`, `TwitterTimeline` | 70 | Remote content embeds |
| `integrators/embeds/ExternalContent.jsx` | `ExternalContent` | 21 | Fetch and render external markdown |
| `integrators/feeds/ShowcaseCards.jsx` | `ShowcaseCards` | 13 | Paginated showcase (DUPLICATE) |
| `integrators/feeds/Release.jsx` | `LatestVersion` | 11 | Latest release version badge |
| `integrators/feeds/Coingecko.jsx` | `CoinGeckoExchanges` | 31 | Exchange data table |
| `integrators/feeds/ContractVerifier.jsx` | `ContractVerifier` | 6 | Contract verification display |
| `integrators/feeds/contractVerifierData.js` | (data) | **0 (DEAD)** | Unused data file |
| `integrators/video-data/VideoData.jsx` | `YouTubeVideoData` | 23 | YouTube grid (DUPLICATE of Video.jsx export) |

### config/

| File | Exports | Imports | Purpose |
|---|---|---|---|
| `config/MermaidColours.jsx` | `MermaidColours` | 1 | Mermaid diagram theme config |

---

## 2. Naming problems

### Problem A: Names that do not describe what the component IS

| Current name | File | What it actually is | Suggested name pattern |
|---|---|---|---|
| `Data.jsx` | integrators/blog/ | Blog/feed card layouts | `BlogCards.jsx` or `FeedCards.jsx` |
| `workflows.jsx` | wrappers/data/ | Transparent data value renderer | `DataValueWrapper.jsx` |
| `A11y.jsx` | elements/a11y/ | Focusable scroll region helper | `FocusableScrollRegion.jsx` |
| `HeroGif.jsx` | scaffolding/heroes/ | Animated starfield canvas | `StarfieldCanvas.jsx` |
| `LazyLoad.jsx` | wrappers/containers/ | IntersectionObserver deferred render | Fine as-is, but lives in wrong folder (not a container) |
| `ScrollableDiagram` | displays/diagrams/ | Pannable + zoomable diagram container | File is `ZoomableDiagram.jsx` but export is `ScrollableDiagram` — mismatch |

### Problem B: File name does not match export name

| File | Export(s) | Mismatch |
|---|---|---|
| `ZoomableDiagram.jsx` | `ScrollableDiagram` | File says "Zoomable", export says "Scrollable" |
| `HeroGif.jsx` | `Starfield` | File says "HeroGif", export says "Starfield" |
| `workflows.jsx` | `DataWrap` | File says "workflows", export says "DataWrap" |

### Problem C: Naming collisions

| Component name | File 1 | File 2 | Conflict |
|---|---|---|---|
| `Divider` | `elements/spacing/Divider.jsx` (as InlineDivider, CustomDivider) | `scaffolding/frame-mode/FrameMode.jsx` (as Divider) | FrameMode exports bare `Divider` — shadows the spacing module's namespace |
| `ShowcaseCards` | `wrappers/cards/ShowcaseCards.jsx` | `integrators/feeds/ShowcaseCards.jsx` | Same component name, same file name, two locations |
| `YouTubeVideoData` | `displays/video/Video.jsx` | `integrators/video-data/VideoData.jsx` | Same component name exported from two files |
| `Spacer` | `elements/spacing/Spacer.jsx` | `wrappers/containers/Layout.jsx` | Both export `Spacer` — Layout.jsx version re-exported via Containers.jsx |

### Problem D: Generic/opaque names

These components are impossible to find by name because the name does not hint at their purpose:

| Name | File | Better name |
|---|---|---|
| `CustomCallout` | Links.jsx | `IconCallout` or `ColourCallout` |
| `TipWithArrow` | Links.jsx | `CalloutWithArrowLink` |
| `BlinkingIcon` | Links.jsx | `PulsingStatusIcon` |
| `BlinkingTerminal` | Links.jsx | `PulsingTerminalIcon` |
| `DataWrap` | workflows.jsx | `InlineDataValue` |
| `DisplayCard` | CustomCards.jsx | `IconHeaderCard` |
| `WidthCard` | CustomCards.jsx | `ConstrainedCard` |

---

## 3. Variant-merge candidates

These are components that are structurally near-identical and should be a single component with a `variant` or `type` prop.

### Tier 1 — Identical code, merge immediately

| Components | Files | What differs | Proposed merge |
|---|---|---|---|
| **ShowcaseCards** (feeds) + **ShowcaseCards** (cards) | `integrators/feeds/ShowcaseCards.jsx` + `wrappers/cards/ShowcaseCards.jsx` | 3 CSS colour variables | Single `ShowcaseCards` with `theme="feeds" \| "cards"` |
| **YouTubeVideoData** (Video.jsx) + **YouTubeVideoData** (VideoData.jsx) | `displays/video/Video.jsx` + `integrators/video-data/VideoData.jsx` | Spacer divs between rows | Single export with `withSpacers` prop |
| **StepList** + **ListSteps** | `wrappers/lists/Lists.jsx` + `wrappers/lists/ListSteps.jsx` | ListSteps has validation + stepsConfig | Keep ListSteps (more robust), delete StepList |
| **ComingSoonCallout** + **PreviewCallout** | `elements/callouts/PreviewCallouts.jsx` | Icon (cauldron vs tools), colour, title text | Single `StatusCallout` with `type="coming-soon" \| "preview"` |

### Tier 2 — Same pattern, minor structural differences

| Components | Files | What differs | Proposed merge |
|---|---|---|---|
| **TitledVideo** + **ShowcaseVideo** | `displays/video/Video.jsx` | ShowcaseVideo = TitledVideo + negative margins | `TitledVideo` with `variant="showcase"` (adds breakout margins) |
| **InlineDivider** + FrameMode **Divider** | `elements/spacing/Divider.jsx` + `scaffolding/frame-mode/FrameMode.jsx` | Default values for margin (0.75rem vs 1.5rem) and opacity (0.4 vs 0.2) | Single `InlineDivider` with `variant="compact" \| "frame"` — or FrameMode imports InlineDivider with different defaults |
| **ResponseFieldExpandable** + **ResponseFieldAccordion** | `displays/response-fields/ResponseField.jsx` | Wrapper component (Expandable vs Accordion) | Already handled by `ResponseFieldGroup` which takes a `component` prop — deprecate the two standalone ones |
| **StepList** + **StepLinkList** | `wrappers/lists/Lists.jsx` | StepLinkList wraps items in GotoLink | `StepList` with `linkMode` or `variant="linked"` prop |
| **MarkdownEmbed** + **ExternalContent** | `integrators/embeds/DataEmbed.jsx` + `integrators/embeds/ExternalContent.jsx` | ExternalContent adds source link + scrollable container | Merge into `MarkdownEmbed` with `showSource` and `scrollable` props |
| **CustomCallout** + **TipWithArrow** | `elements/links/Links.jsx` | TipWithArrow adds corner arrow overlay | Single `IconCallout` with `showArrow` prop |
| **BadgeWrapper** + **IconBadgeWrapper** | `wrappers/badges/Badges.jsx` | IconBadgeWrapper has icon+label pairs vs plain labels | Single `BadgeRow` with `variant="text" \| "icon"` |

### Tier 3 — Same family, could share base

| Components | Files | Proposed approach |
|---|---|---|
| **YouTubeVideo** + **CardVideo** | `displays/video/Video.jsx` | Share iframe logic, differ on wrapper: `wrapper="frame" \| "card"` |
| 6 Portal containers (HeroSectionContainer, HeroContentContainer, PortalContentContainer, RefCardContainer, etc.) | `scaffolding/portals/Portals.jsx` | Reduce to 2-3: `PortalContainer` with `layout` prop + `PortalHeader` with `level` prop |
| **PortalCardsHeader** + **PortalSectionHeader** | `scaffolding/portals/Portals.jsx` | Single `PortalSectionHeader` with `variant="cards" \| "section"` |
| **DynamicTable** + **DynamicTableV2** | `wrappers/tables/Table.jsx` | V2 supersedes V1 (adds ResizeObserver). Migrate consumers, delete V1 |
| **SearchTable** + **SearchTableV2** | `wrappers/tables/SearchTable.jsx` | Same — V2 supersedes V1 |
| Blog card layouts (12 exports in Data.jsx) | `integrators/blog/Data.jsx` | Many are layout variants. Reduce to 3-4 base components with layout props |

---

## 4. Dead / broken / stub components

| Component | File | Issue | Action |
|---|---|---|---|
| `BlockchainContractsRenderers.jsx` | `displays/pages/` | 0 imports — never used | Delete |
| `contractVerifierData.js` | `integrators/feeds/` | 0 imports — superseded by ContractVerifier.jsx | Delete |
| `YouTubeVideoDownload` | `displays/video/Video.jsx` | Render content is commented out — non-functional | Delete or restore |
| `BasicList` | `wrappers/lists/Lists.jsx` | Returns empty fragment — not implemented | Delete or implement |
| `IconList` | `wrappers/lists/Lists.jsx` | Returns empty fragment — not implemented | Delete or implement |
| `UpdateList` | `wrappers/lists/Lists.jsx` | Hardcoded single item — not using array | Delete or fix |

---

## 5. Folder misplacements

| Component | Current location | Should be in | Reason |
|---|---|---|---|
| `Badges.jsx` | `wrappers/badges/` | `elements/badges/` | Badges are atomic elements, not structural wrappers |
| `LazyLoad.jsx` | `wrappers/containers/` | `wrappers/utilities/` or `elements/a11y/` | Not a visual container — it is a behaviour wrapper |
| `workflows.jsx` (DataWrap) | `wrappers/data/` | `elements/text/` | Renders inline data values — it is a text element |
| `SocialLinks.jsx` | `elements/social/` | `elements/links/` | It is a row of links |
| `HistoricalContractTable.jsx` | `displays/tables/` | `integrators/feeds/` | It is a data-driven feed component, not a display primitive |

---

## 6. Components defined outside snippets/components/

| Component | File | Purpose | Should it move? |
|---|---|---|---|
| `QuickStartTabs`, `QuickStartSteps` | `v2/gateways/quickstart/components/quickstartTabs.jsx` | Gateway-specific tabbed setup | Fine where it is (page-scoped) |
| `ChainlistRPCs` | `snippets/data/references/chainlist.jsx` | RPC endpoint fetcher | Move to `integrators/feeds/` — it is a data feed component |
| `DemoPlayer`, `AssetPlayer`, `LiveStreamPlayer`, `LivePlayer`, `GatedPlayer`, `VideoPlayer`, `IPFSVideoPlayer` | Various `v2/` MDX files | Inline Livepeer Player wrappers | Fine as inline (page-scoped demo components) |

---

## 7. Summary of recommended actions

| Priority | Action | Components affected | Impact |
|---|---|---|---|
| **P0** | Merge duplicate ShowcaseCards | 2 files to 1 | Eliminates identical 300+ line duplication |
| **P0** | Merge duplicate YouTubeVideoData | 2 files to 1 | Eliminates near-identical code |
| **P0** | Delete dead components | 3 files/exports | Reduces confusion |
| **P1** | Rename file-export mismatches | ZoomableDiagram, HeroGif, workflows | Findability |
| **P1** | Merge StatusCallout variants | ComingSoon + Preview to 1 | Cleaner pattern |
| **P1** | Merge StepList/ListSteps | 2 to 1 | Eliminates confusion |
| **P1** | Deprecate ResponseFieldExpandable/Accordion | 2 to use ResponseFieldGroup | Already has generic version |
| **P2** | Rename opaque component names | ~10 components | Findability |
| **P2** | Merge TitledVideo/ShowcaseVideo | variant prop | Cleaner pattern |
| **P2** | Consolidate Portal containers | 10 to 4-5 | Reduces scaffolding sprawl |
| **P2** | Fix folder misplacements | 5 components | Correct taxonomy |
| **P3** | Delete/implement stub components | BasicList, IconList, UpdateList | Clean dead code |
| **P3** | Merge MarkdownEmbed/ExternalContent | 2 to 1 | Reduces embed sprawl |
| **P3** | Consolidate blog Data.jsx | 12 to 4-5 | Reduces card layout sprawl |
| **P3** | Migrate V1 to V2 for tables | DynamicTable, SearchTable | Remove legacy versions |
