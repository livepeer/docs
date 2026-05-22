# Review: v2/community/livepeer-connect/events-and-community-streams.mdx

| Field | Value |
|---|---|
| Page | `v2/community/livepeer-connect/events-and-community-streams.mdx` |
| Reviewer | Claude (automated audit) |
| Date | 2026-04-08 |
| Verdict | **PASS** |

## Summary

Events calendar page using LumaEvents component with data import. Shows upcoming, past, and all events. Clean and functional.

## Frontmatter (Cat 1)

| Field | Present | Value | Compliant |
|---|---|---|---|
| mode | Yes | wide | OK |
| title | Yes | Events & Live Streams | OK |
| sidebarTitle | Yes | Events & Live Streams | OK |
| description | Yes | Good | OK |
| Purpose | Yes | operations | CASE: wrong |
| keywords | Yes | Array(7) | OK |
| og:image | Yes | fallback.png | OK |
| pageType | Yes | guide | OK |
| audience | Yes | everyone | OK |
| status | Yes | provisional | OK |
| lastVerified | Yes | 2026-03-02 | OK |
| sourceOfTruth | Yes | luma.com/livepeer | OK |

## Structure (Cat 4)

| Check | Result |
|---|---|
| One job | PASS |
| Data imports | PASS |
| Min 2KB | PASS (with component rendering) |

## Nav (Cat 7)

| Check | Result |
|---|---|
| In docs.json | YES |

## Issues Summary

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | Frontmatter | P3 | `Purpose` wrong casing |
