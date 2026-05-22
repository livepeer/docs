# Review: architecture.mdx

**Page**: `v2/about/network/architecture.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. OG block has only `og:image` |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `concept` valid |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose: concept` deprecated → should be `explain` |
| 1. Frontmatter | 1.5 | audience 7-token | FAIL | `audience: general` deprecated → `community` |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `discover` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first, fits 160 chars |
| 1. Frontmatter | 1.12 | OG block complete | FAIL | 4 of 5 OG fields missing |
| 1. Frontmatter | 1.13 | keywords quality | MEDIUM | Includes specific terms (`go-livepeer`, `gateway`) but generic ones too |
| 2. Voice | 2.1 | UK English | PASS | "decentralised", "Containerized" — `Containerized` line 64 is US (should be `Containerised`) |
| 2. Voice | 2.1 | UK English | FAIL | "Containerized" (line 64) US spelling |
| 2. Voice | 2.5 | Opening order | FAIL | Opens with orphaned fragment "the full stack of tools..." (no capital, no subject anchor) |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Tight bullets and short prose |
| 2. Voice | 2.11 | Terminology locked | PASS | Uses Gateway, Orchestrator consistently |
| 2. Voice | 2.12 | No em-dashes | PASS | Uses hyphens only |
| 2. Voice | 2.13 | Entity-led voice | FAIL | First sentence is fragment without subject |
| 2. Voice | 2.21 | First-use defined | FAIL | `orchSecret`, `orchAddr`, `BondingManager`, `TicketBroker`, `Cascade`, NVENC undefined |
| 3. Headings | 3.1 | Heading score ≥20/25 | MIXED | "Architecture layers" (20), "Orchestrator node" (22), "Worker layer" (20), "Gateway infrastructure" (22), "APIs" (15 — too generic), "CLI and SDKs" (18), "Monitoring and observability" (22), "Deployment examples" (19), "See also" (avoid), "References" (avoid) |
| 3. Headings | 3.2 | No banned/weak terms | FAIL | "See also" is avoid-tier; "References" weak |
| 3. Headings | 3.6 | Title well-formed | PASS | "Network Technical Architecture" |
| 4. Structure | 4.1 | One job | PASS | Stack overview is the single job |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None |
| 4. Structure | 4.7 | Info type per section | PASS | Mostly factual + structural |
| 4. Structure | 4.8 | No content duplication | FAIL | Heavy overlap with `network2/technical-architecture.mdx` and `interfaces.mdx` (gRPC/REST/GraphQL repeated) |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Only one (`/v2/orchestrators/portal`). Missing Gateways, Developers, LPT |
| 4. Structure | 4.11 | Discord test | MEDIUM | Broken opening; otherwise comprehensive |
| 4. Structure | 4.12 | Page size | PASS | ~5KB |
| 5. Layout | 5.1 | Correct template | FAIL | No gold-standard template structure |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `audience: general`, `purpose: concept` deprecated |
| 5. Layout | 5.10 | Component naming | PASS | DynamicTable correctly imported |
| 5. Layout | 5.16 | Related Pages | FAIL | Has "See also" + "References" — neither uses Card/Columns |
| 5. Layout | 5.17 | Related Pages format | FAIL | Plain markdown |
| 5. Layout | 5.20 | Code block metadata | N/A | No fenced code blocks (only mermaid) |
| 5. Layout | 5.27 | Mermaid governed | FAIL | Mermaid block uses default theme; no MermaidColours import |
| 6. Veracity | 6.1 | Every claim citable | FAIL | Claims about `orchSecret`, region advertisement, region scoring not cited |
| 6. Veracity | 6.5 | REVIEW flags | FAIL | None |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 7. Navigation | 7.1 | In docs.json | PASS | `v2/about/network/architecture` line 2156 |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | One cross-tab link |
| 8. Links | 8.1 | Internal links resolve | FAIL | `./marketplace` does not exist (file is `marketplace-model.mdx`); `./job-lifecycle` does not exist (file renamed to `job-pipelines.mdx`); `../protocol/technical-architecture` and `../protocol/blockchain-contracts` do not exist in current `protocol/` |
| 8. Links | 8.2 | External links live | NOT-TESTED | github.com/livepeer/* — not verified |
| 9. Process | 9.1 | Human sign-off | FAIL | None |
| 10. Completeness | 10.5 | Self-containment | PASS | Stand-alone stack walk-through |

## Frontmatter Table

| Field | Present | Value | Valid |
|---|---|---|---|
| title | Yes | Network Technical Architecture | OK |
| sidebarTitle | Yes | Architecture | OK |
| description | Yes | Technical stack of the Livepeer Network... | OK |
| pageType | Yes | concept | OK |
| audience | Yes | general | DEPRECATED |
| purpose | Yes | concept | DEPRECATED ALIAS |
| complexity | Yes | intermediate | OK |
| lifecycleStage | Yes | discover | OK |
| keywords | Yes | array | OK |
| og:image | Yes | about.png | OK (4 OG sub-fields missing) |
| veracityStatus | No | — | MISSING |
| lastVerified | Yes | 2026-03-17 | OK |

## Cross-page duplication

- **OVERLAP**: `v2/about/network2/technical-architecture.mdx` (registered in nav line 2211) — substantially overlapping technical stack content.
- **OVERLAP**: `v2/about/network/interfaces.mdx` repeats REST / gRPC / GraphQL / SDK / CLI sections.
- **OVERLAP**: `v2/about/concepts/livepeer-stack.mdx` (concepts tab) covers the layered architecture as a stub.
- **OVERLAP**: `v2/about/protocol/architecture.mdx` (protocol tab) covers protocol-side architecture, but this page links to `../protocol/technical-architecture` which does not exist.

## Summary

**Verdict**: NEEDS WORK
**Critical**:
1. Broken internal links (`./marketplace`, `./job-lifecycle`, `../protocol/technical-architecture`, `../protocol/blockchain-contracts`)
2. Opens with orphan fragment lacking subject and capitalisation
3. `Containerized` US spelling
4. Mermaid block does not use governed colours
5. Deprecated `audience: general` / `purpose: concept`
6. Heavy duplication with `network2/technical-architecture.mdx` and `network/interfaces.mdx`
