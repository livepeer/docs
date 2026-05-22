# Content Brief GW-E — Payment Clearinghouse + Gateway Middleware
**Gateways Tab · Livepeer Docs v2**  
**Template version:** 1.0 · March 2026  
**Repo:** `livepeer/docs` · branch `docs-v2`  
**Platform:** Mintlify  
**Engagement:** Wonderland × Livepeer Foundation

---

## Why these are batched

Both pages serve Persona B (Provider — gateway-as-service operator) and Persona E (Platform Builder). Both deal with the product layer built on top of go-livepeer: auth, billing, user management, and request routing. The research pool overlaps significantly: NaaP architecture, JWT auth model, clearinghouse design. Research once, write two pages.

**Dependency:** Brief GW-C (Remote Signers) must be complete before this brief runs. Both pages reference remote signers as a prerequisite concept. Do not re-explain remote signers on either page — link to `advanced/remote-signers.mdx`.

**Deliver four things:**
1. Research report (shared — Part 3)
2. Media candidates (shared — Part 3.4)
3. Draft MDX for `advanced/payment-clearinghouse.mdx` (Page A)
4. Draft MDX for `guides/gateway-middleware.mdx` (Page B)

---

## How to Execute This Brief

Three phases. Strict order. Do not skip ahead.

1. **RESEARCH** — Consult every mandatory source in 2.2. Record every finding in Part 3. Do not write a single line of MDX until all research questions are answered or explicitly flagged as unverifiable.
2. **DRAFT** — Write Page A first, then Page B. Format verified content into the MDX structure specified in 2.3 and 2.4. Mark unverified items with `[//]: # (REVIEW:)` comments.
3. **OUTPUT FOR REVIEW** — Deliver the research report (Part 3) and both draft MDX files together. Nothing is committed or pushed. Human reviews all before anything touches the repo.

**⚠️ No commits. No pushes. No repo writes of any kind.**

---

## Part 1 — Global Context

*Fixed. Applies to every brief in this engagement without modification. Do not deviate.*

---

### 1.1 Repo

```
Repo:     https://github.com/livepeer/docs
Branch:   docs-v2
Platform: Mintlify (docs.livepeer.org/v2)
```

This brief produces output for human review only. No files are written to the repo. No commits. No pushes. Draft MDX files and the full research log are delivered as output and reviewed before insertion.

---

### 1.2 Source Hierarchy

Sources are grouped by type and purpose. **Technical facts** must trace to Tier 1–2. **Pain points and community knowledge** come from Tier 3–4. **Media for embedding** comes from Tier 5. When sources conflict, the higher tier wins for factual claims. Record all conflicts in 3.5.

#### Tier 1 — Ground Truth (all technical claims must trace here)

| Source | Use for |
|--------|---------|
| `github.com/livepeer/go-livepeer` source code | Gateway HTTP API endpoints, flag names, behaviour |
| `github.com/livepeer/go-livepeer` — PR #3791 | GetOrchestratorInfo signing, clearinghouse auth model |
| `github.com/livepeer/go-livepeer` — PR #3822 | Payment signing, bookkeeping state, multi-gateway architecture |
| DeepWiki for `livepeer/go-livepeer` | Gateway HTTP API surface, internal architecture |

#### Tier 1a — Design Documents (read before other sources)

| Source | Use for |
|--------|---------|
| `Remote_signers.md` (project file) | Clearinghouse definition, ETH volatility issue, multi-tenant context, NaaP framing — read this first |
| Livepeer Notion — Weir doc | Extended clearinghouse design, NaaP architecture, JWT auth model, fiat settlement model |

#### Tier 2 — Foundation Sources

| Source | Use for |
|--------|---------|
| `notion.livepeer.org` | Foundation strategy, SPE work, NaaP roadmap |
| `github.com/livepeer/docs` issues and PRs | Known content gaps, SME discussions |
| `roadmap.livepeer.org` | Strategic direction on NaaP, gateway-as-service |
| Livepeer Cloud SPE blog posts | Most likely public source for clearinghouse / NaaP implementation patterns |

#### Tier 3 — Community Knowledge (verify claims against Tier 1)

| Source | Use for |
|--------|---------|
| Discord `#local-gateways` | **Primary channel.** Clearinghouse questions, JWT auth discussion, middleware implementations, NaaP patterns, usage metering, multi-tenant questions — confirmed as the main channel for Provider-persona discussion |
| Discord `#gateway` | Secondary — general gateway operator questions |
| Livepeer Forum (`forum.livepeer.org`) | Provider/clearinghouse threads |
| NaaP dashboard repo (GitHub — verify if public) | Reference implementation of gateway product layer |
| `github.com/j0sh/livepeer-python-gateway` | Python gateway examples — may include middleware patterns |

#### Tier 4 — Third-Party & Community Writeups (pain points and media leads only)

Mine for:
- What Provider-persona operators get stuck on when building a product layer
- Real error messages or failure modes from clearinghouse or middleware implementations
- Community-written auth/middleware patterns

Suggested searches: `livepeer NaaP site:github.com`, `livepeer clearinghouse implementation`, `livepeer gateway auth middleware`, `"livepeer gateway" JWT auth`

#### Tier 5 — Video & Media (embed candidates)

| Source | Use for |
|--------|---------|
| Livepeer YouTube channel | Any gateway-as-service or NaaP demos |
| Livepeer Cloud SPE blog and recordings | Most likely to have NaaP/clearinghouse demos |
| Discord `#local-gateways` shared links | Any shared demo recordings or architecture walkthrough videos |
| ETH Global or hackathon recordings | Livepeer AI platform demos that include gateway product layer |

---

### 1.3 Strategic Context

Livepeer is a **decentralised compute network for video and AI**. Not a SaaS product. The Cascade vision: real-time AI video pipelines. Over 72% of network fees are AI-driven.

**Priority persona order (Foundation strategic alignment):**
1. Application Developer (AI) — P0
2. Gateway Operator — P1
3. Orchestrator / GPU Node Operator — P2
4. Delegator — P3

**Docs purpose:** Take each persona from "I just heard about Livepeer" to "I am confidently doing the thing I came to do" — using only these docs and the tools they link to.

**Success metric per gateway persona:** Not "I read about it" — "I routed my first job / built a product on top of my gateway."

---

### 1.4 Persona Definitions — Gateway Operator (P1)

A gateway operator routes client requests (transcoding or AI inference) to orchestrators on the Livepeer network.

**Gateway types:**

| Gateway type | On-chain required | ETH required | OS support | Best for |
|-------------|------------------|--------------|-----------|---------|
| **Video Gateway** | Yes | Yes (ETH deposit) | Linux, Windows, macOS | Routing transcoding jobs |
| **AI Gateway (off-chain)** | No | No | Linux only | Routing AI inference, fastest onboarding |
| **Dual Gateway** | Yes | Yes | Linux only | Both workloads, advanced |

**Gateway tab sub-personas:**

| Sub-persona | Description | Technical depth | Arrival path |
|-------------|-------------|-----------------|-------------|
| **A — The Graduate** | App developer self-hosting, offboarding from Daydream API | Go, Docker, Linux, some crypto | Daydream API offboarding |
| **B — The Provider** | Gateway-as-a-service operator building NaaP-scale infrastructure | Infrastructure ops, ETH/crypto fluent, multi-tenant systems | Foundation BD, SPE grants |
| **C — The SDK Builder** | Building alternative gateway implementations | Systems programming, protocol-level | go-livepeer GitHub, Discord |
| **D — The Broadcaster-Turned-Operator** | Video infrastructure operator | Video production, some Linux | livepeer.org homepage |
| **E — The Platform Builder** | Enterprise/AI platform, multi-tenant, production ops | Cloud infrastructure, enterprise ops | Foundation BD |

**This brief primarily serves B and E. A is secondary for Page B.**

---

### 1.5 Gateway Operator Journey Stages

| Position | Purpose Type | Reader State | Reader's Question |
|----------|--------------|--------------|-------------------|
| 1 | `landing` | Just arrived | "Where do I go?" |
| 2 | `overview` / `concepts` | Orienting, evaluating | "What is this and should I care?" |
| 3 | `tutorial` / `get-started` | Ready to try | "Get me to first success." |
| 4 | `how-to` / `setup` | Active, needs a specific task | "How do I do this one thing?" |
| **5** | **`guide` / `advanced`** | **Deepening, optimising** | **"How does this work in practice?"** |
| 6 | `reference` / `resources` | On-demand lookup | "What's the exact spec / answer?" |

**Both pages are Position 5 — Advanced / Guides.** The reader has an operational gateway and is building a product layer on top of it. They have context; they do not need basics re-explained.

---

### 1.6 Page Taxonomy

| Type | Job | Target read time | Word range |
|------|-----|-----------------|------------|
| `guide` | Practical understanding of a system | 5–15 min | 500–2000 |

**Fixed layout for `guide`:**
```
SCOPE → CONTENT (prose + structured) → KEY TAKEAWAYS → RELATED
```

Both pages are guides — they explain systems and give operators enough understanding to make decisions and build on top of them. Neither is a step-by-step tutorial. Where implementation steps are shown, they are illustrative examples, not the primary structure.

---

### 1.7 Frontmatter Schema

```mdx
---
title: 'Page Title'                    # <60 chars. Required.
description: 'What this page does'     # 1–2 sentences. PRIMARY AI/SEO field. Required.
sidebarTitle: 'Short Nav Label'        # Optional. Shorter than title.
keywords: ["livepeer", "gateway"]      # 5–10 terms. Required.
pageType: 'guide'                      # Required.
audience: 'gateway'                    # Persona token. Required.
status: 'current'                      # Required.
---
```

**Description rules:** 1–2 sentences. Describes what the page provides to the reader. Not a title repeat. Primary field for AI assistants and search engines.

✅ `description: "How Livepeer gateway clearinghouses work — using an existing clearinghouse as your payment backend, or operating one for multiple gateways with user management and fiat settlement."`  
❌ `description: "Clearinghouse guide for gateway operators."`

---

### 1.8 Brand & Copy Rules

**Voice:** Knowledgeable colleague. Not a marketer, not a professor, not a chatbot.  
**POV:** Second person ("you") for instructions. Third person for system descriptions. Never first-person plural ("we/our") in technical docs.  
**Language:** British English (en-GB). Oxford comma. Day-Month-Year dates.  
**Tone:** Medium and explanatory for guides — the reader is technically capable and building something. Write as if briefing a senior engineer on a system they are about to build on top of.

**Canonical terminology:**

| Use | Not |
|-----|-----|
| gateway | broadcaster (v1 term) |
| clearinghouse | payment intermediary, payment proxy |
| remote signer | signing service, external signer |
| off-chain gateway | off-chain mode, local gateway |
| on-chain gateway | mainnet gateway (unless needed for clarity) |
| go-livepeer | the Livepeer node, the binary |
| probabilistic micropayments (PM) | ticket payments (acceptable shorthand after first use) |
| NaaP (Network as a Platform) | define on first use |

**Banned words:** simply, just, easily, leverage, utilise, seamless, best-in-class, cutting-edge, "in order to", "it should be noted that", "please note that"

**Special rules for these pages:**
- Do not re-explain remote signers — both pages assume the reader has read `advanced/remote-signers.mdx`; link rather than repeat
- The `Remote_signers.md` design doc is the primary source for clearinghouse context; reframe contributor voice to operator voice (not "we want to avoid X" → "the design avoids X by...")
- If no public clearinghouse service or NaaP reference implementation is confirmed, state this explicitly rather than being vague
- Do not invent middleware examples — only include patterns confirmed from community sources or official repos

---

### 1.9 Component Rules

**Mintlify global components (use directly, never import):**  
`Card`, `CardGroup`, `Tabs`, `Tab`, `Steps`, `Step`, `Accordion`, `AccordionGroup`, `Columns`, `Note`, `Warning`, `Tip`, `Danger`, `Badge`, `CodeBlock`, `CodeGroup`, `Frame`, `Icon`, `View`

**Custom components (import from `/snippets/components/`):**  
`GotoCard`, `GotoLink`, `LinkArrow`, `DoubleIconLink`, `TipWithArrow`, `CustomCodeBlock`, `Quote`, `ScrollableDiagram`

**Component usage rules:**

| Content pattern | Use | Not |
|-----------------|-----|-----|
| Optional deep-dive detail | `<Accordion>` | Inline prose |
| High-stakes operational context | `<Warning>` | Bold inline text |
| Supplementary context | `<Note>` | Bold inline text |
| Parameter / flag definitions | Markdown table | Prose paragraphs |
| Navigation | `<CardGroup>` + `<Card>` | Bullet lists of links |
| Architecture / flow | Mermaid diagram | Static image if avoidable |
| Code examples (middleware) | `<CodeBlock language="...">` | Inline code in prose |
| Step-by-step (implementation example) | `<Steps>` | Numbered prose paragraphs |

---

## Part 2 — Page Briefs

---

### 2.1 Page A — Payment Clearinghouses

```
Target file path:     v2/gateways/advanced/payment-clearinghouse.mdx
Page type:            guide
Audience:             gateway
Journey stage:        Position 5 — Advanced
Priority:             P1 · Phase 2
Status:               Exists — outdated; treat as rewrite
Action required:      Rewrite
Gateway type scope:   Video and Dual — clearinghouses apply to on-chain payment flows only;
                      off-chain AI gateways do not use a clearinghouse
```

> ⚠️ **Path note:** The IA tracking entry (`31e660222d08812f9064e73bdc9a96b3`) shows `File: payments/payment-clearinghouse` rather than `advanced/payment-clearinghouse.mdx`. Verify the correct target path against the docs-v2 branch before writing. GW-07 confirms `v2/gateways/advanced/payment-clearinghouse.mdx` — use that unless the repo shows otherwise.

**Page purpose:**  
Explains what a clearinghouse is in the Livepeer context and what a gateway operator needs to know to either (a) use an existing clearinghouse as their payment backend, or (b) operate a clearinghouse for other gateways. This is the underdocumented piece of the Provider journey — the gap between "run a remote signer" and "build a gateway-as-a-service business."

**Persona(s) served:**
- **B — Provider** (primary): NaaP-scale, multi-tenant gateway operator; needs to understand the clearinghouse architecture well enough to configure or build one
- **E — Platform Builder** (primary): enterprise platform needing managed billing and multi-tenant isolation
- **A — Graduate** (secondary): may encounter a clearinghouse on a hosted gateway and needs to understand the concept

**Entry condition:** Reader understands the basic payment flow (gateway pays orchestrators via probabilistic micropayments / PM tickets) and wants to understand or configure a clearinghouse layer.

**Journey entry condition:**  
Reader has read `advanced/remote-signers.mdx` and understands the remote signing protocol. They are ready to think about the product layer: user management, multi-tenant billing, fiat settlement.

**Success conditions:**
- Reader can explain what a clearinghouse does and why it exists
- Reader can evaluate whether they need one (single operator vs NaaP/multi-tenant)
- Reader can configure their gateway to use a clearinghouse if applicable

---

### 2.2 Shared Research Mandate

**Execute all research before writing either page. Record all findings in Part 3. Read `Remote_signers.md` and the Weir doc first.**

#### Research questions — all must be answered before writing

| # | Question | Where to find it |
|---|----------|-----------------|
| 1 | What is a clearinghouse in the Livepeer context? What problem does it solve? | `Remote_signers.md`, Weir doc, Handover doc, Full Analysis Appendix B |
| 2 | What is the NaaP (Network as a Platform) architecture — how does the clearinghouse fit into it? | Full Analysis (`31b660222d0881229cbde1ea3d52d22b`) Appendix B; `Product Direction` page |
| 3 | What is the JWT authentication model for NaaP — how does auth flow between client, gateway, and clearinghouse? | Weir doc (Notion), Discord `#local-gateways`, NaaP `base-svc` |
| 4 | What flags does go-livepeer accept for clearinghouse configuration? | go-livepeer source — gateway/orchestrator flag registration |
| 5 | Is there a reference implementation of a clearinghouse (Livepeer Cloud or in go-livepeer)? | Livepeer Cloud SPE blog, NaaP repo (if public) |
| 6 | What is the relationship between the clearinghouse and the remote signer? | `Remote_signers.md`, PRs #3791/#3822, Handover doc |
| 7 | What is the difference between a single-gateway operator and a multi-tenant NaaP operator in terms of clearinghouse usage? | Weir doc, Discord `#local-gateways`, Full Analysis |
| 8 | Has the clearinghouse model changed since the current page was written? What is the current state? | GW-07 notes "Exists — Outdated — NaaP model and JWT auth absent"; verify current state against go-livepeer PRs |
| 9 | What ETH volatility issues have clearinghouse operators encountered? | `Remote_signers.md`, Discord `#local-gateways` |
| 10 | What existing middleware patterns exist for go-livepeer gateways? | Discord `#local-gateways`, NaaP repo, j0sh Python gateway repo |
| 11 | What are the go-livepeer gateway HTTP API endpoints that middleware would sit in front of? | go-livepeer source — gateway HTTP handler registration |
| 12 | Is there a reference implementation of gateway middleware? | NaaP `pipeline-gateway` (if extractable), Discord, GitHub |
| 13 | What are the most common questions from gateway-as-service operators in Discord? | Discord `#local-gateways` |
| 14 | Are any public clearinghouse services currently available? | Discord, Livepeer Cloud blog, web search — current state is "none confirmed" per Full Analysis |

#### Mandatory sources — check all of these before writing either page

| Source | What to extract |
|--------|----------------|
| `Remote_signers.md` (project file — **read first**) | Clearinghouse definition, ETH volatility reference, remote signer / clearinghouse relationship |
| Handover doc (`2de660222d088065b436d66d435fefe2`) | Clearinghouse role definition, PR status, scope summary |
| Full Analysis Appendix B (`31b660222d0881229cbde1ea3d52d22b`) | Canonical clearinghouse architecture diagram (Gateway → Clearinghouse → Orchestrators), NaaP payment model, Chutes comparison, why clearinghouse is future/not MVP |
| Product Direction page (`31b660222d0881ac9032f5d3df208661`) | NaaP architecture, `base-svc` auth model, `pipeline-gateway` as reusable proxy layer |
| Remote Signers design doc (`2c00a348568781e59112e88e1f59151a` — **verify access**) | Full protocol spec for signing operations |
| `github.com/livepeer/go-livepeer` — gateway HTTP handler code | Clearinghouse flags, HTTP endpoint paths |
| `github.com/livepeer/go-livepeer` — PRs #3791 and #3822 | Remote signer implementation status; clearinghouse integration |
| DeepWiki for `livepeer/go-livepeer` | Payment clearinghouse architecture, gateway HTTP API surface |
| NaaP `base-svc` (if public) | JWT auth model, API key management, multi-tenant isolation |
| NaaP `pipeline-gateway` (if public) | Reference gateway proxy with auth layer |
| `github.com/j0sh/livepeer-python-gateway` | Python gateway — may include middleware or auth examples |
| Discord `#local-gateways` — search "clearinghouse", "JWT", "NaaP", "auth", "multi-tenant", "rate limit", "middleware" | Community implementation patterns, Provider-persona pain points |
| Livepeer Cloud SPE blog posts | NaaP architecture writeups, clearinghouse design posts |

#### Technical claims that MUST be sourced — do not guess

| Claim | Must be found in |
|-------|-----------------|
| Clearinghouse definition (what it does beyond remote signer) | `Remote_signers.md` or Weir doc |
| NaaP architecture description | Weir doc or Livepeer Cloud blog |
| JWT auth flow for gateway user management | Weir doc or Discord — specific, not generic |
| Gateway HTTP API endpoints | go-livepeer source — do not invent |
| Whether public clearinghouse services exist | Discord + web search — verify before claiming or disclaiming |
| Reference middleware implementation (if it exists) | Confirmed repo URL — do not invent examples |

---

### 2.3 Page A — Content Specification

**Required sections (in this order):**

```
FRONTMATTER ............... See 2.6 for exact fields
INTRO ..................... 2–3 sentences, no heading.
                             What a clearinghouse is; who this page is for.
WHAT IS A CLEARINGHOUSE .. Concept explanation — what it does, why it exists.
                             When you need one vs when you don't.
NAAP ARCHITECTURE ........ Mermaid diagram: client → NaaP gateway → clearinghouse → orchestrators.
                             JWT auth flow prose.
SINGLE VS MULTI-TENANT ... <Tabs>: Solo operator | NaaP / hosted gateway operator.
                             Different paths for each.
CONFIGURATION ............ <Steps>: Configure gateway to use a clearinghouse.
                             Exact flags, example values, expected log output.
CLEARINGHOUSE + SIGNERS .. Short section on interaction with remote signers.
                             Link to advanced/remote-signers — do not re-explain.
ETH VOLATILITY RISK ...... <Accordion> — operational context for clearinghouse operators.
KEY TAKEAWAYS ............. 3 bullets.
RELATED ................... <CardGroup> with 2 cards.
```

#### What is a clearinghouse — section detail

Concept explanation. Three questions answered in order:

1. **What problem does it solve?** — Gateway operators must hold ETH and sign PM tickets. In multi-tenant or managed setups this creates key management and operational risk. A clearinghouse separates payment signing from media routing.

2. **What it does** — Three responsibilities (confirmed from design docs):
   - Signs PM tickets on behalf of one or more gateways (remote signer role)
   - Manages user accounts and API key issuance for downstream customers
   - Tracks per-customer usage and handles settlement

3. **When you need one vs when you don't** — Single operator running one gateway: a clearinghouse is optional (remote signer alone may suffice). NaaP / multi-tenant operator serving multiple customers: a clearinghouse is the correct architecture.

`<Note>`: "Off-chain AI gateways do not participate in on-chain PM. Clearinghouses are relevant to Video gateways and Dual gateways only."

#### NaaP architecture — section detail

**Required Mermaid diagram.** Reproduce the architecture confirmed in Full Analysis Appendix B:

```
Developer (pays fiat/API key)
       │
  ┌────▼──────────────────────┐
  │  Gateway API Proxy         │  ← auth + metering
  └────┬──────────────────────┘
       │
  ┌────▼──────────────────────┐
  │  Payment Clearinghouse     │  ← signs PM tickets, manages balances
  │  (remote signer)           │
  └────┬──────────────────────┘
       │ signed PM tickets
  ┌────▼──────────────────────┐
  │  Orchestrators             │  ← receive ETH via PM
  └────────────────────────────┘
```

Translate to Mermaid `graph TB` syntax using go-livepeer actual component names. `[//]: # (REVIEW: Verify component names against go-livepeer source before publishing)`

**JWT auth flow prose** — describe the auth flow between client, NaaP gateway API proxy, and clearinghouse. `[//]: # (REVIEW: Verify JWT auth flow against base-svc implementation. SME: Peter (AI SPE\) / Livepeer Cloud to confirm)`

#### Single vs multi-tenant — `<Tabs>` section detail

`<Tabs>` with two tabs:

**Tab 1 — Solo operator**
- Running one gateway for your own application
- Remote signer alone may be sufficient; clearinghouse adds user management overhead you may not need
- If you need to issue API keys to others or track multi-customer billing, move to the NaaP pattern
- Link to `advanced/remote-signers.mdx`

**Tab 2 — NaaP / hosted gateway operator**
- Running a gateway-as-service for multiple customers
- Clearinghouse is the correct architecture: isolates per-customer billing, issues customer API keys, handles fiat settlement separately from ETH
- Points to configuration section below

#### Configuration — `<Steps>` section detail

`<Steps>` for configuring a gateway to use a clearinghouse. Steps must use **exact flag names verified against go-livepeer source**. Do not invent flag names.

Expected steps (verify all against go-livepeer):
1. Confirm gateway version supports clearinghouse flags
2. Configure the remote signer endpoint (`-signerAddr` or equivalent — verify)
3. Configure clearinghouse endpoint on the gateway (`-clearinghouseAddr` or equivalent — verify)
4. Start gateway and verify clearinghouse connection in logs
5. Test a payment ticket round-trip

`[//]: # (REVIEW: All flag names in this section must be sourced from go-livepeer. Do not guess. SME: Rick (@rickstaa\) for flag name confirmation)`

#### Clearinghouse + signers — section detail

Short section (3–5 sentences). Relationship between remote signer (PRs #3791/#3822) and clearinghouse:
- The remote signer is the signing component; the clearinghouse is the broader service that wraps it
- A clearinghouse operates a remote signer as part of its infrastructure
- Link to `advanced/remote-signers.mdx` — do not re-explain the signing protocol

#### ETH volatility accordion — section detail

`<Accordion title="Managing ETH price volatility as a clearinghouse operator">`

Context: ETH price volatility creates operational risk for clearinghouse operators who hold ETH reserves on-chain while charging customers in fiat. Confirmed as a known issue (`Remote_signers.md`; referenced in context of Daydream reliability).

Operational considerations: ETH reserve management, price oracle integration, rate adjustment mechanisms.

`[//]: # (REVIEW: Extract specific guidance from Weir doc or Livepeer Cloud blog if accessible)`

`</Accordion>`

---

### 2.4 Page B — Gateway Middleware

```
Target file path:     v2/gateways/guides/gateway-middleware.mdx
Page type:            guide
Audience:             gateway
Journey stage:        Position 5 — Guides
Priority:             P2 · Phase 2
Status:               Exists — not in nav; treat as rewrite
Action required:      Expand / Rewrite
Gateway type scope:   Both (middleware patterns apply to video and AI gateway HTTP endpoints)
```

**Page purpose:**  
Practical guide to adding middleware to a go-livepeer gateway — primarily API key auth, rate limiting, usage metering, and request proxying. This is the "how do I build the product layer on top of the gateway" page that Persona B needs.

**Persona(s) served:**
- **B — Provider** (primary): building a gateway-as-service platform; needs to add auth and metering to the gateway HTTP interface
- **A — Graduate** (secondary): self-hosting a gateway and wanting to add a basic API key layer before exposing it to their application

**Journey entry condition:**  
Operator has a running gateway. They are exposing it to application traffic and need to control access, prevent abuse, or meter usage for billing.

**Success condition:**  
Operator understands what middleware options are available, where to find reference implementations, and can make an informed decision about which pattern fits their deployment.

---

### 2.5 Page B — Content Specification

**Required sections (in this order):**

```
FRONTMATTER ............... See 2.7b for exact fields
INTRO ..................... 2–3 sentences, no heading.
                             What middleware is in this context: a layer between
                             application/users and the go-livepeer HTTP interface
                             that adds auth, rate limiting, usage metering, or routing.
                             Who this is for: operators building a product layer.
WHAT MIDDLEWARE CAN DO .... Short list or prose — 5 capabilities.
                             See detail below.
GATEWAY HTTP API .......... Reference block — what endpoints middleware sits in front of.
                             See detail below.
COMMON PATTERNS ........... One section per pattern. See detail below.
REFERENCE IMPLEMENTATIONS . <Accordion> — community examples or explicit "none confirmed."
KEY TAKEAWAYS ............. 3 bullets.
RELATED ................... <CardGroup> with 2 cards.
```

#### What middleware can do — section detail

Five capabilities (prose or short list):
1. **API key authentication** — control which applications or users can send requests to your gateway
2. **Rate limiting** — prevent abuse, enforce per-customer quotas, protect the gateway from overload
3. **Usage metering** — track requests per customer for billing; count tokens, duration, or requests
4. **Request routing** — send different customers to different gateway configurations or orchestrator pools
5. **Response caching** — if applicable for AI workloads where identical requests may return identical responses

#### Gateway HTTP API — section detail

The integration surface that middleware sits in front of. Verify exact endpoint paths and methods against go-livepeer source before writing. Present as a table: endpoint path, method, what it does, whether it is relevant to middleware.

`[//]: # (REVIEW: All gateway HTTP API endpoints must be verified against go-livepeer source. Do not invent or assume endpoint paths. If DeepWiki does not have this information, search the go-livepeer gateway HTTP handler registration code directly.)`

If the gateway API is documented elsewhere (e.g. `resources/gateway-flags.mdx` or an API reference page), link to it rather than reproducing. State where to find the complete reference.

#### Common patterns — section detail

**Pattern 1: API key authentication**

`<Steps>` — illustrative example of the minimal auth proxy. Use a confirmed example from community source (NaaP repo, Discord, j0sh examples). If no confirmed example exists, describe the pattern in prose and mark `[//]: # (REVIEW: community example needed)`

Expected pattern (to verify):
1. Middleware receives request, checks for API key header
2. Validates key against a list or database
3. If valid, forwards request to go-livepeer gateway HTTP endpoint
4. Returns response to caller

If a confirmed Nginx config, simple proxy script, or middleware snippet exists in the community, include it as a `<CodeBlock>`. If not, describe the pattern in prose and flag for SME review.

`[//]: # (REVIEW: Do not invent a working code example. Include only code confirmed from community sources (NaaP repo, Discord, j0sh examples\). If no confirmed example exists, describe in prose and add SME flag.)`

**Pattern 2: Rate limiting**

Prose description of the pattern. How rate limiting sits at the middleware layer vs go-livepeer's own limiting (if any). Where rate limit state lives (in-process, Redis, etc.) and what the trade-offs are.

If a confirmed community example exists, include it. Otherwise describe and flag.

**Pattern 3: Usage metering**

What data is available from the go-livepeer gateway (logs, HTTP API, metrics endpoint — verify which) that enables per-customer usage tracking. How to correlate requests to customers at the middleware layer. What granularity of metering is possible with the available data.

`[//]: # (REVIEW: Verify what usage/metrics data go-livepeer exposes and at what granularity before writing this section.)`

#### Reference implementations accordion — section detail

`<Accordion title="Community middleware implementations">`

List any confirmed reference implementations from NaaP, community repos, or Discord:
- Name, brief description, link to repo

If none are confirmed: "No public reference middleware implementations have been identified at the time of writing. The NaaP architecture (Weir doc) describes the design intent. Check Discord `#local-gateways` for current community examples." Do not be vague — state the absence explicitly.

`[//]: # (REVIEW: Search Discord #local-gateways, NaaP repo, and j0sh repos before finalising this section. Only list implementations that were confirmed during research.)`

`</Accordion>`

---

### 2.6 Frontmatter

**Page A — payment-clearinghouse.mdx:**
```mdx
---
title: 'Payment Clearinghouses'
description: 'How payment clearinghouses work in Livepeer, when to use one, and how to configure your gateway for the NaaP (Network as a Platform) model with JWT authentication.'
sidebarTitle: 'Payment Clearinghouses'
keywords: ["livepeer", "gateway", "clearinghouse", "NaaP", "payment", "JWT", "multi-tenant", "production"]
pageType: 'guide'
audience: 'gateway'
status: 'current'
---
```

**Page B — gateway-middleware.mdx:**
```mdx
---
title: 'Gateway Middleware'
description: 'Add API key authentication, rate limiting, and usage metering to a Livepeer gateway — common middleware patterns for gateway-as-service operators.'
keywords: ["livepeer", "gateway", "middleware", "API key", "auth", "rate limiting", "usage metering", "NaaP", "gateway-as-service"]
pageType: 'guide'
audience: 'gateway'
status: 'current'
---
```

---

### 2.7 Quality Gates

Agent verifies all of these before delivering output. Binary yes/no per item.

**Both pages — Frontmatter:**
- [ ] `title` present, &lt;60 chars
- [ ] `description` present, 1–2 sentences, describes what page provides
- [ ] `keywords` present, 5–10 terms
- [ ] `pageType` is `guide`
- [ ] `audience` is `gateway`
- [ ] `status` is `current`

**Page A — content:**
- [ ] Clearinghouse defined clearly — term not assumed as known
- [ ] Off-chain AI gateway scope explicitly excluded — `<Note>` present
- [ ] Three clearinghouse responsibilities named and explained (signing, user management, settlement)
- [ ] NaaP architecture Mermaid diagram present — not prose-only
- [ ] JWT auth flow documented — or `[//]: # (REVIEW: SME: Peter (AI SPE\))` flag present
- [ ] `<Tabs>` present for Solo vs NaaP/multi-tenant paths
- [ ] `<Steps>` present for configuration — all flag names verified against go-livepeer source, or flagged `[//]: # (REVIEW: SME: Rick)`
- [ ] Clearinghouse + signers section present — links to `advanced/remote-signers.mdx`, does not re-explain protocol
- [ ] Public clearinghouse services section present — or explicitly states none confirmed
- [ ] ETH volatility accordion present with operational context
- [ ] GW-C prerequisite assumed — no remote signer protocol re-explanation

**Page B — content:**
- [ ] Gateway HTTP API endpoints identified — sourced from go-livepeer, not invented
- [ ] At least one concrete middleware pattern present — sourced from community, not invented
- [ ] Any invented examples absent — patterns not confirmed by research are described in prose and flagged `[//]: # (REVIEW:)`
- [ ] Reference implementations accordion present — even if empty with a Discord link and explicit "none confirmed"
- [ ] Usage metering section addresses what data go-livepeer actually exposes — sourced

**Technical accuracy (both pages):**
- [ ] All endpoint paths verified against go-livepeer source
- [ ] All NaaP / clearinghouse claims traced to Weir doc or Livepeer Cloud sources
- [ ] No invented middleware examples — only confirmed community patterns
- [ ] All unverified claims marked `[//]: # (REVIEW:)` in draft

**Brand and copy (both pages):**
- [ ] British English throughout
- [ ] No banned words
- [ ] Canonical terminology used (clearinghouse, not payment intermediary; remote signer, not signing service)
- [ ] Contributor voice removed — no "we", no design rationale framing
- [ ] No dead ends — both pages end with navigation

**MDX (both pages):**
- [ ] No `style={{}}` in MDX content
- [ ] No hardcoded hex colours
- [ ] Custom component imports use absolute paths from `/snippets/`
- [ ] Global components used directly with no import statements
- [ ] All internal links have `[//]: # (REVIEW:)` note if path not confirmed in docs-v2 IA

---

### 2.8 Output Specification

**⚠️ Deliver as output for review. Do not write to repo. Do not commit. Do not push.**

Four deliverables, delivered together:

**DELIVERABLE 1 — Research Report** (Part 3 filled in)

**DELIVERABLE 2 — Media & Embed Candidates** (Part 3.4 filled in)

**DELIVERABLE 3 — Draft MDX: payment-clearinghouse.mdx**

```mdx
---
title: 'Payment Clearinghouses'
[frontmatter as above]
---

[2–3 sentence intro]

## What a clearinghouse does

[Three responsibilities — prose]

## Using an existing clearinghouse

<!-- REVIEW: Verify whether public services exist before writing this section -->
[Confirmed services, or explicit "none confirmed" statement]

## Operating your own clearinghouse

<Note>
Building a full clearinghouse is a significant engineering project. ...
</Note>

[Four components — high-level scope]

<AccordionGroup>
  <Accordion title="Managing ETH price volatility as a clearinghouse operator">
    ...
  </Accordion>
</AccordionGroup>

## Key takeaways

- ...

## Related

<CardGroup>
  <Card title="Remote Signers" href="/v2/gateways/advanced/remote-signers">
    The foundation of the clearinghouse architecture.
  </Card>
  <Card title="Gateway Middleware" href="/v2/gateways/guides/gateway-middleware">
    Add auth and rate limiting to your gateway.
  </Card>
</CardGroup>
```

**DELIVERABLE 4 — Draft MDX: gateway-middleware.mdx**

```mdx
---
title: 'Gateway Middleware'
[frontmatter as above]
---

[2–3 sentence intro]

## What middleware can do

[5 capabilities]

## Gateway HTTP API

<!-- REVIEW: All endpoint paths must be verified against go-livepeer source -->
[Endpoint table or link to reference]

## API key authentication

<!-- REVIEW: Include only confirmed community examples — do not invent -->
[Pattern description + confirmed example or prose-only with REVIEW flag]

## Rate limiting

[Pattern description + confirmed example or prose-only with REVIEW flag]

## Usage metering

<!-- REVIEW: Verify what usage data go-livepeer exposes before writing -->
[Available data + metering approach]

<AccordionGroup>
  <Accordion title="Community middleware implementations">
    <!-- REVIEW: List only confirmed implementations from research -->
    ...
  </Accordion>
</AccordionGroup>

## Key takeaways

- ...

## Related

<CardGroup>
  <Card title="Payment Clearinghouses" href="/v2/gateways/advanced/payment-clearinghouse">
    Manage payments and users for multiple gateways.
  </Card>
  <Card title="Remote Signers" href="/v2/gateways/advanced/remote-signers">
    Separate key custody from your gateway process.
  </Card>
</CardGroup>
```

Unresolved items pre-flagged in both drafts:
```
<!-- REVIEW: Weir doc access — confirm public vs internal-only before linking -->
<!-- REVIEW: Gateway HTTP API endpoint paths — verify against go-livepeer source -->
<!-- REVIEW: Public clearinghouse services — verify existence before claiming or disclaiming -->
<!-- REVIEW: Middleware code examples — include only confirmed community sources -->
<!-- REVIEW: NaaP repo access — verify whether public on GitHub -->
<!-- REVIEW: All Related card paths — verify against docs-v2 IA -->
<!-- SME: Livepeer Cloud (Provider B) to review clearinghouse section -->
<!-- SME: j0sh or Discord #local-gateways contributor to review middleware patterns -->
```

---

## Part 3 — Research Report

*Agent fills this in as a standalone deliverable. Delivered alongside both draft MDX files.*

---

### 3.1 Sources Consulted

| # | Source | URL | Date checked | Content found |
|---|--------|-----|--------------|--------------|
| 1 | Remote_signers.md (project file) | — | — | Clearinghouse definition, ETH volatility |
| 2 | Weir doc (Notion) | | | |
| 3 | go-livepeer PR #3791 | | | |
| 4 | go-livepeer PR #3822 | | | |
| 5 | | | | |
| 6 | | | | |
| 7 | | | | |
| 8 | | | | |
| 9 | | | | |
| 10 | | | | |

---

### 3.2 Technical Claims & Sources

| Claim | Value found | Source (Tier + URL) | Verified? |
|-------|-------------|---------------------|-----------|
| Clearinghouse definition (what it does beyond remote signer) | | | |
| NaaP architecture description | | | |
| JWT auth flow for user management | | | |
| Multi-tenant isolation model | | | |
| Fiat settlement model | | | |
| ETH volatility risk (confirmed operational issue) | | | |
| Gateway HTTP API endpoints (paths + methods) | | | |
| Public clearinghouse services exist? | | | |
| NaaP repo public on GitHub? | | | |
| Confirmed middleware reference implementations? | | | |
| Usage/metrics data exposed by gateway | | | |

---

### 3.3 Pain Points Found

*(From Discord `#local-gateways`, Forum, community sources — Tier 3/4 only.)*

| # | Pain point / question | Source | Frequency | Resolution | Placement |
|---|----------------------|--------|-----------|------------|-----------|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

*Frequency signal: `one-off` / `recurring` / `very common (seen 3+ times in different threads)`*

---

### 3.4 Media & Embed Candidates

| # | Title | URL | Type | Length | Accurate? | Page | Recommended position | Notes |
|---|-------|-----|------|--------|-----------|------|---------------------|-------|
| 1 | | | | | | | | |
| 2 | | | | | | | | |
| 3 | | | | | | | | |

---

### 3.5 Source Conflicts

| Topic | Source A (value) | Source B (value) | Resolution |
|-------|-----------------|-----------------|------------|
| | | | |

---

### 3.6 Unverified Claims — Flagged for SME Review

| Claim | Why unverified | Suggested verifier |
|-------|---------------|-------------------|
| | | |

---

## Appendix — Gateway Tab IA Context

*Reference for the agent. Shows where these pages sit in the full tab structure.*

### Target IA (post-Phase-0)

```
v2/gateways/
├── gateway-portal.mdx                     [landing]
├── concepts/
│   ├── overview.mdx                       [overview]
│   ├── architecture.mdx                   [concept]
│   ├── gateway-types.mdx                  [concept]
│   └── payments.mdx                       [concept]
├── get-started/
│   ├── gateway-setup-paths.mdx            [overview]
│   ├── ai-gateway-quickstart.mdx          [tutorial]
│   ├── video-gateway-quickstart.mdx       [tutorial]
│   └── dual-gateway-quickstart.mdx        [tutorial]
├── setup/
│   ├── requirements/
│   │   ├── off-chain.mdx                  [reference]
│   │   └── on-chain.mdx                   [reference]
│   └── configure/
│       ├── ai-configuration.mdx           [how_to]
│       └── dual-configuration.mdx         [how_to]
├── guides/
│   └── gateway-middleware.mdx             [guide]  ← PAGE B (THIS BRIEF)
├── advanced/
│   ├── remote-signers.mdx                 [guide]  ← GW-C (prerequisite)
│   ├── payment-clearinghouse.mdx          [guide]  ← PAGE A (THIS BRIEF)
│   ├── monitoring.mdx                     [guide]
│   └── multi-instance.mdx                 [guide]
└── resources/
    ├── faq.mdx                            [faq]
    ├── gateway-flags.mdx                  [reference]
    └── troubleshooting.mdx                [troubleshooting]
```

*Note: Verify this IA against the actual docs-v2 branch before writing. Path names above are from planning documents and may have changed.*

### Upstream and downstream links

**Page A (payment-clearinghouse.mdx):**

| Direction | Page | Relationship |
|-----------|------|-------------|
| Upstream (prerequisite) | `advanced/remote-signers.mdx` | GW-C must be complete; remote signers assumed as known |
| Downstream | `guides/gateway-middleware.mdx` | Related card |
| Upstream (arrives from) | `advanced/remote-signers.mdx` | Related section on GW-C links here |

**Page B (gateway-middleware.mdx):**

| Direction | Page | Relationship |
|-----------|------|-------------|
| Upstream (arrives from) | `advanced/payment-clearinghouse.mdx` | Provider building clearinghouse needs auth layer |
| Downstream | `advanced/payment-clearinghouse.mdx` | Related card |
| Downstream | `advanced/remote-signers.mdx` | Related card |

### Content priority and dependencies

| Brief | Prerequisite | Status |
|-------|-------------|--------|
| GW-C (Remote Signers) | None | Must be complete before GW-E runs |
| GW-E Page A (Clearinghouse) | GW-C complete | This brief |
| GW-E Page B (Middleware) | GW-C complete | This brief |

### Intentional docs.json patterns — never touch

- `"anchor": " "` with `"pages": [" "]` — intentional sidebar visual separators
- `/v2/resources/redirect` — intentional routing workaround
