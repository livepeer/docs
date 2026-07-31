# Review: payments-and-pricing/pricing-configuration.mdx

| Check | Result | Notes |
|-------|--------|-------|
| 1.1-1.8 Frontmatter | WARN | Uses lowercase "pageType" instead of "PageType"; also "description" is minimal |
| 2.1 UK English | WARN | "customize" (not found but overall voice is informal) |
| 2.2 No em-dashes | PASS | |
| 2.4 Entity-led | WARN | Uses "you're" and second-person heavily. Not entity-led voice |
| 3.1 Headings | WARN | Long headings like "Full List of Gateway Pricing Configuration Flags" |
| 4.1 One job | PASS | Pricing flag reference |
| 4.11 No TODO | WARN | Small TODO block lines 25-29 |
| 4.12 No dead ends | PASS | 2-card Related Pages (uses Columns not CardGroup) |
| 4.13 Min 2KB | PASS | ~10KB |
| 5.1 Template | WARN | Older template - uses DynamicTable, ResponseField instead of StyledTable. No CustomDivider |
| 5.15 Related Pages | PASS | Present but uses Columns component |
| 7.1 In docs.json | PASS | Line 2662 |
| 8.6 Links | WARN | Link to /v2/gateways/concepts/business-model may not exist; link to fund-gateway not funding-guide |

## Frontmatter: Fields present but inconsistent casing and minimal description

## Heading Score: 16/20 (long headings, informal style)

## Verdict: NEEDS WORK

Issues:
1. Frontmatter field casing inconsistent (pageType vs PageType)
2. Voice is not entity-led - uses "you're", "your", second-person throughout
3. Uses DynamicTable and ResponseField instead of StyledTable
4. Go source code snippet embedded (line 213-224) - unusual for a user guide
5. Related Pages link to /v2/gateways/concepts/business-model needs verification
6. Related Pages link to fund-gateway instead of funding-guide
7. Overlaps significantly with pricing-strategy.mdx

**Recommendation:** This is an older reference-style page. Consider whether it should be consolidated into pricing-strategy.mdx or updated to current template standards.
