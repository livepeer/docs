# Agent A — Root + Generated artefacts + cross-cut top-level dirs

**Scanned:** 2026-05-25
**Branch:** `docs-v2-dev-draft` @ `947818410`
**Paths:** repo root (depth 1 files + directories), `v1/`, `api/`, `tools/`, `.augment/`, `.codex/`, `.cursor/`, `.windsurf/`, `.mintlify/`, `.cache/`
**Total files/dirs catalogued at root:** 42 (21 files + 21 directories). Cross-cut dir contents sampled, not enumerated row-by-row.

## Summary

- **production-rendered:** 13 (root config + assets + generators' outputs + the two doc trees `v1`, `v2` and their satellites)
- **production-tree-internal:** 13 (governance/adapter dirs that ship in repo but are `.mintignore`'d)
- **cut-candidates:** 12 (forbidden artefacts per `root-governance.json`, empty Finder/iCloud duplicate dirs, retired backup files, retired `api/worker/` subtree)
- **archive-candidates:** 1 (`.vscode/livepeer-legacy.code-snippets.bak`)
- **gold-candidates:** 2 (`.mintignore`, `operations/governance/config/root-governance.json` system)
- **needs-collab:** 4 (`jsconfig.json` drift; `v1/redirects.json` orphan; `.env` tracking; macOS Finder-duplicate `.DS_Store` sweep policy)

**Top 3 risks**

1. `api/worker/` (3 files including a `.backup`) still exists despite policy explicitly retiring it on 2026-03-21 — root-allowlist-governance.mdx line 140. Pure debris that contradicts published policy. **Severity: high (governance drift visible to anyone reading the policy).**
2. Six empty " 2"-suffixed Finder/iCloud-duplicate directories scattered through `tools/` and `.cache/` — silent zero-byte directories that will keep cluttering anything that recursively scans the repo. **Severity: medium (hygiene, not function).**
3. `.DS_Store` and `.cache/` exist at root and are both in `forbidden_root_artifacts` of `root-governance.json` — pre-commit gate should already be blocking these but they're committed. **Severity: medium (governance enforcement gap, not a content risk).**

## Inventory table

| Path | Type | Classification | Rationale | Linked observations |
|---|---|---|---|---|
| `.DS_Store` | file (8 KB) | cut-candidate | Listed in `forbidden_root_artifacts` of `operations/governance/config/root-governance.json`. Already in `.gitignore` line 2. | Tracked anyway — gate gap. |
| `.allowlist` | file (563 B) | production-tree-internal | Generated projection of root-governance.json. Consumed by pre-commit root-structure gate. | Lists `jsconfig.json` though that file is not in `root-governance.json` — drift. |
| `.augment/` | dir | production-tree-internal | Native Augment IDE adapter (rules/, GOVERNANCE.md). Governed per root-governance.json. | Thin pointer to canonical governance per its GOVERNANCE.md. Active. |
| `.cache/` | dir (empty) | cut-candidate | Listed in `forbidden_root_artifacts`. `.gitignore` line 105-106 ignores it. Only contains an empty `llm-usefulness/` + an empty `llm-usefulness 2/` Finder duplicate. | Should never have been committed. |
| `.cache/llm-usefulness 2/` | dir (empty) | cut-candidate | Empty Finder/iCloud duplicate. | Six similar duplicates repo-wide. |
| `.claude/` | dir | production-tree-internal | Native Claude Code adapter. Governed. `.mintignore`'d implicitly via root subsystem. | Active. |
| `.codex/` | dir | production-tree-internal | Codex task-contract + local lock root. Governed. Contains README + task-contract.yaml. | Active. |
| `.cursor/` | dir | production-tree-internal | Native Cursor adapter. Governed. | Active. |
| `.editorconfig` | file | production-tree-internal | Standard repo editor config, fixed-path root. | UK-spelling/whitespace conventions. |
| `.env` | file (3.2 KB, tracked) | needs-collab | `root-governance.json` says `.env` is `tracking_policy: untracked_only` (line 59). File presently exists with content — was the intent to ignore? `.gitignore` line 24 ignores `.env`. | DO NOT inspect contents. Confirm with Alison whether root `.env` is tracked or local-only. |
| `.git` | file (pointer, 113 B) | production-tree-internal | Git-worktree pointer to `/Users/alisonhaire/Downloads/Livepeer-Backup/...`. Normal git-worktree state. | Not a directory — this checkout is a worktree of another clone. |
| `.gitattributes` | file | production-tree-internal | Tracks Git LFS for `*.gif`, `*.mp4`, and two `tasks/plan/reports/*.json` paths that no longer exist. | LFS entries reference dead paths — minor drift. |
| `.githooks/` | dir | production-tree-internal | Repo hook root. Governed. `.mintignore`'d via `/.githooks/**`. | Active. |
| `.github/` | dir | production-tree-internal | GitHub workflows + Copilot adapter + Codex AGENTS.md extension. Contains `x-archive/docs.json.before-clean-devs1` and `docs.json.before-wire` — the only `docs.json.before-*` backups in the repo (not at root). | `.mintignore`'d. The two before-backups are archive-candidates inside `.github/x-archive/` — out of my scope but noted. |
| `.gitignore` | file | production-tree-internal | Root ignore policy. | Includes legacy `tasks/plan/*` exception paths that no longer exist — minor drift. |
| `.mintignore` | file | gold-candidate | Comprehensive Mintlify build exclusion file. Comments explain why each pattern exists (e.g. "bare workspace name for getFileList directory pruning"). 134 lines, well-organised, freshly maintained (today). | Exemplar of "governed config with rationale comments". |
| `.mintlify/` | dir | production-tree-internal | Mintlify platform runtime: `Assistant.md` + GOVERNANCE.md. Platform-managed. | Active. |
| `.prettierrc` | file | production-tree-internal | Formatter config, fixed-path root. | Active. |
| `.vscode/` | dir | production-tree-internal | Editor workspace settings. Governed. Contains `livepeer-legacy.code-snippets.bak` (34 KB). | `.mintignore`'d via `/.vscode/**`. |
| `.vscode/livepeer-legacy.code-snippets.bak` | file (34 KB, 2026-04-07) | archive-candidate | `.bak` backup of legacy snippet pack. `.mintignore` line 56 globs `**/*.bak*` but git tracks it. Likely safe to delete; move to `_workspace/archive/` if retention wanted. | Only `.bak` at depth ≤ 2 outside `v2/`. |
| `.windsurf/` | dir | production-tree-internal | Native Windsurf adapter. Governed. | Active. |
| `AGENTS.md` | file (8.4 KB) | production-rendered | Canonical agent baseline. Referenced by README + Codex. Public-facing entrypoint. | Active, 2026-05-04. |
| `LICENSE` | file | production-rendered | MIT, fixed-path root. | Required. |
| `Makefile` | file (87 B) | production-rendered | Single `all:` target that runs `docker buildx build ... -t livepeer/docs`. Convenience entrypoint. | Trivial but governed. |
| `README.md` | file (16 KB) | production-rendered | Repo entrypoint. Fresh (2026-05-23), reflects current architecture. | Gold-quality content but classified as production-rendered. |
| `SECURITY.md` | file (866 B) | production-rendered | GitHub security policy. Fixed-path. | Active. |
| `ai-tools/` | dir | production-tree-internal | Approved root subsystem per root-governance.json. `.mintignore`'d except for three setup-guide MDX files (claude-code, cursor, windsurf) that are nav-referenced. | Active. |
| `api/` | dir | production-rendered | OpenAPI specs root. `api/openapi.yaml` is referenced in `docs.json` as the Mintlify `openapi` source. The other yaml/json files (`ai-worker`, `cli-http`, `gateway.openapi`, `studio`, `openapi.json`) are served as static URLs (e.g. `https://docs.livepeer.org/api/ai-worker.yaml` per `v2/developers/build/ai-and-agents/ecosystem-mcp/overview.mdx`). | All six specs are stale (2026-03-18, ~10 weeks old per `data-integrations.mdx`). Pipeline gap is already filed in feature-map. |
| `api/GOVERNANCE.md` | file | production-tree-internal | Repo-structure marker for api/. Claims "Status: Clean (audited 2026-03-21)" but `api/worker/` directly contradicts this. | Drift between marker and reality. |
| `api/_workspace/` | dir | production-tree-internal | Standard `_workspace/` slot with three placeholder `.gitkeep` files. `.mintignore`'d. | Empty scratch slot, fine. |
| `api/worker/` | dir | cut-candidate | Contains `api/worker/api/{openapi.yaml.backup, gateway.openapi.yaml, openapi.json}`. Explicitly retired by `docs-guide/policies/root-allowlist-governance.mdx` rule 3: *"`api/worker/` was removed (2026-03-21) as it was an exact mirror of `api/` root files."* But it still exists. | **High-confidence cut.** Contradicts published policy. 3 files (~150 KB total). |
| `api/ai-worker.yaml` | file (41 KB) | production-rendered | AI Worker spec, served via `/api/ai-worker.yaml`. | Stale source, not stale file. |
| `api/cli-http.yaml` | file (12 KB) | production-rendered | go-livepeer CLI HTTP spec. | Stale source. |
| `api/gateway.openapi.yaml` | file (38 KB) | production-rendered | Gateway spec. | Stale source. |
| `api/openapi.json` | file (55 KB) | production-rendered | JSON mirror of openapi.yaml. | Stale source. |
| `api/openapi.yaml` | file (41 KB) | production-rendered | Primary public API spec — the one referenced in `docs.json` line `"openapi": "api/openapi.yaml"`. | Stale source (2026-03-18). |
| `api/studio.yaml` | file (311 KB) | production-rendered | Studio (legacy) API spec — by far the largest spec. | Stale source. |
| `docs-guide/` | dir | production-rendered + production-tree-internal mix | Out of my scope; agent B covers it. Referenced from `docs.json` (`docs-guide/index`, `docs-guide/source-of-truth-guide`, `docs-guide/policies/governance-index`). | — |
| `docs-index.json` | file (841 KB, regenerated 2026-05-25 06:34Z) | production-rendered | Generated by `operations/scripts/generators/content/catalogs/generate-docs-index.js`. Public artefact at `/docs-index.json`. Listed in `.mintignore` line 130 (so Mintlify doesn't process it as content, but it's still served as a static asset). Sources: `docs.json`, `v1/**`, `v2/**`, `snippets/**`. | Fresh. Not stale. |
| `docs.json` | file (246 KB, 2026-05-25) | production-rendered | Mintlify routing source of truth. Two language versions: `v2` (default) and `v1` (toggle). 777 v1 paths and 688 v2 paths. Single `openapi` reference (`api/openapi.yaml`). | Manual (human-edited). Heaviest config in repo. |
| `jsconfig.json` | file (229 B) | needs-collab | Present at root, listed in `.allowlist`, but NOT in `operations/governance/config/root-governance.json` `entries[]`. Defines `paths` alias `/snippets/* → snippets/*` and `include: ["snippets/**/*.jsx", "v2/**/*.mdx"]`, `exclude: ["node_modules", "tools", "v1"]`. Zero references in `docs-guide/`, `operations/`, or `tools/`. | **Governance drift.** Either add it to `root-governance.json` (regenerate `.allowlist`) or delete it. |
| `llms.txt` | file (61 KB, regenerated 2026-05-25 06:34Z) | production-rendered | Generated by `operations/scripts/generators/ai/llm/generate-llms-files.js`. Public artefact at `/llms.txt`. | Fresh. Not stale. |
| `operations/` | dir | production-tree-internal | Out of my scope; covered elsewhere. `.mintignore`'d via `/operations/**/*.js`, etc. | — |
| `robots.txt` | file (910 B) | production-rendered | Manually maintained crawler/AEO policy (custom override of Mintlify auto-generated). Allows GPTBot, ClaudeBot, PerplexityBot, etc. | Active. |
| `sitemap-ai.xml` | file (116 KB, regenerated 2026-05-25 06:34Z) | production-rendered | Generated by `operations/scripts/generators/content/seo/generate-ai-sitemap.js`. Public artefact at `/sitemap-ai.xml`. AI-enriched (per-URL section, wordCount, lastVerified, tags). | Fresh. Not stale. Brief's "stale 2026-04-15" claim is wrong — file was regenerated today. |
| `snippets/` | dir | production-rendered + internal mix | Out of my scope; covered elsewhere. | — |
| `style.css` | file (19 KB, 2026-04-09) | production-rendered | Mintlify global style entrypoint. Header comment notes it overrides the dev-server padding injection. | Active. |
| `tools/` | dir | production-tree-internal | Subsystem root for `lpd` CLI + libs + dev/config/scripts. `.mintignore`'d at file-extension level (`/tools/**/*.js`, `/tools/**/*.jsx`, `/tools/**/*.css`, `/tools/**/*.md`, `/tools/**/*.mdx`) — leaves nothing visible to Mintlify. 4795 references across docs-guide + workspace. | Active and heavily depended-on. |
| `tools/.lpdignore` | file | production-tree-internal | `lpd` CLI ignore file. | Active. |
| `tools/lpd` | executable (71 KB) | production-tree-internal | The `lpd` CLI binary script. Documented in README. | Active. |
| `tools/tools-catalog.mdx` | file (1.4 MB) | production-tree-internal | Generated catalog. `.mintignore`'d via `/tools/**/*.mdx`. Surprisingly large for an MDX (auto-generated). | Verify generator and purpose — agent covering `tools/` should investigate. |
| `tools/node_modules/` | dir (221 MB, 709 entries) | production-tree-internal | Dependencies for `lpd` CLI. `.gitignore`d via `**/node_modules/**` (line 11) — should NOT be tracked but is present on disk. | Local-only artefact. |
| `tools/editor-extensions/components 2/` | dir (empty) | cut-candidate | Finder/iCloud duplicate of `tools/editor-extensions/components/`. | Empty. |
| `tools/editor-extensions/markdown-list 2/` | dir (empty) | cut-candidate | Finder/iCloud duplicate. | Empty. |
| `tools/scripts/remediators 2/` | dir (empty) | cut-candidate | Finder/iCloud duplicate of `tools/scripts/remediators/`. | Empty. |
| `tools/scripts/validators 2/` | dir (empty) | cut-candidate | Finder/iCloud duplicate of `tools/scripts/validators/`. | Empty. |
| `v1/` | dir (350 files, 50 MB) | production-rendered | **Legacy v1 docs.** 777 references in `docs.json` under a second `version: "v1"` (non-default, toggleable on docs.livepeer.org). DO NOT cut. | Frozen but live. Confirmed via `docs.json` version block. |
| `v1/redirects.json` | file (42 KB, 2026-05-18) | needs-collab | Only referenced from `workspace/reports/repo-ops/SCRIPT_INVENTORY_FULL.json`. `docs.json` already has its own `redirects` block. Possibly orphaned legacy redirect map. | Confirm with Alison whether this is consumed at runtime or stale. |
| `v1/Dockerfile` | file (95 B) | needs-collab | Why is there a Dockerfile inside v1/? Only 95 bytes. | Likely vestigial. |
| `v2/` | dir | production-rendered | Out of my scope (other agents). | — |
| `workspace/` | dir | production-tree-internal | `.mintignore`'d via `/workspace/**` + bare `workspace`. Out of my scope. | — |

## Cut candidates (high-confidence)

- `api/worker/` (3 files) — explicitly retired by `docs-guide/policies/root-allowlist-governance.mdx` line 140 on 2026-03-21; one of the files is `openapi.yaml.backup`. Pure leftover. **Evidence:** policy declares this directory removed; presence directly contradicts policy.
- `.DS_Store` (root) — listed in `forbidden_root_artifacts` of `operations/governance/config/root-governance.json` line 64. Also one each in `snippets/`, `v2/`, and 13 subdirs (out of my scope to enumerate but flagging for the .DS_Store sweep).
- `.cache/` + `.cache/llm-usefulness/` + `.cache/llm-usefulness 2/` — three empty directories. `.cache` is in `forbidden_root_artifacts` (line 69). `.gitignore` already ignores it. Pure leftover from local caching that was never used.
- Six " 2" Finder/iCloud-duplicate empty directories (full paths above): `.cache/llm-usefulness 2/`, `api/worker/api 2/`, `tools/editor-extensions/components 2/`, `tools/editor-extensions/markdown-list 2/`, `tools/scripts/remediators 2/`, `tools/scripts/validators 2/`. All zero files. Safe to delete.
- `.gitattributes` LFS entries for `tasks/plan/reports/comprehensive-v2-pages-browser-audit.json` and `tasks/reports/comprehensive-v2-pages-browser-audit.json` — both reference a `tasks/` tree that no longer exists. Dead LFS rules.

## Archive candidates

- `.vscode/livepeer-legacy.code-snippets.bak` (34 KB, 2026-04-07) — backup of legacy snippet pack. Active replacement is `lp-components.code-snippets`. Move to `_workspace/archive/` or delete.

## Gold candidates

- `.mintignore` (134 lines, regenerated today) — exemplar of "config with inline rationale". Comments explain non-obvious patterns ("bare workspace name for getFileList directory pruning", "compatibility aliases for simpler ignore parsers", "tooling markdown docs not intended as docs-site pages"). Other config authors should emulate this commenting style.
- The full root-governance system: `operations/governance/config/root-governance.json` (single source of truth) → `.allowlist` (generated projection) → `docs-guide/repo-ops/config/root-governance-map.mdx` (human-readable map) → `workspace/reports/repo-ops/ROOT_GOVERNANCE_SYNC_LATEST.{json,md}` (drift reports) → validator at `operations/scripts/validators/governance/compliance/check-root-governance-sync.js`. This is the pattern other root-level governance (snippets, components, scripts) should mirror.

## Needs collaboration

- **`jsconfig.json`** — currently at root, in `.allowlist`, but missing from `root-governance.json` `entries[]`. Either (a) add an entry to `root-governance.json` with `class: docs_runtime`, `root_basis: tool_discovery`, regenerate the projection; or (b) delete the file and the `.allowlist` entry. Recommend (a) — it's a legitimate IDE/editor config and the `paths` alias actually helps MDX authoring against `/snippets/*` imports.
- **`.env`** — tracked file exists at root despite `root-governance.json` declaring `tracking_policy: untracked_only`. DO NOT inspect contents. Decide: should this be `.git rm --cached` and replaced with `.env.example`, or should the governance rule change?
- **`v1/redirects.json`** (42 KB) — referenced only in a generated script inventory, never imported. `docs.json` already has its own `redirects` block (which catches `/developers/core-concepts/core-api/*` → `/v1/developers/core-concepts/core-api/*`). Confirm whether this file is consumed or vestigial.
- **`v1/Dockerfile`** — 95-byte Dockerfile inside `v1/`. Inconsistent with the root `Makefile` building `livepeer/docs` Docker image. Likely vestigial.
- **macOS Finder duplicate `.DS_Store` and " 2" sweep** — what's the policy on a one-shot repo-wide sweep? Currently 13+ `.DS_Store` files and 6 " 2" empty directories. The pre-commit hook should prevent these but they're committed.

## Features discovered

- **v1 legacy docs toggle** — undocumented in user-facing docs but live: docs.livepeer.org has a `v1` version toggle (777 paths). Audience: legacy integrators still on the old SDKs and APIs. Maturity: frozen. Current docs path: `v1/**` (no user-facing landing page beyond the version switcher).
- **AI distribution surface** — three public AI artefacts at root URLs: `/llms.txt` (188 entries), `/sitemap-ai.xml` (181 URLs, AI-enriched with section/wordCount/lastVerified/tags), `/docs-index.json` (machine-readable inventory). Audience: AI agents and answer engines. Maturity: shipped. Documented in README + `docs-guide/features/ai-features.mdx`.
- **6 native agent adapters at root** — `.augment/`, `.claude/`, `.codex/`, `.cursor/`, `.windsurf/`, plus `.github/copilot-instructions.md`, all rooted in `AGENTS.md`. Audience: contributors using any of the 6 agents. Maturity: shipped (per D-DG-11 in decision registry). Documented in `AGENTS.md` and `docs-guide/policies/agent-governance-framework.mdx`.
- **API specs as static URLs** — six OpenAPI specs served at `https://docs.livepeer.org/api/*.yaml` without going through Mintlify nav. Audience: MCP/SDK builders. Maturity: shipped but **content stale 67+ days**. Pipeline gap already filed in `docs-guide/features/data-integrations.mdx`.

## Future upgrades discovered

- **Restore `.gitattributes` LFS coverage to live paths** — XS — infra. The two `tasks/plan/reports/...json` entries reference a deleted tree. Either remove the entries or repoint to current report locations under `workspace/reports/`.
- **API spec freshness pipeline** — M — script. Already filed in `data-integrations.mdx` as "P0 weakest link, no scheduled workflow exists". Specs are 67+ days stale; only 2 of 5 covered by `fetch-openapi-specs.sh`.
- **Pre-commit gate for forbidden root artefacts** — S — workflow. `.DS_Store`, `.cache/`, `.cursorrules`, `.playwright-cli/` are declared forbidden in `root-governance.json` but `.DS_Store` and `.cache/` are tracked. Either the gate is missing or it's not catching these.
- **Repo-wide `.DS_Store` + " 2"-duplicate sweep** — XS — script. One-shot cleaner + ongoing pre-commit guard.
- **Document `jsconfig.json` and add to governance** — XS — governance. Either formalise or delete.
- **Verify `v1/redirects.json` consumption** — XS — content. Confirm consumer and either wire it in or archive it.

## Mintlify ignore gaps

Most ignore gaps are already handled. One minor observation:

- **`tools/node_modules/`** is `.mintignore`'d via `**/node_modules/**` and the bare `node_modules` patterns, so Mintlify is fine. The 221 MB on disk is a separate concern (it's correctly `.gitignore`'d).
- **`.cache/`** is `.mintignore`'d via `**/.cache/**` (line 24). Fine. The cut-candidate classification is about root governance, not Mintlify.

No new `.mintignore` patterns needed for this scope.

## Cross-cutting observations

- **Generated artefact freshness:** the brief's claim that `sitemap-ai.xml` and `llms.txt` are stale at 2026-04-15 is incorrect — all three generated root artefacts (`docs-index.json`, `llms.txt`, `sitemap-ai.xml`) carry a 2026-05-25 06:34Z generation timestamp. The generator pipeline runs current.
- **Two competing tracking sources:** `.allowlist` (lists `jsconfig.json`) vs `root-governance.json` `entries[]` (does not). The drift validator at `operations/scripts/validators/governance/compliance/check-root-governance-sync.js` should be catching this — verify it is enabled.
- **`api/GOVERNANCE.md` claims "Status: Clean (audited 2026-03-21)"** while `api/worker/` (declared retired 2026-03-21) and `api/_workspace/` (created 2026-03-21) both exist. The marker is out of sync with the policy.
- **`.git` is a worktree pointer**, not a directory. The actual git data lives at `/Users/alisonhaire/Downloads/Livepeer-Backup/livepeer-docs-base/.git/worktrees/-tmp-docs-v2-dev-reattach`. Normal for git-worktree workflows but worth noting that this checkout is not self-contained.
- **`v1/` is live legacy, not a cut-candidate.** Despite the brief suggesting "Is this legacy v1 docs?" — yes, but it's the actively-published legacy version toggle on docs.livepeer.org. 777 references in `docs.json`. Touching `v1/` requires a docs-guide policy decision, not a cleanup.
- **`tools/` is `.mintignore`'d at file-extension level**, not directory level. Pattern is `/tools/**/*.js`, `/tools/**/*.jsx`, `/tools/**/*.css`, `/tools/**/*.md`, `/tools/**/*.mdx`. The only exception un-ignored back into Mintlify is `!/tools/scripts/snippets/README.mdx`. Effectively nothing in `tools/` ships, but the mechanism is fragile (a new file extension would leak).
- **`api/` is the only top-level dir served as static URLs without Mintlify routing.** This is documented but worth surfacing: Mintlify serves any file under `/api/*` as a static asset. The `openapi` config field only points at `openapi.yaml`; the other five specs are reachable only by direct URL.

## Incomplete

None. Scope as briefed has been covered.
