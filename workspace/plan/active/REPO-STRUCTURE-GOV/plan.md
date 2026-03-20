---
title: Repo Root Structure Governance Plan
status: active
owner: REPO-STRUCTURE-GOV
created: 2026-03-20
---

# Repo Root Structure Governance Plan

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
| `docs-guide/`      | Empty stubs, deprecated `component-framework.mdx`, archive files   |
| `tasks/` → `workspace/` | rename + `dep-COPYWRITING FRAMEWORK` loose in active/; 4 loose `.md` files |

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
- [ ] **1.2** Run `workspace/` verification checklist (below) after scripts thread agent completes rename
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

- [ ] **V-WS.1** `workspace/` exists at root with correct internal structure (`plan/`, `reports/`, `research/`, `staging/`, `scripts/`, `errors/`)
- [ ] **V-WS.2** `tasks/` no longer exists at root
- [ ] **V-WS.3** `workspace/plan/active/` contains all currently active plan folders (spot-check: REPO-STRUCTURE-GOV, SCRIPT-GOVERNANCE, CONTENT-WRITING)
- [ ] **V-WS.4** `workspace/plan/complete/` TTL workflow still triggers correctly — check `.github/workflows/` or hook config
- [ ] **V-WS.5** No broken refs in AGENTS.md — grep for `tasks/` and confirm zero hits
- [ ] **V-WS.6** No broken refs in AI adapter files — check `.claude/`, `.codex/`, `.cursor/`, `.windsurf/` for `tasks/` hits
- [ ] **V-WS.7** `docs-guide/policies/root-allowlist-governance.mdx` updated: `workspace/` replaces `tasks/`
- [ ] **V-WS.8** Scripts referencing `tasks/` paths (`audit-tasks-folders.js`, `task-cleanup.js`, `task-preflight.js`, `cross-agent-packager.js`) updated and confirmed runnable
- [ ] **V-WS.9** `lpd` CLI any task-related commands (e.g. `lpd task`) resolve correctly post-rename
- [x] **V-WS.10** `.mintignore` entry `/tasks/**` updated to `/workspace/**` *(2026-03-21)*

---

### Phase 2 — Per-folder cleanup (priority order)

#### 2A — `docs-guide/` restructure ⭐ first
> Full research complete. See `docs-guide-restructure-draft.md` for all findings.
> **No execution until draft is approved. Every sub-phase has an explicit gate.**

**2A-I — Approve structure + naming framework** *(gate — human review required)*
- [ ] **2A-I.1** Review `docs-guide-restructure-draft.md` — confirm canonical folder structure (Section 1)
- [ ] **2A-I.2** Confirm naming framework: `-catalog.mdx` suffix, no `-index.mdx`, no 0-byte stubs, 6 sections + `_workspace/`
- [ ] **2A-I.3** Decide: move `ai-tools.mdx` to `features/` (recommendation) or keep in `catalog/` as manual exception
- [ ] **2A-I.4** Confirm 5 missing template types for `snippets/templates/docs-guide/`
- [ ] **2A-I.5** Approve new file: `docs-guide/policies/docs-guide-structure-policy.mdx`

**2A-II — Fix upstream script problems** *(safe after 2A-I approval; no nav impact)*
- [ ] **2A-II.1** Delete 3 stale `.codex/locks-local/` files — all from completed tasks (Mar 8, 9, 17); all lock paths (`docs-guide/indexes/`) no longer exist → zero risk
  - `789-phase2b-component-migration-2026-03-08T03-08-50-208Z.json`
  - `808-governance-replay-2026-03-09T17-46-57-724Z.json`
  - `20260317-merge-readiness-style-root-cause-2026-03-16T16-43-42-131Z.json`
- [ ] **2A-II.2** Add `generate-docs-guide-indexes.js` to post-commit hook triggered by `.github/workflows/*.yml` or `.github/ISSUE_TEMPLATE/*` changes
- [ ] **2A-II.3** Add `generate-docs-guide-pages-index.js` to pre-commit hook triggered by `docs.json` or `v2/index.mdx` changes (docs.json already has hook coverage — add here)
- [ ] **2A-II.4** `component-usage-map.json` generator → **hand off to COMPONENT-GOVERNANCE thread** to trace and document

**2A-III — Add missing templates** *(handoff — see `handoff-snippets-templates.md`)*
- [ ] **2A-III.0** Handoff delivered to snippets/templates owner → see `handoff-snippets-templates.md`
- [ ] **2A-III.1** *(handoff recipient)* Create `snippets/templates/docs-guide/policy-page.mdx`
- [ ] **2A-III.2** *(handoff recipient)* Create `snippets/templates/docs-guide/framework-page.mdx`
- [ ] **2A-III.3** *(handoff recipient)* Create `snippets/templates/docs-guide/catalog-page.mdx`
- [ ] **2A-III.4** *(handoff recipient)* Create `snippets/templates/docs-guide/feature-map-page.mdx`
- [ ] **2A-III.5** *(handoff recipient)* Create `snippets/templates/docs-guide/tooling-reference-page.mdx`
- [ ] **2A-III.6** *(handoff recipient)* Regenerate `docs-guide/catalog/ui-templates.mdx` after templates added

**2A-IV — Structural cleanup** *(requires docs.json + AGENTS.md updates; careful coord)*
- [ ] **2A-IV.1** Delete 5 empty `source-of-truth.md` stubs (catalog, contributing, features, frameworks, policies)
- [ ] **2A-IV.2** Delete `frameworks/component-framework.mdx` — grep all refs in AGENTS.md, .codex/, scripts first
- [ ] **2A-IV.3** Move `catalog/scripts-catalog-archive.mdx` + `catalog/visual-explainer-workflows-archive.mdx` → `_workspace/archive/`; update docs.json
- [ ] **2A-IV.4** Move `catalog/ai-tools.mdx` → `features/ai-tools.mdx`; update docs.json nav entry
- [ ] **2A-IV.5** Migrate `tooling/source-of-truth.md` partial content → `tooling/dev-tools.mdx`; delete stub
- [ ] **2A-IV.6** Refresh `source-of-truth-guide.mdx` — remove TODO comment; verify all generator commands current

**2A-V — Write governance docs** *(final; do last)*
- [ ] **2A-V.1** Write `docs-guide/policies/docs-guide-structure-policy.mdx`
- [ ] **2A-V.2** Write `_workspace/` lifecycle policy (30-day scratch TTL, 90-day archive TTL, nav-stub index.mds exempt)
- [ ] **2A-V.3** Expand `contributing/contributing.mdx` — defer until `contribute/` root folder merge lands (Phase 1.3)
- [ ] **2A-V.4** AI-TOOLS-GOVERNANCE adapter file updates → see `AI-TOOLS-GOVERNANCE/handoff-docs-guide-path-updates.md` (must land same PR as 2A-IV)

---

> ⚠️ **THIS PROCESS APPLIES TO EVERY ROOT FOLDER.**
> Before restructuring any root folder: write a `<folder>-restructure-draft.md` covering
> structure audit, script output map, dependents, naming framework, missing templates, and subplan.
> Recommended order: `snippets/`, `ai-tools/`, `tools/`, `api/`, `contribute/`, `operations/`, `workspace/`.
> See `docs-guide-restructure-draft.md` Section 6 for details.

#### 2B — `snippets/assets/` cleanup ⭐ second

- [ ] **2B.1** Delete all 19 files in `snippets/assets/domain/02_COMMUNITY/hero-images/` (~20 MB, zero refs)
- [ ] **2B.2** Consolidate hero image tree — canonical location is `domain/00_HOME/Hero_Images/`; delete `media/heros/` duplicates; update any refs
- [ ] **2B.3** Delete unused hero variants in `domain/00_HOME/`: `hero_developer*.png`, `hero_help.png`, `hero_partner.png`, `hero_reference.png`, `hero_researchers.png`, `hero_word_*.png`, `hero_logo_new.png` (13 files, zero refs)
- [ ] **2B.4** Consolidate `snippets/assets/logo/` into `snippets/assets/logos/` (duplicate dark.svg + light.svg; keep logos/ as canonical)
- [ ] **2B.5** Remove `snippets/assets/favicon.png` root-level duplicate (keep only `snippets/assets/site/favicon.png`)
- [ ] **2B.6** Evaluate `snippets/assets/data/protocol-overview.html` (4.3 MB) — delete if no refs found
- [ ] **2B.7** Delete typo files: `Hero_Telegran.png`, `Hero_Yotube.png` (unreferenced, misspelled variants)
- [ ] **2B.8** Delete `snippets/composables/` (empty directory)
- [ ] **2B.9** Write `snippets/assets/` governance rule: no asset may be added without a verified reference in v1/, v2/, or snippets/; size limit per file (recommend 2 MB for images)

#### 2C — `v2/` folder governance *(audit complete — pending human approval of recommendations)*

> **Rule:** Each top-level folder in `v2/` may only contain:
> - Folders that appear as navigation paths in docs.json
> - `_workspace/` (scratch, planning, review artifacts — 30-day TTL)
> - Files that are themselves navigation entries (e.g. `index.mdx`, `portal.mdx`, `navigator.mdx`)
> - Nothing else (no loose `.md`, `todo.txt`, `notes.txt`, `review.md`, `x-archived/`, `_contextData/`, `_move_me/`)

**Audit findings — violations already identified:**

| Location | Issue | Recommended action |
|----------|-------|--------------------|
| `v2/restructure.mdx` | Loose file at v2/ root | → `v2/_workspace/restructure/` |
| `v2/about/todo.txt` | Loose planning file | → `v2/about/_workspace/notes/` |
| `v2/about/resources/` | Non-nav folder (check docs.json) | Confirm nav status; if not nav → `_workspace/` |
| `v2/community/_contextData_/` | Non-standard prefix folder | → `v2/community/_workspace/context-data/` |
| `v2/community/_move_me/` | Non-standard staging folder | → `v2/community/_workspace/staging/` then action or delete |
| `v2/developers/_archive/` | Non-standard archive folder | → `v2/developers/_workspace/archive/` |
| `v2/developers/_contextData/` | Non-standard prefix folder | → `v2/developers/_workspace/context-data/` |
| `v2/gateways/concepts-restructure.md` | Loose planning file | → `v2/gateways/_workspace/notes/` |
| `v2/gateways/personas.md` | Loose planning file | → `v2/gateways/_workspace/notes/` |
| `v2/gateways/plan.md` | Loose planning file | → `v2/gateways/_workspace/notes/` |
| `v2/gateways/x-archived/` | Non-standard archive folder | → `v2/gateways/_workspace/archive/` |
| `v2/home/todo.txt` | Loose planning file | → `v2/home/_workspace/notes/` |
| `v2/internal/ally-notes.mdx` | Loose non-nav file | → `v2/internal/_workspace/notes/` |
| `v2/internal/marketing-posts.md` | Loose non-nav file | → `v2/internal/_workspace/notes/` |
| `v2/internal/marketing-posts-v2.md` | Loose non-nav file | → `v2/internal/_workspace/notes/` |
| `v2/internal/layout-components-scripts-styling/` | Non-nav folder | → `v2/internal/_workspace/` or delete |
| `v2/lpt/todo.txt` | Loose planning file | → `v2/lpt/_workspace/notes/` |
| `v2/orchestrators/x-archived/` | Non-standard archive folder | → `v2/orchestrators/_workspace/archive/` |
| `v2/resources/todo.txt` | Loose planning file | → `v2/resources/_workspace/notes/` |
| `v2/solutions/todo.txt` | Loose planning file | → `v2/solutions/_workspace/notes/` |
| `v2/solutions/x-deprecated/` | Non-standard deprecated folder | → `v2/solutions/_workspace/archive/` |

**Special cases (not violations — need explicit governance decision):**

| Folder | Status | Decision needed |
|--------|--------|-----------------|
| `v2/cn/`, `v2/es/`, `v2/fr/` | i18n mirror trees | Own governance doc; not subject to same rule as content sections |
| `v2/templates/` | Shared MDX templates | Not a nav section; confirm it stays at root or moves to `snippets/templates/` |
| `v2/x-archived/` | Top-level archive | → `v2/_workspace/archive/` or keep as-is with explicit allowlist entry |
| `v2/internal/` | Internal docs | Special case; looser rules acceptable; needs own policy |

**Recommended `_workspace/` subdirectory structure — content sections**
*(about, community, gateways, developers, home, lpt, orchestrators, resources, solutions):*

```
_workspace/
├── research/     ← source research, veracity notes, background reading
├── drafts/       ← content in-progress, not nav-ready
├── notes/        ← planning notes, decisions, todo lists (replaces todo.txt etc.)
├── archive/      ← deprecated/removed content (replaces x-archived, x-deprecated)
└── reviews/      ← review packets, audit outputs
```

**Recommended `_workspace/` for `v2/internal/`:**
```
_workspace/
├── drafts/
├── notes/        ← ally-notes, marketing notes, etc.
└── archive/
```

**Recommended `_workspace/` for `v2/` root:**
```
_workspace/        ← already exists with research/ and references/; add:
├── research/      (exists ✓)
├── references/    (exists ✓)
├── restructure/   ← for restructure.mdx and planning docs
└── archive/       ← top-level retired v2 content
```

> ⛔ **GATE: human approval of recommendations required before 2C implementation steps run.**

- [ ] **2C.1** *(pending approval)* Create `_workspace/` with correct subdirs in all v2/ sections that lack it: `about`, `community` (expand existing), `developers` (expand existing), `gateways`, `home`, `lpt`, `resources`, `solutions`, `internal`
- [ ] **2C.2** *(pending approval)* Move all violations listed above to their recommended `_workspace/` locations
- [ ] **2C.3** *(pending approval)* Consolidate `x-archived/`, `x-deprecated/`, `_archive/`, `_contextData_/`, `_move_me/` variants → unified `_workspace/archive/` or `_workspace/staging/` pattern across all v2/ sections
- [ ] **2C.4** Confirm all `_workspace/` dirs are covered by `.mintignore` (pattern `/v2/**/_workspace/**` already exists — verify it catches new subdirs)
- [ ] **2C.5** Resolve special cases (i18n, templates, x-archived, internal) — document decisions in v2-folder-governance.mdx
- [ ] **2C.6** Add v2/ `_workspace/` subdir standard to `docs-guide/policies/v2-folder-governance.mdx`
- [ ] **2C.7** Add pre-commit enforcement: block new files at `v2/<section>/*.{md,mdx,txt}` unless filename appears in docs.json nav entries

#### 2D — `api/` cleanup

- [ ] **2D.1** Delete `api/openapi.yaml.backup` (done in Phase 0)
- [ ] **2D.2** Clarify `api/worker/` — partial stale mirror; delete if confirmed
- [ ] **2D.3** Verify API specs are schema-only (not rendered pages); document in root-allowlist-governance.mdx
- [ ] **2D.4** Add `api/` governance note: spec files only, no MDX, no backup files

#### 2E — `tools/` cleanup (post SCRIPT-GOVERNANCE)

- [ ] **2E.1** Merge `tools/scripts/archive/` and `tools/scripts/x-archive/` into one strategy (after scripts move to `operations/`)
- [ ] **2E.2** Regenerate `tools/script-index.md` — stale codex script paths
- [ ] **2E.3** Fix `tools/vscode/components/component-registry.json` — verify vs `docs-guide/component-registry.json`

#### 2F — `tasks/` → `workspace/` rename + cleanup ⚠️ do last

- [ ] **2F.1** Move/archive `tasks/plan/active/dep-COPYWRITING FRAMEWORK` before rename
- [ ] **2F.2** Move 4 loose files from `tasks/plan/active/` into appropriate plan folders
- [ ] **2F.3** Clean `tasks/staging/deprecated-n8n/` — archive or delete 4 JSON files
- [ ] **2F.4** `git mv tasks/ workspace/`
- [ ] **2F.5** Update all AGENTS.md, `.claude/`, `.codex/`, `.cursor/`, `.windsurf/` refs `tasks/` → `workspace/`
- [ ] **2F.6** Update all scripts referencing `tasks/` paths (audit-tasks-folders.js, task-cleanup.js, etc.)
- [ ] **2F.7** Verify `workspace/plan/complete/` TTL workflow still running post-rename

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

> ⛔ **GATE: human approval of per-folder subdirectory recommendations before 3A implementation.**

- [ ] **3A.1** *(pending approval)* Create `_workspace/` with approved subdirs in: `ai-tools/`, `api/`, `snippets/`, `tools/`
- [ ] **3A.2** *(pending approval)* Create `_workspace/` template for `operations/` (future folder — scaffold when SCRIPT-GOVERNANCE Task 14 lands)
- [ ] **3A.3** Confirm `docs-guide/_workspace/` has `archive/` subdir; add if missing
- [ ] **3A.4** Add `_workspace/` to each folder's `.mintignore` pattern (or confirm covered by existing `**/_workspace/**` glob)
- [ ] **3A.5** Document root folder `_workspace/` standard in `docs-guide/policies/root-allowlist-governance.mdx`

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
