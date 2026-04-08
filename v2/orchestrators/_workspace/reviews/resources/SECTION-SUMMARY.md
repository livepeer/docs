# Section Summary: orchestrators/resources
**Pages reviewed:** 10
**Pass:** 0 | **Needs Work:** 9 | **Rewrite Required:** 1

## Per-page verdicts
| Page | Verdict | Worst categories | Key issues |
|---|---|---|---|
| glossary.mdx | NEEDS WORK | Frontmatter, Process | `audience: orchestrator-operator` not in allowed list, missing `complexity`/`lifecycleStage`, `status: draft`, fallback OG image |
| operator-terms.mdx | NEEDS WORK | Frontmatter, Process, Veracity | 5 unresolved REVIEW flags, missing `complexity`/`lifecycleStage`, TODO block present |
| knowledge-hub/community-pools.mdx | REWRITE REQUIRED | Structure, Layout, Completeness, Voice, Veracity, Links | Non-functional stub with placeholder card, dead `href="#"` link, self-referential copy, claims non-existent automation |
| knowledge-hub/community-guides.mdx | NEEDS WORK | Frontmatter, Links, Process | Missing `complexity`/`lifecycleStage`, v1 links may break, Card href path mismatch for cli-flags, links to stub community-pools page |
| reference/faq.mdx | NEEDS WORK | Frontmatter, Voice, Process | `Keywords` capitalised, `purpose: faq` not in allowed enum, line 56 sentence fragment, missing `complexity`/`lifecycleStage` |
| reference/gpu-support.mdx | NEEDS WORK | Frontmatter, Process | Missing `complexity`/`lifecycleStage`, `status: review`, empty backtick cells, unverified version claims |
| reference/arbitrum-rpc.mdx | NEEDS WORK | Frontmatter, Links, Process | Missing `complexity`/`lifecycleStage`, broken link to x-contract-addresses, `status: review` |
| reference/arbitrum-exchanges.mdx | NEEDS WORK | Frontmatter, Links, Process | Missing `complexity`/`lifecycleStage`, broken link to x-contract-addresses, `status: review` |
| reference/technical/cli-flags.mdx | NEEDS WORK | Frontmatter, Completeness, Headings | Title promises CLI flags reference but only covers 7 proto mappings, `Keywords` capitalised, junk keywords ("straight", "chatgpt"), first heading too long |
| reference/technical/contract-addresses.mdx | NEEDS WORK | Frontmatter | `PageType`/`Keywords` capitalised, description >160 chars, missing `complexity`/`lifecycleStage`, fallback OG image |

## Category failure heatmap
| Category | Pages failing | Common root cause |
|---|---|---|
| Frontmatter (Cat 1) | 10/10 | `complexity` and `lifecycleStage` missing from every page. 3 pages have capitalised `Keywords`/`PageType` keys. |
| Voice (Cat 2) | 2/10 | community-pools.mdx self-referential copy; faq.mdx sentence fragment |
| Headings (Cat 3) | 1/10 | cli-flags.mdx first heading excessively long with parenthetical qualifiers |
| Structure (Cat 4) | 1/10 | community-pools.mdx is a non-functional stub under 2KB |
| Layout (Cat 5) | 1/10 | community-pools.mdx has no data imports, no tables, placeholder card |
| Veracity (Cat 6) | 2/10 | operator-terms.mdx has 5 REVIEW flags; community-pools.mdx claims non-existent automation |
| Nav (Cat 7) | 0/10 | All pages registered in docs.json with redirects |
| Links (Cat 8) | 3/10 | arbitrum-rpc.mdx and arbitrum-exchanges.mdx link to x-contract-addresses; community-pools.mdx has dead `href="#"` |
| Process (Cat 9) | 9/10 | All except contract-addresses.mdx have `status: review` or `draft` with TODO blocks and no human sign-off |
| Completeness (Cat 10) | 2/10 | community-pools.mdx empty; cli-flags.mdx does not deliver on title promise |

## Systemic Issues

1. **Universal frontmatter gaps:** `complexity` and `lifecycleStage` are missing from all 10 pages. This is a batch fix.
2. **Capitalised YAML keys:** 3 pages use `Keywords` or `PageType` instead of lowercase -- may break Mintlify parsing.
3. **Broken contract-addresses links:** 2 pages link to `x-contract-addresses` (deprecated/archived path) instead of `contract-addresses`.
4. **Process maturity:** 9/10 pages are in `review` or `draft` status with TODO blocks. None have human sign-off.
5. **One stub page in production nav:** community-pools.mdx is in the live navigation but contains zero useful content.
