---
type: "always_apply"
---

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
