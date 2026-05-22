# Review: CLI HTTP API Endpoint Pages (batch)

**Pages reviewed (10 pages in nav + 4 orphans):**

**In nav (10):**
- `CLI-HTTP/unbond.mdx`
- `CLI-HTTP/rebond.mdx`
- `CLI-HTTP/activateorchestrator.mdx`
- `CLI-HTTP/setbroadcastconfig.mdx`
- `CLI-HTTP/setmaxpriceforcapability.mdx`
- `CLI-HTTP/reward.mdx`
- `CLI-HTTP/transfertokens.mdx`
- `CLI-HTTP/signmessage.mdx`

**Orphans (not in nav, 4):**
- `CLI-HTTP/bond.mdx`
- `CLI-HTTP/protocolparameters.mdx`
- `CLI-HTTP/registeredorchestrators.mdx`
- `CLI-HTTP/status.mdx`

**Reviewed:** 2026-04-08
**Reviewer:** Claude (automated audit)

## Summary

All CLI HTTP endpoint pages follow the identical OpenAPI wrapper pattern: frontmatter + `openapi: METHOD /path` directive. Auto-rendered by Mintlify. 4 pages exist on disk but are NOT registered in docs.json navigation.

## Category Scores (applies to all pages)

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1 | FRONTMATTER | 8/10 | All have required fields. Descriptions are minimal ("Bond for Livepeer gateways." pattern). |
| 2 | VOICE | N/A | Auto-generated from OpenAPI spec. |
| 3 | HEADINGS | N/A | Auto-generated. |
| 4 | STRUCTURE | 8/10 | Clean wrapper pattern. |
| 5 | LAYOUT | 8/10 | Mintlify openapi rendering. |
| 6 | VERACITY | 8/10 | Sourced from OpenAPI spec. |
| 7 | NAV | 7/10 | 4 orphan pages not in docs.json: bond, protocolparameters, registeredorchestrators, status. |
| 8 | LINKS | 9/10 | No manual links. |
| 9 | PROCESS | 8/10 | All `status: current`. Some missing `lastVerified` (bond.mdx). |
| 10 | COMPLETENESS | 7/10 | bond, protocolparameters, registeredorchestrators, and status are useful endpoints omitted from nav. |

## Findings

1. **NAV-F1**: 4 orphan pages not in docs.json: bond, protocolparameters, registeredorchestrators, status
2. **FM-F1**: bond.mdx missing `lastVerified`
3. **FM-F2**: Descriptions are generic - "Bond for Livepeer gateways." does not explain what the endpoint does
4. **COMPLETENESS-F1**: Useful endpoints (status, protocolparameters) excluded from nav

## Verdict

**CONDITIONAL PASS** (in-nav pages) / **FAIL** (orphans) - Register orphan pages in nav or archive them. Fix missing `lastVerified` on bond.mdx.
