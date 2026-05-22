# Review: reference/technical/api-reference/_delete-all-api.mdx

**Path:** `v2/gateways/resources/reference/technical/api-reference/_delete-all-api.mdx`
**Reviewed:** 2026-04-08
**Reviewer:** Claude (automated audit)

## Summary

Orphan page that duplicates the AI Worker API portal content already served by `AI-Worker/ai-worker-api.mdx` and `AI-API/ai.mdx`. Not registered in docs.json navigation. The underscore prefix (`_delete`) suggests it was staged for deletion but never removed. Contains a full CardGroup-based endpoint index and OpenAPI spec reference, but this content is superseded by the canonical `AI-API/ai.mdx` index page and the individual endpoint pages.

## Category Scores

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | FRONTMATTER | 7/10 | Has required fields but title says "AI Worker API" while filename says `_delete-all-api`. Missing `lastVerified`, `sidebarTitle`. Keyword list includes `_delete all api` which is a filename artefact, not a useful keyword. |
| 2 | VOICE | 8/10 | Clean technical reference voice. No banned words. |
| 3 | HEADINGS | 8/10 | Logical hierarchy: Base URLs, Authentication, Endpoints (Generate / System). |
| 4 | STRUCTURE | 5/10 | Single job (API portal), but it duplicates AI-API/ai.mdx. CardGroup links use `#anchor` hrefs that point to sections on this page but those sections do not exist in the body (no matching headings for individual endpoints). |
| 5 | LAYOUT | 7/10 | CardGroup + table pattern is correct for an API portal. Note component used appropriately. |
| 6 | VERACITY | 7/10 | Base URLs list `dream-gateway.livepeer.cloud` and `livepeer.studio/api/beta/generate` -- these may be stale vs. the URLs in ai-worker-api.mdx (`tools.livepeer.cloud`). Needs verification. |
| 7 | NAV | 0/10 | NOT in docs.json. Orphan page. |
| 8 | LINKS | 4/10 | All CardGroup hrefs are `#anchor` links (e.g. `#text-to-image`) that have no matching heading on the page. Broken internal navigation. |
| 9 | PROCESS | 3/10 | Filename prefixed with `_delete` -- clear deletion intent. No `lastVerified`. No human sign-off. |
| 10 | COMPLETENESS | 4/10 | Lists endpoints but does not render them. The `openapi:` frontmatter directive references `ai/worker/api/openapi.yaml` but the page body uses CardGroup cards instead of OpenAPI rendering. Confused purpose. |

## Frontmatter Fields

| Field | Present | Value | Issue |
|-------|---------|-------|-------|
| title | Yes | AI Worker API | Mismatches filename |
| sidebarTitle | No | - | Missing |
| description | Yes | API reference for Livepeer AI Worker endpoints | OK |
| pageType | Yes | reference | OK |
| audience | Yes | gateway | OK |
| purpose | Yes | reference | OK |
| status | Yes | current | Should be `deprecated` or `draft` given deletion intent |
| lastVerified | No | - | Missing |
| keywords | Yes | 7 items | Contains `_delete all api` -- artefact, not useful |
| og:image | Yes | fallback.png | OK |
| openapi | Yes | ai/worker/api/openapi.yaml | Conflicts with CardGroup body -- page tries to be both portal and spec |

## Heading Score

| Criterion | Pass |
|-----------|------|
| H1 from title (not in body) | No -- explicit `# AI Worker API Reference` in body |
| No duplicate headings | Yes |
| No questions in headings | Yes |
| Logical hierarchy | Yes |

## Findings

1. **NAV-F1**: Not in docs.json navigation -- orphan page
2. **PROCESS-F1**: Filename prefixed with `_delete` indicates it was staged for deletion
3. **STRUCTURE-F1**: Duplicates content from `AI-API/ai.mdx` (canonical AI API portal) and `AI-Worker/ai-worker-api.mdx`
4. **LINKS-F1**: All 13 CardGroup `#anchor` hrefs are broken -- no matching headings exist on the page
5. **VERACITY-F1**: Base URL `dream-gateway.livepeer.cloud` differs from `tools.livepeer.cloud` in ai-worker-api.mdx -- one is stale
6. **FM-F1**: `openapi:` frontmatter and CardGroup body conflict -- page has two competing rendering strategies
7. **FM-F2**: `status: current` contradicts deletion intent

## Verdict

**FAIL** -- Orphan deletion candidate. The underscore prefix, absence from navigation, and complete duplication by canonical pages (`AI-API/ai.mdx` + individual endpoint pages) confirm this file should be archived or deleted. The broken anchor links and conflicting openapi/CardGroup strategies make it non-functional even if it were registered.

**Recommended action:** Move to `x-archived/` or delete. No content in this file is unique -- it is fully superseded.
