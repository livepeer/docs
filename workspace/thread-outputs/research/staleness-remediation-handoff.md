# Staleness Remediation Handoff Prompt

> **Purpose**: Paste this entire file into a new Claude Code session to fix all staleness issues found during the governance framework audit (2026-03-26).
> **Scope**: SCRIPT-GOVERNANCE, COMPONENT-GOVERNANCE, AI-TOOLS-GOVERNANCE frameworks + workspace/plan/active/index.md.
> **Out of scope**: AUTOMATIONS-RESTRUCTURE (blocked on SCRIPT-GOVERNANCE Task 15c - do not touch).

---

## Prompt

You are fixing staleness issues across four governance framework files in this repo. The audit found specific factual mismatches between what the framework documents say and what the repo actually contains. Your job is to make the frameworks accurately describe the current state of the repo.

### Rules

1. **Read before editing.** Before changing any file, read it in full. Do not work from memory or assumptions.
2. **Targeted edits only.** Use the Edit tool for surgical replacements. Do not rewrite entire files. Preserve all surrounding content, formatting, and structure.
3. **Verify after editing.** After each edit, confirm the replacement did not break any cross-references within the file or to other files.
4. **UK English.** Use -ise, -our, -re endings. No em dashes - use hyphens or rewrite.
5. **Do not touch AUTOMATIONS-RESTRUCTURE.** It is blocked on SCRIPT-GOVERNANCE Task 15c. Skip it entirely.
6. **Offer to commit after each framework.** After completing all fixes for one framework, tell me what changed and ask if I want to commit before moving to the next.
7. **Order of operations.** Fix in this order because downstream frameworks reference script paths:
   1. SCRIPT-GOVERNANCE (script-framework.md)
   2. COMPONENT-GOVERNANCE (component-framework-canonical.md)
   3. AI-TOOLS-GOVERNANCE (completion-report.md, client-side-component-audit.md, related files)
   4. workspace/plan/active/index.md

---

### Framework 1: SCRIPT-GOVERNANCE (PARTIALLY STALE)

**File**: `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md`

**Pre-flight**: Read `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md` in full. Then run `ls operations/scripts/` to see the actual top-level structure, and check each sub-folder mentioned in the framework against reality.

**Fixes needed:**

1. **Stale root path (15 references).** The framework says `tools/scripts/` throughout. The actual path is `operations/scripts/`. Find and replace all 15 occurrences. After replacing, grep the file to confirm zero remaining `tools/scripts/` references.

2. **Missing niches.** The framework's taxonomy table does not list these niches that exist in the repo:
   - `generators/content/data`
   - `audits/content/data`
   Run `ls operations/scripts/generators/content/` and `ls operations/scripts/audits/content/` to confirm these folders exist, then add them to the appropriate taxonomy table rows.

3. **Stale entry: generators/content/reconciliation.** The framework lists `generators/content/reconciliation` as a niche. Run `ls operations/scripts/generators/content/` to confirm this folder does not exist. Remove it from the taxonomy table.

4. **Undocumented folders.** These folders exist in the repo but are not in the framework:
   - `validators/governance/ai`
   - `validators/governance/repo`
   - `remediators/governance/scripts`
   Run `ls` on each to confirm they exist, then add them to the taxonomy table with appropriate descriptions.

5. **Dual archive structure.** The framework documents `x-archive/` but the repo also has `archive/` folders. Run `find operations/scripts -type d -name "archive"` and `find operations/scripts -type d -name "x-archive"` to map both. Document the `archive/` folders in the framework alongside the existing `x-archive/` documentation. Note: Decision D2 calls for consolidation but that is a separate task - for now, just make the framework accurately describe what exists.

**Verification**: After all fixes, grep the file for `tools/scripts/` (expect 0 hits). Grep for each newly added niche to confirm it appears in the file.

---

### Framework 2: COMPONENT-GOVERNANCE (VERY STALE)

**File**: `workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md`

**Pre-flight**: Read `workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md` in full. Then run `find snippets/components -name "*.jsx" -o -name "*.tsx" | wc -l` to get the actual component count. Run `ls -R snippets/components/` to see the actual folder structure.

**Fixes needed:**

1. **Component count mismatch.** The framework claims 118 components. The actual repo has approximately 45. Find where "118" appears (likely in the header or overview section) and replace with the actual count. If the count appears in `workspace/plan/active/index.md` as well, note it for fix in Framework 4.

2. **Badges sub-niche undocumented.** Run `ls snippets/components/wrappers/` to check if a `badges/` subfolder exists. If it does, add it to the wrappers category in the framework's folder tree and component table.

3. **Examples folders undocumented.** Run `find snippets/components -type d -name "examples"` to find all examples/ folders. The framework does not document these. Add a note in the framework explaining that `examples/` subdirectories exist within these categories, and list which categories have them.

4. **Empty scaffolding/page-containers/.** Run `ls snippets/components/scaffolding/page-containers/` to confirm it is empty. If empty, add a note in the framework tree marking it as empty/placeholder, or remove it from the tree if no components are planned for it.

5. **Aspirational vs descriptive.** After fixing items 1-4, review the framework overview/introduction. If it describes capabilities or components that do not exist in the repo, add a note or adjust the language to reflect current state. Do not rewrite the vision - just flag where the framework describes future state as if it were current. Add a brief note at the top of the file: `> **State accuracy**: Updated 2026-03-26 to reflect actual repo contents. Component count and folder structure verified against live repo.`

**Verification**: After all fixes, confirm the component count in the framework matches `find snippets/components -name "*.jsx" -o -name "*.tsx" | wc -l`. Confirm every folder listed in the framework tree actually exists.

---

### Framework 3: AI-TOOLS-GOVERNANCE (CURRENT - minor items)

**Files to read first:**
- `workspace/plan/active/AI-TOOLS-GOVERNANCE/completion-report.md`
- `workspace/plan/active/AI-TOOLS-GOVERNANCE/client-side-component-audit.md`
- `.github/AGENTS.md`
- Run `grep -r "invoke_when" workspace/plan/active/AI-TOOLS-GOVERNANCE/` to find the stale reference

**Fixes needed:**

1. **completion-report.md R4 stale reference.** The completion report references a removed `invoke_when` field. Read the file and find the R4 reference. Update it to reflect the current state (the field was removed). If R4 is in a "remaining items" or "deferred" section, update the description to note the field no longer exists.

2. **client-side-component-audit.md placement.** Read the file. Determine whether its content is about components (belongs in COMPONENT-GOVERNANCE) or about AI tools. If it is primarily about components, add a note at the top: `> **Note**: This audit may belong in COMPONENT-GOVERNANCE/ rather than AI-TOOLS-GOVERNANCE/. Flagged for Alison to decide placement.` Do not move the file - just flag it.

3. **.github/AGENTS.md fictional checkpoint branch system.** Read `.github/AGENTS.md`. Find the section describing a checkpoint branch system. If the described system does not exist in the repo (no evidence of checkpoint branches in git), add a comment or note marking it as aspirational/not yet implemented. Do not delete the section - just annotate it accurately.

4. **generate-ai-tools-inventory.js broken import.** Run `grep "validateFullRegistry" ai-tools/` recursively to find the broken import. Check whether `validateFullRegistry` is exported from its source file. If not exported, note the broken import in a comment within the file: `// TODO: validateFullRegistry is not exported from its source module — import will fail at runtime`. Do not fix the export itself (that is a code change beyond documentation scope).

**Verification**: After fixes, grep for `invoke_when` in the completion report to confirm it is updated. Check AGENTS.md has an annotation on the checkpoint section.

---

### Framework 4: workspace/plan/active/index.md (STALE)

**File**: `workspace/plan/active/index.md`

**Pre-flight**: Read `workspace/plan/active/index.md` in full. Run `ls workspace/plan/active/` to see current folder contents.

**Fixes needed:**

1. **Stale path reference: tasks/ vs workspace/.** The index references `tasks/` but the correct path is `workspace/`. Find and replace. Note: this was changed on 2026-03-21 per SCRIPT-GOVERNANCE Task 13c.

2. **Missing DOCUMENTATION plan entry.** Check if a `DOCUMENTATION/` folder exists under `workspace/plan/active/`. If it does, add an entry for it in the index following the existing format (folder link, branch, status, file table). If it does not exist, skip this fix.

3. **Component count in index.** The index entry for COMPONENT-GOVERNANCE says "118 components". Update this to match the actual count you found in Framework 2.

4. **No cross-plan decision registry.** Add a new section after the existing plan entries titled "Cross-Plan Dependencies". Include a brief table noting:
   - AUTOMATIONS-RESTRUCTURE is blocked on SCRIPT-GOVERNANCE Task 15c
   - COMPONENT-GOVERNANCE and SCRIPT-GOVERNANCE share JSDoc standards
   - AI-TOOLS-GOVERNANCE Phase 1 path fixes depend on SCRIPT-GOVERNANCE Task 14 completion
   Keep it to 5-8 rows maximum. This is a reference aid, not a full dependency graph.

5. **Update the "Updated" date** in the file header to 2026-03-26.

**Verification**: Grep the file for `tasks/` to confirm no stale path references remain (note: `tasks/` may appear legitimately in task descriptions like "Tasks 1-13" - only the path references are stale). Confirm the component count matches reality.

---

### After all four frameworks are fixed

1. Run `grep -r "tools/scripts/" workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md` - expect 0 results
2. Run `grep -r "118 components" workspace/plan/active/` - expect 0 results (unless 118 is genuinely correct, which it is not)
3. Summarise all changes made across all four frameworks in a brief completion report

---

### Reference: Decision D2

Decision D2 in the SCRIPT-GOVERNANCE decision log calls for consolidating `archive/` and `x-archive/` into a single archive pattern. The staleness fix here is only to document what exists now, not to execute the consolidation. If you find both patterns, document both. The consolidation is a separate task.

### Reference: Files you will need

| File | Path |
|---|---|
| Script framework | `workspace/plan/active/SCRIPT-GOVERNANCE/script-framework.md` |
| Component framework | `workspace/plan/active/COMPONENT-GOVERNANCE/component-framework-canonical.md` |
| AI-Tools completion report | `workspace/plan/active/AI-TOOLS-GOVERNANCE/completion-report.md` |
| AI-Tools client-side audit | `workspace/plan/active/AI-TOOLS-GOVERNANCE/client-side-component-audit.md` |
| AGENTS.md | `.github/AGENTS.md` |
| Active plans index | `workspace/plan/active/index.md` |
| Script decision log | `workspace/plan/active/SCRIPT-GOVERNANCE/decision-log.md` |
