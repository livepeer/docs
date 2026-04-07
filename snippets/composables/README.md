# snippets/composables/

Portable MDX section blocks — authored content that uses JSX components but is not itself a JSX component.

## What composables are

Composables are reusable page sections written in `.mdx`. Each file represents one logical section of a page (e.g. "Steps", "Prerequisites", "Related Pages"). They sit at Layer 3 of the three-layer content architecture:

| Layer | Location | What it is |
|-------|----------|------------|
| Data | `snippets/data/` | Structured data consumed by components |
| Components | `snippets/components/` | JSX rendering units |
| **Composables** | `snippets/composables/` | **Portable MDX section blocks** (this folder) |

## Platform constraint

Mintlify enforces that JSX files cannot cross-import other JSX files (Decision D4 in `component-governance.mdx`). Composables are therefore `.mdx` files, not `.jsx`. MDX can freely import JSX components; JSX cannot import JSX.

## How to use a composable

Reference a composable in any page by copying its content directly, or import and render it:

```mdx
import Prerequisites from '/snippets/composables/prerequisites-section.mdx'

<Prerequisites />
```

Replace placeholder values (marked in the file) with page-specific content. Optional sections are shown as `{/* ... */}` comment blocks — uncomment to enable.

## Naming convention

Names describe what the section IS, not which page uses it. Pattern: `{what-it-is}.mdx`.

- `related-resources-section.mdx` — not `developer-links.mdx`
- `accordion-faq-section.mdx` — not `faq-for-gateway-page.mdx`

For accordion variants, include the variant in the name: `accordion-faq-section`, `accordion-glossary-section`, `accordion-troubleshooting-section`.

## When to promote a block to a composable

A section belongs here when a **concrete second page** uses it. Never promote pre-emptively.

1. Write the section inline in the first page.
2. When a second page needs the same section, move it here and import it in both.
3. Update both pages to import from this path.

## Current composables

| File | Purpose | Tier | Mandatory |
|------|---------|------|-----------|
| `related-resources-section.mdx` | Footer navigation cards | 1 | Yes — all pages |
| `steps-section.mdx` | Ordered procedural steps | 1 | instruction, tutorial, start, build |
| `prerequisites-section.mdx` | Upfront requirements list | 1 | instruction, tutorial, start |
| `accordion-faq-section.mdx` | FAQ Q&A block | 1 | reference (compendium) |
| `accordion-glossary-section.mdx` | Alphabetical definitions | 1 | reference (compendium) |
| `accordion-troubleshooting-section.mdx` | Symptom/cause/fix/verify | 1 | troubleshooting pages |
| `overview-intro-section.mdx` | Opening block + optional media | 2 | Recommended, not mandatory |
| `validation-section.mdx` | Post-task confirmation | 2 | instruction, tutorial, start |

## Governance header format

Every composable starts with a `{/* @composable ... */}` governance comment:

```
{/*
  @composable  [filename without .mdx]
  @purpose     [one-line description]
  @pageTypes   [comma-separated page types]
  @variables   [list of things authors must fill in]
  @notes       [authoring constraints and pairing rules]
  @promoted    [YYYY-MM-DD]
*/}
```

This makes the file self-documenting at point of use without requiring a separate registry lookup.

## Related

- `docs-guide/frameworks/component-governance.mdx` — Section 12 covers the three-layer architecture and `@contentAffinity`
- `snippets/components/README.md` — JSX component library
- `snippets/data/` — structured data consumed by components
