# Resource HUB — 3 IA Options

Generated: 2026-05-18

Built from `01-inventory.md` (159 candidate pages after excluding v1/, v2/developers1/, v2/developers2/, v2/internal/, v2/solutions/, docs-guide1/, snippets/composables/pages/, snippets/templates/, and all `x-*` scratch/deprecated paths).

**Pages stay where they are.** The HUB is a canonical INDEX that re-lists pages in its nav. A page can appear in both its audience tab and the HUB. No moves, no redirects.

**Constraints** (from your direction):
- MUST include: docs-guide, changelogs, all APIs and SDKs
- MUST NOT include: solutions, Livepeer Studio (already filtered out of inventory)
- The three category primitives (`Reference`, `Compendium`, `Knowledge Hub`) come from the existing `pageType`/`pageVariant` frontmatter taxonomy

---

## Canonical-page picks for the duplicate clusters

Before any option works, you need to choose the canonical path for each duplicated slug. These picks apply to ALL three options below.

| Slug | Canonical pick | Why | Other paths (kept where they live, but HUB lists only the canonical) |
|---|---|---|---|
| glossary | `v2/resources/glossary.mdx` | Already the global resources-tab glossary | 7 audience-specific glossaries (about, home, community, delegators, developers, gateways, orchestrators) stay as audience entry points |
| livepeer-contract-addresses | `v2/about/resources/reference/livepeer-contract-addresses.mdx` | Your stub already points here; has companion `*-data.json` | gateways/orchestrators/resources/references duplicates |
| faq | `v2/about/resources/faq.mdx` (broad) **OR** keep 4 audience-faqs and surface all in HUB | Decision needed — see Option deltas | community, gateways, orchestrators have their own |
| gpu-support | `v2/orchestrators/resources/reference/gpu-support.mdx` | Orchestrator concern primarily; gateways duplicates are nested under technical/go-livepeer | 2 gateway nested copies |
| hardware-requirements | `v2/gateways/resources/reference/go-livepeer/hardware-requirements.mdx` | Top-level go-livepeer location is the canonical; `technical/go-livepeer/` is a nested duplicate | 1 nested dupe |
| cli-reference | `v2/gateways/resources/reference/go-livepeer/cli-reference.mdx` | Same — pick top-level | 1 nested dupe |
| prometheus-metrics | `v2/gateways/resources/reference/go-livepeer/prometheus-metrics.mdx` | Same — pick top-level | 1 nested dupe |
| arbitrum-rpc | `v2/gateways/resources/compendium/arbitrum-rpc.mdx` | Cross-cutting infra data; compendium-style table | orchestrators/reference dupe |
| arbitrum-exchanges | `v2/gateways/resources/compendium/arbitrum-exchanges.mdx` | Same | orchestrators/reference dupe |
| AI API endpoints (10 endpoints) | `v2/gateways/resources/reference/technical/api-reference/AI-API/*.mdx` | The AI-API/ folder is the structured canonical home | top-level dupes (hardware-info, hardware-stats, health, ai-worker-api) |
| evaluating-livepeer | `v2/about/resources/knowledge-hub/evaluating-livepeer.mdx` | Knowledge Hub is the correct semantic location | guide dupe |
| contributor-orientation | `v2/about/resources/knowledge-hub/contributor-orientation.mdx` | Same | guide dupe |
| media-kit | `v2/resources/compendium/media-kit.mdx` | Top-level compendium location | community dupe |
| technical-roadmap | `v2/about/resources/reference/technical-roadmap.mdx` | Reference-shaped (it's a roadmap table) not a guide | about/guides dupe |
| awesome-livepeer | `v2/community/resources/awesome-livepeer.mdx` | Community-curated list canonical here; the changelog is a separate page tracking ITS changes | changelog dupe is its own page (changelog of awesome-livepeer) — KEEP both |
| guides | `v2/community/resources/guides.mdx` | Community-maintained guide index | gateways/knowledge-hub/guides is something different — needs audit |
| help | `v2/developers/guides/help.mdx` | Developer-audience help page | gateways/knowledge-hub/help — likely different content, keep both |

Two pages flagged for content audit before final IA: `gateways/resources/knowledge-hub/guides.mdx` and `gateways/resources/knowledge-hub/help.mdx` — may or may not be duplicates depending on actual content.

---

## OPTION A — Category-first

The three IA primitives are top-level. Domain organisation is sub-group within Reference. Compendium and Knowledge Hub stay small and flat.

```
Resource HUB
├── Reference
│   ├── Contract Addresses & Protocol Data
│   ├── Protocol Parameters
│   ├── AI APIs (per-pipeline)
│   ├── CLI-HTTP API
│   ├── AI Worker API
│   ├── SDKs (JS, Python, Go, AI variants)
│   ├── go-livepeer (CLI, flags, Prometheus, hardware, GPU, bandwidth)
│   ├── Tooling (RPC, exchanges, network metrics)
│   └── FAQs & Troubleshooting
├── Compendium
│   ├── Livepeer Glossary
│   ├── Resource Hub Terms
│   ├── Media Kit
│   └── Audience-specific glossaries (cross-link only)
├── Knowledge Hub
│   ├── Livepeer Whitepaper
│   ├── Gateways vs Orchestrators
│   ├── Evaluating Livepeer
│   ├── Contributor Orientation
│   ├── Livepeer 101
│   └── Brief History of Video
├── Changelogs
│   ├── Protocol & Network (go-livepeer, LIPs, NaaP, Subgraph)
│   ├── AI & Compute (AI Runner, ComfyStream, pytrickle)
│   ├── APIs & SDKs (5 SDK changelogs)
│   ├── Data & Tooling (Explorer, livepeer-data, python-gateway)
│   └── Ecosystem (awesome-livepeer, website)
└── Documentation Guide
    ├── Frameworks (component, content-writing, script, taxonomy, etc.)
    ├── Standards (frontmatter, voice, authoring, naming)
    ├── Policies (governance-index, ownerless-governance, file-placement)
    ├── Tooling (lpd-cli, lpd-mdx-preview, dev-tools, reference-maps)
    └── Repo Operations (config maps, secrets, enforcement)
```

**Pros**
- Uses the existing frontmatter taxonomy as the spine. If a future page sets `pageType: reference`, it has a clear home.
- The three category primitives stay legible — Compendium isn't 200 pages with sub-groups; it's the actual encyclopedia content.
- Clean separation: look-up (Reference), encyclopedia (Compendium), orientation (Knowledge Hub).

**Cons**
- Reference is 135 pages. The sub-groups inside it carry most of the IA weight — they're doing domain work under a category label.
- A user thinking "I need the API spec for text-to-image" must mentally translate to "that's a Reference."
- The category labels (Reference, Compendium, Knowledge Hub) are docs-team vocabulary, not reader vocabulary.

---

## OPTION B — Domain-first

Subject-area groups are top-level. The three category primitives only appear where they cleanly map (e.g. Glossaries → Compendium, Whitepaper → Knowledge Hub). Reference becomes implicit — it's the rest.

```
Resource HUB
├── APIs & SDKs
│   ├── AI APIs (10 pipeline endpoints)
│   ├── CLI-HTTP API
│   ├── AI Worker API
│   ├── pytrickle
│   ├── SDKs (Livepeer JS, Python, AI Go, AI JS, AI Python)
│   ├── API Pricing & Rate Limits
│   └── Health & Hardware APIs (hardware-info, hardware-stats, health)
├── Protocol & Smart Contracts
│   ├── Canonical Contract Addresses
│   ├── Protocol Parameters
│   ├── Network Metrics
│   └── Technical Roadmap
├── Node Operations (go-livepeer)
│   ├── CLI Reference
│   ├── Configuration Flags
│   ├── Prometheus Metrics
│   ├── Hardware Requirements
│   ├── Bandwidth Requirements
│   ├── GPU Support
│   └── Technical Architecture
├── Network Data
│   ├── Arbitrum RPCs
│   ├── Arbitrum Exchanges
│   └── Orchestrator Offerings
├── Glossaries & Terms (= Compendium category)
│   ├── Livepeer Glossary (canonical)
│   ├── Resource Hub Terms
│   ├── Media Kit
│   └── Audience glossaries (cross-link)
├── Knowledge Hub
│   ├── Whitepaper
│   ├── Gateways vs Orchestrators
│   ├── Evaluating Livepeer
│   ├── Livepeer 101
│   ├── Brief History of Video
│   └── Contributor Orientation
├── FAQs & Help
│   ├── About FAQ
│   ├── Gateway FAQ
│   ├── Orchestrator FAQ
│   ├── Community FAQ
│   └── Help Centre
├── Changelogs
│   └── (same 5 sub-groups as Option A)
└── Documentation Guide
    └── (same 5 sub-groups as Option A)
```

**Pros**
- Matches what readers are actually looking for ("I need an API spec", "I need contract addresses", "I need to set up monitoring").
- APIs & SDKs gets a first-class top-level slot — important given developer is the largest audience.
- Easier to add new domains as the network grows (e.g. add a "Treasury" group when treasury features ship).

**Cons**
- The three frontmatter categories no longer match the IA — `pageType: reference` pages are scattered across multiple top-level groups.
- "Network Data" is small (3 pages) — might be better merged into Protocol.
- Hardware/health API duplicates the line between APIs and Node Operations — boundary call needed for each page.
- Drifts from the existing portal.mdx which already frames the HUB as "Reference / Learn / Contribute."

---

## OPTION C — Hybrid (category spine, domain sub-spine inside Reference)

Three categories at the top, but Reference gets a proper second-level domain organisation. Compendium and Knowledge Hub stay small and flat. Changelogs and Documentation Guide are separate top-level groups since they don't fit cleanly into the three primitives.

```
Resource HUB
├── Reference                           ← spine of the HUB (135 pages)
│   ├── Contract Addresses              ← canonical contract data page + Arbitrum RPCs/exchanges as siblings
│   ├── Protocol Parameters
│   ├── AI APIs                         ← 10 pipeline endpoints + hardware/health/ai-worker
│   ├── go-livepeer                     ← CLI, flags, Prometheus, hardware, GPU, bandwidth, architecture
│   ├── APIs & SDKs                     ← CLI-HTTP, pytrickle, 5 SDKs, pricing & rate limits
│   └── Network Data                    ← Arbitrum RPCs, exchanges, network metrics, technical roadmap
├── Compendium                          ← flat, small (15 pages)
│   ├── Livepeer Glossary (canonical)
│   ├── Resource Hub Terms
│   ├── Media Kit
│   ├── FAQs (about, gateway, orchestrator, community as one group of cross-links)
│   └── Audience glossaries (cross-link only — they redirect to the canonical glossary with audience filter)
├── Knowledge Hub                       ← flat, small (9 pages)
│   ├── Whitepaper
│   ├── Livepeer 101
│   ├── Brief History of Video
│   ├── Gateways vs Orchestrators
│   ├── Evaluating Livepeer
│   └── Contributor Orientation
├── Changelogs
│   ├── Protocol & Network
│   ├── AI & Compute
│   ├── APIs & SDKs
│   ├── Data & Tooling
│   └── Ecosystem
└── Documentation Guide
    ├── Frameworks
    ├── Standards
    ├── Policies
    ├── Tooling
    └── Repo Operations
```

**Pros**
- Honours the three frontmatter categories as the IA spine — same vocabulary as the codebase.
- Reference gets proper domain organisation (the 6 sub-groups from your stub map here cleanly: AI, Video → folded into go-livepeer/network-data, Protocol, Orchestrators, Delegators, General).
- Compendium and Knowledge Hub stay small and clean — no false sub-grouping.
- Changelogs and Documentation Guide are top-level (not crammed into a category) — matches how readers think of them.
- Reusable: as new reference pages get added with `pageType: reference`, they slot into an existing sub-group.

**Cons**
- Two-level nav for the largest bucket (Reference → Domain → Page) — slightly deeper than Option B.
- Asymmetric: Reference has sub-groups, Compendium and Knowledge Hub don't.
- "go-livepeer" sub-group name is technical — fine for developers/operators, less inviting for delegators.

---

## Side-by-side

| Aspect | Option A (Category-first) | Option B (Domain-first) | Option C (Hybrid) |
|---|---|---|---|
| Top-level groups | 5 | 9 | 5 |
| Matches frontmatter taxonomy | ✅ strong | ⚠️ partial | ✅ strong |
| Matches reader mental model | ⚠️ weak | ✅ strong | ✅ good |
| Reference bucket organisation | sub-groups inside | scattered across top-level | sub-groups inside |
| Scales as repo grows | ⚠️ Reference keeps getting bigger | ✅ add new top-level domains | ✅ add new sub-groups |
| Match to your stub (AI/Video/Protocol/Orch/Delegators/General buckets) | poor | poor | good (5 of 6 buckets become Reference sub-groups) |
| Match to portal.mdx framing ("Reference - Learn - Contribute") | ✅ direct | ⚠️ drifts | ✅ direct |
| FAQ placement | inside Reference | own top-level | inside Compendium |
| Documentation Guide | own top-level | own top-level | own top-level |
| Changelogs | own top-level | own top-level | own top-level |

---

## Recommendation

**Option C (Hybrid).** Reasoning:

1. The stub you started already commits to a bucketed Reference group (AI, Video, Protocol, Orchestrators, Delegators, General). Option C is the only one that keeps that shape — it becomes the sub-spine of Reference.
2. The three frontmatter categories (`Reference`, `Compendium`, `Knowledge Hub`) become the literal top-level nav, so the IA matches the codebase taxonomy. No translation layer.
3. Reference is the only bucket large enough to need sub-grouping. Compendium (15 pages) and Knowledge Hub (9 pages) stay flat and discoverable.
4. Changelogs and Documentation Guide become peer top-level groups instead of being forced into a category — they don't really fit "look-up" (Reference), "encyclopedia" (Compendium), or "orient" (Knowledge Hub), and treating them as peers reflects how readers actually use them.
5. Direct match to the existing portal.mdx framing ("Reference - Learn - Contribute"): Reference = Reference, Knowledge Hub = Learn, Documentation Guide = Contribute. Compendium and Changelogs are the connective tissue.

If you pick a different option or want a fourth shape, redirect and I'll re-draft.

---

## Next step

You pick A / B / C / hybrid-of, redirect any of the canonical-page picks in the duplicate table at the top, then I produce `03-docsjson-delta.md` — the populated nav block ready to paste into [docs.json:3232](docs.json#L3232).
