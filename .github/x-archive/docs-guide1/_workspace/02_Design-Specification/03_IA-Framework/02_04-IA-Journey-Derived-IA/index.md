# **04 Blueprint — Step 1: Journey-First Page Derivation**

Every page below is derived from a persona question at a journey stage. No repo files were consulted. Pages are named after what they DO, not after what exists.

Format: Stage → Question → Page needed → Tab → Routes to next

## **Journey 1: NEWCOMER / GENERAL**

**Who:** Someone who just heard about Livepeer. Knows nothing. Needs to understand what it is and find their path. **Entry point:** docs.livepeer.org (Home tab) **Exit:** Correct persona tab portal

**Home tab total pages needed:** 2 (Mission Control + Primer)

But wait — Home also needs supporting context pages for newcomers who want more before committing:

**Home tab final: 4 pages**

## **Journey 2: DEVELOPER — AI Inference**

**Who:** Building an app that uses AI inference through Livepeer. **Entry point:** Home → "I want to build an app with video or AI" → Developers tab **Critical fork at Stage 2:** Hosted platform (→ Solutions) vs direct gateway (→ stays in Developers)

**Developer tab pages from AI journey: 8-9 pages** (Portal, AI overview, Integration path chooser, AI Quickstart, Pipeline guide, Model support reference, Production guide, BYOC, Troubleshooting)

**Key routing insight:** The "Choose Your Integration Path" page is the most important page in the Developers tab. It's where most developers leave — either to Solutions (hosted) or Gateways (infrastructure). The Developers tab's own quickstart-and-beyond path only serves developers who chose PATH B (direct gateway access).

## **Journey 3: DEVELOPER — Video/Transcoding**

**Who:** Building an app that uses video transcoding or livestreaming. **Entry point:** Home → Developers tab → "I want to build a video app" **Same fork at Stage 2:** Hosted (→ Solutions/Studio) vs direct

**Additional Developer tab pages from video journey: 4 pages** (Video overview, Video Quickstart, Video Integration Guide, Studio Migration) (Troubleshooting may merge with AI troubleshooting into one page)

## **Journey 4: SOLUTION INTEGRATOR (via Solutions tab)**

**Who:** Developer who chose PATH A — use a hosted platform. **Entry point:** Developers tab → "Choose Integration Path" → "Use a hosted platform" → Solutions tab **OR:** Home → "I want to use a platform like Studio or Daydream" → Solutions tab directly

**Solutions tab pages per platform: ~5 (overview, quickstart, guides, API ref, SDKs)** **Solutions tab shared: 2 (portal, comparison)** **With 4 platforms: ~22 pages total**

## **Journey 5: GATEWAY OPERATOR**

**Who:** Running a gateway node. Routes traffic, earns fees. **Entry point:** Home → "I want to run a gateway" → Gateways tab OR: Developers → "I want to run infrastructure" → Gateways tab OR: Developers → Stage 7 "outgrowing hosted" → Gateways tab

**Gateways tab pages: ~10** (Portal, What is a Gateway, Requirements & Economics, Quickstart, Going Live, Operations, Payment & Economics, Troubleshooting, Public Providers, per-provider guides)

**Plus reference pages (on-demand, not sequential):**

- CLI Reference
- Configuration Flags
- Hardware Requirements detail
- Prometheus Metrics reference
- API Reference (OpenAPI)

## **Journey 6: ORCHESTRATOR / GPU COMPUTE PROVIDER**

**Who:** Running GPU infrastructure. Earns from compute + staking. **Entry point:** Home → "I want to provide GPU compute" → GPU Nodes tab

**GPU Nodes tab pages: ~9** (Portal, What is an Orchestrator, Requirements & Economics, Quickstart, Join a Pool, AI Configuration, Model Curation, Earnings & Optimisation, Troubleshooting)

**Plus reference pages:**

- Hardware Requirements detail
- CLI Flags
- FAQ

## **Journey 7: DELEGATOR / LPT TOKEN HOLDER**

**Who:** Holds LPT. Wants to stake and participate. **Entry point:** Home → "I want to stake LPT" → LP Token tab

**LP Token tab pages: ~9** (Portal, What is Delegation, Getting LPT, Choosing an Orchestrator, Delegate Your LPT, Managing Delegation, Delegation Economics, Governance, Treasury & Proposals, FAQ)

## **Journey 8: COMMUNITY CONTRIBUTOR**

**Who:** Wants to contribute — docs, code, governance, support. **Entry point:** Home → "I want to contribute" → Community tab

**Community tab pages: ~5-6** (Portal, Contributing to Livepeer, Your First Contribution, Channels & Events, Grants & Programmes, FAQ)

## **Journey 9: PLATFORM BUILDER / SOLUTION PROVIDER**

**Who:** Building a product that integrates Livepeer at platform scale (like Daydream, Cloud SPE). **Entry point:** Home → "I want to use Livepeer for my product" → Developers tab (for routing) **This persona's journey crosses the most tabs.**

**Platform Builder: 0 unique pages needed.** This persona is served by routing through existing journeys (Developers → Gateways → About). The Integration Path Chooser in Developers handles the initial routing.

## **ABOUT TAB — Not a Journey, a Knowledge Base**

About is different from persona tabs. Nobody's journey starts or ends here. People arrive FROM persona tabs when they need deeper understanding of how the protocol/network works.

**Entry points:** Cross-links from every other tab when someone asks "but how does this actually work?"

**About tab pages: ~7**

## **RESOURCE HUB — Not a Journey, a Reference Shelf**

Like About, nobody's journey lives here. It's where you go for docs-about-docs.

**Resource HUB pages: ~6**

## **TOTALS**

| **Tab** | **Journey-Derived Pages** | **Reference/Lookup Pages** | **Total** |
| --- | --- | --- | --- |
| Home | 4 | 0 | 4 |
| Developers | 12 | 2 | 14 |
| Solutions | 2 shared + ~5 per platform × 4 | 0 | ~22 |
| Gateways | 10 | 5 | 15 |
| GPU Nodes | 9 | 3 | 12 |
| LP Token | 9 | 1 | 10 |
| Community | 6 | 0 | 6 |
| About | 0 | 7 | 7 |
| Resource HUB | 0 | 6 | 6 |
| Total |  |  | ~96 |

Previous (repo-contaminated) blueprint: 177 pages. Journey-derived blueprint: ~96 pages.

That's the difference between "find homes for everything in the repo" and "what do the personas actually need."