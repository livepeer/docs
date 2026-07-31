# Review: Linux Supported Distributions & Information

**File:** `v2/gateways/quickstart/groups/linux/linuxSupport.mdx`
**Reviewed:** 2026-04-08
**Verdict:** NEEDS WORK (embedded component)

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | Present |
| 1. FRONTMATTER | 1.2 sidebarTitle | FAIL | Missing |
| 1. FRONTMATTER | 1.3 description | PASS | Present (long) |
| 1. FRONTMATTER | 1.4 pageType | WARN | "PageType" capital P |
| 1. FRONTMATTER | 1.5 audience | PASS | "gateway" |
| 1. FRONTMATTER | 1.6 purpose | PASS | "build" |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | PASS | 10 entries |
| 1. FRONTMATTER | 1.10 og:image | PASS | fallback.png |
| 2. VOICE | 2.1 UK English | PASS | |
| 2. VOICE | 2.10 Entity-led | PASS | |
| 3. HEADINGS | 3.1 Score | PASS | |
| 4. STRUCTURE | 4.1 Purpose | PASS | Linux distro support reference |
| 4. STRUCTURE | 4.5 No TODO | PASS | Commented-out code blocks exist but are developer notes, not TODOs |
| 5. LAYOUT | 5.1 Template | N/A | Embedded component |
| 7. NAV | 7.1 In docs.json | N/A | Embedded via import |
| 8. LINKS | 8.1 Links | PASS | No broken links |
| 10. COMPLETENESS | 10.1 Coverage | PASS | Covers distros, architectures, packages |

## Issues

1. **Frontmatter casing:** `PageType` should be `pageType`
2. **Missing frontmatter:** sidebarTitle, complexity, lifecycleStage
3. **Commented-out code blocks** (lines 56-71) should be removed or promoted
4. **Bracket typo** line 30: "Ubuntu 20.04+ (**tested" has unmatched bold/paren
