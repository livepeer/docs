# Full Script Inventory Audit

Generated: 2026-05-22T03:29:49.341Z
Mode: dry-run
Scan roots: .githooks, .github/scripts, workspace/scripts, operations/tests/unit, operations/tests/integration, operations/tests/utils, operations/tests, operations/scripts, tools/lib, tools/dev, tools/config

## Summary

Total scripts discovered: 85
By trigger category:
- Unmanaged: 0
- Orphaned: 61
- P1 - Commit gate: 2
- P2 - Push gate: 9
- P3 - PR gate: 9
- P5 - Scheduled: 0
- P6 - On-demand: 0
- Indirect - Library: 2
- Manual - CLI only: 2

Grade distribution: A 0 | B 1 | C 0 | F 84
Pipeline verification: MATCH 4 | MISMATCH 79 | MISSING 2
Classification JSON sync: In JSON 85 | Not in JSON 0 | Phantom 0
Output chain summary: 0 chains detected

## Repair

- Mode: dry-run
- Total fixes: 173
- Files modified: 0
- Needs human: 84

## Orphaned

| Path | Category | Purpose | Pipeline claimed | Pipeline actual | Pipeline verdict | Outputs | Triggers downstream? | Scope | Needs | Header completeness | Grade | Flags |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| operations/scripts/remediators/content/style/remediate-voice-violations.js | remediator | Apply deterministic voice-register fixes to v2 MDX pages | P6 (self-heal) or manual via dispatch-voice-register.js | manual (none) | MISMATCH:phantom claim P6 | stdout only | No | v2 MDX pages with audience frontmatter | D-GOV-03 (paired remediator for every detector) | 7/9 | F | invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/remediators/content/health/repair-wcag.js | remediator | Apply deterministic WCAG accessibility fixes to v2 MDX pages | P6 (scheduled self-heal) | indirect via operations/scripts/dispatch/governance/mdx-render-gate.js | MISMATCH:phantom claim P6 | , operations/scripts/remediators/content/health/wcag | No | v2 MDX pages | D-GOV-03 (detect-repair-escalate-verify), D-GOV-07 (local CLI equivalence) | 7/9 | F | invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/remediators/governance/repo/repair-folder-allowlist.js | remediator | Auto-archive folder drift to x-archive/ (D-GOV-08 layer 4 + 5 repair step) | P4 (post-merge auto-archive) or P6 (scheduled self-heal) called by dispatch-folder-allowlist.js | manual (none) | MISMATCH:phantom claim P6 | operations/scripts/remediators/governance/repo/x-archive | No | repo root, .github/, ai-tools/, docs-guide/, tools/config/, snippets/, workspace/ (any folder declaring .allowlist) | D-GOV-08 (every folder is governed); D2 (no deletions — archive only) | 7/9 | F | invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/validators/content/health/check-broken-links.js | validator | First-party broken-link check (replaces Mintlify integration for advisory PR checks) | P3 via dispatch-page-rendering.js | manual (none) | MISMATCH:phantom claim P3 | stdout only | No | v2 MDX pages | D-GOV-03 | 7/9 | F | invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/governance/dispatch-governance-generate.js | dispatch | generate meta dispatcher: bundles governance pipelines in --mode post-merge | P4 | manual (none) | MATCH | stdout only | No | all governance pipelines | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch |
| operations/scripts/dispatch/content/copy/dispatch-canonical-sync.js | dispatch | Mintlify canonical-sync pipeline (PR check + scheduled drift + manual repair) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | Mintlify canonical archive + registered consumer files | D-GOV-03 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/governance/dispatch-action-docs.js | dispatch | Pipeline dispatcher for action-docs (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | .github/workflows/, .github/workspace/actions-library/ | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/discoverability/dispatch-ai-sitemap.js | dispatch | Pipeline dispatcher for ai-sitemap (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | sitemap-ai.xml | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/brand/dispatch-banned-words.js | dispatch | Pipeline dispatcher for banned-word and banned-phrase detection | P3 (PR), P5 (scheduled) | manual (none) | MISMATCH:phantom claim P3, P5 | stdout only | No | v2 MDX pages | D-GOV-03 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/maintenance/dispatch-catalogs.js | dispatch | Pipeline dispatcher for catalogs (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | docs-guide/catalog/ | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/copy/dispatch-changelogs.js | dispatch | Pipeline dispatcher for changelogs (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | snippets/data/changelogs/ | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/governance/dispatch-codex-compliance.js | dispatch | Pipeline dispatcher for codex-compliance (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | codex/* branches | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/discoverability/dispatch-companions.js | dispatch | Pipeline dispatcher for companions (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | snippets/data/companions/ | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/brand/dispatch-style-tokens.js | dispatch | Pipeline dispatcher for component style-token consistency (no hardcoded colours/spacing) | P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P5, P6 | stdout only | No | snippets/components/** | D-GOV-03 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/maintenance/dispatch-component-registry.js | dispatch | Pipeline dispatcher for component-registry (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | snippets/components/, component-registry.json | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/maintenance/dispatch-config-flags.js | dispatch | Pipeline dispatcher for config-flags (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | snippets/data/config-flags/ | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/health/dispatch-content-quality.js | dispatch | Pipeline dispatcher for content quality (TODO/TBD markers, thin pages, stale content) — full lifecycle | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | v2 MDX pages | D-GOV-03 (detect-repair-escalate-verify) | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/maintenance/dispatch-contract-addresses.js | dispatch | Pipeline dispatcher for contract-addresses (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | snippets/data/contract-addresses/ | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/maintenance/dispatch-contract-shadow.js | dispatch | Pipeline dispatcher for contract-shadow (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | snippets/data/contract-addresses/ | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/governance/dispatch-folder-allowlist.js | dispatch | Pipeline dispatcher for D-GOV-08 folder-allowlist enforcement (full lifecycle) | P2/P3 (PR via --mode pr), P5/P6 (scheduled via --mode scheduled), manual (via --mode manual) | indirect via .githooks/pre-commit | MISMATCH:phantom claim P2, P3, P5, P6 | stdout only | No | all governed folders (any folder declaring .allowlist) | D-GOV-08 (every folder is governed); D-GOV-03 (detect-repair-escalate-verify) | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/maintenance/dispatch-docs-index.js | dispatch | Pipeline dispatcher for docs-index (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | docs-index.json | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/brand/dispatch-em-dashes.js | dispatch | Pipeline dispatcher for em-dash detection and removal in v2 docs | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | v2 MDX pages | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/maintenance/dispatch-exchanges-data.js | dispatch | Pipeline dispatcher for exchanges-data (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | snippets/data/exchanges/ | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/governance/dispatch-governance-map.js | dispatch | Pipeline dispatcher for governance-map (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | GOVERNANCE.md markers across repo | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/governance/dispatch-jsdoc-headers.js | dispatch | Pipeline dispatcher for jsdoc-headers (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | operations/scripts (all governed scripts) | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/maintenance/dispatch-large-assets.js | dispatch | Pipeline dispatcher for large-assets (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | public/ | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/discoverability/dispatch-llms-files.js | dispatch | Pipeline dispatcher for llms-files (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | llms.txt, llms-full.txt | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/governance/dispatch-new-file-governance.js | dispatch | Pipeline dispatcher for new-file-governance (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | newly staged files | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/discoverability/dispatch-og-images.js | dispatch | Pipeline dispatcher for og-images (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | public/og-images/ | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/health/dispatch-openapi-reference.js | dispatch | Pipeline dispatcher for OpenAPI reference drift (full lifecycle) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | v2/api-reference, openapi specs | D-GOV-03 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/health/dispatch-page-rendering.js | dispatch | Pipeline dispatcher for page rendering (Puppeteer sweep + broken-link check) — full lifecycle | P3 (PR), P5 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5 | stdout only | No | v2 MDX pages | D-GOV-03 (detect-repair-escalate-verify) | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/health/dispatch-page-structure.js | dispatch | Pipeline dispatcher for page structure (headers, anchors, descriptions, endings, MDX safety) — full lifecycle | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | v2 MDX pages | D-GOV-03 (full detect-repair-escalate-verify); D-GOV-07 (local CLI) | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/health/dispatch-page-integrity.js | dispatch | Pipeline dispatcher for page-integrity (links + imports + MDX safety) — full lifecycle | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | v2 MDX pages | D-GOV-03 (detect-repair-escalate-verify); D-GOV-07 (local CLI equivalence) | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/governance/dispatch-pipelines.js | dispatch | Pipeline dispatcher for pipelines (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | cross-concern governance state | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/brand/dispatch-proper-nouns.js | dispatch | Pipeline dispatcher for proper-noun capitalisation (Livepeer, AI, Gateway, Orchestrator, etc.) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | v2 MDX pages | D-GOV-03 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/maintenance/dispatch-release-version.js | dispatch | Pipeline dispatcher for release-version (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | snippets/data/releases/ | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/governance/dispatch-root-governance.js | dispatch | Pipeline dispatcher for root-governance (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | .allowlist, root manifests | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/governance/dispatch-script-inventory.js | dispatch | Pipeline dispatcher for script-inventory (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | operations/scripts/** | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/governance/dispatch-script-locations.js | dispatch | Pipeline dispatcher for script-locations (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | operations/scripts (all governed scripts) | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/governance/dispatch-script-registry.js | dispatch | Pipeline dispatcher for script-registry (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | operations/scripts/, tools/config/registry/script-registry.json | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/maintenance/dispatch-sdk-clients.js | dispatch | Pipeline dispatcher for sdk-clients (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | snippets/sdks/ | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/discoverability/dispatch-seo-metadata.js | dispatch | Pipeline dispatcher for seo-metadata (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | v2 MDX pages | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/copy/dispatch-showcase.js | dispatch | Pipeline dispatcher for showcase (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | snippets/data/showcase/ | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/copy/dispatch-social-feeds.js | dispatch | Pipeline dispatcher for social-feeds (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | snippets/data/social-feeds/ | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/copy/dispatch-translations.js | dispatch | Pipeline dispatcher for translations (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | v2/es/, v2/fr/, v2/cn/ | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/brand/dispatch-grammar-en-gb.js | dispatch | Pipeline dispatcher for UK English grammar enforcement on v2 docs (full lifecycle) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | v2 MDX pages | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/brand/dispatch-spelling.js | dispatch | Pipeline dispatcher for UK spelling enforcement on v2 docs | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | v2 MDX pages | D-GOV-03 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/brand/dispatch-voice-register.js | dispatch | Pipeline dispatcher for voice register: assertive voice, no hedging, per-audience phrasing | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | v2 MDX pages | D-GOV-03 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/health/dispatch-wcag.js | dispatch | Pipeline dispatcher for WCAG accessibility (full lifecycle) | P3 (PR via --mode pr), P5/P6 (scheduled via --mode scheduled), manual (via --mode manual) | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | v2 MDX pages | D-GOV-03 (detect-repair-escalate-verify); D-GOV-07 (local CLI equivalence); D-GOV-08 (prevention chain layers 3-5) | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/governance/dispatch-workflow-governance.js | dispatch | Pipeline dispatcher for workflow-governance (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | .github/workflows/*.yml | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/governance/dispatch-workspace-retention.js | dispatch | Pipeline dispatcher for workspace-retention (full lifecycle: detect → repair → verify → escalate) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | workspace/ | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/dispatch/content/copy/dispatch-ownerless-language.js | dispatch | Pipeline for ownerless-repo language enforcement (no "we", "our", owner-dependent phrasing) | P3 (PR), P5/P6 (scheduled), manual | manual (none) | MISMATCH:phantom claim P3, P5, P6 | stdout only | No | v2 MDX pages | D-GOV-03 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/remediators/content/health/repair-openapi-reference.js | remediator | Regenerate OpenAPI reference docs from canonical spec source, open PR on drift | P6 / manual via dispatch-openapi-reference.js | manual (none) | MISMATCH:phantom claim P6 | stdout only | No | v2/gateways/.../api-reference/, ai/worker/api/openapi.yaml | D-GOV-03 (paired remediator) | 7/9 | F | invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/remediators/content/structure/repair-anchor-usage.js | remediator | Repair broken in-page anchor links by recomputing heading slugs and fuzzy-matching anchor text | P6 / manual via dispatch-page-structure.js | manual (none) | MISMATCH:phantom claim P6 | stdout only | No | v2 MDX pages | D-GOV-03 (paired remediator for every detector) | 7/9 | F | invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/remediators/content/health/repair-broken-links.js | remediator | Repair broken internal links by recomputing canonical paths from docs.json | P6 / manual via dispatch-page-rendering.js | manual (none) | MISMATCH:phantom claim P6 | stdout only | No | v2 MDX pages (internal links only) | D-GOV-03 (paired remediator) | 7/9 | F | invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/remediators/content/quality/repair-content-quality.js | remediator | Repair deterministic content quality findings (orphan TODO markers, missing trailing newlines on changelogs) | P6 / manual via dispatch-content-quality.js | manual (none) | MISMATCH:phantom claim P6 | stdout only | No | v2 MDX pages | D-GOV-03 (paired remediator) | 7/9 | F | invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/remediators/content/structure/repair-lint-structure.js | remediator | Repair structural lint findings (trailing whitespace, missing trailing newline, doubled blank lines) | P6 / manual via dispatch-page-structure.js | manual (none) | MISMATCH:phantom claim P6 | stdout only | No | v2 MDX pages | D-GOV-03 (paired remediator) | 7/9 | F | invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/remediators/content/structure/repair-description-quality.js | remediator | Repair v2 frontmatter description quality (trim boilerplate openings, normalise length) | P6 / manual via dispatch-page-structure.js | manual (none) | MISMATCH:phantom claim P6 | stdout only | No | v2 MDX frontmatter | D-GOV-03 (paired remediator) | 7/9 | F | invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/audits/governance/repo/audit-folder-allowlist.js | audit | Scheduled audit of folder-allowlist drift across all governed folders (D-GOV-08 layer 5) | P5 (scheduled scan) called by dispatch-folder-allowlist.js --mode scheduled | manual (none) | MISMATCH:phantom claim P5 | operations/scripts/audits/governance/repo/folder-allowlist, operations/scripts/audits/governance/repo/audit.md, operations/scripts/audits/governance/repo/audit.json | No | repo root, .github/, ai-tools/, docs-guide/, tools/config/, snippets/, workspace/ (any folder declaring .allowlist) | D-GOV-08 (every folder is governed; prevention at earliest layer) | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/audits/content/health/audit-wcag.js | audit | Scheduled WCAG accessibility scan across all v2 pages | P5 (scheduled, advisory) | manual (none) | MISMATCH:phantom claim P5 | operations/scripts/audits/content/health/wcag | No | v2 MDX pages | D-GOV-03 (no headless scans), D-GOV-07 (local CLI equivalence) | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |
| operations/scripts/validators/content/health/check-wcag.js | validator | WCAG accessibility validation for changed v2 MDX pages | P3 (PR advisory) | manual (none) | MISMATCH:phantom claim P3 | stdout only | No | v2 MDX pages | D-GOV-03 (detect-repair-escalate-verify), D-GOV-07 (local CLI equivalence) | 7/9 | F | invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline |

## P1 - Commit gate

| Path | Category | Purpose | Pipeline claimed | Pipeline actual | Pipeline verdict | Outputs | Triggers downstream? | Scope | Needs | Header completeness | Grade | Flags |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| .githooks/pre-commit | orchestrator | infrastructure:pipeline-orchestration | P1 (commit, hook entry point) | P1 (pre-commit) | MATCH | stdout only | No | .githooks | R-R29 | 8/9 | B | header-json-category-mismatch |
| operations/scripts/validators/governance/repo/check-folder-allowlist.js | validator | Validate every governed folder against its declared .allowlist (D-GOV-08 layer 3) | P3 (PR validator) called by dispatch-folder-allowlist.js | P1 (pre-commit); indirect via .githooks/pre-commit | MISMATCH:phantom claim P3; undeclared automation P1 | stdout only | No | repo root, .github/, ai-tools/, docs-guide/, tools/config/, snippets/, workspace/ (any folder declaring .allowlist) | D-GOV-08 (every folder is governed; prevention at earliest layer) | 7/9 | F | invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, phantom-pipeline, undeclared-automation |

## P2 - Push gate

| Path | Category | Purpose | Pipeline claimed | Pipeline actual | Pipeline verdict | Outputs | Triggers downstream? | Scope | Needs | Header completeness | Grade | Flags |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| operations/scripts/dispatch/content/discoverability/dispatch-discoverability-check.js | dispatch | check meta dispatcher: bundles discoverability pipelines in --mode pr | P3 | P2 (Discoverability Pipeline); P3 (Discoverability Pipeline); P5 (Discoverability Pipeline cron 0 4 * * *); P6 (Discoverability Pipeline) | MISMATCH:undeclared automation P2, P5, P6 | stdout only | No | all discoverability pipelines | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, undeclared-automation |
| operations/scripts/dispatch/governance/dispatch-governance-check.js | dispatch | check meta dispatcher: bundles governance pipelines in --mode pr | P3 | P2 (Governance Pipeline); P3 (Governance Pipeline); P5 (Governance Pipeline cron 0 7 * * *); P6 (Governance Pipeline) | MISMATCH:undeclared automation P2, P5, P6 | stdout only | No | all governance pipelines | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, undeclared-automation |
| operations/scripts/dispatch/content/maintenance/dispatch-maintenance-check.js | dispatch | check meta dispatcher: bundles maintenance pipelines in --mode pr | P3 | P2 (Maintenance Pipeline); P3 (Maintenance Pipeline); P5 (Maintenance Pipeline cron 0 5 * * *); P6 (Maintenance Pipeline) | MISMATCH:undeclared automation P2, P5, P6 | stdout only | No | all maintenance pipelines | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, undeclared-automation |
| operations/scripts/dispatch/content/discoverability/dispatch-discoverability-generate.js | dispatch | generate meta dispatcher: bundles discoverability pipelines in --mode post-merge | P4 | P2 (Discoverability Pipeline); P3 (Discoverability Pipeline); P5 (Discoverability Pipeline cron 0 4 * * *); P6 (Discoverability Pipeline) | MISMATCH:undeclared automation P2, P3, P5, P6 | stdout only | No | all discoverability pipelines | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, undeclared-automation |
| operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js | dispatch | generate meta dispatcher: bundles maintenance pipelines in --mode post-merge | P4 | P2 (Maintenance Pipeline); P3 (Maintenance Pipeline); P5 (Maintenance Pipeline cron 0 5 * * *); P6 (Maintenance Pipeline) | MISMATCH:undeclared automation P2, P3, P5, P6 | stdout only | No | all maintenance pipelines | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, undeclared-automation |
| operations/scripts/dispatch/content/discoverability/dispatch-discoverability-repair.js | dispatch | repair meta dispatcher: bundles discoverability pipelines in --mode manual | manual | P2 (Discoverability Pipeline); P3 (Discoverability Pipeline); P5 (Discoverability Pipeline cron 0 4 * * *); P6 (Discoverability Pipeline) | MISMATCH:undeclared automation P2, P3, P5, P6 | stdout only | No | all discoverability pipelines | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, undeclared-automation |
| operations/scripts/dispatch/governance/dispatch-governance-scan.js | dispatch | scan meta dispatcher: bundles governance pipelines in --mode scheduled | P5/P6 | P2 (Governance Pipeline); P3 (Governance Pipeline); P5 (Governance Pipeline cron 0 7 * * *); P6 (Governance Pipeline) | MISMATCH:undeclared automation P2, P3 | stdout only | No | all governance pipelines | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, undeclared-automation |
| operations/scripts/dispatch/governance/dispatch-governance-sync.js | dispatch | sync meta dispatcher: bundles governance pipelines in --mode post-merge | manual | P2 (Governance Pipeline); P3 (Governance Pipeline); P5 (Governance Pipeline cron 0 7 * * *); P6 (Governance Pipeline) | MISMATCH:undeclared automation P2, P3, P5, P6 | stdout only | No | all governance pipelines | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, undeclared-automation |
| operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js | dispatch | update meta dispatcher: bundles maintenance pipelines in --mode scheduled | P5-auto | P2 (Maintenance Pipeline); P3 (Maintenance Pipeline); P5 (Maintenance Pipeline cron 0 5 * * *); P6 (Maintenance Pipeline) | MISMATCH:undeclared automation P2, P3, P6 | stdout only | No | all maintenance pipelines | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, undeclared-automation |

## P3 - PR gate

| Path | Category | Purpose | Pipeline claimed | Pipeline actual | Pipeline verdict | Outputs | Triggers downstream? | Scope | Needs | Header completeness | Grade | Flags |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| operations/scripts/dispatch/content/copy/dispatch-copy-check.js | dispatch | check meta dispatcher: bundles copy pipelines in --mode pr | P3 | P3 (Copy Pipeline); P5 (Copy Pipeline cron 0 3 * * *); P6 (Copy Pipeline) | MISMATCH:undeclared automation P5, P6 | stdout only | No | all copy pipelines | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, undeclared-automation |
| operations/scripts/dispatch/content/brand/dispatch-brand-repair.js | dispatch | Manual meta dispatcher: brand pipelines in --mode manual (repair only) | manual | P3 (Brand Pipeline); P5 (Brand Pipeline cron 30 6 * * 1); P6 (Brand Pipeline) | MISMATCH:undeclared automation P3, P5, P6 | stdout only | No | brand pipelines with remediators | D-GOV-03 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, undeclared-automation |
| operations/scripts/dispatch/content/health/dispatch-health-repair.js | dispatch | Manual meta dispatcher: bundles health pipelines in --mode manual (repair only) | manual | P3 (Health Pipeline); P5 (Health Pipeline cron 0 6 * * *); P6 (Health Pipeline) | MISMATCH:undeclared automation P3, P5, P6 | stdout only | No | all health pipelines with remediators | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, undeclared-automation |
| operations/scripts/dispatch/content/brand/dispatch-brand-check.js | dispatch | PR-time meta dispatcher: bundles all brand pipelines in --mode pr | P3 (PR) | P3 (Brand Pipeline); P5 (Brand Pipeline cron 30 6 * * 1); P6 (Brand Pipeline) | MISMATCH:undeclared automation P5, P6 | stdout only | No | all brand pipelines | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, undeclared-automation |
| operations/scripts/dispatch/content/health/dispatch-health-check.js | dispatch | PR-time meta dispatcher: bundles all health pipelines in --mode pr | P3 (PR) | P3 (Health Pipeline); P5 (Health Pipeline cron 0 6 * * *); P6 (Health Pipeline) | MISMATCH:undeclared automation P5, P6 | stdout only | No | all health pipelines | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, undeclared-automation |
| operations/scripts/dispatch/content/copy/dispatch-copy-repair.js | dispatch | repair meta dispatcher: bundles copy pipelines in --mode manual | manual | P3 (Copy Pipeline); P5 (Copy Pipeline cron 0 3 * * *); P6 (Copy Pipeline) | MISMATCH:undeclared automation P3, P5, P6 | stdout only | No | all copy pipelines | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, undeclared-automation |
| operations/scripts/dispatch/content/brand/dispatch-brand-scan.js | dispatch | Scheduled meta dispatcher: brand pipelines in --mode scheduled | P5/P6 | P3 (Brand Pipeline); P5 (Brand Pipeline cron 30 6 * * 1); P6 (Brand Pipeline) | MISMATCH:undeclared automation P3 | stdout only | No | brand pipelines | D-GOV-03 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, undeclared-automation |
| operations/scripts/dispatch/content/health/dispatch-health-scan.js | dispatch | Scheduled meta dispatcher: bundles all health pipelines in --mode scheduled | P5/P6 (scheduled) | P3 (Health Pipeline); P5 (Health Pipeline cron 0 6 * * *); P6 (Health Pipeline) | MISMATCH:undeclared automation P3 | stdout only | No | all health pipelines | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, undeclared-automation |
| operations/scripts/dispatch/content/copy/dispatch-copy-update.js | dispatch | update meta dispatcher: bundles copy pipelines in --mode scheduled | P5-auto | P3 (Copy Pipeline); P5 (Copy Pipeline cron 0 3 * * *); P6 (Copy Pipeline) | MISMATCH:undeclared automation P3, P6 | stdout only | No | all copy pipelines | D-GOV-03; D-GOV-07 | 7/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch, undeclared-automation |

## Indirect - Library

| Path | Category | Purpose | Pipeline claimed | Pipeline actual | Pipeline verdict | Outputs | Triggers downstream? | Scope | Needs | Header completeness | Grade | Flags |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| tools/lib/governance/folder-allowlist.js | MISSING | Shared folder-allowlist helper. Reads .allowlist, lists actual entries, computes drift. | MISSING | indirect via operations/scripts/audits/governance/repo/audit-folder-allowlist.js; indirect via operations/scripts/remediators/governance/repo/repair-folder-allowlist.js; indirect via operations/scripts/validators/governance/repo/check-folder-allowlist.js | MISSING | none detected | No | MISSING | D-GOV-08 (every folder is governed) | 2/9 | F | missing-category, invalid-purpose, missing-scope, missing-domain, missing-purpose-statement, missing-pipeline, missing-usage, header-json-category-mismatch |
| tools/lib/governance/pipeline-mode.js | MISSING | Shared mode contract for pipeline dispatchers. Parses --mode pr\|scheduled\|manual + common flags. | MISSING | indirect via operations/scripts/dispatch/content/brand/dispatch-banned-words.js; indirect via operations/scripts/dispatch/content/brand/dispatch-brand-check.js; indirect via operations/scripts/dispatch/content/brand/dispatch-brand-repair.js; indirect via operations/scripts/dispatch/content/brand/dispatch-brand-scan.js; indirect via operations/scripts/dispatch/content/brand/dispatch-em-dashes.js; indirect via operations/scripts/dispatch/content/brand/dispatch-grammar-en-gb.js; indirect via operations/scripts/dispatch/content/brand/dispatch-proper-nouns.js; indirect via operations/scripts/dispatch/content/brand/dispatch-spelling.js; indirect via operations/scripts/dispatch/content/brand/dispatch-style-tokens.js; indirect via operations/scripts/dispatch/content/brand/dispatch-voice-register.js; indirect via operations/scripts/dispatch/content/copy/dispatch-canonical-sync.js; indirect via operations/scripts/dispatch/content/copy/dispatch-changelogs.js; indirect via operations/scripts/dispatch/content/copy/dispatch-copy-check.js; indirect via operations/scripts/dispatch/content/copy/dispatch-copy-repair.js; indirect via operations/scripts/dispatch/content/copy/dispatch-copy-update.js; indirect via operations/scripts/dispatch/content/copy/dispatch-ownerless-language.js; indirect via operations/scripts/dispatch/content/copy/dispatch-showcase.js; indirect via operations/scripts/dispatch/content/copy/dispatch-social-feeds.js; indirect via operations/scripts/dispatch/content/copy/dispatch-translations.js; indirect via operations/scripts/dispatch/content/discoverability/dispatch-ai-sitemap.js; indirect via operations/scripts/dispatch/content/discoverability/dispatch-companions.js; indirect via operations/scripts/dispatch/content/discoverability/dispatch-discoverability-check.js; indirect via operations/scripts/dispatch/content/discoverability/dispatch-discoverability-generate.js; indirect via operations/scripts/dispatch/content/discoverability/dispatch-discoverability-repair.js; indirect via operations/scripts/dispatch/content/discoverability/dispatch-llms-files.js; indirect via operations/scripts/dispatch/content/discoverability/dispatch-og-images.js; indirect via operations/scripts/dispatch/content/discoverability/dispatch-seo-metadata.js; indirect via operations/scripts/dispatch/content/health/dispatch-content-quality.js; indirect via operations/scripts/dispatch/content/health/dispatch-health-check.js; indirect via operations/scripts/dispatch/content/health/dispatch-health-repair.js; indirect via operations/scripts/dispatch/content/health/dispatch-health-scan.js; indirect via operations/scripts/dispatch/content/health/dispatch-openapi-reference.js; indirect via operations/scripts/dispatch/content/health/dispatch-page-integrity.js; indirect via operations/scripts/dispatch/content/health/dispatch-page-rendering.js; indirect via operations/scripts/dispatch/content/health/dispatch-page-structure.js; indirect via operations/scripts/dispatch/content/health/dispatch-wcag.js; indirect via operations/scripts/dispatch/content/maintenance/dispatch-catalogs.js; indirect via operations/scripts/dispatch/content/maintenance/dispatch-component-registry.js; indirect via operations/scripts/dispatch/content/maintenance/dispatch-config-flags.js; indirect via operations/scripts/dispatch/content/maintenance/dispatch-contract-addresses.js; indirect via operations/scripts/dispatch/content/maintenance/dispatch-contract-shadow.js; indirect via operations/scripts/dispatch/content/maintenance/dispatch-docs-index.js; indirect via operations/scripts/dispatch/content/maintenance/dispatch-exchanges-data.js; indirect via operations/scripts/dispatch/content/maintenance/dispatch-large-assets.js; indirect via operations/scripts/dispatch/content/maintenance/dispatch-maintenance-check.js; indirect via operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js; indirect via operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js; indirect via operations/scripts/dispatch/content/maintenance/dispatch-release-version.js; indirect via operations/scripts/dispatch/content/maintenance/dispatch-sdk-clients.js; indirect via operations/scripts/dispatch/governance/dispatch-action-docs.js; indirect via operations/scripts/dispatch/governance/dispatch-codex-compliance.js; indirect via operations/scripts/dispatch/governance/dispatch-governance-check.js; indirect via operations/scripts/dispatch/governance/dispatch-governance-generate.js; indirect via operations/scripts/dispatch/governance/dispatch-governance-map.js; indirect via operations/scripts/dispatch/governance/dispatch-governance-scan.js; indirect via operations/scripts/dispatch/governance/dispatch-governance-sync.js; indirect via operations/scripts/dispatch/governance/dispatch-jsdoc-headers.js; indirect via operations/scripts/dispatch/governance/dispatch-new-file-governance.js; indirect via operations/scripts/dispatch/governance/dispatch-pipelines.js; indirect via operations/scripts/dispatch/governance/dispatch-root-governance.js; indirect via operations/scripts/dispatch/governance/dispatch-script-inventory.js; indirect via operations/scripts/dispatch/governance/dispatch-script-locations.js; indirect via operations/scripts/dispatch/governance/dispatch-script-registry.js; indirect via operations/scripts/dispatch/governance/dispatch-workflow-governance.js; indirect via operations/scripts/dispatch/governance/dispatch-workspace-retention.js | MISSING | stdout only | No | MISSING | D-GOV-07 (local CLI equivalence); D-GOV-03 (detect-repair-escalate-verify) | 2/9 | F | missing-category, invalid-purpose, missing-scope, missing-domain, missing-purpose-statement, missing-pipeline, missing-usage, header-json-category-mismatch |

## Manual - CLI only

| Path | Category | Purpose | Pipeline claimed | Pipeline actual | Pipeline verdict | Outputs | Triggers downstream? | Scope | Needs | Header completeness | Grade | Flags |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| operations/scripts/dispatch/governance/pre-tool-guard.js | dispatch | * @description Mechanically enforces co-work rules before tool execution. Blocks destructive git, public posts, and unconfirmed writes. | PreToolUse hook → reads stdin tool input → decision (allow/block/warn) | manual (none) | MATCH | stdout only | No | .claude/settings.json PreToolUse hook | MISSING | 6/9 | F | invalid-category, invalid-purpose, invalid-scope, missing-domain, missing-needs, header-json-category-mismatch |
| operations/tests/integration/pipeline-smoke-test.js | validator | Universal smoke test for all pipeline dispatchers — runs each in --dry-run --mode pr, asserts clean exit, reports per-pipeline status | manual (run before any dispatcher merge) | manual (none) | MATCH | stdout only | No | all pipeline + meta dispatchers | D-GOV-07 (every script is locally runnable); D-GOV-03 (detect-repair-verify) | 7/9 | F | invalid-purpose, invalid-scope, missing-domain, header-json-category-mismatch |

## Discrepancies

### Phantom pipeline claims

- operations/scripts/audits/content/health/audit-wcag.js
- operations/scripts/audits/governance/repo/audit-folder-allowlist.js
- operations/scripts/dispatch/content/brand/dispatch-banned-words.js
- operations/scripts/dispatch/content/brand/dispatch-em-dashes.js
- operations/scripts/dispatch/content/brand/dispatch-grammar-en-gb.js
- operations/scripts/dispatch/content/brand/dispatch-proper-nouns.js
- operations/scripts/dispatch/content/brand/dispatch-spelling.js
- operations/scripts/dispatch/content/brand/dispatch-style-tokens.js
- operations/scripts/dispatch/content/brand/dispatch-voice-register.js
- operations/scripts/dispatch/content/copy/dispatch-canonical-sync.js
- operations/scripts/dispatch/content/copy/dispatch-changelogs.js
- operations/scripts/dispatch/content/copy/dispatch-ownerless-language.js
- operations/scripts/dispatch/content/copy/dispatch-showcase.js
- operations/scripts/dispatch/content/copy/dispatch-social-feeds.js
- operations/scripts/dispatch/content/copy/dispatch-translations.js
- operations/scripts/dispatch/content/discoverability/dispatch-ai-sitemap.js
- operations/scripts/dispatch/content/discoverability/dispatch-companions.js
- operations/scripts/dispatch/content/discoverability/dispatch-llms-files.js
- operations/scripts/dispatch/content/discoverability/dispatch-og-images.js
- operations/scripts/dispatch/content/discoverability/dispatch-seo-metadata.js
- operations/scripts/dispatch/content/health/dispatch-content-quality.js
- operations/scripts/dispatch/content/health/dispatch-openapi-reference.js
- operations/scripts/dispatch/content/health/dispatch-page-integrity.js
- operations/scripts/dispatch/content/health/dispatch-page-rendering.js
- operations/scripts/dispatch/content/health/dispatch-page-structure.js
- operations/scripts/dispatch/content/health/dispatch-wcag.js
- operations/scripts/dispatch/content/maintenance/dispatch-catalogs.js
- operations/scripts/dispatch/content/maintenance/dispatch-component-registry.js
- operations/scripts/dispatch/content/maintenance/dispatch-config-flags.js
- operations/scripts/dispatch/content/maintenance/dispatch-contract-addresses.js
- operations/scripts/dispatch/content/maintenance/dispatch-contract-shadow.js
- operations/scripts/dispatch/content/maintenance/dispatch-docs-index.js
- operations/scripts/dispatch/content/maintenance/dispatch-exchanges-data.js
- operations/scripts/dispatch/content/maintenance/dispatch-large-assets.js
- operations/scripts/dispatch/content/maintenance/dispatch-release-version.js
- operations/scripts/dispatch/content/maintenance/dispatch-sdk-clients.js
- operations/scripts/dispatch/governance/dispatch-action-docs.js
- operations/scripts/dispatch/governance/dispatch-codex-compliance.js
- operations/scripts/dispatch/governance/dispatch-folder-allowlist.js
- operations/scripts/dispatch/governance/dispatch-governance-map.js
- operations/scripts/dispatch/governance/dispatch-jsdoc-headers.js
- operations/scripts/dispatch/governance/dispatch-new-file-governance.js
- operations/scripts/dispatch/governance/dispatch-pipelines.js
- operations/scripts/dispatch/governance/dispatch-root-governance.js
- operations/scripts/dispatch/governance/dispatch-script-inventory.js
- operations/scripts/dispatch/governance/dispatch-script-locations.js
- operations/scripts/dispatch/governance/dispatch-script-registry.js
- operations/scripts/dispatch/governance/dispatch-workflow-governance.js
- operations/scripts/dispatch/governance/dispatch-workspace-retention.js
- operations/scripts/remediators/content/health/repair-broken-links.js
- operations/scripts/remediators/content/health/repair-openapi-reference.js
- operations/scripts/remediators/content/health/repair-wcag.js
- operations/scripts/remediators/content/quality/repair-content-quality.js
- operations/scripts/remediators/content/structure/repair-anchor-usage.js
- operations/scripts/remediators/content/structure/repair-description-quality.js
- operations/scripts/remediators/content/structure/repair-lint-structure.js
- operations/scripts/remediators/content/style/remediate-voice-violations.js
- operations/scripts/remediators/governance/repo/repair-folder-allowlist.js
- operations/scripts/validators/content/health/check-broken-links.js
- operations/scripts/validators/content/health/check-wcag.js
- operations/scripts/validators/governance/repo/check-folder-allowlist.js

### Undeclared automation

- operations/scripts/dispatch/content/brand/dispatch-brand-check.js
- operations/scripts/dispatch/content/brand/dispatch-brand-repair.js
- operations/scripts/dispatch/content/brand/dispatch-brand-scan.js
- operations/scripts/dispatch/content/copy/dispatch-copy-check.js
- operations/scripts/dispatch/content/copy/dispatch-copy-repair.js
- operations/scripts/dispatch/content/copy/dispatch-copy-update.js
- operations/scripts/dispatch/content/discoverability/dispatch-discoverability-check.js
- operations/scripts/dispatch/content/discoverability/dispatch-discoverability-generate.js
- operations/scripts/dispatch/content/discoverability/dispatch-discoverability-repair.js
- operations/scripts/dispatch/content/health/dispatch-health-check.js
- operations/scripts/dispatch/content/health/dispatch-health-repair.js
- operations/scripts/dispatch/content/health/dispatch-health-scan.js
- operations/scripts/dispatch/content/maintenance/dispatch-maintenance-check.js
- operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js
- operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js
- operations/scripts/dispatch/governance/dispatch-governance-check.js
- operations/scripts/dispatch/governance/dispatch-governance-scan.js
- operations/scripts/dispatch/governance/dispatch-governance-sync.js
- operations/scripts/validators/governance/repo/check-folder-allowlist.js

### Not in classification JSON

- None

### Phantom JSON entries

- None

### Header/JSON mismatches

- .githooks/pre-commit
- operations/scripts/audits/content/health/audit-wcag.js
- operations/scripts/audits/governance/repo/audit-folder-allowlist.js
- operations/scripts/dispatch/content/brand/dispatch-banned-words.js
- operations/scripts/dispatch/content/brand/dispatch-brand-check.js
- operations/scripts/dispatch/content/brand/dispatch-brand-repair.js
- operations/scripts/dispatch/content/brand/dispatch-brand-scan.js
- operations/scripts/dispatch/content/brand/dispatch-em-dashes.js
- operations/scripts/dispatch/content/brand/dispatch-grammar-en-gb.js
- operations/scripts/dispatch/content/brand/dispatch-proper-nouns.js
- operations/scripts/dispatch/content/brand/dispatch-spelling.js
- operations/scripts/dispatch/content/brand/dispatch-style-tokens.js
- operations/scripts/dispatch/content/brand/dispatch-voice-register.js
- operations/scripts/dispatch/content/copy/dispatch-canonical-sync.js
- operations/scripts/dispatch/content/copy/dispatch-changelogs.js
- operations/scripts/dispatch/content/copy/dispatch-copy-check.js
- operations/scripts/dispatch/content/copy/dispatch-copy-repair.js
- operations/scripts/dispatch/content/copy/dispatch-copy-update.js
- operations/scripts/dispatch/content/copy/dispatch-ownerless-language.js
- operations/scripts/dispatch/content/copy/dispatch-showcase.js
- operations/scripts/dispatch/content/copy/dispatch-social-feeds.js
- operations/scripts/dispatch/content/copy/dispatch-translations.js
- operations/scripts/dispatch/content/discoverability/dispatch-ai-sitemap.js
- operations/scripts/dispatch/content/discoverability/dispatch-companions.js
- operations/scripts/dispatch/content/discoverability/dispatch-discoverability-check.js
- operations/scripts/dispatch/content/discoverability/dispatch-discoverability-generate.js
- operations/scripts/dispatch/content/discoverability/dispatch-discoverability-repair.js
- operations/scripts/dispatch/content/discoverability/dispatch-llms-files.js
- operations/scripts/dispatch/content/discoverability/dispatch-og-images.js
- operations/scripts/dispatch/content/discoverability/dispatch-seo-metadata.js
- operations/scripts/dispatch/content/health/dispatch-content-quality.js
- operations/scripts/dispatch/content/health/dispatch-health-check.js
- operations/scripts/dispatch/content/health/dispatch-health-repair.js
- operations/scripts/dispatch/content/health/dispatch-health-scan.js
- operations/scripts/dispatch/content/health/dispatch-openapi-reference.js
- operations/scripts/dispatch/content/health/dispatch-page-integrity.js
- operations/scripts/dispatch/content/health/dispatch-page-rendering.js
- operations/scripts/dispatch/content/health/dispatch-page-structure.js
- operations/scripts/dispatch/content/health/dispatch-wcag.js
- operations/scripts/dispatch/content/maintenance/dispatch-catalogs.js
- operations/scripts/dispatch/content/maintenance/dispatch-component-registry.js
- operations/scripts/dispatch/content/maintenance/dispatch-config-flags.js
- operations/scripts/dispatch/content/maintenance/dispatch-contract-addresses.js
- operations/scripts/dispatch/content/maintenance/dispatch-contract-shadow.js
- operations/scripts/dispatch/content/maintenance/dispatch-docs-index.js
- operations/scripts/dispatch/content/maintenance/dispatch-exchanges-data.js
- operations/scripts/dispatch/content/maintenance/dispatch-large-assets.js
- operations/scripts/dispatch/content/maintenance/dispatch-maintenance-check.js
- operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js
- operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js
- operations/scripts/dispatch/content/maintenance/dispatch-release-version.js
- operations/scripts/dispatch/content/maintenance/dispatch-sdk-clients.js
- operations/scripts/dispatch/governance/dispatch-action-docs.js
- operations/scripts/dispatch/governance/dispatch-codex-compliance.js
- operations/scripts/dispatch/governance/dispatch-folder-allowlist.js
- operations/scripts/dispatch/governance/dispatch-governance-check.js
- operations/scripts/dispatch/governance/dispatch-governance-generate.js
- operations/scripts/dispatch/governance/dispatch-governance-map.js
- operations/scripts/dispatch/governance/dispatch-governance-scan.js
- operations/scripts/dispatch/governance/dispatch-governance-sync.js
- operations/scripts/dispatch/governance/dispatch-jsdoc-headers.js
- operations/scripts/dispatch/governance/dispatch-new-file-governance.js
- operations/scripts/dispatch/governance/dispatch-pipelines.js
- operations/scripts/dispatch/governance/dispatch-root-governance.js
- operations/scripts/dispatch/governance/dispatch-script-inventory.js
- operations/scripts/dispatch/governance/dispatch-script-locations.js
- operations/scripts/dispatch/governance/dispatch-script-registry.js
- operations/scripts/dispatch/governance/dispatch-workflow-governance.js
- operations/scripts/dispatch/governance/dispatch-workspace-retention.js
- operations/scripts/dispatch/governance/pre-tool-guard.js
- operations/scripts/remediators/content/health/repair-broken-links.js
- operations/scripts/remediators/content/health/repair-openapi-reference.js
- operations/scripts/remediators/content/health/repair-wcag.js
- operations/scripts/remediators/content/quality/repair-content-quality.js
- operations/scripts/remediators/content/structure/repair-anchor-usage.js
- operations/scripts/remediators/content/structure/repair-description-quality.js
- operations/scripts/remediators/content/structure/repair-lint-structure.js
- operations/scripts/remediators/content/style/remediate-voice-violations.js
- operations/scripts/remediators/governance/repo/repair-folder-allowlist.js
- operations/scripts/validators/content/health/check-broken-links.js
- operations/scripts/validators/content/health/check-wcag.js
- operations/scripts/validators/governance/repo/check-folder-allowlist.js
- operations/tests/integration/pipeline-smoke-test.js
- tools/lib/governance/folder-allowlist.js
- tools/lib/governance/pipeline-mode.js

### Output chains

- None

## Needs Human

- operations/scripts/audits/content/health/audit-wcag.js: @category, @purpose, @scope, @pipeline
- operations/scripts/audits/governance/repo/audit-folder-allowlist.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-banned-words.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-brand-check.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-brand-repair.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-brand-scan.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-em-dashes.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-grammar-en-gb.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-proper-nouns.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-spelling.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-style-tokens.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/brand/dispatch-voice-register.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/copy/dispatch-canonical-sync.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/copy/dispatch-changelogs.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/copy/dispatch-copy-check.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/copy/dispatch-copy-repair.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/copy/dispatch-copy-update.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/copy/dispatch-ownerless-language.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/copy/dispatch-showcase.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/copy/dispatch-social-feeds.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/copy/dispatch-translations.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/discoverability/dispatch-ai-sitemap.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/discoverability/dispatch-companions.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/discoverability/dispatch-discoverability-check.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/discoverability/dispatch-discoverability-generate.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/discoverability/dispatch-discoverability-repair.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/discoverability/dispatch-llms-files.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/discoverability/dispatch-og-images.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/discoverability/dispatch-seo-metadata.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/health/dispatch-content-quality.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/health/dispatch-health-check.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/health/dispatch-health-repair.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/health/dispatch-health-scan.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/health/dispatch-openapi-reference.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/health/dispatch-page-integrity.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/health/dispatch-page-rendering.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/health/dispatch-page-structure.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/health/dispatch-wcag.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-catalogs.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-component-registry.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-config-flags.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-contract-addresses.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-contract-shadow.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-docs-index.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-exchanges-data.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-large-assets.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-maintenance-check.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-maintenance-generate.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-maintenance-update.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-release-version.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/content/maintenance/dispatch-sdk-clients.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-action-docs.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/governance/dispatch-codex-compliance.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-folder-allowlist.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-governance-check.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-governance-generate.js: @category, @purpose, @scope
- operations/scripts/dispatch/governance/dispatch-governance-map.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-governance-scan.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-governance-sync.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-jsdoc-headers.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-new-file-governance.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-pipelines.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-root-governance.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-script-inventory.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-script-locations.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-script-registry.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/governance/dispatch-workflow-governance.js: @category, @purpose, @scope, @pipeline
- operations/scripts/dispatch/governance/dispatch-workspace-retention.js: @category, @purpose, @pipeline
- operations/scripts/dispatch/governance/pre-tool-guard.js: @category, @purpose, @scope, @needs
- operations/scripts/remediators/content/health/repair-broken-links.js: @purpose, @scope, @pipeline
- operations/scripts/remediators/content/health/repair-openapi-reference.js: @purpose, @scope, @pipeline
- operations/scripts/remediators/content/health/repair-wcag.js: @purpose, @scope, @pipeline
- operations/scripts/remediators/content/quality/repair-content-quality.js: @purpose, @scope, @pipeline
- operations/scripts/remediators/content/structure/repair-anchor-usage.js: @purpose, @scope, @pipeline
- operations/scripts/remediators/content/structure/repair-description-quality.js: @purpose, @scope, @pipeline
- operations/scripts/remediators/content/structure/repair-lint-structure.js: @purpose, @scope, @pipeline
- operations/scripts/remediators/content/style/remediate-voice-violations.js: @purpose, @scope, @pipeline
- operations/scripts/remediators/governance/repo/repair-folder-allowlist.js: @purpose, @scope, @pipeline
- operations/scripts/validators/content/health/check-broken-links.js: @purpose, @scope, @pipeline
- operations/scripts/validators/content/health/check-wcag.js: @purpose, @scope, @pipeline
- operations/scripts/validators/governance/repo/check-folder-allowlist.js: @purpose, @scope, @pipeline
- operations/tests/integration/pipeline-smoke-test.js: @purpose, @scope
- tools/lib/governance/folder-allowlist.js: @category, @purpose, @scope, @purpose-statement, @pipeline
- tools/lib/governance/pipeline-mode.js: @category, @purpose, @scope, @purpose-statement, @pipeline

