# Components Library

These components are organised **By Function/Purpose**.

Additionally some items are organised by **Domain** where domain-specific
components are extracted to their own folder (e.g., callouts, code strings used
on multiple pages).

## Folder Structure

```
components/
├── primitives/      # Basic UI elements
├── layout/          # Custom layouts for multiple items
├── display/         # Display elements for media or embeds
├── content/         # Content & Data Display Groups
├── integrations/    # External service integrations
└── domain/          # Domain-specific components
```

---

## Component Reference

### primitives/

| File          | Exports                                                                                                       | Description                    |
| ------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `buttons.jsx` | `BasicBtn`, `DownloadButton`                                                                                  | Button components              |
| `divider.jsx` | `CustomDivider`                                                                                               | Divider/separator              |
| `icons.jsx`   | `LivepeerSVG`, `LivepeerIconOld`, `LivepeerIconFlipped`, `LivepeerIcon`                                       | Livepeer brand icons           |
| `links.jsx`   | `CustomCallout`, `BlinkingIcon`, `BlinkingTerminal`, `DoubleIconLink`, `GotoLink`, `GotoCard`, `TipWithArrow` | Link and navigation components |

### layout/

| File            | Exports                                                                             | Description             |
| --------------- | ----------------------------------------------------------------------------------- | ----------------------- |
| `cards.jsx`     | `PostCard`, `CardColumnsPostLayout`, `BlogCard`, `CardBlogDataLayout`               | Card layouts            |
| `lists.jsx`     | `BasicList`, `IconList`, `StepList`, `StepLinkList`, `UpdateList`, `UpdateLinkList` | List layouts            |
| `ListSteps.jsx` | `ListSteps`                                                                         | Step list component     |
| `steps.jsx`     | `StyledSteps`, `StyledStep`                                                         | Styled step components  |
| `table.jsx`     | `DynamicTable`                                                                      | Dynamic table component |

### display/

| File                   | Exports                                             | Description                 |
| ---------------------- | --------------------------------------------------- | --------------------------- |
| `embed.jsx`            | `MarkdownEmbed`, `EmbedMarkdown`                    | Markdown embed components   |
| `image.jsx`            | `Image`, `LinkImage`                                | Image display components    |
| `video.jsx`            | `YouTubeVideo`, `YouTubeVideoDownload`, `CardVideo` | Video embed components      |
| `zoomable-diagram.jsx` | `ScrollableDiagram`                                 | Zoomable/scrollable diagram |

### content/

| File                   | Exports                                                                                                                | Description                   |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `code.jsx`             | `CustomCodeBlock`, `CodeComponent`, `ComplexCodeBlock`, `CodeSection`                                                  | Code display components       |
| `external-content.jsx` | `ExternalContent`                                                                                                      | External content loader       |
| `release.jsx`          | `LatestVersion`                                                                                                        | Version display component     |
| `responseField.jsx`    | `ValueResponseField`, `CustomResponseField`, `ResponseFieldExpandable`, `ResponseFieldAccordion`, `ResponseFieldGroup` | API response field components |

### integrations/

| File            | Exports              | Description                     |
| --------------- | -------------------- | ------------------------------- |
| `coingecko.jsx` | `CoinGeckoExchanges` | CoinGecko exchange data display |

### domain/04_GATEWAYS/

| File                 | Exports                                                                                                                               | Description               |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `callouts.jsx`       | `GatewayOffChainWarning`, `GatewayOnChainWarning`, `GatewayOnChainTTestnetNote`, `OrchAddrNote`, `TestVideoDownload`, `FfmpegWarning` | Gateway-specific callouts |
| `quickstartTabs.jsx` | `QuickStartTabs`, `QuickStartSteps`                                                                                                   | Gateway quickstart UI     |

---

## Usage

Import components in MDX files using absolute paths from `/snippets/`:

```jsx
import { YouTubeVideo } from "/snippets/components/display/video.jsx";
import { GotoCard, GotoLink } from "/snippets/components/primitives/links.jsx";
import { CustomCodeBlock } from "/snippets/components/content/code.jsx";
```

**Note:** Mintlify provides `React`, `Frame`, `Card`, `Icon`, and other
primitives globally - do not import them.
