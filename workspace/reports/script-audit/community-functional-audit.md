# Functional audit — 30 community-contribution scripts

> Generated 2026-05-18 / 2026-05-19
> Method changed mid-audit: 2 scripts run-tested, remaining 28 source-only audited.
> Run-test path abandoned after a helper-script revert bug deleted a tracked file; agent spawns blocked by execution guard. Source-only is the safer path for the remaining 28 — the actual run-test becomes part of the community contributor's wire-up work.

**Functional states (run-tested):**
- `works` — ran clean, output matched stated purpose
- `partial` — ran but missing capability or output thin
- `broken` — failed, threw, hung, produced nothing useful

**Functional states (source-only):**
- `source-coherent` — source looks complete, imports resolve, logic flows, JSDoc claims match code
- `source-incomplete` — source missing capability, unclear input/output handling, or TODO markers
- `source-broken` — references missing files/functions, has syntax issues, or is stub-only
- `source-needs-context` — source references external data/secrets/sub-scripts not present
- `source-unclear` — source compiles but intent ambiguous; needs SME read

<CustomDivider />

## Run-tested (2 of 30)

### 1. generate-content-gap-reconciliation.js
- **Path:** `operations/scripts/audits/content/reconciliation/generate-content-gap-reconciliation.js`
- **Command:** `node operations/scripts/audits/content/reconciliation/generate-content-gap-reconciliation.js`
- **Exit:** 0 · **Time:** 1s
- **Output:** Generated `workspace/reports/content-gap/reconciliation.csv` and `reconciliation-summary.md`. Reported 1721 rows (91 BLUEPRINT, 1630 REPO_ONLY).
- **functional_state:** `works`
- **Wire-up path:** Add `--check` mode (verify-without-write); wire to scheduled audit workflow that opens a rolling issue when blueprint vs repo divergence exceeds threshold.

### 2. audit-glossary-gaps.js
- **Path:** `operations/scripts/audits/content/reference/audit-glossary-gaps.js`
- **Command:** `node operations/scripts/audits/content/reference/audit-glossary-gaps.js`
- **Exit:** 0 · **Time:** 0s
- **Output:** Scanned 1010 MDX files against 477 known terms. Found 1556 gap candidates (min occurrences: 2). Wrote `workspace/reports/_local/glossary-gap-report.json`.
- **functional_state:** `works`
- **Wire-up path:** Wire to scheduled scan with rolling issue; pair with `generate-glossary-companions.js` so SMEs can update term lists and regenerate companion JSONs in one flow.

<CustomDivider />

## Source-audited (28 of 30)

### Audits — maintenance (3)

#### 3. audit-icon-usage.js
- **Path:** `operations/scripts/audits/content/reference/audit-icon-usage.js`
- **LOC:** 288 · **main():** yes · **exits/throws:** 1 · **TODOs:** 0
- **Inputs:** scans v2 + docs-guide MDX, reads `snippets/data/reference-maps/icon-map.jsx` for canonical icon list
- **Outputs:** `workspace/reports/_local/icon-usage-report.json` (default), optional `--md` companion
- **Source-state:** `source-coherent` — clean single-file scanner, repo-root detection robust, flag parsing simple, optional `--unmapped-only` and `--min-count` filters
- **Wire-up path:** Add `--check` mode (compare against snapshot, fail on new unmapped icons); wire to PR validator on icon-touching diffs or scheduled scan with rolling issue.

#### 4. terminology-search.js
- **Path:** `operations/scripts/audits/content/reference/terminology-search.js`
- **LOC:** 591 · **async main():** yes · **exits/throws:** 1 · **TODOs:** 0
- **Inputs:** scans all MDX pages for candidate Livepeer/video/AI/blockchain terms; optional LLM evaluation
- **Outputs:** terminology candidates report (location parameterised)
- **Source-state:** `source-needs-context` — pattern matching works as standalone; LLM evaluation path requires API key/config not in repo. Without LLM, output is candidate list only.
- **Wire-up path:** Define standalone (no-LLM) mode for CI; wire to scheduled scan that opens rolling issue when candidate count exceeds threshold. LLM path stays manual SME tool.

#### 5. generate-api-docs.sh
- **Path:** `operations/scripts/generators/content/reference/generate-api-docs.sh`
- **LOC:** 206 · **bash script** · **TODOs:** 0
- **Inputs:** `<openapi-spec> <output-dir> <api-name>` positional args; reads OpenAPI YAML
- **Outputs:** landing page MDX + per-endpoint MDX pages + navigation JSON
- **Source-state:** `source-needs-context` — requires `openapi-spec-yaml` tooling; assumes valid OpenAPI input. Path conventions (`v2/pages/...`) suggest legacy layout; may need path updates for current v2 IA.
- **Wire-up path:** Verify OpenAPI tooling available in CI; update output path conventions; pair with go-livepeer / ai-worker / catalyst OpenAPI sources; wire to scheduled regen on upstream spec changes.

### Audits — health/quality (3)

#### 6. audit-copy-patterns.js
- **Path:** `operations/scripts/audits/content/quality/audit-copy-patterns.js`
- **LOC:** 278 · **run() + module.exports:** yes · **exits/throws:** 2 · **TODOs:** 0
- **Inputs:** v2 MDX tree or single tab; built-in `ESCALATION_MAP` defines violation classes
- **Outputs:** `workspace/reports/copy-governance/` markdown report
- **Source-state:** `source-coherent` — has both CLI and module exports, escalation thresholds defined, clean output path
- **Wire-up path:** Pair with `repair-ownerless-language` / `repair-em-dashes` family in a copy-governance dispatcher; add `--json` output for workflow consumption; wire to PR advisory.

#### 7. audit-media-assets.js
- **Path:** `operations/scripts/audits/content/quality/audit-media-assets.js`
- **LOC:** 989 · **main():** yes · **exits/throws:** 15 · **TODOs:** 0
- **Inputs:** scans repo media assets; checks references, ignore leakage; reads `docs-v2-assets` branch inventory
- **Outputs:** `workspace/reports/media-audit/media-audit-manifest.json` + `media-audit-summary.md`
- **Source-state:** `source-coherent` — large but well-factored; uses `execSync`/`spawnSync` for git operations; expects `origin/docs-v2-assets` remote ref
- **Wire-up path:** Wire to scheduled scan (monthly) with rolling issue; pair with `migrate-assets-to-branch` (archived, but pattern reusable) when over-budget assets detected.

#### 8. audit-v2-usefulness.js
- **Path:** `operations/scripts/audits/content/quality/audit-v2-usefulness.js`
- **LOC:** 830 · **async main() + module.exports:** yes · **exits/throws:** 4 · **TODOs:** 0
- **Inputs:** v2 MDX pages, `tools/lib/docs-usefulness/` rubric loader, journey-check, scoring lib
- **Outputs:** scored usefulness report (location parameterised)
- **Source-state:** `source-coherent` — depends on internal `tools/lib/docs-usefulness/` (verified present); rubric-driven, source-weighted accuracy verification baked in
- **Wire-up path:** Wire to scheduled scan with rolling issue summarising score bands per tab; pair with content-pipeline review flow for low-scoring pages.

### Audits — veracity / research system (5)

These 5 form a coupled experimental fact-check pipeline. Source data present at `workspace/research/claims/` (2 files: gateways.json, orchestrators.json) and `workspace/research/adjudication/page-content-research-outcomes.json`. The pipeline expects much more seed data.

#### 9. docs-page-research.js
- **Path:** `operations/scripts/audits/content/veracity/docs-page-research.js`
- **LOC:** 1969 · **main() + module.exports:** yes · **exits/throws:** 9 · **TODOs:** 0
- **Inputs:** docs pages; reads claim registries from `validators/content/veracity/docs-fact-registry`
- **Outputs:** manual-first research reports at `workspace/reports/repo-ops/`
- **Source-state:** `source-needs-context` — engine is coherent; expects extensive claim-family registries that only exist for 2 tabs. Test file referenced: `operations/tests/unit/docs-page-research.test.js`
- **Wire-up path:** Expand claim registries to cover all tabs; pair with adjudication ledger; wire to manual SME flow first (not CI) until coverage matures.

#### 10. docs-research-adjudication.js
- **Path:** `operations/scripts/audits/content/veracity/docs-research-adjudication.js`
- **LOC:** 845 · **main() + module.exports:** yes · **exits/throws:** 26 · **TODOs:** 0
- **Inputs:** review outcomes from `workspace/research/adjudication/page-content-research-outcomes.json`
- **Outputs:** validates + summarises review outcomes
- **Source-state:** `source-coherent` — high exit count suggests careful validation, not bugs; expects ledger format defined elsewhere
- **Wire-up path:** Pair with `docs-page-research` as the verify-side of a research workflow; document ledger schema in framework doc.

#### 11. docs-fact-registry.js (validator)
- **Path:** `operations/scripts/validators/content/veracity/docs-fact-registry.js`
- **LOC:** 500 · **run() + main() + module.exports:** yes · **exits/throws:** 27 · **TODOs:** 0
- **Inputs:** claim registries at `workspace/research/claims/*.json`
- **Outputs:** normalised claim-family data; validation errors
- **Source-state:** `source-coherent` — defensive validation throughout (27 throw/exit paths); needs claim registries which currently exist for 2 tabs only
- **Wire-up path:** Wire as PR validator when claim files staged; pair with `docs-page-research` ingestion.

#### 12. docs-page-research-pr-report.js (dispatcher)
- **Path:** `operations/scripts/dispatch/content/veracity/docs-page-research-pr-report.js`
- **LOC:** 440 · **main():** yes · **exits/throws:** 8 · **TODOs:** 0
- **Inputs:** PR-changed files; invokes `docs-page-research`
- **Outputs:** advisory PR artifact summarising claim families, contradictions, propagation follow-up
- **Source-state:** `source-needs-context` — coherent dispatcher; output value depends on underlying registry coverage (currently sparse)
- **Wire-up path:** Wire to PR advisory workflow (non-blocking) once registry coverage reaches threshold; until then, manual run for SME review.

#### 13. docs-research-packet.js (dispatcher)
- **Path:** `operations/scripts/dispatch/content/veracity/docs-research-packet.js`
- **LOC:** 1380 · **runPacket() / runTranche() / runNodeScript():** yes · **exits/throws:** 29 · **TODOs:** 0
- **Inputs:** nav scope / manifest / explicit paths; uses `tools/config/scoped-navigation/`
- **Outputs:** per-tranche packet reports + master rollup
- **Source-state:** `source-coherent` — large orchestrator with tranche logic; spawns sub-processes (Node scripts); high exit count = thorough error handling
- **Wire-up path:** Define packet scope conventions; wire to weekly scheduled packet generation for active tabs; pair with SME review process.

#### 14. orchestrator-guides-research-review.js (dispatcher wrapper)
- **Path:** `operations/scripts/dispatch/content/veracity/orchestrator-guides-research-review.js`
- **LOC:** 178 · **main() + module.exports:** yes · **exits/throws:** 3 · **TODOs:** 0
- **Inputs:** delegates to `docs-research-packet` with Orchestrators nav scope from `tools/config/scoped-navigation/docs-gate-work.json`
- **Outputs:** packet reports at legacy default output root
- **Source-state:** `source-coherent` — thin wrapper, straightforward delegation
- **Wire-up path:** Either fold into `docs-research-packet --scope orchestrators` flag (consolidation) or pattern this for other tab scopes (gateways, developers, etc.).

### Validators — structure (2)

#### 15. regression-bisect.js
- **Path:** `operations/scripts/validators/content/structure/regression-bisect.js`
- **LOC:** 271 · **async main():** yes · **exits/throws:** 4 · **TODOs:** 0
- **Inputs:** `--route /v2/path --error "<error>" [--good <sha>] [--bad <sha>]`
- **Outputs:** git bisect result (commit that introduced regression)
- **Source-state:** `source-needs-context` — uses Puppeteer for headless test; requires Mintlify dev server running; interactive-ish (long-running git bisect)
- **Wire-up path:** Stays manual diagnostic tool; document invocation examples in framework; ensure Puppeteer dependency declared in tools/package.json.

#### 16. sweep-delta-report.js
- **Path:** `operations/scripts/validators/content/structure/sweep-delta-report.js`
- **LOC:** 206 · **async main():** yes · **exits/throws:** 1 · **TODOs:** 0
- **Inputs:** baseline at `operations/tests/baselines/console-baseline.json` (present); optional `--routes`, `--base-url`
- **Outputs:** delta report comparing current sweep to baseline
- **Source-state:** `source-coherent` — clean wrapper around `sweep-console-errors` (verified caller); reuses module exports
- **Wire-up path:** Wire to scheduled drift-detection workflow (weekly); rolling issue when baseline diverges.

### Validators — language-translation (2)

#### 17. check-translation-freshness.js
- **Path:** `operations/scripts/validators/content/language-translation/check-translation-freshness.js`
- **LOC:** 128 · **main():** yes · **exits/throws:** 1 · **TODOs:** 0
- **Inputs:** compares modification dates between `v2/` source and `v2/es/`, `v2/fr/`, `v2/cn/`
- **Outputs:** stale translation list; non-zero exit on staleness
- **Source-state:** `source-coherent` — small, focused, has `--json`
- **Wire-up path:** Wire to PR validator on i18n-touching changes + scheduled scan; pair with `translate-docs.js` integrator for auto-refresh proposals.

#### 18. test-mintlify-version-language-toggle.js
- **Path:** `operations/scripts/validators/content/language-translation/test-mintlify-version-language-toggle.js`
- **LOC:** 333 · **async main():** yes · **exits/throws:** 3 · **TODOs:** 0
- **Inputs:** runtime Mintlify version + docs.json language config
- **Outputs:** pass/fail on language toggle feature support
- **Source-state:** `source-needs-context` — header has legacy 7-tag style (category/owner/needs); needs JSDoc refresh to 11-tag standard. Logic looks coherent.
- **Wire-up path:** Refresh header to 11-tag standard; wire to PR validator on Mintlify-version bumps or docs.json language config changes.

### Audits — governance (2)

#### 19. audit-tasks-folders.js
- **Path:** `operations/scripts/audits/governance/repo/audit-tasks-folders.js`
- **LOC:** 2011 · **main():** yes · **exits/throws:** 9 · **TODOs:** 0
- **Inputs:** `workspace/` structure; applies `runAuditReports()` with conflict-safe moves option
- **Outputs:** normalised report locations + audit report
- **Source-state:** `source-coherent` — very large but factored; has dry-run pattern (move classification vs apply)
- **Wire-up path:** Wire to scheduled monthly workspace cleanup with rolling issue; never run with `--apply` in CI (manual SME approval gate).

#### 20. generate-v2-folder-governance-cleanup-matrix.js
- **Path:** `operations/scripts/audits/governance/reports/generate-v2-folder-governance-cleanup-matrix.js`
- **LOC:** 640 · **run() + module.exports:** yes · **exits/throws:** 4 · **TODOs:** 0
- **Inputs:** v2 tree, docs.json, `tools/lib/docs/docs-publishability` (verified present); has unit test
- **Outputs:** human-review markdown + JSON recommendations at `workspace/reports/repo-ops/`
- **Source-state:** `source-coherent` — has paired test (`v2-folder-governance-cleanup-matrix.test.js` verified present)
- **Wire-up path:** Wire to scheduled scan with rolling issue; pair with `audit-tasks-folders` in workspace-hygiene dispatcher.

### Validators — governance (3)

#### 21. review-governance-repair-checklist.js
- **Path:** `operations/scripts/validators/governance/compliance/review-governance-repair-checklist.js`
- **LOC:** 541 · **main() + module.exports:** yes · **exits/throws:** 4 · **TODOs:** 0
- **Inputs:** uses `buildRepairPlan` + `runAudit` from `pr/audit-script-inventory.js` (verified present)
- **Outputs:** review checklist (markdown + JSON) at `--output <dir>`
- **Source-state:** `source-coherent` — clean dependency on existing audit-script-inventory; outputs human-readable checklist
- **Wire-up path:** Wire to `remediator-governance-repair-pipelines.yml` as advisory artifact before `--write` mode; surface in PR body when dry-run repairs are proposed.

#### 22. check-pr-template.js
- **Path:** `operations/scripts/validators/governance/pr/check-pr-template.js`
- **LOC:** 86 · **main():** yes · **exits/throws:** 3 · **TODOs:** 0
- **Inputs:** `PR_BODY` env var; reads `.github/pull_request_template.md` and `.github/pull-request-template-v2.md`
- **Outputs:** pass/fail on required sections present
- **Source-state:** `source-coherent` — tiny, focused, single responsibility
- **Wire-up path:** Wire to `pull_request` event in a PR validator workflow (read PR_BODY from `github.event.pull_request.body`); blocks merge if required sections missing.

#### 23. validate-lpd-paths.js
- **Path:** `operations/scripts/validators/governance/repo/validate-lpd-paths.js`
- **LOC:** 143 · **main():** yes · **exits/throws:** 5 · **TODOs:** 0
- **Inputs:** parses `lpd` bash CLI at repo root
- **Outputs:** validation result; non-zero exit on missing paths
- **Source-state:** `source-coherent` — depends on `lpd` file at repo root (verify presence before wiring)
- **Wire-up path:** Wire to governance validator workflow on `lpd` or `operations/scripts/**` changes; pair with script-registry generator.

### Generators — governance/catalogs (4)

#### 24. generate-ai-skills-indexes.js
- **Path:** `operations/scripts/generators/governance/catalogs/generate-ai-skills-indexes.js`
- **LOC:** 431 · **run() + module.exports:** yes · **exits/throws:** 4 · **TODOs:** 0
- **Inputs:** `ai-tools/ai-skills/`, AGENTS.md, `.github/`, `.claude/`, `.cursor/`, `.windsurf/`, `docs-guide/policies/`, `docs-guide/contributing/`, v2
- **Outputs:** AI skills index files (multiple targets)
- **Source-state:** `source-coherent` — header has stray `@purpose` artifact in description; logic appears intact. Has `--check`/`--write` modes.
- **Wire-up path:** Wire to AI-tools governance dispatcher (alongside other AI generators); run on `ai-tools/ai-skills/` changes.

#### 25. generate-ai-tools-registry-artifacts.js
- **Path:** `operations/scripts/generators/governance/catalogs/generate-ai-tools-registry-artifacts.js`
- **LOC:** 290 · **main() + module.exports:** yes · **exits/throws:** 3 · **TODOs:** 0
- **Inputs:** live skill/template/export files; has unit test (`operations/tests/unit/ai-tools-registry.test.js` verified)
- **Outputs:** `ai-tools/registry/ai-tools-registry.json`
- **Source-state:** `source-coherent` — has policy tags (R-R14, R-R29); paired test exists
- **Wire-up path:** Wire to AI-tools governance dispatcher (post-merge sync); run on AI tool file changes.

#### 26. generate-ai-tools-visual-library.js
- **Path:** `operations/scripts/generators/governance/catalogs/generate-ai-tools-visual-library.js`
- **LOC:** 1938 · **main() + module.exports:** yes · **exits/throws:** 3 · **TODOs:** 0
- **Inputs:** `.github/workflows/`, `ai-tools/registry/`; has unit test
- **Outputs:** AI-tools visual library for GitHub workflows + dispatcher actions
- **Source-state:** `source-coherent` — large but with paired test (`ai-tools-visual-library.test.js` verified); uses internal yaml loader
- **Wire-up path:** Wire to AI-tools governance dispatcher; pair with workflow-headers validator.

#### 27. generate-snippets-registry.js
- **Path:** `operations/scripts/generators/governance/catalogs/generate-snippets-registry.js`
- **LOC:** 407 · **run() + module.exports:** yes · **exits/throws:** 15 · **TODOs:** 0
- **Inputs:** live `snippets/` filesystem + structured metadata in `snippets/guide.mdx`
- **Outputs:** `snippets/snippets-registry.mdx`
- **Source-state:** `source-coherent` — uses generated-file-banners lib (verified); has policy tags (R-R16, R-R17)
- **Wire-up path:** Wire to `sync-generated-files` dispatcher; run on `snippets/**` changes.

### Generators — governance/reports (1)

#### 28. generate-ai-tools-inventory.js
- **Path:** `operations/scripts/generators/governance/reports/generate-ai-tools-inventory.js`
- **LOC:** 52 · **main() + module.exports:** yes · **exits/throws:** 2 · **TODOs:** 0
- **Inputs:** `ai-tools/registry/` via internal lib
- **Outputs:** AI tools inventory report
- **Source-state:** `source-coherent` — tiny; split from `validate-ai-tools-registry.js`
- **Wire-up path:** Pair with `generate-ai-tools-registry-artifacts` in AI-tools dispatcher; output to `workspace/reports/` for visibility.

### Remediators — governance/classification (1)

#### 29. normalise-frontmatter-keys.js
- **Path:** `operations/scripts/remediators/content/classification/normalise-frontmatter-keys.js`
- **LOC:** 309 · **run() + main() + module.exports:** yes · **exits/throws:** 2 · **TODOs:** 0
- **Inputs:** v2/ MDX (excludes _workspace, x-archived, translations); has `--dry-run`, `--write`, `--staged`, `--files`
- **Outputs:** normalised frontmatter keys (lowercase canonical)
- **Source-state:** `source-coherent` — has full flag suite, idempotent normaliser
- **Wire-up path:** Wire to one-off batch run for current capitalised keys, then to PR validator (advisory) for ongoing prevention.

### Integrators — governance/pipelines (1)

#### 30. publish-v2-internal-reports.js
- **Path:** `operations/scripts/integrators/governance/pipelines/publish-v2-internal-reports.js`
- **LOC:** 884 · **main():** yes · **exits/throws:** 10 · **TODOs:** 0
- **Inputs:** `operations/config/content/reports/v2-internal-report-pages.js` manifest (verified present); has `--dry-run`
- **Outputs:** publishes audit reports to configured locations (v2/internal, workspace/reports)
- **Source-state:** `source-coherent` — manifest-driven publisher with dry-run support
- **Wire-up path:** Wire to scheduled report-publishing dispatcher; pair with the audit scripts whose reports it publishes.

<CustomDivider />

## Summary

**Run-tested (2):** both `works`.

**Source-audited (28):**
- `source-coherent` (22): clean source, dependencies resolve, no TODO debt. Most need only a workflow caller to become wired.
- `source-needs-context` (6): coherent source but depend on data/registries/tools that are sparse or external (research veracity chain, terminology LLM path, generate-api-docs OpenAPI tooling, regression-bisect Puppeteer setup, test-mintlify-version legacy header).

**Zero scripts** flagged `source-broken`, `source-incomplete`, or `source-unclear`.

**Honest caveat:** source coherence does not equal functional correctness. The 28 source-audited scripts will need actual execution as part of the community contributor's wire-up work. That is in scope for the contributor task, not for this audit.

## Wire-up clustering (for community task surfacing)

**Cluster A — straightforward wire (12 scripts):** Just need a workflow caller. Source coherent, dependencies present, output location defined.
- audit-icon-usage, audit-copy-patterns, audit-media-assets, audit-v2-usefulness, sweep-delta-report, check-translation-freshness, audit-tasks-folders, generate-v2-folder-governance-cleanup-matrix, review-governance-repair-checklist, check-pr-template, validate-lpd-paths, normalise-frontmatter-keys, publish-v2-internal-reports

**Cluster B — AI-tools governance dispatcher (4 scripts):** Group these into one new AI-tools governance dispatcher.
- generate-ai-skills-indexes, generate-ai-tools-registry-artifacts, generate-ai-tools-visual-library, generate-ai-tools-inventory

**Cluster C — snippets pipeline (1 script):**
- generate-snippets-registry (wire to `sync-generated-files`)

**Cluster D — veracity research system (6 scripts, large effort):** Coupled experimental system. Needs registry expansion before CI wiring is meaningful.
- docs-page-research, docs-research-adjudication, docs-fact-registry, docs-page-research-pr-report, docs-research-packet, orchestrator-guides-research-review

**Cluster E — terminology/glossary (2 scripts):**
- audit-glossary-gaps (run-tested works), terminology-search (LLM optional)

**Cluster F — diagnostic standalone (2 scripts):** Stay manual SME tools.
- regression-bisect (Puppeteer bisect), generate-api-docs.sh (OpenAPI tooling)

**Cluster G — one-off run, then wire (1 script):**
- generate-content-gap-reconciliation (run-tested works) — wire to scheduled scan with rolling issue

**Total: 30 ✓**
