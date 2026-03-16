# AI Assistant Accountability Checklist

Use this for EVERY interaction with ANY AI on this repo.

## Before Session Starts

- [ ] AI acknowledges UNIVERSAL-AI-PROTOCOL.md
- [ ] AI states current branch
- [ ] AI lists protected branches (docs-v2, main)
- [ ] AI confirms it has read/write restrictions

## Before EVERY Git Operation

- [ ] AI shows PREFLIGHT CHECK (branch, files, operation, approval needed)
- [ ] You review the preflight
- [ ] You explicitly approve or reject
- [ ] AI executes ONLY after approval

## During Large Changes (&gt; 10 files)

- [ ] AI lists EXACT files being changed
- [ ] AI explains WHY each file changes
- [ ] You review file list
- [ ] You create `.ai-commit-verified` file
- [ ] AI commits with verification token in message

## After Each Commit

- [ ] Verify commit message has: [file count] | [what] | [why] | [approved by]
- [ ] Check `.ai-operations.log` for entry
- [ ] Spot-check git log for timestamp accuracy
- [ ] Review file changes: `git show HEAD`

## If Something Breaks

- [ ] Stop work immediately
- [ ] Document what broke
- [ ] Use ROLLBACK-GUIDE.md to revert
- [ ] Don't let AI try to "fix" without rollback first
- [ ] Post-mortem: update UNIVERSAL-AI-PROTOCOL.md

## Monthly Review

- [ ] Audit `.ai-operations.log` for patterns
- [ ] Check if any rules were bent
- [ ] Review `git log docs-v2-dev` for auto-commits
- [ ] Test rollback procedures (make sure they still work)
- [ ] Update this checklist based on lessons learned

## Red Flags (Stop Work Immediately)

- [ ] AI tries to use `git reset --hard`
- [ ] AI commits to `docs-v2` or `main`
- [ ] AI doesn't show preflight checklist
- [ ] AI modifies 50+ files without asking
- [ ] AI touches `.prettierrc` or `docs.json`
- [ ] AI makes changes to v1/ directory
- [ ] Commit message missing approval token
- [ ] Pre-commit hook does NOT block an AI commit attempt

## Recovery Commands (Memorize These)

```bash
# See recent commits
git log --oneline -10 docs-v2-dev

# Revert last commit (safe, creates new commit)
git revert HEAD

# View what's in last commit
git show HEAD

# Unstage last commit (keep files)
git reset --soft HEAD~1

# Check audit trail
cat .ai-operations.log | tail -20
```

---

**This checklist is your insurance policy against AI fucking up your docs.**
