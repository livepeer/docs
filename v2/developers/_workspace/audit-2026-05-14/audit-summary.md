# Audit 2026-05-14 — Developers tab content state

**Source of truth for IA:** `v2/developers/_workspace/notes.mdx`
**Compared against:** `v2/developers/`, `v2/developers1/`, `v2/developers1/_workspace/files-to-add/`
**Audit type:** state-of-play after intervening content writing

## Headline

The new tree has grown substantially since the 2026-05-12 scaffold:

| Metric                                     | 2026-05-12 scaffold       | 2026-05-14 now                                 | Delta                              |
| ------------------------------------------ | ------------------------- | ---------------------------------------------- | ---------------------------------- |
| Total published `.mdx` in `v2/developers/` | 132                       | **138**                                        | +6 (5 IA-extras, 1 portal restore) |
| Pages with real content (no STATUS marker) | 12                        | **80**                                         | +68                                |
| Stubs remaining (all stub types)           | 119                       | **58**                                         | −61                                |
| IA pages not yet created                   | 1 (just dropped data-mcp) | 3 (agent-sdk, creative-kit, livepeer-data-mcp) | +2 deferred                        |
| Studio violations in tree                  | 0                         | 0 ✓                                            | —                                  |
| REVIEW: flags in tree                      | 0                         | 0 ✓                                            | —                                  |

**~70 stubs were populated by an intervening writer.** Quality of those is not graded here — this audit is structural, not stylistic.

## Section 1 — What still needs writing (the 58 stubs)

### 1a. STUB (45) — NET-NEW pages with no source content

Each is `frontmatter + STUB comment + "This page is in progress."` Sizes 600–910 B.

| Subgroup                                     | Count  | Pages                                                                                                                                     |
| -------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `build/ai-and-agents/ai-stream-pack/`        | 4      | `streamdiffusion`, `streamdiffusion-v2`, `superresolution`, `audio-transcription`, `comfyui-rtc`                                          |
| `build/ai-and-agents/agents/`                | 3      | `storyboard`, `llm-provider-routing`, `eliza-integration`, `eip-8004-identity`                                                            |
| `build/ai-and-agents/realtime-ai/pytrickle/` | 1      | `data-channels`                                                                                                                           |
| `build/video/`                               | 3      | `codec-support`, `storage-and-archival`, `frameworks-network`                                                                             |
| `build/compute/` (root + byoc)               | 5      | `overview`, `byoc/byoc-architecture`, `byoc/byoc-production`, `byoc/byoc-sdk`, `byoc/reference-pipelines`                                 |
| `build/plugins-and-extensions/`              | 3      | `building-a-plugin`, `plugin-runtime`, `plugin-registry`                                                                                  |
| `build/alt-gateways/`                        | 3      | `remote-signer-integration`, `livepeer-python-gateway`, `browser-and-mobile`                                                              |
| `build/applications/`                        | 4      | `overview`, `frontend-react-player`, `frontend-react-broadcast`, `frontend-core-web`                                                      |
| `guides/transport/`                          | 3      | `trickle-protocol`, `trickle-ingress-egress`, `data-channels`                                                                             |
| `guides/gateways-as-developer/`              | 4      | `overview`, `community-gateway`, `self-hosted-decision`, `orchestrator-session`                                                           |
| `guides/auth-and-security/`                  | 2      | `overview`, `access-control`                                                                                                              |
| `resources/reference/`                       | 8      | `overview`, `ai-gateway-api`, `go-livepeer-http`, `livepeer-ai-js`, `livepeer-ai-python`, `ui-kit`, `byoc-sdk`, `livepeer-python-gateway` |
| **Total**                                    | **45** |                                                                                                                                           |

### 1b. REWRITE-STUB (9) — source exists but was Studio/REVIEW-tainted

Clean rewrite required against canonical sources. STATUS comment in each file lists the source path + violations.

| Page                                                   | Source                                                                             | Notes                                                                 |
| ------------------------------------------------------ | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `navigator.mdx`                                        | `developers1/navigator.mdx` (9.7 KB, 6 Studio)                                     | Intent-routing rewrite. **Has files-to-add draft: 8.4 KB**            |
| `learn/video-and-livestream.mdx`                       | `developers1/learn/video-on-livepeer.mdx` (8 KB, 7 Studio)                         | Whole-page network-direct rewrite. **Has files-to-add draft: 8.2 KB** |
| `build/tutorials/ai-agent-on-livepeer.mdx`             | `developers1/build/tutorials/build-an-ai-agent-on-livepeer.mdx` (8.7 KB, 3 Studio) | **Has files-to-add draft: 8.6 KB**                                    |
| `build/tutorials/ipfs-video-integration.mdx`           | `developers1/build/tutorials/ipfs-video-integration.mdx` (6.2 KB, 1 Studio)        | 1-line strip. **Has files-to-add draft: 6.2 KB**                      |
| `build/tutorials/token-gated-video.mdx`                | `developers1/build/tutorials/token-gated-video.mdx` (9.3 KB, 1 Studio)             | 1-line strip. **Has files-to-add draft: 9.3 KB**                      |
| `guides/auth-and-security/ai-authentication.mdx`       | `developers1/guides/ai/authentication.mdx` (5.3 KB, 4 Studio)                      | **Has files-to-add draft: 5.2 KB**                                    |
| `guides/observability-and-debugging/job-debugging.mdx` | `developers1/guides/ai/troubleshooting.mdx` (7.2 KB, 6 Studio)                     | **Has files-to-add draft: 7.1 KB (ai-troubleshooting.mdx)**           |
| `guides/production-hardening-checklist.mdx`            | `developers1/guides/ai/production-checklist.mdx` (5.6 KB, 4 Studio)                | **Has files-to-add draft: 5.5 KB**                                    |
| `guides/help.mdx`                                      | `developers1/resources/compendium/developer-help.mdx` (11.9 KB, 2 Studio)          | No files-to-add draft                                                 |

**Key finding:** 8 of these 9 REWRITE-STUBs have a ready-to-use draft in `developers1/_workspace/files-to-add/`. The writer can swap-and-edit. See §3 below.

### 1c. SPLIT-STUB (2) — single source → multiple targets

| Page                                                 | Source                                                | Notes                               |
| ---------------------------------------------------- | ----------------------------------------------------- | ----------------------------------- |
| `build/plugins-and-extensions/overview.mdx`          | `developers1/guides/beta-projects/naap.mdx` (12.5 KB) | Extract overview-shaped content     |
| `build/plugins-and-extensions/naap-architecture.mdx` | same source                                           | Extract architecture-shaped content |

### 1d. MERGE / MERGE-STUB (2)

| Page                                 | Sources                                                                                                                                                                                 | Notes                              |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `learn/ai-and-agents.mdx`            | `developers1/learn/ai-on-livepeer.mdx` (14 KB) + `developers1/build1/workload-fit.mdx` (9 KB)                                                                                           | MERGE + REWRITE for network-direct |
| `resources/example-applications.mdx` | `developers1/resources/compendium/example-applications.mdx` (1.7 KB) + `developers1/concepts/builders-guide.mdx` (16.8 KB) + `developers1/resources/compendium/resources.mdx` (14.1 KB) | Three-way merge                    |

## Section 2 — Five "extras" not in locked IA (decisions needed)

Created by the intervening writer; substantial content; NOT in `notes.mdx` IA. Each needs Wonderland's call.

| Page                                 | Bytes | What it covers                                  | Recommendation                                                                                                            |
| ------------------------------------ | ----- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `build/video/ingest.mdx`             | 5,954 | RTMP ingest config (stream creation, etc.)      | **Overlap with `build/video/ingest-and-playback.mdx` (5,862 B)** — merge or pick one                                      |
| `build/video/player.mdx`             | 5,082 | @livepeer/react Player embedding (HLS + WebRTC) | **Belongs at `build/applications/frontend-react-player.mdx`** (currently 655 B stub) — rename + move                      |
| `build/video/transcoding.mdx`        | 6,486 | Direct segment transcoding via broadcaster      | **Overlap with `build/video/transcoding-direct-quickstart.mdx` (12.5 KB)** — merge or pick one                            |
| `guides/payments/access-control.mdx` | 5,416 | JWT signing keys for playback                   | **Belongs at `guides/auth-and-security/access-control.mdx`** (currently 768 B stub) — rename + move                       |
| `guides/payments/viewership.mdx`     | 6,112 | Viewership metrics for streams                  | **No IA slot** — add to IA as `guides/observability-and-debugging/viewership.mdx` OR merge into `tooling-and-metrics.mdx` |

After deciding, IA either gains 5 pages (added to `notes.mdx` + docs.json) or these are merged/renamed and dropped from the extras list.

## Section 3 — `files-to-add/` drafts (22 files) — quick-win source

Stage-ready drafts in `developers1/_workspace/files-to-add/`. Most directly populate stubs in the new tree.

### 3a. Immediate-use mapping (10 drafts → 8 stubs)

| Draft (bytes)                            | Maps to                                                | Stub status                                        |
| ---------------------------------------- | ------------------------------------------------------ | -------------------------------------------------- |
| `ai-authentication.mdx` (5,194)          | `guides/auth-and-security/ai-authentication.mdx`       | REWRITE-STUB                                       |
| `ai-production-checklist.mdx` (5,542)    | `guides/production-hardening-checklist.mdx`            | REWRITE-STUB                                       |
| `ai-troubleshooting.mdx` (7,108)         | `guides/observability-and-debugging/job-debugging.mdx` | REWRITE-STUB                                       |
| `navigator.mdx` (8,441)                  | `navigator.mdx`                                        | REWRITE-STUB                                       |
| `tutorial-ai-agent.mdx` (8,591)          | `build/tutorials/ai-agent-on-livepeer.mdx`             | REWRITE-STUB                                       |
| `tutorial-ipfs-video.mdx` (6,176)        | `build/tutorials/ipfs-video-integration.mdx`           | REWRITE-STUB                                       |
| `tutorial-token-gated-video.mdx` (9,256) | `build/tutorials/token-gated-video.mdx`                | REWRITE-STUB                                       |
| `video-access-control.mdx` (6,587)       | `guides/auth-and-security/access-control.mdx`          | STUB                                               |
| `video-on-livepeer.mdx` (8,159)          | `learn/video-and-livestream.mdx`                       | REWRITE-STUB                                       |
| `pytrickle-reference.mdx` (8,441)        | `resources/reference/pytrickle-reference.mdx`          | already CONTENT (8.6 KB) — compare and pick better |

### 3b. Drafts already superseded (writer wrote new versions)

Existing `v2/developers/` page is already CONTENT and larger. Drafts can stay as workspace history or be archived.

| Draft (bytes)                             | Existing page                                                    | Page bytes                                            |
| ----------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------- |
| `video-create-livestream.mdx` (6,206)     | `build/video/live-events.mdx`                                    | 5,295 — draft might be useful as merge candidate      |
| `video-monitor-stream-health.mdx` (4,940) | `guides/observability-and-debugging/orchestrator-monitoring.mdx` | 5,729 — slightly larger live                          |
| `video-upload-asset.mdx` (3,710)          | `build/video/vod-and-recording.mdx`                              | 4,679 — slightly larger live                          |
| `apis-expanded.mdx` (7,623)               | `resources/reference/apis.mdx`                                   | 6,601 — draft is BIGGER, compare for use              |
| `pricing-rate-limits.mdx` (4,751)         | `resources/reference/pricing-rate-limits.mdx`                    | 7,175 — live is bigger, draft probably older          |
| `sdks-expanded.mdx` (7,245)               | `resources/reference/sdks.mdx`                                   | 6,933 — draft might be more comprehensive             |
| `video-playback.mdx` (5,145)              | `build/video/ingest-and-playback.mdx`                            | 5,862 — could split or merge                          |
| `video-webhooks.mdx` (6,958)              | no IA slot for webhooks specifically                             | could go to `build/video/live-events.mdx` or new page |

### 3c. Drafts with no clear IA destination

| Draft (bytes)                                 | Notes                                                                                                                                             |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contributor-quickstart-expanded.mdx` (6,528) | Routes to v2/community/contribute/ — not Developers IA                                                                                            |
| `sdk-gateway.mdx` (11,253)                    | "SDK gateway" concept — substantial. Could become `build/alt-gateways/` content or `build/applications/frontend-core-web.mdx`. Wonderland decides |
| `setup-paths.mdx` (5,754)                     | Superseded by `index.mdx` + `navigator.mdx`                                                                                                       |
| `video-quickstart-redirect.mdx` (2,180)       | Just a redirect stub — skip                                                                                                                       |

## Section 4 — `v2/developers1/` remaining content

**52 live files still in `developers1/`** (excluding \_workspace, \_design, x-deprecated, \*1 duplicate folders).

### 4a. Used as source for stubs in new tree (status: SOURCED — pending writer work)

These files are referenced in STATUS comments of current REWRITE-STUB / MERGE-STUB / SPLIT-STUB pages. Stay in `developers1/` until the corresponding new-tree page is written.

| developers1 path                                                                                                                                                    | New-tree target                                                                            | Status                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| `navigator.mdx`                                                                                                                                                     | `navigator.mdx`                                                                            | REWRITE-STUB                                                |
| `concepts/builders-guide.mdx`                                                                                                                                       | `resources/example-applications.mdx` (MERGE)                                               | MERGE-STUB                                                  |
| `concepts/developer-landscape.mdx`                                                                                                                                  | `concepts/landscape.mdx` (already CONTENT 8.7 KB)                                          | done — but draft 34 KB has more material; cross-check       |
| `concepts/developer-stack.mdx`                                                                                                                                      | `concepts/repo-map.mdx` (already CONTENT 13 KB)                                            | done — but draft 24 KB has more; cross-check                |
| `concepts/ecosystem-map.mdx`                                                                                                                                        | `concepts/repo-map.mdx`                                                                    | merged via repo-map                                         |
| `concepts/spe-ecosystem.mdx`                                                                                                                                        | ARCHIVE → v2/community/ or v2/about/                                                       | not extracted                                               |
| `learn/ai-on-livepeer.mdx`                                                                                                                                          | `learn/ai-and-agents.mdx` (MERGE)                                                          | MERGE pending                                               |
| `learn/video-on-livepeer.mdx`                                                                                                                                       | `learn/video-and-livestream.mdx`                                                           | REWRITE-STUB                                                |
| `learn/setup-paths.mdx`                                                                                                                                             | ARCHIVE — superseded                                                                       | not extracted                                               |
| `get-started/ai-quickstart.mdx`                                                                                                                                     | `build/ai-and-agents/ai-jobs-direct-quickstart.mdx` (already CONTENT 9.1 KB)               | done — but cross-check draft                                |
| `get-started/comfystream-quickstart.mdx`                                                                                                                            | `build/ai-and-agents/realtime-ai/comfystream/comfystream-quickstart.mdx` (CONTENT 10.2 KB) | done — cross-check                                          |
| `get-started/contributor-quickstart.mdx`                                                                                                                            | ARCHIVE → v2/community/                                                                    | not extracted                                               |
| `get-started/setup-paths.mdx`                                                                                                                                       | ARCHIVE — replaced                                                                         | not extracted                                               |
| `get-started/transcoding-quickstart.mdx`                                                                                                                            | HOLD (Studio version for Rick)                                                             | held                                                        |
| `get-started/video-quickstart.mdx`                                                                                                                                  | DELETE (redirect stub)                                                                     | not actioned                                                |
| `build/overview.mdx`                                                                                                                                                | ARCHIVE — no IA slot                                                                       | not extracted                                               |
| `build/tutorials/build-an-ai-agent-on-livepeer.mdx`                                                                                                                 | `build/tutorials/ai-agent-on-livepeer.mdx`                                                 | REWRITE-STUB                                                |
| `build/tutorials/ipfs-video-integration.mdx`                                                                                                                        | `build/tutorials/ipfs-video-integration.mdx`                                               | REWRITE-STUB                                                |
| `build/tutorials/token-gated-video.mdx`                                                                                                                             | `build/tutorials/token-gated-video.mdx`                                                    | REWRITE-STUB                                                |
| `guides/ai/authentication.mdx`                                                                                                                                      | `guides/auth-and-security/ai-authentication.mdx`                                           | REWRITE-STUB                                                |
| `guides/ai/production-checklist.mdx`                                                                                                                                | `guides/production-hardening-checklist.mdx`                                                | REWRITE-STUB                                                |
| `guides/ai/troubleshooting.mdx`                                                                                                                                     | `guides/observability-and-debugging/job-debugging.mdx`                                     | REWRITE-STUB                                                |
| `guides/beta-projects/naap.mdx`                                                                                                                                     | SPLIT → `build/plugins-and-extensions/`                                                    | SPLIT-STUBs pending                                         |
| `guides/beta-projects/storyboard.mdx`                                                                                                                               | `build/ai-and-agents/agents/storyboard.mdx` (0 B source)                                   | STUB — need upstream Storyboard README                      |
| `guides/beta-projects/data-mcp.mdx`                                                                                                                                 | (DROPPED from IA — internal-only)                                                          | not extracted                                               |
| `guides/contribution-guide.mdx`                                                                                                                                     | ARCHIVE → v2/community/                                                                    | not extracted                                               |
| `guides/opportunities/{bug-bounties, careers, grants-and-programmes, oss-contributions, overview, rfps-and-proposals}.mdx`                                          | ARCHIVE → v2/community/                                                                    | not extracted (6 files)                                     |
| `guides/video/{access-control, create-livestream, monitor-stream-health, playback, upload-asset, webhooks}.mdx`                                                     | ARCHIVE — Studio-framed, not in IA                                                         | not extracted (6 files)                                     |
| `resources/compendium/developer-help.mdx`                                                                                                                           | `guides/help.mdx`                                                                          | REWRITE-STUB                                                |
| `resources/compendium/example-applications.mdx`                                                                                                                     | `resources/example-applications.mdx` (MERGE)                                               | MERGE-STUB                                                  |
| `resources/compendium/resources.mdx`                                                                                                                                | `resources/example-applications.mdx` (MERGE)                                               | MERGE-STUB                                                  |
| `resources/reference/ai-runner.mdx`                                                                                                                                 | (no IA slot — was 671 B stub originally)                                                   | drop or merge                                               |
| `resources/reference/apis.mdx`                                                                                                                                      | `resources/reference/apis.mdx` (CONTENT 6.6 KB)                                            | done — cross-check vs draft `apis-expanded.mdx`             |
| `resources/reference/pricing-rate-limits.mdx`                                                                                                                       | `resources/reference/pricing-rate-limits.mdx` (CONTENT 7.2 KB)                             | done                                                        |
| `resources/reference/sdks.mdx`                                                                                                                                      | `resources/reference/sdks.mdx` (CONTENT 6.9 KB)                                            | done                                                        |
| `tutorials/*` (7 files: ai-image-generation, live-streaming-app, livepeer-llm-chatbot, multi-tenant-pymthouse, naap-plugin, vod-upload-and-playback, vtuber-avatar) | New build/tutorials/ counterparts already CONTENT and ~2× larger                           | Earlier drafts — keep as `_workspace/` reference or archive |

### 4b. ARCHIVE recommendations (Community / out-of-scope content)

Per audit: belong in `v2/community/` (contribution guide, opportunities) or `v2/solutions/` (Studio-framed video guides) or ARCHIVE entirely.

| File / group                                                                                                                                                                        | Count | Recommendation                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ------------------------------------------------------------------------- |
| `guides/opportunities/*`                                                                                                                                                            | 6     | Move to v2/community/                                                     |
| `guides/contribution-guide.mdx`                                                                                                                                                     | 1     | Move to v2/community/                                                     |
| `get-started/contributor-quickstart.mdx`                                                                                                                                            | 1     | Move to v2/community/                                                     |
| `guides/video/*`                                                                                                                                                                    | 6     | Archive (Studio-framed video guides; merge usable bits into build/video/) |
| `learn/setup-paths.mdx`, `get-started/setup-paths.mdx`, `get-started/video-quickstart.mdx`, `build/overview.mdx`, `resources/reference/ai-runner.mdx`, `concepts/spe-ecosystem.mdx` | 6     | Audit-then-archive                                                        |
| `tutorials/*` (7 earlier drafts)                                                                                                                                                    | 7     | Archive (superseded by larger `build/tutorials/*` content)                |

### 4c. Duplicate-zone (16 files) — still untouched

`concepts1/`, `build1/`, `tutorials1/` folders. Audit recommended DELETE (post-restructure artefacts). Most have already been used as MOVE sources or merged via STATUS comments.

| Folder               | Files                                                                                                                        | Status                                     |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `concepts1/`         | 7 (ai-on-livepeer, builders, developer-stack, ecosystem-map, oss-stack, running-a-gateway, spe-ecosystem, video-on-livepeer) | DELETE — duplicates of concepts/ canonical |
| `build1/`            | 5 (byoc, comfystream, model-support, sdk-gateway, workload-fit)                                                              | DELETE — content in MERGE/REWRITE pages    |
| `guides/tutorials1/` | 3 (ai-agent-on-livepeer, ipfs-video, token-gated-video)                                                                      | DELETE — duplicates of build/tutorials/    |

## Section 5 — Three deferred / dropped IA pages

| Page                                                      | Status   | Decision context                                                                                              |
| --------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| `build/ai-and-agents/agents/agent-sdk.mdx`                | DEFERRED | Per Wonderland: defer until @livepeer/agent ships on npm. Mentioned as "coming soon" in `agents/overview.mdx` |
| `build/ai-and-agents/agents/creative-kit.mdx`             | DEFERRED | Same — wait for @livepeer/creative-kit on npm                                                                 |
| `build/ai-and-agents/ecosystem-mcp/livepeer-data-mcp.mdx` | DROPPED  | Internal-only per `_workspace/diagrams2.mdx` verification §3. Not for external builders                       |

## Section 6 — Recommended next-session work (ordered)

### Phase A — Quick wins (1 session, 8 stubs → CONTENT)

Apply 8 `files-to-add` drafts to corresponding REWRITE-STUBs:

1. `ai-authentication.mdx` → `guides/auth-and-security/ai-authentication.mdx`
2. `ai-production-checklist.mdx` → `guides/production-hardening-checklist.mdx`
3. `ai-troubleshooting.mdx` → `guides/observability-and-debugging/job-debugging.mdx`
4. `navigator.mdx` → `navigator.mdx`
5. `tutorial-ai-agent.mdx` → `build/tutorials/ai-agent-on-livepeer.mdx`
6. `tutorial-ipfs-video.mdx` → `build/tutorials/ipfs-video-integration.mdx`
7. `tutorial-token-gated-video.mdx` → `build/tutorials/token-gated-video.mdx`
8. `video-access-control.mdx` → `guides/auth-and-security/access-control.mdx`
9. `video-on-livepeer.mdx` → `learn/video-and-livestream.mdx`

Each: replace stub body with draft, voice-pass, strip any residual Studio refs. **Brings tree to 89/138 content (64%) → 64% complete.**

### Phase B — Resolve 5 extras (Wonderland decision)

Decide what to do with the 5 IA-extras (Section 2). Either add to IA + docs.json or rename/merge. **Brings extras count to 0 OR adds 1–5 IA slots.**

### Phase C — Decisions on `developers1/` files (Wonderland)

- 7 ARCHIVE targets (Community / Solutions tabs)
- 7 earlier tutorial drafts to archive
- 16 duplicate-zone files to delete
- 6 ARCHIVE-or-merge items

### Phase D — Net-new content (multi-session)

45 remaining STUBs across:

- `build/ai-and-agents/ai-stream-pack/` (5 stubs — ComfyUI-Stream-Pack README)
- `build/ai-and-agents/agents/` (4 — Storyboard / Eliza / EIP-8004 sources)
- `build/compute/byoc/` (5 — BYOC PR + reference pipelines)
- `build/plugins-and-extensions/` (3 — NaaP source)
- `build/alt-gateways/` (3 — Remote_signers.md, j0sh repo)
- `build/applications/` (4 — ui-kit recipes)
- `guides/transport/` (3 — trickle protocol source in go-livepeer)
- `guides/gateways-as-developer/` (4 — synthesis from existing concepts)
- `guides/auth-and-security/overview.mdx` (1)
- `resources/reference/` (8 — SDK READMEs)

These are NET-NEW with named canonical sources but no existing developers1 source. Highest-effort bucket.

### Phase E — MERGE/SPLIT/REWRITE-STUB cleanup

Remaining REWRITE-STUBs without files-to-add drafts:

- `guides/help.mdx` (developer-help.mdx source, 2 Studio strips)
- The 2 SPLIT-STUBs (naap.mdx → overview + naap-architecture)
- The 2 MERGE/MERGE-STUB targets

## Files in this audit

- `audit-summary.md` (this file)
- `current-state-developers.tsv` (138-row per-file inventory)

Open question for Wonderland: are the 5 IA-extras intended additions (update notes.mdx + docs.json) or accidents (merge/rename)?
