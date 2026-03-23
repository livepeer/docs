# Script Workflow Audit — Concern Index

> Generated: 2026-03-23
> Scope: All script workflows and pipelines in the Livepeer Docs v2 repo
> Taxonomy: Follows SCRIPT-GOVERNANCE three-tier model (`<type>/<concern>/<niche>`)

---

## Concerns

Each concern maps to the SCRIPT-GOVERNANCE taxonomy concerns, plus two cross-cutting workflow areas that span multiple concerns.

| # | Concern | File | Scripts | Workflows | Gaps | Recs | Status |
|---|---------|------|---------|-----------|------|------|--------|
| 1 | **Components** | [01-components-audit.md](01-components-audit.md) | 12 (5 gen, 6 val, 2 aud, 1 rem) | 4 GHA | 6 | 7 | Complete |
| 2 | **Content** | [02-content-audit.md](02-content-audit.md) | 42 (7 gen, 16 val, 11 aud, 11 rem, 4 disp) | 10 GHA | ~9 | 9 | Complete |
| 3 | **Governance** | [03-governance-audit.md](03-governance-audit.md) | 26 (7 gen, 9 val, 4 aud, 3 rem, 3 disp) | 7 GHA + pre-commit | 11 | 8 | Complete |
| 4 | **AI** | [04-ai-audit.md](04-ai-audit.md) | 17 (gen, val, auto, disp) | 6 GHA | ~9 | 9 | Complete |
| 5 | **Data Pipelines** | [05-data-pipelines-audit.md](05-data-pipelines-audit.md) | 7 fetch + 4 supplementary | 7 GHA + 5 n8n | 12 | 12 | Complete |
| 6 | **Codex/Agent Safety** | [06-codex-safety-audit.md](06-codex-safety-audit.md) | ~12 (hooks + lifecycle + validators) | 3 GHA + pre-commit + pre-push | ~7 | ~7 | Complete |

---

## Cross-Concern Critical Findings

### Broken Workflows (P0 — fix immediately)

| Concern | Issue | Workflow | Root cause |
|---------|-------|----------|------------|
| Content | `content-health.yml` — weekly audit silently fails | `content-health.yml` | All 6 steps use pre-restructure script paths; `continue-on-error: true` masks failures |
| Content | `style-homogenise.yml` — stale path | `style-homogenise.yml` | Pre-restructure path reference |
| AI | 4 workflows reference non-existent paths | `generate-ai-sitemap.yml`, `verify-ai-sitemap.yml`, `generate-llms-files.yml`, `verify-llms-files.yml` | Scripts moved during `tools/scripts/` → `operations/scripts/` restructure (Task 14) |
| Codex | PR overlap detection broken | `codex-governance.yml` | References `operations/scripts/check-codex-pr-overlap.js` (moved to `dispatch/ai/codex/`) |
| Governance | `governance-sync.yml` likely fails silently | `governance-sync.yml` | Missing scope flags for governance-pipeline.js |

**Common root cause**: The `tools/scripts/` → `operations/scripts/` restructure (SCRIPT-GOVERNANCE Task 14) updated script locations but 7+ workflow YAML files still reference old paths.

### Aspirational @pipeline Tags (P1 — wire or reclassify)

Multiple scripts across concerns declare CI pipeline tiers (`P3`, `pr-workflow`, `ci`) in their `@pipeline` JSDoc tags but have **zero actual CI wiring**:
- **Content**: 13 of 16 validators unwired
- **Governance**: 6 validators unwired
- **AI**: 6 generators/validators unwired

### Auto-Commit Race Conditions (P2 — consolidate)

| Race | Workflows involved | Trigger overlap |
|------|-------------------|-----------------|
| Components | `generate-component-registry.yml` + `generate-docs-guide-catalogs.yml` | Both push→main, overlapping when JSX + docs.json change together |
| Content | `generate-docs-index.yml` + `generate-ai-companions.yml` | Both push→main on MDX changes |
| Data | Multiple daily cron workflows at 00:00–01:00 UTC | Schedule collision possible |

### No Monitoring / No Retry (P2 — add resilience)

- **Data Pipelines**: All 7 fetch scripts have zero retry logic; no alerting on API failures
- **n8n workflows**: Fully duplicate GHA pipelines — should be decommissioned or integrated

---

## Governance Tier Reference

From SCRIPT-GOVERNANCE decision D7:

| Tier | When | Failure behavior | Speed requirement |
|------|------|-------------------|-------------------|
| **P1** | Pre-commit (hard gate) | Commit blocked | < 5 seconds |
| **P2** | Push / required CI (hard gate) | PR cannot merge | — |
| **P3** | PR check (soft gate) | Warns but does not block | — |
| **P5/P6** | Scheduled cron (self-heal) | Auto-fixes via PR | — |
| **manual** | On-demand only | N/A | — |

---

## Aggregate Statistics

| Metric | Count |
|--------|-------|
| Total scripts audited | ~116 |
| Total GHA workflows audited | ~37 |
| Total gaps identified | ~54 |
| Total recommendations | ~52 |
| Broken workflows (P0) | 7 |
| Unwired validators | ~25 |
| Auto-commit race conditions | 3 |

---

## Cross-references

- **SCRIPT-GOVERNANCE decisions**: D1–D13 in `workspace/plan/active/SCRIPT-GOVERNANCE/decision-log.md`
- **COMPONENT-GOVERNANCE framework**: `workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md`
- **Published policies**: `docs-guide/policies/`
- **Script taxonomy spec**: `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md`
- **System architecture**: `workspace/plan/active/SCRIPT-GOVERNANCE/system-canonical.mdx`
