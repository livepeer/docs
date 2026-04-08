# Review: Orchestrator Capabilities
**File:** v2/orchestrators/concepts/capabilities.mdx
**Reviewed:** 2026-04-08

## Summary
| Category | Check # | Result | Evidence |
|---|---|---|---|
| 1. Frontmatter | 1.1 title | PASS | "Orchestrator Capabilities" present |
| 1. Frontmatter | 1.2 sidebarTitle | PASS | "Capabilities" present |
| 1. Frontmatter | 1.3 description | PASS | Present, 143 chars, subject-first |
| 1. Frontmatter | 1.4 pageType | PASS | "concept" - valid |
| 1. Frontmatter | 1.5 audience | PASS | "orchestrator" - valid |
| 1. Frontmatter | 1.6 purpose | PASS | "explain" - valid |
| 1. Frontmatter | 1.7 complexity | FAIL | Missing entirely |
| 1. Frontmatter | 1.8 lifecycleStage | FAIL | Missing entirely |
| 1. Frontmatter | 1.9 keywords | FAIL | Field name is "Keywords" (capital K) - may not be read by tooling |
| 1. Frontmatter | 1.10 OG image | PASS | Full OG block present (using fallback.png) |
| 1. Frontmatter | 1.11 description quality | PASS | Subject-first, no self-reference, under 160 chars |
| 1. Frontmatter | 1.12 keywords quality | PASS | Specific: orchestrator capabilities, video transcoding, AI inference, Cascade, BYOC |
| 1. Frontmatter | 1.13 pageType valid | PASS | "concept" in approved list |
| 2. Voice | 2.1 UK English | PASS | "deprioritise" used correctly |
| 2. Voice | 2.2 banned words | PASS | None found in published content |
| 2. Voice | 2.3 banned phrases | FAIL | Line 218: "Understanding Gateway selection is essential" - exact banned phrase pattern |
| 2. Voice | 2.4 no self-reference | PASS | No "this page" in body or description |
| 2. Voice | 2.5 no em-dashes | PASS | None found |
| 2. Voice | 2.6 no hedging verbs | PASS | None found |
| 2. Voice | 2.7 entity-led | PASS | No "we"/"our" |
| 2. Voice | 2.8-2.22 deprecated terms | PASS | None found |
| 3. Headings | 3.1 heading quality | PASS | All above threshold |
| 3. Headings | 3.2 banned headings | PASS | None found |
| 3. Headings | 3.3-3.10 weak headings | PASS | None found |
| 4. Structure | 4.1 one purpose | PASS | Single purpose: explain what orchestrators can execute |
| 4. Structure | 4.2 no dead ends | PASS | Related Pages footer with 4 cards |
| 4. Structure | 4.3 prerequisites | PASS | Links to architecture page for internals |
| 4. Structure | 4.4 Discord test | PASS | Complete capabilities reference |
| 4. Structure | 4.5 min size | PASS | 13843 bytes (>5KB for concept) |
| 4. Structure | 4.6 TODO/REVIEW | WARN | 1 REVIEW flag (line 172) - pipeline list completeness |
| 4. Structure | 4.7-4.16 trade-offs | PASS | Capability boundaries section clearly shows what orchestrators do NOT do |
| 5. Layout | 5.1 template match | PASS | Concept page with tables, diagram, cross-refs |
| 5. Layout | 5.2 required sections | PASS | All concept sections present |
| 5. Layout | 5.3 approved components | PASS | All from /snippets/ |
| 5. Layout | 5.4 data imports | PASS | No hardcoded data requiring import |
| 5. Layout | 5.5 Related Pages | PASS | CardGroup footer |
| 5. Layout | 5.6-5.16 | PASS | |
| 6. Veracity | 6.1 claims citable | PASS | Pipeline list matches go-livepeer AI runner |
| 6. Veracity | 6.2 deprecated API | PASS | None |
| 6. Veracity | 6.3 numbers sourced | N/A | No specific numbers |
| 6. Veracity | 6.4 REVIEW flags | WARN | 1 REVIEW flag: pipeline list completeness |
| 6. Veracity | 6.5-6.12 | PASS | |
| 7. Navigation | 7.1 in docs.json | PASS | Present in docs.json concepts group |
| 7. Navigation | 7.2 no orphans | PASS | |
| 7. Navigation | 7.3 correct lane | PASS | concepts/ correct |
| 7. Navigation | 7.4 no stubs | PASS | >2KB |
| 7. Navigation | 7.5-7.11 | PASS | |
| 8. Links | 8.1 internal links resolve | WARN | Link to "/v2/orchestrators/guides/workloads-and-ai/job-types" in Related Pages - verify path exists (directory may be "ai-and-job-workloads" not "workloads-and-ai") |
| 8. Links | 8.2 snippet imports | PASS | 5 imports all root-absolute |
| 8. Links | 8.3 no TODO in published | PASS | REVIEW in JSX comment only |
| 8. Links | 8.4-8.6 | PASS | |
| 9. Process | 9.1 human sign-off | FAIL | No sign-off recorded |
| 9. Process | 9.2-9.6 | FAIL | REVIEW item unresolved |
| 10. Content | 10.1 question coverage | PASS | Workload types, AI pipelines, capability advertisement, gateway selection, boundaries |
| 10. Content | 10.2 zero-to-hero | PASS | From workload overview to selection mechanics to boundaries |
| 10. Content | 10.3 self-containment | PASS | Complete capabilities reference |

## Frontmatter Table
| Field | Present? | Value | Pass/Fail |
|---|---|---|---|
| title | Yes | Orchestrator Capabilities | PASS |
| sidebarTitle | Yes | Capabilities | PASS |
| description | Yes | What Orchestrators can execute... | PASS |
| pageType | Yes | concept | PASS |
| audience | Yes | orchestrator | PASS |
| purpose | Yes | explain | PASS |
| complexity | No | - | FAIL |
| lifecycleStage | No | - | FAIL |
| Keywords | Yes (WRONG CASE) | 21 items | FAIL |
| OG image | Yes | fallback.png | PASS |

## Heading Score Table
| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total |
|---|---|---|---|---|---|---|
| Workload Types | 5 | 4 | 5 | 5 | 5 | 24 |
| Supported AI Pipelines | 5 | 5 | 5 | 5 | 4 | 24 |
| How Capabilities Are Advertised | 4 | 4 | 5 | 5 | 3 | 21 |
| On-chain registration | 5 | 4 | 5 | 5 | 4 | 23 |
| Capability negotiation | 5 | 4 | 5 | 5 | 4 | 23 |
| How Gateways Select Orchestrators | 4 | 4 | 5 | 5 | 3 | 21 |
| Capability Boundaries | 5 | 4 | 5 | 5 | 4 | 23 |
| Related Pages | EXEMPT | - | - | - | - | - |

## Verdict: NEEDS WORK
- Missing: complexity, lifecycleStage
- "Keywords" has wrong case (capital K)
- Banned phrase: "Understanding Gateway selection is essential" (line 218)
- Likely broken link in Related Pages: "/v2/orchestrators/guides/workloads-and-ai/job-types" (wrong directory name)
- 1 unresolved REVIEW flag
- No human sign-off
