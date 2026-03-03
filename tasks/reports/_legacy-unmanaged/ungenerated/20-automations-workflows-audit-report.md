# Automations & Workflows Audit Report

**Date:** 2025-01-XX  
**Branch:** `docs-plan/20-automations-workflows-audit`  
**Auditor:** AI Assistant

## Executive Summary

This audit examined all automation scripts, GitHub Actions workflows, n8n automations, and pre-commit hooks in the Livepeer documentation repository. The audit identified **8 GitHub Actions workflows**, **8 n8n automation workflows**, **20+ scripts across multiple directories**, and **pre-commit hooks** for style guide enforcement.

### Key Findings

- **Intentional Duplications:** Multiple workflows and scripts perform similar functions (Ghost blog, Forum, YouTube data fetching) - **This is intentional to provide flexibility for future maintainers**
- **Configuration Issues:** Several workflows reference wrong branches, paths, or have placeholder API keys
- **Active vs Inactive:** Many n8n workflows are marked as `"active": false` but GitHub Actions note they're being used as alternatives
- **Dangerous Scripts:** `auto-commit.sh` in `tools/scripts/dev/` automatically commits changes without review - **REMOVED**
- **Path Mismatches:** Some workflows reference `snippets/automationData/` but actual path is `snippets/automations/`
- **Missing Documentation:** Several scripts lack usage documentation

### Automation Strategy

**Intentional Duplication Policy:**
- Both GitHub Actions and n8n workflows are maintained for the same functionality to provide flexibility
- **Preference:** Use GitHub Actions where possible (simpler, repository-native)
- **Use n8n for:** Complex workflows requiring external services (Discord, Google Sheets, multi-step approvals, etc.)
- Future maintainers can choose their preferred platform

### Critical Issues

1. **`update-blog-data.yml`** has placeholder API key (`YOUR_CONTENT_API_KEY`) - **REMOVE**
2. **`update-livepeer-release.yml`** references wrong path (`snippets/automationData/globals/globals.mdx` should be `snippets/automations/globals/globals.mdx`) - **FIX**
3. **`auto-commit.sh`** - **REMOVED** ✅
4. **Multiple SEO generators** exist - need to identify canonical version
5. **Branch mismatches** - some workflows target `main` when they should target `docs-v2-preview` - **FIX**
6. **n8n workflows write to wrong repository** - Some write to `DeveloperAlly/livepeer-automations` instead of `livepeer/docs` - **FIX**

### Recommendations

1. **Fix configuration issues** - Update paths, branches, API keys, and repository targets
2. **Document automation strategy** - Clarify when to use GitHub Actions vs n8n
3. **Standardize on one SEO generator** - Remove duplicates
4. **Fix n8n repository targets** - Ensure all workflows write to correct repository
5. **Update workflow comments** - Clarify that duplication is intentional for flexibility

---

## 1. GitHub Actions Workflows Analysis

### 1.1 Active Workflows

#### `broken-links.yml`
- **Purpose:** Checks for broken links on pull requests
- **Trigger:** PRs to `main` branch
- **Status:** ✅ Active and working
- **Issues:** None identified
- **Recommendation:** Keep as-is

#### `sdk_generation.yaml`
- **Purpose:** Generates SDKs using Speakeasy API
- **Trigger:** Daily schedule (midnight UTC) + manual dispatch
- **Status:** ✅ Active
- **Secrets Required:** `SPEAKEASY_API_KEY`
- **Issues:** None identified
- **Recommendation:** Keep as-is

#### `test-v2-pages.yml`
- **Purpose:** Tests all v2 pages for console errors using Puppeteer
- **Trigger:** Push/PR to `main` and `docs-v2-preview`
- **Status:** ✅ Active and well-documented
- **Issues:** None identified
- **Recommendation:** Keep as-is

#### `update-livepeer-release.yml`
- **Purpose:** Updates latest Livepeer release version in globals file
- **Trigger:** Every 30 minutes + manual dispatch
- **Status:** ⚠️ **HAS PATH ISSUE**
- **Issues:** 
  - References `snippets/automationData/globals/globals.mdx` but should be `snippets/automations/globals/globals.mdx`
  - Uses outdated `actions/checkout@v3` (should be v4)
- **Recommendation:** Fix path and update action version

### 1.2 Duplicated/Alternative Workflows

#### `update-blog-data.yml`
- **Purpose:** Updates Ghost blog and Forum data (combined)
- **Trigger:** Daily at midnight UTC + manual dispatch
- **Status:** ⚠️ **HAS PLACEHOLDER API KEY**
- **Issues:**
  - Contains placeholder `YOUR_CONTENT_API_KEY` in curl command
  - Duplicates functionality of `update-ghost-blog-data.yml` and `update-forum-data.yml`
  - Uses simple curl instead of Node.js scripts
- **Recommendation:** **REMOVE** - Use individual workflows or n8n instead

#### `update-forum-data.yml`
- **Purpose:** Updates forum data using Node.js script
- **Trigger:** Daily at midnight UTC + manual dispatch
- **Status:** ⚠️ **NOTES SAY IT ONLY RUNS ON MAIN, N8N USED AS ALTERNATIVE**
- **Issues:**
  - Comment says "THIS GITHUB ACTION WILL ONLY RUN ON MAIN BRANCH. N8N IS BEING USING AS AN ALTERNATIVE UNTIL THEN."
  - References wrong n8n path: `/snippets/automations/n8n-workflows/forum-to-mintlify-latest-topics.json` (should be `/snippets/automations/scripts/n8n/Forum-To-Mintlify-Latest-Topics.json`)
  - Uses `docs-v2-preview` branch but comment says main only
- **Recommendation:** **CLARIFY STATUS** - Either activate for docs-v2-preview or remove if n8n is primary

#### `update-ghost-blog-data.yml`
- **Purpose:** Updates Ghost blog data using Node.js script
- **Trigger:** Daily at midnight UTC + manual dispatch
- **Status:** ⚠️ **NOTES SAY IT ONLY RUNS ON MAIN, N8N USED AS ALTERNATIVE**
- **Issues:**
  - Same issues as `update-forum-data.yml`
  - References wrong n8n path
- **Recommendation:** **CLARIFY STATUS** - Either activate for docs-v2-preview or remove if n8n is primary

#### `update-youtube-data.yml`
- **Purpose:** Updates YouTube video data
- **Trigger:** Weekly on Sunday + manual dispatch
- **Status:** ⚠️ **NOTES SAY IT ONLY RUNS ON MAIN, N8N USED AS ALTERNATIVE**
- **Issues:**
  - Comment says "THIS GITHUB ACTION WILL ONLY RUN ON MAIN BRANCH"
  - References wrong n8n path
  - Targets `main` branch but should target `docs-v2-preview`
  - Inline Node.js script instead of using `.github/scripts/fetch-youtube-data.js`
- **Recommendation:** **CLARIFY STATUS** - Either fix to work on docs-v2-preview or remove if n8n is primary

---

## 2. n8n Automation Workflows Analysis

### 2.1 Active Workflows

#### `Luma-To-Mintlify.json`
- **Purpose:** Fetches Luma calendar events and updates GitHub
- **Status:** ✅ **ACTIVE** (`"active": true`)
- **Schedule:** Weekly
- **Output:** `snippets/automations/luma/lumaEventsData.jsx`
- **Branch:** `docs-v2-preview`
- **Issues:** None identified
- **Recommendation:** Keep as-is

#### `Showcase_To_Mintlify_Pipeline.json`
- **Purpose:** Handles showcase project submissions and approvals
- **Status:** ✅ **ACTIVE** (`"active": true`)
- **Trigger:** Google Sheets trigger (hourly polling)
- **Output:** `snippets/automations/showcase/showcaseData.jsx`
- **Branch:** `docs-v2-preview`
- **Issues:** Complex workflow with many dependencies (Google Sheets, Discord, GitHub)
- **Recommendation:** Keep but document thoroughly

### 2.2 Inactive Workflows (Duplicates of GitHub Actions)

#### `Ghost-to-Mintlify.json`
- **Purpose:** Fetches Ghost blog posts
- **Status:** ❌ **INACTIVE** (`"active": false`)
- **Schedule:** Interval-based (not configured)
- **Output:** `data/ghostBlogData.jsx` in `livepeer-automations` repo (not this repo!)
- **Issues:**
  - Writes to different repository (`DeveloperAlly/livepeer-automations`)
  - Inactive
  - Duplicates GitHub Action functionality
- **Recommendation:** **REMOVE OR FIX** - If using n8n, update to write to correct repo and activate

#### `Forum-To-Mintlify-Latest-Topics.json`
- **Purpose:** Fetches forum topics
- **Status:** ❌ **INACTIVE** (`"active": false`)
- **Schedule:** Daily cron
- **Output:** `data/forumData.jsx` in `livepeer-automations` repo (not this repo!)
- **Issues:**
  - Same issues as Ghost workflow
  - Writes to wrong repository
- **Recommendation:** **REMOVE OR FIX** - If using n8n, update to write to correct repo and activate

#### `YouTube-To-Mintlify.json`
- **Purpose:** Fetches YouTube videos
- **Status:** ❌ **INACTIVE** (`"active": false`)
- **Schedule:** Weekly
- **Output:** `snippets/automations/youtube/youtubeData.jsx`
- **Branch:** `docs-v2-preview`
- **Issues:**
  - Inactive
  - Duplicates GitHub Action functionality
  - Has placeholder `YOUR_YOUTUBE_API_KEY_HERE` in one node
- **Recommendation:** **REMOVE OR FIX** - If using n8n, fix API key and activate, then remove GitHub Action

#### `Discord_Announce_to_Mintlify.json`
- **Purpose:** Fetches Discord announcements
- **Status:** ❌ **INACTIVE** (`"active": false`)
- **Schedule:** Interval-based (not configured)
- **Output:** `snippets/automations/discord/discordAnnouncementsData.jsx`
- **Branch:** `docs-v2-preview`
- **Issues:**
  - Inactive
  - No GitHub Action equivalent (unique functionality)
- **Recommendation:** **ACTIVATE OR REMOVE** - If needed, activate and document; if not, remove

### 2.3 Utility Workflows

#### `mp4-to-gif.json`
- **Purpose:** Converts MP4 videos to GIF format
- **Status:** Unknown (no active flag in JSON)
- **Trigger:** Webhook
- **Issues:** None identified
- **Recommendation:** Keep as utility workflow

#### `Showcase_Project_Pipeline.json`
- **Purpose:** Handles project submissions via Google Forms
- **Status:** Unknown
- **Trigger:** Google Forms submission
- **Issues:** Complex workflow with many placeholders (`YOUR_SHEET_ID`, `YOUR_DISCORD_WEBHOOK_URL`, etc.)
- **Recommendation:** **DOCUMENT OR REMOVE** - Either complete configuration or remove if not used

---

## 3. Scripts Analysis

### 3.1 Content Generation Scripts

#### `tools/scripts/snippets/generate-seo.js`
- **Purpose:** Generates SEO metadata (keywords, og:image) for MDX files
- **Status:** ✅ Well-documented
- **Issues:** None identified
- **Recommendation:** Keep as primary SEO generator

#### `tools/scripts/dev/seo-generator-safe.js`
- **Purpose:** "Safe" SEO generator that only modifies keywords and og:image
- **Status:** ⚠️ **DUPLICATE FUNCTIONALITY**
- **Issues:**
  - Duplicates `generate-seo.js` functionality
  - Has `DRY_RUN = true` hardcoded
  - Less documented than main script
- **Recommendation:** **REMOVE OR CONSOLIDATE** - Use `generate-seo.js` as canonical version

#### `tools/scripts/snippets/generate-docs-status.js`
- **Purpose:** Generates documentation status tables from docs.json
- **Status:** ✅ Well-documented
- **Issues:** None identified
- **Recommendation:** Keep as-is

#### `tools/scripts/snippets/generate-api-docs.sh`
- **Purpose:** Generates API documentation from OpenAPI specs
- **Status:** ✅ Well-documented
- **Issues:** None identified
- **Recommendation:** Keep as-is

#### `tools/scripts/snippets/update-component-library.sh`
- **Purpose:** Auto-generates component library index page
- **Status:** ✅ Well-documented
- **Issues:** None identified
- **Recommendation:** Keep as-is

### 3.2 Data Fetching Scripts

#### `.github/scripts/fetch-forum-data.js`
- **Purpose:** Fetches and processes forum data
- **Status:** ✅ Used by GitHub Action
- **Issues:** None identified
- **Recommendation:** Keep as-is

#### `.github/scripts/fetch-ghost-blog-data.js`
- **Purpose:** Fetches and processes Ghost blog data
- **Status:** ✅ Used by GitHub Action
- **Issues:** None identified
- **Recommendation:** Keep as-is

#### `.github/scripts/fetch-youtube-data.js`
- **Purpose:** Fetches and processes YouTube data
- **Status:** ⚠️ **NOT USED** - GitHub Action has inline script instead
- **Issues:** Script exists but workflow doesn't use it
- **Recommendation:** **UPDATE WORKFLOW** - Use this script instead of inline code

#### `tools/scripts/snippets/fetch-openapi-specs.sh`
- **Purpose:** Fetches OpenAPI specs from external repos
- **Status:** ✅ Well-documented
- **Issues:** None identified
- **Recommendation:** Keep as-is

#### `tools/scripts/snippets/fetch-external-docs.sh`
- **Purpose:** Fetches external documentation files
- **Status:** ✅ Well-documented
- **Issues:** None identified
- **Recommendation:** Keep as-is

#### `tools/scripts/snippets/fetch-lpt-exchanges.sh`
- **Purpose:** Fetches LPT exchange data from CoinGecko
- **Status:** ✅ Well-documented
- **Issues:** None identified
- **Recommendation:** Keep as-is

### 3.3 Testing Scripts

#### `scripts/test-v2-pages.js`
- **Purpose:** Tests all v2 pages for console errors
- **Status:** ✅ Well-documented, used by GitHub Action
- **Issues:** None identified
- **Recommendation:** Keep as-is

### 3.4 Utility Scripts

#### `tools/scripts/dev/update-og-image.js`
- **Purpose:** Updates OG images for pages
- **Status:** ⚠️ **POTENTIALLY DUPLICATE**
- **Issues:** Multiple OG image updaters exist
- **Recommendation:** **CONSOLIDATE** - Document which one to use

#### `tools/scripts/dev/update-all-og-images.js`
- **Purpose:** Batch updates OG images
- **Status:** ⚠️ **POTENTIALLY DUPLICATE**
- **Issues:** Multiple OG image updaters exist
- **Recommendation:** **CONSOLIDATE** - Document which one to use

#### `tools/scripts/dev/batch-update-og-image.sh`
- **Purpose:** Batch updates OG images (shell script)
- **Status:** ⚠️ **POTENTIALLY DUPLICATE**
- **Issues:** Multiple OG image updaters exist
- **Recommendation:** **CONSOLIDATE** - Document which one to use

#### `tools/scripts/dev/replace-og-image.py`
- **Purpose:** Python script to replace OG images
- **Status:** ⚠️ **POTENTIALLY DUPLICATE**
- **Issues:** Multiple OG image updaters exist, different language
- **Recommendation:** **CONSOLIDATE** - Choose one language/tool

#### `tools/scripts/dev/add-callouts.js`
- **Purpose:** Adds callouts to pages
- **Status:** Has README documentation
- **Issues:** None identified
- **Recommendation:** Keep as-is

#### `scripts/download-linkedin-video.sh`
- **Purpose:** Downloads LinkedIn videos
- **Status:** ⚠️ **UNDOCUMENTED**
- **Issues:** No documentation found
- **Recommendation:** **DOCUMENT OR REMOVE** - Add usage docs or remove if unused

#### `scripts/download-linkedin-with-cookies.sh`
- **Purpose:** Downloads LinkedIn videos with authentication
- **Status:** ⚠️ **UNDOCUMENTED**
- **Issues:** No documentation found, requires cookies (security concern)
- **Recommendation:** **DOCUMENT OR REMOVE** - Add usage docs or remove if unused

### 3.5 Dangerous Scripts

#### `tools/scripts/dev/auto-commit.sh`
- **Purpose:** Automatically commits all changes
- **Status:** ⚠️ **⚠️ DANGEROUS ⚠️**
- **Issues:**
  - Hardcoded path: `/Users/alisonhaire/Documents/Livepeer/livepeer-docs-current`
  - Automatically commits without review
  - Could commit sensitive data or broken code
  - Checks out `docs-v2-dev` branch
- **Recommendation:** **REMOVE IMMEDIATELY** - This is a security and quality risk

---

## 4. Pre-commit Hooks Analysis

### 4.1 Current Implementation

**Location:** `.githooks/`

**Files:**
- `pre-commit` - Main hook (154 lines)
- `verify.sh` - Verification script (182 lines)
- `install.sh` - Installation script
- `README.md` - Quick reference

### 4.2 What Gets Checked

**Style Guide Compliance:**
- ❌ ThemeData usage (deprecated)
- ❌ Hardcoded theme colors
- ⚠️ Relative imports
- ⚠️ @mintlify/components imports
- ⚠️ React hook imports

**Verification Scripts:**
- ✅ MDX syntax validation
- ✅ JSON syntax validation
- ✅ Shell script syntax
- ✅ JavaScript syntax
- ✅ Mintlify config validation
- ✅ Import path validation
- ✅ Browser validation (if Puppeteer available and mint dev running)

### 4.3 Status

- **Documentation:** ✅ Well-documented in `docs/CONTRIBUTING/GIT-HOOKS.md`
- **Installation:** ✅ Has install script
- **Effectiveness:** ✅ Comprehensive checks
- **Issues:** None identified
- **Recommendation:** Keep as-is, well implemented

---

## 5. Duplications Matrix & Strategy

**Note:** Duplication between GitHub Actions and n8n is **intentional** to provide flexibility for future maintainers.

### When to Use GitHub Actions vs n8n

**Use GitHub Actions for:**
- ✅ Simple data fetching (API calls, file updates)
- ✅ Repository-native operations (commits, PRs, checks)
- ✅ CI/CD workflows (testing, validation)
- ✅ Scheduled tasks that only need GitHub access
- ✅ When you want everything in the repository

**Use n8n for:**
- ✅ Complex multi-step workflows
- ✅ External service integrations (Discord, Google Sheets, Google Forms)
- ✅ Approval workflows with notifications
- ✅ Workflows requiring user interaction
- ✅ When you need more visual workflow management

### Duplications Matrix

| Functionality | GitHub Action | n8n Workflow | Script | Status | Recommendation |
|--------------|---------------|--------------|--------|--------|----------------|
| Ghost Blog Data | `update-ghost-blog-data.yml` | `Ghost-to-Mintlify.json` | `.github/scripts/fetch-ghost-blog-data.js` | Both available | **Keep both** - Fix GitHub Action for docs-v2-preview, fix n8n repository target |
| Forum Data | `update-forum-data.yml` | `Forum-To-Mintlify-Latest-Topics.json` | `.github/scripts/fetch-forum-data.js` | Both available | **Keep both** - Fix GitHub Action for docs-v2-preview, fix n8n repository target |
| YouTube Data | `update-youtube-data.yml` | `YouTube-To-Mintlify.json` | `.github/scripts/fetch-youtube-data.js` | Both available | **Keep both** - Fix GitHub Action branch, use script instead of inline code |
| SEO Generation | N/A | N/A | `generate-seo.js` + `seo-generator-safe.js` | Two scripts | **Consolidate** - Use `generate-seo.js` as canonical, remove duplicate |
| OG Image Updates | N/A | N/A | 4 different scripts | Multiple scripts | **Consolidate** - Document which one to use, remove others |
| Combined Blog+Forum | `update-blog-data.yml` | N/A | N/A | Has placeholder API key | **REMOVE** - Use individual workflows instead |

---

## 6. Gaps & Missing Automations

### 6.1 Missing from Documentation

Based on `snippets/automations/README.mdx`, the following are listed but not found:
- ❌ **RFPs & Display** - No automation found
- ❌ **Twitter Tweets** - No automation found
- ❌ **GitHub Issues** - No automation found
- ❌ **GitHub Pull Requests** - No automation found
- ❌ **Automated Changelog from GitHub Releases** - No automation found
- ❌ **Transcribe YouTube Video** - No automation found
- ❌ **Translate pages** - No automation found
- ❌ **Create hero image** - No automation found
- ❌ **Check All Documentation Links (periodically)** - Only on PRs, not periodic

### 6.2 Recommended Additions

1. **Periodic Link Checking** - Currently only on PRs, should run daily/weekly
2. **Automated Changelog** - Generate from GitHub releases
3. **Spell Checking** - Automated spell check on commits
4. **Broken Link Monitoring** - Beyond PR checks, monitor production site

---

## 7. Removal Recommendations

### 7.1 High Priority Removals

1. **`tools/scripts/dev/auto-commit.sh`** - ⚠️ **DANGEROUS** - Remove immediately
2. **`update-blog-data.yml`** - Has placeholder API key, duplicates other workflows
3. **`tools/scripts/dev/seo-generator-safe.js`** - Duplicates `generate-seo.js`

### 7.2 Medium Priority Removals

1. **`tools/scripts/dev/update-og-image.js`** - If not actively used, consolidate
2. **`tools/scripts/dev/update-all-og-images.js`** - If not actively used, consolidate
3. **`tools/scripts/dev/batch-update-og-image.sh`** - If not actively used, consolidate
4. **`tools/scripts/dev/replace-og-image.py`** - If not actively used, consolidate
5. **Inactive n8n workflows** - If not planning to use, remove to reduce confusion

### 7.3 Low Priority (Document or Remove)

1. **`scripts/download-linkedin-video.sh`** - Document or remove
2. **`scripts/download-linkedin-with-cookies.sh`** - Document or remove
3. **`Showcase_Project_Pipeline.json`** - Complete configuration or remove

---

## 8. Configuration Issues

### 8.1 Path Mismatches

1. **`update-livepeer-release.yml`** references `snippets/automationData/globals/globals.mdx` but should be `snippets/automations/globals/globals.mdx`
2. **n8n workflows** reference wrong paths in comments (e.g., `/snippets/automations/n8n-workflows/` should be `/snippets/automations/scripts/n8n/`)

### 8.2 Branch Mismatches

1. **`update-youtube-data.yml`** targets `main` but should target `docs-v2-preview`
2. **`update-forum-data.yml`** and **`update-ghost-blog-data.yml`** comments say "only runs on main" but code uses `docs-v2-preview`

### 8.3 API Key Issues

1. **`update-blog-data.yml`** has placeholder `YOUR_CONTENT_API_KEY`
2. **`YouTube-To-Mintlify.json`** has placeholder `YOUR_YOUTUBE_API_KEY_HERE` in one node

### 8.4 Repository Mismatches

1. **`Ghost-to-Mintlify.json`** writes to `DeveloperAlly/livepeer-automations` instead of `livepeer/docs`
2. **`Forum-To-Mintlify-Latest-Topics.json`** writes to `DeveloperAlly/livepeer-automations` instead of `livepeer/docs`

---

## 9. Prioritization

### Must-Have (Critical Fixes)

1. ✅ Fix `update-livepeer-release.yml` path
2. ✅ Remove `auto-commit.sh`
3. ✅ Remove `update-blog-data.yml` (placeholder API key)
4. ✅ Clarify which data fetching method is primary (GitHub Actions vs n8n)

### Should-Have (Important Improvements)

1. ✅ Consolidate SEO generators
2. ✅ Consolidate OG image updaters
3. ✅ Fix branch references in workflows
4. ✅ Fix n8n repository targets
5. ✅ Document all scripts

### Nice-to-Have (Quality of Life)

1. ✅ Remove unused scripts
2. ✅ Add missing automations from README
3. ✅ Standardize script locations
4. ✅ Add periodic link checking

---

## 10. Next Steps & Task Recommendations

### ✅ Completed

1. ✅ **Removed `auto-commit.sh`** - Dangerous script deleted
2. ✅ **Created usage documentation** - Comprehensive guide in `v2/pages/07_resources/documentation-guide/automations-workflows.mdx`
3. ✅ **Created audit report** - This document

### 🔴 High Priority (Critical Fixes)

#### Task 1: Fix Path in Release Workflow
**File:** `.github/workflows/update-livepeer-release.yml`
- **Issue:** References `snippets/automationData/globals/globals.mdx` (wrong path)
- **Fix:** Change to `snippets/automations/globals/globals.mdx`
- **Also:** Update `actions/checkout@v3` to `@v4`
- **Impact:** Workflow currently fails or writes to wrong location

#### Task 2: Remove Broken Combined Workflow
**File:** `.github/workflows/update-blog-data.yml`
- **Issue:** Has placeholder API key `YOUR_CONTENT_API_KEY`, duplicates individual workflows
- **Fix:** Delete this file - use individual `update-ghost-blog-data.yml` and `update-forum-data.yml` instead
- **Impact:** Prevents confusion and broken workflow runs

#### Task 3: Fix GitHub Actions Branch Targets
**Files:** 
- `.github/workflows/update-youtube-data.yml` (targets `main`, should be `docs-v2-preview`)
- `.github/workflows/update-forum-data.yml` (comment says main only, but code uses docs-v2-preview - clarify)
- `.github/workflows/update-ghost-blog-data.yml` (same issue)

**Fix:** 
- Update `update-youtube-data.yml` to target `docs-v2-preview` branch
- Update comments in forum/ghost workflows to reflect actual behavior OR fix code to match comments
- **Impact:** Ensures workflows run on correct branch

#### Task 4: Fix n8n Repository Targets
**Files:**
- `snippets/automations/scripts/n8n/Ghost-to-Mintlify.json` - Writes to `DeveloperAlly/livepeer-automations`
- `snippets/automations/scripts/n8n/Forum-To-Mintlify-Latest-Topics.json` - Writes to `DeveloperAlly/livepeer-automations`

**Fix:** Update GitHub node configuration to write to `livepeer/docs` repository on `docs-v2-preview` branch
- **Impact:** Ensures n8n workflows update correct repository

### 🟡 Medium Priority (Important Improvements)

#### Task 5: Consolidate SEO Generators
**Files:**
- `tools/scripts/snippets/generate-seo.js` (keep - canonical)
- `tools/scripts/dev/seo-generator-safe.js` (remove - duplicate)

**Fix:** Remove `seo-generator-safe.js`, update any references to use `generate-seo.js`
- **Impact:** Reduces confusion, maintains single source of truth

#### Task 6: Use Existing YouTube Script in Workflow
**File:** `.github/workflows/update-youtube-data.yml`
- **Issue:** Has inline Node.js script instead of using `.github/scripts/fetch-youtube-data.js`
- **Fix:** Replace inline script with call to existing script file
- **Impact:** Better maintainability, DRY principle

#### Task 7: Fix n8n Workflow Comments
**Files:** All n8n workflow JSON files
- **Issue:** Comments reference wrong paths (e.g., `/snippets/automations/n8n-workflows/` should be `/snippets/automations/scripts/n8n/`)
- **Fix:** Update comments in workflow files (if any) or README references
- **Impact:** Prevents confusion when importing workflows

#### Task 8: Consolidate OG Image Updaters
**Files:**
- `tools/scripts/dev/update-og-image.js`
- `tools/scripts/dev/update-all-og-images.js`
- `tools/scripts/dev/batch-update-og-image.sh`
- `tools/scripts/dev/replace-og-image.py`

**Fix:** 
1. Test which one works best
2. Document the canonical version
3. Remove or archive the others
- **Impact:** Reduces confusion, maintains single tool

### 🟢 Low Priority (Quality of Life)

#### Task 9: Document Undocumented Scripts
**Files:**
- `scripts/download-linkedin-video.sh`
- `scripts/download-linkedin-with-cookies.sh`

**Fix:** Add usage documentation or remove if unused
- **Impact:** Better maintainability

#### Task 10: Update Workflow Comments
**Files:** All GitHub Actions workflows with "alternative" comments
- **Fix:** Update comments to clarify intentional duplication strategy
- **Example:** Change "N8N IS BEING USING AS AN ALTERNATIVE" to "Both GitHub Actions and n8n workflows are maintained for flexibility. Use whichever you prefer."
- **Impact:** Clarifies strategy for future maintainers

#### Task 11: Add Periodic Link Checking
**File:** New workflow `.github/workflows/check-links-periodic.yml`
- **Fix:** Create scheduled workflow (daily/weekly) to check all links, not just on PRs
- **Impact:** Proactive link monitoring

### 📋 Recommended Task Order

1. **Task 1** - Fix release workflow path (critical, blocks functionality)
2. **Task 2** - Remove broken workflow (prevents errors)
3. **Task 3** - Fix branch targets (ensures workflows run correctly)
4. **Task 4** - Fix n8n repository targets (ensures n8n updates correct repo)
5. **Task 5** - Consolidate SEO generators (cleanup)
6. **Task 6** - Use existing YouTube script (code quality)
7. **Task 10** - Update workflow comments (documentation)
8. **Task 8** - Consolidate OG image updaters (cleanup)
9. **Task 9** - Document or remove scripts (cleanup)
10. **Task 11** - Add periodic link checking (enhancement)

### 🎯 Quick Wins (Can Do Immediately)

These can be done quickly with minimal risk:

1. ✅ **Remove `auto-commit.sh`** - DONE
2. **Task 2** - Remove `update-blog-data.yml` (5 minutes)
3. **Task 10** - Update workflow comments (15 minutes)
4. **Task 5** - Remove duplicate SEO generator (5 minutes)

### 📝 Notes for Future Maintainers

- **Both GitHub Actions and n8n are maintained intentionally** - Choose based on your needs
- **GitHub Actions preferred for:** Simple tasks, repository-native operations
- **n8n preferred for:** Complex workflows, external integrations, approval processes
- **All workflows should target `docs-v2-preview` branch** (unless specifically for main)
- **All n8n workflows should write to `livepeer/docs` repository** (not `DeveloperAlly/livepeer-automations`)

---

## Appendix: File Inventory

### GitHub Actions Workflows (8)
- `.github/workflows/broken-links.yml` ✅
- `.github/workflows/sdk_generation.yaml` ✅
- `.github/workflows/test-v2-pages.yml` ✅
- `.github/workflows/update-blog-data.yml` ⚠️
- `.github/workflows/update-forum-data.yml` ⚠️
- `.github/workflows/update-ghost-blog-data.yml` ⚠️
- `.github/workflows/update-livepeer-release.yml` ⚠️
- `.github/workflows/update-youtube-data.yml` ⚠️

### n8n Workflows (8)
- `snippets/automations/scripts/n8n/Discord_Announce_to_Mintlify.json` ❌
- `snippets/automations/scripts/n8n/Forum-To-Mintlify-Latest-Topics.json` ❌
- `snippets/automations/scripts/n8n/Ghost-to-Mintlify.json` ❌
- `snippets/automations/scripts/n8n/Luma-To-Mintlify.json` ✅
- `snippets/automations/scripts/n8n/mp4-to-gif.json` ❓
- `snippets/automations/scripts/n8n/Showcase_Project_Pipeline.json` ❓
- `snippets/automations/scripts/n8n/Showcase_To_Mintlify_Pipeline.json` ✅
- `snippets/automations/scripts/n8n/YouTube-To-Mintlify.json` ❌

### Scripts by Category

**Content Generation (5):**
- `tools/scripts/snippets/generate-seo.js` ✅
- `tools/scripts/snippets/generate-docs-status.js` ✅
- `tools/scripts/snippets/generate-api-docs.sh` ✅
- `tools/scripts/snippets/update-component-library.sh` ✅
- `tools/scripts/dev/seo-generator-safe.js` ⚠️

**Data Fetching (6):**
- `.github/scripts/fetch-forum-data.js` ✅
- `.github/scripts/fetch-ghost-blog-data.js` ✅
- `.github/scripts/fetch-youtube-data.js` ⚠️
- `tools/scripts/snippets/fetch-openapi-specs.sh` ✅
- `tools/scripts/snippets/fetch-external-docs.sh` ✅
- `tools/scripts/snippets/fetch-lpt-exchanges.sh` ✅

**Testing (1):**
- `scripts/test-v2-pages.js` ✅

**Utilities (8):**
- `tools/scripts/dev/update-og-image.js` ⚠️
- `tools/scripts/dev/update-all-og-images.js` ⚠️
- `tools/scripts/dev/batch-update-og-image.sh` ⚠️
- `tools/scripts/dev/replace-og-image.py` ⚠️
- `tools/scripts/dev/add-callouts.js` ✅
- `scripts/download-linkedin-video.sh` ❓
- `scripts/download-linkedin-with-cookies.sh` ❓
- `tools/scripts/dev/auto-commit.sh` ⚠️⚠️⚠️

**Pre-commit Hooks (3):**
- `.githooks/pre-commit` ✅
- `.githooks/verify.sh` ✅
- `.githooks/install.sh` ✅

---

**Legend:**
- ✅ Active/Working/Well-documented
- ⚠️ Has issues or needs attention
- ❌ Inactive/Not working
- ❓ Unknown status/Undocumented
