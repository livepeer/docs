# Task 3 — Summary (one-page exec)

## Standards source used

Both, per Task 0 decision:

- **`v2/developers/_workspace/canonical/checks.mdx`** — Developers-tab-specific 14-check frontmatter + voice + copy reference. This is the canonical grading source (more comprehensive than the brief's 9-check table).
- **Brief's 9-check table** — applied as the CSV columns for `task-3-grading.csv`. Matches a subset of the canonical checks.
- **`ai-tools/ai-skills/page-authoring/SKILL.md`** — exists. `copy-rules.md` exists at `ai-tools/ai-skills/docs-copy/skills/copy-rules.md`. `voice-rules.md` exists at `workspace/plan/active/CONTENT-WRITING/Prompts/voice-rules.md` and in tab-specific attachments. The other four named skills (`livepeer-voice`, `prose-quality`, `structure-rules`, `naming`) are referenced in the brief but their canonical locations are within the rules in the above files. No standalone skill files exist for those four locally.

## Grading scope

54 files graded — all KEEP / MOVE / REWRITE / STUB / MOVE-STUB / HOLD / REVIEW-NEEDS-DECISION classifications from Task 2 (also includes the SPLIT and ARCHIVE files where in-place grading still produces actionable findings). ARCHIVE-only files in `guides/opportunities/*` and `guides/video/*` are excluded — they leave the Developers tab.

## Grade distribution

| Grade | Count | What it means |
|---|---|---|
| **pass** | 10 | Frontmatter complete + 0 em-dash + UK English clean + no Studio violations + no REVIEW flags |
| **needs-work** | 22 | 1–2 minor issues (frontmatter gap, single em-dash, isolated REVIEW flag) |
| **rewrite** | 22 | Studio framing on a build/quickstart target, OR ≥4 Studio violations, OR ≥5 REVIEW flags, OR ≥10 em-dashes |

## Pass rate per check (across 54 files)

| Check | Pass | Fail | Notes |
|---|---|---|---|
| Frontmatter complete (8/8 fields) | 40/54 | 14 fail | Common gaps: `audience` missing (diagrams + notes + index), `lifecycleStage` + `purpose` (diagrams + notes + 0-byte stubs) |
| Zero em-dashes | 46/54 | 8 fail | 85 of 94 raw em-dashes in `diagrams.mdx` (12) + `diagrams2.mdx` (38) + `notes.mdx` (35) — those three files prescribed for SPLIT/MOVE per Task 1, so the in-place em-dash count is misleading |
| UK English (excluding Mermaid false positives) | 47/54 | 7 fail | 1-hit US-spelling in 7 different files (portal, naap, transcoding-quickstart, contributor-quickstart, two tutorials, build-an-ai-agent). Raw count of 189 is heavily inflated by `color:` in Mermaid CSS — 182 are false positives. |
| Zero question-headings | 49/54 | 5 fail | 1 each in: navigator.mdx, learn/setup-paths.mdx, get-started/setup-paths.mdx, concepts/notes.mdx, build1/workload-fit.mdx |
| Zero HTML comments | 54/54 | 0 fail | Confirmed clean — `<!--` does not appear in any grading target |
| Zero conditional gatekeeping | 47/54 | 7 fail | 1 each in: learn/setup-paths.mdx, guides/contribution-guide.mdx, get-started/setup-paths.mdx, concepts1/oss-stack.mdx, concepts/ecosystem-map.mdx, concepts/developer-landscape.mdx, build1/comfystream.mdx |
| Zero hand-holding | 53/54 | 1 fail | 1 hit in concepts/developer-landscape.mdx |
| Zero REVIEW flags | 47/54 | 7 fail | Top: comfystream-quickstart (11), build1/comfystream (11), build1/byoc (6), developer-landscape (5), build1/model-support (5), ai-on-livepeer (2), builders-guide (1) |
| Zero Studio violations | 29/54 | 25 fail | 25 of 54 files contain at least one Studio reference. Total 95 violations across these 25 files. |

## Top violators across all checks

| File | em | us-spell* | q-h | cond | hand | REVIEW | Studio | Total impact |
|---|---|---|---|---|---|---|---|---|
| `concepts/developer-landscape.mdx` | 1 | 0 | 0 | 1 | 1 | 5 | 11 | 19 — REWRITE confirmed |
| `concepts/diagrams2.mdx` | 38† | 0 | 0 | 0 | 0 | 0 | 5 | 5 real (em-dashes acceptable in Mermaid; SPLIT prescribed by Task 1) |
| `concepts/ecosystem-map.mdx` | 0 | 0 | 0 | 1 | 0 | 0 | 8 | 9 — MERGE with Studio-extraction |
| `learn/video-on-livepeer.mdx` | 0 | 0 | 0 | 0 | 0 | 0 | 7 | 7 — REWRITE confirmed |
| `guides/ai/troubleshooting.mdx` | 0 | 0 | 0 | 0 | 0 | 0 | 6 | 6 — REWRITE confirmed |
| `get-started/transcoding-quickstart.mdx` | 0 | 1 | 0 | 0 | 0 | 0 | 7 | 8 — HOLD (Studio version) |
| `navigator.mdx` | 0 | 0 | 1 | 0 | 0 | 0 | 6 | 7 — minor in-place |
| `resources/reference/apis.mdx` | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 5 — REWRITE confirmed |
| `get-started/ai-quickstart.mdx` | 0 | 0 | 0 | 0 | 0 | 0 | 5 | 5 — REWRITE confirmed |
| `build1/comfystream.mdx` | 0 | 0 | 0 | 1 | 0 | 11 | 0 | 12 — verification + 1 fix |
| `get-started/comfystream-quickstart.mdx` | 0 | 0 | 0 | 0 | 0 | 11 | 0 | 11 — verification only |
| `build1/byoc.mdx` | 1 | 0 | 0 | 0 | 0 | 6 | 0 | 7 — verification |
| `build1/model-support.mdx` | 0 | 0 | 0 | 0 | 0 | 5 | 0 | 5 — verification |

*US-spelling raw count excluded Mermaid false-positive zone (color:) — column shows real hits only.
†Em-dashes in Mermaid label text are accepted per repo convention; 38 raw count includes ~33 Mermaid + ~5 narrative.

## STUB files (per CSV)

3 files classified STUB in Task 2:

| File | Bytes | Target | Disposition |
|---|---|---|---|
| `guides/beta-projects/data-mcp.mdx` | 0 | `build/ai-and-agents/ecosystem-mcp/livepeer-data-mcp.mdx` | Hydrate from livepeer-data-mcp README; flag internal-only per `diagrams2.mdx` verification §3 |
| `guides/beta-projects/storyboard.mdx` | 0 | `build/ai-and-agents/agents/storyboard.mdx` | Hydrate from Storyboard repo README (40 BYOC capabilities verified per `diagrams2.mdx` verification §5) |
| `resources/knowledge-hub/wiki.mdx` | 900 (&lt;1KB) | `resources/wiki.mdx` | Thin content; consider expansion or DELETE |

Wonderland decides hydrate-from-other-source vs. net-new for each. Recommendation per Task 2 §"Decisions" — keep all three IA slots, hydrate from canonical sources (no SME needed; both data-mcp and storyboard have repo READMEs).

## Outputs written

All under `v2/developers/_workspace/audit-2026-05-12/`:

- [task-3-grading.csv](task-3-grading.csv) — 54 rows, 12 columns
- [task-3-rewrite-scope.md](task-3-rewrite-scope.md) — per-file rewrite scope for the 22 rewrite-grade files
- [task-3-net-new-list.md](task-3-net-new-list.md) — ~100 net-new pages alphabetised per subgroup
- [task-3-summary.md](task-3-summary.md) — this file

## Key findings

1. **Studio framing is the dominant content-correctness problem.** 25 of 54 graded files (46%) contain at least one Studio reference. 95 total violations. Every Tier 1 rewrite is driven by Studio framing. Project rule 3 is the most-violated rule in the tree.

2. **The recent em-dash sweep (May 4) reset the tree to 0 em-dashes in published pages.** The 94 raw em-dashes counted in Task 3 are concentrated in three files (`diagrams.mdx`, `diagrams2.mdx`, `notes.mdx`) that were modified AFTER the sweep. The sweep's effectiveness is intact for everything else.

3. **The 142 US-spelling hits in `diagrams2.mdx` and 40 in `diagrams.mdx` are all Mermaid CSS `color:` declarations.** False positives. Real US-spelling hits across all 54 files: 7 single-occurrence cases. Should be remediated by next pass of `remediate-us-spelling.js` — the script already handles per-key frontmatter zoning per the CLAUDE.md threads table.

4. **REVIEW flag debt is concentrated in 7 files, all of which are MOVE/REWRITE classifications.** Per project rule 2, each flag needs verification or rewrite-to-not-need-verification. The pattern is documented in `diagrams2.mdx` lines 889–905 — 8 items resolved against named sources. Apply the same pattern.

5. **`consolidate.md` §"Three risks worth naming" §1 — Studio framing creeps back in.** Confirmed empirically. The Studio-violation count of 95 across MOVE/REWRITE files validates the recommendation for a CI grep check on `build/` paths. Mechanical guardrail beats reviewer vigilance.

6. **No SME required for any rewrite.** Every Tier 1 and Tier 2 rewrite in `task-3-rewrite-scope.md` has a named canonical source (go-lp, ai-runner, protocol, repo READMEs, OpenAPI specs, `Remote_signers.md`, ComfyStream README, `aiModels.json`, `diagrams2.mdx` verification log §1–8). Project rule 2 is achievable as written.

7. **Three files block the persona-lock decision** that ultimately drives Task 1's recommendation: `diagrams.mdx`, `diagrams2.mdx`, `notes.mdx`. All three are concurrently in `concepts/` and contain unreconciled persona models. Task 1 §F prescribes consolidation; Task 3 confirms in-place grading is pointless until consolidation happens.

## Recommended action sequence

1. Settle persona model decision (Task 1 §F.1) — Option A (close at 5, subsume E/F).
2. Consolidate persona/infra files (Task 1 §F.2) — rename `diagrams.mdx` → `infra-stack.mdx`; SPLIT `diagrams2.mdx` to `_workspace/`; MOVE `notes.mdx` to `_workspace/`; delete corrupt `persona-infra-maps.md`.
3. DELETE `developers2/` and `concepts1/`/`build1/`/`tutorials1/` duplicate zones (per Task 2 §"Top three concerns" 1 + 3).
4. Execute the 18 MOVE/MERGE classifications from Task 2 mapping CSV.
5. Begin REWRITE work in priority order — `developer-landscape` (11 Studio) → `video-on-livepeer` (7) → `troubleshooting` (6) → `transcoding-quickstart` Studio variant (HOLD) → `apis` (5) → `ai-quickstart` (5) → `authentication` (4) → `production-checklist` (4).
6. Begin REVIEW-flag verification work — `comfystream-quickstart` (11) → `build1/comfystream` (11) → `build1/byoc` (6) → `developer-landscape` (5) → `build1/model-support` (5).
7. Begin net-new authoring in priority order per `consolidate.md` — concepts spine (4) → learn (3) → where-to-find (7) → quickstart trio (3 from build/) → build subgroups (Phase 6) → guides (Phase 7) → reference (Phase 8).
8. Final cleanup — clear remaining REVIEW flags, voice pass, copy-rules pass, redirect cleanup.

STOP — Task 3 complete. All four reports written.
