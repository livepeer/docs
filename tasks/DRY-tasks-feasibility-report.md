# DRY List — Feasibility Report

*Investigation of each task in [DRY-and-cleaner-recommendations.md](./DRY-and-cleaner-recommendations.md). Verdict: **Feasible** / **Feasible with caveats** / **Not feasible**; effort and risks noted.*

---

## 1. High impact — reduce repetition

### 1.1 Callout import + usage in every MDX (100+ files)

| Item | Finding |
|------|--------|
| **Scale** | ~155 MDX files use `PreviewCallout` or `ComingSoonCallout`; each has 2–3 repeated lines (import + component). |
| **Option A (Mintlify layout/frontmatter)** | **Feasible with caveats.** Mintlify supports `mode` in frontmatter (e.g. `frame`, `custom`) but does not document a built-in “inject component from frontmatter” (e.g. `status: preview`). Would require a custom layout or wrapper that receives frontmatter and conditionally renders a callout—possible only if the MDX runtime/build passes frontmatter as props. Needs one-off verification in this repo. |
| **Option B (Single page wrapper)** | **Feasible.** A wrapper like `<DocPage status="preview">…</DocPage>` that renders the right callout and children is straightforward. One import per page; no change to Mintlify. |
| **Option C (Normalise only)** | **Feasible.** Current imports already use the same path; style varies (`{ PreviewCallout }` vs `{ComingSoonCallout}`). A script or find-replace can normalise spacing and naming. |
| **Effort** | A: medium (layout + frontmatter wiring). B: low–medium (component + update 155 files manually or via script). C: low (script or sed). |
| **Risk** | A: layout may not get frontmatter. B/C: low. |

**Verdict:** **B is the most reliable.** C is a quick win. A only if you confirm Mintlify exposes frontmatter to a layout component.

---

### 1.2 Portal pages — same 5–7 imports on every portal

| Item | Finding |
|------|--------|
| **Scale** | 8 portal MDX files (about, community, developer, gateways, mission-control, orchestrators, products, token) each import from 4–5 paths: `Portals.jsx`, `themeStyles.jsx`, `frameMode.jsx`, `divider.jsx`, `links.jsx`, and sometimes `HeroGif.jsx`. |
| **Option A (Barrel export)** | **Feasible.** Create one file (e.g. `snippets/components/domain/SHARED/portalLayout.jsx` or extend `Portals.jsx`) that re-exports `PortalHeroContent`, `ThemeData`, `H1`, `H2`, `H5`, `P`, `CustomDivider`, `BlinkingIcon`, etc. Portals then use 1–2 import lines. No change to page structure. |
| **Option B (Single `<PortalLayout>`)** | **Feasible with more work.** Portals share a similar hero + content structure but differ in title, subtitle, cards, and body. A single component with props (and optional per-portal data/JSON) would require refactoring each portal’s content into data or slots; doable but larger refactor. |
| **Effort** | A: low (one new file + 8 portal import updates). B: medium (design API + refactor 8 pages). |
| **Risk** | Low for both. |

**Verdict:** **A is highly feasible and quick.** B is feasible if you want maximum DRY later.

---

### 1.3 `previewCallouts.jsx` — duplicated styles and copy

| Item | Finding |
|------|--------|
| **Current state** | `ComingSoonCallout` and `PreviewCallout` each define identical `rowStyle`, `colStyle`, `linkStyle`; `titleStyle` differs only by color (`#ef1a73` vs `#b636dd`). Same “Check the github issues” / “quick form” block and URLs in both. `ReviewCallout` is minimal. |
| **Option A (Shared styles)** | **Feasible.** Move shared style objects to e.g. `snippets/styles/calloutStyles.js` and a `titleStyle(color)` helper. No dependency on build; just JS modules. |
| **Option B (Single generic callout)** | **Feasible.** One `<StatusCallout variant="coming-soon" \| "preview" \| "review" />` with copy/URLs from config. Straightforward refactor of existing three components. |
| **Option C (Copy + URLs in one place)** | **Feasible.** Add `snippets/copy/callouts.json` (or .js) with titles, links (GitHub, form). Components import and use; no hardcoded strings in JSX. |
| **Effort** | A: low. B: low–medium. C: low. A+C together: low. |
| **Risk** | Low. |

**Verdict:** **All options feasible.** Doing A + C first, then B, is the recommended order.

---

### 1.4 Frontmatter — default `og:image` and keywords

| Item | Finding |
|------|--------|
| **Scale** | 180+ MDX files set `og:image` (many to the same default or domain image). |
| **Current scripts** | `v2/scripts/dev/seo-generator-safe.js` has path-based `og:image` (00_home, 01_about, …). `v2/scripts/dev/update-og-image.js` overwrites all with one fixed image. `snippets/scripts/generate-seo.js` has a different domain map (e.g. 02_developers vs 02_community). So two different domain→image mappings exist. |
| **Option A (Build-time default)** | **Feasible.** Run one canonical SEO script (after consolidating per §2.2) in CI or pre-build; treat missing `og:image` as “derive from path.” Then remove explicit `og:image` from files that match the default. |
| **Option B (Single config)** | **Feasible.** One JSON/JS config (e.g. in `v2/scripts/shared/` or `snippets/scripts/`) for default image and path→image map; scripts and (if possible) theme use it. |
| **Option C (Script-only, document overrides)** | **Feasible.** Rely on the consolidated SEO script to set defaults; document that hand-editing is only for overrides. |
| **Effort** | Depends on doing §2.2 first (one script + one config). Then A/B/C are low–medium. |
| **Risk** | Medium if scripts are not consolidated (drift between scripts). Low once consolidated. |

**Verdict:** **Feasible after consolidating SEO scripts (§2.2).** Then single config + script default is straightforward.

---

## 2. Scripts — consolidate and share logic

### 2.1 Shared frontmatter parsing

| Item | Finding |
|------|--------|
| **Current state** | `seo-generator-safe.js` has `extractFrontmatter()` and `parseFrontmatterFields()` and exports them. `add-callouts.js` uses ad-hoc `content.split('---')` and does not use the same parser. `snippets/scripts/generate-seo.js` has its own `extractFrontmatter()` with different YAML handling (e.g. broken `og:image` lines). |
| **DRY option** | Add `v2/scripts/shared/frontmatter.js` with `extractFrontmatter(content)`, `parseFrontmatterFields(frontmatter)`, and optionally `stringifyFrontmatter(fields)`. Refactor the three scripts to use it. |
| **Feasibility** | **Feasible.** Logic already exists in seo-generator-safe; needs extraction and handling of edge cases (e.g. generate-seo’s broken YAML). add-callouts’ simple split could be replaced by shared extract + parse. |
| **Effort** | Low–medium (extract, unify behaviour, add tests if desired). |
| **Risk** | Low if behaviour is preserved; medium if generate-seo’s special cases are not fully replicated. |

**Verdict:** **Feasible.** Reduces bugs when frontmatter format changes and makes future scripts consistent.

---

### 2.2 Two SEO / og:image scripts

| Item | Finding |
|------|--------|
| **Current state** | (1) `v2/scripts/dev/seo-generator-safe.js` — path-based keywords + og:image; domain list 00_home … 06_delegators, 07_resources, etc. (2) `v2/scripts/dev/update-og-image.js` — sets every file to one `NEW_OG_IMAGE`. (3) `v2/scripts/dev/update-all-og-images.js` — similar bulk update. (4) `snippets/scripts/generate-seo.js` — path-based keywords + og:image but domain keys differ (e.g. 02_developers, 03_community vs 02_community in v2). So two domain→image mappings and multiple ways to bulk-update. |
| **DRY option** | One config (JSON/JS) for domain→og:image; one canonical script (either keep seo-generator-safe and call it from snippets, or merge into generate-seo and deprecate the other). Document in e.g. `docs/scripts-seo.md`. |
| **Feasibility** | **Feasible.** Need to agree on canonical domain list (00_home, 01_about, 02_community vs 02_developers, etc.) then single config + single entrypoint. |
| **Effort** | Medium (merge logic, align domain names with actual folders, deprecate or redirect other scripts). |
| **Risk** | Low once done; high drift risk if left as-is. |

**Verdict:** **Feasible and high value.** Unblock clean defaults for §1.4.

---

### 2.3 Add-callouts and SEO generator — same file walk

| Item | Finding |
|------|--------|
| **Current state** | `add-callouts.js` has `findMdxFiles(dir)` (readdirSync + recurse). `seo-generator-safe.js` uses `execSync('find v2/pages -name "*.mdx"')` (or similar). Different discovery and read/write patterns. |
| **DRY option** | Shared `v2/scripts/shared/mdxFiles.js`: `listMdxFiles(dir)`, `readMdx(path)`, `writeMdx(path, content)` with optional backup/safety. Both scripts use it. |
| **Feasibility** | **Feasible.** Simple Node helpers; no dependency on Mintlify. |
| **Effort** | Low. |
| **Risk** | Low. |

**Verdict:** **Feasible.** Do alongside §2.1 so all script behaviour (encoding, exclusions) is consistent.

---

## 3. Data and config — single source of truth

### 3.1 Gateway code blocks — `snippets/data/gateways/code.jsx`

| Item | Finding |
|------|--------|
| **Current state** | File is ~1,274 lines. Contains **merge conflict markers** (`<<<<<<< Updated upstream`, `=======`, `>>>>>>> Stashed changes`) in at least two places (around lines 2, 1143, 1160, 1166, 1188, 1236). Comment: “THIS IS SO MESSY - MUST BE REORGANIZED BY SECTION.” Repeated structure: `{ filename, icon, language, codeString, description?, output? }`. |
| **Option A (Resolve conflicts + split by section)** | **Feasible.** Resolving conflicts is mandatory for a clean build. Splitting into e.g. `gateways/code/install.js`, `docker.js`, `linux.js` and re-exporting from `code.jsx` is straightforward. |
| **Option B (Schema-driven code blocks)** | **Feasible.** Define array of `{ id, label, language, code, description?, output? }` in JSON or a data file; one `<CodeBlockSection>` component renders them. Requires refactoring consumers of current exports. |
| **Option C (Code block factory)** | **Feasible.** A helper `codeBlock({ filename, icon, language, codeString, description })` reduces repeated object shape; can coexist with A or B. |
| **Effort** | A: medium (resolve conflicts, then split and re-export). B: medium (schema + component + migrate usages). C: low once structure is clear. |
| **Risk** | High if conflicts are resolved incorrectly (lose intended content). Low for B/C after A. |

**Verdict:** **Resolve merge conflicts first (mandatory).** Then A is feasible; B/C are feasible as a follow-up.

---

### 3.2 API reference / base URL tables — repeated table styling

| Item | Finding |
|------|--------|
| **Scale** | At least 11 MDX files (e.g. `ai.mdx`, `cli-http-api.mdx`, configuration-flags, gateway-economics, etc.) use the same inline table styles: `backgroundColor: '#2d9a67'`, `borderCollapse: 'collapse'`, `padding: '12px 16px'`, etc. |
| **DRY option** | Add `<StyledTable>` or `<ApiBaseUrlTable>` in snippets that accepts headers and rows (and optional theme); use theme variables (e.g. `var(--livepeer-green)`) for light/dark. Replace inline tables with the component. |
| **Feasibility** | **Feasible.** Pure presentational component; no build changes. |
| **Effort** | Low (component) + low–medium (replace in 11+ files). |
| **Risk** | Low. |

**Verdict:** **Feasible.** Good quick win.

---

### 3.3 docs.json vs deprecated/docs.json

| Item | Finding |
|------|--------|
| **Current state** | `v2/deprecated/docs.json` exists. `snippets/scripts/paths.config.json` and `generate-docs-status.js` reference `docs.json` (root); no reference to `deprecated/docs.json` in code. Only mention outside the DRY doc is inside `v2/deprecated/docs.json` itself and the DRY doc. Root `docs.json` is the one used (docs-status, structure diagram, etc.). |
| **DRY option** | If deprecated is unused: remove it or move to `archive/` and document. If something still needs it: single source (root docs.json) and generate the other from it, or document which is canonical. |
| **Feasibility** | **Feasible.** No script or build references deprecated; safe to archive or delete after a quick grep in CI/config. |
| **Effort** | Low. |
| **Risk** | Low. |

**Verdict:** **Feasible.** Archive or remove `v2/deprecated/docs.json` and document that root `docs.json` is canonical.

---

## 4. Component and snippet structure

### 4.1 Inconsistent import paths

| Item | Finding |
|------|--------|
| **Current state** | Imports are mostly absolute from `/snippets/...` (e.g. `/snippets/components/domain/SHARED/previewCallouts.jsx`). Some variation in spacing (`{ PreviewCallout }` vs `{ComingSoonCallout}`). No evidence of directory-only imports in sampled files. |
| **DRY option** | Document convention (“absolute from `/snippets/...`, always to a file”); add barrel(s) where helpful (e.g. SHARED index for callouts + Portals); normalise via script if desired. |
| **Feasibility** | **Feasible.** Convention doc + optional barrel is low effort. |
| **Effort** | Low. |
| **Risk** | Low. |

**Verdict:** **Feasible.** Complements §1.1 and §1.2.

---

### 4.2 ThemeData and theme-dependent UI

| Item | Finding |
|------|--------|
| **Current state** | ~40 pages import `ThemeData` from `themeStyles.jsx` (portals and various gateways/orchestrators/about pages). Theme is used for colours in custom blocks. |
| **DRY option** | Keep ThemeData in one place; prefer using it inside shared components (steps, tables, callouts) so pages don’t import ThemeData unless they do custom theme-dependent UI. |
| **Feasibility** | **Feasible with gradual refactor.** Moving theme usage into shared components (e.g. StyledTable, callouts) reduces per-page imports. Pages that need custom theme-dependent layout keep the import. |
| **Effort** | Medium (identify shared components that can own theme, refactor ~40 pages over time). |
| **Risk** | Low if done incrementally. |

**Verdict:** **Feasible.** Best done as part of portal/table/callout refactors (§1.2, §1.3, §3.2).

---

## 5. Content and copy

### 5.1 “WIP” / “Coming soon” / “Under construction” wording

| Item | Finding |
|------|--------|
| **Current state** | Mix of `<Danger>`, `<Note>`, and callout text (“Page is under construction”, “This page is still cooking…”, “Technical Review Needed!”). ~15 pages use “WIP”, “Coming soon”, or “under construction” in some form. |
| **DRY option** | Pick one canonical wording and one component (or callout variant); document in style guide; normalise existing pages; have default callout use same copy from single copy file (§1.3 C). |
| **Feasibility** | **Feasible.** Mostly editorial + applying the chosen component/copy everywhere. |
| **Effort** | Low–medium (decision + replace in ~15+ places). |
| **Risk** | Low. |

**Verdict:** **Feasible.** Do after §1.3 (single callout config/copy).

---

### 5.2 Glossary and terminology

| Item | Finding |
|------|--------|
| **Current state** | `snippets/scripts/generate-data/data/glossary-terms.json` exists (generated). Glossary pages and terminology appear in multiple places. |
| **DRY option** | One glossary source (e.g. extend or formalise glossary-terms.json / script output) as source of truth; other pages reference “see Glossary” or pull terms via a small component. |
| **Feasibility** | **Feasible.** Source already exists; need to decide canonical format and how pages reference it (link vs component). |
| **Effort** | Medium (define canonical source, update glossary page(s), add references or component). |
| **Risk** | Low. |

**Verdict:** **Feasible.** Good for consistency and future i18n.

---

## 6. Quick wins (low effort, high clarity)

| Action | Feasibility | Notes |
|--------|-------------|--------|
| Resolve merge conflicts and remove “MUST BE REORGANIZED” comment in `snippets/data/gateways/code.jsx` | **Feasible (required)** | Conflicts at lines ~2, 1143–1160, 1166–1236. Resolve before any other code.jsx refactor. |
| Fix typo `artibtrum` → `arbitrum` | **Feasible** | Present in: `artibtrum-exchanges.mdx` (filename + keywords), `fund-gateway.mdx` (link), `docs.json`, `v2/deprecated/docs.json`, `docs-status-data.json`, `glossary-terms.json`, `docs-structure-diagram.mdx`, `docs-status-table.mdx`. Requires: rename file, update frontmatter, update all internal links and nav (docs.json, docs-status-data), then re-run generators that emit paths (generate-docs-status, glossary/structure scripts). |
| Add `v2/scripts/shared/README.md` | **Feasible** | Document shared helpers (frontmatter, mdxFiles) and how scripts use them. |
| Normalise callout import style | **Feasible** | One style e.g. `import { PreviewCallout } from '...'`; script or find-replace across ~155 files. |
| Extract “domain → og:image” map to one JSON | **Feasible** | Depends on §2.2; then one config file used by the canonical SEO script. |
| Add `StyledTable` / `ApiBaseUrlTable` | **Feasible** | See §3.2; add component and replace inline tables in 11+ files. |

**Verdict:** **All quick wins are feasible.** Resolve gateways `code.jsx` conflicts first; artibtrum fix needs file rename + link updates + regenerate generated files.

---

## 7. Suggested order of work (feasibility view)

| Order | Task | Feasibility |
|-------|------|-------------|
| 1 | **Scripts:** Add `v2/scripts/shared/frontmatter.js` and `mdxFiles.js`; refactor seo-generator and add-callouts to use them. Consolidate SEO/og:image to one script + one config (§2.1, §2.2, §2.3). | Feasible |
| 2 | **Callouts:** Shared styles + copy file for previewCallouts (§1.3 A+C); then optional wrapper or layout so pages don’t repeat import + component (§1.1 B or A). | Feasible |
| 3 | **Portals:** Barrel export or single PortalLayout import (§1.2 A or B). | Feasible |
| 4 | **Data:** Resolve merge conflicts in `gateways/code.jsx`; split by section; optionally schema-driven code blocks (§3.1). | Feasible after conflicts resolved |
| 5 | **Tables:** Add StyledTable/ApiBaseUrlTable and replace duplicated table markup (§3.2). | Feasible |
| 6 | **Docs:** One “Scripts & automation” README pointing to canonical SEO script, add-callouts, and shared helpers. | Feasible |

---

## Summary table

| Section | Task | Verdict | Effort |
|---------|------|---------|--------|
| 1.1 | Callout import in every MDX | Feasible (B or C) | Low–medium |
| 1.2 | Portal imports | Feasible (A quick; B optional) | Low / medium |
| 1.3 | previewCallouts styles + copy | Feasible (A+C, then B) | Low |
| 1.4 | Default og:image/keywords | Feasible after §2.2 | Low–medium |
| 2.1 | Shared frontmatter parsing | Feasible | Low–medium |
| 2.2 | Single SEO/og:image script + config | Feasible | Medium |
| 2.3 | Shared MDX file walk | Feasible | Low |
| 3.1 | Gateways code.jsx | Feasible after resolving conflicts | Medium |
| 3.2 | API tables → StyledTable | Feasible | Low–medium |
| 3.3 | deprecated/docs.json | Feasible (archive/remove) | Low |
| 4.1 | Import path convention + barrels | Feasible | Low |
| 4.2 | ThemeData in shared components | Feasible (gradual) | Medium |
| 5.1 | WIP/Coming soon wording | Feasible | Low–medium |
| 5.2 | Glossary single source | Feasible | Medium |
| 6 | Quick wins (conflicts, artibtrum, README, normalise, og:image config, StyledTable) | All feasible | Low each |

**Conclusion:** All DRY list tasks are **feasible**. Highest impact and dependency order: (1) resolve merge conflicts in `snippets/data/gateways/code.jsx`; (2) consolidate scripts (§2.1–2.3) and og:image config; (3) callout shared styles + copy + optional wrapper; (4) portal barrel; (5) tables and remaining items. Quick wins (artibtrum, shared README, normalise callout import, StyledTable) can be done in parallel once script consolidation is in place where relevant.
