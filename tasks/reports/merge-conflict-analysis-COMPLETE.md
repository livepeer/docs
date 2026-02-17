# Merge Conflict Analysis - Complete Report

**Date:** 2026-02-17  
**Analysis Type:** Full merge conflict assessment across all branches  
**Source:** [GitHub Repository](https://github.com/livepeer/docs/tree/docs-v2-preview)

---

## Executive Summary

This report analyzes merge conflicts across three critical merge paths:

1. **docs-v2-test → docs-v2-preview (local)**
2. **docs-v2-preview (local) → origin/docs-v2-preview (DeveloperAlly fork)**
3. **origin/docs-v2-preview (fork) → upstream/docs-v2-preview (livepeer/docs)**

**Key Findings:**
- ✅ **Path 1:** **COMPLETED** - docs-v2-test merged into docs-v2-preview (local)
- ✅ **Path 2:** **COMPLETED** - docs-v2-preview pushed to origin/docs-v2-preview (fork)
- ⚠️ **Path 3:** **PENDING** - **MAJOR CONFLICTS** - 302+ file differences, structural reorganization conflicts

---

## 1. Merge: docs-v2-test → docs-v2-preview (Local)

### Status: ✅ **COMPLETED**

**Execution Date:** 2026-02-17

**Current State:**
- **Merged:** `docs-v2-test` (commit: `9eefa87`) → `docs-v2-preview` (commit: `9eefa87`)
- **Relationship:** Fast-forward merge completed successfully
- **Commits Merged:** 20 commits

**Merge Result:**
```
Fast-forward merge completed
193 files changed, 14556 insertions(+), 110609 deletions(-)
```

**Files Changed (193 files):**
- Modified: `.githooks/pre-commit`, `.whitelist`, `README.md`, various config files
- Added: New migration task files, reports, API specs, contribution docs
- Deleted: Old `tasks/PLAN/` structure (moved to `tasks/plan/`)
- Renamed: Multiple files from `tasks/PLAN/` to `tasks/plan/`

**Status:**
- ✅ **Merge completed successfully**
- ✅ **No conflicts encountered**
- ✅ **All changes integrated**

---

## 2. Merge: docs-v2-preview (Local) → origin/docs-v2-preview (Fork)

### Status: ✅ **COMPLETED**

**Execution Date:** 2026-02-17

**Current State:**
- **Pushed:** `docs-v2-preview` (commit: `9eefa87`) → `origin/docs-v2-preview` (commit: `9eefa87`)
- **Relationship:** Push completed successfully
- **Commits Pushed:** 9 commits (now synced)

**Push Result:**
```
To https://github.com/DeveloperAlly/livepeer-docs-fork.git
   d4ba866..9eefa87  docs-v2-preview -> docs-v2-preview
```

**Files Changed:**
- All changes from local branch now in remote fork
- Fork is now fully synced with local branch

**Status:**
- ✅ **Push completed successfully**
- ✅ **No conflicts encountered**
- ✅ **Fork is now up to date**

---

## 3. Merge: origin/docs-v2-preview (Fork) → upstream/docs-v2-preview (Original)

### Status: ⚠️ **MAJOR CONFLICTS - 302+ FILE DIFFERENCES**

**Current State (Updated 2026-02-17):**
- **Fork Branch:** `origin/docs-v2-preview` (commit: `9eefa87`)
- **Upstream Branch:** `upstream/docs-v2-preview` (commit: `b133755`)
- **Common Ancestor:** `4e592a1` (commit from upstream)
- **Relationship:** Diverged significantly - **fork has 160 commits ahead, upstream has 2 commits ahead**

**Merge Test Result:**
```
CONFLICT (add/add): Multiple file conflicts
CONFLICT (content): Content conflicts in key files
CONFLICT (modify/delete): Files deleted in fork but modified in upstream
CONFLICT (file location): 80+ files with location conflicts (docs/ → tasks/)
```

### Conflict Categories

#### A. Content Conflicts (8 files)
Files modified in both branches with conflicting changes:

1. **`.githooks/pre-commit`**
   - **Fork:** Enhanced with deletion prevention, AI rules
   - **Upstream:** Different pre-commit logic
   - **Resolution:** Manual merge required - combine both approaches

2. **`.githooks/verify-browser.js`**
   - **Fork:** Enhanced browser verification
   - **Upstream:** Different implementation
   - **Resolution:** Manual merge required

3. **`.githooks/verify.sh`**
   - **Fork:** Enhanced verification script
   - **Upstream:** Different script logic
   - **Resolution:** Manual merge required

4. **`.github/augment-instructions.md`**
   - **Fork:** Updated with new structure rules
   - **Upstream:** Different instructions
   - **Resolution:** Manual merge required

5. **`.github/workflows/test-suite.yml`**
   - **Fork:** New test suite workflow
   - **Upstream:** Different workflow
   - **Resolution:** Manual merge required

6. **`.github/workflows/test-v2-pages.yml`**
   - **Fork:** New test workflow
   - **Upstream:** Different workflow
   - **Resolution:** Manual merge required

7. **`README.md`**
   - **Fork:** Comprehensive structure documentation
   - **Upstream:** Different README content
   - **Resolution:** Manual merge required - preserve fork's structure docs

8. **`docs.json`**
   - **Fork:** Updated navigation structure
   - **Upstream:** Different navigation
   - **Resolution:** Manual merge required - preserve fork's structure

#### B. Test File Conflicts (7 files)
Test files with conflicting implementations:

1. **`tests/integration/browser.test.js`** - Add/add conflict
2. **`tests/run-all.js`** - Add/add conflict
3. **`tests/unit/mdx.test.js`** - Add/add conflict
4. **`tests/unit/quality.test.js`** - Add/add conflict
5. **`tests/unit/spelling.test.js`** - Add/add conflict
6. **`tests/unit/style-guide.test.js`** - Add/add conflict
7. **`tests/utils/*.js`** - Multiple utility file conflicts

**Resolution:** Manual merge required - combine test suites

#### C. Structural Conflicts (80+ files)
**CRITICAL:** Files moved from `docs/` to `tasks/` in fork, but still exist in `docs/` in upstream:

**Pattern:** `docs/PLAN/` → `tasks/plan/` (fork) vs `docs/PLAN/` (upstream)

**Affected Directories:**
- `docs/PLAN/` → `tasks/plan/` (80+ files)
- `docs/CONTRIBUTING/` → `tasks/CONTRIBUTING/` (3 files)
- `docs/DEVELOPERS/` → `tasks/DEVELOPERS/` (20+ files)
- `docs/ABOUT/` → `tasks/ABOUT/` (30+ files)
- `docs/ORCHESTRATORS/` → `tasks/ORCHESTRATORS/` (15+ files)
- `scripts/` → `tools/scripts/` (3 files)

**Git Conflict Type:** `CONFLICT (file location)` - Git suggests moving files

**Resolution Strategy:**
1. **Accept fork's structure** (`tasks/` instead of `docs/`)
2. **Move upstream's new files** from `docs/` to `tasks/` locations
3. **Update all references** in upstream files to new paths
4. **Merge content** where files exist in both locations

#### D. Modify/Delete Conflicts (2 files)
Files deleted in fork but modified in upstream:

1. **`docs/PLAN/03-component-library-wiki.md`**
   - **Fork:** Deleted (moved to `tasks/plan/`)
   - **Upstream:** Modified
   - **Resolution:** Move upstream version to `tasks/plan/03-component-library-wiki.md`

2. **`docs/PLAN/README.md`**
   - **Fork:** Deleted (moved to `tasks/plan/`)
   - **Upstream:** Modified
   - **Resolution:** Move upstream version to `tasks/plan/README.md`

#### E. Configuration File Conflicts

**Files with location differences:**

1. **`.prettierrc.yaml`**
   - **Fork:** In `tools/config/.prettierrc.yaml`
   - **Upstream:** In root `.prettierrc.yaml`
   - **Resolution:** Keep in root (Mintlify convention) - move fork's file

2. **`.speakeasy/`**
   - **Fork:** In `tools/config/.speakeasy/`
   - **Upstream:** In root `.speakeasy/`
   - **Resolution:** Keep in `tools/config/.speakeasy/` (per migration plan)

3. **`cspell.json`**
   - **Fork:** In `tools/config/cspell.json`
   - **Upstream:** In root `cspell.json`
   - **Resolution:** Keep in `tools/config/` (per migration plan)

4. **`.cursorrules`**
   - **Fork:** In `tools/ai-rules/.cursorrules`
   - **Upstream:** In root `.cursorrules`
   - **Resolution:** Keep in root (Cursor IDE convention) - move fork's file

5. **`.whitelist`**
   - **Fork:** Exists with updated structure
   - **Upstream:** Does not exist
   - **Resolution:** Keep fork's version

### Upstream Changes to Integrate

**Recent upstream commits (2 commits ahead):**
1. `b133755` - "Update forum data - 2026-02-16T14:00:40.753-05:00"
2. `223babc` - "Merge docs-v2-preview updates from fork (#753)"

**Analysis:**
- Upstream has already merged some fork changes (PR #753)
- Upstream has new forum data updates
- Upstream structure still uses `docs/` instead of `tasks/`

### Fork Changes to Preserve

**Recent fork commits (22 commits ahead):**
- Repository structure migration (`docs/` → `tasks/`)
- Pre-commit hook enhancements
- Test suite improvements
- Migration plan documentation
- New contribution guidelines
- Enhanced AI agent rules

---

## Merge Strategy Recommendations

### For Path 3 (Fork → Upstream)

**⚠️ CRITICAL:** This merge will require significant manual intervention.

#### Phase 1: Prepare Fork Branch
1. **Rebase fork on latest upstream:**
   ```bash
   git checkout docs-v2-preview
   git fetch upstream
   git rebase upstream/docs-v2-preview
   ```

2. **Resolve conflicts during rebase:**
   - Accept fork's structure (`tasks/` over `docs/`)
   - Move upstream files to correct locations
   - Merge content conflicts manually

#### Phase 2: Resolve Structural Conflicts
1. **For each `CONFLICT (file location)`:**
   - Accept fork's location (`tasks/` structure)
   - Move upstream file to fork's location
   - Update file content to reference new paths

2. **Update all references:**
   - Search for `docs/PLAN/` → replace with `tasks/plan/`
   - Search for `docs/CONTRIBUTING/` → replace with `tasks/CONTRIBUTING/`
   - Search for `docs/DEVELOPERS/` → replace with `tasks/DEVELOPERS/`
   - Update import paths, links, documentation

#### Phase 3: Resolve Content Conflicts
1. **For each content conflict:**
   - Manually merge changes
   - Preserve fork's enhancements (pre-commit hooks, structure)
   - Integrate upstream's new content (forum data, etc.)

2. **Test after each conflict resolution:**
   - Run pre-commit hooks
   - Run test suite
   - Verify structure compliance

#### Phase 4: Create Pull Request
1. **Push rebased branch:**
   ```bash
   git push origin docs-v2-preview --force-with-lease
   ```

2. **Create PR with detailed description:**
   - Explain structural changes (`docs/` → `tasks/`)
   - List all conflicts resolved
   - Provide migration guide for reviewers
   - Include test results

### Estimated Effort

- **Time Required:** 8-16 hours
- **Complexity:** High
- **Risk Level:** High (structural changes)
- **Files to Manually Resolve:** ~90+ files

---

## Issues That Will Occur

### 1. Structural Mismatch
**Problem:** Upstream uses `docs/` structure, fork uses `tasks/` structure

**Impact:**
- All 80+ file location conflicts
- Broken references in upstream files
- Navigation structure differences

**Solution:**
- Migrate upstream files to `tasks/` structure
- Update all references
- Update documentation

### 2. Configuration File Locations
**Problem:** Different locations for config files (root vs `tools/config/`)

**Impact:**
- `.prettierrc.yaml` location conflict
- `.speakeasy/` location conflict
- `cspell.json` location conflict

**Solution:**
- Follow migration plan: `.prettierrc.yaml` in root, `.speakeasy/` in `tools/config/`
- Update all references to config files

### 3. Test Suite Conflicts
**Problem:** Different test implementations in fork vs upstream

**Impact:**
- 7 test files with conflicts
- Different test utilities
- Potential test failures

**Solution:**
- Merge test suites
- Combine utilities
- Run full test suite after merge

### 4. Pre-commit Hook Conflicts
**Problem:** Enhanced hooks in fork vs different hooks in upstream

**Impact:**
- Different validation logic
- Different enforcement rules
- Potential commit blocking

**Solution:**
- Merge hook logic
- Preserve fork's deletion prevention
- Combine validation approaches

### 5. Documentation Conflicts
**Problem:** Different README and docs.json in fork vs upstream

**Impact:**
- Navigation structure differences
- Documentation structure differences
- User confusion

**Solution:**
- Preserve fork's comprehensive structure docs
- Integrate upstream's content updates
- Update navigation to match new structure

### 6. Missing Files in Upstream
**Problem:** Fork has files that don't exist in upstream

**Impact:**
- Migration plan files
- New contribution guidelines
- Enhanced AI rules

**Solution:**
- Add all new files
- Ensure they're in correct locations
- Update references

---

## Risk Assessment

### High Risk Areas

1. **Structural Changes (docs/ → tasks/)**
   - **Risk:** Breaking references, navigation issues
   - **Mitigation:** Comprehensive reference update, thorough testing

2. **Configuration File Locations**
   - **Risk:** Tools may not find configs in new locations
   - **Mitigation:** Update all tool references, test each tool

3. **Test Suite Integration**
   - **Risk:** Tests may fail after merge
   - **Mitigation:** Run full test suite, fix failures before PR

4. **Pre-commit Hook Changes**
   - **Risk:** Different validation may block legitimate commits
   - **Mitigation:** Test hooks thoroughly, document changes

### Medium Risk Areas

1. **Content Conflicts**
   - **Risk:** Loss of important changes
   - **Mitigation:** Careful manual review, preserve both sets of changes

2. **Documentation Updates**
   - **Risk:** Outdated or conflicting documentation
   - **Mitigation:** Review all docs, update references

---

## Success Criteria

### Before Creating PR

- [ ] All structural conflicts resolved (docs/ → tasks/)
- [ ] All content conflicts manually merged
- [ ] All references updated to new paths
- [ ] Pre-commit hooks pass
- [ ] Full test suite passes
- [ ] All configuration files in correct locations
- [ ] Documentation updated and accurate
- [ ] No broken links or imports
- [ ] Migration plan followed correctly

### After PR Merge

- [ ] Upstream structure matches fork structure
- [ ] All tools work with new structure
- [ ] All tests pass in upstream
- [ ] Documentation is accurate
- [ ] No regressions introduced

---

## Comprehensive Migration Plan: Upstream Repository Update

**⚠️ CRITICAL:** This section provides a detailed, step-by-step plan to safely migrate the upstream repository ([livepeer/docs](https://github.com/livepeer/docs/tree/docs-v2-preview)) to match the new structure **WITHOUT DELETING ANYTHING OR BREAKING ANYTHING**.

### Migration Principles

1. **ZERO DELETIONS:** All files must be moved, never deleted
2. **PRESERVE ALL CONTENT:** No content loss from either branch
3. **INCREMENTAL CHANGES:** Small, testable commits
4. **VERIFICATION AT EACH STEP:** Test after every change
5. **ROLLBACK READY:** Ability to revert at any point
6. **COMPREHENSIVE TESTING:** Full test suite before PR

### Pre-Migration Checklist

Before starting, ensure:

- [ ] Full backup of upstream `docs-v2-preview` branch
- [ ] Full backup of fork `docs-v2-preview` branch
- [ ] Test environment set up locally
- [ ] All team members notified of migration
- [ ] Migration window scheduled (low-traffic period)
- [ ] Rollback plan documented
- [ ] Communication plan ready

---

## Phase 1: Preparation & Safety Setup

### Task 1.1: Create Backup Branches

**Purpose:** Ensure we can rollback at any point

```bash
# In upstream repository (livepeer/docs)
git checkout docs-v2-preview
git branch docs-v2-preview-backup-$(date +%Y%m%d)
git push origin docs-v2-preview-backup-$(date +%Y%m%d)

# In fork repository
git checkout docs-v2-preview
git branch docs-v2-preview-backup-$(date +%Y%m%d)
git push origin docs-v2-preview-backup-$(date +%Y%m%d)
```

**Verification:**
- [ ] Backup branches created in both repos
- [ ] Backup branches pushed to remote
- [ ] Verify backup branches contain all files

### Task 1.2: Create Migration Branch

**Purpose:** Work in isolation without affecting main branch

```bash
# In fork repository
git checkout docs-v2-preview
git fetch upstream
git checkout -b migration/upstream-structure-update
git merge upstream/docs-v2-preview --no-commit --no-ff
```

**Verification:**
- [ ] Migration branch created
- [ ] Upstream changes fetched
- [ ] Merge initiated (conflicts expected)

### Task 1.3: Document Current State

**Purpose:** Create baseline for verification

```bash
# Create inventory of all files in upstream
find . -type f -not -path '*/node_modules/*' -not -path '*/.git/*' | sort > upstream-file-inventory-before.txt

# Create inventory of all files in fork
git checkout docs-v2-preview
find . -type f -not -path '*/node_modules/*' -not -path '*/.git/*' | sort > fork-file-inventory-before.txt

# Compare file counts
wc -l upstream-file-inventory-before.txt fork-file-inventory-before.txt
```

**Verification:**
- [ ] File inventories created
- [ ] File counts documented
- [ ] No files missing from inventories

---

## Phase 2: Structural Migration (NO DELETIONS)

### Task 2.1: Create New Directory Structure

**Purpose:** Create target directories before moving files

```bash
# Create all new directories (DO NOT delete old ones yet)
mkdir -p tasks/plan
mkdir -p tasks/plan/complete
mkdir -p tasks/plan/reports
mkdir -p tasks/plan/errors
mkdir -p tasks/plan/scripts
mkdir -p tasks/CONTRIBUTING
mkdir -p tasks/DEVELOPERS
mkdir -p tasks/DEVELOPERS/CONTEXT\ DATA
mkdir -p tasks/ABOUT
mkdir -p tasks/ABOUT/CONTEXT\ DATA
mkdir -p tasks/ORCHESTRATORS
mkdir -p tasks/ORCHESTRATORS/CONTEXT\ DATA
mkdir -p tools/scripts/audit
mkdir -p tools/scripts/generate
mkdir -p tools/scripts/test
mkdir -p tools/scripts/verify
mkdir -p tools/scripts/fetch
mkdir -p tools/config
mkdir -p tools/ai-rules
mkdir -p tools/wiki
mkdir -p api
mkdir -p contribute
```

**Verification:**
- [ ] All directories created
- [ ] Directory structure matches migration plan
- [ ] No existing directories deleted

### Task 2.2: Move Files from `docs/PLAN/` to `tasks/plan/`

**Purpose:** Migrate planning documents (80+ files)

**⚠️ CRITICAL:** Use `git mv` to preserve history, NOT delete + add

```bash
# Step 1: List all files to move
find docs/PLAN -type f | sort > files-to-move-plan.txt

# Step 2: Move files preserving git history
while IFS= read -r file; do
    # Get relative path from docs/PLAN/
    rel_path="${file#docs/PLAN/}"
    # Determine target location
    if [[ "$rel_path" == complete/* ]]; then
        target="tasks/plan/complete/${rel_path#complete/}"
    elif [[ "$rel_path" == reports/* ]]; then
        target="tasks/reports/${rel_path#reports/}"
    elif [[ "$rel_path" == errors/* ]]; then
        target="tasks/errors/${rel_path#errors/}"
    elif [[ "$rel_path" == scripts/* ]]; then
        target="tools/scripts/${rel_path#scripts/}"
    else
        target="tasks/plan/$rel_path"
    fi
    # Ensure target directory exists
    mkdir -p "$(dirname "$target")"
    # Move file preserving git history
    git mv "$file" "$target"
done < files-to-move-plan.txt
```

**Verification After Each File:**
- [ ] File moved (not deleted)
- [ ] File exists in new location
- [ ] Git history preserved (`git log --follow <new-path>`)
- [ ] No duplicate files created

**Final Verification:**
```bash
# Verify all files moved
find docs/PLAN -type f | wc -l  # Should be 0 after move
find tasks/plan -type f | wc -l  # Should match original count

# Verify no files lost
original_count=$(find docs/PLAN -type f 2>/dev/null | wc -l)
new_count=$(find tasks/plan -type f | wc -l)
echo "Original: $original_count, New: $new_count"
# Should match (or new_count should be higher if files were added)
```

### Task 2.3: Move Files from `docs/CONTRIBUTING/` to `tasks/CONTRIBUTING/`

**Purpose:** Migrate contribution documentation (3 files)

```bash
# Move files preserving git history
git mv docs/CONTRIBUTING/AGENT-INSTRUCTIONS.md tasks/CONTRIBUTING/AGENT-INSTRUCTIONS.md
git mv docs/CONTRIBUTING/GIT-HOOKS.md tasks/CONTRIBUTING/GIT-HOOKS.md
git mv docs/CONTRIBUTING/README.md tasks/CONTRIBUTING/README.md

# Verify
ls -la tasks/CONTRIBUTING/
git log --oneline --follow tasks/CONTRIBUTING/AGENT-INSTRUCTIONS.md | head -5
```

**Verification:**
- [ ] All 3 files moved
- [ ] Files exist in new location
- [ ] Git history preserved
- [ ] No files deleted

### Task 2.4: Move Files from `docs/DEVELOPERS/` to `tasks/DEVELOPERS/`

**Purpose:** Migrate developer documentation (20+ files)

```bash
# Move entire directory structure
git mv docs/DEVELOPERS tasks/DEVELOPERS

# Verify structure preserved
find tasks/DEVELOPERS -type f | wc -l
find docs/DEVELOPERS -type f 2>/dev/null | wc -l  # Should be 0
```

**Verification:**
- [ ] All files moved
- [ ] Directory structure preserved
- [ ] Git history preserved
- [ ] No files lost

### Task 2.5: Move Files from `docs/ABOUT/` to `tasks/ABOUT/`

**Purpose:** Migrate about section documentation (30+ files)

```bash
# Move entire directory structure
git mv docs/ABOUT tasks/ABOUT

# Verify
find tasks/ABOUT -type f | wc -l
```

**Verification:**
- [ ] All files moved
- [ ] Directory structure preserved
- [ ] Git history preserved

### Task 2.6: Move Files from `docs/ORCHESTRATORS/` to `tasks/ORCHESTRATORS/`

**Purpose:** Migrate orchestrator documentation (15+ files)

```bash
# Move entire directory structure
git mv docs/ORCHESTRATORS tasks/ORCHESTRATORS

# Verify
find tasks/ORCHESTRATORS -type f | wc -l
```

**Verification:**
- [ ] All files moved
- [ ] Directory structure preserved
- [ ] Git history preserved

### Task 2.7: Move Root-Level Files from `docs/` to `tasks/`

**Purpose:** Migrate remaining root-level docs files

```bash
# Move individual files
git mv docs/DRY-and-cleaner-recommendations.md tasks/DRY-and-cleaner-recommendations.md
git mv docs/DRY-tasks-feasibility-report.md tasks/DRY-tasks-feasibility-report.md
git mv docs/LIVEPEER-STUDIO-GAPS-AND-VERACITY.md tasks/LIVEPEER-STUDIO-GAPS-AND-VERACITY.md
git mv docs/LIVEPEER-STUDIO-V1-INVENTORY-AND-IA.md tasks/LIVEPEER-STUDIO-V1-INVENTORY-AND-IA.md
git mv docs/MDX-ERRORS-AND-FIXES-REPORT.md tasks/MDX-ERRORS-AND-FIXES-REPORT.md
# ... (continue for all root-level docs files)

# Verify
find docs -maxdepth 1 -type f 2>/dev/null | wc -l  # Should be 0 or minimal
```

**Verification:**
- [ ] All root-level files moved
- [ ] No files deleted
- [ ] Git history preserved

### Task 2.8: Move Scripts from `scripts/` to `tools/scripts/`

**Purpose:** Migrate scripts to organized structure (3+ files)

```bash
# List scripts to categorize
ls -la scripts/

# Move scripts to appropriate subdirectories
git mv scripts/audit-all-v2-pages.js tools/scripts/audit/audit-all-v2-pages.js
git mv scripts/test-v2-pages.js tools/scripts/test/test-v2-pages.js
git mv scripts/README-test-v2-pages.md tools/scripts/README-test-v2-pages.md
# ... (categorize and move each script)

# Verify
find scripts -type f 2>/dev/null | wc -l  # Should be 0
find tools/scripts -type f | wc -l  # Should match original count
```

**Verification:**
- [ ] All scripts moved
- [ ] Scripts organized by purpose
- [ ] Git history preserved
- [ ] No scripts deleted

### Task 2.9: Commit Structural Changes

**Purpose:** Save progress with clear commit message

```bash
# Stage all moves
git add -A

# Verify what will be committed
git status

# Commit with detailed message
git commit -m "Migrate: Move docs/ structure to tasks/ structure

- Moved docs/PLAN/ → tasks/plan/ (80+ files)
- Moved docs/CONTRIBUTING/ → tasks/CONTRIBUTING/ (3 files)
- Moved docs/DEVELOPERS/ → tasks/DEVELOPERS/ (20+ files)
- Moved docs/ABOUT/ → tasks/ABOUT/ (30+ files)
- Moved docs/ORCHESTRATORS/ → tasks/ORCHESTRATORS/ (15+ files)
- Moved scripts/ → tools/scripts/ (3+ files)
- All moves preserve git history (git mv)
- NO FILES DELETED - all files moved to new locations"
```

**Verification:**
- [ ] Commit created
- [ ] Commit message documents all moves
- [ ] No deletions in commit (check `git show --stat`)

---

## Phase 3: Update All References

### Task 3.1: Find All References to Old Paths

**Purpose:** Identify all files that reference old paths

```bash
# Search for references to docs/PLAN/
grep -r "docs/PLAN" . --exclude-dir=node_modules --exclude-dir=.git | cut -d: -f1 | sort -u > files-referencing-docs-plan.txt

# Search for references to docs/CONTRIBUTING/
grep -r "docs/CONTRIBUTING" . --exclude-dir=node_modules --exclude-dir=.git | cut -d: -f1 | sort -u > files-referencing-docs-contributing.txt

# Search for references to docs/DEVELOPERS/
grep -r "docs/DEVELOPERS" . --exclude-dir=node_modules --exclude-dir=.git | cut -d: -f1 | sort -u > files-referencing-docs-developers.txt

# Search for references to scripts/
grep -r "scripts/" . --exclude-dir=node_modules --exclude-dir=.git --include="*.js" --include="*.json" --include="*.md" --include="*.mdx" | cut -d: -f1 | sort -u > files-referencing-scripts.txt

# Combine all files that need updates
cat files-referencing-*.txt | sort -u > all-files-needing-updates.txt
```

**Verification:**
- [ ] All reference files identified
- [ ] No false positives (verify a few manually)
- [ ] List of files to update created

### Task 3.2: Update References in Each File

**Purpose:** Update all path references to new locations

**⚠️ CRITICAL:** Update files one at a time, test after each

```bash
# For each file in all-files-needing-updates.txt
while IFS= read -r file; do
    echo "Updating references in: $file"
    
    # Backup original
    cp "$file" "$file.backup"
    
    # Update references
    sed -i '' 's|docs/PLAN/|tasks/plan/|g' "$file"
    sed -i '' 's|docs/CONTRIBUTING/|tasks/CONTRIBUTING/|g' "$file"
    sed -i '' 's|docs/DEVELOPERS/|tasks/DEVELOPERS/|g' "$file"
    sed -i '' 's|docs/ABOUT/|tasks/ABOUT/|g' "$file"
    sed -i '' 's|docs/ORCHESTRATORS/|tasks/ORCHESTRATORS/|g' "$file"
    sed -i '' 's|scripts/audit|tools/scripts/audit|g' "$file"
    sed -i '' 's|scripts/test|tools/scripts/test|g' "$file"
    sed -i '' 's|scripts/verify|tools/scripts/verify|g' "$file"
    
    # Verify changes
    if diff -q "$file" "$file.backup" > /dev/null; then
        echo "  No changes needed"
        rm "$file.backup"
    else
        echo "  Updated - verify manually"
        # Show diff for review
        diff "$file.backup" "$file" | head -20
    fi
done < all-files-needing-updates.txt
```

**Verification After Each File:**
- [ ] References updated correctly
- [ ] No broken syntax introduced
- [ ] File still valid (check syntax if applicable)
- [ ] Backup created (for rollback if needed)

### Task 3.3: Update Configuration File References

**Purpose:** Update references to config files in new locations

```bash
# Update cspell.json references
grep -r "cspell.json" . --exclude-dir=node_modules --exclude-dir=.git | cut -d: -f1 | sort -u | while read file; do
    sed -i '' 's|cspell.json|tools/config/cspell.json|g' "$file"
done

# Update .prettierrc.yaml references (if any)
grep -r "\.prettierrc" . --exclude-dir=node_modules --exclude-dir=.git | cut -d: -f1 | sort -u | while read file; do
    # Note: .prettierrc.yaml stays in root, but update any references
    sed -i '' 's|tools/config/\.prettierrc|.prettierrc|g' "$file"
done

# Update .speakeasy/ references
grep -r "\.speakeasy" . --exclude-dir=node_modules --exclude-dir=.git | cut -d: -f1 | sort -u | while read file; do
    sed -i '' 's|\.speakeasy/|tools/config/.speakeasy/|g' "$file"
done
```

**Verification:**
- [ ] All config references updated
- [ ] Tools can still find configs
- [ ] No broken tool configurations

### Task 3.4: Update Import Statements

**Purpose:** Update import/require statements in code files

```bash
# Update JavaScript/JSX imports
find . -type f \( -name "*.js" -o -name "*.jsx" \) -not -path "*/node_modules/*" -not -path "*/.git/*" | while read file; do
    # Update require statements
    sed -i '' 's|require.*["'\'']\.\.\/docs\/PLAN|require("../../tasks/plan|g' "$file"
    sed -i '' 's|require.*["'\'']\.\.\/scripts|require("../../tools/scripts|g' "$file"
    
    # Update import statements
    sed -i '' 's|from.*["'\'']\.\.\/docs\/PLAN|from "../../tasks/plan|g' "$file"
    sed -i '' 's|from.*["'\'']\.\.\/scripts|from "../../tools/scripts|g' "$file"
done
```

**Verification:**
- [ ] All imports updated
- [ ] No broken import paths
- [ ] Syntax still valid

### Task 3.5: Update Documentation Links

**Purpose:** Update markdown links and documentation references

```bash
# Update markdown links
find . -type f \( -name "*.md" -o -name "*.mdx" \) -not -path "*/node_modules/*" -not -path "*/.git/*" | while read file; do
    # Update relative links
    sed -i '' 's|\[\(.*\)\](docs/PLAN/|[\1](tasks/plan/|g' "$file"
    sed -i '' 's|\[\(.*\)\](docs/CONTRIBUTING/|[\1](tasks/CONTRIBUTING/|g' "$file"
    sed -i '' 's|\[\(.*\)\](docs/DEVELOPERS/|[\1](tasks/DEVELOPERS/|g' "$file"
    sed -i '' 's|\[\(.*\)\](scripts/|[\1](tools/scripts/|g' "$file"
done
```

**Verification:**
- [ ] All markdown links updated
- [ ] Links still valid (test a few)
- [ ] No broken references

### Task 3.6: Commit Reference Updates

**Purpose:** Save all reference updates

```bash
git add -A
git commit -m "Update: Fix all references to new file locations

- Updated docs/PLAN/ → tasks/plan/ references
- Updated docs/CONTRIBUTING/ → tasks/CONTRIBUTING/ references
- Updated docs/DEVELOPERS/ → tasks/DEVELOPERS/ references
- Updated scripts/ → tools/scripts/ references
- Updated config file references
- Updated import statements
- Updated documentation links
- All references verified"
```

**Verification:**
- [ ] Commit created
- [ ] All references updated
- [ ] No broken links or imports

---

## Phase 4: Resolve Content Conflicts

### Task 4.1: Resolve Configuration File Conflicts

**Purpose:** Merge conflicting config files

#### 4.1.1: Resolve `.githooks/pre-commit` Conflict

```bash
# Open conflict file
git checkout --conflict=merge .githooks/pre-commit

# Manually merge:
# 1. Keep fork's deletion prevention logic
# 2. Keep fork's AI agent instructions
# 3. Integrate upstream's validation logic (if different)
# 4. Test the merged hook

# After manual merge:
git add .githooks/pre-commit
git commit -m "Merge: Combine pre-commit hooks from fork and upstream"
```

**Verification:**
- [ ] Hook merges both approaches
- [ ] Hook still works (test with a commit)
- [ ] No syntax errors

#### 4.1.2: Resolve `README.md` Conflict

```bash
# Manually merge README.md:
# 1. Keep fork's comprehensive structure documentation
# 2. Integrate upstream's content updates
# 3. Update all path references to new structure
# 4. Ensure all links work

git add README.md
git commit -m "Merge: Combine README from fork and upstream, update to new structure"
```

**Verification:**
- [ ] README includes both sets of information
- [ ] All links updated and working
- [ ] Structure documentation accurate

#### 4.1.3: Resolve `docs.json` Conflict

```bash
# Manually merge docs.json:
# 1. Keep fork's navigation structure
# 2. Integrate upstream's new pages (if any)
# 3. Update all paths to new structure
# 4. Verify navigation still works

git add docs.json
git commit -m "Merge: Combine docs.json navigation, update paths to new structure"
```

**Verification:**
- [ ] Navigation structure preserved
- [ ] All paths updated
- [ ] Navigation works (test with mint dev)

### Task 4.2: Resolve Test File Conflicts

**Purpose:** Merge test suites from both branches

```bash
# For each test file conflict:
# 1. Compare both versions
# 2. Identify unique tests in each
# 3. Combine all tests
# 4. Update paths to new structure
# 5. Test the merged file

# Example for tests/integration/browser.test.js:
git checkout --conflict=merge tests/integration/browser.test.js
# Manually merge, then:
git add tests/integration/browser.test.js
git commit -m "Merge: Combine browser test suites from fork and upstream"
```

**Verification:**
- [ ] All tests from both branches included
- [ ] Test paths updated
- [ ] Tests run successfully

### Task 4.3: Resolve Workflow Conflicts

**Purpose:** Merge GitHub Actions workflows

```bash
# For each workflow conflict:
# 1. Compare both versions
# 2. Keep fork's enhancements
# 3. Integrate upstream's updates
# 4. Update paths to new structure

git checkout --conflict=merge .github/workflows/test-suite.yml
# Manually merge, then:
git add .github/workflows/test-suite.yml
git commit -m "Merge: Combine test-suite workflow from fork and upstream"
```

**Verification:**
- [ ] Workflow merges both approaches
- [ ] Workflow paths updated
- [ ] Workflow syntax valid

---

## Phase 5: Configuration File Location Fixes

### Task 5.1: Move `.prettierrc.yaml` to Root

**Purpose:** Follow Mintlify convention

```bash
# Move from tools/config/ to root (if it exists there)
if [ -f tools/config/.prettierrc.yaml ]; then
    git mv tools/config/.prettierrc.yaml .prettierrc.yaml
    git commit -m "Fix: Move .prettierrc.yaml to root (Mintlify convention)"
fi

# Verify it's in root
ls -la .prettierrc.yaml
```

**Verification:**
- [ ] `.prettierrc.yaml` in root
- [ ] Prettier still works
- [ ] No broken references

### Task 5.2: Move `.speakeasy/` to `tools/config/.speakeasy/`

**Purpose:** Follow migration plan

```bash
# Move from root to tools/config/ (if it exists in root)
if [ -d .speakeasy ]; then
    mkdir -p tools/config
    git mv .speakeasy tools/config/.speakeasy
    git commit -m "Fix: Move .speakeasy/ to tools/config/.speakeasy/ (migration plan)"
fi

# Update workflow references
grep -r "\.speakeasy" .github/workflows/ | cut -d: -f1 | sort -u | while read file; do
    sed -i '' 's|\.speakeasy/|tools/config/.speakeasy/|g' "$file"
done
git add .github/workflows/
git commit -m "Update: Fix .speakeasy/ references in workflows"
```

**Verification:**
- [ ] `.speakeasy/` in `tools/config/`
- [ ] Workflow references updated
- [ ] Speakeasy still works

### Task 5.3: Ensure `cspell.json` in `tools/config/`

**Purpose:** Follow migration plan

```bash
# Move from root to tools/config/ (if it exists in root)
if [ -f cspell.json ] && [ ! -f tools/config/cspell.json ]; then
    mkdir -p tools/config
    git mv cspell.json tools/config/cspell.json
    git commit -m "Fix: Move cspell.json to tools/config/ (migration plan)"
fi

# Update references
grep -r "cspell.json" package.json .github/workflows/ 2>/dev/null | cut -d: -f1 | sort -u | while read file; do
    sed -i '' 's|cspell.json|tools/config/cspell.json|g' "$file"
done
git add package.json .github/workflows/
git commit -m "Update: Fix cspell.json references"
```

**Verification:**
- [ ] `cspell.json` in `tools/config/`
- [ ] References updated
- [ ] Spell checking still works

### Task 5.4: Ensure `.cursorrules` in Root

**Purpose:** Follow Cursor IDE convention

```bash
# Move from tools/ai-rules/ to root (if it exists there)
if [ -f tools/ai-rules/.cursorrules ] && [ ! -f .cursorrules ]; then
    git mv tools/ai-rules/.cursorrules .cursorrules
    git commit -m "Fix: Move .cursorrules to root (Cursor IDE convention)"
fi

# Verify
ls -la .cursorrules
```

**Verification:**
- [ ] `.cursorrules` in root
- [ ] Cursor IDE still recognizes it

---

## Phase 6: Final Verification & Testing

### Task 6.1: Verify No Files Lost

**Purpose:** Ensure zero file loss

```bash
# Create inventory of all files after migration
find . -type f -not -path '*/node_modules/*' -not -path '*/.git/*' | sort > file-inventory-after.txt

# Compare with original
diff upstream-file-inventory-before.txt file-inventory-after.txt > file-diff.txt

# Count files
echo "Before: $(wc -l < upstream-file-inventory-before.txt)"
echo "After: $(wc -l < file-inventory-after.txt)"

# Check for any files that disappeared
comm -23 <(sort upstream-file-inventory-before.txt) <(sort file-inventory-after.txt) > missing-files.txt
if [ -s missing-files.txt ]; then
    echo "WARNING: Files may be missing:"
    cat missing-files.txt
else
    echo "SUCCESS: No files missing"
fi
```

**Verification:**
- [ ] File count matches or is higher (new files added)
- [ ] No files in missing-files.txt
- [ ] All original files accounted for

### Task 6.2: Run Pre-commit Hooks

**Purpose:** Verify hooks work with new structure

```bash
# Test pre-commit hook
./.githooks/pre-commit

# Or make a test commit
git commit --allow-empty -m "Test: Verify pre-commit hooks work"
```

**Verification:**
- [ ] Pre-commit hooks run successfully
- [ ] No false positives
- [ ] Hooks find files in new locations

### Task 6.3: Run Full Test Suite

**Purpose:** Verify all tests pass

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run specific test suites
npm run test:style
npm run test:mdx
npm run test:spell
npm run test:quality
npm run test:links
npm run test:browser
```

**Verification:**
- [ ] All tests pass
- [ ] No test failures
- [ ] Test paths updated correctly

### Task 6.4: Verify Mintlify Rendering

**Purpose:** Ensure documentation still renders

```bash
# Start Mintlify dev server
mint dev

# In another terminal, check for errors
# Navigate through pages
# Check browser console for errors
# Verify assets load
```

**Verification:**
- [ ] Mintlify starts without errors
- [ ] All pages render
- [ ] Navigation works
- [ ] Assets load correctly
- [ ] No 404 errors

### Task 6.5: Verify All Links Work

**Purpose:** Check for broken links

```bash
# Use link checker (if available)
# Or manually test key links

# Check internal links in docs
grep -r "\[.*\](.*)" v2/pages/ snippets/pages/ --include="*.mdx" | grep -v "http" | while read line; do
    # Extract link and verify it exists
    # (implement link checking logic)
done
```

**Verification:**
- [ ] All internal links work
- [ ] No broken references
- [ ] Navigation paths correct

### Task 6.6: Verify Git History Preserved

**Purpose:** Ensure file history intact

```bash
# Check git history for moved files
git log --oneline --follow tasks/plan/migration-plan.md | head -10
git log --oneline --follow tools/scripts/test/test-v2-pages.js | head -10

# Verify history goes back to original location
git log --all --full-history --oneline -- tasks/plan/migration-plan.md | head -20
```

**Verification:**
- [ ] Git history preserved
- [ ] Can trace files back to original locations
- [ ] No history loss

---

## Phase 7: Final Commit & PR Preparation

### Task 7.1: Create Final Migration Commit

**Purpose:** Document complete migration

```bash
git add -A
git status  # Review all changes

git commit -m "Complete: Migrate repository structure from docs/ to tasks/

MIGRATION SUMMARY:
- Moved 150+ files from docs/ to tasks/ structure
- Updated 100+ file references
- Resolved 90+ merge conflicts
- Preserved all git history (git mv)
- ZERO FILES DELETED - all files moved
- All tests passing
- All hooks working
- Mintlify rendering verified

STRUCTURAL CHANGES:
- docs/PLAN/ → tasks/plan/ (80+ files)
- docs/CONTRIBUTING/ → tasks/CONTRIBUTING/ (3 files)
- docs/DEVELOPERS/ → tasks/DEVELOPERS/ (20+ files)
- docs/ABOUT/ → tasks/ABOUT/ (30+ files)
- docs/ORCHESTRATORS/ → tasks/ORCHESTRATORS/ (15+ files)
- scripts/ → tools/scripts/ (3+ files)

CONFIGURATION FIXES:
- .prettierrc.yaml: root (Mintlify convention)
- .speakeasy/: tools/config/.speakeasy/ (migration plan)
- cspell.json: tools/config/ (migration plan)
- .cursorrules: root (Cursor IDE convention)

VERIFICATION:
- ✅ All files accounted for (zero loss)
- ✅ All tests passing
- ✅ All hooks working
- ✅ Mintlify rendering correctly
- ✅ All links working
- ✅ Git history preserved"
```

### Task 7.2: Create Comprehensive PR Description

**Purpose:** Document migration for reviewers

Create PR description with:

1. **Executive Summary**
   - What changed (structure migration)
   - Why (migration plan, organization)
   - Impact (no deletions, all files moved)

2. **Detailed Changes List**
   - All directories moved
   - All files moved (with counts)
   - All references updated

3. **Verification Results**
   - Test results
   - Hook verification
   - Mintlify verification
   - Link checking results

4. **Migration Guide**
   - How to find files in new locations
   - Path mapping (old → new)
   - Reference update guide

5. **Rollback Plan**
   - How to revert if needed
   - Backup branch locations

### Task 7.3: Push Migration Branch

**Purpose:** Make PR available for review

```bash
# Push migration branch
git push origin migration/upstream-structure-update

# Create PR on GitHub
# Link to comprehensive PR description
# Request review from team
```

---

## Rollback Plan

If issues are discovered:

### Immediate Rollback

```bash
# Switch back to original branch
git checkout docs-v2-preview

# Or restore from backup
git checkout docs-v2-preview-backup-YYYYMMDD
git push origin docs-v2-preview --force
```

### Partial Rollback

```bash
# Revert specific commits
git revert <commit-hash>

# Or restore specific files
git checkout docs-v2-preview-backup-YYYYMMDD -- <file-path>
```

---

## Communication Plan

### Before Migration

- [ ] Notify team of migration window
- [ ] Post in team chat/forum
- [ ] Update project board
- [ ] Schedule migration during low-traffic period

### During Migration

- [ ] Post status updates
- [ ] Document any issues encountered
- [ ] Keep team informed of progress

### After Migration

- [ ] Announce completion
- [ ] Share migration summary
- [ ] Provide path mapping guide
- [ ] Monitor for issues
- [ ] Be available for questions

---

## Success Metrics

### Migration Success Criteria

- [ ] **Zero file loss:** All files from upstream preserved
- [ ] **Zero deletions:** All files moved, none deleted
- [ ] **All tests passing:** Full test suite green
- [ ] **All hooks working:** Pre-commit hooks functional
- [ ] **Mintlify working:** Documentation renders correctly
- [ ] **All links working:** No broken references
- [ ] **Git history preserved:** Can trace file history
- [ ] **Team notified:** Everyone aware of changes
- [ ] **Documentation updated:** README and guides accurate
- [ ] **PR approved:** Team reviews and approves

### Post-Migration Monitoring

Monitor for 1-2 weeks after merge:

- [ ] No broken links reported
- [ ] No missing files reported
- [ ] No tool failures
- [ ] No test failures
- [ ] Team adapting to new structure
- [ ] Documentation helpful

---

## Next Steps

1. ✅ **COMPLETED:** Merge docs-v2-test → docs-v2-preview (Path 1) - Done 2026-02-17
2. ✅ **COMPLETED:** Push docs-v2-preview → origin (Path 2) - Done 2026-02-17
3. ⚠️ **PENDING:** Execute comprehensive upstream migration (Path 3) - **Follow detailed plan below**

### Current Status Summary

**Completed Operations:**
- ✅ Local branch `docs-v2-preview` now includes all changes from `docs-v2-test`
- ✅ Fork `origin/docs-v2-preview` is synced with local branch
- ✅ Both branches at commit `9eefa87` ("whitelist")

**Remaining Work:**
- ⚠️ **Upstream Migration:** Fork is 160 commits ahead of upstream
- ⚠️ **Structural Conflicts:** 302+ file differences to resolve
- ⚠️ **Migration Plan:** Comprehensive 7-phase plan ready (see below)

### Recommended Approach for Path 3

1. **Review this migration plan** with team
2. **Schedule migration window** (low-traffic period)
3. **Set up test environment** to validate approach
4. **Execute migration incrementally** (one phase at a time)
5. **Test thoroughly** after each phase
6. **Document all changes** for PR reviewers
7. **Create comprehensive PR** with full migration details
8. **Monitor post-merge** for any issues

---

## Appendix: File Conflict Summary

### Total Conflicts: 90+

**By Type:**
- Content conflicts: 8 files
- Test file conflicts: 7 files
- Structural conflicts: 80+ files
- Modify/delete conflicts: 2 files

**By Category:**
- Configuration: 5 files
- Documentation: 3 files
- Tests: 7 files
- Structure: 80+ files
- Hooks: 3 files
- Workflows: 2 files

---

**Report Generated:** 2026-02-17  
**Analyst:** AI Assistant  
**Repository:** livepeer-docs-fork  
**Branches Analyzed:** docs-v2-test, docs-v2-preview, origin/docs-v2-preview, upstream/docs-v2-preview
