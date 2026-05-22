# Content Brief 05 — `get-started/setup-paths.mdx`
**GPU Nodes Tab · Livepeer Docs v2**  
**Template version:** 1.0 · March 2026  
**Repo:** `livepeer/docs` · branch `docs-v2`  
**Platform:** Mintlify  
**Engagement:** Wonderland × Livepeer Foundation

---

## How to Execute This Brief

Three phases. Strict order. Do not skip ahead.

1. **RESEARCH** — Consult every mandatory source in 2.2. Record every finding in Part 3. Do not write a single line of MDX until all research questions are answered or explicitly flagged as unverifiable.
2. **DRAFT** — Format verified content into the MDX structure specified in 2.3. Mark unverified items with `[//]: # (REVIEW:)` comments.
3. **OUTPUT FOR REVIEW** — Deliver the research report (Part 3) and the draft MDX together. Nothing is committed or pushed. Human reviews both before anything touches the repo.

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

This brief produces output for human review only. No files are written to the repo. No commits. No pushes. The draft MDX and full research log are delivered as output and reviewed before insertion.

---

### 1.2 Source Hierarchy

Sources are grouped by type and purpose. **Technical facts** must trace to Tier 1–2. **Pain points and community knowledge** come from Tier 3–4. **Media for embedding** comes from Tier 5. When sources conflict, the higher tier wins for factual claims. Record all conflicts in 3.5.

#### Tier 1 — Ground Truth (all technical claims must trace here)

| Source | Use for |
|--------|---------|
| `github.com/livepeer/go-livepeer` source code | Flag names, defaults, behaviour, config format — absolute ground truth |
| `github.com/livepeer/go-livepeer/releases` | Current version, binary URLs, changelogs |
| DeepWiki for `livepeer/go-livepeer` | Architecture, mechanics, codebase synthesis — use when source is too deep to read directly |

#### Tier 2 — Foundation Sources

| Source | Use for |
|--------|---------|
| `notion.livepeer.org` | Foundation strategy, SPE work, roadmap context, stakeholder decisions |
| `github.com/livepeer/docs` issues and PRs | Known content gaps, SME discussions, pending work, explicit correction requests |
| `roadmap.livepeer.org` | Protocol strategic direction |

#### Tier 3 — Community Knowledge (use for pain points and FAQ patterns — verify claims against Tier 1)

| Source | Use for |
|--------|---------|
| Livepeer Forum (`forum.livepeer.org`) | Real operator questions, community-verified answers, long-form troubleshooting threads |
| Discord `#orchestrating` | Common errors, current pain points, community workarounds — qualitative signal, verify technically |
| Discord `#gpu-mining` | GPU-specific hardware and setup discussion |
| Existing `docs.livepeer.org` | Port content with caution — treat as potentially stale, verify everything against Tier 1 before using |

#### Tier 4 — Third-Party & Community Writeups (use for pain points and media leads — not for technical claims)

Blog posts, community tutorials, third-party guides, Reddit threads, and Twitter/X discussions are valid sources specifically for:
- Identifying what confuses people and where existing docs fail them
- Understanding the language real users use vs how the Foundation describes things
- Finding community-written comparisons and decision guides
- Discovering embedded media worth linking

When using Tier 4 sources: mine them for pain points, do not copy technical claims, verify any fact against Tier 1 before using, cite in the research log only.

Suggested searches: `livepeer orchestrator vs pool reddit`, `"should I run a livepeer orchestrator" site:forum.livepeer.org`, `livepeer pool worker vs solo orchestrator`

#### Tier 5 — Video & Media (use for embed candidates)

| Source | Use for |
|--------|---------|
| Livepeer YouTube channel (`youtube.com/@Livepeer`) | Official overviews, onboarding content |
| Community comparison walkthroughs on YouTube | Mine for decision-framing content |
| Titan Node and Video Miner content | Often explain the pool vs solo decision |

---

### 1.3 Strategic Context

Livepeer is a **decentralised compute network for video and AI**. Not a SaaS product. The Cascade vision: real-time AI video pipelines. Over 72% of network fees are AI-driven.

**Priority persona order (Foundation strategic alignment):**
1. Application Developer (AI) — P0
2. Gateway Operator — P1
3. Orchestrator / GPU Node Operator — P2
4. Delegator — P3

**Docs purpose:** Take each persona from "I just heard about Livepeer" to "I am confidently doing the thing I came to do" — using only these docs and the tools they link to.

**Success metric per orchestrator persona:** Not "I read about it" — "I processed my first job."

---

### 1.4 Persona Definitions

#### Orchestrator / GPU Node Operator (P2)

An orchestrator simultaneously:
- Provides GPU compute (processes AI inference and transcoding jobs)
- Selects and loads AI models (model curator role)
- Holds staked LPT (governance delegate, proportional voting weight)
- Sets pricing and job acceptance policies (market participant)
- Attracts delegators (reputation player)

**Self-identifies as:** "Miner," "GPU operator," "node operator"  
**Technical depth:** Linux, NVIDIA CUDA, go-livepeer CLI, Docker, Arbitrum, GPU memory, staking, governance  
**Arrival path:** GPU miners seeking yield, AI infrastructure operators, Livepeer community members with hardware  
**Activation moment:** First job processed + earnings visible in Explorer

**GPU Nodes tab sub-personas:**

| Sub-persona | Hardware | LPT | Priority |
|-------------|----------|-----|----------|
| **A — Solo Miner** | 1–4 consumer GPUs (RTX 2060–3080) | Needs to acquire | Passive income, entry-level |
| **B — Pool Worker** | Any GPU | Not required | Contribute to pool, skip solo setup |
| **C — Pro Operator** | 4–20+ GPUs, data centre / hosted | Has stake | Expanding into AI pipelines |
| **D — Enterprise** | GPU cloud / fleet | Has stake | Multi-region, fleet management |
| **E — AI Native** | ML workstation / cloud | Has stake | AI inference specialist, new to Livepeer |

---

### 1.5 Persona Journey Stages

Every persona section follows this fixed position order. Content is written to advance the reader through these stages.

| Position | Purpose Type | Reader State | Reader's Question |
|----------|--------------|--------------|-------------------|
| 1 | `landing` | Just arrived | "Where do I go?" |
| 2 | `overview` / `concepts` | Orienting, evaluating | "What is this and should I care?" |
| **3** | **`tutorial` / `get-started`** | **Ready to try** | **"Get me to first success."** |
| 4 | `how-to` / `setup` | Active, needs a specific task | "How do I do this one thing?" |
| 5 | `guide` / `advanced` | Deepening, optimising | "How does this work in practice?" |
| 6 | `reference` / `resources` | On-demand lookup | "What's the exact spec / answer?" |

**This page is Position 3, Stage 1 — the first thing a reader hits after deciding to participate. It does routing, not teaching.**

---

### 1.6 Page Taxonomy

**10 page types.** Every page has exactly one type. Type determines structure, components, and quality gate criteria.

| Type | Job | Target read time | Word range |
|------|-----|-----------------|------------|
| `landing` | Route the reader | &lt;10 sec | 50–150 |
| `overview` | Orient and motivate | 2–4 min | 300–800 |
| `concept` | Explain a mechanism | 5–10 min | 500–2000 |
| `tutorial` | Activate (zero to success) | 10–30 min | 500–1500 |
| `how_to` | Enable a specific task | 5–15 min | 300–1000 |
| `guide` | Practical understanding of a system | 5–15 min | 500–2000 |
| `reference` | Lookup facts | &lt;1 min/lookup | Varies |
| `faq` | Answer common questions | 1–2 min | Varies |
| `troubleshooting` | Fix problems by symptom | 1–5 min | Varies |
| `glossary` | Define terms | &lt;30 sec/term | Varies |

**Fixed layout for `overview`:**
```
WHAT THIS IS → WHY IT MATTERS TO YOU → CONTEXT (diagram/comparison) → WHAT TO DO NEXT
```

This page is primarily routing. It is an `overview` in structure but the centrepiece is a decision table and path cards, not prose explanation. Under 400 words of prose total. The table and cards carry the content.

---

### 1.7 Frontmatter Schema

Every publishable MDX page requires all of these fields:

```mdx
---
title: 'Page Title'                    # <60 chars. Required.
description: 'What this page does'     # 1–2 sentences. PRIMARY AI/SEO field. Required.
sidebarTitle: 'Short Nav Label'        # Optional. Shorter than title.
keywords: ["livepeer", "orchestrator"] # 5–10 terms. Required.
pageType: 'overview'                   # One of 10 types above. Required.
audience: 'orchestrator'               # Persona token. Required.
status: 'current'                      # current | draft | review | deprecated. Required.
---
```

**Description rules:** 1–2 sentences. Describes what the page provides to the reader (not what Livepeer is). Not a repeat of the title. Primary field for AI assistants and search engines.

✅ `description: "Choose your path as a GPU operator on Livepeer — join a pool, run a solo orchestrator, add AI pipelines, or operate at enterprise scale."`  
❌ `description: "Overview of how to get started as an orchestrator."`

---

### 1.8 Brand & Copy Rules

**Voice:** Knowledgeable colleague. Not a marketer, not a professor, not a chatbot.  
**POV:** Second person ("you") for instructions. Third person for system descriptions. Never first-person plural ("we/our") in technical docs.  
**Language:** British English (en-GB). Oxford comma. Day-Month-Year dates.  
**Tone:** Scanning-optimised for overviews — operators don't read overview pages, they scan for their path. Lead with the decision criteria, not the explanation.

**Canonical terminology:**

| Use | Not |
|-----|-----|
| orchestrator | node operator, miner, GPU provider |
| gateway | broadcaster (v1 term) |
| go-livepeer | the Livepeer node, the binary |
| pipeline (for AI) | model, endpoint |
| Arbitrum | L2, layer 2 |
| Explorer | the dashboard, the staking UI |
| delegation | staking (when referring to delegators) |

**Banned words:** simply, just, easily, leverage, utilise, seamless, best-in-class, cutting-edge, world-class, "in order to", "it should be noted that", "please note that"

**Do:**
- Lead with the reader's next action
- Use concrete numbers: "requires ~8 GB VRAM" not "requires significant GPU memory"
- State LPT requirement clearly per path — this is the single biggest confusion point for new operators
- End with navigation — this page exists to route, so every section points somewhere

**Don't:**
- Compare negatively to specific competitors
- Promise specific earnings figures
- Explain each path in depth — all depth deferred to target quickstart pages
- Assume prior Livepeer knowledge

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
| OS / environment variants | `<View>` (dropdown, persistent) | `<Tabs>` |
| Language / on-chain vs off-chain variants | `<Tabs>` | Separate pages |
| Optional deep-dive detail | `<Accordion>` | Inline prose |
| Important context | `<Note>` / `<Tip>` / `<Warning>` | Bold text in paragraphs |
| Parameter / flag definitions | Markdown table | Prose paragraphs |
| Navigation to sub-sections | `<CardGroup>` + `<Card>` | Bullet lists of links |
| Multi-language code | `<Tabs>` wrapping `<CodeBlock>` | Sequential code blocks |

**Style rules:**
- CSS Custom Properties only for colours (`var(--accent)`, `var(--text)`)
- Never hardcode hex values in components
- No `style={{}}` in MDX content files
- Absolute imports from `/snippets/`: `import { X } from '/snippets/components/X.jsx'`
- Global components need no import statement

---

## Part 2 — Page Brief

---

### 2.1 Page Identity

```
Target file path:     v2/orchestrators/get-started/setup-paths.mdx
Page type:            overview
Audience:             orchestrator
Journey stage:        Position 3 — Get Started, Stage 1
Priority:             P1 · Phase 1
Status:               Exists-Weak — current page is not a real decision matrix
Action required:      Rewrite
```

**Dependency:** Brief 03 (`concepts/job-types.mdx` rewrite) must be complete before this page is written. This page references pipeline types and links to AI quickstarts. Job types must be explained somewhere before this page references them without re-explaining them. **Do not begin drafting until Brief 03 output has been reviewed and approved.**

**Page purpose:**  
Routes every type of GPU operator to their correct starting point. Reader arrives having read Concepts (or skipped it entirely). Reader leaves knowing exactly which path is theirs and clicking through. This page does not explain paths — it identifies them.

**Persona(s) served:** All — A (Solo Miner), B (Pool Worker), C (Pro Operator), D (Enterprise), E (AI Native). This is the entry point for every sub-persona.

**Journey entry condition:**  
Near-zero assumptions. An operator who has just discovered Livepeer and has a GPU should be able to land here and identify their path. They may not know what LPT is. They may not know pool vs orchestrator. The page must make the distinction legible in under 30 seconds.

**Activation / success condition:**  
Every sub-persona can identify their path within 30 seconds of arriving and click through to the right quickstart without confusion.

**Scope boundary:**  
One paragraph per path maximum. This page chooses a path — it does not explain the path. All depth lives in the target quickstart pages.

---

### 2.2 Research Mandate

**Execute all research before writing. Record all findings in Part 3. If a source contradicts another, note the conflict in 3.5 and defer to the source hierarchy.**

#### Research questions — all must be answered before writing

| # | Question | Where to find it |
|---|----------|-----------------|
| 1 | What real decision criteria do operators use when choosing between running solo vs joining a pool? Find actual language from Forum and Discord — not assumed. | Forum `forum.livepeer.org`, Discord `#orchestrating` |
| 2 | What do new operators most often get wrong about this choice? (E.g. thinking they need LPT when they don't for pool workers) | Discord `#orchestrating`, Forum threads tagged "pool" or "getting started" |
| 3 | What is the practical LPT stake floor to realistically receive jobs as a solo orchestrator? Not the absolute minimum to activate — the real-world competitive threshold. | Forum + Discord — operator discussions about stake and job routing |
| 4 | What hardware minimum realistically triggers the "join a pool" recommendation vs "run solo"? | Community discussions, pool operator websites |
| 5 | What is the minimum VRAM required for AI inference pipelines? Is there a single number or does it depend on the pipeline? | go-livepeer source, DeepWiki, SPE documentation |
| 6 | Are there community-written "pool vs solo" comparison guides? Note for potential linking. | Web search, Forum, Medium, Mirror |
| 7 | What does the current `quickstart/overview` page contain? What is worth keeping and what should be replaced? | Current `docs.livepeer.org` / `docs-v2` branch |
| 8 | What are the correct target quickstart page paths for each path in the decision table? Verify these paths exist or are being created. | `docs-v2` branch IA, GPU nodes IA planning document |

#### Mandatory sources — check all of these before writing

| Source | What to extract |
|--------|----------------|
| `forum.livepeer.org` — search "should I run orchestrator", "pool vs solo", "getting started", "LPT minimum" | Real operator decision language, confusion patterns, recurring questions |
| Discord `#orchestrating` — search "pool", "solo", "LPT", "how to start", "which path" | How community members explain the choice to new arrivals |
| Existing quickstart/overview page in `docs-v2` | Current content — note what to keep vs replace, what's stale |
| `gpu-nodes-ia-planning.md` | Sub-persona detail, confirmed IA paths, target quickstart URLs |
| Web: `livepeer orchestrator vs pool comparison` | Community comparisons — mine for language and framing, verify claims |
| Titan Node and Video Miner websites | How pool operators describe the join-a-pool option |
| `roadmap.livepeer.org` | Any strategic framing on AI pipelines path vs transcoding |

#### Technical claims that MUST be sourced — do not guess

| Claim | Must be found in |
|-------|-----------------|
| LPT requirement for pool workers (expecting: none) | Forum or Discord — confirm community understanding; verify no hidden requirement |
| Practical LPT stake floor for solo orchestrator to receive jobs | Forum + Discord operator discussions |
| Minimum VRAM for AI inference (specific number) | go-livepeer source or DeepWiki — state as specific number, not "high VRAM" |
| Whether NVENC is required for transcoding vs AI | go-livepeer README or DeepWiki |
| Correct target paths for all four quickstart links | `docs-v2` branch — verify paths exist |

#### Known content to verify (do not copy — verify and rewrite)

- Current `quickstart/overview` or equivalent page in docs-v2 — pull what's accurate, discard what's stale
- Any existing decision matrix or path-selection content in current docs — note what framing is correct vs what contradicts community understanding

#### Expected gaps (likely needs to be written from scratch)

- Clear one-line description of each path in operator language (not Foundation marketing language)
- Concrete LPT and hardware figures per path
- "Not sure?" decision flow — does not exist in current docs
- Pool Worker path (B) is not surfaced as a distinct option in current docs

---

### 2.3 Content Specification

**Required sections (in this order):**

```
FRONTMATTER ............... See 2.7 for exact fields
INTRO ..................... 2–3 sentences, no heading.
                             Context: multiple ways to participate as a GPU operator,
                             each with different requirements. This page helps you choose.
                             No heading above this — it is the page opening.
DECISION TABLE ............ Centrepiece. Markdown table covering all four paths.
                             Columns: Path | What you do | Hardware | LPT required |
                             Best for | Start here
                             Verify all values before publishing — see 2.2.
PATH CARDS ................ <CardGroup> with one <Card> per path.
                             Four cards: path name, one-sentence description, link.
                             Primary navigation element.
NOT SURE? ................. <Accordion title="Not sure which path is right for you?">
                             Short decision flow. See detail below.
RELATED ................... Inline links only (no CardGroup — page already has one).
                             Two links: concepts/overview, concepts/economics.
```

#### Decision table — row specification

| Path | What you do | Hardware | LPT required | Best for | Start here |
|------|-------------|----------|-------------|----------|------------|
| Join a Pool | Contribute GPU to an existing orchestrator | Any NVIDIA GPU | None | Getting started without crypto setup | `get-started/join-a-pool` |
| Solo Orchestrator | Run your own node, earn directly | NVIDIA GPU with NVENC, [verify VRAM minimum] | Yes — [verify practical stake floor] | Full control, passive income | `get-started/quickstart` |
| Add AI Pipelines | Add AI inference to an existing transcoding node | [verify VRAM minimum for AI] | Already staked | Existing operators expanding into AI | `get-started/AI-prompt-start` |
| Enterprise / Data Centre | Multi-GPU fleet, programmatic operation | GPU fleet | Yes | GPU cloud providers, compute businesses | `setup/overview` |

*All values in brackets must be verified in research phase and replaced with real numbers before drafting.*

#### "Not sure?" accordion — decision flow

```
Do you want to start earning without acquiring LPT or setting up a node?
→ Yes → Join a Pool

Do you already run a Livepeer transcoding orchestrator?
→ Yes → Add AI Pipelines

Do you have 4 or more GPUs, or are you running from a hosted server?
→ Yes → Enterprise / Data Centre

Otherwise → Solo Orchestrator
```

Keep each branch to one line. This is a triage tool, not a guide. No explanatory prose inside the accordion — each branch links to its target page.

#### Path cards — content per card

Each `<Card>` contains:
- **Title:** Path name
- **Body:** One sentence describing what the operator does and what they get
- **Link:** Target quickstart path (verify paths exist in 2.2)

No more than one sentence per card. All depth lives in the target page.

#### What this page explicitly does NOT contain

- Explanation of how the Livepeer network works — link to `concepts/overview` instead
- Explanation of what AI pipelines are — link to `concepts/job-types` (Brief 03) instead
- Setup instructions of any kind — all depth deferred to target quickstart pages
- Earnings comparisons or specific income figures
- LPT acquisition instructions — link to `advanced/staking-LPT` if needed

---

### 2.4 Media & Embed Research

This page is short and routing-focused. Media is a lower priority than on tutorial pages. However, note any candidates found.

**What to look for:**

| Type | What | Position if embedded |
|------|------|---------------------|
| Short overview video | "What is a Livepeer orchestrator" or "how to get started" from Foundation or known operator | After intro, before decision table |
| Comparison guide | Community writeup explaining pool vs solo clearly and accurately | "Related resources" inline link at bottom |

**Search targets:**

```
YouTube:  livepeer orchestrator overview 2024
YouTube:  livepeer pool vs solo
YouTube:  livepeer getting started GPU
Web:      livepeer orchestrator vs pool site:medium.com OR site:mirror.xyz
Web:      titan node livepeer getting started
```

**Media research log (agent fills in):**

| # | Title | URL | Type | Length | Position if embedded | Notes |
|---|-------|-----|------|--------|---------------------|-------|
| 1 | | | | | | |
| 2 | | | | | | |

---

### 2.5 Pain Points Research

The confusion this page resolves is the primary research target. The decision table and "Not sure?" accordion are only valuable if they address the real misunderstandings operators arrive with.

**Search targets:**

```
Forum:    forum.livepeer.org — "should I", "which path", "pool vs solo", "need LPT?", "getting started"
Discord:  #orchestrating — "how do I start", "do I need LPT", "pool or solo", "new here"
Discord:  #gpu-mining — same queries
Reddit:   r/livepeer — "start", "getting started", "join pool"
Reddit:   r/gpumining — "livepeer"
```

**Known confusion patterns to confirm:**

| Confusion | Expected finding | What the page must clarify |
|-----------|-----------------|---------------------------|
| "Do I need LPT to participate?" | Pool workers do not — this is widely misunderstood | Decision table LPT column — make "None" visually clear for Pool path |
| "What's the minimum LPT to actually get jobs?" | Solo operators debate this extensively — find the practical floor | Decision table or "Not sure?" accordion |
| "Should I run a node or join a pool?" | Most-asked new operator question | Decision table + accordion |
| "What's the difference between transcoding and AI pipelines?" | Conflated constantly | Reference to job-types page — do not explain on this page |
| "Do I need a data centre or can I use my home machine?" | Common confusion for persona A | Hardware column of decision table |

**Pain points log (agent fills in):**

| # | Confusion / question | Source | Frequency signal | What the page must say | Placement |
|---|---------------------|--------|-----------------|----------------------|-----------|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

*Frequency signal: `one-off` / `recurring` / `very common (seen 3+ times in different threads)`*

---

### 2.6 Quality Gates

Agent verifies all of these before delivering output. Binary yes/no per item.

**Frontmatter:**
- [ ] `title` present, &lt;60 chars
- [ ] `description` present, 1–2 sentences, describes what page provides (not a title repeat)
- [ ] `sidebarTitle` present as `'Get Started'`
- [ ] `keywords` present, 5–10 terms
- [ ] `pageType` is `overview`
- [ ] `audience` is `orchestrator`
- [ ] `status` is `current`

**Content quality (overview + routing page):**
- [ ] Decision table present covering all four paths
- [ ] LPT requirement explicitly stated per path — Pool Worker = None must be unambiguous
- [ ] Hardware requirement per path uses specific numbers, not vague descriptors
- [ ] All values in decision table verified against sources (not assumed)
- [ ] `<CardGroup>` with four cards present — one per path
- [ ] Each card contains path name, one sentence, and correct link
- [ ] "Not sure?" `<Accordion>` present with decision flow
- [ ] Each branch in accordion links to its target page
- [ ] Page is under 400 words of prose — table and cards carry the content
- [ ] No deep explanation of any path on this page — all depth deferred
- [ ] Related section present as inline links, not a second CardGroup
- [ ] Page ends with navigation — no dead ends

**Technical accuracy:**
- [ ] All LPT values sourced from Forum/Discord operator discussions and noted in research log
- [ ] VRAM minimum for AI pipelines sourced from go-livepeer or DeepWiki
- [ ] All target quickstart paths verified to exist in the docs-v2 IA
- [ ] All unverified values marked `[//]: # (REVIEW:)` in draft

**Brand and copy:**
- [ ] British English throughout
- [ ] No banned words: simply, just, easily, leverage, utilise, seamless
- [ ] Canonical terminology used throughout
- [ ] No earnings figures stated as absolute

**MDX:**
- [ ] No `style={{}}` in MDX content
- [ ] No hardcoded hex colours
- [ ] Custom component imports use absolute paths from `/snippets/`
- [ ] Global components used directly with no import statements
- [ ] All internal links resolve to pages that exist in the target IA

**Dependency check:**
- [ ] Brief 03 (`concepts/job-types.mdx`) output reviewed and approved before this draft is submitted

---

### 2.7 Output Specification

**⚠️ Deliver as output for review. Do not write to repo. Do not commit. Do not push.**

Three deliverables, delivered together:

**DELIVERABLE 1 — Research Report** (Part 3 of this brief, filled in)  
All sources consulted, all technical claims with source citations, confusion patterns log, all source conflicts, all unverified items flagged for SME review.

**DELIVERABLE 2 — Media & Embed Candidates**  
All video candidates and community guides found, with accuracy assessment and recommended position. Recommendation on which are worth embedding or linking.

**DELIVERABLE 3 — Draft MDX**

```mdx
---
title: 'How to Get Started'
description: 'Choose your path as a GPU operator on Livepeer — join a pool, run a solo orchestrator, add AI pipelines, or operate at enterprise scale.'
sidebarTitle: 'Get Started'
keywords: ["livepeer", "orchestrator", "get started", "pool", "solo", "AI pipelines", "LPT", "GPU", "setup paths"]
pageType: 'overview'
audience: 'orchestrator'
status: 'current'
---

[2–3 sentence intro — no heading]

## Choose your path

[Decision table — verified values]

[CardGroup with four cards]

<AccordionGroup>
  <Accordion title="Not sure which path is right for you?">
    [Decision flow — one line per branch, each linking to target page]
  </Accordion>
</AccordionGroup>

[Inline related links — no second CardGroup]
```

Unresolved items marked with HTML comments:
```
<!-- REVIEW: Practical LPT stake floor — needs Forum/Discord verification -->
<!-- REVIEW: Minimum VRAM for AI pipelines — needs go-livepeer source verification -->
<!-- SME: Peter to confirm AI pipeline hardware minimum -->
<!-- DEPENDENCY: Brief 03 job-types page must be published before this page ships -->
```

---

## Part 3 — Research Report

*Agent fills this in as a standalone deliverable. Delivered alongside the draft MDX.*

---

### 3.1 Sources Consulted

| # | Source | URL | Date checked | Content found |
|---|--------|-----|--------------|--------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |
| 6 | | | | |
| 7 | | | | |
| 8 | | | | |

---

### 3.2 Technical Claims & Sources

| Claim | Value found | Source (Tier + URL) | Verified? |
|-------|-------------|---------------------|-----------|
| LPT requirement for pool workers | | | |
| Practical LPT stake floor for solo orchestrator | | | |
| VRAM minimum for AI inference pipelines | | | |
| NVENC required for transcoding? | | | |
| Target path for Join a Pool quickstart | | | |
| Target path for Solo Orchestrator quickstart | | | |
| Target path for AI Pipelines quickstart | | | |
| Target path for Enterprise quickstart | | | |

---

### 3.3 Confusion Patterns Found

*(Real operator misunderstandings from Forum, Discord, Reddit — Tier 3/4. These inform the decision table design and accordion framing.)*

| # | Confusion / question | Source | Frequency | What the page must say | Placement |
|---|---------------------|--------|-----------|----------------------|-----------|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

---

### 3.4 Media & Embed Candidates

| # | Title | URL | Type | Length | Accurate? | Recommended position | Notes |
|---|-------|-----|------|--------|-----------|---------------------|-------|
| 1 | | | | | | | |
| 2 | | | | | | | |

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

## Appendix — GPU Nodes Tab IA Context

*Reference for the agent. Shows where this page sits in the full tab structure.*

### Target IA (post-Phase-0)

```
v2/orchestrators/
├── orchestrators-portal.mdx           [landing]
├── orchestrator-journey.mdx           [landing]
├── concepts/
│   ├── overview.mdx                   [overview]
│   ├── architecture.mdx               [concept]
│   ├── economics.mdx                  [concept]
│   ├── functions.mdx                  [concept]
│   └── job-types.mdx                  [concept]  ← Brief 03 — must be complete first
├── get-started/
│   ├── setup-paths.mdx                [overview]  ← THIS PAGE
│   ├── quickstart.mdx                 [tutorial]
│   ├── join-a-pool.mdx               ← ✅ COMPLETE
│   ├── AI-prompt-start.mdx            [tutorial]
│   ├── realtime-ai-quickstart.mdx     [tutorial]
│   └── batch-ai-quickstart.mdx        [tutorial]
├── setup/
│   ├── overview.mdx                   [how_to — flow map]
│   ├── hardware-requirements.mdx      [reference]
│   ├── install-go-livepeer.mdx        [tutorial]
│   ├── orch-config.mdx                [how_to]
│   ├── connect-to-arbitrum.mdx        [how_to]
│   ├── orchestrator-stats.mdx         [guide]
│   ├── publish-offerings.mdx          [how_to]
│   ├── data-centre-setup.mdx          [how_to]
│   └── enterprise-and-data-centres.mdx [guide]
├── advanced/
│   ├── earnings.mdx                   [guide]
│   ├── staking-LPT.mdx               [how_to]
│   ├── rewards-and-fees.mdx           [concept]
│   ├── delegation.mdx                 [how_to]
│   ├── payments.mdx                   [concept]
│   ├── ai-pipelines.mdx               [guide]
│   ├── hosting-models.mdx             [guide]
│   └── run-a-pool.mdx                 [guide]
├── tools-and-guides/
│   ├── guides.mdx                     [reference — index]
│   └── tooling.mdx                    [reference — index]
└── resources/
    ├── faq.mdx                        [faq + troubleshooting]
    ├── cli-flags.mdx                  [reference]
    └── community-pools.mdx            [reference]
```

### Upstream and downstream links from this page

| Direction | Page | Relationship |
|-----------|------|-------------|
| Upstream (comes from) | `orchestrators-portal.mdx` | Tab landing routes here |
| Upstream (comes from) | `concepts/overview.mdx` | Concept pages link here as "ready to start?" |
| Downstream (goes to) | `get-started/join-a-pool.mdx` | Pool Worker path |
| Downstream (goes to) | `get-started/quickstart.mdx` | Solo Orchestrator path |
| Downstream (goes to) | `get-started/AI-prompt-start.mdx` | AI Pipelines path |
| Downstream (goes to) | `setup/overview.mdx` | Enterprise path |
| Related (inline link) | `concepts/overview.mdx` | "Learn what orchestrators do" |
| Related (inline link) | `concepts/economics.mdx` | "Understand job types and earnings" |

### Content priority queue (for context)

| Priority | File | Action | Key persona |
|----------|------|--------|-------------|
| **P0** | `resources/faq.mdx` | WRITE | All |
| **P1** | `concepts/job-types.mdx` | REWRITE | C, E — **must complete before this brief** |
| **P1** | `get-started/setup-paths.mdx` | **REWRITE ← THIS BRIEF** | All |
| **P1** | `setup/install-go-livepeer.mdx` | CREATE | A, C |
| **P1** | `setup/orch-config.mdx` | CREATE | A, C |
| **P1** | `get-started/AI-prompt-start.mdx` | CREATE | C, E |

### Intentional docs.json patterns — never touch

- `"anchor": " "` with `"pages": [" "]` — intentional sidebar visual separators
- `/v2/resources/redirect` — intentional routing workaround
