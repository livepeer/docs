---
title: Component prop-* remediator suite
status: open
opened: 2026-05-27
parent: SCRIPT-GOVERNANCE
pairs_with: operations/scripts/validators/components/library/check-component-props.js
---

## Why this plan exists

`check-component-props.js` is a 9-category detector that ran against v2/ in May 2026
and surfaced 4,927 violations across 745 files. PR #913 ("merge docs-v2-dev-draft
into docs-v2") fails Maintenance because no paired remediator exists — the detector
is `detect-only`, violating D-GOV-03 ("every detector has a paired remediator").

This is a feature build, not a sync pass. Each category needs its own AST-aware
repair logic; some need design decisions before code (which brand token to
substitute for which raw hex, whether prop-card-missing-custom-title should fall
back to a derived title vs. flag for human review).

## Inventory

Live counts via `check-component-props.js --scope=full` (2026-05-27):

| Code                                  | Count | Locality      | Fix shape                                                                                               |
|---|---:|---|---|
| `prop-code-block-missing-metadata`    | 1,554 | code-block    | Detect language from fence info-string or content; inject ` icon="terminal"` (or appropriate icon)      |
| `prop-card-missing-custom-title`      | 1,409 | JSX prop      | Derive `title=""` from existing children or `href` path; flag ambiguous for human review                |
| `prop-divider-missing-opening`        | 645   | structural    | Insert `<CustomDivider />` after first heading + intro paragraph                                        |
| `prop-inline-style`                   | 634   | JSX attribute | Extract `style={{...}}` to a registered className or `<Container>` variant; flag any with computed expressions for human review |
| `prop-mermaid-ungoverned-colour`      | 296   | mermaid fence | Replace raw `#xxxxxx` in mermaid blocks with `--brand-token` references                                |
| `prop-accordion-missing-icon`         | 212   | JSX prop      | Add `icon=""` derived from `title` content or fallback to `circle-info`                                |
| `prop-tab-missing-icon`               | 79    | JSX prop      | Same shape as accordion                                                                                |
| `prop-hardcoded-hex`                  | 76    | inline / JSX  | Replace raw hex outside mermaid with brand tokens; flag unknowns                                       |
| `prop-divider-missing-before-related` | 22    | structural    | Insert `<CustomDivider middleText="Related" />` before "## Related Reading" / "## Related"             |
| **Total**                             | **4,927** in **745 files** |  |  |

## Phasing

**Phase 1 — Low-risk, deterministic categories. ALL DONE 2026-05-28 / 2026-06-03.**

| # | Rule | Was | Now | Remediator | Notes |
|---|---|---:|---:|---|---|
| 1 | `prop-divider-missing-before-related` | 22 | **0** | `repair-divider-before-related.js` (commit 1b3021aa4 + depth-2 alignment 08298f83b) | Depth-2 non-empty-line lookback, JSX-comment aware (validator + remediator agree). |
| 2 | `prop-divider-missing-opening` | 623 | **126 genuine** | `repair-divider-opening.js` (commit 1b3021aa4) | Rule narrowed: exempts single-component mounts, imported partials, and pages without a markdown heading. Accepts the "intro callout → divider → heading" house pattern. Remediator auto-fixed 6 standalone heading-first routes; safely skipped 50 (missing CustomDivider import or partial). 126 remaining are prose/callout-first pages whose divider placement is a manual judgement call. |
| 3 | `prop-mermaid-ungoverned-colour` | 247 | **0** | _no per-page remediator — palette expansion_ (commits 1b3021aa4 + 08298f83b) | Decision Q2: blessed `#2d9a67` as the de-facto dark-accent stroke. Decision Q3: added a 10-family multi-colour diagram palette (green/blue/indigo/purple/amber/olive/pink/rust/teal/neutral) to `snippets/components/config/MermaidColours.jsx`. The validator's `loadMermaidGovHexes()` already greps all hexes in that file, so all 38 distinct ungoverned hexes (249 occurrences) are now governed. No content edits required. |
| 4 | `prop-hardcoded-hex` | 68 | **50** (intentional palette docs + off-palette status) | `repair-hardcoded-hex.js` (commit 1b3021aa4) | Sourced hex→CSS-var map from **`style.css`** (the "Component governance source of truth"), NOT MermaidColours.jsx. Fixed the `#2d9a67` typo across 8 dev pages → `var(--accent)`. Skips ambiguous hexes (`#ffffff` maps to both `--background` and `--on-accent`). 50 remaining are allowlisted (`style-guide.mdx` palette doc) or off-palette status colours awaiting a brand decision. |

**Validator narrowings shipped alongside Phase 1** (`check-component-props.js`):
- `prop-hardcoded-hex` strips `<Mermaid chart={\`...\`}>` JSX blocks (not just ` ```mermaid ` fences) so governed mermaid colours in JSX wrappers aren't false-flagged.
- `prop-divider-missing-before-related` lookback counts the 2 nearest **non-empty** lines (was a fixed 4-physical-line window). Accepts the divider→closing-paragraph→Related pattern; ignores blanked JSX-commented dividers.
- `prop-divider-missing-opening` exempts single-component mounts (`<XxxSource/Canonical/Changelog/Page/Catalog>`, `<OpenAPI>`, `<IndexSource>`), imported partials (`custom/views/`, `composables/`, `groups/`, `stubs/`, `components/`), and pages with no markdown heading.
- All exemption patterns are captured in named regexes (`SINGLE_MOUNT_RE`, `PARTIAL_PATH_RE`) at the top of `checkCustomDividerPlacement`.

**Dispatcher wired:** both repair atomics are in `ATOMICS.repair` of `dispatch-component-registry.js` — PR mode previews via `--dry-run`; scheduled+write / manual applies with `--verify`.

**Unit tests added** (`operations/tests/unit/script-tests/remediators/`):
- `repair-divider-before-related.test.js` — 5 tests (default scope, dry-run safety, idempotent write, depth-2 acceptance of divider→prose→heading, JSX-commented divider is ignored).
- `repair-hardcoded-hex.test.js` — 6 tests (default scope, dry-run safety, `#2d9a67 → var(--accent)` regression guard for the `var(--theme-accent)` wrong-token miss, mermaid fence skipped, `<Mermaid chart={\`...\`}>` JSX wrapper skipped, ambiguous + unmapped hexes skipped).
- `repair-divider-opening.test.js` — 6 tests (default scope, heading-first insertion + idempotency, no-import safety guard, callout-first not in scope, already-correct pages untouched, partial-path safety).

All 17 tests run via `node operations/tests/unit/script-tests/run-all.js`.

Deliverables per remaining category (Phase 2/3): one `repair-<category>.js` under
`operations/scripts/remediators/components/library/`, with `--dry-run`/`--write`/
`--verify`/`--files`/`--staged`/`--full`, 11-tag JSDoc header, and a unit test under
`operations/tests/unit/script-tests/remediators/`. Pairs into `dispatch-component-registry.js`.

**Phase 2 — Icon/title derivation categories.**
Need a small derivation library shared across remediators.

5. `prop-accordion-missing-icon` (212)
6. `prop-tab-missing-icon` (79)
7. `prop-card-missing-custom-title` (1,409)
8. `prop-code-block-missing-metadata` (1,554)

The icon-derivation logic should live in
`operations/scripts/remediators/components/library/_lib/derive-icon.js` —
shared by accordion, tab, and code-block remediators. Title derivation
(`derive-title.js`) is shared by card + code-block.

**Phase 3 — Highest-risk category.**

9. `prop-inline-style` (634) — needs a CSS class registry. May warrant a separate
   design doc (which classnames to allow, where the registry lives). Some matches
   will be irreducible (computed expressions) and stay flagged.

## Brand-token mapping — RESOLVED 2026-06-03

The originally proposed `tools/config/quality/mermaid-colour-tokens.json` is no longer
needed. The same governance is now expressed directly in `snippets/components/config/
MermaidColours.jsx`: the `diagram` palette object groups the sanctioned hexes by colour
family (decision Q3), and the validator's `loadMermaidGovHexes()` greps every hex from
that file into the allowed set. Future additions: edit `MermaidColours.jsx`'s `diagram`
section, not a separate JSON.

## Dispatcher wire-up — RESOLVED

Both Phase-1 remediators are wired into `ATOMICS.repair` of
[`dispatch-component-registry.js`](../../../operations/scripts/dispatch/content/maintenance/dispatch-component-registry.js).
PR mode previews via `--dry-run`; scheduled+write / manual applies with `--verify`.

## Open questions

- Should `prop-card-missing-custom-title` derive titles, or should it always flag for human review? 1,409 cards is too many to review manually but auto-derived titles may be wrong.
- For `prop-code-block-missing-metadata`, do we set `icon="terminal"` for all shell-flavoured fences or use language-specific icons? Need an icon-per-language table.
- Where does the CSS class registry live for `prop-inline-style`? Existing utility classes vs. new component variants?

## Success criteria

- All 9 categories have paired remediators
- `check-component-props.js` exit code 0 against full v2 scope
- PR #913 (or its successor) lands without Maintenance failures
- All remediators support `--dry-run`/`--verify` per D-GOV-03 and D-GOV-07
- Per-category functional test under `operations/tests/integration/pipeline-functional-tests.js`

## Out of scope

- Modifying `check-component-props.js` detection logic (the detector is correct)
- New violation categories
- v1 content under `v1/` and archived content under `_workspace/archive/`
