# SME Audit: `health` concern

> 37 scripts | Generated 2026-05-17
> Walk through each script. Set verdict per row. SME notes column free-form.
>
> **Verdict options:** `keep` / `refactor` / `merge` / `archive` / `unknown`

---

## audit (9)

### niche: `health` (2)

#### `page-imports-audit.js`

- **Path:** `operations/scripts/audits/content/health/page-imports-audit.js`
- **Purpose:** * @description Audit page-reachable import health from canonical operations scripts, with stable outputs under operations/reports/health/page-imports.
- **Description:** Audit page-reachable import health from canonical operations scripts, with stable outputs under operations/reports/health/page-imports.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run` `--files`
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual
- **Usage:** `node operations/scripts/audits/content/health/page-imports-audit.js [--staged|--scope routable-v2|repo|--files <paths>|--tab <tab>] [--strict] [--output-dir <dir>]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `page-links-audit.js`

- **Path:** `operations/scripts/audits/content/health/page-links-audit.js`
- **Purpose:** * @description Audit page-facing link health from canonical operations scripts, with stable outputs under operations/reports/health/page-links.
- **Description:** Audit page-facing link health from canonical operations scripts, with stable outputs under operations/reports/health/page-links.
- **Workflow callers:** `audit-health-scan-external-links.yml`
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual, P6
- **Usage:** `node operations/scripts/audits/content/health/page-links-audit.js [--full|--staged|--files <paths>|--tab <tab>] [--strict] [--external-policy classify|validate] [--output-dir <dir>]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `quality` (5)

#### `audit-copy-patterns.js`

- **Path:** `operations/scripts/audits/content/quality/audit-copy-patterns.js`
- **Purpose:** * @description Aggregate copy pattern violations across a tab or full v2 tree and emit a diagnostic report.
- **Description:** Aggregate copy pattern violations across a tab or full v2 tree and emit a diagnostic report.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual
- **Usage:** `node operations/scripts/audits/content/quality/audit-copy-patterns.js --tab <name> | --all [--output <file>]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `audit-media-assets.js`

- **Path:** `operations/scripts/audits/content/quality/audit-media-assets.js`
- **Purpose:** * @description Audits repo media assets, references, ignore leakage, and externalized asset branch inventory.
- **Description:** Audits repo media assets, references, ignore leakage, and externalized asset branch inventory.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--verify`
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual — diagnostic/investigation tool, run on-demand only
- **Usage:** `node operations/scripts/audits/content/quality/audit-media-assets.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `audit-python.py`

- **Path:** `operations/scripts/audits/content/quality/audit-python.py`
- **Purpose:** # @description Python page audit utility — validates routed docs files, snippet imports, and internal links, then writes page-audit reports
- **Description:** Python page audit utility — validates routed docs files, snippet imports, and internal links, then writes page-audit reports
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `python3 operations/scripts/audits/content/quality/audit-python.py [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `audit-v2-usefulness.js`

- **Path:** `operations/scripts/audits/content/quality/audit-v2-usefulness.js`
- **Purpose:** * @description Usefulness auditor — scores v2 MDX pages on human and agent usefulness with source-weighted 2026 accuracy verification
- **Description:** Usefulness auditor — scores v2 MDX pages on human and agent usefulness with source-weighted 2026 accuracy verification
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual — diagnostic/investigation tool, run on-demand only
- **Usage:** `node operations/scripts/audits/content/quality/audit-v2-usefulness.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `docs-quality-and-freshness-audit.js`

- **Path:** `operations/scripts/audits/content/quality/docs-quality-and-freshness-audit.js`
- **Purpose:** * @description Content freshness audit — checks for TODO/TBD/Coming Soon markers, thin pages, stale content
- **Description:** Content freshness audit — checks for TODO/TBD/Coming Soon markers, thin pages, stale content
- **Workflow callers:** `audit-health-scan-content-quality.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual
- **Usage:** `node operations/scripts/audits/content/quality/docs-quality-and-freshness-audit.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `veracity` (2)

#### `docs-page-research.js`

- **Path:** `operations/scripts/audits/content/veracity/docs-page-research.js`
- **Purpose:** * @description Docs page research runner — extracts factual claims from docs pages, checks evidence sources, detects contradictions across related pages, and emits manual-first research reports.
- **Description:** Docs page research runner — extracts factual claims from docs pages, checks evidence sources, detects contradictions across related pages, and emits manual-first research reports.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual — experimental research system
- **Usage:** `node operations/scripts/audits/content/veracity/docs-page-research.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `docs-research-adjudication.js`

- **Path:** `operations/scripts/audits/content/veracity/docs-research-adjudication.js`
- **Purpose:** * @description Docs research adjudication ledger — validates, records, and summarizes measured review outcomes for the page-content research workflow so trust decisions are based on real usage rather than intuition.
- **Description:** Docs research adjudication ledger — validates, records, and summarizes measured review outcomes for the page-content research workflow so trust decisions are based on real usage rather than intuition.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** scan
- **Pipeline:** manual — experimental research system
- **Usage:** `node operations/scripts/audits/content/veracity/docs-research-adjudication.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

## validator (14)

### niche: `structure` (13)

#### `check-anchor-usage.js`

- **Path:** `operations/scripts/validators/content/structure/check-anchor-usage.js`
- **Purpose:** * @description Validates same-page anchor links in maintained v2 MDX files against heading IDs on the same page
- **Description:** Validates same-page anchor links in maintained v2 MDX files against heading IDs on the same page
- **Workflow callers:** `validator-health-check-page-structure.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual, ci
- **Usage:** `node operations/scripts/validators/content/structure/check-anchor-usage.js [--json] [--scope <glob>]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-description-quality.js`

- **Path:** `operations/scripts/validators/content/structure/check-description-quality.js`
- **Purpose:** * @description Validates English v2 frontmatter descriptions for SEO length, boilerplate openings, and duplicate reuse
- **Description:** Validates English v2 frontmatter descriptions for SEO length, boilerplate openings, and duplicate reuse
- **Workflow callers:** `validator-health-check-page-structure.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual — diagnostic/investigation tool, run on-demand only
- **Usage:** `node operations/scripts/validators/content/structure/check-description-quality.js [--path <repo-path>] [--strict]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-docs-path-sync.js`

- **Path:** `operations/scripts/validators/content/structure/check-docs-path-sync.js`
- **Purpose:** * @description Docs path sync validator — detects staged page moves that require docs.json or governed path reference rewrites.
- **Description:** Docs path sync validator — detects staged page moves that require docs.json or governed path reference rewrites.
- **Workflow callers:** `validator-health-check-page-structure.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual
- **Usage:** `node operations/scripts/validators/content/structure/check-docs-path-sync.js --staged`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-double-headers.js`

- **Path:** `operations/scripts/validators/content/structure/check-double-headers.js`
- **Purpose:** * @description Detects duplicate body H1 headings and opening paragraphs that repeat frontmatter title or description content.
- **Description:** Detects duplicate body H1 headings and opening paragraphs that repeat frontmatter title or description content.
- **Workflow callers:** `validator-health-check-page-structure.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual → staged .mdx files → exit-code, stdout:violations; --fix → staged .mdx files → edited files
- **Usage:** `node operations/scripts/validators/content/structure/check-double-headers.js [--staged|--file <path>|--files <a,b>] [--fix]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-mdx-safe-markdown.js`

- **Path:** `operations/scripts/validators/content/structure/check-mdx-safe-markdown.js`
- **Purpose:** * @description Validates first-party markdown and MDX content for repo-wide MDX-safe syntax, including parse failures and deterministic unsafe patterns.
- **Description:** Validates first-party markdown and MDX content for repo-wide MDX-safe syntax, including parse failures and deterministic unsafe patterns.
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual
- **Usage:** `node operations/scripts/validators/content/structure/check-mdx-safe-markdown.js [--staged|--files a,b] [--json]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `check-page-endings.js`

- **Path:** `operations/scripts/validators/content/structure/check-page-endings.js`
- **Purpose:** * @description Validates that English v2 MDX pages end with an approved navigational or closing element
- **Description:** Validates that English v2 MDX pages end with an approved navigational or closing element
- **Workflow callers:** `validator-health-check-page-structure.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual → staged .mdx files → exit-code, stdout:violations; --fix → staged .mdx files → TODO comment appended, ci
- **Usage:** `node operations/scripts/validators/content/structure/check-page-endings.js [--fix] [--json]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `enforce-generated-file-banners.js`

- **Path:** `operations/scripts/validators/content/structure/enforce-generated-file-banners.js`
- **Purpose:** * @description Validates "do not edit" banners and i18n parity on generated MDX files. Generator dispatch split to sync-generated-files.js.
- **Description:** Validates "do not edit" banners and i18n parity on generated MDX files. Generator dispatch split to sync-generated-files.js.
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual | pre-commit --staged
- **Usage:** `node operations/scripts/validators/content/structure/enforce-generated-file-banners.js --check [--staged]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `lint-structure.js`

- **Path:** `operations/scripts/validators/content/structure/lint-structure.js`
- **Purpose:** * @description Enforce structural rules on MDX content files.
- **Description:** Enforce structural rules on MDX content files.
- **Workflow callers:** `validator-health-check-page-structure.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual
- **Usage:** `node operations/scripts/validators/content/structure/lint-structure.js [file] [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `regression-bisect.js`

- **Path:** `operations/scripts/validators/content/structure/regression-bisect.js`
- **Purpose:** * @description Uses git bisect with an automated Puppeteer test to binary-search
- **Description:** Uses git bisect with an automated Puppeteer test to binary-search
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual diagnostic tool
- **Usage:** `node operations/scripts/validators/content/structure/regression-bisect.js --route /v2/path --error "ReferenceError" [--good abc123] [--bad HEAD]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `sweep-console-errors.js`

- **Path:** `operations/scripts/validators/content/structure/sweep-console-errors.js`
- **Purpose:** * @description Visits every v2 route registered in docs.json, captures HTTP status,
- **Description:** Visits every v2 route registered in docs.json, captures HTTP status,
- **Workflow callers:** script-only: 3 caller(s)
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual — run once to generate baseline, re-run to update after verified fixes
- **Usage:** `node operations/scripts/validators/content/structure/sweep-console-errors.js [--update-baseline] [--routes /v2/a,/v2/b] [--base-url http://localhost:3000]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `sweep-delta-report.js`

- **Path:** `operations/scripts/validators/content/structure/sweep-delta-report.js`
- **Purpose:** * @description Runs a full-site (or targeted) Puppeteer sweep, loads the existing baseline,
- **Description:** Runs a full-site (or targeted) Puppeteer sweep, loads the existing baseline,
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual — run on demand or on schedule to detect drift
- **Usage:** `node operations/scripts/validators/content/structure/sweep-delta-report.js [--update-baseline] [--routes /v2/a,/v2/b] [--base-url http://localhost:3000]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `test-v2-pages.js`

- **Path:** `operations/scripts/validators/content/structure/test-v2-pages.js`
- **Purpose:** tooling:dev-tools
- **Description:** test v2 pages
- **Workflow callers:** `validator-health-check-page-rendering.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-08
- **Mode:** read-only
- **Pipeline:** P2, P3
- **Usage:** `node operations/scripts/validators/content/structure/test-v2-pages.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `verify-all-pages.js`

- **Path:** `operations/scripts/validators/content/structure/verify-all-pages.js`
- **Purpose:** * @description Loads component-library routes in a headless browser and fails on render, console, or 404 issues.
- **Description:** Loads component-library routes in a headless browser and fails on render, console, or 404 issues.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual — not yet in pipeline
- **Usage:** `node operations/scripts/validators/content/structure/verify-all-pages.js`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `veracity` (1)

#### `docs-fact-registry.js`

- **Path:** `operations/scripts/validators/content/veracity/docs-fact-registry.js`
- **Purpose:** * @description Docs fact registry validator — validates repo-native research claim registries and provides normalized claim-family data for the manual research runner.
- **Description:** Docs fact registry validator — validates repo-native research claim registries and provides normalized claim-family data for the manual research runner.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** check
- **Pipeline:** manual — experimental research system
- **Usage:** `node operations/scripts/audits/content/veracity/docs-fact-registry.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

## remediator (9)

### niche: `repair` (9)

#### `migrate-assets-to-branch.js`

- **Path:** `operations/scripts/remediators/content/repair/migrate-assets-to-branch.js`
- **Purpose:** * @description Reads the media-audit manifest, migrates flagged assets to docs-v2-assets, and rewrites MDX/JSX references to raw GitHub URLs.
- **Description:** Reads the media-audit manifest, migrates flagged assets to docs-v2-assets, and rewrites MDX/JSX references to raw GitHub URLs.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--dry-run` `--verify`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual
- **Usage:** `node operations/scripts/remediators/content/repair/migrate-assets-to-branch.js --manifest workspace/reports/media-audit/media-audit-manifest.json --target migrate_r2,migrate_cloudinary --dry-run`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `quarantine-manager.js`

- **Path:** `operations/scripts/remediators/content/repair/quarantine-manager.js`
- **Purpose:** * @description Quarantine manager — classifies files for quarantine (default) or applies quarantine moves (--apply)
- **Description:** Quarantine manager — classifies files for quarantine (default) or applies quarantine moves (--apply)
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--verify`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual
- **Usage:** `node operations/scripts/remediators/content/repair/quarantine-manager.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `repair-mdx-safe-markdown.js`

- **Path:** `operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js`
- **Purpose:** * @description Auto-repairs deterministic MDX-unsafe markdown patterns across first-party markdown and MDX content.
- **Description:** Auto-repairs deterministic MDX-unsafe markdown patterns across first-party markdown and MDX content.
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--dry-run` `--verify` `--files`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual
- **Usage:** `node operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js --dry-run [--staged|--files a,b]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `repair-page-imports.js`

- **Path:** `operations/scripts/remediators/content/repair/repair-page-imports.js`
- **Purpose:** * @description Repair only proven-safe page import failures from canonical operations scripts while leaving ambiguous import issues unchanged for review.
- **Description:** Repair only proven-safe page import failures from canonical operations scripts while leaving ambiguous import issues unchanged for review.
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--dry-run` `--verify` `--files`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual
- **Usage:** `node operations/scripts/remediators/content/repair/repair-page-imports.js [--dry-run|--write] [--files <paths>] [--output-dir <dir>]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `repair-page-links.js`

- **Path:** `operations/scripts/remediators/content/repair/repair-page-links.js`
- **Purpose:** * @description Repair deterministic page-link path issues from canonical operations scripts while leaving ambiguous targets unchanged for review.
- **Description:** Repair deterministic page-link path issues from canonical operations scripts while leaving ambiguous targets unchanged for review.
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--dry-run` `--verify` `--files`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual
- **Usage:** `node operations/scripts/remediators/content/repair/repair-page-links.js --dry-run --files v2/about --report-dir operations/reports/health/page-links`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `repair-relative-page-hrefs.js`

- **Path:** `operations/scripts/remediators/content/repair/repair-relative-page-hrefs.js`
- **Purpose:** * @description Preserve the legacy relative-href repair command while the canonical implementation lives under repair-page-links.js.
- **Description:** Preserve the legacy relative-href repair command while the canonical implementation lives under repair-page-links.js.
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--verify`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual
- **Usage:** `node operations/scripts/remediators/content/repair/repair-relative-page-hrefs.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `repair-spelling.js`

- **Path:** `operations/scripts/remediators/content/repair/repair-spelling.js`
- **Purpose:** * @description Auto-corrects spelling errors using the shared cspell configuration. Safe, dictionary-based corrections only.
- **Description:** Auto-corrects spelling errors using the shared cspell configuration. Safe, dictionary-based corrections only.
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--dry-run` `--verify` `--files`
- **Last modified:** 2026-04-28
- **Mode:** repair
- **Pipeline:** manual
- **Usage:** `node operations/scripts/remediators/content/repair/repair-spelling.js --dry-run`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `sync-docs-paths.js`

- **Path:** `operations/scripts/remediators/content/repair/sync-docs-paths.js`
- **Purpose:** * @description Docs path sync remediator — applies deterministic docs.json and governed reference rewrites for moved docs pages.
- **Description:** Docs path sync remediator — applies deterministic docs.json and governed reference rewrites for moved docs pages.
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** `--dry-run`
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual
- **Usage:** `node operations/scripts/remediators/content/repair/sync-docs-paths.js --staged --dry-run`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `sync-mintlify-canonical-consumers.js`

- **Path:** `operations/scripts/remediators/content/repair/sync-mintlify-canonical-consumers.js`
- **Purpose:** * @description Repair registered Mintlify consumer surfaces by applying exact path rewrites from the canonical sync registry without broad repo-wide content mutation.
- **Description:** Repair registered Mintlify consumer surfaces by applying exact path rewrites from the canonical sync registry without broad repo-wide content mutation.
- **Workflow callers:** script-only: 1 caller(s)
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** repair
- **Pipeline:** manual
- **Usage:** `node operations/scripts/remediators/content/repair/sync-mintlify-canonical-consumers.js [--staged] [--check|--write] [--stage] [--json]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

## dispatch (5)

### niche: `health` (2)

#### `page-integrity-dispatch.js`

- **Path:** `operations/scripts/dispatch/content/health/page-integrity-dispatch.js`
- **Purpose:** * @description Orchestrate the page-integrity family from canonical operations scripts so audit, repair, rerun, and report publication share one stable workflow contract.
- **Description:** Orchestrate the page-integrity family from canonical operations scripts so audit, repair, rerun, and report publication share one stable workflow contract.
- **Workflow callers:** `audit-health-scan-page-integrity.yml`
- **Script callers:** 1 other script(s)
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** manual, P6
- **Usage:** `node operations/scripts/dispatch/content/health/page-integrity-dispatch.js [--staged|--files <paths>|--tab <tab>] [--strict] [--no-repair] [--issue-mode off|plan] [--output-dir <dir>]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `page-integrity-rolling-issue.js`

- **Path:** `operations/scripts/dispatch/content/health/page-integrity-rolling-issue.js`
- **Purpose:** * @description Provide a stable rolling-issue contract for page-integrity dispatch runs so unresolved link and import failures stay visible in GitHub automation.
- **Description:** Provide a stable rolling-issue contract for page-integrity dispatch runs so unresolved link and import failures stay visible in GitHub automation.
- **Workflow callers:** `audit-health-scan-page-integrity.yml`
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** manual -- library module
- **Usage:** `node operations/scripts/dispatch/content/health/page-integrity-rolling-issue.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

### niche: `veracity` (3)

#### `docs-page-research-pr-report.js`

- **Path:** `operations/scripts/dispatch/content/veracity/docs-page-research-pr-report.js`
- **Purpose:** * @description Docs page research PR report — runs the fact-check research runner on changed docs pages and emits an advisory PR artifact summarizing claim families, contradictions, unresolved factual risk, and propagation follow-up.
- **Description:** Docs page research PR report — runs the fact-check research runner on changed docs pages and emits an advisory PR artifact summarizing claim families, contradictions, unresolved factual risk, and propagation follow-up.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--verify` `--files`
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** manual — experimental advisory PR integration, non-blocking
- **Usage:** `node operations/scripts/dispatch/content/veracity/docs-page-research-pr-report.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `docs-research-packet.js`

- **Path:** `operations/scripts/dispatch/content/veracity/docs-research-packet.js`
- **Purpose:** * @description Docs research packet generator — derives nav, manifest, or explicit path scope; runs the research stack tranche-by-tranche; and writes reusable packet reports plus a master rollup.
- **Description:** Docs research packet generator — derives nav, manifest, or explicit path scope; runs the research stack tranche-by-tranche; and writes reusable packet reports plus a master rollup.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** `--files`
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** manual — packet generator for research review tranches
- **Usage:** `node operations/scripts/dispatch/content/veracity/docs-research-packet.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---

#### `orchestrator-guides-research-review.js`

- **Path:** `operations/scripts/dispatch/content/veracity/orchestrator-guides-research-review.js`
- **Purpose:** * @description Orchestrator guides research review packet wrapper — delegates to the generic docs-research-packet engine with the live Orchestrators Guides nav scope and legacy default output root.
- **Description:** Orchestrator guides research review packet wrapper — delegates to the generic docs-research-packet engine with the live Orchestrators Guides nav scope and legacy default output root.
- **Workflow callers:** **ORPHAN — no caller**
- **Capabilities:** (no flags)
- **Last modified:** 2026-04-09
- **Mode:** dispatch
- **Pipeline:** manual — packet generator compatibility wrapper
- **Usage:** `node operations/scripts/audits/content/veracity/orchestrator-guides-research-review.js [flags]`

| Verdict | SME notes |
|---|---|
| _(pending)_ | _(pending)_ |

---


## Orphan summary (15)

Scripts with no workflow caller and no other script caller. Candidates for archive.

- `operations/scripts/audits/content/health/page-imports-audit.js` — * @description Audit page-reachable import health from canonical operations scripts, with stable outputs under operations/reports/health/page-imports.
- `operations/scripts/audits/content/quality/audit-copy-patterns.js` — * @description Aggregate copy pattern violations across a tab or full v2 tree and emit a diagnostic report.
- `operations/scripts/audits/content/quality/audit-media-assets.js` — * @description Audits repo media assets, references, ignore leakage, and externalized asset branch inventory.
- `operations/scripts/audits/content/quality/audit-python.py` — # @description Python page audit utility — validates routed docs files, snippet imports, and internal links, then writes page-audit reports
- `operations/scripts/audits/content/quality/audit-v2-usefulness.js` — * @description Usefulness auditor — scores v2 MDX pages on human and agent usefulness with source-weighted 2026 accuracy verification
- `operations/scripts/audits/content/veracity/docs-page-research.js` — * @description Docs page research runner — extracts factual claims from docs pages, checks evidence sources, detects contradictions across related pages, and emits manual-first research reports.
- `operations/scripts/audits/content/veracity/docs-research-adjudication.js` — * @description Docs research adjudication ledger — validates, records, and summarizes measured review outcomes for the page-content research workflow so trust decisions are based on real usage rather than intuition.
- `operations/scripts/dispatch/content/veracity/docs-page-research-pr-report.js` — * @description Docs page research PR report — runs the fact-check research runner on changed docs pages and emits an advisory PR artifact summarizing claim families, contradictions, unresolved factual risk, and propagation follow-up.
- `operations/scripts/dispatch/content/veracity/docs-research-packet.js` — * @description Docs research packet generator — derives nav, manifest, or explicit path scope; runs the research stack tranche-by-tranche; and writes reusable packet reports plus a master rollup.
- `operations/scripts/dispatch/content/veracity/orchestrator-guides-research-review.js` — * @description Orchestrator guides research review packet wrapper — delegates to the generic docs-research-packet engine with the live Orchestrators Guides nav scope and legacy default output root.
- `operations/scripts/remediators/content/repair/migrate-assets-to-branch.js` — * @description Reads the media-audit manifest, migrates flagged assets to docs-v2-assets, and rewrites MDX/JSX references to raw GitHub URLs.
- `operations/scripts/validators/content/structure/regression-bisect.js` — * @description Uses git bisect with an automated Puppeteer test to binary-search
- `operations/scripts/validators/content/structure/sweep-delta-report.js` — * @description Runs a full-site (or targeted) Puppeteer sweep, loads the existing baseline,
- `operations/scripts/validators/content/structure/verify-all-pages.js` — * @description Loads component-library routes in a headless browser and fails on render, console, or 404 issues.
- `operations/scripts/validators/content/veracity/docs-fact-registry.js` — * @description Docs fact registry validator — validates repo-native research claim registries and provides normalized claim-family data for the manual research runner.
