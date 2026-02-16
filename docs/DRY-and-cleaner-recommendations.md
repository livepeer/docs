# DRY & Cleaner Codebase — Recommendations

*From a full review of livepeer-docs-fork (v2 pages, snippets, scripts). Prioritised by impact and effort.*

---

## 1. High impact — reduce repetition

### 1.1 Callout import + usage in every MDX (100+ files)

**Problem:** Almost every page has:

```mdx
import { PreviewCallout } from '/snippets/components/domain/SHARED/previewCallouts.jsx'
<PreviewCallout />
```
(or `ComingSoonCallout`). Same 2–3 lines repeated in 100+ files.

**DRY options:**

- **A. Mintlify layout/wrapper:** If the stack supports it, provide a default layout that injects a callout when frontmatter has e.g. `status: preview` or `status: coming-soon`. Pages then only set frontmatter; no import or component line.
- **B. Single “page wrapper” component:** e.g. `<DocPage status="preview">…</DocPage>` that (1) renders the right callout from status and (2) wraps children. One import per page instead of repeating the callout import + component.
- **C. Keep as-is but normalise:** At minimum, use one import style (e.g. `import { PreviewCallout } from '...'` with a single space after `{`) and one component name so scripts/grep stay consistent.

**Recommendation:** Prefer A or B so adding/removing “under construction” is a single frontmatter or wrapper change.

---

### 1.2 Portal pages — same 5–7 imports on every portal

**Problem:** Gateways, Orchestrators, Token, Community, About, Products portals each repeat:

```mdx
import { PortalHeroContent, HeroImageBackgroundComponent, LogoHeroContainer, ... } from '/snippets/components/domain/SHARED/Portals.jsx'
import { ThemeData } from '/snippets/styles/themeStyles.jsx'
import { H1, H2, H5, P } from '/snippets/components/display/frameMode.jsx'
import { CustomDivider } from '/snippets/components/primitives/divider.jsx'
import { BlinkingIcon } from '/snippets/components/primitives/links.jsx'
```

**DRY options:**

- **A. Barrel export:** In `Portals.jsx` (or a new `snippets/components/domain/SHARED/portalLayout.jsx`), re-export everything a portal needs: `export { PortalHeroContent, ThemeData, H1, H2, H5, P, CustomDivider, BlinkingIcon } from '...'`. Portals then: `import { PortalLayout, PortalHeroContent, ... } from '/snippets/...'` (one or two lines).
- **B. Single `<PortalLayout>` component:** Accept props (title, subtitle, refCardLink, overview, children) and render hero + content. Each portal page only imports `<PortalLayout>` and passes data (optionally from a JSON/MDX data file per section).

**Recommendation:** At least do the barrel so one import line pulls in all portal deps; optionally move to a data-driven PortalLayout for maximum DRY.

---

### 1.3 `previewCallouts.jsx` — duplicated styles and copy

**Problem:** `ComingSoonCallout` and `PreviewCallout` each define the same `rowStyle`, `colStyle`, `linkStyle` (and almost the same `titleStyle`). The “Check the github issues” / “quick form” block is copy-pasted. URLs and copy are hardcoded.

**DRY options:**

- **A. Shared styles:** Move `rowStyle`, `colStyle`, `linkStyle` to a shared object or `snippets/styles/calloutStyles.js` and import in the component. One `titleStyle` factory: `(color) => ({ ...base, color })`.
- **B. Single generic callout:** e.g. `<StatusCallout variant="coming-soon" />` / `variant="preview"` that takes copy and URLs from a single config (see 1.4).
- **C. Copy + URLs in one place:** Add `snippets/copy/callouts.json` (or .js) with `{ comingSoon: { title, linkGitHub, linkForm }, preview: { title, ... } }`. Components read from that so copy/URLs are not in JSX.

**Recommendation:** Do A + C immediately (shared styles + external copy); then consider B to collapse to one component.

---

### 1.4 Frontmatter — default `og:image` and keywords

**Problem:** 180+ MDX files set `og:image: "/snippets/assets/domain/SHARED/LivepeerDocsLogo.svg"` (or similar). Many could derive from path. Repeating the same value everywhere is fragile when the default or path rules change.

**DRY options:**

- **A. Build-time / script default:** If the docs build or a pre-build script reads frontmatter, treat missing `og:image` as “derive from path” (like `seo-generator-safe.js`). Then remove explicit `og:image` from files that match the default rule.
- **B. Single config for “default” og:image:** e.g. in `snippets/scripts/paths.config.json` or a small constants file, define `DEFAULT_OG_IMAGE` and the path→image mapping. Scripts and (if possible) theme use it; pages only override when needed.
- **C. Keep generating via script:** Run `seo-generator-safe.js` (or equivalent) in CI so `keywords` and `og:image` are always set from a single source of truth (path + config). Then avoid hand-editing these in MDX except for overrides.

**Recommendation:** Consolidate on one SEO script (see §2.2) and use it to set defaults; document “override only when necessary.”

---

## 2. Scripts — consolidate and share logic

### 2.1 Shared frontmatter parsing

**Problem:** `v2/scripts/dev/seo-generator-safe.js` has `extractFrontmatter()` and `parseFrontmatterFields()`. Other scripts (e.g. add-callouts, update-og-image) do ad-hoc regex or string splits. Duplication and risk of inconsistent behaviour.

**DRY option:** Add a small shared module, e.g. `v2/scripts/shared/frontmatter.js`, that exports:

- `extractFrontmatter(content)` → `{ frontmatter, body }`
- `parseFrontmatterFields(frontmatter)` → object of key/value
- `stringifyFrontmatter(fields)` → back to YAML string (if needed)

Then `seo-generator-safe.js`, `add-callouts.js`, and any future script that touches frontmatter use this module. Reduces bugs when frontmatter format changes.

---

### 2.2 Two SEO / og:image scripts

**Problem:**  
- `v2/scripts/dev/seo-generator-safe.js` — updates keywords + og:image by path; has domain mapping (00_home, 01_about, …).  
- `v2/scripts/dev/update-og-image.js` — sets every file to one fixed `NEW_OG_IMAGE`.  
- `snippets/scripts/generate-seo.js` — also does keywords + og:image with a slightly different domain map (e.g. 02_developers vs 02_community).

So there are two different “domain → og:image” mappings and two ways to bulk-update. Confusing and easy to drift.

**DRY option:**

- **Single source of truth for “domain → og:image”:** One JSON or JS config (e.g. in `snippets/scripts/` or `v2/scripts/shared/`) used by:
  - the main SEO generator (prefer `seo-generator-safe.js` or merge into `snippets/scripts/generate-seo.js`),
  - and any “update all og:images” script.
- **One “canonical” script:** Decide whether v2 or snippets owns the script; the other calls it or is deprecated. Document in a single README (e.g. `docs/scripts-seo.md`).

---

### 2.3 Add-callouts and SEO generator — same file walk

**Problem:** Both walk `v2/pages` and read/write MDX. File discovery and read/write patterns are duplicated.

**DRY option:** Shared helper, e.g. `v2/scripts/shared/mdxFiles.js`: `listMdxFiles(dir)`, `readMdx(path)`, `writeMdx(path, content)` (with optional backup/safety). Both scripts use it so behaviour (encoding, line endings, exclusions) is consistent.

---

## 3. Data and config — single source of truth

### 3.1 Gateway code blocks — `snippets/data/gateways/code.jsx`

**Problem:**  
- Very large file with repeated structure: `{ filename, icon, language, codeString, description?, output? }`.  
- Contains merge conflict markers (`<<<<<<< Updated upstream`), which must be resolved.  
- “THIS IS SO MESSY - MUST BE REORGANIZED BY SECTION” in comments.  
- Same icon/language/codeString pattern repeated many times.

**DRY options:**

- **A. Resolve merge conflicts and split by section:** e.g. `gateways/code/install.js`, `gateways/code/docker.js`, `gateways/code/linux.js`, then one `code.jsx` that re-exports or composes them. Easier to maintain and review.
- **B. Schema-driven code blocks:** Define a small schema (e.g. array of `{ id, label, language, code, description?, output? }`) in JSON or a single data file; a single `<CodeBlockSection>` component renders them. Reduces repeated JSX and keeps code strings in one place.
- **C. Shared “code block” factory:** e.g. `codeBlock({ filename, icon: 'terminal', language: 'bash', codeString, description })` so you don’t repeat the same object shape 50 times.

**Recommendation:** Resolve conflicts first; then split by section (A) and optionally introduce a small schema/factory (B/C) for the next iteration.

---

### 3.2 API reference / base URL tables — repeated table styling

**Problem:** Multiple API pages (e.g. `references/api-reference/AI-API/ai.mdx`, CLI-HTTP, etc.) use the same inline table styles: `backgroundColor: '#2d9a67'`, `borderCollapse: 'collapse'`, `padding: '12px 16px'`, etc. Copy-pasted across many files.

**DRY option:** Add a snippet component, e.g. `<StyledTable>` or `<ApiBaseUrlTable>`, that accepts headers and rows (and optional theme) and applies the standard table CSS once. Use theme variables (e.g. `var(--livepeer-green)`) so light/dark stays consistent. Replace inline tables with this component.

---

### 3.3 docs.json vs deprecated/docs.json

**Problem:** `v2/deprecated/docs.json` exists with a different structure and icon paths. If anything still references it, you have two sources of nav/structure. If not, it’s dead weight.

**DRY option:** If deprecated is unused, remove it or move to `archive/` and document. If something still needs it, have a single “source” (e.g. the main docs.json) and generate the other from it, or document clearly which is canonical.

---

## 4. Component and snippet structure

### 4.1 Inconsistent import paths

**Problem:** Some pages import from `/snippets/components/content/code.jsx`, others from `/snippets/components/...`. Error reports mention broken paths like `/snippets/components` (no file). Relative vs absolute and path consistency varies.

**DRY option:**

- **Document and enforce one convention:** e.g. “All snippet imports are absolute from `/snippets/...` and must point to a file (no directory-only imports).”
- **Barrel files where it helps:** e.g. `snippets/components/domain/SHARED/index.js` that re-exports Portals + callouts so pages can `import { PreviewCallout, PortalHeroContent } from '/snippets/...'` in one line. Reduces path drift.

---

### 4.2 ThemeData and Theme-dependent UI

**Problem:** Many gateway/orchestrator pages import `ThemeData` and use it for colours. That pattern is repeated; if the theme shape changes, many files are touched.

**DRY option:** Keep ThemeData in one place (already in `themeStyles.jsx`). Prefer using it inside shared components (e.g. steps, tables, callouts) so pages don’t need to import ThemeData at all unless they do custom theme-dependent UI. Then only the component layer needs to change when theme changes.

---

## 5. Content and copy

### 5.1 “WIP” / “Coming soon” / “Under construction” wording

**Problem:** Mix of `<Danger> WIP Section</Danger>`, `<Note>Coming Soon</Note>`, and callout text like “Page is under construction. Feedback Welcome!”. No single convention.

**DRY option:** Pick one canonical wording and one component (or callout variant) for “not ready yet”. Document in the style guide. Then: (1) normalise all existing pages to that wording/component, and (2) have the default callout (from §1.1) use the same copy from a single copy file (§1.3 C).

---

### 5.2 Glossary and terminology

**Problem:** Terms (e.g. “orchestrator”, “gateway”, “broadcaster”) can be defined in multiple places. Hard to keep consistent and to drive i18n or tooling later.

**DRY option:** One glossary source (e.g. `snippets/data/glossary.json` or the existing glossary script output) as the source of truth. Other pages reference it (e.g. “see Glossary”) or pull terms via a small component. Reduces duplicated definitions.

---

## 6. Quick wins (low effort, high clarity)

| Action | Where | Effect |
|--------|--------|--------|
| Resolve merge conflict and remove “MUST BE REORGANIZED” comment | `snippets/data/gateways/code.jsx` | Clean build and clearer intent. |
| Fix typo `artibtrum` → `arbitrum` | Filename, frontmatter, and links (e.g. `artibtrum-exchanges.mdx`) | Single source of correct spelling. |
| Add `v2/scripts/shared/README.md` | List shared helpers (frontmatter, mdxFiles) and how scripts use them | Easier onboarding and fewer duplicate one-off scripts. |
| Normalise callout import style | All MDX (or via add-callouts script) | One style: `import { PreviewCallout } from '...'` (spacing consistent). |
| Extract “domain → og:image” map to one JSON | Used by seo-generator and update-og-image | One place to add a new section image. |
| Add `StyledTable` / `ApiBaseUrlTable` | snippets/components | Replace repeated inline table styles in API pages. |

---

## 7. Suggested order of work

1. **Scripts:** Introduce `v2/scripts/shared/frontmatter.js` (and optionally `mdxFiles.js`); refactor seo-generator and add-callouts to use it. Consolidate SEO/og:image to one script + one config.
2. **Callouts:** Shared styles + copy file for previewCallouts; then (if possible) default layout or wrapper so pages don’t repeat import + component.
3. **Portals:** Barrel export or single PortalLayout import so portal pages don’t repeat 5–7 lines.
4. **Data:** Resolve conflicts in `gateways/code.jsx`; split by section; optionally schema-driven code blocks.
5. **Tables:** Add StyledTable/ApiBaseUrlTable and replace duplicated table markup.
6. **Docs:** One “Scripts & automation” README that points to the canonical SEO script, add-callouts, and shared helpers.

---

*Summary: The biggest DRY wins are (1) not repeating callout import + usage in 100+ files, (2) one portal import surface, (3) shared callout styles and copy, (4) one frontmatter/SEO pipeline and config, and (5) shared components for repeated patterns (tables, code blocks). Doing the scripts and callouts first gives immediate payoff and makes later refactors safer.*
