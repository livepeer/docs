# Task 21: Fix Automations & Workflows Configuration Issues

## Agent instructions (sequential execution)

| Item | Value |
|------|--------|
| **Branch** | `docs-plan/21-fix-automations-workflows` |
| **First step** | Create the branch: `git checkout -b docs-plan/21-fix-automations-workflows` (run from docs-v2-preview — main branch in this fork) |
| **Report path** | `docs/PLAN/reports/21-fix-automations-workflows-report.md` (create on completion) |
| **PR target** | `docs-v2-preview` (main branch in this fork) |

Before starting: run the first step (create branch), then perform the tasks in order.  
On completion: write report (work + testing + follow-ups), then open PR.

---

## Objective

Fix critical configuration issues in GitHub Actions workflows and n8n automations identified in the audit report. This includes path mismatches, branch targets, broken workflows, and code quality improvements.

---

## Strategy & Context

**Intentional Duplication Policy:**
- Both GitHub Actions and n8n workflows are maintained for the same functionality
- This provides flexibility for future maintainers to choose their preferred platform
- **Preference:** Use GitHub Actions where possible (simpler, repository-native)
- **Use n8n for:** Complex workflows requiring external services (Discord, Google Sheets, multi-step approvals, etc.)

**Configuration Standards:**
- All workflows should target `docs-v2-preview` branch (unless specifically for main)
- All n8n workflows should write to `livepeer/docs` repository (not `DeveloperAlly/livepeer-automations`)
- All paths should use `snippets/automations/` (not `snippets/automationData/`)

**Important:** Do NOT remove n8n workflows - they are maintained intentionally alongside GitHub Actions. Fix both to ensure they work correctly.

---

## Scope

- GitHub Actions workflows in `.github/workflows/`
- n8n workflow JSON files in `snippets/automations/scripts/n8n/`
- Scripts in `v2/scripts/dev/` and `.github/scripts/`
- Documentation updates

---

## Deliverables

1. Fixed GitHub Actions workflows (paths, branches, actions versions)
2. Updated n8n workflow configurations (repository targets)
3. Removed broken/duplicate files
4. Updated workflow comments to clarify intentional duplication
5. Completion report documenting all changes

---

## References

- [Automations & Workflows Audit Report](./reports/20-automations-workflows-audit-report.md) - Full analysis with all findings
- [Automations & Workflows Guide](/v2/pages/07_resources/documentation-guide/automations-workflows) - User documentation

---

## Task Breakdown

### Phase 1: Critical Fixes (Must Complete)

#### Task 1.1: Fix Release Workflow Path

**File:** `.github/workflows/update-livepeer-release.yml`

**Changes:**
1. Line 15: Update `actions/checkout@v3` to `actions/checkout@v4`
2. Line 29: Change path from `snippets/automationData/globals/globals.mdx` to `snippets/automations/globals/globals.mdx`
3. Line 39: Change path from `snippets/automationData/globals/globals.mdx` to `snippets/automations/globals/globals.mdx`
4. Line 42: Change path from `snippets/automationData/globals/globals.mdx` to `snippets/automations/globals/globals.mdx`
5. Line 45: Change path from `snippets/automationData/globals/globals.mdx` to `snippets/automations/globals/globals.mdx`
6. Line 58: Change path from `snippets/automationData/globals/globals.mdx` to `snippets/automations/globals/globals.mdx`

**Verification:**
- Check that all path references use `snippets/automations/globals/globals.mdx`
- Verify checkout action is v4

---

#### Task 1.2: Remove Broken Combined Workflow

**File:** `.github/workflows/update-blog-data.yml`

**Action:** Delete the file

**Reason:** Has placeholder API key and duplicates individual workflows

**Verification:**
- File no longer exists
- No broken references to it

---

#### Task 1.3: Fix GitHub Actions Branch Targets

**File 1:** `.github/workflows/update-youtube-data.yml`

**Changes:**
1. Line 21: Change `ref: main` to `ref: docs-v2-preview`

**File 2:** `.github/workflows/update-forum-data.yml`

**Changes:**
1. Lines 1-3: Replace comment with:
   ```yaml
   # NOTE: This workflow runs on docs-v2-preview branch.
   # Both GitHub Actions and n8n workflows are maintained for flexibility.
   # Use whichever you prefer.
   # n8n workflow: snippets/automations/scripts/n8n/Forum-To-Mintlify-Latest-Topics.json
   ```

**File 3:** `.github/workflows/update-ghost-blog-data.yml`

**Changes:**
1. Lines 1-3: Replace comment with:
   ```yaml
   # NOTE: This workflow runs on docs-v2-preview branch.
   # Both GitHub Actions and n8n workflows are maintained for flexibility.
   # Use whichever you prefer.
   # n8n workflow: snippets/automations/scripts/n8n/Ghost-to-Mintlify.json
   ```

**Verification:**
- All workflows target `docs-v2-preview` branch
- Comments accurately reflect behavior and strategy

---

#### Task 1.4: Fix n8n Repository Targets

**File 1:** `snippets/automations/scripts/n8n/Ghost-to-Mintlify.json`

**Changes:**
1. Find GitHub node (type: `n8n-nodes-base.github`, operation: `edit`)
2. Update `owner` parameter: Change from `"DeveloperAlly"` to `"livepeer"`
3. Update `repository` parameter: Change from `"livepeer-automations"` to `"docs"`
4. Update `filePath` parameter: Change from `"data/ghostBlogData.jsx"` to `"snippets/automations/blog/ghostBlogData.jsx"`
5. Ensure `additionalParameters.branch.branch` is set to `"docs-v2-preview"`

**File 2:** `snippets/automations/scripts/n8n/Forum-To-Mintlify-Latest-Topics.json`

**Changes:**
1. Find GitHub node (type: `n8n-nodes-base.github`, operation: `edit`)
2. Update `owner` parameter: Change from `"DeveloperAlly"` to `"livepeer"`
3. Update `repository` parameter: Change from `"livepeer-automations"` to `"docs"`
4. Update `filePath` parameter: Change from `"data/forumData.jsx"` to `"snippets/automations/forum/forumData.jsx"`
5. Ensure `additionalParameters.branch.branch` is set to `"docs-v2-preview"`

**Verification:**
- Both workflows write to `livepeer/docs` repository
- Both write to `docs-v2-preview` branch
- File paths match GitHub Actions output paths

---

### Phase 2: Code Quality Improvements

#### Task 2.1: Use Existing YouTube Script in Workflow

**File:** `.github/workflows/update-youtube-data.yml`

**Changes:**
1. Remove lines 34-144 (inline Node.js script)
2. Replace with:
   ```yaml
   - name: Fetch and process YouTube videos
     env:
       YOUTUBE_API_KEY: ${{ secrets.YOUTUBE_API_KEY }}
       CHANNEL_ID: UCzfHtZnmUzMbJDxGCwIgY2g
     run: |
       node .github/scripts/fetch-youtube-data.js
   ```

**Verification:**
- Workflow uses external script file
- No inline code duplication
- Script file exists and works

---

#### Task 2.2: Consolidate SEO Generators

**Files:**
- `snippets/scripts/generate-seo.js` - **KEEP** (canonical)
- `v2/scripts/dev/seo-generator-safe.js` - **REMOVE**

**Actions:**
1. Delete `v2/scripts/dev/seo-generator-safe.js`
2. Search for any references to `seo-generator-safe.js` in:
   - README files
   - Other scripts
   - Documentation
3. Update any references to point to `generate-seo.js`

**Verification:**
- Duplicate file removed
- No broken references
- Documentation updated if needed

---

#### Task 2.3: Update Workflow Comments

**Files:**
- `.github/workflows/update-forum-data.yml` (already done in 1.3)
- `.github/workflows/update-ghost-blog-data.yml` (already done in 1.3)
- `.github/workflows/update-youtube-data.yml`

**Changes for `update-youtube-data.yml`:**
1. Lines 1-4: Replace comment with:
   ```yaml
   # NOTE: This workflow runs on docs-v2-preview branch.
   # Both GitHub Actions and n8n workflows are maintained for flexibility.
   # Use whichever you prefer.
   # n8n workflow: snippets/automations/scripts/n8n/YouTube-To-Mintlify.json
   # You will need to Add YOUTUBE_API_KEY secret in repo settings (Settings → Secrets → Actions) for this github action to work.
   ```

**Verification:**
- All workflow comments clarify intentional duplication
- Comments are accurate and helpful

---

### Phase 3: Cleanup (Optional - Do if Time Permits)

#### Task 3.1: Consolidate OG Image Updaters

**Files:**
- `v2/scripts/dev/update-og-image.js`
- `v2/scripts/dev/update-all-og-images.js`
- `v2/scripts/dev/batch-update-og-image.sh`
- `v2/scripts/dev/replace-og-image.py`

**Actions:**
1. Test each script to see which works best
2. Document the canonical version in usage guide
3. Add note in `v2/scripts/dev/README.mdx` about which to use
4. Optionally remove or archive unused ones

**Note:** This is optional - can be done later if needed.

---

#### Task 3.2: Document or Remove Undocumented Scripts

**Files:**
- `scripts/download-linkedin-video.sh`
- `scripts/download-linkedin-with-cookies.sh`

**Actions:**
1. Check if scripts are used anywhere
2. If used: Add usage documentation
3. If unused: Remove files

**Note:** This is optional - can be done later if needed.

---

## Testing

After completing Phase 1 tasks:

1. **Verify workflow syntax:**
   ```bash
   # Check YAML syntax (if yamllint available)
   yamllint .github/workflows/*.yml
   ```

2. **Verify file paths exist:**
   - Check that `snippets/automations/globals/globals.mdx` exists
   - Verify n8n file paths match GitHub Actions output paths

3. **Verify branch references:**
   - All workflows should reference `docs-v2-preview` (except broken-links which is PR-only)

4. **Check for broken references:**
   - Search for references to deleted files
   - Search for old paths (`snippets/automationData`)

---

## Completion Checklist

### Phase 1: Critical Fixes
- [ ] Task 1.1: Release workflow path fixed
- [ ] Task 1.2: Broken workflow removed
- [ ] Task 1.3: Branch targets fixed
- [ ] Task 1.4: n8n repository targets fixed

### Phase 2: Code Quality
- [ ] Task 2.1: YouTube workflow uses script file
- [ ] Task 2.2: Duplicate SEO generator removed
- [ ] Task 2.3: Workflow comments updated

### Phase 3: Cleanup (Optional)
- [ ] Task 3.1: OG image updaters documented
- [ ] Task 3.2: Undocumented scripts handled

### Final Steps
- [ ] All changes tested
- [ ] Completion report written
- [ ] PR opened with clear description

---

## Completion Report Template

Create `docs/PLAN/reports/21-fix-automations-workflows-report.md` with:

1. **Summary** - What was fixed
2. **Changes Made** - Detailed list of all changes
3. **Testing** - What was tested and results
4. **Remaining Issues** - Any issues that couldn't be fixed
5. **Follow-up Tasks** - Optional tasks for later

---

## Important Notes

1. **Intentional Duplication:** Do NOT remove n8n workflows - they are maintained intentionally alongside GitHub Actions
2. **Both Must Work:** Fix both GitHub Actions and n8n workflows to ensure both options work
3. **Documentation:** Update comments to clarify the duplication strategy
4. **Test Carefully:** Verify paths exist before updating references
5. **n8n Access:** Task 1.4 requires n8n instance access - if not available, document what needs to be changed

---

## References

- [Audit Report](./reports/20-automations-workflows-audit-report.md) - Full analysis with all findings
- [Usage Guide](/v2/pages/07_resources/documentation-guide/automations-workflows) - User documentation
