# Emergency Rollback Guide

## Quick Rollback (Last 5 minutes)

```bash
# See recent commits
git log --oneline -10 docs-v2-dev

# Safe rollback - creates new commit that undoes changes
git revert <commit-hash>

# OR - go back to previous state without changing history
git reset --soft HEAD~1
# Then inspect and recommit if needed
```

## View All Changes Since Date

```bash
# Since last hour
git log --oneline --since="1 hour ago" docs-v2-dev

# Since specific time
git log --oneline --since="2026-01-06 20:00:00" docs-v2-dev
```

## See What Changed in Last Commit

```bash
git show HEAD
```

## Rollback to Specific Commit

```bash
# List all commits
git reflog

# Safe method: Create new commit that undoes changes
git revert <commit-hash>

# Restore specific file to previous version
git restore --source=<commit-hash> <filename>

# Go back one commit (keeps history)
git reset --soft HEAD~1

# NEVER use: git reset --hard (destroys history)
```

## If You Need to Undo Last Auto-Commit

```bash
# See what's in the last commit
git show HEAD

# Create a new commit that reverts it
git revert HEAD

# OR - unstage it and inspect
git reset --soft HEAD~1
git diff --cached
```

## See Diff Between Commits

```bash
# What changed in last auto-commit
git diff HEAD~1 HEAD

# What changed in a specific commit
git diff <commit-hash>~1 <commit-hash>
```

## Automatic Checkpoints

Every 5 minutes a new commit is created on docs-v2-dev with timestamp. Each
commit is a full snapshot you can revert to instantly.

### View Commit Timeline

```bash
git log --oneline --graph docs-v2-dev | head -20
```

### Tag Safe Points (Optional)

```bash
# Save a checkpoint
git tag checkpoint-before-gateway-work

# Later, go back to it
git reset --hard checkpoint-before-gateway-work
```
