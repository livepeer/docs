# Task: Root Structure Migration - Phase 1 & 2

## 📖 Source of Truth

**⚠️ IMPORTANT:** The **source of truth** for repository structure is **[README.md](../../../README.md)**. This task document is a historical record of the migration. For current structure rules, always refer to README.md.

## Overview

This task implements the initial phases of the repository structure migration:
- **Phase 1:** Create new directory structure
- **Phase 2:** Move root-level files to their proper locations

**Reference:** See `tasks/plan/migration-plan.md` for complete migration plan.

**Branch:** `docs-v2-preview` (current branch)

---

## ⚠️ CRITICAL REQUIREMENTS

1. **TEST AFTER EVERY SUB-TASK** - Do NOT do everything at once without testing
2. **COMMIT AFTER EACH TODO TASK** - Create a commit after completing each individual todo item to ensure pre-commit hooks run and catch problems early
3. **Fix hook failures immediately** - Don't proceed to next task until pre-commit hooks pass
4. **Commit incrementally** - Small commits after each successful move
5. **Verify references** - Search for and update all references to moved files
6. **Test functionality** - Ensure scripts/configs/assets still work after moves

---

## Phase 1: Create New Directory Structure

### Task 1.1: Create Core Directories

Create the following directory structure at the root level:

```
tools/
├── ai-rules/
├── config/
└── scripts/
    ├── audit/
    ├── generate/
    ├── test/
    ├── verify/
    └── fetch/
api/
contribute/
docs/
tasks/
├── plan/
├── reports/
├── scripts/
├── errors/
├── experiments/
└── notes/
ai-tools/
```

**Action:**
- Create all directories listed above
- Verify directories are created correctly
- Commit: `git commit -m "Create new repository directory structure"`

**Estimated Time:** 15 minutes

---

## Phase 2: Root Directory Cleanup

Move files from root to their proper locations, updating all references and testing after each move.

### Task 2.1: Move AI Guidelines

**Files to move:**
- `AI_GUIDELINES.md` → `tools/ai-rules/AI_GUIDELINES.md`
- `llms.txt.information.md` → `tools/ai-rules/llms.txt.information.md`
- `.cursorrules` → `tools/ai-rules/.cursorrules` (if exists in root)

**Steps:**
1. Search for references:
   ```bash
   grep -r "AI_GUIDELINES" . --exclude-dir=node_modules
   grep -r "llms.txt" . --exclude-dir=node_modules
   ```
2. Move files to `tools/ai-rules/`
3. Update all references found
4. **TEST:** Verify nothing breaks (check if any scripts/configs reference these)
5. Commit: `git commit -m "Move AI guidelines to tools/ai-rules/"`

**Estimated Time:** 20 minutes

---

### Task 2.2: Move Config Files

**Files to move:**
- `cspell.json` → `tools/config/cspell.json`

**Steps:**
1. Search for references:
   ```bash
   grep -r "cspell.json" . --exclude-dir=node_modules
   ```
2. Move file to `tools/config/`
3. Update all references (likely in `package.json` scripts or CI/CD)
4. **TEST:** Run spell checking to verify it still works
5. Commit: `git commit -m "Move cspell.json to tools/config/"`

**Estimated Time:** 15 minutes

---

### Task 2.3: Move Contribution Docs

**Files to move:**
- `CONTRIBUTING.md` → `contribute/CONTRIBUTING.md`

**Steps:**
1. Search for references:
   ```bash
   grep -r "CONTRIBUTING.md" . --exclude-dir=node_modules
   ```
2. Check `README.md` for links
3. Move file to `contribute/`
4. Update all references
5. **TEST:** Verify links in README still work
6. Commit: `git commit -m "Move CONTRIBUTING.md to contribute/"`

**Estimated Time:** 15 minutes

---

### Task 2.4: Verify Public Assets at Root

**⚠️ CRITICAL: Mintlify expects favicon and logo at ROOT, NOT in public/ folder**

**Current state check:**
- Files may be in `public/` folder (wrong location)
- Mintlify expects them at root based on `docs.json` paths

**Steps:**
1. Check current location:
   ```bash
   ls -la favicon.png logo/ 2>/dev/null || echo "Not at root"
   ls -la public/favicon.png public/logo/ 2>/dev/null || echo "Not in public/"
   ```
2. **If files are in `public/`, move them BACK to root:**
   - Move `public/favicon.png` → `favicon.png` (root)
   - Move `public/logo/` → `logo/` (root)
3. **VERIFY** `docs.json` has correct paths:
   - Should be: `"favicon": "/favicon.png"`
   - Should be: `"logo": { "light": "/logo/light.svg", "dark": "/logo/dark.svg" }`
4. Remove empty `public/` directory if it exists
5. **TEST IMMEDIATELY:**
   - Verify assets still load in Mintlify (test locally)
   - Check browser console for 404 errors
6. Commit: `git commit -m "Ensure favicon and logo are at root (Mintlify requirement)"`

**Estimated Time:** 10 minutes

**Note:** Mintlify does NOT use a `public/` folder. These assets MUST be at root level.

---

### Task 2.5: Move AI Tools

**Files to move:**
- `v2/ai-tools/` → `ai-tools/`

**Steps:**
1. Check `docs.json` for references to `v2/ai-tools/`
2. Move directory to `ai-tools/`
3. Update `docs.json` paths if needed
4. **TEST:** Verify pages still render in Mintlify
5. Commit: `git commit -m "Move v2/ai-tools/ to root ai-tools/"`

**Estimated Time:** 15 minutes

---

### Task 2.6: Consolidate OpenAPI Specs

**⚠️ CRITICAL: ENSURE ALL API PAGES WORK AFTER DOING THIS**

**Files to move:**
- `openapi.yaml` → `api/studio.yaml`
- `ai/worker/api/openapi.yaml` → `api/ai-worker.yaml`
- `snippets/data/API/cli-http-api.yaml` → `api/cli-http.yaml` (if exists)

**Steps:**
1. Search for ALL references:
   ```bash
   grep -r "openapi.yaml" . --exclude-dir=node_modules
   grep -r "ai/worker/api" . --exclude-dir=node_modules
   grep -r "snippets/data/API" . --exclude-dir=node_modules
   ```
2. Check `docs.json` for API page references
3. Check Mintlify automations that reference these files
4. Move and rename files to `api/`
5. Update ALL references (scripts, CI/CD, documentation, `docs.json`, automations)
6. **TEST IMMEDIATELY:**
   - Verify API docs still generate (if applicable)
   - Check all API reference pages render correctly
   - Verify no broken links in API documentation
   - Test Mintlify locally to ensure API pages load
7. Commit: `git commit -m "Consolidate OpenAPI specs to api/ directory"`

**Estimated Time:** 30 minutes

---

### Task 2.7: Move Root Scripts

**Files to move:**
- `scripts/audit-*.js` → `tools/scripts/audit/`
- `scripts/test-*.js` → `tools/scripts/test/`
- `scripts/verify-*.js` → `tools/scripts/verify/`
- `scripts/download-*.sh` → `tools/scripts/fetch/`
- Any remaining scripts → appropriate subdirectories

**Steps:**
1. Review all scripts in `scripts/` directory
2. Categorize by purpose (audit, generate, test, verify, fetch)
3. Move to appropriate subdirectories in `tools/scripts/`
4. Search for references:
   ```bash
   grep -r "scripts/" . --exclude-dir=node_modules | grep -E "\.(js|sh)$"
   ```
5. Check `package.json` scripts section
6. Update all references
7. **TEST:** Run a few scripts to verify they still work
8. Commit: `git commit -m "Move root scripts to tools/scripts/ organized by purpose"`

**Estimated Time:** 45 minutes

---

## Testing Checklist

After each task, verify:

- [ ] Files are in new locations
- [ ] All references updated
- [ ] Scripts still run (if scripts moved)
- [ ] Mintlify renders correctly (if assets/docs moved)
- [ ] Configs still work (if configs moved)
- [ ] No 404 errors in browser console (if assets moved)
- [ ] All pages load correctly (if API/docs moved)

---

## Success Criteria

- [ ] All new directories created
- [ ] All root files moved to proper locations (except whitelisted)
- [ ] All references updated
- [ ] Project still works (Mintlify renders, scripts run, configs work)
- [ ] All changes committed incrementally

---

## Notes

- **DO NOT** create `styles/` folder - Mintlify only allows `style.css` at root
- **DO NOT** move files without updating references
- **DO NOT** batch multiple moves without testing
- Always test after each move before proceeding

---

## Next Steps

After completing Phase 1 & 2:
1. Create `.whitelist` file (Phase 3)
2. Update pre-commit hook (Phase 3)
3. Create structure documentation (Phase 4)

See `tasks/plan/migration-plan.md` for full migration plan.
