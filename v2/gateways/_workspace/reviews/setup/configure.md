# Review: Configure AI, Video, or Dual Gateway Services

**File:** `v2/gateways/setup/configure.mdx`
**Reviewed:** 2026-04-08
**Verdict:** PASS (minor issues)

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | Present |
| 1. FRONTMATTER | 1.2 sidebarTitle | FAIL | Missing (though Mintlify may infer from title) |
| 1. FRONTMATTER | 1.3 description | PASS | Clear |
| 1. FRONTMATTER | 1.4 pageType | WARN | "PageType" capital P |
| 1. FRONTMATTER | 1.5 audience | PASS | "gateway" |
| 1. FRONTMATTER | 1.6 purpose | PASS | "operate" |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | PASS | 6 entries |
| 1. FRONTMATTER | 1.10 og:image | PASS | fallback.png |
| 2. VOICE | 2.1 UK English | PASS | |
| 2. VOICE | 2.10 Entity-led | PASS | |
| 3. HEADINGS | 3.1 Score | PASS | |
| 4. STRUCTURE | 4.1 Single purpose | PASS | Gateway configuration |
| 4. STRUCTURE | 4.5 No TODO | PASS | Clean |
| 4. STRUCTURE | 4.8 Min 2KB | PASS | |
| 5. LAYOUT | 5.1 Template | PASS | Tabbed AI/Video/Dual with imported views |
| 5. LAYOUT | 5.3 Related Pages | FAIL | No Related Pages section |
| 7. NAV | 7.1 In docs.json | PASS | Registered |
| 8. LINKS | 8.1 Links resolve | PASS | Links to config flags ref and pricing |
| 9. PROCESS | 9.1 Human sign-off | FAIL | No reviewed: true |
| 10. COMPLETENESS | 10.1 Coverage | PASS | AI, Video, Dual via imported views |

## Issues

1. **Frontmatter casing:** `PageType` should be `pageType`
2. **Missing frontmatter:** sidebarTitle (explicitly), complexity, lifecycleStage
3. **No Related Pages** section
4. **No reviewed: true**
5. Clean parent page - quality depends on imported view content
