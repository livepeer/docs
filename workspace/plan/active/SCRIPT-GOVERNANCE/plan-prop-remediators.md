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

**Phase 1 — Low-risk, deterministic categories (build first).**
These can be applied without human judgement once the rule is locked.

1. ✅ `prop-divider-missing-before-related` (22) — pure structural regex, no JSX edit. **DONE 2026-05-28** (commit 1b3021aa4): `repair-divider-before-related.js`, 20 insertions applied. Uses non-empty-line lookback (handles JSX comments between divider and heading).
2. `prop-divider-missing-opening` (623) — structural, needs first-heading + first-paragraph detection. **Still open** — riskiest of the structural set (623 pages), needs care with import-block detection.
3. `prop-mermaid-ungoverned-colour` (247) — token-mapping inside mermaid fences only. **Still open** — needs a per-hex brand-token decision (which governed colour replaces each ungoverned one). Not safe to auto-map.
4. ✅ `prop-hardcoded-hex` (68→50) — **DONE 2026-05-28** (commit 1b3021aa4): `repair-hardcoded-hex.js`, sourced from style.css (the component-governance colour source of truth, NOT MermaidColours.jsx which is mermaid-only). Fixed the #2d9a67 typo of the dark accent across 8 dev pages → var(--accent). Skips ambiguous hexes (#ffffff = bg-page AND on-accent) and off-palette status colours. Remaining 50 are intentional palette docs (allowlisted style-guide.mdx) or off-palette status colours needing a brand decision.

**Validator fix shipped alongside Phase 1** (commit 1b3021aa4): `check-component-props.js` prop-hardcoded-hex now strips `<Mermaid chart={`...`}>` JSX blocks (not just ` ```mermaid ` fences) so governed mermaid colours in the JSX wrapper aren't false-flagged. Both remediators wired into `dispatch-component-registry.js` repair step (PR previews via --dry-run; scheduled+write / manual applies with --verify).

**Known validator follow-up:** `prop-divider-missing-before-related` 4-line lookback misses dividers separated by a 3-line JSX comment (2 false positives at v2/gateways/guides/node-pipelines/guide.mdx + production-gateways.mdx). The remediator handles these correctly; the validator's lookback should skip JSX comments.

Deliverables per category: one `repair-<category>.js` under
`operations/scripts/remediators/components/library/`, with `--dry-run`/`--write`/
`--verify`/`--files`/`--staged`/`--full`, 11-tag JSDoc header, and a unit test under
`operations/tests/unit/`. Pairs into the existing `dispatch-component-registry.js`.

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

## Brand-token mapping (Phase 1.3 + 1.4 input)

Required before Phase 1.3 and 1.4 can ship. Owner: design / brand. Output:
`tools/config/quality/mermaid-colour-tokens.json` mapping hex → token name.

## Dispatcher wire-up

Once any phase-1 remediator lands, add it to `ATOMICS.repair` in
[`dispatch-component-registry.js`](../../../operations/scripts/dispatch/content/maintenance/dispatch-component-registry.js)
and re-enable the `mode === 'pr'` dry-run preview branch. PR mode should preview
the diff; scheduled+write or manual should apply with `--verify`.

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
