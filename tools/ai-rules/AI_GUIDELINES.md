# 🛡️ AI SAFETY PROTOCOL: GIT WRITE OPERATIONS

## 1. MANDATORY SAFETY HOOKS

This repository uses custom Git hooks for "Human-in-the-Loop" (HitL)
verification.

- **ENFORCEMENT:** You SHALL NOT attempt to bypass hooks.
- **FORBIDDEN:** The use of `--no-verify`, `-n`, or any environment variable
  designed to skip Git hook execution is STRICTLY PROHIBITED.
- **BEHAVIOR:** When you initiate a `commit`, `push`, or `rebase`, the hook will
  pause and wait for manual input in the user's terminal. You MUST wait for the
  user to confirm.

## 2. AUTOMATED CHECKPOINTING

Every write command triggers an automatic checkpoint branch.

- **FORMAT:** `checkpoint/YYYY-MM-DD_HHMMSS`
- **ACTION:** Before running a write command, you MUST state: _"I am initiating
  [COMMAND]. A safety checkpoint will be created. Please approve the prompt in
  your terminal."_

## 3. CATASTROPHIC FAILURE RECOVERY

In the event of a destructive operation (e.g., accidental file deletion,
corrupted rebase, or broken merge):

- **DO NOT** attempt to "fix" the state with further complex Git commands.
- **PROCEDURE:**
  1. Identify the latest `checkpoint/` branch using
     `git branch --list 'checkpoint/*'`.
  2. Suggest a `git reset --hard` to that specific checkpoint branch to restore
     the repository to its pre-failure state.
  3. Notify the user immediately of the failure and the recovery path.

## 4. SCOPE LIMITATIONS

- **READS:** You have full permission for `git status`, `git diff`, and
  `git log`.
- **WRITES:** Every `commit`, `push`, and `rebase` is a high-stakes action.
  Treat them as irreversible without human oversight.

## 5. ⚠️ MANDATORY: Commit Enforcement for Structure & Style Validation

**CRITICAL RULE:** After making ANY change, you MUST create a commit to trigger pre-commit hooks.

### 📖 Source of Truth

**⚠️ IMPORTANT:** The **source of truth** for repository structure is **[README.md](../../README.md)**. Always refer to README.md for current structure rules.

### Commit Requirements

1. **COMMIT AFTER EACH CHANGE** - Do not batch multiple unrelated changes into one commit
2. **Pre-commit hooks run automatically** - They will:
   - ✅ Check repository structure compliance (README.md rules - **SOURCE OF TRUTH**)
   - ✅ Verify style guide compliance (ThemeData, colors, imports)
   - ✅ Run verification scripts (syntax checks, validation)
   - ✅ Block commits with violations
3. **Fix hook failures immediately** - Do not proceed to next task until hooks pass
4. **Test functionality** - Verify the change works before moving to next task

### Why This Matters

- Pre-commit hooks enforce README.md repository structure rules (**SOURCE OF TRUTH**)
- Hooks catch structure violations, style issues, and import problems early
- Prevents breaking changes from being committed
- Ensures all changes match repository standards

### Example Workflow

1. Make a change (move file, update code, etc.)
2. **COMMIT immediately:** `git commit -m "Description of change"`
3. Pre-commit hooks run automatically
4. If hooks fail → Fix issues → Commit again
5. If hooks pass → Proceed to next task

**DO NOT** skip commits or bypass hooks. Every change must be validated.
