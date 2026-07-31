# Review: Orphan API Files (reference/technical/api-reference/ root)

**Pages reviewed (3 orphan files):**
- `api-reference/ai-worker-api.mdx`
- `api-reference/hardware-info.mdx`
- `api-reference/hardware-stats.mdx`
- `api-reference/health.mdx`

**Reviewed:** 2026-04-08
**Reviewer:** Claude (automated audit)

## Summary

These 4 files sit at the `api-reference/` root level (not in AI-API/ or CLI-HTTP/ subdirectories). They are NOT in docs.json navigation. They appear to be duplicates or earlier versions of files that now exist in the `AI-API/` subdirectory.

- `api-reference/health.mdx` duplicates `AI-API/health.mdx`
- `api-reference/hardware-info.mdx` duplicates `AI-API/hardware-info.mdx`
- `api-reference/hardware-stats.mdx` duplicates `AI-API/hardware-stats.mdx`
- `api-reference/ai-worker-api.mdx` duplicates `AI-Worker/ai-worker-api.mdx` (also an orphan)

## Category Scores

| # | Category | Score | Notes |
|---|----------|-------|-------|
| 1-10 | ALL | N/A | Orphan duplicates - not suitable for individual scoring |

## Findings

1. **NAV-F1**: None of these files are in docs.json navigation
2. **STRUCTURE-F1**: All appear to be duplicates of files in subdirectories
3. **PROCESS-F1**: Should be archived or deleted to avoid confusion

## Verdict

**FAIL** - Orphan duplicates. Archive or delete. The canonical versions are in the `AI-API/` subdirectory.
