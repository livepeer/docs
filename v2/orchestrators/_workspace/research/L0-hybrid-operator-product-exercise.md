# L0 Product Exercise: The Hybrid Operator Path

## Problem Statement

The majority real-world orchestrator operating model is **hybrid**: operators run both video transcoding AND AI inference on the same infrastructure, often combining on-chain staking with off-chain commercial relationships. This path has:

- **No dedicated page** in the current docs
- **No featured position** in navigation or decision flows
- **No staged action sequence** from evaluation through production
- **No mental model** that acknowledges it as the primary path

The current IA treats video and AI as separate paths with separate setup flows. In reality, most active orchestrators run both. This is a **product clarity problem** - the docs present a world that doesn't match operator reality.

---

## 1. Assumption Map (Existing Product)

### Value Assumptions

| Assumption | Confidence | Risk | Test |
|-----------|-----------|------|------|
| Most active orchestrators run both video AND AI workloads | Medium | High | Survey Discord #orchestrators; check Explorer for nodes with both video fee history and AI capability registration |
| Operators want a single "hybrid setup" guide rather than stitching video + AI guides together | Low | High | Interview 3-5 active operators on their setup experience |
| The hybrid path is more economically viable than video-only or AI-only | Medium | Medium | Compare Explorer earnings data for hybrid vs single-workload operators |
| New operators are confused by the video/AI split in docs and default to one workload when they could run both | Low | High | Check Discord support threads for "should I run video or AI?" questions |

### Usability Assumptions

| Assumption | Confidence | Risk | Test |
|-----------|-----------|------|------|
| A single docker-compose with both video and AI flags is the standard deployment | Medium | Medium | Check quickstart code.jsx dual configs; verify with 2-3 operators |
| Operators understand the resource implications of running both (VRAM sharing, session competition) | Low | High | Check troubleshooting threads for GPU contention issues |
| The `-httpIngest` + `-transcodingOptions` + `-aiServiceRegistry` flag combination is well understood | Low | Medium | Check FAQ and Discord for flag combination questions |

### Viability Assumptions

| Assumption | Confidence | Risk | Test |
|-----------|-----------|------|------|
| Hardware that runs video transcoding has sufficient VRAM for at least basic AI pipelines | Medium | Medium | Map common video transcoding GPUs (3060, 3070, 3080) against minimum AI model VRAM |
| Hybrid operators earn more total revenue than single-workload operators | Low | High | Needs Explorer data analysis |
| The hybrid path doesn't require substantially more operational overhead than single-workload | Medium | Low | Interview operators |

### Feasibility Assumptions

| Assumption | Confidence | Risk | Test |
|-----------|-----------|------|------|
| go-livepeer supports simultaneous video + AI on a single node without configuration conflicts | High | Low | Confirmed by quickstart dual configs in code.jsx |
| A single guide page can cover the hybrid path without becoming a 1000-line monster | Medium | Medium | Draft outline and scope check |
| The hybrid setup can be verified with a single test sequence (not separate video + AI tests) | Medium | Low | Check if existing test.mdx covers both |

---

## 2. Opportunity Solution Tree

### Desired Outcome
**Hybrid operator path is the default mental model** - new operators arriving at the Orchestrators tab understand that running both video and AI is the standard operating model, not an advanced configuration.

### Opportunities (Customer Pain Points)

**O1: "I don't know if I should set up video or AI first"**
- Score: High importance, low satisfaction
- Evidence: The current decision tree (setup-options, navigator) forces a video vs AI choice. Discord operators regularly ask this.

**O2: "I set up video, now I want to add AI, but I have to re-learn everything"**
- Score: High importance, low satisfaction
- Evidence: No "add AI to existing video node" guide exists. The AI setup pages assume a fresh start.

**O3: "I'm running both but I don't know if my GPU can handle the combined load"**
- Score: Medium importance, low satisfaction
- Evidence: No resource contention guidance for hybrid nodes. Session limits page doesn't address VRAM sharing.

**O4: "The pricing is confusing - video is per-pixel, AI is per-capability, how do I set both?"**
- Score: Medium importance, medium satisfaction
- Evidence: Pricing strategy page (when written) needs to cover both models in a single flow.

### Solutions

**For O1 - "Which workload first?"**
1. **Hybrid-first navigator** - Restructure the navigator/decision tree so "both" is the default path, with "video only" or "AI only" as constrained alternatives
2. **Hybrid quickstart** - A single quickstart that sets up both video + AI from the start (the current dual config in code.jsx already does this)
3. **Decision flowchart on operator-rationale** - Add a "your GPU determines your path" visual that maps GPU VRAM → workload combination

**For O2 - "Adding AI to existing video"**
1. **"Add AI to Your Node" guide page** - Step-by-step for operators who already have video running
2. **Accordion on the AI workloads guide** - "Already running video? Start here" section
3. **Flag diff table** - Show exactly which flags to ADD to an existing video config to enable AI

**For O3 - "Resource contention"**
1. **Hybrid resource section on session-limits** - VRAM budget calculator for video + AI
2. **Monitoring alerts for hybrid nodes** - Prometheus queries that detect GPU contention
3. **"When to split" decision guide** - Criteria for moving from single hybrid node to O-T split

**For O4 - "Dual pricing"**
1. **Unified pricing section** on pricing-strategy that covers both `-pricePerUnit` and `-pricePerCapability` in one flow
2. **Pricing template files** - Downloadable config templates with both video and AI pricing pre-configured

---

## 3. Customer Journey Map: The Hybrid Operator

### Persona: "Sam" - ML engineer with RTX 4090, wants to monetise idle GPU

| Stage | Touchpoint | Doing | Thinking | Feeling | Friction | Opportunity |
|-------|-----------|-------|---------|---------|----------|-------------|
| **Awareness** | Discord, Twitter, friend referral | "Livepeer pays for GPU time?" | "Is this legit? How much can I earn?" | Curious, sceptical | No clear "hybrid earner" messaging | Portal hero should lead with hybrid earning |
| **Evaluation** | Portal → Operator Rationale | Reading economics, checking Explorer | "Can my 4090 do this? Video AND AI?" | Calculating, comparing | Current page doesn't model hybrid earnings | Decision matrix should default to hybrid |
| **Decision** | Navigator → Setup Options | Choosing a path | "Do I do video first or AI first?" | Confused by the fork | Binary choice when reality is hybrid | Navigator should route to hybrid quickstart |
| **Setup** | Quickstart → Setup flow | Installing, configuring | "Which flags do I need for both?" | Focused, following steps | Must stitch video + AI guides manually | Single hybrid setup sequence |
| **First Earnings** | Explorer, CLI, logs | Checking for jobs, calling rewards | "Is it working? Am I earning?" | Anxious, checking often | Separate verification for video and AI | Unified hybrid health check |
| **Optimisation** | Monitoring, pricing, session tuning | Adjusting prices, loading models | "How do I earn more from both?" | Engaged, experimenting | No hybrid-specific tuning guide | Hybrid tuning page or section |
| **Scaling** | O-T split, additional GPUs | Considering expansion | "Should I split video and AI?" | Planning, calculating | No "when to split hybrid" guidance | Clear split criteria |

### Critical Moments
- **Aha moment**: First winning ticket redeemed + first AI inference job completed (both on same node)
- **Churn trigger**: GPU contention causes video job failures, operator disables AI rather than tuning
- **Advocacy trigger**: Operator shares earnings screenshot showing both video AND AI revenue

---

## 4. Staged Action Sequence (What to Build)

### Phase 1: Mental Model Shift (IA + Content)
**Goal**: Hybrid is the default, not the exception

1. **Rename/reframe navigator** - "Both" is the first option, not "Video OR AI"
2. **Add hybrid path to operator-rationale decision matrix** - Currently shows pool/solo/AI as separate paths. Hybrid should be prominent.
3. **Update setup-options** - Hybrid as the primary path in deployment details

### Phase 2: Hybrid Content (New + Modified Pages)
**Goal**: An operator can go from zero to hybrid-earning without stitching guides

4. **Create `hybrid-setup.mdx`** in Deployment Details or Quickstart - Single page covering the dual docker-compose, both flag sets, unified verification
5. **Add "Already running video?" section** to AI workloads guide - Bridge content for existing operators
6. **Add hybrid resource management section** to session-limits - VRAM budgeting for combined workloads
7. **Ensure pricing-strategy covers both** in a single flow when written

### Phase 3: Hybrid-Specific Tooling Guidance
**Goal**: Operators know how to monitor, tune, and scale hybrid nodes

8. **Hybrid health check** in troubleshooting - Combined video + AI verification sequence
9. **"When to split" criteria** in Advanced Operations - Clear thresholds for moving to O-T split
10. **Hybrid monitoring dashboard** guidance in metrics-monitoring

---

## 5. Impact on Current IA

### Pages that need hybrid framing added:
- `navigator.mdx` - Decision tree defaults to hybrid
- `operator-rationale.mdx` - Decision matrix includes hybrid prominently
- `setup-options.mdx` - Hybrid as primary deployment path
- `session-limits.mdx` - VRAM budgeting for combined workloads
- `ai-workloads-guide.mdx` - "Already running video?" bridge
- `pricing-strategy.mdx` (when written) - Dual pricing in single flow
- `troubleshooting.mdx` - Hybrid-specific symptoms

### New page needed:
- `deployment-details/hybrid-setup.mdx` OR expand `setup-options.mdx` with a hybrid-first framing

### No change needed:
- Concept pages (architecture, role, capabilities) - Already workload-agnostic
- Staking & Rewards - Already workload-agnostic
- Monitoring tools - Already cover both metric types

---

## 6. Open Questions for SME Validation

1. What percentage of active orchestrators run both video AND AI? (Explorer data)
2. Is there meaningful GPU contention when running both on a single 24GB card? (Operator interviews)
3. Do any orchestrators run video-only intentionally (not because they lack AI-capable hardware)?
4. What is the minimum VRAM threshold where hybrid becomes practical? (8GB? 12GB? 16GB?)
5. Do commercial orchestrators (serving Livepeer Studio, Daydream) run hybrid or dedicated nodes?

---

## Frameworks Applied

- **Assumption Mapping** (pm-product-discovery) - Surfaced 12 assumptions across Value/Usability/Viability/Feasibility
- **Opportunity Solution Tree** (pm-product-discovery) - Connected the outcome to 4 opportunities with 10 solutions
- **Customer Journey Map** (pm-market-research) - Mapped 7 stages with friction points and opportunities
- **Jobs to Be Done** framing - "When I have a GPU sitting idle, I want to earn from both video and AI workloads, so I can maximise my hardware ROI"
