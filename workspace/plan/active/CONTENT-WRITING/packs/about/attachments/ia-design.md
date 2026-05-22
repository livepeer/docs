# About tab: full IA design (corrected resources)

Produced from: complete branch inventory (`docs-v2-dev`), actual page reads, persona research (v3), Orchestrators resources structure (live reference implementation).
Date: April 2026

---

## Canonical resources structure (applied to About)

Your canonical layout:

```
/resources
├── (root)           glossary, FAQ                          pageType: reference
├── /knowledge-hub   guides, community resources,           pageType: resource / knowledge-hub
│                    troubleshooting
├── /compendium      developer reference                     pageType: reference / compendium
│                    (exchanges, RPCs, CLIs)
└── /reference       strictly technical reference            pageType: reference / specification
                     (APIs, contract specs)
```

**How this maps to About's existing files:**

| Existing file | Correct location | Reason |
|---|---|---|
| `resources/compendium/glossary.mdx` (51KB) | `resources/reference/` | Glossary is structured lookup — `reference` per canonical spec |
| `resources/compendium/livepeer-glossary.mdx` (12.5KB) | `resources/reference/` | Same — resolve which is canonical vs redirect |
| `resources/compendium/glossary-data.json` | `resources/reference/` | Data file for rendered glossary — stays with its page |
| `resources/livepeer-contract-addresses.mdx` | `resources/reference/` | Technical reference — contract addresses are strictly technical |
| `resources/livepeer-contract-addresses-data.json` | `resources/reference/` | Data file — stays with its page |
| `resources/livepeer-whitepaper.mdx` | `resources/knowledge-hub/` | Curated external/public content — knowledge-hub per canonical spec |
| `resources/technical-roadmap.mdx` | `resources/reference/` | Reference document — structured lookup for analysts |
| `resources/blockchain-contracts.mdx` | **Remove from nav** | Duplicate of `livepeer-protocol/blockchain-contracts.mdx` |
| `resources/gateways-vs-orchestrators.mdx` | `resources/knowledge-hub/` | Curated orientation guide — knowledge-hub |
| `resources/network-metrics.mdx` (NEW) | `resources/reference/` | Structured reference: analytics sources, metrics definitions |
| `faq-about.mdx` (once rebuilt) | `resources/` root | FAQ lives at resources root per canonical |
| `guides/evaluating-livepeer` (NEW) | `resources/knowledge-hub/` | Understanding guide — curated reading path |
| `guides/contributor-orientation` (NEW) | `resources/knowledge-hub/` | Understanding guide — curated reading path |

**Wait — Guides vs Knowledge-Hub distinction for About:**

For task-oriented tabs (Orchestrators, Gateways), `guides/` is a top-level canonical section for operational how-tos. About has no "doing" guides. The orientation guides for OSS contributors and product evaluators are closer in nature to curated reading paths — which maps to `knowledge-hub`. So About's guides collapse INTO `resources/knowledge-hub/` rather than being a separate top-level section.

This also removes the `Guides` group from the docs.json (which was not in your proposed structure anyway — it was something I added and you didn't ask for). Removing it keeps the structure clean.

---

## Corrected About tab file structure

```
v2/about/
├── portal.mdx                                    ✅ exists — fix card hrefs + AI copy
├── navigator.mdx                                 ❌ NEW — P0
│
├── livepeer-overview.mdx                         ✅ → Core Concepts group
├── mental-model.mdx                              ✅ → Core Concepts group
├── core-concepts.mdx                             ⚠️ → Core Concepts group (decide: index or video-vs-AI page)
│
├── livepeer-protocol/
│   ├── overview.mdx                              ✅ → Livepeer Protocol group
│   ├── core-mechanisms.mdx                       ✅ → Livepeer Protocol group
│   ├── livepeer-token.mdx                        ⚠️ → Livepeer Protocol group (fix TODO markers)
│   ├── economics.mdx                             ✅ → Livepeer Protocol group
│   ├── governance-model.mdx                      ✅ → Livepeer Protocol group (trim participation content)
│   ├── treasury.mdx                              ✅ → Livepeer Protocol group
│   ├── technical-architecture.mdx                ⚠️ → Livepeer Protocol group
│   ├── blockchain-contracts.mdx                  ✅ → Livepeer Protocol group (remove resources/ duplicate)
│   └── design-philosophy.mdx                     ❌ NEW → Livepeer Protocol group
│
├── livepeer-network/
│   ├── overview.mdx                              🔴 → Livepeer Network group (REWRITE)
│   ├── actors.mdx                                ✅ → Livepeer Network group
│   ├── technical-architecture.mdx                ✅ → Livepeer Network group
│   ├── marketplace.mdx                           ✅ → Livepeer Network group
│   ├── job-lifecycle.mdx                         ✅ → Livepeer Network group
│   ├── interfaces.mdx                            ✅ → Livepeer Network group
│   └── fee-flow.mdx                              🔴 → Livepeer Network group (REWRITE STUB)
│
└── resources/
    ├── faq-about.mdx (rebuilt)                   ❌ NEW → resources root
    │
    ├── knowledge-hub/
    │   ├── livepeer-whitepaper.mdx               MOVE from resources/ root
    │   ├── gateways-vs-orchestrators.mdx         MOVE from resources/ root
    │   ├── evaluating-livepeer.mdx               ❌ NEW — product evaluator orientation guide
    │   └── contributor-orientation.mdx           ❌ NEW — OSS contributor orientation guide
    │
    ├── compendium/
    │   └── (currently empty for About — populate as developer reference grows)
    │
    └── reference/
        ├── livepeer-contract-addresses.mdx       MOVE from resources/ root
        ├── livepeer-contract-addresses-data.json MOVE from resources/ root
        ├── livepeer-glossary.mdx                 MOVE from resources/compendium/
        ├── glossary.mdx                          MOVE from resources/compendium/
        ├── glossary-data.json                    MOVE from resources/compendium/
        ├── technical-roadmap.mdx                 MOVE from resources/ root (develop stub)
        └── network-metrics.mdx                   ❌ NEW
```

**Files removed from nav (not deleted, moved to `_workspace/`):**
- `resources/blockchain-contracts.mdx` — duplicate; `livepeer-protocol/blockchain-contracts.mdx` is canonical
- `resources/compendium/` directory structure as-is — contents relocated to `reference/`
- `faq-about.mdx` (current version — IA blueprint, not reader content) → `_workspace/`
- `concepts/actors.mdx` — duplicate of `livepeer-network/actors.mdx`

---

## Full corrected docs.json

Every path verified against actual branch inventory. New pages annotated.

```json
{
  "tab": "About",
  "icon": "camera-movie",
  "groups": [
    {
      "group": "About Livepeer",
      "icon": "graduation-cap",
      "pages": [
        "v2/about/portal",
        "v2/about/navigator"
      ]
    },
    {
      "group": "Core Concepts",
      "icon": "play",
      "pages": [
        "v2/about/livepeer-overview",
        "v2/about/mental-model",
        "v2/about/core-concepts"
      ]
    },
    {
      "group": "Livepeer Protocol",
      "icon": "cube",
      "pages": [
        "v2/about/livepeer-protocol/overview",
        "v2/about/livepeer-protocol/core-mechanisms",
        "v2/about/livepeer-protocol/livepeer-token",
        "v2/about/livepeer-protocol/economics",
        "v2/about/livepeer-protocol/governance-model",
        "v2/about/livepeer-protocol/treasury",
        "v2/about/livepeer-protocol/technical-architecture",
        "v2/about/livepeer-protocol/blockchain-contracts",
        "v2/about/livepeer-protocol/design-philosophy"
      ]
    },
    {
      "group": "Livepeer Network",
      "icon": "circle-nodes",
      "pages": [
        "v2/about/livepeer-network/overview",
        "v2/about/livepeer-network/actors",
        "v2/about/livepeer-network/technical-architecture",
        "v2/about/livepeer-network/marketplace",
        "v2/about/livepeer-network/job-lifecycle",
        "v2/about/livepeer-network/interfaces",
        "v2/about/livepeer-network/fee-flow"
      ]
    },
    {
      "group": "Resources",
      "icon": "books",
      "pages": [
        "v2/about/resources/faq-about",
        {
          "group": "Knowledge Hub",
          "pages": [
            "v2/about/resources/knowledge-hub/livepeer-whitepaper",
            "v2/about/resources/knowledge-hub/gateways-vs-orchestrators",
            "v2/about/resources/knowledge-hub/evaluating-livepeer",
            "v2/about/resources/knowledge-hub/contributor-orientation"
          ]
        },
        {
          "group": "Reference",
          "pages": [
            "v2/about/resources/reference/network-metrics",
            "v2/about/resources/reference/technical-roadmap",
            "v2/about/resources/reference/livepeer-contract-addresses",
            "v2/about/resources/reference/livepeer-glossary",
            "v2/about/resources/reference/glossary"
          ]
        }
      ]
    }
  ]
}
```

---

## What needs to move on disk before docs.json is live

These are file system moves required — not content changes. Each is a `git mv` on the branch.

| From (current path) | To (new path) | Type |
|---|---|---|
| `v2/about/resources/livepeer-whitepaper.mdx` | `v2/about/resources/knowledge-hub/livepeer-whitepaper.mdx` | MOVE |
| `v2/about/resources/gateways-vs-orchestrators.mdx` | `v2/about/resources/knowledge-hub/gateways-vs-orchestrators.mdx` | MOVE |
| `v2/about/resources/livepeer-contract-addresses.mdx` | `v2/about/resources/reference/livepeer-contract-addresses.mdx` | MOVE |
| `v2/about/resources/livepeer-contract-addresses-data.json` | `v2/about/resources/reference/livepeer-contract-addresses-data.json` | MOVE |
| `v2/about/resources/compendium/livepeer-glossary.mdx` | `v2/about/resources/reference/livepeer-glossary.mdx` | MOVE |
| `v2/about/resources/compendium/glossary.mdx` | `v2/about/resources/reference/glossary.mdx` | MOVE |
| `v2/about/resources/compendium/glossary-data.json` | `v2/about/resources/reference/glossary-data.json` | MOVE |
| `v2/about/resources/technical-roadmap.mdx` | `v2/about/resources/reference/technical-roadmap.mdx` | MOVE |
| `v2/about/resources/blockchain-contracts.mdx` | `v2/about/_workspace/blockchain-contracts-duplicate.mdx` | ARCHIVE (duplicate) |
| `v2/about/faq-about.mdx` (current) | `v2/about/_workspace/faq-blueprint.md` | ARCHIVE (wrong content type) |
| `v2/about/concepts/actors.mdx` | `v2/about/_workspace/actors-duplicate.mdx` | ARCHIVE (duplicate) |

**New files to create:**
| Path | Priority | Notes |
|---|---|---|
| `v2/about/navigator.mdx` | P0 | Conditional routing page — 5-6 intent pathways |
| `v2/about/livepeer-network/fee-flow.mdx` | P0 | Narrative fee flow — rewrite stub |
| `v2/about/livepeer-protocol/design-philosophy.mdx` | P1 | Protocol design rationale |
| `v2/about/resources/faq-about.mdx` (rebuilt) | P1 | Reader-facing FAQ — rebuild from scratch |
| `v2/about/resources/knowledge-hub/evaluating-livepeer.mdx` | P1 | Product evaluator reading path |
| `v2/about/resources/knowledge-hub/contributor-orientation.mdx` | P1 | OSS contributor reading path |
| `v2/about/resources/reference/network-metrics.mdx` | P1 | Network analytics sources |
| `v2/about/resources/reference/technical-roadmap.mdx` | P1 | Develop stub |

---

## Resources section: what each sub-section owns

### Root (`/resources`)

**Owns:** Cross-persona FAQ — questions that any arriving reader type might have about Livepeer broadly. Not role-specific questions (those live in role tab FAQs). Examples: "What is the difference between the protocol and the network?", "What is LPT for?", "Is Livepeer live/production-ready?", "How is this different from Filecoin/Render/Akash?"

**Does NOT own:** Technical reference (→ `/reference`), curated reading paths (→ `/knowledge-hub`), developer compendium data (→ `/compendium`)

### Knowledge Hub (`/resources/knowledge-hub`)

**Owns:** Curated external and public content. Reading paths. Orientation guides that are not procedures. Community and ecosystem links. For About specifically: the whitepaper (external/historical document), the gateways-vs-orchestrators comparison (orientation guide), and the two new reading path guides (evaluating-livepeer, contributor-orientation).

**Does NOT own:** Structured technical lookup (→ `/reference`), FAQ (→ root)

### Compendium (`/resources/compendium`)

**Owns:** Developer-specific reference data that doesn't fit `/reference` strictly. For Orchestrators: exchanges, RPCs. For About at current state: **empty** — About doesn't have orchestrator-specific developer reference data. Populate as the tab grows (e.g., if a Livepeer analytics API or indexer reference is added).

**Does NOT own:** Glossary (→ `/reference`), whitepaper (→ `/knowledge-hub`)

### Reference (`/resources/reference`)

**Owns:** Structured technical lookup. Strictly technical — the reader is looking something up, not reading to understand. For About: contract addresses, glossary (both versions), roadmap as a structured reference document, network metrics as a structured analytics-source reference.

**Does NOT own:** Conceptual explanations (→ Protocol/Network sections), reading path guides (→ `/knowledge-hub`), FAQ (→ root)

---

## Journey map through the corrected IA

### Protocol Understander (primary)
```
portal → navigator → livepeer-overview → mental-model
→ livepeer-network/overview → job-lifecycle → marketplace → fee-flow
→ livepeer-protocol/overview → core-mechanisms → economics → governance-model
→ [routes to LP Token or Orchestrators]
on-demand: resources/reference/glossary, blockchain-contracts
```

### Diligence Analyst
```
portal → navigator ("I'm analysing Livepeer")
→ resources/knowledge-hub/evaluating-livepeer [reading path]
→ mental-model → livepeer-protocol/economics → governance-model → treasury
→ resources/reference/technical-roadmap → resources/reference/network-metrics
→ resources/knowledge-hub/livepeer-whitepaper
on-demand: resources/reference/livepeer-contract-addresses
```

### OSS / Protocol Contributor
```
portal → navigator ("I want to contribute to the protocol")
→ resources/knowledge-hub/contributor-orientation [reading path]
→ mental-model → livepeer-network/technical-architecture
→ livepeer-protocol/core-mechanisms → livepeer-protocol/economics
→ livepeer-protocol/design-philosophy (new)
→ livepeer-protocol/blockchain-contracts
→ [routes to Developers / OSS path]
```

### GPU Operator Candidate
```
portal → navigator ("I run GPU hardware")
→ livepeer-overview → livepeer-network/actors
→ livepeer-network/fee-flow → livepeer-protocol/economics
→ [routes to Orchestrators]
```

### Founder / Product Evaluator
```
portal → navigator ("I'm evaluating Livepeer for my product")
→ resources/knowledge-hub/evaluating-livepeer [reading path]
→ livepeer-overview → livepeer-network/marketplace → livepeer-network/interfaces
→ resources/reference/network-metrics
→ [routes to Solutions or Developers]
```

---

## Open decisions (unchanged from previous version)

1. **`core-concepts.mdx`** — index page, fold into overview, or convert to video-vs-AI page?
2. **`demand-side.mdx`, `supply-side.mdx`, `scaling.mdx`** — develop or fold into existing pages and drop from nav?
3. **Two glossary files** — which is the live rendered version (`glossary.mdx` using `glossary-data.json`) and which is the static fallback (`livepeer-glossary.mdx`)? Confirm before both appear in nav.
