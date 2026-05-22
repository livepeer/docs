# Review: v2/about/network/job-lifecycle.mdx

## Summary

| Category | Score | Notes |
|---|---|---|
| 1. Frontmatter | 6/10 | Has title, sidebarTitle, description, keywords, OG image, audience, purpose. `PageType` capitalised. Missing: complexity, lifecycleStage |
| 2. Voice | 5/10 | Top section (Lifecycle Narrative + state machine) is clean and well-structured. Bottom section (Job Lifecycle video vs AI) degrades into wall-of-text research notes with no paragraph breaks. Bare flowchart code not wrapped in mermaid block. Uses emoji ("Gateway 🡒 Orchestrator") |
| 3. Headings | 6/10 | Uses H3 for first heading (should be H2). "Lifecycle Narrative" is H3 when it should be H2. "Job Lifecycle (video vs AI)" is H3 |
| 4. Structure | 6/10 | Strong state machine section. DynamicTable for events is excellent. But the video vs AI section is an unformatted wall of text. Mermaid flowchart code is inline text, not rendered. 10.4KB |
| 5. Layout | 6/10 | Good: Steps component, mermaid diagram, DynamicTable. Bad: unformatted flowchart, wall of text |
| 6. Veracity | 7/10 | Technical details about job flow, tickets, settlement are accurate |
| 7. Nav | 8/10 | Registered in docs.json |
| 8. Links | 3/10 | No internal links. No Related Pages. Dead-end page |
| 9. Process | 5/10 | lastVerified: 2026-03-17. `PageType` capitalised |
| 10. Completeness | 6/10 | Covers lifecycle well in theory but second half is unfinished prose |

## Frontmatter Table

| Field | Present | Value | Valid |
|---|---|---|---|
| title | Yes | Livepeer Job Lifecycle | OK |
| sidebarTitle | Yes | Job Lifecycle | OK |
| description | Yes | End-to-end compute job... | OK, good |
| pageType | Yes (as `PageType`) | concept | CASING |
| audience | Yes | general | OK |
| purpose | Yes | concept | OK |
| complexity | No | — | MISSING |
| lifecycleStage | No | — | MISSING |
| keywords | Yes | Array | OK |
| og:image | Yes | fallback.png | WARN |

## Heading Score Table

| Criterion | Pass |
|---|---|
| First heading is H2 | FAIL — H3 |
| No skipped levels | FAIL — starts at H3 |
| No banned heading phrases | PASS |
| Descriptive headings | PASS |

**Heading score: 15/25**

## Verdict

**NEEDS WORK** — Strong first half (state machine, Steps, DynamicTable) but second half is unformatted research dump. Fix: promote headings to H2, format video vs AI section, wrap flowchart in mermaid block, add Related Pages, remove emoji.
