# Network IA — Reader Question Audit

**Date**: 2026-05-06
**Scope**: `v2/about/network/` against the 60 reader questions defined in the `/thread` brief (10 per page × 6 pages).
**Method**: read each target page end-to-end; map each reader question to one of {Covered, Partial, Missing}; identify journey/clarity issues; critique the question list itself.

Target IA (6 pages):
- `design.mdx` — Network Design
- `mechanisms.mdx` — Core Mechanisms
- `job-pipelines.mdx` — Job Pipelines
- `marketplace-model.mdx` — Marketplace
- `architecture.mdx` — Architecture
- `metrics.mdx` — Network Metrics

Out-of-IA files in `v2/about/network/` (orphaned by the target IA): `interfaces.mdx`, `observability.mdx`, `participation.mdx` — see §6 IA cleanup.

---

## Executive summary

**Overall**: the brief is sound and the pages are largely on-target. Of 60 reader questions, **41 are covered**, **14 are partial**, **5 are missing**. The strongest pages are Mechanisms and Metrics; the weakest is Design (where the Q5 decentralisation reality-check, Q7 extension paths, and Q10 roadmap are all missing or thin). The IA itself has three orphaned files that need to be merged or relocated.

**Question-list critique**: the brief is very strong. No questions to remove. Five additions recommended (one per page, except Mechanisms which already covers its surface) — see §5.

**Top three issues to fix first**:
1. **Design** is missing the decentralisation reality-check (Q5), extension paths (Q7), and roadmap (Q10). These are the three questions any first-time reader of the Network IA arrives with.
2. **Marketplace** is missing the gateway-side honesty story (Q8) and the marketplace-capture analysis (Q10). One-sided trust narratives weaken the page's claim to be a marketplace explainer.
3. **Job Pipelines** is missing per-pipeline pricing units (Q10) and trickle protocol specification (Q8). Pricing-unit absence in particular is a hole because the rest of the brief leans on it ("per pixel, per token, per second, per frame" appears in 4 of the 6 page briefs).

---

## 1. Network Design — `design.mdx`

| # | Reader question | Coverage | Where it lives | Notes |
|---|---|---|---|---|
| 1 | What is the Network in concrete terms? | Covered | Quote + Network Role | Strong opener |
| 2 | Protocol vs Network split | Covered | Network Role + Implementation diagram | Explicit |
| 3 | 2017 whitepaper vs running system | Covered | Network Evolution section + 2017→2026 mermaid | Exemplary answer |
| 4 | Why each property — what problem does it solve? | Partial | Design Properties (7 StyledSteps) | Each step ends with a "why" sentence but framed as "what the property is." Sharpen each step's last line to "this solves [X problem]" |
| 5 | Is it actually decentralised, or is there a hidden centre? | **Missing** | — | "No central operator," "permissionless" appear but the reader's actual fear (Livepeer Inc. veto, Foundation control, hosted single-point-of-failure) is not addressed |
| 6 | Who runs the network and what does each commit/earn? | Covered | Network Actors table at lines 280-316 | **Duplicated**: also appears as QuadGrid at lines 59-90. The table is the right answer; the QuadGrid is a teaser that overlaps |
| 7 | How can I extend the network beyond running a node? | **Missing** | — | BYOC mentioned in passing, governance mentioned in properties, but no section answers "how do I extend?" Link card to `/participation` is a hand-off that the page does not earn |
| 8 | What's verified, what's aspiration, what's the source? | Covered | Property Provenance table | Strong |
| 9 | Where do I go next as operator/builder/delegator/researcher? | Partial | Related Pages (4 cards) + QuadGrid CTAs | Not audience-routed. Researcher and builder paths in particular are unclear |
| 10 | How has the design evolved — stable, recent, coming? | Partial | Network Evolution covers 2017→2026 | "What's recent" (post-2023 Delta) and "what's coming" not framed; AI extension is mentioned as no-LIP but not as "recent" |

**Page-level issues**:
- **Network Actors duplication**: rendered once as QuadGrid (top), again as DynamicTableV2 (bottom). The QuadGrid is the lighter teaser; the table is the proper answer. Decision: keep the table; replace the QuadGrid with a one-paragraph intro that links to the table below.
- **Journey**: Quote → Role → Actors (×1) → Evolution → Properties → Decisions → Provenance → Implementation → Actors (×2) → Related. The double Actors creates a loop. Re-order to: Role → Evolution → Actors (single) → Properties → Decisions → Provenance → Implementation → Related.
- **Aim line** (frontmatter) reads: "What the network is. What it commits to. What it does not do." The page covers (1) and (2) well but does not answer "what it does not do" — i.e. what's *out* of Network scope. Add a one-paragraph "Out of scope" subsection or delete the third clause.

**Add to brief** (Q11 candidate): *"Where is the Network not yet decentralised in practice (Explorer hosting, leaderboard service, subgraph indexer, Pinata IPFS)?"* — this is the realistic version of Q5. Naming the dependencies that are not yet on-chain is the honest answer.

---

## 2. Core Mechanisms — `mechanisms.mdx`

| # | Reader question | Coverage | Where it lives | Notes |
|---|---|---|---|---|
| 1 | Gateway → orchestrator → result | Covered | Mechanism Map + walk through |  |
| 2 | How does a gateway find an orchestrator? | Covered | Orchestrator Discovery |  |
| 3 | What does an orchestrator advertise? | Covered | Capability Advertising (6-field table) | Strong |
| 4 | How does the gateway choose? | Covered | Session Selection (5 criteria) |  |
| 5 | How is a session opened, what state does it carry? | Partial | End of Session Selection | "Session opens by sending first segment with attached ticket" — but the *state the session carries* (negotiated price, ticket params, expiration, retry budget, segment counter) is not enumerated |
| 6 | What gets sent per segment, what comes back? | Partial | Job Dispatch (transports table) | Transports per workload class are listed but request/response payload (segment bytes + ticket + sender params + result + receipt) is not enumerated |
| 7 | How does payment work — ticket, win check, who validates? | Covered | Ticket Plumbing | Excellent — formula `H(sig, recipientRand) < winProb × 2^256` shown |
| 8 | When does the chain get involved? | Covered | Settlement Triggers (3 + 3) |  |
| 9 | What does a "round" mean for off-chain? | Covered | Round Heartbeat | Direct answer: "off-chain Network does not stop or slow down at round boundaries" |
| 10 | What happens when something fails? | Partial | Job Dispatch table has "Failure recovery" column | No consolidated failure section here — full answer lives on Job Pipelines page. Cross-link could be tighter |

**Page-level issues**:
- **Strongest journey of the 6**: Mechanism Map → 7 mechanisms in the same order. Reader cannot get lost.
- **Session state and segment payload (Q5, Q6)** are the only real gaps. Both are short additions: a mini-table for "what's in a session object" and a mini-table for "request payload / response payload" would close them.
- **Cross-page coordination (rounds, tickets)**: rounds are explained 3× across the IA (here, Architecture, Metrics) and tickets 2× (here and Marketplace). Each is from a different angle but a clear scope contract per page would prevent reader fatigue. Recommend: Mechanisms is the canonical home for *how rounds and tickets work*; Architecture explains *what locks/unlocks at the round*; Marketplace explains *why probabilistic tickets exist*; Metrics explains *what the round number on Explorer means*.

**No additions to brief** — coverage is the strongest of the 6.

---

## 3. Job Pipelines — `job-pipelines.mdx`

| # | Reader question | Coverage | Where it lives | Notes |
|---|---|---|---|---|
| 1 | What workloads runs today? | Covered | Workload Classes + Built-In Pipelines |  |
| 2 | Batch AI vs real-time AI | Covered | Workload Classes table + Real-Time AI section |  |
| 3 | Built-in pipelines, models/formats/codecs | Partial | Built-In Pipelines table (12 rows) | Lists pipelines and what they produce — but no model names (SDXL, Flux, Whisper variant?), no codec list (H.264, HEVC, AV1?), no format list (MP4, WebM?). Reader gets a gloss, not a spec |
| 4 | Job lifecycle from intake to settlement | Covered | Job Lifecycle (5 StyledSteps) |  |
| 5 | State machine | Covered | Job State Machine mermaid | Strong |
| 6 | What is BYOC, how does a pipeline get on the network? | Covered | BYOC Pipelines | Short but clear — names `/capability/register`, runtime registration, advertisement on next handshake |
| 7 | Real-time video-to-video frame movement | Covered | Real-Time AI sequence diagram | Strong |
| 8 | What is trickle, when does a workload need it? | Partial | Real-Time AI section | One paragraph on trickle ("logical service, not separate," pre-connect for sub-second). No explicit "what is trickle" subsection. Channel model, segment numbering, polling vs push not explained. Reader who wants protocol-level understanding has to read code |
| 9 | What can fail, how does it recover? | Covered | Failure Modes (5 rows) |  |
| 10 | How is each pipeline priced? | **Missing** | — | "Per pixel" mentioned for transcoding in passing. AI pricing units (per token? per inference? per second?) and real-time pricing units (per frame? per minute?) not enumerated. No "pricing unit" column in Built-In Pipelines |

**Page-level issues**:
- **Pricing-unit absence (Q10)** is the biggest hole. Add a "Pricing unit" column to Built-In Pipelines. Cross-link to Marketplace.
- **Trickle protocol (Q8)**: needs a sub-section "What is trickle" with channel model, segment numbering, the pre-connect mechanism. ~150 words. Currently ~50 words inline.
- **Built-in pipeline detail (Q3)**: add model and codec rows. If models change too fast for static docs, link to a generated reference page or to the `ai-runner` repo's pipeline registry.
- **BYOC (Q6)** is well-covered for a 1-paragraph answer but BYOC is a headline differentiator in the brief — would benefit from a small lifecycle diagram (developer packages → orchestrator registers → gateway discovers).
- **Journey**: Workload Classes → Lifecycle → State Machine → Built-In Pipelines → Real-Time AI → BYOC → Failure Modes. Sound order.

**Add to brief** (Q11 candidate): *"What's the maximum throughput per orchestrator session — how many concurrent jobs?"* — `MaxSessions = 10` (default, raised by `SetMaxSessions` or `AutoSessionLimit`) lives on the Mechanisms page. Operators reading Job Pipelines want capacity per session, not coordination plumbing.

---

## 4. Marketplace — `marketplace-model.mdx`

| # | Reader question | Coverage | Where it lives | Notes |
|---|---|---|---|---|
| 1 | What kind of market? | Covered | Market Shape | "Posted-price market for GPU compute." Why-not-auction explained |
| 2 | How do prices get set, where can I see them? | Partial | Market Shape table + Honesty Enforcement | "Posted prices, set by orchestrators" — yes. Where to *literally* see prices: not surfaced. `nyc.livepeer.com/orchestratorStats` exists (named on Metrics page) but not linked here |
| 3 | Work flow client→orchestrator, payment back | Covered | Work and Value Flow mermaid |  |
| 4 | What gets settled on-chain vs off-chain? | Covered | Settlement Boundary BorderedBox | Crystal clear |
| 5 | What's a probabilistic micropayment, why use them? | Covered | Probabilistic Micropayments | Strong |
| 6 | What's in a ticket, typical win probability? | Partial | Sequence diagram lists fields | Fields shown but **typical win probability** not stated. Reader cannot answer "1/1000? 1/100,000?" In the wild it's set so face value × winProb ≈ per-segment cost; tying that to a concrete number would help |
| 7 | What stops an orchestrator cheating? | Covered | Honesty Enforcement (3 mechanisms) |  |
| 8 | What stops a gateway cheating? | **Missing** | — | Honesty Enforcement is orchestrator-side only. Gateway-side ("refuse to redeem? fabricate? let deposit dry up mid-session?") is not addressed. Sender-side incentives missing |
| 9 | Is slashing real and active? | Covered | Tip in Honesty Enforcement | Direct: "dormant, Verifier role is `0x0`" |
| 10 | How does the marketplace stay decentralised in practice? | **Missing** | — | "No gatekeeper" stated. "What would capture look like and what prevents it" not analysed. Active set cap (100) not mentioned as a constraint. No reference to gateway concentration risk |

**Page-level issues**:
- **One-sided honesty story (Q8)**: the page says "the marketplace produces verifiable work without a central operator" but only analyses orchestrator misbehaviour. Adding a parallel "What stops a gateway cheating" section (with reserve drainage, redemption refusal patterns, ticket fabrication detection via signature/nonce, ... ) would balance it.
- **Marketplace capture (Q10)**: Add a closing section "Capture resistance" that names: active set cap of 100, the cost of acquiring 33% of stake (Nakamoto coefficient), gateway diversity (no single gateway dominates fee redemption), no gatekeeper for new orchestrators. Link to Decentralisation Metrics.
- **Where to see prices (Q2)**: link to `nyc.livepeer.com/orchestratorStats` and `Network Capabilities API` from this page directly — currently only mentioned indirectly via "discovery is multi-surface."
- **Ticket-field duplication**: Probabilistic Micropayments diagram lists ticket fields; Mechanisms Ticket Plumbing has the full 6-field table. Pick canonical home (Mechanisms — procedural detail) and have Marketplace focus on *why* probabilistic payments exist (economic shape).

**Add to brief** (Q11 candidate): *"Who buys on this marketplace today — is it real production traffic, or testnet usage?"* — analysts ask this constantly. Link to fee volume on Metrics page; name the gateways (Studio, Pipedream, etc.) where appropriate.

---

## 5. Architecture — `architecture.mdx`

| # | Reader question | Coverage | Where it lives | Notes |
|---|---|---|---|---|
| 1 | Architectural layers, what each owns | Covered | Architectural Layers (3 layers) |  |
| 2 | Same binary or different? | Covered | Inline in topology paragraph | Single sentence — could be a callout |
| 3 | What modes does `go-livepeer` support? | **Missing** | — | "Different modes" is mentioned but the modes (broadcaster, orchestrator, transcoder, redeemer, AI worker?) are never named. The config fields that distinguish them are never named. Operator-relevant blank |
| 4 | How do operators deploy in real life — single host, multi-host, separate signers/redeemers? | Partial | One sentence in topology paragraph | No multi-host topology diagram. Remote signer / redeemer roles not detailed. Pre-conditions for splitting (when to use a separate redeemer, when to use a remote signer) not given |
| 5 | Topology gateway → orchestrator → workers + what else | Covered | Network Topology mermaid | Strong |
| 6 | Traffic kinds, transports (HTTP, gRPC, RTMP, WHIP, trickle) | Covered | Traffic Planes (4 planes) |  |
| 7 | Gateway-orchestrator handshake, OrchestratorInfo | Partial | Off-Chain Coordination patterns | Names patterns; OrchestratorInfo payload not enumerated here. Mechanisms page has the 6-field Capability Advertising table — link from here, or echo a 3-field summary |
| 8 | How does off-chain reach chain — which contracts read/written, when? | Covered | On-Chain Anchor Contracts |  |
| 9 | Round transition effect — what locks/unlocks? | Partial | Round Lifecycle state diagram + brief prose | Specifics (parameter freeze, bond change blocks, reward eligibility window) live on Mechanisms Round Heartbeat. Architecture has the diagram but the lock/unlock list is thin |
| 10 | How does an outsider observe? | Covered | External Observability (3 surfaces) |  |

**Page-level issues**:
- **Mode taxonomy (Q3)** is a meaningful operator-side blank. Add a small subsection "go-livepeer modes" listing modes (broadcaster, orchestrator, transcoder, redeemer, AI worker) and the config flag that selects each (`-broadcaster`, `-orchestrator`, etc.).
- **Multi-host topology (Q4)**: add a second mermaid diagram showing single-host → multi-host with remote signer + redeemer. Currently this sits in only-the-Orchestrators-tab, but a researcher reading About Network Architecture wants to see it too.
- **Section order**: Off-Chain Coordination after Round Lifecycle reads slightly backwards — Coordination is the every-job thing, Round Lifecycle is the once-per-day thing. Either move Off-Chain Coordination before Round Lifecycle, or reframe Round Lifecycle as "the once-per-round overlay on coordination."
- **Round explained 3×** across the IA (Mechanisms, Architecture, Metrics). Each angle is justified but adding cross-page nav cards saying "see Mechanisms for procedural detail," "see Metrics for what `Current Round` shows on Explorer" would prevent the reader feeling repeated.

**Add to brief** (Q11 candidate): *"What state survives a node restart, and what doesn't?"* — operator-relevant. Tickets in flight, pool of candidate orchestrators, suspension state — all are non-obvious from current docs.

---

## 6. Network Metrics — `metrics.mdx`

| # | Reader question | Coverage | Where it lives | Notes |
|---|---|---|---|---|
| 1 | What does each thing on Explorer mean? | Covered | Whole page is structured this way | Strong reference |
| 2 | What's a round, how do I read network health right now? | Partial | Round Status section | Round itself well-explained. "How do I read health right now" not framed as how-to. Reader has to compose: low fees + low reward call ratio + low active set → unhealthy |
| 3 | Compute FDV, market cap, P/S ratio | Covered | Economic Metrics | FDV formula, P/S formula explicit |
| 4 | Inflation rate, participation feedback loop | Covered | Economic Metrics + feedback-loop mermaid | Strong |
| 5 | Decentralisation — orchestrator count, concentration, Nakamoto | Covered | Decentralisation Metrics |  |
| 6 | Orchestrator list columns; reward cut vs fee cut | Covered | Orchestrator Columns | Disambiguation explicit |
| 7 | How is yield calculated; what assumptions? | Partial | Staking Metrics | Lists Forecasted Yield + Yield Assumptions but offloads formula to a separate reference. Metrics page promises "what every number means" — yield should at least sketch the formula here |
| 8 | Performance leaderboard score, comparison | Covered | Performance Leaderboard |  |
| 9 | Treasury balance, inflow rate, ceiling | Covered | Treasury and Governance | Self-limiting mechanism explained |
| 10 | Where do I read each metric — Explorer, subgraph, on-chain, Dune? | Covered | Endpoints BorderedBox + per-metric provenance in tables | Excellent |

**Page-level issues**:
- **`{/* REVIEW */}` comments still in (3 instances)**: lines 235, 460, 465, 495. These need pre-merge cleanup (active set cap, treasury reward cut rate, treasury balance ceiling).
- **Network health composition (Q2)**: add a "How to read network health" 4-bullet at the top of Round Status: (1) fees in current round vs 7d avg; (2) reward call ratio; (3) active orchestrator count vs cap; (4) treasury inflows vs ceiling.
- **Yield formula (Q7)**: at minimum, sketch the formula inline (LPT_yield + ETH_yield, where LPT_yield = inflation × stake_share × (1 - rewardCut) × (1 - treasuryCut), etc.). Currently the reader is bounced to a separate reference, which contradicts the page's "every metric defined here" claim.
- **Endpoints block placement**: it's at the end and labelled "for analysts and researchers." Consider a short reference at the top ("If you want raw data: see Endpoints below") so a programmer doesn't have to scroll past 10 sections to find URLs.
- **Performance Leaderboard placement**: sits between Gateway Columns and Treasury. It's a supply-side reliability story; would read better immediately after Orchestrator Columns.

**Add to brief** (Q11 candidate): *"What does a 'healthy' network look like — what are the typical/median values today?"* — benchmarking question. Reader knows what a metric means but not whether the current value is good.

---

## §5 — Critique of the question list itself

### What to remove
**Nothing.** All 60 questions track to a real reader concern. Borderline candidates I considered and rejected:
- Marketplace Q9 (slashing) — answered in one Tip, but it's a constant question and worth keeping.
- Architecture Q10 (outside observability) — overlaps with Metrics page, but the angle is different (surfaces vs values).

### What to add (one per page where useful)

| Page | Proposed Q11 | Why |
|---|---|---|
| Design | "Where is the Network *not yet* decentralised in practice (Explorer hosting, leaderboard service, subgraph indexer, IPFS pinning)?" | Realistic pair to Q5. Honest answer to "is this decentralised?" |
| Mechanisms | (none — coverage strongest of the 6) | — |
| Job Pipelines | "What's the maximum throughput per orchestrator session — how many concurrent jobs?" | Capacity question. `MaxSessions` is the answer; should live on this page, not buried in mechanisms |
| Marketplace | "Who buys on this marketplace today — is it real production traffic, or testnet usage?" | Analyst question. Often arrives as the *first* question, not a follow-up |
| Architecture | "What state survives a node restart, and what doesn't?" | Operator-relevant. Currently inferable only from code |
| Metrics | "What does a healthy network look like — what are typical/median values today?" | Benchmarking. Reader knows the metric, doesn't know whether the value is good |

### Cross-page coordination

Three concepts are explained on multiple pages without an explicit scope contract:

| Concept | Pages that explain it | Recommended canonical home | Other pages |
|---|---|---|---|
| Rounds | Mechanisms (Round Heartbeat), Architecture (Round Lifecycle), Metrics (Round Status) | Mechanisms — procedural detail | Architecture: lock/unlock effect on running nodes. Metrics: what the round number shown on Explorer means |
| Tickets | Mechanisms (Ticket Plumbing), Marketplace (Probabilistic Micropayments) | Mechanisms — fields and validation | Marketplace: economic *why* (only) |
| Slashing dormant | Design (mentioned), Marketplace (explained), Mechanisms (not), Architecture (not) | Marketplace — Honesty Enforcement | Design: one-line cross-link with link to Marketplace |

A single sentence at the top of each non-canonical section ("For procedural detail see [canonical page]") would prevent reader fatigue.

---

## §6 — IA cleanup: orphaned files

The target IA has 6 pages. The directory has 9 files. The 3 extras are not in scope for the brief but block IA execution:

| File | Status | Recommendation |
|---|---|---|
| `interfaces.mdx` | Orphaned by target IA. Currently referenced from Job Pipelines and Architecture as "Network Interfaces" link cards | Audit content. Likely candidate for **merge into Architecture** (transports, reachable surfaces) and **Developers tab** (consumer-facing API specs). Then delete |
| `observability.mdx` | Orphaned by target IA. Referenced from Architecture and Metrics | Content overlaps with Architecture's External Observability section + Metrics' Endpoints block. **Merge into Architecture** (one-paragraph summary already there; expand if needed). Then delete |
| `participation.mdx` | Orphaned by target IA. Referenced from Design as "Participation and SPEs" link card | This is the BYOC + SPE + governance extension story. Q7 of Design ("how do I extend the network?") is the brief's pointer to this content. **Decision needed**: either (a) make this a **7th page in the IA** ("Participation"), or (b) absorb a one-section summary into Design with cross-links to Developers, Treasury, and SPE pages |

A 7th page is the cleaner answer if the BYOC + SPE + governance extension story is substantial. Absorbing into Design works if the answer is one section pointing to other tabs.

Recommendation: **promote `participation.mdx` to the IA as a 7th page** (the brief's Q7 of Design assumes this content exists). Then delete `interfaces.mdx` and `observability.mdx` after merging their unique content into Architecture.

---

## §7 — Pages by user-journey strength

Ranked weakest → strongest journey/reader explanation:

1. **Design** — strongest content, weakest journey. Network Actors duplication, weak audience routing, missing decentralisation reality-check, missing extension paths.
2. **Marketplace** — strong opening but one-sided trust narrative (orchestrator-only); marketplace-capture analysis missing.
3. **Architecture** — diagrams and tables are strong; section order is slightly backwards (Round Lifecycle before Off-Chain Coordination); modes and multi-host deployment are blanks.
4. **Job Pipelines** — clean spine but pricing-unit absence and trickle thinness leave readers hungry.
5. **Metrics** — reference page; not designed to be read top-to-bottom but each section closes its own loop. Endpoints block is exemplary.
6. **Core Mechanisms** — strongest journey of the 6. Mechanism Map → walk through 7 mechanisms in order. Reader cannot get lost.

---

## §8 — Top fixes ranked by impact

Ordered by reader value × edit cost. P0 = high value, low cost; P1 = high value, moderate cost; P2 = moderate value or higher cost.

| # | Fix | Page | Cost | Priority |
|---|---|---|---|---|
| 1 | Add gateway-side honesty section (Q8 Marketplace) | Marketplace | ~150 words + bullets | **P0** |
| 2 | Add pricing-unit column to Built-In Pipelines (Q10 Job Pipelines) | Job Pipelines | Add 1 column to existing table | **P0** |
| 3 | Resolve `{/* REVIEW */}` comments (active set cap, treasury rates, ceiling) | Metrics | Look up + paste 3 numbers | **P0** |
| 4 | De-duplicate Network Actors (remove QuadGrid teaser) | Design | Edit; cross-check link card targets | **P0** |
| 5 | Add "Where is the Network not yet decentralised?" subsection (Q5 Design) | Design | ~200 words | **P0** |
| 6 | Add `go-livepeer` modes subsection (Q3 Architecture) | Architecture | ~120 words + small table | **P0** |
| 7 | Add marketplace-capture closing section (Q10 Marketplace) | Marketplace | ~200 words + cross-links | **P1** |
| 8 | Promote `participation.mdx` to 7th IA page (Q7 Design) | IA-level | Cross-page; nav.json edit | **P1** |
| 9 | Add trickle protocol subsection (Q8 Job Pipelines) | Job Pipelines | ~150 words | **P1** |
| 10 | Add "How to read network health" bullet block at top of Round Status (Q2 Metrics) | Metrics | ~80 words | **P1** |
| 11 | Sketch yield formula inline (Q7 Metrics) | Metrics | ~120 words | **P1** |
| 12 | Re-order Architecture: Coordination before Round Lifecycle | Architecture | Section move | **P1** |
| 13 | Add multi-host topology diagram (Q4 Architecture) | Architecture | New mermaid + ~150 words | **P2** |
| 14 | Sharpen each Design Property's "this solves [X]" framing (Q4 Design) | Design | Re-write closing line of 7 StyledSteps | **P2** |
| 15 | Merge + delete `interfaces.mdx` and `observability.mdx` | IA-level | Content audit + merge + delete | **P2** |
| 16 | Add session state and segment payload mini-tables (Q5, Q6 Mechanisms) | Mechanisms | 2× small tables | **P2** |
| 17 | Add typical win-probability number to Marketplace (Q6) | Marketplace | One sentence + source citation | **P2** |
| 18 | Add audience-routed "where to next" block on Design (Q9) | Design | Small grid component | **P2** |

---

## §9 — Open questions for human decision

1. **Promote `participation.mdx` to a 7th IA page, or absorb into Design?** Brief assumes 6; Q7 of Design assumes the content exists. Decision affects nav.json + cross-link strategy.
2. **Where to put go-livepeer mode taxonomy?** Architecture Q3 wants names + flags. Could live on Architecture, on a Reference page, or on Orchestrators tab. Reader of About Network expects the names *here*.
3. **How much pricing-unit detail belongs on Job Pipelines vs Marketplace?** Recommendation: Job Pipelines lists per-pipeline units; Marketplace explains why per-X pricing is the model (and links).
4. **Should slashing dormant be its own callout pattern across the IA, or only Marketplace's job?** Recommendation: only Marketplace (Honesty Enforcement). Other pages cross-link.

---

## Artefacts

| File | Type | Purpose |
|---|---|---|
| `workspace/thread-outputs/about/network-ia-question-audit-2026-05-06.md` | This report | Coverage audit + recommendations |

## Outcome evaluation

**Met.** Coverage audit complete: 60 questions mapped (41 covered, 14 partial, 5 missing). Question-list critique complete: 5 additions proposed, 0 removals. Journey/clarity ranking complete. Top 18 fixes prioritised P0/P1/P2. Three IA-level cleanup decisions surfaced.

Next step is human review and choice of which P0/P1 fixes to execute first.
