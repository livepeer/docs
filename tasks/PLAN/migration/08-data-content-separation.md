# Task: Data & Content Separation - Phase 8

## Overview

This task creates the structure for separating data and content from components to enable easy translation and copy updates.

**Note:** This is a FUTURE task and may be ongoing. It's not required for the initial migration.

**Reference:** See `tasks/plan/migration-plan.md` Section 4.6 for complete Snippets data structure.

**Branch:** `docs-v2-preview` (current branch)

**Dependencies:** None (can be done independently)

---

## ⚠️ CRITICAL REQUIREMENTS

1. **READ MIGRATION PLAN FIRST** - `tasks/plan/migration-plan.md` Section 4.6
2. **This is FUTURE work** - Not required for initial migration
3. **Incremental approach** - Extract strings gradually, don't do everything at once
4. **COMMIT AFTER EACH TODO TASK** - Create a commit after completing each individual todo item to ensure pre-commit hooks run and catch problems early
5. **Fix hook failures immediately** - Don't proceed to next task until pre-commit hooks pass
6. **Test after each extraction** - Ensure components still render correctly

---

## Task 8.1: Create Content Structure

**Purpose:** Create directory structure for content/strings separation

**Steps:**
1. Create `snippets/data/content/` directory:
   ```bash
   mkdir -p snippets/data/content/en
   ```
2. Create initial structure:
   ```
   snippets/data/content/
   └── en/
       ├── common.json      # Common UI strings
       ├── components.json  # Component-specific strings
       └── pages.json       # Page-specific strings
   ```
3. Plan content extraction:
   - Identify components with hardcoded strings
   - Identify pages with hardcoded strings
   - Create extraction plan
4. Commit: `git commit -m "Create content structure for translation readiness"`

**Estimated Time:** 15 minutes  
**Risk Level:** Low

---

## Task 8.2: Extract Hardcoded Strings

**Purpose:** Extract hardcoded strings from components to JSON files

**Steps:**
1. **Identify components with hardcoded strings:**
   ```bash
   # Find components with hardcoded English strings
   grep -r "TODO\|Click\|Button\|Error\|Success" snippets/components/ --include="*.jsx" | head -20
   ```

2. **For each component:**
   - Identify hardcoded strings
   - Extract to JSON file in `snippets/data/content/en/`
   - Update component to import and use data file
   - **TEST:** Verify component still renders correctly

3. **Example extraction:**
   ```jsx
   // Before:
   <button>Click here</button>
   
   // After:
   import { BUTTON_TEXT } from '/snippets/data/content/en/common.json'
   <button>{BUTTON_TEXT.clickHere}</button>
   ```

4. **TEST after each component:**
   - Verify component renders correctly
   - Verify strings display correctly
   - Run `mint dev` and check for errors

5. Commit incrementally: `git commit -m "Extract hardcoded strings from [ComponentName]"`

**Estimated Time:** 4+ hours (ongoing)  
**Risk Level:** Medium  
**Dependencies:** Task 8.1

---

## Testing Checklist

After each extraction, verify:

- [ ] Strings extracted to JSON files
- [ ] Components import data files correctly
- [ ] Components still render correctly
- [ ] Strings display correctly
- [ ] No broken imports
- [ ] Mintlify renders correctly

---

## Success Criteria

- [ ] Content structure created
- [ ] Hardcoded strings identified
- [ ] Strings extracted to JSON files
- [ ] Components updated to use data files
- [ ] All components still render correctly
- [ ] Changes committed incrementally

---

## Notes

- **This is FUTURE work** - Not required for initial migration
- **Incremental approach** - Extract strings gradually
- **DO NOT** extract everything at once
- **TEST after each extraction** - Ensure components still work
- **Use absolute paths** - All imports must be absolute from root

---

## Next Steps

After completing Phase 8 (or as ongoing work):
1. Phase 9: Final Validation
2. Continue extracting strings incrementally

See `tasks/plan/migration-plan.md` for full migration plan.
