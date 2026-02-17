# Task: Final Validation - Phase 9

## Overview

This task performs final validation of the entire migration:
- Run full test suite
- Verify all pages render
- Validate import paths
- Update documentation

**Reference:** See `tasks/plan/migration-plan.md` Section 5 for complete task list.

**Branch:** `docs-v2-preview` (current branch)

**Dependencies:** All previous phases should be complete

---

## ⚠️ CRITICAL REQUIREMENTS

1. **READ MIGRATION PLAN FIRST** - `tasks/plan/migration-plan.md` Section 5
2. **Complete all previous phases** - This is the final validation phase
3. **COMMIT AFTER EACH TODO TASK** - Create a commit after completing each individual todo item to ensure pre-commit hooks run and catch problems early
4. **Fix hook failures immediately** - Don't proceed to next task until pre-commit hooks pass
5. **Test thoroughly** - Don't skip any validation steps
6. **Update all documentation** - Ensure everything is documented

---

## Task 9.1: Full Test Suite

**Purpose:** Run all tests and fix any broken tests

**Steps:**
1. **Run all tests:**
   ```bash
   # Run unit tests
   npm test
   
   # Run integration tests
   # Run any other test suites
   ```

2. **Fix any broken tests:**
   - Identify failing tests
   - Fix test failures (may be due to file moves)
   - Update test paths if needed
   - Re-run tests to verify fixes

3. **Verify test coverage:**
   - Check that all critical paths are tested
   - Add tests for new structure if needed

4. Commit fixes: `git commit -m "Fix broken tests after migration"`

**Estimated Time:** 2 hours  
**Risk Level:** Medium  
**Dependencies:** All previous phases

---

## Task 9.2: Verify All Pages Render

**Purpose:** Verify all pages render correctly in Mintlify

**Steps:**
1. **Start Mintlify locally:**
   ```bash
   mint dev
   ```

2. **Verify all pages render:**
   - Navigate through all major sections
   - Check all tabs and groups
   - Verify all pages load without errors
   - Check browser console for errors

3. **Check all links work:**
   - Test internal links
   - Test external links
   - Use a broken link checker if available:
     ```bash
     # Example: Use a link checker tool
     ```

4. **Fix any broken links:**
   - Update internal links that reference moved files
   - Fix external links if needed
   - Verify fixes work

5. Commit fixes: `git commit -m "Fix broken links after migration"`

**Estimated Time:** 2 hours  
**Risk Level:** Medium  
**Dependencies:** All previous phases

---

## Task 9.3: Validate Import Paths

**Purpose:** Ensure all imports use absolute paths and follow Mintlify conventions

**Steps:**
1. **Scan for relative imports in snippets:**
   ```bash
   grep -r "from '\.\./" snippets/ --include="*.jsx" --include="*.js" --include="*.mdx"
   grep -r "from \"\.\./" snippets/ --include="*.jsx" --include="*.js" --include="*.mdx"
   grep -r "from '\./" snippets/ --include="*.jsx" --include="*.js" --include="*.mdx"
   grep -r "from \"\./" snippets/ --include="*.jsx" --include="*.js" --include="*.mdx"
   ```

2. **Fix any relative imports:**
   - Convert to absolute paths: `/snippets/components/...`
   - Ensure file extensions are included: `.jsx`, `.mdx`
   - **TEST:** Verify imports still work after fixing

3. **Verify all imports use absolute paths:**
   ```bash
   # Check that all imports start with /
   grep -r "from '/snippets" snippets/ | wc -l
   ```

4. **Check for component-to-component imports:**
   ```bash
   # Components should NOT import other components
   grep -r "from '/snippets/components" snippets/components/ --include="*.jsx"
   ```
   - If found, these need to be fixed (use MDX-in-MDX pattern instead)

5. Commit fixes: `git commit -m "Fix import paths to use absolute paths"`

**Estimated Time:** 1 hour  
**Risk Level:** Low  
**Dependencies:** All previous phases

---

## Task 9.4: Update Documentation

**Purpose:** Update all documentation to reflect new structure

**Files to update:**
- `README.md` - Project documentation
- `v2/pages/07_resources/documentation-guide/style-guide.mdx` - Style guide
- `v2/pages/07_resources/documentation-guide/component-library.mdx` - Component library
- `contribute/STRUCTURE.md` - Structure documentation (create if doesn't exist)
- `contribute/CONTRIBUTING.md` - Contribution guide
- AI guidelines files (`.cursorrules`, `.github/augment-instructions.md`, etc.)

**Steps:**
1. **Update `README.md`:**
   - Add new repository structure overview
   - Update paths and references
   - Add migration notes if relevant

2. **Update style guide:**
   - Update paths to reflect new structure
   - Update examples with new paths
   - Verify all examples still work

3. **Update component library:**
   - Update component paths
   - Update import examples
   - Verify all examples still work

4. **Create `contribute/STRUCTURE.md`:**
   - Document complete repository structure
   - Document file placement rules
   - Document enforcement mechanisms
   - Include examples of correct/incorrect usage

5. **Update contribution guide:**
   - Add references to structure documentation
   - Update contribution guidelines
   - Add migration notes

6. **Update AI guidelines:**
   - Update `.cursorrules` with new structure
   - Update `.github/augment-instructions.md`
   - Update `.github/AGENTS.md`
   - Update `.github/copilot-instructions.md`

7. **TEST:** Verify all documentation is accurate and up-to-date

8. Commit: `git commit -m "Update all documentation to reflect new repository structure"`

**Estimated Time:** 3 hours  
**Risk Level:** Low  
**Dependencies:** All previous phases

---

## Testing Checklist

After each task, verify:

- [ ] All tests pass
- [ ] All pages render correctly
- [ ] All links work
- [ ] All imports use absolute paths
- [ ] All documentation is updated
- [ ] No broken references

---

## Success Criteria

- [ ] All tests pass
- [ ] All pages render correctly
- [ ] All links work
- [ ] All imports use absolute paths
- [ ] All documentation updated
- [ ] All changes committed
- [ ] Migration complete

---

## Notes

- **This is the final phase** - Ensure everything is complete
- **Don't skip validation steps** - Test thoroughly
- **Update all documentation** - Future contributors need accurate docs
- **Document any issues encountered** - Help future migrations

---

## Migration Complete

After completing Phase 9, the migration is complete! 

**Next Steps:**
- Review all changes
- Create PR if needed
- Document any follow-up tasks
- Celebrate! 🎉

See `tasks/plan/migration-plan.md` for full migration plan and success criteria.
