# Task 2 — Summary (one-page exec)

## Headline numbers

**Files classified:** 75 (61 live + 14 from `concepts1`/`build1`/`tutorials1` duplicate zone)
**`developers2/` parallel scaffold:** 108 stubs/duplicates — treat as block, recommend whole-tree DELETE (see `task-2-duplicates.md`)

## Classification counts (live + duplicate-zone)

| Classification | Count | Notes |
|---|---|---|
| ARCHIVE | 19 | Mostly Community-tab content (opportunities, contribution-guide, contributor-quickstart) + Studio-framed guides/video/ (6) + concepts/spe-ecosystem (community audience) + 4 routing/setup pages |
| MOVE | 18 | Brief-aligned moves; most retain content as-is |
| DELETE | 9 | Duplicate-zone (`concepts1`, `tutorials1`) + video-quickstart redirect-only stub |
| REWRITE | 8 | Project-rule-3 Studio violations require network-direct rewrite |
| MERGE | 6 | repo-map (3 sources), example-applications (3 sources) |
| KEEP | 5 | index, navigator, glossary, sdks, pricing-rate-limits |
| STUB | 3 | 2 × 0-byte files (data-mcp, storyboard) + 1 × &lt;1KB (wiki.mdx) |
| REVIEW-NEEDS-DECISION | 3 | 2 huggingface tutorials (no IA slot) + 1 sdk-gateway (no IA slot) |
| SPLIT | 2 | diagrams2.mdx (Task 1 finding), naap.mdx (brief) |
| MOVE-STUB | 1 | knowledge-hub/wiki.mdx |
| HOLD | 1 | get-started/transcoding-quickstart.mdx (Rick review) |

## Gap map: 88-page locked IA vs. existing sources

| Slot | Count |
|---|---|
| IA pages with a live source via MOVE/MERGE/REWRITE/KEEP | 28 |
| IA pages NET-NEW (no live source) | ~60 |
| IA pages where a `_workspace/files-to-add/` draft may help | 16 (subset of NET-NEW) |
| IA pages with stub-only source (0–500 bytes, needs full hydration) | 3 |

See `task-2-net-new-pages.md` for the full per-subgroup table.

## REVIEW flags

| Zone | Files with REVIEW: | Total REVIEW: occurrences |
|---|---|---|
| Live tree (`v2/developers/` excluding workspace/duplicate-zone) | 4 | 19 |
| Duplicate zone (`concepts1`, `build1`, `tutorials1`) | 7 | 27 |
| `_workspace/` (drafts, archive, ADD-ME, context-data) | 18 | 74 |
| **Total** | **29** | **120** |

**Live-tree REVIEW flag hotspots:**
- `get-started/comfystream-quickstart.mdx` — 11 flags (also a MOVE target)
- `concepts/developer-landscape.mdx` — 5 flags (REWRITE target)
- `learn/ai-on-livepeer.mdx` — 2 flags (REWRITE target)
- `concepts/builders-guide.mdx` — 1 flag (MOVE target)

**Build1 duplicate-zone hotspots** (these ARE the brief's MOVE source files):
- `build1/comfystream.mdx` — 11 flags (MOVE → `build/ai-and-agents/realtime-ai/comfystream/overview.mdx`)
- `build1/byoc.mdx` — 6 flags (MOVE → `build/compute/byoc/overview.mdx`)
- `build1/model-support.mdx` — 5 flags (MOVE → `build/ai-and-agents/model-support.mdx`)

Per project rule 2 (NO SMEs), every REVIEW flag must be either verified against a canonical source (go-livepeer, protocol, ai-runner, repo READMEs, OpenAPI specs) or rewritten to not make the claim. `diagrams2.mdx` verification log (lines 889–905) shows what this looks like — 8 items resolved with named sources. The same pattern should be applied to the 19 live + 27 duplicate-zone flags when each file moves.

## Studio framing audit

**Total Studio references in `v2/developers/`:** 282 lines across 47 files (Task 0 §6).
**In live files (excluding workspace/duplicate-zone):** 34 files contain Studio refs.
**Legitimate (slated to live in `learn/where-to-find/studio-paths.mdx`):** 0 — that file does not yet exist.
**Violations (everywhere else):** 34 live files.

**Top violators (per live-tree grep, Task 0 §6):**
- `concepts/developer-landscape.mdx` — 11 hits → REWRITE
- `concepts/ecosystem-map.mdx` — 8 hits → MERGE into repo-map (Studio refs to clear)
- `learn/video-on-livepeer.mdx` — 7 hits → REWRITE
- `navigator.mdx` — 6 hits → KEEP but Studio refs must be replaced with routing-only acknowledgements
- `guides/ai/troubleshooting.mdx` — 6 hits → REWRITE
- `get-started/transcoding-quickstart.mdx` — 6 hits → HOLD (Studio version, separate from network-direct version)
- `resources/reference/apis.mdx` — 5 hits → REWRITE
- `get-started/ai-quickstart.mdx` — 5 hits → REWRITE
- `concepts/diagrams2.mdx` — 5 hits → SPLIT (Part 1 Persona A routes Studio — violates rule 3, see Task 1 §E.4)
- `learn/setup-paths.mdx` — 4 hits → ARCHIVE
- `guides/video/create-livestream.mdx` — 4 hits → ARCHIVE

**Total Studio violations across CSV rows:** 125 hit-count (sum of CSV column 9).

Once `learn/where-to-find/studio-paths.mdx` is authored, that page becomes the only legitimate location for Studio references in the Developers tab. All other Studio refs must be removed during REWRITE or eliminated when files are ARCHIVED.

## Top three concerns

### 1. The brief's MOVE source files moved during the recent restructure

The brief's reference table assumes `build/byoc.mdx`, `build/comfystream.mdx`, `build/model-support.mdx`, `build/workload-fit.mdx`, `concepts/oss-stack.mdx`, and `concepts/running-a-gateway.mdx` exist at those paths. They do not — they were moved to `build1/`, `concepts1/`, or `_workspace/archive/pre-restructure-2026-04-06/` during commit `6c15a379b`. **Action:** every MOVE/MERGE classification in the CSV uses the post-restructure location (e.g. `build1/byoc.mdx` not `build/byoc.mdx`). The brief's reference table is partially stale and should not be re-followed verbatim.

### 2. Studio framing is pervasive (282 lines, 47 files)

This is the single largest content-correctness violation in the tree. 34 live files violate project rule 3. The brief's call to ARCHIVE `guides/opportunities/*` and `guides/contribution-guide.mdx` clears 1 violation; the brief's REWRITE of `concepts/developer-landscape.mdx` and `learn/video-on-livepeer.mdx` clears 18 more. The remaining ~106 Studio-violation hits are distributed across MOVE files (which need in-place Studio-stripping during the move) and quickstarts (which need network-direct rewrites). **Action:** Studio framing must be treated as a blocking rule, not a style note. A grep-based CI check (per `consolidate.md` §"Three risks worth naming") would prevent regression.

### 3. The `developers2/` parallel scaffold is dead weight

108 files. 12+ byte-identical duplicates of `developers/` content. 16+ tiny stubs (150–220 bytes). 2 × 0-byte files. Folder structure does not match the locked IA. Either it was an abandoned scaffold attempt (per `consolidate.md` Phase 1) or a parallel-experiment from earlier work. **Action:** DELETE the whole `developers2/` tree after a 5-minute manual scan of stub frontmatter for unique target-path planning notes. Keep nothing.

## Decisions Wonderland must make before Task 3 / writing

Five items requiring explicit decisions, with Task-2-suggested defaults bolded:

1. **`guides/video/*` group disposition** (6 files): **ARCHIVE** to `_workspace/archive/` or `v2/solutions/` — Studio-framed and not in locked IA. REWRITE-split is option B.
2. **`huggingface-to-livepeer{,-advanced}.mdx`** (26KB + 45KB): **add as 13th tutorial** at `build/tutorials/huggingface-to-livepeer.mdx` (and `-advanced.mdx` as 14th, or merge to a single page). Net-new IA slot. Alternative: merge into `build/ai-and-agents/model-support.mdx` (risk: model-support becomes too long).
3. **`developers2/` whole-tree disposition**: **DELETE after 5-min frontmatter scan.**
4. **`livepeer-data-mcp` page in locked IA**: keep `build/ai-and-agents/ecosystem-mcp/livepeer-data-mcp.mdx` as planned, OR drop from IA since it is internal-only (per `diagrams2.mdx` verification log §3). **Recommendation: keep but annotate as internal-tool-not-for-external-use.**
5. **`agents/agent-sdk.mdx` and `agents/creative-kit.mdx`**: write now (as stubs flagging "package not yet on npm") or defer to when packages ship? **Recommendation per `consolidate.md` "Three risks worth naming" §3: defer.** Drop from Phase 1 scaffolding.

Outputs written to `v2/developers/_workspace/audit-2026-05-12/`:
- [task-2-existing-file-mapping.csv](task-2-existing-file-mapping.csv) — 75 rows
- [task-2-net-new-pages.md](task-2-net-new-pages.md) — gap map per subgroup
- [task-2-cross-repo-finds.md](task-2-cross-repo-finds.md) — 10-search sweep + workspace cache
- [task-2-duplicates.md](task-2-duplicates.md) — three pair diffs + developers2/ verdict
- [review-flag-census.txt](review-flag-census.txt) — per-file REVIEW counts
- [current-studio-references.txt](current-studio-references.txt) (from Task 0) — all 282 Studio refs

STOP — awaiting Wonderland confirmation before Task 3 begins.
