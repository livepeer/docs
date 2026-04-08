# Review: The Orchestrator Role in the Livepeer Network
**File:** v2/orchestrators/concepts/role.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| 1. Frontmatter | 1.1 title | PASS | "The Orchestrator Role in the Livepeer Network" present |
| 1. Frontmatter | 1.2 sidebarTitle | PASS | "Role" present |
| 1. Frontmatter | 1.3 description | PASS | Present, 126 chars, subject-first |
| 1. Frontmatter | 1.4 pageType | PASS | "concept" - valid |
| 1. Frontmatter | 1.5 audience | PASS | "orchestrator" - valid |
| 1. Frontmatter | 1.6 purpose | PASS | "orient" - valid |
| 1. Frontmatter | 1.7 complexity | FAIL | Missing entirely |
| 1. Frontmatter | 1.8 lifecycleStage | FAIL | Missing entirely |
| 1. Frontmatter | 1.9 keywords | FAIL | Field name is "Keywords" (capital K) |
| 1. Frontmatter | 1.10 OG image | PASS | Full OG block present (using fallback.png) |
| 1. Frontmatter | 1.11 description quality | PASS | Subject-first ("What orchestrators are..."), no self-reference, under 160 chars |
| 1. Frontmatter | 1.12 keywords quality | PASS | Specific: orchestrator role, GPU node, video transcoding, AI inference, active set |
| 1. Frontmatter | 1.13 pageType valid | PASS | "concept" in approved list |
| 1. Frontmatter | 1.14 extra field | WARN | "pageVariant: overview" - not in standard taxonomy; may be unused |
| 2. Voice | 2.1 UK English | PASS | "optimising" pattern used correctly where present |
| 2. Voice | 2.2 banned words | FAIL | Line 295: "significantly" - "requirements differ significantly" |
| 2. Voice | 2.3 banned phrases | PASS | None found |
| 2. Voice | 2.4 no self-reference | PASS | No "this page" in body or description |
| 2. Voice | 2.5 no em-dashes | PASS | None found |
| 2. Voice | 2.6 no hedging verbs | PASS | None found |
| 2. Voice | 2.7 entity-led | PASS | No "we"/"our" |
| 2. Voice | 2.8 deprecated terms | WARN | Line 248: "Pool worker" used as table cell header - this is the deprecated term (should be "Pool node"). However, note the domain terms table says "Pool worker must be defined at first use" - ambiguous. The page uses it as a deployment type name which may be acceptable |
| 2. Voice | 2.9-2.22 | PASS | "Transcoder" used correctly to refer to the historical era and technical component |
| 3. Headings | 3.1 heading quality | PASS | All above threshold |
| 3. Headings | 3.2 banned headings | PASS | None found |
| 3. Headings | 3.3-3.10 weak headings | PASS | None found |
| 4. Structure | 4.1 one purpose | PASS | Single purpose: explain what orchestrators are and how the role evolved |
| 4. Structure | 4.2 no dead ends | PASS | Related Pages footer with 4 cards |
| 4. Structure | 4.3 prerequisites | PASS | Three context-setting accordions for different backgrounds |
| 4. Structure | 4.4 Discord test | PASS | Complete role explanation for newcomers |
| 4. Structure | 4.5 min size | PASS | 15050 bytes (>5KB for concept) |
| 4. Structure | 4.6 TODO/REVIEW | WARN | 1 TODO (line 297: "Link to commercial orchestrator page once it exists") |
| 4. Structure | 4.7-4.16 trade-offs | PASS | Deployment types table compares 5 configurations |
| 5. Layout | 5.1 template match | PASS | Concept page with diagrams, tables, accordions |
| 5. Layout | 5.2 required sections | PASS | All concept sections present |
| 5. Layout | 5.3 approved components | PASS | All from /snippets/ |
| 5. Layout | 5.4 data imports | PASS | No hardcoded data requiring import |
| 5. Layout | 5.5 Related Pages | PASS | CardGroup footer |
| 5. Layout | 5.6-5.16 | PASS | |
| 6. Veracity | 6.1 claims citable | PASS | Role description, active set (top 100), deployment types all accurate |
| 6. Veracity | 6.2 deprecated API | PASS | None |
| 6. Veracity | 6.3 numbers sourced | PASS | "top 100" active set is correct |
| 6. Veracity | 6.4 REVIEW flags | PASS | Only 1 TODO (missing link), no unverified factual claims |
| 6. Veracity | 6.5-6.12 | PASS | |
| 7. Navigation | 7.1 in docs.json | PASS | Present in docs.json concepts group |
| 7. Navigation | 7.2 no orphans | PASS | |
| 7. Navigation | 7.3 correct lane | PASS | concepts/ correct |
| 7. Navigation | 7.4 no stubs | PASS | >2KB |
| 7. Navigation | 7.5-7.11 | PASS | |
| 8. Links | 8.1 internal links resolve | PASS | All internal links use /v2/ absolute paths to existing pages |
| 8. Links | 8.2 snippet imports | PASS | 5 imports all root-absolute |
| 8. Links | 8.3 no TODO in published | PASS | TODO in JSX comment only |
| 8. Links | 8.4-8.6 | PASS | |
| 9. Process | 9.1 human sign-off | FAIL | No sign-off recorded |
| 9. Process | 9.2-9.6 | FAIL | TODO item unresolved |
| 10. Content | 10.1 question coverage | PASS | Mental models (3 backgrounds), technical role, network role, deployment types, who should operate |
| 10. Content | 10.2 zero-to-hero | PASS | From mental model to specific deployment guidance |
| 10.Content | 10.3 self-containment | PASS | Complete role explanation |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | The Orchestrator Role in the Livepeer Network | PASS |
| sidebarTitle | Yes | Role | PASS |
| description | Yes | What orchestrators are... | PASS |
| pageType | Yes | concept | PASS |
| pageVariant | Yes | overview | WARN (non-standard) |
| audience | Yes | orchestrator | PASS |
| purpose | Yes | orient | PASS |
| complexity | No | - | FAIL |
| lifecycleStage | No | - | FAIL |
| Keywords | Yes (WRONG CASE) | 10 items | FAIL |
| OG image | Yes | fallback.png | PASS |

## Heading Score Table
| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Technical Role | 5 | 4 | 5 | 5 | 5 | 24 |
| Network Role | 5 | 4 | 5 | 5 | 5 | 24 |
| Deployment Types | 5 | 4 | 5 | 5 | 4 | 23 |
| Who Should Operate One | 4 | 4 | 5 | 5 | 3 | 21 |
| Related Pages | EXEMPT | - | - | - | - | - |

## Verdict: NEEDS WORK
- Missing: complexity, lifecycleStage
- "Keywords" has wrong case (capital K)
- Banned word "significantly" on line 295
- "Pool worker" used as deployment type name (line 248) - may need update to "Pool node"
- Non-standard "pageVariant" field
- 1 unresolved TODO (commercial orchestrator link)
- No human sign-off
