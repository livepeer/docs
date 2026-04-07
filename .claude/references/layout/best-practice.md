# Layout — Collated Best Practice

> Collated from repo research sources. Verified against canonical files.
> Sources: `page-structure-rules.md`, `page-composition-framework.mdx`, `component-composition-template.mdx`, `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`

---

## Page Anatomy (Required Sections)

**Source:** `snippets/templates/pages/page-composition-framework.mdx`

Every page follows this structure:

1. **Header** — frontmatter title + description + optional Header CTA
2. **Introduction** — overview (value prop, context, outline)
3. **Body** — content sections with H1/H2 headings
4. **Footer** — related pages (optional)

### Header CTA Options
- Definition / value prop: `<Quote>`
- Clarity callout: `<Tip>`
- CTA / direct reference link: `<Card>` with `CustomCardTitle`, `horizontal`
- Code start: `<CustomCodeBlock>`
- Mental model: `<AccordionGroup><Accordion>`

### Footer Pattern
```jsx
<Columns cols={2}>
  <Card title={<CustomCardTitle icon="..." title="..." />} href="..." horizontal>
    description (ONE SENTENCE, MAX 10 WORDS)
  </Card>
</Columns>
```

---

## Page Type Templates

**Source:** `_research-and-consolidated-notes/prompt-guides-guards-resources/page-structure-rules.md`

| Template | pageType | Location |
|---|---|---|
| `navigation-page.mdx` | navigation | `snippets/templates/pages/` |
| `portal-page.mdx` | navigation (portal) | `snippets/templates/pages/` |
| `overview-page.mdx` | concept (overview) | `snippets/templates/pages/` |
| `how-to-page.mdx` | instruction | `snippets/templates/pages/` |
| `tutorial-page.mdx` | tutorial | `snippets/templates/pages/` |
| `reference-page.mdx` | reference | `snippets/templates/pages/` |
| `changelog.mdx` | reference (changelog) | `snippets/templates/pages/` |

---

## Component Selection Rules

**Source:** `snippets/components/component-composition-template.mdx` + `component-framework-canonical.md`

### Decision tree (first match wins)
1. Does it fetch/embed external data? → **integrators/** component
2. Is it part of the page skeleton (used once)? → **scaffolding/** component
3. Does it render content in a visual format? → **displays/** component
4. Does it hold/group/arrange other things? → **wrappers/** component
5. Is it a config/theme object? → **config/**
6. Default → **elements/** component

### Layout constraints
- Max one major layout element (Table, Steps) per page unless nested
- Max one of the same layout element per page
- Use Badges/icons for major category differentiation
- CustomDivider for visual section separation

---

## Import Organisation

**Source:** `v2/gateways/quickstart/gateway-setup.mdx` (gold standard)

Organise imports by category with section comments:
```jsx
{/* COMPONENT IMPORTS */}
import { SearchTable } from '/snippets/components/wrappers/tables/SearchTable.jsx'

{/* DATA IMPORTS */}
import { contractAddresses } from '/snippets/data/contract-addresses/contractAddressesData.jsx'

{/* MDX PAGE IMPORTS */}
import DockerOffChainTab from './views/docker/dockerOffChainTab.mdx'

{/* MDX COMPOSABLE IMPORTS */}
import DockerSupport from './groups/docker/dockerSupport.mdx'
```

Use root-absolute imports for shared repo resources such as `snippets/**`. Use relative imports for page-local files that are intentionally colocated with the route, such as `./views/*`, `./groups/*`, and `./components/*`.

---

## Multi-Path Layout Pattern

**Source:** `v2/gateways/quickstart/` (gold standard, Alison-written)

For pages serving multiple platform/mode combinations:
```
page.mdx                    # Entry point with imports + layout
├── views/                  # Platform × mode specific content (MDX)
│   ├── docker/dockerOffChainTab.mdx
│   ├── docker/dockerOnChainTab.mdx
│   └── linux/linuxOffChainTab.mdx
├── groups/                 # Shared sections across views (MDX)
│   ├── docker/dockerSupport.mdx
│   └── linux/linuxSupport.mdx
├── data/                   # Code blocks, flags, config (JSX exports)
│   ├── docker/code.jsx
│   └── flags.jsx
└── components/             # Page-specific callouts, tabs (JSX)
    └── callouts.jsx
```

---

## Mintlify Component Globals (No Import Needed)

**Source:** `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`

These are globally available in MDX — do NOT import:
- `<Card>`, `<CardGroup>`, `<Columns>`
- `<Accordion>`, `<AccordionGroup>`
- `<Steps>`, `<Step>`
- `<Tabs>`, `<Tab>`
- `<Note>`, `<Warning>`, `<Tip>`, `<Info>`, `<Check>`, `<Danger>`
- `<Icon>`, `<Badge>`
- `<Update>` (changelog entries)
- `<CodeBlock>`, `<CodeGroup>`
