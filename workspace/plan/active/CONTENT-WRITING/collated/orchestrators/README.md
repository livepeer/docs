# Orchestrators — Collated Pack

**Tab priority**: 1 (first tab to complete all phases)
**v2 path**: `v2/orchestrators/`
**Last updated**: 2026-03-23

---

## Resources

| File | Points to | Description |
|---|---|---|
| `audience-design.md` | `Prompts-By-Phase/1-audience-design/testing/Tabs/orchestrators/collated/canonical-orchestrators-audience-design.md` | Canonical audience design (v5 collated). IA confirmed 12 sections. Check B: ✅ APPROVED |
| `v2-content.md` | `context-packs/orchestrators-full-content.md` | All v2/orchestrators/ MDX content (72 nav pages, 284 files on disk) |
| `v1-content.md` | `context-packs/orchestrators-v1-content.md` | All v1 orchestrators source content |
| `content-scan.md` | `context-packs/orchestrators-content-scan.md` | Structured scan: path · frontmatter · heading structure · status. 72 pages — all missing lifecycleStage; 24 deprecated pageType values; operator-rationale.mdx corrupted |
| `ia-prereq.md` | `context-packs/orchestrators-ia-prereq.md` | IA prerequisites / section vocabulary input |
| `tree-nav.md` | `context-packs/orchestrators-tree-nav.md` | Full file tree: 284 files on disk, 72 nav entries, 0 missing, 13 orphans |
| `ia-mapping.md` | `context-packs/orchestrators-ia-mapping.md` | Evaluation of all 72 nav pages against 12 confirmed IA sections (personas, JTBDs, entry/exit states) |
| `references/collation-notes.md` | `testing/Tabs/orchestrators/collated/collation-notes-orchestrators.md` | Phase 1 collation notes |
| `references/v5-learnings.md` | `testing/Tabs/orchestrators/learnings/v5.md` | v5 audience design learnings |
| `references/validation-check.md` | `testing/Tabs/orchestrators/validation-check.md` | Check B retroactive validation result |

---

## Gate Status

| Gate | Status | Notes |
|---|---|---|
| IA Approved | ✅ Confirmed by human | 12 sections locked. Not yet formally recorded in decision-registry.md |
| Content Scan Done | ✅ Done | operator-rationale.mdx has corruption (garbage chars before frontmatter) — must fix before Phase 3 parsing |
| Terminology Locked | ⬜ | LIP-92 verify pending (non-blocking for Phase 2) |
| Structure Approved | ⬜ | Phase 3 IA Audit not yet run |
| Content Pass Open | ⬜ | Blocked on Phase 3 + terminology lock |
| Veracity Done | ⬜ | |
| Layout Done | ⬜ | |

---

## Open Items

- [ ] Formally record Orchestrators IA lock in `decisions/decision-registry.md`
- [ ] Fix `operator-rationale.mdx` corruption before Phase 3 can parse the file
- [ ] Run Phase 1b persona iteration check (raw v2 content now available)
- [ ] Run Phase 2.5 IA-mapped research pack (after formal IA lock)
- [ ] Confirm LIP-92 status → record in decision-registry.md
- [ ] structure-audit.md fix: add linear/on-demand/supporting/orphan 4-category classification before Phase 3 runs
- [ ] Phase 3 IA Audit — produce `v2/orchestrators/_workspace/tab-map.md`
