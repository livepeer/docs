# Script audit — health concern

Generated 2026-05-24

**57 scripts** in this concern.

## audit (10)

### `operations/scripts/audits/content/quality/audit-copy-patterns.js`

**Niche:** quality

**Purpose:** Audit aggregate copy pattern violations across a tab or full v2 tree and emit a diagnostic report.

**Description:** Aggregate copy pattern violations across a tab or full v2 tree and emit a diagnostic report.

**Scope:** single-domain, v2-content, generated-output

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/content-quality.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/content/quality/audit-media-assets.js`

**Niche:** quality

**Purpose:** Audits repo media assets, references, ignore leakage, and externalized asset branch inventory.

**Description:** Audits repo media assets, references, ignore leakage, and externalized asset branch inventory.

**Scope:** operations/scripts, workspace/reports/media-audit

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/content/quality/audit-python.py`

**Niche:** quality

**Purpose:** Validates routed docs files, snippet imports, and internal links, then writes page-audit reports

**Description:** Python page audit utility — validates routed docs files, snippet imports, and internal links, then writes page-audit reports

**Scope:** docs.json, v2, snippets, workspace/reports/page-audits

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/audits/governance/repo/audit-tasks-folders.js`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/content/quality/audit-v2-usefulness.js`

**Niche:** quality

**Purpose:** Audit scores v2 MDX pages on human and agent usefulness with source-weighted 2026 accuracy verification

**Description:** Usefulness auditor — scores v2 MDX pages on human and agent usefulness with source-weighted 2026 accuracy verification

**Scope:** operations/scripts, v2, workspace/reports, tools/config

**Reads (1):** `workspace/reports/quality-accessibility/docs-usefulness/latest`

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/audits/content/quality/docs-quality-and-freshness-audit.js`, `docs-guide/tooling/lpd-cli.mdx`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/_workspace/02_Design-Specification/07_Implementation-Considerations/02_14.-Brand-&-Copy/index.md`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/content/health/audit-wcag.js`

**Niche:** wcag

**Purpose:** Scheduled WCAG accessibility scan across all v2 pages

**Description:** Pattern D scan-report-act. Runs the WCAG audit engine in --no-fix --full mode, writes report to workspace/reports/health/wcag/, and emits a structured JSON summary on stdout so the workflow can route findings (rolling issue create/update/close).

**Scope:** v2 MDX pages

**Reads (2):** `operations/tests/integration/v2-wcag-audit.js`, `workspace/reports/health/wcag`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/content/health/dispatch-wcag.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/content/veracity/docs-page-research.js`

**Niche:** veracity

**Purpose:** Extracts factual claims from docs pages, checks evidence sources, detects contradictions across related pages, and emits manual-first research reports.

**Description:** Docs page research runner — extracts factual claims from docs pages, checks evidence sources, detects contradictions across related pages, and emits manual-first research reports.

**Scope:** operations/scripts, workspace/research/claims operations/tests/unit/docs-page-research.test.js, workspace/reports/repo-ops

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/dispatch/content/veracity/docs-research-packet.js`, `operations/scripts/dispatch/content/veracity/docs-page-research-pr-report.js`, `docs-guide/tooling/ai-tools.mdx`, `docs-guide/tooling/research-review-packet-plan-template.md`, `docs-guide/catalog/scripts-catalog.mdx` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/content/quality/docs-quality-and-freshness-audit.js`

**Niche:** quality

**Purpose:** Checks for TODO/TBD/Coming Soon markers, thin pages, stale content

**Description:** Content freshness audit — checks for TODO/TBD/Coming Soon markers, thin pages, stale content

**Scope:** operations/scripts, v2, workspace/reports/quality-accessibility

**Reads (2):** `workspace/reports/quality-accessibility/docs-usefulness/latest/run-metadata.json`, `v2`

**Writes (0):** _(none detected)_

**Callers (9):** `operations/scripts/dispatch/content/health/dispatch-content-quality.js`, `operations/scripts/remediators/content/repair/quarantine-manager.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/policies/skill-pipeline-map.mdx`, `docs-guide/_workspace/02_Design-Specification/07_Implementation-Considerations/02_14.-Brand-&-Copy/index.md` _(+4 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/content/veracity/docs-research-adjudication.js`

**Niche:** veracity

**Purpose:** Validates, records, and summarizes measured review outcomes for the page-content research workflow so trust decisions are based on real usage rather than intuition.

**Description:** Docs research adjudication ledger — validates, records, and summarizes measured review outcomes for the page-content research workflow so trust decisions are based on real usage rather than intuition.

**Scope:** operations/scripts, workspace/research operations/tests/unit/docs-research-adjudication.test.js, workspace/reports/repo-ops, docs-guide/frameworks/research-skill-workflow.mdx

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/dispatch/content/veracity/docs-research-packet.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/frameworks/research-skill-workflow.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/content/health/page-imports-audit.js`

**Niche:** health

**Purpose:** Audit page-reachable import health from canonical operations scripts, with stable outputs under operations/reports/health/page-imports.

**Description:** Audit page-reachable import health from canonical operations scripts, with stable outputs under operations/reports/health/page-imports.

**Scope:** operations/scripts, operations/reports/health/page-imports, v2 page import graph

**Reads (3):** `operations/reports/health/page-imports`, `snippets/composables/pages/shared`, `operations/scripts/automations/content/data/fetching/fetch-external-docs.sh`

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/dispatch/content/health/dispatch-page-integrity.js`, `operations/scripts/script-index.md`, `docs-guide/tooling/lpd-cli.mdx`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/content-quality.mdx` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/audits/content/health/page-links-audit.js`

**Niche:** health

**Purpose:** Audit page-facing link health from canonical operations scripts, with stable outputs under operations/reports/health/page-links.

**Description:** Audit page-facing link health from canonical operations scripts, with stable outputs under operations/reports/health/page-links.

**Scope:** operations/scripts, operations/reports/health/page-links, v2 docs page surfaces

**Reads (3):** `v2/pages`, `v2`, `operations/reports/health/page-links`

**Writes (0):** _(none detected)_

**Callers (8):** `operations/scripts/config/docs-path-sync.js`, `operations/scripts/dispatch/content/health/dispatch-page-integrity.js`, `operations/scripts/validators/content/health/check-broken-links.js`, `operations/scripts/script-index.md`, `docs-guide/tooling/lpd-cli.mdx` _(+3 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## dispatch (14)

### `operations/scripts/dispatch/content/health/dispatch-content-quality.js`

**Niche:** content-quality

**Purpose:** Pipeline dispatcher for content quality (TODO/TBD markers, thin pages, stale content) — full lifecycle

**Description:** Mode-driven orchestrator over docs-quality-and-freshness-audit.js. PR mode runs audit on staged with advisory comment. Scheduled mode runs full audit, applies deterministic fixes via repair-content-quality (Phase 3.X), escalates residual via rolling-issue.

**Scope:** v2 MDX pages

**Reads (3):** `tools/lib/governance/pipeline-mode`, `operations/scripts/audits/content/quality/docs-quality-and-freshness-audit.js`, `operations/scripts/remediators/content/quality/repair-content-quality.js`

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/dispatch/content/health/dispatch-health-repair.js`, `operations/scripts/dispatch/content/health/dispatch-health-scan.js`, `operations/scripts/dispatch/content/health/dispatch-health-check.js`, `operations/scripts/remediators/content/quality/repair-content-quality.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/health/dispatch-health-check.js`

**Niche:** meta

**Purpose:** PR-time meta dispatcher: bundles all health pipelines in --mode pr

**Description:** Runs every health pipeline dispatcher with --mode pr in sequence. Aggregates exit codes. Used by dispatch-health.yml on pull_request events.

**Scope:** all health pipelines

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (3):** `.github/workflows/dispatch-health.yml`, `docs-guide/frameworks/dispatch-pipelines.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/health/dispatch-health-repair.js`

**Niche:** meta

**Purpose:** Manual meta dispatcher: bundles health pipelines in --mode manual (repair only)

**Description:** Runs repair-only mode across health pipelines that support remediation. Opens PR with verified fixes.

**Scope:** all health pipelines with remediators

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/dispatch-health.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/health/dispatch-health-scan.js`

**Niche:** meta

**Purpose:** Scheduled meta dispatcher: bundles all health pipelines in --mode scheduled

**Description:** Runs every health pipeline with --mode scheduled. Full audit + repair (if --write) + verify + rolling issue routing.

**Scope:** all health pipelines

**Reads (1):** `tools/lib/governance/pipeline-mode`

**Writes (0):** _(none detected)_

**Callers (2):** `.github/workflows/dispatch-health.yml`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/health/dispatch-openapi-reference.js`

**Niche:** openapi-reference

**Purpose:** Pipeline dispatcher for OpenAPI reference drift (full lifecycle)

**Description:** Wraps the existing OpenAPI audit + reference regen flow. PR mode: drift check only. Scheduled: full audit + open PR if drift. Manual: regenerate reference docs from canonical spec.

**Scope:** v2/api-reference, openapi specs

**Reads (3):** `tools/lib/governance/pipeline-mode`, `operations/tests/integration/openapi-reference-audit.js`, `operations/scripts/remediators/content/health/repair-openapi-reference.js`

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/dispatch/content/health/dispatch-health-scan.js`, `operations/scripts/dispatch/content/health/dispatch-health-check.js`, `operations/scripts/remediators/content/health/repair-openapi-reference.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/health/dispatch-page-integrity.js`

**Niche:** page-integrity

**Purpose:** Pipeline dispatcher for page-integrity (links + imports + MDX safety) — full lifecycle

**Description:** Mode-driven orchestrator wrapping the existing page-integrity-dispatch.js chain. --mode pr runs audits on staged + previews repairs. --mode scheduled runs full audit + repair --verify + rolling issue for residual. --mode manual runs repairs only. Replaces direct workflow calls to page-integrity-dispatch.js with the canonical pipeline contract.

**Scope:** v2 MDX pages

**Reads (7):** `tools/lib/governance/pipeline-mode`, `operations/scripts/audits/content/health/page-links-audit.js`, `operations/scripts/audits/content/health/page-imports-audit.js`, `operations/scripts/remediators/content/repair/repair-page-links.js`, `operations/scripts/remediators/content/repair/repair-page-imports.js`, `operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js` _(+1 more)_

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/config/docs-path-sync.js`, `operations/scripts/dispatch/content/health/dispatch-health-repair.js`, `operations/scripts/dispatch/content/health/dispatch-health-scan.js`, `operations/scripts/dispatch/content/health/dispatch-health-check.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/health/dispatch-page-rendering.js`

**Niche:** page-rendering

**Purpose:** Pipeline dispatcher for page rendering (Puppeteer sweep + broken-link check) — full lifecycle

**Description:** Mode-driven orchestrator over test-v2-pages.js and check-broken-links.js. Render errors typically need human review, so the cycle is: detect (Puppeteer + link check) → repair (broken-link replacements where deterministic) → escalate via rolling-issue.

**Scope:** v2 MDX pages

**Reads (4):** `tools/lib/governance/pipeline-mode`, `operations/scripts/validators/content/structure/test-v2-pages.js`, `operations/scripts/validators/content/health/check-broken-links.js`, `operations/scripts/remediators/content/health/repair-broken-links.js`

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/dispatch/content/health/dispatch-health-check.js`, `operations/scripts/remediators/content/health/repair-broken-links.js`, `operations/scripts/validators/content/health/check-broken-links.js`, `operations/scripts/validators/content/structure/test-v2-pages.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/health/dispatch-page-structure.js`

**Niche:** page-structure

**Purpose:** Pipeline dispatcher for page structure (headers, anchors, descriptions, endings, MDX safety) — full lifecycle

**Description:** Mode-driven orchestrator over the 8 structure validators and their paired remediators. PR mode runs validators in --staged and posts advisory. Scheduled mode runs validators repo-wide, applies safe repairs, escalates residual via rolling-issue. Manual mode runs only remediators with --verify.

**Scope:** v2 MDX pages

**Reads (6):** `tools/lib/governance/pipeline-mode`, `operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js`, `operations/scripts/remediators/content/repair/sync-docs-paths.js`, `operations/scripts/remediators/content/structure/repair-anchor-usage.js`, `operations/scripts/remediators/content/structure/repair-description-quality.js`, `operations/scripts/remediators/content/structure/repair-lint-structure.js`

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/dispatch/content/health/dispatch-health-repair.js`, `operations/scripts/dispatch/content/health/dispatch-health-check.js`, `operations/scripts/remediators/content/structure/repair-description-quality.js`, `operations/scripts/remediators/content/structure/repair-anchor-usage.js`, `operations/scripts/remediators/content/structure/repair-lint-structure.js` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/health/dispatch-wcag.js`

**Niche:** wcag

**Purpose:** Pipeline dispatcher for WCAG accessibility (full lifecycle)

**Description:** Mode-driven pipeline orchestrator. --mode pr runs check-wcag (validator) and posts advisory. --mode scheduled runs audit-wcag (engine full scan) + repair-wcag (--write --verify) + rolling issue for residual. --mode manual runs repair-wcag with --verify against staged or specified files. Independently runnable locally.

**Scope:** v2 MDX pages

**Reads (4):** `tools/lib/governance/pipeline-mode`, `operations/scripts/validators/content/health/check-wcag.js`, `operations/scripts/audits/content/health/audit-wcag.js`, `operations/scripts/remediators/content/health/repair-wcag.js`

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/dispatch/content/health/dispatch-health-repair.js`, `operations/scripts/dispatch/content/health/dispatch-health-scan.js`, `operations/scripts/dispatch/content/health/dispatch-health-check.js`, `docs-guide/frameworks/dispatch-pipelines.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/veracity/docs-page-research-pr-report.js`

**Niche:** veracity

**Purpose:** Runs the fact-check research runner on changed docs pages and emits an advisory PR artifact summarizing claim families, contradictions, unresolved factual risk, and propagation follow-up.

**Description:** Docs page research PR report — runs the fact-check research runner on changed docs pages and emits an advisory PR artifact summarizing claim families, contradictions, unresolved factual risk, and propagation follow-up.

**Scope:** operations/scripts, workspace/research/claims, workspace/reports/repo-ops operations/tests/unit/docs-page-research-pr-report.test.js

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/dispatch/content/veracity/docs-research-packet.js`, `operations/scripts/dispatch/ai/codex/create-codex-pr.js`, `docs-guide/tooling/ai-tools.mdx`, `docs-guide/tooling/research-review-packet-plan-template.md`, `docs-guide/catalog/scripts-catalog.mdx` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/veracity/docs-research-packet.js`

**Niche:** veracity

**Purpose:** Dispatch the derives nav, manifest, or explicit path scope; runs the research stack tranche-by-tranche; and writes reusable packet reports plus a master rollup.

**Description:** Docs research packet generator — derives nav, manifest, or explicit path scope; runs the research stack tranche-by-tranche; and writes reusable packet reports plus a master rollup.

**Scope:** operations/scripts, workspace/reports, tools/config/scoped-navigation, workspace/research operations/tests/unit/docs-research-packet.test.js operations/tests/unit/orchestrator-guides-research-review.test.js

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `docs-guide/tooling/ai-tools.mdx`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/frameworks/research-skill-workflow.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/veracity/orchestrator-guides-research-review.js`

**Niche:** veracity

**Purpose:** Dispatch the delegates to the generic docs-research-packet engine with the live Orchestrators Guides nav scope and legacy default output root.

**Description:** Orchestrator guides research review packet wrapper — delegates to the generic docs-research-packet engine with the live Orchestrators Guides nav scope and legacy default output root.

**Scope:** operations/scripts, workspace/reports/orchestrator-guides-review, tools/config/scoped-navigation/docs-gate-work.json, workspace/research operations/tests/unit/orchestrator-guides-research-review.test.js

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/health/page-integrity-dispatch.js`

**Niche:** health

**Purpose:** Dispatch the orchestrate the page-integrity family from canonical operations scripts so audit, repair, rerun, and report publication share one stable workflow contract.

**Description:** Orchestrate the page-integrity family from canonical operations scripts so audit, repair, rerun, and report publication share one stable workflow contract.

**Scope:** operations/scripts, operations/reports/health/page-integrity, .github/workflows

**Reads (1):** `operations/reports/health/page-integrity`

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/dispatch/content/health/page-integrity-rolling-issue.js`, `operations/scripts/dispatch/content/health/dispatch-page-integrity.js`, `operations/scripts/script-index.md`, `docs-guide/tooling/lpd-cli.mdx`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/dispatch/content/health/page-integrity-rolling-issue.js`

**Niche:** health

**Purpose:** Provide a stable rolling-issue contract for page-integrity dispatch runs so unresolved link and import failures stay visible in GitHub automation.

**Description:** Provide a stable rolling-issue contract for page-integrity dispatch runs so unresolved link and import failures stay visible in GitHub automation.

**Scope:** operations/scripts, .github/workflows, operations/tests/unit

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/script-index.md`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## integrator (1)

### `operations/scripts/config/docs-path-sync.js`

**Niche:** page-integrity

**Purpose:** Shared library — detect staged page moves/renames, plan deterministic route rewrites across docs.json + every linking surface (v2 MDX, snippets, catalog docs), apply the rewrite plan or report drift

**Description:** Library module imported by page-links-audit.js, precommit-staged-cache.js, and run-all.js. Exports planRewrites(stagedMoves), applyRewrites(plan), checkDrift() so page renames don't leave broken inbound links. Pairs with the page-integrity pipeline (dispatch-page-integrity.js indirectly via page-links-audit).

**Scope:** docs.json + v2/ MDX + snippets/ + catalogs that reference v2/ routes

**Reads (3):** `v1`, `v2/pages`, `v2`

**Writes (0):** _(none detected)_

**Callers (14):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/health/dispatch-page-structure.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `operations/scripts/validators/content/structure/check-docs-path-sync.js`, `docs-guide/canonical/collation-data/Mintlify/index.md` _(+9 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## remediator (16)

### `operations/scripts/remediators/content/repair/migrate-assets-to-branch.js`

**Niche:** repair

**Purpose:** Reads the media-audit manifest, migrates flagged assets to docs-v2-assets, and rewrites MDX/JSX references to raw GitHub URLs.

**Description:** Reads the media-audit manifest, migrates flagged assets to docs-v2-assets, and rewrites MDX/JSX references to raw GitHub URLs.

**Scope:** full-repo

**Reads (1):** `operations/tests`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/config/remediation-verify-registry.json`, `docs-guide/catalog/scripts-catalog.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/repair/quarantine-manager.js`

**Niche:** repair

**Purpose:** Classifies files for quarantine (default) or applies quarantine moves (--apply)

**Description:** Quarantine manager — classifies files for quarantine (default) or applies quarantine moves (--apply)

**Scope:** operations/scripts, workspace/reports/repo-ops, workspace/quarantine

**Reads (4):** `workspace/quarantine/repo-audit`, `operations/scripts`, `operations/tests`, `workspace`

**Writes (0):** _(none detected)_

**Callers (7):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `operations/scripts/dispatch/governance/repo/repo-audit-orchestrator.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/policies/cleanup-quarantine-policy.mdx` _(+2 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/structure/repair-anchor-usage.js`

**Niche:** structure

**Purpose:** Repair broken in-page anchor links by recomputing heading slugs and fuzzy-matching anchor text

**Description:** Pairs with check-anchor-usage.js. For each broken anchor link [text](#slug), reads the target page's H1-H6 headings, computes their slugs, and if a unique fuzzy match exists (>= 0.8 similarity), rewrites the anchor. Ambiguous matches stay flagged for human review.

**Scope:** v2 MDX pages

**Reads (1):** `v2`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/content/health/dispatch-page-structure.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/health/repair-broken-links.js`

**Niche:** page-rendering

**Purpose:** Repair broken internal links by recomputing canonical paths from docs.json

**Description:** Pairs with check-broken-links. Reads page-links-audit findings, attempts canonical path rewrites for internal v2/ links that match a moved/renamed page registered in docs.json. External link repairs (redirect resolution) are not in scope here.

**Scope:** v2 MDX pages (internal links only)

**Reads (1):** `operations/scripts/remediators/content/repair/repair-page-links.js`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/content/health/dispatch-page-rendering.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/quality/repair-content-quality.js`

**Niche:** quality

**Purpose:** Repair deterministic content quality findings (orphan TODO markers, missing trailing newlines on changelogs)

**Description:** Pairs with docs-quality-and-freshness-audit. Removes orphan single-line TODO/FIXME comments at end of file. Anything that requires judgment (thin pages, stale content) escalates via rolling-issue.

**Scope:** v2 MDX pages

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/content/health/dispatch-content-quality.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/structure/repair-description-quality.js`

**Niche:** structure

**Purpose:** Repair v2 frontmatter description quality (trim boilerplate openings, normalise length)

**Description:** Pairs with check-description-quality.js. Trims boilerplate openings ("This page describes", "This document covers", "Learn how to"), normalises trailing punctuation, flags too-short (<80) and too-long (>160) descriptions for human review.

**Scope:** v2 MDX frontmatter

**Reads (1):** `v2`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/content/health/dispatch-page-structure.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/structure/repair-lint-structure.js`

**Niche:** structure

**Purpose:** Repair structural lint findings (trailing whitespace, missing trailing newline, doubled blank lines)

**Description:** Pairs with lint-structure.js. Applies deterministic whitespace + spacing fixes only. Anything requiring judgment (heading-level reorganisation) stays flagged for human review.

**Scope:** v2 MDX pages

**Reads (1):** `v2`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/content/health/dispatch-page-structure.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js`

**Niche:** repair

**Purpose:** Repair auto-repairs deterministic MDX-unsafe markdown patterns across first-party markdown and MDX content.

**Description:** Auto-repairs deterministic MDX-unsafe markdown patterns across first-party markdown and MDX content.

**Scope:** full-repo

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (7):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/health/dispatch-page-structure.js`, `operations/scripts/dispatch/content/health/dispatch-page-integrity.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/catalog/scripts-catalog.mdx` _(+2 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/health/repair-openapi-reference.js`

**Niche:** openapi-reference

**Purpose:** Regenerate OpenAPI reference docs from canonical spec source, open PR on drift

**Description:** Pairs with openapi-reference-audit. On detected drift between live API spec and committed reference docs, invokes generate-api-docs.sh against each tracked spec to regenerate the v2 API reference pages. PR is opened by the workflow layer after successful regen.

**Scope:** v2/gateways/.../api-reference/, ai/worker/api/openapi.yaml

**Reads (1):** `operations/scripts/generators/content/reference/generate-api-docs.sh`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/content/health/dispatch-openapi-reference.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/repair/repair-page-imports.js`

**Niche:** repair

**Purpose:** Repair only proven-safe page import failures from canonical operations scripts while leaving ambiguous import issues unchanged for review.

**Description:** Repair only proven-safe page import failures from canonical operations scripts while leaving ambiguous import issues unchanged for review.

**Scope:** operations/scripts, operations/reports/health/page-imports

**Reads (1):** `operations/reports/health/page-imports`

**Writes (0):** _(none detected)_

**Callers (7):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/health/dispatch-page-integrity.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `operations/scripts/script-index.md`, `docs-guide/catalog/scripts-catalog.mdx` _(+2 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/repair/repair-page-links.js`

**Niche:** repair

**Purpose:** Repair deterministic page-link path issues from canonical operations scripts while leaving ambiguous targets unchanged for review.

**Description:** Repair deterministic page-link path issues from canonical operations scripts while leaving ambiguous targets unchanged for review.

**Scope:** v2 publishable docs pages, operations/reports/health/page-links

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (9):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/health/dispatch-page-integrity.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `operations/scripts/remediators/content/health/repair-broken-links.js`, `operations/scripts/remediators/content/repair/repair-relative-page-hrefs.js` _(+4 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/repair/repair-relative-page-hrefs.js`

**Niche:** repair

**Purpose:** Repair preserve the legacy relative-href repair command while the canonical implementation lives under repair-page-links.js.

**Description:** Preserve the legacy relative-href repair command while the canonical implementation lives under repair-page-links.js.

**Scope:** operations/scripts/remediators/content/repair, operations/reports/health/page-links

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `operations/scripts/script-index.md`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/content-quality.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/repair/repair-spelling.js`

**Niche:** repair

**Purpose:** Repair auto-corrects spelling errors using the shared cspell configuration. Safe, dictionary-based corrections only.

**Description:** Auto-corrects spelling errors using the shared cspell configuration. Safe, dictionary-based corrections only.

**Scope:** v2-content

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (7):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/brand/dispatch-spelling.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/copy-brand.mdx` _(+2 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/health/repair-wcag.js`

**Niche:** wcag

**Purpose:** Apply deterministic WCAG accessibility fixes to v2 MDX pages

**Description:** Pattern E remediator. Wraps the WCAG audit engine's --fix mode to apply safe accessibility autofixes (heading hierarchy, alt text, contrast tokens). Supports --dry-run preview, --verify per-file revert on regression, and --files scoping. Paired with check-wcag in remediation-verify-registry.

**Scope:** v2 MDX pages

**Reads (3):** `operations/tests/integration/v2-wcag-audit.js`, `workspace/reports/health/wcag`, `operations/scripts/validators/content/health/check-wcag.js`

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/health/dispatch-wcag.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/frameworks/dispatch-pipelines.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/repair/sync-docs-paths.js`

**Niche:** repair

**Purpose:** Applies deterministic docs.json and governed reference rewrites for moved docs pages.

**Description:** Docs path sync remediator — applies deterministic docs.json and governed reference rewrites for moved docs pages.

**Scope:** staged

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (7):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/health/dispatch-page-structure.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/canonical/collation-data/Mintlify/index.md`, `docs-guide/catalog/scripts-catalog.mdx` _(+2 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/remediators/content/repair/sync-mintlify-canonical-consumers.js`

**Niche:** repair

**Purpose:** Repair registered Mintlify consumer surfaces by applying exact path rewrites from the canonical sync registry without broad repo-wide content mutation.

**Description:** Repair registered Mintlify consumer surfaces by applying exact path rewrites from the canonical sync registry without broad repo-wide content mutation.

**Scope:** docs-guide/canonical/collation-data/Mintlify, docs-guide/contributing, AGENTS.md, .github, .claude, ai-tools, snippets, workspace/plan/active

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (9):** `operations/scripts/config/mintlify-canonical-sync.js`, `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/copy/dispatch-canonical-sync.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `operations/scripts/script-index.md` _(+4 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

## validator (16)

### `operations/scripts/validators/content/structure/check-anchor-usage.js`

**Niche:** structure

**Purpose:** Validates same-page anchor links in maintained v2 MDX files against heading IDs on the same page

**Description:** Validates same-page anchor links in maintained v2 MDX files against heading IDs on the same page

**Scope:** v2-content

**Reads (1):** `v2`

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/dispatch/content/health/dispatch-page-structure.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `operations/scripts/remediators/content/structure/repair-anchor-usage.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/content-quality.mdx` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/health/check-broken-links.js`

**Niche:** page-rendering

**Purpose:** First-party broken-link check (replaces Mintlify integration for advisory PR checks)

**Description:** Delegates to page-links-audit.js which already implements the canonical link health check across v2 pages. This script provides the canonical entry point so dispatchers can call check-broken-links by stable name.

**Scope:** v2 MDX pages

**Reads (1):** `operations/scripts/audits/content/health/page-links-audit.js`

**Writes (0):** _(none detected)_

**Callers (2):** `operations/scripts/dispatch/content/health/dispatch-page-rendering.js`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/structure/check-description-quality.js`

**Niche:** structure

**Purpose:** Validates English v2 frontmatter descriptions for SEO length, boilerplate openings, and duplicate reuse

**Description:** Validates English v2 frontmatter descriptions for SEO length, boilerplate openings, and duplicate reuse

**Scope:** operations/scripts/validators/content, v2

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (7):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/health/dispatch-page-structure.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `operations/scripts/remediators/content/structure/repair-description-quality.js`, `docs-guide/catalog/scripts-catalog.mdx` _(+2 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/structure/check-docs-path-sync.js`

**Niche:** structure

**Purpose:** Detects staged page moves that require docs.json or governed path reference rewrites.

**Description:** Docs path sync validator — detects staged page moves that require docs.json or governed path reference rewrites.

**Scope:** staged

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (10):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/health/dispatch-page-structure.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/canonical/collation-data/Mintlify/index.md`, `docs-guide/catalog/scripts-catalog.mdx` _(+5 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/structure/check-double-headers.js`

**Niche:** structure

**Purpose:** Detects duplicate body H1 headings and opening paragraphs that repeat frontmatter title or description content.

**Description:** Detects duplicate body H1 headings and opening paragraphs that repeat frontmatter title or description content.

**Scope:** v2-content

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/dispatch/content/health/dispatch-page-structure.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/content-quality.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/structure/check-mdx-safe-markdown.js`

**Niche:** structure

**Purpose:** Validates first-party markdown and MDX content for repo-wide MDX-safe syntax, including parse failures and deterministic unsafe patterns.

**Description:** Validates first-party markdown and MDX content for repo-wide MDX-safe syntax, including parse failures and deterministic unsafe patterns.

**Scope:** full-repo

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/health/dispatch-page-structure.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/content-quality.mdx` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/structure/check-page-endings.js`

**Niche:** structure

**Purpose:** Validates that English v2 MDX pages end with an approved navigational or closing element

**Description:** Validates that English v2 MDX pages end with an approved navigational or closing element

**Scope:** operations/scripts/validators/content, v2

**Reads (1):** `v2`

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/dispatch/content/health/dispatch-page-structure.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/content-quality.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/health/check-wcag.js`

**Niche:** wcag

**Purpose:** WCAG accessibility validation for changed v2 MDX pages

**Description:** PR-time advisory validator. Wraps the WCAG audit engine in --no-fix mode and reports blocking findings (impact level configurable). Exits non-zero if blocking violations are found.

**Scope:** v2 MDX pages

**Reads (1):** `operations/tests/integration/v2-wcag-audit.js`

**Writes (0):** _(none detected)_

**Callers (5):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/health/dispatch-wcag.js`, `operations/scripts/remediators/content/health/repair-wcag.js`, `docs-guide/frameworks/dispatch-pipelines.mdx`, `docs-guide/frameworks/github-actions.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/veracity/docs-fact-registry.js`

**Niche:** veracity

**Purpose:** Validates repo-native research claim registries and provides normalized claim-family data for the manual research runner.

**Description:** Docs fact registry validator — validates repo-native research claim registries and provides normalized claim-family data for the manual research runner.

**Scope:** operations/scripts, workspace/research/claims operations/tests/unit/docs-fact-registry.test.js

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/dispatch/content/veracity/docs-research-packet.js`, `docs-guide/tooling/ai-tools.mdx`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/frameworks/research-skill-workflow.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/structure/enforce-generated-file-banners.js`

**Niche:** structure

**Purpose:** Validates "do not edit" banners and i18n parity on generated MDX files. Generator dispatch split to sync-generated-files.js.

**Description:** Validates "do not edit" banners and i18n parity on generated MDX files. Generator dispatch split to sync-generated-files.js.

**Scope:** docs-guide/catalog, v2

**Reads (1):** `v2`

**Writes (0):** _(none detected)_

**Callers (6):** `operations/scripts/dispatch/content/health/dispatch-page-structure.js`, `operations/scripts/dispatch/governance/pipelines/sync-generated-files.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/policies/source-of-truth-policy.mdx`, `docs-guide/source-of-truth-guide.mdx` _(+1 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/structure/lint-structure.js`

**Niche:** structure

**Purpose:** Enforce structural rules on MDX content files.

**Description:** Enforce structural rules on MDX content files.

**Scope:** staged, changed, v2-content, single-file

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (8):** `operations/scripts/config/remediation-verify-registry.json`, `operations/scripts/dispatch/content/health/dispatch-page-structure.js`, `operations/scripts/dispatch/governance/mdx-render-gate.js`, `operations/scripts/remediators/content/structure/repair-lint-structure.js`, `docs-guide/catalog/scripts-catalog.mdx` _(+3 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/structure/regression-bisect.js`

**Niche:** structure

**Purpose:** Uses git bisect with an automated Puppeteer test to binary-search

**Description:** Uses git bisect with an automated Puppeteer test to binary-search

**Scope:** single route

**Reads (2):** `operations/tests/baselines/console-baseline.json`, `.githooks/server-manager.js`

**Writes (0):** _(none detected)_

**Callers (0):** _(none detected — orphan?)_

**🚩 Auto-flags:**
- orphan-no-caller

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/structure/sweep-console-errors.js`

**Niche:** structure

**Purpose:** Visits every v2 route registered in docs.json, captures HTTP status,

**Description:** Visits every v2 route registered in docs.json, captures HTTP status,

**Scope:** operations/tests/baselines/console-baseline.json

**Reads (2):** `operations/tests/baselines/console-baseline.json`, `.githooks/server-manager.js`

**Writes (0):** _(none detected)_

**Callers (4):** `operations/scripts/dispatch/governance/mdx-render-gate.js`, `operations/scripts/validators/content/structure/regression-bisect.js`, `operations/scripts/validators/content/structure/sweep-delta-report.js`, `.claude/CLAUDE.md`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/structure/sweep-delta-report.js`

**Niche:** structure

**Purpose:** Runs a full-site (or targeted) Puppeteer sweep, loads the existing baseline,

**Description:** Runs a full-site (or targeted) Puppeteer sweep, loads the existing baseline,

**Scope:** operations/tests/baselines/console-baseline.json

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (1):** `operations/scripts/validators/content/structure/sweep-console-errors.js`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/structure/test-v2-pages.js`

**Niche:** page-rendering

**Purpose:** Validate v2 pages render correctly in the Mintlify dev server — launches Puppeteer against http://localhost:3000, navigates each v2/ route, captures console errors, network 404s, and rendering failures so broken pages don't ship

**Description:** Puppeteer-driven browser tester. Reads docs.json for the route list, navigates each in headless Chrome, waits for body content, checks for console errors / network failures / missing components. Used by dispatch-page-rendering.js as the rendering atomic. Also called directly by v2-wcag-audit.js (which loads each page then runs axe-core) and browser.test.js.

**Scope:** docs.json routes → http://localhost:3000/{route} → rendered DOM + console events

**Reads (1):** `operations/tests/baselines/console-baseline.json`

**Writes (1):** `workspace/reports/page-audits/v2-page-test-report.json`

**Callers (11):** `.github/workflows/README-test-v2-pages.md`, `operations/scripts/dispatch/content/health/dispatch-page-rendering.js`, `operations/scripts/README-test-v2-pages.md`, `operations/scripts/validators/content/structure/sweep-console-errors.js`, `operations/scripts/script-index.md` _(+6 more)_

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---

### `operations/scripts/validators/content/structure/verify-all-pages.js`

**Niche:** structure

**Purpose:** Loads component-library routes in a headless browser and fails on render, console, or 404 issues.

**Description:** Loads component-library routes in a headless browser and fails on render, console, or 404 issues.

**Scope:** single-domain

**Reads (0):** _(none detected)_

**Writes (0):** _(none detected)_

**Callers (3):** `operations/scripts/archive/legacy/verify-all-pages.js`, `docs-guide/catalog/scripts-catalog.mdx`, `docs-guide/docs-library/pipelines/content-quality.mdx`

**SME verdict:** `unknown` _(keep | refactor | merge | archive)_

**SME notes:** _(reason for verdict)_

---
