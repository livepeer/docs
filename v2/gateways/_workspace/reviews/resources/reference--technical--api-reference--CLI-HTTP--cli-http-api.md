# Review: reference/technical/api-reference/CLI-HTTP/cli-http-api.mdx

**Path:** `v2/gateways/resources/reference/technical/api-reference/CLI-HTTP/cli-http-api.mdx`
**Reviewed:** 2026-04-08
**Reviewer:** Claude (automated audit)

## Summary

CLI HTTP API portal page listing local HTTP endpoints exposed by go-livepeer. Uses StyledTable. Routes to individual endpoint pages. Clear scope note (local-only, not public APIs).

## Category Scores

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | FRONTMATTER | 8/10 | Title has redundant "API API" ("CLI HTTP API API Portal"). All required fields present. |
| 2 | VOICE | 8/10 | "local-only" scope clarification is good. Uses en-dash in "control-plane". |
| 3 | HEADINGS | 7/10 | H2/H3 headings for command categories. |
| 4 | STRUCTURE | 8/10 | Portal page with command categories and individual endpoint links. |
| 5 | LAYOUT | 8/10 | StyledTable for endpoint listing. |
| 6 | VERACITY | 8/10 | Links to webserver.go source (specific commit). |
| 7 | NAV | 10/10 | In docs.json nav. |
| 8 | LINKS | 8/10 | GitHub source link with commit hash. |
| 9 | PROCESS | 9/10 | `status: current`, `lastVerified: 2026-03-17`. |
| 10 | COMPLETENESS | 8/10 | Lists all CLI HTTP endpoint categories. |

## Findings

1. **FM-F1**: Title "CLI HTTP API API Portal" has redundant "API" - should be "CLI HTTP API Portal"

## Verdict

**PASS** - Clean portal page. Fix redundant "API" in title.
