# 🤖 PROJECT AGENT RULES & SAFETY PROTOCOLS

## 🛠️ CRITICAL BOUNDARIES (READ FIRST)

- **ALWAYS** check for the existence of local Git hooks in `.git/hooks/` before
  initiating a write command.
- **NEVER** use `--no-verify` or `-n` flags to bypass safety checks. These are
  hard project constraints.
- **NEVER** perform a `git reset --hard` or `git push --force` without an
  explicit, multi-turn plan confirmed by the user.
- **NEVER** perform a `git reset --hard` or `git push --force` without a saved
  branch to revert to in case of failure.

## 📦 GIT WORKFLOW & CHECKPOINTS

This project enforces a "Human-in-the-Loop" (HitL) verification for all
destructive or history-altering actions.

- **Automatic Checkpoints:** Every `commit`, `push`, and `rebase` triggers a
  safety hook that creates a branch named `checkpoint/YYYY-MM-DD_HHMMSS`.
- **Pre-Write Announcement:** Before executing a write command, you MUST state:
  _"I am initiating [COMMAND]. A safety checkpoint will be created. Please
  switch to your terminal to type 'yes' when prompted."_
- **Recovery:** If a command fails, the latest pre-failure state is stored in
  the most recent `checkpoint/` branch.

## 🧪 VALIDATION COMMANDS

Before asking for a commit, you should ideally run these to ensure code quality:

```bash
# Verify build
mint dev
```

# Run local test suite

Make a test for mintlify in the v2/tests file. DO NOT EVER run a script without
testing it on a local branch first.
