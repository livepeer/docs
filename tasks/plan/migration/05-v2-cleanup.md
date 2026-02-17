# Task: V2 Cleanup - Phase 5

## Overview

This task cleans up the `v2/` directory by:
- Consolidating v2 assets into `snippets/assets/`
- Removing duplicate files (style.css, package.json)
- Moving v2 tests if they exist

**IMPORTANT:** v1/ and v2/ stay at ROOT level in this migration. They may be moved to docs/ later, but that's NOT part of this migration.

**Reference:** See `tasks/plan/migration-plan.md` Section 4.11 for complete Documentation structure.

**Branch:** `docs-v2-preview` (current branch)

**Dependencies:** Phase 1 must be complete (directory structure created)

---

## ⚠️ CRITICAL REQUIREMENTS

1. **READ MIGRATION PLAN FIRST** - `tasks/plan/migration-plan.md` Section 4.11
2. **DO NOT MOVE v1/ or v2/** - They stay at root in this migration
3. **TEST AFTER EVERY SUB-TASK** - Do NOT do everything at once without testing
4. **COMMIT AFTER EACH TODO TASK** - Create a commit after completing each individual todo item to ensure pre-commit hooks run and catch problems early
5. **Fix hook failures immediately** - Don't proceed to next task until pre-commit hooks pass
6. **Verify asset paths** - Ensure all asset references still work
7. **Test Mintlify rendering** - Ensure pages and assets still load

---

## Task 5.1: Consolidate V2 Assets

**Purpose:** Move `v2/assets/` to `snippets/assets/` and merge with existing assets

**Steps:**
1. List files in `v2/assets/`:
   ```bash
   find v2/assets/ -type f | head -20
   ```
2. List files in `snippets/assets/`:
   ```bash
   find snippets/assets/ -type f | head -20
   ```
3. Identify any duplicate files:
   - Compare file names and sizes
   - Prioritize `snippets/assets/` versions if conflicts exist
4. Search for references to `v2/assets/`:
   ```bash
   grep -r "v2/assets" . --exclude-dir=node_modules
   ```
5. Move `v2/assets/` → `snippets/assets/` (merge directories):
   ```bash
   # Move files, resolving duplicates
   ```
6. Resolve any duplicate files (keep `snippets/assets/` versions)
7. Update all references to `v2/assets/` → `snippets/assets/`
8. **TEST:**
   - Run `mint dev` and verify assets still load
   - Check browser console for 404 errors
   - Verify images, videos, and other assets display correctly
9. Commit: `git commit -m "Consolidate v2/assets/ into snippets/assets/"`

**Estimated Time:** 1 hour  
**Risk Level:** Medium

---

## Task 5.2: Remove V2 Duplicates

**Purpose:** Remove duplicate files from v2/ that should use root versions

**Files to remove/move:**
- `v2/style.css` → Remove (use root `style.css`)
- `v2/package.json` → Remove (use root `package.json`)
- `v2/tests/` → Move to `tests/` (if actual tests) or delete (if docs)

**Steps:**
1. **Remove `v2/style.css`:**
   - Verify root `style.css` exists
   - Search for references to `v2/style.css`:
     ```bash
     grep -r "v2/style.css" . --exclude-dir=node_modules
     ```
   - Remove `v2/style.css`
   - **TEST:** Verify styles still apply correctly
   
2. **Remove `v2/package.json`:**
   - Verify root `package.json` exists
   - Compare `v2/package.json` with root `package.json` (check for unique dependencies)
   - If `v2/package.json` has unique dependencies, merge them into root `package.json`
   - Remove `v2/package.json`
   - **TEST:** Run `npm install` and verify dependencies work
   
3. **Handle `v2/tests/`:**
   - Check if `v2/tests/` exists:
     ```bash
     ls -la v2/tests/ 2>/dev/null || echo "Does not exist"
     ```
   - If exists, determine if they're actual tests or documentation:
     - **If tests:** Move `v2/tests/` → `tests/` (merge with existing)
     - **If docs:** Delete or move to appropriate location
   - Search for references:
     ```bash
     grep -r "v2/tests" . --exclude-dir=node_modules
     ```
   - Update all references
   - **TEST:** Run tests to verify they still work (if moved)
   
4. **TEST:** Run `mint dev` and verify nothing breaks
5. Commit: `git commit -m "Remove duplicate files from v2/ (style.css, package.json, tests/)"`

**Estimated Time:** 30 minutes  
**Risk Level:** Low

---

## Testing Checklist

After each task, verify:

- [ ] Assets are in `snippets/assets/`
- [ ] All asset references updated
- [ ] Assets still load in Mintlify
- [ ] No 404 errors in browser console
- [ ] Styles still apply (if style.css removed)
- [ ] Dependencies still work (if package.json removed)
- [ ] Tests still run (if tests moved)
- [ ] All pages render correctly

---

## Success Criteria

- [ ] `v2/assets/` consolidated into `snippets/assets/`
- [ ] Duplicate files removed from v2/
- [ ] All references updated
- [ ] All assets still load correctly
- [ ] All pages still render correctly
- [ ] All changes committed incrementally

---

## Notes

- **DO NOT** move v1/ or v2/ directories - They stay at root
- **DO NOT** remove files without checking for unique content
- **DO NOT** batch multiple moves without testing
- Always test after each change before proceeding
- Prioritize `snippets/assets/` versions if file conflicts exist

---

## Next Steps

After completing Phase 5:
1. Phase 6: Verify Styles at Root
2. Phase 7: Tasks Reorganization

See `tasks/plan/migration-plan.md` for full migration plan.
