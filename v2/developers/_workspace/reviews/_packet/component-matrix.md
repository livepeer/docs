# Component matrix — per pageType

**Source:** `v2/developers1/_workspace/canonical/checks.mdx` §5 Layout + `snippets/templates/pages/page-composition-framework.mdx` + `.claude/references/layout/best-practice.md`

For each pageType, this matrix lists required sections, preferred components, and avoided components. Use during reviews to identify missing structural elements.

## Page anatomy (every page)

Every page follows this skeleton per `page-composition-framework.mdx`:

1. **Frontmatter** (10 required fields — `title` renders as H1)
2. **Imports** (organised: component → data → page → composable)
3. **Header CTA** (optional — `<Quote>` / `<Tip>` / `<Card>` / `<CustomCodeBlock>` / `<AccordionGroup>` / `<CustomCallout>`)
4. **Opening `<CustomDivider />`** (always present after header, before intro prose)
5. **Introduction** (value prop + context + outline; no caveats; subject-first; no inline H1)
6. **Body sections** (H2 + content, no `<CustomDivider />` between intro and first H2)
7. **Optional dividers between major H2 sections**
8. **`<CustomDivider />` before Related Pages** (always present)
9. **Related Pages footer** OR **Next Step CTA** (one or the other, never both)

## Component selection decision tree

From `.claude/references/layout/best-practice.md` (first match wins):

1. Does it fetch/embed external data? → `/snippets/components/integrators/`
2. Is it part of page skeleton (used once)? → `/snippets/components/scaffolding/`
3. Does it render content visually? → `/snippets/components/displays/`
4. Does it group/arrange other things? → `/snippets/components/wrappers/`
5. Is it a config/theme object? → `/snippets/components/config/`
6. Default → `/snippets/components/elements/`

## Mintlify globals (no import needed)

`<Card>`, `<CardGroup>`, `<Columns>`, `<Accordion>`, `<AccordionGroup>`, `<Steps>`, `<Step>`, `<Tabs>`, `<Tab>`, `<Note>`, `<Warning>`, `<Tip>`, `<Info>`, `<Check>`, `<Danger>`, `<Icon>`, `<Badge>`, `<Update>`, `<CodeBlock>`, `<CodeGroup>`.

## pageType matrix

### `navigation` (portal, navigator, index, setup-paths-style)

| Element | Status | Notes |
|---|---|---|
| Header CTA | Recommended | `<Card>` or `<AccordionGroup>` mental model |
| Opening CustomDivider | Required | |
| Intro (orientation paragraph) | Required | What is this tab/section? Who is it for? |
| `<Card>` / `<Columns cols={2}>` | Required | Navigation cards with `<CustomCardTitle icon ... horizontal>` |
| `<CardGroup>` / `<Columns>` | Required | Primary content is routing |
| H2 sections | Optional | Only if grouping cards |
| Content components (Steps, Tabs, code) | Avoid | Routing pages should not contain task content |
| `<CustomDivider />` before Related Pages | Required (if Related present) | |

### `concept` (overview, landscape, infra-stack, repo-map, learn pages, build/*/overview)

| Element | Status | Notes |
|---|---|---|
| Header CTA | Recommended | `<Quote>` definition or `<Tip>` clarity callout |
| Opening CustomDivider | Required | |
| Intro paragraph | Required | Value + context + outline; subject-first |
| H2 sections (governing-concept headings, 1–3 words) | Required | "AI Pipeline Endpoints" not "How AI Works" |
| `<Tabs>` for variants | Recommended | When concept has multiple variants (e.g. workload types) |
| `<AccordionGroup>` / `<Accordion icon>` | Recommended | For mental models, edge cases, FAQ-style |
| `<Note>` / `<Tip>` / `<Info>` | Recommended | Sparingly, for adjacent context only — NEVER for primary content |
| `<StyledTable>` | Recommended | For reference data, max 1–2 per page |
| Mermaid diagrams | Recommended | With `MermaidColours.jsx`; prose before each |
| `<CodeGroup>` / fenced code with icon + title | Optional | If illustrating an interface |
| `<Card>` / `<Columns cols={2}>` Related Pages | Required | At footer |
| `<CustomDivider />` before Related Pages | Required | |

### `instruction` (quickstarts, single-task pages)

| Element | Status | Notes |
|---|---|---|
| Header CTA | Recommended | `<Tip>` outcome callout or `<Quote>` definition |
| Opening CustomDivider | Required | |
| Intro paragraph | Required | What the reader will achieve; activation moment |
| **Prerequisites section** | Required | API keys, SDK version, runtime, hardware (per check 2.B5 + 5.2) |
| **`<StyledSteps>` with `<StyledStep title>`** | Required | Procedural body — NOT raw `<Steps>`; accent props required |
| Step content: `<Tabs>` for language variants | Recommended | Every `<Tab>` has `icon` prop (`js`, `python`, `golang`, `docker`) |
| Code blocks: fenced with `icon` + `title` | Required | Every block — `icon="terminal"`, `title="filename.ext"` |
| **Verification section** | Required | How to confirm it worked |
| **Next Steps** (`<CardGroup>` or `<Card>`) | Required | Clear handoff to next page |
| `<Warning>` / `<Check>` | Recommended | For known pitfalls or success markers |
| `<Note>` / `<Info>` | Avoid for primary content | Per check 2.D7 |
| `<CustomDivider />` before Related Pages | Required | |

### `tutorial` (build/tutorials/*, end-to-end walkthroughs)

| Element | Status | Notes |
|---|---|---|
| Header CTA | Required | `<Quote>` outcome statement |
| Opening CustomDivider | Required | |
| Intro: what you build + activation moment | Required | |
| **Prerequisites** | Required | |
| **`<StyledSteps>`** | Required | |
| Code blocks: language tag + `icon` + `title` | Required | |
| Tabs for language variants | Recommended | |
| `<CodeGroup>` for multi-file changes | Recommended | |
| **Verification** | Required | |
| **Related** / Next Steps | Required | |
| `<CustomDivider />` before Related Pages | Required | |

### `guide` (build/* non-quickstart, guides/* non-overview)

| Element | Status | Notes |
|---|---|---|
| Header CTA | Optional | |
| Opening CustomDivider | Required | |
| Intro paragraph | Required | |
| Body: H2 sections OR `<StyledSteps>` | Required | Depends on procedural vs reference content |
| `<Tabs>` for language/platform variants | Recommended | |
| Code blocks with `icon` + `title` | Required (if code present) | |
| `<Card>` / `<CardGroup>` mid-page | Recommended | Routing within section |
| `<Note>` / `<Tip>` / `<Warning>` | Recommended | Sparingly |
| `<StyledTable>` | Recommended | Max 1–2 per page |
| `<AccordionGroup>` | Recommended | For collapsible deep-detail |
| **Related Pages footer** | Required | |
| `<CustomDivider />` before Related Pages | Required | |

### `reference` (apis, sdks, pricing-rate-limits, glossary, *-reference)

| Element | Status | Notes |
|---|---|---|
| Header CTA | Optional | `<Quote>` summary |
| Opening CustomDivider | Required | |
| Intro: what this is reference for | Required | Short |
| Body: `<ParamField>` / `<ResponseField>` / `<StyledTable>` | Required | Structured data |
| `<CodeGroup>` / `<Tabs>` for language examples | Recommended | |
| Reference tables at END, not beginning | Required | Per check 5.32 |
| **Related** / Next Step | Required | |
| `<CustomDivider />` before Related Pages | Required | |

### `resource` (compendium, knowledge-hub: awesome-livepeer, deepwiki, wiki, example-applications)

| Element | Status | Notes |
|---|---|---|
| Header CTA | Optional | |
| Opening CustomDivider | Required | |
| Intro paragraph | Required | What this resource is, when to use it |
| `<Card>` / `<CardGroup>` outbound links | Required | Primary content is external links |
| `<StyledTable>` for listings | Recommended | |
| `<Note>` re external content | Optional | |
| `<CustomDivider />` before Related Pages | Required | |

## Component-specific structure rules (apply across all pageTypes)

### Tabs (check 5.18)
- Every `<Tab>` MUST include `icon` prop using FontAwesome name
- Language tabs: `icon="js"` for JS/TS, `icon="python"` for Python, `icon="golang"` for Go
- Platform tabs: `icon="docker"`, `icon="linux"`, `icon="windows"`

### Code blocks (check 5.20)
- Every fenced block MUST include `icon` + `title` attributes
- `icon` conveys tool: `terminal`, `docker`, `code`
- `title` conveys file/command context: `auth.ts`, `Dockerfile`, `curl-request`
- Bare `` ```bash `` without icon/title = FAIL

### Steps (check 5.21)
- Procedural sequences MUST use `<StyledSteps>` with `<StyledStep>` — NOT raw `<Steps>` / `<Step>`
- Required accent styling props: `iconColor`, `titleColor`
- Raw `<Steps>` or numbered lists = FAIL

### Accordions (check 5.19)
- Every `<Accordion>` MUST include `icon` prop

### Cards (checks 5.17, 5.22)
- Navigation `<Card>` MUST include title via `<CustomCardTitle icon="..." title="..." />`
- MUST use `horizontal` layout when in Related Pages
- Related Pages MUST use `<Columns cols={2}>` wrapper
- Card description: ONE SENTENCE, MAX 10 WORDS

### Tables (checks 5.23, 5.24)
- Data tables MUST use `<StyledTable>` not raw markdown tables
- Raw markdown tables acceptable only in `_workspace/` files
- Maximum 1–2 tables per page

### CustomDivider (check 5.26)
- ONE opening divider after imports (always)
- NO divider between intro prose and first H2
- Optional between major H2 sections
- ALWAYS before Related Pages section
- Media and callouts placed AFTER opening divider, BEFORE intro prose

### Mermaid (check 5.27)
- Use colour values from `snippets/components/config/MermaidColours.jsx`
- Prose before every diagram
- `<ScrollableDiagram>` wrapper when overflow

### Imports (check 5.28)
Canonical order:
1. Component imports (PascalCase from `/snippets/components/...`)
2. Data imports (UPPER_CASE from `/snippets/data/...`)
3. MDX page imports (PascalCase from `./views/...`)
4. MDX composable imports (PascalCase from `./groups/...` or `/snippets/composables/...`)

## Quick-check questions per page

When reviewing, ask:

1. Does this page have **Related Pages at the footer** with `<Columns cols={2}>` + `<Card>` + `<CustomCardTitle icon ... horizontal>`? (Check 5.16 + 5.17)
2. Do all `<Tab>` elements have `icon` props? (Check 5.18)
3. Do all `<Accordion>` elements have `icon` props? (Check 5.19)
4. Do all fenced code blocks have `icon` + `title`? (Check 5.20)
5. Are procedural steps using `<StyledSteps>` (not raw `<Steps>`)? (Check 5.21)
6. Is there ONE opening `<CustomDivider />` and one before Related Pages? (Check 5.26)
7. Does the page use **Mintlify globals before custom snippets** where suitable? Many pages over-rely on `CenteredContainer` / `CustomDivider` and never use `<Note>`, `<Tip>`, `<Card>`, `<Tabs>`, `<Accordion>`.
8. Does the page meet its pageType's **required sections** (Prerequisites / Steps / Verification / Next Steps for instruction; etc.)?
9. **Does the page end somewhere meaningful**, with a clear next step? Or strand the reader?

Use these as the spine of the §"Component Audit" table in the per-page review.
