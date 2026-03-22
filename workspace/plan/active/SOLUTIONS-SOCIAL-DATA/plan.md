# SOLUTIONS-SOCIAL-DATA Plan

**Created:** 2026-03-21
**Updated:** 2026-03-21
**Branch:** docs-v2-dev
**Status:** Phase 4 COMPLETE — all phases done

---

## Objective

Bring social/data-feed sections (YouTube, GitHub README, GitHub Changelog, Discord Announcements, X/Twitter, Blog, Forum/GitHub Discussions) into every product section under `v2/solutions/`, using the existing `trending-topics.mdx` page as the reference template. Create a reusable layout template in `snippets/templates/pages/data-imports/` that standardises how social data flows into product pages.

---

## 1. Reverse-Engineering: How trending-topics.mdx Gets Its Data

The page uses **5 data pipelines**, each following the same pattern:
`External API → GitHub Actions script → JSX data file → React component → MDX page`

### Pipeline Breakdown

| Section | Data Source | Fetch Script | GH Actions Workflow | Data File | Display Component |
|---------|-----------|-------------|-------------------|-----------|------------------|
| **Videos** | YouTube Data API v3 | `.github/scripts/fetch-youtube-data.js` | `update-youtube-data.yml` (weekly Sun 00:00 UTC) | `snippets/automations/youtube/youtubeData.jsx` | `<YouTubeVideoData items={youtubeData} limit={2} />` |
| **Forum** | Livepeer Forum (Discourse) API | `.github/scripts/fetch-forum-data.js` | `update-blog-data.yml` (daily 00:00 UTC) | `snippets/automations/forum/forumData.jsx` | `<ForumLatestLayout items={forumData} limit={2} />` |
| **Discord** | Discord Bot / n8n webhook | n8n workflow `Discord_Announce_to_Mintlify.json` | Manual / n8n trigger | `snippets/automations/discord/discordAnnouncementsData.jsx` | `<DiscordAnnouncements items={discordAnnouncementsData} limit={2} />` |
| **X/Twitter** | feed.mikle.com widget (iframe) | None — static iframe embed | None | None (hardcoded widget ID `176804`) | `<TwitterTimeline />` |
| **Blogs** | Ghost CMS (`livepeer-studio.ghost.io`) | `.github/scripts/fetch-ghost-blog-data.js` | `update-blog-data.yml` (daily 00:00 UTC) | `snippets/automations/blog/ghostBlogData.jsx` | `<ColumnsBlogCardLayout items={ghostData} limit={2} />` |

### Additional data feeds already in the repo (not on trending-topics):
- **Luma Events** — `snippets/automations/luma/lumaEventsData.jsx` (n8n: `Luma-To-Mintlify.json`)
- **Showcase Projects** — `snippets/automations/showcase/showcaseData.jsx` (n8n: `Showcase_To_Mintlify_Pipeline.json`)
- **GitHub README embed** — `MarkdownEmbed` component exists in `DataEmbed.jsx`, fetches remote markdown via `fetch(url)`. Already used for external docs (`snippets/external/`). Can embed any public GitHub README.
- **GitHub Changelog** — Established external workflow with changelog template pages already exists in the repo (see `reference-and-api/changelog-template.mdx`).

### Key Architecture Notes
- All fetch scripts output **static JSX exports** (not JSON) — e.g. `export const youtubeData = [...]`
- Data files are auto-committed by GitHub Actions on schedule
- Components accept `items` array + `limit` prop for flexible rendering
- TwitterTimeline is hardcoded to Livepeer's mikle.com widget ID — this is a **paid service** and will NOT be replicated per product
- Discord data currently comes via n8n workflow — **recommended to migrate to GitHub Actions** for consistency and maintainability (both for the existing community page and future product pages)

### GAP: Missing Pipelines for Product Pages
- **GitHub README embed** — `MarkdownEmbed` component exists but no automated pipeline. Products have public GitHub repos with README files that should be embedded.
- **GitHub Changelog** — Template exists but no automated fetch. Products may publish releases/changelogs on GitHub that can be pulled in.
- **GitHub Discussions** — No existing pipeline. Alternative to Discourse forums for products that use GitHub Discussions instead.

---

## 2. Pipeline Reuse Assessment: Can These Pipelines Serve Product Pages?

### What CAN be reused directly

| Pipeline | Reusable? | Notes |
|----------|-----------|-------|
| YouTube fetch script | **Yes, with parameterisation** | Currently hardcoded to Livepeer channel ID (`UCzfHtZnmUzMbJDxGCwIgY2g`). Needs `CHANNEL_ID` env var per product. Script already supports `process.env.CHANNEL_ID`. |
| Ghost Blog fetch | **Livepeer only** | Hardcoded to `livepeer-studio.ghost.io`. N/A for other products unless they also use Ghost. |
| Forum fetch (Discourse) | **Reusable if product has Discourse** | Script is parameterisable to any Discourse instance. Most products won't have one — GitHub Discussions is the alternative. |
| Discord fetch | **Yes, but must migrate to GH Actions** | n8n workflow should be rebuilt as a GH Actions script for consistency. Announcements-only scope (no general chat). Configurable per server/channel. |
| GitHub README embed | **Yes, directly** | `MarkdownEmbed` component already accepts any URL. Just point at product's GitHub README raw URL. |
| Display components | **Yes, fully reusable** | `YouTubeVideoData`, `ForumLatestLayout`, `BlogCard`, `DiscordAnnouncements`, `MarkdownEmbed` all accept generic data — just swap the data import. |

### What NEW implementations are needed

| Need | Implementation | Effort |
|------|---------------|--------|
| **Multi-channel YouTube fetch** | Extend `fetch-youtube-data.js` to accept a config map of `{product: channelId}` and output per-product data files (e.g. `youtubeData-daydream.jsx`) | Medium |
| **X/Twitter static approach** | No paid widget. Instead: static link to product X profile + optional pinned tweet embed (oEmbed/screenshot). Template documents what community version uses (mikle.com) in case products want to self-fund a live feed. | Low |
| **Discord → GitHub Actions migration** | Build `.github/scripts/fetch-discord-announcements.js` to replace n8n workflow. Configurable per server/channel ID. Announcements channel only. | Medium |
| **Generic blog fetch (PUBLIC APIs only)** | Investigate which blog platforms offer public APIs (no API key). Ghost has a public Content API. Medium/Substack expose RSS. Build RSS-based generic fetcher using `convert-rss-to-mdx.js` as base. **Constraint: we do not have API key access for solution product platforms.** | Medium — needs investigation |
| **GitHub Discussions fetch** | New GH Actions script using GitHub public API to fetch latest discussions from a product repo. Alternative to Discourse forum for products using GitHub Discussions. | Medium |
| **GitHub Changelog/Releases fetch** | New GH Actions script using GitHub Releases API (public, no auth needed for public repos) to pull latest releases per product. Feeds into changelog template. | Low-Medium |
| **Data config registry** | A single config file mapping product → `{youtubeChannelId, xHandle, xProfileUrl, discordServerId, discordChannelId, blogUrl, blogType, forumUrl, forumType, githubOrg, githubRepo, githubDiscussions}` to drive all fetches. | Low |
| **Hero video sourcing** | Find/curate a hero YouTube video per product (or fallback to downloadable mp4) | Research |

---

## 3. Social & Documentation Research (→ socials-research.md)

### Known from solutions/ folder (verified via web search — see socials-research.md for full details)

| Product | Website | Docs | YouTube | X/Twitter | Discord | GitHub | Blog | Forum / Discussions |
|---------|---------|------|---------|-----------|---------|--------|------|---------------------|
| **Daydream** | daydream.live | docs.daydream.live (Mintlify) | Own channel (UCviyh_-8H2vkYq9ROHMBffQ) | @daydreamlive | discord.gg/pF2Akym5bV | github.com/daydreamlive (27 repos) | blog.daydream.live (Ghost, RSS) | — |
| **Embody** | embody.zone | None | No channel (scattered videos) | None | Needs manual verify | github.com/its-DeFine (52 repos) | None | forum.livepeer.org (very active) |
| **Frameworks** | frameworks.network | docs.frameworks.network (Coming Soon!) | No channel | @GetFrames | discord.gg/9J6haUjdAq | github.com/livepeer-frameworks (7 repos) | None | forum.frameworks.network (low) + forum.livepeer.org |
| **Livepeer Studio** | livepeer.studio | docs.livepeer.org (Mintlify) | youtube.com/@livepeer | @Livepeer + @LivepeerStudio | discord.gg/livepeer | github.com/livepeer (170 repos) | blog.livepeer.org (Ghost, RSS) | forum.livepeer.org |
| **Streamplace** | stream.place | stream.place/docs (Starlight) | None | @streamplace (dormant) | discord.com/invite/EdtZv4UTMU | github.com/streamplace (67 repos) | blog.stream.place (Leaflet, RSS) | forum.livepeer.org |

---

## 4. Layout Template Design (→ `snippets/templates/pages/data-imports/`)

### 4a. Frontmatter (per CONTENT-WRITING framework)

```yaml
---
title: '{Product} — Community & Updates'
sidebarTitle: 'Community & Updates'
description: 'Latest videos, socials, and community activity for {Product}.'
purpose: orient
pageType: resource
pageVariant: landing
keywords:
  - '{product}'
  - livepeer
  - community
  - updates
'og:image': /snippets/assets/site/og-image/fallback.png
'og:image:alt': '{Product} Docs social preview image'
'og:image:type': image/png
'og:image:width': 1200
'og:image:height': 630
audience: builder
lastVerified: YYYY-MM-DD
---
```

**Rationale:** Using Phase 1 schema values. `pageType: resource` (curated collection), `purpose: orient` (what exists + where reader fits), `pageVariant: landing` (visual, card-heavy layout).

### 4b. Template Layout Structure

```
┌──────────────────────────────────────┐
│  HERO VIDEO (YouTube embed or mp4)   │
│  - Full-width, with caption          │
│  - Product intro / latest keynote    │
└──────────────────────────────────────┘

## Videos
  <YouTubeVideoData items={productYoutubeData} limit={2} />
  LinkArrow → Product YouTube channel

## GitHub
  <MarkdownEmbed url={productGithubReadmeUrl} />
  LinkArrow → Product GitHub repo

## Changelog / Releases (conditional)
  Latest releases component
  LinkArrow → Product GitHub Releases page

## Discord Announcements (conditional — only if product has Discord)
  <DiscordAnnouncements items={productDiscordData} limit={2} />
  LinkArrow → Product Discord server

## X / Twitter
  Static link to product X profile page + optional pinned tweet embed
  <!-- NOTE FOR IMPLEMENTERS: The community trending-topics page uses a
       paid mikle.com live-feed widget (ID 176804). If this product wants
       a live X feed, they must create and fund their own mikle.com or
       sociablekit.com widget and pass the widgetId prop to TwitterTimeline. -->
  LinkArrow → Product X account

## Blog (conditional — only if product has a blog with public API/RSS)
  <ColumnsBlogCardLayout items={productBlogData} limit={2} />
  LinkArrow → Product blog

## Forum / GitHub Discussions (conditional)
  If Discourse: <ForumLatestLayout items={productForumData} limit={2} />
  If GitHub Discussions: GitHub Discussions component
  LinkArrow → Product forum or discussions page

## Events (conditional — if Luma data available)
  Events component TBD
  LinkArrow → Product events page
```

**IMPORTANT:** All internal links to docs pages MUST use relative paths (e.g. `/solutions/livepeer-studio/reference/api`), NOT external URLs. These pages exist in our repo under the solutions anchor.

### 4c. Existing Template Patterns to Follow

From scanning `snippets/templates/pages/`:
- **Import block** at top with all component + data imports
- **`<Tip>`** callout explaining data source (matches trending-topics pattern)
- **Icon + heading** pattern: `## <Icon icon="..." size={24} /> Section Title`
- **LinkArrow** after each section pointing to the canonical external source
- **`limit` prop** on all data components for consistent density
- **Conditional rendering** — sections only appear if data import is non-empty
- **CustomDivider** between major sections (optional, used in other templates)
- **HTML comments** for implementer guidance (e.g. Twitter widget note)

### 4d. Hero Video Strategy

**Priority order for sourcing per product:**
1. Check if product already has YouTube videos referenced in solutions/ files (Daydream: 2 videos, Frameworks: 1 video — already found)
2. Search product's YouTube channel for intro/overview video
3. Check product website for embedded videos
4. Fall back to Livepeer YouTube channel videos that feature the product
5. Last resort: download mp4 and serve from `snippets/assets/`

**YouTube MCP:** No YouTube MCP is available in the current tool set. Video discovery will need manual web search or YouTube Data API queries via the existing fetch script infrastructure.

---

## 5. Execution Phases

> **Protocol:** Each phase ends with a checkpoint. Report inline in chat with:
> (a) what was done, (b) full plan status (all phases, checked/unchecked), (c) any blockers.
> Commit at end of each phase. Do not proceed to next phase without approval.

### Phase 1: Research & Config — COMPLETE
- [x] Web search to complete `socials-research.md` (verify all product socials, GitHub Discussions, Releases, public blog APIs)
- [x] Source hero videos for each product (candidates identified — see config; some gaps flagged)
- [x] Create `tools/scripts/config/product-social-config.json` mapping product → social channels
- [x] **CHECKPOINT:** Findings reported inline. Committed. Awaiting approval for Phase 2.

### Phase 2: Pipeline Extensions — COMPLETE
- [x] Parameterise `fetch-youtube-data.js` for multi-channel output (PRODUCT_KEY env, config-driven, backward-compatible)
- [x] Build `.github/scripts/fetch-discord-announcements.js` (GH Actions replacement for n8n Discord workflow)
- [x] Investigate & build generic blog fetch → `.github/scripts/fetch-rss-blog-data.js` (RSS parser, skips Ghost API products)
- [x] Build `.github/scripts/fetch-github-discussions.js` (GraphQL API, config-driven)
- [x] Build `.github/scripts/fetch-github-releases.js` (REST API, config-driven)
- [x] Add GH Actions workflows: `update-discord-data.yml`, `update-github-data.yml`, `update-rss-blog-data.yml`
- [x] **CHECKPOINT:** Pipeline status reported inline. Committed. Awaiting approval for Phase 3.

### Phase 3: Template & Pages — COMPLETE
- [x] Create `snippets/templates/pages/data-imports/social-data-page.mdx` template (DRAFT)
- [x] Create per-product community pages: daydream, embody, frameworks, livepeer-studio, streamplace
- [x] Add related pages CardGroup to `trending-topics.mdx` (5 product cards, cols={2})
- [x] Wire into `docs.json` navigation (community page added to each product group)
- [x] **CHECKPOINT:** Pages created and wired. Committed. Awaiting approval for Phase 4.

### Phase 4: Validation — COMPLETE
- [x] Frontmatter schema validation (5 pages) — fixed `pageVariant: landing` → `overview` (invalid for `resource` type)
- [x] docs.json nav wiring — all 5 pages present, valid JSON, correct groups
- [x] Component imports — all imports resolve to existing files with correct exports
- [x] External URL cross-reference — 31/38 fully verified, 2 partially verified (X accounts), 5 new forum thread URLs (low risk)
- [x] Template updated to match fixes
- [x] **CHECKPOINT:** Final report inline. Committed. Done.

---

## 6. Dependencies & Risks

| Risk | Mitigation |
|------|-----------|
| Products with no YouTube channel | Use Livepeer channel filtered by product tag/playlist, or omit section |
| Products with no X/Twitter account | Omit section or link to Livepeer X with product mentions |
| Products with no Discord | Omit section, link to Livepeer Discord product-specific channel if exists |
| Products with no blog | Omit section |
| Products with no public blog API | Use RSS if available. If no RSS, static link only (no automated feed). **We cannot generate API keys for platforms we don't own.** |
| Ghost CMS API only serves Livepeer blog | RSS fallback for other blogs via `convert-rss-to-mdx.js` pattern |
| Hero video not found for product | Fallback to Livepeer YouTube featuring that product, or static image hero |
| Discord n8n → GH Actions migration | Test thoroughly against existing community page data before deploying to products. Keep n8n as fallback during transition. |
| GitHub Discussions API rate limits | Public API has generous limits for read-only. Use conditional fetch + caching. |
| Products with no GitHub Discussions enabled | Omit section. Fall back to GitHub Issues or static link to repo. |
| ~35 existing external links to livepeer.studio/docs | Separate cleanup task — convert to relative links pointing to our own solutions pages. |

---

## 7. Files to Create/Modify

### New Files
- `workspace/plan/active/SOLUTIONS-SOCIAL-DATA/socials-research.md` — Product socials inventory
- `snippets/templates/pages/data-imports/social-data-page.mdx` — Reusable template
- `tools/scripts/config/product-social-config.json` — Central config registry
- `.github/scripts/fetch-discord-announcements.js` — Discord GH Actions script (replaces n8n)
- `.github/scripts/fetch-github-discussions.js` — GitHub Discussions fetch
- `.github/scripts/fetch-github-releases.js` — GitHub Releases/Changelog fetch
- `.github/workflows/update-discord-data.yml` — Discord data workflow
- `.github/workflows/update-github-data.yml` — GitHub Discussions + Releases workflow
- `snippets/automations/{product}/youtubeData.jsx` — Per-product YT data (per product)
- `snippets/automations/{product}/discordData.jsx` — Per-product Discord data (per product)
- `snippets/automations/{product}/githubDiscussionsData.jsx` — Per-product GH Discussions (per product)
- `snippets/automations/{product}/githubReleasesData.jsx` — Per-product GH Releases (per product)
- `v2/solutions/{product}/community.mdx` — Per-product social pages (per product)

### Modified Files
- `.github/scripts/fetch-youtube-data.js` — Multi-channel support
- `docs.json` — Add community pages to solutions navigation

### Governance Compliance
- All new files in `workspace/plan/active/` follow existing SOLUTIONS-SOCIAL-DATA folder structure
- All new scripts include JSDoc headers per SCRIPT-GOVERNANCE framework (11 required tags)
- All new `.mdx` pages include Phase 1 frontmatter schema
- All new GH Actions workflows follow existing naming/structure conventions
