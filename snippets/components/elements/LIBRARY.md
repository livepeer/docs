<!-- GENERATED FILE — DO NOT EDIT DIRECTLY -->
<!-- Generator: operations/scripts/generators/components/library/generate-component-library.js -->
<!-- Generated: 2026-04-08T15:37:55.987Z -->
<!-- Regenerate: node operations/scripts/generators/components/library/generate-component-library.js --category elements -->

# Elements Component Library

Smallest visual atoms — no children, no fetching, no arrangement.

**Components:** 32 | **Stable:** 28 | **Experimental:** 0 | **Deprecated:** 4

---

## a11y

### 🟢 FocusableScrollRegions

> Makes scroll regions keyboard-focusable by adding tabindex to matching selectors.

**Import:** `import { FocusableScrollRegions } from "/snippets/components/elements/a11y/FocusableScrollRegion.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `selectors` | `any` | — | selectors prop. |

#### Usage

```jsx
<FocusableScrollRegions selectors="example" />
```

---

## buttons

### 🟢 DownloadButton

> Lazy-loaded download button with icon that renders on viewport intersection.

**Import:** `import { DownloadButton } from "/snippets/components/elements/buttons/Buttons.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | 'Download' | label prop. |
| `icon` | `string` | 'download' | icon prop. |
| `downloadLink` | `any` | — | download Link prop. |
| `rightIcon` | `string` | '' | right Icon prop. |
| `border` | `boolean` | false | border prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

#### Usage

```jsx
<DownloadButton downloadLink="example" />
```

---

### 🟢 ExternalLinkButton

> Icon button that opens an external link in a new tab. Bordered with rounded corners, hover colour transition.

**Import:** `import { ExternalLinkButton } from "/snippets/components/elements/buttons/Buttons.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `href` | `string` | — | URL to open on click. |
| `icon` | `string` | 'arrow-up-right' | Icon name to display. |
| `size` | `number` | 14 | Icon size in pixels. |
| `ariaLabel` | `string` | 'Open external link' | Accessible label. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

#### Usage

```jsx
<ExternalLinkButton href="https://example.com" />
```

---

## callouts

### 🟠 ComingSoonCallout

> Banner indicating a feature or page is coming soon. Deprecated wrapper around StatusCallout.

**Import:** `import { ComingSoonCallout } from "/snippets/components/elements/callouts/Callouts.jsx";`
**Status:** deprecated | **Imports:** 2

---

### 🟠 CustomCallout

> Styled callout box. Deprecated alias for IconCallout.

**Import:** `import { CustomCallout } from "/snippets/components/elements/callouts/Callouts.jsx";`
**Status:** deprecated | **Imports:** 2

---

### 🟢 IconCallout

> Styled callout box with icon, custom colour, and optional corner arrow indicator.

**Import:** `import { IconCallout } from "/snippets/components/elements/callouts/Callouts.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | — | Content to display in the callout. |
| `icon` | `string` | "lightbulb" | Icon name to display. |
| `color` | `string` | — | Primary colour for icon, border, and background (defaults to theme accent). |
| `iconSize` | `number` | 16 | Size of the main icon in pixels. |
| `textSize` | `string` | "0.875rem" | Font size for the text content. |
| `textColor` | `string` | — | Text colour (defaults to match icon colour). |
| `showArrow` | `boolean` | false | Show an arrow icon in the top-right corner. |
| `arrowIcon` | `string` | "arrow-up-right" | Arrow icon name (when showArrow is true). |
| `arrowSize` | `number` | 16 | Size of the arrow icon in pixels. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

#### Usage

```jsx
<IconCallout color="#4a9eff">Tip content here</IconCallout>
<IconCallout color="#4a9eff" showArrow>Linked tip content</IconCallout>
```

---

### 🟠 PreviewCallout

> Banner indicating content is in preview state. Deprecated wrapper around StatusCallout.

**Import:** `import { PreviewCallout } from "/snippets/components/elements/callouts/Callouts.jsx";`
**Status:** deprecated | **Imports:** 1

---

### 🟢 ReviewCallout

> Banner indicating content is under technical review.

**Import:** `import { ReviewCallout } from "/snippets/components/elements/callouts/Callouts.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

#### Usage

```jsx
<ReviewCallout />
```

---

### 🟢 StatusCallout

> Banner indicating page/feature status (coming soon or preview) with feedback links.

**Import:** `import { StatusCallout } from "/snippets/components/elements/callouts/Callouts.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `string` | "coming-soon" | Status variant: "coming-soon" or "preview". |
| `type` | `string` | "page" | Context type: "page" or "tab-group" (affects title text for coming-soon variant). |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

#### Usage

```jsx
<StatusCallout variant="coming-soon" />
<StatusCallout variant="preview" />
```

---

### 🟠 TipWithArrow

> Callout with arrow. Deprecated wrapper around IconCallout.

**Import:** `import { TipWithArrow } from "/snippets/components/elements/callouts/Callouts.jsx";`
**Status:** deprecated | **Imports:** 2

---

## icons

### 🟢 ArbitrumIcon

> Arbitrum logo rendered identically to Mintlify FA icons using mask-image technique.

**Import:** `import { ArbitrumIcon } from "/snippets/components/elements/icons/Icons.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `number` | 16 | Icon size in pixels. |
| `color` | `string` | — | Override colour. Accepts CSS values including var() custom properties. Default is theme-aware (dark in light mode, light in dark mode). |
| `style` | `object` | {} | Inline style overrides. |
| `className` | `string` | "" | CSS class name. |

#### Usage

```jsx
<ArbitrumIcon size={16} />
<ArbitrumIcon color="var(--lp-color-accent)" />
```

---

### 🟢 ArbitrumSVG

> Inline Arbitrum logo as SVG with currentColor fill.

**Import:** `import { ArbitrumSVG } from "/snippets/components/elements/icons/Icons.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `number` | 24 | size prop. |
| `props` | `any` | — | props prop. |

#### Usage

```jsx
<ArbitrumSVG size={24} />
```

---

### 🟢 BlinkingIcon

> Animated icon with pulsing opacity. Respects prefers-reduced-motion.

**Import:** `import { BlinkingIcon } from "/snippets/components/elements/icons/Icons.jsx";`
**Status:** stable | **Imports:** 10

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `icon` | `string` | "terminal" | Icon name to display |
| `size` | `number` | 16 | Size of the icon in pixels |
| `color` | `string` | — | Color of the icon (defaults to theme accent) |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

#### Usage

```jsx
<BlinkingIcon color="var(--lp-color-accent)" />
```

---

### 🟢 LivepeerSVG

> Inline Livepeer logo as SVG with currentColor fill.

**Import:** `import { LivepeerSVG } from "/snippets/components/elements/icons/Icons.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `number` | 24 | size prop. |
| `props` | `any` | — | props prop. |

#### Usage

```jsx
<LivepeerSVG props="example" />
```

---

## images

### 🟢 Image

> Framed image with optional caption and full-width toggle.

**Import:** `import { Image } from "/snippets/components/elements/images/Image.jsx";`
**Status:** stable | **Imports:** 6

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `any` | — | src prop. |
| `alt` | `any` | — | alt prop. |
| `caption` | `any` | — | caption prop. |
| `icon` | `any` | — | icon prop. |
| `hint` | `any` | — | hint prop. |
| `fullwidth` | `boolean` | true | fullwidth prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

#### Usage

```jsx
<Image src="example" alt="example" />
```

---

### 🟢 LinkImage

> Clickable framed image that opens a URL in a new tab.

**Import:** `import { LinkImage } from "/snippets/components/elements/images/Image.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `any` | — | src prop. |
| `alt` | `any` | — | alt prop. |
| `caption` | `any` | — | caption prop. |
| `icon` | `any` | — | icon prop. |
| `hint` | `any` | — | hint prop. |
| `href` | `any` | — | href prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

#### Usage

```jsx
<LinkImage src="example" alt="example" />
```

---

## links

### 🟢 AddressLinks

> Copyable contract address with blockchain explorer and GitHub links.

**Import:** `import { AddressLinks } from "/snippets/components/elements/links/Links.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `address` | `string` | — | Contract address to display and copy. |
| `blockchainHref` | `string` | — | Blockchain explorer URL (e.g. Arbiscan). |
| `githubHref` | `string` | — | GitHub source URL. |
| `style` | `object` | {} | Inline style overrides. |
| `className` | `string` | "" | CSS class name. |

#### Usage

```jsx
<AddressLinks address={controller} blockchainHref={`${arb}${controller}`} githubHref="https://github.com/livepeer/protocol/blob/delta/contracts/Controller.sol" />
```

---

### 🟢 DoubleIconLink

> Inline link with icons on both sides.

**Import:** `import { DoubleIconLink } from "/snippets/components/elements/links/Links.jsx";`
**Status:** stable | **Imports:** 32

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | "" | Link text/label |
| `href` | `string` | "#" | Link URL |
| `text` | `string` | "" | Optional text to display before the link |
| `iconLeft` | `string` | "github" | Icon to display on the left |
| `iconRight` | `string` | "arrow-up-right" | Icon to display on the right |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

#### Usage

```jsx
<DoubleIconLink />
```

---

### 🟢 GotoCard

> Card-style navigation link wrapping Mintlify Card component.

**Import:** `import { GotoCard } from "/snippets/components/elements/links/Links.jsx";`
**Status:** stable | **Imports:** 11

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Card title |
| `relativePath` | `string` | — | Relative URL path |
| `icon` | `string` | — | Icon to display (defaults to "arrow-turn-down-right") |
| `text` | `React.ReactNode` | — | Card content |
| `cta` | `string` | "" | Call-to-action button text |
| `props` | `any` | — | props prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

#### Usage

```jsx
<GotoCard label="example" relativePath="example" />
```

---

### 🟢 GotoLink

> Inline navigation link with icon prefix and label.

**Import:** `import { GotoLink } from "/snippets/components/elements/links/Links.jsx";`
**Status:** stable | **Imports:** 9

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | — | Link text/label |
| `relativePath` | `string` | — | Relative URL path |
| `text` | `string` | "" | Optional text to display before the link |
| `icon` | `string` | "arrow-turn-down-right" | Icon to display |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

#### Usage

```jsx
<GotoLink label="example" relativePath="example" />
```

---

### 🟢 LinkArrow

> External link with arrow icon, optional description, and line break control.

**Import:** `import { LinkArrow } from "/snippets/components/elements/links/Links.jsx";`
**Status:** stable | **Imports:** 119

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `href` | `any` | — | href prop. |
| `label` | `any` | — | label prop. |
| `description` | `any` | — | description prop. |
| `newline` | `boolean` | true | newline prop. |
| `borderColor` | `any` | — | border Color prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

#### Usage

```jsx
<LinkArrow href="example" label="example" />
```

---

### 🟢 LinkIcon

> Wraps a Mintlify Icon in an anchor tag. Strips default Mintlify link styling (border-bottom).

**Import:** `import { LinkIcon } from "/snippets/components/elements/links/Links.jsx";`
**Status:** stable | **Imports:** 11

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `href` | `string` | — | Link destination URL. |
| `icon` | `string` | "arrow-up-right-from-square" | Font Awesome icon name. |
| `size` | `number` | 14 | Icon size in pixels. |
| `color` | `string` | — | Icon colour override. |
| `target` | `string` | "_blank" | Link target. |
| `rel` | `string` | "noopener noreferrer" | Link rel attribute. |
| `style` | `object` | {} | Inline style overrides. |
| `className` | `string` | "" | CSS class name. |

---

### 🟢 SocialLinks

> Row of icon-only social media links with tooltips and aria-labels. Pass a links array to customise per product; omit for Livepeer defaults.

**Import:** `import { SocialLinks } from "/snippets/components/elements/links/Links.jsx";`
**Status:** stable | **Imports:** 12

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `links` | `Array` | — | Array of {icon, href, label} objects. Falls back to Livepeer defaults if omitted. |
| `size` | `number` | 20 | Icon size in pixels. |
| `gap` | `string` | "var(--lp-spacing-3)" | Gap between icons. |
| `justify` | `string` | "center" | Flex justify-content value. |
| `iconColor` | `string` | — | Override all icons to a single colour. |
| `color` | `string` | — | Alias for iconColor (backwards compat). |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

#### Usage

```jsx
<SocialLinks />
```

---

## math

### 🟢 MathBlock

> Renders LaTeX as a block-level math expression using KaTeX.

**Import:** `import { MathBlock } from "/snippets/components/elements/math/Math.jsx";`
**Status:** stable | **Imports:** 11

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `latex` | `any` | — | latex prop. |
| `className` | `string` | "" | class Name prop. |
| `ariaLabel` | `any` | — | aria Label prop. |
| `style` | `object` | {} | Optional inline style override. |

#### Usage

```jsx
<MathBlock latex="example" ariaLabel="example" />
```

---

### 🟢 MathInline

> Renders LaTeX as inline math using KaTeX.

**Import:** `import { MathInline } from "/snippets/components/elements/math/Math.jsx";`
**Status:** stable | **Imports:** 11

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `latex` | `any` | — | latex prop. |
| `className` | `string` | "" | class Name prop. |
| `ariaLabel` | `any` | — | aria Label prop. |
| `style` | `object` | {} | Optional inline style override. |

#### Usage

```jsx
<MathInline latex="example" ariaLabel="example" />
```

---

## spacing

### 🟢 InlineDivider

> Lightweight horizontal rule with controllable margin, padding, colour, and opacity. Use inside accordions, steps, or anywhere markdown `---` gives no spacing control.

**Import:** `import { InlineDivider } from "/snippets/components/elements/spacing/Divider.jsx";`
**Status:** stable | **Imports:** 23

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `margin` | `string` | "0.75rem 0" | Margin around the divider. |
| `padding` | `string` | "0" | Padding around the divider. |
| `color` | `string` | "var(--lp-color-border-default)" | Line colour. |
| `opacity` | `number` | 0.4 | Line opacity. |
| `height` | `string` | "1px" | Line thickness. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

#### Usage

```jsx
<InlineDivider margin="0.5rem 0" />
```

---

### 🟢 Spacer

> Empty spacer div with configurable size and direction.

**Import:** `import { Spacer } from "/snippets/components/elements/spacing/Divider.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `string` | "var(--lp-spacing-4)" | Size used by the component. |
| `direction` | `string` | "vertical" | Direction used by the component. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

#### Usage

```jsx
<Spacer />
```

---

## text

### 🟢 AccordionTitle

> Accordion title with icon, name, and optional description subtitle. Wraps CustomCardTitle with an italic description line underneath.

**Import:** `import { AccordionTitle } from "/snippets/components/elements/text/Text.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `icon` | `string\|React.ReactNode` | — | Font Awesome icon name (string) or React component. |
| `title` | `React.ReactNode` | — | Title text. |
| `description` | `React.ReactNode` | — | Optional subtitle shown below the title in italic. |
| `descriptionColor` | `string` | "var(--lp-color-text-secondary)" | Description text colour. |
| `descriptionSize` | `string` | "0.85em" | Description font size. |
| `style` | `object` | {} | Inline style overrides on the wrapper. |
| `className` | `string` | "" | CSS class name. |

#### Usage

```jsx
<AccordionTitle icon="gear" title="Core" description="Staking, payments, and service discovery" />
```

---

### 🟢 CardTitleTextWithArrow

> Card title with trailing arrow icon for navigation indication.

**Import:** `import { CardTitleTextWithArrow } from "/snippets/components/elements/text/Text.jsx";`
**Status:** stable | **Imports:** 6

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `any` | — | children prop. |
| `cardProps` | `any` | — | card Props prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

#### Usage

```jsx
<CardTitleTextWithArrow cardProps="example">Example content</CardTitleTextWithArrow>
```

---

### 🟢 CopyText

> Text with a click-to-copy button that copies content to clipboard.

**Import:** `import { CopyText } from "/snippets/components/elements/text/Text.jsx";`
**Status:** stable | **Imports:** 11

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `text` | `any` | — | text prop. |
| `label` | `any` | — | label prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

#### Usage

```jsx
<CopyText text="example" label="example" />
```

---

### 🟢 CustomCardTitle

> Title row with icon and text, using flexbox alignment. Accepts Font Awesome strings or React components as icon. Variant prop controls styling context.

**Import:** `import { CustomCardTitle } from "/snippets/components/elements/text/Text.jsx";`
**Status:** stable | **Imports:** 40

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `icon` | `string\|React.ReactNode` | — | Font Awesome icon name (string) or React component (e.g. ArbitrumIcon). |
| `title` | `React.ReactNode` | — | Title text rendered by the component. |
| `variant` | `string` | "card" | Styling context: "card" (default, opinionated), "accordion" (inline, inherits parent styles), "tab" (inline, smaller). |
| `iconSize` | `number` | — | Icon size in pixels (applies to Font Awesome icons only). Defaults per variant: card=20, accordion=18, tab=14. |
| `style` | `object` | {} | Inline style overrides. |
| `className` | `string` | "" | CSS class name. |

#### Usage

```jsx
<CustomCardTitle icon="sparkles" title="Example" />
```

---

### 🟢 DataWrap

> Transparent wrapper that renders a data value inline. Used to surface pipeline-generated values (e.g. lastVerified dates) in MDX without additional markup.

**Import:** `import { DataWrap } from "/snippets/components/elements/text/DataWrap.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string\|number` | — | The data value to render. |

---
