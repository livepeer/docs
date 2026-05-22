# Section Summary: v2/gateways/guides/ (A-L subdirectories)

**Audited:** 2026-04-08
**Scope:** All published MDX pages in subdirectories starting a-l (advanced-operations, deployment-details)
**Excluded:** _workspace/, x-archived/, x-deprecated/, x-resources/
**Note:** The only A-L subdirectories that exist are advanced-operations/ and deployment-details/. No pages exist under ai-and-pipelines, configuration, docker-operations, economics, getting-started, hardware-and-performance, installation, key-management, or linux-operations (those subdirectories do not exist in the repo).

---

## Statistics

| Metric | Count |
|--------|-------|
| Pages audited | 8 |
| PASS | 5 |
| PASS (minor fixes needed) | 1 |
| FAIL (critical) | 1 |
| FAIL (needs work) | 1 |
| Not in docs.json | 1 |

---

## Per-Page Verdicts

### advanced-operations (5 pages)

| Page | Verdict | Heading Score | Key Issues |
|------|---------|---------------|------------|
| orchestrator-selection.mdx | PASS | 23/25 | `PageType` casing; TODO block |
| gateway-middleware.mdx | PASS | 23/25 | `PageType` casing; TODO block. Exemplary page |
| scaling.mdx | PASS | 23/25 | `PageType` casing; TODO block; line 65 lowercase fragment |
| gateway-discoverability.mdx | PASS (minor) | 22/25 | `PageType` casing; TODO block; external vercel preview link; line 58 lowercase fragment |
| **dep-production-hardening.mdx** | **FAIL - CRITICAL** | N/A | Entire content is a duplicate of the old orchestrator-selection.mdx. Filename says production hardening but content is orchestrator selection. Not in docs.json. 4 REVIEW flags, TODO block, wrong frontmatter |

### deployment-details (3 pages)

| Page | Verdict | Heading Score | Key Issues |
|------|---------|---------------|------------|
| setup-options.mdx | PASS | 22/25 | `PageType` casing; typos "Protcol" and "pieplines"; 2 REVIEW flags in comments |
| setup-requirements.mdx | PASS | 22/25 | `PageType` casing; TODO block |
| **gwid-single-click-deploy.mdx** | **FAIL - needs work** | 15/25 | TODOs in visible Danger block; duplicate H1; no Related Pages; question pattern in body; brackets in title; "easy" is banned; legacy v1-style page |

---

## Priority Actions

### P0 - Delete or archive duplicate

1. **`dep-production-hardening.mdx`** - Entire content is a copy of old orchestrator-selection.mdx. The filename implies production hardening but the content, frontmatter, title, description, and keywords are all for orchestrator selection. Not in docs.json nav (correct). Move to x-deprecated/ or delete. The actual production hardening content exists only as a commented-out stub at the bottom of the file (lines 276-361).

### P1 - Rewrite to v2 standards

2. **`gwid-single-click-deploy.mdx`** - Legacy v1-style page with visible TODOs in a Danger callout, duplicate H1 heading, no Related Pages section, question-pattern body text, brackets in title, and "easy" (banned marketing word). Needs a full rewrite to v2 voice and structure standards or demotion to draft/workspace until community deployment tooling stabilises.

### P2 - Fix minor issues across section

3. **`PageType` casing** - 7 of 8 pages use `PageType` (capital T) instead of `pageType`. Only gwid-single-click-deploy.mdx uses the correct lowercase form. Bulk fix recommended.
4. **`setup-options.mdx`** - Fix typos: "Protcol" (line 77) and "pieplines" (line 87).
5. **`gateway-discoverability.mdx`** - External vercel preview URL (line 53) may not persist; replace with permanent link.
6. **`scaling.mdx`** / **`gateway-discoverability.mdx`** - Lowercase fragments ("how to measure those limits", "how to make a Gateway reachable") should be rewritten as entity-led sentences.

### P3 - Cosmetic cleanup

7. **TODO comment blocks** - All 7 non-deprecated pages contain TODO comment blocks near the top. These are invisible to readers but clutter source. Remove completed items; move remaining items to backlog.

---

## Patterns Observed

**Strengths:**
- 4 of 5 advanced-operations pages are strong (heading scores 22-23/25)
- Consistent use of StyledTable, StyledSteps, BorderedBox, CustomDivider, Tabs
- Entity-led voice well-applied across all non-deprecated pages
- UK English correctly used ("behaviour", "utilisation", "optimisations")
- Related Pages / Next Steps sections present on all passing pages
- docs.json registration correct for all non-deprecated pages

**Weaknesses:**
- 1 critical duplicate file (dep-production-hardening) still in the published directory rather than x-deprecated/
- 1 legacy page (gwid-single-click-deploy) not updated to v2 standards
- `PageType` casing inconsistency across 7 of 8 pages
- TODO comment blocks remain in source on every page
- 2 pages contain lowercase how-to fragments that break entity-led voice

---

## Cross-Reference with M-Z Summary

The A-L section is smaller (8 pages vs 33 in M-Z) but shows the same patterns:
- **Duplicate/deprecated files** (dep-* prefix) appear in both sections and need cleanup
- **`PageType` casing** is inconsistent across both sections
- **TODO blocks** persist in source across both sections
- **Pass rate** is comparable: A-L has 6/8 passing (75%) vs M-Z at 29/33 passing (88%). A-L's lower rate is driven by the smaller denominator and the legacy gwid page
- **Component usage** is stronger in A-L: all passing pages use the correct component set
- **Voice quality** is slightly better in A-L: fewer banned words, cleaner entity-led voice

### Combined A-Z totals for v2/gateways/guides/

| Metric | A-L | M-Z | Total |
|--------|-----|-----|-------|
| Pages audited | 8 | 33 | 41 |
| PASS or PASS (minor) | 6 | 29 | 35 |
| FAIL / needs work | 2 | 4 | 6 |
| Duplicates to archive | 1 | 2 | 3 |
| Not in docs.json | 1 | 3 | 4 |
