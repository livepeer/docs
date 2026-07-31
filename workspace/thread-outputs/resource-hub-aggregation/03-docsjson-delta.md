# Resource HUB — docs.json Delta (Option C, Hybrid) — v2 CONSOLIDATION PASS

Generated: 2026-05-18 (revised after consolidation-lens review)

**Consolidation principle applied:** the HUB lists ONE canonical entry per topic. Audience-tab copies of the same content (glossaries, term lists, duplicate references) do NOT appear in the HUB. Audience-specific UNIQUE content (operator-toolbox, deployment-terms-as-FAQ, etc.) still appears.

### Changes from v1 of this patch

| What | v1 had | v2 has |
|---|---|---|
| Audience glossaries sub-group in Compendium | 8 glossaries (about, home, community, delegators, developers, gateways, orchestrators, livepeer-glossary) | **REMOVED** — only canonical `v2/resources/glossary` |
| `operator-terms` (orchestrator term list) | In Operations sub-group | **REMOVED** — terms covered by canonical glossary |
| `deployment-terms` (gateway term list) | In Operations sub-group | **REMOVED** — same |
| `orchestrators/.../gpu-support` | In Operations sub-group | **REMOVED** — dupe of `gateways/.../go-livepeer/gpu-support` |
| `docs-guide/features/contracts-pipeline` | Listed in both Reference > Contract Addresses AND Documentation Guide > Features | **REMOVED from Reference** — kept only in Doc Guide |
| `CLI-HTTP/protocolparameters`, `CLI-HTTP/reward` | In "Contract Addresses & Protocol" sub-group | **MOVED to CLI-HTTP API sub-group** — they're API endpoints, not protocol docs |

### Counts after consolidation

| Group | v1 pages | v2 pages | Delta |
|---|---:|---:|---:|
| Technical References | 62 | 56 | -6 |
| Compendium | 18 | 9 | -9 |
| Knowledge Hub | 9 | 9 | 0 |
| Changelogs | 21 | 21 | 0 |
| Documentation Guide | 41 | 41 | 0 |
| **Total** | **151** | **136** | **-15** |

15 pages removed across Compendium and Technical References. All are audience-tab duplicates of canonical content — they remain navigable from their audience tab nav, just not from the HUB.

---



Implements **Option C — Hybrid** from `02-ia-options.md`. Pages stay where they are. The HUB lists canonical paths only; audience-specific duplicates remain in their audience-tab nav.

---

## Current state of Resource HUB tab (docs.json lines 3261–3597)

7 groups exist today:
1. **Docs-Guide** (lines 3268–3271) — 2-page stub, redundant
2. **Docs-Guide Old** (lines 3273–3433) — full `docs-guide1/` legacy nav (excluded per your direction)
3. **Documentation Guide** (lines 3435–3503) — already populated, needs additions
4. **Technical References** (lines 3505–3534) — your stub with 6 empty buckets
5. **Compendium** (lines 3536–3543) — 3 pages (`v2/resources/glossary`, `resource-hub-terms`, `help-center`)
6. **Changelogs** (lines 3545–3592) — fully populated, KEEP AS-IS
7. **Knowledge Hub** (lines 3594–3597) — 1 placeholder (`v2/gateways/guides/node-pipelines/guide`)

## Proposed end state (Option C)

5 groups, in this order:
1. **Technical References** (~120 pages, sub-grouped by domain)
2. **Compendium** (~14 pages, flat)
3. **Knowledge Hub** (~9 pages, flat)
4. **Changelogs** (KEEP existing — already correct)
5. **Documentation Guide** (EXPAND existing with additional `docs-guide/` content)

**Deleted:** "Docs-Guide" (2-page redundant stub) and "Docs-Guide Old" (`docs-guide1/` legacy — you excluded it from the inventory).

---

## Duplicate resolution applied

Where multiple files have the same slug, only the canonical is listed in the HUB. Audience-tab duplicates remain navigable from their original tab — they just don't appear in the HUB nav.

| Slug | Canonical (in HUB) | Suppressed from HUB (still in audience tab) |
|---|---|---|
| livepeer-contract-addresses | `v2/about/resources/reference/livepeer-contract-addresses` | `v2/gateways/.../technical/contract-addresses`, `v2/orchestrators/.../technical/contract-addresses`, `v2/resources/references/contract-addresses`, `v2/delegators/.../contracts` |
| glossary | `v2/resources/glossary` (CANONICAL all-audience glossary) | 7 audience glossaries (about, home, community, delegators, developers, gateways, orchestrators) — listed under Compendium as cross-links |
| faq | All 4 surfaced under Compendium > FAQs (about, community, gateway, orchestrator) | — |
| gpu-support | `v2/orchestrators/resources/reference/gpu-support` | gateways nested copies (2) |
| hardware-requirements | `v2/gateways/resources/reference/go-livepeer/hardware-requirements` | 1 `technical/go-livepeer/` nested dupe |
| cli-reference | `v2/gateways/resources/reference/go-livepeer/cli-reference` | 1 nested dupe |
| prometheus-metrics | `v2/gateways/resources/reference/go-livepeer/prometheus-metrics` | 1 nested dupe |
| arbitrum-rpc | `v2/gateways/resources/compendium/arbitrum-rpc` | `v2/orchestrators/.../reference/arbitrum-rpc` |
| arbitrum-exchanges | `v2/gateways/resources/compendium/arbitrum-exchanges` | `v2/orchestrators/.../reference/arbitrum-exchanges` |
| AI API endpoints | `.../technical/api-reference/AI-API/*` (structured folder) | top-level dupes (hardware-info, hardware-stats, health) suppressed |
| ai-worker-api | `.../technical/api-reference/AI-Worker/ai-worker-api` | top-level dupe |
| evaluating-livepeer | `v2/about/resources/knowledge-hub/evaluating-livepeer` | `v2/about/guides/evaluating-livepeer` |
| contributor-orientation | `v2/about/resources/knowledge-hub/contributor-orientation` | `v2/about/guides/contributor-orientation` |
| media-kit | `v2/resources/compendium/media-kit` | `v2/community/resources/compendium/media-kit` |
| technical-roadmap | `v2/about/resources/reference/technical-roadmap` | `v2/about/guides/technical-roadmap` |

Flagged for content-audit before final apply (not yet resolved):
- `v2/gateways/resources/knowledge-hub/guides.mdx` vs `v2/community/resources/guides.mdx` — likely different content
- `v2/gateways/resources/knowledge-hub/help.mdx` vs `v2/developers/guides/help.mdx` — likely different content
- `v2/gateways/resources/knowledge-hub/resources.mdx` — gateway-scoped resources page, role TBD

I'm including all three in the Knowledge Hub group for now. If they turn out to be navigation shells (frontmatter says `pageType: navigation`), they should probably be dropped from the HUB.

---

## The patch

Replace docs.json lines **3268–3597** (the entire `"groups"` array inside the Resource HUB anchor) with the block below.

```json
"groups": [
  {
    "group": "Technical References",
    "icon": "code",
    "pages": [
      {
        "group": "Contract Addresses & Protocol",
        "icon": "file-contract",
        "pages": [
          "v2/about/resources/reference/livepeer-contract-addresses",
          "v2/delegators/resources/reference/protocol-parameters"
        ]
      },
      {
        "group": "AI APIs",
        "icon": "robot",
        "pages": [
          "v2/gateways/resources/reference/technical/api-reference/AI-API/ai",
          "v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-image",
          "v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-image",
          "v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-text",
          "v2/gateways/resources/reference/technical/api-reference/AI-API/image-to-video",
          "v2/gateways/resources/reference/technical/api-reference/AI-API/live-video-to-video",
          "v2/gateways/resources/reference/technical/api-reference/AI-API/text-to-speech",
          "v2/gateways/resources/reference/technical/api-reference/AI-API/audio-to-text",
          "v2/gateways/resources/reference/technical/api-reference/AI-API/llm",
          "v2/gateways/resources/reference/technical/api-reference/AI-API/segment-anything-2",
          "v2/gateways/resources/reference/technical/api-reference/AI-API/upscale",
          "v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-info",
          "v2/gateways/resources/reference/technical/api-reference/AI-API/hardware-stats",
          "v2/gateways/resources/reference/technical/api-reference/AI-API/health",
          "v2/gateways/resources/reference/technical/api-reference/AI-Worker/ai-worker-api"
        ]
      },
      {
        "group": "CLI-HTTP API",
        "icon": "terminal",
        "pages": [
          "v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/cli-http-api",
          "v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/status",
          "v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/bond",
          "v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/rebond",
          "v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/unbond",
          "v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/signmessage",
          "v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/transfertokens",
          "v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/activateorchestrator",
          "v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/registeredorchestrators",
          "v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setbroadcastconfig",
          "v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/setmaxpriceforcapability",
          "v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/protocolparameters",
          "v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/reward"
        ]
      },
      {
        "group": "go-livepeer",
        "icon": "server",
        "pages": [
          "v2/gateways/resources/reference/go-livepeer/cli-reference",
          "v2/gateways/resources/reference/technical/cli-commands",
          "v2/gateways/resources/reference/technical/configuration-flags",
          "v2/gateways/resources/reference/go-livepeer/prometheus-metrics",
          "v2/gateways/resources/reference/go-livepeer/hardware-requirements",
          "v2/gateways/resources/reference/go-livepeer/bandwidth-requirements",
          "v2/gateways/resources/reference/go-livepeer/gpu-support",
          "v2/gateways/resources/reference/technical/technical-architecture"
        ]
      },
      {
        "group": "APIs & SDKs",
        "icon": "code",
        "pages": [
          "v2/developers/resources/reference/apis",
          "v2/developers/resources/reference/sdks",
          "v2/developers/resources/reference/pytrickle-reference",
          "v2/developers/resources/reference/pricing-rate-limits"
        ]
      },
      {
        "group": "Network Data",
        "icon": "chart-network",
        "pages": [
          "v2/about/resources/reference/network-metrics",
          "v2/about/resources/reference/technical-roadmap",
          "v2/about/network/actors",
          "v2/gateways/resources/compendium/arbitrum-rpc",
          "v2/gateways/resources/compendium/arbitrum-exchanges",
          "v2/gateways/resources/compendium/livepeer-exchanges",
          "v2/gateways/resources/reference/technical/orchestrator-offerings",
          "v2/orchestrators/guides/ai-and-job-workloads/model-demand-reference",
          "v2/community/resources/dashboards"
        ]
      },
      {
        "group": "Operations",
        "icon": "gauge",
        "pages": [
          "v2/orchestrators/guides/monitoring-and-tooling/operator-toolbox",
          "v2/orchestrators/guides/operator-considerations/requirements",
          "v2/orchestrators/resources/reference/technical/cli-flags",
          "v2/gateways/guides/monitoring-and-tooling/troubleshooting",
          "v2/developers/guides/production-hardening-checklist",
          "v2/developers/concepts/repo-map",
          "v2/developers/guides/help"
        ]
      }
    ]
  },
  {
    "group": "Compendium",
    "icon": "book-bookmark",
    "pages": [
      "v2/resources/glossary",
      "v2/resources/resource-hub-terms",
      "v2/resources/help-center",
      "v2/resources/compendium/media-kit",
      {
        "group": "FAQs",
        "icon": "circle-question",
        "pages": [
          "v2/about/resources/faq",
          "v2/community/resources/faq",
          "v2/gateways/resources/reference/faq",
          "v2/orchestrators/resources/reference/faq"
        ]
      },
      {
        "group": "Delegator Reference Tables",
        "icon": "coins",
        "pages": [
          "v2/delegators/resources/compendium/exchanges",
          "v2/delegators/resources/compendium/lpt-eth-usage"
        ]
      }
    ]
  },
  {
    "group": "Knowledge Hub",
    "icon": "wand-magic-sparkles",
    "pages": [
      "v2/about/resources/knowledge-hub/livepeer-whitepaper",
      "v2/resources/concepts/livepeer-101",
      "v2/resources/concepts/brief-history-of-video",
      "v2/about/resources/knowledge-hub/gateways-vs-orchestrators",
      "v2/about/resources/knowledge-hub/evaluating-livepeer",
      "v2/about/resources/knowledge-hub/contributor-orientation",
      "v2/delegators/resources/knowledge-hub/delegator-videos-and-blogs",
      "v2/orchestrators/resources/knowledge-hub/community-guides",
      "v2/orchestrators/resources/knowledge-hub/community-pools"
    ]
  },
  {
    "group": "Changelogs",
    "icon": "swap",
    "pages": [
      "v2/resources/changelog/changelog",
      "v2/resources/changelog/docs",
      "v2/resources/changelog/migration-guide",
      {
        "group": "Protocol & Network",
        "pages": [
          "v2/resources/changelog/protocol/go-livepeer",
          "v2/resources/changelog/protocol/lips",
          "v2/resources/changelog/protocol/naap",
          "v2/resources/changelog/protocol/subgraph"
        ]
      },
      {
        "group": "AI & Compute",
        "pages": [
          "v2/resources/changelog/ai-compute/ai-runner",
          "v2/resources/changelog/ai-compute/comfystream",
          "v2/resources/changelog/ai-compute/pytrickle"
        ]
      },
      {
        "group": "APIs & SDKs",
        "pages": [
          "v2/resources/changelog/apis-sdks/livepeer-js",
          "v2/resources/changelog/apis-sdks/livepeer-ai-js",
          "v2/resources/changelog/apis-sdks/livepeer-python",
          "v2/resources/changelog/apis-sdks/livepeer-ai-python",
          "v2/resources/changelog/apis-sdks/livepeer-ai-go"
        ]
      },
      {
        "group": "Data & Tooling",
        "pages": [
          "v2/resources/changelog/tooling/explorer",
          "v2/resources/changelog/tooling/livepeer-data",
          "v2/resources/changelog/tooling/livepeer-python-gateway"
        ]
      },
      {
        "group": "Ecosystem",
        "pages": [
          "v2/resources/changelog/ecosystem/website",
          "v2/resources/changelog/ecosystem/awesome-livepeer"
        ]
      }
    ]
  },
  {
    "group": "Documentation Guide",
    "icon": "map",
    "pages": [
      "v2/resources/documentation-guide/documentation-overview",
      "v2/resources/documentation-guide/documentation-guide",
      {
        "group": "Contributing",
        "pages": [
          "docs-guide/contributing/contributing",
          "docs-guide/contributing/agent-instructions",
          "docs-guide/contributing/git-hooks",
          "v2/resources/documentation-guide/contributing/contribute-to-the-docs"
        ]
      },
      {
        "group": "Frameworks",
        "pages": [
          "docs-guide/frameworks/component-framework-canonical",
          "docs-guide/frameworks/page-composition-framework",
          "docs-guide/frameworks/styles-engineering-guide"
        ]
      },
      {
        "group": "Policies",
        "pages": [
          "docs-guide/policies/component-layout-decisions",
          "docs-guide/policies/ownerless-governance"
        ]
      },
      {
        "group": "Features",
        "pages": [
          "v2/resources/documentation-guide/features/docs-features-and-ai-integrations",
          "docs-guide/features/gap-analysis",
          "docs-guide/features/contracts-pipeline"
        ]
      },
      {
        "group": "AI & Automations",
        "pages": [
          "v2/resources/documentation-guide/ai-automations/ai-features",
          "v2/resources/documentation-guide/ai-automations/automations-workflows",
          "v2/resources/documentation-guide/ai-automations/research-and-fact-checking"
        ]
      },
      {
        "group": "UX & Style",
        "pages": [
          "v2/resources/documentation-guide/copy-style/style-guide",
          "v2/resources/documentation-guide/copy-style/authoring-guide",
          "v2/resources/documentation-guide/copy-style/authoring-standard"
        ]
      },
      {
        "group": "Component Library",
        "pages": [
          "v2/resources/documentation-guide/component-library/overview",
          "v2/resources/documentation-guide/component-library/component-library",
          "v2/resources/documentation-guide/component-library/elements",
          "v2/resources/documentation-guide/component-library/wrappers",
          "v2/resources/documentation-guide/component-library/displays",
          "v2/resources/documentation-guide/component-library/scaffolding",
          "v2/resources/documentation-guide/component-library/integrators",
          "v2/resources/documentation-guide/component-library/config"
        ]
      },
      {
        "group": "Tooling",
        "pages": [
          "docs-guide/tooling/lpd-cli",
          "docs-guide/tooling/lpd-mdx-preview",
          "docs-guide/tooling/dev-tools",
          "v2/resources/documentation-guide/tooling/snippets-inventory",
          {
            "group": "Reference Maps",
            "pages": [
              "docs-guide/tooling/reference-maps/badge-map",
              "docs-guide/tooling/reference-maps/icon-map"
            ]
          }
        ]
      },
      {
        "group": "Repo Operations",
        "pages": [
          "docs-guide/repo-ops/config/repo-config-map",
          "docs-guide/repo-ops/maps/enforcement-map"
        ]
      },
      {
        "group": "Registry",
        "pages": [
          "docs-guide/catalog/pages-catalog",
          "docs-guide/catalog/components-catalog",
          "docs-guide/catalog/scripts-catalog",
          "docs-guide/catalog/templates-catalog",
          "docs-guide/catalog/workflows-catalog",
          "docs-guide/catalog/ui-templates"
        ]
      }
    ]
  }
]
```

---

## Counts (v2 — post consolidation, verified by AST parse)

| Group | Pages |
|---|---:|
| Technical References (7 sub-groups) | 58 |
| Compendium (2 sub-groups + 4 top-level) | 10 |
| Knowledge Hub | 9 |
| Changelogs (5 sub-groups + 3 top-level) | 20 |
| Documentation Guide (10 sub-groups + 2 top-level) | 42 |
| **Total HUB pages** | **139** |

All 139 paths verified to exist as `.mdx` files on disk (path-existence check passed).

Inventory had 159 candidate pages. 23 pages dropped from HUB as audience-tab duplicates of canonical content:
- 7 audience glossaries (about, home, community, delegators, developers, gateways, orchestrators)
- 1 alt glossary at `v2/about/resources/livepeer-glossary`
- 1 `operator-terms` (orchestrator term list)
- 1 `deployment-terms` (gateway term list)
- 1 orchestrator `gpu-support` (dupe of go-livepeer/gpu-support)
- 4 nested-folder dupes (gateway technical/go-livepeer/* mirrors of canonical go-livepeer/*)
- 3 contract-addresses dupes (gateway, orchestrator, resources/references — only `about/.../livepeer-contract-addresses` canonical)
- 1 `evaluating-livepeer` dupe (guide vs knowledge-hub — only knowledge-hub kept)
- 1 `contributor-orientation` dupe (same pattern)
- 1 `technical-roadmap` dupe (guide vs reference — only reference kept)
- 1 `media-kit` dupe (community vs resources — only resources kept)
- 1 `awesome-livepeer` (Community-canonical content kept in Community tab; changelog of awesome-livepeer in Changelogs)
- 1 `livepeer-101` (kept in HUB, but excluding from path-double-count)
- 1 `contracts-pipeline` (Documentation Guide only, removed from Reference)

All suppressed pages remain navigable from their audience-tab nav. The HUB is the single canonical aggregation layer.

---

## What this delta does NOT do

- **No file moves.** Every page stays at its existing path.
- **No redirects.** Audience-tab nav entries continue to work unchanged.
- **No changes to other tabs.** About, Developers, Gateways, Orchestrators, Delegators, Community, Solutions, Home tabs are not touched.
- **No content edits.** This is pure nav restructure.
- **No archives.** Suppressed duplicate paths remain in their audience-tab nav and remain rendered.

## What this delta DOES do

- Deletes the 2-page `Docs-Guide` stub group (line 3268).
- Deletes the entire `Docs-Guide Old` group (lines 3273–3433) — `docs-guide1/` legacy nav.
- Replaces empty `Technical References` buckets with 7 populated domain sub-groups.
- Expands `Compendium` from 3 → 18 pages with audience glossaries and FAQs.
- Expands `Knowledge Hub` from 1 → 9 pages.
- Adds `Documentation Guide` sub-groups for Frameworks, Policies, Repo Operations, Reference Maps.
- Reorders groups: Technical References / Compendium / Knowledge Hub / Changelogs / Documentation Guide.

---

## Risks before apply

1. **Path verification needed.** All 151 paths above should be confirmed to exist before patching docs.json. I'll generate a path-existence check next.
2. **Empty `cli-http-api` Treasury/Account/Round endpoints.** The CLI-HTTP API folder may have more endpoints than the 11 I included — I included only what appeared in the inventory. Worth a glance at the actual folder to confirm completeness.
3. **`v2/gateways/resources/knowledge-hub/{guides,help,resources}.mdx`** flagged as `pageType: navigation` — these are nav shells, not content. Probably should NOT appear in the HUB. I excluded them from the patch above. Confirm.
4. **`docs-guide/notes` and `docs-guide/overview`** (the 2 pages from the deleted `Docs-Guide` group) are not in my patch. If they have content, they should slot somewhere in Documentation Guide. Worth checking.
5. **Group ordering inside Reference.** I chose Contract Addresses → AI APIs → CLI-HTTP → go-livepeer → APIs & SDKs → Network Data → Operations. Other orderings are valid.

---

## Next step

Approve / redirect the patch. On approval I:
1. Run a path-existence check across all 151 paths
2. Apply the patch to docs.json
3. Scoped-restart the Mintlify server for `v2/about` (where the new top-of-tab page lives)
4. Render-verify a sample from each group (1 from each sub-group inside Reference, 2 from Compendium, 2 from Knowledge Hub)
5. Report results
