# Review: network2/job-lifecycle.mdx

**Page**: `v2/about/network2/job-lifecycle.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)
**Cross-flag**: Topic counterpart is `v2/about/network/job-pipelines.mdx` (149 lines). Trailing "video vs AI" section duplicates content from `network2/actors.mdx` Core Actors block.

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. `audience: general`, `purpose: concept` deprecated. |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `concept`. |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `concept` deprecated. |
| 1. Frontmatter | 1.5 | audience 7-token | FAIL | `general` deprecated. |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate`. |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `discover`. |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing. |
| 1. Frontmatter | 1.11 | description well-formed | FAIL | Description contains a curly em-dash-style smart quote `"compute job"` (acceptable) but description leads with "This page describes" — self-referential opener (check 2.15). Also contains an em-dash style replacement: `compute is segment-oriented` is fine, but description >160 chars. |
| 1. Frontmatter | 1.12 | OG block complete | PASS | Full OG block. |
| 1. Frontmatter | 1.13 | keywords quality | FAIL | `learn`, `job`, `lifecycle` filler. |
| 1. Frontmatter | 1.14 | Multi-audience flag | N/A | Single audience. |
| 2. Voice | 2.1 | UK English | PASS | `modelled` UK; `optimised` not used; `behaviour` not used. No US spellings. |
| 2. Voice | 2.2 | Banned words | PASS | None. |
| 2. Voice | 2.3 | Banned phrases | FAIL | Description begins "This page describes…" — banned phrase + self-reference. |
| 2. Voice | 2.4 | Banned constructions | PASS | None. |
| 2. Voice | 2.5 | Opening order | FAIL | Visible content opens with H3 `### Lifecycle Narrative` — H2 missing; H3 introduces the page (no H1, no intro paragraph above the steps). |
| 2. Voice | 2.6 | Paragraph discipline | FAIL | "Job Lifecycle (video vs AI)" closing section is a wall of text with raw newline-separated step lists rendered as prose. |
| 2. Voice | 2.7 | Audience register | FAIL | Audience deprecated; switches between operator and developer registers. |
| 2. Voice | 2.10 | Hedging openers | PASS | No hedging opener. |
| 2. Voice | 2.11 | Terminology locked | FAIL | "Gateway (broadcaster)" line treats Broadcaster as live synonym. |
| 2. Voice | 2.12 | No em-dashes | INFO | Smart quotes present (`"compute job"`, `"video + ticket"`); no actual em-dashes detected. |
| 2. Voice | 2.13 | Entity-led voice | PASS | Subject-led prose. |
| 2. Voice | 2.16 | Deprecated terms absent | FAIL | "broadcaster" in `Gateway (broadcaster)` and `(Broadcasters pre-fund enough ETH…)`. |
| 2. Voice | 2.17 | Universal terms consistent | FAIL | Broadcaster used alongside Gateway. |
| 2. Voice | 2.21 | First use defined or linked | FAIL | `RTMP`, `Cascade`, `Daydream`, `StableDiffusion`, `JobsManager`, `TicketBroker` introduced without definition or link. |
| 3. Headings | 3.1 | Score ≥20/25 | FAIL | "Lifecycle Narrative" 20/25; "State machine diagram" 20/25; "Events and transitions" 22/25; "Job Lifecycle (video vs AI)" 18/25 (literal-contrast pattern). All H3 — page lacks H2. |
| 3. Headings | 3.2 | No banned/weak terms | PASS | None banned. |
| 3. Headings | 3.3 | No literal contrast labels | FAIL | "Job Lifecycle (video vs AI)" is a `X vs Y` heading. |
| 3. Headings | 3.4 | Domain-anchor rule | PASS | All headings include domain anchor. |
| 3. Headings | 3.5 | Names concept not examples | PASS | Concepts. |
| 3. Headings | 3.6 | Title well-formed | PASS | "Livepeer Job Lifecycle". |
| 3. Headings | 3.7 | Expert editorial | FAIL | "Job Lifecycle (video vs AI)" parenthetical is amateurish. |
| 3. Headings | 3.8 | Per-pageType naming | PASS | Concept-led mostly. |
| 3. Headings | 3.9 | Per-audience register | FAIL | Audience deprecated. |
| 3. Headings | 3.10 | Domain-anchor applied | PASS | Yes. |
| 3. Headings | extra | Heading hierarchy | FAIL | Page has H3 sections only — no H2. Skips heading levels. |
| 4. Structure | 4.1 | One purpose, one job | FAIL | Page tries to (a) state-machine the lifecycle and (b) deeply describe the video vs AI flow including probabilistic payments + Cascade pipeline + Daydream example. Two jobs. |
| 4. Structure | 4.2 | Purpose statement | PASS | "Lets the [community] understand the job lifecycle." |
| 4. Structure | 4.3 | PREV/NEXT adjacency | INFO | Confirm with docs.json. |
| 4. Structure | 4.4 | No dead ends | FAIL | No Related Pages section, no Next Step CTA. |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None. |
| 4. Structure | 4.6 | Out-of-scope clear | FAIL | None. |
| 4. Structure | 4.7 | Info type per section | FAIL | State machine is structural; video-vs-AI tail is procedural narrative. Mixed. |
| 4. Structure | 4.8 | No content duplication | FAIL | Tail section duplicates `actors.mdx` Core Actors block (Gateway → Orchestrator → Transcoder pattern, probabilistic-payments paragraph, Daydream example). |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Zero cross-tab links. |
| 4. Structure | 4.11 | Discord test | FAIL | Tail wall-of-text + raw flowchart syntax in prose break the polished-answer test. |
| 4. Structure | 4.12 | Page size appropriate | PASS | ~10 KB. |
| 4. Structure | 4.13 | No TODO/REVIEW | PASS | Two `{/* */}` JSX comments present (commented-out outline + commented header) — these are not TODO/REVIEW per se but indicate draft state. |
| 4. Structure | 4.15 | Trade-offs present | FAIL | No trade-offs (e.g. probabilistic-payment variance, swap-orchestrator latency cost). |
| 4. Structure | 4.16 | Context block completable | FAIL | Audience/purpose deprecated. |
| 5. Layout | 5.1 | Correct template | FAIL | Concept template not applied. |
| 5. Layout | 5.2 | Required sections | FAIL | No Overview / Introduction. No Related Pages. |
| 5. Layout | 5.3 | Approved components | PASS | Steps, DynamicTable, Mermaid (codeblock-form) used. |
| 5. Layout | 5.6 | Renders clean | FAIL | Lines 136–142: raw `flowchart LR` syntax sits in prose without a fenced code block — will render as broken text or attempt-to-execute Mermaid in body. |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | Deprecated audience/purpose. |
| 5. Layout | 5.10 | Component naming/import | PASS | Single import. |
| 5. Layout | 5.11 | Gold-standard template | FAIL | No template alignment. |
| 5. Layout | 5.13 | Section ordering | FAIL | No Related Pages footer; trailing wall of text. |
| 5. Layout | 5.16 | Related Pages or Next CTA | FAIL | Neither present. |
| 5. Layout | 5.17 | Related Pages format | FAIL | Absent. |
| 5. Layout | 5.18 | Tab icon prop | N/A | No Tabs. |
| 5. Layout | 5.19 | Accordion icon prop | N/A | No Accordions. |
| 5. Layout | 5.20 | Code block metadata | FAIL | Mermaid block lacks `title`. The orphaned `flowchart LR` block (lines 136-142) is not even fenced. |
| 5. Layout | 5.21 | StyledSteps | FAIL | Uses raw `<Steps>`/`<Step>` not `<StyledSteps>`. |
| 5. Layout | 5.23 | StyledTable | FAIL | Uses `DynamicTable`, not `StyledTable`. |
| 5. Layout | 5.24 | Max 1-2 tables | PASS | One table. |
| 5. Layout | 5.25 | Max 1 major layout element | FAIL | Steps + Mermaid + DynamicTable + raw flowchart. |
| 5. Layout | 5.26 | CustomDivider placement | FAIL | None used. |
| 5. Layout | 5.27 | Mermaid governed colours | FAIL | Mermaid block has no theme colours from `MermaidColours.jsx`. |
| 5. Layout | 5.28 | Import ordering | FAIL | No canonical section comment headers. |
| 5. Layout | 5.30 | Fact-check flags | FAIL | Multiple unverified metric names + Cascade naming + Daydream flow unflagged. |
| 5. Layout | 5.33 | Drafts in workspace | FAIL | Tail wall-of-text reads as draft research. |
| 5. Layout | 5.34 | No inline styles | PASS | None. |
| 6. Veracity | 6.1 | Every claim citable | FAIL | All `livepeer_*_total` metric names need verification against go-livepeer source. |
| 6. Veracity | 6.2 | Code/commands tested | N/A | No commands. |
| 6. Veracity | 6.4 | Numbers are real | FAIL | "maxAttempts (default 3)", "txTimeout (default 5 mins)" need source. |
| 6. Veracity | 6.5 | REVIEW flags | FAIL | None despite many unverified claims. |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing. |
| 6. Veracity | 6.10 | Source authority tiers | FAIL | No primary source citations. |
| 7. Navigation | 7.1 | In docs.json | INFO | Confirm. |
| 7. Navigation | 7.4 | No structural orphans | INFO | Confirm. |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | Zero cross-tab links. |
| 7. Navigation | 7.10 | No stubs | PASS | >2 KB. |
| 8. Links | 8.1 | Internal links | N/A | None. |
| 8. Links | 8.5 | Renders | FAIL | Raw flowchart syntax in prose (lines 136-142) breaks render. |
| 8. Links | 8.6 | No TODO/TBD | PASS | None. |
| 9. Process | 9.1-9.5 | Process | FAIL | No evidence. |
| 10. Completeness | 10.1 | Question coverage | PASS | Lifecycle question answered. |
| 10. Completeness | 10.2 | Zero-to-hero | FAIL | Mismatched register and broken render block. |
| 10. Completeness | 10.4 | Scope boundaries | FAIL | None stated. |
| 10. Completeness | 10.5 | Self-containment | FAIL | Tail wall-of-text duplicates other pages. |

## Summary

| Category | Pass | Fail | N/A | INFO |
|---|---|---|---|---|
| 1. Frontmatter | 4 | 6 | 4 | 0 |
| 2. Voice | 6 | 9 | 6 | 1 |
| 3. Headings | 6 | 5 | 0 | 0 |
| 4. Structure | 2 | 13 | 1 | 1 |
| 5. Layout | 3 | 16 | 13 | 0 |
| 6. Veracity | 0 | 6 | 6 | 0 |
| 7. Navigation | 1 | 1 | 6 | 3 |
| 8. Links | 1 | 1 | 4 | 0 |
| 9. Process | 0 | 5 | 1 | 0 |
| 10. Completeness | 1 | 4 | 1 | 0 |

**Overall verdict**: NEEDS WORK — useful state-machine + metric table, but a render bug and content duplication.

**Critical issues**:
1. **Render-broken block**: lines 136–142 contain raw `flowchart LR` Mermaid syntax outside a fenced code block. Will render as broken prose. CRITICAL.
2. **Wall-of-text "Job Lifecycle (video vs AI)" tail** duplicates `actors.mdx` Core Actors content and reads as raw research notes.
3. **Page has no H2** — only H3 sections under no parent heading. Skips heading levels.
4. **Deprecated frontmatter** (`audience: general`, `purpose: concept`); missing `veracityStatus`; description starts with banned phrase "This page describes".
5. **No Related Pages or Next Step CTA**.
6. **Deprecated term "broadcaster"** appears in body text.
