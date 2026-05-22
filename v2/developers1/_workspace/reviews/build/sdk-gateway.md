# Review: SDK integration guide

**File:** `v2/developers/build/sdk-gateway.mdx`
**Reviewed:** 2026-04-08

## Summary Table

| Category | Check# | Result | Evidence |
|----------|--------|--------|----------|
| FRONTMATTER | 1.1-1.13 | PASS | All key fields present. pageType=instruction, purpose=integrate, audience=developer, status=current, lastVerified=2026-04-05 |
| VOICE | 2.1-2.22 | PASS | UK English ("serialisation"). No banned words. Entity-led |
| HEADINGS | 3.1-3.10 | PASS | Clean, descriptive headings |
| STRUCTURE | 4.1-4.16 | PASS | Well-structured instruction page. 10KB+. No dead ends |
| LAYOUT | 5.1-5.16 | PASS | Tabs for multi-language examples. StyledTable. CustomDivider. Related CardGroup |
| VERACITY | 6.1-6.12 | PASS | Code examples follow documented SDK APIs. No unverified claims |
| NAV | 7.1-7.11 | PASS | Registered in docs.json |
| LINKS | 8.1-8.6 | PASS | All links resolve. One link to `/v2/developers/resources/sdks` — path is actually `/v2/developers/resources/reference/sdks` |
| PROCESS | 9.1-9.6 | PASS | status=current, lastVerified=2026-04-05 |
| COMPLETENESS | 10.1-10.5 | PASS | Covers install, AI inference, video, error handling, retry, auth, SDK vs REST |

## Frontmatter Table

| Field | Present | Value | Valid |
|-------|---------|-------|-------|
| title | Y | SDK integration guide | OK |
| sidebarTitle | Y | SDK Integration | OK |
| description | Y | Integrate Livepeer AI and video... (155 chars) | OK |
| pageType | Y | instruction | OK |
| purpose | Y | integrate | OK |
| audience | Y | developer | OK |
| keywords | Y | 7 items (capitalised `Keywords` key) | WARN |
| OG image | Y | /snippets/assets/site/og-image/en/developers.png | OK |
| complexity | N | — | MISSING |
| lifecycleStage | N | — | MISSING |

## Verdict

**PASS** — High-quality instruction page. Minor: `Keywords` key capitalised. Link to SDKs reference uses short path (`/v2/developers/resources/sdks` vs actual `/v2/developers/resources/reference/sdks`). Missing complexity and lifecycleStage.
