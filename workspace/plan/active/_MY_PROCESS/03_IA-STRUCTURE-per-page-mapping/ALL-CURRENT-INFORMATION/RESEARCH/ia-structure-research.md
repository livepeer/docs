AIM: consolidate all IA layout, framework, section structure, page composition, and folder governance definitions found in the repo.

# ALL FILES

| Name | Location | Category | Status |
|------|----------|----------|--------|
| 08a-ia-per-tab.md | `CONTENT-WRITING/Prompts/Previous Prompts Used/derive-ia/` | IA Structure, Section Vocabulary | **LOCKED** |
| v2-folder-governance.mdx | `docs-guide/policies/` | Folder Governance | **LOCKED** |
| page-taxonomy-framework.mdx | `docs-guide/frameworks/` | Page Taxonomy | Published |
| page-composition-framework.mdx | `docs-guide/frameworks/` | Page Composition | Published |
| content-system.mdx | `docs-guide/frameworks/` | Content System | Published |
| 01_03-IA-Structure-and-Purpose/index.md | `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/` | IA Structure | Design Spec |
| 02_04-IA-Journey-Derived-IA/index.md | `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/` | Journey-Derived IA | Design Spec |
| 03_05-IA-Blueprint/index.md | `docs-guide/_workspace/02_Design-Specification/03_IA-Framework/` | IA Blueprint | Design Spec |
| 01_06-Page-Taxonomy/index.md | `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/` | Page Taxonomy | Design Spec |
| 02_07-Content-Taxonomy-Semantic-UI/index.md | `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/` | Content Taxonomy | Design Spec |
| 03_08-Composable-Content-Guide/index.md | `docs-guide/_workspace/02_Design-Specification/04_UX-Framework-&-Taxonomy/` | Composable Content | Design Spec |
| pageType.md | `CONTENT-WRITING/Frameworks/` | Page Taxonomy | Framework |
| pagePurpose.md | `CONTENT-WRITING/Frameworks/` | Page Purpose | Framework |
| complexity.md | `CONTENT-WRITING/Frameworks/` | Complexity | Framework |
| content-pipeline-framework.md | `CONTENT-WRITING/Frameworks/` | Content Pipeline | Framework |
| frontmatter-taxonomy-update.md | `CONTENT-WRITING/Frameworks/` | Frontmatter Schema | Ready to implement |
| framework-index-canonical.md | `CONTENT-WRITING/` | Index | Index |
| section-naming.md | `CONTENT-WRITING/Prompts/` | Section Naming | Rules |
| orchestrators-ia-map.md | `CONTENT-WRITING/Prompts/Previous Prompts Used/derive-ia/` | Per-Tab IA (gold standard) | Draft |
| gateways-IA.md | `ORCHESTRATOR-CONTENT-WRITING/` | Per-Tab IA | **LOCKED for writing** |
| IA.mdx | `v2/orchestrators/_workspace/canonical/` | Per-Tab IA (93 pages mapped) | Draft |
| IA.mdx | `v2/solutions/_workspace/canonical/` | Per-Tab IA | Minimal sketch |
| site-map.md | `CONTENT-WRITING/Prompts/Previous Prompts Used/site-map/` | Site-wide IA | Reviewed |
| 00-NEW-tab-ownership-map.md | `_MY_PROCESS/.../FULL-FILES/` | Tab Ownership | Current |
| structure-audit.md | `CONTENT-WRITING/Prompts/Prompts-By-Phase/2-structure-audit/` | Structure Audit Methodology | Methodology |
| 03-tab-map.md | `CONTENTI-PIPLEINE/` | Content Pipeline Tab Map | Orchestrators |
| docs.json | repo root | Navigation Config | Live |
| docs-orch-work.json | `tools/config/scoped-navigation/` | Scoped Nav (Orchestrators) | Live |
| docs-gate-work.json | `tools/config/scoped-navigation/` | Scoped Nav (Gateways) | Live |
| docs-gate-orch.json | `tools/config/scoped-navigation/` | Scoped Nav (Combined) | Live |
| docs-solutions.json | `tools/config/scoped-navigation/` | Scoped Nav (Solutions) | Live |

---

# 1. CANONICAL SECTION VOCABULARY (LOCKED)

**Source**: 08a-ia-per-tab.md
**Applies to**: All full-stack tabs (Gateways, Orchestrators, Developers, LP Token)

| Position | Folder/File | Canonical name | pageType | pageVariant | Notes |
|---|---|---|---|---|---|
| 1 — root | `portal.mdx` | portal | `navigation` | `portal` | Tab entry point with hero |
| 1 — root | `navigator.mdx` | navigator | `navigation` | `landing` | Secondary nav/routing page |
| 2 — concepts | `concepts/` | concepts | `concept` | `overview` for entry page | Orientation + architecture |
| 3 — quickstart | `quickstart/` or `quickstart.mdx` | quickstart | `instruction` | `quickstart` | Fastest path to first success |
| 4 — setup | `setup/` | setup | `instruction` | `setup` | Full installation + configuration |
| 5 — guides | `guides/` | guides | `guide` | `overview` for entry page | Practical understanding; operational phase |
| 5a — tutorials | `guides/tutorials/` | tutorials | `tutorial` | (none) | Tab-specific tutorials INSIDE `guides/`, NOT `resources/` |
| 6 — resources | `resources/` | resources | — | — | Container section — sub-sections below |

### Resources sub-structure

**Source**: 08a-ia-per-tab.md (locked definition) + user correction (April 2026)

The canonical definition in 08a defines two sub-sections. The actual pattern across the repo uses FOUR:

| Sub-section | Folder | pageType | pageVariant | What it contains |
|---|---|---|---|---|
| **root** | `resources/` (flat files) | `reference` | — | Glossary, FAQ — the most commonly looked-up reference items |
| **knowledge-hub** | `resources/knowledge-hub/` | `resource` | `knowledge-hub` | Guides, other resources, troubleshooting — curated external/public content |
| **compendium** | `resources/compendium/` | `reference` | `compendium` | Other developer reference (exchanges, RPCs, CLI) — structured data lookups |
| **reference** | `resources/reference/` | `reference` | `specification` | Technical reference (APIs, strictly technical specs) — formal specifications |

**Note**: The 08a-ia-per-tab.md locked definition only specifies `resources/reference/` and `resources/knowledge-hub/`. The `compendium/` pattern exists in every tab already (glossary-data.json + glossary.mdx minimum). The four-part structure above reflects the actual repo-wide pattern and the user's canonical intent.

### Rules

- Positions 1–3 are **LINEAR** for first-time readers
- Positions 4–6 are **ON-DEMAND** (reference, return visits)
- `tutorials/` lives INSIDE `guides/` — not in `resources/`
- `portal.mdx` and `navigator.mdx` are publishable section root files — NOT workspace files

---

# 2. 6-POSITION STRUCTURAL PATTERN

**Source**: IA Structure and Purpose (Design Specification 03)

| Position | Purpose type | Journey phase | Reader state | Reader's question |
|---|---|---|---|---|
| 1 | landing | Entry | Just arrived at a tab | "Where do I go?" |
| 2 | concepts | Discovery (stages 1–2) | Orienting, evaluating | "What is this, how does it work, should I care?" |
| 3 | quickstart | Activation (stages 3–4) | Ready to try | "Get me to first success." |
| 4 | operational/how-to | Operational (stages 5+) | Active, specific task needed | "How do I do this one thing?" |
| 5 | guides/tools/advanced | Operational / deepening | Active, needs system understanding | "How does this work in practice?" |
| 6 | reference | Any (on-demand lookup) | Looking something up | "What's the exact detail / answer / spec?" |

**Positions 1–3 LINEAR.** **Positions 4–6 ON-DEMAND.**

---

# 3. FRONTMATTER TAXONOMY (Canonical Values)

**Source**: frontmatter-taxonomy-update.md — Ready to implement

### pageType (7 canonical values — replacing old 12)

```
navigation, concept, tutorial, guide, instruction, reference, resource
```

### purpose (15 canonical values)

```
orient, explain, choose, start, build, configure, operate, troubleshoot,
optimise, integrate, verify, evaluate, reference, learn, update
```

### lifecycleStage (7 values)

```
discover, evaluate, setup, build, operate, optimise, troubleshoot
```

### Deprecated aliases mapping

| Old pageType | New pageType |
|---|---|
| `landing` | `navigation` |
| `quickstart` | `instruction` |
| `how_to` | `instruction` |
| `faq` | `reference` |
| `troubleshooting` | `reference` |
| `changelog` | `reference` |
| `glossary` | `reference` |
| `overview` | `concept` |

| Old purpose | New purpose |
|---|---|
| `orientation` | `orient` |
| `concept` | `explain` |
| `evaluation` | `choose` |
| `tutorial` | `learn` |
| `setup` | `configure` |
| `how_to` | `build` |
| `operations` | `operate` |
| `decision` | `choose` |
| `troubleshooting` | `troubleshoot` |
| `landing` | `orient` |

---

# 4. FOLDER GOVERNANCE (LOCKED)

**Source**: v2-folder-governance.mdx

### Canonical lane model

| Lane | Path | Purpose |
|---|---|---|
| Publishable section root | `v2/<section>/index.mdx`, `portal.mdx`, `navigator.mdx` | Section entry points |
| Publishable content tree | `v2/<section>/<subtree>/...` | User-facing docs pages |
| Working lane | `v2/<section>/_workspace/` | Plans, research, reviews, drafts — NOT publishable |
| Retirement lane | `v2/<section>/x-deprecated/` | Pending redirect/migration/removal |
| Archive lane | `v2/x-archived/<section>/` | Frozen historical material |

### Section-root contract

Allowed publishable section-root files:
- `index.mdx`
- `portal.mdx`
- `navigator.mdx`

Section roots must NOT accumulate ad hoc planning notes, reports, or review files.

### _workspace/ contract

| Subfolder | Use |
|---|---|
| `notes/` | Loose planning notes, todo files |
| `plans/` | Active restructuring plans, execution plans |
| `research/` | Research notes, evidence packs, claim inventories |
| `research/sources/` | Source bundles, verification snapshots |
| `reviews/` | Review notes, critique passes |
| `drafts/` | Page-shaped prototypes not yet promoted |
| `handoff/` | Stakeholder or authoring handoff material |
| `context-data/` | Contextual data from external tools |
| `staging/` | Content under active evaluation |
| `archive/` | Retired pages. 90-day TTL |
| `deprecated/` | Previously publishable pages pending redirect |

---

# 5. PER-TAB PURPOSE SKELETONS

**Source**: IA Journey-Derived IA (Design Specification 04)

| Tab | Required purpose types | Stack type |
|---|---|---|
| Home | landing, overview | Custom (routing) |
| About | overview, reference (conceptual only) | Custom (non-task) |
| Solutions | landing, overview (signpost only) | Custom (product-focused) |
| Developers | landing, overview, quickstart (×2: AI + Video), how_to, guide, reference | **FULL STACK** |
| Gateways | landing, overview, quickstart, how_to, guide, reference | **FULL STACK** |
| Orchestrators | landing, overview, quickstart, how_to, guide, reference | **FULL STACK** |
| Delegators | landing, overview, quickstart, how_to, reference (no guide) | Lighter stack |
| Community | landing, overview, how_to, reference | Lighter stack |
| Resource Hub | reference only | Reference only |

---

# 6. REFERENCE PURPOSE TYPE — Full Definition

**Source**: IA Structure and Purpose (Design Specification 03)

**Job**: Provide lookup content. Everything the reader needs to look up on demand.

**Sub-types:**

| Sub-type | Contains | Examples |
|---|---|---|
| Technical spec | Parameters, flags, endpoints, CLI commands | Config flags, API reference, CLI reference |
| Non-technical ref | Addresses, links, ecosystem data | Blockchain contracts, ecosystem tools |
| FAQ | Common questions with direct answers | Gateway FAQ, About FAQ |
| Glossary | Term definitions with links to deeper content | Livepeer glossary |
| Troubleshooting | Symptom → cause → fix entries | Gateway troubleshooting |
| Changelog | Dated entries of what changed | Release notes |

**Assessment checklist:**
- Content structured for lookup (tables, accordions, lists — NOT prose)
- Searchable (parameter names, error messages, terms are findable)
- Each entry self-contained
- Links to related how-to or guide for context
- For FAQ: at least 5 real questions (from user queries, not padding)
- For troubleshooting: organised by symptom (what user SEES), not system cause
- For glossary: Livepeer-specific definitions, not generic
- For technical spec: accurate (flag for SME if unsure)

---

# 7. RESOURCES/ — ACTUAL CURRENT STRUCTURE PER TAB

### v2/orchestrators/resources/ ✅ Has canonical sub-folders

```
resources/
├── knowledge-hub/
│   ├── community-guides.mdx
│   └── community-pools.mdx
├── reference/
│   ├── arbitrum-exchanges.mdx
│   ├── arbitrum-rpc.mdx
│   ├── compendium/
│   │   ├── glossary-data.json
│   │   └── glossary.mdx
│   ├── faq.mdx
│   ├── glossary.mdx
│   ├── gpu-support.mdx
│   └── technical/
│       ├── cli-flags.mdx
│       ├── contract-addresses.mdx
│       ├── x-changelog.mdx
│       ├── x-support-status.mdx
│       └── x-troubleshooting.mdx
├── x-guides.mdx
├── x-help.mdx
└── x-payments.mdx
```

### v2/gateways/resources/ ✅ Has canonical sub-folders

```
resources/
├── knowledge-hub/
│   ├── guides.mdx
│   ├── help.mdx
│   └── resources.mdx
├── reference/
│   ├── arbitrum-exchanges.mdx
│   ├── arbitrum-rpc.mdx
│   ├── cli-commands.mdx
│   ├── compendium/
│   │   ├── glossary-data.json
│   │   └── glossary.mdx
│   ├── configuration-flags.mdx
│   ├── contract-addresses.mdx
│   ├── faq.mdx
│   ├── glossary.mdx
│   ├── go-livepeer/ (hardware-requirements, cli-reference, gpu-support, prometheus-metrics)
│   ├── livepeer-exchanges.mdx
│   ├── orchestrator-offerings.mdx
│   └── technical/
│       └── api-reference/ (AI-API/, AI-Worker/, CLI-HTTP/ — extensive)
└── technical-architecture.mdx
```

### v2/developers/resources/ ❌ Flat — no sub-folders

```
resources/
├── apis.mdx
├── awesome-livepeer.mdx
├── compendium/ (glossary-data.json, glossary.mdx)
├── deepwiki.mdx
├── example-applications.mdx
├── sdks.mdx
└── wiki.mdx
```

### v2/delegators/resources/ ❌ Flat

```
resources/
├── compendium/ (glossary-data.json, glossary.mdx)
├── delegator-videos-and-blogs.mdx
├── exchanges.mdx
└── lpt-eth-usage.mdx
```

### v2/about/resources/ ⚠️ Partial

```
resources/
├── compendium/ (glossary-data.json, glossary.mdx, livepeer-glossary.mdx)
├── gateways-vs-orchestrators.mdx
├── livepeer-contract-addresses.mdx + .json
├── livepeer-whitepaper.mdx
├── reference/ (empty)
└── technical-roadmap.mdx
```

### v2/community/resources/ ❌ Flat

```
resources/
├── awesome-livepeer.mdx
├── compendium/ (glossary-data.json, glossary.mdx)
├── dashboards.mdx
└── guides.mdx
```

### v2/solutions/resources/ — Minimal

```
resources/
└── compendium/ (glossary-data.json, glossary.mdx)
```

### v2/home/resources/ — Minimal

```
resources/
└── compendium/ (glossary-data.json, glossary.mdx)
```

### v2/resources/ (Resource Hub tab) — Largest, unique structure

```
resources/
├── portal.mdx, resources-portal.mdx, index.mdx, help-center.mdx
├── livepeer-glossary.mdx + .json
├── changelog/ (protocol/, ai-compute/, tooling/, apis-sdks/, ecosystem/)
├── compendium/ (glossary-data.json, glossary.mdx, media-kit.mdx)
├── concepts/ (brief-history-of-video, livepeer-101)
├── documentation-guide/ (ai-automations/, component-library/, contributing/, copy-style/, features/, tooling/)
├── references/ (contract-addresses.mdx)
├── lpt/ (delegator-dashboard.mdx)
└── resources/ (videos.mdx)
```

### Pattern summary

| Tab | reference/ | knowledge-hub/ | compendium/ | Status |
|---|---|---|---|---|
| Orchestrators | ✅ | ✅ | ✅ (inside reference/) | Canonical |
| Gateways | ✅ | ✅ | ✅ (inside reference/) | Canonical |
| Developers | ❌ | ❌ | ✅ (flat) | Needs reorganisation |
| Delegators | ❌ | ❌ | ✅ (flat) | Needs reorganisation |
| About | ⚠️ empty | ❌ | ✅ (flat) | Needs reorganisation |
| Community | ❌ | ❌ | ✅ (flat) | Needs reorganisation |
| Solutions | ❌ | ❌ | ✅ only | Minimal |
| Home | ❌ | ❌ | ✅ only | Minimal |
| Resource Hub | Custom structure | Custom | ✅ | Unique |

**Compendium exists in EVERY tab** — minimum: `glossary-data.json` + `glossary.mdx`.

---

# 8. RESOURCES/ — CORRECTED CANONICAL STRUCTURE

**Source**: User-defined canonical (April 2026) — supersedes 08a 2-part definition

```
resources/
├── glossary.mdx                    ← root: most commonly looked-up
├── faq.mdx                         ← root: most commonly looked-up
├── knowledge-hub/                  ← guides, other resources, troubleshooting
│   ├── guides.mdx
│   ├── troubleshooting.mdx
│   └── community-resources.mdx
├── compendium/                     ← other developer reference (exchanges, RPCs, CLI)
│   ├── glossary-data.json
│   ├── glossary.mdx
│   ├── exchanges.mdx
│   ├── arbitrum-rpc.mdx
│   └── cli-reference.mdx
└── reference/                      ← technical reference (APIs, strictly technical)
    ├── api-reference/
    ├── contract-addresses.mdx
    ├── configuration-flags.mdx
    └── prometheus-metrics.mdx
```

| Sub-section | What goes here | pageType |
|---|---|---|
| **root** (flat in resources/) | Glossary, FAQ — the most-accessed lookup items | `reference` |
| **knowledge-hub/** | Guides, other resources, troubleshooting — curated helpful content | `resource` |
| **compendium/** | Developer reference beyond API: exchanges, RPCs, CLI, ecosystem data | `reference` |
| **reference/** | Technical reference: APIs, formal specs, strictly technical content | `reference` |

---

# 9. PER-TAB IA MAPS (Locked/Draft)

## Gateways — LOCKED for content writing

**Source**: gateways-IA.md

13 sections, all with pageType/purpose/lifecycleStage:

| # | Section | pageType | purpose | lifecycleStage |
|---|---|---|---|---|
| S1 | Gateway Path Finder | `navigation` | `orient` | `evaluate` |
| S2 | What a Gateway Does | `concept` | `explain` | `discover` |
| S3 | Payments and Funding | `concept` | `explain` | `evaluate` |
| S4 | On-Chain Quickstart | `instruction` | `start` | `setup` |
| S5 | Off-Chain Quickstart | `instruction` | `start` | `setup` |
| S6 | Pricing and Cost Control | `guide` | `configure` | `build` |
| S7 | Orchestrator Selection | `guide` | `configure` | `build` |
| S8 | AI Pipeline Routing | `instruction` | `configure` | `build` |
| S9 | Dual Mode Configuration | `instruction` | `configure` | `build` |
| S10 | Payment Operations | `guide` | `operate` | `operate` |
| S11 | Running in Production | `guide` | `operate` | `operate` |
| S12 | Troubleshooting | `guide` | `troubleshoot` | `troubleshoot` |
| S13 | Gateway as a Platform (NaaP) | `guide` | `build` | `build` |

## Orchestrators — Draft (human review pending)

12-section canonical structure from 4-run synthesis. See ORCHESTATORS/index.md for full detail.

## Other tabs — See per-tab index.md files in `_MY_PROCESS/00_AUDIENCE-JOURNEY/ALL-CURRENT-INFORMATION/RESEARCH/`

---

# 10. TAB OWNERSHIP MATRIX

**Source**: 00-NEW-tab-ownership-map.md

| Tab | Owns | Does NOT own |
|---|---|---|
| **Home** | Vision, mission, ecosystem, evolution, roadmap, role-based routing | Role-specific task content |
| **About** | Protocol mechanics, actors, marketplace, job lifecycle, economics, governance, whitepaper | How-to content for any role |
| **Solutions** | Platform products (Daydream, Studio, Streamplace, etc.) | Protocol mechanics, node operation |
| **Developers** | Custom AI + video dev, BYOC, SDKs/APIs, opportunities/grants | Gateway/orchestrator operation |
| **Gateways** | Gateway operator concepts, setup, operations, business model, all 3 gateway types | App development, orchestrator operation |
| **Orchestrators** | Orchestrator concepts, setup, guides, hardware profiles | Gateway setup, app development |
| **Delegators** | LPT, delegation, governance participation, treasury, staking/earning | Protocol-level governance, node operation |
| **Community** | Contribution guidelines, events, participation paths, forums | Governance mechanics (→ LP Token), protocol governance (→ About) |
| **Resource Hub** | Cross-cutting reference: changelog, glossaries, docs guide, per-role indexes | Conceptual or task-oriented content |

**Self-containment principle**: Each tab authored for one audience assuming they will NOT visit other tabs. Intentional cross-tab duplication is correct and expected.

---

# 11. PAGE COUNT TARGETS

**Source**: IA Blueprint (Design Specification 05)

| Tab | Journey-derived target |
|---|---|
| Home | 4 |
| About | 7 |
| Developers | 14 |
| Solutions | ~22 |
| Gateways | 15 |
| Orchestrators | 12 |
| Delegators | 10 |
| Community | 6 |
| Resource Hub | 6 |
| **Total** | **~96** |

Down from 177 repo-contaminated count. Journey-first design produces ~45% fewer pages.

**Source**: site-map.md (earlier, higher estimates)

| Tab | Est. pages |
|---|---|
| Home | ~10 |
| About | ~22 |
| Solutions | ~50 |
| Developers | ~32 |
| Gateways | ~25 |
| Orchestrators | ~32 |
| Delegators | ~20 |
| Community | ~17 |
| Resource Hub | ~27 |

Two different estimates exist. The Blueprint (96 pages) is journey-derived. The site-map (~235 pages) is repo-derived. The Blueprint is the canonical target.

---

# 12. GUIDE SUBGROUP IA (Pilot Tabs)

**Source**: 08a-ia-per-tab.md

### Gateways guides/

| Subgroup | Primary pageType | lifecycleStage | Reader's question |
|---|---|---|---|
| `operator-considerations/` | `guide` | `evaluate` | Is operating a gateway right for me? |
| `deployment-details/` | `guide` + `instruction` | `setup` | How do I choose deployment approach? |
| `monitoring-and-tooling/` | `guide` | `operate` | How do I monitor and stay healthy? |
| `node-pipelines/` | `guide` + `instruction` | `build` | How do I configure for different job types? |
| `payments-and-pricing/` | `guide` | `operate` + `optimise` | How do payments work? How do I price? |
| `tutorials/` | `tutorial` | `setup` + `build` | End-to-end build and run |
| `advanced-operations/` | `guide` | `optimise` | How do I scale, harden, optimise? |
| `roadmap-and-funding/` | `guide` + `resource` | `operate` | What's coming and what funding exists? |

### Orchestrators guides/

| Subgroup | Primary pageType | lifecycleStage | Reader's question |
|---|---|---|---|
| `operator-considerations/` | `guide` | `evaluate` | Is running an orchestrator right for me? |
| `deployment-details/` | `guide` + `instruction` | `setup` | How do I choose deployment setup? |
| `ai-and-job-workloads/` | `guide` + `instruction` | `build` | How do I set up AI pipelines? |
| `config-and-optimisation/` | `guide` | `operate` + `optimise` | How do I tune for performance? |
| `monitoring-and-tooling/` | `guide` | `operate` | How do I monitor? |
| `staking-and-rewards/` | `guide` | `operate` + `optimise` | How does staking work? Maximise earnings? |
| `payments-and-pricing/` | `guide` | `operate` | How do payments work? |
| `advanced-operations/` | `guide` | `optimise` | Advanced node operations |
| `roadmap-and-funding/` | `guide` + `resource` | `operate` | What's coming and what funding? |
| `tutorials/` | `tutorial` | `setup` + `build` | Tab-specific tutorials |

---

# 13. CURRENT TAB IA ALIGNMENT STATUS

| Tab | Alignment | Key issue |
|---|---|---|
| **Orchestrators** | ✅ Reference template | Most complete canonical IA. No structural changes needed. |
| **Gateways** | ✅ Close | Minor `resources/` reorganisation needed |
| **Developers** | 🔴 Most problematic | Missing proper portal, quickstart scattered in `get-started/`, no `setup/`, guides mix types, `technical-references/` duplicates `resources/` |
| **Delegators** | ⚠️ Missing pieces | No proper portal (token-portal.mdx doesn't match spec), no quickstart section |
| **About** | ⚠️ Custom IA correct | Non-task tab — no quickstart/setup/guides needed |
| **Home** | ⚠️ Custom IA correct | Routing/orientation tab |
| **Community** | ⚠️ Lighter stack | Custom IA correct — community/, connect/, contribute/ |
| **Solutions** | ⚠️ Product-focused | Custom IA correct — per-product sections |
| **Resource Hub** | ⚠️ Reference-only | Unique structure: changelog/, documentation-guide/, compendium/ |

---

# OPEN ITEMS

1. **Resources 4-part structure** — The locked 08a definition specifies 2 sub-sections (reference/ + knowledge-hub/). The actual repo pattern and user intent has 4 (root, knowledge-hub/, compendium/, reference/). This needs to be reconciled — either update 08a or confirm the 4-part structure as the new canonical.
2. **Page count discrepancy** — Blueprint says ~96, site-map says ~235. Which is the target?
3. **Developers tab IA** — Most misaligned tab. Needs structural redesign to match canonical vocabulary.
4. **Delegators portal** — token-portal.mdx does not match canonical portal spec.
5. **Resources reorganisation** — Step 21 pipeline output. Not blocking but 6 tabs need sub-folder reorganisation.
