---
title: Handoff — Create docs-guide/ page templates in snippets/templates/
from: REPO-STRUCTURE-GOV
to: whoever owns snippets/templates/ (likely COMPONENT-GOVERNANCE or CONTENT-WRITING)
created: 2026-03-21
trigger: after REPO-STRUCTURE-GOV Phase 2A-I is approved (structure + naming confirmed)
---

# Handoff: Create 5 missing docs-guide page templates

## Context

`snippets/templates/` covers user-facing docs page types well.
It has no templates for **internal docs-guide document types** — the structured pages
used in `policies/`, `frameworks/`, `features/`, `catalog/`, and `tooling/`.

Without these, new docs-guide pages are authored inconsistently.
Scripts that generate new catalog entries also have no canonical layout to follow.

## Templates to create

Location: `snippets/templates/docs-guide/` (new subdirectory)

| File | Purpose | Key sections |
|------|---------|--------------|
| `policy-page.mdx` | Policy documents in `policies/` | Scope, Rules, Enforcement, Exceptions, Related policies |
| `framework-page.mdx` | Guide/model documents in `frameworks/` | Overview, Decision model, When to use, Examples, Related |
| `catalog-page.mdx` | Generated catalog pages in `catalog/` | Generation banner, Summary table, Auto-populated section, Regeneration instructions |
| `feature-map-page.mdx` | System/feature map pages in `features/` | System diagram, Component table, Ownership, Related automation |
| `tooling-reference-page.mdx` | CLI/tool reference pages in `tooling/` | Install, Usage, Flags table, Examples, Related tools |

## Frontmatter standard to follow

### Hand-authored pages (policy, framework, feature-map, tooling-reference):
```yaml
---
title: "Human-readable title"
sidebarTitle: "Short nav label"
description: "One-sentence purpose"
owner: '@livepeer/docs-team'
status: active | draft | deprecated
version: '1.0'
created: YYYY-MM-DD
lastUpdated: YYYY-MM-DD
---
```

### Generated catalog pages:
```yaml
---
title: "Catalog Name"
description: "Auto-generated from [source]"
---
{/*
generated-file-banner:v1
Generation Script: tools/scripts/...
Purpose: ...
Run when: ...
Run command: node tools/scripts/... --write
*/}
```

## After creating templates

1. Run `generate-ui-templates.js --write` to regenerate `docs-guide/catalog/ui-templates.mdx`
   so the new templates appear in the catalog
2. Verify the new `snippets/templates/docs-guide/` subdirectory is added to `.mintignore`
   pattern (should already be covered by `/snippets/components/**/examples/**` — confirm)
3. Update `docs-guide/catalog/ui-templates.mdx` nav in docs.json if the catalog page
   is publicly navigable (check existing entry: `"docs-guide/catalog/ui-templates"`)

## Notes

- These are internal contributor templates, not user-facing page templates
- The `catalog-page.mdx` template is particularly important — scripts generating
  new catalog entries should use it as their output layout
- Naming: follow `kebab-case.mdx` convention, no `-index` suffix
