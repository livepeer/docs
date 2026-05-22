## The Personas — Who the About Tab Actually Serves

**Important distinction:** These are not "arriving audience types" — these are modes of engagement with About's content. Some personas pass through About on their way to a role tab (routing). Others have About as their genuine destination.

---

## Primary Persona: The Protocol Understander

**Who they are:**  
A technically curious reader who wants to understand how Livepeer works before deciding whether — and how — to participate. Not yet operating a node, not yet staking, not yet building. Evaluating.

**Entry vector:**  
- Home tab ("I want to understand Livepeer before deciding")
- Search ("Livepeer protocol", "how does Livepeer work")
- External article referral (Messari, CoinDesk, DePIN research)
- Ecosystem team referral

**Arrives with:**  
- Surface awareness Livepeer is an AI/video compute network
- No working mental model of how the system functions
- Cannot distinguish protocol layer from network layer
- Vague understanding of what each actor does

**Wants to leave with:**
- Clear mental model: who does what, how value flows, how trust is enforced
- Understanding of the economics: both ETH fees and LPT inflation
- Named, clear pointer to the next step (role tab) that matches emerging intent

**Score:**  
Volume 3 (everyone at discover stage), Depth 3 (needs complete picture), Impact 3 (routing decision affects entire journey) = **9/9**

**Consensus:**  
4/4 runs (canonical-about-audience-design.md, all three AI runs)

---

## Secondary Personas — Not Just Waypoints

These personas are not simply passing through to a role tab. Some have About as a genuine destination.

### #1: The Diligence Analyst

**Who they are:**  
Investor, fund researcher, or DePIN analyst performing structured due diligence on Livepeer as an investment or research subject.

**Entry vector:**  
- Messari dashboard link
- Search ("Livepeer tokenomics", "Livepeer governance")
- Fund research brief request
- DePIN comparative analysis (versus Render, Akash, etc.)

**Arrives with:**  
- Technical sophistication (reads whitepapers, understands crypto primitives)
- No Livepeer-specific knowledge
- Need for reliable, current data on economics, governance, org structure

**Wants to leave with:**
- Complete economic model: inflation rates, fee flow, staking mechanics, withdrawal periods
- Governance model: voting rules, quorum, proposal lifecycle, execution mechanism
- Org structure: Foundation role, Treasury funding, SPE system, longevity assessment
- Technical architecture for risk assessment
- Whitepaper and primary sources for verification

**Journey through About:**  
concepts/ (overview) → protocol/economics.mdx (fee + inflation) → protocol/governance-model.mdx (voting) → protocol/treasury.mdx (funding) → protocol/blockchain-contracts.mdx (on-chain verification) → resources/glossary.mdx (terms) → resources/whitepaper.mdx (primary source)

**Score:**  
Volume 2 (smaller audience but high value), Depth 3 (reads everything), Impact 3 (investment decision) = **8/9**

**Routes out?**  
May route to LP Token tab for delegation mechanics, but About IS their primary research destination.

---

### #2: The Founder / Product Evaluator

**Who they are:**  
Building a product; evaluating Livepeer as infrastructure (versus competing options or building in-house).

**Entry vector:**  
- Solutions tab ("what's built on Livepeer?")
- External article or demo
- Investor/advisor recommendation
- Akash/Render/other comparison

**Arrives with:**  
- Technical depth (understands APIs, SDKs, infrastructure)
- Product context (knows what compute they need)
- No protocol mechanics knowledge

**Wants to leave with:**
- Mental model of the platform: what it does, who provides compute, how to access it
- Economics: cost structure, pricing, market viability, competitive positioning
- Reliability signals: who runs it, governance model, Foundation backing, roadmap
- Clear understanding of whether Livepeer is build, integrate, or postpone
- Success cases: what's been built, is it active

**Journey through About:**  
concepts/ (overview) → network/marketplace.mdx (supply/demand) → protocol/economics.mdx (pricing + sustainability) → protocol/governance-model.mdx (control) → protocol/treasury.mdx (funding) → guides/evaluating-livepeer.mdx (decision framework) → solutions showcase (what's real)

**Score:**  
Volume 3, Depth 2 (wants breadth, not deep dives), Impact 3 (product decision) = **8/9**

**Routes out?**  
YES — to Solutions tab (if building on it) or Developers tab (if integrating API). About provides evaluation context; role tab provides how-to.

---

### #3: The OSS / Protocol Contributor

**Who they are:**  
Developer considering contributing to go-livepeer, ai-worker, or smart contracts. Evaluating whether the protocol is architecturally interesting and governance-friendly enough to contribute to.

**Entry vector:**  
- GitHub issue or pull request
- DeepWiki link (technical community referral)
- Foundation/ecosystem team outreach
- Protocol RFC discussion

**Arrives with:**  
- Deep technical knowledge (reads source code, understands cryptography)
- No Livepeer architecture knowledge
- Uncertainty about where to start, what's designed, what's open to contribution

**Wants to leave with:**
- Protocol architecture depth: contract relationships, state transitions, permission model
- Design philosophy: why certain choices were made, trade-offs, constraints
- Governance mechanics: how LIPs work, how voting executes on-chain, how upgrades happen
- Smart contract architecture: all contract addresses, function scopes, upgrade patterns
- Contribution path clarity: who owns what, where to ask questions, how to propose changes

**Journey through About:**  
mental-model.mdx (10-layer stack) → network/job-lifecycle.mdx (state machine) → protocol/core-mechanisms.mdx (smart contract detail) → protocol/blockchain-contracts.mdx (contract architecture + addresses) → protocol/design-philosophy.mdx (why) → protocol/governance-model.mdx (upgrade process) → Developers tab (OSS path)

**Score:**  
Volume 1 (small audience), Depth 3 (wants complete architecture), Impact 3 (protocol evolution) = **7/9**

**Routes out?**  
YES — to Developers tab (OSS contribution path). But About provides PREREQUISITE architecture understanding that Developers tab assumes.

---

### #4: The Web3 R&D Researcher

**Who they are:**  
Academic, protocol researcher, or analyst studying cryptoeconomic systems, DePIN mechanisms, or decentralised compute coordination. May never leave About.

**Entry vector:**  
- Whitepaper link
- Academic paper reference ("Livepeer achieves X")
- Comparative protocol analysis
- Research conversation or referral

**Arrives with:**  
- Deep technical sophistication (writes papers, understands game theory)
- No Livepeer-specific knowledge
- Research question: "How does this solve [problem]? What are the trade-offs?"

**Wants to leave with:**
- Whitepaper and primary sources
- Protocol design rationale: probabilistic micropayments instead of per-segment payment, dynamic inflation instead of fixed supply
- Cryptoeconomic model: incentive alignment, game theory, slashing mechanics
- Verification model: how on-chain voting executes, challenge window mechanics (Arbitrum)
- Economic model depth: fee flow, inflation mechanics, yield sustainability
- Comparative positioning: trade-offs versus centralized, versus other DePIN
- Current state: what's actually deployed, what works, what's aspirational

**Journey through About:**  
mental-model.mdx (full stack) → network/ (execution layer detail) → protocol/* (all sections, in depth) → resources/whitepaper.mdx (primary source) → network/technical-architecture.mdx (verification model) → protocol/design-philosophy.mdx (trade-offs)

**Score:**  
Volume 1 (small audience), Depth 3+ (reads everything, cites papers), Impact 1-2 (no action expected) = **5-6/9**

**Routes out?**  
NO — About IS their destination. May cite it in research, but doesn't "route out" — the tab serves its purpose.

---

### #5: The Pre-build Developer

**Who they are:**  
Software developer evaluating Livepeer AI as infrastructure for a product or application.

**Entry vector:**  
- Search ("Livepeer API", "AI video pipeline")
- Developer community referral
- Blog post about Livepeer AI
- Daydream or similar product discovery

**Arrives with:**  
- Technical depth (understands APIs, SDKs)
- No protocol or token economics knowledge
- Trying to answer: "Is this the right infrastructure?"

**Wants to leave with:**
- How to access Livepeer compute (gateway APIs, SDKs)
- What compute types are available (AI inference, video transcoding, dual)
- Architecture overview: I submit a job, it routes to compute, I get a result
- Enough understanding to decide: about page or straight to Developers tab
- Confidence: is this production-ready? Is there real compute available?

**Journey through About:**  
concepts/livepeer-overview.mdx (overview) → concepts/core-concepts.mdx (building blocks) → network/marketplace.mdx (supply/demand) → network/interfaces.mdx (how developers access it) → Developers tab (API quickstart)

**Score:**  
Volume 2, Depth 1 (wants breadth only), Impact 3 (product decision) = **6/9**

**Routes out?**  
YES — quickly to Developers tab. About is their orientation layer, not their workspace.

---

### #6: The DePIN-curious LPT Holder

**Who they are:**  
Holds LPT, found the docs, wants to understand what they own and what it's worth.

**Entry vector:**  
- CoinGecko or other token lookup
- Discord "#lpt" or "#delegators" channel
- Accident (searching "LPT staking")

**Arrives with:**  
- Token holder status (clear commitment signal)
- No understanding of how LPT functions in the system
- Concern: is this an investment or a utility?

**Wants to leave with:**
- LPT's three functions: staking, governance, delegation
- Issuance model: why does LPT exist, what drives its value
- Earning potential: fees + inflation for delegators
- Governance weight: my LPT = voting power
- Decision: delegate or hold, which orchestrator

**Journey through About:**  
concepts/core-concepts.mdx → protocol/livepeer-token.mdx (three functions) → protocol/economics.mdx (money flow) → protocol/governance-model.mdx (voting) → LP Token tab (action path)

**Score:**  
Volume 2, Depth 1 (orientation only), Impact 3 (financial decision) = **6/9**

**Routes out?**  
YES — to LP Token tab for delegation mechanics and governance participation. About provides the "what" layer; LP Token provides the "how."

---

### #7: The Orchestrator Candidate

**Who they are:**  
Has GPU hardware, found Livepeer, wants to understand if node operation is worth it.

**Entry vector:**  
- Discord, mining/compute communities
- Search ("Livepeer orchestrator earnings", "run Livepeer node")
- Mining/GPU forum referral

**Arrives with:**  
- Hardware inventory (knows what GPUs they have)
- No knowledge of protocol roles, stake requirements, or earning model

**Wants to leave with:**
- Network role: what orchestrators do, how they fit
- Earning model: what am I paid for, what are the variables, realistic range
- Requirements: do I have enough LPT to solo, or pool?
- Decision: is this worth my hardware and time?
- Path forward: which quickstart

**Journey through About:**  
concepts/core-concepts.mdx → network/actors.mdx (what orchestrators do) → protocol/core-mechanisms.mdx (video vs AI incentives) → protocol/economics.mdx (earning flows) → Orchestrators tab (setup path)

**Score:**  
Volume 2, Depth 2 (wants mechanism understanding), Impact 3 (time/capital decision) = **7/9**

**Routes out?**  
YES — to Orchestrators tab for setup. About provides the "is this for me" layer; Orchestrators provides "how to do it."

---

## Persona Scoring Summary

| # | Persona | Vol | Depth | Impact | Score | Does About serve? | Routes to role tab? |
|---|---|---|---|---|---|---|---|
| **0** | **Protocol Understander** | **3** | **3** | **3** | **9/9** | **PRIMARY** | **YES (routed after orientation)** |
| 1 | Diligence Analyst | 2 | 3 | 3 | 8/9 | YES (depth persona) | Sometimes (LP Token) |
| 2 | Founder / Product Evaluator | 3 | 2 | 3 | 8/9 | YES | YES (Solutions/Developers) |
| 3 | OSS / Protocol Contributor | 1 | 3 | 3 | 7/9 | YES (prerequisites) | YES (Developers OSS) |
| 4 | Web3 R&D Researcher | 1 | 3+ | 1 | 5/9 | YES (destination) | NO |
| 5 | Pre-build Developer | 2 | 1 | 3 | 6/9 | YES (orientation) | YES (Developers) |
| 6 | DePIN-curious LPT Holder | 2 | 1 | 3 | 6/9 | YES (orientation) | YES (LP Token) |
| 7 | Orchestrator Candidate | 2 | 2 | 3 | 7/9 | YES (decision) | YES (Orchestrators) |

---

## Key Design Insight

**About serves TWO layers:**
1. **Orientation layer:** For personas 0, 5, 6, 7 — provides enough understanding to make a routing decision
2. **Depth layer:** For personas 1, 3, 4 — provides comprehensive technical/economic/governance understanding as a destination

This means About's IA must support BOTH linear orientation journeys AND deep exploration paths.

---

## Consensus and Research Gap

**What the research shows:**
- All three AI runs (canonical design) identified the Protocol Understander as primary
- Personas 1, 3, 4 were either absent or underdeveloped in AI runs
- Personas 3 and 4 are clearly served by About's actual content (protocol/core-mechanisms.mdx, blockchain-contracts.mdx) but have no mapped journey

**What needs resolution:**
Should About's IA explicitly route OSS Contributors and Web3 R&D Researchers, or should it assume they'll find what they need through search/exploration?

---

## Verdict

**APPROVE WITH AMENDMENT** — The personas are correct and well-prioritized. The primary persona (Protocol Understander) is unanimous across all research. Secondary personas 1, 2, 5, 6, 7 are well-grounded.

**Amendment:** Add explicit journey mapping for personas 3 (OSS Contributor) and 4 (Web3 R&D Researcher). These are real personas served by About's content but currently have no "start here" routing.

---

## Review Questions

1. Is the OSS Contributor persona underweighted in the priority order? Should it be higher?
2. Is the Web3 R&D Researcher real in your ecosystem, or is this theoretical?
3. Do the secondary personas match the people you see arriving in Discord/forums/support?
4. Should About have explicit "For researchers:" and "For contributors:" entry cards, or is discoverable content sufficient?

---