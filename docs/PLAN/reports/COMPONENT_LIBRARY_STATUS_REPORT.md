# Component Library Status Report

**Generated:** 2026-02-16  
**Test Results:** All 6 category pages render correctly

## ✅ Pages That Render

1. **Display** - 13,732 chars, 0 errors
2. **Primitives** - 12,556 chars, 0 errors  
3. **Content** - 7,167 chars, 0 errors
4. **Layout** - 5,538 chars, 0 errors
5. **Domain** - 914 chars, 0 errors
6. **Integrations** - 4,144 chars, 0 errors

## ❌ Pages That Do NOT Render

1. **Main Component Library** (`/v2/pages/07_resources/documentation-guide/component-library`) - Parsing error detected

## Components NOT Documented in Component Library

Based on grep of all exported components vs what's imported in component library pages:

### Primitives (Missing)
- `BasicBtn` - from `buttons.jsx`
- `LivepeerSVG` - from `icons.jsx`
- `LivepeerIconOld` - from `icons.jsx`
- `LinkArrow` - from `links.jsx` (imported but not documented)
- `CardTitleTextWithArrow` - from `text.jsx` (imported but not documented)
- `AccordionTitleWithArrow` - from `text.jsx` (imported but not documented)
- `StyledTable` - from `tables.jsx`
- `TableRow` - from `tables.jsx`
- `TableCell` - from `tables.jsx`
- `FlexContainer` - from `layout.jsx`
- `GridContainer` - from `layout.jsx`
- `Spacer` - from `layout.jsx`
- `BorderedBox` - from `containers.jsx`
- `CenteredContainer` - from `containers.jsx`
- `FullWidthContainer` - from `containers.jsx`

### Display (Missing)
- `TitledVideo` - from `video.jsx`
- `ShowcaseVideo` - from `video.jsx`
- `YouTubeVideoData` - from `video.jsx`
- `YouTubeVideoDownload` - from `video.jsx`
- `Quote` - from `quote.jsx`
- `FrameQuote` - from `quote.jsx`
- `ShowcaseCards` - from `showcaseCards.jsx` (imported but not documented)
- `SocialLinks` - from `socialLinks.jsx`
- `CardCarousel` - from `CardCarousel.jsx`
- `PageHeader` - from `frameMode.jsx`
- `H1`, `H2`, `H3`, `H4`, `H5`, `H6` - from `frameMode.jsx`
- `P` - from `frameMode.jsx`
- `Divider` - from `frameMode.jsx`
- `MarkdownEmbed` - from `embed.jsx` (imported but not documented)
- `EmbedMarkdown` - from `embed.jsx` (imported but not documented)
- `TwitterTimeline` - from `embed.jsx` (imported but not documented)

### Content (Missing)
- `CodeComponent` - from `code.jsx` (imported but not fully documented)
- `ComplexCodeBlock` - from `code.jsx` (imported but not fully documented)
- `CodeSection` - from `code.jsx` (imported but not fully documented)
- `ResponseFieldGroup` - from `responseField.jsx` (commented out due to bug)

### Layout (Missing)
- `BasicList` - from `lists.jsx`
- `IconList` - from `lists.jsx`
- `StepList` - from `lists.jsx` (imported but not documented)
- `StepLinkList` - from `lists.jsx` (imported but not documented)
- `UpdateList` - from `lists.jsx` (imported but not documented)
- `UpdateLinkList` - from `lists.jsx` (imported but not documented)
- `ListSteps` - from `ListSteps.jsx`
- `AccordionLayout` - from `text.jsx`
- `QuadGrid` - from `quadGrid.jsx`
- `ApiBaseUrlsTable` - from `api-base-urls-table.mdx`
- `CardInCardLayout` - from `data.jsx`
- `ForumLatestLayout` - from `data.jsx` (imported but not documented)

### Domain (Missing)
- `GatewayOffChainWarning` - from `callouts.jsx`
- `GatewayOnChainWarning` - from `callouts.jsx`
- `GatewayOnChainTTestnetNote` - from `callouts.jsx`
- `OrchAddrNote` - from `callouts.jsx`
- `TestVideoDownload` - from `callouts.jsx`
- `FfmpegWarning` - from `callouts.jsx`
- `QuickStartTabs` - from `quickstartTabs.jsx`
- `QuickStartSteps` - from `quickstartTabs.jsx`
- `Starfield` - from `HeroGif.jsx`
- Portal components from `Portals.jsx`

## Summary

**Total Components Exported:** ~80+ components  
**Total Components Documented:** ~35 components  
**Total Components Missing:** ~45+ components

## Fixes Applied

1. ✅ Uncommented `CustomCodeBlock`, `CodeComponent`, `ComplexCodeBlock`, `CodeSection` in `content.mdx` - they work correctly
2. ✅ Added JSX comment quirk to style guide (Section 9)
3. ✅ All 6 category pages now render correctly
4. ❌ Main component-library.mdx page has parsing error - needs investigation

## Next Steps

1. Fix parsing error in main `component-library.mdx` page
2. Document all missing components listed above
3. Add examples for all components
4. Complete props documentation for all components
