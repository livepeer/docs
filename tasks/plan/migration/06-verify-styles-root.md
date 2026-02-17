# Task: Verify Styles at Root - Phase 6

## Overview

This task verifies that `style.css` is at root and removes any deprecated styles directories.

**⚠️ CRITICAL: Mintlify only allows ONE CSS file at root - NO `styles/` folder**

**Reference:** See `tasks/plan/migration-plan.md` Section 4.7 for complete Styles rules.

**Branch:** `docs-v2-preview` (current branch)

**Dependencies:** None

---

## ⚠️ CRITICAL REQUIREMENTS

1. **READ MIGRATION PLAN FIRST** - `tasks/plan/migration-plan.md` Section 4.7
2. **DO NOT CREATE `styles/` FOLDER** - Mintlify doesn't support it
3. **DO NOT MOVE `style.css`** - It MUST stay at root
4. **COMMIT AFTER EACH TODO TASK** - Create a commit after completing each individual todo item to ensure pre-commit hooks run and catch problems early
5. **Fix hook failures immediately** - Don't proceed to next task until pre-commit hooks pass
6. **VERIFY** styles still apply after any changes

---

## Task 6.1: Verify style.css at Root

**Purpose:** Ensure `style.css` is at root and remove any deprecated styles directories

**Steps:**
1. **VERIFY** `style.css` is at root:
   ```bash
   ls -la style.css
   ```
   - If NOT at root, move it to root (but this should already be correct)
   
2. **VERIFY** no `styles/` folder exists at root:
   ```bash
   ls -d styles/ 2>/dev/null && echo "ERROR: styles/ folder exists" || echo "OK: No styles/ folder"
   ```
   - If `styles/` folder exists, **DO NOT** use it - Mintlify doesn't support it
   
3. **VERIFY** `snippets/styles/` is removed (should have been removed in Phase 3):
   ```bash
   ls -d snippets/styles/ 2>/dev/null && echo "WARNING: snippets/styles/ still exists" || echo "OK: snippets/styles/ removed"
   ```
   - If it still exists, remove it (contains only deprecated `themeStyles.jsx`)
   
4. **VERIFY** no references to deprecated styles:
   ```bash
   grep -r "snippets/styles" . --exclude-dir=node_modules
   grep -r "themeStyles" . --exclude-dir=node_modules
   ```
   - If references found, they should be updated to use CSS Custom Properties
   
5. **TEST:**
   - Run `mint dev`
   - Verify global styles still apply correctly
   - Check that CSS Custom Properties work
   - Verify theme switching works (light/dark mode)
   
6. Commit: `git commit -m "Verify style.css at root and remove deprecated styles directories"`

**Estimated Time:** 5 minutes  
**Risk Level:** Low

---

## Testing Checklist

- [ ] `style.css` is at root
- [ ] No `styles/` folder at root
- [ ] `snippets/styles/` removed (if it existed)
- [ ] No references to deprecated styles
- [ ] Global styles still apply
- [ ] CSS Custom Properties work
- [ ] Theme switching works

---

## Success Criteria

- [ ] `style.css` verified at root
- [ ] No `styles/` folder exists
- [ ] Deprecated styles directories removed
- [ ] All styles still apply correctly
- [ ] Changes committed

---

## Notes

- **Mintlify only allows ONE CSS file at root** - `style.css`
- **NO `styles/` folder** - Mintlify doesn't support it
- **DO NOT** move `style.css` - It MUST stay at root
- **DO NOT** create `styles/` folder - It will break Mintlify

---

## Next Steps

After completing Phase 6:
1. Phase 7: Tasks Reorganization
2. Phase 8: Data & Content Separation (Future)

See `tasks/plan/migration-plan.md` for full migration plan.
