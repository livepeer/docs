# checks.mdx Complete Audit

> Full audit of checks.mdx against ALL repo infrastructure: CONTENT-WRITING/, docs-guide/, COMPONENT-GOVERNANCE/, snippets/templates/, ai-tools/ai-skills/, TERMINOLOGY-COLLATE/, and _MY_PROCESS/
>
> Original: 81 checks, 9 categories, ~22 references
> After audit: **119 checks, 10 categories, 60+ references**

---

## WHAT checks.mdx ALREADY COVERS WELL

1. Frontmatter & Taxonomy (13 checks)
2. Voice & Copy (11 checks)
3. Section Naming & Headings (7 checks + rubric)
4. Page Structure & Content Architecture (10 checks)
5. Layout, Components & Template (10 checks + matrix)
6. Veracity & Factual Accuracy (9 checks + standards table)
7. Navigation & IA (9 checks)
8. Links & Rendering (6 checks)
9. Process & Governance (6 checks)

---

## ALL NEW CHECKS NEEDED

### Category 2: VOICE & COPY (+11 new = 22 total)

| # | Check | Pass criteria | Source |
|---|---|---|---|
| 2.12 | **No em-dashes** | Zero em-dashes in MDX. Use comma, semicolon, colon, or rewrite. | Hook enforcement in repo |
| 2.13 | **Entity-led voice throughout** | Every paragraph starts with system fact or reader outcome. Never "we", "our", "you will learn". | Exemplar analysis |
| 2.14 | **No hedging verbs in value claims** | No "can help", "allows you to", "enables you to", "helps you". Assert directly. | page-quality-gate.sh check 9 |
| 2.15 | **Description not self-referential** | Frontmatter `description` does not start with "This page/section/document describes/explains/outlines/covers/walks" | page-quality-gate.sh check 5 |
| 2.16 | **Deprecated terms absent** | Zero: "Broadcaster" (use Gateway), "Pool worker" (use Pool node), "Combined mode" (use Dual mode), "Hybrid" (use Dual mode), "Transcoder" as Orchestrator synonym | deprecated-terms.md |
| 2.17 | **Universal terms consistent** | Orchestrator, Gateway, Delegator, LPT, Transcoding, Staking match universal-terms.md canonical definitions | universal-terms.md |
| 2.18 | **Spell check passes** | cspell against `tools/config/cspell.json`. Zero unknown words. | style-language.md |
| 2.19 | **Terms match TERMINOLOGY-COLLATE canonical** | Every Livepeer-specific term matches `TERMINOLOGY-COLLATE/consolidated/glossary-*.md` | TERMINOLOGY-COLLATE |
| 2.20 | **Per-tab terminology correct** | Uses terms from correct tab per `TERMINOLOGY-COLLATE/per-tab/glossary-{tab}.md` | TERMINOLOGY-COLLATE/per-tab |
| 2.21 | **First use of specialised term defined or linked** | Reader never encounters undefined Livepeer-specific term | Content-pass methodology |
| 2.22 | **Terminology lock respected** | If tab has lock (`03.5-terminology-lock.md` or `_workspace/canonical/review/06-terminology.md`), all locked terms used exactly as defined | Per-tab terminology files |

### Category 3: SECTION NAMING & HEADINGS (+3 new = 10 total)

| # | Check | Pass criteria | Source |
|---|---|---|---|
| 3.8 | **Per-pageType naming style applied** | reference=findability, concept=governing-concept, instruction=task-oriented, navigation=map language | section-naming.md |
| 3.9 | **Per-audience register in headings** | developer=technical, delegator=finance, community=accessible | section-naming.md |
| 3.10 | **Domain-anchor rule applied** | Heading includes domain noun when needed for isolation interpretation | section-naming.md, naming-research.md |

### Category 4: PAGE STRUCTURE (+6 new = 16 total)

| # | Check | Pass criteria | Source |
|---|---|---|---|
| 4.11 | **Page answers its question COMPLETELY (Discord test)** | Can you link this ONE page on Discord and know the person gets a complete answer? If no, page is incomplete. | Session core finding |
| 4.12 | **Page size appropriate for scope** | Concept/guide: min 5KB. Under 2KB = stub, remove from nav. Gold standard: 10-60KB. | Size analysis |
| 4.13 | **No TODO/REVIEW without tracking** | Zero `{/* TODO` in published. Zero `{/* REVIEW` without tracking issue. | page-quality-gate.sh |
| 4.14 | **Flat layout where appropriate** | Rich flat pages (tabs/accordions) over sub-folders. Sub-pages only for separate journeys. | "Actors should be flat" directive |
| 4.15 | **Trade-offs present** | Every concept/economics/architecture page names at least one trade-off or limitation. | TAB-COMPLETION-FRAMEWORK U6 |
| 4.16 | **Content pass context block completable** | All 15 fields in content-pass.md context block fillable. If any can't be filled, page position is undefined. | content-pass.md |

### Category 5: LAYOUT & COMPONENTS (+6 new = 16 total)

| # | Check | Pass criteria | Source |
|---|---|---|---|
| 5.11 | **Page follows gold-standard template** | Structure matches `snippets/templates/pages/gold-standard-templates/{pageType}-template.mdx` | Gold-standard templates |
| 5.12 | **Section blocks from gold-standard library** | Sections use blocks from `snippets/templates/pages/gold-standard/` | Section blocks |
| 5.13 | **Section ordering matches pageType** | Order follows `snippets/templates/section-patterns.md` | Section patterns |
| 5.14 | **Multi-view layout rules respected** | 1 dim=Tabs, 2=Views->Tabs, 3=Views->Tabs->Tabs, 4+=split pages. Steps never in Accordions. Tabs never in Steps. | page-classification.md |
| 5.15 | **Data imports used, not hardcoded** | Contract addresses, CLI flags, protocol params from `snippets/data/`. Never hardcoded in prose. | Gold-standard pages |
| 5.16 | **Related Pages or Next Step CTA present** | Non-navigation pages end with CardGroup (Related Pages) or Card (Next Step). Never both. 2-3 cards max. | section-patterns.md |

### Category 6: VERACITY (+2 new = 11 total)

| # | Check | Pass criteria | Source |
|---|---|---|---|
| 6.10 | **Source authority tiers respected** | Factual=T1 primary. Technical=tagged releases. Procedural=live system tested. No T3-only claims. | accuracy-sources.md |
| 6.11 | **Glossary definitions match universal terms** | Tab glossary definitions match `universal-terms.md` canonical. No cross-tab conflicts. | universal-terms.md + in-repo-glossaries.md |

### Category 7: NAVIGATION & IA (+2 new = 11 total)

| # | Check | Pass criteria | Source |
|---|---|---|---|
| 7.10 | **No stubs in published nav** | Every page in docs.json >2KB substantive. Under 2KB = expand or remove from nav. | TAB-COMPLETION-FRAMEWORK U1 |
| 7.11 | **Guides section serves secondary personas** | guides/ covers edge cases, secondary journeys, evaluation, depth outside main sections. | "Guides gives everything else" directive |

### NEW Category 10: CONTENT COMPLETENESS (5 checks)

| # | Check | Pass criteria | Source |
|---|---|---|---|
| 10.1 | **Every question has a page** | Cross-ref `_workspace/canonical/review/03-jobs.md`. Every job maps to a page. | First-principles sitemap |
| 10.2 | **Zero-to-hero journey complete** | Reader with zero knowledge completes full journey without leaving tab (except deliberate handoffs). | FIRST-PRINCIPLES-SITEMAP success criteria |
| 10.3 | **All persona paths unblocked** | Cross-ref `_workspace/canonical/review/07-path-validation.md`. No dead ends. | Per-tab review files |
| 10.4 | **Scope boundaries explicit** | What tab does NOT cover is stated with links to correct tab. | TAB-COMPLETION-FRAMEWORK U7 |
| 10.5 | **Self-containment holds** | Tab readable without other tabs. If gateway op needs orchestrator selection info, it's IN Gateways. | Site-map ownership |

### Category 9: PROCESS (3 updates)

| # | Update | What changes |
|---|---|---|
| 9.3 | Gate prerequisites | Update from old pipeline phases to review files (01-07) |
| 9.4 | Phase ordering | Reference `_MY_PROCESS/` RUNBOOKs |
| 9.6 | Feedback routing | Also reference `_MY_PROCESS/FEEDBACK/RUNBOOK.md` |

---

## ALL INFRASTRUCTURE checks.mdx SHOULD REFERENCE

### NAMING (Category 3)

| File | What it is |
|---|---|
| `CONTENT-WRITING/Prompts/section-naming.md` | **LOCKED** naming rubric: label classes, per-pageType style, per-audience register |
| `CONTENT-WRITING/Prompts/Good prompt references/section-naming.md` | Reference version |
| `v2/_workspace/research/content-naming.md` | 687-line source research |
| `CONTENT-WRITING/Prompts/.../naming-research.md` | Index to research |
| `docs-guide/standards/naming-conventions.mdx` | Published naming conventions |
| `operations/scripts/validators/components/library/check-naming-conventions.js` | Automated check |

### TERMINOLOGY (Category 2)

| File | What it is |
|---|---|
| `TERMINOLOGY-COLLATE/consolidated/glossary-a-m.md` (118KB) | Master glossary A-M |
| `TERMINOLOGY-COLLATE/consolidated/glossary-n-z.md` (106KB) | Master glossary N-Z |
| `TERMINOLOGY-COLLATE/consolidated/glossary-index.md` (24KB) | Master index |
| `TERMINOLOGY-COLLATE/per-tab/glossary-{tab}.md` (9 files) | Per-tab terminology |
| `TERMINOLOGY-COLLATE/consolidated/veracity-sources.md` (58KB) | Source authority |
| `TERMINOLOGY-COLLATE/categories.md` (58KB) | By category |
| `TERMINOLOGY-COLLATE/classified-by-tag.md` (108KB) | By domain tag |
| `CONTENT-PIPLEINE/03.5-terminology-lock.md` | Pipeline terminology lock |
| `.../deprecated-terms.md` (consolidated + 9 per-tab) | Deprecated terms |
| `.../universal-terms.md` | Cross-tab canonical definitions |
| `decisions/terminology-tracking.md` | Cross-phase decisions |
| `operations/scripts/audits/content/reference/terminology-search.js` | Search tool |
| `operations/scripts/audits/content/reference/audit-glossary-gaps.js` | Gap auditor |
| `operations/scripts/generators/content/reference/generate-glossary.js` | Generator |
| `tools/config/cspell.json` | Spell check dictionary |
| `snippets/templates/pages/resources/compendium/glossary-*` (4 templates) | Glossary templates |

### CONTENT METHODOLOGY (Category 4, 9)

| File | What it does |
|---|---|
| `Prompts/Prompts-By-Phase/3-content-pass/content-pass.md` | Content writing/review prompt (context block + 7 phases) |
| `Prompts/Prompts-By-Phase/3-content-pass/pack-guide.md` | Pre-flight for content pass |
| `Prompts/Prompts-By-Phase/2-structure-audit/structure-audit.md` | KEEP/MOVE/MERGE/SPLIT/REWRITE/DROP |
| `Prompts/Prompts-By-Phase/4-layout-pass/layout-pass.md` | Component mapping, MDX |
| `Prompts/Prompts-By-Phase/7-veracity-pass/veracity-pass.md` | Claim flagging, resolution |
| `Prompts/Good prompt references/PHASE: PAGE CONTENT.md` | IA research + page definition prompt |
| `Prompts/Good prompt references/docs-content-placement-prompt.md` | Content placement in fixed IA |
| `Prompts/docs-review-prompt-tiers.md` | Tier 1/2/3 review methodology |

### TEMPLATES & PAGE COMPOSITION (Category 5)

| File | What it contains |
|---|---|
| `snippets/templates/page-classification.md` | Decision tree for 7 pageTypes |
| `snippets/templates/section-patterns.md` | 13 section archetypes + ordering |
| `snippets/templates/pages/gold-standard-templates/` | 7 pageType templates |
| `snippets/templates/pages/gold-standard/` | 13 composable section blocks |
| `snippets/templates/pages/page-composition-framework.mdx` | Composition rules |
| `Prompts/.../page-structure-rules.md` | Structural contracts per type |

### COMPONENT GOVERNANCE (Category 5)

| File | What it contains |
|---|---|
| `COMPONENT-GOVERNANCE/component-framework-canonical.md` | Taxonomy, JSDoc, naming |
| `COMPONENT-GOVERNANCE/catalog.md` | Component catalog |
| `COMPONENT-GOVERNANCE/frameworks/jsdoc-reference.md` | JSDoc reference |
| `COMPONENT-GOVERNANCE/audits/` | Naming + docs + pipeline audits |

### DOCS-GUIDE POLICIES (Category 5, 7, 9) — NOT referenced

| File | What it governs |
|---|---|
| `agent-governance-framework.mdx` | Agent behaviour |
| `audit-system-overview.mdx` | Audit system |
| `cleanup-quarantine-policy.mdx` | Cleanup rules |
| `docs-guide-structure-policy.mdx` | Docs-guide structure |
| `generated-artifact-and-hook-governance.mdx` | Generated files |
| `governance-index.mdx` | Master governance index |
| `infrastructure-principles.mdx` | Infrastructure design |
| `ownerless-governance.mdx` | Ownerless repos |
| `root-allowlist-governance.mdx` | Root file allowlist |
| `script-governance.mdx` | Script governance |
| `skill-pipeline-map.mdx` | Skill-to-pipeline map |
| `source-of-truth-policy.mdx` | Source of truth |

### DOCS-GUIDE STANDARDS (Category 2, 3, 5) — NOT referenced

| File | What it standardises |
|---|---|
| `authoring-standard.mdx` | Authoring |
| `frontmatter.mdx` | Frontmatter |
| `naming-conventions.mdx` | Naming |
| `voice-and-copy.mdx` | Voice and copy |
| `voice-rules.mdx` | Voice rules |

### VOICE & STYLE (Category 2)

| File | What it does |
|---|---|
| `Prompts/.../style-language.md` | Machine-readable style profile |
| `tools/config/style-language-profile-en-gb.json` | Automated style enforcement |
| `Prompts/.../copy-governance.md` | Rationale for bans |
| `Prompts/.../docs-philosophy-authoring.md` | Philosophy + authoring standards |
| `.../accuracy-sources.md` | Source validation framework |
| `.../in-repo-glossaries.md` | Glossary quality audit |
| `Frameworks/information-type.md` | 9 info types (determines structure per section) |
| `Frameworks/industry.md` | Industry field definition |
| `Frameworks/complexity.md` | Complexity calibration |

### AI SKILLS (0 referenced, 16 relevant)

| Skill | Category |
|---|---|
| `content-pipeline-pass-a` | 2, 4, 6 |
| `content-pipeline-pass-b` | 5 |
| `content-pipeline-tab-map` | 7 |
| `docs-copy` (+ 8 sub-skills) | 2 |
| `docs-quality-and-freshness-audit` | 4, 8 |
| `docs-coverage-and-route-integrity-audit` | 7, 8 |
| `rubric-static-review` | 2, 3, 4 |
| `docs-review-packet-generation` | 9 |
| `docs-review-fix-execution` | 9 |
| `page-authoring` | 1, 4, 5 |
| `style-and-language-homogenizer-en-gb` | 2 |
| `component-layout-governance` | 5 |
| `repo-audit-orchestrator` | All |
| `product-thinking` | 4, 10 |
| `cleanup-quarantine-manager` | 7 |
| `generated-mdx-banners-governance` | 5 |

### PIPELINE & COMPLETENESS (Category 10)

| File | What it does |
|---|---|
| `_MY_PROCESS/tools/page-quality-gate.sh` | 10-check quick enforcement |
| `_MY_PROCESS/EXEMPLARS/` | 4 annotated gold-standard pages |
| `v2/{tab}/_workspace/canonical/review/01-07` | Per-tab content design (78 files across 9 tabs) |
| `FIRST-PRINCIPLES-SITEMAP.md` | Zero-to-hero journeys per audience |
| `TAB-COMPLETION-FRAMEWORK.md` | Universal + tab-specific gates |
| `CODEX-CONTENT-BRIEFS-P1.md` | Ready-to-execute content briefs |

---

## MY-PROCESS.mdx PHASE-TO-CATEGORY MAPPING

| Phase | What it does | checks.mdx categories |
|---|---|---|
| 00: Audience & Persona | Define who the tab serves | Cat 10 |
| 01: Research & Gap Analysis | Inventory + structure audit | Cat 7, 10 |
| 02: Content Gathering | Source material | Cat 6 |
| 03: IA Structure | Pages to positions | Cat 4, 7 |
| 04: Page Briefs | Entry/exit, sections, sources | Cat 4 |
| 05: Journey Validation | Persona paths unblocked | Cat 10 |
| 06: Copy & Voice | Writing + voice enforcement | Cat 2, 3 |
| 07: Veracity | Claim verification | Cat 6 |
| 08: Layout & Style | MDX, frontmatter, render | Cat 1, 5, 8 |

---

## GRAND TOTAL

| Dimension | Original | After audit |
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
| **my-process phases mapped** | 0 | **9** |
