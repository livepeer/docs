# Render Gate Remediation Lookup — Gap Report

> Generated: 2026-04-07
> Scope: `ERROR_TO_REMEDIATOR` registry in `operations/scripts/dispatch/governance/mdx-render-gate.js` vs all available remediation/validation infrastructure

---

## Context

Fix 4 of the render gate patch (2026-04-07) added a remediation lookup system to `mdx-render-gate.js`. When the gate blocks an edit, it pattern-matches the error against known remediator scripts and suggests the fix command. This report audits what that lookup covers vs what actually exists in the repo.

---

## Current Coverage: 6 entries in `ERROR_TO_REMEDIATOR`

| # | Error pattern | Script | Status |
|---|---|---|---|
| 1 | `frontmatter\|duplicate.*key\|yaml.*syntax` | `operations/scripts/dispatch/governance/mdx-frontmatter-sanitise.js` | Registered |
| 2 | `import\|unused.*import\|cannot.*find.*module` | `operations/scripts/remediators/content/repair/repair-page-imports.js` | Registered |
| 3 | `markdown\|html.*comment\|br.*tag\|angle.*bracket` | `operations/scripts/remediators/content/repair/repair-mdx-safe-markdown.js` | Registered |
| 4 | `href\|link\|relative.*path\|page.*not.*found` | `operations/scripts/remediators/content/repair/repair-page-links.js` | Registered |
| 5 | `spell\|typo` | `operations/scripts/remediators/content/repair/repair-spelling.js` | Registered |
| 6 | `governance\|GOVERNANCE\.md\|lastVerified` | `operations/scripts/remediators/governance/compliance/repair-governance-artifacts.js` | Registered |

---

## Gap A: Remediator scripts NOT in the lookup (15 missing)

| Script | Path | What it fixes | Suggested error pattern |
|---|---|---|---|
| repair-relative-page-hrefs.js | `remediators/content/repair/` | Relative href canonicalisation | `relative.*href\|\.\/\|\.\.\/` |
| sync-docs-paths.js | `remediators/content/repair/` | Stale docs-path references after file moves | `docs-path\|moved\|renamed\|stale.*path` |
| sync-mintlify-canonical-consumers.js | `remediators/content/repair/` | Mintlify consumer registry drift | `mintlify.*consumer\|registry.*drift\|canonical.*sync` |
| repair-ownerless-language.js | `remediators/content/style/` | Ownerless language patterns in prose | `ownerless\|passive.*voice\|unclear.*ownership` |
| wcag-repair-common.js | `remediators/content/style/` | WCAG accessibility issues | `accessibility\|wcag\|aria\|alt.*text\|contrast` |
| generate-seo.js | `remediators/content/seo/` | SEO metadata generation | `seo\|og:image\|meta.*description\|open.*graph` |
| repair-component-metadata.js | `remediators/components/library/` | Component registry metadata drift | `component.*registry\|component.*metadata\|export.*not.*found` |
| add-framework-headers.js | `remediators/content/classification/` | Missing framework classification headers | `framework.*header\|missing.*classification` |
| add-pagetype-mechanical.js | `remediators/content/classification/` | Missing pageType frontmatter | `pageType\|missing.*frontmatter.*type` |
| assign-purpose-metadata.js | `remediators/content/classification/` | Missing purpose metadata | `purpose\|missing.*metadata\|classification` |
| add-workflow-governance-headers.js | `remediators/governance/compliance/` | Missing workflow governance headers | `workflow.*header\|workflow.*governance` |
| update-jsdoc-headers.js | `remediators/governance/scaffold/` | Stale/missing JSDoc headers on scripts | `jsdoc\|script.*header\|missing.*@script` |
| fix-usage-paths.js | `remediators/governance/scaffold/` | Broken usage paths in scaffold | `usage.*path\|scaffold\|broken.*reference` |
| repair-script-inventory.js | `remediators/governance/scripts/` | Script inventory drift | `script.*inventory\|registry.*mismatch` |
| quarantine-manager.js | `remediators/content/repair/` | Quarantine workflow for risky cleanups | `quarantine\|deprecated\|cleanup.*risk` |

**All paths relative to `operations/scripts/`**

---

## Gap B: Validator scripts with no remediation mapping (45 validators, 0 mapped)

The render gate only maps errors to remediators (fix scripts). It does not reference validators (check scripts). When an error occurs, suggesting a validator helps the agent understand the full scope before attempting a fix.

### High-value validators to add

| Validator | Path | What it catches | When to suggest |
|---|---|---|---|
| lint-structure.js | `validators/content/structure/` | Missing required frontmatter, stale content, structural issues | Any structure-related render failure |
| lint-copy.js | `validators/content/copy/` | Banned words, prohibited phrases | Copy quality issues that surface as rendering problems |
| lint-patterns.js | `validators/content/copy/` | Tier 2 copy patterns (conditionals, negation, weakened assertions) | Copy pattern violations |
| check-component-health.js | `validators/components/library/` | Component import/export issues, metadata drift | Component-related render errors |
| check-mdx-safe-markdown.js | `validators/content/structure/` | MDX-unsafe markdown patterns | Markdown rendering failures |
| sweep-console-errors.js | `validators/content/structure/` | Full console error sweep across all pages | Any React/hydration error (broad scope check) |
| check-double-headers.js | `validators/content/structure/` | Duplicate H1/H2 headers | Header rendering issues |
| check-anchor-usage.js | `validators/content/structure/` | Broken anchor links | Anchor-related navigation failures |
| check-page-endings.js | `validators/content/structure/` | Malformed page endings | Truncated or broken page renders |
| check-description-quality.js | `validators/content/structure/` | Poor meta descriptions | SEO/meta-related issues |
| check-docs-path-sync.js | `validators/content/structure/` | Docs path out of sync | Path/route mismatches |
| check-grammar-en-gb.js | `validators/content/grammar/` | EN-GB grammar violations | Grammar/language issues |
| check-proper-nouns.js | `validators/content/grammar/` | Proper noun capitalisation errors | Capitalisation issues |
| check-voice-register.js | `validators/content/copy/` | Voice register violations per audience | Voice/tone mismatches |

### Remaining validators (not priority for render gate)

| Validator | Path | Reason for lower priority |
|---|---|---|
| check-naming-conventions.js | `validators/components/library/` | Component naming — not render errors |
| check-component-css.js | `validators/components/library/` | CSS auditing — not render errors |
| check-mdx-component-scope.js | `validators/components/library/` | Scope validation — architectural |
| component-layout-governance.js | `validators/components/library/` | Layout governance — design-time |
| check-component-docs.js | `validators/components/documentation/` | Docs completeness — not runtime |
| enforce-generated-file-banners.js | `validators/content/structure/` | Banner compliance — not render errors |
| regression-bisect.js | `validators/content/structure/` | Regression finding tool — manual use |
| sweep-delta-report.js | `validators/content/structure/` | Delta reporting — manual use |
| test-v2-pages.js | `validators/content/structure/` | Full page tests — heavy, manual use |
| verify-all-pages.js | `validators/content/structure/` | Blanket verification — heavy, manual use |
| docs-fact-registry.js | `validators/content/veracity/` | Fact verification — not render errors |
| check-translation-freshness.js | `validators/content/language-translation/` | Translation staleness — not render errors |
| validate-locks.js | `validators/ai/codex/` | Codex lock validation — CI only |
| check-companion-manifest.js | `validators/governance/ai/` | AI companion manifests — CI only |
| check-governance-markers.js | `validators/governance/compliance/` | Governance markers — CI only |
| check-jsdoc-headers.js | `validators/governance/compliance/` | JSDoc compliance — CI only |
| check-mintlify-canonical-sync.js | `validators/governance/compliance/` | Mintlify sync — CI only |
| check-new-file-governance.js | `validators/governance/compliance/` | New file governance — CI only |
| check-repo-governance-sync.js | `validators/governance/compliance/` | Repo governance — CI only |
| check-root-governance-sync.js | `validators/governance/compliance/` | Root governance — CI only |
| check-script-locations.js | `validators/governance/compliance/` | Script locations — CI only |
| check-workflow-headers.js | `validators/governance/compliance/` | Workflow headers — CI only |
| check-agent-docs-freshness.js | `validators/governance/compliance/` | Agent docs freshness — CI only |
| review-governance-repair-checklist.js | `validators/governance/compliance/` | Repair checklists — manual use |
| validate-ai-tools-registry.js | `validators/governance/compliance/` | AI tools registry — CI only |
| validate-codex-task-contract.js | `validators/governance/compliance/` | Codex contracts — CI only |
| audit-script-inventory.js | `validators/governance/pr/` | Script inventory — PR gate |
| check-component-immutability.js | `validators/governance/pr/` | Component immutability — PR gate |
| check-governance-approvals.js | `validators/governance/pr/` | Governance approvals — PR gate |
| check-pr-template.js | `validators/governance/pr/` | PR template — PR gate |
| validate-lpd-paths.js | `validators/governance/repo/` | LPD paths — repo validation |

---

## Gap C: GitHub Actions workflows — zero represented

### Remediator workflows (3 total, 0 in lookup)

| Workflow | What it fixes | When to suggest |
|---|---|---|
| `remediator-brand-repair-en-gb-style.yml` | EN-GB style homogenisation (creates PR) | Voice/copy/spelling errors across multiple files |
| `remediator-governance-repair-pipelines.yml` | Governance artifact repair (weekly + manual) | Governance drift, stale markers, missing artifacts |
| `remediator-discoverability-repair-seo-metadata.yml` | SEO metadata refresh | SEO/og:image/description issues |

### Validator workflows (13 total, 0 in lookup)

| Workflow | What it validates | When to suggest |
|---|---|---|
| `validator-brand-check-copy-standards.yml` | Copy standards (lint-copy + lint-patterns + grammar + proper nouns) | Copy quality issues |
| `validator-copy-check-content-quality-suite.yml` | P2 hard gate: PR checks + browser tests | Any render failure — comprehensive check |
| `validator-discoverability-check-ai-sitemap.yml` | AI sitemap consistency | AI discoverability issues |
| `validator-discoverability-check-companions.yml` | AI companion file consistency | Companion/manifest issues |
| `validator-discoverability-check-llms-files.yml` | llms.txt consistency | LLM discoverability issues |
| `validator-governance-check-codex-compliance.yml` | Codex task contracts | Codex branch issues |
| `validator-governance-check-governance-map.yml` | Governance map + markers + staleness | Governance drift |
| `validator-health-check-broken-links.yml` | Broken links (mintlify CLI) | Link-related errors |
| `validator-health-check-openapi-reference.yml` | OpenAPI spec audit | API reference issues |
| `validator-health-check-page-rendering.yml` | Browser rendering across all pages | Any render failure — full sweep |
| `validator-health-check-page-structure.yml` | Page structure (6 validators) | Structural issues |
| `validator-maintenance-check-catalogs.yml` | Docs guide catalogs consistency | Catalog drift |
| `validator-maintenance-check-docs-index.yml` | Docs index consistency | Index drift |

---

## Gap D: docs-guide pipeline docs — zero represented

The 6 pipeline docs in `docs-guide/docs-library/pipelines/` document how validators and remediators connect into end-to-end pipelines. The render gate could reference these for context when suggesting tools.

| Pipeline doc | Path | Covers |
|---|---|---|
| component-health.mdx | `docs-guide/docs-library/pipelines/` | Component status monitoring |
| content-quality.mdx | `docs-guide/docs-library/pipelines/` | Quality assurance and freshness |
| copy-brand.mdx | `docs-guide/docs-library/pipelines/` | Voice and copy compliance |
| data-integration.mdx | `docs-guide/docs-library/pipelines/` | External data synchronisation |
| discoverability.mdx | `docs-guide/docs-library/pipelines/` | Content indexing and AI discovery |
| governance-compliance.mdx | `docs-guide/docs-library/pipelines/` | Governance rule enforcement |

---

## Summary

| Layer | Total available | In render gate | Coverage |
|---|---|---|---|
| Remediator scripts | 21 | 21 | **100%** |
| Validator scripts | 45 | 0 | **0%** (backlog) |
| GitHub Actions (remediator) | 3 | 0 | **0%** (backlog) |
| GitHub Actions (validator) | 13 | 0 | **0%** (backlog) |
| docs-guide pipeline docs | 6 | 0 | **0%** (backlog) |
| **Total** | **88** | **21** | **24%** |

> **Update 2026-04-08:** Gap A resolved. All 15 missing remediator scripts wired into `ERROR_TO_REMEDIATOR` registry. Coverage from 7% to 24%. Remaining gaps (validators, workflows, pipeline docs) are backlog items.

---

## Recommendations

1. ~~**Expand `ERROR_TO_REMEDIATOR` to cover remaining 15 remediator scripts**~~ — DONE 2026-04-08, all 21 scripts registered
2. ~~**Add a parallel `ERROR_TO_VALIDATOR` registry**~~ — DONE 2026-04-08, 14 validators in ERROR_TO_VALIDATOR
3. ~~**Add workflow references**~~ — DONE 2026-04-08, 16 workflow references in WORKFLOW_REFERENCES
4. **Add pipeline doc references** — when the error class maps to a documented pipeline, link to the pipeline doc for full context
5. **Consider auto-discovery** — instead of a hardcoded registry, scan `operations/scripts/remediators/` at runtime and match by JSDoc `@concern` and `@niche` tags

## Post-Remediation Verification (added 2026-04-09)

All 27 remediator scripts now support `--verify` flag. When passed:
1. Pre-repair snapshots are taken
2. Repairs are applied
3. Paired validators run on affected files (from `operations/scripts/config/remediation-verify-registry.json`)
4. If regressions found: only regressed files are reverted, successful fixes remain
5. Exit code reflects verification result

The 3 P6 remediator workflows also have regression steps that flag PRs with `needs-review` when verification fails.