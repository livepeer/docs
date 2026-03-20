# Content Remediation Results - 2026-03-09

## Baseline (Step 0)
- Commit: `2c0c1ec5`
- EN MDX files in scope: `457`
- Generated files excluded: `11`
- Editable EN MDX files: `446`

### Raw Step 0 Output
```text
=========================================
CONTENT REMEDIATION BASELINE
Date: 2026-03-09T09:34:00Z
Commit: 2c0c1ec5
=========================================

=== Script existence check ===
  tests/unit/style-guide.test.js: EXISTS
  tools/scripts/validators/content/check-grammar-en-gb.js: EXISTS
  tools/scripts/validators/content/check-page-endings.js: EXISTS
  tools/scripts/style-and-language-homogenizer-en-gb.js: EXISTS
  tools/scripts/remediators/content/repair-spelling.js: EXISTS

=== EN files in scope ===
EN MDX files: 457

=== Trailing whitespace ===
Trailing whitespace findings: 0

=== UK English ===
v2/solutions/streamplace/overview.mdx:66:1 [double-space] Double space detected

Files checked: 457
Files modified: 0
Reportable findings: 3864
  an-before-consonant: 16
  double-space: 3794
  its-vs-its: 3
  repeated-word: 7
  sentence-lowercase: 44
UK English findings: 3

=== Page endings ===
WARN v2/solutions/portal.mdx ends-with-raw-prose
WARN v2/solutions/product-hub.mdx ends-with-raw-prose
WARN v2/solutions/solution-providers.mdx no-meaningful-content
WARN v2/solutions/streamplace/introduction/streamplace-architecture.mdx ends-with-raw-prose
WARN v2/solutions/streamplace/introduction/streamplace-funding-model.mdx ends-with-raw-prose
WARN v2/solutions/streamplace/introduction/streamplace-guide.mdx ends-with-raw-prose
WARN v2/solutions/streamplace/introduction/streamplace-integration.mdx ends-with-raw-prose
WARN v2/solutions/streamplace/introduction/streamplace-provenance.mdx ends-with-raw-prose
WARN v2/solutions/streamplace/overview.mdx ends-with-raw-prose
Summary: 450 files, 93 OK, 357 warnings, 0 fixed
Page endings findings: 1
```

### Repo Drift Notes
- This report reflects the current remote `docs-v2` tip (`2c0c1ec5`), which moved past the earlier isolated remediation base before landing.
- `tests/unit/style-guide.test.js` no longer reports trailing-whitespace violations directly. Its raw Step 0 output is preserved above for fidelity to the task brief, but the authoritative whitespace baseline and result come from a direct editable-scope scan.
- The Step 0 `grep -c` extraction logic in the task brief is no longer authoritative for the current UK-English and page-ending validator outputs. The counts used below come from `Reportable findings:` and `Summary:` lines instead.
- `tools/scripts/validators/content/check-page-endings.js` now exists and validates approved navigational endings. Its `--fix` mode appends `[//]: # (TODO: add page ending)`, which is content authoring and was therefore not used.
- `tools/scripts/style-and-language-homogenizer-en-gb.js` remained advisory-only on this checkout. The mutators used were `check-grammar-en-gb.js --fix` and `repair-spelling.js --write`.

| Category | Baseline Count | Expected | Delta from expected |
|---|---:|---:|---:|
| Trailing whitespace (direct editable scan) | 1 | 687 | -686 |
| Trailing whitespace (`style-guide` raw output) | 0 | 687 | -687 |
| UK English (full validator scope) | 3864 | 3826 | +38 |
| UK English (actionable non-generated) | 3634 | 3826 | -192 |
| Page endings (content warnings) | 357 | 223 | +134 |

## Results
| Category | Before | After | Reduction | Target Met? |
|---|---:|---:|---:|---|
| Trailing whitespace (direct editable scan) | 1 | 0 | 1 (100.0%) | ✅ |
| UK English (actionable non-generated) | 3634 | 19 | 3615 (99.5%) | ✅ |
| UK English (full validator scope) | 3864 | 249 | 3615 (93.6%) | Generated-file skips remain |
| Page endings (content validator) | 357 | 357 | 0 | CONTENT_REQUIRED - no safe mechanical fix path |

## Validation
| Test | Result |
|---|---|
| `mdx.test.js` | PASS |
| `style-guide.test.js` | FAIL - `763` violations remain; current suite does not act as the trailing-whitespace authority on this checkout |
| `spelling.test.js` | PASS |
| `links-imports.test.js` | PASS |
| `check-grammar-en-gb.js` | PASS vs task target (`19` actionable findings remain, all non-fixable/manual-review items) |
| `check-page-endings.js` | CONTENT_REQUIRED - `357` warnings remain and `--fix` would add author TODO comments |

## Generated Files Skipped
- `v2/resources/documentation-guide/component-library/overview.mdx` - `GENERATED_FILE_SKIP` with `230` double-space findings; file was not modified.

## UK English - Exclusion Notes
- Code blocks modified: `0`
- URLs modified: `0`
- JSX tag tokens modified: `0`
- Inline code tokens modified: `0`
- API parameters modified: `0`
- False positives / manual-review residuals:
- `an-before-consonant` (`16`)
- `its-vs-its` (`3`)
- Spelling deterministic repairs:
- Dry run: `446` files scanned, `33` files with repairs, `79` proposed repairs, `2322` skipped issues
- Write: `446` files scanned, `33` files with repairs, `79` applied repairs, `2322` skipped issues
- Repair-spelling parse skips:
- `v2/about/livepeer-protocol/treasury.mdx`
- `v2/home/about-livepeer/ecosystem.mdx`

## Page Endings - Content Required
- Summary: `357` warnings across `450` files checked
- Reasons:
- `ends-with-raw-prose` (`315`)
- `no-meaningful-content` (`35`)
- `ends-with-code-block` (`7`)
- Representative flagged pages:
- `v2/about/core-concepts.mdx`
- `v2/about/core-concepts/concepts/actors.mdx`
- `v2/about/faq-about.mdx`
- `v2/about/index.mdx`
- `v2/about/livepeer-network/demand-side.mdx`
- `v2/about/livepeer-network/fee-flow.mdx`
- `v2/about/livepeer-network/interfaces.mdx`
- `v2/about/livepeer-network/job-lifecycle.mdx`
- `v2/about/livepeer-network/marketplace.mdx`
- `v2/about/livepeer-network/overview.mdx`

## Files Modified
- Total: `217`
- EN MDX only: `216`
- Non-MDX: `1` (`tasks/reports/performance/content-remediation-results.md` only)

## Remaining Known Issues
- `style-guide.test.js` still reports `763` broader style violations outside the scope of this mechanical remediation pass.
- `check-page-endings.js` is now a content-structure validator on this branch tip; `357` pages still need human-authored navigational endings.
