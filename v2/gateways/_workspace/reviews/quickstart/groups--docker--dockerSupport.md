# Review: Docker Support

**File:** `v2/gateways/quickstart/groups/docker/dockerSupport.mdx`
**Reviewed:** 2026-04-08
**Verdict:** NEEDS WORK (embedded component)

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | "Docker Support" |
| 1. FRONTMATTER | 1.2 sidebarTitle | FAIL | Missing |
| 1. FRONTMATTER | 1.3 description | WARN | Uses markdown heading in description field: "## Docker OS Support..." |
| 1. FRONTMATTER | 1.4 pageType | PASS | "instruction" |
| 1. FRONTMATTER | 1.5 audience | PASS | "gateway" |
| 1. FRONTMATTER | 1.6 purpose | PASS | "build" |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | FAIL | Missing |
| 1. FRONTMATTER | 1.10 og:image | FAIL | Missing |
| 2. VOICE | 2.1 UK English | PASS | |
| 2. VOICE | 2.10 Entity-led | PASS | |
| 3. HEADINGS | 3.1 Score | PASS | Technical, concise |
| 4. STRUCTURE | 4.1 Purpose | PASS | Clear: Docker OS compatibility reference |
| 4. STRUCTURE | 4.5 No TODO | PASS | |
| 5. LAYOUT | 5.1 Template | N/A | Embedded component, not standalone page |
| 7. NAV | 7.1 In docs.json | N/A | Embedded via import, not a routed page |
| 10. COMPLETENESS | 10.1 Coverage | PASS | Covers all 3 OS platforms with architecture details |

## Issues

1. **Description field** contains markdown heading - should be plain text
2. **Missing frontmatter:** sidebarTitle, complexity, lifecycleStage, keywords, og:image
3. This is an embedded component (imported into gateway-setup.mdx) - frontmatter requirements may be relaxed, but keywords and og:image should still be present for consistency
