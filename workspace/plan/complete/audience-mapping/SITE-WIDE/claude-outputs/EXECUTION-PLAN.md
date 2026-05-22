# How to Get This Done — Execution Against First-Principles Map

> The site map defines what must exist. This defines how to build it.

**Date:** 2026-04-07

---

## THE ONLY QUESTION THAT MATTERS PER PAGE

Before writing any page: **What human is reading this, what are they trying to accomplish, and what do they need to know to accomplish it?**

If you can't answer that in one sentence, you're not ready to write the page.

---

## PHASE 1: KILL FALSE JOURNEYS (30 min, docs.json only)

Do this first. These stubs actively harm readers — they create dead ends.

Remove from docs.json navigation (do not delete files, just remove from nav):
- Home: 4 × get-started/* stubs ("Coming Soon")
- About: entire guides/ section (empty)
- About: knowledge-hub/contributor-orientation.mdx
- About: network/livepeer-actors/* (4 sub-stubs — merge content into actors.mdx separately)

One PR. No content writing. Just nav surgery.

---

## PHASE 2: CRITICAL PATH CONTENT (in dependency order)

Each item = one Codex worktree = one feature branch = one PR.

### Round 1 — No dependencies, run in parallel

**GPU-1: Install go-livepeer**
- Who: Every operator persona at Step 2
- What: Binary download + platform-specific install + verify
- Sources: go-livepeer GitHub releases, README
- Output: ~10KB, all platforms, working code blocks

**GPU-2: Job Types (rewrite)**
- Who: Personas C (Pro) and E (AI Native) deciding what pipelines to run
- What: Transcoding vs AI types, VRAM per pipeline, realtime vs batch
- Sources: ai-workloads-overview.mdx, ai-workloads-sources.md, go-livepeer AI subnet
- Output: ~8KB, pipeline catalogue with hardware requirements

**GPU-3: FAQ / Troubleshooting (expand)**
- Who: Every operator hitting their first problem
- What: 20 Q&As covering the errors that appear in Discord 3+ times
- Sources: gpu-nodes-ia-planning.md pain points, local-gateways-discord.txt
- Must cover: "Orchestrator not available", port forwarding, active set, pricing, AI VRAM
- Output: ~12KB

**GW-1: Payment Modes (on-chain vs off-chain)**
- Who: Every gateway operator making their first architecture decision
- What: What the two modes are, when to use each, remote signer intro, decision matrix
- Sources: Remote_signers.md, local-gateways-discord.txt, gateways-ia-planning.md
- Output: ~8KB

**DEV-1: AI on Livepeer (rewrite)**
- Who: Developer evaluating whether Livepeer fits their use case
- What: AI network architecture, pipelines available, hosted vs self-hosted, realtime vs batch
- Sources: ai-workloads-sources.md, local-gateways-discord.txt (NaaP/clearinghouse)
- Output: ~10KB

**ABOUT-1: All Actors (comprehensive rewrite)**
- Who: Evaluator building complete mental model
- What: All 4 actor types, roles, incentives, interactions — single comprehensive page
- Sources: existing actors.mdx, mental-model.mdx (gold standard register), gpu-nodes-ia-planning.md, gateways-ia-planning.md
- Output: ~15KB, merge content from 4 sub-stubs

### Round 2 — After Round 1 PRs open

**GPU-4: Join a Pool**
- Who: Persona B (Pool Worker) — no LPT, wants to contribute compute
- What: What pool operation means, install as worker, connect to pool, verify
- Sources: setup-paths-sources.md (Titan Node repo, OrchestratorSiphon), gpu-nodes-ia-planning.md Persona B
- Output: ~8KB

**GPU-5: Setup Paths (decision matrix)**
- Who: Any new operator deciding between solo / pool / AI-only / dual
- What: Decision tree with hardware, LPT requirements, and earning expectations per path
- Sources: setup-paths-sources.md, gpu-nodes-ia-planning.md
- Output: ~6KB, decision table + path cards

**GW-2: Orchestrator Discovery (off-chain)**
- Who: Off-chain gateway operator whose gateway isn't processing jobs
- What: On-chain list endpoint, static list, custom discovery endpoint, Python examples
- Sources: local-gateways-discord.txt (j0sh quotes), j0sh livepeer-python-gateway examples
- Output: ~8KB

**DEV-2: Setup Paths (developer decision tree)**
- Who: Developer who landed on the docs and doesn't know which quickstart
- What: Hosted API vs self-hosted, AI vs video, which SDK — with decision table
- Sources: gateways-ia-planning.md Persona A, ai-workloads-sources.md
- Output: ~5KB

### Round 3 — After GW-1 (Payment Modes) merged

**GW-3: Remote Signers**
- Who: Gateway operator choosing on-chain mode
- What: What remote signers are, hosted vs self-hosted, configuration flags
- Sources: Remote_signers.md, local-gateways-discord.txt (John EliteEncoder hosted signer)
- Output: ~10KB

**GPU-6: Publish Offerings**
- Who: Solo orchestrator who has installed and configured but hasn't gone on-chain
- What: On-chain activation, marketplace registration, what "offerings" means
- Sources: go-livepeer docs, gateways-ia-planning.md (orchestrator offerings)
- Output: ~8KB

### Round 4 — After GW-1 + GW-3 merged

**GW-4: Clearinghouse Architecture**
- Who: Gateway provider (Persona B) building a gateway service
- What: Components (remote signer + auth + accounting + discovery), how they fit, NaaP reference
- Sources: local-gateways-discord.txt ("Yeah that would basically be the clearinghouse"), Remote_signers.md
- Output: ~12KB

### Round 5 — After P2 review complete

**ABOUT-2: Ecosystem / Products**
- Who: Evaluator who just finished reading About and wants to know what's been built
- What: Products on the network (Daydream, Streamplace, Embody, Frameworks), current scale
- Sources: solutions/* pages, home/solutions/* pages
- Output: ~8KB, bridge page to Solutions tab

**DEV-3: Auth Guide**
- Who: Developer moving from quickstart to production
- What: Authentication flows for AI gateway integration
- Sources: Developer tab existing content, gateway API docs

**DEV-4: Production Checklist**
- Who: Developer about to launch
- What: Pre-launch requirements, what to verify
- Sources: Existing production-checklist.mdx (complete the gaps)

---

## THE QUALITY GATE — ONE TEST PER PAGE

Every page before it ships:

```
1. Who is reading this? (one specific person at one specific moment)
2. What are they trying to accomplish?
3. Does the opening paragraph state: subject → what this page does → constraint?
4. Is every factual claim traceable to a primary source?
5. Does the page end with a clear "next step"?
6. Can a person with the stated prerequisites complete the task without leaving the page?
```

All 6 must pass. If any fail, do not merge.

---

## CONTENT STANDARDS (enforced per page)

**Opening paragraph — 3 sentences:**
1. Subject + what it does
2. What this page covers and why it matters
3. Constraint: what it doesn't cover + where that lives

**No:**
- "This page will help you understand..." (document self-description)
- "Depending on your setup..." (conditional hedge opening)
- "Running an orchestrator costs real money" (barrier-first before value)
- "Livepeer is a powerful and flexible..." (enthusiasm without information)

**Yes:**
- "Orchestrators earn by processing jobs routed from Gateways. This page covers [concrete thing]. For [out of scope thing], see [link]."

**Trade-offs:** Every concept/economics/architecture page must name at least one specific failure condition or limitation. "Results may vary" does not count.

---

## DISCORD → DOCS CONVERSION

Every question that appears 3+ times in Discord must have a page. Known list:

| Discord question | Required page | Priority |
|---|---|---|
| On-chain vs off-chain gateway? | GW-1: Payment Modes | Round 1 |
| How do I join a pool without LPT? | GPU-4: Join a Pool | Round 2 |
| How does the clearinghouse work? | GW-4: Clearinghouse | Round 4 |
| How does off-chain discover orchestrators? | GW-2: Discovery | Round 2 |
| What price per pixel should I set? | GPU Nodes pricing guide | Round 5 |
| "Orchestrator not available" error | GPU-3: FAQ | Round 1 |
| Do I need a remote signer? | GW-1 intro + GW-3 | Round 1/3 |
| What is aiModels.json? | GPU-2: Job Types + AI Pipelines | Round 1/5 |
| Realtime vs batch — what's the difference? | GPU-2: Job Types | Round 1 |
| What is NaaP? | DEV-1: AI on Livepeer | Round 1 |

---

## FILES WITH ALL THE RESEARCH (do not re-research)

| What you need | Where it is |
|---|---|
| All GPU operator persona detail | /mnt/project/gpu-nodes-ia-planning.md |
| All Gateway operator persona detail | /mnt/project/gateways-ia-planning.md |
| Community audience + purpose | /mnt/project/community-tab-02-audience-and-purpose.md |
| Community final IA | /mnt/project/community-tab-05-final-ia-and-pages.md |
| Remote signer architecture | /mnt/project/Remote_signers.md |
| Gateway Discord intelligence | /mnt/project/local-gateways-discord.txt |
| Staking/rewards sources | /mnt/project/staking-rewards-sources.md |
| Setup paths sources (pool, siphon) | /mnt/project/setup-paths-sources.md |
| AI workloads overview | /mnt/project/ai-workloads-overview.mdx |
| AI workloads sources | /mnt/project/ai-workloads-sources.md |
| Content strategy rules | /mnt/skills/user/content-strategy/SKILL.md |
| Copy rules | /mnt/skills/user/copy-rules/SKILL.md |
| Page authoring | /mnt/skills/user/page-authoring/SKILL.md |
| Gold standard page (concept) | repo: _MY_PROCESS/EXEMPLARS/concept-exemplar.md |
| Gold standard page (instruction) | repo: _MY_PROCESS/EXEMPLARS/instruction-exemplar.md |
