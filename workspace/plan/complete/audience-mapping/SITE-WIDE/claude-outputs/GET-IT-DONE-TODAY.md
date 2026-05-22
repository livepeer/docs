# Get It Done Today — Execution Plan

> The exact sequence to ship Livepeer docs v2 content-complete.
> Focus: content only. Scripts, CI, and tooling are out of scope.

**Date:** 2026-04-07  
**Goal:** Content-complete across all 9 tabs. Every page either DONE or has a Codex brief.

---

## THE PROCESS

Three phases, in order:

```
Phase 1: TRIAGE (1 session — this session)
  → Produce MASTER-SITEMAP-SUCCESS.md       ✅ DONE
  → Produce CONTENT-PRIORITY-QUEUE.md       ✅ DONE (this file)
  → Produce TAB-COMPLETION-FRAMEWORK.md     ← next file
  → Produce CODEX-CONTENT-BRIEFS.md         ← final file

Phase 2: WRITE (multiple Codex sessions)
  → Each content gap → one Codex brief → one PR
  → Priority order: P1 blockers first, then P2, then P3

Phase 3: REVIEW + SHIP
  → Each page through quality gate (content-strategy skill test)
  → Nav audit — no stubs in published nav
  → Cross-tab link check
```

---

## THE PRIORITY QUEUE

### 🔴 P1 — BLOCKERS (must exist before any tab ships)

These gaps mean a reader's journey breaks completely. Fix these first.

| ID | Page | Tab | What's needed | Size estimate | Persona blocked |
|---|---|---|---|---|---|
| P1-01 | `network/actors.mdx` | About | Rewrite — merge 4 sub-stubs, comprehensive flat page with all actors | ~15KB | All evaluators |
| P1-02 | `get-started/join-a-pool.mdx` | Orchestrators | Write from scratch — pool worker full journey | ~8KB | Persona B (Pool Worker) |
| P1-03 | `setup/install-go-livepeer.mdx` | Orchestrators | Write from scratch — binary install, all platforms | ~10KB | Personas A, B, C |
| P1-04 | `concepts/payment-modes.mdx` | Gateways | Write — on-chain vs off-chain decision page | ~8KB | Persona A (Graduate) |
| P1-05 | `setup/remote-signers.mdx` | Gateways | Write — post Q4 2025 PRs #3791/#3822 | ~10KB | Personas A, B |
| P1-06 | `guides/payments-and-pricing/clearinghouse.mdx` | Gateways | Write — clearinghouse architecture | ~12KB | Persona B (Provider) |
| P1-07 | `guides/advanced-operations/orchestrator-discovery-offchain.mdx` | Gateways | Write — off-chain discovery, j0sh Python examples | ~8KB | Persona A |
| P1-08 | `concepts/ai-on-livepeer.mdx` | Developers | Rewrite — AI subnet accuracy, NaaP, clearinghouse | ~10KB | AI developers |
| P1-09 | `resources/faq.mdx` | Orchestrators | Expand — troubleshooting, confirmed journey blocker | ~12KB | All operators |
| P1-10 | `concepts/job-types.mdx` | Orchestrators | Rewrite — AI pipeline types current | ~8KB | Personas C, E |

### 🟡 P2 — JOURNEY GAPS (tab ships rough without these, ships well with them)

| ID | Page | Tab | What's needed |
|---|---|---|---|
| P2-01 | `get-started/setup-paths.mdx` | Orchestrators | Decision matrix: solo / pool / AI-only |
| P2-02 | `setup/publish-offerings.mdx` | Orchestrators | On-chain activation — what, why, how |
| P2-03 | `advanced/run-a-pool.mdx` | Orchestrators | Pool operation — full guide |
| P2-04 | `advanced/ai-pipelines.mdx` | Orchestrators | aiModels.json schema, containers, warm loading |
| P2-05 | `guides/node-pipelines/dual-ai-video.mdx` | Gateways | AI + video on same/separate nodes |
| P2-06 | `guides/ai/authentication.mdx` | Developers | Auth flows for AI gateway integration |
| P2-07 | `guides/ai/production-checklist.mdx` | Developers | Complete production guidance |
| P2-08 | `build/workload-fit.mdx` | Developers | AI vs video vs hybrid matrix |
| P2-09 | `get-started/setup-paths.mdx` | Developers | Which quickstart? Pre-decision tree |
| P2-10 | `guides/governance/processes.mdx` | Delegators | GovWorks Feb 2025 process update |
| P2-11 | `guides/treasury/proposals.mdx` | Delegators | Current proposal submission steps |
| P2-12 | `protocol/core-mechanisms.mdx` | About | Complete the unfinished sections |

### 🟢 P3 — POLISH (nice to have, makes docs excellent rather than good)

| ID | Page | Tab | What's needed |
|---|---|---|---|
| P3-01 | `concepts/economics.mdx` | Orchestrators | Earnings calculator; stake-to-work ratio |
| P3-02 | `setup/enterprise-and-data-centres.mdx` | Orchestrators | Enterprise entry point |
| P3-03 | `guides/tutorials/go-production.mdx` | Gateways | Production readiness — complete |
| P3-04 | `concepts/tokenomics.mdx` | Delegators | Verify post-AI subnet numbers |
| P3-05 | `resources/reference/network-metrics.mdx` | About | Real data or live component |
| P3-06 | `knowledge-hub/evaluating-livepeer.mdx` | About | Write — evaluator path |
| P3-07 | `knowledge-hub/contributor-orientation.mdx` | About | Write — contributor path |
| P3-08 | `about/roadmap.mdx` | Home | Redirect or short summary |
| P3-09 | Community workstreams page | Community | Route volatile content to Forum |
| P3-10 | Solutions bridge page | About | Link/page to "what's been built" |

---

## STUBS TO REMOVE FROM NAV (not fix — just remove)

These pages exist but should not appear in navigation until written:

| Page | Tab | Action |
|---|---|---|
| `get-started/ai-pipelines.mdx` | Home | Remove from nav until P1-08 is done |
| `get-started/build-on-livepeer.mdx` | Home | Remove from nav |
| `get-started/stream-video.mdx` | Home | Remove from nav |
| `get-started/use-livepeer.mdx` | Home | Remove from nav |
| `guides/` section (About) | About | Remove section from nav until populated |
| `knowledge-hub/contributor-orientation.mdx` | About | Remove from nav |
| `knowledge-hub/evaluating-livepeer.mdx` | About | Remove from nav |
| `reference/network-metrics.mdx` | About | Expand or remove from nav |

---

## WHAT TO DO RIGHT NOW (ordered)

### Step 1 — Eliminate nav stubs (30 minutes, docs.json edits)

Remove the 4 Home get-started/* stubs from docs.json navigation. They show as "Coming Soon" — dead ends for every reader. This is a docs.json edit, not content work.

Same for the 4 About knowledge-hub stubs.

### Step 2 — P1 content: Codex briefs (this session)

For each P1 blocker, produce a Codex agent brief using the content-brief skill. Brief structure:
- Source material (where to find the facts)
- Audience and reader state
- Page type and promise
- Forbidden scope
- Output spec

### Step 3 — P1 content: Codex execution (parallel sessions)

Each brief → one Codex worktree → one feature branch → one PR. Do not batch. Atomic commits only.

### Step 4 — P2 content: after P1 PRs land

P2 runs in parallel with P1 review. Same brief → Codex → PR pattern.

### Step 5 — Final nav audit before ship

After all P1 + P2 PRs merge:
- Run `node tests/run-all.js` for broken links
- Verify no stubs remain in docs.json nav
- Check cross-tab links (About → Solutions, About → Gateways, etc.)

---

## DISCORD-CONFIRMED GAPS (source intelligence)

These questions appear repeatedly in Discord and currently have NO linkable doc page:

| Discord question | Correct answer location | Status |
|---|---|---|
| "What is the difference between on-chain and off-chain gateway?" | `gateways/concepts/payment-modes.mdx` | 🔴 P1 — doesn't exist |
| "How do I join a pool as a worker without running a full orchestrator?" | `orchestrators/get-started/join-a-pool.mdx` | 🔴 P1 — stub |
| "How does the clearinghouse work?" | `gateways/guides/payments-and-pricing/clearinghouse.mdx` | 🔴 P1 — doesn't exist |
| "How does the off-chain gateway discover orchestrators?" | `gateways/guides/advanced-operations/orchestrator-discovery-offchain.mdx` | 🔴 P1 — doesn't exist |
| "What price per pixel should I set?" | `orchestrators/guides/config-and-optimisation/pricing.mdx` | 🟡 P2 — thin |
| "Why am I getting 'Orchestrator not available' errors?" | `orchestrators/resources/faq.mdx` | 🔴 P1 — no troubleshooting |
| "What is the difference between realtime AI and batch AI?" | `orchestrators/concepts/job-types.mdx` | 🔴 P1 — outdated |
| "Do I need a remote signer?" | `gateways/setup/remote-signers.mdx` | 🔴 P1 — doesn't exist |
| "How do I configure aiModels.json?" | `orchestrators/advanced/ai-pipelines.mdx` | 🟡 P2 — thin |
| "What are the active workstreams and who leads them?" | `community/community/workstreams.mdx` | 🟡 volatile — route to Forum |

---

## SUCCESS CRITERIA — TAB-BY-TAB SHIP GATES

A tab is content-complete when:

1. Every page in published nav has >2KB of substantive content
2. Every primary persona's critical path question has a linkable page answer
3. All Discord-confirmed gaps in that tab are resolved
4. The zero-to-hero journey (from "what is this?" to operational/participating) has no broken steps
5. The tab's opening portal/overview page states a clear value proposition in the first two sentences

---

## FILE MAP — ALL SUPPORTING RESEARCH

Use these to source content for Codex briefs. DO NOT re-research. The work is done.

| Concern | Canonical file location |
|---|---|
| Orchestrator personas (A–E) | `workspace/plan/active/_MY_PROCESS/` → gpu-nodes-ia-planning.md |
| Gateway personas (A–C) | `workspace/plan/active/_MY_PROCESS/` → gateways-ia-planning.md |
| Developer personas | `workspace/plan/active/CONTENT-WRITING/context-packs/developers-*` |
| Delegator personas | `workspace/plan/active/CONTENT-WRITING/context-packs/delegators-*` |
| Discord intelligence | `workspace/plan/active/CONTENT-WRITING/context-packs/` — discord logs |
| Remote signer architecture | `Remote_signers.md` (project file) |
| Gateway local Discord | `local-gateways-discord.txt` (project file) |
| Contract addresses | `about/protocol/blockchain-contracts.mdx` — canonical |
| IA framework | `_MY_PROCESS/03_IA-STRUCTURE/canonical-ia-and-repo-folder-framework.md` |
| Voice rules | `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` |
| Page templates | `snippets/templates/pages/` |
| Exemplars (gold standard) | `_MY_PROCESS/EXEMPLARS/` |
