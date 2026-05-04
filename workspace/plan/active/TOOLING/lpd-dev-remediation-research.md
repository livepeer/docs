# LPD Dev Remediation Pipeline — Research Report

> **Thread:** LPD Dev Remediation Pipeline
> **Date:** 2026-04-15
> **Phase:** Research (complete)
> **Next:** Co-design architecture

<CustomDivider />

## 1. How `lpd dev` works today

`lpd dev` (`tools/lpd:999`) launches the Mintlify dev server via `tools/dev/preview/mint-dev.sh`. It has an **optional** `--test` flag that runs the test suite before starting the server (`run_test_mode` → `run-all.js`). That is it — **no remediation happens during dev today.** Tests are advisory only; failures print warnings but do not block the server.

### `lpd dev` flag surface

```
lpd dev [--test] [--test-mode fast|staged|full] [--script <path>] [--dry-run]
        [--scoped] [--docs-config <path>] [--scope-interactive] [--scope-list]
        [--scope-file <path>] [--scope-version <csv>] [--scope-language <csv>]
        [--scope-tab <csv>] [--scope-prefix <csv>] [--skip-external-fetch]
        [--disable-openapi] [-- ...mint args]
```

Key flow:
1. Parse flags
2. If `--test`: run `run_test_mode` (advisory — warnings do not block)
3. Launch `mint-dev.sh` with env vars for scoping
4. Server starts

### `run_test_mode` mapping

| Mode | Command |
|---|---|
| `fast` | `run-all.js --skip-browser` |
| `staged` | `run-all.js --staged --skip-browser` |
| `full` | `run-all.js` (all suites including browser) |

<CustomDivider />

## 2. What `lpd repair` already does

`lpd repair` (`tools/lpd:1580`) is a governed entrypoint with 6 surfaces:

| Surface | Mode | What it remediates |
|---|---|---|
| `portable-skills` | write/check | Skill export + Codex sync |
| `docs-guide-generated` | write/check | Generated indexes, catalogs, script docs |
| `ui-templates` | write/check | UI template generation |
| `script-governance` | write/check | JSDoc headers, classification data |
| `component-governance` | write/check | Component metadata, registry, docs |
| `frontmatter-contract` | **check-only** | Quality + taxonomy validation (no deterministic writer) |

All surfaces support:
- `--staged | --files <csv> | --full` scoping
- `--write` (apply fixes) / `--check` (default, report only)
- `--stage` (re-stage after write, implies `--write`)

Pattern: each surface runs the remediator(s) in write mode, then runs the validator(s) to verify. This is the composable pattern to extend.

<CustomDivider />

## 3. Complete remediation inventory

### 3a. User-requested domains (spelling, em-dash, frontmatter, MDX)

| Domain | Script | Path | Dry-run/Write | --verify | Scope | Programmatic API |
|---|---|---|---|---|---|---|
| **Spelling (cspell)** | `repair-spelling.js` | `operations/scripts/remediators/content/repair/` | Y/Y | Y | staged/files | No |
| **Spelling (US to UK)** | `remediate-us-spelling.js` | `operations/scripts/remediators/content/style/` | Y/Y | Y | v2 MDX (full) | No |
| **Em-dashes** | `remediate-em-dashes.js` | `operations/scripts/remediators/content/style/` | Y/Y | Y | v2 MDX (full) | No |
| **Frontmatter keys** | `normalise-frontmatter-keys.js` | `operations/scripts/remediators/content/classification/` | Y/Y | partial | v2 MDX (full) | No |
| **MDX warnings** | `repair-mdx-safe-markdown.js` | `operations/scripts/remediators/content/repair/` | Y/Y | Y | staged/files/repo | Yes (`run()` export) |

### 3b. Full remediation inventory (27 scripts)

#### Content — Style

| Script | Remediates | Scope | Verify |
|---|---|---|---|
| `remediate-em-dashes.js` | Em-dashes (U+2014) to en-dashes (U+2013) in v2 MDX prose | v2/ recursive (excludes _workspace, archived) | `--verify` with per-file revert |
| `remediate-us-spelling.js` | US to UK English (159+ rules: -ize to -ise, -or to -our, etc.) | v2/ routable MDX | `--verify` with per-file revert |
| `remediate-styles.js` (tools/) | Legacy CSS tokens, hardcoded hex, outline removal, mermaid init, spacing | JSX/CSS/MDX in v2 + snippets-components | `--verify` with full revert |
| `repair-ownerless-language.js` | Ownerless language patterns | v2/ | No |
| `wcag-repair-common.js` | WCAG repair shared logic | Library only (not standalone) | N/A |

#### Content — Repair

| Script | Remediates | Scope | Verify |
|---|---|---|---|
| `repair-mdx-safe-markdown.js` | HTML comments, raw `<br />`, raw comparison operators, angle-bracket placeholders, standalone `---`, missing code block icons | staged/files/repo | `--verify` with per-file revert |
| `repair-spelling.js` | Spelling errors via cspell (deterministic corrections only, prose ranges only) | staged/files | `--verify` |
| `repair-page-links.js` | Relative to canonical absolute page href paths | explicit files/dirs | No (has `--json` report) |
| `repair-page-imports.js` | Proven-safe import failures (leaves ambiguous unchanged) | files/repo | No (has `--output-dir`) |
| `repair-relative-page-hrefs.js` | Legacy relative href patterns (deprecated; use repair-page-links) | full repo | No |
| `sync-docs-paths.js` | docs.json and governed reference rewrites for moved pages | staged | No |
| `sync-mintlify-canonical-consumers.js` | Mintlify consumer surface path rewrites | staged/repo | `--json` optional |
| `migrate-assets-to-branch.js` | Media asset migration + MDX reference rewrites | manifest-driven | Dry-run only |
| `quarantine-manager.js` | File quarantine classification and moves | repo | No |

#### Content — Classification

| Script | Remediates | Scope |
|---|---|---|
| `normalise-frontmatter-keys.js` | Capitalised keys to lowercase + infers missing complexity/lifecycleStage | v2 MDX (full) |
| `add-pagetype-mechanical.js` | Mechanically assigns pageType frontmatter | v2 MDX |
| `assign-purpose-metadata.js` | Fills purpose and audience frontmatter | v2 routable pages |
| `add-framework-headers.js` | Inserts/extends framework headers on scripts from classification data | data-driven |

#### Content — Copy

| Script | Remediates | Scope |
|---|---|---|
| `remediate-voice-violations.js` | Removes "This page covers" self-references, audience-specific prohibited constructions | v2/ routable MDX |

#### Content — SEO

| Script | Remediates | Scope |
|---|---|---|
| `generate-seo.js` | Generates SEO metadata (title, description, keywords) from content | v2 pages |

#### Components

| Script | Remediates | Scope |
|---|---|---|
| `repair-component-metadata.js` | Auto-repairs derived JSDoc metadata fields | staged/all |
| `repair-component-styles.js` | Extract inline styles to named const, move top-level constants inside function | staged/all |
| `repair-ai-discoverability.js` | Add @aiDiscoverability tags, create placeholder companion JSON | staged/all |

#### Governance

| Script | Remediates | Scope |
|---|---|---|
| `repair-governance-artifacts.js` | Regenerates governance map, updates lastVerified dates | repo |
| `repair-script-inventory.js` | Script headers and classification data | staged/files (`--json`, `--md` reports) |
| `add-workflow-governance-headers.js` | Governance comment headers on GitHub Actions workflow YAML | repo |
| `fix-usage-paths.js` | Usage path corrections in JSDoc headers | scaffolding |
| `update-jsdoc-headers.js` | JSDoc header updates | scaffolding |

<CustomDivider />

## 4. What the test suite catches

`run-all.js` runs 30+ test suites. All return `{ errors[], warnings[] }`. The suites that produce warnings with matching remediators:

| Suite | What it catches | Matching remediator | Auto-fixable |
|---|---|---|---|
| Style Guide | em-dashes, UK spelling violations | `remediate-em-dashes.js`, `remediate-us-spelling.js` | Yes |
| Copy Lint | voice violations, banned phrases | `remediate-voice-violations.js` | Yes |
| Spelling | misspellings (cspell) | `repair-spelling.js` | Yes (deterministic only) |
| MDX-safe Markdown | unsafe patterns (HTML comments, raw `<br />`, etc.) | `repair-mdx-safe-markdown.js` | Yes |
| Quality | frontmatter completeness | `normalise-frontmatter-keys.js` | Partial (some keys need human) |
| Frontmatter Taxonomy | pageType/purpose/audience | `add-pagetype-mechanical.js`, `assign-purpose-metadata.js` | Partial |
| Links | broken internal links | `repair-page-links.js` | Yes |
| Imports | broken imports | `repair-page-imports.js` | Partial (proven-safe only) |
| Double Headers | duplicate H1s | `check-double-headers.js` (inline fix) | Yes |
| Component Naming | naming convention violations | None (manual fix required) | No |
| Docs Navigation | nav/route mismatches | `sync-docs-paths.js` | Partial |

### Suites with NO matching remediator

| Suite | What it catches | Fix approach |
|---|---|---|
| MDX Guardrails | MDX rendering issues | Manual (bundler-specific) |
| Docs Authoring Rules | structural violations | Manual |
| Docs Page Scope | page scoping errors | Manual |
| Script Docs | JSDoc header gaps | `governance-pipeline.js` via `lpd repair --surface script-governance` |
| Skill Docs | skill documentation gaps | Manual |
| Various governance suites | sync/freshness/format | Various `lpd repair` surfaces |

<CustomDivider />

## 5. Gap analysis

| # | Gap | Description | Severity |
|---|---|---|---|
| G1 | **No remediation in `lpd dev` flow** | Tests run, warnings print, nothing gets fixed | P0 — the whole point of this thread |
| G2 | **No `lpd repair` surface for content style** | em-dash, spelling, voice remediators exist but are not wired into `lpd repair` | P1 — most common warnings |
| G3 | **No structured output contract** | Most remediators output text, not structured JSON. A pipeline needs machine-readable results to chain check to fix to verify | P1 — blocks composability |
| G4 | **No `--staged` on style remediators** | `remediate-em-dashes.js` and `remediate-us-spelling.js` scan all of v2/ — no staged/files scope | P2 — performance for dev flow |
| G5 | **Frontmatter has no deterministic writer** | `frontmatter-contract` surface is check-only — some keys need human decisions | P2 — partial coverage only |
| G6 | **No remediation chaining** | Each script runs independently — no pipeline runs check then fix then verify in sequence | P1 — this is what we are building |
| G7 | **No file-watch integration** | Mintlify watches for changes; no hook into that loop for remediation on save | P3 — nice to have, not essential |

<CustomDivider />

## 6. Architecture opportunities

Three integration points for remediation in `lpd dev`:

### A. Pre-server advisory (lowest effort)

`lpd dev --test` already runs tests. Add `--fix` / `--remediate` to auto-remediate before launching the server. Flow: test → collect warnings → run matching remediators → re-test → launch server.

**Pros:** Minimal new infrastructure. Composes with existing `--test` flag.
**Cons:** Only runs once at startup. Does not catch issues introduced during editing.

### B. Post-test remediation batch (medium effort)

New `lpd dev --fix` flow:
1. Run test suite in structured-output mode
2. Classify each warning by which remediator can fix it
3. Run matching remediators (dry-run first, then write)
4. Run `--verify` on each remediator
5. Re-run affected tests to confirm
6. Report: what was fixed, what needs human attention
7. Launch server

**Pros:** Full pipeline with verification. Clear reporting.
**Cons:** Still pre-server only.

### C. File-watch remediation (highest effort)

Hook into Mintlify's file-watch or add a parallel watcher. On file save, run scoped remediators on the changed file.

**Pros:** Continuous remediation during development.
**Cons:** Complex. Risk of write loops (remediation triggers watch triggers remediation). Needs debouncing and loop detection.

### Recommended approach

**Option B** as the primary architecture, with the `lpd repair` surface pattern as the foundation. Each remediation domain becomes a surface (or sub-surface) with check/write/verify. A meta-dispatcher chains them.

Option C can be added later as an extension once Option B proves stable.

<CustomDivider />

## 7. Design questions for co-design phase

1. **Which remediators are safe to auto-run vs which need human approval?**
   - Proposed safe: em-dashes, US-to-UK spelling, MDX-safe markdown, cspell deterministic fixes, page links
   - Proposed human-review: frontmatter classification, voice violations, SEO generation

2. **Should remediation be opt-in (`--fix`) or opt-out (`--no-fix`)?**
   - Recommendation: opt-in (`--fix`) initially, graduate to opt-out once trust is established

3. **Do we want file-watch integration (fix on save) or just pre-server batch?**
   - Recommendation: pre-server batch first (Option B), file-watch later

4. **What is the structured output contract for composability?**
   - Each remediator should return `{ files: [{ path, fixes: [{ rule, line, before, after }] }], summary: { fixed, skipped, errors } }`

5. **New `lpd repair` surfaces needed?**
   - `content-style` (em-dashes + UK spelling + voice)
   - `content-safety` (MDX-safe markdown + spelling)
   - `content-links` (page links + imports)
   - Or a single `content-quality` meta-surface that chains all of the above

6. **Scope behaviour for `lpd dev --fix`?**
   - Default to `--staged` (only fix files you have been editing)
   - `--fix --full` for repo-wide sweep
