# Review: Gateway Node Requirements

**File:** `v2/gateways/setup/requirements/setup.mdx`
**Reviewed:** 2026-04-08
**Verdict:** NEEDS WORK (redirected page)

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | Present |
| 1. FRONTMATTER | 1.2 sidebarTitle | PASS | "Requirements" |
| 1. FRONTMATTER | 1.3 description | PASS | Present |
| 1. FRONTMATTER | 1.4 pageType | WARN | "PageType" capital P |
| 1. FRONTMATTER | 1.5 audience | PASS | "gateway" |
| 1. FRONTMATTER | 1.6 purpose | PASS | "operate" |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | PASS | 10 entries |
| 1. FRONTMATTER | 1.10 og:image | PASS | fallback.png |
| 1. FRONTMATTER | extra | WARN | `status: draft` - not production-ready |
| 2. VOICE | 2.1 UK English | PASS | |
| 2. VOICE | 2.3 Banned phrases | WARN | "Or know how to ask AI for help :)" (line 87) - flippant |
| 3. HEADINGS | 3.1 Score | PASS | |
| 4. STRUCTURE | 4.1 Purpose | PASS | Requirements overview |
| 4. STRUCTURE | 4.5 No TODO | FAIL | Lines 31-35: TODO block |
| 4. STRUCTURE | 4.8 Min 2KB | PASS | |
| 5. LAYOUT | 5.3 Related Pages | FAIL | No Related Pages |
| 7. NAV | 7.1 In docs.json | FAIL | Redirected to /v2/gateways/setup/prepare |
| 10. COMPLETENESS | 10.1 Coverage | PASS | Hardware, network, OS, deployment modes |

## Issues

1. **Redirected** to prepare.mdx - should not be independently maintained
2. **status: draft** - explicitly not production-ready
3. **TODO block** at lines 31-35
4. **Frontmatter casing:** `PageType` should be `pageType`
5. **Tone violation:** "Or know how to ask AI for help :)" is flippant
6. **Content superseded** by prepare.mdx
7. **Recommendation:** Archive to x-deprecated/ - prepare.mdx is the canonical replacement
