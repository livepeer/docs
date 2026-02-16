# Display Components

Display components handle the presentation of media, embeds, quotes, and visual content.

## Component Reference

| File                   | Exports                                             | Description                 |
| ---------------------- | --------------------------------------------------- | --------------------------- |
| `embed.jsx`            | `MarkdownEmbed`, `EmbedMarkdown`                    | Markdown embed components   |
| `image.jsx`            | `Image`, `LinkImage`                                | Image display components    |
| `video.jsx`            | `YouTubeVideo`, `YouTubeVideoDownload`, `CardVideo` | Video embed components      |
| `zoomable-diagram.jsx` | `ScrollableDiagram`                                 | Zoomable/scrollable diagram with controls |
| `quote.jsx`            | `Quote`, `FrameQuote`                               | Quote display components    |
| `frameMode.jsx`        | `PageHeader`, `H1`-`H6`, `P`, `Divider`             | Frame mode heading components |
| `showcaseCards.jsx`    | `ShowcaseCards`                                     | Project showcase with filtering |
| `socialLinks.jsx`      | `SocialLinks`                                       | Social media icon links     |
| `CardCarousel.jsx`     | `CardCarousel`                                      | Card carousel with pagination |

## Usage

```jsx
import { YouTubeVideo } from "/snippets/components/display/video.jsx";
import { ScrollableDiagram } from "/snippets/components/display/zoomable-diagram.jsx";
import { Quote, FrameQuote } from "/snippets/components/display/quote.jsx";
import { H1, H2, PageHeader } from "/snippets/components/display/frameMode.jsx";
import { ShowcaseCards } from "/snippets/components/display/showcaseCards.jsx";
import { SocialLinks } from "/snippets/components/display/socialLinks.jsx";
import { CardCarousel } from "/snippets/components/display/CardCarousel.jsx";
```

## Theme Support

All components use theme-aware colors:
- `ScrollableDiagram` uses CSS variables (`var(--border)`, `var(--accent)`)
- `frameMode.jsx` components use `ThemeData` for all colors
- `Quote` components use `var(--accent)` for styling

## Frame Mode Components

The `frameMode.jsx` exports are specifically designed for Mintlify frame mode pages where default markdown headings may not render correctly. They require importing `ThemeData` in the MDX file:

```jsx
import { ThemeData } from "/snippets/styles/themeStyles.jsx";
import { H1, H2, PageHeader } from "/snippets/components/display/frameMode.jsx";
```

## Examples

See the `examples/` folder for runnable MDX examples of each component.
