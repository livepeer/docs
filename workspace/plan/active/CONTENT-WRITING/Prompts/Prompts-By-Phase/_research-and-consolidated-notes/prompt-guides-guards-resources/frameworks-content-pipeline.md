# Content Pipeline Frameworks (9 files)

**Source folder**: `workspace/plan/active/CONTENT-WRITING/Frameworks/`
**What it is**: The canonical taxonomy and framework definitions produced during Phase 1 of the pipeline build. Each file defines one frontmatter field or governance concept.
**Use in**: All pipeline phases — these are the locked definitions the prompts operate against.

---

## Files in this folder

| File | Status | What it defines |
|---|---|---|
| `content-pipeline-framework.md` | ✅ Active decisions log | Frontmatter schema, agreed field values, open questions. Master record of pipeline structure decisions. |
| `pageType.md` | ✅ Locked | 7 primary types: `navigation`, `concept`, `tutorial`, `guide`, `instruction`, `reference`, `resource`. Each has variants. |
| `pagePurpose.md` | ✅ Locked | 15 intent-based purpose values. Governs content need, outcome, voice, structure. |
| `complexity.md` | ✅ Agreed | `beginner`, `intermediate`, `advanced`. Calibration signal — affects agent assumptions, not page structure. |
| `information-type.md` | DRAFT | Section-level taxonomy (not frontmatter). Maps purpose → permitted information types per section. |
| `industry.md` | ✅ Locked | `industry` + `niche` fields. Enforces domain-anchor rule: native industry vocabulary in naming. |
| `veracity.md` | DRAFT | `veracityStatus` field. Defines trustworthiness standards per information type. |
| `veracity-library.md` | COMPLETE | 45-source registry. Maps each source to information type and veracity standard. See also: `TERMINOLOGY-COLLATE/consolidated/veracity-sources.md` for the full priority table. |
| `prompt-input-spec.md` | DRAFT | Interface contract for each pipeline prompt: required inputs, outputs, quality gates. |
| `frontmatter-taxonomy-update.md` | Ready to implement | Specific changes needed to `tools/lib/frontmatter-taxonomy.js` to align with locked Phase 1 values. |

---

## Key section to read first

`content-pipeline-framework.md` → **Frontmatter Schema (agreed)** section: the full field list and current status of each field.
