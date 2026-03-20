# SOLUTIONS-SOCIAL-DATA Plan

**Created:** 2026-03-21
**Branch:** docs-v2-dev
**Status:** DRAFT — awaiting approval

---

## Objective

Bring social/data-feed sections (YouTube, Forum, Discord, X/Twitter, Blog) into every product section under `v2/solutions/`, using the existing `trending-topics.mdx` page as the reference template. Create a reusable layout template in `snippets/templates/pages/data-imports/` that standardises how social data flows into product pages.

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

### Key Architecture Notes
- All fetch scripts output **static JSX exports** (not JSON) — e.g. `export const youtubeData = [...]`
- Data files are auto-committed by GitHub Actions on schedule
- Components accept `items` array + `limit` prop for flexible rendering
- TwitterTimeline is hardcoded to Livepeer's mikle.com widget ID — product-specific X feeds would need new widget IDs or a different approach
- Discord data appears to come via n8n workflow, not a GH Actions script

---

## 2. Pipeline Reuse Assessment: Can These Pipelines Serve Product Pages?

### What CAN be reused directly

| Pipeline | Reusable? | Notes |
|----------|-----------|-------|
| YouTube fetch script | **Yes, with parameterisation** | Currently hardcoded to Livepeer channel ID (`UCzfHtZnmUzMbJDxGCwIgY2g`). Needs `CHANNEL_ID` env var per product. Script already supports `process.env.CHANNEL_ID`. |
| Ghost Blog fetch | **Livepeer only** | Hardcoded to `livepeer-studio.ghost.io`. Other products use different blog platforms (or none). |
| Forum fetch | **Livepeer only** | Hardcoded to `forum.livepeer.org` (Discourse). Other products don't have Discourse forums. |
| Discord fetch (n8n) | **Partially** | Workflow can be cloned per Discord server/channel. Needs new webhook configs per product. |
| Twitter/X embed | **Yes, with new widget IDs** | Each product's X account needs its own mikle.com widget. Alternative: sociablekit.com (noted in code comments). |
| Display components | **Yes, fully reusable** | `YouTubeVideoData`, `ForumLatestLayout`, `BlogCard`, `DiscordAnnouncements`, `TwitterTimeline` all accept generic data — just swap the data import. |

### What NEW implementations are needed

| Need | Implementation | Effort |
|------|---------------|--------|
| **Multi-channel YouTube fetch** | Extend `fetch-youtube-data.js` to accept a config map of `{product: channelId}` and output per-product data files (e.g. `youtubeData-daydream.jsx`) | Medium |
| **Per-product Twitter widgets** | Create mikle.com or sociablekit.com widgets for each product's X account → output per-product widget IDs. Make `TwitterTimeline` accept a `widgetId` prop. | Low |
| **Per-product Discord fetch** | Clone n8n workflow per product Discord server, or build GH Actions scripts that use Discord API with configurable server/channel IDs | Medium |
| **Generic blog fetch** | Products using non-Ghost blogs (Medium, Substack, custom) need new fetch scripts. Consider RSS-based approach using existing `convert-rss-to-mdx.js` as base. | Medium |
| **Per-product forum fetch** | Only if product has a Discourse forum. Otherwise, omit section or link externally. | Low |
| **Data config registry** | A single config file mapping product → {youtubeChannelId, xHandle, discordServerId, blogUrl, blogType, forumUrl} to drive all fetches | Low |
| **Hero video sourcing** | Find/curate a hero YouTube video per product (or fallback to downloadable mp4) | Research |

---

## 3. Social & Documentation Research (→ socials-research.md)

### Known from solutions/ folder (to be verified via web search)

| Product | Website | Docs | YouTube | X/Twitter | Discord | GitHub | Blog | Forum |
|---------|---------|------|---------|-----------|---------|--------|------|-------|
| **Daydream** | daydream.live | docs.daydream.live | ? (uses Livepeer YT) | ? | discord.com/invite/mnfGR4Fjhp | github.com/daydreamlive/scope | blog.daydream.live | — |
| **Embody** | embody.zone | ? | ? | ? | ? | ? | ? | — |
| **Frameworks** | frameworks.network | docs.frameworks.network | ? | ? | ? | github.com/livepeer-frameworks/monorepo | ? | forum.livepeer.org (SPE thread) |
| **Livepeer Studio** | livepeer.studio | livepeer.studio/docs | @livepeer | @Livepeer | discord.gg/livepeer | github.com/livepeer | blog.livepeer.org | forum.livepeer.org |
| **Streamplace** | stream.place | stream.place/docs | ? | ? | discord.com/invite/EdtZv4UTMU | github.com/streamplace/overview | — | — |

**Task:** Web search each product to fill `?` cells and verify all existing links. Output to `socials-research.md`.

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

## X Posts
  <TwitterTimeline widgetId={productWidgetId} />
  LinkArrow → Product X account

## Discord
  <DiscordAnnouncements items={productDiscordData} limit={2} />
  LinkArrow → Product Discord server

## Blog (conditional — only if product has a blog)
  <ColumnsBlogCardLayout items={productBlogData} limit={2} />
  LinkArrow → Product blog

## Forum (conditional — only if product has a forum)
  <ForumLatestLayout items={productForumData} limit={2} />
  LinkArrow → Product forum

## Events (conditional — if Luma data available)
  Events component TBD
  LinkArrow → Product events page
```

### 4c. Existing Template Patterns to Follow

From scanning `snippets/templates/pages/`:
- **Import block** at top with all component + data imports
- **`<Tip>`** callout explaining data source (matches trending-topics pattern)
- **Icon + heading** pattern: `## <Icon icon="..." size={24} /> Section Title`
- **LinkArrow** after each section pointing to the canonical external source
- **`limit` prop** on all data components for consistent density
- **Conditional rendering** — sections only appear if data import is non-empty
- **CustomDivider** between major sections (optional, used in other templates)

### 4d. Hero Video Strategy

**Priority order for sourcing per product:**
1. Check if product already has YouTube videos referenced in solutions/ files (Daydream: 2 videos, Frameworks: 1 video — already found)
2. Search product's YouTube channel for intro/overview video
3. Check product website for embedded videos
4. Fall back to Livepeer YouTube channel videos that feature the product
5. Last resort: download mp4 and serve from `snippets/assets/`

**YouTube MCP:** No YouTube MCP is available in the current tool set. Video discovery will need manual web search or YouTube Data API queries via the existing fetch script infrastructure.

---

## 5. Execution Phases (NOT YET APPROVED)

### Phase 1: Research & Config
- [ ] Web search to complete socials-research.md (verify all product socials)
- [ ] Source hero videos for each product
- [ ] Create `tools/scripts/config/product-social-config.json` mapping product → social channels

### Phase 2: Pipeline Extensions
- [ ] Parameterise `fetch-youtube-data.js` for multi-channel output
- [ ] Make `TwitterTimeline` accept configurable `widgetId` prop
- [ ] Create per-product Twitter widgets (mikle.com or alt)
- [ ] Create per-product Discord data fetch (n8n or GH Actions)
- [ ] Add generic RSS/blog fetch for non-Ghost blogs
- [ ] Add GH Actions workflows for new data feeds

### Phase 3: Template & Pages
- [ ] Create `snippets/templates/pages/data-imports/social-data-page.mdx` template
- [ ] Create per-product data files in `snippets/automations/{product}/`
- [ ] Create social/community pages for each product in `v2/solutions/{product}/`
- [ ] Wire into `docs.json` navigation

### Phase 4: Validation
- [ ] Verify all data feeds render correctly
- [ ] Run content validators (frontmatter, copy, grammar)
- [ ] Visual review on Mintlify dev server

---

## 6. Dependencies & Risks

| Risk | Mitigation |
|------|-----------|
| Products with no YouTube channel | Use Livepeer channel filtered by product tag/playlist, or omit section |
| Products with no X/Twitter account | Omit section or embed Livepeer X filtered by product mentions |
| Products with no Discord | Omit section, link to Livepeer Discord product-specific channel if exists |
| Products with no blog | Omit section |
| mikle.com widget creation requires account | Check if existing account covers this, or evaluate sociablekit.com alternative |
| Ghost CMS API only serves Livepeer blog | RSS fallback for other blogs via `convert-rss-to-mdx.js` pattern |
| Hero video not found for product | Fallback to Livepeer YouTube featuring that product, or static image hero |

---

## 7. Files to Create/Modify

### New Files
- `tasks/plan/active/SOLUTIONS-SOCIAL-DATA/socials-research.md` — Product socials inventory
- `snippets/templates/pages/data-imports/social-data-page.mdx` — Reusable template
- `tools/scripts/config/product-social-config.json` — Central config
- `snippets/automations/{product}/youtubeData.jsx` — Per-product YT data (5 products)
- `snippets/automations/{product}/discordData.jsx` — Per-product Discord data
- `v2/solutions/{product}/community.mdx` — Per-product social pages (5 products)

### Modified Files
- `snippets/components/integrators/embeds/DataEmbed.jsx` — Make `TwitterTimeline` accept `widgetId` prop
- `.github/scripts/fetch-youtube-data.js` — Multi-channel support
- `docs.json` — Add community pages to solutions navigation

---

## Awaiting Approval

**Please review and confirm:**
1. Does this plan accurately capture your intent?
2. Any products to exclude (e.g., Embody which has minimal presence)?
3. Preference on Twitter widget provider (mikle.com vs sociablekit.com)?
4. Should we proceed with socials-research.md first (Phase 1)?
5. Any priority ordering among products?
