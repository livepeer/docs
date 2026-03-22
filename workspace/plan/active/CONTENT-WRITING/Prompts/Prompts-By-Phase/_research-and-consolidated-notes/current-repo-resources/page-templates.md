# Page Templates

**Source folder**: `snippets/templates/pages/`
**What these are**: MDX templates for each page type. These are the structural starting points for any new page or rewrite.
**Use in**: Phase 4 (layout pass) — the rewrite output should conform to the appropriate template. Phase 2 (structure audit) — compare existing pages against their expected template.

---

## Template folder contents

`snippets/templates/pages/` contains:

**Navigation / Landing:**
- `landing-and-navigation/navigation-page.mdx`
- `landing-and-navigation/portal-page.mdx`
- `landing-frame-page.mdx`

**Content pages:**
- `overview-page.mdx` — concept overview
- `how-to-page.mdx` — instruction
- `tutorial-page.mdx` — tutorial
- `reference-page.mdx` — reference
- `faq-page.mdx` — FAQ (reference compendium)
- `troubleshooting-page.mdx` — troubleshooting instruction

**Reference / API:**
- `reference-and-api/changelog.mdx` + `changelog-template.mdx`
- `reference-and-api/source-of-truth.mdx` + `source-of-truth-template.mdx`
- `reference-and-api/openapi-endpoint-page.mdx`

**Glossary:**
- `glossary-tab.mdx` + `glossary-tab-template.mdx`
- `glossary-consolidated.mdx` + `glossary-consolidated-template.mdx`

**Setup / Multi-view:**
- `setup-and-code-layouts/multi-view-page.mdx`
- `tutorial-and-guides/tutorial.mdx`

**Meta:**
- `page-composition-framework.mdx` — rules for all types (see `page-structure-rules.md` in prompt-guides-guards)

**Block templates** (`snippets/templates/blocks/`):
- `comparison-table.mdx`
- `comparison-matrix.mdx`
- `related-pages-cards.mdx`
- `related-pages-cta.mdx`

---

## Note on template names vs canonical pageType names

Template file names use older naming conventions (how-to, overview). Align against the current 7-type pageType enum when using in the pipeline. Mapping in `Frameworks/pageType.md`.
