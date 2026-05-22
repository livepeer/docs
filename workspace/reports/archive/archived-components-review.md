# Archived Components Review

Generated: 2026-03-08
Archive location: `snippets/components/_archive/`

## Archived Items

| # | Item | Original path | Archive path | Reason | Import count at archive time | Status |
|---|------|---------------|--------------|--------|------------------------------|--------|
| 1 | `SearchTable.jsx` | `snippets/components/layout/SearchTable.jsx` | `snippets/components/_archive/SearchTable.jsx` | Renamed to camelCase `layout/searchTable.jsx` | 20 | Imports rewritten |
| 2 | `ListSteps.jsx` | `snippets/components/layout/ListSteps.jsx` | `snippets/components/_archive/ListSteps.jsx` | Renamed to camelCase `layout/listSteps.jsx` | 18 | Imports rewritten |
| 3 | `external-content.jsx` | `snippets/components/content/external-content.jsx` | `snippets/components/_archive/external-content.jsx` | Renamed to `content/externalContent.jsx` | 43 | Imports rewritten |
| 4 | `image.jsx` | `snippets/components/display/image.jsx` | `snippets/components/_archive/image.jsx` | Moved to `primitives/image.jsx` | 71 | Imports rewritten |
| 5 | `socialLinks.jsx` | `snippets/components/display/socialLinks.jsx` | `snippets/components/_archive/socialLinks.jsx` | Moved to `primitives/socialLinks.jsx` | 27 | Imports rewritten |
| 6 | `previewCallouts.jsx` | `snippets/components/domain/SHARED/previewCallouts.jsx` | `snippets/components/_archive/previewCallouts.jsx` | Moved to `primitives/previewCallouts.jsx` | 99 | Imports rewritten |
| 7 | `containers.jsx` | `snippets/components/primitives/containers.jsx` | `snippets/components/_archive/containers.jsx` | Moved to `layout/containers.jsx` | 91 | Imports rewritten |
| 8 | `tables.jsx` | `snippets/components/primitives/tables.jsx` | `snippets/components/_archive/tables.jsx` | Moved to `layout/tables.jsx` | 53 | Imports rewritten |
| 9 | `CardCarousel.jsx` | `snippets/components/display/CardCarousel.jsx` | `snippets/components/_archive/CardCarousel.jsx` | Moved to `layout/cardCarousel.jsx` | 27 | Imports rewritten |
| 10 | `layout.jsx` | `snippets/components/primitives/layout.jsx` | `snippets/components/_archive/layout.jsx` | Split: `Spacer` moved to `primitives/spacer.jsx`; layout exports moved to `layout/layout.jsx` | 66 | Imports rewritten |
| 11 | `customCards.jsx` | `snippets/components/display/customCards.jsx` | `snippets/components/_archive/customCards.jsx` | Split: `CustomCardTitle` moved to `primitives/customCardTitle.jsx`; card layouts moved to `layout/customCards.jsx` | 84 | Imports rewritten |
| 12 | `quote.jsx` | `snippets/components/display/quote.jsx` | `snippets/components/_archive/quote.jsx` | Moved to `content/quote.jsx` | 88 | Imports rewritten |
| 13 | `zoomable-diagram.jsx` | `snippets/components/display/zoomable-diagram.jsx` | `snippets/components/_archive/zoomable-diagram.jsx` | Moved to `content/zoomableDiagram.jsx` | 72 | Imports rewritten |
| 14 | `video.jsx` | `snippets/components/display/video.jsx` | `snippets/components/_archive/video.jsx` | Split into `content/video.jsx` and `data/videoData.jsx` | 210 | Imports rewritten |
| 15 | `data.jsx` | `snippets/components/content/data.jsx` | `snippets/components/_archive/data.jsx` | Moved to `data/data.jsx` | 151 | Imports rewritten |
| 16 | `coingecko.jsx` | `snippets/components/integrations/coingecko.jsx` | `snippets/components/_archive/coingecko.jsx` | Moved to `data/coingecko.jsx` | 35 | Imports rewritten |
| 17 | `showcaseCards.jsx` | `snippets/components/display/showcaseCards.jsx` | `snippets/components/_archive/showcaseCards.jsx` | Moved to `data/showcaseCards.jsx` | 32 | Imports rewritten |
| 18 | `embed.jsx` | `snippets/components/display/embed.jsx` | `snippets/components/_archive/embed.jsx` | Moved to `data/embed.jsx` | 63 | Imports rewritten |
| 19 | `frameMode.jsx` | `snippets/components/display/frameMode.jsx` | `snippets/components/_archive/frameMode.jsx` | Moved to `page-structure/frameMode.jsx` | 154 | Imports rewritten |
| 20 | `Portals.jsx` | `snippets/components/domain/SHARED/Portals.jsx` | `snippets/components/_archive/Portals.jsx` | Moved and renamed to `page-structure/portals.jsx` | 134 | Imports rewritten |
| 21 | `HeroGif.jsx` | `snippets/components/domain/SHARED/HeroGif.jsx` | `snippets/components/_archive/HeroGif.jsx` | Moved and renamed to `page-structure/heroGif.jsx` | 50 | Imports rewritten |
| 22 | `containers.mdx` | `snippets/components/display/containers.mdx` | `snippets/components/_archive/containers.mdx` | MDX helper module retired after its exports moved into `layout/containers.jsx` | 18 | Imports rewritten |
| 23 | `embed.mdx` | `snippets/components/display/embed.mdx` | `snippets/components/_archive/embed.mdx` | MDX helper module retired after `PdfEmbed` moved into `data/embed.jsx` | 16 | Imports rewritten |
| 24 | `BasicBtn` | `snippets/components/primitives/buttons.jsx` | `(commented in place)` | Placeholder export | 0 | Commented in place |
| 25 | `BlogDataLayout` | `snippets/components/data/data.jsx` | `(commented in place)` | Duplicate alias of `CardBlogDataLayout` | 0 | Commented in place |
| 26 | `EmbedMarkdown` | `snippets/components/data/embed.jsx` | `(commented in place)` | Duplicate alias of `MarkdownEmbed` | 0 | Commented in place |

## Archived Folders

| Folder | Archive path | Reason |
|--------|--------------|--------|
| `display/` | `snippets/components/_archive/folders/display/` | All legacy display components were migrated into active categories |
| `display/examples/` | `snippets/components/_archive/folders/display-examples/` | Example MDX preserved for reference after display category retirement |
| `domain/` | `snippets/components/_archive/folders/domain/` | Legacy domain taxonomy retired after migration to `primitives/` and `page-structure/` |
| `domain/SHARED/` | `snippets/components/_archive/folders/domain/SHARED/` | Shared domain source location preserved after page-structure migration |
| `domain/examples/` | `snippets/components/_archive/folders/domain-examples/` | Example MDX preserved for reference after domain category retirement |
| `integrations/` | `snippets/components/_archive/folders/integrations/` | Integration components moved into `data/` |
| `integrations/examples/` | `snippets/components/_archive/folders/integrations-examples/` | Example MDX preserved for reference after integrations category retirement |

Legacy folder READMEs were also preserved under `snippets/components/_archive/folders/display-README.md`, `snippets/components/_archive/folders/domain-README.md`, and `snippets/components/_archive/folders/integrations-README.md`.

## Import Cleanup Required

No active MDX import cleanup is currently required. A repo scan of `v2/`, `snippets/`, `docs-guide/`, and `docs-index.json` found no active imports that still target archived component source files outside `_archive/`.

| Component | Pages still importing | Action needed |
|-----------|-----------------------|---------------|
| None detected | None | No action required |

## Deferred `!important` Items

These styling overrides were intentionally deferred because they still require specificity investigation or broader style-system cleanup.

| File:Line | Current | Reason deferred |
|-----------|---------|-----------------|
| `snippets/components/data/data.jsx:736` | `// TODO: remove !important - specificity investigation needed.` | Existing inline style chain still needs a targeted follow-up |
| `snippets/components/data/data.jsx:737` | `color: "var(--text) !important"` | Existing inline style chain still needs a targeted follow-up |
| `snippets/components/layout/steps.jsx:60` | `{/* TODO: remove !important - specificity investigation needed. */}` | Resolved variable styling needs a specificity pass |
| `snippets/components/layout/steps.jsx:63` | `background-color: ${resolvedIconColor} !important;` | Resolved variable styling needs a specificity pass |
| `snippets/components/layout/steps.jsx:66` | `color: ${resolvedTitleColor} !important;` | Resolved variable styling needs a specificity pass |
| `snippets/components/layout/steps.jsx:69` | `background-color: ${resolvedLineColor} !important;` | Resolved variable styling needs a specificity pass |
| `snippets/components/primitives/previewCallouts.jsx:44` | `// TODO: remove !important - specificity investigation needed.` | Theme override still depends on current specificity chain |
| `snippets/components/primitives/previewCallouts.jsx:45` | `color: "var(--hero-text) !important"` | Theme override still depends on current specificity chain |
| `snippets/components/primitives/previewCallouts.jsx:158` | `// TODO: remove !important - specificity investigation needed.` | Theme override still depends on current specificity chain |
| `snippets/components/primitives/previewCallouts.jsx:159` | `color: "var(--hero-text) !important"` | Theme override still depends on current specificity chain |

## Decision Required

- [ ] Delete archived files permanently after confirming the archive window is complete
- [ ] Keep `_archive/` in the component tree until human review is complete
- [ ] Schedule a dedicated `!important` specificity cleanup pass
- [ ] Decide whether the component-library route taxonomy should also be updated from legacy display/domain/integrations page groupings
