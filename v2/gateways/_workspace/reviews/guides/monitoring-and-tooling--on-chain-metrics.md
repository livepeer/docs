# Review: monitoring-and-tooling/on-chain-metrics.mdx

| Check | Result | Notes |
|-------|--------|-------|
| 1.1-1.8 Frontmatter | PASS | All fields present |
| 2.1 UK English | FAIL | "mirgration" (line 217) - typo. Should be "migration" |
| 2.2 No em-dashes | PASS | |
| 2.4 Entity-led | PASS | |
| 3.1 Headings | PASS | |
| 4.1 One job | PASS | On-chain metrics and Arbiscan monitoring |
| 4.11 No TODO | WARN | TODO block lines 31-52 |
| 4.12 No dead ends | PASS | Related Pages present |
| 4.13 Min 2KB | PASS | ~9KB |
| 5.1 Template | PASS | |
| 5.15 Related Pages | PASS | 3-card CardGroup |
| 7.1 In docs.json | PASS | Line 2673 |
| 8.6 Links | WARN | Hardcoded TicketBroker address (0xea1b...) at lines 173, 187 - should import from data file |

## Frontmatter: All 10 fields present, correct enums

## Heading Score: 20/20

## Verdict: PASS (minor fixes needed)

Issues:
1. Typo "mirgration" line 217 - fix to "migration"
2. Hardcoded contract address should be imported from data file per repo rules
3. Line 89: extra space before closing `**` in "Option 1 (Get node status) **under"
