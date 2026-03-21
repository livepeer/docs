# Content Brief GW-F — Gateway Architecture
**Gateways Tab · Livepeer Docs v2**  
**Template version:** 1.0 · March 2026  
**Repo:** `livepeer/docs` · branch `docs-v2`  
**Platform:** Mintlify  
**Engagement:** Wonderland × Livepeer Foundation

---

## How to Execute This Brief

Three phases. Strict order. Do not skip ahead.

1. **RESEARCH** — Consult every mandatory source in 2.2. Record every finding in Part 3. Do not write a single line of MDX until all research questions are answered or explicitly flagged as unverifiable.
2. **DRAFT** — Write the page. Format verified content into the MDX structure specified in 2.3. Mark unverified items with `[//]: # (REVIEW:)` comments.
3. **OUTPUT FOR REVIEW** — Deliver the research report (Part 3) and the draft MDX together. Nothing is committed or pushed. Human reviews all before anything touches the repo.

**⚠️ No commits. No pushes. No repo writes of any kind.**

---

## Part 1 — Global Context

*Fixed. Applies to every brief in this engagement without modification.*

---

### 1.1 Repo

```
Repo:     https://github.com/livepeer/docs
Branch:   docs-v2
Platform: Mintlify (docs.livepeer.org/v2)
```

This brief produces output for human review only. No files are written to the repo. No commits. No pushes.

---

### 1.2 Source Hierarchy

**Technical facts** must trace to Tier 1–2. **Pain points and community knowledge** come from Tier 3–4. **Media** comes from Tier 5. When sources conflict, the higher tier wins for factual claims. Record all conflicts in 3.5.

#### Tier 1 — Ground Truth

| Source | Use for |
|--------|---------|
| `github.com/livepeer/go-livepeer` source code | Component structure, HTTP interface, orchestrator selection, PM mechanics |
| go-livepeer PR #3791 | GetOrchestratorInfo signing — what changed architecturally |
| go-livepeer PR #3822 | Payment ticket signing — remote signer integration, stateless gateway concept |
| DeepWiki for `livepeer/go-livepeer` | Component overview, request flow synthesis |

#### Tier 1a — Design Documents (read before other sources)

| Source | Use for |
|--------|---------|
| `Remote_signers.md` (project file — **read first**) | New architecture components, remote signer integration, stateless gateway, what changed from old monolith |
| Existing `v2/gateways/concepts/architecture.mdx` in repo | What's currently there — identify what is accurate vs outdated vs missing |

#### Tier 2 — Foundation Sources

| Source | Use for |
|--------|---------|
| Livepeer Notion — architecture pages | Architecture diagrams, extended design context |
| `github.com/livepeer/docs` issues and PRs | Known content gaps |
| `roadmap.livepeer.org` | Strategic framing |

#### Tier 3 — Community Knowledge (verify against Tier 1)

| Source | Use for |
|--------|---------|
| Discord `#local-gateways` | Architecture questions, how SDK builders understand the system |
| Discord `#gateway` | Operator architecture questions |
| Livepeer Forum | Architecture explainers |

#### Tier 4 — Third-Party Writeups

Mine for: what operators get confused about architecturally, common misconceptions to pre-empt.

Suggested searches: `livepeer gateway architecture`, `livepeer probabilistic micropayments architecture`, `livepeer remote signer`, `livepeer orchestrator selection`

#### Tier 5 — Video & Media

| Source | Use for |
|--------|---------|
| Livepeer YouTube | Architecture explainer videos |
| Core dev blog posts or talks | Architecture diagrams or walkthroughs |

---

### 1.3 Strategic Context

Livepeer is a **decentralised compute network for video and AI**. Not a SaaS product. Priority persona order: AI App Developer (P0) → Gateway Operator (P1) → Orchestrator (P2) → Delegator (P3).

**Docs purpose:** Take each persona from "I just heard about Livepeer" to "I am confidently doing the thing I came to do."

---

### 1.4 Persona Definitions — Gateway Operator (P1)

A gateway operator routes client requests to orchestrators on the Livepeer network.

| Sub-persona | Description | Technical depth |
|-------------|-------------|-----------------|
| **A — The Graduate** | App developer self-hosting, offboarding from Daydream API | Go, Docker, Linux, some crypto |
| **B — The Provider** | Gateway-as-service, NaaP-scale | Infrastructure ops, ETH/crypto fluent |
| **C — The SDK Builder** | Building alternative gateway implementations | Systems programming, protocol-level |
| **D — The Broadcaster-Turned-Operator** | Video infrastructure operator | Video production, some Linux |
| **E — The Platform Builder** | Enterprise, multi-tenant | Cloud infrastructure |

**This brief primarily serves A, B, and C.** C (SDK Builder) has the deepest need — this is the page they use to understand what to implement.

---

### 1.5 Gateway Operator Journey Stages

| Position | Purpose Type | Reader State | Reader's Question |
|----------|--------------|--------------|-------------------|
| 1 | `landing` | Just arrived | "Where do I go?" |
| **2** | **`concept`** | **Orienting, evaluating** | **"What is this and how does it work?"** |
| 3 | `tutorial` | Ready to try | "Get me to first success." |
| 4 | `how-to` | Active, task-focused | "How do I do this one thing?" |
| 5 | `guide` / `advanced` | Deepening | "How does this work in practice?" |
| 6 | `reference` | On-demand lookup | "What's the exact spec?" |

**This page is Position 2 — Concepts.** The reader has read the overview and knows what type of gateway they're running. They are ready for the architectural model. They do not yet need setup instructions.

---

### 1.6 Page Taxonomy

| Type | Job | Target read time | Word range |
|------|-----|-----------------|------------|
| `concept` | Build accurate mental model of a system | 5–10 min | 400–1200 |

**Fixed layout for `concept`:**
```
WHAT THIS IS → WHY IT MATTERS → CONTENT → RELATED
```

The content section for an architecture concept typically contains: component diagram, request flow(s), key mechanics. Keep each mechanics section concise — the concept page explains the model, not how to configure it.

---

### 1.7 Frontmatter Schema

```mdx
---
title: 'Page Title'
description: 'What this page does'
sidebarTitle: 'Short Nav Label'        # Optional
keywords: ["livepeer", "gateway"]
pageType: 'concept'
audience: 'gateway'
status: 'current'
---
```

**Description rules:** 1–2 sentences. Describes what the page provides to the reader. Primary field for AI assistants and search engines.

---

### 1.8 Brand & Copy Rules

**Voice:** Knowledgeable colleague. Not a marketer, not a professor.  
**POV:** Second person ("you") for instructions. Third person for system descriptions.  
**Language:** British English (en-GB). Oxford comma.  
**Tone:** Medium, explanatory — reader is technically capable but building a mental model, not executing a task.

**Canonical terminology:**

| Use | Not |
|-----|-----|
| gateway | broadcaster (v1 term) |
| orchestrator | transcoder (avoid in AI context) |
| go-livepeer | the Livepeer node |
| probabilistic micropayments (PM) | ticket payments (acceptable shorthand after first use) |
| remote signer | signing service, external signer |
| off-chain gateway | off-chain mode |
| on-chain gateway | mainnet gateway |
| Arbitrum | L2 (unless clarifying) |

**Banned words:** simply, just, easily, leverage, utilise, seamless, best-in-class, cutting-edge, "in order to", "it should be noted that"

**Architecture-specific rules:**
- The existing architecture page predates PRs #3791/#3822. Do not carry forward outdated content — verify every claim in the existing file against the current implementation.
- The remote signer architecture is a material change: gateway is now stateless relative to ETH in off-chain/remote-signer mode. This must be reflected accurately.
- Do not describe the old monolith architecture as current.

---

### 1.9 Component Rules

**Mintlify global components (use directly, never import):**  
`Card`, `CardGroup`, `Tabs`, `Tab`, `Steps`, `Step`, `Accordion`, `AccordionGroup`, `Columns`, `Note`, `Warning`, `Tip`, `Danger`, `Badge`, `CodeBlock`, `CodeGroup`, `Frame`, `Icon`, `View`

**Custom components (import from `/snippets/components/`):**  
`GotoCard`, `GotoLink`, `LinkArrow`, `DoubleIconLink`, `TipWithArrow`, `CustomCodeBlock`, `Quote`, `ScrollableDiagram`

**Component usage rules for architecture concepts:**

| Content pattern | Use | Not |
|-----------------|-----|-----|
| Component relationships | Mermaid `graph TB` or `graph LR` | Static image if avoidable |
| Request flow (step-by-step) | Mermaid `sequenceDiagram` or numbered prose | Bullet list |
| On-chain vs off-chain variants | `<Tabs>` | Separate H2 sections |
| Deep technical detail (optional) | `<Accordion>` | Inline prose cluttering the main flow |
| Cross-references | `<CardGroup>` + `<Card>` at end | Inline links only |
| Scope boundaries | `<Note>` | Bold prose |

---

## Part 2 — Page Brief

---

### 2.1 Page Identity

```
Target file path:   v2/gateways/concepts/architecture.mdx
Page type:          concept
Audience:           gateway
Journey stage:      Position 2 — Concepts
Priority:           P2 · Phase 2
Status:             Exists — predates remote signer implementation; treat as rewrite
Action required:    Expand / Rewrite
Gateway type scope: Both — on-chain and off-chain architectures documented
```

**Page purpose:** Explains how a Livepeer gateway works architecturally — the components involved, how they interact, and what the remote signer model changes. Reference for SDK builders needing to understand what to implement; reference for production operators debugging issues.

**Personas served:**
- **A — Graduate** (secondary): needs enough architecture to understand why off-chain mode doesn't require ETH
- **B — Provider** (secondary): needs horizontal scaling context enabled by remote signer architecture
- **C — SDK Builder** (primary): needs precise component model to implement an alternative gateway

**Entry condition:** Reader has read `concepts/overview.mdx`, knows what type of gateway they're running, and wants to understand the system before running it or building on it.

**Dependency:** GW-C (Remote Signers) should be complete. This page references the remote signer without re-explaining setup — links to `advanced/remote-signers.mdx` for depth.

**Success conditions:**
- Reader can explain why off-chain mode doesn't need ETH on the gateway node
- Reader can explain where a remote signer fits into the request flow
- Reader can explain what a clearinghouse adds on top of a remote signer
- SDK Builder has enough component detail to know what to implement

**Critical context — what changed:**  
The existing `architecture.mdx` was written before PRs #3791/#3822 (Q4 2025). The old architecture has the gateway as a monolith with Ethereum deeply integrated. The new architecture separates media processing from payment signing. Every claim in the existing file must be verified against the current implementation. Do not carry forward outdated content.

---

### 2.2 Research Mandate

**Execute all research before writing. Record all findings in Part 3. Read `Remote_signers.md` and the existing `architecture.mdx` first.**

#### Research questions — all must be answered before writing

| # | Question | Where to find it |
|---|----------|-----------------|
| 1 | What are the architectural components of a go-livepeer gateway in current form? Map: gateway process, redeemer, remote signer, orchestrator connections | go-livepeer source, DeepWiki, `Remote_signers.md` |
| 2 | What is the request flow for an AI inference job? Application → gateway → orchestrator → response — what happens at each step? | go-livepeer source, DeepWiki |
| 3 | What is the request flow for a video transcoding job? How does it differ from AI? | go-livepeer source, DeepWiki |
| 4 | What is the redeemer? What role does it play? Is it still required in off-chain mode? | go-livepeer source, DeepWiki |
| 5 | How does orchestrator selection work? What is the selection algorithm? (Round robin, price-based, capability-based?) | go-livepeer source — discovery/selection code |
| 6 | How does PM flow work architecturally? Who holds what, what flows where, what is redeemed when? | go-livepeer source, `Remote_signers.md` |
| 7 | How does the remote signer architecture change the component diagram? Gateway stateless relative to ETH — what does that mean for horizontal scaling? | `Remote_signers.md`, PRs #3791/#3822 |
| 8 | What does the gateway HTTP interface expose? What does an application send to request AI inference or transcoding? | go-livepeer source — HTTP handler registration |
| 9 | How does orchestrator capability matching work for AI gateways? How does the gateway know which orchestrators support which AI pipelines? | go-livepeer source — capability system |
| 10 | Does an existing architecture diagram exist anywhere (repo, Notion, blog)? Is it current? | Notion search, repo, web |
| 11 | What is in the existing `architecture.mdx`? What is accurate, what is outdated? | Repo — docs-v2 branch |

#### Mandatory sources

| Source | What to extract |
|--------|----------------|
| `Remote_signers.md` (project file — **read first**) | New component model, stateless gateway concept, what changed from old monolith, remote signer integration point |
| Existing `v2/gateways/concepts/architecture.mdx` (**read second**) | Current content — note accurate vs outdated vs missing |
| go-livepeer PR #3791 | GetOrchestratorInfo signing — architectural change |
| go-livepeer PR #3822 | Payment ticket signing — stateless gateway, remote signer integration |
| DeepWiki for `livepeer/go-livepeer` | Component overview, request flow, capability system, orchestrator selection |
| `github.com/livepeer/go-livepeer` — gateway code | HTTP interface surface, component interactions |
| Livepeer Notion — `Gateway Architecture` page (`31e660222d0881c693bfec482b18dfcc`) | Any architecture diagrams or extended design context |
| Discord `#local-gateways` — search "architecture", "components", "redeemer", "remote signer", "stateless" | SDK builder questions, operator confusion points |

#### Technical claims that MUST be sourced — do not guess

| Claim | Must be found in |
|-------|-----------------|
| Current component list for gateway | go-livepeer source or DeepWiki |
| AI inference request flow (step by step) | go-livepeer source |
| Video transcoding request flow | go-livepeer source |
| Redeemer role and whether required in off-chain mode | go-livepeer source |
| Orchestrator selection algorithm | go-livepeer source — discovery code |
| Gateway HTTP API endpoints | go-livepeer source |
| Capability matching mechanism for AI pipelines | go-livepeer source |
| What remote signer architecture enables for scaling | `Remote_signers.md` + PRs |

---

### 2.3 Content Specification

**Required sections (in this order):**

```
FRONTMATTER ............... See 2.5 for exact fields
INTRO ..................... 2–3 sentences, no heading.
                             What this page covers. Who benefits.
COMPONENT OVERVIEW ........ Mermaid diagram + prose.
                             Two variants: on-chain and off-chain.
                             See detail below.
REQUEST FLOW .............. AI inference flow + video transcoding flow.
                             5–7 steps each.
                             See detail below.
ORCHESTRATOR SELECTION .... Short prose or <Accordion>.
                             Criteria, automatic vs manual, off-chain gap.
PAYMENT MECHANICS ......... Prose overview — the model, not the maths.
                             On-chain vs off-chain difference.
                             See detail below.
HORIZONTAL SCALING ........ Short prose — what remote signer enables.
RELATED ................... <CardGroup> with 3 cards.
```

#### Component overview — section detail

**Required Mermaid diagram.** Use `<Tabs>` to separate on-chain and off-chain variants if the component set differs meaningfully.

**On-chain variant — components to include:**
- Application (external — your code)
- Gateway process (go-livepeer in gateway mode)
- Redeemer (if separate process — verify)
- ETH/Arbitrum (for PM redemption)
- Orchestrator(s) (external — one or many, selected per job)

**Off-chain variant — components to include:**
- Application (external)
- Gateway process (go-livepeer in gateway mode — stateless relative to ETH)
- Remote signer (separate process — holds ETH key, signs PM tickets)
- Orchestrator(s)

`[//]: # (REVIEW: Verify exact component set against go-livepeer source. The redeemer role in off-chain mode is unconfirmed.)`

Prose after the diagram: 3–4 sentences describing what each component does and how they connect. Not a repeat of the diagram — add what the diagram cannot show (e.g. "the gateway process itself holds no ETH keys in off-chain mode — all signing is delegated").

#### Request flow — section detail

Two flows. Each as a numbered sequence — either Mermaid `sequenceDiagram` or numbered prose (whichever is clearer given what the research finds). Keep to 5–7 steps each.

**AI inference request flow:**

Expected structure (verify each step):
1. Application sends HTTP request to gateway endpoint (`/process/stream/*` or equivalent — verify exact path)
2. Gateway receives request, authenticates (if auth is configured)
3. Gateway queries capability system — which orchestrators support this pipeline type?
4. Gateway selects orchestrator (price, capability, recent performance — verify criteria)
5. Gateway forwards job to orchestrator
6. Orchestrator processes and streams response back
7. Gateway returns response to application
8. Payment: gateway (or remote signer) issues PM ticket; orchestrator redeems on-chain when it wins

`[//]: # (REVIEW: Verify all steps against go-livepeer source. Step order and exact mechanism at each step must be confirmed.)`

**Video transcoding request flow:**

Same structure. Note where it differs from AI:
- Different protocol (RTMP/HLS vs HTTP streaming)
- Different orchestrator capability requirement
- Different payment timing

`[//]: # (REVIEW: Verify transcoding flow against go-livepeer source. Note any differences in PM handling between video and AI.)`

#### Payment mechanics — section detail

Architecture-level overview only. Not the maths. Not implementation. The model:

- **What PM is:** Gateway commits to paying orchestrators via probabilistic tickets. Each ticket has a low face value but a chance of winning a larger prize. Expected value equals the face value — orchestrators are paid correctly on average.
- **Who holds what:** In on-chain mode, the gateway holds ETH and signs tickets. In off-chain mode, the remote signer holds the ETH key — the gateway process itself is stateless relative to ETH.
- **Redeemer role:** Orchestrators submit winning tickets to the on-chain redeemer contract. Verify whether the gateway runs a redeemer process or whether this is handled externally.
- **Off-chain mode:** Off-chain AI gateways do not participate in on-chain PM at all. This is why no ETH wallet is required. `[//]: # (REVIEW: Confirm this against go-livepeer source — is off-chain truly PM-free, or does it use a different payment mechanism?)`

`<Note>`: "For the full clearinghouse model (multi-gateway payment management), see `advanced/payment-clearinghouse.mdx`."

#### Horizontal scaling — section detail

Short prose (3–5 sentences). What the remote signer architecture enables:
- Multiple stateless gateway instances can share one remote signer
- Each gateway instance holds no ETH key — signing is centralised in the remote signer
- This enables horizontal scaling of the gateway layer without multiplying ETH key management complexity
- What this requires operationally: remote signer must be highly available; if the signer goes down, all gateways it serves cannot process payments

`[//]: # (REVIEW: Verify that horizontal scaling via shared remote signer is confirmed behaviour, not just an implied benefit. Source in Remote_signers.md or PRs.)`

---

### 2.4 Frontmatter

```mdx
---
title: 'Gateway Architecture'
description: 'How a Livepeer gateway works — components, request flow for AI and video workloads, orchestrator selection, payment mechanics, and the remote signer architecture for stateless deployments.'
keywords: ["livepeer", "gateway", "architecture", "remote signer", "request flow", "orchestrator", "PM", "probabilistic micropayments", "off-chain", "scaling"]
pageType: 'concept'
audience: 'gateway'
status: 'current'
---
```

---

### 2.5 Quality Gates

Agent verifies all of these before delivering output. Binary yes/no per item.

**Frontmatter:**
- [ ] `title` present, &lt;60 chars
- [ ] `description` present, 1–2 sentences, describes what page provides
- [ ] `keywords` present, 5–10 terms
- [ ] `pageType` is `concept`
- [ ] `audience` is `gateway`
- [ ] `status` is `current`

**Content:**
- [ ] Architecture diagram present (Mermaid) — covers both on-chain and off-chain variants
- [ ] AI inference request flow documented — 5–7 steps, sourced
- [ ] Video transcoding request flow documented — 5–7 steps, sourced
- [ ] Remote signer shown in off-chain diagram and request flow
- [ ] Redeemer role explained — and whether it is required in off-chain mode
- [ ] Orchestrator selection criteria documented — sourced, not guessed
- [ ] Gateway HTTP interface endpoints confirmed — or flagged `[//]: # (REVIEW:)`
- [ ] Payment mechanics overview present — architecture level, not maths
- [ ] Horizontal scaling section explains what remote signer architecture enables
- [ ] Existing `architecture.mdx` content verified — outdated claims not carried forward
- [ ] Does not re-explain remote signer setup — links to `advanced/remote-signers.mdx`
- [ ] Does not re-explain clearinghouse — links to `advanced/payment-clearinghouse.mdx`

**Technical accuracy:**
- [ ] All component names verified against go-livepeer source
- [ ] All request flow steps verified against go-livepeer source
- [ ] No claims carried from old architecture page without verification
- [ ] All unverified claims marked `[//]: # (REVIEW:)` in draft

**Brand and copy:**
- [ ] British English throughout
- [ ] No banned words
- [ ] Canonical terminology used
- [ ] "broadcaster" not used (v1 term)
- [ ] No dead ends — page ends with navigation

**MDX:**
- [ ] No `style={{}}` in MDX content
- [ ] No hardcoded hex colours
- [ ] Custom component imports use absolute paths from `/snippets/`
- [ ] Global components used directly with no import statements
- [ ] All internal link paths have `[//]: # (REVIEW:)` note if not confirmed in docs-v2 IA

---

### 2.6 Output Specification

**⚠️ Deliver as output for review. Do not write to repo. Do not commit. Do not push.**

Two deliverables:

**DELIVERABLE 1 — Research Report** (Part 3 filled in)

**DELIVERABLE 2 — Draft MDX: architecture.mdx**

Pre-flagged unresolved items in draft:
```
<!-- REVIEW: Component set in off-chain mode — verify redeemer presence/absence -->
<!-- REVIEW: AI inference request flow — verify step order and exact mechanism -->
<!-- REVIEW: Video transcoding request flow — verify differences from AI -->
<!-- REVIEW: Gateway HTTP API endpoint paths — verify against go-livepeer source -->
<!-- REVIEW: Orchestrator selection algorithm — verify criteria and priority order -->
<!-- REVIEW: Off-chain PM model — confirm whether PM-free or different mechanism -->
<!-- REVIEW: Horizontal scaling via shared remote signer — confirm in Remote_signers.md or PRs -->
<!-- REVIEW: Existing architecture.mdx content — flag any carried-forward claims that were not re-verified -->
<!-- SME: Rick (@rickstaa) for component architecture confirmation -->
<!-- SME: j0sh for PM mechanics and remote signer design intent -->
<!-- REVIEW: All Related card paths — verify against docs-v2 IA -->
```

---

## Part 3 — Research Report

*Agent fills this in as a standalone deliverable alongside the draft MDX.*

---

### 3.1 Sources Consulted

| # | Source | URL | Date checked | Content found |
|---|--------|-----|--------------|--------------|
| 1 | `Remote_signers.md` (project file) | — | — | |
| 2 | Existing `architecture.mdx` (docs-v2) | | | |
| 3 | go-livepeer PR #3791 | | | |
| 4 | go-livepeer PR #3822 | | | |
| 5 | DeepWiki — livepeer/go-livepeer | | | |
| 6 | Gateway Architecture (Notion) | notion.so/31e660222d0881c693bfec482b18dfcc | | |
| 7 | | | | |
| 8 | | | | |

---

### 3.2 Technical Claims & Sources

| Claim | Value found | Source (Tier + URL) | Verified? |
|-------|-------------|---------------------|-----------|
| Component list — on-chain mode | | | |
| Component list — off-chain mode | | | |
| Redeemer role | | | |
| Redeemer required in off-chain mode? | | | |
| AI inference request flow (steps) | | | |
| Video transcoding request flow (steps) | | | |
| Orchestrator selection algorithm | | | |
| Gateway HTTP API endpoints | | | |
| Capability matching for AI pipelines | | | |
| Remote signer stateless benefit | | | |
| PM mechanics — who holds ETH in on-chain mode | | | |
| PM mechanics — off-chain mode (PM-free or different?) | | | |
| Horizontal scaling enabled by remote signer | | | |
| Existing architecture.mdx — accurate claims | | | |
| Existing architecture.mdx — outdated claims | | | |

---

### 3.3 Existing architecture.mdx — Accuracy Audit

| Claim in existing file | Status | Correct value (if outdated) |
|------------------------|--------|-----------------------------|
| | Accurate / Outdated / Missing | |
| | | |
| | | |

---

### 3.4 Pain Points Found

*(From Discord, Forum, community sources — Tier 3/4 only.)*

| # | Pain point / question | Source | Frequency | Resolution | Placement |
|---|----------------------|--------|-----------|------------|-----------|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |

---

### 3.5 Source Conflicts

| Topic | Source A (value) | Source B (value) | Resolution |
|-------|-----------------|-----------------|------------|
| | | | |

---

### 3.6 Media & Embed Candidates

| # | Title | URL | Type | Accurate? | Recommended position |
|---|-------|-----|------|-----------|---------------------|
| 1 | | | | | |
| 2 | | | | | |

---

### 3.7 Unverified Claims — Flagged for SME Review

| Claim | Why unverified | Suggested verifier |
|-------|---------------|-------------------|
| JWT auth flow in off-chain gateway | Not confirmed from source | Rick / Peter (AI SPE) |
| Horizontal scaling via shared remote signer | Implied but not confirmed | Rick / j0sh |
| | | |

---

## Appendix — Gateway Tab IA Context

*Reference for the agent. Shows where this page sits in the full tab structure.*

### Target IA (post-Phase-0)

```
v2/gateways/
├── gateway-portal.mdx                     [landing]
├── concepts/
│   ├── overview.mdx                       [overview]
│   ├── architecture.mdx                   [concept]  ← THIS PAGE
│   ├── gateway-types.mdx                  [concept]
│   └── payments.mdx                       [concept]
├── get-started/
│   ├── gateway-setup-paths.mdx            [overview]
│   ├── ai-gateway-quickstart.mdx          [tutorial]
│   ├── video-gateway-quickstart.mdx       [tutorial]
│   └── dual-gateway-quickstart.mdx        [tutorial]
├── setup/ ...
├── guides/
│   └── gateway-middleware.mdx             [guide]
├── advanced/
│   ├── remote-signers.mdx                 [guide]    ← prerequisite for depth
│   ├── payment-clearinghouse.mdx          [guide]    ← downstream link
│   ├── monitoring.mdx                     [guide]
│   └── multi-instance.mdx                 [guide]
└── resources/
    ├── faq.mdx
    ├── gateway-flags.mdx
    └── troubleshooting.mdx
```

*Note: Verify against docs-v2 branch before writing. Path names above are from planning documents and may have changed.*

### Upstream and downstream links

| Direction | Page | Relationship |
|-----------|------|-------------|
| Upstream | `concepts/overview.mdx` | Reader arrives from overview |
| Downstream | `advanced/remote-signers.mdx` | Links for depth on remote signer |
| Downstream | `advanced/payment-clearinghouse.mdx` | Links for clearinghouse model |
| Related | `concepts/payments.mdx` | Payment mechanics depth (if exists) |

### Intentional docs.json patterns — never touch

- `"anchor": " "` with `"pages": [" "]` — intentional sidebar visual separators
- `/v2/resources/redirect` — intentional routing workaround
