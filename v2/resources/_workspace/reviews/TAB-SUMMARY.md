# TAB SUMMARY: v2/resources (documentation-guide section)

**Audit date:** 2026-04-08
**Pages audited:** 20 total (12 previously reviewed + 9 new in this audit = 21 reviews)
**Reviewer:** Claude (automated audit)

## New Reviews (this audit)

| Page | File | Verdict | Key Issues |
|---|---|---|---|
| overview | component-library/overview.mdx | PASS (generated) | Missing 5 frontmatter fields in generator |
| config | component-library/config.mdx | PASS (generated) | Missing 5 frontmatter fields in generator |
| displays | component-library/displays.mdx | PASS (generated) | Missing 5 frontmatter fields in generator |
| elements | component-library/elements.mdx | PASS (generated) | Missing 5 frontmatter fields in generator; has code examples |
| integrators | component-library/integrators.mdx | PASS (generated) | Missing 5 frontmatter fields in generator |
| scaffolding | component-library/scaffolding.mdx | PASS (generated) | Missing 5 frontmatter fields in generator |
| wrappers | component-library/wrappers.mdx | PASS (generated) | Missing 5 frontmatter fields in generator |
| lpd-cli | tooling/lpd-cli.mdx | FAIL | Empty file (0 bytes) in docs.json nav |
| snippets-inventory | tooling/snippets-inventory.mdx | PASS | Capitalised "Keywords" |

## Verdicts Overview (new reviews only)

| Verdict | Count | Pages |
|---|---|---|
| PASS | 1 | snippets-inventory |
| PASS (generated) | 7 | overview, config, displays, elements, integrators, scaffolding, wrappers |
| FAIL | 1 | lpd-cli |

## Section Coverage

### Component Library (8 pages)
- **component-library.mdx**: Previously reviewed
- **overview.mdx**: PASS (generated) -- governance snapshot with 117 exports
- **config.mdx**: PASS (generated) -- 1 export (MermaidColours)
- **displays.mdx**: PASS (generated) -- 20 exports
- **elements.mdx**: PASS (generated) -- 27 exports with code examples
- **integrators.mdx**: PASS (generated) -- 18 exports with data source docs
- **scaffolding.mdx**: PASS (generated) -- 20 exports
- **wrappers.mdx**: PASS (generated) -- 31 exports

### Tooling (2 pages)
- **lpd-cli.mdx**: FAIL -- completely empty (0 bytes)
- **snippets-inventory.mdx**: PASS -- well-structured governance reference

### Other Sections (previously reviewed)
- ai-automations/: 3 pages (ai-features, automations-workflows, research-and-fact-checking)
- copy-style/: 3 pages (authoring-guide, authoring-standard, style-guide)
- contributing/: 1 page (contribute-to-the-docs)
- features/: 1 page (docs-features-and-ai-integrations)
- root: 2 pages (documentation-guide, documentation-overview)

## Common Issues

1. **Generated pages missing frontmatter** (7 pages): All component-library generated pages are missing og:image, audience, lastVerified, keywords, and purpose. This is a single fix in the generator template (`generate-component-docs.js`)
2. **Empty file in nav** (1 page): lpd-cli.mdx is 0 bytes but registered in docs.json
3. **Capitalised frontmatter key** (1 page): snippets-inventory uses "Keywords" instead of "keywords"

## Recommendations

1. **P0:** Add content to lpd-cli.mdx or remove from docs.json nav (blank page visible to users)
2. **P1:** Update `generate-component-docs.js` template to emit og:image, audience, lastVerified, keywords, purpose in frontmatter for all generated component pages (fixes 7 pages at once)
3. **P2:** Fix capitalised "Keywords" in snippets-inventory.mdx
