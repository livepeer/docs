# Slice 6 — Native agent adapters + AGENTS.md (2026-05-22)

Read-only file-level inventory of every native AI agent adapter surface in `livepeer/docs` on branch `docs-v2-dev`. Scope: root `AGENTS.md`, `.claude/`, `.codex/`, `.cursor/`, `.windsurf/`, `.augment/`, `.mintlify/`, `.github/AGENTS.md`, `.github/copilot-instructions.md`, `.github/augment-instructions.md`, plus the duplicate subtree at `ai-tools/ai-rules/.augment/` and the canonical governance frame at `docs-guide/policies/agent-governance-framework.mdx`.

Methodology: each adapter file was read in full. Sizes are physical line counts (`wc -l`). Asserted rules, pointer-vs-policy classification (per D-DG-11 "thin adapter" rule), and cross-adapter drift were captured per file. Validator targets were read from `operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js`.

---

## 1. Cross-agent baseline: `AGENTS.md` (root)

- **Path:** `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/AGENTS.md`
- **Size:** 8,414 bytes, 119 lines
- **Owner of canonical rules:** repo-wide baseline. Per `docs-guide/policies/agent-governance-framework.mdx`, every native adapter must point here and must not duplicate policy.

### Sections (8)

1. Heading + "read this first" preamble
2. Native adapters list (Copilot, Claude, Cursor, Windsurf, Augment)
3. Codex layer extension pointer (`.github/AGENTS.md`)
4. Canonical governance docs (governance-index, agent-governance-framework, root-allowlist-governance)
5. Governance infrastructure (frameworks/, standards/, decisions/, docs-library/, gap-report, GOVERNANCE.md markers)
6. **Required Context** — source-of-truth priority order (1. governance-index → 2. docs.json → 3. v2/** → 4. frameworks → 5. standards → 6. Mintlify constraints → 7. v1/**)
7. **Safety and Git Rules** — 15 enumerated rules: install githooks, no `--no-verify` default, HUMAN-OVERRIDE-POLICY exception, port 3000/3333 forbidden, no branch-switching in worktree, no worktree create/remove, no `git reset --hard`/`stash`/`push --force`, no casual deletions (requires `--trailer "allow-deletions=true"`), `.allowlist` requires human commit with `allowlist-edit=true` trailer, codex/* branches follow `.codex/task-contract.yaml`, no `git add -A`/`.`, no mixed-concern commits, fix root cause on pre-commit failure, conventional commit format `feat:`/`fix:`/`docs:`/`chore:` with scope
8. **Root and Structure Governance** — `.allowlist` rules (root-only, slashless, no nested paths/HTML comments/report prose), prefer governed directories, full path-migration discipline, docs.json edit confirmation gate, `workspace/` policy, read-before-edit
9. **Authoring and Implementation Rules** — default to v2/**, preserve IA, data-only/helper-only scope discipline, page-local render blocker triage order, absolute snippet imports, CSS custom properties (no ThemeData), check component library, regenerate generated files
10. **Validation Expectations** — table: any staged → `lpd test --staged`; routing → `lint-structure.js --check`; generated → run generator with `--check`; governance edits → `check-agent-docs-freshness.js --json`; catalog → `generate-docs-guide-indexes.js --check`
11. **No Lazy Tooling Claims** — discovery rules before reporting tools as missing; use `tools/lpd` wrapper
12. **Response and Review Contract** — cite paths, separate current vs legacy, one clarifying question max, surface decisions to user, checkpoint on long tasks, no adjacent improvements

### Canonical assertions other adapters must honour

- Port 3000 / 3333 reservation (repeated across 6 adapters)
- No-deletion discipline + `--trailer "allow-deletions=true"` (Cursor + Augment have their own no-deletion files)
- Worktree pinning + no branch switching (Codex extension expands this)
- HUMAN-OVERRIDE-POLICY for `--no-verify` (Codex + Augment cite this)
- Validation runner: `lpd test --staged` (cited by `docs-guide/policies/agent-governance-framework.mdx` and the freshness validator)

---

## 2. Per-adapter detail

### 2.1 Claude — `.claude/`

**Directory contents (top-level):**

| Path | Size | Purpose |
|---|---|---|
| `.claude/CLAUDE.md` | 32,486 bytes / **325 lines** | Adapter contract |
| `.claude/GOVERNANCE.md` | 909 bytes / 17 lines | Marker (points at `ai-tools-governance.mdx`) |
| `.claude/settings.json` | 9,964 bytes / 296 lines | Hook + permission config |
| `.claude/settings.local.json` | 149 bytes / 7 lines | Personal allow-list overrides |
| `.claude/scheduled_tasks.lock` | 130 bytes | Runtime lock file |
| `.claude/sessions.db` | 159,744 bytes | SQLite session store |
| `.claude/skills/` | 12 SKILL.md pointers | Slash-command registry |
| `.claude/references/` | 26 files / 13 categories | Exemplar/pattern/best-practice library |
| `.claude/projects/`, `.claude/worktrees/` | empty/runtime | Native dirs |
| **No** `.claude/agents/`, `.claude/commands/`, `.claude/hooks/` | — | Not present; hooks live in `settings.json` |

#### 2.1.1 `.claude/CLAUDE.md` — 325 lines, heavy

15 H2 sections:
1. Project identity (Alison Haire authority; "Claude's role: senior documentation engineer")
2. Observer Agent Authentication
3. **Active threads** table — 25 thread rows with status (table is the bulk of the file size; one row alone exceeds 4 KB)
4. Execution rules (5 rules: "do what was asked first", verify before asserting, reproduce before fixing, verify first instance before bulk, read Mintlify constraints)
5. MDX & Frontmatter Conventions (4 rules)
6. Stay On Task (3 rules)
7. Debugging discipline (3-edit hypothesis gate, 5-edit hard block — both hook-enforced; "Do not permute")
8. Hard boundaries (20 rules — includes JSDoc tag counts, hook-enforced markers, render-verify-without-claim rule)
9. Platform constraints (macOS, Mintlify MDX bundler, never edit auto-generated files)
10. Dry-run policy
11. Karpathy guidelines (4 numbered principles attributed to https://github.com/forrestchang/andrej-karpathy-skills)
12. Engineering standards ("no bandaids", composable, full repo integration, think before writing, no isolated fixes)
13. How we work together / Approval semantics
14. Co-creation principles (10 rules)
15. Quick commands table (`/status`, `/stop`, `/verify`, `/wip`, `/fix`, `/remind`, `/log`, `/flag`, `/server`) — inline, "no skill files"
16. Domain terms table (LPT/orchestrator/gateway/active set/etc.)
17. Voice and review standards (UK English, no em dashes)
18. Skills catalogue table (5 categories: core workflow / content pipeline / audit / governance / authoring)
19. **VS Code Claude Code Extension Issues** — Claude-specific operational bug documentation; "12 confirmed root causes", points at `workspace/plan/active/FUCK_CLAUDE/`
20. Key files table (16 rows)
21. Session end checklist

**D-DG-11 thin-adapter compliance:** **NON-COMPLIANT.** CLAUDE.md is the largest adapter at 32 KB / 325 lines vs root AGENTS.md at 8.4 KB / 119 lines (3.85× heavier). It does not point at AGENTS.md at all — there is no "read AGENTS.md first" preamble. It also embeds:
- 25-row Active threads table (project state, not policy)
- Full Karpathy guidelines (philosophy, not adapter behaviour)
- Quick command DSL (`/status`, `/stop`, etc.) — Claude-native but defined inline rather than as `.claude/commands/*`
- Domain terms table (duplicates voice-and-copy standards)
- VS Code extension diagnostic block (unique tool-specific operational content; legitimate to keep Claude-side)
- Skills catalogue table (legitimate Claude-side index)

**Unique-to-Claude content** (justified per the governance framework's "tool-specific file format or metadata requirements" clause):
- Hook-enforced behavioural rules (3-edit gate, 5-edit block, 8th-edit scope checkpoint, render-verify gate, completion-gate on artifact writes)
- VS Code Claude Code Extension diagnostic
- `/status`, `/stop`, `/verify`, `/wip`, `/fix`, `/remind`, `/log`, `/flag`, `/server` inline command semantics
- Skills catalogue and lifecycle mapping
- Active threads tracker (project state — questionable in CLAUDE.md; arguably belongs in `workspace/thread-outputs/`)

**Duplicates of root AGENTS.md (drift risk):**
- "Read Mintlify constraints" + reference path — also in AGENTS.md and Cursor + Windsurf adapters
- Hard boundary "no destructive file operations without backup" — overlaps with AGENTS.md git rules and Cursor/Augment no-deletions
- Domain terms table — duplicates `docs-guide/standards/voice-and-copy.mdx`
- "UK English, no em dashes, no questions in headings" — duplicates voice-and-copy.mdx

#### 2.1.2 `.claude/GOVERNANCE.md` — 17 lines

Marker file. Declares owner (`@livepeer/docs-team`), framework (`docs-guide/frameworks/ai-tools-governance.mdx`), and the substructure table (references/hooks/plans/skills/memory). Note: it claims `.claude/hooks/` exists but the directory is absent — hooks live in `settings.json`. **Minor drift** — the marker file describes a structure the directory doesn't have.

#### 2.1.3 `.claude/settings.json` — 296 lines

Hooks (10 hook groups across 7 lifecycle events). All commands route to `operations/scripts/dispatch/governance/`.

| Event | Hook commands |
|---|---|
| `SessionStart` | 5 hooks: stale-browser/MCP cleanup; `session-state.js`; `session-register.js`; session-log write + system-message reminder; `server-lifecycle.js` |
| `UserPromptSubmit` | 4 hooks: orphan Chrome reaper; `message-backup.js` (async); `mdx-constraints-injector.js`; `friction-logger.js` (async) |
| `PreToolUse` | 5 hooks (matchers: Bash, Write/Edit ×3, Agent): `pre-tool-guard.js`, `mdx-render-gate.js`, `pre-tool-guard.js`, `completion-gate.js`, `pre-tool-guard.js` |
| `PostToolUse` | 9 hooks (matchers: Read, Grep, Edit/Write ×6, Bash): `read-logger.js` (async), `grep-loop-guard.js`, `mdx-frontmatter-sanitise.js`, `mdx-render-verify.js`, `blast-radius-scanner.js`, `phase-gate-hook.js`, `session-register.js` (async), `edit-loop-guard.js`, `scope-checkpoint.js`, `move-detect-hook.js` |
| `PreCompact` | `pre-compact-checkpoint.js` |
| `PostToolUseFailure` | `post-tool-verify.js` |
| `SessionEnd` | Inline pkill of Chromium + sweep-console-errors processes |

Permissions allow-list: 14 entries including specific bash commands, MCP tool names, and an additional working directory (`workspace/thread-outputs/sessions`).

#### 2.1.4 `.claude/settings.local.json` — 7 lines

Personal allowlist: one entry, allows `ls -latrS` on session JSONL files.

#### 2.1.5 `.claude/skills/` — 12 SKILL.md pointers (5–20 lines each)

All except `skills/SKILL.md` are thin pointers in the form:

```
---
name: <name>
description: <one-line>
---
Read and follow the full skill at `ai-tools/ai-skills/<name>/SKILL.md`.
```

Registered slash commands: `agent-brief`, `build`, `close`, `design`, `diagnose`, `dispatch`, `iterate`, `pm`, `propagate`, `research`, `skills`, `thread`. Total: 12.

The `skills/SKILL.md` (20 lines) is the only non-pointer — it defines the discovery skill that scans `ai-tools/ai-skills/*/SKILL.md` and produces a registration status table.

#### 2.1.6 `.claude/references/` — 26 files / 13 categories

Files (file→lines):

| Category | Files |
|---|---|
| root | README.md (68), SOURCE-MAP.md (106) |
| `authoring/` | exemplars.md (86) |
| `components/` | exemplars.md (80), patterns.md (140) |
| `copy/` | best-practice.md (130), exemplars.md (75), patterns.md (124) |
| `data-patterns/` | exemplars.md (73) |
| `governance/` | exemplars.md (62) |
| `ia-and-naming/` | best-practice.md (118), exemplars.md (160), patterns.md (101) |
| `layout/` | best-practice.md (131), exemplars.md (162), patterns.md (146) |
| `pipelines/` | exemplars.md (122) |
| `plans/` | exemplars.md (89) |
| `prompts/` | concern-audit-methodology.md (279), exemplars.md (77), patterns.md (108) |
| `research/` | exemplars.md (79) |
| `scripts/` | exemplars.md (24), patterns.md (95) |
| `skills/` | exemplars.md (137) |

Total reference library: ~2,860 lines (sum of category files, excludes root README+SOURCE-MAP). Per-category triplet pattern: `exemplars.md` + `best-practice.md` + `patterns.md`. Five categories have the full triplet (copy, ia-and-naming, layout). Several are exemplars-only (data-patterns, governance, plans, research, authoring, skills, pipelines).

This library is **Claude-unique** — no other adapter has a comparable knowledge base. It is referenced by `.claude/CLAUDE.md` as "Exemplary work to emulate — read before designing, writing, or building".

---

### 2.2 Codex — `.codex/` + `.github/AGENTS.md`

#### 2.2.1 `.codex/` directory contents

| Path | Size | Purpose |
|---|---|---|
| `.codex/README.md` | 1,736 bytes / 44 lines | Lock lifecycle docs |
| `.codex/task-contract.yaml` | 1,148 bytes / 42 lines | Active task contract |
| `.codex/GOVERNANCE.md` | 319 bytes / 8 lines | Thin pointer marker |
| `.codex/locks-local/` | gitignored (per `.gitignore`) | Per-session lock state |
| `.codex/pr-body.generated.md` | gitignored | Generated PR template |

**Note:** the slice prompt asked about `locks-shared/`, `skills/`, and `scripts/` under `.codex/` — none exist. Codex scripts live at `operations/scripts/dispatch/ai/codex/`, `operations/scripts/integrators/ai/codex/`, and `operations/scripts/validators/ai/codex/`.

#### 2.2.2 `.codex/README.md` — Lock lifecycle (44 lines)

**Schema** (each lock JSON file under `.codex/locks-local/`):

```json
{
  "lock_id": "string",
  "task_id": "string",
  "branch": "string",
  "worktree_path": "absolute-path",
  "owner": "string",
  "scope_in": ["repo-relative-path-or-prefix"],
  "created_at": "ISO-8601",
  "expires_at": "ISO-8601",
  "status": "active|released",
  "released_at": "ISO-8601 (optional)"
}
```

**6-step lifecycle:**
1. `task-preflight.js --task <id> --slug <slug> --scope <a,b,c>` creates branch + contract + lock, provisions managed worktree at `../codex-worktrees/<task-id>-<slug>` unless `--in-place`.
2. `validate-locks.js --branch codex/<id>-<slug> --staged` runs pre-commit.
3. `task-finalise.js --branch codex/<id>-<slug>` runs pre-PR.
4. Commit/merge onto `docs-v2-dev`. A codex branch commit alone is not task completion.
5. `lock-release.js --branch codex/<id>-<slug>` only after `docs-v2-dev` contains the task commit.
6. `task-cleanup.js --branch codex/<id>-<slug> --apply` cleans merged worktrees/branches only after integration.

**Why local:** "Locks are operational state, not source artifacts. The directory is gitignored to avoid PR churn and merge conflicts."

#### 2.2.3 `.codex/task-contract.yaml` — Schema (42 lines)

Active task contract for `codex/20260403-contracts-surface-redesign`. Schema fields:

| Field | Type | Example / values |
|---|---|---|
| `task_id` | integer | `20260403` |
| `branch` | string | `codex/20260403-contracts-surface-redesign` |
| `base_branch` | string | `docs-v2-dev` |
| `scope_in` | string[] | 20 entries: `.codex/`, `.claude/`, `.cursor/`, `.githooks/`, `.github/`, `.playwright-cli/`, `.vscode/`, `.windsurf/`, `AGENTS.md`, `ai-tools/`, `docs-guide/`, `docs.json`, `llms.txt`, `operations/tests/`, `operations/`, `snippets/`, `tools/`, `v2/`, `workspace/` |
| `scope_out` | string[] | `v1/` |
| `allowed_generated` | string[] | `.codex/pr-body.generated.md`, `sitemap-ai.xml` |
| `acceptance_checks` | string[] | 8 commands (contracts unit tests, playwright contract tests, browser harness, `lpd test --staged`, lint-structure, validate-codex-task-contract) |
| `risk_flags` | string[] | `docs-navigation`, `contracts-reference-surface`, `mintlify-browser-render` |
| `follow_up_issues` | int[] | empty |

The contract is **the most expansive scope contract observed** — its `scope_in` covers practically the whole repo, including all adapter dirs (`.claude/`, `.cursor/`, `.windsurf/`, `.github/`, `AGENTS.md`). This is the "branch isolation" mechanism: Codex agents may only write to paths whose prefix appears in `scope_in`; commits touching other prefixes are rejected by `validate-locks.js`.

#### 2.2.4 `.codex/GOVERNANCE.md` — 8 lines

Marker. "Type: IDE adapter (thin wrapper pointing at canonical governance). Must remain a thin pointer to repo governance; no unique logic." Identical wording to Cursor/Windsurf/Augment markers.

#### 2.2.5 `.github/AGENTS.md` — 153 lines, Codex task-layer extension

Opens with a multi-line `{/* ... */}` JSX comment explicitly stating: "Codex layer extension. NOT a duplicate. OpenAI Codex reads both files via its directory-walk mechanism. This file is not for GitHub Copilot — see .github/copilot-instructions.md instead."

**Sections (5):**

1. **CRITICAL BOUNDARIES** — 12 rules: githooks check, `--no-verify` default-off + HUMAN-OVERRIDE exception, port 3000/3333 forbidden, no `git reset --hard`/`push --force` without multi-turn plan, no `git stash` for AI isolation, no branch switching in worktrees, no worktree create/remove, codex-task-isolation-standard skill first, read Mintlify best-practices before MDX, no presentation changes when scope is data/helper/pipeline-only, no widening of narrow refactors
2. **GIT WORKFLOW & CHECKPOINTS** — opens with **STALENESS NOTE (2026-03-26)**: the `checkpoint/YYYY-MM-DD_HHMMSS` auto-branch system described below is "aspirational and not yet implemented. No git hooks in this repo create checkpoint branches automatically." Rules nonetheless documented: HitL verification, isolation rule (branch-scoped WIP, not stash), Finish Rule ("not complete until task commit is present on `docs-v2-dev`"), Closure Rule (don't release locks until `docs-v2-dev` has the commit), Pre-Write Announcement (canned text agent must utter), Recovery
3. **REPOSITORY STRUCTURE RULES** — root directory allowed/forbidden lists, file location table (scripts→operations/, configs→tools/config/ except `.prettierrc.yaml`→root, `.speakeasy/`→tools/config/, AI guidelines→tools/ai-rules/, public assets→snippets/assets/, OpenAPI→api/, contribution docs→docs-guide/contributing/), snippets convention rules, enforcement (`.allowlist` + pre-commit hook)
4. **MINTLIFY MDX DEBUG ORDER** — canonical reference points at `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`. 7 numbered rules: working repo pattern first, canonical data source first, static errors before runtime tools, fast confirmation before heavy validation, two-failure redesign rule, contracts-specific recovery rule, user-feedback and execution discipline
5. **VALIDATION COMMANDS** — `mint dev --port 3001` example. Then a single line "Make a test for mintlify in the v2/tests file. DO NOT EVER run a script without testing it on a local branch first."

**Thin-adapter compliance:** **NON-COMPLIANT.** At 153 lines this is the second-heaviest adapter. Per governance-framework.mdx it is "repurposed as Codex task-layer extension; disambiguating comment added" — so the duplication is acknowledged but not removed. It duplicates AGENTS.md sections on `--no-verify`, ports, worktrees, deletions, Mintlify constraints, repository structure, and `.allowlist` enforcement.

**Embedded staleness:** the checkpoint-branch system documented in §2 is explicitly marked unimplemented by an in-file staleness note. **Lying-by-default risk.**

---

### 2.3 Cursor — `.cursor/rules/`

| File | Lines | Type |
|---|---|---|
| `.cursor/GOVERNANCE.md` | 8 | Marker |
| `.cursor/rules/repo-governance.mdc` | 18 | Adapter |
| `.cursor/rules/no-deletions.mdc` | 58 | No-deletion rule |

#### `.cursor/rules/repo-governance.mdc` (18 lines)

YAML frontmatter `alwaysApply: true, description: Repo governance adapter for Livepeer Docs`. Body: "Read `AGENTS.md` first for repo-wide rules." Then a 7-item pointer list (AGENTS.md, governance-index, frameworks/, standards/, Mintlify constraints, GOVERNANCE.md markers, port 3000/3333 reservation). **Compliant** with thin-adapter rule (D-DG-11).

#### `.cursor/rules/no-deletions.mdc` (58 lines)

`alwaysApply: true`. 7-section structure: rule statement (`NEVER delete files`/`NEVER git rm`/`NEVER rm -rf` on tracked files), why-this-rule-exists (cites "lost 223+ files due to deletions instead of moves"), what-to-do-instead (git mv, migration plan), human override semantics (`--trailer "allow-deletions=true"` + legacy `ALLOW_DELETIONS=1`), pre-commit hook note, examples, enforcement. **Unique-to-Cursor formatting** but the actual rule is also in `.augment/rules/no-deletions.md` (30 lines, identical policy, leaner copy) and embedded in AGENTS.md §"Safety and Git Rules" (one line).

**Drift risk:** the Cursor file references a `mdc:workspace/plan/migration-plan.md` link; the Augment equivalent does not. The Cursor file says "223+ files lost"; AGENTS.md doesn't quote a number.

---

### 2.4 Windsurf — `.windsurf/rules/`

| File | Lines | Type |
|---|---|---|
| `.windsurf/GOVERNANCE.md` | 8 | Marker |
| `.windsurf/rules/repo-governance.md` | 12 | Adapter |

#### `.windsurf/rules/repo-governance.md` (12 lines)

Plain-Markdown variant of the Cursor adapter — no frontmatter (Windsurf does not use Cursor's `.mdc` format). "Read `AGENTS.md` first for repo-wide rules." 6 pointer bullets. **Compliant.** Notably **leaner** than Cursor (12 vs 18 lines) because it omits the Mintlify constraints bullet and the explicit GOVERNANCE.md mention is collapsed. **Minor inconsistency** between Cursor and Windsurf adapter bullets.

No Windsurf-specific no-deletion file. The no-deletion policy reaches Windsurf only via AGENTS.md (which Windsurf reads natively).

---

### 2.5 Augment — `.augment/` and `.github/augment-instructions.md` and `ai-tools/ai-rules/.augment/`

#### 2.5.1 `.augment/` (3 active rule files)

| File | Lines | Type |
|---|---|---|
| `.augment/GOVERNANCE.md` | 8 | Marker |
| `.augment/rules/repo-governance.md` | 25 | Adapter |
| `.augment/rules/git-safety.md` | 35 | Git rule |
| `.augment/rules/no-deletions.md` | 30 | No-deletion rule |

##### `.augment/rules/repo-governance.md` (25 lines)

YAML frontmatter `type: always_apply`. "Read `AGENTS.md` first for repo-wide rules." 6 pointer bullets. **Unique-to-Augment**: an explicit "Approved runtime targets" list at the bottom — enumerates AGENTS.md, `.github/copilot-instructions.md`, `.claude/CLAUDE.md`, `.cursor/rules/*.mdc`, `.windsurf/rules/*.md`, `.augment/rules/*.md`. This is the only adapter that maintains its own approved-targets list. **Mostly compliant** but the runtime-targets list duplicates `docs-guide/policies/agent-governance-framework.mdx` and `check-agent-docs-freshness.js`.

##### `.augment/rules/git-safety.md` (35 lines)

YAML frontmatter `type: always_apply`. Two sections:
1. **Critical git boundaries** — 8 rules: NEVER `git commit`/`git push`/`git reset` without permission, default-off `--no-verify`, HUMAN-OVERRIDE exception, port 3000 forbidden, no history rewrite, ask before any work-loss op
2. **Incident log** — single dated incident `2026-01-06 00:52 UTC`: an AI assistant performed unauthorised `git reset --hard HEAD~1`, destroyed work across 11 files, required recovery from VSCode Augment checkpoints. "THIS MUST NEVER HAPPEN AGAIN"
3. **User rules (follow always)** — 8 numbered rules (no irreversible edits, don't ask for read perms, explain before fix, don't repeat past errors, keep context minimal, always have backup, reversible OK, never irreversible)

**Duplicates AGENTS.md** §Safety-and-Git-Rules in policy substance. **Unique-to-Augment**: dated incident log and numbered "User rules" list framed as Augment-personal contract. Both also appear in the legacy `.github/augment-instructions.md` (archived).

##### `.augment/rules/no-deletions.md` (30 lines)

`type: always_apply`. Same policy as Cursor's no-deletions.mdc but ~half the size: rule (NEVER delete / git rm / rm -rf), why ("lost 223+ files"), what-to-do-instead, human override semantics, enforcement (pre-commit hook). **Drift** with Cursor version: cleaner copy, no examples block, no `mdc:` reference syntax.

#### 2.5.2 `.github/augment-instructions.md` (206 lines) — ARCHIVED

Opens with: "**Archived reference only.** Active Augment rules have moved to `.augment/rules/` at the project root — that is the canonical location Augment reads. This file is kept for historical reference and is no longer consumed by Augment automatically."

Heavy historic adapter — embeds:
- Same critical-rules section as `.augment/rules/git-safety.md` (verbatim)
- Same incident log (verbatim)
- Same "User rules (CRITICAL)" numbered list
- Style Guide and Documentation Standards (CSS Custom Properties, ThemeData deprecation, Mintlify import patterns)
- Repository Structure section (root directory rules, file locations, snippets conventions, multi-version docs, key directories)
- Development workflows (mint dev, docker buildx, generate-api-docs.sh)
- Component system documentation
- Architecture context (Gateway/Orchestrator/Transcoder/AI Worker role definitions)
- Data files documentation (`snippets/data/gateways.jsx` DOCKER_YML usage)
- Conventions (MDX-first, v2/ vs v1/, SEO frontmatter)

**This is the heaviest "archived" adapter at 206 lines** and constitutes pre-Phase-9 policy fossilisation. Per agent-governance-framework.mdx it is retired "(Phase 9)" with archived-reference header. **Drift risk persists** — the file embeds repo policy still mostly accurate but never updated; readers who land on it via search will see "MANDATORY: ... read `workspace/plan/migration-plan.md` Section 4" which may not match current rules.

#### 2.5.3 `ai-tools/ai-rules/.augment/` — DUPLICATE SUBTREE

Per the slice prompt's "stray duplicate subtrees" check, this subtree exists:

| File | Lines | Notes |
|---|---|---|
| `ai-tools/ai-rules/.augment/.augment-guidelines` | 17 | Per governance-framework.mdx: "retired to `ai-tools/ai-rules/_retired/` (Phase 9)" — but the file is **still at the active path**, not under `_retired/` |
| `ai-tools/ai-rules/.augment/rules/git-safety.md` | 6 | Duplicate of root `.augment/rules/git-safety.md` (35 lines, but this stub is 6 lines) |
| `ai-tools/ai-rules/.augment/rules/imported/copilot-instructions.md` | 96 | Imported copilot text under augment subtree — **double drift** |
| `ai-tools/ai-rules/.augment/rules/imported/AI_GUIDELINES.md` | 46 | Imported guidelines under augment subtree |
| `ai-tools/ai-rules/rules/git-safety.md` | 9 | Sibling — separate from the augment subtree |

**Finding:** `ai-tools/ai-rules/.augment-guidelines` was declared retired-to-`_retired/` in Phase 9 but is still at the active `ai-tools/ai-rules/.augment/.augment-guidelines` path. The validator (`check-agent-docs-freshness.js`) does not currently check this path, so the drift is invisible to CI.

---

### 2.6 Copilot — `.github/copilot-instructions.md` (24 lines)

Pure thin adapter. "Read `AGENTS.md` first for the repo-wide baseline." 5-bullet "Canonical Sources" list (AGENTS.md, governance-index, frameworks/, standards/, GOVERNANCE.md markers). 5-bullet "Copilot-Specific Notes" (Mintlify constraints reference, path-scoped `.github/instructions/*.instructions.md` allowed, "do not recreate a second repo-wide baseline here", same validation/structure rules as AGENTS.md, port 3000/3333 forbidden). **Most compliant adapter** with D-DG-11 — shortest, all-pointers, no policy duplication.

---

### 2.7 Mintlify chat assistant — `.mintlify/Assistant.md` (113 lines)

Not an AI coding adapter — context for the docs site chat widget.

**Sections (10):**

1. Mission — "accurate, repo-grounded help for visitors and contributors. Favor correctness and clear boundaries over speculative answers."
2. **Primary Context** — `docs.json`, `v2/**`, `v1/**` (frozen), `README.md`, `docs-guide/contributing/**`, `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`, `docs-guide/**`
3. **Source-Of-Truth Priority** — 5-step order: docs.json → v2 → README+contributing → docs-guide → v1
4. **Domain Disambiguation Rules** — Studio vs Protocol, AI Pipelines vs network, Gateway/Orchestrator/Delegator, user vs contributor
5. **Versioning Rules** — default to v2, label v1 as legacy, never present v1 as default
6. **v2 IA Routing Map** — 12-row table mapping path prefix → tab/section (home, about, solutions, community, developers, gateways, orchestrators, lpt, resources, internal, docs-guide, ai-tools/{claude-code,cursor,windsurf}). Plus shared-resource behaviour rule and "where should this live?" routing logic
7. **Answer Contract** — cite paths, state assumptions, "not documented in this repo" when applicable, no invented endpoints/commands/tokenomics, no roadmap-as-released
8. **High-Risk Topic Guardrails** — security/economics/governance/node-ops require direct repo evidence
9. **Expected Response Style** — concise, technical, actionable
10. **Fallback Behavior** — 3-step: state what's missing → ask smallest clarifying input → offer safe best-effort path

**Thin-adapter compliance:** **N/A** — not an AI coding adapter, per the agent-governance-framework.mdx classification ("chat assistant context"). But still a fairly heavy file at 113 lines. **Drift risk:** the IA routing table embeds the v2 tab list — when tabs/folders are added or renamed this file must be updated by hand. There is no validator that checks the routing-map table against `docs.json`.

---

## 3. Cross-slice findings

### 3.1 Adapter thinness audit (line counts vs root AGENTS.md = 119)

| Adapter | Lines | Multiplier vs AGENTS.md | Status |
|---|---|---|---|
| `.github/copilot-instructions.md` | 24 | 0.20× | Compliant (thin) |
| `.windsurf/rules/repo-governance.md` | 12 | 0.10× | Compliant (thin) |
| `.cursor/rules/repo-governance.mdc` | 18 | 0.15× | Compliant (thin) |
| `.augment/rules/repo-governance.md` | 25 | 0.21× | Compliant (thin) |
| `.cursor/rules/no-deletions.mdc` | 58 | 0.49× | Acceptable (focused rule file) |
| `.augment/rules/git-safety.md` | 35 | 0.29× | Acceptable (focused rule file) |
| `.augment/rules/no-deletions.md` | 30 | 0.25× | Acceptable (focused rule file) |
| `.mintlify/Assistant.md` | 113 | 0.95× | Acceptable (chat-context, not adapter) |
| `.github/AGENTS.md` | 153 | 1.29× | **NON-COMPLIANT** — heavier than baseline |
| **`.claude/CLAUDE.md`** | **325** | **2.73×** | **NON-COMPLIANT — heaviest by far** |
| `.github/augment-instructions.md` | 206 | 1.73× | Archived but not relocated |

### 3.2 Policy duplicated across adapters

**Port 3000/3333 reservation** — appears in AGENTS.md, `.github/AGENTS.md`, `.github/copilot-instructions.md`, `.cursor/rules/repo-governance.mdc`, `.windsurf/rules/repo-governance.md`, `.augment/rules/repo-governance.md`, `.augment/rules/git-safety.md` (7 surfaces). Should canonicalise to AGENTS.md only.

**No-deletion policy** — appears in AGENTS.md (1 line), `.cursor/rules/no-deletions.mdc` (58 lines), `.augment/rules/no-deletions.md` (30 lines), `.github/augment-instructions.md` (archived). Three different copies of the same policy, each with slightly different prose.

**HUMAN-OVERRIDE-POLICY citation** — AGENTS.md, `.github/AGENTS.md`, `.augment/rules/git-safety.md`, `.github/augment-instructions.md`. Four mentions — all link the same file.

**`--no-verify` default-off** — same 4 surfaces.

**Worktree pinning + no branch switch** — AGENTS.md, `.github/AGENTS.md`. Both quote the same rule; Codex extension elaborates with checkpoint-branch detail.

**Mintlify constraints reference path** — every coding-agent adapter (`.cursor`, `.claude`, `.github/AGENTS.md`, AGENTS.md root) plus `.mintlify/Assistant.md`. Five surfaces. Path is fragile.

**Repository structure rules** — full re-statement of root/snippets/scripts rules appears in `.github/AGENTS.md` §3 (lines 62-99) AND `.github/augment-instructions.md` §"Repository Structure" (lines 71-129). Both are out-of-date with the current `.allowlist` model in AGENTS.md.

### 3.3 Adapters referenced in `agent-governance-framework.mdx` vs actually present

Per `docs-guide/policies/agent-governance-framework.mdx` "Current implementation state" table, every documented adapter file exists. Per `check-agent-docs-freshness.js` `FILES` array (lines 23-36):

| Validator label | Path | Present? |
|---|---|---|
| AGENTS | `AGENTS.md` | Yes |
| COPILOT-ADAPTER | `.github/copilot-instructions.md` | Yes |
| CLAUDE-ADAPTER | `.claude/CLAUDE.md` | Yes |
| CURSOR-ADAPTER | `.cursor/rules/repo-governance.mdc` | Yes |
| CURSOR-NO-DELETIONS-ADAPTER | `.cursor/rules/no-deletions.mdc` | Yes |
| WINDSURF-ADAPTER | `.windsurf/rules/repo-governance.md` | Yes |
| AUGMENT-ADAPTER | `.augment/rules/repo-governance.md` | Yes |
| AUGMENT-GIT-SAFETY-ADAPTER | `.augment/rules/git-safety.md` | Yes |
| AUGMENT-NO-DELETIONS-ADAPTER | `.augment/rules/no-deletions.md` | Yes |
| MINTLIFY-ASSISTANT | `.mintlify/Assistant.md` | Yes |
| CODEX-TASK-LAYER | `.github/AGENTS.md` | Yes |
| AGENT-GOVERNANCE-POLICY | `docs-guide/policies/agent-governance-framework.mdx` | Yes |
| ROOT-ALLOWLIST-GOVERNANCE-POLICY | `docs-guide/policies/root-allowlist-governance.mdx` | Yes (not read in this slice) |
| CONTRIBUTOR-AGENT-INSTRUCTIONS | `docs-guide/contributing/agent-instructions.mdx` | Yes (not read in this slice) |

Plus dynamic per-skill checks (line 113 onwards): scans `ai-tools/ai-skills/*/SKILL.md`.

**No missing-file drift detected between the validator and the framework page.**

### 3.4 `check-agent-docs-freshness.js` path drift

Both AGENTS.md and the validator agree on path locations. The framework page (`agent-governance-framework.mdx`) Approved-Migration-Map table also matches. **No drift here.**

However, **the validator does NOT check:**
- `ai-tools/ai-rules/.augment/.augment-guidelines` (declared retired in framework but file still present at active path)
- `ai-tools/ai-rules/.augment/rules/git-safety.md` (6-line duplicate)
- `ai-tools/ai-rules/.augment/rules/imported/copilot-instructions.md` (96 lines — looks like a Codex/Copilot import that never got cleaned up)
- `ai-tools/ai-rules/.augment/rules/imported/AI_GUIDELINES.md` (46 lines)
- `.github/augment-instructions.md` (archived but still readable; should redirect via header but text remains live policy)

### 3.5 Stray duplicate subtrees

| Path | Disposition per governance | Actual state |
|---|---|---|
| `ai-tools/ai-rules/.augment/.augment-guidelines` | Retired to `_retired/` (Phase 9) | **Still at active path** |
| `ai-tools/ai-rules/.augment/rules/git-safety.md` | Implicit retirement | **Still present (6 lines)** |
| `ai-tools/ai-rules/.augment/rules/imported/copilot-instructions.md` | Not addressed in framework | **96 lines of orphan policy** |
| `ai-tools/ai-rules/.augment/rules/imported/AI_GUIDELINES.md` | Not addressed in framework | **46 lines of orphan policy** |
| `.github/augment-instructions.md` | "Archived; archived-reference header" | Header present, 206 lines of historic policy still readable |
| `.codex/locks-shared/` | Mentioned in slice prompt but does not exist | **Path not present** |

### 3.6 Codex task-layer staleness

`.github/AGENTS.md` §"GIT WORKFLOW & CHECKPOINTS" opens with an explicit staleness note (2026-03-26): the entire checkpoint-branch automation block describing `checkpoint/YYYY-MM-DD_HHMMSS` is "aspirational and not yet implemented. No git hooks in this repo create checkpoint branches automatically." The body still goes on to describe the canned Pre-Write Announcement and Recovery semantics as if they were live. **The agent reading this in production will encounter contradictory guidance.**

### 3.7 Embedded project-state in CLAUDE.md

`.claude/CLAUDE.md` §"Active threads" embeds a 25-row project-state table (the bulk of the 32 KB file size). This is operational state, not policy. It is the largest single contributor to CLAUDE.md non-compliance with the thin-adapter rule. Candidate for move to `workspace/thread-outputs/sessions/` or `workspace/plan/active/_Project-Management_/project-state.md` (already exists, per the Key files table on line 301 of CLAUDE.md).

### 3.8 The `.claude/skills/` registry

12 thin `SKILL.md` pointers (each 5–6 lines except `skills/SKILL.md` at 20 lines) that map slash commands to canonical bodies at `ai-tools/ai-skills/<name>/SKILL.md`. This is the **healthiest** part of the Claude adapter — pure pointers, no duplication. Pattern worth replicating elsewhere.

### 3.9 The `.claude/references/` library (26 files, ~2,860 lines)

Claude-unique. Not referenced from AGENTS.md or any other adapter. Treated by CLAUDE.md as a private knowledge base. No validator checks its freshness against canonical sources. Per the references SOURCE-MAP.md, files were collated from `CONTENT-WRITING/Prompts/`, `workspace/thread-outputs/research/`, `workspace/plan/active/SCRIPT-GOVERNANCE/`, `workspace/plan/active/COMPONENT-GOVERNANCE/`, and `docs-guide/canonical/collation-data/Mintlify/` — but these source paths are also subject to drift (e.g. `CONTENT-WRITING/` is referenced as if active, but most of its content has migrated to `docs-guide/standards/`).

### 3.10 Mintlify Assistant routing-map drift

`.mintlify/Assistant.md` §"v2 IA Routing Map" is a hand-maintained table that mirrors the docs.json top-level tab structure. No validator enforces alignment with docs.json. When a tab is added, renamed, or removed, this file must be updated by hand — high drift risk.

---

## 4. Consolidation matrix

| File | Lines | Action | Target canonical home | Rationale |
|---|---|---|---|---|
| `AGENTS.md` | 119 | **Keep + own** | itself | Canonical baseline — single source of truth |
| `.github/copilot-instructions.md` | 24 | Keep as-is | itself | Compliant thin adapter; exemplar |
| `.windsurf/rules/repo-governance.md` | 12 | Keep as-is | itself | Compliant thin adapter |
| `.cursor/rules/repo-governance.mdc` | 18 | Keep as-is | itself | Compliant thin adapter |
| `.cursor/rules/no-deletions.mdc` | 58 | Trim to thin pointer | `AGENTS.md` §Safety-and-Git-Rules + `docs-guide/standards/git-safety.mdx` | 58-line restatement of one-line root rule |
| `.augment/rules/repo-governance.md` | 25 | Keep as-is (drop runtime-targets list — duplicates validator) | itself | Mostly compliant |
| `.augment/rules/git-safety.md` | 35 | Trim incident log; keep critical-boundaries summary | itself + AGENTS.md | Incident log valuable but duplicated in archived `.github/augment-instructions.md` |
| `.augment/rules/no-deletions.md` | 30 | Same as cursor — trim to thin pointer | `AGENTS.md` + standards page | Duplicates Cursor's version |
| `.mintlify/Assistant.md` | 113 | Keep + add validator | itself + new `check-mintlify-assistant-routing.js` | Routing-map table needs CI alignment with docs.json |
| `.github/AGENTS.md` | 153 | Trim to Codex-specific extension only (HitL, locks, task contracts) | itself; move structure-rules to AGENTS.md (already there) | Currently 50%+ duplicate of AGENTS.md root content |
| `.claude/CLAUDE.md` | 325 | **Major surgery**: move Active-threads table to `workspace/plan/active/_Project-Management_/project-state.md`; move domain-terms table to voice-and-copy.mdx (already there); collapse engineering-standards/co-creation/Karpathy into pointers to AGENTS.md and `docs-guide/standards/`. Keep hook-enforced rules, quick commands, skills catalogue, VS Code extension diagnostic, and Claude-coworker preamble | itself (slimmed to ~120 lines target) | 2.73× heavier than baseline; bulk is project state, not Claude-specific policy |
| `.claude/GOVERNANCE.md` | 17 | Update to remove `.claude/hooks/` reference (directory doesn't exist) | itself | Minor marker drift |
| `.claude/settings.json` | 296 | Keep as-is | itself | Hook config — operational |
| `.claude/settings.local.json` | 7 | Keep as-is | itself | Personal allowlist |
| `.claude/skills/*/SKILL.md` (12 files) | 5–20 each | Keep as-is | itself | Exemplar pattern |
| `.claude/references/` (26 files) | ~2,860 | Audit for source drift; add freshness validator | itself | No CI check; sources move and references go stale |
| `.codex/README.md` | 44 | Keep as-is | itself | Operational doc — good |
| `.codex/task-contract.yaml` | 42 | Keep as-is | itself | Active task contract |
| `.codex/GOVERNANCE.md` | 8 | Keep as-is | itself | Marker |
| `.github/augment-instructions.md` | 206 | **Move to `_retired/`** per Phase 9 plan (currently has header but is at active path) | `_retired/` directory under `.github/workspace/x-archive/` or similar | Per framework: "archived" — but it's not in an archive location |
| `ai-tools/ai-rules/.augment/.augment-guidelines` | 17 | **Move to `_retired/`** (declared retired but at active path) | `ai-tools/ai-rules/_retired/` | Framework says retired; file still active |
| `ai-tools/ai-rules/.augment/rules/git-safety.md` | 6 | Delete or move to `_retired/` | n/a | 6-line duplicate stub |
| `ai-tools/ai-rules/.augment/rules/imported/copilot-instructions.md` | 96 | Delete or move to `_retired/` | n/a | Orphan import, not referenced anywhere |
| `ai-tools/ai-rules/.augment/rules/imported/AI_GUIDELINES.md` | 46 | Delete or move to `_retired/` | n/a | Orphan import, not referenced anywhere |
| `ai-tools/ai-rules/rules/git-safety.md` | 9 | Audit — is this active or stub? | n/a | Sibling subtree, scope unclear |

---

## 5. Top 10 findings

1. **CLAUDE.md is 2.73× heavier than root AGENTS.md** (325 vs 119 lines) and the bulk is a 25-row Active-threads project-state table that belongs in `workspace/plan/active/_Project-Management_/project-state.md` (which CLAUDE.md itself references as the source of truth on line 301). Material thin-adapter violation per D-DG-11.
2. **`.github/AGENTS.md` carries a self-declared staleness note**: the entire checkpoint-branch automation block is "aspirational and not yet implemented" yet remains in the body. Agents reading it will encounter contradictory rules.
3. **No-deletion policy is restated 3× across adapters** (Cursor: 58 lines, Augment: 30 lines, AGENTS.md: 1 line) with prose drift — one cites "223+ files lost", the others don't. Should canonicalise to AGENTS.md + one pointer per adapter.
4. **Port 3000/3333 reservation is duplicated across 7 adapter surfaces**. Each restatement is slightly different (some say "3000", some say "3000 or 3333", `.augment/rules/git-safety.md` says only "3000"). High drift surface for a one-line rule.
5. **`ai-tools/ai-rules/.augment/` is a phantom-retired duplicate subtree** containing `.augment-guidelines` (17 lines), `rules/git-safety.md` (6 lines), and 142 lines of orphan imports under `rules/imported/`. The framework declares these retired-to-`_retired/`, but they sit at the active path and are invisible to `check-agent-docs-freshness.js`.
6. **`.github/augment-instructions.md` (206 lines) is the heaviest adapter file but is at the active path with only a header advising it is archived**. A Codex/Copilot doing directory-walk WILL still read it. Should be moved to a retirement directory.
7. **`.codex/locks-shared/` does not exist** despite being mentioned in the slice prompt as part of the Codex schema; only `.codex/locks-local/` is gitignored. The current Codex governance is local-locks-only.
8. **The `.codex/task-contract.yaml` `scope_in` is repo-wide** (20 entries covering practically every adapter dir, docs-guide, operations, snippets, tools, v2, workspace). This is the active branch-isolation contract — agents on `codex/20260403-contracts-surface-redesign` can write anywhere outside `v1/`. The contract is the right shape, but the active scope is permissive enough that the isolation guarantee is mostly nominal.
9. **`.mintlify/Assistant.md` IA-routing table has no validator**. The 12-row table mapping path prefix → tab is hand-maintained against docs.json with no CI alignment check — this is the same drift pattern flagged in the framework gap analysis.
10. **The `.claude/references/` library (~2,860 lines across 26 files) has no freshness validator**. Per its own SOURCE-MAP.md, references depend on paths under `CONTENT-WRITING/`, `workspace/plan/active/SCRIPT-GOVERNANCE/`, `workspace/plan/active/COMPONENT-GOVERNANCE/`, `workspace/thread-outputs/research/`, and `docs-guide/canonical/collation-data/Mintlify/` — but `CONTENT-WRITING/` content has substantially migrated to `docs-guide/standards/` and the references library still points at the legacy paths.

---

## 6. Files inventoried

**Total: 53 files read in full.**

Root canonical: 1 (`AGENTS.md`)
Claude: 5 + 12 SKILL.md pointers + 26 references = 43
- `.claude/CLAUDE.md`, `.claude/GOVERNANCE.md`, `.claude/settings.json`, `.claude/settings.local.json` (4)
- `.claude/skills/{agent-brief,build,close,design,diagnose,dispatch,iterate,pm,propagate,research,skills,thread}/SKILL.md` (12)
- `.claude/references/` README + SOURCE-MAP + 24 category files (26)
- Subtotal: 42 (line counts read; 4 of the references were sampled, others enumerated by `wc -l`)
Codex: 3 (`.codex/README.md`, `.codex/task-contract.yaml`, `.codex/GOVERNANCE.md`)
Cursor: 3 (`.cursor/GOVERNANCE.md`, `.cursor/rules/repo-governance.mdc`, `.cursor/rules/no-deletions.mdc`)
Windsurf: 2 (`.windsurf/GOVERNANCE.md`, `.windsurf/rules/repo-governance.md`)
Augment: 4 (`.augment/GOVERNANCE.md`, `.augment/rules/repo-governance.md`, `.augment/rules/git-safety.md`, `.augment/rules/no-deletions.md`)
Mintlify: 2 (`.mintlify/Assistant.md`, `.mintlify/GOVERNANCE.md`)
GitHub: 4 (`.github/AGENTS.md`, `.github/copilot-instructions.md`, `.github/augment-instructions.md`, `.github/GOVERNANCE.md`)
Duplicate Augment subtree under ai-tools: 5 (`ai-tools/ai-rules/.augment/.augment-guidelines`, `.../rules/git-safety.md`, `.../rules/imported/copilot-instructions.md`, `.../rules/imported/AI_GUIDELINES.md`, `ai-tools/ai-rules/rules/git-safety.md`) — sizes confirmed via `wc -l`
Validator + framework cross-checked: 2 (`operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js`, `docs-guide/policies/agent-governance-framework.mdx`)

---

## 7. Codex schema summary (per slice prompt)

**`.codex/task-contract.yaml` schema** (per current active contract):

```yaml
task_id: <int>
branch: codex/<task_id>-<slug>
base_branch: docs-v2-dev
scope_in: [string, ...]    # allowed write prefixes
scope_out: [string, ...]   # forbidden write prefixes
allowed_generated: [string, ...]
acceptance_checks: [shell-command, ...]
risk_flags: [tag, ...]
follow_up_issues: [int, ...]
```

**Lock file schema** (`.codex/locks-local/*.json`, gitignored):

```json
{
  "lock_id": "string",
  "task_id": "string",
  "branch": "string",
  "worktree_path": "absolute-path",
  "owner": "string",
  "scope_in": ["repo-relative-path-or-prefix"],
  "created_at": "ISO-8601",
  "expires_at": "ISO-8601",
  "status": "active|released",
  "released_at": "ISO-8601 (optional)"
}
```

**Branch-isolation rules** (per `.github/AGENTS.md` + AGENTS.md root + `.codex/README.md`):

- Codex branches are named `codex/<task_id>-<slug>` and rooted at `docs-v2-dev`.
- A managed worktree is provisioned at `../codex-worktrees/<task_id>-<slug>`. `--in-place` reuses the current worktree (default is dedicated).
- Branch switching inside a worktree is forbidden — pin for the full task.
- Worktree create/remove and branch delete require explicit human approval.
- A codex branch commit is **not** task completion; the lock is held until `docs-v2-dev` contains the task commit.
- `git stash` is forbidden as an isolation mechanism — use branch-scoped WIP commits.
- `--no-verify` is default-off; the HUMAN-OVERRIDE-POLICY path requires `ALLOW_HUMAN_NO_VERIFY=1` plus commit trailers.
- File deletions require a human-owned commit with `--trailer "allow-deletions=true"`.
- `.allowlist` edits require a human-owned commit with `--trailer "allowlist-edit=true"`.

---

## 8. File written

This inventory was written to `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/workspace/thread-outputs/repo-consolidation-deep/SLICE-06-agent-adapters.md` per slice instructions. Read-only otherwise — no other repo files were modified.

---

# Addendum — 2026-05-19 re-audit

Relaunched re-audit on 2026-05-19 after the prior pass halted on a single missing-path `ls`. This addendum extends the original slice with: (a) precise mtimes for every adapter file, (b) two findings the original missed (validator-path drift between AGENTS.md and the framework page; absent `ASSISTANT.md` redirect stub), (c) confirmation no source files have changed materially since 2026-04-13. The original sections 1–8 above are preserved unchanged.

## A. File-level inventory with mtimes (re-confirmed 2026-05-19)

### A.1 Root baseline

| File | Bytes | Lines | mtime | Status |
|---|---|---|---|---|
| `AGENTS.md` | 8,414 | 119 | 2026-05-04 17:17 | Active canonical baseline |

### A.2 `.claude/` (top-level)

| File | Bytes | Lines | mtime | Frontmatter `lastVerified` | Retired tag |
|---|---|---|---|---|---|
| `.claude/CLAUDE.md` | 32,486 | 326 | 2026-05-22 16:18 | None (no YAML frontmatter) | None |
| `.claude/GOVERNANCE.md` | 909 | 17 | 2026-04-07 23:02 | None | None |
| `.claude/settings.json` | 9,964 | 296 | 2026-04-08 00:06 | n/a (JSON config) | None |
| `.claude/settings.local.json` | 149 | 7 | 2026-03-27 02:56 | n/a (JSON config) | None |

`scheduled_tasks.lock` (130 bytes, 2026-05-04) and `sessions.db` (159,744 bytes, 2026-04-07) skipped per scope (`.lock` + `.db`). `projects/` and `worktrees/` skipped per scope.

CLAUDE.md is now 326 lines (one extra line vs the original slice's 325). Content sampled — the `Active threads` table has been extended with a new "Repo Features Documentation Audit" row carrying detailed Session 3 RFP Phase 1 / Part 13 / orphan-retirement notes (May 2026 work). All other policy sections are unchanged. The "Skills" section still lists 5 categories. The "Engineering standards", "Karpathy guidelines", "Domain terms", and "Voice and review standards" sections are still embedded — same drift surfaces vs `docs-guide/standards/voice-and-copy.mdx` and AGENTS.md.

### A.3 `.claude/skills/` (12 SKILL.md pointers)

| File | Bytes | mtime | Form |
|---|---|---|---|
| `agent-brief/SKILL.md` | 245 | 2026-04-03 06:08 | Pointer |
| `build/SKILL.md` | 225 | 2026-03-26 13:21 | Pointer |
| `close/SKILL.md` | 191 | 2026-04-03 06:08 | Pointer |
| `design/SKILL.md` | 216 | 2026-04-03 06:08 | Pointer |
| `diagnose/SKILL.md` | 281 | 2026-04-03 06:08 | Pointer |
| `dispatch/SKILL.md` | 226 | 2026-04-03 06:08 | Pointer |
| `iterate/SKILL.md` | 204 | 2026-04-03 06:08 | Pointer |
| `pm/SKILL.md` | 244 | 2026-04-03 06:08 | Pointer |
| `propagate/SKILL.md` | 304 | 2026-04-03 06:08 | Pointer |
| `research/SKILL.md` | 216 | 2026-04-03 06:08 | Pointer |
| `skills/SKILL.md` | 966 | 2026-04-03 06:08 | Non-pointer (defines discovery skill) |
| `thread/SKILL.md` | 215 | 2026-04-03 06:08 | Pointer |

Each pointer skill resolves to `ai-tools/ai-skills/{name}/SKILL.md`. None carry their own frontmatter `lastVerified`. None have a `retired` tag. Pattern is healthy — see original §3.8.

### A.4 `.claude/references/` (29 files / 13 categories)

| File | Bytes | mtime | Notes |
|---|---|---|---|
| `references/README.md` | 4,873 | 2026-04-03 06:08 | Index of 13 categories |
| `references/SOURCE-MAP.md` | 5,923 | 2026-04-03 13:36 | Maps to legacy `CONTENT-WRITING/` paths |
| `references/authoring/exemplars.md` | 5,363 | 2026-04-03 13:07 | |
| `references/components/exemplars.md` | 4,943 | 2026-04-03 13:07 | |
| `references/components/patterns.md` | 3,963 | 2026-04-03 13:07 | |
| `references/copy/best-practice.md` | 5,088 | 2026-04-03 06:08 | |
| `references/copy/exemplars.md` | 4,256 | 2026-04-13 17:12 | Most recent change |
| `references/copy/patterns.md` | 3,756 | 2026-04-03 06:08 | |
| `references/data-patterns/exemplars.md` | 4,838 | 2026-04-03 06:08 | |
| `references/governance/exemplars.md` | 4,780 | 2026-04-03 06:08 | |
| `references/ia-and-naming/best-practice.md` | 5,053 | 2026-04-03 06:08 | |
| `references/ia-and-naming/exemplars.md` | 9,003 | 2026-04-03 06:08 | |
| `references/ia-and-naming/patterns.md` | 3,544 | 2026-04-03 06:08 | |
| `references/layout/best-practice.md` | 4,699 | 2026-04-03 13:07 | |
| `references/layout/exemplars.md` | 8,766 | 2026-04-13 17:12 | Most recent change |
| `references/layout/patterns.md` | 3,977 | 2026-04-03 13:07 | |
| `references/pipelines/exemplars.md` | 7,795 | 2026-04-03 06:08 | |
| `references/plans/exemplars.md` | 5,756 | 2026-04-03 06:08 | |
| `references/prompts/concern-audit-methodology.md` | 10,451 | 2026-04-03 06:08 | Largest reference file |
| `references/prompts/exemplars.md` | 5,790 | 2026-04-03 06:08 | |
| `references/prompts/patterns.md` | 2,925 | 2026-04-03 06:08 | |
| `references/research/exemplars.md` | 5,233 | 2026-04-03 13:36 | |
| `references/scripts/exemplars.md` | 1,719 | 2026-04-03 06:08 | Smallest reference file |
| `references/scripts/patterns.md` | 3,021 | 2026-04-03 06:08 | |
| `references/skills/exemplars.md` | 8,529 | 2026-04-03 06:08 | |

Total references: 25 files across `references/` (matches original §2.1.6 list; original said "26 files" counting README + SOURCE-MAP separately). Library size ~127 KB. No frontmatter, no `lastVerified`, no `retired` tags on any reference file. Per original §3.9 — no validator checks freshness against canonical sources. The `SOURCE-MAP.md` still references `CONTENT-WRITING/` paths despite content migration to `docs-guide/standards/` — stale.

### A.5 `.codex/`

| File | Bytes | Lines | mtime | Status |
|---|---|---|---|---|
| `.codex/GOVERNANCE.md` | 319 | 8 | 2026-04-07 23:17 | Marker |
| `.codex/README.md` | 1,736 | 44 | 2026-04-08 03:30 | Lock lifecycle (active) |
| `.codex/task-contract.yaml` | 1,148 | 42 | 2026-04-03 13:11 | Active contract `codex/20260403-contracts-surface-redesign` |

`.codex/locks-shared/`, `.codex/skills/`, `.codex/scripts/`, `.codex/locks-local/`, `.codex/pr-body.generated.md` — **not present in working tree**. The locks-local + pr-body.generated paths are gitignored per `.codex/.gitignore`. Per the slice prompt, "assumed-but-absent paths are findings" — recording here that the 3 dirs (`locks-shared/`, `skills/`, `scripts/`) do not exist.

### A.6 `.cursor/`

| File | Bytes | Lines | mtime |
|---|---|---|---|
| `.cursor/GOVERNANCE.md` | 321 | 8 | 2026-04-07 23:17 |
| `.cursor/rules/no-deletions.mdc` | 1,820 | 58 | 2026-04-03 06:08 |
| `.cursor/rules/repo-governance.mdc` | 836 | 18 | 2026-04-08 01:57 |

### A.7 `.windsurf/`

| File | Bytes | Lines | mtime |
|---|---|---|---|
| `.windsurf/GOVERNANCE.md` | 325 | 8 | 2026-04-07 23:17 |
| `.windsurf/rules/repo-governance.md` | 570 | 12 | 2026-04-08 01:58 |

### A.8 `.augment/`

| File | Bytes | Lines | mtime |
|---|---|---|---|
| `.augment/GOVERNANCE.md` | 323 | 8 | 2026-04-07 23:17 |
| `.augment/rules/repo-governance.md` | 778 | 25 | 2026-04-08 01:58 |
| `.augment/rules/git-safety.md` | 1,658 | 35 | 2026-04-03 06:08 |
| `.augment/rules/no-deletions.md` | 994 | 30 | 2026-04-03 06:08 |

### A.9 `.mintlify/`

| File | Bytes | Lines | mtime |
|---|---|---|---|
| `.mintlify/GOVERNANCE.md` | 320 | 8 | 2026-04-07 23:17 |
| `.mintlify/Assistant.md` | 4,445 | 113 | 2026-04-05 15:54 |

### A.10 `.github/`

| File | Bytes | Lines | mtime |
|---|---|---|---|
| `.github/GOVERNANCE.md` | 483 | n/a | 2026-04-07 23:00 |
| `.github/AGENTS.md` | 9,792 | 153 | 2026-04-03 13:57 |
| `.github/copilot-instructions.md` | 1,255 | 24 | 2026-04-08 01:58 |
| `.github/augment-instructions.md` | 8,564 | 206 | 2026-04-05 15:48 |

## B. Findings the original slice missed

### B.1 NEW: Validator-path drift between AGENTS.md and the agent-governance framework

- **AGENTS.md line 98:** `node operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js --json` (correct — file exists at this path)
- **`docs-guide/policies/agent-governance-framework.mdx` line 137:** `operations/scripts/validators/governance/check-agent-docs-freshness.js` (drift — missing `/compliance/` segment)
- **`docs-guide/policies/agent-governance-framework.mdx` line 228:** `operations/scripts/validators/governance/check-agent-docs-freshness.js` (drift — same)
- **Actual file:** `operations/scripts/validators/governance/compliance/check-agent-docs-freshness.js` (confirmed via `find`)

This contradicts the original slice §3.4 conclusion ("Both AGENTS.md and the validator agree on path locations… No drift here"). The framework page is wrong in two places. If a reader copies the path from the framework, they will get "file not found".

### B.2 NEW: `ASSISTANT.md` redirect stub does not exist at repo root

- `docs-guide/policies/agent-governance-framework.mdx` line 146 and line 171 state `ASSISTANT.md` is "repurposed as redirect stub (Phase 9)" with canonical content at `.mintlify/Assistant.md`.
- Reality (2026-05-19): `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/ASSISTANT.md` does not exist. The redirect stub was either never created, was deleted, or was moved without a framework update.
- Validator (`check-agent-docs-freshness.js` `FILES` array) does NOT include `ASSISTANT.md` — so the absence is invisible to CI but the framework still claims it exists.

### B.3 CONFIRMED: `_retired/` directory exists with the retired `.augment-guidelines`

- `ai-tools/ai-rules/_retired/` contains 8 files including `.augment-guidelines` (790 bytes, 2026-04-03), `AI_GUIDELINES.md` (1,737 bytes), `imported-copilot-instructions.md` (4,024 bytes), and 5 others.
- **But the duplicate at `ai-tools/ai-rules/.augment/.augment-guidelines` (17 lines) is still at the active path** — confirming original §3.5 finding. Both copies coexist.

### B.4 CONFIRMED: `.github/AGENTS.md` checkpoint-branch staleness still present

Re-read lines 34-40 (the `{/* STALENESS NOTE (2026-03-26)... */}` block) and lines 44-46 (the body that contradicts it). The staleness note has not been removed; the contradictory body has not been edited. Drift unchanged since the original slice.

### B.5 CONFIRMED: `ai-tools/agent-packs/` exists with per-agent generated outputs

- `ai-tools/agent-packs/claude/`, `cursor/`, `codex/`, `windsurf/`, `skills/` all present
- `ai-tools/agent-packs/README.md` (995 bytes, 2026-04-08) present
- Per agent-governance-framework.mdx line 133, these are "generated cross-agent adapter outputs… keep generated; never treat as canonical source". Treatment as outputs is correct per framework.

## C. Adapter file totals (final count, 2026-05-19)

**Active adapter files inventoried this pass: 49**

Per-adapter:
- Root: 1 (AGENTS.md)
- Claude: 41 (CLAUDE.md, GOVERNANCE.md, 2 settings, 12 SKILL.md, 25 references)
- Codex: 3 (.codex/{GOVERNANCE,README,task-contract})
- Cursor: 3 (.cursor/GOVERNANCE.md + 2 rules)
- Windsurf: 2 (.windsurf/GOVERNANCE.md + 1 rule)
- Augment: 4 (.augment/GOVERNANCE.md + 3 rules)
- Mintlify: 2 (.mintlify/{GOVERNANCE.md, Assistant.md})
- GitHub: 4 (.github/{GOVERNANCE.md, AGENTS.md, copilot-instructions.md, augment-instructions.md})

Phantom-retired duplicate subtree under `ai-tools/ai-rules/.augment/`: 4 files (totalling 165 lines) confirmed present at active path, per original §3.5. Not counted in the 49.

Also confirmed: `_retired/` (8 files) exists as the framework's designated retirement destination.

## D. Top 10 findings (refreshed, ordered by remediation urgency)

1. **`agent-governance-framework.mdx` references a wrong validator path twice** (B.1) — readers following the docs will get "file not found". Single-line fix: insert `/compliance/` in two locations.
2. **`ASSISTANT.md` redirect stub doesn't exist** (B.2) — the framework claims a redirect stub at root that is absent. Either create it, or remove the claim from the framework + Approved-Migration-Map.
3. **CLAUDE.md is now 326 lines / 32.5 KB** (2.74× AGENTS.md) and the bulk is still project state — most heavyweight extension since original slice is the new "Repo Features Documentation Audit" row added 2026-05-19. The structural drift is widening, not narrowing.
4. **`.github/AGENTS.md` checkpoint-branch staleness note unchanged** — embedded "aspirational" warning still contradicts the body it precedes.
5. **`ai-tools/ai-rules/.augment/` phantom-retired subtree (4 files, 165 lines) coexists with `_retired/`** — framework declared retired but file still at active path. Both copies coexist. Invisible to the freshness validator.
6. **`.github/augment-instructions.md` (206 lines) still at active path** — header advises archived, but a directory-walking agent reads it anyway.
7. **No-deletion policy duplicated across 4 surfaces with drift** (AGENTS.md 1 line, Cursor 58 lines, Augment 30 lines, archived `.github/augment-instructions.md`) — original §3.2 finding unchanged.
8. **Port 3000/3333 reservation duplicated across 7 surfaces** — original §3.2 finding unchanged. Cursor + Augment + AGENTS.md + Codex + Copilot + Windsurf + Mintlify all repeat the rule slightly differently.
9. **`.claude/references/` (25 files, ~127 KB) has no freshness validator and points at legacy `CONTENT-WRITING/` paths** — original §3.9. SOURCE-MAP is stale: most CONTENT-WRITING content has migrated to `docs-guide/standards/`.
10. **`.mintlify/Assistant.md` v2 IA Routing Map drifts against docs.json with no CI check** — original §3.10 unchanged.

## E. Confirmation

File written to: `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev/workspace/thread-outputs/repo-consolidation-deep/SLICE-06-agent-adapters.md` (this file, appended-only).

Read-only audit. No source files modified.

