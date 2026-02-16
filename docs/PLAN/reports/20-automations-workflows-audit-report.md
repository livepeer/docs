# Automations & Workflows Audit Report

**Date:** 2025-01-XX  
**Branch:** `docs-plan/20-automations-workflows-audit`  
**Auditor:** AI Assistant

## Executive Summary

This audit examined all automation scripts, GitHub Actions workflows, n8n automations, and pre-commit hooks in the Livepeer documentation repository. The audit identified **8 GitHub Actions workflows**, **8 n8n automation workflows**, **20+ scripts across multiple directories**, and **pre-commit hooks** for style guide enforcement.

### Key Findings

- **Duplications:** Multiple workflows and scripts perform similar functions (Ghost blog, Forum, YouTube data fetching)
- **Configuration Issues:** Several workflows reference wrong branches, paths, or have placeholder API keys
- **Active vs Inactive:** Many n8n workflows are marked as `"active": false` but GitHub Actions note they're being used as alternatives
- **Dangerous Scripts:** `auto-commit.sh` in `v2/scripts/dev/` automatically commits changes without review
- **Path Mismatches:** Some workflows reference `snippets/automationData/` but actual path is `snippets/automations/`
- **Missing Documentation:** Several scripts lack usage documentation

### Critical Issues

1. **`update-blog-data.yml`** has placeholder API key (`YOUR_CONTENT_API_KEY`)
2. **`update-livepeer-release.yml`** references wrong path (`snippets/automationData/globals/globals.mdx` should be `snippets/automations/globals/globals.mdx`)
3. **`auto-commit.sh`** is dangerous and should be removed or heavily restricted
4. **Multiple SEO generators** exist - need to identify canonical version
5. **Branch mismatches** - some workflows target `main` when they should target `docs-v2-preview`

### Recommendations

1. **Consolidate duplications** - Choose either GitHub Actions OR n8n for each data source
2. **Fix configuration issues** - Update paths, branches, and API keys
3. **Remove dangerous scripts** - Delete or restrict `auto-commit.sh`
4. **Document all automations** - Create comprehensive usage guide
5. **Standardize on one SEO generator** - Remove duplicates

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

#### `snippets/scripts/generate-seo.js`
- **Purpose:** Generates SEO metadata (keywords, og:image) for MDX files
- **Status:** ✅ Well-documented
- **Issues:** None identified
- **Recommendation:** Keep as primary SEO generator

#### `v2/scripts/dev/seo-generator-safe.js`
- **Purpose:** "Safe" SEO generator that only modifies keywords and og:image
- **Status:** ⚠️ **DUPLICATE FUNCTIONALITY**
- **Issues:**
  - Duplicates `generate-seo.js` functionality
  - Has `DRY_RUN = true` hardcoded
  - Less documented than main script
- **Recommendation:** **REMOVE OR CONSOLIDATE** - Use `generate-seo.js` as canonical version

#### `snippets/scripts/generate-docs-status.js`
- **Purpose:** Generates documentation status tables from docs.json
- **Status:** ✅ Well-documented
- **Issues:** None identified
- **Recommendation:** Keep as-is

#### `snippets/scripts/generate-api-docs.sh`
- **Purpose:** Generates API documentation from OpenAPI specs
- **Status:** ✅ Well-documented
- **Issues:** None identified
- **Recommendation:** Keep as-is

#### `snippets/scripts/update-component-library.sh`
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

#### `snippets/scripts/fetch-openapi-specs.sh`
- **Purpose:** Fetches OpenAPI specs from external repos
- **Status:** ✅ Well-documented
- **Issues:** None identified
- **Recommendation:** Keep as-is

#### `snippets/scripts/fetch-external-docs.sh`
- **Purpose:** Fetches external documentation files
- **Status:** ✅ Well-documented
- **Issues:** None identified
- **Recommendation:** Keep as-is

#### `snippets/scripts/fetch-lpt-exchanges.sh`
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

#### `v2/scripts/dev/update-og-image.js`
- **Purpose:** Updates OG images for pages
- **Status:** ⚠️ **POTENTIALLY DUPLICATE**
- **Issues:** Multiple OG image updaters exist
- **Recommendation:** **CONSOLIDATE** - Document which one to use

#### `v2/scripts/dev/update-all-og-images.js`
- **Purpose:** Batch updates OG images
- **Status:** ⚠️ **POTENTIALLY DUPLICATE**
- **Issues:** Multiple OG image updaters exist
- **Recommendation:** **CONSOLIDATE** - Document which one to use

#### `v2/scripts/dev/batch-update-og-image.sh`
- **Purpose:** Batch updates OG images (shell script)
- **Status:** ⚠️ **POTENTIALLY DUPLICATE**
- **Issues:** Multiple OG image updaters exist
- **Recommendation:** **CONSOLIDATE** - Document which one to use

#### `v2/scripts/dev/replace-og-image.py`
- **Purpose:** Python script to replace OG images
- **Status:** ⚠️ **POTENTIALLY DUPLICATE**
- **Issues:** Multiple OG image updaters exist, different language
- **Recommendation:** **CONSOLIDATE** - Choose one language/tool

#### `v2/scripts/dev/add-callouts.js`
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

#### `v2/scripts/dev/auto-commit.sh`
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

## 5. Duplications Matrix

| Functionality | GitHub Action | n8n Workflow | Script | Status | Recommendation |
|--------------|---------------|--------------|--------|--------|----------------|
| Ghost Blog Data | `update-ghost-blog-data.yml` | `Ghost-to-Mintlify.json` | `.github/scripts/fetch-ghost-blog-data.js` | Both inactive/noted as alternative | **Choose one** - Recommend n8n if active, else fix GitHub Action |
| Forum Data | `update-forum-data.yml` | `Forum-To-Mintlify-Latest-Topics.json` | `.github/scripts/fetch-forum-data.js` | Both inactive/noted as alternative | **Choose one** - Recommend n8n if active, else fix GitHub Action |
| YouTube Data | `update-youtube-data.yml` | `YouTube-To-Mintlify.json` | `.github/scripts/fetch-youtube-data.js` | Both inactive/noted as alternative | **Choose one** - Recommend n8n if active, else fix GitHub Action |
| SEO Generation | N/A | N/A | `generate-seo.js` + `seo-generator-safe.js` | Two scripts | **Consolidate** - Use `generate-seo.js` as canonical |
| OG Image Updates | N/A | N/A | 4 different scripts | Multiple scripts | **Consolidate** - Choose one tool |
| Combined Blog+Forum | `update-blog-data.yml` | N/A | N/A | Has placeholder API key | **REMOVE** - Use individual workflows |

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

1. **`v2/scripts/dev/auto-commit.sh`** - ⚠️ **DANGEROUS** - Remove immediately
2. **`update-blog-data.yml`** - Has placeholder API key, duplicates other workflows
3. **`v2/scripts/dev/seo-generator-safe.js`** - Duplicates `generate-seo.js`

### 7.2 Medium Priority Removals

1. **`v2/scripts/dev/update-og-image.js`** - If not actively used, consolidate
2. **`v2/scripts/dev/update-all-og-images.js`** - If not actively used, consolidate
3. **`v2/scripts/dev/batch-update-og-image.sh`** - If not actively used, consolidate
4. **`v2/scripts/dev/replace-og-image.py`** - If not actively used, consolidate
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

## 10. Next Steps

1. **Create usage documentation** - Comprehensive guide for all automations
2. **Fix critical issues** - Paths, branches, dangerous scripts
3. **Consolidate duplications** - Choose one method per functionality
4. **Remove unused/inactive** - Clean up repository
5. **Document gaps** - List what's missing vs. what's planned

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
- `snippets/scripts/generate-seo.js` ✅
- `snippets/scripts/generate-docs-status.js` ✅
- `snippets/scripts/generate-api-docs.sh` ✅
- `snippets/scripts/update-component-library.sh` ✅
- `v2/scripts/dev/seo-generator-safe.js` ⚠️

**Data Fetching (6):**
- `.github/scripts/fetch-forum-data.js` ✅
- `.github/scripts/fetch-ghost-blog-data.js` ✅
- `.github/scripts/fetch-youtube-data.js` ⚠️
- `snippets/scripts/fetch-openapi-specs.sh` ✅
- `snippets/scripts/fetch-external-docs.sh` ✅
- `snippets/scripts/fetch-lpt-exchanges.sh` ✅

**Testing (1):**
- `scripts/test-v2-pages.js` ✅

**Utilities (8):**
- `v2/scripts/dev/update-og-image.js` ⚠️
- `v2/scripts/dev/update-all-og-images.js` ⚠️
- `v2/scripts/dev/batch-update-og-image.sh` ⚠️
- `v2/scripts/dev/replace-og-image.py` ⚠️
- `v2/scripts/dev/add-callouts.js` ✅
- `scripts/download-linkedin-video.sh` ❓
- `scripts/download-linkedin-with-cookies.sh` ❓
- `v2/scripts/dev/auto-commit.sh` ⚠️⚠️⚠️

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
