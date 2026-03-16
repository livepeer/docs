---
plan-type: analysis
title: Merge docs-v2 into docs-v2-dev Root Cause Review
date: 2026-03-15
branch: tmp/merge-docs-v2-into-docs-v2-dev-validation-20260315
base: docs-v2-dev
merge-source: docs-v2
---

# Merge Summary

## Scope

This review covers the isolated validation branch created from `origin/docs-v2-dev` and merged with `origin/docs-v2` on 2026-03-15. The goal of this phase was to validate the merge branch before any PR to `docs-v2`, fix only issues that blocked a correct validation run, and capture broader architecture debt for post-merge remediation.

## Branch And History Context

- Validation branch: `tmp/merge-docs-v2-into-docs-v2-dev-validation-20260315`
- Merge base between `origin/docs-v2-dev` and `origin/docs-v2`: `c55f63499e168a149e525ec4dc5f7ad968d72b06`
- Divergence at validation start: `origin/docs-v2-dev` was 110 commits ahead and 11 commits behind `origin/docs-v2`
- Merge was resolved in an isolated worktree at `/private/tmp/livepeer-merge-docs-v2-into-docs-v2-dev-validation`

## Validation Outcome Snapshot

- Strict OpenAPI audit: passed after validator fixes
- Docs-guide SoT advisory check: passed after restoring the published script contract and fixing repo-root resolution
- PR changed-file simulation against `docs-v2`: failed on broad pre-existing branch debt, not just merge-specific regressions
- Mint preview startup: eventually succeeded on `http://localhost:3001` after detecting `3000` was already occupied by another failing local preview
- Browser sweeps: launched successfully but were stopped after representative failures confirmed broad pre-existing runtime debt on unchanged `docs-v2-dev` pages

# Fix Now

## 1. OpenAPI validator drift from shipped IA

### Root cause

`tests/integration/openapi-reference-audit.js` still encoded older `gateways/references/api-reference/...` path assumptions even though the current tree includes `gateways/resources/technical/api-reference/...`. The validator also scanned raw MDX for `<OpenAPI ...>` tags without excluding inline-code or fenced-code literals, which produced false positives in documentation pages that merely described the component.

### Blocking effect

- Strict OpenAPI audit failed with 63 findings
- Shipped API reference pages had no canonical spec mapping according to the validator even though their `openapi:` metadata was structurally correct
- Documentation guidance pages falsely failed strict validation because literal ``<OpenAPI />`` examples were interpreted as real components

### Fix applied

- Expanded explicit path resolution to cover current technical API reference routes
- Added endpoint-based fallback inference when a file path no longer uniquely identifies a spec but the endpoint does
- Masked inline-code and fenced-code regions before scanning for `<OpenAPI ...>` tags
- Added unit tests for:
  - technical route resolution
  - inferred spec resolution
  - code-literal exclusion

### Result

`node tests/integration/openapi-reference-audit.js --full --strict --report /tmp/openapi-audit-final.md --report-json /tmp/openapi-audit-final.json` passed with zero findings.

## 2. Broken docs-guide test contract

### Root cause

The repository workflow, README guidance, and requested validation plan all referenced `npm --prefix tests run test:docs-guide`, but `tests/package.json` no longer exposed that script. In addition, `tests/unit/docs-guide-sot.test.js` anchored itself to `process.cwd()`, which breaks whenever the script is launched from the `tests` package context instead of repo root.

### Blocking effect

- Advisory docs-guide validation command failed before any docs logic ran
- When the script was reintroduced, it misresolved canonical repo paths under `tests/` and produced false missing-file failures

### Fix applied

- Restored the `test:docs-guide` package script contract in `tests/package.json`
- Updated `tests/unit/docs-guide-sot.test.js` to resolve repo root via `git rev-parse --show-toplevel`
- Regenerated stale generated catalogs using repository-backed generators

### Result

`npm --prefix tests run test:docs-guide` passed.

## 3. Browser test environment contract drift

### Root cause

`tests/integration/browser.test.js` fell back to `process.cwd()/tools/node_modules/puppeteer` when bare `require('puppeteer')` failed. When invoked through `npm --prefix tools`, the current working directory becomes `.../tools`, so the fallback incorrectly resolved `.../tools/tools/node_modules/puppeteer`.

### Blocking effect

- `MINT_BASE_URL=http://localhost:3001 npm --prefix tools run test:browser` failed before executing any browser coverage

### Fix applied

- Updated the Puppeteer fallback to resolve from Git repo root instead of `process.cwd()`

### Result

The browser test entrypoint now starts against the local preview instead of failing on module resolution.

## 4. Generated index freshness drift after merge

### Root cause

The merge brought source-of-truth changes that left generated docs-guide catalogs stale relative to their generators.

### Blocking effect

- Docs-guide SoT check reported stale `docs-guide/catalog/pages-catalog.mdx`
- Script aggregate documentation also needed regeneration

### Fix applied

- Ran `node tools/scripts/generate-docs-guide-pages-index.js --write`
- Ran `node tests/unit/script-docs.test.js --write --stage --autofill`

### Result

Generated docs-guide and script indexes were brought back into sync on the validation branch.

# Deferred Root-Cause Issues

## Branch/history topology

- The repository still has governance confusion between `main`, `docs-v2`, and `docs-v2-dev`
- `docs-v2` is the production lineage while `main` remains a separate historical line, which encourages invalid PR assumptions and inconsistent base-branch checks
- Validation commands that assume `main` as the universal base do not reflect the actual production promotion path

## Source-of-truth drift between docs content, navigation, and generated artifacts

- Mint startup reported many stale `docs.json` routes pointing at paths that no longer exist, especially under `docs-guide/*`
- The repo contains multiple overlapping route systems:
  - current page files
  - `docs.json`
  - scoped navigation JSON files
  - generated catalogs
  - archived `x-*` content
- Current runtime behavior tolerates many of these inconsistencies while CI often classifies them only as warnings, allowing drift to accumulate

## Generated-file and report governance drift

- Human-authored operational review output and machine-generated report artifacts live in adjacent patterns under `tasks/`, which encourages accidental misuse of generated-only report locations
- Localized/generated catalogs are tracked artifacts with unstable update surfaces, which raises merge conflict frequency
- Script and catalog indexes are regenerated by several independent entrypoints rather than a single authoritative orchestration path

## Scoped config, worktree, and dev-environment sprawl

- Tracked branch-local files such as `.codex/task-contract.yaml` and `.vscode/settings.json` create unnecessary merge churn
- Hook installation state is worktree-sensitive and can silently drift until a local validation command catches it
- Local preview startup behavior depends on the state of unrelated local ports and other running preview processes

## Test/CI parity gaps

- Published workflow and README contracts drifted from actual package scripts
- Several validation scripts assumed repo-root execution but were launched from package-prefixed contexts
- The PR changed-file simulation against `docs-v2` reports failures across the full long-lived `docs-v2-dev` delta, making it poor at distinguishing merge regressions from already-existing branch debt
- Static validation and live preview tolerate different classes of failure, so navigation/import drift can remain non-blocking until browser runtime

## Content/component duplication and layout anti-patterns

- Mint preview still crawls archived or fixture content that imports missing theme and snippet modules
- Missing exports such as `MathInline`, `MathBlock`, `TabsContainer`, `CalloutContainer`, `DocsPhilosophy`, and `latestVersion` indicate snippet-library API drift without compatibility controls
- Gateway quickstart pages still reference missing composable partials under old folder structures
- There are overlapping AI/API reference trees and x-resource copies that duplicate endpoint content without a clearly enforced ownership model

## Runtime browser parity gaps

- Full browser sweeps did not reach a clean pass state
- Representative sampled failures on unchanged `docs-v2-dev` pages included:
  - `v2/about/core-concepts`: Mermaid parse errors emitted to console during render
  - `v2/about/livepeer-protocol/treasury`: React runtime error `#418`
  - `v2/solutions/portal`: aborted same-origin RSC requests for `streamplace` introduction routes
- The sampled failing files above were not modified by the merge itself, which confirms that browser failures are not isolated to merge conflict resolution

# Anti-Patterns Observed During Validation

## Archived content still participates in active preview/runtime resolution

Archived snippet/example directories and fixture content are still imported or scanned during local preview. This increases startup noise, masks actionable failures, and makes it harder to treat runtime warnings as trustworthy signals.

## Navigation allows warning-level broken routes at scale

The local preview emitted many warnings for routes present in `docs.json` but missing on disk. That is a source-of-truth failure, not a cosmetic warning, and it should be promoted into a governed remediation workflow.

## Package execution context is not treated as part of script API design

Multiple scripts depended on `process.cwd()` implicitly. In a large multi-package repo, that is fragile. Validation and maintenance tooling should consistently resolve repo root explicitly.

## Validation commands mix branch-quality debt with merge-quality debt

The changed-file PR simulation reported:

- `Component Naming`: 7 errors
- `Style Guide`: 1030 errors, 1396 warnings
- `MDX-safe Markdown`: 35 errors, 5465 warnings
- `Links & Imports`: 24 errors
- `docs.json /redirect Guard`: 9 errors
- `Generated Banners`: 1 error
- `Script Governance`: 2 errors
- `V2 Link Audit (Strict)`: 1 failure

Because the comparison target is `docs-v2`, these checks evaluate the full accumulated `docs-v2-dev` delta, not only merge-specific regressions. That is useful as a branch-health signal, but it is not a clean merge-gating signal.

## Runtime preview success is possible despite structurally broken imports

Mint eventually served the site while still emitting missing-import and missing-route warnings. That means local “preview is up” is not a sufficient correctness signal in this repo.

## Browser coverage tools disagree on failure semantics

`tests/integration/browser.test.js` and `tools/scripts/test-v2-pages.js` both target browser/runtime validation but they classify failures differently. For example, `v2/solutions/portal` passed under `browser.test` but failed under `test-v2-pages` because the stricter script reports aborted same-origin RSC requests. That indicates the repo lacks one canonical browser-quality contract.

# Recommended Full-Repo Architecture Sweep After Merge

## 1. Define one production promotion topology

- Make the production branch contract explicit
- Align CI base-branch assumptions with actual promotion flow
- Decide whether `main` becomes a mirror of production, an archive line, or a governance-only branch

## 2. Create one authoritative navigation/source-of-truth model

- Decide which artifact is canonical for route existence
- Regenerate secondary navigation/catalog artifacts from that canonical model
- Fail CI on missing-route warnings for canonical navigation files

## 3. Separate active content, generated content, and archived content cleanly

- Prevent archived fixtures/examples from participating in preview/test discovery
- Move fixture-only MDX and archived snippets behind explicit exclusion rules
- Add generator ownership metadata for tracked generated files

## 4. Normalize all tooling to explicit repo-root execution

- Replace implicit `process.cwd()` assumptions with a shared repo-root helper
- Apply this across tests, generators, repair scripts, and browser tooling
- Add unit coverage for package-prefixed invocation paths

## 5. Stabilize snippet/component public APIs

- Inventory active snippet exports and consumers
- Add compatibility checks for renamed or removed exports
- Introduce deprecation windows instead of silent snippet API breakage

## 6. Split merge validation from branch-health remediation

- Keep one validation lane for merge-specific regressions
- Keep a separate lane for full branch debt reduction
- Do not conflate “this merge is safe” with “this branch is fully remediated”

# Immediate Follow-Up Recommendation

Before opening any PR to `docs-v2`, finish collecting the browser sweep output on this validation branch and classify each failure as one of:

- merge-specific regression requiring fix now
- pre-existing `docs-v2-dev` branch debt that must be documented but can be deferred
- production-side content drift that should be cherry-picked back into `docs-v2` separately
