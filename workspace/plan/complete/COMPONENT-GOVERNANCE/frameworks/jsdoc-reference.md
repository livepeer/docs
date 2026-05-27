# Component JSDoc Reference — All 118 Exports

> Every exported component with its target JSDoc header values.
> Use this as the source of truth when applying or validating headers.

<CustomDivider />

## elements/ (30 exports)

### a11y/A11y.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `FocusableScrollRegions` | elements | a11y | stable | Makes scroll regions keyboard-focusable by adding tabindex to matching selectors. | — (returns null) |

### buttons/Buttons.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `BasicBtn` | elements | buttons | deprecated | Empty placeholder button stub — non-functional. | style, className, ...rest |
| `DownloadButton` | elements | buttons | stable | Lazy-loaded download button with icon that renders on viewport intersection. | style, className, ...rest |

### callouts/PreviewCallouts.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `ComingSoonCallout` | elements | callouts | stable | Banner indicating a feature or page is coming soon, with links to related resources. | style, className, ...rest |
| `PreviewCallout` | elements | callouts | stable | Banner indicating content is in preview/draft state with feedback links. | style, className, ...rest |
| `ReviewCallout` | elements | callouts | stable | Banner indicating content is under review with status links. | style, className, ...rest |

### icons/Icons.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `LivepeerSVG` | elements | icons | stable | Inline Livepeer logo as SVG with currentColor fill. | style, className, ...rest |
| `LivepeerIconOld` | elements | icons | deprecated | Legacy Livepeer icon using light-only SVG path. | style, className, ...rest |
| `LivepeerIconFlipped` | elements | icons | deprecated | Horizontally flipped legacy Livepeer icon. | style, className, ...rest |
| `LivepeerIcon` | elements | icons | stable | Theme-aware Livepeer icon with CSS custom property colour adaptation. | style, className, ...rest |

### images/Image.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `Image` | elements | images | stable | Framed image with optional caption and full-width toggle. | style, className, ...rest |
| `LinkImage` | elements | images | stable | Clickable framed image that opens a URL in a new tab. | style, className, ...rest |

### links/Links.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `CustomCallout` | elements | links | stable | Styled callout box with icon, custom colour, and child content. | children, style, className, ...rest |
| `BlinkingIcon` | elements | links | stable | Animated icon with pulsing opacity. Respects prefers-reduced-motion. | style, className, ...rest |
| `BlinkingTerminal` | elements | links | stable | Preset blinking terminal icon (alias for BlinkingIcon with terminal defaults). | style, className, ...rest |
| `DoubleIconLink` | elements | links | stable | Inline link with icons on both sides (e.g. GitHub icon + external arrow). | style, className, ...rest |
| `GotoLink` | elements | links | stable | Inline navigation link with icon prefix and label. | style, className, ...rest |
| `GotoCard` | elements | links | stable | Card-style navigation link wrapping Mintlify Card component. | children, style, className, ...rest |
| `TipWithArrow` | elements | links | stable | Callout box with tip icon and corner arrow indicator. | children, style, className, ...rest |
| `LinkArrow` | elements | links | stable | External link with arrow icon, optional description, and line break control. | style, className, ...rest |

### math/Math.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `MathInline` | elements | math | stable | Renders LaTeX as inline math using KaTeX. | style, className, ...rest |
| `MathBlock` | elements | math | stable | Renders LaTeX as a block-level math expression using KaTeX. | style, className, ...rest |

### social/SocialLinks.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `SocialLinks` | elements | social | stable | Row of icon-only social media links (Discord, GitHub, Forum, Blog, X) with tooltips and aria-labels. | style, className, ...rest |

### spacing/Divider.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `CustomDivider` | elements | spacing | stable | Themed horizontal divider with optional centre text and Livepeer logo accents. role="separator". | children, style, className, ...rest |

### spacing/Spacer.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `Spacer` | elements | spacing | stable | Empty spacer div with configurable size and direction (vertical/horizontal). | style, className, ...rest |

### text/CustomCardTitle.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `CustomCardTitle` | elements | text | stable | Card title row with icon and text, using flexbox alignment. | style, className, ...rest |

### text/Text.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `Subtitle` | elements | text | stable | Styled subtitle text with configurable colour, size, and alignment. | children, style, className, ...rest |
| `CopyText` | elements | text | stable | Text with a click-to-copy button that copies content to clipboard. | style, className, ...rest |
| `CardTitleTextWithArrow` | elements | text | stable | Card title with trailing arrow icon for navigation indication. | children, style, className, ...rest |
| `AccordionTitleWithArrow` | elements | text | stable | Accordion header text with trailing arrow icon. | children, style, className, ...rest |

<CustomDivider />

## wrappers/ (30 exports)

### accordions/AccordionGroupList.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `AccordionGroupList` | wrappers | accordions | stable | Generates N numbered accordion sections inside an AccordionGroup. | style, className, ...rest |

### accordions/AccordionLayout.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `AccordionLayout` | wrappers | accordions | stable | Vertical stack layout with small gap, designed for accordion content sections. | children, style, className, ...rest |

### cards/CustomCards.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `DisplayCard` | wrappers | cards | stable | Card with icon, custom title row, and body content. | children, style, className, ...rest |
| `WidthCard` | wrappers | cards | stable | Width-constrained card wrapper with configurable percentage width. | children, style, className, ...rest |
| `InlineImageCard` | wrappers | cards | stable | Card with inline image alongside content, using negative margin breakout. | children, style, className, ...rest |

### cards/ShowcaseCards.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `InteractiveCard` | wrappers | cards | stable | Single interactive card with hover effects. | style, className, ...rest |
| `InteractiveCards` | wrappers | cards | stable | Multi-column layout of interactive cards. | style, className, ...rest |
| `ShowcaseCards` | wrappers | cards | stable | Paginated card layout with search, category, and product filtering. | style, className, ...rest |

### containers/Containers.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `BorderedBox` | wrappers | containers | stable | Bordered container with configurable radius and background. | children, style, className, ...rest |
| `CenteredContainer` | wrappers | containers | stable | Horizontally centred container with configurable max-width. | children, style, className, ...rest |
| `FullWidthContainer` | wrappers | containers | stable | Full-viewport-width container that breaks out of parent padding. | children, style, className, ...rest |

### containers/Layout.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `FlexContainer` | wrappers | containers | stable | Flexbox container with configurable direction, gap, and alignment. | children, style, className, ...rest |
| `GridContainer` | wrappers | containers | stable | CSS Grid container with configurable columns and gap. | children, style, className, ...rest |
| `Spacer` | wrappers | containers | stable | Spacer element (duplicate — canonical is elements/spacing/Spacer). | children, style, className, ...rest |

### containers/ScrollBox.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `ScrollBox` | wrappers | containers | stable | Scrollable container with max-height, overflow hint, and accessible region role. | children, style, className, ...rest |

### grids/CardCarousel.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `CardCarousel` | wrappers | grids | stable | Paginated horizontal carousel with prev/next navigation and dot indicators. | children, style, className, ...rest |

### grids/QuadGrid.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `QuadGrid` | wrappers | grids | stable | 2×2 grid with centred rotating icon overlay. Respects prefers-reduced-motion. | children, style, className, ...rest |

### lists/ListSteps.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `ListSteps` | wrappers | lists | stable | Renders an array of step items inside Mintlify Steps component. | children, style, className, ...rest |

### lists/Lists.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `BasicList` | wrappers | lists | broken | Non-functional stub — returns empty fragment. | — |
| `IconList` | wrappers | lists | broken | Non-functional stub — returns empty fragment. | — |
| `StepList` | wrappers | lists | stable | Renders listItems as Mintlify Steps with title, icon, and content. | style, className, ...rest |
| `StepLinkList` | wrappers | lists | stable | Renders listItems as Mintlify Steps with GotoLink navigation. | style, className, ...rest |
| `UpdateList` | wrappers | lists | broken | Non-functional — ignores props, renders hardcoded static content. | — |
| `UpdateLinkList` | wrappers | lists | stable | Renders update items as linked entries inside Mintlify Update component. | — |

### steps/Steps.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `StyledSteps` | wrappers | steps | stable | Wrapper around Mintlify Steps with custom icon styling via injected CSS. | children, style, className, ...rest |
| `StyledStep` | wrappers | steps | stable | Single step with configurable icon, size, and colour. | children, style, className, ...rest |

### tables/SearchTable.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `SearchTable` | wrappers | tables | stable | Filterable table wrapper with search input and category dropdown. | style, className, ...rest |

### tables/Table.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `DynamicTable` | wrappers | tables | stable | Renders structured data as a scrollable table with section separators and accessible region. | style, className, ...rest |

### tables/Tables.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `StyledTable` | wrappers | tables | stable | Full-width table with header row styling and rounded container. | children, style, className, ...rest |
| `TableRow` | wrappers | tables | stable | Table row with optional header styling and hover effect. | children, style, className, ...rest |
| `TableCell` | wrappers | tables | stable | Table cell that switches between th and td based on header prop. | children, style, className, ...rest |

<CustomDivider />

## displays/ (17 exports)

### code/Code.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `CustomCodeBlock` | displays | code | stable | Code block with optional pre/post notes and expandable wrapper. | style, className, ...rest |
| `CodeComponent` | displays | code | stable | Simple code block with title and language syntax highlighting. | style, className, ...rest |
| `ComplexCodeBlock` | displays | code | stable | Code block with both pre-note and post-note sections. | style, className, ...rest |
| `CodeSection` | displays | code | stable | Expandable code section with title header. | style, className, ...rest |

### diagrams/ZoomableDiagram.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `ScrollableDiagram` | displays | diagrams | stable | Pannable, zoomable diagram container with zoom controls and accessible buttons. | children, style, className, ...rest |

### quotes/Quote.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `Quote` | displays | quotes | stable | Styled blockquote with accent border and centred italic text. | children, style, className, ...rest |
| `FrameQuote` | displays | quotes | stable | Framed blockquote with optional author, source link, and image. | children, style, className, ...rest |

### response-fields/ResponseField.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `ValueResponseField` | displays | response-fields | stable | API response field with name, type, and value display. | children, style, className, ...rest |
| `CustomResponseField` | displays | response-fields | stable | Custom-styled API response field with configurable margin. | children, style, className, ...rest |
| `ResponseFieldExpandable` | displays | response-fields | stable | Expandable response field that reveals nested content on click. | children, style, className, ...rest |
| `ResponseFieldAccordion` | displays | response-fields | stable | Accordion-style response field with collapsible detail section. | children, style, className, ...rest |
| `ResponseFieldGroup` | displays | response-fields | stable | Container for grouping multiple response fields with consistent spacing. | children, style, className, ...rest |

### video/Video.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `TitledVideo` | displays | video | stable | Auto-playing video with title/subtitle overlay. Respects prefers-reduced-motion. | children, style, className, ...rest |
| `ShowcaseVideo` | displays | video | stable | Full-width video with negative-margin breakout and rounded frame. | children, style, className, ...rest |
| `Video` | displays | video | stable | Basic framed video player with caption support. | children, style, className, ...rest |
| `YouTubeVideo` | displays | video | stable | YouTube embed via responsive iframe with aspect-ratio preservation. | style, className, ...rest |
| `YouTubeVideoDownload` | displays | video | stable | YouTube embed with download hint text below. | style, className, ...rest |
| `CardVideo` | displays | video | stable | YouTube embed inside a Card wrapper with aspect-ratio iframe. | style, className, ...rest |

<CustomDivider />

## scaffolding/ (20 exports)

### frame-mode/FrameMode.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `PageHeader` | scaffolding | frame-mode | stable | Page-level header with icon, title, and subtitle for frame-mode pages. | children, style, className, ...rest |
| `H1`–`H6` | scaffolding | frame-mode | stable | Heading overrides with optional icon prefix for frame-mode pages. | children, style, className, ...rest |
| `P` | scaffolding | frame-mode | stable | Paragraph override with optional icon prefix for frame-mode pages. | children, style, className, ...rest |
| `Divider` | scaffolding | frame-mode | stable | Horizontal rule divider for frame-mode pages. | style, className, ...rest |

### heroes/HeroGif.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `Starfield` | scaffolding | heroes | stable | Animated canvas starfield background with floating Livepeer logos. Respects prefers-reduced-motion. | style, className, ...rest |

### portals/Portals.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `HeroSectionContainer` | scaffolding | portals | stable | Full-width hero section wrapper with min-height and gradient background. | children, style, className, ...rest |
| `HeroImageBackgroundComponent` | scaffolding | portals | stable | Hero background with image overlay and gradient. | children, style, className, ...rest |
| `HeroContentContainer` | scaffolding | portals | stable | Centred content container inside hero sections. | children, style, className, ...rest |
| `HeroOverviewContent` | scaffolding | portals | stable | Hero content layout with title, icon, subtitle, and CTA slots. | children, style, className, ...rest |
| `PortalContentContainer` | scaffolding | portals | stable | Outer container for portal page content below the hero. | children, style, className, ...rest |
| `PortalHeroContent` | scaffolding | portals | stable | Hero content with logo, title, tagline, description, and card grid. | children, style, className, ...rest |
| `PortalCardsHeader` | scaffolding | portals | stable | Section header with "Choose Your Mission:" label and optional subtitle. | children, style, className, ...rest |
| `PortalSectionHeader` | scaffolding | portals | stable | Section header with icon, title, and horizontal rule. | children, style, className, ...rest |
| `LogoHeroContainer` | scaffolding | portals | stable | Hero banner with centred logo image, title, and subtitle. | children, style, className, ...rest |
| `RefCardContainer` | scaffolding | portals | stable | Container for reference cards with configurable column count. | children, style, className, ...rest |

<CustomDivider />

## integrators/ (20 exports)

### blog/Data.jsx

| Component | @type | @subniche | @status | @dataSource | @description | @accepts |
|---|---|---|---|---|---|---|
| `BlogCard` | integrators | blog | stable | automation/blog | Blog post card with scrollable content, metadata, and CTA. | style, className, ...rest |
| `CardBlogDataLayout` | integrators | blog | stable | automation/blog | Grid layout rendering BlogCards from an items array. | style, className, ...rest |
| `ColumnsBlogCardLayout` | integrators | blog | stable | automation/blog | Multi-column BlogCard layout using Mintlify Columns. | style, className, ...rest |
| `BlogDataLayout` | integrators | blog | stable | automation/blog | Single-column BlogCard stack. | style, className, ...rest |
| `PostCard` | integrators | blog | stable | automation/blog | Post card with gradient header, scrollable content, and metadata. | style, className, ...rest |
| `CardColumnsPostLayout` | integrators | blog | stable | automation/blog | Multi-column PostCard layout. | style, className, ...rest |
| `CardInCardLayout` | integrators | blog | stable | automation/blog | PostCards rendered inside Card wrappers. | style, className, ...rest |
| `ForumLatestLayout` | integrators | feeds | stable | automation/forum | Latest forum topics with banner image and topic cards. | style, className, ...rest |
| `DiscordAnnouncements` | integrators | feeds | stable | automation/discord | Discord announcement feed with parsed markdown content. Sanitised HTML. | style, className, ...rest |
| `LumaEvents` | integrators | feeds | stable | Luma API | Upcoming/past event cards from Luma calendar data. | style, className, ...rest |

### embeds/DataEmbed.jsx

| Component | @type | @subniche | @status | @dataSource | @description | @accepts |
|---|---|---|---|---|---|---|
| `MarkdownEmbed` | integrators | embeds | stable | fetch(url) | Fetches and renders remote markdown content. | style, className, ...rest |
| `PdfEmbed` | integrators | embeds | stable | iframe(src) | Embeds a PDF in a framed iframe with caption. | style, className, ...rest |
| `EmbedMarkdown` | integrators | embeds | deprecated | fetch(url) | Alias for MarkdownEmbed — use MarkdownEmbed instead. | style, className, ...rest |
| `TwitterTimeline` | integrators | embeds | stable | feed.mikle.com widget | Embeds a Twitter/X timeline feed widget via iframe. | style, className, ...rest |

### embeds/ExternalContent.jsx

| Component | @type | @subniche | @status | @dataSource | @description | @accepts |
|---|---|---|---|---|---|---|
| `ExternalContent` | integrators | embeds | stable | fetch(url) | Fetches and renders external markdown with scrollable container and source link. | children, style, className, ...rest |

### feeds/Coingecko.jsx

| Component | @type | @subniche | @status | @dataSource | @description | @accepts |
|---|---|---|---|---|---|---|
| `CoinGeckoExchanges` | integrators | feeds | stable | CoinGecko API | Sortable table of exchanges listing a token. Keyboard-accessible sort headers. | style, className, ...rest |

### feeds/Release.jsx

| Component | @type | @subniche | @status | @dataSource | @description | @accepts |
|---|---|---|---|---|---|---|
| `LatestVersion` | integrators | feeds | experimental | release-version workflow | Displays the latest release version string from automation data. | style, className, ...rest |

### feeds/ShowcaseCards.jsx

| Component | @type | @subniche | @status | @dataSource | @description | @accepts |
|---|---|---|---|---|---|---|
| `ShowcaseCards` | integrators | feeds | experimental | prop (items) | Paginated project showcase with search, filtering, and media cards. | style, className, ...rest |

### video-data/VideoData.jsx

| Component | @type | @subniche | @status | @dataSource | @description | @accepts |
|---|---|---|---|---|---|---|
| `YouTubeVideoData` | integrators | video-data | stable | automation/youtube | Renders YouTube video data with video embed and metadata columns. | style, className, ...rest |

<CustomDivider />

## config/ (1 export)

### MermaidColours.jsx

| Component | @type | @subniche | @status | @description | @accepts |
|---|---|---|---|---|---|
| `MermaidColours` | config | — | stable | Theme colour definitions for Mermaid diagrams (light/dark/CSS variable mappings). | — (data object, not a component) |
