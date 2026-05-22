# Workflow Branch Targeting Audit

Audited: 2026-03-26
Scope: All `.yml` files in `.github/workflows/` (excluding `deprecated/`)
Total workflows: 43

## Branch variables

- `vars.DEPLOY_BRANCH` = `docs-v2` (production)
- `vars.TEST_BRANCH` = `docs-v2-dev` (development)
- `main` is NOT a working branch. Any trigger on `push: branches: - main` is effectively dead.

---

## Summary table

| # | Workflow | File | Trigger branch(es) | Checkout ref | Push target | Has dispatch? | Has use_test_branch? | Status |
|---|---------|------|-------------------|-------------|-------------|--------------|---------------------|--------|
| 1 | Update Review Template | `update-review-template.yml` | dispatch only | N/A (placeholder) | N/A | Yes | No | ✅ correct (placeholder) |
| 2 | Auto Assign Docs Reviewers | `auto-assign-docs-reviewers.yml` | PR (any base), gates on `docs-v2` base | N/A (no checkout) | N/A | No | No | ✅ correct |
| 3 | Issue Auto Label | `issue-auto-label.yml` | issues (opened, edited) | N/A (no checkout) | N/A | No | No | ✅ correct |
| 4 | Pipeline Freshness Monitor | `freshness-monitor.yml` | schedule + dispatch | Default (no ref) | N/A (read-only) | Yes | No | ⚠️ needs fix (checkout defaults to repo default branch) |
| 5 | Discord Issue Intake | `discord-issue-intake.yml` | repository_dispatch | N/A (no checkout) | N/A | No | No | ✅ correct |
| 6 | Build Review Assets | `build-review-assets.yml` | dispatch only | N/A (placeholder) | N/A | Yes | No | ✅ correct (placeholder) |
| 7 | Project Showcase Sync | `project-showcase-sync.yml` | schedule + dispatch + repository_dispatch | Default (no ref) | N/A (no git push) | Yes | No | ⚠️ needs fix (checkout defaults to repo default branch) |
| 8 | Generate Review Table | `generate-review-table.yml` | dispatch only | N/A (placeholder) | N/A | Yes | No | ✅ correct (placeholder) |
| 9 | Close Linked Issues | `close-linked-issues-docs-v2.yml` | PR closed, gates on `docs-v2` base | N/A (no checkout) | N/A | No | No | ✅ correct |
| 10 | Docs v2 Issue Indexer | `docs-v2-issue-indexer.yml` | issues + dispatch + schedule | N/A (no checkout) | N/A | Yes | No | ✅ correct |
| 11 | workspace/ Retention | `tasks-retention.yml` | schedule + dispatch | N/A (stub, no jobs) | N/A | Yes | No | ✅ correct (stub) |
| 12 | Check Broken Links | `broken-links.yml` | PR to `main` | Default (no ref) | N/A (read-only) | No | No | ❌ broken (triggers on PR to `main` only) |
| 13 | Check Docs Index | `check-docs-index.yml` | PR/push to `docs-v2` + `main`, dispatch | Default (no ref) | N/A (read-only) | Yes | No | ⚠️ needs fix (`main` trigger is dead; `docs-v2` trigger is correct) |
| 14 | Codex Governance | `codex-governance.yml` | PR to `docs-v2` | Default (no ref) | N/A (read-only) | No | No | ✅ correct |
| 15 | Content Health Check | `content-health.yml` | schedule + dispatch | Default (no ref) | N/A (read-only) | Yes | No | ⚠️ needs fix (checkout defaults to repo default branch) |
| 16 | OpenAPI Reference Validation | `openapi-reference-validation.yml` | PR/push to `main` + `docs-v2`, schedule, dispatch | Default (no ref) | Creates PR via peter-evans (base: dynamic) | Yes | No | ⚠️ needs fix (`main` trigger is dead; `docs-v2` correct; PR base falls back to default_branch on schedule) |
| 17 | SEO Metadata Refresh | `seo-refresh.yml` | dispatch only | Default (no ref) | N/A (no git push) | Yes | No | ⚠️ needs fix (checkout defaults to repo default branch) |
| 18 | EN-GB Style Homogenisation | `style-homogenise.yml` | dispatch only | Default (no ref) | Creates PR (base: `docs-v2` hardcoded) | Yes | No | ⚠️ needs fix (checkout defaults to repo default branch, but PR base is `docs-v2` -- mismatch possible) |
| 19 | Docs CI - V2 Browser Sweep | `test-v2-pages.yml` | push to `main`, PR to `main` + `docs-v2` | Default (no ref) | N/A (read-only) | No | No | ❌ broken (push trigger on `main` is dead) |
| 20 | V2 External Link Audit | `v2-external-link-audit.yml` | schedule + dispatch | Default (no ref) | N/A (read-only) | Yes | No | ⚠️ needs fix (checkout defaults to repo default branch) |
| 21 | Verify AI Sitemap | `verify-ai-sitemap.yml` | push to `main`, PR to `main` | Default (no ref) | N/A (read-only) | No | No | ❌ broken (both triggers on `main` only) |
| 22 | Verify llms.txt Files | `verify-llms-files.yml` | push to `main`, PR to `main` | Default (no ref) | N/A (read-only) | No | No | ❌ broken (both triggers on `main` only) |
| 23 | Docs CI - Content Quality Suite | `test-suite.yml` | push to `main`, PR to `main` + `docs-v2` | Default (no ref) | N/A (read-only) | No | No | ❌ broken (push trigger on `main` is dead) |
| 24 | Check AI Companion Files | `check-ai-companions.yml` | PR/push to `docs-v2` + `main`, dispatch | Default (no ref) | N/A (read-only) | Yes | No | ⚠️ needs fix (`main` trigger is dead; `docs-v2` correct) |
| 25 | Check Docs Guide Catalogs | `check-docs-guide-catalogs.yml` | PR/push to `docs-v2` + `main`, dispatch | Default (no ref) | N/A (read-only) | Yes | No | ⚠️ needs fix (`main` trigger is dead; `docs-v2` correct) |
| 26 | Update Blog and Forum Data | `update-blog-data.yml` | dispatch only (disabled) | Default (no ref) | Bare `git push` | Yes | No | ❌ broken (bare `git push` pushes to default branch; disabled anyway) |
| 27 | Docs Translation Pipeline | `translate-docs.yml` | dispatch only | `ref: ${{ inputs.target_branch \|\| 'docs-v2' }}` | Creates PR (base: target_branch) | Yes | No (has `target_branch` input instead) | ✅ correct |
| 28 | Update Livepeer Release | `update-livepeer-release.yml` | repository_dispatch + schedule + dispatch | `ref: vars.TEST_BRANCH / vars.DEPLOY_BRANCH` | Bare `git push` | Yes | Yes | ⚠️ needs fix (bare `git push` -- works because checkout sets HEAD, but fragile) |
| 29 | Update YouTube Data | `update-youtube-data.yml` | schedule + dispatch | `ref: vars.TEST_BRANCH / vars.DEPLOY_BRANCH` | Bare `git push` | Yes | Yes | ⚠️ needs fix (bare `git push` -- works because checkout sets HEAD, but fragile) |
| 30 | Update RSS Blog Data | `update-rss-blog-data.yml` | schedule + dispatch | `ref: vars.TEST_BRANCH / vars.DEPLOY_BRANCH` | Bare `git push` | Yes | Yes | ⚠️ needs fix (bare `git push`) |
| 31 | Update GitHub Data | `update-github-data.yml` | schedule + dispatch | `ref: vars.TEST_BRANCH / vars.DEPLOY_BRANCH` | Bare `git push` | Yes | Yes | ⚠️ needs fix (bare `git push`) |
| 32 | Update Forum Data | `update-forum-data.yml` | schedule + dispatch | `ref: vars.TEST_BRANCH / vars.DEPLOY_BRANCH` | Bare `git push` | Yes | Yes | ⚠️ needs fix (bare `git push`) |
| 33 | Update Discord Data | `update-discord-data.yml` | schedule + dispatch | `ref: vars.TEST_BRANCH / vars.DEPLOY_BRANCH` | Bare `git push` | Yes | Yes | ⚠️ needs fix (bare `git push`) |
| 34 | Generate llms.txt | `generate-llms-files.yml` | push to `docs-v2`, dispatch | `ref: vars.TEST_BRANCH / vars.DEPLOY_BRANCH` | `git push origin HEAD:docs-v2` (hardcoded) | Yes | No (has ref logic but no dispatch input) | ⚠️ needs fix (push target hardcoded to `docs-v2`, no `use_test_branch` input) |
| 35 | Generate Docs Guide Catalogs | `generate-docs-guide-catalogs.yml` | push to `main` (paths), dispatch | `ref: vars.TEST_BRANCH / vars.DEPLOY_BRANCH` | Bare `git push` | Yes | No (has ref logic but no dispatch input) | ❌ broken (push trigger on `main` is dead; bare `git push`) |
| 36 | Governance sync (post-merge) | `governance-sync.yml` | push to `docs-v2` (paths) | `ref: vars.TEST_BRANCH / vars.DEPLOY_BRANCH` | Creates PR (base: `docs-v2` hardcoded) | No | No (has ref logic but no dispatch input and no dispatch trigger) | ⚠️ needs fix (no dispatch; has checkout ref logic referencing `inputs.use_test_branch` but no input defined) |
| 37 | Generate Component Registry | `generate-component-registry.yml` | push to `main` (paths), dispatch | `ref: vars.TEST_BRANCH / vars.DEPLOY_BRANCH` | Bare `git push` | Yes | No (has ref logic but no dispatch input) | ❌ broken (push trigger on `main` is dead; bare `git push`) |
| 38 | Generate Docs Index | `generate-docs-index.yml` | push to `main`, dispatch | `ref: vars.TEST_BRANCH / vars.DEPLOY_BRANCH` | Bare `git push` | Yes | No (has ref logic but no dispatch input) | ❌ broken (push trigger on `main` is dead; bare `git push`) |
| 39 | Governance Repair | `repair-governance.yml` | schedule + dispatch | `ref: vars.TEST_BRANCH / vars.DEPLOY_BRANCH` | Creates PR (base: `docs-v2` hardcoded) | Yes | No (has ref logic but no dispatch input) | ⚠️ needs fix (checkout ref references `inputs.use_test_branch` but no input defined) |
| 40 | Generate AI Sitemap | `generate-ai-sitemap.yml` | push to `main`, dispatch | `ref: vars.TEST_BRANCH / vars.DEPLOY_BRANCH` | Bare `git push` | Yes | No (has ref logic but no dispatch input) | ❌ broken (push trigger on `main` is dead; bare `git push`) |
| 41 | Generate AI Companion Files | `generate-ai-companions.yml` | push to `main` (paths), dispatch | `ref: vars.TEST_BRANCH / vars.DEPLOY_BRANCH` | Bare `git push` | Yes | No (has ref logic but no dispatch input) | ❌ broken (push trigger on `main` is dead; bare `git push`) |
| 42 | Update Ghost Blog Data | `update-ghost-blog-data.yml` | schedule + dispatch | `ref: vars.TEST_BRANCH / vars.DEPLOY_BRANCH` | Bare `git push` | Yes | Yes | ⚠️ needs fix (bare `git push`) |
| 43 | Update Solutions Changelogs | `update-solutions-changelog.yml` | schedule + dispatch + repository_dispatch | `ref: vars.TEST_BRANCH / vars.DEPLOY_BRANCH` | Bare `git push` | Yes | Yes | ⚠️ needs fix (bare `git push`) |
| 44 | Sync Large Assets | `sync-large-assets.yml` | push (all branches), dispatch | Default (source branch) | `git push origin "$TARGET_BRANCH"` (explicit) | Yes | No (uses `DEPLOY_BRANCH`/`TEST_BRANCH` in if-condition) | ✅ correct |

---

## Status counts

- ✅ correct: 13
- ⚠️ needs fix: 20
- ❌ broken: 10

---

## Needs fix -- grouped by issue type

### Issue 1: Hardcoded `main` push trigger (effectively dead)

These workflows trigger on `push: branches: - main` but `main` is not a working branch. The push trigger never fires.

| Workflow | File | Fix |
|---------|------|-----|
| Check Broken Links | `broken-links.yml` | Change `main` to `docs-v2` (or add `docs-v2`) |
| Docs CI - V2 Browser Sweep | `test-v2-pages.yml` | Change push trigger from `main` to `docs-v2` |
| Verify AI Sitemap | `verify-ai-sitemap.yml` | Change both `main` refs to `docs-v2` |
| Verify llms.txt Files | `verify-llms-files.yml` | Change both `main` refs to `docs-v2` |
| Docs CI - Content Quality Suite | `test-suite.yml` | Change push trigger from `main` to `docs-v2` |
| Generate Docs Guide Catalogs | `generate-docs-guide-catalogs.yml` | Change `main` to `docs-v2` |
| Generate Component Registry | `generate-component-registry.yml` | Change `main` to `docs-v2` |
| Generate Docs Index | `generate-docs-index.yml` | Change `main` to `docs-v2` |
| Generate AI Sitemap | `generate-ai-sitemap.yml` | Change `main` to `docs-v2` |
| Generate AI Companion Files | `generate-ai-companions.yml` | Change `main` to `docs-v2` |

### Issue 2: Stale `main` in multi-branch triggers (dead `main` alongside working `docs-v2`)

These trigger on both `main` and `docs-v2`. The `main` trigger is dead weight.

| Workflow | File | Fix |
|---------|------|-----|
| Check Docs Index | `check-docs-index.yml` | Remove `main` from push/PR branches |
| OpenAPI Reference Validation | `openapi-reference-validation.yml` | Remove `main` from push/PR branches |
| Check AI Companion Files | `check-ai-companions.yml` | Remove `main` from push/PR branches |
| Check Docs Guide Catalogs | `check-docs-guide-catalogs.yml` | Remove `main` from push/PR branches |

### Issue 3: Bare `git push` without explicit branch target

These auto-commit workflows use bare `git push` after committing. This works only if HEAD is on the correct branch (set by checkout ref). It is fragile and will push to the wrong branch if checkout ref changes or is misconfigured.

| Workflow | File | Current checkout ref | Fix |
|---------|------|---------------------|-----|
| Update Blog and Forum Data (disabled) | `update-blog-data.yml` | Default | Add explicit branch target |
| Update Livepeer Release | `update-livepeer-release.yml` | vars-based | Add `git push origin HEAD:$BRANCH` |
| Update YouTube Data | `update-youtube-data.yml` | vars-based | Add `git push origin HEAD:$BRANCH` |
| Update RSS Blog Data | `update-rss-blog-data.yml` | vars-based | Add `git push origin HEAD:$BRANCH` |
| Update GitHub Data | `update-github-data.yml` | vars-based | Add `git push origin HEAD:$BRANCH` |
| Update Forum Data | `update-forum-data.yml` | vars-based | Add `git push origin HEAD:$BRANCH` |
| Update Discord Data | `update-discord-data.yml` | vars-based | Add `git push origin HEAD:$BRANCH` |
| Update Ghost Blog Data | `update-ghost-blog-data.yml` | vars-based | Add `git push origin HEAD:$BRANCH` |
| Update Solutions Changelogs | `update-solutions-changelog.yml` | vars-based | Add `git push origin HEAD:$BRANCH` |
| Generate Docs Guide Catalogs | `generate-docs-guide-catalogs.yml` | vars-based | Add `git push origin HEAD:$BRANCH` |
| Generate Component Registry | `generate-component-registry.yml` | vars-based | Add `git push origin HEAD:$BRANCH` |
| Generate Docs Index | `generate-docs-index.yml` | vars-based | Add `git push origin HEAD:$BRANCH` |
| Generate AI Sitemap | `generate-ai-sitemap.yml` | vars-based | Add `git push origin HEAD:$BRANCH` |
| Generate AI Companion Files | `generate-ai-companions.yml` | vars-based | Add `git push origin HEAD:$BRANCH` |
| Generate llms.txt | `generate-llms-files.yml` | vars-based | Hardcoded `HEAD:docs-v2` -- should use var |

### Issue 4: Missing `use_test_branch` input on auto-commit workflows

These workflows check out using `inputs.use_test_branch` logic in the ref expression but do NOT define a `use_test_branch` input in `workflow_dispatch`. The expression silently evaluates to false (falling back to DEPLOY_BRANCH), so the workflow functions but cannot be directed to the test branch.

| Workflow | File | Fix |
|---------|------|-----|
| Generate llms.txt | `generate-llms-files.yml` | Add `use_test_branch` boolean input |
| Generate Docs Guide Catalogs | `generate-docs-guide-catalogs.yml` | Add `use_test_branch` boolean input |
| Governance sync (post-merge) | `governance-sync.yml` | Add `workflow_dispatch` with `use_test_branch` input |
| Generate Component Registry | `generate-component-registry.yml` | Add `use_test_branch` boolean input |
| Generate Docs Index | `generate-docs-index.yml` | Add `use_test_branch` boolean input |
| Governance Repair | `repair-governance.yml` | Add `use_test_branch` boolean input |
| Generate AI Sitemap | `generate-ai-sitemap.yml` | Add `use_test_branch` boolean input |
| Generate AI Companion Files | `generate-ai-companions.yml` | Add `use_test_branch` boolean input |

### Issue 5: Missing `workflow_dispatch` on workflows that should have it

| Workflow | File | Fix |
|---------|------|-----|
| Check Broken Links | `broken-links.yml` | Add `workflow_dispatch` |
| Docs CI - V2 Browser Sweep | `test-v2-pages.yml` | Add `workflow_dispatch` |
| Verify AI Sitemap | `verify-ai-sitemap.yml` | Add `workflow_dispatch` |
| Verify llms.txt Files | `verify-llms-files.yml` | Add `workflow_dispatch` |
| Docs CI - Content Quality Suite | `test-suite.yml` | Add `workflow_dispatch` |
| Governance sync (post-merge) | `governance-sync.yml` | Add `workflow_dispatch` |

### Issue 6: Checkout defaults to repo default branch on scheduled/dispatch runs

These workflows use `actions/checkout@v4` without a `ref:` parameter. On `workflow_dispatch` and `schedule` events, this checks out the repository's default branch (likely `main`), not `docs-v2`.

| Workflow | File | Fix |
|---------|------|-----|
| Pipeline Freshness Monitor | `freshness-monitor.yml` | Add `ref: ${{ vars.DEPLOY_BRANCH }}` |
| Project Showcase Sync | `project-showcase-sync.yml` | Add `ref: ${{ vars.DEPLOY_BRANCH }}` |
| Content Health Check | `content-health.yml` | Add `ref: ${{ vars.DEPLOY_BRANCH }}` |
| SEO Metadata Refresh | `seo-refresh.yml` | Add `ref: ${{ vars.DEPLOY_BRANCH }}` |
| EN-GB Style Homogenisation | `style-homogenise.yml` | Add `ref: ${{ vars.DEPLOY_BRANCH }}` |
| V2 External Link Audit | `v2-external-link-audit.yml` | Add `ref: ${{ vars.DEPLOY_BRANCH }}` |

---

## Recommended standard pattern

All auto-commit workflows (those that generate files and push) should follow this pattern:

### Trigger

```yaml
on:
  push:
    branches:
      - docs-v2          # Use var name in comment: vars.DEPLOY_BRANCH
    paths:               # Optional: limit to relevant paths
      - 'relevant/path/**'
  schedule:
    - cron: "0 6 * * *"  # If scheduled
  workflow_dispatch:
    inputs:
      use_test_branch:
        description: "Write to TEST_BRANCH (docs-v2-dev) instead of DEPLOY_BRANCH"
        type: boolean
        default: false
```

### Checkout

```yaml
- name: Checkout repository
  uses: actions/checkout@v4
  with:
    ref: ${{ inputs.use_test_branch == 'true' && vars.TEST_BRANCH || vars.DEPLOY_BRANCH }}
    token: ${{ secrets.GITHUB_TOKEN }}
```

### Resolve branch name for push

```yaml
- name: Resolve target branch
  id: branch
  run: |
    if [ "${{ inputs.use_test_branch }}" = "true" ]; then
      echo "name=${{ vars.TEST_BRANCH }}" >> "$GITHUB_OUTPUT"
    else
      echo "name=${{ vars.DEPLOY_BRANCH }}" >> "$GITHUB_OUTPUT"
    fi
```

### Push

```yaml
- name: Commit and push if changed
  if: steps.git-check.outputs.changed == 'true'
  run: |
    git config user.name "github-actions[bot]"
    git config user.email "github-actions[bot]@users.noreply.github.com"
    git add <specific files>
    git commit -m "chore: <description> [skip ci]"
    git push origin HEAD:${{ steps.branch.outputs.name }}
```

### Read-only check workflows

For CI check workflows (no git push), the standard is simpler:

```yaml
on:
  pull_request:
    branches:
      - docs-v2
  push:
    branches:
      - docs-v2
  workflow_dispatch:
```

With checkout:

```yaml
- uses: actions/checkout@v4
  with:
    ref: ${{ vars.DEPLOY_BRANCH }}
```

### PR-creating workflows

For workflows that create PRs via `peter-evans/create-pull-request`:

```yaml
- uses: peter-evans/create-pull-request@v7
  with:
    base: ${{ steps.branch.outputs.name }}
    # ... other options
```

---

## Priority remediation order

1. **Broken (dead) workflows** -- 10 workflows with `main`-only triggers that never fire
2. **Wrong checkout on scheduled runs** -- 6 workflows checking out `main` instead of `docs-v2`
3. **Bare `git push`** -- 15 instances of fragile push without explicit branch
4. **Missing `use_test_branch`** -- 8 workflows that cannot be directed to dev branch
5. **Missing `workflow_dispatch`** -- 6 workflows that cannot be manually triggered
6. **Dead `main` in multi-branch lists** -- 4 workflows with harmless but confusing dead triggers
