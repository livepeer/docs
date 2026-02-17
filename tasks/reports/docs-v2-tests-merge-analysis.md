# Merge Conflict Analysis: docs-v2-tests → docs-v2-test

**Date:** 2026-02-17  
**Source Branch:** `origin/docs-v2-tests`  
**Target Branch:** `docs-v2-test` (current)  
**Common Ancestor:** `488e5e2` (Backup: Component library with duplicate headers removed)

**⚠️ SOURCE OF TRUTH:** This analysis follows [README.md](README.md) structure rules (lines 67-71) which specify:
- `tasks/plan/` (lowercase) - Planning documents & task specifications
- `tasks/reports/` (lowercase) - Task outputs & audit reports  
- `tasks/scripts/` (lowercase) - Task execution scripts
- `tasks/errors/` (lowercase) - Error documentation & troubleshooting

**All merge recommendations align with README.md structure requirements.**

---

## Executive Summary

This report analyzes the merge between `docs-v2-tests` (remote) and `docs-v2-test` (local). The branches have **diverged significantly** with **302 file changes** including:

- **Major structural reorganization**: Remote moved `tasks/` → `docs/`, while local kept `tasks/` and added root-level directories
- **New content**: Remote has product documentation (Stream.place, Frameworks, Daydream) and new PLAN files
- **Configuration conflicts**: Different approaches to structure enforcement (`.whitelist` vs `docs/` organization)
- **File deletions**: Remote deleted files that local branch has at root level

**Recommended Strategy:** Preserve local structure (root-level organization) while merging genuine content from remote.

**⚠️ IMPORTANT NOTE:** 
- **README.md** (source of truth) specifies `tasks/plan/` (lowercase) as the final structure (line 68)
- The migration plan (`tasks/plan/migration-plan.md`) shows `docs/` in the structure diagram (Section 1, line 141), but this is for a **future consideration** to move v1/v2 documentation there (Phase 10)
- The migration plan explicitly states:
  - **DO NOT create `docs/` directory** in current migration (Section 4.11, line 722)
  - **`tasks/` stays at root** (Section 4.10)
  - **v1/v2 stay at root** (Section 4.11, line 680)

The remote branch's use of `docs/` to replace `tasks/` conflicts with both README.md and the migration plan. We must preserve `tasks/` at root and migrate to `tasks/plan/` structure per README.md.

---

## 1. Structural Conflicts

### 1.1 Directory Structure Divergence

#### Current Branch (`docs-v2-test`) Structure:
```
/
├── tasks/              # Planning and task files (root level)
├── ai-tools/           # AI tool guides (root level)
├── api/                # API specs (root level)
├── contribute/         # Contribution docs (root level)
├── snippets/           # Mintlify snippets
├── v2/                 # Documentation pages
└── .whitelist          # Structure enforcement
```

#### Remote Branch (`docs-v2-tests`) Structure:
```
/
├── docs/               # Renamed from tasks/ (R100 rename)
│   ├── ABOUT/
│   ├── CONTRIBUTING/
│   ├── DEVELOPERS/
│   ├── ORCHESTRATORS/
│   └── PLAN/
├── snippets/           # Mintlify snippets (same)
├── v2/                 # Documentation pages (same)
└── (no .whitelist)
```

**Conflict Resolution:**
- ✅ **KEEP** local structure (`tasks/` at root, not `docs/`) - **Matches README.md line 67 and migration plan Section 4.10**
- ✅ **PRESERVE** root-level `ai-tools/`, `api/`, `contribute/` directories - **Matches README.md lines 22-32 and migration plan Section 1**
- ✅ **MIGRATE** content from `docs/` → `tasks/plan/` (lowercase per README.md line 68) - **Matches README.md structure**
- ✅ **KEEP** `.whitelist` file for structure enforcement - **Matches README.md line 91 and migration plan Section 2.1**
- ⚠️ **NOTE:** README.md specifies `tasks/plan/` (lowercase) as final structure - migrate directly to this, not `tasks/PLAN/`

---

## 2. File-Level Conflicts

### 2.1 Renamed Files (R100 - 100% similarity renames)

**Remote renamed:** `tasks/*` → `docs/*` (approximately 200+ files)

**Resolution Strategy:**
1. **Ignore the rename** - Git will see these as deletions in remote and additions in local
2. **Manually merge content** from `docs/` versions into `tasks/` versions where they differ
3. **Preserve local structure** - Keep files in `tasks/` directory

**Key Renamed Directories:**
- `tasks/ABOUT/` → `docs/ABOUT/` → **Keep as `tasks/ABOUT/`** (preserve current structure)
- `tasks/CONTRIBUTING/` → `docs/CONTRIBUTING/` → **Keep as `tasks/CONTRIBUTING/`** (preserve current structure)
- `tasks/DEVELOPERS/` → `docs/DEVELOPERS/` → **Keep as `tasks/DEVELOPERS/`** (preserve current structure)
- `tasks/ORCHESTRATORS/` → `docs/ORCHESTRATORS/` → **Keep as `tasks/ORCHESTRATORS/`** (preserve current structure)
- `tasks/PLAN/` → `docs/PLAN/` → **Migrate to `tasks/plan/`** (per README.md line 68 - lowercase structure)

### 2.2 Deleted Files in Remote (Present in Local)

**Files remote deleted but local has:**
```
D  .cursor/rules/tasks-directory-structure.mdc
D  .whitelist
D  DIFF-REPORT-SUMMARY.md
D  Makefile
D  ai-tools/claude-code.mdx
D  ai-tools/cursor.mdx
D  ai-tools/windsurf.mdx
D  api/ai-worker.yaml
D  api/cli-http.yaml
D  api/studio.yaml
D  contribute/CONTRIBUTING.md
D  tasks/PLAN/migration-plan.md
```

**Resolution Strategy:**
- ✅ **KEEP** all these files (they're part of the new structure)
- ✅ **PRESERVE** `.whitelist` (structure enforcement)
- ✅ **PRESERVE** `ai-tools/`, `api/`, `contribute/` directories
- ✅ **PRESERVE** `tasks/PLAN/migration-plan.md` (critical planning doc)

### 2.3 New Files in Remote (Not in Local)

**New content to merge:**
```
A  docs/Makefile                    → Move to root (if needed) or ignore
A  docs/PLAN/11-mintlify-ai-investigation.md
A  docs/PLAN/16-rfp-goals-assessment.md
A  docs/PLAN/22-page-imports-check-script.md
A  docs/PLAN/23-glossary-maintenance.md
A  docs/PLAN/24-audit-repo-files-removal.md
A  docs/PLAN/25-fill-references-section.md
A  docs/PLAN/26-internal-tab-link.md
A  docs/PLAN/27-pre-commit-full-browser-verification.md
A  docs/PLAN/28-platform-ownership-and-studio-fill.md
A  docs/PLAN/AI-TASK-LIST-GAP-ANALYSIS-AND-PLAN.md
A  docs/PLAN/complete/01-components-consolidate.md
A  docs/PLAN/complete/02-components-audit-unused.md
A  docs/PLAN/complete/05-homogenise-styling.md
A  docs/PLAN/complete/10-documentation-guide-resources.md
A  docs/PLAN/complete/13-audit-repeated-content.md
A  docs/PLAN/complete/14-audit-v1-to-v2-coverage.md
A  docs/PLAN/complete/15-audit-v2-missing-incomplete.md
A  docs/PLAN/reports/16-rfp-notion-gaps-and-incomplete.md
A  docs/PLAN/rfp/01-stakeholder-groups.md
```

**Resolution Strategy:**
- ✅ **MIGRATE** all `docs/PLAN/*` → `tasks/plan/*` (per README.md line 68 - lowercase structure)
- ⚠️ **NOTE:** README.md specifies `tasks/plan/` (lowercase) as the final structure - migrate directly to this structure
- ⚠️ **NOTE:** Current local branch has `tasks/PLAN/` (uppercase) - may need to reorganize existing files to lowercase
- ✅ **PRESERVE** new PLAN files (genuine work)
- ✅ **CHECK** for duplicates with existing `tasks/PLAN/` or `tasks/plan/` files
- ⚠️ **REVIEW** `docs/Makefile` - may conflict with local structure

### 2.4 Modified Files (Content Conflicts)

**Files modified in both branches:**
```
M  .cursorrules
M  .githooks/pre-commit
M  .githooks/verify-browser.js
M  .githooks/verify.sh
M  .github/AGENTS.md
M  .github/augment-instructions.md
M  .github/copilot-instructions.md
M  .github/workflows/test-suite.yml
M  .github/workflows/test-v2-pages.yml
M  .gitignore
M  .mintignore
M  CONTRIBUTING.md
M  README.md
M  docs.json
```

**Resolution Strategy:**
- ⚠️ **MANUAL MERGE REQUIRED** - These will have 3-way merge conflicts
- ✅ **PREFER** local versions for structure-related changes
- ✅ **MERGE** content from remote for genuine improvements
- 🔍 **REVIEW** each file individually

---

## 3. New Content in Remote Branch

### 3.1 Product Documentation

**New product pages:**
- `v2/pages/010_products/products/daydream/overview/overview.mdx`
- `v2/pages/010_products/products/daydream/overview/quickstart.mdx`
- `v2/pages/010_products/products/frameworks/overview/overview.mdx`
- `v2/pages/010_products/products/frameworks/overview/quickstart.mdx`
- Stream.place updates (renamed `streamplace-funding-model` → `streamplace-funding`)

**Resolution Strategy:**
- ✅ **ACCEPT** all new product documentation (genuine content)
- ✅ **PRESERVE** as-is (no structural conflicts)
- ✅ **UPDATE** `docs.json` navigation (already done in remote)

### 3.2 Documentation Updates

**Navigation changes in `docs.json`:**
- Updated Daydream section with overview and quickstart
- Updated Frameworks section with overview and quickstart
- Renamed `streamplace-funding-model` → `streamplace-funding`
- Updated gateway quickstart paths
- Updated orchestrator paths

**Resolution Strategy:**
- ✅ **ACCEPT** navigation updates (genuine improvements)
- ⚠️ **VERIFY** file paths exist in local branch
- ✅ **MERGE** `docs.json` changes carefully

---

## 4. Configuration Conflicts

### 4.1 Structure Enforcement

**Local:** `.whitelist` file for root structure enforcement  
**Remote:** No `.whitelist`, different structure approach

**Resolution:**
- ✅ **KEEP** `.whitelist` (part of new structure)
- ✅ **PRESERVE** root-level organization

### 4.2 Git Hooks

**Both branches modified:**
- `.githooks/pre-commit`
- `.githooks/verify-browser.js`
- `.githooks/verify.sh`

**Resolution:**
- ⚠️ **MANUAL MERGE** - Compare functionality
- ✅ **PREFER** local if it enforces new structure
- ✅ **MERGE** improvements from remote

### 4.3 AI Configuration Files

**Both branches modified:**
- `.cursorrules`
- `.github/AGENTS.md`
- `.github/augment-instructions.md`
- `.github/copilot-instructions.md`

**Resolution:**
- ⚠️ **MANUAL MERGE** - Compare rules and instructions
- ✅ **PRESERVE** local structure rules
- ✅ **MERGE** content improvements from remote

---

## 5. Merge Strategy

### Phase 1: Preparation

1. **Backup current branch:**
   ```bash
   git branch backup-docs-v2-test-$(date +%Y%m%d)
   ```

2. **Stash or commit current changes:**
   ```bash
   git add -A
   git commit -m "WIP: Save current state before merge"
   ```

### Phase 2: Merge Execution

**Option A: Manual Merge (Recommended)**
```bash
# Create merge branch
git checkout -b merge-docs-v2-tests

# Attempt merge (will have conflicts)
git merge origin/docs-v2-tests --no-commit

# Resolve conflicts using strategy below
```

**Option B: Cherry-pick Specific Commits**
```bash
# Identify commits with genuine content
git log origin/docs-v2-tests --oneline --since="2026-01-01"

# Cherry-pick product documentation commits
git cherry-pick <commit-hash>
```

### Phase 3: Conflict Resolution

#### 3.1 Structural Conflicts

**For all `tasks/` → `docs/` renames:**
1. **Ignore the rename** - Git will show as delete/add
2. **Keep local structure** - Files stay in `tasks/` per README.md line 67
3. **Migrate to lowercase structure** - Use `tasks/plan/` (not `tasks/PLAN/`) per README.md line 68
4. **Merge content** where files differ

**Script to help:**
```bash
# Find files that were renamed
git diff --name-status HEAD origin/docs-v2-tests | grep "^R100" | \
  awk '{print $3}' | while read file; do
    # Convert docs/PLAN/ to tasks/plan/ (lowercase per README.md line 68)
    local_file=$(echo "$file" | sed 's|^docs/PLAN/|tasks/plan/|' | sed 's|^docs/|tasks/|')
    if [ -f "$local_file" ]; then
      echo "Merge: $file → $local_file"
      # Manual merge required
    else
      echo "Copy: $file → $local_file"
      git show origin/docs-v2-tests:"$file" > "$local_file"
    fi
  done
```

#### 3.2 Content Conflicts

**For modified files:**
1. **Open conflict file**
2. **Compare** local vs remote changes
3. **Preserve** structure-related changes from local
4. **Merge** content improvements from remote
5. **Test** after each merge

#### 3.3 New Files Migration

**For new files in `docs/`:**
```bash
# Migrate new PLAN files directly to tasks/plan/ (lowercase per README.md line 68)
git show origin/docs-v2-tests:docs/PLAN/11-mintlify-ai-investigation.md > \
  tasks/plan/11-mintlify-ai-investigation.md

# Repeat for all new files, adjusting paths
# NOTE: README.md specifies tasks/plan/ (lowercase) as the final structure
```

### Phase 4: Verification

1. **Check structure:**
   ```bash
   # Verify whitelist compliance
   .githooks/pre-commit
   ```

2. **Test navigation:**
   ```bash
   # Verify docs.json is valid
   # Check all referenced files exist
   ```

3. **Run tests:**
   ```bash
   npm test
   # Or equivalent test suite
   ```

---

## 6. Detailed File-by-File Resolution

### 6.1 Critical Files (Manual Review Required)

| File | Local Status | Remote Status | Resolution |
|------|-------------|---------------|------------|
| `.whitelist` | ✅ Present | ❌ Deleted | **KEEP** local version |
| `tasks/PLAN/migration-plan.md` or `tasks/plan/migration-plan.md` | ✅ Present | ❌ Deleted | **KEEP** local, merge any updates (may need to move to `tasks/plan/` per README.md) |
| `ai-tools/*.mdx` | ✅ Present | ❌ Deleted | **KEEP** local versions |
| `api/*.yaml` | ✅ Present | ❌ Deleted | **KEEP** local versions |
| `contribute/CONTRIBUTING.md` | ✅ Present | ❌ Deleted | **KEEP** local version |
| `docs.json` | ✅ Modified | ✅ Modified | **MANUAL MERGE** - preserve navigation updates |
| `.cursorrules` | ✅ Modified | ✅ Modified | **MANUAL MERGE** - preserve structure rules |
| `.githooks/pre-commit` | ✅ Modified | ✅ Modified | **MANUAL MERGE** - preserve structure checks |

### 6.2 New Content to Accept

| File/Directory | Action | Notes |
|----------------|--------|-------|
| `v2/pages/010_products/products/daydream/overview/*` | ✅ Accept | New product documentation |
| `v2/pages/010_products/products/frameworks/overview/*` | ✅ Accept | New product documentation |
| `docs/PLAN/16-rfp-goals-assessment.md` | ✅ Migrate → `tasks/plan/` | New planning doc (per README.md line 68) |
| `docs/PLAN/22-28-*.md` | ✅ Migrate → `tasks/plan/` | New task briefs (per README.md line 68) |
| `docs/PLAN/complete/*.md` | ✅ Migrate → `tasks/plan/complete/` | Completed task docs (per README.md structure) |
| `docs/PLAN/reports/*.md` | ✅ Migrate → `tasks/reports/` | New reports (per README.md line 69) |

### 6.3 Files to Ignore (Remote Deletions)

These files were deleted in remote but should be kept in local:
- All `ai-tools/*.mdx` files
- All `api/*.yaml` files
- `contribute/CONTRIBUTING.md`
- `.whitelist`
- `tasks/PLAN/migration-plan.md`

**Action:** Keep all local versions, ignore remote deletions.

---

## 7. Risk Assessment

### High Risk Areas

1. **Structure Enforcement**
   - **Risk:** Remote deleted `.whitelist`, may break pre-commit hooks
   - **Mitigation:** Keep local `.whitelist`, test hooks after merge

2. **Navigation Configuration**
   - **Risk:** `docs.json` conflicts may break navigation
   - **Mitigation:** Manual merge, verify all paths exist

3. **Git Hooks**
   - **Risk:** Conflicting hook logic may break CI/CD
   - **Mitigation:** Compare both versions, merge carefully

### Medium Risk Areas

1. **PLAN Files**
   - **Risk:** Duplicate or conflicting planning documents
   - **Mitigation:** Review each file, merge content where appropriate

2. **AI Configuration**
   - **Risk:** Conflicting rules may confuse AI assistants
   - **Mitigation:** Preserve local structure rules, merge content rules

### Low Risk Areas

1. **Product Documentation**
   - **Risk:** Minimal - new content, no conflicts
   - **Mitigation:** Accept as-is

2. **v2 Pages**
   - **Risk:** Minimal - mostly additions
   - **Mitigation:** Accept new pages, verify paths

---

## 8. Recommended Merge Process

### Step-by-Step Execution

1. **Create backup branch**
   ```bash
   git branch backup-before-merge-$(date +%Y%m%d-%H%M%S)
   ```

2. **Commit current work**
   ```bash
   git add -A
   git commit -m "Save state before merging docs-v2-tests"
   ```

3. **Start merge (no commit)**
   ```bash
   git merge origin/docs-v2-tests --no-commit --no-ff
   ```

4. **Resolve structural conflicts first**
   - Keep all `tasks/` directory structure
   - Keep `.whitelist` file
   - Keep `ai-tools/`, `api/`, `contribute/` at root

5. **Migrate new content**
   - Copy new PLAN files: `docs/PLAN/*` → `tasks/plan/*` (lowercase per README.md line 68)
   - **NOTE:** README.md specifies `tasks/plan/` (lowercase) as the final structure - migrate directly to this
   - If local has `tasks/PLAN/` (uppercase), reorganize to `tasks/plan/` (lowercase) to match README.md
   - Copy reports: `docs/PLAN/reports/*` → `tasks/reports/*` (per README.md line 69)
   - Accept new product pages in `v2/pages/`
   - Update `docs.json` navigation carefully

6. **Resolve content conflicts**
   - Manually merge `.cursorrules`
   - Manually merge `.githooks/*`
   - Manually merge `.github/*` config files
   - Manually merge `docs.json`

7. **Verify structure**
   ```bash
   .githooks/pre-commit  # Should pass
   ```

8. **Test navigation**
   - Verify `docs.json` is valid JSON
   - Check all referenced files exist
   - Test Mintlify build if possible

9. **Commit merge**
   ```bash
   git add -A
   git commit -m "Merge docs-v2-tests: preserve structure, merge content"
   ```

---

## 9. Post-Merge Checklist

- [ ] All `tasks/` files remain in `tasks/` (not moved to `docs/`) - per README.md line 67
- [ ] `.whitelist` file is present and correct - per README.md line 91
- [ ] `ai-tools/`, `api/`, `contribute/` directories exist at root - per README.md lines 22-32
- [ ] New PLAN files migrated to `tasks/plan/` (lowercase) - per README.md line 68
- [ ] Reports migrated to `tasks/reports/` (lowercase) - per README.md line 69
- [ ] Structure matches README.md exactly (source of truth)
- [ ] New product pages present in `v2/pages/`
- [ ] `docs.json` navigation updated and valid
- [ ] Pre-commit hooks pass
- [ ] No duplicate files (check `tasks/plan/` vs `docs/PLAN/` and handle `tasks/PLAN/` if it exists)
- [ ] Git hooks functional
- [ ] AI config files merged correctly
- [ ] All tests pass

---

## 10. Alternative: Selective Cherry-Pick

If full merge is too complex, consider cherry-picking specific commits:

```bash
# Find commits with product documentation
git log origin/docs-v2-tests --oneline --grep="products\|Daydream\|Frameworks"

# Find commits with PLAN files
git log origin/docs-v2-tests --oneline --grep="PLAN\|task"

# Cherry-pick specific commits
git cherry-pick <commit-hash>
```

**Pros:**
- More control over what gets merged
- Easier to review each change
- Less risk of structural conflicts

**Cons:**
- More manual work
- May miss some improvements
- Need to identify all relevant commits

---

## 11. Summary

### Key Decisions

1. ✅ **Preserve local structure** - Keep `tasks/` at root, not `docs/` (matches README.md line 67)
2. ✅ **Keep root-level directories** - `ai-tools/`, `api/`, `contribute/` (matches README.md lines 22-32)
3. ✅ **Preserve `.whitelist`** - Structure enforcement (matches README.md line 91)
4. ✅ **Accept new content** - Product docs, new PLAN files
5. ⚠️ **Manual merge required** - Config files, hooks, `docs.json`
6. ✅ **Migrate to `tasks/plan/` (lowercase)** - Per README.md line 68 (source of truth), not `tasks/PLAN/`
7. ⚠️ **Reorganize if needed** - If local has `tasks/PLAN/` (uppercase), reorganize to `tasks/plan/` to match README.md

### Estimated Effort

- **Structural conflicts:** Low (keep local structure)
- **Content migration:** Medium (copy new files, adjust paths)
- **Manual merges:** High (10-15 files need careful review)
- **Testing:** Medium (verify structure, navigation, hooks)

### Recommended Approach

**Use Option A (Manual Merge)** with careful attention to:
1. Ignoring structural renames (`docs/` → `tasks/`)
2. Keeping local structure files (`.whitelist`, root dirs)
3. Migrating new content to correct locations
4. Manually merging configuration files

---

## 12. Next Steps

1. Review this report
2. Decide on merge strategy (full merge vs cherry-pick)
3. Create backup branch
4. Execute merge following recommended process
5. Resolve conflicts systematically
6. Test thoroughly
7. Document any deviations from this plan

---

**Report Generated:** 2026-02-17  
**Analysis Based On:** Git diff between `HEAD` (docs-v2-test) and `origin/docs-v2-tests`  
**Total Files Changed:** 302  
**Estimated Merge Complexity:** High (structural + content conflicts)
