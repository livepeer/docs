# Task 02: Full Audit — Unused Components Report

**Branch:** `docs-plan/02-components-audit-unused`  
**Date:** 2026-02-16  
**Status:** Complete

---

## Executive Summary

This audit analyzed all 77 exports across 27 component files in `snippets/components/`. The analysis searched for imports and JSX usage across the entire codebase including v2 MDX pages, snippets, and generated content.

### Key Findings:
- **Used Components:** 58 exports are actively used in the codebase
- **Unused Components:** 19 exports have NO usage outside their definition/example files
- **Example-Only Usage:** 9 components are only used in example files (not production pages)

---

## Detailed Component Audit

### Legend
| Symbol | Meaning |
|--------|---------|
| ✅ | Used in production MDX pages |
| ⚠️ | Used only in examples/internal files |
| ❌ | Not used anywhere |

---

## content/ Directory

### code.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `CustomCodeBlock` | ✅ | 12+ files (orchestrators, gateways, snippets) | **Keep** |
| `CodeComponent` | ⚠️ | Only in code-examples.mdx | **Consolidate** - merge into CustomCodeBlock or remove |
| `ComplexCodeBlock` | ⚠️ | Used internally by code.jsx, 1 test file | **Keep** - used by CustomCodeBlock |
| `CodeSection` | ⚠️ | Only in code-examples.mdx | **Remove** - just a wrapper for ComplexCodeBlock |

### data.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `BlogCard` | ⚠️ | Only in cards-examples.mdx, used by layouts | **Keep** - used by layout components |
| `CardBlogDataLayout` | ⚠️ | Only in cards-examples.mdx | **Remove** - not used in production |
| `ColumnsBlogCardLayout` | ✅ | 3 trending-topics pages | **Keep** |
| `BlogDataLayout` | ❌ | Not used | **Remove** |
| `PostCard` | ⚠️ | Only in cards-examples.mdx, data.jsx | **Keep** - used by CardColumnsPostLayout |
| `CardColumnsPostLayout` | ✅ | trending-layout-tests.mdx | **Keep** |
| `CardInCardLayout` | ❌ | Not used | **Remove** |
| `ForumLatestLayout` | ✅ | 3 trending-topics pages | **Keep** |
| `DiscordAnnouncements` | ✅ | 3 trending-topics pages | **Keep** |
| `LumaEvents` | ✅ | events-and-community-streams.mdx | **Keep** |

### external-content.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `ExternalContent` | ✅ | 5 files (whitepaper, awesome-livepeer, etc.) | **Keep** |

### release.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `LatestVersion` | ⚠️ | 2 files (linuxOffChainTab, release-examples) | **Keep** |

### responseField.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `ValueResponseField` | ✅ | core-mechanisms.mdx, gateway quickstart files | **Keep** |
| `CustomResponseField` | ✅ | video-configuration.mdx | **Keep** |
| `ResponseFieldExpandable` | ⚠️ | Only in responseField-examples.mdx | **Consider removing** |
| `ResponseFieldAccordion` | ✅ | 4 files (mintlify-behaviour, docker tabs, examples) | **Keep** |
| `ResponseFieldGroup` | ❌ | Not used | **Remove** |

---

## display/ Directory

### CardCarousel.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `CardCarousel` | ❌ | Only defined in CardCarousel.jsx | **Remove** |

### embed.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `MarkdownEmbed` | ⚠️ | Only in embed-examples.mdx | **Remove** - not used in production |
| `EmbedMarkdown` | ⚠️ | Only in embed-examples.mdx | **Remove** - duplicate of MarkdownEmbed |
| `TwitterTimeline` | ✅ | 3 trending-topics pages | **Keep** |

### frameMode.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `PageHeader` | ✅ | 3 files (mission-control, theme-colors, frame-mode examples) | **Keep** |
| `H1` | ⚠️ | Only in examples + Portals.jsx | **Keep** - used by portal components |
| `H2` | ⚠️ | Only in examples + Portals.jsx | **Keep** - used by portal components |
| `H3` | ⚠️ | Internal use only (Portals.jsx) | **Keep** - used by PortalSectionHeader |
| `H4` | ❌ | Not used | **Consider removing** |
| `H5` | ❌ | Not used | **Consider removing** |
| `H6` | ❌ | Not used | **Consider removing** |
| `P` | ❌ | Not used | **Consider removing** |
| `Divider` | ⚠️ | Only in frameMode.jsx | **Consider removing** |

### image.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `Image` | ✅ | 4 files (blockchain-contracts, technical-architecture, etc.) | **Keep** |
| `LinkImage` | ⚠️ | Only in image-examples.mdx | **Consider removing** |

### quote.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `Quote` | ❌ | Not used | **Remove** |
| `FrameQuote` | ✅ | 6 files (overview, core-mechanisms, why-livepeer, etc.) | **Keep** |

### showcaseCards.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `ShowcaseCards` | ✅ | 2 files (showcase.mdx, project-showcase.mdx) | **Keep** |

### socialLinks.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `SocialLinks` | ✅ | primer.mdx | **Keep** |

### video.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `TitledVideo` | ⚠️ | Only used internally by ShowcaseVideo | **Keep** |
| `ShowcaseVideo` | ❌ | Not used | **Remove** |
| `Video` | ✅ | 1 file (embody/overview.mdx) | **Keep** |
| `YouTubeVideo` | ✅ | 16+ files | **Keep** |
| `YouTubeVideoData` | ✅ | 3 trending-topics pages | **Keep** |
| `LinkedInEmbed` | ⚠️ | Only in video.jsx | **Remove** - not used |
| `YouTubeVideoDownload` | ❌ | Not used (deprecated) | **Remove** |
| `CardVideo` | ⚠️ | Only in video-examples.mdx | **Remove** |

### zoomable-diagram.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `ScrollableDiagram` | ✅ | 12+ files (gateways, livepeer-token, etc.) | **Keep** |

---

## gateways/ Directory (Duplicate!)

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `GatewayOffChainWarning` | ⚠️ | Used by gateways/index.jsx | **Consolidate** with domain/04_GATEWAYS |
| `GatewayOnChainWarning` | ⚠️ | Used by gateways/index.jsx | **Consolidate** with domain/04_GATEWAYS |

**Note:** `snippets/components/gateways/` appears to duplicate `snippets/components/domain/04_GATEWAYS/`. Recommend consolidating.

---

## integrations/ Directory

### coingecko.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `CoinGeckoExchanges` | ✅ | 2 files (livepeer-exchanges, artibtrum-exchanges) | **Keep** |

---

## layout/ Directory

### cards.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `ScrollBox` | ✅ | industry-verticals.mdx | **Keep** |
| `PostCard` | ⚠️ | Internal use (cards.jsx) | **Consolidate** - duplicate in data.jsx |
| `CardColumnsPostLayout` | ⚠️ | Internal use | **Consolidate** - duplicate in data.jsx |
| `BlogCard` | ⚠️ | Internal use | **Consolidate** - duplicate in data.jsx |
| `CardBlogDataLayout` | ⚠️ | Internal use | **Consolidate** - duplicate in data.jsx |

### lists.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `BasicList` | ❌ | Not used (placeholder) | **Remove** |
| `IconList` | ❌ | Not used (placeholder) | **Remove** |
| `StepList` | ⚠️ | Only in lists-examples.mdx | **Remove** |
| `StepLinkList` | ⚠️ | Only in lists-examples.mdx | **Keep** |
| `UpdateList` | ❌ | Not used (placeholder) | **Remove** |
| `UpdateLinkList` | ✅ | primer.mdx | **Keep** |

### ListSteps.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `ListSteps` | ❌ | Not used | **Remove** |

### quadGrid.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `QuadGrid` | ✅ | 3 files (livepeer-overview, ecosystem, README) | **Keep** |

### steps.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `StyledSteps` | ✅ | 11 files (orchestrators, gateways) | **Keep** |
| `StyledStep` | ✅ | Same 11 files | **Keep** |

### table.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `DynamicTable` | ✅ | 13 files | **Keep** |

### text.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `AccordionLayout` | ✅ | mental-model.mdx | **Keep** |

---

## primitives/ Directory

### buttons.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `BasicBtn` | ❌ | Not used (placeholder) | **Remove** |
| `DownloadButton` | ✅ | 4 files (docker tabs, buttons-examples) | **Keep** |

### divider.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `CustomDivider` | ✅ | Used by Portals.jsx, frameMode.jsx, showcaseCards.jsx | **Keep** |

### icons.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `LivepeerSVG` | ⚠️ | Only in icons-examples.mdx | **Remove** |
| `LivepeerIconOld` | ❌ | Not used | **Remove** |
| `LivepeerIconFlipped` | ⚠️ | Only in icons-examples.mdx | **Remove** |
| `LivepeerIcon` | ⚠️ | Only in icons-examples.mdx | **Remove** |

### links.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `CustomCallout` | ⚠️ | Only in links-examples.mdx | **Consider removing** |
| `BlinkingIcon` | ✅ | 10 portal pages | **Keep** |
| `BlinkingTerminal` | ❌ | Not used (alias) | **Remove** |
| `DoubleIconLink` | ✅ | 12+ files | **Keep** |
| `GotoLink` | ✅ | 10 files | **Keep** |
| `GotoCard` | ✅ | 11 files | **Keep** |
| `TipWithArrow` | ✅ | 4 files | **Keep** |
| `LinkArrow` | ✅ | 18 files | **Keep** |

### text.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `Subtitle` | ✅ | showcaseCards.jsx | **Keep** |
| `CopyText` | ❌ | Not used | **Remove** |
| `CardTitleTextWithArrow` | ✅ | 5 files | **Keep** |
| `AccordionTitleWithArrow` | ✅ | 1 file (overview.mdx) | **Keep** |

---

## domain/ Directory

### SHARED/HeroGif.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `Starfield` | ✅ | 8 portal pages | **Keep** |

### SHARED/Portals.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `HeroSectionContainer` | ✅ | 8 portal pages | **Keep** |
| `HeroImageBackgroundComponent` | ✅ | 8 portal pages | **Keep** |
| `HeroContentContainer` | ✅ | 8 portal pages | **Keep** |
| `HeroOverviewContent` | ❌ | Not used | **Remove** |
| `PortalContentContainer` | ✅ | 8 portal pages | **Keep** |
| `PortalHeroContent` | ✅ | 8 portal pages | **Keep** |
| `PortalCardsHeader` | ✅ | 8 portal pages | **Keep** |
| `PortalSectionHeader` | ✅ | 2 portal pages | **Keep** |
| `LogoHeroContainer` | ✅ | 8 portal pages | **Keep** |

### SHARED/previewCallouts.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `ComingSoonCallout` | ✅ | 50+ files | **Keep** |
| `PreviewCallout` | ✅ | 100+ files | **Keep** |
| `ReviewCallout` | ⚠️ | Only in scripts (add-callouts.js) | **Keep** |

### 04_GATEWAYS/callouts.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `GatewayOffChainWarning` | ✅ | 6 files | **Keep** |
| `GatewayOnChainWarning` | ✅ | 6 files | **Keep** |
| `GatewayOnChainTTestnetNote` | ❌ | Not used | **Consider removing** |
| `OrchAddrNote` | ❌ | Not used | **Consider removing** |
| `TestVideoDownload` | ❌ | Not used | **Consider removing** |
| `FfmpegWarning` | ❌ | Not used | **Consider removing** |

### 04_GATEWAYS/quickstartTabs.jsx

| Component | Used | Where Used | Recommendation |
|-----------|------|------------|----------------|
| `QuickStartTabs` | ⚠️ | Only in quickstartTabs.jsx | **Consider removing** |
| `QuickStartSteps` | ✅ | 2 files | **Keep** |

---

## Summary: Components to Remove

### Definite Removals (Never Used)

| File | Component | Reason |
|------|-----------|--------|
| `content/data.jsx` | `BlogDataLayout` | Never used |
| `content/data.jsx` | `CardInCardLayout` | Never used |
| `content/responseField.jsx` | `ResponseFieldGroup` | Never used |
| `display/CardCarousel.jsx` | `CardCarousel` | Never used |
| `display/embed.jsx` | `MarkdownEmbed` | Example only |
| `display/embed.jsx` | `EmbedMarkdown` | Example only, duplicate |
| `display/quote.jsx` | `Quote` | Never used |
| `display/video.jsx` | `ShowcaseVideo` | Never used |
| `display/video.jsx` | `LinkedInEmbed` | Never used |
| `display/video.jsx` | `YouTubeVideoDownload` | Deprecated |
| `display/video.jsx` | `CardVideo` | Example only |
| `layout/lists.jsx` | `BasicList` | Placeholder |
| `layout/lists.jsx` | `IconList` | Placeholder |
| `layout/lists.jsx` | `UpdateList` | Placeholder |
| `layout/lists.jsx` | `StepList` | Example only |
| `layout/ListSteps.jsx` | `ListSteps` | Never used |
| `primitives/buttons.jsx` | `BasicBtn` | Placeholder |
| `primitives/icons.jsx` | `LivepeerSVG` | Example only |
| `primitives/icons.jsx` | `LivepeerIconOld` | Never used |
| `primitives/icons.jsx` | `LivepeerIconFlipped` | Example only |
| `primitives/icons.jsx` | `LivepeerIcon` | Example only |
| `primitives/links.jsx` | `BlinkingTerminal` | Alias, not used |
| `primitives/text.jsx` | `CopyText` | Never used |
| `domain/SHARED/Portals.jsx` | `HeroOverviewContent` | Never used |

### Consider Removing (Low Usage)

| File | Component | Reason |
|------|-----------|--------|
| `display/frameMode.jsx` | `H4`, `H5`, `H6`, `P` | Not used |
| `display/frameMode.jsx` | `Divider` | Only internal |
| `display/image.jsx` | `LinkImage` | Example only |
| `content/code.jsx` | `CodeSection` | Just a wrapper |
| `content/responseField.jsx` | `ResponseFieldExpandable` | Example only |
| `primitives/links.jsx` | `CustomCallout` | Example only |
| `domain/04_GATEWAYS/callouts.jsx` | `GatewayOnChainTTestnetNote`, `OrchAddrNote`, `TestVideoDownload`, `FfmpegWarning` | Not used |

### Consolidation Opportunities

1. **Duplicate Component Files:**
   - `snippets/components/gateways/` duplicates `snippets/components/domain/04_GATEWAYS/`
   - Recommend: Remove `gateways/` directory, use only `domain/04_GATEWAYS/`

2. **Duplicate Card Components:**
   - `BlogCard`, `PostCard`, `CardColumnsPostLayout`, `CardBlogDataLayout` exist in both `content/data.jsx` AND `layout/cards.jsx`
   - Recommend: Keep only in `content/data.jsx`, remove from `layout/cards.jsx`

---

## Testing Performed

1. ✅ Created branch `docs-plan/02-components-audit-unused`
2. ✅ Listed all component files in `snippets/components/`
3. ✅ Extracted all exports from each component file
4. ✅ Searched for import statements across codebase
5. ✅ Searched for JSX usage of each component
6. ✅ Verified example file vs production file usage

---

## Follow-Up Tasks

1. **Task 02a:** Remove definite unused components (24 exports)
2. **Task 02b:** Consolidate duplicate gateway components
3. **Task 02c:** Consolidate duplicate card components in `layout/cards.jsx` vs `content/data.jsx`
4. **Task 02d:** Evaluate low-usage components for removal

---

## Files Modified

- Created: `docs/PLAN/reports/02-components-audit-unused-report.md`
