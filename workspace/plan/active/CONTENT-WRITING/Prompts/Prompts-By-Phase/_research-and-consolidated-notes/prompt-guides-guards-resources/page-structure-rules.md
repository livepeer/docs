# Page Structure Rules

**Sources**: `snippets/templates/pages/` + `docs-guide/frameworks/page-taxonomy-framework.mdx`
**What these are**: Structural contracts for each page type — what sections are required, what order, what components are allowed.
**Use in**: Phase 4 layout pass (primary). Phase 2 structure audit (reference).

---

## Key files

### page-composition-framework.mdx
**Source**: `snippets/templates/pages/page-composition-framework.mdx`
**What it contains**: Rules for composing pages from blocks and components. Defines what layout patterns are valid, which components can appear where, and structural anti-patterns.

### page-taxonomy-framework.mdx
**Source**: `docs-guide/frameworks/page-taxonomy-framework.mdx`
**What it contains**: The published taxonomy framework. Defines page types, purpose values, and structural expectations. **Note**: This file may still have the old 12-type schema — check against `Frameworks/pageType.md` (canonical) and `Frameworks/frontmatter-taxonomy-update.md` for pending updates.

### Page templates (folder)
**Source**: `snippets/templates/pages/`
**What it contains**: MDX templates for each page type. One template per pageType variant.

| Template | pageType |
|---|---|
| `navigation-page.mdx` | `navigation` |
| `portal-page.mdx` | `navigation` (portal variant) |
| `overview-page.mdx` | `concept` (overview variant) |
| `how-to-page.mdx` | `instruction` |
| `tutorial-page.mdx` | `tutorial` |
| `reference-page.mdx` | `reference` |
| `faq-page.mdx` | `reference` (compendium variant) |
| `troubleshooting-page.mdx` | `instruction` (troubleshooting variant) |
| `glossary-tab.mdx` | `reference` (compendium/glossary variant) |
| `changelog.mdx` | `reference` (changelog variant) |
| `page-composition-framework.mdx` | Meta — all types |

---

## Related policies

- `docs-guide/policies/component-layout-decisions.mdx` — Which components are appropriate in which layouts
- `docs-guide/policies/quality-gates.mdx` — Gate criteria a page must pass before publication
