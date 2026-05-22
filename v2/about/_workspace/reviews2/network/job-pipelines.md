# Review: job-pipelines.mdx

**Page**: `v2/about/network/job-pipelines.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus` |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `concept` |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose: concept` deprecated → `explain` |
| 1. Frontmatter | 1.5 | audience 7-token | FAIL | `audience: general` deprecated |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `discover` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.11 | description well-formed | FAIL | Description contains em-dash-like quotes ("compute job") and is 2 sentences (>160 chars). Also uses curly apostrophe in `Livepeer's` |
| 1. Frontmatter | 1.12 | OG block | PASS | All 5 |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | Decomposed: `job lifecycle`, `job`, `lifecycle`, `learn` |
| 1. Frontmatter | 1.15 | description self-ref | FAIL | "This page describes" in description |
| 2. Voice | 2.3 | Banned phrases | FAIL | "This page describes" (description); curly quotes throughout |
| 2. Voice | 2.5 | Opening order | FAIL | First H3 is "Lifecycle Narrative" without H2 hierarchy; meaningful intro is commented-out |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | Final section "Job Lifecycle (video vs AI)" is wall-of-text with broken numbered lists merged into single line |
| 2. Voice | 2.11 | Terminology locked | FAIL | "Broadcaster" used (line 128 "Gateway (broadcaster)") |
| 2. Voice | 2.13 | Entity-led voice | FAIL | "This page describes" |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "Broadcaster" line 128, 144 |
| 2. Voice | 2.21 | First-use defined | FAIL | `RTMP`, `TicketBroker`, `JobsManager`, `Cascade`, `libp2p`, `Daydream`, `StableDiffusion` undefined |
| 3. Headings | 3.1 | Heading score | MIXED | "Lifecycle Narrative" (16), "State machine diagram" (20), "Events and transitions" (22), "Job Lifecycle (video vs AI)" (16, redundant with title) |
| 3. Headings | 3.4 | Domain-anchor | FAIL | Top-level structure starts at H3 instead of H2 |
| 3. Headings | 3.6 | Title well-formed | PASS | "Livepeer Job Lifecycle" |
| 4. Structure | 4.1 | One job | FAIL | Mixes state machine (technical reference) with video-vs-AI marketing narrative |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None |
| 4. Structure | 4.7 | Info type per section | FAIL | Mermaid + technical metrics + AI-marketing prose mixed |
| 4. Structure | 4.8 | No content duplication | FAIL | Final section duplicates `marketplace-model.mdx` payment/settlement and overlaps `network2/job-lifecycle.mdx` |
| 4. Structure | 4.10 | Cross-tab links | FAIL | None |
| 4. Structure | 4.11 | Discord test | FAIL | Mermaid flowchart for AI flow is broken (raw `flowchart LR` not in code fence — line 136-141) |
| 4. Structure | 4.12 | Page size | PASS | ~10KB |
| 4. Structure | 4.13 | No TODO comments | FAIL | Top of file has commented-out content blocks (`{/* This page describes... */}`) acting as scratch notes |
| 5. Layout | 5.1 | Correct template | FAIL | No template |
| 5. Layout | 5.6 | MDX renders clean | FAIL | Raw `flowchart LR` (line 136) is not in fenced code block — will render as text |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `audience: general`, `purpose: concept` |
| 5. Layout | 5.16 | Related Pages | FAIL | None |
| 5. Layout | 5.21 | StyledSteps | FAIL | Uses raw `<Steps>` not `<StyledSteps>` |
| 5. Layout | 5.27 | Mermaid governed | FAIL | No MermaidColours import; default theme |
| 5. Layout | 5.30 | Fact-check flags | FAIL | Specific metric names (`livepeer_stream_started_total`, `livepeer_orchestrator_swaps`, `livepeer_ticket_redemption_errors`) and defaults (`maxAttempts (default 3)`, `txTimeout (default 5 mins)`) not flagged for verification |
| 6. Veracity | 6.1 | Every claim citable | FAIL | No citations for metric names or default values |
| 6. Veracity | 6.4 | Numbers real | NOT-TESTED | Defaults (3, 5 mins) not verified |
| 6. Veracity | 6.5 | REVIEW flags | FAIL | None |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 7. Navigation | 7.1 | In docs.json | PASS | `v2/about/network/job-pipelines` line 2155 |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | None |
| 8. Links | 8.1 | Internal links | N/A | None visible |
| 9. Process | 9.1 | Human sign-off | FAIL | None |

## Frontmatter Table

| Field | Present | Value | Valid |
|---|---|---|---|
| title | Yes | Livepeer Job Lifecycle | OK |
| sidebarTitle | Yes | Job Lifecycle | OK (but file is `job-pipelines.mdx`) |
| description | Yes | This page describes the end-to-end... | SELF-REF + curly quotes + over 160 chars |
| pageType | Yes | concept | OK |
| audience | Yes | general | DEPRECATED |
| purpose | Yes | concept | DEPRECATED ALIAS |
| complexity | Yes | intermediate | OK |
| lifecycleStage | Yes | discover | OK |
| keywords | Yes | array | DECOMPOSED |
| og:image (block) | Yes | full | OK |
| veracityStatus | No | — | MISSING |
| lastVerified | Yes | 2026-03-17 | OK |

## Cross-page duplication

- **NEAR-DUPLICATE**: `v2/about/network2/job-lifecycle.mdx` registered in nav line 2213 (network/job-pipelines is the rename, but network2 still has the old slug).
- **OVERLAP**: TicketBroker / probabilistic-payments / fee-share material duplicates `v2/about/network/marketplace-model.mdx` and `v2/about/protocol/mechanisms.mdx`.

## Summary

**Verdict**: NEEDS WORK
**Critical**:
1. Raw `flowchart LR` block (lines 136-141) outside any code fence — renders as text/breaks the Mermaid display
2. Description starts with banned `This page describes` and contains curly quotes
3. Uses raw `<Steps>` not `<StyledSteps>`
4. Mermaid block lacks governed MermaidColours
5. Uses "Broadcaster" (deprecated) lines 128, 144
6. Final section (video vs AI) is wall-of-text with merged numbered lists
7. File renamed to `job-pipelines.mdx` but sidebarTitle and content still say "Job Lifecycle"; `network2/job-lifecycle.mdx` (old slug) still in nav
