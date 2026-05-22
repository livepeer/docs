# Workflow Family Recommendations

## Summary

### Workflow Families

| Value | Count |
| --- | ---: |
| `ai-runtime-artifacts` | 6 |
| `content-publication` | 6 |
| `data-refresh` | 9 |
| `docs-catalog-governance` | 6 |
| `governance-maintenance` | 5 |
| `issue-intake-and-triage` | 3 |
| `placeholder-backlog` | 3 |
| `review-event-automation` | 3 |
| `validation-sweeps` | 9 |

### Cleanup Decisions

| Value | Count |
| --- | ---: |
| `consolidate` | 9 |
| `keep` | 13 |
| `merge` | 20 |
| `needs-investigation` | 6 |
| `retire` | 2 |

## Families

### ai-runtime-artifacts

- Count: 6
- Dominant decision: merge
- Targets: `future:ai-runtime-artifacts-workflow`
- Members:
  - `.github/workflows/check-ai-companions.yml` -> `merge`
  - `.github/workflows/generate-ai-companions.yml` -> `merge`
  - `.github/workflows/generate-ai-sitemap.yml` -> `merge`
  - `.github/workflows/generate-llms-files.yml` -> `merge`
  - `.github/workflows/verify-ai-sitemap.yml` -> `merge`
  - `.github/workflows/verify-llms-files.yml` -> `merge`

### content-publication

- Count: 6
- Dominant decision: consolidate
- Targets: `dispatcher:page-ship`
- Members:
  - `.github/workflows/sdk_generation.yaml` -> `needs-investigation`
  - `.github/workflows/seo-refresh.yml` -> `consolidate`
  - `.github/workflows/translate-docs.yml` -> `needs-investigation`
  - `.github/workflows/update-changelogs.yml` -> `keep`
  - `.github/workflows/update-contract-addresses-shadow.yml` -> `consolidate`
  - `.github/workflows/update-contract-addresses.yml` -> `keep`

### data-refresh

- Count: 9
- Dominant decision: merge
- Targets: `data-refresh-governance`, `future:data-refresh-dispatcher`
- Members:
  - `.github/workflows/data-refresh-governance.yml` -> `keep`
  - `.github/workflows/update-blog-data.yml` -> `consolidate`
  - `.github/workflows/update-discord-data.yml` -> `merge`
  - `.github/workflows/update-forum-data.yml` -> `merge`
  - `.github/workflows/update-ghost-blog-data.yml` -> `merge`
  - `.github/workflows/update-github-data.yml` -> `merge`
  - `.github/workflows/update-livepeer-release.yml` -> `merge`
  - `.github/workflows/update-rss-blog-data.yml` -> `merge`
  - `.github/workflows/update-youtube-data.yml` -> `merge`

### docs-catalog-governance

- Count: 6
- Dominant decision: merge
- Targets: `docs-catalog-governance`, `future:docs-catalog-governance-workflow`
- Members:
  - `.github/workflows/check-docs-guide-catalogs.yml` -> `merge`
  - `.github/workflows/check-docs-index.yml` -> `merge`
  - `.github/workflows/docs-catalog-governance.yml` -> `keep`
  - `.github/workflows/generate-component-registry.yml` -> `merge`
  - `.github/workflows/generate-docs-guide-catalogs.yml` -> `merge`
  - `.github/workflows/generate-docs-index.yml` -> `merge`

### governance-maintenance

- Count: 5
- Dominant decision: merge
- Targets: `dispatcher:handover-readiness`, `dispatcher:repo-cleanup-handover`, `future:governance-maintenance-workflow`
- Members:
  - `.github/workflows/codex-governance.yml` -> `keep`
  - `.github/workflows/governance-sync.yml` -> `merge`
  - `.github/workflows/repair-governance.yml` -> `merge`
  - `.github/workflows/sync-large-assets.yml` -> `needs-investigation`
  - `.github/workflows/tasks-retention.yml` -> `needs-investigation`

### issue-intake-and-triage

- Count: 3
- Dominant decision: keep
- Targets: `dispatcher:research-review-packet`
- Members:
  - `.github/workflows/discord-issue-intake.yml` -> `keep`
  - `.github/workflows/docs-v2-issue-indexer.yml` -> `keep`
  - `.github/workflows/project-showcase-sync.yml` -> `needs-investigation`

### placeholder-backlog

- Count: 3
- Dominant decision: retire
- Targets: `dispatcher:page-ship`, `none`
- Members:
  - `.github/workflows/build-review-assets.yml` -> `retire`
  - `.github/workflows/generate-review-table.yml` -> `consolidate`
  - `.github/workflows/update-review-template.yml` -> `retire`

### review-event-automation

- Count: 3
- Dominant decision: keep
- Targets: `dispatcher:review-fix`
- Members:
  - `.github/workflows/auto-assign-docs-reviewers.yml` -> `keep`
  - `.github/workflows/close-linked-issues-docs-v2.yml` -> `keep`
  - `.github/workflows/issue-auto-label.yml` -> `keep`

### validation-sweeps

- Count: 9
- Dominant decision: consolidate
- Targets: `dispatcher:review-fix`
- Members:
  - `.github/workflows/broken-links.yml` -> `consolidate`
  - `.github/workflows/content-health.yml` -> `consolidate`
  - `.github/workflows/freshness-monitor.yml` -> `consolidate`
  - `.github/workflows/openapi-reference-validation.yml` -> `keep`
  - `.github/workflows/page-integrity-health.yml` -> `consolidate`
  - `.github/workflows/style-homogenise.yml` -> `needs-investigation`
  - `.github/workflows/test-suite.yml` -> `keep`
  - `.github/workflows/test-v2-pages.yml` -> `keep`
  - `.github/workflows/v2-external-link-audit.yml` -> `consolidate`
