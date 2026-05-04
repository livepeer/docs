# Livepeer Docs v2 — Master Site Map & Success Criteria

> Single source: what every tab owns, what "done" means per tab, and what is missing.
> Use this file to judge whether any tab can ship.

**Date:** 2026-04-07  
**Branch:** docs-v2  
**Total published pages:** 653  

---

## SUCCESS DEFINITION — SITE-WIDE

A tab ships when it passes ALL of these:

| Gate | Test |
|---|---|
| **Zero-to-hero coverage** | A reader with zero prior knowledge can complete the full journey from "what is this?" to operational/participating |
| **Persona coverage** | Every primary persona's critical questions are answered by a page in this tab |
| **Discord test** | Any question that appears frequently in Discord/Forum has a linkable page answer |
| **No dead stubs** | No page with fewer than 2KB of substantive content in published nav |
| **No broken journeys** | Every page has a clear "where next" — no dead ends |
| **Org needs met** | Tab serves Livepeer Foundation's goal: attract operators, builders, delegators, and surface the AI network story |

---

## TAB 1: HOME (19 pages)

**Job:** Introduce Livepeer. Tell the story. Route readers to the right tab.  
**Primary personas:** All — this is the front door.  
**Org priority:** High — first impression for all inbound traffic.

### Page Inventory & Status

| Page | Size | Status | Issue |
|---|---|---|---|
| `about/vision.mdx` | 8.8KB | ✅ Publishable | — |
| `about/evolution.mdx` | 7.9KB | ✅ Publishable | — |
| `about/ecosystem.mdx` | 25.7KB | ✅ Publishable | Stale risk on org structure post-Foundation launch |
| `about/benefits.mdx` | 9.9KB | ✅ Publishable | — |
| `about/roadmap.mdx` | 1.8KB | 🔴 STUB | Needs actual content or redirect to About/technical-roadmap |
| `get-started.mdx` | 7.5KB | ✅ Publishable | — |
| `get-started/ai-pipelines.mdx` | 484B | 🔴 STUB | "Coming Soon" — needs content or removal from nav |
| `get-started/build-on-livepeer.mdx` | 448B | 🔴 STUB | "Coming Soon" — needs content or removal from nav |
| `get-started/stream-video.mdx` | 480B | 🔴 STUB | "Coming Soon" — needs content or removal from nav |
| `get-started/use-livepeer.mdx` | 427B | 🔴 STUB | "Coming Soon" — needs content or removal from nav |
| `mission-control.mdx` | 6.3KB | ✅ Publishable | — |
| `primer.mdx` | 10.6KB | ✅ Publishable | — |
| `trending.mdx` | 6.4KB | 🟡 STALE RISK | Time-sensitive content — needs a review date |
| `solutions/applications.mdx` | 3.7KB | 🟡 THIN | Verify against live product landscape |
| `solutions/landscape.mdx` | 1.2KB | 🔴 THIN | Too short — needs content or merge |
| `solutions/showcase.mdx` | 2.4KB | 🟡 THIN | — |
| `solutions/verticals.mdx` | 13KB | ✅ Publishable | — |

### Home Tab Success Gates

| Gate | Status | Fix needed |
|---|---|---|
| Zero-to-hero | ✅ primer.mdx handles this | — |
| Persona routing | ✅ get-started.mdx | — |
| Zero stubs in nav | 🔴 FAIL | 4 get-started/* stubs in nav — remove from nav or write |
| Roadmap coverage | 🔴 FAIL | roadmap.mdx is 1.8KB stub |
| Stale risk managed | 🟡 PARTIAL | trending.mdx needs review mechanism |

### What Home is MISSING

1. **Roadmap** — 1.8KB stub fails the "what's next?" question completely. Options: (a) redirect to `about/resources/reference/technical-roadmap.mdx`, or (b) write a 2-paragraph current-state + link summary.
2. **Quickstart stubs** — 4 stubs in nav create dead ends. Decision: write or remove from nav.

---

## TAB 2: ABOUT (34 pages)

**Job:** Deep technical and ecosystem reference. How the whole thing works.  
**Primary personas:** Evaluators (investors, researchers, enterprise), curious developers, delegators building context.  
**Org priority:** High — canonical "what is Livepeer" resource.

### Page Inventory & Status

| Section | Page | Size | Status | Issue |
|---|---|---|---|---|
| concepts/ | `livepeer-overview.mdx` | 10.7KB | ✅ Good | — |
| concepts/ | `mental-model.mdx` | 21KB | ✅ GOLD | Best page in About |
| concepts/ | `core-concepts.mdx` | 9.7KB | ✅ Good | — |
| protocol/ | `overview.mdx` | 14.5KB | ✅ Good | — |
| protocol/ | `core-mechanisms.mdx` | 25KB | 🟡 UNFINISHED | Good bones, incomplete |
| protocol/ | `livepeer-token.mdx` | 13.3KB | ✅ Good | — |
| protocol/ | `economics.mdx` | 10.4KB | ✅ Good | — |
| protocol/ | `governance-model.mdx` | 15.8KB | ✅ Good | — |
| protocol/ | `treasury.mdx` | 16.7KB | ✅ Good | — |
| protocol/ | `blockchain-contracts.mdx` | 59KB | ✅ GOLD | Most complete contract reference |
| protocol/ | `technical-architecture.mdx` | 9.9KB | ✅ Good | — |
| protocol/ | `design-philosophy.mdx` | 11.4KB | ✅ Good | — |
| network/ | `overview.mdx` | 6.8KB | ✅ Good | — |
| network/ | `actors.mdx` | 5KB | 🔴 THIN | Needs to be comprehensive — sub-stubs should merge in |
| network/ | `livepeer-actors/orchestrators.mdx` | 1.7KB | 🔴 STUB | Merge into actors.mdx |
| network/ | `livepeer-actors/gateways.mdx` | 1.5KB | 🔴 STUB | Merge into actors.mdx |
| network/ | `livepeer-actors/delegators.mdx` | 1.6KB | 🔴 STUB | Merge into actors.mdx |
| network/ | `livepeer-actors/end-users.mdx` | 1.5KB | 🔴 STUB | Merge into actors.mdx |
| network/ | `job-lifecycle.mdx` | 10.4KB | ✅ Good | — |
| network/ | `marketplace.mdx` | 6.5KB | ✅ Good | — |
| network/ | `technical-architecture.mdx` | 6.2KB | ✅ Good | — |
| network/ | `interfaces.mdx` | 5.9KB | ✅ Good | — |
| guides/ | *(planned, currently empty)* | — | 🔴 MISSING | Section planned but empty |
| resources/ | `faq.mdx` | 2.9KB | 🔴 THIN | — |
| resources/ | `glossary.mdx` | 51KB | ✅ DONE | — |
| resources/ | `knowledge-hub/contributor-orientation.mdx` | 1.5KB | 🔴 STUB | — |
| resources/ | `knowledge-hub/evaluating-livepeer.mdx` | 1.5KB | 🔴 STUB | — |
| resources/ | `knowledge-hub/gateways-vs-orchestrators.mdx` | 2.7KB | 🟡 THIN | — |
| resources/ | `knowledge-hub/livepeer-whitepaper.mdx` | 4KB | ✅ Done | — |
| resources/ | `reference/livepeer-contract-addresses.mdx` | 2.1KB | ✅ Done | — |
| resources/ | `reference/network-metrics.mdx` | 1.6KB | 🔴 THIN | — |
| resources/ | `reference/technical-roadmap.mdx` | 8KB | ✅ Good | Verify currency |

### About Tab Success Gates

| Gate | Status | Fix needed |
|---|---|---|
| Zero-to-hero | ✅ mental-model + concepts/* | — |
| All 21 reader questions answered | 🔴 FAIL | Q19 (products), Q20 (current state), Q21 (participation paths) MISSING |
| No stubs in nav | 🔴 FAIL | 6 stubs/thin pages in nav |
| actors.mdx comprehensive | 🔴 FAIL | 5KB thin + 4 sub-stubs |
| guides/ populated | 🔴 FAIL | Entire section empty |
| Ecosystem/products coverage | 🔴 FAIL | No page answers "what's been built on Livepeer?" |

### What About is MISSING (Priority Order)

1. **`network/actors.mdx` rewrite** — Merge the 4 sub-stubs in. Make it the definitive single-page actor reference (accordions/tabs per actor). BLOCKER for zero-to-hero journey.
2. **Ecosystem/products page** — A page answering "what products and platforms use Livepeer?" Currently NOTHING in About covers this. Route to Solutions or write a bridge page.
3. **Current state of network** — `network-metrics.mdx` at 1.6KB fails. Needs real data or a live-data component.
4. **`core-mechanisms.mdx` completion** — 25KB but marked unfinished. Identify the unfinished sections, complete them.
5. **`guides/` section** — 5 planned pages: evaluating-livepeer, contributor-orientation, ecosystem-overview, current-state, participation-paths. At minimum: evaluating-livepeer and participation-paths are zero-to-hero critical.

---

## TAB 3: ORCHESTRATORS / GPU NODES (82 pages)

**Job:** Run a GPU node. Everything from evaluation to optimisation.  
**Primary personas:** Solo GPU operator (Persona A), Pool worker (B), Pro infrastructure engineer (C), Enterprise/data centre (D), AI compute specialist (E).  
**Org priority:** Critical — operator supply = network capacity.

### Section Summary & Status

| Section | Pages | Status | Critical gaps |
|---|---|---|---|
| concepts/ | 5 | 🟡 Partial | `job-types.mdx` — AI pipeline types outdated |
| quickstart/ | 5 | 🟡 Partial | Path decision page missing |
| setup/ | 9 | 🔴 Gaps | `install-go-livepeer.mdx` is stub; `publish-offerings.mdx` underdocumented |
| guides/operator-considerations/ | ~5 | ✅ Good | — |
| guides/ai-and-job-workloads/ | ~8 | 🔴 Gaps | `aiModels.json` underdocumented; BYOC gaps |
| guides/config-and-optimisation/ | ~7 | 🟡 Partial | Competitive pricing guide missing |
| guides/monitoring-and-tooling/ | ~6 | 🟡 Partial | Grafana setup complexity not resolved |
| guides/staking-and-rewards/ | ~5 | ✅ Good | — |
| guides/advanced-operations/ | ~8 | 🔴 Gaps | Pool operator guide thin; remote worker setup gaps |
| tutorials/ | ~5 | 🟡 Partial | Pool worker tutorial missing |
| resources/ | 14 | 🟡 Partial | FAQ confirmed blocker — no troubleshooting content |

### Orchestrators Tab Success Gates

| Gate | Status | Fix needed |
|---|---|---|
| Solo operator zero-to-hero | 🟡 PARTIAL | install-go-livepeer stub is a journey blocker |
| Pool worker path clear | 🔴 FAIL | `join-a-pool.mdx` is stub; path undocumented |
| AI native onboarding | 🔴 FAIL | Realtime vs batch distinction not explained pre-quickstart |
| Enterprise path | 🔴 FAIL | data-centre-setup is stub |
| Competitive pricing guidance | 🔴 FAIL | Discord-confirmed blocker: no guidance on price-per-pixel |
| Troubleshooting/FAQ | 🔴 FAIL | Confirmed journey blocker in audit |

### Priority Content Gaps (from persona research + Discord)

| Priority | Page | Type | Persona | Discord signal |
|---|---|---|---|---|
| 🔴 P1 | `resources/faq.mdx` | EXPAND | All | Confirmed blocker — no troubleshooting |
| 🔴 P1 | `get-started/join-a-pool.mdx` | WRITE | A, B | Pool Worker journey completely blocked |
| 🔴 P1 | `concepts/job-types.mdx` | REWRITE | C, E | AI pipeline types not documented |
| 🔴 P1 | `setup/install-go-livepeer.mdx` | WRITE | A, B, C | Stub; critical path for all operators |
| 🟡 P2 | `get-started/setup-paths.mdx` | WRITE | All | Decision matrix: solo/pool/AI-only |
| 🟡 P2 | `setup/publish-offerings.mdx` | WRITE | A, C, D | On-chain activation underdocumented |
| 🟡 P2 | `advanced/run-a-pool.mdx` | EXPAND | C, D | Pool operation guide thin |
| 🟡 P2 | `advanced/ai-pipelines.mdx` | REWRITE | C, E | aiModels.json + containers + warm loading |
| 🟢 P3 | `concepts/economics.mdx` | EXPAND | A, D | Earnings calculator; stake-to-work ratio |
| 🟢 P3 | `setup/enterprise-and-data-centres.mdx` | WRITE | D | Stub; enterprise entry point |

---

## TAB 4: GATEWAYS (133 pages — includes composable views)

**Job:** Run gateway infrastructure. Full operational depth.  
**Primary personas:** App developer graduating to self-hosted (A), Gateway-as-service provider (B), Protocol/infrastructure researcher (C).  
**Org priority:** Critical — gateway operators expand network demand side.

### Section Summary & Status

| Section | Status | Critical gaps |
|---|---|---|
| concepts/ (4 pages) | 🟡 Partial | Off-chain vs on-chain distinction thin |
| quickstart/ (2+10 views) | ✅ Good | GOLD STANDARD structure |
| setup/ (20+ pages) | ✅ Strong | Remote signer integration not reflected post-Q4 2025 |
| guides/operator-considerations/ | 🟡 Partial | — |
| guides/payments-and-pricing/ | 🔴 GAPS | Clearinghouse architecture UNDOCUMENTED |
| guides/node-pipelines/ | 🟡 Partial | Dual AI+video config gaps |
| guides/advanced-operations/ | 🔴 GAPS | Middleware, orchestrator selection for off-chain |
| guides/tutorials/ | 🟡 Partial | Go-production tutorial incomplete |
| resources/ | ✅ Good | API reference strong |

### Gateways Tab Success Gates

| Gate | Status | Fix needed |
|---|---|---|
| Graduate persona zero-to-hero | 🟡 PARTIAL | "Should I run on-chain or off-chain?" pre-decision not clear |
| Remote signer path documented | 🔴 FAIL | PRs #3791/#3822 not reflected in docs |
| Clearinghouse architecture | 🔴 FAIL | Discord confirmed: completely undocumented |
| Off-chain orchestrator discovery | 🔴 FAIL | j0sh Discord: "I'll also try to publish docs soon" — not done |
| Dual AI+video config | 🔴 FAIL | Common operator question without a guide |

### Priority Content Gaps (from persona research + Discord)

| Priority | Page | Type | Gap |
|---|---|---|---|
| 🔴 P1 | `concepts/payment-modes.mdx` | WRITE/REWRITE | On-chain vs off-chain decision page — gateway operators blocked on this |
| 🔴 P1 | `guides/payments-and-pricing/clearinghouse.mdx` | WRITE | Clearinghouse architecture — completely undocumented |
| 🔴 P1 | `setup/remote-signers.mdx` | WRITE | Remote signer integration (post Q4 2025 PRs) |
| 🔴 P1 | `guides/advanced-operations/orchestrator-discovery-offchain.mdx` | WRITE | Off-chain gateway discovery — Discord-confirmed gap |
| 🟡 P2 | `guides/node-pipelines/dual-ai-video.mdx` | WRITE | Running AI + video on same/separate nodes |
| 🟡 P2 | `guides/operator-considerations/business-case.mdx` | EXPAND | Provider economics not modelled |
| 🟢 P3 | `tutorials/go-production.mdx` | COMPLETE | Production readiness checklist incomplete |

---

## TAB 5: DEVELOPERS (51 pages)

**Job:** Build on Livepeer — APIs, SDKs, pipelines.  
**Primary personas:** AI app developer, video app developer, contributor/OSS builder.  
**Org priority:** Critical — developer adoption drives demand through gateways.

### Section Summary & Status

| Section | Status | Critical gaps |
|---|---|---|
| concepts/ (5 pages) | 🟡 Partial | AI on Livepeer concept needs AI subnet accuracy update |
| get-started/ (6 pages) | 🟡 Partial | Setup paths not clear enough for AI-first entrants |
| build/ (5 pages) | 🟡 Partial | Workload fit guide thin |
| guides/ai/ | 🔴 GAPS | Production checklist incomplete; auth guide thin |
| guides/video/ | ✅ Good | Comprehensive |
| guides/tutorials/ | 🟡 Partial | AI agent tutorial needs current pipeline accuracy |
| guides/opportunities/ | ✅ Good | Grants, bounties covered |
| resources/ | ✅ Good | SDKs, APIs well-referenced |

### Developers Tab Success Gates

| Gate | Status | Fix needed |
|---|---|---|
| AI developer zero-to-hero | 🟡 PARTIAL | "Which quickstart?" decision not made before they choose |
| Video developer zero-to-hero | ✅ PASS | — |
| Entry point from NaaP/Daydream | 🔴 FAIL | No clear "you were using hosted, now self-host" journey |
| Authentication guide | 🟡 PARTIAL | Thin |
| Production checklist | 🟡 PARTIAL | Incomplete |

### Priority Content Gaps

| Priority | Page | Type | Gap |
|---|---|---|---|
| 🔴 P1 | `concepts/ai-on-livepeer.mdx` | REWRITE | AI subnet accuracy — NaaP, clearinghouse model |
| 🔴 P1 | `get-started/setup-paths.mdx` | EXPAND | Which quickstart? Decision tree before they choose |
| 🟡 P2 | `guides/ai/authentication.mdx` | EXPAND | Auth flows for AI gateway integration |
| 🟡 P2 | `guides/ai/production-checklist.mdx` | COMPLETE | Incomplete production guidance |
| 🟡 P2 | `build/workload-fit.mdx` | REWRITE | AI vs video vs hybrid use case matrix |
| 🟢 P3 | `guides/tutorials/ai-agent.mdx` | UPDATE | Current pipeline/model accuracy |

---

## TAB 6: DELEGATORS / LP TOKEN (25 pages)

**Job:** Stake LPT. Participate in governance. Earn.  
**Primary personas:** LPT holder evaluating delegation, existing delegator managing position, governance participant.  
**Org priority:** High — delegation secures network; governance participation legitimises protocol decisions.

### Section Summary & Status

| Section | Status | Critical gaps |
|---|---|---|
| concepts/ (4 pages) | ✅ Good | — |
| delegation/ (7 pages) | ✅ Good | bridge-lpt-to-arbitrum complete |
| guides/governance/ (3 pages) | 🟡 Partial | How-to-vote flow needs verification post-GovWorks update |
| guides/treasury/ (3 pages) | 🟡 Partial | Proposal submission process needs currency check |
| resources/ (5 pages) | ✅ Good | — |

### Delegators Tab Success Gates

| Gate | Status | Fix needed |
|---|---|---|
| LPT holder zero-to-hero | ✅ PASS | delegation/* comprehensive |
| Governance participation path | 🟡 PARTIAL | GovWorks process update (Feb 2025) reflected? |
| Treasury proposal path | 🟡 PARTIAL | Current process accuracy |
| Protocol parameter reference | ✅ PASS | — |

### Priority Content Gaps

| Priority | Page | Gap |
|---|---|---|
| 🟡 P2 | `guides/governance/processes.mdx` | Verify GovWorks Feb 2025 process update |
| 🟡 P2 | `guides/treasury/proposals.mdx` | Current proposal submission steps |
| 🟢 P3 | `concepts/tokenomics.mdx` | Inflation model — verify post-AI subnet numbers |

---

## TAB 7: COMMUNITY (18 pages)

**Job:** Get involved. Find people. Contribute.  
**Primary personas:** New participant (all roles), existing participant seeking governance/contribution paths.  
**Org priority:** Medium — supports ecosystem health and governance legitimacy.

### Section Summary & Status

| Section | Status | Notes |
|---|---|---|
| community/ (5 pages) | 🟡 Partial | Community portal and guidelines need current Foundation info |
| connect/ (3 pages) | 🟡 Partial | Channels page needs platform map |
| contribute/ (3 pages) | 🟡 Partial | Workstreams page needs current roster |
| resources/ (4 pages) | ✅ Good | Links to awesome-livepeer |

### Final IA (from community-tab-05-final-ia-and-pages.md — CANONICAL)

```
Community Portal    ← landing
Community FAQ
├── This Community
│   ├── Who's Here
│   └── Community Guidelines
├── Shape the Network
│   ├── Governance Participation
│   └── Workstreams
├── Get Involved
│   ├── Ways to Contribute
│   └── Opportunities
├── Connect
│   ├── Channels
│   ├── Events and Calls
│   └── News and Updates
└── Ecosystem
    ├── Community Tools
    └── Community Guides
```

### Community Tab Success Gates

| Gate | Status | Fix needed |
|---|---|---|
| Zero-to-hero for newcomer | ✅ Portal + FAQ handle this | — |
| Foundation info current | 🔴 FAIL | Foundation launched June 2025 — verify all references |
| Workstreams roster current | 🔴 FAIL | Workstream leads volatile — route to live Forum source |
| Governance path clear | ✅ Routes to LP Token tab | — |
| Staleness managed | 🟡 PARTIAL | Standing rule: route volatile content to live source |

---

## TAB 8: SOLUTIONS (109 pages)

**Job:** Product docs. What exists and how to use it.  
**Primary personas:** Developers evaluating products, existing product users.  
**Org priority:** High — demonstrates real ecosystem value.

### Section Summary & Status

| Product | Pages | Status |
|---|---|---|
| `daydream/` | 3 | 🟡 Verify currency |
| `embody/` | 3 | 🟡 Verify currency |
| `frameworks/` | 3 | 🟡 Verify currency |
| `streamplace/` | 8 | ✅ Comprehensive |
| `livepeer-studio/` | 88 | ✅ Comprehensive |

### Solutions Tab Success Gates

| Gate | Status | Fix needed |
|---|---|---|
| Each product has overview + quickstart + reference | 🟡 PARTIAL | daydream/embody/frameworks thin |
| About tab links here for "what's been built" | 🔴 FAIL | About has no bridge to Solutions |
| Home solutions/* aligns with Solutions tab | 🟡 PARTIAL | Verify alignment |

---

## TAB 9: RESOURCES (53 pages)

**Job:** Cross-cutting reference. Changelogs. Documentation guide.  
**Primary personas:** All — this is the lookup layer.  
**Org priority:** Medium — important for contributor experience.

### Section Summary & Status

| Section | Status |
|---|---|
| changelog/ (20 pages) | ✅ Good — keep current |
| documentation-guide/ (15 pages) | ✅ Good |
| glossary.mdx | ✅ Done |
| concepts/ (2 pages) | 🟡 Thin |

---

## CROSS-TAB MISSING CONNECTIONS

These are gaps where readers will fall off the site entirely:

| Gap | Impact | Fix |
|---|---|---|
| About has no "what's been built?" page | High — evaluators end their journey with no ecosystem picture | Add ecosystem/products bridge page or link to Solutions |
| Roadmap in 3 tabs, all thin | Medium — readers can't find the actual roadmap | Canonicalise in About, stub+redirect in Home and Community |
| Developer entry from hosted API (NaaP/Daydream) → self-hosted | High — confirmed developer journey gap from Discord | Gateways concepts/ "why self-host" page |
| Pool worker path (Orchestrators) | High — Persona B completely blocked | join-a-pool.mdx |
| Remote signer / clearinghouse | High — new architecture post Q4 2025, completely undocumented | Gateways guides/payments-and-pricing/ |

---

## CONTENT COMPLETION SCORECARD

| Tab | Pages | Stubs/Gaps | Completion estimate | Ship-ready? |
|---|---|---|---|---|
| Home | 19 | 5 | 75% | 🔴 No — 4 nav stubs |
| About | 34 | 8 | 65% | 🔴 No — actors, guides/, ecosystem |
| Orchestrators | 82 | 8 critical | 70% | 🔴 No — install, pool, AI paths |
| Gateways | 133 | 6 critical | 75% | 🔴 No — clearinghouse, remote signer |
| Developers | 51 | 4 critical | 75% | 🔴 No — AI concept, setup paths |
| Delegators | 25 | 3 medium | 85% | 🟡 Near — governance/treasury currency |
| Community | 18 | 3 medium | 75% | 🟡 Near — Foundation info, workstreams |
| Solutions | 109 | 3 thin products | 85% | 🟡 Near — daydream/embody thin |
| Resources | 53 | 1 medium | 90% | ✅ Publishable |
