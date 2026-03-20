# Audit: `snippets/`

*Audited: 2026-03-20*

---

## Structure

```
snippets/
├── README.md            280B — points to wiki
├── assets/              65 MB — images, logos, media
├── automations/         N8N workflows + live data fetchers
├── components/          43 JSX files — component library
├── composables/         EMPTY
├── data/                38+ JSX/MDX href and config maps
├── external/            5 read-only MDX files + .last_fetch
├── pages/               8 MDX snippet pages (wiki examples)
├── snippetsWiki/        Internal documentation wiki
└── templates/           19 MDX page and block templates
```

**Total size: ~65 MB** (assets dominate)

---

## `assets/` — 65 MB, 147 files

### Subdirectory breakdown

```
assets/
├── data/protocol-overview.html    4.3 MB — single large file, purpose unclear
├── domain/
│   ├── 00_HOME/Hero_Images/       ~22 hero images (~1 MB each, 22 total)
│   ├── 01_ABOUT/                  1 file: ProtocolNodeDiagram.png
│   ├── 02_COMMUNITY/hero-images/  19 images (~20 MB total — 4 files at 4+ MB each)
│   ├── 04_GATEWAYS/               2 files (view-dropdown.png, example JSON)
│   ├── 10_PRODUCTS/Embody/        4 avatar PNGs (~4 MB)
│   └── SHARED/                    LivepeerDocsHero.svg, LivepeerDocsLogo.svg
├── favicon.png                    16K — DUPLICATE (also in site/)
├── logo/                          dark.png, dark.svg, light.svg — DUPLICATE SET
├── logos/                         Full logo variants + products/ subdirectory
├── media/
│   ├── heros/                     20 PNG hero images — DUPLICATE of domain/00_HOME/Hero_Images/
│   ├── images/                    GPU callout, stats, logos
│   └── videos/                    5 MP4 files (~32 MB — all used)
├── scripts/n8n/                   2 README files only
└── site/
    ├── favicon/                   7 favicon variants
    ├── favicon.png                16K — DUPLICATE
    ├── images/                    404 image, layered-image.webp
    ├── logo/                      dark.svg, light.svg — ANOTHER DUPLICATE SET
    ├── og-image/                  en/, fr/, es/, cn/ — same 3 files × 4 locales
    └── sitemap-ai.xml             255K — copy here (also at root)
```

---

## Asset Usage Audit

### Confirmed USED

**Logos:** All 4 product logos used. `Livepeer-Logo-Full-Dark.svg`, `Livepeer-Logo-Full-Theme.svg`, `Livepeer-Logo-Symbol-Light.svg` used.

**Home heroes:** `hero_about`, `hero_community`, `hero_gateways`, `hero_gpu`, `hero_opportunity`, `hero_showcase`, `hero_video_stream`, `hero_ai_run`, `evolution.png`, `LivepeerStats.png`, `ProtocolNodeDiagram.png` — all referenced.

**OG images:** `site/og-image/fallback.png` and all locale variants are used as `og:image` meta tags.

**Videos:** All 5 MP4 files referenced (`HeroBackground.mp4`, `daydream.mp4`, `livepeer-founders-post.mp4`, etc.).

---

### Confirmed UNREFERENCED

| File(s) | Location | Size | Action |
|---|---|---|---|
| **19 community hero images** | `domain/02_COMMUNITY/hero-images/` | **~20 MB** | **Delete** — 100% unreferenced |
| `Hero_Discord.png` | same | 4.0 MB | included above |
| `Hero_X.png` | same | 3.9 MB | included above |
| `Hero_Telegram.png` | same | 4.1 MB | included above |
| `Hero_LinkedIn.png` | same | 4.0 MB | included above |
| `Hero_Youtube.png` | same | 4.0 MB | included above |
| `Hero_Telegran.png` | same | 27K | typo filename, unreferenced |
| `Hero_Yotube.png` | same | 21K | typo filename, unreferenced |
| 20 media/heros/ files | `media/heros/` | ~1-2 MB | **Delete** — complete duplicate of domain/00_HOME/Hero_Images/ |
| 13 unused home heroes | `domain/00_HOME/Hero_Images/` | ~500 KB | Delete (hero_developer, hero_help, hero_partner, hero_reference, hero_research, hero_researchers, hero_word_NEW, etc.) |
| `data/protocol-overview.html` | `data/` | 4.3 MB | Investigate — single large file, no clear consumer |
| 4 Embody avatars | `domain/10_PRODUCTS/Embody/` | ~4 MB | Verify: no code reference found |
| `favicon.png` (root of assets) | `assets/` | 16K | Duplicate — keep `site/favicon.png` |
| `logo/` directory | `assets/logo/` | 16K | Duplicate of `logos/` — remove `logo/` |
| `logos/dark.svg`, `logos/light.svg` | `assets/logos/` | 8K | Duplicate of `logo/` after cleanup |
| `site/logo/dark.svg`, `site/logo/light.svg` | `assets/site/logo/` | 8K | Third copy of same logos — remove |

### Duplicates

| Duplicate pair | Action |
|---|---|
| `domain/00_HOME/Hero_Images/` ↔ `media/heros/` | Delete `media/heros/` — update any references to point to `domain/00_HOME/Hero_Images/` |
| `logo/` ↔ `logos/` ↔ `site/logo/` | Keep `logos/` as canonical. Delete `logo/` and `site/logo/`. |
| `favicon.png` (root) ↔ `site/favicon.png` | Keep `site/favicon.png`. Delete root duplicate. |
| OG images × 4 locales | 12 files for 3 unique images. Consolidate to single set; route by locale in code rather than duplicating files. Saves ~750 KB. |

### Estimated Savings

| Action | Savings |
|---|---|
| Delete `02_COMMUNITY/hero-images/` | **~20 MB** |
| Delete `media/heros/` (duplicate) | **~2 MB** |
| Delete `data/protocol-overview.html` | **~4 MB** |
| Delete unused home heroes (13) | **~500 KB** |
| Delete Embody avatars (if confirmed unused) | **~4 MB** |
| Logo deduplication | **~40 KB** |
| OG image consolidation | **~750 KB** |
| **Total conservative estimate** | **~26–30 MB** |

Current: 65 MB → Post-cleanup: ~35–40 MB

---

## `components/` — 43 JSX Files

### Usage by frequency

**Heavy (100+ refs):** Links.jsx (541), Divider.jsx (306), Data.jsx (261), Tables.jsx (220), Video.jsx (179), Containers.jsx (169), Steps.jsx (165), FrameMode.jsx (157), Portals.jsx (149), Table.jsx (131), ZoomableDiagram.jsx (115), Text.jsx (101), CustomCards.jsx (100)

**Medium (20–100 refs):** PreviewCallouts, Code, Quote, DataEmbed, ResponseField, Math, Lists, Image, Layout, Icons, HeroGif, Buttons, MermaidColours, Coingecko, ShowcaseCards (combined 38 refs), QuadGrid, ExternalContent

**Light (5–20 refs):** CardCarousel, ScrollBox, VideoData, SocialLinks, SearchTable, AccordionLayout, A11y, Release, ListSteps, Spacer, CustomCardTitle, AccordionGroupList (5)

**Issues:**

1. **Duplicate ShowcaseCards.jsx** — exists in both `wrappers/cards/` and `integrators/feeds/`. 38 combined references. Should be single-sourced in one location with the other file either deleted or re-exporting from the canonical one.

2. **AccordionGroupList.jsx (5 refs)** — very low usage. Evaluate whether it can be handled by AccordionLayout.jsx (15 refs) which covers the same concept.

All other components are actively used. No dead code found.

---

## `templates/` — 19 Files

All templates are referenced and used. One issue:

- `pages/tutorial-and-guides/tutorial-template.md` — **0 bytes, empty**. Delete or populate.

---

## `data/` — 38+ Files

All data files are actively used. `hrefs.jsx` files per section are large (up to 103 KB for solutions/) but necessary. No cleanup needed.

One note: `data/variables/` contains 9 MDX files that appear to be minimal variable declarations. Verify they're all still needed.

---

## `automations/` — All Used

All live data fetchers are active (blog, discord, forum, luma, showcase, youtube). N8N workflow JSON files in `scripts/n8n/` are backup/reference — not imported by code but useful for re-deploying automations.

One issue: `showcase/README.md` is **0 bytes**. Delete or populate.

---

## `composables/` — EMPTY

Completely empty directory. Either document its intended purpose or delete it. Has no content.

---

## `external/` — All Current

5 read-only MDX files fetched from external sources. `.last_fetch` is an auto-generated timestamp. Clean.

---

## Scratch / Notes Findings

No `notes.txt`, no `_workspace/`, no temp files. Clean except for two empty files noted above.

---

## Summary

| Issue | Severity | Savings | Action |
|---|---|---|---|
| `02_COMMUNITY/hero-images/` — 19 files, 100% unreferenced | **HIGH** | ~20 MB | Delete entire directory |
| `media/heros/` — complete duplicate of domain/00_HOME/Hero_Images/ | **HIGH** | ~2 MB | Delete; ensure all refs point to domain/ |
| `data/protocol-overview.html` — 4.3 MB, no consumer found | High | ~4 MB | Investigate then delete |
| 13 unreferenced home hero variants | Medium | ~500 KB | Delete (hero_developer, hero_help, hero_partner, etc.) |
| Embody avatars (4 PNGs) — no code reference found | Medium | ~4 MB | Verify dynamic loading, then delete if unused |
| Logo triplication (`logo/`, `logos/`, `site/logo/`) | Medium | ~40 KB | Canonicalize to `logos/`; delete others |
| OG images × 4 locale copies | Medium | ~750 KB | Consolidate to single set |
| Duplicate favicon.png | Low | 16 KB | Delete root `assets/favicon.png` |
| ShowcaseCards.jsx in two locations | Medium | — | Single-source to one location |
| `composables/` is empty | Low | — | Delete directory |
| Empty files: `tutorial-template.md`, `showcase/README.md` | Low | — | Delete |
