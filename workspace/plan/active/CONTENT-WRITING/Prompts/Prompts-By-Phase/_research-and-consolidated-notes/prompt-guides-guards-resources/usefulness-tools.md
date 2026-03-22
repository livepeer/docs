# Usefulness Evaluation Tools

**Source**: `tools/config/` + `tools/lib/docs-usefulness/`
**What these are**: Config files and code defining how documentation usefulness is scored. The rubric and journey definitions govern what "good content" means per page type and audience.
**Use in**: Phase 2 structure audit + Phase 3 content pass — as quality benchmarks and scoring rubrics.

---

## Files

### Config files

| File | What it contains |
|---|---|
| `tools/config/usefulness-rubric.json` | Scoring rubric for content usefulness. Dimensions, weights, pass/fail thresholds. |
| `tools/config/usefulness-journeys.json` | Journey definitions per audience — what steps users take and what content serves each step. |
| `tools/config/usefulness-llm-tiers.json` | Tier definitions for LLM-based evaluation (depth of analysis per tier). |
| `tools/config/usefulness-audience-normalization.json` | Audience token normalization map. |

### Per-pageType prompt files
**Source folder**: `tools/lib/docs-usefulness/prompts/`

| File | Covers |
|---|---|
| `landing.js` | Landing page usefulness criteria |
| `tutorial.js` | Tutorial page usefulness criteria |
| `concept.js` | Concept page usefulness criteria |
| `how_to.js` | How-to page usefulness criteria |
| `reference.js` | Reference page usefulness criteria |
| `troubleshooting.js` | Troubleshooting page usefulness criteria |
| `faq.js` | FAQ page usefulness criteria |
| `overview.js` | Overview page usefulness criteria |
| `glossary.js` | Glossary page usefulness criteria |
| `changelog.js` | Changelog page usefulness criteria |

**Note**: These use the old pageType names (how_to, landing, overview). Map to new 7-type system before using. See `Frameworks/frontmatter-taxonomy-update.md` for the alias map.
