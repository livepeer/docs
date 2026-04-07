---
title: Repo Root Structure Governance Plan
status: active
owner: REPO-STRUCTURE-GOV
created: 2026-03-20
---

# Repo Root Structure Governance Plan

> Process reference: [process.md](process.md) — phases, decision gates, checkin rules, and execution rules for all restructure work.
> Folder structure decisions: [folder-structure.md](folder-structure.md) — canonical target layout and per-folder status.

## Checkin Rules

Every task in this plan follows the two-checkin rule from [process.md](process.md):

**Before execution:** State exactly what will be done, what is out of scope, and any risks. Wait for explicit confirmation.

**After completion:** Post completed items (with paths), flags noticed, full checklist with `✅ complete / ▶ current / ⬜ not started` status, and recommended next task.

## Scope

This plan governs the root folder layout and per-folder structure of this repo —
**excluding** content governed by other active plans:

| Plan                   | Owns                                                   |
| ---------------------- | ------------------------------------------------------ |
| SCRIPT-GOVERNANCE      | `tools/scripts/` restructure → `operations/` (Task 14) |
| AI-TOOLS-GOVERNANCE    | `ai-tools/` placement + rules                          |
| COMPONENT-GOVERNANCE   | `snippets/components/` + component registry            |
| CONTENT-WRITING        | `v2/` page content                                     |
| CANONICAL-TRUTH-GUIDES | `docs-guide/` content accuracy                         |

Everything else — including root file governance, `snippets/assets/`, `contribute/`, `api/`, `tools/` (post-scripts), `tasks/`, `docs-guide/` structure, and root-level clutter — belongs here.

---

## Confirmed Decisions

| Decision                                     | Source                    |
| -------------------------------------------- | ------------------------- |
| `tools/scripts/` + `tests/` → `/operations/` | SCRIPT-GOVERNANCE Task 14 |
| `contribute/` → `docs-guide/contributing/`   | Draft + audit             |
| `docs/` → `_dep-docs/` (then delete)         | Audit — no refs anywhere  |
| `tasks/` → `workspace/`                      | Human decision 2026-03-20 |

---

---

## Target Root Structure

```
/                            ← repo root
│
├── .claude/                 ← AI adapter: Claude
├── .codex/                  ← AI adapter: Codex
├── .cursor/                 ← AI adapter: Cursor
├── .windsurf/               ← AI adapter: Windsurf
├── .github/                 ← CI/CD workflows
├── .githooks/               ← local git hooks
├── .vscode/                 ← editor settings
│
├── ai-tools/                ← AI rules, skills, agent packs [AI-TOOLS-GOVERNANCE]
├── api/                     ← OpenAPI specs (cleaned up, see below)
├── docs-guide/              ← contributor + authoring guide [structural cleanup here]
├── operations/              ← scripts/ + tests/ [SCRIPT-GOVERNANCE Task 14]
├── snippets/                ← shared MDX components, assets, data
├── workspace/               ← planning workspace (renamed from tasks/)
├── tools/                   ← dev tooling (cli, lib, vscode, notion, dev, config, data)
├── v1/                      ← v1 content pages
├── v2/                      ← v2 content pages
│
├── docs.json                ← Mintlify nav config
├── style.css                ← Mintlify global styles
├── .mintignore
├── .allowlist
├── .editorconfig
├── .gitignore
├── .gitattributes
├── .prettierrc
├── LICENSE
├── README.md
├── AGENTS.md
│
└── [generated at build]
    ├── llms.txt
    ├── sitemap-ai.xml
    └── docs-index.json
```

### What leaves root (vs. current state)

| Current          | Target                     | Owner             |
| ---------------- | -------------------------- | ----------------- |
| `tools/scripts/` | `operations/scripts/`      | SCRIPT-GOVERNANCE |
| `tests/`         | `operations/tests/`        | SCRIPT-GOVERNANCE |
| `contribute/`    | `docs-guide/contributing/` | This plan         |
| `docs/`          | `_dep-docs/` → delete      | This plan         |

### What stays but gets cleaned internally

| Folder             | Issue                                                              |
| ------------------ | ------------------------------------------------------------------ |
| `api/`             | `openapi.yaml.backup` + `worker/` partial mirror                   |
| `tools/`           | `script-index.md` stale; `x-archive/` + `archive/` dual strategies |
| `snippets/assets/` | 20 MB unused community heroes; hero duplicate tree                 |
| `docs-guide/`      | Empty stubs, deprecated `component-framework.mdx`, archive files — see [subplan-docs-guide.md](subplan-docs-guide.md) |
| `workspace/` (renamed from `tasks/`) | rename + `dep-COPYWRITING FRAMEWORK` loose in active/; 4 loose `.md` files |

### Root files to delete now

| File            | Reason                                            |
| --------------- | ------------------------------------------------- |
| `docs.json.bak` | Stale backup                                      |
| `_dep-docs/`    | After extracting todo notes to tasks (30-day TTL) |
| All `.DS_Store` | macOS metadata noise                              |

---

## Phases

### Phase 0 — Safe cleanup (no coord required)

- [x] **0.1** Rename `docs/` → `_dep-docs/` (zero references, zero risk) *(done — pre-2026-03-21)*
- [x] **0.2** Add `/_dep-docs/**` to `.mintignore` *(done — pre-2026-03-21; `_dep-docs` added to `.allowlist` 2026-03-21)*
- [x] **0.3** Extract todo.txt notes from `_dep-docs/` into a task — see `_dep-docs-todo-notes.md` (30-day TTL: 2026-04-21)
- [x] **0.4** Delete `docs.json.bak` from root *(already gone)*
- [x] **0.5** Delete `api/openapi.yaml.backup` *(already gone)*
- [x] **0.6** Delete all `.DS_Store` files across repo *(2026-03-21)*
- [x] **0.7** Move `tasks/plan/active/dep-COPYWRITING FRAMEWORK` → `workspace/plan/complete/` *(already in complete/)*
- [x] **0.8** Move loose `.md` files in `workspace/plan/active/` — only `index.md` remains (correct)
- [x] **0.9** Fix stale `/tasks` → `/workspace` in `.mintignore` *(2026-03-21)*

---

### Phase 1 — Root consolidation (coordinate with SCRIPT-GOVERNANCE)

> Prerequisite: SCRIPT-GOVERNANCE Task 14 merged + scripts thread agent completes `workspace/` rename.
> This plan does NOT execute those moves — it verifies them (see verification checklists below).

- [ ] **1.1** Run `/operations` verification checklist (below) after SCRIPT-GOVERNANCE Task 14 merges
- [x] **1.2** Run `workspace/` verification checklist — complete; all V-WS items verified *(2026-03-21)*
- [ ] **1.3** Move `contribute/` → `docs-guide/contributing/` (merge with existing `contributing/` subdir)
  - Update all inbound links in docs.json, v2 pages, AGENTS.md
  - Update `.mintignore` path if applicable
- [ ] **1.4** Add `/_dep-docs/` deletion to post-Phase-0 30-day TTL (set calendar reminder)
- [ ] **1.5** Confirm `ai-tools/` final placement post AI-TOOLS-GOVERNANCE
- [ ] **1.6** Update `root-allowlist-governance.mdx` to reflect new root (add `operations/`, remove `tests/`, update `contribute/`)

---

### Verify: `/operations` migration (owned by SCRIPT-GOVERNANCE + scripts agent)

> Run this checklist after SCRIPT-GOVERNANCE Task 14 is merged. Do not action — verify only.

- [ ] **V-OP.1** `operations/scripts/` exists and contains expected subdirs (`audits/`, `generators/`, `validators/`, `remediators/`, `dispatch/`, `automations/`, `archive/`, `x-archive/`)
- [ ] **V-OP.2** `operations/tests/` exists and contains `unit/`, `integration/`, `config/`, `fixtures/`
- [ ] **V-OP.3** `tools/scripts/` no longer exists at root (or is an empty shell)
- [ ] **V-OP.4** `tests/` no longer exists at root
- [ ] **V-OP.5** All `.githooks/` scripts resolve: `pre-commit`, `pre-push`, `post-merge` — run `bash .githooks/pre-commit --dry-run` or equivalent
- [ ] **V-OP.6** `npm run` targets in `tools/package.json` that reference `tools/scripts/` paths are updated to `operations/scripts/`
- [ ] **V-OP.7** `AGENTS.md` script path references updated
- [ ] **V-OP.8** `docs-guide/policies/root-allowlist-governance.mdx` reflects `operations/` as an allowed root entry
- [ ] **V-OP.9** `docs-guide/catalog/scripts-catalog.mdx` regenerated (paths reflect new location)
- [ ] **V-OP.10** Spot-check 3 scripts via `node operations/scripts/<path>/<script>.js --help` — confirm they run without module-not-found errors

---

### Verify: `tasks/` → `workspace/` rename (owned by scripts thread agent)

> Run this checklist after the scripts thread agent completes the rename. Do not action — verify only.

- [x] **V-WS.1** `workspace/` exists at root with correct internal structure *(scripts agent confirmed 2026-03-21 — 731 files renamed)*
- [x] **V-WS.2** `tasks/` no longer exists at root *(scripts agent confirmed 2026-03-21)*
- [x] **V-WS.3** `workspace/plan/active/` contains all currently active plan folders *(14 new files from other threads correctly placed in workspace/ per merge)*
- [x] **V-WS.4** `tasks-retention.yml` verified — stub with no path refs; name already reads "workspace/ retention enforcement"; no action needed *(2026-03-21)*
- [x] **V-WS.5** No broken refs in AGENTS.md *(scripts agent: all path refs updated across 30 scripts, 19 tests, 5 config files, 1 lib file, 3 workflows, 1 codex task contract)*
- [x] **V-WS.6** No broken refs in AI adapter files *(included in 5 config files updated)*
- [x] **V-WS.7** `docs-guide/policies/root-allowlist-governance.mdx` updated: `workspace/` replaces `tasks/` *(2026-03-21 — inventory, decision matrix, move candidate note all updated)*
- [x] **V-WS.8** Scripts referencing `tasks/` paths updated *(30 scripts updated; test suite exit code 0)*
- [x] **V-WS.9** `lpd` CLI fixed *(2026-03-21 — `group_root tasks` now maps to `workspace/scripts`; `workspace` added as new canonical group; `tasks` kept as legacy alias; legacy report git-add path fixed to `workspace/reports/`; all help text updated)*
- [x] **V-WS.10** `.mintignore` entry `/tasks/**` updated to `/workspace/**` *(2026-03-21)*

---

### Phase 2 — Per-folder cleanup (priority order)

#### 2A — `docs-guide/` restructure ✅ phase complete — open items in subplan

> Phase 2A implementation done 2026-03-21. 7 canonical sections now in place (catalog, contributing, features, frameworks, policies, repoOps, tooling).
> See [subplan-docs-guide.md](subplan-docs-guide.md) for remaining audit, overlap review, and root clutter tasks.
> Work directory: [docs-guide/](docs-guide/)

**2A-I — Approve structure + naming framework** *(gate — human review required)*
- [x] **2A-I.1** Review `docs-guide-restructure-draft.md` — confirmed *(2026-03-21)*
- [x] **2A-I.2** Confirm naming framework: `-catalog.mdx` suffix, no `-index.mdx`, no 0-byte stubs, 6 sections + `_workspace/` *(confirmed 2026-03-21)*
- [x] **2A-I.3** `ai-tools.mdx` → `docs-guide/tooling/` (human override; `features/` was recommendation) *(2026-03-21)*
- [x] **2A-I.4** 5 template types confirmed for `snippets/templates/docs-guide/` *(created 2026-03-21)*
- [x] **2A-I.5** `docs-guide/policies/docs-guide-structure-policy.mdx` approved + written *(2026-03-21)*

**2A-II — Fix upstream script problems** *(safe after 2A-I approval; no nav impact)*
- [x] **2A-II.1** Delete 3 stale `.codex/locks-local/` files *(2026-03-21)*
- [x] **2A-II.2** `generate-docs-guide-indexes.js` added to CI pipeline *(2026-03-21 — `generate-docs-guide-catalogs.yml` + `check-docs-guide-catalogs.yml`; **NOTE: went to CI workflows, NOT hooks — pre-commit is hard-gates-only**)*
- [x] **2A-II.3** `generate-docs-guide-pages-index.js` added to CI pipeline *(2026-03-21 — same workflows as above)*
- [x] **2A-II.4** Handoff written → `handoff-component-usage-map.md` delivered to COMPONENT-GOVERNANCE *(2026-03-21)*

**2A-III — Add missing templates** *(handoff — see `handoff-snippets-templates.md`)*
- [x] **2A-III.0** Handoff delivered to snippets/templates owner → see `handoff-snippets-templates.md`
- [x] **2A-III.1** Create `snippets/templates/docs-guide/policy-page.mdx` *(2026-03-21)*
- [x] **2A-III.2** Create `snippets/templates/docs-guide/framework-page.mdx` *(2026-03-21)*
- [x] **2A-III.3** Create `snippets/templates/docs-guide/catalog-page.mdx` *(2026-03-21)*
- [x] **2A-III.4** Create `snippets/templates/docs-guide/feature-map-page.mdx` *(2026-03-21)*
- [x] **2A-III.5** Create `snippets/templates/docs-guide/tooling-reference-page.mdx` *(2026-03-21)*
- [ ] **2A-III.6** Regenerate `docs-guide/catalog/ui-templates.mdx` after templates added *(deferred by user)*

**2A-IV — Structural cleanup** *(requires docs.json + AGENTS.md updates; careful coord)*
- [x] **2A-IV.1** Delete 5 empty `source-of-truth.md` stubs *(2026-03-21)*
- [x] **2A-IV.2** Delete `frameworks/component-framework.mdx` *(2026-03-21 — zero refs confirmed)*
- [x] **2A-IV.3** Move archive files → `_workspace/archive/`; docs.json updated *(2026-03-21)*
- [x] **2A-IV.4** Move `catalog/ai-tools.mdx` → `tooling/ai-tools.mdx`; docs.json updated *(2026-03-21 — human override: tooling/ not features/)*
- [x] **2A-IV.5** `tooling/source-of-truth.md` → `_workspace/drafts/tooling-overview-draft.md` *(2026-03-21 — had partial content; moved not deleted)*
- [x] **2A-IV.6** Refresh `source-of-truth-guide.mdx` — no TODO found; fixed stale ai-tools path (catalog→tooling), removed deleted component-framework ref, fixed archive path (_workspace/archive), added 2 new policies to section routes, fixed 3 stale script paths in Update Rules *(2026-03-21)*

**2A-V — Write governance docs** *(final; do last)*
- [x] **2A-V.1** Write `docs-guide/policies/docs-guide-structure-policy.mdx` *(2026-03-21)*
- [x] **2A-V.2** Write `docs-guide/policies/workspace-lifecycle-policy.mdx` *(2026-03-21 — 30-day scratch TTL, 90-day archive TTL, nav-stub index.mds exempt)*
- [ ] **2A-V.3** Expand `contributing/contributing.mdx` — defer until `contribute/` root folder merge lands (Phase 1.3)
- [x] **2A-V.4** AI-TOOLS-GOVERNANCE adapter file updates — adapter files verified clean; fixed `catalog/ai-tools`→`tooling/ai-tools` in 13 active files (README, registry lib, validator, tests, configs, skill templates, agent-packs); removed deleted `component-framework.mdx` from 3 config/test files *(2026-03-21)*

---

> **Process for all root folder restructuring:** Follow the phases in [process.md](process.md).
> Each folder being restructured gets a work directory at `workspace/plan/active/REPO-STRUCTURE-GOV/<folder-name>/` with its own `audit.md`, `plan.md`, and artefacts.
> Canonical folder decisions live in [folder-structure.md](folder-structure.md).
> Active subplans: [subplan-docs-guide.md](subplan-docs-guide.md) · [subplan-v2-folders.md](subplan-v2-folders.md)
> Recommended next order: `snippets/`, `contribute/`, `tools/`, `ai-tools/`, `operations/` (pending SCRIPT-GOVERNANCE).

#### 2B — `snippets/assets/` cleanup ⭐ second

- [x] **2B.1** Delete all 19 files in `snippets/assets/domain/02_COMMUNITY/hero-images/` *(2026-03-21 — zero refs verified)*
- [x] **2B.2** Delete `media/heros/` duplicate tree (21 files, exact duplicates of `00_HOME/Hero_Images/`, zero refs) *(2026-03-21)*
- [x] **2B.3** Delete 12 zero-ref hero variants from `00_HOME/Hero_Images/` (`hero_developer*.png`, `hero_logo_developer*.png`, `hero_help`, `hero_partner`, `hero_reference`, `hero_researchers`, `hero_word_*`, `hero_logo_new`) *(2026-03-21)*
- [x] **2B.4** Consolidate `logo/` into `logos/` — files confirmed identical; updated `docs.json` logo paths to `logos/`; deleted `logo/dark.svg`, `logo/light.svg`, `logo/dark.png` *(2026-03-21)*
- [x] **2B.5** Delete `snippets/assets/favicon.png` — confirmed identical to `site/favicon.png` *(2026-03-21)*
- [x] **2B.6** Delete `snippets/assets/data/protocol-overview.html` (4.3 MB, zero refs confirmed) *(2026-03-21)*
- [x] **2B.7** Typo files deleted as part of 2B.1 (both were in `02_COMMUNITY/hero-images/`) *(2026-03-21)*
- [ ] **2B.8** ⚠️ **Plan was wrong — `snippets/composables/` is NOT empty.** Contains 8 active MDX composables (prerequisites-section, steps-section, related-resources-section, etc.) documented as "Layer 3" of content architecture in README. Zero refs in pages currently but these are template-use files, not dead code. **Decision needed: integrate into pages or archive.** Do NOT delete without review.
- [x] **2B.9** Governance rule written in `docs-guide/policies/docs-guide-structure-policy.mdx` (asset ref requirement and size limit) *(2026-03-21)*

#### 2C — `v2/` folder governance ✅ phase complete — open items in subplan

> See [subplan-v2-folders.md](subplan-v2-folders.md) for remaining tasks and open decisions.
> Work directory: [v2/](v2/)

**What was done (2026-03-21):**
- All violations from the original audit were already in `_workspace/` from a prior pass (confirmed by filesystem audit)
- All non-standard subdir names inside `_workspace/` renamed: `_archive→archive`, `_contextData→context-data`, `_contextData_→context-data`, `_move_me→staging`, `x-archived→archive`, `x-deprecated→deprecated` across all sections
- `v2/internal/layout-components-scripts-styling/` moved to `v2/internal/_workspace/`
- `v2-folder-governance.mdx` updated with full `_workspace/` subdir contract
- `_workspace/` standard applied: approved subdirs are `notes/` `plans/` `research/` `reviews/` `drafts/` `handoff/` `archive/` `deprecated/` `context-data/` `staging/`

**Special cases — still open:**

| Folder | Decision needed |
|--------|----------------|
| `v2/cn/`, `v2/es/`, `v2/fr/` | i18n governance addendum — do these have `_workspace/` or not? |
| `v2/templates/` | Stay at `v2/templates/` or move to `snippets/templates/`? |
| `v2/internal/` | Policy addendum needed (looser rules; what belongs, what doesn't) |

> ~~⛔ GATE~~ — approved and implemented 2026-03-21.

- [x] **2C.1** All `_workspace/` dirs existed from prior work; confirmed present in: about, community, developers, gateways, home, internal, lpt, orchestrators, resources, solutions, v2 root *(2026-03-21 audit)*
- [x] **2C.2** All violations were already in `_workspace/` locations from prior pass; confirmed by audit *(2026-03-21)*
- [x] **2C.3** Renamed all non-standard dirs inside `_workspace/`: `_archive/`→`archive/`, `_contextData/`→`context-data/`, `_contextData_/`→`context-data/`, `_move_me/`→`staging/`, `x-archived/`→`archive/`, `x-deprecated/`→`deprecated/` across all sections *(2026-03-21)*
- [x] **2C.4** `/v2/**/_workspace/**` in `.mintignore` covers all new subdirs — verified *(2026-03-21)*
- [ ] **2C.5** Special cases partially resolved: `v2/x-archived/` did not exist (already gone); i18n trees (`v2/cn/`, `v2/es/`, `v2/fr/`) and `v2/templates/` still need governance doc; `v2/internal/` is documented as looser-rules zone
- [x] **2C.6** `v2-folder-governance.mdx` updated with full `_workspace/` subdir contract (notes, plans, research, reviews, drafts, handoff, archive, deprecated, context-data, staging) + naming rules *(2026-03-21)*
- [ ] **2C.7** Pre-commit enforcement: block new files at `v2/<section>/*.{md,mdx,txt}` unless filename appears in docs.json — **deferred, needs hook design review**

#### 2D — `api/` cleanup

- [x] **2D.1** `api/openapi.yaml.backup` — already gone pre-plan
- [x] **2D.2** `api/worker/` deleted — confirmed exact duplicates of `api/` root files (`gateway.openapi.yaml` and `openapi.json` identical; `.backup` deleted too) *(2026-03-21)*
- [x] **2D.3** API specs verified schema-only; documented in `docs-guide/policies/root-allowlist-governance.mdx` *(2026-03-21)*
- [x] **2D.4** `api/` governance note written in `root-allowlist-governance.mdx` — spec files only, no MDX, no backup files, no duplicate subdirs *(2026-03-21)*

#### 2E — `tools/` cleanup (post SCRIPT-GOVERNANCE)

- [ ] **2E.1** Merge `tools/scripts/archive/` and `tools/scripts/x-archive/` into one strategy (after scripts move to `operations/`)
- [ ] **2E.2** Regenerate `tools/script-index.md` — stale codex script paths
- [ ] **2E.3** Fix `tools/vscode/components/component-registry.json` — verify vs `docs-guide/component-registry.json`

#### 2F — `tasks/` → `workspace/` rename + cleanup ⚠️ complete

> All 2F items completed by scripts thread agent (2026-03-21). See V-WS checklist for verification.

- [x] **2F.1** Move/archive `dep-COPYWRITING FRAMEWORK` *(was already in workspace/plan/complete/)*
- [x] **2F.2** Move loose files from `tasks/plan/active/` *(resolved during scripts agent merge — 14 files correctly placed)*
- [x] **2F.3** `tasks/staging/deprecated-n8n/` *(included in 731-file rename by scripts agent)*
- [x] **2F.4** `git mv tasks/ workspace/` *(scripts agent — 731 files)*
- [x] **2F.5** AGENTS.md + AI adapter refs updated *(30 scripts, 19 tests, 5 config files, 1 lib, 3 workflows, 1 codex contract)*
- [x] **2F.6** Scripts referencing `tasks/` paths updated *(scripts agent + lpd CLI fixed 2026-03-21)*
- [x] **2F.7** TTL workflow verified — `tasks-retention.yml` name already reads "workspace/ retention enforcement" *(V-WS.4)*

---

### Phase 3 — `_workspace/` standardisation across all root folders

> Sequenced after Phase 2. Three sub-phases: audit → approve → implement for each level.
> v2/ section `_workspace/` is handled in Phase 2C above.

#### 3A — Root folder `_workspace/` audit + recommendations

> **Rule:** Every named root folder (not dot-dirs, not v1/v2 content) should have a `_workspace/`
> subdirectory with subfolders appropriate to that folder's function.
> The subfolders will vary — this audit determines the right shape for each.

**Audit findings and recommendations:**

| Root folder | Has `_workspace/`? | Recommended subdirs | Notes |
|------------|-------------------|---------------------|-------|
| `ai-tools/` | No (ai-skills/ has one internally) | `skill-research/`, `rule-drafts/`, `archive/` | Top-level _workspace for cross-cutting AI tooling research |
| `api/` | No | `spec-drafts/`, `research/`, `archive/` | Draft specs before they're authoritative |
| `docs-guide/` | Yes (02_Design-Specification tree) | Add `archive/` at top level if missing | Already well-structured |
| `operations/` | No (future folder) | `script-drafts/`, `test-fixtures/`, `archive/` | For scripts in dev before promotion to a tier |
| `snippets/` | No | `component-drafts/`, `asset-staging/`, `archive/` | Asset staging = holding area pending ref verification |
| `tools/` | No | `experiments/`, `archive/` | Prototype tooling, deprecated extensions |
| `workspace/` | N/A — is the workspace | No `_workspace/` needed; folder is the workspace itself | |

> ~~⛔ GATE~~ — approved and implemented 2026-03-21.

- [x] **3A.1** Created `_workspace/` with subdirs in: `ai-tools/` (skill-research/, rule-drafts/, archive/), `api/`, `snippets/`, `tools/` *(2026-03-21)*
- [ ] **3A.2** `operations/` is a future folder pending SCRIPT-GOVERNANCE Task 14 — scaffold `_workspace/` when folder lands
- [x] **3A.3** `docs-guide/_workspace/archive/` confirmed present *(2026-03-21)*
- [x] **3A.4** `.mintignore` updated: added `/ai-tools/_workspace/**`, `/api/_workspace/**`, `/snippets/_workspace/**`, `/tools/_workspace/**` *(2026-03-21)*
- [x] **3A.5** Root folder `_workspace/` standard documented in `root-allowlist-governance.mdx` *(2026-03-21)*

---

#### 3B — Subfolder depth audit

> Some root folders have deep subdirectory structures. This step audits whether any of those
> subdirs also need their own `_workspace/` (a second level down).
> Only audit the folders from 3A that have complex internal structure — not all subfolders.

**Candidates for second-level `_workspace/` audit:**

| Subfolder | Rationale | Likely verdict |
|-----------|-----------|----------------|
| `ai-tools/agent-packs/` | 45+ skill definitions; skills in development need staging | Likely yes → `_workspace/skills-in-dev/` |
| `ai-tools/ai-rules/` | Rule files are relatively stable governance | Likely no |
| `snippets/components/` | Each category (elements, wrappers, etc.) may have components in design | Possible → per-category `_workspace/` |
| `snippets/automations/` | Each automation (blog, discord, luma) may have draft state | Possible → per-service `_workspace/` |
| `tools/vscode/` | Extensions in development need staging before packaging | Likely yes → per-extension `_workspace/` |
| `tools/notion/` | Sync scripts are stable | Likely no |
| `docs-guide/policies/` | Policy drafts exist in active plan but not in folder | Possible → `_workspace/drafts/` |
| `docs-guide/features/` | Feature doc stubs (ai-features.mdx is 43 lines) | Possible → `_workspace/drafts/` |

> ⛔ **GATE: human approval of second-level audit scope before 3B executes.**

- [ ] **3B.1** *(pending approval)* Confirm which subfolders from the table above get a `_workspace/`
- [ ] **3B.2** *(pending approval)* Create approved second-level `_workspace/` dirs with appropriate subdirs
- [ ] **3B.3** Add second-level `_workspace/` dirs to `.mintignore` patterns
- [ ] **3B.4** Document second-level `_workspace/` policy — when a subfolder warrants its own workspace vs. using the parent's

---

### Phase 4 — Governance docs update

- [ ] **4.1** Update `docs-guide/policies/root-allowlist-governance.mdx` — reflect final root structure including `operations/`, `workspace/`, all `_workspace/` additions
- [ ] **4.2** Update `AGENTS.md` — all path references after moves
- [ ] **4.3** Update `.mintignore` — add `/_dep-docs/`, update `contribute/` path, confirm all `_workspace/` patterns are covered
- [ ] **4.4** Write unified `_workspace/` lifecycle policy: 30-day TTL on scratch files, empty nav-stub index.mds are exempt, archive/ subdirs have 90-day TTL
- [ ] **4.5** Add `snippets/assets/` governance section to root-allowlist-governance.mdx (reference check required before adding; no unbounded growth)

---

## Risk Register

| Risk                                                                  | Severity | Mitigation                                                       |
| --------------------------------------------------------------------- | -------- | ---------------------------------------------------------------- |
| `contribute/` move breaks inbound links                               | Medium   | Audit all docs.json + v2 refs before move; add Mintlify redirect |
| `tasks/` → `workspace/` rename breaks agent + script refs             | High     | Full grep + update all AI adapter files before git mv (2E.5–2E.6) |
| Asset deletion breaks live pages                                      | Medium   | All 2B deletions verified zero-ref before delete                 |
| `docs-guide/component-framework.mdx` deletion breaks agent codex refs | Low      | Grep agent files before delete                                   |
| `tools/script-index.md` regeneration clobbers manual edits            | Low      | Check for any manual additions before regenerating               |
| `_dep-docs/` left in repo too long                                    | Low      | 30-day calendar TTL set in Phase 0.3                             |

---

## Success Criteria

- [ ] Root has ≤12 content directories (currently 15+)
- [ ] Every root directory has a clear entry in `root-allowlist-governance.mdx`
- [ ] No `.bak`, `.DS_Store`, or `dep-` prefixed items at root
- [ ] `snippets/assets/` reduced from 65 MB → ~35 MB
- [ ] All git hooks resolve to valid script paths (done ✓)
- [ ] `docs-guide/` has no empty stub files
- [ ] `v2/` top-level folders contain only nav-path folders + `_workspace/`; no loose files, no `x-archived/`, no `_contextData/` variants
- [ ] All `v2/` sections have `_workspace/` with standard subdirs (research, drafts, notes, archive, reviews)
- [ ] All named root folders have `_workspace/` with appropriate subdirs (3A complete)
- [ ] Second-level `_workspace/` decisions documented and implemented (3B complete)
- [ ] `snippets/assets/` has a written governance rule (no unref'd assets)
- [ ] Unified `_workspace/` lifecycle policy written and referenced from root-allowlist-governance.mdx
