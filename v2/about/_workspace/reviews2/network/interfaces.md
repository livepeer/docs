# Review: interfaces.mdx

**Page**: `v2/about/network/interfaces.mdx`
**Review date**: 2026-05-03
**Checks reference**: checks.mdx (135 checks)

## Per-Check Results

| Category | Check | Name | Result | Evidence |
|---|---|---|---|---|
| 1. Frontmatter | 1.1 | Required fields | FAIL | Missing `veracityStatus`. OG block has all 5 |
| 1. Frontmatter | 1.2 | pageType canonical | PASS | `concept` |
| 1. Frontmatter | 1.4 | purpose canonical | FAIL | `purpose: concept` deprecated → `explain` |
| 1. Frontmatter | 1.5 | audience 7-token | FAIL | `audience: general` deprecated → likely `developer` (this page targets developers/operators) |
| 1. Frontmatter | 1.6 | complexity | PASS | `intermediate` |
| 1. Frontmatter | 1.7 | lifecycleStage | PASS | `discover` |
| 1. Frontmatter | 1.8 | veracityStatus | FAIL | Missing |
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first |
| 1. Frontmatter | 1.12 | OG block | PASS | All 5 |
| 1. Frontmatter | 1.13 | keywords quality | PASS | Strong: `API`, `SDK`, `CLI`, `GraphQL`, `REST`, `gRPC` |
| 2. Voice | 2.1 | UK English | PASS | "decentralised", "stylized" appears nowhere in this file |
| 2. Voice | 2.5 | Opening order | PASS | Opens with subject ("Livepeer exposes multiple access interfaces...") |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Tight |
| 2. Voice | 2.11 | Terminology locked | PASS | Gateway, Orchestrator, Delegator consistent |
| 2. Voice | 2.13 | Entity-led voice | PASS | "Livepeer exposes" |
| 2. Voice | 2.21 | First-use defined | FAIL | `BondingManager`, `TicketBroker`, `Governor`, `livepeer_cli` undefined; `ABIs` not expanded |
| 3. Headings | 3.1 | Heading score | MIXED | "Interface categories" (19), "REST API (Livepeer Studio)" (22), "gRPC API (Gateway nodes)" (22), "GraphQL Explorer API" (22), "JS SDK" (20), "CLI" (15 — too short, ambiguous), "Smart contract interfaces" (22), "Workflow examples" (18), "See also" (avoid), "References" (avoid) |
| 3. Headings | 3.2 | No banned/weak terms | FAIL | "See also", "References" |
| 3. Headings | 3.6 | Title well-formed | PASS | "Network Interfaces" |
| 4. Structure | 4.1 | One job | PASS | Catalogue of interfaces |
| 4. Structure | 4.8 | No content duplication | FAIL | REST/gRPC/GraphQL/SDK/CLI all duplicated in `architecture.mdx` |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Only `protocol/blockchain-contracts` (does not exist); no Developers/Gateways tab links |
| 4. Structure | 4.11 | Discord test | PASS | Comprehensive answer to "what interfaces are there" |
| 4. Structure | 4.12 | Page size | PASS | ~5KB |
| 4. Structure | 4.15 | Trade-offs present | FAIL | No trade-offs surfaced (when to use REST vs gRPC etc.) |
| 5. Layout | 5.1 | Correct template | FAIL | No gold-standard template |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `audience: general`, `purpose: concept` |
| 5. Layout | 5.16 | Related Pages | FAIL | "See also" + "References" not Card/Columns |
| 5. Layout | 5.20 | Code block metadata | PASS | Code blocks include `icon="terminal"` |
| 6. Veracity | 6.1 | Every claim citable | NOT-TESTED | Endpoints `livepeer.studio/api`, `explorer.livepeer.org/graphql` not verified |
| 6. Veracity | 6.2 | Code/commands tested | NOT-TESTED | `npm install @livepeer/sdk`, `go install`, `livepeer_cli status` not verified against current packages |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 7. Navigation | 7.1 | In docs.json | PASS | `v2/about/network/interfaces` line 2156 |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | None |
| 8. Links | 8.1 | Internal links | FAIL | `./technical-architecture` does not exist (current name `architecture.mdx`); `./marketplace` does not exist (`marketplace-model.mdx`); `./job-lifecycle` does not exist (`job-pipelines.mdx`); `../protocol/blockchain-contracts` does not exist |
| 8. Links | 8.2 | External links live | NOT-TESTED | `livepeer.studio/docs`, `explorer.livepeer.org`, `github.com/livepeer/*` not verified |
| 8. Links | 8.6 | No TODO/Coming Soon | PASS | None |
| 9. Process | 9.1 | Human sign-off | FAIL | None |

## Frontmatter Table

| Field | Present | Value | Valid |
|---|---|---|---|
| title | Yes | Network Interfaces | OK |
| sidebarTitle | Yes | Interfaces | OK |
| description | Yes | How to interact with Livepeer Network and protocol... | OK |
| pageType | Yes | concept | OK |
| audience | Yes | general | DEPRECATED |
| purpose | Yes | concept | DEPRECATED ALIAS |
| complexity | Yes | intermediate | OK |
| lifecycleStage | Yes | discover | OK |
| keywords | Yes | array | OK |
| og:image (block) | Yes | full | OK |
| veracityStatus | No | — | MISSING |
| lastVerified | Yes | 2026-03-17 | OK |

## Cross-page duplication

- **NEAR-DUPLICATE**: `v2/about/network2/interfaces.mdx` is the same content (registered in nav line 2214 instead of this one).
- **HEAVY OVERLAP**: `v2/about/network/architecture.mdx` "APIs" and "CLI and SDKs" sections cover the same ground.
- **OVERLAP**: Smart contract interface section overlaps with `v2/about/protocol/architecture.mdx` and would-be `protocol/blockchain-contracts` page.

## Summary

**Verdict**: NEEDS WORK
**Critical**:
1. Multiple broken internal links (`./technical-architecture`, `./marketplace`, `./job-lifecycle`, `../protocol/blockchain-contracts`)
2. Deprecated `audience: general`, `purpose: concept`; missing `veracityStatus`
3. Audience should likely be `developer` not `community` (interface catalogue is developer-facing)
4. Heavy duplication with `architecture.mdx` and `network2/interfaces.mdx`
5. Code blocks not verified against current SDK / CLI versions
