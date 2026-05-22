# Checks Gap Analysis — Layout, Component, Styling, and Rendering

**Scope:** Checks that exist in policy and framework documents but are absent from `checks.mdx`.
**Method:** Full read of `checks.mdx` (all 9 categories), then full read of all sources listed in the brief. Cross-referenced before inclusion.
**Date:** 2026-03-24

---

## How to read this report

Each entry has:
- **Check** — the concrete thing to verify
- **Source** — file and section where this rule is defined
- **Veracity** — HIGH / MEDIUM / LOW with rationale
- **Not in checks.mdx because** — best hypothesis
- **Suggested category** — where it fits in the existing 9-category structure, or NEW

Ranked HIGH → MEDIUM → LOW.

---

## HIGH VERACITY

---

### GAP-01 — JSDoc governance fields present on every exported component

**Check:** Every `.jsx` file in `snippets/components/` exported as a component has all 7 required JSDoc governance fields: `@component`, `@type`, `@subniche`, `@status`, `@description`, `@accepts`, plus `@aiDiscoverability` on any component that uses React hooks (`useState`, `useEffect`, `useRef`, etc.). Missing or empty fields are a commit-blocking violation.

**Source:** `docs-guide/frameworks/component-governance.mdx` §5.2 (Metadata Schema, 7 Fields + 1 Conditional); `docs-guide/frameworks/component-framework-canonical.mdx` (JSDoc Standard, Tag reference table); `workspace/plan/active/COMPONENT-GOVERNANCE/completion-report.md` (Phase 1: "all must have explicit `@aiDiscoverability`"). Enforced by `generate-component-registry.js --validate-only` in CI.

**Veracity:** HIGH. This is a pre-commit and CI blocking gate, not an advisory standard. The CI workflow `check-docs-guide-catalogs.yml` runs `--validate-only` and hard-fails without `continue-on-error`. The `completion-report.md` records this as locked: "The 7-field JSDoc standard is enforced by CI." The audit report (`Audits/audit-report.md`) and completion report both confirm this is an enforced hard gate.

**Not in checks.mdx because:** checks.mdx category 5 (LAYOUT, COMPONENTS & TEMPLATE) covers component *usage* on pages, not component *authoring* governance. The JSDoc check belongs to component authors and maintainers, not page authors. However, it surfaces as a quality gap when a reviewer encounters a component with a `@status: broken` or `@status: deprecated` JSDoc and the page uses it anyway — which is a page-level finding.

**Suggested category:** Category 5 (Layout, Components & Template) — add as a sub-check under "component authoring standards" when reviewing a page that introduces or modifies component usage. Alternatively, this warrants a new **Category 10: Component Authoring** if component-level reviews are ever in scope.

---

### GAP-02 — No ThemeData, no hardcoded hex/rgb, no `!important` in component styling

**Check:** No component in `snippets/components/` uses `ThemeData`, hardcoded hex/rgb colour values, or `!important`. All colour values must use `var(--lp-*)` CSS tokens. Violations are caught by pre-commit regex scan and are commit-blocking.

**Source:** `docs-guide/frameworks/component-governance.mdx` §3.3 (Banned Patterns — Pre-commit Blocks); `docs-guide/frameworks/component-framework-canonical.mdx` (Styling Architecture, "No ThemeData, no hardcoded hex, no !important"); `workspace/plan/active/COMPONENT-GOVERNANCE/completion-report.md` ("ThemeData removed from all components" — locked). Also in checks.mdx §5.8 as a rule but without enforcement detail.

**Veracity:** HIGH. checks.mdx §5.8 already states "CSS uses custom properties only — No hardcoded hex colours, no ThemeData, no inline JS theme switching." This GAP is therefore already partially covered. However, checks.mdx does not mention the `!important` ban, does not describe the `--lp-*` token namespace, and does not mention the advisory patterns (static inline `style={}`, direct Mintlify class overrides). The ban on `!important` is a concrete missing check.

**Not in checks.mdx because:** checks.mdx §5.8 captured the broad rule but not the specific `!important` prohibition or the distinction between hard bans (commit-blocked) and advisory flags (code review only).

**Suggested category:** Category 5 (Layout, Components & Template) — extend check 5.8 with: "No `!important` in any component styling. Static `style={}` props and direct Mintlify class overrides are advisory flags, not bans."

---

### GAP-03 — Component naming conventions: PascalCase filenames, folder taxonomy alignment

**Check:** Component filenames in `snippets/components/` must be PascalCase `.jsx`. Exported names must be PascalCase named arrow functions. Each component must be placed in the correct category subfolder (`elements/`, `wrappers/`, `displays/`, `scaffolding/`, `integrators/`, `config/`). The `@type` JSDoc field must match the folder the file is in. Enforced by `check-naming-conventions.js` as a hard CI gate — blocks merge without `continue-on-error`.

**Source:** `docs-guide/frameworks/component-governance.mdx` §2.2 (Naming Conventions); `docs-guide/frameworks/component-framework-canonical.mdx` (Decision Rules, Folder Taxonomy); `workspace/plan/active/COMPONENT-GOVERNANCE/completion-report.md` ("check-naming-conventions.js — Hard — blocks merge"). Also `workspace/plan/active/COMPONENT-GOVERNANCE/Audits/pipeline-audit.md`.

**Veracity:** HIGH. This is a hard-blocking CI gate added to `test-suite.yml` with no `continue-on-error`. The completion report records this as a locked design decision.

**Not in checks.mdx because:** checks.mdx §5.10 mentions "PascalCase component names, correct imports, components in semantic subdirectories per component-framework-canonical.mdx" but does not confirm that this is a hard CI gate, and does not describe the `@type` must-match-folder rule. The check exists in skeletal form but is underspecified.

**Suggested category:** Category 5 (Layout, Components & Template) — extend check 5.10 with the folder-taxonomy alignment requirement and note CI enforcement.

---

### GAP-04 — No cross-JSX imports between component files (MDX component scope isolation)

**Check:** No `.jsx` file in `snippets/components/` may import from another `.jsx` component file. Components are standalone. Cross-component composition happens only at the MDX page level. Enforced by `check-mdx-component-scope.js` as a hard CI gate — blocks merge without `continue-on-error`.

**Source:** `docs-guide/frameworks/component-governance.mdx` §4.2 (Composition, "No inter-component composition. Mintlify does not support nested imports between JSX files."); `workspace/plan/active/COMPONENT-GOVERNANCE/completion-report.md` ("check-mdx-component-scope.js — Hard — blocks merge"). Decision D4 in the component governance framework.

**Veracity:** HIGH. This is a Mintlify platform constraint, not just a style preference. Violation breaks rendering. Hard CI gate confirms enforcement.

**Not in checks.mdx because:** This is a component authoring rule, not a page authoring rule. When reviewing a page, the relevant check is that the page imports components via full explicit paths (which is in §5.10), not that the components themselves don't cross-import. However, a page-level reviewer who adds a component should verify this.

**Suggested category:** Category 5 (Layout, Components & Template) — add as a note under check 5.3 or 5.10: "Components used on this page must not import from other `.jsx` component files. Composition is MDX-page-level only."

---

### GAP-05 — Full explicit import paths for all component imports (no barrel imports)

**Check:** All component imports in MDX pages must use the full explicit path with file extension: `import { X } from '/snippets/components/elements/spacing/Divider.jsx'`. No barrel imports (`index.js`), no relative paths, no path aliases. This is a Mintlify platform constraint.

**Source:** `docs-guide/frameworks/component-governance.mdx` §2.4 (Import Paths); `docs-guide/frameworks/component-framework-canonical.mdx` (Quick Start, "Use a component" section: "Mintlify requires full paths with file extensions. No barrel imports."); `docs-guide/frameworks/component-governance.mdx` Quick Start.

**Veracity:** HIGH. Mintlify platform constraint — wrong import paths cause render failures. This is confirmed in multiple governance documents as an absolute requirement with no exceptions.

**Not in checks.mdx because:** checks.mdx §5.10 mentions "correct imports" but does not specify the full-path-with-extension requirement or the no-barrel-imports rule. Check 8.3 covers snippet imports but does not address the import path format for component files.

**Suggested category:** Category 5 (Layout, Components & Template) — extend check 5.10 with explicit import path format requirement. Or extend check 8.3 to include component import path format.

---

### GAP-06 — `related-resources-section` composable mandatory on all pages

**Check:** Every published page must include a "Related Pages" footer section using the `related-resources-section.mdx` composable (or equivalent). This is defined as a Tier 1 mandatory composable applying to all page types. The section uses 2–6 `<Card>` components in a `<CardGroup>`. Card titles: 1–3 words. Card descriptions: one sentence, 10 words max; remove if it would restate the title.

**Source:** `docs-guide/frameworks/component-governance.mdx` §12.2 (Composable Section Library — `related-resources-section.mdx`: "Tier 1 — All — mandatory footer"); `snippets/composables/related-resources-section.mdx` (`@pageTypes All (mandatory footer section per authoring rules)`); `snippets/composables/overview-intro-section.mdx` cross-reference.

**Veracity:** HIGH. Declared as "Tier 1" and "mandatory" in both the canonical framework and the composable's own governance header. Two independent documents agree.

**Not in checks.mdx because:** checks.mdx §5 (Layout, Components & Template) and §4 (Page Structure) both touch on required sections and page structure, but neither specifically names the `related-resources-section` composable as a mandatory footer element. This gap is significant: no check currently enforces the mandatory footer.

**Suggested category:** Category 5 (Layout, Components & Template) — add as check 5.11: "Every published page has a `related-resources-section` footer (or equivalent) with 2–6 `<Card>` components. Card titles ≤3 words. Card descriptions ≤10 words; absent if they would restate the title."

---

### GAP-07 — Asset size limits: images ≤2 MB, PNGs >500 KB reviewed for WebP

**Check:** Every image file referenced in a page must be ≤2 MB. PNG files over 500 KB must be reviewed for WebP conversion before committing. No duplicate asset files across subdirectories. Assets must be in canonical subdirectories (`logos/`, `site/`, `domain/`, `data/`). No backup files (`.bak`, `.backup`) in assets.

**Source:** `docs-guide/policies/snippets-assets-policy.mdx` (Rules 1–5, Size limit: 2 MB per image, PNG >500 KB reviewed for WebP). Also referenced in checks.mdx §8.4 as "Image files ≤2MB. PNGs >500KB reviewed for WebP conversion" — this check already exists.

**Veracity:** HIGH for the rules in checks.mdx. However, checks.mdx §8.4 does not mention: (a) the no-duplicate-files rule across subdirectories, (b) the canonical subdirectory structure requirement, (c) the no-backup-files rule, (d) the reference-required-before-merge rule (no unreferenced assets).

**Not in checks.mdx because:** §8.4 captures the size limit but misses the governance rules around asset organisation and the "reference required" rule. The "reference required before merge" rule — that no asset may be added without a verified reference in at least one publishable file — has no equivalent check in checks.mdx.

**Suggested category:** Category 8 (Links & Rendering) — extend check 8.4 with: "Asset has a verified reference in at least one `v1/`, `v2/`, `snippets/`, or `docs.json` file. No duplicate across subdirectories. In canonical directory (`logos/`, `site/`, `domain/`). No `.bak` or backup files."

---

### GAP-08 — No `_workspace/` content in `docs.json` navigation

**Check:** No file path under any `_workspace/` directory at any depth may appear in `docs.json` navigation. Attempting to route a `_workspace/` file is a P0 violation. The canonical contract: "docs.json must never point to `_workspace/**`."

**Source:** `docs-guide/policies/v2-folder-governance.mdx` (Routing and Linking Rules, Rule 1: "docs.json must never point to `_workspace/**`, `x-deprecated/**`, or `v2/x-archived/**`"); `docs-guide/policies/workspace-lifecycle-policy.mdx` (Rule 3: "`_workspace/` is not a nav path — no file under any `_workspace/` may appear in `docs.json`").

**Veracity:** HIGH. Two separate policy documents state this as a hard rule. checks.mdx §7.1 confirms pages must exist in docs.json but does not explicitly state the inverse — that workspace files must *not* be in docs.json.

**Not in checks.mdx because:** checks.mdx §7 addresses IA and navigation correctness from the "does it appear?" direction (pages must be in docs.json). The inverse check — that workspace/deprecated/archived files must *not* appear — is not stated. This is a gap.

**Suggested category:** Category 7 (Navigation & Information Architecture) — add as check 7.10: "No file under `_workspace/`, `x-deprecated/`, or `v2/x-archived/` appears in `docs.json`. Reverse of 7.1."

---

### GAP-09 — Publishable pages must not import from or link to non-publishable lanes

**Check:** Published pages in `v2/<section>/` must not import snippets, components, or data from `_workspace/`, `x-deprecated/`, or `v2/x-archived/`. All imports must resolve to publishable paths.

**Source:** `docs-guide/policies/v2-folder-governance.mdx` (Routing and Linking Rules, Rule 2: "Publishable pages must not import from or link to non-publishable lanes except explicit maintainer-only references that are excluded from Mint/runtime.")

**Veracity:** HIGH. Stated in the canonical V2 folder governance policy. A publishable page importing from `_workspace/` would either break in production (if Mintlify can't resolve it) or expose workspace content to readers.

**Not in checks.mdx because:** checks.mdx §8.3 checks snippet imports resolve but does not check whether the resolved path is in a publishable lane. This is a lane-correctness check, not just a resolution check.

**Suggested category:** Category 8 (Links & Rendering) — extend check 8.3: "All snippet imports resolve AND resolve to a publishable lane (`snippets/`, `v2/<publishable-subtree>/`). No import from `_workspace/`, `x-deprecated/`, or `v2/x-archived/`."

---

### GAP-10 — `@aiDiscoverability` companion file present and resolvable when declared

**Check:** If a page uses a component with `@aiDiscoverability: props-extracted`, a companion `.json` file must exist adjacent to the `.mdx` page at `v2/[section]/[page-slug]-data.json`. If `@aiDiscoverability: snapshot`, a companion must exist at `snippets/data/snapshots/[source-id].json`. The companion manifest (`docs-guide/catalog/ai-companion-manifest.json`) must have an entry. Checked by `check-companion-manifest.js --check` in CI — hard gate.

**Source:** `docs-guide/frameworks/component-framework-canonical.mdx` (`@aiDiscoverability` values, "Write-time obligation: any author or agent writing a page that uses a `props-extracted` component must create the companion `.json` alongside the MDX"); `docs-guide/frameworks/component-governance.mdx` §5.2 (AI Discoverability); `workspace/plan/active/COMPONENT-GOVERNANCE/completion-report.md` ("Companion manifest consistency — Every PR (check-ai-companions) — Hard").

**Veracity:** HIGH. Hard CI gate confirmed. The completion report locks this as an enforced contract. The framework specifies the exact file paths required.

**Not in checks.mdx because:** This is a companion-file obligation that emerges from component authoring decisions, not from content authoring decisions. A page author who chooses to use `SearchTable` or `CoinGeckoExchanges` incurs a write-time obligation that checks.mdx does not capture.

**Suggested category:** Category 5 (Layout, Components & Template) — add as check 5.12: "Any component with `@aiDiscoverability: props-extracted` requires a `[page-slug]-data.json` adjacent to the MDX page. Any component with `@aiDiscoverability: snapshot` requires `snippets/data/snapshots/[source-id].json`. Check companion manifest has an entry for this component."

---

### GAP-11 — Section-root files: only `index.mdx`, `portal.mdx`, `navigator.mdx` permitted

**Check:** At the root of each publishable section (`v2/<section>/`), only three files are permitted as publishable section-root entries: `index.mdx`, `portal.mdx`, `navigator.mdx`. No planning notes, reports, review files, or ad-hoc content files may sit beside publishable pages at the section root.

**Source:** `docs-guide/policies/v2-folder-governance.mdx` (Section-Root Contract: "Allowed publishable section-root files are: `index.mdx`, `portal.mdx`, `navigator.mdx`. Section roots must not accumulate ad hoc planning notes, reports, or review files beside publishable pages.").

**Veracity:** HIGH. Canonical policy with explicit enumeration of exactly three permitted section-root filenames. Clear must/must-not language.

**Not in checks.mdx because:** checks.mdx §7 (Navigation & IA) addresses whether pages are in docs.json and whether journeys are complete, but does not check section-root file hygiene. This is a structural lane check, not just a nav check.

**Suggested category:** Category 7 (Navigation & Information Architecture) — add as check 7.11: "Section root contains only `index.mdx`, `portal.mdx`, `navigator.mdx` as publishable files. No ad-hoc reports, notes, or planning files at section root."

---

### GAP-12 — `generated-file-banner:v1` present on all generated files, and generated files not hand-edited

**Check:** Any file produced by a generator script must include the `generated-file-banner:v1` block (already in checks.mdx §5.9). However: generated files must also not be hand-edited. If the pre-flight check finds a generated-file-banner, the reviewer must read the generation script before logging any findings — page-level symptoms are not actionable, script bugs are root causes. Additionally: generated file hook policy must match the artifact's declared `class` in `tools/config/generated-artifacts.json` (`check_only` vs `write_and_stage` vs `ignore`).

**Source:** `docs-guide/policies/generated-artifact-and-hook-governance.mdx` (Practical Rules 1–8; Artifact Classes table); checks.mdx §5.9 ("Generated file banners intact — Any generated file has the `generated-file-banner:v1` block and visible `<Note>` banner. Not hand-edited"); checks.mdx REVIEW EXECUTION GUIDE ("Check for `generated-file-banner` — if present, read the generation script before logging any findings").

**Veracity:** HIGH. checks.mdx §5.9 captures the banner check. The gap is that checks.mdx does not cover the artifact class contract: each generated file must have a declared `class`, `commit_policy`, `hook_policy`, and `ci_policy` in the manifest. A reviewer finding a generated file should verify it appears in `tools/config/generated-artifacts.json` with correct policies — this is not in any check.

**Not in checks.mdx because:** The artifact manifest governance (which file is `committed_authoritative` vs `ephemeral_local`, what its `hook_policy` is) is infrastructure-layer governance, not typically checked during content review. But content reviewers do encounter generated files.

**Suggested category:** Category 5 (Layout, Components & Template) — extend check 5.9: "Generated file also appears in `tools/config/generated-artifacts.json` with declared `class`, `commit_policy`, `hook_policy`, and `ci_policy`. No hand edits — all changes go through the declared generator."

---

## MEDIUM VERACITY

---

### GAP-13 — Component defensive rendering: no crash on null/undefined props

**Check:** Every JSX component used on a page must be verified to handle null/undefined prop inputs without throwing. A component crash in Mintlify kills the entire page (no per-component error boundaries). Components must: guard required props (return `null` + `console.warn` if missing), guard arrays with `(items ?? []).map(...)`, wrap complex logic in try-catch, never throw.

**Source:** `docs-guide/frameworks/component-governance.mdx` §4.4 (Error Handling — Mandatory): "A component crash kills the entire page. Defensive rendering is non-negotiable."; Component checklist: "Required props guarded — returns null if missing; Array operations guarded: `(items ?? []).map()`"; `workspace/plan/active/COMPONENT-GOVERNANCE/Audits/audit-report.md` (Critical Issues — several non-functional stubs: `BasicList`, `IconList`, `UpdateList`).

**Veracity:** MEDIUM. The rule is clearly stated in governance documents. However, page reviewers cannot easily verify defensive rendering without reading the component source — this is more of a component audit check than a page check. The MEDIUM rating reflects that this is real and enforced (unit tests gate on defensive rendering in CI) but the check is difficult to apply during a page content review.

**Not in checks.mdx because:** This is a component-level quality attribute, not a page-level attribute. A page reviewer checking "is this component used correctly?" cannot assess defensive rendering without reading `.jsx` source, which is outside the scope of a content pass.

**Suggested category:** Category 5 (Layout, Components & Template) — add as check 5.13: "Components with `@status: broken` or `@status: placeholder` are not used on published pages. Check component status in `docs-guide/config/component-registry.json` before using any custom component."

---

### GAP-14 — Component `@status` not `broken`, `deprecated`, or `placeholder` on published pages

**Check:** Published pages must not use components with `@status: broken`, `@status: deprecated`, or `@status: placeholder` JSDoc values. The `docs-guide/config/component-registry.json` is the authoritative source for component status. `broken` = known defect, non-functional. `deprecated` = scheduled for removal. `placeholder` = empty stub.

**Source:** `docs-guide/frameworks/component-framework-canonical.mdx` (`@status` values: `stable`, `experimental`, `deprecated`, `broken`); `docs-guide/frameworks/component-governance.mdx` §6.1 (Lifecycle States — `broken`: "Known defect, do not use"; `deprecated`: "Scheduled for removal, replacement identified"); `workspace/plan/active/COMPONENT-GOVERNANCE/catalog.md` (Flags section — notes non-functional components like `BasicList`, `IconList`, `UpdateList`).

**Veracity:** MEDIUM. The status enum is enforced via JSDoc CI validation. Whether a page *uses* a broken or deprecated component is not currently an automated check — it requires manual cross-reference. The audit report identified actual broken components in the library.

**Not in checks.mdx because:** checks.mdx §5.3 says "only approved components used" but "approved" is defined as "match the Preferred column for the pageType" — this is about *type-appropriateness*, not *lifecycle status*. A component can be in the Preferred column but have `@status: deprecated`. These are separate concerns.

**Suggested category:** Category 5 (Layout, Components & Template) — add as check 5.14: "No component with `@status: broken`, `deprecated`, or `placeholder` is used on this page. Verify in `docs-guide/config/component-registry.json`."

---

### GAP-15 — Dark/light mode: no JS theme detection, colours via tokens only

**Check:** No component or inline style on a page reads `document.documentElement` or other runtime theme detection. Colour values in all components must come from `var(--lp-*)` tokens. Dark/light mode toggling uses CSS tokens for colour values and Tailwind `dark:` utilities for layout toggles — never JavaScript.

**Source:** `docs-guide/frameworks/component-governance.mdx` §3.5 (Dark/Light Mode: "JS theme detection — Never. No reading `document.documentElement` in components."); `docs-guide/frameworks/component-framework-canonical.mdx` (Styling Architecture, "Layer 2: style.css — `--lp-*` CSS custom properties"); component checklist: "Dark/light mode works (tokens + Tailwind dark:)".

**Veracity:** MEDIUM. The rule is enforced as an advisory flag for static inline styles (not a hard gate), and as a hard pre-commit ban for ThemeData and hardcoded hex. The JS-theme-detection ban is stated clearly but is harder to check automatically during a content review — it requires inspecting component source.

**Not in checks.mdx because:** checks.mdx §5.8 already bans hardcoded hex and ThemeData. The JS theme detection ban is not mentioned. The `--lp-*` token namespace requirement is not named (only "custom properties" is mentioned).

**Suggested category:** Category 5 (Layout, Components & Template) — extend check 5.8: "No `document.documentElement` or other JS-based theme detection in any component used on this page. All colours via `var(--lp-*)` token namespace."

---

### GAP-16 — Composable section governance: correct composable for pageType, correct variable fill

**Check:** When a composable from `snippets/composables/` is used, verify: (a) the composable is listed as appropriate for this page's `pageType` (see `@pageTypes` in each composable's governance header), (b) all variables declared in `@variables` are filled with real content (not template placeholders), (c) `overview-intro-section` media slot: at most one option uncommented, and option chosen matches the page's `purpose` (`orient`/`concept` → Quote/Tip; `start`/`build` → CustomCodeBlock/Card; `learn`/`explain` → AccordionGroup).

**Source:** `snippets/composables/overview-intro-section.mdx` (`@pageTypes`, `@variables`, `@notes` — "pick at most ONE" media slot; "orient/concept → Quote or Tip; start/build → CustomCodeBlock or Card; learn/explain → AccordionGroup"); `snippets/composables/prerequisites-section.mdx` (`@notes` — "Keep to 3–6 items. Do NOT list knowledge prerequisites"); `snippets/composables/related-resources-section.mdx` (`@notes` — "Default cols=2. Use cols=3 for 5–6 cards"); `docs-guide/frameworks/component-governance.mdx` §12.2 (Composable Section Library).

**Veracity:** MEDIUM. The composable governance headers define clear rules, but these are authoring-time rules — not currently enforced by any CI check. Veracity is MEDIUM because the rules are clearly documented but unenforced.

**Not in checks.mdx because:** checks.mdx §5 addresses component selection by pageType, but does not address composable-level governance. Composables are a separate layer (MDX section blocks, not JSX components) and have their own governance headers that checks.mdx does not reference.

**Suggested category:** Category 5 (Layout, Components & Template) — add as check 5.15: "If composables are used: each composable's `@pageTypes` includes this page's `pageType`. All `@variables` are filled with real content. `overview-intro-section` media slot uses at most ONE option, chosen to match the page's `purpose`."

---

### GAP-17 — `how-to` (hyphen) typo: must use `how_to` (underscore)

**Check:** `pageType: how-to` (with hyphen) is not a valid enum value. The canonical value is `how_to` (with underscore). Any page with `pageType: how-to` has a frontmatter error.

**Source:** `workspace/plan/active/COMPONENT-GOVERNANCE/completion-report.md` ("P3-B — Re-verify `component-layout-decisions.mdx`" — flags: "`how-to` (hyphen) typo for `how_to` — not added [to the layout matrix]"). Also confirmed by `docs-guide/policies/component-layout-decisions.mdx` (matrix uses `how_to` throughout, never `how-to`).

**Veracity:** MEDIUM. This typo is documented as a known existing issue (1 page confirmed with this error). The canonical value is clearly `how_to` in all governance sources. MEDIUM rather than HIGH because the old-schema migration issue is already partially covered by checks.mdx §1.2 and §5.7, and this is a specific instance of that broader check.

**Not in checks.mdx because:** checks.mdx §1.2 bans deprecated 12-type values but does not list `how-to` specifically. `how-to` is not a deprecated type — it is a misspelling of `how_to`, which is itself a deprecated type (the 7-type schema uses `instruction` instead). So this fails on two levels: the hyphen typo AND the deprecated type.

**Suggested category:** Category 1 (Frontmatter & Taxonomy) — note in check 1.2: "Also reject `how-to` (hyphen variant — typo for `how_to`, which is itself deprecated)."

---

### GAP-18 — Pre-commit hook constraints: page changes must stay within ≤60s pre-commit budget

**Check:** Staged changes must not introduce test-skipping workarounds, hook bypasses, or logic that breaks the pre-commit runtime budget (≤60s). Pre-commit is explicitly limited to: staged structure/style invariants, staged unit/static checks, staged generated-artifact sync checks. Out of scope for pre-commit: browser sweeps, WCAG crawl/audit flows, full link sweeps.

**Source:** `docs-guide/policies/quality-gates.mdx` (Gate 1 — Pre-commit responsibilities and "Out of scope" list); `docs-guide/policies/infrastructure-principles.mdx` (Runtime and Scope Budgets: "`pre-commit`: must complete in `<= 60s` by default. No browser sweep, no WCAG crawl, no external link/network dependency.").

**Veracity:** MEDIUM. This is an infrastructure-layer constraint, not a content authoring check. It is relevant to reviewers who notice a page is pulling in heavy components (integrators with external fetches) — but the check is really about what hooks *should not* do, not what pages should do.

**Not in checks.mdx because:** This is an infrastructure policy check, not a page quality check. It is genuinely outside the scope of per-page review. Including it in checks.mdx would be noise unless specifically reviewing a PR that modifies hooks or CI.

**Suggested category:** This does not belong in per-page checks.mdx. More appropriate in a separate CI/infrastructure review checklist. LOW value for checks.mdx. Noted here for completeness but **recommend NOT adding to checks.mdx**.

---

### GAP-19 — `status: current` requires `veracityStatus: verified` AND zero `{/* REVIEW: */}` flags

**Check:** A page may only carry `status: current` in frontmatter if ALL of: (1) `veracityStatus: verified`, AND (2) zero inline `{/* REVIEW: */}` comment flags anywhere in the file. `status: current` with `veracityStatus: unverified` is a contradiction.

**Source:** checks.mdx §1.8 itself states: "`status: current` requires `veracityStatus: verified` AND zero `{/* REVIEW: */}` flags." This is already in checks.mdx. No gap.

**Veracity:** Already covered. This entry appears here to confirm the cross-reference was checked — it is NOT a gap.

**Suggested category:** N/A — already in checks.mdx §1.8.

---

### GAP-20 — Mintlify style overrides registry: every `style.css` override must be documented

**Check:** Any override of a Mintlify default style in `style.css` must be documented in the Mintlify Override Registry (as described in the component governance framework): what is overridden, which Mintlify limitation necessitates it, introduction date, review date, owner, status. Overrides without registry entries are undocumented technical debt.

**Source:** `docs-guide/frameworks/component-governance.mdx` §3.6 (Mintlify Override Registry: "Overrides in `style.css` are documented technical debt. Each entry tracks: what's overridden, which Mintlify limitation necessitates it, introduction date, review date, owner, status. Reviewed quarterly against Mintlify release notes."); `workspace/plan/active/COMPONENT-GOVERNANCE/completion-report.md` (Recommendation R7: "Mintlify style overrides registry — Not built. Low priority but would prevent style-override sprawl.").

**Veracity:** MEDIUM. The policy exists in the governance framework and the registry is called for, but R7 in the completion report confirms it has not been built. The rule is defined but the artefact it depends on does not exist yet.

**Not in checks.mdx because:** The Mintlify override registry is deferred (R7 status: "not built"). checks.mdx §5 references the style guide but does not mention the override registry requirement.

**Suggested category:** Category 5 (Layout, Components & Template) — add as a forward-looking check (LOW priority until registry is built): "Any new `style.css` entry added as part of this page's layout must be documented in the Mintlify override registry with: what overrides, why, date, review date."

---

## LOW VERACITY

---

### GAP-21 — `@contentAffinity` JSDoc field on scaffolding and page-specific components

**Check:** Components in `scaffolding/`, `integrators/`, and page-specific `displays/` categories should carry a `@contentAffinity` JSDoc field declaring which `pageType`/`purpose` values they are appropriate for. This field is deferred but unblocked.

**Source:** `docs-guide/frameworks/component-governance.mdx` §12.3 (`@contentAffinity`: "Not yet enforced. Page taxonomy is now locked, making this field unblocked. Proposed syntax: `@contentAffinity start, build, instruction`. When to add it: when a component's appropriate page types are non-obvious from its name and category."); `workspace/plan/active/COMPONENT-GOVERNANCE/completion-report.md` (Recommendation R5: "`@contentAffinity` JSDoc field — deferred; unblocked now that pagePurpose.md is locked.").

**Veracity:** LOW. This field is explicitly described as "not yet enforced" in the framework document. It is a proposed future standard, not a current requirement. Including it in checks.mdx would be premature.

**Not in checks.mdx because:** Not yet enforced. Correctly absent from checks.mdx. Noted here for future inclusion when enforcement is added.

**Suggested category:** Category 5 (Layout, Components & Template) — future check once `@contentAffinity` is enforced by CI.

---

### GAP-22 — Responsive design: no hardcoded pixel dimensions in component props

**Check:** Components used on pages should not receive hardcoded pixel-value props (`height="300px"`, `width="80%"`) as these fail at different viewport sizes. Use responsive alternatives where available.

**Source:** `workspace/plan/active/COMPONENT-GOVERNANCE/Audits/audit-report.md` (Responsive/Hardcoded Dimension Issues — lists 7 files with hardcoded dimensions: `height: "300px"`, `height: "150px"`, `height: "600px"`, negative margins, `calc()` widths). Recommendation Pass 4 in the audit.

**Veracity:** LOW. This is an advisory-level concern from the component audit, not a policy mandate. The audit describes it as a "Polish" pass item. No enforcement mechanism exists. The issues are in component source, not in page authoring decisions.

**Not in checks.mdx because:** This is a component-level implementation concern, not a page authoring standard. A page author cannot control whether a component has hardcoded dimensions internally.

**Suggested category:** Informational note only — not recommended for checks.mdx. More relevant to component maintainer checklist.

---

### GAP-23 — WCAG accessibility: semantic HTML, ARIA attributes on interactive components

**Check:** Interactive components (those with user interaction: sorting, search, carousel navigation, copy, download) must have ARIA roles/attributes, keyboard operability (Tab, Enter/Space, Escape), and visible focus indicators. All images have alt text. Icon-only links have `aria-label`. `<iframe>` elements have `title` attribute.

**Source:** `docs-guide/frameworks/component-governance.mdx` §4.3 (Accessibility: "Interactive components additionally require ARIA roles/attributes, keyboard operability, and visible focus indicators."); `workspace/plan/active/COMPONENT-GOVERNANCE/Audits/audit-report.md` (WCAG Issues — 14 major issues across 10 files including missing `aria-label`, missing `role="separator"`, missing `title` on iframes).

**Veracity:** LOW for page-level checks. The audit identified many component-level WCAG issues, but these are component implementation problems — a page reviewer cannot fix them without modifying component source. The standard is clear; the gap is that checks.mdx does not include an accessibility check at all.

**Not in checks.mdx because:** WCAG review is classified as a "heavy CI sweep" concern in `quality-gates.mdx` ("WCAG crawl/audit flows" are out of scope for pre-commit). No per-page accessibility check is currently part of the defined review process.

**Suggested category:** New — **Category 10: ACCESSIBILITY** (if accessibility becomes part of the page review process). Minimum viable check: "Images have alt text. Icon-only links have `aria-label`. `<iframe>` elements have a `title` attribute. Semantic headings (H1→H2→H3, no skipped levels)."

---

### GAP-24 — No more than one major layout element per page (no duplicate layout types)

**Check:** A page should not use more than one major layout element at the same level (e.g., two separate `<Steps>` blocks as siblings, or both a full `<Table>` and a second `<Steps>` at top level). Major layout elements are: Table, Steps, AccordionGroup. Nesting is acceptable.

**Source:** `docs-guide/frameworks/page-composition-framework.mdx` (Page Taxonomy Guide comments: "DONT: Use more than one major layout element [Table, Steps] per page (if not nested); Use more than one of the same layout element"). `snippets/templates/pages/page-composition-framework.mdx` — same content.

**Veracity:** LOW. This rule appears only in what is explicitly a `status: draft` template file (`page-composition-framework.mdx` frontmatter: `status: draft`). It is not repeated in any non-draft policy document. The specific prohibition is stated as a comment in an uncommitted-style template, not in a locked policy.

**Not in checks.mdx because:** The source document is in draft status. The rule is reasonable but not backed by an enforced policy. checks.mdx §5 (component matrix) does not include this constraint.

**Suggested category:** Category 5 (Layout, Components & Template) — LOW priority addition if/when the page composition framework is promoted from draft. Consider adding: "No more than one top-level major layout element of the same type (Steps, Table, AccordionGroup) appears as a sibling on this page."

---

## SUMMARY TABLE

Ranked by veracity, then by actionability for checks.mdx integration:

| # | Gap | Veracity | Already partially in checks.mdx? | Recommended action |
|---|-----|----------|----------------------------------|-------------------|
| GAP-01 | JSDoc 7-field governance on components | HIGH | §5.10 (skeletal) | Extend §5.10 or add §5.11 |
| GAP-02 | No `!important` in component styling | HIGH | §5.8 (partial) | Extend §5.8 |
| GAP-03 | PascalCase + folder taxonomy alignment | HIGH | §5.10 (skeletal) | Extend §5.10 |
| GAP-04 | No cross-JSX imports | HIGH | Not covered | Add to §5.3 or §5.10 |
| GAP-05 | Full explicit import paths | HIGH | §5.10 (skeletal) | Extend §5.10 |
| GAP-06 | `related-resources-section` mandatory footer | HIGH | Not covered | Add as §5.11 |
| GAP-07 | Asset: reference required before merge; no duplicates | HIGH | §8.4 (partial) | Extend §8.4 |
| GAP-08 | No `_workspace/` in docs.json | HIGH | Not covered | Add as §7.10 |
| GAP-09 | Publishable pages import only from publishable lanes | HIGH | Not covered | Extend §8.3 |
| GAP-10 | `@aiDiscoverability` companion file required | HIGH | Not covered | Add as §5.12 |
| GAP-11 | Section root: only 3 permitted files | HIGH | Not covered | Add as §7.11 |
| GAP-12 | Generated files: artifact manifest entry required | HIGH | §5.9 (partial) | Extend §5.9 |
| GAP-13 | Component `@status: broken/deprecated/placeholder` not used | MEDIUM | §5.3 (tangential) | Add as §5.13 |
| GAP-14 | Defensive rendering verified before use | MEDIUM | Not covered | Add as note to §5.3 |
| GAP-15 | No JS theme detection; `--lp-*` token namespace | MEDIUM | §5.8 (partial) | Extend §5.8 |
| GAP-16 | Composable governance: pageType + variables + media slot | MEDIUM | Not covered | Add as §5.15 |
| GAP-17 | `how-to` hyphen typo — invalid enum | MEDIUM | §1.2 (implicit) | Note in §1.2 |
| GAP-18 | Pre-commit budget constraints | MEDIUM | Not covered | Do NOT add to checks.mdx |
| GAP-20 | Mintlify override registry for style.css overrides | MEDIUM | Not covered | Add as deferred §5.16 |
| GAP-21 | `@contentAffinity` field | LOW | Not covered | Future — not yet enforced |
| GAP-22 | No hardcoded pixel dimensions in component props | LOW | Not covered | Component-level, not page-level |
| GAP-23 | WCAG accessibility checks | LOW | Not covered | New Category 10 if scope expands |
| GAP-24 | No duplicate major layout elements | LOW | Not covered | Add when draft policy locks |

---

## RECOMMENDATIONS FOR IMMEDIATE ACTION

Three gaps that require the smallest effort and highest value:

**1. GAP-06 — Mandatory related-resources footer** (Category 5, new check 5.11): This is a HIGH veracity rule affecting every page, currently completely absent from checks.mdx. One line to add.

**2. GAP-08 — No workspace paths in docs.json** (Category 7, new check 7.10): HIGH veracity, currently a blind spot. The inverse of an existing check — trivially stated.

**3. GAP-04 — No cross-JSX imports** (Category 5, extend §5.3 or §5.10): HIGH veracity, Mintlify platform constraint, hard CI gate. Currently absent from checks.mdx despite being a page-rendering-breaking rule.

---

_Generated: 2026-03-24 | Sources read: 18 files | Checks cross-referenced: all 9 categories, 57 individual checks_
