# Pipeline test coverage

Generated: 2026-05-22 — Phase 5.1 + 5.2 close

## Two-layer test model

| Layer | What it proves | File | Count |
|---|---|---|---|
| Smoke | Every dispatcher runs `--help` + `--mode pr --dry-run` without error; JSDoc/governance headers valid | `operations/tests/integration/pipeline-smoke-test.js` | 66 dispatchers (60 covered, 6 infrastructure-dependent excluded by design) |
| Functional | Detect-repair-verify cycle proof against synthetic-violation fixtures | `operations/tests/integration/pipeline-functional-tests.js` | 12 pipelines |

**Combined:** every pipeline has at least one automated test signal.

## Smoke layer (universal)

The smoke test discovers every `dispatch-*.js` under `operations/scripts/dispatch/` and runs it twice:
1. `--help` — must exit 0
2. `--mode pr --dry-run` — must exit 0 within timeout

Exclusions (by design — require external infrastructure or full-scope scans):
- `dispatch-page-rendering.js` — needs Mintlify dev server
- `dispatch-health-scan.js` — forces full-repo scheduled scan
- `dispatch-contract-addresses.js` — needs RPC URL + explorer API
- `dispatch-maintenance-update.js` — meta over 6 integrators with mixed external deps
- `dispatch-seo-metadata.js` — full-repo SEO scan (>180s)
- `dispatch-discoverability-repair.js` — wraps `dispatch-seo-metadata`

## Functional layer (foundational + extended)

Synthetic-violation cycle: harness drops a fixture, runs detect, asserts violation found, runs repair (where applicable), asserts fixture clean, re-runs detect to verify, removes fixture.

| # | Pipeline | Detect | Repair | Verify |
|---|---|---|---|---|
| 1 | em-dashes (body) | ✓ | ✓ | ✓ |
| 2 | banned-words | ✓ | — (detect-only by design) | — |
| 3 | spelling (US → UK) | ✓ | ✓ | ✓ |
| 4 | voice-register | ✓ | — (advisory) | — |
| 5 | grammar-en-gb | ✓ | — (advisory) | — |
| 6 | page-integrity (broken link) | ✓ | — | — |
| 7 | page-structure (lint) | ✓ | — | — |
| 8 | jsdoc-headers | ✓ | — | — |
| 9 | folder-allowlist (D-GOV-08) | ✓ | ✓ (git mv to x-archive) | ✓ |
| 10 | em-dashes (frontmatter) | ✓ | ✓ | ✓ |
| 11 | ownerless-language | ✓ | — | — |
| 12 | page-integrity (broken import) | ✓ | — | — |

## Pipelines covered by smoke only

The remaining ~54 dispatchers fall into these categories:

**Meta dispatchers (no own logic — bundle pipelines).** Coverage via smoke is sufficient because failure manifests in the underlying pipeline test:
- `dispatch-brand-{check,repair,scan}`
- `dispatch-copy-{check,repair,update}`
- `dispatch-discoverability-{check,generate,repair}`
- `dispatch-health-{check,repair,scan}`
- `dispatch-maintenance-{check,generate,update}`
- `dispatch-governance-{check,generate,scan,sync}`
- `dispatch-pipelines` (top-level router)

**Generators (drift-detection by `--check`).** Smoke runs `--mode pr --dry-run`, which executes `--check`. A regression in the generator output would fail the smoke test:
- governance-map, script-registry, script-inventory, script-locations
- action-docs, ai-sitemap, llms-files, og-images, companions
- canonical-sync, changelogs, catalogs, component-registry, docs-index
- showcase

**Integrators (external API fetchers).** Cannot be fixture-tested without mocking external services. Coverage is smoke-only:
- social-feeds, exchanges-data, contract-shadow, sdk-clients, release-version, config-flags

**Validators that scope to whole repo (not file-based).** Detect fixtures don't fit; smoke proves they run:
- proper-nouns, style-tokens (component-library scope)
- wcag (docs.json nav scope)
- content-quality, openapi-reference, page-rendering
- new-file-governance, codex-compliance, root-governance, workflow-governance (workspace + .github scope)
- workspace-retention, large-assets, contract-shadow

**Special-case pipelines:**
- `translations` — placeholder pipeline (no atomics yet)

## Run locally

```bash
# Smoke (every dispatcher, --dry-run)
node operations/tests/integration/pipeline-smoke-test.js

# Functional (12 detect-repair-verify cycles)
node operations/tests/integration/pipeline-functional-tests.js

# Single functional test
node operations/tests/integration/pipeline-functional-tests.js --only em-dashes
```

## Run in CI

Wired into `.github/workflows/validator-governance-check-pipelines.yml` (Phase 5.3).
