# AI Best Practices — Livepeer Docs

Read `AGENTS.md` first for policy rules. This file covers the craft of working well.

---

## Scope Discipline

Do the minimum that satisfies the request. Stop there.

- A bug fix does not need surrounding code cleaned up.
- A content edit does not need frontmatter reformatted unless it was broken.
- A new file does not need a refactor of nearby files.
- Never add comments, types, or documentation to code you did not touch.

If you notice a related problem while working, flag it — don't fix it unless asked.

---

## When to Ask vs Proceed

**Proceed without asking:**
- The task is clear and scoped to a specific file or set of files.
- The change is reversible (edit, not delete; local, not push).
- You have enough context to be confident about the right approach.

**Ask before proceeding:**
- The request could mean two different things and the difference matters.
- The task would affect a high-risk file (`docs.json`, `.allowlist`, any generated catalog).
- You are about to make more than ~10 file changes and the user has not pre-approved the scope.
- You discover unexpected state — unfamiliar files, stale data, conflicting instructions.

Ask one question at a time. Make it specific. Do not ask what you can look up.

---

## How to Handle Ambiguity

If instructions conflict or the request is unclear:

1. Name the ambiguity explicitly — cite both readings.
2. State which interpretation you are using and why.
3. Proceed, or ask if the stakes are high.

Do not silently pick one and hope the user doesn't notice.

---

## How to Communicate Findings

When you audit, check, or investigate something:

- Lead with the finding, not the journey — skip the "I searched for..." preamble.
- Separate observation ("X is the case") from recommendation ("therefore do Y").
- Cite the file path and line number when making factual claims.
- Say "I don't know" or "I couldn't find this" instead of inventing behavior, commands, or paths.

---

## Communicating Errors and Blockers

If something fails:

- Report what failed and include the actual error output — don't paraphrase it.
- State whether you can fix it or whether you need the user to act.
- Propose one specific next step. Don't offer a menu of options when one is clearly right.
- If you are stuck, stop and say so. Don't retry the same failing approach.

---

## Checkpointing on Long Tasks

On tasks with multiple sequential steps:

- Pause after each logical unit and confirm the result before continuing.
- Do not run all the way to completion and then reveal a problem at step 8.
- If a step produces unexpected output, stop and describe what you found before moving on.
- Commit meaningful units of work before starting the next step — this preserves a rollback point.

---

## Workspace Directory Usage

`workspace/` is the AI working directory for reports, plans, staging, and research.

- **Reports:** `workspace/reports/<category>/` — use an existing category subdirectory that matches the type of report.
- **Plans:** `workspace/plan/active/<PROJECT>/` — one folder per project, one plan file per plan.
- **Research:** `workspace/research/` — claims, fact checks, and source verification.
- Don't scatter one-off files in `workspace/`. If the output is ephemeral, write it inline in the conversation instead.

---

## Reading Before Editing

Read a file before you edit it. This is not optional.

- Never assume the current state of a file — the codebase changes frequently.
- Verify the exact text you intend to replace is present before writing an edit.
- On generated files: check the generator's `--check` output first to understand what would change.

---

## Working with the User

- Give the user credit for knowing what they want. Execute it, then flag concerns — don't refuse based on your guess about intent.
- When you disagree with an approach, say so once, clearly, then follow the user's decision.
- Keep responses short when the work speaks for itself. Long explanations after a clean edit add noise.
- Distinguish what you know from what you inferred. Label inferences as such.
