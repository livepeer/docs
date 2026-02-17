# Upstream Merge Plan: upstream/docs-v2-preview → migration/upstream-structure-update

**Date:** 2026-02-18  
**Branch:** `migration/upstream-structure-update`  
**Source:** `upstream/docs-v2-preview` (livepeer/docs)  
**Target:** Fork (DeveloperAlly/livepeer-docs-fork) 

---

## What We're Merging

**Merging upstream changes from the official Livepeer docs repository (branch docs-v2-preview) into our fork.**

### Current Status
- ✅ **Merge commit `4239426` COMPLETE** - All conflicts resolved
- ✅ Test files merged
- ✅ File moves completed (upstream `docs/` → fork `tasks/`)
- ✅ No active conflicts remaining
- ⚠️ **Verification needed:** Test hooks, workflows, and content integration

### Key Differences
1. **Structure:** Fork uses `tasks/` instead of `docs/` for planning/reports
2. **Hooks:** Fork has enhanced pre-commit hooks with whitelist protection
3. **Workflows:** Fork has updated test workflows with `tools/` instead of `tooling/`
4. **Config:** Fork has `.cursorrules`, `.whitelist`, and other fork-specific files

---

## Verification Checklist (Merge Complete - No Active Conflicts)

### 1. Git Hooks (`.githooks/`) ✅
**Status:** Fork's enhanced versions kept
- ✅ `.githooks/pre-commit` - Enhanced checks preserved
- ✅ `.githooks/verify-browser.js` - Port detection (3145 + common ports) working
- ✅ `.githooks/verify.sh` - Timeout/retry logic (2 retries) working
- ✅ `.githooks/server-manager.js` - Port detection working

**Verify:** Run `git commit` to test hooks work

### 2. GitHub Workflows (`.github/workflows/`)
**Files with conflicts:**
- `.github/workflows/test-suite.yml` - Fork uses `tools/`, upstream may use `tooling/`
- `.github/workflows/test-v2-pages.yml` - Fork uses `tools/`, upstream may use `tooling/`

**Resolution:** Keep fork's version (uses correct `tools/` directory)

### 3. Configuration Files
**Files to check:**
- `README.md` - May have structural differences
- `docs.json` - May have navigation differences
- `.github/augment-instructions.md` - Fork-specific AI rules

**Resolution:** Merge carefully, preserve fork's structure documentation

### 4. Root Files
**Fork-specific files (keep):**
- `.cursorrules` - Fork-specific (already in whitelist)
- `.whitelist` - Fork-specific structure enforcement
- `tools/package.json` - Fork's tooling (upstream may not have)

**Upstream files to integrate:**
- Check for new pages in `docs.json`
- Check for new content in `v2/pages/`
- Check for new automations or scripts

---

## Merge Strategy

### Phase 1: Verify Hooks ✅
- [x] Fork's enhanced pre-commit hook preserved
- [x] Browser validation with port detection working
- [x] Timeout/retry logic (2 retries) working
- [ ] **TODO:** Test hooks with actual commit

### Phase 2: Resolve Workflow Conflicts
- [ ] Update workflows to use `tools/` (fork's structure)
- [ ] Ensure cache paths point to `tools/package-lock.json`
- [ ] Test workflows still work

### Phase 3: Resolve Content Conflicts
- [ ] Merge README.md (preserve fork's structure docs)
- [ ] Merge docs.json (add upstream's new pages)
- [ ] Check for new upstream content to integrate

### Phase 4: Verify & Test
- [ ] Run pre-commit hooks (should pass)
- [ ] Run test suite (should pass)
- [ ] Check browser validation works
- [ ] Verify no broken links
- [ ] Test mint dev starts correctly

---

## Commands

### Check Current Status
```bash
# See what's different
git diff upstream/docs-v2-preview...migration/upstream-structure-update --stat

# Check for unmerged conflicts
git diff --name-only --diff-filter=U

# See what upstream has that we don't
git log --oneline upstream/docs-v2-preview --not migration/upstream-structure-update
```

### Resolve Conflicts
```bash
# For each conflicted file, choose fork's version:
git checkout --ours <file>  # Keep fork's version
# OR
git checkout --theirs <file>  # Take upstream's version
# OR
# Manual merge (edit file, remove conflict markers)
```

### After Resolving
```bash
# Stage resolved files
git add <file>

# Continue merge
git commit
```

---

## Notes

- **Preserve fork's structure:** Keep `tasks/` instead of `docs/`
- **Keep enhanced hooks:** Fork's hooks are more complete
- **Integrate upstream content:** Add new pages/content from upstream
- **Test everything:** Don't commit until hooks and tests pass
