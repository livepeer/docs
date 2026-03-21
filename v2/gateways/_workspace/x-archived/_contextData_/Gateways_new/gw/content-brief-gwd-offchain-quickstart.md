# Content Brief GW-D — Off-Chain Requirements + AI Gateway Quickstart
**Gateways Tab · Livepeer Docs v2**  
**Template version:** 1.0 · March 2026  
**Repo:** `livepeer/docs` · branch `docs-v2`  
**Platform:** Mintlify  
**Engagement:** Wonderland × Livepeer Foundation

---

## Why these are batched

Both pages serve the same persona (Graduate / off-chain AI gateway operator), draw from the same research pool (off-chain mode flags, infrastructure requirements, orchestrator discovery), and are sequentially linked — the requirements page feeds directly into the quickstart. Research once, write two pages.

**Deliver four things:**
1. Research report (shared — Part 3)
2. Media candidates (shared — Part 3.4)
3. Draft MDX for `setup/requirements/off-chain.mdx` (Page A)
4. Draft MDX for `get-started/ai-gateway-quickstart.mdx` (Page B)

---

## How to Execute This Brief

Three phases. Strict order. Do not skip ahead.

1. **RESEARCH** — Consult every mandatory source in 2.2. Record every finding in Part 3. Do not write a single line of MDX until all research questions are answered or explicitly flagged as unverifiable.
2. **DRAFT** — Write Page A first, then Page B. Format verified content into the MDX structure specified in 2.3 and 2.4. Mark unverified items with `[//]: # (REVIEW:)` comments.
3. **OUTPUT FOR REVIEW** — Deliver the research report (Part 3) and both draft MDX files together. Nothing is committed or pushed. Human reviews all three before anything touches the repo.

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
| `github.com/livepeer/go-livepeer` source code | Flag names, defaults, behaviour, config format — absolute ground truth |
| `github.com/livepeer/go-livepeer` — PR #3791 | GetOrchestratorInfo remote signing, off-chain flag names |
| `github.com/livepeer/go-livepeer` — PR #3822 | Payment signing, off-chain mode flags, startup sequence |
| `github.com/livepeer/go-livepeer/releases` | Which release version shipped off-chain AI gateway support |
| DeepWiki for `livepeer/go-livepeer` | Gateway flags, off-chain mode behaviour, orchestrator connection |

#### Tier 1a — Design Document (read before other sources for off-chain mode context)

| Source | Use for |
|--------|---------|
| `Remote_signers.md` (project file) | Off-chain flag context, startup sequence reference, what the gateway does vs what the signer does |

#### Tier 2 — Foundation Sources

| Source | Use for |
|--------|---------|
| `notion.livepeer.org` | Foundation strategy, SPE work, any published AI gateway setup guidance |
| `github.com/livepeer/docs` issues and PRs | Known content gaps, SME discussions, pending work |
| `roadmap.livepeer.org` | Strategic direction on gateway expansion |

#### Tier 3 — Community Knowledge (use for pain points and operator patterns — verify claims against Tier 1)

| Source | Use for |
|--------|---------|
| Discord `#local-gateways` | **Primary channel.** Orchestrator discovery for off-chain gateways, first-run errors, community quickstart attempts, j0sh example repos, NaaP patterns |
| Discord `#gateway` | Secondary — general gateway operator questions |
| Livepeer Forum (`forum.livepeer.org`) | Longer-form operator questions, community-verified answers |
| `github.com/j0sh/livepeer-python-gateway` (or equivalent) | Python gateway examples — shows how off-chain orchestrator discovery works in practice |
| Existing `docs.livepeer.org` gateway pages | Port with caution — verify everything against Tier 1 before using |

#### Tier 4 — Third-Party & Community Writeups (use for pain points and media leads — not for technical claims)

Mine for:
- What new off-chain gateway operators got stuck on and where
- Real first-run error messages from failed startups
- Community-written quickstart attempts that filled documentation gaps

Suggested searches: `livepeer "off-chain gateway" site:medium.com OR site:mirror.xyz`, `"livepeer ai gateway" quickstart`, `livepeer gateway setup guide 2024`

#### Tier 5 — Video & Media (use for embed candidates)

| Source | Use for |
|--------|---------|
| Livepeer YouTube channel (`youtube.com/@Livepeer`) | Official gateway setup demos |
| Livepeer Cloud SPE content | AI gateway demos that may include quickstart walkthroughs |
| Discord `#local-gateways` shared links | Demo recordings or screencasts shared during community discussions |
| ETH Global demo recordings | Livepeer AI gateway demos |

---

### 1.3 Strategic Context

Livepeer is a **decentralised compute network for video and AI**. Not a SaaS product. The Cascade vision: real-time AI video pipelines. Over 72% of network fees are AI-driven.

**Priority persona order (Foundation strategic alignment):**
1. Application Developer (AI) — P0
2. Gateway Operator — P1
3. Orchestrator / GPU Node Operator — P2
4. Delegator — P3

**Docs purpose:** Take each persona from "I just heard about Livepeer" to "I am confidently doing the thing I came to do" — using only these docs and the tools they link to.

**Success metric per gateway persona:** Not "I read about it" — "I routed my first job through my gateway."

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
| **A — The Graduate** | App developer self-hosting for cost/control, offboarding from Daydream API | Go, Docker, Linux, some crypto | Daydream API offboarding, livepeer.cloud blog |
| **B — The Provider** | Gateway-as-a-service operator building NaaP-scale infrastructure | Infrastructure ops, ETH/crypto fluent, multi-tenant | Foundation BD, SPE grants |
| **C — The SDK Builder** | Building alternative gateway implementations in Python, browser, mobile | Systems programming, protocol-level | go-livepeer GitHub, Discord `#local-gateways` |
| **D — The Broadcaster-Turned-Operator** | Video infrastructure operator replacing cloud transcoding | Video production, some Linux | livepeer.org homepage |
| **E — The Platform Builder** | Enterprise/AI platform, multi-tenant, production ops | Cloud infrastructure, enterprise ops | Foundation BD |

**This brief primarily serves A and C. E is secondary.**

**Activation moment (all personas):** First job successfully routed through their gateway — visible in logs or Explorer.

---

### 1.5 Gateway Operator Journey Stages

| Position | Purpose Type | Reader State | Reader's Question |
|----------|--------------|--------------|-------------------|
| 1 | `landing` | Just arrived | "Where do I go?" |
| 2 | `overview` / `concepts` | Orienting, evaluating | "What is this and should I care?" |
| **3** | **`tutorial` / `get-started`** | **Ready to try** | **"Get me to first success."** |
| **4** | **`how-to` / `setup`** | **Active, needs a specific task** | **"How do I do this one thing?"** |
| 5 | `guide` / `advanced` | Deepening, optimising | "How does this work in practice?" |
| 6 | `reference` / `resources` | On-demand lookup | "What's the exact spec / answer?" |

**Page A is Position 4 — a setup reference.** The reader has chosen their path and needs to know exactly what to have ready.  
**Page B is Position 3 — the get-started tutorial.** The reader has everything they need and wants the shortest path to a working gateway.

---

### 1.6 Page Taxonomy

| Type | Job | Target read time | Word range |
|------|-----|-----------------|------------|
| `reference` | Lookup facts | &lt;1 min/lookup | Varies |
| `tutorial` | Activate (zero to success) | 10–30 min | 500–1500 |

**Fixed layout for `reference`:**
```
SCOPE → STRUCTURED DATA (tables/lists) → RELATED HOW-TO
```

**Fixed layout for `tutorial`:**
```
GOAL STATEMENT → PREREQUISITES → STEPS → VERIFICATION → NEXT STEPS
```

---

### 1.7 Frontmatter Schema

```mdx
---
title: 'Page Title'                    # <60 chars. Required.
description: 'What this page does'     # 1–2 sentences. PRIMARY AI/SEO field. Required.
sidebarTitle: 'Short Nav Label'        # Optional. Shorter than title.
keywords: ["livepeer", "gateway"]      # 5–10 terms. Required.
pageType: 'reference'                  # or 'tutorial' — one of 10 valid types. Required.
audience: 'gateway'                    # Persona token. Required.
status: 'current'                      # current | draft | review | deprecated. Required.
---
```

**Description rules:** 1–2 sentences. Describes what the page provides to the reader. Not a repeat of the title. Primary field for AI assistants and search engines.

✅ `description: "What you need to run a Livepeer AI gateway in off-chain mode — no Ethereum account, no Arbitrum, no token holdings required."`  
❌ `description: "Requirements page for off-chain gateway operators."`

---

### 1.8 Brand & Copy Rules

**Voice:** Knowledgeable colleague. Not a marketer, not a professor, not a chatbot.  
**POV:** Second person ("you") for instructions. Third person for system descriptions. Never first-person plural ("we/our") in technical docs.  
**Language:** British English (en-GB). Oxford comma. Day-Month-Year dates.  
**Tone:** Reference pages: lookup-optimised, scannable, structured data over prose. Tutorial pages: tight and action-focused, show every command, show expected output.

**Canonical terminology:**

| Use | Not |
|-----|-----|
| gateway | broadcaster (v1 term) |
| off-chain gateway | off-chain mode, local gateway, dev gateway |
| on-chain gateway | mainnet gateway (unless needed for clarity) |
| go-livepeer | the Livepeer node, the binary |
| pipeline (for AI) | model, endpoint |
| orchestrator | node, transcoder |
| remote signer | signing service, external signer |

**Banned words:** simply, just, easily, leverage, utilise, seamless, best-in-class, cutting-edge, "in order to", "it should be noted that", "please note that"

**Critical rule for these pages:** The off-chain path requires no ETH, no Arbitrum, and no crypto holdings. This must be stated explicitly and early. Operators arrive from Daydream or hosted APIs expecting a complicated crypto onboarding. Disconfirm that assumption immediately.

**Do:**
- State what the operator does NOT need before what they do need — for off-chain pages, this is the key differentiator
- Use exact version numbers and flag names — never "latest" or "the flag for off-chain mode"
- Show every command with its expected output
- End the quickstart at "it's working" — advanced config, pricing, and monitoring live elsewhere

**Don't:**
- Imply ETH is required for the off-chain AI gateway path
- Cover advanced configuration on the quickstart page — link out
- Reproduce `Remote_signers.md` content — link to `advanced/remote-signers` instead

---

### 1.9 Component Rules

**Mintlify global components (use directly, never import):**  
`Card`, `CardGroup`, `Tabs`, `Tab`, `Steps`, `Step`, `Accordion`, `AccordionGroup`, `Columns`, `Note`, `Warning`, `Tip`, `Danger`, `Badge`, `CodeBlock`, `CodeGroup`, `Frame`, `Icon`, `View`

**Custom components (import from `/snippets/components/`):**  
`GotoCard`, `GotoLink`, `LinkArrow`, `DoubleIconLink`, `TipWithArrow`, `CustomCodeBlock`, `Quote`, `ScrollableDiagram`

**Component usage rules:**

| Content pattern | Use | Not |
|-----------------|-----|-----|
| Sequential instructions | `<Steps>` | Bullet lists |
| OS / environment variants (Docker vs binary) | `<Tabs>` (on-vs-off-chain) or `<View>` (OS variant) | Separate pages |
| Optional deep-dive detail | `<Accordion>` | Inline prose |
| Critical context ("no ETH needed") | `<Note>` | Bold text in paragraphs |
| First-run errors | `<Warning>` inline or `<AccordionGroup>` troubleshooting block | Prose paragraphs |
| Requirements / parameter data | Markdown table or checklist | Prose paragraphs |
| Navigation | `<CardGroup>` + `<Card>` | Bullet lists of links |

**Style rules:**
- CSS Custom Properties only for colours
- Never hardcode hex values
- No `style={{}}` in MDX content files
- Absolute imports from `/snippets/`
- Global components need no import statement

---

## Part 2 — Page Briefs

---

### 2.1 Page A — Off-Chain Gateway Requirements

```
Target file path:     v2/gateways/setup/requirements/off-chain.mdx
Page type:            reference
Audience:             gateway
Journey stage:        Position 4 — Setup, Stage 1: Requirements
Priority:             P2 · Phase 2
Status:               Missing — does not exist
Action required:      Create
Gateway type scope:   AI only (off-chain)
```

**Page purpose:**  
A standalone requirements checklist for operators running an off-chain AI gateway. The existing requirements page covers on-chain setup and implies ETH is always needed. This page makes explicit that the off-chain path requires none of that.

**Persona(s) served:**
- **A — Graduate** (primary): arriving from Daydream or hosted API, expects crypto onboarding, needs to be disconfirmed quickly
- **C — SDK Builder** (secondary): checking prerequisites before implementing an alternative gateway client

**Journey entry condition:**  
Operator has chosen the off-chain AI gateway path from `gateway-setup-paths.mdx`.

**Activation / success condition:**  
Operator knows exactly what they need before running a single install command. No surprises mid-setup. Can proceed to the quickstart with confidence.

---

### 2.2 Page A — Research Mandate

**Execute all research before writing. Record all findings in Part 3.**

#### Research questions specific to Page A

| # | Question | Where to find it |
|---|----------|-----------------|
| 1 | What OS versions are supported for the off-chain AI gateway binary? Linux only — which distros and versions? | go-livepeer README or release notes |
| 2 | What are the minimum hardware requirements for the gateway node itself? RAM, CPU. No GPU — confirm. | go-livepeer README, DeepWiki |
| 3 | What is the minimum go-livepeer version for off-chain AI gateway mode? | Releases page — PRs #3791/#3822 merge date |
| 4 | What inbound port does the AI gateway HTTP endpoint use by default? What flag configures it? | go-livepeer source — flag registration |
| 5 | What outbound connectivity does the gateway need? (Orchestrator addresses, any Livepeer-specific endpoints?) | go-livepeer source, Discord `#local-gateways` |
| 6 | Is Docker required, or is the binary sufficient? Is Docker the recommended deployment method? | go-livepeer README, community preference |
| 7 | How does an off-chain gateway find orchestrators without the on-chain registry? What are the current options? | Discord `#local-gateways`, go-livepeer source, j0sh examples |
| 8 | Are there community-maintained orchestrator lists for off-chain gateways? | Discord `#local-gateways`, Forum |

#### Mandatory sources — check all of these before writing

| Source | What to extract |
|--------|----------------|
| `github.com/livepeer/go-livepeer` — README | OS support, hardware requirements, install prerequisites |
| `github.com/livepeer/go-livepeer/releases` | Minimum version, OS-specific binary availability |
| `github.com/livepeer/go-livepeer` — gateway flag registration code | Default port, `-orchAddr` flag format, off-chain mode flag |
| DeepWiki for `livepeer/go-livepeer` | Gateway infrastructure requirements, off-chain mode overview |
| Discord `#local-gateways` — search "off-chain", "orchAddr", "orchestrator list", "discovery" | Community workarounds for orchestrator discovery |
| `github.com/j0sh/livepeer-python-gateway` | How Python gateway handles orchestrator discovery — mine for requirements signal |

#### Technical claims that MUST be sourced — do not guess

| Claim | Must be found in |
|-------|-----------------|
| Supported OS and versions for AI gateway binary | go-livepeer README or releases |
| Minimum hardware (RAM, CPU) | go-livepeer README or DeepWiki |
| No GPU required (confirm) | go-livepeer README or source |
| Default HTTP endpoint port | go-livepeer source — flag default value |
| Minimum go-livepeer version | Releases page |
| Orchestrator discovery options for off-chain mode | go-livepeer source + Discord |

---

### 2.3 Page A — Content Specification

**Required sections (in this order):**

```
FRONTMATTER ............... See 2.7a for exact fields
INTRO ..................... 2 sentences, no heading.
                             "The off-chain AI gateway path requires no Ethereum
                              account, no Arbitrum setup, and no token holdings.
                              This page lists what you need before starting the
                              AI gateway quickstart."
WHAT YOU DO NOT NEED ...... <Note> block — first substantive element after intro.
                             Explicit: no ETH wallet, no Arbitrum RPC, no LPT,
                             no private key on the gateway node.
REQUIREMENTS .............. Checklist. Four groups: Infrastructure, Software,
                             Network, Optional. See detail below.
ORCHESTRATOR DISCOVERY .... <Accordion> — see detail below.
NEXT STEP ................. Single <Card> → ai-gateway-quickstart.mdx
```

#### Requirements checklist — group detail

Present as a markdown checklist or structured list within each group. Every item must include exact version numbers or specific values — no "latest" or "recent".

**Infrastructure:**
- Operating system: Linux [verify exact distros and versions supported] — macOS for development only, Windows not supported
- RAM: minimum [verify exact figure — no GPU so requirements are lower than orchestrator]
- CPU: minimum [verify]
- No GPU required — the gateway does not process media

**Software:**
- go-livepeer binary version ≥ [verified minimum] OR Docker with go-livepeer image (link to install page)
- Docker: not required but supported; GPU runtime NOT required
- No Ethereum node, no Arbitrum RPC endpoint required

**Network:**
- Outbound internet access to orchestrator addresses (TCP — [verify port])
- Inbound: [default port] open if accepting external application traffic (not required for local testing)
- No static IP or public IP required for internal use

**Optional:**
- Remote signer process — required only if separating key custody from the gateway host (link to `advanced/remote-signers`)
- Orchestrator address list — required to route jobs (see Orchestrator Discovery accordion below)

#### Orchestrator discovery accordion

`<Accordion title="How to find orchestrators for an off-chain gateway">`

The off-chain gateway cannot query the Livepeer on-chain registry without Ethereum. Use one of these approaches to get orchestrator addresses:

1. **Manual list via `-orchAddr` flag** — specify one or more orchestrator addresses at startup (exact flag format — verified)
2. **Livepeer Explorer** — find active orchestrators at `explorer.livepeer.org`; filter for AI capability; copy the service URI
3. **Community orchestrator lists** — search Discord `#local-gateways` for pinned or shared lists of AI-capable orchestrators; note any maintained community lists found during research

`[//]: # (REVIEW: Verify whether any maintained community orchestrator list exists — search Discord and Forum before writing)`

`</Accordion>`

---

### 2.4 Page B — AI Gateway Quickstart

```
Target file path:     v2/gateways/get-started/ai-gateway-quickstart.mdx
Page type:            tutorial
Audience:             gateway
Journey stage:        Position 3 — Get Started, Stage 2: Install and Run
Priority:             P2 · Phase 2
Status:               Missing — does not exist in the operator tab
Action required:      Create
Gateway type scope:   AI only (off-chain)
```

**Page purpose:**  
Gets an operator from zero to a running off-chain AI gateway in the shortest path. The primary use case is someone who was using Daydream or a hosted AI API and wants to self-host. Ends at "it's working" — not at "it's configured and production-ready."

**Persona(s) served:**
- **A — Graduate** (primary): offboarding from Daydream or hosted API, wants to self-host with minimal friction
- **C — SDK Builder** (secondary): verifying end-to-end connectivity before building a custom gateway
- **E — Platform Builder** (secondary): evaluating the off-chain path before committing to a production deployment

**Journey entry condition:**  
Requirements met (`setup/requirements/off-chain.mdx`). go-livepeer installed.

**Activation / success condition:**  
AI gateway is running in off-chain mode, accepting requests, and routing to at least one orchestrator. Confirmed via a test AI inference request returning a valid response.

**Scope boundary:**  
Minimal path only. Binary or Docker, essential flags, one orchestrator address, one test request. Advanced configuration (multiple orchestrators, pricing, middleware, monitoring) belongs in Setup and Advanced sections. This page ends at "it's working."

---

### 2.5 Page B — Research Mandate

#### Research questions specific to Page B

| # | Question | Where to find it |
|---|----------|-----------------|
| 1 | What are the exact flags required for a minimal off-chain AI gateway startup? Which flag disables on-chain PM / enables off-chain mode? | go-livepeer source — flag registration for gateway; PRs #3791/#3822 |
| 2 | What is the minimal complete startup command for off-chain AI gateway mode? (Flags only — no optional config.) | go-livepeer source or README |
| 3 | What does the startup log show when the gateway is ready and in off-chain mode? What specific log line confirms it? | go-livepeer source — startup log messages; Discord operator reports |
| 4 | What is the AI gateway's local HTTP endpoint? Port and path? (e.g. `http://localhost:8935/...`) | go-livepeer source — default port and API path |
| 5 | What is the simplest valid test AI inference request? What endpoint, what payload format, and what does a successful response look like? | go-livepeer source, DeepWiki, Discord `#local-gateways` |
| 6 | What Docker image and tag runs the go-livepeer gateway? Same image as orchestrator, or different? | go-livepeer releases, DockerHub `livepeer/go-livepeer` |
| 7 | What are the 3 most common first-run errors for off-chain AI gateway operators? Get exact error message text where possible. | Discord `#local-gateways`, Forum |
| 8 | Has anyone documented an AI gateway quickstart (community, j0sh Python gateway, NaaP repo)? Note for accuracy review — do not reproduce. | Discord, GitHub, web search |

#### Mandatory sources — check all of these before writing

| Source | What to extract |
|--------|----------------|
| `github.com/livepeer/go-livepeer` — gateway flag registration | Exact flag name for off-chain mode, exact flag for `-orchAddr`, port defaults |
| PRs #3791 and #3822 | Off-chain gateway startup requirements, what the minimal config looks like |
| `Remote_signers.md` (project file) | Off-chain startup sequence context — extract flag names, not design rationale |
| DeepWiki for `livepeer/go-livepeer` | Gateway startup flow, AI endpoint paths |
| `github.com/livepeer/go-livepeer/releases` | Latest go-livepeer version, binary URL for Linux amd64 |
| `hub.docker.com/r/livepeer/go-livepeer` | Current image tag, whether one image serves both gateway and orchestrator roles |
| Discord `#local-gateways` — search "quickstart", "first run", "off-chain", "gateway start", "curl", "test" | First-run errors, test request patterns, what success looks like in logs |
| `github.com/j0sh/livepeer-python-gateway` (or equivalent) | How the community has approached gateway startup — mine for flag patterns and test methods |

#### Technical claims that MUST be sourced — do not guess

| Claim | Must be found in |
|-------|-----------------|
| Exact flag to enable off-chain mode | go-livepeer source — flag registration; name not inferred |
| Exact format for `-orchAddr` flag (or equivalent) | go-livepeer source |
| Default AI gateway HTTP port | go-livepeer source |
| AI inference test endpoint path and payload format | go-livepeer source or DeepWiki |
| What "gateway ready" looks like in startup logs | go-livepeer source or Discord operator reports |
| Docker image name and current tag | DockerHub — verified, not assumed |

---

### 2.6 Page B — Content Specification

**Required sections (in this order):**

```
FRONTMATTER ............... See 2.7b for exact fields
GOAL STATEMENT ............ First line of page, before any heading:
                             "By the end of this guide, your AI gateway will be
                              running in off-chain mode and routing AI inference
                              requests to the Livepeer network."
PREREQUISITES ............. Checklist. 3 items with links.
INSTALL ................... <Tabs> — Docker / Binary.
                             If a shared install page exists, link and skip.
                             If not, minimal install for each path.
START THE GATEWAY ......... <Steps> — see detail below.
TEST THE GATEWAY .......... <Steps> — see detail below.
TROUBLESHOOTING ........... <AccordionGroup> — 3 entries, sourced from community.
NEXT STEPS ................ <CardGroup> — 3 cards.
```

#### Prerequisites checklist

Three items, each with a link:
1. Requirements confirmed — link to `setup/requirements/off-chain.mdx`
2. go-livepeer installed (version ≥ [verified minimum]) — link to install page
3. At least one orchestrator address — link to the orchestrator discovery section on `setup/requirements/off-chain.mdx`

#### Start the gateway — steps detail

Use `<Steps>`. Every step shows the exact command and expected output or log confirmation. Mark any unverified command `[//]: # (REVIEW:)`.

| Step | Action | What to show |
|------|--------|-------------|
| 1 | The minimal startup command | Complete copy-pasteable command. Off-chain mode flag explicit. Orchestrator address as placeholder with comment. Exact flags, no shorthand. |
| 2 | Confirm gateway is in off-chain mode | Specific log line that appears on successful off-chain startup. State what to look for. |
| 3 | Confirm connection to orchestrator | Log line or output confirming the gateway reached the orchestrator address. |

`<Warning>` after step 1: flag the most common startup error at this point — what the error looks like and the one-line fix. (Source from Discord research.)

#### Install tabs detail

Two tabs: **Docker** and **Binary**.

**Docker tab:**
1. Pull command: `docker pull [image:tag]` — exact, verified
2. Run command: minimal `docker run` with off-chain flag and orchestrator address placeholder
3. Expected startup output

**Binary tab:**
1. Download command: `curl` or `wget` with exact URL for Linux amd64 (verified from releases page)
2. Make executable: `chmod +x`
3. Run command: same as step 1 in Start the Gateway above

`<Note>` on the Docker tab: The go-livepeer Docker image is the same image used for orchestrators — role is determined by the flags passed at startup.

#### Test the gateway — steps detail

| Step | Action | What to show |
|------|--------|-------------|
| 1 | Confirm gateway HTTP endpoint accessible | `curl http://localhost:[port]/[health or status path]` — exact command and expected response |
| 2 | Send a test AI inference request | Exact `curl` command with endpoint path and minimal valid payload. What a successful routing response looks like. |
| 3 | Confirm routing in logs | What to look for in the gateway logs to confirm the request was forwarded to an orchestrator |

`[//]: # (REVIEW: Test request endpoint path and payload format must be verified against go-livepeer source or DeepWiki before publishing. Do not guess the API path.)`

#### Troubleshooting accordion — 3 entries (sourced from research)

`<AccordionGroup>` with three `<Accordion>` entries:

Each accordion: symptom as title (what the operator sees), brief cause, exact fix command or configuration change.

| # | Symptom title | Expected root cause | Fix |
|---|-------------|-------------------|-----|
| 1 | Gateway starts but no requests route | Orchestrator address unreachable or no AI capability | Verify `-orchAddr` value; check orchestrator supports AI; source from Discord `#local-gateways` research |
| 2 | Connection refused to orchestrator | Port or network issue | Verify port and outbound access; source from Discord research |
| 3 | Gateway starts in on-chain mode | Off-chain flag missing or wrong | Show the correct flag and the flag that was likely omitted; source from Discord research |

`[//]: # (REVIEW: All three errors must be sourced from Discord or Forum research with exact error messages. Replace placeholder descriptions above with real error text found during research.)`

---

### 2.7 Frontmatter

**Page A — off-chain.mdx:**
```mdx
---
title: 'Off-Chain Gateway Requirements'
description: 'What you need to run a Livepeer AI gateway in off-chain mode — no Ethereum account, no Arbitrum, no token holdings required.'
sidebarTitle: 'Off-Chain Requirements'
keywords: ["livepeer", "gateway", "off-chain", "AI gateway", "requirements", "no ETH", "prerequisites"]
pageType: 'reference'
audience: 'gateway'
status: 'current'
---
```

**Page B — ai-gateway-quickstart.mdx:**
```mdx
---
title: 'AI Gateway Quickstart'
description: 'Start a Livepeer AI gateway in off-chain mode — install go-livepeer, configure the essential flags, and send your first AI inference request through the network.'
sidebarTitle: 'AI Gateway'
keywords: ["livepeer", "gateway", "AI gateway", "quickstart", "off-chain", "go-livepeer", "AI inference", "tutorial"]
pageType: 'tutorial'
audience: 'gateway'
status: 'current'
---
```

---

### 2.8 Quality Gates

Agent verifies all of these before delivering output. Binary yes/no per item.

**Both pages — Frontmatter:**
- [ ] `title` present, &lt;60 chars
- [ ] `description` present, 1–2 sentences, describes what page provides
- [ ] `keywords` present, 5–10 terms
- [ ] `pageType` correct (`reference` for Page A, `tutorial` for Page B)
- [ ] `audience` is `gateway`
- [ ] `status` is `current`

**Page A — reference checklist:**
- [ ] "What you do NOT need" `<Note>` is the first substantive element after the intro
- [ ] No GPU requirement stated explicitly
- [ ] All requirements grouped (Infrastructure, Software, Network, Optional)
- [ ] All version numbers and port defaults sourced — no "latest"
- [ ] Orchestrator discovery accordion present
- [ ] Single next-step `<Card>` to quickstart
- [ ] No procedure steps — this is a reference page, not a how-to

**Page B — tutorial checklist:**
- [ ] Goal statement on first line before any heading
- [ ] Prerequisites checklist present with links
- [ ] Install section uses `<Tabs>` for Docker / Binary
- [ ] Gateway startup command verified against go-livepeer source — not guessed
- [ ] Off-chain mode flag explicit in the startup command
- [ ] Start section uses `<Steps>` with expected log output per step
- [ ] Test section uses `<Steps>` with exact `curl` command and expected response
- [ ] Test endpoint path and payload verified against source — not guessed
- [ ] Troubleshooting `<AccordionGroup>` with 3 entries sourced from community
- [ ] Next steps `<CardGroup>` present with 3 cards
- [ ] Page ends at "it's working" — no advanced configuration on this page

**Technical accuracy (both pages):**
- [ ] All flag names verified against go-livepeer source
- [ ] go-livepeer version minimum verified against releases page
- [ ] Docker image tag current and verified on DockerHub
- [ ] All unverified claims marked `[//]: # (REVIEW:)` in draft

**Brand and copy (both pages):**
- [ ] British English throughout
- [ ] No banned words
- [ ] Canonical terminology used
- [ ] Off-chain path clearly distinguished from on-chain — no implication ETH is needed
- [ ] No dead ends — both pages end with navigation

**MDX (both pages):**
- [ ] No `style={{}}` in MDX content
- [ ] No hardcoded hex colours
- [ ] Custom component imports use absolute paths from `/snippets/`
- [ ] Global components used directly with no import statements
- [ ] All internal links have `[//]: # (REVIEW:)` note if path not confirmed in docs-v2 IA

---

### 2.9 Output Specification

**⚠️ Deliver as output for review. Do not write to repo. Do not commit. Do not push.**

Four deliverables, delivered together:

**DELIVERABLE 1 — Research Report** (Part 3 of this brief, filled in)

**DELIVERABLE 2 — Media & Embed Candidates** (Part 3.4 of this brief, filled in)

**DELIVERABLE 3 — Draft MDX: off-chain.mdx**

```mdx
---
title: 'Off-Chain Gateway Requirements'
description: 'What you need to run a Livepeer AI gateway in off-chain mode — no Ethereum account, no Arbitrum, no token holdings required.'
sidebarTitle: 'Off-Chain Requirements'
keywords: ["livepeer", "gateway", "off-chain", "AI gateway", "requirements", "no ETH", "prerequisites"]
pageType: 'reference'
audience: 'gateway'
status: 'current'
---

The off-chain AI gateway path requires no Ethereum account, no Arbitrum setup, and no token holdings. This page lists what you need before starting the AI gateway quickstart.

<Note>
You do not need an ETH wallet, Arbitrum RPC endpoint, LPT tokens, or an Ethereum private key to run an off-chain AI gateway. ...
</Note>

## Requirements

[Grouped checklist — Infrastructure, Software, Network, Optional]

<AccordionGroup>
  <Accordion title="How to find orchestrators for an off-chain gateway">
    ...
  </Accordion>
</AccordionGroup>

<Card title="Start the AI Gateway Quickstart" href="/v2/gateways/get-started/ai-gateway-quickstart">
  Install go-livepeer and send your first AI inference request.
</Card>
```

**DELIVERABLE 4 — Draft MDX: ai-gateway-quickstart.mdx**

```mdx
---
title: 'AI Gateway Quickstart'
description: 'Start a Livepeer AI gateway in off-chain mode — install go-livepeer, configure the essential flags, and send your first AI inference request through the network.'
sidebarTitle: 'AI Gateway'
keywords: ["livepeer", "gateway", "AI gateway", "quickstart", "off-chain", "go-livepeer", "AI inference", "tutorial"]
pageType: 'tutorial'
audience: 'gateway'
status: 'current'
---

By the end of this guide, your AI gateway will be running in off-chain mode and routing AI inference requests to the Livepeer network.

## Prerequisites

...

## Install go-livepeer

<Tabs>
  <Tab title="Docker">
    ...
  </Tab>
  <Tab title="Binary">
    ...
  </Tab>
</Tabs>

## Start the gateway

<Steps>
  ...
</Steps>

## Test the gateway

<Steps>
  ...
</Steps>

## Troubleshooting

<AccordionGroup>
  ...
</AccordionGroup>

## Next steps

<CardGroup>
  <Card title="Configure your gateway" href="/v2/gateways/setup/configure/ai-configuration">
    Set flags for multiple orchestrators, pricing, and middleware.
  </Card>
  <Card title="Add video transcoding" href="/v2/gateways/setup/configure/dual-configuration">
    Run transcoding and AI inference from the same gateway node.
  </Card>
  <Card title="Set up a remote signer" href="/v2/gateways/advanced/remote-signers">
    Separate key custody from your gateway process.
  </Card>
</CardGroup>
```

Unresolved items marked with HTML comments:
```
<!-- REVIEW: Exact flag name for off-chain mode — verify against go-livepeer source -->
<!-- REVIEW: Default AI gateway HTTP port — verify against go-livepeer source -->
<!-- REVIEW: Test request endpoint path and payload format — verify against go-livepeer or DeepWiki -->
<!-- REVIEW: Orchestrator discovery — verify whether community orchestrator lists exist -->
<!-- REVIEW: All Next Steps card paths — verify against docs-v2 IA before publishing -->
<!-- SME: Rick or j0sh to confirm off-chain startup flag and test request format -->
```

---

## Part 3 — Research Report

*Agent fills this in as a standalone deliverable. Delivered alongside both draft MDX files.*

---

### 3.1 Sources Consulted

| # | Source | URL | Date checked | Content found |
|---|--------|-----|--------------|--------------|
| 1 | Remote_signers.md (project file) | — | — | Off-chain context |
| 2 | go-livepeer PR #3791 | | | |
| 3 | go-livepeer PR #3822 | | | |
| 4 | | | | |
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
| Supported OS for AI gateway binary | | | |
| Minimum hardware (RAM, CPU) | | | |
| GPU required? (expected: no) | | | |
| go-livepeer minimum version | | | |
| Exact off-chain mode flag name | | | |
| Exact flag for orchestrator address | | | |
| Default AI gateway HTTP port | | | |
| Docker image name and current tag | | | |
| AI inference test endpoint path | | | |
| Test request payload format | | | |
| Log message confirming off-chain startup | | | |
| Community orchestrator lists exist? | | | |

---

### 3.3 Pain Points Found

*(From Discord `#local-gateways`, Forum, community writeups — Tier 3/4 only.)*

| # | Pain point / error | Exact error text (if found) | Source | Frequency | Fix | Placement |
|---|-------------------|-----------------------------|--------|-----------|-----|-----------|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |

*Frequency signal: `one-off` / `recurring` / `very common (seen 3+ times in different threads)`*

---

### 3.4 Media & Embed Candidates

| # | Title | URL | Type | Length | Accurate? | Recommended position | Notes |
|---|-------|-----|------|--------|-----------|---------------------|-------|
| 1 | | | | | | | |
| 2 | | | | | | | |
| 3 | | | | | | | |

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
│   ├── gateway-setup-paths.mdx            [overview — decision matrix]
│   ├── ai-gateway-quickstart.mdx          [tutorial]  ← PAGE B (THIS BRIEF)
│   ├── video-gateway-quickstart.mdx       [tutorial]
│   └── dual-gateway-quickstart.mdx        [tutorial]
├── setup/
│   ├── requirements/
│   │   ├── off-chain.mdx                  [reference] ← PAGE A (THIS BRIEF)
│   │   └── on-chain.mdx                   [reference]
│   ├── configure/
│   │   ├── ai-configuration.mdx           [how_to]    ← Next Steps target
│   │   └── dual-configuration.mdx         [how_to]    ← Next Steps target
│   ├── connect-to-arbitrum.mdx            [how_to]
│   └── orchestrator-selection.mdx         [how_to]
├── advanced/
│   ├── remote-signers.mdx                 [guide]     ← Next Steps target
│   ├── payment-clearinghouse.mdx          [guide]
│   ├── monitoring.mdx                     [guide]
│   └── multi-instance.mdx                 [guide]
└── resources/
    ├── faq.mdx                            [faq]
    ├── gateway-flags.mdx                  [reference]
    └── troubleshooting.mdx                [troubleshooting]
```

*Note: Verify this IA against the actual docs-v2 branch before writing. Path names above are from planning documents and may have changed.*

### Upstream and downstream links

**Page A (off-chain.mdx):**

| Direction | Page | Relationship |
|-----------|------|-------------|
| Upstream | `get-started/gateway-setup-paths.mdx` | Off-chain path routes here |
| Downstream | `get-started/ai-gateway-quickstart.mdx` | Single next-step card |

**Page B (ai-gateway-quickstart.mdx):**

| Direction | Page | Relationship |
|-----------|------|-------------|
| Upstream (prerequisite) | `setup/requirements/off-chain.mdx` | Requirements must be confirmed |
| Downstream | `setup/configure/ai-configuration.mdx` | Next Steps card |
| Downstream | `setup/configure/dual-configuration.mdx` | Next Steps card |
| Downstream | `advanced/remote-signers.mdx` | Next Steps card |

### Intentional docs.json patterns — never touch

- `"anchor": " "` with `"pages": [" "]` — intentional sidebar visual separators
- `/v2/resources/redirect` — intentional routing workaround
