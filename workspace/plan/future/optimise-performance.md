---
plan-type: execution
---

# Livepeer Docs Web Performance Optimization Plan (Mintlify + React + Core Web Vitals)

## Summary
This plan targets the two biggest contributors to perceived slowness in your docs as of **March 1, 2026**: oversized and eagerly loaded media, and oversized initial page payloads (HTML + client bundles + embedded internal content).  
The plan is decision-complete and prioritized for fastest user-visible wins first.

## Current Evidence Snapshot
1. Global payload size is high across normal pages; sampled live HTML response bodies are ~**1.8–1.9MB uncompressed** and ~**293–299KB Brotli-compressed**.
2. Public navigation config is very large; [docs.json](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/docs.json) is **170,118 bytes** with **1,159 page refs / 591 unique / 561 duplicate refs**.
3. Public nav includes internal/report content; see internal hub and report refs in [docs.json:3119](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/docs.json:3119) and [docs.json:3184](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/docs.json:3184).
4. Mission Control page references a **70.6MB GIF** in both `og:image` and inline content; see [v2/home/mission-control.mdx:8](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/v2/home/mission-control.mdx:8) and [v2/home/mission-control.mdx:37](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/v2/home/mission-control.mdx:37).
5. Media loading defaults are not performance-safe in custom components; raw `<img>`/`<iframe>` are rendered without lazy-loading/decoding/sizing hints in [snippets/components/display/image.jsx:24](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/snippets/components/display/image.jsx:24), [snippets/components/display/video.jsx:325](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/snippets/components/display/video.jsx:325), and [snippets/components/display/embed.jsx:62](/Users/alisonhaire/Documents/Livepeer/livepeer-docs-v2%20%5Bdocs-v2-branch%5D/snippets/components/display/embed.jsx:62).
6. Repo-wide markup scan indicates **107 iframes, 0 lazy** and **43 img tags, 0 lazy / 0 decoding async / 0 explicit width-height**.
7. Live JS chunk request set is large on initial page load; sampled page had **41 script chunks**, aggregate uncompressed `content-length` sum ~**4,031,220 bytes**.
8. Inference from live headers and Vercel cache semantics: HTML and many JS responses use `cache-control: no-store`, which reduces repeat-visit caching benefits.

## Optimization Backlog (Priority Ordered)

## P0 (Immediate, highest impact)
1. Replace all GIF hero and OG images with static preview + click-to-play video; policy: no GIF in `og:image`; use optimized JPG/WEBP for social cards and MP4/WebM for animation.
2. Remove external raw GitHub media URLs from rendered pages and metadata; host media through Mintlify/CDN paths only.
3. Reduce above-the-fold image preloads on portal pages; keep one LCP candidate eager and make all non-critical cards lazy.
4. Remove internal reports/docs-guide pages from public `docs.json` navigation payload; keep internal docs in separate internal docs project or protected docs.
5. Add lazy defaults for custom media components; images use `loading="lazy"` + `decoding="async"` by default unless explicitly marked priority.
6. Add lazy defaults for embedded iframes/videos; `loading="lazy"` for iframe embeds and `preload="metadata"` for non-critical videos.
7. Add intrinsic dimensions or aspect-ratio constraints for custom images and embeds to reduce CLS.

## P1 (Short-term structural)
1. Trim nav duplication in `docs.json`; remove repeated page references and collapse repeated sections where not needed.
2. Split oversized MDX pages into smaller routes where possible, especially heavy internal/report-like pages.
3. Gate or relocate internal tabs/content from public output; use Mintlify auth and/or separate internal site.
4. Reduce third-party embed cost; switch auto-loaded embeds to interaction-triggered embeds where possible.
5. Audit and remove unnecessary external scripts and non-critical preloads on key landing pages.
6. Review `mode: frame` portal pages for above-the-fold media density; reduce first-view media count.

## P2 (Platform and runtime tuning)
1. Open Mintlify support ticket with evidence to review cache behavior for static chunks and HTML revalidation policy.
2. Establish page-level performance budgets and CI checks for payload, media, and Web Vitals regressions.
3. Add route-level performance monitoring on top traffic pages and track trends weekly.
4. Introduce progressive enhancement pattern for expensive widgets (load on visible or on interaction).

## Public Interface / Component Contract Changes
1. `Image` and `LinkImage` components gain props: `priority` (default `false`), `loading`, `decoding`, `fetchPriority`, `width`, `height`.
2. `YouTubeVideo`, `LinkedInEmbed`, and other iframe-based components gain prop: `lazy` (default `true`) and set `loading="lazy"` unless overridden.
3. Introduce optional `PosterThenPlay` behavior for heavy animated media.
4. Add docs authoring rule: `og:image` must be static image under size budget; animated assets only for in-page user-initiated playback.

## Test Cases and Acceptance Criteria
1. Key templates to test: `v1 intro`, `v2 mission-control`, `v2 gateway guide`, one API reference page, one embed-heavy page.
2. Acceptance for Core Web Vitals: LCP &lt;= 2.5s, INP &lt;= 200ms, CLS &lt;= 0.1 on representative mobile profile.
3. Acceptance for payload: reduce initial HTML payload by removing internal/report content from public route data; reduce eager image preloads on mission-control.
4. Acceptance for media: no public page preloads 10MB+ assets; no GIF used as `og:image`.
5. Acceptance for components: all custom `<img>` and `<iframe>` wrappers default to lazy-safe behavior unless explicitly opt-in eager.
6. Regression checks: existing routes continue to resolve; SEO metadata remains valid; embeds still function after click/lazy changes.

## Rollout Sequence
1. Week 1: P0 media + component default changes + remove internal/report entries from public nav.
2. Week 2: P1 nav dedupe + route splitting + embed interaction gating.
3. Week 3: P2 platform escalation + automated budget checks + recurring monitoring.

## Assumptions and Defaults
1. Default goal is faster public docs, not preserving current internal-hub discoverability in public payloads.
2. Any page that needs one above-the-fold hero image may keep exactly one eager image.
3. Internal reports/docs-guide remain accessible via protected/internal route strategy, not public nav payload.
4. If Mintlify cache headers are not configurable at project level, this becomes a vendor escalation item.

## Source-Backed Rationale
1. Mintlify: hidden pages and discoverability/indexing behavior; [Hidden pages](https://www.mintlify.com/docs/settings/global/hidden-pages), [Authentication / protecting docs](https://www.mintlify.com/docs/settings/global/authentication), [Files and limits](https://www.mintlify.com/docs/create/files), [Images and embeds](https://www.mintlify.com/docs/content/components/image-and-embeds).
2. React: code-splitting and lazy loading; [React `lazy`](https://react.dev/reference/react/lazy), [React `memo`](https://react.dev/reference/react/memo), [React `useMemo`](https://react.dev/reference/react/useMemo), [React DOM `preconnect`](https://react.dev/reference/react-dom/preconnect), [React DOM `preload`](https://react.dev/reference/react-dom/preload).
3. General web performance: Core Web Vitals and optimizations; [Optimize LCP](https://web.dev/articles/optimize-lcp), [Optimize INP](https://web.dev/articles/optimize-inp), [Optimize CLS](https://web.dev/articles/optimize-cls), [Iframe lazy-loading](https://web.dev/articles/iframe-lazy-loading), [MDN Lazy loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading), [MDN HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching), [Vercel cache-control behavior](https://vercel.com/docs/headers/cache-control-headers).
