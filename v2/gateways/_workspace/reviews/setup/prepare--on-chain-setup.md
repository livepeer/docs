# Review: On-Chain Setup (prepare subdirectory content fragment)

**File:** `v2/gateways/setup/prepare/on-chain-setup.mdx`
**Reviewed:** 2026-04-08
**Verdict:** NEEDS WORK (content fragment)

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | ALL | FAIL | No frontmatter at all - bare content fragment |
| 2. VOICE | 2.1 UK English | PASS | |
| 2. VOICE | 2.10 Entity-led | PASS | |
| 3. HEADINGS | 3.1 Score | PASS | Technical headings |
| 4. STRUCTURE | 4.1 Purpose | PASS | On-chain requirements |
| 4. STRUCTURE | 4.5 No TODO | PASS | |
| 4. STRUCTURE | 4.8 Min 2KB | PASS | |
| 7. NAV | 7.1 In docs.json | N/A | Content fragment, not routed |
| 10. COMPLETENESS | 10.1 Coverage | PASS | RPC, network, credentials, example command |

## Issues

1. **No frontmatter** at all - this is a raw content fragment
2. **Reference-style footnotes** (e.g., `[1](#2-0)`) that may not resolve in MDX
3. **May be an imported content fragment** used by prepare.mdx
4. Content overlaps with what is now in prepare.mdx On-chain tab
