Here's the plan. Phased, sequenced, with dependencies called out. Built around your existing brief-driven Codex workflow.

## Plan structure at a glance

| Phase | What                  | Duration  | Output                                              |
| ----- | --------------------- | --------- | --------------------------------------------------- |
| 0     | Pre-work decisions    | 1 day     | Locked answers on 5 outstanding questions           |
| 1     | IA scaffolding        | 1-2 days  | Stub tree, docs.json wired, redirects in place      |
| 2     | Concepts spine        | 3-5 days  | 4 concept pages live                                |
| 3     | Learn + Where-to-find | 3-5 days  | 3 learn + 7 routing pages live                      |
| 4     | Quickstart trio       | 5-7 days  | 3 activation moments working end-to-end             |
| 5     | Mechanical move pass  | 1-2 days  | Existing files at new paths, links updated          |
| 6     | Build subgroups       | 4-6 weeks | ~40 build pages                                     |
| 7     | Guides                | 3-5 weeks | ~25 guides pages                                    |
| 8     | Reference + Resources | 1-2 weeks | ~15 reference + resources pages                     |
| 9     | Cleanup pass          | 3-5 days  | REVIEW flags cleared, voice pass, redirects removed |

Total: roughly 11-15 weeks of agent-execution time, parallelizable across 2-4 concurrent Codex tasks.

## Phase 0 — Pre-work decisions

Five things to lock before any writing begins:

1. **`portal.mdx` audit.** Read it, decide: salvageable into `index.mdx`, or archive entirely? (15-min task.)
2. **`oss-stack.mdx` vs `developer-stack.mdx`.** Pick one as base for `concepts/repo-map.mdx`. `developer-stack.mdx` has [Official]/[Community] tagging — likely winner. (15-min task.)
3. **AI quickstart on-ramp.** Cloud SPE community gateway (`dream-gateway.livepeer.cloud`) or self-hosted-from-scratch? Cloud SPE is faster for the reader; self-hosted is more honest about what "network-direct" means. Recommend: lead with Cloud SPE, link self-hosted at bottom.
4. **pymthouse boundary.** Does `clearinghouse-pattern.mdx` describe the pattern abstractly with pymthouse as the live example, or does pymthouse get its own page? Recommend: one page, pymthouse-as-implementation-of-the-pattern.
5. **`local-testnet-deployment.mdx.mdx` bug.** Delete the doubled-extension file before any move pass. (5-min task.)

Owner: you (Wonderland) make all five calls. No SME required.

## Phase 1 — IA scaffolding

Goal: get the new tree building green, with stubs, before any real content lands.

**Codex task 1.1: scaffold.** Create the full ~80-page tree as stubs. Each stub: frontmatter only (`title`, `description`, `pageType`, `audience`), single H1, one paragraph saying "This page is in progress." No content claims yet. Skill: `page-authoring` for frontmatter requirements.

**Codex task 1.2: docs.json.** Update navigation to reflect new IA. Use the fragment-assembler pattern (`tools/config/docs-fragments/`). Drop the old peer sections, add the new ones.

**Codex task 1.3: redirects.** Every old path → new path goes in `docs.json` redirects. Without this, every external link to the old paths 404s.

Done when: `npx mintlify dev` builds green, sidebar renders the new tree, old URLs redirect.

## Phase 2 — Concepts spine

The four locked concepts pages. These set the framing for everything else.

**Codex task 2.1: `concepts/repo-map.mdx`.** Merge `developer-stack.mdx` + `oss-stack.mdx`. Mostly existing content — restructure, dedupe, apply voice. Mid-effort.

**Codex task 2.2: `concepts/landscape.mdx`.** New. Five mental models (the five personas in narrative form), layer disambiguation, "coming from OpenAI/Mux/Modal" framing. Substantial brief required.

**Codex task 2.3: `concepts/infra-stack.mdx`.** New. The five persona infra maps from Task 1 of this thread, rendered as MDX with Mermaid diagrams. Content already drafted in `persona-infra-maps.md`.

**Codex task 2.4: `concepts/overview.mdx`.** New. Short orienting page — what's in this tab, who it's for, where to start. Cross-links to all four below.

**Dependency:** all four block Phase 3 and 4 (Learn and Quickstart pages link back to Concepts for framing).

## Phase 3 — Learn + Where-to-find

Three Learn pages plus seven routing pages.

**Codex task 3.1: `learn/ai-and-agents.mdx`.** Hydrate from existing `concepts/ai-on-livepeer.mdx` + `build/workload-fit.mdx` (decision tree section). Add real-time AI surfaces explicitly. Network-direct only — no Studio framing.

**Codex task 3.2: `learn/video-and-livestream.mdx`.** **REWRITE** of `concepts/video-on-livepeer.mdx`. Most carefully scoped task in this phase — current page is entirely Studio-API-centric. New page: self-hosted gateway + Frameworks as primary, Studio acknowledged via routing only.

**Codex task 3.3: `learn/applications.mdx`.** New. How network-direct surfaces compose into an app — AI Jobs API + self-hosted gateway + BYOC + ComfyStream + ui-kit. Reference Solutions only as alternative paths.

**Codex task 3.4: `learn/where-to-find/` x7 routing pages.** Each is one CardGroup pointing out. Solutions-paths, studio-paths, operating-a-gateway, observability, protocol-extending, contributing, opportunities. Single Codex task for all seven — they're tiny and share a template.

**Parallelizable:** 3.1, 3.2, 3.3 in parallel. 3.4 batched as one.

## Phase 4 — Quickstart trio

The three named activation moments. Highest-value pages in the whole tab.

**Codex task 4.1: `build/ai-and-agents/ai-jobs-direct-quickstart.mdx`.** NEW. 10-min curl against Cloud SPE community gateway. RFP-named deliverable (ii.4).

**Codex task 4.2: `build/video/transcoding-direct-quickstart.mdx`.** NEW. Network-direct path (self-hosted gateway). Separate from Studio version that's under Rick's review.

**Codex task 4.3: `build/ai-and-agents/realtime-ai/comfystream/comfystream-quickstart.mdx`.** MOVE existing `get-started/comfystream-quickstart.mdx`. Verify still accurate against `livepeer/comfystream` README.

**Why early:** each persona has a "first thing I do" page. Until those three exist, the tab cannot fulfill any persona's journey. Everything else is depth on top of a working entry point.

**Parallelizable:** all three.

## Phase 5 — Mechanical move pass

Single Codex task, single PR. No content changes, only `git mv` + link updates.

- ~25 file moves per the "Move and rename" table from earlier
- Internal links updated via search-and-replace
- Tag the commit so it's separable in git history

Owner: one agent, sequential execution, one commit.

**Why separate:** git blame preservation. Move-and-rewrite in the same PR loses the history. Move-first then rewrite-in-place gives clean blame on both sides of the change.

## Phase 6 — Build subgroups

Roughly 40 net-new pages. Sequenced by dependency and persona priority.

### 6a — ai-and-agents (P0, ~2 weeks)

Highest user demand. Most net-new content. Order within subgroup:

1. `overview.mdx`, `ai-pipelines.mdx`, `ai-sdks-overview.mdx`, `model-support.mdx` (model-support exists, others new)
2. `realtime-ai/overview.mdx`, `realtime-ai/comfystream/*` (overview + workflow-authoring + comfystream-as-byoc — quickstart already done in Phase 4)
3. `realtime-ai/pytrickle/*` (4 pages, mostly new)
4. `ai-stream-pack/*` (6 pages, mostly new)
5. `agents/*` (7 pages — agent-sdk and creative-kit are stubs until packages ship on npm; storyboard is the application page)
6. `ecosystem-mcp/*` (3 pages)

Each numbered group is one Codex task or two parallel tasks.

### 6b — compute (BYOC) (~1 week)

`compute/byoc/overview.mdx` exists. Add quickstart, architecture, production, sdk, reference-pipelines. 5 new pages, 1 moved.

### 6c — plugins-and-extensions (NaaP) (~1 week)

Naap.mdx is substantive — split into overview + naap-architecture. Add building-a-plugin, plugin-runtime, plugin-registry. 3 new + 2 from split.

### 6d — video (~1.5 weeks)

9 pages: overview, ingest-and-playback, live-events, vod-and-recording, codec-support, storage-and-archival, lpms-integration, frameworks-network. (Quickstart already done in Phase 4.) Most new — only `concepts/video-on-livepeer.mdx` source feeds these and that one's been rewritten in Phase 3.

### 6e — alt-gateways (~1 week)

4 pages. Source material: `Remote_signers.md` (Notion export) + the local-gateways Discord transcript + the j0sh repo. Persona E content.

### 6f — applications (~3 days)

5 pages. Mostly ui-kit recipes against any gateway. Low net-new — most of the API surface is documented in reference pages.

### 6g — tutorials (~1 week)

5 pages total. 3 move from existing. 2 new (streamplace-byoc-integration, eliza-livepeer-plugin).

**Parallelization:** 6a is serial within itself (overview before pipelines before SDKs). 6b through 6g can run 2-3 in parallel because they touch different subgroups.

## Phase 7 — Guides

~25 pages. Most subgroups are net-new content.

1. **payments** (~1.5 weeks) — 8 pages. Overview, probabilistic-micropayments, per-second-compute, eth-escrow-and-deposits, remote-signer, clearinghouse-pattern (from pymthouse), custom-auth-and-billing, orchestrator-selection-and-pricing. Source-heavy — verify against go-livepeer PRs, `Remote_signers.md`, BYOC PR #3641.
2. **transport** (~3 days) — 4 pages. Trickle protocol, ingress-egress, data-channels.
3. **gateways-as-developer** (~1 week) — 4 pages. Self-hosted-decision exists (`concepts/running-a-gateway.mdx`), others new.
4. **auth-and-security** (~1 week) — 3 pages. ai-authentication exists in some form, others new.
5. **observability-and-debugging** (~1 week) — 3 pages. All new.
6. **local-development** (~3 days) — 4 pages. local-testnet exists, others new.
7. **help.mdx** (~half day) — exists.

**Parallelization:** payments serial within itself (foundational order matters). Other subgroups parallelizable.

## Phase 8 — Reference + Resources

~15 pages.

- Move existing `resources/reference/*` → `resources/reference/` (was already a folder, just hoisted under Resources properly)
- Move `resources/compendium/*` and `resources/knowledge-hub/*` up one level (flatten)
- Add new reference pages: ai-gateway-api, ui-kit, byoc-sdk, livepeer-python-gateway, overview

Reference pages are mostly mechanical once OpenAPI specs are stable. Bulk-generate from spec where possible.

## Phase 9 — Cleanup pass

- Clear all REVIEW flags (5 in model-support, 1 in comfystream, others scattered). Each is either verified against canonical source or rewritten to not need verification.
- Voice pass against `livepeer-voice` skill across all new pages
- `copy-rules` and `prose-quality` final pass on quickstart pages and learn pages (highest-traffic)
- Remove redirect entries that have served their purpose (per Mintlify recommendation, leave for ~30 days)
- pageType taxonomy enforcement check
- Final navigator.mdx audit — does it still route correctly given the new IA?

## How tasks are shaped

Per your established Codex pattern, each task is one `.md` brief with:

1. **Step 0 — Verify.** Confirm base branch is `docs-v2-dev`, confirm target file path doesn't exist (for new pages) or matches expected state (for moves).
2. **Scope.** Single page or tight cluster (e.g., the seven routing pages as one batch).
3. **FORBIDDEN.** Explicit list of files NOT to touch. Particularly important during the move pass.
4. **Source material.** Pointers to canonical sources (repo paths, PR numbers, existing pages).
5. **Skills referenced.** Always page-authoring + prose-quality + copy-rules at minimum. Add livepeer-voice, content-brief, structure-rules where applicable.
6. **Verification.** Every claim either has a verifiable source named, or is rewritten to not need verification.
7. **One commit.** Branch off `docs-v2-dev`, commit, PR.

## Three risks worth naming now

**One: Studio framing creeps back in.** Easiest mistake on this whole project. Every Build page must be Studio-free. Recommend a CI check: grep for `livepeer.studio` or `Studio API` under `/v2/developers/build/` and fail the build if found outside of `learn/where-to-find/studio-paths.mdx`. Mechanical guardrail beats reviewer vigilance.

**Two: REVIEW flag debt.** Five+ existing pages carry REVIEW flags that previously assumed an SME. With no SME, every one needs verification work. Recommend: Phase 9 cleanup is ambitious unless we resolve them as we touch each page in Phase 5/6/7. Better: add "Clear REVIEW flags in this file" as a sub-step of every Phase 5/6/7 task that touches a page with flags.

**Three: Storyboard, agent-sdk, creative-kit stubs.** Three pages (`agents/storyboard.mdx`, `agents/agent-sdk.mdx`, `agents/creative-kit.mdx`) have a verifiable application live at storyboard-rust.vercel.app but unpublished npm packages. We can write the application page now. The two SDK pages would be stubs that flag "package not yet on npm." Recommend: write storyboard.mdx as a real page, leave the two SDK pages out of Phase 6a entirely. Add them when @livepeer/agent and @livepeer/creative-kit ship.

## Three things still requiring decisions

**One.** Concurrency. How many parallel Codex tasks can you reasonably oversee at once? Two is conservative, four is aggressive given review-bandwidth from one person. The plan assumes 2-3 average.

**Two.** Whether to write all briefs up front, or brief-then-write rolling. Front-loaded briefs give you a complete picture and let you spot IA gaps before execution. Rolling briefs let you learn from early pages. Recommend front-loaded briefs for Phases 2-4 (the spine), rolling for 6-7 (the depth).

**Three.** Whether to publish phases incrementally (live as each phase lands) or hold until Phase 9 completion. Incremental builds confidence and surfaces problems early. Holding gives a cleaner launch story. Recommend: incremental, with redirects covering the gap when an old path retires before its replacement is fully written.

Want this saved to file?
