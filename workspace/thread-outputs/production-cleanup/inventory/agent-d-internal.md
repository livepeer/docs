# Agent D — DOCS-GUIDE + AI-TOOLS + INTERNAL-CONFIGS

**Scanned:** 2026-05-25
**Paths:**
- `/docs-guide/` (excl. `_workspace/`)
- `/ai-tools/` (excl. `_workspace/`)
- `/.claude/`
- `/.githooks/`
- `/.vscode/`
- `/.augment/`, `/.codex/`, `/.cursor/`, `/.windsurf/`

**Total files:** ~545 (113 docs-guide + 315 ai-tools + 41 .claude refs/skills/settings/CLAUDE + 13 .githooks + 12 .vscode + 12 across four AI tool dirs)

## Summary

- **production-rendered:** ~88 (entire `docs-guide/*.mdx` set excluding `_workspace/`; imported into `v2/resources/documentation-guide/` wrappers)
- **production-tree-internal:** ~440 (all `ai-tools/**`, `.claude/**`, `.githooks/**`, `.vscode/**`, four `.augment|.codex|.cursor|.windsurf/**` dirs — kept in repo, mintignored explicitly or via global `**/*.md` rule)
- **cut-candidates:** 4 (1 .bak file, 1 disabled hook, 1 empty composables dir, 1 stray broken redirect)
- **archive-candidates:** ~15 (ai-skills/x-archive, ai-rules/_retired, dep-files duplicates, `docs-guide/notes.mdx`, ai-skills/source-content)
- **gold-candidates:** 5 (Mintlify constraints reference, .claude/references entire system, skill-catalog.json schema pattern, agent-contract.md, AI-tools governance adapter pattern)
- **needs-collab:** 8 (see below)

**Top 3 risks:**
1. **docs-guide pages are imported into v2/resources/documentation-guide/ wrappers but NOT registered in `docs.json` directly.** Two broken redirects (`/docs-guide/source-of-truth-guide` → `/docs-guide/index`) point to a non-routed location. The actual production routes are `v2/resources/documentation-guide/*`. If anyone clicks the redirect destination, it 404s.
2. **35 SKILL.md files exist in `ai-tools/ai-skills/` but only 9 are registered in `skill-catalog.json`.** Catalog is severely out of date or scope-limited; CLAUDE.md table cites 34 (close to filesystem count, far above catalog count).
3. **`docs-guide/canonical/collation-data/Mintlify/dep-files/` contains 11 stale-by-design copies** of files that live elsewhere (workspace/, snippets/, v2/, operations/). These are snapshot duplicates with no automated sync. Source-of-truth violation.

## Inventory table

See `agent-d-internal.tsv` for the full machine-readable table. Key directory-level entries summarised here:

| Path | Type | Classification | Rationale |
|---|---|---|---|
| `docs-guide/GOVERNANCE.md` | md | production-tree-internal | Governance marker, mintignored via `**/*.md` |
| `docs-guide/index.mdx` | mdx | production-rendered | Imported by `v2/resources/documentation-guide/index.mdx`. Canonical docs-as-infrastructure overview |
| `docs-guide/notes.mdx` | mdx | archive-candidate | "Ally's Notes" personal scratchpad. Not in docs.json. Not imported by any v2 wrapper. Should move to `_workspace/` |
| `docs-guide/overview.mdx` | mdx | needs-collab | Not in docs.json. Unclear vs `index.mdx` and `documentation-overview.mdx` |
| `docs-guide/composables/` | empty dir | cut-candidate | Empty directory created 2026-05-18, no contents |
| `docs-guide/source-of-truth-guide.mdx` | mdx | production-rendered | Imported by `v2/resources/documentation-guide/source-of-truth-guide.mdx`. Redirect points to broken target |
| `docs-guide/docs-glossary.md` | md | production-tree-internal | Internal glossary corpus marker file (md = mintignored). D-GLOS-01 names different canonical path |
| `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md` | md | gold-candidate | Canonical Mintlify constraints reference. Cited from CLAUDE.md as must-read |
| `docs-guide/canonical/collation-data/Mintlify/dep-files/**` (11 files) | various | archive-candidate | Stale snapshot copies of files that live in workspace/, snippets/, v2/, operations/. No sync mechanism. Source-of-truth violation per Source of Truth Policy |
| `docs-guide/catalog/*.mdx` (6 catalogs) | mdx | production-rendered | Auto-generated catalogs (components, pages, scripts, templates, workflows, ui-templates). Imported by v2/ wrappers. Hand-edits will be overwritten |
| `docs-guide/config/*.json` (5 files) | json | production-tree-internal | Schema + manifest files for ai-companion + component-registry. Not rendered |
| `docs-guide/contributing/*.mdx` (6 files) | mdx | production-rendered | Imported by v2/resources/documentation-guide/contributing/ |
| `docs-guide/decisions/*.md` (3 files) | md | production-tree-internal | Decision logs (md = mintignored) |
| `docs-guide/docs-library/**` (7 mdx) | mdx | production-rendered | Pipeline concern pages |
| `docs-guide/features/**` (11 mdx) | mdx | production-rendered | Track A audit notes 12 files; gap-analysis, contracts-pipeline, visual-explainer-workflows flagged as stale or pilot |
| `docs-guide/frameworks/**` (13 mdx) | mdx | production-rendered | 13 frameworks. Per Track A: `component-governance.mdx` and `page-composition-framework.mdx` flagged for retirement (D-DG-08, status:draft) |
| `docs-guide/policies/**` (16 mdx) | mdx | production-rendered | Imported by v2 wrappers |
| `docs-guide/repo-ops/**` (6 files) | mixed | production-rendered (mdx) / internal (json) | Includes `.env.example` which is gitignored data |
| `docs-guide/standards/**` (5 mdx) | mdx | production-rendered | Per Track A: `voice-rules.mdx` already retired-pointer (Session 2 work) |
| `docs-guide/tooling/**` (10 files) | mixed | production-rendered (mdx) | `dev-tools.mdx` already retired-pointer. Templates (.md) mintignored. `content-brief-template.md` explicitly un-ignored |
| `ai-tools/GOVERNANCE.md` | md | production-tree-internal | Mintignored via `/ai-tools/**` |
| `ai-tools/README.md` | md | production-tree-internal | Mintignored |
| `ai-tools/claude-code.mdx`, `cursor.mdx`, `windsurf.mdx` | mdx | production-rendered | Explicit `!/ai-tools/*.mdx` un-ignore in .mintignore. Nav-registered ai-tools setup pages |
| `ai-tools/agent-packs/skills/**` (75 files) | various | production-tree-internal | Per-IDE skill adaptations |
| `ai-tools/ai-rules/**` (16 files) | md/mdc | mixed | `_retired/` subdir = archive-candidate (8 files). Active rules = production-tree-internal |
| `ai-tools/ai-skills/<35 dirs>/SKILL.md` | md | production-tree-internal | 35 skills (CLAUDE.md claims 34, catalog claims 9). All mintignored |
| `ai-tools/ai-skills/_workspace/**` | various | excluded (Agent C scope) | Per contract — excluded |
| `ai-tools/ai-skills/catalog/skill-catalog.json` | json | gold-candidate | Schema + manifest pattern worth preserving. **STALE — covers 9 of 35 skills** |
| `ai-tools/ai-skills/templates/**` | md | production-tree-internal | 32+ skill templates by ID-number scheme |
| `ai-tools/ai-skills/source-content/**` (6 files) | various | archive-candidate | `llms.txt` + nested v2/{cn,fr,es} dirs (language pages snapshot) + .github snapshot. Unclear purpose; not referenced by any skill |
| `ai-tools/ai-skills/x-archive/component-create/SKILL.md` | md | archive-candidate | Already prefixed `x-archive`. Replaced by `create-component/` |
| `ai-tools/registry/**` (62 files) | mixed | production-tree-internal | ai-tools-registry + workflow inventories |
| `.claude/CLAUDE.md` | md | production-tree-internal | Project coordinator file. Mintignored (md global) |
| `.claude/GOVERNANCE.md` | md | production-tree-internal | Governance marker |
| `.claude/settings.json`, `settings.local.json` | json | production-tree-internal | Hook + permissions config. .local is gitignored |
| `.claude/references/**` (26 .md files) | md | gold-candidate | Exemplar knowledge system. Matches CLAUDE.md "26 files" claim. 13 category folders confirmed |
| `.claude/skills/<12>/SKILL.md` | md | production-tree-internal | 6-line stub registrations pointing at full skills under `ai-tools/ai-skills/`. Active skill manifest |
| `.claude/projects/.../MEMORY.md` (2 files) | md | production-tree-internal | Session memory. Operational, persistent |
| `.claude/worktrees/` | empty dir | cut-candidate | Empty placeholder dir |
| `.claude/sessions.db`, `scheduled_tasks.lock` | binary/lock | production-tree-internal | Runtime state. Should be gitignored (verify) |
| `.githooks/<13 files>` | scripts/md | production-tree-internal | `core.hooksPath=.githooks` confirmed wired. `post-commit.disabled` = cut-candidate. `BYPASS.md` = active |
| `.githooks/post-commit.disabled` | disabled hook | cut-candidate | Matches `**/*.disabled` mintignore. No purpose if unused; delete if not referenced |
| `.vscode/<12 files>` | configs/snippets | production-tree-internal | Mintignored via `/.vscode/**` |
| `.vscode/livepeer-legacy.code-snippets.bak` | .bak | cut-candidate | Mintignored via `**/*.bak*`. Legacy backup file |
| `.augment/**` (4 files) | md | production-tree-internal | Thin IDE adapter pointing at `docs-guide/frameworks/ai-tools-governance.mdx`. .md files globally mintignored |
| `.codex/**` (3 files) | mixed | production-tree-internal | Codex adapter + task contract YAML |
| `.cursor/**` (3 files) | md/mdc | production-tree-internal | Cursor adapter (.mdc = Cursor-specific format) |
| `.windsurf/**` (2 files) | md | production-tree-internal | Windsurf adapter |

## Cut candidates (high-confidence)

- `docs-guide/composables/` — Empty directory, no contents, created 2026-05-18. Evidence: `ls -la` shows only `.` and `..`. No imports reference it.
- `.claude/worktrees/` — Empty directory. Evidence: `find` returns nothing.
- `.vscode/livepeer-legacy.code-snippets.bak` — Legacy backup file with `.bak` suffix. Already mintignored via `**/*.bak*`. No active referent.
- `.githooks/post-commit.disabled` — Disabled hook. Already mintignored via `**/*.disabled`. Either re-enable with a different name or delete.

## Archive candidates

- `docs-guide/notes.mdx` — "Ally's Notes" personal scratchpad. Not in docs.json. Not imported by any v2 wrapper. Move to `docs-guide/_workspace/` per workspace lifecycle policy.
- `docs-guide/canonical/collation-data/Mintlify/dep-files/**` (11 files) — Stale snapshot duplicates of files that live in `workspace/`, `snippets/`, `operations/`, `v2/`. No sync mechanism. Violates the Source-of-Truth Policy. Either delete (use the originals) or convert to a generated artifact with a sync workflow.
- `ai-tools/ai-skills/x-archive/component-create/SKILL.md` — Already prefixed `x-archive`. Superseded by `ai-tools/ai-skills/create-component/`. Delete after confirming no imports.
- `ai-tools/ai-rules/_retired/**` (8 files: `.AI-SAFEGUARDS.md`, `.augment-guidelines`, `AI-ACCOUNTABILITY-CHECKLIST.md`, `AI_GUIDELINES.md`, `REVIEW_TABLE.md`, `UNIVERSAL-AI-PROTOCOL.md`, `imported-copilot-instructions.md`, `tasks-directory-structure.mdc`) — Explicitly retired by folder naming. Either delete or move to a single `_workspace/archive/` location for the whole repo.
- `ai-tools/ai-skills/source-content/**` (6 files) — Includes `llms.txt` (root has its own; this is a duplicate or staging copy), `v2/{cn,fr,es}/` (legacy language-pages snapshot), `.github/augment-instructions.md`, `contribute/CONTRIBUTING`. Purpose unclear. Not referenced by any skill SKILL.md. Move to `_workspace/` until owner is identified.

## Gold candidates

- `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md` — The canonical Mintlify constraints reference. Cited from CLAUDE.md as required reading before editing MDX. Authoritative, well-structured, single source.
- `.claude/references/` — Entire 26-file, 13-category knowledge system. README is excellent (clear structure: exemplars + best-practice + patterns per category). Matches CLAUDE.md claim. Exemplar of how to organise reusable knowledge for AI agents.
- `ai-tools/ai-skills/catalog/skill-catalog.json` + `skill-catalog.schema.json` — The schema-driven skill registry pattern is gold. The current content is stale (9/35 skills), but the design is worth keeping and extending.
- `workspace/thread-outputs/production-cleanup/dispatch-briefs/agent-contract.md` — This very contract document is an exemplar of how to brief multi-agent parallel work. Lives outside my scope but worth flagging.
- The four `.augment/.codex/.cursor/.windsurf/GOVERNANCE.md` thin-adapter pattern — Each is 7-10 lines pointing at `docs-guide/frameworks/ai-tools-governance.mdx`. Perfect adapter pattern: no unique logic, single source of truth.

## Needs collaboration

- `docs-guide/notes.mdx` — Archive to `_workspace/` or delete? It looks like a personal scratchpad superseded by Track A `feature-map.mdx`.
- `docs-guide/overview.mdx` — Unclear relationship to `docs-guide/index.mdx` and `v2/resources/documentation-guide/documentation-overview.mdx`. Track A Session 2 noted documentation-overview retirement is blocked by render-gate; what is the canonical landing page?
- Two broken redirects in docs.json (`/docs-guide/source-of-truth-guide` and `/docs-guide/policies/governance-index` both → `/docs-guide/index`) — these redirect to a non-routed URL because docs-guide pages are imported, not routed. Should redirects target `/v2/resources/documentation-guide/index` instead, or be deleted?
- `ai-tools/ai-skills/catalog/skill-catalog.json` — Catalog covers 9 skills, filesystem has 35, CLAUDE.md table lists ~34. Is the catalog scope-limited intentionally (only pipeline-orchestratable skills), or stale? Needs an explicit scope statement.
- `ai-tools/ai-skills/source-content/**` — What is this directory? Looks like a staging area for skill input fixtures. No SKILL.md references it.
- `docs-guide/canonical/collation-data/Mintlify/dep-files/` — Were these snapshots intended to ship with the docs (offline reference) or are they accidental copies? Decision needed on delete vs sync-mechanism.
- `.cursor/rules/*.mdc` — Cursor-specific format. Are these auto-synced from anywhere or hand-maintained? If hand-maintained, they will drift from canonical governance.
- `docs-guide/repo-ops/config/.env.example` — Is this the canonical env example, or a duplicate of `/.env.example` at root? Verify before either is moved.

## Features discovered

- `.claude/references/` knowledge system — maintainers — mature — undocumented in v2/ (only referenced from CLAUDE.md)
- `lpd` CLI tool — contributors — mature — `v2/resources/documentation-guide/tooling/lpd-cli.mdx`
- `lpd-mdx-preview` VS Code extension — contributors — mature — `v2/resources/documentation-guide/tooling/lpd-mdx-preview.mdx`
- AI tools governance (4 IDE adapters: augment/codex/cursor/windsurf) — agent users — mature — `docs-guide/frameworks/ai-tools-governance.mdx`
- 35 AI skills under `/ai-tools/ai-skills/` — agents and maintainers — mature — partially documented in CLAUDE.md skills table; not in user-facing v2/ docs
- Skill catalog schema (machine-readable orchestration) — maintainers — emerging — `ai-tools/ai-skills/catalog/skill-catalog.json` (covers 9/35)
- 13 git hook concerns owned by `.githooks/pre-commit` — contributors — mature — `v2/resources/documentation-guide/contributing/git-hooks.mdx`
- 6 catalog generators (components/pages/scripts/templates/workflows/ui-templates) — maintainers — mature — generated outputs in `docs-guide/catalog/`
- `.allowlist` system — repo governance — mature — `docs-guide/policies/root-allowlist-governance.mdx`
- Skill registration via `.claude/skills/<name>/SKILL.md` 6-line pointer pattern — agent users — mature — undocumented as a pattern (would be worth a doc-skill page)

## Future upgrades discovered

- Sync `skill-catalog.json` with filesystem (auto-generate from SKILL.md frontmatter) — S — script
- Add explicit `.mintignore` entries for `.augment/`, `.codex/`, `.cursor/`, `.windsurf/`, `.claude/` (currently relying on global `**/*.md` rule) — XS — governance
- Resolve two broken redirects in docs.json (`/docs-guide/source-of-truth-guide` and `/docs-guide/policies/governance-index`) — XS — content
- Delete or sync `dep-files/` snapshots in `docs-guide/canonical/collation-data/Mintlify/` — S — governance
- Run a `find-empty-dirs` validator and quarantine policy (currently 2 confirmed empty dirs: `docs-guide/composables/`, `.claude/worktrees/`) — S — script
- Consolidate `ai-tools/ai-rules/_retired/` into a single repo-wide archive location — S — workflow
- Document the `.claude/skills/ → ai-tools/ai-skills/` 6-line pointer pattern in `docs-guide/frameworks/ai-tools-governance.mdx` — XS — content
- Track A items: D-DG-08 retire `component-governance.mdx` and `script-governance.mdx` duplicates (already locked, awaiting execution) — M — content
- Verify per-Track-A IA migration (`docs-guide/reference/` move) does not break the import paths in `v2/resources/documentation-guide/` wrappers — M — workflow

## Mintlify ignore gaps

Currently relying on the global `**/*.md` and `*.md` rules to hide content in `.augment/`, `.codex/`, `.cursor/`, `.windsurf/`, `.claude/`. This is fragile because:
- A future `.mdx` file added to any of these dirs would render in production.
- The .mintignore is not self-documenting about which dirs are excluded.

Add explicit entries:

- `/.claude/**` — Internal Claude config and references. Not for publication.
- `/.augment/**` — IDE adapter for Augment. Not for publication.
- `/.codex/**` — IDE adapter for Codex. Not for publication.
- `/.cursor/**` — IDE adapter for Cursor. Not for publication.
- `/.windsurf/**` — IDE adapter for Windsurf. Not for publication.
- `/docs-guide/canonical/collation-data/Mintlify/dep-files/**` — Stale snapshot files. Should never render even if .md rule changes.

## Cross-cutting observations

- **Two-headed docs-guide.** `docs-guide/*.mdx` is the canonical content; `v2/resources/documentation-guide/*.mdx` is the routed wrapper that does `import X from "/docs-guide/.../X.mdx"`. The wrapper layer is thin (15-20 lines of frontmatter + one import). This is well-designed but means: (a) any docs.json redirect to `/docs-guide/...` will 404 because those paths are not routed, (b) editing docs-guide content is editing live production, despite the path looking "internal".
- **35 SKILL.md files, only 9 in catalog.** The CLAUDE.md skills table shows ~34 skills. The catalog (`ai-tools/ai-skills/catalog/skill-catalog.json`) shows 9. The filesystem has 35. Three different counts, no single source of truth. Track A `feature-map.mdx` says 35.
- **Skill registration uses 3 surfaces:** filesystem (`ai-tools/ai-skills/<name>/SKILL.md`), `.claude/skills/<name>/SKILL.md` 6-line stub (12 skills registered), and `skill-catalog.json` (9 entries). Consolidation candidate.
- **`docs-guide/_workspace/` has 40 files** (excluded from this scan per contract; Agent C handles).
- **`ai-tools/ai-rules/.augment/.augment-guidelines`** is a Augment-format alias inside `ai-tools/`, parallel to root-level `.augment/`. Likely vestigial — root-level adapters supersede ai-tools-internal copies.
- **`.git` is a worktree pointer** (`gitdir: /Users/alisonhaire/Downloads/Livepeer-Backup/livepeer-docs-base/.git/worktrees/-tmp-docs-v2-dev-reattach`) — not a git directory. Worth flagging because some scripts assume `.git/` is a dir.
- **`docs-guide/repo-ops/config/.env.example`** is in scope but `.env*` typically belongs at repo root. Possible duplicate.
- **`.codex/locks-local/` and `.codex/pr-body.generated.md` are gitignored** (per `.gitignore`) — confirming `.codex/` is operational, not just adapter docs.
- **The four AI tool adapter dirs (`.augment/.codex/.cursor/.windsurf/`)** are intentional. Each has a `GOVERNANCE.md` declaring it a thin pointer. This is exemplary adapter pattern — DO keep all four.
- **`docs-guide/composables/`** empty dir was created 2026-05-18 — likely a placeholder for a feature that never landed. Quarantine candidate.
