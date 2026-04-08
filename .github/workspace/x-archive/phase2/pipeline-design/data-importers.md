# Data Importers Pipeline Design

> External data stays current without human intervention.
> If feeds stop, pages show stale content. Site still works but degrades over time.

---

## What "current" means for docs.livepeer.org

1. Social feeds (Discord, forum, blog, GitHub, RSS, YouTube) update on schedule
2. Contract addresses update on schedule + on protocol events
3. Changelogs update on release events
4. Release version (go-livepeer) updates on new releases
5. Showcase data updates from submission form
6. Large assets synced from storage branch

---

## Current pipelines

### Working

| Pipeline | When | Source | Output | Status |
|---|---|---|---|---|
| Discord data | Daily 01:00 | Discord API | discordData.jsx (per product) | Working (no error handling) |
| Forum data | Daily 00:00 | Discourse API | forumData.jsx | FRAGILE (missing permissions) |
| Ghost blog data | Daily 00:00 | Ghost CMS RSS | ghostBlogData.jsx | FRAGILE (missing permissions) |
| GitHub data | Daily 02:00 | GitHub GraphQL + REST | githubDiscussionsData.jsx + githubReleasesData.jsx | Working (ZERO consumers for output) |
| RSS blog data | Daily 03:00 | RSS feeds | blogData.jsx (per product) | Working (no error handling) |
| YouTube data | Weekly Sun 00:00 | YouTube Data API | youtubeData.jsx (per product) | FRAGILE (missing permissions, wrong bot identity) |
| Contract addresses | Daily + events | Governor-scripts + on-chain RPC + explorers | contractAddressesData.jsx + 5 other files | Working (recently updated, gold standard) |
| Changelogs | Weekly + events | GitHub/GitLab releases | v2/resources/changelog/*.mdx (20 pages) | Working |
| Release version | On release | go-livepeer repo dispatch | globals.mdx (latestVersion) | Working (GNU grep bug) |
| Large assets | Weekly + push | docs-v2-assets branch | Binary files | Working |
| SDK clients | Scheduled | Speakeasy | SDK code | Working |

### Broken

| Pipeline | Problem |
|---|---|
| Showcase sync | NOT WORKING. 15min cron is excessive. Disabled |
| Blog data (legacy) | Hardcoded YOUR_CONTENT_API_KEY. DELETE |

### Partially consolidated already

`data-refresh-governance.yml` is a reusable workflow that routes social feed workflows by mode (forum, ghost-blog, youtube, github, discord, rss-blog, livepeer-release). Some of the individual workflows already call this. The consolidation is partially in progress.

---

## Proposed target state

### 1 matrix dispatcher for social feeds (replace 6 workflows)

```
Cron (per-source schedule) + manual dispatch
  -> Matrix: [discord, forum, ghost, github, rss, youtube]
  -> Each: checkout, setup node, run fetch script, diff, commit
  -> Error: create issue on failure
  -> Concurrency: group per source
```

Builds on existing `data-refresh-governance.yml` reusable workflow pattern. Fixes:
- 3 missing `permissions: contents: write`
- Inconsistent bot identity (youtube)
- Missing error handling (all)
- Missing concurrency control (all)

### Standalone (stay separate)

| Pipeline | Why separate |
|---|---|
| Contract addresses | Complex verification pipeline (on-chain RPC, explorer enrichment, incident reporting). Recently updated. Deferred from rename |
| Changelogs | LLM integration, multi-mode (releases + commits), different config section |
| Release version | Unique trigger (repo dispatch from go-livepeer). Inline script (extraction candidate) |
| Large assets | Git operations, not node scripts |
| SDK clients | Speakeasy external toolchain |

### Delete

- update-blog-data.yml (broken, hardcoded API key)

### Disable + investigate

- project-showcase-sync.yml (not working, 15min cron excessive)

### Wire github data to consumers

githubDiscussionsData.jsx and githubReleasesData.jsx are fetched daily but zero pages import them. Either wire to solution community pages or stop fetching.

---

## Shared module extraction (prerequisite for matrix)

All 7 social feed scripts in .github/scripts/ duplicate:
- HTTP/HTTPS client wrapper
- JSX data file writer
- Config loader (product-social-config.json)
- Error handling (try/catch with process.exit)

Extract to shared modules before building the matrix dispatcher. This is D-ACT-06 scope.

---

## Impact/effort

| # | Fix | Impact | Effort | Priority |
|---|---|---|---|---|
| 1 | Add permissions: contents: write to forum, ghost, youtube | 3 workflows stop silently failing | 5 min each | DO FIRST |
| 2 | Fix youtube bot identity + commit message | Consistency | 5 min | Quick win |
| 3 | Add error handling (issue creation on failure) | Failures get tracked | Low (add actions/github-script step) | Quick win |
| 4 | Add concurrency control to all 6 | Prevent push conflicts | Low (add concurrency block) | Quick win |
| 5 | Delete update-blog-data.yml | Remove broken workflow | 1 min | Quick win |
| 6 | Disable showcase sync | Stop broken cron | 1 min | Quick win |
| 7 | Extract shared modules | Prerequisite for consolidation | Medium | Before matrix |
| 8 | Build matrix dispatcher | 6 workflows to 1 | High | After shared modules |
| 9 | Wire github data to pages OR stop fetching | Resolve dead data | Depends on decision | When ready |
