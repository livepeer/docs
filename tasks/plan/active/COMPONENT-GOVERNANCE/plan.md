# Component Governance Restructuring Plan

> **Status**: Active — Tasks 1–15, 17, 18 complete. Remaining: T16, T19 (partial), T20, T21.
> **Branch**: `docs-v2-dev-components` — **merged into `docs-v2-dev`** (commit `be1e2d55`)
> **Last updated**: 2026-03-21

<CustomDivider />

## Workflow Protocol

### Branch & Worktree Strategy
- Create branch `docs-v2-dev-components` from `docs-v2-dev`.
- Create worktree at `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev-components` on that branch.
- Attach worktree to VSCode workspace for live editing.
- **All work happens in the worktree**. No direct edits to the `docs-v2-dev` base.
- Before starting each task: `git fetch origin && git merge origin/docs-v2-dev` in the worktree to sync latest remote changes.
- **Nothing is deleted.** Superseded files are `git mv`'d to `components/x-archive/` only after all consumers (pages, imports, other components) are updated and verified.
- Final merge back to `docs-v2-dev` only after full verification of the working branch.

### Import Tracking Protocol
Every file move follows this sequence:
1. Run `scan-component-imports.js` to produce current `component-usage-map.json`.
2. For the file being moved, identify every MDX/JSX page that imports from the old path.
3. Update all import paths to the new location.
4. Grep the entire repo for the old path to confirm zero remaining references.
5. Only then `git mv` the old file to `components/x-archive/` (not deleted — preserved for rollback).

### Human Verification Gates
Every task below requires **explicit human approval** before proceeding to the next:
- Task output is presented for review.
- Human confirms with "proceed" / "approved" / equivalent.
- No task auto-advances without sign-off.
- Completed tasks are marked with ~~strikethrough~~ in this file.

<CustomDivider />

## Current State Summary

### Existing Folder Structure
```
snippets/components/
├── primitives/       # 12 JSX files + 8 examples
├── layout/           # 19 JSX files + 8 examples (includes 5 duplicate pairs)
├── content/          # 10 JSX files + 7 examples
├── data/             # 6 JSX files + 2 examples
├── display/          # 1 JSX + 1 MDX (all duplicated elsewhere)
├── page-structure/   # 5 JSX files + 2 examples
├── domain/           # EMPTY
├── integrations/     # EMPTY
└── _archive/         # Legacy sources
```

### Critical Issues
1. **6 duplicate file pairs** (kebab-case + camelCase versions of the same component)
2. **7+ cross-category duplicates** (same component exported from multiple folders)
3. **`display/` folder is redundant** (all contents duplicated in other folders)
4. **`domain/` and `integrations/` are empty placeholders**
5. **No enforced `@label` JSDoc field** tying components to their category
6. **Naming convention inconsistency** (mixed kebab-case and camelCase filenames)
7. **MDX-defined components** (`ApiBaseUrlsTable`) mixed with JSX — belongs in a future `snippets/composables/` directory

<CustomDivider />

## Finalised Taxonomy (approved)

> Full folder tree with all sub-niches and per-component file listing: **[structure.md](./structure.md)**

### Target Structure (summary)
```
snippets/
├── components/
│   ├── elements/        # Smallest visual atoms — no children, no fetching, no arrangement
│   │   └── (10 sub-niches: a11y, buttons, callouts, icons, images, links, math, social, spacing, text)
│   ├── wrappers/        # Holds, groups, or spatially arranges other components
│   │   └── (7 sub-niches: accordions, cards, containers, grids, lists, steps, tables)
│   ├── displays/        # Renders authored content into a specific visual format
│   │   └── (5 sub-niches: code, diagrams, quotes, response-fields, video)
│   ├── scaffolding/     # One-per-page structural skeleton — heroes, portals, frame-mode
│   │   └── (4 sub-niches: frame-mode, heroes, page-containers, portals)
│   ├── integrators/     # Fetches, embeds, or binds to external/third-party data
│   │   └── (4 sub-niches: blog, embeds, feeds, video-data)
│   ├── config/          # Non-component config objects (e.g. MermaidColours)
│   ├── x-archive/       # Staging area for superseded files (cleared in Task 13)
│   └── _archive/        # Existing legacy archive (untouched until cleanup)
└── composables/         # Future home for MDX-defined composable snippets (TBD)
```

**Superseded folders** (emptied during Task 3, removed during Task 13): `primitives/`, `layout/`, `content/`, `data/`, `display/`, `page-structure/`, `domain/`, `integrations/`

### Decision Rules

| # | Folder | Decision Rule |
|---|---|---|
| 1 | `elements/` | "Is it a single visual piece that doesn't wrap, arrange, or fetch anything?" |
| 2 | `wrappers/` | "Does it exist to hold, group, or arrange other things?" |
| 3 | `displays/` | "Does it take content and present it in a formatted way?" |
| 4 | `scaffolding/` | "Is it part of the page's outer structure, typically used once?" |
| 5 | `integrators/` | "Does the content come from outside the repo?" |
| 6 | `config/` | "Is it a non-component config/theme object?" |

### Sub-niche Mapping

#### `elements/` — 30 components, 10 sub-niches

| Sub-niche | Component | Current location | Notes |
|---|---|---|---|
| **buttons** | `DownloadButton` | primitives/buttons.jsx | |
| **buttons** | `BasicBtn` | primitives/buttons.jsx | |
| **icons** | `LivepeerSVG` | primitives/icons.jsx | |
| **icons** | `LivepeerIcon` | primitives/icons.jsx | |
| **icons** | `LivepeerIconOld` | primitives/icons.jsx | |
| **icons** | `LivepeerIconFlipped` | primitives/icons.jsx | |
| **images** | `Image` | primitives/image.jsx | |
| **images** | `LinkImage` | primitives/image.jsx | |
| **links** | `CustomCallout` | primitives/links.jsx | |
| **links** | `BlinkingIcon` | primitives/links.jsx | |
| **links** | `BlinkingTerminal` | primitives/links.jsx | |
| **links** | `DoubleIconLink` | primitives/links.jsx | |
| **links** | `GotoLink` | primitives/links.jsx | |
| **links** | `GotoCard` | primitives/links.jsx | |
| **links** | `TipWithArrow` | primitives/links.jsx | |
| **links** | `LinkArrow` | primitives/links.jsx | |
| **text** | `Subtitle` | primitives/text.jsx | |
| **text** | `CopyText` | primitives/text.jsx | |
| **text** | `CardTitleTextWithArrow` | primitives/text.jsx | |
| **text** | `AccordionTitleWithArrow` | primitives/text.jsx | |
| **text** | `CustomCardTitle` | primitives/customCardTitle.jsx | DUPE in page-structure/ — canonical here |
| **math** | `MathBlock` | primitives/math.jsx | |
| **math** | `MathInline` | primitives/math.jsx | |
| **callouts** | `ComingSoonCallout` | primitives/previewCallouts.jsx | |
| **callouts** | `PreviewCallout` | primitives/previewCallouts.jsx | |
| **callouts** | `ReviewCallout` | primitives/previewCallouts.jsx | |
| **spacing** | `Spacer` | primitives/spacer.jsx | DUPE in layout/ — canonical here |
| **spacing** | `CustomDivider` | primitives/divider.jsx | |
| **social** | `SocialLinks` | primitives/socialLinks.jsx | |
| **a11y** | `FocusableScrollRegions` | primitives/a11y.jsx | |

#### `wrappers/` — 30 components, 8 sub-niches

| Sub-niche | Component | Current location | Notes |
|---|---|---|---|
| **containers** | `BorderedBox` | layout/containers.jsx | |
| **containers** | `CenteredContainer` | layout/containers.jsx | |
| **containers** | `FullWidthContainer` | layout/containers.jsx | |
| **containers** | `FlexContainer` | layout/containers.jsx | |
| **containers** | `GridContainer` | layout/containers.jsx | |
| **containers** | `ScrollBox` | layout/cards.jsx | |
| **cards** | `DisplayCard` | layout/customCards.jsx | DUPE in page-structure/ — canonical here |
| **cards** | `WidthCard` | layout/customCards.jsx | DUPE in page-structure/ — canonical here |
| **cards** | `InlineImageCard` | layout/customCards.jsx | DUPE in page-structure/ — canonical here |
| **cards** | `InteractiveCard` | layout/showcase-cards.jsx | DUPE in data/ — canonical here |
| **cards** | `InteractiveCards` | layout/showcase-cards.jsx | DUPE in data/ — canonical here |
| **cards** | `ShowcaseCards` | layout/showcase-cards.jsx | DUPE in data/ — canonical here |
| **lists** | `BasicList` | layout/lists.jsx | |
| **lists** | `IconList` | layout/lists.jsx | |
| **lists** | `StepList` | layout/lists.jsx | |
| **lists** | `StepLinkList` | layout/lists.jsx | |
| **lists** | `UpdateList` | layout/lists.jsx | |
| **lists** | `UpdateLinkList` | layout/lists.jsx | |
| **lists** | `ListSteps` | layout/listSteps.jsx | DUPE: layout/list-steps.jsx |
| **steps** | `StyledSteps` | layout/steps.jsx | |
| **steps** | `StyledStep` | layout/steps.jsx | |
| **accordions** | `AccordionGroupList` | layout/accordionGroupList.jsx | |
| **accordions** | `AccordionLayout` | layout/layout.jsx | DUPE in layout/text.jsx — consolidate |
| **tables** | `DynamicTable` | layout/table.jsx | |
| **tables** | `SearchTable` | layout/searchTable.jsx | DUPE: layout/search-table.jsx |
| **tables** | `StyledTable` | layout/tables.jsx | |
| **tables** | `TableCell` | layout/tables.jsx | |
| **tables** | `TableRow` | layout/tables.jsx | |
| **grids** | `QuadGrid` | layout/quadGrid.jsx | DUPE: layout/quad-grid.jsx |
| **grids** | `CardCarousel` | layout/cardCarousel.jsx | DUPE: layout/card-carousel.jsx |

#### `displays/` — 17 components, 5 sub-niches

| Sub-niche | Component | Current location | Notes |
|---|---|---|---|
| **code** | `CustomCodeBlock` | content/code.jsx | |
| **code** | `CodeComponent` | content/code.jsx | |
| **code** | `ComplexCodeBlock` | content/code.jsx | |
| **code** | `CodeSection` | content/code.jsx | |
| **video** | `Video` | content/video.jsx | |
| **video** | `TitledVideo` | content/video.jsx | |
| **video** | `ShowcaseVideo` | content/video.jsx | |
| **video** | `CardVideo` | content/video.jsx | |
| **video** | `YouTubeVideo` | content/video.jsx | Takes URL prop, no API call |
| **video** | `YouTubeVideoDownload` | content/video.jsx | |
| **quotes** | `Quote` | content/quote.jsx | |
| **quotes** | `FrameQuote` | content/quote.jsx | |
| **diagrams** | `ScrollableDiagram` | content/zoomableDiagram.jsx | |
| **response-fields** | `ValueResponseField` | content/responseField.jsx | |
| **response-fields** | `CustomResponseField` | content/responseField.jsx | |
| **response-fields** | `ResponseFieldExpandable` | content/responseField.jsx | |
| **response-fields** | `ResponseFieldAccordion` | content/responseField.jsx | |
| **response-fields** | `ResponseFieldGroup` | content/responseField.jsx | |

#### `scaffolding/` — 20 components, 4 sub-niches

| Sub-niche | Component | Current location | Notes |
|---|---|---|---|
| **frame-mode** | `PageHeader` | page-structure/frameMode.jsx | DUPE: display/frame-mode.jsx — canonical here |
| **frame-mode** | `H1` | page-structure/frameMode.jsx | DUPE: display/frame-mode.jsx |
| **frame-mode** | `H2` | page-structure/frameMode.jsx | DUPE: display/frame-mode.jsx |
| **frame-mode** | `H3` | page-structure/frameMode.jsx | DUPE: display/frame-mode.jsx |
| **frame-mode** | `H4` | page-structure/frameMode.jsx | DUPE: display/frame-mode.jsx |
| **frame-mode** | `H5` | page-structure/frameMode.jsx | DUPE: display/frame-mode.jsx |
| **frame-mode** | `H6` | page-structure/frameMode.jsx | DUPE: display/frame-mode.jsx |
| **frame-mode** | `P` | page-structure/frameMode.jsx | DUPE: display/frame-mode.jsx |
| **frame-mode** | `Divider` | page-structure/frameMode.jsx | DUPE: display/frame-mode.jsx |
| **heroes** | `HeroImageBackgroundComponent` | page-structure/portals.jsx | |
| **heroes** | `HeroContentContainer` | page-structure/portals.jsx | |
| **heroes** | `HeroSectionContainer` | page-structure/portals.jsx | |
| **heroes** | `HeroOverviewContent` | page-structure/portals.jsx | |
| **heroes** | `Starfield` | page-structure/heroGif.jsx | |
| **portals** | `PortalContentContainer` | page-structure/portals.jsx | |
| **portals** | `PortalHeroContent` | page-structure/portals.jsx | |
| **portals** | `PortalCardsHeader` | page-structure/portals.jsx | |
| **portals** | `PortalSectionHeader` | page-structure/portals.jsx | |
| **portals** | `LogoHeroContainer` | page-structure/portals.jsx | |
| **page-containers** | `RefCardContainer` | page-structure/portals.jsx | |

#### `integrators/` — 20 components, 4 sub-niches

| Sub-niche | Component | Current location | Notes |
|---|---|---|---|
| **feeds** | `CoinGeckoExchanges` | data/coingecko.jsx | |
| **feeds** | `DiscordAnnouncements` | data/data.jsx | |
| **feeds** | `ForumLatestLayout` | data/data.jsx | |
| **feeds** | `LumaEvents` | data/data.jsx | |
| **feeds** | `LatestVersion` | data/release.jsx | |
| **blog** | `PostCard` | data/data.jsx | |
| **blog** | `CardColumnsPostLayout` | data/data.jsx | |
| **blog** | `BlogCard` | data/data.jsx | |
| **blog** | `CardBlogDataLayout` | data/data.jsx | |
| **blog** | `ColumnsBlogCardLayout` | data/data.jsx | |
| **blog** | `BlogDataLayout` | data/data.jsx | |
| **blog** | `CardInCardLayout` | data/data.jsx | |
| **embeds** | `MarkdownEmbed` | data/embed.jsx | DUPE in content/ — canonical here |
| **embeds** | `EmbedMarkdown` | content/embed.jsx | DUPE of MarkdownEmbed — keep both for now, consolidate later |
| **embeds** | `PdfEmbed` | data/embed.jsx | DUPE in display/embed.mdx — canonical here |
| **embeds** | `TwitterTimeline` | data/embed.jsx | |
| **embeds** | `LinkedInEmbed` | content/video.jsx | Misplaced — move here |
| **embeds** | `ExternalContent` | content/externalContent.jsx | Misplaced — move here |
| **video-data** | `YouTubeVideoData` | data/videoData.jsx | |

#### `config/` — 1 entry (top-level, not a component)

| Entry | Current location | Notes |
|---|---|---|
| `MermaidColours` | page-structure/mermaidColours.jsx | Config object, not a component |

#### Future: `snippets/composables/` (TBD)

| Entry | Current location | Notes |
|---|---|---|
| `ApiBaseUrlsTable` | layout/api-base-urls-table.mdx | MDX-defined — does not belong in components/ |

<CustomDivider />

## Duplicate Resolution Summary

| Component(s) | Canonical location | Archive from |
|---|---|---|
| `CustomCardTitle` | `elements/` | page-structure/customCards.jsx |
| `DisplayCard`, `WidthCard`, `InlineImageCard` | `wrappers/` | page-structure/customCards.jsx |
| `Spacer` | `elements/` | layout/layout.jsx |
| `ShowcaseCards`, `InteractiveCard(s)` | `wrappers/` | data/showcaseCards.jsx |
| `ListSteps` | `wrappers/` | layout/list-steps.jsx |
| `CardCarousel` | `wrappers/` | layout/card-carousel.jsx |
| `QuadGrid` | `wrappers/` | layout/quad-grid.jsx |
| `SearchTable` | `wrappers/` | layout/search-table.jsx |
| `AccordionLayout` | `wrappers/` | layout/text.jsx |
| `ExternalContent` | `integrators/` | content/external-content.jsx |
| `PageHeader`, `H1-H6`, `P`, `Divider` | `scaffolding/` | display/frame-mode.jsx |
| `MarkdownEmbed` / `EmbedMarkdown` | `integrators/` | content/embed.jsx (keep both names for now) |
| `PdfEmbed` | `integrators/` | display/embed.mdx |

<CustomDivider />

## Tasks

### ~~Task 1 — Agree on folder taxonomy (interactive)~~
- [x] **COMPLETED**
- 1.1 Review and approve Layer 1 category folders (elements, wrappers, displays, scaffolding, integrators, config)
- 1.2 Review and approve Layer 2 sub-niche folders within each category
- 1.3 Map all ~117 components to their target category + sub-niche
- 1.4 Resolve ambiguous placements interactively
- 1.5 Lock the taxonomy

### ~~Task 2 — Set up branch, worktree & folder skeleton~~
- [x] **COMPLETED** — commit `8da6af35`. Branch created, worktree created, all 32 folders scaffolded.
- 2.1 Create branch `docs-v2-dev-components` from `docs-v2-dev`
- 2.2 Create worktree at `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev-components`
- 2.3 User attaches worktree to VSCode workspace
- 2.4 Create new category folders: `elements/`, `wrappers/`, `displays/`, `scaffolding/`, `integrators/`, `config/`, `x-archive/`
- 2.5 Create sub-niche folders within each category:
  - `elements/`: buttons, icons, images, links, text, math, callouts, spacing, social, a11y
  - `wrappers/`: containers, cards, lists, steps, accordions, tables, grids
  - `displays/`: code, video, quotes, diagrams, response-fields
  - `scaffolding/`: frame-mode, heroes, portals, page-containers
  - `integrators/`: feeds, blog, embeds, video-data
- 2.6 Old folders left completely untouched
- 2.7 CHECKPOINT — show tree, human confirms skeleton
- 2.8 Commit
- 2.9 ~~Strikethrough~~

### ~~Task 3 — Move files & update all imports (incremental, per-category)~~
- [x] **COMPLETED** — commits `62fade99`, `5a6c9167`, `ce6a5d4e`, `d529f079`. 48 files moved, 1,081+ import paths updated across 173 consuming files (~15,000 total path references).
- 3.1 Sync worktree: `git fetch origin && git merge origin/docs-v2-dev`
- 3.2 Run `scan-component-imports.js` to produce baseline `component-usage-map.json`
- 3.3 **Move elements/** — for each file:
  - 3.3.1 Copy file to new location in target sub-niche
  - 3.3.2 Find all MDX/JSX pages importing from old path (from usage map)
  - 3.3.3 Update all import paths in consuming pages
  - 3.3.4 Grep entire repo for old import path — confirm zero remaining references
  - 3.3.5 `git mv` old file to `components/x-archive/`
  - 3.3.6 Atomic commit (move + import updates)
- 3.4 CHECKPOINT — human reviews elements/ moves
- 3.5 **Move wrappers/** — same sequence as 3.3.1–3.3.6 per file
- 3.6 CHECKPOINT — human reviews wrappers/ moves
- 3.7 **Move displays/** — same sequence per file
- 3.8 CHECKPOINT — human reviews displays/ moves
- 3.9 **Move scaffolding/** — same sequence per file
- 3.10 CHECKPOINT — human reviews scaffolding/ moves
- 3.11 **Move integrators/** — same sequence per file
- 3.12 CHECKPOINT — human reviews integrators/ moves
- 3.13 **Move config/** — move `MermaidColours` + update imports
- 3.14 CHECKPOINT — human reviews config/ move
- 3.15 Run full repo grep for any remaining old folder import paths (`primitives/`, `layout/`, `content/`, `data/`, `display/`, `page-structure/`)
- 3.16 CHECKPOINT — show grep results, human confirms clean
- 3.17 Commit + merge back to `docs-v2-dev`
- 3.18 ~~Strikethrough~~

### ~~Task 4 — Deduplicate same-name file pairs~~
- [x] **COMPLETED** — resolved during Task 3. All 6 kebab/camelCase duplicate pairs resolved.
- 4.1 Sync worktree: `git fetch origin && git merge origin/docs-v2-dev`
- 4.2 Run `scan-component-imports.js` for current ground truth
- 4.3 For each duplicate pair:
  - 4.3.1 Check import counts for both files
  - 4.3.2 Identify canonical (has imports) vs duplicate (zero imports)
  - 4.3.3 If duplicate has imports too: repoint those imports to canonical
  - 4.3.4 Grep to confirm zero references to duplicate path
  - 4.3.5 `git mv` duplicate to `x-archive/`
  - 4.3.6 Atomic commit
- 4.4 CHECKPOINT — present dedup report, human reviews
- 4.5 Pairs to process: `cardCarousel`/`card-carousel`, `quadGrid`/`quad-grid`, `listSteps`/`list-steps`, `searchTable`/`search-table`, `showcase-cards`/`showcaseCards`, `externalContent`/`external-content`
- 4.6 Commit + merge back to `docs-v2-dev`
- 4.7 ~~Strikethrough~~

### ~~Task 5 — Resolve cross-category duplicates~~
- [x] **COMPLETED** — resolved during Task 3. All 13 cross-category duplicates consolidated; non-canonical copies archived to `x-archive/`.
- 5.1 Sync worktree: `git fetch origin && git merge origin/docs-v2-dev`
- 5.2 For each cross-category duplicate (per Duplicate Resolution Summary):
  - 5.2.1 Confirm canonical location from approved mapping
  - 5.2.2 Find all pages importing from non-canonical location
  - 5.2.3 Repoint imports to canonical location
  - 5.2.4 Grep to confirm zero references to non-canonical path
  - 5.2.5 `git mv` non-canonical file to `x-archive/`
  - 5.2.6 Atomic commit
- 5.3 CHECKPOINT — human reviews each resolution
- 5.4 Cross-category dupes: `CustomCardTitle`, `DisplayCard`/`WidthCard`/`InlineImageCard`, `Spacer`, `ShowcaseCards`/`InteractiveCard(s)`, `PageHeader`/`H1-H6`/`P`/`Divider`, `MarkdownEmbed`/`EmbedMarkdown`, `PdfEmbed`, `ExternalContent`, `LinkedInEmbed`, `AccordionLayout`
- 5.5 Run full `scan-component-imports.js` — verify zero broken imports
- 5.6 CHECKPOINT — human confirms all clean
- 5.7 Commit + merge back to `docs-v2-dev`
- 5.8 ~~Strikethrough~~

### ~~Task 6 — Component-by-component audit (interactive)~~
- [x] **COMPLETED**
- Reviewed all 48 component files across 5 categories
- Executed: 4 renames, 3 archives (dupes), 1 consolidation, 1 sub-niche correction
- **Deferred splits** (require JSX editing, flagged for later):
  - `displays/video/video.jsx`: extract `YouTubeVideoData` → integrators, `LinkedInEmbed` → integrators
  - `integrators/blog/data.jsx`: extract `ForumLatestLayout`, `DiscordAnnouncements`, `LumaEvents` → feeds
  - `wrappers/containers/layout.jsx`: extract `Spacer` → elements/spacing
- **Flagged items**:
  - `integrators/feeds/release.jsx` (LatestVersion) — may not be working, verify later
  - Files that consume automation data — verify before renaming (check all before renaming anything)
  - `integrators/embeds/` sub-niche — user notes these are really feeds (data coming in); consider merging embeds/ into feeds/

### ~~Task 7 — Enforce naming convention~~
- [x] **COMPLETED** — commits `06eb1dea`, `9e643c2d`, `540d6567`. PascalCase enforced across all component files; lint rule added to `lint-structure.js` with `--strict-pascal` mode.
- 7.1 Sync worktree: `git fetch origin && git merge origin/docs-v2-dev`
- 7.2 Agree on filename convention (camelCase vs kebab-case vs PascalCase)
- 7.3 Generate rename list for all non-conforming files
- 7.4 CHECKPOINT — human reviews rename list
- 7.5 For each rename: update all import paths, grep verify, then rename
- 7.6 Add lint rule to `lint-structure.js` for filename convention
- 7.7 CHECKPOINT — human confirms
- 7.8 Commit + merge back to `docs-v2-dev`
- 7.9 ~~Strikethrough~~

### ~~Task 8 — Add JSDoc `@label` enforcement~~
- [x] **COMPLETED** — commit `194034f8`. All --strict JSDoc violations resolved; 7-field schema enforced on all 42 governed exports; `generate-component-registry.js --strict` passes.
- 8.1 Sync worktree: `git fetch origin && git merge origin/docs-v2-dev`
- 8.2 Define required JSDoc fields: `@label` (category), `@subniche`, `@purpose`
- 8.3 CHECKPOINT — human approves JSDoc field requirements
- 8.4 Add JSDoc fields to all component exports
- 8.5 Extend `generate-component-registry.js` with `--strict` mode
- 8.6 Update `VALID_CATEGORIES` in `component-governance-utils.js` to new names
- 8.7 CHECKPOINT — run `--strict`, human reviews results
- 8.8 Commit + merge back to `docs-v2-dev`
- 8.9 ~~Strikethrough~~

### ~~Task 9 — Performance & optimisation (per-script)~~
- [x] **COMPLETED** — commits `ba51f835`, `92177296`. Incremental scan mode added; `execSync` removed; hardcoded paths fixed; `generate-component-governance-remediation-reports.js` folded into registry script.
- 9.1 Sync worktree: `git fetch origin && git merge origin/docs-v2-dev`
- 9.2 Audit each component governance script for:
  - Efficiency (unnecessary full-repo scans, redundant I/O)
  - Hardcoded paths or values
  - Missing incremental mode (`--since`)
  - Correct documentation in script header
- 9.3 CHECKPOINT — present findings, human reviews
- 9.4 Add `--since <commit>` incremental mode to `scan-component-imports.js`
- 9.5 Add `--since <commit>` incremental mode to `audit-component-usage.js`
- 9.6 Extract shared file-list caching into `component-governance-utils.js`
- 9.7 Add filename-convention fast-path to `lint-structure.js` (glob only, no file reads)
- 9.8 Fold `generate-component-governance-remediation-reports.js` into registry script's `--validate-only`
- 9.9 `git mv` superseded scripts to `x-archive/`
- 9.10 CHECKPOINT — human confirms
- 9.11 Commit + merge back to `docs-v2-dev`
- 9.12 ~~Strikethrough~~

### Task 10 — Documentation & single source of truth
- ~~10.1 Sync worktree: `git fetch origin && git merge origin/docs-v2-dev`~~
- ~~10.2 Audit where component docs currently live — reported in `component-docs.md` and `doc-recommendation.md`~~
- ~~10.3 CHECKPOINT — agreed 4 decisions: 7-field schema, defer MDX snippets, EN first (locale auto-handled), include config.mdx~~
- ~~10.4 Update `snippets/components/README.md` — fixed JSDoc field names (`@type` not `@category`) and script paths~~
- ~~10.5 Fix `generate-component-docs.js` — CATEGORY_LABELS, CATEGORY_DESCRIPTIONS, LEGACY files, renderDecisionTree, renderLocaleScaffold maps~~
- ~~10.5b Regenerate `component-registry.json` — new taxonomy, 42 governed components~~
- ~~10.5c Regenerate published component-library MDX pages — 32 new files, 32 old removed, all 4 locales~~
- ~~10.6 Update `docs-guide/frameworks/component-governance.mdx` — 7-field schema, new taxonomy, correct script paths~~
- ~~10.7 Update `docs.json` nav — new taxonomy slugs~~
- ~~10.7b Regenerate `docs-guide/catalog/components-catalog.mdx`~~
- ~~10.7c Fix `docs-guide/source-of-truth-guide.mdx` — removed TODO banner, updated script paths~~
- ~~10.7d Fix test fixtures — `component-governance-generators.test.js` and `component-governance-utils.test.js`~~
- 10.8 `git mv` `CATALOG.md` to `x-archive/` — **DEFERRED to Task 13 (cleanup)**
- **DEFERRED**: `docs-guide/policies/component-layout-decisions.mdx` update — belongs to CONTENT-STRUCTURE Phase 5.1 (composable section system definition)
- 10.10 CHECKPOINT — human reviews all docs
- 10.11 Commit + merge back to `docs-v2-dev`

### ~~Task 11 — Trim governance overhead~~
- [x] **COMPLETED** — commit `a75418ef`. Archived unused `generate-component-snippets.py` and other dead scripts.
- 11.1 Sync worktree: `git fetch origin && git merge origin/docs-v2-dev`
- 11.2 Identify which governance scripts/checks are actively used in CI vs unused
- 11.3 CHECKPOINT — interactive chat: present "keep / simplify / archive" recommendation per artifact
- 11.4 Execute agreed simplifications
- 11.5 `git mv` agreed scripts to `x-archive/`
- 11.6 CHECKPOINT — human confirms
- 11.7 Commit + merge back to `docs-v2-dev`
- 11.8 ~~Strikethrough~~

### ~~Task 12 — Testing~~
- [x] **COMPLETED** — commits `9e643c2d`, `8bdec5fa`. Zero broken imports; all test assertions pass; mintlify dev confirmed on port 3456.
- 12.1 Sync worktree: `git fetch origin && git merge origin/docs-v2-dev`
- 12.2 Run `scan-component-imports.js` — verify zero broken imports
- 12.3 Run `generate-component-registry.js --strict` — verify all labels present
- 12.4 Run `audit-component-usage.js` — verify all components accounted for
- 12.5 Grep for any remaining references to old folder paths
- 12.6 Grep for any references to `x-archive/` in import statements (should be none)
- 12.7 Spot-check `mintlify dev` on a non-3000 port — confirm pages render
- 12.8 Run existing test suite (`tests/run-all.js`)
- 12.9 CHECKPOINT — human reviews full test results
- 12.10 Fix any issues found
- 12.11 CHECKPOINT — human confirms all green
- 12.12 Commit + merge back to `docs-v2-dev`
- 12.13 ~~Strikethrough~~

### ~~Task 13 — Responsive & dynamic audit (per-component)~~
- [x] **COMPLETED** — audit-report.md generated 2026-03-19. 4 quality passes executed (commits `add0c322`, `b15d26ce`, `6a1d31d7`, `c4d520d1`). See [audit-report.md](./audit-report.md) for full findings.
- 13.1 Sync worktree: `git fetch origin && git merge origin/docs-v2-dev`
- 13.2 Audit each component for responsive/dynamic behaviour:
  - Does it handle different screen sizes? (no fixed px widths without responsive fallback)
  - Does it accept `style` and `className` props for override?
  - Does it spread parent props correctly (`...rest` or explicit forwarding)?
  - Are prop imports following best practice? (destructured, typed where possible)
- 13.3 CHECKPOINT — present findings, human reviews
- 13.4 Fix responsive issues (add responsive fallbacks, remove hardcoded widths)
- 13.5 Add `style`/`className` prop support where missing
- 13.6 Ensure parent props are forwarded correctly
- 13.7 CHECKPOINT — human reviews fixes
- 13.8 Commit + merge back to `docs-v2-dev`
- 13.9 ~~Strikethrough~~

### ~~Task 14 — WCAG accessibility audit (per-component)~~
- [x] **COMPLETED** — Pass 2 WCAG major fixes (`b15d26ce`): semantic HTML, ARIA labels, keyboard accessibility. See audit-report.md.
- 14.1 Sync worktree: `git fetch origin && git merge origin/docs-v2-dev`
- 14.2 Audit each component against WCAG 2.1 AA (excluding colour contrast):
  - Semantic HTML (correct heading levels, landmarks, lists)
  - Keyboard accessibility (focusable elements, tab order, focus indicators)
  - ARIA attributes (labels, roles, states where needed)
  - Screen reader support (alt text, aria-labels, hidden decorative elements)
  - Motion/animation (respects `prefers-reduced-motion`)
- 14.3 CHECKPOINT — present findings, human reviews
- 14.4 Fix accessibility issues
- 14.5 CHECKPOINT — human reviews fixes
- 14.6 Commit + merge back to `docs-v2-dev`
- 14.7 ~~Strikethrough~~

### ~~Task 15 — Style homogenisation (per-component)~~
- [x] **COMPLETED** — Pass 3 (`6a1d31d7`): `className`, `style`, `...rest` props added to ~85 exported components across 40 files. Pass 4 polish (`c4d520d1`): hardcoded colours replaced with CSS tokens.
- 15.1 Sync worktree: `git fetch origin && git merge origin/docs-v2-dev`
- 15.2 Audit styling patterns across all components:
  - Are styles defined at the top of the component file? (not inline in JSX)
  - Are widths/heights set correctly? (responsive units, not arbitrary px)
  - Consistent pattern for style objects vs inline styles vs CSS classes
  - Do components accept `style` prop that merges with defaults?
  - Are there hardcoded values that should be configurable via props?
- 15.3 CHECKPOINT — present findings and proposed style convention, human reviews
- 15.4 Refactor styles to follow agreed convention
- 15.5 CHECKPOINT — human reviews refactored components
- 15.6 Commit + merge back to `docs-v2-dev`
- 15.7 ~~Strikethrough~~

### Task 16 — Post-quality testing
- 16.1 Sync worktree: `git fetch origin && git merge origin/docs-v2-dev`
- 16.2 Run full `scan-component-imports.js` — verify zero broken imports
- 16.3 Run `generate-component-registry.js --strict` — verify all labels present
- 16.4 Run test suite (`tests/run-all.js`)
- 16.5 Run `mintlify dev` on non-3000 port — spot-check component-heavy pages
- 16.6 CHECKPOINT — human reviews full test results
- 16.7 Fix any issues found
- 16.8 Commit + merge back to `docs-v2-dev`
- 16.9 ~~Strikethrough~~

### ~~Task 17 — Cleanup (x-archive)~~
- [x] **COMPLETED** — commit `c8977ff3`. x-archive deleted, old folders removed. No `x-archive/` or `primitives/`/`layout/` etc. remain in `snippets/components/`.
- 17.1 Sync worktree: `git fetch origin && git merge origin/docs-v2-dev`
- 17.2 Interactive chat: review everything in `x-archive/` — confirm each file is safe to remove
- 17.3 CHECKPOINT — human approves removal list
- 17.4 Delete approved files from `x-archive/`
- 17.5 Remove `x-archive/` folder if empty
- 17.6 Remove old empty folders (`primitives/`, `layout/`, `content/`, `data/`, `display/`, `page-structure/`, `domain/`, `integrations/`)
- 17.7 CHECKPOINT — show final tree, human confirms
- 17.8 Commit + merge back to `docs-v2-dev`
- 17.9 ~~Strikethrough~~

### ~~Task 18 — VSCode component tooling~~
- [x] **COMPLETED** — `tools/vscode/components/` built (README, extension.js, package.json, component-registry.json). `.vscode/components.code-snippets` and `.vscode/lp-components.code-snippets` added.
- 18.1 Sync worktree: `git fetch origin && git merge origin/docs-v2-dev`
- 18.2 Audit existing `tools/vscode/` extensions (authoring-tools, markdown-list, page-templates)
- 18.3 CHECKPOINT — interactive chat: agree on what tooling to build for components
- 18.4 Build component snippets extension in `tools/vscode/components/`:
  - Snippet definitions for each category (elements, wrappers, displays, scaffolding, integrators)
  - Auto-complete for component imports (correct PascalCase paths)
  - Quick-insert templates for common component patterns
  - Category-based picker (type `!element.` → see all element components)
- 18.5 Add workspace-level VSCode snippets to `.vscode/`:
  - `.vscode/components.code-snippets` — project-scoped snippets for quick component insertion
  - Import snippets (e.g., `imp-video` → full import line for Video.jsx)
  - Component usage snippets (e.g., `use-youtube` → `<YouTubeVideo url="" />`)
- 18.6 CHECKPOINT — human reviews snippets and tests in VSCode
- 18.6 Commit + merge back to `docs-v2-dev`
- 18.7 ~~Strikethrough~~

### Task 19 — Composable templates ⚠️ PARTIAL
- `snippets/composables/` folder created (stub only — empty)
- Content not yet written — composable pattern templates still TODO
- 19.1 Sync worktree: `git fetch origin && git merge origin/docs-v2-dev`
- 19.2 Create `snippets/composables/` directory structure
- 19.3 CHECKPOINT — interactive chat: agree on which common composable patterns to template
- 19.4 Template common composables (e.g., page sections with hero + cards, tutorial step layouts, API reference blocks, data feed + table combos)
- 19.5 Document composables in README with usage examples
- 19.6 CHECKPOINT — human reviews composable templates
- 19.7 Commit + merge back to `docs-v2-dev`
- 19.8 ~~Strikethrough~~

### Task 20 — Final testing & cleanup
- 20.1 Sync worktree: `git fetch origin && git merge origin/docs-v2-dev`
- 20.2 Full test pass (imports, registry, lint, test suite, mintlify dev)
- 20.3 Interactive chat: review everything in `x-archive/` — confirm each file is safe to remove
- 20.4 CHECKPOINT — human approves removal list
- 20.5 Delete approved files from `x-archive/`
- 20.6 Remove `x-archive/` folder if empty
- 20.7 Remove old empty folders (`primitives/`, `layout/`, `content/`, `data/`, `display/`, `page-structure/`, `domain/`, `integrations/`)
- 20.8 CHECKPOINT — show final tree, human confirms
- 20.9 Commit + merge back to `docs-v2-dev`
- 20.10 ~~Strikethrough~~

### Task 21 — Final merge & close out
- 21.1 Final full test pass
- 21.2 CHECKPOINT — human gives final approval
- 21.3 Merge `docs-v2-dev-components` into `docs-v2-dev`
- 21.4 Remove worktree
- 21.5 Move plan to `tasks/plan/completed/`
- 21.6 ~~Strikethrough all~~

<CustomDivider />

## Sub-Plans & Cross-Plan Dependencies

### AI Discoverability Sub-Plan
**File**: [`../AI-DISCOVERABILITY/plan.md`](../AI-DISCOVERABILITY/plan.md)
**Status**: Planning — raised 2026-03-21
**Origin**: T10 audit discovered that 5 components (SearchTable, ShowcaseCards, CardCarousel, CoinGeckoExchanges, MarkdownEmbed) render entirely client-side, making their content invisible to AI agents and crawlers.
**Blocking**: CDA-1 (schema update) should complete before T21 closes this plan — it touches the component registry schema. CDA-5 (automation script) is a handoff candidate.

---

## Reference

- **Target folder structure**: [structure.md](./structure.md) — canonical reference for all categories, sub-niches, and per-component file layout
- **Component catalog**: [catalog.md](./catalog.md) — full inventory of 44 files, 118 exports, import counts, and flags
- **Quality audit report**: [audit-report.md](./audit-report.md) — combined responsive, WCAG, and style audit findings across all 44 files
- **Changelog**: [changelog.md](./changelog.md) — full record of all changes, commits, and stats
- **JSDoc reference**: [jsdoc-reference.md](./jsdoc-reference.md) — all 118 exports with target JSDoc tag values on one page
- **Old governance doc**: https://docs.google.com/document/d/1t3eR8Ehm8H6HaUOZFMO7c5Vgka9VechosCgS06FNZ2A/edit?usp=sharing
- **Component registry script**: `tools/scripts/generate-component-registry.js`
- **Import scanner**: `tools/scripts/scan-component-imports.js`
- **Usage auditor**: `tools/scripts/audit-component-usage.js`
- **Governance utils**: `tools/lib/component-governance-utils.js`
- **Current README**: `snippets/components/README.md`
