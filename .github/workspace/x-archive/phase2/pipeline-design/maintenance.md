# Maintenance Pipeline Design

> Indexes, catalogs, registries, and reference data stay current.
> If these drift, contributors (human and AI) can't find or navigate things.

---

## What "maintained" means for docs.livepeer.org

1. Every generated index/catalog matches the current repo state
2. Component registry reflects actual components
3. Reference data (contracts, releases, SDK) is current
4. Large assets are synced
5. Every generator has a matching verifier (generate/verify pair)

---

## Current pipelines

### Working

| Pipeline | When | What it does | Has verify pair? |
|---|---|---|---|
| Docs index gen+verify | Push + PR | Generates docs-index.json, verifies on PR | Yes |
| Docs guide catalogs gen+verify | Push + PR | Generates catalog MDX pages, verifies on PR | Yes |
| Component registry gen | Push | Generates component-registry.json | NO |
| Contract addresses | Cron + dispatch | Builds contract registry from on-chain + governor-scripts | Yes (self-contained) |
| Release version | Cron + dispatch | Updates go-livepeer latest version | No |
| Large assets | Push + Cron | Syncs files >1MB to docs-v2-assets branch | No |
| SDK clients | Cron | Speakeasy generates SDK from OpenAPI | No |
| Catalog governance | Push + PR | docs-catalog-governance.yml validates catalogs | Yes |

### Disconnected (scripts exist, no dispatcher)

| Script | What it does |
|---|---|
| generate-pages-index.js | Pages index |
| generate-ai-skills-indexes.js | AI skills catalog |
| generate-ai-tools-visual-library.js | AI tools visual lib |
| generate-ai-tools-inventory.js | AI tools inventory |
| generate-script-registry.js | Script registry |
| generate-docs-guide-components-index.js | Component index |
| generate-ui-templates.js | UI templates |
| generate-api-docs.sh | API docs |
| fetch-openapi-specs.sh | OpenAPI spec fetch (should feed openapi-reference-validation) |
| fetch-lpt-exchanges.sh | Exchange data |

---

## Proposed target state

### 2 maintenance dispatchers (replace 7+ current workflows)

**1. Post-Merge Generator (P4)**

One matrix dispatcher for all generators that run after content lands.

```
Push to deploy branch
  -> Matrix: [docs-index, docs-guide-catalogs, component-registry, 
              pages-index, script-registry, ai-skills-indexes,
              docs-guide-components-index]
  -> Each: run script, diff, commit if changed
```

This absorbs: generate-docs-index.yml, generate-docs-guide-catalogs.yml, generate-component-registry.yml + wires the disconnected generators. Shares dispatcher pattern with discoverability generators (ai-sitemap, llms, companions).

**2. PR Verify Gate (P3)**

One matrix validator for all generate/verify pairs.

```
PR opened
  -> Matrix: [check-docs-index, check-docs-guide-catalogs, 
              check-component-registry (NEW)]
  -> Each: run generator with --check, report pass/fail
```

Creates the missing component registry verify pair. Shares dispatcher with discoverability validators.

**Standalone (stay separate):**
- Contract addresses (complex, recently updated, deferred)
- Release version (unique trigger: repo dispatch from go-livepeer)
- Large assets (git operations, not node)
- SDK clients (Speakeasy, external toolchain)

---

## Impact/effort

| # | Fix | Impact | Effort | Priority |
|---|---|---|---|---|
| 1 | Create component registry verify pair | Detect registry drift on PR | Low (run existing script with --check) | Quick win |
| 2 | Wire disconnected generators to post-merge | 7 generators auto-run | Medium (add to matrix) | High impact |
| 3 | Wire fetch-openapi-specs.sh to openapi-validation | Specs auto-fetched before validation | Low | Quick win |
| 4 | Consolidate into 2 matrix dispatchers | Reduce workflow count | High | After fixes |
| 5 | Fix sdk_generation.yaml name + extension | Naming governance | 5 min | Quick win |

---

## Decision

**Pending review.**
