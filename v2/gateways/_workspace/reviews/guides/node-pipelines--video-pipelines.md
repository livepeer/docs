# Review: node-pipelines/video-pipelines.mdx

| Check | Result | Notes |
|-------|--------|-------|
| 1.1-1.8 Frontmatter | PASS | All fields present; og:image missing alt/type/width/height |
| 2.1 UK English | PASS | "behaviour" used, "unauthorised" used |
| 2.2 No em-dashes | PASS | |
| 2.4 Entity-led | PASS | |
| 3.1 Headings | PASS | |
| 4.1 One job | PASS | Video transcoding pipeline flow |
| 4.11 No TODO | WARN | TODO block lines 26-41; 3 REVIEW flags (lines 223, 297, 321) |
| 4.12 No dead ends | PASS | 6-card Related Resources |
| 4.13 Min 2KB | PASS | ~14KB |
| 5.1 Template | PASS | |
| 5.15 Related Pages | PASS | |
| 7.1 In docs.json | PASS | Line 2649 |
| 8.6 Links | WARN | Relative link "../payments-and-pricing/payment-guide" at line 274 - should use absolute path |

## Frontmatter: All 10 fields present

## Heading Score: 20/20

## Verdict: PASS (minor)

Excellent technical depth. Mermaid architecture diagram is well-themed. Payment flow cost calculation is a standout section. Issues:
1. Relative link at line 274 should be absolute
2. Related Resources section title says "Related Resources" not "Related Pages" (inconsistent with other pages)
3. REVIEW flags for -localVerify default, segment duration configurability, and LL-HLS/DASH support are legitimate human items
