# Emergency Rollback Guide

## Diagnose Before You Fix

Before running any recovery command, understand what broke and why.

- Run `git status` and `git log --oneline -10` to see actual state.
- Run `git show HEAD` to see what the last commit actually changed.
- If a pre-commit hook failed, read its output — it tells you exactly what to fix.
- Do not retry the same failing command. Do not skip hooks with `--no-verify` to get past a failure.
- If the state is unclear, stop and ask the user before proceeding.

---

## Quick Rollback

```bash
# See recent commits
git log --oneline -10

# Safe rollback — creates a new commit that undoes changes
git revert <commit-hash>

# Or — unstage the last commit and inspect before recommitting
git reset --soft HEAD~1
```

## View All Changes Since a Time

```bash
# Since last hour
git log --oneline --since="1 hour ago"

# Since specific time
git log --oneline --since="2026-01-06 20:00:00"
```

## See What Changed in Last Commit

```bash
git show HEAD
```

## Rollback to Specific Commit

```bash
# List all commits (including ones not on current branch)
git reflog

# Safe method: create a new commit that undoes changes (keeps history)
git revert <commit-hash>

# Restore a specific file to a previous version
git restore --source=<commit-hash> <filename>

# Unstage the last commit, keeping the changes on disk
git reset --soft HEAD~1

# NEVER use: git reset --hard (destroys working tree changes)
```

## See Diff Between Commits

```bash
# What changed in the last commit
git diff HEAD~1 HEAD

# What changed in a specific commit
git diff <commit-hash>~1 <commit-hash>
```

## View Commit Timeline

```bash
git log --oneline --graph | head -20
```
