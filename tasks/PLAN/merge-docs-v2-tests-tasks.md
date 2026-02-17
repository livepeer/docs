# Merge Tasks: docs-v2-tests → docs-v2-test

**Date Created:** 2026-02-17  
**Source Branch:** `origin/docs-v2-tests`  
**Target Branch:** `docs-v2-test` (current)  
**Reference:** [Merge Analysis Report](reports/docs-v2-tests-merge-analysis.md)

**⚠️ CRITICAL:** All tasks must follow [README.md](../../README.md) structure rules (source of truth).

---

## Pre-Merge Preparation

### Task 0.1: Create Backup Branch
- [ ] Create backup branch: `git branch backup-before-merge-$(date +%Y%m%d-%H%M%S)`
- [ ] Verify backup branch created: `git branch | grep backup`
- [ ] **COMMIT:** Document backup creation

**Estimated Time:** 2 minutes  
**Risk Level:** Low

---

### Task 0.2: Commit Current Work
- [ ] Check git status: `git status`
- [ ] Stage all changes: `git add -A`
- [ ] Commit current state: `git commit -m "WIP: Save state before merging docs-v2-tests"`
- [ ] Verify commit: `git log -1 --oneline`
- [ ] **COMMIT:** This task complete

**Estimated Time:** 2 minutes  
**Risk Level:** Low

---

### Task 0.3: Verify Pre-Commit Hooks
- [ ] Verify hooks installed: `ls -la .git/hooks/pre-commit`
- [ ] Test hook: Create test file, try to commit (should fail)
- [ ] Remove test file
- [ ] **COMMIT:** Document hook verification

**Estimated Time:** 3 minutes  
**Risk Level:** Low

---

## Phase 1: Reorganize Local Structure (if needed)

### Task 1.1: Check Current tasks/ Structure
- [ ] Check if `tasks/PLAN/` exists (uppercase): `ls -d tasks/PLAN 2>/dev/null`
- [ ] Check if `tasks/plan/` exists (lowercase): `ls -d tasks/plan 2>/dev/null`
- [ ] List all tasks subdirectories: `find tasks -maxdepth 1 -type d`
- [ ] Document current structure
- [ ] **COMMIT:** Document current structure

**Estimated Time:** 5 minutes  
**Risk Level:** Low

---

### Task 1.2: Reorganize tasks/PLAN/ → tasks/plan/ (if needed)
**⚠️ Only do this if `tasks/PLAN/` exists and `tasks/plan/` doesn't**

- [ ] Verify `tasks/PLAN/` exists and `tasks/plan/` doesn't
- [ ] Create `tasks/plan/` directory: `mkdir -p tasks/plan`
- [ ] Move files from `tasks/PLAN/` → `tasks/plan/`:
  ```bash
  # Move all files except reports, scripts, errors
  find tasks/PLAN -maxdepth 1 -type f -exec mv {} tasks/plan/ \;
  find tasks/PLAN -mindepth 1 -maxdepth 1 -type d ! -name reports ! -name scripts ! -name errors -exec mv {} tasks/plan/ \;
  ```
- [ ] Move `tasks/PLAN/reports/` → `tasks/reports/` (if exists)
- [ ] Move `tasks/PLAN/scripts/` → `tasks/scripts/` (if exists)
- [ ] Move `tasks/PLAN/errors/` → `tasks/errors/` (if exists)
- [ ] Remove empty `tasks/PLAN/` directory: `rmdir tasks/PLAN`
- [ ] Verify structure matches README.md: `ls -la tasks/`
- [ ] **COMMIT:** `git commit -m "Reorganize tasks/PLAN/ to tasks/plan/ per README.md"`

**Estimated Time:** 15 minutes  
**Risk Level:** Medium  
**Dependencies:** Task 1.1

---

## Phase 2: Start Merge

### Task 2.1: Attempt Merge (No Commit)
- [ ] Fetch latest: `git fetch origin`
- [ ] Start merge (no commit): `git merge origin/docs-v2-tests --no-commit --no-ff`
- [ ] Check merge status: `git status`
- [ ] Document conflicts: `git diff --name-only --diff-filter=U`
- [ ] **DO NOT COMMIT YET** - This is just to see conflicts

**Estimated Time:** 5 minutes  
**Risk Level:** Low

---

### Task 2.2: Abort Merge and Create Merge Branch
- [ ] Abort merge: `git merge --abort`
- [ ] Create merge branch: `git checkout -b merge-docs-v2-tests`
- [ ] Verify branch: `git branch | grep merge-docs-v2-tests`
- [ ] **COMMIT:** Document merge branch creation

**Estimated Time:** 2 minutes  
**Risk Level:** Low

---

## Phase 3: Resolve Structural Conflicts

### Task 3.1: Handle Renamed Files (docs/ → tasks/)
- [ ] Start merge again: `git merge origin/docs-v2-tests --no-commit --no-ff`
- [ ] Identify renamed files: `git diff --name-status HEAD origin/docs-v2-tests | grep "^R100" | head -20`
- [ ] For each renamed file from `docs/PLAN/*` → `tasks/plan/*`:
  ```bash
  # Example script (run for each file)
  REMOTE_FILE="docs/PLAN/11-mintlify-ai-investigation.md"
  LOCAL_FILE="tasks/plan/11-mintlify-ai-investigation.md"
  
  # If local file doesn't exist, copy from remote
  if [ ! -f "$LOCAL_FILE" ]; then
    git show origin/docs-v2-tests:"$REMOTE_FILE" > "$LOCAL_FILE"
    git add "$LOCAL_FILE"
  fi
  ```
- [ ] For files in `docs/ABOUT/`, `docs/DEVELOPERS/`, etc. → keep in `tasks/ABOUT/`, `tasks/DEVELOPERS/`
- [ ] **COMMIT:** `git commit -m "Migrate renamed files from docs/ to tasks/ structure"`

**Estimated Time:** 30 minutes  
**Risk Level:** Medium  
**Dependencies:** Task 2.2

---

### Task 3.2: Migrate New PLAN Files
- [ ] List new files in remote: `git diff --name-only HEAD origin/docs-v2-tests | grep "^A.*docs/PLAN" | head -20`
- [ ] For each new file, migrate to `tasks/plan/`:
  ```bash
  # Example for each new file
  REMOTE_FILE="docs/PLAN/16-rfp-goals-assessment.md"
  LOCAL_FILE="tasks/plan/16-rfp-goals-assessment.md"
  
  git show origin/docs-v2-tests:"$REMOTE_FILE" > "$LOCAL_FILE"
  git add "$LOCAL_FILE"
  ```
- [ ] Migrate `docs/PLAN/reports/*` → `tasks/reports/`:
  ```bash
  for file in $(git diff --name-only HEAD origin/docs-v2-tests | grep "^A.*docs/PLAN/reports"); do
    local_file=$(echo "$file" | sed 's|^docs/PLAN/reports/|tasks/reports/|')
    git show origin/docs-v2-tests:"$file" > "$local_file"
    git add "$local_file"
  done
  ```
- [ ] Verify structure: `ls -la tasks/plan/ | head -20`
- [ ] **COMMIT:** `git commit -m "Migrate new PLAN files from docs/PLAN/ to tasks/plan/ per README.md"`

**Estimated Time:** 20 minutes  
**Risk Level:** Medium  
**Dependencies:** Task 3.1

---

### Task 3.3: Preserve Local Structure Files
- [ ] Verify `.whitelist` exists: `test -f .whitelist && echo "EXISTS" || echo "MISSING"`
- [ ] If merge tries to delete `.whitelist`, restore it: `git checkout HEAD -- .whitelist`
- [ ] Verify `ai-tools/` exists: `test -d ai-tools && echo "EXISTS" || echo "MISSING"`
- [ ] If merge tries to delete `ai-tools/`, restore it: `git checkout HEAD -- ai-tools/`
- [ ] Verify `api/` exists: `test -d api && echo "EXISTS" || echo "MISSING"`
- [ ] If merge tries to delete `api/`, restore it: `git checkout HEAD -- api/`
- [ ] Verify `contribute/` exists: `test -d contribute && echo "EXISTS" || echo "MISSING"`
- [ ] If merge tries to delete `contribute/`, restore it: `git checkout HEAD -- contribute/`
- [ ] **COMMIT:** `git commit -m "Preserve local structure files (.whitelist, ai-tools/, api/, contribute/)"`

**Estimated Time:** 10 minutes  
**Risk Level:** Low  
**Dependencies:** Task 3.2

---

## Phase 4: Resolve Content Conflicts

### Task 4.1: Merge docs.json
- [ ] Check for conflicts: `git diff HEAD origin/docs-v2-tests -- docs.json | head -50`
- [ ] Open `docs.json` and manually merge:
  - Keep navigation updates from remote (Daydream, Frameworks, Stream.place)
  - Verify all file paths exist
  - Check for duplicate entries
- [ ] Test JSON validity: `node -e "JSON.parse(require('fs').readFileSync('docs.json'))"`
- [ ] **COMMIT:** `git commit -m "Merge docs.json: preserve navigation updates"`

**Estimated Time:** 20 minutes  
**Risk Level:** Medium  
**Dependencies:** Task 3.3

---

### Task 4.2: Merge .cursorrules
- [ ] Check for conflicts: `git diff HEAD origin/docs-v2-tests -- .cursorrules | head -50`
- [ ] Open `.cursorrules` and manually merge:
  - Keep local structure rules (tasks/ at root)
  - Merge content improvements from remote
  - Preserve README.md references
- [ ] **COMMIT:** `git commit -m "Merge .cursorrules: preserve structure rules, merge content"`

**Estimated Time:** 15 minutes  
**Risk Level:** Medium  
**Dependencies:** Task 4.1

---

### Task 4.3: Merge Git Hooks
- [ ] Check for conflicts: `git diff HEAD origin/docs-v2-tests -- .githooks/pre-commit | head -50`
- [ ] Open `.githooks/pre-commit` and manually merge:
  - Keep local structure enforcement (whitelist checks)
  - Merge improvements from remote
  - Test hook: Create test file, try to commit
- [ ] Check other hooks: `.githooks/verify.sh`, `.githooks/verify-browser.js`
- [ ] **COMMIT:** `git commit -m "Merge git hooks: preserve structure enforcement"`

**Estimated Time:** 20 minutes  
**Risk Level:** Medium  
**Dependencies:** Task 4.2

---

### Task 4.4: Merge GitHub Config Files
- [ ] Check for conflicts in `.github/AGENTS.md`, `.github/augment-instructions.md`, `.github/copilot-instructions.md`
- [ ] Manually merge each file:
  - Preserve local structure rules
  - Merge content improvements
- [ ] Check workflow files: `.github/workflows/test-suite.yml`, `.github/workflows/test-v2-pages.yml`
- [ ] **COMMIT:** `git commit -m "Merge GitHub config files"`

**Estimated Time:** 15 minutes  
**Risk Level:** Low  
**Dependencies:** Task 4.3

---

## Phase 5: Accept New Content

### Task 5.1: Accept New Product Pages
- [ ] List new product pages: `git diff --name-only HEAD origin/docs-v2-tests | grep "^A.*v2/pages/010_products"`
- [ ] Verify files exist in remote: `git ls-tree -r --name-only origin/docs-v2-tests | grep "v2/pages/010_products" | head -10`
- [ ] Accept all new product pages (no conflicts expected):
  ```bash
  for file in $(git diff --name-only HEAD origin/docs-v2-tests | grep "^A.*v2/pages/010_products"); do
    git show origin/docs-v2-tests:"$file" > "$file"
    git add "$file"
  done
  ```
- [ ] **COMMIT:** `git commit -m "Accept new product documentation (Daydream, Frameworks, Stream.place)"`

**Estimated Time:** 10 minutes  
**Risk Level:** Low  
**Dependencies:** Task 4.4

---

### Task 5.2: Verify All New Content
- [ ] List all new files: `git diff --name-only HEAD origin/docs-v2-tests | grep "^A" | wc -l`
- [ ] Verify no unauthorized root files: `git diff --name-only HEAD origin/docs-v2-tests | grep "^A" | grep -E '^[^/]+$' | grep -vE '^(docs\.json|package\.json|README\.md|LICENSE|Dockerfile|Makefile|style\.css|favicon\.png|\.gitignore|\.mintignore|\.whitelist)$'`
- [ ] Check for any `docs/` directory creation: `test -d docs && echo "EXISTS - ERROR" || echo "OK"`
- [ ] **COMMIT:** Document verification

**Estimated Time:** 10 minutes  
**Risk Level:** Low  
**Dependencies:** Task 5.1

---

## Phase 6: Final Verification

### Task 6.1: Verify Structure Matches README.md
- [ ] Check `tasks/plan/` exists (lowercase): `test -d tasks/plan && echo "OK" || echo "MISSING"`
- [ ] Check `tasks/reports/` exists: `test -d tasks/reports && echo "OK" || echo "MISSING"`
- [ ] Check `tasks/scripts/` exists: `test -d tasks/scripts && echo "OK" || echo "MISSING"`
- [ ] Check `tasks/errors/` exists: `test -d tasks/errors && echo "OK" || echo "MISSING"`
- [ ] Verify no `tasks/PLAN/` (uppercase): `test -d tasks/PLAN && echo "ERROR - EXISTS" || echo "OK"`
- [ ] Verify `.whitelist` exists: `test -f .whitelist && echo "OK" || echo "MISSING"`
- [ ] Verify root directories: `test -d ai-tools && test -d api && test -d contribute && echo "OK" || echo "MISSING"`
- [ ] **COMMIT:** Document structure verification

**Estimated Time:** 5 minutes  
**Risk Level:** Low  
**Dependencies:** Task 5.2

---

### Task 6.2: Run Pre-Commit Hooks
- [ ] Test pre-commit hook: Create a test file in root, try to commit (should fail)
- [ ] Remove test file
- [ ] Stage all changes: `git add -A`
- [ ] Try to commit: `git commit -m "Test: verify pre-commit hooks work"` (should pass if structure is correct)
- [ ] If hooks fail, fix issues and retry
- [ ] **COMMIT:** Document hook verification

**Estimated Time:** 10 minutes  
**Risk Level:** Medium  
**Dependencies:** Task 6.1

---

### Task 6.3: Verify docs.json
- [ ] Check JSON validity: `node -e "JSON.parse(require('fs').readFileSync('docs.json'))" && echo "VALID" || echo "INVALID"`
- [ ] Verify all referenced files exist:
  ```bash
  # Extract all page paths from docs.json and check they exist
  node -e "
    const docs = JSON.parse(require('fs').readFileSync('docs.json'));
    function checkPages(obj) {
      if (typeof obj === 'string' && obj.startsWith('v2/pages/')) {
        const fs = require('fs');
        if (!fs.existsSync(obj + '.mdx') && !fs.existsSync(obj + '/index.mdx')) {
          console.log('MISSING:', obj);
        }
      } else if (typeof obj === 'object') {
        Object.values(obj).forEach(checkPages);
      }
    }
    checkPages(docs);
  "
  ```
- [ ] Fix any missing file references
- [ ] **COMMIT:** `git commit -m "Verify and fix docs.json references"`

**Estimated Time:** 15 minutes  
**Risk Level:** Medium  
**Dependencies:** Task 6.2

---

### Task 6.4: Check for Duplicate Files
- [ ] Check for duplicates between `tasks/plan/` and any `tasks/PLAN/`:
  ```bash
  if [ -d tasks/PLAN ]; then
    echo "WARNING: tasks/PLAN/ still exists"
    comm -12 <(find tasks/plan -type f -name "*.md" | xargs -n1 basename | sort) \
             <(find tasks/PLAN -type f -name "*.md" | xargs -n1 basename | sort)
  fi
  ```
- [ ] Resolve any duplicates (keep version in `tasks/plan/`)
- [ ] **COMMIT:** Document duplicate check

**Estimated Time:** 10 minutes  
**Risk Level:** Low  
**Dependencies:** Task 6.3

---

## Phase 7: Complete Merge

### Task 7.1: Final Merge Commit
- [ ] Review all changes: `git status`
- [ ] Review commit history: `git log --oneline -10`
- [ ] Create final merge commit: `git commit -m "Merge docs-v2-tests: preserve structure, merge content

- Preserved tasks/ structure per README.md (tasks/plan/, tasks/reports/, etc.)
- Migrated content from docs/PLAN/ to tasks/plan/ (lowercase)
- Preserved .whitelist and root-level directories (ai-tools/, api/, contribute/)
- Merged new product documentation (Daydream, Frameworks, Stream.place)
- Merged new PLAN files and reports
- Updated docs.json navigation
- All structure matches README.md requirements"`
- [ ] Verify merge: `git log --oneline --graph -5`

**Estimated Time:** 5 minutes  
**Risk Level:** Low  
**Dependencies:** Task 6.4

---

### Task 7.2: Test Locally
- [ ] Start Mintlify dev server: `mint dev`
- [ ] Check for errors in console
- [ ] Verify pages load: Check a few key pages
- [ ] Test navigation: Click through a few sections
- [ ] Stop dev server
- [ ] **COMMIT:** Document test results

**Estimated Time:** 15 minutes  
**Risk Level:** Medium  
**Dependencies:** Task 7.1

---

### Task 7.3: Final Checklist
- [ ] All `tasks/` files in `tasks/` (not `docs/`) ✅
- [ ] Structure matches README.md (tasks/plan/, tasks/reports/, etc.) ✅
- [ ] `.whitelist` file present ✅
- [ ] `ai-tools/`, `api/`, `contribute/` at root ✅
- [ ] New PLAN files in `tasks/plan/` ✅
- [ ] New reports in `tasks/reports/` ✅
- [ ] New product pages in `v2/pages/` ✅
- [ ] `docs.json` valid and all paths exist ✅
- [ ] Pre-commit hooks pass ✅
- [ ] No duplicate files ✅
- [ ] No `docs/` directory created ✅
- [ ] All tests pass (if applicable) ✅

**Estimated Time:** 10 minutes  
**Risk Level:** Low  
**Dependencies:** Task 7.2

---

## Post-Merge

### Task 8.1: Merge to Main Branch (if approved)
- [ ] Switch to target branch: `git checkout docs-v2-test`
- [ ] Merge merge branch: `git merge merge-docs-v2-tests --no-ff`
- [ ] Push to remote: `git push origin docs-v2-test`
- [ ] **COMMIT:** Document merge completion

**Estimated Time:** 5 minutes  
**Risk Level:** Low  
**Dependencies:** Task 7.3

---

### Task 8.2: Cleanup
- [ ] Delete merge branch: `git branch -d merge-docs-v2-tests`
- [ ] Update merge analysis report with completion status
- [ ] Document any issues encountered
- [ ] **COMMIT:** Document cleanup

**Estimated Time:** 5 minutes  
**Risk Level:** Low  
**Dependencies:** Task 8.1

---

## Summary

**Total Estimated Time:** ~4-5 hours  
**Total Tasks:** 25 tasks across 8 phases  
**Risk Level:** Medium (structural conflicts require careful handling)

**Key Principles:**
1. ✅ Always preserve `tasks/` structure per README.md
2. ✅ Migrate to lowercase `tasks/plan/` (not `tasks/PLAN/`)
3. ✅ Preserve `.whitelist` and root-level directories
4. ✅ Accept new content (product docs, PLAN files)
5. ✅ Test after each phase
6. ✅ Commit incrementally to trigger pre-commit hooks

**Critical Success Factors:**
- Follow README.md structure exactly (source of truth)
- Test pre-commit hooks after each major change
- Verify `docs.json` validity and all paths exist
- No `docs/` directory should be created
- All files in correct locations per README.md

---

**Reference Documents:**
- [Merge Analysis Report](reports/docs-v2-tests-merge-analysis.md) - Detailed conflict analysis
- [README.md](../../README.md) - Repository structure (source of truth)
- [Migration Plan](migration-plan.md) - Migration strategy
