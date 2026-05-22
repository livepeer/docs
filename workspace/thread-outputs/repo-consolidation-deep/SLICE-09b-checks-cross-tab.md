# SLICE-09b — Checks Cross-Tab Audit

**Date:** 2026-05-19
**Scope:** 4 oversized `checks.mdx` files + supplementary orchestrators canonical (Frameworks, process, IA, REVIEW-REGISTRY, ia-data.json, script-plan.md, gap files, checks-remediation.mdx) + gateways cross-comparison.
**Mode:** Read-only audit. No writes outside this file.

---

## 0. Source inventory and basic metadata

| File | Bytes | Lines | mtime | Frontmatter present? | Em-dashes used? | H2 section count |
|---|---:|---:|---|---|---|---:|
| `v2/about/_workspace/canonical/checks.mdx` | 65,680 | 735 | 2026-05-18 19:32 | YES (12 fields incl. OG) | NO (en-dash used) | 14 |
| `v2/delegators/_workspace/canonical/checks.mdx` | 68,479 | 732 | 2026-05-18 19:32 | YES (12 fields incl. OG) | NO | 14 |
| `v2/developers1/_workspace/canonical/checks.mdx` | 66,260 | 723 | 2026-05-18 19:32 | YES (12 fields incl. OG) | NO | 14 |
| `v2/orchestrators/_workspace/canonical/checks.mdx` | 65,875 | 678 | 2026-05-18 19:33 | NO | YES (em-dashes throughout) | 14 |
| `v2/gateways/_workspace/canonical/checks.mdx` | 43,005 | 549 | 2026-05-18 19:32 | NO | YES | 13 |
| `v2/orchestrators/_workspace/canonical/Frameworks.mdx` | 40,318 | 903 | 2026-05-18 19:32 | NO | YES | many |
| `v2/orchestrators/_workspace/canonical/process.mdx` | 6,219 | 150 | 2026-05-18 19:33 | NO | YES | 6 |
| `v2/orchestrators/_workspace/canonical/IA.mdx` | 16,113 | 277 | 2026-05-18 19:33 | NO | NO | — (markdown table) |
| `v2/orchestrators/_workspace/canonical/ia-data.json` | 14,208 | 1 (JSON) | 2026-05-18 19:33 | — | — | — |
| `v2/orchestrators/_workspace/canonical/REVIEW-REGISTRY.md` | 41,307 | 740 | 2026-05-18 19:32 | NO | NO | many |
| `v2/orchestrators/_workspace/canonical/scripts/script-plan.md` | 249,947 | huge | 2026-05-18 19:33 | NO | YES | many |
| `v2/orchestrators/_workspace/canonical/check/checks-gap-content.md` | 30,506 | many | 2026-05-18 19:32 | NO | YES | 27 |
| `v2/orchestrators/_workspace/canonical/check/checks-gap-layout.md` | 41,990 | many | 2026-05-18 19:32 | NO | YES | 30 |
| `v2/orchestrators/_workspace/canonical/checks-remediation.mdx` | 32,235 | 311 | 2026-05-18 19:33 | YES (full incl. OG) | NO | many |

**Drift signal #0 (immediate):** about/delegators/developers1 `checks.mdx` files SHIP WITH FULL FRONTMATTER and no em-dashes. orchestrators/gateways `checks.mdx` and Frameworks.mdx ship WITHOUT FRONTMATTER and USE EM-DASHES THROUGHOUT. Per `.claude/CLAUDE.md` the em-dash ban is hook-enforced. The about/delegators/developers1 checks.mdx files are the newer, conformant artefacts — orchestrators and gateways are the legacy seed.

**Drift signal #1 (immediate):** orchestrators canonical and gateways canonical are byte-identical for `Frameworks.mdx`, `process.mdx`, `IA.mdx`, `ia-data.json` (zero-line diff). The "gateways canonical" reference set is not gateway-specific; it's a copy of orchestrators. The `checks.mdx` files diverge by only 218 lines (out of ~1320 combined) — orchestrators added "Category 10 CONTENT COMPLETENESS"; gateways stops at 9. **Gateways IA.mdx, ia-data.json, and Frameworks.mdx do not describe gateways IA or gateway-specific terminology — they describe orchestrators.**

**Drift signal #2 (immediate):** Among the four "supplementary" canonical artefacts, only `orchestrators/_workspace/canonical/` has them. The about/delegators/developers1 `_workspace/canonical/` folders contain only `checks.mdx` and `review/` subfolder. The Frameworks/process/IA reference is **shared by reference**, not duplicated per tab — yet the duplication exists in gateways. This is incoherent.

---

## 1. Per-tab `checks.mdx` deep contents

All five tabs use the same 9-category top-level structure (Cat 1 to Cat 9). orchestrators, gateways, about, delegators, developers1 all share this skeleton:

```
1. FRONTMATTER & TAXONOMY
2. VOICE & COPY
3. SECTION NAMING & HEADINGS
4. PAGE STRUCTURE & CONTENT ARCHITECTURE
5. LAYOUT, COMPONENTS & TEMPLATE
6. VERACITY & FACTUAL ACCURACY
7. NAVIGATION & INFORMATION ARCHITECTURE
8. LINKS & RENDERING
9. PROCESS & GOVERNANCE
+ REVIEW EXECUTION GUIDE / MANDATORY REPORT FORMAT / REPORTING RULES / SEVERITY DEFINITIONS / FINDINGS
```

orchestrators, about, delegators, developers1 each also have a **Category 10**:
- orchestrators: `10. CONTENT COMPLETENESS` (5 checks, no tab-specific suffix)
- about: `10. CONTENT COMPLETENESS` (6 checks, About-tab persona-specific)
- delegators: `10. CONTENT COMPLETENESS` (9 checks, Delegators-specific incl. CEX/fiat/claimEarnings/vote-detachment)
- developers1: `10. CONTENT COMPLETENESS` (7 checks, Developers-specific incl. language-path completeness)

**gateways stops at Cat 9.** This is a content gap: gateways completeness has no published gate.

### 1.1 orchestrators/checks.mdx — structure

Title: `Per-Page Quality Checks — Canonical Reference` (no `#1` markdown anchor). No frontmatter. Em-dashes throughout. This is the **seed** for every other tab.

| Cat | Title | Checks (count) | Distinguishing features |
|---|---|---|---|
| 1 | FRONTMATTER & TAXONOMY | 13 | Generic — no orchestrator-specific frontmatter rule |
| 2 | VOICE & COPY | 22 | Generic universal; no orchestrator-register sub-checks |
| 3 | SECTION NAMING & HEADINGS | 10 | Generic |
| 4 | PAGE STRUCTURE | 16 | Generic |
| 5 | LAYOUT, COMPONENTS & TEMPLATE | 34 | Generic — Component matrix table at end |
| 6 | VERACITY | 12 | Generic |
| 7 | NAVIGATION & IA | 11 | Generic |
| 8 | LINKS & RENDERING | 6 | Generic |
| 9 | PROCESS & GOVERNANCE | 6 | Generic |
| 10 | CONTENT COMPLETENESS | 5 | Generic — references `_workspace/canonical/review/03-jobs.md` and `07-path-validation.md` |

References tab-specific files via the generic placeholder `v2/{tab}/_workspace/canonical/review/01-07`. The orchestrators checks.mdx is **NOT orchestrator-specific** — it is the universal seed. There are no orchestrator-register voice extensions, no orchestrator-specific structural checks (e.g. earning examples, GPU hardware), no orchestrator-specific report-format sections.

### 1.2 gateways/checks.mdx — structure

byte-identical to orchestrators **except Cat 10 is missing**. Same 9 categories, same universal voice rules, no gateway-register sub-checks, no gateway-specific structural rules (e.g. routing, ticket flow, off-chain selection). 549 lines (vs orchestrators 678) — the missing lines are exactly Cat 10. No frontmatter. Em-dashes throughout.

**gateways checks.mdx has no gateway-specific content. It is a stale copy of an earlier orchestrators snapshot.**

### 1.3 about/checks.mdx — structure

Frontmatter present (12 fields incl. OG image block); UK-conformant en-dashes; reads like a finished artefact. About-tab tailored:

| Cat | Checks (count) | About-tab additions |
|---|---|---|
| 1 | 14 | 1.14 Multi-audience flag (About-specific) |
| 2 | 22 universal + About-tab register extensions (community + founder) | Inclusive/peer-level community register; Founder executive-summary register; per-persona positive exemplars (`explorer`, `ambassador`, `engager`, `researcher`, `internal`); founder-specific prohibitions |
| 3 | 10 | Per-pageType naming style + per-audience register applied |
| 4 | 17 | 4.15 Trade-offs and "when not to use Livepeer" framing for founder pages; 4.17 Multi-audience handoff explicit (About-specific) |
| 5 | 34 | No About-specific component restrictions |
| 6 | 12 | Notes About-tab protocol-mechanic drift risk; references Explorer & LIPs |
| 7 | 11 | 7.6 Five cross-tab graduation paths must exist (LPT, Orch, Gw, Dev, Solutions); 7.11 Resources 4-bucket layout (FAQ/glossary, knowledge-hub, compendium, reference) |
| 8 | 6 | Generic |
| 9 | 6 | Generic |
| 10 | 6 | About-specific: five primary personas (Protocol Understander, Diligence Analyst, OSS Contributor, GPU Operator Candidate, Founder/Product Evaluator); multi-audience pathway complete |

References `v2/about/_design/ia-design.md` as the canonical About IA — that file is the source of truth, NOT IA.mdx in this canonical folder.

### 1.4 delegators/checks.mdx — structure

Frontmatter present; UK-conformant. Most tab-specialised of the five:

| Cat | Checks (count) | Delegators-tab additions |
|---|---|---|
| 1 | 14 | 1.14 Earnings/risk pages MUST use `industry` containing `finance` or `economics` |
| 2 | 22 universal + 7 delegator-register sub-checks (2.D1 to 2.D7) + 2 interface restrictions (2.D8 to 2.D9) | 2.D1 jargon discipline; 2.D2 plain-language economics; 2.D3 earnings dependency mandatory; 2.D4 no "set and forget"; 2.D5 concrete steps; 2.D6 decision support not avoidance; 2.D7 governance stakes before mechanism; 2.D8 NO CLI / shell / bash blocks; 2.D9 wallet flows in prose/StyledSteps not code |
| 3 | 10 | Per-audience finance/governance register |
| 4 | 19 | 4.17 Earnings dependency present (cross-ref 2.D3); 4.18 No "set and forget" on operational pages; 4.19 L1-stranded and CEX-buyer entry covered |
| 5 | 35 (one more than universal) | 5.35 No bash/shell code blocks; cross-ref 2.D8 with permitted exception list (contract addresses, function selectors, JSON RPC) |
| 6 | 12 | Stale protocol parameters, reward cut drift, treasury balance |
| 7 | 13 (two more) | 7.12 Bridge before Bond ordering enforced; 7.13 Technical References section present |
| 8 | 6 | Generic |
| 9 | 6 | Generic |
| 10 | 9 | 10.6 CEX-buyer entry; 10.7 Fiat-onramp coverage (LISAR SPE); 10.8 claimEarnings warning explicit; 10.9 Vote-detachment explained |

Adds two mandatory tab-specific report sections: **Earnings/Risk Audit table** and **CLI/Bash Audit table** (Delegators-specific).

### 1.5 developers1/checks.mdx — structure

Frontmatter present; UK-conformant. Code-first tab. Note: folder is `developers1`, NOT `developers` (route published is presumably `developers`; the canonical artefact lives under `developers1`).

| Cat | Checks (count) | Developers-tab additions |
|---|---|---|
| 1 | 14 | 1.14 Developer/builder split honoured — reclassification, not voice fix |
| 2 | 22 universal + 7 developer-register checks (2.D1 to 2.D7) + 8 builder-register checks (2.B1 to 2.B8) | Code-first opening for instruction/tutorial; function-named-in-prose must show code or link; versions stated current; error states in main content not Note; no marketing language; Note/Info not for primary; builder: integration value first; exact API endpoint named first; working code in most-likely language; full request/response shown; prerequisites explicit; no node-operator terminology without translation; no web3 mechanics assumed; no protocol-mechanics + integration-steps mixing |
| 3 | 10 | Per-audience developer/builder register |
| 4 | 20 (four more) | 4.17 Every code block has language tag; 4.18 Code-first opening (instruction/tutorial); 4.19 Error states in main content; 4.20 Function-named-in-prose has code or link |
| 5 | 34 | Component matrix lists `code block metadata: icon=tool, title=file/command context`; explicit guidance for language tabs (`js`, `python`, `golang`) |
| 6 | 12 | SDK version drift; removed/renamed APIs; ai-runner/ComfyStream/PyTrickle interface drift |
| 7 | 12 (one more) | 7.10 Stub list (`setup-paths.mdx`, `video-on-livepeer.mdx`, `video-quickstart.mdx`, `sdk-gateway.mdx`); 7.12 Guides section serves secondary personas |
| 8 | 6 | Generic |
| 9 | 6 | Generic |
| 10 | 7 | 10.6 Code samples have a working language path per persona (AI Builder = TS+Python; Video Dev = TS/JS; OSS = Go); 10.7 Persona-specific guides present |

Adds mandatory tab-specific report section: **Code Block Audit** table (`Line | Language tag? | Icon? | Title? | Tested?`).

Uses `<CustomDivider />` between H2 sections — the other four tabs do not (delegators/about/orch use `---`).

---

## 2. Cross-tab comparison table — per category

| Category | gateways says | orchestrators says | about says | delegators says | developers1 says | divergence notes |
|---|---|---|---|---|---|---|
| **Cat 1 — Frontmatter** | 13 checks, generic | 13 checks, generic | 14 checks (+1.14 multi-audience flag) | 14 checks (+1.14 earnings/risk industry tagging) | 14 checks (+1.14 developer/builder split) | All four tab-tailored adopt a 1.14 with different semantics; orch/gw still generic |
| **Cat 2 — Voice & Copy** | 22 universal, no per-audience extension on the page itself | 22 universal, references per-audience rules in Frameworks.mdx | 22 universal + community-register + founder-register extensions inline | 22 universal + 7 delegator-register checks (2.D1-7) + 2 interface restrictions (2.D8-9) | 22 universal + 7 developer-register checks + 8 builder-register checks | orch/gw treat per-audience as external; about/del/dev1 inline. Delegators and developers1 make register checks blocking with numbered sub-IDs |
| **Cat 3 — Section Naming** | 10 checks; rubric ≥20/25 | 10 checks; rubric ≥20/25 | 10 checks | 10 checks | 10 checks | Identical scope; per-audience register interpretation differs but the rule set is the same. `Related Pages` exempted everywhere. |
| **Cat 4 — Page Structure** | 16 checks | 16 checks | 17 checks (+4.17 multi-audience handoff inline) | 19 checks (+4.17 earnings dependency, 4.18 no set-and-forget, 4.19 L1/CEX entry) | 20 checks (+4.17 language tag, 4.18 code-first opening, 4.19 error states, 4.20 function-named must show code) | Tab-specific add-ons are blocking. Orch/gw missing four of these |
| **Cat 5 — Layout** | 34 checks; Component matrix table | 34 checks; Component matrix | 34 checks; Component matrix (About-focus pageTypes) | 35 checks (+5.35 no bash blocks) | 34 checks; explicit code-block icon/title rules | Delegators is the only tab to ban bash blocks at the layout layer (5.35) — orth/gw permit |
| **Cat 6 — Veracity** | 12 checks; tiered standards | 12 checks; tiered standards | 12 checks; Protocol/LIP drift focus | 12 checks; treasury/inflation/parameter drift focus | 12 checks; SDK/version drift focus | Identical scope; tab risk framing differs |
| **Cat 7 — Navigation** | 11 checks | 11 checks (+7.11 guides scope for secondary personas) | 11 checks (+7.11 resources 4-bucket layout for About) | 13 checks (+7.12 Bridge before Bond, +7.13 Technical References) | 12 checks (+7.10 stub list, +7.12 guides serves secondary personas) | Delegators is the only tab to mandate page-order constraint (Bridge before Bond). Developers1 explicitly enumerates known-stub list |
| **Cat 8 — Links & Rendering** | 6 checks | 6 checks | 6 checks | 6 checks | 6 checks | Universal — no divergence |
| **Cat 9 — Process** | 6 checks | 6 checks | 6 checks | 6 checks | 6 checks | Universal — no divergence |
| **Cat 10 — Content Completeness** | **MISSING** | 5 checks (generic) | 6 checks (5 personas mapped to graduation tabs) | 9 checks (CEX/fiat/claimEarnings/vote-detachment) | 7 checks (per-persona working language paths) | Gateways has no Cat 10 — completeness gate not defined for gateways tab |
| **Mandatory report sections — tab-specific** | None | None | Default 6 sections | Default 6 + Earnings/Risk Audit + CLI/Bash Audit | Default 6 + Code Block Audit | Tab-specific report tables block the report mode in del/dev1 |
| **Severity definitions** | CRITICAL/HIGH/MEDIUM/INFO (no LOW) | Same | Same | Same | Same | Universal |
| **Em-dash use IN the checks.mdx itself** | YES (violates Cat 2.12) | YES (violates Cat 2.12) | NO (uses ` – ` en-dash) | NO | NO | orch/gw violate their own rule |
| **Frontmatter present in checks.mdx itself** | NO | NO | YES (12 fields) | YES (12 fields) | YES (12 fields) | orch/gw fail their own Cat 1.1 |

---

## 3. Per-tab Frameworks.mdx, process.mdx, IA.mdx

### 3.1 Frameworks.mdx

**Existence:**
- `v2/orchestrators/_workspace/canonical/Frameworks.mdx` — present (40,318 bytes, 903 lines)
- `v2/gateways/_workspace/canonical/Frameworks.mdx` — present (40,318 bytes, byte-identical to orchestrators)
- `v2/about/_workspace/canonical/Frameworks.mdx` — DOES NOT EXIST
- `v2/delegators/_workspace/canonical/Frameworks.mdx` — DOES NOT EXIST
- `v2/developers1/_workspace/canonical/Frameworks.mdx` — DOES NOT EXIST

The about/delegators/developers1 checks.mdx files **reference** `v2/orchestrators/_workspace/canonical/Frameworks.mdx` directly as the canonical source. The orchestrators copy is treated as the single source of truth.

**Contents (universal):**

| Section | Content | Status |
|---|---|---|
| §1.1 pageType | 7 types: navigation, concept, tutorial, guide, instruction, reference, resource | Locked |
| §1.1 pageVariant | 7 variants: overview, specification, compendium, changelog, knowledge-hub, quickstart, troubleshooting | Locked |
| §1.1 Deprecated aliases | 8 → 7-type migration (landing→navigation, overview→migrate explicitly, how_to→instruction, quickstart→instruction+pageVariant, faq→reference+compendium, troubleshooting→instruction+troubleshooting, changelog→reference+changelog, glossary→reference+compendium) | Locked |
| §1.2 pagePurpose | 15 purposes: orient, explain, learn, choose, evaluate, start, build, configure, operate, troubleshoot, verify, integrate, optimise, reference, update | Locked |
| §1.2 Deprecated purpose aliases | 6 → 15 (orientation→orient, concept→explain, decision→choose, setup→configure, optimization→optimise, comparison→evaluate) | Locked |
| §1.3 Audience tokens | 7: founder, builder, developer, gateway, orchestrator, delegator, community | Locked |
| §1.3 Persona enumeration | community 5 personas; founder 3; builder 9; developer/gateway/orchestrator/delegator: **Pending definition** | Locked structure, content incomplete |
| §1.4 Industry tokens | 9 max 2 entries, first dominates | Locked |
| §1.4 Niche tokens | 8 tokens, cross-industry array | Locked |
| §1.5 Complexity | 3 values | Agreed (not Locked) |
| §1.5 Lifecycle Stage | 7 values, independent of purpose | Agreed |
| §1.6 Information type | 9 types (factual, conceptual, procedural, analytical, evaluative, structural, change, narrative, technical); **NOT a frontmatter field** — section-level only | Draft (the only Draft-status section) |
| §1.6 Purpose → InformationType mapping | All 15 purposes mapped to Primary + Secondary information-type sets | Draft |
| §1.7 veracityStatus | 3-value enum: verified, unverified, stale | Locked |
| §1.7 Veracity blocking rules | unverified/stale at Very High or High = blocks publication | Locked |
| §1.7 Standards per information type | 9-row table mapping informationType → standard, definition, sources | Locked |
| §2.1 Universal Voice Rules | Opening order, paragraph discipline, language, banned words/phrases/constructions | Locked |
| §2.2 Per-audience extensions | All 7 audience registers documented with Do/Don't/Prohibited phrases/Positive exemplars; community has persona-level exemplars | Locked |
| §2.3 UK English reference | 13-row US→UK correction table | Locked |
| §3.1 Banned words | 10 words with rationale | Locked |
| §3.2 Banned phrases | 17 phrases with rationale | Locked |
| §3.3 Voice Principles | Entity-led voice; Exit state over topic; Precision over breadth; No forward-looking uncertainty | Locked |
| §3.4 Deprecated role terms | 5 terms (Broadcaster→Gateway; Pool worker→Pool node; Combined mode→Dual mode; Hybrid→Dual mode; Transcoder = context-dependent) | Locked |
| §3.4 Conflicting definitions (resolved) | pageType, purpose, audience, "Network Participant", DePIN | Locked |
| §3.4 High-staleness terms | 7 terms requiring verification before use (Active set size, Unbonding period, Target bonding rate, Inflation adjustment rate, Treasury reward cut rate, AI pipelines, CLI flag names) | Locked |
| §4.1 Section Naming Rubric | 6 label classes, 5 dimensions × 5 points, ≥20/25 pass, 3-tier standalone heading registry, winner filter | Locked |
| §4.2 Page Structure Rules | Template per pageType; informationType → component mapping; cross-refs to component-layout-decisions.mdx, quality-gates.mdx, page-composition-framework.mdx | Locked |
| §4.3 Content Pipeline Architecture | Six-system architecture; 8 pipeline levels (L1 Site → L8 Sign-off); concerns separation; feedback loop | Active |
| §4.4 Definition of Good | Site/Tab/Section/Page bars | Active |
| §4.5 Veracity Source Library | 6 categories, 45 sources; usage rule | Complete |
| **Locked Enums quick reference** | Copy-paste block for frontmatter contexts | n/a |

**Cross-tab Framework comparison: are pageType enums, audience tokens consistent across tabs?**

Because Frameworks.mdx is **shared by reference** (only orchestrators + gateways carry a copy; gateways' copy is byte-identical to orchestrators), the enums ARE consistent — there is one source. **But**: the per-tab checks.mdx files **reference** the enums and apply them with different rigour:

| Enum | Orch/Gw checks.mdx | About checks.mdx | Delegators checks.mdx | Developers1 checks.mdx |
|---|---|---|---|---|
| pageType (7) | Cites without elaboration | Cites + lists About-tab expected mix (navigation, concept, resource, reference; instruction/tutorial rare) | Cites + lists Delegators-tab mix (concept, instruction, reference dominant; tutorial moderate) | Cites + lists Developers-tab mix (instruction, tutorial, reference dominant; concept/guide moderate) |
| audience (7) | Cites all 7 generically | About: default `community`; allows `founder`/`delegator`/`builder` for graduation pages | Delegators: default `delegator`; `community` allowed only on secondary resource pages | Developers1: default `developer` OR `builder`; explicit Devs/Builder split rule (1.14) |
| purpose (15) | Cites all 15 generically | About skews orient/explain/learn/evaluate/reference | Delegators skews orient/explain/learn/choose/start/operate/verify/reference | Developers1 skews start/build/integrate/configure/reference/troubleshoot |
| complexity (3) | Generic | Skews beginner/intermediate | Skews beginner/intermediate | Quickstarts beginner; build intermediate; BYOC/protocol advanced |
| lifecycleStage (7) | Generic | Skews discover/evaluate | Skews discover/evaluate/setup/operate | Skews setup/build/operate/troubleshoot |
| informationType (9) | Generic | Skews conceptual/narrative/structural/factual | Skews procedural/conceptual/factual/evaluative/analytical | Skews procedural/technical/factual/analytical |

**Conclusion:** No enum divergence (single source). But the enum *interpretation* (which values are expected per tab) IS tab-aware in 3 of 5 tabs. Orch/Gw still treat as generic — they don't declare their tab-expected mix.

### 3.2 process.mdx

**Existence:** Same pattern as Frameworks. Only orchestrators (=gateways copy). Not in about/delegators/developers1.

**Contents:**
- Title: "Page Remediation Process"
- 5-step pipeline: (1) Check agent → findings report; (2) Critical review agent → reviewed report; CHECKPOINT (human sign-off); (3) Remediation agent (structural/taxonomy); (4) Copy edit agent (prose only); (5) Layout agent (MDX components, frontmatter, render validation)
- Sub-process: agent reports + 2nd agent verifies/critically analyses
- Per-step inputs/outputs/scope
- Step 1 references `checks.mdx` directly; output to `v2/orchestrators/_workspace/canonical/check/<same path as page>` — **hard-coded to orchestrators path**
- Step 3 references `scripts/script-pipeline-index.mdx`
- Supporting files table: checks.mdx, Frameworks.mdx, scripts/script-pipeline-index.mdx, check/decision-log.md, check/learnings.md
- Batch rules: max 3 check agents in parallel; one critical review per check report; no remediation until checkpoint clears
- Status: Active, refined; Steps 3-5 explicitly "Not yet running at scale"
- Owner: Alison Haire · Last updated: 2026-03-24

**Cross-tab process.mdx comparison:**

| Tab | process.mdx present? | Path-hardcoded? |
|---|---|---|
| orchestrators | YES (canonical seed) | YES — output path `v2/orchestrators/_workspace/canonical/check/...` |
| gateways | YES (byte-identical to orchestrators) | YES — still says `v2/orchestrators/...` |
| about | NO | n/a — no process defined |
| delegators | NO | n/a |
| developers1 | NO | n/a |

The gateways process.mdx **incorrectly directs check-agent output to the orchestrators canonical folder**. About/delegators/developers1 have no remediation process defined at all.

### 3.3 IA.mdx and ia-data.json

**Existence:** Same — orchestrators + gateways only (byte-identical between them). Not in about/delegators/developers1.

**Contents (IA.mdx):**
- An MDX page that imports `iaData` from `./ia-data.json`
- Uses `SearchTable` component (with `DynamicTable`) to render the JSON as searchable
- Also embeds a literal markdown table of the same data (~73 rows)
- Closes with an `<Tree>` block visualising the IN-REPO file tree of `v2/orchestrators/` (concepts, guides, quickstart, resources, setup subtrees)
- Lists 73 page entries spanning sectionGroups: Start Here, Concepts, Quickstart, Setup, Operator Considerations, Deployment Details, Workloads and AI, Staking and Earning, Config and Optimisation, Monitoring and Tools, Advanced Operations, Roadmap and Funding, Tutorials, Resources, Technical References, Compendium

**Contents (ia-data.json):**
- JSON array of 73 objects: `{ filename, sidebarTitle, sectionGroup, description, status, notes }`
- Many descriptions are empty (matching the IA.mdx markdown table cells)
- Purpose: data source for the SearchTable in IA.mdx; **not** a navigation source-of-truth (`docs.json` is)
- The original audit flagged ia-data.json as "purpose-unclear" — confirmed: it is renderer data for the searchable IA visualisation, not a configuration file. Risk: drift from docs.json since it duplicates the tab's nav structure.

**Cross-tab IA comparison:**

| Tab | IA.mdx present? | ia-data.json present? | Authoritative IA source |
|---|---|---|---|
| orchestrators | YES (canonical seed) | YES (73 rows) | This file (referenced by checks.mdx 7.1, 7.4) AND `docs.json` |
| gateways | YES (byte-identical — describes orchestrators!) | YES (byte-identical — orchestrators data!) | Broken: file claims to be gateways canonical but lists orchestrators pages |
| about | NO | NO | `v2/about/_design/ia-design.md` (referenced 18× in About checks.mdx) |
| delegators | NO | NO | `v2/delegators/_design/delegators-IA.md` (referenced 4× in Delegators checks.mdx) |
| developers1 | NO | NO | `v2/developers/_design/developers-IA.md` (referenced 4× in Developers1 checks.mdx; note path is `developers/_design/` not `developers1/_design/`) |

**Critical drift:** gateways canonical/IA.mdx + ia-data.json claim to be gateways IA but their content is orchestrators IA. Anyone relying on the gateways canonical IA would be reading orchestrators pages.

---

## 4. script-plan.md — checks-pipeline.js and process-pipeline.js architecture

Source: `v2/orchestrators/_workspace/canonical/scripts/script-plan.md` (249,947 bytes — the largest canonical artefact in the repo).

### 4.1 The two pipelines

| Pipeline | Concern | Trigger | Runs |
|---|---|---|---|
| `checks-pipeline.js` | Quality validation — is the content correct? | Per-page, per-tab, CI gate | On any page at any time |
| `process-pipeline.js` | Production workflow — are the phases done? | Per-tab, human-driven | During content production cycle |

They are **NOT alternatives**. `process-pipeline.js` calls `checks-pipeline.js` as a sub-step in Phases 7, 8, and 9 of my-process.mdx.

### 4.2 checks-pipeline.js — planned design

**Entry CLI:**
- `--mode: report | fix | dry-run`
- `--scope: --file <path> | --tab <name> | --staged | --full`
- `--cat: 1-9 | all`

**Execution architecture (3 tiers):**

| Tier | Categories | Blocking? | Validators |
|---|---|---|---|
| **Tier 1 — Structural (BLOCKING)** | Cat 1 (frontmatter), Cat 7 (navigation), Cat 8 (links & rendering) | HARD HALT on any fail; partial report emitted | `validate-frontmatter.js` (NEW); `check-docs-path-sync.js` (update) + `validate-nav-journeys.js` (NEW); `check-mdx-safe-markdown.js` + `check-anchor-usage.js` |
| **Tier 2 — Content Quality (advisory, non-blocking)** | Cat 2 (voice), Cat 3 (headings), Cat 4 (page structure), Cat 5 (layout) | flags found = continue to T3 | `validate-voice-copy.js` (MERGE of lint-copy+lint-patterns) + `check-grammar-en-gb.js`; `validate-headings.js` (EXTEND check-double-headers); `validate-structure.js` (SPLIT from lint-structure); `component-layout-governance.js` (update) + `check-component-health.js` |
| **Tier 3 — Trust & Governance** | Cat 6 (veracity), Cat 9 (process) | runs after T2 | `docs-fact-registry.js` (update) + `docs-page-research.js`; `audit-script-inventory.js` + `check-pr-template.js` |

**Output:**
- `checks-report.json` — `{page, cat, severity, issues[], score}`
- `checks-report.md` — human-readable by-category, by-page

**Exit codes:** `0=clean`, `2=issues found` (per `--mode report`)

### 4.3 process-pipeline.js — planned design

**Entry CLI:**
- `--tab: orchestrators | gateways | developers | about | delegators`
- `--phase: 1-9 | from-phase N | status`

**Workflow:** Reads tab-status.md → determines current phase gate → orchestrates 9 phases:

| Phase | Phase Name | Triggers |
|---|---|---|
| 1 | Audience & Personas | `prompts/audience-design-v5.md` → output `[tab]-audience-doc.md` |
| 2 | IA Structuring | `prompts/structure-audit.md` → `tab-map.mdx` (FLAGGED AS BLOCKER: file does not exist) |
| 3 | Content Mapping | `content-pass.md` (AUDIT mode) + `generate-content-gap-reconciliation.js` → `[tab]-content-scan.md` |
| 4 | IA Page Structure | requires `tab-map.mdx` from Phase 2 → IA with journey mappings |
| 5 | Research & Gaps | `docs-page-research.js` + `docs-research-packet.js` → research packs |
| 6 | Voice & Terminology | `voice-rules.md` + `Frameworks.mdx` + human terminology lock |
| 7 | Copy Review | **calls `checks-pipeline.js --cat 2,3,4`** + human IA review/lock gate |
| 8 | Layout | **calls `checks-pipeline.js --cat 5,8`** + Cat 2-4 flags-resolved gate |
| 9 | Human Review | **calls `checks-pipeline.js --full`** + human sign-off gate |

**Key constraint:** `process-pipeline.js` does NOT run autonomously. It is a tracking and orchestration tool that tells the operator which prompt/script/check to run next, checks prerequisites, and updates `tab-status.md`. Human gate decisions remain human-only.

### 4.4 Implementation status

Per the plan:
- ALL new scripts; no modifications to existing code paths
- Worktree: `git worktree add ../Docs-v2-dev-scripts-pipeline scripts/checks-pipeline`
- Per-dispatcher merge cadence (each dispatcher merges back to `docs-v2-dev` independently)
- 10-step build order: shared infra → 8 dispatchers (frontmatter, veracity, structure, integrity, usefulness, copy, style, accessibility) → master content-pipeline.js
- Step 10: `content-pipeline.js` = MASTER DISPATCHER (build order has it last)

### 4.5 Risk identification from script-plan.md

The plan lists pre-flight risks:
- `tools/lib/frontmatter-taxonomy.js` is the canonical enum source (7 pageTypes, 15 purposes, 7 audiences)
- `tools/lib/docs-usefulness/rubric-loader.js` is HIGH RISK — 6 downstream importers; schema drift (was 9-token, needs 7-token fix)
- `tools/config/usefulness-audience-normalization.json` is STALE — pre-canonical synonym tokens
- `tools/config/component-layout-profile.json` has SCHEMA DRIFT (old pageType names like `landing`, `overview`, `how_to` not canonical 7)
- `tools/config/style-language-profile-en-gb.json` is EMPTY (`forbidden_terms: []`)

### 4.6 Missing canonical files (from the plan)

The plan lists 5 files that MUST be created before scripts work:
- `validate-veracity-status.js` (validator, Cat 6)
- `validate-nav-journeys.js` (validator, Cat 7)
- `check-purpose-rubric-sync.js` (validator, Cat 1)
- `repair-frontmatter-taxonomy.js` (remediator, Cat 1)
- `pipeline-report.js` (lib, all cats)
- `tab-map.mdx` — Phase 4 pipeline blocker (CONTENT, not a script)

### 4.7 Dispatcher matrix (Concern × Type)

| Dispatcher | Concern | ENFORCE examples | REVIEW examples | REMEDIATE examples |
|---|---|---|---|---|
| `frontmatter-dispatcher` | METADATA | Missing required field, invalid enum | SEO title quality | Migrate deprecated value, infer missing field |
| `integrity-dispatcher` | DOCUMENT INTEGRITY | MDX parse error, 404, broken anchor | External link rot | Fix spelling, remove em-dashes |
| `copy-dispatcher` | COPY & VOICE | Banned word (CI mode), heading > 8 words, question heading | Voice register mismatch, undefined jargon | Replace banned construction, UK English correction |
| `usefulness-dispatcher` | INFORMATION QUALITY | (none — all advisory) | Rubric score below threshold, wrong register, quickstart too long | (none — requires human rewrite) |
| `veracity-dispatcher` | INFORMATION TRUST | REVIEW: flag in published content, veracityStatus conflict | Stale lastVerified, uncited claim | (none — human-only) |
| `structure-dispatcher` | INFORMATION ARCHITECTURE | File not in docs.json, dead-end page | Journey gap, page too long for pageType | Sync docs.json paths |
| `style-dispatcher` | UI & PRESENTATION | Unapproved component used, required section missing | Wrong component choice, template drift, mermaid non-compliant | Repair component metadata |
| `accessibility-dispatcher` | ACCESSIBILITY | Image missing alt text, empty link text | Generic link text, heading level skip, table without header row | Add alt="" to decorative images |

### 4.8 Note: the plan is duplicated inside script-plan.md

The file contains the same "Checks Pipeline" plan twice (sections at line 78 and line 1004), then the pipeline-1/pipeline-2 architecture at line ~2770. The file is ~250KB partly because of internal duplication — itself a content-quality finding.

---

## 5. REVIEW-REGISTRY.md — 70-page Orchestrators inventory

Generated 2026-03-24 from `IA.mdx` (ia-data.json).

**Headline counts:**
| Metric | Count |
|---|---:|
| IA table entries | 73 |
| Live .mdx files (excl. _workspace, x-deprecated) | 88 |
| Files mapped to IA | 72 unique (guide.mdx and glossary.mdx each map to 2 IA entries) |
| Orphans (live file not in IA) | 16 |
| Gaps (IA entry with empty description) | 42 |
| Duplicates (same topic, multiple files) | 4 pairs |
| Deprecated pageType values | 5 files |

The registry contains per-page decision logs (Section S1..S?) with: Verdict (PASS / NEEDS WORK / DECISION NEEDED / REWRITE REQUIRED), Changes made, Flags for human. Examples from the first 200 lines:

- `portal.mdx` — NEEDS WORK; `pageType: landing` → `navigation`; flagged Docker tag `:master` and dead Gateway Portal block at bottom
- `navigator.mdx` — NEEDS WORK; `pageType: landing` → `navigation`; "workers" → "pool nodes"; "AIServiceRegistry" claim flagged for verification
- `role.mdx` — 6/10; `pageType: overview` → `concept`; `purpose: overview` → `explain`
- `incentive-model.mdx` — PASS 9/10 (highest so far)
- `tutorial.mdx` (quickstart group) — DECISION NEEDED 5/10; recommended REMOVE (thin routing page duplicating guide.mdx)
- `operator-rationale.mdx` — heavy fix; removed corrupt bytes `glrw\npwrfs` at file head

**Missing-purpose-field roster** (line 706-721): a list of 14 IA-mapped files explicitly missing `purpose` frontmatter; plus "All 6 tutorial files".

**Self-test verification block** (line 725-739) records that all 88 files had frontmatter extracted, all IA entries map to files or are flagged orphans.

This is the orchestrators tab's per-page truth log. Comparable files do not exist for the other tabs.

---

## 6. checks-gap-content.md and checks-gap-layout.md — what's MISSING from checks.mdx

Both files are gap analyses against the orchestrators checks.mdx Cat 1-9 (the seed).

### checks-gap-content.md
- Searched: checks.mdx, 01-CORE-NEEDS-AND-STANDARDS.md, Frameworks.mdx, voice-rules.md, plan-canonical.md, content-pipeline-canonical.md, content-pass.md, docs-review-prompt-tiers.md, copy-governance.md, page-structure-rules.md, structure-audit-pack-guide.md, PROJECT-MANAGEMENT-CANONICAL.md
- Total gaps: 22 (11 HIGH, 9 MEDIUM, 2 LOW)
- Examples:
  - **G-01 (HIGH)** — Entity-led voice as positive structural rule (not just `This page [verb]` ban). Suggested as new Cat 2 check 2.12.
  - **G-02 (HIGH)** — Exit-state prose openers (distinct from heading naming Cat 3). Suggested as new Cat 2 check 2.13.

### checks-gap-layout.md
- Total gaps: ~30 sections.
- Examples:
  - **GAP-01 (HIGH)** — JSDoc governance fields on every exported component (`@component`, `@type`, `@subniche`, `@status`, `@description`, `@accepts`, conditional `@aiDiscoverability`). Suggested under Cat 5; alternatively a new Cat 10 "Component Authoring".
  - **GAP-02 (HIGH)** — Specific `!important` ban; `--lp-*` token namespace; advisory `style={}` and Mintlify class-override flags. Suggested as extension to Cat 5.8.

**Conclusion of the gap analyses:** The orchestrators checks.mdx (the seed) misses ~50 specific checks already articulated elsewhere. About/delegators/developers1 have **partially absorbed** the gaps (each tab encoded its own tab-specific 1.14, 4.17+ etc.), but **no single tab has all 50+ gaps incorporated**.

---

## 7. checks-remediation.mdx — companion mapping each check to its fix path

File: `v2/orchestrators/_workspace/canonical/checks-remediation.mdx` (32,235 bytes, 311 lines). HAS frontmatter (all 12 fields incl. OG). Updated 2026-04-09.

Maps every check 1.1-10.5 to one of:
- **auto** — CI script detects/fixes (e.g. `frontmatter-taxonomy.js`, `lint-copy.js`, `check-grammar-en-gb.js`)
- **skill** — AI skill invocation (e.g. `/docs-copy`, `/style-and-language-homogenizer-en-gb`)
- **config** — config file defines rule, validators enforce (e.g. `banned-words.txt`, `banned-phrases.txt`)
- **template** — gold-standard template defines pattern (e.g. `snippets/templates/pages/gold-standard-templates/`)
- **manual** — human judgement required (e.g. veracityStatus determination, glossary cross-reference)

Each check gets a row: `Check | Name | Type | Best remediation | Resource path | Self-heal?`

Example coverage:
- Cat 1 (frontmatter): 11 of 13 checks have automated `frontmatter-taxonomy.js` enforcement; checks 1.8 (veracityStatus) and 1.13 (keywords quality) are manual
- Cat 2 (voice): 22 checks; 4 are auto+config, 11 are skill, 5 are auto+skill, 2 are manual
- Cat 3 (naming): All 10 are manual (rubric scoring inherent)

This is the only canonical artefact that pairs every check with a concrete remediation pathway. It exists only in the orchestrators canonical and is NOT duplicated in any other tab.

---

## 8. Top 10 contradictions / drifts across tabs

1. **gateways canonical is a stale copy of orchestrators canonical.** Frameworks.mdx, process.mdx, IA.mdx, ia-data.json are byte-identical between gateways and orchestrators. The gateways IA.mdx + ia-data.json claim to describe gateways but list orchestrators pages.
2. **gateways/checks.mdx has no Cat 10 (CONTENT COMPLETENESS).** Every other tab has it. Gateways has no completeness gate defined.
3. **orchestrators/checks.mdx and gateways/checks.mdx have NO frontmatter and USE EM-DASHES.** They fail their own Cat 1.1 (frontmatter required) and Cat 2.12 (no em-dashes). about/delegators/developers1 are conformant.
4. **process.mdx in gateways canonical hard-codes output paths to `v2/orchestrators/_workspace/canonical/check/...`.** A gateways check-agent run would emit reports into the orchestrators folder.
5. **Only orchestrators/gateways have process.mdx, Frameworks.mdx, IA.mdx, ia-data.json, REVIEW-REGISTRY.md, script-plan.md, gap files, checks-remediation.mdx.** about/delegators/developers1 reference these but their `_workspace/canonical/` only contains checks.mdx + review/. The dependency chain is asymmetric.
6. **The "canonical" Frameworks.mdx contains §1.6 Information Type as Draft status.** Yet the per-tab checks.mdx files (Cat 4.7 in each) treat Purpose → InformationType mapping as a blocking gate. Live checks consume Draft framework rules.
7. **§1.3 Persona enumeration in Frameworks.mdx is locked-structure-but-incomplete.** community/founder/builder have personas listed; developer/gateway/orchestrator/delegator say "Pending definition". The per-tab checks.mdx files invoke persona-based rules (about §10.6 names 5 personas; delegators §10.3 names 6; developers1 §10.3 names 5) — these personas do not exist in Frameworks.mdx.
8. **Path-name divergence:** `v2/developers1/_workspace/canonical/checks.mdx` references `v2/developers/_design/developers-IA.md` and `v2/developers/resources/compendium/glossary.mdx`. The folder is `developers1` but the live tab is presumably `developers`. Risk of stale references.
9. **delegators/checks.mdx 5.35 forbids bash code blocks** (with permitted exceptions for contract addresses, function selectors, JSON RPC). orchestrators/gateways/about/developers1 PERMIT bash code blocks. A delegators page reviewed using the orchestrators checks.mdx would mis-classify wallet-flow-in-prose as a layout failure.
10. **The 4 "supplementary" canonical artefacts (REVIEW-REGISTRY, script-plan, gap files, checks-remediation) describe the ENTIRE site governance system**, yet they live exclusively under `v2/orchestrators/_workspace/canonical/`. The path placement suggests these are orchestrator-tab artefacts — they are not; they are site-wide canonical.

---

## 9. Consolidation matrix — where each artefact should converge

| Artefact | Current location | Should-be location | Action |
|---|---|---|---|
| `checks.mdx` (per-tab specialisation) | `v2/{tab}/_workspace/canonical/checks.mdx` | Same (per-tab) | Keep per-tab; eliminate orch/gw em-dashes; add frontmatter to orch/gw; build gateways Cat 10; rebuild gateways tab-specifics |
| `checks.mdx` universal Cat 1-9 skeleton | Duplicated 5 ways | Single canonical at e.g. `docs-guide/frameworks/checks-skeleton.mdx`, referenced by each tab | Lift universal Cat 1-9 to docs-guide; per-tab files declare ONLY their tab-tailored extensions |
| `Frameworks.mdx` | `v2/orch/_workspace/canonical/` + identical copy in `v2/gw/_workspace/canonical/` | Single canonical at `docs-guide/frameworks/canonical-frameworks.mdx` | Move to docs-guide; delete gateways duplicate; references stay valid since paths resolve once |
| `process.mdx` | orch + identical gw (path-hardcoded to orch) | Single canonical at `docs-guide/frameworks/remediation-process.mdx`; parameterised by tab | Move and parameterise output path |
| `IA.mdx` + `ia-data.json` | orch + identical gw (gw describes orch!) | Per-tab IA at `v2/{tab}/_workspace/canonical/IA.mdx` driven from `docs.json` | Generate from `docs.json` per-tab; remove gateways stale copy |
| `REVIEW-REGISTRY.md` | orch only (orchestrators inventory) | Per-tab `v2/{tab}/_workspace/canonical/REVIEW-REGISTRY.md` | Generate per-tab; the orchestrators file is correctly tab-scoped — just missing siblings |
| `scripts/script-plan.md` | orch only | `workspace/plan/active/SCRIPT-GOVERNANCE/script-plan.md` (already partial governance there) | Move to plan/ — not a per-tab canonical |
| `check/checks-gap-content.md` + `check/checks-gap-layout.md` | orch only | `docs-guide/frameworks/checks-gaps.mdx` | Move to docs-guide; these are universal gaps against the universal checks |
| `checks-remediation.mdx` | orch only | `docs-guide/frameworks/checks-remediation.mdx` | Move to docs-guide; universal coverage |
| `my-process.mdx` | orch + identical gw | `docs-guide/frameworks/my-process.mdx` | Move — universal pipeline runbook |
| Per-tab `_design/` IA file (`v2/about/_design/ia-design.md`, `v2/delegators/_design/delegators-IA.md`, `v2/developers/_design/developers-IA.md`) | Tab-specific | Same; these ARE the authoritative IA designs | Keep per-tab; canonicalise as the IA source-of-truth (NOT IA.mdx/ia-data.json) |

**Net effect of consolidation:**
- 4 tabs gain symmetric reference set (currently asymmetric — orch/gw have it, others link to orch)
- gateways canonical stops describing orchestrators
- One source of truth per universal artefact, lifted to `docs-guide/` (already the documented standards home per CLAUDE.md)
- Per-tab canonical retains ONLY the tab-specific delta (the tab-tailored checks.mdx, the per-tab review/, the per-tab REVIEW-REGISTRY)

---

## 10. Items the original audit could not get to — confirmed status

| Item | Status |
|---|---|
| 4 oversized checks.mdx files | Read in full, captured |
| Cross-tab comparison vs gateways checks.mdx (already audited at 549 lines / 9 cats by prior agent) | Done |
| orchestrators Frameworks.mdx | Read in full, captured |
| orchestrators process.mdx | Read in full, captured |
| orchestrators IA.mdx | Read in full, captured |
| orchestrators REVIEW-REGISTRY.md | Read (first 200 + sample of end); structure captured |
| orchestrators ia-data.json (purpose-unclear flag) | Resolved: it is data source for IA.mdx SearchTable renderer; not config |
| orchestrators scripts/script-plan.md | Spot-read (headings + lines 1-200 + 2770-3050); architecture captured |
| orchestrators check/checks-gap-content.md | Spot-read; structure + first 2 HIGH gaps captured |
| orchestrators check/checks-gap-layout.md | Spot-read; structure + first 2 HIGH gaps captured |
| orchestrators checks-remediation.mdx | Spot-read first 120 lines; Cat 1+2 coverage captured |
| gateways Frameworks.mdx / process.mdx / IA.mdx | Confirmed byte-identical to orchestrators (zero-line diff); not separately re-read |

---

## 11. Confirmation

This file is the only write made in this session. All other access was read-only. All files were read by paginated, sequential Read calls; no parallel reads issued for the same file. The output complies with the 3,500-line cap (this file is well under). Date stamps in section 0 reflect filesystem mtimes (2026-05-18) at time of audit (2026-05-19).
