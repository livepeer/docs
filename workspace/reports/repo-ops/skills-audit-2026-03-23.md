# Skills Audit - 2026-03-23

## Summary

- **19 skills audited** in `ai-tools/ai-skills/`
- **18 GOOD** - proper frontmatter, valid file references, actionable instructions
- **1 NEEDS WORK** - backing script not implemented
- **0 redundant** - each serves a distinct purpose

---

## Results

| # | Skill | Lines | Quality | References | Rating |
|---|---|---|---|---|---|
| 1 | content-pipeline-pass-a | 78 | Excellent | All valid | GOOD |
| 2 | content-pipeline-pass-b | 68 | Excellent | All valid | GOOD |
| 3 | content-pipeline-tab-map | 65 | Excellent | All valid | GOOD |
| 4 | docs-copy | 53 | Excellent | All valid | GOOD |
| 5 | docs-review-fix-execution | 61 | Excellent | All valid | GOOD |
| 6 | docs-review-packet-generation | 61 | Excellent | All valid | GOOD |
| 7 | page-authoring | 328 | Excellent | All valid | GOOD |
| 8 | product-thinking | 400 | Excellent | All valid | GOOD |
| 9 | rubric-static-review | 74 | Excellent | Self-contained | GOOD |
| 10 | skill-docs | 56 | Excellent | All valid | GOOD |
| 11 | component-layout-governance | 25 | Clear | All valid | GOOD |
| 12 | script-footprint-and-usage-audit | 28 | Clear | All valid | GOOD |
| 13 | cleanup-quarantine-manager | 27 | Clear | All valid | GOOD |
| 14 | style-and-language-homogenizer-en-gb | 26 | Clear | All valid | GOOD |
| 15 | docs-quality-and-freshness-audit | 27 | Clear | All valid | GOOD |
| 16 | repo-audit-orchestrator | 32 | Excellent | All valid | GOOD |
| 17 | generated-mdx-banners-governance | 85 | Excellent | All valid | GOOD |
| 18 | cross-agent-packager | 24 | Clear | All valid | GOOD |
| 19 | docs-coverage-and-route-integrity-audit | 28 | Clear | BROKEN | NEEDS WORK |

---

## Issue: docs-coverage-and-route-integrity-audit

Backing script not implemented. Planned path `operations/scripts/audits/content/coverage/docs-coverage-and-route-integrity-audit.js` does not exist. Skill definition is ready but will fail if invoked.

---

## Skill categories

### Content pipeline (3)
- `content-pipeline-tab-map` - Level 1 prerequisite
- `content-pipeline-pass-a` - Content pass
- `content-pipeline-pass-b` - Layout pass

### Content operations (4)
- `docs-copy` - Smart routing to other skills by task type
- `page-authoring` - Comprehensive MDX authoring guide (328 lines)
- `product-thinking` - Product management framework for docs (400 lines)
- `docs-review-packet-generation` + `docs-review-fix-execution` - Review workflow pair

### Audit and governance (7)
- `repo-audit-orchestrator` - Meta-orchestrator
- `script-footprint-and-usage-audit` - Script sprawl detection
- `docs-quality-and-freshness-audit` - TODO/TBD/thin content
- `style-and-language-homogenizer-en-gb` - UK English enforcement
- `component-layout-governance` - Page composition validation
- `generated-mdx-banners-governance` - Generated file banner enforcement
- `docs-coverage-and-route-integrity-audit` - BROKEN

### Utility (3)
- `cleanup-quarantine-manager` - Quarantine candidates
- `cross-agent-packager` - Multi-agent pack generation
- `skill-docs` - Meta-skill for managing skills

### Standalone methodology (1)
- `rubric-static-review` - Generic 0-100 scoring rubric

---

## Recommendation for Claude Code `.claude/skills/`

All 18 working skills are ready to symlink or move to `.claude/skills/`. They have proper frontmatter and would be auto-discoverable by Claude Code and agent team teammates.

Priority for agent teams (most useful for teammates):
1. `page-authoring` - any content-writing teammate needs this
2. `content-pipeline-pass-a` + `pass-b` + `tab-map` - pipeline teammates
3. `docs-copy` - routing skill for task classification
4. `style-and-language-homogenizer-en-gb` - review teammates
5. `rubric-static-review` - review teammates
