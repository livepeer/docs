# Review: Orchestrator Portal
**File:** v2/orchestrators/portal.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| 1. Frontmatter | 1.1 title | PASS | "Orchestrator Portal" present |
| 1. Frontmatter | 1.2 sidebarTitle | PASS | "Portal" present |
| 1. Frontmatter | 1.3 description | FAIL | Title case ("Welcome To The Orchestrator Portal: Explore, Earn, Operate") - marketing tone, not subject-first factual |
| 1. Frontmatter | 1.4 pageType | FAIL | "landing" - NOT in approved list |
| 1. Frontmatter | 1.5 audience | PASS | "orchestrator" - valid |
| 1. Frontmatter | 1.6 purpose | FAIL | "landing" - NOT in approved list (should be "orient") |
| 1. Frontmatter | 1.7 complexity | FAIL | Missing entirely |
| 1. Frontmatter | 1.8 lifecycleStage | FAIL | Missing entirely |
| 1. Frontmatter | 1.9 keywords | PASS | Present, 12 items |
| 1. Frontmatter | 1.10 OG image | PASS | Full OG block present |
| 1. Frontmatter | 1.11 description quality | FAIL | Title case, contains colon, marketing tone - not subject-first |
| 1. Frontmatter | 1.12 keywords quality | WARN | Mix of specific ("livepeer orchestrator portal") and generic ("home", "index", "landing") |
| 1. Frontmatter | 1.13 pageType valid | FAIL | "landing" is old taxonomy |
| 2. Voice | 2.1 UK English | PASS | No US spellings detected |
| 2. Voice | 2.2 banned words | PASS | None in published body |
| 2. Voice | 2.3 banned phrases | PASS | None found |
| 2. Voice | 2.4 no self-reference | PASS | "this page" only in JSX comment TODO block, not published |
| 2. Voice | 2.5 no em-dashes | PASS | None found |
| 2. Voice | 2.6 no hedging verbs | PASS | None found |
| 2. Voice | 2.7 entity-led | PASS | No "we"/"our" in published content |
| 2. Voice | 2.8-2.22 deprecated terms | PASS | None found |
| 3. Headings | 3.1-3.10 heading quality | N/A | frame mode page - no standard markdown headings in published content |
| 4. Structure | 4.1 one purpose | PASS | Landing/entry point for orchestrators tab |
| 4. Structure | 4.2 no dead ends | PASS | 6 card links to key destinations |
| 4. Structure | 4.3 prerequisites | N/A | Entry point page |
| 4. Structure | 4.4 Discord test | PASS | Hero + 6 entry cards = complete overview |
| 4. Structure | 4.5 min size | PASS | 6683 bytes (>2KB) |
| 4. Structure | 4.6 TODO/REVIEW | WARN | Large TODO block in JSX comments (lines 30-52) with unresolved items |
| 4. Structure | 4.7-4.16 | PASS | |
| 5. Layout | 5.1 template match | PASS | Portal page with hero and cards - matches frame mode pattern |
| 5. Layout | 5.2 required sections | PASS | Hero, card grid, navigation links |
| 5. Layout | 5.3 approved components | PASS | All components imported from /snippets/ |
| 5. Layout | 5.4-5.16 | PASS | |
| 6. Veracity | 6.1 claims | PASS | "docker pull livepeer/go-livepeer:master" is real command |
| 6. Veracity | 6.2-6.12 | PASS | Minimal factual claims |
| 7. Navigation | 7.1 in docs.json | PASS | Present in docs.json |
| 7. Navigation | 7.2 no orphans | PASS | In sidebar nav |
| 7. Navigation | 7.3 correct lane | PASS | Root orchestrators |
| 7. Navigation | 7.4 no stubs | PASS | >2KB |
| 8. Links | 8.1 internal links resolve | PASS | All hrefs use /v2/ absolute paths |
| 8. Links | 8.2 snippet imports | PASS | 6 imports all root-absolute with extensions |
| 8. Links | 8.3 no TODO in published | PASS | TODOs are in JSX comments only |
| 9. Process | 9.1 human sign-off | FAIL | No sign-off recorded; TODO block says "REVIEW flags" and "Review Page Layout" for human |
| 9. Process | 9.2-9.6 | FAIL | Unresolved REVIEW items in JSX comments |
| 10. Content | 10.1-10.5 | PASS | Complete entry point for orchestrators |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Orchestrator Portal | PASS |
| sidebarTitle | Yes | Portal | PASS |
| description | Yes | Welcome To The Orchestrator Portal: Explore, Earn, Operate | FAIL |
| pageType | Yes | landing | FAIL (old value) |
| audience | Yes | orchestrator | PASS |
| purpose | Yes | landing | FAIL (not in approved list) |
| complexity | No | - | FAIL |
| lifecycleStage | No | - | FAIL |
| keywords | Yes | 12 items | WARN |
| OG image | Yes | Full block | PASS |
| mode | Yes | frame | PASS (portal-specific) |

## Heading Score Table
N/A - frame mode portal page uses component-rendered headings, not markdown.

## Verdict: NEEDS WORK
- pageType "landing" must be updated to "navigation"
- purpose "landing" must be updated to "orient"
- description is marketing copy in title case - needs subject-first rewrite
- Missing: complexity, lifecycleStage
- Large unresolved TODO/REVIEW block in JSX comments
- Some generic keywords ("home", "index", "landing")
