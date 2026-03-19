# Component Quality Audit Report (Tasks 13-15 Combined)

> Generated 2026-03-19. Covers responsive/dynamic, WCAG, and style concerns.
> 44 files audited across all categories.

## Critical Issues (fix first)

| # | File | Issue |
|---|---|---|
| 1 | elements/images/Image.jsx | `alt` prop not enforced — images can render without alt text |
| 2 | elements/images/Image.jsx | `LinkImage` `target="_blank"` missing `rel="noopener noreferrer"` |
| 3 | integrators/blog/Data.jsx | `dangerouslySetInnerHTML` in BlogCard, PostCard, DiscordAnnouncements — XSS vector |
| 4 | displays/video/Video.jsx | `TitledVideo` auto-plays video with no `prefers-reduced-motion` check |
| 5 | scaffolding/heroes/HeroGif.jsx | Canvas animation runs continuously with no `prefers-reduced-motion` |
| 6 | wrappers/grids/QuadGrid.jsx | Spin animation has no `prefers-reduced-motion` media query |
| 7 | displays/diagrams/ZoomableDiagram.jsx | Drag interaction (`cursor: grab`) has no keyboard equivalent |
| 8 | wrappers/lists/Lists.jsx | `BasicList` and `IconList` are empty stubs (return `<></>`) — non-functional |
| 9 | wrappers/lists/Lists.jsx | `UpdateList` ignores props entirely — renders static content |

## Major Issues by Theme

### Missing `style`/`className`/`...rest` Props (systemic)

Almost every component lacks one or more of these. This is the most pervasive issue.

| File | `style` | `className` | `...rest` |
|---|---|---|---|
| elements/links/Links.jsx | missing | missing | only GotoCard |
| elements/callouts/PreviewCallouts.jsx | missing | missing | missing |
| elements/images/Image.jsx | missing | missing | missing |
| elements/buttons/Buttons.jsx | missing | missing | missing |
| elements/social/SocialLinks.jsx | missing | missing | missing |
| displays/code/Code.jsx | missing | missing | missing |
| displays/quotes/Quote.jsx | missing (Quote) | missing | ok (FrameQuote) |
| displays/video/Video.jsx | partial | missing | missing |
| scaffolding/frame-mode/FrameMode.jsx | missing | missing | missing |
| scaffolding/portals/Portals.jsx | missing | missing | missing |
| scaffolding/heroes/HeroGif.jsx | missing | missing | missing |
| wrappers/steps/Steps.jsx | missing | missing | missing |
| wrappers/tables/Table.jsx | missing | missing | missing |
| wrappers/lists/Lists.jsx | missing | missing | missing |
| wrappers/accordions/AccordionLayout.jsx | missing | missing | missing |
| wrappers/accordions/AccordionGroupList.jsx | missing | missing | missing |
| wrappers/grids/QuadGrid.jsx | missing | missing | missing |
| integrators/blog/Data.jsx | missing | missing | missing |
| integrators/embeds/DataEmbed.jsx | missing | missing | missing |
| integrators/embeds/ExternalContent.jsx | missing | missing | missing |
| integrators/feeds/Coingecko.jsx | missing | missing | missing |
| integrators/feeds/ShowcaseCards.jsx | missing (outer) | missing | missing |

Components that DO handle these well: `elements/spacing/Divider.jsx`, `elements/text/CustomCardTitle.jsx`, `elements/text/Text.jsx` (Subtitle), `wrappers/containers/Containers.jsx`, `wrappers/containers/Layout.jsx`, `wrappers/containers/ScrollBox.jsx`, `wrappers/cards/CustomCards.jsx` (WidthCard), `displays/response-fields/ResponseField.jsx`.

### WCAG Issues

| File | Issue | Severity |
|---|---|---|
| elements/links/Links.jsx | `BlinkingIcon` animation — no `prefers-reduced-motion` | MAJOR |
| elements/links/Links.jsx | `LinkArrow` missing `rel="noopener noreferrer"` | MAJOR |
| elements/links/Links.jsx | `GotoLink` nests `<p>` inside `<span>` — invalid HTML | MAJOR |
| elements/spacing/Divider.jsx | No `role="separator"` on divider element | MAJOR |
| elements/text/Text.jsx | `CopyText` button SVG lacks `aria-hidden`; no copy feedback | MAJOR |
| elements/icons/Icons.jsx | `LivepeerSVG` missing `role="img"` and `aria-label` | MAJOR |
| elements/social/SocialLinks.jsx | Icon-only links have no `aria-label` | MAJOR |
| displays/quotes/Quote.jsx | Uses `<div>` instead of `<blockquote>` | MAJOR |
| displays/diagrams/ZoomableDiagram.jsx | Zoom buttons lack `aria-label` | MAJOR |
| displays/video/Video.jsx | `<video>` missing `aria-label` | MAJOR |
| scaffolding/frame-mode/FrameMode.jsx | Heading wrapped in extra `<div>` — confuses heading hierarchy | MAJOR |
| scaffolding/portals/Portals.jsx | No landmark roles on hero sections | MAJOR |
| integrators/feeds/Coingecko.jsx | Sortable `<th>` not keyboard-accessible | MAJOR |
| integrators/feeds/Coingecko.jsx | Trust score colour-only indicator | MINOR |
| integrators/embeds/DataEmbed.jsx | `TwitterTimeline` iframe missing `title` | MAJOR |
| integrators/embeds/DataEmbed.jsx | Uses `class` instead of `className` in JSX | MINOR (bug) |
| integrators/blog/Data.jsx | Hardcoded `color: "white"` — invisible on light theme | MAJOR |

### Style Issues

| File | Issue | Severity |
|---|---|---|
| wrappers/tables/Tables.jsx | `<style>` tag with random ID injected every render | MAJOR |
| wrappers/steps/Steps.jsx | `<style>` tag with random ID injected every render | MAJOR |
| wrappers/grids/QuadGrid.jsx | `@keyframes` injected as `<style>` per render instance | MAJOR |
| displays/response-fields/ResponseField.jsx | `<style>` with `Math.random()` class names per instance | MAJOR |
| integrators/feeds/ShowcaseCards.jsx | `ShowcaseCard` defined inside render — remounts every cycle | MAJOR |
| wrappers/lists/Lists.jsx | `console.log` left in production (StepList, StepLinkList) | MAJOR |
| displays/video/Video.jsx | `console.log` left in production (YouTubeVideoDownload, CardVideo) | MINOR |
| integrators/blog/Data.jsx | `console.debug` left in production (multiple) | MINOR |
| displays/video/Video.jsx | Mixed Tailwind classes + inline styles in same file | MINOR |
| elements/links/Links.jsx | Duplicate `hexToRgba` function (CustomCallout + TipWithArrow) | MINOR |
| integrators/blog/Data.jsx | ForumLatestLayout has typo in URL: `https:/forum.livepeer.org` | MINOR (bug) |

### Responsive/Hardcoded Dimension Issues

| File | Issue |
|---|---|
| scaffolding/portals/Portals.jsx | Multiple `width: "80%"` hardcoded |
| scaffolding/frame-mode/FrameMode.jsx | `fontSize: "2.5rem"` not responsive for small screens |
| displays/video/Video.jsx | `ShowcaseVideo` hardcoded negative margins + calc widths |
| integrators/feeds/ShowcaseCards.jsx | `height: "300px"`, `height: "150px"` hardcoded |
| integrators/embeds/DataEmbed.jsx | `TwitterTimeline` `height: "600px"` hardcoded |
| integrators/feeds/Coingecko.jsx | Column widths hardcoded in px |
| wrappers/containers/Containers.jsx | `FullWidthContainer` uses `100vw` (doesn't account for scrollbar) |

## Recommended Fix Priority

### Pass 1: Critical (security + broken components)
1. Sanitise `dangerouslySetInnerHTML` in Data.jsx
2. Fix empty stub components in Lists.jsx (BasicList, IconList, UpdateList)
3. Add `alt` enforcement to Image.jsx
4. Add `rel="noopener noreferrer"` to all `target="_blank"` links
5. Add `prefers-reduced-motion` to all animations (HeroGif, QuadGrid, Video, BlinkingIcon)

### Pass 2: WCAG Major
6. Add `role="separator"` to Divider
7. Change `<div>` to `<blockquote>` in Quote.jsx
8. Add `aria-label` to icon-only links (SocialLinks, Links)
9. Add keyboard accessibility to Coingecko sortable headers
10. Fix invalid HTML (`<p>` in `<span>`) in GotoLink
11. Add `aria-label`/`title` to iframes and videos

### Pass 3: Systemic style/extensibility
12. Add `style`/`className`/`...rest` props to all components (systemic — ~22 files)
13. Replace `<style>` tag injection with stable approach (4 files)
14. Remove `console.log`/`console.debug` from production (4 files)
15. Extract `ShowcaseCard` from inside render function

### Pass 4: Polish
16. Fix hardcoded dimensions with responsive fallbacks
17. Homogenise style patterns (top-of-function objects)
18. Extract duplicate utilities (hexToRgba)
19. Fix URL typo in ForumLatestLayout
20. Fix `class` vs `className` in TwitterTimeline
