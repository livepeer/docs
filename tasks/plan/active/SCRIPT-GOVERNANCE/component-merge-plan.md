# Component Branch Merge Subplan

> Merging `docs-v2-dev-components` into `docs-v2-dev`.
> 325 files changed, 8,179 insertions, 25,316 deletions.

---

## Conflict risk assessment

Both branches modified:

| Area | Script branch did | Component branch did |
|---|---|---|
| `component-governance-utils.js` | Updated require paths | Changed VALID_CATEGORIES, GOVERNANCE_FIELDS, @category→@type |
| `check-naming-conventions.js` | Moved to `validators/components/library/`, updated paths | Added strict-pascal mode, x-archive exclusions |
| `check-component-css.js` | Moved to `validators/components/library/`, updated paths | Content changes (WCAG fixes?) |
| `check-component-docs.js` | Moved to `validators/components/documentation/` | May have content changes |
| `generate-component-registry.js` | Moved to `generators/components/library/` | Uses new GOVERNANCE_FIELDS and CATEGORY_PURPOSES |
| Component JSDoc headers | Changed @category→@type, added 11-tag standard | Changed @category→@type, reduced to 7-tag standard |
| `.vscode/` | No changes | New component picker extension, component snippets |
| `snippets/components/` | No changes | Major restructure (4 passes of fixes, cleanup) |

## Strategy

**Merge component branch ONTO docs-v2-dev** (not the other way round) — our script
restructure is the larger structural change. Component changes layer on top.

Git will auto-resolve moves + content changes in most cases. Conflicts will
appear where both branches edited the same file AND we moved it.

## Steps

### Phase 1 — Dry-run merge to identify conflicts

- [ ] **1.1** `git merge docs-v2-dev-components --no-commit --no-ff` on docs-v2-dev
- [ ] **1.2** Count and list conflicts
- [ ] **1.3** Abort if > 20 conflicts (needs different strategy)

### Phase 2 — Resolve conflicts

For each conflict:
- If it's a **path conflict** (we moved file, they edited at old path): take their content changes, apply to our new path
- If it's a **content conflict** (both edited same lines): merge manually, preferring component branch for component logic and script branch for paths/headers
- If it's a **JSDoc conflict** (both changed headers): use our 11-tag standard with their updated field values

- [ ] **2.1** Resolve each conflict file
- [ ] **2.2** Verify `component-governance-utils.js` has both: our paths AND their new VALID_CATEGORIES/GOVERNANCE_FIELDS
- [ ] **2.3** Verify component scripts at new paths have their content changes applied

### Phase 3 — Post-merge fixup

- [ ] **3.1** Run broken-require checker
- [ ] **3.2** Fix any new broken paths from the merge
- [ ] **3.3** Run `npm test --prefix tests`
- [ ] **3.4** Verify component-related tests pass

### Phase 4 — Execute deferred Wave 5 items

Now that component branch is merged, execute the items we deferred:

- [ ] **4.1** Resolve `.vscode/components.code-snippets` conflict (Python script owns output)
- [ ] **4.2** Split `enforce-generated-file-banners.js`
- [ ] **4.3** Split `validate-ai-tools-registry.js`
- [ ] **4.4** Split `audit-script-inventory.js` / consolidate with `add-framework-headers.js`
- [ ] **4.5** Compose `generate-glossary.js` + `terminology-search.js` pipeline

### Phase 5 — Final verification

- [ ] **5.1** Full broken-require check
- [ ] **5.2** Full test suite
- [ ] **5.3** Commit + merge back to `docs-v2-dev`
