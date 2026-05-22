# GitHub Actions Repo-Specific Analysis — report2

> Thread: GitHub Actions Governance
> Generated: 2026-03-30
> Purpose: Repo-specific gap analysis, risk assessment, gold-standard identification
> Method: File-by-file analysis of all 45 workflows + 10 scripts + prior audit cross-reference

---

## 1. Inventory Summary

| Category | Count |
|----------|-------|
| Active workflow files | 43 |
| Placeholder/stub workflows | 2 (`build-review-assets.yml`, `generate-review-table.yml`, `update-review-template.yml`) |
| Deprecated workflows | 1 (`deprecated/update-blog-data.yml`) |
| Broken/non-functional workflows | 1 (`update-blog-data.yml` — hardcoded `YOUR_CONTENT_API_KEY`) |
| Scripts in `.github/scripts/` | 10 |
| Total workflow files | 46 |

---

## 2. Gold-Standard Workflows

These workflows demonstrate the patterns the framework should codify.

### Tier 1: Exemplary

**`update-contract-addresses.yml`** — The best workflow in the repo.
- Config-driven (reads `contract-addresses-supplement.json`)
- Full CLI flag support (`--dry-run`, `--skip-verify`, `--scan-fix`)
- Error detection + issue creation on failure
- Health check metadata (`_health-checks.json`)
- Multiple trigger types (cron, repository_dispatch, workflow_dispatch)
- Branch targeting via vars
- Enrichment warning detection

**`openapi-reference-validation.yml`** — Most sophisticated validation workflow.
- 3-phase audit (initial → autofix → final)
- Step summary with Markdown report
- Artifact upload
- Rolling GitHub issue (auto-opens/auto-closes)
- Autofix PR creation
- Concurrency control
- npm retry logic

### Tier 2: Well-Structured

**`translate-docs.yml`** — Best parameterised manual workflow.
- 10 workflow_dispatch inputs with sensible defaults
- Unit tests before translation
- Validation after generation
- Dry-run support
- Concurrency control
- Artifact upload
- PR creation with explicit add-paths
- Issue: PR `add-paths` hardcodes `v2/es,fr,cn` but input defaults `es,fr,de` — mismatch

**`repair-governance.yml`** — Best self-healing pattern.
- 3-mode input (dry-run/fix/report-only)
- Schedule defaults to `fix`, manual defaults to `dry-run`
- Step summary + artifact upload
- Conditional PR creation
- Bug: references undefined `inputs.use_test_branch`

**`test-suite.yml`** + **`test-v2-pages.yml`** — Best CI validation.
- Concurrency control with cancel-in-progress
- Step summaries with pass/fail tables
- PR commenting with idempotent markers
- Artifact upload
- Multi-job structure (test-suite)

### Tier 3: Adequate

**`update-changelogs.yml`** — Good LLM fallback pattern.
- Enhanced mode with `continue-on-error`, falls back to non-LLM
- Multiple trigger types
- Dry-run support
- Config-driven via `product-social-config.json`

**`docs-v2-issue-indexer.yml`** — Good issue management.
- Concurrency control
- Idempotent marker comments
- Step summary
- Self-trigger detection and skip

---

## 3. Critical Bugs (P0)

| # | Workflow | Bug | Impact |
|---|---------|-----|--------|
| 1 | `update-blog-data.yml` | Hardcoded `YOUR_CONTENT_API_KEY` placeholder — never worked | Non-functional. Should be deleted (superseded) |
| 2 | `update-forum-data.yml` | Missing `permissions: contents: write` | Push step will fail silently |
| 3 | `update-ghost-blog-data.yml` | Missing `permissions: contents: write` | Push step will fail silently |
| 4 | `update-youtube-data.yml` | Missing `permissions: contents: write` | Push step will fail silently |
| 5 | `seo-refresh.yml` | No auto-commit step — non-dry-run writes go nowhere | Workflow is useless in non-dry-run mode |
| 6 | `governance-sync.yml` | References `inputs.use_test_branch` but has no workflow_dispatch inputs | Dead code — always falls through to DEPLOY_BRANCH |
| 7 | `repair-governance.yml` | Same `inputs.use_test_branch` reference but no such input defined | Same dead code issue |
| 8 | `translate-docs.yml` | PR `add-paths` hardcodes `v2/es,fr,cn` but input defaults to `es,fr,de` | German translations excluded from PR; Chinese included without being generated |

### From prior audit (2026-03-23) — verify current status:

| # | Workflow | Bug | Root cause |
|---|---------|-----|------------|
| 9 | `content-health.yml` | All 6 steps use pre-restructure script paths | `tools/scripts/` → `operations/scripts/` move |
| 10 | `style-homogenise.yml` | Stale script path | Same restructure |
| 11 | `generate-ai-sitemap.yml` | Script path may be stale | Same restructure |
| 12 | `verify-ai-sitemap.yml` | Script path may be stale | Same restructure |
| 13 | `generate-llms-files.yml` | Script path may be stale | Same restructure |
| 14 | `verify-llms-files.yml` | Script path may be stale | Same restructure |
| 15 | `codex-governance.yml` | `check-codex-pr-overlap.js` path stale | Moved to `dispatch/ai/codex/` |

---

## 4. Systematic Gaps

### 4.1 No Concurrency Controls (42 of 45 workflows)

Only 3 workflows have concurrency groups:
- `test-suite.yml` ✅
- `test-v2-pages.yml` ✅
- `docs-v2-issue-indexer.yml` ✅

All 10+ auto-commit workflows lack concurrency, creating race conditions when:
- Schedule + manual dispatch overlap
- Push events trigger multiple generators simultaneously
- Two daily cron jobs at the same time (e.g., forum + ghost at 00:00 UTC)

### 4.2 No Error Handling (30+ workflows)

| Pattern | Workflows with it | Workflows missing it |
|---------|-------------------|----------------------|
| Step summary | 7 | 38 |
| `if: failure()` steps | 2 | 43 |
| Issue creation on failure | 1 (`update-contract-addresses`) | 44 |
| Artifact upload | 4 | 41 |
| `continue-on-error` (appropriate) | ~5 | N/A |
| `continue-on-error` (masking failures) | ~6 | N/A |

### 4.3 No Dry-Run Support (35 of 45 workflows)

Only 10 workflows support dry-run:
- `update-contract-addresses.yml` (input)
- `translate-docs.yml` (input)
- `repair-governance.yml` (input: mode)
- `seo-refresh.yml` (input, but broken)
- `sync-large-assets.yml` (input)
- `update-changelogs.yml` (input)
- Check/verify workflows use `--check` flag (not a true dry-run input)

### 4.4 Missing Generate/Verify Pairs

| Generator | Has verify workflow? | Gap |
|-----------|---------------------|-----|
| `generate-ai-companions.yml` | `check-ai-companions.yml` ✅ | — |
| `generate-ai-sitemap.yml` | `verify-ai-sitemap.yml` ✅ | — |
| `generate-llms-files.yml` | `verify-llms-files.yml` ✅ | — |
| `generate-docs-index.yml` | `check-docs-index.yml` ✅ | — |
| `generate-docs-guide-catalogs.yml` | `check-docs-guide-catalogs.yml` ✅ | — |
| `generate-component-registry.yml` | ❌ No verify workflow | **GAP** — registry can drift |
| `update-contract-addresses.yml` | ❌ No verify workflow | **GAP** — data freshness unmonitored |
| `update-changelogs.yml` | ❌ No verify workflow | **GAP** — changelog pages could be stale |
| 7 data-fetch workflows | ❌ No verify for any | **GAP** — `freshness-monitor.yml` only checks 7 hardcoded files |

### 4.5 Inconsistent Patterns

| Pattern | Variants found |
|---------|----------------|
| Node version | 20 (most), 22 (test-suite, openapi, verify-*, link-audit) |
| `npm install` vs `npm ci` | Mixed — `npm install` in 8+, `npm ci` in 5+ |
| Git config scope | `--global` in 5, local in rest |
| Bot identity | `github-actions[bot]` (most), `GitHub Actions Bot` (youtube) |
| Commit message | `chore: ... [skip ci]` (most), no prefix (youtube), no [skip ci] (some) |
| Branch reference | `vars.DEPLOY_BRANCH` (most), hardcoded `docs-v2` (verify-*, auto-assign) |
| Permissions declared | 22 workflows declare, 23 rely on defaults |
| `peter-evans/create-pull-request` | `@v7` (most), `@v6` (openapi) |

### 4.6 Large Inline Scripts (should be extracted)

| Workflow | Inline script lines | Recommendation |
|---------|---------------------|----------------|
| `docs-v2-issue-indexer.yml` | ~403 lines | Extract to `.github/scripts/issue-indexer.js` |
| `issue-auto-label.yml` | ~339 lines | Extract to `.github/scripts/issue-auto-label.js` |
| `discord-issue-intake.yml` | ~261 lines | Extract to `.github/scripts/discord-issue-intake.js` |
| `close-linked-issues-docs-v2.yml` | ~141 lines | Extract to `.github/scripts/close-linked-issues.js` |
| `freshness-monitor.yml` | ~80 lines bash | Extract to `.github/scripts/freshness-monitor.sh` |
| `update-livepeer-release.yml` | ~60 lines bash | Extract to `.github/scripts/update-livepeer-release.js` |

### 4.7 Shared Code Duplication

All 10 `.github/scripts/` files duplicate:
- `escapeForJSX()` function (identical in every file)
- JSX file writing pattern (header + export)
- Config loading from `product-social-config.json`

Should be extracted to a shared `lib/` module.

---

## 5. Script Analysis (`.github/scripts/`)

### Gold Standard: `fetch-contract-addresses.js` (1,545 lines)
- 11-tag JSDoc header (if present — verify)
- Config-driven
- CLI flags (`--dry-run`, `--skip-verify`, `--scan-fix`)
- Multi-source API with fallback (Blockscout → Etherscan)
- Health check metadata
- Backup file preservation
- Per-contract warning tracking
- Minimum entry validation (abort if <20 Arbitrum)

### Well-Built: `generate-changelog.js` (1,310 lines)
- Config-driven via `product-social-config.json`
- Multi-provider LLM integration with retry + backoff
- CLI flags (`--dry-run`, `--enhance`, `--contract`, `--regenerate`)
- Graceful fallback from LLM to raw

### Adequate: `project-showcase-sync.js` (845 lines)
- Complex multi-service integration (Google Sheets, Discord, GitHub)
- Two modes (poll/dispatch)
- Input validation
- Reviewer notification on failure

### Thin Wrappers (similar pattern): 7 fetch scripts (147–265 lines each)
- `fetch-discord-announcements.js` — Discord API, config-driven
- `fetch-forum-data.js` — Discourse API, **hardcoded URL** (not config-driven)
- `fetch-ghost-blog-data.js` — RSS, **hardcoded URL**
- `fetch-github-discussions.js` — GraphQL, config-driven
- `fetch-github-releases.js` — REST, config-driven
- `fetch-rss-blog-data.js` — RSS, config-driven
- `fetch-youtube-data.js` — YouTube API, hybrid (config + env)

### Script Gaps
| Gap | Scripts affected |
|-----|------------------|
| No JSDoc headers | Most (verify — `fetch-contract-addresses.js` may have one) |
| No shared utility module | All 10 (duplicate `escapeForJSX`, config loading) |
| Hardcoded URLs | `fetch-forum-data.js`, `fetch-ghost-blog-data.js` |
| No retry logic | All 7 thin fetch scripts |
| No CLI flags | 7 thin fetch scripts (config via env vars only) |

---

## 6. Workflow Classification Preview

Mapping all 45 workflows to the script governance taxonomy:

### By Type

| Type | Workflows | Count |
|------|-----------|-------|
| **automation** | update-discord-data, update-forum-data, update-ghost-blog-data, update-github-data, update-youtube-data, update-rss-blog-data, update-livepeer-release, update-contract-addresses, update-changelogs, update-blog-data, project-showcase-sync, sync-large-assets, translate-docs | 13 |
| **generator** | generate-ai-companions, generate-ai-sitemap, generate-component-registry, generate-docs-guide-catalogs, generate-docs-index, generate-llms-files, sdk_generation | 7 |
| **validator** | check-ai-companions, check-docs-guide-catalogs, check-docs-index, verify-ai-sitemap, verify-llms-files, broken-links, test-suite, test-v2-pages, codex-governance, openapi-reference-validation | 10 |
| **audit** | content-health, freshness-monitor, v2-external-link-audit | 3 |
| **remediator** | repair-governance, seo-refresh, style-homogenise | 3 |
| **dispatch** | governance-sync | 1 |
| **issue/PR mgmt** (no script equiv) | issue-auto-label, docs-v2-issue-indexer, discord-issue-intake, close-linked-issues-docs-v2, auto-assign-docs-reviewers | 5 |
| **placeholder** | build-review-assets, generate-review-table, update-review-template | 3 |

**Note:** "issue/PR mgmt" has no direct equivalent in the script taxonomy. Recommend adding as a niche under `governance` concern, or as a new concern `repo-ops`.

### By Concern

| Concern | Workflows |
|---------|-----------|
| **content** | 26 (data fetch, generators, validators, audits, translation, changelogs) |
| **components** | 3 (component registry, check-docs-guide-catalogs [partial], test-suite [partial]) |
| **governance** | 8 (codex-governance, governance-sync, repair-governance, issue-*, auto-assign, close-linked) |
| **ai** | 6 (ai-companions, ai-sitemap, llms-files, + verify counterparts) |

### By Pipeline Tag

| Pipeline Tag | Trigger | Workflows | Count |
|---|---|---|---|
| P2 (required CI) | `pull_request` (required status) | test-suite, codex-governance | 2 |
| P3 (PR check) | `pull_request` (non-required) | check-ai-companions, check-docs-guide-catalogs, check-docs-index, verify-ai-sitemap, verify-llms-files, broken-links, test-v2-pages, auto-assign-docs-reviewers | 8 |
| P4 (post-merge) | `push` to docs-v2 | generate-ai-companions, generate-ai-sitemap, generate-component-registry, generate-docs-guide-catalogs, generate-docs-index, generate-llms-files, governance-sync | 7 |
| P5 (scheduled) | `schedule` (monitoring) | content-health, freshness-monitor, v2-external-link-audit, openapi-reference-validation | 4 |
| P6 (self-heal) | `schedule` + auto-fix | repair-governance | 1 |
| P5-auto (scheduled data) | `schedule` + auto-commit | update-discord, update-forum, update-ghost, update-github, update-youtube, update-rss, update-livepeer-release, update-contract-addresses, update-changelogs, project-showcase-sync | 10 |
| Manual | `workflow_dispatch` only | seo-refresh, style-homogenise, translate-docs, sdk_generation | 4 |
| Event-driven | `repository_dispatch` | discord-issue-intake | 1 |
| Issue-driven | `issues` events | issue-auto-label, docs-v2-issue-indexer | 2 |
| PR-driven (non-gate) | `pull_request` (closed) | close-linked-issues-docs-v2 | 1 |
| Placeholder | N/A | build-review-assets, generate-review-table, update-review-template | 3 |

---

## 7. Consolidation Candidates

### 7.1 Merge Candidates

| Candidate | Workflows to merge | Rationale |
|-----------|-------------------|-----------|
| **Unified data-fetch dispatcher** | 7 daily data-fetch workflows (discord, forum, ghost, github, rss, youtube, livepeer-release) | Identical structure: checkout → node script → diff check → commit. One workflow with a matrix or parameterised job. Reduces maintenance from 7 workflows to 1 |
| **Unified verify workflow** | verify-ai-sitemap + verify-llms-files | Identical structure, same triggers, same pattern. One workflow with a matrix |
| **Test consolidation** | test-suite + test-v2-pages | Significant overlap (both start Mintlify server, both run browser tests). test-v2-pages could be a job within test-suite |

### 7.2 Deprecation Candidates

| Workflow | Reason |
|---------|--------|
| `update-blog-data.yml` | Broken, superseded by ghost + forum workflows |
| `build-review-assets.yml` | Placeholder, never implemented |
| `generate-review-table.yml` | Placeholder, never implemented |
| `update-review-template.yml` | Placeholder, never implemented |

### 7.3 Script Extraction Candidates

6 workflows with 80–403 line inline scripts should be extracted to `.github/scripts/` (listed in section 4.6).

### 7.4 Shared Module Extraction

`escapeForJSX()` + JSX file writer + config loader should be extracted to `.github/scripts/lib/shared.js` (used by all 10 scripts).

---

## 8. Risk Assessment

### High Risk
| Risk | Workflows affected | Impact |
|------|-------------------|--------|
| Missing `contents: write` permission | forum, ghost, youtube | Data pipelines silently broken |
| No concurrency on auto-commit workflows | 10+ generators/data-fetch | Race conditions on concurrent pushes |
| `continue-on-error` masking failures | content-health (6 steps), broken-links | Silent degradation — no alerting |
| No retry logic in data-fetch scripts | All 7 thin fetch scripts | API transient failures cause silent data staleness |

### Medium Risk
| Risk | Workflows affected | Impact |
|------|-------------------|--------|
| Stale script paths (from restructure) | 7 workflows (per prior audit) | Workflows fail silently or don't run |
| No error reporting | 38 of 45 workflows | Failures go unnoticed |
| Inconsistent Node version | Mixed 20/22 | Potential compatibility issues |
| Third-party actions unpinned by SHA | All (use `@v7`, `@v4`, etc.) | Supply chain risk (cf. tj-actions incident) |

### Low Risk
| Risk | Workflows affected | Impact |
|------|-------------------|--------|
| Inconsistent commit messages | youtube vs all others | Cosmetic, confusing git log |
| Inconsistent git config scope | ~5 use `--global` | Minor, no functional impact |
| Placeholder workflows | 3 stubs | Clutter, no harm |

---

## 9. Alignment with Script Governance Framework

| Script framework concept | Current GHA state | Gap |
|---|---|---|
| 6 types (audit/generator/validator/remediator/dispatch/automation) | Workflows map cleanly except "issue/PR mgmt" group (5 workflows) | Need to decide: new type, or niche under governance concern |
| 4 concerns (content/components/governance/ai) | All 45 workflows map to existing concerns | No gap |
| 11-tag JSDoc header | 0 of 45 workflows have any header standard | Full gap — the core deliverable of this initiative |
| 3 enforcement tiers | Workflows naturally group into P2–P6 + manual | Need to add P4 (post-merge) and P5-auto (scheduled + commit) |
| `@pipeline` tag | No pipeline documentation exists in any workflow | Full gap |
| Generate/verify pairs | 5 of 7 generators have verify counterparts | 2 generators + all data-fetch workflows lack verify |
| Config-driven | 7 of 10 scripts are config-driven | 3 scripts use hardcoded URLs |
| `--dry-run` support | 3 of 10 scripts, 10 of 45 workflows | Most lack safe testing mode |
| Self-healing (P6) | 1 workflow (`repair-governance`) | Pattern established but not widely applied |
| Error reporting | 1 workflow creates issues on failure | 44 workflows lack any error reporting |

---

## 10. Prior Audit Cross-Reference

From `SCRIPT WORKFLOW AUDIT` (2026-03-23):

| Finding | Still valid? | Notes |
|---------|-------------|-------|
| 7 broken workflows (stale paths) | **Verify** — paths may have been fixed since 2026-03-23 | `content-health.yml` uses `operations/scripts/docs-quality-and-freshness-audit.js` (path exists?) |
| 25+ unwired validators | **Still valid** — no new CI wiring observed | The @pipeline tags declare tiers that don't exist |
| 3 auto-commit race conditions | **Still valid** — 0 concurrency controls added | Same risk today |
| n8n duplicates GHA | **Status unknown** — n8n not in this repo | Decommission decision still pending |
| 54 gaps / 52 recommendations | **Partially addressed** — script restructure completed | Workflow layer untouched |

---

## 11. Recommendations for Phase 1 (Audit)

1. **Verify all P0 bugs** before classification — run each broken workflow to confirm current state
2. **Classify the 5 "issue/PR mgmt" workflows** — propose either new niche or new type
3. **Add P4 and P5-auto pipeline tags** to the taxonomy — needed for post-merge generators and scheduled data-commit workflows
4. **Flag all 3 placeholders** for deprecation in the audit
5. **Map all dependency edges** — the data is now complete for Mermaid diagrams
6. **Prioritise the 7 data-fetch workflow merger** — single biggest maintenance reduction

---

## Sources

- File-by-file analysis of all `.github/workflows/*.yml` and `.github/scripts/*.js`
- Prior audit: `workspace/plan/active/SCRIPT WORKFLOW AUDIT/audits/00-concern-index.md` through `06-codex-safety-audit.md`
- Script governance framework: `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md`
