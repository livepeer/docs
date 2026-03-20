# AI Adapter Files — Audit

> **Date**: 2026-03-20
> **Scope**: All AI coding agent rule/adapter files in the repo root and nested locations
> **Follow-on plan**: Phase 9 in `plan.md`

---

## Canonical paths reference (2025–26)

| Tool | Expected path(s) | Multiple files | Legacy path (still read by some versions) |
|---|---|---|---|
| Claude Code | `.claude/CLAUDE.md` or root `CLAUDE.md` | Yes — `.claude/rules/*.md` | Root `CLAUDE.md` |
| Cursor | `.cursor/rules/*.mdc` | Yes | `.cursorrules` (root) — deprecated |
| Windsurf | `.windsurf/rules/*.md` | Yes | `.windsurfrules` (root) — deprecated |
| GitHub Copilot | `.github/copilot-instructions.md` | Yes — `.github/instructions/*.instructions.md` (path-scoped, 2025) | — |
| OpenAI Codex | `AGENTS.md` at root (dir-walk aware) | Yes — hierarchy-based, also `AGENTS.override.md` | `.agents.md`, `TEAM_GUIDE.md` |
| Augment Code | `.augment/rules/*.md` (modern) | Yes | `.augment-guidelines` at root |
| Gemini CLI | `.gemini/GEMINI.md` or `.gemini/styleguide.md` | Yes | — |
| Cline | `.clinerules/*.md` | Yes | Falls back to `AGENTS.md` |
| Continue.dev | `.continue/rules/*.md` | Yes | `.continuerules` |
| Aider | User-configured (no canonical path) | — | — |

---

## Current state inventory

### Files found

| Path | Lines | Tool target | In canonical location? |
|---|---|---|---|
| `.claude/CLAUDE.md` | 7 | Claude Code | ✅ Yes |
| `.cursor/rules/repo-governance.mdc` | 11 | Cursor | ✅ Yes |
| `.windsurf/rules/repo-governance.md` | 9 | Windsurf | ✅ Yes |
| `.github/copilot-instructions.md` | 20 | Copilot | ✅ Yes |
| `AGENTS.md` (root) | ~110 | All tools (baseline) | ✅ Yes |
| `.github/AGENTS.md` | 92 | Codex (dir-walk extension) | ⚠️ Ambiguous — see below |
| `.cursorrules` (root) | 45 | Cursor (legacy) | ⚠️ Stale content |
| `.github/augment-instructions.md` | 203 | None (dead) | ❌ Not a recognized Augment path |
| `ai-tools/ai-rules/.augment-guidelines` | 17 | None (dead) | ❌ Wrong location for Augment |
| `ai-tools/ai-rules/.cursor/rules/no-deletions.mdc` | 47 | None (dead) | ❌ Wrong location for Cursor |
| `ASSISTANT.md` (root) | 96 | None (ghost) | ❌ Not a recognized path for any tool |
| `.codex/` (dir) | — | Codex (internal lock system) | ℹ️ Non-standard but operational |

### Directories NOT found (tools not configured)

| Path | Tool | In use? |
|---|---|---|
| `.gemini/` | Gemini CLI | Probably not — no setup |
| `.continue/` | Continue.dev | Probably not — no setup |
| `.clinerules/` | Cline | Probably not — falls back to AGENTS.md |
| `.augment/` (root) | Augment Code | **Missing** — Augment has no working rules |

---

## Finding details

### Finding 1 — Augment has zero working rules (HIGH)

**Files that exist but are wrong:**
- `ai-tools/ai-rules/.augment-guidelines` — 17 lines, correct format but at wrong path. Augment reads `.augment-guidelines` from the project **root**, not from `ai-tools/ai-rules/`.
- `.github/augment-instructions.md` — 203 lines of well-written Augment-specific rules. Augment does NOT read from `.github/`. This file is completely invisible to Augment.

**Impact:** Every Augment Code session on this repo runs with zero context rules.

**Fix:** Create `.augment/rules/` at root and populate from `.github/augment-instructions.md` content, split into scoped rule files per Augment conventions.

---

### Finding 2 — `no-deletions.mdc` invisible to Cursor (HIGH)

**File:** `ai-tools/ai-rules/.cursor/rules/no-deletions.mdc`

Cursor reads rules exclusively from `.cursor/rules/` at the **project root** (or nested `.cursor/rules/` dirs for sub-projects, which would be inside that sub-project directory). The file is buried at `ai-tools/ai-rules/.cursor/rules/` — a path Cursor never traverses as a rule source.

The no-deletions enforcement rule is completely invisible to Cursor.

**Fix:** `git mv ai-tools/ai-rules/.cursor/rules/no-deletions.mdc .cursor/rules/no-deletions.mdc`

---

### Finding 3 — `.cursorrules` has stale, contradictory content (MEDIUM)

**File:** `.cursorrules` (root, 45 lines)

Content: ThemeData prohibitions, CSS custom properties rules, Mintlify gotchas, component library refs, style guide read requirements.

This is a legacy standalone ruleset that predates the canonical adapter pattern. It does NOT point to `AGENTS.md`. It runs as an independent instruction baseline for any Cursor session that reads legacy files first.

**Contradiction:** All other adapters (`.cursor/rules/repo-governance.mdc`, `.windsurf/rules/repo-governance.md`, `.claude/CLAUDE.md`, `.github/copilot-instructions.md`) follow the same pattern: "Read `AGENTS.md` first. Keep this file tool-specific only." `.cursorrules` breaks this contract.

**Note on legacy reads:** Some Cursor versions read `.cursorrules` AND `.cursor/rules/*.mdc`. If both are read, Cursor gets the stale ruleset AND the canonical adapter, which may cause priority confusion.

**Fix:** Gut `.cursorrules` to a minimal adapter matching the canonical pattern, pointing to `AGENTS.md`.

---

### Finding 4 — `.github/AGENTS.md` naming is ambiguous (MEDIUM)

**File:** `.github/AGENTS.md` (92 lines)

Content: Codex-specific task isolation rules — HitL verification, checkpoint branches, lock lifecycle, pre-write announcements, task-contract.yaml integration.

**The ambiguity:** Named `AGENTS.md` inside `.github/`, which is also where Copilot expects instructions. A human or AI encountering this may confuse it with root `AGENTS.md` or think it's a Copilot artifact. The content is valid Codex-specific extension material (Codex's dir-walk picks it up in addition to root `AGENTS.md`), but the naming is non-obvious.

**Also:** References `../ai-tools/ai-rules/HUMAN-OVERRIDE-POLICY.md` — relative path is correct from `.github/`.

**Fix options:**
- Rename to `.github/CODEX.md` and add a comment in root `AGENTS.md` pointing to it
- Keep as-is but add a header clarifying it's a Codex-layer extension, not a duplicate

---

### Finding 5 — `ASSISTANT.md` is a ghost file (LOW)

**File:** `ASSISTANT.md` (root, 96 lines)

Content: "Livepeer Docs Assistant Contract" — mission statement, source-of-truth priority, scope limits, what NOT to do.

**The problem:** Not a canonical path for any known AI tool. Nothing reads this automatically. It references `tools/ai-rules/**` which is a stale path (that directory doesn't exist; content was in `ai-tools/ai-rules/`).

It appears to have been a custom assistant context file that predated the current governance structure. No tool is consuming it.

**Fix:** Either absorb still-valid content into `AGENTS.md` (the "source-of-truth priority" section is useful) and retire this file, OR document explicitly which tool it targets and how to wire it.

---

### Finding 6 — `.codex/` is non-standard but operational (INFO)

**Directory:** `.codex/` contains `README.md`, `task-contract.yaml`, and `locks-local/` (gitignored).

This is an internal operational directory for the Codex task isolation/locking system (`task-preflight.js`, `validate-locks.js`, etc.). It is NOT where Codex reads agent instructions from — Codex reads `AGENTS.md`. The `.codex/` dir is used by the lock/worktree scripts as a per-repo working area.

**Not a problem** — but worth documenting so future maintainers don't confuse it with a Codex instruction source.

---

## Summary scoring

| Item | Tool affected | Severity | Status |
|---|---|---|---|
| Augment has zero rules | Augment | 🔴 High | Not fixed |
| `no-deletions.mdc` invisible to Cursor | Cursor | 🔴 High | Not fixed |
| `.cursorrules` stale content | Cursor | 🟡 Medium | Not fixed |
| `.github/AGENTS.md` naming | Codex / readability | 🟡 Medium | Not fixed |
| `ASSISTANT.md` ghost file | None | 🟢 Low | Not fixed |
| `.codex/` non-standard | Info only | ℹ️ Info | N/A |
| Gemini/Continue/Cline not set up | Respective tools | ℹ️ Info | Tools likely not in active use |
