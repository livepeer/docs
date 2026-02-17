# Comprehensive Merge Plan: merge-docs-v2-tests → docs-v2-preview

**Date:** 2026-02-17  
**Source Branch:** `merge-docs-v2-tests` (current branch)  
**Target Branch:** `docs-v2-preview`  
**Total Files Changed:** 231 files  
**Estimated Complexity:** High (structural reorganization + content changes)

**⚠️ SOURCE OF TRUTH:** This plan follows [README.md](../../README.md) structure rules. All merge decisions align with README.md as the authoritative source.

---

## Executive Summary

This merge involves **significant structural reorganization** of the repository, including:

- **Major directory restructuring**: Scripts moved to `tools/scripts/`, API specs consolidated to `api/`, AI tools moved to root `ai-tools/`
- **New structure enforcement**: `.whitelist` file added for root directory validation
- **Enhanced documentation**: README.md completely rewritten with comprehensive structure rules
- **Git hooks improvements**: Enhanced pre-commit hooks with structure validation
- **Content additions**: New product documentation, task files, and reports
- **Repository organization**: Migration from `docs/` to `tasks/` structure per README.md

**Key Challenge:** The target branch (`docs-v2-preview`) has a simpler structure and may not have all the structural changes. We need to preserve the new structure while ensuring compatibility.

---

## 1. Structural Changes Analysis

### 1.1 Directory Structure Comparison

#### Current Branch (`merge-docs-v2-tests`) Structure:
```
/
├── .github/                # GitHub configuration (enhanced)
├── .githooks/              # Git hooks (enhanced with structure checks)
├── ai-tools/               # AI tool setup guides (moved from v2/ai-tools/)
├── api/                    # API specifications (consolidated)
│   ├── studio.yaml
│   ├── ai-worker.yaml
│   └── cli-http.yaml
├── contribute/             # Contribution documentation (moved from root)
│   ├── CONTRIBUTING.md
│   └── CONTRIBUTING/
├── snippets/               # Mintlify snippets
├── tasks/                  # AI working directory (reorganized)
│   ├── plan/              # Planning documents (lowercase per README)
│   ├── reports/           # Task outputs & audit reports
│   ├── scripts/           # Task execution scripts
│   └── errors/            # Error documentation
├── tools/                  # Development tooling (new)
│   ├── ai-rules/          # AI context rules
│   ├── config/            # Tool configurations
│   └── scripts/           # Development scripts (moved from root)
├── tests/                  # Test suite (renamed from testing/)
├── v1/                     # Frozen v1 documentation
├── v2/                     # Active v2 documentation
├── .whitelist              # Root directory whitelist (new)
└── README.md               # Comprehensive structure documentation
```

#### Target Branch (`docs-v2-preview`) Structure:
```
/
├── .github/                # GitHub configuration (basic)
├── .githooks/              # Git hooks (basic)
├── docs/                   # Documentation files (may conflict)
├── snippets/               # Mintlify snippets
├── v1/                     # Frozen v1 documentation
├── v2/                     # Active v2 documentation
└── README.md               # Basic README
```

### 1.2 Key Structural Changes

| Change Type | Current Branch | Target Branch | Resolution |
|------------|----------------|---------------|------------|
| **Root scripts** | Moved to `tools/scripts/` | May still be at root | ✅ **KEEP** new structure |
| **API specs** | Consolidated to `api/` | May be scattered | ✅ **KEEP** new structure |
| **AI tools** | Root `ai-tools/` | May be in `v2/ai-tools/` | ✅ **KEEP** new structure |
| **Contribution docs** | `contribute/` | May be at root or `docs/` | ✅ **KEEP** new structure |
| **Tasks directory** | `tasks/` with `plan/`, `reports/`, etc. | May be `docs/` or different | ✅ **KEEP** new structure |
| **Test directory** | `tests/` | May be `testing/` | ✅ **KEEP** new structure |
| **Whitelist** | `.whitelist` present | Likely missing | ✅ **ADD** new file |
| **README.md** | Comprehensive (532 lines) | Basic (~50 lines) | ⚠️ **MERGE** carefully |

---

## 2. Potential Conflicts

### 2.1 High-Risk Conflict Areas

#### 2.1.1 README.md
**Risk Level:** 🔴 **CRITICAL**

- **Current branch:** Complete rewrite (532 lines) with comprehensive structure documentation
- **Target branch:** Basic README (~50 lines)
- **Conflict Type:** Complete file replacement
- **Resolution Strategy:**
  1. **ACCEPT** current branch version (it's the source of truth)
  2. **VERIFY** all referenced files/paths exist in target branch
  3. **UPDATE** any outdated links or references
  4. **TEST** that all examples work

#### 2.1.2 docs.json (Navigation Configuration)
**Risk Level:** 🔴 **CRITICAL**

- **Current branch:** Updated navigation with new product pages, reorganized sections
- **Target branch:** May have different navigation structure
- **Conflict Type:** Content merge required
- **Resolution Strategy:**
  1. **COMPARE** both versions line by line
  2. **PRESERVE** new product documentation entries from current branch
  3. **MERGE** any unique entries from target branch
  4. **VERIFY** all file paths exist
  5. **TEST** navigation in Mintlify

#### 2.1.3 .githooks/pre-commit
**Risk Level:** 🟠 **HIGH**

- **Current branch:** Enhanced with structure validation, whitelist checks
- **Target branch:** Basic pre-commit hook
- **Conflict Type:** Functional merge required
- **Resolution Strategy:**
  1. **ACCEPT** current branch version (enhanced functionality)
  2. **VERIFY** all referenced scripts exist
  3. **TEST** hook execution
  4. **DOCUMENT** any new bypass flags

#### 2.1.4 Directory Structure Conflicts
**Risk Level:** 🟠 **HIGH**

**Potential conflicts:**
- `docs/` directory in target vs `tasks/` in current
- Root-level scripts in target vs `tools/scripts/` in current
- `v2/ai-tools/` in target vs `ai-tools/` in current
- `testing/` in target vs `tests/` in current

**Resolution Strategy:**
1. **IGNORE** `docs/` directory if it exists in target (we use `tasks/`)
2. **MOVE** any root scripts from target to `tools/scripts/`
3. **MOVE** any `v2/ai-tools/` content to root `ai-tools/`
4. **RENAME** `testing/` to `tests/` if needed

### 2.2 Medium-Risk Conflict Areas

#### 2.2.1 .github/ Configuration Files
**Risk Level:** 🟡 **MEDIUM**

- `.github/workflows/test-suite.yml` - Modified in both
- `.github/AGENTS.md` - New in current branch
- `.github/augment-instructions.md` - Modified in both
- `.github/copilot-instructions.md` - Modified in both

**Resolution Strategy:**
1. **ACCEPT** new files from current branch
2. **MERGE** workflow improvements from both branches
3. **PRESERVE** structure-related instructions from current branch

#### 2.2.2 Package Configuration
**Risk Level:** 🟡 **MEDIUM**

- `package.json` - Modified in both (may have different dependencies)
- `v2/package.json` - Modified in current branch

**Resolution Strategy:**
1. **COMPARE** dependency lists
2. **MERGE** unique dependencies from both
3. **VERIFY** all scripts work with merged dependencies

### 2.3 Low-Risk Areas (Accept as-is)

- ✅ New product documentation pages (Daydream, Frameworks)
- ✅ New task files in `tasks/plan/`
- ✅ New reports in `tasks/reports/`
- ✅ Component library updates
- ✅ Style guide enhancements
- ✅ New assets and components

---

## 3. Merge Strategy

### 3.1 Pre-Merge Preparation

#### Step 1: Backup Current State
```bash
# Create backup branch
git branch backup-before-merge-$(date +%Y%m%d-%H%M%S)

# Ensure all changes are committed
git status
git add -A
git commit -m "WIP: Final state before merge to docs-v2-preview"
```

#### Step 2: Verify Target Branch State
```bash
# Fetch latest from remote
git fetch origin docs-v2-preview

# Check what's in target branch
git log --oneline origin/docs-v2-preview -10

# Compare structures
git diff --name-status HEAD origin/docs-v2-preview | head -50
```

#### Step 3: Identify Common Ancestor
```bash
# Find merge base
git merge-base HEAD origin/docs-v2-preview

# Review divergence
git log --oneline --graph --decorate HEAD origin/docs-v2-preview --max-count=20
```

### 3.2 Merge Execution Options

#### Option A: Standard Merge (Recommended)
**Use when:** You want to preserve full history and handle conflicts systematically

```bash
# Start merge (no commit yet)
git checkout -b merge-to-docs-v2-preview
git merge origin/docs-v2-preview --no-commit --no-ff

# Resolve conflicts using strategy below
# Then commit when ready
```

**Pros:**
- Preserves full history
- Clear conflict markers
- Can abort if needed

**Cons:**
- May have many conflicts
- Requires systematic resolution

#### Option B: Rebase Then Merge
**Use when:** You want linear history

```bash
# Rebase current branch onto target
git rebase origin/docs-v2-preview

# Resolve conflicts during rebase
# Then merge
```

**Pros:**
- Cleaner history
- Easier to review

**Cons:**
- More complex conflict resolution
- Rewrites history (if already pushed)

#### Option C: Selective Cherry-Pick
**Use when:** Only specific commits are needed

```bash
# Identify commits to cherry-pick
git log --oneline HEAD ^origin/docs-v2-preview

# Cherry-pick specific commits
git cherry-pick <commit-hash>
```

**Pros:**
- Maximum control
- Can skip problematic commits

**Cons:**
- Time-consuming
- May miss dependencies

**Recommendation:** Use **Option A (Standard Merge)** for this merge.

### 3.3 Conflict Resolution Process

#### Phase 1: Structural Conflicts (Do First)

1. **Handle directory renames:**
   ```bash
   # If target has docs/ directory, ignore it
   # Keep tasks/ structure from current branch
   ```

2. **Handle file moves:**
   ```bash
   # Scripts: target root/scripts → current tools/scripts/
   # Keep current structure, move any unique files from target
   ```

3. **Handle new directories:**
   ```bash
   # Ensure all new directories exist:
   # - tools/ai-rules/
   # - tools/config/
   # - tools/scripts/
   # - api/
   # - ai-tools/
   # - contribute/
   ```

#### Phase 2: Critical File Conflicts

1. **README.md:**
   - Accept current branch version (it's comprehensive and up-to-date)
   - Verify all paths and examples work
   - Update any outdated references

2. **docs.json:**
   - Open both versions side-by-side
   - Preserve new product pages from current branch
   - Merge any unique navigation entries from target
   - Verify all file paths exist

3. **.githooks/pre-commit:**
   - Accept current branch version (enhanced functionality)
   - Verify all referenced scripts exist
   - Test hook execution

4. **.whitelist:**
   - Accept current branch version (new file)
   - Verify it matches actual root structure

#### Phase 3: Configuration File Conflicts

1. **.github/workflows/test-suite.yml:**
   - Compare both versions
   - Merge test configurations
   - Preserve structure validation steps from current branch

2. **.github/*.md files:**
   - Accept new files from current branch
   - Merge improvements from both branches
   - Preserve structure rules from current branch

3. **package.json:**
   - Compare dependencies
   - Merge unique dependencies
   - Verify scripts work

#### Phase 4: Content Merges

1. **New files:** Accept all new files from current branch
2. **Modified files:** Review each conflict individually
3. **Deleted files:** Verify deletions are intentional

---

## 4. Step-by-Step Merge Execution

### Step 1: Preparation
```bash
# 1. Ensure you're on the correct branch
git checkout merge-docs-v2-tests

# 2. Create backup
git branch backup-before-merge-$(date +%Y%m%d-%H%M%S)

# 3. Commit any uncommitted changes
git add -A
git commit -m "WIP: Save state before merge"

# 4. Fetch latest
git fetch origin docs-v2-preview
```

### Step 2: Start Merge
```bash
# Create merge branch
git checkout -b merge-to-docs-v2-preview

# Start merge (no commit)
git merge origin/docs-v2-preview --no-commit --no-ff
```

### Step 3: Resolve Conflicts Systematically

#### 3.1 Structural Conflicts
```bash
# Check for directory conflicts
git status | grep "both added\|deleted by"

# For each conflict:
# - Keep current branch structure
# - Move any unique content from target
```

#### 3.2 README.md
```bash
# Accept current version (it's comprehensive)
git checkout --ours README.md

# Verify it's correct
cat README.md | head -50
```

#### 3.3 docs.json
```bash
# Open in editor to merge manually
# Preserve new product pages
# Merge navigation entries
```

#### 3.4 .githooks/pre-commit
```bash
# Accept current version (enhanced)
git checkout --ours .githooks/pre-commit

# Verify scripts exist
ls -la .githooks/verify.sh
ls -la tools/scripts/verify/
```

#### 3.5 .whitelist
```bash
# Accept current version (new file)
git checkout --ours .whitelist
```

#### 3.6 Other Conflicts
```bash
# Review each conflict individually
git status

# For each file:
# - Review conflict markers
# - Choose appropriate resolution
# - Test after resolution
```

### Step 4: Verify Structure
```bash
# Run pre-commit hook manually
.githooks/pre-commit

# Check whitelist compliance
cat .whitelist
ls -la | grep -v -f <(cat .whitelist | grep -v "^#")

# Verify directory structure matches README.md
```

### Step 5: Test
```bash
# Test Mintlify build (if possible)
mint dev

# Run test suite
npm test

# Verify navigation
# Check docs.json is valid JSON
cat docs.json | jq .
```

### Step 6: Commit Merge
```bash
# Stage all resolved files
git add -A

# Commit merge
git commit -m "Merge docs-v2-preview: preserve structure, merge content

- Preserved new repository structure (tools/, api/, ai-tools/, etc.)
- Merged README.md (comprehensive version)
- Merged docs.json navigation
- Preserved enhanced git hooks
- Added .whitelist for structure enforcement
- Merged new product documentation
- Resolved all structural conflicts per README.md"
```

---

## 5. Conflict Resolution Guide

### 5.1 README.md Conflict

**If conflict occurs:**
```bash
# Accept current branch version (it's the source of truth)
git checkout --ours README.md
git add README.md
```

**Then verify:**
- All referenced files exist
- All paths are correct
- Examples work

### 5.2 docs.json Conflict

**Manual merge required:**
1. Open both versions
2. Identify new product pages in current branch
3. Identify unique entries in target branch
4. Merge into single valid JSON
5. Verify all file paths exist

**Example merge:**
```json
{
  "navigation": [
    // Keep new product pages from current branch
    {
      "group": "Products",
      "pages": [
        "products/daydream/overview/overview",
        "products/daydream/overview/quickstart",
        // ... other new pages
      ]
    },
    // Merge any unique entries from target branch
    // ... other navigation groups
  ]
}
```

### 5.3 Directory Structure Conflicts

**If target has `docs/` directory:**
```bash
# Ignore it - we use tasks/ per README.md
# Don't merge docs/ content
```

**If target has root scripts:**
```bash
# Move to tools/scripts/
for file in $(git diff --name-only origin/docs-v2-preview -- '*.js' '*.sh'); do
  if [ -f "$file" ] && [[ "$file" != tools/* ]]; then
    mkdir -p tools/scripts/$(dirname "$file")
    git mv "$file" "tools/scripts/$file"
  fi
done
```

**If target has `v2/ai-tools/`:**
```bash
# Move to root ai-tools/
if [ -d "v2/ai-tools" ]; then
  mkdir -p ai-tools
  cp -r v2/ai-tools/* ai-tools/
  git rm -r v2/ai-tools
fi
```

### 5.4 .githooks/pre-commit Conflict

**Accept current version:**
```bash
git checkout --ours .githooks/pre-commit
git add .githooks/pre-commit
```

**Then verify:**
```bash
# Check referenced scripts exist
grep -E "tools/scripts|\.githooks" .githooks/pre-commit
ls -la tools/scripts/verify/
ls -la .githooks/verify.sh
```

### 5.5 Package.json Conflicts

**Merge dependencies:**
1. Compare both versions
2. Merge unique dependencies
3. Resolve version conflicts (prefer newer compatible versions)
4. Test after merge

---

## 6. Post-Merge Verification Checklist

### 6.1 Structure Verification
- [ ] `.whitelist` file exists and is correct
- [ ] `tools/scripts/` contains all scripts (none at root)
- [ ] `api/` contains all API specs
- [ ] `ai-tools/` exists at root (not in v2/)
- [ ] `contribute/` exists at root
- [ ] `tasks/plan/` exists (lowercase, per README.md)
- [ ] `tasks/reports/` exists
- [ ] `tests/` exists (not `testing/`)
- [ ] No `docs/` directory at root (we use `tasks/`)

### 6.2 File Verification
- [ ] `README.md` is comprehensive (532+ lines)
- [ ] `docs.json` is valid JSON and all paths exist
- [ ] `.githooks/pre-commit` works correctly
- [ ] All referenced files in README.md exist
- [ ] No broken import paths

### 6.3 Functionality Verification
- [ ] Pre-commit hooks run successfully
- [ ] Structure validation passes
- [ ] Style guide checks pass
- [ ] Mintlify dev server starts (if possible)
- [ ] Navigation works correctly
- [ ] All new product pages accessible

### 6.4 Content Verification
- [ ] New product documentation present (Daydream, Frameworks)
- [ ] Task files in `tasks/plan/` are accessible
- [ ] Reports in `tasks/reports/` are accessible
- [ ] Component library updates visible
- [ ] Style guide updates visible

### 6.5 Git Verification
- [ ] Merge commit created successfully
- [ ] No uncommitted changes
- [ ] Branch is clean
- [ ] All conflicts resolved

---

## 7. Risk Mitigation

### 7.1 High-Risk Scenarios

**Scenario 1: Target branch has conflicting structure**
- **Risk:** Directory structure conflicts
- **Mitigation:** Accept current branch structure (it's per README.md)
- **Action:** Ignore target's `docs/` directory, keep `tasks/`

**Scenario 2: Navigation breaks**
- **Risk:** `docs.json` merge breaks navigation
- **Mitigation:** Manual merge with careful verification
- **Action:** Test navigation after merge, verify all paths exist

**Scenario 3: Git hooks break**
- **Risk:** Pre-commit hook fails after merge
- **Mitigation:** Accept current branch version, verify scripts exist
- **Action:** Test hooks manually before committing

### 7.2 Rollback Plan

If merge causes issues:

```bash
# Abort merge (if not committed)
git merge --abort

# Or reset to backup branch
git reset --hard backup-before-merge-YYYYMMDD-HHMMSS

# Or revert merge commit (if already committed)
git revert -m 1 <merge-commit-hash>
```

---

## 8. Expected Outcomes

### 8.1 Successful Merge Should Result In:

1. **Preserved Structure:**
   - `tools/` directory with scripts, configs, ai-rules
   - `api/` directory with consolidated API specs
   - `ai-tools/` at root
   - `contribute/` at root
   - `tasks/` with proper subdirectories
   - `tests/` directory

2. **Enhanced Documentation:**
   - Comprehensive README.md (source of truth)
   - Updated docs.json with new product pages
   - Enhanced git hooks documentation

3. **New Content:**
   - Product documentation (Daydream, Frameworks)
   - Task files and reports
   - Component library updates

4. **Structure Enforcement:**
   - `.whitelist` file present
   - Pre-commit hooks enforce structure
   - All files follow README.md structure

### 8.2 Files That Should Be Present:

**Root level:**
- ✅ `.whitelist`
- ✅ `README.md` (comprehensive)
- ✅ `docs.json` (merged)
- ✅ `package.json` (merged)
- ✅ `ai-tools/` directory
- ✅ `api/` directory
- ✅ `contribute/` directory
- ✅ `tools/` directory
- ✅ `tasks/` directory
- ✅ `tests/` directory

**Not at root:**
- ❌ No `docs/` directory (we use `tasks/`)
- ❌ No root-level scripts (they're in `tools/scripts/`)
- ❌ No `v2/ai-tools/` (moved to root `ai-tools/`)

---

## 9. Timeline Estimate

- **Preparation:** 15 minutes
- **Merge execution:** 30-60 minutes
- **Conflict resolution:** 1-2 hours (depending on conflicts)
- **Verification:** 30 minutes
- **Testing:** 30 minutes

**Total:** 2.5-4 hours

---

## 10. Next Steps After Merge

1. **Push merge branch:**
   ```bash
   git push origin merge-to-docs-v2-preview
   ```

2. **Create PR to docs-v2-preview:**
   - Title: "Merge structural reorganization and enhancements"
   - Description: Reference this merge plan
   - Reviewers: Request review from maintainers

3. **Monitor CI/CD:**
   - Check that all tests pass
   - Verify structure validation passes
   - Check Mintlify build (if configured)

4. **Update documentation:**
   - Update any references to old structure
   - Document any deviations from this plan

---

## 11. Summary

### Key Decisions

1. ✅ **Preserve current branch structure** - It follows README.md (source of truth)
2. ✅ **Accept comprehensive README.md** - It's the authoritative documentation
3. ✅ **Merge docs.json carefully** - Preserve new content, merge navigation
4. ✅ **Accept enhanced git hooks** - Better structure enforcement
5. ✅ **Add .whitelist** - Structure enforcement file
6. ✅ **Ignore target's `docs/` directory** - We use `tasks/` per README.md

### Critical Actions

1. **Backup before merge** - Always create backup branch
2. **Resolve structural conflicts first** - Directory structure is foundation
3. **Verify after each resolution** - Test as you go
4. **Follow README.md** - It's the source of truth
5. **Test thoroughly** - Verify hooks, navigation, structure

### Success Criteria

- ✅ All structure matches README.md
- ✅ Pre-commit hooks pass
- ✅ Navigation works correctly
- ✅ All new content accessible
- ✅ No broken references
- ✅ Clean git history

---

**Plan Created:** 2026-02-17  
**Last Updated:** 2026-02-17  
**Status:** Ready for execution
