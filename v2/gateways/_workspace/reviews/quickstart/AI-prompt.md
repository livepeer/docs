# Review: Get AI to Setup the Gateway

**File:** `v2/gateways/quickstart/AI-prompt.mdx`
**Reviewed:** 2026-04-08
**Verdict:** NEEDS WORK

## Summary Table

| Category | Check | Result | Evidence |
|---|---|---|---|
| 1. FRONTMATTER | 1.1 title | PASS | Present: "Get AI to Setup the Gateway" |
| 1. FRONTMATTER | 1.2 sidebarTitle | PASS | Present: "AI Prompt: Gateway Setup" |
| 1. FRONTMATTER | 1.3 description | PASS | Present |
| 1. FRONTMATTER | 1.4 pageType | PASS | "instruction" |
| 1. FRONTMATTER | 1.5 audience | PASS | "gateway" |
| 1. FRONTMATTER | 1.6 purpose | PASS | "build" |
| 1. FRONTMATTER | 1.7 complexity | FAIL | Missing |
| 1. FRONTMATTER | 1.8 lifecycleStage | FAIL | Missing (has "status" instead) |
| 1. FRONTMATTER | 1.9 keywords | PASS | Present, 7 entries |
| 1. FRONTMATTER | 1.10 og:image | PASS | Uses fallback |
| 2. VOICE | 2.1 UK English | WARN | No UK-specific spellings to test |
| 2. VOICE | 2.5 No self-ref | FAIL | "who's got time for all that manual work?!" in description - casual/flippant tone |
| 2. VOICE | 2.7 No hedging | PASS | |
| 2. VOICE | 2.10 Entity-led | PASS | |
| 3. HEADINGS | 3.1 Score | PASS | Headings within code block (prompt); page itself has minimal headings which is appropriate for a prompt page |
| 4. STRUCTURE | 4.1 Single purpose | PASS | Clear single purpose: downloadable AI agent prompt |
| 4. STRUCTURE | 4.5 No TODO | FAIL | Lines 26-31: TODO comment block present |
| 4. STRUCTURE | 4.8 Min 2KB | PASS | ~7KB |
| 5. LAYOUT | 5.3 Related Pages | FAIL | No Related Pages section |
| 5. LAYOUT | 5.4 CTA | FAIL | No CTA or next-step link |
| 6. VERACITY | 6.1 Claims citable | WARN | Funding amounts (0.1 ETH, 0.5+ ETH) should cite source |
| 6. VERACITY | 6.3 REVIEW flags | PASS | None present |
| 7. NAV | 7.1 In docs.json | PASS | Registered at v2/gateways/quickstart/AI-prompt |
| 7. NAV | 7.2 No orphan | PASS | |
| 8. LINKS | 8.1 Links resolve | N/A | No internal links outside code block |
| 9. PROCESS | 9.1 Human sign-off | FAIL | No reviewed: true in frontmatter |
| 10. COMPLETENESS | 10.1 Question coverage | PASS | Covers all OS, modes, gateway types |

## Frontmatter Table

| Field | Value | Status |
|---|---|---|
| title | Get AI to Setup the Gateway | PASS |
| sidebarTitle | AI Prompt: Gateway Setup | PASS |
| description | Present | PASS |
| pageType | instruction | PASS |
| audience | gateway | PASS |
| purpose | build | PASS |
| complexity | MISSING | FAIL |
| lifecycleStage | MISSING | FAIL |
| keywords | 7 entries | PASS |
| og:image | fallback.png | PASS |

## Issues

1. **Missing frontmatter fields:** `complexity` and `lifecycleStage` not present
2. **TODO block** at lines 26-31 must be resolved or removed
3. **Tone violation** in description: "who's got time for all that manual work?!" is flippant, not entity-led
4. **No Related Pages** section at bottom
5. **No CTA** linking to full manual setup guide
6. **No human sign-off** (no `reviewed: true`)
