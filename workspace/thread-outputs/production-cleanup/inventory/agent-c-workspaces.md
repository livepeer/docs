# Agent C — Workspaces and Archives Inventory

**Scanned:** 2026-05-25
**Branch:** `docs-v2-dev-draft`
**Paths:**
- `/workspace/` (top-level)
- `/v2/_workspace/`
- `/docs-guide/_workspace/`
- `/snippets/_workspace/`
- All tab-level `v2/**/_workspace/` dirs
- Other `_workspace/` siblings (`ai-tools/`, `api/`, `tools/`)

**Total files (in scope):**
- `workspace/` — 2,970 files (230 `.mdx`, 1,229 `.md`, 1,283 `.json`, 3 `.htm*`, 5 `.zip`)
- `v2/_workspace/` — 1,153 files (1,111 `.mdx`, 35 `.md`)
- `docs-guide/_workspace/` — 40 files
- `snippets/_workspace/` — non-trivial, contains live audit reports
- Other `_workspace/` siblings — 6 dirs, mostly small

---

## Summary

- **0** production-rendered (none of this scope ships to docs.livepeer.org if `.mintignore` is honoured)
- **All in-scope** classify as `production-tree-internal`, `cut-candidate`, or `archive-candidate`
- **~80 MB** of `workspace/reports/` is largely stale or single-pass output
- **~3.2 MB** zip file in `workspace/plan/active/` is unambiguous cut
- **27** named active plans audited; **2** are debris (FULL-CLEANUP, SHIP-CONTENT each contain ≤1 file)
- **5** explicit cut candidates totalling ~3.4 MB
- **6** plans appear fully shipped — promotable to `workspace/plan/complete/`

### Top 3 risks

1. **`.mintignore` parser fragility.** The bare `_workspace` (line 62) and `**/_workspace/**` (line 63) cover all 13 v2-tree `_workspace/` dirs. The explicit alias block (lines 66–70) does NOT list `/v2/_workspace/**` — only `/v2/**/_workspace/**`, which requires `**` to match a tab subdirectory. If Mintlify's ignore parser only honours the explicit alias section on some build paths, the **top-level `/v2/_workspace/` (1,111 MDX)** would render in production. Recommend adding explicit `/v2/_workspace/**` alongside the other tab aliases.
2. **`CONTENT-WRITING.zip` (3.2 MB)** sitting in `workspace/plan/active/` is a binary artefact. Even though `.mintignore` prunes the directory, this is dead weight in the git tree and inflates clones.
3. **`workspace/reports/archive/orchestrator-guides-review` (12 MB)** and **`workspace/reports/archive/gateway-guides-review` (3.5 MB)** are one-shot audit outputs from March 2026. They are reference-historical only — should be cut or moved out of the production tree.

---

## Inventory table

| Path | Type | Classification | Rationale | Notes |
|---|---|---|---|---|
| `workspace/` | dir, 119 MB, 2970 files | `production-tree-internal` | Covered by `.mintignore` lines 10, 32, 35 | Internal-stays, not rendered |
| `workspace/plan/active/ACTUAL-CONTRACTS.MDX` | file, 22 KB, 470 lines | `archive-candidate` | Loose 470-line MDX at top of active/. Looks like a draft of the contract addresses page. Belongs in `complete/` or `CONTRACTS/` subdir | Verify if superseded by live contracts page first |
| `workspace/plan/active/index.md` | file, 292 lines | `production-tree-internal` | Index for active plans | Keep |
| `workspace/plan/active/master-checks.mdx` | file, 882 lines | `production-tree-internal` | Master checklist | Keep |
| `workspace/plan/active/master-summary.mdx` | file, 348 lines | `production-tree-internal` | Master summary | Keep |
| `workspace/plan/active/AI-TOOLS-GOVERNANCE/` | dir, 448 KB, 70 files, last 2026-04-08 | `archive-candidate` (shipped) | Shipped to `docs-guide/frameworks/ai-tools-governance.mdx`. Move to `complete/` | CLAUDE.md confirms Done |
| `workspace/plan/active/AUTOMATIONS-RESTRUCTURE/` | dir, 20 KB, 3 files, last 2026-04-16 | `archive-candidate` | Only `plan.md`, `master-status.mdx`, one yml | Verify outcome then archive |
| `workspace/plan/active/CANONICAL-TRUTH-GUIDES/` | dir, 12 KB, 2 files, last 2026-03-31 | `archive-candidate` (shipped) | Wraps Workflow-Alignment-Skills; CLAUDE.md confirms shipped | Move to `complete/` |
| `workspace/plan/active/COMPONENT-GOVERNANCE/` | dir, 264 KB, 15 files, last 2026-04-08 | `archive-candidate` (shipped) | Shipped to `docs-guide/frameworks/component-framework-canonical.mdx` + `component-governance.mdx` | Move to `complete/` |
| `workspace/plan/active/CONTENT-PIPLEINE/` | dir (typo), 268 KB, 22 files, last 2026-05-17 | `production-tree-internal` | Active — name typo `PIPLEINE` should be `PIPELINE`. Last touched within 8 days | Keep, rename folder |
| `workspace/plan/active/CONTENT-STRUCTURE-TEMPLATES/` | dir, 36 KB, 4 files, last 2026-04-07 | `production-tree-internal` | Reference templates | Keep |
| `workspace/plan/active/CONTENT-WRITING/` | dir, 4.4 MB, 199 files, last 2026-05-18 | `production-tree-internal` | Active content-pipeline canonical | Keep — primary active thread |
| `workspace/plan/active/CONTENT-WRITING.zip` | file, 3.2 MB | `cut-candidate` | Binary archive of CONTENT-WRITING/ at some prior state. Already superseded by live folder | Cut — 3.2 MB clone bloat |
| `workspace/plan/active/CONTRACTS/` | dir, 508 KB, 30 files, last 2026-05-04 | `production-tree-internal` | Active per CLAUDE.md (Contracts & Changelogs thread). Audit done, awaiting cherry-pick to docs-v2 (BL-023) | Keep |
| `workspace/plan/active/CONTRACTS-CHANGELOG-PIPELINE/` | dir, 48 KB, 2 files, last 2026-04-03 | `archive-candidate` (shipped) | CLAUDE.md confirms Changelog Pipeline Done (24 targets registered, 19 pages populated). Stale | Move to `complete/` |
| `workspace/plan/active/DOCUMENTATION/` | dir, 776 KB, 50 files, last 2026-04-08 | `archive-candidate` | Canonical-Consolidation shipped per CLAUDE.md. Verify outcome | Likely move to `complete/` |
| `workspace/plan/active/FUCK_CLAUDE/` | dir, 200 KB, 23 files, last 2026-03-31 | `production-tree-internal` (keep) | Canonical-diagnostic for VS Code extension issues. CLAUDE.md explicitly references `workspace/plan/active/FUCK_CLAUDE/CANONICAL-DIAGNOSTIC.md` and scripts here | Keep — load-bearing reference |
| `workspace/plan/active/FULL-CLEANUP/` | dir, 8 KB, 1 file (`reconciliation-handoff.md`), last 2026-03-28 | `archive-candidate` | Single-file handoff doc from 2026-03-28 docs-v2 reconciliation. Stale (58 days) | Move to `complete/` or delete |
| `workspace/plan/active/ORCHESTRATOR-CONTENT-WRITING/` | dir, 152 KB, 18 files, last 2026-04-07 | `archive-candidate` | Pre-canonical orchestrator content plan. Superseded by `CONTENT-WRITING/` | Verify then move to `complete/` |
| `workspace/plan/active/ORCHS/` | dir, 1.7 MB, 122 files, last 2026-05-17 | `production-tree-internal` | Active — orchestrators IA + content drafts. 8 days fresh | Keep |
| `workspace/plan/active/OSS-OWNERLESS-REPO-GOVERNANCE/` | dir, 152 KB, 14 files, last 2026-04-16 | `production-tree-internal` | Active per CLAUDE.md (GitHub Actions Governance thread) | Keep |
| `workspace/plan/active/REPO-FEATURES-DOCS-AUDIT/` | dir, 64 KB, 6 files, last 2026-05-18 | `production-tree-internal` | Active — 7 days fresh. Feature inventory + IA proposal | Keep |
| `workspace/plan/active/REPO-STRUCTURE-GOV/` | dir, 276 KB, 25 files, last 2026-04-08 | `archive-candidate` | Shipped per CLAUDE.md Canonical Consolidation thread | Move to `complete/` |
| `workspace/plan/active/SCRIPT WORKFLOW AUDIT/` | dir w/ space, 320 KB, 10 files, last 2026-04-16 | `archive-candidate` | Snippets Audit thread Done per CLAUDE.md. Note: dir name has a space — rename if kept | Move to `complete/` |
| `workspace/plan/active/SCRIPT-GOVERNANCE/` | dir, 376 KB, 23 files, last 2026-05-22 | `production-tree-internal` | Active — 3 days fresh | Keep |
| `workspace/plan/active/SHIP-CONTENT/` | dir, 8 KB, 1 file (`decisions.md`), last 2026-03-29 | `cut-candidate` | Single decisions log, 56 days stale. Decisions appear unresolved | Verify decisions migrated then cut |
| `workspace/plan/active/SNIPPETS/` | dir, 32 KB, 3 files, last 2026-03-31 | `archive-candidate` | Snippets work absorbed by Snippets Audit thread (SCRIPT WORKFLOW AUDIT). Stale 55 days | Move to `complete/` |
| `workspace/plan/active/SOLUTIONS-SOCIAL-DATA/` | dir, 48 KB, 3 files, last 2026-04-16 | `archive-candidate` | Stale and superseded by `_workspace` for solutions tab | Verify then archive |
| `workspace/plan/active/TERMINOLOGY-COLLATE/` | dir, 1.1 MB, 34 files, last 2026-03-31 | `archive-candidate` | Terminology lock complete. Glossary in production | Move to `complete/` |
| `workspace/plan/active/TOOLING/` | dir, 60 KB, 6 files, last 2026-04-16 | `production-tree-internal` | Reference for tooling, supports dev-tools page | Keep |
| `workspace/plan/active/_MY_PROCESS/` | dir, 280 KB, 30 files, last 2026-04-13 | `production-tree-internal` | Personal process docs (audience journey, gap analysis) | Keep, Alison's process |
| `workspace/plan/active/_MY_PROCESS/00_AUDIENCE-JOURNEY/ALL-CURRENT-INFORMATION/RESEARCH/CLAUDE-FILES.zip` | file, 32 KB | `cut-candidate` | Nested zip artefact | Cut |
| `workspace/plan/active/_Project-Management_/` | dir, 460 KB, 11 files, last 2026-04-16 | `production-tree-internal` | Project state, CLAUDE.md draft, completion reports. Load-bearing per CLAUDE.md key-files table | Keep |
| `workspace/plan/complete/` | dir, 9.7 MB, 174 files | `production-tree-internal` | Completed plans archive in production tree | Keep but check 3 `.zip` files inside `dep-COPYWRITING FRAMEWORK/` |
| `workspace/plan/complete/dep-COPYWRITING FRAMEWORK/*.zip` | 3 files, ~208 KB combined | `cut-candidate` | Three zips of superseded copywriting framework | Cut — already deprecated (`dep-` prefix) |
| `workspace/plan/future/` | dir, 892 KB, 67 files | `production-tree-internal` | Backlog (BACKLOG/, USEFULNESS-SCORING) | Keep |
| `workspace/plan/repo-ops-reports/` | dir, 960 KB, 82 files | `archive-candidate` | Date-stamped from 2026-03-16 only (page-content-research history). Single-pass audit | Move to `workspace/reports/archive/` |
| `workspace/reports/archive/` | dir, 20 MB, mostly single-shot audits | `archive-candidate` (consolidate) | 16 entries, biggest is `orchestrator-guides-review` (12 MB), `gateway-guides-review` (3.5 MB), `link-health` (3.1 MB) | Recommend bulk cut after Alison sign-off; preserve high-signal summaries |
| `workspace/reports/codex-thread-insights/` | dir, 3.7 MB, 913 files | `archive-candidate` | Single date-stamped folder `2026-04-03`. High file count, single point-in-time output | Compress + archive or cut |
| `workspace/reports/contracts/` | dir, 13 MB, 230 files | `archive-candidate` | Many date-stamped subdirs from 2026-04-03 contracts redesign work. Likely superseded | Verify against CONTRACTS thread state before cut |
| `workspace/reports/relative-link-audit/` | dir, 9.1 MB, 67 files | `cut-candidate` | Per-tab dry-run/audit/post-audit/write JSON+MD outputs. Single-pass, superseded by passing CI | Cut — link audit lives in CI now |
| `workspace/reports/navigation-links/` | dir, 4.3 MB | `cut-candidate` | One-shot navigation report. Live nav is enforced by docs.json + CI | Cut |
| `workspace/reports/v1-v2-mapping-audit/` | dir, 3.7 MB | `cut-candidate` | v1→v2 migration audit. Migration complete | Cut after sign-off |
| `workspace/reports/v2-nav-gold-standard-audit/` | dir, 2.4 MB | `archive-candidate` | Gold-standard audit; could inform future audits | Move to `_workspace/archive/` |
| `workspace/reports/research/` | dir, 4.6 MB | `archive-candidate` | Active research outputs (CLAUDE.md references `.claude/references/`) | Keep but consolidate older entries |
| `workspace/reports/repo-ops/` | dir, 14 MB, 96 files | `archive-candidate` | 2026-03-16 page-content-research per-tab pilots. Single-pass | Most movable to `archive/` |
| `workspace/reports/governance/` | dir, 268 KB | `production-tree-internal` | Active — gap-report.mdx referenced in CLAUDE.md key-files | Keep |
| `workspace/reports/health/` | dir, 512 KB | `production-tree-internal` | Ongoing health reports | Keep |
| `workspace/reports/_local/` | dir, 176 KB | `production-tree-internal` | Local-only outputs | Keep |
| `workspace/reports/handover/` | dir, 44 KB | `archive-candidate` | One-shot handover docs | Move to archive after content check |
| `workspace/reports/openapi-reference/` | dir, 60 KB | `production-tree-internal` | OpenAPI reference outputs | Keep if active |
| `workspace/reports/page-audits/`, `media-audit/`, `script-audit/`, `quality-accessibility/`, `content-gap/`, `performance/` | dirs, ~3.7 MB combined | `production-tree-internal` | Recurring audit outputs | Keep most recent, archive older |
| `workspace/thread-outputs/` | dir, 11 MB | `production-tree-internal` | Active session outputs | Keep |
| `workspace/thread-outputs/sessions/` | dir, 7.9 MB | `production-tree-internal` | Active session log + 7.7 MB `recovered-chats/` (20 chat dumps) | Keep, but `recovered-chats/` (7.7 MB) could be cut after verification |
| `workspace/thread-outputs/sessions/recovered-chats/` | dir, 7.7 MB, 20 files | `cut-candidate` | Recovered chat dumps. Single-purpose recovery from VS Code extension crash | Cut after Alison sign-off |
| `workspace/thread-outputs/resource-hub-aggregation/` | dir, 2.0 MB | `archive-candidate` | Per CLAUDE.md, Resource Hub work likely shipped | Verify thread status |
| `workspace/thread-outputs/repo-consolidation-deep/` | dir, 472 KB | `production-tree-internal` | Active consolidation work | Keep |
| `workspace/thread-outputs/repo-docs-consolidation/` | dir, 304 KB | `production-tree-internal` | Active | Keep |
| `workspace/thread-outputs/production-cleanup/` | dir, 24 KB | `production-tree-internal` | THIS thread | Keep |
| `workspace/thread-outputs/build/`, `research/`, `about/`, `CONTENT-WRITING/`, `design/` | dirs, ~268 KB combined | `production-tree-internal` | Active thread outputs | Keep |
| `workspace/research/` | dir, 76 KB | `production-tree-internal` | Research artefacts | Keep |
| `workspace/build/` | dir, 28 KB | `production-tree-internal` | Build artefacts | Keep |
| `workspace/staging/` | dir, 836 KB | `production-tree-internal` | Staging area | Keep |
| `workspace/scripts/` | dir, 32 KB | `production-tree-internal` | Scripts | Keep |
| `workspace/tmp/` | dir, 28 KB | `cut-candidate` | `tmp/` should be ephemeral; if any content here, it's debris | Cut contents, keep dir empty |
| `workspace/errors/` | dir, 4 KB | `cut-candidate` | Empty or near-empty error log dir | Cut |
| `workspace/x-archive/` | dir, 16 KB | `production-tree-internal` | Single archived items | Keep |
| `workspace/archive/` | dir, 120 KB | `production-tree-internal` | Smaller archive area | Keep |
| `v2/_workspace/` | dir, 8.8 MB, **1,153 files (1,111 MDX)** | `production-tree-internal` (IF mintignore parser honours bare `_workspace`) | Bare `_workspace` (line 62) + `**/_workspace/**` (line 63) cover this. **However the explicit alias block lines 66–70 does NOT list `/v2/_workspace/**`.** See `## Mintlify ignore gaps` | **CRITICAL — verify Mintlify parser behaviour** |
| `v2/_workspace/archive/` | dir, 8.6 MB | `production-tree-internal` | Main bulk of v2/_workspace — language-pages archive (es, fr) + x-deprecated/x-experimental/x-notes | Keep ignored |
| `v2/_workspace/archive/language-pages/` | dir, 1,070 files | `production-tree-internal` | i18n archive (es, fr) — never rendered | Keep ignored |
| `v2/_workspace/context-data/`, `notes/`, `plans/`, `research/`, `locale-page-archive/` | dirs, ~280 KB combined | `production-tree-internal` | Workspace material for v2 work | Keep ignored |
| `v2/about/_workspace/` | dir | `production-tree-internal` | Tab workspace; covered by line 79 (`/v2/**/_workspace/**`) | Keep ignored |
| `v2/community/_workspace/` | dir | `production-tree-internal` | Tab workspace | Keep ignored |
| `v2/delegators/_workspace/` | dir | `production-tree-internal` | Tab workspace; per CLAUDE.md Delegators thread Done | Keep ignored |
| `v2/developers/_workspace/` | dir, contains nested developers1/_workspace + developers2/_workspace | `production-tree-internal` | Tab workspace + 2 historical clone subdirs | Keep ignored, consider consolidating internally |
| `v2/gateways/_workspace/` | dir | `production-tree-internal` | Tab workspace — per CLAUDE.md, Verify/Monitor/Connect threads write here | Keep ignored |
| `v2/home/_workspace/` | dir | `production-tree-internal` | Tab workspace | Keep ignored |
| `v2/internal/_workspace/` | dir | `production-tree-internal` | Internal workspace | Keep ignored |
| `v2/orchestrators/_workspace/` | dir, contains x-archived | `production-tree-internal` | Tab workspace | Keep ignored |
| `v2/resources/_workspace/` | dir | `production-tree-internal` | Tab workspace | Keep ignored |
| `v2/solutions/_workspace/` | dir, contains x-deprecated | `production-tree-internal` | Tab workspace | Keep ignored |
| `docs-guide/_workspace/` | dir, 40 files | `production-tree-internal` | Explicit alias line 14 + line 68 | Keep ignored |
| `docs-guide/_workspace/02_Design-Specification/`, `03_Component-Governance-Framework/` | dirs | `production-tree-internal` | Reference design specs | Keep ignored |
| `docs-guide/_workspace/livepeer_production_authoring_standard_2026.md` | file | `production-tree-internal` | Reference standard | Keep |
| `snippets/_workspace/` | dir, includes `audit.md` (11.6 KB), `snippets-review.md` (40 KB), `reports/`, `archive/`, `asset-staging/` | `production-tree-internal` | Explicit alias line 69 + bare `_workspace`. Contains active audit reports | Keep ignored |
| `ai-tools/_workspace/` | dir | `production-tree-internal` | Alias line 66 | Keep ignored |
| `ai-tools/ai-skills/_workspace/` | dir | `production-tree-internal` | Covered by bare `_workspace` + `**/_workspace/**` | Keep ignored |
| `api/_workspace/` | dir | `production-tree-internal` | Alias line 67 | Keep ignored |
| `tools/_workspace/` | dir | `production-tree-internal` | Alias line 70 | Keep ignored |
| `.github/x-archive/docs-guide1/_workspace/` | dir | `cut-candidate` | Inside `.github/x-archive/` — abandoned x-archive of docs-guide1 | Cut entire `.github/x-archive/` chain |
| `.github/x-archive/docs-guide1/canonical/collation-data/Mintlify/dep-files/v2/_workspace/` | dir | `cut-candidate` | Deep `dep-files/` chain within abandoned x-archive | Cut |
| `docs-guide/canonical/collation-data/Mintlify/dep-files/v2/_workspace/` | dir | `cut-candidate` | `dep-files/` = deprecated. Path is inside docs-guide canonical but in a deprecated subdir | Cut after verifying no references |

---

## Cut candidates (high-confidence)

1. **`workspace/plan/active/CONTENT-WRITING.zip`** — 3.2 MB binary archive of an existing live folder. Last touched 2026-03-24. Bloats every clone by 3.2 MB and is functionally dead (superseded by the live `CONTENT-WRITING/` directory). Evidence: `du -sh` = 3.2 MB; `git log -1 --format=%cs` = 2026-03-24; the live folder has 199 files and is the active working copy.
2. **`workspace/plan/complete/dep-COPYWRITING FRAMEWORK/*.zip`** — 3 zip files totalling ~208 KB. Directory is prefixed `dep-` (deprecated convention used in this repo). Already in `complete/`, zips are redundant.
3. **`workspace/reports/relative-link-audit/`** — 9.1 MB, 67 files. Per-tab `dry-run` / `audit` / `post-audit` / `write` JSON+MD outputs from a one-shot audit. CI now enforces link health (per CLAUDE.md key files: `workspace/reports/repo-ops/GOVERNANCE_MAP_LATEST.json` is the active map).
4. **`workspace/reports/navigation-links/`** — 4.3 MB. Single-pass nav report; `docs.json` validation lives in CI.
5. **`workspace/plan/active/_MY_PROCESS/00_AUDIENCE-JOURNEY/ALL-CURRENT-INFORMATION/RESEARCH/CLAUDE-FILES.zip`** — 32 KB nested zip artefact. Deep path, no apparent consumer.
6. **`.github/x-archive/`** chain — abandoned x-archive of an older `docs-guide1` plus deep `dep-files/v2/_workspace/`. Multiple `_workspace/` dirs nested inside a `.github/x-archive/` parent that is itself debris. Recommend cutting the whole `.github/x-archive/` tree.
7. **`workspace/plan/active/SHIP-CONTENT/`** — 8 KB, 1 file, 56 days stale. The decisions in `decisions.md` are all `OPEN` and were never resolved here; if they matter they migrate to `decision-registry.md`. Cut after Alison confirms migration.
8. **`workspace/plan/active/FULL-CLEANUP/`** — 8 KB, 1 file (`reconciliation-handoff.md`), 58 days stale. Historical handoff; preserve in `workspace/plan/complete/` if needed for archaeology, otherwise cut.

---

## Archive candidates

Move from `active/` to `complete/` (these are listed as Done in CLAUDE.md but still live in `active/`):

1. **`workspace/plan/active/AI-TOOLS-GOVERNANCE/`** (448 KB, last 2026-04-08) — shipped to `docs-guide/frameworks/ai-tools-governance.mdx`
2. **`workspace/plan/active/COMPONENT-GOVERNANCE/`** (264 KB, last 2026-04-08) — shipped to `docs-guide/frameworks/component-framework-canonical.mdx` and `component-governance.mdx`
3. **`workspace/plan/active/CONTRACTS-CHANGELOG-PIPELINE/`** (48 KB, last 2026-04-03) — Changelog Pipeline thread is Done
4. **`workspace/plan/active/REPO-STRUCTURE-GOV/`** (276 KB, last 2026-04-08) — Canonical Consolidation thread Done
5. **`workspace/plan/active/SCRIPT WORKFLOW AUDIT/`** (320 KB, has SPACE in name, last 2026-04-16) — Snippets Audit thread Done. ALSO rename to remove space.
6. **`workspace/plan/active/CANONICAL-TRUTH-GUIDES/`** (12 KB, last 2026-03-31) — Workflow Alignment Skills shipped
7. **`workspace/plan/active/DOCUMENTATION/`** (776 KB, last 2026-04-08) — Canonical Consolidation absorbed this
8. **`workspace/plan/active/ORCHESTRATOR-CONTENT-WRITING/`** (152 KB, last 2026-04-07) — Superseded by `CONTENT-WRITING/`
9. **`workspace/plan/active/TERMINOLOGY-COLLATE/`** (1.1 MB, last 2026-03-31) — Terminology lock complete, glossary in production
10. **`workspace/plan/active/SNIPPETS/`** (32 KB, last 2026-03-31) — Absorbed by Snippets Audit thread
11. **`workspace/plan/active/SOLUTIONS-SOCIAL-DATA/`** (48 KB, last 2026-04-16) — Solutions tab work has shipped
12. **`workspace/plan/active/AUTOMATIONS-RESTRUCTURE/`** (20 KB, last 2026-04-16) — small plan, status unclear

Move from `workspace/reports/` to deeper archive or cut after summary preserved:

13. **`workspace/reports/archive/orchestrator-guides-review/`** (12 MB) — biggest single archive entry
14. **`workspace/reports/archive/gateway-guides-review/`** (3.5 MB)
15. **`workspace/reports/archive/link-health/`** (3.1 MB)
16. **`workspace/reports/codex-thread-insights/`** (3.7 MB, 913 files, single date)
17. **`workspace/reports/contracts/`** (13 MB) — verify against active CONTRACTS thread first
18. **`workspace/reports/v1-v2-mapping-audit/`** (3.7 MB) — migration complete
19. **`workspace/reports/v2-nav-gold-standard-audit/`** (2.4 MB)
20. **`workspace/reports/repo-ops/`** (14 MB, 96 files) — single date 2026-03-16
21. **`workspace/reports/handover/`** (44 KB)
22. **`workspace/thread-outputs/sessions/recovered-chats/`** (7.7 MB, 20 files) — recovered chat dumps from VS Code extension issues; if VS Code repair is resolved, archive or cut
23. **`workspace/thread-outputs/resource-hub-aggregation/`** (2.0 MB) — verify thread status; CLAUDE.md doesn't list it as active

---

## Gold candidates

1. **`workspace/plan/active/_Project-Management_/project-state.md`** — Single source of truth for current state; CLAUDE.md mandates reading every session. Pattern of central state file is exemplary.
2. **`workspace/plan/active/FUCK_CLAUDE/CANONICAL-DIAGNOSTIC.md`** — Despite the name, this is canonical diagnostic doc with 12 confirmed root causes for VS Code extension issues. CLAUDE.md "DO NOT rediscover these" pattern is good defensive engineering.
3. **`workspace/plan/active/CONTENT-WRITING/plan-canonical.md` + `decisions/decision-registry.md` + `decisions/tab-status.md`** — Multi-doc canonical structure with locked decisions, gate status, and blocking items is a strong pattern for content threads.
4. **`workspace/plan/active/CONTENT-PIPLEINE/00-TRACKER.md` → `04.5-reconsolidation.md`** — Numbered phase files with a top tracker is a clean pipeline pattern (typo in folder name aside).
5. **`workspace/plan/active/CONTRACTS/CURRENT-STATE/` + `Canonical/` + `DEPRECATED/`** — Three-folder lifecycle (current → canonical → deprecated) is a strong pattern.

---

## Needs collaboration

1. **`workspace/plan/active/CONTENT-PIPLEINE/`** — folder name has typo `PIPLEINE`. Rename to `CONTENT-PIPELINE/` requires updating any references. Alison: approve rename + I run propagate?
2. **`workspace/plan/active/SCRIPT WORKFLOW AUDIT/`** — folder name has a SPACE which breaks many tooling chains. Recommend renaming to `SCRIPT-WORKFLOW-AUDIT/`. Alison: confirm.
3. **`workspace/plan/active/FUCK_CLAUDE/`** — CLAUDE.md key-files table references this path directly. Name is profane. Rename to `VSCODE-EXTENSION-DIAGNOSTIC/` and update CLAUDE.md? Alison call.
4. **`workspace/plan/active/ACTUAL-CONTRACTS.MDX`** — a 470-line MDX at the top level of `active/` (not inside any plan subfolder). Looks like an early draft of the contracts page. Verify against `v2/contracts/` live page — if superseded, archive; if not, move into `CONTRACTS/` subfolder.
5. **`workspace/plan/active/DOCUMENTATION/` vs `_MY_PROCESS/`** — both contain meta-process docs and master-status files. Possible duplication. Need Alison's confirmation on which is authoritative.
6. **`v2/developers/_workspace/developers1/_workspace/` and `developers2/_workspace/`** — nested clones of the developers workspace. Looks like historical iteration debris. Alison: can these be flattened/cut?
7. **`workspace/reports/contracts/` (13 MB)** — superseded by active CONTRACTS thread? Need to verify before cut.
8. **`workspace/thread-outputs/sessions/recovered-chats/` (7.7 MB, 20 files)** — these are chat recovery dumps. If VS Code extension issues are stable (FUCK_CLAUDE thread Done), these can be archived/cut.

---

## Features discovered

(In-scope = workspace material; few user-facing features discovered here, but a few cross-reference observations)

- **Snippets audit pipeline** — `snippets/_workspace/audit.md` + `snippets-review.md` document an automated audit of `snippets/automations/` and `snippets/data/`. Result lives in `_workspace/reports/`. Already a Done thread per CLAUDE.md. Audience: internal/contributor; maturity: stable; docs: `snippets/_workspace/audit.md`
- **VS Code Claude Code repair scripts** — `workspace/plan/active/FUCK_CLAUDE/scripts/full-repair.sh` + `patch-extension.sh` — practical scripts for self-repair. Audience: internal/contributor; maturity: stable; docs: `workspace/plan/active/FUCK_CLAUDE/CANONICAL-DIAGNOSTIC.md`
- **Decision registry pattern** — `workspace/plan/active/CONTENT-WRITING/decisions/decision-registry.md` cross-references all 7+ decision logs across threads; same pattern surfaces in `docs-guide/decisions/registry.md`. Pattern itself worth documenting.

---

## Future upgrades discovered

- **Promote shipped plans automation** — script to detect plans in `workspace/plan/active/` whose master-status indicates Done and which haven't been touched in >30 days, then propose moving to `complete/`. Effort: S; skill: script
- **Workspace size budget** — `workspace/reports/` is 80 MB; could enforce a per-subdir size budget that triggers an archive/cut review when exceeded. Effort: S; skill: workflow
- **Folder-name lint** — `CONTENT-PIPLEINE/` (typo), `SCRIPT WORKFLOW AUDIT/` (space), `FUCK_CLAUDE/` (profanity, but load-bearing) — a folder-name lint that flags typos/spaces/policy violations under `workspace/plan/active/`. Effort: XS; skill: script
- **Recovered-chats lifecycle** — 7.7 MB in `recovered-chats/` is recovery artefact. Define a retention policy (e.g. archive after 30 days of stability). Effort: XS; skill: governance
- **Mintignore explicit aliases for all root `_workspace/` dirs** — currently `/v2/_workspace/**` is implicitly covered by the `**` patterns but not explicitly aliased like the others (lines 66–70). Add explicit alias for parser robustness. Effort: XS; skill: mdx
- **`_dep-files/` and `dep-COPYWRITING FRAMEWORK/` naming** — the `dep-` prefix is meaningful but undocumented. Add a `docs-guide/standards/naming-conventions.mdx` entry describing `dep-` (deprecated) vs `x-` (experimental/archived) prefixes. Effort: XS; skill: governance

---

## Mintlify ignore gaps

**Headline finding:** `.mintignore` already covers all `_workspace/` directories via three layered patterns:
- Line 62: bare `_workspace` (directory pruning)
- Line 63: `**/_workspace/**` (deep ignore)
- Lines 66–70: explicit aliases for `/ai-tools/_workspace/**`, `/api/_workspace/**`, `/docs-guide/_workspace/**`, `/snippets/_workspace/**`, `/tools/_workspace/**`
- Line 79: `/v2/**/_workspace/**` (covers `v2/about/_workspace/`, `v2/gateways/_workspace/`, etc.)

**Gaps (parser-robustness):**

1. **`/v2/_workspace/**`** — NOT listed in the explicit alias block (lines 66–70). The bare `_workspace` and the `**/_workspace/**` pattern cover it, but the explicit pattern `/v2/**/_workspace/**` requires `**` to match something between `v2/` and `_workspace/`, which it may not for the top-level `v2/_workspace/`. **Recommend adding** `/v2/_workspace/**` to the explicit alias block. **Risk if missed: 1,111 MDX files in `v2/_workspace/archive/` could render.**

2. **`/ai-tools/ai-skills/_workspace/**`** — nested deep `_workspace` under `ai-tools/ai-skills/`. Covered by line 63 (`**/_workspace/**`) but not explicitly aliased. Low risk because line 36 already prunes all of `/ai-tools/**`. Add explicit alias only if other `ai-tools/` subpaths get un-ignored.

3. **`/.github/x-archive/**`** — entire `.github/x-archive/` tree contains nested `_workspace/` and `dep-files/v2/_workspace/`. Covered by line 31 (`/.github/**`) so safe, but the tree is debris regardless and should be cut.

4. **`workspace/x-archive/`** (top-level workspace x-archive, not v2 x-archive) — covered by line 32 (`/workspace/**`) and line 35 (bare `workspace`). No gap.

5. **`docs-guide/canonical/collation-data/Mintlify/dep-files/v2/_workspace/`** — covered by `**/_workspace/**` but the `dep-files/` parent is not ignored. If Mintlify follows the parent, then the `_workspace/` inside is still pruned. No production risk, but the `dep-files/` directory itself is debris — should be cut, not ignored.

**Verified safe (no gap):**
- All 13 tab-level `v2/*/_workspace/` dirs
- All `v2/**/x-archived/**`, `x-deprecated/**`, `x-experimental/**`, `x-notes/**`, etc.
- `docs-guide/_workspace/`, `snippets/_workspace/`, `ai-tools/_workspace/`, `api/_workspace/`, `tools/_workspace/`

**Action:** Add to `.mintignore` after line 69:
```
/v2/_workspace/**
```

This makes the production ignore behaviour explicit and parser-agnostic.

---

## Cross-cutting observations

1. **Active vs Complete mismatch.** 12 of 27 named "active" plans appear to be Done per CLAUDE.md but still sit under `workspace/plan/active/`. The active/complete signal is degraded. Recommend an automation (see Future Upgrades) plus a one-time bulk move.
2. **Zip files in tree.** 5 zip files totalling ~3.4 MB scattered across `workspace/`. Git tracks binaries badly. Cut all unless one is load-bearing (none appear to be — they're all snapshots of existing live folders).
3. **Folder naming inconsistencies.** `CONTENT-PIPLEINE` (typo), `SCRIPT WORKFLOW AUDIT` (space breaks tooling), `FUCK_CLAUDE` (profanity but load-bearing per CLAUDE.md). Recommend a folder-name lint under `workspace/plan/active/`.
4. **`workspace/reports/` is 80 MB and ~80% one-shot audit output.** Many subdirs are single-date-stamped and never updated. Most are safe to archive or cut once their findings are absorbed into governance frameworks.
5. **`v2/_workspace/archive/language-pages/` holds 1,070 files** (es + fr i18n archive). This is the bulk of the v2/_workspace MDX count. Confirmed never rendered (mintignore covers it), but represents a significant tree-bloat. Could be moved to a separate archive branch if clone size becomes an issue.
6. **Recovered-chats (7.7 MB)** in `workspace/thread-outputs/sessions/recovered-chats/` are individual chat exports keyed by hash. Single-purpose VS Code crash recovery. Defines a retention policy gap.
7. **Three nested `_workspace/` layers under `v2/developers/`** — `developers/_workspace/developers1/_workspace/` and `developers/_workspace/developers2/_workspace/`. Iteration debris. Flatten.
8. **`workspace/plan/active/_MY_PROCESS/` and `workspace/plan/active/DOCUMENTATION/`** both contain `master-status.mdx` + meta-process docs. Possible duplication of intent. Needs Alison's read.
9. **`workspace/plan/complete/` already contains `dep-COPYWRITING FRAMEWORK/`** — pattern of `dep-` prefix inside `complete/` works, suggesting the team has an informal lifecycle (active → complete → dep-complete). Consider documenting this lifecycle in `docs-guide/standards/`.
10. **Multiple `_workspace/` dirs across the tree (27 found by `find`).** Some inside `.github/x-archive/` are themselves inside archived/deprecated trees, which is fine but confusing. The 6 root-level ones (`ai-tools/`, `api/`, `docs-guide/`, `snippets/`, `tools/`, `v2/`) plus 13 v2 tab-level ones are the canonical set.
