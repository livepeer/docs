# Health Pipeline Design

> The site works. Links resolve. Pages render. Content is valid. Data is fresh.
> If any of this breaks and nobody notices, users get a degraded experience.

---

## What "healthy" means for docs.livepeer.org

1. Every link on every page resolves (internal and external)
2. Every page renders without console errors
3. No stale data (feeds updated, versions current)
4. No broken imports (components, snippets, data files)
5. No structural issues (double headers, missing descriptions, unsafe markdown)
6. API reference matches the live API spec
7. Content claims are factually verifiable

---

## Current pipelines

### Canonical repo-root ownership

These are the repo-root entrypoints that own the current frontmatter/link/style contract. This pass kept these entrypoints intact and did not add new scripts.

| Surface | Canonical owner | Status |
|---|---|---|
| Frontmatter taxonomy | `tools/lib/docs/frontmatter-taxonomy.js` + `operations/tests/unit/frontmatter-taxonomy.test.js` | Active |
| Frontmatter structure | `operations/scripts/validators/content/structure/lint-structure.js` | Active |
| Docs-index/frontmatter consumption | `operations/scripts/generators/content/catalogs/generate-docs-index.js` | Active |
| Quality and taxonomy advisories | `operations/tests/unit/quality.test.js` | Active |
| Spelling | `operations/tests/unit/spelling.test.js` | Active |
| Style and em-dash | `operations/tests/unit/style-guide.test.js` + `operations/scripts/dispatch/governance/pre-tool-guard.js` | Active |
| Internal link health | `operations/scripts/audits/content/health/page-links-audit.js` | Active |

Notes:

- `spelling.test.js` already checks MDX/JSX prop text.
- `page-links-audit.js` already checks link-bearing props such as `href`, `src`, `to`, `url`, and `image`.
- `style-guide.test.js` and `pre-tool-guard.js` now also cover prop text for em-dash enforcement.
- Deprecated frontmatter aliases remain advisory repo-wide after cleanup. This pass does not promote them to a hard gate.

### Working

| Pipeline | When | What it does | Gold standard? |
|---|---|---|---|
| Link check on PR | PR opened | Checks internal/external links via Mintlify scanner | No (advisory workflow, not the canonical repo-root auditor) |
| Page rendering on PR | PR opened | Browser sweep via Puppeteer, catches console errors/404s | No (reports only) |
| Page integrity (scan+fix) | Scheduled + manual | Runs link + import audit, applies safe repairs, reruns, creates rolling issue | Close (has the full chain) |
| OpenAPI validation | Scheduled + PR | Compares spec to live API, creates PR if drifted | YES. Scan, detect, auto-fix, issue tracking |

### Broken

| Pipeline | Problem |
|---|---|
| Content quality scan (content-health.yml) | continue-on-error on all 6 steps. Repair script is IN the chain but masked. The repo's main health scanner is blind |
| Freshness monitor (freshness-monitor.yml) | Reports stale data but never re-dispatches the feed integrator. Headless |
| External link audit (v2-external-link-audit.yml) | Reports broken external links but never creates an issue. Headless |
| SEO metadata refresh (seo-refresh.yml) | P0: no commit step. Writes vanish. Not strictly health but affects page quality |

### Missing

| Need | Scripts that exist | What's missing |
|---|---|---|
| Structure validation on PR | 9 validators (lint-structure, check-double-headers, check-anchor-usage, check-mdx-safe-markdown, check-page-endings, check-description-quality, verify-all-pages, check-docs-path-sync, enforce-generated-file-banners) | A PR workflow dispatching them |
| Canonical frontmatter freshness metadata | lint-structure, quality.test, frontmatter-taxonomy, generate-docs-index | A reviewed rollout strategy for `lastVerified` / `veracityStatus` on legacy pages without inventing review claims |
| Veracity checking on PR | docs-page-research.js, docs-research-adjudication.js, docs-page-research-pr-report.js, docs-fact-registry.js | A PR workflow dispatching fact-check on changed docs |
| Page usefulness scoring | audit-v2-usefulness.js | A scheduled scan that creates issues for low-scoring pages |
| Media asset audit | audit-media-assets.js | A scheduled scan |
| Content gap detection | generate-content-gap-reconciliation.js | A scheduled scan |

---

## Proposed target state

### 3 health dispatchers (replace current 7+ workflows)

**1. PR Health Gate**

Runs on every PR. Checks everything a contributor might break.

```
PR opened/updated
  -> Link check (existing broken-links)
  -> Page rendering (existing test-v2-pages)
  -> Structure validators (9 scripts, currently unwired)
  -> Generated file verify (5 verify-pair validators)
  -> OpenAPI reference check (existing, PR mode)
```

This is a single workflow with matrix or sequential jobs. Consolidates broken-links.yml + test-v2-pages.yml + the 5 verify-pair validators + the 9 unwired structure validators into one dispatcher.

P2 (hard gate) for critical checks. P3 (advisory) for structure validators until baseline is clean.

**2. Scheduled Health Scanner**

Runs on cron. Detects problems that develop between PRs.

```
Cron (daily/weekly)
  -> Content quality scan (fix content-health.yml: remove continue-on-error)
  -> Data freshness check (fix freshness-monitor: add re-dispatch)
  -> External link audit (fix v2-external-link-audit: add issue creation)
  -> Page usefulness scoring (wire audit-v2-usefulness.js)
  -> Media asset audit (wire audit-media-assets.js)
  -> Content gap detection (wire generate-content-gap-reconciliation.js)

For each finding:
  -> Can auto-fix? -> Run repair script, commit/PR
  -> Can't auto-fix? -> Create/update GitHub issue
  -> Stale data? -> Re-dispatch the relevant integrator workflow
```

This replaces content-health.yml + freshness-monitor.yml + v2-external-link-audit.yml with one dispatcher that acts on findings (modelled on openapi-reference-validation).

**3. Page Integrity Dispatcher (already exists)**

page-integrity-health.yml + page-integrity-dispatch.js already implement the scan-fix-rerun-issue chain for links and imports. This is the gold standard for health pipelines within this repo.

Keep as-is. May absorb additional repair scripts over time.

---

## Impact/effort for each fix

| # | Fix | Impact | Effort | Priority |
|---|---|---|---|---|
| 1 | Remove continue-on-error from content-health.yml | Unblind the main health scanner | 5 min (delete 6 lines) | DO FIRST |
| 2 | Add issue creation to v2-external-link-audit | Broken links get tracked instead of ignored | Low (add actions/github-script step) | Quick win |
| 3 | Add re-dispatch to freshness-monitor | Stale feeds auto-recover | Medium (add repository_dispatch step per source) | Quick win |
| 4 | Wire 9 structure validators to PR workflow | Page structure issues caught before merge | Medium (new workflow, matrix of 9 scripts) | High impact |
| 5 | Fix seo-refresh.yml commit step | SEO metadata can actually be updated | 5 min (add git commit+push step) | Quick win |
| 6 | Wire veracity scripts to PR | Fact-check on content changes | High (new workflow + integration) | Future |
| 7 | Wire usefulness/media/gap audits to scheduled scan | Additional health coverage | Medium (add to consolidated scanner) | Future |
| 8 | Consolidate into 3 dispatchers | Reduce workflow count, consistent pattern | High (design + build + test + migrate) | After fixes land |

---

## Scripts inventory for health

### Currently wired (have a dispatcher)

| Script | Dispatcher | Role |
|---|---|---|
| fetch-external-docs.sh | broken-links, test-suite, test-v2-pages | Pre-fetch for validators |
| test-v2-pages.js | test-v2-pages.yml | Browser sweep |
| openapi-reference-audit.js | openapi-reference-validation.yml | API spec validation |
| v2-link-audit.js | v2-external-link-audit.yml | External link scan |
| docs-quality-and-freshness-audit.js | content-health.yml | Quality/freshness scan (masked) |
| audit-component-usage.js | content-health.yml | Component usage (masked) |
| scan-component-imports.js | content-health.yml | Import scan (masked) |
| repair-component-metadata.js | content-health.yml | Metadata repair (masked) |
| component-layout-governance.js | content-health.yml | Layout governance (masked) |
| generate-component-registry.js | content-health.yml + 3 others | Registry rebuild |
| page-integrity-dispatch.js | page-integrity-health.yml | Scan+fix orchestrator |
| page-integrity-rolling-issue.js | page-integrity-health.yml | Issue management |
| page-links-audit.js | page-integrity-health.yml | Link audit |
| page-imports-audit.js | page-integrity-health.yml | Import audit |
| repair-page-links.js | page-integrity-health.yml | Link repair |
| repair-page-imports.js | page-integrity-health.yml | Import repair |
| repair-mdx-safe-markdown.js | page-integrity-health.yml | Markdown repair |

### Not wired (scripts exist, no dispatcher)

| Script | What it does | Target dispatcher |
|---|---|---|
| lint-structure.js | Page structure check | PR Health Gate |
| check-double-headers.js | Double header detection | PR Health Gate |
| check-anchor-usage.js | Anchor validation | PR Health Gate |
| check-mdx-safe-markdown.js | Safe markdown check | PR Health Gate |
| check-page-endings.js | Page ending check | PR Health Gate |
| check-description-quality.js | Description quality | PR Health Gate |
| verify-all-pages.js | Full page verification | PR Health Gate |
| check-docs-path-sync.js | Path sync validation | PR Health Gate |
| enforce-generated-file-banners.js | Banner enforcement | PR Health Gate |
| repair-relative-page-hrefs.js | Relative href repair | Page Integrity |
| wcag-repair-common.js | WCAG accessibility | Scheduled Scanner or manual |
| audit-v2-usefulness.js | Usefulness scoring | Scheduled Scanner |
| audit-media-assets.js | Media asset audit | Scheduled Scanner |
| generate-content-gap-reconciliation.js | Blueprint vs actual | Scheduled Scanner |
| docs-page-research.js | Fact-check claims | Future: PR veracity gate |
| docs-research-adjudication.js | Research adjudication | Future: PR veracity gate |
| docs-page-research-pr-report.js | PR fact-check report | Future: PR veracity gate |
| docs-research-packet.js | Research packet | Future: manual |
| docs-fact-registry.js | Fact registry validation | Future: PR veracity gate |
| quarantine-manager.js | File quarantine | Manual |
| add-pagetype-mechanical.js | Assign pageType | Manual or scheduled |
| assign-purpose-metadata.js | Assign purpose | Manual or scheduled |

### Advisory boundaries

- `.github/workflows/broken-links.yml` is an advisory PR validator. Repo-root remediation and strict internal-link ownership live in `page-links-audit.js`.
- `content-health.yml` is not the canonical owner of frontmatter taxonomy. It consumes quality signals, while taxonomy/structure ownership stays with `frontmatter-taxonomy.js`, `frontmatter-taxonomy.test.js`, `lint-structure.js`, and `quality.test.js`.
- The gateway alignment pass fixed repo-root runtime resolution for the affected governance audit path by making `operations/` the dependency owner for the audited `operations/scripts/**` entrypoints.

---

## Decision

**Pending review.**
