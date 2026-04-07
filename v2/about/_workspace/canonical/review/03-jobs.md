## Jobs to Be Done — What Each Persona Must Accomplish Through About

---

## The Seven Core Jobs (JTBD Format)

### J1: Understand the System in Plain Terms
**When** I first encounter Livepeer and have no context  
**I want to** understand in plain terms what the network does, who built it, and what problem it solves  
**So I can** decide in under five minutes whether this is worth investigating for my specific situation

**Coverage:** concepts/livepeer-overview.mdx, concepts/mental-model.mdx, concepts/core-concepts.mdx

**Success outcome:** Can describe Livepeer to a colleague in 1-2 sentences and name the three core layers (protocol, network, platform).

---

### J2: Evaluate the Economic Model
**When** I want to evaluate whether participating makes sense (staking, operating, building)  
**I want to** understand where money enters and exits the system, and how I might earn from each path  
**So I can** decide whether the economic incentives align with my situation

**Coverage:** protocol/economics.mdx, protocol/livepeer-token.mdx, protocol/core-mechanisms.mdx (staking/rewards)

**Success outcome:** Can explain both ETH fee flow and LPT inflation flow, and identify which path(s) create earnings for my role.

---

### J3: Understand How the Network Actually Works
**When** I want to understand the execution layer  
**I want to** trace how a compute job moves from request to result, and see the role each actor plays  
**So I can** know whether I'm asking the right questions for my role and where I might participate

**Coverage:** network/job-lifecycle.mdx, network/actors.mdx, network/marketplace.mdx, network/technical-architecture.mdx

**Success outcome:** Can trace a job end-to-end: app → gateway → orchestrator selection → execution → payment → settlement.

---

### J4: Distinguish Video vs AI in the Network
**When** I'm evaluating my participation path (operator, gateway, builder)  
**I want to** understand how video and AI compute are different in terms of incentives, requirements, and mechanics  
**So I can** determine which path(s) apply to my hardware and situation

**Coverage:** protocol/core-mechanisms.mdx (table: video vs AI incentives), concepts/core-concepts.mdx, network/actors.mdx

**Success outcome:** Can state: video transcoding is active-set based with LPT-staking requirements; AI inference is not active-set based and has different earning mechanics.

---

### J5: Evaluate Governance and Control
**When** I need to understand who governs this protocol and whether it's decentralised  
**I want to** understand the voting model, LIP process, Treasury system, and Foundation role  
**So I can** evaluate governance risk and whether the protocol's direction aligns with my interests

**Coverage:** protocol/governance-model.mdx, protocol/treasury.mdx, protocol/blockchain-contracts.mdx

**Success outcome:** Can describe stake-weighted voting, the LIP lifecycle, and explain SPEs and Foundation role.

---

### J6: Assess Organisational Structure and Longevity
**When** I'm evaluating whether to commit time or capital to Livepeer  
**I want to** understand the relationship between Foundation, Treasury, SPEs, and open-source protocol  
**So I can** assess whether this is sustainable long-term without venture funding or centralised control

**Coverage:** protocol/treasury.mdx, home/ecosystem.mdx (Foundation), protocol/governance-model.mdx

**Success outcome:** Can characterise the funding model and explain why it's sustainable or what risks exist.

---

### J7: Verify and Deep-Dive When Needed
**When** I'm mid-journey and need to confirm a specific detail or explore architecture depth  
**I want to** look up a specific term, verify a contract address, read the whitepaper, or understand design trade-offs  
**So I can** continue my role-specific journey without returning to first principles

**Coverage:** resources/glossary.mdx, resources/whitepaper.mdx, protocol/blockchain-contracts.mdx, protocol/design-philosophy.mdx, protocol/technical-architecture.mdx

**Success outcome:** Can find the specific information I need without re-reading the entire About section.

---

## The 26 Questions About Tab Must Answer

Derived from SITE-MAP.md "ABOUT" section and first-principles-sitemap.md "EVALUATOR" journey.

### Stage 1: What Is Livepeer?

1. What does Livepeer do in one paragraph?
2. What problem does it solve?
3. Where does it sit in the AI compute / video infrastructure landscape?
4. What are the three core layers (protocol, network, platform)?
5. Who are the core participants?
6. What has been built on it? (products, platforms, ecosystem)

### Stage 2: How Does It Work?

7. How do the components fit together? (complete mental model)
8. Who are all the actors and what does each do?
9. How does a job flow from request to completion?
10. How does supply meet demand in the marketplace?
11. How is pricing determined?
12. What is the network architecture? (full stack diagram)
13. How do builders access the compute? (APIs, SDKs, interfaces)

### Stage 3: How Is It Secured and Incentivised?

14. What does the protocol layer do?
15. What are the core mechanisms? (staking, delegation, rewards, inflation, slashing)
16. What is LPT and what are its three functions?
17. How does money flow through the system? (ETH fees and LPT inflation)
18. Who controls the protocol and how? (governance model)
19. How do decisions get made? (LIP process)
20. How is development funded? (Treasury, SPEs, Foundation)

### Stage 4: How Can I Verify It?

21. Where are the smart contracts?
22. What are the contract addresses?
23. What is the contract architecture?
24. Why was it designed this way? (design philosophy, trade-offs)
25. What does the whitepaper say?
26. What is the current state of the network? (live metrics)

---

## Per-Persona Job Mapping

### Protocol Understander (primary persona)
Completes all 7 jobs through a linear journey: J1 → J2 → J3 → J4 → J5 → J6 (then routes to role tab)

### Diligence Analyst
J1 → J2 (deep focus) → J5 → J6 → J7 (extensive)  
Reads concepts/, protocol/*, and resources/ in depth. May spend hours.

### Founder / Product Evaluator
J1 → J3 → J2 (focus) → J5 → J6 → J7 (verification)  
Asks: "What is the network?" → "How do I access it?" → "Can I rely on it economically?" → "Who's backing it?"

### OSS / Protocol Contributor
J3 → J5 → J4 → J2 (contract level) → J7 (heavy)  
Deep focus on contract architecture, design decisions, governance process for accepting changes.

### Web3 R&D Researcher
J1 → J2 (deep) → J5 → J3 (architecture) → J7 (all resources)  
Covers everything but from the angle of cryptoeconomic analysis and design justification.

### Pre-build Developer
J1 → J3 → J4 → J7 (lookup)  
Quick orientation on network function, then route to Developers tab.

### DePIN-curious LPT Holder
J1 → J2 → J5 → J7 (LPT-specific)  
Focus on what LPT does and how governance works, then route to LP Token tab.

### Orchestrator Candidate
J1 → J3 → J4 → J2 (operator perspective) → J5  
Understands: what do orchestrators do, what are the incentives, do I have what I need?

---

## Verdict

**APPROVE** — The 7 jobs comprehensively cover what About must deliver. The 26 questions map cleanly to the 10-layer stack and the first-principles evaluator journey. Per-persona job mapping is clear.

---

## Review Questions

1. Are all 7 jobs real? Which ones do your readers actually need most?
2. Should "Distinguish Video vs AI" be elevated to J1 (more foundational) or is J4 correct?
3. Is J7 "Verify" really a job, or is it utility? Should it be part of resources/glossary instead?
4. Which of the 26 questions do you see most frequently in Discord?

---