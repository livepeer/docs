# SLICE-08 — snippets/ deep inventory audit

**Audit date:** 2026-05-19
**Auditor:** Senior docs engineer (read-only)
**Mode:** READ-ONLY inventory. No edits made to any file.
**Branch:** docs-v2-dev
**Scope:** Every text file under `snippets/` was opened. Binary assets sampled by path and size only.

---

## 1. Root-level governance — `snippets/`

| File | mtime | Size | Status | Notes |
|---|---|---|---|---|
| `snippets/guide.mdx` | 2026-04-08 23:26 | 14,092 B | active, canonical | Hand-authored taxonomy spec + machine-readable `SNIPPETS_FOLDER_METADATA` JSON block (lines 160-253) that drives the registry generator. Lists 7 governed lanes and an "outside steady-state" carve-out for `_workspace/` and `automations/`. |
| `snippets/snippets-registry.mdx` | 2026-04-09 02:19 | 54,437 B | active, **generated** | Generator: `operations/scripts/generators/governance/catalogs/generate-snippets-registry.js`. 923 lines. Frontmatter: `maintenance: generated`. Contains `<Tree>` covering lines 41-786 plus folder description table lines 787-923. |
| `snippets/GOVERNANCE.md` | 2026-04-07 23:00 | 469 B | active marker | Owner `@livepeer/docs-team`. Points at `docs-guide/frameworks/component-framework-canonical.mdx` and `docs-guide/frameworks/file-placement.mdx`. |
| `snippets/.allowlist` | 2026-05-22 11:19 | 213 B | active | D-GOV-08 top-level allowlist of 9 entries (GOVERNANCE.md, _workspace/, assets/, components/, composables/, data/, guide.mdx, snippets-registry.mdx, templates/). |
| `snippets/.DS_Store` | 2026-04-21 20:09 | 6,148 B | **stale junk** | macOS metadata; cleanup queue. |

**Root contract claim:** guide.mdx asserts the canonical root is exactly two files (guide.mdx + snippets-registry.mdx). The on-disk reality has 5 root files (above) plus the .DS_Store — only the .DS_Store violates the contract; GOVERNANCE.md and .allowlist are governance scaffolding sanctioned elsewhere in the repo.

**Registry/registry drift:** snippets-registry.mdx Folder Descriptions table (lines 868-878) labels `displays/accordions/`, `displays/cards/`, `displays/grids/`, `displays/steps/`, `displays/tables/` as "Subgroup inside the governed **wrappers** components subtree" — this is wrong. They are inside `displays/`, not `wrappers/`. The display rows are mis-tagged as if they had been ported from the old taxonomy. **Cross-slice finding #1 (taxonomy-drift).**

---

## 2. Components — overview by category

`snippets/components/` contains 35 active JSX module files and 24 archived JSX files. Each module typically exports multiple named components, so the canonical "132 active components" claim is the count of `@component` exports across the 35 modules. The split per the generated `snippets/components/INDEX.md` (2026-04-08T15:37:55Z) is:

| Category | Components (exports) | Stable | Experimental | Deprecated | Broken | Planned | Active .jsx modules |
|---|---:|---:|---:|---:|---:|---:|---:|
| Elements | 32 | 28 | 0 | 4 | 0 | 0 | 10 |
| Wrappers | 10 | 10 | 0 | 0 | 0 | 0 | 2 |
| Displays | 49 | 39 | 2 | 4 | 1 | 3 | 11 |
| Scaffolding | 21 | 20 | 0 | 1 | 0 | 0 | 3 |
| Integrators | 19 | 18 | 1 | 0 | 0 | 0 | 8 |
| Config | 1 | 1 | 0 | 0 | 0 | 0 | 1 |
| **Total** | **132** | **116** | **3** | **9** | **1** | **3** | **35** |

x-archive: 24 jsx files in 14 sub-dirs, all touched 2026-05-18 19:32 (last archive sweep).

**Governance surfaces inside `snippets/components/`:**

| File | mtime | Status |
|---|---|---|
| `snippets/components/INDEX.md` | 2026-04-09 02:19 | generated index across all categories |
| `snippets/components/LIBRARY.md` | 2026-04-09 02:19 | generated library with top-20 most used |
| `snippets/components/README.md` | 2026-04-09 02:19 | hand-authored governance pointer |
| `snippets/components/components-catalog.mdx` | 2026-04-09 02:19 | catalog used by docs surfaces |
| `snippets/components/component-composition-template.mdx` | 2026-04-09 02:19 | composition template |
| `snippets/components/component-framework-realignment-note.md` | 2026-04-03 06:08 | realignment note (oldest content) |
| Category INDEX/LIBRARY.md (6 of each) | 2026-04-08 15:37 (generated) | per-category indexes |

**Top-20 most-imported components (per LIBRARY.md):**
StyledTable (120), LinkArrow (119), TableCell (119), TableRow (119), BorderedBox (71), CenteredContainer (53), StyledStep (53), StyledSteps (53), CustomCardTitle (40), DoubleIconLink (32), ScrollBox (32), DynamicTable (28), InlineDivider (23), ScrollableDiagram (22), YouTubeVideo (21), Quote (13), SocialLinks (12), SearchTable (12), CopyText (11), GotoCard (11).

---

## 3. Components — per-module detail

Format: `module path | category claimed in JSDoc | live folder | status | mtime | exports`

### 3.1 Config (1 module / 1 component)

| Module | JSDoc category | Folder | mtime | Exports |
|---|---|---|---|---|
| `snippets/components/config/MermaidColours.jsx` | config | config/ | 2026-04-09 | `MermaidColours` (object, not a renderable component — config token) |

### 3.2 Displays (11 active modules / 49 components)

| Module | JSDoc category | Folder | mtime | Exports |
|---|---|---|---|---|
| `displays/accordions/Accordions.jsx` | displays | displays | 2026-04-09 | `AccordionGroupList`, `AccordionLayout` (+ default export of `AccordionGroupList`) |
| `displays/cards/Cards.jsx` | displays | displays | 2026-04-15 | `DisplayCard`, `WidthCard`, `InlineImageCard`, `InteractiveCard`, `InteractiveCards`, `ShowcaseCards`, `SolutionCard`, `SolutionItem` |
| `displays/code/Code.jsx` | displays | displays | 2026-04-09 | `CustomCodeBlock`, `CodeComponent`, `ComplexCodeBlock`, `CodeSection` |
| `displays/diagrams/ScrollableDiagram.jsx` | displays | displays | 2026-04-09 | `ScrollableDiagram` |
| `displays/grids/Grids.jsx` | displays | displays | 2026-04-28 | `CardCarousel`, `QuadGrid` |
| `displays/quotes/Quote.jsx` | displays | displays | 2026-04-13 | `Quote`, `FrameQuote` |
| `displays/response-fields/ResponseField.jsx` | displays | displays | 2026-04-09 | `ValueResponseField`, plus re-exports `CustomResponseField`, `FunctionField`, `ResponseFieldGroup`, `ResponseFieldAccordion`, `ResponseFieldExpandable` (single `export {}` block) |
| `displays/steps/Steps.jsx` | displays | displays | 2026-04-09 | `StyledSteps`, `StyledStep`, `ListSteps`, `BasicList` (planned), `IconList` (planned), `StepList`, `StepLinkList`, `UpdateList` (planned), `UpdateLinkList` |
| `displays/tables/Tables.jsx` | displays | displays | 2026-04-09 | `StyledTable`, `TableRow`, `TableCell`, `DynamicTable`, `DynamicTableV2`, `SearchTable`, `SearchTableV2` |
| `displays/video/Video.jsx` | displays | displays | 2026-04-29 | `TitledVideo`, `ShowcaseVideo`, `Video`, `YouTubeVideo`, `YouTubeVideoData`, `LinkedInEmbed`, `YouTubeVideoDownload`, `CardVideo` |
| `displays/tables/ApiBaseUrlsTable.mdx` | — | displays | (MDX, not JSX) | rendered MDX table — anomalous file placement |

### 3.3 Elements (10 active modules / 32 components)

| Module | JSDoc category | Folder | mtime | Exports |
|---|---|---|---|---|
| `elements/a11y/FocusableScrollRegion.jsx` | elements | elements | 2026-04-09 | `FocusableScrollRegions` |
| `elements/buttons/Buttons.jsx` | elements | elements | 2026-04-09 | `ExternalLinkButton`, `DownloadButton` |
| `elements/callouts/Callouts.jsx` | elements | elements | 2026-04-09 | `StatusCallout`, `IconCallout`, `ReviewCallout`, `ComingSoonCallout` (deprecated alias), `PreviewCallout` (deprecated alias), `CustomCallout` (deprecated alias of IconCallout), `TipWithArrow` (deprecated alias) |
| `elements/icons/Icons.jsx` | elements | elements | 2026-04-13 | `LivepeerSVG`, `ArbitrumSVG`, `ArbitrumIcon`, `BlinkingIcon`, `LivepeerIcon` |
| `elements/images/Image.jsx` | elements | elements | 2026-04-15 | `Image`, `LinkImage` |
| `elements/links/Links.jsx` | elements | elements | 2026-04-15 | local: `DoubleIconLink`, `LinkArrow`, `LinkIcon`, `AddressLinks`, `GotoCard`, `GotoLink`. Re-exports: `BlinkingIcon`, `CustomCallout`, `TipWithArrow`, `SocialLinks` (via `export {}` block). |
| `elements/math/Math.jsx` | elements | elements | 2026-04-09 | `MathInline`, `MathBlock` |
| `elements/spacing/Divider.jsx` | elements | elements | 2026-04-09 | `InlineDivider`, `CustomDivider`, `Spacer` |
| `elements/text/DataWrap.jsx` | elements | elements | 2026-04-09 | `DataWrap` (single value-wrap component) |
| `elements/text/Text.jsx` | elements | elements | 2026-05-05 | `Subtitle`, `CopyText`, `CardTitleTextWithArrow`, `CustomCardTitle`, `AccordionTitle`, `AccordionTitleWithArrow` |

Note: per generated INDEX, elements/ also lists components that originate from re-exports in Links.jsx (`SocialLinks` etc.). The CANONICAL definition for `SocialLinks` is the live Links.jsx — its archive copy is at `x-archive/elements-social/SocialLinks.jsx`.

### 3.4 Integrators (8 active modules / 19 components)

| Module | JSDoc category | Folder | mtime | Exports |
|---|---|---|---|---|
| `integrators/blog/BlogCards.jsx` | (no top header tag, file-level docstring only) | integrators | 2026-04-15 | `BlogCard`, `CardBlogDataLayout`, `ColumnsBlogCardLayout`, `RssBlogCard`, `RssBlogCardLayout`, `BlogDataLayout`, `PostCard`, `CardColumnsPostLayout`, `CardInCardLayout`, `ForumLatestLayout`, `DiscordAnnouncements`, `LumaEvents` |
| `integrators/embeds/DataEmbed.jsx` | integrators | integrators | 2026-05-06 | `SolidityEmbed`, `MarkdownEmbed`, `PdfEmbed`, `TwitterTimeline`, `ExternalContent` |
| `integrators/feeds/CanonicalContractAccordions.jsx` | **displays** (drift) | integrators/feeds | 2026-05-04 | `NonActiveContractsAccordion`, `HistoricalContractsAccordion` |
| `integrators/feeds/Coingecko.jsx` | integrators | integrators | 2026-04-09 | `CoinGeckoExchanges` |
| `integrators/feeds/ContractVerifier.jsx` | integrators | integrators | 2026-04-09 | `ContractVerifier` |
| `integrators/feeds/HistoricalContractTable.jsx` | **displays** (drift) | integrators/feeds | 2026-04-09 | `HistoricalContractTable` |
| `integrators/feeds/Release.jsx` | integrators | integrators | 2026-04-09 | `LatestVersion` |
| `integrators/video-data/VideoData.jsx` | integrators | integrators | 2026-04-15 | `YouTubeVideoData` |

**Drift:** `CanonicalContractAccordions.jsx` and `HistoricalContractTable.jsx` live under `integrators/feeds/` but declare `@category displays` in their JSDoc — taxonomy violation. Either the JSDoc is wrong or the folder is wrong. **Cross-slice finding #2.**

### 3.5 Scaffolding (3 active modules / 21 components)

| Module | JSDoc category | Folder | mtime | Exports |
|---|---|---|---|---|
| `scaffolding/frame-mode/FrameMode.jsx` | (file-level docstring, no per-component header) | scaffolding | 2026-04-13 | `PageHeader`, `H1`, `H2`, `H3`, `H4`, `H5`, `H6`, `P`, `FrameModeDivider`, `Divider` (deprecated alias) — single `export {}` block |
| `scaffolding/heroes/StarfieldCanvas.jsx` | scaffolding | scaffolding | 2026-04-13 | `Starfield` |
| `scaffolding/portals/Portals.jsx` | (file-level docstring, no per-component header) | scaffolding | 2026-04-13 | `HeroContentContainer`, `HeroImageBackgroundComponent`, `HeroOverviewContent`, `HeroSectionContainer`, `LogoHeroContainer`, `PortalCardsHeader`, `PortalContentContainer`, `PortalHeroContent`, `PortalSectionHeader`, `RefCardContainer` — single `export {}` block |

### 3.6 Wrappers (2 active modules / 10 components)

| Module | JSDoc category | Folder | mtime | Exports |
|---|---|---|---|---|
| `wrappers/badges/Badges.jsx` | wrappers | wrappers | 2026-04-28 | `BadgeWrapper`, `IconBadgeWrapper`, `BadgeRow` |
| `wrappers/containers/Containers.jsx` | wrappers | wrappers | 2026-04-15 | `BorderedBox`, `CenteredContainer`, `FullWidthContainer`, `FlexContainer`, `GridContainer`, `CalloutWrapper` |
| `wrappers/containers/Layout.jsx` | wrappers | wrappers | 2026-04-15 | `LazyLoad`, `ScrollBox` + re-exports `FlexContainer`, `GridContainer` |

**JSDoc 7-tag standard adherence (active components):** Modules where every exported component has a complete header: Cards, Code, ScrollableDiagram, Grids, Quote, Steps, Tables, Video, FocusableScrollRegion, Buttons, Icons, Image, Math, Text, DataWrap, BlogCards (partial — file-level), DataEmbed, CanonicalContractAccordions, Coingecko, ContractVerifier, HistoricalContractTable, Release, VideoData, StarfieldCanvas, Badges, Containers, Layout, Divider. Modules with file-level docstring instead of per-component 7-tag headers: FrameMode.jsx, Portals.jsx, BlogCards.jsx (mixed), ResponseField.jsx (single header for ValueResponseField only, rest inferred from generated INDEX). Callouts.jsx uses a file-level docstring rather than per-export 7-tag headers — generated INDEX still lists each export with status/description, so the index is upstream of the headers, not derived only from them. **Cross-slice finding #3.**

### 3.7 Archive (`snippets/components/x-archive/`)

All 24 files mtime 2026-05-18 19:32 (last archive sweep).

| Module | Original JSDoc category | Exports | Reason archived |
|---|---|---|---|
| `displays-accordions/AccordionGroupList.jsx` | wrappers (old taxonomy) | `AccordionGroupList` | Live in Accordions.jsx (displays/) |
| `displays-accordions/AccordionLayout.jsx` | wrappers | `AccordionLayout` | Live in Accordions.jsx |
| `displays-cards/CustomCards.jsx` | wrappers | `DisplayCard`, `WidthCard`, `InlineImageCard` | Live in Cards.jsx |
| `displays-cards/ShowcaseCards.jsx` | wrappers | `InteractiveCard`, `InteractiveCards`, `ShowcaseCards` | Live in Cards.jsx |
| `displays-cards/SolutionCard.jsx` | wrappers | `SolutionCard` | Live in Cards.jsx |
| `displays-cards/SolutionItem.jsx` | wrappers | `SolutionItem` | Live in Cards.jsx |
| `displays-grids/CardCarousel.jsx` | wrappers | `CardCarousel` | Live in Grids.jsx |
| `displays-grids/QuadGrid.jsx` | wrappers | `QuadGrid` | Live in Grids.jsx |
| `displays-pages/BlockchainContractsRenderers.jsx` | (no header) | `RenderFactLine`, `RenderAddressLine`, `RenderSourceInheritance`, `RenderGeneratedFunctionFields`, `RenderContractEmbed` | One-off render helpers — no canonical successor inside live tree |
| `displays-steps/ListSteps.jsx` | wrappers | `ListSteps` | Live in Steps.jsx |
| `displays-steps/Lists.jsx` | wrappers | `BasicList`, `IconList`, `StepList`, `StepLinkList`, `UpdateList`, `UpdateLinkList` | Live in Steps.jsx |
| `displays-tables/SearchTable.jsx` | wrappers + `@deprecated` | `SearchTable`, `SearchTableV2` | Live in Tables.jsx |
| `displays-tables/Table.jsx` | wrappers + `@deprecated` | `DynamicTable`, `DynamicTableV2` | Live in Tables.jsx |
| `elements-callouts/PreviewCallouts.jsx` | elements | `ComingSoonCallout`, `PreviewCallout`, `ReviewCallout`, `CalloutWrapper` | Replaced by StatusCallout/IconCallout in Callouts.jsx |
| `elements-social/SocialLinks.jsx` | elements | `SocialLinks` | Now re-exported from Links.jsx |
| `elements-spacing/Spacer.jsx` | elements | `Spacer` | Live in Divider.jsx |
| `elements-text/CustomCardTitle.jsx` | elements | `AccordionTitle`, `CustomCardTitle` | Live in Text.jsx |
| `integrators-feeds/ExternalContent.jsx` | integrators | `ExternalContent` | Live in DataEmbed.jsx |
| `integrators-feeds/ShowcaseCards.jsx` | integrators | `ShowcaseCards` | Replaced by ShowcaseCards in Cards.jsx (note category move) |
| `wrappers-containers/CalloutWrapper.jsx` | wrappers | `CalloutWrapper` | Live in Containers.jsx |
| `wrappers-containers/LazyLoad.jsx` | wrappers | `LazyLoad` | Live in Layout.jsx |
| `wrappers-containers/ScrollBox.jsx` | wrappers | `ScrollBox` | Live in Layout.jsx |
| `wrappers-steps-ghost/Steps.jsx` | wrappers | `StyledSteps`, `StyledStep` | Live in displays/steps/Steps.jsx |
| `wrappers-tables-ghost/Tables.jsx` | wrappers | `StyledTable`, `TableRow`, `TableCell` | Live in displays/tables/Tables.jsx |

Pattern: every archive file was originally in the `wrappers/` or `elements/`/`integrators/` lane; many were re-classified into the `displays/` lane during the taxonomy realignment. The archive preserves the prior taxonomy for traceability.

### 3.8 Component examples MDX (47 files)

47 example MDX files. Distribution:
- `components/component-composition-template.mdx`, `components/components-catalog.mdx` (root)
- `components/displays/examples/` — 11 files (code, diagrams, embed, external-content, quote × 2, response-field × 2, video, zoomable-diagram)
- `components/displays/tables/ApiBaseUrlsTable.mdx` — anomalous: an MDX file inside a JSX-only folder
- `components/examples/` — 14 files (a11y, buttons, callouts, divider, icons, image × 2, links, math, preview-callouts, social-links, social, spacing, text)
- `components/integrators/examples/` — 6 files (blog, coingecko, embeds, feeds, release, video-data)
- `components/scaffolding/examples/` — 3 files (frame-mode, heroes, portals)
- `components/wrappers/examples/` — 11 files (accordions, card-carousel, cards, containers, grids, lists, quad-grid, showcase-cards, steps, table, tables)

Some examples have duplicate variants (`image.mdx` + `images.mdx`, `quote-examples.mdx` + `quotes-examples.mdx`, `response-field-examples.mdx` + `response-fields-examples.mdx`, `social.mdx` + `social-links.mdx`, `table-examples.mdx` + `tables-examples.mdx`) — singular/plural drift not consolidated.

---

## 4. Templates inventory

37 template files under `snippets/templates/` plus 1 macOS junk file. All MDX except one zero-byte `tutorial-template.md`.

| Lane | File count | Notes |
|---|---:|---|
| `templates/` root | 3 | README.mdx, templates-catalog.mdx, .DS_Store (stale) |
| `templates/blocks/` | 4 | comparison-matrix, comparison-table, related-pages-cards, related-pages-cta |
| `templates/docs-guide/` | 6 | component-catalog-template, feature-map-page, framework-page, policy-page, script-catalog, tooling-reference-page |
| `templates/pages/canonical/` | 1 | template-catalog |
| `templates/pages/concepts-overviews/` | 1 | overview-page |
| `templates/pages/data-imports/` | 1 | social-data-page |
| `templates/pages/domain-pages/` | 1 | solutions-overview-template |
| `templates/pages/landing-and-navigation/` | 3 | landing-frame-page, navigation-page, portal-page |
| `templates/pages/repo-documentation/` | 2 | source-of-truth-template, source-of-truth (duplicate content) |
| `templates/pages/resources/` | 3 | changelog-automated-template, changelog-solutions-template, changelog-template, openapi-endpoint-page, reference-page |
| `templates/pages/resources/compendium/` | 6 | faq-page, glossary-consolidated, glossary-consolidated-template, glossary-tab, glossary-tab-template, troubleshooting-page |
| `templates/pages/resources/technical-reference/` | 1 | openapi-endpoint-page (duplicate of /resources/openapi-endpoint-page.mdx, both 748 B) |
| `templates/pages/setup-and-code-layouts/` | 1 | multi-view-page |
| `templates/pages/tutorial-and-guides/` | 3 (+ 0-byte .md) | how-to-page, tutorial-page, tutorial (+ tutorial-template.md 0 B) |
| `templates/pages/page-composition-framework.mdx` | 1 | The composition framework lives one level higher than the catalog rows it documents. |

**Templates oldest content:** tutorial-template.md (2026-03-21, 0 B — broken zero-byte file).
**Templates newest content:** social-data-page, solutions-overview-template, navigation-page, portal-page, source-of-truth*, changelog-automated-template, changelog-solutions-template, glossary-* × 4, multi-view-page (all 2026-04-09).

**Findings:**
- `source-of-truth.mdx` vs `source-of-truth-template.mdx` — same byte size (5,327 B), need diff to confirm dedup risk.
- `glossary-consolidated.mdx` vs `glossary-consolidated-template.mdx` (both 6,505 B) and `glossary-tab.mdx` vs `glossary-tab-template.mdx` (both 6,565 B) — identical byte size suggests duplicate content with one being the "filled" exemplar.
- `templates/pages/resources/openapi-endpoint-page.mdx` and `templates/pages/resources/technical-reference/openapi-endpoint-page.mdx` are 748 B each — likely identical copies.
- `templates/pages/tutorial-and-guides/tutorial-template.md` is 0 bytes — orphan placeholder.

---

## 5. Composables inventory

### 5.1 Top-level (`composables/`)

| File | mtime | Size | Status |
|---|---|---|---|
| `composables/README.md` | 2026-04-03 | 3,599 B | hand-authored governance (Layer-3 of three-layer architecture, naming/promotion rules, tier table) |
| `composables/composables-catalog.mdx` | 2026-04-03 | 1,799 B | shallow tree catalog — content out of date vs current `composables/pages/` (claims a `reference/` folder that doesn't exist; missing canonical/, changelogs/, gateways/, internal/, unclassified/ folders) |

**Drift:** the catalog references `composables/pages/reference/livepeer-contract-addresses.mdx`; the actual file is at `composables/pages/canonical/livepeer-contract-addresses.mdx`. **Cross-slice finding #4.**

### 5.2 Per-tab composables

Total: 73 MDX/JSX/JSON files under `composables/pages/` + 1 `.DS_Store` (stale) + 1 `.last_fetch` marker.

#### `composables/pages/about/concepts/` — 4 files (about-section page fragments)
- actors.mdx (2026-04-29, 3,541 B), network.mdx (2026-04-29, 5,978 B), overview.mdx (2026-04-29, 6,519 B), protocol.mdx (2026-04-29, 11,775 B)

#### `composables/pages/canonical/` — 22 files across 5 subfolders
- `apis-sdks/`: apis.mdx, pricing-rate-limits.mdx, pytrickle-reference.mdx, sdks.mdx (all 2026-05-19)
- `data/`: blockchain-contracts-data.jsx (2026-04-03, 8,422 B), livepeer-contract-addresses-page-data.jsx (2026-05-04, 2,277 B) — **anomalous: JSX in a composables/ folder, which by guide.mdx rule belongs in data/**
- `go-livepeer/`: bandwidth-requirements.mdx, cli-commands.mdx, cli-reference.mdx, configuration-flags.mdx, gpu-support.mdx, hardware-requirements.mdx, prometheus-metrics.mdx, technical-architecture.mdx (all 2026-05-19)
- `knowledge-hub/`: gateways-vs-orchestrators.mdx, livepeer-whitepaper.mdx (both 2026-05-19)
- `network-data/`: actors.mdx (status: current), arbitrum-exchanges.mdx, arbitrum-rpc.mdx, dashboards.mdx, livepeer-exchanges.mdx, model-demand-reference.mdx, orchestrator-offerings.mdx (all 2026-05-19)
- Top level: livepeer-contract-addresses-data.json (661,975 B — **large JSON in composables, also rule violation**), livepeer-contract-addresses.mdx (2026-05-04, 17,438 B), protocol-parameters.mdx (2026-05-19), verify-contract-addresses.mdx (2026-04-09)

#### `composables/pages/changelogs/` — 19 files (5 categories)
- ai-compute/: ai-runner, comfystream, pytrickle (3 files, all 2026-05-04)
- apis-sdks/: livepeer-ai-go, livepeer-ai-js, livepeer-ai-python, livepeer-js, livepeer-python (5 files, all 2026-05-04)
- ecosystem/: awesome-livepeer, website (2 files, all 2026-05-04)
- protocol/: go-livepeer, lips, naap, subgraph (4 files, all 2026-05-04)
- solutions/: daydream (2026-05-19, 60,284 B), embody, frameworks (2026-05-22, 38,570 B), livepeer-studio, streamplace (2026-05-22, 15,430 B)
- tooling/: explorer, livepeer-data, livepeer-python-gateway (3 files, all 2026-05-04)
- Top: changelog.mdx (2026-05-04, 5,227 B)

#### `composables/pages/gateways/` — empty directory (registered in guide.mdx folder metadata as `snippets/composables/pages/gateways` → no description). **Empty-folder finding.**

#### `composables/pages/gpu/diagrams/` — 1 file
- orchestratorRole.mdx (2026-04-04, 3,514 B)

#### `composables/pages/home/` — 1 file
- project-showcase.mdx (2026-04-09, 1,453 B)

#### `composables/pages/internal/` — 1 file
- docs-philosophy.mdx (2026-05-18, 13,026 B)

#### `composables/pages/shared/` — 7 files + 1 marker
- FrameModePageHeader.mdx (2026-04-03), awesome-livepeer-readme.mdx, box-additional-config.mdx, eth-account-setup.mdx, gwid-readme.mdx, whitepaper.mdx (61,158 B), wiki-readme.mdx (all 2026-05-22 except eth-account-setup at 2026-04-05 and FrameModePageHeader at 2026-04-03); `.last_fetch` marker file (2026-05-22, 11 B)

#### `composables/pages/unclassified/` — 8 files (Tier-1 composables per README.md)
- accordion-faq-section, accordion-glossary-section, accordion-troubleshooting-section, overview-intro-section, prerequisites-section, steps-section, validation-section (all 2026-04-03); related-resources-section.mdx (2026-05-17, 1,470 B — newest)

These are exactly the 8 "current composables" listed in `composables/README.md` lines 50-59, all sitting in an "unclassified" holding folder despite being canonical Tier-1 composables. **Cross-slice finding #5: Tier-1 composables are filed under "unclassified" naming.**

#### Standalone files in `composables/pages/`
- ecosystem.mdx (2026-04-13, 30,755 B)
- media-kit.mdx (2026-04-13, 6,898 B)
- roadmap.mdx (2026-04-13, 2,439 B)
- showcase.mdx (2026-04-14, 2,137 B)
- showcase-data.json (2026-04-14, 1,166 B) — **TAXONOMY VIOLATION: JSON data file in composables/, per guide.mdx Rule #1 should be in `snippets/data/`**
- trending-topics.mdx (2026-04-27, 7,475 B)

---

## 6. Data families inventory

13 data subfolders + 4 root-level data files. Total: 50+ data files.

| Family | Files | Fetcher script (declared in header) | Workflow | Newest mtime | Status |
|---|---|---|---|---|---|
| `data/` root | gateways.jsx, glossary-badges.jsx, variables.mdx | — (manual) | — | 2026-04-08 (glossary-badges) | mixed; gateways.jsx is a large catalog with a "Mintlify can't import this into a snippet" warning |
| `data/changelogs/` | contractAddressesData.jsx | fetch-contract-addresses.js | (none referenced) | 2026-04-03 | stale-looking (1 file dated 2026-04-03 although the canonical pipeline has refreshed in May) — **looks like a forgotten dump location** |
| `data/contract-addresses/` | 9 files (3 .json + 3 .jsx pairs + index.jsx, view-model.jsx, _branch-watch-state.json, _health-checks.json) | fetch-contract-addresses.js | governor-scripts (2cb192a) | 2026-05-22 (_health-checks.json), 2026-05-04 (all generated artifacts) | active pipeline; large 608 KB primary file |
| `data/exchanges/` | exchangesData.jsx | fetch-exchanges-data.js | `.github/workflows/update-exchanges-data.yml` | 2026-05-22 16:36 | live, fresh |
| `data/gateways/` | configFlagsData.jsx (24,711 B, 2026-05-22), configuration-flags.jsx (11,111 B, 2026-04-03 — **superseded duplicate**), notes.mdx (2026-03-18, 6,421 B), version.jsx (2026-04-05, 100 B re-export) | fetch-config-flags.js | `.github/workflows/update-config-flags.yml` | 2026-05-22 | fresh; configuration-flags.jsx is a stale predecessor |
| `data/globals/` | latestRelease.jsx | — (manual) | — | 2026-04-05 | tiny constant export `v0.8.10` |
| `data/reference-maps/` | badge-map.jsx (2026-04-08), icon-map.jsx (2026-04-13, 56,622 B — large) | manual + scan-generated | — | 2026-04-13 | active reference maps |
| `data/references/` | chainlist.jsx (2026-03-18), glossaryBadges.jsx (2026-04-06, 191 B) | manual | — | 2026-04-06 | very small reference data |
| `data/showcase-feed/` | showcaseData.jsx (2026-04-08, 11,086 B), showcaseDataPopulated.jsx (2026-04-08, 9,987 B) | — (likely n8n-driven, see assets/data/n8n/Showcase_*) | n8n | 2026-04-08 | stale — almost 6 weeks old, oldest of the active data families |
| `data/snapshots/` | CoinGeckoExchanges.json (placeholder, 178 B), SolidityEmbed.json (170 B), coingecko-arbitrum.json (2,097 B), coingecko-livepeer.json (1,714 B), .gitkeep | — | — | 2026-04-08 | mostly placeholders; `coingecko-*` are 2026-03-21 manual snapshots per the `_meta` block |
| `data/social-feed-solutions/` | 5 solution sub-folders (daydream 5 files, embody 4, frameworks 4, livepeer-studio 5, streamplace 3) + `.DS_Store` (stale) | per-solution fetchers (blog/discord/discussions/releases/youtube) | (n8n + GitHub Actions, varies) | 2026-05-22 (daydream/blogData.jsx 89,869 B, ×Discussions×4 stubs) | mixed freshness, several 2026-03-26 youtubeDataStatic.jsx files unchanged ~2 months |
| `data/social-feeds/` | discordAnnouncementsData.jsx (2026-04-14), forumData.jsx (2026-05-22, **1,012,239 B**), ghostBlogData.jsx (2026-04-14), lastUpdated.jsx (2026-04-14), lumaEventsData.jsx (2026-03-18), youtubeData.jsx (2026-05-22, 73 B empty), transformers/filterVideos.js (2026-04-05) | n8n flows + transformers/filterVideos.js | n8n | 2026-05-22 | forumData.jsx is the largest single file in the repo at ~1 MB; youtubeData.jsx is essentially empty |
| `data/variables/` | home.mdx | — (manual) | — | 2026-03-18 | very stale — single 3 KB MDX variable file unchanged for 2+ months |

**Health-check artifact:** `data/contract-addresses/_health-checks.json` (2026-05-22) recorded `endpoint: new-branch | status: FAIL | detail: Branch dependabot/docker/docker/ubuntu-26.04 was not present...` — last contract pipeline run reported a failure. Caller should treat contract-addresses freshness as stable from 2026-05-04 but with a known watcher fault from 2026-05-22.

---

## 7. Assets inventory (sizes by subfolder)

Total: 236 files, 41 subfolders, ~101.5 MB on disk.

| Path | Files | Size (KB) | Notes |
|---|---:|---:|---|
| `assets/README.mdx` | — | 1.5 | hand-authored migration status (site phase done, domain phase pending) |
| `assets/decision-log.mdx` | — | 5.7 | hand-authored Assets Restructure Decision Log |
| `assets/data/n8n/` | 11 | 312 KB | 11 n8n workflow JSON files. Includes `Discord_Announce_to_Mintlify.legacy-duplicate.json` (stale junk) |
| `assets/data/protocol-overview.html` | 1 | included in 4.7 MB total for assets/data | static HTML retained as data asset |
| `assets/domain/01_ABOUT/` | 1 | 80 KB | ProtocolNodeDiagram.png |
| `assets/domain/02_COMMUNITY/hero-images/` | 14 | 428 KB | _All flagged ARCHIVE in the workspace audit (no active refs)._ |
| `assets/domain/04_GATEWAYS/` | 2 | 32 KB | view-dropdown.png, code_examples/eliteproxy_launch.example..json (both ARCHIVE-flagged) |
| `assets/domain/10_PRODUCTS/Embody/Avatars/` | 1 | 972 KB | girl2.png (ARCHIVE-flagged) |
| `assets/domain/SHARED/` | 2 | 72 KB | LivepeerDocsHero.svg (ARCHIVE), LivepeerDocsLogo.svg (MOVE → logos/livepeer) |
| `assets/logos/Arbitrum/` | 4 | 84 KB | active product logos |
| `assets/logos/favicon/` | 8 | 64 KB | canonical favicon bundle (post-/site migration) |
| `assets/logos/products/` | 9 | 1.6 MB | solution product logos |
| `assets/logos/` (root) | 12 | (in 1.86 MB total) | Livepeer-* logo variants |
| `assets/media/diagrams/developers/persona-paths/` | 11 | 160 KB | persona-path diagrams |
| `assets/media/files/` | 1 | 8 KB | Livepeer_Ecosystem_Descriptions.pdf |
| `assets/media/heros/` | 70 | 6.0 MB | hero images grouped by surface (solutions/daydream, embody, frameworks, streamplace, studio, home) |
| `assets/media/images/` | 23 | 33.6 MB | site, home, industry, showcase scoped images |
| `assets/media/og-images/` | 58 | 14.3 MB | OG outputs per locale (cn, en, es, fr) + fallback + manifest |
| `assets/media/videos/` | 6 | 36.9 MB | retained video assets |
| **`assets/` total** | **236** | **~101.5 MB** | |

**Decision log says:** /site migration is complete; /domain audit is staged but not yet executed. The `domain/` tree should not be moved until the audit is approved. The workspace audit (`snippets/_workspace/audit.md`, 2026-04-04) classifies 38 of 52 domain files as ARCHIVE and 14 as MOVE.

---

## 8. Workspace lanes (`snippets/_workspace/`)

23 files including the `.gitkeep` markers. All mtime 2026-05-18 (last workspace sync). Not part of canonical steady-state per guide.mdx.

| File | Size | Purpose |
|---|---:|---|
| `audit.md` | 11.9 KB | The phase-two `/domain` asset audit (52 files classified MOVE/ARCHIVE). |
| `snippets-review.md` | 40.5 KB | The original audit that produced this consolidation. |
| `reports/automations-data-audit-2026-04-05.md` | 25.7 KB | Snippets automations + data audit (already cross-linked in CLAUDE.md's "Snippets Audit" thread row). |
| `reports/data-folder-audit.md` | 8.7 KB | Data folder audit. |
| `reports/snippets-templates-audit-2026-04-05.md` | 24.9 KB | Templates audit. |
| `archive/README.mdx` | 1.1 KB | Archive index. |
| `archive/assets-scripts/README-discord-issue-intake-workflow.md` | 4.7 KB | Workflow doc archive. |
| `archive/assets-scripts/README-project-showcase-application-workflow.md` | 5.4 KB | Workflow doc archive. |
| `archive/automations-catalog.mdx` | 3.5 KB | Old automations catalog. |
| `archive/data/API-README.md` | 3.6 KB | Old API readme. |
| `archive/data/contract-addresses-research.md` | 653 B | Old contract-addresses research note. |
| `archive/data/data-catalog.mdx` | 2.7 KB | Old data catalog. |
| `archive/framework-canonical.mdx` | 1.1 KB | Old framework doc (now lives in docs-guide/frameworks/). |
| `archive/script-index.md` | 370 B | Old script index. |
| `archive/snippetsWiki/README.md`, `index.mdx`, `theme-colors.mdx`, `componentLibrary/index.mdx`, `componentLibrary/examples/frame-mode.mdx`, `componentLibrary/examples/tip-with-arrow-examples.mdx` | 5–6 KB each | Archived snippets wiki (predecessor to current registry). |
| `asset-staging/.gitkeep` | 0 B | Empty staging area. |

---

## 9. Cross-slice findings (10)

1. **Registry display rows mis-tagged as wrappers.** `snippets/snippets-registry.mdx` lines 868–878 label the `displays/accordions/`, `displays/cards/`, `displays/grids/`, `displays/steps/`, `displays/tables/` rows as "Subgroup inside the governed **wrappers** components subtree" — generator template error from the old taxonomy. Drift between registry and live filesystem (P1).
2. **Two integrators feed files declare `@category displays`.** `integrators/feeds/CanonicalContractAccordions.jsx` and `integrators/feeds/HistoricalContractTable.jsx` claim `@category displays` in JSDoc but live under `integrators/feeds/`. Either the folder or the tag is wrong; the live component-index generator currently treats them as displays despite folder placement.
3. **Component count drift across 4 surfaces.** Surface A = filesystem (35 active .jsx modules). Surface B = INDEX.md = 132 components (counted as exports). Surface C = LIBRARY.md = 132 (matches). Surface D = the wrappers-claim in registry table (mis-tagged). The two correct numbers (35 modules / 132 exports) are not co-published anywhere, making it look like the module count drifted from 132 to 35 — actually the same library counted at different granularity.
4. **Composables catalog out of date.** `composables/composables-catalog.mdx` describes a tree with `reference/livepeer-contract-addresses.mdx` and only 6 sub-folders; live tree has `canonical/`, `changelogs/`, `gateways/` (empty), `internal/`, `unclassified/` plus standalone files at `composables/pages/` root.
5. **Tier-1 composables filed under "unclassified".** README.md lists 8 canonical composables as Tier-1 (mandatory or recommended for specific page types). All 8 live in `composables/pages/unclassified/`. The naming contradicts the canonical status.
6. **JSX/JSON inside composables/ violates guide.mdx Rule #1.** `composables/pages/showcase-data.json` (1.1 KB), `composables/pages/canonical/data/blockchain-contracts-data.jsx`, `composables/pages/canonical/data/livepeer-contract-addresses-page-data.jsx`, `composables/pages/canonical/livepeer-contract-addresses-data.json` (662 KB) — by the placement rules these belong under `snippets/data/`, not `snippets/composables/`. The largest is the 662 KB contract-addresses JSON parked in composables/.
7. **Empty registered folder.** `snippets/composables/pages/gateways/` exists on disk but contains zero files; registry tree skips it but the folder is on filesystem.
8. **Stale freshness in showcase-feed and variables.** `data/showcase-feed/` newest mtime 2026-04-08; `data/variables/home.mdx` 2026-03-18; `data/changelogs/contractAddressesData.jsx` 2026-04-03 (orphan — looks like a forgotten dump location; canonical contracts data lives in `data/contract-addresses/`). All three families are ≥40 days stale vs the active pipelines.
9. **.DS_Store + .bak cleanup queue.** 11 .DS_Store files (`snippets/.DS_Store`, `components/.DS_Store` × 6 including category roots, `templates/.DS_Store`, `data/.DS_Store`, `data/social-feed-solutions/.DS_Store`, `composables/pages/.DS_Store`) + 1 legacy-duplicate JSON (`assets/data/n8n/Discord_Announce_to_Mintlify.legacy-duplicate.json`) + 1 zero-byte file (`templates/pages/tutorial-and-guides/tutorial-template.md`). Total 13 files to purge.
10. **Template duplicates.** Five exact-byte-size pairs in `templates/pages/` suggest duplicate content: `source-of-truth.mdx` + `source-of-truth-template.mdx` (5,327 B each), `glossary-consolidated.mdx` + `glossary-consolidated-template.mdx` (6,505 B each), `glossary-tab.mdx` + `glossary-tab-template.mdx` (6,565 B each), `templates/pages/resources/openapi-endpoint-page.mdx` + `templates/pages/resources/technical-reference/openapi-endpoint-page.mdx` (748 B each). Component examples also have singular/plural drift (`image.mdx` + `images.mdx`, `quote-examples.mdx` + `quotes-examples.mdx`, etc.).

---

## 10. Consolidation matrix

Recommended actions, ordered by P0→P3.

| # | Action | Touches | Priority |
|---|---|---|---|
| 1 | Delete 11 `.DS_Store` files + `Discord_Announce_to_Mintlify.legacy-duplicate.json` + zero-byte `tutorial-template.md`. | snippets/ tree | P0 |
| 2 | Move 4 misplaced data files out of `composables/` into `snippets/data/`: `composables/pages/showcase-data.json` → `data/showcase-feed/`; `composables/pages/canonical/data/*.jsx` (2 files) → `data/contract-addresses/`; `composables/pages/canonical/livepeer-contract-addresses-data.json` (662 KB) → `data/contract-addresses/`. Update import paths. | composables, data, MDX consumers | P0 |
| 3 | Fix the registry generator template so `displays/*` rows do not get labelled "wrappers subtree". Re-run `generate-snippets-registry.js --write`. | operations/scripts/generators/governance/catalogs/, snippets-registry.mdx | P0 |
| 4 | Resolve the two `@category displays` JSX files filed under `integrators/feeds/`. Either move them to `displays/accordions/` and `displays/tables/`, or change their JSDoc. Either way, re-run the component-index generator. | components/integrators/feeds/, generated indexes | P1 |
| 5 | Promote the 8 Tier-1 composables out of `composables/pages/unclassified/` into a permanent lane (`composables/pages/sections/` or per-tier folder). README.md already documents the canonical names; the folder name "unclassified" is the only blocker. | composables/, all MDX importers | P1 |
| 6 | Delete or repopulate the empty `composables/pages/gateways/` folder. | composables | P2 |
| 7 | Regenerate `composables/composables-catalog.mdx` from live tree (current contents miss canonical/, changelogs/, internal/, unclassified/ and reference a non-existent `reference/` folder). | composables/composables-catalog.mdx | P1 |
| 8 | Decide fate of `data/changelogs/contractAddressesData.jsx` (orphan dump from 2026-04-03) and `data/gateways/configuration-flags.jsx` (superseded by configFlagsData.jsx). Archive both or delete. | data/ | P2 |
| 9 | Refresh stale data families: `data/showcase-feed/` (≥40 days), `data/variables/home.mdx` (60+ days), several social-feed-solutions/{frameworks,streamplace}/youtubeDataStatic.jsx files (2 months stale). Or document why these are intentionally static. | data/ | P2 |
| 10 | Execute the phase-two `/domain` asset audit (already authored in `_workspace/audit.md`, 2026-04-04). 38 files to archive, 14 to move into the `media/heros/`, `media/images/`, `media/videos/`, `logos/` lanes. | assets/domain/ → assets/media/* + _workspace/archive/ | P1 |
| 11 | Investigate and either fix or document the contracts pipeline `_health-checks.json` failure (2026-05-22) so the contract-addresses dataset is known-good. | data/contract-addresses/_health-checks.json | P1 |
| 12 | Deduplicate templates: `source-of-truth.mdx` vs `source-of-truth-template.mdx`, `glossary-*` pairs (4 files), `openapi-endpoint-page.mdx` duplicate copies. Singular/plural example MDX dedup (`image.mdx`/`images.mdx`, `quote(s)-examples.mdx`, `response-field(s)-examples.mdx`, `social(.|-links).mdx`, `table(s)-examples.mdx`). | templates/, components/*/examples/ | P2 |
| 13 | Add a canonical "module count vs export count" disclaimer to `LIBRARY.md` / `INDEX.md` so future readers don't think the library shrank from 132 to 35. | components/INDEX.md, components/LIBRARY.md | P3 |
| 14 | Decide whether `displays/tables/ApiBaseUrlsTable.mdx` (MDX in a JSX-only folder) should move to `components/displays/examples/` or be promoted to a composable. | components/displays/tables/ | P3 |

---

## Summary numbers

- **Active component modules:** 35 `.jsx` files
- **Active component exports (per generated INDEX):** 132 (32 elements, 49 displays, 21 scaffolding, 19 integrators, 10 wrappers, 1 config)
- **Archived component files:** 24 `.jsx` files under `x-archive/`
- **Component example MDX files:** 47
- **Templates:** 37 MDX/MD + 1 stale `.DS_Store`
- **Composables (top-level + per-tab):** 73 files under `composables/pages/` + 2 top-level governance files
- **Data files (excluding snapshots placeholders + .gitkeep):** 50+ across 13 family subfolders
- **Assets:** 236 files across 41 subfolders, ~101.5 MB
- **Workspace files:** 23 (audit, reports, archive)
- **Junk to purge:** 13 files (11 `.DS_Store` + 1 legacy-duplicate JSON + 1 zero-byte template)
