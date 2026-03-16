# Display Components

Display components handle the presentation of media, embeds, quotes, and visual content.

## Component Reference

| File                   | Exports                                             | Description                 |
| ---------------------- | --------------------------------------------------- | --------------------------- |
| `embed.jsx`            | `MarkdownEmbed`                                     | Markdown embed components   |
| `image.jsx`            | `Image`, `LinkImage`                                | Image display components    |
| `video.jsx`            | `YouTubeVideo`, `YouTubeVideoDownload`, `CardVideo` | Video embed components      |
| `zoomable-diagram.jsx` | `ScrollableDiagram`                                 | Zoomable/scrollable diagram with controls |
| `quote.jsx`            | `Quote`, `FrameQuote`                               | Quote display components    |
| `frame-mode.jsx`        | `PageHeader`, `H1`-`H6`, `P`, `Divider`             | Frame mode heading components |
| `showcaseCards.jsx`    | `ShowcaseCards`                                     | Project showcase with filtering |
| `socialLinks.jsx`      | `SocialLinks`                                       | Social media icon links     |
| `CardCarousel.jsx`     | `CardCarousel`                                      | Card carousel with pagination |

## Usage

```jsx
import { YouTubeVideo } from "/snippets/components/content/video.jsx";
import { ScrollableDiagram } from "/snippets/components/content/zoomableDiagram.jsx";
import { Quote, FrameQuote } from "/snippets/components/content/quote.jsx";
import { H1, H2, PageHeader } from "/snippets/components/display/frame-mode.jsx";
import { ShowcaseCards } from "/snippets/components/data/showcaseCards.jsx";
import { SocialLinks } from "/snippets/components/primitives/socialLinks.jsx";
import { CardCarousel } from "/snippets/components/layout/cardCarousel.jsx";
```

## Theme Support

All components use theme-aware colors:
- `ScrollableDiagram` uses CSS variables (`var(--border)`, `var(--accent)`)
- `frame-mode.jsx` components use `ThemeData` for all colors
- `Quote` components use `var(--accent)` for styling

## Frame Mode Components

The `frame-mode.jsx` exports are specifically designed for Mintlify frame mode pages where default markdown headings may not render correctly. They require importing `ThemeData` in the MDX file:

```jsx
import { ThemeData } from "/snippets/styles/themeStyles.jsx";
import { H1, H2, PageHeader } from "/snippets/components/display/frame-mode.jsx";
```

## Examples

See the `examples/` folder for runnable MDX examples of each component.
