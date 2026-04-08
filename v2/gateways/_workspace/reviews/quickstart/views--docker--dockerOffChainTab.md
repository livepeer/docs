# Review: Docker Off-Chain Gateway Quickstart TAB VIEW

**File:** `v2/gateways/quickstart/views/docker/dockerOffChainTab.mdx`
**Reviewed:** 2026-04-08
**Verdict:** NEEDS WORK (embedded view)

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | Present |
| 1. FRONTMATTER | 1.3 description | PASS | Present |
| 1. FRONTMATTER | 1.4 pageType | PASS | "instruction" |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | PASS | 10 entries |
| 1. FRONTMATTER | 1.10 og:image | PASS | fallback.png |
| 2. VOICE | 2.1 UK English | PASS | |
| 2. VOICE | 2.10 Entity-led | PASS | |
| 4. STRUCTURE | 4.5 No TODO | FAIL | Multiple unresolved Danger flags |
| 4. STRUCTURE | 4.8 Min 2KB | PASS | Large file |
| 6. VERACITY | 6.3 REVIEW flags | FAIL | Line 52: "fix me"; Line 89: "Fix me (onchain nicer)"; Line 137: "Fix code formatting"; Line 174: "Needs Review" |
| 7. NAV | 7.1 In docs.json | N/A | Embedded tab view |
| 10. COMPLETENESS | 10.1 Coverage | PASS | Complete install-configure-run-test-monitor flow |

## Issues

1. **4 unresolved `<Danger>` flags:** "fix me" (line 52), "Fix me (onchain nicer)" (line 89), "Fix code formatting" (line 137), "Needs Review" (line 174)
2. **Missing frontmatter:** complexity, lifecycleStage, sidebarTitle
3. These Danger tags render as visible red banners to users - must be resolved before production
4. Monitoring section duplicates content that now lives in the new `setup/monitor.mdx` page
