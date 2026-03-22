---
title: Snippets Folder — Full Audit & Subplan
status: active
parent: REPO-STRUCTURE-GOV/plan.md
audited: 2026-03-22
---

# Snippets Folder — Full Audit & Subplan

> Full filesystem audit of `snippets/` as of 2026-03-22.
> Prior plan.md 2B items marked ✅ were NOT executed — files confirmed still present on disk.

---

## Current Structure

```
snippets/
├── README.md
├── _workspace/          ← created 3A.1; archive/, asset-staging/, component-drafts/ (gitkeep only)
├── assets/              ← images, logos, media — PARTIALLY CLEANED (see below)
├── automations/         ← live data fetchers + n8n workflow backups
├── components/          ← 44 JSX component files, 7 categories
├── composables/         ← 8 MDX portable section blocks (NOT empty — deferred)
├── data/                ← per-section hrefs, variables, snapshots, reference-maps
├── external/            ← 5 read-only MDX files fetched from external sources
├── pages/               ← 8 MDX snippet pages (imported by content pages)
├── snippetsWiki/        ← internal docs ABOUT snippets — WRONG LOCATION
└── templates/           ← 19+ MDX page and block templates
```

---

## Folder-by-Folder Audit

---

### `assets/` — Image and media assets

**⚠️ Plan.md 2B items marked ✅ complete were NOT executed. All files still present.**

#### Still needs doing from prior plan

| Item | Files | Est. size | Action | Gate |
|---|---|---|---|---|
| `domain/02_COMMUNITY/hero-images/` | 19 files | ~20 MB | Delete — 100% unreferenced | Zero-ref ✓ already confirmed |
| `media/heros/` | 21 files | ~2 MB | Delete — duplicate of `domain/00_HOME/Hero_Images/` | Zero-ref ✓ |
| `logo/` dir | 3 files | ~16 KB | Delete — `logos/` is canonical | Zero-ref needed |
| `site/logo/` dir | 2 files | ~8 KB | Delete — third duplicate set | Zero-ref needed |
| `favicon.png` (assets root) | 1 file | 16 KB | Delete — `site/favicon.png` is canonical | Zero-ref needed |
| `data/protocol-overview.html` | 1 file | 4.3 MB | Delete — no consumer found | Zero-ref needed |
| Unused home heroes (13 variants) | 13 files | ~500 KB | Delete — hero_developer*, hero_help, hero_partner, etc. | Zero-ref needed |

#### New findings

| Item | Issue | Action |
|---|---|---|
| `logos/dark.svg`, `logos/light.svg` | Duplicates of `logo/` items inside `logos/` — mixed into canonical dir | Delete after `logo/` is removed |
| `site/og-image/` | 3 OG images × 4 locales = 12 files; same 3 images repeated | Decision: consolidate to one set + route by locale in code? |
| `site/united-kingdom-flag-icon.svg` | Random file, purpose unclear | Zero-ref check → delete |
| `site/sitemap-ai.xml` | 255 KB copy of sitemap; also exists at repo root | Zero-ref check → delete one |
| `domain/10_PRODUCTS/Embody/` | 4 avatar PNGs (~4 MB) — no code reference found in static search | Verify dynamic loading → delete if unused |
| `assets/scripts/n8n/` | Contains only 2 README files — no actual scripts | Delete both READMEs or consolidate to `automations/scripts/n8n/` |

#### Clean

- `domain/00_HOME/Hero_Images/` (used heroes only, after deletions above)
- `domain/01_ABOUT/` — 1 file, in use
- `domain/04_GATEWAYS/` — 2 files, in use
- `domain/SHARED/` — 2 files, in use
- `logos/` (canonical, after cleanup)
- `site/favicon/` — 7 variants, in use
- `site/images/` — in use
- `media/images/` — in use
- `media/videos/` — 5 MP4s, all used

---

### `automations/` — Live data fetchers

#### Structure

| Dir | Contents | Status |
|---|---|---|
| `blog/` | `ghostBlogData.jsx` | Active |
| `discord/` | `discordAnnouncementsData.jsx` | Active |
| `forum/` | `forumData.jsx` + `Hero_Livepeer_Forum.png` | Active |
| `globals/` | `globals.jsx`, `globals.mdx`, `README.mdx` | Active |
| `luma/` | `lumaEventsData.jsx` | Active |
| `showcase/` | `showcaseData.jsx`, `README.md`, `Livepeer_Ecosystem_Descriptions.pdf` | Active |
| `youtube/` | `youtubeData.jsx`, `filterVideos.js` | Active |
| `scripts/n8n/` | 10 workflow JSON files | Backup/reference — not imported |
| `README.mdx` | Root readme | In place |
| `script-index.md` | Auto-generated index | Only 1 entry — stale/incomplete |

#### Issues

| Item | Issue | Action |
|---|---|---|
| `forum/Hero_Livepeer_Forum.png` | Image inside an automations folder — wrong location | Move to `assets/domain/` or `assets/site/images/` |
| `showcase/Livepeer_Ecosystem_Descriptions.pdf` | PDF in automations — wrong location | Decision: move to `assets/data/` or delete |
| `scripts/n8n/` | Workflow JSON backups. Not imported. Purpose: re-deploy automations | Keep in place — document clearly as backup only |
| `script-index.md` | Only 1 entry (filterVideos.js) — stale | Regenerate or delete |

---

### `components/` — JSX component library (44 files, 7 categories, 2,438 total imports)

#### Structure

```
components/
├── config/         MermaidColours.jsx (6 imports)
├── displays/       5 files — Code, ZoomableDiagram, Quote, ResponseField, Video
├── elements/       12 files — links, spacing, text, icons, buttons, etc.
├── integrators/    7 files — blog, embeds, feeds, video-data
├── scaffolding/    3 files — FrameMode, HeroGif, Portals
│   └── page-containers/   EMPTY (no .gitkeep)
├── wrappers/       16 files — accordions, cards, containers, grids, lists, steps, tables
│   └── tables/ApiBaseUrlsTable.mdx   MDX file in JSX dir
└── x-archive/      CATALOG.md only (auto-generated)
```

#### Issues

| Item | Issue | Action |
|---|---|---|
| Duplicate `ShowcaseCards.jsx` | Exists in `wrappers/cards/` (8 imports) AND `integrators/feeds/` (14 imports) | Coordinate with COMPONENT-GOVERNANCE — single-source to one location |
| `scaffolding/page-containers/` | Empty directory, no .gitkeep | Delete or populate |
| `wrappers/tables/ApiBaseUrlsTable.mdx` | MDX file inside JSX component dir — type mismatch | Move to `composables/` or `pages/` |
| `x-archive/CATALOG.md` | Auto-generated component catalog placed in x-archive/ | Move to `docs-guide/catalog/components-catalog.mdx` or `snippetsWiki/` |
| `config/` category | Tiny — 1 file (MermaidColours.jsx) with a `.gitkeep` | Consider: merge into `displays/diagrams/` or leave |
| Multiple deferred splits (flagged in CATALOG) | `Video.jsx` has integrator exports; `Data.jsx` has feed exports; `Layout.jsx` has element export | Deferred by COMPONENT-GOVERNANCE — note only |

---

### `composables/` — 8 MDX portable section blocks

**DEFERRED** — not actionable until content work is complete.

State: 8 active composable files, well-documented README, governance comment headers on each file. Three-layer architecture (Data → Components → Composables). No cleanup needed; decision on integration is post-content.

---

### `data/` — Per-section structured data

#### Structure

```
data/
├── [section]/hrefs.jsx     ← per-section link maps (about, community, developers, gateways, home, internal, lpt, orchestrators, resources, solutions)
├── gateways.jsx            ← LOOSE FILE at data/ root — not in data/gateways/
├── reference-maps/icon-map.jsx
├── references/chainlist.jsx
├── snapshots/              ← coingecko JSON data (2 files + .gitkeep)
├── variables.mdx           ← LOOSE FILE at data/ root
├── variables/              ← 9 per-section MDX variable files
├── API/README.md           ← README only, no data files
└── unknown/hrefs.jsx       ← stale generated artifact with dead paths
```

#### Issues

| Item | Issue | Action |
|---|---|---|
| `data/gateways.jsx` | Loose file at data/ root — should be in `data/gateways/` | Move → `data/gateways/gateways.jsx` or audit if superseded |
| `data/variables.mdx` | Loose file at data/ root — what is this? | Read and determine: merge into `data/variables/` or delete |
| `data/unknown/hrefs.jsx` | References `v2/gateways-new/...` — section doesn't exist | Zero-ref check → delete (stale generated artifact) |
| `data/API/README.md` | Only a README, no data files | Delete (empty category) |
| `data/snapshots/` | CoinGecko JSON data — different type than other data/ content | Review: belongs in `automations/` or a dedicated `data/snapshots/` is fine |
| `data/reference-maps/icon-map.jsx` | What is this? Where is it used? | Audit refs → if used, document; if zero-ref, delete |

---

### `external/` — Externally-sourced read-only MDX

**Clean.** 5 files + `.last_fetch`. All fetched from external sources. No action needed.

---

### `pages/` — MDX snippet pages imported by content

#### Structure

```
pages/
├── 00_HOME/project-showcase.mdx
├── 01_ABOUT/concepts/actors.mdx, network.mdx, overview.mdx, protocol.mdx
├── 05_GPUS/Diagrams/orchestratorRole.mdx
└── 08_SHARED/FrameModePageHeader.mdx, eth-account-setup.mdx
```

#### Issues

| Item | Issue | Action |
|---|---|---|
| Numbered naming convention (`00_HOME`, `01_ABOUT`) | Legacy pattern — inconsistent with rest of repo | Rename to section names: `home/`, `about/`, `gpu/`, `shared/` — requires updating all import paths in v2 pages |
| Gaps in numbering (02, 03, 04, 06, 07) | Sections were once planned/existed here | Confirm gaps are gone; no ghost dirs |
| Only 8 files across 4 sections | Very sparse — is this pattern actively used? | Audit: how many v2 pages import from here |

---

### `snippetsWiki/` — Internal documentation about snippets

#### Structure

```
snippetsWiki/
├── README.md              ← says index.mdx is auto-generated
├── index.mdx              ← overview of snippets folder
├── mintlify-behaviour.mdx ← Mintlify platform quirks and constraints
├── theme-colors.mdx       ← color reference
└── componentLibrary/
    ├── index.mdx          ← component library overview
    └── examples/
        ├── frame-mode.mdx
        └── tip-with-arrow-examples.mdx
```

#### Issues

| Item | Issue | Action |
|---|---|---|
| **Wrong location** | This is documentation ABOUT the snippets system — it belongs in `docs-guide/tooling/` or `docs-guide/contributing/`, not inside `snippets/` | **Decision: move to docs-guide** |
| `mintlify-behaviour.mdx` | Documents platform constraints — high-value contributor reference | If moved: `docs-guide/tooling/mintlify-behaviour.mdx` |
| `theme-colors.mdx` | Color reference — belongs in `docs-guide/features/` or `tooling/` | If moved: `docs-guide/tooling/theme-colors.mdx` |
| Not in `docs.json` nav | This content exists but is not published or discoverable | Fix as part of move |

---

### `templates/` — MDX page and block templates

#### Structure

```
templates/
├── README.mdx
├── blocks/                ← comparison-matrix, comparison-table, related-pages-cards, related-pages-cta
├── docs-guide/            ← 5 templates for docs-guide pages (created 2026-03-21)
└── pages/
    ├── faq-page.mdx
    ├── glossary-consolidated-template.mdx + glossary-consolidated.mdx (paired)
    ├── glossary-tab-template.mdx + glossary-tab.mdx (paired)
    ├── how-to-page.mdx
    ├── landing-frame-page.mdx
    ├── openapi-endpoint-page.mdx
    ├── overview-page.mdx
    ├── page-composition-framework.mdx
    ├── reference-page.mdx
    ├── troubleshooting-page.mdx
    ├── tutorial-page.mdx
    ├── data-imports/social-data-page.mdx
    ├── landing-and-navigation/navigation-page.mdx, portal-page.mdx
    ├── reference-and-api/changelog-template.mdx, changelog.mdx, openapi-endpoint-page.mdx, source-of-truth-template.mdx, source-of-truth.mdx
    ├── setup-and-code-layouts/multi-view-page.mdx
    └── tutorial-and-guides/tutorial-template.md (0 bytes), tutorial.mdx
```

#### Issues

| Item | Issue | Action |
|---|---|---|
| `tutorial-and-guides/tutorial-template.md` | 0 bytes, empty | Delete |
| `pages/page-composition-framework.mdx` | Framework doc inside templates/ — wrong type | Move to `docs-guide/frameworks/` |
| `reference-and-api/openapi-endpoint-page.mdx` | Duplicate of `pages/openapi-endpoint-page.mdx` at root of pages/ | Audit: are these identical? Delete one |
| Loose files at `pages/` root | `faq-page.mdx`, `how-to-page.mdx`, `landing-frame-page.mdx`, etc. — mix of rooted and subdirred files | Decide: move all to type subdirs, or leave loose ones loose |
| Paired template + example pattern | `glossary-tab-template.mdx` + `glossary-tab.mdx` etc. — pattern is clear but not documented | Add README note on the template/example pairing convention |

---

## Summary — All Actions Required

### Safe to execute now (no decision needed)

| # | Action | Location | Type |
|---|---|---|---|
| S1 | Delete `assets/domain/02_COMMUNITY/hero-images/` (19 files, ~20 MB) | assets/ | Delete |
| S2 | Delete `assets/media/heros/` (21 files, ~2 MB) | assets/ | Delete |
| S3 | Delete `assets/favicon.png` (root duplicate) | assets/ | Delete |
| S4 | Delete `assets/data/protocol-overview.html` (4.3 MB, zero-ref) | assets/ | Delete |
| S5 | Delete `assets/scripts/n8n/` READMEs (2 empty files) | assets/ | Delete |
| S6 | Delete `components/scaffolding/page-containers/` (empty dir) | components/ | Delete |
| S7 | Delete `data/unknown/hrefs.jsx` (dead paths to v2/gateways-new) | data/ | Delete |
| S8 | Delete `data/API/README.md` (empty category) | data/ | Delete |
| S9 | Delete `templates/pages/tutorial-and-guides/tutorial-template.md` (0 bytes) | templates/ | Delete |
| S10 | Delete `automations/script-index.md` (stale, 1 entry) | automations/ | Delete |
| S11 | Move `automations/forum/Hero_Livepeer_Forum.png` → `assets/domain/` | automations/ | Move |
| S12 | Move `data/gateways.jsx` → `data/gateways/gateways.jsx` | data/ | Move |

### Requires zero-ref verification before delete

| # | Action | Location | Note |
|---|---|---|---|
| Z1 | Delete `assets/logo/` (3 files) | assets/ | Verify zero refs to `assets/logo/` paths |
| Z2 | Delete `assets/site/logo/` (2 files) | assets/ | Verify zero refs |
| Z3 | Delete `assets/logos/dark.svg`, `logos/light.svg` | assets/ | After Z1+Z2, clean duplicates from logos/ |
| Z4 | Delete unused home hero variants (13 files) | assets/domain/00_HOME/ | List in task; verify per file |
| Z5 | Delete `assets/site/united-kingdom-flag-icon.svg` | assets/ | Zero-ref check |
| Z6 | Delete `assets/site/sitemap-ai.xml` (repo root is canonical) | assets/ | Verify root copy is used |
| Z7 | Delete `templates/pages/reference-and-api/openapi-endpoint-page.mdx` | templates/ | Check vs root pages/ copy |

### Requires human decision

| # | Item | Decision needed |
|---|---|---|
| D1 | `snippetsWiki/` location | Move to `docs-guide/tooling/` or stay in snippets/? |
| D2 | `assets/domain/10_PRODUCTS/Embody/` (4 PNGs, ~4 MB) | Dynamic loading possible? Verify then delete or keep |
| D3 | `assets/site/og-image/` locale consolidation | Consolidate 12 files → 3 + locale routing in code? |
| D4 | `automations/showcase/Livepeer_Ecosystem_Descriptions.pdf` | Keep (move to assets/data/)? Or delete? |
| D5 | `data/snapshots/` placement | Fine in data/ or move to automations/? |
| D6 | `data/variables.mdx` (loose root file) | Read it — what is it? Merge into variables/ or delete |
| D7 | `pages/` numbered naming | Rename `00_HOME` → `home` etc.? Requires updating all import paths in v2 pages |
| D8 | `templates/pages/page-composition-framework.mdx` | Move to `docs-guide/frameworks/`? |
| D9 | ShowcaseCards.jsx duplication | Coordinate with COMPONENT-GOVERNANCE |
| D10 | `composables/` integration | DEFERRED — post-content |

### Coordinate with other plans

| Item | Coordinate with |
|---|---|
| ShowcaseCards.jsx (D9) | COMPONENT-GOVERNANCE |
| `snippetsWiki/` → `docs-guide/` (D1) | DOCUMENTATION plan |
| `components/x-archive/CATALOG.md` | COMPONENT-GOVERNANCE — move to docs-guide/catalog/ |

---

## Tasks

> All require explicit go-ahead before execution.

- [ ] **SN.1** Execute safe deletes S1–S6 (no refs needed: 02_COMMUNITY heroes, media/heros, favicon root, protocol-overview.html, scripts/n8n READMEs, empty page-containers dir)
- [ ] **SN.2** Execute safe moves S10–S12 (script-index.md delete, forum PNG move, gateways.jsx move)
- [ ] **SN.3** Zero-ref check + delete Z1–Z7 (logo dirs, unused heroes, flag icon, sitemap copy, duplicate template)
- [ ] **SN.4** Human decisions D1–D10 (see above)
- [ ] **SN.5** Write `snippets/` folder policy (blocked on decisions D1, D7, D10)
- [ ] **SN.6** Composables integration — DEFERRED

---

## Open Decisions (need human answer before SN.5 or SN.6)

1. **D1** — Move snippetsWiki/ to docs-guide/tooling/?
2. **D7** — Rename pages/ numbered dirs (00_HOME → home etc.)?
3. **D8** — Move page-composition-framework.mdx to docs-guide/frameworks/?
