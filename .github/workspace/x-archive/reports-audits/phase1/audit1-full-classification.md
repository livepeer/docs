# GitHub Actions Full Audit — audit1

> Thread: GitHub Actions Governance
> Generated: 2026-03-31
> Source: File-by-file analysis of all 45 workflows + 10 scripts
> Machine-readable: `.github/workspace/actions-audit.json`
> Dependency map: `.github/workspace/dependency-map.md`

---

## 1. Classification Summary

### By Type (aligned to script governance 6-type taxonomy)

| Type | Count | Workflows |
|------|-------|-----------|
| **automation** | 15 | update-discord-data, update-forum-data, update-ghost-blog-data, update-github-data, update-rss-blog-data, update-youtube-data, update-livepeer-release, update-contract-addresses, update-changelogs, update-blog-data, project-showcase-sync, sync-large-assets, translate-docs, close-linked-issues-docs-v2, discord-issue-intake |
| **validator** | 10 | check-ai-companions, check-docs-guide-catalogs, check-docs-index, verify-ai-sitemap, verify-llms-files, broken-links, test-suite, test-v2-pages, codex-governance, openapi-reference-validation |
| **generator** | 8 | generate-ai-companions, generate-ai-sitemap, generate-component-registry, generate-docs-guide-catalogs, generate-docs-index, generate-llms-files, sdk_generation, generate-review-table (placeholder) |
| **audit** | 3 | content-health, freshness-monitor, v2-external-link-audit |
| **remediator** | 3 | repair-governance, seo-refresh, style-homogenise |
| **dispatch** | 1 | governance-sync |

**Note on issue/PR management workflows:** `issue-auto-label`, `docs-v2-issue-indexer`, `discord-issue-intake`, `close-linked-issues-docs-v2`, and `auto-assign-docs-reviewers` are classified as **automation** under the **governance** concern with niche **issue-lifecycle** or **pr-lifecycle**. They fit "automation" because they are end-to-end pipelines (event → process → action) rather than validators or generators.

### By Concern

| Concern | Count | Coverage |
|---------|-------|----------|
| **content** | 26 | Data fetch (10), validators (5), generators (3), audits (3), remediators (2), translation, changelogs, assets |
| **governance** | 12 | Issue/PR lifecycle (5), codex (1), catalogs (2), pipelines (2), review (2 placeholders) |
| **ai** | 5 | Companions (2), sitemap (2), llms (1) |
| **components** | 1 | Registry generator (1) — component validation is inside test-suite and check-docs-guide-catalogs |

### By Pipeline Tag

| Tag | Description | Count | Workflows |
|-----|-------------|-------|-----------|
| **P2** | Required CI (hard gate) | 2 | test-suite, codex-governance |
| **P3** | PR check (soft gate) | 8 | check-ai-companions, check-docs-guide-catalogs, check-docs-index, verify-ai-sitemap, verify-llms-files, broken-links, test-v2-pages, auto-assign-docs-reviewers |
| **P4** | Post-merge automation | 8 | generate-ai-companions, generate-ai-sitemap, generate-component-registry, generate-docs-guide-catalogs, generate-docs-index, generate-llms-files, governance-sync, close-linked-issues |
| **P5** | Scheduled monitoring | 4 | content-health, freshness-monitor, v2-external-link-audit, openapi-reference-validation |
| **P5-auto** | Scheduled + auto-commit | 10 | update-discord, update-forum, update-ghost, update-github, update-rss, update-youtube, update-contract-addresses, update-changelogs, project-showcase-sync, sdk_generation |
| **P6** | Self-heal | 1 | repair-governance |
| **Manual** | workflow_dispatch only | 4 | seo-refresh, style-homogenise, translate-docs, update-blog-data |
| **Event-driven** | repository_dispatch / issues | 3 | discord-issue-intake, issue-auto-label, docs-v2-issue-indexer |
| **Placeholder** | Not implemented | 3 | build-review-assets, generate-review-table, update-review-template |

### By Status

| Status | Count | Workflows |
|--------|-------|-----------|
| **active** | 40 | All functional workflows |
| **placeholder** | 3 | build-review-assets, generate-review-table, update-review-template |
| **broken** | 1 | update-blog-data (hardcoded API key placeholder) |
| **deprecated** | 1 | deprecated/update-blog-data.yml |

---

## 2. Bug Registry

### P0 — Fix immediately

| # | File | Bug | Type |
|---|------|-----|------|
| 1 | `update-forum-data.yml` | Missing `permissions: contents: write` — push will fail | Missing permission |
| 2 | `update-ghost-blog-data.yml` | Missing `permissions: contents: write` — push will fail | Missing permission |
| 3 | `update-youtube-data.yml` | Missing `permissions: contents: write` — push will fail | Missing permission |
| 4 | `seo-refresh.yml` | No auto-commit step — non-dry-run writes disappear | Incomplete workflow |
| 5 | `translate-docs.yml` | PR `add-paths` hardcodes `v2/es,fr,cn` but input defaults `es,fr,de` | Config mismatch |

### P1 — Fix before framework adoption

| # | File | Bug | Type |
|---|------|-----|------|
| 6 | `governance-sync.yml` | References `inputs.use_test_branch` but has no workflow_dispatch inputs | Dead code |
| 7 | `repair-governance.yml` | References `inputs.use_test_branch` but no such input defined | Dead code |
| 8 | `codex-governance.yml` | `check-codex-pr-overlap.js` path may be stale | Stale path |
| 9 | `content-health.yml` | All 6 steps have `continue-on-error: true` masking failures | Masked failures |
| 10 | `sdk_generation.yaml` | `.yaml` extension (all others `.yml`) | Naming inconsistency |
| 11 | `update-youtube-data.yml` | Different bot identity + inconsistent commit message | Inconsistency |
| 12 | `openapi-reference-validation.yml` | Uses `peter-evans/create-pull-request@v6` (others use `@v7`) | Version inconsistency |

### P2 — Clean up

| # | File | Bug | Type |
|---|------|-----|------|
| 13 | `verify-ai-sitemap.yml` | Branch `docs-v2` hardcoded instead of `vars.DEPLOY_BRANCH` | Hardcoded branch |
| 14 | `verify-llms-files.yml` | Branch `docs-v2` hardcoded | Hardcoded branch |
| 15 | `auto-assign-docs-reviewers.yml` | Branch `docs-v2` hardcoded in job `if` | Hardcoded branch |
| 16 | `update-contract-addresses.yml` | `git add v2/` overly broad | Overly broad staging |
| 17 | `freshness-monitor.yml` | Hardcoded file list and staleness thresholds | Hardcoded config |
| 18 | `update-livepeer-release.yml` | Uses `grep -oP` (GNU, not macOS compatible) | Platform dependency |

---

## 3. Consolidation Plan

### 3.1 Unified Data-Fetch Dispatcher (7 → 1)

**Current:** 7 separate workflows with identical structure:
- checkout → setup node → run script → diff check → commit → push

**Proposed:** Single `update-data-feeds.yml` with matrix strategy:
```yaml
strategy:
  matrix:
    source: [discord, forum, ghost, github, rss, youtube]
```

**Benefits:** 7x reduction in workflow files, single place to fix bugs (permissions, concurrency, error handling), consistent patterns enforced once.

**Excluded from merge:** `update-contract-addresses.yml` (too complex, gold standard), `update-changelogs.yml` (LLM integration), `update-livepeer-release.yml` (inline sed, no script), `project-showcase-sync.yml` (multi-service integration).

### 3.2 Unified Verify Workflow (2 → 1)

**Current:** `verify-ai-sitemap.yml` and `verify-llms-files.yml` — identical structure, same triggers, same pattern.

**Proposed:** Single `verify-generated-files.yml` with matrix:
```yaml
strategy:
  matrix:
    include:
      - name: AI Sitemap
        script: operations/scripts/generate-ai-sitemap.js --check
      - name: llms.txt
        script: operations/scripts/generate-llms-files.js --check
```

### 3.3 Test Workflow Consolidation (2 → 1)

**Current:** `test-suite.yml` and `test-v2-pages.yml` both start Mintlify dev server and run browser tests.

**Proposed:** Merge `test-v2-pages` as a job within `test-suite.yml`, sharing the Mintlify server startup.

### 3.4 Deprecation (4 workflows)

| Workflow | Action | Reason |
|---------|--------|--------|
| `update-blog-data.yml` | Delete | Broken, superseded |
| `build-review-assets.yml` | Delete | Placeholder, never implemented |
| `generate-review-table.yml` | Delete | Placeholder, never implemented |
| `update-review-template.yml` | Delete | Placeholder, never implemented |

### 3.5 Script Extraction (6 inline scripts)

| Workflow | Lines | Extract to |
|---------|-------|------------|
| `docs-v2-issue-indexer.yml` | 403 | `.github/scripts/issue-indexer.js` |
| `issue-auto-label.yml` | 339 | `.github/scripts/issue-auto-label.js` |
| `discord-issue-intake.yml` | 261 | `.github/scripts/discord-issue-intake.js` |
| `close-linked-issues-docs-v2.yml` | 141 | `.github/scripts/close-linked-issues.js` |
| `freshness-monitor.yml` | 80 | `.github/scripts/freshness-monitor.sh` |
| `update-livepeer-release.yml` | 60 | `.github/scripts/update-livepeer-release.js` |

### 3.6 Shared Module Extraction

All 10 `.github/scripts/` files duplicate `escapeForJSX()`, JSX file writer, and config loading. Extract to `.github/scripts/lib/shared.js`.

---

## 4. Dependency Edges

### Workflow → Script (10 edges)

| Workflow | Script |
|---------|--------|
| update-contract-addresses | fetch-contract-addresses.js |
| update-discord-data | fetch-discord-announcements.js |
| update-forum-data | fetch-forum-data.js |
| update-ghost-blog-data | fetch-ghost-blog-data.js |
| update-github-data | fetch-github-discussions.js, fetch-github-releases.js |
| update-rss-blog-data | fetch-rss-blog-data.js |
| update-youtube-data | fetch-youtube-data.js |
| update-changelogs | generate-changelog.js |
| project-showcase-sync | project-showcase-sync.js |

### Workflow → Data File

| Workflow | Data file(s) produced |
|---------|----------------------|
| update-contract-addresses | `snippets/data/contract-addresses/contractAddressesData.jsx`, `_health-checks.json` |
| update-discord-data | `snippets/automations/**/discordData.jsx` |
| update-forum-data | `snippets/automations/forum/forumData.jsx` |
| update-ghost-blog-data | `snippets/automations/blog/ghostBlogData.jsx` |
| update-github-data | `snippets/automations/*/githubDiscussionsData.jsx`, `*/githubReleasesData.jsx` |
| update-rss-blog-data | `snippets/automations/*/blogData.jsx` |
| update-youtube-data | `snippets/automations/youtube/youtubeData.jsx` |
| update-changelogs | `v2/solutions/*/changelog.mdx`, `v2/resources/changelog/*.mdx` |
| update-livepeer-release | `snippets/automations/globals/globals.jsx` |
| project-showcase-sync | `snippets/automations/showcase/showcaseData.jsx` |
| generate-ai-companions | `v2/**/*-data.json` |
| generate-ai-sitemap | `sitemap-ai.xml` |
| generate-component-registry | `docs-guide/config/component-registry.json` |
| generate-docs-guide-catalogs | `docs-guide/catalog/*.mdx` |
| generate-docs-index | `docs-index.json` |
| generate-llms-files | `llms.txt`, `llms-full.txt` |

### Generate/Verify Pairs

| Generator | Verifier | Status |
|-----------|---------|--------|
| generate-ai-companions | check-ai-companions | ✅ Complete |
| generate-ai-sitemap | verify-ai-sitemap | ✅ Complete |
| generate-llms-files | verify-llms-files | ✅ Complete |
| generate-docs-index | check-docs-index | ✅ Complete |
| generate-docs-guide-catalogs | check-docs-guide-catalogs | ✅ Complete |
| generate-component-registry | — | ❌ Missing |
| update-contract-addresses | — | ❌ Missing |
| update-changelogs | — | ❌ Missing |
| 7x data-fetch workflows | freshness-monitor (partial) | ⚠️ Partial |

### Workflow → Workflow (cross-triggers)

| Source | Target | Mechanism |
|--------|--------|-----------|
| External (go-livepeer) | update-livepeer-release | `repository_dispatch: go-livepeer-release` |
| External (Discord bot) | discord-issue-intake | `repository_dispatch: discord-issue-intake` |
| External (showcase form) | project-showcase-sync | `repository_dispatch: showcase-review-submitted` |
| External (protocol) | update-contract-addresses | `repository_dispatch: governor-scripts-update, protocol-update, bridge-update` |
| External (releases) | update-changelogs | `repository_dispatch: solution-release, governor-scripts-update` |
| governance-sync | (creates PR) | `peter-evans/create-pull-request` → triggers PR workflows |
| repair-governance | (creates PR) | `peter-evans/create-pull-request` → triggers PR workflows |
| openapi-reference-validation | (creates PR) | `peter-evans/create-pull-request` → triggers PR workflows |

---

## 5. Statistics

| Metric | Count |
|--------|-------|
| Total workflows classified | 45 |
| Active | 40 |
| Placeholder/stub | 3 |
| Broken | 1 |
| Deprecated | 1 |
| P0 bugs | 5 |
| P1 bugs | 7 |
| P2 bugs | 6 |
| Total bugs | 18 |
| Workflows with concurrency control | 3 of 45 (7%) |
| Workflows with step summaries | 7 of 45 (16%) |
| Workflows with error reporting | 10 of 45 (22%) |
| Workflows with dry-run | 10 of 45 (22%) |
| Generate/verify pairs complete | 5 of 8 (63%) |
| Consolidation: merge candidates | 9 workflows → 2 |
| Consolidation: deprecation candidates | 4 |
| Inline scripts to extract | 6 (1,284 total lines) |
