# Tab Completion Framework

> Per-tab checklist. A tab passes when every gate is GREEN.
> Run this against each tab before declaring it ship-ready.

**Date:** 2026-04-07

---

## HOW TO USE THIS

For each tab:
1. Check every gate in the UNIVERSAL GATES section
2. Check every gate in the TAB-SPECIFIC GATES section
3. Any RED gate = tab does not ship
4. Record gate results in the COMPLETION LOG at the bottom

---

## UNIVERSAL GATES (every tab must pass these)

| # | Gate | Test |
|---|---|---|
| U1 | **No published stubs** | Every page in docs.json nav has >2KB substantive content |
| U2 | **Opening paragraph contract** | Every portal/landing/concept page opens with: subject → function → constraint. No anti-patterns. |
| U3 | **Zero-to-hero path complete** | A reader who knows nothing can complete the full journey without leaving the tab (except for deliberate handoffs) |
| U4 | **Discord test passed** | Every question that appears in Discord/Forum Discord for this tab's domain has a linkable page |
| U5 | **No dead ends** | Every page has at least one clear "next" link or explicit handoff statement |
| U6 | **Trade-offs present** | Every concept/economics/architecture page has at least one named trade-off or failure condition |
| U7 | **Scope boundaries explicit** | Out-of-scope content is stated and replaced with links (not just absent) |
| U8 | **Primary sources verified** | No factual claim without a verifiable source (go-livepeer code, Blockscout, Arbitrum contracts, official blog posts) |

---

## TAB-SPECIFIC GATES

---

### HOME

| # | Gate | Test | Status |
|---|---|---|---|
| H1 | Nav stubs removed | 4 get-started/* stubs removed from docs.json or written | 🔴 |
| H2 | Roadmap resolved | roadmap.mdx either has content or redirects | 🔴 |
| H3 | Routing works | Every persona card in get-started.mdx links to a populated destination | 🟡 |
| H4 | Ecosystem page current | ecosystem.mdx reflects Foundation launch (June 2025) | 🟡 |
| H5 | trending.mdx dated | Review mechanism or removal | 🟡 |

---

### ABOUT

| # | Gate | Test | Status |
|---|---|---|---|
| A1 | actors.mdx comprehensive | Single page, all 4 actors, no sub-stubs | 🔴 |
| A2 | Sub-actor stubs removed | 4 livepeer-actors/*.mdx stubs removed from nav | 🔴 |
| A3 | guides/ section populated | At least evaluating-livepeer and participation-paths written | 🔴 |
| A4 | Ecosystem/products covered | At least one page bridges to "what's been built" | 🔴 |
| A5 | core-mechanisms.mdx complete | Unfinished sections identified and completed | 🟡 |
| A6 | network-metrics.mdx current | Real data or live-data component | 🔴 |
| A7 | 21 reader questions answered | Check against MASTER-SITEMAP-SUCCESS.md question list | 🟡 |

---

### ORCHESTRATORS / GPU NODES

| # | Gate | Test | Status |
|---|---|---|---|
| O1 | install-go-livepeer.mdx written | Full binary install, all platforms, non-stub | 🔴 |
| O2 | join-a-pool.mdx written | Complete pool worker journey | 🔴 |
| O3 | setup-paths.mdx written | Decision matrix: solo / pool / AI-only | 🟡 |
| O4 | job-types.mdx current | AI pipeline types accurate (Cascade, LLM, etc.) | 🔴 |
| O5 | FAQ has troubleshooting | Common errors ("Orchestrator not available", port forwarding) | 🔴 |
| O6 | AI pipeline config documented | aiModels.json schema, container management, warm loading | 🟡 |
| O7 | Pricing guidance exists | Competitive pricing strategy, not just "set a price" | 🟡 |
| O8 | Pool operator guide complete | run-a-pool.mdx covers full operation | 🟡 |
| O9 | Enterprise path exists | data-centre-setup.mdx has real content | 🟡 |
| O10 | All 5 personas served | A (Solo), B (Pool), C (Pro), D (Enterprise), E (AI Native) — each has a clear path | 🔴 |

---

### GATEWAYS

| # | Gate | Test | Status |
|---|---|---|---|
| G1 | Payment modes concept page exists | On-chain vs off-chain — what it means, when to use each | 🔴 |
| G2 | Remote signers documented | Post Q4 2025 PRs (#3791/#3822) reflected | 🔴 |
| G3 | Clearinghouse documented | Architecture, components (remote signer + auth + accounting + discovery) | 🔴 |
| G4 | Off-chain orchestrator discovery documented | How off-chain gateway gets its orchestrator list | 🔴 |
| G5 | Dual AI+video config documented | Same node or separate — both paths | 🟡 |
| G6 | Graduate persona journey complete | From "I was using Daydream" to self-hosted gateway | 🟡 |
| G7 | Provider economics documented | Business case for gateway-as-service | 🟡 |
| G8 | All 3 personas served | A (Graduate), B (Provider), C (Researcher) — each has a clear path | 🔴 |

---

### DEVELOPERS

| # | Gate | Test | Status |
|---|---|---|---|
| D1 | AI on Livepeer concept current | NaaP, clearinghouse, AI subnet architecture accurate | 🔴 |
| D2 | Setup paths decision tree | Which quickstart? Pre-decision before they choose | 🟡 |
| D3 | Auth guide complete | AI gateway authentication flows documented | 🟡 |
| D4 | Production checklist complete | Pre-launch requirements documented | 🟡 |
| D5 | Workload fit guide clear | AI vs video vs hybrid — concrete guidance | 🟡 |
| D6 | Entry from hosted API documented | "You were using Daydream, now self-host" journey | 🔴 |

---

### DELEGATORS / LP TOKEN

| # | Gate | Test | Status |
|---|---|---|---|
| LP1 | Delegation journey complete | Bridge LPT → choose orchestrator → delegate → manage | ✅ |
| LP2 | Governance process current | GovWorks Feb 2025 update reflected | 🟡 |
| LP3 | Treasury proposal process current | Current submission steps verified | 🟡 |
| LP4 | Tokenomics current | Post-AI subnet inflation numbers verified | 🟡 |

---

### COMMUNITY

| # | Gate | Test | Status |
|---|---|---|---|
| C1 | Foundation info current | June 2025 Foundation launch reflected everywhere | 🔴 |
| C2 | Workstreams volatile content managed | Routes to live Forum source, not duplicating state | 🔴 |
| C3 | Platform map complete | Discord/Forum/Telegram/X/YouTube — all platforms with purpose | 🟡 |
| C4 | Recurring calls documented | Dev Call, Water Cooler, Treasury Talk — schedule + link | 🟡 |
| C5 | Final IA implemented | 14 pages per community-tab-05-final-ia-and-pages.md | 🟡 |

---

### SOLUTIONS

| # | Gate | Test | Status |
|---|---|---|---|
| S1 | Each product has overview | daydream, embody, frameworks — overview not stub | 🟡 |
| S2 | About tab links here | Bridge from About ecosystem coverage | 🔴 |
| S3 | Home solutions/* aligned | Applications, landscape, showcase aligned with actual products | 🟡 |

---

### RESOURCES

| # | Gate | Test | Status |
|---|---|---|---|
| R1 | Changelog current | go-livepeer latest release reflected | 🟡 |
| R2 | Site-wide glossary accurate | Verify key AI terms post-subnet | 🟡 |

---

## COMPLETION LOG

Track progress here as gates close.

| Date | Tab | Gate | Result | Notes |
|---|---|---|---|---|
| 2026-04-07 | All | Framework created | — | Initial state recorded above |
| | | | | |

---

## QUALITY GATE: INDIVIDUAL PAGE TEST

Run this against every page before marking it done:

```
□ pageType declared in frontmatter
□ Opening paragraph: subject → function → constraint (no anti-patterns)
□ Primary audience named and intro written for that audience
□ Reader question answered (one specific question, not "overview of X")
□ Trade-offs present (if concept/economics/architecture page)
□ Out-of-scope stated explicitly with links
□ At least one verification step (tutorial/how-to pages)
□ At least one primary source verifiable
□ No stubs — every section has real content
□ Next action stated (where does reader go after this page?)
```

All 10 checks must pass. A page with 9/10 fails.

---

## THE DISCORD TEST (per tab)

Before shipping any tab, collect the 10 most common questions about that domain from Discord and the Forum. For each question:

- Does a page exist that answers it?
- If yes: is that page linkable (stable URL, findable in nav)?
- If no: is it a P1 gap?

A tab passes the Discord test when all 10 questions have linkable answers.

**Confirmed Discord gaps already identified** (see GET-IT-DONE-TODAY.md for full list).
