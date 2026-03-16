# Universal AI Operations Protocol

## For ANY AI Assistant Working on This Repository

**Last Updated:** 2026-01-06  
**Created After:** Catastrophic AI failure destroying 12+ files and 318+ files
through formatting disaster

---

## CRITICAL RULES FOR ALL AI ASSISTANTS

### Rule 1: PROTECTED BRANCHES - UNTOUCHABLE

```
docs-v2 = SOURCE OF TRUTH
main = PRODUCTION

NO AI ASSISTANT IS ALLOWED TO:
- Commit to these branches
- Push to these branches
- Merge into these branches
- Delete these branches
```

### Rule 2: PRE-FLIGHT CHECKLIST (EVERY OPERATION)

Before ANY git command, the AI MUST show you:

```
[PREFLIGHT CHECK]
Operating on branch: ________
Files affected: ________
Operation: ________
Expected outcome: ________

Proceed? (yes/no)
```

**If you don't see this, STOP and ask the AI to show it.**

### Rule 3: FORBIDDEN COMMANDS (ABSOLUTE)

```
❌ NEVER ALLOWED:
- git reset --hard
- git restore .
- git clean -fd
- git push --force
- git rebase -i
- git tag --force
- Mass operations > 50 files without approval
```

### Rule 4: LARGE CHANGE PROTOCOL (&gt; 10 files)

```
1. AI lists EXACT files being modified
2. AI shows file count and brief explanation
3. Human reviews and approves EXPLICITLY
4. Human creates approval token if needed
5. AI proceeds ONLY after approval
```

### Rule 5: COMMIT MESSAGE REQUIREMENTS

Every commit must include:

```
[File count] | [What changed] | [Why changed] | [Approved by: USERNAME]

Example:
[9 files added] | Restore gateway quickstart files | Fix missing imports from stash | Approved by: alisonhaire
```

### Rule 6: FORBIDDEN FILE PATTERNS

```
❌ AI must NOT touch without explicit approval:
- .prettierrc, .prettierignore
- docs.json, docs_v2.json
- package.json
- v2/ structure changes
- v1/ any changes (legacy)
- ./git/* (git config)
- Migration of files between v1 and v2
```

### Rule 7: DANGEROUS OPERATION ALERTS

AI MUST WARN before:

- Restoring files from commits &gt; 24 hours old
- Deleting ANY file
- Renaming directories
- Changing file structure
- Mass reformatting operations

### Rule 8: AUDIT TRAIL REQUIREMENT

Every operation logs to: `.ai-operations.log`

```
[TIMESTAMP] BRANCH=docs-v2-dev | FILES=9 | OP=restore | APPROVAL=yes | COMMIT=abc123
```

### Rule 9: CHECKPOINT SYSTEM

- Auto-commits every 5 minutes on `docs-v2-dev`
- Each commit is tagged with timestamp
- Rollback available to ANY point in last 24 hours
- Tags: `state-before-OPERATION` and `state-after-OPERATION`

### Rule 10: DRY-RUN FOR COMPLEX OPS

Before any operation affecting &gt; 5 files:

```
1. AI shows DRY-RUN (what WOULD happen)
2. Human reviews
3. Human approves
4. AI executes REAL operation
5. AI shows ACTUAL result
```

---

## EMERGENCY PROCEDURES

### If AI Breaks Something

```bash
# 1. Get the commit hash
git log --oneline docs-v2-dev | head -1

# 2. See what broke
git show HEAD

# 3. Revert it (creates new commit undoing changes)
git revert HEAD

# 4. Or unstage and inspect
git reset --soft HEAD~1
```

### If AI Touches Protected Branch

```bash
# Check what happened
git log docs-v2 --oneline -5

# Force restore from remote
git fetch origin
git reset --soft origin/docs-v2
```

### If AI Tries Forbidden Command

The pre-commit hook will block it automatically.

---

## HUMAN RESPONSIBILITY CHECKLIST

Before each AI session with YOUR docs:

- [ ] Review protected branches list
- [ ] Know your current branch
- [ ] Have rollback commands ready (see ROLLBACK-GUIDE.md)
- [ ] Verify AI shows preflight checklist EVERY TIME
- [ ] Never let AI skip approval for &gt; 10 file changes
- [ ] Check audit log (.ai-operations.log) regularly

---

## FOR INSTRUCTING ANY NEW AI

Include this in your prompt to any AI:

```
"You are working on a repository with STRICT AI safety protocols.
You MUST:
1. Never commit to docs-v2 or main
2. Show preflight checklist before every operation
3. Get explicit approval for any change > 10 files
4. Never use: git reset --hard, git restore ., git clean -fd
5. Log all operations to .ai-operations.log
6. Work only on docs-v2-dev branch for commits
7. Reference UNIVERSAL-AI-PROTOCOL.md for complete rules"
```

---

## VERSION CONTROL FOR THIS PROTOCOL

- Created: 2026-01-06 after catastrophic AI failure
- Enforced by: `.git/hooks/pre-commit` (technical enforcement)
- Audited by: `.ai-operations.log` (human review)
- Rollback by: `ROLLBACK-GUIDE.md` (recovery procedures)

**This protocol is NOT optional. It is the safety layer that prevents
irreversible damage.**
