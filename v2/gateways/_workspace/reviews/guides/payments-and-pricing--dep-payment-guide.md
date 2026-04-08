# Review: dep-payment-guide.mdx

**Path:** `v2/gateways/guides/payments-and-pricing/dep-payment-guide.mdx`
**Reviewed:** 2026-04-08

## Summary

| Check | Result |
|-------|--------|
| 1.1 title | PASS - "Payment Paths for Gateway Operators" |
| 1.3 PageType | WARN - no PageType field in frontmatter |
| 1.5 status | FAIL - no status field; dep- prefix = deprecated |
| 2.12 entity-led voice | PASS |
| 2.13 no em-dashes | PASS |
| 3.1 heading score | 22/25 |
| 4.1 one job | FAIL - DUPLICATE of payment-guide.mdx |
| 4.11 no TODO in body | FAIL - line 42: "NOT TRUE FIX THIS" in JSX comment inside a rendered Note component |
| 4.12 no REVIEW flags | FAIL - 2 REVIEW flags (lines 75, 163) |
| 4.13 min 2KB | PASS - 15.2KB |
| 5.1 correct template | FAIL - raw markdown tables, no StyledTable |
| 5.15 Related Pages | PASS - CardGroup present |
| 7.1 in docs.json | FAIL - not in docs.json nav |

## Verdict

**FAIL - CRITICAL DUPLICATE.** Pre-edit version of payment-guide.mdx. Key issues: (1) "NOT TRUE FIX THIS" comment inside a rendered Note component could confuse readers, (2) uses raw markdown tables, (3) has unresolved REVIEW flags, (4) self-referencing link on line 57 points to the replacement page. Should be moved to x-deprecated/ or deleted.
