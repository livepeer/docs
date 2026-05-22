# Task 0 — Hard verifications

**Date:** 2026-05-11
**Branch:** `docs-v2-dev`
**HEAD:** `6c15a379ba8ae469d98283665b3371c03a494eb7 — restructure Developers`
**Working dir:** `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev`
**Output dir:** `v2/developers/_workspace/audit-2026-05-12/` (substituted from brief's `/mnt/user-data/outputs/` — that path does not exist locally)

## Result: PASS with material surprises (5)

Each numbered surprise changes Task 2/3 scope. Wonderland must read these before approving Task 1 to start.

<CustomDivider />

## 1. Branch (PASS)

Git status (uncommitted):
- ` M snippets/composables/pages/shared/.last_fetch`
- ` M v2/developers/concepts/diagrams2.mdx`
- ` M v2/developers/concepts/notes.mdx`
- ` M workspace/thread-outputs/sessions/session-log.txt`
- `?? snippets/assets/media/diagrams/developers/`
- `?? v2/developers/_workspace/consolidate.md`
- `?? v2/developers/_workspace/audit-2026-05-12/` (this directory)

Both `diagrams2.mdx` and `notes.mdx` in `concepts/` are modified-uncommitted. Both are direct Task 1 inputs.

<CustomDivider />

## 2. v2/developers inventory (SURPRISE — 191 files vs brief's ~44)

Total files: **191**. Inventory at `devs-inventory.txt`.

The expected count (~44) is correct for the **live tree**. The remainder is a large workspace/archive layer that the brief did not anticipate. Breakdown:

| Zone | Count | Nature |
|---|---|---|
| **Live** (excludes `_workspace`, `_design`, `x-deprecated`, `concepts1`/`build1`/`tutorials1`) | **61** | Current published surface — Task 2 classifies these |
| `_workspace/` (archive, drafts, ADD-ME, files-to-add, canonical, context-data, reviews) | 104 | Working layer — out of scope for Task 2 file mapping; relevant as Task 1 input only |
| `x-deprecated/` | 12 | Already marked deprecated |
| `concepts1/`, `build1/`, `tutorials1/` duplicate folders | 16 | **NEW SURPRISE — not in brief reference table** |

The 61 live files are still ~17 above the brief's expected ~44. The delta is partly the `concepts/` zone now holding 8 live files (overview/landscape/etc. work in flight on `diagrams.mdx`, `diagrams2.mdx`, `notes.mdx`, plus pre-existing `developer-stack`, `developer-landscape`, `ecosystem-map`, `spe-ecosystem`, `builders-guide`), and the `learn/` zone now containing 4 files (`ai-on-livepeer.mdx`, `applications-on-livepeer.mdx`, `setup-paths.mdx`, `video-on-livepeer.mdx`).

The list of 61 live files is included verbatim in §7 below for Wonderland's review.

**Implication for Task 2:** the brief's intended move map references several files that may have been moved, duplicated into `*1` folders, or supplanted during the `restructure Developers` commit. Every classification row in Task 2 must check actual current path, not the brief's assumed pre-restructure path.

<CustomDivider />

## 3. v2/developers2 inventory (SURPRISE — state (c))

Total files: **108** (close to RFP audit's reported ~107). Inventory at `devs2-inventory.txt`. All 108 are in the live tree — zero `_workspace` content inside `developers2`.

Folder shape (depth 2):
```
v2/developers2
├── _workspace/
├── build/
│   ├── agents/
│   ├── ai/
│   ├── application/
│   ├── beta-projects/
│   ├── custom-ai/
│   ├── tutorials/
│   └── video/
├── concepts/
├── data/
├── get-started/
│   └── tooling/
├── guides/
├── reference/
├── resources/
│   ├── compendium/
│   └── knowledge-hub/
└── routing/
```

Matches RFP-audit's "visible-but-stubbed" state. State **(c)** of the brief's three possibilities — partial rebuild present, NOT deleted, NOT fully populated. Wonderland confirms in Task 2 whether `developers2` is intended as a parallel scaffold to be discarded, merged into `developers`, or itself replaced.

<CustomDivider />

## 4. Named files (per brief — STOP gate)

| File | Exists | Size | Last modified | Note |
|---|---|---|---|---|
| `v2/developers/concepts/diagrams.mdx` | **YES** | 16,383 B | May 7 20:35 | Substantive |
| `v2/developers/concepts/diagrams2.mdx` | **YES** | 63,949 B | May 11 20:39 | **Substantive (4× larger), modified-uncommitted today** |
| `checks.mdx` (anywhere) | **YES — 8 locations** | varies | various | See below |

`checks.mdx` locations (canonical for this tab is bolded):
- **`v2/developers/_workspace/canonical/checks.mdx`** — canonical Developers checks
- `v2/gateways/_workspace/canonical/checks.mdx`
- `v2/orchestrators/_workspace/canonical/checks.mdx`
- `v2/delegators/_workspace/canonical/checks.mdx`
- `v2/about/_workspace/canonical/checks.mdx`
- `workspace/plan/active/CONTENT-WRITING/packs/developers/attachments/checks.mdx`
- `workspace/plan/active/CONTENT-WRITING/packs/about/attachments/checks.mdx`
- `workspace/plan/active/CONTENT-WRITING/packs/delegators/attachments/checks.mdx`

Adjacent under `v2/developers/_workspace/canonical/review/`:
- `01-arriving-question.md`
- `02-personas.md`
- `03-jobs.md`
- `04-journey.md`
- `05-section-structure.md`
- `06-terminology.md`

These six look like the IA-Check-B output for the Developers tab. Task 1 should read `02-personas.md` because it likely defines the locked persona model the brief references.

**Wonderland confirmation requested:** is `v2/developers/_workspace/canonical/checks.mdx` the standards source for Task 3 grading, or should I use the skill files in `ai-tools/ai-skills/` ? Or both?

<CustomDivider />

## 5. Double-extension bug (SURPRISE — already fixed)

```
ls -la v2/developers/guides/local-testnet-deployment.mdx*
-rw-r--r--  1 alisonhaire  staff  10589 May  4 14:25 v2/developers/guides/local-testnet-deployment.mdx
```

Only the single-extension file exists. `find v2/developers -name "*.mdx.mdx"` returns nothing. The bug described in the brief's reference move map has been fixed since the brief was written.

**Implication:** the brief's reference row `local-testnet-deployment.mdx.mdx → DELETE` is moot. The remaining row `local-testnet-deployment.mdx → guides/local-development/local-testnet.mdx (MOVE)` still applies.

<CustomDivider />

## 6. Studio framing (282 lines, 47 files; 34 live files)

`current-studio-references.txt` contains 282 grep hits across 47 distinct files.

Breakdown:
- **Live files with Studio refs: 34** — every one of these is a Task 2 candidate for REWRITE or violation flag, except `learn/where-to-find/studio-paths.mdx` which is not in the brief's list of locked IA pages yet (currently does not exist).
- `_workspace/`, `_design/`, `x-deprecated/`, archive paths: 13 files — out of scope for live-tree classification but useful for verifying voice/framing precedent in deprecated content.

The 34 live files with Studio refs include the entire `guides/video/` subgroup (access-control, create-livestream, monitor-stream-health, playback, upload-asset, webhooks), all `learn/` pages (ai-on-livepeer, applications-on-livepeer, setup-paths, video-on-livepeer), and most `concepts/` pages.

**Implication:** Studio framing is pervasive and was likely the dominant framing convention before the recent restructure. The brief's project rule 3 will trigger a large fraction of Task 2 REWRITE classifications. Worth confirming with Wonderland whether `guides/video/*` is part of the locked IA at all (it is not in the brief's locked tree, which has `build/video/` and `guides/transport/`/`guides/auth-and-security/` but no `guides/video/` group).

<CustomDivider />

## 7. Live file list (61 — for Wonderland review)

```
v2/developers/index.mdx
v2/developers/navigator.mdx
v2/developers/portal.mdx

v2/developers/concepts/builders-guide.mdx
v2/developers/concepts/developer-landscape.mdx
v2/developers/concepts/developer-stack.mdx
v2/developers/concepts/diagrams.mdx
v2/developers/concepts/diagrams2.mdx
v2/developers/concepts/ecosystem-map.mdx
v2/developers/concepts/notes.mdx
v2/developers/concepts/spe-ecosystem.mdx

v2/developers/learn/ai-on-livepeer.mdx
v2/developers/learn/applications-on-livepeer.mdx
v2/developers/learn/setup-paths.mdx
v2/developers/learn/video-on-livepeer.mdx

v2/developers/get-started/ai-quickstart.mdx
v2/developers/get-started/comfystream-quickstart.mdx
v2/developers/get-started/contributor-quickstart.mdx
v2/developers/get-started/setup-paths.mdx
v2/developers/get-started/transcoding-quickstart.mdx
v2/developers/get-started/video-quickstart.mdx

v2/developers/build/overview.mdx
v2/developers/build/tutorials/build-an-ai-agent-on-livepeer.mdx
v2/developers/build/tutorials/huggingface-to-livepeer-advanced.mdx
v2/developers/build/tutorials/huggingface-to-livepeer.mdx
v2/developers/build/tutorials/ipfs-video-integration.mdx
v2/developers/build/tutorials/token-gated-video.mdx

v2/developers/guides/developer-guides.mdx
v2/developers/guides/contribution-guide.mdx
v2/developers/guides/local-testnet-deployment.mdx
v2/developers/guides/ai/authentication.mdx
v2/developers/guides/ai/production-checklist.mdx
v2/developers/guides/ai/troubleshooting.mdx
v2/developers/guides/beta-projects/data-mcp.mdx
v2/developers/guides/beta-projects/naap.mdx
v2/developers/guides/beta-projects/pymthouse.mdx
v2/developers/guides/beta-projects/storyboard.mdx
v2/developers/guides/opportunities/bug-bounties.mdx
v2/developers/guides/opportunities/careers.mdx
v2/developers/guides/opportunities/grants-and-programmes.mdx
v2/developers/guides/opportunities/oss-contributions.mdx
v2/developers/guides/opportunities/overview.mdx
v2/developers/guides/opportunities/rfps-and-proposals.mdx
v2/developers/guides/video/access-control.mdx
v2/developers/guides/video/create-livestream.mdx
v2/developers/guides/video/monitor-stream-health.mdx
v2/developers/guides/video/playback.mdx
v2/developers/guides/video/upload-asset.mdx
v2/developers/guides/video/webhooks.mdx

v2/developers/resources/glossary.mdx
v2/developers/resources/compendium/developer-help.mdx
v2/developers/resources/compendium/example-applications.mdx
v2/developers/resources/compendium/resources.mdx
v2/developers/resources/knowledge-hub/awesome-livepeer.mdx
v2/developers/resources/knowledge-hub/deepwiki.mdx
v2/developers/resources/knowledge-hub/wiki.mdx
v2/developers/resources/reference/ai-runner.mdx
v2/developers/resources/reference/apis.mdx
v2/developers/resources/reference/pricing-rate-limits.mdx
v2/developers/resources/reference/pytrickle.mdx
v2/developers/resources/reference/sdks.mdx
```

`concepts1/`, `build1/`, `tutorials1/` duplicate folders (16 files, NEW surprise — not in brief's reference table):
```
v2/developers/build1/sdk-gateway.mdx
v2/developers/concepts1/ai-on-livepeer.mdx
v2/developers/concepts1/developer-stack.mdx
v2/developers/concepts1/ecosystem-map.mdx
v2/developers/concepts1/oss-stack.mdx
v2/developers/concepts1/video-on-livepeer.mdx
v2/developers/guides/tutorials1/build-an-ai-agent-on-livepeer.mdx
v2/developers/guides/tutorials1/ipfs-video-integration.mdx
v2/developers/guides/tutorials1/token-gated-video.mdx
... (plus 7 more under /concepts1 and /build1)
```

Brief's `concepts/oss-stack.mdx` reference target now sits at `concepts1/oss-stack.mdx`. Brief's `build/byoc.mdx`, `build/comfystream.mdx`, `build/model-support.mdx`, `build/workload-fit.mdx` are absent from the live tree — restructure may have moved them under `_workspace/archive`. Need to verify in Task 2.

<CustomDivider />

## 8. Files NOT found in the live tree that the brief's reference move map names

The brief's reference target-path table assumes these files exist; they are absent from the live developers tree (61 files above):

| Brief expected path | Status | Likely current location |
|---|---|---|
| `concepts/oss-stack.mdx` | NOT in live | likely `concepts1/oss-stack.mdx` (duplicate folder) |
| `concepts/running-a-gateway.mdx` | NOT in live | likely archived in `_workspace/archive/` — verify |
| `concepts/ai-on-livepeer.mdx` | NOT in live (`learn/ai-on-livepeer.mdx` exists) | restructure may have already moved this |
| `concepts/video-on-livepeer.mdx` | NOT in live (`learn/video-on-livepeer.mdx` exists) | restructure may have already moved this |
| `concepts/builders.mdx` | NOT in live (`concepts/builders-guide.mdx` exists) | renamed? |
| `build/byoc.mdx` | NOT in live | likely `_workspace/archive/` — verify |
| `build/comfystream.mdx` | NOT in live | likely `_workspace/archive/` — verify |
| `build/model-support.mdx` | NOT in live | likely `_workspace/archive/` — verify |
| `build/workload-fit.mdx` | NOT in live | likely `_workspace/archive/` — verify |

**Critical implication for Task 2:** the brief's reference move map is partially stale. Several MOVE/MERGE rows reference source files that have already moved during the `restructure Developers` commit. Task 2 will report the deltas explicitly.

<CustomDivider />

## Summary — what Wonderland needs to decide before Task 1 starts

1. **Confirm output dir.** Reports at `v2/developers/_workspace/audit-2026-05-12/`. OK?
2. **Confirm scope of "live" for Task 2.** Should Task 2 classify only the 61 live files, or also the 16 files in `concepts1`/`build1`/`tutorials1` duplicate folders, or also some subset of `_workspace/` (e.g. `files-to-add/` which contains 16 stage-ready pages)?
3. **`developers2` treatment.** 108 stubs. Brief expects Task 2 to inventory both folders, but does not say whether `developers2` files contribute classification rows or only "is this folder still intended" diagnostic.
4. **Standards source for Task 3.** Use `ai-tools/ai-skills/` skill files (per brief paragraph 4), or use `v2/developers/_workspace/canonical/checks.mdx`, or both? The brief's own Task 3 step 1 says "Confirm with Wonderland".
5. **`guides/video/*` group treatment.** Six files all heavily Studio-framed. The locked IA does not list a `guides/video/` group at all. These are likely candidates for ARCHIVE (Solutions tab) or REWRITE (split into `build/video/` and `guides/auth-and-security/`).

Once these five are answered, Task 1 (persona/infra mapping) proceeds against `diagrams.mdx`, `diagrams2.mdx`, `notes.mdx`, `_workspace/canonical/review/02-personas.md`, `_workspace/consolidate.md`, and `snippets/assets/media/diagrams/developers/persona-paths/persona-infra-maps.md`.

STOP — awaiting Wonderland confirmation.
