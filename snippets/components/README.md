# Components Library

Components are organised by functional category with PascalCase filenames.
Superseded files are staged in `x-archive/` pending cleanup; legacy sources
remain in `_archive/`.

## Folder Structure

```
components/
├── elements/        # Smallest visual atoms — no children, no fetching, no arrangement
│   ├── a11y/        buttons/  callouts/  icons/  images/
│   ├── links/       math/     social/    spacing/  text/
├── wrappers/        # Holds, groups, or spatially arranges other components
│   ├── accordions/  cards/    containers/  grids/
│   ├── lists/       steps/    tables/
├── displays/        # Renders authored content into a specific visual format
│   ├── code/        diagrams/  quotes/  response-fields/  video/
├── scaffolding/     # One-per-page structural skeleton
│   ├── frame-mode/  heroes/  page-containers/  portals/
├── integrators/     # Fetches, embeds, or binds to external/third-party data
│   ├── blog/        embeds/  feeds/  video-data/
├── config/          # Non-component config objects
├── x-archive/       # Superseded files (pending cleanup)
└── _archive/        # Legacy sources retained for review
```

## Decision Rules

| Category | Rule |
|---|---|
| `elements/` | "Is it a single visual piece that doesn't wrap, arrange, or fetch anything?" |
| `wrappers/` | "Does it exist to hold, group, or arrange other things?" |
| `displays/` | "Does it take content and present it in a formatted way?" |
| `scaffolding/` | "Is it part of the page's outer structure, typically used once?" |
| `integrators/` | "Does the content come from outside the repo?" |
| `config/` | "Is it a non-component config/theme object?" |

---

## Component Reference

### elements/

| File | Sub-niche | Key Exports | Description |
|---|---|---|---|
| `A11y.jsx` | a11y | `FocusableScrollRegions` | Accessibility helpers |
| `Buttons.jsx` | buttons | `DownloadButton`, `BasicBtn` | Button components |
| `PreviewCallouts.jsx` | callouts | `ComingSoonCallout`, `PreviewCallout`, `ReviewCallout` | Status callout banners |
| `Icons.jsx` | icons | `LivepeerSVG`, `LivepeerIcon`, `LivepeerIconOld`, `LivepeerIconFlipped` | Brand icons |
| `Image.jsx` | images | `Image`, `LinkImage` | Static image display |
| `Links.jsx` | links | `CustomCallout`, `BlinkingIcon`, `GotoLink`, `GotoCard`, `TipWithArrow`, `LinkArrow` | Navigation and link elements |
| `Math.jsx` | math | `MathBlock`, `MathInline` | Mathematical notation |
| `SocialLinks.jsx` | social | `SocialLinks` | Social media links |
| `Divider.jsx` | spacing | `CustomDivider` | Divider/separator |
| `Spacer.jsx` | spacing | `Spacer` | Vertical/horizontal spacer |
| `CustomCardTitle.jsx` | text | `CustomCardTitle` | Card title component |
| `Text.jsx` | text | `Subtitle`, `CopyText`, `CardTitleTextWithArrow`, `AccordionTitleWithArrow` | Text display primitives |

### wrappers/

| File | Sub-niche | Key Exports | Description |
|---|---|---|---|
| `AccordionGroupList.jsx` | accordions | `AccordionGroupList` | Grouped accordions |
| `AccordionLayout.jsx` | accordions | `AccordionLayout` | Accordion layout wrapper |
| `CustomCards.jsx` | cards | `DisplayCard`, `WidthCard`, `InlineImageCard` | Card layout helpers |
| `ShowcaseCards.jsx` | cards | `InteractiveCard`, `InteractiveCards`, `ShowcaseCards` | Interactive card layouts |
| `Containers.jsx` | containers | `BorderedBox`, `CenteredContainer`, `FullWidthContainer` | Generic spatial containers |
| `Layout.jsx` | containers | `FlexContainer`, `GridContainer`, `Spacer` | Flex/grid layout containers |
| `ScrollBox.jsx` | containers | `ScrollBox` | Scrollable container |
| `CardCarousel.jsx` | grids | `CardCarousel` | Card carousel layout |
| `QuadGrid.jsx` | grids | `QuadGrid` | Four-column grid layout |
| `ListSteps.jsx` | lists | `ListSteps` | Step list component |
| `Lists.jsx` | lists | `BasicList`, `IconList`, `StepList`, `StepLinkList`, `UpdateList`, `UpdateLinkList` | List layouts |
| `Steps.jsx` | steps | `StyledSteps`, `StyledStep` | Styled step components |
| `ApiBaseUrlsTable.mdx` | tables | API base URL table | MDX-defined table |
| `SearchTable.jsx` | tables | `SearchTable` | Searchable table |
| `Table.jsx` | tables | `DynamicTable` | Dynamic table component |
| `Tables.jsx` | tables | `StyledTable`, `TableRow`, `TableCell` | Styled table components |

### displays/

| File | Sub-niche | Key Exports | Description |
|---|---|---|---|
| `Code.jsx` | code | `CustomCodeBlock`, `CodeComponent`, `ComplexCodeBlock`, `CodeSection` | Code display components |
| `ZoomableDiagram.jsx` | diagrams | `ScrollableDiagram` | Zoomable/scrollable diagram |
| `Quote.jsx` | quotes | `Quote`, `FrameQuote` | Quote components |
| `ResponseField.jsx` | response-fields | `ValueResponseField`, `CustomResponseField`, `ResponseFieldExpandable`, `ResponseFieldAccordion`, `ResponseFieldGroup` | API response field components |
| `Video.jsx` | video | `Video`, `TitledVideo`, `ShowcaseVideo`, `CardVideo`, `YouTubeVideo`, `YouTubeVideoDownload` | Video and media components |

### scaffolding/

| File | Sub-niche | Key Exports | Description |
|---|---|---|---|
| `FrameMode.jsx` | frame-mode | `PageHeader`, `H1`–`H6`, `P`, `Divider` | Frame mode heading overrides |
| `HeroGif.jsx` | heroes | `Starfield` | Hero animation |
| `Portals.jsx` | portals | `HeroSectionContainer`, `HeroContentContainer`, `PortalHeroContent`, `PortalCardsHeader`, `PortalSectionHeader`, `LogoHeroContainer` | Portal page layout components |

### integrators/

| File | Sub-niche | Key Exports | Description |
|---|---|---|---|
| `Data.jsx` | blog | `BlogCard`, `PostCard`, `CardColumnsPostLayout`, `ForumLatestLayout`, `DiscordAnnouncements`, `LumaEvents` | Blog/feed data renderers |
| `DataEmbed.jsx` | embeds | `MarkdownEmbed`, `EmbedMarkdown`, `PdfEmbed`, `TwitterTimeline` | Third-party embed components |
| `ExternalContent.jsx` | embeds | `ExternalContent` | External content loader |
| `Coingecko.jsx` | feeds | `CoinGeckoExchanges` | CoinGecko exchange data |
| `Release.jsx` | feeds | `LatestVersion` | Version data display |
| `ShowcaseCards.jsx` | feeds | `ShowcaseCards` | Project showcase feed |
| `VideoData.jsx` | video-data | `YouTubeVideoData` | YouTube data cards |

### config/

| File | Description |
|---|---|
| `MermaidColours.jsx` | Mermaid diagram colour theme config |

---

## Usage

Import components using absolute paths with PascalCase filenames:

```jsx
import { YouTubeVideo } from "/snippets/components/displays/video/Video.jsx";
import { GotoCard, GotoLink } from "/snippets/components/elements/links/Links.jsx";
import { CustomCodeBlock } from "/snippets/components/displays/code/Code.jsx";
import { PdfEmbed } from "/snippets/components/integrators/embeds/DataEmbed.jsx";
import { PageHeader } from "/snippets/components/scaffolding/frame-mode/FrameMode.jsx";
```

**Note:** Mintlify provides `React`, `Frame`, `Card`, `Icon`, and other
primitives globally — do not import them.

## Governance

- **Naming**: PascalCase for all `.jsx`/`.mdx` component files
- **JSDoc**: Every export requires `@type`, `@subniche`, `@component`, `@status`, `@description`, `@accepts` (plus `@dataSource` for integrators)
- **Validation**: `node tools/scripts/generators/components/library/generate-component-registry.js --strict`
- **Import scanning**: `node tools/scripts/audits/components/library/scan-component-imports.js --verify`
