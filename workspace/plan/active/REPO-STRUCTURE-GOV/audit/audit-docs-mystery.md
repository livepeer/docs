# Audit: `docs/` (Mystery Directory)

*Audited: 2026-03-20*

---

## Status: STALE STAGING COPY — INVESTIGATE BEFORE TOUCHING

---

## Structure

```
docs/
├── home/               + todo.txt
├── community/
├── developers/
├── gateways/
├── about/              + todo.txt
├── orchestrators_v1/   + todo.txt
├── resources/          + todo.txt
├── solutions/          + todo.txt
└── internal/           + todo.txt
```

**506 total .md/.mdx files**. Mirrors the `v2/` section structure exactly.

---

## The `todo.txt` Files (7 found)

Found in: `home/`, `resources/`, `solutions/`, `about/`, `orchestrators_v1/`, `gateways/`, `developers/`.

**Example — `docs/home/todo.txt`:**
```
# Pages in this section (from index.mdx)
## Home
- [Get Started with Livepeer]
- [Livepeer Primer]
...

# TODO:
## Upgrade:
- SEO & AEO / OG image / Seed more showcase projects
## Remove:
- Get Started Anchor
## Rename:
- why-livepeer -> benefits
## Move:
- all of /home to Root
## Test / Fix:
- all links in pages
```

These are planning notes for per-section restructuring work — not generated content. Someone was manually tracking TODO items per section here.

---

## Git History (Last 10 Commits Touching `docs/`)

```
96a13753  updates
f2bca3d0  handy preview tool
d529f079  fix(imports): final stale path cleanup in catalog and template data
06eb1dea  style(components): enforce PascalCase naming convention
8d2fcbf3  refactor(components): audit-driven corrections
ce6a5d4e  fix(imports): update all remaining component path references
62fade99  feat(components): restructure into new category taxonomy
73dcca31  fix(mdx): clear merge-readiness parse blockers
aba27cac  fix(component-governance): sync component paths
e149c63c  cleanup(governance): sync remaining references
```

Recent commits show `docs/` was being actively modified as part of the component restructure and import path cleanup (last 3 weeks). It is **not** purely a historical artifact — it was touched recently.

---

## Generated File Banners

`docs/` index.mdx files contain generated-file banners: `{/* generated-file-banner:v1 ... */}` referencing `tools/scripts/generate-pages-index.js`. This confirms they were **auto-generated from the v2 content structure**, not manually authored.

---

## Comparison with `v2/`

Both `docs/` and `v2/` have the same section directories. `docs/` additionally has:
- `todo.txt` files per section (manual planning notes)
- Generated index files (not matching v2 exactly)

`docs/` is neither a pure build output nor a clean staging copy — it's a **hybrid**: auto-generated index files with manually added todo notes, suggesting someone was using it as a working draft for a planned v2 restructure.

---

## Hypothesis

`docs/` is a **planning/staging copy** of v2 content that was used to draft the upcoming restructure (the todo notes reference renaming, moving, and upgrading pages). The generated index files were used to get a baseline, then todo notes were added manually.

This work appears to be **untracked** — there's no corresponding task in `tasks/plan/active/` for this restructure. It's a governance gap: planning work happening outside the task management system.

---

## Why This Is Risky

- `docs/` is **not in `.allowlist`** — it could fail the pre-commit root-structure gate at any commit
- 506 files, 7 todo.txt files of manual planning notes — this represents meaningful work that could be lost
- If Mintlify ever encounters `docs/` as a content root, it could serve duplicate pages
- No one owns this work explicitly

---

## Recommended Actions

1. **Immediate:** Check whether `.githooks/pre-commit` is currently failing on `docs/` not being in `.allowlist`. If so, it's silently bypassed.

2. **Short-term:** Extract the todo.txt planning notes into proper task files in `tasks/plan/active/`. These represent real restructuring intent that should be tracked.

3. **Decision:** Choose one of:
   - **A) Convert to task:** Create `tasks/plan/active/V2-RESTRUCTURE/` and move the todo notes there. Delete `docs/`.
   - **B) Promote to staging:** If `docs/` is the working copy for the next v2 structure, govern it properly — add to `.allowlist`, document its purpose, assign an owner.
   - **C) Archive and delete:** If the restructure is captured elsewhere, archive the todo notes to `tasks/plan/future/` and delete `docs/`.

**Option A is recommended.**

---

## Summary

| Issue | Severity | Action |
|---|---|---|
| Not in `.allowlist` — pre-commit may flag | **HIGH** | Add to allowlist temporarily OR resolve and delete |
| 506 files mirror v2/ — could confuse Mintlify | **HIGH** | Verify Mintlify is not treating `docs/` as a content root |
| 7 `todo.txt` files with valuable restructure plans | Medium | Extract to `tasks/plan/active/V2-RESTRUCTURE/` before deleting |
| Planning work untracked in task system | Medium | Create proper task for v2 restructure work |
