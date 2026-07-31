<!-- GENERATED FILE — DO NOT EDIT DIRECTLY -->
<!-- Generator: operations/scripts/generators/components/library/generate-component-library.js -->
<!-- Generated: 2026-04-08T15:37:55.998Z -->
<!-- Regenerate: node operations/scripts/generators/components/library/generate-component-library.js --category displays -->

# Displays Component Library

Renders authored content into a specific visual format.

**Components:** 49 | **Stable:** 39 | **Experimental:** 2 | **Deprecated:** 4

---

## accordions

### 🟢 AccordionGroupList

> Generates N numbered accordion sections inside an AccordionGroup.

**Import:** `import { AccordionGroupList } from "/snippets/components/displays/accordions/Accordions.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `num` | `number` | 1 | Number of placeholder accordion sections to render. |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

---

### 🟢 AccordionLayout

> Vertical stack layout with small gap, designed for accordion content sections.

**Import:** `import { AccordionLayout } from "/snippets/components/displays/accordions/Accordions.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `any` | — | children prop. |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

---

## cards

### 🟢 DisplayCard

> Card with icon, custom title row, and body content.

**Import:** `import { DisplayCard } from "/snippets/components/displays/cards/Cards.jsx";`
**Status:** stable | **Imports:** 9

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `icon` | `string` | — | Icon configuration used by the component. |
| `title` | `React.ReactNode` | — | Title text rendered by the component. |
| `style` | `object` | — | Style used by the component. |
| `background` | `string` | 'var(--lp-color-bg-card)' | Background used by the component. |
| `children` | `React.ReactNode` | — | Content rendered inside the component. |
| `className` | `string` | "" | CSS class name. |

---

### 🟢 InlineImageCard

> Card with inline image alongside content, using negative margin breakout.

**Import:** `import { InlineImageCard } from "/snippets/components/displays/cards/Cards.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | — | Content rendered inside the component. |
| `imgProps` | `object` | — | Img props used by the component. |
| `imgStyle` | `object` | — | Img style used by the component. |
| `cardProps` | `object` | — | Card props used by the component. |
| `style` | `object` | — | Style used by the component. |
| `className` | `string` | "" | CSS class name. |

---

### 🟢 InteractiveCard

> Single interactive card with hover effects.

**Import:** `import { InteractiveCard } from "/snippets/components/displays/cards/Cards.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `mediaSrc` | `string` | "" | media Src prop. |
| `logo` | `string` | "" | logo prop. |
| `title` | `string` | "Untitled project" | title prop. |
| `subtitle` | `string` | "" | subtitle prop. |
| `description` | `string` | "" | description prop. |
| `href` | `string` | "#" | href prop. |
| `categoryTags` | `Array` | [ | ] - category Tags prop. |
| `productTags` | `Array` | [ | ] - product Tags prop. |
| `links` | `Array` | [ | ] - links prop. |
| `style` | `any` | — | style prop. |
| `className` | `string` | "" | CSS class name. |
| `cardProps` | `any` | — | card Props prop. |

---

### 🟢 InteractiveCards

> Multi-column layout of interactive cards.

**Import:** `import { InteractiveCards } from "/snippets/components/displays/cards/Cards.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `Array` | [ | ] - items prop. |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

---

### 🟢 ShowcaseCards

> Paginated card layout with search, category, and product filtering.

**Import:** `import { ShowcaseCards } from "/snippets/components/displays/cards/Cards.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `Array` | [ | ] - items prop. |
| `limit` | `any` | null | limit prop. |
| `pageSize` | `number` | 10 | page Size prop. |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

---

### 🟢 SolutionCard

> Card body for Solutions Portal product cards. Accepts pre-rendered JSX slots for badges, infra tags, and social links. ScrollBox is passed as a component prop for blurb rendering.

**Import:** `import { SolutionCard } from "/snippets/components/displays/cards/Cards.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `badges` | `ReactNode` | — | Pre-rendered <BadgeWrapper badges={...} /> |
| `logoSrc` | `string` | — | Path to the product logo image. |
| `logoAlt` | `string` | — | Alt text for the logo image. |
| `subtitle` | `string` | — | Bold italic one-line product subtitle. |
| `infraTags` | `ReactNode` | — | Pre-rendered <IconBadgeWrapper items={...} iconColor="var(--lp-color-accent)" size={12} /> |
| `blurb` | `string` | — | Product description text. Rendered inside ScrollBox. |
| `ScrollBox` | `Component` | — | ScrollBox component reference, passed from parent MDX. |
| `logoHeight` | `string` | — | Override logo container height (default '60px'). |
| `socialLinks` | `ReactNode` | — | Pre-rendered <SocialLinks links={...} /> |

#### Usage

```jsx
import { BadgeWrapper, IconBadgeWrapper } from '/snippets/components/wrappers/badges/Badges.jsx'
import { ScrollBox } from '/snippets/components/wrappers/containers/Layout.jsx'
import { SocialLinks } from '/snippets/components/elements/links/Links.jsx'

<SolutionCard
  badges={<BadgeWrapper badges={daydreamBadges} />}
  logoSrc="/snippets/assets/logos/products/daydream-logo-dark.svg"
  logoAlt="Daydream Logo"
  subtitle="Open-Source Toolkit For World Models and Real-time AI Video"
  infraTags={<IconBadgeWrapper items={daydreamInfra} iconColor="var(--lp-color-accent)" size={12} />}
  blurb="Description here."
  ScrollBox={ScrollBox}
  socialLinks={<SocialLinks links={daydreamSocials} justify="center" style={{ marginTop: "var(--lp-spacing-4)", marginBottom: '-1rem' }} />}
/>
```

---

### 🟢 SolutionItem

> Renders a solution entry with link, icon badges, and description. Designed for solution listing pages.

**Import:** `import { SolutionItem } from "/snippets/components/displays/cards/Cards.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `link` | `React.ReactNode` | — | Link element (e.g. <LinkArrow />), rendered as the heading |
| `iconWrapper` | `React.ReactNode` | null | Icon badges element (e.g. <IconBadgeWrapper />) |
| `description` | `React.ReactNode` | null | Description text or element |
| `divider` | `boolean` | true | Show bottom border divider |
| `className` | `string` | "" | CSS class name |
| `style` | `object` | {} | Inline style overrides |

#### Usage

```jsx
<SolutionItem
  link={<LinkArrow href="https://daydream.live" label="Daydream" />}
  iconWrapper={<IconBadgeWrapper items={daydreamInfra} iconColor="var(--lp-color-accent)" size={12} />}
  description="Real-time AI video, world models"
  divider={true}
/>
```

---

### 🟢 WidthCard

> Width-constrained card wrapper with configurable percentage width.

**Import:** `import { WidthCard } from "/snippets/components/displays/cards/Cards.jsx";`
**Status:** stable | **Imports:** 4

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `width` | `string` | '80%' | Width used by the component. |
| `children` | `React.ReactNode` | — | Content rendered inside the component. |
| `cardProps` | `object` | — | Forwarded Card props. |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

---

## code

### 🟢 CodeComponent

> Simple code block with title and language syntax highlighting.

**Import:** `import { CodeComponent } from "/snippets/components/displays/code/Code.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `filename` | `string` | "" | filename prop. |
| `icon` | `string` | "terminal" | icon prop. |
| `language` | `string` | "" | language prop. |
| `highlight` | `string` | "" | highlight prop. |
| `expandable` | `boolean` | false | expandable prop. |
| `wrap` | `boolean` | true | wrap prop. |
| `lines` | `boolean` | true | lines prop. |
| `codeString` | `string` | "" | code String prop. |
| `placeholderValue` | `string` | "" | placeholder Value prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 CodeSection

> Expandable code section with title header.

**Import:** `import { CodeSection } from "/snippets/components/displays/code/Code.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `fields` | `object` | {} | fields prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 ComplexCodeBlock

> Code block with both pre-note and post-note sections.

**Import:** `import { ComplexCodeBlock } from "/snippets/components/displays/code/Code.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `filename` | `any` | — | filename prop. |
| `icon` | `any` | — | icon prop. |
| `language` | `any` | — | language prop. |
| `highlight` | `any` | — | highlight prop. |
| `codeString` | `string` | "" | code String prop. |
| `placeholderValue` | `string` | "" | placeholder Value prop. |
| `wrap` | `boolean` | true | wrap prop. |
| `lines` | `boolean` | true | lines prop. |
| `preNote` | `any` | null | pre Note prop. |
| `postNote` | `any` | null | post Note prop. |

---

### 🟢 CustomCodeBlock

> Code block with optional pre/post notes and expandable wrapper.

**Import:** `import { CustomCodeBlock } from "/snippets/components/displays/code/Code.jsx";`
**Status:** stable | **Imports:** 6

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `filename` | `any` | — | filename prop. |
| `icon` | `any` | — | icon prop. |
| `language` | `any` | — | language prop. |
| `highlight` | `any` | — | highlight prop. |
| `codeString` | `string` | "" | code String prop. |
| `placeholderValue` | `string` | "" | placeholder Value prop. |
| `wrap` | `boolean` | true | wrap prop. |
| `lines` | `boolean` | true | lines prop. |
| `preNote` | `string` | "" | pre Note prop. |
| `postNote` | `string` | "" | post Note prop. |
| `output` | `string` | "" | output prop. |

---

## diagrams

### 🟢 ScrollableDiagram

> Pannable diagram container with deterministic preset zoom controls rendered without client-side React state.

**Import:** `import { ScrollableDiagram } from "/snippets/components/displays/diagrams/ScrollableDiagram.jsx";`
**Status:** stable | **Imports:** 22

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | — | Content rendered inside the component. |
| `title` | `string` | "" | Title text rendered by the component. |
| `maxHeight` | `string` | "500px" | Max height used by the component. |
| `minWidth` | `string` | "100%" | Min width used by the component. |
| `showControls` | `boolean` | false | When true, renders preset zoom controls. |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

---

## grids

### 🟢 CardCarousel

> Paginated horizontal carousel with prev/next navigation and dot indicators.

**Import:** `import { CardCarousel } from "/snippets/components/displays/grids/Grids.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | — | Content rendered inside the component. |
| `visibleCount` | `number` | 3 | Visible count used by the component. |
| `gap` | `string` | "var(--lp-spacing-6)" | Gap used by the component. |
| `showDots` | `boolean` | true | Boolean flag that controls component behaviour. |
| `style` | `object` | — | Style used by the component. |
| `className` | `string` | "" | CSS class name. |

---

### 🟢 QuadGrid

> 2x2 grid with centred rotating icon overlay. Respects prefers-reduced-motion.

**Import:** `import { QuadGrid } from "/snippets/components/displays/grids/Grids.jsx";`
**Status:** stable | **Imports:** 3

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `React.ReactNode` | — | Content rendered inside the component. |
| `icon` | `string` | "arrows-spin" | Icon configuration used by the component. |
| `iconSize` | `number` | 50 | Icon configuration used by the component. |
| `iconColor` | `string` | "var(--lp-color-accent)" | Icon configuration used by the component. |
| `spinDuration` | `string` | "10s" | Spin duration used by the component. |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

---

## quotes

### 🟢 FrameQuote

> Framed blockquote with optional author, source link, and image.

**Import:** `import { FrameQuote } from "/snippets/components/displays/quotes/Quote.jsx";`
**Status:** stable | **Imports:** 5

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `any` | — | children prop. |
| `author` | `any` | — | author prop. |
| `source` | `any` | — | source prop. |
| `href` | `any` | — | href prop. |
| `frame` | `boolean` | true | frame prop. |
| `align` | `string` | 'right' | align prop. |
| `borderColor` | `any` | — | border Color prop. |
| `img` | `any` | — | img prop. |
| `spacing` | `boolean` | true | spacing prop. |
| `props` | `any` | — | props prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 Quote

> Styled blockquote with accent border and centred italic text.

**Import:** `import { Quote } from "/snippets/components/displays/quotes/Quote.jsx";`
**Status:** stable | **Imports:** 13

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `any` | — | children prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

## response-fields

### 🟢 CustomResponseField

> Custom-styled API response field with configurable margin.

**Import:** `import { CustomResponseField } from "/snippets/components/displays/response-fields/ResponseField.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `description` | `React.ReactNode` | — | Primary content rendered by the component. |
| `props` | `object` | — | Additional props forwarded to ResponseField. |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

---

### 🟢 FunctionField

> Solidity function signature field with typed parameter pairs and optional return type.

**Import:** `import { FunctionField } from "/snippets/components/displays/response-fields/ResponseField.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | `string` | — | Function name. |
| `params` | `string[]` | [ | ] - Parameter strings in "type name" format (e.g. "bytes32 _id"). |
| `returns` | `string` | — | Return type (e.g. "address", "uint256"). |
| `children` | `React.ReactNode` | — | Description of the function. |
| `line` | `boolean` | true | Show bottom border. |
| `style` | `object` | {} | Inline style overrides. |
| `className` | `string` | "" | CSS class name. |

---

### 🟠 ResponseFieldAccordion

> Accordion-style response field with collapsible detail section.

**Import:** `import { ResponseFieldAccordion } from "/snippets/components/displays/response-fields/ResponseField.jsx";`
**Status:** deprecated | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `fields` | `object` | {} | Fields used by the component. |
| `props` | `object` | — | Additional props forwarded to Accordion. |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

---

### 🟠 ResponseFieldExpandable

> Expandable response field that reveals nested content on click.

**Import:** `import { ResponseFieldExpandable } from "/snippets/components/displays/response-fields/ResponseField.jsx";`
**Status:** deprecated | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `fields` | `object` | {} | Fields used by the component. |
| `props` | `object` | — | Additional props forwarded to Expandable. |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

---

### 🟢 ResponseFieldGroup

> Container for grouping multiple response fields with consistent spacing.

**Import:** `import { ResponseFieldGroup } from "/snippets/components/displays/response-fields/ResponseField.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `component` | `string` | "accordion" | Component used by the component. |
| `fields` | `object` | {} | Fields used by the component. |
| `props` | `object` | — | Additional props forwarded to the selected wrapper component. |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

---

### 🟢 ValueResponseField

> API response field with name, type, and value display.

**Import:** `import { ValueResponseField } from "/snippets/components/displays/response-fields/ResponseField.jsx";`
**Status:** stable | **Imports:** 3

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `description` | `React.ReactNode` | — | Primary content rendered by the component. |
| `post` | `string` | null | Post used by the component. |
| `label` | `string` | "value" | Label text rendered by the component. |
| `line` | `boolean` | true | Boolean flag that controls component behaviour. |
| `children` | `React.ReactNode` | — | Content rendered inside the component. |
| `props` | `object` | — | Additional props forwarded to ResponseField. |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

---

## steps

### 📋 BasicList

> Planned list component — not yet implemented.

**Import:** `import { BasicList } from "/snippets/components/displays/steps/Steps.jsx";`
**Status:** planned | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `listItems` | `any` | — | list Items prop. |

---

### 📋 IconList

> Planned icon list component — not yet implemented.

**Import:** `import { IconList } from "/snippets/components/displays/steps/Steps.jsx";`
**Status:** planned | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `listItems` | `any` | — | list Items prop. |

---

### 🟢 ListSteps

> Renders an array of step items inside Mintlify Steps component.

**Import:** `import { ListSteps } from "/snippets/components/displays/steps/Steps.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `listItems` | `Array` | — | Collection data rendered by the component. |
| `stepsConfig` | `object` | {} | Steps config used by the component. |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

---

### 🟢 StepLinkList

> Renders listItems as Mintlify Steps with GotoLink navigation.

**Import:** `import { StepLinkList } from "/snippets/components/displays/steps/Steps.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `listItems` | `any` | — | list Items prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 StepList

> Renders listItems as Mintlify Steps with title, icon, and content.

**Import:** `import { StepList } from "/snippets/components/displays/steps/Steps.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `listItems` | `any` | — | list Items prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 StyledStep

> Single step with configurable icon, size, and per-step colour overrides. When iconColor or titleColor is set, injects a scoped CSS override that takes precedence over the parent StyledSteps colours for this step only. When neither is set, behaves identically to a plain Step pass-through.

**Import:** `import { StyledStep } from "/snippets/components/displays/steps/Steps.jsx";`
**Status:** stable | **Imports:** 53

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `any` | — | title prop. |
| `icon` | `any` | — | icon prop. |
| `titleSize` | `string` | "h3" | title Size prop. |
| `iconColor` | `string\|null` | null | Per-step icon background colour override. |
| `titleColor` | `string\|null` | null | Per-step title text colour override. |
| `divider` | `boolean` | false | Show a divider line after the step content. |
| `dividerMargin` | `string` | "0.5rem 0" | Margin for the trailing divider. |
| `children` | `any` | — | children prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 StyledSteps

> Wrapper around Mintlify Steps with custom icon styling via injected CSS.

**Import:** `import { StyledSteps } from "/snippets/components/displays/steps/Steps.jsx";`
**Status:** stable | **Imports:** 53

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `any` | — | children prop. |
| `iconColor` | `any` | — | icon Color prop. |
| `titleColor` | `any` | — | title Color prop. |
| `lineColor` | `any` | — | line Color prop. |
| `iconSize` | `string` | "24px" | icon Size prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 UpdateLinkList

> Renders update items as linked entries inside Mintlify Update component.

**Import:** `import { UpdateLinkList } from "/snippets/components/displays/steps/Steps.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `listItems` | `any` | — | list Items prop. |

---

### 📋 UpdateList

> Planned update list component — not yet implemented.

**Import:** `import { UpdateList } from "/snippets/components/displays/steps/Steps.jsx";`
**Status:** planned | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `listItems` | `any` | — | list Items prop. |

---

## tables

### 🟢 DynamicTable

> Renders structured data as a scrollable table with section separators and accessible region.

**Import:** `import { DynamicTable } from "/snippets/components/displays/tables/Tables.jsx";`
**Status:** stable | **Imports:** 28

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `tableTitle` | `any` | null | table Title prop. |
| `headerList` | `Array` | [ | ] - header List prop. |
| `itemsList` | `Array` | [ | ] - items List prop. |
| `monospaceColumns` | `Array` | [ | ] - monospace Columns prop. |
| `contentFitColumns` | `Array` | [ | ] - Column names that should size to their contents. |
| `margin` | `any` | — | margin prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🧪 DynamicTableV2

> Renders structured data as a scrollable table with separator rows and intrinsic-width support for fit-to-content columns.

**Import:** `import { DynamicTableV2 } from "/snippets/components/displays/tables/Tables.jsx";`
**Status:** experimental | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `tableTitle` | `any` | null | table Title prop. |
| `headerList` | `Array` | [ | ] - header List prop. |
| `itemsList` | `Array` | [ | ] - items List prop. |
| `monospaceColumns` | `Array` | [ | ] - monospace Columns prop. |
| `columnWidths` | `object` | {} | Preferred minimum widths keyed by header. |
| `columnConfig` | `object` | {} | Per-column layout flags keyed by header. |
| `margin` | `any` | — | margin prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 SearchTable

> Generic filterable table wrapper with search input, category dropdown(s), and optional separators.

**Import:** `import { SearchTable } from "/snippets/components/displays/tables/Tables.jsx";`
**Status:** stable | **Imports:** 12

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `TableComponent` | `Function` | null | Table renderer component (e.g. DynamicTable). |
| `tableTitle` | `React.ReactNode` | null | Table title. |
| `headerList` | `Array` | [ | ] - Column header names. |
| `itemsList` | `Array` | [ | ] - Row data objects. Cell values can be strings or JSX. |
| `monospaceColumns` | `Array` | [ | ] - Column indices to render in monospace. |
| `margin` | `string` | — | Margin passed to TableComponent. |
| `searchPlaceholder` | `string` | 'Search...' | Placeholder text for the search input. |
| `searchColumns` | `Array` | [ | ] - Column names to search against. Defaults to all headers. |
| `categoryColumn` | `string` | 'Category' | Field name the first dropdown filters on. |
| `filterColumns` | `Array` | [ | ] - Additional column names that get dropdown filters. Each scoped by selections above it. |
| `columnWidths` | `object` | {} | Column width overrides keyed by header name. Passed to TableComponent. |
| `contentFitColumns` | `Array` | [ | ] - Column names that should size to their contents when supported by TableComponent. |
| `columnVariant` | `object` | {} | Column display variants keyed by header name. Supported: "bold", "badge", "textIcon", "addressWrapper". |
| `categoryBadges` | `Array` | [ | ] - Array of {color, label} for "badge" variant rendering. Matched by label (case-insensitive). |
| `textIcons` | `Array` | [ | ] - Array of {label, icon} for "textIcon" variant rendering. Icon is JSX rendered inline before the label text. |
| `showSeparators` | `boolean` | false | When true, inserts category separator rows. Labels are uppercased. |
| `separatorColumn` | `string` | null | Override which column drives separators. Default: categoryColumn. |
| `boldFirstColumn` | `boolean` | true | Auto-wraps first column in <strong> if value is a plain string. |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

---

### 🧪 SearchTableV2

> Generic filterable table wrapper with intrinsic-width sizing for badge, icon, and primary text columns.

**Import:** `import { SearchTableV2 } from "/snippets/components/displays/tables/Tables.jsx";`
**Status:** experimental | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `TableComponent` | `Function` | null | Table renderer component (e.g. DynamicTableV2). |
| `tableTitle` | `React.ReactNode` | null | Table title. |
| `headerList` | `Array` | [ | ] - Column header names. |
| `itemsList` | `Array` | [ | ] - Row data objects. Cell values can be strings or JSX. |
| `monospaceColumns` | `Array` | [ | ] - Column indices to render in monospace. |
| `margin` | `string` | — | Margin passed to TableComponent. |
| `searchPlaceholder` | `string` | 'Search...' | Placeholder text for the search input. |
| `searchColumns` | `Array` | [ | ] - Column names to search against. Defaults to all headers. |
| `categoryColumn` | `string` | 'Category' | Field name the first dropdown filters on. |
| `filterColumns` | `Array` | [ | ] - Additional column names that get dropdown filters. Each scoped by selections above it. |
| `columnWidths` | `object` | {} | Column width overrides keyed by header name. Passed to TableComponent. |
| `columnConfig` | `object` | {} | Optional column sizing overrides merged with V2 defaults. |
| `columnVariant` | `object` | {} | Column display variants keyed by header name. Supported: "bold", "badge", "textIcon", "addressWrapper". |
| `categoryBadges` | `Array` | [ | ] - Array of {color, label} for "badge" variant rendering. Matched by label (case-insensitive). |
| `textIcons` | `Array` | [ | ] - Array of {label, icon} for "textIcon" variant rendering. |
| `showSeparators` | `boolean` | false | When true, inserts category separator rows. Labels are uppercased. |
| `separatorColumn` | `string` | null | Override which column drives separators. Default: categoryColumn. |
| `boldFirstColumn` | `boolean` | true | Auto-wraps first column in <strong> if value is a plain string. |
| `className` | `string` | "" | CSS class name. |
| `style` | `object` | {} | Inline style overrides. |

---

### 🟢 StyledTable

> Full-width table with header row styling and rounded container.

**Import:** `import { StyledTable } from "/snippets/components/displays/tables/Tables.jsx";`
**Status:** stable | **Imports:** 120

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `any` | — | children prop. |
| `variant` | `string` | "default" | variant prop. |
| `style` | `object` | {} | style prop. |
| `className` | `string` | '' | Optional CSS class override. |

---

### 🟢 TableCell

> Table cell that switches between th and td based on header prop.

**Import:** `import { TableCell } from "/snippets/components/displays/tables/Tables.jsx";`
**Status:** stable | **Imports:** 119

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `any` | — | children prop. |
| `align` | `string` | "left" | align prop. |
| `header` | `boolean` | false | header prop. |
| `style` | `object` | {} | style prop. |
| `className` | `string` | '' | Optional CSS class override. |

---

### 🟢 TableRow

> Table row with optional header styling and hover effect.

**Import:** `import { TableRow } from "/snippets/components/displays/tables/Tables.jsx";`
**Status:** stable | **Imports:** 119

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `any` | — | children prop. |
| `header` | `boolean` | false | header prop. |
| `hover` | `boolean` | false | hover prop. |
| `style` | `object` | {} | style prop. |
| `className` | `string` | '' | Optional CSS class override. |

---

## video

### 🟢 CardVideo

> YouTube embed inside a Card wrapper with aspect-ratio iframe.

**Import:** `import { CardVideo } from "/snippets/components/displays/video/Video.jsx";`
**Status:** stable | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `embedUrl` | `any` | — | embed Url prop. |
| `title` | `any` | — | title prop. |
| `style` | `any` | — | style prop. |
| `className` | `string` | '' | Optional CSS class override. |

---

### 🟢 LinkedInEmbed

> LinkedIn post embed via responsive iframe with compact layout.

**Import:** `import { LinkedInEmbed } from "/snippets/components/displays/video/Video.jsx";`
**Status:** stable | **Imports:** 0

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `embedUrl` | `any` | — | embed Url prop. |
| `title` | `string` | "Embedded post" | title prop. |
| `hint` | `string` | "" | hint prop. |
| `caption` | `any` | — | caption prop. |
| `height` | `string` | "399" | height prop. |

---

### 🟠 ShowcaseVideo

> Full-width video with negative-margin breakout and rounded frame.

**Import:** `import { ShowcaseVideo } from "/snippets/components/displays/video/Video.jsx";`
**Status:** deprecated | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `any` | — | src prop. |
| `title` | `any` | — | title prop. |
| `subtitle` | `any` | — | subtitle prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 TitledVideo

> Auto-playing video with title/subtitle overlay. Respects prefers-reduced-motion.

**Import:** `import { TitledVideo } from "/snippets/components/displays/video/Video.jsx";`
**Status:** stable | **Imports:** 2

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `any` | — | src prop. |
| `title` | `any` | — | title prop. |
| `subtitle` | `any` | — | subtitle prop. |
| `arrow` | `boolean` | false | arrow prop. |
| `borderRadius` | `string` | "12px" | border Radius prop. |
| `style` | `object` | {} | style prop. |
| `className` | `string` | '' | Optional CSS class override. |

---

### 🟢 Video

> Basic framed video player with caption support.

**Import:** `import { Video } from "/snippets/components/displays/video/Video.jsx";`
**Status:** stable | **Imports:** 4

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `any` | — | src prop. |
| `title` | `string` | "" | title prop. |
| `author` | `string` | "" | author prop. |
| `caption` | `any` | — | caption prop. |
| `href` | `string` | "" | href prop. |
| `controls` | `boolean` | true | controls prop. |
| `autoPlay` | `boolean` | false | auto Play prop. |
| `loop` | `boolean` | false | loop prop. |
| `muted` | `boolean` | false | muted prop. |
| `children` | `any` | — | children prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟢 YouTubeVideo

> YouTube embed via responsive iframe with aspect-ratio preservation.

**Import:** `import { YouTubeVideo } from "/snippets/components/displays/video/Video.jsx";`
**Status:** stable | **Imports:** 21

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `embedUrl` | `any` | — | embed Url prop. |
| `title` | `string` | "" | title prop. |
| `author` | `string` | "" | author prop. |
| `hint` | `string` | "" | hint prop. |
| `caption` | `any` | — | caption prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---

### 🟠 YouTubeVideoData

> Renders a columned grid of YouTubeVideo embeds from an items array.

**Import:** `import { YouTubeVideoData } from "/snippets/components/displays/video/Video.jsx";`
**Status:** deprecated | **Imports:** 7

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `items` | `Array` | [ | ] - items prop. |
| `limit` | `any` | — | limit prop. |
| `cols` | `number` | 2 | cols prop. |

---

### 🔴 YouTubeVideoDownload

> YouTube embed with download hint text below (BROKEN — render content commented out).

**Import:** `import { YouTubeVideoDownload } from "/snippets/components/displays/video/Video.jsx";`
**Status:** broken | **Imports:** 1

#### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `embedUrl` | `any` | — | embed Url prop. |
| `title` | `any` | — | title prop. |
| `hint` | `any` | — | hint prop. |
| `caption` | `string` | "" | caption prop. |
| `className` | `string` | '' | Optional CSS class override. |
| `style` | `object` | {} | Optional inline style override. |

---
