# Component Governance Restructuring — Changelog

> Branch: `docs-v2-dev-components`
> Date: 2026-03-19
> 17 commits, 40+ files modified, ~15,000 import path references updated

## Phase 1: Structural Restructuring (Tasks 1–12)

### Task 1 — Taxonomy (interactive)
- Agreed on 5 categories: `elements/`, `wrappers/`, `displays/`, `scaffolding/`, `integrators/` + `config/`
- Defined 30 sub-niches across all categories
- Mapped all 118 components to target locations
- Decision rules established for each category

### Task 2 — Branch & skeleton (`8da6af35`)
- Created branch `docs-v2-dev-components` from `docs-v2-dev`
- Created worktree at `/Users/alisonhaire/Documents/Livepeer/Docs-v2-dev-components`
- Created 32 new folders (5 categories × sub-niches + config + x-archive)

### Task 3 — File moves & import rewrites (`62fade99`, `5a6c9167`, `ce6a5d4e`, `d529f079`)
- Moved 48 component files from 6 old folders to new taxonomy
- Updated 1,081+ import statements across 173 consuming files
- Fixed stale imports pointing to non-existent files
- Updated archived pages, translation files, data files, templates
- Total: ~15,000 path reference updates across 1,100+ files

### Tasks 4–5 — Deduplication (completed during Task 3)
- Resolved 6 kebab/camelCase duplicate pairs
- Resolved 13 cross-category duplicates
- All duplicates preserved in `x-archive/`

### Task 6 — Component audit (`8d2fcbf3`)
- Archived 3 duplicate/shim files
- Renamed 2 misleading filenames (text.jsx → AccordionLayout.jsx, cards.jsx → ScrollBox.jsx)
- Moved layout.jsx from accordions/ → containers/ (correct sub-niche)
- Consolidated contentEmbed.jsx into DataEmbed.jsx
- Flagged 3 files for future component-level splitting
- Flagged Release.jsx as potentially non-functional

### Task 7 — PascalCase naming (`06eb1dea`)
- Renamed all 44 component files to PascalCase
- Updated 7,390 import references across 1,050 files

### Task 8 — JSDoc enforcement (`6718be3f`)
- Updated 120 `@category` tags to new taxonomy names
- Added `@subniche` tag to all component JSDoc blocks
- Updated `VALID_CATEGORIES` and `CATEGORY_PURPOSES` in governance scripts
- Added `--strict` flag to `generate-component-registry.js`

### Task 9 — Script optimisation (`92177296`)
- Fixed hardcoded old category names in `audit-component-usage.js`
- Removed stale `isLegacyShimComponentPath` check
- Archived unused `generate-component-governance-remediation-reports.js` (3,021 lines)

### Task 10 — Documentation (`b6de07df`)
- Complete rewrite of `snippets/components/README.md`
- Added CATALOG.md with full 44-file, 118-export inventory
- Archived catalog.md scratchpad

### Task 11 — Governance trimming (`a75418ef`)
- Archived unused `generate-component-snippets.py`

### Task 12 — Testing
- Mid-point: zero broken imports, all test assertions pass
- Lint rule updated to enforce PascalCase (`9e643c2d`)
- Final: mintlify dev confirmed pages render on port 3456

---

## Phase 2: Quality Passes (Tasks 13–15 combined)

### Quality Audit (`b76a24eb`)
- Audited all 44 files across 3 concerns (responsive, WCAG, style)
- Found 9 critical, 22+ major, 20+ minor issues
- Full report: [audit-report.md](./audit-report.md)

### Pass 1 — Critical fixes (`add0c322`)

**Security:**
- Added HTML sanitiser to `Data.jsx` wrapping all `dangerouslySetInnerHTML` (BlogCard, PostCard, DiscordAnnouncements)
- Added `rel="noopener noreferrer"` to 18 `target="_blank"` links across 8 files

**Accessibility:**
- Added `prefers-reduced-motion` check to `HeroGif.jsx` (Starfield canvas animation)
- Added `prefers-reduced-motion` media query to `QuadGrid.jsx` (spin animation)
- Added `prefers-reduced-motion` media query to `Links.jsx` (blink animation)
- Added `prefers-reduced-motion` check to `Video.jsx` (TitledVideo autoplay)
- Default `alt=""` on `Image.jsx` and `LinkImage.jsx`

**Cleanup:**
- Removed 8 `console.log`/`console.debug` statements from Lists.jsx, Video.jsx, Data.jsx
- Marked `BasicList`, `IconList` as `@status deprecated` (non-functional stubs)

### Pass 2 — WCAG major fixes (`b15d26ce`)

**Semantic HTML:**
- `Divider.jsx`: added `role="separator"` and `aria-orientation="horizontal"`
- `Quote.jsx`: changed `<div>` to `<blockquote>` for both Quote and FrameQuote
- `Links.jsx`: fixed `<p>` inside `<span>` (invalid HTML) in GotoLink

**ARIA labels:**
- `SocialLinks.jsx`: added `aria-label` to all 6 icon-only links + `aria-hidden` on icons
- `Icons.jsx`: added `role="img"` and `aria-label` to LivepeerSVG
- `ZoomableDiagram.jsx`: added `aria-label` to zoom in/out/reset buttons
- `HeroGif.jsx`: added `aria-hidden` to decorative canvas
- `Links.jsx`: added `aria-hidden` to decorative icon in GotoLink

**Keyboard accessibility:**
- `Coingecko.jsx`: added `tabIndex`, `onKeyDown`, `role="columnheader"`, `aria-sort` to sortable headers

**Bug fixes:**
- `DataEmbed.jsx`: fixed `class` → `className`, `frameborder` → `frameBorder`, added `title` to iframe
- `Data.jsx`: fixed forum URL typo (`https:/forum` → `https://forum`)
- `SocialLinks.jsx`: removed duplicate `rel="noopener noreferrer"` attributes

### Pass 3 — Systemic extensibility (`6a1d31d7`)
- Added `className`, `style`, and `...rest` props to ~85 exported components across 40 files
- All outermost elements now accept class overrides, style merges, and arbitrary attribute forwarding
- Skipped: deprecated stubs, A11y.jsx (returns null)

### Pass 4 — Polish (`c4d520d1`)
- `Data.jsx`: replaced hardcoded `color: "white"` with `var(--text)` on PostCard (invisible on light theme)

---

## Files in x-archive (pending cleanup — Task 17)

62 files preserved for rollback safety:
- Old camelCase/kebab-case component files (superseded by PascalCase versions in new locations)
- Duplicate files from cross-category consolidation
- Archived governance scripts
- Old catalog.md scratchpad

---

## Remaining Tasks

| # | Task | Status |
|---|---|---|
| 16 | Post-quality testing | Pending |
| 17 | Cleanup (x-archive review) | Pending |
| 18 | VSCode component tooling | Pending |
| 19 | Composable templates | Pending |
| 20 | Final testing & cleanup | Pending |
| 21 | Final merge & close out | Pending |

---

## Stats

| Metric | Count |
|---|---|
| Commits | 17 |
| Files restructured | 48 |
| Import paths rewritten | ~15,000 |
| Files touched (total) | 1,100+ |
| Components audited | 118 |
| Critical issues fixed | 9 |
| WCAG issues fixed | 12 |
| Components with extensibility props added | ~85 |
| Governance scripts updated | 4 |
| Scripts archived | 3 |
| Lines of dead code archived | 3,021+ |
