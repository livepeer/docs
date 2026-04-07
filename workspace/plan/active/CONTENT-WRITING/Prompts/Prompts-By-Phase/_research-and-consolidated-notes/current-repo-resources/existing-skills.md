# Existing Content Skills

**What these are**: Currently deployed AI skills for content-related work. Some will be superseded by the new pipeline skills; others may be useful as reference for what's already been built.
**Use in**: Background context when designing Phase 3 and 4 pipeline skills — check what already exists before building new.

---

## Skills in `ai-tools/agent-packs/skills/`

| Skill | Source | What it does | Pipeline relevance |
|---|---|---|---|
| `docs-copy` | `ai-tools/agent-packs/skills/docs-copy/SKILL.md` | Rewrites documentation copy. Has task-routing, workflow, handoff checklist. | May be superseded by Phase 3 rewrite skill. Check overlap. |
| `page-content-research-review` | `ai-tools/agent-packs/skills/page-content-research-review/SKILL.md` | Reviews page content with research backing. Has report template, workflow router. | May be superseded by Phase 3 review skill. Check overlap. |
| `docs-research-packet-generation` | `ai-tools/agent-packs/skills/docs-research-packet-generation/SKILL.md` | Generates research packets for pages. | Useful for Phase 3 pre-work if deep research is needed. |
| `docs-change-review` | `ai-tools/agent-packs/skills/docs-change-review/SKILL.md` | Reviews changes to docs. Has rubric and severity/verdict system. | Useful post-Phase 4 for change validation. |
| `docs-source-verification` | `ai-tools/agent-packs/skills/docs-source-verification/SKILL.md` | Verifies sources cited in docs. Has source priority reference. | Feeds into Phase 3 veracity check. |
| `docs-ia-route-placement` | `ai-tools/agent-packs/skills/docs-ia-route-placement/SKILL.md` | Routes new pages to correct IA location. | Useful for orphan resolution in Phase 2. |
| `mintlify-authoring-style-compliance` | `ai-tools/agent-packs/skills/mintlify-authoring-style-compliance/SKILL.md` | Checks MDX compliance with Mintlify authoring style. | Useful in Phase 4 as final gate. |
| `style-mdx-quality-fix-playbook` | `ai-tools/agent-packs/skills/style-mdx-quality-fix-playbook/SKILL.md` | Playbook for MDX quality fixes. | Phase 4 support. |

---

## Note on duplication

`ai-tools/ai-skills/` contains an older/parallel version of some skills (docs-copy, docs-review-packet-generation, docs-review-fix-execution). The `agent-packs/skills/` versions appear to be the current active set. Verify before use.
