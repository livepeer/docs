# Solutions Social & Documentation Research

**Date:** 2026-03-21
**Phase:** 1 — Research & Config
**Status:** Complete

---

## Master Reference Table

| Product | Website | Docs | YouTube | X/Twitter | Discord | GitHub | Blog | Forum | Other |
|---------|---------|------|---------|-----------|---------|--------|------|-------|-------|
| **Daydream** | daydream.live | docs.daydream.live (Mintlify) | Own channel (UCviyh_-8H2vkYq9ROHMBffQ) | @daydreamlive | discord.gg/pF2Akym5bV | github.com/daydreamlive (27 repos) | blog.daydream.live (Ghost, RSS) | — | LinkedIn, Instagram, TikTok |
| **Embody** | embody.zone | None (uses Livepeer docs + GitHub READMEs) | No channel (scattered videos) | None found | Needs manual verify | github.com/its-DeFine (52 repos) | None | forum.livepeer.org (very active) | Twitch (livi_embody) |
| **Frameworks** | frameworks.network | docs.frameworks.network (Coming Soon!) | No channel (1 video) | @GetFrames | discord.gg/9J6haUjdAq | github.com/livepeer-frameworks (7 repos) | None | forum.frameworks.network (low activity) + forum.livepeer.org | — |
| **Livepeer Studio** | livepeer.studio | docs.livepeer.org (Mintlify) | youtube.com/@livepeer | @Livepeer + @LivepeerStudio | discord.gg/livepeer | github.com/livepeer (170 repos) | blog.livepeer.org (Ghost, RSS) | forum.livepeer.org (Discourse) | Telegram, LinkedIn, Reddit, Farcaster |
| **Streamplace** | stream.place | stream.place/docs (Starlight) | None | @streamplace (dormant) | discord.com/invite/EdtZv4UTMU | github.com/streamplace (67 repos) | blog.stream.place (Leaflet, RSS) | forum.livepeer.org | Bluesky (@stream.place, 2.7k followers), iOS + Android apps |

---

## Detailed Findings Per Product

### 1. Daydream

**Tagline:** "Open source tools for real-time AI creation"

| Channel | URL | Status | Details |
|---------|-----|--------|---------|
| Website | https://daydream.live | VERIFIED | Marketing site with self-hosted demo videos |
| Docs | https://docs.daydream.live | VERIFIED | Mintlify. Covers Scope: quickstart, guides, pipelines, API reference |
| Blog | https://blog.daydream.live | VERIFIED | Ghost 6.22. 8+ posts. Active (last build 2026-03-20) |
| Blog RSS | https://blog.daydream.live/rss/ | VERIFIED | RSS 2.0 |
| X/Twitter | https://x.com/daydreamlive | VERIFIED | Also found @DaydreamLiveAI — may be same account (rename). Needs manual verify. |
| YouTube | https://www.youtube.com/channel/UCviyh_-8H2vkYq9ROHMBffQ | VERIFIED | Own channel. Video inventory needs manual check. |
| GitHub Org | https://github.com/daydreamlive | VERIFIED | 27 public repos |
| GitHub Main | https://github.com/daydreamlive/scope | VERIFIED | 266 stars, 45 forks, 26 releases (latest v0.1.9, 2026-03-20) |
| GitHub Discussions | scope repo | VERIFIED | Enabled, 6 discussions |
| GitHub Releases | scope repo | VERIFIED | 26 releases, actively maintained |
| Discord (homepage) | https://discord.gg/pF2Akym5bV | VERIFIED | Current link on daydream.live |
| Discord (legacy) | https://discord.com/invite/mnfGR4Fjhp | VERIFIED | Both resolve — may be same server |
| LinkedIn | https://www.linkedin.com/company/daydreamlive | VERIFIED | 125 followers, 11-50 employees |
| Instagram | https://www.instagram.com/daydreamlive_ | VERIFIED | Active |
| TikTok | https://www.tiktok.com/@daydreamlive | VERIFIED | Active, AI video demos |

**Blog API assessment:** Ghost 6.22 with RSS. Ghost Content API exists but requires API key. **RSS is the public option.**

**Hero video candidates:**
1. Self-hosted `daydream.live/hero-demo.mp4` (current homepage hero)
2. YouTube channel videos (need manual inventory)
3. Already referenced in docs: `youtube.com/watch?v=uLXtpFVrtP4` (Jeff Liang - StreamV2V), `youtube.com/watch?v=yeoGzSWdNGM` (Yondon Fu - Real-Time AI Video)

**Items needing manual verification:**
- [ ] Confirm @daydreamlive vs @DaydreamLiveAI on X (same account rename?)
- [ ] Confirm both Discord invites reach same server
- [ ] Inventory YouTube channel for best hero video

---

### 2. Embody

**Tagline:** "Executive-ready AI operators for revenue, operations, and trust" / Real-time embodied interface (voice + avatar)
**Team:** DeFine (de_fi_ne) + Dane (dane3d) / Atumera LLC

| Channel | URL | Status | Details |
|---------|-----|--------|---------|
| Website | https://embody.zone | VERIFIED | AI avatar platform. Has agent-readable index. |
| Docs | None | — | No standalone docs. Uses Livepeer docs + GitHub READMEs |
| Blog | None | — | Uses Livepeer Forum for updates |
| X/Twitter | None found | — | No account found for Embody/Atumera/DeFine in Livepeer context |
| YouTube | No dedicated channel | — | Scattered videos on personal channels (unlisted?) |
| GitHub (primary) | https://github.com/its-DeFine | VERIFIED | 52 public repos, Pro account |
| GitHub (main repo) | https://github.com/its-DeFine/Unreal_Vtuber | VERIFIED | 890 commits, latest release: 2026.3.1-alpha.1 |
| GitHub (alt org) | https://github.com/UD1sto | 404 | May have been renamed/removed |
| Discord | DISBOARD listing (server 1332360907031842930) | PARTIALLY VERIFIED | Needs manual confirmation — team primarily uses Livepeer Discord |
| Forum | forum.livepeer.org | VERIFIED | Very active. Key threads: WEAVE v5 pre-proposal, Retrospective, UE Updates |
| Forum user | webRTCisCool (DeFine) | VERIFIED | |
| Twitch | https://www.twitch.tv/livi_embody | PARTIALLY VERIFIED | "Livi Embody — Autonomous VTuber" |
| Financial audit | https://github.com/its-DeFine/embody-financial-audit-pack | VERIFIED | Public on-chain audit (Arbitrum) |

**Blog API assessment:** No blog. Forum is the primary update channel.

**GitHub Releases:** Active on Unreal_Vtuber repo (latest: 2026.3.1-alpha.1).

**Hero video candidates:**
1. Current: "Are Aliens Real" demo MP4 (hosted on GitHub raw, used in overview.mdx)
2. `youtu.be/_MAM5ZPsTdM` — Unreal Vtuber Demo (referenced in overview.mdx, commented out)
3. `youtu.be/WLMgzP2g4F8` — Livepeer Fireside Appearance
4. Avatar character demos: Lucy, Sarah, Harry, Zach reading updates (YouTube links in forum posts)

**Items needing manual verification:**
- [ ] Confirm Discord invite link (ask Embody team for canonical link)
- [ ] Check if its-DeFine/Unreal_Vtuber has GitHub Discussions enabled
- [ ] Verify YouTube video links still resolve

---

### 3. Frameworks

**Tagline:** "No-Cloud Streaming Platform. Powered by MistServer and Livepeer." / "Sovereign Video Infrastructure"
**Team:** Stronk / Marco (MistServer team), Netherlands

| Channel | URL | Status | Details |
|---------|-----|--------|---------|
| Website | https://frameworks.network | VERIFIED | Landing page |
| Docs | https://docs.frameworks.network | VERIFIED | **Coming Soon** holding page only — NOT live docs. Keeping reference. |
| App | https://app.frameworks.network | VERIFIED | **Coming Soon** page with countdown |
| X/Twitter | https://x.com/GetFrames | PARTIALLY VERIFIED | Referenced on GitHub org + docs holding page. Cannot scrape content. |
| YouTube | None | — | No dedicated channel |
| GitHub Org | https://github.com/livepeer-frameworks | VERIFIED | 7 repos, 3 followers |
| GitHub Main | https://github.com/livepeer-frameworks/monorepo | VERIFIED | 2 stars, Go/Svelte, Unlicense |
| GitHub Discussions | monorepo | VERIFIED | Enabled, 0 posts (categories configured) |
| GitHub Releases | monorepo | VERIFIED | 8 releases (latest v0.2.0-rc2, 2026-03-16). Actively maintained. |
| Discord | https://discord.gg/9J6haUjdAq | VERIFIED | Dedicated Frameworks server (separate from Livepeer Discord) |
| Forum (own) | https://forum.frameworks.network | VERIFIED | Discourse instance, very low activity (1 welcome post) |
| Forum (Livepeer) | https://forum.livepeer.org/t/pre-proposal-livepeer-frameworks-spe-pilot-phase/2773 | VERIFIED | SPE proposal thread by Stronk |
| Blog | None | — | No blog found. Uses forum for updates. |

**Blog API assessment:** No blog. No RSS.

**Hero video candidates:**
1. `youtube.com/watch?v=DKBRp0U-RKw` — "Frameworks — sovereign video infrastructure" (already in use on overview.mdx). Only known video.

---

### 4. Livepeer Studio

**Tagline:** Developer-friendly hosted gateway for the Livepeer network

| Channel | URL | Status | Details |
|---------|-----|--------|---------|
| Website | https://livepeer.studio | VERIFIED | Marketing + dashboard |
| Docs | https://docs.livepeer.org | VERIFIED | Mintlify. **Pages also exist in our repo at `/solutions/livepeer-studio/` — use relative links.** |
| Blog | https://blog.livepeer.org | VERIFIED | Ghost 6.22. Active. |
| Blog RSS | https://blog.livepeer.org/rss/ | VERIFIED | |
| X/Twitter (protocol) | https://x.com/Livepeer | VERIFIED | Main account |
| X/Twitter (product) | https://x.com/livepeerstudio | VERIFIED | Separate Studio-specific account |
| YouTube | https://www.youtube.com/@livepeer | PARTIALLY VERIFIED | Channel ID UCzfHtZnmUzMbJDxGCwIgY2g in codebase |
| GitHub Org | https://github.com/livepeer | VERIFIED | 170 repos |
| GitHub Studio | https://github.com/livepeer/studio | VERIFIED | 85 stars, 231 issues. Latest: v0.19.0 |
| GitHub go-livepeer | https://github.com/livepeer/go-livepeer | VERIFIED | 580 stars. Latest: v0.8.10 (2026-03-10) |
| GitHub Discussions | livepeer/studio | VERIFIED | Enabled, minimal activity |
| GitHub Discussions | livepeer/ui-kit | VERIFIED | Enabled, moderate activity (~12 discussions) |
| Discord | https://discord.gg/livepeer | VERIFIED | Primary community hub |
| Forum | https://forum.livepeer.org | VERIFIED | Discourse. Active. |
| Telegram | https://t.me/LivepeerOrg | VERIFIED | 4,009 members |
| LinkedIn (protocol) | https://linkedin.com/company/livepeer | VERIFIED | 3,697 followers |
| LinkedIn (product) | https://linkedin.com/company/livepeer-studio | VERIFIED | Separate page |
| Reddit | https://reddit.com/r/livepeer | VERIFIED | ~2,964 subscribers, low activity |
| Farcaster | warpcast.com/livepeer | PARTIALLY VERIFIED | Redirect confirmed |
| Medium (legacy) | https://medium.com/livepeer-blog | VERIFIED | Pre-Ghost migration posts |
| npm | livepeer, @livepeer/react, @livepeer/sdk | VERIFIED | Actively maintained |

**Blog API assessment:** Ghost CMS with RSS at `/rss/`. Existing fetch script already handles this.

**Hero video candidates:**
1. **Placeholder needed** — no strong YouTube-hosted Studio-specific intro/demo video found via search
2. `livepeer.studio/demo` has an embedded video (platform undetermined)
3. Fallback: use Livepeer YouTube channel video featuring Studio, or blog hero image/gif
4. **TODO:** Manual search of youtube.com/@livepeer for Studio-specific content

---

### 5. Streamplace

**Tagline:** "Solving video for everybody forever. Starting with live video on the AT Protocol."
**Founder:** Eli Mallon (iameli / @iame.li on Bluesky)
**Company:** Aquareum Inc.

| Channel | URL | Status | Details |
|---------|-----|--------|---------|
| Website | https://stream.place | VERIFIED | JS SPA |
| Docs | https://stream.place/docs | VERIFIED | Starlight (Astro). Full docs. |
| Blog | https://blog.stream.place | VERIFIED | Leaflet (AT Protocol native publishing) |
| Blog RSS | https://blog.stream.place/rss.xml | VERIFIED | Also: /feed.xml |
| X/Twitter | https://x.com/streamplace | VERIFIED | **Exists but DORMANT.** Founder on Bluesky. |
| YouTube | None | — | No channel, no videos |
| GitHub Org | https://github.com/streamplace | VERIFIED | 67 public repos |
| GitHub Main | https://github.com/streamplace/streamplace | VERIFIED | 207 stars, 26 forks, MIT. Default branch: `next` |
| GitHub Discussions | streamplace/streamplace | VERIFIED | Enabled |
| Discord | https://discord.com/invite/EdtZv4UTMU | VERIFIED | |
| Forum | forum.livepeer.org | VERIFIED | Treasury proposal thread |
| Bluesky | https://bsky.app/profile/stream.place | VERIFIED | **PRIMARY social.** 2,704 followers |
| iOS App | https://apps.apple.com/us/app/streamplace/id6535653195 | VERIFIED | v0.7.2 |
| Android App | https://play.google.com/store/apps/details?id=tv.aquareum | VERIFIED | |

**Blog API assessment:** Leaflet platform with RSS at `/rss.xml`. Public, no API key needed.

**Hero video candidates:**
- No polished video exists. Best candidates: ATmosphere Conference livestream or Eli's daily dev streams.
- **Gap: needs a dedicated video or fallback to blog hero image/gif**

**NOTE:** `github.com/streamplace/overview` referenced in existing docs returned 404 — **FIXED** to `github.com/streamplace/streamplace`.

---

## Cross-Product Analysis

### Public Blog API Availability (for automated fetching)

| Product | Blog Platform | RSS Available | API Key Needed? | Fetchable? |
|---------|--------------|---------------|-----------------|------------|
| Daydream | Ghost 6.22 | Yes (`/rss/`) | Yes (for Content API) | **RSS only** |
| Embody | None | — | — | N/A |
| Frameworks | None | — | — | N/A |
| Livepeer Studio | Ghost 6.22 | Yes (`/rss/`) | Yes (already have key) | **Full API** (existing script) |
| Streamplace | Leaflet | Yes (`/rss.xml`) | No | **RSS** |

### GitHub Discussions Availability

| Product | Repo | Discussions Enabled | Activity |
|---------|------|-------------------|----------|
| Daydream | daydreamlive/scope | Yes | 6 discussions |
| Embody | its-DeFine/Unreal_Vtuber | Needs verification | Unknown |
| Frameworks | livepeer-frameworks/monorepo | Yes | 0 posts (empty) |
| Livepeer Studio | livepeer/studio | Yes | Minimal |
| Livepeer Studio | livepeer/ui-kit | Yes | Moderate (~12) |
| Streamplace | streamplace/streamplace | Yes | At least 1 |

### GitHub Releases Activity

| Product | Repo | Latest Release | Active? |
|---------|------|---------------|---------|
| Daydream | daydreamlive/scope | v0.1.9 (2026-03-20) | Very active (26 releases) |
| Embody | its-DeFine/Unreal_Vtuber | 2026.3.1-alpha.1 | Active |
| Frameworks | livepeer-frameworks/monorepo | v0.2.0-rc2 (2026-03-16) | Active (8 releases) |
| Livepeer Studio | livepeer/studio | v0.19.0 (2024-06-19) | Moderate |
| Livepeer Studio | livepeer/go-livepeer | v0.8.10 (2026-03-10) | Very active |
| Streamplace | streamplace/streamplace | No formal releases (tags only) | Tags exist |

### Hero Video Summary

| Product | Best Candidate | Source | Status |
|---------|---------------|--------|--------|
| Daydream | YouTube channel videos or `daydream.live/hero-demo.mp4` | Own channel / self-hosted | Needs manual selection |
| Embody | "Are Aliens Real" MP4 or `youtu.be/_MAM5ZPsTdM` | GitHub raw / YouTube | Current hero exists |
| Frameworks | `youtube.com/watch?v=DKBRp0U-RKw` | YouTube (already in use) | Only option |
| Livepeer Studio | **Placeholder** — search Livepeer YT or use blog image/gif | youtube.com/@livepeer or blog | Gap — TODO manual search |
| Streamplace | None — use blog hero image/gif or ATmosphere recording | blog.stream.place or stream.place | Gap — no video |

---

## Flags & Issues Discovered

1. ~~`blog.livepeer.studio`~~ — Broken TLS cert. Not our concern (external site issue).
2. **`livepeer.studio/docs`** — Returns 404. These pages exist in our repo at `/solutions/livepeer-studio/`. **Use relative links** in all templates and new pages. ~35 existing external links in solutions/ need updating (separate cleanup task).
3. **`docs.frameworks.network`** — "Coming Soon" holding page. Keeping reference anyway.
4. ~~`github.com/streamplace/overview`~~ — **FIXED** to `github.com/streamplace/streamplace` in `v2/solutions/streamplace/overview.mdx`.
5. **`embody.live`** — Not related to this project. Correct domain is `embody.zone`.
6. **Streamplace X/Twitter** — Account exists but is dormant. Primary social is Bluesky.
