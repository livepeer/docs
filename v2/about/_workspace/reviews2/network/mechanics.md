# Review: mechanics.mdx

**Page**: `v2/about/network/mechanics.mdx`
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
| 1. Frontmatter | 1.11 | description well-formed | PASS | Subject-first |
| 1. Frontmatter | 1.12 | OG block | FAIL | 4 of 5 OG fields missing |
| 1. Frontmatter | 1.13 | keywords quality | PASS | Intent-aligned |
| 2. Voice | 2.5 | Opening order | FAIL | Opens with "This page describes the mechanics of the network" — banned `This page` self-reference |
| 2. Voice | 2.6 | Paragraph discipline | PASS | Tight |
| 2. Voice | 2.11 | Terminology locked | PASS | Gateway, Orchestrator consistent |
| 2. Voice | 2.13 | Entity-led voice | FAIL | "This page describes" |
| 2. Voice | 2.21 | First-use defined | FAIL | TicketBroker, BondingManager, ComfyStream, LIPs undefined |
| 3. Headings | 3.1 | Heading score | MIXED | Same as `marketplace-model.mdx`; "Marketplace overview" weak |
| 3. Headings | 3.2 | No banned/weak terms | FAIL | "Marketplace overview", "See also", "References" |
| 3. Headings | 3.6 | Title well-formed | FAIL | Title is "Livepeer Marketplace" — does not match filename `mechanics.mdx`. sidebarTitle "Marketplace" duplicates `marketplace-model.mdx` sidebar entry |
| 4. Structure | 4.1 | One job | FAIL | File asserts itself as both "mechanics of the network" AND "marketplace" — split identity |
| 4. Structure | 4.8 | No content duplication | FAIL | Identical to `marketplace-model.mdx` (modulo `DynamicTableV2` import) and `network2/marketplace.mdx` |
| 4. Structure | 4.10 | Cross-tab links | FAIL | Only `/v2/orchestrators/portal` |
| 4. Structure | 4.11 | Discord test | FAIL | Identity confusion (mechanics vs marketplace) |
| 4. Structure | 4.12 | Page size | PASS | ~5.5KB |
| 5. Layout | 5.1 | Correct template | FAIL | No template |
| 5. Layout | 5.7 | No old-schema frontmatter | FAIL | `audience: general`, `purpose: concept` |
| 5. Layout | 5.10 | Component naming | PASS | `DynamicTableV2` is a real component |
| 5. Layout | 5.16 | Related Pages | FAIL | "See also" + "References" not Card/Columns |
| 5. Layout | 5.27 | Mermaid governed | FAIL | Default colours |
| 6. Veracity | 6.6 | veracityStatus honest | FAIL | Missing |
| 7. Navigation | 7.1 | In docs.json | NOT-IN-NAV | Not registered (only `marketplace-model` is at line 2154) |
| 7. Navigation | 7.6 | Cross-tab graduation | FAIL | One cross-tab link |
| 8. Links | 8.1 | Internal links | FAIL | Same broken links as `marketplace-model.mdx` (`./job-lifecycle`, `../protocol/overview`, `../protocol/blockchain-contracts`) |
| 9. Process | 9.1 | Human sign-off | FAIL | None |

## Frontmatter Table

| Field | Present | Value | Valid |
|---|---|---|---|
| title | Yes | Livepeer Marketplace | INCONSISTENT WITH FILENAME |
| sidebarTitle | Yes | Marketplace | DUPLICATE OF marketplace-model |
| description | Yes | How the Livepeer Network marketplace... | OK (identical to marketplace-model) |
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

- **EXACT TRIPLE-DUPLICATE**: identical to `v2/about/network/marketplace-model.mdx` (modulo `DynamicTableV2` import) and `v2/about/network2/marketplace.mdx`. Three files, one page.
- **NAV ABSENT**: not in docs.json — orphan file.

## Summary

**Verdict**: DELETE (triple-duplicate, not in nav, filename/title mismatch)
**Critical**:
1. Identical content to `marketplace-model.mdx` and `network2/marketplace.mdx` — choose one canonical, delete others
2. Title says "Livepeer Marketplace" but filename says `mechanics.mdx` — split identity
3. Not in docs.json (orphan)
4. Opens with "This page describes" (banned)
5. All other failures inherited from the duplicated content
