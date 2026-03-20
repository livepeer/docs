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

- [ ] **0.1** Rename `docs/` → `_dep-docs/` (zero references, zero risk)
- [ ] **0.2** Add `/_dep-docs/**` to `.mintignore`
- [ ] **0.3** Extract todo.txt notes from `_dep-docs/` into a task (7 files, section restructure notes)
- [ ] **0.4** Delete `docs.json.bak` from root
- [ ] **0.5** Delete `api/openapi.yaml.backup`
- [ ] **0.6** Delete all `.DS_Store` files across repo
- [ ] **0.7** Move `tasks/plan/active/dep-COPYWRITING FRAMEWORK` → `tasks/plan/complete/` or archive
- [ ] **0.8** Move 4 loose `.md` files in `tasks/plan/active/` into appropriate plan folders or delete

---

### Phase 1 — Root consolidation (coordinate with SCRIPT-GOVERNANCE)

> Prerequisite: SCRIPT-GOVERNANCE Task 14 merged. Naming conflict resolved.

- [ ] **1.1** Confirm `operations/` structure is live and AGENTS.md updated
- [ ] **1.2** Move `contribute/` → `docs-guide/contributing/` (merge with existing `contributing/` subdir)
  - Update all inbound links in docs.json, v2 pages, AGENTS.md
  - Update `.mintignore` path if applicable
- [ ] **1.3** Add `/_dep-docs/` deletion to post-Phase-0 30-day TTL (set calendar reminder)
- [ ] **1.4** Confirm `ai-tools/` final placement post AI-TOOLS-GOVERNANCE
- [ ] **1.5** Update `root-allowlist-governance.mdx` to reflect new root (add `operations/`, remove `tests/`, update `contribute/`)

---

### Phase 2 — Per-folder cleanup (priority order)

#### 2A — `docs-guide/` structural cleanup ⭐ first

- [ ] **2A.1** Delete 5 empty `source-of-truth.md` stubs (catalog, contributing, features, frameworks, policies)
- [ ] **2A.2** Delete deprecated `docs-guide/frameworks/component-framework.mdx` (explicit redirect; grep agent files first)
- [ ] **2A.3** Move `docs-guide/catalog/scripts-catalog-archive.mdx` + `visual-explainer-workflows-archive.mdx` → `docs-guide/_workspace/archive/`
- [ ] **2A.4** Refresh `docs-guide/source-of-truth-guide.mdx` — marked `# TODO: NEEDS UPDATING`
- [ ] **2A.5** Expand or remove `docs-guide/contributing/contributing.mdx` (51 lines — stub) after `contribute/` merge lands
- [ ] **2A.6** Write `_workspace/` lifecycle policy: empty index.md stubs are nav placeholders (allowed); scratch files expire 30 days after last edit

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

#### 2C — `v2/` folder governance

> **Rule:** Each top-level folder in `v2/` may only contain:
> - Folders that are actual navigation paths (appear in docs.json)
> - `_workspace/` (scratch, planning, review artifacts — 30-day TTL)
> - Nothing else at the top level (no loose `.md`, `todo.txt`, `notes.txt`, `review.md` etc.)

- [ ] **2C.1** Audit all v2/ top-level folders for loose files not matching the above rule
- [ ] **2C.2** Move any `todo.txt`, `notes.txt`, `review.md` files → sibling `_workspace/` or delete
- [ ] **2C.3** Confirm all `_workspace/` dirs in v2/ are in `.mintignore` (already covered by `/v2/**/_workspace/**`)
- [ ] **2C.4** Add v2/ folder governance rule to `docs-guide/policies/v2-folder-governance.mdx`
- [ ] **2C.5** Add enforcement: `.allowlist` or pre-commit check that blocks new files at `v2/<top-folder>/*.{md,mdx,txt}` unless they appear in docs.json nav

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

### Phase 3 — Governance docs update

- [ ] **3.1** Update `docs-guide/policies/root-allowlist-governance.mdx` — reflect final root
- [ ] **3.2** Update `AGENTS.md` — all path references after moves
- [ ] **3.3** Update `.mintignore` — add `/_dep-docs/`, update `contribute/` path if moved
- [ ] **3.4** Write `_workspace/` lifecycle policy for docs-guide (empty index.mds, 30-day TTL for branch workspace files)
- [ ] **3.5** Add `snippets/assets/` governance section to root-allowlist-governance.mdx (reference check required before adding; no unbounded growth)

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
- [ ] `v2/` top-level folders contain only nav-path folders + `_workspace/`; no loose files
- [ ] `snippets/assets/` has a written governance rule (no unref'd assets)
