# Prior Pipeline Outputs

**What these are**: Review and analysis outputs from previous pipeline runs. Useful as examples of what good output looks like, and as sources for lessons-learned.
**Use in**: Phase 2 (structure audit) calibration — these show the gap analysis format. Phase 3 — the tier-questions file shows how to interrogate a page.

---

## Files

### orchestrator-tab-review (series of 3)
**Sources**:
- `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/outputs/orchestrator-tab-review.md`
- `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/outputs/orchestrator-tab-review-v2.md`
- `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/outputs/orchestrator-tab-review-v3.md`
**What they contain**: Three iterations of the orchestrator tab structural review. Each identifies gaps and orphaned pages. V2/V3 show how the review evolved.
**Notable finding**: Section 6 in the review — reordering guide sections by reader's natural question sequence ("Should I?" → "Which path?" → "What do I run?" → "How do I earn?"). This is the **reader question per section** pattern.
**Use**: Load as a quality example when calibrating Phase 2 structure audit output.

### tier-questions-all-pages.md
**Source**: `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/outputs/tier-questions-all-pages.md`
**What it contains**: 5-tier question framework for interrogating a page. Each tier escalates the depth of analysis. Tier 1 = basic structure check. Tier 5 = full reader journey audit.
**Use**: Phase 2 and Phase 3 — as a checklist framework for page-level review. See also `docs-review-prompt-tiers.md` (prompt-guides-guards folder) for the compressed version.

---

## Key lessons surfaced by these outputs

1. **empty vs missing**: The orchestrator review distinguishes between `missing` (folder never created) and `empty` (folder exists as nav item with 0 pages — produces dead ends for readers). Both are P0.
2. **Reader question ordering**: Sections should be ordered by the reader's natural question sequence, not by technical completeness.
3. **Orphan analysis**: Pages that don't map to any ideal section need a decision: keep (unstated need), merge, or remove.
