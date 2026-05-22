# Review: Discover & Connect Marketplace Compute Services (publish)

**File:** `v2/gateways/setup/publish/connect-with-offerings.mdx`
**Reviewed:** 2026-04-08
**Verdict:** REWRITE

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | Present |
| 1. FRONTMATTER | 1.3 description | PASS | Present |
| 1. FRONTMATTER | 1.4 pageType | WARN | "PageType" capital P |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing |
| 1. FRONTMATTER | 1.9 keywords | PASS | 10 entries |
| 1. FRONTMATTER | 1.10 og:image | PASS | fallback.png |
| 2. VOICE | 2.1 UK English | PASS | |
| 2. VOICE | 2.3 Banned phrases | FAIL | "yay!" (line 51), GIF embed, "like a talent agent" analogy |
| 2. VOICE | 2.5 No self-ref | FAIL | "So... You have a gateway running - yay!" |
| 2. VOICE | 2.10 Entity-led | FAIL | Conversational tone throughout |
| 3. HEADINGS | 3.1 Score | WARN | "What Is an Orchestrator Offering?" is question-led |
| 4. STRUCTURE | 4.1 Purpose | FAIL | Self-described as needing "a lot" of edits |
| 4. STRUCTURE | 4.5 No TODO | FAIL | Line 34: visible `<Danger>` with TODO checklist; line 37: explicit TODO list |
| 4. STRUCTURE | 4.8 Min 2KB | PASS | |
| 5. LAYOUT | 5.3 Related Pages | FAIL | No Related Pages |
| 6. VERACITY | 6.3 REVIEW flags | FAIL | Visible Danger banner at top of page |
| 7. NAV | 7.1 In docs.json | FAIL | Not registered in nav |
| 8. LINKS | 8.1 Links resolve | WARN | GIF hosted on gifsec.com - external dependency |
| 10. COMPLETENESS | 10.1 Coverage | WARN | Content duplicates connect/connect-with-offerings.mdx and lp-marketplace.mdx |

## Issues

1. **Visible WIP banner** with TODO checklist renders to users
2. **Embedded GIF** from external site (The Office) - unprofessional for production docs
3. **"yay!"** and conversational tone violate voice standards
4. **Triple duplicate** - same marketplace content exists in 3 locations
5. **Not in docs.json** - orphan
6. **Frontmatter casing:** `PageType` should be `pageType`
7. **Missing frontmatter:** complexity, lifecycleStage
8. **Recommendation:** Delete - content consolidated into connect.mdx and lp-marketplace.mdx
