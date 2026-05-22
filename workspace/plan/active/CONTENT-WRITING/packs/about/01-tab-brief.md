# 01 — About Tab Brief

Source: `attachments/ia-design.md`, `attachments/audience-design.md`, `attachments/ia-prereq.md`. Read those for full context. This file is the working summary.

---

## Tab purpose

About is the orientation and routing layer for Livepeer docs. Every arriving reader who does not know which role they will play lands here. The tab explains what Livepeer is, how the protocol and network relate, who participates, how value flows, and where each reader should go next.

About is not marketing, not a product brochure, and not a quick-start. The tab assumes the reader is technically curious and evaluating — not yet operating, staking, or building.

About also serves two destination personas who do not route out: the OSS / protocol contributor and the Web3 R&D researcher. For these readers, About is the work, not the waypoint.

---

## Audience model — multi-audience, primary per page

The tab as a whole has no single primary audience. Each page within it has one primary audience, and may flag secondary audiences inline.

| Audience token | Pages where primary | Pages where secondary |
|---|---|---|
| `community` | `portal`, `livepeer-overview`, `mental-model`, `core-concepts`, `livepeer-network/actors`, `resources/faq-about`, `resources/knowledge-hub/livepeer-whitepaper` | most pages flag `community` for ecosystem newcomers |
| `founder` | `livepeer-network/marketplace`, `livepeer-network/interfaces`, `resources/knowledge-hub/evaluating-livepeer` | `livepeer-overview`, `livepeer-network/job-lifecycle` |
| `developer` | `livepeer-network/job-lifecycle`, `livepeer-network/technical-architecture`, `livepeer-network/interfaces`, `livepeer-protocol/blockchain-contracts` | `livepeer-network/marketplace`, `livepeer-network/fee-flow` |
| `orchestrator` | `livepeer-network/fee-flow`, parts of `livepeer-protocol/economics` | `livepeer-network/marketplace`, `livepeer-network/actors` |
| `delegator` | None on About — about-tab content routes to `v2/delegators` | `livepeer-protocol/livepeer-token`, `livepeer-protocol/economics` |
| `builder` | `livepeer-network/interfaces` (alt primary with `developer`) | `livepeer-overview`, `livepeer-network/marketplace` |

**Rule:** Each page declares one primary audience in its brief. Secondary audiences appear inline as flags ("Operators evaluating their hardware: see X") — never blended with the primary register inside the same paragraph.

---

## Personas served

Per `attachments/audience-design.md`. Listed by canonical priority score.

1. **Protocol Understander** (primary persona for the tab) — technically curious, evaluating, not yet committed
2. **Diligence Analyst** (token / network researcher) — investor, fund, DePIN analyst doing due diligence
3. **Founder / Product Evaluator** — building a product, evaluating Livepeer as infrastructure
4. **GPU Operator Candidate** — has hardware, evaluating whether to run an orchestrator
5. **Pre-build Developer** — evaluating API/SDK maturity, will route to Developers
6. **Ecosystem Newcomer** — heard the name, wants context before participating
7. **OSS / Protocol Contributor** — destination persona for `core-mechanisms`, `economics`, `governance-model`, `blockchain-contracts`
8. **Web3 R&D Researcher** — destination persona; About IS their endpoint

---

## Page list

Source of truth for the tab structure: `attachments/ia-design.md`. Confirmed against `attachments/ia-prereq.md` and `attachments/content-scan.md`.

### Group: About Livepeer

| Path | Status | Page type |
|---|---|---|
| `v2/about/portal` | exists, fix card hrefs | navigation |
| `v2/about/navigator` | NEW (P0) | navigation |

### Group: Core Concepts

| Path | Status | Page type |
|---|---|---|
| `v2/about/livepeer-overview` | exists | concept |
| `v2/about/mental-model` | exists, strongest page | concept |
| `v2/about/core-concepts` | exists, decide scope | concept |

### Group: Livepeer Protocol

| Path | Status | Page type |
|---|---|---|
| `v2/about/livepeer-protocol/overview` | exists | concept |
| `v2/about/livepeer-protocol/core-mechanisms` | exists, strong | concept |
| `v2/about/livepeer-protocol/livepeer-token` | exists, has TODO markers | concept |
| `v2/about/livepeer-protocol/economics` | exists, strong | concept |
| `v2/about/livepeer-protocol/governance-model` | exists, strong | concept |
| `v2/about/livepeer-protocol/treasury` | exists | concept |
| `v2/about/livepeer-protocol/technical-architecture` | exists, partial | concept |
| `v2/about/livepeer-protocol/blockchain-contracts` | exists, technical reference | reference |
| `v2/about/livepeer-protocol/design-philosophy` | NEW (P1) | concept |

### Group: Livepeer Network

| Path | Status | Page type |
|---|---|---|
| `v2/about/livepeer-network/overview` | REWRITE — current page is implementation notes | concept |
| `v2/about/livepeer-network/actors` | exists | concept |
| `v2/about/livepeer-network/technical-architecture` | exists | concept |
| `v2/about/livepeer-network/marketplace` | exists, strong | concept |
| `v2/about/livepeer-network/job-lifecycle` | exists, strong | concept |
| `v2/about/livepeer-network/interfaces` | exists | concept |
| `v2/about/livepeer-network/fee-flow` | REWRITE — narrative-level money flow | concept |

### Group: Resources

| Path | Status | Page type |
|---|---|---|
| `v2/about/resources/faq-about` | NEW (P1) — current file is IA blueprint, archive it | reference |
| `v2/about/resources/knowledge-hub/livepeer-whitepaper` | MOVE from `resources/` root | resource |
| `v2/about/resources/knowledge-hub/gateways-vs-orchestrators` | MOVE from `resources/` root | resource |
| `v2/about/resources/knowledge-hub/evaluating-livepeer` | NEW (P1) | resource |
| `v2/about/resources/knowledge-hub/contributor-orientation` | NEW (P1) | resource |
| `v2/about/resources/reference/network-metrics` | NEW (P1) | reference |
| `v2/about/resources/reference/technical-roadmap` | MOVE + DEVELOP | reference |
| `v2/about/resources/reference/livepeer-contract-addresses` | MOVE from `resources/` root | reference |
| `v2/about/resources/reference/livepeer-glossary` | MOVE from `compendium/` | reference |
| `v2/about/resources/reference/glossary` | MOVE from `compendium/` | reference |

---

## Scope boundaries — what About is NOT

About is the orientation tab. It does not:

- Operate the role tabs. Delegation walkthroughs go in `v2/delegators`. Orchestrator setup goes in `v2/orchestrators`. Gateway setup goes in `v2/gateways`. Developer integration goes in `v2/developers`.
- Hold reader-facing tutorials. About explains; it does not instruct. Step-by-step procedures live in role tabs.
- Carry hardcoded live numbers (active set size, current inflation rate, total LPT supply). These reference the Explorer, the subgraph, or governance-controlled parameters with a `{/* REVIEW: */}` flag. The page never claims a stale number as current.
- Repeat content already owned by role tabs. `governance-model.mdx` describes mechanics; the participation walkthrough belongs in `v2/lpt/governance/processes.mdx`. Trim About content that has crept into role-tab scope.
- Embed live charts or metrics. Link out to authoritative sources (Explorer, Dune, Messari) and explain what each measures.

---

## Cross-tab routing — outbound

| From About to | Trigger |
|---|---|
| Solutions | Founder / product evaluator confirms use-case fit |
| Orchestrators | GPU operator confirms hardware and stake requirements |
| Gateways | Gateway operator routing jobs on own infrastructure |
| Developers | Developer confirms API/SDK is mature for their build |
| Delegators (LP Token) | Token researcher needs delegation mechanics |
| Community | Ecosystem newcomer or contributor |

---

## Open IA decisions

These are noted in `attachments/ia-design.md` and remain unresolved:

1. `core-concepts.mdx` — keep as concept index page, fold into `livepeer-overview`, or convert to a video-vs-AI comparison page.
2. `demand-side.mdx`, `supply-side.mdx`, `scaling.mdx` — develop or archive to `_workspace/`. Currently 500-byte stubs not in nav.
3. Glossary canonicalisation — `glossary.mdx` (rendered via `glossary-data.json`) versus `livepeer-glossary.mdx` (static). One is canonical; the other redirects.

Surface these in the page brief if the work touches them. Do not resolve unilaterally.
