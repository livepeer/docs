# Orchestrator Documentation Plan

Consolidated from: `product-thinking-review.md`, `orchestrator-tab-review-v3.md`, `product-thinking-handoff.md`, and in-session analysis.

---

## Part 1: Consolidated Learnings

### Decisions Made

1. **Quickstart = smoke test only.** Verifies hardware works. Does NOT earn. Two paths: video quickstart (20-30 min, off-chain) and AI quickstart (35-65 min, HuggingFace model). BYOC CPU as no-GPU smoke test option.
2. **Setup = technical readiness.** 7-page sequential flow. Covers all 3 node modes (video/AI/dual) via tabs. All OS (Linux primary, Docker for others). On-chain as production target. Setup does NOT equal earning.
3. **Earning is a guides concern.** Pricing, demand, delegation, competitive positioning are business decisions in guides, not setup steps.
4. **Dual mode is the default production configuration.** Most active operators run both video and AI. "Combined mode" and "hybrid" are deprecated terms - use "dual mode" canonically.
5. **Staking & Rewards + Payments & Pricing merge** into "Staking & Earning" (one section for all money).
6. **New section: Config & Optimisation.** Post-setup tuning: pricing-strategy, dual-workload-setup, session-and-capacity, ai-model-management, reward-call-tuning.
7. **Section order locked**: Operator Considerations → Deployment Details → Workloads & AI → Staking & Earning → Config & Optimisation → Monitoring & Tools → Advanced Operations → Roadmap & Funding → Tutorials.
8. **Glossary complete.** Three deployment axes: node mode (Video/AI/Dual), deployment type (Solo/Pool worker/Pool operator/O-T split/Siphon), scale (Single GPU/Multi-GPU/Fleet). Operational mode asymmetry documented (gateways have genuine off-chain production path; orchestrators do not).
9. **Pool worker is NOT a quickstart.** Joining a pool requires a social relationship (days-weeks to find a pool operator). Technical setup is fast once you have pool access.
10. **AI is locally testable.** Same pattern as video: orchestrator + gateway on same machine, off-chain, curl to verify. No on-chain registration needed for local test.
11. **Gateway-orchestrator crossover is real.** Many operators run both roles. Tutorials should cover both sides. A combined operations guide belongs in Advanced Operations.
12. **Imported gateway tutorials should be replaced** with orchestrator-specific tutorials mapped to job stories J1, J2, J6.
13. **Navigator routes by job story situation**, not by persona or section sequence.

### Terminology

| Term | Canonical usage | Deprecated alternatives |
|------|----------------|----------------------|
| Dual mode | Node mode: running video + AI on one node | "Combined mode" (ambiguous), "hybrid" (informal) |
| Node mode | Video / AI / Dual | "Workload type", "node type" |
| Deployment type | Solo / Pool worker / Pool operator / O-T split / Siphon | "Setup type" |
| Operational mode (gateways only) | On-chain / Off-chain | "Payment mode" (per user feedback: operational, not payment) |
| Active set | Top orchestrators by bonded stake eligible for video work | N/A |
| Reward call | Calling Reward() each round to claim LPT | N/A |
| PM ticket | Probabilistic micropayment lottery ticket (payment mechanism) | N/A |
| AI runner | Container executing AI inference (livepeer/ai-runner or Ollama) | N/A |
| aiModels.json | Config file defining AI pipelines, models, and pricing | N/A |

### Job Stories (Canonical)

| # | Situation | Motivation | Outcome |
|---|-----------|-----------|---------|
| J1 | GPU sitting idle | Earn crypto from compute | Offset hardware costs |
| J2 | Already run video, AI demand growing | Add AI to existing node | Earn from both without second machine |
| J3 | Have significant LPT | Maximise yield | Compound position via rewards + delegation |
| J4 | Company needs GPU compute under SLAs | Operate commercial infrastructure | Earn service fees from products |
| J5 | Want to influence open compute | Operate with governance weight | Vote on protocol decisions |
| J6 | Have 24GB+ GPU, limited LPT | Earn from AI without active set | Start earning immediately via capability |
| J7 | Something broke | Diagnose and fix quickly | Minimise missed rewards and lost jobs |

### Evidence Gaps (Need SME Verification)

- Current active set size (historically top-100, may have changed)
- Minimum VRAM for dual-mode coexistence (video + AI on same card)
- Current market pricing ranges for video and AI
- Whether AIServiceRegistry registration is sufficient for gateway discovery
- NVIDIA driver patch safety and current compatibility
- Ollama model ID mapping accuracy (Ollama vs HuggingFace IDs)
- Whether `-autoAdjustPrice` is production-stable or experimental
- Current gas cost ranges for reward calls and ticket redemption on Arbitrum

### Opportunity Scores (Top Gaps)

| Score | Opportunity | Status |
|-------|-----------|--------|
| 72 | "I run video but can't add AI" (hybrid bridge) | dual-workload-setup.mdx created |
| 72 | "Pricing is confusing" | pricing-strategy.mdx is a STUB |
| 54 | "Can't tell which path earns more" | operator-rationale exists but needs earnings modelling |
| 45 | "Setup looks complex" | quickstart path designed |
| 40 | "Don't know which AI models are worth running" | model-vram-reference needs demand data |

---

## Part 2: Guides IA Plan (Pages Needed Per Section)

### 1. Operator Considerations → "Should I operate?"

| Page | Purpose | Serves |
|------|---------|--------|
| **operator-rationale** | Financial viability: costs vs revenue, break-even, decision matrix by path, three viability questions | J1, J3 |
| **business-case** | Commercial orchestrator model: SLAs, per-gateway pricing, service fee economics, "infrastructure provider" mental model | J4 |
| **protocol-influence** | Governance weight, sovereign compute thesis, what gets voted on, aligned actor case | J5 |

### 2. Deployment Details → "What do I need and which path?"

| Page | Purpose | Serves |
|------|---------|--------|
| **setup-options** | Deployment type decision: solo/pool/O-T split/siphon comparison table | J1 |
| **requirements** | Hardware, software, network, blockchain prerequisites. GPU→capability mapping. Tiered: minimum→recommended→production | J1 |
| **orchestrator-transcoder-setup** | O-T split architecture: when, how, multi-transcoder, monitoring | J4 |
| **siphon-setup** | Lightweight transcoder routing to upstream orchestrator | J1 (niche) |
| **join-a-pool** | Pool evaluation, connection, earnings mechanics, active pools | J1 |

### 3. Workloads & AI → "What jobs do I run?"

| Page | Purpose | Serves |
|------|---------|--------|
| **workload-landscape** | Market overview: video/AI/realtime/BYOC comparison. Demand levels, earning potential, entry barriers. Links to tools.livepeer.cloud | J1, J6 |
| **video-transcoding-operations** | Segment pipeline, NVENC/NVDEC, codec support, NVENC session limits, per-pixel pricing (sell side) | J1 |
| **ai-inference-operations** | AI worker/runner architecture, aiModels.json overview, model lifecycle, 10 pipeline types, on-chain registration | J2, J6 |
| **diffusion-pipeline-setup** | text-to-image, image-to-image, upscale, image-to-video. Docker-compose, aiModels.json, model selection, optimisation flags | J6 |
| **llm-pipeline-setup** | Ollama architecture (distinct from diffusion). 8GB VRAM entry point. Model ID mapping | J6 |
| **realtime-ai-setup** | Live video-to-video (Cascade). WebRTC, ComfyStream, -livePaymentInterval, latency requirements | J2 |
| **audio-and-vision-pipelines** | audio-to-text (Whisper), text-to-speech, image-to-text, SAM2. Niche but growing | J6 |
| **model-demand-reference** | VRAM per model family + demand data. "What fits AND what earns." | J6 |

### 4. Staking & Earning → "How do I earn?" (MERGED)

| Page | Purpose | Serves |
|------|---------|--------|
| **earning-model** | Complete picture: two revenue streams (ETH fees + LPT inflation), video vs AI profiles, profitability threshold | J1, J3 |
| **reward-mechanics** | Round-based rewards, calling Reward(), gas costs, auto vs manual, missed round impact, fee distribution (cuts) | J3 |
| **payment-receipt** | PM ticket lifecycle (receiver side), winning detection, redemption, gas batching, "probabilistic" explanation | J3 |
| **growing-delegation** | Why delegation matters, setting competitive cuts, reputation building, Explorer profile, self-stake signalling | J3 |
| **governance-participation** | How to vote (LIPs, Explorer), quorum, delegator override, SPE proposals, governance as delegation signal | J5 |

### 5. Config & Optimisation → "How do I tune?" (NEW)

| Page | Purpose | Serves |
|------|---------|--------|
| **pricing-strategy** | Sell-side pricing: -pricePerUnit, AI pricing in aiModels.json, -pricePerGateway, -autoAdjustPrice, competitive positioning | J3, J4 |
| **dual-mode-configuration** | Adding AI to video (or vice versa), VRAM coexistence, warm model strategy, when to split to O-T | J2 |
| **capacity-planning** | -maxSessions, VRAM budgeting, NVENC limits, livepeer_bench, CPU vs GPU, when to add hardware | J1 |
| **ai-model-management** | Warm/cold strategy, VRAM allocation, model rotation, SFAST/DEEPCACHE, demand-driven selection | J6 |
| **reward-call-tuning** | Gas economics, profitability threshold calculation, timing strategies, missed round alerting | J3 |

### 6. Monitoring & Tools → "How do I keep it running?"

| Page | Purpose | Serves |
|------|---------|--------|
| **operator-toolbox** | Tools landscape: Explorer, tools.livepeer.cloud, livepeer_cli, community tools, diagnostic endpoints | J7 |
| **explorer-operations** | Day-to-day Explorer use: profile, cuts, delegators, performance, round history, competitor comparison | J3, J7 |
| **metrics-and-alerting** | Prometheus setup, key metrics, Grafana dashboards, alert rules (missed rewards, saturation, OOM) | J7 |
| **troubleshooting** | Symptom-based: no video jobs (7 checks), no AI jobs (5 checks), OOM, missed rewards, NVENC limit, networking. Escalation path. | J7 |

### 7. Advanced Operations → "How do I scale?"

| Page | Purpose | Serves |
|------|---------|--------|
| **gateway-relationships** | How gateways discover/select orchestrators, optimising for selection, commercial relationships, AI service registry | J4 |
| **running-a-pool** | Pool architecture, worker management, off-chain fee distribution, pool economics, communication | J4 |
| **fleet-operations** | Multi-GPU, multi-machine, fleet deployment, config management, cost optimisation, geographic distribution | J4 |
| **combined-gateway-orchestrator** | Running both roles: architecture, port allocation, self-routing, monitoring both, pricing alignment | J4 (cross-role) |

### 8. Roadmap & Funding → "What support exists?"

| Page | Purpose | Serves |
|------|---------|--------|
| **funding-and-support** | SPE grants, AI Video Startup Programme, treasury proposals, community support channels | Retention |
| **operator-showcase** | Active operator profiles, hardware, earnings, operating model. Social proof. | Advocacy |

### 9. Tutorials → "Show me"

| Page | Purpose | Serves |
|------|---------|--------|
| **zero-to-first-reward** | End-to-end video: install → configure → stake → activate → test → reward. Everything in one page. | J1 |
| **ai-earning-quickstart** | End-to-end AI: install → AI runner → aiModels.json → register → test. No active set needed. | J6 |
| **add-ai-to-video-node** | For existing video operators: the delta. What to ADD, what NOT to change. VRAM check. | J2 |
| **full-ai-pipeline-tutorial** | Gateway + orchestrator + HuggingFace model. Both sides. Complete request lifecycle. | J2, J4 |
| **realtime-ai-tutorial** | Live video-to-video: orchestrator + gateway + ComfyStream. Stream in, transformed stream out. | J2 |
| **byoc-cpu-smoke-test** | Adapted from gateway BYOC tutorial. No GPU required. Proves framework works. | J1 |

**Total: 44 pages across 9 sections**

---

## Part 3: Current Page Analysis

### Methodology

For each existing page in guides and resources:
- (a) Where does its information belong in the Part 2 plan?
- (b) Does it meet the needs of its target page in Part 2?
- (c) Decision: keep as-is / rename / split / merge / deprecate

### 3a. Operator Considerations

| Current page | Lines | Maps to (Part 2) | Meets needs? | Decision |
|-------------|-------|------------------|-------------|----------|
| operator-rationale.mdx | 439 | operator-rationale | Partially. Decision matrix exists but buried. Missing earnings modelling. | **KEEP + UPDATE** - add scannable summary at top, add earnings estimation |
| business-case.mdx | 388 | business-case | Yes. Well-scoped. | **KEEP** |
| protocol-influence.mdx | 302 | protocol-influence | Yes. Strong standalone page. | **KEEP** |

### 3b. Deployment Details

| Current page | Lines | Maps to (Part 2) | Meets needs? | Decision |
|-------------|-------|------------------|-------------|----------|
| setup-options.mdx | 266 | setup-options | Partially. Uses "combined mode" terminology. Needs dual-mode framing update. | **KEEP + UPDATE** - terminology, add dual as default |
| requirements.mdx | 480 | requirements | Yes. Comprehensive. | **KEEP** |
| orchestrator-transcoder-setup.mdx | 375 | orchestrator-transcoder-setup | Yes. | **KEEP** |
| siphon-setup.mdx | 558 | siphon-setup | Yes. | **KEEP** |
| join-a-pool.mdx | 341 | join-a-pool | Yes. | **KEEP** |
| new-join-a-pool.mdx | 370 | join-a-pool | Rewrite in progress. | **RESOLVE** - pick one, deprecate other |
| dual-workload-setup.mdx | 410 | dual-mode-configuration (Config section) | Content is correct but page belongs in Config & Optimisation, not Deployment | **MOVE** nav reference to Config & Optimisation |
| x-deprecated/benchmarking.mdx | ~285 | capacity-planning (Config section) | Partial - has livepeer_bench content needed for capacity-planning | **ABSORB** content into new capacity-planning page |
| x-deprecated/session-limits.mdx | ~219 | capacity-planning (Config section) | Partial - has -maxSessions content needed for capacity-planning | **ABSORB** content into new capacity-planning page |

### 3c. Workloads & AI

| Current page | Lines | Maps to (Part 2) | Meets needs? | Decision |
|-------------|-------|------------------|-------------|----------|
| job-types.mdx | 346 | workload-landscape | Partially. Good overview but missing demand/earnings data. | **KEEP + UPDATE** - rename to workload-landscape, add demand context |
| video-transcoding.mdx | 513 | video-transcoding-operations | Yes. | **KEEP** (consider rename) |
| ai-workloads-guide.mdx | 483 | ai-inference-operations | Partially. Missing "already running video?" bridge and low-LPT AI entry callout. | **KEEP + UPDATE** - add bridge accordion, add J6 value prop |
| batch-ai-setup.mdx | 915 | diffusion-pipeline-setup + llm-pipeline-setup | Contains both. LLM section uses different architecture (Ollama). | **SPLIT** - extract LLM content into llm-pipeline-setup.mdx. Rename remainder to diffusion-pipeline-setup. |
| realtime-ai-setup.mdx | 590 | realtime-ai-setup | Yes. | **KEEP** |
| model-vram-reference.mdx | 663 | model-demand-reference | Partially. Has VRAM data but not demand data. | **KEEP + UPDATE** - rename, add demand/earnings context |

**Missing pages**: audio-and-vision-pipelines (currently buried in batch-ai-setup), llm-pipeline-setup (currently buried in batch-ai-setup)

### 3d. Staking & Rewards (current) → Staking & Earning (target)

| Current page | Lines | Maps to (Part 2) | Meets needs? | Decision |
|-------------|-------|------------------|-------------|----------|
| earnings.mdx | 336 | earning-model | Partially. Mechanistic, not strategic. | **KEEP + UPDATE** - rename to earning-model, add strategy framing |
| rewards-and-fees.mdx | 436 | reward-mechanics | Yes. | **KEEP** (consider rename) |
| attracting-delegates.mdx | 319 | growing-delegation | Yes. | **KEEP** (consider rename) |
| governance.mdx | 364 | governance-participation | Yes but overlaps with protocol-influence. | **KEEP** - differentiate clearly: this = mechanics, protocol-influence = motivation |

### 3e. Payments & Pricing (current) → merges into Staking & Earning

| Current page | Lines | Maps to (Part 2) | Meets needs? | Decision |
|-------------|-------|------------------|-------------|----------|
| payment-flow.mdx | 63 | payment-receipt | STUB. No content. | **WRITE** with structured outline. Rename to payment-receipt. |
| pricing-strategy.mdx | 63 | pricing-strategy (Config section) | STUB. No content. Belongs in Config & Optimisation, not earnings. | **MOVE** nav to Config & Optimisation. **WRITE** with structured outline. |
| payments.mdx | 404 | merges with payment-receipt or stays as operational ref | Needs evaluation against payment-receipt scope. | **EVALUATE** - may merge with payment-receipt or keep as operational complement |

### 3f. Monitoring & Tools

| Current page | Lines | Maps to (Part 2) | Meets needs? | Decision |
|-------------|-------|------------------|-------------|----------|
| tools.mdx | 360 | operator-toolbox | Yes. | **KEEP** (consider rename) |
| explorer-guide.mdx | 336 | explorer-operations | Yes. | **KEEP** (consider rename) |
| metrics-monitoring.mdx | 462 | metrics-and-alerting | Yes. | **KEEP** (consider rename) |
| troubleshooting.mdx | 500 | troubleshooting | Yes. Add symptom quick-nav at top. | **KEEP + UPDATE** |

### 3g. Advanced Operations

| Current page | Lines | Maps to (Part 2) | Meets needs? | Decision |
|-------------|-------|------------------|-------------|----------|
| run-a-pool.mdx | 338 | running-a-pool | Yes. | **KEEP** |
| gateways-orchestrators.mdx | 335 | gateway-relationships | Yes. Rename for clarity. | **KEEP + RENAME** |
| large-scale-operations.mdx | 284 | fleet-operations | Yes. | **KEEP** |

**Missing**: combined-gateway-orchestrator.mdx (cross-role operations)

### 3h. Roadmap & Funding

| Current page | Lines | Maps to (Part 2) | Meets needs? | Decision |
|-------------|-------|------------------|-------------|----------|
| operator-support.mdx | 57 | funding-and-support | STUB. | **WRITE** when SPE details available |
| orchestrator-showcase.mdx | 48 | operator-showcase | STUB. | **WRITE** when operator profiles available |

### 3i. Tutorials

| Current page | Lines | Maps to (Part 2) | Meets needs? | Decision |
|-------------|-------|------------------|-------------|----------|
| imported-tutorial-1-byoc-cpu-pipeline.mdx | 51 | byoc-cpu-smoke-test | Gateway-focused import. Not orchestrator. | **REPLACE** with orchestrator-focused BYOC smoke test |
| imported-tutorial-2-offchain-transcoding-test.mdx | 47 | zero-to-first-reward | Minimal import. | **REPLACE** with full orchestrator tutorial |
| imported-tutorial-3-go-production.mdx | 47 | zero-to-first-reward | Minimal import. | **REPLACE** with full orchestrator tutorial |
| byoc-cpu-tutorial.mdx | 612 | byoc-cpu-smoke-test | Good content but gateway-framed. | **ADAPT** for orchestrator perspective |

**Missing**: ai-earning-quickstart, add-ai-to-video-node, full-ai-pipeline-tutorial, realtime-ai-tutorial

### 3j. Resources

| Current page | Lines | Maps to (Part 2) | Meets needs? | Decision |
|-------------|-------|------------------|-------------|----------|
| faq.mdx | 723 | reference | Yes. Complete. | **KEEP** |
| glossary.mdx | 300+ | reference | Yes. Complete. | **KEEP** |
| community-guides.mdx | 150 | reference | Yes. | **KEEP** |
| community-pools.mdx | 34 | reference | STUB. Needs pool data. | **KEEP + UPDATE** when data available |
| gpu-support.mdx | 158 | reference | Yes. | **KEEP** |
| cli-flags.mdx | 155 | reference | Yes. | **KEEP** |
| arbitrum-rpc.mdx | 101 | reference | Yes. | **KEEP** |
| arbitrum-exchanges.mdx | 99 | reference | Yes. | **KEEP** |

---

## Part 4: Gap Analysis

### Content that needs writing (by priority)

| Priority | Page | Section | Source material | Effort |
|----------|------|---------|----------------|--------|
| **P0** | pricing-strategy | Config & Optimisation | v1 set-pricing.mdx, gateway pricing-strategy (sell-side mirror) | Medium |
| **P0** | payment-receipt | Staking & Earning | gateway payment-guide (receiver perspective), PM documentation | Medium |
| **P0** | capacity-planning | Config & Optimisation | Absorb from deprecated benchmarking + session-limits | Medium |
| **P1** | llm-pipeline-setup | Workloads & AI | Extract from batch-ai-setup (Ollama sections) | Small |
| **P1** | ai-model-management | Config & Optimisation | Extract operational content from ai-workloads-guide + batch-ai-setup | Medium |
| **P1** | combined-gateway-orchestrator | Advanced Operations | New content - architecture, ports, self-routing | Medium |
| **P1** | audio-and-vision-pipelines | Workloads & AI | Extract from batch-ai-setup (Whisper, SAM2, TTS sections) | Small |
| **P2** | reward-call-tuning | Config & Optimisation | Extract from rewards-and-fees + new gas economics analysis | Small |
| **P2** | zero-to-first-reward tutorial | Tutorials | Synthesise from setup pages | Large |
| **P2** | ai-earning-quickstart tutorial | Tutorials | Synthesise from AI setup pages | Large |
| **P2** | add-ai-to-video-node tutorial | Tutorials | From dual-workload-setup + ai-workloads-guide | Medium |
| **P3** | full-ai-pipeline-tutorial | Tutorials | New - covers gateway + orchestrator + model | Large |
| **P3** | realtime-ai-tutorial | Tutorials | From realtime-ai-setup + gateway routing | Large |
| **P3** | byoc-cpu-smoke-test | Tutorials | Adapt byoc-cpu-tutorial.mdx | Small |
| **P3** | funding-and-support | Roadmap & Funding | SPE documentation, treasury process | Medium |
| **P3** | operator-showcase | Roadmap & Funding | Operator profiles, Explorer data | Medium |

### Content that needs updating (by priority)

| Priority | Page | What to update |
|----------|------|---------------|
| **P0** | operator-rationale | Add scannable summary at top, earnings estimation section |
| **P0** | ai-workloads-guide | Add "Already running video?" bridge accordion, add J6 low-LPT callout |
| **P1** | setup-options | Update "combined mode" → "dual mode" terminology, reframe with dual as default |
| **P1** | job-types / workload-landscape | Add demand/earnings context, rename |
| **P1** | model-vram-reference | Add demand data, rename to model-demand-reference |
| **P1** | earnings | Add strategic "how to earn more" framing, rename to earning-model |
| **P2** | troubleshooting | Add symptom quick-nav index at top |
| **P2** | gateways-orchestrators | Rename to gateway-relationships |

### Structural changes needed

| Change | Type | Detail |
|--------|------|--------|
| Merge Staking & Rewards + Payments & Pricing | Nav | → "Staking & Earning" |
| Create Config & Optimisation section | Nav + dir | Move pricing-strategy + dual-workload-setup here, create new stubs |
| Resolve Dep/New subgroups | Nav | Remove all migration scaffolding |
| Resolve new-join-a-pool vs join-a-pool | File | Pick one, deprecate other |
| Split batch-ai-setup | File | Extract LLM + audio/vision into separate pages |
| Move dual-workload-setup | Nav | From Deployment Details to Config & Optimisation |
| Move pricing-strategy | Nav | From Payments to Config & Optimisation |
| Replace imported tutorials | File | Deprecate imports, create orchestrator-specific stubs |

---

## Part 5: Migration Plan

### Phase 1: Nav cleanup (no content changes)
1. Remove all Dep/New subgroups from Orchestrators tab
2. Implement 9-section order
3. Merge Staking & Rewards + Payments & Pricing → Staking & Earning
4. Create Config & Optimisation section in nav
5. Move dual-workload-setup and pricing-strategy nav references to Config
6. Resolve new-join-a-pool vs join-a-pool
7. Verify all nav paths → existing files
8. Validate JSON

### Phase 2: File system (structure only)
1. Create `config-and-optimisation/` directory
2. Create stub files: capacity-planning, ai-model-management, reward-call-tuning, combined-gateway-orchestrator
3. Create tutorial stubs: zero-to-first-reward, ai-earning-quickstart, add-ai-to-video-node, full-ai-pipeline, realtime-ai, byoc-cpu-smoke-test
4. Deprecate imported tutorial files (dep- prefix)
5. Update nav for all new files

### Phase 3: P0 content (critical gaps)
1. Expand pricing-strategy stub with structured outline
2. Expand payment-receipt stub with structured outline
3. Write capacity-planning (absorb benchmarking + session-limits content)
4. Update operator-rationale (scannable summary, earnings estimation)
5. Update ai-workloads-guide ("Already running video?" bridge, J6 callout)

### Phase 4: P1 content (high-value updates)
1. Split batch-ai-setup → diffusion-pipeline-setup + llm-pipeline-setup + audio-and-vision-pipelines
2. Write ai-model-management (extract from existing pages)
3. Write combined-gateway-orchestrator stub with outline
4. Update terminology across all pages ("combined mode" → "dual mode")
5. Add demand data to model-vram-reference
6. Add strategic framing to earnings

### Phase 5: P2-P3 content (tutorials, polish, funding)
1. Write tutorial outlines
2. Add cross-references and bridge callouts
3. Metadata and PURPOSE stub validation
4. Write roadmap & funding content when source material available

### Verification per phase
- After each phase: JSON valid, all nav paths resolve, no broken cross-references
- After Phase 3: P0 stubs have structured outlines with H2/H3
- After Phase 4: batch-ai-setup split clean, no content duplication
- After Phase 5: all pages have TODO + PURPOSE, all metadata passes schema
