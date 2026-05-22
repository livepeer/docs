# Review: Run a Gateway: Quickstart Guide

**File:** `v2/gateways/quickstart/gateway-setup.mdx`
**Reviewed:** 2026-04-08
**Verdict:** NEEDS WORK

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | Present |
| 1. FRONTMATTER | 1.2 sidebarTitle | PASS | "Quickstart Guide" |
| 1. FRONTMATTER | 1.3 description | PASS | Present |
| 1. FRONTMATTER | 1.4 pageType | WARN | "PageType" (capital P) - non-canonical casing |
| 1. FRONTMATTER | 1.5 audience | PASS | "gateway" |
| 1. FRONTMATTER | 1.6 purpose | PASS | "build" |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | PASS | 8 entries |
| 1. FRONTMATTER | 1.10 og:image | PASS | gateways.png (non-fallback) |
| 2. VOICE | 2.1 UK English | WARN | "trancoding" (line 310) is a typo not a spelling issue |
| 2. VOICE | 2.3 No banned phrases | FAIL | "Let's Go(-Livepeer) !" - informal/self-referential |
| 2. VOICE | 2.5 No self-ref | PASS | |
| 2. VOICE | 2.8 No em-dashes | PASS | Uses hyphens |
| 3. HEADINGS | 3.1 Score | PASS | Headings are concise and technical |
| 4. STRUCTURE | 4.1 Single purpose | PASS | Gateway quickstart |
| 4. STRUCTURE | 4.5 No TODO | FAIL | Lines 23-28 and 309-318: TODO blocks; line 135: "MOVE TO OWN PAGE" comment |
| 4. STRUCTURE | 4.8 Min 2KB | PASS | Large file |
| 4. STRUCTURE | 4.10 No dead ends | PASS | Related Pages section present |
| 5. LAYOUT | 5.1 Template | PASS | Instruction template with Steps |
| 5. LAYOUT | 5.3 Related Pages | PASS | Present at bottom |
| 5. LAYOUT | 5.5 Data imports | PASS | Uses data files for code/flags |
| 6. VERACITY | 6.1 Claims citable | WARN | References to specific ports and endpoints should be verified against go-livepeer source |
| 6. VERACITY | 6.2 REVIEW flags | FAIL | Line 124: `<Danger> Verify these </Danger>` unresolved |
| 7. NAV | 7.1 In docs.json | PASS | Registered |
| 7. NAV | 7.3 No stubs | WARN | Several view tabs are empty stubs (Linux, Windows) |
| 8. LINKS | 8.1 Links resolve | WARN | Relative link `../resources/reference/technical/configuration-flags` and `../resources/reference/faq` - need verification |
| 8. LINKS | 8.2 No TODO/TBD | FAIL | Multiple TODO comments |
| 9. PROCESS | 9.1 Human sign-off | FAIL | No reviewed: true |
| 10. COMPLETENESS | 10.1 Question coverage | WARN | Linux and Windows binary tabs are mostly empty stubs |

## Frontmatter Table

| Field | Value | Status |
|---|---|---|
| title | Run a Gateway: Quickstart Guide | PASS |
| sidebarTitle | Quickstart Guide | PASS |
| description | Present | PASS |
| PageType | instruction | WARN - capital P |
| audience | gateway | PASS |
| purpose | build | PASS |
| complexity | MISSING | FAIL |
| lifecycleStage | MISSING | FAIL |
| keywords | 8 entries | PASS |
| og:image | gateways.png | PASS |

## Issues

1. **Frontmatter casing:** `PageType` should be `pageType` (lowercase p)
2. **Missing frontmatter:** `complexity`, `lifecycleStage`
3. **TODO blocks** at lines 23-28, 135, 309-318
4. **Unresolved Danger flags:** "Verify these" (line 124), "fix me" in dockerOffChainTab
5. **Typo:** "narginTop" (line 71) should be "marginTop"
6. **Typo:** "trancoding" (line 310) should be "transcoding"
7. **Empty stub tabs:** Linux off-chain, Linux on-chain, Windows off-chain, Windows on-chain views have empty Steps
8. **Informal heading:** "Let's Go(-Livepeer) !" violates entity-led voice
9. **No human sign-off**
