# Orchestrators Content Pipeline — Execution Tracker

> Started: 2026-03-23
> Constraint: ALL output in this folder only

## Pipeline Phase Status

| # | Phase | Status | Output file | Notes |
|---|---|---|---|---|
| 1 | IA verified | DONE | 01-ia-verification.md | VERIFIED — all 12 sections consistent, all JTBDs covered, all personas unblocked. 1 blocking verify flag (LIP-92) |
| 1b | Persona iteration check | DONE | 01b-persona-check.md | No new personas needed — all content maps to existing 5 |
| 2 | Content scan | DONE | 02-content-scan.md | 88 live pages scanned, 68 mapped to IA, 20 unmapped |
| 2.5 | IA-mapped research pack | DONE | 02.5-research-pack.md | All 12 sections mapped with gaps and flags |
| 3 | Structure audit / tab map | DONE | 03-tab-map.md | 1 P0, 7 P1, 3 P2 issues. 18 orphan pages |
| 3.5 | Terminology lock | DONE | 03.5-terminology-lock.md | 30 terms extracted, 5 glossary conflicts (low-medium) |
| 4 | Content audit | DONE | 04-content-audit.md | 42 KEEP, 8 REWRITE, 9 MERGE, 2 MOVE, 1 SPLIT, 8 DROP |
| 4.5 | Reconsolidation plan | DONE | 04.5-reconsolidation.md | 88 → ~72 files. 2 moves, 8 merges, 16 drops |
| 6 | Content writing | DONE | content/S01-S12.mdx | 12 MDX pages written — all IA sections covered |
| 7 | Veracity pass | PENDING | 07-veracity-pass.md | Needs to run across all 12 content pages |

## Existing Content Inventory (83 live pages in v2/orchestrators/)

### Maps to IA sections:
- S1 (path disambiguation): dep-x-setup-paths.mdx — 4 paths vs IA's 3
- S2 (viability): 4 pages in operator-considerations/
- S3 (payments/routing): 6 pages across payments/ and staking/
- S4 (prerequisites): prepare.mdx + gpu-support + arbitrum resources
- S5 (node setup): 10 pages — MOST COMPLETE, has duplicates
- S6 (pool node): 2 join-a-pool pages (DUPLICATE) + community-pools
- S7 (pricing/cuts): pricing-strategy + reward-call-tuning + delegate-ops
- S8 (AI pipelines): 11 pages — LARGEST section
- S9 (verification): test.mdx + video-transcoding.mdx
- S10 (monitoring): 4 pages in monitoring-and-tooling/
- S11 (optimisation): capacity-planning + pricing-strategy (thin)
- S12 (troubleshooting): troubleshooting.mdx + faq.mdx

### Key issues:
- Duplicates: 2x setup guides, 2x join-a-pool
- Path model mismatch: existing has 4 paths, IA has 3
- ~12 placeholder pages (x- prefix, empty drafts)
- Some pages have REVIEW/TODO markers needing resolution
- Frontmatter inconsistency across pages

## Dependencies

```
IA verified (1)
  → Persona check (1b)
    → IA locked
      → Research pack (2.5) + Content scan (2) [PARALLEL]
        → Tab map (3) + Terminology lock (3.5) [PARALLEL]
          → Content audit (4)
            → Reconsolidation plan (4.5)
              → Content writing (6)
                → Veracity pass (7)
```

## Parallel Opportunities
- Phase 2 + 2.5 can run together
- Phase 3 + 3.5 can run together
- Within Phase 6: all 12 sections can be written in parallel
- Veracity pass runs after all content is written
