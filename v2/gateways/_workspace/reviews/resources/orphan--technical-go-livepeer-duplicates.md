# Review: Orphan Duplicate go-livepeer Files

**Pages reviewed (4 orphan files):**
- `reference/technical/go-livepeer/cli-reference.mdx`
- `reference/technical/go-livepeer/gpu-support.mdx`
- `reference/technical/go-livepeer/hardware-requirements.mdx`
- `reference/technical/go-livepeer/prometheus-metrics.mdx`

**Reviewed:** 2026-04-08
**Reviewer:** Claude (automated audit)

## Summary

These 4 files exist at `reference/technical/go-livepeer/` but the canonical nav-registered versions are at `reference/go-livepeer/` (without the `technical/` prefix). These are NOT in docs.json navigation. Content differs slightly (some have expanded frontmatter) but they represent the same pages.

## Findings

1. **NAV-F1**: None in docs.json - the nav-registered versions are at `reference/go-livepeer/`
2. **STRUCTURE-F1**: Duplicate file trees - `reference/go-livepeer/` (in nav) vs `reference/technical/go-livepeer/` (orphan)
3. **PROCESS-F1**: Should be archived or deleted. The canonical path is `reference/go-livepeer/`

## Verdict

**FAIL** - Orphan duplicates. The canonical versions are at `reference/go-livepeer/`. These should be archived or deleted to prevent confusion and stale-content risk.
