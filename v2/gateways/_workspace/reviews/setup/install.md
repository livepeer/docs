# Review: Install go-livepeer on Docker, Linux, or Windows

**File:** `v2/gateways/setup/install.mdx`
**Reviewed:** 2026-04-08
**Verdict:** PASS (minor issues)

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | Present |
| 1. FRONTMATTER | 1.2 sidebarTitle | PASS | "Install" |
| 1. FRONTMATTER | 1.3 description | PASS | Clear |
| 1. FRONTMATTER | 1.4 pageType | PASS | "guide" |
| 1. FRONTMATTER | 1.5 audience | PASS | "gateway" |
| 1. FRONTMATTER | 1.6 purpose | PASS | "operate" |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | PASS | 6 entries |
| 1. FRONTMATTER | 1.10 og:image | PASS | fallback.png |
| 2. VOICE | 2.1 UK English | PASS | |
| 2. VOICE | 2.3 Banned phrases | WARN | "Let's Go(-Livepeer) !" heading is informal |
| 3. HEADINGS | 3.1 Score | PASS | |
| 4. STRUCTURE | 4.1 Single purpose | PASS | Installation for all 3 OS |
| 4. STRUCTURE | 4.5 No TODO | PASS | Clean |
| 4. STRUCTURE | 4.8 Min 2KB | PASS | |
| 5. LAYOUT | 5.1 Template | PASS | Tabbed OS views importing content MDX |
| 5. LAYOUT | 5.3 Related Pages | FAIL | No Related Pages section |
| 5. LAYOUT | 5.5 Data imports | PASS | Uses shared components and view imports |
| 7. NAV | 7.1 In docs.json | PASS | Registered |
| 8. LINKS | 8.1 Links resolve | PASS | |
| 9. PROCESS | 9.1 Human sign-off | FAIL | No reviewed: true |
| 10. COMPLETENESS | 10.1 Coverage | PASS | Docker, Linux, Windows covered via imported views |

## Issues

1. **Missing frontmatter:** complexity, lifecycleStage
2. **No Related Pages** section - should link to Configure, Prepare
3. **Informal heading:** "Let's Go(-Livepeer) !" violates entity-led voice (same as quickstart)
4. **No reviewed: true** in frontmatter
5. Content quality depends on the imported view files - parent page structure is clean
