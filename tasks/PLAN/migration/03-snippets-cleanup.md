# Task: Snippets Cleanup - Phase 3

## Overview

This task cleans up the `snippets/` directory to follow Mintlify conventions strictly:
- Remove deprecated styles
- Move scripts out of snippets (to `tools/scripts/`)
- Move wiki out of snippets (to `tools/wiki/`)
- Reorganize data files
- Verify required `snippets/pages/` directory

**Reference:** See `tasks/plan/migration-plan.md` Section 4.6 for complete Snippets rules.

**Branch:** `docs-v2-preview` (current branch)

**Dependencies:** Phase 1 must be complete (directory structure created)

---

## ⚠️ CRITICAL REQUIREMENTS

1. **READ MIGRATION PLAN FIRST** - `tasks/plan/migration-plan.md` Section 4.6
2. **TEST AFTER EVERY SUB-TASK** - Do NOT do everything at once without testing
3. **COMMIT AFTER EACH TODO TASK** - Create a commit after completing each individual todo item to ensure pre-commit hooks run and catch problems early
4. **Fix hook failures immediately** - Don't proceed to next task until pre-commit hooks pass
5. **DO NOT REMOVE `snippets/pages/`** - Required for MDX-in-MDX pattern
6. **Verify imports** - All imports must use absolute paths from root
7. **Test Mintlify rendering** - Ensure components and pages still work

---

## Task 3.1: Remove Deprecated Styles

**Purpose:** Remove deprecated `snippets/styles/` directory (contains only unused `themeStyles.jsx`)

**Steps:**
1. Verify `snippets/styles/` exists and contains only `themeStyles.jsx`
2. Search for any imports of `themeStyles.jsx`:
   ```bash
   grep -r "themeStyles" . --exclude-dir=node_modules
   grep -r "snippets/styles" . --exclude-dir=node_modules
   ```
3. **IF NO REFERENCES FOUND:** Delete `snippets/styles/` directory entirely
4. **IF REFERENCES FOUND:** Document them and update to use CSS Custom Properties
5. **TEST:** Run `mint dev` and verify nothing breaks
6. Commit: `git commit -m "Remove deprecated snippets/styles/ directory"`

**Estimated Time:** 10 minutes  
**Risk Level:** Low

---

## Task 3.2: Move Snippets Scripts

**Purpose:** Move all scripts from `snippets/scripts/` to `tools/scripts/` organized by purpose

**Files to move:**
- `snippets/scripts/fetch-*.sh` → `tools/scripts/fetch/`
- `snippets/scripts/generate-*.sh` → `tools/scripts/generate/`
- `snippets/scripts/generate-data/` → `tools/scripts/generate/`
- `snippets/scripts/test-scripts.sh` → `tools/scripts/test/`
- `snippets/scripts/update-component-library.sh` → `tools/scripts/generate/`
- `snippets/scripts/README.mdx` → `tools/scripts/README.mdx`

**Steps:**
1. List all files in `snippets/scripts/`:
   ```bash
   ls -la snippets/scripts/
   ```
2. Categorize each script by purpose (audit, generate, test, verify, fetch)
3. Move files to appropriate `tools/scripts/` subdirectories
4. Search for references:
   ```bash
   grep -r "snippets/scripts" . --exclude-dir=node_modules
   ```
5. Check `package.json` scripts section
6. Update ALL references to new paths
7. **TEST:** Run a few scripts to verify they still work:
   ```bash
   # Test a fetch script
   # Test a generate script
   # Test a test script
   ```
8. Commit: `git commit -m "Move snippets/scripts/ to tools/scripts/ organized by purpose"`

**Estimated Time:** 1 hour  
**Risk Level:** Medium

---

## Task 3.3: Move Snippets Wiki

**Purpose:** Move `snippets/snippetsWiki/` to `tools/wiki/snippetsWiki/`

**Steps:**
1. Verify `snippets/snippetsWiki/` exists
2. Search for references:
   ```bash
   grep -r "snippetsWiki" . --exclude-dir=node_modules
   grep -r "snippets/snippetsWiki" . --exclude-dir=node_modules
   ```
3. Move `snippets/snippetsWiki/` → `tools/wiki/snippetsWiki/`
4. Update all references found
5. **TEST:** Verify nothing breaks (check if any internal links reference this)
6. Commit: `git commit -m "Move snippets/snippetsWiki/ to tools/wiki/snippetsWiki/"`

**Estimated Time:** 15 minutes  
**Risk Level:** Low

---

## Task 3.4: Reorganize Snippets Data

**Purpose:** Move `snippets/docs-status-data.json` to proper location in `snippets/data/status/`

**Steps:**
1. Verify `snippets/docs-status-data.json` exists
2. Create `snippets/data/status/` directory if it doesn't exist
3. Search for references:
   ```bash
   grep -r "docs-status-data.json" . --exclude-dir=node_modules
   ```
4. Move `snippets/docs-status-data.json` → `snippets/data/status/docs-status-data.json`
5. Update all import paths in components/pages that use this data
6. **TEST:** 
   - Verify data imports still work
   - Test that components using this data still render correctly
   - Run `mint dev` and check for errors
7. Commit: `git commit -m "Move docs-status-data.json to snippets/data/status/"`

**Estimated Time:** 15 minutes  
**Risk Level:** Low

---

## Task 3.5: Verify Snippets Pages

**Purpose:** Verify `snippets/pages/` exists and is NOT removed (required for MDX-in-MDX pattern)

**Steps:**
1. **VERIFY** `snippets/pages/` directory exists
2. List files in `snippets/pages/`:
   ```bash
   ls -la snippets/pages/
   ```
3. Search for imports from `snippets/pages/`:
   ```bash
   grep -r "snippets/pages" . --exclude-dir=node_modules
   ```
4. **TEST:** 
   - Find a page that imports from `snippets/pages/`
   - Verify it still renders correctly in Mintlify
   - Check browser console for errors
5. Document why `snippets/pages/` is required (MDX-in-MDX pattern, Mintlify limitation)
6. Commit documentation (if created): `git commit -m "Document snippets/pages/ requirement"`

**Estimated Time:** 15 minutes  
**Risk Level:** Low

**Note:** `snippets/pages/` is REQUIRED for MDX-in-MDX pattern. Mintlify only allows imports from `/snippets`, so sub-page MDX files must be in `snippets/pages/`.

---

## Testing Checklist

After each task, verify:

- [ ] Files are in new locations
- [ ] All references updated
- [ ] Scripts still run (if scripts moved)
- [ ] Components still render (if data moved)
- [ ] MDX imports still work (verify `snippets/pages/`)
- [ ] No 404 errors in browser console
- [ ] Mintlify renders correctly (`mint dev`)

---

## Success Criteria

- [ ] `snippets/styles/` removed (deprecated)
- [ ] All scripts moved from `snippets/scripts/` to `tools/scripts/`
- [ ] Wiki moved from `snippets/snippetsWiki/` to `tools/wiki/`
- [ ] Data files organized in `snippets/data/`
- [ ] `snippets/pages/` verified and documented (NOT removed)
- [ ] All imports use absolute paths
- [ ] All components and pages still render correctly
- [ ] All changes committed incrementally

---

## Notes

- **DO NOT** remove `snippets/pages/` - It's required for MDX-in-MDX pattern
- **DO NOT** move files without updating references
- **DO NOT** batch multiple moves without testing
- Always test after each move before proceeding
- All imports in snippets must be absolute paths from root: `/snippets/components/...`

---

## Next Steps

After completing Phase 3:
1. Phase 4: Scripts Consolidation (move remaining scripts)
2. Phase 5: V2 Cleanup (consolidate v2 assets)

See `tasks/plan/migration-plan.md` for full migration plan.
