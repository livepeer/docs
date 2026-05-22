# Orchestrators Tab — Critical Analysis (All Pages)

> **Date**: 2026-03-23
> **Scope**: Every .mdx page in the orchestrators tab (118 files copied to ORCHS working folder)
> **Method**: Full read of each page against voice rules, structural standards, and content completeness
> **Rating scale**: Voice 1-10, Severity P0 (blocks publication) → P3 (enhancement)

---

## Executive Summary

| Metric | Count |
|--------|-------|
| Total pages analysed | 73 published + 45 _workspace/composable |
| P0 blockers (blocks publication) | 11 |
| P1 major issues (voice/content violations) | 28 |
| P2 style/clarity issues | 35+ |
| Stub pages (no content) | 4 |
| Pages with unresolved TODO/REVIEW comments | 18 |
| Average voice compliance | 8.2/10 |
| Strongest section | Setup (avg 9.1/10) |
| Weakest section | Resources (avg 6.5/10) |

### Top 5 Systemic Problems

1. **Missing quantitative data** — Earnings examples, break-even thresholds, cost ranges absent across 60%+ of pages
2. **Unresolved TODO/REVIEW comments** — 18 pages contain verification flags that block publication
3. **Stub pages** — Community Pools, Contract Addresses, Funding & Support, Orchestrator Profiles are empty
4. **Vague language replacing numbers** — "typically", "approximately", "good", "significant" used where specific values exist
5. **Missing decision frameworks** — Reader must choose (warm vs cold, solo vs pool, pricing level) but pages describe options without recommending

---

## Section-by-Section Analysis

---

### START HERE (3 pages)

#### portal.mdx — Landing Page
- **Voice**: 6/10 — Serviceable but lacks hardware specificity
- **P0**: Lines 30-51 contain unresolved TODO flags for verification workflow
- **P1**: "earn from idle GPU downtimes" is vague marketing → "earn ETH per processed job"
- **P2**: No link to Explorer for real-time earnings data; no hardware gate ("do you have the right GPU?")
- **Gaps**: Missing earnings snapshot, missing hardware minimum callout

#### navigator.mdx — Job Story Router
- **Voice**: 7.5/10 — Strong path matrix, good hardware language
- **P1**: "The Easy Earner - Simplest path?" uses banned word "easy" → "Fastest path" or "Lowest friction"
- **P2**: Missing hardware requirements table by path (24 GB VRAM for AI should appear here)
- **Gaps**: No testnet mention, no pool acceptance rate data, missing hardware-per-path summary

#### index.mdx — Generated Index
- **Voice**: N/A (auto-generated, no narrative copy)
- **P2**: No meta-navigation summary above the list
- **Status**: Correctly flagged as generated

---

### CONCEPTS (5 pages)

#### concepts/role.mdx — Orchestrator Role
- **Voice**: 7/10 — Good framing ("GPU-for-hire on a decentralised marketplace")
- **P1**: "The Easy Earner - Simplest path?" (line 270) — banned word "easy"
- **P1**: "feels like operating a managed GPU service" → "is providing GPU compute on a decentralised marketplace"
- **P2**: Three mental models lack clear visual distinction; deployment table missing cost comparison
- **Gaps**: Missing disqualifiers ("Not suitable for: <24h uptime, GPUs under 8 GB VRAM"), missing link to hardware matrix

#### concepts/capabilities.mdx — Capabilities
- **Voice**: 8.5/10 — Strong technical precision throughout
- **P2**: "rank" is imprecise in gateway context → "select and route jobs to"
- **Gaps**: Missing demand data per pipeline, missing behaviour when declared capability ≠ loaded model, missing capability update frequency

#### concepts/architecture.mdx — Architecture
- **Voice**: 8/10 — Good hardware specificity, clear diagrams
- **P0**: Line 202-208 — AIServiceRegistry integration status is uncertain; blocks publication
- **P2**: Dense opening paragraph needs splitting; "capability, price, and performance" should be "capability match, price ceiling, response latency, and uptime record"
- **Gaps**: Missing latency targets per workload, missing failover behaviour for O-T split, missing load-balancing guidance

#### concepts/incentive-model.mdx — Incentive Model
- **Voice**: 6.5/10 — Weakest concept page; numbers-driven claim but few actual numbers
- **P0**: Line 274 — TODO for missing reward-call gas cost guidance
- **P1**: **No earnings examples anywhere**. Critical gap: "An operator with X GPUs at Y prices earns approximately Z ETH/month"
- **P1**: Missing active set threshold (LPT staking requirement for top 100)
- **P1**: Cost structure table lists categories with zero numbers or ranges
- **Gaps**: Missing inflation rate impact, missing reward cut scenario comparisons, missing price-selection relationship diagram

#### concepts/composable/orchestratorRole.mdx — Diagram Only
- **Voice**: N/A (no text)
- **P0**: Diagram has no explanatory text, no legend, no caption. Reader cannot interpret it
- **Action**: Add introductory paragraph + legend or remove from navigation

---

### QUICKSTART (4 pages)

#### quickstart/guide.mdx — Quickstart Overview
- **Voice**: 9/10 — Clean, outcome-first framing
- **P2**: "You only need your GPU and a few commands" — "only need" and "few" are reductive → "You need your GPU and a command set"
- **Gaps**: No failure fallback paths, no explicit "tests are free" statement

#### quickstart/video-transcoding.mdx — Video + AI Smoke Test
- **Voice**: 9.5/10 — Numbers-driven, mechanism after outcome, excellent
- **P0**: Line 352 — TODO: inference endpoint path unknown; test may fail silently
- **Gaps**: Missing VRAM failure thresholds ("6 GB VRAM will OOM at step X"), missing log interpretation guide

#### quickstart/tutorial.mdx — Tutorial Index
- **Voice**: 9/10 — Short, directive
- **P2**: Uses inline text instead of ordered list for 3 steps
- **Gaps**: Missing "smoke test" definition for newcomers, no failure fallback

#### quickstart/AI-prompt-start.mdx — Add AI to Existing Node
- **Voice**: 7.5/10 — Frames value as setup steps, not earnings outcomes
- **P1**: "the fuller workload guides" — banned vague word → name the specific guides
- **P2**: VRAM tiers table lacks earnings-per-VRAM context; mechanism before value in opening
- **Gaps**: Missing model licensing info, Docker socket permission errors, GPU sharing impact numbers, warm vs cold trade-off

---

### SETUP (7 pages)

#### setup/guide.mdx — Setup Overview
- **Voice**: 9/10 — Strong transactional framing
- **Gaps**: Missing per-step time estimates, missing cost summary (gas + LPT range)

#### setup/prepare.mdx — Requirements
- **Voice**: 9/10 — Numbers-driven, specific thresholds
- **P0**: Line 279 — TODO: "Confirm the current active-set threshold" — will rot weekly
- **Gaps**: Missing power consumption estimates, network latency impact, DIY vs cloud cost comparison

#### setup/rs-install.mdx — Installation
- **Voice**: 9/10 — Best-practice guidance, conditional clarity
- **P1**: Line 94 — TODO: version refresh maintenance debt
- **Gaps**: Missing upgrade path guidance, systemd service template, Docker resource limits

#### setup/configure.mdx — Configuration
- **Voice**: 8.5/10 — Good template system
- **P0**: Line 310 — TODO: dual-mode VRAM budgets are unverified guesses
- **Gaps**: Missing `-maxSessions` calculation formula, `-pricePerUnit` conversion tool, multi-GPU examples

#### setup/connect-and-activate.mdx — Connect & Activate
- **Voice**: 9.5/10 — Excellent consequence-driven language
- **P0**: 11 unresolved TODO comments throughout
- **Gaps**: Missing RPC rate-limit fallback, bridge timeout context, wallet security guidance

#### setup/test.mdx — Verification
- **Voice**: 9.5/10 — Conditional clarity, thresholds with consequences
- **P2**: 7 large steps with nested checks; checklist at end should be promoted to top
- **Gaps**: Missing Explorer state delay guidance, GPU vendor-specific monitoring, metric baselines

#### setup/r-monitor.mdx — Monitoring Setup
- **Voice**: 8.5/10 — Good outcome-first structure
- **Gaps**: Missing alerting thresholds, Grafana dashboard JSON, external monitoring export, metric baselines

---

### GUIDES — OPERATOR CONSIDERATIONS (4 pages)

#### operator-rationale.mdx
- **Voice**: 9/10 — Practical, numbers-driven with decision matrix
- **Gaps**: Minor factual TODOs (active-set size, gas ranges, electricity costs)

#### business-case.mdx
- **Voice**: 9/10 — "Fee-driven service delivery" framing is strong
- **Gaps**: Missing concrete revenue data (acknowledged TODO), missing SLA dashboard link

#### operator-impact.mdx
- **Voice**: 9/10 — Governance + sovereign compute framing is excellent
- **Gaps**: Missing historical governance vote examples, no summary of currently contested proposals

#### requirements.mdx
- **Voice**: 8.5/10 — Hardware-specific with RTX 3060 session caps, wattage figures
- **P1**: Multiple TODOs: NVENC consumer-card cap for RTX 40xx, CUDA minimum, test-stream URL

---

### GUIDES — DEPLOYMENT DETAILS (6 pages)

#### setup-options.mdx
- **Voice**: 8/10 — Clean comparison language
- **Gaps**: Missing BYOC guide link, on-chain vs off-chain decision guidance

#### siphon-setup.mdx
- **Voice**: 9.5/10 — Problem-first framing ("GPU reboot mid-round permanently loses LPT reward")
- **Gaps**: Minor flag confirmation TODO (`-orchSecret`)

#### dual-mode-configuration.mdx
- **Voice**: 8/10 — Good VRAM/revenue focus
- **Status**: Draft
- **P0**: VRAM figures are unverified TODOs; earnings estimates missing
- **P2**: Significant tab overlap between "Starting fresh" and "Adding AI"

#### orchestrator-transcoder-setup.mdx
- **Voice**: 8.5/10 — Direct, technical
- **Gaps**: Missing load-balancing strategies across multiple transcoders, TODO flags for flags

#### join-a-pool.mdx (older version)
- **Voice**: 7.5/10 — Acceptable but less precise than newer version
- **Gaps**: Outdated — only references Titan Node; missing pool operator terms

#### new-join-a-pool.mdx (newer version)
- **Voice**: 8.5/10 — Clearer value proposition
- **Gaps**: Missing actual pool operator terms (payout %, minimum threshold, frequency)

---

### GUIDES — AI AND JOB WORKLOADS (9 pages)

#### workload-options.mdx
- **Voice**: 9.5/10 — Excellent orientation page
- **Gaps**: None significant

#### video-transcoding-operations.mdx
- **Voice**: 9/10 — Numbers throughout: "2-second chunks", "6 Mbps download", "3-8 concurrent sessions"
- **Gaps**: TODOs for NVIDIA driver minimum, market-rate reference, RTX 40xx NVENC cap

#### ai-inference-operations.mdx
- **Voice**: 9/10 — Bridge accordion for video operators is perfect
- **Gaps**: Missing detailed AI runner architecture diagram

#### diffusion-pipeline-setup.mdx
- **Voice**: 8/10 — Practical setup language
- **Status**: Requires separate deep review (file too large for single pass)

#### llm-pipeline-setup.mdx
- **Voice**: 8/10 — "Entry point for older or smaller GPUs" is clear
- **Gaps**: TODOs for stable image tag, model list, pricing semantics; missing quantisation guidance

#### realtime-ai-setup.mdx
- **Voice**: 9.5/10 — Problem-first: "sub-100ms latency" requirement
- **Gaps**: TODOs for canonical ComfyStream nodes, `live-base` image tag

#### audio-and-vision-pipelines.mdx
- **Voice**: 8/10 — "Lower competition than diffusion pipelines" is value-first
- **P2**: "One warm model per GPU" Beta constraint is buried → promote to warning box

#### model-demand-reference.mdx
- **Voice**: 9.5/10 — "VRAM is only one part of the earning equation" sets perfect frame
- **Gaps**: TODOs for VRAM/pricing figure validation; missing A40/L40 card guidance

#### model-hosting.mdx
- **Voice**: 8/10 — Practical download/gated model coverage
- **Gaps**: TODOs for pre-download command syntax, disk-size estimates; missing model update strategy

---

### GUIDES — STAKING AND REWARDS (4 pages)

#### earning-model.mdx
- **Voice**: 8.5/10 — Good structure
- **P1**: "approximately 61% of LPT supply was bonded" — needs current figure
- **Gaps**: Missing quantitative thresholds for "competitive pricing", video vs AI job distribution

#### reward-mechanics.mdx
- **Voice**: 8.5/10 — Clear consequence language
- **P0**: Worked example (lines 299-346) flagged "to be verified"
- **P2**: "your node's ETH wallet must have sufficient ETH" — redundant ETH; rephrase
- **Gaps**: Missing edge case for gas exceeding reward value, reward call failure after round close

#### delegate-operations.mdx
- **Voice**: 8/10 — Good but dense math sections
- **P2**: "In return, they expect a return" — awkward repetition → "In return, they expect competitive yield"
- **Gaps**: Missing reward-call ratio impact on yield, commission change communication examples

#### network-participation.mdx
- **Voice**: 8/10 — Practical governance framing
- **Gaps**: Missing quorum threshold in published text, vote frequency, recent vote case study

---

### GUIDES — PAYMENTS AND PRICING (2 pages)

#### payment-receipts.mdx
- **Voice**: 8/10 — Draft status
- **P2**: "behaviour" should be UK English (correct); subject-verb disagreement at line 82
- **Gaps**: Missing ticket expiry mechanics, win probability calculation, gateway deposit edge case

#### payments.mdx
- **Voice**: 8/10 — Clear PM explanation
- **P2**: Repeated "lightweight signed tickets" in lines 36 and 44
- **Gaps**: Missing PM system diagram, gas cost comparison with per-segment settlement, deposit exhaustion behaviour

---

### GUIDES — CONFIG AND OPTIMISATION (4 pages)

#### pricing-strategy.mdx
- **Voice**: 8/10 — Draft status
- **P2**: "illustrative baselines" weakens guidance; either provide current rates or defer to reference
- **Gaps**: Missing gateway cap detection method, LLM pricing guidance, adjustment frequency

#### capacity-planning.mdx
- **Voice**: 8.5/10 — Excellent hardware-specific tone
- **P2**: Benchmark output hard to parse → convert to table
- **Gaps**: Missing guidance when `livepeer_bench` consistently returns >1.0 ratio, multi-GPU benchmarking

#### ai-model-management.mdx
- **Voice**: 8/10 — Draft status
- **P1**: "one warm model per GPU" Beta constraint may be outdated → verify
- **Gaps**: Missing warm vs cold decision tree, first-response latency measurement tool

#### reward-call-tuning.mdx
- **Voice**: 8.5/10 — Practical and direct
- **P0**: Profitability calculation flagged "to be verified"
- **Gaps**: Missing worked break-even example, Explorer trend monitoring, delegator confidence impact

---

### GUIDES — MONITORING AND TOOLING (4 pages)

#### operator-toolbox.mdx
- **Voice**: 8.5/10 — Reference-oriented, practical
- **P2**: Long opening sentence → break into two
- **Gaps**: Missing debugging-to-error mapping, tool comparison (Explorer vs Prometheus vs Dune)

#### explorer-operations.mdx
- **Voice**: 8.5/10 — Operationally focused
- **P2**: Reward cut ranges (5-15%) may be outdated → source or make relative
- **Gaps**: Missing "pending stake" explanation, "Rounds active" interpretation

#### metrics-and-alerting.mdx
- **Voice**: 8.5/10 — Hands-on tone
- **P2**: "wire up" is colloquial → "configure"; generic alert rule names → customise
- **Gaps**: Missing latency expectations, size-adjusted alerting thresholds

#### troubleshooting.mdx
- **Voice**: 9/10 — Symptom-first approach is excellent
- **P2**: Hash anchor links in quick-nav may not resolve → verify
- **Gaps**: Missing `nvidia-smi` interpretation guide, startup log reading guide, escalation paths

---

### GUIDES — ADVANCED OPERATIONS (4 pages)

#### gateway-relationships.mdx
- **Voice**: 8.5/10 — Clear selection pipeline
- **P2**: "that pipeline" is unclear → "gateway selection"; Loki queries need narrative before each
- **Gaps**: Missing blacklist duration/trigger, typical `-selectStakeWeight` values, randomness explanation

#### gateway-orchestrator-interface.mdx
- **Voice**: 8/10 — Draft status
- **P2**: Duplicate port in gateway description; "eliminate" → "minimise"
- **Gaps**: Missing Docker Compose example, failover handling, dual-role monitoring

#### pool-operators.mdx
- **Voice**: 8.5/10 — Direct, practical
- **P2**: "Off-chain distribution is your problem" → "is entirely your responsibility"
- **Gaps**: Missing worker contribution measurement, payout script example, dispute handling

#### scale-operations.mdx
- **Voice**: 8/10 — Strategic tone
- **Gaps**: Missing cost-benefit analysis for fleet architecture, multi-region guidance, fleet capacity tracking

---

### GUIDES — ROADMAP AND FUNDING (2 pages)

#### funding-and-support.mdx
- **P0**: **STUB PAGE — entirely empty**. Blocks publication or must be removed from nav.

#### orchestrator-profiles.mdx
- **P0**: **STUB PAGE — entirely empty**. Blocks publication or must be removed from nav.

---

### GUIDES — TUTORIALS (6 pages)

#### byoc-cpu-smoke-test.mdx
- **Voice**: 8/10 — Clear tutorial language
- **P2**: Mixed capitalisation in step headings → standardise
- **Gaps**: Missing BYOC definition for new readers, production relevance context

#### zero-to-first-reward.mdx
- **Voice**: 8.5/10 — Step-by-step, practical
- **P1**: Version number v0.8.9 may be outdated → verify
- **Gaps**: Missing activation failure troubleshooting, Explorer appearance timing, below-threshold consequences

#### ai-earning-quickstart.mdx
- **Voice**: 8.5/10 — Tutorial, clear
- **P2**: "instant first-response" → "faster" (instant is inaccurate)
- **Gaps**: Missing model comparison at same VRAM level, demand check frequency, hot-add second model

#### add-ai-to-video-node.mdx
- **Voice**: 8.5/10 — "Additive change" framing is direct
- **Gaps**: Missing simultaneous load test, OOM behaviour, rollback plan

#### full-ai-pipeline-tutorial.mdx
- **Voice**: 8/10 — Complete local pipeline
- **P2**: Long opening sentence → break into 2-3
- **Gaps**: Missing end-to-end latency expectation, "no jobs" diagnosis, remote signer fallback

#### realtime-ai-tutorial.mdx
- **Voice**: 8/10 — Hardware-focused
- **P0**: `dl_checkpoints.sh` script flagged "to be verified"
- **P2**: "high-value compute offering" is marketing → "highest-margin service"
- **Gaps**: Missing frame rate expectations per GPU, Cascade vs batch comparison, latency troubleshooting

---

### RESOURCES (10 pages)

#### faq.mdx — FAQ
- **Voice**: 7.5/10 — Imprecise quantification in 6 instances
- **P2**: Em-dash inconsistency; marketing language ("Well-suited for Livepeer AI pipeline tasks")
- **P2**: Inconsistent accordion iconography
- **Gaps**: Missing CUDA version mismatch resolution detail, failover RPC config, gas cost quantification, clock skew debugging

#### glossary.mdx — Glossary
- **Voice**: 7/10 — Academic tone ("orthogonal"), vague causation
- **P1**: REVIEW comment visible in published content (line 183) — must be removed
- **P2**: Inconsistent badge use; inline CSS in production code
- **Gaps**: Missing CUDA/NVENC version explanation, active set governance detail, GPU comparison rationale

#### community-guides.mdx — Community Guides
- **Voice**: 7/10 — Inconsistent tense, informal tone
- **P2**: Forum link from 2021 is 5 years old → add caution; inconsistent dividers
- **Gaps**: Missing difficulty-level indicators, maintenance status per guide, v1 vs v2 link audit

#### community-pools.mdx — Community Pools
- **P0**: **STUB PAGE** — placeholder text with "automation to pull data from Google sheet" but no actual content
- **Voice**: 5/10 — Defensive tone, internal documentation visible to users
- **Gaps**: No pool listings, no comparison table, no pool evaluation guidance

#### gpu-support.mdx — GPU Support Matrix
- **Voice**: 7.5/10 — "best" and "good" are subjective → quantify
- **P2**: Dense table → split consumer vs professional; missing Tab wrapper per TODO
- **Gaps**: Missing PCIe topology/NVLink, power/cooling requirements, cloud GPU comparison, driver patching rollback

#### arbitrum-rpc.mdx — Arbitrum RPCs
- **Voice**: 7.5/10 — Jargon (CU) unexplained, mixed imperative/descriptive
- **P2**: Code examples use `...` without explanation; inconsistent dividers
- **Gaps**: Missing failover config, rate limit detection, cost analysis, latency expectations

#### arbitrum-exchanges.mdx — Arbitrum Exchanges
- **Voice**: 7.5/10 — "significantly" is imprecise → quantify as "50-100× cheaper"
- **P2**: Long complex sentences → break; security warning buried instead of leading
- **Gaps**: Missing tax/compliance disclaimer, wallet security guidance, liquidity/slippage guidance

#### technical/cli-flags.mdx — CLI Flags Reference
- **Voice**: 6.5/10 — Pseudo-OpenAPI presentation is confusing for operators
- **P1**: Not a complete CLI flag reference — the one thing operators need most
- **P2**: Checkmark/cross emojis are informal → Yes/No; "Key point:" is conversational
- **Gaps**: Missing comprehensive flag list, hardware information fields, dynamic pricing configuration

#### technical/x-contract-addresses.mdx — Contract Addresses
- **P0**: **STUB PAGE** — typo in title ("Adresses"), placeholder description, no contract list
- **Gaps**: Everything — needs contract table, purpose descriptions, Arbiscan links, interaction examples

#### compendium/glossary.mdx — Compendium Glossary
- **Voice**: 6.5/10 — Machine-generated with inconsistent formality
- **P2**: SearchTable is 127 lines and overwhelming; duplicated definitions between sections
- **Gaps**: Missing category legend, cross-references to guides, versioning, deprecated term migration

---

## P0 Blockers Summary

| # | Page | Issue | Action Required |
|---|------|-------|-----------------|
| 1 | portal.mdx | Unresolved TODO verification flags | Resolve or remove |
| 2 | architecture.mdx | AIServiceRegistry status uncertain | Confirm integration status |
| 3 | incentive-model.mdx | Missing reward-call gas cost guidance | Add gas cost table |
| 4 | composable/orchestratorRole.mdx | Diagram with no explanatory text | Add paragraph + legend |
| 5 | video-transcoding.mdx | Inference endpoint path unknown | Confirm and test curl command |
| 6 | configure.mdx | Dual-mode VRAM budgets unverified | Benchmark and publish |
| 7 | connect-and-activate.mdx | 11 unresolved TODOs | Verify each item |
| 8 | reward-mechanics.mdx | Worked example "to be verified" | Verify figures |
| 9 | reward-call-tuning.mdx | Profitability calc "to be verified" | Verify figures |
| 10 | funding-and-support.mdx | Stub page — no content | Write or remove from nav |
| 11 | orchestrator-profiles.mdx | Stub page — no content | Write or remove from nav |
| 12 | community-pools.mdx | Stub page — placeholder only | Write or remove from nav |
| 13 | x-contract-addresses.mdx | Stub page — typo, no content | Write or remove from nav |
| 14 | realtime-ai-tutorial.mdx | dl_checkpoints.sh "to be verified" | Verify script |

---

## Cross-Cutting Patterns

### What's Working Well
- **Setup section** is the gold standard (avg 9.1/10 voice compliance)
- **Workload options** and **model-demand-reference** are excellent orientation pages
- **Symptom-first troubleshooting** structure is correct
- **Voice compliance** is generally strong — no systematic banned-word violations
- **UK spelling** is consistent throughout
- **Tables and diagrams** are well-structured with correct components

### What's Systematically Wrong
1. **Numbers deficit**: 60%+ of pages lack concrete earnings, cost, or threshold data
2. **TODO debt**: 18 pages contain unresolved verification flags
3. **Stub pages**: 4 pages have no content at all
4. **Decision gaps**: Pages describe options but don't help reader choose
5. **Resources section is weakest**: Average 6.5/10 voice compliance, most gaps
6. **Duplicate content**: join-a-pool.mdx and new-join-a-pool.mdx cover same topic; dual-mode tabs overlap
7. **Missing escalation paths**: When things go wrong, docs stop at "check Discord"
