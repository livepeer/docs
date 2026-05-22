# Recommended IA Per Tab — What Should Move Where

> Generated from actual disk structure as of 2026-04-05
> Tabs marked ✅ DONE are already aligned or recently restructured
> Tabs marked 🔧 NEEDS WORK have specific move recommendations

---

## Canonical Section Vocabulary (reference)

```
portal.mdx          — navigation (tab entry)
navigator.mdx       — navigation (routing)
concepts/           — concept (orientation + architecture)
quickstart/         — instruction (fastest path to first success)
setup/              — instruction (full install + configure)
guides/             — guide (practical understanding, operational)
  └── tutorials/    — tutorial (inside guides, not resources)
resources/          — container section:
  ├── (root)        — glossary.mdx, faq.mdx (most-accessed lookups)
  ├── knowledge-hub/— guides, other resources, troubleshooting
  ├── compendium/   — developer reference: exchanges, RPCs, CLI
  └── reference/    — technical reference: APIs, strictly technical
```

Positions 1-3 LINEAR. Positions 4-6 ON-DEMAND.

---

## ABOUT ✅ DONE (recently restructured)

```
v2/about/
├── portal.mdx                    ✅
├── navigator.mdx                 ✅
├── index.mdx                     ✅
├── concepts/                     ✅
│   ├── core-concepts.mdx
│   ├── livepeer-overview.mdx
│   └── mental-model.mdx
├── protocol/                     ✅ (custom — replaces setup/guides for non-task tab)
│   ├── overview.mdx
│   ├── core-mechanisms.mdx
│   ├── design-philosophy.mdx
│   ├── economics.mdx
│   ├── governance-model.mdx
│   ├── livepeer-token.mdx
│   ├── technical-architecture.mdx
│   ├── treasury.mdx
│   └── blockchain-contracts.mdx
├── network/                      ✅ (custom)
│   ├── overview.mdx
│   ├── actors.mdx
│   ├── livepeer-actors/ (delegators, end-users, gateways, orchestrators)
│   ├── demand-side.mdx
│   ├── supply-side.mdx
│   ├── fee-flow.mdx
│   ├── interfaces.mdx
│   ├── job-lifecycle.mdx
│   ├── marketplace.mdx
│   ├── scaling.mdx
│   └── technical-architecture.mdx
└── resources/                    ✅
    ├── faq.mdx                   ✅ root
    ├── glossary.mdx              ✅ root
    ├── livepeer-glossary.mdx     ⚠️ duplicate? resolve with glossary.mdx
    ├── knowledge-hub/            ✅
    │   ├── contributor-orientation.mdx
    │   ├── evaluating-livepeer.mdx
    │   ├── gateways-vs-orchestrators.mdx
    │   └── livepeer-whitepaper.mdx
    └── reference/                ✅
        ├── livepeer-contract-addresses.mdx
        ├── network-metrics.mdx
        └── technical-roadmap.mdx
```

**Status**: Aligned. Only issue: `livepeer-glossary.mdx` may duplicate `glossary.mdx` — resolve.
**Note**: `livepeer-network/dep-actors.mdx` exists at old path — confirm deprecated/redirect.

---

## ORCHESTRATORS ✅ MOSTLY DONE

```
v2/orchestrators/
├── portal.mdx                    ✅
├── navigator.mdx                 ✅
├── index.mdx                     ✅
├── concepts/                     ✅ (architecture, capabilities, incentive-model, role + composable/)
├── quickstart/                   ✅ (AI-prompt-start, guide, tutorial, video-transcoding + dep-x-setup-paths)
├── setup/                        ✅ (configure, connect-and-activate, guide, rs-install, rcs-requirements, test, etc.)
├── guides/                       ✅ (10 subgroups — most complete in site)
│   ├── advanced-operations/
│   ├── ai-and-job-workloads/
│   ├── config-and-optimisation/
│   ├── deployment-details/
│   ├── monitoring-and-tooling/
│   ├── operator-considerations/
│   ├── payments-and-pricing/
│   ├── roadmap-and-funding/
│   ├── staking-and-rewards/
│   └── tutorials/
└── resources/                    ✅ structure exists
    ├── knowledge-hub/            ✅ (community-guides, community-pools)
    └── reference/                ✅
        ├── faq.mdx               ⚠️ MOVE to resources/ root
        ├── glossary.mdx          ⚠️ MOVE to resources/ root
        ├── compendium/glossary.mdx ✅
        ├── arbitrum-exchanges.mdx ⚠️ MOVE to resources/compendium/
        ├── arbitrum-rpc.mdx      ⚠️ MOVE to resources/compendium/
        ├── gpu-support.mdx       keep in reference/
        └── technical/            ✅ (cli-flags, contract-addresses, etc.)
    ├── x-guides.mdx              ⚠️ deprecated — confirm removal
    ├── x-help.mdx                ⚠️ deprecated — confirm removal
    └── x-payments.mdx            ⚠️ deprecated — confirm removal
```

**Moves needed**:
| File | Current | Move to | Reason |
|---|---|---|---|
| `resources/reference/faq.mdx` | reference/ | `resources/faq.mdx` (root) | FAQ is most-accessed lookup — belongs at root |
| `resources/reference/glossary.mdx` | reference/ | `resources/glossary.mdx` (root) | Glossary is most-accessed lookup — belongs at root |
| `resources/reference/arbitrum-exchanges.mdx` | reference/ | `resources/compendium/` | Developer reference (exchanges) not technical spec |
| `resources/reference/arbitrum-rpc.mdx` | reference/ | `resources/compendium/` | Developer reference (RPCs) not technical spec |
| `resources/x-*.mdx` (3 files) | resources/ root | confirm deprecation or remove | x- prefix = deprecated |

---

## GATEWAYS 🔧 NEEDS MINOR WORK

Structure is canonical but resources/ needs the 4-part split applied more clearly.

**Moves needed**:
| File | Current | Move to | Reason |
|---|---|---|---|
| `resources/reference/faq.mdx` | reference/ | `resources/faq.mdx` (root) | Most-accessed lookup |
| `resources/reference/glossary.mdx` | reference/ | `resources/glossary.mdx` (root) | Most-accessed lookup |
| `resources/reference/arbitrum-exchanges.mdx` | reference/technical/ | `resources/compendium/` | Not strictly technical |
| `resources/reference/arbitrum-rpc.mdx` | reference/technical/ | `resources/compendium/` | Not strictly technical |
| `resources/reference/livepeer-exchanges.mdx` | reference/technical/ | `resources/compendium/` | Not strictly technical |
| `resources/reference/orchestrator-offerings.mdx` | reference/technical/ | `resources/compendium/` | Not strictly technical |
| `resources/reference/cli-commands.mdx` | reference/ flat | `resources/compendium/` | Developer ref (CLI) |
| `resources/reference/configuration-flags.mdx` | reference/ flat | `resources/reference/technical/` | Strictly technical |
| `resources/reference/contract-addresses.mdx` | reference/technical/ | keep | Correctly placed |
| `resources/reference/technical/api-reference/` | reference/technical/ | keep | Correctly placed — this is the right home for API ref |
| `resources/reference/go-livepeer/` | reference/ | `resources/reference/technical/go-livepeer/` | Should be under technical/ |
| `resources/technical-architecture.mdx` | resources/ root | `resources/reference/technical/` | Strictly technical |

**Note**: Gateways has duplicate go-livepeer/ at two levels within reference/ — needs consolidation.

---

## DEVELOPERS 🔧 NEEDS SIGNIFICANT WORK

Most misaligned tab. Missing canonical `setup/` section. Has non-canonical `technical-references/` that duplicates `resources/`.

```
CURRENT → RECOMMENDED

v2/developers/
├── portal.mdx                    ✅ keep
├── index.mdx                     ✅ keep
├── developer-journey.mdx         ✅ keep (unique — functions as navigator)
├── concepts/                     ✅ keep as-is
├── get-started/                  ⚠️ RENAME to quickstart/ (canonical name)
│   ├── setup-paths.mdx           → quickstart/setup-paths.mdx
│   ├── ai-quickstart.mdx         → quickstart/ai-quickstart.mdx
│   ├── transcoding-quickstart.mdx → quickstart/transcoding-quickstart.mdx
│   ├── comfystream-quickstart.mdx → quickstart/comfystream-quickstart.mdx
│   ├── contributor-quickstart.mdx → quickstart/contributor-quickstart.mdx
│   └── video-quickstart.mdx      → quickstart/video-quickstart.mdx (or remove — resolve with transcoding-qs)
├── build/                        ⚠️ RENAME to setup/ (canonical name — these are setup/config, not guides)
│   ├── workload-fit.mdx          → setup/workload-fit.mdx
│   ├── byoc.mdx                  → setup/byoc.mdx
│   ├── comfystream.mdx           → setup/comfystream.mdx
│   ├── model-support.mdx         → setup/model-support.mdx
│   └── sdk-gateway.mdx           → setup/sdk-gateway.mdx
├── developer-tools/              ⚠️ MOVE contents to resources/compendium/ or resources/knowledge-hub/
│   ├── dashboards.mdx            → resources/knowledge-hub/dashboards.mdx
│   ├── gateways.mdx              → resources/knowledge-hub/gateways.mdx
│   ├── livepeer-cloud.mdx        → resources/knowledge-hub/livepeer-cloud.mdx
│   ├── livepeer-explorer.mdx     → resources/knowledge-hub/livepeer-explorer.mdx
│   └── tooling-hub.mdx           → resources/knowledge-hub/tooling-hub.mdx
├── guides/                       ✅ keep — but reorganise contents
│   ├── developer-guides.mdx      keep (hub)
│   ├── developer-help.mdx        → resources/knowledge-hub/developer-help.mdx (support, not guide)
│   ├── contribution-guide.mdx    keep
│   ├── local-testnet-deployment.mdx keep
│   ├── resources.mdx             → resources/knowledge-hub/resources.mdx (curated links, not guide)
│   └── testnet-contract-deployment.mdx keep
├── opportunities/                ✅ keep as custom section
├── technical-references/         🔴 DELETE (duplicates resources/) — after confirming docs.json routing
│   ├── apis.mdx                  already in resources/
│   ├── sdks.mdx                  already in resources/
│   ├── awesome-livepeer.mdx      already in resources/
│   ├── deepwiki.mdx              already in resources/
│   └── wiki.mdx                  already in resources/
└── resources/                    🔧 RESTRUCTURE
    ├── glossary.mdx              ← NEW (create from compendium/glossary.mdx or promote)
    ├── faq.mdx                   ← NEW (create — currently missing)
    ├── compendium/
    │   └── glossary.mdx          keep (data-driven version)
    ├── knowledge-hub/            ← NEW folder
    │   ├── awesome-livepeer.mdx  ← MOVE from resources/ root
    │   ├── deepwiki.mdx          ← MOVE from resources/ root
    │   ├── example-applications.mdx ← MOVE from resources/ root
    │   └── wiki.mdx              ← MOVE from resources/ root
    └── reference/                ← NEW folder
        ├── apis.mdx              ← MOVE from resources/ root
        └── sdks.mdx              ← MOVE from resources/ root
```

**Summary of Developers moves**:
| Action | Count | Files |
|---|---|---|
| RENAME get-started/ → quickstart/ | 6 files | All get-started/*.mdx |
| RENAME build/ → setup/ | 5 files | All build/*.mdx |
| MOVE developer-tools/ → resources/knowledge-hub/ | 5 files | dashboards, gateways, livepeer-cloud, livepeer-explorer, tooling-hub |
| MOVE guides support content → resources/knowledge-hub/ | 2 files | developer-help, resources |
| MOVE resources/ flat → sub-folders | 6 files | awesome-livepeer, deepwiki, example-applications, wiki → knowledge-hub/; apis, sdks → reference/ |
| DELETE technical-references/ | 5 files | Duplicates of resources/ |
| CREATE resources/faq.mdx | 1 file | Missing — needs creation |

---

## DELEGATORS 🔧 NEEDS SIGNIFICANT WORK

Missing portal, navigator, quickstart, setup, guides. Has custom sections (about/, delegation/, governance/, treasury/) which are content-appropriate but don't follow canonical naming.

```
CURRENT → RECOMMENDED

v2/delegators/
├── token-portal.mdx              ⚠️ RENAME to portal.mdx (canonical name)
├── index.mdx                     ✅ keep
├── navigator.mdx                 ← NEW (create — disambiguation: yield vs governance vs L1-stranded)
├── about/                        ⚠️ RENAME to concepts/ (canonical name)
│   ├── overview.mdx              → concepts/overview.mdx
│   ├── mechanics.mdx             → concepts/mechanics.mdx
│   ├── purpose.mdx               → concepts/purpose.mdx
│   └── tokenomics.mdx            → concepts/tokenomics.mdx
├── delegation/                   ✅ keep as-is (custom section — equivalent to setup/ + guides/ combined)
│   ├── getting-started.mdx       functions as quickstart
│   ├── bridge-lpt-to-arbitrum.mdx
│   ├── delegation-economics.mdx  🔴 STUB — highest priority write
│   ├── delegation-guide.mdx
│   ├── overview.mdx
│   ├── about-delegators.mdx
│   └── TO-ADD/                   ⚠️ PROMOTE all 4 files out of TO-ADD/ into delegation/
│       ├── choose-a-delegate.mdx → delegation/choose-a-delegate.mdx
│       ├── delegation-management.mdx → delegation/delegation-management.mdx
│       ├── delegation-rewards.mdx → delegation/delegation-rewards.mdx
│       └── overview.mdx          → delegation/overview-new.mdx (resolve with existing overview)
├── governance/                   ✅ keep (overview, model, processes)
├── treasury/                     ✅ keep (overview, allocations, proposals)
└── resources/                    🔧 RESTRUCTURE
    ├── glossary.mdx              ← NEW (promote from compendium/)
    ├── faq.mdx                   ← NEW (create — currently missing)
    ├── compendium/
    │   └── glossary.mdx          keep
    ├── knowledge-hub/            ← NEW
    │   ├── delegator-videos-and-blogs.mdx ← MOVE from resources/ root
    │   └── lpt-eth-usage.mdx     ← MOVE from resources/ root
    └── compendium/               (consolidate)
        └── exchanges.mdx         ← MOVE from resources/ root
```

**Summary of Delegators moves**:
| Action | Count |
|---|---|
| RENAME token-portal.mdx → portal.mdx | 1 |
| CREATE navigator.mdx | 1 |
| RENAME about/ → concepts/ | 4 files |
| PROMOTE TO-ADD/ files → delegation/ | 4 files |
| RESTRUCTURE resources/ into 4-part | 3 moves + 2 creates |
| CREATE delegation/undelegation.mdx | 1 (missing — critical) |
| WRITE delegation-economics.mdx | 1 (stub — critical) |

---

## COMMUNITY ✅ MOSTLY DONE (custom IA — correct)

Community uses a lighter custom IA that fits its purpose. No canonical rename needed.

```
v2/community/
├── portal.mdx          ⚠️ consider rename to portal.mdx for consistency
├── index.mdx                     ✅
├── faq.mdx                       ✅
├── community/           ✅ (guidelines, governance, topics, roadmap)
├── connect/             ✅ (events, forums, news)
├── contribute/          ✅ (build, contribute, opportunities)
└── resources/                    🔧 RESTRUCTURE
    ├── glossary.mdx              ← NEW (promote from compendium/)
    ├── compendium/glossary.mdx   keep
    ├── knowledge-hub/            ← NEW
    │   ├── awesome-livepeer.mdx  ← MOVE from resources/ root
    │   ├── dashboards.mdx        ← MOVE from resources/ root
    │   └── guides.mdx            ← MOVE from resources/ root
```

**Roadmap duplication**: `community/roadmap.mdx` duplicates `v2/home/about/roadmap.mdx`. One canonical location needed — recommend Home owns it, Community redirects.

---

## HOME ✅ DONE (custom IA — locked)

Custom routing/orientation tab. No canonical section vocabulary applies.

```
v2/home/
├── index.mdx                     ✅
├── mission-control.mdx           ✅ (9-card routing hub)
├── primer.mdx                    ✅ (10-min overview)
├── get-started.mdx               ✅ (persona routing with cards)
├── trending.mdx                  ⚠️ stale risk
├── about/               ✅ (vision, evolution, ecosystem, benefits, roadmap)
├── get-started/                  🔴 4 STUBS ("Coming Soon")
├── solutions/                    ✅ (applications, landscape, showcase, verticals)
└── resources/compendium/         ✅ (glossary)
```

No moves needed. Content gaps only (stubs, roadmap, trending stale risk).

---

## SOLUTIONS ✅ DONE (custom IA — product-focused)

Per-product structure with Studio docs as anchor. No canonical section vocabulary applies.

```
v2/solutions/
├── portal.mdx                    ✅
├── index.mdx                     ✅
├── solution-providers.mdx        ✅
├── daydream/                     ✅ (overview, community, changelog)
├── embody/                       ✅ (overview, community, changelog)
├── frameworks/                   ✅ (overview, community, changelog)
├── streamplace/                  ✅ (overview, community, introduction/)
├── livepeer-studio/              ✅ (overview, community, changelog, docs/ — full Studio anchor)
└── resources/compendium/         ✅ (glossary)
```

No moves needed.

---

## RESOURCES (Resource Hub) ✅ MOSTLY DONE (unique structure)

Unique cross-cutting tab. Does not follow standard section vocabulary.

```
v2/resources/
├── portal.mdx                    ✅
├── resources-portal.mdx          ⚠️ duplicate of portal.mdx? resolve
├── index.mdx                     ✅
├── help-center.mdx               ✅
├── livepeer-glossary.mdx         ✅
├── changelog/                    ✅ (protocol/, ai-compute/, tooling/, apis-sdks/, ecosystem/)
├── compendium/                   ✅ (glossary, media-kit)
├── concepts/                     ✅ (brief-history-of-video, livepeer-101)
├── documentation-guide/          ✅ (ai-automations/, component-library/, contributing/, copy-style/, features/, tooling/)
├── references/                   ✅ (contract-addresses)
├── lpt/                          ⚠️ orphan? delegator-dashboard.mdx — should this be in Delegators tab?
└── resources/videos.mdx          ⚠️ nested resources/resources/ — likely structural error
```

**Moves needed**:
| File | Issue | Recommendation |
|---|---|---|
| `resources-portal.mdx` | Duplicate of portal.mdx | Remove one — keep portal.mdx |
| `lpt/delegator-dashboard.mdx` | Orphaned in wrong tab | Move to v2/delegators/resources/knowledge-hub/ or confirm intentional |
| `resources/videos.mdx` | Nested resources/resources/ | Move to root or knowledge-hub/ |

---

## PRIORITY ORDER FOR MOVES

| Priority | Tab | Effort | Impact |
|---|---|---|---|
| 1 | **Developers** | HIGH (20+ moves) | Highest misalignment — blocks canonical consistency |
| 2 | **Delegators** | MEDIUM (15+ moves) | Missing portal/navigator, TO-ADD promotion, resources restructure |
| 3 | **Orchestrators** | LOW (8 moves) | Just resources/ reorganisation |
| 4 | **Gateways** | LOW (10 moves) | Just resources/ reorganisation + dedup |
| 5 | **Community** | LOW (5 moves) | Just resources/ restructure + portal rename |
| 6 | **Resources Hub** | LOW (3 moves) | Dedup + orphan resolution |
| — | About, Home, Solutions | NONE | Already aligned |
