# Content Brief GW-OQ5 — Publish Your Gateway to the Network
**Gateways Tab · Livepeer Docs v2**  
**Template version:** 1.0 · March 2026  
**Repo:** `livepeer/docs` · branch `docs-v2`  
**Platform:** Mintlify  
**Engagement:** Wonderland × Livepeer Foundation

---

## How to Execute This Brief

Three phases. Strict order. Do not skip ahead.

1. **RESEARCH** — Consult every mandatory source in 2.2. Record every finding in Part 3. **The research phase determines the entire shape of this page** — do not write MDX until you know whether a formal publish mechanism exists. This is not optional hedging; it is the central unknown.
2. **DRAFT** — Choose the correct content path (formal workflow or honest stub) based on research findings. Write to the specification for that path.
3. **OUTPUT FOR REVIEW** — Deliver the research report (Part 3) and draft MDX together. Nothing is committed or pushed.

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

---

### 1.2 Source Hierarchy

**Technical facts** must trace to Tier 1–2. **Community patterns** come from Tier 3–4. When sources conflict, the higher tier wins. Record all conflicts in 3.5.

#### Tier 1 — Ground Truth

| Source | Use for |
|--------|---------|
| `github.com/livepeer/go-livepeer` source code | Any gateway registry or publish flags, on-chain gateway presence |
| DeepWiki for `livepeer/go-livepeer` | Gateway discoverability, on-chain registry presence |
| Livepeer Explorer (`explorer.livepeer.org`) | Whether gateways appear, what information is shown, how a gateway registers |

#### Tier 2 — Foundation Sources

| Source | Use for |
|--------|---------|
| `roadmap.livepeer.org` | Planned gateway registry or discoverability features |
| `github.com/livepeer/docs` issues and PRs | Known content gaps around gateway discoverability |
| Livepeer Notion — IA and content planning pages | Whether this page is scoped as a stub or a full how-to |

#### Tier 3 — Community Knowledge (verify against Tier 1)

| Source | Use for |
|--------|---------|
| Discord `#local-gateways` | How providers currently share their endpoint; any community-maintained lists |
| Discord `#gateway` | Same |
| Livepeer Forum | Gateway operator announcements, discoverability discussions |

#### Tier 4 — Third-Party & Community Writeups

| Source | Use for |
|--------|---------|
| Livepeer.Cloud website | How they present their public gateway endpoint — what a Provider does in practice |
| LLM SPE / other SPE gateway documentation | Same |

---

### 1.3 Strategic Context

Livepeer is a **decentralised compute network for video and AI**. Not a SaaS product. Priority persona order: AI App Developer (P0) → Gateway Operator (P1) → Orchestrator (P2) → Delegator (P3).

**Docs purpose:** Take each persona from "I just heard about Livepeer" to "I am confidently doing the thing I came to do."

---

### 1.4 Persona Definitions — Gateway Operator (P1)

| Sub-persona | Description | Technical depth | Arrival path |
|-------------|-------------|-----------------|-------------|
| **A — The Graduate** | App developer self-hosting | Go, Docker, Linux, some crypto | Daydream API offboarding |
| **B — The Provider** | Gateway-as-service, NaaP-scale | Infrastructure ops, ETH/crypto fluent | Foundation BD, SPE grants |
| **C — The SDK Builder** | Building alternative gateway implementations | Systems programming, protocol-level | GitHub, Discord |
| **D — The Broadcaster-Turned-Operator** | Video infrastructure operator | Video production, some Linux | livepeer.org |
| **E — The Platform Builder** | Enterprise, multi-tenant | Cloud infrastructure | Foundation BD |

**This brief serves B (Provider) exclusively.** The Provider's journey culminates in making their gateway accessible to others. This page is the final step in that journey. A Graduate running a private gateway does not need this page.

---

### 1.5 Gateway Operator Journey Stages

| Position | Purpose Type | Reader State | Reader's Question |
|----------|--------------|--------------|-------------------|
| 1 | `landing` | Just arrived | "Where do I go?" |
| 2 | `concept` | Orienting | "What is this?" |
| 3 | `tutorial` | Ready to try | "Get me to first success." |
| **4** | **`how_to`** | **Active, task-focused** | **"How do I do this specific thing?"** |
| 5 | `guide` / `advanced` | Deepening | "How does this work in practice?" |
| 6 | `reference` | On-demand lookup | "What's the exact spec?" |

**This page is Position 4 — Setup.** The reader has a running gateway and wants to make it accessible to external developers. They know what they're doing; they need to know what steps exist.

---

### 1.6 Page Taxonomy

| Type | Job | Target read time | Word range |
|------|-----|-----------------|------------|
| `how_to` | Complete a specific task | 3–8 min | 300–800 |

**Fixed layout for `how_to`:**
```
GOAL → PREREQUISITES → STEPS → RELATED
```

**Exception for stub:** If research confirms no formal publish mechanism exists, the layout becomes:
```
CURRENT STATE (Note) → HOW IT WORKS NOW → PRACTICAL STEPS → COMING SOON (if roadmap item exists) → RELATED
```

---

### 1.7 Frontmatter Schema

```mdx
---
title: 'Page Title'
description: 'What this page does'
sidebarTitle: 'Short Nav Label'
keywords: ["livepeer", "gateway"]
pageType: 'how_to'
audience: 'gateway'
status: 'current'                # or 'stub' — see 2.1
---
```

---

### 1.8 Brand & Copy Rules

**Voice:** Knowledgeable colleague.  
**POV:** Second person ("you") for instructions. Third person for system descriptions.  
**Language:** British English (en-GB). Oxford comma.  
**Tone:** Direct and task-oriented — the Provider knows what they want to do.

**Canonical terminology:**

| Use | Not |
|-----|-----|
| gateway | broadcaster (v1 term) |
| go-livepeer | the Livepeer node |
| gateway endpoint | gateway URL (acceptable second reference) |

**Banned words:** simply, just, easily, leverage, utilise, seamless, best-in-class, cutting-edge, "in order to", "it should be noted that"

**Critical editorial rule for this page:**  
Do not invent a workflow. If no formal publish mechanism exists, document the current state honestly and mark `status: 'stub'`. A Provider reading an invented workflow and following steps that don't work is worse than no page at all.

---

### 1.9 Component Rules

**Mintlify global components (use directly, never import):**  
`Card`, `CardGroup`, `Tabs`, `Tab`, `Steps`, `Step`, `Accordion`, `AccordionGroup`, `Columns`, `Note`, `Warning`, `Tip`, `Danger`, `Badge`, `CodeBlock`, `CodeGroup`, `Frame`, `Icon`, `View`

**Custom components (import from `/snippets/components/`):**  
`GotoCard`, `GotoLink`, `LinkArrow`, `DoubleIconLink`, `TipWithArrow`, `CustomCodeBlock`, `Quote`, `ScrollableDiagram`

**Component usage rules:**

| Content pattern | Use | Not |
|-----------------|-----|-----|
| Current state disclaimer | `<Note>` at top of page | H2 heading |
| Sequential steps | `<Steps>` | Numbered prose |
| Community resource list | Prose with inline links | `<CardGroup>` (too heavy for a list of channels) |
| Roadmap item | `<Note>` with link | `<Warning>` |
| Navigation | `<CardGroup>` + `<Card>` at end | Bullet lists of links |

---

## Part 2 — Page Brief

---

### 2.1 Page Identity

```
Target file path:   v2/gateways/setup/publish/publish-gateway.mdx
Page type:          how_to
Audience:           gateway
Journey stage:      Position 4 — Setup, Stage 4
Priority:           P2 · Phase 2
Status:             Create — does not exist
Action required:    Create
Gateway type scope: Both (on-chain and off-chain gateways may both want discoverability)
```

**Page purpose:** Covers how a gateway operator makes their gateway discoverable and accessible to external applications or developers. Completes the Provider persona journey. If no formal publish mechanism exists, documents the current approach and marks as stub.

**Persona served:** B — The Provider (primary, exclusive).

**Entry condition:** Provider has a running, production-grade gateway and wants to make it accessible to developers or other applications beyond their own use.

**Success condition:** Provider knows the concrete steps to make their gateway endpoint accessible — whether that is via a formal on-chain registry, a community listing, or manual sharing. They do not leave with an empty page or invented steps.

**Critical unknown — determines page shape:**  
It is not confirmed whether a formal "publish to network" workflow exists for gateways. The research phase establishes this. Two content paths are defined in 2.3; the agent selects the correct one based on research findings.

---

### 2.2 Research Mandate

**The research phase determines the page's entire structure. Complete it before writing.**

#### Research questions — all must be answered before writing

| # | Question | Where to find it |
|---|----------|-----------------|
| 1 | Is there an on-chain registry for gateway operators, equivalent to the orchestrator active set? | go-livepeer source, DeepWiki |
| 2 | Does Livepeer Explorer list gateway operators? If so, what information is shown and how does a gateway appear there? | `explorer.livepeer.org` directly, DeepWiki |
| 3 | Is there a gateway equivalent of the orchestrator's `-serviceAddr` flag that registers the gateway on-chain? | go-livepeer source — gateway flag registration |
| 4 | How do application developers currently discover available public gateways? Manual URLs? Community lists? Explorer? Discord? | Discord `#local-gateways`, Forum, Livepeer.Cloud |
| 5 | What do existing public gateway operators (Livepeer.Cloud, LLM SPE) do to make their gateway accessible? | Livepeer.Cloud website, Discord, SPE blog posts |
| 6 | Does a `setup/publish/` folder or page already exist in the docs-v2 branch? If so, what does it contain? | Repo — docs-v2 branch |
| 7 | Are there any planned or in-progress features for gateway discoverability? | `roadmap.livepeer.org`, GitHub issues, Discord |
| 8 | Is there a community-maintained list of public gateways anywhere? (Discord pinned message, Forum thread, Notion page, GitHub wiki?) | Discord `#local-gateways`, Forum, search |

#### Mandatory sources

| Source | What to extract |
|--------|----------------|
| `github.com/livepeer/go-livepeer` — gateway startup/flag code | Any `-serviceAddr` equivalent, on-chain registration flags, publish-related flags |
| DeepWiki for `livepeer/go-livepeer` | Gateway on-chain presence, discovery mechanisms |
| `explorer.livepeer.org` | Check whether gateways appear; if so, document how |
| `roadmap.livepeer.org` | Any gateway registry or discoverability roadmap item |
| Discord `#local-gateways` — search "public gateway", "endpoint", "how to share", "discovery", "list" | Current Provider practices for making gateways accessible |
| Livepeer.Cloud website | How they expose their gateway endpoint — practical reference |
| `github.com/livepeer/docs` — existing issues or PRs | Any discussion of this page's scope |

#### Decision gate — before writing

After research, answer this question:

> **Does a formal on-chain or registry-based gateway publish mechanism exist?**

- **Yes, confirmed** → Use Content Path A (full how-to)
- **No, not confirmed / not yet implemented** → Use Content Path B (honest stub)
- **Unclear / partially implemented** → Use Content Path B with a note about what is partially available; flag for SME review

---

### 2.3 Content Specification

---

#### Content Path A — Formal mechanism confirmed

Use if research confirms a registry, on-chain presence, or Explorer listing mechanism for gateways.

**Required sections:**

```
FRONTMATTER ............... status: 'current'
INTRO ..................... 1–2 sentences. What this page covers.
PREREQUISITES ............. What the operator needs before publishing.
STEPS ..................... <Steps> — walk through the publish workflow.
                             Exact flag names / commands / UI steps.
                             All verified against source.
VERIFY .................... How to confirm the gateway is visible/listed.
RELATED ................... <CardGroup> with 2–3 cards.
```

All flag names and commands must be sourced — not guessed. `[//]: # (REVIEW:)` any unconfirmed step.

---

#### Content Path B — No formal mechanism (expected)

Use if research confirms no formal on-chain or registry-based publish mechanism exists.

**Required sections:**

```
FRONTMATTER ............... status: 'stub'
CURRENT STATE NOTE ........ <Note> — first element on the page.
                             See detail below.
HOW DEVELOPERS FIND GATEWAYS .. Short prose.
                             Whatever research confirms.
MAKING YOUR GATEWAY ACCESSIBLE . <Steps> — practical steps regardless of registry.
                             See detail below.
COMMUNITY RESOURCES ....... Prose — confirmed community channels only.
                             See detail below.
COMING SOON ............... <Note> — only if roadmap item is confirmed.
                             See detail below.
RELATED ................... <CardGroup> with 2–3 cards.
```

#### Current state `<Note>` — detail

```mdx
<Note>
There is currently no on-chain registry for Livepeer gateway operators. This page
documents how gateway operators currently make their endpoints accessible to developers,
and will be updated when a formal discoverability mechanism ships.
</Note>
```

Adjust wording if research reveals a partial mechanism (e.g. Explorer lists gateways but no registration step exists). Do not soften or omit this note — the Provider needs to know the current state immediately.

#### Making your gateway accessible — `<Steps>` detail

Practical steps that apply regardless of whether a registry exists. These are engineering steps, not Livepeer-specific ceremony:

1. **Confirm a stable public endpoint** — your gateway must be reachable at a stable URL or IP. Document the port (verify default from go-livepeer source). Note: the endpoint must be accessible from the internet, not just your local network.
2. **Verify port availability** — confirm the gateway HTTP port is open and accessible externally. (Include the command to test this — verify exact port number against go-livepeer source.)
3. **Document your endpoint for developers** — what developers need to know: endpoint URL, any auth requirements, supported pipelines or capabilities.
4. **Share via community channels** — see Community Resources section below.

`[//]: # (REVIEW: Verify default gateway HTTP port against go-livepeer source. Do not guess the port number.)`

#### Community resources — prose detail

List only confirmed community channels. Do not invent resources that have not been verified in research.

Expected resources to verify:
- Discord `#local-gateways` — confirm whether this is an appropriate channel for announcing public gateways
- Livepeer Forum — confirm whether a thread or category exists for gateway operator announcements
- Any community-maintained gateway list — confirm existence before listing; do not invent

If none are confirmed beyond Discord, say so plainly: "Currently, Discord `#local-gateways` is the primary channel for gateway operators to share their endpoint with developers."

`[//]: # (REVIEW: Verify community channels against Discord research. Do not list channels that don't exist or aren't used for this purpose.)`

#### Coming soon `<Note>` — detail

Include only if `roadmap.livepeer.org` has a confirmed relevant item (gateway registry, Explorer listing for gateways, or discoverability feature).

```mdx
<Note>
Gateway discoverability is on the Livepeer roadmap. See [roadmap.livepeer.org](https://roadmap.livepeer.org)
for current status.
</Note>
```

If no roadmap item is confirmed, omit this section entirely. Do not add speculative "coming soon" content.

`[//]: # (REVIEW: Check roadmap.livepeer.org before including this section.)`

---

### 2.4 Frontmatter

**Path A (formal mechanism confirmed):**
```mdx
---
title: 'Publish Your Gateway'
description: 'Register your Livepeer gateway on the network and make it discoverable to external applications and developers.'
sidebarTitle: 'Publish Gateway'
keywords: ["livepeer", "gateway", "publish", "discoverability", "public gateway", "gateway endpoint", "gateway-as-service"]
pageType: 'how_to'
audience: 'gateway'
status: 'current'
---
```

**Path B (stub):**
```mdx
---
title: 'Publish Your Gateway'
description: 'Make your Livepeer gateway accessible to external applications and developers — current discoverability options and how to share your gateway endpoint.'
sidebarTitle: 'Publish Gateway'
keywords: ["livepeer", "gateway", "publish", "discoverability", "public gateway", "gateway endpoint", "gateway-as-service"]
pageType: 'how_to'
audience: 'gateway'
status: 'stub'
---
```

---

### 2.5 Quality Gates

Agent verifies all of these before delivering output. Binary yes/no per item.

**Research gate (must pass before writing begins):**
- [ ] Research confirms whether a formal publish mechanism exists
- [ ] Decision gate answered — Path A or Path B selected
- [ ] Default gateway HTTP port verified against go-livepeer source (or flagged `[//]: # (REVIEW:)`)
- [ ] Community channels verified against Discord research

**Frontmatter:**
- [ ] `status` is `current` (Path A) or `stub` (Path B) — correct for research findings
- [ ] `title` present, &lt;60 chars
- [ ] `description` present, 1–2 sentences
- [ ] `keywords` present, 5–10 terms
- [ ] `pageType` is `how_to`
- [ ] `audience` is `gateway`

**Content:**
- [ ] No workflow invented — only documented what research confirms
- [ ] If Path B: `<Note>` stating current state is the first substantive element
- [ ] If Path B: community resources listed only if confirmed in research
- [ ] If Path B: "Coming soon" section present only if roadmap item confirmed
- [ ] `<Steps>` present with practical steps — even stub has actionable content
- [ ] Default port number sourced — not guessed
- [ ] Provider persona journey completed — page does not end with a dead end

**Technical accuracy:**
- [ ] All flag names or commands verified against go-livepeer source
- [ ] All community channels confirmed as existing and relevant
- [ ] All unverified claims marked `[//]: # (REVIEW:)`

**Brand and copy:**
- [ ] British English throughout
- [ ] No banned words
- [ ] No invented workflow
- [ ] Page ends with navigation

**MDX:**
- [ ] No `style={{}}` in MDX content
- [ ] No hardcoded hex colours
- [ ] Global components used directly with no import statements
- [ ] All internal link paths have `[//]: # (REVIEW:)` note if not confirmed in docs-v2 IA

---

### 2.6 Output Specification

**⚠️ Deliver as output for review. Do not write to repo. Do not commit. Do not push.**

Two deliverables:

**DELIVERABLE 1 — Research Report** (Part 3 filled in, including the decision gate answer)

**DELIVERABLE 2 — Draft MDX: publish-gateway.mdx**

Pre-flagged unresolved items:
```
<!-- REVIEW: Gateway HTTP port — verify default against go-livepeer source -->
<!-- REVIEW: On-chain registry for gateways — confirm presence/absence in go-livepeer -->
<!-- REVIEW: Explorer gateway listing — confirm whether gateways appear and how -->
<!-- REVIEW: Community channels — confirm Discord #local-gateways is appropriate for this purpose -->
<!-- REVIEW: Roadmap item — confirm before including "Coming soon" section -->
<!-- REVIEW: Livepeer.Cloud endpoint documentation — what format do they use? -->
<!-- REVIEW: All Related card paths — verify against docs-v2 IA -->
<!-- SME: Rick (@rickstaa) — on-chain gateway presence, any planned registry -->
```

---

## Part 3 — Research Report

*Agent fills this in as a standalone deliverable.*

---

### 3.1 Decision Gate

> **Does a formal on-chain or registry-based gateway publish mechanism exist?**

| Finding | Value | Source |
|---------|-------|--------|
| On-chain gateway registry exists? | Yes / No / Partial | |
| Explorer lists gateways? | Yes / No / Partial | |
| Gateway equivalent of `-serviceAddr`? | Yes / No | |
| Content path selected | Path A / Path B | |

---

### 3.2 Sources Consulted

| # | Source | URL | Date checked | Content found |
|---|--------|-----|--------------|--------------|
| 1 | go-livepeer source — gateway flags | | | |
| 2 | DeepWiki — livepeer/go-livepeer | | | |
| 3 | explorer.livepeer.org | | | |
| 4 | roadmap.livepeer.org | | | |
| 5 | Discord `#local-gateways` | | | |
| 6 | Livepeer.Cloud website | | | |
| 7 | | | | |

---

### 3.3 Technical Claims & Sources

| Claim | Value found | Source (Tier + URL) | Verified? |
|-------|-------------|---------------------|-----------|
| Default gateway HTTP port | | | |
| On-chain gateway registry | | | |
| Explorer gateway listing mechanism | | | |
| Public gateway discovery method (current) | | | |
| Community channel for gateway announcements | | | |
| Roadmap item for gateway discoverability | | | |
| How Livepeer.Cloud exposes their endpoint | | | |

---

### 3.4 Pain Points Found

*(From Discord, Forum — Tier 3/4 only.)*

| # | Pain point / question | Source | Frequency | Resolution | Placement |
|---|----------------------|--------|-----------|------------|-----------|
| 1 | | | | | |
| 2 | | | | | |

---

### 3.5 Source Conflicts

| Topic | Source A (value) | Source B (value) | Resolution |
|-------|-----------------|-----------------|------------|
| | | | |

---

### 3.6 Unverified Claims — Flagged for SME Review

| Claim | Why unverified | Suggested verifier |
|-------|---------------|-------------------|
| Whether on-chain gateway registry is planned | Not confirmed from roadmap | Rick (@rickstaa) |
| | | |

---

## Appendix — Gateway Tab IA Context

*Reference for the agent.*

### Target IA (post-Phase-0)

```
v2/gateways/
├── gateway-portal.mdx
├── concepts/
├── get-started/
├── setup/
│   ├── requirements/
│   │   ├── off-chain.mdx
│   │   └── on-chain.mdx
│   ├── configure/
│   └── publish/
│       └── publish-gateway.mdx     ← THIS PAGE
├── guides/
├── advanced/
└── resources/
```

*Verify `setup/publish/` folder exists in docs-v2 before writing. May need to be created.*

### Upstream and downstream links

| Direction | Page | Relationship |
|-----------|------|-------------|
| Upstream | `setup/configure/` (last setup step) | Reader arrives after configuring their gateway |
| Downstream | `guides/gateway-middleware.mdx` | If they need auth before publishing |
| Downstream | `advanced/payment-clearinghouse.mdx` | If they're building a Provider service |

### Intentional docs.json patterns — never touch

- `"anchor": " "` with `"pages": [" "]` — intentional sidebar visual separators
- `/v2/resources/redirect` — intentional routing workaround
