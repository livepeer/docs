# Review: Gateway Operators Guide

**File:** `v2/gateways/setup/guide.mdx`
**Reviewed:** 2026-04-08
**Verdict:** NEEDS WORK

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | "Gateway Operators Guide" |
| 1. FRONTMATTER | 1.2 sidebarTitle | PASS | "Guide" |
| 1. FRONTMATTER | 1.3 description | PASS | Present |
| 1. FRONTMATTER | 1.4 pageType | WARN | "PageType" capital P |
| 1. FRONTMATTER | 1.5 audience | PASS | "gateway" |
| 1. FRONTMATTER | 1.6 purpose | PASS | "operate" |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | PASS | 7 entries |
| 1. FRONTMATTER | 1.10 og:image | PASS | fallback.png |
| 2. VOICE | 2.1 UK English | PASS | "optimise" used correctly |
| 2. VOICE | 2.3 Banned phrases | WARN | "Looking for..." used in card descriptions (lines 339, 349) - question-led |
| 2. VOICE | 2.8 No em-dashes | PASS | |
| 3. HEADINGS | 3.1 Score | PASS | Concise, technical |
| 4. STRUCTURE | 4.1 Single purpose | PASS | Gateway operator overview/journey |
| 4. STRUCTURE | 4.5 No TODO | FAIL | Lines 27-31: TODO block |
| 4. STRUCTURE | 4.8 Min 2KB | PASS | Large page |
| 4. STRUCTURE | 4.10 No dead ends | PASS | Journey steps link to all sub-pages |
| 5. LAYOUT | 5.1 Template | PASS | Guide template with journey steps and architecture diagram |
| 5. LAYOUT | 5.3 Related Pages | PASS | Present with 4 cards |
| 5. LAYOUT | 5.5 Data imports | PASS | Uses shared components |
| 6. VERACITY | 6.1 Claims citable | PASS | Architecture diagram matches go-livepeer |
| 7. NAV | 7.1 In docs.json | PASS | Registered |
| 8. LINKS | 8.1 Links resolve | WARN | Relative links to ../guides/* need verification |
| 9. PROCESS | 9.1 Human sign-off | FAIL | No reviewed: true (though `reviewed: true` is in frontmatter - wait, checking... no, not present) |
| 10. COMPLETENESS | 10.1 Coverage | PASS | Complete journey overview |

## Issues

1. **Frontmatter casing:** `PageType` should be `pageType`
2. **Missing frontmatter:** complexity, lifecycleStage
3. **TODO block** at lines 27-31
4. **Typos in journey steps:** "Test Gatway" and "Connect Gatway" (lines 224, 231) - missing 'e' in Gateway
5. **Question-led card text:** "Looking for hands-on walkthroughs..." and "Looking for information on how..." violate entity-led voice
6. **Typo:** "whichcan" (line 99) should be "which can"
7. **Commented-out accordion** (lines 64-95) should be removed or promoted
8. **reviewed: true** present in frontmatter (line 26) but no evidence of formal review process completion
