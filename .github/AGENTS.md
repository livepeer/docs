{/* Codex layer extension. This file adds Codex-specific task isolation rules
   (HitL verification, checkpoint branches, lock lifecycle, pre-write announcements)
   on top of the repo-wide baseline in root AGENTS.md. It is NOT a duplicate.
   OpenAI Codex reads both files via its directory-walk mechanism.
   This file is not for GitHub Copilot — see .github/copilot-instructions.md instead. */}

# 🤖 PROJECT AGENT RULES & SAFETY PROTOCOLS

## 🛠️ CRITICAL BOUNDARIES (READ FIRST)

- **ALWAYS** check for the existence of local Git hooks in `.git/hooks/` before
  initiating a write command.
- **DEFAULT:** Do not use `--no-verify` or `-n`.
- **EXCEPTION:** A human may explicitly authorize `--no-verify` in-thread; if so,
  follow [`ai-tools/ai-rules/HUMAN-OVERRIDE-POLICY.md`](../ai-tools/ai-rules/HUMAN-OVERRIDE-POLICY.md)
  (requires `ALLOW_HUMAN_NO_VERIFY=1` and commit trailers).
- **NEVER** use port `3000` for direct Mintlify preview runs or port `3333` via `lpd dev`; those ports are reserved for human-owned local servers.
- **NEVER** perform a `git reset --hard` or `git push --force` without an
  explicit, multi-turn plan confirmed by the user.
- **NEVER** use `git stash` for AI task isolation in this repository.
- **NEVER** switch branches inside an existing worktree. Treat the active worktree as pinned to its current branch for the entire task unless a human explicitly says otherwise.
- If branch-targeted work is required, use a separate dedicated worktree instead of repurposing the current one.
- **NEVER** create/remove worktrees or delete branches unless the human explicitly asks for that exact action.
- **NEVER** perform a `git reset --hard` or `git push --force` without a saved
  branch to revert to in case of failure.
- For any implementation task, apply the `codex-task-isolation-standard` skill
  first (task contract + scoped branch enforcement).
- Before MDX/JSX edits or Mint preview work, read `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`.
- **NEVER** change page structure, headings, section order, copy, layout, styling, route boundaries, or IA when the approved task is data-only, helper-only, or pipeline-only without explicit human permission for those presentation changes.
- If the approved task is “move data out of MDX”, “extract helpers”, “make the widget standalone in terms of data”, or any equivalent narrow refactor, preserve the existing user-facing page contract exactly unless the human explicitly approves a presentation change.

## 📦 GIT WORKFLOW & CHECKPOINTS

{/* STALENESS NOTE (2026-03-26): The automatic checkpoint branch system described
    below (checkpoint/YYYY-MM-DD_HHMMSS) is aspirational and not yet implemented.
    No git hooks in this repo create checkpoint branches automatically. The HitL
    verification, isolation, finish, and closure rules remain valid guidance.
    The checkpoint branch naming convention and auto-creation mechanism should be
    treated as a planned feature, not current behaviour. */}

This project enforces a "Human-in-the-Loop" (HitL) verification for all
destructive or history-altering actions.

- **Automatic Checkpoints:** Every `commit`, `push`, and `rebase` triggers a
  safety hook that creates a branch named `checkpoint/YYYY-MM-DD_HHMMSS`.
  *(Not yet implemented - aspirational. No hook currently creates checkpoint branches.)*
- **Isolation Rule:** Use branch-scoped WIP commits for checkpoints. Do not use
  stash as a checkpoint or isolation mechanism.
- **Finish Rule:** A Codex task is not complete until its task commit is present
  on `docs-v2-dev`. A codex branch/worktree commit is only a checkpoint until
  that integration happens.
- **Closure Rule:** Do not release locks or clean up codex task branches until
  the task commit is committed to `docs-v2-dev`, unless a human gives an
  explicit exceptional override with a very strong reason.
- **Pre-Write Announcement:** Before executing a write command, you MUST state:
  _"I am initiating [COMMAND]. A safety checkpoint will be created. Please
  switch to your terminal to type 'yes' when prompted."_
- **Recovery:** If a command fails, the latest pre-failure state is stored in
  the most recent `checkpoint/` branch.
  *(Note: checkpoint branches are not auto-created - see staleness note above.)*

## 📁 REPOSITORY STRUCTURE RULES

**⚠️ MANDATORY: Read Structure Rules Before Creating/Moving Files**

**BEFORE creating, moving, or organizing files, you MUST read:**

- `workspace/plan/migration-plan.md` - Detailed structure documentation (Section 4)

### Critical Structure Rules

1. **Root Directory** - Only essential files allowed:
   - ✅ Allowed: `docs.json`, `package.json`, `README.md`, `LICENSE`, `Dockerfile`, `Makefile`, `style.css`, `.gitignore`, `.mintignore`, `.allowlist`
   - ❌ Forbidden: Scripts, config files, documentation files, temporary files, OpenAPI specs
   - **CRITICAL:** Mintlify only allows ONE CSS file (`style.css`) at root - NO `styles/` folder

2. **File Locations** - Files must be in correct directories:
   - Scripts → `operations/scripts/` (organized by purpose: audit/, generate/, test/, verify/, fetch/)
   - Config files → `tools/config/` **EXCEPT**:
     - `.prettierrc.yaml` → **ROOT** (Prettier convention)
   - `.speakeasy/` → `tools/config/.speakeasy/` (Speakeasy API docs tool config)
   - AI guidelines → `tools/ai-rules/`
   - Public assets → `snippets/assets/` (favicon.png, logo/ in snippets/assets/ - referenced in docs.json)
   - OpenAPI specs → `api/` (consolidated)
   - Contribution docs → `docs-guide/contributing/`
   - Documentation → `docs/v1/` (FROZEN) or `docs/v2/pages/` (active)

3. **Snippets Directory** - MUST follow Mintlify conventions:
   - ✅ Required: `snippets/pages/` (for MDX-in-MDX pattern)
   - ✅ Allowed: `components/`, `data/`, `assets/`, `automations/`, `generated/`
   - ❌ Forbidden: Scripts (→ `operations/scripts/`), wiki/docs (→ `tools/wiki/`), styles (→ root `style.css` only)
   - ✅ All imports must be absolute paths from root: `/snippets/components/...`
   - ❌ Components cannot import other components

4. **Enforcement** - Structure is enforced:
   - `.allowlist` file lists allowed root files/directories
   - Pre-commit hook blocks unauthorized root files/directories
   - Always check structure rules before creating new files

## 🚨 MINTLIFY MDX DEBUG ORDER

Canonical reference: `docs-guide/canonical/collation-data/Mintlify/mintlify-repo-best-practices.md`

For broken Mintlify pages, Codex must debug in this order:

1. **Working repo pattern first**
   - Compare against a working page outside the broken surface before designing a new page/data boundary.
   - Do not use another broken contracts page as the architectural reference.
   - Prefer established `v2/**` and `snippets/**` patterns already rendering correctly.

2. **Canonical data source first**
   - If canonical page data already exists, pages must consume that source directly.
   - Do not introduce route-local helper data files unless a working repo pattern proves they are necessary.
   - Do not treat stale unit tests or broken helper layers as target-state truth.

3. **Static errors before runtime tools**
   - Check IDE Problems and `mint dev` output before running browser automation, Playwright, or long validators.
   - Missing imports, undefined symbols, MDX parse errors, and invalid top-level page expressions must be fixed first.
   - If Mint dev already shows the failure, do not run slower tools just to rediscover the same failure.

4. **Fast confirmation before heavy validation**
   - Use the fastest available confirmation path first: IDE errors, Mint dev errors, one quick console/error read, one quick route render check.
   - Browser automation is for final confirmation or targeted console inspection, not primary diagnosis of broken MDX imports or parse failures.

5. **Two-failure redesign rule**
   - After two failed fixes in the same direction, stop and redesign.
   - Redesign must be based on working repo patterns and current Mintlify constraints, not another variation of the same broken approach.

6. **Contracts-specific recovery rule**
   - For contracts pages, restore render correctness first with the correct canonical data shape and correct page styling.
   - Do not widen into workflow, browser harness, or architecture cleanup while the page still has obvious Mint dev or IDE failures in front of you.

7. **User-feedback and execution discipline**
   - Direct user corrections about scope, tools, repo patterns, or constraints must be treated as immediate operating constraints, not as suggestions to revisit later.
   - If the user points to a visible failure in Mint dev, IDE Problems, terminal output, or console logs, inspect that exact failure before choosing any other tool.
   - Do not keep defending or iterating on a broken design once repo evidence and user feedback have invalidated it.
   - If long-running checks are needed, push them to agents or background work only after the fastest local failure signals have been cleared.
   - Persist major failures, wasted loops, and changed operating rules to shared workspace artifacts as they happen, not only after being asked.
   - When a human authorises a narrow technical refactor, do not silently widen it into UX, copy, layout, route, or IA changes. Stop and get explicit permission before touching any user-facing presentation contract.

## 🧪 VALIDATION COMMANDS

Before asking for a commit, you should ideally run these to ensure code quality:

```bash
# Verify build
mint dev --port 3001
```

# Run local test suite

Make a test for mintlify in the v2/tests file. DO NOT EVER run a script without
testing it on a local branch first.
