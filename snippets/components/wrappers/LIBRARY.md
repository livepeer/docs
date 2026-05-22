<!-- GENERATED FILE — DO NOT EDIT DIRECTLY -->
<!-- Generator: operations/scripts/generators/components/library/generate-component-library.js -->
<!-- Generated: 2026-04-08T15:37:55.998Z -->
<!-- Regenerate: node operations/scripts/generators/components/library/generate-component-library.js --category wrappers -->

# Wrappers Component Library

Holds, groups, or spatially arranges other components.

**Components:** 10 | **Stable:** 10 | **Experimental:** 0 | **Deprecated:** 0

---

## badges

### 🟢 BadgeRow

> Unified badge row with variant prop. "text" renders Badge elements from a badges array. "icon" renders icon+label tags from an items array.

**Import:** `import { BadgeRow } from "/snippets/components/wrappers/badges/Badges.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `string` | "text" | Display variant: "text" for Badge elements, "icon" for icon+label tags. |
| `badges` | `Array` | — | Array of {color, label} objects (variant="text"). |
| `items` | `Array` | — | Array of {icon, label} objects (variant="icon"). |
| `children` | `React.ReactNode` | — | Manual JSX children (variant="text" fallback). |
| `iconColor` | `string` | — | Colour applied to all icons (variant="icon"). |
| `size` | `number` | 14 | Icon size in px (variant="icon"). |
| `gap` | `string` | "0.4rem" | Gap between items. |
| `style` | `object` | {} | Inline style overrides. |
| `className` | `string` | "" | CSS class name. |

#### Usage

```jsx
<BadgeRow variant="text" badges={[{color: "blue", label: "video"}]} />
<BadgeRow variant="icon" items={[{icon: "globe", label: "Web"}]} />
```

---

### 🟢 BadgeWrapper

> Flex row wrapper for Badge elements. Pass a `badges` array of {color, label} objects for auto-rendering, or use children for manual JSX.

**Import:** `import { BadgeWrapper } from "/snippets/components/wrappers/badges/Badges.jsx";`
**Status:** stable | **Imports:** 7

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `badges` | `Array` | — | Array of {color, label} objects. Rendered automatically as Badge elements. |
| `children` | `ReactNode` | — | Manual Badge JSX. Used if badges prop is omitted. |
| `gap` | `string` | "0.4rem" | Gap between badges. |
| `style` | `object` | {} | Inline style overrides (merged with defaults). |
| `className` | `string` | "" | CSS class name. |

#### Usage

```jsx
<BadgeWrapper badges={daydreamCategoryBadges} />
<BadgeWrapper>
  <Badge color="blue">video</Badge>
  <Badge color="green">stable</Badge>
</BadgeWrapper>
```

---

### 🟢 IconBadgeWrapper

> Flex row wrapper for icon+label tag items. Pass an `items` array of {icon, label} objects. Icons are uncoloured by default — pass `iconColor` to override.

**Import:** `import { IconBadgeWrapper } from "/snippets/components/wrappers/badges/Badges.jsx";`
**Status:** stable | **Imports:** 7

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `Array` | — | Array of {icon, label} objects. |
| `iconColor` | `string` | — | Colour applied to all icons. Defaults to currentColor if omitted. |
| `size` | `number` | 12 | Icon size in px. |
| `gap` | `string` | "var(--lp-spacing-3)" | Gap between items. |
| `style` | `object` | {} | Inline style overrides for the wrapper. |
| `className` | `string` | "" | CSS class name. |

#### Usage

```jsx
<IconBadgeWrapper items={daydreamInfraTags} />
<IconBadgeWrapper items={daydreamInfraTags} iconColor="var(--lp-color-accent)" />
```

---

## containers

### 🟢 BorderedBox

> Bordered container with configurable radius and background.

**Import:** `import { BorderedBox } from "/snippets/components/wrappers/containers/Containers.jsx";`
**Status:** stable | **Imports:** 71

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `any` | — | children prop. |
| `variant` | `string` | "default" | variant prop. |
| `padding` | `string` | "var(--lp-spacing-4)" | padding prop. |
| `borderRadius` | `string` | "8px" | border Radius prop. |
| `accentBar` | `string` | "" | Optional accent border token applied to the left edge. |
| `style` | `object` | {} | style prop. |
| `className` | `string` | '' | Optional CSS class override. |

---

### 🟢 CalloutWrapper

> Wraps Mintlify callout types (Tip, Info, Warning, Note, Check) with a styled header and description.

**Import:** `import { CalloutWrapper } from "/snippets/components/wrappers/containers/Containers.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `type` | `string` | "tip" | Mintlify callout type: "tip", "info", "warning", "note", "check" |
| `header` | `string` | — | Bold header text displayed at the top of the callout |
| `children` | `React.ReactNode` | — | Description content below the header |
| `headerColor` | `string` | "var(--lp-color-text-primary)" | Header text colour |
| `headerSize` | `string` | "0.9rem" | Header font size |
| `className` | `string` | "" | CSS class name |
| `style` | `object` | {} | Inline style overrides |

#### Usage

```jsx
<CalloutWrapper type="tip" header="Are you a Solution Provider?">
  Submit a PR to add your solution here!
</CalloutWrapper>
```

---

### 🟢 CenteredContainer

> Horizontally centred container with configurable max-width.

**Import:** `import { CenteredContainer } from "/snippets/components/wrappers/containers/Containers.jsx";`
**Status:** stable | **Imports:** 53

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `any` | — | children prop. |
| `maxWidth` | `string` | "800px" | max Width prop. |
| `padding` | `string` | "0" | padding prop. |
| `preset` | `string` | "default" | Named width/layout preset for common documentation patterns. |
| `width` | `string` | "" | Explicit width override. |
| `minWidth` | `string` | "" | Explicit min-width override. |
| `marginRight` | `string` | "" | Optional right margin override. |
| `marginBottom` | `string` | "" | Optional bottom margin override. |
| `textAlign` | `string` | "" | Optional text alignment override. |
| `style` | `object` | {} | style prop. |
| `className` | `string` | '' | Optional CSS class override. |

---

### 🟢 FlexContainer

> Flexbox container with configurable direction, gap, and alignment.

**Import:** `import { FlexContainer } from "/snippets/components/wrappers/containers/Containers.jsx";`
**Status:** stable | **Imports:** 8

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `any` | — | children prop. |
| `direction` | `string` | "row" | direction prop. |
| `gap` | `string` | "var(--lp-spacing-4)" | gap prop. |
| `align` | `string` | "flex-start" | align prop. |
| `justify` | `string` | "flex-start" | justify prop. |
| `wrap` | `boolean` | false | wrap prop. |
| `marginTop` | `string` | "" | Optional top margin override. |
| `marginBottom` | `string` | "" | Optional bottom margin override. |
| `style` | `object` | {} | style prop. |
| `className` | `string` | '' | Optional CSS class override. |

---

### 🟢 FullWidthContainer

> Full-viewport-width container that breaks out of parent padding.

**Import:** `import { FullWidthContainer } from "/snippets/components/wrappers/containers/Containers.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `any` | — | children prop. |
| `backgroundColor` | `any` | — | background Color prop. |
| `style` | `object` | {} | style prop. |
| `className` | `string` | '' | Optional CSS class override. |

---

### 🟢 GridContainer

> CSS Grid container with configurable columns and gap.

**Import:** `import { GridContainer } from "/snippets/components/wrappers/containers/Containers.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `any` | — | children prop. |
| `columns` | `any` | — | columns prop. |
| `gap` | `string` | "var(--lp-spacing-4)" | gap prop. |
| `style` | `object` | {} | style prop. |
| `className` | `string` | '' | Optional CSS class override. |

---

### 🟢 ScrollBox

> Scrollable container with max-height, overflow hint, and accessible region role.

**Import:** `import { ScrollBox } from "/snippets/components/wrappers/containers/Layout.jsx";`
**Status:** stable | **Imports:** 32

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `any` | — | children prop. |
| `maxHeight` | `number` | 300 | max Height prop. |
| `showHint` | `boolean` | true | show Hint prop. |
| `ariaLabel` | `string` | "Scrollable content" | aria Label prop. |
| `style` | `any` | — | style prop. |
| `className` | `string` | "" | CSS class name. |

---
