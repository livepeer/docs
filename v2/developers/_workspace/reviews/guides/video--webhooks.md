# Review: Video webhooks

**File:** `v2/developers/guides/video/webhooks.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PASS | All key fields. pageType=instruction, purpose=integrate, audience=developer, status=current |
| VOICE | 2.1-2.22 | WARN | Line 126: `Break;` — capitalised keyword in code block (renders as visual error in code example) |
| HEADINGS | 3.1-3.10 | PASS | Clean headings |
| STRUCTURE | 4.1-4.16 | PASS | Events > Create > Handle > Verify > Test > Payload > Related. 6KB+ |
| LAYOUT | 5.1-5.16 | PASS | StyledTable, CenteredContainer, CustomDivider, CardGroup |
| VERACITY | 6.1-6.12 | PASS | HMAC-SHA256 verification is correct. Event types verifiable |
| NAV | 7.1-7.11 | PASS | Registered in docs.json |
| LINKS | 8.1-8.6 | PASS | Links resolve |
| PROCESS | 9.1-9.6 | PASS | status=current |
| COMPLETENESS | 10.1-10.5 | PASS | Full webhook lifecycle including signature verification |

## Verdict

**PASS WITH NOTES** — Excellent instruction page. Bug: `Break;` (capitalised) in JavaScript code example on line 126 — should be `break;`. Minor: `Keywords` capitalised. Missing complexity, lifecycleStage.
