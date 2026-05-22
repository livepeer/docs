# Per-Page Quality Check Report
## `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup.mdx`

**Review date:** 2026-03-24
**Reviewer:** Claude Code (per-page quality check agent)
**Check framework:** `v2/orchestrators/_workspace/canonical/checks.mdx`
**Frameworks ref:** `v2/orchestrators/_workspace/canonical/Frameworks.mdx`
**Navigation source:** `docs.json` lines 2883–2891

---

## Frontmatter Table

| Field | Present? | Value | Pass/Fail | Notes |
|---|---|---|---|---|
| `title` | Yes | `'Orchestrator-Transcoder Split Setup'` | PASS | |
| `sidebarTitle` | Yes | `'O-T Split'` | PASS | |
| `description` | Yes | `Run go-livepeer's Orchestrator and Transcoder as separate processes on separate machines - isolating protocol operations from GPU workload, scaling Transcoders independently, and connecting multiple GPU machines to one Orchestrator.` | FAIL | 231 chars — exceeds 160. Not subject-first (opens with imperative "Run") |
| `pageType` | Yes | `guide` | PASS | Valid 7-type canonical (P50) |
| `audience` | Yes | `orchestrator` | PASS | |
| `purpose` | Yes | `guide` | FAIL | `guide` is a pageType value, not a purpose value. Error type (b) per P37 |
| `complexity` | ABSENT | — | FAIL | Required field missing |
| `lifecycleStage` | ABSENT | — | FAIL | Required field missing |
| `keywords` | Yes | 11 keywords | PASS | `orchSecret`, `orchAddr`, `standalone transcoder`, `o-t split`, `multi-transcoder` — specific |
| OG image block | Yes | All 5 OG fields | PASS | Correct path |
| `veracityStatus` | ABSENT | — | FAIL | Required. `status: current` + absent `veracityStatus` violates §1.8/P39 |
| `industry` | ABSENT | — | FAIL | Required (P41) |
| `niche` | ABSENT | — | FAIL | Required (P41) |

**Required field count:** 6/10 required fields present. Missing: `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche`. `purpose` requires correction. `description` too long.

---

## Category 1 — FRONTMATTER & TAXONOMY

| # | Check | Result | Detail |
|---|---|---|---|
| 1.1 | All 10 required fields present | FAIL | `complexity`, `lifecycleStage`, `veracityStatus`, `industry`, `niche` absent |
| 1.2 | `pageType` uses 7-type canonical schema | PASS | `guide` is valid (P50) |
| 1.3 | `pageVariant` valid if present | N/A | No deprecated pageType — no co-fix required |
| 1.4 | `purpose` uses 15-value canonical set | FAIL | `guide` is a pageType value placed in purpose field. Error type (b) per P37. Proposed: `purpose: configure` — confirm before applying |
| 1.5 | `audience` uses 7-token set | PASS | `orchestrator` is valid |
| 1.6 | `complexity` single canonical value | FAIL | Absent. Proposed: `complexity: intermediate` — confirm before applying |
| 1.7 | `lifecycleStage` single canonical value | FAIL | Absent. Proposed: `lifecycleStage: setup` — confirm before applying |
| 1.8 | `veracityStatus` present and honest | FAIL | Absent. `status: current` + absent `veracityStatus` violates §1.8/P39. TODO block with REVIEW flags present. Valid fix: `status: draft` + `veracityStatus: unverified` |
| 1.9 | `industry` array valid if present | FAIL | Absent. Required per P41. Proposed: `industry: ["technical"]` — confirm before applying |
| 1.10 | `niche` array valid if present | FAIL | Absent. Required per P41. Proposed: `niche: ["infrastructure", "hardware"]` — confirm before applying |
| 1.11 | `description` well-formed | FAIL | 231 chars — exceeds 160 limit. Opens with imperative ("Run go-livepeer's..."). Proposed: `Split go-livepeer into separate Orchestrator and Transcoder processes on separate machines — keystore isolation, independent GPU scaling, and stable reward calling.` (162 chars) — trim to ≤160. Confirm before applying |
| 1.12 | OG image block complete | PASS | All 5 OG fields present |
| 1.13 | `keywords` field quality | PASS | Keywords are specific: `orchSecret`, `orchAddr`, `standalone transcoder`, `multi-transcoder`, `split setup`, `o-t split` |

**Category 1 verdict: FAIL** — 8 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11

---

## Category 2 — VOICE & COPY

**UK English scan (P54 — US spellings only):**
`behavior/behaviour` — not found. `-ize` endings — not found. `center/centre` — not found. No US spelling violations.

**Banned word scan — all candidates checked:**
`effectively` — absent. `essentially` — absent. `basically` — absent. `meaningful` — absent. `significant` — absent. `real` (intensifier) — absent. `various` — absent. `several` — absent. `obviously` — absent. `clearly` — absent. All clean.

**Banned phrase scan — all candidates checked:**
`This section covers` — absent. `This page covers` — absent. `rather than` — absent. `can generate`/`may produce` in value claims — absent. `etc.` — absent. All clean.

**Em-dash scan (P30 — all visible text including CustomDivider props and StyledStep titles per P48):**
CustomDivider `style` props only (no middleText with em-dash). Heading text: "Part 1 - Orchestrator Machine", "Part 2 - Transcoder Machines" — use hyphen (`-`), not em-dash. PASS. Accordion titles: "Protect the orchSecret", "Transcoders hold no wallet", "Port 8935 on the Orchestrator", "Rotating the orchSecret", "Transcoder not connecting - no log line on Orchestrator" — uses hyphen, not em-dash. PASS. Card descriptions — no em-dashes. Body prose — no em-dashes. ScrollableDiagram Mermaid labels — no em-dashes. PASS.

**Banned construction scan — all candidates:**

| Location | Text | Type | Classification |
|---|---|---|---|
| Line ~56 | "The pool operator handles staking, on-chain registration, reward calling, and job routing. Workers provide GPU hardware and earn for the work it processes." — no banned constructions | — | PASS |
| Line ~158 | "Without `-transcoder`, go-livepeer runs in standalone Orchestrator mode - it routes jobs to connected Transcoders but performs no local transcoding." | `not [X]` adjacent | PASS — states a technical condition, not a primary value claim via negation |
| Link href `/v2/orchestrators/guides/advanced-operations/run-a-pool` — broken link found (not in docs.json) | — | See Category 8 |
| Line ~346 | AccordionGroup: "If jobs arrive at the Orchestrator but the Transcoder is idle" — `if [condition]` in troubleshooting context | Diagnostic conditional | PASS — troubleshooting context; not a value claim |

| # | Check | Result | Detail |
|---|---|---|---|
| 2.1 | UK English throughout | PASS | No US spellings found |
| 2.2 | Zero banned words | PASS | All candidates checked; none found |
| 2.3 | Zero banned phrases | PASS | All candidates checked; none found |
| 2.4 | Zero banned constructions | PASS | No confirmed violations. Line ~158 `not [X]` adjacent is a technical condition statement, not a value claim |
| 2.5 | Opening order correct | PASS | Opens with description of what the split setup does and its value. Benefit before caveat |
| 2.6 | Paragraph discipline | PASS | Single-topic paragraphs. Lead sentences state facts. End on facts or next steps |
| 2.7 | Audience register correct | PASS | Peer-technical. Flag names, port numbers, architecture terms used directly |
| 2.8 | Per-audience prohibited phrases absent | PASS | `easy to set up` — absent. `the network rewards you for` — absent |
| 2.9 | No passive value statements | PASS | Reasons to split are concrete: "Ethereum keystore lives only on the Orchestrator machine", "scale GPU capacity by connecting more Transcoder nodes" |
| 2.10 | No hedging openers | PASS | Opens with factual architectural description |
| 2.11 | Terminology locked and consistent | PASS | `Orchestrator`, `Transcoder`, `orchSecret`, `orchAddr`, `gateway`, `gRPC`, `reward calling` used consistently throughout |

**Category 2 verdict: PASS**

---

## Category 3 — SECTION NAMING & HEADINGS

**Note:** `Related Pages` heading excluded from all scoring and checks per P16.

### Heading Score Table

| Heading | Precision | Depth | Stability | Clarity | Conciseness | Total | Pass? |
|---|---|---|---|---|---|---|---|
| Reasons to Split | 4 | 3 | 4 | 4 | 5 | 20/25 | PASS |
| Architecture | 4 | 3 | 4 | 4 | 5 | 20/25 | PASS |
| Part 1 - Orchestrator Machine | 5 | 4 | 5 | 5 | 3 | 22/25 | PASS |
| Part 2 - Transcoder Machines | 5 | 4 | 5 | 5 | 3 | 22/25 | PASS |
| Verifying the connection | 3 | 3 | 4 | 4 | 4 | 18/25 | FAIL |
| Connecting Multiple Transcoders | 4 | 3 | 5 | 5 | 4 | 21/25 | PASS |
| Relationship to Pool Operations | 4 | 3 | 4 | 4 | 3 | 18/25 | FAIL |
| Security Considerations | 3 | 3 | 4 | 4 | 4 | 18/25 | FAIL |
| Troubleshooting | 3 | 3 | 4 | 4 | 5 | 19/25 | FAIL |

**Rename proposals (validated against check 3.2 prohibited list — P18):**
- `Verifying the connection` → `Verify the Connection` (capitalisation; or better: `Connection Verification`)
- `Relationship to Pool Operations` → `O-T Split and Pool Architecture`
- `Security Considerations` → `Security Model`
- `Troubleshooting` → `Split Setup Troubleshooting` (adds domain anchor; check 3.2: `Troubleshooting` is not in the Banned list but standalone is Avoid-tier without domain anchor)

| # | Check | Result | Detail |
|---|---|---|---|
| 3.1 | Every heading ≥20/25 | FAIL | 4 headings below threshold: Verifying the connection (18), Relationship to Pool Operations (18), Security Considerations (18), Troubleshooting (19) |
| 3.2 | No banned/weak standalone terms | FAIL | `Troubleshooting` as standalone — Avoid-tier without domain anchor. `Security Considerations` is generic |
| 3.3 | No literal contrast labels | PASS | No `X vs Y` headings |
| 3.4 | Domain-anchor rule applied | FAIL | `Architecture` is domain-anchored by page context but borderline in isolation. `Troubleshooting` and `Security Considerations` lack domain anchors entirely |
| 3.5 | Heading names concept, not examples | PASS | "Reasons to Split" names the concept, not specific reasons |
| 3.6 | Title well-formed | PASS | `Orchestrator-Transcoder Split Setup` — concept-derived. The hyphen in title is a legitimate compound noun, not an em-dash |
| 3.7 | Sounds like expert editorial choice | FAIL | `Security Considerations` and `Troubleshooting` are safe generic labels. `Relationship to Pool Operations` is a description, not a heading |

**Category 3 verdict: FAIL** — 4 checks fail: 3.1, 3.2, 3.4, 3.7

---

## Category 4 — PAGE STRUCTURE

| # | Check | Result | Detail |
|---|---|---|---|
| 4.1 | One purpose, one audience, one job | PASS | Single job: configure the O-T split architecture. Single audience: orchestrator |
| 4.2 | Purpose statement test passes | PASS | "This page lets the orchestrator set up go-livepeer in split Orchestrator/Transcoder mode across two or more machines." |
| 4.3 | PREV_PAGE / NEXT_PAGE adjacency correct | PASS | docs.json sequence: `dual-mode-configuration` → `orchestrator-transcoder-setup` → `join-a-pool`. Reader arriving from dual-mode has context on alternate deployment options. Reader leaving to `join-a-pool` follows the deployment options sequence |
| 4.4 | No dead ends | PASS | Related Pages links to Alternate Deployments, Siphon Setup, Run a Pool (broken link — see 8.1), Large-Scale Operations (broken link — see 8.1) |
| 4.5 | Prerequisites stated or linked | PASS | Machine requirements stated in each Part section (Orchestrator machine: public IP, keystore, Arbitrum RPC. Transcoder: NVIDIA GPU, network to port 8935). Clearly stated before commands |
| 4.6 | Out-of-scope is clear | PASS | Introduction explicitly states this is split setup. Combined setup is a separate path |
| 4.7 | Information type per section correct | PASS | `purpose: configure` permits procedural, technical, factual. Architecture (structural/technical), setup commands (procedural/technical), verification (procedural), security (technical/factual), troubleshooting (analytical/procedural). All appropriate |
| 4.8 | No content duplication from adjacent sections | PASS | No verbatim duplication from adjacent pages. Siphon setup page references this page |
| 4.9 | Section orientation page present | INFO | Section-level check |
| 4.10 | Cross-tab links at journey intersections | INFO | Tab-level check |

**Category 4 verdict: PASS**

---

## Category 5 — LAYOUT & COMPONENTS

**Component-vs-matrix cross-reference:** `component-layout-decisions.mdx` read. For `guide`: required = Overview + Steps/H2 sections; preferred = Steps, Step, CodeGroup, Note, Info, Tip, Card, CardGroup; avoid = Coming Soon, PreviewCallout.

**Components used:**

| Component | Used? | Preferred for `guide`? | Status |
|---|---|---|---|
| `LinkArrow` | Yes | Not in matrix | NOT-TESTED |
| `StyledTable` | Yes | Not in preferred | NOT-TESTED |
| `CustomDivider` | Yes | Not in matrix | NOT-TESTED |
| `ScrollableDiagram` | Yes | Not in matrix | NOT-TESTED |
| `CardGroup` / `Card` | Yes | Preferred | PASS |
| `AccordionGroup` / `Accordion` | Yes | Not preferred for `guide` | NOT-TESTED |
| `Note` | Yes | Preferred | PASS |
| `Warning` | Yes | Preferred | PASS |
| Code blocks | Yes | CodeGroup preferred | PASS |

**Import dead-import check:** Imports: `LinkArrow`, `StyledTable/TableRow/TableCell`, `CustomDivider`, `ScrollableDiagram`. All 4 are used in the file. No dead imports.

| # | Check | Result | Detail |
|---|---|---|---|
| 5.1 | Correct template for pageType + pageVariant | PASS | `guide`: Overview + Steps/H2. Page has architectural overview, H2-structured setup steps (Part 1, Part 2), verification, security, troubleshooting. Matches |
| 5.2 | Required sections present | PASS | Overview (intro + Reasons to Split), setup steps (Part 1, Part 2), verification, Related Pages |
| 5.3 | Only approved components used | NOT-TESTED | Custom components not verified against component-framework-canonical (P22) |
| 5.4 | Avoided components absent | PASS | No `Coming Soon`, no `PreviewCallout`. TODO is in MDX comment |
| 5.5 | Info type → component mapping correct | PASS | Architecture → ScrollableDiagram + Mermaid. Procedural → code blocks + H2 steps. Reference → StyledTable. Security/troubleshooting → AccordionGroup |
| 5.6 | MDX renders clean | INFO | JSX appears well-formed. Cannot confirm without dev server. ScrollableDiagram is a custom component (NOT-TESTED for render) |
| 5.7 | No old-schema frontmatter | FAIL | `purpose: guide` is a pageType value in the purpose field — schema error |
| 5.8 | CSS uses custom properties only | INFO | `CustomDivider style={{margin: "-1rem 0 -1rem 0"}}` — uses inline style with px/rem values. Not hardcoded hex. This is layout spacing, not colour. Borderline |
| 5.9 | Generated file banners intact | N/A | Not a generated file |
| 5.10 | Component naming/import conventions | PASS | PascalCase imports, correct paths, no dead imports |

**Category 5 verdict: FAIL** — 1 check fails: 5.7 (same root cause as 1.4)

---

## Category 6 — VERACITY

### Veracity Claims Inventory

| Claim | Type | Status |
|---|---|---|
| Port 8935 used for both Gateway inbound AND Transcoder-Orchestrator communication | procedural | REVIEW flag in TODO — requires SME confirmation |
| `-orchSecret` file-based path syntax still supported | procedural | REVIEW flag in TODO |
| `-maxSessions` valid on both O and T processes | procedural | REVIEW flag in TODO |
| Mermaid diagram: all communication over port 8935 (O→T as well as GW→O) | technical | Follows from port confirmation above |
| `curl -v https://<orchestrator-host>:8935/status` troubleshooting command | procedural | Unreviewed — may be HTTP not HTTPS |
| "The Orchestrator distributes incoming job segments across all connected Transcoders automatically" | factual | Unreviewed — matches expected go-livepeer behaviour |
| "There is no zero-downtime rotation mechanism" for orchSecret | factual | Unreviewed |
| Log line format: `Got a RegisterTranscoder request from transcoder=10.3.27.1 capacity=10` | procedural | Unreviewed against current go-livepeer |

| # | Check | Result | Detail |
|---|---|---|---|
| 6.1 | Every factual claim citable | FAIL | Port reuse claim, log line format, `orchSecret` rotation mechanism — all unverified |
| 6.2 | Code/commands tested | FAIL | REVIEW flags explicitly flag `-maxSessions`, port 8935, file-based `-orchSecret` as requiring SME verification |
| 6.3 | No deprecated API usage | NOT-TESTED | CLI flags not verified against current go-livepeer release |
| 6.4 | Numbers are real | PASS | No specific numeric claims beyond port numbers (standard) and log example values (illustrative) |
| 6.5 | REVIEW flags for unverified claims | PASS | REVIEW flags in TODO cover the main SME-dependent claims |
| 6.6 | `veracityStatus` honest | FAIL | Absent. `status: current` + absent `veracityStatus` + REVIEW flags violates §1.8/P39. Must be `status: draft` + `veracityStatus: unverified` |
| 6.7 | Authoritative vs AI-generated glossary | PASS | No glossary content |
| 6.8 | Source staleness check | PASS | No third-party content. All claims relate to go-livepeer itself |
| 6.9 | No open-ended research tasks | FAIL | REVIEW flags name a person (Rick) but no canonical document reference. Fix: add specific source (go-livepeer CLI reference page or GitHub PR/issue) to each REVIEW |

**Category 6 verdict: FAIL** — 4 checks fail: 6.1, 6.2, 6.6, 6.9

---

## Category 7 — NAVIGATION & IA

| # | Check | Result | Detail |
|---|---|---|---|
| 7.1 | Page exists in docs.json | PASS | `v2/orchestrators/guides/deployment-details/orchestrator-transcoder-setup` at docs.json line 2888 |
| 7.2 | Navigation matches file system | PASS | File exists at declared path |
| 7.3 | Tab entry portal routes to all sections | INFO | Section-level check |
| 7.4 | No structural orphans | PASS | Reachable via Deployment Details navigation group |
| 7.5 | Audience journey complete | PASS | Prerequisites → Part 1 → Part 2 → Verify → Security → Troubleshooting → Related Pages |
| 7.6 | Cross-tab graduation paths exist | INFO | Tab-level check |
| 7.7 | File in correct lane | PASS | In `v2/orchestrators/guides/` publishable lane |
| 7.8 | File naming conventions | PASS | `orchestrator-transcoder-setup.mdx` — descriptive, no prefix required |
| 7.9 | `_workspace/` TTL compliance | N/A | Not in `_workspace/` |

**Category 7 verdict: PASS**

---

## Category 8 — LINKS & RENDERING

**Internal link verification (P47 — full path against docs.json):**

| Link href | Full path in docs.json? | Line | Result |
|---|---|---|---|
| `/v2/orchestrators/guides/deployment-details/setup-options` | Yes | 2885 | PASS |
| `/v2/orchestrators/guides/deployment-details/siphon-setup` | Yes | 2886 | PASS |
| `/v2/orchestrators/guides/advanced-operations/run-a-pool` | NOT FOUND in docs.json | — | FAIL |
| `/v2/orchestrators/guides/advanced-operations/large-scale-operations` | NOT FOUND in docs.json | — | FAIL |
| `/v2/orchestrators/guides/advanced-operations/gateways-orchestrators` | NOT FOUND in docs.json | — | FAIL |
| `/v2/orchestrators/guides/monitoring-and-tools/troubleshooting` | NOT FOUND in docs.json — docs.json uses `monitoring-and-tooling` not `monitoring-and-tools` | — | FAIL |

Confirmed in docs.json: advanced-operations contains `gateway-relationships`, `gateway-orchestrator-interface`, `pool-operators`, `scale-operations` (lines 2938–2943). `run-a-pool`, `large-scale-operations`, `gateways-orchestrators` do not exist. `monitoring-and-tooling/troubleshooting` exists (line 2933) but this page links to `monitoring-and-tools/troubleshooting` (missing the `-ing`).

| # | Check | Result | Detail |
|---|---|---|---|
| 8.1 | All internal links resolve | FAIL | 4 broken internal links: `/v2/orchestrators/guides/advanced-operations/run-a-pool`, `/v2/orchestrators/guides/advanced-operations/large-scale-operations`, `/v2/orchestrators/guides/advanced-operations/gateways-orchestrators`, `/v2/orchestrators/guides/monitoring-and-tools/troubleshooting` (wrong folder name) |
| 8.2 | All external links live | N/A | No external links |
| 8.3 | All snippet imports resolve | INFO | 4 snippet imports. Standard paths — not individually verified |
| 8.4 | All images load | N/A | No inline images |
| 8.5 | Page renders without error | INFO | JSX appears well-formed. Broken links do not cause render errors in Mintlify but create 404s |
| 8.6 | No TODO/TBD in published content | PASS | TODO is in MDX comment — not rendered |

**Category 8 verdict: FAIL** — 1 check fails: 8.1 (4 broken links)

---

## Category 9 — PROCESS & GOVERNANCE

| # | Check | Result | Detail |
|---|---|---|---|
| 9.1 | Human sign-off recorded | FAIL | `status: current` but veracityStatus absent and REVIEW flags unresolved |
| 9.2 | All consuming decisions in registry | INFO | No structural decisions apparent requiring registry entries |
| 9.3 | Gate prerequisites met | FAIL | Tab IA not approved. Terminal gate condition |
| 9.4 | Phase ordering respected | INFO | Cannot confirm |
| 9.5 | Findings gathered before fixes | PASS | This report constitutes structured review |
| 9.6 | Feedback routed | INFO | To be completed after delivery |

**Category 9 verdict: FAIL** — 2 checks fail: 9.1, 9.3

---

## Cross-Category Connections

- **C1 — Invalid `purpose: guide` (1.4, 5.7):** Same root cause. Single fix.
- **C2 — `status: current` + absent `veracityStatus` (1.8, 6.6, 9.1):** Per P39, fix: `status: draft` + `veracityStatus: unverified`.
- **C3 — Broken links (8.1, 4.4):** 4 broken internal links affect the page's exit paths (check 4.4 also touched). Fix list must include link corrections before publication.
- **C4 — REVIEW flags + veracity (6.1, 6.2, 6.9):** SME review required for port reuse, file-based secret syntax, `-maxSessions`. Until resolved, `veracityStatus: unverified` stays.

---

## Blocking Decisions

| ID | Decision | Blocks | Owner |
|---|---|---|---|
| BD-1 | Correct `purpose` value: `configure` confirmed? | F-02 | Alison |
| BD-2 | SME confirmation: port 8935 reuse for both GW→O and O→T; file-based `orchSecret`; `-maxSessions` on O process | F-07, veracity pass | Rick + Alison |
| BD-3 | Broken link targets: `run-a-pool`, `large-scale-operations`, `gateways-orchestrators` — do these pages exist under different paths, or are they planned but not yet created? | F-08 | Alison |

---

## Verdict Summary

**Overall: NEEDS WORK**

**19 checks fail: 1.1, 1.4, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 3.1, 3.2, 3.4, 3.7, 5.7, 6.1, 6.2, 6.6, 6.9, 8.1, 9.1, 9.3**

Content, voice, and structure are strong. Four broken internal links are the most urgent issue. Taxonomy and veracity failures are systematic and follow the same patterns as other pages in this section.

---

## Prioritised Fix List

**F-01 — CRITICAL** (8.1): 4 broken internal links
Fix: (a) `/v2/orchestrators/guides/advanced-operations/run-a-pool` — no entry in docs.json. Either remove the link or create the page. Closest existing page: `pool-operators` at line 2941. (b) `/v2/orchestrators/guides/advanced-operations/large-scale-operations` — no entry. Closest: `scale-operations` at line 2942. (c) `/v2/orchestrators/guides/advanced-operations/gateways-orchestrators` — no entry. Closest: `gateway-relationships` at line 2939 or `gateway-orchestrator-interface` at line 2940. (d) `/v2/orchestrators/guides/monitoring-and-tools/troubleshooting` — wrong folder name. Fix to `/v2/orchestrators/guides/monitoring-and-tooling/troubleshooting`. Confirm BD-3 before (a)–(c).

**F-02 — HIGH** (1.4, 5.7): `purpose: guide` — invalid
Fix: `purpose: configure`.
Proposed: `purpose: configure` — confirm before applying (BD-1).

**F-03 — HIGH** (1.8, 6.6, 9.1): `status: current` + absent `veracityStatus`
Fix: `status: draft` + `veracityStatus: unverified`.
Proposed: `status: draft` / `veracityStatus: unverified` — confirm before applying.

**F-04 — HIGH** (1.9, P41): Missing `industry`
Fix: `industry: ["technical"]`.
Proposed: `industry: ["technical"]` — confirm before applying.

**F-05 — HIGH** (1.10, P41): Missing `niche`
Fix: `niche: ["infrastructure", "hardware"]`.
Proposed: `niche: ["infrastructure", "hardware"]` — confirm before applying.

**F-06 — HIGH** (1.6): Missing `complexity`
Fix: `complexity: intermediate`.
Proposed: `complexity: intermediate` — confirm before applying.

**F-07 — HIGH** (1.7): Missing `lifecycleStage`
Fix: `lifecycleStage: setup`.
Proposed: `lifecycleStage: setup` — confirm before applying.

**F-08 — HIGH** (1.11): Description 231 chars — exceeds 160
Fix: `Split go-livepeer into separate Orchestrator and Transcoder processes on separate machines — keystore isolation, independent GPU scaling, and stable reward calling.`
Proposed: the above text (trim to ≤160 chars) — confirm before applying.

**F-09 — HIGH** (6.1, 6.2, 6.9): Unverified SME-dependent claims (port reuse, `orchSecret` file path, `-maxSessions`)
Fix: BD-2 resolution required. Until resolved, `veracityStatus: unverified` stays. Add named source to each REVIEW flag (go-livepeer CLI reference or GitHub).

**F-10 — MEDIUM** (3.1): `Verifying the connection` (18/25)
Fix: Rename to `Connection Verification`.

**F-11 — MEDIUM** (3.1): `Relationship to Pool Operations` (18/25)
Fix: Rename to `O-T Split and Pool Architecture`.

**F-12 — MEDIUM** (3.1, 3.2): `Security Considerations` (18/25)
Fix: Rename to `Security Model`.

**F-13 — MEDIUM** (3.1, 3.2): `Troubleshooting` (19/25) — domain-anchor missing
Fix: Rename to `Split Setup Troubleshooting`.
