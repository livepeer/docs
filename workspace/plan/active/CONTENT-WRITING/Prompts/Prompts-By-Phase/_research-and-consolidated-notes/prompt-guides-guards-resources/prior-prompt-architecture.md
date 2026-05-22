# Prior Prompt Architecture

**Sources**: `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/other/`
**What these are**: Earlier versions of the pipeline architecture spec and planning playbook. Useful as design context and lessons-learned, but superseded by the current Prompts-By-Phase structure.
**Use in**: Reference when designing Phase 3 and 4 prompts, or when the `previous-prompt-consolidated-review.md` references specific decisions.

---

## Files

### docs-section-planning-playbook.md
**Source**: `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/other/docs-section-planning-playbook.md`
**What it contains**: 13-step playbook for planning a documentation section. Contains key lessons learned the hard way:
- "Create the glossary FIRST — terminology decisions affect every subsequent step"
- Quickstart must be testable without financial commitment or infrastructure decisions
- Absence detection methods: Walk the Week, Interface Audit, Question Harvest
**Status**: Superseded as a running prompt, but the lessons are still valid. The `previous-prompt-consolidated-review.md` surfaces the P0 items from this file.

### 10-prompt-input-spec.md
**Source**: `workspace/plan/active/CONTENT-WRITING/Prompts/Previous Prompts Used/other/10-prompt-input-spec.md`
**What it contains**: Earlier version of the pipeline architecture spec — defines the Level 1A → 1B → 2A → 2B prompt sequence that preceded the current Prompts-By-Phase structure.
**Status**: Superseded by `Frameworks/prompt-input-spec.md` (current) and the Prompts-By-Phase structure. Useful for understanding where design decisions came from.

---

## Key lesson from these files (P0)

From `docs-section-planning-playbook.md`:
> "Quickstart: Can you test this without financial commitment or infrastructure decisions? Setup: What does production-ready actually require? Operations: What does day-to-day management look like?"

This distinction prevents mixing quickstart/setup/ops — the most common structural mistake in onboarding sections.
