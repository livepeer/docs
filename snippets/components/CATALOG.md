# Component Catalog

> Auto-generated reference of all components, their locations, exports, and usage counts.
> Usage counts reflect imports found across `v2/` pages.

## Summary

| Category | Files | Total Exports | Total Imports |
|---|---|---|---|
| elements | 12 | 30 | 1,040 |
| wrappers | 16 | 30 | 762 |
| displays | 5 | 17 | 330 |
| scaffolding | 3 | 20 | 146 |
| integrators | 7 | 20 | 154 |
| config | 1 | 1 | 6 |
| **Total** | **44** | **118** | **2,438** |

## Full Catalog

### elements/ (30 exports, 12 files)

| File | Sub-niche | Exports | Imports |
|---|---|---|---|
| [A11y.jsx](elements/a11y/A11y.jsx) | a11y | `FocusableScrollRegions` | 14 |
| [Buttons.jsx](elements/buttons/Buttons.jsx) | buttons | `BasicBtn`, `DownloadButton` | 33 |
| [PreviewCallouts.jsx](elements/callouts/PreviewCallouts.jsx) | callouts | `ComingSoonCallout`, `PreviewCallout`, `ReviewCallout` | 67 |
| [Icons.jsx](elements/icons/Icons.jsx) | icons | `LivepeerSVG`, `LivepeerIconOld`, `LivepeerIconFlipped`, `LivepeerIcon` | 14 |
| [Image.jsx](elements/images/Image.jsx) | images | `Image`, `LinkImage` | 42 |
| [Links.jsx](elements/links/Links.jsx) | links | `CustomCallout`, `BlinkingIcon`, `BlinkingTerminal`, `DoubleIconLink`, `GotoLink`, `GotoCard`, `TipWithArrow`, `LinkArrow` | 409 |
| [Math.jsx](elements/math/Math.jsx) | math | `MathInline`, `MathBlock` | 60 |
| [SocialLinks.jsx](elements/social/SocialLinks.jsx) | social | `SocialLinks` | 14 |
| [Divider.jsx](elements/spacing/Divider.jsx) | spacing | `CustomDivider` | 305 |
| [Spacer.jsx](elements/spacing/Spacer.jsx) | spacing | `Spacer` | 10 |
| [CustomCardTitle.jsx](elements/text/CustomCardTitle.jsx) | text | `CustomCardTitle` | 20 |
| [Text.jsx](elements/text/Text.jsx) | text | `Subtitle`, `CopyText`, `CardTitleTextWithArrow`, `AccordionTitleWithArrow` | 52 |

### wrappers/ (30 exports, 16 files)

| File | Sub-niche | Exports | Imports |
|---|---|---|---|
| [AccordionGroupList.jsx](wrappers/accordions/AccordionGroupList.jsx) | accordions | `AccordionGroupList` | 4 |
| [AccordionLayout.jsx](wrappers/accordions/AccordionLayout.jsx) | accordions | `AccordionLayout` | 14 |
| [CustomCards.jsx](wrappers/cards/CustomCards.jsx) | cards | `DisplayCard`, `WidthCard`, `InlineImageCard` | 61 |
| [ShowcaseCards.jsx](wrappers/cards/ShowcaseCards.jsx) | cards | `InteractiveCard`, `InteractiveCards`, `ShowcaseCards` | 8 |
| [Containers.jsx](wrappers/containers/Containers.jsx) | containers | `BorderedBox`, `CenteredContainer`, `FullWidthContainer` | 133 |
| [Layout.jsx](wrappers/containers/Layout.jsx) | containers | `FlexContainer`, `GridContainer`, `Spacer` | 29 |
| [ScrollBox.jsx](wrappers/containers/ScrollBox.jsx) | containers | `ScrollBox` | 18 |
| [CardCarousel.jsx](wrappers/grids/CardCarousel.jsx) | grids | `CardCarousel` | 14 |
| [QuadGrid.jsx](wrappers/grids/QuadGrid.jsx) | grids | `QuadGrid` | 22 |
| [ListSteps.jsx](wrappers/lists/ListSteps.jsx) | lists | `ListSteps` | 10 |
| [Lists.jsx](wrappers/lists/Lists.jsx) | lists | `BasicList`, `IconList`, `StepList`, `StepLinkList`, `UpdateList`, `UpdateLinkList` | 14 |
| [Steps.jsx](wrappers/steps/Steps.jsx) | steps | `StyledSteps`, `StyledStep` | 127 |
| [ApiBaseUrlsTable.mdx](wrappers/tables/ApiBaseUrlsTable.mdx) | tables | MDX-defined | 6 |
| [SearchTable.jsx](wrappers/tables/SearchTable.jsx) | tables | `SearchTable` | 10 |
| [Table.jsx](wrappers/tables/Table.jsx) | tables | `DynamicTable` | 95 |
| [Tables.jsx](wrappers/tables/Tables.jsx) | tables | `StyledTable`, `TableRow`, `TableCell` | 197 |

### displays/ (17 exports, 5 files)

| File | Sub-niche | Exports | Imports |
|---|---|---|---|
| [Code.jsx](displays/code/Code.jsx) | code | `CustomCodeBlock`, `CodeComponent`, `ComplexCodeBlock`, `CodeSection` | 50 |
| [ZoomableDiagram.jsx](displays/diagrams/ZoomableDiagram.jsx) | diagrams | `ScrollableDiagram` | 110 |
| [Quote.jsx](displays/quotes/Quote.jsx) | quotes | `Quote`, `FrameQuote` | 62 |
| [ResponseField.jsx](displays/response-fields/ResponseField.jsx) | response-fields | `ValueResponseField`, `CustomResponseField`, `ResponseFieldExpandable`, `ResponseFieldAccordion`, `ResponseFieldGroup` | 29 |
| [Video.jsx](displays/video/Video.jsx) | video | `TitledVideo`, `ShowcaseVideo`, `Video`, `YouTubeVideo`, `YouTubeVideoData`, `LinkedInEmbed`, `YouTubeVideoDownload`, `CardVideo` | 79 |

### scaffolding/ (20 exports, 3 files)

| File | Sub-niche | Exports | Imports |
|---|---|---|---|
| [FrameMode.jsx](scaffolding/frame-mode/FrameMode.jsx) | frame-mode | `PageHeader`, `H1`–`H6`, `P`, `Divider` | 52 |
| [HeroGif.jsx](scaffolding/heroes/HeroGif.jsx) | heroes | `Starfield` | 45 |
| [Portals.jsx](scaffolding/portals/Portals.jsx) | portals | `HeroImageBackgroundComponent`, `HeroContentContainer`, `PortalContentContainer`, `PortalHeroContent`, `LogoHeroContainer`, `RefCardContainer`, `HeroOverviewContent`, `HeroSectionContainer`, `PortalCardsHeader`, `PortalSectionHeader` | 49 |

### integrators/ (20 exports, 7 files)

| File | Sub-niche | Exports | Imports |
|---|---|---|---|
| [Data.jsx](integrators/blog/Data.jsx) | blog | `BlogCard`, `CardBlogDataLayout`, `ColumnsBlogCardLayout`, `BlogDataLayout`, `PostCard`, `CardColumnsPostLayout`, `CardInCardLayout`, `ForumLatestLayout`, `DiscordAnnouncements`, `LumaEvents` | 24 |
| [DataEmbed.jsx](integrators/embeds/DataEmbed.jsx) | embeds | `MarkdownEmbed`, `PdfEmbed`, `EmbedMarkdown`, `TwitterTimeline` | 35 |
| [ExternalContent.jsx](integrators/embeds/ExternalContent.jsx) | embeds | `ExternalContent` | 22 |
| [Coingecko.jsx](integrators/feeds/Coingecko.jsx) | feeds | `CoinGeckoExchanges` | 28 |
| [Release.jsx](integrators/feeds/Release.jsx) | feeds | `LatestVersion` | 13 |
| [ShowcaseCards.jsx](integrators/feeds/ShowcaseCards.jsx) | feeds | `ShowcaseCards` | 14 |
| [VideoData.jsx](integrators/video-data/VideoData.jsx) | video-data | `YouTubeVideoData` | 18 |

### config/ (1 export, 1 file)

| File | Exports | Imports |
|---|---|---|
| [MermaidColours.jsx](config/MermaidColours.jsx) | `MermaidColours` | 6 |

## Top 10 Most Imported

| # | Component file | Import count |
|---|---|---|
| 1 | elements/links/Links.jsx | 409 |
| 2 | elements/spacing/Divider.jsx | 305 |
| 3 | wrappers/tables/Tables.jsx | 197 |
| 4 | wrappers/containers/Containers.jsx | 133 |
| 5 | wrappers/steps/Steps.jsx | 127 |
| 6 | displays/diagrams/ZoomableDiagram.jsx | 110 |
| 7 | wrappers/tables/Table.jsx | 95 |
| 8 | displays/video/Video.jsx | 79 |
| 9 | elements/callouts/PreviewCallouts.jsx | 67 |
| 10 | displays/quotes/Quote.jsx | 62 |

## Flags

- `displays/video/Video.jsx` — contains `YouTubeVideoData` and `LinkedInEmbed` which are integrators (deferred split)
- `integrators/blog/Data.jsx` — contains `ForumLatestLayout`, `DiscordAnnouncements`, `LumaEvents` which are feeds (deferred split)
- `wrappers/containers/Layout.jsx` — contains `Spacer` which is an element (deferred split)
- `integrators/feeds/Release.jsx` — flagged as potentially not working
