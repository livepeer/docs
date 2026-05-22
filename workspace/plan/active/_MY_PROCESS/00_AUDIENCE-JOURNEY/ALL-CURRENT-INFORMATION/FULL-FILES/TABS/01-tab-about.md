# About tab: audience analysis and gap report

Tab path: `v2/about/`
Branch: `docs-v2-dev`

---

## 1. Primary audience persona

**Name:** The Protocol Understander

**Who they are:** A technically curious reader who wants to understand how Livepeer works before deciding whether — and how — to participate. They are not yet operating a node, not yet staking, and not yet building. They are evaluating.

They arrive from one of three routes:
- The Home tab sent them here after answering "what is Livepeer?"
- A search for "Livepeer protocol" or "Livepeer architecture" or "how does Livepeer work"
- A link from a Messari report, CoinDesk article, or DePIN research piece

**Their mental state on arrival:** Curious but unanchored. They have a surface understanding of Livepeer but cannot yet explain it accurately to someone else. They want a model they can trust, not marketing copy.

**What they need to leave with:**
- A clear mental model of how the network functions: who does what, how value flows, how trust is enforced
- Enough understanding of the economics to evaluate whether participating (in any capacity) makes sense
- Pointers to the next step that matches their emerging intent (stake, build, run a node)

---

## 2. Secondary visitor personas

**The diligence analyst:** Investor, fund researcher, or DePIN analyst doing structured due diligence. Needs: token economics, protocol mechanics, governance model, technical architecture, roadmap, whitepaper. Will read deeply and cross-reference. Will look for FAQs and want current network stats.

**The pre-build developer:** Software developer who has heard about Livepeer AI and is evaluating it as infrastructure for a product. Needs enough protocol understanding to decide whether to move to the Developers tab. Won't stay long if the content is too abstract.

**The DePIN-curious LPT holder:** Has LPT, found the docs, wants to understand what they actually own. Will read economics and governance. Should be routed to LP Token tab once oriented.

**The orchestrator candidate:** Has a GPU server, found Livepeer, wants to understand whether it's worth running a node. About is their research phase. Will move to Orchestrators tab once convinced.

---

## 3. What the tab currently contains (inventory)

### Root level
- `index.mdx` — tab index/routing
- `portal.mdx` — tab entry point
- `core-concepts.mdx` — concepts overview
- `faq-about.mdx` — FAQ
- `livepeer-overview.mdx` — high-level overview
- `mental-model.mdx` — mental model explainer
- `livepeer-network/` — network section
- `livepeer-protocol/` — protocol section
- `concepts/` — concepts subfolder (actors.mdx only)
- `resources/` — reference section

### livepeer-network/
- `overview.mdx`
- `actors.mdx` (also in concepts/)
- `demand-side.mdx` — STUB (538 bytes)
- `supply-side.mdx` — STUB (517 bytes)
- `fee-flow.mdx` — STUB (498 bytes)
- `scaling.mdx` — STUB (535 bytes)
- `marketplace.mdx`
- `interfaces.mdx`
- `job-lifecycle.mdx`
- `technical-architecture.mdx`
- `livepeer-actors/` — subdirectory (contents not confirmed)

### livepeer-protocol/
- `overview.mdx`
- `core-mechanisms.mdx`
- `economics.mdx`
- `governance-model.mdx`
- `livepeer-token.mdx`
- `technical-architecture.mdx`
- `blockchain-contracts.mdx`
- `treasury.mdx`

### resources/
- `blockchain-contracts.mdx` (duplicate of livepeer-protocol version — needs audit)
- `gateways-vs-orchestrators.mdx`
- `livepeer-whitepaper.mdx`
- `livepeer-contract-addresses.mdx` + `.json`
- `technical-roadmap.mdx` — STUB (793 bytes)
- `compendium/` — directory (contents not confirmed)

---

## 4. Gap analysis

### 4.1 Critical gaps — missing pages the reader absolutely needs

**MISSING: Network statistics / live metrics page**
The About tab contains no page that answers "what does this network look like right now?" — active orchestrators, current inflation rate, total staked LPT, fees generated, AI compute capacity. The diligence analyst and the LPT-curious holder both need this.
- Content exists: Dune dashboards (rickstaa/livepeer-ai, dob/livepeer-treasury), Messari quarterly reports, Livepeer Explorer
- Needed: A reference page that explains what metrics exist, what they measure, and where to find them. Should not embed live data (stale risk) but should point to all authoritative live sources.
- Canonical location: `v2/about/resources/network-metrics.mdx`

**MISSING: The AI pivot explained**
Nowhere in the About tab is there a page that answers: "How did Livepeer go from video transcoding to AI infrastructure?" This is the most important context for any reader arriving in 2025–2026. The About tab's livepeer-overview.mdx addresses Livepeer generally but the AI-first reframe needs explicit treatment.
- Content exists: November 2025 blog "A Real-time Update to the Livepeer Network Vision", Messari Q3 2025 report
- Needed: A page (or section in livepeer-overview.mdx) that explains the dual-mode network, the AI subnet, and what changed — told as architecture and fact, not marketing
- Canonical location: Could be a section in `livepeer-overview.mdx` or a new `v2/about/concepts/ai-infrastructure.mdx`

**MISSING: Meaningful content in stub pages**
`demand-side.mdx`, `supply-side.mdx`, `fee-flow.mdx`, and `scaling.mdx` are all stubs of 498–538 bytes. These are linked in the nav and will be reached by readers. Currently they provide no value.
- Priority: `fee-flow.mdx` is the most critical — the economic model is a top question for every persona visiting About
- Action needed: All four stubs need full content before launch

**MISSING: `technical-roadmap.mdx` content**
793 bytes. This is a key page for investors, analysts, and diligence readers. The Foundation's 3-phase roadmap (Foundation 2025 → Scaling 2026-2027 → Decentralisation 2028+) exists as public content on the blog.
- Canonical location: `v2/about/resources/technical-roadmap.mdx` — needs full content

### 4.2 Structural gaps — IA issues

**Duplicate content: `blockchain-contracts.mdx`**
This file exists in both `v2/about/livepeer-protocol/` and `v2/about/resources/`. One of these is a duplicate. Both are 62KB+ files. This must be resolved before launch — one canonical location, one redirect.

**Duplicate actors content**
`actors.mdx` exists in both `v2/about/livepeer-network/` and `v2/about/concepts/`. Need to confirm which is authoritative and whether the concepts/ version is a redirect or genuinely different content.

**`livepeer-protocol/treasury.mdx` scope collision**
The About tab's `livepeer-protocol/treasury.mdx` covers treasury mechanics at a protocol level. The LP Token tab has its own `treasury/` section. These are not duplicates — About explains the mechanism, LP Token explains how to use it — but both need explicit scope boundaries in their intro text to avoid reader confusion.

**No `quickstart/` — this is correct**
About is not a task-oriented tab. No quickstart needed. The existing `portal.mdx` is the correct entry point.

### 4.3 Content quality gaps — existing pages

**`livepeer-overview.mdx` (10.6KB) does not address the AI pivot**
This is the most-read page in the About tab by any measure. It needs a section on "Livepeer as AI Infrastructure" that explains what changed and why. Currently reads as pre-AI-pivot documentation.

**`mental-model.mdx` (21KB) needs validation**
This is a substantial explainer. Given the AI pivot, some conceptual framing may be outdated. Needs SME review (Rick / j0sh) to confirm accuracy of AI job routing description in particular.

**`governance-model.mdx` (15.8KB) — audience confusion risk**
This page explains the on-chain governance model. It is the right page for the About tab. However, it currently also covers *how to participate* — which is LP Token tab territory. The About version should explain the model, not the process. The process lives in `v2/lpt/governance/processes.mdx`.

**`economics.mdx` (7KB) — likely outdated**
LIP-107 proposes changes to `targetBondingRate` and `inflationChange`. LIP-100 proposes inflation bounds. If either passes before launch, this page needs updating. Flag with REVIEW tag and SME: Mehrdad.

### 4.4 Missing journey steps

The About tab as currently structured does not answer the diligence analyst's natural question sequence:

| Question | Current coverage | Gap |
|---|---|---|
| What is Livepeer? | livepeer-overview.mdx | Needs AI pivot update |
| How does it work technically? | technical-architecture.mdx (both locations) | Good |
| Who are the participants? | actors.mdx | Good |
| How does money flow? | fee-flow.mdx (STUB) | Critical gap |
| What are the token economics? | economics.mdx | Needs LIP update |
| How is the protocol governed? | governance-model.mdx | Good but scope creep |
| What contracts back this? | blockchain-contracts.mdx | Good |
| What does the network look like now? | Nothing | Critical gap |
| What is the roadmap? | technical-roadmap.mdx (STUB) | Critical gap |
| Where do I go next? | resources/gateways-vs-orchestrators.mdx | Incomplete handoff |

---

## 5. Recommended IA for About tab (aligned to canonical, adapted for non-task tab)

```
v2/about/
├── portal.mdx                          ✅ exists
├── livepeer-overview.mdx               ✅ exists — needs AI pivot section
├── mental-model.mdx                    ✅ exists — needs SME review
├── core-concepts.mdx                   ✅ exists
├── faq-about.mdx                       ✅ exists
│
├── livepeer-network/
│   ├── overview.mdx                    ✅ exists
│   ├── actors.mdx                      ✅ exists (resolve duplicate)
│   ├── marketplace.mdx                 ✅ exists
│   ├── interfaces.mdx                  ✅ exists
│   ├── job-lifecycle.mdx               ✅ exists
│   ├── technical-architecture.mdx      ✅ exists
│   ├── demand-side.mdx                 ⚠️  STUB — needs content
│   ├── supply-side.mdx                 ⚠️  STUB — needs content
│   ├── fee-flow.mdx                    🔴 STUB — critical, needs content
│   └── scaling.mdx                     ⚠️  STUB — needs content
│
├── livepeer-protocol/
│   ├── overview.mdx                    ✅ exists
│   ├── core-mechanisms.mdx             ✅ exists
│   ├── economics.mdx                   ⚠️  needs LIP-107/LIP-100 review
│   ├── governance-model.mdx            ⚠️  needs scope trim
│   ├── livepeer-token.mdx              ✅ exists
│   ├── technical-architecture.mdx      ✅ exists
│   ├── blockchain-contracts.mdx        ⚠️  resolve duplicate with resources/
│   └── treasury.mdx                    ✅ exists — scope boundary note needed
│
└── resources/
    ├── livepeer-whitepaper.mdx         ✅ exists
    ├── livepeer-contract-addresses.mdx ✅ exists
    ├── gateways-vs-orchestrators.mdx   ✅ exists
    ├── technical-roadmap.mdx           🔴 STUB — high priority
    ├── network-metrics.mdx             🔴 MISSING — new page needed
    └── compendium/                     (glossary — confirm contents)
```

Legend: ✅ good | ⚠️ needs work | 🔴 critical gap
