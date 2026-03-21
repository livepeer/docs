---
title: Repo Folder Restructure Process
status: active
owner: REPO-STRUCTURE-GOV
created: 2026-03-21
---

# Repo Folder Restructure Process

General process for any repo folder restructuring work — renames, moves, consolidations, new section creation, deprecation.

## Work Directories

Each top-level folder being restructured has a dedicated work directory under:

```
workspace/plan/active/REPO-STRUCTURE-GOV/<folder-name>/
```

This directory is the home for that folder's `audit.md`, `plan.md`, and any other artefacts produced during its restructure process (research notes, cleanup matrices, decision records). When starting work on a folder, create its work directory here first.

---

## Phases

### Phase -1 — Research

Before auditing the filesystem, understand the existing documentation and intent.

1. Read every policy, governance doc, and guide that covers the area in scope — from the actual files, not from memory or assumptions
2. Read any existing subplans, audit reports, or research notes in the folder's work directory
3. Identify what decisions are already locked, what boundaries are already defined, and what questions are already answered
4. Note what is stale, missing, or contradicted by current reality — these become audit targets, not research findings
5. Only after reading: form the questions that the audit needs to answer

**Output:** A clear picture of what is already decided vs. what is genuinely unknown. Do not surface questions whose answers are already documented.

**Rule:** Never ask a question that can be answered by reading an existing file.

---

### Phase 0 — Audit

Before anything moves, understand what's there.

1. List every file and directory in scope — not from memory, from the actual filesystem
2. For each item, determine:
   - Is it referenced in `docs.json`?
   - Is it imported or referenced from any other file?
   - Is it a generated artifact (do not touch without updating its generator)?
   - Does it have active content or is it empty/stub/stale?
3. Identify violations against the current policy (if one exists) and loose files that don't fit any lane
4. Identify special cases that need a decision before any move can happen
5. Write findings as a report — not a plan, not a recommendation yet

**Output:** Audit report with current state, violations list, special cases flagged.

---

### Phase 0.5 — PRD

Before defining structure, define purpose. Write a `prd.md` in the folder's work directory covering:

1. **Aims** — what this folder exists to accomplish; what problem it solves
2. **Audience** — who uses it and in what context (contributors, AI agents, maintainers, etc.)
3. **Needs by audience** — what each audience needs to find, understand, or do using this folder
4. **Success criteria** — what "well-structured" looks like for this folder; how you'd know it's working
5. **Constraints** — what it must not be (nav content, generated-only, etc.)

**Output:** `prd.md` in `workspace/plan/active/REPO-STRUCTURE-GOV/<folder-name>/`. The folder structure in subsequent phases is derived from this, not invented independently.

**Rule:** The PRD drives the structure. Structure is not defined before the PRD exists.

---

### Phase 1 — Policy First

Before anything moves, understand what's there.

1. List every file and directory in scope — not from memory, from the actual filesystem
2. For each item, determine:
   - Is it referenced in `docs.json`?
   - Is it imported or referenced from any other file?
   - Is it a generated artifact (do not touch without updating its generator)?
   - Does it have active content or is it empty/stub/stale?
3. Identify violations against the current policy (if one exists) and loose files that don't fit any lane
4. Identify special cases that need a decision before any move can happen
5. Write findings as a report — not a plan, not a recommendation yet

**Output:** Audit report with current state, violations list, special cases flagged.

---

### Phase 1 — Policy First

If no policy exists for the area being restructured, write it before touching any files.

1. Define the canonical structure — what lanes exist, what belongs where, what is forbidden
2. Define naming conventions
3. Define approved subdirectory names (especially for `_workspace/`)
4. Define enforcement mechanisms (`.mintignore`, pre-commit, CI) — but do not implement them yet
5. Get human review and sign-off on the policy

**Output:** Policy doc in `docs-guide/policies/`. If a policy already exists, update it to cover the gap before proceeding.

**Rule:** No files move until there is a policy that says where they should go.

---

### Phase 2 — Recommendations

Present recommendations to the human. Do not execute.

1. For each violation or loose file, state: current location → recommended location, and why
2. Flag any item where the right answer is not obvious — these are gates, not tasks
3. Flag any item that requires a deletion (these always need explicit approval)
4. Separate: safe moves (renames within `_workspace/`) vs. structural moves (changing nav, moving routed files) vs. deletions
5. Estimate blast radius — how many files, which workflows, which nav entries are affected

**Output:** Recommendations list, organized by: safe / needs-approval / gate.

**Rule:** Every gate requires a human decision before the work behind it starts. No assumptions.

---

### Phase 3 — Implement (approved items only)

Execute only what was explicitly approved.

**Order of operations:**

1. Update `docs.json` first if nav paths are changing — do this before moving files so the redirect chain is never broken
2. Move files using `git mv` — not filesystem `mv` followed by `git add/rm`. `git mv` preserves rename history and does not trigger the deletion guard
3. For deletions: verify zero refs first (grep for the filename and all import/link patterns), then commit with `--trailer "allow-deletions=true"`
4. Update `.mintignore` to cover any new non-publishable paths
5. Update `.allowlist` if new root-level entries are needed — requires `--trailer "allowlist-edit=true"`
6. Update any scripts, generators, or validators that reference the old paths
7. Regenerate affected catalogs or indexes

**Rules:**
- Never delete without zero-ref verification
- Never skip the pre-commit hook (`SKIP_ALL=1` is emergency-only)
- One logical change per commit where possible — easier to revert
- `git mv` for renames; `--trailer "allow-deletions=true"` for deletions

---

### Phase 4 — Verification

Confirm the result matches intent.

1. Run the relevant validators (test suite, catalog check, link audit if affected)
2. Confirm `docs.json` nav still resolves all routed pages
3. Grep for any remaining references to old paths — update them
4. Confirm `.mintignore` excludes all non-publishable paths (spot check: `mintlify dev` should not route any `_workspace/` or draft paths)
5. Update the plan: mark tasks complete, note any open items discovered during execution

**Output:** Plan tasks marked done. Verification note in plan with date.

---

### Phase 5 — Enforcement

Wire enforcement so the structure stays clean.

1. Pre-commit gate — only for hard safety violations (deletion guard, allowlist, frozen dirs). Do not add soft checks.
2. CI check — for freshness, catalog staleness, loose-file audits
3. Policy doc — update with "Enforcement" table linking to the gate/CI workflow

**Rule:** Enforcement is added after the structure is clean, not during the move. Adding a gate while files are still in the wrong place creates false positives.

---

## Checkins

Two mandatory checkins bracket every task or phase. Neither is optional.

### Checkin 1 — Before execution

Before writing any file, running any command, or making any change: verify the task scope inline in chat.

State:
- What you are about to do (specific files, commands, or changes)
- What you will NOT do (scope boundaries)
- Any flags or risks noticed

Wait for explicit confirmation before proceeding. "Go ahead", "do it", "yes" = confirmed. Silence or a question = not confirmed.

### Checkin 2 — After completion

After completing a task or phase: post a completion report inline in chat covering:

1. **Completed** — what was done, with file paths
2. **Flags** — anything noticed during execution that wasn't in the original scope (stale refs, unexpected state, potential issues)
3. **Plan checklist** — full task list with status for each item:
   - `✅ complete` — done
   - `▶ current` — just completed in this session
   - `⬜ not started` — pending
4. **Recommended next** — the single most logical next task and why

---

## Decision Gates

These are mandatory stops — work does not proceed past a gate without explicit human approval.

| Gate type | When it applies |
|-----------|----------------|
| **Audit gate** | Before any move: findings must be reviewed, recommendations must be confirmed |
| **Deletion gate** | Every file deletion requires zero-ref verification + explicit approval |
| **Nav change gate** | Any change to `docs.json` routing requires review — broken nav is visible to users |
| **Policy gate** | If no policy covers the area, write one first and get it approved |
| **Special case gate** | Any item that doesn't cleanly fit a recommendation — flag, don't guess |
| **Enforcement gate** | Pre-commit changes require review — a bad hook blocks everyone's commits |

---

## What Not To Do

- **Do not move files before the policy says where they go.** Moving to a temporary location creates two rounds of work.
- **Do not batch audit + implement in the same pass.** Audit first, get sign-off, then implement.
- **Do not assume "we want to do X" is a go-ahead.** It is a description of intent. Confirm explicitly before executing.
- **Do not add non-hard-gate checks to the pre-commit hook.** The hook is hard-gates-only. Slow or style checks go in CI.
- **Do not delete stubs and empties without checking they are not imported.** Even 0-byte files can be imported as MDX snippets.
- **Do not update paths in scripts/generators without re-running them.** A path change in a script that still generates output is a silent breakage.

---

## Useful Commands

```bash
# Check staged renames vs deletions before committing
git diff --cached --name-status | grep "^R"   # renames (safe)
git diff --cached --name-status | grep "^D"   # deletions (need override)

# Zero-ref check before deleting a file
grep -r "filename" . --include="*.mdx" --include="*.json" --include="*.js" -l

# Rename a directory (preserves history, does not trigger deletion guard)
git mv old-dir/ new-dir/

# Commit a deletion with human override
git commit --trailer "allow-deletions=true" -m "chore: delete zero-ref file X"

# Commit an .allowlist edit
git commit --trailer "allowlist-edit=true" -m "chore: add new-dir to allowlist"
```

---

## Related

- `docs-guide/policies/v2-folder-governance.mdx` — v2/ section lane contract
- `docs-guide/policies/docs-guide-structure-policy.mdx` — docs-guide/ canonical structure
- `docs-guide/policies/root-allowlist-governance.mdx` — root-level governance
- `docs-guide/policies/workspace-lifecycle-policy.mdx` — _workspace/ TTL rules
- `docs-guide/repoOps/maps/enforcement-map.mdx` — all enforcement points
- `.githooks/pre-commit` — hard gates implementation
