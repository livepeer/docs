# Review: Monitor & Optimise Gateway Services

**File:** `v2/gateways/setup/monitor/monitor-and-optimise.mdx`
**Reviewed:** 2026-04-08
**Verdict:** REWRITE

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | Present |
| 1. FRONTMATTER | 1.3 description | WARN | Duplicates title exactly |
| 1. FRONTMATTER | 1.4 pageType | PASS | "guide" |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | PASS | 8 entries |
| 1. FRONTMATTER | 1.10 og:image | PASS | fallback.png |
| 2. VOICE | 2.1 UK English | PASS | "optimise" |
| 4. STRUCTURE | 4.1 Purpose | FAIL | Self-described as "brainstorming page" |
| 4. STRUCTURE | 4.5 No TODO | FAIL | Lines 28-33: TODO block; Line 39: `<Danger> Currently operating as a brainstorming page </Danger>` |
| 4. STRUCTURE | 4.8 Min 2KB | PASS | |
| 5. LAYOUT | 5.3 Related Pages | FAIL | No Related Pages |
| 6. VERACITY | 6.3 REVIEW flags | FAIL | Line 82: `<Danger> (fixme) OpenAPI Spec is here: ai/worker/api/openapi.json </Danger>` |
| 7. NAV | 7.1 In docs.json | FAIL | Not registered in nav |
| 10. COMPLETENESS | 10.1 Coverage | FAIL | Brainstorming content, not publishable |

## Issues

1. **Self-described brainstorming page** - visible Danger banner tells users this
2. **Two Danger flags** visible to users
3. **TODO block** present
4. **Not in docs.json** - orphan
5. **Superseded** by the new `setup/monitor.mdx` page which covers this content properly
6. **Recommendation:** Delete or archive to x-deprecated/
