# Content Brief 02 — `setup/install-go-livepeer.mdx`
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
| `github.com/livepeer/go-livepeer/releases` | Current version, binary URLs, checksums, changelogs |
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
| Discord `#orchestrating` | Common errors, current pain points, community workarounds — treat as qualitative signal, verify claims technically |
| Discord `#gpu-mining` | GPU-specific install issues |
| Existing `docs.livepeer.org` | Port content with caution — treat as potentially stale, verify everything against Tier 1 before using |

#### Tier 4 — Third-Party & Community Writeups (use for pain points and media leads — not for technical claims)

Blog posts, community tutorials, third-party guides, Reddit threads, and Twitter/X discussions are valid sources specifically for:
- Identifying what confuses people and where existing docs fail them
- Understanding the language real users use vs how the Foundation describes things
- Finding community-written walkthroughs that filled gaps in official docs
- Discovering embedded media worth linking or embedding

When using Tier 4 sources: mine them for pain points, do not copy technical claims, verify any fact against Tier 1 before using, cite in the research log only.

Suggested searches: `"go-livepeer" install site:reddit.com`, `livepeer orchestrator install site:medium.com`, `livepeer GPU node setup site:mirror.xyz`, `livepeer orchestrator tutorial youtube`

#### Tier 5 — Video & Media (use for embed candidates)

| Source | Use for |
|--------|---------|
| Livepeer YouTube channel (`youtube.com/@Livepeer`) | Official setup demos, onboarding content |
| Community setup walkthroughs on YouTube | Verify accuracy before recommending for embed |
| Titan Node YouTube and documentation | Pool operator setup guides — often cover solo install |
| Video Miner community content | Same — mine for install walkthroughs |
| ETH Global and hackathon demo recordings | Livepeer AI demos that include node setup context |

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
| 3 | `tutorial` / `get-started` | Ready to try | "Get me to first success." |
| 4 | `how-to` / `setup` | Active, needs a specific task | "How do I do this one thing?" |
| 5 | `guide` / `advanced` | Deepening, optimising | "How does this work in practice?" |
| 6 | `reference` / `resources` | On-demand lookup | "What's the exact spec / answer?" |

**Orchestrator journey — this brief covers Stage 3 (Installation):**

| Stage | What They're Doing | Position |
|-------|--------------------|----------|
| 1. Discovery | Understanding the opportunity | 2 — concepts/overview |
| 2. Evaluation | Deciding whether to run one | 2 — concepts/overview |
| **3. Installation** | **Getting go-livepeer running** | **3 — get-started / setup** |
| 4. On-Chain Registration | Joining the network | 3 — get-started |
| 5. AI Setup | Configuring GPU pipelines | 4 — setup / advanced |
| 6. First Success (ACTIVATION) | Processing their first job | 3 — get-started (verification) |
| 7. Optimisation | Maximising earnings | 5 — advanced |

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

**Fixed layout for `tutorial`:**
```
GOAL STATEMENT → PREREQUISITES → STEPS → VERIFICATION → NEXT STEPS
```

---

### 1.7 Frontmatter Schema

Every publishable MDX page requires all of these fields:

```mdx
---
title: 'Page Title'                    # <60 chars. Required.
description: 'What this page does'     # 1–2 sentences. PRIMARY AI/SEO field. Required.
sidebarTitle: 'Short Nav Label'        # Optional. Shorter than title.
keywords: ["livepeer", "orchestrator"] # 5–10 terms. Required.
pageType: 'tutorial'                   # One of 10 types above. Required.
audience: 'orchestrator'               # Persona token. Required.
status: 'current'                      # current | draft | review | deprecated. Required.
---
```

**Description rules:** 1–2 sentences. Describes what the page provides to the reader (not what Livepeer is). Not a repeat of the title. This is the primary field for AI assistants and search engines.

✅ `description: "Step-by-step guide to install go-livepeer on Linux, macOS, or Docker, with GPU detection verification."`  
❌ `description: "Install guide for orchestrators."`

---

### 1.8 Brand & Copy Rules

**Voice:** Knowledgeable colleague. Not a marketer, not a professor, not a chatbot.  
**POV:** Second person ("you") for instructions. Third person for system descriptions. Never first-person plural ("we/our") in technical docs.  
**Language:** British English (en-GB). Oxford comma. Day-Month-Year dates.  
**Tone:** Tight and action-focused for tutorials. Show the exact command. Show the expected output. No filler.

**Canonical terminology:**

| Use | Not |
|-----|-----|
| orchestrator | node operator, miner, GPU provider |
| gateway | broadcaster (v1 term) |
| go-livepeer | the Livepeer node, the binary |
| pipeline (for AI) | model, endpoint |
| Arbitrum | L2, layer 2 |
| Explorer | the dashboard, the staking UI |

**Banned words:** simply, just, easily, leverage, utilise, seamless, best-in-class, cutting-edge, world-class, "in order to", "it should be noted that", "please note that"

**Do:**
- Lead with the reader's next action
- Use concrete numbers: "requires ~8 GB VRAM" not "requires significant GPU memory"
- Show expected terminal output for every command — success AND failure where relevant
- Define jargon on first use or link to Glossary
- End every non-reference page with a next step

**Don't:**
- Compare negatively to specific competitors
- Promise specific earnings figures
- Assume prior Livepeer knowledge even in deep pages

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
| OS / environment variants | `<View>` (dropdown, persistent selection) | `<Tabs>` |
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
Target file path:     v2/orchestrators/setup/install-go-livepeer.mdx
Page type:            tutorial
Audience:             orchestrator
Journey stage:        Position 3 (get-started) → Stage 3: Installation
Priority:             P1
Status:               Missing — does not exist as a standalone page
Action required:      Create
```

**Page purpose:**  
Gets a new orchestrator from zero to a verified go-livepeer binary installed on their machine, with GPU detected and ready to configure. Reader arrives with a decision to run a solo orchestrator and hardware that meets requirements. Reader leaves with a working, verified installation.

**Persona(s) served:**
- **A — Solo Miner** (primary): ex-GPU miner, Linux-comfortable, NVIDIA RTX 2060–3080, follows instructions precisely when clear, confused by crypto terminology and go toolchain assumptions
- **C — Pro Operator** (secondary): Docker-native, 4–20+ GPUs, will want the Docker path first
- **E — AI Native** (secondary): ML background, Docker-comfortable, Ubuntu or cloud VM, CUDA-familiar workflow

**Journey entry condition:**  
Reader has hardware meeting `setup/hardware-requirements.mdx` and has decided to run a solo orchestrator rather than join a pool. They arrive from either `get-started/setup-paths.mdx` (the decision matrix) or directly via search.

**Activation / success condition:**  
Reader can run `livepeer --version` and see a valid version number. Their GPU is detected. They can proceed to `setup/orch-config.mdx` without hitting Discord.

---

### 2.2 Research Mandate

**Execute all research before writing. Record all findings in Part 3. If a source contradicts another, note the conflict in 3.5 and defer to the source hierarchy.**

#### Research questions — all must be answered before writing

| # | Question | Where to find it |
|---|----------|-----------------|
| 1 | What is the current latest go-livepeer release version? | `github.com/livepeer/go-livepeer/releases` |
| 2 | What are the exact binary download URLs for Linux (amd64), macOS (arm64), macOS (amd64), and Windows? | Releases page — copy exactly, do not construct |
| 3 | What are the SHA256 checksums for the current release binaries? | Releases page |
| 4 | What is the minimum NVIDIA driver version required? Find the exact version number — not "latest". | go-livepeer README or release notes |
| 5 | What CUDA version does the current release require or recommend? | go-livepeer README, Dockerfile base image |
| 6 | What is the correct Docker image name and current tag? (Verify on DockerHub — do not assume `latest`) | `hub.docker.com/r/livepeer/go-livepeer` or go-livepeer releases |
| 7 | What Go version is required to build from source? | go-livepeer README or `go.mod` |
| 8 | What are the exact build commands for building from source on Linux? | go-livepeer README |
| 9 | How do you verify GPU detection after install? What is the exact command and what does successful output look like? | go-livepeer docs, DeepWiki, or `--help` output |
| 10 | What are the 3–5 most common install failures? Get exact error message text where possible. | Forum + Discord (Tier 3) |
| 11 | Is nvidia-container-toolkit required for Docker GPU runtime? What is the install command? | go-livepeer README or Docker GPU docs |

#### Mandatory sources — check all of these before writing

| Source | What to extract |
|--------|----------------|
| `github.com/livepeer/go-livepeer/releases` — latest release | Binary download URLs, checksums, release notes, Go version requirement |
| `github.com/livepeer/go-livepeer` — README | Install instructions, prerequisites section, known requirements, NVIDIA driver minimum |
| `github.com/livepeer/go-livepeer` — Dockerfile or docker-compose | Docker image name, base image, CUDA version used |
| DeepWiki for `livepeer/go-livepeer` | Build requirements, GPU detection mechanism, install notes |
| `hub.docker.com/r/livepeer/go-livepeer` | Current tag, image variants, available platforms |
| `forum.livepeer.org` — search "install", "binary", "CUDA", "driver" | Common install failures, community-verified solutions |
| Discord `#orchestrating` — search "install", "binary", "can't start", "CUDA error", "driver" | Error message text for common install failures |
| Web search: `"go-livepeer" install tutorial site:medium.com OR site:mirror.xyz` | Community install guides — mine for gaps and pain points, verify all technical claims against Tier 1 |
| YouTube: `livepeer orchestrator install`, `go-livepeer setup`, `livepeer GPU node` | Setup walkthrough videos — note timestamp if a specific install section exists |
| Titan Node community content (website and YouTube) | Pool operators often write setup guides — mine for install walkthroughs |
| Video Miner community content (website and YouTube) | Same |

#### Technical claims that MUST be sourced — do not guess

Every one of these must have a verified source before writing. If the answer cannot be found, mark it `[//]: # (REVIEW:)` in the draft and record it in 3.6.

| Claim | Must be found in |
|-------|-----------------|
| Minimum NVIDIA driver version | go-livepeer README or release notes |
| CUDA version requirement | go-livepeer README, Dockerfile base image |
| Docker image name and current tag | Releases or DockerHub — verified, not assumed |
| Go version for source build | go-livepeer README or `go.mod` |
| GPU detection verification command | go-livepeer docs, DeepWiki, or help output |
| Binary download URLs | `github.com/livepeer/go-livepeer/releases` — copy exactly |
| nvidia-container-toolkit requirement | go-livepeer README or Docker GPU documentation |

#### Known content to verify (do not copy — verify and rewrite)

- Existing install instructions embedded in `get-started/quickstart.mdx` (if present) — treat as potentially stale
- Any v1 install docs at `docs.livepeer.org` — verify every claim against current release before using
- Community tutorials on Medium or Mirror that may reference outdated binary URLs or driver requirements

#### Expected gaps (likely needs to be written from scratch)

- Standalone install page with clear multi-path structure does not exist in docs-v2
- GPU detection verification steps not documented in a reader-accessible location
- macOS limitations note (no NVIDIA GPU support) absent from current docs
- Common CUDA mismatch error messages not documented

---

### 2.3 Content Specification

**Required sections (in this order):**

```
FRONTMATTER ............... See 2.7 for exact fields
GOAL STATEMENT ............ First line of page, before any heading:
                             "By the end of this guide, you will have go-livepeer
                              installed on your machine and your GPU detected and
                              ready to configure."
PREREQUISITES ............. Checklist with exact version numbers (not "latest").
                             OS and versions, NVIDIA driver minimum, CUDA version,
                             Docker version (Docker path), nvidia-container-toolkit
                             (Docker + GPU), available disk space.
                             Use <Note> if Windows has limitations vs Linux.
INSTALL GO-LIVEPEER ....... <View> component (not <Tabs>) for OS/environment selection.
                             Four paths total — see detail below.
                             Each path uses <Steps> internally.
VERIFY YOUR INSTALLATION .. Standalone section outside the install paths.
                             Two checks: livepeer --version, GPU detection.
                             <Warning> if GPU not detected.
NEXT STEPS ................ <CardGroup> with single card → orch-config.mdx
```

#### Install paths detail

Use `<View>` to wrap all paths. `<View>` renders as a persistent dropdown. Do NOT use `<Tabs>` for OS/environment variants.

**Path 1 — Linux binary (default, most prominent)**

| Step | Action | Show |
|------|--------|------|
| 1 | Download the binary | Exact `curl` or `wget` command with current release URL |
| 2 | Verify checksum | Exact `sha256sum` command and expected output format |
| 3 | Make executable | `chmod +x` command |
| 4 | Move to PATH or run in place | Two options — `mv` to `/usr/local/bin/` or run from current directory |
| 5 | Verify | `livepeer --version` → show expected output format |

**Path 2 — Docker**

| Step | Action | Show |
|------|--------|------|
| 1 | Install nvidia-container-toolkit | Exact install command; link to NVIDIA docs for full setup |
| 2 | Pull the image | Exact `docker pull` command with image:tag |
| 3 | Verify GPU access in container | Exact `docker run` test command with expected output |
| Note | — | Full run command with GPU flags lives in `setup/orch-config.mdx` — this step is install and verify only |

**Path 3 — macOS binary**

| Step | Action | Show |
|------|--------|------|
| 1 | Download | Exact URL for arm64 / amd64 with note on which to use |
| 2 | Unquarantine | `xattr -d com.apple.quarantine ./livepeer` |
| 3 | Make executable | `chmod +x` |
| 4 | Verify | `livepeer --version` |
| Note | macOS GPU limitation | `<Note>`: macOS does not support NVIDIA GPU — means transcoding-only, no AI inference |

**Path 4 — Build from source** (wrap in `<Accordion title="Build from source (advanced)">`)

| Step | Action | Show |
|------|--------|------|
| 1 | Install Go | Exact version required, link to `golang.org/dl` |
| 2 | Clone repo | `git clone` command |
| 3 | Build | Exact build command (from README) |
| 4 | Binary location | Where the binary is placed after build |
| 5 | Verify | `./livepeer --version` |

#### Verify your installation section

Applies regardless of install path. Two checks:

1. **Version check:** `livepeer --version` — show expected output format (e.g. `Livepeer Node 0.x.x (...)`)
2. **GPU detection:** Show the exact command that confirms GPU detection and what successful output looks like. Also show what "no GPU found" output looks like, so operators know what failure looks like before proceeding.

```
<Warning>
Do not proceed to configuration until your GPU is detected. If your GPU is not found,
check [FAQ link] before continuing.
</Warning>
```

#### Content data types

| Content type | Where | Component |
|--------------|-------|-----------|
| Multi-dimensional instruction | Four install paths | `<View>` outer → `<Steps>` inner |
| Procedural instruction | Each install path | `<Steps>` |
| Code examples | Each step's command and expected output | `<CodeBlock language="bash">` |
| Prerequisites | Version requirements list | Markdown checklist |
| Supplementary detail | Build from source | `<Accordion>` |
| Limitation notice | macOS GPU caveat | `<Note>` |
| Blocker warning | GPU not detected | `<Warning>` |
| Next step navigation | End of page | `<CardGroup>` + `<Card>` |

#### What this page explicitly does NOT contain

- Flag configuration — that belongs in `setup/orch-config.mdx`
- Arbitrum connection steps — that belongs in `setup/connect-to-arbitrum.mdx`
- AI pipeline setup — that belongs in `setup/overview.mdx` → `get-started/AI-prompt-start.mdx`
- LPT staking — that belongs in `advanced/staking-LPT.mdx`
- Earnings or pricing strategy — that belongs in `advanced/earnings.mdx`

---

### 2.4 Media & Embed Research

**What to find:**

| Type | What to look for | Embed method |
|------|-----------------|--------------|
| Video tutorial | Setup walkthroughs showing go-livepeer install on Linux | `<Frame>` YouTube embed after goal statement |
| Community demo | Pool operator tutorial that includes install steps | `<Frame>` embed or "Related resources" card |
| Blog post | Accurate community install guide (verify claims before recommending) | "Related resources" card at bottom |
| Diagram | Any architecture visual that shows where install fits in the orchestrator journey | `<Frame>` in prerequisites or overview |

**Search targets:**

```
YouTube:  "go-livepeer install" tutorial
YouTube:  livepeer GPU node setup 2024
YouTube:  livepeer orchestrator install walkthrough
YouTube:  titan node livepeer setup
YouTube:  video miner livepeer node
Web:      go-livepeer install guide site:medium.com
Web:      livepeer orchestrator setup site:mirror.xyz
Web:      livepeer node install site:substack.com
Web:      titan node livepeer install
```

**Criteria for embed candidate:**
- Video: &lt;20 min, covers the exact install workflow, published within 2 years, from Foundation or known pool operator
- Blog post: accurate at time of check, links to current tooling, adds depth not duplicated in official docs
- All candidates logged in 3.4 — human decides what gets embedded and at which position

**Position guidance:**
- After goal statement: intro video showing the full install end-to-end — highest engagement position
- After a complex step (e.g. Docker GPU setup): demo of that specific step — reduces drop-off
- Bottom of page: blog posts and community writeups in "Related resources" — does not interrupt flow

**Media research log (agent fills in):**

| # | Title | URL | Type | Length | Relevant section | Embed candidate? | Notes |
|---|-------|-----|------|--------|-----------------|-----------------|-------|
| 1 | | | | | | | |
| 2 | | | | | | | |
| 3 | | | | | | | |

---

### 2.5 Pain Points Research

**Search targets:**

```
Forum:    forum.livepeer.org — threads tagged "orchestrator", "install", "setup", "go-livepeer"
Discord:  #orchestrating — search "install", "binary", "CUDA", "driver", "can't start"
Discord:  #gpu-mining — search "install", "setup", "driver"
Reddit:   r/livepeer — search "install", "setup", "node"
Reddit:   r/gpumining — search "livepeer"
GitHub:   livepeer/docs issues — search "install", "go-livepeer", "binary"
```

**Known pain points to investigate:**

| Pain point | What to find | Where to place in page |
|------------|-------------|----------------------|
| NVIDIA driver version confusion | Exact error when driver is too old | Prerequisite `<Note>` or FAQ callout |
| CUDA mismatch | Exact error message text | Inline `<Warning>` in Linux install steps |
| Binary not found after download | What command fails and why | Step 3/4 expected output block |
| GPU not detected on first run | What output looks like; most common cause | Verify section `<Warning>` |
| `serviceAddr` networking failures at install time | Distinguish from true install failures | `<Note>` in verify section linking to FAQ |
| macOS quarantine blocking execution | Exact error and fix | macOS path Step 2 |

**Pain points log (agent fills in):**

| # | Pain point / error | Source | Frequency signal | Resolution | Include where |
|---|-------------------|--------|-----------------|------------|---------------|
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
- [ ] `description` present, 1–2 sentences, describes what the page provides (not a title repeat)
- [ ] `keywords` present, 5–10 terms
- [ ] `pageType` is `tutorial`
- [ ] `audience` is `orchestrator`
- [ ] `status` is `current`

**Content quality (tutorial checklist):**
- [ ] Goal statement is the first line of the page, before any heading
- [ ] Prerequisites listed before any steps, with exact version numbers (no "latest")
- [ ] `<View>` used for install paths — NOT `<Tabs>`
- [ ] `<Steps>` used inside each install path
- [ ] Every step shows the exact command AND expected terminal output
- [ ] Binary download URLs are copied exactly from the releases page — not constructed
- [ ] Docker path includes nvidia-container-toolkit requirement
- [ ] macOS path includes `<Note>` explaining no NVIDIA GPU support
- [ ] Build from source is wrapped in `<Accordion>`
- [ ] Verify section covers both `livepeer --version` and GPU detection
- [ ] `<Warning>` present if GPU not detected
- [ ] Page ends with Next Steps `<CardGroup>` linking to `orch-config.mdx`
- [ ] Testable: a new operator can follow this page end-to-end without leaving it or consulting Discord

**Technical accuracy:**
- [ ] All version numbers sourced and cited in research log — no guesses
- [ ] NVIDIA driver minimum version is a specific number, not "latest"
- [ ] Docker image tag is current and verified on DockerHub
- [ ] Go version for source build verified against `go.mod` or README
- [ ] All unverified claims marked `[//]: # (REVIEW:)` in draft

**Brand and copy:**
- [ ] British English throughout
- [ ] No banned words: simply, just, easily, leverage, utilise, seamless
- [ ] Canonical terminology used: orchestrator (not miner), go-livepeer (not "the binary" in prose)
- [ ] No dead ends — page ends with next step

**MDX:**
- [ ] No `style={{}}` in MDX content
- [ ] No hardcoded hex colours
- [ ] Custom component imports use absolute paths from `/snippets/`
- [ ] Global components used directly with no import statements
- [ ] All internal links resolve to pages that exist in the target IA

---

### 2.7 Output Specification

**⚠️ Deliver as output for review. Do not write to repo. Do not commit. Do not push.**

Three deliverables, delivered together:

**DELIVERABLE 1 — Research Report** (Part 3 of this brief, filled in)  
All sources consulted, all technical claims with Tier 1 source citations, pain points log from Tier 3/4 sources, all source conflicts, all unverified items flagged for SME review.

**DELIVERABLE 2 — Media & Embed Candidates**  
All video candidates with title, URL, length, and recommended position. All blog posts found with accuracy assessment. Recommendation on which ones are worth embedding and where.

**DELIVERABLE 3 — Draft MDX**

```mdx
---
title: 'Install go-livepeer'
description: 'Install the go-livepeer binary on Linux, macOS, or via Docker. Covers prerequisites, GPU driver requirements, installation steps, and verification.'
keywords: ["go-livepeer", "install", "orchestrator", "GPU", "NVIDIA", "Docker", "binary", "CUDA", "Linux"]
pageType: 'tutorial'
audience: 'orchestrator'
status: 'current'
---

By the end of this guide, you will have go-livepeer installed on your machine and your GPU detected and ready to configure.

## Prerequisites

...

## Install go-livepeer

<View>
  ...
</View>

## Verify your installation

...

## Next steps

<CardGroup>
  <Card title="Configure your orchestrator" href="/v2/orchestrators/setup/orch-config">
    Set the flags your node needs to connect, price jobs, and accept work.
  </Card>
</CardGroup>
```

Unresolved items marked with HTML comments:
```
<!-- REVIEW: Command needs verification against current go-livepeer release -->
<!-- SME: Rick to confirm minimum NVIDIA driver version -->
<!-- EMBED: [Video title] recommended here — awaiting approval -->
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
| Current release version | | | |
| Linux amd64 binary URL | | | |
| macOS arm64 binary URL | | | |
| macOS amd64 binary URL | | | |
| Docker image name + tag | | | |
| Minimum NVIDIA driver version | | | |
| CUDA version required | | | |
| Go version for source build | | | |
| GPU detection verification command | | | |
| nvidia-container-toolkit required? | | | |

---

### 3.3 Pain Points Found

*(From Forum, Discord, Reddit, blog comments — Tier 3/4 only. Verify resolutions against Tier 1 before including.)*

| # | Pain point / error | Source | Frequency | Resolution | Page placement |
|---|-------------------| -------|-----------|------------|----------------|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

---

### 3.4 Media & Embed Candidates

| # | Title | URL | Type | Length | Recommended position | Accurate? | Notes |
|---|-------|-----|------|--------|---------------------|-----------|-------|
| 1 | | | | | | | |
| 2 | | | | | | | |
| 3 | | | | | | | |

---

### 3.5 Source Conflicts

*(Record any case where two sources give different information for the same claim. Higher tier wins.)*

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

*Reference for the agent. Shows where this page sits in the full tab structure and what it links to.*

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
│   └── job-types.mdx                  [concept]
├── get-started/
│   ├── setup-paths.mdx                [overview → decision matrix]
│   ├── quickstart.mdx                 [tutorial]
│   ├── join-a-pool.mdx               ← ✅ COMPLETE
│   ├── AI-prompt-start.mdx            [tutorial]
│   ├── realtime-ai-quickstart.mdx     [tutorial]
│   └── batch-ai-quickstart.mdx        [tutorial]
├── setup/
│   ├── overview.mdx                   [how_to — flow map]
│   ├── hardware-requirements.mdx      [reference]
│   ├── install-go-livepeer.mdx        [tutorial]  ← THIS PAGE
│   ├── orch-config.mdx                [how_to]    ← NEXT PAGE
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

| Direction | Page | Link type |
|-----------|------|-----------|
| Upstream (comes from) | `setup/hardware-requirements.mdx` | Reader verified their hardware and is ready to install |
| Upstream (comes from) | `get-started/setup-paths.mdx` | Reader chose the solo orchestrator path |
| Downstream (goes to) | `setup/orch-config.mdx` | Next Steps card — configure the installed binary |
| Escalation | `resources/faq.mdx` | Linked from Warning if GPU not detected |

### Content priority queue (for context)

| Priority | File | Action | Key persona |
|----------|------|--------|-------------|
| **P0** | `resources/faq.mdx` | WRITE | All |
| **P1** | `setup/install-go-livepeer.mdx` | **CREATE ← THIS BRIEF** | A, C, E |
| **P1** | `setup/orch-config.mdx` | CREATE | A, C |
| **P1** | `get-started/AI-prompt-start.mdx` | CREATE | C, E |
| **P1** | `get-started/setup-paths.mdx` | REWRITE | All |

### Intentional docs.json patterns — never touch

- `"anchor": " "` with `"pages": [" "]` — intentional sidebar visual separators
- `/v2/resources/redirect` — intentional routing workaround
