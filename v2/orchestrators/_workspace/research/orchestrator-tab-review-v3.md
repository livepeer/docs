# Orchestrator Tab Review v3: Product Thinking Critique

_Applies pm-skills frameworks (OST, JTBD, Assumption Mapping, Customer Journey, Value Proposition) to critically re-evaluate the v2 review._

---

## Critique 1: The Review Is Structure-First, Not User-First

The v2 review starts with a proposed tab structure (the solution tree) before establishing the problem space. It organises pages into sections that mirror the gateway tab - but **mirroring gateway IA is itself an unvalidated assumption**.

Gateway operators and orchestrator operators have fundamentally different jobs:

| | Gateway Operator | Orchestrator Operator |
|---|---|---|
| **Primary job** | Route work to the cheapest/best provider | BE the provider that gets selected |
| **Revenue model** | Margin on pass-through (or platform fees) | Direct earnings from compute + inflation |
| **Entry barrier** | Low (off-chain = no stake) | High (active set = significant LPT) |
| **Key decision** | Which orchestrators to route to | How to attract work and delegation |
| **Failure mode** | Overpaying for compute | Not getting selected / missing rewards |

The gateway IA works because gateways have a linear journey: decide → deploy → configure pipelines → pay → monitor. Orchestrators have a **branching journey** driven by the stake/hardware/workload intersection. Forcing the same section structure obscures this.

**Recommendation**: Start from job stories, not from gateway symmetry.

---

## Critique 2: Personas Are Demographic, Not Situational

The v2 review defines 5 personas (Solo Miner, Pool Worker, Pro Operator, Enterprise, AI Native) based on who the operator IS. The pm-skills JTBD framework says this is backwards - focus on the **situation** triggering action, not the person.

### Job Stories (replacing personas)

**J1**: "When I have a GPU sitting idle most of the day, I want to earn crypto from its compute cycles, so I can offset the hardware cost."
- Acceptance: Can estimate earnings before committing. Can start earning within 4 hours. Does not require buying LPT to start.

**J2**: "When I already run a Livepeer video node and see AI demand growing, I want to add AI workloads to my existing setup, so I can earn from both without running a second node."
- Acceptance: Can add AI to existing config in under 1 hour. Understands VRAM impact. Knows which models are in demand.

**J3**: "When I have substantial LPT and want to maximise its yield, I want to run a well-performing orchestrator that attracts delegation, so I can compound my position in the active set."
- Acceptance: Understands reward calling economics. Can set competitive cut rates. Can monitor delegation growth.

**J4**: "When my company needs to provide GPU compute at scale for a product (Livepeer Studio, Daydream, custom platform), I want to operate commercial orchestrator infrastructure, so I can earn service fees under SLAs."
- Acceptance: Can set per-gateway pricing. Understands O-T split for scaling. Has monitoring for SLA compliance.

**J5**: "When I want to participate in governing an open compute protocol, I want to operate a node with meaningful stake, so I can vote on proposals that shape video and AI infrastructure."
- Acceptance: Understands governance weight. Knows where proposals are discussed. Can vote via Explorer.

**J6**: "When I have a powerful GPU (24GB+) but limited LPT, I want to earn from AI inference without needing active set membership, so I can start earning immediately."
- Acceptance: AI routing works without high stake. Can check which pipelines are in demand. Can verify earnings within 1 day.

### What changes

- J1 and J6 are the **same person in different situations** (idle GPU) but the v2 review treats them as separate personas
- J2 (the hybrid add-on) has **no page, no path, no section** - this is the L0 gap identified in the hybrid exercise
- J3 and J5 overlap significantly - governance is a motivation within the staking journey, not a separate persona
- J4 is the only genuinely distinct persona (commercial/enterprise) and is correctly identified but underserved

---

## Critique 3: The Section Order Assumes a Linear Journey

The v2 review proposes:
```
1. Operator Considerations → "Should I operate?"
2. Deployment Details     → "What do I need and which path?"
3. Workloads & AI         → "What jobs do I run?"
4. Staking & Rewards      → "How do I earn?"
5. Payments & Pricing     → "How do I get paid and set prices?"
6. Monitoring & Tools     → "How do I keep it running?"
7. Advanced Operations    → "How do I optimise and scale?"
8. Roadmap & Funding      → "What support and funding exists?"
9. Tutorials              → "Show me"
```

This is a **waterfall journey**. Real operators don't move linearly:

- J6 (AI-first, low LPT) skips Staking entirely and goes Considerations → Deployment → Workloads → Payments → Monitor
- J2 (adding AI to video) starts at Workloads, not Considerations
- J3 (LPT maximiser) cares about Staking before Workloads - they stake first, then figure out what to run
- J4 (commercial) needs Payments and Pricing BEFORE Deployment - the business case drives infrastructure decisions

**Recommendation**: The section order is fine as a default reading order, but the **Navigator must route by job story**, not by section sequence. The Navigator should ask "what situation are you in?" and jump to the right section, not "start at page 1."

---

## Critique 4: Assumption Mapping Reveals Untested Beliefs

### High-risk assumptions in the v2 review (not tested)

| # | Assumption | In v2 review | Risk | How to test |
|---|-----------|-------------|------|-------------|
| 1 | Gateway IA symmetry is the right model for orchestrators | Entire structure mirrors gateway | **Critical** | Compare bounce rates / time-on-page when orchestrator content uses gateway structure vs job-based structure |
| 2 | "Operator Considerations" is a useful section name | Section exists | High | No operator thinks "am I considering operating?" - they think "is this worth it?" or "can I earn?" |
| 3 | Separating Staking from Payments makes sense | Two separate sections | Medium | Staking IS payment infrastructure for orchestrators. They stake to receive PM tickets. The separation may confuse. |
| 4 | Tutorials section adds value with imported gateway tutorials | Section exists with 3 imported pages | High | Gateway BYOC CPU tutorial is irrelevant to orchestrator operators. Keeping it signals low curation quality. |
| 5 | The "Setup" section needs 7 pages | 7 pages in Setup | Medium | Can guide + requirements + install + configure + connect-and-activate + test + monitor be condensed? Compare with gateway quickstart (3 pages). |
| 6 | Workloads section should separate batch and realtime AI | 2 separate pages | Low | These might be better as tabs or accordions on a single AI setup page |
| 7 | "Deployment Details" is the right bucket for benchmarking and session limits | Recently moved there | Medium | These are capacity planning concerns. They could equally live under Monitoring. |

### High-risk assumptions NOT in the v2 review (blind spots)

| # | Assumption | Blind spot | Risk |
|---|-----------|-----------|------|
| 8 | Operators read docs linearly | No skip-ahead paths or "I already know X" shortcuts | High |
| 9 | All operators need on-chain setup | Off-chain pool workers need almost none of the Setup section | High |
| 10 | The hybrid (video+AI) path doesn't need its own page | No hybrid content anywhere | **Critical** (see L0 exercise) |
| 11 | Orchestrator operators and gateway operators never overlap | No cross-role content | Medium - some operators run both |
| 12 | The "active set" concept is well understood | Referenced but not explained early enough | High |

---

## Critique 5: The Opportunity Solution Tree Is Missing

The v2 review lists pages and sections but never establishes a **desired outcome** or maps **customer opportunities** to those pages. It's a content inventory, not a discovery tree.

### OST for the Orchestrator Tab

**Desired Outcome**: An operator with a GPU can go from "I've heard of Livepeer" to "I'm earning revenue" in under 24 hours, and know where to go for every question that arises.

**Opportunities** (prioritised by importance x satisfaction gap):

| # | Opportunity | Importance | Current Satisfaction | Score |
|---|-----------|-----------|---------------------|-------|
| O1 | "I can't tell if this is worth it before committing" | 9 | 3 (operator-rationale exists but weak) | **54** |
| O2 | "I don't know which setup path fits my situation" | 9 | 4 (navigator exists, not job-based) | **45** |
| O3 | "I run video but don't know how to add AI" | 8 | 1 (no hybrid content) | **56** |
| O4 | "I don't understand the earning model well enough to optimise" | 8 | 4 (earnings page exists) | **32** |
| O5 | "I can't find my specific error in troubleshooting" | 7 | 5 (troubleshooting exists) | **14** |
| O6 | "I want to run at scale but don't know the architecture" | 6 | 4 (O-T and large-scale exist) | **12** |

**Top 3 opportunities to address**:
1. **O3 - Hybrid gap** (score 56) - No content exists. Single highest-impact gap.
2. **O1 - Worth-it evaluation** (score 54) - operator-rationale page exists but needs the product thinking from the L0 exercise (decision matrix, viability questions, research tools)
3. **O2 - Path selection** (score 45) - Navigator needs job-story-based routing, not persona-based

---

## Critique 6: Value Proposition Is Unclear

The v2 review doesn't articulate the tab's value proposition. Using the pm-skills Value Proposition framework:

### Current (implicit) value proposition
"Complete documentation for running a Livepeer orchestrator"

### Problems with this
- It's documentation-centric, not outcome-centric
- It doesn't differentiate from competitors (Akash, Render, Filecoin all have setup docs)
- It doesn't acknowledge the operator's actual goal (earning money, not reading docs)

### Proposed value proposition (by segment)

**For J1/J6 (GPU owners wanting earnings)**:
"Livepeer Orchestrator docs show you exactly what your GPU can earn, which path fits your situation, and get you from idle hardware to revenue in under a day."

**For J2 (existing operators adding AI)**:
"Already running video? Add AI inference to your existing node in under an hour and earn from both workloads on the same hardware."

**For J3 (LPT yield maximisers)**:
"Maximise your LPT position with guides on reward calling, competitive pricing, delegation growth, and governance influence."

**For J4 (commercial operators)**:
"Run production GPU infrastructure for Livepeer-powered products with guides on SLA management, per-gateway pricing, and fleet operations."

**Each of these should be visible on the Portal page.** Currently the portal is generic.

---

## Critique 7: Customer Journey Has No "Aha Moment" Design

The v2 review maps pages to sections but doesn't identify or design for the critical moments:

### Missing moment design

| Moment | What happens | Current state | Should happen |
|--------|-------------|--------------|--------------|
| **First visit** | Operator lands on portal | Generic hero | Job-story routing: "What's your situation?" |
| **Worth-it check** | Operator evaluates ROI | Must read a long page | Interactive calculator or quick decision matrix |
| **First setup** | Operator installs and configures | 7-page setup sequence | Quickstart that gets to first job in 30 mins |
| **First earning** | Operator sees first reward/fee | No celebration or confirmation | Verification page should confirm "You're earning" |
| **First problem** | Something breaks | Must find troubleshooting | Error-specific routing from health checks |
| **Scaling decision** | Operator considers growing | Must find advanced ops | Triggered by monitoring signals (auto-surfaced) |

---

## Recommended Upgrades (Priority Order)

### P0: Structural fixes (do before any content work)

1. **Add hybrid operator path** to navigator, setup-options, and create deployment-details/hybrid-setup.mdx. This is the majority use case with zero representation.

2. **Rewrite navigator as job-story router**. "What's your situation?" not "What persona are you?" Six entry points mapping to J1-J6 above.

3. **Rename "Operator Considerations" to "Is It Worth It?"** or similar outcome-focused label. Nobody thinks in terms of "considerations."

### P1: Content gaps (highest-impact missing content)

4. **Build the glossary**. Zero bytes. Every other section references terms not defined. This blocks comprehension across all pages.

5. **Write pricing-strategy.mdx**. Operators cannot earn competitively without understanding pricing. This is upstream of Staking (you price before you earn).

6. **Expand operator-rationale with the L0 exercise content** (decision matrix, viability questions, research tools from the product exercise).

### P2: Journey improvements

7. **Add "Already running video?" bridge section** to ai-workloads-guide. One accordion that gives existing video operators the delta to add AI.

8. **Add skip-ahead links on Setup pages**. "Already installed? Skip to Configure →". Operators re-visiting docs shouldn't re-read installation.

9. **Consolidate batch-ai-setup + realtime-ai-setup** into a single page with tabs. They share 70% of content (docker-compose, aiModels.json, model downloads). The difference is the pipeline type and latency requirements.

### P3: Polish

10. **Remove or replace imported gateway tutorials**. They signal low curation quality. Either write orchestrator-specific tutorials or remove the section entirely until justified.

11. **Consider merging Staking & Rewards with Payments & Pricing** into a single "Earning & Pricing" section. From the operator's perspective, staking, rewards, fees, and pricing are all part of "how do I earn?" Splitting them creates artificial separation.

12. **Add cross-tab bridge callouts** per the v2 review's bridge table. These are correctly identified but not yet implemented.

---

## Frameworks Applied

| Framework | From pm-skills | Applied to |
|-----------|---------------|-----------|
| Jobs to Be Done / Job Stories | pm-execution/job-stories | Replaced demographic personas with situational job stories (J1-J6) |
| Opportunity Solution Tree | pm-product-discovery/opportunity-solution-tree | Scored 6 opportunities, identified top 3 gaps |
| Assumption Mapping | pm-product-discovery/identify-assumptions-existing | Surfaced 12 assumptions (7 in review, 5 blind spots) |
| Customer Journey Map | pm-market-research/customer-journey-map | Identified 6 critical moments with no current design |
| Value Proposition | pm-marketing-growth/value-prop-statements | Wrote segment-specific value props exposing the generic current state |

---

## Summary

The v2 review is a competent **information architecture** exercise. It organises pages well and the section structure is defensible. But it has three product-level gaps:

1. **No hybrid operator path** - the majority use case is invisible
2. **Structure-first thinking** - sections mirror gateways instead of emerging from orchestrator job stories
3. **No outcome design** - pages are listed but critical moments (aha, first earning, first problem) aren't designed for

The IA is ~80% right. The 20% that's wrong is the 20% that matters most: the entry experience, the default path, and the dominant use case.
