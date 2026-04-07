# Handoff: `resources/` Sub-Section Restructure — Gateways + Orchestrators

**Raised by**: Content Writing Pipeline — Step 8a (IA Per Tab)
**Blocking**: Not blocking pipeline work — this is structural cleanup
**Scope**: `v2/gateways/resources/` and `v2/orchestrators/resources/`

---

## Background

The pipeline defines `resources/` as a container section with two sub-sections:
- `resources/reference/` — `reference` pageType: structured lookup content (specs, CLI flags, FAQ, glossary, API reference, contract addresses, troubleshooting)
- `resources/knowledge-hub/` — `resource` pageType: curated external/public content (community channels, tool directories, ecosystem links, showcases)

Currently, all content sits flat in `resources/` without this sub-section structure. This task reorganises it.

**Relevant policy**: `docs-guide/policies/v2-folder-governance.mdx`
**Type vocabulary source**: `v2/_workspace/references/content-pipeline/01-page-type-definitions.md` and `08a-ia-per-tab.md`

---

## Task

1. Create `resources/reference/` and `resources/knowledge-hub/` sub-sections in both tabs
2. Move files from their current locations to the correct sub-section
3. Update all `docs.json` paths (every moved file needs its path updated)
4. Handle edge cases listed below
5. Verify `mintlify dev` renders clean after changes

**Do NOT change file content.** Structure changes only.

---

## Gateways — `v2/gateways/resources/`

### Current navigation in docs.json

```json
{
  "group": "Resources",
  "pages": [
    "v2/gateways/resources/faq",
    "v2/gateways/resources/glossary",
    { "group": "Technical Reference", "pages": [
        "v2/gateways/resources/technical/technical-architecture",
        "v2/gateways/resources/technical/configuration-flags",
        "v2/gateways/resources/technical/contract-addresses",
        "v2/gateways/resources/technical/cli-commands",
        { "group": "AI API", "pages": ["v2/gateways/resources/technical/api-reference/AI-API/ai", ...14 pages] },
        { "group": "CLI HTTP API", "pages": ["v2/gateways/resources/technical/api-reference/CLI-HTTP/cli-http-api", ...8 more] },
        { "group": "Exchanges & RPCs", "pages": ["v2/gateways/resources/technical/livepeer-exchanges", "v2/gateways/resources/technical/arbitrum-exchanges", "v2/gateways/resources/technical/arbitrum-rpc"] }
    ]},
    { "group": "go-livepeer Reference", "pages": [
        "v2/gateways/resources/go-livepeer/bandwidth-requirements",
        "v2/gateways/resources/go-livepeer/hardware-requirements",
        "v2/gateways/resources/go-livepeer/gpu-support",
        "v2/gateways/resources/go-livepeer/cli-reference",
        "v2/gateways/resources/go-livepeer/prometheus-metrics"
    ]},
    { "group": "More Resources", "pages": [
        "v2/gateways/resources/knowledge-base/guides",
        "v2/gateways/resources/knowledge-base/resources",
        "v2/gateways/resources/knowledge-base/help"
    ]},
    { "group": "Compendium", "pages": ["v2/gateways/resources/compendium/glossary"] }
  ]
}
```

### File moves — Gateways

**→ `resources/reference/`** (reference pageType — structured lookup)

| Current path | New path |
|---|---|
| `resources/faq.mdx` | `resources/reference/faq.mdx` |
| `resources/glossary.mdx` | `resources/reference/glossary.mdx` |
| `resources/compendium/` (entire folder) | `resources/reference/compendium/` |
| `resources/technical/` (entire folder) | `resources/reference/technical/` |
| `resources/go-livepeer/` (entire folder) | See edge case below |

**→ `resources/knowledge-hub/`** (resource pageType — curated external)

| Current path | New path |
|---|---|
| `resources/knowledge-base/guides.mdx` | `resources/knowledge-hub/guides.mdx` |
| `resources/knowledge-base/resources.mdx` | `resources/knowledge-hub/resources.mdx` |
| `resources/knowledge-base/help.mdx` | `resources/knowledge-hub/help.mdx` |

**→ `_workspace/`** (not a publishable page)

| Current path | New path |
|---|---|
| `resources/research-sources.md` | `_workspace/research-sources.md` |

### Edge cases — Gateways

**Duplicate go-livepeer content**: `resources/go-livepeer/` and `resources/technical/go-livepeer/` both exist with overlapping files:
- `resources/go-livepeer/` has: bandwidth-requirements, cli-reference, gpu-support, hardware-requirements, prometheus-metrics (these ARE in docs.json)
- `resources/technical/go-livepeer/` has: cli-reference, gpu-support, hardware-requirements, prometheus-metrics (NOT in docs.json — not navigated)

**Resolution**: Move `resources/go-livepeer/` → `resources/reference/go-livepeer/`. Delete `resources/technical/go-livepeer/` (it's a duplicate and is not navigated). **Confirm with human before deleting.**

**`knowledge-base/resources-master-list.mdx`**: Present on disk but NOT in docs.json. Not navigated. Check with human — retain in `knowledge-hub/` or discard?

---

## Orchestrators — `v2/orchestrators/resources/`

### Current navigation in docs.json

```json
{
  "group": "Resources",
  "pages": [
    "v2/orchestrators/resources/faq",
    "v2/orchestrators/resources/glossary",
    "v2/orchestrators/resources/community-guides",
    "v2/orchestrators/resources/community-pools",
    { "group": "Technical Reference", "pages": [
        "v2/orchestrators/resources/technical/cli-flags",
        "v2/orchestrators/resources/technical/x-contract-addresses",
        "v2/orchestrators/resources/gpu-support",
        "v2/orchestrators/resources/arbitrum-rpc",
        "v2/orchestrators/resources/arbitrum-exchanges"
    ]},
    { "group": "Compendium", "pages": ["v2/orchestrators/resources/compendium/glossary"] }
  ]
}
```

### File moves — Orchestrators

**→ `resources/reference/`** (reference pageType — structured lookup)

| Current path | New path |
|---|---|
| `resources/faq.mdx` | `resources/reference/faq.mdx` |
| `resources/glossary.mdx` | `resources/reference/glossary.mdx` |
| `resources/gpu-support.mdx` | `resources/reference/gpu-support.mdx` |
| `resources/arbitrum-rpc.mdx` | `resources/reference/arbitrum-rpc.mdx` |
| `resources/arbitrum-exchanges.mdx` | `resources/reference/arbitrum-exchanges.mdx` |
| `resources/compendium/` (entire folder) | `resources/reference/compendium/` |
| `resources/technical/cli-flags.mdx` | `resources/reference/technical/cli-flags.mdx` |

**→ `resources/knowledge-hub/`** (resource pageType — curated external)

| Current path | New path |
|---|---|
| `resources/community-guides.mdx` | `resources/knowledge-hub/community-guides.mdx` |
| `resources/community-pools.mdx` | `resources/knowledge-hub/community-pools.mdx` |

### Edge cases — Orchestrators

**`x-` prefixed files** (deprecated, not in docs.json navigation):
- `resources/technical/x-contract-addresses.mdx` — in docs.json as `x-contract-addresses` under Technical Reference. Move to `resources/reference/technical/` as part of the restructure; keep the `x-` prefix.
- `resources/technical/x-changelog.mdx`, `x-support-status.mdx`, `x-troubleshooting.mdx` — NOT in docs.json. These are deprecated. **Confirm with human: move to `x-deprecated/` or discard?**
- `resources/x-guides.mdx`, `resources/x-help.mdx`, `resources/x-payments.mdx` — NOT in docs.json. Deprecated. **Confirm with human: move to `x-deprecated/` or discard?**

---

## docs.json Update

Every file moved needs its path updated in docs.json. Pattern:
- `v2/gateways/resources/faq` → `v2/gateways/resources/reference/faq`
- `v2/gateways/resources/knowledge-base/guides` → `v2/gateways/resources/knowledge-hub/guides`
- `v2/orchestrators/resources/faq` → `v2/orchestrators/resources/reference/faq`
- `v2/orchestrators/resources/community-guides` → `v2/orchestrators/resources/knowledge-hub/community-guides`
- etc. (apply the same pattern to every path in the Resources groups above)

The nav group structure in docs.json should also be updated to reflect the new organisation — `reference/` sub-group and `knowledge-hub/` sub-group. Suggested new structure:

```json
{
  "group": "Resources",
  "pages": [
    { "group": "Reference", "pages": [
        "v2/gateways/resources/reference/faq",
        "v2/gateways/resources/reference/glossary",
        "v2/gateways/resources/reference/compendium/glossary",
        { "group": "Technical Reference", "pages": [ ...technical pages with updated paths... ] },
        { "group": "go-livepeer Reference", "pages": [ ...go-livepeer pages with updated paths... ] }
    ]},
    { "group": "Knowledge Hub", "pages": [
        "v2/gateways/resources/knowledge-hub/guides",
        "v2/gateways/resources/knowledge-hub/resources",
        "v2/gateways/resources/knowledge-hub/help"
    ]}
  ]
}
```

---

## Confirmation Required Before Executing

Before running any moves, confirm with human:
1. **Gateways**: Delete `resources/technical/go-livepeer/` (un-navigated duplicate of `resources/go-livepeer/`)? Y/N
2. **Gateways**: Retain `knowledge-base/resources-master-list.mdx` in knowledge-hub? Y/N
3. **Orchestrators**: `x-changelog.mdx`, `x-support-status.mdx`, `x-troubleshooting.mdx` (not navigated) → `x-deprecated/` or delete?
4. **Orchestrators**: `x-guides.mdx`, `x-help.mdx`, `x-payments.mdx` (not navigated) → `x-deprecated/` or delete?

---

## Prompt for Receiving Agent

```
You are restructuring the `resources/` section in two tabs of the Livepeer docs repo
(branch: docs-v2-dev, working directory: /Users/alisonhaire/Documents/Livepeer/Docs-v2-dev).

Read this file first for full context and file inventory:
  workspace/plan/active/CONTENT-WRITING/handoff-resources-restructure.md

The task is structural — no content changes. You are:
1. Creating `resources/reference/` and `resources/knowledge-hub/` sub-sections in:
   - v2/gateways/resources/
   - v2/orchestrators/resources/
2. Moving files per the tables in the handoff brief
3. Updating all paths in docs.json (Resources groups for both Gateways and Orchestrators tabs)
4. Handling non-navigated/deprecated files per the edge cases section
5. Verifying mintlify dev renders clean after changes

Before starting: ask the human to confirm the 4 items listed in "Confirmation Required Before Executing".

Policy reference: docs-guide/policies/v2-folder-governance.mdx
Type vocabulary: v2/_workspace/references/content-pipeline/01-page-type-definitions.md
```
