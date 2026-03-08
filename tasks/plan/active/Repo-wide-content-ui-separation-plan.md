# Repo-Wide Content/Layout Separation Plan for V2 Localization

## Summary
Adopt a **content-first architecture** (your preferred Path 2) so component text is no longer embedded as inline MDX props.  
Target state: MDX pages become thin route wrappers + layout composition, while localized copy lives in dedicated JSX content modules with enforceable schemas and automation.

This plan is decision-complete for starting with all `v2` pages, enforcing via pre-commit auto-repair + hard-fail, and scaling into sectionized reusable MDX content.

## Architecture Decision (Locked)
1. Primary approach: **Path 2** (separate content from layout).
2. Enforcement mode: **auto-repair on pre-commit + hard fail on unresolved issues**.
3. Migration tempo: **section-by-section with freeze gates**.
4. File format: default to **`.jsx` content modules** now, with a TSX compatibility spike; if TSX proves stable in Mint, upgrade later.
5. Keep current route strategy for localized pages (`v2/<lang>/...`) and keep `v1` out of scope.

## Best-Practice Consensus Applied
1. Split doc translation from UI/component message localization.
2. Keep stable locale folder conventions and deterministic fallbacks.
3. Use extraction + lint/guardrails to prevent untranslated UI literals.
4. Migrate incrementally with compatibility gates, not big-bang.

References:
- [Mintlify Internationalization](https://www.mintlify.com/docs/guides/internationalization)
- [Mintlify Navigation](https://www.mintlify.com/docs/organize/navigation)
- [Docusaurus i18n Intro](https://docusaurus.io/docs/i18n/introduction)
- [Docusaurus no-untranslated-text lint rule](https://docusaurus.io/docs/api/misc/@docusaurus/eslint-plugin/no-untranslated-text)
- [FormatJS Intl messages](https://formatjs.github.io/docs/intl/)
- [i18next namespaces](https://www.i18next.com/principles/namespaces)

## Target Folder Structure (V2)
Use these roots:

1. Layout layer:
- `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/snippets/pages/v2/<section>/<page>/layout.jsx`
- `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/snippets/pages/v2/<section>/<page>/index.jsx`

2. Content layer:
- `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/snippets/content/v2/<section>/<page>/schema.js`
- `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/snippets/content/v2/<section>/<page>/locales/en.jsx`
- `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/snippets/content/v2/<section>/<page>/locales/es.jsx`
- `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/snippets/content/v2/<section>/<page>/locales/fr.jsx`
- `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/snippets/content/v2/<section>/<page>/locales/cn.jsx`

3. Optional sectionized prose layer (long pages):
- `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/snippets/content/v2/<section>/<page>/sections/en/*.mdx`
- `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/snippets/content/v2/<section>/<page>/sections/es/*.mdx`
- `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/snippets/content/v2/<section>/<page>/sections/fr/*.mdx`
- `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/snippets/content/v2/<section>/<page>/sections/cn/*.mdx`

4. Route wrappers (kept for Mint routing):
- `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/v2/<section>/<page>.mdx`
- `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/v2/es/<section>/<page>.mdx`
- `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/v2/fr/<section>/<page>.mdx`
- `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/v2/cn/<section>/<page>.mdx`

## Public Interfaces / Contracts to Add
1. Content module contract (all pages):
- `meta`: `title`, `sidebarTitle`, `description`, `tag`
- `copy`: structured text payload for component props
- `links`: URL maps where needed
- `notes`: optional comments for editors

2. Extraction registry contract:
- `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/tools/i18n/component-prop-registry.json`
- Defines translatable component props and exclusions (`href`, `icon`, `src`, `id`, etc.).

3. Migration manifest:
- `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/tools/i18n/content-migration-manifest.json`
- Page status: `legacy`, `migrating`, `enforced`.

4. New scripts:
- `tools/scripts/i18n/extract-component-content.js`
- `tools/scripts/i18n/repair-inline-component-props.js`
- `tools/scripts/i18n/check-inline-component-props.js`
- `tools/scripts/i18n/translate-content-modules.js`
- `tools/scripts/i18n/generate-localized-route-wrappers.js`

## End-to-End Workflow (Author + CI)
1. Author edits MDX/layout/content.
2. Pre-commit runs repair script on staged files:
- extracts inline prop literals into `locales/en.jsx`
- rewrites MDX prop literals to `content.*` references
- stages rewritten files
3. Pre-commit then runs guard check:
- fails if unresolved inline literals remain in `enforced` pages
4. Pre-commit runs staged test suite (existing `tests/run-all.js --staged --skip-browser` flow).
5. CI runs full checks and i18n regression.
6. Translation pipeline translates content modules (not JSX prop literals in MDX), then regenerates route wrappers/docs.json.

## Phased Rollout Plan

## Phase 0 — Foundation and Compatibility Spike
1. Validate TSX in Mint pipeline using a minimal isolated sample.
2. If unstable, lock `.jsx + @ts-check + JSDoc typedefs` as standard.
3. Define component-prop extraction registry and schema conventions.
4. Add VSCode workspace standards:
- JS check enabled
- snippets/templates for content modules
- required settings documented

Gate:
- one sample page fully migrated and rendering in `en/es/fr/cn`.

## Phase 1 — Tooling and Enforcement
1. Implement extractor + repair + checker scripts.
2. Integrate into `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/.githooks/pre-commit` before existing staged tests.
3. Add CI job step in docs workflow to run checker in `--enforce-existing` mode for enforced pages.
4. Add autofix command via `lpd`:
- `./lpd tools i18n repair-inline-props -- --staged --write --stage`

Gate:
- pre-commit catches/repairs new inline literals on pilot pages with deterministic output.

## Phase 2 — V2 Migration Wave 1 (High-traffic sections)
1. Migrate `v2/home` fully.
2. Migrate `v2/about`.
3. Migrate `v2/developers`.
4. For each section:
- convert pages to layout + content modules
- translate `es/fr/cn`
- regenerate wrappers and `docs.json`
- run tests + preview checkpoint
- commit and merge latest `docs-v2` each cycle

Gate:
- section has zero inline translatable prop strings; all locale routes render.

## Phase 3 — V2 Migration Wave 2 (Remaining non-internal)
1. Migrate `v2/platforms`, `v2/gateways`, `v2/lpt`, `v2/community`, `v2/resources`.
2. Keep same batch loop + merge cadence.

Gate:
- all non-internal v2 nav-backed pages are `enforced` in manifest.

## Phase 4 — V2 Internal + Shared Docs
1. Migrate `v2/internal`.
2. Migrate `/docs-guide/**` and `/contribute/contributing.mdx` into same content/layout policy where component props exist.
3. Keep docs-guide/index generators in sync.

Gate:
- repository-wide (targeted paths) checker runs in hard-fail mode.

## Phase 5 — Long-Page Decomposition and Reuse
1. Introduce “section components” for long pages:
- split pages by semantic blocks into `sections/<lang>/*.mdx`.
2. Create reusable section library for repeated content patterns.
3. Add duplication detector:
- flag repeated large MDX blocks and suggest extraction candidates.

Gate:
- top repeated blocks replaced by composable section imports.

## Phase 6 — Stabilization and Governance
1. Add migration dashboard/report from manifest.
2. Add PR template checklist for content/layout compliance.
3. Add ownership rules for shared layout and content schemas.
4. Document full authoring and repair flow in:
- `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/tools/scripts/i18n/README.mdx`
- `/Users/alisonhaire/.codex/worktrees/0bee/livepeer-docs-v2 [docs-v2-branch]/docs-guide/lpd.md`

## Test Cases and Scenarios

1. Extractor determinism:
- same input MDX yields same keys/order/output every run.

2. Safe rewrite:
- only allowlisted props are extracted.
- non-translatable props remain untouched.

3. Idempotency:
- running repair twice yields zero additional diff.

4. Locale translation correctness:
- `es/fr/cn` content modules generated with schema-valid shape.
- fallback to `en` only for missing keys, with warnings.

5. Rendering safety:
- `mint dev` loads localized routes without JSX parse regressions.
- version/language toggles remain functional.

6. Enforcement:
- staged commit with new inline string props in enforced page is auto-repaired.
- if unresolved patterns remain, commit fails with exact file/line guidance.

7. CI regression:
- existing i18n tests, docs navigation tests, and MDX/link tests remain green.

## Acceptance Criteria
1. All `v2` pages use content modules for component-prop text.
2. Pre-commit auto-repair is active and stable.
3. Hard-fail enforcement is enabled for migrated scopes, then all v2.
4. `es/fr/cn` localized content exists for migrated pages.
5. docs.json localization remains correct and route-compatible.
6. Long repeated MDX content has a documented extraction/migration backlog with completed first wave.

## Explicit Assumptions and Defaults
1. OpenRouter remains free-only by default.
2. `zh-CN` input normalizes to `cn` output.
3. `v1` localization is out of scope.
4. Default implementation format is `.jsx` unless TSX spike passes reliably.
5. Existing test/report churn files remain excluded from translation commits.
6. Migration is section-gated to keep risk and merge conflicts controlled.
