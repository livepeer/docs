---
name: content-pipeline-tab-map
version: "1.0"
category: content-pipeline
description: >-
  Run the Level 1 tab map for a Livepeer docs tab (gateways or orchestrators).
  Produces a structural inventory of the tab's sections and pages — classified
  against the canonical section vocabulary — with audience journey map, gap
  analysis, and recommended actions. Required before running any Level 2 operation.
invoke_when:
  - "run the tab map for [tab]"
  - "generate the content pipeline tab map"
  - "Level 1 pipeline for [tab]"
  - "scan and classify [gateways/orchestrators] tab"
  - "what pages and gaps are in [tab]?"
---

SKILL: Content Pipeline — Level 1 Tab Map

Goal
Produce a complete, accurate tab map for the specified Livepeer docs tab, covering section inventory, page classification, audience journey, gap analysis, and recommended actions. The tab map is the required input to all Level 2 pipeline operations (Pass A and Pass B) for this tab.

Constraints
- Do not run Level 2 (Pass A or Pass B) operations during this skill. Tab map only.
- Do not propose content rewrites. Classification and gap identification only.
- Do not edit docs.json or move files. Observation only.
- Report orphaned files and stray root files but do not remove them.
- If LIVE_DOCS_ACCESS is not available, use the file system and docs.json as primary sources. State any gaps explicitly.

When to load references
- Load `workspace/plan/active/CONTENT-WRITING/Prompts/level-1-tab-map.md` — the full prompt with phases and quality gates.
- Load `docs.json` to read the tab's current navigation structure.
- Load the tab root directory listing: `v2/[tab]/`.
- Load `workspace/plan/active/CONTENT-WRITING/framework.md` for audience + persona definitions.
- Load `docs-guide/policies/v2-folder-governance.mdx` for publishable lane rules.

Workflow
1. Ask which tab to map if not specified: `gateways` or `orchestrators`.
2. Load `level-1-tab-map.md`. Fill the context block with the specified tab.
3. Run Phase 1 (scan): list tab root, read docs.json for the tab, classify every navigated page against the taxonomy.
4. Run Phase 2 (journey): map the linear journey (positions 1–3) and on-demand journey (positions 4–6) for the tab's primary audience. Identify cross-tab paths.
5. Run Phase 3 (gap analysis): produce three gap lists — missing pages, misclassified pages, content gaps.
6. Run Phase 4 (output): write the tab map document to `v2/[tab]/_workspace/tab-map.md`.
7. Return a summary: sections found, pages classified, gaps identified, broken paths, recommended actions count.

Deliverable Format
- Tab map written to `v2/[tab]/_workspace/tab-map.md` (full document).
- Summary response: counts of sections, pages, gaps, and recommended actions. Flag any P0 gaps that block Level 2 operations.

Failure Modes / Fallback
- If docs.json tab navigation cannot be found: list all files under `v2/[tab]/` and construct a provisional navigation inventory from the file system. State that docs.json navigation was not found.
- If a page has no frontmatter: classify it as `missing-fields`. Do not skip it.
- If the tab root has no `_workspace/` directory: note it and write the output file at a fallback path. Do not create the directory without confirmation.

Validation Checklist
- [ ] Every page in docs.json appears in the Phase 1.3 classification table
- [ ] Every file on disk under `v2/[tab]/` is accounted for
- [ ] Orphaned files and broken paths are both listed (even if empty)
- [ ] No stray files at tab root remain unclassified
- [ ] All three gap lists produced (missing / misclassified / content-gaps)
- [ ] Recommended actions are priority-ordered with type and scope
- [ ] Output file written to `v2/[tab]/_workspace/tab-map.md`
