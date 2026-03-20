# Repo Root & Governance Structure: Research Report

*Based on direct file reads, current `.allowlist`, `AGENTS.md`, `root-allowlist-governance.mdx`, all active plan files, and real `ls` output. March 2026.*

---

## 1. Current Root Inventory (verified)

**Allowlisted and correct:**
```
.allowlist  .claude  .codex  .cursor  .editorconfig  .gitattributes
.githooks  .github  .gitignore  .lpdignore  .mintignore  .prettierrc
.vscode  .windsurf  AGENTS.md  Dockerfile  LICENSE  Makefile  README.md
SECURITY.md  ai-tools  api  contribute  docs-guide  docs-index.json
docs.json  llms.txt  lpd  sitemap-ai.xml  snippets  style.css  tasks
tests  tools  v1  v2
```

**Exists but NOT allowlisted (unresolved):**
```
ASSISTANT.md     docs/     docs.json.bak
```

**Platform clutter (should never be allowlisted):**
```
.cache/     .DS_Store     mint-debug.log
```

**In governance doc but not in current ls (stale doc):**
```
llms-full.txt     (doc says it exists — ls shows it doesn't — doc is out of date)
```

---

## 2. The `docs/` Mystery — Critical Finding

`docs/` is NOT in the allowlist and the governance doc flags it as "requires separate cleanup decision." Contents:

```
docs/about  docs/community  docs/developers  docs/gateways  docs/home
docs/internal  docs/orchestrators_v1  docs/resources  docs/solutions
```

**This is a shadow duplicate of the `v2/` content tree.** Same section names, same hierarchy. This is either:
- A Mintlify build output directory that got committed by accident
- An old migration staging directory that was never cleaned up
- A legacy copy from a previous repo structure

**Risk: HIGH.** Do not touch without investigation. If Mintlify is treating this as a second content root, removing it could break routing. If it's stale, it's potentially serving confusing duplicate pages. This needs a deliberate decision before any other root restructure.

---

## 3. Active Plans — What's In-Flight Right Now

| Plan | Status | Root Impact |
|---|---|---|
| **SCRIPT-GOVERNANCE** | Active, ~60% done — on `docs-v2-dev-scripts` branch | Scripts restructured into `tools/scripts/<type>/<concern>/`. `tools/` folder restructure explicitly deferred until this completes. |
| **AI-TOOLS-GOVERNANCE** | Active, created 2026-03-20 (today) — fixing broken paths across 42 templates + 40 agent packs | Directly touches `ai-tools/`. Moving `ai-tools/` right now would break this repair mid-flight. |
| **COMPONENT-GOVERNANCE** | Active — restructuring registry + documentation | Touches `snippets/components/`, `docs-guide/`, registry files. Not directly root-level. |
| **CONTENT-WRITING** | Active — pilot on `v2/gateways/guides` | No root impact. |
| **REPO-STRUCTURE-GOV** | Draft only — no approved decisions yet | This report is the next step. |

---

## 4. Your Draft — Proposal-by-Proposal Assessment

### `tasks/` → `/operations`

**Recommendation: Defer. Do last.**

Blast radius is enormous and verified:
- Every active plan file is at `tasks/plan/active/...` — they'd all be dead links
- `AGENTS.md` required context list references `tasks/` implicitly through governance docs
- SCRIPT-GOVERNANCE plan has tasks writing reports to `tasks/reports/...` — 78 report files
- Pre-commit hook, CI scripts, `lpd` CLI, and multiple validators reference `tasks/`
- All generated catalog files reference `tasks/` output paths

If you rename, it must be: (a) atomic, (b) after all active plans are complete, (c) with a full find-and-replace across the entire repo in a single reviewed commit. Until then, it adds friction without benefit.

### `/scripts` as a new root dir

**Recommendation: Don't add.**

`tools/scripts/` was just completely restructured into a clean `<type>/<concern>/<niche>` taxonomy by SCRIPT-GOVERNANCE. A new `/scripts` root would either duplicate that work or fragment it. The SCRIPT-GOVERNANCE plan explicitly states "full `/tools` folder restructure happens AFTER all script work is complete" — that's the right sequencing.

### `/assets` as a new root dir

**Recommendation: Don't add.**

Assets currently live in `snippets/assets/`. Hundreds of MDX pages import using `/snippets/assets/...`. Moving assets to a new root `/assets/` would be a breaking change across the entire content corpus. `snippets/assets/` should be formalized as the canonical assets location instead.

### `ai-tools/` → `tools/`

**Recommendation: Do — but not yet. After AI-TOOLS-GOVERNANCE completes.**

The move makes conceptual sense. SCRIPT-GOVERNANCE already noted it as a future item. However: AI-TOOLS-GOVERNANCE is active today fixing broken paths inside `ai-tools/`. Moving the directory mid-repair would invalidate that plan's work. After that plan completes, `tools/ai-tools/` is the right home. Dependencies to update: `.allowlist`, `AGENTS.md`, `.claude/CLAUDE.md`, `.cursor/rules/`, `.windsurf/rules/`, `contribute/AGENT-INSTRUCTIONS.md`.

### `contribute/` → `docs-guide/`

**Recommendation: Do. This is safe and relatively low-blast-radius.**

`contribute/` contains only `CONTRIBUTING/` (subdirectory) and `CONTRIBUTING.mdx`. Dependencies to update: `AGENTS.md` required context (#3 references `contribute/**`), `README.md`, any script that references `contribute/`. The pre-commit hook references `contribute/CONTRIBUTING/GIT-HOOKS.md` — that path update is required.

### `api/` → ???

**Recommendation: Keep at root. Investigate first.**

The governance doc says: "Keep at root under current contracts." `api/` contains: `ai-worker.yaml`, `cli-http.yaml`, `gateway.openapi.yaml`, `openapi.json`, `openapi.yaml`, `studio.yaml`, `worker/`. These are OpenAPI specs — Mintlify may be treating `api/` as a content directory (like `v2/`) for API reference page generation. Moving it without checking `docs.json` routing is a live-site risk.

### `tests/` → scripts or tools

**Recommendation: Defer. Keep at root until SCRIPT-GOVERNANCE + tools restructure completes.**

`tests/` has its own `package.json`, `node_modules`, and is the test runner for the whole repo. `lpd test --staged` invokes it. Pre-commit uses it. CI uses it.

---

## 5. Root Files — Categorization (verified)

| Category | Entries | Decision |
|---|---|---|
| **Mintlify platform** (must stay) | `docs.json`, `style.css`, `.mintignore` | Keep |
| **Mintlify content roots** (must stay) | `snippets/`, `v1/`, `v2/` | Keep |
| **Repo governance** (must stay) | `.allowlist`, `LICENSE`, `README.md`, `AGENTS.md`, `SECURITY.md` | Keep |
| **Git** (must stay) | `.gitignore`, `.gitattributes`, `.github/`, `.githooks/` | Keep |
| **AI adapters** (must stay) | `.claude/`, `.codex/`, `.cursor/`, `.windsurf/` | Keep — platform-discovered paths |
| **IDE** (must stay) | `.vscode/`, `.editorconfig` | Keep |
| **Helpers** (must stay) | `.prettierrc`, `.lpdignore` | Keep |
| **Workflow entrypoints** | `lpd`, `Makefile`, `Dockerfile` | Keep |
| **AI content** | `sitemap-ai.xml`, `llms.txt` | Conditional — keep only if public root URL required |
| **Move candidates** | `ai-tools/`, `contribute/`, `docs-index.json`, `ASSISTANT.md` | See above |
| **Deferred** | `api/`, `tests/`, `tasks/` | Keep for now |
| **Cleanup** | `docs.json.bak`, `docs/` (investigate), `.cache/`, `.DS_Store`, `mint-debug.log` | Don't allowlist. Clean or gitignore. |
| **Retire** | `ASSISTANT.md`, `.cursorrules` | Superseded. Not in `.allowlist`. |

---

## 6. Risk Flags

**CRITICAL — investigate before any restructure:**
- `docs/` is a full shadow of the `v2/` content tree, not in allowlist, origin unknown.

**HIGH — don't move while in-flight:**
- `ai-tools/` has active governance repair running today (AI-TOOLS-GOVERNANCE).
- `tools/scripts/` restructure is 60% complete on a separate branch/worktree.

**MEDIUM — dependency maps needed before moving:**
- `contribute/` — pre-commit hook references `contribute/CONTRIBUTING/GIT-HOOKS.md` directly.
- `docs-index.json` — generated by `tools/scripts/generators/content/catalogs/generate-docs-index.js`.
- `api/` — Mintlify routing in `docs.json` may depend on `api/` as a content root.

**LOW — known stale state, safe to clean:**
- `ASSISTANT.md` — references stale path `tools/ai-rules/**` (now `ai-tools/ai-rules/`). Not in allowlist.
- `docs.json.bak` — backup artifact, not allowlisted.
- `llms-full.txt` — listed in governance doc's root inventory but doesn't exist. Doc is stale.

---

## 7. Final Recommended Sequence

**Do now (no-risk cleanup):**
1. Delete `docs.json.bak`
2. Retire `ASSISTANT.md` — move to `docs-guide/` or delete (superseded by `AGENTS.md`)
3. Add `.cache/` and `mint-debug.log` to `.gitignore` if not already there
4. Update `root-allowlist-governance.mdx` to remove stale `llms-full.txt` entry

**Investigate urgently:**
5. Determine what `docs/` is. Check `git log --oneline -- docs/`. If committed build artifact or dead copy, delete it.

**After AI-TOOLS-GOVERNANCE completes:**
6. Move `ai-tools/` → `tools/ai-tools/`. Update `.allowlist`, `AGENTS.md`, adapter files.

**After SCRIPT-GOVERNANCE completes + merges:**
7. Move `contribute/` → `docs-guide/contributing/`. Update `AGENTS.md`, pre-commit, README.
8. Move `docs-index.json` → `tools/data/` or `docs-guide/catalog/`. Update generator.
9. Evaluate `tests/` → `tools/tests/` as part of deferred `/tools` restructure.
10. Decide `api/` — check `docs.json` API reference routing first.

**Last, after all active plans complete:**
11. Rename `tasks/` → `operations/` if still desired — single atomic commit with full repo-wide path update.

---

## 8. Structural Principles to Codify

- **`snippets/assets/` is the canonical assets root.** No parallel `/assets/` root.
- **Scripts stay inside `tools/scripts/`.** `<type>/<concern>/<niche>` taxonomy is the model.
- **Component categories** — align with `docs-guide/component-registry.json` schema once COMPONENT-GOVERNANCE settles.
- **AI content at root** (`llms.txt`, `sitemap-ai.xml`) — keep only if platform discovery requires root URL.
