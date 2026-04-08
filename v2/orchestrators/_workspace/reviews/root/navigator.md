# Review: Find Your Path
**File:** v2/orchestrators/navigator.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| 1. Frontmatter | 1.1 title | PASS | "Find Your Path" present |
| 1. Frontmatter | 1.2 sidebarTitle | PASS | "Navigator" present |
| 1. Frontmatter | 1.3 description | PASS | Present, 107 chars, subject-first |
| 1. Frontmatter | 1.4 pageType | FAIL | "landing" - NOT in approved list (concept, tutorial, guide, instruction, navigation, reference, resource) |
| 1. Frontmatter | 1.5 audience | PASS | "orchestrator" - valid |
| 1. Frontmatter | 1.6 purpose | FAIL | "orientation" - NOT in approved list (should be "orient") |
| 1. Frontmatter | 1.7 complexity | FAIL | Missing entirely |
| 1. Frontmatter | 1.8 lifecycleStage | FAIL | Missing entirely |
| 1. Frontmatter | 1.9 keywords | PASS | Present, 9 items |
| 1. Frontmatter | 1.10 OG image | PASS | Full OG block present with alt, type, width, height |
| 1. Frontmatter | 1.11 description quality | PASS | Subject-first, no self-reference, under 160 chars |
| 1. Frontmatter | 1.12 keywords quality | PASS | Specific: orchestrator, navigator, pool, solo, AI, video, dual mode |
| 1. Frontmatter | 1.13 pageType valid | FAIL | "landing" is old taxonomy - should be "navigation" |
| 2. Voice | 2.1 UK English | PASS | No US spellings detected |
| 2. Voice | 2.2 banned words | PASS | None found |
| 2. Voice | 2.3 banned phrases | PASS | None found |
| 2. Voice | 2.4 no self-reference | FAIL | Line 34: "This page routes to the right starting point" |
| 2. Voice | 2.5 no em-dashes | PASS | Uses standard hyphens |
| 2. Voice | 2.6 no hedging verbs | PASS | None found |
| 2. Voice | 2.7 entity-led | PASS | No "we"/"our" |
| 2. Voice | 2.8-2.22 deprecated terms | PASS | None found |
| 3. Headings | 3.1 heading quality | PASS | All score above threshold |
| 3. Headings | 3.2 banned headings | PASS | None found |
| 3. Headings | 3.3-3.10 weak headings | PASS | None found |
| 4. Structure | 4.1 one purpose | PASS | Single purpose: route users to correct starting point |
| 4. Structure | 4.2 no dead ends | PASS | Every accordion has card links to next pages |
| 4. Structure | 4.3 prerequisites | N/A | Entry point page |
| 4. Structure | 4.4 Discord test | PASS | Comprehensive routing with clear paths |
| 4. Structure | 4.5 min size | PASS | 11953 bytes (>5KB for guide-like page) |
| 4. Structure | 4.6-4.16 TODO/REVIEW | PASS | No TODO/REVIEW in body |
| 5. Layout | 5.1 template match | PASS | Navigation page with accordions and cards |
| 5. Layout | 5.2 required sections | PASS | Routing matrix, quick reference, all sections |
| 5. Layout | 5.3-5.16 components | PASS | StyledTable, CardGroup, AccordionGroup, CustomDivider all correctly used |
| 6. Veracity | 6.1 claims citable | PASS | Routing claims match actual page structure |
| 6. Veracity | 6.2-6.12 | PASS | No uncited factual claims |
| 7. Navigation | 7.1 in docs.json | PASS | Present in docs.json |
| 7. Navigation | 7.2 no orphans | PASS | In sidebar nav |
| 7. Navigation | 7.3 correct lane | PASS | Root orchestrators - correct for navigation page |
| 7. Navigation | 7.4 no stubs | PASS | >2KB |
| 8. Links | 8.1 internal links resolve | WARN | Link to "/v2/orchestrators/resources/community-pools" - verify this exists (resources/knowledge-hub/community-pools.mdx is the actual file) |
| 8. Links | 8.2 snippet imports | PASS | All 4 imports use root-absolute paths with extensions |
| 8. Links | 8.3 no TODO in published | PASS | Clean |
| 9. Process | 9.1 human sign-off | FAIL | No sign-off recorded |
| 9. Process | 9.2-9.6 governance | FAIL | status: current and lastVerified present but no sign-off |
| 10. Content | 10.1 question coverage | PASS | 7 entry points covering all major orchestrator personas |
| 10. Content | 10.2 zero-to-hero | PASS | Routes from beginner (try it) to advanced (commercial) |
| 10. Content | 10.3 self-containment | PASS | Complete routing page |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Find Your Path | PASS |
| sidebarTitle | Yes | Navigator | PASS |
| description | Yes | Choose the right orchestrator path... | PASS |
| pageType | Yes | landing | FAIL (old value) |
| audience | Yes | orchestrator | PASS |
| purpose | Yes | orientation | FAIL (should be "orient") |
| complexity | No | - | FAIL |
| lifecycleStage | No | - | FAIL |
| keywords | Yes | 9 items | PASS |
| OG image | Yes | Full block | PASS |

## Heading Score Table
| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Choose Your Starting Point | 4 | 4 | 5 | 5 | 4 | 22 |
| Quick Reference | 4 | 3 | 5 | 5 | 5 | 22 |
| All Sections | 3 | 3 | 5 | 4 | 5 | 20 |

## Verdict: NEEDS WORK
- pageType "landing" must be updated to "navigation"
- purpose "orientation" must be updated to "orient"
- Missing: complexity, lifecycleStage
- "This page" self-reference on line 34
- Potential broken link to community-pools (wrong path)
