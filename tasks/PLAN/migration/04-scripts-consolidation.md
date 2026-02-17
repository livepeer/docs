# Task: Scripts Consolidation - Phase 4

## Overview

This task consolidates all scripts from various locations into `tools/scripts/` organized by purpose:
- Move root-level scripts
- Move v2 scripts
- Organize all scripts by purpose (audit, generate, test, verify, fetch)

**Reference:** See `tasks/plan/migration-plan.md` Section 4.8 for complete Tools structure.

**Branch:** `docs-v2-preview` (current branch)

**Dependencies:** Phase 1 must be complete (directory structure created)

---

## ⚠️ CRITICAL REQUIREMENTS

1. **READ MIGRATION PLAN FIRST** - `tasks/plan/migration-plan.md` Section 4.8
2. **TEST AFTER EVERY SUB-TASK** - Do NOT do everything at once without testing
3. **COMMIT AFTER EACH TODO TASK** - Create a commit after completing each individual todo item to ensure pre-commit hooks run and catch problems early
4. **Fix hook failures immediately** - Don't proceed to next task until pre-commit hooks pass
5. **Verify script functionality** - Ensure all scripts still work after moving
6. **Update all references** - Check `package.json`, CI/CD, documentation
7. **Organize by purpose** - Categorize scripts correctly (audit, generate, test, verify, fetch)

---

## Task 4.1: Move Root Scripts

**Purpose:** Move all scripts from root `scripts/` directory to `tools/scripts/` organized by purpose

**Files to move:**
- `scripts/audit-*.js` → `tools/scripts/audit/`
- `scripts/test-*.js` → `tools/scripts/test/`
- `scripts/verify-*.js` → `tools/scripts/verify/`
- `scripts/download-*.sh` → `tools/scripts/fetch/`
- Any other scripts → appropriate subdirectories

**Steps:**
1. List all files in `scripts/` directory:
   ```bash
   ls -la scripts/
   ```
2. Categorize each script by purpose:
   - **audit/** - Scripts that audit/analyze code/docs
   - **generate/** - Scripts that generate content/docs
   - **test/** - Test scripts
   - **verify/** - Verification/validation scripts
   - **fetch/** - Scripts that fetch/download data
3. Move files to appropriate `tools/scripts/` subdirectories
4. Search for references:
   ```bash
   grep -r "scripts/" . --exclude-dir=node_modules | grep -E "\.(js|sh)$"
   grep -r "scripts/audit" . --exclude-dir=node_modules
   grep -r "scripts/test" . --exclude-dir=node_modules
   ```
5. Check `package.json` scripts section for references
6. Check CI/CD workflows (`.github/workflows/`) for script references
7. Update ALL references to new paths
8. **TEST:** Run a few scripts to verify they still work:
   ```bash
   # Test an audit script
   # Test a test script
   # Test a verify script
   ```
9. Commit: `git commit -m "Move root scripts to tools/scripts/ organized by purpose"`

**Estimated Time:** 1 hour  
**Risk Level:** Medium

---

## Task 4.2: Move V2 Scripts

**Purpose:** Move all scripts from `v2/scripts/` to `tools/scripts/` organized by purpose

**Files to move:**
- `v2/scripts/*.js` → `tools/scripts/` (organize by purpose)
- `v2/scripts/*.mdx` → appropriate location (e.g., `tools/wiki/` or `contribute/`)
- `v2/scripts/*.md` → appropriate location (e.g., `tools/wiki/` or `contribute/`)

**Steps:**
1. List all files in `v2/scripts/`:
   ```bash
   ls -la v2/scripts/
   ```
2. Categorize each file:
   - **Scripts (.js, .sh)** → `tools/scripts/` by purpose
   - **Documentation (.mdx, .md)** → `tools/wiki/` or `contribute/`
3. Move scripts to appropriate `tools/scripts/` subdirectories
4. Move documentation files to appropriate locations
5. Search for references:
   ```bash
   grep -r "v2/scripts" . --exclude-dir=node_modules
   ```
6. Check `package.json` scripts section
7. Check CI/CD workflows
8. Update ALL references
9. **TEST:** Run scripts to verify they still work
10. Commit: `git commit -m "Move v2/scripts/ to tools/scripts/ organized by purpose"`

**Estimated Time:** 1 hour  
**Risk Level:** Medium

---

## Task 4.3: Organize Scripts by Purpose

**Purpose:** Review all scripts in `tools/scripts/` and ensure they're properly organized

**Steps:**
1. Review all scripts in `tools/scripts/`:
   ```bash
   find tools/scripts/ -type f -name "*.js" -o -name "*.sh" | sort
   ```
2. Verify each script is in the correct subdirectory:
   - **audit/** - Audit/analysis scripts
   - **generate/** - Generation scripts
   - **test/** - Test scripts
   - **verify/** - Verification scripts
   - **fetch/** - Data fetching scripts
3. Move any misplaced scripts to correct subdirectories
4. Create `README.md` in each category explaining purpose and usage:
   - `tools/scripts/README.md` - Overview of all scripts
   - `tools/scripts/audit/README.md` - Audit scripts
   - `tools/scripts/generate/README.md` - Generation scripts
   - `tools/scripts/test/README.md` - Test scripts
   - `tools/scripts/verify/README.md` - Verification scripts
   - `tools/scripts/fetch/README.md` - Fetch scripts
5. Update any references to moved scripts
6. **TEST:** Run all scripts in `tools/scripts/` to verify they work:
   ```bash
   # Test scripts in each category
   ```
7. Commit: `git commit -m "Organize all scripts by purpose and add README files"`

**Estimated Time:** 2 hours  
**Risk Level:** Medium  
**Dependencies:** Task 4.1, Task 4.2

---

## Testing Checklist

After each task, verify:

- [ ] Scripts are in correct locations
- [ ] All references updated (package.json, CI/CD, docs)
- [ ] Scripts still run correctly
- [ ] No broken script paths
- [ ] README files created for each category

---

## Success Criteria

- [ ] All root scripts moved to `tools/scripts/`
- [ ] All v2 scripts moved to `tools/scripts/`
- [ ] All scripts organized by purpose
- [ ] README files created for each category
- [ ] All references updated
- [ ] All scripts still work
- [ ] All changes committed incrementally

---

## Notes

- **DO NOT** move scripts without updating references
- **DO NOT** batch multiple moves without testing
- Always test scripts after moving them
- Check both `package.json` and CI/CD workflows for script references
- Organize by purpose, not by source location

---

## Next Steps

After completing Phase 4:
1. Phase 5: V2 Cleanup (consolidate v2 assets)
2. Phase 6: Verify Styles at Root

See `tasks/plan/migration-plan.md` for full migration plan.
