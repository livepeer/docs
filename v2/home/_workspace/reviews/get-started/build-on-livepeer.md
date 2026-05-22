# Review: v2/home/get-started/build-on-livepeer.mdx

| Field | Value |
|---|---|
| Page | `v2/home/get-started/build-on-livepeer.mdx` |
| Reviewer | Claude (automated audit) |
| Date | 2026-04-08 |
| Verdict | **FAIL -- STUB** |

## Summary

Stub page with only a `<Note>Coming Soon</Note>`. No content. Not registered in docs.json. Title "Use Livepeer" conflicts with use-livepeer.mdx which has the same title.

## Frontmatter (Cat 1)

| Field | Present | Value | Compliant |
|---|---|---|---|
| title | Yes | Use Livepeer | WARN -- duplicate of use-livepeer.mdx title |
| sidebarTitle | Yes | Build with Livepeer | OK |
| description | Yes | A guide to building... | OK |
| keywords | Yes | Array(6) | OK |
| og:image | Yes | fallback.png | OK |
| pageType | No | -- | MISSING |
| audience | No | -- | MISSING |
| purpose | No | -- | MISSING |
| lastVerified | No | -- | MISSING |

## Structure (Cat 4)

| Check | Result |
|---|---|
| Min 2KB | FAIL -- stub, <500 bytes |
| No TODO | FAIL -- "Coming Soon" is effectively a TODO |

## Nav (Cat 7)

| Check | Result |
|---|---|
| In docs.json | NO -- ORPHAN |

## Issues Summary

| # | Category | Severity | Issue |
|---|---|---|---|
| 1 | Completeness | P0 | Stub page -- no content |
| 2 | Nav | P1 | Orphan -- not in docs.json |
| 3 | Frontmatter | P1 | 4 missing required fields |
| 4 | Frontmatter | P2 | Duplicate title with use-livepeer.mdx |
