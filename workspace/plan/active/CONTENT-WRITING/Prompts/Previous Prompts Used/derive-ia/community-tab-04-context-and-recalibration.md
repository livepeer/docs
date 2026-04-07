# Community Tab — Other Tabs Context
## Doc 04 · Tab Summaries & IA Recalibration

**Prepared by:** Wonderland / Alison Haire  
**Date:** March 2026

---

## 1. What Each Tab Contains (v2 Only)

### Home
The universal entry point. Routes all visitor types to their relevant tab. Contains: a Primer (10-minute Livepeer overview covering community, use cases, technology), the Mission Control portal (cards for every role — build, stream, earn, delegate, govern, explore), and the Organisational Structure page (Foundation vs Livepeer Inc vs community). **Voice:** broad, welcoming, non-technical. **Scope:** orientation only — no deep content.

### About
Deep protocol and network education for anyone who wants to understand how Livepeer works at a technical or conceptual level. Contains: Core Concepts, Mental Model (OSI stack analogy), Protocol Architecture (smart contracts, staking, slashing, tickets), Livepeer Network (marketplace, actors, technical architecture), Governance Model (on-chain mechanics), Livepeer Token (LPT purpose, supply, inflation), and the Whitepaper. **Voice:** technical, structured, reference-grade. **Scope:** protocol, architecture, concepts — not operations.

### Solutions
Showcase of products built on Livepeer, aimed at builders evaluating the ecosystem. Contains: portal, Daydream (open-source real-time AI video toolkit), Livepeer Studio (hosted gateway for video streaming and VOD), Streamplace (decentralised video layer for social networks and AT Protocol), Frameworks (full-stack video platform), and a Developer Platform Hub. **Voice:** product-forward, exploratory. **Scope:** products and platforms — not protocol.

### Developers
End-to-end guide for application builders and API integrators. Contains: AI Pipelines Overview (three patterns: Standard API, ComfyStream, BYOC), AI Jobs Quickstart, ComfyStream, SDK/API guides, Video streaming integration, Gateway quickstart, Builder Opportunities (grants, RFPs, OSS contributions, bug bounties), contribution guide, and community channels for developers. **Voice:** technical, action-forward, integration-focused. **Scope:** building on the network — not running infrastructure.

### Gateways
Infrastructure guide for operators running gateway nodes. Contains: portal, what is a gateway, gateway providers and services (Livepeer Studio, Cloud SPE, Daydream), why run a gateway, run-a-gateway section (install, configure, deploy, monitor), payments (clearinghouse, on-chain), advanced operations, technical references, and tools/dashboards. **Voice:** technical, operational. **Scope:** gateway operators only — not developers using APIs, not SDK users.

### Orchestrators (GPU Nodes)
End-to-end guide for GPU operators. Contains: portal, orchestrator functions, economics (LPT rewards + ETH fees), architecture, setting up an orchestrator (install go-livepeer, staking, configuration, AI pipelines), advanced setup (hosting models, delegation, remote signers, OrchestratorSiphon split setup), orchestrator journey, tools, community and help, and CLI references. **Voice:** technical, operational, earnings-focused. **Scope:** GPU node operators only.

### LP Token
Everything for LPT holders: delegation, staking mechanics, governance participation, and treasury access. Contains: token portal, what is LPT, delegation getting started, delegation economics (rewardCut, feeShare, inflation), about delegators, delegation guide (how-to step by step), governance (overview, model, processes), treasury (overview, proposals, allocations), and resources (delegator videos, exchanges, ETH/LPT usage). **Voice:** financial, instructional, governance-aware. **Scope:** token holders and delegators — the full mechanics of staking and voting.

---

## 2. Critical Recalculation for the Community Tab

### 2.1 What is Already Owned Elsewhere

After skimming all tabs, the following content exists and is well-served in other tabs. The Community tab **must not duplicate** it:

| Content | Owned by |
|---|---|
| On-chain governance mechanics (quorum, voting window, min stake) | **About** (governance model) + **LPT** (governance section) |
| How to vote step-by-step | **LPT** (delegation guide + governance processes) |
| Delegation economics, rewardCut, feeShare | **LPT** (delegation economics) |
| SPE mechanics as protocol features | **About** (protocol governance) |
| LPT purpose, inflation, token supply | **About** (livepeer token) + **LPT** |
| Go-livepeer contribution, code repos | **Developers** (OSS contributions + builder opportunities) |
| Grants, RFPs, bug bounties, hackathons | **Developers** (builder opportunities) |
| Orchestrator community tools, dashboards | **Orchestrators** (tools section) |
| Gateway tools | **Gateways** (tools section) |
| SDK/API contribution guide | **Developers** (contribution guide) |
| Docs contribution PR workflow | **Developers** (contribution guide) |

### 2.2 What the Community Tab Actually Owns Uniquely

The Community tab is the only place that owns:

1. **Social and cultural fabric** — guidelines, norms, channels map, what each platform is for, how to behave across spaces
2. **Community organisations** — Live Pioneers, GovWorks as community entities (not governance mechanics), workstreams as joinable community groups
3. **Cross-role connection** — the only tab where an orchestrator, delegator, and developer are all addressed without their role-specific technical context
4. **Ecosystem awareness** — roadmap, events, news, community calls, curated ecosystem tools (that aren't role-specific)
5. **Non-technical contribution pathways** — translation, support, community advocacy, content — the paths that don't live in Developers

### 2.3 What This Means for Doc 03's IA

**Doc 03 over-built the Governance section.** Pages for "How Governance Works," "How to Vote," and "SPE Process" duplicate content that is better owned by the LPT tab (which has full delegation and governance mechanics) and About (which has the governance model). The Community tab should *reference* these, not *repeat* them.

**Doc 03's Contribute section overlapped too heavily with Developers.** The Developers tab has a full Builder Opportunities section (grants, RFPs, OSS contributions, bug bounties) and a contribution guide. The Community tab's contribution scope is: non-technical contribution, cross-role participation, community support, translation, and governance advocacy — not a repeat of the developer pathways.

**The correct scope for Community governance content:** not "how governance works" (LPT owns that), but "how to get involved in shaping the network" — which is a community activity framing that points outward to where the mechanics are documented.

### 2.4 Revised Section Architecture

| Section | Doc 03 | Revised | Reason |
|---|---|---|---|
| Hub | Portal + FAQ | Portal + FAQ | Keep — correct |
| The Network | Who We Are + Foundation + Guidelines | **Combine into: About This Community** | 3 pages reduce to 2 — Who We Are + Guidelines. Foundation is a sidebar in Who We Are, pointing to LPT + About for mechanics |
| Governance | 4 pages (How it Works, Vote, SPE Process, Workstreams) | **Shape the Network** — 2 pages max | Mechanics are in LPT/About. Community owns: "how to participate" (entry points to governance surfaces) + "what workstreams are" (as joinable groups) |
| Contribute | 5 pages | **Get Involved** — 3 pages | Code + docs paths move to Developers. Community owns: non-technical + governance advocacy + funded opportunities (pointing to Developers for the builder-specific ones) |
| Connect | 3 pages (Channels, Events, News) | Keep — 3 pages | Correct scope, right home |
| Resources | 3 pages (Tools, Dashboards, Guides) | **Ecosystem** — 2 pages | Tools and Dashboards merge. Role-specific tools (orchestrator, gateway) already live in their tabs — community curates cross-role and general ecosystem tools only |

**Net page count: 20 → 14**  
This is the correct reduction: tighter scope, no duplication, correct handoffs to other tabs.
