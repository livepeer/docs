# Task: Tasks Reorganization - Phase 7

## Overview

This task reorganizes the `tasks/` directory structure:
- Move `tasks/PLAN/` → `tasks/plan/` (case change)
- Move reports from `tasks/PLAN/reports/` → `tasks/reports/`
- Move scripts from `tasks/PLAN/scripts/` → `tasks/scripts/`
- Move errors from `tasks/PLAN/errors/` → `tasks/errors/`

**Reference:** See `tasks/plan/migration-plan.md` Section 4.10 for complete Tasks structure.

**Branch:** `docs-v2-preview` (current branch)

**Dependencies:** Phase 1 must be complete (directory structure created)

---

## ⚠️ CRITICAL REQUIREMENTS

1. **READ MIGRATION PLAN FIRST** - `tasks/plan/migration-plan.md` Section 4.10
2. **TEST AFTER EVERY SUB-TASK** - Do NOT do everything at once without testing
3. **COMMIT AFTER EACH TODO TASK** - Create a commit after completing each individual todo item to ensure pre-commit hooks run and catch problems early
4. **Fix hook failures immediately** - Don't proceed to next task until pre-commit hooks pass
5. **Update references** - Check for any references to old paths
6. **Case sensitivity** - `PLAN/` → `plan/` (case change matters on some systems)

---

## Task 7.1: Reorganize Tasks Directory

**Purpose:** Reorganize `tasks/PLAN/` structure to match new organization

**Current Structure:**
```
tasks/
└── PLAN/
    ├── reports/
    ├── scripts/
    └── errors/
```

**Target Structure:**
```
tasks/
├── plan/
├── reports/
├── scripts/
└── errors/
```

**Steps:**
1. **Verify current structure:**
   ```bash
   ls -la tasks/
   ls -la tasks/PLAN/ 2>/dev/null || echo "PLAN/ does not exist"
   ```

2. **Move planning docs from `tasks/PLAN/` → `tasks/plan/`:**
   - Move all `.md` files from `tasks/PLAN/` to `tasks/plan/`
   - Keep existing `tasks/plan/` files (merge if needed)
   - **Note:** This is a case change (PLAN → plan)

3. **Move reports from `tasks/PLAN/reports/` → `tasks/reports/`:**
   - Move all files from `tasks/PLAN/reports/` to `tasks/reports/`
   - Merge with existing `tasks/reports/` if it exists

4. **Move scripts from `tasks/PLAN/scripts/` → `tasks/scripts/`:**
   - Move all files from `tasks/PLAN/scripts/` to `tasks/scripts/`
   - Merge with existing `tasks/scripts/` if it exists

5. **Move errors from `tasks/PLAN/errors/` → `tasks/errors/`:**
   - Move all files from `tasks/PLAN/errors/` to `tasks/errors/`
   - Merge with existing `tasks/errors/` if it exists

6. **Search for references:**
   ```bash
   grep -r "tasks/PLAN" . --exclude-dir=node_modules
   grep -r "tasks/PLAN/reports" . --exclude-dir=node_modules
   grep -r "tasks/PLAN/scripts" . --exclude-dir=node_modules
   grep -r "tasks/PLAN/errors" . --exclude-dir=node_modules
   ```

7. **Update all references** to new paths:
   - Update any documentation that references old paths
   - Update any scripts that reference old paths
   - Update any CI/CD workflows that reference old paths

8. **Remove empty `tasks/PLAN/` directory** (if it becomes empty)

9. **TEST:**
   - Verify scripts in `tasks/scripts/` still run
   - Verify reports are accessible
   - Check for any broken internal links
   - Verify nothing breaks

10. Commit: `git commit -m "Reorganize tasks/ directory structure (PLAN/ → plan/, separate reports/scripts/errors/)"`

**Estimated Time:** 1 hour  
**Risk Level:** Low

---

## Testing Checklist

After completing the task, verify:

- [ ] Planning docs in `tasks/plan/`
- [ ] Reports in `tasks/reports/`
- [ ] Scripts in `tasks/scripts/`
- [ ] Errors in `tasks/errors/`
- [ ] All references updated
- [ ] Scripts still run
- [ ] Reports accessible
- [ ] No broken links

---

## Success Criteria

- [ ] `tasks/PLAN/` reorganized to `tasks/plan/`
- [ ] Reports moved to `tasks/reports/`
- [ ] Scripts moved to `tasks/scripts/`
- [ ] Errors moved to `tasks/errors/`
- [ ] All references updated
- [ ] All scripts still work
- [ ] All changes committed

---

## Notes

- **Case sensitivity:** `PLAN/` → `plan/` (case change)
- **DO NOT** move files without updating references
- **DO NOT** batch multiple moves without testing
- Always test after moving files
- Merge with existing directories if they already exist

---

## Next Steps

After completing Phase 7:
1. Phase 8: Data & Content Separation (Future)
2. Phase 9: Final Validation

See `tasks/plan/migration-plan.md` for full migration plan.
