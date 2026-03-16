# Components Library

These components are organised by active functional category, with legacy
sources preserved under `_archive/` for review.

## Folder Structure

```
components/
├── primitives/      # Basic UI elements
├── layout/          # Reusable layout and structure helpers
├── content/         # Content-focused renderers
├── data/            # Data and embed components
├── page-structure/  # Route-level and hero/page composition helpers
└── _archive/        # Legacy sources retained for review
```

---

## Component Reference

### primitives/

| File          | Exports                                                                                                       | Description                    |
| ------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `buttons.jsx` | `DownloadButton`                                                                                              | Button components              |
| `divider.jsx` | `CustomDivider`                                                                                               | Divider/separator              |
| `icons.jsx`   | `LivepeerSVG`, `LivepeerIconOld`, `LivepeerIconFlipped`, `LivepeerIcon`                                       | Livepeer brand icons           |
| `links.jsx`   | `CustomCallout`, `BlinkingIcon`, `BlinkingTerminal`, `DoubleIconLink`, `GotoLink`, `GotoCard`, `TipWithArrow` | Link and navigation components |

### layout/

| File             | Exports                                                                                                      | Description             |
| ---------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------- |
| `cards.jsx`      | `ScrollBox`                                                                                                  | Card layout helpers     |
| `containers.jsx` | `BorderedBox`, `CenteredContainer`, `FullWidthContainer`, `TabsContainer`, `CardContentContainer`, `CalloutContainer` | Container helpers |
| `listSteps.jsx`  | `ListSteps`                                                                                                  | Step list component     |
| `lists.jsx`      | `BasicList`, `IconList`, `StepList`, `StepLinkList`, `UpdateList`, `UpdateLinkList`                         | List layouts            |
| `steps.jsx`      | `StyledSteps`, `StyledStep`                                                                                  | Styled step components  |
| `table.jsx`      | `DynamicTable`                                                                                               | Dynamic table component |

### content/

| File                  | Exports                                                                                                                | Description                   |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `code.jsx`            | `CustomCodeBlock`, `CodeComponent`, `ComplexCodeBlock`, `CodeSection`                                                  | Code display components       |
| `externalContent.jsx` | `ExternalContent`                                                                                                      | External content loader       |
| `quote.jsx`           | `Quote`, `FrameQuote`                                                                                                  | Quote components              |
| `release.jsx`         | `LatestVersion`                                                                                                        | Version display component     |
| `responseField.jsx`   | `ValueResponseField`, `CustomResponseField`, `ResponseFieldExpandable`, `ResponseFieldAccordion`, `ResponseFieldGroup` | API response field components |
| `video.jsx`           | `TitledVideo`, `ShowcaseVideo`, `Video`, `YouTubeVideo`, `LinkedInEmbed`, `YouTubeVideoDownload`, `CardVideo`         | Video and media components    |
| `zoomableDiagram.jsx` | `ScrollableDiagram`                                                                                                    | Zoomable/scrollable diagram   |

### data/

| File               | Exports                                                         | Description                     |
| ------------------ | --------------------------------------------------------------- | ------------------------------- |
| `coingecko.jsx`    | `CoinGeckoExchanges`                                            | CoinGecko exchange data display |
| `data.jsx`         | `PostCard`, `CardColumnsPostLayout`, `BlogCard`, `CardBlogDataLayout` | Data-driven card components |
| `embed.jsx`        | `MarkdownEmbed`, `PdfEmbed`, `TwitterTimeline`                  | Embed components                |
| `showcaseCards.jsx`| `ShowcaseCards`                                                 | Project showcase cards          |
| `videoData.jsx`    | `YouTubeVideoData`                                              | YouTube data cards              |

### page-structure/

| File            | Exports                                                                                          | Description                    |
| --------------- | ------------------------------------------------------------------------------------------------ | ------------------------------ |
| `frame-mode.jsx` | `PageHeader`, `H1`, `H2`, `H3`, `H4`, `H5`, `H6`, `P`, `Divider`                                | Frame mode heading components  |
| `heroGif.jsx`   | `Starfield`                                                                                      | Hero animation                 |
| `portals.jsx`   | `HeroSectionContainer`, `HeroContentContainer`, `PortalHeroContent`, `LogoHeroContainer`, etc. | Portal page layout components  |

---

## Usage

Import components in MDX files using absolute paths from `/snippets/`:

```jsx
import { YouTubeVideo } from "/snippets/components/content/video.jsx";
import { GotoCard, GotoLink } from "/snippets/components/primitives/links.jsx";
import { CustomCodeBlock } from "/snippets/components/content/code.jsx";
import { PdfEmbed } from "/snippets/components/data/embed.jsx";
import { PageHeader } from "/snippets/components/display/frame-mode.jsx";
```

**Note:** Mintlify provides `React`, `Frame`, `Card`, `Icon`, and other
primitives globally - do not import them.

Gateway quickstart route helpers currently live alongside the route in
`/v2/gateways/quickstart/components/`.
