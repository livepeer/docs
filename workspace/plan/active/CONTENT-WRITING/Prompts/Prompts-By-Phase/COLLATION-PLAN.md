# GET IT ALL — Collation Plan

**Purpose**: Comprehensive first-pass collation of every content-writing-adjacent file in the repo. No usefulness judgements — collect everything, sort by type, record in master index. Usefulness assessment is Task 2.

**Status**: ✅ Collation complete — proceeding to Phase Pack build

---

## Folder Structure

```
_research-and-consolidated-notes/
├── MASTER-INDEX.md                       ← single table: all collated files
├── prompt-guides-guards-resources/       ← rules, constraints, frameworks governing output quality
├── reference-sources-quality-scored/     ← authoritative sources for fact/terminology verification
└── current-repo-resources/              ← existing repo content grounding prompts contextually
```

**Rule**: Do not copy file content unless < 50 lines and entirely self-contained. Use pointer files for everything else. Preserves single-source-of-truth.

---

## Governing Rule — Test Before Relying

**No source file is trusted until tested.** Every resource in `_research-and-consolidated-notes/` has been collated and assessed — but assessment is based on reading, not on running the prompts with those files loaded. Before any source becomes a canonical Phase pack input, it must be tested:

- Load the source into the target phase prompt
- Run the prompt on a real page or tab
- Evaluate the output for quality delta vs running without it
- Record the result in the phase's `testing/` folder
- Only promote to the phase pack's confirmed resource list after a passing test

This applies to all three source types: guides/guards, reference sources, and repo context.

---

## Collation Checklist (✅ Complete)

- [x] Step 1 — Create this file
- [x] Step 2 — Redistribute `/sources/` files to typed folders; delete `/sources/`
- [x] Step 3 — Populate `prompt-guides-guards-resources/` with pointer files
- [x] Step 4 — Populate `reference-sources-quality-scored/` with pointer files
- [x] Step 5 — Create and populate `current-repo-resources/`
- [x] Step 6 — Create `MASTER-INDEX.md`
- [x] Task 2 — Assess all MASTER-INDEX entries (useful/partial/n/a) — see `MASTER-INDEX.md`
- [x] Deep scan — Comprehensive repo scan; results in `current-repo-resources/master-inventory.md`
- [x] Prune and classify — `current-repo-resources/master-list.md` (status + phase per item)
- [x] Resource review — `current-repo-resources/master-resource-review.md` (recommendations + risks per phase)

---

## Next Steps — Phase Pack Build

- [x] Step A — Create phase-specific resource lists: `phase-resources.md` in each phase folder
- [x] Step B — Phase 1 prompt pack: `audience-design.md` updated (6 additions) + `pack-guide.md` created
- [x] Step C — Phase 2 prompt pack: `structure-audit.md` updated (pre-flight, position validation, routing page check) + `pack-guide.md` created
- [x] Step D — Phase 3 prompt pack: `content-pass.md` created (from deprecated Pass A, tab-agnostic, Brand & Copy Guide added) + `pack-guide.md` + Pass A skill paths fixed
- [x] Step E — Phase 4 prompt pack: `layout-pass.md` created (from deprecated Pass B, industry/niche removed, validator warning added) + `pack-guide.md` + Pass B skill paths fixed
- [ ] Step F — Test each pack; record results in phase `testing/` folders; iterate
- [ ] Step G — Canonical `evaluation.md` per phase once testing is stable

---

## What goes where

| Type | Folder | Examples |
|---|---|---|
| Rules, constraints, frameworks governing how prompts should write | `prompt-guides-guards-resources/` | voice-rules, copy rules, pageType, pagePurpose, section naming, banned words |
| Authoritative sources for verifying terminology and factual claims | `reference-sources-quality-scored/` | per-tab glossaries, veracity-sources, accuracy-source-registry |
| Existing repo content that grounds prompts in real context | `current-repo-resources/` | personas, IA maps, site map, page templates, existing skills |
