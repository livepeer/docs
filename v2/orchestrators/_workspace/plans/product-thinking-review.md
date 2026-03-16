# Product Thinking Review: Orchestrator Guides Section

_Applied using ai-tools/ai-skills/product-thinking/SKILL.md_

<CustomDivider />

## 1. Job Stories

**J1**: "When I have a GPU sitting idle, I want to start earning crypto from Livepeer, so I can offset my hardware costs."
- Acceptance: Can estimate earnings before committing. Can reach first earning within 24 hours. Understands which path (pool/solo/AI-only) fits my hardware.
- Pages serving: operator-rationale (evaluation), setup-options (path selection), join-a-pool (fastest path)
- Gap: No unified "start here" page within guides. operator-rationale is evaluation, not action.

**J2**: "When I already run video transcoding and see AI demand growing, I want to add AI to my existing node, so I can earn from both workloads without a second machine."
- Acceptance: Can add AI flags to existing config in under 1 hour. Understands VRAM impact on video sessions. Knows which AI models are in demand.
- Pages serving: ai-workloads-guide (conceptual), batch-ai-setup (step-by-step)
- **Gap: No "add AI to existing video node" bridge content. Both AI pages assume fresh setup. No VRAM coexistence guidance.**

**J3**: "When I have significant LPT and want to maximise yield, I want to operate a reliable, well-staked orchestrator, so I can compound rewards and delegation."
- Acceptance: Understands reward calling gas economics. Can set competitive cuts. Can monitor delegation trends.
- Pages serving: earnings, rewards-and-fees, attracting-delegates
- Gap: No "LPT yield optimisation" framing. Content is mechanistic (how rewards work) not strategic (how to maximise).

**J4**: "When my company needs to provide GPU compute under SLAs, I want to operate commercial orchestrator infrastructure, so I can earn service fees from products like Livepeer Studio."
- Acceptance: Can set per-gateway pricing. Understands O-T split for reliability. Has SLA monitoring.
- Pages serving: business-case (evaluation), gateways-orchestrators (relationship), large-scale-operations (fleet)
- Gap: No end-to-end commercial operator journey. Pages exist but aren't connected into a path.

**J5**: "When I want to influence the direction of open compute infrastructure, I want to operate a node with governance weight, so I can vote on protocol decisions."
- Acceptance: Understands vote weight mechanics. Knows where proposals are discussed. Can vote via Explorer.
- Pages serving: protocol-influence (comprehensive), governance (mechanics)
- Gap: None significant. This is well covered between the two pages.

**J6**: "When I have a high-VRAM GPU (24GB+) but limited LPT, I want to earn from AI inference without active set membership, so I can start immediately."
- Acceptance: AI routing works without high stake. Can check pipeline demand. Sees first AI job within hours.
- Pages serving: ai-workloads-guide, batch-ai-setup, model-vram-reference
- Gap: The AI setup pages don't explicitly say "you don't need LPT for this." The low-barrier AI path isn't prominently surfaced.

**J7**: "When something breaks on my running node, I want to diagnose and fix it quickly, so I can minimise missed rewards and lost jobs."
- Acceptance: Can find my error symptom. Gets actionable fix steps. Knows when to escalate.
- Pages serving: troubleshooting (comprehensive)
- Gap: No quick-reference error lookup. Must scroll a long page.

<CustomDivider />

## 2. Opportunity Solution Tree

**Desired Outcome**: An operator with a GPU can go from "I've heard of Livepeer" to "I'm earning revenue" in under 24 hours, and know where to go for every question that arises during ongoing operation.

| # | Opportunity | Imp | Sat | Score | Evidence |
|---|-----------|-----|-----|-------|----------|
| O1 | "I run video but can't figure out how to add AI" | 9 | 1 | **72** | No hybrid bridge content exists anywhere |
| O2 | "I can't tell which path earns more for my situation" | 9 | 4 | **54** | operator-rationale has decision matrix but no earnings modelling |
| O3 | "I don't know which AI models are worth running" | 8 | 5 | **40** | model-vram-reference has hardware data but not demand/earnings data |
| O4 | "Pricing is confusing - I don't know how to be competitive" | 8 | 1 | **72** | pricing-strategy.mdx is a STUB |
| O5 | "I set up my node but I'm not getting any jobs" | 8 | 6 | **32** | troubleshooting covers this but gateway selection criteria aren't clear |
| O6 | "I want to scale but don't know the right architecture" | 6 | 6 | **24** | O-T setup + large-scale both exist and are complete |
| O7 | "I want to earn from Livepeer but the setup looks complex" | 9 | 5 | **45** | setup-options exists but quickstart → guides handoff is unclear |

### Top Priorities
1. **O1 + O4 tied at 72** - Hybrid bridge gap AND pricing stub are equally critical
2. **O2 at 54** - Earnings modelling / path comparison
3. **O7 at 45** - Complexity barrier perception

### Solutions for O1 (Hybrid bridge)
- **S1a**: Add "Already Running Video?" accordion to ai-workloads-guide with the delta flags
- **S1b**: Create deployment-details/hybrid-setup.mdx with unified docker-compose
- **S1c**: Add VRAM coexistence table to session-limits (if it returns from deprecated)

### Solutions for O4 (Pricing stub)
- **S4a**: Write pricing-strategy.mdx with sell-side pricing guide (mirror gateway version)
- **S4b**: Add pricing quick-reference to operator-rationale (inline, not separate page)
- **S4c**: Cross-ref to gateway pricing-strategy with "orchestrator perspective" callout

### Solutions for O2 (Path earnings comparison)
- **S2a**: Add interactive earnings estimator to operator-rationale (calculator)
- **S2b**: Add "expected earnings by path" table to operator-rationale
- **S2c**: Cross-ref to Explorer data with "how to read orchestrator earnings"

<CustomDivider />

## 3. Assumption Map

| # | Assumption | Dim | Conf | Risk | Test |
|---|-----------|-----|------|------|------|
| 1 | Separating "Operator Considerations" from "Deployment Details" helps users | Value | M | M | Check if users go Considerations → Deployment or skip Considerations entirely |
| 2 | batch-ai-setup and realtime-ai-setup need separate pages | Value | L | M | Content overlap analysis - if &gt;60% shared, merge with tabs |
| 3 | Staking & Rewards and Payments & Pricing should be separate sections | Value | L | H | Operators think about earning holistically. Four separate sections for money-related content may fragment the journey. |
| 4 | benchmarking and session-limits deserve their own pages | Value | L | M | User deprecated these. May be better as sections within requirements or monitoring. |
| 5 | The tutorials (imported gateway content) add value for orchestrator operators | Value | L | H | Gateway BYOC CPU tutorial is not an orchestrator job. Low curation signal. |
| 6 | operator-rationale is the right entry point for "should I?" | Usability | M | M | It's 439 lines. May be too long for an evaluation page. |
| 7 | gateways-orchestrators is understood as "how gateways interact with me" | Usability | L | M | Title could read as "gateways vs orchestrators comparison" not "working with gateways" |
| 8 | pricing-strategy can be written without SME input on current market rates | Viability | L | H | May need operator interviews or Explorer data mining |
| 9 | Commercial orchestrator content (business-case) has enough public info | Viability | M | M | Some info exists (Livepeer Studio, Daydream) but details may be confidential |
| 10 | The Dep/New subgroup pattern in nav helps users | Usability | M | L | Migration pattern - temporary. Users seeing "Dep" groups may be confused. |
| 11 | **BLIND SPOT**: Operators revisiting docs for a specific task can find it | Usability | L | H | No task-based index or "I want to..." quick-ref |
| 12 | **BLIND SPOT**: The section order implies reading order | Usability | M | M | Returning operators skip to section 5+ but nav weight is on sections 1-3 |

<CustomDivider />

## 4. Customer Journey Map (J1: GPU owner wanting earnings)

| Stage | Touchpoint | Thinking | Feeling | Friction | Opportunity |
|-------|-----------|---------|---------|----------|-------------|
| **Evaluation** | operator-rationale | "Is this worth my 4090's time?" | Calculating | Page is 439 lines, dense | Scannable decision matrix at top, detail below |
| **Path Selection** | setup-options | "Pool or solo? Video or AI or both?" | Uncertain | Binary framing (video OR AI) | Hybrid-first framing per L0 exercise |
| **Hardware Check** | requirements | "Does my hardware qualify?" | Anxious | Page exists but isn't linked from rationale naturally | Direct "check your hardware" CTA from rationale |
| **Setup** | Quickstart + Setup section | "Walk me through it" | Focused | Setup is in a different nav section (Setup, not Guides) | Guides should cross-ref setup steps, not repeat them |
| **First Workload** | job-types → video or AI setup | "What do I run first?" | Engaged | 6 pages in Workloads, unclear sequencing | Clear "start with X, then add Y" guidance |
| **Staking** | earnings, rewards-and-fees | "How do I actually get paid?" | Motivated | Must read 2 pages + payments in different section | Consider "Earning" umbrella section |
| **First Earning** | Explorer, CLI | "Is it working?" | Excited/anxious | No "verify you're earning" checkpoint page | Monitoring section should include earning verification |
| **Ongoing Ops** | monitoring, troubleshooting | "Something broke" | Frustrated | Troubleshooting is comprehensive but long | Symptom-based quick-nav |

### Critical Moments

- **Aha moment**: Seeing first reward call succeed on Explorer + understanding the compounding math
- **Churn trigger**: "No jobs" after setup. Operator doesn't know if the problem is pricing, capability, or connectivity. troubleshooting helps but the gap is "why am I not being selected?"
- **Advocacy trigger**: Sharing first month's earnings report showing both video + AI revenue

<CustomDivider />

## 5. Value Propositions (by job story)

**J1 (idle GPU)**: "Livepeer's orchestrator guides take you from idle GPU to earning revenue, with a clear decision matrix so you pick the right path for your hardware and stake."

**J2 (add AI to video)**: "Already transcoding? Add AI inference to your existing node and earn from both workloads on the same hardware."
- **This value prop has no page to deliver it.**

**J3 (LPT yield)**: "Maximise your LPT position with reward calling optimisation, competitive pricing, and delegation growth strategies."

**J4 (commercial)**: "Run production GPU infrastructure for Livepeer-powered products with per-gateway pricing and fleet operations."

**J6 (AI-first, low LPT)**: "Start earning from AI inference immediately - no active set membership required. Your GPU capability is your entry ticket."
- **This value prop is buried. batch-ai-setup doesn't lead with it.**

<CustomDivider />

## 6. Section-by-Section Review

### Operator Considerations (3 pages - all COMPLETE)

**Job stories served**: J1, J4, J5
**Opportunities addressed**: O2 (partially)

| Page | Job stories | Status | Issue |
|------|-----------|--------|-------|
| operator-rationale | J1, J3 | OK but long | 439 lines. Decision matrix is good but buried in dense prose. Needs scannable top section. |
| business-case | J4 | OK | Well-scoped commercial framing. Good complement to rationale. |
| protocol-influence | J5 | OK | Strong standalone page. Correctly positioned. |

**Recommendations**:
1. Add scannable summary (table or bordered box) to top of operator-rationale - the decision matrix and viability questions should be visible without scrolling
2. Consider renaming section: "Is It Worth It?" or "Why Operate?" - more outcome-focused than "Operator Considerations"

<CustomDivider />

### Deployment Details (3-6 pages depending on Dep resolution)

**Job stories served**: J1, J2, J6, J7
**Opportunities addressed**: O1 (missing), O7

| Page | Job stories | Status | Issue |
|------|-----------|--------|-------|
| setup-options | J1 | OK | Covers solo/pool/O-T/siphon paths |
| requirements | J1 | OK | 480 lines, comprehensive |
| orchestrator-transcoder-setup | J4 | OK | Moved here from Advanced Ops - good fit |
| siphon-setup | J1 | OK | Niche but valid |
| join-a-pool | J1 | OK | Solid pool worker guide |
| benchmarking | - | DEPRECATED | User moved to x-deprecated. Content may fold into requirements or monitoring. |
| session-limits | - | DEPRECATED | User moved to x-deprecated. Content may fold into requirements or monitoring. |

**Recommendations**:
1. **Add hybrid-setup.mdx** - unified video+AI setup from scratch (O1, highest priority gap)
2. Decide on benchmarking/session-limits: if the content is valuable, fold key sections into requirements (hardware capacity) and monitoring (runtime capacity). If not, leave deprecated.
3. The "new-join-a-pool" in nav suggests a rewrite is in progress. Ensure the Dep/New pattern resolves cleanly.

<CustomDivider />

### Workloads & AI (6 pages - all COMPLETE)

**Job stories served**: J1, J2, J6
**Opportunities addressed**: O1 (partially), O3

| Page | Job stories | Status | Issue |
|------|-----------|--------|-------|
| job-types | J1 | OK | Good overview. Correctly first in section. |
| video-transcoding | J1 | OK | 513 lines, comprehensive |
| ai-workloads-guide | J2, J6 | OK but missing bridge | No "already running video?" entry point |
| batch-ai-setup | J6 | OK | 915 lines - may be too long. Could the docker-compose and aiModels.json sections be shared with realtime? |
| realtime-ai-setup | J2 | OK | 590 lines |
| model-vram-reference | J6 | OK | Pure reference, well-scoped |

**Recommendations**:
1. **Add "Already Running Video?" bridge** to ai-workloads-guide (accordion or callout at top) showing the delta flags to add AI to an existing video config
2. Evaluate merging batch-ai-setup + realtime-ai-setup into single page with tabs - they share docker-compose patterns, aiModels.json format, model downloads. Difference is pipeline type and latency config. Combined = ~1000 lines but with tabs the user only reads their path.
3. Add demand/earnings context to model-vram-reference - "which models are actually being requested?" alongside "which models fit my GPU?" Cross-ref to tools.livepeer.cloud/ai/network-capabilities.

<CustomDivider />

### Staking & Rewards (4 pages - all COMPLETE)

**Job stories served**: J3, J5
**Opportunities addressed**: O2 (partially)

| Page | Job stories | Status | Issue |
|------|-----------|--------|-------|
| earnings | J3 | OK | Good mechanics explanation |
| rewards-and-fees | J3 | OK | Reward calling detail |
| attracting-delegates | J3 | OK | Delegation growth strategies |
| governance | J5 | OK | Voting mechanics. Some overlap with protocol-influence. |

**Recommendations**:
1. **Consider merging governance into protocol-influence** or clearly differentiating: protocol-influence = "why governance matters" (motivation), governance = "how to vote" (mechanics). If both stay, cross-ref clearly.
2. Add "optimising for yield" framing to earnings - currently mechanistic ("how rewards work") not strategic ("how to earn more"). J3 operators want strategy.
3. **Evaluate merging this section with Payments & Pricing** into a single "Earning & Pricing" section. From the operator's perspective, staking, rewards, fees, pricing, and payment flow are all "how do I earn money?" Four money-related pages spread across two sections fragments the journey.

<CustomDivider />

### Payments & Pricing (3 pages - 2 STUBS, 1 COMPLETE)

**Job stories served**: J3, J4
**Opportunities addressed**: O4

| Page | Job stories | Status | Issue |
|------|-----------|--------|-------|
| payment-flow | J3 | **STUB (63 lines)** | Critical gap. Orchestrators need to understand ticket receipt and redemption. |
| pricing-strategy | J3, J4 | **STUB (63 lines)** | Critical gap. Operators cannot compete without pricing guidance. Tied for highest O-score. |
| payments | J3 | COMPLETE | 404 lines, good operational content |

**Recommendations**:
1. **P0: Write pricing-strategy.mdx** - This is the #1 content gap by opportunity score (tied with hybrid). Source from v1 set-pricing.mdx + gateway pricing-strategy.mdx (sell-side mirror).
2. **P1: Write payment-flow.mdx** - Ticket receipt, winning ticket detection, redemption, gas economics.
3. Consider whether payments.mdx content overlaps with payment-flow once written. May need deduplication.

<CustomDivider />

### Monitoring & Tools (4 pages - all COMPLETE)

**Job stories served**: J7
**Opportunities addressed**: O5

| Page | Job stories | Status | Issue |
|------|-----------|--------|-------|
| tools | J7 | OK | Overview of available tools |
| explorer-guide | J3, J7 | OK | Explorer as management dashboard |
| metrics-monitoring | J7 | OK | Prometheus setup, 462 lines |
| troubleshooting | J7 | OK | Symptom-based, 500 lines |

**Recommendations**:
1. Add "earning verification" section to tools or explorer-guide - "how to confirm your node is earning" covers J1's aha moment
2. Add quick-nav symptom index to top of troubleshooting (accordion with jump links by symptom category)
3. Consider absorbing benchmarking content (from deprecated) into metrics-monitoring as "capacity planning" section

<CustomDivider />

### Advanced Operations (3 pages - all COMPLETE)

**Job stories served**: J4
**Opportunities addressed**: O6

| Page | Job stories | Status | Issue |
|------|-----------|--------|-------|
| run-a-pool | J4 | OK | Pool operator guide |
| gateways-orchestrators | J4 | OK | Gateway relationship management |
| large-scale-operations | J4 | OK | Fleet/enterprise operations |

**Recommendations**:
1. orchestrator-transcoder-setup moved to Deployment Details - correct. Remove from this section's nav if still referenced.
2. Rename gateways-orchestrators to "working-with-gateways" for clarity
3. Add "when to split from hybrid to dedicated nodes" criteria - this bridges O1 (hybrid) with O6 (scaling)

<CustomDivider />

### Roadmap & Funding (2 pages - both STUBS)

**Job stories served**: None directly (aspirational/community content)

| Page | Job stories | Status | Issue |
|------|-----------|--------|-------|
| operator-support | - | **STUB (57 lines)** | SPE grants, programmes |
| orchestrator-showcase | - | **STUB (48 lines)** | Community showcase |

**Recommendations**:
1. Low priority for content development. These pages support retention/advocacy but don't serve any core job story.
2. operator-support should cross-ref the gateway equivalent when both are built.
3. orchestrator-showcase needs real operator data to be useful. Don't write until there are concrete examples.

<CustomDivider />

### Tutorials (3 pages - all MINIMAL imports)

**Job stories served**: None well

| Page | Job stories | Status | Issue |
|------|-----------|--------|-------|
| imported-tutorial-1-byoc-cpu-pipeline | - | MINIMAL (51 lines) | **Gateway-focused. Not an orchestrator job.** |
| imported-tutorial-2-offchain-transcoding-test | J1 | MINIMAL (47 lines) | Potentially useful but minimal content |
| imported-tutorial-3-go-production | J1 | MINIMAL (47 lines) | Potentially useful but minimal content |

**Recommendations**:
1. **Remove tutorial-1 (BYOC CPU)** - irrelevant to orchestrator operators. Keeping it signals poor curation.
2. Evaluate tutorials 2+3 - are these substantial enough to justify a section? If they're just imports with 47 lines, consider removing the section until orchestrator-specific tutorials exist.
3. If tutorials stay, they need orchestrator framing: "Set up a video orchestrator from zero to first reward call" not "off-chain transcoding test."

<CustomDivider />

## 7. Priority Actions

### P0 (Structural - before content work)

| # | Action | Rationale | Effort |
|---|--------|-----------|--------|
| 1 | **Write pricing-strategy.mdx** | Tied highest opportunity score (72). Operators can't compete without pricing guidance. | Medium |
| 2 | **Add hybrid bridge to ai-workloads-guide** | Highest opportunity score (72). Most operators run both; no content serves the transition. | Small |
| 3 | **Write payment-flow.mdx** | Completes the earning story. Without it, operators understand rewards but not fee receipt. | Medium |

### P1 (Journey improvements)

| # | Action | Rationale | Effort |
|---|--------|-----------|--------|
| 4 | Add scannable decision summary to top of operator-rationale | 439 lines is too dense for an evaluation page. Key info should be above the fold. | Small |
| 5 | Add "low LPT? Start with AI" callout to batch-ai-setup and ai-workloads-guide | J6 value prop ("no active set needed") is buried. | Small |
| 6 | Evaluate merging Staking + Payments into "Earning & Pricing" | Four money-related pages across two sections fragments the earning journey. | Medium (IA change) |
| 7 | Add earning verification to explorer-guide or tools | The "aha moment" (first earning) has no designed touchpoint. | Small |

### P2 (Content quality)

| # | Action | Rationale | Effort |
|---|--------|-----------|--------|
| 8 | Evaluate merging batch-ai-setup + realtime-ai-setup | 915+590 = 1505 lines with significant overlap. Tabs would reduce to ~800. | Medium |
| 9 | Resolve Dep/New nav pattern | Temporary migration pattern. Users shouldn't see "Dep" groups. | Small |
| 10 | Differentiate governance from protocol-influence | Both cover governance. One = why, one = how. Make the boundary explicit. | Small |

### P3 (Cleanup)

| # | Action | Rationale | Effort |
|---|--------|-----------|--------|
| 11 | Remove or replace tutorial-1 (BYOC CPU) | Gateway content, not orchestrator. Poor curation signal. | Trivial |
| 12 | Write operator-support.mdx when SPE details available | Stub. Low priority. | Medium |
| 13 | Rename gateways-orchestrators to working-with-gateways | Clearer intent. | Trivial |

<CustomDivider />

## Content Status Summary

| Category | Complete | Stub | Deprecated/Missing | Total |
|----------|----------|------|-------------------|-------|
| Operator Considerations | 3 | 0 | 0 | 3 |
| Deployment Details | 4 | 0 | 2 deprecated | 6 |
| Workloads & AI | 6 | 0 | 0 | 6 |
| Staking & Rewards | 4 | 0 | 0 | 4 |
| Payments & Pricing | 1 | **2** | 0 | 3 |
| Monitoring & Tools | 4 | 0 | 0 | 4 |
| Advanced Operations | 3 | 0 | 0 | 3 |
| Roadmap & Funding | 0 | **2** | 0 | 2 |
| Tutorials | 0 | 0 | 3 minimal | 3 |
| **Total** | **25** | **4** | **5** | **34** |

**73% of guide pages are complete.** The critical gaps are pricing-strategy and payment-flow (both P0), plus the hybrid bridge content (P0, no dedicated page needed - accordion/section on existing pages).

<CustomDivider />

## 8. Structural Proposal: "Configuration & Optimisation" Section + "Staking & Earning" Merge

### The Problem

"How do I earn?" and "How do I tune my running node?" are different jobs that the current IA conflates. Earning-related content is split across Staking & Rewards (4 pages) and Payments & Pricing (3 pages). Tuning-related content is scattered across Deployment Details (dual-workload-setup), Payments & Pricing (pricing-strategy), and deprecated files (session-limits, benchmarking).

### Job Story Analysis

**J-earn**: "When I want to understand and maximise my earnings, I want to see the complete earning picture in one place, so I can make informed decisions about staking, pricing, and delegation."
- Currently fragmented across 2 sections, 7 pages

**J-tune**: "When I have a running node and want to improve performance or add capabilities, I want a guide to tuning options, so I can optimise without re-reading the setup guide."
- Currently homeless: pricing-strategy is in Payments, dual-workload-setup is in Deployment Details, session-limits is deprecated, benchmarking is deprecated, reward calling config is in Staking

### Proposed Structure

```
Staking & Earning (merge - the "money" section)
├── earnings              ← how orchestrators earn (video fees + AI fees + inflation)
├── rewards-and-fees      ← reward calling mechanics, fee distribution
├── payment-flow          ← ticket receipt, redemption, settlement (currently stub)
├── payments              ← operational payment management
├── attracting-delegates  ← growing stake to earn more
└── governance            ← protocol influence on earning rules

Configuration & Optimisation (new - the "tuning" section)
├── pricing-strategy      ← pricePerUnit, pricePerGateway, autoAdjustPrice, competitive positioning
├── dual-workload-setup   ← adding AI to video or video to AI, VRAM coexistence
├── session-tuning        ← maxSessions, capacity planning, benchmarking results
└── reward-calling-config ← gas optimisation, manual vs auto, threshold analysis
```

### Why This Works (OST)

| Opportunity | Current section | Proposed section | Improvement |
|------------|----------------|-----------------|-------------|
| "How do I earn?" | Split across 2 sections | Staking & Earning (one place) | No section-hopping for the core question |
| "How do I set competitive prices?" | Payments & Pricing (stub) | Configuration & Optimisation | Pricing is a tuning action, not a payment concept |
| "How do I add AI to my video node?" | Deployment Details | Configuration & Optimisation | Post-setup tuning, not initial deployment |
| "How many sessions can I handle?" | Deprecated (nowhere) | Configuration & Optimisation | Has a home again |
| "How do I optimise reward calling?" | Buried in rewards-and-fees | Config & Optimisation (or cross-ref) | Findable as a tuning task |

### Assumption Check

| # | Assumption | Risk | Note |
|---|-----------|------|------|
| 1 | "Pricing is config, not payments" | Low | Operators think "I need to set my price" (config action), not "pricing is part of payments" (conceptual grouping) |
| 2 | "Dual-workload-setup is post-setup tuning, not deployment" | Medium | Could go either way. If the operator is adding AI to an existing node, it's tuning. If setting up dual from scratch, it's deployment. |
| 3 | "Merging 7 money pages into one section won't be too long" | Low | 6 pages is manageable. Gateway Payments & Pricing has 5. |
| 4 | "reward-calling-config deserves its own page" | Medium | Could be a section within rewards-and-fees instead of a standalone page. Depends on content volume. |

### Gateway Parallel

Gateways would benefit from the same pattern but the split is less clear:

```
Gateway equivalent:
  Payments & Pricing (keep as-is - gateway earning isn't staking-based)

  Configuration & Optimisation (new, if needed)
  ├── pipeline-configuration  ← already exists, already does this job
  ├── pricing-strategy        ← keep in Payments? Gateway pricing IS the payment decision
  └── scaling                 ← already in Advanced Ops, could cross-ref
```

For gateways, pricing IS the payment decision (how much to pay orchestrators). For orchestrators, pricing is a competitive positioning decision (how much to charge) - genuinely a tuning/config action. This asymmetry means the same section name works for both tabs but the content scope differs.

### Recommendation

**Do it for orchestrators. Evaluate for gateways later.**

1. Merge Staking & Rewards + Payments & Pricing → **"Staking & Earning"** (6 pages)
2. Create **"Configuration & Optimisation"** (3-4 pages: pricing-strategy, dual-workload-setup, session-tuning, optionally reward-calling-config)
3. Move pricing-strategy from Payments to Config
4. Move dual-workload-setup from Deployment Details to Config
5. Resurrect session-limits content (from deprecated) as session-tuning in Config
6. Keep benchmarking deprecated OR fold into session-tuning as a subsection

### Updated Section Order

```
1. Operator Considerations → "Should I operate?"
2. Deployment Details      → "What do I need and which path?"
3. Workloads & AI          → "What jobs do I run?"
4. Staking & Earning       → "How do I earn?" (MERGED)
5. Config & Optimisation   → "How do I tune my node?" (NEW)
6. Monitoring & Tools      → "How do I keep it running?"
7. Advanced Operations     → "How do I scale?"
8. Roadmap & Funding       → "What support exists?"
9. Tutorials               → "Show me"
```

This places Config & Optimisation after earning (you need to understand what you're optimising FOR) and before monitoring (tuning should precede ongoing observation). The operator journey becomes: understand earnings → tune for better earnings → monitor the results.

<CustomDivider />

## 9. First-Principles Page Breakdown (What Pages Are NEEDED)

Starting from zero. No reference to existing pages. Pure "what does an orchestrator operator need to know and do?" derived from operational reality, job stories, and the Livepeer value proposition.

<CustomDivider />

### 1. Operator Considerations → "Should I operate?"

Someone with a GPU hears about Livepeer. They need to answer one question: "Is this worth my time, money, and GPU?" Three dimensions to that question:

| Page | What it answers | Why it's needed |
|------|----------------|-----------------|
| **operator-rationale** | "Will I make money?" The honest ROI page. Cost categories (hardware amortisation, LPT acquisition, ETH gas, electricity, time commitment). Revenue streams (fees + inflation). Break-even framework. Decision matrix: given MY hardware, MY LPT access, MY time - which path? Includes "three viability questions": is reward calling profitable at my stake? Can I compete on price? Is my setup stable enough for ~95% uptime? | Without this, operators either over-invest (buy hardware for a path that won't pay) or under-commit (join a pool when they could earn more solo). The decision matrix prevents both. |
| **business-case** | "What if I'm a business, not a hobbyist?" Commercial orchestrator model. Serving application workloads (Livepeer Studio, Daydream, custom platforms) under SLAs. Service fee economics vs inflation. Per-gateway pricing. The mental model shift from "mining" to "infrastructure provider." Who the current commercial orchestrators are and what that looks like operationally. | Different persona, different economics. A commercial operator doesn't care about inflation rewards as primary income - they care about service reliability, customer relationships, and fee volume. Mixing this with hobbyist economics confuses both audiences. |
| **protocol-influence** | "Why does this matter beyond money?" The sovereignty and governance case. Orchestrators carry governance weight proportional to total stake. What gets voted on (LIPs, treasury, protocol parameters). The sovereign compute thesis: open infrastructure vs AWS/GCP/Azure monopoly. Censorship resistance. Permissionless GPU access. Who benefits from open video/AI infrastructure. The compounding effect: better operation → more delegation → more governance weight → more protocol influence. | Some operators are aligned actors who care about open infrastructure, not just earnings. This page serves them. It also helps all operators understand why governance participation matters for the protocol they depend on. |

<CustomDivider />

### 2. Deployment Details → "What do I need and which path?"

Decided to proceed. Three decisions to make: (a) what deployment architecture, (b) what hardware, (c) what's the fastest path to running.

| Page | What it answers | Why it's needed |
|------|----------------|-----------------|
| **setup-options** | "Solo, pool, or split?" The deployment architecture decision. Solo operator (full control, full complexity, full earnings). Pool worker (zero LPT, zero on-chain, shared earnings). Pool operator (manage others' GPUs). O-T split (separate orchestrator and transcoder processes for scaling/security). Siphon (route from residential GPU to upstream orchestrator). Comparison table: complexity, LPT required, earnings share, hardware minimum, time to first earning. | Operators who pick the wrong path waste time. A pool worker who should be solo leaves money on the table. A solo operator without enough LPT can't enter the active set. This page prevents misallocation. |
| **requirements** | "What do I actually need?" Hardware: GPU tiers mapped to workload capability (8 GB = LLM + basic video, 12 GB = audio + video, 24 GB = diffusion + video + real-time AI, 48-80 GB = enterprise multi-model). Software: Linux, NVIDIA drivers, Docker. Network: bandwidth per concurrent stream (~6 Mbps down + ~5.6 Mbps up per video session), ports (8935 service, 7935 CLI), static IP or domain. Blockchain: arbETH for gas, LPT for staking (threshold varies), Arbitrum RPC endpoint. Non-technical: monitoring commitment, update cadence, uptime target. Tiered: minimum viable → recommended → production. | Without a clear requirements page, operators discover mid-setup that their GPU has insufficient VRAM, their home internet can't support enough streams, or they can't afford the LPT threshold. Front-load this discovery. |
| **orchestrator-transcoder-setup** | "How do I run a split O-T architecture?" When to split (multi-GPU, security isolation, dedicated protocol node). Orchestrator node config (no GPU needed, handles protocol + routing). Transcoder node config (-transcoder, -orchSecret, GPU assignment). Networking between O and T. Multi-transcoder: adding GPUs across machines. Monitoring split deployments. | O-T split is the path from single-machine to multi-GPU. Without this guide, operators scaling beyond one GPU have no reference architecture. It's also a security best practice (protocol keys on a non-GPU machine). |
| **siphon-setup** | "How do I contribute a residential GPU?" Lightweight transcoder connecting to a remote orchestrator. Use cases: GPU at home with unstable internet, GPU on shared hosting, GPU where you can't run a full node. Configuration, limitations, earnings expectations. | Niche but real. Operators with capable hardware in non-ideal network conditions need this path. Without it they either don't participate or set up a full node that fails due to connectivity. |
| **join-a-pool** | "What's the fastest path to earning with zero LPT?" What pools are. How to evaluate: fee share percentage, pool reliability/uptime history, supported workloads (video/AI/dual), operator reputation. Step-by-step: connect as transcoder worker. Earnings mechanics: how the pool operator distributes fees. Active community pools (with links). When to consider going solo. | Pool workers are the largest operator segment by count but the least well-served by docs. Most pool workers learn by asking in Discord. A clear guide with pool evaluation criteria and active pool links reduces friction to first earning. |

<CustomDivider />

### 3. Workloads & AI → "What jobs do I run?"

Hardware ready, deployment chosen. Now: what does the network actually need, what earns best, and how do I set up each workload type?

| Page | What it answers | Why it's needed |
|------|----------------|-----------------|
| **workload-landscape** | "What work exists on Livepeer and what pays?" The market overview. Video transcoding: established since 2017, steady demand, per-pixel pricing, lower margins but reliable volume. Batch AI inference: 10 pipeline types, growing demand, per-capability pricing, higher margins but variable volume. Real-time AI (Cascade): emerging, highest value per compute second, continuous streaming, 24 GB+ VRAM. BYOC: custom containers, niche. Comparison table: demand level (high/medium/low/emerging), VRAM requirement, earning potential, entry barrier. "Which workloads to prioritise based on my GPU and the current market." | Operators need market context to make workload decisions. Without demand data, they load models nobody requests. This page should be the most frequently updated page in the section - linking to live data at tools.livepeer.cloud for current pipeline demand. |
| **video-transcoding-operations** | "How does video transcoding work from my node's perspective?" Segment-based pipeline: gateway sends 2-second segments, your node decodes (NVDEC) → re-encodes to requested profiles (NVENC) → returns renditions. Codec support (H.264 baseline/main/high, VP8/VP9). NVENC hardware session limits (consumer GPUs limit concurrent sessions to 3-8; the NVIDIA driver patch). Per-pixel pricing from the sell side. Quality verification. Performance characteristics: segments/second, real-time duration ratio. | Video is the established workload. Operators need to understand the segment pipeline, NVENC limits (the most common production issue for video operators), and how pricing works from their side. |
| **ai-inference-operations** | "How does AI inference work from my node's perspective?" AI worker/runner architecture: go-livepeer orchestrates, separate AI runner containers execute. Two runner types: livepeer/ai-runner (diffusion, vision, audio) and Ollama runner (LLM). aiModels.json: the single config that defines what you serve, at what price, and how. Model lifecycle: download from HuggingFace → load into VRAM (warm) or keep on disk (cold) → process inference requests → return results. On-chain capability registration via -aiServiceRegistry and AIServiceRegistry contract. 10 pipeline types with their resource profiles. | AI is fundamentally different from video. Different runner architecture, different pricing model, different discovery mechanism. Operators coming from video need the conceptual bridge. Operators starting with AI need the complete picture without video baggage. |
| **diffusion-pipeline-setup** | "How do I set up text-to-image, image-to-image, upscale, and image-to-video?" Step-by-step for the core diffusion pipelines (the most in-demand AI workloads). Docker-compose with livepeer/ai-runner. aiModels.json entries for each pipeline. Model selection by VRAM tier (Lightning/Turbo for speed, SDXL for quality). Warm model configuration. Optimisation flags (SFAST, DEEPCACHE - when to use, which models, can't combine). Testing locally. Registering on-chain. Verifying at tools.livepeer.cloud. | Diffusion is the highest-demand AI workload category. It needs its own setup guide because the models, pricing, and optimisation are specific to diffusion. Mixing with LLM or audio setup creates confusion. |
| **llm-pipeline-setup** | "How do I set up LLM inference?" Completely different architecture from diffusion. Ollama runner (not livepeer/ai-runner). Docker-compose with Ollama + Ollama AI Runner container. Model selection: quantised models for 8 GB VRAM (llama3.1:8b), larger for 24 GB+. Model ID mapping: Ollama uses different IDs than HuggingFace (both are valid). Pricing: per-token equivalent (not per-pixel). The entry point for operators with older/smaller GPUs who can't run diffusion. | LLM is architecturally distinct. Different container, different model ecosystem, different pricing unit, different VRAM profile. Operators with 8 GB GPUs can run LLM but not diffusion - this is their entry point to AI earning. Burying it inside a "batch AI setup" page loses this audience. |
| **realtime-ai-setup** | "How do I run live video-to-video AI?" Fundamentally different from batch: continuous frame-by-frame transformation of live video streams, not request/response. WebRTC input/output. ComfyStream workflow engine. VRAM: 24 GB recommended. -livePaymentInterval for ongoing payment during stream. Latency requirements (&lt;100ms per frame). Testing with live streams. The highest-value compute on the network per GPU-second. | Real-time AI (Cascade) is a different operational model. Continuous streams, not individual requests. Payment intervals, not per-job tickets. Frame latency, not request latency. It deserves dedicated treatment because an operator setting this up needs different mental models than batch AI. |
| **audio-and-vision-pipelines** | "How do I set up audio-to-text, text-to-speech, image-to-text, segment-anything-2?" The less common but growing pipelines. Each has distinct model requirements: Whisper (12 GB), SAM2 (12 GB+), vision-language models (4 GB), TTS (varies). Per-pipeline setup and pricing. These are niche enough to share one page but distinct enough from diffusion that they shouldn't be buried in a general setup guide. | Operators looking at pipeline diversification need a reference for the less common workloads. These have lower competition (fewer operators serving them) which can mean higher margins. |
| **model-demand-reference** | "Which models fit my GPU AND are actually being requested?" Two-part reference: (1) VRAM requirements by model family (SD 1.5, SDXL, Lightning, LLM quantised, Whisper, SAM2) mapped to GPU tiers (8/12/16/24/48/80 GB). (2) Current demand data: which pipelines and models are actively being requested by gateways, at what prices, with what frequency. Links to tools.livepeer.cloud/ai/network-capabilities for live data. Warm vs cold trade-offs. Community-tested configurations. | The biggest AI operator mistake is loading models nobody requests. A VRAM reference without demand data is half the answer. This page combines "what fits" with "what earns" - the complete model selection guide. |

<CustomDivider />

### 4. Staking & Earning → "How do I earn?"

The complete money story in one section. An operator should be able to read this section front to back and understand every aspect of how earnings flow.

| Page | What it answers | Why it's needed |
|------|----------------|-----------------|
| **earning-model** | "How does earning work on Livepeer?" The complete picture. Two independent revenue streams: ETH service fees (paid per job via PM tickets, proportional to work done, split with delegators via fee cut) and LPT inflation rewards (minted per round, proportional to total bonded stake, split with delegators via reward cut). Video vs AI earning profiles (video = steady/lower margin, AI = variable/higher margin). What drives each stream (workload volume vs stake weight). Profitability threshold: when do earnings exceed costs? | This is the #1 question every operator has. Currently fragmented across multiple pages. A single "earning model" page that covers both streams, both workload types, and the delegator split gives operators the complete picture before they configure anything. |
| **reward-mechanics** | "How do rounds, reward calls, and fee distribution work?" Round-based system (~22 hours). Calling Reward() once per round to claim minted LPT. Gas cost on Arbitrum (~$0.01-0.12). Missed rounds = permanently forfeited LPT. Auto vs manual calling (-reward flag). Fee distribution: reward cut (% of LPT kept) and fee cut (% of ETH kept). Setting competitive cuts. The relationship between cuts and delegation attraction. | Reward calling is the most mechanically critical operation. Missing a round costs real money with no recovery. Operators need detailed mechanics, not just "call Reward() each round." |
| **payment-receipt** | "How do I actually receive ETH from gateways?" The orchestrator side of PM tickets. How tickets arrive during job execution. Winning ticket detection (cryptographic lottery). Redemption on Arbitrum TicketBroker contract. Gas costs for redemption and batching strategy. Payment monitoring: expected vs received (statistical convergence). Troubleshooting unredeemed tickets. The "probabilistic" part explained: why some rounds you earn more, some less, but over time it converges. | Operators see "probabilistic micropayments" and don't understand why some rounds show zero ETH. Without this page they think the system is broken. The PM explanation needs to be from the receiver's perspective, not the protocol perspective. |
| **growing-delegation** | "How do I attract more delegated stake?" Why delegation matters (active set position → more work → more fees, AND more governance weight). What delegators evaluate: reward cut (lower = more LPT to delegators), fee cut (lower = more ETH to delegators), uptime history, performance consistency, communication/reputation. Building operator reputation: Explorer profile, Discord presence, social media, transparent governance communication. Self-stake signalling (skin in the game). When to lower cuts vs when to hold. | Delegation is the primary lever for growing earnings. Most operators set cuts at activation and never revisit. This page teaches the delegation market - it's a competitive landscape where cuts, reliability, and communication all matter. |
| **governance-participation** | "How do I vote and why should I?" Voting mechanics: LIPs via Livepeer Explorer, stake-weighted votes, quorum requirements (33.33% staked LPT support + 50% votes cast), polling periods (~10 rounds). Delegator override (delegators can vote independently). SPE proposals and treasury allocation. Where to follow proposals (Forum, GitHub livepeer/LIPs). Why governance participation matters for delegation (delegators want engaged orchestrators). | Governance is part of the earning story because: (1) governance decisions directly affect earning parameters (inflation rate, fee structures, active set size), (2) governance participation is a delegation attraction signal, (3) orchestrators with large stake shape the protocol they depend on. |

<CustomDivider />

### 5. Configuration & Optimisation → "How do I tune my node?"

The node runs. Earnings are flowing. Now: how to earn MORE efficiently. Every page here is about adjusting a running system, not initial setup.

| Page | What it answers | Why it's needed |
|------|----------------|-----------------|
| **pricing-strategy** | "How do I set prices that attract work without leaving money on the table?" Video pricing: -pricePerUnit in wei per pixel, typical ranges, how to survey competitor pricing via Explorer. AI pricing: per-pipeline, per-model pricing in aiModels.json, wei vs USD string notation (0.5e-2USD), the capabilities_prices array format for -maxPricePerCapability. Per-gateway pricing: -pricePerGateway for commercial relationships (different price for Livepeer Studio vs public gateways). Dynamic pricing: -autoAdjustPrice (experimental). Competitive positioning: "too high = no jobs, too low = unprofitable" framework with concrete methodology (check Explorer, find the 25th-75th percentile, position within). | **The #1 content gap.** Operators cannot compete without pricing guidance. Every other piece of the earning puzzle is documented; pricing is not. An operator who sets -pricePerUnit wrong earns nothing regardless of hardware, stake, and uptime. |
| **dual-mode-configuration** | "How do I run both video and AI on the same node?" The hybrid/dual mode page. For new operators: unified docker-compose with all flags. For existing video operators: the exact configuration delta (add -aiWorker, -aiModels, AI runner container - no other changes needed). VRAM coexistence: NVENC/NVDEC use dedicated silicon (doesn't compete with CUDA for AI), but CUDA cores and VRAM are shared. Warm model strategy for dual nodes: one warm AI model + video transcoding fits in 24 GB. When to split to O-T instead of running dual on one card (GPU contention signals, session failure rates). Earnings from both streams simultaneously. | Most active operators run dual mode. It's the majority production configuration. Without this page, operators stitch together the video setup guide and AI setup guide manually, missing the VRAM coexistence nuances and the "when to split" decision. |
| **capacity-planning** | "How many concurrent jobs can my node handle, and how do I maximise throughput?" Session limits: -maxSessions flag, what it controls, how to determine the right value. VRAM budget calculator: video sessions (NVENC-limited, not VRAM-limited) + warm AI models (VRAM-limited) + cold model headroom. NVENC hardware session limits: consumer GPUs cap at 3-8 concurrent hardware encode sessions; the NVIDIA driver patch to remove the limit; implications for session count. Benchmarking: livepeer_bench tool, how to run it, interpreting real-time duration ratio (&gt;1.0 = your GPU can keep up), finding your session ceiling. CPU vs GPU transcoding: when CPU makes sense (no NVIDIA GPU, or NVENC sessions exhausted). When to add hardware vs optimise config. | Capacity planning is the bridge between "it works" and "it earns well." Operators who don't understand NVENC limits hit OrchestratorCapped errors and lose work. Operators who don't benchmark over-commit and produce failed segments. This page prevents both. |
| **ai-model-management** | "How do I choose, load, and rotate AI models for maximum earnings?" Warm vs cold strategy: warm models respond instantly (competitive advantage), cold models save VRAM (flexibility). One warm model per GPU during beta. VRAM allocation: how to budget VRAM across multiple models (warm + cold headroom). Model rotation: swapping warm models based on demand patterns (check tools.livepeer.cloud weekly). Optimisation flags: SFAST (up to 25% faster, no quality loss), DEEPCACHE (up to 50% faster, minimal quality loss), cannot combine, only for warm diffusion models, NOT for Lightning/Turbo. Monitoring model loading times. Demand-driven selection: load what gateways are requesting, not what sounds impressive. | AI model management is the highest-leverage tuning activity. Loading the wrong model = zero AI earnings. Loading the right model warm = instant response = gateway preference = more jobs. This is operational alpha for AI operators. |
| **reward-call-tuning** | "How do I optimise reward calling to maximise LPT per gas spent?" When reward calling is unprofitable (small stake → reward value < gas cost). The profitability threshold calculation: (your_stake / total_stake) × round_inflation × LPT_price vs gas_cost_in_ETH. Automatic vs manual calling (-reward flag). Timing strategies: calling early in the round (guaranteed, higher gas) vs waiting (risk of missing, lower gas). Monitoring for missed rounds. Automated alerting (Prometheus alert on missed reward calls). When to skip calling (stake too small) and accumulate instead. | Reward calling seems simple ("just call it each round") but has real economics. Small operators may spend more on gas than they earn in rewards. The threshold calculation tells them whether to call or wait. Missing rounds without knowing this costs real money. |

<CustomDivider />

### 6. Monitoring & Tools → "How do I keep it running?"

The node is tuned and earning. Now: how to detect problems before they cost money, and fix them when they happen.

| Page | What it answers | Why it's needed |
|------|----------------|-----------------|
| **operator-toolbox** | "What tools exist for managing my orchestrator?" Livepeer Explorer: live stake, rank, sessions, fees, rewards, delegator list, performance history. tools.livepeer.cloud: AI network capabilities, pipeline demand, pricing benchmarks. livepeer_cli: local node management (status, price updates, reward calls, staking operations). Community tools: Speedy Bird monitoring stack (Prometheus + Grafana + Loki), Titan Node pool client, Orchestrator Watcher bots. Diagnostic endpoints: /status, /getOrchestrator, /getNetworkCapabilities, /metrics. | Operators need to know what tools exist before they can set up monitoring. This is the "what's available" page that precedes the "how to set it up" page. |
| **explorer-operations** | "How do I use the Explorer to manage my node day-to-day?" Profile page walkthrough. Setting reward cut and fee cut. Viewing delegator list and stake distribution. Performance metrics: what the scoring means. Round history: identifying missed reward calls. Comparing with competitors: price, stake, performance, session count. Using Explorer as the external mirror of your node's state (if you're not on Explorer, gateways can't find you). | Explorer is the primary management dashboard for most operators. A guide focused on operational use (not just "here's what Explorer shows") helps operators extract actionable insight. |
| **metrics-and-alerting** | "How do I set up monitoring that tells me when something is wrong?" Prometheus setup: -monitor flag, endpoint at localhost:7935/metrics, -metricsPerStream for granular data. Key metrics to scrape: transcoding_success_rate, session_count, session_max_limit, ai_job_success_rate, go_memstats_heap_bytes, segment_duration. Grafana dashboard configuration. Alert rules: missed reward calls, session saturation (&gt;80%), high error rate, OOM approaching, zero sessions for &gt;1 hour. Docker monitoring for AI runner containers. Loki for log aggregation (optional). | Without alerting, operators discover problems after they've lost money (missed rewards, failed jobs, dropped sessions). Proactive monitoring is the difference between a hobby and an operation. |
| **troubleshooting** | "Something broke. How do I fix it?" Symptom-based guide organised by what the operator observes: (1) Not receiving video jobs - 7 diagnostic checks (active set membership, service URI reachability, price competitiveness, NAT/firewall, transcoding capability). (2) Not receiving AI jobs - 5 checks (AIServiceRegistry, capability visibility, runner health, pricing, model loaded). (3) OrchestratorCapped - session limit hit, VRAM causes, fixes. (4) GPU OOM - warm model overcommit, session excess, fixes. (5) Missed reward calls - automation failure, gas depletion, fixes. (6) NVENC session limit - driver limit, the patch, alternatives. (7) Networking unreachable - firewall, NAT, serviceAddr misconfiguration. (8) Price not updated on-chain. (9) AI model download failures. Diagnostic command reference. Escalation: Discord #orchestrating, Forum, GitHub issues. | Every operator will hit problems. A symptom-based guide (indexed by what they SEE, not what's technically wrong) is the fastest path from "broken" to "fixed." This is the page operators will visit most after initial setup. |

<CustomDivider />

### 7. Advanced Operations → "How do I scale and grow?"

For operators who've been running profitably and want to increase their operation. Not beginner content.

| Page | What it answers | Why it's needed |
|------|----------------|-----------------|
| **gateway-relationships** | "How do gateways find me and how do I get selected for more work?" Discovery mechanisms: on-chain ServiceRegistry (active set + registered service URI), direct configuration (-orchAddr), webhook-based discovery (-orchWebhookUrl), AI service registry (-aiServiceRegistry). Selection criteria gateways use: price (must be ≤ gateway's max), latency (sub-50ms preferred), reliability (performance history), capabilities (pipeline + model support). Optimising for selection: competitive pricing, high uptime, warm models, fast response times. Commercial relationships: per-gateway pricing (-pricePerGateway), SLAs, direct communication with gateway operators. The AI service registry and capability advertisement. | Operators who don't understand gateway selection operate blind. They set a price and hope. This page explains the selection algorithm from the orchestrator's perspective and gives concrete optimisation strategies. |
| **running-a-pool** | "How do I run an orchestrator pool that accepts external GPU workers?" Pool architecture: your orchestrator node accepts remote transcoder workers via -orchSecret. Worker management: onboarding, performance monitoring, disconnection handling. Fee distribution: entirely off-chain and custom - you decide how to pay workers. Pool economics: operator take vs worker share, volume-based fee tiers. Worker reliability: monitoring per-worker performance, handling underperforming workers. Communication: setting expectations, payout frequency, reporting. Pool listing in community directories. | Pool operation is a qualitatively different business from solo operation. You're managing other people's hardware and distributing their earnings. The off-chain nature of fee distribution means there's no protocol safety net - you need operational processes. |
| **fleet-operations** | "How do I run orchestrators at data-centre scale?" Multi-GPU single machine: assigning GPUs to different workloads (-nvidia flag per transcoder). Multi-machine: O-T split across machines, network topology. Fleet deployment: config management (Ansible, Terraform), standardised docker-compose templates, centralised logging. Cost optimisation: workload routing to lowest-cost hardware, demand-based scaling (spin up/down GPU workers). Geographic distribution: transcoders in multiple DCs feeding single orchestrator. When to run multiple orchestrator identities vs one orchestrator with many transcoders. | Enterprise operators need fleet patterns. A single orchestrator with 20 transcoders across 3 data centres is a real deployment pattern. Without this guide they reinvent the architecture. |

<CustomDivider />

### 8. Roadmap & Funding → "What support exists?"

Ecosystem resources for operators at any stage. Not operational - motivational and practical support.

| Page | What it answers | Why it's needed |
|------|----------------|-----------------|
| **funding-and-support** | "What grants, programmes, and community resources exist for orchestrator operators?" SPE (Strategic Priority Enabler) grants: what they fund, how to apply, milestone accountability. AI Video Startup Programme. Livepeer Foundation resources. Treasury proposals: how to propose funding for tooling or infrastructure. Community support channels: Discord #orchestrating (real-time), Forum /c/transcoders (long-form), Livepeer Docs (reference). Getting started: what new operators should do first. | Operators considering Livepeer need to know there's an ecosystem behind them. Grant funding can offset initial hardware/LPT costs. Community support reduces the "alone in a docs maze" feeling. |
| **operator-showcase** | "Who's actually running orchestrators and what does that look like?" Active operator profiles: hardware, workloads, earnings range, operating model. Pool operator profiles. Commercial operator examples. Community highlights: what operators have built beyond basic operation (monitoring tools, pool clients, guides). Links to Explorer for live data. | Social proof. An aspiring operator needs to see that real people are doing this profitably. A showcase with concrete examples (hardware, earnings, operating model) is more convincing than any amount of technical documentation. |

<CustomDivider />

### 9. Tutorials → "Show me, start to finish"

Complete end-to-end walkthroughs. Not reference, not concepts - one specific outcome from start to finish.

| Page | What it answers | Why it's needed |
|------|----------------|-----------------|
| **zero-to-first-reward** | "Walk me through every step from nothing to my first LPT reward." Install go-livepeer. Configure for video transcoding. Acquire and stake LPT. Connect to Arbitrum. Activate on-chain. Set pricing. Verify service URI is reachable. Send a test transcode. Wait for round. Call Reward(). See reward on Explorer. Total time: ~4-8 hours. | The most requested content: a single page that takes you from zero to earning. No cross-references to other pages. No "see the Setup section." Everything in one place, in order. |
| **ai-earning-quickstart** | "I have a 24 GB GPU and want to earn from AI in under 2 hours." Install go-livepeer + AI runner. Write aiModels.json with one warm diffusion model (e.g. SG161222/RealVisXL_V4.0_Lightning). Configure docker-compose. Register on AIServiceRegistry. Verify at tools.livepeer.cloud. Send a test inference. See first AI job in logs. Emphasises: no active set needed, minimal LPT, capability-based routing. | The lowest-barrier entry to Livepeer earning. Operators with 24 GB GPUs but limited LPT can start earning from AI immediately. This tutorial makes that concrete: 2 hours, one model, first job. |
| **add-ai-to-video-node** | "I run video transcoding. Show me exactly how to add AI without breaking anything." The configuration delta: what to ADD (aiModels.json, AI runner container, -aiWorker flag). What NOT to change (existing video config, ports, staking). VRAM check: how much headroom you have. Model selection: which single model to start with based on remaining VRAM. Test: verify both video AND AI are working. Dual earnings verification: see both fee types in Explorer. | The hybrid bridge as a tutorial. Existing video operators are the largest audience for AI adoption. They need confidence that adding AI won't break their video operation. This tutorial provides that confidence through explicit "what changes and what doesn't" framing. |
| **full-ai-pipeline-tutorial** | "Show me AI end-to-end: gateway + orchestrator + model, from download to inference result." End-to-end AI tutorial covering BOTH sides. Start with a HuggingFace model (e.g. ByteDance/SDXL-Lightning). Set up orchestrator with AI runner + aiModels.json. Set up a gateway (off-chain, same machine or separate) pointing at the orchestrator. Send inference request through the gateway. Verify the full pipeline: gateway receives request → routes to orchestrator → AI runner processes → response returned. Covers model download, warm loading, gateway configuration, and the complete request lifecycle. **This bridges the gateway-orchestrator gap** - many operators run both roles and need to understand the full pipeline. | A significant number of orchestrator operators also run gateways. No current tutorial covers the combined flow. This is the "understand the whole system" tutorial that shows how both roles interact with a real AI model. |
| **realtime-ai-tutorial** | "Show me live video-to-video AI: stream in, transformed stream out." End-to-end real-time AI (Cascade) tutorial. Set up orchestrator with `livepeer/ai-runner:live-base` container and a ComfyStream workflow. Set up gateway for live AI routing. Send a WebRTC or RTMP stream. See transformed output in real-time (&lt;100ms per-frame). Covers: ComfyStream workflow selection, `-livePaymentInterval` configuration, VRAM requirements (24 GB), latency monitoring. **End state**: operator has a working real-time AI pipeline where a video stream enters and a transformed stream exits continuously. | Real-time AI is Livepeer's highest-value compute offering and the most differentiated from competitors. It's also the most complex to set up (different runner image, continuous stream model, payment intervals). A dedicated tutorial prevents operators from trying to extrapolate from batch AI setup. |

<Note>
**Gateway-Orchestrator bridge**: A significant number of orchestrator operators also run gateways. The `full-ai-pipeline-tutorial` and `realtime-ai-tutorial` deliberately cover BOTH roles in a single tutorial because that reflects operational reality. These tutorials should cross-reference the Gateway tab's setup and pipeline documentation rather than duplicating it. The gateway setup steps within these tutorials should be minimal (off-chain, single docker-compose service) with links to the full gateway guides for production gateway configuration.

**Action**: These tutorial stubs will be fleshed out after the core Guides sections are complete. The Workloads & AI section pages (diffusion-pipeline-setup, realtime-ai-setup) provide the reference material; these tutorials provide the "do it all in one sitting" experience.
</Note>

<CustomDivider />

### Summary

| Section | Pages needed | Core question |
|---------|-------------|---------------|
| 1. Operator Considerations | 3 | Should I? |
| 2. Deployment Details | 5 | What path? |
| 3. Workloads & AI | 8 | What do I run? |
| 4. Staking & Earning | 5 | How do I earn? |
| 5. Config & Optimisation | 5 | How do I tune? |
| 6. Monitoring & Tools | 4 | How do I keep it running? |
| 7. Advanced Operations | 3 | How do I scale? |
| 8. Roadmap & Funding | 2 | What support exists? |
| 9. Tutorials | 6 | Show me |
| **Total** | **41** | |

### What's different from the current IA

1. **Workloads split by architecture, not by batch/realtime**: Diffusion, LLM, real-time AI, and audio/vision are four distinct operational setups. The current split (batch vs realtime) misses the LLM architectural difference entirely.
2. **Pricing has a dedicated page in Config, not Payments**: Pricing is an operational tuning decision, not a payment concept. Moving it to Config & Optimisation places it where operators will look when they think "I need to adjust my prices."
3. **"Earning model" replaces "earnings"**: The page covers both revenue streams end-to-end, not just "here's how rewards work."
4. **"Payment receipt" replaces "payment flow"**: Named from the operator's perspective (I RECEIVE), not the protocol's perspective (payments FLOW).
5. **"Capacity planning" consolidates benchmarking + session limits + VRAM budgeting**: Three related concerns that were on separate (deprecated) pages become one coherent guide.
6. **"AI model management" is its own page**: The highest-leverage tuning activity for AI operators currently has no dedicated coverage. Operational model management (warm/cold strategy, rotation, optimisation flags) is scattered across setup pages.
7. **Tutorials are orchestrator-specific**: Three tutorials mapped to the three highest-priority job stories (J1, J6, J2), replacing imported gateway content.
8. **"Gateway relationships" replaces "gateways-orchestrators"**: Named for what the operator cares about (relationships with gateways), not what the page compares (gateways vs orchestrators).

<CustomDivider />

## 9b. Gaps Identified After Setup/Quickstart Clarification

### Missing operational "running X" guides

The first-principles breakdown covers what workloads exist and how to set them up, but misses the ongoing operational reality of RUNNING specific services. An operator who has set up their node still needs:

**"Running the AI Service" - NOT COVERED ANYWHERE**
- What happens after AIServiceRegistry registration? How does ongoing AI service operation differ from initial setup?
- Model rotation in production (not just "how to configure" but "when to rotate based on demand shifts")
- AI runner container lifecycle: updates, health monitoring, restart strategies
- Handling cold-start requests gracefully (what does the gateway see when your model is cold?)
- AI-specific log patterns and what they mean operationally
- **Where it belongs**: Config & Optimisation > ai-model-management covers some of this, but the "running the service day-to-day" framing is missing

**"Running the Transcoder" - NOT COVERED ANYWHERE**
- What does day-to-day video transcoding operation look like?
- NVENC session monitoring and the driver patch maintenance
- Segment processing metrics: what's normal, what indicates problems
- Transcoding quality verification in production
- Video-specific log patterns
- **Where it belongs**: Could be a section in video-transcoding-operations, but the current page is about "how video works" not "how to operate video day-to-day"

**Recommendation**: Add an "Operations" subsection to BOTH video-transcoding-operations and ai-inference-operations that covers day-to-day running. Alternatively, create a dedicated "Day-to-Day Operations" page in Monitoring & Tools that covers the operational rhythms of both workload types.

### Missing cross-role guide

**"Gateway + Orchestrator: Running Both" - CRITICAL GAP**

Many operators run both a gateway AND an orchestrator. This is especially common for:
- AI operators who want to test their own inference end-to-end
- Commercial operators serving their own products (gateway routes to their own orchestrator)
- Operators who want to offer a complete service (accept requests AND process them)

No guide covers this combined deployment. The tutorials (full-ai-pipeline-tutorial, realtime-ai-tutorial) will show the end-to-end flow, but there's no **operational guide** for running both roles in production.

**What this guide needs:**
- Architecture: single machine vs separate machines for gateway and orchestrator
- Port allocation: gateway on 8935, orchestrator on 8936 (or same machine with different ports)
- The self-routing question: can/should a gateway route to its own orchestrator? What are the implications?
- Monitoring both roles: which metrics for each, combined dashboard
- Pricing alignment: your gateway's -maxPricePerUnit should be >= your orchestrator's -pricePerUnit
- The off-chain gateway + on-chain orchestrator pattern (most common combined deployment)

**Where it belongs**: Advanced Operations (it's not basic setup - it's an advanced deployment pattern). Or a new "Cross-Role Operations" section. The tutorials cover "how to set it up once"; this guide covers "how to run it ongoing."

### Missing AI config guides

**aiModels.json deep reference - PARTIALLY COVERED but fragmented**

aiModels.json is THE configuration file for AI orchestrators. It's referenced in:
- ai-workloads-guide (overview of the format)
- batch-ai-setup (per-pipeline entries)
- realtime-ai-setup (Cascade-specific entries)
- model-vram-reference (model IDs and VRAM)

But there's no single authoritative reference for ALL aiModels.json fields:
- `pipeline` (required)
- `model_id` (required - HuggingFace ID, must match Livepeer-verified list)
- `price_per_unit` (required)
- `warm` (boolean - preload into VRAM)
- `pixels_per_unit` (pricing denominator)
- `currency` (WEI or USD string)
- `url` (external container endpoint for BYOC)
- `token` (HuggingFace auth token for gated models)
- `capacity` (concurrent request limit per container)
- `optimization_flags` (SFAST, DEEPCACHE)

**Recommendation**: Add an aiModels.json field reference to ai-inference-operations or create it as a standalone reference page in Resources > Technical Reference. Currently operators piece together the format from 4 different pages.

**NVIDIA driver patch guide - REFERENCED but not documented**

Multiple pages reference "the NVIDIA driver patch" to remove the NVENC concurrent session limit on consumer GPUs (3-8 sessions). No page actually documents:
- What the patch is (nvidia-patch / keylase/nvidia-patch)
- How to apply it per driver version
- Risks (warranty void, update breaks patch)
- Verification (how to confirm sessions are uncapped)

**Where it belongs**: Deployment Details > Requirements (as an accordion or linked sub-page) or Resources > Technical Reference.

### Updated page count

| Section | Pages needed (from 9) | Additional gaps | Revised total |
|---------|----------------------|----------------|---------------|
| 1. Operator Considerations | 3 | 0 | **3** |
| 2. Deployment Details | 5 | 0 | **5** |
| 3. Workloads & AI | 8 | +1 (aiModels.json reference, or fold into existing) | **8-9** |
| 4. Staking & Earning | 5 | 0 | **5** |
| 5. Config & Optimisation | 5 | 0 (ai-model-management covers operational AI) | **5** |
| 6. Monitoring & Tools | 4 | 0 (day-to-day ops fold into existing workload pages) | **4** |
| 7. Advanced Operations | 3 | +1 (gateway-orchestrator combined operations) | **4** |
| 8. Roadmap & Funding | 2 | 0 | **2** |
| 9. Tutorials | 6 | 0 | **6** |
| **Resources (technical)** | - | +1 (NVIDIA driver patch) | **+1** |
| **Total** | | | **43-44** |

### Priority of new gaps

| Priority | Gap | Location | Rationale |
|----------|-----|----------|-----------|
| **P0** | Gateway + Orchestrator combined operations guide | Advanced Operations | Many operators run both. No guide exists. The tutorials show setup but not ongoing operation. |
| **P1** | aiModels.json field reference | Workloads or Resources | THE config file for AI operators. Currently fragmented across 4 pages. |
| **P1** | Day-to-day operations content for AI service | ai-inference-operations or ai-model-management | "Set it up" is covered; "run it day-to-day" is not. |
| **P2** | NVIDIA driver patch guide | Resources > Technical | Referenced in multiple pages, documented nowhere. |
| **P2** | Day-to-day operations content for video transcoding | video-transcoding-operations | Same gap as AI but less acute (video is simpler operationally). |

## 10. Quickstart and Setup Paths (First Principles)

### The Question

What is the fastest path from "I have a GPU" to "I am earning on Livepeer"? And what is the complete setup path for the primary persona?

These are different questions. The quickstart minimises time-to-first-value. The setup maximises long-term operational readiness. They serve different moments in the journey.

<CustomDivider />

### Quickstart: Lowest Time to Activation

**Constraint analysis - what blocks activation speed?**

| Blocker | Time cost | Can it be deferred? |
|---------|----------|-------------------|
| Installing go-livepeer | 5-15 mins (Docker pull) | No |
| NVIDIA driver setup | 0 mins (if already installed) or 30+ mins | No - GPU required |
| Acquiring LPT for staking | Hours to days (exchange, bridge) | **Yes - pool worker path needs zero LPT** |
| Acquiring arbETH for gas | Hours (bridge from L1) | **Yes - pool worker and off-chain paths need zero ETH** |
| On-chain activation | 5 mins (one transaction) | **Yes - pool workers don't activate** |
| Configuring AI models | 15-30 mins (aiModels.json, runner container) | **Yes - video-only needs none** |
| Waiting for first job | Minutes to hours | Cannot be controlled |

**IMPORTANT: Setup does not equal earning.** The quickstart and setup sections get the node technically operational. Earning is a business outcome that depends on pricing, demand, stake, reputation, and market conditions. The Guides section (Staking & Earning, Config & Optimisation) covers the path from "running" to "earning." Conflating technical setup with business earning creates false expectations.

**Reality check: what paths actually work for a quickstart?**

**Video off-chain quickstart - VIABLE:**
- `go-livepeer -orchestrator -transcoder -network offchain` works for local testing
- Run a gateway on the same machine pointing at the orchestrator: `go-livepeer -gateway -network offchain -orchAddr 127.0.0.1:8936`
- Send a test stream via ffmpeg, verify transcoded output
- Proves: GPU works, NVENC encoding works, segment pipeline works
- Does NOT earn (off-chain, no staking, local only)
- Confirmed viable by existing tutorial stub (`tutorial-offchain-transcoding-test`)
- **Total time: ~20-30 minutes**

**AI quickstart with HuggingFace model - VIABLE (with caveats):**
1. Pull Docker image + AI runner container (10 mins)
2. Write docker-compose with `-orchestrator -transcoder -aiWorker -aiModels` + AI runner service (15 mins)
3. Write minimal aiModels.json with one warm model downloaded from HuggingFace (5 mins)
4. Wait for model download (5-30 mins depending on model size)
5. Test locally: `curl http://localhost:8000/text-to-image` hits the AI runner directly (5 mins)
6. **Total time: ~35-65 minutes. Proves AI pipeline works on your hardware.**

Caveats for AI:
- Models download from HuggingFace (requires internet, some models need HF token)
- Local testing verifies the pipeline works but not network earning
- On-chain registration (AIServiceRegistry) is a Setup step, not a quickstart step
- Which models have actual demand on the network requires checking `tools.livepeer.cloud/ai/network-capabilities` - a Guides concern, not a quickstart concern

**BYOC on CPU - lowest lift smoke test (no GPU required):**
- BYOC containers can run on CPU
- Proves the Livepeer orchestrator framework works on the machine
- Existing gateway BYOC CPU tutorial can be rewritten with orchestrator focus
- **Recommendation: adapt the gateway BYOC CPU tutorial as an orchestrator-focused quickstart path for operators without NVIDIA GPUs**
- Does NOT earn (near-zero demand for custom BYOC on public network)

~~Pool worker~~ **NOT a quickstart.** Joining a pool requires obtaining an `-orchSecret` from a pool operator. There is no automatic pool discovery or self-service joining. The operator must: find a pool (Discord, Forum, community-pools page), contact the pool operator, negotiate terms, receive the secret. This is a days-to-weeks social process, not a 15-minute technical setup. Pool worker belongs in Guides > Deployment Details, not Quickstart.

**What the Quickstart section should be:**

The quickstart verifies the technology works on your hardware. It is NOT the path to earning - that's what Setup + Guides are for.

| Page | What it does | Time | Outcome |
|------|-------------|------|---------|
| **quickstart-overview** | Routes operator to the right quickstart path. "The quickstart verifies your hardware. The Setup section configures production operation. The Guides section covers earning, pricing, and optimisation." | 2 mins | Path chosen |
| **video-quickstart** | Off-chain video transcoding test. Docker pull → orchestrator + gateway on same machine → ffmpeg test stream → verify transcoded output. No LPT, no ETH, no Arbitrum. Proves GPU and NVENC work. | **20-30 minutes** | "My GPU transcodes video on Livepeer" confirmed |
| **ai-quickstart** | AI inference test. Docker pull → AI runner + orchestrator → aiModels.json with one HuggingFace model → curl test → verify inference response. No on-chain registration needed for local test. Proves AI pipeline works. | **35-65 minutes** | "My GPU runs AI inference on Livepeer" confirmed |
| **what-next** | After quickstart: decision tree to Setup section. "Ready for production? → Setup (configures on-chain, dual mode, monitoring). Just want to contribute GPU? → Join a Pool guide. Want to understand earning? → Operator Rationale." | 5 mins | Clear next step |

**The quickstart is NOT the setup.** It proves the technology works. The Setup section configures production operation. The Guides section covers earning, pricing, and optimisation. Three distinct phases of the journey.

**Software choice: Docker is the only quickstart path.** Binary installs, systemd services, and build-from-source are Setup concerns. The quickstart uses `docker-compose up -d` and nothing else. This matches the gateway quickstart pattern.

**OS: Linux only for quickstart.** AI runner containers require Linux. Video-only Docker works on Windows (WSL2) and macOS but with caveats. The quickstart should not introduce OS-specific branching - that's a Setup concern. Linux is the production OS. Use Linux.

<CustomDivider />

### Setup: Complete Path

**Correction: AI IS testable locally.** The same pattern as video and BYOC works for AI:
- Orchestrator: `-orchestrator -transcoder -aiWorker -aiModels /path/to/aiModels.json -network offchain`
- Gateway: `-gateway -network offchain -orchAddr 127.0.0.1:8935 -httpIngest`
- Test: `curl -X POST http://localhost:8935/text-to-image -H "Content-Type: application/json" -d '{"model_id": "ByteDance/SDXL-Lightning", "prompt": "test"}'`
- The AI runner container downloads the model from HuggingFace on first start
- No on-chain registration needed for local testing

This means **all three node modes (video, AI, dual) can be set up and verified locally** before any on-chain commitment. The setup guide should cover all three.

**What the Setup section covers:**
- Video setup, AI setup, AND dual mode setup
- All supported OS (Linux primary, Docker makes Windows/macOS viable for video-only; AI runner requires Linux)
- On-chain activation as the production target
- Docker-based (primary), binary (alternative)
- Each page is one session of work

**What the Setup section IS NOT:**
- An earning guide (that's Guides > Staking & Earning + Config & Optimisation)
- A pricing guide (that's Guides > Config & Optimisation > Pricing Strategy)
- A reference (that's Resources > CLI Flags)
- A tuning guide (that's Config & Optimisation)
- An explanation of how things work (that's Concepts)
- A troubleshooting guide (that's Monitoring > Troubleshooting)

**The Setup→Earning boundary:** Setup ends when the node is technically operational, on-chain, and monitored. Earning is a business outcome that depends on pricing, demand, stake, reputation, and market conditions - covered in the Guides section.

**Setup flow (pages needed):**

| # | Page | What it covers | Branch points |
|---|------|---------------|--------------|
| 1 | **setup-overview** | The complete setup journey mapped visually. What you'll need (hardware, LPT, ETH, time). Expected duration (~4-8 hours for dual mode). Links to Quickstart if they want faster/simpler. Links to Operator Rationale if they haven't evaluated yet. | "Not ready for full setup? → Quickstart. Not sure it's worth it? → Operator Rationale." |
| 2 | **prerequisites** | Actionable checklist (not a reference page). GPU: confirm NVIDIA, check VRAM, verify drivers. Network: confirm public IP or domain, test port 8935 reachability. Blockchain: acquire arbETH (link to exchanges), acquire LPT (link to exchanges + current active set threshold). Software: install Docker, install nvidia-container-toolkit. Each item has a verification command. | "No NVIDIA GPU? → CPU transcoding (limited) or pool worker. Not enough LPT? → AI-only path or pool worker." |
| 3 | **install** | Install go-livepeer via Docker (primary) or binary (alternative). Docker: `docker pull livepeer/go-livepeer:stable`. Binary: download from GitHub releases, verify checksum, extract, confirm `livepeer -version`. For dual mode: also pull AI runner container. | "Docker or binary? Docker is recommended and matches the quickstart." |
| 4 | **configure** | Write the docker-compose and set operational flags. Dual mode config: `-orchestrator -transcoder -aiWorker -aiModels /path/to/aiModels.json -network arbitrum-one-mainnet -ethUrl <RPC> -serviceAddr <PUBLIC:8935> -pricePerUnit <WEI> -nvidia <GPU_IDS> -v 6 -monitor`. Write aiModels.json with one warm model. Ports: 8935 (service), 7935 (CLI/metrics). Volume mounts for persistent data and model storage. | "Video only? Skip -aiWorker, -aiModels, AI runner. AI only? Skip -pricePerUnit, add -aiServiceRegistry." |
| 5 | **connect-and-activate** | Connect to Arbitrum: verify -ethUrl endpoint responds. Fund wallet: transfer arbETH for gas. Stake LPT: use livepeer_cli to bond LPT to self. Set service URI: register public address. Activate: on-chain registration transaction. Verify on Explorer: confirm active, correct service URI, correct pricing. Enable reward calling: -reward flag or manual via livepeer_cli. | "AI-only without active set? Register on AIServiceRegistry instead of full activation." |
| 6 | **verify** | Comprehensive verification sequence. Video: send test stream via ffmpeg, verify HLS output, check segment processing in logs. AI: send test inference request (curl), verify response, check model loaded in logs. On-chain: verify on Explorer (active set position, service URI, pricing). Monitoring: verify Prometheus endpoint responds, check key metrics. Reward calling: wait for next round, verify reward claimed. | "Test failed? → Troubleshooting page for specific symptoms." |
| 7 | **initial-monitoring** | Minimum viable monitoring for day-one operation. Enable -monitor flag. Set up basic Prometheus scrape. Three alerts that every operator needs from day one: missed reward call, session saturation (&gt;80%), node unreachable. Link to full Monitoring section for Grafana dashboards and advanced alerting. | "Want full monitoring stack? → Monitoring & Tools > Metrics and Alerting." |

**Key design decisions:**
- **7 pages, not 5 or 10.** Each page is one session of work (~30-60 mins). An operator can complete one page per sitting.
- **All three node modes covered.** The configure page uses tabs or sections for Video, AI, and Dual. Not separate setup flows - one flow with mode-specific configuration. Same pattern as the gateway setup.
- **All OS covered.** Linux is primary and required for AI/dual. Docker enables Windows (WSL2) and macOS for video-only. OS branching happens on the install and configure pages via tabs, not as separate flows.
- **On-chain is the production target.** Off-chain is used during local verification (step 6) then the node connects on-chain. The configure page includes both off-chain test config and on-chain production config.
- **Docker is primary, binary is alternative.** Docker recommended, binary as accordion alternative on install page.
- **Setup does NOT cover earning.** Setup gets the node operational. Pricing, demand, delegation, and competitive positioning are Guides concerns.

<CustomDivider />

### Gateway Comparison (Same First Principles)

Applying the same analysis to gateways reveals structural differences:

**Gateway quickstart is fundamentally simpler because:**
- No staking (no LPT barrier)
- Off-chain is a genuine production path (remote signer handles payments)
- No reward calling (gateways don't earn protocol rewards)
- No active set (gateways aren't ranked by stake)
- Gateway routes work, doesn't DO work (no GPU compute verification needed)

**Gateway quickstart path:**

| # | Page | Time | What it covers |
|---|------|------|---------------|
| 1 | **quickstart-overview** | 2 mins | Decision: off-chain (fastest, no crypto) or on-chain (production, needs ETH). Docker recommended. |
| 2 | **off-chain-quickstart** | 15-20 mins | Docker pull → docker-compose with `-gateway -orchAddr <ORCH> -httpIngest` → start → test video stream or AI request. Zero ETH needed. Community remote signer handles payments. |
| 3 | **on-chain-quickstart** | 30-45 mins | Docker pull → docker-compose with `-gateway -network arbitrum-one-mainnet -ethUrl <RPC>` → fund deposit + reserve → start → test. |

**Gateway quickstart vs orchestrator quickstart:**

| Dimension | Gateway | Orchestrator |
|-----------|---------|-------------|
| Fastest path | Off-chain: 15-20 mins, zero crypto | Smoke test: 30-45 mins (verifies hardware, does not earn) |
| Production path | On-chain: 30-45 mins | Full dual: 4-8 hours (requires LPT + ETH acquisition first) |
| LPT needed | Never | Active set threshold (solo) or zero (AI-only, but earning not guaranteed) |
| GPU needed | Never | Always (the whole point) |
| Biggest friction | Understanding operational mode choice | Acquiring LPT + finding demand (no guaranteed work) |
| OS support | Linux, Windows (WSL2), macOS (Docker) | Linux only (AI runner constraint) |
| What you verify | "Jobs are routing to orchestrators" | "My hardware can process jobs" (quickstart) / "I'm earning" (setup) |
| Operational mode fork | Yes: on-chain vs off-chain is a genuine production choice | No: orchestrators are effectively always on-chain for production earning |

**Key asymmetry: gateways have a genuine off-chain production path; orchestrators do not.** A gateway can run off-chain indefinitely using a remote signer and earn from routing margin. An orchestrator running off-chain can only process jobs from gateways that explicitly point to it via `-orchAddr` - there is no protocol-level discoverability, no inflation rewards, no active set membership. Off-chain orchestrator operation is a testing/development configuration, not a production earning path.

This asymmetry should be documented in both the gateway and orchestrator glossaries as a fundamental difference between the two roles.

**Gateway setup path (7 pages, same structure):**

| # | Page | What it covers |
|---|------|---------------|
| 1 | setup-overview | Journey map, what you'll need, expected time |
| 2 | prerequisites | Hardware (no GPU!), network, ETH (on-chain only), software |
| 3 | install | Docker pull (primary), binary (alternative) |
| 4 | configure | docker-compose with gateway flags, node mode (video/AI/dual), operational mode (on-chain/off-chain) |
| 5 | connect-and-fund | On-chain: Arbitrum connection, deposit + reserve funding. Off-chain: remote signer configuration. |
| 6 | verify | Test stream (video), test inference (AI), verify orchestrator connectivity, verify payment flow |
| 7 | initial-monitoring | Basic health checks, key metrics, link to full monitoring section |

**Key structural difference:** Gateway setup has an operational mode fork (on-chain vs off-chain) that orchestrators don't have. Orchestrators are effectively always on-chain for production. This fork drives the gateway quickstart's two-path design (off-chain quickstart vs on-chain quickstart) which doesn't apply to orchestrators.

**What gateways currently have vs what they need:**
- Current: One monolithic quickstart page (`gateway-setup.mdx`, 200+ lines) using View components for Docker/Linux/Windows and Tabs for off-chain/on-chain. Tries to cover everything in one page.
- Needed: Same 7-page structure as orchestrators. The monolithic page works for a quickstart but the full Setup should be sequential pages, each one session of work.
- Current setup section (`setup/`) has scattered pages without a clear sequence. Needs the same sequential discipline as the orchestrator setup.

<CustomDivider />

### Summary: Quickstart vs Setup

```
QUICKSTART (time-to-first-value)
├── Orchestrator
│   ├── Overview → route by situation, honest about timelines
│   ├── Smoke Test → 30-45 mins, off-chain, verifies hardware works (does NOT earn)
│   └── What Next → decision tree to Setup, Pool, or AI-only paths
│
└── Gateway
    ├── Overview → route by operational mode
    ├── Off-chain → 15-20 mins, zero crypto, production-viable routing
    └── On-chain → 30-45 mins, needs ETH, production routing with protocol integration
    NOTE: current monolithic quickstart page is really the Setup path, not a quickstart

SETUP (complete operational readiness)
├── Orchestrator (7 pages, dual mode, on-chain, Linux, Docker)
│   Overview → Prerequisites → Install → Configure → Connect & Activate → Verify → Monitor
│
└── Gateway (7 pages, both modes, all supported OS, Docker)
    Overview → Prerequisites → Install → Configure → Connect & Fund → Verify → Monitor
    NOTE: current gateway-setup.mdx with Views/Tabs is this, not the quickstart
```

**The honest framing:** The orchestrator quickstart answers "does my hardware work with Livepeer?" not "am I earning in 15 minutes." There is no sub-1-hour path to guaranteed earning as an orchestrator. Pool joining requires a social relationship (days). AI-only requires uncertain demand. Solo requires LPT acquisition (days). The quickstart builds confidence in the technology; the Setup section gets to production earning.

The gateway quickstart is genuinely faster because off-chain gateway operation IS production-viable (remote signer, no staking, no active set). The asymmetry is real and should be documented rather than papered over.

