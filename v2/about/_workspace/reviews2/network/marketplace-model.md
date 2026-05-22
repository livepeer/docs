# Review: marketplace-model.mdx

**Page**: `v2/about/network/marketplace-model.mdx`
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
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first, fits |
| 1. Frontmatter | 1.12 | OG block | FAIL | 4 of 5 OG fields missing |
| 1. Frontmatter | 1.13 | keywords quality | PASS | `marketplace`, `routing`, `pricing` are intent-aligned |
| 2. Voice | 2.1 | UK English | PASS | "decentralised" |
| 2. Voice | 2.5 | Opening order | PASS | Opens with "The Livepeer Network supports..." |
| 2. Voice | 2.6 | Paragraph discipline | MEDIUM | Tight; "Marketplace overview" intro fragment "The marketplace layer, actor behaviours..." is a sentence fragment |
| 2. Voice | 2.11 | Terminology locked | PASS | Gateway, Orchestrator consistent |
| 2. Voice | 2.13 | Entity-led voice | PASS | "The Livepeer Network supports" |
| 2. Voice | 2.21 | First-use defined | FAIL | `TicketBroker`, `BondingManager`, `ComfyStream`, `Daydream`, LIPs (78/81/85) undefined |
| 3. Headings | 3.1 | Heading score | MIXED | "Marketplace overview" (avoid `Overview`), "Demand: client workloads" (22), "Supply: Orchestrator nodes" (22), "Routing logic" (20), "Price discovery" (22), "Payments and settlement" (22), "Credit system extensions" (20), "Observability" (18), "Protocol-market boundaries" (24), "Future upgrades (LIPs proposed)" (22), "See also" (avoid), "References" (avoid) |
| 3. Headings | 3.2 | No banned/weak terms | FAIL | "Marketplace overview", "See also", "References" |
| 3. Headings | 3.6 | Title well-formed | PASS | "Livepeer Marketplace" |
| 4. Structure | 4.1 | One job | PASS | Single job: marketplace mechanics |
| 4. Structure | 4.5 | Prerequisites stated | FAIL | None |
| 4. Structure | 4.8 | No content duplication | FAIL | This file is character-for-character identical to `network/mechanics.mdx` (except `DynamicTable` vs `DynamicTableV2` import); also identical to `network2/marketplace.mdx`. Three copies of one page |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Only `/v2/orchestrators/portal` |
| 4. Structure | 4.11 | Discord test | PASS | Substantive answer |
| 4. Structure | 4.12 | Page size | PASS | ~5.5KB |
| 4. Structure | 4.15 | Trade-offs present | FAIL | No trade-offs (e.g. posted-pricing limitations) |
| 5. Layout | 5.1 | Correct template | FAIL | No gold-standard template |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `audience: general`, `purpose: concept` |
| 5. Layout | 5.16 | Related Pages | FAIL | "See also" + "References" not Card/Columns |
| 5. Layout | 5.27 | Mermaid governed | FAIL | No MermaidColours import |
| 6. Veracity | 6.1 | Every claim citable | FAIL | LIP-78/81/85 not cited or linked |
| 6. Veracity | 6.5 | REVIEW flags | FAIL | None |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 7. Navigation | 7.1 | In docs.json | PASS | `v2/about/network/marketplace-model` line 2154 |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | One cross-tab link |
| 8. Links | 8.1 | Internal links | FAIL | `./job-lifecycle` does not exist (file is `job-pipelines.mdx`); `./actors` exists; `../protocol/overview` does not exist; `../protocol/blockchain-contracts` does not exist; `../resources/technical-roadmap` not verified |
| 8. Links | 8.2 | External links | NOT-TESTED | livepeer.studio/docs, github.com/livepeer/protocol/tree/master/contracts/job, blog.livepeer.org |
| 8. Links | 8.6 | No TODO/Coming Soon | PASS | None (LIPs flagged "In development" not "Coming Soon") |
| 9. Process | 9.1 | Human sign-off | FAIL | None |

## Frontmatter Table

| Field | Present | Value | Valid |
|---|---|---|---|
| title | Yes | Livepeer Marketplace | OK |
| sidebarTitle | Yes | Marketplace | OK |
| description | Yes | How the Livepeer Network marketplace... | OK |
| pageType | Yes | concept | OK |
| audience | Yes | general | DEPRECATED |
| purpose | Yes | concept | DEPRECATED ALIAS |
| complexity | Yes | intermediate | OK |
| lifecycleStage | Yes | discover | OK |
| keywords | Yes | array | OK |
| og:image | Yes | about.png | OK (4 sub-fields missing) |
| veracityStatus | No | — | MISSING |
| lastVerified | Yes | 2026-03-17 | OK |

## Cross-page duplication

- **TRIPLE-DUPLICATE**: this file is identical (line-for-line, modulo `DynamicTable` import) to:
  - `v2/about/network/mechanics.mdx` (uses `DynamicTableV2`)
  - `v2/about/network2/marketplace.mdx` (uses `DynamicTable`)
  - This file (uses `DynamicTable`)
- **OVERLAP**: payment/settlement section overlaps `v2/about/network/job-pipelines.mdx` and `v2/about/protocol/mechanisms.mdx`.

## Summary

**Verdict**: NEEDS WORK (delete two duplicates first)
**Critical**:
1. Triple-duplicate file (identical to `mechanics.mdx` and `network2/marketplace.mdx`)
2. Multiple broken internal links (`./job-lifecycle`, `../protocol/overview`, `../protocol/blockchain-contracts`)
3. Deprecated `audience: general`, `purpose: concept`
4. Mermaid uses default colours
5. No trade-offs surfaced; LIPs cited without links
