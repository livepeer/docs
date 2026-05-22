# Copy Writing Skills

**Source folder**: `ai-tools/ai-skills/docs-copy/skills/`
**What these are**: Discrete skill files used by the `docs-copy` AI skill. Each governs one dimension of copy quality. Some may be superseded by the pipeline's own framework — check status before loading.
**Use in**: Phase 3 content pass — copy rules, persona routing, value-prop checking.

---

## Files

| File | What it covers | Notes |
|---|---|---|
| `copy-rules.md` | Universal copy rules (structure, voice, precision) | Likely overlaps with `copy-governance.md`. Check for conflicts before loading both. |
| `structure-rules.md` | Content structure rules per section type | May predates current 7-type pageType system — verify alignment. |
| `persona-routing.md` | Logic for routing copy decisions by persona | Useful for Phase 3 audience-specific pass. |
| `value-prop-check.md` | Value proposition checklist per audience | Most relevant for `founder` and `solutions` tab content. |
| `iteration-diagnostic.md` (`skills/`) | Diagnosing why copy iterations aren't improving | Meta-skill — useful when Phase 3 rewrites aren't converging. |
| `review-gate.md` (`skills/`) | Gate criteria for accepting a copy draft | Could inform Phase 3 human checkpoint criteria. |

**Also in `reference/`**:
- `phrase-mapping.md` — mapping of banned/acceptable phrase pairs
- `invocation-guide.md` — how to invoke the docs-copy skill (may be outdated)

---

## Full skill source path
`ai-tools/ai-skills/docs-copy/` — also duplicated at `ai-tools/agent-packs/skills/docs-copy/`
