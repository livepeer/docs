# SOLUTIONS Tab: Audience Analysis & Entry Vectors

## Primary Job to Be Done

> "What products exist on Livepeer and how do I use them?"

The SOLUTIONS tab owns product documentation for all ecosystem products built on or powered by Livepeer's infrastructure. It bridges the gap between high-level platform overview (Home/About) and deep operational guides (Developers/Gateways/Orchestrators).

---

## Audience Definition

**Primary token**: `product-user` + `developer` (dual, context-dependent)

**Secondary audience** (lower volume): Evaluators and ecosystem explorers understanding what can be built on Livepeer.

### Audience Arrival Patterns

| Arriving Type | Entry Vector | Intent | Routing Need |
|---|---|---|---|
| **Active product user** | Direct URL, product docs search, Discord link | "How do I use [Daydream/Studio/etc]?" | Product-specific docs |
| **Feature implementer** | Google search "Livepeer Studio livestream", internal bookmark | "How do I do X with this product?" | Task-specific guide (livestream, VOD, access control) |
| **Evaluator browsing Livepeer** | Home → About → Solutions, search "what's built on Livepeer" | "What can I build? What exists?" | Overview + high-level feature comparison |
| **Ecosystem explorer** | Portal landing, recommendations from social | "Show me the ecosystem" | Product showcase, social feeds, next steps |
| **Product team (internal)** | Direct edit access, Product overview authorship | "How is my product documented?" | Template compliance, version control |

### Arriving Questions (Verbatim)

- "What is Daydream and what can I do with it?"
- "How do I build a livestream with Livepeer Studio?"
- "Which product should I use for my use case?"
- "Does Livepeer have video transcoding built in?"
- "Can I run a commercial video service on Livepeer?"
- "What AI products are available?"
- "How do I integrate Streamplace into my app?"

---

## Scope & Product Coverage

### Products in Scope (5 primary)

1. **Daydream** — Open-source toolkit for real-time AI video (world models, style transfer, inference)
2. **Livepeer Studio** — Managed gateway and API for livestream + VOD + access control + analytics (88 pages of docs)
3. **Frameworks** — Full-stack video infrastructure (self-hosted + hosted, MistServer-based)
4. **Streamplace** — Decentralised video layer for social networks and Web3 (AT Protocol + C2PA provenance)
5. **Embody** — Real-time interactive 3D avatars (education, telepresence, branded content)

### Secondary/Ecosystem

- **Solution Providers** — Curated marketplace of 3rd-party services and integrations (single landing page)
- **Ecosystem tools** — IPFS pinning, model hosting, SDK collections (referenced, not authored locally)

### Out of Scope (Owned by Other Tabs)

- GPU infrastructure operation → Orchestrators tab
- Gateway operation → Gateways tab
- Governance/SPE system → About + Community tabs
- Raw API reference (isolated from product context) → Resources tab

---

## Information Requirements (What Readers Must Find)

### Universal (Every Product)

1. **What it is** — 1-2 sentence product definition + connection to Livepeer network
2. **Key capabilities** — 4-6 core features + use cases it enables
3. **How to try it** — Fastest path to working prototype (app, quickstart, or live demo)
4. **How to build** — Setup, authentication, first working example
5. **Where to get help** — Docs, GitHub, Discord, community channels
6. **Community activity** — Recent updates, integrations, announcements (automation)

### Product-Specific

| Product | Additional Coverage |
|---|---|
| **Studio** | Full API reference (88 pages): livestream, VOD, access control, webhooks, analytics, rooms, multistream, projects, signing keys |
| **Daydream** | Workflow composition, API, gateway integration, real-time pipeline configuration |
| **Frameworks** | Self-hosting guide, deployment options, StreamCrafter, Skipper, hybrid mode |
| **Streamplace** | C2PA provenance, metadata schema, AT Protocol integration, node setup |
| **Embody** | Unreal Engine integration, avatar customisation, allowlist process, cluster deployment |

---

## Personas: Who This Tab Actually Serves

Derived from agent-v5-solutions-audience-design.md (5 ranked personas).

### #1 — Video Product Builder (Primary) — **Score: 9/10**

**Who**: Developer or product lead building video streaming/transcoding product on Livepeer

**Arrives with**:
- Product specification (livestream, VOD, transcoding, etc.)
- API integration experience
- Unclear which Livepeer product fits

**Wants to leave with**:
- Clear product fit (Studio vs Frameworks vs custom)
- Quickstart working in < 1 hour
- Feature-level API/SDK docs

**Entry vectors**: Google search ("Livepeer livestream API"), Livepeer developer blog, GitHub trending

**Why critical**: Highest volume, highest impact. Drives section IA and feature depth.

---

### #2 — Active Builder / Return Visitor — **Score: 8/10**

**Who**: Developer actively building with Livepeer, returning with specific feature questions

**Arrives with**:
- Understanding of which product they use
- Working integration partially complete
- Needs feature-level depth (access control, webhooks, analytics)

**Wants to leave with**:
- Task-specific guide (e.g., "secure my livestream with JWT")
- Code sample or curl example
- Link to API reference

**Entry vectors**: Bookmark, direct product URL, search for feature name, Discord question link

**Why critical**: Return visitors = high engagement signal. Drives quality of task guides.

---

### #3 — AI Media Builder — **Score: 7/10**

**Who**: Developer building AI inference product (real-time video + AI pipeline)

**Arrives with**:
- ML/AI background, may lack video infrastructure experience
- Interest in Daydream or AI + Studio combo
- Unclear on cost model and latency guarantees

**Wants to leave with**:
- Daydream API working OR Studio + AI pipeline integration working
- Latency expectations set
- Cost model explained

**Entry vectors**: AI blog, #ai-video Discord channel, ComfyStream announcement, Daydream GitHub

**Why critical**: Emerging high-growth segment. Daydream + Studio integration needs explicit content.

---

### #4 — Integration Evaluator — **Score: 7/10**

**Who**: Product manager or technical evaluator assessing fit without writing code yet

**Arrives with**:
- Feature checklist (livestream? VOD? access control? AI?)
- Business requirements (self-hosted? Managed? Cost model?)
- No code written yet

**Wants to leave with**:
- Clear product-to-use-case mapping
- Go/no-go decision
- Next steps (sales contact, proof of concept, quickstart)

**Entry vectors**: Home → Solutions portal, product comparison searches, referral/RFP

**Why critical**: Evaluation-stage readers convert to implementation. Feature overview critical.

---

### #5 — Ecosystem Explorer — **Score: 3/10**

**Who**: Community member, student, or newcomer browsing what exists on Livepeer

**Arrives with**:
- Interest in Livepeer ecosystem
- No specific product in mind
- Low technical depth expectation

**Wants to leave with**:
- Overview of what's possible
- Curated next step (try app, read blog, join Discord)
- Sense of momentum (activity feeds, recent launches)

**Entry vectors**: Portal landing, About tab graduation, social media, ecosystem tour

**Why critical**: Low volume, but conversion multiplier: browser → user → builder pipeline.

---

## User Journeys: The 10-Stage Path

### Canonical Zero-to-Hero Journey

| Stage | Persona | Journey | Content Type | Current Status |
|---|---|---|---|---|
| 1 | Evaluator | Orientating to product ecosystem | Landing (Portal) | Portal.mdx exists |
| 2 | Explorer | Understanding which product solves my problem | Navigation / comparison | Implicit in card deck, needs explicit |
| 3 | Evaluator | Evaluating fit before commitment | Product overview | Per-product overview.mdx exists |
| 4 | Product Builder | First working result (try, quickstart, demo) | Interactive / instruction | Per-product "Try" cards + quickstarts exist |
| 5 | Product Builder | Implementing first feature (livestream, AI, VOD) | Task guide | Studio has these; others thin |
| 6 | Product Builder | Securing the implementation (access control, auth) | Reference + guide | Studio has JWT/webhooks; others minimal |
| 7 | Product Builder | Connecting to payment/identity systems | Integration guide | Frameworks, Streamplace have these; Studio thin |
| 8 | Product Builder | Monitoring and troubleshooting | Observability guide | Missing across all products |
| 9 | Active Builder | Scaling and optimizing | Performance guide | Frameworks + Studio have partial; others missing |
| 10 | Active Builder | Going to production | Launch checklist | Missing across all products |

---

## Key Findings: What's Missing

### CRITICAL GAPS (Journey-Blocking)

| Gap | Why Critical | Affected Personas | Solution |
|---|---|---|---|
| **Task guide template missing** | Each product follows different structure (overview + try + resources). No consistent "getting started" or "how to livestream" template. | All | Create canonical task-guide template; apply to all products |
| **Feature comparison missing** | Evaluator has no way to compare: "Which product has access control?" "Which is self-hosted?" | Evaluator, Integration Evaluator | Feature matrix or comparison guide |
| **Community feeds broken** | "SOLUTIONS-SOCIAL-DATA pipeline complete" but 5 community pages marked automation broken | Explorer | Fix automation or create static fallback |
| **Studio links misrouted** | ~35 external links to livepeer.studio/docs need path conversion to internal `/solutions/livepeer-studio/docs/...` | Product Builder (Studio users) | Audit + rewrite all legacy links |
| **Daydream API docs missing** | "Exact endpoints, SDK usage documented at docs.daydream.live but external link only" | AI Media Builder | Embed key Daydream API concepts in Studio integration guide |

### HIGH-IMPACT GAPS

| Gap | Why Important | Affected Personas | Solution |
|---|---|---|---|
| **Which product when?** | Products overlap (Studio + Daydream for AI, Frameworks vs Studio for selfhost). No decision tree. | All | Create explicit routing guide: use case → product recommendation |
| **Setup checklist per product** | "Getting started" is scattered (try app, then API, then self-host). No single source of truth for "things I need to know before starting." | Product Builder | Pre-flight checklist: SDK versions, API keys, prerequisites, estimated time |
| **Monitoring/ops guide missing** | Studio has analytics; others lack "how do I know if something went wrong?" | Active Builder | Add ops section per product: healthcheck, logs, error handling |
| **Cost model clarity** | Studio: usage-based. Frameworks: tiered. Daydream: pay-per-inference. Streamplace: DIY cost. | Evaluator, Integration Evaluator | Create cost comparison guide; link to pricing pages |
| **"Build next" signposting** | After one product tutorial, where does reader go? No cross-product journey. | Product Builder | Add "next steps" CTA: explore other products, advanced features, production checklist |

---

## Scope Boundaries & Tab Handoffs

### SOLUTIONS Owns

- Product overviews (what is it, key features, connection to Livepeer)
- Quickstarts and getting-started guides (first working result)
- Task guides specific to product (livestream with Studio, AI pipeline with Daydream)
- Community updates and social feeds (per product)
- Feature comparison and routing (which product when?)

### DEVELOPERS Tab Owns

- Raw API reference (decoupled from product context) → if it's true SDK/API-only docs
- Livepeer protocol interaction (on-chain concepts, marketplace mechanics)
- Cross-product patterns (authentication patterns, webhook structure, pricing models)
- **Handoff**: "For deep API details, see Developers tab"

### STUDIO Owns (External)

- 88 pages of Livepeer Studio product docs (architecture, advanced config, edge cases)
- **Livepeer.studio/docs** is source of truth for Studio; Docs v2 embeds or links
- **Handoff**: "For full API reference, see Studio docs"

### ABOUT Tab Owns

- "What's been built on Livepeer" bridge page (ecosystem overview)
- Product feature landscape (high-level comparison of capabilities)
- **Handoff**: "For detailed product docs, see Solutions tab"

---