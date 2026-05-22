# checks-audit — Addendum: Everything Else Missing

> Second pass after checking CONTENT-WRITING/, docs-guide/, COMPONENT-GOVERNANCE/, templates/, skills, and my-process.mdx

---

## NAMING INFRASTRUCTURE (Category 3)

checks.mdx Category 3 references "Frameworks.mdx section 4.1" only. The full naming infrastructure is:

| File | What it is |
|---|---|
| `CONTENT-WRITING/Prompts/section-naming.md` | **LOCKED** rubric: label classes, naming prompt, per-pageType style, per-purpose title job, per-audience register |
| `CONTENT-WRITING/Prompts/Good prompt references/section-naming.md` | Reference version |
| `v2/_workspace/research/content-naming.md` | 687-line source research |
| `CONTENT-WRITING/Prompts/.../naming-research.md` | Index to research |
| `docs-guide/standards/naming-conventions.mdx` | Published naming conventions |
| `operations/scripts/validators/components/library/check-naming-conventions.js` | Automated naming check |

**Missing checks:**

| # | Check | Pass criteria |
|---|---|---|
| 3.8 | Per-pageType naming style | reference=findability, concept=governing-concept, instruction=task-oriented, navigation=map language |
| 3.9 | Per-audience register in headings | developer=technical, delegator=finance, community=accessible |
| 3.10 | Domain-anchor rule | Heading includes domain noun when needed for isolation interpretation |

---

## TERMINOLOGY INFRASTRUCTURE (Category 2)

checks.mdx check 2.11 mentions terminology casually. The full infrastructure is massive:

**Master glossaries (TERMINOLOGY-COLLATE/):**
- consolidated/glossary-a-m.md (118KB), glossary-n-z.md (106KB), glossary-index.md (24KB)
- per-tab/glossary-{9 tabs}.md (24-54KB each)
- consolidated/veracity-sources.md (58KB source authority)
- categories.md (58KB), classified-by-tab.md (15KB), classified-by-tag.md (108KB)
- harvest.md (34KB raw data), scan-results/ (14 files)
- CONTENT-PIPLEINE/03.5-terminology-lock.md

**Per-tab input glossaries** (9 files in audience-design testing)
**Universal terms** (cross-tab canonical definitions)
**Deprecated terms** (9 per-tab copies + 1 consolidated)

**Scripts:**
- terminology-search.js, audit-glossary-gaps.js, generate-glossary.js, generate-glossary-companions.js
- discovered-terms.json, glossary-terms.json

**Templates:**
- 4 glossary templates in snippets/templates/pages/resources/compendium/

**Missing checks:**

| # | Check | Pass criteria |
|---|---|---|
| 2.19 | Terms match TERMINOLOGY-COLLATE canonical | Every Livepeer term matches consolidated glossary definition |
| 2.20 | Per-tab terminology correct | Uses terms from correct tab glossary |
| 2.21 | First use of specialised term defined or linked | Reader never encounters undefined term |
| 2.22 | Terminology lock respected | Locked terms used exactly as defined |
| 6.12 | Glossary definitions verified against primary sources | Cross-checked against veracity-sources.md |

---

## CONTENT METHODOLOGY (Category 4, 9)

These are the HOW-TO guides for writing and reviewing. checks.mdx checks output but doesn't reference methodology:

| File | What it does |
|---|---|
| `Prompts/Prompts-By-Phase/3-content-pass/content-pass.md` | THE content writing/review prompt. Context block, 7-phase review. |
| `Prompts/Prompts-By-Phase/3-content-pass/pack-guide.md` | Pre-flight for content pass |
| `Prompts/Prompts-By-Phase/2-structure-audit/structure-audit.md` | Structure audit: KEEP/MOVE/MERGE/SPLIT/REWRITE/DROP |
| `Prompts/Prompts-By-Phase/4-layout-pass/layout-pass.md` | Layout pass: component mapping, MDX |
| `Prompts/Prompts-By-Phase/7-veracity-pass/veracity-pass.md` | Veracity pass: claim flagging, resolution |
| `Prompts/Good prompt references/PHASE: PAGE CONTENT.md` | General-purpose IA research + page definition prompt |
| `Prompts/Good prompt references/docs-content-placement-prompt.md` | Content placement within fixed IA |
| `Prompts/docs-review-prompt-tiers.md` | Review tiers: Tier 1 (batch), Tier 2 (section), Tier 3 (page) |

**Missing check:**

| # | Check | Pass criteria |
|---|---|---|
| 4.16 | Content pass context block completable | All fields in content-pass.md context block can be filled |

---

## TEMPLATES AND PAGE COMPOSITION (Category 5)

checks.mdx references component-layout-decisions.mdx but NOT the full template system:

| File | What it contains |
|---|---|
| `snippets/templates/page-classification.md` | Decision tree for 7 pageTypes with component palettes, word ranges, time targets |
| `snippets/templates/section-patterns.md` | 13 section archetypes with ordering per pageType |
| `snippets/templates/pages/gold-standard-templates/` | 7 templates (concept, guide, instruction, navigation, reference, resource, tutorial) |
| `snippets/templates/pages/gold-standard/` | 13 composable section blocks |
| `snippets/templates/pages/page-composition-framework.mdx` | Page composition rules |
| `snippets/templates/docs-guide/component-catalog-template.mdx` | Component catalog template |

**Missing checks:**

| # | Check | Pass criteria |
|---|---|---|
| 5.11 | Page follows gold-standard template | Structure matches `gold-standard-templates/{pageType}-template.mdx` |
| 5.12 | Section blocks from gold-standard library | Sections composed from `gold-standard/` blocks |
| 5.13 | Section ordering matches pageType | Order follows `section-patterns.md` rules |
| 5.14 | Multi-view layout rules respected | Tabs/Views nesting hierarchy correct |
| 5.15 | Data imports used, not hardcoded | Contract addresses, CLI flags, protocol params from snippets/data/ |
| 5.16 | Related Pages footer or Next Step CTA present | Non-navigation pages end with routing |

---

## COMPONENT GOVERNANCE (Category 5)

Entire COMPONENT-GOVERNANCE plan folder exists with 14 files:

| File | What it contains |
|---|---|
| `component-framework-canonical.md` | Component taxonomy, JSDoc standards, naming |
| `catalog.md` | Component catalog |
| `frameworks/jsdoc-reference.md` | JSDoc tag reference |
| `audits/component-naming-audit-2026-04-08.md` | Naming audit |
| `audits/component-docs.md` | Component documentation audit |
| `audits/pipeline-audit.md` | Pipeline audit |

---

## DOCS-GUIDE POLICIES (Category 5, 7, 9)

17 policy files exist. checks.mdx references a few but not all:

**Referenced:**
- v2-folder-governance.mdx
- component-layout-decisions.mdx
- quality-gates.mdx
- snippets-assets-policy.mdx
- workspace-lifecycle-policy.mdx

**NOT referenced:**
| File | What it governs |
|---|---|
| `agent-governance-framework.mdx` | Agent behaviour rules |
| `audit-system-overview.mdx` | Audit system design |
| `cleanup-quarantine-policy.mdx` | Cleanup and quarantine rules |
| `docs-guide-structure-policy.mdx` | Docs-guide folder structure |
| `generated-artifact-and-hook-governance.mdx` | Generated files and hooks |
| `governance-index.mdx` | Master governance index |
| `infrastructure-principles.mdx` | Infrastructure design principles |
| `ownerless-governance.mdx` | Ownerless repo governance |
| `root-allowlist-governance.mdx` | Root file allowlist |
| `script-governance.mdx` | Script governance |
| `skill-pipeline-map.mdx` | Skill to pipeline mapping |
| `source-of-truth-policy.mdx` | Source of truth designation |

---

## DOCS-GUIDE STANDARDS (Category 2, 3, 5)

5 standards files exist, none referenced in checks.mdx:

| File | What it standardises |
|---|---|
| `authoring-standard.mdx` | Authoring standards |
| `frontmatter.mdx` | Frontmatter standard |
| `naming-conventions.mdx` | Naming conventions |
| `voice-and-copy.mdx` | Voice and copy standard |
| `voice-rules.mdx` | Voice rules standard |

---

## AI SKILLS (31 skills, 0 referenced)

| Skill | Relevant to |
|---|---|
| `content-pipeline-pass-a` | Cat 2, 4, 6 |
| `content-pipeline-pass-b` | Cat 5 |
| `content-pipeline-tab-map` | Cat 7 |
| `docs-copy` (8 sub-skills: copy-rules, persona-routing, structure-rules, value-prop-check, review-gate, pattern-observer, iteration-diagnostic, skill-docs) | Cat 2 |
| `docs-quality-and-freshness-audit` | Cat 4, 8 |
| `docs-coverage-and-route-integrity-audit` | Cat 7, 8 |
| `rubric-static-review` | Cat 2, 3, 4 |
| `docs-review-packet-generation` | Cat 9 |
| `docs-review-fix-execution` | Cat 9 |
| `page-authoring` | Cat 1, 4, 5 |
| `style-and-language-homogenizer-en-gb` | Cat 2 |
| `component-layout-governance` | Cat 5 |
| `repo-audit-orchestrator` | All |
| `product-thinking` | Cat 4, 10 |
| `cleanup-quarantine-manager` | Cat 7 |
| `generated-mdx-banners-governance` | Cat 5 |

---

## MY-PROCESS.mdx MAPPING

my-process.mdx defines 9 phases. Each phase should map to specific checks:

| Phase | What it does | checks.mdx categories |
|---|---|---|
| 00: Audience & Persona | Define who the tab serves | Cat 10 (completeness) |
| 01: Research & Gap Analysis | Inventory + structure audit | Cat 7 (navigation), Cat 10 |
| 02: Content Gathering | Source material collection | Cat 6 (veracity) |
| 03: IA Structure | Map pages to positions | Cat 4 (structure), Cat 7 (navigation) |
| 04: Page Briefs | Entry/exit states, sections, sources | Cat 4 (structure) |
| 05: Journey Validation | Persona paths unblocked | Cat 10 (completeness) |
| 06: Copy & Voice | Content writing + voice enforcement | Cat 2 (voice), Cat 3 (naming) |
| 07: Veracity | Claim verification | Cat 6 (veracity) |
| 08: Layout & Style | MDX components, frontmatter, render | Cat 1 (frontmatter), Cat 5 (layout), Cat 8 (links) |

**What this means:** every checks.mdx category should reference which my-process phase produces its input and which phase catches its failures. Currently checks.mdx and my-process.mdx are disconnected.

---

## GRAND TOTAL

| Dimension | Original checks.mdx | After full audit |
|---|---|---|
| **Checks** | 81 | **119** |
| **Categories** | 9 | **10** |
| **Framework/tool references** | ~22 | **60+** |
| **Skills referenced** | 0 | **16** |
| **Policy files referenced** | 5 | **17** |
| **Standards files referenced** | 0 | **5** |
| **Template files referenced** | 0 | **20+** |
| **Terminology files referenced** | 1 | **25+** |
| **Naming files referenced** | 1 | **8** |
| **Content methodology files referenced** | 1 | **7** |
| **my-process.mdx phases mapped** | 0 | **9** |
